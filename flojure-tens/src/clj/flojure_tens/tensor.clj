(ns flojure-tens.tensor
  (:require [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]))

(defrecord TensorRef [handle id dtype shape value])

(defn- tnda-dec-shape [shape]
  (cons (-> shape first dec)
        (rest shape)))

(defn- tnda-top-size [shape]
  (apply * (rest shape)))

(defn- tnda-slice-buffer
  [^java.nio.ByteBuffer b pos]
  (locking b
    (.position b pos)
    (.slice b)))

(defn- tnda-get-by-type
  [^java.nio.ByteBuffer b idx ^clojure.lang.Keyword dtype]
  (condp = dtype
    dt/float-kw (.get (.asFloatBuffer b) idx)
    dt/double-kw (.get (.asDoubleBuffer b) idx)
    dt/int-kw (.get (.asIntBuffer b) idx)))

(defprotocol PTensorNDArray
  (size [this])
  (invalidate! [this])
  (valid? [this]))

(deftype TensorNDArray [^java.nio.ByteBuffer b
                        ^long handle
                        ^clojure.lang.Keyword dtype
                        shape
                        ^java.lang.Boolean whole?
                        ^clojure.lang.Volatile valid?-v]

  PTensorNDArray
  (size [this] (apply * shape))
  (invalidate! [this]
    (locking valid?-v
      (vreset! valid?-v false)))
  (valid? [this] @valid?-v)
  
  clojure.lang.Counted
  (count [this] (or (first (.shape this))
                    1))

  clojure.lang.ISeq
  (cons [this v] nil)
  (empty [this] nil)
  ;; TODO support equiv for partials
  (equiv [this other] (and (= handle (.handle other))
                           (true? whole?)
                           (true? (.whole? other))))
  (first [this] (.nth this 0))
  (more [this] (if (>= 0 (.count this))
                 nil
                 (TensorNDArray. (->> shape
                                      tnda-top-size
                                      (tnda-slice-buffer b))
                                 handle                 
                                 dtype
                                 (tnda-dec-shape shape)
                                 false
                                 valid?-v)))
  (next [this] (seq (.more this)))
  (seq [this] (if (>= 0 (.count this))
                nil
                this))

  clojure.lang.Indexed
  (nth [this idx]
    (locking valid?-v
      (when-not (valid? this)
        (throw (Exception. "The tensor backing this structure is no longer valid.")))
      (if (= (count shape) 1)
        (tnda-get-by-type b idx dtype)
        (TensorNDArray. (if (= idx 0)
                          b
                          (->> shape
                               tnda-top-size
                               (* idx)
                               (tnda-slice-buffer b)))
                        handle
                        dtype
                        (rest shape)
                        false
                        valid?-v))))
  
  clojure.lang.ILookup
  (valAt [this k] (.nth this k)))

(defn get-shape-by-handle [handle]
  (-> handle tfnative.Tensor/shape dt/md-array->vecs))

(defn get-data-type-by-handle [handle]
  (-> handle tfnative.Tensor/dtype dt/native->dt :kw))

(defmulti get-scalar-value (fn [handle dtype] dtype))

;; TODO return type hint
(defmacro defmethod-getter
  [dtype-kw s2]
  (let [f2 (symbol (str "tfnative.Tensor/" s2))]
    `(defmethod ~'get-scalar-value ~dtype-kw [ ~'handle ~'dtype] (~f2 ~'handle))))

(defmethod-getter :float scalarFloat)
(defmethod-getter :double scalarDouble)
(defmethod-getter :int32 scalarInt)
(defmethod-getter :int64 scalarLong)
(defmethod-getter :boolean scalarBoolean)

(defmethod get-scalar-value :string
  [handle _]
  (String. (tfnative.Tensor/scalarBytes handle)))

(defn- mk-tensor-ndarray
  [handle dtype shape]
  (let [bb (.order (tfnative.Tensor/buffer handle)
                   (java.nio.ByteOrder/nativeOrder))]
    (TensorNDArray. bb
                    handle
                    dtype
                    shape
                    true
                    (volatile! true))))

(defn- mk-tensor-value
  [handle dtype shape]
  (if (sh/scalar? shape)
    (get-scalar-value handle dtype)
    (mk-tensor-ndarray handle dtype shape)))

(defn create-ref-from-value ^TensorRef [v]
  (let [shape (sh/shape-of-seq v)
        shape-arr (long-array shape)
        {:keys [kw native byte-size to-bytes-fn]} (dt/data-type-of-whatever v)
        handle (cond (not= kw dt/string-kw)
                     (let [handle (tfnative.Tensor/allocate native
                                                            shape-arr
                                                            (apply * (conj shape byte-size)))]
                       (tfnative.Tensor/setValue handle (dt/seq->md-array v)) ;; TODO more efficient?
                       handle)

                     (sh/scalar? shape)
                     (tfnative.Tensor/allocateScalarBytes (to-bytes-fn v))

                     :else
                     (tfnative.Tensor/allocateNonScalarBytes shape-arr
                                                             (to-array
                                                              (map #(.getBytes % "UTF-8")
                                                                   v))))
        value (mk-tensor-value handle kw shape)]
    (TensorRef. handle
                (gensym "tref")
                kw
                shape
                value)))

(defn create-ref-from-handle ^TensorRef [handle]
  (let [dtype (get-data-type-by-handle handle)
        shape (get-shape-by-handle handle)]
    (TensorRef. handle
                (gensym "tref")
                dtype
                shape
                (mk-tensor-value handle
                                 dtype
                                 shape))))

(defn create-ref-from-ref ^TensorRef
  [^TensorRef {:keys [handle dtype shape]}]
  (TensorRef. handle
              (gensym "tref")
              dtype
              shape
              (mk-tensor-value handle
                               dtype
                               shape)))

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
