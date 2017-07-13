# These are all the modules we'll be using later. Make sure you can import them
# before proceeding further.
import numpy as np
import tensorflow as tf
from six.moves import cPickle as pickle

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
    # Map 2 to [0.0, 1.0, 0.0 ...], 3 to [0.0, 0.0, 1.0 ...]
    labels = (np.arange(num_labels) == labels[:,None]).astype(np.float32)
    return dataset, labels
train_dataset, train_labels = reformat(train_dataset, train_labels)
valid_dataset, valid_labels = reformat(valid_dataset, valid_labels)
test_dataset, test_labels = reformat(test_dataset, test_labels)
print('Training set', train_dataset.shape, train_labels.shape)
print('Validation set', valid_dataset.shape, valid_labels.shape)
print('Test set', test_dataset.shape, test_labels.shape)



def accuracy(predictions, labels):
  return (100.0 * np.sum(np.argmax(predictions, 1) == np.argmax(labels, 1))
          / predictions.shape[0])


# Problem 1
# Introduce and tune L2 regularization for both logistic and neural network models.
# Remember that L2 amounts to adding a penalty on the norm of the weights to the loss.
# In TensorFlow, you can compue the L2 loss for a tensor t using nn.l2_loss(t).
# The right amount of regularization should improve your validation / test accuracy.

n_hidden = 1024
L2_weight = 0.5e-3


def forward(tf_X):
    """
    assert tf.shape(tf_X)[1] == image_size*image_size,\
        "Training data not of correct shape. Each input should be of shape: %s" % (image_size*image_size)
    """
    with tf.name_scope('hidden1'):
        weights = tf.Variable(tf.truncated_normal([image_size*image_size, n_hidden]), name="weights")
        biases = tf.Variable(tf.zeros([n_hidden]), name="biases")
        z01 = tf.matmul(tf_X, weights) + biases
        hidden1 = tf.nn.relu(z01)
        l2_reg_01 = tf.nn.l2_loss(weights)
    with tf.name_scope('z12'):
        weights = tf.Variable(tf.truncated_normal([n_hidden, num_labels]), name="weights")
        biases = tf.Variable(tf.zeros([num_labels]), name="biases")
        z12 = tf.matmul(hidden1, weights) + biases
        l2_reg_12 = tf.nn.l2_loss(weights)
    return z12, l2_reg_01+l2_reg_12

# Define loss
def get_loss(z12, l2_loss, tf_Y):
    """
    assert tf.shape(tf_X)[1] == image_size*image_size,\
        "Training data not of correct shape. got %s require %s" % (tf.shape(tf_X)[1], image_size*image_size)
    assert tf.shape(tf_Y)[1] == num_labels,\
        "Training data not of correct shape. got %s require %s" % (tf.shape(tf_Y)[1], num_labels)
    """
    loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(logits=z12, labels=tf_training_labels))
    total_loss = loss + L2_weight*l2_loss
    return total_loss

# Define the network graph
graph = tf.Graph()
with graph.as_default():
    #tf_training_dataset = tf.placeholder(tf.float32, shape=(batch_size, image_size*image_size))
    #tf_training_labels = tf.placeholder(tf.float32, shape=(batch_size, num_labels))
    tf_training_dataset = tf.placeholder(tf.float32) # Should have shape (batch_size, image_size*image_size)
    tf_training_labels = tf.placeholder(tf.float32) # Should have shape (batch_size, num_labels)
    
    z12, l2_loss = forward(tf_training_dataset)
    total_loss = get_loss(z12, l2_loss, tf_training_labels)
    optimizer = tf.train.GradientDescentOptimizer(0.5).minimize(total_loss)


# filename = 'py2.mgpb'
# tf.train.export_meta_graph(filename=filename,graph=graph)
# print("exported")
    
# train the model
num_steps = 10
batch_size = 200
with tf.Session(graph=graph) as session:
    tf.initialize_all_variables().run()
    print("Initialized, using batch size: %s" % batch_size)
    for step in range(num_steps):
        #idx = _np.random.randint(train_dataset.shape[0], size=batch_size)
        #offset = (step * batch_size) % (train_labels.shape[0] - batch_size)
        offset = 0
        # Generate a minibatch.
        batch_data = train_dataset[offset:(offset + batch_size), :]
        batch_labels = train_labels[offset:(offset + batch_size), :]
        #batch_data = train_dataset[offset:(offset + batch_size), :]
        #batch_labels = train_labels[offset:(offset + batch_size), :]
        feed_dict = {tf_training_dataset : batch_data, tf_training_labels : batch_labels}
        _, l, predictions = session.run([optimizer, total_loss, z12], feed_dict=feed_dict)
        if (step % 500 == 0):
            #batch_size += 100
            print("Updated batch size: %s" % batch_size)
            print("Minibatch loss at step", step, ":", l)
            print("Minibatch accuracy: %.1f%%" % accuracy(predictions, batch_labels))
            predictions = session.run(z12, feed_dict={tf_training_dataset: valid_dataset})
            print("Validation accuracy: %.1f%%" % accuracy(predictions, valid_labels))
    predictions = session.run(z12, feed_dict={tf_training_dataset: test_dataset})
    print("Test accuracy: %.1f%%" % accuracy(predictions, test_labels))


