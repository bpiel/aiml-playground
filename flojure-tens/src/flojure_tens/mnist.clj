(ns flojure-tens.mnist
  (:require [flojure-tens.core :as ft]
            [flojure-tens.data-type :as dt]
            [flojure-tens.ops :as o]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.scope :as sc]
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

#_
(defonce train-data (future
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
                        (let [darray (double-array (* SIZE SIZE))]
                          (dotimes [y SIZE]
                            (dotimes [x SIZE]
                              (aset-double 
                               darray 
                               (+ x (* y SIZE)) 
                               (normalize (.readUnsignedByte data-input-stream)))))
                          (swap! datavector conj (vec darray) #_(Vector/wrap darray))))
                      @datavector))))

#_
(defonce train-labels (future
                   (with-open [^DataInputStream data-input-stream (get-data-stream "/train-labels-idx1-ubyte")]
                     (let [labelvector (atom [])]
                       (if (not= (.readInt data-input-stream) 2049)
                         (throw (Error. "Wrong magic number")))
                       (if (not= (.readInt data-input-stream) 60000)
                         (throw (Error. "Unexpected image count")))  
                       (dotimes [i CASE-COUNT]
                         (do
                           (swap! labelvector conj (long (.readUnsignedByte data-input-stream)))))
                       @labelvector))))

#_
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



#_
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

(def c1
  (ft/produce
   (l/conv2d {:id :conv1
              :filters 32
              :kernel-size [5 5]
              :padding "SAME" ;; TODO
              :activation :relu}
             [[[[(float 1.) (float 2.) (float 3.)]]]])))


(def plan1
  (l/conv2d {:filters 32
             :kernel-size [5 5]
             :padding "SAME" ;; TODO
             :activation :relu}
            (p/v :a [[[[(float 1.) (float 2.) (float 3.)]]]])))

(def plan2
  (l/max-pooling2d {:pool-size [2 2]
                    :strides [1 1]}
                   (p/v :a [[[[(float 1.)] [(float 2.)] [(float 3.)]]
                             [[(float 1.)] [(float 2.)] [(float 3.)]]]])))

(def plan3
  (l/dense 2 [[1. 2. 3]]))


(let [opt (p/grad-desc-opt :opt
                           plan3
                           :gradients)
      s (ft/build->session opt)]
  (ft/run-global-vars-init s)
  (ft/run-all s (repeat 1 opt))
  (ft/fetch s plan3))

(def data (o/c [[[[(float 1.)] [(float 2.)] [(float 3.)]]
                 [[(float 4.)] [(float 5.)] [(float 6.)]]]]))



(let [logits (ut/$- ->> @test-data
                    (take 5)
                    (o/reshape $ (o/c [-1 28 28 1]
                                      dt/int-kw))
                    (l/conv2d {:id :conv-1
                               :filters 32
                               :kernel-size [5 5]
                               :padding "SAME" ;; TODO
                               :activation :relu})
                    (l/max-pooling2d {:id :max-1
                                      :pool-size [2 2]
                                      :strides [2 2]})
                    (l/conv2d {:id :conv-2
                               :filters 64
                               :kernel-size [5 5]
                               :padding "SAME" ;; TODO
                               :activation :relu})
                    (l/max-pooling2d {:id :max-2
                                      :pool-size [2 2]
                                      :strides [2 2]})
                    (o/reshape $ (o/c [-1 (* 7 7 64)]
                                      dt/int-kw))
                    (l/dense 1024)
                    (p/dropout (float 0.4))
                    (l/dense 10))
      opt (ut/$- ->> @test-labels
                 (take 5)
                 (o/one-hot $ (int 10) (float 1) (float 0))
                 (o/softmax-cross-entropy-with-logits logits)
                 (p/grad-desc-opt :opt $ :gradients))
      classes (o/arg-max logits 1) ;; 0 or 1?
      s (ft/build-all->session [opt classes])]
  (ft/run-global-vars-init s)
  (ft/run-all s (repeat 1 opt))
  (def out1 (ft/fetch s logits))

  (do
    (println "==========")
    (clojure.pprint/pprint out1)
    (clojure.pprint/pprint (take 10 @test-labels))))

(let [logits (ut/$- ->> @test-data
                    (take 6)
                    (o/reshape $ (o/c [-1 28 28 1]
                                      dt/int-kw))
                    (l/conv2d {:id :conv-1
                               :filters 32
                               :kernel-size [5 5]
                               :padding "SAME" ;; TODO
                               :activation :relu})
                    (l/max-pooling2d {:id :max-1
                                      :pool-size [2 2]
                                      :strides [2 2]})
                    (l/conv2d {:id :conv-2
                               :filters 64
                               :kernel-size [5 5]
                               :padding "SAME" ;; TODO
                               :activation :relu})
                    (l/max-pooling2d {:id :max-2
                                      :pool-size [2 2]
                                      :strides [2 2]})
                    (o/reshape $ (o/c [-1 (* 7 7 64)] 
                                      dt/int-kw))
                    (l/dense :dense-1 true 1024)
                    #_                    (p/dropout (float 0.4))
                    (l/dense :dense-2 false 10))
      mean1  (ut/$- ->> @test-labels
                    (take 6)
                    (o/one-hot $ (int 10) (float 1) (float 0))
                    (o/softmax-cross-entropy-with-logits logits)
                    (o/mean $ [(int 0)]))
      opt (p/grad-desc-opt :opt mean1 :gradients)
      classes (o/arg-max logits 1) 
      s (ft/build-all->session [opt classes])]
  (ft/run-global-vars-init s)
  #_  (spit-gd (:graph s))
  (clojure.pprint/pprint (ft/fetch s mean1))
  (clojure.pprint/pprint (ft/fetch s classes))
  (ft/run-all s (repeat 1 opt))
  (clojure.pprint/pprint (ft/fetch s mean1))
  (clojure.pprint/pprint (ft/fetch s classes))
  (ft/run-all s (repeat 10 opt))
  (clojure.pprint/pprint (ft/fetch s mean1))
  (clojure.pprint/pprint (ft/fetch s classes))
  (clojure.pprint/pprint (take 5 @test-labels))
  (println "=========="))


(ft/produce (o/mean [1. 2. 5.] [(int 0)]))

(ft/produce (ut/$- ->> @test-labels
                   (take 5)
                   (o/one-hot $ (int 10) (float 1) (float 0))
                   (o/arg-max $ 1)))

(ft/produce (l/conv2d {:id :conv-1
                       :filters 1
                       :kernel-size [ 1 1]
                       :padding "SAME" ;; TODO
                       :activation :relu}
                      ))




(def c1
  (ft/produce
   (l/conv2d {:id :conv1
              :filters 32
              :kernel-size [5 5]
              :padding "SAME" ;; TODO
              :activation :relu}
             [[[[(float 1.) (float 2.) (float 3.)]]]])))

#_(clojure.pprint/pprint c1)














































