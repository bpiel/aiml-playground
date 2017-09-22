(ns flojure-tens.macros
  (:require flojure-tens.common
            [flojure-tens.graph :as gr]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as ut])
  (:import [flojure_tens.common Graph]))

(defmulti pre-build-macro (fn [^Graph g plan] (:macro plan)))
(defmulti build-macro (fn [^Graph g plan] (:macro plan)))

(defmethod pre-build-macro :default [_ plan] plan)
(defmethod build-macro :default [_ plan]
  (if (contains? plan :macro)
    (throw (Exception. (str "Unknown macro " plan)))
    plan))

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

#_(defn build
  [^Graph g plan]
  (let [outputs (build-macro g plan)]
    (gr/add-macro-to-state! g (:hsh plan) outputs)
    outputs))

(defn- mk-id
  [^Graph g base-kw]
  (-> base-kw
      name
      (str "_" (swap! (:counter g)
                      inc))
      keyword))

(defn build
  [^Graph g {:keys [macro id scope var-scope hsh no-auto-scope?] :as plan}]
  (let [id' (or id (mk-id g macro))
        outputs (binding [ut/*macro-meta* (meta plan)]
                  (if no-auto-scope? ;; TODO not great
                    (build-macro g plan)
                    (sc/with-push-id-scope (conj scope id')
                      (sc/with-reuse-var-scope var-scope id'
                        (build-macro g plan)))))]
    (gr/add-macro-to-state! g hsh outputs)
    outputs))
