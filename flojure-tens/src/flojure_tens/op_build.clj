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
  (doseq [i inputs]
    (if (vector? i)
      (tfnative.OperationBuilder/addInputList builder-handle
                                              (long-array (map :handle i))
                                              (int-array (map #(:output-idx % 0)
                                                              i)))      
      (tfnative.OperationBuilder/addInput builder-handle
                                          (:handle i)
                                          (:output-idx i 0)))) 
  builder-handle)

(defn- inputs->tf-ids
  [inputs]
  (vec (for [i inputs]
         (if (vector? i)
           (mapv util/mk-tf-id i)
           (util/mk-tf-id i)))))

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
  (util/visit-pre #(do
                     (when (:state %)
                       (throw (Exception. (str "WTF is this? " %))))
                     (if (map? %) (:handle %) %))
                  vector?
                  identity
                  #(vec %2)
                  inputs))

(defn build-op
  [{:keys [^Graph g plan op-def]}]
  (try
    (let [{:keys [id scope op hsh inputs ctrl-inputs attrs output-idx]} plan
          collections (util/get-collections plan)
          {tf-op :name def-attr :attr} op-def
          attrs' (or attrs {})
          id' (mk-id scope id op (:counter g))
          ctrl-input-handles (mapv :handle ctrl-inputs)
          handle (-> g
                     :handle
                     (tfnative.OperationBuilder/allocate tf-op (name id'))
                     (set-attrs attrs')
                     (add-inputs inputs)
                     (add-ctrl-inputs ctrl-input-handles)
                     tfnative.OperationBuilder/finish)
          {:keys [num-outputs shapes dtypes]} (op-node/get-output-info (:handle g) handle)
          node (Op. id'
                    [] ;; TODO add :0, when appropriate
                    op
                    (flatten (inputs->tf-ids inputs)) 
                    (mapv util/mk-tf-id ctrl-inputs)
                    hsh
                    attrs'
                    handle
                    (or output-idx 0)
                    num-outputs
                    shapes
                    dtypes
                    (gr/mk-graph-ref g))]
      (gr/add-op-to-state! g node collections)
      node)
    (catch Exception e
      ;;      (clojure.pprint/pprint plan)
      (def p1 plan)
      #_(clojure.pprint/pprint p1)
      
      (throw e))))

(defmulti build (fn [g op-plan] (:op op-plan)))

