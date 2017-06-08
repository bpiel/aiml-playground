(ns flojure-tens.tensor
  (:require [flojure-tens.data-type :as dt]))

(defrecord Tensor [handle dtype shape])

(defn get-shape [^Tensor t]
  (-> t :handle tfnative.Tensor/shape vector))

(defn get-data-type [^Tensor t]
  (-> t :handle tfnative.Tensor/dtype dt/native->dt))

(defn create-from-value ^Tensor [v]
  (let [shape (long-array [1]) #_(get-shape v)
        {:keys [kw native byte-size]} (dt/data-type-of v)
        handle (tfnative.Tensor/allocate native shape byte-size)
        t (Tensor. handle kw shape)]
    (tfnative.Tensor/setValue handle v)
    t))

(defn create-from-handle ^Tensor [handle]
  (let [dummy (Tensor. handle nil nil)]
    (Tensor. handle
             (:kw (get-data-type dummy))
             (get-shape dummy))))

(defmulti get-scalar-value (fn [^Tensor t] (:dtype t)))

;; TODO return type hint
(defmacro defmethod-getter
  [dtype-kw s2]
  (let [f2 (symbol (str "tfnative.Tensor/" s2))]
    `(defmethod ~'get-scalar-value ~dtype-kw [^Tensor ~'t] (~f2 (:handle ~'t)))))

#_(macroexpand '(defn-getter :float scalarFloat))

(defmethod-getter :float scalarFloat)
(defmethod-getter :double scalarDouble)
(defmethod-getter :int32 scalarInt)
(defmethod-getter :int64 scalarLong)
(defmethod-getter :boolean scalarBoolean)





(defn get-value [^Tensor {:keys [handle dtype shape]}]
    (let [la (long-array 1)]
      (tfnative.Tensor/readNDArray handle la)
      la))
