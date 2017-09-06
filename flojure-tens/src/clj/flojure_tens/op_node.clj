(ns flojure-tens.op-node
  (:require [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.data-type :as dt]
            [flojure-tens.graph :as gr]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.shape :as sh]
            [flojure-tens.util :as ut]
            [flatland.protobuf.core :as pr]
            [flojure-tens.common])
  (:import [flojure_tens.common Graph Op GraphRef]
           [org.tensorflow.framework OpDef OpList NodeDef]))


(def NodeDefP (pr/protodef NodeDef))


;; TODO move to utils?
(defn compute-hash
  [{:keys [id scope] :as plan}]
  (if id
    (hash [id scope])
    (-> plan
        (dissoc :output-idx)
        hash)))

(defn get-op-by-plan
  [^Graph g plan]
  (->> plan
       compute-hash
       ((gr/hash->id g))
       ((gr/id->node g))))

(defn node-def->plan
  [node-def]
  (let [op-def (-> node-def :op ogc/proc-op-list-by-name)]
    (ogc/call-config node-def :node-def->plan [node-def op-def])))


(defn handle->plan
  [op-handle]
  (with-meta ;; TODO use vary-meta
    (node-def->plan  (pr/protobuf-load NodeDefP (tfnative.Operation/toNodeDef op-handle)))
    {::handle op-handle}))

(defn id->plan
  [^Graph g id]
  (let [{:keys [scoped-id output-idx]} (ut/parse-tf-id id)]
    (assoc (handle->plan (tfnative.Graph/operation (:handle g) scoped-id))
           :output-idx
           output-idx)))

(defn handle->id
  [op-handle]
  (->> op-handle
       (tfnative.Operation/toNodeDef)
       (pr/protobuf-load NodeDefP)
       :name))

(defn get-output-desc-by-handle
  [graph-handle op-handle]
  (let [n-outs (tfnative.Operation/numOutputs op-handle)
        idxs (range n-outs)]
    {:num-outputs n-outs
     :shapes (mapv #(vec (tfnative.Operation/shape graph-handle op-handle %))
                   idxs)
     :dtypes (mapv #(:kw (dt/native->dt (mod (tfnative.Operation/dtype graph-handle op-handle %)
                                           100))) ;; > 100 => ref
                   idxs)}))

(defn get-desc-of-output
  [^Op op]
  (let [{:keys [output-idx shapes dtypes]} op
        o-idx (or output-idx 0)]
    {:dtype (nth dtypes o-idx)
     #_(-> (nth dtypes (or output-idx 0))
           dt/kw->dt
           :native)
     :shape (nth shapes o-idx)}))

(defn create-from-handle
  ([op-handle output-idx ^GraphRef graph-ref]
   (let [{:keys [id op aliases inputs ctrl-inputs attrs] :as plan} (handle->plan op-handle)]
     (Op. id
          (or aliases [])
          op
          inputs
          ctrl-inputs
          (compute-hash plan)
          attrs
          op-handle
          (or output-idx 0)
          1 nil nil ;;TODO
          graph-ref)))
  ([op-handle ^GraphRef graph-ref]
   (create-from-handle op-handle 0 graph-ref)))











