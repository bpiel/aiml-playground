(ns logistic-regression-clj-2.core
  (:require [clojure.java.io :as io]
            [mikera.image.core :as img]
            [mikera.image.colours :as img-clr])
  (:gen-class))

(file-seq (io/resource "notMNIST_small"))

(def xx (io/resource "notMNIST_small/A"))

(.isFile (second (file-seq (io/file (.getFile xx)))))

(defn load-csv
  [filename]
  (mapv (fn [line]
          (mapv #(Double/parseDouble %)
           (clojure.string/split line
                                 #",")))
        (clojure.string/split-lines
         (slurp filename))))

(defn load-random-pngs*
  [letter n]
  (->> letter
       (str "notMNIST_small/")
       io/resource
       (.getFile)
       io/file
       file-seq
       (filter #(.isFile %))
       shuffle
       (take n)
       (map #(.getPath %))
       (map img/load-image)
       (map img/get-pixels)
       (map vec)))

(defn suffix-all
  [colls suffix]
  (map #(conj % suffix)
       colls))

(defn load-random-pngs
  [n]
  (let [half-n (quot n 2)]
    (shuffle
     (concat (suffix-all (load-random-pngs* "A" half-n) 0)
             (suffix-all (load-random-pngs* "C" half-n) 1)))))

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

(def last-coef (atom nil))

;; Linear Regression Algorithm With Stochastic Gradient Descent
(defn logistic-regression
  [train test l-rate n-epoch]
  (let [coef (coefficients-sgd train l-rate n-epoch)]
    (reset! last-coef coef)
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
  (let [ds (load-random-pngs 1000)
        mm (dataset-minmax ds)
        ds' (normalize-dataset ds mm)
        n-folds 5
        l-rate 0.1
        n-epoch 3
        scores (evaluate-algorithm ds'
                                   logistic-regression
                                   n-folds
                                   l-rate
                                   n-epoch)]
    scores))


#_ (-main)

#_ (predict (first (load-random-pngs* "C" 1))
         @last-coef)





#_ (

    (count
     (img/get-pixels
      (img/load-image-resource "notMNIST_small/A/SVRDR2FyYW1vbmRTdGQtQmQub3Rm.png")))

    (apply max
           (img/get-pixels
            (img/load-image-resource "notMNIST_small/A/SSBqdXN0IGNhbGwudHRm.png")))

    (println
     (seq
      (img/get-pixels
       (img/load-image-resource "notMNIST_small/A/SSBqdXN0IGNhbGwudHRm.png"))))

    (img/show
     (img/load-image-resource "notMNIST_small/A/SSBqdXN0IGNhbGwudHRm.png"))


    ;; create a new image
    (def bi (img/new-image 32 32))

    ;; gets the pixels of the image, as an int array
    (def pixels (img/get-pixels bi))

    ;; fill some random pixels with colours
    (dotimes [i 1024]
      (aset pixels i (img-clr/rand-colour)))

    ;; update the image with the newly changed pixel values
    (img/set-pixels bi pixels)

    ;; view our new work of art
    ;; the zoom function will automatically interpolate the pixel values
    (img/show bi :zoom 10.0 :title "Isn't it beautiful?")

    (take 100 (img/get-pixels bi))
    (apply max (img/get-pixels bi))

    (comment))
