(ns flojure-tens.shape
  (:require [flojure-tens.util :as util]))

(defn unknown [] nil)

(def unknown nil?)

(defn scalar [] [])

(defn scalar? [sh] (= sh []))

(def create vector)

(defn num-dimensions [sh]
  (if sh
    (count sh)
    -1))

(defn num-dimensions-seq [s]
  (loop [n 0
         s' s]
    (if (sequential? s')
      (recur (inc n) (first s'))
      n)))

(defn zeros-array-by-fn
  [sh f]
  (let [c (count sh)]
    (case c
      0 (first (f 1))
      1 (f (first sh))
      (to-array (repeatedly (first sh)
                            #(zeros-array-by-fn (drop 1 sh)
                                                f))))))

(defn shape-of-seq
  [s]
  (loop [agg []
         v s]
    (if (sequential? v)
      (recur (conj agg (count v))
             (first v))
      agg)))

