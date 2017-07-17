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
x :output-idx
x random init fns

x gradient descent optimizer macro
 x 1s shape
 x graph building
 x learning rate arg
 x AddN
 
x more grad fns
x variable macro
x reorg nses

x udacity 2
 x actually do notMNIST
x id-attr as first arg for ops

x? udacity 3

- variable scope
  - variable regularizer
- layers (so many!)

- work through lots of examples


- auto-cast-inputs-fn ???

- option to rebuild op fns w/ debugging
  -- attaches stacktrace to meta 

- do-steps???

- awesome repl debugger?
- insane debugging web app

---- WHAT ARE THE GOALS??
 - implement all udacity assignments
 - OJ uses
 - ready for prod/public



- with-let ??
- Session.run delete things / clean up
- memory leaks stuff -- call delete on graph, tensors? other stuff?

- reorg-plan
- use `intern` to create op fn vars





- "init" NoOp takes init assignments as ctrl inputs

- compile time vs run time op gen

- ref counting instead of hard lock?

- when to use a macro?
 - multiple outputs
 - access to build Ops
 - caching
 - simplicity of plan


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
