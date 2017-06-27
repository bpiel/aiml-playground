(ns flojure-tens.macros
  (:require flojure-tens.common
            [flojure-tens.graph :as gr]
            [flojure-tens.ops2 :as ops]
            [flojure-tens.scope :as sc]
            [flojure-tens.op-build :as obld]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.gradients :as grad])
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
  [id y dx]
  (sc/assoc-id-scope
   {:macro :grad
    :id id
    :output-idx 0
    :inputs [y dx]}))

(defmethod pre-build-macro :grad-desc-opt
  [^Graph g plan]
  (let [{:keys [id inputs scope]} plan
        [input] inputs
        [v-a v-b] (:inputs input)
        mm-grad (sc/with-id-scopes scope
                  (gradient :MatMul_grad_1
                            input
                            [[1.0 1.0][1.0 1.0]]))]
    (sc/with-id-scopes scope
      (ops/noop id
                {:ctrl-inputs [(ops/applygradientdescent :update_a_1
                                                         v-a
                                                         0.5
                                                         mm-grad)
                               (ops/applygradientdescent :update_b_1
                                                         v-b
                                                         0.5
                                                         (assoc mm-grad :output-idx 1))]}))))

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
  (let [out-idx-fn #(or (:output-idx %) 0)
        [y-op dx-op] (:inputs plan)
        y-inputs (->> y-op
                      :inputs
                      (map (gr/nodes g)))]
    (sc/with-id-scopes (:scope plan)
      (nth (case (:op y-op)
             :Sin (grad/sin y-op y-inputs dx-op)
             :MatMul (grad/matmul y-op y-inputs dx-op))
           (out-idx-fn plan)))))
