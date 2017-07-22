(ns flojure-tens.layers
  (:require [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.macros :as mc]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph Op]))

(defn ru [shape]
  (o/sub (o/random-uniform {:dtype dt/float-kw}
                           shape)
         (float 0.5)))

(defn- mk-kernel
  [{:keys [scope input-shape filters kernel-size dtype]}]
  (let [kernel-shape (conj kernel-size (last input-shape) filters)]
    (sc/with-variable-scope scope
      (p/v :kernel
           {:dtype dtype
            :shape kernel-shape}
           (ru kernel-shape)))))

;; TODO  o/bias-add
(defmethod mc/build-macro :conv2d
  [^Graph g {:keys [id inputs filters kernel-size padding activation]}]
  (let [[input] inputs
        {:keys [shape dtype]} (opn/get-desc-of-output input)
        kernel (mk-kernel {:scope id
                           :input-shape shape
                           :dtype dtype
                           :filters filters
                           :kernel-size kernel-size})
        bias (sc/with-variable-scope id
               (p/v :bias
                    {:dtype dtype
                     :shape [filters]}
                    (p/zeros [filters] dtype)))]
    [(-> (o/conv2-d id
                    {:strides [1 1 1 1]
                     :padding (or padding "VALID")
                     :data_format "NHWC"} ;; TODO
                    input
                    kernel)
         (o/bias-add bias)
         ;; TODO don't hardcode activation
         o/relu)])) 

(defn conv2d
  [{:keys [id filters kernel-size padding activation] :as opts} input]
  (merge opts
         {:macro :conv2d
          :inputs [input]}))

(defmethod mc/build-macro :max-pooling2d
  [^Graph g {:keys [id inputs pool-size strides]}]
  [(o/max-pool {:id id
                :ksize (vec (concat [1] pool-size [1])) ;; TODO assumes 'channels_last'
                :strides (vec (concat [1] strides [1]))
                :padding "VALID"
                :data_format "NHWC"}
               (first inputs))])

(defn max-pooling2d
  [{:keys [id pool-size strides] :as opts} input]
  (merge opts
         {:macro :max-pooling2d
          :inputs [input]}))


(defmethod mc/build-macro :dense
  [^Graph g {:keys [id inputs relu? units]}]
  (let [[input] inputs
        {:keys [dtype shape]} (opn/get-desc-of-output input)
        out-sh (-> shape
                   last
                   (vector units))
        kernel (sc/with-variable-scope id
                 (p/v :kernel
                      ;; trunc-normal vs rand-uni makes big diff for mnist!?!?! -- although results are bad for both (currently)
                      (ru out-sh)))
        bias (sc/with-variable-scope id
               (p/v :bias
                    (p/zeros [units] dtype)))]
    [(-> input
         (o/mat-mul kernel)
         (o/bias-add bias)
         ((if relu? o/relu identity)))]))

(defn dense
  [id relu? units input]
  {:macro :dense
   :id id
   :inputs [input]
   :units units
   :relu? relu?})



