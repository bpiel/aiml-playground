(ns flojure-tens.scratch2
  (:require [flojure-tens.core :as ft]
            [flojure-tens.scope :as sc]
            [flojure-tens.session :as sess]
            [flojure-tens.graph :as gr]
            [flojure-tens.ops2 :as ops]
            [flojure-tens.ops-src-gen :as osg]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.op-build :as op-build]
            [flojure-tens.tensor :as tsr]
            [flojure-tens.data-type :as dt]
            [flojure-tens.builder :as bdr]
            [flojure-tens.macros :as mcro]
            [flatland.protobuf.core :as pr])
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [flojure_tens.common Graph Op GraphRef]))

(ft/produce (ops/add 1 3))

(ft/produce (ops/add (ops/v :x 1) 3))

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
                    (ops/mat-mul weights)
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
                    (ops/mat-mul (ops/transpose inputs))))
      train-network (->> network-inputs
                         deltas
                         (ops/sub weights)
                         (ops/assign weights))
      session (ft/build->session train-network)
      test1 (network [[1. 1. 1.]])]
  (ft/run-init-variable-assignments session)
  (->> train-network
       (repeat 2000)
       (ft/run-all session))
  (ft/produce session test1))

(let [a (ops/c [[0.2] [0.7]])
      b (ops/c [[0.3 0.6]])
      dx (ops/c [[1.] [1.]])
                                        ;      y (ops/add (ops/matmul a b) (ops/sin a))
      y (ops/mat-mul (ops/mat-mul a b) (ops/sin a))
      g (ft/build->graph y)
      _ (ft/build->graph g dx)
      s (ft/graph->session g)
      a' (:handle (op-node/get-op-by-plan g a))
      b' (:handle (op-node/get-op-by-plan g b))
      dx' (:handle (op-node/get-op-by-plan g dx))
      y' (:handle (op-node/get-op-by-plan g y))
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


(let [a (ops/v :a [[0.2] [0.7]])
      b (ops/v :b [[0.3 0.6]])
      y (ops/mat-mul (ops/mat-mul a b) (ops/sin a))
      gdo (mcro/grad-desc-opt :gdo y :gradients)
      g (ft/build->graph gdo)
      s (ft/graph->session g)]
  (def g1 g)
  (ft/run-init-variable-assignments s)
  (ft/run-all s [gdo])
  (clojure.pprint/pprint (ft/produce s y))
  (ft/run-all s [gdo])
  (clojure.pprint/pprint (ft/produce s y))
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g)))
  #_(-> (sess/run-plan-w-session s [y])
        first
        tsr/get-value-clj))

(let [a (ops/v :a [[0.2] [0.7]])
      b (ops/v :b [[0.3 0.6]])
      y (ops/mat-mul a b)
      gdo (mcro/grad-desc-opt :gdo y :gradients)
      g (ft/build->graph gdo)
      s (ft/graph->session g)]
  (def g1 g)
  (def s1 s)
  (def gdo1 gdo)
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g)))
  (println "===================")
  (ft/run-init-variable-assignments s1)
(Thread/sleep 200)
  (clojure.pprint/pprint (ft/fetch s1 a))
  (clojure.pprint/pprint (ft/fetch s1 b))
#_  (clojure.pprint/pprint (ft/fetch s1 y)) ;; RACE CONDITION!!! ...this doesn't fix it
  (ft/run-all s1 [gdo1])
  (clojure.pprint/pprint (ft/fetch s1 a))
  (clojure.pprint/pprint (ft/fetch s1 b))
  (clojure.pprint/pprint (ft/fetch s1 y)))


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

(def mg2 (pr/protobuf-load MetaGraphP (slurp-bytes "/home/bill/repos/aiml-playground/udacity-2-fullyconnected/matmul.mgpb")))

(def mg2 (pr/protobuf-load MetaGraphP (slurp-bytes "/home/bill/repos/aiml-playground/udacity-2-fullyconnected/add.mgpb")))

(def mg2 (pr/protobuf-load MetaGraphP (slurp-bytes "/home/bill/repos/aiml-playground/udacity-2-fullyconnected/sin.mgpb")))

(-> mg2 :graph-def clojure.pprint/pprint )

(defn metagraph->node-defs
  [mg]
  (-> mg :graph-def :node))

(defn find-plan-deps [plans ids]
  (let [m (into {}
                (for [p plans]
                  [(:id p) p]))]
    (loop [agg []
           [head & tail] ids]
      (cond (nil? head) (->> agg reverse distinct (mapv m))
            :else (let [{:keys [inputs ctrl-inputs]} (m head)
                        new-ids (into inputs ctrl-inputs)]
                    (recur (into agg new-ids)
                           (into tail new-ids)))))))

(clojure.pprint/pprint 
 (osg/plans->exprs (find-plan-deps (mapv op-node/node-def->plan n2)
                                   [:g1])
                   "flojure-tens.ops2" `assoc-plan-output))

(defn sss
  [plans out-ids]
  (let [m (into {}
                (for [p plans]
                  [(:id p) p]))
        id-expr-pairs (osg/plans->exprs (find-plan-deps (mapv op-node/node-def->plan n2)
                                                        out-ids)
                                        "flojure-tens.ops2" `assoc-plan-output)
        assigns (vec (mapcat (fn [[k v]]
                               [(-> k name symbol) v])
                             id-expr-pairs))
        body (->> out-ids
                  (map m)
                  (mapcat :inputs)
                  (mapv (comp symbol name)))]
    `(let ~assigns ~body)))

(clojure.pprint/pprint 
 (eval
  (sss (mapv op-node/node-def->plan n2)
       [:g1])))

(clojure.pprint/pprint 
 (sss (mapv op-node/node-def->plan n2)
      [:g1]))



(let [tr-ds (ops/c [[0.1 0.2] [0.3 0.4]])
      tr-ls (ops/c [[0. 1.] [1. 0.]])
      va-ds (ops/c [[0.1 0.2] [0.3 0.4]])
      te-ds (ops/c [[0.1 0.2] [0.3 0.4]])
      weights (ops/v :weights [[1. 1.] [1. 1.]])
      biases (ops/v :biases [0. 0.])
      logits (ops/add (ops/mat-mul tr-ds
                                   weights)
                      biases)
      loss (ops/mean (ops/softmax-cross-entropy-with-logits logits
                                                            tr-ls)
                     [(int 0)])
      opt (mcro/grad-desc-opt :opt loss :gradients)
      tr-pred (ops/softmax logits)
      va-pred (ops/softmax (ops/add (ops/mat-mul va-ds weights)
                                    biases))
      te-pred (ops/softmax (ops/add (ops/mat-mul te-ds weights)
                                    biases))
      g (ft/build-all->graph [opt tr-pred va-pred te-pred])
      s (ft/graph->session g)]
  (ft/run-init-variable-assignments s)
  (clojure.pprint/pprint (ft/produce s tr-pred))
  (ft/run-all s (repeat 1000 opt))
  (clojure.pprint/pprint (ft/produce s tr-pred)))


(let [weights (ops/v :weights [[1.] [1.]])
      loss (ops/relu weights)
      opt (mcro/grad-desc-opt :opt loss :gradients)
      g (ft/build-all->graph [opt])
      s (ft/graph->session g)]
  (ft/run-init-variable-assignments s)
  (ft/run-all s (repeat 10 opt))
  (ft/fetch s weights))

(let [x1 (ops/placeholder :x1 :double [1])
      x2 (ops/placeholder :x2 :double [1])
      y (ops/add x1 x2)
      g (ft/build-all->graph [y])
      s (ft/graph->session g)
      ]
  #_  (ft/run-init-variable-assignments s)
  #_  (ft/fetch s y {:x1 [2.0]
                     :x2 [11.0]})
  (ft/fetch s y {:x1 [2.0]
                 :x2 [11.0]}))


(let [weights (ops/v :weights [[1.] [1.]])
      loss (ops/mean weights
                     [(int 0)])
      opt (mcro/grad-desc-opt :opt loss :gradients)
      g (ft/build-all->graph [opt])
      s (ft/graph->session g)]
  (ft/run-init-variable-assignments s)
  (ft/run-all s (repeat 10 opt))
  (ft/fetch s weights))


ops/softmax-cross-entropy-with-logits

(map println
 (filter #(re-find #"number-attr" %)
         (map #(-> % meta :doc) (vals (ns-interns 'flojure-tens.ops2)))))






































