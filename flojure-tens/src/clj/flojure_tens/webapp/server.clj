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

#_(respond-transit {:nodes [{:data {:id "a"}} {:data {:id "b"}} {:data {:id "c"}}] :edges [{:data {:source "a" :target "b"}}]})

#_(respond-transit (flojure-tens.dev/w-mk-graph-def2))

#_(defmacro xxx [x]
  `(clojure.pprint/pprint [~*file* ~(meta (second &form))]))

#_(xxx (inc 3))

(defn ws-inbound-handler
  [ws data]
  (def ib-data data)
  (println data))

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
