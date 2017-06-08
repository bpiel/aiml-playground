(ns flojure-tens.builder
  (:require [flojure-tens.ops :as ops]))

(defn- init-graph-map []
  {:graph-handle (tfnative.Graph/allocate)
   :init-varis {}
   :hash->id {}
   :handle->id {}
   :id->op {}})

(defn- apply-op-plan-to-graph-map
  [gm opp]
  )

(defn- apply-plan-to-graph-map
  [gm gp]
  
  )

(defn graph-plan->graph
  [gp])
