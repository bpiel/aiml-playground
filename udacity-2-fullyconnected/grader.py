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


def import_to_tensorboard(model_dir, log_dir):
  """View an imported protobuf model (`.pb` file) as a graph in Tensorboard.

  Args:
    model_dir: The location of the protobuf (`pb`) model to visualize
    log_dir: The location for the Tensorboard log to begin visualization from.

  Usage:
    Call this function with your model location and desired log directory.
    Launch Tensorboard by pointing it to the log directory.
    View your imported `.pb` model as a graph.
  """
  with session.Session(graph=ops.Graph()) as sess:
    # new_saver = tf.train.import_meta_graph('in.pb')
    with gfile.FastGFile(model_dir, "rb") as f:
       graph_def = graph_pb2.GraphDef()
       graph_def.ParseFromString(f.read())
       importer.import_graph_def(graph_def,name="")

    a = tf.get_variable('a')

    # print([op for op in tf.get_default_graph().get_operations() if op.op_def and op.op_def.name=='VariableV2'])
    # y = sess.graph.get_operation_by_name("y")
    y =  sess.graph.get_tensor_by_name("y:0")
    
    optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(y, var_list=(a,b))
       
    pb_visual_writer = summary.FileWriter(log_dir)
    pb_visual_writer.add_graph(sess.graph)
    print("Model Imported. Visualize by running: "
          "> tensorboard --logdir={}".format(log_dir))

import_to_tensorboard('in.pb', '/home/bill/tf-logs')
