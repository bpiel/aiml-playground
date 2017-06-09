(ns flojure-tens.scratch2
  (:require [flojure-tens.core :as ft]
            [flojure-tens.session :as sess]
            [flojure-tens.ops :as ops]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.data-type :as dt]
            [flojure-tens.builder :as bdr]))


#_ (def r1 (ft/run-plan (ops/add 1 3)))

#_ (vec (tfnative.Tensor/shape  (-> r1 first :handle)))

#_(flojure-tens.tensor/get-value (first r1))

#_ (tsr/get-value-clj (first r1))


#_(def r1 (ft/fetch-plan-root (ops/c [[1. 2.] [3. 4.]])))

#_(-> r1 first tsr/get-value-clj)

#_(def s1 (sess/run-plan->session (ops/add (ops/variable :x 1) 3)))


(def training-data
  ;; input => output
  [ [0. 0. 1.]   [0.]
    [0. 1. 1.]   [1.]
    [1. 1. 1.]   [1.]
   [1. 0. 1.]   [0.] ])

(let [inputs (ops/c (take-nth 2 training-data))
      outputs (ops/c (take-nth 2 (rest training-data)))
      weights (ops/variable :weights (repeatedly
                                      3 (fn [] (repeatedly 1 #(dec (rand 2))))))
      network (fn [x]
                (-> x
                    (ops/matmul weights)
                    ops/sigmoid))
      network-inputs (network inputs)
      error (fn [network-output]
              (-> outputs
                  (ops/sub network-output)
                  (ops/pow 2.)
                  (ops/div 2.)))
      error' (fn [network-output]
               (ops/sub network-output
                        outputs))
      sigmoid' (fn [x]
                 (->> x
                      (ops/sub 1.)
                      (ops/mul x)))
      deltas (fn [network-output]
               (->> (sigmoid' network-inputs)
                    (ops/mul (error' network-inputs))
                    (ops/matmul (ops/transpose inputs))))
      train-network (->> network-inputs
                         deltas
                         (ops/sub weights)
                         (ops/assign weights))
      session (sess/build-plan->session train-network)
      test1 (network [[1. 0. 1.]])]
  (sess/init-variable-assignments session)
  (dotimes [_ 2000]
    (sess/run-plan-w-session session [train-network]))
  (bdr/apply-plan-to-graph! (:graph session) test1)
  (def r1   (sess/run-plan-w-session session [test1]))
#_    (def r1   (sess/run-plan-w-session session [weights])))

(-> r1 first tsr/get-value-clj)
