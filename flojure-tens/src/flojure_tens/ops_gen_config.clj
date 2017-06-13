(ns flojure-tens.ops-gen-config
  (:require [flojure-tens.ops-gen :as op-gen]
            [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]
            [flatland.protobuf.core :as pr])
  (:import [flojure_tens.common Graph Op GraphRef]
           [org.tensorflow.framework OpDef OpList NodeDef]))


(def skip-ops #{"Variable"})
(def gen-config (atom {}))


(def OpDefP (pr/protodef OpDef))
(def OpListP (pr/protodef OpList))

(defn register-op-gen-cfg!
  [tf-op config-map]
  (swap! gen-config assoc tf-op config-map))

(defn fetch-config
  [op-def kw]
  (or (some-> op-def :name ((deref gen-config)) kw)
      (some-> :default ((deref gen-config)) kw)))

(defn call-config
  [op-def kw args]
  (when-let [f (fetch-config op-def kw)]
    (apply f args)))

;; Op Gen Defaults =========================================================

(defn hook-pre-build-op-default
  [args]
  (-> args
      (update-in [:plan :attrs] op-gen/convert-attrs (-> args :op-def :attr))))

(defn op-def-processor-default
  [op-def]
  (-> op-def
      (assoc :kw (op-gen/get-op-kw op-def))
      (update :attr (fn [a] (vec (remove #(-> % :name str first (= \T))
                                         a))))))


(defn get-op-fn-body-default
  [fn-name-sym op-def]
  (let [input-syms (mapv #(-> % :name symbol)
                         (:input-arg op-def))
        args-id (into ['id] input-syms)
        args-id-attrs (into ['attrs] args-id)]
    (list (list args-id-attrs
                {:op (op-gen/get-op-kw op-def)
                 :inputs input-syms
                 :id 'id
                 :attrs 'attrs})
          (list args-id
                `(~fn-name-sym 'id ~@input-syms))
          (list input-syms
                `(~fn-name-sym nil {} ~@input-syms)))))

(defn plan->expr-default
  [plan fn-name _]
  (let [{:keys [id attrs inputs]} plan]
    `(~fn-name
      ~id ~attrs ~@(map (comp symbol name) inputs))))






;; Op Gen Custom Overrides =================================================

(defn hook-pre-build-op-override-const
  [args]
  (let [dtype (-> args :plan :attrs :value dt/data-type-of-whatever :native)]
    (-> args
        (assoc-in [:plan :attrs :dtype] dtype)
        hook-pre-build-op-default)))

(defn plan->expr-const
  [plan fn-name _]
  (let [{:keys [id attrs]} plan]
    `(~fn-name ~id ~(:value attrs))))

(register-op-gen-cfg!
 "Const"
 {:fn-name 'c
  :plan-fn-bodies (constantly
                   '[([value] {:op :const
                               :attrs {:value value}})
                     ([id value] {:op :const
                               :id id
                               :attrs {:value value}})
                     ([value data-type] {:op :const
                                         :attrs {:value value
                                                 :dtype data-type}})])
  :hook-pre-build `hook-pre-build-op-override-const
  :plan->expr plan->expr-const})


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
  :plan-fn-bodies (constantly
                   '[([id value] {:op :variablev2
                                  :id id
                                  :assignment value})])
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
 {:plan-fn-bodies (constantly
                   '[([vari value]
                      (let [vari-id (or (:id vari)
                                        vari)]
                        (when (-> vari-id keyword? not)
                          (throw (Exception. (str "Invalid assignment target: " vari))))
                        {:op :assign :vari vari-id :inputs [value]}))])
  :hook-pre-build  `hook-pre-build-op-override-assign})


(register-op-gen-cfg!
 "Transpose"
 {:plan-fn-bodies (constantly
                   '[([input] {:op :transpose
                               :inputs [input [(int 1) (int 0)]]
                               :attrs {}})])})

;; END Op Gen Custom Overrides =================================================

;; dumb
(register-op-gen-cfg!
 :default
 {:op-def-processor op-def-processor-default})



(defn fetch-pre-build-op-fn
  [op-def]
  (or (fetch-config op-def :hook-pre-build)   
      `hook-pre-build-op-default))

(defn fn-name-default [op-def]
  (symbol (clojure.string/lower-case (:name op-def))))

(defn get-op-fn-name-sym [op-def]
  (let [s1 (or (fetch-config op-def :fn-name)
               (fn-name-default op-def))]
    (if (ns-resolve 'clojure.core s1)
      (symbol (str s1 "-tf"))
      s1)))

(defn get-op-fn-body [fn-name-sym op-def]
  (call-config op-def :plan-fn-bodies [fn-name-sym op-def]))

(defn op-def-processor [op-def]
  (call-config op-def :op-def-processor [op-def]))

(defn node-def->plan
  [node-def]
  (call-config node-def :node-def->plan [node-def]))

(defn plan->expr
  [plan ops-ns-str]
  (let [op-def (op-list-by-kw (:op plan))
        fn-name (name (get-op-fn-name-sym op-def))]
    (call-config op-def
                 :plan->expr
                 [plan
                  (symbol ops-ns-str fn-name)
                  op-def])))

(defn plans->exprs
  [plans ops-ns-str]
  (into {}
        (for [p plans]
          [(:id p) (plan->expr p ops-ns-str)])))

(def op-list (pr/protobuf-load OpListP (tfnative.TensorFlow/registeredOpList)))

(def op-list-by-name
  (into {}
        (for [op-def (:op op-list)]
          [(:name op-def) op-def])))

(def proc-op-list-by-name
  (into {}
        (for [op-def (:op op-list)]
          [(:name op-def) (op-def-processor op-def)])))

(def op-list-by-kw
  (into {}
        (for [[k op-def] proc-op-list-by-name]
          [(:kw op-def) op-def])))


(def const-op (->> op-list
                   :op
                   (filter #(= (:name %) "Const"))
                   first
                   (into {})))

(def add-op (->> op-list
                   :op
                   (filter #(= (:name %) "Add"))
                   first
                   (into {})))

(def assign-op (->> op-list
                   :op
                   (filter #(= (:name %) "Assign"))
                   first
                   (into {})))



(register-op-gen-cfg!
 :default
 {:op-def-processor op-def-processor-default
  :plan-fn-bodies get-op-fn-body-default
  :hook-pre-build `hook-pre-build-op-default
  :node-def->plan op-gen/node-def->plan-default
  :plan->expr plan->expr-default})

