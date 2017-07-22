# These are all the modules we'll be using later. Make sure you can import them
# before proceeding further.
from __future__ import print_function
import numpy as np
import tensorflow as tf
from six.moves import cPickle as pickle
from six.moves import range
from tensorflow.python.platform import gfile

with tf.name_scope("name1"):
    with tf.variable_scope("scope1"):
        v1 = tf.get_variable('v1',shape=[1])
        o1 = tf.reshape([1],[1])

print(v1.name)
print(o1.name)
