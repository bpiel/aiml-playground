(ns flojure-tens.session
  (:require [flojure-tens.common :as com]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.macros :as mcro]
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

(defn- ->op-node
  [^Graph g x]
  (cond (com/Op? x) x
        (:op x) (op-node/get-op-by-plan g x)
        (:macro x) (->> x
                        (mcro/macro-plan->op-plan g)
                        (op-node/get-op-by-plan g))))

(defn- ->handles
  [plans ^Graph g]
  (or (some->> plans
               not-empty
               (mapv (partial ->op-node g))
               (mapv :handle))
      []))

(defn feed->
  [^Graph g feed]
  (let [{:keys [id->node]} (-> g :state deref)]
    (if (not-empty feed)
      (apply map vector
             (for [[k v] feed]
               [(-> v tsr/create-from-value :handle)
                (-> k name id->node :handle)
                ;; TODO don't hard code 0
                0]))
      [[] [] []])))

;; TODO use Graph doSync
(defn run-req->handles
  [^Session s ^RunRequest req]
  (let [{:keys [fetch targets feed return-meta options]} req
        g (:graph s)
        outputs (long-array (vec
                             (take (count fetch)
                                   (repeatedly #(:handle (tsr/create-from-value 0))))))
        [in-tsrs in-ops in-idx] (feed-> g feed)
        maybe-meta (tfnative.Session/run
                     (:handle s) 
                     options
                     (long-array in-tsrs) ;; inputTensorHandles
                     (long-array in-ops) ;; inputOpHandles
                     (int-array in-idx)  ;; inputOpIndices
                     (long-array (->handles fetch g)) ;; outputOpHandles
                     (int-array (map #(:output-idx % 0) fetch)) ;; outputOpIndices
                     (long-array (->handles targets g))
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
  (->> (mk-run-req plans nil feed)
       (run-req->tensors session)))

(defn fetch->tensor [^Session session plan & [feed]]
  (first (fetch-all->tensors session [plan] feed)))

(defn run [^Session session plan & [feed]]
  (run-req->tensors session
                    (mk-run-req [] [plan] feed))
  session)

(defn run-all [^Session session plans & [feed]]
  (doseq [p plans]
    (run session p feed))
  session)
