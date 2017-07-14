(ns flojure-tens.core
  (:require [flojure-tens.graph :as gr]
            [flojure-tens.builder :as bdr]
            [flojure-tens.session :as sess]
            [flojure-tens.tensor :as tsr]
            flojure-tens.macros
            flojure-tens.gradients
            flojure-tens.grad-desc-opt
            flojure-tens.plan-time-comps
            flojure-tens.build-time-comps
            flojure-tens.ops
            flojure-tens.common)
  (:import [flojure_tens.common Graph]
           [flojure_tens.session Session]))

(defn init-variable-assignments [^Graph g])

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
  ([plans]
   (-> plans
       build-all->graph
       graph->session))
  ([^Graph graph plans]
   (->> plans
        (build-all->graph graph)
        graph->session)))

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

(defn run-global-vars-init [^Session session]
  (let [g (:graph session)
        inits (gr/get-global-var-init-assign-ops g)]
    (run-all session inits)
    session))

(defn produce->tensor [plan & [feed]]
  (-> plan
      build->session
      run-global-vars-init
      (fetch->tensor plan feed)))

(defn produce-all->tensors [plans & [feed]]
  (-> plans
      build-all->session
      run-global-vars-init
      (fetch-all->tensors plans feed)))


(defn produce-all [plans & [feed]]
  (-> plans
      build-all->session
      run-global-vars-init
      (fetch-all plans feed)))

(defn produce
  ([plan]
   (-> plan
       build->session
       run-global-vars-init
       (fetch plan)))
  ([^Session session plan & [feed]]
   (build->graph (:graph session) plan)
   (fetch session plan feed)))
