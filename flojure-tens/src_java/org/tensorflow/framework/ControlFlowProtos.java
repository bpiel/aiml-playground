// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/protobuf/control_flow.proto

package org.tensorflow.framework;

public final class ControlFlowProtos {
  private ControlFlowProtos() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_tensorflow_ValuesDef_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_tensorflow_ValuesDef_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_tensorflow_ValuesDef_ExternalValuesEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_tensorflow_ValuesDef_ExternalValuesEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_tensorflow_CondContextDef_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_tensorflow_CondContextDef_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_tensorflow_WhileContextDef_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_tensorflow_WhileContextDef_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n+tensorflow/core/protobuf/control_flow." +
      "proto\022\ntensorflow\"\226\001\n\tValuesDef\022\016\n\006value" +
      "s\030\001 \003(\t\022B\n\017external_values\030\002 \003(\0132).tenso" +
      "rflow.ValuesDef.ExternalValuesEntry\0325\n\023E" +
      "xternalValuesEntry\022\013\n\003key\030\001 \001(\t\022\r\n\005value" +
      "\030\002 \001(\t:\0028\001\"\210\001\n\016CondContextDef\022\024\n\014context" +
      "_name\030\001 \001(\t\022\021\n\tpred_name\030\002 \001(\t\022\022\n\npivot_" +
      "name\030\003 \001(\t\022\016\n\006branch\030\004 \001(\005\022)\n\nvalues_def" +
      "\030\005 \001(\0132\025.tensorflow.ValuesDef\"\230\002\n\017WhileC" +
      "ontextDef\022\024\n\014context_name\030\001 \001(\t\022\033\n\023paral",
      "lel_iterations\030\002 \001(\005\022\021\n\tback_prop\030\003 \001(\010\022" +
      "\023\n\013swap_memory\030\004 \001(\010\022\022\n\npivot_name\030\005 \001(\t" +
      "\022\033\n\023pivot_for_pred_name\030\006 \001(\t\022\033\n\023pivot_f" +
      "or_body_name\030\007 \001(\t\022\027\n\017loop_exit_names\030\010 " +
      "\003(\t\022\030\n\020loop_enter_names\030\n \003(\t\022)\n\nvalues_" +
      "def\030\t \001(\0132\025.tensorflow.ValuesDefB2\n\030org." +
      "tensorflow.frameworkB\021ControlFlowProtosP" +
      "\001\370\001\001b\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_tensorflow_ValuesDef_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_tensorflow_ValuesDef_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_tensorflow_ValuesDef_descriptor,
        new java.lang.String[] { "Values", "ExternalValues", });
    internal_static_tensorflow_ValuesDef_ExternalValuesEntry_descriptor =
      internal_static_tensorflow_ValuesDef_descriptor.getNestedTypes().get(0);
    internal_static_tensorflow_ValuesDef_ExternalValuesEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_tensorflow_ValuesDef_ExternalValuesEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_tensorflow_CondContextDef_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_tensorflow_CondContextDef_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_tensorflow_CondContextDef_descriptor,
        new java.lang.String[] { "ContextName", "PredName", "PivotName", "Branch", "ValuesDef", });
    internal_static_tensorflow_WhileContextDef_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_tensorflow_WhileContextDef_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_tensorflow_WhileContextDef_descriptor,
        new java.lang.String[] { "ContextName", "ParallelIterations", "BackProp", "SwapMemory", "PivotName", "PivotForPredName", "PivotForBodyName", "LoopExitNames", "LoopEnterNames", "ValuesDef", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}