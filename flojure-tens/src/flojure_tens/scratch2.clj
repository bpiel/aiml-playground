(ns flojure-tens.scratch2
  (:require [flojure-tens.core :as ft]
            [flojure-tens.scope :as sc]
            [flojure-tens.session :as sess]
            [flojure-tens.graph :as gr]
            [flojure-tens.ops :as o]
            [flojure-tens.composite :as c]
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

(ft/produce (o/add 1 3))

(ft/produce (o/add (o/v :x 1) 3))

(def training-data
  ;; input => output
  [ [0. 0. 1.]   [0.]
    [0. 1. 1.]   [1.]
    [1. 1. 1.]   [1.]
   [1. 0. 1.]   [0.] ])

(let [inputs (o/c (take-nth 2 training-data))
      outputs (o/c (take-nth 2 (rest training-data)))
      weights (o/v :weights (repeatedly
                               3 (fn [] (repeatedly 1 #(dec (rand 2))))))
      network (fn [x]
                (-> x
                    (o/mat-mul weights)
                    o/sigmoid))
      network-inputs (network inputs)
      error (fn [network-output]
              (-> outputs
                  (o/sub network-output)
                  (o/pow 2.)
                  (o/div 2.)))
      error' (fn [network-output]
               (o/sub network-output
                        outputs))
      sigmoid' (fn [x]
                 (->> x
                      (o/sub 1.)
                      (o/mul x)))
      deltas (fn [network-output]
               (->> (sigmoid' network-inputs)
                    (o/mul (error' network-inputs))
                    (o/mat-mul (o/transpose inputs))))
      train-network (->> network-inputs
                         deltas
                         (o/sub weights)
                         (o/assign weights))
      session (ft/build->session train-network)
      test1 (network [[1. 1. 1.]])]
  (ft/run-init-variable-assignments session)
  (->> train-network
       (repeat 2000)
       (ft/run-all session))
  (ft/produce session test1))

(let [a (o/c [[0.2] [0.7]])
      b (o/c [[0.3 0.6]])
      dx (o/c [[1.] [1.]])
                                        ;      y (o/add (o/matmul a b) (o/sin a))
      y (o/mat-mul (o/mat-mul a b) (o/sin a))
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


(let [a (o/v :a [[0.2] [0.7]])
      b (o/v :b [[0.3 0.6]])
      y (o/mat-mul (o/mat-mul a b) (o/sin a))
      gdo (c/grad-desc-opt :gdo y :gradients)
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

(let [a (o/v :a [[0.2] [0.7]])
      b (o/v :b [[0.3 0.6]])
      y (o/mat-mul a b)
      gdo (c/grad-desc-opt :gdo y :gradients)
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
                   "flojure-tens.ops" `assoc-plan-output))

(defn sss
  [plans out-ids]
  (let [m (into {}
                (for [p plans]
                  [(:id p) p]))
        id-expr-pairs (osg/plans->exprs (find-plan-deps (mapv op-node/node-def->plan n2)
                                                        out-ids)
                                        "flojure-tens.ops" `assoc-plan-output)
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



(let [tr-ds (o/c [[0.1 0.2] [0.3 0.4]])
      tr-ls (o/c [[0. 1.] [1. 0.]])
      va-ds (o/c [[0.1 0.2] [0.3 0.4]])
      te-ds (o/c [[0.1 0.2] [0.3 0.4]])
      weights (o/v :weights [[1. 1.] [1. 1.]])
      biases (o/v :biases [0. 0.])
      logits (o/add (o/mat-mul tr-ds
                                   weights)
                      biases)
      loss (o/mean (o/softmax-cross-entropy-with-logits logits
                                                            tr-ls)
                     [(int 0)])
      opt (c/grad-desc-opt :opt loss :gradients)
      tr-pred (o/softmax logits)
      va-pred (o/softmax (o/add (o/mat-mul va-ds weights)
                                    biases))
      te-pred (o/softmax (o/add (o/mat-mul te-ds weights)
                                    biases))
      g (ft/build-all->graph [opt tr-pred va-pred te-pred])
      s (ft/graph->session g)]
  (ft/run-init-variable-assignments s)
  (clojure.pprint/pprint (ft/produce s tr-pred))
  (ft/run-all s (repeat 1000 opt))
  (clojure.pprint/pprint (ft/produce s tr-pred)))


(let [weights (o/v :weights [[1.] [1.]])
      loss (o/relu weights)
      opt (c/grad-desc-opt :opt loss :gradients)
      g (ft/build-all->graph [opt])
      s (ft/graph->session g)]
  (ft/run-init-variable-assignments s)
  (ft/run-all s (repeat 10 opt))
  (ft/fetch s weights))

(let [x1 (o/placeholder :x1 :double [1])
      x2 (o/placeholder :x2 :double [1])
      y (o/add x1 x2)
      g (ft/build-all->graph [y])
      s (ft/graph->session g)]
  (ft/fetch s y {:x1 [2.0]
                 :x2 [11.0]}))


(let [weights (o/v :weights [[1.] [1.]])
      loss (o/mean weights
                     [(int 0)])
      opt (c/grad-desc-opt :opt loss :gradients)
      g (ft/build-all->graph [opt])
      s (ft/graph->session g)]
  (ft/run-init-variable-assignments s)
  (ft/run-all s (repeat 10 opt))
  (ft/fetch s weights))


(let [tr-ds (o/c [[0.1 0.2] [0.3 0.4]])
      tr-ls (o/c [[0. 1.] [1. 0.]])
      va-ds (o/c [[0.1 0.2] [0.3 0.4]])
      te-ds (o/c [[0.1 0.2] [0.3 0.4]])
      weights01 (o/v :weights01 [[1. 1.] [1. 1.]])
      weights12 (o/v :weights12 [[1. 1.] [1. 1.]])
      biases01 (o/v :biases01 [0. 0.])
      biases12 (o/v :biases12 [0. 0.])
      z01 (o/add (o/mat-mul tr-ds weights01)
                 biases01)
      h1 (o/relu z01)
      z12 (o/add (o/mat-mul h1 weights12)
                 biases12)
      loss (o/mean (o/softmax-cross-entropy-with-logits z12
                                                        tr-ls)
                   [(int 0)])
      opt (c/grad-desc-opt :g1 loss :gradients)
      tr-pred (o/softmax z12)
      g (ft/build-all->graph [opt tr-pred])
      s (ft/graph->session g)]
  (ft/run-init-variable-assignments s)
  (clojure.pprint/pprint (ft/fetch s tr-pred))
  (ft/run-all s (repeat 100 opt))
  (clojure.pprint/pprint (ft/fetch s tr-pred)))
