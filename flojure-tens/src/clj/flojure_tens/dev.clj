(ns flojure-tens.dev
  (:require [flojure-tens.core :as ft]
            [flojure-tens.scope :as sc]
            [flojure-tens.shape :as sh]
            [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.ops-gen :as ops-gen]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
            [flojure-tens.data-type :as dt]
            [flojure-tens.graph :as gr]
            [flatland.protobuf.core :as pr]
            [flojure-tens.webapp.server :as wsvr])
  (:import [flojure_tens.common Graph Op]
           [flojure_tens.session Session]
           [org.tensorflow.framework Summary]))

(def dev-nses (atom #{}))

(def SummaryP (pr/protodef Summary))

(def ^:dynamic *default-ns* '$g) ;; TODO drop this

(defn activate-dev-mode
  [& [enable?]]
  (if enable?
    (swap! ft/plugins conj ::dev)
    (throw (Exception. "NOT IMPLEMENTED"))))

#_ (activate-dev-mode true)

(defn- mk-ns-sym [sym] (->> sym name (str "$.") symbol))

(defn release-dev-ns
  [ns-sym]
  (when-let [dev-ns (and (@dev-nses ns-sym)
                         (the-ns ns-sym))]
    ;; TODO check if graph/session is running
    (ft/close (ns-resolve dev-ns 'graph))
    (ft/close (ns-resolve dev-ns 'session))
    (remove-ns ns-sym)
    (swap! dev-nses disj ns-sym)
    (println "removed ns " ns-sym)))

(defmethod ft/call-plugin [::dev :release]
  [_ {:keys [ws-name]}]
  (release-dev-ns (mk-ns-sym ws-name)))

(defmethod ft/call-plugin [::dev :new]
  [_ {:keys [state ws-name]}]
  (let [ns-sym (mk-ns-sym ws-name)]
    (release-dev-ns ns-sym)
    (swap! state assoc-in [::dev :ns]
           (create-ns ns-sym))
    (println "created ns "ns-sym)))

(defn rebuild-op-fns
  [& [debug-mode?]]
  (when (or (nil? debug-mode?)
            (true? debug-mode?))
    (reset! ops-gen/assoc-meta-to-op?
            true))
  (when (false? debug-mode?)
    (reset! ops-gen/assoc-meta-to-op?
            false))
  (o/generate-ops))

(defn- unmap-interns [ns']
  (dorun (map (partial ns-unmap ns')
              (keys (ns-interns ns')))))

(defn mk-nodes-in-ns
  [^Graph g ns']
  (doseq [[k v] (-> g :state deref :id->node)]
    (intern ns'
            (symbol (clojure.string/replace k #"/" ">"))
            (with-meta v
              {:ns ns'}))))

(defn mk-ns
  [^Session s]
  (let [ns' (create-ns *default-ns*)]
    (unmap-interns ns')
    (intern ns' '$graph (:graph s))
    (intern ns' '$session s)
    (intern ns' '$log (atom []))
    (mk-nodes-in-ns (:graph s) ns')))

(defn plan [^Op op-node] (-> op-node meta :plan))
(defn stack [^Op op-node] (-> op-node meta :stack))

;; TODO can be fn (now)
(defmacro fetch
  [op & feed]
  `(ft/fetch (deref (ns-resolve (-> (var ~op) meta :ns)
                                (quote ~'$session)))
             ~op
             (or ~feed {})))

(defn get-ns [op] (-> op meta :ns))
(defn get-log [op] @(ns-resolve (get-ns op)
                                '$log))

(defn logged-fetches
  [{:keys [id] :as op}]
  (map #(-> % :fetch (get id))
       @(get-log op)))

(defn- w-mk-node-def
  [opnode]
  {:data {:id (:id opnode)}})

(defn mk-id-seq
  [id-parts]
  (loop [r []
         ctx nil
         [head & tail] id-parts]
    (if head
      (let [path (str ctx (when ctx "/"))]
        (recur (conj r {:data (merge {:id (str path head) :name head}
                                     (when ctx {:parent ctx}))})
               (str path head)
               tail))
      r)))

(defn drop-output-idx [id] (first (clojure.string/split id #":")))

(defn w-push-histos
  [log id]
#_  (dev/w-push ['histos {:mode "offset"
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
                                :bins (hist-bytes->histo-bins2 h7)}]}]))

(defn w-push-graph
  [^Graph g]
  (w-push ['h-box :children [[:div]
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
                               :elements (filter-cyto (select-keys (w-mk-graph-def2 g)
                                                                   [:nodes :edges]))}]]]))

(defmethod ft/call-plugin [::dev :init]
  [_ {:keys [state ws-def]} {:keys [graph] :as session}]
  (let [dev-ns (-> @state ::dev :ns)]
    (intern dev-ns 'graph graph)
    (intern dev-ns 'session session)
    (intern dev-ns '$log (atom []))))

(defn op->summary-id [op]
  (->> op
       :id
       (str "summaries/")))

(defn mk-summary-plans
  [g target]
  (let [target' (opn/find-op g target)
        smry-id (op->summary-id target')
        scalar? (-> target'
                    opn/get-desc-of-output
                    :shapes
                    first
                    sh/scalar?)]
    (when-not ((gr/id->node g) smry-id)
      (if scalar?
        (o/scalar-summary {:id smry-id} smry-id target')
        (o/histogram-summary {:id smry-id} smry-id target')))))

(defn add-summaries
  [^Graph g summaries]
  (->> summaries
       (keep (partial mk-summary-plans g))
       (ft/build-all->graph g)))

(defmethod ft/call-plugin [::dev :post-build]
  [_ {:keys [state ws-def]}]
  (let [dev-ns (-> @state ::dev :ns)
        {:keys [summaries]} ws-def
        graph (-> @state :session :graph)]
    (mk-nodes-in-ns graph dev-ns)
    (add-summaries graph summaries)
    (w-push-graph graph)))


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

(defn- fetched->log-entry
  [^Graph g summarized fetched]
  (let [targets (map (partial opn/find-op g) summarized)
        smry->trgt (ut/for->map [t-op targets]
                                [(op->summary-id t-op)
                                 (:id t-op)])
        smry-ids (keys smry->trgt)]
    (ut/$- -> fetched
           (select-keys smry-ids)
           (clojure.set/rename-keys smry->trgt)
           (ut/fmap hist-bytes->histo-bins2
                    $))))

#_(fetched->log-entry $s/g
                    $s/summarized
                    $s/fetched4)

(defmethod ft/call-plugin [::dev :log-step]
  [_ {:keys [state ws-def]} fetched]
  (let [dev-ns (-> @state ::dev :ns)
        graph  (-> @state :session :graph)
        {:keys [summaries]} ws-def
        log-atom @(ns-resolve dev-ns '$log)]
    (swap! log-atom conj
           (fetched->log-entry graph
                               summaries
                               fetched))))

(defn w-mk-node-defs
  [{:keys [id]}]
  (mk-id-seq (clojure.string/split (drop-output-idx id)
                                   #"/")))


(defn- w-mk-edge-defs
  [opnode]
  (let [id-src (drop-output-idx (:id opnode))]
    (map (fn [id-target]
           {:data {:source (drop-output-idx id-target) :target id-src }})
          (:inputs opnode))))


(defn- w-mk-graph-def
  [^Graph g]
  (let [nodes (-> g :state deref :id->node vals)]
    {:nodes (distinct (mapcat w-mk-node-defs nodes))
     :edges (mapcat w-mk-edge-defs nodes)}))

(defn w-mk-graph-def2
  [^Graph g]
  (w-mk-graph-def g))

(defn w-push
  [data]
  (wsvr/respond-transit data))

(defn w-graph []
  (w-push
   (assoc (w-mk-graph-def2)
          :cmd :graph)))

(defn w-chartb
  [data]
  (w-push {:cmd :chart
           :type :bar
           :data data}))

#_(clojure.pprint/pprint  (w-mk-graph-def2))

#_(w-push '[$/chart
          {:config
           {:transition {:duration 0}}
           :data
           {:columns [["data1" 100 20 2 5]]}
           :highlighted nil
           :selected nil}])

#_(w-push ['$/graph
         {:layout {:name "dagre"}
          :style [{:selector "node"
                   :style {:content "data(name)"}}
                  {:selector "edge"
                   :style {"curve-style" "unbundled-bezier"
                           :control-point-distances [0]
                           :control-point-weights [0.5]}}]
          :elements (select-keys (w-mk-graph-def2)
                                 [:nodes :edges])}])





(defn filter-cyto-edges
  [edges]
  (filter (fn [{:keys [data]}]
            (= (nil? (re-find #"gradient" (:source data)))
                (nil? (re-find #"gradient" (:target data)))))
          edges))

(defn filter-cyto-nodes
  [nodes]
  (remove (fn [{:keys [data]}]
            (or #_(re-find #"gradient" (:id data))
                (re-find #"Const" (:id data))))
          nodes))

(defn filter-cyto
  [cyto]
  (-> cyto
      (update :edges filter-cyto-edges)
      (update :nodes filter-cyto-nodes)))


#_(w-push ['$/graph
         {:layout {:name "preset"}
          :style [{:selector "node"
                   :style {:content "data(id)"}}
                  {:selector "edge"
                   :style {"curve-style" "unbundled-bezier"
                           :control-point-distances [0]
                           :control-point-weights [0.5]
                           :target-arrow-color "#f00"
                           :target-arrow-shape "triangle"}}]
          :elements (select-keys (bill1)
                                 [:nodes :edges])}])

#_(w-push ['$/graph
         {:layout {:name "preset"}
          :style [{:selector "node"
                   :style {:content "data(id)"}}
                  {:selector "edge"
                   :style {"curve-style" "unbundled-bezier"
                           :control-point-distances [0]
                           :control-point-weights [0.5]
                           :target-arrow-color "#f00"
                           :target-arrow-shape "triangle"}}]
          :elements (select-keys @aorig
                                 [:nodes :edges])}])


#_(w-push ['$/graph
         {:layout {:name "preset"}
          :style [{:selector "node"
                   :style {:content "data(id)"}}
                  {:selector "edge"
                   :style {"curve-style" "unbundled-bezier"
                           :control-point-distances [0]
                           :control-point-weights [0.5]
                           :target-arrow-color "#f00"
                           :target-arrow-shape "triangle"}}]
          :elements (select-keys @afinal
                                 [:nodes :edges])}])

#_(w-push ['$/graph
           {:layout {:name "dagre"}
            :style [{:selector "node"
                     :style {:content "data(name)"
                             :border-width 1
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
                             :line-color "#888"
                             :arrow-scale 1.5
                             :target-arrow-color "#f00"
                             :target-arrow-shape "triangle"}}
                    {:selector "node.cy-expand-collapse-collapsed-node"
                     :style {:font-size 40
                             :background-color "lightgreen"
                             :border-width 8
                             :border-color "darkgreen"
                             :shape "rectangle"
                             :height 100
                             :width 400
                             :text-valign "center"
                             }}
                    {:selector ":parent"
                     :style {:font-size 80
                             :background-color "white"
                             :text-valign "top"
                             :border-color "lightgreen"
                             :border-width 10
                             }}
                    {:selector ":selected"
                     :style {:background-color "lightblue"}}]
            :elements (filter-cyto (select-keys (w-mk-graph-def2)
                                                [:nodes :edges]))}])

#_
(w-push ['$/h-box :children [['$/chart
                            {:config
                             {:transition {:duration 0}}
                             :data
                             {:columns [["data1" 100 20 2 5]]}
                             :highlighted nil
                             :selected nil}]
                           ['$/graph
                            {:layout {:name "dagre"}
                             :style [{:selector "node"
                                      :style {:content "data(name)"}}
                                     {:selector "edge"
                                      :style {"curve-style" "unbundled-bezier"
                                              :control-point-distances [50]
                                              :control-point-weights [0.5]}}]
                             :elements (select-keys (w-mk-graph-def2)
                                                    [:nodes :edges])}]]])

#_
(w-push ['histos {:mode "offset"
                  :timeProperty "step"
                  :data [{:step 1
                          :bins [{:x -3.
                                  :y 1.
                                  :dx 1.}
                                 {:x -2.
                                  :y 2.
                                  :dx 1.}
                                 {:x -1.
                                  :y 5.
                                  :dx 1.}]}]}])


