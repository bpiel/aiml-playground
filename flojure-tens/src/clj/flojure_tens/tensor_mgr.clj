(ns flojure-tens.tensor-mgr
  (:require [flojure-tens.tensor :as tsr]
            [flojure-tens.data-type :as dt])
  (:import [flojure_tens.tensor Tensor]))

;; This is crazy, but maybe not terrible?

(def init-state {:refs {} :cache {} :dibs {}})
(defonce state (atom init-state))

(defn reset-state! "Don't do it!" [] (reset! state init-state))

(defrecord TensorRef [handle dtype shape valid? id])

(defn valid-ref?*
  [st tsr-handle tref-id]
  (when-let [refs (some-> st :refs (get tsr-handle))]
    (-> (refs tref-id)
        nil?
        not)))

(defn valid-ref?
  [tsr-handle tref-id]
  (when-let [refs (some-> @state :refs (get tsr-handle))]
    (-> (refs tref-id)
        nil?
        not)))

(defn- tensor->ref
  [^Tensor t & [id]]
  (let [{:keys [handle dtype shape]} t
        id' (or id (gensym "tref"))]
    (TensorRef. handle dtype shape
                (partial valid-ref? handle id')
                id')))

(defn- copy-ref
  [^TensorRef t & [id]]
  (let [{:keys [handle dtype shape valid?]} t
        id' (or id (gensym "tref"))]
    (TensorRef. handle dtype shape
                (partial valid-ref? handle id')            
                id')))

;; TODO dumb?
(def conj-set (fnil conj #{}))

(defn- try-cache*
  [{:keys [refs cache] :as st} hsh dib]
  (if-let [tref1 (cache hsh)]
    (let [tref2 (copy-ref tref1)]
      (-> st
          (update-in [:refs (:handle tref1)]
                     conj-set (:id tref2))
          (assoc-in [:dibs dib] tref2)))
    st))

(defn- undib
  [st dib]
  (update st :dibs dissoc dib))

(defn try-cache
  [hsh]
  (let [dib (gensym "tref")]
    (swap! state try-cache*
           hsh
           dib)
    (when-let [dibbed (get-in @state [:dibs dib])]
      (swap! state undib dib)
      dibbed)))

(defn mk-new-tensor-ref
  [v hsh]
  (tensor->ref (tsr/create-from-value v)
               (gensym "tref")))

;; TODO don't assume no cached copy exists?
(defn- add-to-state*
  [st hsh tref]
  (let [tref-cached (copy-ref tref)]
    (-> st
        (update-in [:refs (:handle tref)]
                   conj-set
                   (:id tref)
                   (:id tref-cached))
        (assoc-in [:cache hsh]
                  tref-cached))))

(defn add-to-state
  [hsh tref]
  (swap! state add-to-state* hsh tref))

(defn get-tensor-ref-by-value ^TensorRef [v]
  (let [hsh (hash [v (dt/data-type-of-whatever v)])]
    (or (try-cache hsh)
        (let [tref (mk-new-tensor-ref v hsh)]
          (add-to-state hsh tref)
          tref))))

(defn- release-ref*
  [st ^TensorRef tref dib]
  (if (valid-ref?* st (:handle tref) (:id tref))
    (let [st' (update-in st [:refs (:handle tref)]
                         disj (:id tref))]
      (if (-> st' :refs empty?)
        (assoc-in st' [:dibs dib] tref)
        st'))
    st))

(defn- maybe-delete
  [st dib]
  (when-let [target (get-in st [:dibs dib])]
    (tfnative.Tensor/delete (:handle target)))
  (update st :dibs dissoc dib))

(defn release-ref
  [^TensorRef tref]
  (let [dib (gensym "dib")]
    (swap! state release-ref* tref dib)
    (swap! state maybe-delete dib)))

(defn clear-cache*
  [st dib]
  (let [cached (-> st :cache vals)]
    (-> st
        (assoc :cache {})
        (assoc-in [:dibs dib] cached))))


(defn clean-up-refs []
  (swap! state
         (fn [st]
           (if-let [empties (keep (fn [[k v]] (when (empty? v) k))
                                    (:refs st))]
             (update st
                     :refs
                     (partial apply dissoc)
                     empties)))))

(defn clear-cache []
  (let [dib (gensym "dib")]
    (swap! state clear-cache* dib)
    (when-let [targets (not-empty (get-in @state [:dibs dib]))]
      (doseq [tref targets]
        (release-ref tref)))
    (swap! state update :dibs dissoc dib)
    (clean-up-refs)))


#_ (do
     @state

     (def t1 (get-tensor-ref-by-value 4))
     (def t2 (get-tensor-ref-by-value 4))

     ((:valid? t1))

     ((:valid? t2))
     
     (release-ref t1)

          (release-ref t2)

     (clear-cache)

     (clean-up-refs)
     
     (reset-state!))
