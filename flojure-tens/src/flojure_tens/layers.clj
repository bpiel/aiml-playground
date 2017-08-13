(ns flojure-tens.layers
  (:require [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.macros :as mc]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt]
            [clojure.walk :as w])
  (:import [flojure_tens.common Graph Op]))

(defn- mk-id
  [^Graph g base-kw]
  (-> base-kw
      name
      (str "_" (swap! (:counter g)
                      inc))
      keyword))

(defn mk-activation-template
  [a]
  (if (fn? a)
    (a :$/input)
    a))

(defn mk-activation-plan
  [template input]
  (if-not (nil? template)
    (w/postwalk-replace {:$/input input}
                        template)
    input))

(defn ru [shape]
  (o/mul (o/sub (o/random-uniform {:dtype dt/float-kw}
                                  shape)
                (float 0.5))
         0.5))


(defn- mk-kernel
  [{:keys [input-shape filters kernel-size dtype]}]
  (let [kernel-shape (conj kernel-size (last input-shape) filters)]
    (p/v :kernel
         {:dtype dtype
          :shape kernel-shape}
         (ru kernel-shape))))

(defmethod mc/build-macro :conv2d
  [^Graph g {:keys [id inputs filters kernel-size padding activation]}]
  (let [[input] inputs
        {:keys [shape dtype]} (opn/get-desc-of-output input)
        kernel (mk-kernel {:input-shape shape
                           :dtype dtype
                           :filters filters
                           :kernel-size kernel-size})
        bias (p/v :bias
                  {:dtype dtype
                   :shape [filters]}
                  (p/zeros [filters] dtype))]
    [(-> (o/conv-2d {:strides [1 1 1 1]
                     :padding (or padding "VALID")
                     :data_format "NHWC"} ;; TODO
                    input
                    kernel)
         (o/bias-add bias)
         ((partial mk-activation-plan activation)))])) 

(defn conv2d
  [{:keys [id filters kernel-size padding activation] :as opts} input]
  (->> {:macro :conv2d
        :inputs [input]
        :activation (mk-activation-template activation)}
       (merge opts)
       sc/assoc-scopes-to-plan))

(defmethod mc/build-macro :max-pooling2d
  [^Graph g {:keys [id inputs pool-size strides]}]
  [(o/max-pool {:ksize (vec (concat [1] pool-size [1])) ;; TODO assumes 'channels_last'
                :strides (vec (concat [1] strides [1]))
                :padding "VALID"
                :data_format "NHWC"}
               (first inputs))])

(defn max-pooling2d
  [{:keys [id pool-size strides] :as opts} input]
  (->> {:macro :max-pooling2d
        :inputs [input]}
       (merge opts)
       sc/assoc-scopes-to-plan))

(defmethod mc/build-macro :dense
  [^Graph g {:keys [id inputs activation units]}]
  (let [[input] inputs
        {:keys [dtype shape]} (opn/get-desc-of-output input)
        out-sh (-> shape
                   last
                   (vector units))
        kernel (p/v :kernel
                    (ru out-sh))
        bias (p/v :bias
                  (p/zeros [units] dtype))]
    [(-> input
         (o/mat-mul kernel)
         (o/bias-add bias)
         ((partial mk-activation-plan activation)))]))

(defn dense
  [{:keys [id activation units]} input]
  (sc/assoc-scopes-to-plan
   {:macro :dense
    :id id
    :inputs [input]
    :units units
    :activation (mk-activation-template activation)}))
