(ns flojure-tens.dev
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
                   :target "d"}}]})

(defn cyto->nn
  [cyto]
  #_  {"a" {:pos [0. 0.]
            :spreads [1. 1.] ;; ins outs
            :outs [{:node "b" :data nil}]
            :ins []}
       "b" {:pos [0. 0.]
            :spreads [1. 1.] ;; ins outs
            :outs []
            :ins [{:node "a" :data nil}]}}
  (reduce (fn [agg [path v]]
            (update-in agg
                       path
                       conj
                       v))
          (into {}
                (map (fn [node]
                       (let [id (-> node :data :id)]
                         [id {:pos [(Math/random)
                                    (Math/random)]
                              :spreads [1. 1.]
                              :outs []
                              :ins []}]))
                     (:nodes cyto)))
          (mapcat (fn [edge]
                    (let [{:keys [source target]} (:data edge)]
                      [[[source :outs] {:node target}]
                       [[target :ins] {:node source}]]))
                  (:edges cyto))))

(defn edge->pos
  [nn {:keys [node]}]
  (-> node nn :pos))

(defn edges->pos
  [nn edges]
  (map (partial edge->pos nn)
       edges))

(defn avg-edges
  [nn edges f]
  (let [c (count edges)]
    (->> edges
         (edges->pos nn)
         (map f)
         (map #(/ % c))
         (apply +))))

(defn level-ys
  [nn edges]
  (let [y-avg (avg-edges nn edges second)]
    (into {}
          (for [k (map :node edges)]
            [k [nil y-avg]]))))

(defn center-y
  [nn id edges]
  {id [nil (avg-edges nn edges second)]})

(defn spread-xs
  [nn [x y] edges spread]
  (when (< 1 (count edges))
    (let [[left :as sorted] (sort-by :x
                                     (map (fn [{:keys [node]}]
                                            (let [a (nn node)]
                                              {:node node
                                               :x (-> a :pos first)}))
                                          edges))
          right (last sorted)
          xleft (:x left)
          xright (:x right)
          mean x]
      (into {}
            (map (fn [{:keys [node]} x]
                   {node [x nil]})
                 sorted
                 (range (- mean 0.5)
                        (+ mean 0.51)
                        (/ 1.0 (dec (count edges)))))))))


(defn center-x
  [nn id edges]
  {id [(avg-edges nn edges first) nil]})

(defn y-dists
  [nn [x y] edges lo hi]
  (map (fn [node]
         {node [nil
                (let [y' (-> node nn :pos second)
                      d (- y' y)]
                  (cond (<= lo d hi) nil
                        (> d hi) (+ y hi)
                        (< d lo) (+ y lo)))]})
       (map :node edges)))

(defn dummy
  [k]
  {k [0 0]})

(defn calc-update
  [nn k]
  (let [{:keys [pos outs ins spreads]} (get nn k)]
    (flatten
     [(level-ys nn outs)
      (level-ys nn ins)
      (center-y nn k (concat outs ins))
      (spread-xs nn pos ins (first spreads))
      (spread-xs nn pos outs (second spreads))
      (center-x nn k (concat outs ins))
      (y-dists nn pos ins 1. 2.)
      (y-dists nn pos outs -2. -1.)])))

(defn randomish-edge
  [nn]
  (let [id (->> nn keys shuffle first)]
    [id
     (->> id nn ((juxt :outs :ins)) (apply concat) shuffle first :node)]))


(defn inside-box?
  [x1 y1 x2 y2 xp yp]
  (and (or (< x1 xp x2)
           (> x1 xp x2))
       (or (< y1 yp y2)
           (> y1 yp y2))))

(defn intersection-point
  [x1 y1 x2 y2 x3 y3 x4 y4]
  (let [denom (- (* (- x2 x1)
                    (- y4 y3))
                 (* (- x4 x3)
                    (- y2 y1)))]
    (when (-> denom zero? not)
      [(/ (- (* (- (* x2 y1)
                   (* x1 y2))
                (- x4 x3))
             (* (- (* x4 y3)
                   (* x3 y4))
                (- x2 x1)))
          denom)
       (/ (- (* (- (* x2 y1)
                   (* x1 y2))
                (- y4 y3))
             (* (- (* x4 y3)
                   (* x3 y4))
                (- y2 y1)))
          denom)])))

(defn segments-intersect?
  [x1 y1 x2 y2 x3 y3 x4 y4]
  (let [[xi yi] (intersection-point x1 y1 x2 y2 x3 y3 x4 y4)]
    (when (and xi yi)
      (and (inside-box? x1 y1 x2 y2 xi yi)
          (inside-box? x3 y3 x4 y4 xi yi)))))

(defn node->pos
  [nn node]
  (-> node nn :pos))

(defn nn-decorator
  [nn node]
  (-> node
      nn
      (assoc :id node)))

(defn uncross
  [nn a1 a2 b1 b2]
  (let [lower-two (drop 2
                        (sort-by #(-> % :pos second)
                                 (map (partial nn-decorator nn)
                                      [a1 a2 b1 b2])))
        new-x (/ (apply + (map #(-> % :pos first)
                               lower-two))
                 2.0)]
    (println "UNCROSSING!")
    [{(-> lower-two first :id) [new-x nil]}
     {(-> lower-two second :id) [new-x nil]}]))

(defn find-closest-outs*
  [nn aa]
  (distinct  
   (mapcat #(->> % nn :outs (map :node))
           aa)))

(defn find-closest-outs
  [nn aa n]
  (loop [i (dec n)
         outs (find-closest-outs* aa)]
    (if (> i 0)
      (recur (dec i)
             (into outs
                   (find-closest-outs* outs)))
      outs)))

(defn find-common-outs
  [nodes]
  (let [c (count nodes)]
    (loop [i 0]
))
  )

(defn edge-updates [nn]
  (let [[a1 a2] (randomish-edge nn)
        [b1 b2] (randomish-edge nn)]
    (try 
      (when (apply segments-intersect? (concat (node->pos nn a1)
                                               (node->pos nn a2)
                                               (node->pos nn b1)
                                               (node->pos nn b2)))
        (uncross nn a1 a2 b1 b2))
      (catch Exception e
        (edge-updates nn)))))




(defn calc-updates
  [nn]
  #_{"a" [[0 1] [1 -2]]
     "b" [[4 5]]}
  (concat (mapcat (partial calc-update nn)
                  (keys nn))
          (mapcat (fn [_] (edge-updates nn))
                  (range 100))))

(defn avg-tuple-row
  [f tuples]
  (when-let [a (not-empty (keep f tuples))]
    (let [c (float (count a))]
      (apply + (map #(/ % c) a)))))

(defn sum-tuple-row
  [f tuples]
  (when-let [a (not-empty (keep f tuples))]
    (apply + a)))

(defn combine-tuples [pos spreads tuples]
  [(or (avg-tuple-row first tuples)
       (first pos))
   (or (avg-tuple-row second tuples)
       (second pos))
   (or (sum-tuple-row #(nth % 2 nil) tuples)
       0.)
   (or (sum-tuple-row #(nth % 3 nil) tuples)
       0.)])

(defn double-wrap-all
  [ms]
  (map (fn [m]
         (into {}
               (for [[k v] m]
                 [k [v]])))
       ms))

(defn merge-updates
  [u nn]
  (let [u' (apply merge-with into (double-wrap-all u))]
    (into {}
          (for [[k v] u']
            (let [{:keys [pos spreads]} (nn k)]
              [k (combine-tuples pos spreads v)])))))

(defn adjust
  [orig new-val alpha]
  (let [w alpha]
    (+ (* new-val w)
       (* orig (- 1 w)))))

(defn apply-update
  [[dx dy dsi dso] v alpha]
  (-> v
      (update-in [:pos 0] adjust dx alpha)
      (update-in [:pos 1] adjust dy alpha)
      (update-in [:spreads 0] + dsi)
      (update-in [:spreads 1] + dso)))

(defn apply-updates [u nn alpha]
  (into {}
        (for [[k v] nn]
          (if-let [unode (u k)]
            [k (apply-update unode v alpha)]
            [k v]))))

(defn ->cyto*
  [nn node]
  (let [id (-> node :data :id)
        {[x y] :pos} (nn id)]
    (assoc node
           :position
           {:x (* 750 x)
            :y (* 750 y)})))

(defn ->cyto [nn cyto]
  (update cyto :nodes
          (partial mapv
                   (partial ->cyto* nn))))

(defn do-billy
  [cyto]
  (let [nn (cyto->nn cyto)]
    (-> nn
        calc-updates
        (merge-updates nn)
        (apply-updates nn 0.2)
        (->cyto cyto))))

(defn do-billy-rep
  [cyto n]
  (let [nn (cyto->nn cyto)]
    (loop [nn' nn
           i n]
      (if (< 0 i)
        (recur (-> nn'
                   calc-updates
                   (merge-updates nn')
                   (apply-updates nn' (if (>= 0.9 (/ i
                                                     (double n)))
                                        1.
                                        0.2)))
               (dec i))
        (->cyto nn' cyto)))))

#_(clojure.pprint/pprint  (do-billy nil))

(defn bill1
  []
  (do-billy-rep nodes1 10))

(clojure.pprint/pprint  (bill1))

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
            :elements (select-keys (do-billy-rep (select-keys (w-mk-graph-def2)
                                                              [:nodes :edges])
                                                 100)
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








