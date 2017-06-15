(ns flojure-tens.macros
  (:require flojure-tens.common
            [flojure-tens.graph :as gr]
            [flojure-tens.ops2 :as ops])
  (:import [flojure_tens.common Graph]))

{:macro :grad-desc-opt
 :id :required
 :target {:id :...}}

{:macro :grad
 :id :required
 :inputs [{} ;; y -- target 
          {} ;; dx -- 1s or inputs from previous grad
          ]}


(def macro-defs
  {:grad-desc-opt {:pre? true}
   :grad {:pre? false}})

(defmulti build-macro (fn [^Graph g plan] (:macro plan)))

(defmethod build-macro nil [_ plan] plan)

(defmethod build-macro :grad
  [^Graph g plan]
  (let [out-idx-fn #(or (:output-idx %) 0)
        [y-op & dx-ops] (:inputs plan)
        y (:handle y-op)
        y-idx (or (:output-idx y) 0)
        x (mapv :handle (:inputs y-op))
        x-idx  (mapv out-idx-fn (:inputs y-op))
        dx (mapv :handle dx-ops)
        dx-idx (mapv out-idx-fn dx)
        dy-handles (long-array (count x))
        dy-idx (int-array (count x))]
    (tfnative.Graph/addGradients (:handle g)
                                 (long-array [y]) (int-array [y-idx])
                                 (long-array x) (int-array x-idx)
                                 (long-array dx) (int-array dx-idx)
                                 dy-handles dy-idx)
    (dorun (map (partial gr/add-output-by-handle! g)
                dy-handles dy-idx))
    {:outputs [] #_ (mapv ops/get-outputs
                       (get-ops-by-handles dy-handles)
                       dy-idx)
     :nodes [:???]}))
