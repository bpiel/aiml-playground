(ns flojure-tens.ops
  (:require [flojure-tens.data-type :as dt])
  (:import [com.billpiel.flojure_tens Graph]))

(defrecord Op [id op inputs attrs handle ^Graph graph])

(defn- set-attrs
  [builder-handle m]
  (doseq [[k v] m]
    (tfnative.OperationBuilder/setAttr builder-handle
                                       (name k)
                                       v))
  builder-handle)

(defn- add-inputs
  [builder-handle inputs]
  (doseq [[input-handle idx] (map vector inputs (range))]
    (tfnative.OperationBuilder/addInput builder-handle
                                        input-handle
                                        idx))
  builder-handle)

(defn build*
  [^Graph g op input-ops & [attrs node-name]]
  (let [attrs' (or attrs {})
        node-name' (or node-name (str (gensym op)))
        handle (-> (.getNativeHandle g)                         
                   (tfnative.OperationBuilder/allocate op node-name)
                   (set-attrs attrs')
                   (add-inputs (map :handle input-ops))
                   tfnative.OperationBuilder/finish
                   #_(output 0))]
    (Op. node-name (keyword op) (mapv :id input-ops) attrs' handle g)))

(defmulti build (fn [op-map] (:op op-map)))

(defmacro def-simple-op
  [op-name op-kw tf-op-str]
  `[(defn ~op-name [& ~'inputs] {:op ~op-kw :inputs (vec ~'inputs)})
    (defmethod ~'build ~op-kw [~'g {:keys [~'inputs]}] {:op (build* ~'g ~tf-op-str ~'inputs)})])

(defmacro def-super-simple-op
  [name1]
  (let [name-str (name name1)
        op-kw (keyword name-str)
        tf-op (apply str
                     (-> name-str first clojure.string/upper-case)
                     (rest name-str))]
    `(def-simple-op ~name1 ~op-kw ~tf-op)))

(macroexpand '(def-super-simple-op add))

(def-super-simple-op add)
(def-super-simple-op sub)
(def-super-simple-op sigmoid)
(def-simple-op matmul :matmul "MatMul")
(def-super-simple-op div)
(def-super-simple-op pow)
(def-super-simple-op mul)

;; can constants be multidimensional?????????
(defn c [value] {:op :const :value value})
(defmethod build :const
  [g {:keys [value]}]
  (let [dtype (or (dt/data-type-of value)
                  (dt/data-type-of-seq value)) ;; TODO hmmmmmmmmmmmmmmmmm..........
        tensor (dt/vec->md-array value)]
    {:op (build* g
                 "Const"
                 []
                 {:dtype (:native dtype)
                  :value tensor})}))

(defn id [id-kw op]
  (assoc op
         :id id-kw))
