(ns flojure-tens.plan-time-comps
  (:require [flojure-tens.ops :as o]
            [flojure-tens.ops-gen-util :as ogu]
            [flojure-tens.scope :as sc]
            [flojure-tens.data-type :as dt]
            [clojure.walk :as w]))

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


(defn- mk-initilizer-from-template
  [template shape dtype]
  (update template :attrs
          (partial w/postwalk-replace
                   {:$/shape shape
                    :$/dtype dtype})))

(defn- mk-initilizer
  [init {:keys [initializer]} shape dtype]
  (let [init' (or init initializer)
        dtype' (or dtype dt/float-kw)]
    (cond (fn? init')
          (mk-initilizer-from-template (init')
                                       shape
                                       dtype')
          (map? init') (mk-initilizer-from-template init'
                                                   shape
                                                   dtype')
          (nil? shape) init'
          ;; TODO handle dtype/init mismatch
          ;; TODO reshape the constant
          :else init')))

(defn v
  "MACRO Variable"
  ([id-attrs] (v (ogu/id-attrs->id id-attrs)
                 (ogu/id-attrs->attrs id-attrs)
                 nil))
  ([id-attrs init] (v (ogu/id-attrs->id id-attrs)
                      (ogu/id-attrs->attrs id-attrs)
                      init))
  ([id {:keys [dtype shape regularizer] :as attrs} init]
   (assoc {:macro :variable
           :id id
           :inputs [(mk-initilizer init sc/*var-scope* shape dtype)]
           :attrs (or attrs {})}
          :scope
          (:scope sc/*var-scope* []))))

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

(defn random-uniform
  ([]
   {:macro :random-uniform
    :attrs {:shape :$/shape
            :dtype :$/dtype}}))
