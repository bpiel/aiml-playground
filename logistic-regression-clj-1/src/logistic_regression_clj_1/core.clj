(ns logistic-regression-clj-1.core
  (:gen-class))

;; Evaluate an algorithm using a cross validation split
(def evaluate-algorithm
  [dataset algorithm n-folds & args]
  (let [folds (cross-validation-split dataset n-folds)]
    )
  )

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




































