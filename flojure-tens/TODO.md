x make session ns etc
x get basic stuff working again
x tensor type stuff, get-value etc
x variables
x variable takes id
x dedup by hash
x GraphRef for Op
x get basic nn example working
x const and variables takes seqs
x auto gen ops from protobuf
x import (gradient) nodes created by c++
x get src gen working again
x use -dashes- in op fn names
x clj graph to tensorboard
x resolve :control-inputs (as with :inputs)
x check for auto-gen overides during compile time
x docstrings for auto gen op fns
x clean up graph state
x cache macros by hash
x id scopes for gdo 

x gradient descent optimizer macro
 x 1s shape
 x graph building
 x learning rate arg
 x AddN
 
x more grad fns

- udacity 2
- next udacity!?!?

- Session.run delete things / clean up

- reorg-plan
- recursive hash???
- use `intern` to create op fn vars

- variable macro
- variable scope


- "init" NoOp takes init assignments as ctrl inputs
- :output-idx

- compile time vs run time op gen
- memory leaks stuff -- call delete on graph, tensors? other stuff?
- ref counting instead of hard lock?

- NN!?!!


-----
g++ -std=c++11 -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -fPIC -shared  -o libtensorflow_jni.so *.cc -ltensorflow
-----


-----
2089 [11:00:43] bill@bill-desktop: ~/repos/aiml-playground/flojure-tens/resources/proto
$ protoc --java_out=./ ./tensorflow/core/framework/*.proto
$ protoc --java_out=./ ./tensorflow/core/protobuf/*.proto
$ protoc --java_out=./ ./tensorflow/core/lib/core/*.proto
-----


find . -type f -print0 | xargs -0 sed -i 's/#include "tensorflow\/java\/src\/main\/native\//#include "/g'

find . -type f -print0 | xargs -0 sed -i 's/org_tensorflow/tfnative/g'


----
build 
run
fetch

run+fetch = fetch
build+run = exec
build+run+fetch = produce
