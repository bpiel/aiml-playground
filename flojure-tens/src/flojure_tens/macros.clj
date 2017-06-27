(ns flojure-tens.macros
  (:require flojure-tens.common
            [flojure-tens.graph :as gr]
            [flojure-tens.op-build :as obld]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.gradients :as grad])
  (:import [flojure_tens.common Graph]))

(defmulti pre-build-macro (fn [^Graph g plan] (:macro plan)))
(defmulti build-macro (fn [^Graph g plan] (:macro plan)))

(defmethod pre-build-macro :default [_ plan] plan)
(defmethod build-macro :default [_ plan] plan)

(defn grad-desc-opt
  [id target]
  {:macro :grad-desc-opt
   :id id
   :inputs [target]})

(defmethod pre-build-macro :grad-desc-opt
  [^Graph g plan]
  (let [{:keys [id inputs]} plan
        [input] inputs
        [v-a v-b] (:inputs input)
        mm-grad {:macro :grad
                 :id :g_MatMul_grad_1
                 :output-idx 0
                 :inputs [input
                          [[1.0 1.0][1.0 1.0]]]}]
    {:id id
     :op :NoOp
     :ctrl-inputs [{:id :g_update_a_1
                    :op :ApplyGradientDescent
                    :inputs [v-a
                             0.5
                             mm-grad]}
                   {:id :g_update_b_1
                    :op :ApplyGradientDescent
                    :inputs [v-b
                             0.5
                             (assoc mm-grad :output-idx 1)]}]}))

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
    (nth (case (:op y-op)
           :Sin (grad/sin y-op y-inputs dx-op)
           :MatMul (grad/matmul y-op y-inputs dx-op))
         (out-idx-fn plan))))
