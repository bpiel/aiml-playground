(ns flojure-tens.gradients2
  (:require [flojure-tens.ops :as o]
            [flojure-tens.op-build :as obld]
            [flojure-tens.op-node :as opn]
            [flojure-tens.macros :as mcro]
            [flojure-tens.graph :as gr]
            [flojure-tens.scope :as sc]
            [flojure-tens.util :as ut])
  (:import [flojure_tens.common Graph]))

#_(defmethod mcro/build-macro :gradients
  [^Graph g plan]
  (let [out-idx-fn #(or (:output-idx %) 0)
        [y-op dx-op] (:inputs plan)
        y (:handle y-op)
        y-idx (or (:output-idx y) 0)
        y-inputs (->> y-op
                      :inputs
                      (map (gr/id->node g)))
        x (mapv :handle y-inputs)
        x-idx  (mapv out-idx-fn y-inputs)
        dx (:handle dx-op)
        dx-idx (out-idx-fn dx)
        dy-handles (long-array (count x))
        dy-idx (int-array (count x))]
    (def ag1 {:y-op y-op
              :dx-op dx-op
              :y y
              :y-idx y-idx
              :y-inputs y-inputs
              :x x
              :x-idx x-idx
              :dx dx
              :dx-idx dx-idx
              :dy-handles dy-handles
              :dy-idx dy-idx})
    (tfnative.Graph/addGradients (:handle g)
                                 (long-array [y]) (int-array [y-idx])
                                 (long-array x) (int-array x-idx)
                                 (long-array [dx]) (int-array [dx-idx])
                                 dy-handles dy-idx)
    (let [dy-handles-vec (vec dy-handles)
          dy-idx-vec (vec dy-idx)]
      (def ag2 [dy-handles-vec dy-idx-vec])
      (clojure.pprint/pprint ag2)
      (dorun (map (partial gr/add-op-to-state! g)
                  (obld/discover-new-ops-from-handles g
                                                      dy-handles-vec)))
      ;; TODO dy-idx? aliases? what? do something!
      (op-node/create-from-handle (first dy-handles-vec)
                                  (first dy-idx-vec)
                                  (gr/mk-graph-ref g)))))


(defmethod mcro/build-macro :gradients
  [^Graph g plan]
  (let [out-idx-fn #(or (:output-idx %) 0)
        [y-op dx-op x-ops] (:inputs plan)
        y-handle (:handle y-op)
        y-idx (out-idx-fn y-op)
        x-handles (mapv :handle x-ops)
        x-idx  (mapv out-idx-fn x-ops)
        dx-handle (:handle dx-op)
        dx-idx (out-idx-fn dx-op)
        x-count (count x-ops)
        dy-handles (long-array x-count)
        dy-idxs (int-array x-count)]
    (def ag1 {:y-op y-op
              :dx-op dx-op
              :x-ops x-ops
              :y-handle y-handle
              :y-idx y-idx
              :x-handles x-handles
              :x-idx x-idx
              :dx-handle dx-handle
              :dx-idx dx-idx
              :dy-handles dy-handles
              :dy-idxs dy-idxs})
    #_ (clojure.pprint/pprint ag1)
    (tfnative.Graph/addGradients (:handle g)
                                   (long-array [y-handle]) (int-array [y-idx])
                                   (long-array x-handles) (int-array x-idx)
                                   (long-array [dx-handle]) (int-array [dx-idx])
                                   dy-handles dy-idxs)
    (let [dy-handles-vec (vec dy-handles)
          dy-idx-vec (vec dy-idxs)]
      (def ag2 [dy-handles-vec dy-idx-vec])
      (clojure.pprint/pprint ag2)
      #_(dorun (map (partial gr/add-op-to-state! g)
                    (obld/discover-new-ops-from-handles g
                                                        dy-handles-vec)))
      ;; TODO dy-idx? aliases? what? do something!
      #_(op-node/create-from-handle (first dy-handles-vec)
                                    (first dy-idx-vec)
                                    (gr/mk-graph-ref g)))))

#_(def mpg1 (opn/create-from-handle (-> ag2 first first)
                                   0
                                   nil))
