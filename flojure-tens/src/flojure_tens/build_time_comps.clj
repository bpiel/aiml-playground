(ns flojure-tens.build-time-comps
  (:require [flojure-tens.ops :as o]
            [flojure-tens.macros :as mc]
            [flojure-tens.ops :as ops]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph Op]))



(defn- get-shapes-attrs
  [^Op value-op]
  (let [{:keys [output-idx shapes dtypes]} value-op]
    {:dtype (-> (nth dtypes (or output-idx 0))
                dt/kw->dt
                :native)
     :shape (nth shapes (or output-idx 0))}))

(defmethod mc/build-macro :variable
  [^Graph g {:keys [id scope attrs inputs]}]
  (sc/with-id-scopes (conj scope id)
    (let [[init] inputs
          vari (o/v :variable (merge (get-shapes-attrs init)
                                     attrs))]
      [(o/identity-tf :read {} vari)
       (-> (o/assign :init {} vari init)
           (util/append-collections [:global-var-inits])
           util/build-eagerly)
       vari])))


(defn dropout
  ([keep-prob x]
   (dropout nil keep-prob x {}))
  ([id keep-prob x & [{:keys [noise-shape seed seed2]}]]
   (sc/with-id-scopes [(or id :dropout)]
     (let [dtype (-> x get-shapes-attrs :dtype)
           rnd-bin (util/$- -> noise-shape
                            (or (o/shape x))
                            (o/random-uniform
                             {:seed (or seed
                                        (rand-int Integer/MAX_VALUE))
                              :seed2 (or seed2
                                         (rand-int Integer/MAX_VALUE))
                              :dtype dtype}
                             $)
                            (o/add keep-prob $)
                            o/floor)]
       (-> x
           (o/div keep-prob)
           (o/mul rnd-bin))))))

(defmethod mc/build-macro :dropout
  [^Graph g {:keys [id inputs noise-shape seed seed2] :as args}]
  (let [[keep-prob x] inputs]
    [(dropout id keep-prob x args)]))

