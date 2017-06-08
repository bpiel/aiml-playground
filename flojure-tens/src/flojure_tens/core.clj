(ns flojure-tens.core
  (:require [flojure-tens.builder :as bdr]
            [flojure-tens.session :as sess]
            [flojure-tens.tensor :as tsr])
  (:import [com.billpiel.flojure_tens Graph]))

(defn init-variable-assignments [^Graph g])

(defn run [graph-plan ops]
  (let [g (bdr/graph-plan->graph graph-plan)
        s (sess/create g)]
    (sess/run s (sess/mk-run-req ops))))

(defn eval-op [graph-plan op]
  (->> op
       (run graph-plan)
       last
       tsr/get-value))
