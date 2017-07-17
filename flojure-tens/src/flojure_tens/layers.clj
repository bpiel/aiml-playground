(ns flojure-tens.layers
  (:require [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.macros :as mc]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph Op]))

(defn- mk-kernel
  [{:keys [input-shape filters kernel-size dtype]}]
  (let [kernel-shape (conj kernel-size (last input-shape) filters)]
    (p/v :kernel
         {:dtype dtype
          :shape }
         
     ))
  )

(defn build-conv2d
  [^Graph g {:keys [id inputs filters kernel-size padding activation]}]

  (let [[input] inputs
        {:keys [shape dtype]} (opn/get-desc-of-output inputs)
        kernel (mk-kernel {:input-shape shape
                           :dtype dtype
                           :filters filters
                           :kernel-size kernel-size})])
  
  o/conv2-d
  o/bias-add
  )

(defn conv2d
  [{:keys [id filters kernel-size padding activation] :as opts} input]
  (merge opts
         {:macro :conv2d
          :inputs [input]}))




























































