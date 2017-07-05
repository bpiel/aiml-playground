(ns flojure-tens.util)


(defn visit-post
  [f branch? children make-node root]
  (if (branch? root)
    (->> root
         children
         (map (partial visit-post f branch? children make-node))
         (make-node root)
         f)
    (f root)))

(defn visit-pre
  [f branch? children make-node root]
  (let [root' (f root)]
    (if (branch? root')
      (->> root'
           children
           (map (partial visit-pre f branch? children make-node))
           (make-node root')
           f)
      root')))

(defn ->vec
  [v]
  (cond (vector? v) v
        (sequential? v) (vec v)
        (map? v) [v]
        (coll? v) (vec v)
        :else [v]))

(defn mk-tf-id
  [scope id]
  (let [s (or (some->> scope
                       not-empty
                       (map name)
                       (clojure.string/join "/")
                       (#(str % "/")))
              "")
        id' (name id)]
    (str s id')))

(defn- visit-plan**
  [cache-fn pre-fn merge-fn post-fn top-fn plan]
  (or (cache-fn plan)
      (let [{:keys [inputs ctrl-inputs] :as pre} (pre-fn plan)
            post (if (map? pre)
                   (cond-> pre
                     (not-empty inputs)
                     (update :inputs top-fn)
                     (not-empty ctrl-inputs)
                     (update :ctrl-inputs top-fn))
                   pre)]
        (-> plan
            (merge-fn post)
            post-fn))))

(defn- visit-plan*
  [f plan]
  (if (and (sequential? plan)
           (some map? (tree-seq sequential? identity plan)))
    (mapv f plan)
    (f plan)))

(defn visit-plan
  [cache-fn pre-fn merge-fn post-fn root]
  (let [cache-fn' (or cache-fn (constantly nil))
        pre-fn' (or pre-fn identity)
        merge-fn' (or merge-fn (fn [_ x] x))
        post-fn' (or post-fn identity)
        top-fn (partial visit-plan cache-fn' pre-fn' merge-fn' post-fn')
        f (partial visit-plan** cache-fn' pre-fn' merge-fn' post-fn' top-fn)]
    (if (sequential? root)
      (mapv (partial visit-plan* f)
            root)
      (visit-plan* f root))))

(defn pre-visit-plan
  [f root]
  (visit-plan nil f nil nil root))


























