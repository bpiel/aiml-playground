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
x id$->>

x? udacity 3

x (shitty though) default to float/int??

- more udacity?

~ mnist/conv2d/maxpool2d/dense/dropout example
 - compare accuracy
 - where's py logic to set max/min of rand-uni var inits?????????
 - SOMETIMES NaN?!?!?!

~ variable scope
  x compare tensboard for mnist clj/py -- weird, but seems correct
  - variable regularizer

===============================
VAR SCOPE

with-variable-scope
 - 2 arities
   - 1 arg takes captured scope
     - doesn't append to id scope
   - more args (named args?)
     - defines new scope
     - appends to id scope 
     - appends to var scope
     - uses mk-variable-scope

mk-variable-scope
 - same signature as 2nd arity of with-variable-scope?

v macro 
- needs to take initzr, regulzr etc
- init value can be const or initzr?

initzr should take shape? dtype?



regulzrs take??????

variable will reshape initzr only if shape provided??


===============================

- op attrs as map instead of vecs?

- fix "ASSUME THIS IS COOL"

- layers (so many!)
  - rnn/lstm!!!

- templates: activation, regularization, other?

- work through lots of examples

- fetch macro output by keyword 
  - aliases?
- auto-apply scope when building macros??
  - nil ids??

- auto-cast-inputs-fn ???
  - TShape
  - that other type attr?





- cache const tensors (optionally), across graph builds

- option to rebuild op fns w/ debugging
  -- attaches stacktrace to meta 

- do-steps???
- with-closables / with-closables-let

- awesome repl debugger?
- insane debugging web app

- macro plans have n-outputs key?

- helper fn to get outputs from plan/op

---- WHAT ARE THE GOALS??
 - implement all udacity assignments
 - OJ uses
 - ready for prod/public



- Session.run delete things / clean up
- memory leaks stuff -- call delete on graph, tensors? other stuff?

- reorg-plan ???
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
