(ns flojure-tens.common)

(defrecord Graph [^long handle ^clojure.lang.Atom state ^clojure.lang.Atom closed ^Object handle-lock])

(defrecord GraphRef [^clojure.lang.Atom closed ^Object handle-lock])

(defrecord Op [id op inputs hash attrs handle ^GraphRef graphref])
