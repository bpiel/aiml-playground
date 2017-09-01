(ns flojure-tens.webapp.server
  (:require [compojure.core :as c]
            [compojure.handler :as ch]
            [compojure.route :as cr]
            [aleph.http :as ah]
            ;; [manifold.stream :as ms]
            [taoensso.timbre :as log]
            [cognitect.transit :as t]
            [clojure.java.io :as io])
  (:gen-class))

(def server (atom nil))

(c/defroutes routes
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
