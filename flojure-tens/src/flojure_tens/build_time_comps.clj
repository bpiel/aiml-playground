(ns flojure-tens.build-time-comps
  (:require [flojure-tens.ops :as o]
            [flojure-tens.macros :as mcro]
            [flojure-tens.ops :as ops]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph]))



(defn- mk-variable-attrs
  [value-op]
  (let [{:keys [output-idx shapes dtypes]} value-op]
    {:dtype (-> (nth dtypes (or output-idx 0))
                dt/kw->dt
                :native)
     :shape (nth shapes (or output-idx 0))}))

(defmethod mcro/build-macro :variable
  [^Graph g {:keys [id scope attrs inputs]}]
  (sc/with-id-scopes (conj scope id)
    (let [[init] inputs
          vari (o/v :variable (merge (mk-variable-attrs init)
                                     attrs))]
      [(o/identity-tf :read {} vari)
       (-> (o/assign :init {} vari init)
           (util/append-collections [:global-var-inits])
           util/build-eagerly)
       vari])))


(defn dropout
  ([keep-prob x {:keys [noise-shape seed] :as opts}]
   (drop nil keep-prob opts))
  ([id keep_prob x & {:keys [noise-shape seed]}]
   (sc/with-id-scopes [id]
     
     ))
  )
