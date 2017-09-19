(ns guildsman.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [re-com.core :as rc]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [devtools.core :as devtools]
            [figwheel.client :as figwheel :include-macros true]
            [cognitect.transit :as t]
            cljsjs.d3
            [guildsman.histogram-series :as hs]
            [guildsman.cytoscape :as cy])
  (:import goog.History))

(enable-console-print!)

(println "start loading")

(def ws-conn (atom nil))
(def json-writer (t/writer :json))
(def json-reader (t/reader :json))


#_(defn chart
  [m]
  (println "chart")
  (println m)
  (.generate js/c3
             (clj->js {:data {:columns [['data', 1, 3, 7, 2]]}})))


(defn init-cyto
  [m]
  (js/cytoscape (clj->js {:container (.getElementById js/document "app")
                          :layout {:name "dagre"}
                          :style [{:selector "node"
                                   :style {:content "data(name)"}}
                                  {:selector "edge"
                                   :style {"curve-style" "unbundled-bezier"
                                           :control-point-distances [20]
                                           :control-point-weights [0.75]}}]
                          :elements (select-keys m
                                                 [:nodes :edges])})))


(def components
  {;'$/chart #'ch/chart
   '$/graph #'cy/cytoscape
   '$/v-box rc/v-box
   '$/h-box rc/h-box})

(defn dispatch-ws-msg
  [{:keys [cmd] :as msg}]
  (r/render (clojure.walk/prewalk-replace components
                                          msg)
            (.getElementById js/document "app")))

(defn ws-onmessage
  [data]
  (println (.-data data))
  (let [d (t/read json-reader (.-data data))]
    (println d)
    (dispatch-ws-msg d)))

(defn init-ws
  []
  (if-let [ws (js/WebSocket. (str "ws://" (.-host js/location) "/ws"))]
   (do
     (set! (.-onmessage ws) ws-onmessage)
     (reset! ws-conn ws))
   (throw (js/Error. "Websocket connection failed!"))))

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
;  :on-jsload mount-components
  )

#_(devtools/install!)

#_(init!)
(init-ws)

;; === app END

(println "done loading.")

#_(r/render [ch/chart
           {:config
            {:transition {:duration 0}}
            :data
            {:columns [["data1" 1 4 2 5]]}
            :highlighted nil
            :selected nil}]
          (.getElementById js/document "app"))

(r/render [hs/histogram-series {:mode "offset"
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
                                                :dx 1.}]}]}]
          (.getElementById js/document "app"))

