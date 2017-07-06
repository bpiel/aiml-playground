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

(defn run [^Session session plan & [feed]]
  (sess/run session plan feed))

(defn run-all [^Session session plans & [feed]]
  (sess/run-all session plans feed))

(defn fetch->tensor [^Session session plan & [feed]]
  (sess/fetch->tensor session plan feed))

(defn fetch-all->tensors [^Session session plans & [feed]]
  (sess/fetch-all->tensors session plans feed))

(defn fetch [^Session session plan & [feed]]
  (-> (fetch->tensor session plan feed)
      tensor->value))

(defn fetch-all [^Session session plans & [feed]]
  (->> (fetch-all->tensors session plans feed)
       (map tensor->value)))

(defn exec
  ([plan]
   (-> plan
       build->graph
       (exec plan)))
  ([^Graph graph plan & [feed]]
   (-> graph
       graph->session
       (run plan feed))))

(defn exec-all
  ([plans]
   (-> plans
       build-all->session
       (run-all plans)))
  ([^Graph graph plans & [feed]]
   (-> plans
       (build->session graph)
       (run-all plans feed))))

(defn run-init-variable-assignments [^Session session]
  (let [g (:graph session)
        inits (bdr/mk-init-assignments-plan g)]
    (build-all->graph g inits)
    (run-all session inits)
    session))

(defn produce->tensor [plan & [feed]]
  (-> plan
      build->session
      run-init-variable-assignments
      (fetch->tensor plan feed)))

(defn produce-all->tensors [plans & [feed]]
  (-> plans
      build-all->session
      run-init-variable-assignments
      (fetch-all->tensors plans feed)))


(defn produce-all [plans & [feed]]
  (-> plans
      build-all->session
      run-init-variable-assignments
      (fetch-all plans feed)))

(defn produce
  ([plan]
   (-> plan
       build->session
       run-init-variable-assignments
       (fetch plan)))
  ([^Session session plan & [feed]]
   (build->graph (:graph session) plan)
   (fetch session plan feed)))
