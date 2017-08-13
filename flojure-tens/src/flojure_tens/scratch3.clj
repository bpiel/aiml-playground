(ns flojure-tens.scratch3
  (:require [flojure-tens.core :as ft]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops :as o]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
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


(let [data (dt/convert-whatever [[1. 2.]
                                 [1. 3.]
                                 [2. 3.]
                                 [2. 4.]]
                                dt/float-kw)
      labels (dt/convert-whatever [[1.]
                                   [2.]
                                   [1.]
                                   [2.]]
                                  dt/float-kw)
      {:keys [out opt]}
      (ut/id$->> (o/placeholder :data
                                dt/float-kw
                                [4 2]) ;; 4 => -1
                 
                 (l/dense {:units 100})
                 (l/dense {:units 100})
                 (l/dense {:id :out
                           :units 1})
                 (o/sub (o/placeholder :labels
                                       dt/float-kw
                                       [4 1]))
                 o/abs
                 (p/reduce-mean :loss)
                 (p/grad-desc-opt :opt))]
  (ft/with-close-let [{:keys [graph] :as s} (ft/build-all->session [opt])]
    (ft/run-global-vars-init s)
    (ft/run-all s (repeat 1000 opt) {:data data
                                    :labels labels})
    (ft/produce s out {:data data})))

(let [v1 (p/v :v1 [1. 2. 3.])
      v2 (p/v :v2 [0. 2. 4.])
      {:keys [loss opt]}
      (ut/id$->> (o/sub v1 v2)
                 o/abs
                 (p/reduce-mean :loss)
                 (p/grad-desc-opt :opt))]
  (ft/with-close-let [{:keys [graph] :as s} (ft/build->session opt)]
    (ft/run-global-vars-init s)
    (ft/run-all s (repeat 1000 opt))
    (ft/fetch-all s [v1 v2])))

(let [v1 (p/v :v1 [1. 2. 3.])
      {:keys [loss opt]}
      (ut/id$->> (o/sigmoid v1)
                 (p/grad-desc-opt :opt))]
  (ft/with-close-let [{:keys [graph] :as s} (ft/build->session opt)]
    (ft/run-global-vars-init s)
    (ft/run-all s (repeat 10 opt))
    (ft/fetch-all s [v1])))


















































