# These are all the modules we'll be using later. Make sure you can import them
# before proceeding further.
from __future__ import print_function
import numpy as np
import tensorflow as tf
from six.moves import cPickle as pickle
from six.moves import range
from tensorflow.python.platform import gfile


pickle_file = 'notMNIST.pickle'

with open(pickle_file, 'rb') as f:
  save = pickle.load(f)
  train_dataset = save['train_dataset']
  train_labels = save['train_labels']
  valid_dataset = save['valid_dataset']
  valid_labels = save['valid_labels']
  test_dataset = save['test_dataset']
  test_labels = save['test_labels']
  del save  # hint to help gc free up memory
  print('Training set', train_dataset.shape, train_labels.shape)
  print('Validation set', valid_dataset.shape, valid_labels.shape)
  print('Test set', test_dataset.shape, test_labels.shape)

image_size = 28
num_labels = 10


def reformat(dataset, labels):
  dataset = dataset.reshape((-1, image_size * image_size)).astype(np.float32)
  # Map 0 to [1.0, 0.0, 0.0 ...], 1 to [0.0, 1.0, 0.0 ...]
  labels = (np.arange(num_labels) == labels[:,None]).astype(np.float32)
  return dataset, labels
train_dataset, train_labels = reformat(train_dataset, train_labels)
valid_dataset, valid_labels = reformat(valid_dataset, valid_labels)
test_dataset, test_labels = reformat(test_dataset, test_labels)
print('Training set', train_dataset.shape, train_labels.shape)
print('Validation set', valid_dataset.shape, valid_labels.shape)
print('Test set', test_dataset.shape, test_labels.shape)



batch_size = 128
n_hidden_nodes = 1024


graph = tf.Graph()
with graph.as_default():

  # Input data. For the training data, we use a placeholder that will be fed
  # at run time with a training minibatch.
  tf_train_dataset = tf.placeholder(tf.float32,
                                    shape=(batch_size, image_size * image_size))
  tf_train_labels = tf.placeholder(tf.float32, shape=(batch_size, num_labels))
  tf_valid_dataset = tf.constant(valid_dataset)
  tf_test_dataset = tf.constant(test_dataset)
  
  # Variables.
  weights_01 = tf.Variable(
    tf.truncated_normal([image_size * image_size, n_hidden_nodes]))
  weights_12 = tf.Variable(tf.truncated_normal([n_hidden_nodes, num_labels]))
  biases_01 = tf.Variable(tf.zeros([n_hidden_nodes]))
  biases_12 = tf.Variable(tf.zeros([num_labels]))
  
  # Training computation.
  z_01= tf.matmul(tf_train_dataset, weights_01) + biases_01
  h1 = tf.nn.relu(z_01)
  z_12 = tf.matmul(h1, weights_12) + biases_12
  loss = tf.reduce_mean(
    tf.nn.softmax_cross_entropy_with_logits(logits=z_12, labels=tf_train_labels))
  
  # Optimizer.
  optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(loss)
  
  # Predictions for the training, validation, and test data.
  train_prediction = tf.nn.softmax(z_12)
  valid_prediction = tf.nn.softmax(
    tf.matmul(tf.nn.relu(tf.matmul(tf_valid_dataset, weights_01) + biases_01), weights_12) + biases_12)
  test_prediction = tf.nn.softmax(
    tf.matmul(tf.nn.relu(tf.matmul(tf_test_dataset, weights_01) + biases_01), weights_12) + biases_12)




with tf.Session(graph=graph) as session:
  tf.initialize_all_variables().run()
  LOGDIR='/home/bill/tf-logs'
  train_writer = tf.summary.FileWriter(LOGDIR)
  train_writer.add_graph(session.graph)



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

