(ns flojure-tens.macros
  (:require flojure-tens.common
            [flojure-tens.graph :as gr])
  (:import [flojure_tens.common Graph]))

(defmulti pre-build-macro (fn [^Graph g plan] (:macro plan)))
(defmulti build-macro (fn [^Graph g plan] (:macro plan)))

(defmethod pre-build-macro :default [_ plan] plan)
(defmethod build-macro :default [_ plan] plan)

(defn compute-hash
  [{:keys [id scope] :as plan}]
  (if id
    (hash [id scope])
    (-> plan
        (dissoc :output-idx)
        hash)))

(defn macro-plan->op-plan
  [^Graph g {:keys [output-idx] :as plan}]
  (-> plan
       compute-hash
       ((gr/macro-hash->outputs g))
       (nth (or output-idx 0))))

(defn build
  [^Graph g plan]
  (let [outputs (build-macro g plan)]
    (gr/add-macro-to-state! g (:hsh plan) outputs)
    outputs))
