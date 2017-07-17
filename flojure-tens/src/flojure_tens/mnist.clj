(ns flojure-tens.mnist
  (:require [flojure-tens.core :as ft]
            [flojure-tens.data-type :as dt]
            [flojure-tens.ops :as o]
            [flojure-tens.layers :as l]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.scope :as sc]
            [clojure.java.io :as io]
            [mikera.image.core :as img])
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [flojure_tens.common Graph Op GraphRef]
           [java.io DataInputStream File FileInputStream BufferedInputStream]))



#_(set! *unchecked-math* true) 
#_(set! *warn-on-reflection* true)

(def mnist-path "mnist")

(defn ^DataInputStream get-data-stream [name]
  (DataInputStream. (io/input-stream (io/resource (str mnist-path name)))))


(def CASE-COUNT 60000)

(def SIZE 28)

(def TEST-CASE-COUNT 10000)

(def ub-to-double-factor (double (/ 1.0 255.0)))


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
                               (* ub-to-double-factor (.readUnsignedByte data-input-stream)))))
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
                           (swap! labelvector conj (long (.readUnsignedByte data-input-stream)))))
                       @labelvector))))

(defonce test-data (future
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
                             (let [darray (double-array (* SIZE SIZE))]
                               (dotimes [y SIZE]
                                 (dotimes [x SIZE]
                                   (aset-double 
                                    darray 
                                    (+ x (* y SIZE)) 
                                    (* ub-to-double-factor (.readUnsignedByte data-input-stream)))))
                               (swap! datavector conj (vec darray) #_(Vector/wrap darray))))
                           @datavector))))

(defonce test-labels (future
                       (with-open [^DataInputStream data-input-stream (get-data-stream "/t10k-labels-idx1-ubyte")]
                         (let [labelvector (atom [])]
                           (if (not= (.readInt data-input-stream) 2049)
                             (throw (Error. "Wrong magic number")))
                           (if (not= (.readInt data-input-stream) TEST-CASE-COUNT)
                             (throw (Error. "Unexpected image count")))  
                           (dotimes [i TEST-CASE-COUNT]
                             (do
                               (swap! labelvector conj (long (.readUnsignedByte data-input-stream)))))
                           @labelvector))))

(ft/produce (o/reshape [1 2 3 4] [(int 2)  (int 2)]))

(def c1
  (ft/produce
   (l/conv2d {:filters 32
              :kernel-size [5 5]
              :padding "SAME" ;; TODO
              :activation :relu}
             [[[[(float 1.) (float 2.) (float 3.)]]]])))


(clojure.pprint/pprint c1)
