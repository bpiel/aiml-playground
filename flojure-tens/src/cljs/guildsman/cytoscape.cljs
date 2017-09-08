(ns guildsman.cytoscape
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [re-com.core :as rc]))

(def c1 (volatile! nil))
(def a1 (atom nil))

(defn cyto-state->cyto-gen-map
  [{:keys [id value]}]
  (println "cyto-state->cyto-gen-map")
  (println id)
  (clj->js (merge value
                  {:container (.getElementById js/document 
                                               id)})))

(defn gen-cyto
  [state']
  (println "gen-cyto")
  (let [c (js/cytoscape (cyto-state->cyto-gen-map state'))]
    (vreset! c1 c)
    (println  "gen-cyto POST vreset")
    c))

(defn dist
  [x1 y1 x2 y2 xp yp]
  (let [dx (- x2 x1)
        dy (- y2 y1)]
    (-> (* dy xp)
        (- (* dx yp))
        (+ (* x2 y1))
        (- (* y2 x1))
        (/ (Math/sqrt (+ (* dy dy)
                         (* dx dx)))))))

(defn perp-coords
  [x1 y1 x2 y2 xp yp]
  (let [dx (- x2 x1)
        dy (- y2 y1)
        k (/ (- (* dy (- xp x1))
                (* dx (- yp y1)))
             (+ (* dy dy)
                (* dx dx)))
        x4 (- xp (* k dy))
        y4 (+ yp (* k dx))
        d (Math/sqrt (+ (* (- y2 y1)
                           (- y2 y1))
                        (* (- x2 x1)
                           (- x2 x1))))
        ypt (Math/sqrt (+ (* (- y4 y1)
                             (- y4 y1))
                          (* (- x4 x1)
                             (- x4 x1))))
        xpt (dist x1 y1 x2 y2 xp yp)]
    [xpt (/ ypt d)]))

(defn js->xy
  [xy]
  ((juxt #(get % "x")
         #(get % "y"))
   (js->clj xy)))

(defn node->xy
  [n]
  (-> (.position n)
      js->xy))

(defn find-nearbys
  [x1 y1 x2 y2]
  (map (fn [n]
         (let [[xp yp] (node->xy n)]
           (perp-coords x1 y1 x2 y2 xp yp)))
       (.toArray (.$ @c1 "node"))))

(def e1 (-> (.$ @c1 "edge[source = 'loss']")
            .first))

(defn near-edge?
  [[xp yp]]
  (and (< 0.03 yp .97)
       (< -50. xp 50.)))

(defn mk-ctrl-point
  [[x y]]
  [(if (<= x 0)
     (- -50 x)
     (- 50 x))
   y])

(defn mk-ctrl-styles
  [ps]
  [(clojure.string/join " " (map str (map first ps)))
   (clojure.string/join " " (map str (map second ps)))])

(defn route-edge
  [edge]
  (let [[sx sy] (js->xy (.sourceEndpoint edge))
        [dx dy] (js->xy (.targetEndpoint edge))
        [cpd cpw] (mk-ctrl-styles
                   (sort-by second
                            (map mk-ctrl-point
                                 (filter near-edge?
                                         (find-nearbys sx sy dx dy)))))]
    #_(println [cpd cpw])
    (-> edge
        (.style "curveStyle" "unbundled-bezier")
        (.style "controlPointDistances" cpd)
        (.style "controlPointWeights" cpw))))

(defn route-all-edges
  []
  #_(println "route-all-edges")
  (.map (.$ @c1 "edge")
        route-edge))

(route-all-edges)

(def in1 (.setInterval js/window
                       route-all-edges
                       1000))

(.clearInterval js/window in1)

(.map (.$ @c1 "edge[source = 'loss']")
      route-edge)

(route-edge e1)

(-> (.$ @c1 "node[")
    (.map node->xy)
    js->clj)

(.fit @c1)


(-> (.$ @c1 "edge[source = 'loss']")
    (.style "curveStyle" "unbundled-bezier")
    (.style "controlPointStepSize" "10")
    (.style "controlPointWeight" "0.5"))

#_(def e1
  (-> (.$ @c1 "edge[source = 'loss']")
      .first))

(vreset! c1
         (js/cytoscape (clj->js {:container (.getElementById js/document "cyto16")
                                 :elements {:nodes [{:data {:id "a"}}
                                                    {:data {:id "b"}}
                                                    {:data {:id "c"}}
                                                    {:data {:id "d"}}
                                                    {:data {:id "e"}}]
                                            :edges [{:data {:source "a"
                                                            :target "b"}}]}})))


(defn cyto-comp-did-mount
  [state this]
  (vswap! state assoc 
          :instance
          (gen-cyto @state)))

(defn cyto-reagent-render
  [state value]
  (let [{:keys [id]} @state]
    (println "cyto-reagent-render")
    (println id)
    [:div {:id id :style {:width "100%" :height "100%"}}]))

(defn cyto-comp-will-update
  [state this [_ new-value]]
  (vswap! state
          assoc :value new-value))

(defn cyto-comp-did-update
  [state this [_ {:keys [config data highlighted selected] :as old-val}]]
  (let [{:keys [value] :as state'} @state]
    (cond #_(not= config (:config state'))
          (not= value old-val)
          (do (println "generate")
              (vswap! state
                      assoc
                      :instance
                      (gen-cyto state')))
          #_ ((not= data (:data state'))
              (do (println "load")
                  (.load instance (clj->js (merge (:data state') {:unload true}))))

              (not= [highlighted selected] [(:highlighted state')
                                            (:selected state')])
              (do                       ;(println "flush")
                (.flush instance))))))


(defn cytoscape
  [value]
  (println "cyto/cyto")
  (let [state (volatile! {:id (str (gensym "cyto"))
                          :value value})]
    (r/create-class {:component-did-mount (partial cyto-comp-did-mount state)
                     :component-did-update (partial cyto-comp-did-update state)
                     :component-will-update (partial cyto-comp-will-update state)
                     :reagent-render (partial cyto-reagent-render state)})))

