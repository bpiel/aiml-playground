package tfnative;

public class Graph {

    static {
        System.load("/home/bill/repos/aiml-playground/flojure-tens/src_native/libtensorflow_jni.so");
    }

    public long doAllocate(){
        return allocate();
    }
    
    /**
     * Returns the operation (node in the Graph) with the provided name.
     *
     * <p>Or {@code null} if no such operation exists in the Graph.
     */
    public long getOp(long handle, String name) {
        return operation(handle, name);
    }

    private static native long allocate();
    
    private static native long operation(long handle, String name);

}
