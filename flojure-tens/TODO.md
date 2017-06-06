make GraphUtils in c++, java
copy/write one dummy static func



- c++ stub
- java loader -- copy from TF's NativeLib
- java stub
- compliment or replace java/c++ api?
 -- prob replace????????
  -- prob a nightmare?!?!?!? alternatives??
 -- how to reference tf libs from c++?
   -- how does tf_scala do it?
- gradient descent optimizer


g++ -std=c++11 -Iinclude/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -fPIC -shared  -o xxxx.so *.cc

g++ -std=c++11 -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -fPIC -shared  -o libtensorflow_jni.so *.cc -ltensorflow


find . -type f -print0 | xargs -0 sed -i 's/#include "tensorflow\/java\/src\/main\/native\//#include "/g'

find . -type f -print0 | xargs -0 sed -i 's/org_tensorflow/tfnative/g'
