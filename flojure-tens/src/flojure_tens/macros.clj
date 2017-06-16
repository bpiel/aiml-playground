(ns flojure-tens.macros
  (:require flojure-tens.common
            [flojure-tens.graph :as gr]
            [flojure-tens.ops2 :as ops])
  (:import [flojure_tens.common Graph]))

{:macro :grad-desc-opt
 :id :required
 :inputs [{:id :...}]}

{:macro :grad
 :id :required
 :inputs [{} ;; y -- target 
          {} ;; dx -- 1s or inputs from previous grad
          ]}


#_(def macro-defs
  {:grad-desc-opt {:pre? true}
   :grad {:pre? false}})

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
        [input] inputs]
    {:macro :grad
     :id :a>b
     #_ :aliases
     :inputs [input [[1.] [1.]]]}))

{:id :g>final
 :op :noop?
 :ctrl-inputs
 [{:id :g>update_a
   :op :assign
   :vari :a
   :value {:id :---
           :op :AddN
           :inputs [{:macro :grad
                     :id :g>MatMul_1_grad
                     :inputs [{:id :MatMul_1
                               :op :MatMul
                               {:inputs}}
                              :TODO]}
                    {:macro :grad
                     :id :g>Sin_1_grad
                     :inputs [{:id :Sin_1
                               :op :Sin}]}]}}]}

(defmethod build-macro :grad
  [^Graph g plan]
  (let [out-idx-fn #(or (:output-idx %) 0)
        [y-op dx-op] (:inputs plan)
        y (:handle y-op)
        y-idx (or (:output-idx y) 0)
        y-inputs (->> y-op
                      :inputs
                      (map (gr/nodes g)))
        x (mapv :handle y-inputs)
        x-idx  (mapv out-idx-fn y-inputs)
        dx (:handle dx-op)
        dx-idx (out-idx-fn dx)
        dy-handles (long-array (count x))
        dy-idx (int-array (count x))]
    (tfnative.Graph/addGradients (:handle g)
                                 (long-array [y]) (int-array [y-idx])
                                 (long-array x) (int-array x-idx)
                                 (long-array [dx]) (int-array [dx-idx])
                                 dy-handles dy-idx)
    (dorun (map (partial gr/add-op-to-state! g)
                (ops/discover-new-ops-from-handles g dy-handles)))
    ;; TODO dy-idx? aliases? what? do something!
    {:outputs dy-handles #_ (mapv ops/get-outputs
                          (get-ops-by-handles dy-handles)
                          dy-idx)
     :nodes [:???]}))
































