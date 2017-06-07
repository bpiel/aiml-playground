(ns flojure-tens.tensor
  (:require [flojure-tens.data-type :as dt]))

(defrecord Tensor [handle dtype shape])

(defn create ^Tensor [v]
  (let [shape (long-array [1]) #_(get-shape v)
        {:keys [kw native byte-size]} (dt/data-type-of v)
        handle (tfnative.Tensor/allocate native shape byte-size)
        t (Tensor. handle kw shape)]
    (tfnative.Tensor/setValue handle v)
    t))

(defn get-float-value ^java.lang.Float [^Tensor t] (tfnative.Tensor/scalarFloat (:handle t)))

(defmacro defn-getter
  [s1 s2 s3]
  (let [f1 (symbol (str "get-" s1 "-value"))
        f2 (symbol (str "tfnative.Tensort/" s2))
        h1 (symbol (str "^" s3))]
    `(defn ~f1  [^Tensor ~'t] (~f2 (:handle ~'t)))))

#_(macroexpand '(defn-getter float scalarFloat java.lang.Float))



(defn get-value [^Tensor t]
  (let [la (long-array 1)]
    (tfnative.Tensor/readNDArray (:handle t) la)
    la))


















































