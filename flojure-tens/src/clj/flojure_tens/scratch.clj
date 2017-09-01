(ns flojure-tens.scratch
  (:require [flojure-tens.thing2 :as t])
  (:import [org.tensorflow Graph Tensor Shape DataType Session]))



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

