(ns flojure-tens.scratch3
  (:require [flojure-tens.core :as ft]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops :as o]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.data-type :as dt]))


(ft/produce (o/add 1 3))

(ft/produce (p/v :v 2.))

(ft/produce
 (p/v {:id :v :shape [2 2]}
      p/random-uniform))

(ft/produce
 (sc/with-variable-scope {:initializer p/random-uniform}
   (p/v {:id :v :shape [2 2]})))
