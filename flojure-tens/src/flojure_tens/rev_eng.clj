(ns flojure-tens.rev-eng
  (:require [flojure-tens.graph :as gr])
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef]
           [tfnative Graph]))

(def GraphDefP (pr/protodef GraphDef))

(defn src->fn [src])

(defn graph-plan->src [graph-plan])

(defn graph->graph-plan [graph-def])

(defn graph-def->graph
  "Takes a byte-array."
  [graph-def]
  (let [g (gr/create)]
    (tfnative.Graph/importGraphDef (:handle g)
                                   graph-def
                                   "")))
