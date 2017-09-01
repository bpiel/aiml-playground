(ns guildsman.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [devtools.core :as devtools]
            [figwheel.client :as figwheel :include-macros true])
  (:import goog.History))

(enable-console-print!)

(println "start loading")

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
;  :on-jsload mount-components
  )

#_(devtools/install!)

#_(init!)

;; === app END

(println "done loading.")

