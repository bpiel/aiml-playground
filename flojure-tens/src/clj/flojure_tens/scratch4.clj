(ns flojure-tens.scratch4
  (:require [flojure-tens.core :as ft]
            [flojure-tens.dev :as d]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.macros :as m]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
            [flojure-tens.data-type :as dt]
            [flojure-tens.tensor :as tsr]
            [flatland.protobuf.core :as pr]
            [flojure-tens.tf-record :as tfr]
            [flojure-tens.dev :as dev]
            flojure-tens.grad-desc-opt2
            flojure-tens.gradients2)
  (:import [org.tensorflow.framework Summary]
           [flojure_tens.tensor TensorNDArray]
           [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [org.tensorflow.util Event]
           [flojure_tens.common Graph Op GraphRef]))

(def SummaryP (pr/protodef Summary))

(let [data (dt/convert-whatever [[1. 2.]
                                 [1. 3.]
                                 [2. 3.]
                                 [2. 4.]]
                                dt/float-kw)
      labels (dt/convert-whatever [[1.]
                                   [2.]
                                   [1.]
                                   [2.]]
                                  dt/float-kw)
      {:keys [out opt]}
      (ut/id$->> (o/placeholder :data
                                dt/float-kw
                                [-1 2])
                 (l/dense {:units 100})
                 (l/dense {:units 100})
                 (l/dense {:id :out
                           :units 1})
                 (o/sub (o/placeholder :labels
                                       dt/float-kw
                                       [-1 1]))
                 o/abs
                 (p/reduce-mean :loss)
                 (p/grad-desc-opt :opt))]
  (let [{:keys [graph] :as s} (ft/build-all->session [opt])]
    (d/mk-ns s)
    (ft/run-global-vars-init s)
    (ft/run-all s (repeat 1000 opt) {:data data
                                     :labels labels})
    (ft/produce s out {:data data})))

(ft/def-workspace ws1
  (let [data (dt/convert-whatever [[1. 2.]
                                   [1. 3.]
                                   [2. 3.]
                                   [2. 4.]]
                                  dt/float-kw)
        labels (dt/convert-whatever [[1.]
                                     [2.]
                                     [1.]
                                     [2.]]
                                    dt/float-kw)
        {:keys [out opt]}
        (ut/id$->> (o/placeholder :data
                                  dt/float-kw
                                  [-1 2])
                   (l/dense {:units 100})
                   (l/dense {:units 100})
                   (l/dense {:id :out
                             :units 1})
                   (o/sub (o/placeholder :labels
                                         dt/float-kw
                                         [-1 1]))
                   o/abs
                   (p/reduce-mean :loss)
                   (p/grad-desc-opt :opt))]
    {:build [opt]
     :summaries [:data]}))

(ft/ws-build ws1)

(dev/activate-dev-mode true)




(let [rn (o/random-uniform {:dtype dt/float-kw} [10000])
      hist (o/histogram-summary "hist" rn)
      {:keys [graph] :as s} (ft/build-all->session [rn hist])]
  (ft/run-global-vars-init s)
  (def h7 (ft/produce s hist)))

(let [rn (o/random-standard-normal {:dtype dt/float-kw} [10000])
      hist (o/histogram-summary "hist" rn)
      {:keys [graph] :as s} (ft/build-all->session [rn hist])]
  (ft/run-global-vars-init s)
  (def h6 (ft/produce s hist)))

(let [rn (o/identity-tf 1.2)
      smry (o/scalar-summary :smry "smry" rn)
      {:keys [graph] :as s} (ft/build-all->session [rn smry])]
  (ft/run-global-vars-init s)
  (def smry
    (ft/produce s smry)))

(def xxx (pr/protobuf-load SummaryP h7))

(def xxx2 (pr/protobuf-load SummaryP smry))

(clojure.pprint/pprint  xxx)


(defn hist-bytes->histo-bins
  [ba]
  (let [h (pr/protobuf-load SummaryP ba)
        {:keys [bucket-limit bucket] mx :max mn :min}
        (-> h
            :value
            first
            :histo)]
    (mapv (fn [x x' y]
            {:x x
             :y y
             :dx (- x' x)})
          bucket-limit
          (-> bucket-limit
              rest
              drop-last)
          bucket)))

(defn merge-hists
  [{x1 :x y1 :y dx1 :dx} {y2 :y dx2 :dx}]
  {:x x1
   :y (+ y1 y2)
   :dx (+ dx1 dx2)})

(defn normalize-hist
  [{:keys [y dx] :as h}]
  (assoc h :y (/ y dx)))



(defn hist-bytes->histo-bins2
  [ba]
  (loop [[head & tail] (hist-bytes->histo-bins ba)
         agg []
         current nil]
    (cond (nil? head)
          (mapv normalize-hist
                (remove nil?
                        (conj agg current)))

          (nil? current)
          (recur tail
                 agg
                 head)

          :else (let [{:keys [dx] :as nxt} (merge-hists current head)]
                  (if (> dx 0.1)
                    (recur tail
                           (conj agg nxt)
                           nil)
                    (recur tail
                           agg
                           nxt))))))


(clojure.pprint/pprint (hist-bytes->histo-bins h3))

(dev/w-push ['histos {:mode "offset"
                      :timeProperty "step"
                      :data [{:step 1
                              :bins (hist-bytes->histo-bins2 h)}
                             {:step 2
                              :bins (hist-bytes->histo-bins2 h1)}
                             {:step 3
                              :bins (hist-bytes->histo-bins2 h2)}
                             {:step 4
                              :bins (hist-bytes->histo-bins2 h3)}
                             {:step 5
                              :bins (hist-bytes->histo-bins2 h4)}
                             {:step 6
                              :bins (hist-bytes->histo-bins2 h5)}
                             {:step 7
                              :bins (hist-bytes->histo-bins2 h6)}
                             {:step 8
                              :bins (hist-bytes->histo-bins2 h7)}]}])

(dev/w-push ['h-box :children [['histos {:mode "offset"
                                         :timeProperty "step"
                                         :data [{:step 1
                                                 :bins (hist-bytes->histo-bins2 h)}
                                                {:step 2
                                                 :bins (hist-bytes->histo-bins2 h1)}
                                                {:step 3
                                                 :bins (hist-bytes->histo-bins2 h2)}
                                                {:step 4
                                                 :bins (hist-bytes->histo-bins2 h3)}
                                                {:step 5
                                                 :bins (hist-bytes->histo-bins2 h4)}
                                                {:step 6
                                                 :bins (hist-bytes->histo-bins2 h5)}
                                                {:step 7
                                                 :bins (hist-bytes->histo-bins2 h6)}
                                                {:step 8
                                                 :bins (hist-bytes->histo-bins2 h7)}]}]
                               ['graph
                                {:layout {:name "dagre"}
            :style [{:selector "node"
                     :style {:content "data(name)"
                             :border-width 3
                             :border-color "#CC9"
                             :font-size 35
                             :background-color "#FFC"
                             :shape "ellipsis"
                             :height 80
                             :width 200
                             :text-valign "center"
                             }}
                    {:selector "edge"
                     :style {:width 5
                             "curve-style" "unbundled-bezier"
                             :control-point-distances [0]
                             :control-point-weights [0.5]
                             :line-color "#AAA"
                             :arrow-scale 1.5
                             :target-arrow-color "#d00"
                             :target-arrow-shape "triangle"}}
                    {:selector "node.cy-expand-collapse-collapsed-node"
                     :style {:font-size 40
                             :background-color "#FFC"
                             :border-width 5
                             :border-color "#CC9"
                             :shape "rectangle"
                             :height 100
                             :width 400
                             :text-valign "center"
                             }}
                    {:selector ":parent"
                     :style {:font-size 80
                             :background-color "white"
                             :text-valign "top"
                             :border-color "CC9"
                             :border-width 10
                             }}
                    {:selector ":selected"
                     :style {:background-color "lightblue"}}]
            :elements (dev/filter-cyto (select-keys (dev/w-mk-graph-def2)
                                                [:nodes :edges]))}]]])

(clojure.pprint/pprint [{:step 1
                         :bins (hist-bytes->histo-bins2 h)}
                        {:step 2
                         :bins (hist-bytes->histo-bins2 h1)}
                        {:step 3
                         :bins (hist-bytes->histo-bins2 h2)}
                        {:step 4
                         :bins (hist-bytes->histo-bins2 h3)}
                        {:step 5
                         :bins (hist-bytes->histo-bins2 h4)}
                        {:step 6
                         :bins (hist-bytes->histo-bins2 h5)}
                        {:step 7
                         :bins (hist-bytes->histo-bins2 h6)}
                        #_{:step 8
                         :bins (hist-bytes->histo-bins h7)}])
