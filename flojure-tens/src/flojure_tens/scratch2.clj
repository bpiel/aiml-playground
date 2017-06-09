(ns flojure-tens.scratch2
  (:require [flojure-tens.core :as ft]
            [flojure-tens.session :as sess]
            [flojure-tens.ops :as ops]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.data-type :as dt]))


#_ (def r1 (ft/run-plan (ops/add 1 3)))

#_ (vec (tfnative.Tensor/shape  (-> r1 first :handle)))

#_(flojure-tens.tensor/get-value (first r1))

#_ (tsr/get-value-clj (first r1))


#_(def r1 (ft/fetch-plan-root (ops/add (ops/variable :x 1) 3)))

#_(def s1 (sess/run-plan->session (ops/add (ops/variable :x 1) 3)))
