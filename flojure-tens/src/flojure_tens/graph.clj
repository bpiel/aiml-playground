(ns flojure-tens.graph
  (:require [flojure-tens.common]
            [flojure-tens.tensor :as tsr])
  (:import [flojure_tens.common Graph Op]))

(defn nodes [^Graph {:keys [handle-lock state]}] (:nodes @state))
(defn variable-assigments [^Graph {:keys [handle-lock state]}] (:variable-assigments @state))
(defn ids-by-hash [^Graph {:keys [handle-lock state]}] (:ids-by-hash @state))
(defn ids-by-handle [^Graph {:keys [handle-lock state]}] (:ids-by-handle @state))
(defn ids-by-input [^Graph {:keys [handle-lock state]}] (:ids-by-input @state))

(defn init-graph-state []
  {:nodes {}
   :ids-by-hash {}
   :ids-by-handle {}
   :ids-by-input {}
   :closed false})

;; don't overwrite!
(defn- add-to-nodes
  [m {:keys [id] :as op}]
  (merge {id op} m))

(defn- add-to-ids-by-hash
  [m {:keys [id hash] :as op}]
  (merge {hash id} m))

(defn- add-to-ids-by-handle
  [m {:keys [id handle] :as op}]
  (merge {handle id} m))


(defn- add-to-ids-by-input
  [m {:keys [id inputs]}]
  (reduce (fn [agg item]
            (update agg
                    item
                    #(conj (or % [])
                           %2)
                    id))
          m
          (map :id inputs)))

(defn- add-to-variable-assignments
  [m ^Op op value]
  (assoc m
         (:id op)
         (tsr/create-from-value value)))

(defn- add-op-to-state*
  [graph-state ^Op op variable-assigment]
  (-> graph-state
      (update :nodes add-to-nodes op)
      (update :ids-by-hash add-to-ids-by-hash op)
      (update :ids-by-handle add-to-ids-by-hash op)
      (update :ids-by-input add-to-ids-by-input op)
      (update :variable-assigments add-to-variable-assignments op variable-assigment)))

(defn add-op-to-state!
  [^Graph {:keys [handle handle-lock state]} ^Op op variable-assigment]
  (swap! state add-op-to-state* op variable-assigments))

(defn create
  ([] (Graph. (tfnative.Graph/allocate)
              (atom (init-graph-state))
              (Object.)))
  ([graph-handle] (Graph. graph-handle
                          (atom (init-graph-state))
                          (Object.))))
