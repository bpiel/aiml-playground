(ns flojure-tens.core
  (:require [flojure-tens.graph :as gr]
            [flojure-tens.builder :as bdr]
            [flojure-tens.session :as sess]
            [flojure-tens.tensor-mgr :as tm]
            [flojure-tens.op-node :as opn]
            flojure-tens.macros
            flojure-tens.gradients
            flojure-tens.grad-desc-opt
            flojure-tens.plan-time-comps
            flojure-tens.build-time-comps
            flojure-tens.ops
            flojure-tens.common)
  (:import [flojure_tens.common Graph]
           [flojure_tens.session Session]))

#_ (def plugins (atom #{}))
(defonce plugins (atom #{})) ;; only support one for now?

(defmulti close (fn [v] (type v)))

(defmethod close :default [_])

(defmethod close Graph [v]
  (tfnative.Graph/delete (:handle v))
  (reset! (:closed v) true))

(defmethod close Session [v]
  (tfnative.Session/delete (:handle v)))

(defn with-close-let*
  [bindings body]
  (let [syms (->> bindings
                  (partition 2)
                  (map first)
                  (mapcat (partial tree-seq coll? seq))
                  (filter symbol?))]
    `(let ~bindings
       (let [r# (do ~@body)]
         (doseq [sym# [~@syms]] ;; TODO close graphs before sessions
           (close sym#))
         r#))))

(defmacro with-close-let
  [bindings & body]
  (with-close-let* bindings body))

(defn tensor->value [tensor]
  (:value tensor))

(defn delete-tensor->value [tensor]
  (let [r (tensor->value tensor)]
    (tm/release-tensor-ref tensor)    
    r))

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
      :value))

(defn fetch-all [^Session session plans & [feed]]
  (->> (fetch-all->tensors session plans feed)
       (map :value)))

(defn fetch-map [^Session session plans & [feed]]
  (let [g (:graph session)]
    (zipmap (map (comp :id
                       (partial opn/get-op-by-plan g))
                 plans)
            (fetch-all session plans feed))))

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
   (with-close-let [{:keys [graph] :as session} (build->session plan)]
     (-> session
         run-global-vars-init
         (fetch plan))))
  ([^Session session plan & [feed]]
   (build->graph (:graph session) plan)
   (fetch session plan feed)))

(defmulti call-plugin (fn [plugin-id+hook & args] plugin-id+hook))
(defmethod call-plugin :default
  [[_ hook] & args] nil)

(defn- call-plugins
  [hook m & args]
  (let [plugin-ids @plugins]
    (mapv #(apply call-plugin [% hook] m args)
            plugin-ids)))

(defn- ws-init-graph&session
  [{:keys [state] :as m}]
  (if-let [session (:session @state)]
    session
    (let [s (build->session [])]
      (call-plugins :init m)
      (swap! state assoc :session s)
      s)))

(defn ws-build
  [m]
  (let [{:keys [graph]}  (ws-init-graph&session m)]
    (call-plugins :pre-build m)
    (build-all->graph graph build)
    (call-plugins :post-build m)
    true))

(defn mk-workspace
  [ws-name ws-def]
  (let [m {:state (atom {})
           :ws-name ws-name
           :ws-def ws-def
           :plugins @plugins}]
    (call-plugins :new m)
    m))

(defmacro def-workspace
  [ws-name & body]
  `(def ~ws-name
     (mk-workspace '~ws-name
                   (do ~@body))))

#_
(def-workspace ws1
  {:what :who})
