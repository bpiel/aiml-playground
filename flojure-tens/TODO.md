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
- gradient descent optimizer -- macros?
- :output-idx
- :subgraph
- compile time vs run time op gen
- -id op fns
- memory leaks stuff -- call delete on graph, tensors? other stuff?
- ref counting instead of hard lock?
- check for auto-gen overides during compile time
- docstrings for auto gen op fns

g++ -std=c++11 -Iinclude/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -fPIC -shared  -o xxxx.so *.cc

g++ -std=c++11 -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -fPIC -shared  -o libtensorflow_jni.so *.cc -ltensorflow

-----
2089 [11:00:43] bill@bill-desktop: ~/repos/aiml-playground/flojure-tens/resources/proto
$ protoc --java_out=./ ./tensorflow/core/framework/*.proto
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
