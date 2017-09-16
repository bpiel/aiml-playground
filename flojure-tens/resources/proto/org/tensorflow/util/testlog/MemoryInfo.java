// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/util/test_log.proto

package org.tensorflow.util.testlog;

/**
 * Protobuf type {@code tensorflow.MemoryInfo}
 */
public  final class MemoryInfo extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.MemoryInfo)
    MemoryInfoOrBuilder {
  // Use MemoryInfo.newBuilder() to construct.
  private MemoryInfo(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private MemoryInfo() {
    total_ = 0L;
    available_ = 0L;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private MemoryInfo(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    int mutable_bitField0_ = 0;
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          default: {
            if (!input.skipField(tag)) {
              done = true;
            }
            break;
          }
          case 8: {

            total_ = input.readInt64();
            break;
          }
          case 16: {

            available_ = input.readInt64();
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_MemoryInfo_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_MemoryInfo_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.util.testlog.MemoryInfo.class, org.tensorflow.util.testlog.MemoryInfo.Builder.class);
  }

  public static final int TOTAL_FIELD_NUMBER = 1;
  private long total_;
  /**
   * <pre>
   * Total virtual memory in bytes
   * </pre>
   *
   * <code>int64 total = 1;</code>
   */
  public long getTotal() {
    return total_;
  }

  public static final int AVAILABLE_FIELD_NUMBER = 2;
  private long available_;
  /**
   * <pre>
   * Immediately available memory in bytes
   * </pre>
   *
   * <code>int64 available = 2;</code>
   */
  public long getAvailable() {
    return available_;
  }

  private byte memoizedIsInitialized = -1;
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (total_ != 0L) {
      output.writeInt64(1, total_);
    }
    if (available_ != 0L) {
      output.writeInt64(2, available_);
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (total_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(1, total_);
    }
    if (available_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(2, available_);
    }
    memoizedSize = size;
    return size;
  }

  private static final long serialVersionUID = 0L;
  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof org.tensorflow.util.testlog.MemoryInfo)) {
      return super.equals(obj);
    }
    org.tensorflow.util.testlog.MemoryInfo other = (org.tensorflow.util.testlog.MemoryInfo) obj;

    boolean result = true;
    result = result && (getTotal()
        == other.getTotal());
    result = result && (getAvailable()
        == other.getAvailable());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + TOTAL_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getTotal());
    hash = (37 * hash) + AVAILABLE_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getAvailable());
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.MemoryInfo parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(org.tensorflow.util.testlog.MemoryInfo prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code tensorflow.MemoryInfo}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.MemoryInfo)
      org.tensorflow.util.testlog.MemoryInfoOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_MemoryInfo_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_MemoryInfo_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.util.testlog.MemoryInfo.class, org.tensorflow.util.testlog.MemoryInfo.Builder.class);
    }

    // Construct using org.tensorflow.util.testlog.MemoryInfo.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    public Builder clear() {
      super.clear();
      total_ = 0L;

      available_ = 0L;

      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_MemoryInfo_descriptor;
    }

    public org.tensorflow.util.testlog.MemoryInfo getDefaultInstanceForType() {
      return org.tensorflow.util.testlog.MemoryInfo.getDefaultInstance();
    }

    public org.tensorflow.util.testlog.MemoryInfo build() {
      org.tensorflow.util.testlog.MemoryInfo result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.util.testlog.MemoryInfo buildPartial() {
      org.tensorflow.util.testlog.MemoryInfo result = new org.tensorflow.util.testlog.MemoryInfo(this);
      result.total_ = total_;
      result.available_ = available_;
      onBuilt();
      return result;
    }

    public Builder clone() {
      return (Builder) super.clone();
    }
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        Object value) {
      return (Builder) super.setField(field, value);
    }
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return (Builder) super.clearField(field);
    }
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return (Builder) super.clearOneof(oneof);
    }
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, Object value) {
      return (Builder) super.setRepeatedField(field, index, value);
    }
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        Object value) {
      return (Builder) super.addRepeatedField(field, value);
    }
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof org.tensorflow.util.testlog.MemoryInfo) {
        return mergeFrom((org.tensorflow.util.testlog.MemoryInfo)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.util.testlog.MemoryInfo other) {
      if (other == org.tensorflow.util.testlog.MemoryInfo.getDefaultInstance()) return this;
      if (other.getTotal() != 0L) {
        setTotal(other.getTotal());
      }
      if (other.getAvailable() != 0L) {
        setAvailable(other.getAvailable());
      }
      onChanged();
      return this;
    }

    public final boolean isInitialized() {
      return true;
    }

    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      org.tensorflow.util.testlog.MemoryInfo parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.util.testlog.MemoryInfo) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private long total_ ;
    /**
     * <pre>
     * Total virtual memory in bytes
     * </pre>
     *
     * <code>int64 total = 1;</code>
     */
    public long getTotal() {
      return total_;
    }
    /**
     * <pre>
     * Total virtual memory in bytes
     * </pre>
     *
     * <code>int64 total = 1;</code>
     */
    public Builder setTotal(long value) {
      
      total_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Total virtual memory in bytes
     * </pre>
     *
     * <code>int64 total = 1;</code>
     */
    public Builder clearTotal() {
      
      total_ = 0L;
      onChanged();
      return this;
    }

    private long available_ ;
    /**
     * <pre>
     * Immediately available memory in bytes
     * </pre>
     *
     * <code>int64 available = 2;</code>
     */
    public long getAvailable() {
      return available_;
    }
    /**
     * <pre>
     * Immediately available memory in bytes
     * </pre>
     *
     * <code>int64 available = 2;</code>
     */
    public Builder setAvailable(long value) {
      
      available_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Immediately available memory in bytes
     * </pre>
     *
     * <code>int64 available = 2;</code>
     */
    public Builder clearAvailable() {
      
      available_ = 0L;
      onChanged();
      return this;
    }
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }

    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }


    // @@protoc_insertion_point(builder_scope:tensorflow.MemoryInfo)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.MemoryInfo)
  private static final org.tensorflow.util.testlog.MemoryInfo DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.util.testlog.MemoryInfo();
  }

  public static org.tensorflow.util.testlog.MemoryInfo getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<MemoryInfo>
      PARSER = new com.google.protobuf.AbstractParser<MemoryInfo>() {
    public MemoryInfo parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new MemoryInfo(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<MemoryInfo> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<MemoryInfo> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.util.testlog.MemoryInfo getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

