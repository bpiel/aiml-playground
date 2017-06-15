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
         (-> default-value vals first)) ;; TODO either pre-convert or don't use
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
    (if (dt/is-goole-pb-byte-string? v)
      (if-let [f (some-> ty dt/pb-attr-key->dt :from-bytes)]
        (f (.toByteArray v))
        (throw (Exception. (str "node-def-attr-> can't handle " attr-value))))
      (if-let [f (or (some-> ty dt/pb-attr-key->dt :pb-attr-fn)
                     (some-> ty dt/pb-attr-key->dt :scalar-fn))]
        (f v)
        (throw (Exception. (str "node-def-attr-> can't handle " attr-value)))))))

#_(defn tensor-attr->vec
    [{:keys [dtype tensor-shape tensor-content]}]
    (if (= dtype :dt-int32)
      (apply-shape-to-vec
       (tensor-attr-shape->vec tensor-shape)
       (google-byte-string->int-array tensor-content))
      (throw (Exception. (str "tensor-attr->vec NOT IMPLEMENTED for " dtype)))))



(defn node-def-attrs->
  [attr-vec]
  (into {}
        (map (fn [{k :key v :value}]
                [(keyword k)
                 (node-def-attr-> v)])
              attr-vec)))

(defn node-def-name->plan-id [s]
  (-> s (clojure.string/replace #"/" ">") keyword))

(defn get-node-def-input-id [ndi]
  (when-not (= \^ (first ndi))
    (node-def-name->plan-id ndi)))

(defn get-node-def-ctrl-input-id [ndi]
  (when (= \^ (first ndi))
    (node-def-name->plan-id (apply str (rest ndi)))))



(defn group-inputs
  [inputs op-def attrs]
  (loop [grouped []
         [head & tail] (:input-arg op-def)
         remaining inputs]
    (if (not-empty remaining)
      (if-let [group-size (some-> head :number-attr keyword attrs)]
        (recur (conj grouped (vec (take group-size remaining)))
               tail
               (drop group-size remaining))
        (recur (conj grouped (first remaining))
               tail
               (rest remaining)))
      grouped)))


(defn node-def->plan-default [node-def op-def]
  (let [attrs (node-def-attrs-> (:attr node-def))]
    {:id (-> node-def :name node-def-name->plan-id)
     :op (-> node-def :op keyword)
     :inputs (group-inputs (vec (keep get-node-def-input-id
                                      (:input node-def)))
                           op-def attrs)
     :ctrl-inputs (vec (keep get-node-def-ctrl-input-id
                             (:input node-def)))
     :attrs attrs}))
