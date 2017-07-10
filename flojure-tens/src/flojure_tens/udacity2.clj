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
    (if (zero? r)
      (vec (repeat (count d) 0.0))
      (mapv #(/ (- % mn)
                r)
            d))))

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

(defn split-dataset
  [d]
  (let [portion (quot (* 7 (count d)) 10)]
    [(take portion d)
     (drop portion d)]))

#_(defn split-dataset
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

(defn spit-bytes
  "Slurp the bytes from a slurpable thing"
  [f ba]
  (let [bais (java.io.ByteArrayInputStream. ba)]
    (with-open [out (clojure.java.io/output-stream f)]
      (clojure.java.io/copy bais out))))

(def d2k (split-dataset (load-data 2000)))
(def d200 (split-dataset (load-data 200)))

#_(let [[train-ds test-ds] d2k
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
      loss  (o/mean (o/softmax-cross-entropy-with-logits logits
                                                         tr-ls)
                    [(int 0)])
      opt (c/grad-desc-opt :opt loss :gradients)
      tr-pred (o/softmax logits)
      te-pred (o/softmax (f test))
      _ (println "building")
      s (ft/build->session [opt tr-pred te-pred])]
  (ft/run-global-vars-init s)
  (ft/run-all s (repeat 1000 opt))
  (accuracy (mapv one-hot->idx (ft/fetch s te-pred))
            (mapv one-hot->idx test-ls)))


(let [n-hidden-nodes 1024
      [train-ds test-ds] d200
      n-batches (-> train-ds count)
      size (-> train-ds first first count)
      train (o/placeholder :train dt/double-kw [n-batches size])
      tr-ls (o/placeholder :train-labels dt/double-kw [n-batches 10])
      test (mapv first test-ds)
      test-ls (mapv (comp (partial mk-one-hot 10) second) test-ds)
      weights01 (c/v :weights01 (c/truncated-normal [size n-hidden-nodes]))
      weights12 (c/v :weights12 (c/truncated-normal [n-hidden-nodes 10]))
      biases01 (c/v :biases01 (c/zeros [n-hidden-nodes] dt/double-kw))
      biases12 (c/v :biases12 (c/zeros [10] dt/double-kw))
      f (fn [d w b]
          (o/add (o/mat-mul d w)
                 b))
      h1 (o/relu (f train weights01 biases01))
      z12 (f h1 weights12 biases12)
      loss (o/mean (o/softmax-cross-entropy-with-logits z12 tr-ls)
                   [(int 0)])
      opt (c/grad-desc-opt :opt loss :gradients)
      tr-pred (o/softmax z12)
      te-pred (o/softmax (f (o/relu (f test weights01 biases01))
                            weights12
                            biases12))
      s (ft/build->session [opt tr-pred te-pred])]
  (ft/run-global-vars-init s)
  (ft/run-all s (repeat 32 opt) {:train (map first train-ds)
                                 :train-labels (mapv (comp (partial mk-one-hot 10) second) train-ds)})
  (accuracy (mapv one-hot->idx (ft/fetch s te-pred))
            (mapv one-hot->idx test-ls)))
