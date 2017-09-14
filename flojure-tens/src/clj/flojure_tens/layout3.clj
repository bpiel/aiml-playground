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

(defn mk-node-init-ranges
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
  [{:keys [id->adj s->t] :as em} grp-map & [node-ranges]]
  (let [grps (vals grp-map)
        rs (or node-ranges (mk-node-init-ranges em))
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

#_(def grp-map1 $s/*)

#_(def lvl-rngs $s/*)

(defn get-grp
  [id & [depth]]
  (clojure.string/join "/"
                       (take (or depth 100)
                             (drop-last
                              (clojure.string/split id #"/")))))

(defn inspect-group-levels*
  [glvls]
  (let [mx (apply max glvls)
        mn (apply min glvls)]
    [mx (- mx mn)]))

(defn inspect-group-levels
  [lvl-rngs & [depth]]
  (sort-by #(-> % second first)
           (map vec
                (fmap inspect-group-levels*
                      (apply merge-with into
                             (for [[id lvl] lvl-rngs ]
                               {(get-grp id depth)
                                [lvl]}))))))

(defn calc-level-stacks*
  [[total m] [id [mx height]]]
  [(+ total height 3)
   (if (= id "")
     m
     (assoc m id [total (+ total height)]))])

(defn calc-level-stacks
  [lvls-map]
  (second
   (reduce calc-level-stacks*
           [1 {}]
           (inspect-group-levels lvls-map 1))))

(defn apply-level-stacking*
  [lvl-stacks lvls-map k]
  (let [lvl-rng (some-> k (get-grp 1) lvl-stacks)
        v (lvls-map k)
        v' (if lvl-rng
             lvl-rng
             #_[(+ v offset -1)(+ v offset 5)]
             [nil nil])]
    (assoc lvls-map
           k
           v')))

(defn apply-level-stacking
  [lvls-map]
  (let [lvl-stacks (calc-level-stacks lvls-map)]
    (reduce (partial apply-level-stacking*
                     lvl-stacks)
            lvls-map
            (keys lvls-map))))

(defn choose-level
  [[mn mx]]
  (int (if (or (nil? mn)
               (zero? mn))
         (or mx 0)
         (Math/floor (/ (+ mn mn) 2)))))


(defn assign-levels
  [edge-maps1 groups]
  (fmap (partial apply safe-fn max) #_choose-level
   (get-ranges-for-nodes edge-maps1 groups)))

(defn assign-levels-stacked
  [edge-maps1 groups]
  (let [alvls1 (assign-levels edge-maps1 groups)
        stacked (apply-level-stacking alvls1)]
    (fmap choose-level
          (get-ranges-for-nodes edge-maps1
                                groups
                                stacked))))

(defn assign-levels-stacked2
  [edge-maps1 groups]
  (let [alvls1 (assign-levels-stacked edge-maps1 groups)
        stacked (apply-level-stacking alvls1)]
    (fmap choose-level
          (get-ranges-for-nodes edge-maps1
                                groups
                                stacked))))

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


#_(defn lvl-id->id-pos*
  [nodes]
  (map vector
       (shuffle nodes)
       (map #(* % 2.)
            (range))))

(defn lvl-id->id-pos*
  [nodes]
  (map vector
       (shuffle nodes)
       (repeat 0.)))

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


(defn mk-temp-map
  [ids]
  (into {}
        (for [id ids]
          [id 0.])))

(defn mk-maps
  [cyto]
  (let [edge-maps1 (mk-edge-maps1 cyto)
        grp->ids (dissoc (mk-groups cyto)
                         "gradients") ;; TODO
        id->lvl (assign-levels-stacked2 edge-maps1 grp->ids)
        segs (mk-segments id->lvl edge-maps1)
        id->lvl' (segs->id-lvl segs)
        lvl->id (map-group-invert id->lvl')
        id->pos (lvl-id->id-pos lvl->id)
        id->temp (mk-temp-map (keys id->pos))
        {:keys [s->t t->s]} (segs->edge-maps segs)]
    {:id->lvl id->lvl'
     :lvl->id lvl->id
     :id->pos id->pos
     :s->t s->t
     :t->s t->s
     :grp->ids grp->ids}))

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

(defn pusher
  [id pos id' pos' pos-left pos-right]
  (when (not= id id')
    (if (<= pos' pos)
      pos-left
      pos-right)))

(defn mk-scopes-for-node
  [mm id->pos id]
  (let [width 100.
        pos (id->pos id)
        pos-left (- pos width)
        pos-right (+ pos width)
        f (fn [id' pos']
            (pusher id pos id' pos' pos-left pos-right))]
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

(defn select-scopes-by-lvl
  [scopes lvl]
  (keep (fn [[lmn lmx & scope]]
          (when (<= lmn lvl lmx)
            scope))
        scopes))

(defn adjust-lvl-scopes
  [{:keys [lvl->id] :as mm} other-scopes id->pos lvl]
  (let [ids (lvl->id lvl)]
    (apply-scopes-to-lvl id->pos
                         ids
                         (concat (select-scopes-by-lvl other-scopes
                                                       lvl)
                                 (mapcat (partial mk-scopes-for-node mm
                                                  id->pos)
                                         ids)))))

#_(def grp->ids1 (:grp->ids $s/*))

#_ (def id->pos1 $s/*)

#_(defn median [v]
  (let [v' (sort v)
        half (/ (dec (count v)) 2.)
        f (Math/floor half)
        c (Math/ceil half)]
    (when (>= f 0)
      (/ (+ (nth v' f)
            (nth v' c))
         2.))))

(defn spread
  [v]
  (if (not-empty v)
    (- (apply max v)
       (apply min v))
    0.))

(defn get-grp-stats
  [xs]
  {:avg (avg-list xs)
   :spread (spread xs)})

(defn inter-node?
  [id]
  (.startsWith id "__"))

(defn id-in-group?
  [grp id]
  (.startsWith id grp))

(defn mk-grp-scope-fns
  [grp ids lmx lmn {:keys [avg spread]}]
  (let [outer-limit  (* 100. (/ spread 2.))
        inner-limit  0. #_(* 0.5 (/ spread 2.))
        pos-left (- avg outer-limit)
        pos-right (+ avg outer-limit)
        pos-left' (- avg inner-limit)
        pos-right' (+ avg inner-limit)
        grp? (partial id-in-group? grp)
        f (fn [id' pos'] (when-not (or (grp? id') (inter-node? id'))
                           (if (<= pos' avg)
                             pos-left
                             pos-right)))
        f2 (fn [id' pos'] (when (grp? id')
                            (cond (< pos' pos-left')
                                  pos-left'
                                  (> pos' pos-right')
                                  pos-right')))]
    [[lmn lmx pos-left f]
     [lmn lmx pos-right f]
     [lmn lmx Float/MIN_VALUE f2]
     [lmn lmx Float/MAX_VALUE f2]]))

(defn mk-grp-scopes*
  [id->lvl id->pos [grp ids]]
  (let [lvls (keep id->lvl ids)
        lmx (apply safe-fn max lvls)
        lmn (apply safe-fn min lvls)]
    (if (and lmx lmn)
      (->> ids
           (keep id->pos)
           get-grp-stats
           (mk-grp-scope-fns grp ids lmx lmn))
      [])))

(defn mk-grp-scopes
  [id->lvl id->pos grp->ids]
  (mapcat (partial mk-grp-scopes* id->lvl id->pos)
          grp->ids))

(defn adjust-lvls-scopes
  [id->pos {:keys [id->lvl lvl->id grp->ids] :as mm}]
  (let [clvl (apply max (keys lvl->id))
        grp-scopes  (mk-grp-scopes id->lvl id->pos grp->ids)]
    (reduce (partial adjust-lvl-scopes mm grp-scopes)
            id->pos
            (range 0 clvl))))

(defn alpha-applier
  [alpha current adjust]
  (+ (* current (- 1. alpha))
     (* adjust alpha)))

(defn update-with-alpha
  [id->pos alpha f & args]
  (let [id->pos' (apply f id->pos args)]
    (merge-with (partial alpha-applier alpha)
                id->pos
                id->pos')))

(defn find-crossings1-bottoms
  [id->pos t->s ids]
  (sort-by id->pos (filter t->s ids)))

(defn find-crossings1-tops
  [id->pos t->s ids]
  (map second
       (sort-by first (mapcat (fn [id]
                                (map #(vector (+ (id->pos %)
                                                 (/ (id->pos id)
                                                    10000.))
                                              id)
                                     (t->s id)))
                              ids))))
(defn interleave*
  [a b]
  (let [c (+ (count a) (count b))
        r (repeat ::stupid)]
    (take c (remove #{::stupid}
                    (mapcat vector
                            (concat a r)
                            (concat b r))))))

(defn find-crossings1
  [id->pos t->s ids]
  (interleave*
   (dedupe (find-crossings1-bottoms id->pos t->s ids))
   (dedupe (find-crossings1-tops id->pos t->s ids))))

(defn update-crossings-map
  [m past id]
  (loop [m' m
         [head & tail] past]
    (if head
      (recur (if-not (= head id)
               (update m' head
                       (fnil conj #{})
                       id)
               m')
             tail)
      m')))

(defn find-crossings2
  [ids]
  (loop [[head & tail] ids
         m {}
         past #{}
         x #{}]
    (if head
      (let [past' (conj past head)
            m' (update-crossings-map m past head)
            mhead (m' head)
            x' (if (not-empty mhead)
                 (clojure.set/union x mhead #{head})
                 x)]
        (recur tail
               m'
               past'
               x'))
      x)))

(defn find-crossings
  [id->pos t->s lvl->id]
  (mapcat (fn [ids]
         (find-crossings2
          (find-crossings1 id->pos t->s ids)))
       (vals lvl->id)))

#_(find-crossings $s/id->pos $s/t->s $s/lvl->id)

(defn inc-temp
  [n]
  (min 100.
       (max 1.
            (* (or n 0.)
               4.))))

(defn dec-temp
  [n]
  (if (< n 0.1)
    0.
    (/ n 3.)))

(defn adjust-temperature
  [{:keys [id->temp id->pos lvl->id s->t t->s] :as mm}]
  (let [cooled (fmap dec-temp id->temp)
        crossed (find-crossings id->pos t->s lvl->id)]
    (assoc mm
           :id->temp
           (reduce (fn [agg item]
                     (update agg item
                             inc-temp))
                   cooled
                   crossed)
           :crossed crossed)))

(defn adjust-lvls-temperature
  [id->pos {:keys [id->temp crossed] :as mm}]
  (loop [[head & tail] crossed
         id->pos' id->pos]
    (if head
      (update id->pos'
              head
              (fn [pos]
                (-> (Math/random)
                    (- 0.5)
                    (* (id->temp head))
                    (+ pos))))
      id->pos')))

(defn adjust-lvls-horiz-scale
  [id->pos {:keys [lvl->id] :as mm}]
  (let [{:keys [avg spread]} (get-grp-stats (vals id->pos))
        widest (apply max (map count (vals lvl->id)))]
    (if (> spread (* widest 3.))
      (fmap (fn [x]
              (/ (* widest 2.5
                    (- x avg))
                 spread))
            id->pos)
      id->pos)))

(defn do-iter
  [mm alpha]
  (-> mm
      adjust-temperature
      (update :id->pos
              update-with-alpha
              1. #_alpha
              adjust-lvls-temperature
              mm)
      (update :id->pos
              update-with-alpha
              1. #_(min 1. (* alpha 3.))
              adjust-lvls-avg
              mm)
      (update :id->pos
              update-with-alpha
              1. #_alpha
              adjust-lvls-scopes
              mm)
      (update :id->pos
              update-with-alpha
              1. #_alpha
              adjust-lvls-horiz-scale
              mm)
      (update :id->pos
              update-with-alpha
              (max 0.15 alpha)
              adjust-lvls-avg
              mm)))

(defn do-iters
  [mm n & [alpha-i alpha-n]]
  (loop [i n
         mm' mm]
    (if (> i 0)
      (recur (dec i)
             (do-iter mm' (double (/ (or alpha-i i)
                                     (or alpha-n n)))))
      mm')))

(defn filter-cyto-edges
  [edges]
  (filter (fn [{:keys [data]}]
            (= (nil? (re-find #"gradient" (:source data)))
               (nil? (re-find #"gradient" (:target data)))))
          edges))

(defn filter-cyto-nodes
  [nodes]
  (remove (fn [{:keys [data]}]
            (re-find #"gradient" (:id data)))
          nodes))

(defn filter-cyto
  [cyto]
  (-> cyto
      (update :edges filter-cyto-edges)
      (update :nodes filter-cyto-nodes)))

(defn id->name
  [id]
  (last (clojure.string/split id
                              #"/")))

(defn ->cyto*
  [id->lvl id->slot node]
  (let [id (-> node :data :id)
        y (id->lvl id)
        x (id->slot id)]
    (try
      (assoc node
             :name (id->name id)
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

(defn mk-id->xy
  [id->lvl id->pos]
  (into {}
        (for [id (keys id->lvl)]
          (let [lvl (id->lvl id)
                pos (id->pos id)]
            (when (and lvl pos)
              [id [(int (* 200 pos))
                   (int (* 200 lvl))]])))))

(defn mk-edge-paths-inits
  [eps]
  (into {}
        (for [[s] eps]
          {[s s] [s]})))

(defn split-map
  [m k-fn]
  (map (partial apply merge)
       (transpose
        (for [[k v] m]
          (if (k-fn k)
            [{k v} {}]
            [{} {k v}])))))

(defn advance-paths*
  [s->t [[s c] path]]
  (into {}
        (for [t (s->t c)]
          [[s t] (conj path t)])))

(defn advance-paths
  [s->t paths]
  (apply merge
         (map (partial advance-paths* s->t)
              (map vec paths))))

(defn mk-edge-paths
  [s->t edge-pair-set]
  (let [init (mk-edge-paths-inits edge-pair-set)
        ceps (count edge-pair-set)]
    (loop [paths init]
      (let [[done todo] (split-map paths edge-pair-set)
            done? (= (count done) ceps)]
        (if (or done? (-> todo count zero?))
          paths
          (recur (merge done
                        (advance-paths s->t todo))))))))

(defn mk-edge-pairs
  [edges]
  (vec (for [{:keys [data]} edges]
         [(:source data)
          (:target data)])))


(defn dist
  [x1 y1 x2 y2]
  (let [dx (- x2 x1)
        dy (- y2 y1)]
    (Math/sqrt (+ (* dy dy)
                  (* dx dx)))))

(defn steeper?
  [x1 y1 x2 y2 x3 y3]
  (< (* (- x1 x3)
        (- y1 y2))
     (* (- x1 x2)
        (- y1 y3))))

(defn inside-box?
  [x1 y1 x2 y2 xp yp]
  (and (or (< x1 xp x2)
           (> x1 xp x2))
       (or (< y1 yp y2)
           (> y1 yp y2))))

(defn find-intersection
  [x1 y1 x2 y2 x3 y3]
  (let [dx (- x2 x1)
        dy (- y2 y1)
        k (/ (- (* dy (- x3 x1))
                (* dx (- y3 y1)))
             (+ (* dy dy)
                (* dx dx)))
        x4 (- x3 (* k dy))
        y4 (+ y3 (* k dx))]
    [x4 y4]))

(defn rel-coords
  [x1 y1 x2 y2 x3 y3]
  (let [[x4 y4] (find-intersection x1 y1 x2 y2 x3 y3)
        d12 (dist x1 y1 x2 y2)
        d14 (dist x1 y1 x4 y4)
        d34 (dist x3 y3 x4 y4)
        st (if (steeper? x1 y1 x2 y2 x3 y3) 1 -1)]
    (when (inside-box? x1 y1 x2 y2 x4 y4)
      [(* d34 st) (/ d14 d12)])))


(defn translate-points-to-bezier
  [[sx sy] [tx ty] middle]
  (keep (fn [[x3 y3]]
          (rel-coords sx sy tx ty x3 y3))
        middle))

(defn mk-edge-route
  [id->xy path]
  (let [xys (map id->xy path)
        [s & tail] xys
        middle (not-empty (drop-last tail))
        t (last xys)]
    (if middle    
      (translate-points-to-bezier s t middle)
      [])))

(defn mk-edge-routes
  [id->xy edge-paths]
  (fmap (partial mk-edge-route id->xy)
        edge-paths))

(defn mk-ctrl-pt-styles-for-pair
  [edge-route]
  (let [[cpd cpw] (transpose edge-route)
        f (fn [ns]
            (clojure.string/join " "
                                 (map #(format "%.3f" %)
                                      ns)))]
    {:control-point-distances (f cpd)
     :control-point-weights (f cpw)}))

(defn mk-ctrl-pt-styles
  [edge-routes]
  (fmap mk-ctrl-pt-styles-for-pair
        edge-routes))

(defn assoc-pos-to-node
  [id->xy {:keys [data] :as node}]
  (let [[x y] (id->xy (:id data))]
    (or (when (and x y)
          (assoc node
                 :position
                 {:x x
                  :y y}))
        node)))

(defn assoc-styles-to-edge
  [ctrl-pt-styles {:keys [data] :as edge}]
  (let [{:keys [source target]} data
        style (ctrl-pt-styles [source target])]
    (assoc edge
           :style
           style)))

(defn ->cyto3
  [{:keys [id->lvl id->pos s->t]} {:keys [nodes edges]}]
  (let [id->xy (mk-id->xy id->lvl id->pos)
        edge-pairs (mk-edge-pairs edges)
        edge-paths (mk-edge-paths s->t (set edge-pairs))
        edge-routes (mk-edge-routes id->xy edge-paths)
        ctrl-pt-styles (mk-ctrl-pt-styles edge-routes)]
    {:nodes (mapv (partial assoc-pos-to-node id->xy) nodes)
     :edges (mapv (partial assoc-styles-to-edge ctrl-pt-styles) edges)}))

(defn ->cyto2*
  [id->lvl id->slot id]
  (let [y (id->lvl id)
        x (id->slot id)]
    {:data {:id id}
     :position
     {:x (* 200 x)
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

(def astate (atom nil))

(defn init-or-inc-state
  [state cyto n]
  (if (nil? state)
    (let [cyto' (filter-cyto cyto)]
      {:n n
       :i n
       :cyto cyto'
       :mm (mk-maps cyto')})
    (let [{:keys [i n mm]} state]
      (if (> i 0)
        (-> state
            (assoc :i (dec i))
            (assoc :mm (do-iters mm 1 i n)))
        state))))

(defn do-layout2
  [cyto n]
  (let [{:keys [mm cyto n i]} (swap! astate init-or-inc-state cyto n)]
    (clojure.pprint/pprint  [i n])
#_    (->cyto2 mm #_ cyto)
        (->cyto3 mm cyto)))

(defn do-layout
  [cyto & [n]]
  (let [cyto' (filter-cyto cyto)]
    (let [mm (mk-maps cyto')]
      (->cyto3 (do-iters mm (or n 1))
              cyto'))))

(defn do-layoutX
  [cyto]
  (let [cyto' (filter-cyto cyto)]
    (let [mm (mk-maps cyto')]
      (->cyto2 (do-iters mm 3)))))

#_(do-layout2 nodes2 10)

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
          :elements (select-keys (do-layout2 nodes2 20)
                                 [:nodes :edges])}])

#_(w-push ['$/graph
           {:layout {:name "preset"}
            :style [{:selector "node"
                     :style {:content "data(name)"
                             :border-width 10
                             :font-size 50}}
                    {:selector "edge"
                     :style {:width 3
                             "curve-style" "unbundled-bezier"
                             :control-point-distances [0]
                             :control-point-weights [0.5]
                             :target-arrow-color "#f00"
                             :target-arrow-shape "triangle"}}]
            :elements (select-keys (do-layout (select-keys (w-mk-graph-def2)
                                                           [:nodes :edges])
                                              20)
                                   [:nodes :edges])}])

#_(w-push ['$/graph
           {:layout {:name "preset"}
            :style [{:selector "node"
                     :style {:content "data(name)"
                             :border-width 10
                             :font-size 50}}
                    {:selector "edge"
                     :style {:width 3
                             "curve-style" "unbundled-bezier"
                             :control-point-distances [0]
                             :control-point-weights [0.5]
                             :target-arrow-color "#f00"
                             :target-arrow-shape "triangle"}}]
            :elements (select-keys (do-layoutX (select-keys (w-mk-graph-def2)
                                                           [:nodes :edges]))
                                   [:nodes :edges])}])


#_(w-push ['$/graph
           {:layout {:name "preset"}
            :style [{:selector "node"
                     :style {:content "data(id)"
                             :border-width 10}}
                    {:selector "edge"
                     :style {:width 3
                             "curve-style" "unbundled-bezier"
                             :control-point-distances [0]
                             :control-point-weights [0.5]
                             :target-arrow-color "#f00"
                             :target-arrow-shape "triangle"}}]
            :elements (select-keys (do-layout2 (select-keys (w-mk-graph-def2)
                                                            [:nodes :edges])
                                               20)
                                   [:nodes :edges])}])
