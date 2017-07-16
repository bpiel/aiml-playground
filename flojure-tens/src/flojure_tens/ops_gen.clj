(ns flojure-tens.ops-gen
  (:require [flojure-tens.op-build :as obld]
            [flojure-tens.scope :as sc]
            [flojure-tens.ops-gen-config :as cfg]
            [flojure-tens.ops-gen-util :as ogu]))


(defn fetch-pre-build-op-fn
  [op-def]
  (cfg/fetch-config op-def :hook-pre-build))

(defn get-op-build-fn-body
  [op-def]
  (let [r (list '[g plan]
              `(obld/build-op
                (~(fetch-pre-build-op-fn op-def)
                 {:g ~'g :plan ~'plan
                  :op-def (~'cfg/proc-op-list-by-name ~(:name op-def))})))]

    r))

(defn dyn-defmethod-op-build
  [op-def]
  (try
    (let [{:keys [kw]} op-def]
      (ogu/dyn-defmethod `obld/build
                     kw
                     (get-op-build-fn-body op-def)))
    (catch Exception e
      (println "vvvvvvvvvvvvvvvvvvvvvv")
      (clojure.pprint/pprint op-def)
      (clojure.pprint/pprint e)
      (println "^^^^^^^^^^^^^^^^^"))))

(defn get-op-fn-body [fn-name-sym op-def]
  (cfg/call-config op-def :plan-fn-bodies [fn-name-sym op-def]))

(defn get-op-fn-name-sym [op-def]
  (let [s1 (or (cfg/fetch-config op-def :fn-name)
               (ogu/fn-name-default op-def))]
    (if (ns-resolve 'clojure.core s1)
      (symbol (str s1 "-tf"))
      s1)))

(defn finalize-plan
  [plan]
  #_  (sc/assoc-id-scope plan)
  ;; TODO only if debugging is on
  (with-meta (sc/assoc-id-scope plan)
        {:trace (Exception. "--debug--")}))

(defn inject-finalizer
  [bodies]
  (for [[args & b] bodies]
    `(~args (finalize-plan (do ~@b)))))

(defn dyn-defn-op [op-def]
  (let [fn-name-sym (get-op-fn-name-sym op-def)]
    (ogu/dyn-defn
     fn-name-sym
     (inject-finalizer
      (get-op-fn-body fn-name-sym op-def))
     (str "\n"
          (with-out-str
            (clojure.pprint/pprint op-def))))))

(defn dyn-def-op-fns [op-def]
  (let [op (cfg/op-def-processor op-def)]
    (dyn-defn-op op)
    (dyn-defmethod-op-build op)))

(defn gen-ops [ns-sym]
  (doseq [op-def (:op cfg/op-list)]
    (try
      (when-not (cfg/skip-ops (:name op-def))
        (dyn-def-op-fns #_ns-sym op-def))
      (catch Exception e
        (clojure.pprint/pprint op-def)
        (throw e)))))
