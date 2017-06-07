package com.billpiel.flojure_tens;


public class Graph implements clojure.lang.ILookup{

    private long nativeHandle;
    private final Object nativeHandleLock = new Object();
    private clojure.lang.IPersistentMap nodes;
    private boolean closed = false;
    
    public Graph(long nativeHandle, clojure.lang.IPersistentMap nodes){
        this.nativeHandle = nativeHandle;
        this.nodes = nodes;
    }

    public void close(){
        synchronized (nativeHandleLock) {
            tfnative.Graph.delete(nativeHandle);
            closed = true;
        }
    }

    public boolean isClosed(){
        synchronized (nativeHandleLock) {
            return closed;
        }
    }
    
    public long getNativeHandle(){
        return nativeHandle;
    }

    public clojure.lang.IPersistentMap getNodes(){
        return nodes;
    }
    
    public Object doSynchronized(clojure.lang.IFn f){
        synchronized (nativeHandleLock) {
            return f.invoke();
        }
    }

    public boolean containsKey(Object key){
        return false;
    }

    public boolean containsKey(clojure.lang.Keyword key){
        return (key.getName() == "hi");
    }
        
    public Object valAt(clojure.lang.Keyword key){
        if (key.getName() == "hi"){
            return new clojure.lang.MapEntry(key, "ho");
        }else{
            return null;
        }
    }

    public Object valAt(Object key, Object notFound){
        return "NOT-IMPLEMENTED";
    }
    
    public Object valAt(Object key){
        return null;
    }

}
