(ns flojure-tens.data-type
  (:require [flojure-tens.shape :as sh]))

(defn is-type?-fn
  [t]
  #(= (type %) t))

;; TODO double check
(def data-types
  [{:kw :float 
    :native 1 
    :byte-size 4 
    :scalar? (is-type?-fn java.lang.Float) ;; (float? 1.0) => true  UH OH!
    :array? (is-type?-fn (type (float-array 0)))
    :scalar java.lang.Float 
    :array (type (float-array 0)) 
    :scalar-fn float 
    :array-fn float-array}
   {:kw :double 
    :native 2 
    :byte-size 8 
    :scalar? double? 
    :array? (is-type?-fn (type (double-array 0)))
    :scalar java.lang.Double 
    :array (type (double-array 0)) 
    :scalar-fn double 
    :array-fn double-array}
   {:kw :int32 
    :native 3 
    :byte-size 4 
    :scalar? (is-type?-fn java.lang.Integer) 
    :array? (is-type?-fn (type (int-array 0)))
    :scalar java.lang.Integer
    :scalar-fn int
    :array-fn int-array}
   {:kw :uint8 
    :native 4  
    :byte-size 4 
    :scalar? (constantly false)  
    :array? (constantly false)
    :scalar nil
    :scalar-fn (fn [& args] (throw (Exception. "NOT IMPLEMENTED")))
    :array-fn nil}
   {:kw :string 
    :native 7  
    :byte-size nil 
    :scalar? string?  
    :array? (constantly false)
    :scalar java.lang.String
    :scalar-fn str ;; maybe wrong?
    :array-fn nil}
   {:kw :int64 
    :native 9  
    :byte-size 8 
    :scalar? int?  
    :array? (is-type?-fn (type (long-array 0)))
    :scalar java.lang.Long
    :scalar-fn long
    :array-fn long-array}
   {:kw :bool 
    :native 10  
    :byte-size 1 
    :scalar? boolean?
    :array? (is-type?-fn (type (boolean-array 0)))
    :scalar java.lang.Boolean
    :scalar-fn boolean
    :array-fn boolean-array}])

(def kw->dt
  (into {}
        (for [dt data-types]
          [(:kw dt) dt])))

(def native->dt
  (into {}
        (for [dt data-types]
          [(:native dt) dt])))

(defn is-of-data-type?
  [o dt]
  ((:scalar? dt) o))

(defn is-array-of-data-type?
  [o dt]
  ((:array? dt) o))

(defn data-type-of
  [o]
  (first (filter (partial is-of-data-type? o)
                 data-types)))

(defn data-type-of-seq
  [a]
  (when-let [[f] a]
    (data-type-of f)))

(defn data-type-of-whatever
  [v]
  (if (sequential? v)
    (recur (first v))
    (data-type-of v)))

(defn data-type-of-array
  [a]
  (first (filter (partial is-array-of-data-type? a)
                 data-types)))

(defn scalar-array? [a] (-> a data-type-of-array nil? not))

(def some-other-array-types #{(type (to-array [] ))})

(defn some-other-array? [a] (-> a type some-other-array-types nil? not))

(defn array? [a] (or (scalar-array? a)
                     (some-other-array? a)))

(defn seq->array
  [s]
  ((-> s
       data-type-of-seq
       :array-fn)
   s))

(defn md-array->vecs
  [a]
  (if (array? a)
    (mapv md-array->vecs a)
    a))

(defn vec->md-array
  [v]
  (if (vector? v)
    (if-let [dt (data-type-of-seq v)]
      ((:array-fn dt) v)
      (to-array (map vec->md-array v)))
    v))

(defn ->tf-attr-val [ty v & [dims]]
  (let [dims' (or dims (sh/num-dimensions-seq v))]
    (case dims'
      0 ((-> ty kw->dt :scalar-fn) v)
      1 ((-> ty kw->dt :array-fn) v)
      (to-array (map #(->tf-attr-val ty % (dec dims'))
                     v)))))

