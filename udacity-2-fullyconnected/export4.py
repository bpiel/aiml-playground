# These are all the modules we'll be using later. Make sure you can import them
# before proceeding further.
from __future__ import print_function
import numpy as np
import tensorflow as tf
from six.moves import cPickle as pickle
from six.moves import range
from tensorflow.python.platform import gfile

graph = tf.Graph()
with graph.as_default():

    # element_size = 28 ; time_steps = 28 ; num_classes = 10
    # batch_size = 128 ; hidden_layer_size = 128
    # _inputs = tf.placeholder ( tf.float32 , shape = [ None , time_steps , element_size ], name = 'inputs' )
    # y = tf.placeholder ( tf.float32 , shape = [ None , num_classes ], name = 'inputs' )#TensorFlow built-in functions
    # rnn_cell = tf.contrib.rnn.BasicRNNCell ( hidden_layer_size )
    # outputs , _ = tf.nn.dynamic_rnn ( rnn_cell , _inputs , dtype = tf.float32 )
    # Wl = tf.Variable ( tf.truncated_normal ([ hidden_layer_size , num_classes ], mean = 0 , stddev =.01 ))
    # bl = tf.Variable ( tf.truncated_normal ([ num_classes ], mean = 0 , stddev =.01 ))

    # def get_linear_layer ( vector ):
    #     return tf.matmul ( vector , Wl ) + bl

    # last_rnn_output = outputs [:, - 1 ,:]
    # final_output = get_linear_layer ( last_rnn_output )
    # softmax = tf.nn.softmax_cross_entropy_with_logits ( logits = final_output , labels = y )
    # cross_entropy = tf.reduce_mean ( softmax )
    # train_step = tf.train.RMSPropOptimizer ( 0.001 , 0.9 ).minimize ( cross_entropy )

    i = tf.constant(0, name="i")
    s = tf.constant(2, name="s")
    c = lambda i, s: tf.less(i, 10)
    b = lambda i, s: [tf.add(i, 1), tf.add(i, s)]
    wl, r_self = tf.while_loop(c, b, [i, s])

    
with tf.Session(graph=graph) as session:

  tf.global_variables_initializer().run()



# graph2 = tf.Graph()

print(tf.__version__)

filename = 'py2.mgpb'

tf.train.export_meta_graph(filename=filename,graph=graph)
new_saver = tf.train.import_meta_graph(filename)
print(new_saver)



# with tf.Session() as sess:
#   new_saver = tf.train.import_meta_graph('metagraph2.pb')
#   print(new_saver);
#   new_saver.restore(sess, 'my-save-dir/my-model-10000')
#   # tf.get_collection() returns a list. In this example we only want the
#   # first one.
#   train_op = tf.get_collection('train_op')[0]
#   print(train_op)

