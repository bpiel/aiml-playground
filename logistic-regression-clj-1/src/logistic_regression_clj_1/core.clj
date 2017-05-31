(ns logistic-regression-clj-1.core
  (:gen-class))


(defn load-csv
  [filename]
  (mapv (fn [line]
          (mapv #(Double/parseDouble %)
           (clojure.string/split line
                                 #",")))
        (clojure.string/split-lines
         (slurp filename))))

;; Find the min and max values for each column
(defn dataset-minmax
  [dataset]
  (mapv (fn [x]
          [(apply min x)
           (apply max x)])
        (apply mapv vector dataset)))

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
  (/ (* 100.0 (apply + (map #(if (= (double %)
                                    (double %2)) 1 0)
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
            predicted (apply algorithm
                             train-set
                             test-set
                             args)
            actual (mapv last fold)]
        (accuracy-metric actual predicted)))))

;; Make a prediction with coefficients
(defn predict
  [row coefficients]
  (let [[bias & weights] coefficients
        r' (drop-last row)
        yhat (->> r'
                  (map * weights)
                  (apply + bias))]
    (/ 1.0 (+ 1.0
              (Math/exp (- yhat))))))


(defn coefficients-sgd*
  [coef l-rate error yhat row]
  (let [[coef0 & coef-rest] coef]
    (into [(+ coef0
              (* l-rate error yhat (- 1.0 yhat)))]
          (mapv (fn [c r]
                  (+ c
                     (* l-rate error yhat (- 1.0 yhat) r)))
                coef-rest row))))

;; Estimate logistic regression coefficients using stochastic gradient descent
(defn coefficients-sgd
  [train l-rate n-epoch]
  (loop [coef (-> train
                  first
                  count
                  (repeat 0)
                  vec)
         [row & tail] (apply concat
                             (repeat n-epoch train))]
    (if row
      (let [yhat (predict row coef)
            error (- (last row) yhat)]
        (recur (coefficients-sgd* coef l-rate error yhat row)
               tail))
      coef)))

;; Linear Regression Algorithm With Stochastic Gradient Descent
(defn logistic-regression
  [train test l-rate n-epoch]
  (let [coef (coefficients-sgd train l-rate n-epoch)]
    (loop [predictions []
           [row & tail] test]
      (let [yhat (-> row
                     (predict coef)
                     Math/round)]
        (if row
          (recur (conj predictions yhat)
                 tail)
          predictions)))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (let [ds (load-csv "pima-indians-diabetes.csv")
        mm (dataset-minmax ds)
        ds' (normalize-dataset ds mm)
        n-folds 5
        l-rate 0.1
        n-epoch 100
        scores (evaluate-algorithm ds'
                                   logistic-regression
                                   n-folds
                                   l-rate
                                   n-epoch)]
    scores))


#_ (-main)
