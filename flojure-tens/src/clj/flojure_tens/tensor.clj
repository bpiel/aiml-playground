(ns flojure-tens.tensor
  (:require [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]))


(defrecord Tensor [handle dtype shape])

(defn dec-shape [shape]
  (cons (-> shape first dec)
        (rest shape)))

(defn tv-top-size [shape]
  (apply * (rest shape)))

(defn slice-buffer
  [^java.nio.Buffer b pos]
  (locking b
    (.position b pos)
    (.slice b)))

(deftype TensorValue [^java.nio.Buffer b ^long handle dtype shape whole?]

  clojure.lang.Counted
  (count [this] (or (first (.shape this))
                    1))

  clojure.lang.ISeq
  (cons [this v] nil)
  (empty [this] nil)
  (equiv [this other] (= (.handle this)
                         (.handle other)))
  (first [this] (if (= (count shape) 1)
                  (.nth this 0)
                  (TensorValue. b
                                handle
                                dtype
                                (rest shape)
                                false)))
  (more [this] (if (>= 0 (.count this))
                 nil
                 (TensorValue. (slice-buffer b
                                             (tv-top-size shape))
                               handle
                               dtype
                               (dec-shape shape)
                               false)))
  (next [this] (seq (.more this)))
  (seq [this] (if (>= 0 (.count this))
                nil
                this))

  clojure.lang.Indexed
  (nth [this idx] (.get b idx))
  
  clojure.lang.ILookup
  (valAt [this k] (.nth this k)))





(defn get-shape [^Tensor t]
  (-> t :handle tfnative.Tensor/shape dt/md-array->vecs))

(defn get-data-type [^Tensor t]
  (-> t :handle tfnative.Tensor/dtype dt/native->dt))

#_(defn create-from-value ^Tensor [v]
  (let [shape (sh/shape-of-seq v)
        {:keys [kw native byte-size byte-size-fn]} (dt/data-type-of-whatever v)
        bs (or byte-size (byte-size-fn v))
        handle (tfnative.Tensor/allocate native
                                         (long-array shape)
                                         (apply * (conj shape bs)))
        t (Tensor. handle kw shape)]
    (tfnative.Tensor/setValue handle (dt/seq->md-array v))
    t))


(defn create-from-value ^Tensor [v]
  (let [shape (sh/shape-of-seq v)
        shape-arr (long-array shape)
        {:keys [kw native byte-size to-bytes-fn]} (dt/data-type-of-whatever v)
        t (Tensor. nil kw shape)]
    (cond (not= kw dt/string-kw)
          (let [handle (tfnative.Tensor/allocate native
                                                 shape-arr
                                                 (apply * (conj shape byte-size)))]
            (tfnative.Tensor/setValue handle (dt/seq->md-array v))
            (assoc t :handle handle))

          (-> shape count (= 0))
          (assoc t :handle
                 (tfnative.Tensor/allocateScalarBytes (to-bytes-fn v)))

          :else
          (assoc t :handle
                 (tfnative.Tensor/allocateNonScalarBytes shape-arr (to-array (map #(.getBytes % "UTF-8")
                                                                                  v)))))))


(defn create-from-handle ^Tensor [handle]
  (let [dummy (Tensor. handle nil nil)] ;; TODO dumb?
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

(defmethod get-scalar-value :string
  [^Tensor t]
  (String. (tfnative.Tensor/scalarBytes (:handle t))))

(defn zeros-array-by-dtype
  [shape dtype-kw]
  (sh/zeros-array-by-fn shape
   (:array-fn (dt/kw->dt dtype-kw))))

(defn get-value
  [{:keys [handle dtype shape] :as t}]
  (if (sh/scalar? shape)
    (get-scalar-value t)
    (let [dst (zeros-array-by-dtype shape dtype)]
      (tfnative.Tensor/readNDArray handle dst)
      (if (= dtype dt/string-kw)
        (to-array (map #(String. %) ;; TODO -- fix gross HACK!!!!
                       dst))
        dst))))

(defn get-value-clj
  [t]
  (-> t
      get-value
      dt/md-array->vecs))
