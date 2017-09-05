package com.billpiel.flojure_tens;

import clojure.lang.APersistentVector;
import clojure.lang.IPersistentVector;
import clojure.lang.IPersistentCollection;
import clojure.lang.IPersistentStack;
import clojure.lang.ISeq;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.FloatBuffer;
import java.nio.DoubleBuffer;
import java.nio.IntBuffer;
import java.nio.LongBuffer;

public class TensorValue extends APersistentVector {
    private long[] shape;
    private Buffer b;
    private int dataType;
    
    public TensorValue (Buffer b, long[] shape, int dataType){
        this.b = b;
        this.shape = shape;
        this.dataType = dataType;
    }

    private Object getScalar(int n){
        switch (dataType){
          case 1: //FLOAT
             return ((FloatBuffer)b).get(n);
        case 2: //DOUBLE
             return ((DoubleBuffer)b).get(n);
        case 3: //INT32
             return ((IntBuffer)b).get(n);
        case 9: //INT64 / LONG
             return ((LongBuffer)b).get(n);
        }
        return null;
    }

    public Object get(ISeq idx){
        
    }
    
    public Object nth(int n){
    }


    
    public IPersistentVector cons(Object o) {
        return null;
    }

    public IPersistentVector assocN(int i, Object val) {
        return null;
    }

    public IPersistentCollection empty(){
        return null;
    }

    public int count(){
        return b.capacity();
    }

    public IPersistentStack pop(){
        return null;
    }
    
}
