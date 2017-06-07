(ns flojure-tens.data-type)

(defn is-type?-fn
  [t]
  #(= (type %) t))

(def data-types
  [{:kw :float :native 1 :byte-size 4 :pred float? :java java.lang.Float :array float-array}
   {:kw :double :native 2 :byte-size 8 :pred double? :java java.lang.Double :array double-array}
   {:kw :int32 :native 3 :byte-size 4 :pred (is-type?-fn java.lang.Integer) :java java.lang.Integer :array int-array}
   {:kw :uint8 :native 4  :byte-size 4 :pred (constantly false)  :java nil :array nil}
   {:kw :string :native 7  :byte-size nil :pred string?  :java java.lang.String :array nil}
   {:kw :int64 :native 9  :byte-size 8 :pred int?  :java java.lang.Long :array long-array}
   {:kw :bool :native 10  :byte-size 1 :pred int?  :java java.lang.Long :array long-array}])


(defn data-type-of
  [o]
  )


















































