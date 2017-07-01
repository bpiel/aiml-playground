(ns flojure-tens.gradients
  (:require [flojure-tens.ops2 :as o]
            [flojure-tens.op-helpers :as oh]))


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
  (let [input-shape (o/c nil
                         (-> x1 :shapes (get (:output-idx x1 0)) )
                         :int32)
        output-shape-kept-dims (oh/reduced-shape input-shape x2)
        tile-scaling (oh/safe-shape-div input-shape output-shape-kept-dims)
        grad (o/reshape grad output-shape-kept-dims)]
    [(o/tile grad tile-scaling) nil]))

(defn mean
  [op [x1 x2 :as x] [grad]]
  (let [sum-grad (first (sum op x grad))
        input-shape (o/shape x1)
        output-shape (o/shape op)
        factor (oh/safe-shape-div (oh/reduce-prod input-shape)
                                  (oh/reduce-prod output-shape))]
    [(o/div sum-grad (o/cast-tf nil {:DstT (-> op :dtypes first)} factor))
     nil]))

(defn add
  [op [x1 x2] [grad]]
  )





















































