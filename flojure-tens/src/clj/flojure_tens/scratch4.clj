(ns flojure-tens.scratch4
  (:require [flojure-tens.core :as ft]
            [flojure-tens.dev :as d]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.macros :as m]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
            [flojure-tens.data-type :as dt]
            [flojure-tens.tensor :as tsr]
            [flatland.protobuf.core :as pr]
            [flojure-tens.tf-record :as tfr]
            flojure-tens.grad-desc-opt2
            flojure-tens.gradients2)
  (:import [org.tensorflow.framework Summary]
           [flojure_tens.tensor TensorNDArray]
           [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [org.tensorflow.util Event]
           [flojure_tens.common Graph Op GraphRef]
           [com.macfaq.io LittleEndianOutputStream]))

(def SummaryP (pr/protodef Summary))

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
  (let [{:keys [graph] :as s} (ft/build-all->session [opt])]
    (d/mk-ns s)
    (ft/run-global-vars-init s)
    (ft/run-all s (repeat 1000 opt) {:data data
                                     :labels labels})
    (ft/produce s out {:data data})))

(let [rn (o/random-standard-normal {:dtype dt/float-kw} [100])
      hist (o/histogram-summary "hist" rn)
      {:keys [graph] :as s} (ft/build-all->session [rn hist])]
  (ft/run-global-vars-init s)
  (def h (ft/produce s hist)))

(let [rn (o/identity-tf 1.2)
      smry (o/scalar-summary :smry "smry" rn)
      {:keys [graph] :as s} (ft/build-all->session [rn smry])]
  (ft/run-global-vars-init s)
  (def smry
    (ft/produce s smry)))

(count (.getBytes h))

(count (.getBytes smry))

(def xxx (pr/protobuf-load SummaryP h))

(def xxx2 (pr/protobuf-load SummaryP smry))

(clojure.pprint/pprint  xxx)
