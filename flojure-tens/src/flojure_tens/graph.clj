(ns flojure-tens.graph
  (:require [flojure-tens.common]
            [flojure-tens.tensor :as tsr])
  (:import [flojure_tens.common GraphRef Graph Op]))

(defn id->node [^Graph {:keys [handle-lock state]}] (:id->node @state))
(defn variable-assignments [^Graph {:keys [handle-lock state]}] (:variable-assigments @state))
(defn hash->id [^Graph {:keys [handle-lock state]}] (:hash->id @state))
(defn handle->id [^Graph {:keys [handle-lock state]}] (:handle->id @state))

(defn init-graph-state []
  {:id->node {}
   :hash->id {}
   :handle->id {}
   :macro-hash->outputs {}
   :collections {}})

;; don't overwrite!
(defn- add-to-id->node
  [m {:keys [id] :as op}]
  (merge {id op} m))

(defn- add-to-hash->id
  [m {:keys [id hash] :as op}]
  (merge {hash id} m))

(defn- add-to-handle->id
  [m {:keys [id handle] :as op}]
  (merge {handle id} m))


(defn- add-to-variable-assignments
  [m ^Op op value]
  (if value
    (assoc m
           (:id op)
           value)
    m))

(defn- add-to-collections
  [m ^Op op colls]
  (let [{:keys [id]} op]
    (reduce (fn [agg c]
              (update agg
                      c
                      #(conj (or % [])
                             id)))
            m
            colls)))

(defn- add-op-to-state*
  [graph-state ^Op op collections]
  (-> graph-state
      (update :id->node add-to-id->node op)
      (update :hash->id add-to-hash->id op)
      (update :handle->id add-to-handle->id op)
      (update :collections add-to-collections op collections)))

(defn add-op-to-state!
  [^Graph {:keys [handle handle-lock state]} ^Op op & [collections]]
  (swap! state add-op-to-state* op collections))

(defn add-macro-to-state*
  [graph-state hsh outputs]
  (update graph-state
          :macro-hash->outputs
          assoc hsh outputs))

(defn add-macro-to-state!
  [^Graph {:keys [handle handle-lock state]} hsh outputs]
  (swap! state add-macro-to-state* hsh outputs))

(defn mk-graph-ref
  [^Graph g]
  (GraphRef. (:closed g) (:handle-lock g)))

(defn create
  ([] (Graph. (tfnative.Graph/allocate)
              (atom (init-graph-state))
              (atom false)
              (Object.)
              (atom 0)))
  ([graph-handle] (Graph. graph-handle
                          (atom (init-graph-state))
                          (atom false)
                          (Object.)
                          (atom 0))))

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

(defn get-global-var-init-assign-ops
  [^Graph g]
  (let [i->n (id->node g)]
    (->> g
         :state
         deref
         :collections
         :global-var-inits
         (map i->n))))
