package tfnative;

public final class TensorFlow {
    public static native String version();
    public static native byte[] registeredOpList();
}
