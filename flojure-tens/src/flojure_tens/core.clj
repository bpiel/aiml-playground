(ns flojure-tens.core
  (:require [flojure-tens.graph :as gr]
            [flojure-tens.builder :as bdr]
            [flojure-tens.session :as sess]
            [flojure-tens.tensor :as tsr]
            flojure-tens.common)
  (:import [flojure_tens.common Graph]
           [flojure_tens.session Session]))

(defn init-variable-assignments [^Graph g])

#_(defn run-plan-ops [graph-plan ops]
  (let [g (bdr/graph-plan->graph graph-plan)
        s (sess/create g)]
    (sess/init-variable-assignments s)
    (sess/run s (sess/mk-run-req ops))))



#_(defn fetch-plan-root [plan]
  "Builds a graph and session. 
Runs the `plan`.
Fetches the value of the root node of `plan`. 
Returns a value."
  (run-plan-ops plan [plan])
  #_  (->> (run-plan-ops plan [plan])
           last
           tsr/get-value))

;; =========================================================

(defn tensor->value [tensor]
  (tsr/get-value-clj tensor))

(defn graph->session [^Graph graph]
  (sess/create graph))

(defn build->graph
  ([plan] (build->graph (gr/create) plan))
  ([^Graph graph plan] (bdr/build->graph graph plan)))

(defn build-all->graph
  ([plans]
   (build-all->graph (build->graph (first plans))
                     (rest plans)))
  ([^Graph graph plans]
   (doseq [p plans]
     (build->graph graph p))
   graph))

(defn build->session
  ([plan]
   (-> plan
       build->graph
       graph->session))
  ([^Graph graph plan]
   (->> plan
        (build->graph graph)
        graph->session)))

(defn build-all->session
  ([plans])
  ([^Graph graph plans]))

(defn run [^Session session plan]
  (sess/run session plan))

(defn run-all [^Session session plans]
  (sess/run-all session plans))

(defn fetch->tensor [^Session session plan & [feed]]
  (sess/fetch->tensor session plan feed))

(defn fetch-all->tensors [^Session session plans]
  (sess/fetch-all->tensors session plans))

(defn fetch [^Session session plan & [feed]]
  (-> (fetch->tensor session plan feed)
      tensor->value))

(defn fetch-all [^Session session plans]
  (->> plans
       (fetch-all->tensors session)
       (map tensor->value)))

(defn exec
  ([plan]
   (-> plan
       build->graph
       (exec plan)))
  ([^Graph graph plan]
   (->> graph
        graph->session
        (run plan))))

(defn exec-all
  ([plans]
   (-> plans
       build-all->session
       (run-all plans)))
  ([^Graph graph plans]
   (-> plans
       (build->session graph)
       (run-all plans))))

(defn run-init-variable-assignments [^Session session]
  (let [g (:graph session)
        inits (bdr/mk-init-assignments-plan g)]
    (build-all->graph g inits)
    (run-all session inits)
    session))

(defn produce->tensor [plan]
  (-> plan
      build->session
      run-init-variable-assignments
      (fetch->tensor plan)))

(defn produce-all->tensors [plans]
  (-> plans
      build-all->session
      run-init-variable-assignments
      (fetch-all->tensors plans)))


(defn produce-all [plans]
  (-> plans
      build-all->session
      run-init-variable-assignments
      (fetch-all plans)))

(defn produce
  ([plan]
   (-> plan
       build->session
       run-init-variable-assignments
       (fetch plan)))
  ([^Session session plan]
   (build->graph (:graph session) plan)
   (fetch session plan)))
