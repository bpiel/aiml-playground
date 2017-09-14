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
var G__65043 = arguments.length;
switch (G__65043) {
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
if(typeof cljs.core.async.t_cljs$core$async65044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65044 = (function (f,blockable,meta65045){
this.f = f;
this.blockable = blockable;
this.meta65045 = meta65045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65046,meta65045__$1){
var self__ = this;
var _65046__$1 = this;
return (new cljs.core.async.t_cljs$core$async65044(self__.f,self__.blockable,meta65045__$1));
});

cljs.core.async.t_cljs$core$async65044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65046){
var self__ = this;
var _65046__$1 = this;
return self__.meta65045;
});

cljs.core.async.t_cljs$core$async65044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async65044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async65044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async65044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta65045","meta65045",128144161,null)], null);
});

cljs.core.async.t_cljs$core$async65044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65044";

cljs.core.async.t_cljs$core$async65044.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async65044");
});

cljs.core.async.__GT_t_cljs$core$async65044 = (function cljs$core$async$__GT_t_cljs$core$async65044(f__$1,blockable__$1,meta65045){
return (new cljs.core.async.t_cljs$core$async65044(f__$1,blockable__$1,meta65045));
});

}

return (new cljs.core.async.t_cljs$core$async65044(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__65050 = arguments.length;
switch (G__65050) {
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
var G__65053 = arguments.length;
switch (G__65053) {
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
var G__65056 = arguments.length;
switch (G__65056) {
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
var val_65058 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_65058);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_65058,ret){
return (function (){
return fn1.call(null,val_65058);
});})(val_65058,ret))
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
var G__65060 = arguments.length;
switch (G__65060) {
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
var n__59204__auto___65062 = n;
var x_65063 = (0);
while(true){
if((x_65063 < n__59204__auto___65062)){
(a[x_65063] = (0));

var G__65064 = (x_65063 + (1));
x_65063 = G__65064;
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

var G__65065 = (i + (1));
i = G__65065;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async65066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65066 = (function (flag,meta65067){
this.flag = flag;
this.meta65067 = meta65067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_65068,meta65067__$1){
var self__ = this;
var _65068__$1 = this;
return (new cljs.core.async.t_cljs$core$async65066(self__.flag,meta65067__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async65066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_65068){
var self__ = this;
var _65068__$1 = this;
return self__.meta65067;
});})(flag))
;

cljs.core.async.t_cljs$core$async65066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async65066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async65066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async65066.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta65067","meta65067",-1336256213,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async65066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65066";

cljs.core.async.t_cljs$core$async65066.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async65066");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async65066 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async65066(flag__$1,meta65067){
return (new cljs.core.async.t_cljs$core$async65066(flag__$1,meta65067));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async65066(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async65069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65069 = (function (flag,cb,meta65070){
this.flag = flag;
this.cb = cb;
this.meta65070 = meta65070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65071,meta65070__$1){
var self__ = this;
var _65071__$1 = this;
return (new cljs.core.async.t_cljs$core$async65069(self__.flag,self__.cb,meta65070__$1));
});

cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65071){
var self__ = this;
var _65071__$1 = this;
return self__.meta65070;
});

cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async65069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta65070","meta65070",-2053321234,null)], null);
});

cljs.core.async.t_cljs$core$async65069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65069";

cljs.core.async.t_cljs$core$async65069.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async65069");
});

cljs.core.async.__GT_t_cljs$core$async65069 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async65069(flag__$1,cb__$1,meta65070){
return (new cljs.core.async.t_cljs$core$async65069(flag__$1,cb__$1,meta65070));
});

}

return (new cljs.core.async.t_cljs$core$async65069(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__65072_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65072_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__65073_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65073_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__58161__auto__ = wport;
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
return port;
}
})()], null));
} else {
var G__65074 = (i + (1));
i = G__65074;
continue;
}
} else {
return null;
}
break;
}
})();
var or__58161__auto__ = ret;
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__58149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__58149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__58149__auto__;
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
var args__59445__auto__ = [];
var len__59438__auto___65080 = arguments.length;
var i__59439__auto___65081 = (0);
while(true){
if((i__59439__auto___65081 < len__59438__auto___65080)){
args__59445__auto__.push((arguments[i__59439__auto___65081]));

var G__65082 = (i__59439__auto___65081 + (1));
i__59439__auto___65081 = G__65082;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((1) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59446__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__65077){
var map__65078 = p__65077;
var map__65078__$1 = ((((!((map__65078 == null)))?((((map__65078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65078):map__65078);
var opts = map__65078__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq65075){
var G__65076 = cljs.core.first.call(null,seq65075);
var seq65075__$1 = cljs.core.next.call(null,seq65075);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__65076,seq65075__$1);
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
var G__65084 = arguments.length;
switch (G__65084) {
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
var c__64983__auto___65130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___65130){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___65130){
return (function (state_65108){
var state_val_65109 = (state_65108[(1)]);
if((state_val_65109 === (7))){
var inst_65104 = (state_65108[(2)]);
var state_65108__$1 = state_65108;
var statearr_65110_65131 = state_65108__$1;
(statearr_65110_65131[(2)] = inst_65104);

(statearr_65110_65131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (1))){
var state_65108__$1 = state_65108;
var statearr_65111_65132 = state_65108__$1;
(statearr_65111_65132[(2)] = null);

(statearr_65111_65132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (4))){
var inst_65087 = (state_65108[(7)]);
var inst_65087__$1 = (state_65108[(2)]);
var inst_65088 = (inst_65087__$1 == null);
var state_65108__$1 = (function (){var statearr_65112 = state_65108;
(statearr_65112[(7)] = inst_65087__$1);

return statearr_65112;
})();
if(cljs.core.truth_(inst_65088)){
var statearr_65113_65133 = state_65108__$1;
(statearr_65113_65133[(1)] = (5));

} else {
var statearr_65114_65134 = state_65108__$1;
(statearr_65114_65134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (13))){
var state_65108__$1 = state_65108;
var statearr_65115_65135 = state_65108__$1;
(statearr_65115_65135[(2)] = null);

(statearr_65115_65135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (6))){
var inst_65087 = (state_65108[(7)]);
var state_65108__$1 = state_65108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65108__$1,(11),to,inst_65087);
} else {
if((state_val_65109 === (3))){
var inst_65106 = (state_65108[(2)]);
var state_65108__$1 = state_65108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65108__$1,inst_65106);
} else {
if((state_val_65109 === (12))){
var state_65108__$1 = state_65108;
var statearr_65116_65136 = state_65108__$1;
(statearr_65116_65136[(2)] = null);

(statearr_65116_65136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (2))){
var state_65108__$1 = state_65108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65108__$1,(4),from);
} else {
if((state_val_65109 === (11))){
var inst_65097 = (state_65108[(2)]);
var state_65108__$1 = state_65108;
if(cljs.core.truth_(inst_65097)){
var statearr_65117_65137 = state_65108__$1;
(statearr_65117_65137[(1)] = (12));

} else {
var statearr_65118_65138 = state_65108__$1;
(statearr_65118_65138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (9))){
var state_65108__$1 = state_65108;
var statearr_65119_65139 = state_65108__$1;
(statearr_65119_65139[(2)] = null);

(statearr_65119_65139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (5))){
var state_65108__$1 = state_65108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65120_65140 = state_65108__$1;
(statearr_65120_65140[(1)] = (8));

} else {
var statearr_65121_65141 = state_65108__$1;
(statearr_65121_65141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (14))){
var inst_65102 = (state_65108[(2)]);
var state_65108__$1 = state_65108;
var statearr_65122_65142 = state_65108__$1;
(statearr_65122_65142[(2)] = inst_65102);

(statearr_65122_65142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (10))){
var inst_65094 = (state_65108[(2)]);
var state_65108__$1 = state_65108;
var statearr_65123_65143 = state_65108__$1;
(statearr_65123_65143[(2)] = inst_65094);

(statearr_65123_65143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65109 === (8))){
var inst_65091 = cljs.core.async.close_BANG_.call(null,to);
var state_65108__$1 = state_65108;
var statearr_65124_65144 = state_65108__$1;
(statearr_65124_65144[(2)] = inst_65091);

(statearr_65124_65144[(1)] = (10));


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
});})(c__64983__auto___65130))
;
return ((function (switch__64893__auto__,c__64983__auto___65130){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_65125 = [null,null,null,null,null,null,null,null];
(statearr_65125[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_65125[(1)] = (1));

return statearr_65125;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_65108){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65126){if((e65126 instanceof Object)){
var ex__64897__auto__ = e65126;
var statearr_65127_65145 = state_65108;
(statearr_65127_65145[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65146 = state_65108;
state_65108 = G__65146;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_65108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_65108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___65130))
})();
var state__64985__auto__ = (function (){var statearr_65128 = f__64984__auto__.call(null);
(statearr_65128[(6)] = c__64983__auto___65130);

return statearr_65128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___65130))
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
return (function (p__65147){
var vec__65148 = p__65147;
var v = cljs.core.nth.call(null,vec__65148,(0),null);
var p = cljs.core.nth.call(null,vec__65148,(1),null);
var job = vec__65148;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__64983__auto___65319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___65319,res,vec__65148,v,p,job,jobs,results){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___65319,res,vec__65148,v,p,job,jobs,results){
return (function (state_65155){
var state_val_65156 = (state_65155[(1)]);
if((state_val_65156 === (1))){
var state_65155__$1 = state_65155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65155__$1,(2),res,v);
} else {
if((state_val_65156 === (2))){
var inst_65152 = (state_65155[(2)]);
var inst_65153 = cljs.core.async.close_BANG_.call(null,res);
var state_65155__$1 = (function (){var statearr_65157 = state_65155;
(statearr_65157[(7)] = inst_65152);

return statearr_65157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65155__$1,inst_65153);
} else {
return null;
}
}
});})(c__64983__auto___65319,res,vec__65148,v,p,job,jobs,results))
;
return ((function (switch__64893__auto__,c__64983__auto___65319,res,vec__65148,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0 = (function (){
var statearr_65158 = [null,null,null,null,null,null,null,null];
(statearr_65158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__);

(statearr_65158[(1)] = (1));

return statearr_65158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1 = (function (state_65155){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65159){if((e65159 instanceof Object)){
var ex__64897__auto__ = e65159;
var statearr_65160_65320 = state_65155;
(statearr_65160_65320[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65321 = state_65155;
state_65155 = G__65321;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = function(state_65155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1.call(this,state_65155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___65319,res,vec__65148,v,p,job,jobs,results))
})();
var state__64985__auto__ = (function (){var statearr_65161 = f__64984__auto__.call(null);
(statearr_65161[(6)] = c__64983__auto___65319);

return statearr_65161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___65319,res,vec__65148,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__65162){
var vec__65163 = p__65162;
var v = cljs.core.nth.call(null,vec__65163,(0),null);
var p = cljs.core.nth.call(null,vec__65163,(1),null);
var job = vec__65163;
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
var n__59204__auto___65322 = n;
var __65323 = (0);
while(true){
if((__65323 < n__59204__auto___65322)){
var G__65166_65324 = type;
var G__65166_65325__$1 = (((G__65166_65324 instanceof cljs.core.Keyword))?G__65166_65324.fqn:null);
switch (G__65166_65325__$1) {
case "compute":
var c__64983__auto___65327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__65323,c__64983__auto___65327,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (__65323,c__64983__auto___65327,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async){
return (function (state_65179){
var state_val_65180 = (state_65179[(1)]);
if((state_val_65180 === (1))){
var state_65179__$1 = state_65179;
var statearr_65181_65328 = state_65179__$1;
(statearr_65181_65328[(2)] = null);

(statearr_65181_65328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65180 === (2))){
var state_65179__$1 = state_65179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65179__$1,(4),jobs);
} else {
if((state_val_65180 === (3))){
var inst_65177 = (state_65179[(2)]);
var state_65179__$1 = state_65179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65179__$1,inst_65177);
} else {
if((state_val_65180 === (4))){
var inst_65169 = (state_65179[(2)]);
var inst_65170 = process.call(null,inst_65169);
var state_65179__$1 = state_65179;
if(cljs.core.truth_(inst_65170)){
var statearr_65182_65329 = state_65179__$1;
(statearr_65182_65329[(1)] = (5));

} else {
var statearr_65183_65330 = state_65179__$1;
(statearr_65183_65330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65180 === (5))){
var state_65179__$1 = state_65179;
var statearr_65184_65331 = state_65179__$1;
(statearr_65184_65331[(2)] = null);

(statearr_65184_65331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65180 === (6))){
var state_65179__$1 = state_65179;
var statearr_65185_65332 = state_65179__$1;
(statearr_65185_65332[(2)] = null);

(statearr_65185_65332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65180 === (7))){
var inst_65175 = (state_65179[(2)]);
var state_65179__$1 = state_65179;
var statearr_65186_65333 = state_65179__$1;
(statearr_65186_65333[(2)] = inst_65175);

(statearr_65186_65333[(1)] = (3));


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
});})(__65323,c__64983__auto___65327,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async))
;
return ((function (__65323,switch__64893__auto__,c__64983__auto___65327,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0 = (function (){
var statearr_65187 = [null,null,null,null,null,null,null];
(statearr_65187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__);

(statearr_65187[(1)] = (1));

return statearr_65187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1 = (function (state_65179){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65188){if((e65188 instanceof Object)){
var ex__64897__auto__ = e65188;
var statearr_65189_65334 = state_65179;
(statearr_65189_65334[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65335 = state_65179;
state_65179 = G__65335;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = function(state_65179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1.call(this,state_65179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__;
})()
;})(__65323,switch__64893__auto__,c__64983__auto___65327,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async))
})();
var state__64985__auto__ = (function (){var statearr_65190 = f__64984__auto__.call(null);
(statearr_65190[(6)] = c__64983__auto___65327);

return statearr_65190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(__65323,c__64983__auto___65327,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async))
);


break;
case "async":
var c__64983__auto___65336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__65323,c__64983__auto___65336,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (__65323,c__64983__auto___65336,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async){
return (function (state_65203){
var state_val_65204 = (state_65203[(1)]);
if((state_val_65204 === (1))){
var state_65203__$1 = state_65203;
var statearr_65205_65337 = state_65203__$1;
(statearr_65205_65337[(2)] = null);

(statearr_65205_65337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65204 === (2))){
var state_65203__$1 = state_65203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65203__$1,(4),jobs);
} else {
if((state_val_65204 === (3))){
var inst_65201 = (state_65203[(2)]);
var state_65203__$1 = state_65203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65203__$1,inst_65201);
} else {
if((state_val_65204 === (4))){
var inst_65193 = (state_65203[(2)]);
var inst_65194 = async.call(null,inst_65193);
var state_65203__$1 = state_65203;
if(cljs.core.truth_(inst_65194)){
var statearr_65206_65338 = state_65203__$1;
(statearr_65206_65338[(1)] = (5));

} else {
var statearr_65207_65339 = state_65203__$1;
(statearr_65207_65339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65204 === (5))){
var state_65203__$1 = state_65203;
var statearr_65208_65340 = state_65203__$1;
(statearr_65208_65340[(2)] = null);

(statearr_65208_65340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65204 === (6))){
var state_65203__$1 = state_65203;
var statearr_65209_65341 = state_65203__$1;
(statearr_65209_65341[(2)] = null);

(statearr_65209_65341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65204 === (7))){
var inst_65199 = (state_65203[(2)]);
var state_65203__$1 = state_65203;
var statearr_65210_65342 = state_65203__$1;
(statearr_65210_65342[(2)] = inst_65199);

(statearr_65210_65342[(1)] = (3));


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
});})(__65323,c__64983__auto___65336,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async))
;
return ((function (__65323,switch__64893__auto__,c__64983__auto___65336,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0 = (function (){
var statearr_65211 = [null,null,null,null,null,null,null];
(statearr_65211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__);

(statearr_65211[(1)] = (1));

return statearr_65211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1 = (function (state_65203){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65212){if((e65212 instanceof Object)){
var ex__64897__auto__ = e65212;
var statearr_65213_65343 = state_65203;
(statearr_65213_65343[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65344 = state_65203;
state_65203 = G__65344;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = function(state_65203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1.call(this,state_65203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__;
})()
;})(__65323,switch__64893__auto__,c__64983__auto___65336,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async))
})();
var state__64985__auto__ = (function (){var statearr_65214 = f__64984__auto__.call(null);
(statearr_65214[(6)] = c__64983__auto___65336);

return statearr_65214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(__65323,c__64983__auto___65336,G__65166_65324,G__65166_65325__$1,n__59204__auto___65322,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65166_65325__$1)].join('')));

}

var G__65345 = (__65323 + (1));
__65323 = G__65345;
continue;
} else {
}
break;
}

var c__64983__auto___65346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___65346,jobs,results,process,async){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___65346,jobs,results,process,async){
return (function (state_65236){
var state_val_65237 = (state_65236[(1)]);
if((state_val_65237 === (1))){
var state_65236__$1 = state_65236;
var statearr_65238_65347 = state_65236__$1;
(statearr_65238_65347[(2)] = null);

(statearr_65238_65347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65237 === (2))){
var state_65236__$1 = state_65236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65236__$1,(4),from);
} else {
if((state_val_65237 === (3))){
var inst_65234 = (state_65236[(2)]);
var state_65236__$1 = state_65236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65236__$1,inst_65234);
} else {
if((state_val_65237 === (4))){
var inst_65217 = (state_65236[(7)]);
var inst_65217__$1 = (state_65236[(2)]);
var inst_65218 = (inst_65217__$1 == null);
var state_65236__$1 = (function (){var statearr_65239 = state_65236;
(statearr_65239[(7)] = inst_65217__$1);

return statearr_65239;
})();
if(cljs.core.truth_(inst_65218)){
var statearr_65240_65348 = state_65236__$1;
(statearr_65240_65348[(1)] = (5));

} else {
var statearr_65241_65349 = state_65236__$1;
(statearr_65241_65349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65237 === (5))){
var inst_65220 = cljs.core.async.close_BANG_.call(null,jobs);
var state_65236__$1 = state_65236;
var statearr_65242_65350 = state_65236__$1;
(statearr_65242_65350[(2)] = inst_65220);

(statearr_65242_65350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65237 === (6))){
var inst_65217 = (state_65236[(7)]);
var inst_65222 = (state_65236[(8)]);
var inst_65222__$1 = cljs.core.async.chan.call(null,(1));
var inst_65223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65224 = [inst_65217,inst_65222__$1];
var inst_65225 = (new cljs.core.PersistentVector(null,2,(5),inst_65223,inst_65224,null));
var state_65236__$1 = (function (){var statearr_65243 = state_65236;
(statearr_65243[(8)] = inst_65222__$1);

return statearr_65243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65236__$1,(8),jobs,inst_65225);
} else {
if((state_val_65237 === (7))){
var inst_65232 = (state_65236[(2)]);
var state_65236__$1 = state_65236;
var statearr_65244_65351 = state_65236__$1;
(statearr_65244_65351[(2)] = inst_65232);

(statearr_65244_65351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65237 === (8))){
var inst_65222 = (state_65236[(8)]);
var inst_65227 = (state_65236[(2)]);
var state_65236__$1 = (function (){var statearr_65245 = state_65236;
(statearr_65245[(9)] = inst_65227);

return statearr_65245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65236__$1,(9),results,inst_65222);
} else {
if((state_val_65237 === (9))){
var inst_65229 = (state_65236[(2)]);
var state_65236__$1 = (function (){var statearr_65246 = state_65236;
(statearr_65246[(10)] = inst_65229);

return statearr_65246;
})();
var statearr_65247_65352 = state_65236__$1;
(statearr_65247_65352[(2)] = null);

(statearr_65247_65352[(1)] = (2));


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
});})(c__64983__auto___65346,jobs,results,process,async))
;
return ((function (switch__64893__auto__,c__64983__auto___65346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0 = (function (){
var statearr_65248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__);

(statearr_65248[(1)] = (1));

return statearr_65248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1 = (function (state_65236){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65249){if((e65249 instanceof Object)){
var ex__64897__auto__ = e65249;
var statearr_65250_65353 = state_65236;
(statearr_65250_65353[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65354 = state_65236;
state_65236 = G__65354;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = function(state_65236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1.call(this,state_65236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___65346,jobs,results,process,async))
})();
var state__64985__auto__ = (function (){var statearr_65251 = f__64984__auto__.call(null);
(statearr_65251[(6)] = c__64983__auto___65346);

return statearr_65251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___65346,jobs,results,process,async))
);


var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__,jobs,results,process,async){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__,jobs,results,process,async){
return (function (state_65289){
var state_val_65290 = (state_65289[(1)]);
if((state_val_65290 === (7))){
var inst_65285 = (state_65289[(2)]);
var state_65289__$1 = state_65289;
var statearr_65291_65355 = state_65289__$1;
(statearr_65291_65355[(2)] = inst_65285);

(statearr_65291_65355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (20))){
var state_65289__$1 = state_65289;
var statearr_65292_65356 = state_65289__$1;
(statearr_65292_65356[(2)] = null);

(statearr_65292_65356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (1))){
var state_65289__$1 = state_65289;
var statearr_65293_65357 = state_65289__$1;
(statearr_65293_65357[(2)] = null);

(statearr_65293_65357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (4))){
var inst_65254 = (state_65289[(7)]);
var inst_65254__$1 = (state_65289[(2)]);
var inst_65255 = (inst_65254__$1 == null);
var state_65289__$1 = (function (){var statearr_65294 = state_65289;
(statearr_65294[(7)] = inst_65254__$1);

return statearr_65294;
})();
if(cljs.core.truth_(inst_65255)){
var statearr_65295_65358 = state_65289__$1;
(statearr_65295_65358[(1)] = (5));

} else {
var statearr_65296_65359 = state_65289__$1;
(statearr_65296_65359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (15))){
var inst_65267 = (state_65289[(8)]);
var state_65289__$1 = state_65289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65289__$1,(18),to,inst_65267);
} else {
if((state_val_65290 === (21))){
var inst_65280 = (state_65289[(2)]);
var state_65289__$1 = state_65289;
var statearr_65297_65360 = state_65289__$1;
(statearr_65297_65360[(2)] = inst_65280);

(statearr_65297_65360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (13))){
var inst_65282 = (state_65289[(2)]);
var state_65289__$1 = (function (){var statearr_65298 = state_65289;
(statearr_65298[(9)] = inst_65282);

return statearr_65298;
})();
var statearr_65299_65361 = state_65289__$1;
(statearr_65299_65361[(2)] = null);

(statearr_65299_65361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (6))){
var inst_65254 = (state_65289[(7)]);
var state_65289__$1 = state_65289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65289__$1,(11),inst_65254);
} else {
if((state_val_65290 === (17))){
var inst_65275 = (state_65289[(2)]);
var state_65289__$1 = state_65289;
if(cljs.core.truth_(inst_65275)){
var statearr_65300_65362 = state_65289__$1;
(statearr_65300_65362[(1)] = (19));

} else {
var statearr_65301_65363 = state_65289__$1;
(statearr_65301_65363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (3))){
var inst_65287 = (state_65289[(2)]);
var state_65289__$1 = state_65289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65289__$1,inst_65287);
} else {
if((state_val_65290 === (12))){
var inst_65264 = (state_65289[(10)]);
var state_65289__$1 = state_65289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65289__$1,(14),inst_65264);
} else {
if((state_val_65290 === (2))){
var state_65289__$1 = state_65289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65289__$1,(4),results);
} else {
if((state_val_65290 === (19))){
var state_65289__$1 = state_65289;
var statearr_65302_65364 = state_65289__$1;
(statearr_65302_65364[(2)] = null);

(statearr_65302_65364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (11))){
var inst_65264 = (state_65289[(2)]);
var state_65289__$1 = (function (){var statearr_65303 = state_65289;
(statearr_65303[(10)] = inst_65264);

return statearr_65303;
})();
var statearr_65304_65365 = state_65289__$1;
(statearr_65304_65365[(2)] = null);

(statearr_65304_65365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (9))){
var state_65289__$1 = state_65289;
var statearr_65305_65366 = state_65289__$1;
(statearr_65305_65366[(2)] = null);

(statearr_65305_65366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (5))){
var state_65289__$1 = state_65289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65306_65367 = state_65289__$1;
(statearr_65306_65367[(1)] = (8));

} else {
var statearr_65307_65368 = state_65289__$1;
(statearr_65307_65368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (14))){
var inst_65267 = (state_65289[(8)]);
var inst_65269 = (state_65289[(11)]);
var inst_65267__$1 = (state_65289[(2)]);
var inst_65268 = (inst_65267__$1 == null);
var inst_65269__$1 = cljs.core.not.call(null,inst_65268);
var state_65289__$1 = (function (){var statearr_65308 = state_65289;
(statearr_65308[(8)] = inst_65267__$1);

(statearr_65308[(11)] = inst_65269__$1);

return statearr_65308;
})();
if(inst_65269__$1){
var statearr_65309_65369 = state_65289__$1;
(statearr_65309_65369[(1)] = (15));

} else {
var statearr_65310_65370 = state_65289__$1;
(statearr_65310_65370[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (16))){
var inst_65269 = (state_65289[(11)]);
var state_65289__$1 = state_65289;
var statearr_65311_65371 = state_65289__$1;
(statearr_65311_65371[(2)] = inst_65269);

(statearr_65311_65371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (10))){
var inst_65261 = (state_65289[(2)]);
var state_65289__$1 = state_65289;
var statearr_65312_65372 = state_65289__$1;
(statearr_65312_65372[(2)] = inst_65261);

(statearr_65312_65372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (18))){
var inst_65272 = (state_65289[(2)]);
var state_65289__$1 = state_65289;
var statearr_65313_65373 = state_65289__$1;
(statearr_65313_65373[(2)] = inst_65272);

(statearr_65313_65373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65290 === (8))){
var inst_65258 = cljs.core.async.close_BANG_.call(null,to);
var state_65289__$1 = state_65289;
var statearr_65314_65374 = state_65289__$1;
(statearr_65314_65374[(2)] = inst_65258);

(statearr_65314_65374[(1)] = (10));


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
});})(c__64983__auto__,jobs,results,process,async))
;
return ((function (switch__64893__auto__,c__64983__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0 = (function (){
var statearr_65315 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__);

(statearr_65315[(1)] = (1));

return statearr_65315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1 = (function (state_65289){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65316){if((e65316 instanceof Object)){
var ex__64897__auto__ = e65316;
var statearr_65317_65375 = state_65289;
(statearr_65317_65375[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65376 = state_65289;
state_65289 = G__65376;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__ = function(state_65289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1.call(this,state_65289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__,jobs,results,process,async))
})();
var state__64985__auto__ = (function (){var statearr_65318 = f__64984__auto__.call(null);
(statearr_65318[(6)] = c__64983__auto__);

return statearr_65318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__,jobs,results,process,async))
);

return c__64983__auto__;
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
var G__65378 = arguments.length;
switch (G__65378) {
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
var G__65381 = arguments.length;
switch (G__65381) {
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
var G__65384 = arguments.length;
switch (G__65384) {
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
var c__64983__auto___65433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___65433,tc,fc){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___65433,tc,fc){
return (function (state_65410){
var state_val_65411 = (state_65410[(1)]);
if((state_val_65411 === (7))){
var inst_65406 = (state_65410[(2)]);
var state_65410__$1 = state_65410;
var statearr_65412_65434 = state_65410__$1;
(statearr_65412_65434[(2)] = inst_65406);

(statearr_65412_65434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (1))){
var state_65410__$1 = state_65410;
var statearr_65413_65435 = state_65410__$1;
(statearr_65413_65435[(2)] = null);

(statearr_65413_65435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (4))){
var inst_65387 = (state_65410[(7)]);
var inst_65387__$1 = (state_65410[(2)]);
var inst_65388 = (inst_65387__$1 == null);
var state_65410__$1 = (function (){var statearr_65414 = state_65410;
(statearr_65414[(7)] = inst_65387__$1);

return statearr_65414;
})();
if(cljs.core.truth_(inst_65388)){
var statearr_65415_65436 = state_65410__$1;
(statearr_65415_65436[(1)] = (5));

} else {
var statearr_65416_65437 = state_65410__$1;
(statearr_65416_65437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (13))){
var state_65410__$1 = state_65410;
var statearr_65417_65438 = state_65410__$1;
(statearr_65417_65438[(2)] = null);

(statearr_65417_65438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (6))){
var inst_65387 = (state_65410[(7)]);
var inst_65393 = p.call(null,inst_65387);
var state_65410__$1 = state_65410;
if(cljs.core.truth_(inst_65393)){
var statearr_65418_65439 = state_65410__$1;
(statearr_65418_65439[(1)] = (9));

} else {
var statearr_65419_65440 = state_65410__$1;
(statearr_65419_65440[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (3))){
var inst_65408 = (state_65410[(2)]);
var state_65410__$1 = state_65410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65410__$1,inst_65408);
} else {
if((state_val_65411 === (12))){
var state_65410__$1 = state_65410;
var statearr_65420_65441 = state_65410__$1;
(statearr_65420_65441[(2)] = null);

(statearr_65420_65441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (2))){
var state_65410__$1 = state_65410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65410__$1,(4),ch);
} else {
if((state_val_65411 === (11))){
var inst_65387 = (state_65410[(7)]);
var inst_65397 = (state_65410[(2)]);
var state_65410__$1 = state_65410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65410__$1,(8),inst_65397,inst_65387);
} else {
if((state_val_65411 === (9))){
var state_65410__$1 = state_65410;
var statearr_65421_65442 = state_65410__$1;
(statearr_65421_65442[(2)] = tc);

(statearr_65421_65442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (5))){
var inst_65390 = cljs.core.async.close_BANG_.call(null,tc);
var inst_65391 = cljs.core.async.close_BANG_.call(null,fc);
var state_65410__$1 = (function (){var statearr_65422 = state_65410;
(statearr_65422[(8)] = inst_65390);

return statearr_65422;
})();
var statearr_65423_65443 = state_65410__$1;
(statearr_65423_65443[(2)] = inst_65391);

(statearr_65423_65443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (14))){
var inst_65404 = (state_65410[(2)]);
var state_65410__$1 = state_65410;
var statearr_65424_65444 = state_65410__$1;
(statearr_65424_65444[(2)] = inst_65404);

(statearr_65424_65444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (10))){
var state_65410__$1 = state_65410;
var statearr_65425_65445 = state_65410__$1;
(statearr_65425_65445[(2)] = fc);

(statearr_65425_65445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65411 === (8))){
var inst_65399 = (state_65410[(2)]);
var state_65410__$1 = state_65410;
if(cljs.core.truth_(inst_65399)){
var statearr_65426_65446 = state_65410__$1;
(statearr_65426_65446[(1)] = (12));

} else {
var statearr_65427_65447 = state_65410__$1;
(statearr_65427_65447[(1)] = (13));

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
});})(c__64983__auto___65433,tc,fc))
;
return ((function (switch__64893__auto__,c__64983__auto___65433,tc,fc){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_65428 = [null,null,null,null,null,null,null,null,null];
(statearr_65428[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_65428[(1)] = (1));

return statearr_65428;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_65410){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65429){if((e65429 instanceof Object)){
var ex__64897__auto__ = e65429;
var statearr_65430_65448 = state_65410;
(statearr_65430_65448[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65449 = state_65410;
state_65410 = G__65449;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_65410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_65410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___65433,tc,fc))
})();
var state__64985__auto__ = (function (){var statearr_65431 = f__64984__auto__.call(null);
(statearr_65431[(6)] = c__64983__auto___65433);

return statearr_65431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___65433,tc,fc))
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
var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__){
return (function (state_65470){
var state_val_65471 = (state_65470[(1)]);
if((state_val_65471 === (7))){
var inst_65466 = (state_65470[(2)]);
var state_65470__$1 = state_65470;
var statearr_65472_65490 = state_65470__$1;
(statearr_65472_65490[(2)] = inst_65466);

(statearr_65472_65490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65471 === (1))){
var inst_65450 = init;
var state_65470__$1 = (function (){var statearr_65473 = state_65470;
(statearr_65473[(7)] = inst_65450);

return statearr_65473;
})();
var statearr_65474_65491 = state_65470__$1;
(statearr_65474_65491[(2)] = null);

(statearr_65474_65491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65471 === (4))){
var inst_65453 = (state_65470[(8)]);
var inst_65453__$1 = (state_65470[(2)]);
var inst_65454 = (inst_65453__$1 == null);
var state_65470__$1 = (function (){var statearr_65475 = state_65470;
(statearr_65475[(8)] = inst_65453__$1);

return statearr_65475;
})();
if(cljs.core.truth_(inst_65454)){
var statearr_65476_65492 = state_65470__$1;
(statearr_65476_65492[(1)] = (5));

} else {
var statearr_65477_65493 = state_65470__$1;
(statearr_65477_65493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65471 === (6))){
var inst_65450 = (state_65470[(7)]);
var inst_65457 = (state_65470[(9)]);
var inst_65453 = (state_65470[(8)]);
var inst_65457__$1 = f.call(null,inst_65450,inst_65453);
var inst_65458 = cljs.core.reduced_QMARK_.call(null,inst_65457__$1);
var state_65470__$1 = (function (){var statearr_65478 = state_65470;
(statearr_65478[(9)] = inst_65457__$1);

return statearr_65478;
})();
if(inst_65458){
var statearr_65479_65494 = state_65470__$1;
(statearr_65479_65494[(1)] = (8));

} else {
var statearr_65480_65495 = state_65470__$1;
(statearr_65480_65495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65471 === (3))){
var inst_65468 = (state_65470[(2)]);
var state_65470__$1 = state_65470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65470__$1,inst_65468);
} else {
if((state_val_65471 === (2))){
var state_65470__$1 = state_65470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65470__$1,(4),ch);
} else {
if((state_val_65471 === (9))){
var inst_65457 = (state_65470[(9)]);
var inst_65450 = inst_65457;
var state_65470__$1 = (function (){var statearr_65481 = state_65470;
(statearr_65481[(7)] = inst_65450);

return statearr_65481;
})();
var statearr_65482_65496 = state_65470__$1;
(statearr_65482_65496[(2)] = null);

(statearr_65482_65496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65471 === (5))){
var inst_65450 = (state_65470[(7)]);
var state_65470__$1 = state_65470;
var statearr_65483_65497 = state_65470__$1;
(statearr_65483_65497[(2)] = inst_65450);

(statearr_65483_65497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65471 === (10))){
var inst_65464 = (state_65470[(2)]);
var state_65470__$1 = state_65470;
var statearr_65484_65498 = state_65470__$1;
(statearr_65484_65498[(2)] = inst_65464);

(statearr_65484_65498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65471 === (8))){
var inst_65457 = (state_65470[(9)]);
var inst_65460 = cljs.core.deref.call(null,inst_65457);
var state_65470__$1 = state_65470;
var statearr_65485_65499 = state_65470__$1;
(statearr_65485_65499[(2)] = inst_65460);

(statearr_65485_65499[(1)] = (10));


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
});})(c__64983__auto__))
;
return ((function (switch__64893__auto__,c__64983__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__64894__auto__ = null;
var cljs$core$async$reduce_$_state_machine__64894__auto____0 = (function (){
var statearr_65486 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65486[(0)] = cljs$core$async$reduce_$_state_machine__64894__auto__);

(statearr_65486[(1)] = (1));

return statearr_65486;
});
var cljs$core$async$reduce_$_state_machine__64894__auto____1 = (function (state_65470){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65487){if((e65487 instanceof Object)){
var ex__64897__auto__ = e65487;
var statearr_65488_65500 = state_65470;
(statearr_65488_65500[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65501 = state_65470;
state_65470 = G__65501;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__64894__auto__ = function(state_65470){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__64894__auto____1.call(this,state_65470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__64894__auto____0;
cljs$core$async$reduce_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__64894__auto____1;
return cljs$core$async$reduce_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__))
})();
var state__64985__auto__ = (function (){var statearr_65489 = f__64984__auto__.call(null);
(statearr_65489[(6)] = c__64983__auto__);

return statearr_65489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__))
);

return c__64983__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__,f__$1){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__,f__$1){
return (function (state_65507){
var state_val_65508 = (state_65507[(1)]);
if((state_val_65508 === (1))){
var inst_65502 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_65507__$1 = state_65507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65507__$1,(2),inst_65502);
} else {
if((state_val_65508 === (2))){
var inst_65504 = (state_65507[(2)]);
var inst_65505 = f__$1.call(null,inst_65504);
var state_65507__$1 = state_65507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65507__$1,inst_65505);
} else {
return null;
}
}
});})(c__64983__auto__,f__$1))
;
return ((function (switch__64893__auto__,c__64983__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__64894__auto__ = null;
var cljs$core$async$transduce_$_state_machine__64894__auto____0 = (function (){
var statearr_65509 = [null,null,null,null,null,null,null];
(statearr_65509[(0)] = cljs$core$async$transduce_$_state_machine__64894__auto__);

(statearr_65509[(1)] = (1));

return statearr_65509;
});
var cljs$core$async$transduce_$_state_machine__64894__auto____1 = (function (state_65507){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65510){if((e65510 instanceof Object)){
var ex__64897__auto__ = e65510;
var statearr_65511_65513 = state_65507;
(statearr_65511_65513[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65514 = state_65507;
state_65507 = G__65514;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__64894__auto__ = function(state_65507){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__64894__auto____1.call(this,state_65507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__64894__auto____0;
cljs$core$async$transduce_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__64894__auto____1;
return cljs$core$async$transduce_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__,f__$1))
})();
var state__64985__auto__ = (function (){var statearr_65512 = f__64984__auto__.call(null);
(statearr_65512[(6)] = c__64983__auto__);

return statearr_65512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__,f__$1))
);

return c__64983__auto__;
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
var G__65516 = arguments.length;
switch (G__65516) {
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
var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__){
return (function (state_65541){
var state_val_65542 = (state_65541[(1)]);
if((state_val_65542 === (7))){
var inst_65523 = (state_65541[(2)]);
var state_65541__$1 = state_65541;
var statearr_65543_65564 = state_65541__$1;
(statearr_65543_65564[(2)] = inst_65523);

(statearr_65543_65564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (1))){
var inst_65517 = cljs.core.seq.call(null,coll);
var inst_65518 = inst_65517;
var state_65541__$1 = (function (){var statearr_65544 = state_65541;
(statearr_65544[(7)] = inst_65518);

return statearr_65544;
})();
var statearr_65545_65565 = state_65541__$1;
(statearr_65545_65565[(2)] = null);

(statearr_65545_65565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (4))){
var inst_65518 = (state_65541[(7)]);
var inst_65521 = cljs.core.first.call(null,inst_65518);
var state_65541__$1 = state_65541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65541__$1,(7),ch,inst_65521);
} else {
if((state_val_65542 === (13))){
var inst_65535 = (state_65541[(2)]);
var state_65541__$1 = state_65541;
var statearr_65546_65566 = state_65541__$1;
(statearr_65546_65566[(2)] = inst_65535);

(statearr_65546_65566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (6))){
var inst_65526 = (state_65541[(2)]);
var state_65541__$1 = state_65541;
if(cljs.core.truth_(inst_65526)){
var statearr_65547_65567 = state_65541__$1;
(statearr_65547_65567[(1)] = (8));

} else {
var statearr_65548_65568 = state_65541__$1;
(statearr_65548_65568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (3))){
var inst_65539 = (state_65541[(2)]);
var state_65541__$1 = state_65541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65541__$1,inst_65539);
} else {
if((state_val_65542 === (12))){
var state_65541__$1 = state_65541;
var statearr_65549_65569 = state_65541__$1;
(statearr_65549_65569[(2)] = null);

(statearr_65549_65569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (2))){
var inst_65518 = (state_65541[(7)]);
var state_65541__$1 = state_65541;
if(cljs.core.truth_(inst_65518)){
var statearr_65550_65570 = state_65541__$1;
(statearr_65550_65570[(1)] = (4));

} else {
var statearr_65551_65571 = state_65541__$1;
(statearr_65551_65571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (11))){
var inst_65532 = cljs.core.async.close_BANG_.call(null,ch);
var state_65541__$1 = state_65541;
var statearr_65552_65572 = state_65541__$1;
(statearr_65552_65572[(2)] = inst_65532);

(statearr_65552_65572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (9))){
var state_65541__$1 = state_65541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65553_65573 = state_65541__$1;
(statearr_65553_65573[(1)] = (11));

} else {
var statearr_65554_65574 = state_65541__$1;
(statearr_65554_65574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (5))){
var inst_65518 = (state_65541[(7)]);
var state_65541__$1 = state_65541;
var statearr_65555_65575 = state_65541__$1;
(statearr_65555_65575[(2)] = inst_65518);

(statearr_65555_65575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (10))){
var inst_65537 = (state_65541[(2)]);
var state_65541__$1 = state_65541;
var statearr_65556_65576 = state_65541__$1;
(statearr_65556_65576[(2)] = inst_65537);

(statearr_65556_65576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65542 === (8))){
var inst_65518 = (state_65541[(7)]);
var inst_65528 = cljs.core.next.call(null,inst_65518);
var inst_65518__$1 = inst_65528;
var state_65541__$1 = (function (){var statearr_65557 = state_65541;
(statearr_65557[(7)] = inst_65518__$1);

return statearr_65557;
})();
var statearr_65558_65577 = state_65541__$1;
(statearr_65558_65577[(2)] = null);

(statearr_65558_65577[(1)] = (2));


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
});})(c__64983__auto__))
;
return ((function (switch__64893__auto__,c__64983__auto__){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_65559 = [null,null,null,null,null,null,null,null];
(statearr_65559[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_65559[(1)] = (1));

return statearr_65559;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_65541){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65560){if((e65560 instanceof Object)){
var ex__64897__auto__ = e65560;
var statearr_65561_65578 = state_65541;
(statearr_65561_65578[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65579 = state_65541;
state_65541 = G__65579;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_65541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_65541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__))
})();
var state__64985__auto__ = (function (){var statearr_65562 = f__64984__auto__.call(null);
(statearr_65562[(6)] = c__64983__auto__);

return statearr_65562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__))
);

return c__64983__auto__;
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
var x__58894__auto__ = (((_ == null))?null:_);
var m__58895__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,_);
} else {
var m__58895__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,_);
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
var x__58894__auto__ = (((m == null))?null:m);
var m__58895__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__58895__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__58894__auto__ = (((m == null))?null:m);
var m__58895__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,m,ch);
} else {
var m__58895__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,m,ch);
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
var x__58894__auto__ = (((m == null))?null:m);
var m__58895__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,m);
} else {
var m__58895__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async65580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65580 = (function (ch,cs,meta65581){
this.ch = ch;
this.cs = cs;
this.meta65581 = meta65581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_65582,meta65581__$1){
var self__ = this;
var _65582__$1 = this;
return (new cljs.core.async.t_cljs$core$async65580(self__.ch,self__.cs,meta65581__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async65580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_65582){
var self__ = this;
var _65582__$1 = this;
return self__.meta65581;
});})(cs))
;

cljs.core.async.t_cljs$core$async65580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async65580.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65580.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65580.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65580.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65580.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta65581","meta65581",-217757635,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async65580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65580";

cljs.core.async.t_cljs$core$async65580.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async65580");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async65580 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async65580(ch__$1,cs__$1,meta65581){
return (new cljs.core.async.t_cljs$core$async65580(ch__$1,cs__$1,meta65581));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async65580(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__64983__auto___65802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___65802,cs,m,dchan,dctr,done){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___65802,cs,m,dchan,dctr,done){
return (function (state_65717){
var state_val_65718 = (state_65717[(1)]);
if((state_val_65718 === (7))){
var inst_65713 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65719_65803 = state_65717__$1;
(statearr_65719_65803[(2)] = inst_65713);

(statearr_65719_65803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (20))){
var inst_65616 = (state_65717[(7)]);
var inst_65628 = cljs.core.first.call(null,inst_65616);
var inst_65629 = cljs.core.nth.call(null,inst_65628,(0),null);
var inst_65630 = cljs.core.nth.call(null,inst_65628,(1),null);
var state_65717__$1 = (function (){var statearr_65720 = state_65717;
(statearr_65720[(8)] = inst_65629);

return statearr_65720;
})();
if(cljs.core.truth_(inst_65630)){
var statearr_65721_65804 = state_65717__$1;
(statearr_65721_65804[(1)] = (22));

} else {
var statearr_65722_65805 = state_65717__$1;
(statearr_65722_65805[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (27))){
var inst_65660 = (state_65717[(9)]);
var inst_65665 = (state_65717[(10)]);
var inst_65585 = (state_65717[(11)]);
var inst_65658 = (state_65717[(12)]);
var inst_65665__$1 = cljs.core._nth.call(null,inst_65658,inst_65660);
var inst_65666 = cljs.core.async.put_BANG_.call(null,inst_65665__$1,inst_65585,done);
var state_65717__$1 = (function (){var statearr_65723 = state_65717;
(statearr_65723[(10)] = inst_65665__$1);

return statearr_65723;
})();
if(cljs.core.truth_(inst_65666)){
var statearr_65724_65806 = state_65717__$1;
(statearr_65724_65806[(1)] = (30));

} else {
var statearr_65725_65807 = state_65717__$1;
(statearr_65725_65807[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (1))){
var state_65717__$1 = state_65717;
var statearr_65726_65808 = state_65717__$1;
(statearr_65726_65808[(2)] = null);

(statearr_65726_65808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (24))){
var inst_65616 = (state_65717[(7)]);
var inst_65635 = (state_65717[(2)]);
var inst_65636 = cljs.core.next.call(null,inst_65616);
var inst_65594 = inst_65636;
var inst_65595 = null;
var inst_65596 = (0);
var inst_65597 = (0);
var state_65717__$1 = (function (){var statearr_65727 = state_65717;
(statearr_65727[(13)] = inst_65595);

(statearr_65727[(14)] = inst_65635);

(statearr_65727[(15)] = inst_65594);

(statearr_65727[(16)] = inst_65596);

(statearr_65727[(17)] = inst_65597);

return statearr_65727;
})();
var statearr_65728_65809 = state_65717__$1;
(statearr_65728_65809[(2)] = null);

(statearr_65728_65809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (39))){
var state_65717__$1 = state_65717;
var statearr_65732_65810 = state_65717__$1;
(statearr_65732_65810[(2)] = null);

(statearr_65732_65810[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (4))){
var inst_65585 = (state_65717[(11)]);
var inst_65585__$1 = (state_65717[(2)]);
var inst_65586 = (inst_65585__$1 == null);
var state_65717__$1 = (function (){var statearr_65733 = state_65717;
(statearr_65733[(11)] = inst_65585__$1);

return statearr_65733;
})();
if(cljs.core.truth_(inst_65586)){
var statearr_65734_65811 = state_65717__$1;
(statearr_65734_65811[(1)] = (5));

} else {
var statearr_65735_65812 = state_65717__$1;
(statearr_65735_65812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (15))){
var inst_65595 = (state_65717[(13)]);
var inst_65594 = (state_65717[(15)]);
var inst_65596 = (state_65717[(16)]);
var inst_65597 = (state_65717[(17)]);
var inst_65612 = (state_65717[(2)]);
var inst_65613 = (inst_65597 + (1));
var tmp65729 = inst_65595;
var tmp65730 = inst_65594;
var tmp65731 = inst_65596;
var inst_65594__$1 = tmp65730;
var inst_65595__$1 = tmp65729;
var inst_65596__$1 = tmp65731;
var inst_65597__$1 = inst_65613;
var state_65717__$1 = (function (){var statearr_65736 = state_65717;
(statearr_65736[(13)] = inst_65595__$1);

(statearr_65736[(18)] = inst_65612);

(statearr_65736[(15)] = inst_65594__$1);

(statearr_65736[(16)] = inst_65596__$1);

(statearr_65736[(17)] = inst_65597__$1);

return statearr_65736;
})();
var statearr_65737_65813 = state_65717__$1;
(statearr_65737_65813[(2)] = null);

(statearr_65737_65813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (21))){
var inst_65639 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65741_65814 = state_65717__$1;
(statearr_65741_65814[(2)] = inst_65639);

(statearr_65741_65814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (31))){
var inst_65665 = (state_65717[(10)]);
var inst_65669 = done.call(null,null);
var inst_65670 = cljs.core.async.untap_STAR_.call(null,m,inst_65665);
var state_65717__$1 = (function (){var statearr_65742 = state_65717;
(statearr_65742[(19)] = inst_65669);

return statearr_65742;
})();
var statearr_65743_65815 = state_65717__$1;
(statearr_65743_65815[(2)] = inst_65670);

(statearr_65743_65815[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (32))){
var inst_65660 = (state_65717[(9)]);
var inst_65657 = (state_65717[(20)]);
var inst_65659 = (state_65717[(21)]);
var inst_65658 = (state_65717[(12)]);
var inst_65672 = (state_65717[(2)]);
var inst_65673 = (inst_65660 + (1));
var tmp65738 = inst_65657;
var tmp65739 = inst_65659;
var tmp65740 = inst_65658;
var inst_65657__$1 = tmp65738;
var inst_65658__$1 = tmp65740;
var inst_65659__$1 = tmp65739;
var inst_65660__$1 = inst_65673;
var state_65717__$1 = (function (){var statearr_65744 = state_65717;
(statearr_65744[(9)] = inst_65660__$1);

(statearr_65744[(20)] = inst_65657__$1);

(statearr_65744[(21)] = inst_65659__$1);

(statearr_65744[(22)] = inst_65672);

(statearr_65744[(12)] = inst_65658__$1);

return statearr_65744;
})();
var statearr_65745_65816 = state_65717__$1;
(statearr_65745_65816[(2)] = null);

(statearr_65745_65816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (40))){
var inst_65685 = (state_65717[(23)]);
var inst_65689 = done.call(null,null);
var inst_65690 = cljs.core.async.untap_STAR_.call(null,m,inst_65685);
var state_65717__$1 = (function (){var statearr_65746 = state_65717;
(statearr_65746[(24)] = inst_65689);

return statearr_65746;
})();
var statearr_65747_65817 = state_65717__$1;
(statearr_65747_65817[(2)] = inst_65690);

(statearr_65747_65817[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (33))){
var inst_65676 = (state_65717[(25)]);
var inst_65678 = cljs.core.chunked_seq_QMARK_.call(null,inst_65676);
var state_65717__$1 = state_65717;
if(inst_65678){
var statearr_65748_65818 = state_65717__$1;
(statearr_65748_65818[(1)] = (36));

} else {
var statearr_65749_65819 = state_65717__$1;
(statearr_65749_65819[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (13))){
var inst_65606 = (state_65717[(26)]);
var inst_65609 = cljs.core.async.close_BANG_.call(null,inst_65606);
var state_65717__$1 = state_65717;
var statearr_65750_65820 = state_65717__$1;
(statearr_65750_65820[(2)] = inst_65609);

(statearr_65750_65820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (22))){
var inst_65629 = (state_65717[(8)]);
var inst_65632 = cljs.core.async.close_BANG_.call(null,inst_65629);
var state_65717__$1 = state_65717;
var statearr_65751_65821 = state_65717__$1;
(statearr_65751_65821[(2)] = inst_65632);

(statearr_65751_65821[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (36))){
var inst_65676 = (state_65717[(25)]);
var inst_65680 = cljs.core.chunk_first.call(null,inst_65676);
var inst_65681 = cljs.core.chunk_rest.call(null,inst_65676);
var inst_65682 = cljs.core.count.call(null,inst_65680);
var inst_65657 = inst_65681;
var inst_65658 = inst_65680;
var inst_65659 = inst_65682;
var inst_65660 = (0);
var state_65717__$1 = (function (){var statearr_65752 = state_65717;
(statearr_65752[(9)] = inst_65660);

(statearr_65752[(20)] = inst_65657);

(statearr_65752[(21)] = inst_65659);

(statearr_65752[(12)] = inst_65658);

return statearr_65752;
})();
var statearr_65753_65822 = state_65717__$1;
(statearr_65753_65822[(2)] = null);

(statearr_65753_65822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (41))){
var inst_65676 = (state_65717[(25)]);
var inst_65692 = (state_65717[(2)]);
var inst_65693 = cljs.core.next.call(null,inst_65676);
var inst_65657 = inst_65693;
var inst_65658 = null;
var inst_65659 = (0);
var inst_65660 = (0);
var state_65717__$1 = (function (){var statearr_65754 = state_65717;
(statearr_65754[(27)] = inst_65692);

(statearr_65754[(9)] = inst_65660);

(statearr_65754[(20)] = inst_65657);

(statearr_65754[(21)] = inst_65659);

(statearr_65754[(12)] = inst_65658);

return statearr_65754;
})();
var statearr_65755_65823 = state_65717__$1;
(statearr_65755_65823[(2)] = null);

(statearr_65755_65823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (43))){
var state_65717__$1 = state_65717;
var statearr_65756_65824 = state_65717__$1;
(statearr_65756_65824[(2)] = null);

(statearr_65756_65824[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (29))){
var inst_65701 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65757_65825 = state_65717__$1;
(statearr_65757_65825[(2)] = inst_65701);

(statearr_65757_65825[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (44))){
var inst_65710 = (state_65717[(2)]);
var state_65717__$1 = (function (){var statearr_65758 = state_65717;
(statearr_65758[(28)] = inst_65710);

return statearr_65758;
})();
var statearr_65759_65826 = state_65717__$1;
(statearr_65759_65826[(2)] = null);

(statearr_65759_65826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (6))){
var inst_65649 = (state_65717[(29)]);
var inst_65648 = cljs.core.deref.call(null,cs);
var inst_65649__$1 = cljs.core.keys.call(null,inst_65648);
var inst_65650 = cljs.core.count.call(null,inst_65649__$1);
var inst_65651 = cljs.core.reset_BANG_.call(null,dctr,inst_65650);
var inst_65656 = cljs.core.seq.call(null,inst_65649__$1);
var inst_65657 = inst_65656;
var inst_65658 = null;
var inst_65659 = (0);
var inst_65660 = (0);
var state_65717__$1 = (function (){var statearr_65760 = state_65717;
(statearr_65760[(9)] = inst_65660);

(statearr_65760[(20)] = inst_65657);

(statearr_65760[(30)] = inst_65651);

(statearr_65760[(29)] = inst_65649__$1);

(statearr_65760[(21)] = inst_65659);

(statearr_65760[(12)] = inst_65658);

return statearr_65760;
})();
var statearr_65761_65827 = state_65717__$1;
(statearr_65761_65827[(2)] = null);

(statearr_65761_65827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (28))){
var inst_65657 = (state_65717[(20)]);
var inst_65676 = (state_65717[(25)]);
var inst_65676__$1 = cljs.core.seq.call(null,inst_65657);
var state_65717__$1 = (function (){var statearr_65762 = state_65717;
(statearr_65762[(25)] = inst_65676__$1);

return statearr_65762;
})();
if(inst_65676__$1){
var statearr_65763_65828 = state_65717__$1;
(statearr_65763_65828[(1)] = (33));

} else {
var statearr_65764_65829 = state_65717__$1;
(statearr_65764_65829[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (25))){
var inst_65660 = (state_65717[(9)]);
var inst_65659 = (state_65717[(21)]);
var inst_65662 = (inst_65660 < inst_65659);
var inst_65663 = inst_65662;
var state_65717__$1 = state_65717;
if(cljs.core.truth_(inst_65663)){
var statearr_65765_65830 = state_65717__$1;
(statearr_65765_65830[(1)] = (27));

} else {
var statearr_65766_65831 = state_65717__$1;
(statearr_65766_65831[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (34))){
var state_65717__$1 = state_65717;
var statearr_65767_65832 = state_65717__$1;
(statearr_65767_65832[(2)] = null);

(statearr_65767_65832[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (17))){
var state_65717__$1 = state_65717;
var statearr_65768_65833 = state_65717__$1;
(statearr_65768_65833[(2)] = null);

(statearr_65768_65833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (3))){
var inst_65715 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65717__$1,inst_65715);
} else {
if((state_val_65718 === (12))){
var inst_65644 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65769_65834 = state_65717__$1;
(statearr_65769_65834[(2)] = inst_65644);

(statearr_65769_65834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (2))){
var state_65717__$1 = state_65717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65717__$1,(4),ch);
} else {
if((state_val_65718 === (23))){
var state_65717__$1 = state_65717;
var statearr_65770_65835 = state_65717__$1;
(statearr_65770_65835[(2)] = null);

(statearr_65770_65835[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (35))){
var inst_65699 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65771_65836 = state_65717__$1;
(statearr_65771_65836[(2)] = inst_65699);

(statearr_65771_65836[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (19))){
var inst_65616 = (state_65717[(7)]);
var inst_65620 = cljs.core.chunk_first.call(null,inst_65616);
var inst_65621 = cljs.core.chunk_rest.call(null,inst_65616);
var inst_65622 = cljs.core.count.call(null,inst_65620);
var inst_65594 = inst_65621;
var inst_65595 = inst_65620;
var inst_65596 = inst_65622;
var inst_65597 = (0);
var state_65717__$1 = (function (){var statearr_65772 = state_65717;
(statearr_65772[(13)] = inst_65595);

(statearr_65772[(15)] = inst_65594);

(statearr_65772[(16)] = inst_65596);

(statearr_65772[(17)] = inst_65597);

return statearr_65772;
})();
var statearr_65773_65837 = state_65717__$1;
(statearr_65773_65837[(2)] = null);

(statearr_65773_65837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (11))){
var inst_65616 = (state_65717[(7)]);
var inst_65594 = (state_65717[(15)]);
var inst_65616__$1 = cljs.core.seq.call(null,inst_65594);
var state_65717__$1 = (function (){var statearr_65774 = state_65717;
(statearr_65774[(7)] = inst_65616__$1);

return statearr_65774;
})();
if(inst_65616__$1){
var statearr_65775_65838 = state_65717__$1;
(statearr_65775_65838[(1)] = (16));

} else {
var statearr_65776_65839 = state_65717__$1;
(statearr_65776_65839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (9))){
var inst_65646 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65777_65840 = state_65717__$1;
(statearr_65777_65840[(2)] = inst_65646);

(statearr_65777_65840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (5))){
var inst_65592 = cljs.core.deref.call(null,cs);
var inst_65593 = cljs.core.seq.call(null,inst_65592);
var inst_65594 = inst_65593;
var inst_65595 = null;
var inst_65596 = (0);
var inst_65597 = (0);
var state_65717__$1 = (function (){var statearr_65778 = state_65717;
(statearr_65778[(13)] = inst_65595);

(statearr_65778[(15)] = inst_65594);

(statearr_65778[(16)] = inst_65596);

(statearr_65778[(17)] = inst_65597);

return statearr_65778;
})();
var statearr_65779_65841 = state_65717__$1;
(statearr_65779_65841[(2)] = null);

(statearr_65779_65841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (14))){
var state_65717__$1 = state_65717;
var statearr_65780_65842 = state_65717__$1;
(statearr_65780_65842[(2)] = null);

(statearr_65780_65842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (45))){
var inst_65707 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65781_65843 = state_65717__$1;
(statearr_65781_65843[(2)] = inst_65707);

(statearr_65781_65843[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (26))){
var inst_65649 = (state_65717[(29)]);
var inst_65703 = (state_65717[(2)]);
var inst_65704 = cljs.core.seq.call(null,inst_65649);
var state_65717__$1 = (function (){var statearr_65782 = state_65717;
(statearr_65782[(31)] = inst_65703);

return statearr_65782;
})();
if(inst_65704){
var statearr_65783_65844 = state_65717__$1;
(statearr_65783_65844[(1)] = (42));

} else {
var statearr_65784_65845 = state_65717__$1;
(statearr_65784_65845[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (16))){
var inst_65616 = (state_65717[(7)]);
var inst_65618 = cljs.core.chunked_seq_QMARK_.call(null,inst_65616);
var state_65717__$1 = state_65717;
if(inst_65618){
var statearr_65785_65846 = state_65717__$1;
(statearr_65785_65846[(1)] = (19));

} else {
var statearr_65786_65847 = state_65717__$1;
(statearr_65786_65847[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (38))){
var inst_65696 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65787_65848 = state_65717__$1;
(statearr_65787_65848[(2)] = inst_65696);

(statearr_65787_65848[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (30))){
var state_65717__$1 = state_65717;
var statearr_65788_65849 = state_65717__$1;
(statearr_65788_65849[(2)] = null);

(statearr_65788_65849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (10))){
var inst_65595 = (state_65717[(13)]);
var inst_65597 = (state_65717[(17)]);
var inst_65605 = cljs.core._nth.call(null,inst_65595,inst_65597);
var inst_65606 = cljs.core.nth.call(null,inst_65605,(0),null);
var inst_65607 = cljs.core.nth.call(null,inst_65605,(1),null);
var state_65717__$1 = (function (){var statearr_65789 = state_65717;
(statearr_65789[(26)] = inst_65606);

return statearr_65789;
})();
if(cljs.core.truth_(inst_65607)){
var statearr_65790_65850 = state_65717__$1;
(statearr_65790_65850[(1)] = (13));

} else {
var statearr_65791_65851 = state_65717__$1;
(statearr_65791_65851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (18))){
var inst_65642 = (state_65717[(2)]);
var state_65717__$1 = state_65717;
var statearr_65792_65852 = state_65717__$1;
(statearr_65792_65852[(2)] = inst_65642);

(statearr_65792_65852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (42))){
var state_65717__$1 = state_65717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65717__$1,(45),dchan);
} else {
if((state_val_65718 === (37))){
var inst_65685 = (state_65717[(23)]);
var inst_65585 = (state_65717[(11)]);
var inst_65676 = (state_65717[(25)]);
var inst_65685__$1 = cljs.core.first.call(null,inst_65676);
var inst_65686 = cljs.core.async.put_BANG_.call(null,inst_65685__$1,inst_65585,done);
var state_65717__$1 = (function (){var statearr_65793 = state_65717;
(statearr_65793[(23)] = inst_65685__$1);

return statearr_65793;
})();
if(cljs.core.truth_(inst_65686)){
var statearr_65794_65853 = state_65717__$1;
(statearr_65794_65853[(1)] = (39));

} else {
var statearr_65795_65854 = state_65717__$1;
(statearr_65795_65854[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65718 === (8))){
var inst_65596 = (state_65717[(16)]);
var inst_65597 = (state_65717[(17)]);
var inst_65599 = (inst_65597 < inst_65596);
var inst_65600 = inst_65599;
var state_65717__$1 = state_65717;
if(cljs.core.truth_(inst_65600)){
var statearr_65796_65855 = state_65717__$1;
(statearr_65796_65855[(1)] = (10));

} else {
var statearr_65797_65856 = state_65717__$1;
(statearr_65797_65856[(1)] = (11));

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
});})(c__64983__auto___65802,cs,m,dchan,dctr,done))
;
return ((function (switch__64893__auto__,c__64983__auto___65802,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__64894__auto__ = null;
var cljs$core$async$mult_$_state_machine__64894__auto____0 = (function (){
var statearr_65798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65798[(0)] = cljs$core$async$mult_$_state_machine__64894__auto__);

(statearr_65798[(1)] = (1));

return statearr_65798;
});
var cljs$core$async$mult_$_state_machine__64894__auto____1 = (function (state_65717){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e65799){if((e65799 instanceof Object)){
var ex__64897__auto__ = e65799;
var statearr_65800_65857 = state_65717;
(statearr_65800_65857[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65858 = state_65717;
state_65717 = G__65858;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__64894__auto__ = function(state_65717){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__64894__auto____1.call(this,state_65717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__64894__auto____0;
cljs$core$async$mult_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__64894__auto____1;
return cljs$core$async$mult_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___65802,cs,m,dchan,dctr,done))
})();
var state__64985__auto__ = (function (){var statearr_65801 = f__64984__auto__.call(null);
(statearr_65801[(6)] = c__64983__auto___65802);

return statearr_65801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___65802,cs,m,dchan,dctr,done))
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
var G__65860 = arguments.length;
switch (G__65860) {
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
var x__58894__auto__ = (((m == null))?null:m);
var m__58895__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,m,ch);
} else {
var m__58895__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,m,ch);
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
var x__58894__auto__ = (((m == null))?null:m);
var m__58895__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,m,ch);
} else {
var m__58895__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,m,ch);
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
var x__58894__auto__ = (((m == null))?null:m);
var m__58895__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,m);
} else {
var m__58895__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,m);
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
var x__58894__auto__ = (((m == null))?null:m);
var m__58895__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,m,state_map);
} else {
var m__58895__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,m,state_map);
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
var x__58894__auto__ = (((m == null))?null:m);
var m__58895__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,m,mode);
} else {
var m__58895__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__59445__auto__ = [];
var len__59438__auto___65872 = arguments.length;
var i__59439__auto___65873 = (0);
while(true){
if((i__59439__auto___65873 < len__59438__auto___65872)){
args__59445__auto__.push((arguments[i__59439__auto___65873]));

var G__65874 = (i__59439__auto___65873 + (1));
i__59439__auto___65873 = G__65874;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((3) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__59446__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__65866){
var map__65867 = p__65866;
var map__65867__$1 = ((((!((map__65867 == null)))?((((map__65867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65867):map__65867);
var opts = map__65867__$1;
var statearr_65869_65875 = state;
(statearr_65869_65875[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__65867,map__65867__$1,opts){
return (function (val){
var statearr_65870_65876 = state;
(statearr_65870_65876[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__65867,map__65867__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_65871_65877 = state;
(statearr_65871_65877[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq65862){
var G__65863 = cljs.core.first.call(null,seq65862);
var seq65862__$1 = cljs.core.next.call(null,seq65862);
var G__65864 = cljs.core.first.call(null,seq65862__$1);
var seq65862__$2 = cljs.core.next.call(null,seq65862__$1);
var G__65865 = cljs.core.first.call(null,seq65862__$2);
var seq65862__$3 = cljs.core.next.call(null,seq65862__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__65863,G__65864,G__65865,seq65862__$3);
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
if(typeof cljs.core.async.t_cljs$core$async65878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65878 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta65879){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta65879 = meta65879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_65880,meta65879__$1){
var self__ = this;
var _65880__$1 = this;
return (new cljs.core.async.t_cljs$core$async65878(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta65879__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_65880){
var self__ = this;
var _65880__$1 = this;
return self__.meta65879;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65878.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async65878.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta65879","meta65879",54066308,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65878";

cljs.core.async.t_cljs$core$async65878.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async65878");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async65878 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async65878(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta65879){
return (new cljs.core.async.t_cljs$core$async65878(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta65879));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async65878(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__64983__auto___66042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_65982){
var state_val_65983 = (state_65982[(1)]);
if((state_val_65983 === (7))){
var inst_65897 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_65984_66043 = state_65982__$1;
(statearr_65984_66043[(2)] = inst_65897);

(statearr_65984_66043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (20))){
var inst_65909 = (state_65982[(7)]);
var state_65982__$1 = state_65982;
var statearr_65985_66044 = state_65982__$1;
(statearr_65985_66044[(2)] = inst_65909);

(statearr_65985_66044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (27))){
var state_65982__$1 = state_65982;
var statearr_65986_66045 = state_65982__$1;
(statearr_65986_66045[(2)] = null);

(statearr_65986_66045[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (1))){
var inst_65884 = (state_65982[(8)]);
var inst_65884__$1 = calc_state.call(null);
var inst_65886 = (inst_65884__$1 == null);
var inst_65887 = cljs.core.not.call(null,inst_65886);
var state_65982__$1 = (function (){var statearr_65987 = state_65982;
(statearr_65987[(8)] = inst_65884__$1);

return statearr_65987;
})();
if(inst_65887){
var statearr_65988_66046 = state_65982__$1;
(statearr_65988_66046[(1)] = (2));

} else {
var statearr_65989_66047 = state_65982__$1;
(statearr_65989_66047[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (24))){
var inst_65956 = (state_65982[(9)]);
var inst_65933 = (state_65982[(10)]);
var inst_65942 = (state_65982[(11)]);
var inst_65956__$1 = inst_65933.call(null,inst_65942);
var state_65982__$1 = (function (){var statearr_65990 = state_65982;
(statearr_65990[(9)] = inst_65956__$1);

return statearr_65990;
})();
if(cljs.core.truth_(inst_65956__$1)){
var statearr_65991_66048 = state_65982__$1;
(statearr_65991_66048[(1)] = (29));

} else {
var statearr_65992_66049 = state_65982__$1;
(statearr_65992_66049[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (4))){
var inst_65900 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65900)){
var statearr_65993_66050 = state_65982__$1;
(statearr_65993_66050[(1)] = (8));

} else {
var statearr_65994_66051 = state_65982__$1;
(statearr_65994_66051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (15))){
var inst_65927 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65927)){
var statearr_65995_66052 = state_65982__$1;
(statearr_65995_66052[(1)] = (19));

} else {
var statearr_65996_66053 = state_65982__$1;
(statearr_65996_66053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (21))){
var inst_65932 = (state_65982[(12)]);
var inst_65932__$1 = (state_65982[(2)]);
var inst_65933 = cljs.core.get.call(null,inst_65932__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_65934 = cljs.core.get.call(null,inst_65932__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_65935 = cljs.core.get.call(null,inst_65932__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_65982__$1 = (function (){var statearr_65997 = state_65982;
(statearr_65997[(12)] = inst_65932__$1);

(statearr_65997[(10)] = inst_65933);

(statearr_65997[(13)] = inst_65934);

return statearr_65997;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_65982__$1,(22),inst_65935);
} else {
if((state_val_65983 === (31))){
var inst_65964 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65964)){
var statearr_65998_66054 = state_65982__$1;
(statearr_65998_66054[(1)] = (32));

} else {
var statearr_65999_66055 = state_65982__$1;
(statearr_65999_66055[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (32))){
var inst_65941 = (state_65982[(14)]);
var state_65982__$1 = state_65982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65982__$1,(35),out,inst_65941);
} else {
if((state_val_65983 === (33))){
var inst_65932 = (state_65982[(12)]);
var inst_65909 = inst_65932;
var state_65982__$1 = (function (){var statearr_66000 = state_65982;
(statearr_66000[(7)] = inst_65909);

return statearr_66000;
})();
var statearr_66001_66056 = state_65982__$1;
(statearr_66001_66056[(2)] = null);

(statearr_66001_66056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (13))){
var inst_65909 = (state_65982[(7)]);
var inst_65916 = inst_65909.cljs$lang$protocol_mask$partition0$;
var inst_65917 = (inst_65916 & (64));
var inst_65918 = inst_65909.cljs$core$ISeq$;
var inst_65919 = (cljs.core.PROTOCOL_SENTINEL === inst_65918);
var inst_65920 = (inst_65917) || (inst_65919);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65920)){
var statearr_66002_66057 = state_65982__$1;
(statearr_66002_66057[(1)] = (16));

} else {
var statearr_66003_66058 = state_65982__$1;
(statearr_66003_66058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (22))){
var inst_65941 = (state_65982[(14)]);
var inst_65942 = (state_65982[(11)]);
var inst_65940 = (state_65982[(2)]);
var inst_65941__$1 = cljs.core.nth.call(null,inst_65940,(0),null);
var inst_65942__$1 = cljs.core.nth.call(null,inst_65940,(1),null);
var inst_65943 = (inst_65941__$1 == null);
var inst_65944 = cljs.core._EQ_.call(null,inst_65942__$1,change);
var inst_65945 = (inst_65943) || (inst_65944);
var state_65982__$1 = (function (){var statearr_66004 = state_65982;
(statearr_66004[(14)] = inst_65941__$1);

(statearr_66004[(11)] = inst_65942__$1);

return statearr_66004;
})();
if(cljs.core.truth_(inst_65945)){
var statearr_66005_66059 = state_65982__$1;
(statearr_66005_66059[(1)] = (23));

} else {
var statearr_66006_66060 = state_65982__$1;
(statearr_66006_66060[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (36))){
var inst_65932 = (state_65982[(12)]);
var inst_65909 = inst_65932;
var state_65982__$1 = (function (){var statearr_66007 = state_65982;
(statearr_66007[(7)] = inst_65909);

return statearr_66007;
})();
var statearr_66008_66061 = state_65982__$1;
(statearr_66008_66061[(2)] = null);

(statearr_66008_66061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (29))){
var inst_65956 = (state_65982[(9)]);
var state_65982__$1 = state_65982;
var statearr_66009_66062 = state_65982__$1;
(statearr_66009_66062[(2)] = inst_65956);

(statearr_66009_66062[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (6))){
var state_65982__$1 = state_65982;
var statearr_66010_66063 = state_65982__$1;
(statearr_66010_66063[(2)] = false);

(statearr_66010_66063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (28))){
var inst_65952 = (state_65982[(2)]);
var inst_65953 = calc_state.call(null);
var inst_65909 = inst_65953;
var state_65982__$1 = (function (){var statearr_66011 = state_65982;
(statearr_66011[(7)] = inst_65909);

(statearr_66011[(15)] = inst_65952);

return statearr_66011;
})();
var statearr_66012_66064 = state_65982__$1;
(statearr_66012_66064[(2)] = null);

(statearr_66012_66064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (25))){
var inst_65978 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66013_66065 = state_65982__$1;
(statearr_66013_66065[(2)] = inst_65978);

(statearr_66013_66065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (34))){
var inst_65976 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66014_66066 = state_65982__$1;
(statearr_66014_66066[(2)] = inst_65976);

(statearr_66014_66066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (17))){
var state_65982__$1 = state_65982;
var statearr_66015_66067 = state_65982__$1;
(statearr_66015_66067[(2)] = false);

(statearr_66015_66067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (3))){
var state_65982__$1 = state_65982;
var statearr_66016_66068 = state_65982__$1;
(statearr_66016_66068[(2)] = false);

(statearr_66016_66068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (12))){
var inst_65980 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65982__$1,inst_65980);
} else {
if((state_val_65983 === (2))){
var inst_65884 = (state_65982[(8)]);
var inst_65889 = inst_65884.cljs$lang$protocol_mask$partition0$;
var inst_65890 = (inst_65889 & (64));
var inst_65891 = inst_65884.cljs$core$ISeq$;
var inst_65892 = (cljs.core.PROTOCOL_SENTINEL === inst_65891);
var inst_65893 = (inst_65890) || (inst_65892);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65893)){
var statearr_66017_66069 = state_65982__$1;
(statearr_66017_66069[(1)] = (5));

} else {
var statearr_66018_66070 = state_65982__$1;
(statearr_66018_66070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (23))){
var inst_65941 = (state_65982[(14)]);
var inst_65947 = (inst_65941 == null);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65947)){
var statearr_66019_66071 = state_65982__$1;
(statearr_66019_66071[(1)] = (26));

} else {
var statearr_66020_66072 = state_65982__$1;
(statearr_66020_66072[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (35))){
var inst_65967 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65967)){
var statearr_66021_66073 = state_65982__$1;
(statearr_66021_66073[(1)] = (36));

} else {
var statearr_66022_66074 = state_65982__$1;
(statearr_66022_66074[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (19))){
var inst_65909 = (state_65982[(7)]);
var inst_65929 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65909);
var state_65982__$1 = state_65982;
var statearr_66023_66075 = state_65982__$1;
(statearr_66023_66075[(2)] = inst_65929);

(statearr_66023_66075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (11))){
var inst_65909 = (state_65982[(7)]);
var inst_65913 = (inst_65909 == null);
var inst_65914 = cljs.core.not.call(null,inst_65913);
var state_65982__$1 = state_65982;
if(inst_65914){
var statearr_66024_66076 = state_65982__$1;
(statearr_66024_66076[(1)] = (13));

} else {
var statearr_66025_66077 = state_65982__$1;
(statearr_66025_66077[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (9))){
var inst_65884 = (state_65982[(8)]);
var state_65982__$1 = state_65982;
var statearr_66026_66078 = state_65982__$1;
(statearr_66026_66078[(2)] = inst_65884);

(statearr_66026_66078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (5))){
var state_65982__$1 = state_65982;
var statearr_66027_66079 = state_65982__$1;
(statearr_66027_66079[(2)] = true);

(statearr_66027_66079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (14))){
var state_65982__$1 = state_65982;
var statearr_66028_66080 = state_65982__$1;
(statearr_66028_66080[(2)] = false);

(statearr_66028_66080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (26))){
var inst_65942 = (state_65982[(11)]);
var inst_65949 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_65942);
var state_65982__$1 = state_65982;
var statearr_66029_66081 = state_65982__$1;
(statearr_66029_66081[(2)] = inst_65949);

(statearr_66029_66081[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (16))){
var state_65982__$1 = state_65982;
var statearr_66030_66082 = state_65982__$1;
(statearr_66030_66082[(2)] = true);

(statearr_66030_66082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (38))){
var inst_65972 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66031_66083 = state_65982__$1;
(statearr_66031_66083[(2)] = inst_65972);

(statearr_66031_66083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (30))){
var inst_65933 = (state_65982[(10)]);
var inst_65942 = (state_65982[(11)]);
var inst_65934 = (state_65982[(13)]);
var inst_65959 = cljs.core.empty_QMARK_.call(null,inst_65933);
var inst_65960 = inst_65934.call(null,inst_65942);
var inst_65961 = cljs.core.not.call(null,inst_65960);
var inst_65962 = (inst_65959) && (inst_65961);
var state_65982__$1 = state_65982;
var statearr_66032_66084 = state_65982__$1;
(statearr_66032_66084[(2)] = inst_65962);

(statearr_66032_66084[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (10))){
var inst_65884 = (state_65982[(8)]);
var inst_65905 = (state_65982[(2)]);
var inst_65906 = cljs.core.get.call(null,inst_65905,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_65907 = cljs.core.get.call(null,inst_65905,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_65908 = cljs.core.get.call(null,inst_65905,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_65909 = inst_65884;
var state_65982__$1 = (function (){var statearr_66033 = state_65982;
(statearr_66033[(16)] = inst_65908);

(statearr_66033[(17)] = inst_65907);

(statearr_66033[(18)] = inst_65906);

(statearr_66033[(7)] = inst_65909);

return statearr_66033;
})();
var statearr_66034_66085 = state_65982__$1;
(statearr_66034_66085[(2)] = null);

(statearr_66034_66085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (18))){
var inst_65924 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66035_66086 = state_65982__$1;
(statearr_66035_66086[(2)] = inst_65924);

(statearr_66035_66086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (37))){
var state_65982__$1 = state_65982;
var statearr_66036_66087 = state_65982__$1;
(statearr_66036_66087[(2)] = null);

(statearr_66036_66087[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (8))){
var inst_65884 = (state_65982[(8)]);
var inst_65902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65884);
var state_65982__$1 = state_65982;
var statearr_66037_66088 = state_65982__$1;
(statearr_66037_66088[(2)] = inst_65902);

(statearr_66037_66088[(1)] = (10));


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
});})(c__64983__auto___66042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__64893__auto__,c__64983__auto___66042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__64894__auto__ = null;
var cljs$core$async$mix_$_state_machine__64894__auto____0 = (function (){
var statearr_66038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66038[(0)] = cljs$core$async$mix_$_state_machine__64894__auto__);

(statearr_66038[(1)] = (1));

return statearr_66038;
});
var cljs$core$async$mix_$_state_machine__64894__auto____1 = (function (state_65982){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_65982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66039){if((e66039 instanceof Object)){
var ex__64897__auto__ = e66039;
var statearr_66040_66089 = state_65982;
(statearr_66040_66089[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66090 = state_65982;
state_65982 = G__66090;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__64894__auto__ = function(state_65982){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__64894__auto____1.call(this,state_65982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__64894__auto____0;
cljs$core$async$mix_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__64894__auto____1;
return cljs$core$async$mix_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__64985__auto__ = (function (){var statearr_66041 = f__64984__auto__.call(null);
(statearr_66041[(6)] = c__64983__auto___66042);

return statearr_66041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__58894__auto__ = (((p == null))?null:p);
var m__58895__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__58895__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__58894__auto__ = (((p == null))?null:p);
var m__58895__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,p,v,ch);
} else {
var m__58895__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__66092 = arguments.length;
switch (G__66092) {
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
var x__58894__auto__ = (((p == null))?null:p);
var m__58895__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,p);
} else {
var m__58895__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,p);
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
var x__58894__auto__ = (((p == null))?null:p);
var m__58895__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,p,v);
} else {
var m__58895__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,p,v);
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
var G__66096 = arguments.length;
switch (G__66096) {
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
var or__58161__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__58161__auto__,mults){
return (function (p1__66094_SHARP_){
if(cljs.core.truth_(p1__66094_SHARP_.call(null,topic))){
return p1__66094_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__66094_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__58161__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async66097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66097 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta66098){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta66098 = meta66098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_66099,meta66098__$1){
var self__ = this;
var _66099__$1 = this;
return (new cljs.core.async.t_cljs$core$async66097(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta66098__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_66099){
var self__ = this;
var _66099__$1 = this;
return self__.meta66098;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66097.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66097.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta66098","meta66098",-1796050095,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66097";

cljs.core.async.t_cljs$core$async66097.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async66097");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async66097 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async66097(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66098){
return (new cljs.core.async.t_cljs$core$async66097(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66098));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async66097(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__64983__auto___66217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66217,mults,ensure_mult,p){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66217,mults,ensure_mult,p){
return (function (state_66171){
var state_val_66172 = (state_66171[(1)]);
if((state_val_66172 === (7))){
var inst_66167 = (state_66171[(2)]);
var state_66171__$1 = state_66171;
var statearr_66173_66218 = state_66171__$1;
(statearr_66173_66218[(2)] = inst_66167);

(statearr_66173_66218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (20))){
var state_66171__$1 = state_66171;
var statearr_66174_66219 = state_66171__$1;
(statearr_66174_66219[(2)] = null);

(statearr_66174_66219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (1))){
var state_66171__$1 = state_66171;
var statearr_66175_66220 = state_66171__$1;
(statearr_66175_66220[(2)] = null);

(statearr_66175_66220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (24))){
var inst_66150 = (state_66171[(7)]);
var inst_66159 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_66150);
var state_66171__$1 = state_66171;
var statearr_66176_66221 = state_66171__$1;
(statearr_66176_66221[(2)] = inst_66159);

(statearr_66176_66221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (4))){
var inst_66102 = (state_66171[(8)]);
var inst_66102__$1 = (state_66171[(2)]);
var inst_66103 = (inst_66102__$1 == null);
var state_66171__$1 = (function (){var statearr_66177 = state_66171;
(statearr_66177[(8)] = inst_66102__$1);

return statearr_66177;
})();
if(cljs.core.truth_(inst_66103)){
var statearr_66178_66222 = state_66171__$1;
(statearr_66178_66222[(1)] = (5));

} else {
var statearr_66179_66223 = state_66171__$1;
(statearr_66179_66223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (15))){
var inst_66144 = (state_66171[(2)]);
var state_66171__$1 = state_66171;
var statearr_66180_66224 = state_66171__$1;
(statearr_66180_66224[(2)] = inst_66144);

(statearr_66180_66224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (21))){
var inst_66164 = (state_66171[(2)]);
var state_66171__$1 = (function (){var statearr_66181 = state_66171;
(statearr_66181[(9)] = inst_66164);

return statearr_66181;
})();
var statearr_66182_66225 = state_66171__$1;
(statearr_66182_66225[(2)] = null);

(statearr_66182_66225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (13))){
var inst_66126 = (state_66171[(10)]);
var inst_66128 = cljs.core.chunked_seq_QMARK_.call(null,inst_66126);
var state_66171__$1 = state_66171;
if(inst_66128){
var statearr_66183_66226 = state_66171__$1;
(statearr_66183_66226[(1)] = (16));

} else {
var statearr_66184_66227 = state_66171__$1;
(statearr_66184_66227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (22))){
var inst_66156 = (state_66171[(2)]);
var state_66171__$1 = state_66171;
if(cljs.core.truth_(inst_66156)){
var statearr_66185_66228 = state_66171__$1;
(statearr_66185_66228[(1)] = (23));

} else {
var statearr_66186_66229 = state_66171__$1;
(statearr_66186_66229[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (6))){
var inst_66150 = (state_66171[(7)]);
var inst_66152 = (state_66171[(11)]);
var inst_66102 = (state_66171[(8)]);
var inst_66150__$1 = topic_fn.call(null,inst_66102);
var inst_66151 = cljs.core.deref.call(null,mults);
var inst_66152__$1 = cljs.core.get.call(null,inst_66151,inst_66150__$1);
var state_66171__$1 = (function (){var statearr_66187 = state_66171;
(statearr_66187[(7)] = inst_66150__$1);

(statearr_66187[(11)] = inst_66152__$1);

return statearr_66187;
})();
if(cljs.core.truth_(inst_66152__$1)){
var statearr_66188_66230 = state_66171__$1;
(statearr_66188_66230[(1)] = (19));

} else {
var statearr_66189_66231 = state_66171__$1;
(statearr_66189_66231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (25))){
var inst_66161 = (state_66171[(2)]);
var state_66171__$1 = state_66171;
var statearr_66190_66232 = state_66171__$1;
(statearr_66190_66232[(2)] = inst_66161);

(statearr_66190_66232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (17))){
var inst_66126 = (state_66171[(10)]);
var inst_66135 = cljs.core.first.call(null,inst_66126);
var inst_66136 = cljs.core.async.muxch_STAR_.call(null,inst_66135);
var inst_66137 = cljs.core.async.close_BANG_.call(null,inst_66136);
var inst_66138 = cljs.core.next.call(null,inst_66126);
var inst_66112 = inst_66138;
var inst_66113 = null;
var inst_66114 = (0);
var inst_66115 = (0);
var state_66171__$1 = (function (){var statearr_66191 = state_66171;
(statearr_66191[(12)] = inst_66112);

(statearr_66191[(13)] = inst_66113);

(statearr_66191[(14)] = inst_66114);

(statearr_66191[(15)] = inst_66137);

(statearr_66191[(16)] = inst_66115);

return statearr_66191;
})();
var statearr_66192_66233 = state_66171__$1;
(statearr_66192_66233[(2)] = null);

(statearr_66192_66233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (3))){
var inst_66169 = (state_66171[(2)]);
var state_66171__$1 = state_66171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66171__$1,inst_66169);
} else {
if((state_val_66172 === (12))){
var inst_66146 = (state_66171[(2)]);
var state_66171__$1 = state_66171;
var statearr_66193_66234 = state_66171__$1;
(statearr_66193_66234[(2)] = inst_66146);

(statearr_66193_66234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (2))){
var state_66171__$1 = state_66171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66171__$1,(4),ch);
} else {
if((state_val_66172 === (23))){
var state_66171__$1 = state_66171;
var statearr_66194_66235 = state_66171__$1;
(statearr_66194_66235[(2)] = null);

(statearr_66194_66235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (19))){
var inst_66152 = (state_66171[(11)]);
var inst_66102 = (state_66171[(8)]);
var inst_66154 = cljs.core.async.muxch_STAR_.call(null,inst_66152);
var state_66171__$1 = state_66171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66171__$1,(22),inst_66154,inst_66102);
} else {
if((state_val_66172 === (11))){
var inst_66126 = (state_66171[(10)]);
var inst_66112 = (state_66171[(12)]);
var inst_66126__$1 = cljs.core.seq.call(null,inst_66112);
var state_66171__$1 = (function (){var statearr_66195 = state_66171;
(statearr_66195[(10)] = inst_66126__$1);

return statearr_66195;
})();
if(inst_66126__$1){
var statearr_66196_66236 = state_66171__$1;
(statearr_66196_66236[(1)] = (13));

} else {
var statearr_66197_66237 = state_66171__$1;
(statearr_66197_66237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (9))){
var inst_66148 = (state_66171[(2)]);
var state_66171__$1 = state_66171;
var statearr_66198_66238 = state_66171__$1;
(statearr_66198_66238[(2)] = inst_66148);

(statearr_66198_66238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (5))){
var inst_66109 = cljs.core.deref.call(null,mults);
var inst_66110 = cljs.core.vals.call(null,inst_66109);
var inst_66111 = cljs.core.seq.call(null,inst_66110);
var inst_66112 = inst_66111;
var inst_66113 = null;
var inst_66114 = (0);
var inst_66115 = (0);
var state_66171__$1 = (function (){var statearr_66199 = state_66171;
(statearr_66199[(12)] = inst_66112);

(statearr_66199[(13)] = inst_66113);

(statearr_66199[(14)] = inst_66114);

(statearr_66199[(16)] = inst_66115);

return statearr_66199;
})();
var statearr_66200_66239 = state_66171__$1;
(statearr_66200_66239[(2)] = null);

(statearr_66200_66239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (14))){
var state_66171__$1 = state_66171;
var statearr_66204_66240 = state_66171__$1;
(statearr_66204_66240[(2)] = null);

(statearr_66204_66240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (16))){
var inst_66126 = (state_66171[(10)]);
var inst_66130 = cljs.core.chunk_first.call(null,inst_66126);
var inst_66131 = cljs.core.chunk_rest.call(null,inst_66126);
var inst_66132 = cljs.core.count.call(null,inst_66130);
var inst_66112 = inst_66131;
var inst_66113 = inst_66130;
var inst_66114 = inst_66132;
var inst_66115 = (0);
var state_66171__$1 = (function (){var statearr_66205 = state_66171;
(statearr_66205[(12)] = inst_66112);

(statearr_66205[(13)] = inst_66113);

(statearr_66205[(14)] = inst_66114);

(statearr_66205[(16)] = inst_66115);

return statearr_66205;
})();
var statearr_66206_66241 = state_66171__$1;
(statearr_66206_66241[(2)] = null);

(statearr_66206_66241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (10))){
var inst_66112 = (state_66171[(12)]);
var inst_66113 = (state_66171[(13)]);
var inst_66114 = (state_66171[(14)]);
var inst_66115 = (state_66171[(16)]);
var inst_66120 = cljs.core._nth.call(null,inst_66113,inst_66115);
var inst_66121 = cljs.core.async.muxch_STAR_.call(null,inst_66120);
var inst_66122 = cljs.core.async.close_BANG_.call(null,inst_66121);
var inst_66123 = (inst_66115 + (1));
var tmp66201 = inst_66112;
var tmp66202 = inst_66113;
var tmp66203 = inst_66114;
var inst_66112__$1 = tmp66201;
var inst_66113__$1 = tmp66202;
var inst_66114__$1 = tmp66203;
var inst_66115__$1 = inst_66123;
var state_66171__$1 = (function (){var statearr_66207 = state_66171;
(statearr_66207[(12)] = inst_66112__$1);

(statearr_66207[(13)] = inst_66113__$1);

(statearr_66207[(14)] = inst_66114__$1);

(statearr_66207[(17)] = inst_66122);

(statearr_66207[(16)] = inst_66115__$1);

return statearr_66207;
})();
var statearr_66208_66242 = state_66171__$1;
(statearr_66208_66242[(2)] = null);

(statearr_66208_66242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (18))){
var inst_66141 = (state_66171[(2)]);
var state_66171__$1 = state_66171;
var statearr_66209_66243 = state_66171__$1;
(statearr_66209_66243[(2)] = inst_66141);

(statearr_66209_66243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66172 === (8))){
var inst_66114 = (state_66171[(14)]);
var inst_66115 = (state_66171[(16)]);
var inst_66117 = (inst_66115 < inst_66114);
var inst_66118 = inst_66117;
var state_66171__$1 = state_66171;
if(cljs.core.truth_(inst_66118)){
var statearr_66210_66244 = state_66171__$1;
(statearr_66210_66244[(1)] = (10));

} else {
var statearr_66211_66245 = state_66171__$1;
(statearr_66211_66245[(1)] = (11));

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
});})(c__64983__auto___66217,mults,ensure_mult,p))
;
return ((function (switch__64893__auto__,c__64983__auto___66217,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_66212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66212[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_66212[(1)] = (1));

return statearr_66212;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_66171){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66213){if((e66213 instanceof Object)){
var ex__64897__auto__ = e66213;
var statearr_66214_66246 = state_66171;
(statearr_66214_66246[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66247 = state_66171;
state_66171 = G__66247;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_66171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_66171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66217,mults,ensure_mult,p))
})();
var state__64985__auto__ = (function (){var statearr_66215 = f__64984__auto__.call(null);
(statearr_66215[(6)] = c__64983__auto___66217);

return statearr_66215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66217,mults,ensure_mult,p))
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
var G__66249 = arguments.length;
switch (G__66249) {
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
var G__66252 = arguments.length;
switch (G__66252) {
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
var G__66255 = arguments.length;
switch (G__66255) {
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
var c__64983__auto___66322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_66294){
var state_val_66295 = (state_66294[(1)]);
if((state_val_66295 === (7))){
var state_66294__$1 = state_66294;
var statearr_66296_66323 = state_66294__$1;
(statearr_66296_66323[(2)] = null);

(statearr_66296_66323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (1))){
var state_66294__$1 = state_66294;
var statearr_66297_66324 = state_66294__$1;
(statearr_66297_66324[(2)] = null);

(statearr_66297_66324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (4))){
var inst_66258 = (state_66294[(7)]);
var inst_66260 = (inst_66258 < cnt);
var state_66294__$1 = state_66294;
if(cljs.core.truth_(inst_66260)){
var statearr_66298_66325 = state_66294__$1;
(statearr_66298_66325[(1)] = (6));

} else {
var statearr_66299_66326 = state_66294__$1;
(statearr_66299_66326[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (15))){
var inst_66290 = (state_66294[(2)]);
var state_66294__$1 = state_66294;
var statearr_66300_66327 = state_66294__$1;
(statearr_66300_66327[(2)] = inst_66290);

(statearr_66300_66327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (13))){
var inst_66283 = cljs.core.async.close_BANG_.call(null,out);
var state_66294__$1 = state_66294;
var statearr_66301_66328 = state_66294__$1;
(statearr_66301_66328[(2)] = inst_66283);

(statearr_66301_66328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (6))){
var state_66294__$1 = state_66294;
var statearr_66302_66329 = state_66294__$1;
(statearr_66302_66329[(2)] = null);

(statearr_66302_66329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (3))){
var inst_66292 = (state_66294[(2)]);
var state_66294__$1 = state_66294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66294__$1,inst_66292);
} else {
if((state_val_66295 === (12))){
var inst_66280 = (state_66294[(8)]);
var inst_66280__$1 = (state_66294[(2)]);
var inst_66281 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_66280__$1);
var state_66294__$1 = (function (){var statearr_66303 = state_66294;
(statearr_66303[(8)] = inst_66280__$1);

return statearr_66303;
})();
if(cljs.core.truth_(inst_66281)){
var statearr_66304_66330 = state_66294__$1;
(statearr_66304_66330[(1)] = (13));

} else {
var statearr_66305_66331 = state_66294__$1;
(statearr_66305_66331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (2))){
var inst_66257 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_66258 = (0);
var state_66294__$1 = (function (){var statearr_66306 = state_66294;
(statearr_66306[(7)] = inst_66258);

(statearr_66306[(9)] = inst_66257);

return statearr_66306;
})();
var statearr_66307_66332 = state_66294__$1;
(statearr_66307_66332[(2)] = null);

(statearr_66307_66332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (11))){
var inst_66258 = (state_66294[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_66294,(10),Object,null,(9));
var inst_66267 = chs__$1.call(null,inst_66258);
var inst_66268 = done.call(null,inst_66258);
var inst_66269 = cljs.core.async.take_BANG_.call(null,inst_66267,inst_66268);
var state_66294__$1 = state_66294;
var statearr_66308_66333 = state_66294__$1;
(statearr_66308_66333[(2)] = inst_66269);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (9))){
var inst_66258 = (state_66294[(7)]);
var inst_66271 = (state_66294[(2)]);
var inst_66272 = (inst_66258 + (1));
var inst_66258__$1 = inst_66272;
var state_66294__$1 = (function (){var statearr_66309 = state_66294;
(statearr_66309[(7)] = inst_66258__$1);

(statearr_66309[(10)] = inst_66271);

return statearr_66309;
})();
var statearr_66310_66334 = state_66294__$1;
(statearr_66310_66334[(2)] = null);

(statearr_66310_66334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (5))){
var inst_66278 = (state_66294[(2)]);
var state_66294__$1 = (function (){var statearr_66311 = state_66294;
(statearr_66311[(11)] = inst_66278);

return statearr_66311;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66294__$1,(12),dchan);
} else {
if((state_val_66295 === (14))){
var inst_66280 = (state_66294[(8)]);
var inst_66285 = cljs.core.apply.call(null,f,inst_66280);
var state_66294__$1 = state_66294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66294__$1,(16),out,inst_66285);
} else {
if((state_val_66295 === (16))){
var inst_66287 = (state_66294[(2)]);
var state_66294__$1 = (function (){var statearr_66312 = state_66294;
(statearr_66312[(12)] = inst_66287);

return statearr_66312;
})();
var statearr_66313_66335 = state_66294__$1;
(statearr_66313_66335[(2)] = null);

(statearr_66313_66335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (10))){
var inst_66262 = (state_66294[(2)]);
var inst_66263 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_66294__$1 = (function (){var statearr_66314 = state_66294;
(statearr_66314[(13)] = inst_66262);

return statearr_66314;
})();
var statearr_66315_66336 = state_66294__$1;
(statearr_66315_66336[(2)] = inst_66263);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66295 === (8))){
var inst_66276 = (state_66294[(2)]);
var state_66294__$1 = state_66294;
var statearr_66316_66337 = state_66294__$1;
(statearr_66316_66337[(2)] = inst_66276);

(statearr_66316_66337[(1)] = (5));


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
});})(c__64983__auto___66322,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__64893__auto__,c__64983__auto___66322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_66317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66317[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_66317[(1)] = (1));

return statearr_66317;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_66294){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66318){if((e66318 instanceof Object)){
var ex__64897__auto__ = e66318;
var statearr_66319_66338 = state_66294;
(statearr_66319_66338[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66339 = state_66294;
state_66294 = G__66339;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_66294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_66294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66322,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__64985__auto__ = (function (){var statearr_66320 = f__64984__auto__.call(null);
(statearr_66320[(6)] = c__64983__auto___66322);

return statearr_66320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66322,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__66342 = arguments.length;
switch (G__66342) {
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
var c__64983__auto___66396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66396,out){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66396,out){
return (function (state_66374){
var state_val_66375 = (state_66374[(1)]);
if((state_val_66375 === (7))){
var inst_66353 = (state_66374[(7)]);
var inst_66354 = (state_66374[(8)]);
var inst_66353__$1 = (state_66374[(2)]);
var inst_66354__$1 = cljs.core.nth.call(null,inst_66353__$1,(0),null);
var inst_66355 = cljs.core.nth.call(null,inst_66353__$1,(1),null);
var inst_66356 = (inst_66354__$1 == null);
var state_66374__$1 = (function (){var statearr_66376 = state_66374;
(statearr_66376[(7)] = inst_66353__$1);

(statearr_66376[(9)] = inst_66355);

(statearr_66376[(8)] = inst_66354__$1);

return statearr_66376;
})();
if(cljs.core.truth_(inst_66356)){
var statearr_66377_66397 = state_66374__$1;
(statearr_66377_66397[(1)] = (8));

} else {
var statearr_66378_66398 = state_66374__$1;
(statearr_66378_66398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66375 === (1))){
var inst_66343 = cljs.core.vec.call(null,chs);
var inst_66344 = inst_66343;
var state_66374__$1 = (function (){var statearr_66379 = state_66374;
(statearr_66379[(10)] = inst_66344);

return statearr_66379;
})();
var statearr_66380_66399 = state_66374__$1;
(statearr_66380_66399[(2)] = null);

(statearr_66380_66399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66375 === (4))){
var inst_66344 = (state_66374[(10)]);
var state_66374__$1 = state_66374;
return cljs.core.async.ioc_alts_BANG_.call(null,state_66374__$1,(7),inst_66344);
} else {
if((state_val_66375 === (6))){
var inst_66370 = (state_66374[(2)]);
var state_66374__$1 = state_66374;
var statearr_66381_66400 = state_66374__$1;
(statearr_66381_66400[(2)] = inst_66370);

(statearr_66381_66400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66375 === (3))){
var inst_66372 = (state_66374[(2)]);
var state_66374__$1 = state_66374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66374__$1,inst_66372);
} else {
if((state_val_66375 === (2))){
var inst_66344 = (state_66374[(10)]);
var inst_66346 = cljs.core.count.call(null,inst_66344);
var inst_66347 = (inst_66346 > (0));
var state_66374__$1 = state_66374;
if(cljs.core.truth_(inst_66347)){
var statearr_66383_66401 = state_66374__$1;
(statearr_66383_66401[(1)] = (4));

} else {
var statearr_66384_66402 = state_66374__$1;
(statearr_66384_66402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66375 === (11))){
var inst_66344 = (state_66374[(10)]);
var inst_66363 = (state_66374[(2)]);
var tmp66382 = inst_66344;
var inst_66344__$1 = tmp66382;
var state_66374__$1 = (function (){var statearr_66385 = state_66374;
(statearr_66385[(10)] = inst_66344__$1);

(statearr_66385[(11)] = inst_66363);

return statearr_66385;
})();
var statearr_66386_66403 = state_66374__$1;
(statearr_66386_66403[(2)] = null);

(statearr_66386_66403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66375 === (9))){
var inst_66354 = (state_66374[(8)]);
var state_66374__$1 = state_66374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66374__$1,(11),out,inst_66354);
} else {
if((state_val_66375 === (5))){
var inst_66368 = cljs.core.async.close_BANG_.call(null,out);
var state_66374__$1 = state_66374;
var statearr_66387_66404 = state_66374__$1;
(statearr_66387_66404[(2)] = inst_66368);

(statearr_66387_66404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66375 === (10))){
var inst_66366 = (state_66374[(2)]);
var state_66374__$1 = state_66374;
var statearr_66388_66405 = state_66374__$1;
(statearr_66388_66405[(2)] = inst_66366);

(statearr_66388_66405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66375 === (8))){
var inst_66344 = (state_66374[(10)]);
var inst_66353 = (state_66374[(7)]);
var inst_66355 = (state_66374[(9)]);
var inst_66354 = (state_66374[(8)]);
var inst_66358 = (function (){var cs = inst_66344;
var vec__66349 = inst_66353;
var v = inst_66354;
var c = inst_66355;
return ((function (cs,vec__66349,v,c,inst_66344,inst_66353,inst_66355,inst_66354,state_val_66375,c__64983__auto___66396,out){
return (function (p1__66340_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__66340_SHARP_);
});
;})(cs,vec__66349,v,c,inst_66344,inst_66353,inst_66355,inst_66354,state_val_66375,c__64983__auto___66396,out))
})();
var inst_66359 = cljs.core.filterv.call(null,inst_66358,inst_66344);
var inst_66344__$1 = inst_66359;
var state_66374__$1 = (function (){var statearr_66389 = state_66374;
(statearr_66389[(10)] = inst_66344__$1);

return statearr_66389;
})();
var statearr_66390_66406 = state_66374__$1;
(statearr_66390_66406[(2)] = null);

(statearr_66390_66406[(1)] = (2));


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
});})(c__64983__auto___66396,out))
;
return ((function (switch__64893__auto__,c__64983__auto___66396,out){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_66391 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66391[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_66391[(1)] = (1));

return statearr_66391;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_66374){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66392){if((e66392 instanceof Object)){
var ex__64897__auto__ = e66392;
var statearr_66393_66407 = state_66374;
(statearr_66393_66407[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66408 = state_66374;
state_66374 = G__66408;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_66374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_66374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66396,out))
})();
var state__64985__auto__ = (function (){var statearr_66394 = f__64984__auto__.call(null);
(statearr_66394[(6)] = c__64983__auto___66396);

return statearr_66394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66396,out))
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
var G__66410 = arguments.length;
switch (G__66410) {
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
var c__64983__auto___66455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66455,out){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66455,out){
return (function (state_66434){
var state_val_66435 = (state_66434[(1)]);
if((state_val_66435 === (7))){
var inst_66416 = (state_66434[(7)]);
var inst_66416__$1 = (state_66434[(2)]);
var inst_66417 = (inst_66416__$1 == null);
var inst_66418 = cljs.core.not.call(null,inst_66417);
var state_66434__$1 = (function (){var statearr_66436 = state_66434;
(statearr_66436[(7)] = inst_66416__$1);

return statearr_66436;
})();
if(inst_66418){
var statearr_66437_66456 = state_66434__$1;
(statearr_66437_66456[(1)] = (8));

} else {
var statearr_66438_66457 = state_66434__$1;
(statearr_66438_66457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66435 === (1))){
var inst_66411 = (0);
var state_66434__$1 = (function (){var statearr_66439 = state_66434;
(statearr_66439[(8)] = inst_66411);

return statearr_66439;
})();
var statearr_66440_66458 = state_66434__$1;
(statearr_66440_66458[(2)] = null);

(statearr_66440_66458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66435 === (4))){
var state_66434__$1 = state_66434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66434__$1,(7),ch);
} else {
if((state_val_66435 === (6))){
var inst_66429 = (state_66434[(2)]);
var state_66434__$1 = state_66434;
var statearr_66441_66459 = state_66434__$1;
(statearr_66441_66459[(2)] = inst_66429);

(statearr_66441_66459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66435 === (3))){
var inst_66431 = (state_66434[(2)]);
var inst_66432 = cljs.core.async.close_BANG_.call(null,out);
var state_66434__$1 = (function (){var statearr_66442 = state_66434;
(statearr_66442[(9)] = inst_66431);

return statearr_66442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66434__$1,inst_66432);
} else {
if((state_val_66435 === (2))){
var inst_66411 = (state_66434[(8)]);
var inst_66413 = (inst_66411 < n);
var state_66434__$1 = state_66434;
if(cljs.core.truth_(inst_66413)){
var statearr_66443_66460 = state_66434__$1;
(statearr_66443_66460[(1)] = (4));

} else {
var statearr_66444_66461 = state_66434__$1;
(statearr_66444_66461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66435 === (11))){
var inst_66411 = (state_66434[(8)]);
var inst_66421 = (state_66434[(2)]);
var inst_66422 = (inst_66411 + (1));
var inst_66411__$1 = inst_66422;
var state_66434__$1 = (function (){var statearr_66445 = state_66434;
(statearr_66445[(8)] = inst_66411__$1);

(statearr_66445[(10)] = inst_66421);

return statearr_66445;
})();
var statearr_66446_66462 = state_66434__$1;
(statearr_66446_66462[(2)] = null);

(statearr_66446_66462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66435 === (9))){
var state_66434__$1 = state_66434;
var statearr_66447_66463 = state_66434__$1;
(statearr_66447_66463[(2)] = null);

(statearr_66447_66463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66435 === (5))){
var state_66434__$1 = state_66434;
var statearr_66448_66464 = state_66434__$1;
(statearr_66448_66464[(2)] = null);

(statearr_66448_66464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66435 === (10))){
var inst_66426 = (state_66434[(2)]);
var state_66434__$1 = state_66434;
var statearr_66449_66465 = state_66434__$1;
(statearr_66449_66465[(2)] = inst_66426);

(statearr_66449_66465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66435 === (8))){
var inst_66416 = (state_66434[(7)]);
var state_66434__$1 = state_66434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66434__$1,(11),out,inst_66416);
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
});})(c__64983__auto___66455,out))
;
return ((function (switch__64893__auto__,c__64983__auto___66455,out){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_66450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66450[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_66450[(1)] = (1));

return statearr_66450;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_66434){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66451){if((e66451 instanceof Object)){
var ex__64897__auto__ = e66451;
var statearr_66452_66466 = state_66434;
(statearr_66452_66466[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66467 = state_66434;
state_66434 = G__66467;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_66434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_66434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66455,out))
})();
var state__64985__auto__ = (function (){var statearr_66453 = f__64984__auto__.call(null);
(statearr_66453[(6)] = c__64983__auto___66455);

return statearr_66453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66455,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async66469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66469 = (function (f,ch,meta66470){
this.f = f;
this.ch = ch;
this.meta66470 = meta66470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66471,meta66470__$1){
var self__ = this;
var _66471__$1 = this;
return (new cljs.core.async.t_cljs$core$async66469(self__.f,self__.ch,meta66470__$1));
});

cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66471){
var self__ = this;
var _66471__$1 = this;
return self__.meta66470;
});

cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async66472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66472 = (function (f,ch,meta66470,_,fn1,meta66473){
this.f = f;
this.ch = ch;
this.meta66470 = meta66470;
this._ = _;
this.fn1 = fn1;
this.meta66473 = meta66473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_66474,meta66473__$1){
var self__ = this;
var _66474__$1 = this;
return (new cljs.core.async.t_cljs$core$async66472(self__.f,self__.ch,self__.meta66470,self__._,self__.fn1,meta66473__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_66474){
var self__ = this;
var _66474__$1 = this;
return self__.meta66473;
});})(___$1))
;

cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__66468_SHARP_){
return f1.call(null,(((p1__66468_SHARP_ == null))?null:self__.f.call(null,p1__66468_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async66472.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66470","meta66470",1969796814,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async66469","cljs.core.async/t_cljs$core$async66469",-665775932,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta66473","meta66473",-1997574332,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async66472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66472";

cljs.core.async.t_cljs$core$async66472.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async66472");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async66472 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66472(f__$1,ch__$1,meta66470__$1,___$2,fn1__$1,meta66473){
return (new cljs.core.async.t_cljs$core$async66472(f__$1,ch__$1,meta66470__$1,___$2,fn1__$1,meta66473));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async66472(self__.f,self__.ch,self__.meta66470,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__58149__auto__ = ret;
if(cljs.core.truth_(and__58149__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__58149__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async66469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66470","meta66470",1969796814,null)], null);
});

cljs.core.async.t_cljs$core$async66469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66469";

cljs.core.async.t_cljs$core$async66469.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async66469");
});

cljs.core.async.__GT_t_cljs$core$async66469 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66469(f__$1,ch__$1,meta66470){
return (new cljs.core.async.t_cljs$core$async66469(f__$1,ch__$1,meta66470));
});

}

return (new cljs.core.async.t_cljs$core$async66469(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async66475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66475 = (function (f,ch,meta66476){
this.f = f;
this.ch = ch;
this.meta66476 = meta66476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66477,meta66476__$1){
var self__ = this;
var _66477__$1 = this;
return (new cljs.core.async.t_cljs$core$async66475(self__.f,self__.ch,meta66476__$1));
});

cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66477){
var self__ = this;
var _66477__$1 = this;
return self__.meta66476;
});

cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async66475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66476","meta66476",-186268113,null)], null);
});

cljs.core.async.t_cljs$core$async66475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66475";

cljs.core.async.t_cljs$core$async66475.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async66475");
});

cljs.core.async.__GT_t_cljs$core$async66475 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async66475(f__$1,ch__$1,meta66476){
return (new cljs.core.async.t_cljs$core$async66475(f__$1,ch__$1,meta66476));
});

}

return (new cljs.core.async.t_cljs$core$async66475(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async66478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66478 = (function (p,ch,meta66479){
this.p = p;
this.ch = ch;
this.meta66479 = meta66479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66480,meta66479__$1){
var self__ = this;
var _66480__$1 = this;
return (new cljs.core.async.t_cljs$core$async66478(self__.p,self__.ch,meta66479__$1));
});

cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66480){
var self__ = this;
var _66480__$1 = this;
return self__.meta66479;
});

cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async66478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async66478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66479","meta66479",373448076,null)], null);
});

cljs.core.async.t_cljs$core$async66478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66478";

cljs.core.async.t_cljs$core$async66478.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async/t_cljs$core$async66478");
});

cljs.core.async.__GT_t_cljs$core$async66478 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async66478(p__$1,ch__$1,meta66479){
return (new cljs.core.async.t_cljs$core$async66478(p__$1,ch__$1,meta66479));
});

}

return (new cljs.core.async.t_cljs$core$async66478(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__66482 = arguments.length;
switch (G__66482) {
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
var c__64983__auto___66522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66522,out){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66522,out){
return (function (state_66503){
var state_val_66504 = (state_66503[(1)]);
if((state_val_66504 === (7))){
var inst_66499 = (state_66503[(2)]);
var state_66503__$1 = state_66503;
var statearr_66505_66523 = state_66503__$1;
(statearr_66505_66523[(2)] = inst_66499);

(statearr_66505_66523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66504 === (1))){
var state_66503__$1 = state_66503;
var statearr_66506_66524 = state_66503__$1;
(statearr_66506_66524[(2)] = null);

(statearr_66506_66524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66504 === (4))){
var inst_66485 = (state_66503[(7)]);
var inst_66485__$1 = (state_66503[(2)]);
var inst_66486 = (inst_66485__$1 == null);
var state_66503__$1 = (function (){var statearr_66507 = state_66503;
(statearr_66507[(7)] = inst_66485__$1);

return statearr_66507;
})();
if(cljs.core.truth_(inst_66486)){
var statearr_66508_66525 = state_66503__$1;
(statearr_66508_66525[(1)] = (5));

} else {
var statearr_66509_66526 = state_66503__$1;
(statearr_66509_66526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66504 === (6))){
var inst_66485 = (state_66503[(7)]);
var inst_66490 = p.call(null,inst_66485);
var state_66503__$1 = state_66503;
if(cljs.core.truth_(inst_66490)){
var statearr_66510_66527 = state_66503__$1;
(statearr_66510_66527[(1)] = (8));

} else {
var statearr_66511_66528 = state_66503__$1;
(statearr_66511_66528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66504 === (3))){
var inst_66501 = (state_66503[(2)]);
var state_66503__$1 = state_66503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66503__$1,inst_66501);
} else {
if((state_val_66504 === (2))){
var state_66503__$1 = state_66503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66503__$1,(4),ch);
} else {
if((state_val_66504 === (11))){
var inst_66493 = (state_66503[(2)]);
var state_66503__$1 = state_66503;
var statearr_66512_66529 = state_66503__$1;
(statearr_66512_66529[(2)] = inst_66493);

(statearr_66512_66529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66504 === (9))){
var state_66503__$1 = state_66503;
var statearr_66513_66530 = state_66503__$1;
(statearr_66513_66530[(2)] = null);

(statearr_66513_66530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66504 === (5))){
var inst_66488 = cljs.core.async.close_BANG_.call(null,out);
var state_66503__$1 = state_66503;
var statearr_66514_66531 = state_66503__$1;
(statearr_66514_66531[(2)] = inst_66488);

(statearr_66514_66531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66504 === (10))){
var inst_66496 = (state_66503[(2)]);
var state_66503__$1 = (function (){var statearr_66515 = state_66503;
(statearr_66515[(8)] = inst_66496);

return statearr_66515;
})();
var statearr_66516_66532 = state_66503__$1;
(statearr_66516_66532[(2)] = null);

(statearr_66516_66532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66504 === (8))){
var inst_66485 = (state_66503[(7)]);
var state_66503__$1 = state_66503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66503__$1,(11),out,inst_66485);
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
});})(c__64983__auto___66522,out))
;
return ((function (switch__64893__auto__,c__64983__auto___66522,out){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_66517 = [null,null,null,null,null,null,null,null,null];
(statearr_66517[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_66517[(1)] = (1));

return statearr_66517;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_66503){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66518){if((e66518 instanceof Object)){
var ex__64897__auto__ = e66518;
var statearr_66519_66533 = state_66503;
(statearr_66519_66533[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66534 = state_66503;
state_66503 = G__66534;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_66503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_66503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66522,out))
})();
var state__64985__auto__ = (function (){var statearr_66520 = f__64984__auto__.call(null);
(statearr_66520[(6)] = c__64983__auto___66522);

return statearr_66520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66522,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__66536 = arguments.length;
switch (G__66536) {
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
var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__){
return (function (state_66599){
var state_val_66600 = (state_66599[(1)]);
if((state_val_66600 === (7))){
var inst_66595 = (state_66599[(2)]);
var state_66599__$1 = state_66599;
var statearr_66601_66639 = state_66599__$1;
(statearr_66601_66639[(2)] = inst_66595);

(statearr_66601_66639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (20))){
var inst_66565 = (state_66599[(7)]);
var inst_66576 = (state_66599[(2)]);
var inst_66577 = cljs.core.next.call(null,inst_66565);
var inst_66551 = inst_66577;
var inst_66552 = null;
var inst_66553 = (0);
var inst_66554 = (0);
var state_66599__$1 = (function (){var statearr_66602 = state_66599;
(statearr_66602[(8)] = inst_66576);

(statearr_66602[(9)] = inst_66553);

(statearr_66602[(10)] = inst_66554);

(statearr_66602[(11)] = inst_66551);

(statearr_66602[(12)] = inst_66552);

return statearr_66602;
})();
var statearr_66603_66640 = state_66599__$1;
(statearr_66603_66640[(2)] = null);

(statearr_66603_66640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (1))){
var state_66599__$1 = state_66599;
var statearr_66604_66641 = state_66599__$1;
(statearr_66604_66641[(2)] = null);

(statearr_66604_66641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (4))){
var inst_66540 = (state_66599[(13)]);
var inst_66540__$1 = (state_66599[(2)]);
var inst_66541 = (inst_66540__$1 == null);
var state_66599__$1 = (function (){var statearr_66605 = state_66599;
(statearr_66605[(13)] = inst_66540__$1);

return statearr_66605;
})();
if(cljs.core.truth_(inst_66541)){
var statearr_66606_66642 = state_66599__$1;
(statearr_66606_66642[(1)] = (5));

} else {
var statearr_66607_66643 = state_66599__$1;
(statearr_66607_66643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (15))){
var state_66599__$1 = state_66599;
var statearr_66611_66644 = state_66599__$1;
(statearr_66611_66644[(2)] = null);

(statearr_66611_66644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (21))){
var state_66599__$1 = state_66599;
var statearr_66612_66645 = state_66599__$1;
(statearr_66612_66645[(2)] = null);

(statearr_66612_66645[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (13))){
var inst_66553 = (state_66599[(9)]);
var inst_66554 = (state_66599[(10)]);
var inst_66551 = (state_66599[(11)]);
var inst_66552 = (state_66599[(12)]);
var inst_66561 = (state_66599[(2)]);
var inst_66562 = (inst_66554 + (1));
var tmp66608 = inst_66553;
var tmp66609 = inst_66551;
var tmp66610 = inst_66552;
var inst_66551__$1 = tmp66609;
var inst_66552__$1 = tmp66610;
var inst_66553__$1 = tmp66608;
var inst_66554__$1 = inst_66562;
var state_66599__$1 = (function (){var statearr_66613 = state_66599;
(statearr_66613[(9)] = inst_66553__$1);

(statearr_66613[(10)] = inst_66554__$1);

(statearr_66613[(11)] = inst_66551__$1);

(statearr_66613[(14)] = inst_66561);

(statearr_66613[(12)] = inst_66552__$1);

return statearr_66613;
})();
var statearr_66614_66646 = state_66599__$1;
(statearr_66614_66646[(2)] = null);

(statearr_66614_66646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (22))){
var state_66599__$1 = state_66599;
var statearr_66615_66647 = state_66599__$1;
(statearr_66615_66647[(2)] = null);

(statearr_66615_66647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (6))){
var inst_66540 = (state_66599[(13)]);
var inst_66549 = f.call(null,inst_66540);
var inst_66550 = cljs.core.seq.call(null,inst_66549);
var inst_66551 = inst_66550;
var inst_66552 = null;
var inst_66553 = (0);
var inst_66554 = (0);
var state_66599__$1 = (function (){var statearr_66616 = state_66599;
(statearr_66616[(9)] = inst_66553);

(statearr_66616[(10)] = inst_66554);

(statearr_66616[(11)] = inst_66551);

(statearr_66616[(12)] = inst_66552);

return statearr_66616;
})();
var statearr_66617_66648 = state_66599__$1;
(statearr_66617_66648[(2)] = null);

(statearr_66617_66648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (17))){
var inst_66565 = (state_66599[(7)]);
var inst_66569 = cljs.core.chunk_first.call(null,inst_66565);
var inst_66570 = cljs.core.chunk_rest.call(null,inst_66565);
var inst_66571 = cljs.core.count.call(null,inst_66569);
var inst_66551 = inst_66570;
var inst_66552 = inst_66569;
var inst_66553 = inst_66571;
var inst_66554 = (0);
var state_66599__$1 = (function (){var statearr_66618 = state_66599;
(statearr_66618[(9)] = inst_66553);

(statearr_66618[(10)] = inst_66554);

(statearr_66618[(11)] = inst_66551);

(statearr_66618[(12)] = inst_66552);

return statearr_66618;
})();
var statearr_66619_66649 = state_66599__$1;
(statearr_66619_66649[(2)] = null);

(statearr_66619_66649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (3))){
var inst_66597 = (state_66599[(2)]);
var state_66599__$1 = state_66599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66599__$1,inst_66597);
} else {
if((state_val_66600 === (12))){
var inst_66585 = (state_66599[(2)]);
var state_66599__$1 = state_66599;
var statearr_66620_66650 = state_66599__$1;
(statearr_66620_66650[(2)] = inst_66585);

(statearr_66620_66650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (2))){
var state_66599__$1 = state_66599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66599__$1,(4),in$);
} else {
if((state_val_66600 === (23))){
var inst_66593 = (state_66599[(2)]);
var state_66599__$1 = state_66599;
var statearr_66621_66651 = state_66599__$1;
(statearr_66621_66651[(2)] = inst_66593);

(statearr_66621_66651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (19))){
var inst_66580 = (state_66599[(2)]);
var state_66599__$1 = state_66599;
var statearr_66622_66652 = state_66599__$1;
(statearr_66622_66652[(2)] = inst_66580);

(statearr_66622_66652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (11))){
var inst_66551 = (state_66599[(11)]);
var inst_66565 = (state_66599[(7)]);
var inst_66565__$1 = cljs.core.seq.call(null,inst_66551);
var state_66599__$1 = (function (){var statearr_66623 = state_66599;
(statearr_66623[(7)] = inst_66565__$1);

return statearr_66623;
})();
if(inst_66565__$1){
var statearr_66624_66653 = state_66599__$1;
(statearr_66624_66653[(1)] = (14));

} else {
var statearr_66625_66654 = state_66599__$1;
(statearr_66625_66654[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (9))){
var inst_66587 = (state_66599[(2)]);
var inst_66588 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_66599__$1 = (function (){var statearr_66626 = state_66599;
(statearr_66626[(15)] = inst_66587);

return statearr_66626;
})();
if(cljs.core.truth_(inst_66588)){
var statearr_66627_66655 = state_66599__$1;
(statearr_66627_66655[(1)] = (21));

} else {
var statearr_66628_66656 = state_66599__$1;
(statearr_66628_66656[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (5))){
var inst_66543 = cljs.core.async.close_BANG_.call(null,out);
var state_66599__$1 = state_66599;
var statearr_66629_66657 = state_66599__$1;
(statearr_66629_66657[(2)] = inst_66543);

(statearr_66629_66657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (14))){
var inst_66565 = (state_66599[(7)]);
var inst_66567 = cljs.core.chunked_seq_QMARK_.call(null,inst_66565);
var state_66599__$1 = state_66599;
if(inst_66567){
var statearr_66630_66658 = state_66599__$1;
(statearr_66630_66658[(1)] = (17));

} else {
var statearr_66631_66659 = state_66599__$1;
(statearr_66631_66659[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (16))){
var inst_66583 = (state_66599[(2)]);
var state_66599__$1 = state_66599;
var statearr_66632_66660 = state_66599__$1;
(statearr_66632_66660[(2)] = inst_66583);

(statearr_66632_66660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (10))){
var inst_66554 = (state_66599[(10)]);
var inst_66552 = (state_66599[(12)]);
var inst_66559 = cljs.core._nth.call(null,inst_66552,inst_66554);
var state_66599__$1 = state_66599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66599__$1,(13),out,inst_66559);
} else {
if((state_val_66600 === (18))){
var inst_66565 = (state_66599[(7)]);
var inst_66574 = cljs.core.first.call(null,inst_66565);
var state_66599__$1 = state_66599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66599__$1,(20),out,inst_66574);
} else {
if((state_val_66600 === (8))){
var inst_66553 = (state_66599[(9)]);
var inst_66554 = (state_66599[(10)]);
var inst_66556 = (inst_66554 < inst_66553);
var inst_66557 = inst_66556;
var state_66599__$1 = state_66599;
if(cljs.core.truth_(inst_66557)){
var statearr_66633_66661 = state_66599__$1;
(statearr_66633_66661[(1)] = (10));

} else {
var statearr_66634_66662 = state_66599__$1;
(statearr_66634_66662[(1)] = (11));

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
});})(c__64983__auto__))
;
return ((function (switch__64893__auto__,c__64983__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__64894__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__64894__auto____0 = (function (){
var statearr_66635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66635[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__64894__auto__);

(statearr_66635[(1)] = (1));

return statearr_66635;
});
var cljs$core$async$mapcat_STAR__$_state_machine__64894__auto____1 = (function (state_66599){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66636){if((e66636 instanceof Object)){
var ex__64897__auto__ = e66636;
var statearr_66637_66663 = state_66599;
(statearr_66637_66663[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66664 = state_66599;
state_66599 = G__66664;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__64894__auto__ = function(state_66599){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__64894__auto____1.call(this,state_66599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__64894__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__64894__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__))
})();
var state__64985__auto__ = (function (){var statearr_66638 = f__64984__auto__.call(null);
(statearr_66638[(6)] = c__64983__auto__);

return statearr_66638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__))
);

return c__64983__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__66666 = arguments.length;
switch (G__66666) {
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
var G__66669 = arguments.length;
switch (G__66669) {
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
var G__66672 = arguments.length;
switch (G__66672) {
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
var c__64983__auto___66719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66719,out){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66719,out){
return (function (state_66696){
var state_val_66697 = (state_66696[(1)]);
if((state_val_66697 === (7))){
var inst_66691 = (state_66696[(2)]);
var state_66696__$1 = state_66696;
var statearr_66698_66720 = state_66696__$1;
(statearr_66698_66720[(2)] = inst_66691);

(statearr_66698_66720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (1))){
var inst_66673 = null;
var state_66696__$1 = (function (){var statearr_66699 = state_66696;
(statearr_66699[(7)] = inst_66673);

return statearr_66699;
})();
var statearr_66700_66721 = state_66696__$1;
(statearr_66700_66721[(2)] = null);

(statearr_66700_66721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (4))){
var inst_66676 = (state_66696[(8)]);
var inst_66676__$1 = (state_66696[(2)]);
var inst_66677 = (inst_66676__$1 == null);
var inst_66678 = cljs.core.not.call(null,inst_66677);
var state_66696__$1 = (function (){var statearr_66701 = state_66696;
(statearr_66701[(8)] = inst_66676__$1);

return statearr_66701;
})();
if(inst_66678){
var statearr_66702_66722 = state_66696__$1;
(statearr_66702_66722[(1)] = (5));

} else {
var statearr_66703_66723 = state_66696__$1;
(statearr_66703_66723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (6))){
var state_66696__$1 = state_66696;
var statearr_66704_66724 = state_66696__$1;
(statearr_66704_66724[(2)] = null);

(statearr_66704_66724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (3))){
var inst_66693 = (state_66696[(2)]);
var inst_66694 = cljs.core.async.close_BANG_.call(null,out);
var state_66696__$1 = (function (){var statearr_66705 = state_66696;
(statearr_66705[(9)] = inst_66693);

return statearr_66705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66696__$1,inst_66694);
} else {
if((state_val_66697 === (2))){
var state_66696__$1 = state_66696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66696__$1,(4),ch);
} else {
if((state_val_66697 === (11))){
var inst_66676 = (state_66696[(8)]);
var inst_66685 = (state_66696[(2)]);
var inst_66673 = inst_66676;
var state_66696__$1 = (function (){var statearr_66706 = state_66696;
(statearr_66706[(10)] = inst_66685);

(statearr_66706[(7)] = inst_66673);

return statearr_66706;
})();
var statearr_66707_66725 = state_66696__$1;
(statearr_66707_66725[(2)] = null);

(statearr_66707_66725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (9))){
var inst_66676 = (state_66696[(8)]);
var state_66696__$1 = state_66696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66696__$1,(11),out,inst_66676);
} else {
if((state_val_66697 === (5))){
var inst_66673 = (state_66696[(7)]);
var inst_66676 = (state_66696[(8)]);
var inst_66680 = cljs.core._EQ_.call(null,inst_66676,inst_66673);
var state_66696__$1 = state_66696;
if(inst_66680){
var statearr_66709_66726 = state_66696__$1;
(statearr_66709_66726[(1)] = (8));

} else {
var statearr_66710_66727 = state_66696__$1;
(statearr_66710_66727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (10))){
var inst_66688 = (state_66696[(2)]);
var state_66696__$1 = state_66696;
var statearr_66711_66728 = state_66696__$1;
(statearr_66711_66728[(2)] = inst_66688);

(statearr_66711_66728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66697 === (8))){
var inst_66673 = (state_66696[(7)]);
var tmp66708 = inst_66673;
var inst_66673__$1 = tmp66708;
var state_66696__$1 = (function (){var statearr_66712 = state_66696;
(statearr_66712[(7)] = inst_66673__$1);

return statearr_66712;
})();
var statearr_66713_66729 = state_66696__$1;
(statearr_66713_66729[(2)] = null);

(statearr_66713_66729[(1)] = (2));


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
});})(c__64983__auto___66719,out))
;
return ((function (switch__64893__auto__,c__64983__auto___66719,out){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_66714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66714[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_66714[(1)] = (1));

return statearr_66714;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_66696){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66715){if((e66715 instanceof Object)){
var ex__64897__auto__ = e66715;
var statearr_66716_66730 = state_66696;
(statearr_66716_66730[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66731 = state_66696;
state_66696 = G__66731;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_66696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_66696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66719,out))
})();
var state__64985__auto__ = (function (){var statearr_66717 = f__64984__auto__.call(null);
(statearr_66717[(6)] = c__64983__auto___66719);

return statearr_66717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66719,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__66733 = arguments.length;
switch (G__66733) {
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
var c__64983__auto___66799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66799,out){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66799,out){
return (function (state_66771){
var state_val_66772 = (state_66771[(1)]);
if((state_val_66772 === (7))){
var inst_66767 = (state_66771[(2)]);
var state_66771__$1 = state_66771;
var statearr_66773_66800 = state_66771__$1;
(statearr_66773_66800[(2)] = inst_66767);

(statearr_66773_66800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (1))){
var inst_66734 = (new Array(n));
var inst_66735 = inst_66734;
var inst_66736 = (0);
var state_66771__$1 = (function (){var statearr_66774 = state_66771;
(statearr_66774[(7)] = inst_66736);

(statearr_66774[(8)] = inst_66735);

return statearr_66774;
})();
var statearr_66775_66801 = state_66771__$1;
(statearr_66775_66801[(2)] = null);

(statearr_66775_66801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (4))){
var inst_66739 = (state_66771[(9)]);
var inst_66739__$1 = (state_66771[(2)]);
var inst_66740 = (inst_66739__$1 == null);
var inst_66741 = cljs.core.not.call(null,inst_66740);
var state_66771__$1 = (function (){var statearr_66776 = state_66771;
(statearr_66776[(9)] = inst_66739__$1);

return statearr_66776;
})();
if(inst_66741){
var statearr_66777_66802 = state_66771__$1;
(statearr_66777_66802[(1)] = (5));

} else {
var statearr_66778_66803 = state_66771__$1;
(statearr_66778_66803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (15))){
var inst_66761 = (state_66771[(2)]);
var state_66771__$1 = state_66771;
var statearr_66779_66804 = state_66771__$1;
(statearr_66779_66804[(2)] = inst_66761);

(statearr_66779_66804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (13))){
var state_66771__$1 = state_66771;
var statearr_66780_66805 = state_66771__$1;
(statearr_66780_66805[(2)] = null);

(statearr_66780_66805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (6))){
var inst_66736 = (state_66771[(7)]);
var inst_66757 = (inst_66736 > (0));
var state_66771__$1 = state_66771;
if(cljs.core.truth_(inst_66757)){
var statearr_66781_66806 = state_66771__$1;
(statearr_66781_66806[(1)] = (12));

} else {
var statearr_66782_66807 = state_66771__$1;
(statearr_66782_66807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (3))){
var inst_66769 = (state_66771[(2)]);
var state_66771__$1 = state_66771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66771__$1,inst_66769);
} else {
if((state_val_66772 === (12))){
var inst_66735 = (state_66771[(8)]);
var inst_66759 = cljs.core.vec.call(null,inst_66735);
var state_66771__$1 = state_66771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66771__$1,(15),out,inst_66759);
} else {
if((state_val_66772 === (2))){
var state_66771__$1 = state_66771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66771__$1,(4),ch);
} else {
if((state_val_66772 === (11))){
var inst_66751 = (state_66771[(2)]);
var inst_66752 = (new Array(n));
var inst_66735 = inst_66752;
var inst_66736 = (0);
var state_66771__$1 = (function (){var statearr_66783 = state_66771;
(statearr_66783[(10)] = inst_66751);

(statearr_66783[(7)] = inst_66736);

(statearr_66783[(8)] = inst_66735);

return statearr_66783;
})();
var statearr_66784_66808 = state_66771__$1;
(statearr_66784_66808[(2)] = null);

(statearr_66784_66808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (9))){
var inst_66735 = (state_66771[(8)]);
var inst_66749 = cljs.core.vec.call(null,inst_66735);
var state_66771__$1 = state_66771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66771__$1,(11),out,inst_66749);
} else {
if((state_val_66772 === (5))){
var inst_66736 = (state_66771[(7)]);
var inst_66744 = (state_66771[(11)]);
var inst_66735 = (state_66771[(8)]);
var inst_66739 = (state_66771[(9)]);
var inst_66743 = (inst_66735[inst_66736] = inst_66739);
var inst_66744__$1 = (inst_66736 + (1));
var inst_66745 = (inst_66744__$1 < n);
var state_66771__$1 = (function (){var statearr_66785 = state_66771;
(statearr_66785[(11)] = inst_66744__$1);

(statearr_66785[(12)] = inst_66743);

return statearr_66785;
})();
if(cljs.core.truth_(inst_66745)){
var statearr_66786_66809 = state_66771__$1;
(statearr_66786_66809[(1)] = (8));

} else {
var statearr_66787_66810 = state_66771__$1;
(statearr_66787_66810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (14))){
var inst_66764 = (state_66771[(2)]);
var inst_66765 = cljs.core.async.close_BANG_.call(null,out);
var state_66771__$1 = (function (){var statearr_66789 = state_66771;
(statearr_66789[(13)] = inst_66764);

return statearr_66789;
})();
var statearr_66790_66811 = state_66771__$1;
(statearr_66790_66811[(2)] = inst_66765);

(statearr_66790_66811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (10))){
var inst_66755 = (state_66771[(2)]);
var state_66771__$1 = state_66771;
var statearr_66791_66812 = state_66771__$1;
(statearr_66791_66812[(2)] = inst_66755);

(statearr_66791_66812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66772 === (8))){
var inst_66744 = (state_66771[(11)]);
var inst_66735 = (state_66771[(8)]);
var tmp66788 = inst_66735;
var inst_66735__$1 = tmp66788;
var inst_66736 = inst_66744;
var state_66771__$1 = (function (){var statearr_66792 = state_66771;
(statearr_66792[(7)] = inst_66736);

(statearr_66792[(8)] = inst_66735__$1);

return statearr_66792;
})();
var statearr_66793_66813 = state_66771__$1;
(statearr_66793_66813[(2)] = null);

(statearr_66793_66813[(1)] = (2));


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
});})(c__64983__auto___66799,out))
;
return ((function (switch__64893__auto__,c__64983__auto___66799,out){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_66794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66794[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_66794[(1)] = (1));

return statearr_66794;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_66771){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66795){if((e66795 instanceof Object)){
var ex__64897__auto__ = e66795;
var statearr_66796_66814 = state_66771;
(statearr_66796_66814[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66815 = state_66771;
state_66771 = G__66815;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_66771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_66771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66799,out))
})();
var state__64985__auto__ = (function (){var statearr_66797 = f__64984__auto__.call(null);
(statearr_66797[(6)] = c__64983__auto___66799);

return statearr_66797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66799,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__66817 = arguments.length;
switch (G__66817) {
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
var c__64983__auto___66887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___66887,out){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___66887,out){
return (function (state_66859){
var state_val_66860 = (state_66859[(1)]);
if((state_val_66860 === (7))){
var inst_66855 = (state_66859[(2)]);
var state_66859__$1 = state_66859;
var statearr_66861_66888 = state_66859__$1;
(statearr_66861_66888[(2)] = inst_66855);

(statearr_66861_66888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (1))){
var inst_66818 = [];
var inst_66819 = inst_66818;
var inst_66820 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_66859__$1 = (function (){var statearr_66862 = state_66859;
(statearr_66862[(7)] = inst_66820);

(statearr_66862[(8)] = inst_66819);

return statearr_66862;
})();
var statearr_66863_66889 = state_66859__$1;
(statearr_66863_66889[(2)] = null);

(statearr_66863_66889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (4))){
var inst_66823 = (state_66859[(9)]);
var inst_66823__$1 = (state_66859[(2)]);
var inst_66824 = (inst_66823__$1 == null);
var inst_66825 = cljs.core.not.call(null,inst_66824);
var state_66859__$1 = (function (){var statearr_66864 = state_66859;
(statearr_66864[(9)] = inst_66823__$1);

return statearr_66864;
})();
if(inst_66825){
var statearr_66865_66890 = state_66859__$1;
(statearr_66865_66890[(1)] = (5));

} else {
var statearr_66866_66891 = state_66859__$1;
(statearr_66866_66891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (15))){
var inst_66849 = (state_66859[(2)]);
var state_66859__$1 = state_66859;
var statearr_66867_66892 = state_66859__$1;
(statearr_66867_66892[(2)] = inst_66849);

(statearr_66867_66892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (13))){
var state_66859__$1 = state_66859;
var statearr_66868_66893 = state_66859__$1;
(statearr_66868_66893[(2)] = null);

(statearr_66868_66893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (6))){
var inst_66819 = (state_66859[(8)]);
var inst_66844 = inst_66819.length;
var inst_66845 = (inst_66844 > (0));
var state_66859__$1 = state_66859;
if(cljs.core.truth_(inst_66845)){
var statearr_66869_66894 = state_66859__$1;
(statearr_66869_66894[(1)] = (12));

} else {
var statearr_66870_66895 = state_66859__$1;
(statearr_66870_66895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (3))){
var inst_66857 = (state_66859[(2)]);
var state_66859__$1 = state_66859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66859__$1,inst_66857);
} else {
if((state_val_66860 === (12))){
var inst_66819 = (state_66859[(8)]);
var inst_66847 = cljs.core.vec.call(null,inst_66819);
var state_66859__$1 = state_66859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66859__$1,(15),out,inst_66847);
} else {
if((state_val_66860 === (2))){
var state_66859__$1 = state_66859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66859__$1,(4),ch);
} else {
if((state_val_66860 === (11))){
var inst_66823 = (state_66859[(9)]);
var inst_66827 = (state_66859[(10)]);
var inst_66837 = (state_66859[(2)]);
var inst_66838 = [];
var inst_66839 = inst_66838.push(inst_66823);
var inst_66819 = inst_66838;
var inst_66820 = inst_66827;
var state_66859__$1 = (function (){var statearr_66871 = state_66859;
(statearr_66871[(11)] = inst_66837);

(statearr_66871[(12)] = inst_66839);

(statearr_66871[(7)] = inst_66820);

(statearr_66871[(8)] = inst_66819);

return statearr_66871;
})();
var statearr_66872_66896 = state_66859__$1;
(statearr_66872_66896[(2)] = null);

(statearr_66872_66896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (9))){
var inst_66819 = (state_66859[(8)]);
var inst_66835 = cljs.core.vec.call(null,inst_66819);
var state_66859__$1 = state_66859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66859__$1,(11),out,inst_66835);
} else {
if((state_val_66860 === (5))){
var inst_66823 = (state_66859[(9)]);
var inst_66820 = (state_66859[(7)]);
var inst_66827 = (state_66859[(10)]);
var inst_66827__$1 = f.call(null,inst_66823);
var inst_66828 = cljs.core._EQ_.call(null,inst_66827__$1,inst_66820);
var inst_66829 = cljs.core.keyword_identical_QMARK_.call(null,inst_66820,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_66830 = (inst_66828) || (inst_66829);
var state_66859__$1 = (function (){var statearr_66873 = state_66859;
(statearr_66873[(10)] = inst_66827__$1);

return statearr_66873;
})();
if(cljs.core.truth_(inst_66830)){
var statearr_66874_66897 = state_66859__$1;
(statearr_66874_66897[(1)] = (8));

} else {
var statearr_66875_66898 = state_66859__$1;
(statearr_66875_66898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (14))){
var inst_66852 = (state_66859[(2)]);
var inst_66853 = cljs.core.async.close_BANG_.call(null,out);
var state_66859__$1 = (function (){var statearr_66877 = state_66859;
(statearr_66877[(13)] = inst_66852);

return statearr_66877;
})();
var statearr_66878_66899 = state_66859__$1;
(statearr_66878_66899[(2)] = inst_66853);

(statearr_66878_66899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (10))){
var inst_66842 = (state_66859[(2)]);
var state_66859__$1 = state_66859;
var statearr_66879_66900 = state_66859__$1;
(statearr_66879_66900[(2)] = inst_66842);

(statearr_66879_66900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66860 === (8))){
var inst_66823 = (state_66859[(9)]);
var inst_66827 = (state_66859[(10)]);
var inst_66819 = (state_66859[(8)]);
var inst_66832 = inst_66819.push(inst_66823);
var tmp66876 = inst_66819;
var inst_66819__$1 = tmp66876;
var inst_66820 = inst_66827;
var state_66859__$1 = (function (){var statearr_66880 = state_66859;
(statearr_66880[(14)] = inst_66832);

(statearr_66880[(7)] = inst_66820);

(statearr_66880[(8)] = inst_66819__$1);

return statearr_66880;
})();
var statearr_66881_66901 = state_66859__$1;
(statearr_66881_66901[(2)] = null);

(statearr_66881_66901[(1)] = (2));


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
});})(c__64983__auto___66887,out))
;
return ((function (switch__64893__auto__,c__64983__auto___66887,out){
return (function() {
var cljs$core$async$state_machine__64894__auto__ = null;
var cljs$core$async$state_machine__64894__auto____0 = (function (){
var statearr_66882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66882[(0)] = cljs$core$async$state_machine__64894__auto__);

(statearr_66882[(1)] = (1));

return statearr_66882;
});
var cljs$core$async$state_machine__64894__auto____1 = (function (state_66859){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_66859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e66883){if((e66883 instanceof Object)){
var ex__64897__auto__ = e66883;
var statearr_66884_66902 = state_66859;
(statearr_66884_66902[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66903 = state_66859;
state_66859 = G__66903;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
cljs$core$async$state_machine__64894__auto__ = function(state_66859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64894__auto____1.call(this,state_66859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64894__auto____0;
cljs$core$async$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64894__auto____1;
return cljs$core$async$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___66887,out))
})();
var state__64985__auto__ = (function (){var statearr_66885 = f__64984__auto__.call(null);
(statearr_66885[(6)] = c__64983__auto___66887);

return statearr_66885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___66887,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1505406784072
