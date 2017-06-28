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


(ft/build->graph (ops/add 1 3))

(ft/produce (ops/add 1 3))

(ft/produce (ops/max-tf 1. 4.))

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


(let [a (ops/c [[(int 1) (int 2)]])
      b (ops/c [[(int 2)] [(int 3)]])
      y (ops/matmul a b)
      g (ft/build->graph y)
      s (ft/graph->session g)
      a' (:handle (op-node/get-op-by-plan g a))
      b' (:handle (op-node/get-op-by-plan g b))
      y' (:handle (op-node/get-op-by-plan g y))
      d1' (long-array 2)
      d2' (int-array 2)
      _ (tfnative.Graph/addGradients (:handle g)
                                     (long-array [y']) (int-array [0])
                                     (long-array [a' b']) (int-array [0 0])
                                     (long-array [y']) (int-array [0])
                                     d1' d2')]
  (def dd1 d1')
  (def dd2 d2')
  [a' b' y' (vec d1') (vec d2')]
  (def g1 g)
  #_(spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g)))
  #_(->  (sess/run-plan-w-session s [o1])
         first
         tsr/get-value-clj))

(dorun (map (partial gr/add-op-to-state! g1)
            (op-build/discover-new-ops-from-handles g1
                                                (vec dd1))))

(clojure.pprint/pprint g1)

(clojure.pprint/pprint  (osg/graph->src g1))


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


(let [a (ops/c [[0.2] [0.7]])
      b (ops/c [[0.3 0.6]])
      y (ops/matmul (ops/matmul a b) (ops/sin a))
      gdo (mcro/grad-desc-opt :gdo y)
      g (ft/build->graph gdo)]
  (def g1 g)
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g)))
  #_(-> (sess/run-plan-w-session s [y])
        first
        tsr/get-value-clj))

(let [a (ops/v :a [[0.2] [0.7]])
      b (ops/v :b [[0.3 0.6]])
      y (ops/matmul a b)
      gdo (mcro/grad-desc-opt :gdo y)
      g (ft/build->graph gdo)]
  (def g1 g)
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g))))

(let [a (ops/v :a [[0.1] [0.1]])
      b (ops/v :b [[0.1 0.1]])
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
#_  (clojure.pprint/pprint (ft/fetch s1 y)) ;; RACE CONDITION!!!
  (ft/run-all s1 [gdo1])
  (clojure.pprint/pprint (ft/fetch s1 a))
  (clojure.pprint/pprint (ft/fetch s1 b))
  (clojure.pprint/pprint (ft/fetch s1 y)))


(def s1 (ft/graph->session g1))

(ft/run-init-variable-assignments s1)

(ft/fetch s1 (ops/v :a [[0.2] [0.7]]))
(ft/run-all s1 )

(let [a (ops/v :a [[0.3 0.6]])
      y (ops/sin :y a)
      gdo (mcro/grad-desc-opt :gdo y)
      g (ft/build->graph gdo)]
  (def g1 g)
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g))))

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


(clojure.pprint/pprint n1)
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


(def p1 {:op :MatMul
         :inputs [{:op :MatMul
                   :inputs [{:id :a
                             :op :VariableV2
                             :assignment [[1.] [1.]]}
                            {:id :b
                             :op :VariableV2
                             :assignment [[1. 1.]]}]}
                  {:op :Sin
                   :inputs [{:id :a
                             :op :VariableV2
                             :assignment [[1.] [1.]]}]}]})

(def gdo1 {:id :g>final
           :op :NoOp
           :ctrl-inputs [{:id :g>update_a_1
                          :op :ApplyGradientDescent
                          :inputs [{:id :a
                                    :op :VariableV2
                                    :assignment [[1.] [1.]]}
                                   {:id :g>AddN_1
                                    :op :AddN
                                    :inputs [{:macro :grad
                                              :id :g>MatMul_grad_1
                                              :output-idx 0
                                              :inputs [{:op :MatMul
                                                        :inputs [{:id :a
                                                                  :op :VariableV2
                                                                  :assignment [[1.] [1.]]}
                                                                 {:id :b
                                                                  :op :VariableV2
                                                                  :assignment [[1. 1.]]}]}
                                                       {:macro :grad
                                                        :id :g>MatMul_grad_2
                                                        :output-idx 0
                                                        :inputs [{:op :MatMul
                                                                  :inputs [{:op :MatMul
                                                                            :inputs [{:id :a
                                                                                      :op :VariableV2
                                                                                      :assignment [[1.] [1.]]}
                                                                                     {:id :b
                                                                                      :op :VariableV2
                                                                                      :assignment [[1. 1.]]}]}
                                                                           {:op :Sin
                                                                            :inputs [{:id :a
                                                                                      :op :VariableV2
                                                                                      :assignment [[1.] [1.]]}]}]}
                                                                 [[1.] [1.]]]}]}
                                             {:macro :grad
                                              :id :g>Sin_grad_1
                                              :inputs [{:op :Sin
                                                        :inputs [{:id :a
                                                                  :op :VariableV2
                                                                  :assignment [1]}]}
                                                       {:macro :grad
                                                        :id :g>MatMul_grad_2
                                                        :output-idx 1
                                                        :inputs [{:op :MatMul
                                                                  :inputs [{:op :MatMul
                                                                            :inputs [{:id :a
                                                                                      :op :VariableV2
                                                                                      :assignment [[1.] [1.]]}
                                                                                     {:id :b
                                                                                      :op :VariableV2
                                                                                      :assignment [[1. 1.]]}]}
                                                                           {:op :Sin
                                                                            :inputs [{:id :a
                                                                                      :op :VariableV2
                                                                                      :assignment [[1.] [1.]]}]}]}
                                                                 [1.]]}]}]}
                                   0.5]}
                         {:id :g>update_b_1
                          :op :ApplyGradientDescent
                          :inputs [{:id :b
                                    :op :VariableV2
                                    :assignment [[1. 1.]]}
                                   {:macro :grad
                                    :id :g>MatMul_grad_1
                                    :output-idx 1
                                    :inputs [{:op :MatMul
                                              :inputs [{:id :a
                                                        :op :VariableV2
                                                        :assignment [[1.] [1.]]}
                                                       {:id :b
                                                        :op :VariableV2
                                                        :assignment [1.]}]}
                                             {:macro :grad
                                              :id :g>MatMul_grad_2
                                              :output-idx 0
                                              :inputs [{:op :MatMul
                                                        :inputs [{:op :MatMul
                                                                  :inputs [{:id :a
                                                                            :op :VariableV2
                                                                            :assignment [[1.] [1.]]}
                                                                           {:id :b
                                                                            :op :VariableV2
                                                                            :assignment [[1. 1.]]}]}
                                                                 {:op :Sin
                                                                  :inputs [{:id :a
                                                                            :op :VariableV2
                                                                            :assignment [[1.] [1.]]}]}]}
                                                       [1.]]}]}
                                   0.5]}]})

(def g1 (ft/build-all->graph [{:op :MatMul
                               :id :hi
                               :inputs [{:id :a
                                         :op :VariableV2
                                         :assignment [[1.] [1.]]}
                                        {:id :b
                                         :op :VariableV2
                                         :assignment [[1. 1.]]}]}
                              {:macro :grad
                               :id :g>MatMul_grad_1
                               :output-idx 0
                               :inputs [{:op :MatMul
                                         :inputs [{:id :a
                                                   :op :VariableV2
                                                   :assignment [[1.] [1.]]}
                                                  {:id :b
                                                   :op :VariableV2
                                                   :assignment [[1. 1.]]}]}
                                        [1.]]}]))

(def g1 (ft/build->graph {:macro :grad
                          :id :g>MatMul_grad_2
                          :output-idx 0
                          :inputs [{:op :MatMul
                                    :inputs [{:op :MatMul
                                              :inputs [{:id :a
                                                        :op :VariableV2
                                                        :assignment [[1.] [1.]]}
                                                       {:id :b
                                                        :op :VariableV2
                                                        :assignment [[1. 1.]]}]}
                                             {:op :Sin
                                              :inputs [{:id :a
                                                        :op :VariableV2
                                                        :assignment [[1.] [1.]]}]}]}
                                   [[1.] [1.]]]}))

(let [g (ft/build->graph gdo1)]
  (def g1 g)
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g)))
  #_(-> (sess/run-plan-w-session s [y])
        first
        tsr/get-value-clj))

(let [g (ft/build->graph p1)]
  (def g1 g)
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g)))
  #_(-> (sess/run-plan-w-session s [y])
        first
        tsr/get-value-clj))

(clojure.pprint/pprint g1)



(let [s (ft/graph->session g1)]
  (ft/run-init-variable-assignments s)
  (ft/fetch s (op-node/id->plan g1 :MatMul)))

(ft/produce p1)

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

(def n2 (metagraph->node-defs mg2))

(clojure.pprint/pprint n2)

(def add1 (:add (eval (osg/node-defs->src n2))))

(clojure.pprint/pprint add1)

(clojure.pprint/pprint (osg/node-defs->src n2))

(clojure.pprint/pprint  (mapv op-node/node-def->plan n2))

(def g2 (bdr/graph-plan->graph add1))

(def g2 (bdr/graph-plan->graph (vals (eval (ops/node-defs->src n2)))))

(clojure.pprint/pprint (vals (eval (ops/node-defs->src n2))))

(clojure.pprint/pprint g2)

(osg/graph->src g1)


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

#_(find-plan-deps (mapv op-node/node-def->plan n2)
                :g1)


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
