(ns flojure-tens.builder
  (:require flojure-tens.common
            [flojure-tens.ops2 :as ops]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.op-build :as obld]
            [flojure-tens.graph :as gr]
            [flojure-tens.util :as util]
            [flojure-tens.macros :as mcro])
  (:import [flojure_tens.common Graph Op]))

(defn call-op-builder
  [^Graph g opp input-ops ctrl-input-ops]
  (let [{:keys [nodes ids-by-hash]} (-> g :state deref)
        hsh (op-node/compute-hash opp)]
    (if-let [op (some-> hsh ids-by-hash nodes)]
      op
      (obld/build g
                  (assoc opp
                         :inputs input-ops
                         :ctrl-inputs ctrl-input-ops)
                 (op-node/compute-hash opp)))))

(defn- apply-plan-to-graph
  [^Graph g opp]
  (let [op (cond
             (map? opp)
             (let [{:keys [inputs ctrl-inputs]} opp
                   input-ops (mapv (partial apply-plan-to-graph g)
                                   inputs)
                   ctrl-input-ops (mapv (partial apply-plan-to-graph g)
                                        ctrl-inputs)]
               (if (:macro opp)
                 (mcro/build-macro g (assoc opp
                                            :inputs input-ops
                                            :ctrl-inputs ctrl-input-ops))
                 (call-op-builder g opp input-ops ctrl-inputs)))
             (op-node/Op? opp) opp
             :else (call-op-builder g (ops/c opp) [] []))]
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





















