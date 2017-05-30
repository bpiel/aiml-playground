(ns logistic-regression-clj-1.core
  (:gen-class))


;; args must be vector of vectors -- no lists!!!
(defn normalize-dataset
  [dataset minmax]
  (for [row dataset]
    (for [i (range (count row))]
      (let [[mm0 mm1] (nth minmax i)]
        (/ (- (nth row i)
              mm0)
           (- mm1 mm0))))))

(defn cross-validation-split
  [dataset n-folds]
  (let [fold-size (int (/ (count dataset) n-folds))
        dataset-count (count dataset)]
    (for [_ (range n-folds)]
      (for [_ (range fold-size)]
        (nth dataset
             (rand-int dataset-count))))))

;; Calculate accuracy percentage
(defn accuracy-metric
  [actual predicted]
  (/ (* 100.0 (apply + (map #(if (= % %2) 1 0)
                            actual predicted)))
     (count actual)))

;; Evaluate an algorithm using a cross validation split
(defn evaluate-algorithm
  [dataset algorithm n-folds & args]
  (let [folds (cross-validation-split dataset n-folds)]
    (for [fold folds]
      (let [train-set (->> folds
                           (remove #{fold})
                           (apply concat))
            test-set (mapv #(-> %
                                drop-last
                                (concat [nil]))
                           fold)
            predicted (algorithm train-set
                                 test-set
                                 args)
            actual (mapv last fold)]
        (accuracy-metric actual predicted)))))

;; Make a prediction with coefficients
(defn predict
  [row coefficients]
  (let [[bias & weights] coefficients
        yhat (->> row
                  (map * weights)
                  (apply + bias))]
    (/ 1.0 (+ 1.0
              (Math/exp (- yhat))))))


;; Estimate logistic regression coefficients using stochastic gradient descent
(defn coefficients-sgd
  [train l-rate n-epoch]
  :NOT-IMPLEMENTED)

;; Linear Regression Algorithm With Stochastic Gradient Descent
(defn logistic-regression
  [train test l-rate n-epoch]
  (let [coef (coefficients-sgd train l-rate n-epoch)]
    (loop [predictions []
           [row & tail] test
           yhat (-> row
                    (predict coef)
                    Math/round)]
      (if row
        (conj predictions yhat)
        predictions))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
























