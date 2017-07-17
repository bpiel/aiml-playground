(ns flojure-tens.udacity3
  (:require [flojure-tens.core :as ft]
            [flojure-tens.data-type :as dt]
            [flojure-tens.ops :as o]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.scope :as sc]
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
      (mapv #(- (/ (- % mn)
                   r)
                0.5)
            d))))

(defn safe-load-image
  [filepath]
  (try
    (img/load-image filepath)
    (catch Exception e
      nil)))

(defn load-random-pngs
  [letter n]
  (->> (random-png-file-paths letter n)
       (keep safe-load-image)
       (map img/get-pixels)
       (map normalize)
       (mapv vec)))

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

  (defn split-features-hot-labels
    [ds n-labels]
    [(mapv first ds)
     (mapv (comp (partial mk-one-hot n-labels)
                 second)
           ds)])

(defn accuracy
  [a b]
#_  (clojure.pprint/pprint (take 30 a))
#_  (clojure.pprint/pprint (take 30 b))
  (double (/ (count (filter (partial apply =)
                            (map vector a b)))
             (count a))))

(defn spit-bytes
  "Slurp the bytes from a slurpable thing"
  [f ba]
  (let [bais (java.io.ByteArrayInputStream. ba)]
    (with-open [out (clojure.java.io/output-stream f)]
      (clojure.java.io/copy bais out))))

(defonce d18k (split-dataset (load-data 18000)))
(def d200 (split-dataset (load-data 200)))

;; PROBLEM 1

(do
  (def image-size 28)
  (def n-labels 10)
  (def n-hidden 1024)
  (def l2-weight 5.0e-4)

  (defn layer
    [scope width depth input]
    (sc/with-id-scopes [scope]
      (let [weights (p/v :weights
                         (o/truncated-normal {:dtype dt/double-kw}
                                             [width
                                              depth]))
            biases (p/v :biases
                        (p/zeros [depth] dt/double-kw))
            z (-> input
                  (o/mat-mul weights)
                  (o/add biases))]
        [z (o/l2-loss weights)])))

  (defn forward
    [x]
    (let [[z01 l2-reg1] (layer :hidden1
                               (* image-size image-size)
                               n-hidden
                               x)
          h1 (o/relu z01)
          [z12 l2-reg2] (layer :z12
                               n-hidden
                               n-labels
                               h1)]
      [z12 (o/add l2-reg1 l2-reg2)]))

  (defn get-loss
    [z12 l2-loss y]
    (let [loss (-> z12
                   (o/softmax-cross-entropy-with-logits  y)
                   (o/mean [(int 0)]))]
      (-> l2-weight
          (o/mul l2-loss)   
          (o/add loss))))

  (let [[train-ds test-ds] d200
        train (map first train-ds)
        tr-ls (mapv (comp (partial mk-one-hot 10) second) train-ds)
        test (map first test-ds)
        te-ls (mapv (comp (partial mk-one-hot 10) second) test-ds)
        [z12 l2-loss] (forward train)
        total-loss (get-loss z12 l2-loss tr-ls)
        opt (p/grad-desc-opt :opt total-loss :gradients)
        tr-pred (o/softmax z12)
        te-pred (-> test
                    forward
                    first
                    o/softmax)
        s (ft/build-all->session [opt tr-pred te-pred])]
    (ft/run-global-vars-init s)
    #_  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (-> s :graph :handle)))
    (ft/run-all s (repeat 10 opt))
    (println (accuracy (mapv one-hot->idx (ft/fetch s te-pred))
                       (mapv one-hot->idx te-ls))))

  (comment))

;; PROBLEM 3

(do

  (def image-size 28)
  (def n-labels 10)
  (def n-hidden 1024)
  (def l2-weight 5.0e-4)

  (defn layer
    [scope width depth input]
    (sc/with-id-scopes [scope]
      (let [weights (p/v :weights
                         (o/truncated-normal {:dtype dt/double-kw}
                                             [width
                                              depth]))
            biases (p/v :biases
                        (p/zeros [depth] dt/double-kw))
            z (-> input
                  (o/mat-mul weights)
                  (o/add biases))]
        [z (o/l2-loss weights)])))

  (defn forward
    [x drop-p]
    (let [[z01 l2-reg1] (layer :hidden1
                               (* image-size image-size)
                               n-hidden
                               x)
          h1 (p/dropout drop-p
                        (o/relu z01))
          [z12 l2-reg2] (layer :z12
                               n-hidden
                               n-labels
                               h1)]
      [z12 (o/add l2-reg1 l2-reg2)]))

  (defn get-loss
    [z12 l2-loss y]
    (let [loss (-> z12
                   (o/softmax-cross-entropy-with-logits  y)
                   (o/mean [(int 0)]))]
      (-> l2-weight
          (o/mul l2-loss)   
          (o/add loss))))


  
  (let [[train-ds test-ds] d200
        [train tr-ls] (split-features-hot-labels train-ds 10)
        [test te-ls] (split-features-hot-labels test-ds 10)
        [z12 l2-loss] (forward train 0.5)
        total-loss (get-loss z12 l2-loss tr-ls)
        opt (p/grad-desc-opt :opt total-loss :gradients)
        tr-pred (o/softmax z12)
        te-pred (-> test
                    (forward 1.0)
                    first
                    o/softmax)
        s (ft/build-all->session [opt tr-pred te-pred])]
    (ft/run-global-vars-init s)
    #_  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (-> s :graph :handle)))
    (ft/run-all s (repeat 10 opt))
    (println (accuracy (mapv one-hot->idx (ft/fetch s te-pred))
                       (mapv one-hot->idx te-ls))))
  

  (comment))
