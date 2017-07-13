# These are all the modules we'll be using later. Make sure you can import them
# before proceeding further.
# %matplotlib inline

import matplotlib.pyplot as plt
import numpy as np
import os
import tarfile
import urllib
from urllib.request import urlretrieve

from IPython.display import display, Image
#from IPython.display import display
import PIL # pip install pillow

from scipy import ndimage
from sklearn.linear_model import LogisticRegression
import _pickle as pickle

from sklearn.metrics import confusion_matrix, precision_recall_fscore_support, classification_report


url = 'http://yaroslavvb.com/upload/notMNIST/'

def maybe_download(filename, expected_bytes):
  """Download a file if not present, and make sure it's the right size."""
  if not os.path.exists(filename):
    filename, _ = urlretrieve(url + filename, filename)
  statinfo = os.stat(filename)
  if statinfo.st_size == expected_bytes:
    print('Found and verified', filename)
  else:
    raise Exception(
      'Failed to verify' + filename + '. Can you get to it with a browser?')
  return filename

train_filename = maybe_download('notMNIST_large.tar.gz', 247336696)
test_filename = maybe_download('notMNIST_small.tar.gz', 8458043)



num_classes = 10

def extract(filename):
  root = os.path.splitext(os.path.splitext(filename)[0])[0]  # remove .tar.gz
  if not os.path.exists(root):
      tar = tarfile.open(filename)
      tar.extractall()
      tar.close()
  data_folders = [os.path.join(root, d) for d in sorted(os.listdir(root))]
  if len(data_folders) != num_classes:
    raise Exception(
      'Expected %d folders, one per class. Found %d instead.' % (
        num_classes, len(data_folders)))
  print(data_folders)
  return data_folders
  
train_folders = extract(train_filename)
test_folders = extract(test_filename)



# ===========================
# Problem 1

# Let's take a peek at some of the data to make sure it looks sensible. Each exemplar should be an image of a character A through J rendered in a different font. Display a sample of the images that we just downloaded. Hint: you can use the package IPython.display.


display(Image("notMNIST_small/A/MDEtMDEtMDAudHRm.png"), Image("notMNIST_small/D/MDEtMDEtMDAudHRm.png"))
display(Image("notMNIST_small/D/MDEtMDEtMDAudHRm.png"))
display(Image("notMNIST_small/C/MDEtMDEtMDAudHRm.png"))
display(Image("notMNIST_small/B/MDEtMDEtMDAudHRm.png"))


# Now let's load the data in a more manageable format.

# We'll convert the entire dataset into a 3D array (image index, x, y) of floating point values, normalized to have approximately zero mean and standard deviation ~0.5 to make training easier down the road. The labels will be stored into a separate array of integers 0 through 9.

# A few images might not be readable, we'll just skip them.



image_size = 28  # Pixel width and height.
pixel_depth = 255.0  # Number of levels per pixel.

def load(data_folders, min_num_images, max_num_images):
  dataset = np.ndarray(
    shape=(max_num_images, image_size, image_size), dtype=np.float32)
  labels = np.ndarray(shape=(max_num_images), dtype=np.int32)
  label_index = 0
  image_index = 0
  for folder in data_folders:
    print(folder)
    for image in os.listdir(folder):
      if image_index >= max_num_images:
        raise Exception('More images than expected: %d >= %d' % (
          num_images, max_num_images))
      image_file = os.path.join(folder, image)
      try:
        image_data = (ndimage.imread(image_file).astype(float) -
                      pixel_depth / 2) / pixel_depth
        if image_data.shape != (image_size, image_size):
          raise Exception('Unexpected image shape: %s' % str(image_data.shape))
        dataset[image_index, :, :] = image_data
        labels[image_index] = label_index
        image_index += 1
      except IOError as e:
        print('Could not read:', image_file, ':', e, '- it\'s ok, skipping.')
    label_index += 1
  num_images = image_index
  dataset = dataset[0:num_images, :, :]
  labels = labels[0:num_images]
  if num_images < min_num_images:
    raise Exception('Many fewer images than expected: %d < %d' % (
        num_images, min_num_images))
  print('Full dataset tensor:', dataset.shape)
  print('Mean:', np.mean(dataset))
  print('Standard deviation:', np.std(dataset))
  print('Labels:', labels.shape)
  return dataset, labels

train_dataset, train_labels = load(train_folders, 450000, 550000)
test_dataset, test_labels = load(test_folders, 18000, 20000)


# ===========================
# Problem 2

# Let's verify that the data still looks good. Displaying a sample of the labels and images from the ndarray. Hint: you can use matplotlib.pyplot.


plt.imshow(train_dataset[np.random.randint(train_dataset.shape[0])])

# Next, we'll randomize the data. It's important to have the labels well shuffled for the training and test distributions to match.


np.random.seed(133)

def randomize(dataset, labels):
  permutation = np.random.permutation(labels.shape[0])
  shuffled_dataset = dataset[permutation,:,:]
  shuffled_labels = labels[permutation]
  return shuffled_dataset, shuffled_labels

train_dataset, train_labels = randomize(train_dataset, train_labels)
test_dataset, test_labels = randomize(test_dataset, test_labels)

# ===========================
# Problem 3

# Convince yourself that the data is still good after shuffling!

plt.pcolor(train_dataset[np.random.randint(train_dataset.shape[0])], cmap="Greys")


# ===========================
# Problem 4

# Another check: we expect the data to be balanced across classes. Verify that.


fig, ax = plt.subplots(1,2)
bins = np.arange(train_labels.min(), train_labels.max()+2)
ax[0].hist(train_labels, bins=bins)
ax[0].set_xticks((bins[:-1]+bins[1:])/2, [chr(k) for k in range(ord("A"), ord("J")+1)])
ax[0].set_title("Training data")

bins = np.arange(test_labels.min(), test_labels.max()+2)
ax[1].hist(test_labels, bins=bins)
ax[1].set_xticks((bins[:-1]+bins[1:])/2, [chr(k) for k in range(ord("A"), ord("J")+1)])
ax[1].set_title("Test data")
[chr(k) for k in range(ord("A"), ord("J")+1)]

print( (bins[:-1]+bins[1:])/2)
print( train_labels.min(), train_labels.max())


# Prune the training data as needed. Depending on your computer setup, you might not be able to fit it all in memory, and you can tune train_size as needed.
# Also create a validation dataset for hyperparameter tuning.

train_size = 200000
valid_size = 10000

valid_dataset = train_dataset[:valid_size,:,:]
valid_labels = train_labels[:valid_size]
train_dataset = train_dataset[valid_size:valid_size+train_size,:,:]
train_labels = train_labels[valid_size:valid_size+train_size]
print('Training', train_dataset.shape, train_labels.shape)
print('Validation', valid_dataset.shape, valid_labels.shape)


# Finally, let's save the data for later reuse:


pickle_file = 'notMNIST.pickle'

try:
  f = open(pickle_file, 'wb')
  save = {
    'train_dataset': train_dataset,
    'train_labels': train_labels,
    'valid_dataset': valid_dataset,
    'valid_labels': valid_labels,
    'test_dataset': test_dataset,
    'test_labels': test_labels,
    }
  pickle.dump(save, f, 3)
  f.close()
except Exception as e:
  print('Unable to save data to', pickle_file, ':', e)
  raise

statinfo = os.stat(pickle_file)
print('Compressed pickle size:', statinfo.st_size)

# ===========================
# Problem 5

# By construction, this dataset might contain a lot of overlapping samples, including training data that's also contained in the validation and test set! Overlap between training and test can skew the results if you expect to use your model in an environment where there is never an overlap, but are actually ok if you expect to see training samples recur when you use it. Measure how much overlap there is between training, validation and test samples. Optional questions:

# What about near duplicates between datasets? (images that are almost identical)

# Create a sanitized validation and test set, and compare your accuracy on those in subsequent assignments.


def find_duplicates(d1, l1, d2, l2):
    """
    d1: data 1 - smaller
    d2: data 2 - larger
    """
    print(d1.shape, d2.shape)
    total_items = d1.shape[0] + d2.shape[0]
    overlap_items = 0
    for l in range(10):
        # Check only items with same labels
        idx1 = (l1 == l)
        idx2 = (l2 == l)
        m1 = d1[idx1]
        m2 = d2[idx2]
        for it1 in m1:
            overlap_items += np.sum(np.sum(np.abs(m2 - it1), axis=(-1,-2)) == 0)
    return overlap_items * 100. / total_items

print("Overlap between Validation and Test : ", find_duplicates(valid_dataset, valid_labels, test_dataset, test_labels))

np.sum(np.random.randn(3,4,5), axis=(-1,-2,-3))


# ===========================
# Problem 6

# Let's get an idea of what an off-the-shelf classifier can give you on this data. It's always good to check that there is something to learn, and that it's a problem that is not so trivial that a canned solution solves it.

# Train a simple model on this data using 50, 100, 1000 and 5000 training samples. Hint: you can use the LogisticRegression model from sklearn.linear_model.

# Optional question: train an off-the-shelf model on all the data!

n_train = -1
X_train, y_train = train_dataset[:n_train].reshape(-1, train_dataset.shape[1]*train_dataset.shape[2]), train_labels[:n_train]
model = LogisticRegression(multi_class="multinomial", solver="lbfgs")
model.fit(X_train, y_train)


print("Predictions")

labels = [chr(k) for k in range(ord("A"), ord("J")+1)]
n_val = 10000
X_val, y_val = valid_dataset[:n_val].reshape(-1, valid_dataset.shape[1]*train_dataset.shape[2]), valid_labels[:n_val]
print(X_val.shape, y_val.shape)
y_pred = model.predict(X_val)

print("Confusion matrix: ")
plt.pcolor(confusion_matrix(y_pred, y_val), cmap="Blues")

print("Score: ", classification_report(y_pred, y_val, target_names=labels))


n_vis = 10
n_cols = 5
n_rows = int(n_vis/ n_cols)
idx = np.random.randint(valid_dataset.shape[0], size=n_vis)
X_vis, y_vis = valid_dataset[idx].reshape(-1, valid_dataset.shape[1]*valid_dataset.shape[2]), valid_labels[idx]
y_pred = model.predict(X_vis)

fig, ax = plt.subplots(n_rows, n_cols, sharex=True, sharey=True, figsize=(n_rows, n_cols))

fig.set_size_inches(10*n_rows, 5*n_cols)
for i, axi in enumerate(ax.flatten()):
    axi.pcolor(X_vis[i].reshape(valid_dataset.shape[1], valid_dataset.shape[2]), cmap="Blues")
    axi.set_title("True: %s, Predicted: %s" % (labels[y_vis[i]], labels[y_pred[i]]))
