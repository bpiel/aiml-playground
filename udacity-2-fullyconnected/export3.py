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

    x1 = tf.get_variable("x1", [1], regularizer=tf.contrib.layers.l2_regularizer(0.8))
    x2 = tf.get_variable("x2", [1], regularizer=tf.contrib.layers.l2_regularizer(0.8))


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

