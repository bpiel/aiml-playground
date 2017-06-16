(ns flojure-tens.scratch2
  (:require [flojure-tens.core :as ft]
            [flojure-tens.session :as sess]
            [flojure-tens.ops2 :as ops]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.data-type :as dt]
            [flojure-tens.builder :as bdr]
            [flojure-tens.macros :as mcro]
            [flatland.protobuf.core :as pr])
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [flojure_tens.common Graph Op GraphRef]))




#_ (def r1 (ft/fetch-plan-root (ops/add 1 3)))

#_ (vec (tfnative.Tensor/shape  (-> r1 first :handle)))

#_(flojure-tens.tensor/get-value (first r1))

#_ (tsr/get-value-clj (first r1))


#_(def r1 (ft/fetch-plan-root (ops/c [[1. 2.] [3. 4.]])))

#_(-> r1 first tsr/get-value-clj)

#_(def s1 (sess/run-plan->session (ops/add (ops/variable :x 1) 3)))


(def training-data
  ;; input => output
  [ [0. 0. 1.]   [0.]
    [0. 1. 1.]   [1.]
    [1. 1. 1.]   [1.]
   [1. 0. 1.]   [0.] ])

(let [inputs (ops/c (take-nth 2 training-data))
      outputs (ops/c (take-nth 2 (rest training-data)))
      weights (ops/v :weights (repeatedly
                               3 (fn [] (repeatedly 1 #(dec (rand 2))))))
      network (fn [x]
                (-> x
                    (ops/matmul weights)
                    ops/sigmoid))
      network-inputs (network inputs)
      error (fn [network-output]
              (-> outputs
                  (ops/sub network-output)
                  (ops/pow 2.)
                  (ops/div 2.)))
      error' (fn [network-output]
               (ops/sub network-output
                        outputs))
      sigmoid' (fn [x]
                 (->> x
                      (ops/sub 1.)
                      (ops/mul x)))
      deltas (fn [network-output]
               (->> (sigmoid' network-inputs)
                    (ops/mul (error' network-inputs))
                    (ops/matmul (ops/transpose inputs))))
      train-network (->> network-inputs
                         deltas
                         (ops/sub weights)
                         (ops/assign weights))
      session (sess/build-plan->session train-network)
      test1 (network [[1. 1. 1.]])]
  (sess/init-variable-assignments session)
  (dotimes [_ 2000]
    (sess/run-plan-w-session session [train-network]))
  (bdr/apply-plan-to-graph! (:graph session) test1)
  (def r1   (sess/run-plan-w-session session [test1]))
  #_    (def r1   (sess/run-plan-w-session session [weights])))


(-> r1 first tsr/get-value-clj)

#_(tfnative.Graph/addGradients 0
                             (long-array 1) (int-array 1)
                             (long-array 1) (int-array 1)
                             (long-array 1) (int-array 1)
                             (long-array 1) (int-array 1))


(let [a (ops/c [[(int 1) (int 2)]])
      b (ops/c [[(int 2)] [(int 3)]])
      o1 (ops/matmul a b)
      g (bdr/graph-plan->graph o1)
      s (sess/create g)
      a' (:handle (ops/get-op-by-plan g a))
      b' (:handle (ops/get-op-by-plan g b))
      c' (:handle (ops/get-op-by-plan g o1))
      d1' (long-array 2)
      d2' (int-array 2)
      grads (tfnative.Graph/addGradients (:handle g)
                                   (long-array [c']) (int-array [0])
                                   (long-array [a' b']) (int-array [0 0])
                                   (long-array [c' c']) (int-array [0 0])
                                   d1' d2')]
  (def dd1 d1')
  (def dd2 d2')
  [a' b' c' (vec d1') (vec d2')]
  (def g1 g)
  #_(spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g)))
  #_(->  (sess/run-plan-w-session s [o1])
         first
         tsr/get-value-clj))


(let [a (ops/c [[0.2] [0.7]])
      b (ops/c [[0.3 0.6]])
      dx (ops/c [[1.] [1.]])
                                        ;      y (ops/add (ops/matmul a b) (ops/sin a))
      y (ops/matmul (ops/matmul a b) (ops/sin a))
      g (bdr/graph-plan->graph y)
      _ (bdr/apply-plan-to-graph! g dx)
      s (sess/create g)
      a' (:handle (ops/get-op-by-plan g a))
      b' (:handle (ops/get-op-by-plan g b))
      dx' (:handle (ops/get-op-by-plan g dx))
      y' (:handle (ops/get-op-by-plan g y))
      d1' (long-array 2)
      d2' (int-array 2)
      grads (tfnative.Graph/addGradients (:handle g)
                                         (long-array [y']) (int-array [0])
                                         (long-array [a' b']) (int-array [0 0])
                                         (long-array [dx']) (int-array [0])
                                         d1' d2')]
  (def dd1 d1')
  (def dd2 d2')
  (clojure.pprint/pprint  [a a' b b' dx dx' y y' (vec d1') (vec d2')])
  (def g1 g)
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g)))
  #_(-> (sess/run-plan-w-session s [y])
        first
        tsr/get-value-clj))


(let [])

(let [a (ops/c [[0.2] [0.7]])
      b (ops/c [[0.3 0.6]])
      y (ops/matmul (ops/matmul a b) (ops/sin a))
      gdo (mcro/grad-desc-opt :gdo y)
      g (bdr/graph-plan->graph gdo)
      s (sess/create g)]
  (def g1 g)
  #_(-> (sess/run-plan-w-session s [y])
        first
        tsr/get-value-clj))


(-> dd1 vec first ops/handle->plan)

(clojure.pprint/pprint  (bdr/discover-new-ops-from-handles g1 [(->> dd1 vec first)]))


(clojure.pprint/pprint g1)

(vec (tfnative.Graph/nextOperation2 (:handle g1) 0))

(def op-handles
  (loop [agg []
         pos 0]
    (let [[handle pos'] (vec (tfnative.Graph/nextOperation2
                              (:handle g1)
                              pos))]
      (if (zero? handle)
        agg
        (recur (conj agg handle)
               pos')))))

(def oph1 (first (vec (tfnative.Graph/nextOperation2 (:handle g1) 4))))

(ops/create-from-handle oph1 (GraphRef. nil (Object.)))

(def opd-ba )

(def n1 (pr/protobuf-load NodeDefP opd-ba))


(clojure.pprint/pprint  n1)
(clojure.pprint/pprint (ops/create-from-handle oph1 (GraphRef. nil (Object.))))



#_(tfnative.Operation/name (second dd1))

(defn slurp-bytes
  "Slurp the bytes from a slurpable thing"
  [x]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (clojure.java.io/copy (clojure.java.io/input-stream x) out)
    (.toByteArray out)))

(defn spit-bytes
  "Slurp the bytes from a slurpable thing"
  [f ba]
  (let [bais (java.io.ByteArrayInputStream. ba)]
    (with-open [out (clojure.java.io/output-stream f)]
      (clojure.java.io/copy bais out))))



(tfnative.TensorFlow/version)

(def OpDefP (pr/protodef OpDef))
(def OpListP (pr/protodef OpList))
(def MetaGraphP (pr/protodef MetaGraphDef))

(def NodeDefP (pr/protodef NodeDef))

(def GraphDefP (pr/protodef GraphDef))

(def op-list (pr/protobuf-load OpListP (tfnative.TensorFlow/registeredOpList)))

(tfnative.TensorFlow/version)

#_(def mg2 (pr/protobuf-load MetaGraphP (slurp-bytes "/home/bill/repos/aiml-playground/udacity-2-fullyconnected/metagraph2.pb")))

(def mg2 (pr/protobuf-load MetaGraphP (slurp-bytes "/home/bill/repos/aiml-playground/udacity-2-fullyconnected/py2.mgpb")))

(-> mg2 :graph-def clojure.pprint/pprint )

(defn metagraph->node-defs
  [mg]
  (-> mg :graph-def :node))

(def n2 (metagraph->node-defs mg2))

(clojure.pprint/pprint n2)

(def add1 (:add (eval (ops/node-defs->src n2))))

(clojure.pprint/pprint add1)

(clojure.pprint/pprint (ops/node-defs->src n2))

(def g2 (bdr/graph-plan->graph add1))

(def g2 (bdr/graph-plan->graph (vals (eval (ops/node-defs->src n2)))))

(clojure.pprint/pprint (vals (eval (ops/node-defs->src n2))))

(clojure.pprint/pprint g2)
