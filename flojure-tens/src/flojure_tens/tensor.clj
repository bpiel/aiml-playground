(ns flojure-tens.tensor
  (:require [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]))


(defrecord Tensor [handle dtype shape])

(defn get-shape [^Tensor t]
  (-> t :handle tfnative.Tensor/shape dt/md-array->vecs))

(defn get-data-type [^Tensor t]
  (-> t :handle tfnative.Tensor/dtype dt/native->dt))

(defn create-from-value ^Tensor [v]
  (let [shape (sh/shape-of-seq v)
        {:keys [kw native byte-size byte-size-fn]} (dt/data-type-of-whatever v)
        bs (or byte-size (byte-size-fn v))
        handle (tfnative.Tensor/allocate native
                                         (long-array shape)
                                         (apply * (conj shape bs)))
        t (Tensor. handle kw shape)]
    (tfnative.Tensor/setValue handle (dt/seq->md-array v))
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

(defmethod-getter :float scalarFloat)
(defmethod-getter :double scalarDouble)
(defmethod-getter :int32 scalarInt)
(defmethod-getter :int64 scalarLong)
(defmethod-getter :boolean scalarBoolean)

(defn zeros-array-by-dtype
  [shape dtype-kw]
  (sh/zeros-array-by-fn shape
   (:array-fn (dt/kw->dt dtype-kw))))

(defn get-value
  [^Tensor {:keys [handle dtype shape] :as t}]
  (if (sh/scalar? shape)
    (get-scalar-value t)
    (let [dst (zeros-array-by-dtype shape dtype)]
      (tfnative.Tensor/readNDArray handle dst)
      dst)))

(defn get-value-clj
  [^Tensor t]
  (-> t
      get-value
      dt/md-array->vecs))


















