(ns flojure-tens.layout2
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

(defn map-group-invert
  [m]
  (apply merge-with into
         (for [[k v] m]
           {v [k]})))

(defn assign-levels*
  [path m]
  (loop [i 0
         [head & tail] path
         m' m]
    (if head
      (let [i' (m head i)]
        (recur (inc i')
               tail
               (assoc m' head i')))
      m')))

;; TODO make better?
(defn assign-levels

  (let [paths (reverse (sort-by count (find-paths cyto)))]
    (loop [[phead & ptail] paths
           m' {}]
      (if phead
        (recur ptail
               (assign-levels* phead m'))
        m'))))


(defn mk-edge-maps
  [{:keys [edges]}]
  (let [into-set (fnil into #{})]
    (loop [[head & tail] edges
           s->t {}
           t->s {}]
      (if head
        (let [{:keys [source target]} (:data head)]
          (recur tail
                 (update s->t
                         source
                         into-set
                         #{target})
                 (update t->s
                         target
                         into-set
                         #{source})))
        [s->t t->s]))))

(defn mk-node-kw
  [s t lvl]
  #_  (keyword "$" (format "%s-%s-%s" s t lvl))
  (format "__%s-%s-%s" s t lvl))

(defn mk-segment
  [s t lvl lvl2]
  [lvl
   (concat
    [s]
    (map (partial mk-node-kw s t)
         (range (inc lvl) lvl2))
    [t])])

(defn mk-inter-nodes*
  [id->lvl s->t t->s [id lvl]]
  (let [ts (s->t id)]
    (for [t ts]
      (let [lvl2 (id->lvl t)]
        (mk-segment id t lvl lvl2)))))

(defn mk-segments
  [id->lvl [s->t t->s]]
  (mapcat (partial mk-inter-nodes* id->lvl s->t t->s)
          (map vec id->lvl)))

(defn seg->id-lvl-map*
  [[lvl ids]]
  (into {}
        (map vector
             ids
             (range lvl
                    (+ lvl (count ids))))))

(defn seg->id-lvl-map
  [segs]
  (apply merge
         (map seg->id-lvl-map*
              segs)))

(defn seg->lvl-id-map
  [seg]
  (map-group-invert
   (seg->id-lvl-map seg)))

(defn ->id-slots-map*
  [nodes]
  (map vector
       (shuffle nodes)
       (range)))

(defn ->id-slots-map
  [lvl->id]
  (into {}
        (mapcat ->id-slots-map*
                (vals lvl->id))))

(defn segs->id-ins-map*
  [segs]
  (map (fn [a b] {a #{b}})
       (drop 1 segs)
       (drop-last segs)))

(defn segs->id-outs-map*
  [segs]
  (map (fn [a b] {a #{b}})
       (drop-last segs)
       (drop 1 segs)))

(defn segs->id-io-map
  [segs]
  (let [segs' (map second segs)]
    {:id->outs (apply merge-with into
                     (mapcat segs->id-outs-map* segs'))
     :id->ins  (apply merge-with into
                     (mapcat segs->id-ins-map* segs'))}))


#_(def id->outs1 (first $s/*))

#_ (def id->lvl $s/*)


(defn tighten-levels
  [id->outs id->lvl]
  (loop [id->lvl' id->lvl
         [head & tail] (take (* 2 (count id->lvl)) ;; necessary?
                             (cycle (keys id->lvl)))]
    (if head
      (if-let [outs (id->outs head)]
        (recur (assoc id->lvl'
                      head
                      (dec (apply min (map id->lvl' outs))))
               tail)
        (recur id->lvl' tail))
      id->lvl')))

#_(tighten-levels id->outs1
                id->lvl)

(defn mk-maps
  [nodes1]
  (let [edge-maps (mk-edge-maps nodes1)
        [id->outs] edge-maps
        id->lvl1 (assign-levels nodes1)
        id->lvl2 (tighten-levels id->outs
                                 id->lvl1)
        segs (mk-segments id->lvl2
                          edge-maps)
        id->lvl (tighten-levels id->outs
                                (seg->id-lvl-map segs))
        lvl->id (map-group-invert id->lvl)
        id->slot (->id-slots-map lvl->id)
        {:keys [id->outs id->ins]} (segs->id-io-map segs)]
    {:id->lvl id->lvl
     :lvl->id lvl->id
     :id->slot id->slot
     :id->outs id->outs
     :id->ins id->ins}))

(clojure.pprint/pprint  (mk-maps nodes1))

(defn ->cyto*
  [id->lvl id->slot node]
  (let [id (-> node :data :id)
        y (id->lvl id)
        x (id->slot id)]
    (try
      (assoc node
             :position
             {:x (* 200 x)
              :y (* 200 y)})
      (catch Exception e
        node))))

(defn ->cyto
  [{:keys [id->lvl id->slot]} cyto]
  (update cyto :nodes
          (partial mapv
                   (partial ->cyto* id->lvl id->slot))))

(defn avg-slot
  [io id->slot id]
  (let [ids (io id)]
    (/ (apply +
              (/ (Math/random) 10.)
            (map id->slot
                 ids))
       (double (count ids)))))

#_(defn adjust-lvl*
  [{:keys [id->lvl lvl->id id->slot id->outs id->ins] :as mm} ids io]
  (update mm
          :id->slot
          merge
          (into {}
                (map-indexed (fn [i id]
                               {id i})
                             (sort-by (partial avg-slot io id->slot)
                                      ids)))))

(defn adjust-lvl*
  [{:keys [id->lvl lvl->id id->slot id->outs id->ins] :as mm} ids io]
  (update mm
          :id->slot
          merge
          (into {}
                (map-indexed (fn [i id]
                               {id (+ (* i 0.3)
                                      (* (avg-slot io id->slot id)
                                         0.7 ))})
                             (sort-by (partial avg-slot io id->slot)
                                      ids)))))


(defn adjust-lvl
  [{:keys [id->lvl lvl->id id->slot id->outs id->ins] :as mm} lvl]
  (let [ids (lvl->id lvl)]
    (-> mm
        (adjust-lvl* ids (merge-with into id->ins id->outs))
#_        (adjust-lvl* ids id->outs))))

(defn do-iter
  [{:keys [id->lvl lvl->id id->slot id->outs id->ins] :as mm}]
  (let [clvl (-> lvl->id keys count)]
    (reduce adjust-lvl
            mm
            (concat (range 0 #_1 clvl)
                    (range clvl 0 -1)))))

(defn do-iters
  [{:keys [id->lvl lvl->id id->slot id->outs id->ins] :as mm} n]
  (loop [i n
         mm' mm]
    (if (> i 0)
      (recur (dec i)
             (do-iter mm'))
      mm')))

(defn do-layout
  [cyto]
  (let [mm (mk-maps cyto)]
    (->cyto (do-iters mm 1)
     cyto)))

(defn ->cyto2*
  [id->lvl id->slot id]
  (let [y (id->lvl id)
        x (id->slot id)]
    {:data {:id id}
     :position
           {:x (* 300 x)
            :y (* 200 y)}}))

(defn ->cyto2
  [{:keys [id->lvl lvl->id id->slot id->outs id->ins] :as mm}]
  {:nodes (mapv (partial ->cyto2* id->lvl id->slot)
                (keys id->lvl))
   :edges (mapcat (fn [[id outs]]
                    (map (fn [t]
                           {:data {:source id
                                   :target t}})
                         outs))
                  id->outs)})

#_(defn do-layout
  [cyto]
  (let [mm (mk-maps cyto)]
    (->cyto2 (do-iters mm 50))))

(defn filter-cyto-edges
  [edges]
  (filter (fn [{:keys [data]}]
            (= (nil? (re-find #"gradient" (:source data)))
               (nil? (re-find #"gradient" (:target data)))))
          edges))

(defn do-layout
  [cyto]
  (let [cyto' (update cyto :edges filter-cyto-edges)]
    (let [mm (mk-maps cyto')]
      (->cyto (do-iters mm 10)
              cyto'))))

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








