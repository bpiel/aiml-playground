(ns flojure-tens.scratch4
  (:require [flojure-tens.core :as ft]
            [flojure-tens.dev :as d]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops :as o]
            [flojure-tens.op-node :as opn]
            [flojure-tens.macros :as m]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.util :as ut]
            [flojure-tens.data-type :as dt]
            [flojure-tens.tensor :as tsr]
            [flatland.protobuf.core :as pr]
            [flojure-tens.tf-record :as tfr]
            flojure-tens.grad-desc-opt2
            flojure-tens.gradients2)
  (:import [org.tensorflow.framework Summary]
           [flojure_tens.tensor TensorNDArray]
           [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [org.tensorflow.util Event]
           [flojure_tens.common Graph Op GraphRef]
           [com.macfaq.io LittleEndianOutputStream]))

(def EventP (pr/protodef Event))
(def GraphDefP (pr/protodef GraphDef))

(defn get-wall-time [] (double (/ (System/currentTimeMillis) 1000.)))

(defn spit-bytes
  "Slurp the bytes from a slurpable thing"
  [f ba]
  (let [bais (java.io.ByteArrayInputStream. ba)]
    (with-open [out (clojure.java.io/output-stream f)]
      (clojure.java.io/copy bais out))))

(defn slurp-bytes
  "Slurp the bytes from a slurpable thing"
  [x]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (clojure.java.io/copy (clojure.java.io/input-stream x) out)
    (.toByteArray out)))


(defn mk-tfrecord-byte-buffer
  [filename]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (clojure.java.io/copy (clojure.java.io/input-stream filename) out)
    (-> out
        .toByteArray
        java.nio.ByteBuffer/wrap
        (.order java.nio.ByteOrder/LITTLE_ENDIAN)
        .asReadOnlyBuffer)))

(defn read-event-from-tfrecord-byte-buffer
  [^java.nio.ByteBuffer tfrecs-bb]
  (when (.hasRemaining tfrecs-bb)
    (let [length (.getLong tfrecs-bb) ;; TODO unsigned???
          masked-crc32-of-length (.getInt tfrecs-bb)
          ba (byte-array length)
          _ (.get tfrecs-bb ba 0 length)
          masked-crc32-of-data (.getInt tfrecs-bb)]
      (pr/protobuf-load EventP ba))))

(defn tfrec-bb->event-seq
  "I hope this isn't terribly wrong"
  [^java.nio.ByteBuffer tfrecs-bb]
  (let [dup (-> tfrecs-bb
                .slice
                (.order java.nio.ByteOrder/LITTLE_ENDIAN))
        evt (read-event-from-tfrecord-byte-buffer dup)]
    (if evt
      (lazy-cat [evt] (tfrec-bb->event-seq dup))
      [])))

(defn extract-from-tf-event
  [evt]
  (clojure.pprint/pprint evt)
  (let [k (-> evt
            (dissoc :wall-time)
            keys
            first)
        v (evt k)]
    (case k
      :file-version v
      :graph-def (pr/protobuf-load GraphDefP (.toByteArray v)))))

(defn tfrec-bb->seq
  [^java.nio.ByteBuffer tfrecs-bb]
  (map extract-from-tf-event
       (tfrec-bb->event-seq tfrecs-bb)))

(defn tfrec-file->seq
  [filename]
  (-> filename
      mk-tfrecord-byte-buffer
      tfrec-bb->seq))

#_(let [a (p/v :a 1.)
      sin1 (o/sin a)
      cos1 (o/cos a)
      opt {:macro :grad-desc-opt2
           :inputs [sin1]}
      g (ft/build-all->graph [cos1 opt])
      s (ft/graph->session g)
      gd (tfnative.Graph/toGraphDef (:handle g))]
  (def g1 g)
  (def gd1 gd))

#_(tfrec-file->seq "/home/bill/py.event")


(defn mk-version-event
  []
  {:wall-time (get-wall-time)
   :file-version "brain.Event:2"})

(defn mk-graphdef-event
  [graphdef-bytes]
  {:wall-time (get-wall-time)
   :graph-def graphdef-bytes})

(defn write-tf-rec
  [^LittleEndianOutputStream output ba]
  (let [length (count ba)
        masked-crc32-of-length 0
        masked-crc32-of-data 0]
    (doto output
      (.writeLong length)
      (.writeInt masked-crc32-of-length)
      (.write ba 0 length)
      (.writeInt masked-crc32-of-data))
    output))

(defn byte-arrays->tf-rec-byte-array
  [byte-arrays]
  (let [baos (java.io.ByteArrayOutputStream.)
        leos (LittleEndianOutputStream. baos)]
    (doseq [ba byte-arrays]
      (write-tf-rec leos ba))
    (.toByteArray baos)))

(def baos1 (java.io.ByteArrayOutputStream.))

(def dos1  (LittleEndianOutputStream. baos1))

(.writeLong dos1 1000)

(.writeByte dos1 -1)

(.writeByte dos1 10)

(.writeByte dos1 33)

(.writeByte dos1 130)

(vec (.toByteArray baos1))

(defn events->tf-recs-bytes
  [evts]
  (map (partial pr/protobuf-dump EventP)
       evts))

(defn graph->event-ba
  [^Graph g]
  (->> [(mk-version-event)
        (-> g
            :handle
            tfnative.Graph/toGraphDef
            mk-graphdef-event)]
       events->tf-recs-bytes
       byte-arrays->tf-rec-byte-array))

#_ (clojure.pprint/pprint ) (graph->event-ba g1)
(clojure.pprint/pprint  (tfr/tfrec-bb->seq
                         (java.nio.ByteBuffer/wrap
                          (tfr/graph->event-ba g1))))

(tfr/spit-bytes "/home/bill/repos/aiml-playground/flojure-tens/a1.events"
                (tfr/graph->event-ba g1))



(tfr/tfrec-file->seq "/home/bill/repos/aiml-playground/flojure-tens/a1.events")

(tfr/tfrec-file->seq "/home/bill/py.event")

(println (take 20 (tfr/slurp-bytes "/home/bill/py.event")))


(take 20 (tfr/slurp-bytes "/home/bill/repos/aiml-playground/flojure-tens/a1.events"))

(print  (take 40 (slurp "/home/bill/py.event")))
(print (take 40 (slurp "/home/bill/repos/aiml-playground/flojure-tens/a1.events")))
