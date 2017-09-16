(ns flojure-tens.tf-record
  (:require [flatland.protobuf.core :as pr]
            flojure-tens.common)
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [org.tensorflow.util Event]
           [flojure_tens.common Graph Op GraphRef]
           [com.macfaq.io LittleEndianOutputStream]
           [com.google.cloud Crc32c]
           [tfnative TensorFlow]))

(def EventP (pr/protodef Event))
(def GraphDefP (pr/protodef GraphDef))

(def crc (com.google.cloud.Crc32c.))


(defn long->int-bytes
  [l]
  (let [bb (-> (java.nio.ByteBuffer/allocate 8)
               #_  (.order java.nio.ByteOrder/LITTLE_ENDIAN))]
    (.putLong bb l)
    (->> (.array bb)
         (drop 4)
         byte-array)))

(defn compute-masked-crc32
  [bytea]
  (let [crc (com.google.cloud.Crc32c.)]
    (.update crc bytea 0 (count bytea))
    (-> crc
        .getValue
        (bit-and 0xFFFF)
        TensorFlow/mask
        long->int-bytes)))

(defn int->little-endian-bytes
  [i]
  (let [bb (-> (java.nio.ByteBuffer/allocate 4)
               (.order java.nio.ByteOrder/LITTLE_ENDIAN))]
    (.putInt bb i)
    (.array bb)))


(defn long->bytes
  [l]
  (let [bb (-> (java.nio.ByteBuffer/allocate 8)
               #_  (.order java.nio.ByteOrder/LITTLE_ENDIAN))]
    (.putLong bb l)
    (->> (.array bb)
         byte-array)))


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
        masked-crc32-of-length (-> length long->bytes compute-masked-crc32)
        masked-crc32-of-data (compute-masked-crc32 ba)]
    (doto output
      (.writeLong length)
      (.write masked-crc32-of-length 0 4)
      (.write ba 0 length)
      (.write masked-crc32-of-data 0 4))
    output))

(defn byte-arrays->tf-rec-byte-array
  [byte-arrays]
  (let [baos (java.io.ByteArrayOutputStream.)
        leos (LittleEndianOutputStream. baos)]
    (doseq [ba byte-arrays]
      (write-tf-rec leos ba))
    (.toByteArray baos)))

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
