x make java use ".so" for osx
x switch linux to libtf 1.4-rc0 w/ libtf_fw


===============================================
^^^ DONE ^^^
===============================================

========================================
HIGHEST GOALS

- light public use
- public contributions
- serious public/work use


========================================

~~~~~~~~~~~~~~~~

10/24

- MSE
 - try in test ns
 - write
 - make test
- example project
- clojars


~~~~~~~~~~~~~~~~

========================================
HIGH GOALS

# to enable: light public use
 x FIX grad desc w/ c++ grads
 - native libs
   x mac
     x setup osx vm
   - win
   - GPU
 - example projects
   - what doesn't work????
     - dropout (no grad for floor)
     - softmax-cross-entropy-with-logits-var-var (no grad)
     - find alternate loss op
 - docs/README
   - overview
   - point to example projects
 ~ docstrings (in core.clj)
 - solid TB experience
 - videos?
 - web app fixes/improvements
 - canned goods?
 - fn api cleanup?
   - consistency issues?
 - move things to core? split files
 
# to enable: public contributions 
 - c++ grads docs
   x grep for missing grads
   x  prioritize grads
   - more docs/examples
 - docstrings (all nses)
 - docs/README
   - CONTRIBUTIONS.md
 - what to contribute?
   - provide foundation/examples
     - clean things up?
   - porting python?
 - tests
 - build process?
   - cmake?
   - cljs weirdness


# to enable: serious public/work use
 - pipeline/queues
   - recordreader
 - RNN/LSTM [BLOCKED]
 - save/restore variables
 - AdamOptimizer
  - apply-adam exists!
  - https://arxiv.org/pdf/1412.6980.pdf

 

========================================


========================================
LOW-LEVEL TODOS

- random path?
- export .so files for manual install?
- make tensorndarray immutable???
- CHANGELOG
- plugins added to ws, not globally
- split out dev tools????????????????????
- better tensor mem mgmt -- scopes?
- batch normalization?????
- c++ grads
  - SoftmaxCrossEntropyWithLogits
- indicate whether op has grad in docstring
- op attrs as map instead of vecs????
- placeholder defaults to float
- use `intern` to create op fn vars??
  -- will this be faster?
- many TODO comments
- macro plans have n-outputs key????????
- graphref sync stuff??
- fetch macro output by keyword 
  - aliases?
- autocast is messy
- centralize some errant type stuff
~ variable scope
   -- regularization
     --- try in python
     --- how to actually incorporate into loss function?
   -- other?
- c++ grads scoped by orig op name
- layers (so many!)
- auto-cast-inputs-fn ???
  - TShape
  - that other type attr?
- summary / logging hook?
- ref counting instead of hard lock?

========================================

- when to use a macro?
 - multiple outputs
 - access to build Ops
 - caching
 - simplicity of plan 
 
 
 
-----------cursor----------




==================================
vvvvvvv PRE 10/16/17 vvvvvvvvvvvvv
==================================





================
BIG PLAN

- defn-workspace (better name?)
 - CLI style? (:status :start :start-sync)
 - what does it do?
   - make ns (dev?)
   - closes out previous graph/session if overwriting (dev?)
   - build
   - train
     - batches
     - create summaries (dev?)
     - init vars
     - runs
     - logs summaries (dev?)
     - update status
     - final fetch?
   - predict
     - load vars?
     - fetch

x makes ns (named by defn-experiment symbol)
x captures summaries between runs

- :auto

- click node -> show histo-series chart
- click node -> set selected atom
- click node -> show scalar-series chart
- show source for selected
- expand/center/select node by $g/var


================




- tensors fed to session.run should either be deleted or cached (then deleted later)
 -- hmmmmmmmmmmmmmmmmmmmm
 -- tensors get created for attributes during op build.. release after op is built??

================

HOLY SHIT

- What's next?
- What's the vision?
- What to build?
- How to know what is right?????

estimators/experiments
visualizations
 - hist time series
 - click nodes and do things??
 - prettier?
 - charts?
random search

- What are the steps process am I trying to optimize?







================





========================================

Dev MNIST

todo:
- click on node, see values (chart, hist series)??

bugs to encounter:
- loss not reducing
- poorly scaled input
- NaNs (high learning rate)
- bad weight inits
- (un)even number of inputs per class
- vanishing gradients
- not zero-centered activation
- dead relus
- exploding gradients

dev process
- 2k iters
- 10 instances in training set
- simplest version first

http://russellsstewart.com/notes/0.html
https://hackernoon.com/how-to-debug-neural-networks-manual-dc2a200f10f2

========================================





- canned goods (canned nn solutions) -- as code generators



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~ fix variable scope
 -- allow layers to share
 -- :reuse?

- var scope
- id scope
- captured
- reuse -- only for variable
- root/nested

push-id-scope
push-var-scope
push-both-scopes
reuse?-var-scope
capture-var-scope

 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- TF GRADS
 -- Floor NONE
 -- RandomUniform NONE
 -- Range NONE
 xx L2Loss
 xx Conv2D
 xx MaxPool
 xx BiasAdd
 ~~ Sum
 ~~ Mean
 -- SoftmaxCrossEntropyWithLogits

- Get grad desc working again
 -- use new stuff, remove old stuff

~ fix references to '/home/bill'
  -- add `load` call to all java classes?
  x- tfnative/Graph.java
  x- tfnative/Tensor.java
  -- cases to support
    x- use embedded libtensorflow.so and libtensorflow_jni.so
    -- use embedded libtensorflow_jni.so ONLY
    -- use neither
    -- allow overrides from the top!!?!
      -- can guildsman access resources from including jar???????
      -- guildsman_conf.json???
    -- mac
    -- win?
  -- TODO
    x- test Wl,rpath
      -- compile libtensorflow_jni w/ Wl,rpath
      -- mv libtensorflow.so to /tmp
      -- run it
    x- java lib loader class?
    -- -Dguildsman.library.use_res ????

- write graphdef to tensorboard

- tensorboard/summary
 x- strings to tensors
 x- update jni/cc/java
   -- tensor/allocateScalarBytes



- helper fn to get outputs from plan/op

- macro plans have n-outputs key????????

~ auto-apply var-scope when building macros?? - DONE?

- graphref sync stuff??


- anything embarrassing
 - centralize some errant type stuff
 - autocast is messy

===============================================
MAKE REPO

- split out examples repo 
- README
  -- look at others' READMEs
  -- compiling and what not
  -- pre-build planning
- docstrings
- rename things
  - guildsman
  - tfjni?

===============================================


===============================================
GOAL

- Ready for work
  -- LSTM
  -- docs & docstrings
  -- dev tools?
  -- pipeline (see tf book)
   -- queues!!


===============================================

- c++ grads scoped by orig op name

- save/restore variables


- estimators

- tf.scan?


~ mnist/conv2d/maxpool2d/dense/dropout example
 - compare accuracy


- layers (so many!)
  - rnn/lstm!!!

- more udacity?


- work through lots of examples



- summary / logging hook?



- dev mode: cache const tensors (optionally), across graph builds

- dev mode!
  -- assoc meta
    --- stacktrace
    --- plan
  -- $g namespace w/ nodes as vars ?!?!?!?!
  -- preserve last graph&session in atom
- awesome repl debugger?
- insane debugging web app
  - select nodes by src file/line (via captured stacktrace)

- queues/recordreader

- reorg-plan ???

- "init" NoOp takes init assignments as ctrl inputs

- compile time vs run time op gen

- ref counting instead of hard lock?



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

initializer should take shape? dtype?



regulzrs take??????

variable will reshape initzr only if shape provided??


===============================



-----
g++ -std=c++11 -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -fPIC -shared  -o libtensorflow_jni.so *.cc -ltensorflow

g++ -std=c++11 -Wl,-rpath,"/tmp" -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -I/tmp -fPIC -shared  -o libtensorflow_jni.so *.cc -L/tmp  -ltensorflow

g++ -std=c++11 -Wl,-rpath,"\$ORIGIN" -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -I/tmp -fPIC -shared  -o libtensorflow_jni.so *.cc  -ltensorflow


g++ -std=c++11 -Wl,-rpath,"\$ORIGIN" -I/usr/lib/jvm/java-8-openjdk-amd64/include/ -I/usr/lib/jvm/java-8-openjdk-amd64/include/linux -L/tmp -fPIC -shared  -o libguildsman_jni.so *.cc  -ltensorflow

osx:
g++ -std=c++11 '-Wl,-rpath,/private/tmp' -I/System/Library/Frameworks/JavaVM.framework/Versions/A/Headers/ -L/tmp -fPIC -shared  -o libguildsman_jni.so *.cc  -ltensorflow
..but libs still have to live in /usr/local/lib

osx: actually works???!?!?!
g++ -std=c++11 '-Wl,-rpath,@loader_path' -I/System/Library/Frameworks/JavaVM.framework/Versions/A/Headers/ -L/tmp -fPIC -shared  -o libguildsman_jni.so *.cc  -ltensorflow

https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-${TF_TYPE}-${OS}-x86_64-1.3.0.tar.gz
https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-linux-x86_64-1.4.0-rc0.tar.gz


-----

ldd ./src_native/libtensorflow_jni.so


-----
2089 [11:00:43] bill@bill-desktop: ~/repos/aiml-playground/flojure-tens/resources/proto
$ protoc --java_out=./ ./tensorflow/core/framework/*.proto
$ protoc --java_out=./ ./tensorflow/core/protobuf/*.proto
$ protoc --java_out=./ ./tensorflow/core/lib/core/*.proto
$ protoc --java_out=./ ./tensorflow/core/util/*.proto
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




===============================================
tf symbol usage in example by freq





x    151 tf.Variable
x     89 tf.placeholder
x     78 tf.random_normal
     78 tf.float32
x     70 tf.matmul
x     67 tf.reduce_mean
x     65 tf.name_scope
x     58 tf.argmax
x    57 tf.Session
x     42 tf.nn.relu
x     39 tf.global_variables_initializer
x     39 tf.constant
x     38 tf.cast
x     36 tf.add
x     32 tf.zeros
     32 tf.estimator.EstimatorSpec
     31 tf.estimator.inputs.numpy_input_fn
     30 tf.app.run
x     28 tf.nn.softmax
x     25 tf.nn.softmax_cross_entropy_with_logits
x     24 tf.equal
x     23 tf.truncated_normal
x     22 tf.train.GradientDescentOptimizer
     22 tf.summary.scalar
x     20 tf.Graph
x     19 tf.layers.dense
x     17 tf.reshape
     17 tf.int32
     16 tf.train.AdamOptimizer
x     15 tf.reduce_sum
     15 tf.device
     14 tf.summary.histogram
x     14 tf.layers.conv2d
x     13 tf.multiply
x     12 tf.variable_scope
     12 tf.summary.FileWriter
x     12 tf.one_hot
     12 tf.estimator.ModeKeys.TRAIN
     11 tf.train.get_global_step
     11 tf.logging.info
     11 tf.feature_column.numeric_column
     11 tf.estimator.ModeKeys.PREDICT
     11 tf.estimator.Estimator
     10 tf.metrics.accuracy
-------------------------------------------- top 20%
     10 tf.losses.softmax_cross_entropy
      9 tf.summary.merge_all
      9 tf.logging.error
      8 tf.nn.sigmoid
      8 tf.logging.fatal
      8 tf.expand_dims
      7 tf.unstack
      7 tf.test.main
      7 tf.resource_loader.get_data_files_path
      7 tf.logging.set_verbosity
      7 tf.log
      7 tf.layers.max_pooling2d
      6 tf.trainable_variables
      6 tf.square
      6 tf.saved_model.utils.build_tensor_info
      6 tf.nn.conv2d
      6 tf.logging.INFO
      6 tf.group
      6 tf.GraphDef
      6 tf.gradients
      6 tf.gfile.Exists
      5 tf.train.Saver
      5 tf.train.AdagradOptimizer
      5 tf.test.TestCase
      5 tf.sqrt
      5 tf.pow
      5 tf.load_op_library
      5 tf.get_default_graph
      5 tf.feature_column.categorical_column_with_vocabulary_list
      5 tf.contrib.learn.datasets.load_dataset
      5 tf.ConfigProto
      4 tf.transpose
      4 tf.train.start_queue_runners
      4 tf.string
      4 tf.squeeze
      4 tf.reduce_max
      4 tf.random_uniform
      4 tf.nn.embedding_lookup
      4 tf.nn.dropout
      4 tf.logging.warning
      4 tf.layers.dropout
      4 tf.layers.batch_normalization
      4 tf.InteractiveSession
      4 tf.int16
      4 tf.import_graph_def
      4 tf.image.resize_bilinear
      4 tf.image.decode_jpeg
      4 tf.identity
      4 tf.h
      4 tf.FixedLenFeature
      4 tf.feature_column.indicator_column
      4 tf.estimator.DNNClassifier
      4 tf.add_n
      3 tf.train.exponential_decay
      3 tf.train.Coordinator
      3 tf.subtract
      3 tf.stack
      3 tf.sigmoid
      3 tf.shape
      3 tf.saved_model.signature_def_utils.build_signature_def
      3 tf.nn.max_pool
      3 tf.local_variables_initializer
      3 tf.GraphKeys.ASSET_FILEPATHS
      3 tf.gfile.MakeDirs
      3 tf.gfile.FastGFile
      3 tf.gfile.DeleteRecursively
      3 tf.feature_column.embedding_column
      3 tf.feature_column.crossed_column
      3 tf.errors.OutOfRangeError
      3 tf.contrib.rnn.static_rnn
      3 tf.contrib.learn.MetricSpec
      3 tf.contrib.learn.datasets.base.load_csv_without_header
      3 tf.compat.as_str
      3 tf.compat.as_bytes
      2 tf.uint8
      2 tf.train.slice_input_producer
      2 tf.train.RMSPropOptimizer
      2 tf.train.Feature
      2 tf.train.Example
      2 tf.train.batch
      2 tf.test.is_built_with_cuda
      2 tf.test.compute_gradient_error
      2 tf.tanh
      2 tf.saved_model.tag_constants.SERVING
      2 tf.saved_model.signature_constants.DEFAULT_SERVING_SIGNATURE_DEF_KEY
      2 tf.RunOptions.FULL_TRACE
      2 tf.RunOptions
      2 tf.RunMetadata
      2 tf.reduce_min
      2 tf.nn.xw_plus_b
      2 tf.nn.conv2d_transpose
      2 tf.nn.bias_add
      2 tf.negative
      2 tf.learn
      2 tf.gfile.GFile
      2 tf.get_collection
      2 tf.feature_column.categorical_column_with_hash_bucket
      2 tf.estimator.LinearClassifier
      2 tf.estimator.inputs.pandas_input_fn
      2 tf.estimator.DNNRegressor
      2 tf.control_dependencies
      2 tf.contrib.rnn.GRUCell
      2 tf.contrib.learn.preprocessing.VocabularyProcessor
      2 tf.contrib.learn.preprocessing.ByteProcessor
      2 tf.contrib.learn.datasets.DATASETS
      2 tf.contrib.learn.datasets.base.load_csv_with_header
      2 tf.contrib.layers.embed_sequence
      2 tf.concat
      2 tf.arg_min
      2 tf.abs
      1 tf.user_ops.my_fact
      1 tf.train.string_input_producer
      1 tf.train.shuffle_batch
      1 tf.train.QueueRunner
      1 tf.train.Optimizer.minimize
      1 tf.train.LoggingTensorHook
      1 tf.train.Int64List
      1 tf.train.Features
      1 tf.train.BytesList
      1 tf.to_int64
      1 tf.TFRecordReader
      1 tf.test.mock.patch.object
      1 tf.test.Benchmark.
      1 tf.test.Benchmark
      1 tf.summary.image
      1 tf.softmax
      1 tf.saved_model.signature_constants.REGRESS_OUTPUTS
      1 tf.saved_model.signature_constants.REGRESS_METHOD_NAME
      1 tf.saved_model.signature_constants.REGRESS_INPUTS
      1 tf.saved_model.signature_constants.PREDICT_METHOD_NAME
      1 tf.saved_model.signature_constants.CLASSIFY_OUTPUT_SCORES
      1 tf.saved_model.signature_constants.CLASSIFY_METHOD_NAME
      1 tf.saved_model.signature_constants.CLASSIFY_INPUTS
      1 tf.saved_model.main_op.main_op
      1 tf.saved_model.builder.SavedModelBuilder
      1 tf.read_file
      1 tf.range
      1 tf.random_crop
      1 tf.python_io.TFRecordWriter
      1 tf.placeholder_with_default
      1 tf.parse_single_example
      1 tf.parse_example
      1 tf.OptimizerOptions.ON_1
      1 tf.nn.sparse_softmax_cross_entropy_with_logits
      1 tf.nn.sampled_softmax_loss
      1 tf.nn.nce_loss
      1 tf.nn.in_top_k
      1 tf.nn.avg_pool
      1 tf.nce_loss
      1 tf.metrics.root_mean_squared_error
      1 tf.maximum
      1 tf.losses.mean_squared_error
      1 tf.logging.WARN
      1 tf.layers.
      1 tf.json
      1 tf.int64
      1 tf.image.random_flip_left_right
      1 tf.image.decode_png
      1 tf.image.decode_gif
      1 tf.image.decode_bmp
      1 tf.gfile.Open
      1 tf.gather
      1 tf.float64
      1 tf.feature_column.input_layer
      1 tf.feature_column.categorical_column_with_identity
      1 tf.feature_column.bucketized_column
      1 tf.estimator.RunConfig
      1 tf.estimator.DNNLinearCombinedClassifier
      1 tf.divide
      1 tf.decode_raw
      1 tf.contrib.rnn.BasicLSTMCell
      1 tf.contrib.metrics.streaming_recall
      1 tf.contrib.metrics.streaming_precision
      1 tf.contrib.metrics.streaming_accuracy
      1 tf.contrib.learn.RunConfig
      1 tf.contrib.learn.monitors.ValidationMonitor
      1 tf.contrib.learn.DNNClassifier
      1 tf.contrib.layers.real_valued_column
      1 tf.clip_by_global_norm
      1 tf.add_to_collection


abdeglnoruwy




grep -rh -o -P "(?<=RegisterGradient\(\")\w+" | sort > ~/pygrads.txt

grep -rh -o -P "(?<=REGISTER_GRADIENT_OP\(\")\w+" | sort > ~/ccgrad.txt


