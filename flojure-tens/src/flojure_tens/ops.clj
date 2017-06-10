(ns flojure-tens.ops
  (:require [flojure-tens.data-type :as dt]
            [flojure-tens.graph :as gr]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.shape :as sh]
            [flojure-tens.common])
  (:import [flojure_tens.common Graph Op]))

(defn Op? [o] (= (type o) Op))

(defn compute-hash
  [{:keys [id] :as plan}]
  (if id
    (hash id)
    (hash plan)))

(defn assoc-hash-to-each-node
  [plan]
  (if (map? plan)
    (let [p (update plan :inputs #(mapv assoc-hash-to-each-node %))]
      (assoc p
             :hash
             (compute-hash plan)))
    plan))

(defn get-op-by-plan
  [^Graph g plan]
  ((gr/nodes g)
   ((gr/ids-by-hash g) (compute-hash plan))))

(defn- set-attr
  [builder-handle k [ty val]]
  (def k1 k)
  (def t1 ty)
  (def v1 val)
  (case ty
    :tensor (tfnative.OperationBuilder/setAttrTensor builder-handle
                                                     (name k)
                                                     (:handle val))
    :type (tfnative.OperationBuilder/setAttrType builder-handle
                                                 (name k)
                                                 (dt/->tf-attr-val :int64 val))
    :shape (tfnative.OperationBuilder/setAttrShape builder-handle
                                                   (name k)
                                                   (dt/->tf-attr-val :int64 val)
                                                   (count val))
    (tfnative.OperationBuilder/setAttr builder-handle
                                       (name k)
                                       (dt/->tf-attr-val ty val))))

(defn- set-attrs
  [builder-handle m]
  (doseq [[k v] m]
    (set-attr builder-handle k v))
  builder-handle)

(defn- add-inputs
  [builder-handle inputs]
  (doseq [input-handle inputs]
    (tfnative.OperationBuilder/addInput builder-handle
                                        input-handle
                                        0)) ;; hard coded to 0, because we should really be dealing with `output`s here
  builder-handle)

(defn build-add-op
  [^Graph g op-kw tf-op hsh input-ops & [attrs explicit-id variable-assigment]]
  (locking (:handle-lock g)
    (let [attrs' (or attrs {})
          id (or explicit-id (keyword (name (gensym (name op-kw)))))
          input-handles (mapv :handle input-ops)
          handle (-> g
                     :handle
                     (tfnative.OperationBuilder/allocate tf-op (name id))
                     (set-attrs attrs')
                     (add-inputs input-handles)
                     tfnative.OperationBuilder/finish)
          op (Op. id
                  op-kw
                  (mapv :id input-ops)
                  hsh
                  attrs'
                  handle
                  (gr/mk-graph-ref g))]
      (gr/add-op-to-state! g op variable-assigment)
      op)))

(defmulti build (fn [g op-plan hsh] (:op op-plan)))

(defmacro def-simple-op
  [op-name op-kw tf-op-str]
  `[(defn ~op-name [& ~'inputs] {:op ~op-kw :inputs (vec ~'inputs)})
    (defmethod ~'build ~op-kw [~'g {:keys [~'inputs]} ~'hsh]
      (build-add-op ~'g ~op-kw ~tf-op-str ~'hsh ~'inputs))])

(defmacro def-super-simple-op
  [name1]
  (let [name-str (name name1)
        op-kw (keyword name-str)
        tf-op (apply str
                     (-> name-str first clojure.string/upper-case)
                     (rest name-str))]
    `(def-simple-op ~name1 ~op-kw ~tf-op)))

;; OP DEFS ===================

(def-super-simple-op add)
(def-super-simple-op sub)
(def-super-simple-op sigmoid)
(def-simple-op matmul :matmul "MatMul")
(def-super-simple-op div)
(def-super-simple-op pow)
(def-super-simple-op mul)

(defn c [value] {:op :const :value value})
(defmethod build :const
  [g {:keys [value]} hsh]
  (let [dtype (dt/data-type-of-whatever value)
        tensor (tsr/create-from-value value)]
    (build-add-op g
                  :const
                  "Const"
                  hsh
                  []
                  {:dtype [:type (:native dtype)]
                   :value [:tensor tensor]})))


(defn variable [id value & [opts]] {:op :variable
                                    :id id
                                    :value value
                                    :opts (or opts {})})
(defmethod build :variable
  [g {:keys [id value opts]} hsh]
  (build-add-op g
                :variable
                "Variable"
                hsh
                []
                {:shape [:shape (sh/shape-of-seq value)]
                 :dtype [:type (:native (dt/data-type-of-whatever value))]}
                id
                value))

(defn assign [vari value]
  (let [vari-id (or (:id vari)
                    vari)]
    (when (-> vari-id keyword? not)
      (throw (Exception. (str "Invalid assignment target: " vari))))
    {:op :assign
     :vari vari-id
     :inputs [value]}))

(defmethod build :assign
  [g {:keys [vari inputs]} hsh]
  (build-add-op g
                :assign
                "Assign"
                hsh
                [(-> g :state deref :nodes vari)
                 (first inputs)]))


(defn transpose [input] {:op :transpose
                         :inputs [input]})
(defmethod build :transpose
  [g {:keys [inputs]} hsh]
  (build-add-op g
                :transpose
                "Transpose"
                hsh
                [(first inputs)
                 (build g (c [(int 1) (int 0)]) (compute-hash (c [(int 1) (int 0)])))]))

;; END OP DEFS ===================

(defn id [id-kw op]
  (assoc op
         :id id-kw))

(defn add-by-handle
  [^Graph g handle]
  )
