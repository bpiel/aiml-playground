package tfnative;

public class Graph {

    static {
        System.load("/home/bill/repos/aiml-playground/flojure-tens/src_native/libtensorflow_jni.so");
    }

    public static native long allocate();

    public static native void delete(long handle);

    public static native long operation(long handle, String name);

    public static native void importGraphDef(long handle, byte[] graphDef, String prefix)
        throws IllegalArgumentException;

    public static native byte[] toGraphDef(long handle);
}
