(ns flojure-tens.build-time-comps
  (:require [flojure-tens.ops :as o]
            [flojure-tens.macros :as mcro]
            [flojure-tens.ops :as ops]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph Op]))



(defn- mk-variable-attrs
  [^Op value-op]
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
   (dropout nil keep-prob opts))
  ([id keep-prob x & {:keys [noise-shape seed]}]
   (sc/with-id-scopes [id]
     (let [noise-shape' (or noise-shape
                            (o/shape x))
           
           rnd-bin (-> keep-prob
                       (o/add (o/random-uniform nil
                                                {:seed
                                                 :seed2
                                                 :dtype}
                                                noise-shape'))
                       o/floor
                       )
           (o/floor
            (o/add keep-prob
                   (o/random-uniform nil
                                     {:seed
                                      :seed2
                                      :dtype}
                                     noise-shape')))
           rnd-bin (-> noise-shape
                       (or (o/shape x))
                       )
           ]
       (util/$- -> keep-prob
                (o/add rnd)
                o/floor
                (o/mat-mul (o/div x keep-prob) $))))))




















































