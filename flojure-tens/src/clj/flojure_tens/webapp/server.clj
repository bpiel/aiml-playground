(ns flojure-tens.webapp.server
  (:require [compojure.core :as c]
            [compojure.handler :as ch]
            [compojure.route :as cr]
            [aleph.http :as ah]
            [manifold.stream :as ms]
            [taoensso.timbre :as log]
            [cognitect.transit :as t]
            [clojure.java.io :as io]
            [flojure-tens.tensor :as tsr])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream]
           [flojure_tens.tensor TensorNDArray])
  (:gen-class))

(defonce server (atom nil))
(defonce ws-conn (atom nil))

(def view (atom {:left [:div]
                 :right [:div]
                 :selected nil}))
(def selected-node (atom nil))

(defn read-transit-string
  [s]
  (-> s
      .getBytes
      (ByteArrayInputStream.)
      (t/reader :json)
      t/read))

(defn ->transit
  [v]
  (def v1 v)
  (let [baos (ByteArrayOutputStream.)
        tw (t/writer baos :json
                     {:handlers
                      {flojure_tens.tensor.TensorNDArray (t/write-handler
                                                          (constantly "list")
                                                          vec
                                                          str)}})]
    (t/write tw v)
    (.toByteArray baos)))

(defn respond-transit
  [data & [ws]]
  (when-let [ws' (or ws @ws-conn)]
    (ms/try-put! ws'
                 (String. (->transit data))
                 200)))

(defn diff-views
  [v1 v2]
  v2
  #_(merge-with (fn [a b]
                (when-not (= a b)
                  (or b [:div "empty"])))
              v1 v2))

(defn update-view
  [new-view]
#_  (clojure.pprint/pprint new-view)
  (let [view' @view]
    (reset! view new-view)
    (->> new-view
         (diff-views view')
         respond-transit)))

(defn ws-inbound-handler
  [ws data]
  (def ib-data data)
  (println data)
  (let [data' (read-transit-string data)]
    (when-let [{:keys [select]} data']
      (reset! selected-node select))))

(defn ws-handler
  [req]
  (let [ws @(ah/websocket-connection req)
        current-ws @ws-conn]
    (when current-ws
      (try (ms/close! current-ws)
           (catch Exception e)))
    (reset! ws-conn ws)
    #_(ms/on-closed ws unsub-fn)
    (ms/consume (partial ws-inbound-handler
                         ws)
                ws)))

(c/defroutes routes
  (c/GET "/ws" [] #'ws-handler)
  (c/GET "/" [] (fn [_] (-> "public/app.html" io/resource slurp)))
  (cr/resources "/"))

(defn start-server []
  (log/info "starting http server...")
  (try
    (reset! server
            (ah/start-server #'routes {:port 5080}))
    (log/info "started http server on port 5080")
    (catch Exception e
      (log/error e "EXCEPTION while trying to start http server"))))

(defn stop-server []
  (log/info "stopping http server...")
  (try
    (@server :timeout 100)
    (reset! server nil)
    (log/info "stopped http server on port 5080")
    (catch Exception e
      (log/error e "EXCEPTION while trying to stop http server"))))

#_ (stop-server)

#_(start-server)




