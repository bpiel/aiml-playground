(ns flojure-tens.scratch
  (:require [flojure-tens.thing2 :as t])
  (:import tfnative.Graph
           tfnative.OperationBuilder))

#_ (140294167222768

    
    
    (def gg (Graph.))

    (def h1 (Graph/allocate))
    (def oph1 (OperationBuilder/allocate h1 "Add" "nice"))
    (OperationBuilder/finish oph1)
    
    (.getOp (Graph.) h1 "h00000000")

    (def tfg (org.tensorflow.Graph.))

    (.ref tfg)

    )
 
(def gg (com.billpiel.flojure_tens.Graph. 123 {:aaa 333}))





















































