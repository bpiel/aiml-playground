(ns flojure-tens.ops-gen-config
  (:require [flojure-tens.ops-gen-util :as ogu]
            [flojure-tens.data-type :as dt]
            [flojure-tens.shape :as sh]
            [flatland.protobuf.core :as pr]
            [flojure-tens.common :as com]
            [flojure-tens.util :as util])
  (:import [flojure_tens.common Graph Op GraphRef]
           [org.tensorflow.framework OpDef OpList NodeDef]))


(def skip-ops #{"Variable"})
(def gen-config (atom {}))

(def OpListP (pr/protodef OpList))

(defn register-op-gen-cfg!
  [tf-op config-map]
  (swap! gen-config assoc tf-op config-map))

(defn fetch-config
  [op-def kw]
  (let [gc @gen-config]
    (or (some-> op-def :name gc kw)
        (some-> :default gc kw))))

(defn call-config
  [op-def kw args]
  (when-let [f (fetch-config op-def kw)]
    (apply f args)))

;; Op Gen Defaults =========================================================

(defn hook-pre-build-op-default
  [args]
  (-> args
      (update-in [:plan :attrs] ogu/convert-attrs (-> args :op-def :attr))))

(defn get-op-fn-body-default
  [fn-name-sym op-def]
  (let [input-syms (mapv #(-> % :name symbol)
                         (:input-arg op-def))
        args-id (into ['id] input-syms)
        args-id-attrs (into ['id 'attrs] input-syms)]
    (list (list args-id-attrs
                {:op (ogu/get-op-kw op-def)
                 :inputs input-syms
                 :ctrl-inputs '(:ctrl-inputs attrs)
                 :id 'id
                 :attrs '(dissoc attrs :ctrl-inputs)})
          (list args-id
                `(~fn-name-sym ~'id {} ~@input-syms))
          (list input-syms
                `(~fn-name-sym nil {} ~@input-syms)))))

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


(defn hook-pre-build-op-override-addn
  [args]
  (let [dtype (-> args :plan :attrs :value dt/data-type-of-whatever :native)]
    (-> args
        (assoc-in [:plan :attrs :N] (-> args :plan :inputs first count))
        hook-pre-build-op-default)))

(register-op-gen-cfg!
 "AddN"
 {:hook-pre-build `hook-pre-build-op-override-addn})


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
  (let [plan (:plan args)
        value (:assignment plan)
        attrs (:attrs plan)
        dtype (or (some-> attrs :dtype dt/kw->dt :native)
                  (-> value dt/data-type-of-whatever :native))
        shape (or (some-> attrs :shape)
                  (sh/shape-of-seq value))]
    (-> args
        (update-in [:plan :attrs] merge {:dtype dtype :shape shape})
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
  (let [id->node (-> args :g :state deref :id->node)
        value (-> args :plan :inputs first)
        vari (-> args :plan :vari id->node)]
    (-> args
        (assoc-in [:plan :inputs] [vari value])
        (dissoc :vari)
        hook-pre-build-op-default)))

(defn ->tf-id
  [x]
  (cond (com/Op? x) (:id x)
        (map? x) (util/mk-tf-id (:scope x) (:id x))
        (keyword? x) (name x)
        (string? x) x
        :else nil))

(defn plan-assign
  ([id attrs vari value]
   (let [vari-id (->tf-id vari)]
     (when-not vari-id
       (throw (Exception. (str "Invalid assignment target: " vari))))
     (cond-> {:op :Assign :vari vari-id :inputs [value]}
       (not-empty attrs) (assoc :attrs attrs)
       id (assoc :id id))))
  ([vari value]
   (plan-assign nil nil vari value)))

(defn plan-fn-bodies-assign
  [_ _]
  [`([~'id ~'attrs ~'vari ~'value]
     (plan-assign ~'id ~'attrs ~'vari ~'value))
   `([~'vari ~'value]
     (plan-assign nil nil ~'vari ~'value))])

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

(defn op-def-processor-default
  [op-def]
  (-> op-def
      (assoc :kw (ogu/get-op-kw op-def))
      (update :attr (fn [a] (vec (remove #(-> % :name str first (= \T))
                                         a))))))

;; dumb
(register-op-gen-cfg!
 :default
 {:op-def-processor op-def-processor-default})


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
 
(register-op-gen-cfg!
 :default
 {:op-def-processor op-def-processor-default
  :plan-fn-bodies get-op-fn-body-default
  :hook-pre-build `hook-pre-build-op-default
  :node-def->plan ogu/node-def->plan-default
  :plan->expr plan->expr-default})

