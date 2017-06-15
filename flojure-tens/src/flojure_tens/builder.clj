(ns flojure-tens.builder
  (:require flojure-tens.common
            [flojure-tens.ops2 :as ops]
            [flojure-tens.graph :as gr])
  (:import [flojure_tens.common Graph Op]))

(defn call-op-builder
  [^Graph g opp input-ops]
  (let [{:keys [nodes ids-by-hash]} (-> g :state deref)
        hsh (ops/compute-hash opp)]
    (if-let [op (some-> hsh ids-by-hash nodes)]
      op
      (ops/build g
                 (assoc opp :inputs input-ops)
                 (ops/compute-hash opp)))))

(defn- apply-op-plan-to-graph!
  [^Graph g opp]
  (let [op (cond
             (map? opp)
             (let [{:keys [inputs]} opp
                   input-ops (mapv (partial apply-op-plan-to-graph! g)
                                   inputs)]
               (call-op-builder g opp input-ops))
             (ops/Op? opp) opp
             :else (call-op-builder g (ops/c opp) []))]
    op))

(defn apply-plan-to-graph!
  [^Graph g gp]
  (cond (sequential? gp)
        (mapv (partial apply-op-plan-to-graph! g)
              gp)
        (map? gp)
        (apply-op-plan-to-graph! g gp)
        :else
        (throw (Exception. "This plan makes no sense!"))))

(defn graph-plan->graph+ops
  [gp]
  (let [g (gr/create)]
    [g (apply-plan-to-graph! g gp)]))

(defn graph-plan->graph
  [gp]
  (-> gp
      graph-plan->graph+ops
      first))

(defn mk-assignments-plan
  [^Graph g]
  (let [va (-> g :state deref :variable-assigments)]
    (mapv (fn [[vari value]] (ops/assign vari (ops/c value)))
          va)))

(defn build-init-assignment-ops
  [^Graph g]
  (->> g
       mk-assignments-plan
       (apply-plan-to-graph! g)))

(defn assoc-meta-handle-to-plan
  [p]
  (assoc p :handle (-> p meta ::ops/handle)))

(defn discover-new-ops-from-id*
  [^Graph g discovered id]
  (if (contains? discovered id)
    [discovered []]
    (let [plan (assoc-meta-handle-to-plan (ops/id->plan g id))]
      [(assoc discovered
              (:id plan)
              plan)
       (flatten (into (:inputs plan)
                      (:ctrl-inputs plan)))])))

(defn discover-new-ops-from-ids
  [^Graph g ids]
  (loop [discovered (into {}
                          (for [[k _] (-> g :state deref :nodes)]
                            [k nil]))
         [id & tail] ids]
    (if id
      (let [[d ids'] (discover-new-ops-from-id* g discovered id)]
        (recur d (into ids' tail)))
      (->> discovered
           vals
           (remove nil?)))))

(defn discover-new-ops-from-handles
  [^Graph g op-handles]
  (discover-new-ops-from-ids g
                             (map ops/handle->id op-handles)))































