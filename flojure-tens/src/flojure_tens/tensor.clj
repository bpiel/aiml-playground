(ns flojure-tens.tensor)

(defrecord Tensor [handle dtype shape])

(defn create ^Tensor [v]
  (let [shape (long-array [1]) #_(get-shape v)
        {:keys [dtype nat-dtype byte-size]} {:dtype :INT :nat-dtype 9 :byte-size 8} #_ (dt/get-data-type v)
        handle (tfnative.Tensor/allocate nat-dtype shape byte-size)
        t (Tensor. handle dtype shape)]
    (tfnative.Tensor/setValue handle v)
    t))

(defn get-value [^Tensor t]
  (let [la (long-array 1)]
    (tfnative.Tensor/readNDArray (:handle t) la)
    la))


#_(def t1 (create (long-array [55])))

(set-value t1 (long-array [4]))

(nth (get-value t1) 0)

(vec (get-value t1))

(def t1val (tfnative.Tensor/shape (:handle t1)))

(nth t1val 0)
