(ns flojure-tens.ops
  (:require [flojure-tens.ops-gen :as ops-gen]
            [flojure-tens.ops-gen-config :as cfg]))


(defn- unmap-all []
  (dorun (map (partial ns-unmap *ns*)
              (keys (ns-map *ns*)))))

(unmap-all)
(ops-gen/gen-ops 'flojure-tens.ops)
