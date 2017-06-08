(ns flojure-tens.shape)

(defn unknown [] nil)

(def unknown nil?)

(defn scalar [] [])

(defn scalar? [sh] (= sh []))

(def create vector)

(def num-dimensions [sh]
  (if sh
    (count sh)
    -1))

(defn zeros-by-fn
  [sh f]
  (let [c (count sh)]
    (case c
      0 (first (f 1))
      1 (f (first sh))
      (vector (repeat (first sh)
                      (zeros-by-fn (drop 1 sh)
                                   f))))))

















































