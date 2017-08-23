(ns flojure-tens.grad-desc-opt2
  (:require [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.macros :as mc]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.data-type :as dt]
            [flojure-tens.plan-time-comps :as pt])
  (:import [flojure_tens.common Graph]))


(defn input-depth-traveller
  [visit-fn x]
  (let [{:keys [node] :as x'} (visit-fn x)
        {:keys [state] :as x''} (assoc-in x'
                                          [:state :id->node (:id node)]
                                          node)
        {:keys [id->node]} state]
    (loop [[head & tail] (map id->node
                              (:inputs node))
           x-iter x'']
      (if head
        (recur tail
               (->> head
                    (assoc x-iter :node)
                    (input-depth-traveller visit-fn)))
        x-iter))))

(defn get-traveller
  [state start-id init]
  (let [{:keys [id->node]} state]
    (merge init
           {:state state
            :node (id->node start-id)})))

(defn find-vari-paths*
  [{:keys [node] :as x}]
  (let [x' (update x
                   :node
                   assoc
                   ::tagged?
                   true)]
    #_    (if (= (:op node) :VariableV2)
            (update x' :collector assoc (:id node) node)
            x')
    (if (re-find #"read" (:id node)) ;; HACK!!!!!!!!!!!!!!!!!!!!!!!!!!
      (update x' :collector assoc (:id node) node)
      x')))

(defn find-vari-paths
  [state target]
  (input-depth-traveller find-vari-paths*
                         (-> (get-traveller state
                                            (:id target)
                                            {:collector {}})
                             (update :node assoc
                                     ::target-idx (:output-idx target 0)
                                     ::tagged? true))))


(defn find-trainables
  [^Graph g input]
  (-> (find-vari-paths (-> g :state deref)
                       input)
      :collector
      vals
      vec))

(defn mk-applicator
  [^Graph g grads idx trainable]
  (o/apply-gradient-descent ((-> g :state deref :id->node)
                             (-> trainable :inputs first))
                            0.01
                            (assoc grads
                                   :output-idx                                   
                                   idx)))

(defn mk-applicators
  [^Graph g  y-op trainables]
  (let [grads {:macro :gradients
               :inputs [y-op
                        (o/ones-like y-op)
                        trainables]}]
    (mapv (partial mk-applicator g grads)
          (range (count trainables))
          trainables)))

(defmethod mc/build-macro :grad-desc-opt2
  [^Graph g plan]
  (let [{:keys [id inputs scope]} plan
        [input] inputs]
    [(sc/with-push-both-scopes scope
       (o/no-op id
                {:ctrl-inputs
                 (mk-applicators
                  g
                  input
                  (find-trainables g input))}))]))
