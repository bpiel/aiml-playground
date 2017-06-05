(ns flojure-tens.thing2
  (:import [org.tensorflow Graph Tensor Shape DataType Session]))

(defn recursively
  "Apply function to all items in nested data structure if
  condition function is met."
  [apply-if-fn func data]
  (if (apply-if-fn data)
    (func (map (partial recursively apply-if-fn func) data))
    data))

(defn vec->tf-array
  [[f :as v]]
  (cond
    (int? f) (int-array v)
    (float? f) (float-array v)
    :else (to-array v)))


(defn tf-vals [v]
  "Convert value into type acceptable to TensorFlow
  Persistent data structures become arrays
  Longs become 32bit integers
  Doubles become floats"
  (cond
    (sequential? v)
    (->> v
         (map tf-vals)
         vec->tf-array)
    (int? v) (int v) ;; is this really necessary??
    (float? v) (float v)
    :else v))

(def clj->tensor #(Tensor/create (tf-vals %)))

(defn tf-obj? [x]
  (if (re-find #"org.tensorflow" (.getName (class x)))
    true false))

(def array?
  "Works like coll? but returns true if argument is array"
  #(= \[ (first (.getName (.getClass %)))))

(defn make-coll
  "Make a collection of x,y,z... dimensions"
  [fill & dims]
  (case (count dims)
    0 fill
    1 (repeat (first dims) fill)
    (repeat (first dims) (apply (partial make-coll fill) (rest dims)))
    ))

(def tensor->shape
  #(let [arr (.shape %)]
     (if (> (count arr) 0)
       (Shape/make
        (aget arr 0)
        (java.util.Arrays/copyOfRange arr 1 (count arr)))
       (Shape/scalar))))

(defn output-shape [tensor]
  (let [shape (tensor->shape tensor)
        dims (map #(.size shape %)
                  (range (.numDimensions shape)))
        d (case (.name (.dataType tensor))
            "INT32" 0
            "FLOAT" 0.0)]
    (tf-vals
     (apply (partial make-coll d) dims))))

(defn get-tensor-val [tensor]
  (let [copy-to (output-shape tensor)]
    (cond
      (array? copy-to) (.copyTo tensor copy-to)
      (float? copy-to) (.floatValue tensor)
      ((complement float?) copy-to) (.intValue tensor))))

(def tensor->clj (comp (partial recursively array? vec) get-tensor-val))


;; ======================================

(defn graph->op-builder
  [^org.tensorflow.Graph graph op node-name]
  (.opBuilder graph op node-name))

(defn build [^org.tensorflow.OperationBuilder ob] (.build ob))
(defn output [^org.tensorflow.OperationBuilder ob idx] (.output ob idx))

(defn set-attrs
  [^org.tensorflow.OperationBuilder ob m]
  (doseq [[k v] m]
    (.setAttr ob (name k) v))
  ob)

(defn add-inputs
  [^org.tensorflow.OperationBuilder ob inputs]
  (doseq [i inputs]
    (.addInput ob
               i
               #_(if (fn? input)
                 (input graph)
                 input)))
  ob)

(defn op-builder
  "Returns a function which creates an operation for the graph"
  [graph op inputs & [attrs node-name]]
  (let [attrs' (or attrs {})
        node-name' (or node-name (str (gensym op)))
        tf-operation (-> graph
                         (graph->op-builder op node-name')
                         (set-attrs attrs')
                         (add-inputs inputs)
                         build
                         (output 0))]
    tf-operation))

;; ======================================

(defn id [id-kw op]
  (assoc op
         :id id-kw))

(defmacro def-simple-op
  [name1 name2 kw tf-op]
  `[(defn ~name1 [& ~'inputs] {:op ~kw :inputs (vec ~'inputs)})
    (defn- ~name2 [~'g {:keys [~'inputs]}] {:op (op-builder ~'g ~tf-op ~'inputs)})])

(defmacro def-super-simple-op
  [name1]
  (let [name-str (name name1)
        name2 (-> name-str
                  (str "*")
                  symbol)
        op-kw (keyword name-str)
        tf-op (apply str
                     (-> name-str first clojure.string/upper-case)
                     (rest name-str))]
    `(def-simple-op ~name1 ~name2 ~op-kw ~tf-op)))

(def-super-simple-op add)
(def-super-simple-op sub)
(def-super-simple-op sigmoid)
(def-simple-op matmul matmul* :matmul "MatMul")
(def-super-simple-op div)
(def-super-simple-op pow)
(def-super-simple-op mul)

(defn c [value] {:op :const :value value})
(defn- const* [g {:keys [value]}]
  (let [tensor (clj->tensor value)]
    {:op (op-builder g
                     "Const"
                     []
                     {:dtype (.dataType tensor)
                      :value tensor})}))


(defn transpose [input] {:op :transpose
                         :input input})
(defn- transpose* [g {:keys [input]}]
  {:op (op-builder g "Transpose" [input (:op (const* g nil [1 0]))])})


(defn assign [vari val] {:op :assign
                         :vari vari
                         :val val})
(defn- assign* [g {:keys [vari val]}]
  (def i1 [vari val])
  {:op (op-builder g
                   "Assign"
                   [vari
#_                    val
                    (if (tf-obj? val)
                      val
                      (:op (const* g {:value val})))])})

(defn variable [value & [opts]] {:op :variable
                                 :value value
                                 :opts (or opts {})})
(defn- variable* [g {:keys [value opts]}]
  (def g1 g)
  (def v1 value)
  (def o1 opts)
  (let [tensor (clj->tensor value)
        op (op-builder g
                       "Variable"
                       []
                       {:shape (tensor->shape tensor)
                        :dtype (.dataType tensor)})]
    {:op op
     :init-varis [[op value]]}))

(def kw->fn
  {:add #'add*
   :const #'const*
   :assign #'assign*
   :variable #'variable*
   :sigmoid #'sigmoid*
   :matmul #'matmul*
   :div #'div*
   :pow #'pow*
   :sub #'sub*
   :mul #'mul*
   :transpose #'transpose*})

;; ======================================

(defn call-op-builder
  [{:keys [op] :as args} graph-map & [inputs]]
  ((kw->fn op)
   (:graph graph-map)
   (assoc args
          :inputs inputs)))

(defn merge-op-ret-with-graph-map
  [graph-map {:keys [op init-varis]}]
  (-> graph-map
      (assoc :op op)
      (update :init-varis
              into
              init-varis)))

(declare ->graph-obj*)

(defn graph-def-reducer
  [[gm inputs] todo]
  (let [{:keys [op] :as gm'} (->graph-obj* gm todo)]
    [gm' (conj inputs op)]))

(defn ->graph-obj*
  [graph-map v]
  (let [[gm' op] (if (map? v)
                   (let [{:keys [inputs]} v
                         [gm inputs'] (reduce graph-def-reducer
                                              [graph-map []]
                                              inputs)]
                     [gm (call-op-builder v
                                          gm
                                          inputs')])
                   [graph-map (call-op-builder (c v)
                                               graph-map)])]
    (merge-op-ret-with-graph-map gm'
                                 op)))

(defn ->graph-obj
  [graph-def]
  (->graph-obj* {:graph (org.tensorflow.Graph.)
                 :init-varis []}
                graph-def))

(defn init-variable-assignments
  [graph sess pairs]
  (doseq [[vari val] pairs]
    (let [{:keys [op]} (assign* graph {:vari vari :val val})]
      (-> sess
          .runner
          (.fetch (.name (.op op)))
          .run))))

(defn run
  [graph-def]
  (let [{:keys [graph op init-varis]} (->graph-obj graph-def)
        s  (Session. graph)]
    (init-variable-assignments graph s init-varis)
    (-> s
        .runner
        (.fetch op)
        .run
        (.get 0)
        tensor->clj)))
