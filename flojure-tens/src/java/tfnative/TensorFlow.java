package tfnative;

public final class TensorFlow {
    public static native String version();
    public static native byte[] registeredOpList();

    public static int mask(int crc) {
        return ((crc >>> 15) | (crc << 17)) + 0xa282ead8;
    }
}
