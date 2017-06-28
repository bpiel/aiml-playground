(ns flojure-tens.builder
  (:require [flojure-tens.common :as com]
            [flojure-tens.ops2 :as ops]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.op-build :as obld]
            [flojure-tens.graph :as gr]
            [flojure-tens.util :as util]
            [flojure-tens.macros :as mcro])
  (:import [flojure_tens.common Graph Op]))

(defn call-op-builder
  [^Graph g {:keys [output-idx] :as opp} input-ops ctrl-input-ops]
  (let [{:keys [id->node hash->id]} (-> g :state deref)
        hsh (op-node/compute-hash opp)]
    (if-let [op (some-> hsh hash->id id->node)]
      (assoc op :output-idx (or output-idx 0))
      (obld/build g
                  (assoc opp
                         :inputs input-ops
                         :ctrl-inputs ctrl-input-ops
                         :output-idx (or output-idx 0))
                 (op-node/compute-hash opp)))))

(defn call-macro-builder
  [^Graph g {:keys [output-idx] :as opp} input-ops ctrl-input-ops]
  (let [{:keys [macro-hash->outputs]} (-> g :state deref)
        hsh (op-node/compute-hash opp)]
    (let [outputs (or (some-> hsh macro-hash->outputs)
                      (mcro/build g
                                  (assoc opp
                                         :inputs input-ops
                                         :ctrl-inputs ctrl-input-ops)
                                  hsh))]
      (def o1 outputs)
      (nth outputs (or output-idx 0)))))

(defn- apply-plan-to-graph
  [^Graph g opp]
  (let [op (cond
             (com/Op? opp) opp
             (map? opp)
             (let [{:keys [inputs ctrl-inputs]} opp
                   input-ops (mapv (partial apply-plan-to-graph g)
                                   inputs)
                   ctrl-input-ops (mapv (partial apply-plan-to-graph g)
                                        ctrl-inputs)]
               (if (:macro opp)
                 (->> (call-macro-builder g opp input-ops ctrl-input-ops)
                      (apply-plan-to-graph g))
                 (call-op-builder g opp input-ops ctrl-input-ops)))
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





















