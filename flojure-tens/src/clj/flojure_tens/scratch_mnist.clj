(ns flojure-tens.scratch-mnist
  (:require [flojure-tens.core :as ft]
            [flojure-tens.dev :as d]
            [flojure-tens.ops :as o]
            [flojure-tens.plan-time-comps :as p]
            [flojure-tens.layers :as l]
            [flojure-tens.data-type :as dt]
            [flojure-tens.util :as ut]
            [clojure.java.io :as io]
            [flojure-tens.grad-desc-opt2 :as gdo2]
            flojure-tens.gradients2
            [flatland.protobuf.core :as pr])
  (:import [java.io DataInputStream File FileInputStream BufferedInputStream]
           [org.tensorflow.framework Summary]))

(def img-mean [0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 8.235294E-6 3.0718955E-5 1.4117647E-5 5.882353E-7 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 1.0457517E-6 3.5947712E-6 3.6405232E-5 9.522877E-5 1.7143793E-4 2.5137252E-4 4.711111E-4 6.3032686E-4 6.830718E-4 6.9581706E-4 7.4241817E-4 6.829412E-4 7.330719E-4 6.0254906E-4 3.9261443E-4 2.7934642E-4 2.1104574E-4 8.379085E-5 3.9542483E-5 1.3856209E-5 0.0 0.0 0.0 0.0 0.0 0.0 4.1830067E-6 2.745098E-6 2.72549E-5 2.150327E-5 1.8470587E-4 5.427451E-4 0.0010360129 0.0019867322 0.0033992154 0.0050591473 0.0073347134 0.009921359 0.012555363 0.014217847 0.014596005 0.0133041125 0.010991891 0.008017187 0.004714181 0.0024841172 0.001161438 3.685621E-4 1.3810459E-4 3.385621E-5 0.0 0.0 0.0 0.0 1.2679739E-5 2.2941176E-5 4.7124187E-5 2.7359478E-4 8.316993E-4 0.0021415683 0.004527123 0.008689808 0.014273051 0.021325527 0.029047318 0.038026564 0.046600487 0.051911492 0.05146931 0.046327632 0.03742625 0.026913961 0.016445676 0.008920134 0.0041609113 0.0016198688 6.356209E-4
 1.0888889E-4 1.0980392E-5 0.0 0.0 2.4836602E-6 2.0457519E-5 5.627452E-5 3.1718958E-4 0.0016086916 0.0040911045 0.009487399 0.01872844 0.0329194 0.05219742 0.07638207 0.106027 0.13808759 0.16408315 0.17746207 0.17387846 0.15349692 0.1228567 0.08989818 0.058161203 0.03396635 0.017835172 0.008380462 0.0033839194 8.14706E-4 1.1627452E-4 7.973857E-6 0.0 0.0 4.0457515E-5 2.4843137E-4 0.0015508491 0.0057388227 0.014069728 0.028344428 0.05104783 0.083208315 0.12353195 0.1733597 0.23099801 0.2894319 0.33374175 0.3552981 0.3487267 0.31444082 0.258602 0.19527195 0.13470615 0.08435358 0.048589654 0.02603584 0.011736158 0.003308494 5.554248E-4 1.8431374E-5 0.0 7.1895425E-7 1.07843145E-4 8.683659E-4 0.004390256 0.012901566 0.02916267 0.05590009 0.09465861 0.1462309 0.20829818 0.27809304 0.35011703 0.41660768 0.46473834 0.4866716 0.47731188 0.43935677 0.37690318 0.29477057 0.2119129 0.13848194 0.08232178 0.044872526 0.021128519 0.0072767995 0.0014615678 1.18823526E-4 3.0718954E-6 7.7385615E-5 4.2222234E-4 0.0023358809 0.009068237
 0.0232501 0.048769142 0.08804715 0.14233392 0.21136838 0.2892766 0.36903688 0.43757546 0.4902089 0.5206371 0.53099006 0.52290785 0.49678558 0.4452903 0.3676309 0.27364278 0.18366024 0.1103694 0.059612237 0.02758307 0.01012955 0.0020121569 1.2503269E-4 1.5947713E-5 1.9928103E-4 0.0012916337 0.0051660733 0.014698538 0.03326861 0.06595429 0.11606974 0.18404213 0.26708996 0.35409003 0.42540476 0.46838504 0.48390907 0.48251182 0.47977754 0.4813048 0.47900668 0.45593497 0.39455867 0.30321223 0.20744376 0.12474836 0.06414812 0.028179128 0.01022204 0.0018885623 1.0660132E-4 1.9084968E-5 3.116339E-4 0.002007908 0.006742677 0.017434552 0.0384576 0.076575145 0.13531446 0.21451549 0.30642784 0.38839376 0.43373805 0.4344722 0.41002265 0.38842574 0.38976473 0.40915525 0.4348413 0.43561035 0.38881806 0.30212513 0.20669225 0.12332833 0.060364008 0.023377042 0.0074430103 0.0013797381 1.1065359E-4 2.614379E-5 3.8653598E-4 0.0020511104 0.006566989 0.016819887 0.038731303 0.080547094 0.14584064 0.23417923 0.3270587 0.39305085 0.4045914
 0.36820963 0.32530826 0.31146395 0.33147398 0.36811587 0.40952614 0.4167978 0.3695038 0.2817662 0.18948172 0.1116803 0.052934323 0.018041197 0.004510194 8.6993445E-4 7.346405E-5 2.3267976E-5 2.996078E-4 0.0016505232 0.005021042 0.014298338 0.0374665 0.0828762 0.15629378 0.251333 0.34200338 0.38738257 0.3720351 0.32033107 0.28762022 0.29860958 0.3350044 0.38154605 0.42150953 0.4137708 0.34914163 0.25468734 0.16665672 0.099378005 0.049334537 0.01564659 0.0023707184 4.882353E-4 3.2026146E-5 1.4901962E-5 1.7130718E-4 9.491505E-4 0.003446338 0.0120346425 0.037676435 0.089326076 0.17088473 0.27047965 0.3539546 0.38390356 0.35719422 0.31257874 0.3112547 0.35035217 0.3988876 0.44329447 0.4611144 0.42128998 0.3314514 0.22975548 0.15005438 0.093096204 0.049851842 0.016841993 0.0017382347 3.128758E-4 3.9869286E-5 2.0915033E-6 7.156863E-5 4.8084965E-4 0.0023816978 0.011442476 0.04170286 0.10021221 0.18660526 0.2848357 0.35951144 0.37996235 0.3572509 0.3406599 0.38026622 0.4367616 0.48617825 0.5090597 0.4964835 0.4269917
 0.3182701 0.2165742 0.1459016 0.09401206 0.053505417 0.0200105 0.0022929402 3.2542486E-4 4.261438E-5 7.385621E-6 3.2352946E-5 2.1241828E-4 0.0018281693 0.0120219 0.048436698 0.111876264 0.19807483 0.2892222 0.3543956 0.3728579 0.36584195 0.38364863 0.45264313 0.5108637 0.5472858 0.5376631 0.5023097 0.41959506 0.3119794 0.21998802 0.15271936 0.100148045 0.05731914 0.022437582 0.0032168622 3.6254906E-4 8.692811E-6 2.875817E-6 1.51633985E-5 1.7686276E-4 0.001982679 0.013963014 0.056502946 0.12152423 0.20082495 0.2801629 0.33621088 0.3583626 0.3695831 0.41195613 0.48316687 0.5321318 0.54554385 0.51689214 0.47623363 0.39741972 0.30737382 0.22856267 0.16177031 0.105805494 0.05839492 0.022856038 0.0042335936 5.8124174E-4 4.2483658E-5 2.6143791E-6 1.5555555E-5 2.9150327E-4 0.002443005 0.017529288 0.064819895 0.12766822 0.19586411 0.26004902 0.3054414 0.328268 0.35078314 0.39662057 0.45435342 0.4959885 0.49972227 0.47474313 0.43615732 0.37401488 0.30335706 0.23375732 0.16486602 0.10482001 0.055855837 0.022021776 0.005047453
 7.5098017E-4 4.82353E-5 0.0 2.8562094E-5 4.4E-4 0.003738625 0.023342136 0.072645225 0.13118254 0.18892907 0.23710321 0.27144602 0.29287234 0.31661886 0.35132644 0.39981228 0.441641 0.4527023 0.44018424 0.40990493 0.36324596 0.30299106 0.23266357 0.16003454 0.0978159 0.05033294 0.020222146 0.0055555576 8.236601E-4 3.48366E-5 7.4509803E-6 2.0849673E-5 7.0784317E-4 0.005961375 0.029888116 0.08007084 0.13690679 0.18895352 0.22854002 0.2588049 0.281363 0.30033037 0.32597345 0.3730646 0.41787878 0.44001362 0.43666658 0.4118442 0.36713895 0.30050322 0.22236001 0.14809018 0.0884194 0.044636887 0.017957045 0.0050923508 6.036602E-4 4.777778E-5 9.803922E-7 4.777778E-5 0.0011228104 0.00801497 0.034209985 0.08523389 0.14444584 0.19992061 0.24451458 0.27950016 0.30541784 0.32406282 0.35281873 0.39767876 0.4409711 0.46198454 0.45461562 0.42131305 0.36188003 0.28189957 0.19921885 0.1282132 0.073620126 0.03590745 0.014274693 0.0041901926 5.7529414E-4 2.6797388E-5 0.0 5.9869286E-5 0.0013019603 0.008845755 0.03338461 0.08115408
 0.14543407 0.21095957 0.2700802 0.3182779 0.35453987 0.38387454 0.41857594 0.46016246 0.49001932 0.4923871 0.4636043 0.40708956 0.32893223 0.24014243 0.16059975 0.09782063 0.05344592 0.025637332 0.010642673 0.0029379071 4.379739E-4 6.601307E-6 2.0915033E-6 4.9803926E-5 0.0011146403 0.007212546 0.026010225 0.06627685 0.12866586 0.20224193 0.27617672 0.34217083 0.39602864 0.44101125 0.48077333 0.51127756 0.5170498 0.4896893 0.43148214 0.35085374 0.26114553 0.17881471 0.111988045 0.06390583 0.033378515 0.016114034 0.006678367 0.0017404573 2.3156864E-4 2.5490197E-6 2.0261439E-6 3.8562093E-6 7.3366007E-4 0.0042665335 0.01546837 0.04253107 0.09172879 0.15936916 0.23909813 0.31767344 0.38868204 0.44354287 0.48050162 0.49139518 0.47300637 0.42034584 0.343952 0.25872046 0.17778099 0.112670735 0.066288516 0.035927374 0.018466532 0.008725559 0.0032750308 7.4163405E-4 6.993464E-5 4.7058825E-6 0.0 0.0 2.51634E-4 0.0016422218 0.006794911 0.019665642 0.047180332 0.093883745 0.15787077 0.23095304 0.3030198 0.36091733 0.39100605
 0.38888952 0.35526934 0.29640844 0.22582948 0.1576238 0.099990115 0.05976434 0.033426315 0.0173303 0.008647325 0.0038496056 0.0012171239 2.2732026E-4 3.771242E-5 0.0 0.0 0.0 6.215687E-5 4.792156E-4 0.0021318947 0.006277852 0.016483605 0.03585736 0.065991186 0.106184565 0.14942694 0.18448718 0.20239016 0.19985346 0.17818797 0.14409773 0.10761553 0.07493621 0.047506824 0.028293835 0.015526778 0.007816403 0.0037303255 0.0015671892 3.9928113E-4 8.699347E-5 7.5816993E-6 0.0 0.0 0.0 6.1437913E-6 6.973856E-5 5.0111115E-4 0.0018607838 0.005511766 0.0124736475 0.02409177 0.03854408 0.05438975 0.06556264 0.07098104 0.06970807 0.061991215 0.051465217 0.04116901 0.030553687 0.020478142 0.012400503 0.0066326815 0.0032367955 0.0014532674 5.483008E-4 1.2261438E-4 1.3986928E-5 6.7973856E-6 0.0 0.0 0.0 0.0 2.4836602E-6 1.3901961E-4 6.395425E-4 0.0021109148 0.00470333 0.009082663 0.01377031 0.019020438 0.023451908 0.025273781 0.02454603 0.02184517 0.01745395 0.013862455 0.010163978 0.0066712406 0.0039552934 0.0021187582 9.349017E-4
 2.9516342E-4 6.3398686E-5 2.0261439E-6 3.8562093E-6 0.0 0.0 0.0 0.0 0.0 0.0 9.934641E-6 6.111111E-5 1.6326799E-4 3.49804E-4 5.028105E-4 7.715032E-4 0.0013177124 0.001686144 0.0020626797 0.0023164055 0.0026981696 0.0023218303 0.001893072 0.0013471241 7.860129E-4 3.4849677E-4 1.7895423E-4 7.562092E-5 5.9281047E-5 7.843138E-6 0.0 0.0 0.0 0.0])


(def TEST-CASE-COUNT 10000)
(def TRAIN-CASE-COUNT 60000)
(def SIZE 28)

(def mnist-path "mnist")

(defn ^DataInputStream mk-dis [name]
  (-> (str mnist-path name)
      io/resource
      io/input-stream
      (DataInputStream.)))

(defn normalize-img-byte [x]
  (float (- (/ x 255.0) 0.)))

(defn read-mnist-data
  [res-name n size]
  (with-open [^DataInputStream dis (mk-dis res-name)]
    (if (not= (.readInt dis) 2051)
      (throw (Error. "Wrong magic number")))
    (if (not= (.readInt dis) n)
      (throw (Error. "Unexpected image count")))  
    (if (not= (.readInt dis) size)
      (throw (Error. "Unexpected row count")))  
    (if (not= (.readInt dis) size)
      (throw (Error. "Unexpected column count")))  
    (vec (for [i (range n)]
           (vec (for [y (range size)
                      x (range size)]
                  (normalize-img-byte (.readUnsignedByte dis))))))))

(defn read-mnist-labels
  [res-name n]
  (with-open [^DataInputStream data-input-stream (mk-dis res-name)]
    (if (not= (.readInt data-input-stream) 2049)
      (throw (Error. "Wrong magic number")))
    (if (not= (.readInt data-input-stream) n)
      (throw (Error. "Unexpected image count")))
    (vec (for [i (range n)]
           (int (.readUnsignedByte data-input-stream))))))

(def train-data (future (read-mnist-data "/train-images-idx3-ubyte"
                                         TRAIN-CASE-COUNT
                                         SIZE)))

(def train-labels (future (read-mnist-labels "/train-labels-idx1-ubyte"
                                           TRAIN-CASE-COUNT)))

(def test-data (future (read-mnist-data "/t10k-images-idx3-ubyte"
                                         TEST-CASE-COUNT
                                         SIZE)))

(def test-labels (future (read-mnist-labels "/t10k-labels-idx1-ubyte"
                                      TEST-CASE-COUNT)))


#_(def xxx (ft/produce (o/mean (take 60000 @train-data) [0])))
#_ (println (vec xxx))

(ft/def-workspace ws1
  (let [{:keys [data logits hidden classes]}
        (ut/id$->> (o/placeholder :data
                                  dt/float-kw
                                  [-1 784])
                   (l/dense {:id :logits
                             :units 10})
                   (o/arg-max :classes $ 1))
        {:keys [labels loss opt]}
        (ut/id$->> (o/placeholder :labels
                                  dt/int-kw
                                  [-1])
                   (p/one-hot $ 10)
                   (o/softmax-cross-entropy-with-logits logits)
                   (p/reduce-mean :loss)
                   (p/grad-desc-opt :opt 0.2 ))
        acc (p/accuracy :acc
                        (o/cast-tf {:SrcT dt/long-kw :DstT dt/int-kw}
                                   classes)
                        labels)]
    {:auto [:build :train-test ]
     :build [acc opt]
     :train {:summaries [data acc loss logits]
             :targets [opt]
             :feed {:data (take 100 @train-data)
                    :labels (take 100 @train-labels)}
             :fetch []
             :steps 100
             :log-step-interval 10}
     :test {;:summaries [acc loss logits]
            :targets []
            :feed {:data (take 100 (reverse @test-data))
                   :labels (take 100 (reverse @test-labels))}}}))


(ft/def-workspace ws1
  (let [{:keys [data data2 logits hidden classes]}
        (ut/id$->> (o/placeholder :data
                                  dt/float-kw
                                  [-1 784])
                   (o/sub :data2 $ img-mean)
                   (l/dense {:id :logits
                             :units 10})
                   (o/arg-max :classes $ 1))
        {:keys [labels loss opt]}
        (ut/id$->> (o/placeholder :labels
                                  dt/int-kw
                                  [-1])
                   (p/one-hot $ 10)
                   (o/softmax-cross-entropy-with-logits logits)
                   (p/reduce-mean :loss)
                   (p/grad-desc-opt :opt 0.2 ))
        acc (p/accuracy :acc
                        (o/cast-tf {:SrcT dt/long-kw :DstT dt/int-kw}
                                   classes)
                        labels)]
    {:auto [:build :train-test ]
     :build [acc opt]
     :train {:summaries [data data2 acc loss logits]
             :targets [opt]
             :feed {:data (take 100 @train-data)
                    :labels (take 100 @train-labels)}
             :fetch []
             :steps 100
             :log-step-interval 10}
     :test {;:summaries [acc loss logits]
            :targets []
            :feed {:data (take 100 (reverse @test-data))
                   :labels (take 100 (reverse @test-labels))}}}))


(ft/def-workspace ws1
  (let [{:keys [data dense-1 logits hidden classes]}
        (ut/id$->> (o/placeholder :data
                                  dt/float-kw
                                  [-1 784])
                   (l/dense {:id :dense-1
                             :units 1024})
                   (p/dropout (o/placeholder :keep dt/float-kw []))
                   (l/dense {:id :logits
                             :units 10})
                   (o/arg-max :classes $ 1))
        alpha (o/placeholder :alpha dt/float-kw [])
        {:keys [labels loss opt]}
        (ut/id$->> (o/placeholder :labels
                                  dt/int-kw
                                  [-1])
                   (p/one-hot $ 10)
                   (o/softmax-cross-entropy-with-logits logits)
                   (p/reduce-mean :loss)
                   (p/grad-desc-opt :opt alpha))
        acc (p/accuracy :acc
                        (o/cast-tf {:SrcT dt/long-kw :DstT dt/int-kw}
                                   classes)
                        labels)]
    {:auto [:build :train-test]
                                        ;:tb-out "/home/bill/tf-logs/events.out.tfevents.1505700427.bill-desktop"
     :build [acc opt]
     :train {:summaries [alpha acc loss logits dense-1 ]
             :targets [opt]
             :feed {:data (take 100 @train-data)
                    :labels (take 100 @train-labels)
                    :keep 0.2
                    :alpha #_#(* 0.1 (Math/pow 0.99 %)) 0.05}
             :fetch []
             :steps 200
             :log-step-interval 10}
     :test {                            ;:summaries [acc loss logits]
            :targets []
            :feed {:data (take 100 (reverse @test-data))
                   :labels (take 100 (reverse @test-labels))
                   :keep 1.0
                   :alpha 0.05}}}))

(ft/def-workspace ws1
  (let [{:keys [data logits hidden conv1 conv2 classes]}
        (ut/id$->> (o/placeholder :data
                                  dt/float-kw
                                  [-1 784])
                   (o/sub :data2 $ img-mean)
                   (o/reshape $ [-1 28 28 1])
                   (l/conv2d {:id :conv1
                              :filters 32
                              :kernel-size [5 5]
                              :padding "SAME" ;; TODO
                              :activation o/relu})
                   (l/max-pooling2d {:pool-size [2 2]
                                     :strides [2 2]})
                   (l/conv2d {:id :conv2
                              :filters 64
                              :kernel-size [5 5]
                              :padding "SAME" ;; TODO
                              :activation o/relu})
                   (l/max-pooling2d {:pool-size [2 2]
                                     :strides [2 2]})
                   (o/reshape $ [-1
                                 (* 4 784)])
                   (l/dense {:activation o/relu
                             :units 1024})
                   (p/dropout (o/placeholder :keep dt/float-kw []))
                   (l/dense {:id :logits
                             :units 10})
                   (o/arg-max :classes $ 1))
        alpha (o/placeholder :alpha dt/float-kw [])
        {:keys [labels loss opt]}
        (ut/id$->> (o/placeholder :labels
                                  dt/int-kw
                                  [-1])
                   (p/one-hot $ 10)
                   (o/softmax-cross-entropy-with-logits logits)
                   (p/reduce-mean :loss)
                   (p/grad-desc-opt :opt alpha )) ;; start with 0.05??
        acc (p/accuracy :acc
                        (o/cast-tf {:SrcT dt/long-kw :DstT dt/int-kw}
                                   classes)
                        labels)]
    {:auto [:build :train-test ]
     :build [acc opt]
     :train {:summaries [data acc loss logits alpha conv1 conv2]
             :targets [opt]
             :feed {:data (take 400 @train-data) ;; start with 100 => 200
                    :labels (take 400 @train-labels) 
                    :keep 0.15
                    :alpha #(* 0.1 (Math/pow 0.99 %)) #_0.05}
             :fetch []
             :steps 100
             :log-step-interval 5}
     :test {                            ;:summaries [acc loss logits]
            :targets []
            :feed {:data (take 100 (reverse @test-data))
                   :labels (take 100 (reverse @test-labels))
                   :keep 1.
                   :alpha 0.05}}}))


