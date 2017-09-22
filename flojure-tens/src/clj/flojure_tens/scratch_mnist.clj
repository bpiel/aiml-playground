(ns flojure-tens.scratch-mnist
  (:require [flojure-tens.core :as ft]
            [flojure-tens.dev :as d]
            [flojure-tens.ops :as o]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.data-type :as dt]
            [flojure-tens.util :as ut]
            [clojure.java.io :as io]
            [flojure-tens.grad-desc-opt2 :as gdo2]
            flojure-tens.gradients2
            [flatland.protobuf.core :as pr])
  (:import [java.io DataInputStream File FileInputStream BufferedInputStream]
           [org.tensorflow.framework Summary]))

(def TEST-CASE-COUNT 10000)
(def TRAIN-CASE-COUNT 60000)
(def SIZE 28)

(def mnist-path "mnist")

(defn ^DataInputStream mk-dis [name]
  (-> (str mnist-path name)
      io/resource
      io/input-stream
      (DataInputStream.)))

(defn normalize-img-byte [x]
  (float (- (/ x 255.0) 0. #_0.5)))

(defn read-mnist-data
  [res-name n size]
  (with-open [^DataInputStream dis (mk-dis res-name)]
    (if (not= (.readInt dis) 2051)
      (throw (Error. "Wrong magic number")))
    (if (not= (.readInt dis) n)
      (throw (Error. "Unexpected image count")))  
    (if (not= (.readInt dis) size)
      (throw (Error. "Unexpected row count")))  
    (if (not= (.readInt dis) size)
      (throw (Error. "Unexpected column count")))  
    (vec (for [i (range n)]
           (vec (for [y (range size)
                      x (range size)]
                  (normalize-img-byte (.readUnsignedByte dis))))))))

(defn read-mnist-labels
  [res-name n]
  (with-open [^DataInputStream data-input-stream (mk-dis res-name)]
    (if (not= (.readInt data-input-stream) 2049)
      (throw (Error. "Wrong magic number")))
    (if (not= (.readInt data-input-stream) n)
      (throw (Error. "Unexpected image count")))
    (vec (for [i (range n)]
           (int (.readUnsignedByte data-input-stream))))))

(defonce train-data (future (read-mnist-data "/train-images-idx3-ubyte"
                                         TRAIN-CASE-COUNT
                                         SIZE)))

(defonce train-labels (future (read-mnist-labels "/train-labels-idx1-ubyte"
                                           TRAIN-CASE-COUNT)))

(defonce test-data (future (read-mnist-data "/t10k-images-idx3-ubyte"
                                         TEST-CASE-COUNT
                                         SIZE)))

(defonce test-labels (future (read-mnist-labels "/t10k-labels-idx1-ubyte"
                                      TEST-CASE-COUNT)))


(ft/def-workspace ws1
  (let [{:keys [data logits hidden classes]}
        (ut/id$->> (o/placeholder :data
                                  dt/float-kw
                                  [-1 784])
                   (l/dense {:id :logits
                             :units 10})
                   (o/arg-max :classes $ 1))
        {:keys [labels loss opt]}
        (ut/id$->> (o/placeholder :labels
                                  dt/int-kw
                                  [-1])
                   (p/one-hot $ 10)
                   (o/softmax-cross-entropy-with-logits logits)
                   (p/reduce-mean :loss)
                   (p/grad-desc-opt :opt {:alpha 0.2} ))
        acc (p/accuracy :acc
                        (o/cast-tf {:SrcT dt/long-kw :DstT dt/int-kw}
                                   classes)
                        labels)]
    {:auto [:build :train ]
     :build [acc opt]
     :train {:summaries [acc loss logits] ;; TODO move to :train
             :targets [opt]
             :feed {:data @test-data
                    :labels @test-labels}
             :fetch []
             :steps 10
             :log-step-interval 2}}))
