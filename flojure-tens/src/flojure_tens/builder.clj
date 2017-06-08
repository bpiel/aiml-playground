(ns flojure-tens.builder
  (:require [flojure-tens.ops :as ops])
  (:import [com.billpiel.flojure_tens Graph]
           flojure_tens.ops.Op))




(defn build-add-op [^Graph g opp] (.add g (ops/build g opp)))

(defn- apply-op-plan-to-graph!
  [^Graph g opp]
  (let [op (cond
             (map? opp)
             (let [{:keys [inputs]} opp
                   input-ops (mapv (partial apply-op-plan-to-graph! g)
                                   inputs)]
               (build-add-op g opp input-ops))
             (ops/Op? opp) opp
             :else (build-add-op g (ops/c opp)))]
    opp))

(defn- apply-plan-to-graph!
  [^Graph g gp]
  (cond (sequential? gp)
        (mapv (partial apply-op-plan-to-graph! g)
              gp)
        (map? gp)
        (apply-op-plan-to-graph! g gp)
        :else
        (throw (Exception. "This plan makes no sense!")))
  )

(defn graph-plan->graph+ops
  [gp]
  (let [g (Graph.)]
    [g (apply-plan-to-graph! (Graph.) gp)]))



















































