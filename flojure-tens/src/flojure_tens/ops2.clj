(ns flojure-tens.ops2
  (:require [flojure-tens.data-type :as dt]
            [flojure-tens.graph :as gr]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.shape :as sh]
            [flatland.protobuf.core :as pr]
            [flojure-tens.common])
  (:import [flojure_tens.common Graph Op]
           [org.tensorflow.framework OpDef OpList]))


(def OpDefP (pr/protodef OpDef))
(def OpListP (pr/protodef OpList))

(def op-list (pr/protobuf-load OpListP (tfnative.TensorFlow/registeredOpList)))


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

(def op-fn-name-override
  {"Const" 'c})

(def op-fn-bodies-override
  {"Const" '[([value] {:op :const :value value})]})

(defn default-op-def-processor
  [op-def]
  (-> op-def
      (update :attr (fn [a] (vec (remove #(-> % :name str first (= \T))
                                         a))))))


(defn get-op-kw
  [op-def]
  (keyword (clojure.string/lower-case (:name op-def))))


(defn convert-attr
  [value def-type]
  (case def-type
    "tensor" (tsr/create-from-value value)
    value))

(defn convert-attrs
  [plan-attrs def-attr]
  (clojure.pprint/pprint [plan-attrs def-attr])
  (mapv (fn [{attr-name :name
              attr-type :type}]
          [attr-name
           (convert-attr (-> attr-name
                             keyword
                             plan-attrs)
                         attr-type)])
        def-attr))

(defn hook-pre-build-op-default
  [args]
  (-> args
      (update-in [:plan :attrs] convert-attrs (-> args :op-def :attr))))

(defn hook-pre-build-op-override-const
  [args]
  (println "hook-pre-build-op-override-const")
  (let [value (-> args :plan :value)
        dtype (-> value dt/data-type-of-whatever :native)]
    (-> args
        (assoc-in [:plan :attrs :dtype] dtype)
        (assoc-in [:plan :attrs :value] value)
        (update-in [:plan] dissoc :value)
        hook-pre-build-op-default)))

(def hook-pre-build-op-override
  {"Const" hook-pre-build-op-override-const})

(defn hook-pre-build-op
  [args]
  ((or (-> args :op-def :name hook-pre-build-op-override)
       hook-pre-build-op-default)
   args))

(defn dyn-defn
  [name-sym bodies]
  (eval `(def ~name-sym
           (fn ~@bodies))))

(defn dyn-defmethod
  [name-sym dispatch-val body]
  (eval `(defmethod ~name-sym ~dispatch-val
           ~body)))


(defn get-op-fn-name-sym [op-def]
  (or (op-fn-name-override (:name op-def))
      (symbol (clojure.string/lower-case (:name op-def)))))

(get-op-fn-name-sym const-op)

(get-op-fn-name-sym add-op)

(defn get-op-fn-body*
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

(get-op-fn-body* 'add add-op)

(dyn-defn-op add-op)

(defn get-op-fn-body [fn-name-sym op-def]
  (or (op-fn-bodies-override (:name op-def))
      (get-op-fn-body* fn-name-sym op-def)))

(defn dyn-defn-op [op-def]
  (let [fn-name-sym (get-op-fn-name-sym op-def)]
    (dyn-defn
     fn-name-sym
     (get-op-fn-body fn-name-sym op-def))))


(defn build-op
  [{:keys [^Graph g plan hsh op-def]}]
  [g plan hsh op-def])

(defmulti build (fn [g op-plan hsh] (:op op-plan)))

(defn get-op-build-fn-body
  [op-def]
  (list '[g plan hsh]
        `(build-op
          (hook-pre-build-op
           {:g ~'g :plan ~'plan :hsh ~'hsh :op-def ~op-def}))))

(clojure.pprint/pprint  (get-op-build-fn-body add-op))



(defn dyn-defmethod-op-build
  [op-def]
  (let [op-kw (get-op-kw op-def)]
    (dyn-defmethod 'build
                   op-kw
                   (get-op-build-fn-body op-def))))

(clojure.pprint/pprint  (get-op-build-fn-body const-op))

(dyn-defn-op const-op)

(dyn-defmethod-op-build const-op)

(clojure.pprint/pprint 
 (build nil (c 33) 1 ))



(add 1 2)

(dyn-defn 'f1 '(([a] (inc a))))

(macroexpand '(defn hi ([a] a) ([a b] b)))

(clojure.pprint/pprint add-op)

(clojure.pprint/pprint const-op)
