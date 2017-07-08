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

(defmethod mcro/build-macro :grad-desc-opt
  [^Graph g plan]
  (let [{:keys [id inputs scope]} plan
        [input] inputs
        [v-a v-b] (:inputs input)]
    [(sc/with-id-scopes scope
        (o/no-op id
                 {:ctrl-inputs
                  (mk-grad-graph-plan (mk-plan->consumers plan)
                                      0.5)}))]))




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
