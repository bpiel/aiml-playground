// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/util/test_log.proto

package org.tensorflow.util.testlog;

/**
 * <pre>
 * Each unit test or benchmark in a test or benchmark run provides
 * some set of information.  Here we provide some reasonable keys
 * one would expect to see, with optional key/value pairs for things
 * we haven't considered.
 * This BenchmarkEntry should be emitted by each unit test or benchmark
 * reporter.
 * </pre>
 *
 * Protobuf type {@code tensorflow.BenchmarkEntry}
 */
public  final class BenchmarkEntry extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.BenchmarkEntry)
    BenchmarkEntryOrBuilder {
  // Use BenchmarkEntry.newBuilder() to construct.
  private BenchmarkEntry(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private BenchmarkEntry() {
    name_ = "";
    iters_ = 0L;
    cpuTime_ = 0D;
    wallTime_ = 0D;
    throughput_ = 0D;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private BenchmarkEntry(
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
          case 10: {
            java.lang.String s = input.readStringRequireUtf8();

            name_ = s;
            break;
          }
          case 16: {

            iters_ = input.readInt64();
            break;
          }
          case 25: {

            cpuTime_ = input.readDouble();
            break;
          }
          case 33: {

            wallTime_ = input.readDouble();
            break;
          }
          case 41: {

            throughput_ = input.readDouble();
            break;
          }
          case 50: {
            if (!((mutable_bitField0_ & 0x00000020) == 0x00000020)) {
              extras_ = com.google.protobuf.MapField.newMapField(
                  ExtrasDefaultEntryHolder.defaultEntry);
              mutable_bitField0_ |= 0x00000020;
            }
            com.google.protobuf.MapEntry<java.lang.String, org.tensorflow.util.testlog.EntryValue>
            extras__ = input.readMessage(
                ExtrasDefaultEntryHolder.defaultEntry.getParserForType(), extensionRegistry);
            extras_.getMutableMap().put(
                extras__.getKey(), extras__.getValue());
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
    return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_BenchmarkEntry_descriptor;
  }

  @SuppressWarnings({"rawtypes"})
  protected com.google.protobuf.MapField internalGetMapField(
      int number) {
    switch (number) {
      case 6:
        return internalGetExtras();
      default:
        throw new RuntimeException(
            "Invalid map field number: " + number);
    }
  }
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_BenchmarkEntry_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.util.testlog.BenchmarkEntry.class, org.tensorflow.util.testlog.BenchmarkEntry.Builder.class);
  }

  private int bitField0_;
  public static final int NAME_FIELD_NUMBER = 1;
  private volatile java.lang.Object name_;
  /**
   * <pre>
   * The name of the specific benchmark or test
   * (e.g. BM_AdjustContrast_gpu_B_W_H)
   * </pre>
   *
   * <code>string name = 1;</code>
   */
  public java.lang.String getName() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      name_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * The name of the specific benchmark or test
   * (e.g. BM_AdjustContrast_gpu_B_W_H)
   * </pre>
   *
   * <code>string name = 1;</code>
   */
  public com.google.protobuf.ByteString
      getNameBytes() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      name_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int ITERS_FIELD_NUMBER = 2;
  private long iters_;
  /**
   * <pre>
   * If a benchmark, how many iterations it was run for
   * </pre>
   *
   * <code>int64 iters = 2;</code>
   */
  public long getIters() {
    return iters_;
  }

  public static final int CPU_TIME_FIELD_NUMBER = 3;
  private double cpuTime_;
  /**
   * <pre>
   * Total cpu time used for all iterations (in seconds)
   * </pre>
   *
   * <code>double cpu_time = 3;</code>
   */
  public double getCpuTime() {
    return cpuTime_;
  }

  public static final int WALL_TIME_FIELD_NUMBER = 4;
  private double wallTime_;
  /**
   * <pre>
   * Total wall time used for all iterations (in seconds)
   * </pre>
   *
   * <code>double wall_time = 4;</code>
   */
  public double getWallTime() {
    return wallTime_;
  }

  public static final int THROUGHPUT_FIELD_NUMBER = 5;
  private double throughput_;
  /**
   * <pre>
   * Throughput (in MB/s)
   * </pre>
   *
   * <code>double throughput = 5;</code>
   */
  public double getThroughput() {
    return throughput_;
  }

  public static final int EXTRAS_FIELD_NUMBER = 6;
  private static final class ExtrasDefaultEntryHolder {
    static final com.google.protobuf.MapEntry<
        java.lang.String, org.tensorflow.util.testlog.EntryValue> defaultEntry =
            com.google.protobuf.MapEntry
            .<java.lang.String, org.tensorflow.util.testlog.EntryValue>newDefaultInstance(
                org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_BenchmarkEntry_ExtrasEntry_descriptor, 
                com.google.protobuf.WireFormat.FieldType.STRING,
                "",
                com.google.protobuf.WireFormat.FieldType.MESSAGE,
                org.tensorflow.util.testlog.EntryValue.getDefaultInstance());
  }
  private com.google.protobuf.MapField<
      java.lang.String, org.tensorflow.util.testlog.EntryValue> extras_;
  private com.google.protobuf.MapField<java.lang.String, org.tensorflow.util.testlog.EntryValue>
  internalGetExtras() {
    if (extras_ == null) {
      return com.google.protobuf.MapField.emptyMapField(
          ExtrasDefaultEntryHolder.defaultEntry);
    }
    return extras_;
  }

  public int getExtrasCount() {
    return internalGetExtras().getMap().size();
  }
  /**
   * <pre>
   * Generic map from result key to value.
   * </pre>
   *
   * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
   */

  public boolean containsExtras(
      java.lang.String key) {
    if (key == null) { throw new java.lang.NullPointerException(); }
    return internalGetExtras().getMap().containsKey(key);
  }
  /**
   * Use {@link #getExtrasMap()} instead.
   */
  @java.lang.Deprecated
  public java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> getExtras() {
    return getExtrasMap();
  }
  /**
   * <pre>
   * Generic map from result key to value.
   * </pre>
   *
   * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
   */

  public java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> getExtrasMap() {
    return internalGetExtras().getMap();
  }
  /**
   * <pre>
   * Generic map from result key to value.
   * </pre>
   *
   * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
   */

  public org.tensorflow.util.testlog.EntryValue getExtrasOrDefault(
      java.lang.String key,
      org.tensorflow.util.testlog.EntryValue defaultValue) {
    if (key == null) { throw new java.lang.NullPointerException(); }
    java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> map =
        internalGetExtras().getMap();
    return map.containsKey(key) ? map.get(key) : defaultValue;
  }
  /**
   * <pre>
   * Generic map from result key to value.
   * </pre>
   *
   * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
   */

  public org.tensorflow.util.testlog.EntryValue getExtrasOrThrow(
      java.lang.String key) {
    if (key == null) { throw new java.lang.NullPointerException(); }
    java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> map =
        internalGetExtras().getMap();
    if (!map.containsKey(key)) {
      throw new java.lang.IllegalArgumentException();
    }
    return map.get(key);
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
    if (!getNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, name_);
    }
    if (iters_ != 0L) {
      output.writeInt64(2, iters_);
    }
    if (cpuTime_ != 0D) {
      output.writeDouble(3, cpuTime_);
    }
    if (wallTime_ != 0D) {
      output.writeDouble(4, wallTime_);
    }
    if (throughput_ != 0D) {
      output.writeDouble(5, throughput_);
    }
    com.google.protobuf.GeneratedMessageV3
      .serializeStringMapTo(
        output,
        internalGetExtras(),
        ExtrasDefaultEntryHolder.defaultEntry,
        6);
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, name_);
    }
    if (iters_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(2, iters_);
    }
    if (cpuTime_ != 0D) {
      size += com.google.protobuf.CodedOutputStream
        .computeDoubleSize(3, cpuTime_);
    }
    if (wallTime_ != 0D) {
      size += com.google.protobuf.CodedOutputStream
        .computeDoubleSize(4, wallTime_);
    }
    if (throughput_ != 0D) {
      size += com.google.protobuf.CodedOutputStream
        .computeDoubleSize(5, throughput_);
    }
    for (java.util.Map.Entry<java.lang.String, org.tensorflow.util.testlog.EntryValue> entry
         : internalGetExtras().getMap().entrySet()) {
      com.google.protobuf.MapEntry<java.lang.String, org.tensorflow.util.testlog.EntryValue>
      extras__ = ExtrasDefaultEntryHolder.defaultEntry.newBuilderForType()
          .setKey(entry.getKey())
          .setValue(entry.getValue())
          .build();
      size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(6, extras__);
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
    if (!(obj instanceof org.tensorflow.util.testlog.BenchmarkEntry)) {
      return super.equals(obj);
    }
    org.tensorflow.util.testlog.BenchmarkEntry other = (org.tensorflow.util.testlog.BenchmarkEntry) obj;

    boolean result = true;
    result = result && getName()
        .equals(other.getName());
    result = result && (getIters()
        == other.getIters());
    result = result && (
        java.lang.Double.doubleToLongBits(getCpuTime())
        == java.lang.Double.doubleToLongBits(
            other.getCpuTime()));
    result = result && (
        java.lang.Double.doubleToLongBits(getWallTime())
        == java.lang.Double.doubleToLongBits(
            other.getWallTime()));
    result = result && (
        java.lang.Double.doubleToLongBits(getThroughput())
        == java.lang.Double.doubleToLongBits(
            other.getThroughput()));
    result = result && internalGetExtras().equals(
        other.internalGetExtras());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + NAME_FIELD_NUMBER;
    hash = (53 * hash) + getName().hashCode();
    hash = (37 * hash) + ITERS_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getIters());
    hash = (37 * hash) + CPU_TIME_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        java.lang.Double.doubleToLongBits(getCpuTime()));
    hash = (37 * hash) + WALL_TIME_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        java.lang.Double.doubleToLongBits(getWallTime()));
    hash = (37 * hash) + THROUGHPUT_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        java.lang.Double.doubleToLongBits(getThroughput()));
    if (!internalGetExtras().getMap().isEmpty()) {
      hash = (37 * hash) + EXTRAS_FIELD_NUMBER;
      hash = (53 * hash) + internalGetExtras().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.util.testlog.BenchmarkEntry parseFrom(
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
  public static Builder newBuilder(org.tensorflow.util.testlog.BenchmarkEntry prototype) {
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
   * <pre>
   * Each unit test or benchmark in a test or benchmark run provides
   * some set of information.  Here we provide some reasonable keys
   * one would expect to see, with optional key/value pairs for things
   * we haven't considered.
   * This BenchmarkEntry should be emitted by each unit test or benchmark
   * reporter.
   * </pre>
   *
   * Protobuf type {@code tensorflow.BenchmarkEntry}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.BenchmarkEntry)
      org.tensorflow.util.testlog.BenchmarkEntryOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_BenchmarkEntry_descriptor;
    }

    @SuppressWarnings({"rawtypes"})
    protected com.google.protobuf.MapField internalGetMapField(
        int number) {
      switch (number) {
        case 6:
          return internalGetExtras();
        default:
          throw new RuntimeException(
              "Invalid map field number: " + number);
      }
    }
    @SuppressWarnings({"rawtypes"})
    protected com.google.protobuf.MapField internalGetMutableMapField(
        int number) {
      switch (number) {
        case 6:
          return internalGetMutableExtras();
        default:
          throw new RuntimeException(
              "Invalid map field number: " + number);
      }
    }
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_BenchmarkEntry_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.util.testlog.BenchmarkEntry.class, org.tensorflow.util.testlog.BenchmarkEntry.Builder.class);
    }

    // Construct using org.tensorflow.util.testlog.BenchmarkEntry.newBuilder()
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
      name_ = "";

      iters_ = 0L;

      cpuTime_ = 0D;

      wallTime_ = 0D;

      throughput_ = 0D;

      internalGetMutableExtras().clear();
      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.util.testlog.TestLogProtos.internal_static_tensorflow_BenchmarkEntry_descriptor;
    }

    public org.tensorflow.util.testlog.BenchmarkEntry getDefaultInstanceForType() {
      return org.tensorflow.util.testlog.BenchmarkEntry.getDefaultInstance();
    }

    public org.tensorflow.util.testlog.BenchmarkEntry build() {
      org.tensorflow.util.testlog.BenchmarkEntry result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.util.testlog.BenchmarkEntry buildPartial() {
      org.tensorflow.util.testlog.BenchmarkEntry result = new org.tensorflow.util.testlog.BenchmarkEntry(this);
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      result.name_ = name_;
      result.iters_ = iters_;
      result.cpuTime_ = cpuTime_;
      result.wallTime_ = wallTime_;
      result.throughput_ = throughput_;
      result.extras_ = internalGetExtras();
      result.extras_.makeImmutable();
      result.bitField0_ = to_bitField0_;
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
      if (other instanceof org.tensorflow.util.testlog.BenchmarkEntry) {
        return mergeFrom((org.tensorflow.util.testlog.BenchmarkEntry)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.util.testlog.BenchmarkEntry other) {
      if (other == org.tensorflow.util.testlog.BenchmarkEntry.getDefaultInstance()) return this;
      if (!other.getName().isEmpty()) {
        name_ = other.name_;
        onChanged();
      }
      if (other.getIters() != 0L) {
        setIters(other.getIters());
      }
      if (other.getCpuTime() != 0D) {
        setCpuTime(other.getCpuTime());
      }
      if (other.getWallTime() != 0D) {
        setWallTime(other.getWallTime());
      }
      if (other.getThroughput() != 0D) {
        setThroughput(other.getThroughput());
      }
      internalGetMutableExtras().mergeFrom(
          other.internalGetExtras());
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
      org.tensorflow.util.testlog.BenchmarkEntry parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.util.testlog.BenchmarkEntry) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.lang.Object name_ = "";
    /**
     * <pre>
     * The name of the specific benchmark or test
     * (e.g. BM_AdjustContrast_gpu_B_W_H)
     * </pre>
     *
     * <code>string name = 1;</code>
     */
    public java.lang.String getName() {
      java.lang.Object ref = name_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        name_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * The name of the specific benchmark or test
     * (e.g. BM_AdjustContrast_gpu_B_W_H)
     * </pre>
     *
     * <code>string name = 1;</code>
     */
    public com.google.protobuf.ByteString
        getNameBytes() {
      java.lang.Object ref = name_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        name_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * The name of the specific benchmark or test
     * (e.g. BM_AdjustContrast_gpu_B_W_H)
     * </pre>
     *
     * <code>string name = 1;</code>
     */
    public Builder setName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      name_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * The name of the specific benchmark or test
     * (e.g. BM_AdjustContrast_gpu_B_W_H)
     * </pre>
     *
     * <code>string name = 1;</code>
     */
    public Builder clearName() {
      
      name_ = getDefaultInstance().getName();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * The name of the specific benchmark or test
     * (e.g. BM_AdjustContrast_gpu_B_W_H)
     * </pre>
     *
     * <code>string name = 1;</code>
     */
    public Builder setNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      name_ = value;
      onChanged();
      return this;
    }

    private long iters_ ;
    /**
     * <pre>
     * If a benchmark, how many iterations it was run for
     * </pre>
     *
     * <code>int64 iters = 2;</code>
     */
    public long getIters() {
      return iters_;
    }
    /**
     * <pre>
     * If a benchmark, how many iterations it was run for
     * </pre>
     *
     * <code>int64 iters = 2;</code>
     */
    public Builder setIters(long value) {
      
      iters_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * If a benchmark, how many iterations it was run for
     * </pre>
     *
     * <code>int64 iters = 2;</code>
     */
    public Builder clearIters() {
      
      iters_ = 0L;
      onChanged();
      return this;
    }

    private double cpuTime_ ;
    /**
     * <pre>
     * Total cpu time used for all iterations (in seconds)
     * </pre>
     *
     * <code>double cpu_time = 3;</code>
     */
    public double getCpuTime() {
      return cpuTime_;
    }
    /**
     * <pre>
     * Total cpu time used for all iterations (in seconds)
     * </pre>
     *
     * <code>double cpu_time = 3;</code>
     */
    public Builder setCpuTime(double value) {
      
      cpuTime_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Total cpu time used for all iterations (in seconds)
     * </pre>
     *
     * <code>double cpu_time = 3;</code>
     */
    public Builder clearCpuTime() {
      
      cpuTime_ = 0D;
      onChanged();
      return this;
    }

    private double wallTime_ ;
    /**
     * <pre>
     * Total wall time used for all iterations (in seconds)
     * </pre>
     *
     * <code>double wall_time = 4;</code>
     */
    public double getWallTime() {
      return wallTime_;
    }
    /**
     * <pre>
     * Total wall time used for all iterations (in seconds)
     * </pre>
     *
     * <code>double wall_time = 4;</code>
     */
    public Builder setWallTime(double value) {
      
      wallTime_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Total wall time used for all iterations (in seconds)
     * </pre>
     *
     * <code>double wall_time = 4;</code>
     */
    public Builder clearWallTime() {
      
      wallTime_ = 0D;
      onChanged();
      return this;
    }

    private double throughput_ ;
    /**
     * <pre>
     * Throughput (in MB/s)
     * </pre>
     *
     * <code>double throughput = 5;</code>
     */
    public double getThroughput() {
      return throughput_;
    }
    /**
     * <pre>
     * Throughput (in MB/s)
     * </pre>
     *
     * <code>double throughput = 5;</code>
     */
    public Builder setThroughput(double value) {
      
      throughput_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Throughput (in MB/s)
     * </pre>
     *
     * <code>double throughput = 5;</code>
     */
    public Builder clearThroughput() {
      
      throughput_ = 0D;
      onChanged();
      return this;
    }

    private com.google.protobuf.MapField<
        java.lang.String, org.tensorflow.util.testlog.EntryValue> extras_;
    private com.google.protobuf.MapField<java.lang.String, org.tensorflow.util.testlog.EntryValue>
    internalGetExtras() {
      if (extras_ == null) {
        return com.google.protobuf.MapField.emptyMapField(
            ExtrasDefaultEntryHolder.defaultEntry);
      }
      return extras_;
    }
    private com.google.protobuf.MapField<java.lang.String, org.tensorflow.util.testlog.EntryValue>
    internalGetMutableExtras() {
      onChanged();;
      if (extras_ == null) {
        extras_ = com.google.protobuf.MapField.newMapField(
            ExtrasDefaultEntryHolder.defaultEntry);
      }
      if (!extras_.isMutable()) {
        extras_ = extras_.copy();
      }
      return extras_;
    }

    public int getExtrasCount() {
      return internalGetExtras().getMap().size();
    }
    /**
     * <pre>
     * Generic map from result key to value.
     * </pre>
     *
     * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
     */

    public boolean containsExtras(
        java.lang.String key) {
      if (key == null) { throw new java.lang.NullPointerException(); }
      return internalGetExtras().getMap().containsKey(key);
    }
    /**
     * Use {@link #getExtrasMap()} instead.
     */
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> getExtras() {
      return getExtrasMap();
    }
    /**
     * <pre>
     * Generic map from result key to value.
     * </pre>
     *
     * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
     */

    public java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> getExtrasMap() {
      return internalGetExtras().getMap();
    }
    /**
     * <pre>
     * Generic map from result key to value.
     * </pre>
     *
     * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
     */

    public org.tensorflow.util.testlog.EntryValue getExtrasOrDefault(
        java.lang.String key,
        org.tensorflow.util.testlog.EntryValue defaultValue) {
      if (key == null) { throw new java.lang.NullPointerException(); }
      java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> map =
          internalGetExtras().getMap();
      return map.containsKey(key) ? map.get(key) : defaultValue;
    }
    /**
     * <pre>
     * Generic map from result key to value.
     * </pre>
     *
     * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
     */

    public org.tensorflow.util.testlog.EntryValue getExtrasOrThrow(
        java.lang.String key) {
      if (key == null) { throw new java.lang.NullPointerException(); }
      java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> map =
          internalGetExtras().getMap();
      if (!map.containsKey(key)) {
        throw new java.lang.IllegalArgumentException();
      }
      return map.get(key);
    }

    public Builder clearExtras() {
      internalGetMutableExtras().getMutableMap()
          .clear();
      return this;
    }
    /**
     * <pre>
     * Generic map from result key to value.
     * </pre>
     *
     * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
     */

    public Builder removeExtras(
        java.lang.String key) {
      if (key == null) { throw new java.lang.NullPointerException(); }
      internalGetMutableExtras().getMutableMap()
          .remove(key);
      return this;
    }
    /**
     * Use alternate mutation accessors instead.
     */
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue>
    getMutableExtras() {
      return internalGetMutableExtras().getMutableMap();
    }
    /**
     * <pre>
     * Generic map from result key to value.
     * </pre>
     *
     * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
     */
    public Builder putExtras(
        java.lang.String key,
        org.tensorflow.util.testlog.EntryValue value) {
      if (key == null) { throw new java.lang.NullPointerException(); }
      if (value == null) { throw new java.lang.NullPointerException(); }
      internalGetMutableExtras().getMutableMap()
          .put(key, value);
      return this;
    }
    /**
     * <pre>
     * Generic map from result key to value.
     * </pre>
     *
     * <code>map&lt;string, .tensorflow.EntryValue&gt; extras = 6;</code>
     */

    public Builder putAllExtras(
        java.util.Map<java.lang.String, org.tensorflow.util.testlog.EntryValue> values) {
      internalGetMutableExtras().getMutableMap()
          .putAll(values);
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


    // @@protoc_insertion_point(builder_scope:tensorflow.BenchmarkEntry)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.BenchmarkEntry)
  private static final org.tensorflow.util.testlog.BenchmarkEntry DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.util.testlog.BenchmarkEntry();
  }

  public static org.tensorflow.util.testlog.BenchmarkEntry getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<BenchmarkEntry>
      PARSER = new com.google.protobuf.AbstractParser<BenchmarkEntry>() {
    public BenchmarkEntry parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new BenchmarkEntry(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<BenchmarkEntry> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<BenchmarkEntry> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.util.testlog.BenchmarkEntry getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

