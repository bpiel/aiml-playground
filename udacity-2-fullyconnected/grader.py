# grader

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import tensorflow as tf
from tensorflow.core.framework import graph_pb2
from tensorflow.python.client import session
from tensorflow.python.framework import importer
from tensorflow.python.framework import ops
from tensorflow.python.platform import gfile
from tensorflow.python.summary import summary


## MatMul
graph = tf.Graph()
with graph.as_default():

    x1 = tf.Variable([[0.2], [0.7]])
    x2 = tf.Variable([[0.3 , 0.6]])
    dy1 = tf.Variable([[1.0, 1.0], [1.0, 1.0]])
    
    y = tf.matmul(x1, x2)

    tf.gradients(y, [x1, x2], grad_ys=dy1)
#    optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(y)

filename = 'matmul.mgpb'
tf.train.export_meta_graph(filename=filename,graph=graph)



## add
graph = tf.Graph()
with graph.as_default():

    x1 = tf.Variable([[0.2, 0.7]])
    x2 = tf.Variable([[0.3 , 0.6]])
    dy1 = tf.Variable([[1.0, 1.0]])
    
    y = tf.add(x1, x2)

    tf.gradients(y, [x1, x2], grad_ys=dy1)

filename = 'add.mgpb'
tf.train.export_meta_graph(filename=filename,graph=graph)


## add scalars
graph = tf.Graph()
with graph.as_default():

    x1 = tf.Variable(1.0)
    x2 = tf.Variable(2.0)
    dy1 = tf.Variable(1.0)
    
    y = tf.add(x1, x2)

    tf.gradients(y, [x1, x2], grad_ys=dy1)

filename = 'add-scalar.mgpb'
tf.train.export_meta_graph(filename=filename,graph=graph)


## sub
graph = tf.Graph()
with graph.as_default():

    x1 = tf.Variable([[0.2, 0.7]])
    x2 = tf.Variable([[0.3 , 0.6]])
    dy1 = tf.Variable([[1.0, 1.0]])
    
    y = tf.subtract(x1, x2)

    tf.gradients(y, [x1, x2], grad_ys=dy1)

filename = 'sub.mgpb'
tf.train.export_meta_graph(filename=filename,graph=graph)


## sin
graph = tf.Graph()
with graph.as_default():

    x1 = tf.Variable([[0.2, 0.7]],name="x1")
    dy1 = tf.Variable([[1.0, 1.0]],name="dy1")
    
    y = tf.sin(x1)

    grads = tf.gradients(y, x1, grad_ys=dy1);
    gi1 = tf.identity(grads[0],name="g1")

filename = 'sin.mgpb'
tf.train.export_meta_graph(filename=filename,graph=graph)
