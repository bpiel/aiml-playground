(ns flojure-tens.core
  (:require [flojure-tens.session :as sess])
  (:import [com.billpiel.flojure_tens Graph]))

(defn plans->graph
  [graph-plan])

(defn init-variable-assignments [^Graph g])

(defn run [graph-plan ops]
  (let [g (plans->graph graph-plan)
        s (sess/create g)]
    (sess/run s (sess/mk-run-req ops))))
