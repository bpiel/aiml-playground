x make session ns etc
x get basic stuff working again
x tensor type stuff, get-value etc
- variables
- variable takes id
- GraphRef for Op
- get basic nn example working
- gradient descent optimizer


g++ -std=c++11 -Iinclude/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -fPIC -shared  -o xxxx.so *.cc

g++ -std=c++11 -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -fPIC -shared  -o libtensorflow_jni.so *.cc -ltensorflow


find . -type f -print0 | xargs -0 sed -i 's/#include "tensorflow\/java\/src\/main\/native\//#include "/g'

find . -type f -print0 | xargs -0 sed -i 's/org_tensorflow/tfnative/g'
