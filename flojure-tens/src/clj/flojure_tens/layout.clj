(ns flojure-tens.layout
  (:require [flojure-tens.core :as ft]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops :as o]
            [flojure-tens.ops-gen :as ops-gen]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
            [flojure-tens.data-type :as dt]
            [flojure-tens.webapp.server :as wsvr])
  (:import [flojure_tens.common Graph Op]
           [flojure_tens.session Session]))

(def dev-nses (atom #{}))

(def ^:dynamic *default-ns* '$g)

(def aorig (atom nil))
(def afinal (atom nil))

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
  []
  (w-mk-graph-def @(ns-resolve (the-ns '$g)
                              '$graph)))

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
;; ===================================================

(def nodes1
  {:nodes [{:data {:id "a"}}
           {:data {:id "b"}}
           {:data {:id "c"}}
           {:data {:id "d"}}
           {:data {:id "e"}}
           {:data {:id "f"}}
           {:data {:id "g"}}
           {:data {:id "h"}}
           {:data {:id "i"}}
           {:data {:id "j"}}]
   :edges [{:data {:source "a"
                   :target "b"}}
           {:data {:source "c"
                   :target "b"}}
           {:data {:source "b"
                   :target "d"}}
           {:data {:source "d"
                   :target "e"}}
           {:data {:source "f"
                   :target "d"}}
           {:data {:source "g"
                   :target "e"}}
           {:data {:source "h"
                   :target "g"}}
           {:data {:source "i"
                   :target "h"}}
           {:data {:source "j"
                   :target "d"}}
           {:data {:source "j"
                   :target "a"}}
           {:data {:source "i"
                   :target "j"}}]})


(defn edge-map
  [{:keys [edges]}]
  (apply merge-with into
              (map (fn [{:keys [data]}]
                     {(:source data)
                      [(:target data)]})
                   edges)))

(edge-map nodes1)

(defn node-list
  [{:keys [nodes]}]
  (mapv #(-> % :data :id)
        nodes))


(defn bottoms
  [nodes edge-map]
  (clojure.set/difference (set nodes)
                          (-> edge-map vals flatten set)))

(defn find-paths*
  [edges id]
  (if-let [nodes (edges id)]
    (for [p (mapcat (partial find-paths*
                             edges)
                    nodes)]
      (into [id] p))
    [[id]]))

(defn find-paths
  [cyto]
  (let [nodes (node-list cyto)
        edges (edge-map cyto)
        bs (bottoms nodes edges)]
    (mapcat (partial find-paths* edges)
            bs)))

(defn mk-master-map
  [paths]
  {:ids (apply merge-with into
              (for [p paths
                    id p]
                {id [p]}))
   :paths (apply merge
                (map (fn [p x]
                       {p (double x)})
                     paths
                     (range (count paths))))})

(defn calc-avg
  [{:keys [ids paths] :as mm} id]
  (let [xs (map paths
                (ids id))
        c (count xs)]
    (if (> c 0)
      (/ (apply + xs)
         c)
      0.)))

(defn update-paths
  [{:keys [ids paths] :as mm} id avg alpha]
  (let [f (fn [x]
            (+ (* avg alpha)
               (* x (- 1. alpha))
               (/ (Math/random)
                  10.)))]
    (reduce (fn [agg item]
              (update agg item f))
            paths
            (ids id))))

(defn one-adjustment
  [{:keys [ids paths] :as mm} id alpha]
  {:ids ids
   :paths (update-paths mm
                        id
                        (calc-avg mm id)
                        alpha)})

(defn fmap
  [f m]
  (into {}
        (for [[k v] m]
          [k (f v)])))

(defn normalize
  [{:keys [ids paths] :as mm}]
  {:ids ids
   :paths (fmap (into {}
                      (map-indexed (fn [i x]
                                     {x (double i)})
                                   (sort (vals paths))))
                paths)})

(defn one-iter
  [{:keys [ids paths] :as mm} alpha]
  (loop [[head & tail] (-> ids keys shuffle)
         mm' mm]
    (if head
      (recur tail
             (normalize
              (one-adjustment mm' head alpha)))
      mm')))

(defn do-iters
  [mm n]
  (loop [i n
         mm' mm]
    (if (> i 0)
      (recur (dec i)
             (one-iter mm'
                       (/ i n)))
      mm')))

(defn do-layout*
  [cyto n]
  (-> cyto
      find-paths
      mk-master-map
      (do-iters n)))

(defn calc-y
  [paths id]
  (let [ys (map #(/ (inc (.indexOf % id))
                 (double (count %)))
                (keys paths))]
    (* -1. (apply max ys))
#_    (/ (apply + ys)
       (count ys))))

(defn calc-pos
  [{:keys [ids paths] :as mm} id]
  {:x (calc-avg mm id)
   :y (calc-y paths id)})

(defn calc-pos1
  [{:keys [ids paths] :as mm} id]
  [id
   (calc-avg mm id)
   (calc-y paths id)])

(defn normalize2
  [ps idx]
  (let [xs (sort (distinct (map #(get % idx)
                                ps)))
        cxs (count xs)
        m (into {}
                (map-indexed (fn [i x]
                               {x (/ (double i)
                                     cxs)})
                             xs))]
    (mapv #(update % idx m)
          ps)))


(defn ->cyto*
  [poses pcount node]
  (let [id (-> node :data :id)
        [x y] (poses id)]
    (assoc node
           :position
           {:x (* 2000 x)
            :y (* 2000 y)})))

(defn ->cyto [poses cyto pcount]
  (update cyto :nodes
          (partial mapv
                   (partial ->cyto* poses pcount))))

(defn calc-poses
  [mm nodes]
  (let [ps (normalize2 (normalize2 (map (partial calc-pos1 mm)
                                        nodes)
                                   1)
                       2)]
    (into {}
          (for [[id x y] ps]
            [id [x y]]))))

(defn do-layout
  [cyto]
  (let [nodes (node-list cyto)
        mm (do-layout* cyto 100)]
    (->cyto (calc-poses mm nodes)
            cyto
            (-> mm :paths count))))


#_ (clojure.pprint/pprint (select-keys (do-layout (select-keys (w-mk-graph-def2)
                                                           [:nodes :edges]))
                                       [:nodes :edges]))

;; ===================================================


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
          :elements (select-keys (do-layout nodes1)
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
           {:layout {:name "preset"}
            :style [{:selector "node"
                     :style {:content "data(id)"}}
                    {:selector "edge"
                     :style {"curve-style" "unbundled-bezier"
                             :control-point-distances [0]
                             :control-point-weights [0.5]
                             :target-arrow-color "#f00"
                             :target-arrow-shape "triangle"}}]
            :elements (select-keys (do-layout (select-keys (w-mk-graph-def2)
                                                           [:nodes :edges]))
                                   [:nodes :edges])}])

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








