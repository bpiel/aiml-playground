(ns flojure-tens.scope)

(def ^:dynamic *id-scope* [])

(defmacro with-id-scope
  [id-scope & body]
  `(binding [*id-scope* (conj *id-scope* ~id-scope)]
     ~@body))

(defmacro with-id-scopes
  [id-scopes & body]
  `(binding [*id-scope* (into *id-scope* ~id-scopes)]
     ~@body))

(defn assoc-id-scope [plan] (assoc plan :scope *id-scope*))
