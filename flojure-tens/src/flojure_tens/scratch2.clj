(ns flojure-tens.scratch2
  (:require [flojure-tens.core :as ft]
            [flojure-tens.ops :as ops]))


#_ (def r1 (ft/run-plan (ops/add 1. 2.)))

#_ (vec (tfnative.Tensor/shape  (-> r1 first :handle)))

#_(flojure-tens.tensor/get-value (first r1))
