(ns flojure-tens.gradients
  (:require [flojure-tens.ops2 :as o]))


;; TODO add ctrl and conj
(defn sin
  [op [x-op] grad]
  (->> x-op
       o/cos
       (o/matmul grad)
       vec))

;; TODO conj and check transpose
(defn matmul
  [op [x1 x2] grad]
  [(o/matmul nil {:transpose_b true} grad x2)
   (o/matmul nil {:transpose_a true} x1 grad)])

(defn add
  [op [x1 x2] grad]
  )


























































