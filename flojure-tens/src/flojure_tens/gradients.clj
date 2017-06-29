(ns flojure-tens.gradients
  (:require [flojure-tens.ops2 :as o]))


;; TODO add ctrl and conj
(defn sin
  [op [x-op] grad]
  (->> x-op
       o/cos
       (o/mul grad)
       vector))

;; TODO simplify? eliminate?
(defn get-attrs-map
  [op]
  (into {}
        (for [[k v _] (:attrs op)]
          [(keyword k) v])))

;; TODO conj and check transpose
(defn mat-mul
  [op [x1 x2] grad]
  (let [{ta :transpose_a tb :transpose_b} (get-attrs-map op)]
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

(defn add
  [op [x1 x2] grad]
  )
