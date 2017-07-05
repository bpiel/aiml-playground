(ns flojure-tens.op-helpers
  (:require [flojure-tens.ops2 :as o]))


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
