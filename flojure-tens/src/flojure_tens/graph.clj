(ns flojure-tens.graph
  (:require [flojure-tens.common]
            [flojure-tens.tensor :as tsr])
  (:import [flojure_tens.common GraphRef Graph Op]))

(defn nodes [^Graph {:keys [handle-lock state]}] (:nodes @state))
(defn variable-assignments [^Graph {:keys [handle-lock state]}] (:variable-assigments @state))
(defn ids-by-hash [^Graph {:keys [handle-lock state]}] (:ids-by-hash @state))
(defn ids-by-handle [^Graph {:keys [handle-lock state]}] (:ids-by-handle @state))
(defn ids-by-input [^Graph {:keys [handle-lock state]}] (:ids-by-input @state))

(defn init-graph-state []
  {:nodes {}
   :ids-by-hash {}
   :ids-by-handle {}
   :ids-by-input {}})

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
  (if value
    (assoc m
           (:id op)
           value)
    m))

;; TODO add all outputs by id,hash,input???
(defn- add-op-to-state*
  [graph-state ^Op op variable-assigment]
  (-> graph-state
      (update :nodes add-to-nodes op)
      (update :ids-by-hash add-to-ids-by-hash op)
      (update :ids-by-handle add-to-ids-by-handle op)
      (update :ids-by-input add-to-ids-by-input op)
      (update :variable-assigments add-to-variable-assignments op variable-assigment)))

(defn add-op-to-state!
  [^Graph {:keys [handle handle-lock state]} ^Op op & [variable-assigment]]
  (swap! state add-op-to-state* op (or variable-assigment [])))

(defn mk-graph-ref
  [^Graph g]
  (GraphRef. (:closed g) (:handle-lock g)))

(defn create
  ([] (Graph. (tfnative.Graph/allocate)
              (atom (init-graph-state))
              (atom false)
              (Object.)))
  ([graph-handle] (Graph. graph-handle
                          (atom (init-graph-state))
                          (atom false)
                          (Object.))))

(defn- spit-bytes
  "Is there a better way?"
  [f ba]
  (let [bais (java.io.ByteArrayInputStream. ba)]
    (with-open [out (clojure.java.io/output-stream f)]
      (clojure.java.io/copy bais out))))

(defn ->graph-def-byte-array [^Graph g]
  (tfnative.Graph/toGraphDef (:handle g)))

(defn write-graph-def-to-file [filename ^Graph g]
  (spit-bytes filename (->graph-def-byte-array g)))

(defn add-output-by-handle! [^Graph g handle idx]
    
  (throw (Exception. "NOT IMPLEMENTED")))

