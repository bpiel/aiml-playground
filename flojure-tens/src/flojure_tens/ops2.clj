(ns flojure-tens.ops2
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



(defn dyn-defn
  [name-sym bodies]
  (eval `(def ~name-sym
           (fn ~@bodies))))

(defn dyn-defmethod
  [name-sym dispatch-val body]
  (eval `(defmethod ~name-sym ~dispatch-val
           ~body)))




#_(defn get-op-fn-body*
  [fn-name-sym op-def]
  (let [input-syms (mapv #(-> % :name symbol)
                         (:input-arg op-def))
        arg-vec (conj input-syms 'attrs)]
    (list (list arg-vec
                {:op (get-op-kw op-def)
                 :inputs input-syms
                 :attrs  'attrs})
          (list input-syms
                `(~fn-name-sym ~@input-syms
                  {})))))



(defn dyn-defn-op [op-def]
  (let [fn-name-sym (ogc/get-op-fn-name-sym op-def)]
    (dyn-defn
     fn-name-sym
     (ogc/get-op-fn-body fn-name-sym op-def))))

(defn- set-attr
  [builder-handle k v ty]
  (case ty
    :tensor (tfnative.OperationBuilder/setAttrTensor builder-handle
                                                     k v)
    :type (tfnative.OperationBuilder/setAttrType builder-handle
                                                 k v)
    :shape (tfnative.OperationBuilder/setAttrShape builder-handle
                                                   k v (count v))
    :string (tfnative.OperationBuilder/setAttrString builder-handle
                                                     k (.toByteArray v))
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
    (tfnative.OperationBuilder/addInput builder-handle
                                        input-handle
                                        0)) ;; hard coded to 0, because we should really be dealing with `output`s here
  builder-handle)


(defn build-op
  [{:keys [^Graph g plan hsh op-def]}]
  (let [{:keys [id op inputs attrs assignment]} plan
        {tf-op :name def-attr :attr} op-def
        attrs' (or attrs {})
        id' (or id (keyword (name (gensym (name op)))))
        input-handles (mapv :handle inputs)
        handle (-> g
                   :handle
                   (tfnative.OperationBuilder/allocate tf-op (name id'))
                   (set-attrs attrs')
                   (add-inputs input-handles)
                   tfnative.OperationBuilder/finish)
        oper (Op. id'
                  op
                  (mapv :id inputs)
                  hsh
                  attrs'
                  handle
                  (gr/mk-graph-ref g))]
    (gr/add-op-to-state! g oper assignment)
    oper))

(defmulti build (fn [g op-plan hsh] (:op op-plan)))

(defn get-op-build-fn-body
  [op-def]
  (list '[g plan hsh]
        `(build-op
          (~(ogc/fetch-pre-build-op-fn op-def)
           {:g ~'g :plan ~'plan :hsh ~'hsh
            :op-def (~'ogc/proc-op-list-by-name ~(:name op-def))}))))

(defn dyn-defmethod-op-build
  [op-def]
  (try
    (let [{:keys [kw]} op-def]
      (dyn-defmethod 'build
                     kw
                     (get-op-build-fn-body op-def)))
    (catch Exception e
      (println "vvvvvvvvvvvvvvvvvvvvvv")
      (clojure.pprint/pprint op-def)
      (clojure.pprint/pprint e)
      (println "^^^^^^^^^^^^^^^^^"))))

(defn dyn-def-op-fns [op-def]
  (let [op (ogc/op-def-processor op-def)]
    (dyn-defn-op op)
    (dyn-defmethod-op-build op)))


(defn clean-ns []
  (doseq [sym (keys (ns-publics *ns*))]
    (ns-unmap *ns* sym)))

#_ (clean-ns)

#_(clojure.pprint/pprint (op-list-by-name "Assign"))

(defn handle->plan
  [op-handle]
  (ogc/node-def->plan  (pr/protobuf-load NodeDefP (tfnative.Operation/toNodeDef op-handle))))

(defn create-from-handle
  [op-handle ^GraphRef graph-ref]
  (let [{:keys [id op inputs attrs] :as plan} (handle->plan op-handle)]
    (Op. id op inputs (compute-hash plan) attrs op-handle graph-ref)))

(defn handle->expr
  [op-handle]
  (ogc/plan->expr (handle->plan op-handle)
                  "flojure-tens.ops2"))

(do
  (doseq [op-def (:op ogc/op-list)]
    (try
      (when-not (ogc/skip-ops (:name op-def))
        (dyn-def-op-fns op-def))
      (catch Exception e
        (clojure.pprint/pprint op-def)
        (throw e))))
  (println "done"))

#_(handle->expr (first flojure-tens.scratch2/op-handles))

#_ (clojure.pprint/pprint  (map handle->expr flojure-tens.scratch2/op-handles))

#_(handle->plan (first flojure-tens.scratch2/op-handles))
