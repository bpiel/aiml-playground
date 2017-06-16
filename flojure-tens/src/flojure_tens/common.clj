(ns flojure-tens.common)

(defrecord Graph [^long handle ^clojure.lang.Atom state ^clojure.lang.Atom closed ^Object handle-lock])

(defrecord GraphRef [^clojure.lang.Atom closed ^Object handle-lock])

(defrecord Op [id aliases op inputs ctrl-inputs hash attrs handle output-idx ^GraphRef graphref])
