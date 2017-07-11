(ns flojure-tens.composite
  (:require [flojure-tens.ops :as o]
            [flojure-tens.macros :as mcro]
            [flojure-tens.ops :as ops]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as util]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph]))


(defn safe-shape-div
  [x y]
  (o/floor-div x (o/maximum y 1)))

(defn to-int32
  [x & [name]]
  (o/cast-tf (or name "ToInt32")
             {:DstT :int32}
             x))

(defn reduction-dims
  [x axis]
  (or axis
      (o/range-tf 0 (o/rank x) 1)))

(defn reduced-shape
  [input-shape axes]
  (let [input-shape' (to-int32 input-shape)
        axes' (to-int32 axes)
        input-rank (o/size input-shape')
        axes'' (o/mod-tf (o/add axes' input-rank)
                         input-rank)
        axes-shape (o/shape axes'')]
    (o/dynamic-stitch [(o/range-tf (int 0)
                                   input-rank
                                   (int 1))
                       axes'']
                      [input-shape' (o/fill axes-shape (int 1))])))

(defn reduce-prod
  [input-tensor & {:keys [axis keep-dims id]}]
  (o/prod id
          {:keep_dims (true? keep-dims)}
          input-tensor
          (reduction-dims input-tensor axis)))

;; https://github.com/tensorflow/tensorflow/blob/3a64879a86e46908ad90a387efe56ad32be61e94/tensorflow/python/ops/math_ops.py#L1224
(defn reduce-sum
  [input-tensor & {:keys [axis keep-dims id]}]
  (o/sum id
         {:keep_dims (true? keep-dims)}
         input-tensor
         (reduction-dims input-tensor axis)))

(defn broadcast-mul
  [v mx]
  (o/mul (o/expand-dims v (int -1))
         mx))



;; GRADIENT DESCENT =====================

(defn grad-desc-opt
  [id target & [scope]]
  (sc/with-id-scopes (if scope [scope] [])
    (sc/assoc-id-scope
     {:macro :grad-desc-opt
      :id id
      :inputs [target]})))

(defn gradient
  [id y dxs output-idx]
  (sc/assoc-id-scope
   {:macro :grad
    :id id
    :output-idx output-idx
    :inputs [y dxs]}))

(defn- merge-plan->consumers
  [& ms]
  {:vars (vec (apply concat (mapv :vars ms)))
   :plan->consumers (apply merge-with
                           (partial merge-with into)
                           (mapv :plan->consumers ms))})

(defn- mk-plan->consumers*
  [consumer input-idx {:keys [output-idx op inputs] :as plan}]
  (if (map? plan)
    (apply merge-plan->consumers
           {:vars (if (= :VariableV2 op)
                    [plan]
                    [])
            :plan->consumers {(dissoc plan :output-idx)
                              {(or output-idx 0)
                               [[consumer input-idx]]}}}
           (map-indexed (partial mk-plan->consumers* plan)
                        inputs))
    {}))

(defn- mk-plan->consumers
  [plan]
  (apply merge-plan->consumers
         (map-indexed (partial mk-plan->consumers*
                               {:target? true})
                      (:inputs plan))))

(declare mk-grad-graph-plan*)

(defn- mk-grad-graph-plan***
  [{:keys [op] :as consumer} p->c cache]
  (let [out-count (-> op ogc/op-list-by-kw :output-arg count)]
    (->> (range out-count)
         (map #(assoc consumer :output-idx %))
         (reduce (partial mk-grad-graph-plan*
                          p->c)
                 {:cache cache :graph []})
         :graph)))

(defn- mk-grad-graph-plan**
  [plan pairs p->c cache]
  (if (>= 1 (count pairs))
    (let [[[consumer input-idx]] pairs]
      (cond
        (:target? consumer) (o/ones-like plan)
        (nil? consumer) (o/zeros-like plan)
        :else (gradient nil
                        consumer
                        (mk-grad-graph-plan*** consumer
                                               p->c
                                               cache)
                        input-idx)))
    (o/add-n (mapv (fn [p]
                       (mk-grad-graph-plan** plan [p] p->c cache))
                     pairs))))

(defn- mk-grad-graph-plan*
  [p->c {:keys [cache graph] :as agg} {:keys [output-idx] :as plan}]
  (if-let [cached (cache plan)]
    (update agg :graph conj cached)
    (let [output-idx' (or output-idx 0)
          output-idx->consumer (-> plan
                                   (dissoc :output-idx)
                                   p->c)
          g (mk-grad-graph-plan** plan
                                  (output-idx->consumer output-idx')
                                  p->c
                                  cache)] 
      {:cache (assoc cache plan g)
       :graph (conj graph g)})))

(defn- mk-grad-graph-plan
  [plan->consumers alpha]
  (let [vs (:vars plan->consumers)]
    (->> vs
         (reduce (partial mk-grad-graph-plan*
                          (:plan->consumers plan->consumers))
                 {:cache {} :graph []})
         :graph
         (mapv #(o/apply-gradient-descent %
                                          alpha
                                          %2)
               vs))))


(declare decorate-outputs)

(defn- outputs->grad*
  [{:keys [state]} {:keys [id input-idx]}]
  (when-let [grad (::grad ((:id->node state) id))]
    (assoc grad
           :output-idx input-idx)))

(defn- outputs->grad
  [x consumers output-idx node]
  (cond (= (::target-idx node) output-idx)
        (o/ones-like node)
        :else
        (let [grads (keep (partial outputs->grad*
                                   x)
                          consumers)]
          (cond (= (count grads) 1)
                (first grads)

                (= (count grads) 0)
                (o/zeros-like node)

                :else
                (o/add-n (vec grads))))))

(defn- outputs->grads
  [x outputs node]
  (mapv #(outputs->grad x
                        ((or outputs {}) %)
                        %
                        node)
        (range (:n-outputs node))))

(defn- mk-node-grad
  [x node]
  (let [{:keys [id->outputs]} (:state x)
        outputs (id->outputs (:id node))
        x' (if outputs
             (decorate-outputs x (dissoc outputs
                                         (::target-idx node)))
             x)]
    [x' (gradient nil
                  node
                  (outputs->grads x' outputs node)
                  0)]))

(defn- decorate-w-grad
  [x node]
  (cond (::grad node) x
        
        (::tagged? node)
        (let [[x' grad] (mk-node-grad x node)]
          (assoc-in x'  [:state :id->node (:id node)]
                 (assoc node
                        ::grad
                        grad)))

        :else x))

(defn- decorate-w-grads
  [x nodes]
  (reduce decorate-w-grad
          x
          nodes))

(defn- decorate-outputs
  [x outputs]
  (let [{:keys [id->node]} (:state x)]
    (->> (for [[k v] outputs
               {:keys [id]} v]
           (id->node id))
         (decorate-w-grads x))))

(defn- mk-applicators*
  [{:keys [node state] :as x}]
  (let [{:keys [n-outputs]} node
        {:keys [id->node id->outputs]} state
        outputs (id->outputs (:id node))
        x' (decorate-outputs x outputs)]
    (update x' :collector conj 
            (o/apply-gradient-descent node
                                      0.5
                                      (first (outputs->grads x' outputs node))))))

(defn- mk-applicators
  [{:keys [collector] :as x}]
  (let [x' (assoc x :collector [])]
    (loop [[head & tail] collector
           x-iter x']
      (if head
        (let [x-iter' (assoc x-iter
                             :node
                             head)]
          (recur tail (mk-applicators* x-iter')))
        (:collector x-iter)))))

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
    (if (= (:op node) :VariableV2)
      (update x' :collector conj node)
      x')))

(defn find-vari-paths
  [state target]
  (input-depth-traveller find-vari-paths*
                         (-> (get-traveller state
                                            (:id target)
                                            {:collector #{}})
                             (update :node assoc
                                     ::target-idx (:output-idx target 0)
                                     ::tagged? true))))


(defmethod mcro/build-macro :grad-desc-opt
  [^Graph g plan]
  (let [{:keys [id inputs scope]} plan
        [input] inputs
        [v-a v-b] (:inputs input)]
    [(sc/with-id-scopes scope
       (o/no-op id
                {:ctrl-inputs
                 (mk-applicators 
                  (find-vari-paths (-> g :state deref)
                                   (-> plan :inputs first)))}))]))




;; END - GRADIENT DESCENT ===============


(defn v
  "MACRO Variable"
  ([id init] (v id {} init))
  ([id attr init]
   (sc/assoc-id-scope
    {:macro :variable
     :id id
     :inputs [init]
     :attrs {}})))

(defn mk-variable-attrs
  [value-op]
  (let [{:keys [output-idx shapes dtypes]} value-op]
    {:dtype (-> (nth dtypes (or output-idx 0))
                dt/kw->dt
                :native)
     :shape (nth shapes (or output-idx 0))}))

(defmethod mcro/build-macro :variable
  [^Graph g {:keys [id scope attrs inputs]}]
  (sc/with-id-scopes (conj scope id)
    (let [[init] inputs
          vari (o/v :variable (merge (mk-variable-attrs init)
                                     attrs))]
      [(o/identity-tf :read {} vari)
       (-> (o/assign :init {} vari init)
           (util/append-collections [:global-var-inits])
           util/build-eagerly)
       vari])))

;; https://github.com/tensorflow/tensorflow/blob/c996c7b381a8eb54f9c7d7b298b24b1715645b68/tensorflow/python/ops/array_ops.py#L1353
(defn zeros
  [shape dtype]
  (let [z (case dtype
            dt/bool-kw false
            dt/string-kw ""
            0)]
    (o/fill (o/c shape dt/int-kw) ;; TODO what if `shape` isn't a constant? 
            (o/c z dtype)))) ;; TODO infer type?

;; TODO auto-cast-inputs-fn ???


;; https://github.com/tensorflow/tensorflow/blob/c996c7b381a8eb54f9c7d7b298b24b1715645b68/tensorflow/python/ops/random_ops.py#L138
(defn truncated-normal
  [shape]
  (o/truncated-normal nil
                      {:seed (rand-int Integer/MAX_VALUE)
                       :seed2 (rand-int Integer/MAX_VALUE)
                       :dtype dt/double-kw}
                      (o/c shape dt/int-kw)))
