(ns flojure-tens.scope)

(def ^:dynamic *id-scope* [])
(def ^:dynamic *var-scope* nil)

(defmacro with-id-scope
  [id-scope & body]
  `(binding [*id-scope* (conj *id-scope* ~id-scope)]
     ~@body))

(defmacro with-id-scopes
  [id-scopes & body]
  `(binding [*id-scope* (into *id-scope* ~id-scopes)]
     ~@body))

(def empty-var-scope {:scope []})

(defn mk-var-scope
  [new-scope old-var-scope]
  (let [old-var-scope' (or old-var-scope
                           empty-var-scope)]
    (cond (map? new-scope) new-scope
          
          (or (keyword? new-scope)
              (string? new-scope))
          (update old-var-scope'
                  :scope
                  conj
                  new-scope)
          
          (sequential? new-scope)
          (update old-var-scope'
                  :scope
                  into
                  new-scope))))

(defn mk-nested-var-scope
  [new-scope old-var-scope]
  (let [old-var-scope' (or old-var-scope
                           empty-var-scope)]
    (cond (map? new-scope)
          (let [{:keys [scope initializer regularizer]} new-scope]
            (-> old-var-scope'
                (update :scope
                        into
                        scope)
                (update :initializer
                        #(or initializer %))
                (update :regularizer
                        #(or regularizer %))))
          
          (or (keyword? new-scope)
              (string? new-scope))
          (update old-var-scope'
                  :scope
                  conj
                  new-scope)
          
          (sequential? new-scope)
          (update old-var-scope'
                  :scope
                  into
                  new-scope))))

(defn mk-id-scope
  [new-scope old-id-scope]
  (cond (map? new-scope) (conj old-id-scope (:scope new-scope))
        (keyword? new-scope) (conj old-id-scope new-scope)
        (string? new-scope) (conj old-id-scope new-scope)
        (sequential? new-scope) (into old-id-scope new-scope)))

(defmacro with-variable-scope
  [scope & body]
  `(binding [*var-scope* (mk-var-scope ~scope *var-scope*)
             *id-scope* (mk-id-scope ~scope *id-scope*)]
     ~@body))

(defmacro with-scopes-syncd
  [scope & body]
  `(let [new-scope# (mk-var-scope ~scope *var-scope*)]
     (binding [*var-scope* new-scope#
               *id-scope* (:scope new-scope#)]
       ~@body)))


(defn assoc-scopes-to-plan
  [{:keys [op] :as plan}]
  (if (= op :v)
    (assoc plan
           :scope (:scope *var-scope*))
    (assoc plan
           :scope *id-scope*
           :var-scope *var-scope*)))
