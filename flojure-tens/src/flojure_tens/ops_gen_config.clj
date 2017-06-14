(ns flojure-tens.ops-gen-config
  (:require [flojure-tens.ops-gen :as op-gen]
            [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]
            [flatland.protobuf.core :as pr]
            flojure-tens.common)
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
        args-id-attrs (into ['id 'attrs] input-syms)]
    (list (list args-id-attrs
                {:op (op-gen/get-op-kw op-def)
                 :inputs input-syms
                 :ctrl-inputs (:ctrl-inputs 'attrs)
                 :id 'id
                 :attrs '(dissoc attrs :ctrl-inputs)})
          (list args-id
                `(~fn-name-sym 'id ~@input-syms))
          (list input-syms
                `(~fn-name-sym nil {} ~@input-syms)))))

#_(defn node-def-input->plan-input [s]
  (if (#{\:} s)
    (let [[id idx] (clojure.string/split s #":")]
      [(node-def-name->plan-id id) idx])
    (node-def-name->plan-id s)))

(defn plan-input->expr-input
  [output-fn-sym input-kw]
  (let [iname (name input-kw)]
    (if (some #{\:} iname)
      (let [[id idx] (clojure.string/split iname
                                           #":")]
        `(~output-fn-sym ~(symbol id) ~(Integer/parseInt idx)))
      (symbol iname))))

(defn plan-input->expr-input-walker
  [output-fn-sym inputs]
  (clojure.walk/prewalk
   (fn [v]
     (if (keyword? v)
       (plan-input->expr-input output-fn-sym v)
       v))
   inputs))

(defn plan->expr-default
  [plan fn-name output-fn _]
  (let [{:keys [id attrs inputs ctrl-inputs]} plan]
    `(~fn-name
      ~id
      ~(if (not-empty ctrl-inputs)
         (assoc attrs :ctrl-inputs ctrl-inputs)
         attrs)
      ~@(plan-input->expr-input-walker output-fn
                                       inputs))))






;; Op Gen Custom Overrides =================================================

(defn hook-pre-build-op-override-const
  [args]
  (let [dtype (-> args :plan :attrs :value dt/data-type-of-whatever :native)]
    (-> args
        (assoc-in [:plan :attrs :dtype] dtype)
        hook-pre-build-op-default)))

(defn plan->expr-const
  [plan fn-name _ _]
  (let [{:keys [id attrs]} plan]
    `(~fn-name ~id ~(:value attrs))))

(register-op-gen-cfg!
 "Const"
 {:fn-name 'c
  :plan-fn-bodies (constantly
                   '[([value] {:op :Const
                               :attrs {:value value}})
                     ([id value] {:op :Const
                               :id id
                               :attrs {:value value}})
                     ([id value data-type] {:op :Const
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

(defn plan->expr-variable-v2
  [plan fn-name _ _]
  (let [{:keys [id attrs]} plan]
    `(~fn-name
      ~id
      ~(dissoc attrs :value)
      ~(:value attrs))))

(defn plan-fn-bodies-assign
  [fn-name-sym _]
  ['([id value] {:op :VariableV2
                 :id id
                 :assignment value})
   '([id attrs value] {:op :VariableV2
                       :id id
                       :assignment value
                       :attrs attrs})])

(register-op-gen-cfg!
 "VariableV2"
 {:fn-name 'v
  :plan-fn-bodies plan-fn-bodies-assign
  :hook-pre-build  `hook-pre-build-op-override-variable-v2
  :plan->expr plan->expr-variable-v2})

(defn hook-pre-build-op-override-assign
  [args]
  (let [nodes (-> args :g :state deref :nodes)
        value (-> args :plan :inputs first)
        vari (-> args :plan :vari nodes)]
    (-> args
        (assoc-in [:plan :inputs] [vari value])
        (dissoc :vari)
        hook-pre-build-op-default)))

(defn plan-fn-bodies-assign
  [fn-name-sym _]
  ['([id attrs vari value]
     (let [vari-id (or (:id vari)
                       vari)]
       (when (-> vari-id keyword? not)
         (throw (Exception. (str "Invalid assignment target: " vari))))
       (cond-> {:op :Assign :vari vari-id :inputs [value]}
         (not-empty attrs) (assoc :attrs attrs)
         id (assoc :id id))))
   `([~'vari ~'value]
     (~fn-name-sym nil nil ~'vari ~'value))])

(register-op-gen-cfg!
 "Assign"
 {:plan-fn-bodies plan-fn-bodies-assign
  :hook-pre-build  `hook-pre-build-op-override-assign})


(register-op-gen-cfg!
 "Transpose"
 {:plan-fn-bodies (constantly
                   '[([input] {:op :Transpose
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


(defn node-def->plan
  [node-def]
  (let [op-def (-> node-def :op proc-op-list-by-name)]
    (call-config node-def :node-def->plan [node-def op-def])))



(defn plan->expr
  [plan ops-ns-str output-fn-sym]
  (let [op-def (op-list-by-kw (:op plan))
        fn-name (name (get-op-fn-name-sym op-def))]
    (call-config op-def
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

(register-op-gen-cfg!
 :default
 {:op-def-processor op-def-processor-default
  :plan-fn-bodies get-op-fn-body-default
  :hook-pre-build `hook-pre-build-op-default
  :node-def->plan op-gen/node-def->plan-default
  :plan->expr plan->expr-default})

