(ns flojure-tens.op-node
  (:require [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.data-type :as dt]
            [flojure-tens.graph :as gr]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.shape :as sh]
            [flatland.protobuf.core :as pr]
            [flojure-tens.common])
  (:import [flojure_tens.common Graph Op GraphRef]
           [org.tensorflow.framework OpDef OpList NodeDef]))


(def NodeDefP (pr/protodef NodeDef))


(defn Op? [o] (= (type o) Op))

;; TODO move to utils?
(defn compute-hash
  [{:keys [id] :as plan}]
  (if id
    (hash id)
    (hash plan)))

(defn get-op-by-plan
  [^Graph g plan]
  ((gr/nodes g)
   ((gr/ids-by-hash g) (compute-hash plan))))

(defn node-def->plan
  [node-def]
  (let [op-def (-> node-def :op ogc/proc-op-list-by-name)]
    (ogc/call-config node-def :node-def->plan [node-def op-def])))


(defn handle->plan
  [op-handle]
  (with-meta
    (node-def->plan  (pr/protobuf-load NodeDefP (tfnative.Operation/toNodeDef op-handle)))
    {::handle op-handle}))

(defn id->plan
  [^Graph g id]
  (handle->plan (tfnative.Graph/operation (:handle g) (name id))))

(defn handle->id
  [op-handle]
  (->> op-handle
       (tfnative.Operation/toNodeDef)
       (pr/protobuf-load NodeDefP)
       :name
       keyword))

(defn create-from-handle
  ([op-handle output-idx ^GraphRef graph-ref]
   (let [{:keys [id op aliases inputs ctrl-inputs attrs] :as plan} (handle->plan op-handle)]
     (Op. id (or aliases []) op inputs ctrl-inputs (compute-hash plan) attrs op-handle (or output-idx 0) graph-ref)))
  ([op-handle ^GraphRef graph-ref]
   (create-from-handle op-handle 0 graph-ref)))

(defn assoc-plan-output
  [plan & [idx]]
  (assoc plan :output-idx (or idx 0)))

