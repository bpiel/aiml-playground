from tensorflow.python import debug as tf_debug
import tensorflow as tf


a = tf.get_variable("va", dtype=tf.int32,
                    initializer=tf.constant([1, 2]))

b = tf.get_variable("vb", dtype=tf.int32,
                    initializer=tf.constant([30, 40]))

c = tf.add(a,b)


sess = tf.Session()
sess = tf_debug.TensorBoardDebugWrapperSession(sess, 'localhost:6064')
sess.run(tf.global_variables_initializer())
print(sess.run(c))


# tensorboard \
#     --logdir ~/tflogs \
#     --port 6006 \
#     --debugger_port 6064
