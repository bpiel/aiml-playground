(ns flojure-tens.ops-src-gen
  (:require [flojure-tens.ops-gen-config :as cfg]
            [flojure-tens.ops-gen :as ops-gen]))

(defn node-def->plan
  [node-def]
  (let [op-def (-> node-def :op cfg/proc-op-list-by-name)]
    (ops-gen/call-config node-def :node-def->plan [node-def op-def])))



(defn plan->expr
  [plan ops-ns-str output-fn-sym]
  (let [op-def (cfg/op-list-by-kw (:op plan))
        fn-name (name (ops-gen/get-op-fn-name-sym op-def))]
    (ops-gen/call-config op-def
                 :plan->expr
                 [plan
                  (symbol ops-ns-str fn-name)
                  output-fn-sym
                  op-def])))

(defn plans->exprs
  [plans ops-ns-str]
  (into {}
        (for [p plans]
          [(:id p) (plan->expr p ops-ns-str)])))




































