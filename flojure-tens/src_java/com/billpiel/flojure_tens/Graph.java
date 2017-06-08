package com.billpiel.flojure_tens;


public class Graph{

    private long nativeHandle;
    private final Object nativeHandleLock = new Object();
    private clojure.lang.IPersistentMap nodes;
    private clojure.lang.IPersistentMap variableAssignments;
    private boolean closed = false;
    
    public Graph(long nativeHandle,
                 clojure.lang.IPersistentMap nodes,
                 clojure.lang.IPersistentMap variableAssignments){
        this.nativeHandle = nativeHandle;
        this.nodes = nodes;
        this.variableAssignments = variableAssignments;
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

    public clojure.lang.IPersistentMap getVariableAssignments(){
        return variableAssignments;
    }

    public Object doSynchronized(clojure.lang.IFn f){
        synchronized (nativeHandleLock) {
            return f.invoke();
        }
    }

}
