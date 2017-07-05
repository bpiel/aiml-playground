(ns flojure-tens.op-build
  (:require [flojure-tens.op-node :as op-node]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.data-type :as dt]
            [flojure-tens.graph :as gr]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.shape :as sh]
            [flojure-tens.util :as util]
            [flatland.protobuf.core :as pr]
            [flojure-tens.common])
  (:import [flojure_tens.common Graph Op GraphRef]
           [org.tensorflow.framework OpDef OpList NodeDef]))

(defn get-attr-bytes
  [v]
  (cond (string? v) (.getBytes v)
        (dt/is-goole-pb-byte-string? v) (.toByteArray v)
        :else (byte-array v)))

(defn- set-attr
  [builder-handle k v ty]
  (case ty ;; wtf
    :tensor (tfnative.OperationBuilder/setAttrTensor builder-handle
                                                     k v)
    :type (if (keyword? v)
            (tfnative.OperationBuilder/setAttrType builder-handle
                                                   k
                                                   (-> v dt/protobuf->dt :native))
            (tfnative.OperationBuilder/setAttrType builder-handle
                                                   k v))
    :shape (tfnative.OperationBuilder/setAttrShape builder-handle
                                                   k v (count v))
    :string (tfnative.OperationBuilder/setAttrString builder-handle
                                                     k (get-attr-bytes v))
    :int (tfnative.OperationBuilder/setAttrInt builder-handle
                                                 k v)
    (tfnative.OperationBuilder/setAttr builder-handle
                                       k v)))


(defn- set-attrs
  [builder-handle attrs]
  (doseq [[k v ty] attrs]
    (set-attr builder-handle k v ty))
  builder-handle)

(defn- add-inputs
  [builder-handle inputs]
  (doseq [input-handle inputs]
    (if (vector? input-handle)
      (tfnative.OperationBuilder/addInputList builder-handle
                                              (long-array input-handle)
                                              (int-array (repeat (count input-handle)
                                                                  0)))      
      (tfnative.OperationBuilder/addInput builder-handle
                                          input-handle
                                          0))) ;; hard coded to 0, because we should really be dealing with `output`s here
  builder-handle)

(defn- add-ctrl-inputs
  [builder-handle inputs]
  (doseq [input-handle inputs]
    (tfnative.OperationBuilder/addControlInput builder-handle
                                               input-handle))
  builder-handle)

;; TODO combine w/ utils
(defn mk-id
  [scope id op counter]
  (let [s (or (some->> scope
                       not-empty
                       (map name)
                       (clojure.string/join "/")
                       (#(str % "/")))
              "")
        id' (or (some-> id name)
                (str (name op) "_" (swap! counter inc)))]
    (str s id')))

(defn- get-handles
  [inputs]
  (util/visit-pre #(if (map? %) (:handle %) %)
                  vector?
                  identity
                  #(vec %2)
                  inputs))

(defn build-op
  [{:keys [^Graph g plan op-def]}]
  (let [{:keys [id scope op hsh inputs ctrl-inputs attrs assignment output-idx]} plan
        {tf-op :name def-attr :attr} op-def
        attrs' (or attrs {})
        id' (mk-id scope id op (:counter g))
        input-handles (get-handles inputs)
        ctrl-input-handles (mapv :handle ctrl-inputs)
        handle (-> g
                   :handle
                   (tfnative.OperationBuilder/allocate tf-op (name id'))
                   (set-attrs attrs')
                   (add-inputs input-handles)
                   (add-ctrl-inputs ctrl-input-handles)
                   tfnative.OperationBuilder/finish)
        {:keys [num-outputs shapes dtypes]} (op-node/get-output-info (:handle g) handle)
        oper (Op. id'
                  [] ;; TODO add :0, when appropriate
                  op
                  (mapv :id inputs)
                  (mapv :id ctrl-inputs)
                  hsh
                  attrs'
                  handle
                  (or output-idx 0)
                  num-outputs
                  shapes
                  dtypes
                  (gr/mk-graph-ref g))]
    (gr/add-op-to-state! g oper assignment)
    oper))


(defmulti build (fn [g op-plan] (:op op-plan)))



#_(defn assoc-meta-handle-to-plan
  [p]
  (assoc p :handle (-> p meta ::op-node/handle)))

#_(defn discover-new-plans-from-id*
  [^Graph g discovered id]
  (if (contains? discovered id)
    [discovered []]
    (let [plan (assoc-meta-handle-to-plan (op-node/id->plan g id))]
      [(assoc discovered
              (:id plan)
              plan)
       (flatten (into (:inputs plan)
                      (:ctrl-inputs plan)))])))

#_(defn discover-new-plans-from-ids
  [^Graph g ids]
  (loop [discovered (into {}
                          (for [[k _] (-> g :state deref :nodes)]
                            [k nil]))
         [id & tail] ids]
    (if id
      (let [[d ids'] (discover-new-plans-from-id* g discovered id)]
        (recur d (into ids' tail)))
      (->> discovered
           vals
           (remove nil?)))))


#_(defn discover-new-ops-from-handles
  [^Graph g op-handles]
  (let [gref (gr/mk-graph-ref g)]
    (mapv #(op-node/create-from-handle (:handle %) gref )
          (discover-new-plans-from-ids g
                                       (map op-node/handle->id op-handles)))))







