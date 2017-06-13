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
    (case ty
      :type nil ;;TODO
      :b  (boolean v))))

(defn node-def-attrs->
  [attr-vec]
  (into {}
        (keep (fn [{k :key v :value}]
                [(keyword k)
                 (node-def-attr-> v)])
              attr-vec)))

(defn node-def->plan-default [node-def]
  {:id (:name node-def)
   :op (get-op-kw node-def)
   :inputs (mapv keyword
                 (:input node-def))
   :attrs (node-def-attrs-> (:attr node-def))})

