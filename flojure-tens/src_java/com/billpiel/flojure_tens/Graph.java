package com.billpiel.flojure_tens;

public class Graph{

    private long nativeHandle;
    private final Object nativeHandleLock = new Object();
    private clojure.lang.IPersistentMap nodes = clojure.lang.PersistentHashMap.EMPTY;
    private clojure.lang.IPersistentMap variableAssignments = clojure.lang.PersistentHashMap.EMPTY;
    private clojure.lang.IPersistentMap nodesByHash = clojure.lang.PersistentHashMap.EMPTY;
    private clojure.lang.IPersistentMap nodesByHandle = clojure.lang.PersistentHashMap.EMPTY;
    private clojure.lang.IPersistentMap nodesByInput = clojure.lang.PersistentHashMap.EMPTY;;
    private boolean closed = false;

    public Graph(){
        this.nativeHandle = tfnative.Graph.allocate();
        this.nativeHandle = nativeHandle;
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

    // this is awful, but I'm struggling
    public void setState(clojure.lang.PersistentHashMap nodes,
                         clojure.lang.PersistentHashMap variableAssignments,
                         clojure.lang.PersistentHashMap nodesByHash,
                         clojure.lang.PersistentHashMap nodesByHandle,
                         clojure.lang.PersistentHashMap nodesByInput){
        synchronized (nativeHandleLock){
            this.nodes = nodes;
            this.variableAssignments = variableAssignments;
            this.nodesByHash = nodesByHash;
            this.nodesByHandle = nodesByHandle;
            this.nodesByInput = nodesByInput;
        }
    }
    
    public clojure.lang.IPersistentMap getNodes(){
        return nodes;
    }

    public clojure.lang.IPersistentMap getVariableAssignments(){
        return variableAssignments;
    }

    public clojure.lang.IPersistentMap getNodesByHash(){
        return nodesByHash;
    }

    public clojure.lang.IPersistentMap getNodesByHandle(){
        return nodesByHandle;
    }


    public clojure.lang.IPersistentMap getNodesByInput(){
        return nodesByInput;
    }
    
    public Object doSynchronized(clojure.lang.IFn f){
        synchronized (nativeHandleLock) {
            return f.invoke();
        }
    }

}
