(ns flojure-tens.builder
  (:require flojure-tens.common
            [flojure-tens.ops :as ops]
            [flojure-tens.graph :as gr])
  (:import [flojure_tens.common Graph Op]))

(defn call-op-builder
  [^Graph g opp input-ops]
  (ops/build g
             (assoc opp :inputs input-ops)
             (ops/compute-hash opp)))

(defn- apply-op-plan-to-graph!
  [^Graph g opp]
  (let [op (cond
             (map? opp)
             (let [{:keys [inputs]} opp
                   input-ops (mapv (partial apply-op-plan-to-graph! g)
                                   inputs)]
               (call-op-builder g opp input-ops))
             (ops/Op? opp) opp
             :else (call-op-builder g (ops/c opp) []))]
    op))

(defn apply-plan-to-graph!
  [^Graph g gp]
  (cond (sequential? gp)
        (mapv (partial apply-op-plan-to-graph! g)
              gp)
        (map? gp)
        (apply-op-plan-to-graph! g gp)
        :else
        (throw (Exception. "This plan makes no sense!"))))

(defn graph-plan->graph+ops
  [gp]
  (let [g (gr/create)]
    [g (apply-plan-to-graph! g gp)]))

(defn graph-plan->graph
  [gp]
  (-> gp
      graph-plan->graph+ops
      first))

(defn mk-assignments-plan
  [^Graph g]
  (let [va (-> g :state deref :variable-assigments)]
    (mapv (fn [[vari value]] (ops/assign vari (ops/c value)))
          va)))

(defn build-init-assignment-ops
  [^Graph g]
  (->> g
       mk-assignments-plan
       (apply-plan-to-graph! g)))

