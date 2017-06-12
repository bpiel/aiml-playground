// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/protobuf/master.proto

package org.tensorflow.distruntime;

public interface ResetRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:tensorflow.ResetRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * A list of container names, which may be empty.
   * If 'container' is not empty, releases resoures in the given
   * containers in all devices.
   * If 'container' is empty, releases resources in the default
   * container in all devices.
   * </pre>
   *
   * <code>repeated string container = 1;</code>
   */
  java.util.List<java.lang.String>
      getContainerList();
  /**
   * <pre>
   * A list of container names, which may be empty.
   * If 'container' is not empty, releases resoures in the given
   * containers in all devices.
   * If 'container' is empty, releases resources in the default
   * container in all devices.
   * </pre>
   *
   * <code>repeated string container = 1;</code>
   */
  int getContainerCount();
  /**
   * <pre>
   * A list of container names, which may be empty.
   * If 'container' is not empty, releases resoures in the given
   * containers in all devices.
   * If 'container' is empty, releases resources in the default
   * container in all devices.
   * </pre>
   *
   * <code>repeated string container = 1;</code>
   */
  java.lang.String getContainer(int index);
  /**
   * <pre>
   * A list of container names, which may be empty.
   * If 'container' is not empty, releases resoures in the given
   * containers in all devices.
   * If 'container' is empty, releases resources in the default
   * container in all devices.
   * </pre>
   *
   * <code>repeated string container = 1;</code>
   */
  com.google.protobuf.ByteString
      getContainerBytes(int index);

  /**
   * <pre>
   * When any filters are present, only devices that match the filters
   * will be reset. Each filter can be partially specified,
   * e.g. "/job:ps" "/job:worker/replica:3", etc.
   * </pre>
   *
   * <code>repeated string device_filters = 2;</code>
   */
  java.util.List<java.lang.String>
      getDeviceFiltersList();
  /**
   * <pre>
   * When any filters are present, only devices that match the filters
   * will be reset. Each filter can be partially specified,
   * e.g. "/job:ps" "/job:worker/replica:3", etc.
   * </pre>
   *
   * <code>repeated string device_filters = 2;</code>
   */
  int getDeviceFiltersCount();
  /**
   * <pre>
   * When any filters are present, only devices that match the filters
   * will be reset. Each filter can be partially specified,
   * e.g. "/job:ps" "/job:worker/replica:3", etc.
   * </pre>
   *
   * <code>repeated string device_filters = 2;</code>
   */
  java.lang.String getDeviceFilters(int index);
  /**
   * <pre>
   * When any filters are present, only devices that match the filters
   * will be reset. Each filter can be partially specified,
   * e.g. "/job:ps" "/job:worker/replica:3", etc.
   * </pre>
   *
   * <code>repeated string device_filters = 2;</code>
   */
  com.google.protobuf.ByteString
      getDeviceFiltersBytes(int index);
}
