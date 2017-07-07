(ns flojure-tens.builder
  (:require [flojure-tens.common :as com]
            [flojure-tens.ops :as ops]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.op-build :as obld]
            [flojure-tens.graph :as gr]
            [flojure-tens.util :as util]
            [flojure-tens.macros :as mcro])
  (:import [flojure_tens.common Graph Op]))

(defn call-op-builder
  [^Graph g {:keys [output-idx] :as plan} input-ops ctrl-input-ops]
  (obld/build g
              (assoc plan
                     :inputs input-ops
                     :ctrl-inputs ctrl-input-ops
                     :output-idx (or output-idx 0)
                     :hsh (op-node/compute-hash plan))))

(defn call-macro-builder
  [^Graph g {:keys [output-idx] :as plan} input-ops ctrl-input-ops]
  (-> (mcro/build g
                  (assoc plan
                         :inputs input-ops
                         :ctrl-inputs ctrl-input-ops
                         :hsh (mcro/compute-hash plan)))
      (nth (or output-idx 0))))

(declare apply-plan-to-graph)

(defn built?
  [^Graph g plan]
  (let [plan' (if (map? plan)
                plan
                (ops/c plan))
        output-idx (if (map? plan)
                     (:output-idx plan')
                     0)]
    (cond (com/Op? plan) plan
          (:op plan')
          (let [{:keys [id->node hash->id]} (-> g :state deref)
                hsh (op-node/compute-hash plan')]
            (when-let [node (some-> hsh hash->id id->node)]
              (assoc node :output-idx (or output-idx 0))))
          (:macro plan)
          (let [{:keys [macro-hash->outputs]} (-> g :state deref)
                hsh (mcro/compute-hash plan)]
            (when-let [outputs (some-> hsh macro-hash->outputs)]
              (built? g  (nth outputs (or output-idx 0)))))))) ;; TODO prevent macros from being run for each output-idx

(defn- apply-plan-to-graph*
  [^Graph g plan post]
  (let [{:keys [inputs ctrl-inputs]} (if (map? post)
                                       post
                                       {})]
    (cond
      (:op plan) (call-op-builder g plan inputs ctrl-inputs)
      (:macro plan) (->> (call-macro-builder g plan inputs ctrl-inputs)
                         (apply-plan-to-graph g))
      :else (call-op-builder g (ops/c plan) [] []))))

(defn- apply-plan-to-graph
  [^Graph g plan]
  (->> plan
       (util/pre-visit-plan (partial mcro/pre-build-macro g))
       (util/visit-plan (partial built? g)
                        nil
                        (partial apply-plan-to-graph* g)
                        nil)))

(defn build->graph
  [^Graph g plan]
  (apply-plan-to-graph g plan)
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
