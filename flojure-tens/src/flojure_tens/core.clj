(ns flojure-tens.core
  (:require [flojure-tens.thing2 :as t])
  (:import [org.tensorflow Graph Tensor Shape DataType Session]))




#_(defn tf-vals [v]
  "Convert value into type acceptable to TensorFlow
  Persistent data structures become arrays
  Longs become 32bit integers
  Doubles become floats"
  (cond
    (coll? v)
    (if (coll? (first v))
      (to-array (map tf-vals v))
      (case (.getName (type (first v)))
        "java.lang.Long" (int-array v)
        "java.lang.Double" (float-array v)))
    (= (.getName (type v)) "java.lang.Long") (int v)
    (= (.getName (type v)) "java.lang.Double") (float v)
    ;; anything else
    true v))

(defn tf-obj? [x]
  (if (re-find #"org.tensorflow" (.getName (class x)))
    true false))

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

(def tensor->shape
  #(let [arr (.shape %)]
     (if (> (count arr) 0)
       (Shape/make
        (aget arr 0)
        (java.util.Arrays/copyOfRange arr 1 (count arr)))
       (Shape/scalar))))



(def clj->tensor #(Tensor/create (tf-vals %)))


(def default-graph (new org.tensorflow.Graph))

;; As a design choice from tensorflow graph needs to be
(def global-variables (atom []))

#_(defn op-builder
  "Returns a function which creates an operation for the graph"
  ([op-profile] (op-builder op-profile default-graph))
  ([op-profile graph]
   (let [{:keys [operation node-name attrs inputs]
          :or {node-name (str (gensym operation)) attrs {} inputs []}
          } op-profile
         tf-operation (utils-thread graph
                       (flatten
                        [#(.opBuilder % operation node-name)
                         ;; set attributes if any
                         (map
                          (fn [attr]
                            #(.setAttr % (name (first attr)) (second attr)))
                          attrs)
                         ;; add inputs if any
                         (map (fn [input]
                                #(.addInput %
                                            (if (fn? input) (input graph) input)
                                            )) inputs)
                         #(.build %)
                         #(.output % 0)]))
         ]
     tf-operation)))

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
  ([op-profile] (op-builder op-profile default-graph))
  ([op-profile graph]
   (let [{:keys [operation node-name attrs inputs]
          :or {node-name (str (gensym operation)) attrs {} inputs []}
          } op-profile
         tf-operation (-> graph
                          (graph->op-builder operation node-name)
                          (set-attrs attrs)
                          (add-inputs inputs)
                          build
                         (output 0))
         ]
     tf-operation)))

;; OPS ==================================================

(defn constant [val]
  (let [tensor (clj->tensor val)]
    (op-builder
     {:operation "Const"
      :attrs {:dtype (.dataType tensor)
              :value tensor
              }})))

(defn assign [var val]
  (op-builder
   {:operation "Assign"
    :inputs [var (if (tf-obj? val)
                   val
                   (constant val))]}))

(defn variable
  ([val] (variable val {}))
  ([val bits]
   (let [tensor (clj->tensor val)
         var (op-builder
              (merge
               {:operation "Variable"
                :attrs {:shape (tensor->shape tensor)
                        :dtype (.dataType tensor)}
                } bits))]     
     var)))

(defn sigmoid [a]
  (op-builder
   {:operation "Sigmoid"
    :inputs [a]}))

(defn matmul [a b]
  (op-builder
   {:operation "MatMul"
    :inputs [a b]}))

(defn div [a b]
  (op-builder
   {:operation "Div"
    :inputs [a b]}))

(defn pow [a b]
  (op-builder
   {:operation "Pow"
    :inputs [a b]}))

(defn sub [a b]
  (op-builder
   {:operation "Sub"
    :inputs [a b]}))

(defn mult [a b]
  (op-builder
   {:operation "Mul"
    :inputs [a b]}))

(defn transpose [a]
  (op-builder
   {:operation "Transpose"
    :inputs [a (constant [1 0])]}))

;; ======================================================

#_(def graph (new Graph))

#_(def tensor-1
  (let [tensor
        (Tensor/create
         (int-array
          [111 222 333]
          ))]
    (-> graph
     (.opBuilder "Const" "tensor-1")
     (.setAttr "dtype" (.dataType tensor))
     (.setAttr "value" tensor)
     .build
     (.output 0))))

(def tensor-1b
  (constant [11 22 33]))

(def session-1 (new Session default-graph))

(def result-1b
  (-> session-1
      .runner
      (.fetch tensor-1b)
      .run
      (.get 0)
      (.copyTo (int-array 3))))


#_ (map int result-1b)


#_(def result-1
  (-> session-1
      .runner
      (.fetch "tensor-1")
      .run
      (.get 0)
      (.copyTo (int-array 13))
      ))

;; ======================================================

(def training-data
  ;; input => output
  [ [0. 0. 1.]   [0.]
    [0. 1. 1.]   [1.]
    [1. 1. 1.]   [1.]
   [1. 0. 1.]   [0.] ])

(def inputs (constant (take-nth 2 training-data)))
(def outputs (constant (take-nth 2 (rest training-data))))

(def weights
  (variable
   (repeatedly 3 (fn [] (repeatedly 1 #(dec (rand 2)))))))

(defn network [x]
  (sigmoid (matmul x weights)))

(defn error [network-output]
  (div 
   (pow 
    (sub outputs network-output) 
    (constant 2.)) 
   (constant 2.)))

(defn error' [network-output]
  (sub network-output outputs))

(defn sigmoid' [x]
  (mult x (sub (constant 1.) x)))

(defn deltas [network-output]
  (matmul
   (transpose inputs)
   (mult
    (error' (network inputs))
    (sigmoid' (network inputs)))))

(def train-network
  (assign weights (sub weights (deltas (network inputs)))))

(network inputs)

(def result-nn1
      (-> session-1
          .runner
          (.fetch (network inputs))
          .run
          (.get 0)
          (.copyTo (int-array 1))
          ))

(.getCollections default-graph "GLOBAL_VARIABLES")

;; ======================================================

(def training-data
  ;; input => output
  [ [0. 0. 1.]   [0.]
    [0. 1. 1.]   [1.]
    [1. 1. 1.]   [1.]
   [1. 0. 1.]   [0.] ])

;; dreams

(let [inputs (t/c (take-nth 2 training-data))
      outputs (t/c (take-nth 2 (rest training-data)))
      weights (t/variable (repeatedly 3 (fn [] (repeatedly 1 #(dec (rand 2))))))
      network (fn [x]
                (-> x
                    (t/matmul weights)
                    t/sigmoid))
      network-inputs (network inputs)
      error (fn [network-output]
              (-> outputs
                  (t/sub network-output)
                  (t/pow 2.)
                  (t/div 2.)))
      error' (fn [network-output]
               (t/sub network-output
                      outputs))
      sigmoid' (fn [x]
                 (->> x
                      (t/sub 1.)
                      (t/mul x)))
      deltas (fn [network-output]
               (->> (sigmoid' network-inputs)
                    (t/mul (error' network-inputs))
                    (t/matmul (t/transpose inputs))))
      train-network (->> network-inputs
                         deltas
                         (t/sub weights)
                         (t/assign weights))]
  (t/run train-network))

;; multi runs
(let [inputs (t/c (take-nth 2 training-data))
      outputs (t/c (take-nth 2 (rest training-data)))
      weights (t/variable (repeatedly 3 (fn [] (repeatedly 1 #(dec (rand 2))))))
      network (fn [x]
                (-> x
                    (t/matmul weights)
                    t/sigmoid))
      network-inputs (network inputs)
      error (fn [network-output]
              (-> outputs
                  (t/sub network-output)
                  (t/pow 2.)
                  (t/div 2.)))
      error' (fn [network-output]
               (t/sub network-output
                      outputs))
      sigmoid' (fn [x]
                 (->> x
                      (t/sub 1.)
                      (t/mul x)))
      deltas (fn [network-output]
               (->> (sigmoid' network-inputs)
                    (t/mul (error' network-inputs))
                    (t/matmul (t/transpose inputs))))
      train-network (->> network-inputs
                         deltas
                         (t/sub weights)
                         (t/assign weights))
      [graph-map session] (t/setup [train-network])]
  (t/init-variable-assignments graph-map session)
  (dotimes [_ 1000]
    (t/run-session-ops graph-map session [train-network]))
  [(t/run-session-ops graph-map session [(network [[1. 0. 1.]])])
   (t/run-session-ops graph-map session [(network [[1. 1. 1.]])])])

(t/run (t/add 1. 2.))

(t/run (t/add (t/variable 10.) (t/variable 2.)))


;; ======================================================

;; 2_fullyconnected

(def image-size 28)
(def num-labels 10)

(let [tf-train-ds (t/c [1 2 3])
      tf-train-lbls (t/c [4 5 6])
      tf-valid-ds (t/c [7 8 9])
      tf-test-ds (t/c [10 11 12])
      weight (t/id :weights
                   (t/variable (t/truncated-normal [2 3])))
      biases (t/id :biases
                   (t/variable (repeat num-labels 0.)))
      logits (t/add (t/matmul tf-train-ds weights)
                    biases)
      loss (t/mean #_t/reduce-mean (t/softmax-cross-entropy-with-logits tf-train-lbls
                                                               logits))
      optimizer (t/min-optimizer (t/gradient-descent-optimizer 0.5)
                                 loss)
      train-prediction (t/softmax logits)
      valid-prediction (t/softmax (t/add (t/matmul tf-valid-ds
                                                   weights)
                                         biases))
      test-prediction (t/softmax (t/add (t/matmul tf-test-ds
                                                  weights)
                                        biases))]
  (t/run train-prediction))

