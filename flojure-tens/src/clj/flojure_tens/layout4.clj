(ns flojure-tens.layout4
  (:require [flojure-tens.core :as ft]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops :as o]
            [flojure-tens.ops-gen :as ops-gen]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
            [flojure-tens.data-type :as dt]
            [flojure-tens.webapp.server :as wsvr]
            clojure.data)
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
  {:nodes [{:data {:id "grp1"}}
           {:data {:id "grp2"}}
           {:data {:id "a" }}
           {:data {:id "b"}}
           {:data {:id "grp2/c" :parent "grp2"}}
           {:data {:id "d"}}
           {:data {:id "e"}}
           {:data {:id "grp1/f" :parent "grp1"}}
           {:data {:id "grp1/g" :parent "grp1"}}
           {:data {:id "grp1/h" :parent "grp1"}}
           {:data {:id "i"}}
           {:data {:id "j"}}]
   :edges [{:data {:source "a"
                   :target "b"}}
           {:data {:source "grp2/c"
                   :target "grp1/g"}}
           {:data {:source "b"
                   :target "d"}}
           {:data {:source "d"
                   :target "e"}}
           {:data {:source "grp1/f"
                   :target "d"}}
           {:data {:source "grp1/g"
                   :target "e"}}
           {:data {:source "grp1/h"
                   :target "grp1/g"}}
           {:data {:source "i"
                   :target "grp1/h"}}
           {:data {:source "j"
                   :target "d"}}
           {:data {:source "j"
                   :target "a"}}
           {:data {:source "i"
                   :target "j"}}]})


(defn mean
  [& args]
  (/ (apply + args)
     (count args)))

(defn fmap
  [f m]
  (into {}
        (for [[k v] m]
          [k (f v)])))

(defmacro for->map
  [bindings & body]
  `(into {}
         (for ~bindings
           ~@body)))

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

(defn id->grp
  [id & [depth]]
  (clojure.string/join "/"
                       (take (or depth 100)
                             (drop-last
                              (clojure.string/split id #"/")))))

(defn cyto->parents
  [{:keys [nodes]}]
  (->> nodes
       (keep #(-> % :data :parent))
       set))

(defn cyto->ids
  [{:keys [nodes] :as cyto}]
  (->> nodes
       (mapv #(-> % :data :id))
       (remove (cyto->parents cyto))))

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
  [ids {:keys [s->t]}]
  (mapcat (partial find-paths* s->t)
          (bottoms ids s->t)))



#_(find-paths (cyto->ids nodes2)
              (mk-edge-maps1 nodes2))

(defn find-longest-path-info
  [paths]
  (let [longest (->> paths
                     (sort-by count)
                     reverse
                     first)]
    {:lo (first longest)
     :hi (last  longest)
     :depth (count longest)}))

#_ (find-longest-path-info
    (find-paths (cyto->ids nodes2)
                (mk-edge-maps1 nodes2)))

(defn mk-edge-maps1**
  [ms]
  (apply merge-with into ms))

(defn mk-edge-maps1*
  [{:keys [data]}]
  (let [{:keys [source target]} data]
    [{source #{target}}
     {target #{source}}]))

(defn cyto->edge-maps
  [{:keys [edges]}]
  (let [[s->t t->s]
        (mapv mk-edge-maps1**
              (apply map vector
                     (map mk-edge-maps1* edges)))]
    {:s->t s->t
     :t->s t->s
     :id->adj (mk-edge-maps1** [s->t t->s])}))

(defn mk-node-init-ranges
  [id->adj {:keys [lo hi depth]}]
  (for->map [k (keys id->adj)]
            (cond (= k lo) [k [0 0]]
                  (= k hi) [k [depth depth]]
                  :else [k [0 depth]])))


(defn safe-fn
  [f & args]
  (or (some->> args
               (remove nil?)
               not-empty
               (apply f))
      nil))

(defn safe-fn2
  [f & args]
  (when (every? (comp not nil?)
                args)
    (apply f args)))

(defn get-mins-maxes
  [id id->set rs]
  (let [[mns mxs :as x] (some->> id
                                 id->set
                                 not-empty
                                 (map rs)
                                 (apply map vector))]
    (when x
      [(apply safe-fn max mns)
       (apply safe-fn min mxs)
       (apply safe-fn2 max mns)
       (apply safe-fn2 min mxs)])))

(defn update-ranges-for-id
  [[mn mx] id {:keys [s->t t->s]} rs]
  (let [[smn _ :as s] (get-mins-maxes id t->s rs)
        [tmn tmx tmn2 tmx2 :as t] (get-mins-maxes id s->t rs)        
        new-mx (safe-fn min
                        mx
                        (safe-fn dec tmx))
        new-mn (safe-fn max
                        mn
                        (when (nil? s) (or
                                        (when tmn2
                                          (dec tmn2))
                                        0))
                        (safe-fn inc smn))]
#_    (when (= id "Const_37")
      (clojure.pprint/pprint
       {:mn mn
        :mx mx
        :rs rs
        :s s
        :t t}))
    [(when new-mn
       (safe-fn min new-mn new-mx))
     (when new-mx
       (safe-fn max new-mx new-mn))]))

(defn reduce-uncertainty1
  [rs]
  (let [[id [mn mx]] (->> rs
                          (remove (fn [[id [mn mx]]]
                                    (or (nil? mn)
                                        (nil? mx))))
                          (sort-by (fn [[id [mn mx]]]
                                     (- mx mn)))
                          #_reverse
                          first)]
    (cond (< mn mx)
          (assoc rs id [mx mx])
          :else nil)))

(defn reduce-uncertainty2
  [rs]
  (let [[id [mn mx]] (->> rs
                          (filter (fn [[id [mn mx]]]
                                    (nil? mx)))
                          (sort-by (fn [[id [mn mx]]]
                                     mn))
                          reverse
                          first)]
    (when id
      (assoc rs id [mn mn]))))

(defn reduce-uncertainty
  [rs]
  (or (reduce-uncertainty2 rs)
      (reduce-uncertainty1 rs)))


(defn get-ranges-for-nodes
  [{:keys [id->adj s->t] :as em} longest-info & [node-ranges]]
  (let [rs (or node-ranges (mk-node-init-ranges id->adj
                                                longest-info))
        ids (keys id->adj)]
    (loop [[id & ids'] (keys id->adj)
           rs' rs
           rs-prev rs
           n 0]
      #_      (clojure.pprint/pprint n)
      (cond (> n 1000000) 
            (do (println "get-ranges-for-nodes LIMITED!")
                (def rs1 rs') #_ (clojure.pprint/pprint rs1)
                (def rs-prev1 rs-prev) #_ (clojure.pprint/pprint rs-prev1)
                rs')
#_            (clojure.pprint/pprint  (clojure.data/diff rs1 rs-prev1))
            id
            (recur ids'
                   (update rs' id
                           update-ranges-for-id
                           id em rs')
                   rs-prev
                   (inc n))

            (not= rs' rs-prev)
            (recur ids
                   rs'
                   rs'
                   (inc n))
            
            :else (if-let [rs'' (reduce-uncertainty rs')]
                    (recur ids
                           rs''
                           rs-prev
                           (inc n))
                    rs')))))

(defn assign-levels
  [{:keys [id->adj s->t] :as em} longest-info & [node-ranges]]
  (let [rngs (get-ranges-for-nodes em
                                   longest-info
                                   node-ranges)]
    (def rngs1 rngs)
    (fmap second rngs)))

(defn inspect-group-levels*
  [glvls]
  (let [mx (apply max glvls)
        mn (apply min glvls)]
    [mn (inc (- mx mn))]))

(defn inspect-group-levels
  [lvl-rngs & [depth]]
  (def lvl-rngs1 lvl-rngs)
  (sort-by #(-> % second first)
           (map vec
                (fmap inspect-group-levels*
                      (apply merge-with into
                             (for [[id lvl] lvl-rngs ]
                               {(id->grp id depth)
                                [lvl]}))))))

(defn calc-level-stacks*
  [[total m] [id [mn height]]]
  (if (= id "")
    [total m]
    [(+ total height 3)
     (assoc m id [total (+ total height)])]))

(defn calc-level-stacks
  [lvls-map depth]
  (second
   (reduce calc-level-stacks*
           [3 {}]
           (inspect-group-levels lvls-map depth))))

(defn apply-level-stacking*
  [lvl-stacks ldepth max-lvl lvls-map k]
  (let [lvl-rng (some-> k (id->grp ldepth) lvl-stacks)
        v (lvls-map k)
        v' (if lvl-rng
             lvl-rng
             [nil nil])]
    (assoc lvls-map
           k
           v')))

(defn stack-groups
  [id->lvl em grp-depth]
  (let [lvl-stacks (calc-level-stacks id->lvl grp-depth)
        max-lvl (->> lvl-stacks
                     vals
                     (map second)
                     (apply max))]
    (reduce (partial apply-level-stacking*
                     lvl-stacks
                     grp-depth
                     max-lvl)
            id->lvl
            (keys id->lvl))))

(defn drop-empty-levels
  [id->lvl]
  (let [lvl->ids (map-group-invert id->lvl)
        lvl-mx (apply max (keys lvl->ids))
          new-lvls (map-indexed
                  vector
                  (dedupe
                   (map lvl->ids
                        (range 0 (inc lvl-mx)))))]
#_    (clojure.pprint/pprint  new-lvls)
    (for->map [[lvl ids] new-lvls
               id ids]
              [id lvl])))

(defn assign-levels-stack-groups
  [em longest-info]
  (let [stack-reps 5]
    (loop [node-ranges nil
           id->lvl nil
           c 0]
      (cond (< c stack-reps)
            (let [id->lvl' (assign-levels em
                                          longest-info
                                          node-ranges)]
              (recur (stack-groups id->lvl' em 1)
                      id->lvl'
                     (inc c)))

            :else (drop-empty-levels id->lvl)))))


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
  [id->lvl s->t [id lvl]]
  (let [ts (s->t id)]
    (for [t ts]
      (let [lvl2 (id->lvl t)]
        (mk-segment id t lvl lvl2)))))

(defn mk-segments
  [id->lvl {:keys [s->t]}]
  (mapcat (partial mk-inter-nodes* id->lvl s->t)
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


(def astate (atom nil))


(defn filter-cyto-edges
  [edges]
  (filter (fn [{:keys [data]}]
            (and (nil? (re-find #"gradient" (:source data)))
                (nil? (re-find #"gradient" (:target data)))))
          edges))

(defn filter-cyto-nodes
  [nodes]
  (remove (fn [{:keys [data]}]
            (or (re-find #"gradient" (:id data))
                (re-find #"Const" (:id data))))
          nodes))

(defn filter-cyto
  [cyto]
  (-> cyto
      (update :edges filter-cyto-edges)
      (update :nodes filter-cyto-nodes)))


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


(defn seg->t-s
  [seg]
  (map (fn [a b] {a #{b}})
       (drop 1 seg)
       (drop-last seg)))

(defn seg->s-t
  [seg]
  (map (fn [a b] {a #{b}})
       (drop-last seg)
       (drop 1 seg)))

(defn seg->st-w
  [[_ seg]]
  (map (fn [a b] {[a b] (mk-st-weights* a b)})
       (drop-last seg)
       (drop 1 seg)))

(defn mk-st-w**
  [id edges]
  (loop [n 10
         agg #{}
         todo #{id}]
    (if (and (> n 0) (not-empty todo))
      (let [todo' (set (mapcat edges todo))]
        (recur (dec n)
               (into agg todo')
               todo'))
      agg)))

(defn mk-st-w*
  [edges dir]
  (for->map [[k vs] edges
             v vs]
            [[k v]
             (count (mk-st-w** v edges))]))

(defn mk-st-w
  [s->t t->s]
  (fmap #(-> % inc #_Math/sqrt)
        (merge (mk-st-w* s->t true)
               (mk-st-w* t->s false))))

(defn segs->edge-maps
  [segs]
  (let [segs' (map second segs)
        s->t (apply merge-with into
                    (mapcat seg->s-t segs'))
        t->s (apply merge-with into
                   (mapcat seg->t-s segs'))]
    {:s->t s->t
     :t->s t->s
     :st->w (mk-st-w s->t t->s)}))


(defn mk-temp-map
  [ids]
  (into {}
        (for [id ids]
          [id 0.])))



(defn mk-maps
  [cyto]
  (let [edge-maps1 (cyto->edge-maps cyto)
        longest-info (find-longest-path-info
                      (find-paths (cyto->ids cyto)
                                  edge-maps1))
        id->lvl (assign-levels-stack-groups edge-maps1
                                            longest-info)
        segs (mk-segments id->lvl edge-maps1)
        id->lvl' (segs->id-lvl segs)
        lvl->id (map-group-invert id->lvl')
        id->pos (lvl-id->id-pos lvl->id)
        id->temp (mk-temp-map (keys id->pos))
        {:keys [s->t t->s st->w]} (segs->edge-maps segs)]
    {:id->lvl id->lvl'
     :lvl->id lvl->id
     :id->pos id->pos
     :s->t s->t
     :t->s t->s
     :st->w st->w
     :id->temp id->temp
     :grps (cyto->parents cyto)}))

(defn calc-forces-rnd
  [{:keys [id->pos]}]
  (for [id (keys id->pos)]
    [id (Math/random) 1.]))


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

(defn climb-tree
  [id m mn-steps]
  (let [max-steps 30]
    (loop [n 0
           id' id]
      (if (>= n max-steps)
        [#{id'} (double m)]
        (let [ids (m id')]
          (if (and ids
                   (= (count ids) 1)
                   (.startsWith (first ids) "__"))
            (recur (inc n)
                   (first ids))
            (when (> n mn-steps)
              [#{id'} (double n)])))))))


(defn ->xw-pairs
  [pos id->pos st->w id->temp id ids dir]
  (for [id2 ids]
    (let [pos2 (id->pos id2)
          w (-> [id id2]
                #_(if dir [id id2] [id2 id])
                st->w)
          temp (id->temp id)]
      [pos2
       (* -1. w #_(min (max 1. temp)
                     5.))
       (format "->xw-pairs pos %s| id2 %s| pos2 %s"
               pos id2
               pos2)])))

(defn calc-forces-avg-neighbor*
  [id  {:keys [s->t t->s st->w id->temp ] :as mm} id->pos]
  (let [pos (id->pos id)
        f (partial ->xw-pairs pos id->pos st->w id->temp id)]
    (concat (f (s->t id) true)
            (f (t->s id) false))))

(defn calc-forces-avg-neighbor
  [mm _ alpha id->pos id _]
  (calc-forces-avg-neighbor* id mm id->pos))


#_(defn pusher
  [id frc pos id' pos']
  (when (not= id id')
    (if (or (< pos' pos)
            (and (= pos' pos)
                 (> (hash id)
                    (hash id'))))
      [(- (- pos pos') frc) ]
      [(- frc (- pos' pos)) 1.0 1.0])))

(defn pusher
  [id width pos id' pos']
  (let [frc (- width (Math/abs (- pos pos')))]
    (when (not= id id')
      (if (or (< pos' pos)
              (and (= pos' pos)
                   (> (hash id)
                      (hash id'))))
        [-1. frc]
        [1. frc]))))

(defn mk-scopes-for-node
  [mm id->pos id]
  (let [width 2.
        pos (id->pos id)
        pos-left (- pos width)
        pos-right (+ pos width)
        f (fn [id' pos']
            (pusher id width pos id' pos'))]
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

(defn scopes->id-xs**
  [id->xs]
  (remove nil?
          (for [[k vs] id->xs
                v vs]
            (when v
              (into [k] (vec v))))))

(defn scopes->id-xs
  [id->pos ids scopes]
  (loop [[head & tail] (scopes->id-xs* id->pos ids scopes)
         id->xs {}
         in-scope #{}]
    (let [[_ payload] head]
      (cond (nil? head) (scopes->id-xs** id->xs)
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

#_(defn avg-list
  [args]
  (let [c (count args)]
    (when (> c 0)
      (/ (apply + args)
         c))))

(defn apply-scopes-to-lvl
  [id->pos ids scopes]
  (scopes->id-xs id->pos ids scopes))

(defn select-scopes-by-lvl
  [scopes lvl]
  (keep (fn [[lmn lmx & scope]]
          (when (<= lmn lvl lmx)
            scope))
        scopes))

(defn adjust-lvl-scopes
  [{:keys [lvl->id id->pos] :as mm} other-scopes lvl]
  (let [ids (lvl->id lvl)]
    (apply-scopes-to-lvl id->pos
                         ids
                         (concat (select-scopes-by-lvl other-scopes
                                                       lvl)
                                 (mapcat (partial mk-scopes-for-node mm
                                                  id->pos)
                                         ids)))))


#_(defn calc-forces-scopes
  [{:keys [id->pos id->lvl lvl->id grp->ids] :as mm}]
  (let [clvl (apply max (keys lvl->id))
        grp-scopes [] #_  (mk-grp-scopes id->lvl id->pos grp->ids)]
    (reduce (partial adjust-lvl-scopes mm grp-scopes)
            id->pos
            (range 0 clvl))))

(defn calc-forces-scopes
  [{:keys [id->pos id->lvl lvl->id grp->ids] :as mm}]
  (let [clvl (apply max (keys lvl->id))
        grp-scopes [] #_  (mk-grp-scopes id->lvl id->pos grp->ids)]
    (mapcat (partial adjust-lvl-scopes mm grp-scopes)
            (range 0 clvl))))

(defn wacky-alpha
  [alpha]
  1.
  #_
  (if (< 0.3 alpha 0.5)
    0.01
    1.))


(defn calc-fp-repel
  [mm global-stuff alpha id->pos id lvl-ids]
  (let [alpha' (wacky-alpha alpha)]
    (remove nil?
            (for [id2 lvl-ids]
              (let [pos2 (id->pos id2)]
                (when-not (= id id2)
                  [[(- pos2 0.5)
                    (+ pos2 0.5)]
                   (* 100. alpha')
                   (format "calc-fp-repel id2 %s| pos2 %s"
                           id2 pos2)]))))))


(defn calc-fp-groups
  [mm {:keys [grp-ranges]} alpha id->pos id lvl-ids]
  #_  (when (not-empty grp-ranges)
        (def grp-ranges1 grp-ranges))
  (let [alpha' (wacky-alpha alpha)]
    (apply concat
           (for [{:keys [grp x-mn x-mx spread]} grp-ranges]
             (cond (not (or (.startsWith id grp)
                            (.startsWith id "__")
                            (.startsWith id "Const")))
                   [[[(- x-mn 1.0)
                      (+ x-mx  1.0)]
                     (* 30. alpha')
                     (format "calc-fp-groups grp %s| x-mn %s| x-mx %s"
                             grp x-mn x-mx)]
                    [(mean x-mn x-mx)
                     (* 30. alpha')
                     (format "calc-fp-groups grp %s| x-mn %s| x-mx %s"
                             grp x-mn x-mx)]]
                   (.startsWith id grp)
                   [[(mean x-mn x-mx)
                     -3.
                     (format "calc-fp-groups grp %s| x-mn %s| x-mx %s"
                             grp x-mn x-mx)]])))))

(defn calc-force-points
  [mm global-stuff alpha lvl-ids id->pos id]
  (mapcat #(% mm global-stuff alpha id->pos id lvl-ids)
          [calc-forces-avg-neighbor
           calc-fp-repel
           calc-fp-groups]))

(defn find-attractive-center
  [fps]
  (let [attractors (filter #(-> % second (< 0.))
                           fps)]
    (when (not-empty attractors)
      (let [w-factor (->> attractors
                          (map second)
                          (apply +))]
        (/ (->> attractors             
                (map (fn [[x w]]
                       (* x w)))
                (apply +))
           w-factor)))))

(defn polarity
  [n rando]
  (cond (zero? n)
        (-> rando
            (mod 2)
            (- 0.5)
            (polarity nil))
        (> n 0.) 1.
        :else -1.))

(defn apply-force-points***
  [fps x [pos frc]]
  (if (number? pos)
    (let [d (- x pos)
          pol (polarity d fps)]
      (if (> frc 0.)
        (/ frc
           pol
           (max 1.
                (* d d)))
        (* d frc)))
    (let [[left right] pos
          mid (mean left right)]
      (cond (< left x mid)
            (* -1. frc (- x left))
            (< mid x right)
            (* frc (- right x))
            :else 0.))))

(defn apply-force-points**
  [fps x alpha]
  (let [frc (apply + (map (partial apply-force-points***
                                   fps x)
                          fps))]
    (+ (* x (- 1 alpha))
       (* frc alpha))))

(defn apply-force-points*
  [fps x]
  (let [init 20]
    (loop [n init
           x' x]
      (if (> n 0)
        (recur (dec n)
               (apply-force-points** fps x' (/ n init 10.)))
        x'))))

(defn apply-force-points
  [fps alpha id->pos id]
  (assoc id->pos id
         #_(apply-force-points* fps (id->pos id))
         (->> fps
                find-attractive-center
                (apply-force-points* fps))))

(defn apply-force-points***2
  [hsh x [pos frc]]
  (Math/abs
   (if (number? pos)
     (let [d (- x pos)]
       (if (> frc 0.)
         (/ frc
            (max (Math/abs d) 0.01)
            #_(max 1.
                 (* d d)))
         (* d d d frc)))
     (let [[left right] pos
           mid (mean left right)]
       (cond (<= left x mid)
             frc
             (<= mid x right)
             frc
             :else 0.)))))

(defn apply-force-points**2
  [fps x]
  [x (->> fps
          (map (partial apply-force-points***2 (hash fps) x))
          (apply +)
          Math/abs)])

(defn find-force-range
  [alpha fps x1 x2]
  (let [xs (->> fps
                (filter #(-> % first number?))
                (map first)
                (into [x1 x2]))
        mn (Math/floor (apply min xs))
        mx (Math/ceil (apply max xs))
        width (max 2. (- mx mn))]
    (range (- mn width)
           (+ mx width 0.1)
           (cond (> alpha 0.9) 1.
                 (> alpha 0.5) 0.5
                 :else 0.25))))

(defn apply-force-points*2
  [alpha fps x1 x2]
  (let [r (find-force-range alpha fps x1 x2)]
    (->> r
         (map (partial apply-force-points**2 fps))
         (sort-by second)
         first
         first)))

(defn update-with-alpha
  [x1 x2 alpha]
  (+ (* x1 (- 1. alpha))
     (* x2 alpha)))

(defn apply-force-points2
  [fps alpha id->pos id]
#_  (println id)
  (let [new-x (->> fps
                   find-attractive-center
                   (apply-force-points*2 alpha fps (id->pos id)))]
    (update id->pos id update-with-alpha new-x 1.0 #_alpha)))

(defn mk-grp-range
  [{:keys [id->lvl id->pos] :as mm} grp]
  (let [lvls (keep (fn [[id v]]
                     (when (.startsWith id grp)
                       v))
                   id->lvl)
        xs (keep (fn [[id v]]
                   (when (.startsWith id grp)
                     v))
                 id->pos)
        x-mn (apply min xs)
        x-mx (apply max xs)]
    {:grp grp
     :lvl-mn (apply min lvls)
     :lvl-mx (apply max lvls)
     :x-mn x-mn
     :x-mx x-mx
     :spread (- x-mx x-mn)}))

(defn mk-grp-ranges
  [{:keys [grps] :as mm}]
  (map (partial mk-grp-range mm)
       grps))

(defn mk-global-stuff
  [mm]
  {:grp-ranges (mk-grp-ranges mm)})

(defn filter-global-stuff-by-lvl
  [global-stuff lvl]
  (update global-stuff
          :grp-ranges
          (fn [grp-ranges]
            (filter (fn [{:keys [lvl-mx lvl-mn]}]
                      (<= lvl-mn lvl lvl-mx))
                    grp-ranges))))

(defn do-iter-lvl-node
  [mm global-stuff alpha lvl-ids id->pos id]
  (-> (calc-force-points mm global-stuff alpha lvl-ids id->pos id)
      (apply-force-points2 alpha id->pos id)))

(defn xxx
  [ids]
  ids
#_  (when ids
    (->> ids
         shuffle
         (take 1))))

(defn do-iter-lvl
  [{:keys [lvl->id] :as mm} global-stuff alpha id->pos lvl]
  (let [lvl-stuff (filter-global-stuff-by-lvl global-stuff lvl)]
    (reduce (partial do-iter-lvl-node mm lvl-stuff alpha (lvl->id lvl))
            id->pos
            (xxx (lvl->id lvl)))))

(defn do-iter
  [{:keys [id->pos lvl->id] :as mm} alpha]
  (let [mx-lvl (->> lvl->id keys (apply max))
        global-stuff (mk-global-stuff mm)]
    (assoc mm
           :id->pos
           (reduce (partial do-iter-lvl mm global-stuff alpha)
                   id->pos
                   (xxx
                    (concat (range 0 mx-lvl)
                            (range mx-lvl 0 -1)))))))

(defn do-iters
  [mm n & [alpha-i alpha-n]]
  (loop [i n
         mm' mm]
    (if (> i 0)
      (recur (dec i)
             (-> mm'
                 adjust-temperature
                 (do-iter (double (/ (or alpha-i i)
                                     (or alpha-n n))))))
      mm')))

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


(defn ->cyto2
  [& args])


(defn mk-id->xy
  [id->lvl id->pos]
  (into {}
        (for [id (keys id->lvl)]
          (let [lvl (id->lvl id)
                pos (id->pos id)]
            (when (and lvl pos)
              [id [(int (* 300 pos))
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
      (->cyto2 (do-iters mm 1)))))

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
          :elements (select-keys (do-layout nodes2 4)
                                 [:nodes :edges])}])

#_aaaaaaaaaaaaaaaaaaaa

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
          :elements (select-keys (do-layout2 nodes2 3)
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
                                              5)
                                   [:nodes :edges])}])

#_ ffffffffff

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
                                               5)
                                   [:nodes :edges])}])
