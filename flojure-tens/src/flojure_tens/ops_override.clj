(ns flojure-tens.ops-override
  (:require [flojure-tens.ops2 :as ops]
            [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]))

(defn hook-pre-build-op-override-const
  [args]
  (let [dtype (-> args :plan :attrs :value dt/data-type-of-whatever :native)]
    (-> args
        (assoc-in [:plan :attrs :dtype] dtype)
        ops/hook-pre-build-op-default)))

(ops/register-op-overrides!
 "Const"
 {:fn-name 'c
  :plan-fn-bodies '[([value] {:op :const
                              :attrs {:value value}})
                    ([value data-type] {:op :const
                                        :attrs {:value value
                                                :dtype data-type}})]
  :hook-pre-build `hook-pre-build-op-override-const})


(defn hook-pre-build-op-override-variable-v2
  [args]
  (let [value (-> args :plan :assignment)
        dtype (-> value dt/data-type-of-whatever :native)
        shape (sh/shape-of-seq value)]
    (-> args
        (assoc-in [:plan :attrs] {:dtype dtype :shape shape})
        ops/hook-pre-build-op-default)))

(ops/register-op-overrides!
 "VariableV2"
 {:fn-name 'v
  :plan-fn-bodies '[([id value] {:op :variablev2
                                 :id id
                                 :assignment value})]
  :hook-pre-build  `hook-pre-build-op-override-variable-v2})

(defn hook-pre-build-op-override-assign
  [args]
  (let [nodes (-> args :g :state deref :nodes)
        value (-> args :plan :inputs first)
        vari (-> args :plan :vari nodes)]
    (-> args
        (assoc-in [:plan :inputs] [vari value])
        (dissoc :vari)
        ops/hook-pre-build-op-default)))

(ops/register-op-overrides!
 "Assign"
 {:plan-fn-bodies '[([vari value]
                     (let [vari-id (or (:id vari)
                                       vari)]
                       (when (-> vari-id keyword? not)
                         (throw (Exception. (str "Invalid assignment target: " vari))))
                       {:op :assign :vari vari-id :inputs [value]}))]
  :hook-pre-build  `hook-pre-build-op-override-assign})


(ops/register-op-overrides!
 "Transpose"
 {:plan-fn-bodies '[([input] {:op :transpose
                              :inputs [input [(int 1) (int 0)]]
                              :attrs {}})]})
