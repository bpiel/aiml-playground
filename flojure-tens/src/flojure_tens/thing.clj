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
                         (output 0))
        ]
    tf-operation))

;; ======================================

(defn add [& args] (apply vector :add args))

(defn c [value] [:const value])

(defn- add* [g & args] (op-builder g "Add" args))

(defn- const* [g value]
  (let [tensor (clj->tensor value)]
    (op-builder g
                "Const"
                []
                {:dtype (.dataType tensor)
                 :value tensor})))

(def kw->fn
  {:add #'add*
   :const #'const*})

(defn ->graph-obj*
  [graph [head & body]]
  (case head
    :const (const* graph (first body))
    (let [body' (map (partial ->graph-obj* graph)
                     body)]
      (-> head
          kw->fn
          (apply graph body')))))

(defn ->graph-obj
  [graph-def]
  (let [g (org.tensorflow.Graph.)]
    [(->graph-obj* g graph-def)
     g]))

(defn run
  [graph-def]
  (let [[output g] (->graph-obj graph-def)
        s  (Session. g)]
    (-> s
        .runner
        (.fetch output)
        .run
        (.get 0)
        tensor->clj)))
