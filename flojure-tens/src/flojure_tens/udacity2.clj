(ns flojure-tens.udacity2
  (:require [flojure-tens.core :as ft]
            [flojure-tens.data-type :as dt]
            [flojure-tens.ops :as o]
            [flojure-tens.composite :as c]
            [clojure.java.io :as io]
            [mikera.image.core :as img])
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [flojure_tens.common Graph Op GraphRef]))


(def letters ["A" "B" "C" "D" "E" "F" "G" "H" "I" "J"])
(def letters-count (count letters))

(defn get-png-files
  [letter]
  (->> letter
       (str "notMNIST_small/")
       io/resource
       (.getFile)
       io/file
       file-seq
       (filter #(.isFile %))))

(defn random-png-file-paths
  [letter n]
  (->> letter
       get-png-files
       shuffle
       (take n)
       (map #(.getPath %))))

(defn normalize
  [d]
  (let [mx (reduce max d)
        mn (reduce min d)
        r (double (- mx mn))]
    (mapv #(/ (- % mn)
              r)
          d)))

(defn load-random-pngs
  [letter n]
  (->> (random-png-file-paths letter n)
       (map img/load-image)
       (map img/get-pixels)
       (map normalize)
       (map vec)))

(defn append-label
  [label x]
  [x label])

(defn load-random-labeled-pngs
  [n letter-idx]
  (let [l (nth letters letter-idx)]
    (map (partial append-label letter-idx)
         (load-random-pngs l n))))

(defn load-data
  [n]
  (let [letters-count (count letters)
        nn (quot n letters-count)]
    (->> letters-count
         range
         (mapcat (partial load-random-labeled-pngs nn))
         shuffle)))

#_(defn split-dataset
  [d]
  (let [half (quot (count d) 2)]
    [(take half d)
     (drop half d)]))

(defn split-dataset
  [d]
  [d d])

(defn mk-one-hot
  [size idx]
  (-> size
      (repeat 0.0)
      vec
      (assoc idx 1.0)
      vec))

(defn one-hot->idx
  [oh]
  (.indexOf oh (reduce max oh)))

(defn accuracy
  [a b]
  (double (/ (count (filter (partial apply =)
                            (map vector a b)))
             (count a))))


(let [[train-ds test-ds] (split-dataset (load-data 100))
      train (mapv first train-ds)
      tr-ls (mapv (comp (partial mk-one-hot 10) second) train-ds) 
      test (mapv first test-ds)
      test-ls (mapv (comp (partial mk-one-hot 10) second) test-ds)
      size (-> train first count)
      weights (c/v :weights (c/truncated-normal [size 10]))
      biases  (c/v :biases (c/zeros [10] dt/double-kw))
      f #(o/add (o/mat-mul % weights)
                biases)
      logits (f train)
      loss (o/softmax-cross-entropy-with-logits logits
                                                tr-ls)
      #_ (o/mean (o/softmax-cross-entropy-with-logits logits
                                                      tr-ls)
                 [(int 0)])
      opt (c/grad-desc-opt :opt loss :gradients)
      tr-pred (o/softmax logits)
      te-pred (o/softmax (f test))
      s (ft/build->session [opt tr-pred te-pred])]
  (ft/run-global-vars-init s)
  (println "===================")
  (clojure.pprint/pprint [(take 10 (mapv one-hot->idx (ft/fetch s te-pred)))
                          (take 10 (mapv one-hot->idx test-ls))
                          (take 10 (ft/fetch s weights))
                          (take 10 (ft/fetch s biases))])
  (ft/run-all s (repeat 1 opt))
  (println (accuracy (mapv one-hot->idx (ft/fetch s te-pred))
                     (mapv one-hot->idx test-ls)))
  (clojure.pprint/pprint [(take 10 (mapv one-hot->idx (ft/fetch s te-pred)))
                          (take 10 (mapv one-hot->idx test-ls))])
  (ft/run-all s (repeat 1 opt))
  (println (accuracy (mapv one-hot->idx (ft/fetch s te-pred))
                     (mapv one-hot->idx test-ls)))
  (clojure.pprint/pprint [(take 10 (mapv one-hot->idx (ft/fetch s te-pred)))
                          (take 10 (mapv one-hot->idx test-ls))]))
