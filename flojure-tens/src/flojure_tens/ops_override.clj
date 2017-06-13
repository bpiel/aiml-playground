(ns flojure-tens.ops-override ;; TODO rename to op-gen? op-gen-config?
  (:require [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]))


(def skip-ops #{"Variable"})
(def gen-cfg (atom {}))

(defn register-op-gen-cfg!
  [tf-op override-map]
  (swap! overrides assoc tf-op override-map))

;; Op Gen Defaults =========================================================

(defn hook-pre-build-op-default
  [args]
  (-> args
      (update-in [:plan :attrs] convert-attrs (-> args :op-def :attr))))

(defn op-def-processor-default
  [op-def]
  (-> op-def
      (update :attr (fn [a] (vec (remove #(-> % :name str first (= \T))
                                         a))))))


(defn get-op-fn-body-default
  [fn-name-sym op-def]
  (let [input-syms (mapv #(-> % :name symbol)
                         (:input-arg op-def))
        arg-vec (conj input-syms 'attrs)]
    (list (list arg-vec
                {:op (get-op-kw op-def)
                 :inputs input-syms
                 :attrs  'attrs})
          (list input-syms
                `(~fn-name-sym ~@input-syms
                  {})))))

(register-op-gen-cfg!
 :default
 {:op-def-processor `op-def-processor-default
  :plan-fn-bodies `get-op-fn-body-default
  :hook-pre-build `hook-pre-build-op-override-default})


;; Op Gen Custom Overrides =================================================

(defn hook-pre-build-op-override-const
  [args]
  (let [dtype (-> args :plan :attrs :value dt/data-type-of-whatever :native)]
    (-> args
        (assoc-in [:plan :attrs :dtype] dtype)
        hook-pre-build-op-default)))

(register-op-gen-cfg!
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
        hook-pre-build-op-default)))

(register-op-gen-cfg!
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
        hook-pre-build-op-default)))

(register-op-gen-cfg!
 "Assign"
 {:plan-fn-bodies '[([vari value]
                     (let [vari-id (or (:id vari)
                                       vari)]
                       (when (-> vari-id keyword? not)
                         (throw (Exception. (str "Invalid assignment target: " vari))))
                       {:op :assign :vari vari-id :inputs [value]}))]
  :hook-pre-build  `hook-pre-build-op-override-assign})


(register-op-gen-cfg!
 "Transpose"
 {:plan-fn-bodies '[([input] {:op :transpose
                              :inputs [input [(int 1) (int 0)]]
                              :attrs {}})]})
