(ns flojure-tens.gradients
  (:require [flojure-tens.ops :as o]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.macros :as mcro]
            [flojure-tens.graph :as gr]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as ut])
  (:import [flojure_tens.common Graph]))

(defn -no-gradient-
  [_ _ grads]
  (mapv o/zeros-like
        grads))

;; TODO add ctrl and conj
(defn sin
  [op [x-op] [grad]]
  (->> x-op
       o/cos
       (o/mul grad)
       vector))

;; TODO simplify? eliminate?
(defn op->attrs-map
  [op]
  (into {}
        (for [[k v _] (:attrs op)]
          [(keyword k) v])))

;; TODO conj
(defn mat-mul
  [op [x1 x2] [grad]]
  (let [{ta :transpose_a tb :transpose_b} (op->attrs-map op)]
    (case [(true? ta) (true? tb)]
      [false false]
      [(o/mat-mul nil {:transpose_b true} grad x2)
       (o/mat-mul nil {:transpose_a true} x1 grad)]

      [false true]
      [(o/mat-mul nil {} grad x2)
       (o/mat-mul nil {:transpose_a true} grad x1)]

      [true false]
      [(o/mat-mul nil {:transpose_b true}  x2 grad)
       (o/mat-mul nil {} x1 grad)]

      [true true]
      [(o/mat-mul nil {:transpose_a true :transpose_b true} x2 grad)
       (o/mat-mul nil {:transpose_a true :transpose_b true} grad x1)])))

;; TODO fast path
(defn sum
  [op [x1 x2] [grad]]
  (let [input-shape (o/c (-> x1 :shapes (get (:output-idx x1 0)) )
                         :int32)
        output-shape-kept-dims (p/reduced-shape input-shape x2)
        tile-scaling (p/safe-shape-div input-shape output-shape-kept-dims)
        grad (o/reshape grad output-shape-kept-dims)]
    [(o/tile grad tile-scaling) nil]))

(defn mean
  [op [x1 x2 :as x] [grad]]
  (let [sum-grad (first (sum op x [grad]))
        input-shape (o/shape x1)
        output-shape (o/shape op)
        factor (p/safe-shape-div (p/reduce-prod input-shape)
                                  (p/reduce-prod output-shape))]
    [(o/real-div sum-grad (o/cast-tf {:DstT (-> op :dtypes first)} factor))
     nil]))

;; https://github.com/tensorflow/tensorflow/blob/3a64879a86e46908ad90a387efe56ad32be61e94/tensorflow/python/ops/nn_grad.py#L393
(defn softmax-cross-entropy-with-logits
  [op _ [grad-loss grad-grad]]
  ;; TODO don't assume grad-grad is always zero
  [(p/broadcast-mul grad-loss
                     (assoc op :output-idx 1))
   nil])

;; https://github.com/tensorflow/tensorflow/blob/3a64879a86e46908ad90a387efe56ad32be61e94/tensorflow/python/ops/math_grad.py#L683
(defn add
  [op [x1 x2 :as x] [grad]]
  (let [[s1 s2] (map o/shape x)
        r1 (o/broadcast-gradient-args s1 s2)
        r2 (assoc r1 :output-idx 1)]
    [(o/reshape (p/reduce-sum grad :axis r1)
                s1)
     (o/reshape (p/reduce-sum grad :axis r2)
                s2)]))

;; https://github.com/tensorflow/tensorflow/blob/3a64879a86e46908ad90a387efe56ad32be61e94/tensorflow/python/ops/nn_grad.py#L324
(defn relu
  [op [x1 :as x] [grad]]
  [(o/relu-grad grad op)])

(defn identity-tf
  [op x grads]
  grads)

(defn mul
  [op [x1 x2] [grad]]
  (let [s1 (o/shape x1)
        s2 (o/shape x2)
        r1 (o/broadcast-gradient-args s1 s2)
        r2 (assoc r1 :output-idx 1)
        f (fn [a b r s]
            (-> a
                (o/mul b)
                (p/reduce-sum :axis r)
                (o/reshape s)))]
    [(f grad x2 r1 s1)
     (f x1 grad r2 s2)]))

(defn div
  [op [x1 x2] [grad]]
  (let [s1 (o/shape x1)
        s2 (o/shape x2)
        r1 (o/broadcast-gradient-args s1 s2)
        r2 (assoc r1 :output-idx 1)]
    [(-> grad
         (o/div x2)
         (p/reduce-sum :axis r1)
         (o/reshape s1))
     (ut/$- -> x1
            o/neg
            (o/div x2)
            (o/div x2)
            (o/mat-mul grad $)
            (p/reduce-sum :axis r2)
            (o/reshape s2))]))

(defn l2-loss
  [op [x1] [grad]]
  [(o/mul x1 grad)])

(defn conv2-d
  [op [x0 x1 :as x] [grad]]
  (let [attrs (op->attrs-map op)
        [s0 s1] (map o/shape x)]
    [(o/conv2-d-backprop-input attrs
                               s0
                               x1
                               grad)
     (o/conv2-d-backprop-filter attrs
                                x0
                                s1
                                grad)]))

(defn max-pool
  [op [x0] [grad]]
  (let [attrs (op->attrs-map op)]
    [(o/max-pool-grad attrs
                      x0
                      (assoc op :output-idx 0)
                      grad)]))

(defn bias-add
  [op _ [grad]]
  [grad
   (o/bias-add-grad {:data_format "NHWC"}
                    grad)])

(defn reshape
  [op [x1] [grad1 grad2]]
  [(o/reshape grad1
              (p/to-int32 (o/shape x1)))
   (o/zeros-like grad2)])

(def floor -no-gradient-)
(def random-uniform -no-gradient-)
(def shape -no-gradient-)

(defmethod mcro/build-macro :grad
  [^Graph g plan]
  (let [[y-op dx-ops] (:inputs plan)
        y-inputs (->> y-op
                      :inputs
                      (map (gr/id->node g)))
        local-scope (str (:id y-op) "_grad")]
    (sc/with-variable-scope (conj (:scope plan) local-scope)
      (case (:op y-op)
        :Sin (sin y-op y-inputs dx-ops)
        :MatMul (mat-mul y-op y-inputs dx-ops)
        :Mean (mean y-op y-inputs dx-ops)
        :SoftmaxCrossEntropyWithLogits (softmax-cross-entropy-with-logits y-op y-inputs dx-ops)
        :Add (add y-op y-inputs dx-ops)
        :Relu (relu y-op y-inputs dx-ops)
        :Identity (identity-tf y-op y-inputs dx-ops)
        :Mul (mul y-op y-inputs dx-ops)
        :L2Loss (l2-loss y-op y-inputs dx-ops)
        :Floor (floor y-op y-inputs dx-ops)
        :RandomUniform (random-uniform y-op y-inputs dx-ops)
        :Shape (shape y-op y-inputs dx-ops)
        :Div (div y-op y-inputs dx-ops)
        :Conv2D (conv2-d y-op y-inputs dx-ops)
        :MaxPool (max-pool y-op y-inputs dx-ops)
        :BiasAdd (bias-add y-op y-inputs dx-ops)
        :Reshape (reshape y-op y-inputs dx-ops)))))








