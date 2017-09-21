(ns flojure-tens.mnist
  (:require [flojure-tens.core :as ft]
            [flojure-tens.data-type :as dt]
            [flojure-tens.ops :as o]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.scope :as sc]
            flojure-tens.grad-desc-opt2
            flojure-tens.gradients2
            [clojure.java.io :as io]
            [mikera.image.core :as img])
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [flojure_tens.common Graph Op GraphRef]
           [java.io DataInputStream File FileInputStream BufferedInputStream]))

(defn spit-bytes
  "Slurp the bytes from a slurpable thing"
  [f ba]
  (let [bais (java.io.ByteArrayInputStream. ba)]
    (with-open [out (clojure.java.io/output-stream f)]
      (clojure.java.io/copy bais out))))

(defn spit-gd
  [^Graph g]
  (spit-bytes "gd1.gdpb"  (tfnative.Graph/toGraphDef (:handle g))))

#_(set! *unchecked-math* true) 
#_(set! *warn-on-reflection* true)

(def mnist-path "mnist")

(defn ^DataInputStream get-data-stream [name]
  (DataInputStream. (io/input-stream (io/resource (str mnist-path name)))))


(def CASE-COUNT 60000)

(def SIZE 28)

(def TEST-CASE-COUNT 10000)

#_(def ub-to-double-factor (double (/ 1.0 255.0)))

(defn normalize [x]
  (float (- (/ x 255.0) 0.5)))


(def train-data (future
                  (with-open [^DataInputStream data-input-stream (get-data-stream "/train-images-idx3-ubyte")]
                    (let [datavector (atom [])]
                      (if (not= (.readInt data-input-stream) 2051)
                        (throw (Error. "Wrong magic number")))
                      (if (not= (.readInt data-input-stream) 60000)
                        (throw (Error. "Unexpected image count")))  
                      (if (not= (.readInt data-input-stream) SIZE)
                        (throw (Error. "Unexpected row count")))  
                      (if (not= (.readInt data-input-stream) SIZE)
                        (throw (Error. "Unexpected column count")))  
                      (dotimes [i CASE-COUNT]
                        (let [darray (float-array (* SIZE SIZE))]
                          (dotimes [y SIZE]
                            (dotimes [x SIZE]
                              (aset-float 
                               darray 
                               (+ x (* y SIZE)) 
                               (float (normalize (.readUnsignedByte data-input-stream))))))
                          (swap! datavector conj (vec darray) #_(Vector/wrap darray))))
                      @datavector))))


(defonce train-labels (future
                   (with-open [^DataInputStream data-input-stream (get-data-stream "/train-labels-idx1-ubyte")]
                     (let [labelvector (atom [])]
                       (if (not= (.readInt data-input-stream) 2049)
                         (throw (Error. "Wrong magic number")))
                       (if (not= (.readInt data-input-stream) 60000)
                         (throw (Error. "Unexpected image count")))  
                       (dotimes [i CASE-COUNT]
                         (do
                           (swap! labelvector conj (int (.readUnsignedByte data-input-stream)))))
                       @labelvector))))

(def test-data (future
                       (with-open [^DataInputStream data-input-stream (get-data-stream "/t10k-images-idx3-ubyte") ]
                         (let [datavector (atom [])]
                           (if (not= (.readInt data-input-stream) 2051)
                             (throw (Error. "Wrong magic number")))
                           (if (not= (.readInt data-input-stream) TEST-CASE-COUNT)
                             (throw (Error. "Unexpected image count")))  
                           (if (not= (.readInt data-input-stream) SIZE)
                             (throw (Error. "Unexpected row count")))  
                           (if (not= (.readInt data-input-stream) SIZE)
                             (throw (Error. "Unexpected column count")))  
                           (dotimes [i TEST-CASE-COUNT]
                             (let [darray (float-array (* SIZE SIZE))]
                               (dotimes [y SIZE]
                                 (dotimes [x SIZE]
                                   (aset-float 
                                    darray 
                                    (+ x (* y SIZE)) 
                                    (float (normalize (.readUnsignedByte data-input-stream))))))
                               (swap! datavector conj (vec darray) #_(Vector/wrap darray))))
                           @datavector))))

(def test-labels (future
                       (with-open [^DataInputStream data-input-stream (get-data-stream "/t10k-labels-idx1-ubyte")]
                         (let [labelvector (atom [])]
                           (if (not= (.readInt data-input-stream) 2049)
                             (throw (Error. "Wrong magic number")))
                           (if (not= (.readInt data-input-stream) TEST-CASE-COUNT)
                             (throw (Error. "Unexpected image count")))  
                           (dotimes [i TEST-CASE-COUNT]
                             (do
                               (swap! labelvector conj (int (.readUnsignedByte data-input-stream)))))
                           @labelvector))))



(ft/produce (o/reshape [1 2 3 4] [(int 2)  (int 2)]))




;; just test data
(let [{:keys [logits classes]}
      (ut/id$->> @test-data
                 (take 6)
                 (o/reshape $ [-1 28 28 1])
                 (l/conv2d {:filters 32
                            :kernel-size [5 5]
                            :padding "SAME" ;; TODO
                            :activation o/relu})
                 (l/max-pooling2d {:pool-size [2 2]
                                   :strides [2 2]})
                 (l/conv2d {:filters 64
                            :kernel-size [5 5]
                            :padding "SAME" ;; TODO
                            :activation o/relu})
                 (l/max-pooling2d {:pool-size [2 2]
                                   :strides [2 2]})
                 (o/reshape $ [-1
                               (* 4 784)])
                 (l/dense {:activation o/relu
                           :units 1024})
                 (p/dropout 0.4)
                 (l/dense {:id :logits
                           :units 10})
                 (o/arg-max :classes $ 1))
      {:keys [loss opt]}
      (ut/id$->> @test-labels
                 (take 6)
                 (p/one-hot $ 10)
                 (o/softmax-cross-entropy-with-logits logits)
                 (p/reduce-mean :loss)
                 (p/grad-desc-opt2 :opt $))]
  (ft/with-close-let [{:keys [graph] :as s} (ft/build-all->session [opt  classes])]
    (ft/run-global-vars-init s)
    #_(spit-gd (:graph s))
    (clojure.pprint/pprint (ft/fetch s loss))
    (clojure.pprint/pprint (ft/fetch s classes))
    (ft/run-all s (repeat 1 opt))
    (clojure.pprint/pprint (ft/fetch s loss))
    (clojure.pprint/pprint (ft/fetch s classes))
    (ft/run-all s (repeat 20 opt))
    (clojure.pprint/pprint (ft/fetch s loss))
    (clojure.pprint/pprint (ft/fetch s classes))
    (clojure.pprint/pprint (take 6 @test-labels)))
  (println "=========="))


;; TODO real dealing

(let [batch-n 64 ;; TODO need to be able to vary this
      train-feed {:data (take batch-n @train-data)
                  :labels (take batch-n @train-labels)
                  :dropout (float 0.4)}
      test-feed {:data (take batch-n @test-data)
                 :labels (take batch-n @test-labels)
                 :dropout (float 1.)} ;; TODO autocast
      {:keys [logits classes]}
      (ut/id$->> (o/placeholder :data
                                dt/float-kw
                                [-1 #_batch-n
                                 784])
                 (o/reshape $ [-1 28 28 1])
                 (l/conv2d {:filters 32
                            :kernel-size [5 5]
                            :padding "SAME" ;; TODO
                            :activation o/relu})
                 (l/max-pooling2d {:pool-size [2 2]
                                   :strides [2 2]})
                 (l/conv2d {:filters 64
                            :kernel-size [5 5]
                            :padding "SAME" ;; TODO
                            :activation o/relu})
                 (l/max-pooling2d {:pool-size [2 2]
                                   :strides [2 2]})
                 (o/reshape $ [-1
                               (* 4 784)])
                 (l/dense {:activation o/relu
                           :units 1024})
                 (p/dropout (o/placeholder :dropout
                                           dt/float-kw
                                           []))
                 (l/dense {:id :logits
                           :units 10})
                 (o/arg-max :classes $ 1))
      {:keys [loss opt]}
      (ut/id$->> (o/placeholder :labels dt/int-kw [batch-n])
                 (p/one-hot $ 10)
                 (o/softmax-cross-entropy-with-logits logits)
                 (p/reduce-mean :loss)
                 (p/grad-desc-opt :opt $))
      s (ft/build-all->session [opt  classes])]
  (ft/run-global-vars-init s)
  (spit-gd (:graph s))
  (ft/run-all s (repeat 32 opt) train-feed)
  (clojure.pprint/pprint (ft/fetch s loss train-feed))
  #_  (clojure.pprint/pprint (ft/fetch s classes train-feed))
  #_  (clojure.pprint/pprint (take batch-n @train-labels))
  (clojure.pprint/pprint (ft/fetch s loss test-feed))
  #_  (clojure.pprint/pprint (ft/fetch s classes test-feed))
  #_  (clojure.pprint/pprint (take batch-n @test-labels))
  (println "=========="))

(let [{xxx :$} (ut/id$->> (o/placeholder :data
                                         dt/float-kw
                                         [4])
                          (o/reshape $ [1 2 2 1])
                          (l/conv2d {:filters 1
                                     :kernel-size [1 1]
                                     :padding "SAME"}))
      s (ft/build->session xxx)]
  (ft/run-global-vars-init s)
  (flojure-tens.shape/shape-of-seq  (ft/produce s xxx {:data [1. 2. 3. 4]})))

(let [b (p/v :b [[2. 3.]])
      {:keys [a y opt]}
      (ut/id$->> (o/placeholder :a dt/float-kw [2 2])
                 (l/dense {:units 2})
                 (o/reshape $ [2 2])
                 (p/dropout 0.4)
                 (o/add :y b)
                 (p/grad-desc-opt2 :opt))
      s (ft/build->session opt)]
  (ft/run-global-vars-init s)
  (ft/run-all s [opt opt opt opt] {:a [[1. 2.] [3. 4.]]})
  (ft/fetch-all s [b y] {:a [[1. 2.] [3. 4.]]}))
