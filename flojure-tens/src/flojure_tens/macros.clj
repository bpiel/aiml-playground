(ns flojure-tens.macros
  (:require flojure-tens.common
            [flojure-tens.graph :as gr]
            [flojure-tens.ops2 :as ops]
            [flojure-tens.scope :as sc]
            [flojure-tens.op-build :as obld]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.gradients :as grad]
            [flojure-tens.shape :as sh]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph]))

(defmulti pre-build-macro (fn [^Graph g plan] (:macro plan)))
(defmulti build-macro (fn [^Graph g plan] (:macro plan)))

(defmethod pre-build-macro :default [_ plan] plan)
(defmethod build-macro :default [_ plan] plan)

(defn grad-desc-opt
  [id target & [scope]]
  (sc/with-id-scopes (if scope [scope] [])
    (sc/assoc-id-scope
     {:macro :grad-desc-opt
      :id id
      :inputs [target]})))

(defn gradient
  [id y dx output-idx]
  (sc/assoc-id-scope
   {:macro :grad
    :id id
    :output-idx output-idx
    :inputs [y dx]}))

(defn const-same-shape
  [id input value]
  (sc/assoc-id-scope
   {:macro :const-same-shape
    :id id
    :inputs [input]
    :value value}))

(defn merge-things
  [& ms]
  {:vars (vec (apply concat (mapv :vars ms)))
   :plan->outputs (apply merge-with
                        (partial merge-with into)
                        (mapv :plan->outputs ms))})

(defn grad-desc-opt****
  [output input-idx plan]
  (apply merge-things
         {:vars (if (= :VariableV2 (:op plan))
                  [plan]
                  [])
          :plan->outputs {plan [[output input-idx]]}}
         (map-indexed (partial grad-desc-opt**** plan)
                      (:inputs plan))))

(defn grad-desc-opt*
  [plan]
  (apply merge-things
         (map-indexed (partial grad-desc-opt**** nil)
                      (:inputs plan))))

(defn grad-desc-opt***
  [x alpha pairs]
  (if (= 1 (count pairs))
    (let [[[input input-idx]] pairs]
      (when input
        (let [p2 ((:plan->outputs x) input)]
          (gradient (gensym "grad")
                    input
                    (or (grad-desc-opt*** x alpha p2)
                        (const-same-shape (gensym "ones")
                                          input
                                          1.0))
                    input-idx))))
    (ops/add-n nil
               (mapv (fn [p]
                       (grad-desc-opt*** x alpha p))
                     pairs))))

(defn grad-desc-opt**
  [x alpha]
  (mapv #(let [pairs ((:plan->outputs x) %)]
           (ops/apply-gradient-descent (gensym "update")
                                       %
                                       alpha
                                       (grad-desc-opt*** x
                                                         alpha
                                                         pairs)))
        (:vars x)))


(defmethod pre-build-macro :grad-desc-opt
  [^Graph g plan]
  (let [{:keys [id inputs scope]} plan
        [input] inputs
        [v-a v-b] (:inputs input)]
    (sc/with-id-scopes scope
      (ops/no-op id
                 {:ctrl-inputs
                  (grad-desc-opt** (grad-desc-opt* plan)
                                   0.5 )}))))

{:id :g>final
 :op :NoOp
 :ctrl-inputs [{:id :g>update_a_1
                :op :ApplyGradientDescent
                :inputs [{:id :a
                          :op :VariableV2
                          :assignment [1]}
                         {:id :g>AddN_1
                          :op :AddN
                          :inputs [{:macro :grad
                                    :id :g>MatMul_grad_1
                                    :output-idx 0
                                    :inputs [{:op :MatMul
                                              :inputs [{:id :a
                                                        :op :VariableV2
                                                        :assignment [1]}
                                                       {:id :b
                                                        :op :VariableV2
                                                        :assignment [1]}]}
                                             {:macro :grad
                                              :id :g>MatMul_grad_2
                                              :output-idx 0
                                              :inputs [{:op :MatMul
                                                        :inputs [{:op :MatMul
                                                                  :inputs [{:id :a
                                                                            :op :VariableV2
                                                                            :assignment [1]}
                                                                           {:id :b
                                                                            :op :VariableV2
                                                                            :assignment [1]}]}
                                                                 {:op :Sin
                                                                  :inputs [{:id :a
                                                                            :op :VariableV2
                                                                            :assignment [1]}]}]}
                                                       [111]]}]}
                                   {:macro :grad
                                    :id :g>Sin_grad_1
                                    :inputs [{:op :Sin
                                              :inputs [{:id :a
                                                        :op :VariableV2
                                                        :assignment [1]}]}
                                             {:macro :grad
                                              :id :g>MatMul_grad_2
                                              :output-idx 1
                                              :inputs [{:op :MatMul
                                                        :inputs [{:op :MatMul
                                                                  :inputs [{:id :a
                                                                            :op :VariableV2
                                                                            :assignment [1]}
                                                                           {:id :b
                                                                            :op :VariableV2
                                                                            :assignment [1]}]}
                                                                 {:op :Sin
                                                                  :inputs [{:id :a
                                                                            :op :VariableV2
                                                                            :assignment [1]}]}]}
                                                       [111]]}]}]}
                         0.5]}
               {:id :g>update_b_1
                :op :ApplyGradientDescent
                :inputs [:b
                         {:macro :grad
                          :id :g>MatMul_grad_1
                          :output-idx 1
                          :inputs [{:op :MatMul
                                    :inputs [{:id :a
                                              :op :VariableV2
                                              :assignment [1]}
                                             {:id :b
                                              :op :VariableV2
                                              :assignment [1]}]}
                                   {:macro :grad
                                    :id :g>MatMul_grad_2
                                    :output-idx 0
                                    :inputs [{:op :MatMul
                                              :inputs [{:op :MatMul
                                                        :inputs [{:id :a
                                                                  :op :VariableV2
                                                                  :assignment [1]}
                                                                 {:id :b
                                                                  :op :VariableV2
                                                                  :assignment [1]}]}
                                                       {:op :Sin
                                                        :inputs [{:id :a
                                                                  :op :VariableV2
                                                                  :assignment [1]}]}]}
                                             [111]]}]}
                         0.5]}]}

;; TODO caching
(defmethod build-macro :grad
  [^Graph g plan]
  (let [[y-op dx-op] (:inputs plan)
        y-inputs (->> y-op
                      :inputs
                      (map (gr/id->node g)))
        local-scope (str (:id y-op) "_grad")]
    (sc/with-id-scopes (conj (:scope plan) local-scope)
      (case (:op y-op)
        :Sin (grad/sin y-op y-inputs dx-op)
        :MatMul (grad/mat-mul y-op y-inputs dx-op)))))


(defmethod build-macro :const-same-shape
  [^Graph g plan]
  (let [shape (-> plan :inputs first :shapes first)]
    [(ops/c (sh/const-md-vec shape (:value plan)))]))

(defn build
  [^Graph g plan hsh]
  (let [outputs (build-macro g plan)]
    (gr/add-macro-to-state! g hsh outputs)
    outputs))
