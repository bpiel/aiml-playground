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




(defn- visit-plan*
  [f plan]
  (if (and (sequential? plan)
           (some map? (tree-seq sequential? identity plan)))
    (mapv f plan)
    (f plan)))

(defn visit-plan
  [f root]
  (if (sequential? root)
    (mapv (partial visit-plan* f)
          root)
    (visit-plan* f root)))

(defn- pre-visit-plan*
  [f top-fn plan]
  (let [{:keys [inputs ctrl-inputs] :as plan'} (f plan)]
    (cond-> plan'
      (not-empty inputs) (update :inputs
                                 (partial top-fn f))
      (not-empty ctrl-inputs) (update :ctrl-inputs
                                      (partial top-fn f)))))
(defn pre-visit-plan
  [f root]
  (visit-plan (partial pre-visit-plan* f pre-visit-plan)
              root))

(defn- post-visit-plan-merge*
  [f merge-fn top-fn plan]
  (if (map? plan)
    (let [{:keys [inputs ctrl-inputs]} plan]
      (f (merge-fn plan
                   (top-fn f merge-fn inputs)
                   (top-fn f merge-fn ctrl-inputs))))
    (f plan)))

(defn post-visit-plan-merge
  [f merge-fn root]
  (visit-plan (partial post-visit-plan-merge*
                       f
                       merge-fn
                       post-visit-plan-merge)
              root))

#_
(post-visit-plan-merge
 (fn [plan]
   (cond (map? plan)
         (assoc plan :a 1)
         (number? plan)
         (inc plan)
         :else plan))
 (fn [plan inputs ctrl-inputs]
   (assoc plan
          :i inputs
          :c ctrl-inputs))
 {})
