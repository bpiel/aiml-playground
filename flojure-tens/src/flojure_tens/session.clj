(ns flojure-tens.session
  (:require flojure-tens.common
            [flojure-tens.ops :as ops]
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

;; TODO use Graph doSync
(defn- run* [^Session s ^RunRequest req]
  (def r1 req)
  (let [g (:graph s)
        outputs (long-array [(:handle (tsr/create-from-value 0))])
        maybe-meta (tfnative.Session/run (:handle s) 
                     (:options req)
                     (long-array []) ;; inputTensorHandles
                     (long-array []) ;; inputOpHandles
                     (int-array [])  ;; inputOpIndices
                     (long-array (->> req
                                      :fetch
                                      (mapv (partial ops/get-op-by-plan g))
                                      (mapv :handle))) ;; outputOpHandles
                     (int-array (repeat (count (:fetch req)) 0)) ;; outputOpIndices
                     (long-array (->> req
                                      :targets
                                      (mapv (partial ops/get-op-by-plan g))
                                      (mapv :handle)))
                     ;; targetOpHandles
                     (:return-meta req)
                     outputs)]
    

    #_    (clojure.pprint/pprint maybe-meta)
    outputs
    #_    {:output-handles outputs
           :meta-data maybe-meta}))




(defn run
  [^Session s ^RunRequest req]
  (let [ts (run* s req)]
    (mapv tsr/create-from-handle
          ts)))

(defn run-plan->session
  ^Session [plan]
  (let [g (bdr/graph-plan->graph plan)
        s (create g)]
    (def s1 s)
    (run s (mk-run-req [plan]))
    s))

(defn run-plan-w-session
  [^Session s plan]
  (run s (mk-run-req plan)))

(defn init-variable-assignments
  [^Session s]
  (let [g (:graph s)
        va-plan (bdr/mk-assignments-plan g)]
    (when (not-empty va-plan)
      (bdr/apply-plan-to-graph! g va-plan)
      ;; because there must be exactly one output
      (run s (mk-run-req [(first va-plan)]  va-plan)))))

#_ (def va-ops (-> s1 :graph bdr/build-init-assignment-ops))

#_ (def x (init-variable-assignments s1))


















































