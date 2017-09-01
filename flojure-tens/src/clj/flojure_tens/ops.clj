(ns flojure-tens.ops
  (:require [flojure-tens.ops-gen :as ops-gen]
            [flojure-tens.ops-gen-config :as cfg]))


(defn- unmap-interns []
  (dorun (map (partial ns-unmap *ns*)
              (keys (ns-interns *ns*)))))

(defn generate-ops
  []
#_  (unmap-interns)
  (ops-gen/gen-ops 'flojure-tens.ops))

(generate-ops)
