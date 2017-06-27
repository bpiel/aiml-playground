(ns flojure-tens.scope)

(def ^:dynamic *id-scope* [])

(defmacro with-id-scope
  [id-scope & body]
  `(binding [*id-scope* (conj *id-scope* ~id-scope)]
     ~@body))

(defn assoc-id-scope [plan] (assoc plan :scope *id-scope*))
