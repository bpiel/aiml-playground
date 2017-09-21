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
var G__14444 = arguments.length;
switch (G__14444) {
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
if(typeof cljs.core.async.t_cljs$core$async14445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14445 = (function (f,blockable,meta14446){
this.f = f;
this.blockable = blockable;
this.meta14446 = meta14446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14447,meta14446__$1){
var self__ = this;
var _14447__$1 = this;
return (new cljs.core.async.t_cljs$core$async14445(self__.f,self__.blockable,meta14446__$1));
});

cljs.core.async.t_cljs$core$async14445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14447){
var self__ = this;
var _14447__$1 = this;
return self__.meta14446;
});

cljs.core.async.t_cljs$core$async14445.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14446","meta14446",545367500,null)], null);
});

cljs.core.async.t_cljs$core$async14445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14445";

cljs.core.async.t_cljs$core$async14445.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async14445");
});

cljs.core.async.__GT_t_cljs$core$async14445 = (function cljs$core$async$__GT_t_cljs$core$async14445(f__$1,blockable__$1,meta14446){
return (new cljs.core.async.t_cljs$core$async14445(f__$1,blockable__$1,meta14446));
});

}

return (new cljs.core.async.t_cljs$core$async14445(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14451 = arguments.length;
switch (G__14451) {
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
var G__14454 = arguments.length;
switch (G__14454) {
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
var G__14457 = arguments.length;
switch (G__14457) {
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
var val_14459 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14459);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14459,ret){
return (function (){
return fn1.call(null,val_14459);
});})(val_14459,ret))
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
var G__14461 = arguments.length;
switch (G__14461) {
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
var n__10853__auto___14463 = n;
var x_14464 = (0);
while(true){
if((x_14464 < n__10853__auto___14463)){
(a[x_14464] = (0));

var G__14465 = (x_14464 + (1));
x_14464 = G__14465;
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

var G__14466 = (i + (1));
i = G__14466;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14467 = (function (flag,meta14468){
this.flag = flag;
this.meta14468 = meta14468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14469,meta14468__$1){
var self__ = this;
var _14469__$1 = this;
return (new cljs.core.async.t_cljs$core$async14467(self__.flag,meta14468__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14469){
var self__ = this;
var _14469__$1 = this;
return self__.meta14468;
});})(flag))
;

cljs.core.async.t_cljs$core$async14467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14467.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14468","meta14468",-801628180,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14467";

cljs.core.async.t_cljs$core$async14467.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async14467");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14467 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14467(flag__$1,meta14468){
return (new cljs.core.async.t_cljs$core$async14467(flag__$1,meta14468));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14467(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14470 = (function (flag,cb,meta14471){
this.flag = flag;
this.cb = cb;
this.meta14471 = meta14471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14472,meta14471__$1){
var self__ = this;
var _14472__$1 = this;
return (new cljs.core.async.t_cljs$core$async14470(self__.flag,self__.cb,meta14471__$1));
});

cljs.core.async.t_cljs$core$async14470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14472){
var self__ = this;
var _14472__$1 = this;
return self__.meta14471;
});

cljs.core.async.t_cljs$core$async14470.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14470.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14471","meta14471",-1649413984,null)], null);
});

cljs.core.async.t_cljs$core$async14470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14470";

cljs.core.async.t_cljs$core$async14470.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async14470");
});

cljs.core.async.__GT_t_cljs$core$async14470 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14470(flag__$1,cb__$1,meta14471){
return (new cljs.core.async.t_cljs$core$async14470(flag__$1,cb__$1,meta14471));
});

}

return (new cljs.core.async.t_cljs$core$async14470(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14473_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14473_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14474_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14474_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9810__auto__ = wport;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14475 = (i + (1));
i = G__14475;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9810__auto__ = ret;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__9798__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9798__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9798__auto__;
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
var args__11094__auto__ = [];
var len__11087__auto___14481 = arguments.length;
var i__11088__auto___14482 = (0);
while(true){
if((i__11088__auto___14482 < len__11087__auto___14481)){
args__11094__auto__.push((arguments[i__11088__auto___14482]));

var G__14483 = (i__11088__auto___14482 + (1));
i__11088__auto___14482 = G__14483;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14478){
var map__14479 = p__14478;
var map__14479__$1 = ((((!((map__14479 == null)))?((((map__14479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14479):map__14479);
var opts = map__14479__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14476){
var G__14477 = cljs.core.first.call(null,seq14476);
var seq14476__$1 = cljs.core.next.call(null,seq14476);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14477,seq14476__$1);
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
var G__14485 = arguments.length;
switch (G__14485) {
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
var c__14384__auto___14531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___14531){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___14531){
return (function (state_14509){
var state_val_14510 = (state_14509[(1)]);
if((state_val_14510 === (7))){
var inst_14505 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14511_14532 = state_14509__$1;
(statearr_14511_14532[(2)] = inst_14505);

(statearr_14511_14532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (1))){
var state_14509__$1 = state_14509;
var statearr_14512_14533 = state_14509__$1;
(statearr_14512_14533[(2)] = null);

(statearr_14512_14533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (4))){
var inst_14488 = (state_14509[(7)]);
var inst_14488__$1 = (state_14509[(2)]);
var inst_14489 = (inst_14488__$1 == null);
var state_14509__$1 = (function (){var statearr_14513 = state_14509;
(statearr_14513[(7)] = inst_14488__$1);

return statearr_14513;
})();
if(cljs.core.truth_(inst_14489)){
var statearr_14514_14534 = state_14509__$1;
(statearr_14514_14534[(1)] = (5));

} else {
var statearr_14515_14535 = state_14509__$1;
(statearr_14515_14535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (13))){
var state_14509__$1 = state_14509;
var statearr_14516_14536 = state_14509__$1;
(statearr_14516_14536[(2)] = null);

(statearr_14516_14536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (6))){
var inst_14488 = (state_14509[(7)]);
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14509__$1,(11),to,inst_14488);
} else {
if((state_val_14510 === (3))){
var inst_14507 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14509__$1,inst_14507);
} else {
if((state_val_14510 === (12))){
var state_14509__$1 = state_14509;
var statearr_14517_14537 = state_14509__$1;
(statearr_14517_14537[(2)] = null);

(statearr_14517_14537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (2))){
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14509__$1,(4),from);
} else {
if((state_val_14510 === (11))){
var inst_14498 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
if(cljs.core.truth_(inst_14498)){
var statearr_14518_14538 = state_14509__$1;
(statearr_14518_14538[(1)] = (12));

} else {
var statearr_14519_14539 = state_14509__$1;
(statearr_14519_14539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (9))){
var state_14509__$1 = state_14509;
var statearr_14520_14540 = state_14509__$1;
(statearr_14520_14540[(2)] = null);

(statearr_14520_14540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (5))){
var state_14509__$1 = state_14509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14521_14541 = state_14509__$1;
(statearr_14521_14541[(1)] = (8));

} else {
var statearr_14522_14542 = state_14509__$1;
(statearr_14522_14542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (14))){
var inst_14503 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14523_14543 = state_14509__$1;
(statearr_14523_14543[(2)] = inst_14503);

(statearr_14523_14543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (10))){
var inst_14495 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14524_14544 = state_14509__$1;
(statearr_14524_14544[(2)] = inst_14495);

(statearr_14524_14544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (8))){
var inst_14492 = cljs.core.async.close_BANG_.call(null,to);
var state_14509__$1 = state_14509;
var statearr_14525_14545 = state_14509__$1;
(statearr_14525_14545[(2)] = inst_14492);

(statearr_14525_14545[(1)] = (10));


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
});})(c__14384__auto___14531))
;
return ((function (switch__14294__auto__,c__14384__auto___14531){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_14526 = [null,null,null,null,null,null,null,null];
(statearr_14526[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_14526[(1)] = (1));

return statearr_14526;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_14509){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14527){if((e14527 instanceof Object)){
var ex__14298__auto__ = e14527;
var statearr_14528_14546 = state_14509;
(statearr_14528_14546[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14547 = state_14509;
state_14509 = G__14547;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_14509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_14509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___14531))
})();
var state__14386__auto__ = (function (){var statearr_14529 = f__14385__auto__.call(null);
(statearr_14529[(6)] = c__14384__auto___14531);

return statearr_14529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___14531))
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
return (function (p__14548){
var vec__14549 = p__14548;
var v = cljs.core.nth.call(null,vec__14549,(0),null);
var p = cljs.core.nth.call(null,vec__14549,(1),null);
var job = vec__14549;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14384__auto___14720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___14720,res,vec__14549,v,p,job,jobs,results){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___14720,res,vec__14549,v,p,job,jobs,results){
return (function (state_14556){
var state_val_14557 = (state_14556[(1)]);
if((state_val_14557 === (1))){
var state_14556__$1 = state_14556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14556__$1,(2),res,v);
} else {
if((state_val_14557 === (2))){
var inst_14553 = (state_14556[(2)]);
var inst_14554 = cljs.core.async.close_BANG_.call(null,res);
var state_14556__$1 = (function (){var statearr_14558 = state_14556;
(statearr_14558[(7)] = inst_14553);

return statearr_14558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14556__$1,inst_14554);
} else {
return null;
}
}
});})(c__14384__auto___14720,res,vec__14549,v,p,job,jobs,results))
;
return ((function (switch__14294__auto__,c__14384__auto___14720,res,vec__14549,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_14559 = [null,null,null,null,null,null,null,null];
(statearr_14559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_14559[(1)] = (1));

return statearr_14559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_14556){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14560){if((e14560 instanceof Object)){
var ex__14298__auto__ = e14560;
var statearr_14561_14721 = state_14556;
(statearr_14561_14721[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14722 = state_14556;
state_14556 = G__14722;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_14556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_14556);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___14720,res,vec__14549,v,p,job,jobs,results))
})();
var state__14386__auto__ = (function (){var statearr_14562 = f__14385__auto__.call(null);
(statearr_14562[(6)] = c__14384__auto___14720);

return statearr_14562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___14720,res,vec__14549,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14563){
var vec__14564 = p__14563;
var v = cljs.core.nth.call(null,vec__14564,(0),null);
var p = cljs.core.nth.call(null,vec__14564,(1),null);
var job = vec__14564;
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
var n__10853__auto___14723 = n;
var __14724 = (0);
while(true){
if((__14724 < n__10853__auto___14723)){
var G__14567_14725 = type;
var G__14567_14726__$1 = (((G__14567_14725 instanceof cljs.core.Keyword))?G__14567_14725.fqn:null);
switch (G__14567_14726__$1) {
case "compute":
var c__14384__auto___14728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14724,c__14384__auto___14728,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (__14724,c__14384__auto___14728,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async){
return (function (state_14580){
var state_val_14581 = (state_14580[(1)]);
if((state_val_14581 === (1))){
var state_14580__$1 = state_14580;
var statearr_14582_14729 = state_14580__$1;
(statearr_14582_14729[(2)] = null);

(statearr_14582_14729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (2))){
var state_14580__$1 = state_14580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14580__$1,(4),jobs);
} else {
if((state_val_14581 === (3))){
var inst_14578 = (state_14580[(2)]);
var state_14580__$1 = state_14580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14580__$1,inst_14578);
} else {
if((state_val_14581 === (4))){
var inst_14570 = (state_14580[(2)]);
var inst_14571 = process.call(null,inst_14570);
var state_14580__$1 = state_14580;
if(cljs.core.truth_(inst_14571)){
var statearr_14583_14730 = state_14580__$1;
(statearr_14583_14730[(1)] = (5));

} else {
var statearr_14584_14731 = state_14580__$1;
(statearr_14584_14731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (5))){
var state_14580__$1 = state_14580;
var statearr_14585_14732 = state_14580__$1;
(statearr_14585_14732[(2)] = null);

(statearr_14585_14732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (6))){
var state_14580__$1 = state_14580;
var statearr_14586_14733 = state_14580__$1;
(statearr_14586_14733[(2)] = null);

(statearr_14586_14733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14581 === (7))){
var inst_14576 = (state_14580[(2)]);
var state_14580__$1 = state_14580;
var statearr_14587_14734 = state_14580__$1;
(statearr_14587_14734[(2)] = inst_14576);

(statearr_14587_14734[(1)] = (3));


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
});})(__14724,c__14384__auto___14728,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async))
;
return ((function (__14724,switch__14294__auto__,c__14384__auto___14728,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_14588 = [null,null,null,null,null,null,null];
(statearr_14588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_14588[(1)] = (1));

return statearr_14588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_14580){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14589){if((e14589 instanceof Object)){
var ex__14298__auto__ = e14589;
var statearr_14590_14735 = state_14580;
(statearr_14590_14735[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14736 = state_14580;
state_14580 = G__14736;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_14580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_14580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
;})(__14724,switch__14294__auto__,c__14384__auto___14728,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async))
})();
var state__14386__auto__ = (function (){var statearr_14591 = f__14385__auto__.call(null);
(statearr_14591[(6)] = c__14384__auto___14728);

return statearr_14591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(__14724,c__14384__auto___14728,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async))
);


break;
case "async":
var c__14384__auto___14737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14724,c__14384__auto___14737,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (__14724,c__14384__auto___14737,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async){
return (function (state_14604){
var state_val_14605 = (state_14604[(1)]);
if((state_val_14605 === (1))){
var state_14604__$1 = state_14604;
var statearr_14606_14738 = state_14604__$1;
(statearr_14606_14738[(2)] = null);

(statearr_14606_14738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14605 === (2))){
var state_14604__$1 = state_14604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14604__$1,(4),jobs);
} else {
if((state_val_14605 === (3))){
var inst_14602 = (state_14604[(2)]);
var state_14604__$1 = state_14604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14604__$1,inst_14602);
} else {
if((state_val_14605 === (4))){
var inst_14594 = (state_14604[(2)]);
var inst_14595 = async.call(null,inst_14594);
var state_14604__$1 = state_14604;
if(cljs.core.truth_(inst_14595)){
var statearr_14607_14739 = state_14604__$1;
(statearr_14607_14739[(1)] = (5));

} else {
var statearr_14608_14740 = state_14604__$1;
(statearr_14608_14740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14605 === (5))){
var state_14604__$1 = state_14604;
var statearr_14609_14741 = state_14604__$1;
(statearr_14609_14741[(2)] = null);

(statearr_14609_14741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14605 === (6))){
var state_14604__$1 = state_14604;
var statearr_14610_14742 = state_14604__$1;
(statearr_14610_14742[(2)] = null);

(statearr_14610_14742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14605 === (7))){
var inst_14600 = (state_14604[(2)]);
var state_14604__$1 = state_14604;
var statearr_14611_14743 = state_14604__$1;
(statearr_14611_14743[(2)] = inst_14600);

(statearr_14611_14743[(1)] = (3));


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
});})(__14724,c__14384__auto___14737,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async))
;
return ((function (__14724,switch__14294__auto__,c__14384__auto___14737,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_14612 = [null,null,null,null,null,null,null];
(statearr_14612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_14612[(1)] = (1));

return statearr_14612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_14604){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14613){if((e14613 instanceof Object)){
var ex__14298__auto__ = e14613;
var statearr_14614_14744 = state_14604;
(statearr_14614_14744[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14745 = state_14604;
state_14604 = G__14745;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_14604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_14604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
;})(__14724,switch__14294__auto__,c__14384__auto___14737,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async))
})();
var state__14386__auto__ = (function (){var statearr_14615 = f__14385__auto__.call(null);
(statearr_14615[(6)] = c__14384__auto___14737);

return statearr_14615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(__14724,c__14384__auto___14737,G__14567_14725,G__14567_14726__$1,n__10853__auto___14723,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14567_14726__$1)].join('')));

}

var G__14746 = (__14724 + (1));
__14724 = G__14746;
continue;
} else {
}
break;
}

var c__14384__auto___14747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___14747,jobs,results,process,async){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___14747,jobs,results,process,async){
return (function (state_14637){
var state_val_14638 = (state_14637[(1)]);
if((state_val_14638 === (1))){
var state_14637__$1 = state_14637;
var statearr_14639_14748 = state_14637__$1;
(statearr_14639_14748[(2)] = null);

(statearr_14639_14748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (2))){
var state_14637__$1 = state_14637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14637__$1,(4),from);
} else {
if((state_val_14638 === (3))){
var inst_14635 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14637__$1,inst_14635);
} else {
if((state_val_14638 === (4))){
var inst_14618 = (state_14637[(7)]);
var inst_14618__$1 = (state_14637[(2)]);
var inst_14619 = (inst_14618__$1 == null);
var state_14637__$1 = (function (){var statearr_14640 = state_14637;
(statearr_14640[(7)] = inst_14618__$1);

return statearr_14640;
})();
if(cljs.core.truth_(inst_14619)){
var statearr_14641_14749 = state_14637__$1;
(statearr_14641_14749[(1)] = (5));

} else {
var statearr_14642_14750 = state_14637__$1;
(statearr_14642_14750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (5))){
var inst_14621 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14637__$1 = state_14637;
var statearr_14643_14751 = state_14637__$1;
(statearr_14643_14751[(2)] = inst_14621);

(statearr_14643_14751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (6))){
var inst_14623 = (state_14637[(8)]);
var inst_14618 = (state_14637[(7)]);
var inst_14623__$1 = cljs.core.async.chan.call(null,(1));
var inst_14624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14625 = [inst_14618,inst_14623__$1];
var inst_14626 = (new cljs.core.PersistentVector(null,2,(5),inst_14624,inst_14625,null));
var state_14637__$1 = (function (){var statearr_14644 = state_14637;
(statearr_14644[(8)] = inst_14623__$1);

return statearr_14644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14637__$1,(8),jobs,inst_14626);
} else {
if((state_val_14638 === (7))){
var inst_14633 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14645_14752 = state_14637__$1;
(statearr_14645_14752[(2)] = inst_14633);

(statearr_14645_14752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (8))){
var inst_14623 = (state_14637[(8)]);
var inst_14628 = (state_14637[(2)]);
var state_14637__$1 = (function (){var statearr_14646 = state_14637;
(statearr_14646[(9)] = inst_14628);

return statearr_14646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14637__$1,(9),results,inst_14623);
} else {
if((state_val_14638 === (9))){
var inst_14630 = (state_14637[(2)]);
var state_14637__$1 = (function (){var statearr_14647 = state_14637;
(statearr_14647[(10)] = inst_14630);

return statearr_14647;
})();
var statearr_14648_14753 = state_14637__$1;
(statearr_14648_14753[(2)] = null);

(statearr_14648_14753[(1)] = (2));


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
});})(c__14384__auto___14747,jobs,results,process,async))
;
return ((function (switch__14294__auto__,c__14384__auto___14747,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_14649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_14649[(1)] = (1));

return statearr_14649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_14637){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14650){if((e14650 instanceof Object)){
var ex__14298__auto__ = e14650;
var statearr_14651_14754 = state_14637;
(statearr_14651_14754[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14755 = state_14637;
state_14637 = G__14755;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_14637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_14637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___14747,jobs,results,process,async))
})();
var state__14386__auto__ = (function (){var statearr_14652 = f__14385__auto__.call(null);
(statearr_14652[(6)] = c__14384__auto___14747);

return statearr_14652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___14747,jobs,results,process,async))
);


var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__,jobs,results,process,async){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__,jobs,results,process,async){
return (function (state_14690){
var state_val_14691 = (state_14690[(1)]);
if((state_val_14691 === (7))){
var inst_14686 = (state_14690[(2)]);
var state_14690__$1 = state_14690;
var statearr_14692_14756 = state_14690__$1;
(statearr_14692_14756[(2)] = inst_14686);

(statearr_14692_14756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (20))){
var state_14690__$1 = state_14690;
var statearr_14693_14757 = state_14690__$1;
(statearr_14693_14757[(2)] = null);

(statearr_14693_14757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (1))){
var state_14690__$1 = state_14690;
var statearr_14694_14758 = state_14690__$1;
(statearr_14694_14758[(2)] = null);

(statearr_14694_14758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (4))){
var inst_14655 = (state_14690[(7)]);
var inst_14655__$1 = (state_14690[(2)]);
var inst_14656 = (inst_14655__$1 == null);
var state_14690__$1 = (function (){var statearr_14695 = state_14690;
(statearr_14695[(7)] = inst_14655__$1);

return statearr_14695;
})();
if(cljs.core.truth_(inst_14656)){
var statearr_14696_14759 = state_14690__$1;
(statearr_14696_14759[(1)] = (5));

} else {
var statearr_14697_14760 = state_14690__$1;
(statearr_14697_14760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (15))){
var inst_14668 = (state_14690[(8)]);
var state_14690__$1 = state_14690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14690__$1,(18),to,inst_14668);
} else {
if((state_val_14691 === (21))){
var inst_14681 = (state_14690[(2)]);
var state_14690__$1 = state_14690;
var statearr_14698_14761 = state_14690__$1;
(statearr_14698_14761[(2)] = inst_14681);

(statearr_14698_14761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (13))){
var inst_14683 = (state_14690[(2)]);
var state_14690__$1 = (function (){var statearr_14699 = state_14690;
(statearr_14699[(9)] = inst_14683);

return statearr_14699;
})();
var statearr_14700_14762 = state_14690__$1;
(statearr_14700_14762[(2)] = null);

(statearr_14700_14762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (6))){
var inst_14655 = (state_14690[(7)]);
var state_14690__$1 = state_14690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14690__$1,(11),inst_14655);
} else {
if((state_val_14691 === (17))){
var inst_14676 = (state_14690[(2)]);
var state_14690__$1 = state_14690;
if(cljs.core.truth_(inst_14676)){
var statearr_14701_14763 = state_14690__$1;
(statearr_14701_14763[(1)] = (19));

} else {
var statearr_14702_14764 = state_14690__$1;
(statearr_14702_14764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (3))){
var inst_14688 = (state_14690[(2)]);
var state_14690__$1 = state_14690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14690__$1,inst_14688);
} else {
if((state_val_14691 === (12))){
var inst_14665 = (state_14690[(10)]);
var state_14690__$1 = state_14690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14690__$1,(14),inst_14665);
} else {
if((state_val_14691 === (2))){
var state_14690__$1 = state_14690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14690__$1,(4),results);
} else {
if((state_val_14691 === (19))){
var state_14690__$1 = state_14690;
var statearr_14703_14765 = state_14690__$1;
(statearr_14703_14765[(2)] = null);

(statearr_14703_14765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (11))){
var inst_14665 = (state_14690[(2)]);
var state_14690__$1 = (function (){var statearr_14704 = state_14690;
(statearr_14704[(10)] = inst_14665);

return statearr_14704;
})();
var statearr_14705_14766 = state_14690__$1;
(statearr_14705_14766[(2)] = null);

(statearr_14705_14766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (9))){
var state_14690__$1 = state_14690;
var statearr_14706_14767 = state_14690__$1;
(statearr_14706_14767[(2)] = null);

(statearr_14706_14767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (5))){
var state_14690__$1 = state_14690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14707_14768 = state_14690__$1;
(statearr_14707_14768[(1)] = (8));

} else {
var statearr_14708_14769 = state_14690__$1;
(statearr_14708_14769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (14))){
var inst_14668 = (state_14690[(8)]);
var inst_14670 = (state_14690[(11)]);
var inst_14668__$1 = (state_14690[(2)]);
var inst_14669 = (inst_14668__$1 == null);
var inst_14670__$1 = cljs.core.not.call(null,inst_14669);
var state_14690__$1 = (function (){var statearr_14709 = state_14690;
(statearr_14709[(8)] = inst_14668__$1);

(statearr_14709[(11)] = inst_14670__$1);

return statearr_14709;
})();
if(inst_14670__$1){
var statearr_14710_14770 = state_14690__$1;
(statearr_14710_14770[(1)] = (15));

} else {
var statearr_14711_14771 = state_14690__$1;
(statearr_14711_14771[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (16))){
var inst_14670 = (state_14690[(11)]);
var state_14690__$1 = state_14690;
var statearr_14712_14772 = state_14690__$1;
(statearr_14712_14772[(2)] = inst_14670);

(statearr_14712_14772[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (10))){
var inst_14662 = (state_14690[(2)]);
var state_14690__$1 = state_14690;
var statearr_14713_14773 = state_14690__$1;
(statearr_14713_14773[(2)] = inst_14662);

(statearr_14713_14773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (18))){
var inst_14673 = (state_14690[(2)]);
var state_14690__$1 = state_14690;
var statearr_14714_14774 = state_14690__$1;
(statearr_14714_14774[(2)] = inst_14673);

(statearr_14714_14774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14691 === (8))){
var inst_14659 = cljs.core.async.close_BANG_.call(null,to);
var state_14690__$1 = state_14690;
var statearr_14715_14775 = state_14690__$1;
(statearr_14715_14775[(2)] = inst_14659);

(statearr_14715_14775[(1)] = (10));


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
});})(c__14384__auto__,jobs,results,process,async))
;
return ((function (switch__14294__auto__,c__14384__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_14716 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_14716[(1)] = (1));

return statearr_14716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_14690){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14717){if((e14717 instanceof Object)){
var ex__14298__auto__ = e14717;
var statearr_14718_14776 = state_14690;
(statearr_14718_14776[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14777 = state_14690;
state_14690 = G__14777;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_14690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_14690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__,jobs,results,process,async))
})();
var state__14386__auto__ = (function (){var statearr_14719 = f__14385__auto__.call(null);
(statearr_14719[(6)] = c__14384__auto__);

return statearr_14719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__,jobs,results,process,async))
);

return c__14384__auto__;
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
var G__14779 = arguments.length;
switch (G__14779) {
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
var G__14782 = arguments.length;
switch (G__14782) {
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
var G__14785 = arguments.length;
switch (G__14785) {
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
var c__14384__auto___14834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___14834,tc,fc){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___14834,tc,fc){
return (function (state_14811){
var state_val_14812 = (state_14811[(1)]);
if((state_val_14812 === (7))){
var inst_14807 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
var statearr_14813_14835 = state_14811__$1;
(statearr_14813_14835[(2)] = inst_14807);

(statearr_14813_14835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (1))){
var state_14811__$1 = state_14811;
var statearr_14814_14836 = state_14811__$1;
(statearr_14814_14836[(2)] = null);

(statearr_14814_14836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (4))){
var inst_14788 = (state_14811[(7)]);
var inst_14788__$1 = (state_14811[(2)]);
var inst_14789 = (inst_14788__$1 == null);
var state_14811__$1 = (function (){var statearr_14815 = state_14811;
(statearr_14815[(7)] = inst_14788__$1);

return statearr_14815;
})();
if(cljs.core.truth_(inst_14789)){
var statearr_14816_14837 = state_14811__$1;
(statearr_14816_14837[(1)] = (5));

} else {
var statearr_14817_14838 = state_14811__$1;
(statearr_14817_14838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (13))){
var state_14811__$1 = state_14811;
var statearr_14818_14839 = state_14811__$1;
(statearr_14818_14839[(2)] = null);

(statearr_14818_14839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (6))){
var inst_14788 = (state_14811[(7)]);
var inst_14794 = p.call(null,inst_14788);
var state_14811__$1 = state_14811;
if(cljs.core.truth_(inst_14794)){
var statearr_14819_14840 = state_14811__$1;
(statearr_14819_14840[(1)] = (9));

} else {
var statearr_14820_14841 = state_14811__$1;
(statearr_14820_14841[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (3))){
var inst_14809 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14811__$1,inst_14809);
} else {
if((state_val_14812 === (12))){
var state_14811__$1 = state_14811;
var statearr_14821_14842 = state_14811__$1;
(statearr_14821_14842[(2)] = null);

(statearr_14821_14842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (2))){
var state_14811__$1 = state_14811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14811__$1,(4),ch);
} else {
if((state_val_14812 === (11))){
var inst_14788 = (state_14811[(7)]);
var inst_14798 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14811__$1,(8),inst_14798,inst_14788);
} else {
if((state_val_14812 === (9))){
var state_14811__$1 = state_14811;
var statearr_14822_14843 = state_14811__$1;
(statearr_14822_14843[(2)] = tc);

(statearr_14822_14843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (5))){
var inst_14791 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14792 = cljs.core.async.close_BANG_.call(null,fc);
var state_14811__$1 = (function (){var statearr_14823 = state_14811;
(statearr_14823[(8)] = inst_14791);

return statearr_14823;
})();
var statearr_14824_14844 = state_14811__$1;
(statearr_14824_14844[(2)] = inst_14792);

(statearr_14824_14844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (14))){
var inst_14805 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
var statearr_14825_14845 = state_14811__$1;
(statearr_14825_14845[(2)] = inst_14805);

(statearr_14825_14845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (10))){
var state_14811__$1 = state_14811;
var statearr_14826_14846 = state_14811__$1;
(statearr_14826_14846[(2)] = fc);

(statearr_14826_14846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (8))){
var inst_14800 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
if(cljs.core.truth_(inst_14800)){
var statearr_14827_14847 = state_14811__$1;
(statearr_14827_14847[(1)] = (12));

} else {
var statearr_14828_14848 = state_14811__$1;
(statearr_14828_14848[(1)] = (13));

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
});})(c__14384__auto___14834,tc,fc))
;
return ((function (switch__14294__auto__,c__14384__auto___14834,tc,fc){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_14829 = [null,null,null,null,null,null,null,null,null];
(statearr_14829[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_14829[(1)] = (1));

return statearr_14829;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_14811){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14830){if((e14830 instanceof Object)){
var ex__14298__auto__ = e14830;
var statearr_14831_14849 = state_14811;
(statearr_14831_14849[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14850 = state_14811;
state_14811 = G__14850;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_14811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_14811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___14834,tc,fc))
})();
var state__14386__auto__ = (function (){var statearr_14832 = f__14385__auto__.call(null);
(statearr_14832[(6)] = c__14384__auto___14834);

return statearr_14832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___14834,tc,fc))
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
var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__){
return (function (state_14871){
var state_val_14872 = (state_14871[(1)]);
if((state_val_14872 === (7))){
var inst_14867 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14873_14891 = state_14871__$1;
(statearr_14873_14891[(2)] = inst_14867);

(statearr_14873_14891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (1))){
var inst_14851 = init;
var state_14871__$1 = (function (){var statearr_14874 = state_14871;
(statearr_14874[(7)] = inst_14851);

return statearr_14874;
})();
var statearr_14875_14892 = state_14871__$1;
(statearr_14875_14892[(2)] = null);

(statearr_14875_14892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (4))){
var inst_14854 = (state_14871[(8)]);
var inst_14854__$1 = (state_14871[(2)]);
var inst_14855 = (inst_14854__$1 == null);
var state_14871__$1 = (function (){var statearr_14876 = state_14871;
(statearr_14876[(8)] = inst_14854__$1);

return statearr_14876;
})();
if(cljs.core.truth_(inst_14855)){
var statearr_14877_14893 = state_14871__$1;
(statearr_14877_14893[(1)] = (5));

} else {
var statearr_14878_14894 = state_14871__$1;
(statearr_14878_14894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (6))){
var inst_14858 = (state_14871[(9)]);
var inst_14851 = (state_14871[(7)]);
var inst_14854 = (state_14871[(8)]);
var inst_14858__$1 = f.call(null,inst_14851,inst_14854);
var inst_14859 = cljs.core.reduced_QMARK_.call(null,inst_14858__$1);
var state_14871__$1 = (function (){var statearr_14879 = state_14871;
(statearr_14879[(9)] = inst_14858__$1);

return statearr_14879;
})();
if(inst_14859){
var statearr_14880_14895 = state_14871__$1;
(statearr_14880_14895[(1)] = (8));

} else {
var statearr_14881_14896 = state_14871__$1;
(statearr_14881_14896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (3))){
var inst_14869 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14871__$1,inst_14869);
} else {
if((state_val_14872 === (2))){
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14871__$1,(4),ch);
} else {
if((state_val_14872 === (9))){
var inst_14858 = (state_14871[(9)]);
var inst_14851 = inst_14858;
var state_14871__$1 = (function (){var statearr_14882 = state_14871;
(statearr_14882[(7)] = inst_14851);

return statearr_14882;
})();
var statearr_14883_14897 = state_14871__$1;
(statearr_14883_14897[(2)] = null);

(statearr_14883_14897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (5))){
var inst_14851 = (state_14871[(7)]);
var state_14871__$1 = state_14871;
var statearr_14884_14898 = state_14871__$1;
(statearr_14884_14898[(2)] = inst_14851);

(statearr_14884_14898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (10))){
var inst_14865 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14885_14899 = state_14871__$1;
(statearr_14885_14899[(2)] = inst_14865);

(statearr_14885_14899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (8))){
var inst_14858 = (state_14871[(9)]);
var inst_14861 = cljs.core.deref.call(null,inst_14858);
var state_14871__$1 = state_14871;
var statearr_14886_14900 = state_14871__$1;
(statearr_14886_14900[(2)] = inst_14861);

(statearr_14886_14900[(1)] = (10));


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
});})(c__14384__auto__))
;
return ((function (switch__14294__auto__,c__14384__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14295__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14295__auto____0 = (function (){
var statearr_14887 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14887[(0)] = cljs$core$async$reduce_$_state_machine__14295__auto__);

(statearr_14887[(1)] = (1));

return statearr_14887;
});
var cljs$core$async$reduce_$_state_machine__14295__auto____1 = (function (state_14871){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14888){if((e14888 instanceof Object)){
var ex__14298__auto__ = e14888;
var statearr_14889_14901 = state_14871;
(statearr_14889_14901[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14902 = state_14871;
state_14871 = G__14902;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14295__auto__ = function(state_14871){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14295__auto____1.call(this,state_14871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14295__auto____0;
cljs$core$async$reduce_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14295__auto____1;
return cljs$core$async$reduce_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__))
})();
var state__14386__auto__ = (function (){var statearr_14890 = f__14385__auto__.call(null);
(statearr_14890[(6)] = c__14384__auto__);

return statearr_14890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__))
);

return c__14384__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__,f__$1){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__,f__$1){
return (function (state_14908){
var state_val_14909 = (state_14908[(1)]);
if((state_val_14909 === (1))){
var inst_14903 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14908__$1,(2),inst_14903);
} else {
if((state_val_14909 === (2))){
var inst_14905 = (state_14908[(2)]);
var inst_14906 = f__$1.call(null,inst_14905);
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14908__$1,inst_14906);
} else {
return null;
}
}
});})(c__14384__auto__,f__$1))
;
return ((function (switch__14294__auto__,c__14384__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14295__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14295__auto____0 = (function (){
var statearr_14910 = [null,null,null,null,null,null,null];
(statearr_14910[(0)] = cljs$core$async$transduce_$_state_machine__14295__auto__);

(statearr_14910[(1)] = (1));

return statearr_14910;
});
var cljs$core$async$transduce_$_state_machine__14295__auto____1 = (function (state_14908){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14911){if((e14911 instanceof Object)){
var ex__14298__auto__ = e14911;
var statearr_14912_14914 = state_14908;
(statearr_14912_14914[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14915 = state_14908;
state_14908 = G__14915;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14295__auto__ = function(state_14908){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14295__auto____1.call(this,state_14908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14295__auto____0;
cljs$core$async$transduce_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14295__auto____1;
return cljs$core$async$transduce_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__,f__$1))
})();
var state__14386__auto__ = (function (){var statearr_14913 = f__14385__auto__.call(null);
(statearr_14913[(6)] = c__14384__auto__);

return statearr_14913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__,f__$1))
);

return c__14384__auto__;
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
var G__14917 = arguments.length;
switch (G__14917) {
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
var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__){
return (function (state_14942){
var state_val_14943 = (state_14942[(1)]);
if((state_val_14943 === (7))){
var inst_14924 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14944_14965 = state_14942__$1;
(statearr_14944_14965[(2)] = inst_14924);

(statearr_14944_14965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (1))){
var inst_14918 = cljs.core.seq.call(null,coll);
var inst_14919 = inst_14918;
var state_14942__$1 = (function (){var statearr_14945 = state_14942;
(statearr_14945[(7)] = inst_14919);

return statearr_14945;
})();
var statearr_14946_14966 = state_14942__$1;
(statearr_14946_14966[(2)] = null);

(statearr_14946_14966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (4))){
var inst_14919 = (state_14942[(7)]);
var inst_14922 = cljs.core.first.call(null,inst_14919);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14942__$1,(7),ch,inst_14922);
} else {
if((state_val_14943 === (13))){
var inst_14936 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14947_14967 = state_14942__$1;
(statearr_14947_14967[(2)] = inst_14936);

(statearr_14947_14967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (6))){
var inst_14927 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
if(cljs.core.truth_(inst_14927)){
var statearr_14948_14968 = state_14942__$1;
(statearr_14948_14968[(1)] = (8));

} else {
var statearr_14949_14969 = state_14942__$1;
(statearr_14949_14969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (3))){
var inst_14940 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14942__$1,inst_14940);
} else {
if((state_val_14943 === (12))){
var state_14942__$1 = state_14942;
var statearr_14950_14970 = state_14942__$1;
(statearr_14950_14970[(2)] = null);

(statearr_14950_14970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (2))){
var inst_14919 = (state_14942[(7)]);
var state_14942__$1 = state_14942;
if(cljs.core.truth_(inst_14919)){
var statearr_14951_14971 = state_14942__$1;
(statearr_14951_14971[(1)] = (4));

} else {
var statearr_14952_14972 = state_14942__$1;
(statearr_14952_14972[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (11))){
var inst_14933 = cljs.core.async.close_BANG_.call(null,ch);
var state_14942__$1 = state_14942;
var statearr_14953_14973 = state_14942__$1;
(statearr_14953_14973[(2)] = inst_14933);

(statearr_14953_14973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (9))){
var state_14942__$1 = state_14942;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14954_14974 = state_14942__$1;
(statearr_14954_14974[(1)] = (11));

} else {
var statearr_14955_14975 = state_14942__$1;
(statearr_14955_14975[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (5))){
var inst_14919 = (state_14942[(7)]);
var state_14942__$1 = state_14942;
var statearr_14956_14976 = state_14942__$1;
(statearr_14956_14976[(2)] = inst_14919);

(statearr_14956_14976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (10))){
var inst_14938 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14957_14977 = state_14942__$1;
(statearr_14957_14977[(2)] = inst_14938);

(statearr_14957_14977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (8))){
var inst_14919 = (state_14942[(7)]);
var inst_14929 = cljs.core.next.call(null,inst_14919);
var inst_14919__$1 = inst_14929;
var state_14942__$1 = (function (){var statearr_14958 = state_14942;
(statearr_14958[(7)] = inst_14919__$1);

return statearr_14958;
})();
var statearr_14959_14978 = state_14942__$1;
(statearr_14959_14978[(2)] = null);

(statearr_14959_14978[(1)] = (2));


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
});})(c__14384__auto__))
;
return ((function (switch__14294__auto__,c__14384__auto__){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_14960 = [null,null,null,null,null,null,null,null];
(statearr_14960[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_14960[(1)] = (1));

return statearr_14960;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_14942){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_14942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e14961){if((e14961 instanceof Object)){
var ex__14298__auto__ = e14961;
var statearr_14962_14979 = state_14942;
(statearr_14962_14979[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14980 = state_14942;
state_14942 = G__14980;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_14942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_14942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__))
})();
var state__14386__auto__ = (function (){var statearr_14963 = f__14385__auto__.call(null);
(statearr_14963[(6)] = c__14384__auto__);

return statearr_14963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__))
);

return c__14384__auto__;
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
var x__10543__auto__ = (((_ == null))?null:_);
var m__10544__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,_);
} else {
var m__10544__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,_);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10544__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,ch);
} else {
var m__10544__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,ch);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m);
} else {
var m__10544__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async14981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14981 = (function (ch,cs,meta14982){
this.ch = ch;
this.cs = cs;
this.meta14982 = meta14982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14983,meta14982__$1){
var self__ = this;
var _14983__$1 = this;
return (new cljs.core.async.t_cljs$core$async14981(self__.ch,self__.cs,meta14982__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14983){
var self__ = this;
var _14983__$1 = this;
return self__.meta14982;
});})(cs))
;

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14981.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14981.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14982","meta14982",-167126910,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14981";

cljs.core.async.t_cljs$core$async14981.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async14981");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14981 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14981(ch__$1,cs__$1,meta14982){
return (new cljs.core.async.t_cljs$core$async14981(ch__$1,cs__$1,meta14982));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14981(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14384__auto___15203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___15203,cs,m,dchan,dctr,done){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___15203,cs,m,dchan,dctr,done){
return (function (state_15118){
var state_val_15119 = (state_15118[(1)]);
if((state_val_15119 === (7))){
var inst_15114 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15120_15204 = state_15118__$1;
(statearr_15120_15204[(2)] = inst_15114);

(statearr_15120_15204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (20))){
var inst_15017 = (state_15118[(7)]);
var inst_15029 = cljs.core.first.call(null,inst_15017);
var inst_15030 = cljs.core.nth.call(null,inst_15029,(0),null);
var inst_15031 = cljs.core.nth.call(null,inst_15029,(1),null);
var state_15118__$1 = (function (){var statearr_15121 = state_15118;
(statearr_15121[(8)] = inst_15030);

return statearr_15121;
})();
if(cljs.core.truth_(inst_15031)){
var statearr_15122_15205 = state_15118__$1;
(statearr_15122_15205[(1)] = (22));

} else {
var statearr_15123_15206 = state_15118__$1;
(statearr_15123_15206[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (27))){
var inst_15061 = (state_15118[(9)]);
var inst_15059 = (state_15118[(10)]);
var inst_15066 = (state_15118[(11)]);
var inst_14986 = (state_15118[(12)]);
var inst_15066__$1 = cljs.core._nth.call(null,inst_15059,inst_15061);
var inst_15067 = cljs.core.async.put_BANG_.call(null,inst_15066__$1,inst_14986,done);
var state_15118__$1 = (function (){var statearr_15124 = state_15118;
(statearr_15124[(11)] = inst_15066__$1);

return statearr_15124;
})();
if(cljs.core.truth_(inst_15067)){
var statearr_15125_15207 = state_15118__$1;
(statearr_15125_15207[(1)] = (30));

} else {
var statearr_15126_15208 = state_15118__$1;
(statearr_15126_15208[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (1))){
var state_15118__$1 = state_15118;
var statearr_15127_15209 = state_15118__$1;
(statearr_15127_15209[(2)] = null);

(statearr_15127_15209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (24))){
var inst_15017 = (state_15118[(7)]);
var inst_15036 = (state_15118[(2)]);
var inst_15037 = cljs.core.next.call(null,inst_15017);
var inst_14995 = inst_15037;
var inst_14996 = null;
var inst_14997 = (0);
var inst_14998 = (0);
var state_15118__$1 = (function (){var statearr_15128 = state_15118;
(statearr_15128[(13)] = inst_14995);

(statearr_15128[(14)] = inst_14998);

(statearr_15128[(15)] = inst_14997);

(statearr_15128[(16)] = inst_14996);

(statearr_15128[(17)] = inst_15036);

return statearr_15128;
})();
var statearr_15129_15210 = state_15118__$1;
(statearr_15129_15210[(2)] = null);

(statearr_15129_15210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (39))){
var state_15118__$1 = state_15118;
var statearr_15133_15211 = state_15118__$1;
(statearr_15133_15211[(2)] = null);

(statearr_15133_15211[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (4))){
var inst_14986 = (state_15118[(12)]);
var inst_14986__$1 = (state_15118[(2)]);
var inst_14987 = (inst_14986__$1 == null);
var state_15118__$1 = (function (){var statearr_15134 = state_15118;
(statearr_15134[(12)] = inst_14986__$1);

return statearr_15134;
})();
if(cljs.core.truth_(inst_14987)){
var statearr_15135_15212 = state_15118__$1;
(statearr_15135_15212[(1)] = (5));

} else {
var statearr_15136_15213 = state_15118__$1;
(statearr_15136_15213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (15))){
var inst_14995 = (state_15118[(13)]);
var inst_14998 = (state_15118[(14)]);
var inst_14997 = (state_15118[(15)]);
var inst_14996 = (state_15118[(16)]);
var inst_15013 = (state_15118[(2)]);
var inst_15014 = (inst_14998 + (1));
var tmp15130 = inst_14995;
var tmp15131 = inst_14997;
var tmp15132 = inst_14996;
var inst_14995__$1 = tmp15130;
var inst_14996__$1 = tmp15132;
var inst_14997__$1 = tmp15131;
var inst_14998__$1 = inst_15014;
var state_15118__$1 = (function (){var statearr_15137 = state_15118;
(statearr_15137[(13)] = inst_14995__$1);

(statearr_15137[(18)] = inst_15013);

(statearr_15137[(14)] = inst_14998__$1);

(statearr_15137[(15)] = inst_14997__$1);

(statearr_15137[(16)] = inst_14996__$1);

return statearr_15137;
})();
var statearr_15138_15214 = state_15118__$1;
(statearr_15138_15214[(2)] = null);

(statearr_15138_15214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (21))){
var inst_15040 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15142_15215 = state_15118__$1;
(statearr_15142_15215[(2)] = inst_15040);

(statearr_15142_15215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (31))){
var inst_15066 = (state_15118[(11)]);
var inst_15070 = done.call(null,null);
var inst_15071 = cljs.core.async.untap_STAR_.call(null,m,inst_15066);
var state_15118__$1 = (function (){var statearr_15143 = state_15118;
(statearr_15143[(19)] = inst_15070);

return statearr_15143;
})();
var statearr_15144_15216 = state_15118__$1;
(statearr_15144_15216[(2)] = inst_15071);

(statearr_15144_15216[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (32))){
var inst_15060 = (state_15118[(20)]);
var inst_15061 = (state_15118[(9)]);
var inst_15059 = (state_15118[(10)]);
var inst_15058 = (state_15118[(21)]);
var inst_15073 = (state_15118[(2)]);
var inst_15074 = (inst_15061 + (1));
var tmp15139 = inst_15060;
var tmp15140 = inst_15059;
var tmp15141 = inst_15058;
var inst_15058__$1 = tmp15141;
var inst_15059__$1 = tmp15140;
var inst_15060__$1 = tmp15139;
var inst_15061__$1 = inst_15074;
var state_15118__$1 = (function (){var statearr_15145 = state_15118;
(statearr_15145[(20)] = inst_15060__$1);

(statearr_15145[(9)] = inst_15061__$1);

(statearr_15145[(10)] = inst_15059__$1);

(statearr_15145[(22)] = inst_15073);

(statearr_15145[(21)] = inst_15058__$1);

return statearr_15145;
})();
var statearr_15146_15217 = state_15118__$1;
(statearr_15146_15217[(2)] = null);

(statearr_15146_15217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (40))){
var inst_15086 = (state_15118[(23)]);
var inst_15090 = done.call(null,null);
var inst_15091 = cljs.core.async.untap_STAR_.call(null,m,inst_15086);
var state_15118__$1 = (function (){var statearr_15147 = state_15118;
(statearr_15147[(24)] = inst_15090);

return statearr_15147;
})();
var statearr_15148_15218 = state_15118__$1;
(statearr_15148_15218[(2)] = inst_15091);

(statearr_15148_15218[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (33))){
var inst_15077 = (state_15118[(25)]);
var inst_15079 = cljs.core.chunked_seq_QMARK_.call(null,inst_15077);
var state_15118__$1 = state_15118;
if(inst_15079){
var statearr_15149_15219 = state_15118__$1;
(statearr_15149_15219[(1)] = (36));

} else {
var statearr_15150_15220 = state_15118__$1;
(statearr_15150_15220[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (13))){
var inst_15007 = (state_15118[(26)]);
var inst_15010 = cljs.core.async.close_BANG_.call(null,inst_15007);
var state_15118__$1 = state_15118;
var statearr_15151_15221 = state_15118__$1;
(statearr_15151_15221[(2)] = inst_15010);

(statearr_15151_15221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (22))){
var inst_15030 = (state_15118[(8)]);
var inst_15033 = cljs.core.async.close_BANG_.call(null,inst_15030);
var state_15118__$1 = state_15118;
var statearr_15152_15222 = state_15118__$1;
(statearr_15152_15222[(2)] = inst_15033);

(statearr_15152_15222[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (36))){
var inst_15077 = (state_15118[(25)]);
var inst_15081 = cljs.core.chunk_first.call(null,inst_15077);
var inst_15082 = cljs.core.chunk_rest.call(null,inst_15077);
var inst_15083 = cljs.core.count.call(null,inst_15081);
var inst_15058 = inst_15082;
var inst_15059 = inst_15081;
var inst_15060 = inst_15083;
var inst_15061 = (0);
var state_15118__$1 = (function (){var statearr_15153 = state_15118;
(statearr_15153[(20)] = inst_15060);

(statearr_15153[(9)] = inst_15061);

(statearr_15153[(10)] = inst_15059);

(statearr_15153[(21)] = inst_15058);

return statearr_15153;
})();
var statearr_15154_15223 = state_15118__$1;
(statearr_15154_15223[(2)] = null);

(statearr_15154_15223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (41))){
var inst_15077 = (state_15118[(25)]);
var inst_15093 = (state_15118[(2)]);
var inst_15094 = cljs.core.next.call(null,inst_15077);
var inst_15058 = inst_15094;
var inst_15059 = null;
var inst_15060 = (0);
var inst_15061 = (0);
var state_15118__$1 = (function (){var statearr_15155 = state_15118;
(statearr_15155[(20)] = inst_15060);

(statearr_15155[(9)] = inst_15061);

(statearr_15155[(10)] = inst_15059);

(statearr_15155[(27)] = inst_15093);

(statearr_15155[(21)] = inst_15058);

return statearr_15155;
})();
var statearr_15156_15224 = state_15118__$1;
(statearr_15156_15224[(2)] = null);

(statearr_15156_15224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (43))){
var state_15118__$1 = state_15118;
var statearr_15157_15225 = state_15118__$1;
(statearr_15157_15225[(2)] = null);

(statearr_15157_15225[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (29))){
var inst_15102 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15158_15226 = state_15118__$1;
(statearr_15158_15226[(2)] = inst_15102);

(statearr_15158_15226[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (44))){
var inst_15111 = (state_15118[(2)]);
var state_15118__$1 = (function (){var statearr_15159 = state_15118;
(statearr_15159[(28)] = inst_15111);

return statearr_15159;
})();
var statearr_15160_15227 = state_15118__$1;
(statearr_15160_15227[(2)] = null);

(statearr_15160_15227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (6))){
var inst_15050 = (state_15118[(29)]);
var inst_15049 = cljs.core.deref.call(null,cs);
var inst_15050__$1 = cljs.core.keys.call(null,inst_15049);
var inst_15051 = cljs.core.count.call(null,inst_15050__$1);
var inst_15052 = cljs.core.reset_BANG_.call(null,dctr,inst_15051);
var inst_15057 = cljs.core.seq.call(null,inst_15050__$1);
var inst_15058 = inst_15057;
var inst_15059 = null;
var inst_15060 = (0);
var inst_15061 = (0);
var state_15118__$1 = (function (){var statearr_15161 = state_15118;
(statearr_15161[(20)] = inst_15060);

(statearr_15161[(9)] = inst_15061);

(statearr_15161[(10)] = inst_15059);

(statearr_15161[(30)] = inst_15052);

(statearr_15161[(21)] = inst_15058);

(statearr_15161[(29)] = inst_15050__$1);

return statearr_15161;
})();
var statearr_15162_15228 = state_15118__$1;
(statearr_15162_15228[(2)] = null);

(statearr_15162_15228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (28))){
var inst_15058 = (state_15118[(21)]);
var inst_15077 = (state_15118[(25)]);
var inst_15077__$1 = cljs.core.seq.call(null,inst_15058);
var state_15118__$1 = (function (){var statearr_15163 = state_15118;
(statearr_15163[(25)] = inst_15077__$1);

return statearr_15163;
})();
if(inst_15077__$1){
var statearr_15164_15229 = state_15118__$1;
(statearr_15164_15229[(1)] = (33));

} else {
var statearr_15165_15230 = state_15118__$1;
(statearr_15165_15230[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (25))){
var inst_15060 = (state_15118[(20)]);
var inst_15061 = (state_15118[(9)]);
var inst_15063 = (inst_15061 < inst_15060);
var inst_15064 = inst_15063;
var state_15118__$1 = state_15118;
if(cljs.core.truth_(inst_15064)){
var statearr_15166_15231 = state_15118__$1;
(statearr_15166_15231[(1)] = (27));

} else {
var statearr_15167_15232 = state_15118__$1;
(statearr_15167_15232[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (34))){
var state_15118__$1 = state_15118;
var statearr_15168_15233 = state_15118__$1;
(statearr_15168_15233[(2)] = null);

(statearr_15168_15233[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (17))){
var state_15118__$1 = state_15118;
var statearr_15169_15234 = state_15118__$1;
(statearr_15169_15234[(2)] = null);

(statearr_15169_15234[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (3))){
var inst_15116 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15118__$1,inst_15116);
} else {
if((state_val_15119 === (12))){
var inst_15045 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15170_15235 = state_15118__$1;
(statearr_15170_15235[(2)] = inst_15045);

(statearr_15170_15235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (2))){
var state_15118__$1 = state_15118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15118__$1,(4),ch);
} else {
if((state_val_15119 === (23))){
var state_15118__$1 = state_15118;
var statearr_15171_15236 = state_15118__$1;
(statearr_15171_15236[(2)] = null);

(statearr_15171_15236[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (35))){
var inst_15100 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15172_15237 = state_15118__$1;
(statearr_15172_15237[(2)] = inst_15100);

(statearr_15172_15237[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (19))){
var inst_15017 = (state_15118[(7)]);
var inst_15021 = cljs.core.chunk_first.call(null,inst_15017);
var inst_15022 = cljs.core.chunk_rest.call(null,inst_15017);
var inst_15023 = cljs.core.count.call(null,inst_15021);
var inst_14995 = inst_15022;
var inst_14996 = inst_15021;
var inst_14997 = inst_15023;
var inst_14998 = (0);
var state_15118__$1 = (function (){var statearr_15173 = state_15118;
(statearr_15173[(13)] = inst_14995);

(statearr_15173[(14)] = inst_14998);

(statearr_15173[(15)] = inst_14997);

(statearr_15173[(16)] = inst_14996);

return statearr_15173;
})();
var statearr_15174_15238 = state_15118__$1;
(statearr_15174_15238[(2)] = null);

(statearr_15174_15238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (11))){
var inst_14995 = (state_15118[(13)]);
var inst_15017 = (state_15118[(7)]);
var inst_15017__$1 = cljs.core.seq.call(null,inst_14995);
var state_15118__$1 = (function (){var statearr_15175 = state_15118;
(statearr_15175[(7)] = inst_15017__$1);

return statearr_15175;
})();
if(inst_15017__$1){
var statearr_15176_15239 = state_15118__$1;
(statearr_15176_15239[(1)] = (16));

} else {
var statearr_15177_15240 = state_15118__$1;
(statearr_15177_15240[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (9))){
var inst_15047 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15178_15241 = state_15118__$1;
(statearr_15178_15241[(2)] = inst_15047);

(statearr_15178_15241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (5))){
var inst_14993 = cljs.core.deref.call(null,cs);
var inst_14994 = cljs.core.seq.call(null,inst_14993);
var inst_14995 = inst_14994;
var inst_14996 = null;
var inst_14997 = (0);
var inst_14998 = (0);
var state_15118__$1 = (function (){var statearr_15179 = state_15118;
(statearr_15179[(13)] = inst_14995);

(statearr_15179[(14)] = inst_14998);

(statearr_15179[(15)] = inst_14997);

(statearr_15179[(16)] = inst_14996);

return statearr_15179;
})();
var statearr_15180_15242 = state_15118__$1;
(statearr_15180_15242[(2)] = null);

(statearr_15180_15242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (14))){
var state_15118__$1 = state_15118;
var statearr_15181_15243 = state_15118__$1;
(statearr_15181_15243[(2)] = null);

(statearr_15181_15243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (45))){
var inst_15108 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15182_15244 = state_15118__$1;
(statearr_15182_15244[(2)] = inst_15108);

(statearr_15182_15244[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (26))){
var inst_15050 = (state_15118[(29)]);
var inst_15104 = (state_15118[(2)]);
var inst_15105 = cljs.core.seq.call(null,inst_15050);
var state_15118__$1 = (function (){var statearr_15183 = state_15118;
(statearr_15183[(31)] = inst_15104);

return statearr_15183;
})();
if(inst_15105){
var statearr_15184_15245 = state_15118__$1;
(statearr_15184_15245[(1)] = (42));

} else {
var statearr_15185_15246 = state_15118__$1;
(statearr_15185_15246[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (16))){
var inst_15017 = (state_15118[(7)]);
var inst_15019 = cljs.core.chunked_seq_QMARK_.call(null,inst_15017);
var state_15118__$1 = state_15118;
if(inst_15019){
var statearr_15186_15247 = state_15118__$1;
(statearr_15186_15247[(1)] = (19));

} else {
var statearr_15187_15248 = state_15118__$1;
(statearr_15187_15248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (38))){
var inst_15097 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15188_15249 = state_15118__$1;
(statearr_15188_15249[(2)] = inst_15097);

(statearr_15188_15249[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (30))){
var state_15118__$1 = state_15118;
var statearr_15189_15250 = state_15118__$1;
(statearr_15189_15250[(2)] = null);

(statearr_15189_15250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (10))){
var inst_14998 = (state_15118[(14)]);
var inst_14996 = (state_15118[(16)]);
var inst_15006 = cljs.core._nth.call(null,inst_14996,inst_14998);
var inst_15007 = cljs.core.nth.call(null,inst_15006,(0),null);
var inst_15008 = cljs.core.nth.call(null,inst_15006,(1),null);
var state_15118__$1 = (function (){var statearr_15190 = state_15118;
(statearr_15190[(26)] = inst_15007);

return statearr_15190;
})();
if(cljs.core.truth_(inst_15008)){
var statearr_15191_15251 = state_15118__$1;
(statearr_15191_15251[(1)] = (13));

} else {
var statearr_15192_15252 = state_15118__$1;
(statearr_15192_15252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (18))){
var inst_15043 = (state_15118[(2)]);
var state_15118__$1 = state_15118;
var statearr_15193_15253 = state_15118__$1;
(statearr_15193_15253[(2)] = inst_15043);

(statearr_15193_15253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (42))){
var state_15118__$1 = state_15118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15118__$1,(45),dchan);
} else {
if((state_val_15119 === (37))){
var inst_15086 = (state_15118[(23)]);
var inst_14986 = (state_15118[(12)]);
var inst_15077 = (state_15118[(25)]);
var inst_15086__$1 = cljs.core.first.call(null,inst_15077);
var inst_15087 = cljs.core.async.put_BANG_.call(null,inst_15086__$1,inst_14986,done);
var state_15118__$1 = (function (){var statearr_15194 = state_15118;
(statearr_15194[(23)] = inst_15086__$1);

return statearr_15194;
})();
if(cljs.core.truth_(inst_15087)){
var statearr_15195_15254 = state_15118__$1;
(statearr_15195_15254[(1)] = (39));

} else {
var statearr_15196_15255 = state_15118__$1;
(statearr_15196_15255[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15119 === (8))){
var inst_14998 = (state_15118[(14)]);
var inst_14997 = (state_15118[(15)]);
var inst_15000 = (inst_14998 < inst_14997);
var inst_15001 = inst_15000;
var state_15118__$1 = state_15118;
if(cljs.core.truth_(inst_15001)){
var statearr_15197_15256 = state_15118__$1;
(statearr_15197_15256[(1)] = (10));

} else {
var statearr_15198_15257 = state_15118__$1;
(statearr_15198_15257[(1)] = (11));

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
});})(c__14384__auto___15203,cs,m,dchan,dctr,done))
;
return ((function (switch__14294__auto__,c__14384__auto___15203,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14295__auto__ = null;
var cljs$core$async$mult_$_state_machine__14295__auto____0 = (function (){
var statearr_15199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15199[(0)] = cljs$core$async$mult_$_state_machine__14295__auto__);

(statearr_15199[(1)] = (1));

return statearr_15199;
});
var cljs$core$async$mult_$_state_machine__14295__auto____1 = (function (state_15118){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_15118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15200){if((e15200 instanceof Object)){
var ex__14298__auto__ = e15200;
var statearr_15201_15258 = state_15118;
(statearr_15201_15258[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15259 = state_15118;
state_15118 = G__15259;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14295__auto__ = function(state_15118){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14295__auto____1.call(this,state_15118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14295__auto____0;
cljs$core$async$mult_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14295__auto____1;
return cljs$core$async$mult_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___15203,cs,m,dchan,dctr,done))
})();
var state__14386__auto__ = (function (){var statearr_15202 = f__14385__auto__.call(null);
(statearr_15202[(6)] = c__14384__auto___15203);

return statearr_15202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___15203,cs,m,dchan,dctr,done))
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
var G__15261 = arguments.length;
switch (G__15261) {
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,ch);
} else {
var m__10544__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,ch);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,ch);
} else {
var m__10544__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,ch);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m);
} else {
var m__10544__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,state_map);
} else {
var m__10544__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,state_map);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,mode);
} else {
var m__10544__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11094__auto__ = [];
var len__11087__auto___15273 = arguments.length;
var i__11088__auto___15274 = (0);
while(true){
if((i__11088__auto___15274 < len__11087__auto___15273)){
args__11094__auto__.push((arguments[i__11088__auto___15274]));

var G__15275 = (i__11088__auto___15274 + (1));
i__11088__auto___15274 = G__15275;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((3) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15267){
var map__15268 = p__15267;
var map__15268__$1 = ((((!((map__15268 == null)))?((((map__15268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15268):map__15268);
var opts = map__15268__$1;
var statearr_15270_15276 = state;
(statearr_15270_15276[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__15268,map__15268__$1,opts){
return (function (val){
var statearr_15271_15277 = state;
(statearr_15271_15277[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15268,map__15268__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_15272_15278 = state;
(statearr_15272_15278[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15263){
var G__15264 = cljs.core.first.call(null,seq15263);
var seq15263__$1 = cljs.core.next.call(null,seq15263);
var G__15265 = cljs.core.first.call(null,seq15263__$1);
var seq15263__$2 = cljs.core.next.call(null,seq15263__$1);
var G__15266 = cljs.core.first.call(null,seq15263__$2);
var seq15263__$3 = cljs.core.next.call(null,seq15263__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15264,G__15265,G__15266,seq15263__$3);
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
if(typeof cljs.core.async.t_cljs$core$async15279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15279 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15280){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15280 = meta15280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15281,meta15280__$1){
var self__ = this;
var _15281__$1 = this;
return (new cljs.core.async.t_cljs$core$async15279(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15280__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15281){
var self__ = this;
var _15281__$1 = this;
return self__.meta15280;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15279.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async15279.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15280","meta15280",-1269165744,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15279";

cljs.core.async.t_cljs$core$async15279.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15279");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15279 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15279(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15280){
return (new cljs.core.async.t_cljs$core$async15279(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15280));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15279(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14384__auto___15443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___15443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___15443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15383){
var state_val_15384 = (state_15383[(1)]);
if((state_val_15384 === (7))){
var inst_15298 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
var statearr_15385_15444 = state_15383__$1;
(statearr_15385_15444[(2)] = inst_15298);

(statearr_15385_15444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (20))){
var inst_15310 = (state_15383[(7)]);
var state_15383__$1 = state_15383;
var statearr_15386_15445 = state_15383__$1;
(statearr_15386_15445[(2)] = inst_15310);

(statearr_15386_15445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (27))){
var state_15383__$1 = state_15383;
var statearr_15387_15446 = state_15383__$1;
(statearr_15387_15446[(2)] = null);

(statearr_15387_15446[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (1))){
var inst_15285 = (state_15383[(8)]);
var inst_15285__$1 = calc_state.call(null);
var inst_15287 = (inst_15285__$1 == null);
var inst_15288 = cljs.core.not.call(null,inst_15287);
var state_15383__$1 = (function (){var statearr_15388 = state_15383;
(statearr_15388[(8)] = inst_15285__$1);

return statearr_15388;
})();
if(inst_15288){
var statearr_15389_15447 = state_15383__$1;
(statearr_15389_15447[(1)] = (2));

} else {
var statearr_15390_15448 = state_15383__$1;
(statearr_15390_15448[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (24))){
var inst_15357 = (state_15383[(9)]);
var inst_15334 = (state_15383[(10)]);
var inst_15343 = (state_15383[(11)]);
var inst_15357__$1 = inst_15334.call(null,inst_15343);
var state_15383__$1 = (function (){var statearr_15391 = state_15383;
(statearr_15391[(9)] = inst_15357__$1);

return statearr_15391;
})();
if(cljs.core.truth_(inst_15357__$1)){
var statearr_15392_15449 = state_15383__$1;
(statearr_15392_15449[(1)] = (29));

} else {
var statearr_15393_15450 = state_15383__$1;
(statearr_15393_15450[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (4))){
var inst_15301 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
if(cljs.core.truth_(inst_15301)){
var statearr_15394_15451 = state_15383__$1;
(statearr_15394_15451[(1)] = (8));

} else {
var statearr_15395_15452 = state_15383__$1;
(statearr_15395_15452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (15))){
var inst_15328 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
if(cljs.core.truth_(inst_15328)){
var statearr_15396_15453 = state_15383__$1;
(statearr_15396_15453[(1)] = (19));

} else {
var statearr_15397_15454 = state_15383__$1;
(statearr_15397_15454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (21))){
var inst_15333 = (state_15383[(12)]);
var inst_15333__$1 = (state_15383[(2)]);
var inst_15334 = cljs.core.get.call(null,inst_15333__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15335 = cljs.core.get.call(null,inst_15333__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15336 = cljs.core.get.call(null,inst_15333__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15383__$1 = (function (){var statearr_15398 = state_15383;
(statearr_15398[(13)] = inst_15335);

(statearr_15398[(12)] = inst_15333__$1);

(statearr_15398[(10)] = inst_15334);

return statearr_15398;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15383__$1,(22),inst_15336);
} else {
if((state_val_15384 === (31))){
var inst_15365 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
if(cljs.core.truth_(inst_15365)){
var statearr_15399_15455 = state_15383__$1;
(statearr_15399_15455[(1)] = (32));

} else {
var statearr_15400_15456 = state_15383__$1;
(statearr_15400_15456[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (32))){
var inst_15342 = (state_15383[(14)]);
var state_15383__$1 = state_15383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15383__$1,(35),out,inst_15342);
} else {
if((state_val_15384 === (33))){
var inst_15333 = (state_15383[(12)]);
var inst_15310 = inst_15333;
var state_15383__$1 = (function (){var statearr_15401 = state_15383;
(statearr_15401[(7)] = inst_15310);

return statearr_15401;
})();
var statearr_15402_15457 = state_15383__$1;
(statearr_15402_15457[(2)] = null);

(statearr_15402_15457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (13))){
var inst_15310 = (state_15383[(7)]);
var inst_15317 = inst_15310.cljs$lang$protocol_mask$partition0$;
var inst_15318 = (inst_15317 & (64));
var inst_15319 = inst_15310.cljs$core$ISeq$;
var inst_15320 = (cljs.core.PROTOCOL_SENTINEL === inst_15319);
var inst_15321 = (inst_15318) || (inst_15320);
var state_15383__$1 = state_15383;
if(cljs.core.truth_(inst_15321)){
var statearr_15403_15458 = state_15383__$1;
(statearr_15403_15458[(1)] = (16));

} else {
var statearr_15404_15459 = state_15383__$1;
(statearr_15404_15459[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (22))){
var inst_15343 = (state_15383[(11)]);
var inst_15342 = (state_15383[(14)]);
var inst_15341 = (state_15383[(2)]);
var inst_15342__$1 = cljs.core.nth.call(null,inst_15341,(0),null);
var inst_15343__$1 = cljs.core.nth.call(null,inst_15341,(1),null);
var inst_15344 = (inst_15342__$1 == null);
var inst_15345 = cljs.core._EQ_.call(null,inst_15343__$1,change);
var inst_15346 = (inst_15344) || (inst_15345);
var state_15383__$1 = (function (){var statearr_15405 = state_15383;
(statearr_15405[(11)] = inst_15343__$1);

(statearr_15405[(14)] = inst_15342__$1);

return statearr_15405;
})();
if(cljs.core.truth_(inst_15346)){
var statearr_15406_15460 = state_15383__$1;
(statearr_15406_15460[(1)] = (23));

} else {
var statearr_15407_15461 = state_15383__$1;
(statearr_15407_15461[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (36))){
var inst_15333 = (state_15383[(12)]);
var inst_15310 = inst_15333;
var state_15383__$1 = (function (){var statearr_15408 = state_15383;
(statearr_15408[(7)] = inst_15310);

return statearr_15408;
})();
var statearr_15409_15462 = state_15383__$1;
(statearr_15409_15462[(2)] = null);

(statearr_15409_15462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (29))){
var inst_15357 = (state_15383[(9)]);
var state_15383__$1 = state_15383;
var statearr_15410_15463 = state_15383__$1;
(statearr_15410_15463[(2)] = inst_15357);

(statearr_15410_15463[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (6))){
var state_15383__$1 = state_15383;
var statearr_15411_15464 = state_15383__$1;
(statearr_15411_15464[(2)] = false);

(statearr_15411_15464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (28))){
var inst_15353 = (state_15383[(2)]);
var inst_15354 = calc_state.call(null);
var inst_15310 = inst_15354;
var state_15383__$1 = (function (){var statearr_15412 = state_15383;
(statearr_15412[(15)] = inst_15353);

(statearr_15412[(7)] = inst_15310);

return statearr_15412;
})();
var statearr_15413_15465 = state_15383__$1;
(statearr_15413_15465[(2)] = null);

(statearr_15413_15465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (25))){
var inst_15379 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
var statearr_15414_15466 = state_15383__$1;
(statearr_15414_15466[(2)] = inst_15379);

(statearr_15414_15466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (34))){
var inst_15377 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
var statearr_15415_15467 = state_15383__$1;
(statearr_15415_15467[(2)] = inst_15377);

(statearr_15415_15467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (17))){
var state_15383__$1 = state_15383;
var statearr_15416_15468 = state_15383__$1;
(statearr_15416_15468[(2)] = false);

(statearr_15416_15468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (3))){
var state_15383__$1 = state_15383;
var statearr_15417_15469 = state_15383__$1;
(statearr_15417_15469[(2)] = false);

(statearr_15417_15469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (12))){
var inst_15381 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15383__$1,inst_15381);
} else {
if((state_val_15384 === (2))){
var inst_15285 = (state_15383[(8)]);
var inst_15290 = inst_15285.cljs$lang$protocol_mask$partition0$;
var inst_15291 = (inst_15290 & (64));
var inst_15292 = inst_15285.cljs$core$ISeq$;
var inst_15293 = (cljs.core.PROTOCOL_SENTINEL === inst_15292);
var inst_15294 = (inst_15291) || (inst_15293);
var state_15383__$1 = state_15383;
if(cljs.core.truth_(inst_15294)){
var statearr_15418_15470 = state_15383__$1;
(statearr_15418_15470[(1)] = (5));

} else {
var statearr_15419_15471 = state_15383__$1;
(statearr_15419_15471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (23))){
var inst_15342 = (state_15383[(14)]);
var inst_15348 = (inst_15342 == null);
var state_15383__$1 = state_15383;
if(cljs.core.truth_(inst_15348)){
var statearr_15420_15472 = state_15383__$1;
(statearr_15420_15472[(1)] = (26));

} else {
var statearr_15421_15473 = state_15383__$1;
(statearr_15421_15473[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (35))){
var inst_15368 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
if(cljs.core.truth_(inst_15368)){
var statearr_15422_15474 = state_15383__$1;
(statearr_15422_15474[(1)] = (36));

} else {
var statearr_15423_15475 = state_15383__$1;
(statearr_15423_15475[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (19))){
var inst_15310 = (state_15383[(7)]);
var inst_15330 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15310);
var state_15383__$1 = state_15383;
var statearr_15424_15476 = state_15383__$1;
(statearr_15424_15476[(2)] = inst_15330);

(statearr_15424_15476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (11))){
var inst_15310 = (state_15383[(7)]);
var inst_15314 = (inst_15310 == null);
var inst_15315 = cljs.core.not.call(null,inst_15314);
var state_15383__$1 = state_15383;
if(inst_15315){
var statearr_15425_15477 = state_15383__$1;
(statearr_15425_15477[(1)] = (13));

} else {
var statearr_15426_15478 = state_15383__$1;
(statearr_15426_15478[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (9))){
var inst_15285 = (state_15383[(8)]);
var state_15383__$1 = state_15383;
var statearr_15427_15479 = state_15383__$1;
(statearr_15427_15479[(2)] = inst_15285);

(statearr_15427_15479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (5))){
var state_15383__$1 = state_15383;
var statearr_15428_15480 = state_15383__$1;
(statearr_15428_15480[(2)] = true);

(statearr_15428_15480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (14))){
var state_15383__$1 = state_15383;
var statearr_15429_15481 = state_15383__$1;
(statearr_15429_15481[(2)] = false);

(statearr_15429_15481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (26))){
var inst_15343 = (state_15383[(11)]);
var inst_15350 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15343);
var state_15383__$1 = state_15383;
var statearr_15430_15482 = state_15383__$1;
(statearr_15430_15482[(2)] = inst_15350);

(statearr_15430_15482[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (16))){
var state_15383__$1 = state_15383;
var statearr_15431_15483 = state_15383__$1;
(statearr_15431_15483[(2)] = true);

(statearr_15431_15483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (38))){
var inst_15373 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
var statearr_15432_15484 = state_15383__$1;
(statearr_15432_15484[(2)] = inst_15373);

(statearr_15432_15484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (30))){
var inst_15335 = (state_15383[(13)]);
var inst_15334 = (state_15383[(10)]);
var inst_15343 = (state_15383[(11)]);
var inst_15360 = cljs.core.empty_QMARK_.call(null,inst_15334);
var inst_15361 = inst_15335.call(null,inst_15343);
var inst_15362 = cljs.core.not.call(null,inst_15361);
var inst_15363 = (inst_15360) && (inst_15362);
var state_15383__$1 = state_15383;
var statearr_15433_15485 = state_15383__$1;
(statearr_15433_15485[(2)] = inst_15363);

(statearr_15433_15485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (10))){
var inst_15285 = (state_15383[(8)]);
var inst_15306 = (state_15383[(2)]);
var inst_15307 = cljs.core.get.call(null,inst_15306,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15308 = cljs.core.get.call(null,inst_15306,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15309 = cljs.core.get.call(null,inst_15306,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15310 = inst_15285;
var state_15383__$1 = (function (){var statearr_15434 = state_15383;
(statearr_15434[(16)] = inst_15307);

(statearr_15434[(17)] = inst_15308);

(statearr_15434[(18)] = inst_15309);

(statearr_15434[(7)] = inst_15310);

return statearr_15434;
})();
var statearr_15435_15486 = state_15383__$1;
(statearr_15435_15486[(2)] = null);

(statearr_15435_15486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (18))){
var inst_15325 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
var statearr_15436_15487 = state_15383__$1;
(statearr_15436_15487[(2)] = inst_15325);

(statearr_15436_15487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (37))){
var state_15383__$1 = state_15383;
var statearr_15437_15488 = state_15383__$1;
(statearr_15437_15488[(2)] = null);

(statearr_15437_15488[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (8))){
var inst_15285 = (state_15383[(8)]);
var inst_15303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15285);
var state_15383__$1 = state_15383;
var statearr_15438_15489 = state_15383__$1;
(statearr_15438_15489[(2)] = inst_15303);

(statearr_15438_15489[(1)] = (10));


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
});})(c__14384__auto___15443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14294__auto__,c__14384__auto___15443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14295__auto__ = null;
var cljs$core$async$mix_$_state_machine__14295__auto____0 = (function (){
var statearr_15439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15439[(0)] = cljs$core$async$mix_$_state_machine__14295__auto__);

(statearr_15439[(1)] = (1));

return statearr_15439;
});
var cljs$core$async$mix_$_state_machine__14295__auto____1 = (function (state_15383){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_15383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15440){if((e15440 instanceof Object)){
var ex__14298__auto__ = e15440;
var statearr_15441_15490 = state_15383;
(statearr_15441_15490[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15491 = state_15383;
state_15383 = G__15491;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14295__auto__ = function(state_15383){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14295__auto____1.call(this,state_15383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14295__auto____0;
cljs$core$async$mix_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14295__auto____1;
return cljs$core$async$mix_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___15443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14386__auto__ = (function (){var statearr_15442 = f__14385__auto__.call(null);
(statearr_15442[(6)] = c__14384__auto___15443);

return statearr_15442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___15443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__10543__auto__ = (((p == null))?null:p);
var m__10544__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10544__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__10543__auto__ = (((p == null))?null:p);
var m__10544__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,p,v,ch);
} else {
var m__10544__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15493 = arguments.length;
switch (G__15493) {
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
var x__10543__auto__ = (((p == null))?null:p);
var m__10544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,p);
} else {
var m__10544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,p);
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
var x__10543__auto__ = (((p == null))?null:p);
var m__10544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,p,v);
} else {
var m__10544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,p,v);
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
var G__15497 = arguments.length;
switch (G__15497) {
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
var or__9810__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9810__auto__,mults){
return (function (p1__15495_SHARP_){
if(cljs.core.truth_(p1__15495_SHARP_.call(null,topic))){
return p1__15495_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15495_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9810__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15498 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15499){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15499 = meta15499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15500,meta15499__$1){
var self__ = this;
var _15500__$1 = this;
return (new cljs.core.async.t_cljs$core$async15498(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15499__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15500){
var self__ = this;
var _15500__$1 = this;
return self__.meta15499;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15498.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15498.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15499","meta15499",1697569510,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15498";

cljs.core.async.t_cljs$core$async15498.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15498");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15498 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15498(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15499){
return (new cljs.core.async.t_cljs$core$async15498(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15499));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15498(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14384__auto___15618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___15618,mults,ensure_mult,p){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___15618,mults,ensure_mult,p){
return (function (state_15572){
var state_val_15573 = (state_15572[(1)]);
if((state_val_15573 === (7))){
var inst_15568 = (state_15572[(2)]);
var state_15572__$1 = state_15572;
var statearr_15574_15619 = state_15572__$1;
(statearr_15574_15619[(2)] = inst_15568);

(statearr_15574_15619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (20))){
var state_15572__$1 = state_15572;
var statearr_15575_15620 = state_15572__$1;
(statearr_15575_15620[(2)] = null);

(statearr_15575_15620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (1))){
var state_15572__$1 = state_15572;
var statearr_15576_15621 = state_15572__$1;
(statearr_15576_15621[(2)] = null);

(statearr_15576_15621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (24))){
var inst_15551 = (state_15572[(7)]);
var inst_15560 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15551);
var state_15572__$1 = state_15572;
var statearr_15577_15622 = state_15572__$1;
(statearr_15577_15622[(2)] = inst_15560);

(statearr_15577_15622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (4))){
var inst_15503 = (state_15572[(8)]);
var inst_15503__$1 = (state_15572[(2)]);
var inst_15504 = (inst_15503__$1 == null);
var state_15572__$1 = (function (){var statearr_15578 = state_15572;
(statearr_15578[(8)] = inst_15503__$1);

return statearr_15578;
})();
if(cljs.core.truth_(inst_15504)){
var statearr_15579_15623 = state_15572__$1;
(statearr_15579_15623[(1)] = (5));

} else {
var statearr_15580_15624 = state_15572__$1;
(statearr_15580_15624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (15))){
var inst_15545 = (state_15572[(2)]);
var state_15572__$1 = state_15572;
var statearr_15581_15625 = state_15572__$1;
(statearr_15581_15625[(2)] = inst_15545);

(statearr_15581_15625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (21))){
var inst_15565 = (state_15572[(2)]);
var state_15572__$1 = (function (){var statearr_15582 = state_15572;
(statearr_15582[(9)] = inst_15565);

return statearr_15582;
})();
var statearr_15583_15626 = state_15572__$1;
(statearr_15583_15626[(2)] = null);

(statearr_15583_15626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (13))){
var inst_15527 = (state_15572[(10)]);
var inst_15529 = cljs.core.chunked_seq_QMARK_.call(null,inst_15527);
var state_15572__$1 = state_15572;
if(inst_15529){
var statearr_15584_15627 = state_15572__$1;
(statearr_15584_15627[(1)] = (16));

} else {
var statearr_15585_15628 = state_15572__$1;
(statearr_15585_15628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (22))){
var inst_15557 = (state_15572[(2)]);
var state_15572__$1 = state_15572;
if(cljs.core.truth_(inst_15557)){
var statearr_15586_15629 = state_15572__$1;
(statearr_15586_15629[(1)] = (23));

} else {
var statearr_15587_15630 = state_15572__$1;
(statearr_15587_15630[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (6))){
var inst_15551 = (state_15572[(7)]);
var inst_15553 = (state_15572[(11)]);
var inst_15503 = (state_15572[(8)]);
var inst_15551__$1 = topic_fn.call(null,inst_15503);
var inst_15552 = cljs.core.deref.call(null,mults);
var inst_15553__$1 = cljs.core.get.call(null,inst_15552,inst_15551__$1);
var state_15572__$1 = (function (){var statearr_15588 = state_15572;
(statearr_15588[(7)] = inst_15551__$1);

(statearr_15588[(11)] = inst_15553__$1);

return statearr_15588;
})();
if(cljs.core.truth_(inst_15553__$1)){
var statearr_15589_15631 = state_15572__$1;
(statearr_15589_15631[(1)] = (19));

} else {
var statearr_15590_15632 = state_15572__$1;
(statearr_15590_15632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (25))){
var inst_15562 = (state_15572[(2)]);
var state_15572__$1 = state_15572;
var statearr_15591_15633 = state_15572__$1;
(statearr_15591_15633[(2)] = inst_15562);

(statearr_15591_15633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (17))){
var inst_15527 = (state_15572[(10)]);
var inst_15536 = cljs.core.first.call(null,inst_15527);
var inst_15537 = cljs.core.async.muxch_STAR_.call(null,inst_15536);
var inst_15538 = cljs.core.async.close_BANG_.call(null,inst_15537);
var inst_15539 = cljs.core.next.call(null,inst_15527);
var inst_15513 = inst_15539;
var inst_15514 = null;
var inst_15515 = (0);
var inst_15516 = (0);
var state_15572__$1 = (function (){var statearr_15592 = state_15572;
(statearr_15592[(12)] = inst_15514);

(statearr_15592[(13)] = inst_15515);

(statearr_15592[(14)] = inst_15538);

(statearr_15592[(15)] = inst_15513);

(statearr_15592[(16)] = inst_15516);

return statearr_15592;
})();
var statearr_15593_15634 = state_15572__$1;
(statearr_15593_15634[(2)] = null);

(statearr_15593_15634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (3))){
var inst_15570 = (state_15572[(2)]);
var state_15572__$1 = state_15572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15572__$1,inst_15570);
} else {
if((state_val_15573 === (12))){
var inst_15547 = (state_15572[(2)]);
var state_15572__$1 = state_15572;
var statearr_15594_15635 = state_15572__$1;
(statearr_15594_15635[(2)] = inst_15547);

(statearr_15594_15635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (2))){
var state_15572__$1 = state_15572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15572__$1,(4),ch);
} else {
if((state_val_15573 === (23))){
var state_15572__$1 = state_15572;
var statearr_15595_15636 = state_15572__$1;
(statearr_15595_15636[(2)] = null);

(statearr_15595_15636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (19))){
var inst_15553 = (state_15572[(11)]);
var inst_15503 = (state_15572[(8)]);
var inst_15555 = cljs.core.async.muxch_STAR_.call(null,inst_15553);
var state_15572__$1 = state_15572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15572__$1,(22),inst_15555,inst_15503);
} else {
if((state_val_15573 === (11))){
var inst_15527 = (state_15572[(10)]);
var inst_15513 = (state_15572[(15)]);
var inst_15527__$1 = cljs.core.seq.call(null,inst_15513);
var state_15572__$1 = (function (){var statearr_15596 = state_15572;
(statearr_15596[(10)] = inst_15527__$1);

return statearr_15596;
})();
if(inst_15527__$1){
var statearr_15597_15637 = state_15572__$1;
(statearr_15597_15637[(1)] = (13));

} else {
var statearr_15598_15638 = state_15572__$1;
(statearr_15598_15638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (9))){
var inst_15549 = (state_15572[(2)]);
var state_15572__$1 = state_15572;
var statearr_15599_15639 = state_15572__$1;
(statearr_15599_15639[(2)] = inst_15549);

(statearr_15599_15639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (5))){
var inst_15510 = cljs.core.deref.call(null,mults);
var inst_15511 = cljs.core.vals.call(null,inst_15510);
var inst_15512 = cljs.core.seq.call(null,inst_15511);
var inst_15513 = inst_15512;
var inst_15514 = null;
var inst_15515 = (0);
var inst_15516 = (0);
var state_15572__$1 = (function (){var statearr_15600 = state_15572;
(statearr_15600[(12)] = inst_15514);

(statearr_15600[(13)] = inst_15515);

(statearr_15600[(15)] = inst_15513);

(statearr_15600[(16)] = inst_15516);

return statearr_15600;
})();
var statearr_15601_15640 = state_15572__$1;
(statearr_15601_15640[(2)] = null);

(statearr_15601_15640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (14))){
var state_15572__$1 = state_15572;
var statearr_15605_15641 = state_15572__$1;
(statearr_15605_15641[(2)] = null);

(statearr_15605_15641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (16))){
var inst_15527 = (state_15572[(10)]);
var inst_15531 = cljs.core.chunk_first.call(null,inst_15527);
var inst_15532 = cljs.core.chunk_rest.call(null,inst_15527);
var inst_15533 = cljs.core.count.call(null,inst_15531);
var inst_15513 = inst_15532;
var inst_15514 = inst_15531;
var inst_15515 = inst_15533;
var inst_15516 = (0);
var state_15572__$1 = (function (){var statearr_15606 = state_15572;
(statearr_15606[(12)] = inst_15514);

(statearr_15606[(13)] = inst_15515);

(statearr_15606[(15)] = inst_15513);

(statearr_15606[(16)] = inst_15516);

return statearr_15606;
})();
var statearr_15607_15642 = state_15572__$1;
(statearr_15607_15642[(2)] = null);

(statearr_15607_15642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (10))){
var inst_15514 = (state_15572[(12)]);
var inst_15515 = (state_15572[(13)]);
var inst_15513 = (state_15572[(15)]);
var inst_15516 = (state_15572[(16)]);
var inst_15521 = cljs.core._nth.call(null,inst_15514,inst_15516);
var inst_15522 = cljs.core.async.muxch_STAR_.call(null,inst_15521);
var inst_15523 = cljs.core.async.close_BANG_.call(null,inst_15522);
var inst_15524 = (inst_15516 + (1));
var tmp15602 = inst_15514;
var tmp15603 = inst_15515;
var tmp15604 = inst_15513;
var inst_15513__$1 = tmp15604;
var inst_15514__$1 = tmp15602;
var inst_15515__$1 = tmp15603;
var inst_15516__$1 = inst_15524;
var state_15572__$1 = (function (){var statearr_15608 = state_15572;
(statearr_15608[(12)] = inst_15514__$1);

(statearr_15608[(13)] = inst_15515__$1);

(statearr_15608[(15)] = inst_15513__$1);

(statearr_15608[(16)] = inst_15516__$1);

(statearr_15608[(17)] = inst_15523);

return statearr_15608;
})();
var statearr_15609_15643 = state_15572__$1;
(statearr_15609_15643[(2)] = null);

(statearr_15609_15643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (18))){
var inst_15542 = (state_15572[(2)]);
var state_15572__$1 = state_15572;
var statearr_15610_15644 = state_15572__$1;
(statearr_15610_15644[(2)] = inst_15542);

(statearr_15610_15644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15573 === (8))){
var inst_15515 = (state_15572[(13)]);
var inst_15516 = (state_15572[(16)]);
var inst_15518 = (inst_15516 < inst_15515);
var inst_15519 = inst_15518;
var state_15572__$1 = state_15572;
if(cljs.core.truth_(inst_15519)){
var statearr_15611_15645 = state_15572__$1;
(statearr_15611_15645[(1)] = (10));

} else {
var statearr_15612_15646 = state_15572__$1;
(statearr_15612_15646[(1)] = (11));

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
});})(c__14384__auto___15618,mults,ensure_mult,p))
;
return ((function (switch__14294__auto__,c__14384__auto___15618,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_15613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15613[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_15613[(1)] = (1));

return statearr_15613;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_15572){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_15572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15614){if((e15614 instanceof Object)){
var ex__14298__auto__ = e15614;
var statearr_15615_15647 = state_15572;
(statearr_15615_15647[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15648 = state_15572;
state_15572 = G__15648;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_15572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_15572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___15618,mults,ensure_mult,p))
})();
var state__14386__auto__ = (function (){var statearr_15616 = f__14385__auto__.call(null);
(statearr_15616[(6)] = c__14384__auto___15618);

return statearr_15616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___15618,mults,ensure_mult,p))
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
var G__15650 = arguments.length;
switch (G__15650) {
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
var G__15653 = arguments.length;
switch (G__15653) {
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
var G__15656 = arguments.length;
switch (G__15656) {
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
var c__14384__auto___15723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___15723,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___15723,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15695){
var state_val_15696 = (state_15695[(1)]);
if((state_val_15696 === (7))){
var state_15695__$1 = state_15695;
var statearr_15697_15724 = state_15695__$1;
(statearr_15697_15724[(2)] = null);

(statearr_15697_15724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (1))){
var state_15695__$1 = state_15695;
var statearr_15698_15725 = state_15695__$1;
(statearr_15698_15725[(2)] = null);

(statearr_15698_15725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (4))){
var inst_15659 = (state_15695[(7)]);
var inst_15661 = (inst_15659 < cnt);
var state_15695__$1 = state_15695;
if(cljs.core.truth_(inst_15661)){
var statearr_15699_15726 = state_15695__$1;
(statearr_15699_15726[(1)] = (6));

} else {
var statearr_15700_15727 = state_15695__$1;
(statearr_15700_15727[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (15))){
var inst_15691 = (state_15695[(2)]);
var state_15695__$1 = state_15695;
var statearr_15701_15728 = state_15695__$1;
(statearr_15701_15728[(2)] = inst_15691);

(statearr_15701_15728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (13))){
var inst_15684 = cljs.core.async.close_BANG_.call(null,out);
var state_15695__$1 = state_15695;
var statearr_15702_15729 = state_15695__$1;
(statearr_15702_15729[(2)] = inst_15684);

(statearr_15702_15729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (6))){
var state_15695__$1 = state_15695;
var statearr_15703_15730 = state_15695__$1;
(statearr_15703_15730[(2)] = null);

(statearr_15703_15730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (3))){
var inst_15693 = (state_15695[(2)]);
var state_15695__$1 = state_15695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15695__$1,inst_15693);
} else {
if((state_val_15696 === (12))){
var inst_15681 = (state_15695[(8)]);
var inst_15681__$1 = (state_15695[(2)]);
var inst_15682 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15681__$1);
var state_15695__$1 = (function (){var statearr_15704 = state_15695;
(statearr_15704[(8)] = inst_15681__$1);

return statearr_15704;
})();
if(cljs.core.truth_(inst_15682)){
var statearr_15705_15731 = state_15695__$1;
(statearr_15705_15731[(1)] = (13));

} else {
var statearr_15706_15732 = state_15695__$1;
(statearr_15706_15732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (2))){
var inst_15658 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15659 = (0);
var state_15695__$1 = (function (){var statearr_15707 = state_15695;
(statearr_15707[(9)] = inst_15658);

(statearr_15707[(7)] = inst_15659);

return statearr_15707;
})();
var statearr_15708_15733 = state_15695__$1;
(statearr_15708_15733[(2)] = null);

(statearr_15708_15733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (11))){
var inst_15659 = (state_15695[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15695,(10),Object,null,(9));
var inst_15668 = chs__$1.call(null,inst_15659);
var inst_15669 = done.call(null,inst_15659);
var inst_15670 = cljs.core.async.take_BANG_.call(null,inst_15668,inst_15669);
var state_15695__$1 = state_15695;
var statearr_15709_15734 = state_15695__$1;
(statearr_15709_15734[(2)] = inst_15670);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15695__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (9))){
var inst_15659 = (state_15695[(7)]);
var inst_15672 = (state_15695[(2)]);
var inst_15673 = (inst_15659 + (1));
var inst_15659__$1 = inst_15673;
var state_15695__$1 = (function (){var statearr_15710 = state_15695;
(statearr_15710[(7)] = inst_15659__$1);

(statearr_15710[(10)] = inst_15672);

return statearr_15710;
})();
var statearr_15711_15735 = state_15695__$1;
(statearr_15711_15735[(2)] = null);

(statearr_15711_15735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (5))){
var inst_15679 = (state_15695[(2)]);
var state_15695__$1 = (function (){var statearr_15712 = state_15695;
(statearr_15712[(11)] = inst_15679);

return statearr_15712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15695__$1,(12),dchan);
} else {
if((state_val_15696 === (14))){
var inst_15681 = (state_15695[(8)]);
var inst_15686 = cljs.core.apply.call(null,f,inst_15681);
var state_15695__$1 = state_15695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15695__$1,(16),out,inst_15686);
} else {
if((state_val_15696 === (16))){
var inst_15688 = (state_15695[(2)]);
var state_15695__$1 = (function (){var statearr_15713 = state_15695;
(statearr_15713[(12)] = inst_15688);

return statearr_15713;
})();
var statearr_15714_15736 = state_15695__$1;
(statearr_15714_15736[(2)] = null);

(statearr_15714_15736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (10))){
var inst_15663 = (state_15695[(2)]);
var inst_15664 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15695__$1 = (function (){var statearr_15715 = state_15695;
(statearr_15715[(13)] = inst_15663);

return statearr_15715;
})();
var statearr_15716_15737 = state_15695__$1;
(statearr_15716_15737[(2)] = inst_15664);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15695__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15696 === (8))){
var inst_15677 = (state_15695[(2)]);
var state_15695__$1 = state_15695;
var statearr_15717_15738 = state_15695__$1;
(statearr_15717_15738[(2)] = inst_15677);

(statearr_15717_15738[(1)] = (5));


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
});})(c__14384__auto___15723,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14294__auto__,c__14384__auto___15723,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_15718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15718[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_15718[(1)] = (1));

return statearr_15718;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_15695){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_15695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15719){if((e15719 instanceof Object)){
var ex__14298__auto__ = e15719;
var statearr_15720_15739 = state_15695;
(statearr_15720_15739[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15740 = state_15695;
state_15695 = G__15740;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_15695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_15695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___15723,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14386__auto__ = (function (){var statearr_15721 = f__14385__auto__.call(null);
(statearr_15721[(6)] = c__14384__auto___15723);

return statearr_15721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___15723,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15743 = arguments.length;
switch (G__15743) {
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
var c__14384__auto___15797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___15797,out){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___15797,out){
return (function (state_15775){
var state_val_15776 = (state_15775[(1)]);
if((state_val_15776 === (7))){
var inst_15754 = (state_15775[(7)]);
var inst_15755 = (state_15775[(8)]);
var inst_15754__$1 = (state_15775[(2)]);
var inst_15755__$1 = cljs.core.nth.call(null,inst_15754__$1,(0),null);
var inst_15756 = cljs.core.nth.call(null,inst_15754__$1,(1),null);
var inst_15757 = (inst_15755__$1 == null);
var state_15775__$1 = (function (){var statearr_15777 = state_15775;
(statearr_15777[(9)] = inst_15756);

(statearr_15777[(7)] = inst_15754__$1);

(statearr_15777[(8)] = inst_15755__$1);

return statearr_15777;
})();
if(cljs.core.truth_(inst_15757)){
var statearr_15778_15798 = state_15775__$1;
(statearr_15778_15798[(1)] = (8));

} else {
var statearr_15779_15799 = state_15775__$1;
(statearr_15779_15799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (1))){
var inst_15744 = cljs.core.vec.call(null,chs);
var inst_15745 = inst_15744;
var state_15775__$1 = (function (){var statearr_15780 = state_15775;
(statearr_15780[(10)] = inst_15745);

return statearr_15780;
})();
var statearr_15781_15800 = state_15775__$1;
(statearr_15781_15800[(2)] = null);

(statearr_15781_15800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (4))){
var inst_15745 = (state_15775[(10)]);
var state_15775__$1 = state_15775;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15775__$1,(7),inst_15745);
} else {
if((state_val_15776 === (6))){
var inst_15771 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
var statearr_15782_15801 = state_15775__$1;
(statearr_15782_15801[(2)] = inst_15771);

(statearr_15782_15801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (3))){
var inst_15773 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15775__$1,inst_15773);
} else {
if((state_val_15776 === (2))){
var inst_15745 = (state_15775[(10)]);
var inst_15747 = cljs.core.count.call(null,inst_15745);
var inst_15748 = (inst_15747 > (0));
var state_15775__$1 = state_15775;
if(cljs.core.truth_(inst_15748)){
var statearr_15784_15802 = state_15775__$1;
(statearr_15784_15802[(1)] = (4));

} else {
var statearr_15785_15803 = state_15775__$1;
(statearr_15785_15803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (11))){
var inst_15745 = (state_15775[(10)]);
var inst_15764 = (state_15775[(2)]);
var tmp15783 = inst_15745;
var inst_15745__$1 = tmp15783;
var state_15775__$1 = (function (){var statearr_15786 = state_15775;
(statearr_15786[(10)] = inst_15745__$1);

(statearr_15786[(11)] = inst_15764);

return statearr_15786;
})();
var statearr_15787_15804 = state_15775__$1;
(statearr_15787_15804[(2)] = null);

(statearr_15787_15804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (9))){
var inst_15755 = (state_15775[(8)]);
var state_15775__$1 = state_15775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15775__$1,(11),out,inst_15755);
} else {
if((state_val_15776 === (5))){
var inst_15769 = cljs.core.async.close_BANG_.call(null,out);
var state_15775__$1 = state_15775;
var statearr_15788_15805 = state_15775__$1;
(statearr_15788_15805[(2)] = inst_15769);

(statearr_15788_15805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (10))){
var inst_15767 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
var statearr_15789_15806 = state_15775__$1;
(statearr_15789_15806[(2)] = inst_15767);

(statearr_15789_15806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (8))){
var inst_15756 = (state_15775[(9)]);
var inst_15754 = (state_15775[(7)]);
var inst_15745 = (state_15775[(10)]);
var inst_15755 = (state_15775[(8)]);
var inst_15759 = (function (){var cs = inst_15745;
var vec__15750 = inst_15754;
var v = inst_15755;
var c = inst_15756;
return ((function (cs,vec__15750,v,c,inst_15756,inst_15754,inst_15745,inst_15755,state_val_15776,c__14384__auto___15797,out){
return (function (p1__15741_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15741_SHARP_);
});
;})(cs,vec__15750,v,c,inst_15756,inst_15754,inst_15745,inst_15755,state_val_15776,c__14384__auto___15797,out))
})();
var inst_15760 = cljs.core.filterv.call(null,inst_15759,inst_15745);
var inst_15745__$1 = inst_15760;
var state_15775__$1 = (function (){var statearr_15790 = state_15775;
(statearr_15790[(10)] = inst_15745__$1);

return statearr_15790;
})();
var statearr_15791_15807 = state_15775__$1;
(statearr_15791_15807[(2)] = null);

(statearr_15791_15807[(1)] = (2));


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
});})(c__14384__auto___15797,out))
;
return ((function (switch__14294__auto__,c__14384__auto___15797,out){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_15792 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15792[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_15792[(1)] = (1));

return statearr_15792;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_15775){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_15775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15793){if((e15793 instanceof Object)){
var ex__14298__auto__ = e15793;
var statearr_15794_15808 = state_15775;
(statearr_15794_15808[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15809 = state_15775;
state_15775 = G__15809;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_15775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_15775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___15797,out))
})();
var state__14386__auto__ = (function (){var statearr_15795 = f__14385__auto__.call(null);
(statearr_15795[(6)] = c__14384__auto___15797);

return statearr_15795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___15797,out))
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
var G__15811 = arguments.length;
switch (G__15811) {
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
var c__14384__auto___15856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___15856,out){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___15856,out){
return (function (state_15835){
var state_val_15836 = (state_15835[(1)]);
if((state_val_15836 === (7))){
var inst_15817 = (state_15835[(7)]);
var inst_15817__$1 = (state_15835[(2)]);
var inst_15818 = (inst_15817__$1 == null);
var inst_15819 = cljs.core.not.call(null,inst_15818);
var state_15835__$1 = (function (){var statearr_15837 = state_15835;
(statearr_15837[(7)] = inst_15817__$1);

return statearr_15837;
})();
if(inst_15819){
var statearr_15838_15857 = state_15835__$1;
(statearr_15838_15857[(1)] = (8));

} else {
var statearr_15839_15858 = state_15835__$1;
(statearr_15839_15858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15836 === (1))){
var inst_15812 = (0);
var state_15835__$1 = (function (){var statearr_15840 = state_15835;
(statearr_15840[(8)] = inst_15812);

return statearr_15840;
})();
var statearr_15841_15859 = state_15835__$1;
(statearr_15841_15859[(2)] = null);

(statearr_15841_15859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15836 === (4))){
var state_15835__$1 = state_15835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15835__$1,(7),ch);
} else {
if((state_val_15836 === (6))){
var inst_15830 = (state_15835[(2)]);
var state_15835__$1 = state_15835;
var statearr_15842_15860 = state_15835__$1;
(statearr_15842_15860[(2)] = inst_15830);

(statearr_15842_15860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15836 === (3))){
var inst_15832 = (state_15835[(2)]);
var inst_15833 = cljs.core.async.close_BANG_.call(null,out);
var state_15835__$1 = (function (){var statearr_15843 = state_15835;
(statearr_15843[(9)] = inst_15832);

return statearr_15843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15835__$1,inst_15833);
} else {
if((state_val_15836 === (2))){
var inst_15812 = (state_15835[(8)]);
var inst_15814 = (inst_15812 < n);
var state_15835__$1 = state_15835;
if(cljs.core.truth_(inst_15814)){
var statearr_15844_15861 = state_15835__$1;
(statearr_15844_15861[(1)] = (4));

} else {
var statearr_15845_15862 = state_15835__$1;
(statearr_15845_15862[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15836 === (11))){
var inst_15812 = (state_15835[(8)]);
var inst_15822 = (state_15835[(2)]);
var inst_15823 = (inst_15812 + (1));
var inst_15812__$1 = inst_15823;
var state_15835__$1 = (function (){var statearr_15846 = state_15835;
(statearr_15846[(10)] = inst_15822);

(statearr_15846[(8)] = inst_15812__$1);

return statearr_15846;
})();
var statearr_15847_15863 = state_15835__$1;
(statearr_15847_15863[(2)] = null);

(statearr_15847_15863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15836 === (9))){
var state_15835__$1 = state_15835;
var statearr_15848_15864 = state_15835__$1;
(statearr_15848_15864[(2)] = null);

(statearr_15848_15864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15836 === (5))){
var state_15835__$1 = state_15835;
var statearr_15849_15865 = state_15835__$1;
(statearr_15849_15865[(2)] = null);

(statearr_15849_15865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15836 === (10))){
var inst_15827 = (state_15835[(2)]);
var state_15835__$1 = state_15835;
var statearr_15850_15866 = state_15835__$1;
(statearr_15850_15866[(2)] = inst_15827);

(statearr_15850_15866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15836 === (8))){
var inst_15817 = (state_15835[(7)]);
var state_15835__$1 = state_15835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15835__$1,(11),out,inst_15817);
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
});})(c__14384__auto___15856,out))
;
return ((function (switch__14294__auto__,c__14384__auto___15856,out){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_15851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15851[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_15851[(1)] = (1));

return statearr_15851;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_15835){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_15835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15852){if((e15852 instanceof Object)){
var ex__14298__auto__ = e15852;
var statearr_15853_15867 = state_15835;
(statearr_15853_15867[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15868 = state_15835;
state_15835 = G__15868;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_15835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_15835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___15856,out))
})();
var state__14386__auto__ = (function (){var statearr_15854 = f__14385__auto__.call(null);
(statearr_15854[(6)] = c__14384__auto___15856);

return statearr_15854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___15856,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15870 = (function (f,ch,meta15871){
this.f = f;
this.ch = ch;
this.meta15871 = meta15871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15872,meta15871__$1){
var self__ = this;
var _15872__$1 = this;
return (new cljs.core.async.t_cljs$core$async15870(self__.f,self__.ch,meta15871__$1));
});

cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15872){
var self__ = this;
var _15872__$1 = this;
return self__.meta15871;
});

cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15873 = (function (f,ch,meta15871,_,fn1,meta15874){
this.f = f;
this.ch = ch;
this.meta15871 = meta15871;
this._ = _;
this.fn1 = fn1;
this.meta15874 = meta15874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15875,meta15874__$1){
var self__ = this;
var _15875__$1 = this;
return (new cljs.core.async.t_cljs$core$async15873(self__.f,self__.ch,self__.meta15871,self__._,self__.fn1,meta15874__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15875){
var self__ = this;
var _15875__$1 = this;
return self__.meta15874;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15869_SHARP_){
return f1.call(null,(((p1__15869_SHARP_ == null))?null:self__.f.call(null,p1__15869_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15873.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15871","meta15871",-1015182904,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15870","cljs.core.async/t_cljs$core$async15870",540533607,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15874","meta15874",-1195973328,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15873";

cljs.core.async.t_cljs$core$async15873.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15873");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15873 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15873(f__$1,ch__$1,meta15871__$1,___$2,fn1__$1,meta15874){
return (new cljs.core.async.t_cljs$core$async15873(f__$1,ch__$1,meta15871__$1,___$2,fn1__$1,meta15874));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15873(self__.f,self__.ch,self__.meta15871,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9798__auto__ = ret;
if(cljs.core.truth_(and__9798__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9798__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15871","meta15871",-1015182904,null)], null);
});

cljs.core.async.t_cljs$core$async15870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15870";

cljs.core.async.t_cljs$core$async15870.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15870");
});

cljs.core.async.__GT_t_cljs$core$async15870 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15870(f__$1,ch__$1,meta15871){
return (new cljs.core.async.t_cljs$core$async15870(f__$1,ch__$1,meta15871));
});

}

return (new cljs.core.async.t_cljs$core$async15870(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15876 = (function (f,ch,meta15877){
this.f = f;
this.ch = ch;
this.meta15877 = meta15877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15878,meta15877__$1){
var self__ = this;
var _15878__$1 = this;
return (new cljs.core.async.t_cljs$core$async15876(self__.f,self__.ch,meta15877__$1));
});

cljs.core.async.t_cljs$core$async15876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15878){
var self__ = this;
var _15878__$1 = this;
return self__.meta15877;
});

cljs.core.async.t_cljs$core$async15876.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15876.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15876.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15876.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15876.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15876.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15877","meta15877",790005070,null)], null);
});

cljs.core.async.t_cljs$core$async15876.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15876";

cljs.core.async.t_cljs$core$async15876.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15876");
});

cljs.core.async.__GT_t_cljs$core$async15876 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15876(f__$1,ch__$1,meta15877){
return (new cljs.core.async.t_cljs$core$async15876(f__$1,ch__$1,meta15877));
});

}

return (new cljs.core.async.t_cljs$core$async15876(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15879 = (function (p,ch,meta15880){
this.p = p;
this.ch = ch;
this.meta15880 = meta15880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15881,meta15880__$1){
var self__ = this;
var _15881__$1 = this;
return (new cljs.core.async.t_cljs$core$async15879(self__.p,self__.ch,meta15880__$1));
});

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15881){
var self__ = this;
var _15881__$1 = this;
return self__.meta15880;
});

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15880","meta15880",-11697656,null)], null);
});

cljs.core.async.t_cljs$core$async15879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15879";

cljs.core.async.t_cljs$core$async15879.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15879");
});

cljs.core.async.__GT_t_cljs$core$async15879 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15879(p__$1,ch__$1,meta15880){
return (new cljs.core.async.t_cljs$core$async15879(p__$1,ch__$1,meta15880));
});

}

return (new cljs.core.async.t_cljs$core$async15879(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15883 = arguments.length;
switch (G__15883) {
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
var c__14384__auto___15923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___15923,out){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___15923,out){
return (function (state_15904){
var state_val_15905 = (state_15904[(1)]);
if((state_val_15905 === (7))){
var inst_15900 = (state_15904[(2)]);
var state_15904__$1 = state_15904;
var statearr_15906_15924 = state_15904__$1;
(statearr_15906_15924[(2)] = inst_15900);

(statearr_15906_15924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (1))){
var state_15904__$1 = state_15904;
var statearr_15907_15925 = state_15904__$1;
(statearr_15907_15925[(2)] = null);

(statearr_15907_15925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (4))){
var inst_15886 = (state_15904[(7)]);
var inst_15886__$1 = (state_15904[(2)]);
var inst_15887 = (inst_15886__$1 == null);
var state_15904__$1 = (function (){var statearr_15908 = state_15904;
(statearr_15908[(7)] = inst_15886__$1);

return statearr_15908;
})();
if(cljs.core.truth_(inst_15887)){
var statearr_15909_15926 = state_15904__$1;
(statearr_15909_15926[(1)] = (5));

} else {
var statearr_15910_15927 = state_15904__$1;
(statearr_15910_15927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (6))){
var inst_15886 = (state_15904[(7)]);
var inst_15891 = p.call(null,inst_15886);
var state_15904__$1 = state_15904;
if(cljs.core.truth_(inst_15891)){
var statearr_15911_15928 = state_15904__$1;
(statearr_15911_15928[(1)] = (8));

} else {
var statearr_15912_15929 = state_15904__$1;
(statearr_15912_15929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (3))){
var inst_15902 = (state_15904[(2)]);
var state_15904__$1 = state_15904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15904__$1,inst_15902);
} else {
if((state_val_15905 === (2))){
var state_15904__$1 = state_15904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15904__$1,(4),ch);
} else {
if((state_val_15905 === (11))){
var inst_15894 = (state_15904[(2)]);
var state_15904__$1 = state_15904;
var statearr_15913_15930 = state_15904__$1;
(statearr_15913_15930[(2)] = inst_15894);

(statearr_15913_15930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (9))){
var state_15904__$1 = state_15904;
var statearr_15914_15931 = state_15904__$1;
(statearr_15914_15931[(2)] = null);

(statearr_15914_15931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (5))){
var inst_15889 = cljs.core.async.close_BANG_.call(null,out);
var state_15904__$1 = state_15904;
var statearr_15915_15932 = state_15904__$1;
(statearr_15915_15932[(2)] = inst_15889);

(statearr_15915_15932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (10))){
var inst_15897 = (state_15904[(2)]);
var state_15904__$1 = (function (){var statearr_15916 = state_15904;
(statearr_15916[(8)] = inst_15897);

return statearr_15916;
})();
var statearr_15917_15933 = state_15904__$1;
(statearr_15917_15933[(2)] = null);

(statearr_15917_15933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (8))){
var inst_15886 = (state_15904[(7)]);
var state_15904__$1 = state_15904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15904__$1,(11),out,inst_15886);
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
});})(c__14384__auto___15923,out))
;
return ((function (switch__14294__auto__,c__14384__auto___15923,out){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_15918 = [null,null,null,null,null,null,null,null,null];
(statearr_15918[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_15918[(1)] = (1));

return statearr_15918;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_15904){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_15904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15919){if((e15919 instanceof Object)){
var ex__14298__auto__ = e15919;
var statearr_15920_15934 = state_15904;
(statearr_15920_15934[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15935 = state_15904;
state_15904 = G__15935;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_15904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_15904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___15923,out))
})();
var state__14386__auto__ = (function (){var statearr_15921 = f__14385__auto__.call(null);
(statearr_15921[(6)] = c__14384__auto___15923);

return statearr_15921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___15923,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15937 = arguments.length;
switch (G__15937) {
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
var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__){
return (function (state_16000){
var state_val_16001 = (state_16000[(1)]);
if((state_val_16001 === (7))){
var inst_15996 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16002_16040 = state_16000__$1;
(statearr_16002_16040[(2)] = inst_15996);

(statearr_16002_16040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (20))){
var inst_15966 = (state_16000[(7)]);
var inst_15977 = (state_16000[(2)]);
var inst_15978 = cljs.core.next.call(null,inst_15966);
var inst_15952 = inst_15978;
var inst_15953 = null;
var inst_15954 = (0);
var inst_15955 = (0);
var state_16000__$1 = (function (){var statearr_16003 = state_16000;
(statearr_16003[(8)] = inst_15977);

(statearr_16003[(9)] = inst_15953);

(statearr_16003[(10)] = inst_15955);

(statearr_16003[(11)] = inst_15954);

(statearr_16003[(12)] = inst_15952);

return statearr_16003;
})();
var statearr_16004_16041 = state_16000__$1;
(statearr_16004_16041[(2)] = null);

(statearr_16004_16041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (1))){
var state_16000__$1 = state_16000;
var statearr_16005_16042 = state_16000__$1;
(statearr_16005_16042[(2)] = null);

(statearr_16005_16042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (4))){
var inst_15941 = (state_16000[(13)]);
var inst_15941__$1 = (state_16000[(2)]);
var inst_15942 = (inst_15941__$1 == null);
var state_16000__$1 = (function (){var statearr_16006 = state_16000;
(statearr_16006[(13)] = inst_15941__$1);

return statearr_16006;
})();
if(cljs.core.truth_(inst_15942)){
var statearr_16007_16043 = state_16000__$1;
(statearr_16007_16043[(1)] = (5));

} else {
var statearr_16008_16044 = state_16000__$1;
(statearr_16008_16044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (15))){
var state_16000__$1 = state_16000;
var statearr_16012_16045 = state_16000__$1;
(statearr_16012_16045[(2)] = null);

(statearr_16012_16045[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (21))){
var state_16000__$1 = state_16000;
var statearr_16013_16046 = state_16000__$1;
(statearr_16013_16046[(2)] = null);

(statearr_16013_16046[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (13))){
var inst_15953 = (state_16000[(9)]);
var inst_15955 = (state_16000[(10)]);
var inst_15954 = (state_16000[(11)]);
var inst_15952 = (state_16000[(12)]);
var inst_15962 = (state_16000[(2)]);
var inst_15963 = (inst_15955 + (1));
var tmp16009 = inst_15953;
var tmp16010 = inst_15954;
var tmp16011 = inst_15952;
var inst_15952__$1 = tmp16011;
var inst_15953__$1 = tmp16009;
var inst_15954__$1 = tmp16010;
var inst_15955__$1 = inst_15963;
var state_16000__$1 = (function (){var statearr_16014 = state_16000;
(statearr_16014[(9)] = inst_15953__$1);

(statearr_16014[(10)] = inst_15955__$1);

(statearr_16014[(11)] = inst_15954__$1);

(statearr_16014[(14)] = inst_15962);

(statearr_16014[(12)] = inst_15952__$1);

return statearr_16014;
})();
var statearr_16015_16047 = state_16000__$1;
(statearr_16015_16047[(2)] = null);

(statearr_16015_16047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (22))){
var state_16000__$1 = state_16000;
var statearr_16016_16048 = state_16000__$1;
(statearr_16016_16048[(2)] = null);

(statearr_16016_16048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (6))){
var inst_15941 = (state_16000[(13)]);
var inst_15950 = f.call(null,inst_15941);
var inst_15951 = cljs.core.seq.call(null,inst_15950);
var inst_15952 = inst_15951;
var inst_15953 = null;
var inst_15954 = (0);
var inst_15955 = (0);
var state_16000__$1 = (function (){var statearr_16017 = state_16000;
(statearr_16017[(9)] = inst_15953);

(statearr_16017[(10)] = inst_15955);

(statearr_16017[(11)] = inst_15954);

(statearr_16017[(12)] = inst_15952);

return statearr_16017;
})();
var statearr_16018_16049 = state_16000__$1;
(statearr_16018_16049[(2)] = null);

(statearr_16018_16049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (17))){
var inst_15966 = (state_16000[(7)]);
var inst_15970 = cljs.core.chunk_first.call(null,inst_15966);
var inst_15971 = cljs.core.chunk_rest.call(null,inst_15966);
var inst_15972 = cljs.core.count.call(null,inst_15970);
var inst_15952 = inst_15971;
var inst_15953 = inst_15970;
var inst_15954 = inst_15972;
var inst_15955 = (0);
var state_16000__$1 = (function (){var statearr_16019 = state_16000;
(statearr_16019[(9)] = inst_15953);

(statearr_16019[(10)] = inst_15955);

(statearr_16019[(11)] = inst_15954);

(statearr_16019[(12)] = inst_15952);

return statearr_16019;
})();
var statearr_16020_16050 = state_16000__$1;
(statearr_16020_16050[(2)] = null);

(statearr_16020_16050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (3))){
var inst_15998 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16000__$1,inst_15998);
} else {
if((state_val_16001 === (12))){
var inst_15986 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16021_16051 = state_16000__$1;
(statearr_16021_16051[(2)] = inst_15986);

(statearr_16021_16051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (2))){
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16000__$1,(4),in$);
} else {
if((state_val_16001 === (23))){
var inst_15994 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16022_16052 = state_16000__$1;
(statearr_16022_16052[(2)] = inst_15994);

(statearr_16022_16052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (19))){
var inst_15981 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16023_16053 = state_16000__$1;
(statearr_16023_16053[(2)] = inst_15981);

(statearr_16023_16053[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (11))){
var inst_15966 = (state_16000[(7)]);
var inst_15952 = (state_16000[(12)]);
var inst_15966__$1 = cljs.core.seq.call(null,inst_15952);
var state_16000__$1 = (function (){var statearr_16024 = state_16000;
(statearr_16024[(7)] = inst_15966__$1);

return statearr_16024;
})();
if(inst_15966__$1){
var statearr_16025_16054 = state_16000__$1;
(statearr_16025_16054[(1)] = (14));

} else {
var statearr_16026_16055 = state_16000__$1;
(statearr_16026_16055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (9))){
var inst_15988 = (state_16000[(2)]);
var inst_15989 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16000__$1 = (function (){var statearr_16027 = state_16000;
(statearr_16027[(15)] = inst_15988);

return statearr_16027;
})();
if(cljs.core.truth_(inst_15989)){
var statearr_16028_16056 = state_16000__$1;
(statearr_16028_16056[(1)] = (21));

} else {
var statearr_16029_16057 = state_16000__$1;
(statearr_16029_16057[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (5))){
var inst_15944 = cljs.core.async.close_BANG_.call(null,out);
var state_16000__$1 = state_16000;
var statearr_16030_16058 = state_16000__$1;
(statearr_16030_16058[(2)] = inst_15944);

(statearr_16030_16058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (14))){
var inst_15966 = (state_16000[(7)]);
var inst_15968 = cljs.core.chunked_seq_QMARK_.call(null,inst_15966);
var state_16000__$1 = state_16000;
if(inst_15968){
var statearr_16031_16059 = state_16000__$1;
(statearr_16031_16059[(1)] = (17));

} else {
var statearr_16032_16060 = state_16000__$1;
(statearr_16032_16060[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (16))){
var inst_15984 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16033_16061 = state_16000__$1;
(statearr_16033_16061[(2)] = inst_15984);

(statearr_16033_16061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (10))){
var inst_15953 = (state_16000[(9)]);
var inst_15955 = (state_16000[(10)]);
var inst_15960 = cljs.core._nth.call(null,inst_15953,inst_15955);
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16000__$1,(13),out,inst_15960);
} else {
if((state_val_16001 === (18))){
var inst_15966 = (state_16000[(7)]);
var inst_15975 = cljs.core.first.call(null,inst_15966);
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16000__$1,(20),out,inst_15975);
} else {
if((state_val_16001 === (8))){
var inst_15955 = (state_16000[(10)]);
var inst_15954 = (state_16000[(11)]);
var inst_15957 = (inst_15955 < inst_15954);
var inst_15958 = inst_15957;
var state_16000__$1 = state_16000;
if(cljs.core.truth_(inst_15958)){
var statearr_16034_16062 = state_16000__$1;
(statearr_16034_16062[(1)] = (10));

} else {
var statearr_16035_16063 = state_16000__$1;
(statearr_16035_16063[(1)] = (11));

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
});})(c__14384__auto__))
;
return ((function (switch__14294__auto__,c__14384__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_16036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16036[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__);

(statearr_16036[(1)] = (1));

return statearr_16036;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____1 = (function (state_16000){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_16000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e16037){if((e16037 instanceof Object)){
var ex__14298__auto__ = e16037;
var statearr_16038_16064 = state_16000;
(statearr_16038_16064[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16065 = state_16000;
state_16000 = G__16065;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__ = function(state_16000){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____1.call(this,state_16000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__))
})();
var state__14386__auto__ = (function (){var statearr_16039 = f__14385__auto__.call(null);
(statearr_16039[(6)] = c__14384__auto__);

return statearr_16039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__))
);

return c__14384__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16067 = arguments.length;
switch (G__16067) {
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
var G__16070 = arguments.length;
switch (G__16070) {
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
var G__16073 = arguments.length;
switch (G__16073) {
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
var c__14384__auto___16120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___16120,out){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___16120,out){
return (function (state_16097){
var state_val_16098 = (state_16097[(1)]);
if((state_val_16098 === (7))){
var inst_16092 = (state_16097[(2)]);
var state_16097__$1 = state_16097;
var statearr_16099_16121 = state_16097__$1;
(statearr_16099_16121[(2)] = inst_16092);

(statearr_16099_16121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (1))){
var inst_16074 = null;
var state_16097__$1 = (function (){var statearr_16100 = state_16097;
(statearr_16100[(7)] = inst_16074);

return statearr_16100;
})();
var statearr_16101_16122 = state_16097__$1;
(statearr_16101_16122[(2)] = null);

(statearr_16101_16122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (4))){
var inst_16077 = (state_16097[(8)]);
var inst_16077__$1 = (state_16097[(2)]);
var inst_16078 = (inst_16077__$1 == null);
var inst_16079 = cljs.core.not.call(null,inst_16078);
var state_16097__$1 = (function (){var statearr_16102 = state_16097;
(statearr_16102[(8)] = inst_16077__$1);

return statearr_16102;
})();
if(inst_16079){
var statearr_16103_16123 = state_16097__$1;
(statearr_16103_16123[(1)] = (5));

} else {
var statearr_16104_16124 = state_16097__$1;
(statearr_16104_16124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (6))){
var state_16097__$1 = state_16097;
var statearr_16105_16125 = state_16097__$1;
(statearr_16105_16125[(2)] = null);

(statearr_16105_16125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (3))){
var inst_16094 = (state_16097[(2)]);
var inst_16095 = cljs.core.async.close_BANG_.call(null,out);
var state_16097__$1 = (function (){var statearr_16106 = state_16097;
(statearr_16106[(9)] = inst_16094);

return statearr_16106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16097__$1,inst_16095);
} else {
if((state_val_16098 === (2))){
var state_16097__$1 = state_16097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16097__$1,(4),ch);
} else {
if((state_val_16098 === (11))){
var inst_16077 = (state_16097[(8)]);
var inst_16086 = (state_16097[(2)]);
var inst_16074 = inst_16077;
var state_16097__$1 = (function (){var statearr_16107 = state_16097;
(statearr_16107[(10)] = inst_16086);

(statearr_16107[(7)] = inst_16074);

return statearr_16107;
})();
var statearr_16108_16126 = state_16097__$1;
(statearr_16108_16126[(2)] = null);

(statearr_16108_16126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (9))){
var inst_16077 = (state_16097[(8)]);
var state_16097__$1 = state_16097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16097__$1,(11),out,inst_16077);
} else {
if((state_val_16098 === (5))){
var inst_16077 = (state_16097[(8)]);
var inst_16074 = (state_16097[(7)]);
var inst_16081 = cljs.core._EQ_.call(null,inst_16077,inst_16074);
var state_16097__$1 = state_16097;
if(inst_16081){
var statearr_16110_16127 = state_16097__$1;
(statearr_16110_16127[(1)] = (8));

} else {
var statearr_16111_16128 = state_16097__$1;
(statearr_16111_16128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (10))){
var inst_16089 = (state_16097[(2)]);
var state_16097__$1 = state_16097;
var statearr_16112_16129 = state_16097__$1;
(statearr_16112_16129[(2)] = inst_16089);

(statearr_16112_16129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16098 === (8))){
var inst_16074 = (state_16097[(7)]);
var tmp16109 = inst_16074;
var inst_16074__$1 = tmp16109;
var state_16097__$1 = (function (){var statearr_16113 = state_16097;
(statearr_16113[(7)] = inst_16074__$1);

return statearr_16113;
})();
var statearr_16114_16130 = state_16097__$1;
(statearr_16114_16130[(2)] = null);

(statearr_16114_16130[(1)] = (2));


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
});})(c__14384__auto___16120,out))
;
return ((function (switch__14294__auto__,c__14384__auto___16120,out){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_16115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16115[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_16115[(1)] = (1));

return statearr_16115;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_16097){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_16097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e16116){if((e16116 instanceof Object)){
var ex__14298__auto__ = e16116;
var statearr_16117_16131 = state_16097;
(statearr_16117_16131[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16132 = state_16097;
state_16097 = G__16132;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_16097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_16097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___16120,out))
})();
var state__14386__auto__ = (function (){var statearr_16118 = f__14385__auto__.call(null);
(statearr_16118[(6)] = c__14384__auto___16120);

return statearr_16118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___16120,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16134 = arguments.length;
switch (G__16134) {
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
var c__14384__auto___16200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___16200,out){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___16200,out){
return (function (state_16172){
var state_val_16173 = (state_16172[(1)]);
if((state_val_16173 === (7))){
var inst_16168 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16174_16201 = state_16172__$1;
(statearr_16174_16201[(2)] = inst_16168);

(statearr_16174_16201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (1))){
var inst_16135 = (new Array(n));
var inst_16136 = inst_16135;
var inst_16137 = (0);
var state_16172__$1 = (function (){var statearr_16175 = state_16172;
(statearr_16175[(7)] = inst_16137);

(statearr_16175[(8)] = inst_16136);

return statearr_16175;
})();
var statearr_16176_16202 = state_16172__$1;
(statearr_16176_16202[(2)] = null);

(statearr_16176_16202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (4))){
var inst_16140 = (state_16172[(9)]);
var inst_16140__$1 = (state_16172[(2)]);
var inst_16141 = (inst_16140__$1 == null);
var inst_16142 = cljs.core.not.call(null,inst_16141);
var state_16172__$1 = (function (){var statearr_16177 = state_16172;
(statearr_16177[(9)] = inst_16140__$1);

return statearr_16177;
})();
if(inst_16142){
var statearr_16178_16203 = state_16172__$1;
(statearr_16178_16203[(1)] = (5));

} else {
var statearr_16179_16204 = state_16172__$1;
(statearr_16179_16204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (15))){
var inst_16162 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16180_16205 = state_16172__$1;
(statearr_16180_16205[(2)] = inst_16162);

(statearr_16180_16205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (13))){
var state_16172__$1 = state_16172;
var statearr_16181_16206 = state_16172__$1;
(statearr_16181_16206[(2)] = null);

(statearr_16181_16206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (6))){
var inst_16137 = (state_16172[(7)]);
var inst_16158 = (inst_16137 > (0));
var state_16172__$1 = state_16172;
if(cljs.core.truth_(inst_16158)){
var statearr_16182_16207 = state_16172__$1;
(statearr_16182_16207[(1)] = (12));

} else {
var statearr_16183_16208 = state_16172__$1;
(statearr_16183_16208[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (3))){
var inst_16170 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16172__$1,inst_16170);
} else {
if((state_val_16173 === (12))){
var inst_16136 = (state_16172[(8)]);
var inst_16160 = cljs.core.vec.call(null,inst_16136);
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16172__$1,(15),out,inst_16160);
} else {
if((state_val_16173 === (2))){
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16172__$1,(4),ch);
} else {
if((state_val_16173 === (11))){
var inst_16152 = (state_16172[(2)]);
var inst_16153 = (new Array(n));
var inst_16136 = inst_16153;
var inst_16137 = (0);
var state_16172__$1 = (function (){var statearr_16184 = state_16172;
(statearr_16184[(10)] = inst_16152);

(statearr_16184[(7)] = inst_16137);

(statearr_16184[(8)] = inst_16136);

return statearr_16184;
})();
var statearr_16185_16209 = state_16172__$1;
(statearr_16185_16209[(2)] = null);

(statearr_16185_16209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (9))){
var inst_16136 = (state_16172[(8)]);
var inst_16150 = cljs.core.vec.call(null,inst_16136);
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16172__$1,(11),out,inst_16150);
} else {
if((state_val_16173 === (5))){
var inst_16137 = (state_16172[(7)]);
var inst_16136 = (state_16172[(8)]);
var inst_16140 = (state_16172[(9)]);
var inst_16145 = (state_16172[(11)]);
var inst_16144 = (inst_16136[inst_16137] = inst_16140);
var inst_16145__$1 = (inst_16137 + (1));
var inst_16146 = (inst_16145__$1 < n);
var state_16172__$1 = (function (){var statearr_16186 = state_16172;
(statearr_16186[(11)] = inst_16145__$1);

(statearr_16186[(12)] = inst_16144);

return statearr_16186;
})();
if(cljs.core.truth_(inst_16146)){
var statearr_16187_16210 = state_16172__$1;
(statearr_16187_16210[(1)] = (8));

} else {
var statearr_16188_16211 = state_16172__$1;
(statearr_16188_16211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (14))){
var inst_16165 = (state_16172[(2)]);
var inst_16166 = cljs.core.async.close_BANG_.call(null,out);
var state_16172__$1 = (function (){var statearr_16190 = state_16172;
(statearr_16190[(13)] = inst_16165);

return statearr_16190;
})();
var statearr_16191_16212 = state_16172__$1;
(statearr_16191_16212[(2)] = inst_16166);

(statearr_16191_16212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (10))){
var inst_16156 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16192_16213 = state_16172__$1;
(statearr_16192_16213[(2)] = inst_16156);

(statearr_16192_16213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (8))){
var inst_16136 = (state_16172[(8)]);
var inst_16145 = (state_16172[(11)]);
var tmp16189 = inst_16136;
var inst_16136__$1 = tmp16189;
var inst_16137 = inst_16145;
var state_16172__$1 = (function (){var statearr_16193 = state_16172;
(statearr_16193[(7)] = inst_16137);

(statearr_16193[(8)] = inst_16136__$1);

return statearr_16193;
})();
var statearr_16194_16214 = state_16172__$1;
(statearr_16194_16214[(2)] = null);

(statearr_16194_16214[(1)] = (2));


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
});})(c__14384__auto___16200,out))
;
return ((function (switch__14294__auto__,c__14384__auto___16200,out){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_16195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16195[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_16195[(1)] = (1));

return statearr_16195;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_16172){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_16172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e16196){if((e16196 instanceof Object)){
var ex__14298__auto__ = e16196;
var statearr_16197_16215 = state_16172;
(statearr_16197_16215[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16216 = state_16172;
state_16172 = G__16216;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_16172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_16172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___16200,out))
})();
var state__14386__auto__ = (function (){var statearr_16198 = f__14385__auto__.call(null);
(statearr_16198[(6)] = c__14384__auto___16200);

return statearr_16198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___16200,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16218 = arguments.length;
switch (G__16218) {
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
var c__14384__auto___16288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___16288,out){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___16288,out){
return (function (state_16260){
var state_val_16261 = (state_16260[(1)]);
if((state_val_16261 === (7))){
var inst_16256 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
var statearr_16262_16289 = state_16260__$1;
(statearr_16262_16289[(2)] = inst_16256);

(statearr_16262_16289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (1))){
var inst_16219 = [];
var inst_16220 = inst_16219;
var inst_16221 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16260__$1 = (function (){var statearr_16263 = state_16260;
(statearr_16263[(7)] = inst_16221);

(statearr_16263[(8)] = inst_16220);

return statearr_16263;
})();
var statearr_16264_16290 = state_16260__$1;
(statearr_16264_16290[(2)] = null);

(statearr_16264_16290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (4))){
var inst_16224 = (state_16260[(9)]);
var inst_16224__$1 = (state_16260[(2)]);
var inst_16225 = (inst_16224__$1 == null);
var inst_16226 = cljs.core.not.call(null,inst_16225);
var state_16260__$1 = (function (){var statearr_16265 = state_16260;
(statearr_16265[(9)] = inst_16224__$1);

return statearr_16265;
})();
if(inst_16226){
var statearr_16266_16291 = state_16260__$1;
(statearr_16266_16291[(1)] = (5));

} else {
var statearr_16267_16292 = state_16260__$1;
(statearr_16267_16292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (15))){
var inst_16250 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
var statearr_16268_16293 = state_16260__$1;
(statearr_16268_16293[(2)] = inst_16250);

(statearr_16268_16293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (13))){
var state_16260__$1 = state_16260;
var statearr_16269_16294 = state_16260__$1;
(statearr_16269_16294[(2)] = null);

(statearr_16269_16294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (6))){
var inst_16220 = (state_16260[(8)]);
var inst_16245 = inst_16220.length;
var inst_16246 = (inst_16245 > (0));
var state_16260__$1 = state_16260;
if(cljs.core.truth_(inst_16246)){
var statearr_16270_16295 = state_16260__$1;
(statearr_16270_16295[(1)] = (12));

} else {
var statearr_16271_16296 = state_16260__$1;
(statearr_16271_16296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (3))){
var inst_16258 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16260__$1,inst_16258);
} else {
if((state_val_16261 === (12))){
var inst_16220 = (state_16260[(8)]);
var inst_16248 = cljs.core.vec.call(null,inst_16220);
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16260__$1,(15),out,inst_16248);
} else {
if((state_val_16261 === (2))){
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16260__$1,(4),ch);
} else {
if((state_val_16261 === (11))){
var inst_16228 = (state_16260[(10)]);
var inst_16224 = (state_16260[(9)]);
var inst_16238 = (state_16260[(2)]);
var inst_16239 = [];
var inst_16240 = inst_16239.push(inst_16224);
var inst_16220 = inst_16239;
var inst_16221 = inst_16228;
var state_16260__$1 = (function (){var statearr_16272 = state_16260;
(statearr_16272[(11)] = inst_16240);

(statearr_16272[(7)] = inst_16221);

(statearr_16272[(8)] = inst_16220);

(statearr_16272[(12)] = inst_16238);

return statearr_16272;
})();
var statearr_16273_16297 = state_16260__$1;
(statearr_16273_16297[(2)] = null);

(statearr_16273_16297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (9))){
var inst_16220 = (state_16260[(8)]);
var inst_16236 = cljs.core.vec.call(null,inst_16220);
var state_16260__$1 = state_16260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16260__$1,(11),out,inst_16236);
} else {
if((state_val_16261 === (5))){
var inst_16221 = (state_16260[(7)]);
var inst_16228 = (state_16260[(10)]);
var inst_16224 = (state_16260[(9)]);
var inst_16228__$1 = f.call(null,inst_16224);
var inst_16229 = cljs.core._EQ_.call(null,inst_16228__$1,inst_16221);
var inst_16230 = cljs.core.keyword_identical_QMARK_.call(null,inst_16221,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16231 = (inst_16229) || (inst_16230);
var state_16260__$1 = (function (){var statearr_16274 = state_16260;
(statearr_16274[(10)] = inst_16228__$1);

return statearr_16274;
})();
if(cljs.core.truth_(inst_16231)){
var statearr_16275_16298 = state_16260__$1;
(statearr_16275_16298[(1)] = (8));

} else {
var statearr_16276_16299 = state_16260__$1;
(statearr_16276_16299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (14))){
var inst_16253 = (state_16260[(2)]);
var inst_16254 = cljs.core.async.close_BANG_.call(null,out);
var state_16260__$1 = (function (){var statearr_16278 = state_16260;
(statearr_16278[(13)] = inst_16253);

return statearr_16278;
})();
var statearr_16279_16300 = state_16260__$1;
(statearr_16279_16300[(2)] = inst_16254);

(statearr_16279_16300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (10))){
var inst_16243 = (state_16260[(2)]);
var state_16260__$1 = state_16260;
var statearr_16280_16301 = state_16260__$1;
(statearr_16280_16301[(2)] = inst_16243);

(statearr_16280_16301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16261 === (8))){
var inst_16220 = (state_16260[(8)]);
var inst_16228 = (state_16260[(10)]);
var inst_16224 = (state_16260[(9)]);
var inst_16233 = inst_16220.push(inst_16224);
var tmp16277 = inst_16220;
var inst_16220__$1 = tmp16277;
var inst_16221 = inst_16228;
var state_16260__$1 = (function (){var statearr_16281 = state_16260;
(statearr_16281[(14)] = inst_16233);

(statearr_16281[(7)] = inst_16221);

(statearr_16281[(8)] = inst_16220__$1);

return statearr_16281;
})();
var statearr_16282_16302 = state_16260__$1;
(statearr_16282_16302[(2)] = null);

(statearr_16282_16302[(1)] = (2));


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
});})(c__14384__auto___16288,out))
;
return ((function (switch__14294__auto__,c__14384__auto___16288,out){
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_16283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16283[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_16283[(1)] = (1));

return statearr_16283;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_16260){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_16260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e16284){if((e16284 instanceof Object)){
var ex__14298__auto__ = e16284;
var statearr_16285_16303 = state_16260;
(statearr_16285_16303[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16304 = state_16260;
state_16260 = G__16304;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_16260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_16260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___16288,out))
})();
var state__14386__auto__ = (function (){var statearr_16286 = f__14385__auto__.call(null);
(statearr_16286[(6)] = c__14384__auto___16288);

return statearr_16286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___16288,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506007552442
