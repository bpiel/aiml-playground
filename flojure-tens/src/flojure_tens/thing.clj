(ns flojure-tens.thing
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

(defn add [& inputs] [:add (vec inputs)])
(defn- add* [g inputs] {:op (op-builder g "Add" inputs)})

(defn sigmoid [& inputs] [:sigmoid (vec inputs)])
(defn- sigmoid* [g inputs] {:op (op-builder g "Sigmoid" inputs)})

(defn matmul [& inputs] [:matmul (vec inputs)])
(defn- matmul* [g inputs] {:op (op-builder g "MatMul" inputs)})

(defn div [& inputs] [:div (vec inputs)])
(defn- div* [g inputs] {:op (op-builder g "Div" inputs)})

(defn pow [& inputs] [:pow (vec inputs)])
(defn- pow* [g inputs] {:op (op-builder g "Pow" inputs)})

(defn sub [& inputs] [:sub (vec inputs)])
(defn- sub* [g inputs] {:op (op-builder g "Sub" inputs)})

(defn mul [& inputs] [:mul (vec inputs)])
(defn- mul* [g inputs] {:op (op-builder g "Mul" inputs)})

(defn transpose [input] [:transpose [input]])
(defn- transpose* [g [input]] {:op (op-builder g "Transpose" [input (:op (const* g nil [1 0]))])})



(defn c [value] [:const [] value])
(defn- const* [g _ value]
  (let [tensor (clj->tensor value)]
    {:op (op-builder g
                     "Const"
                     []
                     {:dtype (.dataType tensor)
                      :value tensor})}))

(defn assign [vari val] [:assign [vari val]])
(defn- assign* [g [vari val]]
  {:op (op-builder g
                   "Assign"
                   [vari
#_                    val
                    (if (tf-obj? val)
                      val
                      (:op (const* g nil val)))])})

(defn variable [value & [opts]] [:variable [] value (or opts {})])
(defn- variable* [g _ value opts]
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
  [op graph-map inputs args]
  (-> op
      kw->fn
      (apply (:graph graph-map)
             inputs
             args)))

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
  (let [[gm' op] (if (vector? v)
                   (let [[head inputs & args] v
                         [gm inputs'] (reduce graph-def-reducer
                                              [graph-map []]
                                              inputs)]
                     [gm (call-op-builder head
                                          gm
                                          inputs'
                                          args)])
                   [graph-map (call-op-builder :const
                                               graph-map
                                               nil
                                               [v])])]
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
    (let [{:keys [op]} (assign* graph [vari val])]
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






















































