# These are all the modules we'll be using later. Make sure you can import them
# before proceeding further.
from __future__ import print_function
import numpy as np
import tensorflow as tf
from six.moves import cPickle as pickle
from six.moves import range
from tensorflow.python.platform import gfile


def accuracy(predictions, labels):
  return ( np.sum(np.argmax(predictions, 1) == np.argmax(labels, 1))
          / predictions.shape[0])


num_labels = 3
image_size = 2
batch_size = 16
n_hidden_nodes = 1024

batch_data = [
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 1.0],
    [0.0, 0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0, 1.0],
    [0.0, 1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0, 1.0],
    [0.0, 1.0, 1.0, 0.0],
    [0.0, 1.0, 1.0, 1.0],
    [1.0, 0.0, 0.0, 0.0],
    [1.0, 0.0, 0.0, 1.0],
    [1.0, 0.0, 1.0, 0.0],
    [1.0, 0.0, 1.0, 1.0],
    [1.0, 1.0, 0.0, 0.0],
    [1.0, 1.0, 0.0, 1.0],
    [1.0, 1.0, 1.0, 0.0],
    [1.0, 1.0, 1.0, 1.0]
]

batch_labels = [
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
    [1.0, 0.0, 0.0]
]

valid_dataset = batch_data
test_dataset = batch_data
valid_labels = batch_labels
test_labels = batch_labels

w01 = [[1.1, 0.2, 0.3],
       [1.4, 0.5, 0.6],
       [1.7, 0.8, 0.9],
       [1.1, 0.4, 0.7]]

w12 = [[0.1, 0.2, 0.3],
       [0.4, 0.5, 0.6],
       [0.7, 0.8, 0.9]]

graph = tf.Graph()
with graph.as_default():

  # Input data. For the training data, we use a placeholder that will be fed
  # at run time with a training minibatch.
  tf_train_dataset = tf.constant(test_dataset)
  #tf.placeholder(tf.float32, shape=(batch_size, image_size * image_size))
  tf_train_labels = tf.constant(test_labels)
  #tf.placeholder(tf.float32, shape=(batch_size, num_labels))
  tf_valid_dataset = tf.constant(valid_dataset)
  tf_test_dataset = tf.constant(test_dataset)
  
  # Variables.
  #weights_01 = tf.Variable(w01)
  weights_01 = tf.Variable(tf.truncated_normal([image_size * image_size, n_hidden_nodes]))
  #weights_12 = tf.Variable(w12)
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




num_steps = 2

# with tf.Session(graph=graph) as session:
#   tf.initialize_all_variables().run()
#   print("Initialized")
#   for step in range(num_steps):
      
#     feed_dict = {tf_train_dataset : batch_data, tf_train_labels : batch_labels}
#     _, l, predictions = session.run(
#       [optimizer, loss, train_prediction], feed_dict=feed_dict)
#     if (step % 1 == 0):
#       print("Minibatch loss at step", step, ":", l)
#       print("Minibatch accuracy: %.1f%%" % accuracy(predictions, batch_labels))
#       print("Validation accuracy: %.1f%%" % accuracy(
#         valid_prediction.eval(), valid_labels))
#   print("Test accuracy: %.1f%%" % accuracy(test_prediction.eval(), test_labels))


def doit():
  with tf.Session(graph=graph) as session:
    tf.initialize_all_variables().run()
    for step in range(num_steps):
      
      feed_dict = {tf_train_dataset : batch_data, tf_train_labels : batch_labels}
      _, l, predictions = session.run([optimizer, loss, train_prediction])
    return accuracy(test_prediction.eval(), test_labels)

print( sum( doit() for n in range(100)))


