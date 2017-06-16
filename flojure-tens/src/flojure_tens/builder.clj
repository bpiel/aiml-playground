(ns flojure-tens.builder
  (:require flojure-tens.common
            [flojure-tens.ops2 :as ops]
            [flojure-tens.graph :as gr]
            [flojure-tens.util :as util]
            [flojure-tens.macros :as mcro])
  (:import [flojure_tens.common Graph Op]))

(defn call-op-builder
  [^Graph g opp input-ops]
  (let [{:keys [nodes ids-by-hash]} (-> g :state deref)
        hsh (ops/compute-hash opp)]
    (if-let [op (some-> hsh ids-by-hash nodes)]
      op
      (ops/build g
                 (assoc opp :inputs input-ops)
                 (ops/compute-hash opp)))))

(defn- apply-plan-to-graph
  [^Graph g opp]
  (let [op (cond
             (map? opp)
             (let [{:keys [inputs]} opp
                   input-ops (mapv (partial apply-plan-to-graph g)
                                   inputs)]
               (if (:macro opp)
                 (mcro/build-macro g (assoc opp :inputs input-ops))
                 (call-op-builder g opp input-ops)))
             (ops/Op? opp) opp
             :else (call-op-builder g (ops/c opp) []))]
    op))

(defn visit-pre-plan
  [f gp]
  (util/visit-pre #(if (vector? %)
                      %
                      (f %))
                   #(or (vector? %)
                        (some-> % :inputs vector?))
                   #(if (vector? %)
                      %
                      (:inputs %))
                   #(if (vector? %)
                      (vec %2)
                      (assoc % :inputs (vec %2)))
                   gp))

(defn build->graph
  [^Graph g plan]
  (->> plan
       (visit-pre-plan (partial mcro/pre-build-macro g))
       (apply-plan-to-graph g))
  g)

(defn mk-init-assignments-plan
  [^Graph g]
  (let [va (gr/variable-assignments g)]
    (mapv (fn [[vari value]] (ops/assign vari value))
          va)))

(defn build-init-assignments->graph
  [^Graph g]
  (let [inits (mk-init-assignments-plan g)]
    (doseq [p inits]
      (build->graph g p))
    g))
