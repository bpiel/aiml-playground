public class GraphUtils {

    static {
        System.load("/home/bill/repos/aiml-playground/flojure-tens/src_native/graphutils.so");
    }
    
    /**
     * Returns the operation (node in the Graph) with the provided name.
     *
     * <p>Or {@code null} if no such operation exists in the Graph.
     */
    public Operation operation(Graph g, String name) {
        synchronized (nativeHandleLock) {
            long oph = operation(nativeHandle, name);
            if (oph == 0) {
                return null;
            }
            return new Operation(this, oph);
        }
    }

    private static native long operation(long handle, String name);

}
