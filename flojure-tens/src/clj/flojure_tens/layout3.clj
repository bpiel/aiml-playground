(ns flojure-tens.layout3
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

(def nodes2
  {:nodes [{:data {:id "$1"}}
           {:data {:id "a" }}
           {:data {:id "b"}}
           {:data {:id "c"}}
           {:data {:id "d"}}
           {:data {:id "e"}}
           {:data {:id "f" :parent "$1"}}
           {:data {:id "g" :parent "$1"}}
           {:data {:id "h" :parent "$1"}}
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

(defn fmap
  [f m]
  (into {}
        (for [[k v] m]
          [k (f v)])))

(defn fmap-kv
  [f m]
  (into {}
        (for [[k v] m]
          (f k v))))

(defn transpose
  [v]
  (if (not-empty v)
    (apply map vector v)
    []))

(defn map-group-invert
  [m]
  (apply merge-with into
         (for [[k v] m]
           {v [k]})))

(defn mk-groups
  [{:keys [nodes]}]
  (apply merge-with into
         (for [{:keys [data]} nodes]
           (when-let [parent (:parent data)]
             {parent #{(:id data)}}))))

(defn mk-edge-maps1**
  [ms]
  (apply merge-with into ms))

(defn mk-edge-maps1*
  [{:keys [data]}]
  (let [{:keys [source target]} data]
    [{source #{target}}
     {target #{source}}]))

(defn mk-edge-maps1
  [{:keys [edges]}]
  (let [[s->t t->s]
        (mapv mk-edge-maps1**
              (apply map vector
                     (map mk-edge-maps1* edges)))]
    {:s->t s->t
     :t->s t->s
     :id->adj (mk-edge-maps1** [s->t t->s])}))

(defn mk-node-ranges
  [edge-map1]
  (into {}
        (for [k (->> edge-map1
                     vals
                     (apply merge)
                     keys)]
          {k [nil nil]})))

(defn safe-fn
  [f & args]
  (or (some->> args
               (remove nil?)
               not-empty
               (apply f))
      nil))

(defn get-mins-maxes
  [id id->set rs]
  (let [[mns mxs :as x] (some->> id
                                 id->set
                                 not-empty
                                 (map rs)
                                 (apply map vector))]
    (when x
      [(apply safe-fn max mns)
       (apply safe-fn min mxs)])))

(defn update-ranges-for-id
  [[mn mx] id {:keys [s->t t->s]} rs]
  (let [[smn _ :as s] (get-mins-maxes id t->s rs)
        [_ tmx :as t] (get-mins-maxes id s->t rs)]
    [(safe-fn max
              mn
              (when (nil? s) 0)
              (safe-fn inc smn))
     (safe-fn min
              mx
              #_(when (nil? t) mn)
              (safe-fn dec tmx))]))

(defn cap-end
  [agg item]
  (update agg
          item
          (fn [[a]]
            [a a])))

(defn cap-ends
  [rs s->t]
  (reduce cap-end
          rs
          (clojure.set/difference (-> rs keys set)
                                  (-> s->t keys set))))


(defn apply-groups-to-ranges*
  [rs grp]
  (let [[mns mxs] (transpose (keep rs grp))
        mn (apply safe-fn max mns)
        mx (apply safe-fn min mxs)]
    (if (and mns mxs)
      (let [[least-certain [a b]] (last (sort-by
                                         (fn [[_ [a b]]] (safe-fn - b a))
                                         (map vec
                                              (select-keys rs
                                                           grp))))
            avg (Math/round (/ (+ mn mx) 2.))
            [cmn cmx] (rs least-certain)
            new-val (safe-fn min cmx
                             (safe-fn max cmn avg))]
        (if (= a b)
          rs
          (assoc rs least-certain [new-val new-val]))
        rs))))

(defn apply-groups-to-ranges
  [rs grps]
  (loop [[head & tail] grps
         rs' rs
         rs-prev rs]
    (if (and head
             (= rs-prev rs'))
      (recur tail
             (apply-groups-to-ranges* rs head)
             rs-prev)
      (when (not= rs-prev rs')
        rs'))))


(defn get-ranges-for-nodes
  [{:keys [id->adj s->t] :as em} grp-map]
  (let [grps (vals grp-map)
        rs (mk-node-ranges em)
        ids (keys id->adj)]
    (loop [[id & ids'] (keys id->adj)
           rs' rs
           rs-prev rs
           capped? false]
      (cond id
            (recur ids'
                   (update rs' id
                           update-ranges-for-id
                           id
                           em
                           rs')
                   rs-prev
                   capped?)

            (not= rs' rs-prev)
            (recur ids
                   rs'
                   rs'
                   capped?)
            
            (not capped?)
            (let [rs'' (cap-ends rs' s->t)]
              (recur ids
                     rs''
                     rs-prev
                     true))

            :else (if-let [rs'' (apply-groups-to-ranges rs' grps)]
                    (recur ids
                           rs''
                           rs-prev
                           capped?)
                    rs')))))

#_(def em1 (mk-edge-maps1 nodes2))

#_ (clojure.pprint/pprint  (get-ranges-for-nodes em1
                                                 (mk-groups nodes2)))

(defn choose-level
  [[mn mx]]
  (if (or (zero? mn)
          (nil? mn))
    (or mx 0)
    mn))


(defn assign-levels
  [edge-maps1 groups]
  (fmap choose-level
   (get-ranges-for-nodes edge-maps1 groups)))


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
  [id->lvl {:keys [s->t t->s]}]
  (mapcat (partial mk-inter-nodes* id->lvl s->t t->s)
          (map vec id->lvl)))

(defn segs->id-lvl*
  [[lvl ids]]
  (into {}
        (map vector
             ids
             (range lvl
                    (+ lvl (count ids))))))

(defn segs->id-lvl
  [segs]
  (apply merge
         (map segs->id-lvl*
              segs)))


(defn lvl-id->id-pos*
  [nodes]
  (map vector
       (shuffle nodes)
       (map (comp #(* % 2.))
            (range))))

(defn lvl-id->id-pos
  [lvl->id]
  (into {}
        (mapcat lvl-id->id-pos*
                (vals lvl->id))))

(defn segs->t-s
  [segs]
  (map (fn [a b] {a #{b}})
       (drop 1 segs)
       (drop-last segs)))

(defn segs->s-t
  [segs]
  (map (fn [a b] {a #{b}})
       (drop-last segs)
       (drop 1 segs)))

(defn segs->edge-maps
  [segs]
  (let [segs' (map second segs)]
    {:s->t (apply merge-with into
                      (mapcat segs->s-t segs'))
     :t->s  (apply merge-with into
                      (mapcat segs->t-s segs'))}))


(defn mk-maps
  [cyto]
  (let [edge-maps1 (mk-edge-maps1 cyto)
        groups (mk-groups cyto)
        id->lvl (assign-levels edge-maps1 groups)
        segs (mk-segments id->lvl edge-maps1)
        id->lvl' (segs->id-lvl segs)
        lvl->id (map-group-invert id->lvl')
        id->pos (lvl-id->id-pos lvl->id)
        {:keys [s->t t->s]} (segs->edge-maps segs)]
    {:id->lvl id->lvl'
     :lvl->id lvl->id
     :id->pos id->pos
     :s->t s->t
     :t->s t->s}))

#_ (clojure.pprint/pprint (mk-maps nodes2))

(defn adjust-lvl-avg*
  [{:keys [lvl->id s->t t->s] :as mm} id->pos id]
  (let [xs (map id->pos (concat (s->t id)
                                (t->s id)))]
    (assoc id->pos id
           (/ (apply + xs)
              (count xs)))))

(defn adjust-lvl-avg
  [{:keys [lvl->id] :as mm} id->pos lvl]
  (reduce (partial adjust-lvl-avg* mm)
          id->pos
          (lvl->id lvl)))

(defn adjust-lvls-avg
  [id->pos {:keys [lvl->id] :as mm}]
  (let [clvl (apply max (keys lvl->id))]
    (reduce (partial adjust-lvl-avg mm)
            id->pos
            (concat (range 0 clvl)
                    (range clvl 0 -1)))))


;; TODO groups!!!!!!!!!!!!!!!!!!!!!!!!!!!1
(defn mk-scopes-for-node
  [mm id->pos id]
  (let [pos (id->pos id)
        pos-left (- pos 0.5)
        pos-right (+ pos 0.5)
        f (fn [id' pos'] (when (not= id id')
                           (if (<= pos' pos)
                             pos-left
                             pos-right)))]
    [[pos-left f]
     [pos-right f]]))


(defn scopes->id-xs*
  [id->pos ids scopes]
  (sort-by first
           (concat scopes
                   (map (fn [id]
                          [(id->pos id) id])
                        ids))))

(defn toggle-fn-scope
  [in-scope f]
  (if (in-scope f)
    (disj in-scope f)
    (conj in-scope f)))

(defn scopes->id-xs
  [id->pos ids scopes]
  (loop [[head & tail] (scopes->id-xs* id->pos ids scopes)
         id->xs {}
         in-scope #{}]
    (let [[_ payload] head]
      (cond (nil? head) id->xs
            (fn? payload) (recur tail
                                 id->xs
                                 (toggle-fn-scope in-scope
                                                  payload))
            :else (recur tail
                         (update id->xs
                                 payload
                                 into
                                 (keep #(% payload (id->pos payload))
                                      in-scope))
                         in-scope)))))

(defn avg-list
  [args]
  (let [c (count args)]
    (when (> c 0)
      (/ (apply + args)
         c))))

(defn apply-scopes-to-lvl
  [id->pos ids scopes]
  (merge-with #(or %2 %)
              id->pos
              (fmap avg-list
                    (scopes->id-xs id->pos ids scopes))))

(defn adjust-lvl-scopes
  [{:keys [lvl->id] :as mm} id->pos lvl]
  (let [ids (lvl->id lvl)]
    (apply-scopes-to-lvl id->pos
                         ids
                         (mapcat (partial mk-scopes-for-node mm
                                          id->pos)
                                 ids))))

(defn adjust-lvls-scopes
  [id->pos {:keys [lvl->id] :as mm}]
  (let [clvl (apply max (keys lvl->id))]
    (reduce (partial adjust-lvl-scopes mm)
            id->pos
            (range 0 clvl))))

(defn do-iter
  [mm]
  (-> mm
      (update :id->pos adjust-lvls-avg mm)
      (update :id->pos adjust-lvls-scopes mm)))

(defn do-iters
  [mm n]
  (loop [i n
         mm' mm]
    (if (> i 0)
      (recur (dec i)
             (do-iter mm'))
      mm')))

(defn filter-cyto-edges
  [edges]
  (filter (fn [{:keys [data]}]
            (= (nil? (re-find #"gradient" (:source data)))
               (nil? (re-find #"gradient" (:target data)))))
          edges))

(defn ->cyto*
  [id->lvl id->slot node]
  (let [id (-> node :data :id)
        y (id->lvl id)
        x (id->slot id)]
    (try
      (assoc node
             :position
             {:x (* 600 x)
              :y (* 200 y)})
      (catch Exception e
        node))))

(defn ->cyto
  [{:keys [id->lvl id->pos]} cyto]
  (update cyto :nodes
          (partial mapv
                   (partial ->cyto* id->lvl id->pos))))

(defn ->cyto2*
  [id->lvl id->slot id]
  (let [y (id->lvl id)
        x (id->slot id)]
    {:data {:id id}
     :position
           {:x (* 500 x)
            :y (* 200 y)}}))

(defn ->cyto2
  [{:keys [id->lvl lvl->id id->pos s->t] :as mm}]
  {:nodes (mapv (partial ->cyto2* id->lvl id->pos)
                (keys id->lvl))
   :edges (mapcat (fn [[id outs]]
                    (map (fn [t]
                           {:data {:source id
                                   :target t}})
                         outs))
                  s->t)})

#_(defn do-layout
  [cyto]
  (let [cyto' (update cyto :edges filter-cyto-edges)]
    (let [mm (mk-maps cyto')]
      (->cyto (do-iters mm 20)
              cyto'))))

(defn do-layout
  [cyto]
  (let [cyto' (update cyto :edges filter-cyto-edges)]
    (let [mm (mk-maps cyto')]
      (->cyto2 (do-iters mm 20)))))

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
          :elements (select-keys (do-layout nodes2)
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
                                              :control-point-distances [0]
                                              :control-point-weights [0.5]}}]
                             :elements (select-keys (w-mk-graph-def2)
                                                    [:nodes :edges])}]]])








