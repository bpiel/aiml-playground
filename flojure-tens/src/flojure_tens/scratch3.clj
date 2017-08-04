(ns flojure-tens.scratch3
  (:require [flojure-tens.core :as ft]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops :as o]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.data-type :as dt]))


(ft/produce (o/add 1 3))

(ft/produce (p/v :v 2.))

(ft/produce
 (p/v :v {:shape [2 2]} p/random-uniform))

(ft/produce
 (sc/with-variable-scope {:initializer p/random-uniform
                          :regularizer p/l2-loss}
   (p/v {:id :v :shape [2 1]})))

(let [ph (o/placeholder :ph1 dt/float-kw [])
      ph' (o/identity-tf ph)
      s (ft/build->session ph')]
  (ft/produce s  ph' {ph (float 3.)}))

(let [ph (o/placeholder :ph1 dt/float-kw [1])
      ph' (o/identity-tf ph)
      s (ft/build->session ph')]
  (ft/produce s  ph' {ph [(float 3.)]}))

(let [v (p/v :v 4.)
      g (ft/build->graph v)
      s1 (ft/graph->session g)
      _ (ft/run-global-vars-init s1)
      s2 (ft/graph->session g)]
  
  (ft/produce s1 v))
