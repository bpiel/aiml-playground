(ns flojure-tens.ops
  (:require [flojure-tens.ops-gen :as ops-gen]
            [flojure-tens.ops-gen-config :as cfg]))


(ops-gen/gen-ops 'flojure-tens.ops)
