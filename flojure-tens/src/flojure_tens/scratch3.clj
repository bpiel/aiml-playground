(ns flojure-tens.scratch3
  (:require [flojure-tens.core :as ft]
            [flojure-tens.dev :as d]
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
                                [-1 2])
                 (l/dense {:units 100})
                 (l/dense {:units 100})
                 (l/dense {:id :out
                           :units 1})
                 (o/sub (o/placeholder :labels
                                       dt/float-kw
                                       [-1 1]))
                 o/abs
                 (p/reduce-mean :loss)
                 (p/grad-desc-opt :opt))]
  (#_ft/with-close-let
    let [{:keys [graph] :as s} (ft/build-all->session [opt])]
    (d/mk-ns s)
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
  (let [{:keys [graph] :as s} (ft/build->session opt)]
    (d/mk-ns s)
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

(let [v1 (p/v :v1 [1. 2. 3.])
      {:keys [loss opt]}
      (ut/id$->> (o/sigmoid v1)
                 (p/grad-desc-opt :opt))]
  (let [{:keys [graph] :as s} (ft/build->session opt)]
    (ft/run-global-vars-init s)
    (ft/run-all s (repeat 10 opt))
    (ft/fetch-all s [v1])
    (d/mk-ns s)))

(defn color*
  [c]
  (- c 0.2))

(def colors
  ;;  a b d e g l n o r u w y
  {0 (mapv color* [0 0 1 1 0 0 0 0 1 0 0 0]) ;; red
   1 (mapv color* [1 0 0 1 1 0 1 1 1 0 0 0]) ;; orange
   2 (mapv color* [0 0 0 1 0 2 0 1 0 0 1 1]) ;; yellow
   3 (mapv color* [0 0 0 2 1 0 0 0 1 0 0 0]) ;; green
   4 (mapv color* [0 1 0 1 0 1 0 0 0 1 0 0])}) ;; blue

(def dataset (for [a (range 0 5)
                   b (range 0 5)]
               {:a (colors a)
                :b (colors b)
                :d [(float (- b a))]}))

(def a-in (mapv :a dataset))
(def b-in (mapv :b dataset))
(def d (mapv :d dataset))

(let [feed {:a a-in :b b-in :d d}
      feed2 {:a (mapv colors (range 0 5))
             :b (mapv colors (range 0 5))}
      {:keys [a-out]}
      (ut/id$->> (o/placeholder :a dt/float-kw [-1 12])
                 (l/dense {:units 64})
                 (l/dense {:id :a-out :units 1}))
      {:keys [b-out loss opt]}
      (ut/id$->> (o/placeholder :b dt/float-kw [-1 12])
                 (l/dense {:units 64})
                 (l/dense {:id :b-out
                           :units 1})
                 (o/sub $ a-out)
                 (o/sub $ (o/placeholder :d dt/float-kw [-1 1]))
                 o/abs
                 (p/reduce-mean :loss)
                 (p/grad-desc-opt :opt))]
  (ft/with-close-let [{:keys [graph] :as s} (ft/build->session opt)]
    (ft/run-global-vars-init s)
    (println "================")
    (clojure.pprint/pprint (ft/fetch-all s [loss] feed))
    (clojure.pprint/pprint (ft/fetch-all s [b-out a-out] feed2))
    (ft/run-all s (repeat 10000 opt) feed)
    (clojure.pprint/pprint (ft/fetch-all s [loss] feed))
    (clojure.pprint/pprint (ft/fetch-all s [b-out a-out] feed2))))


(let [{:keys [a loss opt]}
      (ut/id$->> (p/v :a [-2. 1. 0.])
                 (o/sub [0. 1.5 4.])
                 o/abs
                 (p/reduce-mean :loss)
                 (p/grad-desc-opt :opt))]
  (ft/with-close-let [{:keys [graph] :as s} (ft/build->session opt)]
    (d/mk-ns s)
    (ft/run-global-vars-init s)
    (clojure.pprint/pprint (ft/fetch-all s [loss]))
    (ft/run-all s (repeat 1000 opt))
    (clojure.pprint/pprint (ft/fetch-all s [loss a]))))

(let [p (o/identity-tf (o/placeholder :x dt/float-kw [1]))
      s (ft/build->session p)]
  (ft/produce s p {:x [4.]}))

