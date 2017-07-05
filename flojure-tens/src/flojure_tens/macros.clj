(ns flojure-tens.macros
  (:require flojure-tens.common
            [flojure-tens.graph :as gr]
            [flojure-tens.ops2 :as ops]
            [flojure-tens.scope :as sc]
            [flojure-tens.op-build :as obld]
            [flojure-tens.op-node :as op-node]
            [flojure-tens.ops-gen-config :as ogc]
            [flojure-tens.gradients :as grad]
            [flojure-tens.shape :as sh]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.common Graph]))

(defmulti pre-build-macro (fn [^Graph g plan] (:macro plan)))
(defmulti build-macro (fn [^Graph g plan] (:macro plan)))

(defmethod pre-build-macro :default [_ plan] plan)
(defmethod build-macro :default [_ plan] plan)

(defn compute-hash
  [{:keys [id scope] :as plan}]
  (if id
    (hash [id scope])
    (-> plan
        (dissoc :output-idx)
        hash)))

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

;; use "OnesLike" / "ZerosLike" ???
(defn const-same-shape
  [id input value]
  (sc/assoc-id-scope
   {:macro :const-same-shape
    :id id
    :inputs [input]
    :value value}))

(defn merge-plan->consumers
  [& ms]
  {:vars (vec (apply concat (mapv :vars ms)))
   :plan->consumers (apply merge-with
                           (partial merge-with into)
                           (mapv :plan->consumers ms))})

(defn mk-plan->consumers*
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

(defn mk-plan->consumers
  [plan]
  (apply merge-plan->consumers
         (map-indexed (partial mk-plan->consumers*
                               {:target? true})
                      (:inputs plan))))

(declare mk-grad-graph-plan*)

(defn mk-grad-graph-plan***
  [{:keys [op] :as consumer} p->c cache]
  (let [out-count (-> op ogc/op-list-by-kw :output-arg count)]
    (->> (range out-count)
         (map #(assoc consumer :output-idx %))
         (reduce (partial mk-grad-graph-plan*
                          p->c)
                 {:cache cache :graph []})
         :graph)))

(defn mk-grad-graph-plan**
  [plan pairs p->c cache]
  (if (= 1 (count pairs))
    (let [[[consumer input-idx]] pairs]
      (cond
        (:target? consumer) (ops/ones-like plan)
        (nil? consumer) (ops/zeros-like plan)
        :else (gradient nil
                        consumer
                        (mk-grad-graph-plan*** consumer
                                               p->c
                                               cache)
                        input-idx)))
    (ops/add-n (mapv (fn [p]
                       (mk-grad-graph-plan** plan [p] p->c cache))
                     pairs))))

(defn mk-grad-graph-plan*
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

(defn mk-grad-graph-plan
  [plan->consumers alpha]
  (let [vs (:vars plan->consumers)]
    (->> vs
         (reduce (partial mk-grad-graph-plan*
                          (:plan->consumers plan->consumers))
                 {:cache {} :graph []})
         :graph
         (mapv #(ops/apply-gradient-descent %
                                            alpha
                                            %2)
               vs))))

(defmethod pre-build-macro :grad-desc-opt
  [^Graph g plan]
  (let [{:keys [id inputs scope]} plan
        [input] inputs
        [v-a v-b] (:inputs input)]
    (sc/with-id-scopes scope
      (ops/no-op id
                 {:ctrl-inputs
                  (mk-grad-graph-plan (mk-plan->consumers plan)
                                      0.5)}))))

(defmethod build-macro :grad
  [^Graph g plan]
  (let [[y-op dx-ops] (:inputs plan)
        y-inputs (->> y-op
                      :inputs
                      (map (gr/id->node g)))
        local-scope (str (:id y-op) "_grad")]
    (sc/with-id-scopes (conj (:scope plan) local-scope)
      (case (:op y-op)
        :Sin (grad/sin y-op y-inputs dx-ops)
        :MatMul (grad/mat-mul y-op y-inputs dx-ops)
        :Mean (grad/mean y-op y-inputs dx-ops)))))

(defmethod build-macro :const-same-shape
  [^Graph g plan]
  (let [shape (-> plan :inputs first :shapes first)] ;; TODO output-idx
    [(ops/c (sh/const-md-vec shape (:value plan)))]))

(defn build
  [^Graph g plan]
  (let [outputs (build-macro g plan)]
    (gr/add-macro-to-state! g (:hsh plan) outputs)
    outputs))

