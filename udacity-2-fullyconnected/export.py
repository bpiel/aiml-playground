# These are all the modules we'll be using later. Make sure you can import them
# before proceeding further.
from __future__ import print_function
import numpy as np
import tensorflow as tf
from six.moves import cPickle as pickle
from six.moves import range
from tensorflow.python.platform import gfile

pickle_file = 'notMNIST.pickle'

# with open(pickle_file, 'rb') as f:
#   save = pickle.load(f)
#   train_dataset = save['train_dataset']
#   train_labels = save['train_labels']
#   valid_dataset = save['valid_dataset']
#   valid_labels = save['valid_labels']
#   test_dataset = save['test_dataset']
#   test_labels = save['test_labels']
#   del save  # hint to help gc free up memory
#   print('Training set', train_dataset.shape, train_labels.shape)
#   print('Validation set', valid_dataset.shape, valid_labels.shape)
#   print('Test set', test_dataset.shape, test_labels.shape)


# Training set (200000, 28, 28) (200000,)
# Validation set (10000, 28, 28) (10000,)
# Test set (18724, 28, 28) (18724,)

# Reformat into a shape that's more adapted to the models we're going to train:
# - data as a flat matrix,
# - labels as float 1-hot encodings.


image_size = 1
num_labels = 1

# def reformat(dataset, labels):
#   dataset = dataset.reshape((-1, image_size * image_size)).astype(np.float32)
#   # Map 0 to [1.0, 0.0, 0.0 ...], 1 to [0.0, 1.0, 0.0 ...]
#   labels = (np.arange(num_labels) == labels[:,None]).astype(np.float32)
#   return dataset, labels
# train_dataset, train_labels = reformat(train_dataset, train_labels)
# valid_dataset, valid_labels = reformat(valid_dataset, valid_labels)
# test_dataset, test_labels = reformat(test_dataset, test_labels)
# print('Training set', train_dataset.shape, train_labels.shape)
# print('Validation set', valid_dataset.shape, valid_labels.shape)
# print('Test set', test_dataset.shape, test_labels.shape)


# Training set (200000, 784) (200000, 10)
# Validation set (10000, 784) (10000, 10)
# Test set (18724, 784) (18724, 10)

# We're first going to train a multinomial logistic regression using simple gradient descent.
# TensorFlow works like this:
# First you describe the computation that you want to see performed: what the inputs, the variables, and the operations look like. These get created as nodes over a computation graph. This description is all contained within the block below:
# with graph.as_default():
#     ...
# Then you can run the operations on this graph as many times as you want by calling session.run(), providing it outputs to fetch from the graph that get returned. This runtime operation is all contained in the block below:
# with tf.Session(graph=graph) as session:
#     ...
# Let's load all the data into TensorFlow and build the computation graph corresponding to our training:

# With gradient descent training, even this much data is prohibitive.
# Subset the training data for faster turnaround.
train_subset = 2

graph = tf.Graph()
with graph.as_default():

    x1 = tf.Variable([[0.2], [0.7]])
    x2 = tf.Variable([[0.3 , 0.6]])

    print(x1)
    
    y = tf.matmul(tf.matmul(x1, x2),  tf.sin(x1))
    print(y)    

    optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(y)

with tf.Session(graph=graph) as session:

  tf.global_variables_initializer().run()

  l = session.run([optimizer])

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

