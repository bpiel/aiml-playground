(ns flojure-tens.common)

(defrecord Graph [^long handle ^clojure.lang.Atom state ^Object handle-lock])

(defrecord Op [id op inputs hash attrs handle ^Graph graph])
