(ns flojure-tens.ops-gen
  (:require [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]
            [flojure-tens.tensor :as tsr]))

(defn get-op-kw
  [op-def]
  (keyword (:name op-def)))

(defn convert-attr
  [value def-type]
  (case def-type
    :tensor (:handle (tsr/create-from-value value))
    :type (dt/->tf-attr-val :int64 value)
    :shape (dt/->tf-attr-val :int64 value)
    (dt/->tf-attr-val def-type value)))

(defn convert-attrs*
  [plan-attrs
   {attr-name :name attr-type :type default-value :default-value :as attr-def}]
  (let [dt-kw (keyword attr-type)
        value ((keyword attr-name) plan-attrs)]
    (try
      [attr-name
       (if-not (nil? value)
         (convert-attr value dt-kw)
         (-> default-value vals first))
       dt-kw]
      (catch Throwable e
        (throw (Exception. (format "Could not convert an attribute %s %s %s \n\n %s"
                                   attr-name
                                   attr-type
                                   value
                                   attr-def)
                           e))))))

(defn convert-attrs
  [plan-attrs def-attr]
  (mapv (partial convert-attrs* plan-attrs)
        def-attr))


(defn node-def-attr->
  [attr-value]
  (let [[ty v] (first attr-value)]
    (def t-map v)
    (case ty
      :type nil ;; TODO
      :list [] ;; TODO
      :tensor (tensor-attr->vec v)
      :b  (boolean v))))

    (defn apply-shape-to-vec
      [s v]
      (let [dim (first s)]
        (case (count s)
          0 v
          1 (vec (take dim v))
          (vec (take dim
                     (mapv (partial apply-shape-to-vec (drop 1 s))
                           (partition (quot (count v) dim) v)))))))

(defn tensor-attr-shape->vec
  [tas]
  (mapv :size (:dim tas)))

(defn tensor-attr->vec
    [{:keys [dtype tensor-shape tensor-content]}]
    (if (= dtype :dt-int32)
      (apply-shape-to-vec
       (tensor-attr-shape->vec tensor-shape)
       (google-byte-string->int-array tensor-content))
      (throw (Exception. (str "tensor-attr->vec NOT IMPLEMENTED for " dtype)))))

(defn google-byte-string->int-array
  [gbs]
  (let [ib (-> (java.nio.ByteBuffer/wrap (.toByteArray gbs))
               (.order java.nio.ByteOrder/LITTLE_ENDIAN)
               (.asIntBuffer))
        ia (int-array (.remaining ib))]
    (.get ib ia)
    (vec ia)))

(defn node-def-attrs->
  [attr-vec]
  (into {}
        (keep (fn [{k :key v :value}]
                [(keyword k)
                 (node-def-attr-> v)])
              attr-vec)))

(defn node-def->plan-default [node-def]
  (def nd1 node-def)
  {:id (-> node-def :name keyword)
   :op (-> node-def :op keyword)
   :inputs (mapv keyword
                 (:input node-def))
   :attrs (node-def-attrs-> (:attr node-def))})
