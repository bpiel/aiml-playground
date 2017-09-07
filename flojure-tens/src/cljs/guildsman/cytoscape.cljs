(ns guildsman.cytoscape
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [re-com.core :as rc]))

(defn cyto-state->cyto-gen-map
  [state value #_{:keys [config elements]}]
  (println "cyto-state->cyto-gen-map")
  (println value)
  (clj->js (merge value
                  {:container (.getElementById js/document 
                                               (:id @state))})))

(defn cyto-comp-did-mount
  [state value this]
  (vreset! state
           (assoc value
                  :instance
                  (js/cytoscape (cyto-state->cyto-gen-map state value)))))

(defn cyto-reagent-render
  [state value]
  (let [{:keys [id]} @state]
    (println "cyto-reagent-render")
    (println id)
    [:div {:id id :style {:width "100%" :height "100%"}}]))

(defn cyto-comp-will-update
  [state this [_ new-value]]
  (vreset! state
           (assoc new-value
                  :instance
                  (:instance @state))))

(defn cyto-comp-did-update
  [state this [_ {:keys [config data highlighted selected] :as old-val}]]
  (let [{:keys [instance] :as state'} @state]
    (cond (not= config (:config state'))
          (do (println "generate")
              (vswap! state
                      assoc
                      :instance
                       (js/cytoscape (cyto-state->cyto-gen-map state state'))))
          #_ ((not= data (:data state'))
              (do (println "load")
                  (.load instance (clj->js (merge (:data state') {:unload true}))))

              (not= [highlighted selected] [(:highlighted state')
                                            (:selected state')])
              (do ;(println "flush")
                (.flush instance))))))


(defn cytoscape
  [value]
  (println "cyto/cyto")
  (let [state (volatile! {:id (str (gensym "cyto"))})]
    (r/create-class {:component-did-mount (partial cyto-comp-did-mount state value)
                     :component-did-update (partial cyto-comp-did-update state)
                     :component-will-update (partial cyto-comp-will-update state)
                     :reagent-render (partial cyto-reagent-render state)})))








