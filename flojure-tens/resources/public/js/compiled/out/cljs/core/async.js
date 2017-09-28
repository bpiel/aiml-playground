// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__69555 = arguments.length;
switch (G__69555) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async69556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69556 = (function (f,blockable,meta69557){
this.f = f;
this.blockable = blockable;
this.meta69557 = meta69557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69558,meta69557__$1){
var self__ = this;
var _69558__$1 = this;
return (new cljs.core.async.t_cljs$core$async69556(self__.f,self__.blockable,meta69557__$1));
});

cljs.core.async.t_cljs$core$async69556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69558){
var self__ = this;
var _69558__$1 = this;
return self__.meta69557;
});

cljs.core.async.t_cljs$core$async69556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async69556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async69556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async69556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69557","meta69557",-1301716785,null)], null);
});

cljs.core.async.t_cljs$core$async69556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69556";

cljs.core.async.t_cljs$core$async69556.cljs$lang$ctorPrWriter = (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async69556");
});

cljs.core.async.__GT_t_cljs$core$async69556 = (function cljs$core$async$__GT_t_cljs$core$async69556(f__$1,blockable__$1,meta69557){
return (new cljs.core.async.t_cljs$core$async69556(f__$1,blockable__$1,meta69557));
});

}

return (new cljs.core.async.t_cljs$core$async69556(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__69562 = arguments.length;
switch (G__69562) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__69565 = arguments.length;
switch (G__69565) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__69568 = arguments.length;
switch (G__69568) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_69570 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_69570);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_69570,ret){
return (function (){
return fn1.call(null,val_69570);
});})(val_69570,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__69572 = arguments.length;
switch (G__69572) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6736__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6736__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__65460__auto___69574 = n;
var x_69575 = (0);
while(true){
if((x_69575 < n__65460__auto___69574)){
(a[x_69575] = (0));

var G__69576 = (x_69575 + (1));
x_69575 = G__69576;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__69577 = (i + (1));
i = G__69577;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async69578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69578 = (function (flag,meta69579){
this.flag = flag;
this.meta69579 = meta69579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_69580,meta69579__$1){
var self__ = this;
var _69580__$1 = this;
return (new cljs.core.async.t_cljs$core$async69578(self__.flag,meta69579__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async69578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_69580){
var self__ = this;
var _69580__$1 = this;
return self__.meta69579;
});})(flag))
;

cljs.core.async.t_cljs$core$async69578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async69578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async69578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async69578.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69579","meta69579",-925990366,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async69578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69578";

cljs.core.async.t_cljs$core$async69578.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async69578");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async69578 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69578(flag__$1,meta69579){
return (new cljs.core.async.t_cljs$core$async69578(flag__$1,meta69579));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async69578(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async69581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69581 = (function (flag,cb,meta69582){
this.flag = flag;
this.cb = cb;
this.meta69582 = meta69582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async69581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69583,meta69582__$1){
var self__ = this;
var _69583__$1 = this;
return (new cljs.core.async.t_cljs$core$async69581(self__.flag,self__.cb,meta69582__$1));
});

cljs.core.async.t_cljs$core$async69581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69583){
var self__ = this;
var _69583__$1 = this;
return self__.meta69582;
});

cljs.core.async.t_cljs$core$async69581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async69581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async69581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async69581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69582","meta69582",-772755443,null)], null);
});

cljs.core.async.t_cljs$core$async69581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69581";

cljs.core.async.t_cljs$core$async69581.cljs$lang$ctorPrWriter = (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async69581");
});

cljs.core.async.__GT_t_cljs$core$async69581 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69581(flag__$1,cb__$1,meta69582){
return (new cljs.core.async.t_cljs$core$async69581(flag__$1,cb__$1,meta69582));
});

}

return (new cljs.core.async.t_cljs$core$async69581(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69584_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69584_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69585_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69585_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__64417__auto__ = wport;
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
return port;
}
})()], null));
} else {
var G__69586 = (i + (1));
i = G__69586;
continue;
}
} else {
return null;
}
break;
}
})();
var or__64417__auto__ = ret;
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__64405__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__64405__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__64405__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__65701__auto__ = [];
var len__65694__auto___69592 = arguments.length;
var i__65695__auto___69593 = (0);
while(true){
if((i__65695__auto___69593 < len__65694__auto___69592)){
args__65701__auto__.push((arguments[i__65695__auto___69593]));

var G__69594 = (i__65695__auto___69593 + (1));
i__65695__auto___69593 = G__69594;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((1) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__65702__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69589){
var map__69590 = p__69589;
var map__69590__$1 = ((((!((map__69590 == null)))?((((map__69590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69590):map__69590);
var opts = map__69590__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69587){
var G__69588 = cljs.core.first.call(null,seq69587);
var seq69587__$1 = cljs.core.next.call(null,seq69587);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69588,seq69587__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__69596 = arguments.length;
switch (G__69596) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__69495__auto___69642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___69642){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___69642){
return (function (state_69620){
var state_val_69621 = (state_69620[(1)]);
if((state_val_69621 === (7))){
var inst_69616 = (state_69620[(2)]);
var state_69620__$1 = state_69620;
var statearr_69622_69643 = state_69620__$1;
(statearr_69622_69643[(2)] = inst_69616);

(statearr_69622_69643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (1))){
var state_69620__$1 = state_69620;
var statearr_69623_69644 = state_69620__$1;
(statearr_69623_69644[(2)] = null);

(statearr_69623_69644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (4))){
var inst_69599 = (state_69620[(7)]);
var inst_69599__$1 = (state_69620[(2)]);
var inst_69600 = (inst_69599__$1 == null);
var state_69620__$1 = (function (){var statearr_69624 = state_69620;
(statearr_69624[(7)] = inst_69599__$1);

return statearr_69624;
})();
if(cljs.core.truth_(inst_69600)){
var statearr_69625_69645 = state_69620__$1;
(statearr_69625_69645[(1)] = (5));

} else {
var statearr_69626_69646 = state_69620__$1;
(statearr_69626_69646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (13))){
var state_69620__$1 = state_69620;
var statearr_69627_69647 = state_69620__$1;
(statearr_69627_69647[(2)] = null);

(statearr_69627_69647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (6))){
var inst_69599 = (state_69620[(7)]);
var state_69620__$1 = state_69620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69620__$1,(11),to,inst_69599);
} else {
if((state_val_69621 === (3))){
var inst_69618 = (state_69620[(2)]);
var state_69620__$1 = state_69620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69620__$1,inst_69618);
} else {
if((state_val_69621 === (12))){
var state_69620__$1 = state_69620;
var statearr_69628_69648 = state_69620__$1;
(statearr_69628_69648[(2)] = null);

(statearr_69628_69648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (2))){
var state_69620__$1 = state_69620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69620__$1,(4),from);
} else {
if((state_val_69621 === (11))){
var inst_69609 = (state_69620[(2)]);
var state_69620__$1 = state_69620;
if(cljs.core.truth_(inst_69609)){
var statearr_69629_69649 = state_69620__$1;
(statearr_69629_69649[(1)] = (12));

} else {
var statearr_69630_69650 = state_69620__$1;
(statearr_69630_69650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (9))){
var state_69620__$1 = state_69620;
var statearr_69631_69651 = state_69620__$1;
(statearr_69631_69651[(2)] = null);

(statearr_69631_69651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (5))){
var state_69620__$1 = state_69620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69632_69652 = state_69620__$1;
(statearr_69632_69652[(1)] = (8));

} else {
var statearr_69633_69653 = state_69620__$1;
(statearr_69633_69653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (14))){
var inst_69614 = (state_69620[(2)]);
var state_69620__$1 = state_69620;
var statearr_69634_69654 = state_69620__$1;
(statearr_69634_69654[(2)] = inst_69614);

(statearr_69634_69654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (10))){
var inst_69606 = (state_69620[(2)]);
var state_69620__$1 = state_69620;
var statearr_69635_69655 = state_69620__$1;
(statearr_69635_69655[(2)] = inst_69606);

(statearr_69635_69655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69621 === (8))){
var inst_69603 = cljs.core.async.close_BANG_.call(null,to);
var state_69620__$1 = state_69620;
var statearr_69636_69656 = state_69620__$1;
(statearr_69636_69656[(2)] = inst_69603);

(statearr_69636_69656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___69642))
;
return ((function (switch__69405__auto__,c__69495__auto___69642){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_69637 = [null,null,null,null,null,null,null,null];
(statearr_69637[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_69637[(1)] = (1));

return statearr_69637;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_69620){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_69620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e69638){if((e69638 instanceof Object)){
var ex__69409__auto__ = e69638;
var statearr_69639_69657 = state_69620;
(statearr_69639_69657[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69658 = state_69620;
state_69620 = G__69658;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_69620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_69620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___69642))
})();
var state__69497__auto__ = (function (){var statearr_69640 = f__69496__auto__.call(null);
(statearr_69640[(6)] = c__69495__auto___69642);

return statearr_69640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___69642))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__69659){
var vec__69660 = p__69659;
var v = cljs.core.nth.call(null,vec__69660,(0),null);
var p = cljs.core.nth.call(null,vec__69660,(1),null);
var job = vec__69660;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__69495__auto___69831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___69831,res,vec__69660,v,p,job,jobs,results){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___69831,res,vec__69660,v,p,job,jobs,results){
return (function (state_69667){
var state_val_69668 = (state_69667[(1)]);
if((state_val_69668 === (1))){
var state_69667__$1 = state_69667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69667__$1,(2),res,v);
} else {
if((state_val_69668 === (2))){
var inst_69664 = (state_69667[(2)]);
var inst_69665 = cljs.core.async.close_BANG_.call(null,res);
var state_69667__$1 = (function (){var statearr_69669 = state_69667;
(statearr_69669[(7)] = inst_69664);

return statearr_69669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69667__$1,inst_69665);
} else {
return null;
}
}
});})(c__69495__auto___69831,res,vec__69660,v,p,job,jobs,results))
;
return ((function (switch__69405__auto__,c__69495__auto___69831,res,vec__69660,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0 = (function (){
var statearr_69670 = [null,null,null,null,null,null,null,null];
(statearr_69670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__);

(statearr_69670[(1)] = (1));

return statearr_69670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1 = (function (state_69667){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_69667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e69671){if((e69671 instanceof Object)){
var ex__69409__auto__ = e69671;
var statearr_69672_69832 = state_69667;
(statearr_69672_69832[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69833 = state_69667;
state_69667 = G__69833;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = function(state_69667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1.call(this,state_69667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___69831,res,vec__69660,v,p,job,jobs,results))
})();
var state__69497__auto__ = (function (){var statearr_69673 = f__69496__auto__.call(null);
(statearr_69673[(6)] = c__69495__auto___69831);

return statearr_69673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___69831,res,vec__69660,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__69674){
var vec__69675 = p__69674;
var v = cljs.core.nth.call(null,vec__69675,(0),null);
var p = cljs.core.nth.call(null,vec__69675,(1),null);
var job = vec__69675;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__65460__auto___69834 = n;
var __69835 = (0);
while(true){
if((__69835 < n__65460__auto___69834)){
var G__69678_69836 = type;
var G__69678_69837__$1 = (((G__69678_69836 instanceof cljs.core.Keyword))?G__69678_69836.fqn:null);
switch (G__69678_69837__$1) {
case "compute":
var c__69495__auto___69839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69835,c__69495__auto___69839,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (__69835,c__69495__auto___69839,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async){
return (function (state_69691){
var state_val_69692 = (state_69691[(1)]);
if((state_val_69692 === (1))){
var state_69691__$1 = state_69691;
var statearr_69693_69840 = state_69691__$1;
(statearr_69693_69840[(2)] = null);

(statearr_69693_69840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69692 === (2))){
var state_69691__$1 = state_69691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69691__$1,(4),jobs);
} else {
if((state_val_69692 === (3))){
var inst_69689 = (state_69691[(2)]);
var state_69691__$1 = state_69691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69691__$1,inst_69689);
} else {
if((state_val_69692 === (4))){
var inst_69681 = (state_69691[(2)]);
var inst_69682 = process.call(null,inst_69681);
var state_69691__$1 = state_69691;
if(cljs.core.truth_(inst_69682)){
var statearr_69694_69841 = state_69691__$1;
(statearr_69694_69841[(1)] = (5));

} else {
var statearr_69695_69842 = state_69691__$1;
(statearr_69695_69842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69692 === (5))){
var state_69691__$1 = state_69691;
var statearr_69696_69843 = state_69691__$1;
(statearr_69696_69843[(2)] = null);

(statearr_69696_69843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69692 === (6))){
var state_69691__$1 = state_69691;
var statearr_69697_69844 = state_69691__$1;
(statearr_69697_69844[(2)] = null);

(statearr_69697_69844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69692 === (7))){
var inst_69687 = (state_69691[(2)]);
var state_69691__$1 = state_69691;
var statearr_69698_69845 = state_69691__$1;
(statearr_69698_69845[(2)] = inst_69687);

(statearr_69698_69845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__69835,c__69495__auto___69839,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async))
;
return ((function (__69835,switch__69405__auto__,c__69495__auto___69839,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0 = (function (){
var statearr_69699 = [null,null,null,null,null,null,null];
(statearr_69699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__);

(statearr_69699[(1)] = (1));

return statearr_69699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1 = (function (state_69691){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_69691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e69700){if((e69700 instanceof Object)){
var ex__69409__auto__ = e69700;
var statearr_69701_69846 = state_69691;
(statearr_69701_69846[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69847 = state_69691;
state_69691 = G__69847;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = function(state_69691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1.call(this,state_69691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__;
})()
;})(__69835,switch__69405__auto__,c__69495__auto___69839,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async))
})();
var state__69497__auto__ = (function (){var statearr_69702 = f__69496__auto__.call(null);
(statearr_69702[(6)] = c__69495__auto___69839);

return statearr_69702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(__69835,c__69495__auto___69839,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async))
);


break;
case "async":
var c__69495__auto___69848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69835,c__69495__auto___69848,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (__69835,c__69495__auto___69848,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async){
return (function (state_69715){
var state_val_69716 = (state_69715[(1)]);
if((state_val_69716 === (1))){
var state_69715__$1 = state_69715;
var statearr_69717_69849 = state_69715__$1;
(statearr_69717_69849[(2)] = null);

(statearr_69717_69849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69716 === (2))){
var state_69715__$1 = state_69715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69715__$1,(4),jobs);
} else {
if((state_val_69716 === (3))){
var inst_69713 = (state_69715[(2)]);
var state_69715__$1 = state_69715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69715__$1,inst_69713);
} else {
if((state_val_69716 === (4))){
var inst_69705 = (state_69715[(2)]);
var inst_69706 = async.call(null,inst_69705);
var state_69715__$1 = state_69715;
if(cljs.core.truth_(inst_69706)){
var statearr_69718_69850 = state_69715__$1;
(statearr_69718_69850[(1)] = (5));

} else {
var statearr_69719_69851 = state_69715__$1;
(statearr_69719_69851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69716 === (5))){
var state_69715__$1 = state_69715;
var statearr_69720_69852 = state_69715__$1;
(statearr_69720_69852[(2)] = null);

(statearr_69720_69852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69716 === (6))){
var state_69715__$1 = state_69715;
var statearr_69721_69853 = state_69715__$1;
(statearr_69721_69853[(2)] = null);

(statearr_69721_69853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69716 === (7))){
var inst_69711 = (state_69715[(2)]);
var state_69715__$1 = state_69715;
var statearr_69722_69854 = state_69715__$1;
(statearr_69722_69854[(2)] = inst_69711);

(statearr_69722_69854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__69835,c__69495__auto___69848,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async))
;
return ((function (__69835,switch__69405__auto__,c__69495__auto___69848,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0 = (function (){
var statearr_69723 = [null,null,null,null,null,null,null];
(statearr_69723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__);

(statearr_69723[(1)] = (1));

return statearr_69723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1 = (function (state_69715){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_69715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e69724){if((e69724 instanceof Object)){
var ex__69409__auto__ = e69724;
var statearr_69725_69855 = state_69715;
(statearr_69725_69855[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69856 = state_69715;
state_69715 = G__69856;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = function(state_69715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1.call(this,state_69715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__;
})()
;})(__69835,switch__69405__auto__,c__69495__auto___69848,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async))
})();
var state__69497__auto__ = (function (){var statearr_69726 = f__69496__auto__.call(null);
(statearr_69726[(6)] = c__69495__auto___69848);

return statearr_69726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(__69835,c__69495__auto___69848,G__69678_69836,G__69678_69837__$1,n__65460__auto___69834,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69678_69837__$1)].join('')));

}

var G__69857 = (__69835 + (1));
__69835 = G__69857;
continue;
} else {
}
break;
}

var c__69495__auto___69858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___69858,jobs,results,process,async){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___69858,jobs,results,process,async){
return (function (state_69748){
var state_val_69749 = (state_69748[(1)]);
if((state_val_69749 === (1))){
var state_69748__$1 = state_69748;
var statearr_69750_69859 = state_69748__$1;
(statearr_69750_69859[(2)] = null);

(statearr_69750_69859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (2))){
var state_69748__$1 = state_69748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69748__$1,(4),from);
} else {
if((state_val_69749 === (3))){
var inst_69746 = (state_69748[(2)]);
var state_69748__$1 = state_69748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69748__$1,inst_69746);
} else {
if((state_val_69749 === (4))){
var inst_69729 = (state_69748[(7)]);
var inst_69729__$1 = (state_69748[(2)]);
var inst_69730 = (inst_69729__$1 == null);
var state_69748__$1 = (function (){var statearr_69751 = state_69748;
(statearr_69751[(7)] = inst_69729__$1);

return statearr_69751;
})();
if(cljs.core.truth_(inst_69730)){
var statearr_69752_69860 = state_69748__$1;
(statearr_69752_69860[(1)] = (5));

} else {
var statearr_69753_69861 = state_69748__$1;
(statearr_69753_69861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (5))){
var inst_69732 = cljs.core.async.close_BANG_.call(null,jobs);
var state_69748__$1 = state_69748;
var statearr_69754_69862 = state_69748__$1;
(statearr_69754_69862[(2)] = inst_69732);

(statearr_69754_69862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (6))){
var inst_69734 = (state_69748[(8)]);
var inst_69729 = (state_69748[(7)]);
var inst_69734__$1 = cljs.core.async.chan.call(null,(1));
var inst_69735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69736 = [inst_69729,inst_69734__$1];
var inst_69737 = (new cljs.core.PersistentVector(null,2,(5),inst_69735,inst_69736,null));
var state_69748__$1 = (function (){var statearr_69755 = state_69748;
(statearr_69755[(8)] = inst_69734__$1);

return statearr_69755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69748__$1,(8),jobs,inst_69737);
} else {
if((state_val_69749 === (7))){
var inst_69744 = (state_69748[(2)]);
var state_69748__$1 = state_69748;
var statearr_69756_69863 = state_69748__$1;
(statearr_69756_69863[(2)] = inst_69744);

(statearr_69756_69863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69749 === (8))){
var inst_69734 = (state_69748[(8)]);
var inst_69739 = (state_69748[(2)]);
var state_69748__$1 = (function (){var statearr_69757 = state_69748;
(statearr_69757[(9)] = inst_69739);

return statearr_69757;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69748__$1,(9),results,inst_69734);
} else {
if((state_val_69749 === (9))){
var inst_69741 = (state_69748[(2)]);
var state_69748__$1 = (function (){var statearr_69758 = state_69748;
(statearr_69758[(10)] = inst_69741);

return statearr_69758;
})();
var statearr_69759_69864 = state_69748__$1;
(statearr_69759_69864[(2)] = null);

(statearr_69759_69864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___69858,jobs,results,process,async))
;
return ((function (switch__69405__auto__,c__69495__auto___69858,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0 = (function (){
var statearr_69760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__);

(statearr_69760[(1)] = (1));

return statearr_69760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1 = (function (state_69748){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_69748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e69761){if((e69761 instanceof Object)){
var ex__69409__auto__ = e69761;
var statearr_69762_69865 = state_69748;
(statearr_69762_69865[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69866 = state_69748;
state_69748 = G__69866;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = function(state_69748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1.call(this,state_69748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___69858,jobs,results,process,async))
})();
var state__69497__auto__ = (function (){var statearr_69763 = f__69496__auto__.call(null);
(statearr_69763[(6)] = c__69495__auto___69858);

return statearr_69763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___69858,jobs,results,process,async))
);


var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__,jobs,results,process,async){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__,jobs,results,process,async){
return (function (state_69801){
var state_val_69802 = (state_69801[(1)]);
if((state_val_69802 === (7))){
var inst_69797 = (state_69801[(2)]);
var state_69801__$1 = state_69801;
var statearr_69803_69867 = state_69801__$1;
(statearr_69803_69867[(2)] = inst_69797);

(statearr_69803_69867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (20))){
var state_69801__$1 = state_69801;
var statearr_69804_69868 = state_69801__$1;
(statearr_69804_69868[(2)] = null);

(statearr_69804_69868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (1))){
var state_69801__$1 = state_69801;
var statearr_69805_69869 = state_69801__$1;
(statearr_69805_69869[(2)] = null);

(statearr_69805_69869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (4))){
var inst_69766 = (state_69801[(7)]);
var inst_69766__$1 = (state_69801[(2)]);
var inst_69767 = (inst_69766__$1 == null);
var state_69801__$1 = (function (){var statearr_69806 = state_69801;
(statearr_69806[(7)] = inst_69766__$1);

return statearr_69806;
})();
if(cljs.core.truth_(inst_69767)){
var statearr_69807_69870 = state_69801__$1;
(statearr_69807_69870[(1)] = (5));

} else {
var statearr_69808_69871 = state_69801__$1;
(statearr_69808_69871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (15))){
var inst_69779 = (state_69801[(8)]);
var state_69801__$1 = state_69801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69801__$1,(18),to,inst_69779);
} else {
if((state_val_69802 === (21))){
var inst_69792 = (state_69801[(2)]);
var state_69801__$1 = state_69801;
var statearr_69809_69872 = state_69801__$1;
(statearr_69809_69872[(2)] = inst_69792);

(statearr_69809_69872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (13))){
var inst_69794 = (state_69801[(2)]);
var state_69801__$1 = (function (){var statearr_69810 = state_69801;
(statearr_69810[(9)] = inst_69794);

return statearr_69810;
})();
var statearr_69811_69873 = state_69801__$1;
(statearr_69811_69873[(2)] = null);

(statearr_69811_69873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (6))){
var inst_69766 = (state_69801[(7)]);
var state_69801__$1 = state_69801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69801__$1,(11),inst_69766);
} else {
if((state_val_69802 === (17))){
var inst_69787 = (state_69801[(2)]);
var state_69801__$1 = state_69801;
if(cljs.core.truth_(inst_69787)){
var statearr_69812_69874 = state_69801__$1;
(statearr_69812_69874[(1)] = (19));

} else {
var statearr_69813_69875 = state_69801__$1;
(statearr_69813_69875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (3))){
var inst_69799 = (state_69801[(2)]);
var state_69801__$1 = state_69801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69801__$1,inst_69799);
} else {
if((state_val_69802 === (12))){
var inst_69776 = (state_69801[(10)]);
var state_69801__$1 = state_69801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69801__$1,(14),inst_69776);
} else {
if((state_val_69802 === (2))){
var state_69801__$1 = state_69801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69801__$1,(4),results);
} else {
if((state_val_69802 === (19))){
var state_69801__$1 = state_69801;
var statearr_69814_69876 = state_69801__$1;
(statearr_69814_69876[(2)] = null);

(statearr_69814_69876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (11))){
var inst_69776 = (state_69801[(2)]);
var state_69801__$1 = (function (){var statearr_69815 = state_69801;
(statearr_69815[(10)] = inst_69776);

return statearr_69815;
})();
var statearr_69816_69877 = state_69801__$1;
(statearr_69816_69877[(2)] = null);

(statearr_69816_69877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (9))){
var state_69801__$1 = state_69801;
var statearr_69817_69878 = state_69801__$1;
(statearr_69817_69878[(2)] = null);

(statearr_69817_69878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (5))){
var state_69801__$1 = state_69801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69818_69879 = state_69801__$1;
(statearr_69818_69879[(1)] = (8));

} else {
var statearr_69819_69880 = state_69801__$1;
(statearr_69819_69880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (14))){
var inst_69781 = (state_69801[(11)]);
var inst_69779 = (state_69801[(8)]);
var inst_69779__$1 = (state_69801[(2)]);
var inst_69780 = (inst_69779__$1 == null);
var inst_69781__$1 = cljs.core.not.call(null,inst_69780);
var state_69801__$1 = (function (){var statearr_69820 = state_69801;
(statearr_69820[(11)] = inst_69781__$1);

(statearr_69820[(8)] = inst_69779__$1);

return statearr_69820;
})();
if(inst_69781__$1){
var statearr_69821_69881 = state_69801__$1;
(statearr_69821_69881[(1)] = (15));

} else {
var statearr_69822_69882 = state_69801__$1;
(statearr_69822_69882[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (16))){
var inst_69781 = (state_69801[(11)]);
var state_69801__$1 = state_69801;
var statearr_69823_69883 = state_69801__$1;
(statearr_69823_69883[(2)] = inst_69781);

(statearr_69823_69883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (10))){
var inst_69773 = (state_69801[(2)]);
var state_69801__$1 = state_69801;
var statearr_69824_69884 = state_69801__$1;
(statearr_69824_69884[(2)] = inst_69773);

(statearr_69824_69884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (18))){
var inst_69784 = (state_69801[(2)]);
var state_69801__$1 = state_69801;
var statearr_69825_69885 = state_69801__$1;
(statearr_69825_69885[(2)] = inst_69784);

(statearr_69825_69885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69802 === (8))){
var inst_69770 = cljs.core.async.close_BANG_.call(null,to);
var state_69801__$1 = state_69801;
var statearr_69826_69886 = state_69801__$1;
(statearr_69826_69886[(2)] = inst_69770);

(statearr_69826_69886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto__,jobs,results,process,async))
;
return ((function (switch__69405__auto__,c__69495__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0 = (function (){
var statearr_69827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__);

(statearr_69827[(1)] = (1));

return statearr_69827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1 = (function (state_69801){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_69801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e69828){if((e69828 instanceof Object)){
var ex__69409__auto__ = e69828;
var statearr_69829_69887 = state_69801;
(statearr_69829_69887[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69888 = state_69801;
state_69801 = G__69888;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__ = function(state_69801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1.call(this,state_69801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__,jobs,results,process,async))
})();
var state__69497__auto__ = (function (){var statearr_69830 = f__69496__auto__.call(null);
(statearr_69830[(6)] = c__69495__auto__);

return statearr_69830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__,jobs,results,process,async))
);

return c__69495__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__69890 = arguments.length;
switch (G__69890) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__69893 = arguments.length;
switch (G__69893) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__69896 = arguments.length;
switch (G__69896) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__69495__auto___69945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___69945,tc,fc){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___69945,tc,fc){
return (function (state_69922){
var state_val_69923 = (state_69922[(1)]);
if((state_val_69923 === (7))){
var inst_69918 = (state_69922[(2)]);
var state_69922__$1 = state_69922;
var statearr_69924_69946 = state_69922__$1;
(statearr_69924_69946[(2)] = inst_69918);

(statearr_69924_69946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (1))){
var state_69922__$1 = state_69922;
var statearr_69925_69947 = state_69922__$1;
(statearr_69925_69947[(2)] = null);

(statearr_69925_69947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (4))){
var inst_69899 = (state_69922[(7)]);
var inst_69899__$1 = (state_69922[(2)]);
var inst_69900 = (inst_69899__$1 == null);
var state_69922__$1 = (function (){var statearr_69926 = state_69922;
(statearr_69926[(7)] = inst_69899__$1);

return statearr_69926;
})();
if(cljs.core.truth_(inst_69900)){
var statearr_69927_69948 = state_69922__$1;
(statearr_69927_69948[(1)] = (5));

} else {
var statearr_69928_69949 = state_69922__$1;
(statearr_69928_69949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (13))){
var state_69922__$1 = state_69922;
var statearr_69929_69950 = state_69922__$1;
(statearr_69929_69950[(2)] = null);

(statearr_69929_69950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (6))){
var inst_69899 = (state_69922[(7)]);
var inst_69905 = p.call(null,inst_69899);
var state_69922__$1 = state_69922;
if(cljs.core.truth_(inst_69905)){
var statearr_69930_69951 = state_69922__$1;
(statearr_69930_69951[(1)] = (9));

} else {
var statearr_69931_69952 = state_69922__$1;
(statearr_69931_69952[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (3))){
var inst_69920 = (state_69922[(2)]);
var state_69922__$1 = state_69922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69922__$1,inst_69920);
} else {
if((state_val_69923 === (12))){
var state_69922__$1 = state_69922;
var statearr_69932_69953 = state_69922__$1;
(statearr_69932_69953[(2)] = null);

(statearr_69932_69953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (2))){
var state_69922__$1 = state_69922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69922__$1,(4),ch);
} else {
if((state_val_69923 === (11))){
var inst_69899 = (state_69922[(7)]);
var inst_69909 = (state_69922[(2)]);
var state_69922__$1 = state_69922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69922__$1,(8),inst_69909,inst_69899);
} else {
if((state_val_69923 === (9))){
var state_69922__$1 = state_69922;
var statearr_69933_69954 = state_69922__$1;
(statearr_69933_69954[(2)] = tc);

(statearr_69933_69954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (5))){
var inst_69902 = cljs.core.async.close_BANG_.call(null,tc);
var inst_69903 = cljs.core.async.close_BANG_.call(null,fc);
var state_69922__$1 = (function (){var statearr_69934 = state_69922;
(statearr_69934[(8)] = inst_69902);

return statearr_69934;
})();
var statearr_69935_69955 = state_69922__$1;
(statearr_69935_69955[(2)] = inst_69903);

(statearr_69935_69955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (14))){
var inst_69916 = (state_69922[(2)]);
var state_69922__$1 = state_69922;
var statearr_69936_69956 = state_69922__$1;
(statearr_69936_69956[(2)] = inst_69916);

(statearr_69936_69956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (10))){
var state_69922__$1 = state_69922;
var statearr_69937_69957 = state_69922__$1;
(statearr_69937_69957[(2)] = fc);

(statearr_69937_69957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69923 === (8))){
var inst_69911 = (state_69922[(2)]);
var state_69922__$1 = state_69922;
if(cljs.core.truth_(inst_69911)){
var statearr_69938_69958 = state_69922__$1;
(statearr_69938_69958[(1)] = (12));

} else {
var statearr_69939_69959 = state_69922__$1;
(statearr_69939_69959[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___69945,tc,fc))
;
return ((function (switch__69405__auto__,c__69495__auto___69945,tc,fc){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_69940 = [null,null,null,null,null,null,null,null,null];
(statearr_69940[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_69940[(1)] = (1));

return statearr_69940;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_69922){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_69922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e69941){if((e69941 instanceof Object)){
var ex__69409__auto__ = e69941;
var statearr_69942_69960 = state_69922;
(statearr_69942_69960[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69961 = state_69922;
state_69922 = G__69961;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_69922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_69922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___69945,tc,fc))
})();
var state__69497__auto__ = (function (){var statearr_69943 = f__69496__auto__.call(null);
(statearr_69943[(6)] = c__69495__auto___69945);

return statearr_69943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___69945,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__){
return (function (state_69982){
var state_val_69983 = (state_69982[(1)]);
if((state_val_69983 === (7))){
var inst_69978 = (state_69982[(2)]);
var state_69982__$1 = state_69982;
var statearr_69984_70002 = state_69982__$1;
(statearr_69984_70002[(2)] = inst_69978);

(statearr_69984_70002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69983 === (1))){
var inst_69962 = init;
var state_69982__$1 = (function (){var statearr_69985 = state_69982;
(statearr_69985[(7)] = inst_69962);

return statearr_69985;
})();
var statearr_69986_70003 = state_69982__$1;
(statearr_69986_70003[(2)] = null);

(statearr_69986_70003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69983 === (4))){
var inst_69965 = (state_69982[(8)]);
var inst_69965__$1 = (state_69982[(2)]);
var inst_69966 = (inst_69965__$1 == null);
var state_69982__$1 = (function (){var statearr_69987 = state_69982;
(statearr_69987[(8)] = inst_69965__$1);

return statearr_69987;
})();
if(cljs.core.truth_(inst_69966)){
var statearr_69988_70004 = state_69982__$1;
(statearr_69988_70004[(1)] = (5));

} else {
var statearr_69989_70005 = state_69982__$1;
(statearr_69989_70005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69983 === (6))){
var inst_69969 = (state_69982[(9)]);
var inst_69962 = (state_69982[(7)]);
var inst_69965 = (state_69982[(8)]);
var inst_69969__$1 = f.call(null,inst_69962,inst_69965);
var inst_69970 = cljs.core.reduced_QMARK_.call(null,inst_69969__$1);
var state_69982__$1 = (function (){var statearr_69990 = state_69982;
(statearr_69990[(9)] = inst_69969__$1);

return statearr_69990;
})();
if(inst_69970){
var statearr_69991_70006 = state_69982__$1;
(statearr_69991_70006[(1)] = (8));

} else {
var statearr_69992_70007 = state_69982__$1;
(statearr_69992_70007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69983 === (3))){
var inst_69980 = (state_69982[(2)]);
var state_69982__$1 = state_69982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69982__$1,inst_69980);
} else {
if((state_val_69983 === (2))){
var state_69982__$1 = state_69982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69982__$1,(4),ch);
} else {
if((state_val_69983 === (9))){
var inst_69969 = (state_69982[(9)]);
var inst_69962 = inst_69969;
var state_69982__$1 = (function (){var statearr_69993 = state_69982;
(statearr_69993[(7)] = inst_69962);

return statearr_69993;
})();
var statearr_69994_70008 = state_69982__$1;
(statearr_69994_70008[(2)] = null);

(statearr_69994_70008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69983 === (5))){
var inst_69962 = (state_69982[(7)]);
var state_69982__$1 = state_69982;
var statearr_69995_70009 = state_69982__$1;
(statearr_69995_70009[(2)] = inst_69962);

(statearr_69995_70009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69983 === (10))){
var inst_69976 = (state_69982[(2)]);
var state_69982__$1 = state_69982;
var statearr_69996_70010 = state_69982__$1;
(statearr_69996_70010[(2)] = inst_69976);

(statearr_69996_70010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69983 === (8))){
var inst_69969 = (state_69982[(9)]);
var inst_69972 = cljs.core.deref.call(null,inst_69969);
var state_69982__$1 = state_69982;
var statearr_69997_70011 = state_69982__$1;
(statearr_69997_70011[(2)] = inst_69972);

(statearr_69997_70011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto__))
;
return ((function (switch__69405__auto__,c__69495__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__69406__auto__ = null;
var cljs$core$async$reduce_$_state_machine__69406__auto____0 = (function (){
var statearr_69998 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69998[(0)] = cljs$core$async$reduce_$_state_machine__69406__auto__);

(statearr_69998[(1)] = (1));

return statearr_69998;
});
var cljs$core$async$reduce_$_state_machine__69406__auto____1 = (function (state_69982){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_69982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e69999){if((e69999 instanceof Object)){
var ex__69409__auto__ = e69999;
var statearr_70000_70012 = state_69982;
(statearr_70000_70012[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70013 = state_69982;
state_69982 = G__70013;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__69406__auto__ = function(state_69982){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__69406__auto____1.call(this,state_69982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__69406__auto____0;
cljs$core$async$reduce_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__69406__auto____1;
return cljs$core$async$reduce_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__))
})();
var state__69497__auto__ = (function (){var statearr_70001 = f__69496__auto__.call(null);
(statearr_70001[(6)] = c__69495__auto__);

return statearr_70001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__))
);

return c__69495__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__,f__$1){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__,f__$1){
return (function (state_70019){
var state_val_70020 = (state_70019[(1)]);
if((state_val_70020 === (1))){
var inst_70014 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_70019__$1 = state_70019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70019__$1,(2),inst_70014);
} else {
if((state_val_70020 === (2))){
var inst_70016 = (state_70019[(2)]);
var inst_70017 = f__$1.call(null,inst_70016);
var state_70019__$1 = state_70019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70019__$1,inst_70017);
} else {
return null;
}
}
});})(c__69495__auto__,f__$1))
;
return ((function (switch__69405__auto__,c__69495__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__69406__auto__ = null;
var cljs$core$async$transduce_$_state_machine__69406__auto____0 = (function (){
var statearr_70021 = [null,null,null,null,null,null,null];
(statearr_70021[(0)] = cljs$core$async$transduce_$_state_machine__69406__auto__);

(statearr_70021[(1)] = (1));

return statearr_70021;
});
var cljs$core$async$transduce_$_state_machine__69406__auto____1 = (function (state_70019){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_70019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e70022){if((e70022 instanceof Object)){
var ex__69409__auto__ = e70022;
var statearr_70023_70025 = state_70019;
(statearr_70023_70025[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70026 = state_70019;
state_70019 = G__70026;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__69406__auto__ = function(state_70019){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__69406__auto____1.call(this,state_70019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__69406__auto____0;
cljs$core$async$transduce_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__69406__auto____1;
return cljs$core$async$transduce_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__,f__$1))
})();
var state__69497__auto__ = (function (){var statearr_70024 = f__69496__auto__.call(null);
(statearr_70024[(6)] = c__69495__auto__);

return statearr_70024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__,f__$1))
);

return c__69495__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__70028 = arguments.length;
switch (G__70028) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__){
return (function (state_70053){
var state_val_70054 = (state_70053[(1)]);
if((state_val_70054 === (7))){
var inst_70035 = (state_70053[(2)]);
var state_70053__$1 = state_70053;
var statearr_70055_70076 = state_70053__$1;
(statearr_70055_70076[(2)] = inst_70035);

(statearr_70055_70076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (1))){
var inst_70029 = cljs.core.seq.call(null,coll);
var inst_70030 = inst_70029;
var state_70053__$1 = (function (){var statearr_70056 = state_70053;
(statearr_70056[(7)] = inst_70030);

return statearr_70056;
})();
var statearr_70057_70077 = state_70053__$1;
(statearr_70057_70077[(2)] = null);

(statearr_70057_70077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (4))){
var inst_70030 = (state_70053[(7)]);
var inst_70033 = cljs.core.first.call(null,inst_70030);
var state_70053__$1 = state_70053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70053__$1,(7),ch,inst_70033);
} else {
if((state_val_70054 === (13))){
var inst_70047 = (state_70053[(2)]);
var state_70053__$1 = state_70053;
var statearr_70058_70078 = state_70053__$1;
(statearr_70058_70078[(2)] = inst_70047);

(statearr_70058_70078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (6))){
var inst_70038 = (state_70053[(2)]);
var state_70053__$1 = state_70053;
if(cljs.core.truth_(inst_70038)){
var statearr_70059_70079 = state_70053__$1;
(statearr_70059_70079[(1)] = (8));

} else {
var statearr_70060_70080 = state_70053__$1;
(statearr_70060_70080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (3))){
var inst_70051 = (state_70053[(2)]);
var state_70053__$1 = state_70053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70053__$1,inst_70051);
} else {
if((state_val_70054 === (12))){
var state_70053__$1 = state_70053;
var statearr_70061_70081 = state_70053__$1;
(statearr_70061_70081[(2)] = null);

(statearr_70061_70081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (2))){
var inst_70030 = (state_70053[(7)]);
var state_70053__$1 = state_70053;
if(cljs.core.truth_(inst_70030)){
var statearr_70062_70082 = state_70053__$1;
(statearr_70062_70082[(1)] = (4));

} else {
var statearr_70063_70083 = state_70053__$1;
(statearr_70063_70083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (11))){
var inst_70044 = cljs.core.async.close_BANG_.call(null,ch);
var state_70053__$1 = state_70053;
var statearr_70064_70084 = state_70053__$1;
(statearr_70064_70084[(2)] = inst_70044);

(statearr_70064_70084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (9))){
var state_70053__$1 = state_70053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70065_70085 = state_70053__$1;
(statearr_70065_70085[(1)] = (11));

} else {
var statearr_70066_70086 = state_70053__$1;
(statearr_70066_70086[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (5))){
var inst_70030 = (state_70053[(7)]);
var state_70053__$1 = state_70053;
var statearr_70067_70087 = state_70053__$1;
(statearr_70067_70087[(2)] = inst_70030);

(statearr_70067_70087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (10))){
var inst_70049 = (state_70053[(2)]);
var state_70053__$1 = state_70053;
var statearr_70068_70088 = state_70053__$1;
(statearr_70068_70088[(2)] = inst_70049);

(statearr_70068_70088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70054 === (8))){
var inst_70030 = (state_70053[(7)]);
var inst_70040 = cljs.core.next.call(null,inst_70030);
var inst_70030__$1 = inst_70040;
var state_70053__$1 = (function (){var statearr_70069 = state_70053;
(statearr_70069[(7)] = inst_70030__$1);

return statearr_70069;
})();
var statearr_70070_70089 = state_70053__$1;
(statearr_70070_70089[(2)] = null);

(statearr_70070_70089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto__))
;
return ((function (switch__69405__auto__,c__69495__auto__){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_70071 = [null,null,null,null,null,null,null,null];
(statearr_70071[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_70071[(1)] = (1));

return statearr_70071;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_70053){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_70053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e70072){if((e70072 instanceof Object)){
var ex__69409__auto__ = e70072;
var statearr_70073_70090 = state_70053;
(statearr_70073_70090[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70091 = state_70053;
state_70053 = G__70091;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_70053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_70053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__))
})();
var state__69497__auto__ = (function (){var statearr_70074 = f__69496__auto__.call(null);
(statearr_70074[(6)] = c__69495__auto__);

return statearr_70074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__))
);

return c__69495__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__65150__auto__ = (((_ == null))?null:_);
var m__65151__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,_);
} else {
var m__65151__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__65150__auto__ = (((m == null))?null:m);
var m__65151__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__65151__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__65150__auto__ = (((m == null))?null:m);
var m__65151__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,m,ch);
} else {
var m__65151__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__65150__auto__ = (((m == null))?null:m);
var m__65151__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,m);
} else {
var m__65151__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async70092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70092 = (function (ch,cs,meta70093){
this.ch = ch;
this.cs = cs;
this.meta70093 = meta70093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_70094,meta70093__$1){
var self__ = this;
var _70094__$1 = this;
return (new cljs.core.async.t_cljs$core$async70092(self__.ch,self__.cs,meta70093__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async70092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_70094){
var self__ = this;
var _70094__$1 = this;
return self__.meta70093;
});})(cs))
;

cljs.core.async.t_cljs$core$async70092.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async70092.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70092.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70092.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70092.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async70092.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta70093","meta70093",110690021,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async70092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70092";

cljs.core.async.t_cljs$core$async70092.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async70092");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async70092 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async70092(ch__$1,cs__$1,meta70093){
return (new cljs.core.async.t_cljs$core$async70092(ch__$1,cs__$1,meta70093));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async70092(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__69495__auto___70314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___70314,cs,m,dchan,dctr,done){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___70314,cs,m,dchan,dctr,done){
return (function (state_70229){
var state_val_70230 = (state_70229[(1)]);
if((state_val_70230 === (7))){
var inst_70225 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70231_70315 = state_70229__$1;
(statearr_70231_70315[(2)] = inst_70225);

(statearr_70231_70315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (20))){
var inst_70128 = (state_70229[(7)]);
var inst_70140 = cljs.core.first.call(null,inst_70128);
var inst_70141 = cljs.core.nth.call(null,inst_70140,(0),null);
var inst_70142 = cljs.core.nth.call(null,inst_70140,(1),null);
var state_70229__$1 = (function (){var statearr_70232 = state_70229;
(statearr_70232[(8)] = inst_70141);

return statearr_70232;
})();
if(cljs.core.truth_(inst_70142)){
var statearr_70233_70316 = state_70229__$1;
(statearr_70233_70316[(1)] = (22));

} else {
var statearr_70234_70317 = state_70229__$1;
(statearr_70234_70317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (27))){
var inst_70170 = (state_70229[(9)]);
var inst_70177 = (state_70229[(10)]);
var inst_70097 = (state_70229[(11)]);
var inst_70172 = (state_70229[(12)]);
var inst_70177__$1 = cljs.core._nth.call(null,inst_70170,inst_70172);
var inst_70178 = cljs.core.async.put_BANG_.call(null,inst_70177__$1,inst_70097,done);
var state_70229__$1 = (function (){var statearr_70235 = state_70229;
(statearr_70235[(10)] = inst_70177__$1);

return statearr_70235;
})();
if(cljs.core.truth_(inst_70178)){
var statearr_70236_70318 = state_70229__$1;
(statearr_70236_70318[(1)] = (30));

} else {
var statearr_70237_70319 = state_70229__$1;
(statearr_70237_70319[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (1))){
var state_70229__$1 = state_70229;
var statearr_70238_70320 = state_70229__$1;
(statearr_70238_70320[(2)] = null);

(statearr_70238_70320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (24))){
var inst_70128 = (state_70229[(7)]);
var inst_70147 = (state_70229[(2)]);
var inst_70148 = cljs.core.next.call(null,inst_70128);
var inst_70106 = inst_70148;
var inst_70107 = null;
var inst_70108 = (0);
var inst_70109 = (0);
var state_70229__$1 = (function (){var statearr_70239 = state_70229;
(statearr_70239[(13)] = inst_70108);

(statearr_70239[(14)] = inst_70107);

(statearr_70239[(15)] = inst_70106);

(statearr_70239[(16)] = inst_70147);

(statearr_70239[(17)] = inst_70109);

return statearr_70239;
})();
var statearr_70240_70321 = state_70229__$1;
(statearr_70240_70321[(2)] = null);

(statearr_70240_70321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (39))){
var state_70229__$1 = state_70229;
var statearr_70244_70322 = state_70229__$1;
(statearr_70244_70322[(2)] = null);

(statearr_70244_70322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (4))){
var inst_70097 = (state_70229[(11)]);
var inst_70097__$1 = (state_70229[(2)]);
var inst_70098 = (inst_70097__$1 == null);
var state_70229__$1 = (function (){var statearr_70245 = state_70229;
(statearr_70245[(11)] = inst_70097__$1);

return statearr_70245;
})();
if(cljs.core.truth_(inst_70098)){
var statearr_70246_70323 = state_70229__$1;
(statearr_70246_70323[(1)] = (5));

} else {
var statearr_70247_70324 = state_70229__$1;
(statearr_70247_70324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (15))){
var inst_70108 = (state_70229[(13)]);
var inst_70107 = (state_70229[(14)]);
var inst_70106 = (state_70229[(15)]);
var inst_70109 = (state_70229[(17)]);
var inst_70124 = (state_70229[(2)]);
var inst_70125 = (inst_70109 + (1));
var tmp70241 = inst_70108;
var tmp70242 = inst_70107;
var tmp70243 = inst_70106;
var inst_70106__$1 = tmp70243;
var inst_70107__$1 = tmp70242;
var inst_70108__$1 = tmp70241;
var inst_70109__$1 = inst_70125;
var state_70229__$1 = (function (){var statearr_70248 = state_70229;
(statearr_70248[(13)] = inst_70108__$1);

(statearr_70248[(14)] = inst_70107__$1);

(statearr_70248[(15)] = inst_70106__$1);

(statearr_70248[(18)] = inst_70124);

(statearr_70248[(17)] = inst_70109__$1);

return statearr_70248;
})();
var statearr_70249_70325 = state_70229__$1;
(statearr_70249_70325[(2)] = null);

(statearr_70249_70325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (21))){
var inst_70151 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70253_70326 = state_70229__$1;
(statearr_70253_70326[(2)] = inst_70151);

(statearr_70253_70326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (31))){
var inst_70177 = (state_70229[(10)]);
var inst_70181 = done.call(null,null);
var inst_70182 = cljs.core.async.untap_STAR_.call(null,m,inst_70177);
var state_70229__$1 = (function (){var statearr_70254 = state_70229;
(statearr_70254[(19)] = inst_70181);

return statearr_70254;
})();
var statearr_70255_70327 = state_70229__$1;
(statearr_70255_70327[(2)] = inst_70182);

(statearr_70255_70327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (32))){
var inst_70170 = (state_70229[(9)]);
var inst_70169 = (state_70229[(20)]);
var inst_70171 = (state_70229[(21)]);
var inst_70172 = (state_70229[(12)]);
var inst_70184 = (state_70229[(2)]);
var inst_70185 = (inst_70172 + (1));
var tmp70250 = inst_70170;
var tmp70251 = inst_70169;
var tmp70252 = inst_70171;
var inst_70169__$1 = tmp70251;
var inst_70170__$1 = tmp70250;
var inst_70171__$1 = tmp70252;
var inst_70172__$1 = inst_70185;
var state_70229__$1 = (function (){var statearr_70256 = state_70229;
(statearr_70256[(22)] = inst_70184);

(statearr_70256[(9)] = inst_70170__$1);

(statearr_70256[(20)] = inst_70169__$1);

(statearr_70256[(21)] = inst_70171__$1);

(statearr_70256[(12)] = inst_70172__$1);

return statearr_70256;
})();
var statearr_70257_70328 = state_70229__$1;
(statearr_70257_70328[(2)] = null);

(statearr_70257_70328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (40))){
var inst_70197 = (state_70229[(23)]);
var inst_70201 = done.call(null,null);
var inst_70202 = cljs.core.async.untap_STAR_.call(null,m,inst_70197);
var state_70229__$1 = (function (){var statearr_70258 = state_70229;
(statearr_70258[(24)] = inst_70201);

return statearr_70258;
})();
var statearr_70259_70329 = state_70229__$1;
(statearr_70259_70329[(2)] = inst_70202);

(statearr_70259_70329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (33))){
var inst_70188 = (state_70229[(25)]);
var inst_70190 = cljs.core.chunked_seq_QMARK_.call(null,inst_70188);
var state_70229__$1 = state_70229;
if(inst_70190){
var statearr_70260_70330 = state_70229__$1;
(statearr_70260_70330[(1)] = (36));

} else {
var statearr_70261_70331 = state_70229__$1;
(statearr_70261_70331[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (13))){
var inst_70118 = (state_70229[(26)]);
var inst_70121 = cljs.core.async.close_BANG_.call(null,inst_70118);
var state_70229__$1 = state_70229;
var statearr_70262_70332 = state_70229__$1;
(statearr_70262_70332[(2)] = inst_70121);

(statearr_70262_70332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (22))){
var inst_70141 = (state_70229[(8)]);
var inst_70144 = cljs.core.async.close_BANG_.call(null,inst_70141);
var state_70229__$1 = state_70229;
var statearr_70263_70333 = state_70229__$1;
(statearr_70263_70333[(2)] = inst_70144);

(statearr_70263_70333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (36))){
var inst_70188 = (state_70229[(25)]);
var inst_70192 = cljs.core.chunk_first.call(null,inst_70188);
var inst_70193 = cljs.core.chunk_rest.call(null,inst_70188);
var inst_70194 = cljs.core.count.call(null,inst_70192);
var inst_70169 = inst_70193;
var inst_70170 = inst_70192;
var inst_70171 = inst_70194;
var inst_70172 = (0);
var state_70229__$1 = (function (){var statearr_70264 = state_70229;
(statearr_70264[(9)] = inst_70170);

(statearr_70264[(20)] = inst_70169);

(statearr_70264[(21)] = inst_70171);

(statearr_70264[(12)] = inst_70172);

return statearr_70264;
})();
var statearr_70265_70334 = state_70229__$1;
(statearr_70265_70334[(2)] = null);

(statearr_70265_70334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (41))){
var inst_70188 = (state_70229[(25)]);
var inst_70204 = (state_70229[(2)]);
var inst_70205 = cljs.core.next.call(null,inst_70188);
var inst_70169 = inst_70205;
var inst_70170 = null;
var inst_70171 = (0);
var inst_70172 = (0);
var state_70229__$1 = (function (){var statearr_70266 = state_70229;
(statearr_70266[(9)] = inst_70170);

(statearr_70266[(20)] = inst_70169);

(statearr_70266[(21)] = inst_70171);

(statearr_70266[(27)] = inst_70204);

(statearr_70266[(12)] = inst_70172);

return statearr_70266;
})();
var statearr_70267_70335 = state_70229__$1;
(statearr_70267_70335[(2)] = null);

(statearr_70267_70335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (43))){
var state_70229__$1 = state_70229;
var statearr_70268_70336 = state_70229__$1;
(statearr_70268_70336[(2)] = null);

(statearr_70268_70336[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (29))){
var inst_70213 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70269_70337 = state_70229__$1;
(statearr_70269_70337[(2)] = inst_70213);

(statearr_70269_70337[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (44))){
var inst_70222 = (state_70229[(2)]);
var state_70229__$1 = (function (){var statearr_70270 = state_70229;
(statearr_70270[(28)] = inst_70222);

return statearr_70270;
})();
var statearr_70271_70338 = state_70229__$1;
(statearr_70271_70338[(2)] = null);

(statearr_70271_70338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (6))){
var inst_70161 = (state_70229[(29)]);
var inst_70160 = cljs.core.deref.call(null,cs);
var inst_70161__$1 = cljs.core.keys.call(null,inst_70160);
var inst_70162 = cljs.core.count.call(null,inst_70161__$1);
var inst_70163 = cljs.core.reset_BANG_.call(null,dctr,inst_70162);
var inst_70168 = cljs.core.seq.call(null,inst_70161__$1);
var inst_70169 = inst_70168;
var inst_70170 = null;
var inst_70171 = (0);
var inst_70172 = (0);
var state_70229__$1 = (function (){var statearr_70272 = state_70229;
(statearr_70272[(9)] = inst_70170);

(statearr_70272[(20)] = inst_70169);

(statearr_70272[(29)] = inst_70161__$1);

(statearr_70272[(21)] = inst_70171);

(statearr_70272[(30)] = inst_70163);

(statearr_70272[(12)] = inst_70172);

return statearr_70272;
})();
var statearr_70273_70339 = state_70229__$1;
(statearr_70273_70339[(2)] = null);

(statearr_70273_70339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (28))){
var inst_70188 = (state_70229[(25)]);
var inst_70169 = (state_70229[(20)]);
var inst_70188__$1 = cljs.core.seq.call(null,inst_70169);
var state_70229__$1 = (function (){var statearr_70274 = state_70229;
(statearr_70274[(25)] = inst_70188__$1);

return statearr_70274;
})();
if(inst_70188__$1){
var statearr_70275_70340 = state_70229__$1;
(statearr_70275_70340[(1)] = (33));

} else {
var statearr_70276_70341 = state_70229__$1;
(statearr_70276_70341[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (25))){
var inst_70171 = (state_70229[(21)]);
var inst_70172 = (state_70229[(12)]);
var inst_70174 = (inst_70172 < inst_70171);
var inst_70175 = inst_70174;
var state_70229__$1 = state_70229;
if(cljs.core.truth_(inst_70175)){
var statearr_70277_70342 = state_70229__$1;
(statearr_70277_70342[(1)] = (27));

} else {
var statearr_70278_70343 = state_70229__$1;
(statearr_70278_70343[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (34))){
var state_70229__$1 = state_70229;
var statearr_70279_70344 = state_70229__$1;
(statearr_70279_70344[(2)] = null);

(statearr_70279_70344[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (17))){
var state_70229__$1 = state_70229;
var statearr_70280_70345 = state_70229__$1;
(statearr_70280_70345[(2)] = null);

(statearr_70280_70345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (3))){
var inst_70227 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70229__$1,inst_70227);
} else {
if((state_val_70230 === (12))){
var inst_70156 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70281_70346 = state_70229__$1;
(statearr_70281_70346[(2)] = inst_70156);

(statearr_70281_70346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (2))){
var state_70229__$1 = state_70229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70229__$1,(4),ch);
} else {
if((state_val_70230 === (23))){
var state_70229__$1 = state_70229;
var statearr_70282_70347 = state_70229__$1;
(statearr_70282_70347[(2)] = null);

(statearr_70282_70347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (35))){
var inst_70211 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70283_70348 = state_70229__$1;
(statearr_70283_70348[(2)] = inst_70211);

(statearr_70283_70348[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (19))){
var inst_70128 = (state_70229[(7)]);
var inst_70132 = cljs.core.chunk_first.call(null,inst_70128);
var inst_70133 = cljs.core.chunk_rest.call(null,inst_70128);
var inst_70134 = cljs.core.count.call(null,inst_70132);
var inst_70106 = inst_70133;
var inst_70107 = inst_70132;
var inst_70108 = inst_70134;
var inst_70109 = (0);
var state_70229__$1 = (function (){var statearr_70284 = state_70229;
(statearr_70284[(13)] = inst_70108);

(statearr_70284[(14)] = inst_70107);

(statearr_70284[(15)] = inst_70106);

(statearr_70284[(17)] = inst_70109);

return statearr_70284;
})();
var statearr_70285_70349 = state_70229__$1;
(statearr_70285_70349[(2)] = null);

(statearr_70285_70349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (11))){
var inst_70128 = (state_70229[(7)]);
var inst_70106 = (state_70229[(15)]);
var inst_70128__$1 = cljs.core.seq.call(null,inst_70106);
var state_70229__$1 = (function (){var statearr_70286 = state_70229;
(statearr_70286[(7)] = inst_70128__$1);

return statearr_70286;
})();
if(inst_70128__$1){
var statearr_70287_70350 = state_70229__$1;
(statearr_70287_70350[(1)] = (16));

} else {
var statearr_70288_70351 = state_70229__$1;
(statearr_70288_70351[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (9))){
var inst_70158 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70289_70352 = state_70229__$1;
(statearr_70289_70352[(2)] = inst_70158);

(statearr_70289_70352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (5))){
var inst_70104 = cljs.core.deref.call(null,cs);
var inst_70105 = cljs.core.seq.call(null,inst_70104);
var inst_70106 = inst_70105;
var inst_70107 = null;
var inst_70108 = (0);
var inst_70109 = (0);
var state_70229__$1 = (function (){var statearr_70290 = state_70229;
(statearr_70290[(13)] = inst_70108);

(statearr_70290[(14)] = inst_70107);

(statearr_70290[(15)] = inst_70106);

(statearr_70290[(17)] = inst_70109);

return statearr_70290;
})();
var statearr_70291_70353 = state_70229__$1;
(statearr_70291_70353[(2)] = null);

(statearr_70291_70353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (14))){
var state_70229__$1 = state_70229;
var statearr_70292_70354 = state_70229__$1;
(statearr_70292_70354[(2)] = null);

(statearr_70292_70354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (45))){
var inst_70219 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70293_70355 = state_70229__$1;
(statearr_70293_70355[(2)] = inst_70219);

(statearr_70293_70355[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (26))){
var inst_70161 = (state_70229[(29)]);
var inst_70215 = (state_70229[(2)]);
var inst_70216 = cljs.core.seq.call(null,inst_70161);
var state_70229__$1 = (function (){var statearr_70294 = state_70229;
(statearr_70294[(31)] = inst_70215);

return statearr_70294;
})();
if(inst_70216){
var statearr_70295_70356 = state_70229__$1;
(statearr_70295_70356[(1)] = (42));

} else {
var statearr_70296_70357 = state_70229__$1;
(statearr_70296_70357[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (16))){
var inst_70128 = (state_70229[(7)]);
var inst_70130 = cljs.core.chunked_seq_QMARK_.call(null,inst_70128);
var state_70229__$1 = state_70229;
if(inst_70130){
var statearr_70297_70358 = state_70229__$1;
(statearr_70297_70358[(1)] = (19));

} else {
var statearr_70298_70359 = state_70229__$1;
(statearr_70298_70359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (38))){
var inst_70208 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70299_70360 = state_70229__$1;
(statearr_70299_70360[(2)] = inst_70208);

(statearr_70299_70360[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (30))){
var state_70229__$1 = state_70229;
var statearr_70300_70361 = state_70229__$1;
(statearr_70300_70361[(2)] = null);

(statearr_70300_70361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (10))){
var inst_70107 = (state_70229[(14)]);
var inst_70109 = (state_70229[(17)]);
var inst_70117 = cljs.core._nth.call(null,inst_70107,inst_70109);
var inst_70118 = cljs.core.nth.call(null,inst_70117,(0),null);
var inst_70119 = cljs.core.nth.call(null,inst_70117,(1),null);
var state_70229__$1 = (function (){var statearr_70301 = state_70229;
(statearr_70301[(26)] = inst_70118);

return statearr_70301;
})();
if(cljs.core.truth_(inst_70119)){
var statearr_70302_70362 = state_70229__$1;
(statearr_70302_70362[(1)] = (13));

} else {
var statearr_70303_70363 = state_70229__$1;
(statearr_70303_70363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (18))){
var inst_70154 = (state_70229[(2)]);
var state_70229__$1 = state_70229;
var statearr_70304_70364 = state_70229__$1;
(statearr_70304_70364[(2)] = inst_70154);

(statearr_70304_70364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (42))){
var state_70229__$1 = state_70229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70229__$1,(45),dchan);
} else {
if((state_val_70230 === (37))){
var inst_70188 = (state_70229[(25)]);
var inst_70197 = (state_70229[(23)]);
var inst_70097 = (state_70229[(11)]);
var inst_70197__$1 = cljs.core.first.call(null,inst_70188);
var inst_70198 = cljs.core.async.put_BANG_.call(null,inst_70197__$1,inst_70097,done);
var state_70229__$1 = (function (){var statearr_70305 = state_70229;
(statearr_70305[(23)] = inst_70197__$1);

return statearr_70305;
})();
if(cljs.core.truth_(inst_70198)){
var statearr_70306_70365 = state_70229__$1;
(statearr_70306_70365[(1)] = (39));

} else {
var statearr_70307_70366 = state_70229__$1;
(statearr_70307_70366[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70230 === (8))){
var inst_70108 = (state_70229[(13)]);
var inst_70109 = (state_70229[(17)]);
var inst_70111 = (inst_70109 < inst_70108);
var inst_70112 = inst_70111;
var state_70229__$1 = state_70229;
if(cljs.core.truth_(inst_70112)){
var statearr_70308_70367 = state_70229__$1;
(statearr_70308_70367[(1)] = (10));

} else {
var statearr_70309_70368 = state_70229__$1;
(statearr_70309_70368[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___70314,cs,m,dchan,dctr,done))
;
return ((function (switch__69405__auto__,c__69495__auto___70314,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__69406__auto__ = null;
var cljs$core$async$mult_$_state_machine__69406__auto____0 = (function (){
var statearr_70310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70310[(0)] = cljs$core$async$mult_$_state_machine__69406__auto__);

(statearr_70310[(1)] = (1));

return statearr_70310;
});
var cljs$core$async$mult_$_state_machine__69406__auto____1 = (function (state_70229){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_70229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e70311){if((e70311 instanceof Object)){
var ex__69409__auto__ = e70311;
var statearr_70312_70369 = state_70229;
(statearr_70312_70369[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70370 = state_70229;
state_70229 = G__70370;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__69406__auto__ = function(state_70229){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__69406__auto____1.call(this,state_70229);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__69406__auto____0;
cljs$core$async$mult_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__69406__auto____1;
return cljs$core$async$mult_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___70314,cs,m,dchan,dctr,done))
})();
var state__69497__auto__ = (function (){var statearr_70313 = f__69496__auto__.call(null);
(statearr_70313[(6)] = c__69495__auto___70314);

return statearr_70313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___70314,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__70372 = arguments.length;
switch (G__70372) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__65150__auto__ = (((m == null))?null:m);
var m__65151__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,m,ch);
} else {
var m__65151__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__65150__auto__ = (((m == null))?null:m);
var m__65151__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,m,ch);
} else {
var m__65151__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__65150__auto__ = (((m == null))?null:m);
var m__65151__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,m);
} else {
var m__65151__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__65150__auto__ = (((m == null))?null:m);
var m__65151__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,m,state_map);
} else {
var m__65151__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__65150__auto__ = (((m == null))?null:m);
var m__65151__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,m,mode);
} else {
var m__65151__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__65701__auto__ = [];
var len__65694__auto___70384 = arguments.length;
var i__65695__auto___70385 = (0);
while(true){
if((i__65695__auto___70385 < len__65694__auto___70384)){
args__65701__auto__.push((arguments[i__65695__auto___70385]));

var G__70386 = (i__65695__auto___70385 + (1));
i__65695__auto___70385 = G__70386;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((3) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__65702__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70378){
var map__70379 = p__70378;
var map__70379__$1 = ((((!((map__70379 == null)))?((((map__70379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70379):map__70379);
var opts = map__70379__$1;
var statearr_70381_70387 = state;
(statearr_70381_70387[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__70379,map__70379__$1,opts){
return (function (val){
var statearr_70382_70388 = state;
(statearr_70382_70388[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__70379,map__70379__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_70383_70389 = state;
(statearr_70383_70389[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70374){
var G__70375 = cljs.core.first.call(null,seq70374);
var seq70374__$1 = cljs.core.next.call(null,seq70374);
var G__70376 = cljs.core.first.call(null,seq70374__$1);
var seq70374__$2 = cljs.core.next.call(null,seq70374__$1);
var G__70377 = cljs.core.first.call(null,seq70374__$2);
var seq70374__$3 = cljs.core.next.call(null,seq70374__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__70375,G__70376,G__70377,seq70374__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async70390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70390 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta70391){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta70391 = meta70391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70392,meta70391__$1){
var self__ = this;
var _70392__$1 = this;
return (new cljs.core.async.t_cljs$core$async70390(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta70391__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70392){
var self__ = this;
var _70392__$1 = this;
return self__.meta70391;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta70391","meta70391",-119515511,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70390";

cljs.core.async.t_cljs$core$async70390.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async70390");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async70390 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async70390(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta70391){
return (new cljs.core.async.t_cljs$core$async70390(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta70391));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async70390(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69495__auto___70554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___70554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___70554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_70494){
var state_val_70495 = (state_70494[(1)]);
if((state_val_70495 === (7))){
var inst_70409 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
var statearr_70496_70555 = state_70494__$1;
(statearr_70496_70555[(2)] = inst_70409);

(statearr_70496_70555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (20))){
var inst_70421 = (state_70494[(7)]);
var state_70494__$1 = state_70494;
var statearr_70497_70556 = state_70494__$1;
(statearr_70497_70556[(2)] = inst_70421);

(statearr_70497_70556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (27))){
var state_70494__$1 = state_70494;
var statearr_70498_70557 = state_70494__$1;
(statearr_70498_70557[(2)] = null);

(statearr_70498_70557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (1))){
var inst_70396 = (state_70494[(8)]);
var inst_70396__$1 = calc_state.call(null);
var inst_70398 = (inst_70396__$1 == null);
var inst_70399 = cljs.core.not.call(null,inst_70398);
var state_70494__$1 = (function (){var statearr_70499 = state_70494;
(statearr_70499[(8)] = inst_70396__$1);

return statearr_70499;
})();
if(inst_70399){
var statearr_70500_70558 = state_70494__$1;
(statearr_70500_70558[(1)] = (2));

} else {
var statearr_70501_70559 = state_70494__$1;
(statearr_70501_70559[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (24))){
var inst_70454 = (state_70494[(9)]);
var inst_70468 = (state_70494[(10)]);
var inst_70445 = (state_70494[(11)]);
var inst_70468__$1 = inst_70445.call(null,inst_70454);
var state_70494__$1 = (function (){var statearr_70502 = state_70494;
(statearr_70502[(10)] = inst_70468__$1);

return statearr_70502;
})();
if(cljs.core.truth_(inst_70468__$1)){
var statearr_70503_70560 = state_70494__$1;
(statearr_70503_70560[(1)] = (29));

} else {
var statearr_70504_70561 = state_70494__$1;
(statearr_70504_70561[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (4))){
var inst_70412 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
if(cljs.core.truth_(inst_70412)){
var statearr_70505_70562 = state_70494__$1;
(statearr_70505_70562[(1)] = (8));

} else {
var statearr_70506_70563 = state_70494__$1;
(statearr_70506_70563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (15))){
var inst_70439 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
if(cljs.core.truth_(inst_70439)){
var statearr_70507_70564 = state_70494__$1;
(statearr_70507_70564[(1)] = (19));

} else {
var statearr_70508_70565 = state_70494__$1;
(statearr_70508_70565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (21))){
var inst_70444 = (state_70494[(12)]);
var inst_70444__$1 = (state_70494[(2)]);
var inst_70445 = cljs.core.get.call(null,inst_70444__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70446 = cljs.core.get.call(null,inst_70444__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70447 = cljs.core.get.call(null,inst_70444__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70494__$1 = (function (){var statearr_70509 = state_70494;
(statearr_70509[(12)] = inst_70444__$1);

(statearr_70509[(13)] = inst_70446);

(statearr_70509[(11)] = inst_70445);

return statearr_70509;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_70494__$1,(22),inst_70447);
} else {
if((state_val_70495 === (31))){
var inst_70476 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
if(cljs.core.truth_(inst_70476)){
var statearr_70510_70566 = state_70494__$1;
(statearr_70510_70566[(1)] = (32));

} else {
var statearr_70511_70567 = state_70494__$1;
(statearr_70511_70567[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (32))){
var inst_70453 = (state_70494[(14)]);
var state_70494__$1 = state_70494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70494__$1,(35),out,inst_70453);
} else {
if((state_val_70495 === (33))){
var inst_70444 = (state_70494[(12)]);
var inst_70421 = inst_70444;
var state_70494__$1 = (function (){var statearr_70512 = state_70494;
(statearr_70512[(7)] = inst_70421);

return statearr_70512;
})();
var statearr_70513_70568 = state_70494__$1;
(statearr_70513_70568[(2)] = null);

(statearr_70513_70568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (13))){
var inst_70421 = (state_70494[(7)]);
var inst_70428 = inst_70421.cljs$lang$protocol_mask$partition0$;
var inst_70429 = (inst_70428 & (64));
var inst_70430 = inst_70421.cljs$core$ISeq$;
var inst_70431 = (cljs.core.PROTOCOL_SENTINEL === inst_70430);
var inst_70432 = (inst_70429) || (inst_70431);
var state_70494__$1 = state_70494;
if(cljs.core.truth_(inst_70432)){
var statearr_70514_70569 = state_70494__$1;
(statearr_70514_70569[(1)] = (16));

} else {
var statearr_70515_70570 = state_70494__$1;
(statearr_70515_70570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (22))){
var inst_70453 = (state_70494[(14)]);
var inst_70454 = (state_70494[(9)]);
var inst_70452 = (state_70494[(2)]);
var inst_70453__$1 = cljs.core.nth.call(null,inst_70452,(0),null);
var inst_70454__$1 = cljs.core.nth.call(null,inst_70452,(1),null);
var inst_70455 = (inst_70453__$1 == null);
var inst_70456 = cljs.core._EQ_.call(null,inst_70454__$1,change);
var inst_70457 = (inst_70455) || (inst_70456);
var state_70494__$1 = (function (){var statearr_70516 = state_70494;
(statearr_70516[(14)] = inst_70453__$1);

(statearr_70516[(9)] = inst_70454__$1);

return statearr_70516;
})();
if(cljs.core.truth_(inst_70457)){
var statearr_70517_70571 = state_70494__$1;
(statearr_70517_70571[(1)] = (23));

} else {
var statearr_70518_70572 = state_70494__$1;
(statearr_70518_70572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (36))){
var inst_70444 = (state_70494[(12)]);
var inst_70421 = inst_70444;
var state_70494__$1 = (function (){var statearr_70519 = state_70494;
(statearr_70519[(7)] = inst_70421);

return statearr_70519;
})();
var statearr_70520_70573 = state_70494__$1;
(statearr_70520_70573[(2)] = null);

(statearr_70520_70573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (29))){
var inst_70468 = (state_70494[(10)]);
var state_70494__$1 = state_70494;
var statearr_70521_70574 = state_70494__$1;
(statearr_70521_70574[(2)] = inst_70468);

(statearr_70521_70574[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (6))){
var state_70494__$1 = state_70494;
var statearr_70522_70575 = state_70494__$1;
(statearr_70522_70575[(2)] = false);

(statearr_70522_70575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (28))){
var inst_70464 = (state_70494[(2)]);
var inst_70465 = calc_state.call(null);
var inst_70421 = inst_70465;
var state_70494__$1 = (function (){var statearr_70523 = state_70494;
(statearr_70523[(7)] = inst_70421);

(statearr_70523[(15)] = inst_70464);

return statearr_70523;
})();
var statearr_70524_70576 = state_70494__$1;
(statearr_70524_70576[(2)] = null);

(statearr_70524_70576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (25))){
var inst_70490 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
var statearr_70525_70577 = state_70494__$1;
(statearr_70525_70577[(2)] = inst_70490);

(statearr_70525_70577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (34))){
var inst_70488 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
var statearr_70526_70578 = state_70494__$1;
(statearr_70526_70578[(2)] = inst_70488);

(statearr_70526_70578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (17))){
var state_70494__$1 = state_70494;
var statearr_70527_70579 = state_70494__$1;
(statearr_70527_70579[(2)] = false);

(statearr_70527_70579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (3))){
var state_70494__$1 = state_70494;
var statearr_70528_70580 = state_70494__$1;
(statearr_70528_70580[(2)] = false);

(statearr_70528_70580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (12))){
var inst_70492 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70494__$1,inst_70492);
} else {
if((state_val_70495 === (2))){
var inst_70396 = (state_70494[(8)]);
var inst_70401 = inst_70396.cljs$lang$protocol_mask$partition0$;
var inst_70402 = (inst_70401 & (64));
var inst_70403 = inst_70396.cljs$core$ISeq$;
var inst_70404 = (cljs.core.PROTOCOL_SENTINEL === inst_70403);
var inst_70405 = (inst_70402) || (inst_70404);
var state_70494__$1 = state_70494;
if(cljs.core.truth_(inst_70405)){
var statearr_70529_70581 = state_70494__$1;
(statearr_70529_70581[(1)] = (5));

} else {
var statearr_70530_70582 = state_70494__$1;
(statearr_70530_70582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (23))){
var inst_70453 = (state_70494[(14)]);
var inst_70459 = (inst_70453 == null);
var state_70494__$1 = state_70494;
if(cljs.core.truth_(inst_70459)){
var statearr_70531_70583 = state_70494__$1;
(statearr_70531_70583[(1)] = (26));

} else {
var statearr_70532_70584 = state_70494__$1;
(statearr_70532_70584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (35))){
var inst_70479 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
if(cljs.core.truth_(inst_70479)){
var statearr_70533_70585 = state_70494__$1;
(statearr_70533_70585[(1)] = (36));

} else {
var statearr_70534_70586 = state_70494__$1;
(statearr_70534_70586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (19))){
var inst_70421 = (state_70494[(7)]);
var inst_70441 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70421);
var state_70494__$1 = state_70494;
var statearr_70535_70587 = state_70494__$1;
(statearr_70535_70587[(2)] = inst_70441);

(statearr_70535_70587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (11))){
var inst_70421 = (state_70494[(7)]);
var inst_70425 = (inst_70421 == null);
var inst_70426 = cljs.core.not.call(null,inst_70425);
var state_70494__$1 = state_70494;
if(inst_70426){
var statearr_70536_70588 = state_70494__$1;
(statearr_70536_70588[(1)] = (13));

} else {
var statearr_70537_70589 = state_70494__$1;
(statearr_70537_70589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (9))){
var inst_70396 = (state_70494[(8)]);
var state_70494__$1 = state_70494;
var statearr_70538_70590 = state_70494__$1;
(statearr_70538_70590[(2)] = inst_70396);

(statearr_70538_70590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (5))){
var state_70494__$1 = state_70494;
var statearr_70539_70591 = state_70494__$1;
(statearr_70539_70591[(2)] = true);

(statearr_70539_70591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (14))){
var state_70494__$1 = state_70494;
var statearr_70540_70592 = state_70494__$1;
(statearr_70540_70592[(2)] = false);

(statearr_70540_70592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (26))){
var inst_70454 = (state_70494[(9)]);
var inst_70461 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_70454);
var state_70494__$1 = state_70494;
var statearr_70541_70593 = state_70494__$1;
(statearr_70541_70593[(2)] = inst_70461);

(statearr_70541_70593[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (16))){
var state_70494__$1 = state_70494;
var statearr_70542_70594 = state_70494__$1;
(statearr_70542_70594[(2)] = true);

(statearr_70542_70594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (38))){
var inst_70484 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
var statearr_70543_70595 = state_70494__$1;
(statearr_70543_70595[(2)] = inst_70484);

(statearr_70543_70595[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (30))){
var inst_70454 = (state_70494[(9)]);
var inst_70446 = (state_70494[(13)]);
var inst_70445 = (state_70494[(11)]);
var inst_70471 = cljs.core.empty_QMARK_.call(null,inst_70445);
var inst_70472 = inst_70446.call(null,inst_70454);
var inst_70473 = cljs.core.not.call(null,inst_70472);
var inst_70474 = (inst_70471) && (inst_70473);
var state_70494__$1 = state_70494;
var statearr_70544_70596 = state_70494__$1;
(statearr_70544_70596[(2)] = inst_70474);

(statearr_70544_70596[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (10))){
var inst_70396 = (state_70494[(8)]);
var inst_70417 = (state_70494[(2)]);
var inst_70418 = cljs.core.get.call(null,inst_70417,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70419 = cljs.core.get.call(null,inst_70417,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70420 = cljs.core.get.call(null,inst_70417,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70421 = inst_70396;
var state_70494__$1 = (function (){var statearr_70545 = state_70494;
(statearr_70545[(7)] = inst_70421);

(statearr_70545[(16)] = inst_70420);

(statearr_70545[(17)] = inst_70418);

(statearr_70545[(18)] = inst_70419);

return statearr_70545;
})();
var statearr_70546_70597 = state_70494__$1;
(statearr_70546_70597[(2)] = null);

(statearr_70546_70597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (18))){
var inst_70436 = (state_70494[(2)]);
var state_70494__$1 = state_70494;
var statearr_70547_70598 = state_70494__$1;
(statearr_70547_70598[(2)] = inst_70436);

(statearr_70547_70598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (37))){
var state_70494__$1 = state_70494;
var statearr_70548_70599 = state_70494__$1;
(statearr_70548_70599[(2)] = null);

(statearr_70548_70599[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70495 === (8))){
var inst_70396 = (state_70494[(8)]);
var inst_70414 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70396);
var state_70494__$1 = state_70494;
var statearr_70549_70600 = state_70494__$1;
(statearr_70549_70600[(2)] = inst_70414);

(statearr_70549_70600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___70554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__69405__auto__,c__69495__auto___70554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__69406__auto__ = null;
var cljs$core$async$mix_$_state_machine__69406__auto____0 = (function (){
var statearr_70550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70550[(0)] = cljs$core$async$mix_$_state_machine__69406__auto__);

(statearr_70550[(1)] = (1));

return statearr_70550;
});
var cljs$core$async$mix_$_state_machine__69406__auto____1 = (function (state_70494){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_70494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e70551){if((e70551 instanceof Object)){
var ex__69409__auto__ = e70551;
var statearr_70552_70601 = state_70494;
(statearr_70552_70601[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70602 = state_70494;
state_70494 = G__70602;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__69406__auto__ = function(state_70494){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__69406__auto____1.call(this,state_70494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__69406__auto____0;
cljs$core$async$mix_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__69406__auto____1;
return cljs$core$async$mix_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___70554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__69497__auto__ = (function (){var statearr_70553 = f__69496__auto__.call(null);
(statearr_70553[(6)] = c__69495__auto___70554);

return statearr_70553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___70554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__65150__auto__ = (((p == null))?null:p);
var m__65151__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__65151__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__65150__auto__ = (((p == null))?null:p);
var m__65151__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,p,v,ch);
} else {
var m__65151__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__70604 = arguments.length;
switch (G__70604) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__65150__auto__ = (((p == null))?null:p);
var m__65151__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,p);
} else {
var m__65151__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__65150__auto__ = (((p == null))?null:p);
var m__65151__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,p,v);
} else {
var m__65151__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__70608 = arguments.length;
switch (G__70608) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__64417__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__64417__auto__,mults){
return (function (p1__70606_SHARP_){
if(cljs.core.truth_(p1__70606_SHARP_.call(null,topic))){
return p1__70606_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__70606_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__64417__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async70609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70609 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70610){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70610 = meta70610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_70611,meta70610__$1){
var self__ = this;
var _70611__$1 = this;
return (new cljs.core.async.t_cljs$core$async70609(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70610__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_70611){
var self__ = this;
var _70611__$1 = this;
return self__.meta70610;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70609.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70610","meta70610",744569642,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70609";

cljs.core.async.t_cljs$core$async70609.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async70609");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async70609 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async70609(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70610){
return (new cljs.core.async.t_cljs$core$async70609(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70610));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async70609(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69495__auto___70729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___70729,mults,ensure_mult,p){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___70729,mults,ensure_mult,p){
return (function (state_70683){
var state_val_70684 = (state_70683[(1)]);
if((state_val_70684 === (7))){
var inst_70679 = (state_70683[(2)]);
var state_70683__$1 = state_70683;
var statearr_70685_70730 = state_70683__$1;
(statearr_70685_70730[(2)] = inst_70679);

(statearr_70685_70730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (20))){
var state_70683__$1 = state_70683;
var statearr_70686_70731 = state_70683__$1;
(statearr_70686_70731[(2)] = null);

(statearr_70686_70731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (1))){
var state_70683__$1 = state_70683;
var statearr_70687_70732 = state_70683__$1;
(statearr_70687_70732[(2)] = null);

(statearr_70687_70732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (24))){
var inst_70662 = (state_70683[(7)]);
var inst_70671 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_70662);
var state_70683__$1 = state_70683;
var statearr_70688_70733 = state_70683__$1;
(statearr_70688_70733[(2)] = inst_70671);

(statearr_70688_70733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (4))){
var inst_70614 = (state_70683[(8)]);
var inst_70614__$1 = (state_70683[(2)]);
var inst_70615 = (inst_70614__$1 == null);
var state_70683__$1 = (function (){var statearr_70689 = state_70683;
(statearr_70689[(8)] = inst_70614__$1);

return statearr_70689;
})();
if(cljs.core.truth_(inst_70615)){
var statearr_70690_70734 = state_70683__$1;
(statearr_70690_70734[(1)] = (5));

} else {
var statearr_70691_70735 = state_70683__$1;
(statearr_70691_70735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (15))){
var inst_70656 = (state_70683[(2)]);
var state_70683__$1 = state_70683;
var statearr_70692_70736 = state_70683__$1;
(statearr_70692_70736[(2)] = inst_70656);

(statearr_70692_70736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (21))){
var inst_70676 = (state_70683[(2)]);
var state_70683__$1 = (function (){var statearr_70693 = state_70683;
(statearr_70693[(9)] = inst_70676);

return statearr_70693;
})();
var statearr_70694_70737 = state_70683__$1;
(statearr_70694_70737[(2)] = null);

(statearr_70694_70737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (13))){
var inst_70638 = (state_70683[(10)]);
var inst_70640 = cljs.core.chunked_seq_QMARK_.call(null,inst_70638);
var state_70683__$1 = state_70683;
if(inst_70640){
var statearr_70695_70738 = state_70683__$1;
(statearr_70695_70738[(1)] = (16));

} else {
var statearr_70696_70739 = state_70683__$1;
(statearr_70696_70739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (22))){
var inst_70668 = (state_70683[(2)]);
var state_70683__$1 = state_70683;
if(cljs.core.truth_(inst_70668)){
var statearr_70697_70740 = state_70683__$1;
(statearr_70697_70740[(1)] = (23));

} else {
var statearr_70698_70741 = state_70683__$1;
(statearr_70698_70741[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (6))){
var inst_70614 = (state_70683[(8)]);
var inst_70664 = (state_70683[(11)]);
var inst_70662 = (state_70683[(7)]);
var inst_70662__$1 = topic_fn.call(null,inst_70614);
var inst_70663 = cljs.core.deref.call(null,mults);
var inst_70664__$1 = cljs.core.get.call(null,inst_70663,inst_70662__$1);
var state_70683__$1 = (function (){var statearr_70699 = state_70683;
(statearr_70699[(11)] = inst_70664__$1);

(statearr_70699[(7)] = inst_70662__$1);

return statearr_70699;
})();
if(cljs.core.truth_(inst_70664__$1)){
var statearr_70700_70742 = state_70683__$1;
(statearr_70700_70742[(1)] = (19));

} else {
var statearr_70701_70743 = state_70683__$1;
(statearr_70701_70743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (25))){
var inst_70673 = (state_70683[(2)]);
var state_70683__$1 = state_70683;
var statearr_70702_70744 = state_70683__$1;
(statearr_70702_70744[(2)] = inst_70673);

(statearr_70702_70744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (17))){
var inst_70638 = (state_70683[(10)]);
var inst_70647 = cljs.core.first.call(null,inst_70638);
var inst_70648 = cljs.core.async.muxch_STAR_.call(null,inst_70647);
var inst_70649 = cljs.core.async.close_BANG_.call(null,inst_70648);
var inst_70650 = cljs.core.next.call(null,inst_70638);
var inst_70624 = inst_70650;
var inst_70625 = null;
var inst_70626 = (0);
var inst_70627 = (0);
var state_70683__$1 = (function (){var statearr_70703 = state_70683;
(statearr_70703[(12)] = inst_70624);

(statearr_70703[(13)] = inst_70627);

(statearr_70703[(14)] = inst_70625);

(statearr_70703[(15)] = inst_70626);

(statearr_70703[(16)] = inst_70649);

return statearr_70703;
})();
var statearr_70704_70745 = state_70683__$1;
(statearr_70704_70745[(2)] = null);

(statearr_70704_70745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (3))){
var inst_70681 = (state_70683[(2)]);
var state_70683__$1 = state_70683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70683__$1,inst_70681);
} else {
if((state_val_70684 === (12))){
var inst_70658 = (state_70683[(2)]);
var state_70683__$1 = state_70683;
var statearr_70705_70746 = state_70683__$1;
(statearr_70705_70746[(2)] = inst_70658);

(statearr_70705_70746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (2))){
var state_70683__$1 = state_70683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70683__$1,(4),ch);
} else {
if((state_val_70684 === (23))){
var state_70683__$1 = state_70683;
var statearr_70706_70747 = state_70683__$1;
(statearr_70706_70747[(2)] = null);

(statearr_70706_70747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (19))){
var inst_70614 = (state_70683[(8)]);
var inst_70664 = (state_70683[(11)]);
var inst_70666 = cljs.core.async.muxch_STAR_.call(null,inst_70664);
var state_70683__$1 = state_70683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70683__$1,(22),inst_70666,inst_70614);
} else {
if((state_val_70684 === (11))){
var inst_70624 = (state_70683[(12)]);
var inst_70638 = (state_70683[(10)]);
var inst_70638__$1 = cljs.core.seq.call(null,inst_70624);
var state_70683__$1 = (function (){var statearr_70707 = state_70683;
(statearr_70707[(10)] = inst_70638__$1);

return statearr_70707;
})();
if(inst_70638__$1){
var statearr_70708_70748 = state_70683__$1;
(statearr_70708_70748[(1)] = (13));

} else {
var statearr_70709_70749 = state_70683__$1;
(statearr_70709_70749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (9))){
var inst_70660 = (state_70683[(2)]);
var state_70683__$1 = state_70683;
var statearr_70710_70750 = state_70683__$1;
(statearr_70710_70750[(2)] = inst_70660);

(statearr_70710_70750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (5))){
var inst_70621 = cljs.core.deref.call(null,mults);
var inst_70622 = cljs.core.vals.call(null,inst_70621);
var inst_70623 = cljs.core.seq.call(null,inst_70622);
var inst_70624 = inst_70623;
var inst_70625 = null;
var inst_70626 = (0);
var inst_70627 = (0);
var state_70683__$1 = (function (){var statearr_70711 = state_70683;
(statearr_70711[(12)] = inst_70624);

(statearr_70711[(13)] = inst_70627);

(statearr_70711[(14)] = inst_70625);

(statearr_70711[(15)] = inst_70626);

return statearr_70711;
})();
var statearr_70712_70751 = state_70683__$1;
(statearr_70712_70751[(2)] = null);

(statearr_70712_70751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (14))){
var state_70683__$1 = state_70683;
var statearr_70716_70752 = state_70683__$1;
(statearr_70716_70752[(2)] = null);

(statearr_70716_70752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (16))){
var inst_70638 = (state_70683[(10)]);
var inst_70642 = cljs.core.chunk_first.call(null,inst_70638);
var inst_70643 = cljs.core.chunk_rest.call(null,inst_70638);
var inst_70644 = cljs.core.count.call(null,inst_70642);
var inst_70624 = inst_70643;
var inst_70625 = inst_70642;
var inst_70626 = inst_70644;
var inst_70627 = (0);
var state_70683__$1 = (function (){var statearr_70717 = state_70683;
(statearr_70717[(12)] = inst_70624);

(statearr_70717[(13)] = inst_70627);

(statearr_70717[(14)] = inst_70625);

(statearr_70717[(15)] = inst_70626);

return statearr_70717;
})();
var statearr_70718_70753 = state_70683__$1;
(statearr_70718_70753[(2)] = null);

(statearr_70718_70753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (10))){
var inst_70624 = (state_70683[(12)]);
var inst_70627 = (state_70683[(13)]);
var inst_70625 = (state_70683[(14)]);
var inst_70626 = (state_70683[(15)]);
var inst_70632 = cljs.core._nth.call(null,inst_70625,inst_70627);
var inst_70633 = cljs.core.async.muxch_STAR_.call(null,inst_70632);
var inst_70634 = cljs.core.async.close_BANG_.call(null,inst_70633);
var inst_70635 = (inst_70627 + (1));
var tmp70713 = inst_70624;
var tmp70714 = inst_70625;
var tmp70715 = inst_70626;
var inst_70624__$1 = tmp70713;
var inst_70625__$1 = tmp70714;
var inst_70626__$1 = tmp70715;
var inst_70627__$1 = inst_70635;
var state_70683__$1 = (function (){var statearr_70719 = state_70683;
(statearr_70719[(12)] = inst_70624__$1);

(statearr_70719[(17)] = inst_70634);

(statearr_70719[(13)] = inst_70627__$1);

(statearr_70719[(14)] = inst_70625__$1);

(statearr_70719[(15)] = inst_70626__$1);

return statearr_70719;
})();
var statearr_70720_70754 = state_70683__$1;
(statearr_70720_70754[(2)] = null);

(statearr_70720_70754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (18))){
var inst_70653 = (state_70683[(2)]);
var state_70683__$1 = state_70683;
var statearr_70721_70755 = state_70683__$1;
(statearr_70721_70755[(2)] = inst_70653);

(statearr_70721_70755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70684 === (8))){
var inst_70627 = (state_70683[(13)]);
var inst_70626 = (state_70683[(15)]);
var inst_70629 = (inst_70627 < inst_70626);
var inst_70630 = inst_70629;
var state_70683__$1 = state_70683;
if(cljs.core.truth_(inst_70630)){
var statearr_70722_70756 = state_70683__$1;
(statearr_70722_70756[(1)] = (10));

} else {
var statearr_70723_70757 = state_70683__$1;
(statearr_70723_70757[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___70729,mults,ensure_mult,p))
;
return ((function (switch__69405__auto__,c__69495__auto___70729,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_70724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70724[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_70724[(1)] = (1));

return statearr_70724;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_70683){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_70683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e70725){if((e70725 instanceof Object)){
var ex__69409__auto__ = e70725;
var statearr_70726_70758 = state_70683;
(statearr_70726_70758[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70759 = state_70683;
state_70683 = G__70759;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_70683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_70683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___70729,mults,ensure_mult,p))
})();
var state__69497__auto__ = (function (){var statearr_70727 = f__69496__auto__.call(null);
(statearr_70727[(6)] = c__69495__auto___70729);

return statearr_70727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___70729,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__70761 = arguments.length;
switch (G__70761) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__70764 = arguments.length;
switch (G__70764) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__70767 = arguments.length;
switch (G__70767) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__69495__auto___70834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___70834,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___70834,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_70806){
var state_val_70807 = (state_70806[(1)]);
if((state_val_70807 === (7))){
var state_70806__$1 = state_70806;
var statearr_70808_70835 = state_70806__$1;
(statearr_70808_70835[(2)] = null);

(statearr_70808_70835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (1))){
var state_70806__$1 = state_70806;
var statearr_70809_70836 = state_70806__$1;
(statearr_70809_70836[(2)] = null);

(statearr_70809_70836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (4))){
var inst_70770 = (state_70806[(7)]);
var inst_70772 = (inst_70770 < cnt);
var state_70806__$1 = state_70806;
if(cljs.core.truth_(inst_70772)){
var statearr_70810_70837 = state_70806__$1;
(statearr_70810_70837[(1)] = (6));

} else {
var statearr_70811_70838 = state_70806__$1;
(statearr_70811_70838[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (15))){
var inst_70802 = (state_70806[(2)]);
var state_70806__$1 = state_70806;
var statearr_70812_70839 = state_70806__$1;
(statearr_70812_70839[(2)] = inst_70802);

(statearr_70812_70839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (13))){
var inst_70795 = cljs.core.async.close_BANG_.call(null,out);
var state_70806__$1 = state_70806;
var statearr_70813_70840 = state_70806__$1;
(statearr_70813_70840[(2)] = inst_70795);

(statearr_70813_70840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (6))){
var state_70806__$1 = state_70806;
var statearr_70814_70841 = state_70806__$1;
(statearr_70814_70841[(2)] = null);

(statearr_70814_70841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (3))){
var inst_70804 = (state_70806[(2)]);
var state_70806__$1 = state_70806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70806__$1,inst_70804);
} else {
if((state_val_70807 === (12))){
var inst_70792 = (state_70806[(8)]);
var inst_70792__$1 = (state_70806[(2)]);
var inst_70793 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_70792__$1);
var state_70806__$1 = (function (){var statearr_70815 = state_70806;
(statearr_70815[(8)] = inst_70792__$1);

return statearr_70815;
})();
if(cljs.core.truth_(inst_70793)){
var statearr_70816_70842 = state_70806__$1;
(statearr_70816_70842[(1)] = (13));

} else {
var statearr_70817_70843 = state_70806__$1;
(statearr_70817_70843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (2))){
var inst_70769 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_70770 = (0);
var state_70806__$1 = (function (){var statearr_70818 = state_70806;
(statearr_70818[(7)] = inst_70770);

(statearr_70818[(9)] = inst_70769);

return statearr_70818;
})();
var statearr_70819_70844 = state_70806__$1;
(statearr_70819_70844[(2)] = null);

(statearr_70819_70844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (11))){
var inst_70770 = (state_70806[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_70806,(10),Object,null,(9));
var inst_70779 = chs__$1.call(null,inst_70770);
var inst_70780 = done.call(null,inst_70770);
var inst_70781 = cljs.core.async.take_BANG_.call(null,inst_70779,inst_70780);
var state_70806__$1 = state_70806;
var statearr_70820_70845 = state_70806__$1;
(statearr_70820_70845[(2)] = inst_70781);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70806__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (9))){
var inst_70770 = (state_70806[(7)]);
var inst_70783 = (state_70806[(2)]);
var inst_70784 = (inst_70770 + (1));
var inst_70770__$1 = inst_70784;
var state_70806__$1 = (function (){var statearr_70821 = state_70806;
(statearr_70821[(7)] = inst_70770__$1);

(statearr_70821[(10)] = inst_70783);

return statearr_70821;
})();
var statearr_70822_70846 = state_70806__$1;
(statearr_70822_70846[(2)] = null);

(statearr_70822_70846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (5))){
var inst_70790 = (state_70806[(2)]);
var state_70806__$1 = (function (){var statearr_70823 = state_70806;
(statearr_70823[(11)] = inst_70790);

return statearr_70823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70806__$1,(12),dchan);
} else {
if((state_val_70807 === (14))){
var inst_70792 = (state_70806[(8)]);
var inst_70797 = cljs.core.apply.call(null,f,inst_70792);
var state_70806__$1 = state_70806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70806__$1,(16),out,inst_70797);
} else {
if((state_val_70807 === (16))){
var inst_70799 = (state_70806[(2)]);
var state_70806__$1 = (function (){var statearr_70824 = state_70806;
(statearr_70824[(12)] = inst_70799);

return statearr_70824;
})();
var statearr_70825_70847 = state_70806__$1;
(statearr_70825_70847[(2)] = null);

(statearr_70825_70847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (10))){
var inst_70774 = (state_70806[(2)]);
var inst_70775 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_70806__$1 = (function (){var statearr_70826 = state_70806;
(statearr_70826[(13)] = inst_70774);

return statearr_70826;
})();
var statearr_70827_70848 = state_70806__$1;
(statearr_70827_70848[(2)] = inst_70775);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70806__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70807 === (8))){
var inst_70788 = (state_70806[(2)]);
var state_70806__$1 = state_70806;
var statearr_70828_70849 = state_70806__$1;
(statearr_70828_70849[(2)] = inst_70788);

(statearr_70828_70849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___70834,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__69405__auto__,c__69495__auto___70834,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_70829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70829[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_70829[(1)] = (1));

return statearr_70829;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_70806){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_70806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e70830){if((e70830 instanceof Object)){
var ex__69409__auto__ = e70830;
var statearr_70831_70850 = state_70806;
(statearr_70831_70850[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70851 = state_70806;
state_70806 = G__70851;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_70806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_70806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___70834,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__69497__auto__ = (function (){var statearr_70832 = f__69496__auto__.call(null);
(statearr_70832[(6)] = c__69495__auto___70834);

return statearr_70832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___70834,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__70854 = arguments.length;
switch (G__70854) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69495__auto___70908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___70908,out){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___70908,out){
return (function (state_70886){
var state_val_70887 = (state_70886[(1)]);
if((state_val_70887 === (7))){
var inst_70865 = (state_70886[(7)]);
var inst_70866 = (state_70886[(8)]);
var inst_70865__$1 = (state_70886[(2)]);
var inst_70866__$1 = cljs.core.nth.call(null,inst_70865__$1,(0),null);
var inst_70867 = cljs.core.nth.call(null,inst_70865__$1,(1),null);
var inst_70868 = (inst_70866__$1 == null);
var state_70886__$1 = (function (){var statearr_70888 = state_70886;
(statearr_70888[(9)] = inst_70867);

(statearr_70888[(7)] = inst_70865__$1);

(statearr_70888[(8)] = inst_70866__$1);

return statearr_70888;
})();
if(cljs.core.truth_(inst_70868)){
var statearr_70889_70909 = state_70886__$1;
(statearr_70889_70909[(1)] = (8));

} else {
var statearr_70890_70910 = state_70886__$1;
(statearr_70890_70910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70887 === (1))){
var inst_70855 = cljs.core.vec.call(null,chs);
var inst_70856 = inst_70855;
var state_70886__$1 = (function (){var statearr_70891 = state_70886;
(statearr_70891[(10)] = inst_70856);

return statearr_70891;
})();
var statearr_70892_70911 = state_70886__$1;
(statearr_70892_70911[(2)] = null);

(statearr_70892_70911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70887 === (4))){
var inst_70856 = (state_70886[(10)]);
var state_70886__$1 = state_70886;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70886__$1,(7),inst_70856);
} else {
if((state_val_70887 === (6))){
var inst_70882 = (state_70886[(2)]);
var state_70886__$1 = state_70886;
var statearr_70893_70912 = state_70886__$1;
(statearr_70893_70912[(2)] = inst_70882);

(statearr_70893_70912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70887 === (3))){
var inst_70884 = (state_70886[(2)]);
var state_70886__$1 = state_70886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70886__$1,inst_70884);
} else {
if((state_val_70887 === (2))){
var inst_70856 = (state_70886[(10)]);
var inst_70858 = cljs.core.count.call(null,inst_70856);
var inst_70859 = (inst_70858 > (0));
var state_70886__$1 = state_70886;
if(cljs.core.truth_(inst_70859)){
var statearr_70895_70913 = state_70886__$1;
(statearr_70895_70913[(1)] = (4));

} else {
var statearr_70896_70914 = state_70886__$1;
(statearr_70896_70914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70887 === (11))){
var inst_70856 = (state_70886[(10)]);
var inst_70875 = (state_70886[(2)]);
var tmp70894 = inst_70856;
var inst_70856__$1 = tmp70894;
var state_70886__$1 = (function (){var statearr_70897 = state_70886;
(statearr_70897[(11)] = inst_70875);

(statearr_70897[(10)] = inst_70856__$1);

return statearr_70897;
})();
var statearr_70898_70915 = state_70886__$1;
(statearr_70898_70915[(2)] = null);

(statearr_70898_70915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70887 === (9))){
var inst_70866 = (state_70886[(8)]);
var state_70886__$1 = state_70886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70886__$1,(11),out,inst_70866);
} else {
if((state_val_70887 === (5))){
var inst_70880 = cljs.core.async.close_BANG_.call(null,out);
var state_70886__$1 = state_70886;
var statearr_70899_70916 = state_70886__$1;
(statearr_70899_70916[(2)] = inst_70880);

(statearr_70899_70916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70887 === (10))){
var inst_70878 = (state_70886[(2)]);
var state_70886__$1 = state_70886;
var statearr_70900_70917 = state_70886__$1;
(statearr_70900_70917[(2)] = inst_70878);

(statearr_70900_70917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70887 === (8))){
var inst_70867 = (state_70886[(9)]);
var inst_70865 = (state_70886[(7)]);
var inst_70856 = (state_70886[(10)]);
var inst_70866 = (state_70886[(8)]);
var inst_70870 = (function (){var cs = inst_70856;
var vec__70861 = inst_70865;
var v = inst_70866;
var c = inst_70867;
return ((function (cs,vec__70861,v,c,inst_70867,inst_70865,inst_70856,inst_70866,state_val_70887,c__69495__auto___70908,out){
return (function (p1__70852_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__70852_SHARP_);
});
;})(cs,vec__70861,v,c,inst_70867,inst_70865,inst_70856,inst_70866,state_val_70887,c__69495__auto___70908,out))
})();
var inst_70871 = cljs.core.filterv.call(null,inst_70870,inst_70856);
var inst_70856__$1 = inst_70871;
var state_70886__$1 = (function (){var statearr_70901 = state_70886;
(statearr_70901[(10)] = inst_70856__$1);

return statearr_70901;
})();
var statearr_70902_70918 = state_70886__$1;
(statearr_70902_70918[(2)] = null);

(statearr_70902_70918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___70908,out))
;
return ((function (switch__69405__auto__,c__69495__auto___70908,out){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_70903 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70903[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_70903[(1)] = (1));

return statearr_70903;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_70886){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_70886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e70904){if((e70904 instanceof Object)){
var ex__69409__auto__ = e70904;
var statearr_70905_70919 = state_70886;
(statearr_70905_70919[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70920 = state_70886;
state_70886 = G__70920;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_70886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_70886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___70908,out))
})();
var state__69497__auto__ = (function (){var statearr_70906 = f__69496__auto__.call(null);
(statearr_70906[(6)] = c__69495__auto___70908);

return statearr_70906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___70908,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__70922 = arguments.length;
switch (G__70922) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69495__auto___70967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___70967,out){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___70967,out){
return (function (state_70946){
var state_val_70947 = (state_70946[(1)]);
if((state_val_70947 === (7))){
var inst_70928 = (state_70946[(7)]);
var inst_70928__$1 = (state_70946[(2)]);
var inst_70929 = (inst_70928__$1 == null);
var inst_70930 = cljs.core.not.call(null,inst_70929);
var state_70946__$1 = (function (){var statearr_70948 = state_70946;
(statearr_70948[(7)] = inst_70928__$1);

return statearr_70948;
})();
if(inst_70930){
var statearr_70949_70968 = state_70946__$1;
(statearr_70949_70968[(1)] = (8));

} else {
var statearr_70950_70969 = state_70946__$1;
(statearr_70950_70969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70947 === (1))){
var inst_70923 = (0);
var state_70946__$1 = (function (){var statearr_70951 = state_70946;
(statearr_70951[(8)] = inst_70923);

return statearr_70951;
})();
var statearr_70952_70970 = state_70946__$1;
(statearr_70952_70970[(2)] = null);

(statearr_70952_70970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70947 === (4))){
var state_70946__$1 = state_70946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70946__$1,(7),ch);
} else {
if((state_val_70947 === (6))){
var inst_70941 = (state_70946[(2)]);
var state_70946__$1 = state_70946;
var statearr_70953_70971 = state_70946__$1;
(statearr_70953_70971[(2)] = inst_70941);

(statearr_70953_70971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70947 === (3))){
var inst_70943 = (state_70946[(2)]);
var inst_70944 = cljs.core.async.close_BANG_.call(null,out);
var state_70946__$1 = (function (){var statearr_70954 = state_70946;
(statearr_70954[(9)] = inst_70943);

return statearr_70954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70946__$1,inst_70944);
} else {
if((state_val_70947 === (2))){
var inst_70923 = (state_70946[(8)]);
var inst_70925 = (inst_70923 < n);
var state_70946__$1 = state_70946;
if(cljs.core.truth_(inst_70925)){
var statearr_70955_70972 = state_70946__$1;
(statearr_70955_70972[(1)] = (4));

} else {
var statearr_70956_70973 = state_70946__$1;
(statearr_70956_70973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70947 === (11))){
var inst_70923 = (state_70946[(8)]);
var inst_70933 = (state_70946[(2)]);
var inst_70934 = (inst_70923 + (1));
var inst_70923__$1 = inst_70934;
var state_70946__$1 = (function (){var statearr_70957 = state_70946;
(statearr_70957[(10)] = inst_70933);

(statearr_70957[(8)] = inst_70923__$1);

return statearr_70957;
})();
var statearr_70958_70974 = state_70946__$1;
(statearr_70958_70974[(2)] = null);

(statearr_70958_70974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70947 === (9))){
var state_70946__$1 = state_70946;
var statearr_70959_70975 = state_70946__$1;
(statearr_70959_70975[(2)] = null);

(statearr_70959_70975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70947 === (5))){
var state_70946__$1 = state_70946;
var statearr_70960_70976 = state_70946__$1;
(statearr_70960_70976[(2)] = null);

(statearr_70960_70976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70947 === (10))){
var inst_70938 = (state_70946[(2)]);
var state_70946__$1 = state_70946;
var statearr_70961_70977 = state_70946__$1;
(statearr_70961_70977[(2)] = inst_70938);

(statearr_70961_70977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70947 === (8))){
var inst_70928 = (state_70946[(7)]);
var state_70946__$1 = state_70946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70946__$1,(11),out,inst_70928);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___70967,out))
;
return ((function (switch__69405__auto__,c__69495__auto___70967,out){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_70962 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70962[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_70962[(1)] = (1));

return statearr_70962;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_70946){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_70946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e70963){if((e70963 instanceof Object)){
var ex__69409__auto__ = e70963;
var statearr_70964_70978 = state_70946;
(statearr_70964_70978[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70979 = state_70946;
state_70946 = G__70979;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_70946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_70946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___70967,out))
})();
var state__69497__auto__ = (function (){var statearr_70965 = f__69496__auto__.call(null);
(statearr_70965[(6)] = c__69495__auto___70967);

return statearr_70965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___70967,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70981 = (function (f,ch,meta70982){
this.f = f;
this.ch = ch;
this.meta70982 = meta70982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70983,meta70982__$1){
var self__ = this;
var _70983__$1 = this;
return (new cljs.core.async.t_cljs$core$async70981(self__.f,self__.ch,meta70982__$1));
});

cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70983){
var self__ = this;
var _70983__$1 = this;
return self__.meta70982;
});

cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async70984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70984 = (function (f,ch,meta70982,_,fn1,meta70985){
this.f = f;
this.ch = ch;
this.meta70982 = meta70982;
this._ = _;
this.fn1 = fn1;
this.meta70985 = meta70985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_70986,meta70985__$1){
var self__ = this;
var _70986__$1 = this;
return (new cljs.core.async.t_cljs$core$async70984(self__.f,self__.ch,self__.meta70982,self__._,self__.fn1,meta70985__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async70984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_70986){
var self__ = this;
var _70986__$1 = this;
return self__.meta70985;
});})(___$1))
;

cljs.core.async.t_cljs$core$async70984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async70984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__70980_SHARP_){
return f1.call(null,(((p1__70980_SHARP_ == null))?null:self__.f.call(null,p1__70980_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async70984.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70982","meta70982",-926358295,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async70981","cljs.core.async/t_cljs$core$async70981",850851818,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta70985","meta70985",-1721260051,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70984";

cljs.core.async.t_cljs$core$async70984.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async70984");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async70984 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70984(f__$1,ch__$1,meta70982__$1,___$2,fn1__$1,meta70985){
return (new cljs.core.async.t_cljs$core$async70984(f__$1,ch__$1,meta70982__$1,___$2,fn1__$1,meta70985));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async70984(self__.f,self__.ch,self__.meta70982,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__64405__auto__ = ret;
if(cljs.core.truth_(and__64405__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__64405__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async70981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70982","meta70982",-926358295,null)], null);
});

cljs.core.async.t_cljs$core$async70981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70981";

cljs.core.async.t_cljs$core$async70981.cljs$lang$ctorPrWriter = (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async70981");
});

cljs.core.async.__GT_t_cljs$core$async70981 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70981(f__$1,ch__$1,meta70982){
return (new cljs.core.async.t_cljs$core$async70981(f__$1,ch__$1,meta70982));
});

}

return (new cljs.core.async.t_cljs$core$async70981(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70987 = (function (f,ch,meta70988){
this.f = f;
this.ch = ch;
this.meta70988 = meta70988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70989,meta70988__$1){
var self__ = this;
var _70989__$1 = this;
return (new cljs.core.async.t_cljs$core$async70987(self__.f,self__.ch,meta70988__$1));
});

cljs.core.async.t_cljs$core$async70987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70989){
var self__ = this;
var _70989__$1 = this;
return self__.meta70988;
});

cljs.core.async.t_cljs$core$async70987.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70987.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async70987.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async70987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70988","meta70988",-2028423507,null)], null);
});

cljs.core.async.t_cljs$core$async70987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70987";

cljs.core.async.t_cljs$core$async70987.cljs$lang$ctorPrWriter = (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async70987");
});

cljs.core.async.__GT_t_cljs$core$async70987 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async70987(f__$1,ch__$1,meta70988){
return (new cljs.core.async.t_cljs$core$async70987(f__$1,ch__$1,meta70988));
});

}

return (new cljs.core.async.t_cljs$core$async70987(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async70990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70990 = (function (p,ch,meta70991){
this.p = p;
this.ch = ch;
this.meta70991 = meta70991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70992,meta70991__$1){
var self__ = this;
var _70992__$1 = this;
return (new cljs.core.async.t_cljs$core$async70990(self__.p,self__.ch,meta70991__$1));
});

cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70992){
var self__ = this;
var _70992__$1 = this;
return self__.meta70991;
});

cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async70990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70991","meta70991",-232773800,null)], null);
});

cljs.core.async.t_cljs$core$async70990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70990";

cljs.core.async.t_cljs$core$async70990.cljs$lang$ctorPrWriter = (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.core.async/t_cljs$core$async70990");
});

cljs.core.async.__GT_t_cljs$core$async70990 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async70990(p__$1,ch__$1,meta70991){
return (new cljs.core.async.t_cljs$core$async70990(p__$1,ch__$1,meta70991));
});

}

return (new cljs.core.async.t_cljs$core$async70990(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__70994 = arguments.length;
switch (G__70994) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69495__auto___71034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___71034,out){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___71034,out){
return (function (state_71015){
var state_val_71016 = (state_71015[(1)]);
if((state_val_71016 === (7))){
var inst_71011 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
var statearr_71017_71035 = state_71015__$1;
(statearr_71017_71035[(2)] = inst_71011);

(statearr_71017_71035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (1))){
var state_71015__$1 = state_71015;
var statearr_71018_71036 = state_71015__$1;
(statearr_71018_71036[(2)] = null);

(statearr_71018_71036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (4))){
var inst_70997 = (state_71015[(7)]);
var inst_70997__$1 = (state_71015[(2)]);
var inst_70998 = (inst_70997__$1 == null);
var state_71015__$1 = (function (){var statearr_71019 = state_71015;
(statearr_71019[(7)] = inst_70997__$1);

return statearr_71019;
})();
if(cljs.core.truth_(inst_70998)){
var statearr_71020_71037 = state_71015__$1;
(statearr_71020_71037[(1)] = (5));

} else {
var statearr_71021_71038 = state_71015__$1;
(statearr_71021_71038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (6))){
var inst_70997 = (state_71015[(7)]);
var inst_71002 = p.call(null,inst_70997);
var state_71015__$1 = state_71015;
if(cljs.core.truth_(inst_71002)){
var statearr_71022_71039 = state_71015__$1;
(statearr_71022_71039[(1)] = (8));

} else {
var statearr_71023_71040 = state_71015__$1;
(statearr_71023_71040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (3))){
var inst_71013 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71015__$1,inst_71013);
} else {
if((state_val_71016 === (2))){
var state_71015__$1 = state_71015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71015__$1,(4),ch);
} else {
if((state_val_71016 === (11))){
var inst_71005 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
var statearr_71024_71041 = state_71015__$1;
(statearr_71024_71041[(2)] = inst_71005);

(statearr_71024_71041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (9))){
var state_71015__$1 = state_71015;
var statearr_71025_71042 = state_71015__$1;
(statearr_71025_71042[(2)] = null);

(statearr_71025_71042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (5))){
var inst_71000 = cljs.core.async.close_BANG_.call(null,out);
var state_71015__$1 = state_71015;
var statearr_71026_71043 = state_71015__$1;
(statearr_71026_71043[(2)] = inst_71000);

(statearr_71026_71043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (10))){
var inst_71008 = (state_71015[(2)]);
var state_71015__$1 = (function (){var statearr_71027 = state_71015;
(statearr_71027[(8)] = inst_71008);

return statearr_71027;
})();
var statearr_71028_71044 = state_71015__$1;
(statearr_71028_71044[(2)] = null);

(statearr_71028_71044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (8))){
var inst_70997 = (state_71015[(7)]);
var state_71015__$1 = state_71015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71015__$1,(11),out,inst_70997);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___71034,out))
;
return ((function (switch__69405__auto__,c__69495__auto___71034,out){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_71029 = [null,null,null,null,null,null,null,null,null];
(statearr_71029[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_71029[(1)] = (1));

return statearr_71029;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_71015){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_71015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e71030){if((e71030 instanceof Object)){
var ex__69409__auto__ = e71030;
var statearr_71031_71045 = state_71015;
(statearr_71031_71045[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71046 = state_71015;
state_71015 = G__71046;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_71015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_71015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___71034,out))
})();
var state__69497__auto__ = (function (){var statearr_71032 = f__69496__auto__.call(null);
(statearr_71032[(6)] = c__69495__auto___71034);

return statearr_71032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___71034,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__71048 = arguments.length;
switch (G__71048) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__){
return (function (state_71111){
var state_val_71112 = (state_71111[(1)]);
if((state_val_71112 === (7))){
var inst_71107 = (state_71111[(2)]);
var state_71111__$1 = state_71111;
var statearr_71113_71151 = state_71111__$1;
(statearr_71113_71151[(2)] = inst_71107);

(statearr_71113_71151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (20))){
var inst_71077 = (state_71111[(7)]);
var inst_71088 = (state_71111[(2)]);
var inst_71089 = cljs.core.next.call(null,inst_71077);
var inst_71063 = inst_71089;
var inst_71064 = null;
var inst_71065 = (0);
var inst_71066 = (0);
var state_71111__$1 = (function (){var statearr_71114 = state_71111;
(statearr_71114[(8)] = inst_71088);

(statearr_71114[(9)] = inst_71066);

(statearr_71114[(10)] = inst_71065);

(statearr_71114[(11)] = inst_71064);

(statearr_71114[(12)] = inst_71063);

return statearr_71114;
})();
var statearr_71115_71152 = state_71111__$1;
(statearr_71115_71152[(2)] = null);

(statearr_71115_71152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (1))){
var state_71111__$1 = state_71111;
var statearr_71116_71153 = state_71111__$1;
(statearr_71116_71153[(2)] = null);

(statearr_71116_71153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (4))){
var inst_71052 = (state_71111[(13)]);
var inst_71052__$1 = (state_71111[(2)]);
var inst_71053 = (inst_71052__$1 == null);
var state_71111__$1 = (function (){var statearr_71117 = state_71111;
(statearr_71117[(13)] = inst_71052__$1);

return statearr_71117;
})();
if(cljs.core.truth_(inst_71053)){
var statearr_71118_71154 = state_71111__$1;
(statearr_71118_71154[(1)] = (5));

} else {
var statearr_71119_71155 = state_71111__$1;
(statearr_71119_71155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (15))){
var state_71111__$1 = state_71111;
var statearr_71123_71156 = state_71111__$1;
(statearr_71123_71156[(2)] = null);

(statearr_71123_71156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (21))){
var state_71111__$1 = state_71111;
var statearr_71124_71157 = state_71111__$1;
(statearr_71124_71157[(2)] = null);

(statearr_71124_71157[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (13))){
var inst_71066 = (state_71111[(9)]);
var inst_71065 = (state_71111[(10)]);
var inst_71064 = (state_71111[(11)]);
var inst_71063 = (state_71111[(12)]);
var inst_71073 = (state_71111[(2)]);
var inst_71074 = (inst_71066 + (1));
var tmp71120 = inst_71065;
var tmp71121 = inst_71064;
var tmp71122 = inst_71063;
var inst_71063__$1 = tmp71122;
var inst_71064__$1 = tmp71121;
var inst_71065__$1 = tmp71120;
var inst_71066__$1 = inst_71074;
var state_71111__$1 = (function (){var statearr_71125 = state_71111;
(statearr_71125[(9)] = inst_71066__$1);

(statearr_71125[(14)] = inst_71073);

(statearr_71125[(10)] = inst_71065__$1);

(statearr_71125[(11)] = inst_71064__$1);

(statearr_71125[(12)] = inst_71063__$1);

return statearr_71125;
})();
var statearr_71126_71158 = state_71111__$1;
(statearr_71126_71158[(2)] = null);

(statearr_71126_71158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (22))){
var state_71111__$1 = state_71111;
var statearr_71127_71159 = state_71111__$1;
(statearr_71127_71159[(2)] = null);

(statearr_71127_71159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (6))){
var inst_71052 = (state_71111[(13)]);
var inst_71061 = f.call(null,inst_71052);
var inst_71062 = cljs.core.seq.call(null,inst_71061);
var inst_71063 = inst_71062;
var inst_71064 = null;
var inst_71065 = (0);
var inst_71066 = (0);
var state_71111__$1 = (function (){var statearr_71128 = state_71111;
(statearr_71128[(9)] = inst_71066);

(statearr_71128[(10)] = inst_71065);

(statearr_71128[(11)] = inst_71064);

(statearr_71128[(12)] = inst_71063);

return statearr_71128;
})();
var statearr_71129_71160 = state_71111__$1;
(statearr_71129_71160[(2)] = null);

(statearr_71129_71160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (17))){
var inst_71077 = (state_71111[(7)]);
var inst_71081 = cljs.core.chunk_first.call(null,inst_71077);
var inst_71082 = cljs.core.chunk_rest.call(null,inst_71077);
var inst_71083 = cljs.core.count.call(null,inst_71081);
var inst_71063 = inst_71082;
var inst_71064 = inst_71081;
var inst_71065 = inst_71083;
var inst_71066 = (0);
var state_71111__$1 = (function (){var statearr_71130 = state_71111;
(statearr_71130[(9)] = inst_71066);

(statearr_71130[(10)] = inst_71065);

(statearr_71130[(11)] = inst_71064);

(statearr_71130[(12)] = inst_71063);

return statearr_71130;
})();
var statearr_71131_71161 = state_71111__$1;
(statearr_71131_71161[(2)] = null);

(statearr_71131_71161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (3))){
var inst_71109 = (state_71111[(2)]);
var state_71111__$1 = state_71111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71111__$1,inst_71109);
} else {
if((state_val_71112 === (12))){
var inst_71097 = (state_71111[(2)]);
var state_71111__$1 = state_71111;
var statearr_71132_71162 = state_71111__$1;
(statearr_71132_71162[(2)] = inst_71097);

(statearr_71132_71162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (2))){
var state_71111__$1 = state_71111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71111__$1,(4),in$);
} else {
if((state_val_71112 === (23))){
var inst_71105 = (state_71111[(2)]);
var state_71111__$1 = state_71111;
var statearr_71133_71163 = state_71111__$1;
(statearr_71133_71163[(2)] = inst_71105);

(statearr_71133_71163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (19))){
var inst_71092 = (state_71111[(2)]);
var state_71111__$1 = state_71111;
var statearr_71134_71164 = state_71111__$1;
(statearr_71134_71164[(2)] = inst_71092);

(statearr_71134_71164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (11))){
var inst_71077 = (state_71111[(7)]);
var inst_71063 = (state_71111[(12)]);
var inst_71077__$1 = cljs.core.seq.call(null,inst_71063);
var state_71111__$1 = (function (){var statearr_71135 = state_71111;
(statearr_71135[(7)] = inst_71077__$1);

return statearr_71135;
})();
if(inst_71077__$1){
var statearr_71136_71165 = state_71111__$1;
(statearr_71136_71165[(1)] = (14));

} else {
var statearr_71137_71166 = state_71111__$1;
(statearr_71137_71166[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (9))){
var inst_71099 = (state_71111[(2)]);
var inst_71100 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_71111__$1 = (function (){var statearr_71138 = state_71111;
(statearr_71138[(15)] = inst_71099);

return statearr_71138;
})();
if(cljs.core.truth_(inst_71100)){
var statearr_71139_71167 = state_71111__$1;
(statearr_71139_71167[(1)] = (21));

} else {
var statearr_71140_71168 = state_71111__$1;
(statearr_71140_71168[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (5))){
var inst_71055 = cljs.core.async.close_BANG_.call(null,out);
var state_71111__$1 = state_71111;
var statearr_71141_71169 = state_71111__$1;
(statearr_71141_71169[(2)] = inst_71055);

(statearr_71141_71169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (14))){
var inst_71077 = (state_71111[(7)]);
var inst_71079 = cljs.core.chunked_seq_QMARK_.call(null,inst_71077);
var state_71111__$1 = state_71111;
if(inst_71079){
var statearr_71142_71170 = state_71111__$1;
(statearr_71142_71170[(1)] = (17));

} else {
var statearr_71143_71171 = state_71111__$1;
(statearr_71143_71171[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (16))){
var inst_71095 = (state_71111[(2)]);
var state_71111__$1 = state_71111;
var statearr_71144_71172 = state_71111__$1;
(statearr_71144_71172[(2)] = inst_71095);

(statearr_71144_71172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71112 === (10))){
var inst_71066 = (state_71111[(9)]);
var inst_71064 = (state_71111[(11)]);
var inst_71071 = cljs.core._nth.call(null,inst_71064,inst_71066);
var state_71111__$1 = state_71111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71111__$1,(13),out,inst_71071);
} else {
if((state_val_71112 === (18))){
var inst_71077 = (state_71111[(7)]);
var inst_71086 = cljs.core.first.call(null,inst_71077);
var state_71111__$1 = state_71111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71111__$1,(20),out,inst_71086);
} else {
if((state_val_71112 === (8))){
var inst_71066 = (state_71111[(9)]);
var inst_71065 = (state_71111[(10)]);
var inst_71068 = (inst_71066 < inst_71065);
var inst_71069 = inst_71068;
var state_71111__$1 = state_71111;
if(cljs.core.truth_(inst_71069)){
var statearr_71145_71173 = state_71111__$1;
(statearr_71145_71173[(1)] = (10));

} else {
var statearr_71146_71174 = state_71111__$1;
(statearr_71146_71174[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto__))
;
return ((function (switch__69405__auto__,c__69495__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__69406__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__69406__auto____0 = (function (){
var statearr_71147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71147[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__69406__auto__);

(statearr_71147[(1)] = (1));

return statearr_71147;
});
var cljs$core$async$mapcat_STAR__$_state_machine__69406__auto____1 = (function (state_71111){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_71111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e71148){if((e71148 instanceof Object)){
var ex__69409__auto__ = e71148;
var statearr_71149_71175 = state_71111;
(statearr_71149_71175[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71176 = state_71111;
state_71111 = G__71176;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__69406__auto__ = function(state_71111){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__69406__auto____1.call(this,state_71111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__69406__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__69406__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__))
})();
var state__69497__auto__ = (function (){var statearr_71150 = f__69496__auto__.call(null);
(statearr_71150[(6)] = c__69495__auto__);

return statearr_71150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__))
);

return c__69495__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__71178 = arguments.length;
switch (G__71178) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__71181 = arguments.length;
switch (G__71181) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__71184 = arguments.length;
switch (G__71184) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69495__auto___71231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___71231,out){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___71231,out){
return (function (state_71208){
var state_val_71209 = (state_71208[(1)]);
if((state_val_71209 === (7))){
var inst_71203 = (state_71208[(2)]);
var state_71208__$1 = state_71208;
var statearr_71210_71232 = state_71208__$1;
(statearr_71210_71232[(2)] = inst_71203);

(statearr_71210_71232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (1))){
var inst_71185 = null;
var state_71208__$1 = (function (){var statearr_71211 = state_71208;
(statearr_71211[(7)] = inst_71185);

return statearr_71211;
})();
var statearr_71212_71233 = state_71208__$1;
(statearr_71212_71233[(2)] = null);

(statearr_71212_71233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (4))){
var inst_71188 = (state_71208[(8)]);
var inst_71188__$1 = (state_71208[(2)]);
var inst_71189 = (inst_71188__$1 == null);
var inst_71190 = cljs.core.not.call(null,inst_71189);
var state_71208__$1 = (function (){var statearr_71213 = state_71208;
(statearr_71213[(8)] = inst_71188__$1);

return statearr_71213;
})();
if(inst_71190){
var statearr_71214_71234 = state_71208__$1;
(statearr_71214_71234[(1)] = (5));

} else {
var statearr_71215_71235 = state_71208__$1;
(statearr_71215_71235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (6))){
var state_71208__$1 = state_71208;
var statearr_71216_71236 = state_71208__$1;
(statearr_71216_71236[(2)] = null);

(statearr_71216_71236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (3))){
var inst_71205 = (state_71208[(2)]);
var inst_71206 = cljs.core.async.close_BANG_.call(null,out);
var state_71208__$1 = (function (){var statearr_71217 = state_71208;
(statearr_71217[(9)] = inst_71205);

return statearr_71217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71208__$1,inst_71206);
} else {
if((state_val_71209 === (2))){
var state_71208__$1 = state_71208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71208__$1,(4),ch);
} else {
if((state_val_71209 === (11))){
var inst_71188 = (state_71208[(8)]);
var inst_71197 = (state_71208[(2)]);
var inst_71185 = inst_71188;
var state_71208__$1 = (function (){var statearr_71218 = state_71208;
(statearr_71218[(7)] = inst_71185);

(statearr_71218[(10)] = inst_71197);

return statearr_71218;
})();
var statearr_71219_71237 = state_71208__$1;
(statearr_71219_71237[(2)] = null);

(statearr_71219_71237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (9))){
var inst_71188 = (state_71208[(8)]);
var state_71208__$1 = state_71208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71208__$1,(11),out,inst_71188);
} else {
if((state_val_71209 === (5))){
var inst_71185 = (state_71208[(7)]);
var inst_71188 = (state_71208[(8)]);
var inst_71192 = cljs.core._EQ_.call(null,inst_71188,inst_71185);
var state_71208__$1 = state_71208;
if(inst_71192){
var statearr_71221_71238 = state_71208__$1;
(statearr_71221_71238[(1)] = (8));

} else {
var statearr_71222_71239 = state_71208__$1;
(statearr_71222_71239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (10))){
var inst_71200 = (state_71208[(2)]);
var state_71208__$1 = state_71208;
var statearr_71223_71240 = state_71208__$1;
(statearr_71223_71240[(2)] = inst_71200);

(statearr_71223_71240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (8))){
var inst_71185 = (state_71208[(7)]);
var tmp71220 = inst_71185;
var inst_71185__$1 = tmp71220;
var state_71208__$1 = (function (){var statearr_71224 = state_71208;
(statearr_71224[(7)] = inst_71185__$1);

return statearr_71224;
})();
var statearr_71225_71241 = state_71208__$1;
(statearr_71225_71241[(2)] = null);

(statearr_71225_71241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___71231,out))
;
return ((function (switch__69405__auto__,c__69495__auto___71231,out){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_71226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71226[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_71226[(1)] = (1));

return statearr_71226;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_71208){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_71208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e71227){if((e71227 instanceof Object)){
var ex__69409__auto__ = e71227;
var statearr_71228_71242 = state_71208;
(statearr_71228_71242[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71243 = state_71208;
state_71208 = G__71243;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_71208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_71208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___71231,out))
})();
var state__69497__auto__ = (function (){var statearr_71229 = f__69496__auto__.call(null);
(statearr_71229[(6)] = c__69495__auto___71231);

return statearr_71229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___71231,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__71245 = arguments.length;
switch (G__71245) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69495__auto___71311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___71311,out){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___71311,out){
return (function (state_71283){
var state_val_71284 = (state_71283[(1)]);
if((state_val_71284 === (7))){
var inst_71279 = (state_71283[(2)]);
var state_71283__$1 = state_71283;
var statearr_71285_71312 = state_71283__$1;
(statearr_71285_71312[(2)] = inst_71279);

(statearr_71285_71312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (1))){
var inst_71246 = (new Array(n));
var inst_71247 = inst_71246;
var inst_71248 = (0);
var state_71283__$1 = (function (){var statearr_71286 = state_71283;
(statearr_71286[(7)] = inst_71248);

(statearr_71286[(8)] = inst_71247);

return statearr_71286;
})();
var statearr_71287_71313 = state_71283__$1;
(statearr_71287_71313[(2)] = null);

(statearr_71287_71313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (4))){
var inst_71251 = (state_71283[(9)]);
var inst_71251__$1 = (state_71283[(2)]);
var inst_71252 = (inst_71251__$1 == null);
var inst_71253 = cljs.core.not.call(null,inst_71252);
var state_71283__$1 = (function (){var statearr_71288 = state_71283;
(statearr_71288[(9)] = inst_71251__$1);

return statearr_71288;
})();
if(inst_71253){
var statearr_71289_71314 = state_71283__$1;
(statearr_71289_71314[(1)] = (5));

} else {
var statearr_71290_71315 = state_71283__$1;
(statearr_71290_71315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (15))){
var inst_71273 = (state_71283[(2)]);
var state_71283__$1 = state_71283;
var statearr_71291_71316 = state_71283__$1;
(statearr_71291_71316[(2)] = inst_71273);

(statearr_71291_71316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (13))){
var state_71283__$1 = state_71283;
var statearr_71292_71317 = state_71283__$1;
(statearr_71292_71317[(2)] = null);

(statearr_71292_71317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (6))){
var inst_71248 = (state_71283[(7)]);
var inst_71269 = (inst_71248 > (0));
var state_71283__$1 = state_71283;
if(cljs.core.truth_(inst_71269)){
var statearr_71293_71318 = state_71283__$1;
(statearr_71293_71318[(1)] = (12));

} else {
var statearr_71294_71319 = state_71283__$1;
(statearr_71294_71319[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (3))){
var inst_71281 = (state_71283[(2)]);
var state_71283__$1 = state_71283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71283__$1,inst_71281);
} else {
if((state_val_71284 === (12))){
var inst_71247 = (state_71283[(8)]);
var inst_71271 = cljs.core.vec.call(null,inst_71247);
var state_71283__$1 = state_71283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71283__$1,(15),out,inst_71271);
} else {
if((state_val_71284 === (2))){
var state_71283__$1 = state_71283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71283__$1,(4),ch);
} else {
if((state_val_71284 === (11))){
var inst_71263 = (state_71283[(2)]);
var inst_71264 = (new Array(n));
var inst_71247 = inst_71264;
var inst_71248 = (0);
var state_71283__$1 = (function (){var statearr_71295 = state_71283;
(statearr_71295[(7)] = inst_71248);

(statearr_71295[(10)] = inst_71263);

(statearr_71295[(8)] = inst_71247);

return statearr_71295;
})();
var statearr_71296_71320 = state_71283__$1;
(statearr_71296_71320[(2)] = null);

(statearr_71296_71320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (9))){
var inst_71247 = (state_71283[(8)]);
var inst_71261 = cljs.core.vec.call(null,inst_71247);
var state_71283__$1 = state_71283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71283__$1,(11),out,inst_71261);
} else {
if((state_val_71284 === (5))){
var inst_71248 = (state_71283[(7)]);
var inst_71256 = (state_71283[(11)]);
var inst_71247 = (state_71283[(8)]);
var inst_71251 = (state_71283[(9)]);
var inst_71255 = (inst_71247[inst_71248] = inst_71251);
var inst_71256__$1 = (inst_71248 + (1));
var inst_71257 = (inst_71256__$1 < n);
var state_71283__$1 = (function (){var statearr_71297 = state_71283;
(statearr_71297[(12)] = inst_71255);

(statearr_71297[(11)] = inst_71256__$1);

return statearr_71297;
})();
if(cljs.core.truth_(inst_71257)){
var statearr_71298_71321 = state_71283__$1;
(statearr_71298_71321[(1)] = (8));

} else {
var statearr_71299_71322 = state_71283__$1;
(statearr_71299_71322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (14))){
var inst_71276 = (state_71283[(2)]);
var inst_71277 = cljs.core.async.close_BANG_.call(null,out);
var state_71283__$1 = (function (){var statearr_71301 = state_71283;
(statearr_71301[(13)] = inst_71276);

return statearr_71301;
})();
var statearr_71302_71323 = state_71283__$1;
(statearr_71302_71323[(2)] = inst_71277);

(statearr_71302_71323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (10))){
var inst_71267 = (state_71283[(2)]);
var state_71283__$1 = state_71283;
var statearr_71303_71324 = state_71283__$1;
(statearr_71303_71324[(2)] = inst_71267);

(statearr_71303_71324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71284 === (8))){
var inst_71256 = (state_71283[(11)]);
var inst_71247 = (state_71283[(8)]);
var tmp71300 = inst_71247;
var inst_71247__$1 = tmp71300;
var inst_71248 = inst_71256;
var state_71283__$1 = (function (){var statearr_71304 = state_71283;
(statearr_71304[(7)] = inst_71248);

(statearr_71304[(8)] = inst_71247__$1);

return statearr_71304;
})();
var statearr_71305_71325 = state_71283__$1;
(statearr_71305_71325[(2)] = null);

(statearr_71305_71325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___71311,out))
;
return ((function (switch__69405__auto__,c__69495__auto___71311,out){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_71306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71306[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_71306[(1)] = (1));

return statearr_71306;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_71283){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_71283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e71307){if((e71307 instanceof Object)){
var ex__69409__auto__ = e71307;
var statearr_71308_71326 = state_71283;
(statearr_71308_71326[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71327 = state_71283;
state_71283 = G__71327;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_71283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_71283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___71311,out))
})();
var state__69497__auto__ = (function (){var statearr_71309 = f__69496__auto__.call(null);
(statearr_71309[(6)] = c__69495__auto___71311);

return statearr_71309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___71311,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__71329 = arguments.length;
switch (G__71329) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__69495__auto___71399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___71399,out){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___71399,out){
return (function (state_71371){
var state_val_71372 = (state_71371[(1)]);
if((state_val_71372 === (7))){
var inst_71367 = (state_71371[(2)]);
var state_71371__$1 = state_71371;
var statearr_71373_71400 = state_71371__$1;
(statearr_71373_71400[(2)] = inst_71367);

(statearr_71373_71400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (1))){
var inst_71330 = [];
var inst_71331 = inst_71330;
var inst_71332 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71371__$1 = (function (){var statearr_71374 = state_71371;
(statearr_71374[(7)] = inst_71332);

(statearr_71374[(8)] = inst_71331);

return statearr_71374;
})();
var statearr_71375_71401 = state_71371__$1;
(statearr_71375_71401[(2)] = null);

(statearr_71375_71401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (4))){
var inst_71335 = (state_71371[(9)]);
var inst_71335__$1 = (state_71371[(2)]);
var inst_71336 = (inst_71335__$1 == null);
var inst_71337 = cljs.core.not.call(null,inst_71336);
var state_71371__$1 = (function (){var statearr_71376 = state_71371;
(statearr_71376[(9)] = inst_71335__$1);

return statearr_71376;
})();
if(inst_71337){
var statearr_71377_71402 = state_71371__$1;
(statearr_71377_71402[(1)] = (5));

} else {
var statearr_71378_71403 = state_71371__$1;
(statearr_71378_71403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (15))){
var inst_71361 = (state_71371[(2)]);
var state_71371__$1 = state_71371;
var statearr_71379_71404 = state_71371__$1;
(statearr_71379_71404[(2)] = inst_71361);

(statearr_71379_71404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (13))){
var state_71371__$1 = state_71371;
var statearr_71380_71405 = state_71371__$1;
(statearr_71380_71405[(2)] = null);

(statearr_71380_71405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (6))){
var inst_71331 = (state_71371[(8)]);
var inst_71356 = inst_71331.length;
var inst_71357 = (inst_71356 > (0));
var state_71371__$1 = state_71371;
if(cljs.core.truth_(inst_71357)){
var statearr_71381_71406 = state_71371__$1;
(statearr_71381_71406[(1)] = (12));

} else {
var statearr_71382_71407 = state_71371__$1;
(statearr_71382_71407[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (3))){
var inst_71369 = (state_71371[(2)]);
var state_71371__$1 = state_71371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71371__$1,inst_71369);
} else {
if((state_val_71372 === (12))){
var inst_71331 = (state_71371[(8)]);
var inst_71359 = cljs.core.vec.call(null,inst_71331);
var state_71371__$1 = state_71371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71371__$1,(15),out,inst_71359);
} else {
if((state_val_71372 === (2))){
var state_71371__$1 = state_71371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71371__$1,(4),ch);
} else {
if((state_val_71372 === (11))){
var inst_71335 = (state_71371[(9)]);
var inst_71339 = (state_71371[(10)]);
var inst_71349 = (state_71371[(2)]);
var inst_71350 = [];
var inst_71351 = inst_71350.push(inst_71335);
var inst_71331 = inst_71350;
var inst_71332 = inst_71339;
var state_71371__$1 = (function (){var statearr_71383 = state_71371;
(statearr_71383[(7)] = inst_71332);

(statearr_71383[(11)] = inst_71351);

(statearr_71383[(12)] = inst_71349);

(statearr_71383[(8)] = inst_71331);

return statearr_71383;
})();
var statearr_71384_71408 = state_71371__$1;
(statearr_71384_71408[(2)] = null);

(statearr_71384_71408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (9))){
var inst_71331 = (state_71371[(8)]);
var inst_71347 = cljs.core.vec.call(null,inst_71331);
var state_71371__$1 = state_71371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71371__$1,(11),out,inst_71347);
} else {
if((state_val_71372 === (5))){
var inst_71332 = (state_71371[(7)]);
var inst_71335 = (state_71371[(9)]);
var inst_71339 = (state_71371[(10)]);
var inst_71339__$1 = f.call(null,inst_71335);
var inst_71340 = cljs.core._EQ_.call(null,inst_71339__$1,inst_71332);
var inst_71341 = cljs.core.keyword_identical_QMARK_.call(null,inst_71332,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_71342 = (inst_71340) || (inst_71341);
var state_71371__$1 = (function (){var statearr_71385 = state_71371;
(statearr_71385[(10)] = inst_71339__$1);

return statearr_71385;
})();
if(cljs.core.truth_(inst_71342)){
var statearr_71386_71409 = state_71371__$1;
(statearr_71386_71409[(1)] = (8));

} else {
var statearr_71387_71410 = state_71371__$1;
(statearr_71387_71410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (14))){
var inst_71364 = (state_71371[(2)]);
var inst_71365 = cljs.core.async.close_BANG_.call(null,out);
var state_71371__$1 = (function (){var statearr_71389 = state_71371;
(statearr_71389[(13)] = inst_71364);

return statearr_71389;
})();
var statearr_71390_71411 = state_71371__$1;
(statearr_71390_71411[(2)] = inst_71365);

(statearr_71390_71411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (10))){
var inst_71354 = (state_71371[(2)]);
var state_71371__$1 = state_71371;
var statearr_71391_71412 = state_71371__$1;
(statearr_71391_71412[(2)] = inst_71354);

(statearr_71391_71412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71372 === (8))){
var inst_71335 = (state_71371[(9)]);
var inst_71339 = (state_71371[(10)]);
var inst_71331 = (state_71371[(8)]);
var inst_71344 = inst_71331.push(inst_71335);
var tmp71388 = inst_71331;
var inst_71331__$1 = tmp71388;
var inst_71332 = inst_71339;
var state_71371__$1 = (function (){var statearr_71392 = state_71371;
(statearr_71392[(7)] = inst_71332);

(statearr_71392[(14)] = inst_71344);

(statearr_71392[(8)] = inst_71331__$1);

return statearr_71392;
})();
var statearr_71393_71413 = state_71371__$1;
(statearr_71393_71413[(2)] = null);

(statearr_71393_71413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__69495__auto___71399,out))
;
return ((function (switch__69405__auto__,c__69495__auto___71399,out){
return (function() {
var cljs$core$async$state_machine__69406__auto__ = null;
var cljs$core$async$state_machine__69406__auto____0 = (function (){
var statearr_71394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71394[(0)] = cljs$core$async$state_machine__69406__auto__);

(statearr_71394[(1)] = (1));

return statearr_71394;
});
var cljs$core$async$state_machine__69406__auto____1 = (function (state_71371){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_71371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e71395){if((e71395 instanceof Object)){
var ex__69409__auto__ = e71395;
var statearr_71396_71414 = state_71371;
(statearr_71396_71414[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71415 = state_71371;
state_71371 = G__71415;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
cljs$core$async$state_machine__69406__auto__ = function(state_71371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69406__auto____1.call(this,state_71371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69406__auto____0;
cljs$core$async$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69406__auto____1;
return cljs$core$async$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___71399,out))
})();
var state__69497__auto__ = (function (){var statearr_71397 = f__69496__auto__.call(null);
(statearr_71397[(6)] = c__69495__auto___71399);

return statearr_71397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___71399,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506558342629
