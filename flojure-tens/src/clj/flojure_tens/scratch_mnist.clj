(ns flojure-tens.scratch-mnist
  (:require [flojure-tens.core :as ft]
            [flojure-tens.dev :as d]
            [flojure-tens.ops :as o]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.data-type :as dt]
            [flojure-tens.util :as ut]
            [clojure.java.io :as io]
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
  (let [{:keys [logits data data1]}
        (ut/id$->> (o/placeholder :data
                                  dt/float-kw
                                  [-1 784])
                   (o/identity-tf :data-id)
                   (l/dense {:id :logits
                             :units 10} ))]
    {:auto [:build :train]
     :build [logits]
     :summaries [logits] ;; TODO move to :train
     :train {:targets []
             :feed {:data @test-data}
             :fetch []}}))



#_(def SummaryP (pr/protodef Summary))

#_(pr/protobuf-load SummaryP
                  (-> @$.ws1/$log
                      first
                      (get "summaries/data1")))


#_ (do
     (ft/ws-build ws1)

     (ft/ws-train ws1)

     (clojure.pprint/pprint ws1))



#_(time (let [{:keys [data1]}
            (ut/id$->> (o/placeholder :data
                                      dt/float-kw
                                      [-1 784])
                       (o/identity-tf :data1))]
        (ft/with-close-let [{:keys [graph] :as s} (ft/build->session data1)]
          (def o
            (ft/fetch-map s [:data1] {:data (take 1 @test-data)})))))

#_(defn log-run
  [{:keys [session feed fetch]}]
  (swap! @(ns-resolve (the-ns '$g)
                     '$log)
         conj
         {:feed feed
          :fetch (ft/fetch-map session
                               fetch
                               feed)}))

#_(time (let [{:keys [data1]}
            (ut/id$->> (o/placeholder :data
                                      dt/float-kw
                                      [-1 3])
                       (o/identity-tf :data1))]
        (ft/with-close-let [{:keys [graph] :as s} (ft/build->session data1)]
          (d/mk-ns s)
          (log-run {:session s
                    :feed {:data [1. 3. 4.]}
                    :fetch [:data1]}))))






























