(ns flojure-tens.session
  (:require [flojure-tens.util :as util]
            [flojure-tens.tensor :as tsr])
  (:import com.billpiel.flojure_tens.Graph))

(defrecord Session [handle ^Graph g])

(defrecord RunRequest [fetch targets feed options return-meta])

;; https://www.tensorflow.org/api_docs/java/reference/org/tensorflow/Session.Runner
{:targets [] ;; ops
 :feed {} ;; map op/output => tensor
 :fetch [] ;; outputs or operations
 :options (byte-array [])
 :return-meta false}

(defn mk-run-req
  [& [fetch targets feed options return-meta]]
  (RunRequest. (or fetch [])
               (or targets [])
               (or feed {})
               (or options (byte-array []))
               (or return-meta false)))

(defn create [^Graph g])

;; TODO use Graph doSync
(defn- run* [^Session s ^RunRequest req]
  (let [outputs (long-array (-> req :fetch count))
        maybe-meta (tfnative.Session/run
                     (:handle s) 
                     (:options req)
                     (long-array []) ;; inputTensorHandles
                     (long-array []) ;; inputOpHandles
                     (long-array []) ;; inputOpIndices
                     (long-array (map :handles (:fetch req))) ;; outputOpHandles
                     (long-array (map :idx (:fetch req))) ;; outputOpIndices
                     (long-array (map :handle (:targets req))) ;; targetOpHandles
                     (:return-meta req)
                     outputs)] ;; outputTensorHandles  <============ this is where the data lands!?!?!?!?!?!?
    {:outputs outputs
     :meta-data maybe-meta}))

(defn run
  [^Session s ^RunRequest req]
  (mapv tsr/create-from-handle
        (run* s req)))
