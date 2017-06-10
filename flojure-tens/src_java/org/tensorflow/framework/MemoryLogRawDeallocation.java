// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/framework/log_memory.proto

package org.tensorflow.framework;

/**
 * Protobuf type {@code tensorflow.MemoryLogRawDeallocation}
 */
public  final class MemoryLogRawDeallocation extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.MemoryLogRawDeallocation)
    MemoryLogRawDeallocationOrBuilder {
  // Use MemoryLogRawDeallocation.newBuilder() to construct.
  private MemoryLogRawDeallocation(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private MemoryLogRawDeallocation() {
    stepId_ = 0L;
    operation_ = "";
    allocationId_ = 0L;
    allocatorName_ = "";
    deferred_ = false;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private MemoryLogRawDeallocation(
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

            stepId_ = input.readInt64();
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            operation_ = s;
            break;
          }
          case 24: {

            allocationId_ = input.readInt64();
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            allocatorName_ = s;
            break;
          }
          case 40: {

            deferred_ = input.readBool();
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
    return org.tensorflow.framework.LogMemoryProtos.internal_static_tensorflow_MemoryLogRawDeallocation_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.framework.LogMemoryProtos.internal_static_tensorflow_MemoryLogRawDeallocation_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.framework.MemoryLogRawDeallocation.class, org.tensorflow.framework.MemoryLogRawDeallocation.Builder.class);
  }

  public static final int STEP_ID_FIELD_NUMBER = 1;
  private long stepId_;
  /**
   * <pre>
   * Process-unique step id.
   * </pre>
   *
   * <code>int64 step_id = 1;</code>
   */
  public long getStepId() {
    return stepId_;
  }

  public static final int OPERATION_FIELD_NUMBER = 2;
  private volatile java.lang.Object operation_;
  /**
   * <pre>
   * Name of the operation making the deallocation.
   * </pre>
   *
   * <code>string operation = 2;</code>
   */
  public java.lang.String getOperation() {
    java.lang.Object ref = operation_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      operation_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * Name of the operation making the deallocation.
   * </pre>
   *
   * <code>string operation = 2;</code>
   */
  public com.google.protobuf.ByteString
      getOperationBytes() {
    java.lang.Object ref = operation_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      operation_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int ALLOCATION_ID_FIELD_NUMBER = 3;
  private long allocationId_;
  /**
   * <pre>
   * Id of the tensor buffer being deallocated, used to match to a
   * corresponding allocation.
   * </pre>
   *
   * <code>int64 allocation_id = 3;</code>
   */
  public long getAllocationId() {
    return allocationId_;
  }

  public static final int ALLOCATOR_NAME_FIELD_NUMBER = 4;
  private volatile java.lang.Object allocatorName_;
  /**
   * <pre>
   * Name of the allocator used.
   * </pre>
   *
   * <code>string allocator_name = 4;</code>
   */
  public java.lang.String getAllocatorName() {
    java.lang.Object ref = allocatorName_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      allocatorName_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * Name of the allocator used.
   * </pre>
   *
   * <code>string allocator_name = 4;</code>
   */
  public com.google.protobuf.ByteString
      getAllocatorNameBytes() {
    java.lang.Object ref = allocatorName_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      allocatorName_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int DEFERRED_FIELD_NUMBER = 5;
  private boolean deferred_;
  /**
   * <pre>
   * True if the deallocation is queued and will be performed later,
   * e.g. for GPU lazy freeing of buffers.
   * </pre>
   *
   * <code>bool deferred = 5;</code>
   */
  public boolean getDeferred() {
    return deferred_;
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
    if (stepId_ != 0L) {
      output.writeInt64(1, stepId_);
    }
    if (!getOperationBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, operation_);
    }
    if (allocationId_ != 0L) {
      output.writeInt64(3, allocationId_);
    }
    if (!getAllocatorNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, allocatorName_);
    }
    if (deferred_ != false) {
      output.writeBool(5, deferred_);
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (stepId_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(1, stepId_);
    }
    if (!getOperationBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, operation_);
    }
    if (allocationId_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(3, allocationId_);
    }
    if (!getAllocatorNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, allocatorName_);
    }
    if (deferred_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(5, deferred_);
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
    if (!(obj instanceof org.tensorflow.framework.MemoryLogRawDeallocation)) {
      return super.equals(obj);
    }
    org.tensorflow.framework.MemoryLogRawDeallocation other = (org.tensorflow.framework.MemoryLogRawDeallocation) obj;

    boolean result = true;
    result = result && (getStepId()
        == other.getStepId());
    result = result && getOperation()
        .equals(other.getOperation());
    result = result && (getAllocationId()
        == other.getAllocationId());
    result = result && getAllocatorName()
        .equals(other.getAllocatorName());
    result = result && (getDeferred()
        == other.getDeferred());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + STEP_ID_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getStepId());
    hash = (37 * hash) + OPERATION_FIELD_NUMBER;
    hash = (53 * hash) + getOperation().hashCode();
    hash = (37 * hash) + ALLOCATION_ID_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getAllocationId());
    hash = (37 * hash) + ALLOCATOR_NAME_FIELD_NUMBER;
    hash = (53 * hash) + getAllocatorName().hashCode();
    hash = (37 * hash) + DEFERRED_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getDeferred());
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.MemoryLogRawDeallocation parseFrom(
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
  public static Builder newBuilder(org.tensorflow.framework.MemoryLogRawDeallocation prototype) {
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
   * Protobuf type {@code tensorflow.MemoryLogRawDeallocation}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.MemoryLogRawDeallocation)
      org.tensorflow.framework.MemoryLogRawDeallocationOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.framework.LogMemoryProtos.internal_static_tensorflow_MemoryLogRawDeallocation_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.framework.LogMemoryProtos.internal_static_tensorflow_MemoryLogRawDeallocation_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.framework.MemoryLogRawDeallocation.class, org.tensorflow.framework.MemoryLogRawDeallocation.Builder.class);
    }

    // Construct using org.tensorflow.framework.MemoryLogRawDeallocation.newBuilder()
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
      stepId_ = 0L;

      operation_ = "";

      allocationId_ = 0L;

      allocatorName_ = "";

      deferred_ = false;

      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.framework.LogMemoryProtos.internal_static_tensorflow_MemoryLogRawDeallocation_descriptor;
    }

    public org.tensorflow.framework.MemoryLogRawDeallocation getDefaultInstanceForType() {
      return org.tensorflow.framework.MemoryLogRawDeallocation.getDefaultInstance();
    }

    public org.tensorflow.framework.MemoryLogRawDeallocation build() {
      org.tensorflow.framework.MemoryLogRawDeallocation result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.framework.MemoryLogRawDeallocation buildPartial() {
      org.tensorflow.framework.MemoryLogRawDeallocation result = new org.tensorflow.framework.MemoryLogRawDeallocation(this);
      result.stepId_ = stepId_;
      result.operation_ = operation_;
      result.allocationId_ = allocationId_;
      result.allocatorName_ = allocatorName_;
      result.deferred_ = deferred_;
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
      if (other instanceof org.tensorflow.framework.MemoryLogRawDeallocation) {
        return mergeFrom((org.tensorflow.framework.MemoryLogRawDeallocation)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.framework.MemoryLogRawDeallocation other) {
      if (other == org.tensorflow.framework.MemoryLogRawDeallocation.getDefaultInstance()) return this;
      if (other.getStepId() != 0L) {
        setStepId(other.getStepId());
      }
      if (!other.getOperation().isEmpty()) {
        operation_ = other.operation_;
        onChanged();
      }
      if (other.getAllocationId() != 0L) {
        setAllocationId(other.getAllocationId());
      }
      if (!other.getAllocatorName().isEmpty()) {
        allocatorName_ = other.allocatorName_;
        onChanged();
      }
      if (other.getDeferred() != false) {
        setDeferred(other.getDeferred());
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
      org.tensorflow.framework.MemoryLogRawDeallocation parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.framework.MemoryLogRawDeallocation) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private long stepId_ ;
    /**
     * <pre>
     * Process-unique step id.
     * </pre>
     *
     * <code>int64 step_id = 1;</code>
     */
    public long getStepId() {
      return stepId_;
    }
    /**
     * <pre>
     * Process-unique step id.
     * </pre>
     *
     * <code>int64 step_id = 1;</code>
     */
    public Builder setStepId(long value) {
      
      stepId_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Process-unique step id.
     * </pre>
     *
     * <code>int64 step_id = 1;</code>
     */
    public Builder clearStepId() {
      
      stepId_ = 0L;
      onChanged();
      return this;
    }

    private java.lang.Object operation_ = "";
    /**
     * <pre>
     * Name of the operation making the deallocation.
     * </pre>
     *
     * <code>string operation = 2;</code>
     */
    public java.lang.String getOperation() {
      java.lang.Object ref = operation_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        operation_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * Name of the operation making the deallocation.
     * </pre>
     *
     * <code>string operation = 2;</code>
     */
    public com.google.protobuf.ByteString
        getOperationBytes() {
      java.lang.Object ref = operation_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        operation_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * Name of the operation making the deallocation.
     * </pre>
     *
     * <code>string operation = 2;</code>
     */
    public Builder setOperation(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      operation_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Name of the operation making the deallocation.
     * </pre>
     *
     * <code>string operation = 2;</code>
     */
    public Builder clearOperation() {
      
      operation_ = getDefaultInstance().getOperation();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Name of the operation making the deallocation.
     * </pre>
     *
     * <code>string operation = 2;</code>
     */
    public Builder setOperationBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      operation_ = value;
      onChanged();
      return this;
    }

    private long allocationId_ ;
    /**
     * <pre>
     * Id of the tensor buffer being deallocated, used to match to a
     * corresponding allocation.
     * </pre>
     *
     * <code>int64 allocation_id = 3;</code>
     */
    public long getAllocationId() {
      return allocationId_;
    }
    /**
     * <pre>
     * Id of the tensor buffer being deallocated, used to match to a
     * corresponding allocation.
     * </pre>
     *
     * <code>int64 allocation_id = 3;</code>
     */
    public Builder setAllocationId(long value) {
      
      allocationId_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Id of the tensor buffer being deallocated, used to match to a
     * corresponding allocation.
     * </pre>
     *
     * <code>int64 allocation_id = 3;</code>
     */
    public Builder clearAllocationId() {
      
      allocationId_ = 0L;
      onChanged();
      return this;
    }

    private java.lang.Object allocatorName_ = "";
    /**
     * <pre>
     * Name of the allocator used.
     * </pre>
     *
     * <code>string allocator_name = 4;</code>
     */
    public java.lang.String getAllocatorName() {
      java.lang.Object ref = allocatorName_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        allocatorName_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * Name of the allocator used.
     * </pre>
     *
     * <code>string allocator_name = 4;</code>
     */
    public com.google.protobuf.ByteString
        getAllocatorNameBytes() {
      java.lang.Object ref = allocatorName_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        allocatorName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * Name of the allocator used.
     * </pre>
     *
     * <code>string allocator_name = 4;</code>
     */
    public Builder setAllocatorName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      allocatorName_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Name of the allocator used.
     * </pre>
     *
     * <code>string allocator_name = 4;</code>
     */
    public Builder clearAllocatorName() {
      
      allocatorName_ = getDefaultInstance().getAllocatorName();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Name of the allocator used.
     * </pre>
     *
     * <code>string allocator_name = 4;</code>
     */
    public Builder setAllocatorNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      allocatorName_ = value;
      onChanged();
      return this;
    }

    private boolean deferred_ ;
    /**
     * <pre>
     * True if the deallocation is queued and will be performed later,
     * e.g. for GPU lazy freeing of buffers.
     * </pre>
     *
     * <code>bool deferred = 5;</code>
     */
    public boolean getDeferred() {
      return deferred_;
    }
    /**
     * <pre>
     * True if the deallocation is queued and will be performed later,
     * e.g. for GPU lazy freeing of buffers.
     * </pre>
     *
     * <code>bool deferred = 5;</code>
     */
    public Builder setDeferred(boolean value) {
      
      deferred_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * True if the deallocation is queued and will be performed later,
     * e.g. for GPU lazy freeing of buffers.
     * </pre>
     *
     * <code>bool deferred = 5;</code>
     */
    public Builder clearDeferred() {
      
      deferred_ = false;
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


    // @@protoc_insertion_point(builder_scope:tensorflow.MemoryLogRawDeallocation)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.MemoryLogRawDeallocation)
  private static final org.tensorflow.framework.MemoryLogRawDeallocation DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.framework.MemoryLogRawDeallocation();
  }

  public static org.tensorflow.framework.MemoryLogRawDeallocation getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<MemoryLogRawDeallocation>
      PARSER = new com.google.protobuf.AbstractParser<MemoryLogRawDeallocation>() {
    public MemoryLogRawDeallocation parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new MemoryLogRawDeallocation(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<MemoryLogRawDeallocation> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<MemoryLogRawDeallocation> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.framework.MemoryLogRawDeallocation getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

