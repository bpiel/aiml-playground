(ns flojure-tens.build-time-comps
  (:require [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.macros :as mc]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph Op]))

(defn- mk-id
  [^Graph g base-kw]
  (-> base-kw
      name
      (str "_" (swap! (:counter g)
                      inc))
      keyword))

(defmethod mc/build-macro :variable
  [^Graph g {:keys [id var-scope attrs inputs]}]
  (sc/with-scopes-syncd (update var-scope :scope conj id)
    (let [[init] inputs
          vari (o/variable :variable (merge (opn/get-desc-of-output init)
                                     attrs))]
      [(o/identity-tf :read {} vari)
       (-> (o/assign :init {} vari init)
           (util/append-collections [:global-var-inits])
           util/build-eagerly)
       vari])))

;; TODO move to layers?
(defn dropout
  ([^Graph g keep-prob x]
   (dropout g nil keep-prob x {}))
  ([^Graph g id keep-prob x & [{:keys [noise-shape seed seed2]}]]
   (sc/with-id-scope (or id
                         (mk-id g :dropout))
     (let [dtype (-> x opn/get-desc-of-output :dtype)
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
    [(dropout g id keep-prob x args)]))

