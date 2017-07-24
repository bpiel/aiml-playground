(ns flojure-tens.plan-time-comps
  (:require [flojure-tens.ops :as o]
            [flojure-tens.macros :as mcro]
            [flojure-tens.ops :as ops]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph]))

(defn safe-shape-div
  [x y]
  (->> y
       o/ones-like
       (o/maximum y)
       (o/floor-div x)))

(defn to-int32
  [x]
  (o/cast-tf {:DstT :int32}
             x))

(defn reduction-dims
  [x axis]
  (or axis
      (o/range-tf (int 0)
                  (o/rank x)
                  (int 1))))

(defn reduced-shape
  [input-shape axes]
  (let [input-shape' (to-int32 input-shape)
        axes' (to-int32 axes)
        input-rank (o/size input-shape')
        axes'' (o/mod-tf (o/add axes' input-rank)
                         input-rank)
        axes-shape (o/shape axes'')]
    (o/dynamic-stitch [(o/range-tf (int 0)
                                   input-rank
                                   (int 1))
                       axes'']
                      [input-shape' (o/fill axes-shape (int 1))])))

(defn reduce-prod
  [input-tensor & {:keys [axis keep-dims id]}]
  (o/prod id
          {:keep_dims (true? keep-dims)}
          input-tensor
          (reduction-dims input-tensor axis)))

;; https://github.com/tensorflow/tensorflow/blob/3a64879a86e46908ad90a387efe56ad32be61e94/tensorflow/python/ops/math_ops.py#L1224
(defn reduce-sum
  [input-tensor & {:keys [axis keep-dims id]}]
  (o/sum id
         {:keep_dims (true? keep-dims)}
         input-tensor
         (reduction-dims input-tensor axis)))

(defn broadcast-mul
  [v mx]
  (o/mul (o/expand-dims v (int -1))
         mx))

(defn grad-desc-opt
  "MACRO"
  [id target & [scope]]
  (sc/with-variable-scope (or scope
                              :gradients)
    (sc/assoc-scopes-to-plan
     {:macro :grad-desc-opt
      :id id
      :inputs [target]})))

(defn gradient
  "MACRO"
  [id y dxs output-idx]
  (sc/assoc-scopes-to-plan
   {:macro :grad
    :id id
    :output-idx output-idx
    :inputs [y dxs]}))

(defn- mk-initilizer
  [init shape]
  (cond (nil? shape) init
         ;; TODO replace :$/shape
        (map? init) init
        ;; TODO reshape
        :else init))

(defn v
  "MACRO Variable"
  ([id init] (v id {} init))
  ([id {:keys [shape regularizer] :as attrs} init]
   (sc/assoc-scopes-to-plan
    {:macro :variable
     :id id
     :inputs [(mk-initilizer init shape)]
     :attrs (or attrs {})})))


;; https://github.com/tensorflow/tensorflow/blob/c996c7b381a8eb54f9c7d7b298b24b1715645b68/tensorflow/python/ops/array_ops.py#L1353
(defn zeros
  [shape dtype]
  (let [z (case dtype
            dt/bool-kw false
            dt/string-kw ""
            0)]
    (sc/with-id-scope :zeros
      (o/fill shape
              (o/c z dtype))))) ;; TODO infer type?


;; https://github.com/tensorflow/tensorflow/blob/c996c7b381a8eb54f9c7d7b298b24b1715645b68/tensorflow/python/ops/random_ops.py#L138
(defn truncated-normal
  [shape & [dtype]]
  (o/truncated-normal {:seed (rand-int Integer/MAX_VALUE)
                       :seed2 (rand-int Integer/MAX_VALUE)
                       :dtype (or dtype dt/float-kw)} ;; TODO bad idea?
                      shape))


(defn dropout
  ([keep-prob x]
   (dropout nil keep-prob x {}))
  ([id keep-prob x & [{:keys [noise-shape seed seed2]}]] ;; TODO make signature consistent?
   {:macro :dropout
    :id id
    :inputs [keep-prob x]
    :noise-shape noise-shape
    :seed seed
    :seed2 seed2}))

(defn one-hot
  ([idxs depth]
   (o/one-hot nil {} idxs depth 1. 0.))
  ([id idxs depth]
   (o/one-hot id {} idxs depth 1. 0.))
  ([id attrs idxs depth]
   (o/one-hot id attrs idxs depth 1. 0.)))
