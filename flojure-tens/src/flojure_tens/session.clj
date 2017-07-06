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
  (let [{:keys [fetch targets feed return-meta options]} req
        g (:graph s)
        outputs (long-array (vec
                             (take (count fetch)
                                   (repeatedly #(:handle (tsr/create-from-value 0))))))
        maybe-meta (tfnative.Session/run
                     (:handle s) 
                     options
                     (long-array []) ;; inputTensorHandles
                     (long-array []) ;; inputOpHandles
                     (int-array [])  ;; inputOpIndices
                     (long-array (plans->handles fetch g)) ;; outputOpHandles
                     (int-array (map #(:output-idx % 0) fetch)) ;; outputOpIndices
                     (long-array (plans->handles targets g))
                     ;; targetOpHandles
                     return-meta
                     outputs)]
    outputs
    #_    {:output-handles outputs
           :meta-data maybe-meta}))

(defn run-req->tensors
  [^Session s ^RunRequest req]
  (let [handles (run-req->handles s req)]
    (mapv tsr/create-from-handle
          handles)))

(defn fetch-all->tensors [^Session session plans & [feed]]
  (-> (mk-run-req plans nil feed)
      (run-req->tensors session)))

(defn fetch->tensor [^Session session plan & [feed]]
  (first (fetch-all->tensors session [plan] feed)))

(defn run [^Session session plan]
  (run-req->tensors session
                    (mk-run-req [] [plan]))
  session)

(defn run-all [^Session session plans]
  (doseq [p plans]
    (run session p))
  session)
