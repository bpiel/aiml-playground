(ns flojure-tens.session
  (:require flojure-tens.common
            [flojure-tens.op-node :as op-node]
            [flojure-tens.util :as util]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.builder :as bdr])
  (:import [flojure_tens.common Graph]))

(defrecord Session [handle ^Graph graph])

(defrecord RunRequest [fetch targets feed options return-meta])

;; https://www.tensorflow.org/api_docs/java/reference/org/tensorflow/Session.Runner
{:targets [] ;; ops
 :feed {} ;; map op/output => tensor
 :fetch [] ;; outputs or operations
 :options (byte-array [])
 :return-meta false}

(defn mk-run-req
  [& [fetch targets feed return-meta options]]
  (RunRequest. (or fetch [])
               (or targets [])
               (or feed {})
               (or options (byte-array []))
               (or return-meta false)))

(defn create [^Graph g]
  (Session. (tfnative.Session/allocate (:handle g))
            g))

(defn- plans->handles
  [plans ^Graph g]
  (or (some->> plans
               not-empty
               (mapv (partial op-node/get-op-by-plan g))
               (mapv :handle))
      []))

;; TODO use Graph doSync
(defn run-req->handles
  [^Session s ^RunRequest req]
  (let [fetch-count (-> req :fetch count)
        g (:graph s)
        outputs (long-array (vec
                             (take fetch-count
                                   (repeatedly #(:handle (tsr/create-from-value 0))))))
        maybe-meta (tfnative.Session/run
                     (:handle s) 
                     (:options req)
                     (long-array []) ;; inputTensorHandles
                     (long-array []) ;; inputOpHandles
                     (int-array [])  ;; inputOpIndices
                     (long-array (-> req :fetch (plans->handles g))) ;; outputOpHandles
                     (int-array (->> req :fetch (map #(:output-idx % 0)))) ;; outputOpIndices
                     (long-array (-> req :targets (plans->handles g)))
                     ;; targetOpHandles
                     (:return-meta req)
                     outputs)]
    outputs
    #_    {:output-handles outputs
           :meta-data maybe-meta}))

(defn run-req->tensors
  [^Session s ^RunRequest req]
  (let [handles (run-req->handles s req)]
    (mapv tsr/create-from-handle
          handles)))

(defn fetch-all->tensors [^Session session plans]
  (->> plans
       mk-run-req
       (run-req->tensors session)))

(defn fetch->tensor [^Session session plan]
  (first (fetch-all->tensors session [plan])))

(defn run [^Session session plan]
  (run-req->tensors session
                    (mk-run-req [] [plan]))
  session)

(defn run-all [^Session session plans]
  (doseq [p plans]
    (run session p))
  session)
