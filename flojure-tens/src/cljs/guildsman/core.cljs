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

(rf/reg-sub
 :left
 (fn [db _]
   (:left db)))

(rf/reg-sub
 :right
  (fn [db _]
    (:right db)))

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
   'histos #'hs/histogram-series
   'graph #'cy/cytoscape
   'v-box rc/v-box
   'h-box rc/h-box})

(defn mk-renderable
  [v]
  (clojure.walk/prewalk-replace components v))

(defn dispatch-ws-msg
  [msg]
  (r/render (mk-renderable msg)
            (.getElementById js/document "app")))

(rf/reg-event-db
 :ws-inbound
 (fn [db [_ {:keys [left right] :as p}]]
   (println p)
   (merge db
          (when left
            {:left (mk-renderable left)})
          (when right
            {:right (mk-renderable right)}))))

(defn ws-onmessage
  [data]
  (println (.-data data))
  (let [d (t/read json-reader (.-data data))]
    #_    (println d)
    (rf/dispatch [:ws-inbound d])))

(rf/reg-event-db
 :ws-init
 (fn [db _]
   (if-let [ws (js/WebSocket. (str "ws://" (.-host js/location) "/ws"))]
     (do
       (println "ws init'd!")
       (set! (.-onmessage ws) ws-onmessage)
       (reset! ws-conn ws))
     (throw (js/Error. "Websocket connection failed!")))
   db))

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
;  :on-jsload mount-components
  )


#_(devtools/install!)

#_(init!)


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

(rf/reg-event-db
  :init-db
  (fn [db _]
    {:left [:div "loaded"]
     :right [:div]}))

(defn page []
  (let [left @(rf/subscribe [:left])
        right @(rf/subscribe [:right])]
    [rc/h-box :children
     [left
      right]]))

(defn init! []
  (rf/dispatch-sync [:init-db])
  (rf/dispatch-sync [:ws-init])
  (r/render [#'page]
            (.getElementById js/document "app")))

(init!)
#_
(r/render [cy/cytoscape {:layout {:name "dagre"}
                         :elements [{:data {:id "a"}}]}]
          (.getElementById js/document "app"))

