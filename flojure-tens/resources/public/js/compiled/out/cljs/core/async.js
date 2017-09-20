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
var G__110894 = arguments.length;
switch (G__110894) {
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
if(typeof cljs.core.async.t_cljs$core$async110895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async110895 = (function (f,blockable,meta110896){
this.f = f;
this.blockable = blockable;
this.meta110896 = meta110896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async110895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_110897,meta110896__$1){
var self__ = this;
var _110897__$1 = this;
return (new cljs.core.async.t_cljs$core$async110895(self__.f,self__.blockable,meta110896__$1));
});

cljs.core.async.t_cljs$core$async110895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_110897){
var self__ = this;
var _110897__$1 = this;
return self__.meta110896;
});

cljs.core.async.t_cljs$core$async110895.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async110895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async110895.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async110895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async110895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta110896","meta110896",-508850832,null)], null);
});

cljs.core.async.t_cljs$core$async110895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async110895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async110895";

cljs.core.async.t_cljs$core$async110895.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async110895");
});

cljs.core.async.__GT_t_cljs$core$async110895 = (function cljs$core$async$__GT_t_cljs$core$async110895(f__$1,blockable__$1,meta110896){
return (new cljs.core.async.t_cljs$core$async110895(f__$1,blockable__$1,meta110896));
});

}

return (new cljs.core.async.t_cljs$core$async110895(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__110901 = arguments.length;
switch (G__110901) {
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
var G__110904 = arguments.length;
switch (G__110904) {
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
var G__110907 = arguments.length;
switch (G__110907) {
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
var val_110909 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_110909);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_110909,ret){
return (function (){
return fn1.call(null,val_110909);
});})(val_110909,ret))
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
var G__110911 = arguments.length;
switch (G__110911) {
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
var n__59171__auto___110913 = n;
var x_110914 = (0);
while(true){
if((x_110914 < n__59171__auto___110913)){
(a[x_110914] = (0));

var G__110915 = (x_110914 + (1));
x_110914 = G__110915;
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

var G__110916 = (i + (1));
i = G__110916;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async110917 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async110917 = (function (flag,meta110918){
this.flag = flag;
this.meta110918 = meta110918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async110917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_110919,meta110918__$1){
var self__ = this;
var _110919__$1 = this;
return (new cljs.core.async.t_cljs$core$async110917(self__.flag,meta110918__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async110917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_110919){
var self__ = this;
var _110919__$1 = this;
return self__.meta110918;
});})(flag))
;

cljs.core.async.t_cljs$core$async110917.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async110917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async110917.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async110917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async110917.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta110918","meta110918",352968881,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async110917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async110917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async110917";

cljs.core.async.t_cljs$core$async110917.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async110917");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async110917 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async110917(flag__$1,meta110918){
return (new cljs.core.async.t_cljs$core$async110917(flag__$1,meta110918));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async110917(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async110920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async110920 = (function (flag,cb,meta110921){
this.flag = flag;
this.cb = cb;
this.meta110921 = meta110921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async110920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_110922,meta110921__$1){
var self__ = this;
var _110922__$1 = this;
return (new cljs.core.async.t_cljs$core$async110920(self__.flag,self__.cb,meta110921__$1));
});

cljs.core.async.t_cljs$core$async110920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_110922){
var self__ = this;
var _110922__$1 = this;
return self__.meta110921;
});

cljs.core.async.t_cljs$core$async110920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async110920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async110920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async110920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async110920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta110921","meta110921",-49084807,null)], null);
});

cljs.core.async.t_cljs$core$async110920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async110920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async110920";

cljs.core.async.t_cljs$core$async110920.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async110920");
});

cljs.core.async.__GT_t_cljs$core$async110920 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async110920(flag__$1,cb__$1,meta110921){
return (new cljs.core.async.t_cljs$core$async110920(flag__$1,cb__$1,meta110921));
});

}

return (new cljs.core.async.t_cljs$core$async110920(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__110923_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__110923_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__110924_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__110924_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__58128__auto__ = wport;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return port;
}
})()], null));
} else {
var G__110925 = (i + (1));
i = G__110925;
continue;
}
} else {
return null;
}
break;
}
})();
var or__58128__auto__ = ret;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__58116__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__58116__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__58116__auto__;
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
var args__59412__auto__ = [];
var len__59405__auto___110931 = arguments.length;
var i__59406__auto___110932 = (0);
while(true){
if((i__59406__auto___110932 < len__59405__auto___110931)){
args__59412__auto__.push((arguments[i__59406__auto___110932]));

var G__110933 = (i__59406__auto___110932 + (1));
i__59406__auto___110932 = G__110933;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((1) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59413__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__110928){
var map__110929 = p__110928;
var map__110929__$1 = ((((!((map__110929 == null)))?((((map__110929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__110929):map__110929);
var opts = map__110929__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq110926){
var G__110927 = cljs.core.first.call(null,seq110926);
var seq110926__$1 = cljs.core.next.call(null,seq110926);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__110927,seq110926__$1);
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
var G__110935 = arguments.length;
switch (G__110935) {
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
var c__67983__auto___110981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___110981){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___110981){
return (function (state_110959){
var state_val_110960 = (state_110959[(1)]);
if((state_val_110960 === (7))){
var inst_110955 = (state_110959[(2)]);
var state_110959__$1 = state_110959;
var statearr_110961_110982 = state_110959__$1;
(statearr_110961_110982[(2)] = inst_110955);

(statearr_110961_110982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (1))){
var state_110959__$1 = state_110959;
var statearr_110962_110983 = state_110959__$1;
(statearr_110962_110983[(2)] = null);

(statearr_110962_110983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (4))){
var inst_110938 = (state_110959[(7)]);
var inst_110938__$1 = (state_110959[(2)]);
var inst_110939 = (inst_110938__$1 == null);
var state_110959__$1 = (function (){var statearr_110963 = state_110959;
(statearr_110963[(7)] = inst_110938__$1);

return statearr_110963;
})();
if(cljs.core.truth_(inst_110939)){
var statearr_110964_110984 = state_110959__$1;
(statearr_110964_110984[(1)] = (5));

} else {
var statearr_110965_110985 = state_110959__$1;
(statearr_110965_110985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (13))){
var state_110959__$1 = state_110959;
var statearr_110966_110986 = state_110959__$1;
(statearr_110966_110986[(2)] = null);

(statearr_110966_110986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (6))){
var inst_110938 = (state_110959[(7)]);
var state_110959__$1 = state_110959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_110959__$1,(11),to,inst_110938);
} else {
if((state_val_110960 === (3))){
var inst_110957 = (state_110959[(2)]);
var state_110959__$1 = state_110959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110959__$1,inst_110957);
} else {
if((state_val_110960 === (12))){
var state_110959__$1 = state_110959;
var statearr_110967_110987 = state_110959__$1;
(statearr_110967_110987[(2)] = null);

(statearr_110967_110987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (2))){
var state_110959__$1 = state_110959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110959__$1,(4),from);
} else {
if((state_val_110960 === (11))){
var inst_110948 = (state_110959[(2)]);
var state_110959__$1 = state_110959;
if(cljs.core.truth_(inst_110948)){
var statearr_110968_110988 = state_110959__$1;
(statearr_110968_110988[(1)] = (12));

} else {
var statearr_110969_110989 = state_110959__$1;
(statearr_110969_110989[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (9))){
var state_110959__$1 = state_110959;
var statearr_110970_110990 = state_110959__$1;
(statearr_110970_110990[(2)] = null);

(statearr_110970_110990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (5))){
var state_110959__$1 = state_110959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_110971_110991 = state_110959__$1;
(statearr_110971_110991[(1)] = (8));

} else {
var statearr_110972_110992 = state_110959__$1;
(statearr_110972_110992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (14))){
var inst_110953 = (state_110959[(2)]);
var state_110959__$1 = state_110959;
var statearr_110973_110993 = state_110959__$1;
(statearr_110973_110993[(2)] = inst_110953);

(statearr_110973_110993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (10))){
var inst_110945 = (state_110959[(2)]);
var state_110959__$1 = state_110959;
var statearr_110974_110994 = state_110959__$1;
(statearr_110974_110994[(2)] = inst_110945);

(statearr_110974_110994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110960 === (8))){
var inst_110942 = cljs.core.async.close_BANG_.call(null,to);
var state_110959__$1 = state_110959;
var statearr_110975_110995 = state_110959__$1;
(statearr_110975_110995[(2)] = inst_110942);

(statearr_110975_110995[(1)] = (10));


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
});})(c__67983__auto___110981))
;
return ((function (switch__67960__auto__,c__67983__auto___110981){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_110976 = [null,null,null,null,null,null,null,null];
(statearr_110976[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_110976[(1)] = (1));

return statearr_110976;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_110959){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_110959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e110977){if((e110977 instanceof Object)){
var ex__67964__auto__ = e110977;
var statearr_110978_110996 = state_110959;
(statearr_110978_110996[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e110977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110997 = state_110959;
state_110959 = G__110997;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_110959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_110959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___110981))
})();
var state__67985__auto__ = (function (){var statearr_110979 = f__67984__auto__.call(null);
(statearr_110979[(6)] = c__67983__auto___110981);

return statearr_110979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___110981))
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
return (function (p__110998){
var vec__110999 = p__110998;
var v = cljs.core.nth.call(null,vec__110999,(0),null);
var p = cljs.core.nth.call(null,vec__110999,(1),null);
var job = vec__110999;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__67983__auto___111170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___111170,res,vec__110999,v,p,job,jobs,results){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___111170,res,vec__110999,v,p,job,jobs,results){
return (function (state_111006){
var state_val_111007 = (state_111006[(1)]);
if((state_val_111007 === (1))){
var state_111006__$1 = state_111006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111006__$1,(2),res,v);
} else {
if((state_val_111007 === (2))){
var inst_111003 = (state_111006[(2)]);
var inst_111004 = cljs.core.async.close_BANG_.call(null,res);
var state_111006__$1 = (function (){var statearr_111008 = state_111006;
(statearr_111008[(7)] = inst_111003);

return statearr_111008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111006__$1,inst_111004);
} else {
return null;
}
}
});})(c__67983__auto___111170,res,vec__110999,v,p,job,jobs,results))
;
return ((function (switch__67960__auto__,c__67983__auto___111170,res,vec__110999,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0 = (function (){
var statearr_111009 = [null,null,null,null,null,null,null,null];
(statearr_111009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__);

(statearr_111009[(1)] = (1));

return statearr_111009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1 = (function (state_111006){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111010){if((e111010 instanceof Object)){
var ex__67964__auto__ = e111010;
var statearr_111011_111171 = state_111006;
(statearr_111011_111171[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111172 = state_111006;
state_111006 = G__111172;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = function(state_111006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1.call(this,state_111006);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___111170,res,vec__110999,v,p,job,jobs,results))
})();
var state__67985__auto__ = (function (){var statearr_111012 = f__67984__auto__.call(null);
(statearr_111012[(6)] = c__67983__auto___111170);

return statearr_111012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___111170,res,vec__110999,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__111013){
var vec__111014 = p__111013;
var v = cljs.core.nth.call(null,vec__111014,(0),null);
var p = cljs.core.nth.call(null,vec__111014,(1),null);
var job = vec__111014;
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
var n__59171__auto___111173 = n;
var __111174 = (0);
while(true){
if((__111174 < n__59171__auto___111173)){
var G__111017_111175 = type;
var G__111017_111176__$1 = (((G__111017_111175 instanceof cljs.core.Keyword))?G__111017_111175.fqn:null);
switch (G__111017_111176__$1) {
case "compute":
var c__67983__auto___111178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__111174,c__67983__auto___111178,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (__111174,c__67983__auto___111178,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async){
return (function (state_111030){
var state_val_111031 = (state_111030[(1)]);
if((state_val_111031 === (1))){
var state_111030__$1 = state_111030;
var statearr_111032_111179 = state_111030__$1;
(statearr_111032_111179[(2)] = null);

(statearr_111032_111179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111031 === (2))){
var state_111030__$1 = state_111030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111030__$1,(4),jobs);
} else {
if((state_val_111031 === (3))){
var inst_111028 = (state_111030[(2)]);
var state_111030__$1 = state_111030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111030__$1,inst_111028);
} else {
if((state_val_111031 === (4))){
var inst_111020 = (state_111030[(2)]);
var inst_111021 = process.call(null,inst_111020);
var state_111030__$1 = state_111030;
if(cljs.core.truth_(inst_111021)){
var statearr_111033_111180 = state_111030__$1;
(statearr_111033_111180[(1)] = (5));

} else {
var statearr_111034_111181 = state_111030__$1;
(statearr_111034_111181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111031 === (5))){
var state_111030__$1 = state_111030;
var statearr_111035_111182 = state_111030__$1;
(statearr_111035_111182[(2)] = null);

(statearr_111035_111182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111031 === (6))){
var state_111030__$1 = state_111030;
var statearr_111036_111183 = state_111030__$1;
(statearr_111036_111183[(2)] = null);

(statearr_111036_111183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111031 === (7))){
var inst_111026 = (state_111030[(2)]);
var state_111030__$1 = state_111030;
var statearr_111037_111184 = state_111030__$1;
(statearr_111037_111184[(2)] = inst_111026);

(statearr_111037_111184[(1)] = (3));


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
});})(__111174,c__67983__auto___111178,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async))
;
return ((function (__111174,switch__67960__auto__,c__67983__auto___111178,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0 = (function (){
var statearr_111038 = [null,null,null,null,null,null,null];
(statearr_111038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__);

(statearr_111038[(1)] = (1));

return statearr_111038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1 = (function (state_111030){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111039){if((e111039 instanceof Object)){
var ex__67964__auto__ = e111039;
var statearr_111040_111185 = state_111030;
(statearr_111040_111185[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111186 = state_111030;
state_111030 = G__111186;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = function(state_111030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1.call(this,state_111030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__;
})()
;})(__111174,switch__67960__auto__,c__67983__auto___111178,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async))
})();
var state__67985__auto__ = (function (){var statearr_111041 = f__67984__auto__.call(null);
(statearr_111041[(6)] = c__67983__auto___111178);

return statearr_111041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(__111174,c__67983__auto___111178,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async))
);


break;
case "async":
var c__67983__auto___111187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__111174,c__67983__auto___111187,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (__111174,c__67983__auto___111187,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async){
return (function (state_111054){
var state_val_111055 = (state_111054[(1)]);
if((state_val_111055 === (1))){
var state_111054__$1 = state_111054;
var statearr_111056_111188 = state_111054__$1;
(statearr_111056_111188[(2)] = null);

(statearr_111056_111188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111055 === (2))){
var state_111054__$1 = state_111054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111054__$1,(4),jobs);
} else {
if((state_val_111055 === (3))){
var inst_111052 = (state_111054[(2)]);
var state_111054__$1 = state_111054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111054__$1,inst_111052);
} else {
if((state_val_111055 === (4))){
var inst_111044 = (state_111054[(2)]);
var inst_111045 = async.call(null,inst_111044);
var state_111054__$1 = state_111054;
if(cljs.core.truth_(inst_111045)){
var statearr_111057_111189 = state_111054__$1;
(statearr_111057_111189[(1)] = (5));

} else {
var statearr_111058_111190 = state_111054__$1;
(statearr_111058_111190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111055 === (5))){
var state_111054__$1 = state_111054;
var statearr_111059_111191 = state_111054__$1;
(statearr_111059_111191[(2)] = null);

(statearr_111059_111191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111055 === (6))){
var state_111054__$1 = state_111054;
var statearr_111060_111192 = state_111054__$1;
(statearr_111060_111192[(2)] = null);

(statearr_111060_111192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111055 === (7))){
var inst_111050 = (state_111054[(2)]);
var state_111054__$1 = state_111054;
var statearr_111061_111193 = state_111054__$1;
(statearr_111061_111193[(2)] = inst_111050);

(statearr_111061_111193[(1)] = (3));


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
});})(__111174,c__67983__auto___111187,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async))
;
return ((function (__111174,switch__67960__auto__,c__67983__auto___111187,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0 = (function (){
var statearr_111062 = [null,null,null,null,null,null,null];
(statearr_111062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__);

(statearr_111062[(1)] = (1));

return statearr_111062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1 = (function (state_111054){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111063){if((e111063 instanceof Object)){
var ex__67964__auto__ = e111063;
var statearr_111064_111194 = state_111054;
(statearr_111064_111194[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111195 = state_111054;
state_111054 = G__111195;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = function(state_111054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1.call(this,state_111054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__;
})()
;})(__111174,switch__67960__auto__,c__67983__auto___111187,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async))
})();
var state__67985__auto__ = (function (){var statearr_111065 = f__67984__auto__.call(null);
(statearr_111065[(6)] = c__67983__auto___111187);

return statearr_111065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(__111174,c__67983__auto___111187,G__111017_111175,G__111017_111176__$1,n__59171__auto___111173,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__111017_111176__$1)].join('')));

}

var G__111196 = (__111174 + (1));
__111174 = G__111196;
continue;
} else {
}
break;
}

var c__67983__auto___111197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___111197,jobs,results,process,async){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___111197,jobs,results,process,async){
return (function (state_111087){
var state_val_111088 = (state_111087[(1)]);
if((state_val_111088 === (1))){
var state_111087__$1 = state_111087;
var statearr_111089_111198 = state_111087__$1;
(statearr_111089_111198[(2)] = null);

(statearr_111089_111198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111088 === (2))){
var state_111087__$1 = state_111087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111087__$1,(4),from);
} else {
if((state_val_111088 === (3))){
var inst_111085 = (state_111087[(2)]);
var state_111087__$1 = state_111087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111087__$1,inst_111085);
} else {
if((state_val_111088 === (4))){
var inst_111068 = (state_111087[(7)]);
var inst_111068__$1 = (state_111087[(2)]);
var inst_111069 = (inst_111068__$1 == null);
var state_111087__$1 = (function (){var statearr_111090 = state_111087;
(statearr_111090[(7)] = inst_111068__$1);

return statearr_111090;
})();
if(cljs.core.truth_(inst_111069)){
var statearr_111091_111199 = state_111087__$1;
(statearr_111091_111199[(1)] = (5));

} else {
var statearr_111092_111200 = state_111087__$1;
(statearr_111092_111200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111088 === (5))){
var inst_111071 = cljs.core.async.close_BANG_.call(null,jobs);
var state_111087__$1 = state_111087;
var statearr_111093_111201 = state_111087__$1;
(statearr_111093_111201[(2)] = inst_111071);

(statearr_111093_111201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111088 === (6))){
var inst_111073 = (state_111087[(8)]);
var inst_111068 = (state_111087[(7)]);
var inst_111073__$1 = cljs.core.async.chan.call(null,(1));
var inst_111074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_111075 = [inst_111068,inst_111073__$1];
var inst_111076 = (new cljs.core.PersistentVector(null,2,(5),inst_111074,inst_111075,null));
var state_111087__$1 = (function (){var statearr_111094 = state_111087;
(statearr_111094[(8)] = inst_111073__$1);

return statearr_111094;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111087__$1,(8),jobs,inst_111076);
} else {
if((state_val_111088 === (7))){
var inst_111083 = (state_111087[(2)]);
var state_111087__$1 = state_111087;
var statearr_111095_111202 = state_111087__$1;
(statearr_111095_111202[(2)] = inst_111083);

(statearr_111095_111202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111088 === (8))){
var inst_111073 = (state_111087[(8)]);
var inst_111078 = (state_111087[(2)]);
var state_111087__$1 = (function (){var statearr_111096 = state_111087;
(statearr_111096[(9)] = inst_111078);

return statearr_111096;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111087__$1,(9),results,inst_111073);
} else {
if((state_val_111088 === (9))){
var inst_111080 = (state_111087[(2)]);
var state_111087__$1 = (function (){var statearr_111097 = state_111087;
(statearr_111097[(10)] = inst_111080);

return statearr_111097;
})();
var statearr_111098_111203 = state_111087__$1;
(statearr_111098_111203[(2)] = null);

(statearr_111098_111203[(1)] = (2));


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
});})(c__67983__auto___111197,jobs,results,process,async))
;
return ((function (switch__67960__auto__,c__67983__auto___111197,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0 = (function (){
var statearr_111099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_111099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__);

(statearr_111099[(1)] = (1));

return statearr_111099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1 = (function (state_111087){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111100){if((e111100 instanceof Object)){
var ex__67964__auto__ = e111100;
var statearr_111101_111204 = state_111087;
(statearr_111101_111204[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111205 = state_111087;
state_111087 = G__111205;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = function(state_111087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1.call(this,state_111087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___111197,jobs,results,process,async))
})();
var state__67985__auto__ = (function (){var statearr_111102 = f__67984__auto__.call(null);
(statearr_111102[(6)] = c__67983__auto___111197);

return statearr_111102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___111197,jobs,results,process,async))
);


var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__,jobs,results,process,async){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__,jobs,results,process,async){
return (function (state_111140){
var state_val_111141 = (state_111140[(1)]);
if((state_val_111141 === (7))){
var inst_111136 = (state_111140[(2)]);
var state_111140__$1 = state_111140;
var statearr_111142_111206 = state_111140__$1;
(statearr_111142_111206[(2)] = inst_111136);

(statearr_111142_111206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (20))){
var state_111140__$1 = state_111140;
var statearr_111143_111207 = state_111140__$1;
(statearr_111143_111207[(2)] = null);

(statearr_111143_111207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (1))){
var state_111140__$1 = state_111140;
var statearr_111144_111208 = state_111140__$1;
(statearr_111144_111208[(2)] = null);

(statearr_111144_111208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (4))){
var inst_111105 = (state_111140[(7)]);
var inst_111105__$1 = (state_111140[(2)]);
var inst_111106 = (inst_111105__$1 == null);
var state_111140__$1 = (function (){var statearr_111145 = state_111140;
(statearr_111145[(7)] = inst_111105__$1);

return statearr_111145;
})();
if(cljs.core.truth_(inst_111106)){
var statearr_111146_111209 = state_111140__$1;
(statearr_111146_111209[(1)] = (5));

} else {
var statearr_111147_111210 = state_111140__$1;
(statearr_111147_111210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (15))){
var inst_111118 = (state_111140[(8)]);
var state_111140__$1 = state_111140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111140__$1,(18),to,inst_111118);
} else {
if((state_val_111141 === (21))){
var inst_111131 = (state_111140[(2)]);
var state_111140__$1 = state_111140;
var statearr_111148_111211 = state_111140__$1;
(statearr_111148_111211[(2)] = inst_111131);

(statearr_111148_111211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (13))){
var inst_111133 = (state_111140[(2)]);
var state_111140__$1 = (function (){var statearr_111149 = state_111140;
(statearr_111149[(9)] = inst_111133);

return statearr_111149;
})();
var statearr_111150_111212 = state_111140__$1;
(statearr_111150_111212[(2)] = null);

(statearr_111150_111212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (6))){
var inst_111105 = (state_111140[(7)]);
var state_111140__$1 = state_111140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111140__$1,(11),inst_111105);
} else {
if((state_val_111141 === (17))){
var inst_111126 = (state_111140[(2)]);
var state_111140__$1 = state_111140;
if(cljs.core.truth_(inst_111126)){
var statearr_111151_111213 = state_111140__$1;
(statearr_111151_111213[(1)] = (19));

} else {
var statearr_111152_111214 = state_111140__$1;
(statearr_111152_111214[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (3))){
var inst_111138 = (state_111140[(2)]);
var state_111140__$1 = state_111140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111140__$1,inst_111138);
} else {
if((state_val_111141 === (12))){
var inst_111115 = (state_111140[(10)]);
var state_111140__$1 = state_111140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111140__$1,(14),inst_111115);
} else {
if((state_val_111141 === (2))){
var state_111140__$1 = state_111140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111140__$1,(4),results);
} else {
if((state_val_111141 === (19))){
var state_111140__$1 = state_111140;
var statearr_111153_111215 = state_111140__$1;
(statearr_111153_111215[(2)] = null);

(statearr_111153_111215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (11))){
var inst_111115 = (state_111140[(2)]);
var state_111140__$1 = (function (){var statearr_111154 = state_111140;
(statearr_111154[(10)] = inst_111115);

return statearr_111154;
})();
var statearr_111155_111216 = state_111140__$1;
(statearr_111155_111216[(2)] = null);

(statearr_111155_111216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (9))){
var state_111140__$1 = state_111140;
var statearr_111156_111217 = state_111140__$1;
(statearr_111156_111217[(2)] = null);

(statearr_111156_111217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (5))){
var state_111140__$1 = state_111140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_111157_111218 = state_111140__$1;
(statearr_111157_111218[(1)] = (8));

} else {
var statearr_111158_111219 = state_111140__$1;
(statearr_111158_111219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (14))){
var inst_111120 = (state_111140[(11)]);
var inst_111118 = (state_111140[(8)]);
var inst_111118__$1 = (state_111140[(2)]);
var inst_111119 = (inst_111118__$1 == null);
var inst_111120__$1 = cljs.core.not.call(null,inst_111119);
var state_111140__$1 = (function (){var statearr_111159 = state_111140;
(statearr_111159[(11)] = inst_111120__$1);

(statearr_111159[(8)] = inst_111118__$1);

return statearr_111159;
})();
if(inst_111120__$1){
var statearr_111160_111220 = state_111140__$1;
(statearr_111160_111220[(1)] = (15));

} else {
var statearr_111161_111221 = state_111140__$1;
(statearr_111161_111221[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (16))){
var inst_111120 = (state_111140[(11)]);
var state_111140__$1 = state_111140;
var statearr_111162_111222 = state_111140__$1;
(statearr_111162_111222[(2)] = inst_111120);

(statearr_111162_111222[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (10))){
var inst_111112 = (state_111140[(2)]);
var state_111140__$1 = state_111140;
var statearr_111163_111223 = state_111140__$1;
(statearr_111163_111223[(2)] = inst_111112);

(statearr_111163_111223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (18))){
var inst_111123 = (state_111140[(2)]);
var state_111140__$1 = state_111140;
var statearr_111164_111224 = state_111140__$1;
(statearr_111164_111224[(2)] = inst_111123);

(statearr_111164_111224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111141 === (8))){
var inst_111109 = cljs.core.async.close_BANG_.call(null,to);
var state_111140__$1 = state_111140;
var statearr_111165_111225 = state_111140__$1;
(statearr_111165_111225[(2)] = inst_111109);

(statearr_111165_111225[(1)] = (10));


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
});})(c__67983__auto__,jobs,results,process,async))
;
return ((function (switch__67960__auto__,c__67983__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0 = (function (){
var statearr_111166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__);

(statearr_111166[(1)] = (1));

return statearr_111166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1 = (function (state_111140){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111167){if((e111167 instanceof Object)){
var ex__67964__auto__ = e111167;
var statearr_111168_111226 = state_111140;
(statearr_111168_111226[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111227 = state_111140;
state_111140 = G__111227;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__ = function(state_111140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1.call(this,state_111140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__67961__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__,jobs,results,process,async))
})();
var state__67985__auto__ = (function (){var statearr_111169 = f__67984__auto__.call(null);
(statearr_111169[(6)] = c__67983__auto__);

return statearr_111169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__,jobs,results,process,async))
);

return c__67983__auto__;
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
var G__111229 = arguments.length;
switch (G__111229) {
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
var G__111232 = arguments.length;
switch (G__111232) {
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
var G__111235 = arguments.length;
switch (G__111235) {
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
var c__67983__auto___111284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___111284,tc,fc){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___111284,tc,fc){
return (function (state_111261){
var state_val_111262 = (state_111261[(1)]);
if((state_val_111262 === (7))){
var inst_111257 = (state_111261[(2)]);
var state_111261__$1 = state_111261;
var statearr_111263_111285 = state_111261__$1;
(statearr_111263_111285[(2)] = inst_111257);

(statearr_111263_111285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (1))){
var state_111261__$1 = state_111261;
var statearr_111264_111286 = state_111261__$1;
(statearr_111264_111286[(2)] = null);

(statearr_111264_111286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (4))){
var inst_111238 = (state_111261[(7)]);
var inst_111238__$1 = (state_111261[(2)]);
var inst_111239 = (inst_111238__$1 == null);
var state_111261__$1 = (function (){var statearr_111265 = state_111261;
(statearr_111265[(7)] = inst_111238__$1);

return statearr_111265;
})();
if(cljs.core.truth_(inst_111239)){
var statearr_111266_111287 = state_111261__$1;
(statearr_111266_111287[(1)] = (5));

} else {
var statearr_111267_111288 = state_111261__$1;
(statearr_111267_111288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (13))){
var state_111261__$1 = state_111261;
var statearr_111268_111289 = state_111261__$1;
(statearr_111268_111289[(2)] = null);

(statearr_111268_111289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (6))){
var inst_111238 = (state_111261[(7)]);
var inst_111244 = p.call(null,inst_111238);
var state_111261__$1 = state_111261;
if(cljs.core.truth_(inst_111244)){
var statearr_111269_111290 = state_111261__$1;
(statearr_111269_111290[(1)] = (9));

} else {
var statearr_111270_111291 = state_111261__$1;
(statearr_111270_111291[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (3))){
var inst_111259 = (state_111261[(2)]);
var state_111261__$1 = state_111261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111261__$1,inst_111259);
} else {
if((state_val_111262 === (12))){
var state_111261__$1 = state_111261;
var statearr_111271_111292 = state_111261__$1;
(statearr_111271_111292[(2)] = null);

(statearr_111271_111292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (2))){
var state_111261__$1 = state_111261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111261__$1,(4),ch);
} else {
if((state_val_111262 === (11))){
var inst_111238 = (state_111261[(7)]);
var inst_111248 = (state_111261[(2)]);
var state_111261__$1 = state_111261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111261__$1,(8),inst_111248,inst_111238);
} else {
if((state_val_111262 === (9))){
var state_111261__$1 = state_111261;
var statearr_111272_111293 = state_111261__$1;
(statearr_111272_111293[(2)] = tc);

(statearr_111272_111293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (5))){
var inst_111241 = cljs.core.async.close_BANG_.call(null,tc);
var inst_111242 = cljs.core.async.close_BANG_.call(null,fc);
var state_111261__$1 = (function (){var statearr_111273 = state_111261;
(statearr_111273[(8)] = inst_111241);

return statearr_111273;
})();
var statearr_111274_111294 = state_111261__$1;
(statearr_111274_111294[(2)] = inst_111242);

(statearr_111274_111294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (14))){
var inst_111255 = (state_111261[(2)]);
var state_111261__$1 = state_111261;
var statearr_111275_111295 = state_111261__$1;
(statearr_111275_111295[(2)] = inst_111255);

(statearr_111275_111295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (10))){
var state_111261__$1 = state_111261;
var statearr_111276_111296 = state_111261__$1;
(statearr_111276_111296[(2)] = fc);

(statearr_111276_111296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111262 === (8))){
var inst_111250 = (state_111261[(2)]);
var state_111261__$1 = state_111261;
if(cljs.core.truth_(inst_111250)){
var statearr_111277_111297 = state_111261__$1;
(statearr_111277_111297[(1)] = (12));

} else {
var statearr_111278_111298 = state_111261__$1;
(statearr_111278_111298[(1)] = (13));

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
});})(c__67983__auto___111284,tc,fc))
;
return ((function (switch__67960__auto__,c__67983__auto___111284,tc,fc){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_111279 = [null,null,null,null,null,null,null,null,null];
(statearr_111279[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_111279[(1)] = (1));

return statearr_111279;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_111261){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111280){if((e111280 instanceof Object)){
var ex__67964__auto__ = e111280;
var statearr_111281_111299 = state_111261;
(statearr_111281_111299[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111300 = state_111261;
state_111261 = G__111300;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_111261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_111261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___111284,tc,fc))
})();
var state__67985__auto__ = (function (){var statearr_111282 = f__67984__auto__.call(null);
(statearr_111282[(6)] = c__67983__auto___111284);

return statearr_111282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___111284,tc,fc))
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
var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__){
return (function (state_111321){
var state_val_111322 = (state_111321[(1)]);
if((state_val_111322 === (7))){
var inst_111317 = (state_111321[(2)]);
var state_111321__$1 = state_111321;
var statearr_111323_111341 = state_111321__$1;
(statearr_111323_111341[(2)] = inst_111317);

(statearr_111323_111341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111322 === (1))){
var inst_111301 = init;
var state_111321__$1 = (function (){var statearr_111324 = state_111321;
(statearr_111324[(7)] = inst_111301);

return statearr_111324;
})();
var statearr_111325_111342 = state_111321__$1;
(statearr_111325_111342[(2)] = null);

(statearr_111325_111342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111322 === (4))){
var inst_111304 = (state_111321[(8)]);
var inst_111304__$1 = (state_111321[(2)]);
var inst_111305 = (inst_111304__$1 == null);
var state_111321__$1 = (function (){var statearr_111326 = state_111321;
(statearr_111326[(8)] = inst_111304__$1);

return statearr_111326;
})();
if(cljs.core.truth_(inst_111305)){
var statearr_111327_111343 = state_111321__$1;
(statearr_111327_111343[(1)] = (5));

} else {
var statearr_111328_111344 = state_111321__$1;
(statearr_111328_111344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111322 === (6))){
var inst_111308 = (state_111321[(9)]);
var inst_111301 = (state_111321[(7)]);
var inst_111304 = (state_111321[(8)]);
var inst_111308__$1 = f.call(null,inst_111301,inst_111304);
var inst_111309 = cljs.core.reduced_QMARK_.call(null,inst_111308__$1);
var state_111321__$1 = (function (){var statearr_111329 = state_111321;
(statearr_111329[(9)] = inst_111308__$1);

return statearr_111329;
})();
if(inst_111309){
var statearr_111330_111345 = state_111321__$1;
(statearr_111330_111345[(1)] = (8));

} else {
var statearr_111331_111346 = state_111321__$1;
(statearr_111331_111346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111322 === (3))){
var inst_111319 = (state_111321[(2)]);
var state_111321__$1 = state_111321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111321__$1,inst_111319);
} else {
if((state_val_111322 === (2))){
var state_111321__$1 = state_111321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111321__$1,(4),ch);
} else {
if((state_val_111322 === (9))){
var inst_111308 = (state_111321[(9)]);
var inst_111301 = inst_111308;
var state_111321__$1 = (function (){var statearr_111332 = state_111321;
(statearr_111332[(7)] = inst_111301);

return statearr_111332;
})();
var statearr_111333_111347 = state_111321__$1;
(statearr_111333_111347[(2)] = null);

(statearr_111333_111347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111322 === (5))){
var inst_111301 = (state_111321[(7)]);
var state_111321__$1 = state_111321;
var statearr_111334_111348 = state_111321__$1;
(statearr_111334_111348[(2)] = inst_111301);

(statearr_111334_111348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111322 === (10))){
var inst_111315 = (state_111321[(2)]);
var state_111321__$1 = state_111321;
var statearr_111335_111349 = state_111321__$1;
(statearr_111335_111349[(2)] = inst_111315);

(statearr_111335_111349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111322 === (8))){
var inst_111308 = (state_111321[(9)]);
var inst_111311 = cljs.core.deref.call(null,inst_111308);
var state_111321__$1 = state_111321;
var statearr_111336_111350 = state_111321__$1;
(statearr_111336_111350[(2)] = inst_111311);

(statearr_111336_111350[(1)] = (10));


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
});})(c__67983__auto__))
;
return ((function (switch__67960__auto__,c__67983__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__67961__auto__ = null;
var cljs$core$async$reduce_$_state_machine__67961__auto____0 = (function (){
var statearr_111337 = [null,null,null,null,null,null,null,null,null,null];
(statearr_111337[(0)] = cljs$core$async$reduce_$_state_machine__67961__auto__);

(statearr_111337[(1)] = (1));

return statearr_111337;
});
var cljs$core$async$reduce_$_state_machine__67961__auto____1 = (function (state_111321){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111338){if((e111338 instanceof Object)){
var ex__67964__auto__ = e111338;
var statearr_111339_111351 = state_111321;
(statearr_111339_111351[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111352 = state_111321;
state_111321 = G__111352;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__67961__auto__ = function(state_111321){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__67961__auto____1.call(this,state_111321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__67961__auto____0;
cljs$core$async$reduce_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__67961__auto____1;
return cljs$core$async$reduce_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__))
})();
var state__67985__auto__ = (function (){var statearr_111340 = f__67984__auto__.call(null);
(statearr_111340[(6)] = c__67983__auto__);

return statearr_111340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__))
);

return c__67983__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__,f__$1){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__,f__$1){
return (function (state_111358){
var state_val_111359 = (state_111358[(1)]);
if((state_val_111359 === (1))){
var inst_111353 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_111358__$1 = state_111358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111358__$1,(2),inst_111353);
} else {
if((state_val_111359 === (2))){
var inst_111355 = (state_111358[(2)]);
var inst_111356 = f__$1.call(null,inst_111355);
var state_111358__$1 = state_111358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111358__$1,inst_111356);
} else {
return null;
}
}
});})(c__67983__auto__,f__$1))
;
return ((function (switch__67960__auto__,c__67983__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__67961__auto__ = null;
var cljs$core$async$transduce_$_state_machine__67961__auto____0 = (function (){
var statearr_111360 = [null,null,null,null,null,null,null];
(statearr_111360[(0)] = cljs$core$async$transduce_$_state_machine__67961__auto__);

(statearr_111360[(1)] = (1));

return statearr_111360;
});
var cljs$core$async$transduce_$_state_machine__67961__auto____1 = (function (state_111358){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111361){if((e111361 instanceof Object)){
var ex__67964__auto__ = e111361;
var statearr_111362_111364 = state_111358;
(statearr_111362_111364[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111365 = state_111358;
state_111358 = G__111365;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__67961__auto__ = function(state_111358){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__67961__auto____1.call(this,state_111358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__67961__auto____0;
cljs$core$async$transduce_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__67961__auto____1;
return cljs$core$async$transduce_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__,f__$1))
})();
var state__67985__auto__ = (function (){var statearr_111363 = f__67984__auto__.call(null);
(statearr_111363[(6)] = c__67983__auto__);

return statearr_111363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__,f__$1))
);

return c__67983__auto__;
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
var G__111367 = arguments.length;
switch (G__111367) {
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
var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__){
return (function (state_111392){
var state_val_111393 = (state_111392[(1)]);
if((state_val_111393 === (7))){
var inst_111374 = (state_111392[(2)]);
var state_111392__$1 = state_111392;
var statearr_111394_111415 = state_111392__$1;
(statearr_111394_111415[(2)] = inst_111374);

(statearr_111394_111415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (1))){
var inst_111368 = cljs.core.seq.call(null,coll);
var inst_111369 = inst_111368;
var state_111392__$1 = (function (){var statearr_111395 = state_111392;
(statearr_111395[(7)] = inst_111369);

return statearr_111395;
})();
var statearr_111396_111416 = state_111392__$1;
(statearr_111396_111416[(2)] = null);

(statearr_111396_111416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (4))){
var inst_111369 = (state_111392[(7)]);
var inst_111372 = cljs.core.first.call(null,inst_111369);
var state_111392__$1 = state_111392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111392__$1,(7),ch,inst_111372);
} else {
if((state_val_111393 === (13))){
var inst_111386 = (state_111392[(2)]);
var state_111392__$1 = state_111392;
var statearr_111397_111417 = state_111392__$1;
(statearr_111397_111417[(2)] = inst_111386);

(statearr_111397_111417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (6))){
var inst_111377 = (state_111392[(2)]);
var state_111392__$1 = state_111392;
if(cljs.core.truth_(inst_111377)){
var statearr_111398_111418 = state_111392__$1;
(statearr_111398_111418[(1)] = (8));

} else {
var statearr_111399_111419 = state_111392__$1;
(statearr_111399_111419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (3))){
var inst_111390 = (state_111392[(2)]);
var state_111392__$1 = state_111392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111392__$1,inst_111390);
} else {
if((state_val_111393 === (12))){
var state_111392__$1 = state_111392;
var statearr_111400_111420 = state_111392__$1;
(statearr_111400_111420[(2)] = null);

(statearr_111400_111420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (2))){
var inst_111369 = (state_111392[(7)]);
var state_111392__$1 = state_111392;
if(cljs.core.truth_(inst_111369)){
var statearr_111401_111421 = state_111392__$1;
(statearr_111401_111421[(1)] = (4));

} else {
var statearr_111402_111422 = state_111392__$1;
(statearr_111402_111422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (11))){
var inst_111383 = cljs.core.async.close_BANG_.call(null,ch);
var state_111392__$1 = state_111392;
var statearr_111403_111423 = state_111392__$1;
(statearr_111403_111423[(2)] = inst_111383);

(statearr_111403_111423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (9))){
var state_111392__$1 = state_111392;
if(cljs.core.truth_(close_QMARK_)){
var statearr_111404_111424 = state_111392__$1;
(statearr_111404_111424[(1)] = (11));

} else {
var statearr_111405_111425 = state_111392__$1;
(statearr_111405_111425[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (5))){
var inst_111369 = (state_111392[(7)]);
var state_111392__$1 = state_111392;
var statearr_111406_111426 = state_111392__$1;
(statearr_111406_111426[(2)] = inst_111369);

(statearr_111406_111426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (10))){
var inst_111388 = (state_111392[(2)]);
var state_111392__$1 = state_111392;
var statearr_111407_111427 = state_111392__$1;
(statearr_111407_111427[(2)] = inst_111388);

(statearr_111407_111427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111393 === (8))){
var inst_111369 = (state_111392[(7)]);
var inst_111379 = cljs.core.next.call(null,inst_111369);
var inst_111369__$1 = inst_111379;
var state_111392__$1 = (function (){var statearr_111408 = state_111392;
(statearr_111408[(7)] = inst_111369__$1);

return statearr_111408;
})();
var statearr_111409_111428 = state_111392__$1;
(statearr_111409_111428[(2)] = null);

(statearr_111409_111428[(1)] = (2));


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
});})(c__67983__auto__))
;
return ((function (switch__67960__auto__,c__67983__auto__){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_111410 = [null,null,null,null,null,null,null,null];
(statearr_111410[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_111410[(1)] = (1));

return statearr_111410;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_111392){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111411){if((e111411 instanceof Object)){
var ex__67964__auto__ = e111411;
var statearr_111412_111429 = state_111392;
(statearr_111412_111429[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111430 = state_111392;
state_111392 = G__111430;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_111392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_111392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__))
})();
var state__67985__auto__ = (function (){var statearr_111413 = f__67984__auto__.call(null);
(statearr_111413[(6)] = c__67983__auto__);

return statearr_111413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__))
);

return c__67983__auto__;
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
var x__58861__auto__ = (((_ == null))?null:_);
var m__58862__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,_);
} else {
var m__58862__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,_);
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
var x__58861__auto__ = (((m == null))?null:m);
var m__58862__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__58862__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__58861__auto__ = (((m == null))?null:m);
var m__58862__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,m,ch);
} else {
var m__58862__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,m,ch);
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
var x__58861__auto__ = (((m == null))?null:m);
var m__58862__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,m);
} else {
var m__58862__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async111431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async111431 = (function (ch,cs,meta111432){
this.ch = ch;
this.cs = cs;
this.meta111432 = meta111432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async111431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_111433,meta111432__$1){
var self__ = this;
var _111433__$1 = this;
return (new cljs.core.async.t_cljs$core$async111431(self__.ch,self__.cs,meta111432__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async111431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_111433){
var self__ = this;
var _111433__$1 = this;
return self__.meta111432;
});})(cs))
;

cljs.core.async.t_cljs$core$async111431.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async111431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async111431.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async111431.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async111431.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async111431.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async111431.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta111432","meta111432",1310223018,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async111431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async111431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async111431";

cljs.core.async.t_cljs$core$async111431.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async111431");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async111431 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async111431(ch__$1,cs__$1,meta111432){
return (new cljs.core.async.t_cljs$core$async111431(ch__$1,cs__$1,meta111432));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async111431(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__67983__auto___111653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___111653,cs,m,dchan,dctr,done){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___111653,cs,m,dchan,dctr,done){
return (function (state_111568){
var state_val_111569 = (state_111568[(1)]);
if((state_val_111569 === (7))){
var inst_111564 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111570_111654 = state_111568__$1;
(statearr_111570_111654[(2)] = inst_111564);

(statearr_111570_111654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (20))){
var inst_111467 = (state_111568[(7)]);
var inst_111479 = cljs.core.first.call(null,inst_111467);
var inst_111480 = cljs.core.nth.call(null,inst_111479,(0),null);
var inst_111481 = cljs.core.nth.call(null,inst_111479,(1),null);
var state_111568__$1 = (function (){var statearr_111571 = state_111568;
(statearr_111571[(8)] = inst_111480);

return statearr_111571;
})();
if(cljs.core.truth_(inst_111481)){
var statearr_111572_111655 = state_111568__$1;
(statearr_111572_111655[(1)] = (22));

} else {
var statearr_111573_111656 = state_111568__$1;
(statearr_111573_111656[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (27))){
var inst_111509 = (state_111568[(9)]);
var inst_111516 = (state_111568[(10)]);
var inst_111436 = (state_111568[(11)]);
var inst_111511 = (state_111568[(12)]);
var inst_111516__$1 = cljs.core._nth.call(null,inst_111509,inst_111511);
var inst_111517 = cljs.core.async.put_BANG_.call(null,inst_111516__$1,inst_111436,done);
var state_111568__$1 = (function (){var statearr_111574 = state_111568;
(statearr_111574[(10)] = inst_111516__$1);

return statearr_111574;
})();
if(cljs.core.truth_(inst_111517)){
var statearr_111575_111657 = state_111568__$1;
(statearr_111575_111657[(1)] = (30));

} else {
var statearr_111576_111658 = state_111568__$1;
(statearr_111576_111658[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (1))){
var state_111568__$1 = state_111568;
var statearr_111577_111659 = state_111568__$1;
(statearr_111577_111659[(2)] = null);

(statearr_111577_111659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (24))){
var inst_111467 = (state_111568[(7)]);
var inst_111486 = (state_111568[(2)]);
var inst_111487 = cljs.core.next.call(null,inst_111467);
var inst_111445 = inst_111487;
var inst_111446 = null;
var inst_111447 = (0);
var inst_111448 = (0);
var state_111568__$1 = (function (){var statearr_111578 = state_111568;
(statearr_111578[(13)] = inst_111446);

(statearr_111578[(14)] = inst_111486);

(statearr_111578[(15)] = inst_111448);

(statearr_111578[(16)] = inst_111445);

(statearr_111578[(17)] = inst_111447);

return statearr_111578;
})();
var statearr_111579_111660 = state_111568__$1;
(statearr_111579_111660[(2)] = null);

(statearr_111579_111660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (39))){
var state_111568__$1 = state_111568;
var statearr_111583_111661 = state_111568__$1;
(statearr_111583_111661[(2)] = null);

(statearr_111583_111661[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (4))){
var inst_111436 = (state_111568[(11)]);
var inst_111436__$1 = (state_111568[(2)]);
var inst_111437 = (inst_111436__$1 == null);
var state_111568__$1 = (function (){var statearr_111584 = state_111568;
(statearr_111584[(11)] = inst_111436__$1);

return statearr_111584;
})();
if(cljs.core.truth_(inst_111437)){
var statearr_111585_111662 = state_111568__$1;
(statearr_111585_111662[(1)] = (5));

} else {
var statearr_111586_111663 = state_111568__$1;
(statearr_111586_111663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (15))){
var inst_111446 = (state_111568[(13)]);
var inst_111448 = (state_111568[(15)]);
var inst_111445 = (state_111568[(16)]);
var inst_111447 = (state_111568[(17)]);
var inst_111463 = (state_111568[(2)]);
var inst_111464 = (inst_111448 + (1));
var tmp111580 = inst_111446;
var tmp111581 = inst_111445;
var tmp111582 = inst_111447;
var inst_111445__$1 = tmp111581;
var inst_111446__$1 = tmp111580;
var inst_111447__$1 = tmp111582;
var inst_111448__$1 = inst_111464;
var state_111568__$1 = (function (){var statearr_111587 = state_111568;
(statearr_111587[(13)] = inst_111446__$1);

(statearr_111587[(18)] = inst_111463);

(statearr_111587[(15)] = inst_111448__$1);

(statearr_111587[(16)] = inst_111445__$1);

(statearr_111587[(17)] = inst_111447__$1);

return statearr_111587;
})();
var statearr_111588_111664 = state_111568__$1;
(statearr_111588_111664[(2)] = null);

(statearr_111588_111664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (21))){
var inst_111490 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111592_111665 = state_111568__$1;
(statearr_111592_111665[(2)] = inst_111490);

(statearr_111592_111665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (31))){
var inst_111516 = (state_111568[(10)]);
var inst_111520 = done.call(null,null);
var inst_111521 = cljs.core.async.untap_STAR_.call(null,m,inst_111516);
var state_111568__$1 = (function (){var statearr_111593 = state_111568;
(statearr_111593[(19)] = inst_111520);

return statearr_111593;
})();
var statearr_111594_111666 = state_111568__$1;
(statearr_111594_111666[(2)] = inst_111521);

(statearr_111594_111666[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (32))){
var inst_111509 = (state_111568[(9)]);
var inst_111508 = (state_111568[(20)]);
var inst_111510 = (state_111568[(21)]);
var inst_111511 = (state_111568[(12)]);
var inst_111523 = (state_111568[(2)]);
var inst_111524 = (inst_111511 + (1));
var tmp111589 = inst_111509;
var tmp111590 = inst_111508;
var tmp111591 = inst_111510;
var inst_111508__$1 = tmp111590;
var inst_111509__$1 = tmp111589;
var inst_111510__$1 = tmp111591;
var inst_111511__$1 = inst_111524;
var state_111568__$1 = (function (){var statearr_111595 = state_111568;
(statearr_111595[(9)] = inst_111509__$1);

(statearr_111595[(22)] = inst_111523);

(statearr_111595[(20)] = inst_111508__$1);

(statearr_111595[(21)] = inst_111510__$1);

(statearr_111595[(12)] = inst_111511__$1);

return statearr_111595;
})();
var statearr_111596_111667 = state_111568__$1;
(statearr_111596_111667[(2)] = null);

(statearr_111596_111667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (40))){
var inst_111536 = (state_111568[(23)]);
var inst_111540 = done.call(null,null);
var inst_111541 = cljs.core.async.untap_STAR_.call(null,m,inst_111536);
var state_111568__$1 = (function (){var statearr_111597 = state_111568;
(statearr_111597[(24)] = inst_111540);

return statearr_111597;
})();
var statearr_111598_111668 = state_111568__$1;
(statearr_111598_111668[(2)] = inst_111541);

(statearr_111598_111668[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (33))){
var inst_111527 = (state_111568[(25)]);
var inst_111529 = cljs.core.chunked_seq_QMARK_.call(null,inst_111527);
var state_111568__$1 = state_111568;
if(inst_111529){
var statearr_111599_111669 = state_111568__$1;
(statearr_111599_111669[(1)] = (36));

} else {
var statearr_111600_111670 = state_111568__$1;
(statearr_111600_111670[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (13))){
var inst_111457 = (state_111568[(26)]);
var inst_111460 = cljs.core.async.close_BANG_.call(null,inst_111457);
var state_111568__$1 = state_111568;
var statearr_111601_111671 = state_111568__$1;
(statearr_111601_111671[(2)] = inst_111460);

(statearr_111601_111671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (22))){
var inst_111480 = (state_111568[(8)]);
var inst_111483 = cljs.core.async.close_BANG_.call(null,inst_111480);
var state_111568__$1 = state_111568;
var statearr_111602_111672 = state_111568__$1;
(statearr_111602_111672[(2)] = inst_111483);

(statearr_111602_111672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (36))){
var inst_111527 = (state_111568[(25)]);
var inst_111531 = cljs.core.chunk_first.call(null,inst_111527);
var inst_111532 = cljs.core.chunk_rest.call(null,inst_111527);
var inst_111533 = cljs.core.count.call(null,inst_111531);
var inst_111508 = inst_111532;
var inst_111509 = inst_111531;
var inst_111510 = inst_111533;
var inst_111511 = (0);
var state_111568__$1 = (function (){var statearr_111603 = state_111568;
(statearr_111603[(9)] = inst_111509);

(statearr_111603[(20)] = inst_111508);

(statearr_111603[(21)] = inst_111510);

(statearr_111603[(12)] = inst_111511);

return statearr_111603;
})();
var statearr_111604_111673 = state_111568__$1;
(statearr_111604_111673[(2)] = null);

(statearr_111604_111673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (41))){
var inst_111527 = (state_111568[(25)]);
var inst_111543 = (state_111568[(2)]);
var inst_111544 = cljs.core.next.call(null,inst_111527);
var inst_111508 = inst_111544;
var inst_111509 = null;
var inst_111510 = (0);
var inst_111511 = (0);
var state_111568__$1 = (function (){var statearr_111605 = state_111568;
(statearr_111605[(9)] = inst_111509);

(statearr_111605[(27)] = inst_111543);

(statearr_111605[(20)] = inst_111508);

(statearr_111605[(21)] = inst_111510);

(statearr_111605[(12)] = inst_111511);

return statearr_111605;
})();
var statearr_111606_111674 = state_111568__$1;
(statearr_111606_111674[(2)] = null);

(statearr_111606_111674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (43))){
var state_111568__$1 = state_111568;
var statearr_111607_111675 = state_111568__$1;
(statearr_111607_111675[(2)] = null);

(statearr_111607_111675[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (29))){
var inst_111552 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111608_111676 = state_111568__$1;
(statearr_111608_111676[(2)] = inst_111552);

(statearr_111608_111676[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (44))){
var inst_111561 = (state_111568[(2)]);
var state_111568__$1 = (function (){var statearr_111609 = state_111568;
(statearr_111609[(28)] = inst_111561);

return statearr_111609;
})();
var statearr_111610_111677 = state_111568__$1;
(statearr_111610_111677[(2)] = null);

(statearr_111610_111677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (6))){
var inst_111500 = (state_111568[(29)]);
var inst_111499 = cljs.core.deref.call(null,cs);
var inst_111500__$1 = cljs.core.keys.call(null,inst_111499);
var inst_111501 = cljs.core.count.call(null,inst_111500__$1);
var inst_111502 = cljs.core.reset_BANG_.call(null,dctr,inst_111501);
var inst_111507 = cljs.core.seq.call(null,inst_111500__$1);
var inst_111508 = inst_111507;
var inst_111509 = null;
var inst_111510 = (0);
var inst_111511 = (0);
var state_111568__$1 = (function (){var statearr_111611 = state_111568;
(statearr_111611[(9)] = inst_111509);

(statearr_111611[(30)] = inst_111502);

(statearr_111611[(20)] = inst_111508);

(statearr_111611[(21)] = inst_111510);

(statearr_111611[(12)] = inst_111511);

(statearr_111611[(29)] = inst_111500__$1);

return statearr_111611;
})();
var statearr_111612_111678 = state_111568__$1;
(statearr_111612_111678[(2)] = null);

(statearr_111612_111678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (28))){
var inst_111527 = (state_111568[(25)]);
var inst_111508 = (state_111568[(20)]);
var inst_111527__$1 = cljs.core.seq.call(null,inst_111508);
var state_111568__$1 = (function (){var statearr_111613 = state_111568;
(statearr_111613[(25)] = inst_111527__$1);

return statearr_111613;
})();
if(inst_111527__$1){
var statearr_111614_111679 = state_111568__$1;
(statearr_111614_111679[(1)] = (33));

} else {
var statearr_111615_111680 = state_111568__$1;
(statearr_111615_111680[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (25))){
var inst_111510 = (state_111568[(21)]);
var inst_111511 = (state_111568[(12)]);
var inst_111513 = (inst_111511 < inst_111510);
var inst_111514 = inst_111513;
var state_111568__$1 = state_111568;
if(cljs.core.truth_(inst_111514)){
var statearr_111616_111681 = state_111568__$1;
(statearr_111616_111681[(1)] = (27));

} else {
var statearr_111617_111682 = state_111568__$1;
(statearr_111617_111682[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (34))){
var state_111568__$1 = state_111568;
var statearr_111618_111683 = state_111568__$1;
(statearr_111618_111683[(2)] = null);

(statearr_111618_111683[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (17))){
var state_111568__$1 = state_111568;
var statearr_111619_111684 = state_111568__$1;
(statearr_111619_111684[(2)] = null);

(statearr_111619_111684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (3))){
var inst_111566 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111568__$1,inst_111566);
} else {
if((state_val_111569 === (12))){
var inst_111495 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111620_111685 = state_111568__$1;
(statearr_111620_111685[(2)] = inst_111495);

(statearr_111620_111685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (2))){
var state_111568__$1 = state_111568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111568__$1,(4),ch);
} else {
if((state_val_111569 === (23))){
var state_111568__$1 = state_111568;
var statearr_111621_111686 = state_111568__$1;
(statearr_111621_111686[(2)] = null);

(statearr_111621_111686[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (35))){
var inst_111550 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111622_111687 = state_111568__$1;
(statearr_111622_111687[(2)] = inst_111550);

(statearr_111622_111687[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (19))){
var inst_111467 = (state_111568[(7)]);
var inst_111471 = cljs.core.chunk_first.call(null,inst_111467);
var inst_111472 = cljs.core.chunk_rest.call(null,inst_111467);
var inst_111473 = cljs.core.count.call(null,inst_111471);
var inst_111445 = inst_111472;
var inst_111446 = inst_111471;
var inst_111447 = inst_111473;
var inst_111448 = (0);
var state_111568__$1 = (function (){var statearr_111623 = state_111568;
(statearr_111623[(13)] = inst_111446);

(statearr_111623[(15)] = inst_111448);

(statearr_111623[(16)] = inst_111445);

(statearr_111623[(17)] = inst_111447);

return statearr_111623;
})();
var statearr_111624_111688 = state_111568__$1;
(statearr_111624_111688[(2)] = null);

(statearr_111624_111688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (11))){
var inst_111445 = (state_111568[(16)]);
var inst_111467 = (state_111568[(7)]);
var inst_111467__$1 = cljs.core.seq.call(null,inst_111445);
var state_111568__$1 = (function (){var statearr_111625 = state_111568;
(statearr_111625[(7)] = inst_111467__$1);

return statearr_111625;
})();
if(inst_111467__$1){
var statearr_111626_111689 = state_111568__$1;
(statearr_111626_111689[(1)] = (16));

} else {
var statearr_111627_111690 = state_111568__$1;
(statearr_111627_111690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (9))){
var inst_111497 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111628_111691 = state_111568__$1;
(statearr_111628_111691[(2)] = inst_111497);

(statearr_111628_111691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (5))){
var inst_111443 = cljs.core.deref.call(null,cs);
var inst_111444 = cljs.core.seq.call(null,inst_111443);
var inst_111445 = inst_111444;
var inst_111446 = null;
var inst_111447 = (0);
var inst_111448 = (0);
var state_111568__$1 = (function (){var statearr_111629 = state_111568;
(statearr_111629[(13)] = inst_111446);

(statearr_111629[(15)] = inst_111448);

(statearr_111629[(16)] = inst_111445);

(statearr_111629[(17)] = inst_111447);

return statearr_111629;
})();
var statearr_111630_111692 = state_111568__$1;
(statearr_111630_111692[(2)] = null);

(statearr_111630_111692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (14))){
var state_111568__$1 = state_111568;
var statearr_111631_111693 = state_111568__$1;
(statearr_111631_111693[(2)] = null);

(statearr_111631_111693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (45))){
var inst_111558 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111632_111694 = state_111568__$1;
(statearr_111632_111694[(2)] = inst_111558);

(statearr_111632_111694[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (26))){
var inst_111500 = (state_111568[(29)]);
var inst_111554 = (state_111568[(2)]);
var inst_111555 = cljs.core.seq.call(null,inst_111500);
var state_111568__$1 = (function (){var statearr_111633 = state_111568;
(statearr_111633[(31)] = inst_111554);

return statearr_111633;
})();
if(inst_111555){
var statearr_111634_111695 = state_111568__$1;
(statearr_111634_111695[(1)] = (42));

} else {
var statearr_111635_111696 = state_111568__$1;
(statearr_111635_111696[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (16))){
var inst_111467 = (state_111568[(7)]);
var inst_111469 = cljs.core.chunked_seq_QMARK_.call(null,inst_111467);
var state_111568__$1 = state_111568;
if(inst_111469){
var statearr_111636_111697 = state_111568__$1;
(statearr_111636_111697[(1)] = (19));

} else {
var statearr_111637_111698 = state_111568__$1;
(statearr_111637_111698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (38))){
var inst_111547 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111638_111699 = state_111568__$1;
(statearr_111638_111699[(2)] = inst_111547);

(statearr_111638_111699[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (30))){
var state_111568__$1 = state_111568;
var statearr_111639_111700 = state_111568__$1;
(statearr_111639_111700[(2)] = null);

(statearr_111639_111700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (10))){
var inst_111446 = (state_111568[(13)]);
var inst_111448 = (state_111568[(15)]);
var inst_111456 = cljs.core._nth.call(null,inst_111446,inst_111448);
var inst_111457 = cljs.core.nth.call(null,inst_111456,(0),null);
var inst_111458 = cljs.core.nth.call(null,inst_111456,(1),null);
var state_111568__$1 = (function (){var statearr_111640 = state_111568;
(statearr_111640[(26)] = inst_111457);

return statearr_111640;
})();
if(cljs.core.truth_(inst_111458)){
var statearr_111641_111701 = state_111568__$1;
(statearr_111641_111701[(1)] = (13));

} else {
var statearr_111642_111702 = state_111568__$1;
(statearr_111642_111702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (18))){
var inst_111493 = (state_111568[(2)]);
var state_111568__$1 = state_111568;
var statearr_111643_111703 = state_111568__$1;
(statearr_111643_111703[(2)] = inst_111493);

(statearr_111643_111703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (42))){
var state_111568__$1 = state_111568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111568__$1,(45),dchan);
} else {
if((state_val_111569 === (37))){
var inst_111527 = (state_111568[(25)]);
var inst_111536 = (state_111568[(23)]);
var inst_111436 = (state_111568[(11)]);
var inst_111536__$1 = cljs.core.first.call(null,inst_111527);
var inst_111537 = cljs.core.async.put_BANG_.call(null,inst_111536__$1,inst_111436,done);
var state_111568__$1 = (function (){var statearr_111644 = state_111568;
(statearr_111644[(23)] = inst_111536__$1);

return statearr_111644;
})();
if(cljs.core.truth_(inst_111537)){
var statearr_111645_111704 = state_111568__$1;
(statearr_111645_111704[(1)] = (39));

} else {
var statearr_111646_111705 = state_111568__$1;
(statearr_111646_111705[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111569 === (8))){
var inst_111448 = (state_111568[(15)]);
var inst_111447 = (state_111568[(17)]);
var inst_111450 = (inst_111448 < inst_111447);
var inst_111451 = inst_111450;
var state_111568__$1 = state_111568;
if(cljs.core.truth_(inst_111451)){
var statearr_111647_111706 = state_111568__$1;
(statearr_111647_111706[(1)] = (10));

} else {
var statearr_111648_111707 = state_111568__$1;
(statearr_111648_111707[(1)] = (11));

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
});})(c__67983__auto___111653,cs,m,dchan,dctr,done))
;
return ((function (switch__67960__auto__,c__67983__auto___111653,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__67961__auto__ = null;
var cljs$core$async$mult_$_state_machine__67961__auto____0 = (function (){
var statearr_111649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111649[(0)] = cljs$core$async$mult_$_state_machine__67961__auto__);

(statearr_111649[(1)] = (1));

return statearr_111649;
});
var cljs$core$async$mult_$_state_machine__67961__auto____1 = (function (state_111568){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111650){if((e111650 instanceof Object)){
var ex__67964__auto__ = e111650;
var statearr_111651_111708 = state_111568;
(statearr_111651_111708[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111709 = state_111568;
state_111568 = G__111709;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__67961__auto__ = function(state_111568){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__67961__auto____1.call(this,state_111568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__67961__auto____0;
cljs$core$async$mult_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__67961__auto____1;
return cljs$core$async$mult_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___111653,cs,m,dchan,dctr,done))
})();
var state__67985__auto__ = (function (){var statearr_111652 = f__67984__auto__.call(null);
(statearr_111652[(6)] = c__67983__auto___111653);

return statearr_111652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___111653,cs,m,dchan,dctr,done))
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
var G__111711 = arguments.length;
switch (G__111711) {
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
var x__58861__auto__ = (((m == null))?null:m);
var m__58862__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,m,ch);
} else {
var m__58862__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,m,ch);
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
var x__58861__auto__ = (((m == null))?null:m);
var m__58862__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,m,ch);
} else {
var m__58862__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,m,ch);
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
var x__58861__auto__ = (((m == null))?null:m);
var m__58862__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,m);
} else {
var m__58862__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,m);
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
var x__58861__auto__ = (((m == null))?null:m);
var m__58862__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,m,state_map);
} else {
var m__58862__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,m,state_map);
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
var x__58861__auto__ = (((m == null))?null:m);
var m__58862__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,m,mode);
} else {
var m__58862__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__59412__auto__ = [];
var len__59405__auto___111723 = arguments.length;
var i__59406__auto___111724 = (0);
while(true){
if((i__59406__auto___111724 < len__59405__auto___111723)){
args__59412__auto__.push((arguments[i__59406__auto___111724]));

var G__111725 = (i__59406__auto___111724 + (1));
i__59406__auto___111724 = G__111725;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((3) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__59413__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__111717){
var map__111718 = p__111717;
var map__111718__$1 = ((((!((map__111718 == null)))?((((map__111718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__111718):map__111718);
var opts = map__111718__$1;
var statearr_111720_111726 = state;
(statearr_111720_111726[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__111718,map__111718__$1,opts){
return (function (val){
var statearr_111721_111727 = state;
(statearr_111721_111727[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__111718,map__111718__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_111722_111728 = state;
(statearr_111722_111728[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq111713){
var G__111714 = cljs.core.first.call(null,seq111713);
var seq111713__$1 = cljs.core.next.call(null,seq111713);
var G__111715 = cljs.core.first.call(null,seq111713__$1);
var seq111713__$2 = cljs.core.next.call(null,seq111713__$1);
var G__111716 = cljs.core.first.call(null,seq111713__$2);
var seq111713__$3 = cljs.core.next.call(null,seq111713__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__111714,G__111715,G__111716,seq111713__$3);
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
if(typeof cljs.core.async.t_cljs$core$async111729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async111729 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta111730){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta111730 = meta111730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_111731,meta111730__$1){
var self__ = this;
var _111731__$1 = this;
return (new cljs.core.async.t_cljs$core$async111729(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta111730__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_111731){
var self__ = this;
var _111731__$1 = this;
return self__.meta111730;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async111729.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async111729.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta111730","meta111730",998146902,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async111729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async111729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async111729";

cljs.core.async.t_cljs$core$async111729.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async111729");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async111729 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async111729(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta111730){
return (new cljs.core.async.t_cljs$core$async111729(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta111730));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async111729(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__67983__auto___111893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___111893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___111893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_111833){
var state_val_111834 = (state_111833[(1)]);
if((state_val_111834 === (7))){
var inst_111748 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
var statearr_111835_111894 = state_111833__$1;
(statearr_111835_111894[(2)] = inst_111748);

(statearr_111835_111894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (20))){
var inst_111760 = (state_111833[(7)]);
var state_111833__$1 = state_111833;
var statearr_111836_111895 = state_111833__$1;
(statearr_111836_111895[(2)] = inst_111760);

(statearr_111836_111895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (27))){
var state_111833__$1 = state_111833;
var statearr_111837_111896 = state_111833__$1;
(statearr_111837_111896[(2)] = null);

(statearr_111837_111896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (1))){
var inst_111735 = (state_111833[(8)]);
var inst_111735__$1 = calc_state.call(null);
var inst_111737 = (inst_111735__$1 == null);
var inst_111738 = cljs.core.not.call(null,inst_111737);
var state_111833__$1 = (function (){var statearr_111838 = state_111833;
(statearr_111838[(8)] = inst_111735__$1);

return statearr_111838;
})();
if(inst_111738){
var statearr_111839_111897 = state_111833__$1;
(statearr_111839_111897[(1)] = (2));

} else {
var statearr_111840_111898 = state_111833__$1;
(statearr_111840_111898[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (24))){
var inst_111784 = (state_111833[(9)]);
var inst_111807 = (state_111833[(10)]);
var inst_111793 = (state_111833[(11)]);
var inst_111807__$1 = inst_111784.call(null,inst_111793);
var state_111833__$1 = (function (){var statearr_111841 = state_111833;
(statearr_111841[(10)] = inst_111807__$1);

return statearr_111841;
})();
if(cljs.core.truth_(inst_111807__$1)){
var statearr_111842_111899 = state_111833__$1;
(statearr_111842_111899[(1)] = (29));

} else {
var statearr_111843_111900 = state_111833__$1;
(statearr_111843_111900[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (4))){
var inst_111751 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
if(cljs.core.truth_(inst_111751)){
var statearr_111844_111901 = state_111833__$1;
(statearr_111844_111901[(1)] = (8));

} else {
var statearr_111845_111902 = state_111833__$1;
(statearr_111845_111902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (15))){
var inst_111778 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
if(cljs.core.truth_(inst_111778)){
var statearr_111846_111903 = state_111833__$1;
(statearr_111846_111903[(1)] = (19));

} else {
var statearr_111847_111904 = state_111833__$1;
(statearr_111847_111904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (21))){
var inst_111783 = (state_111833[(12)]);
var inst_111783__$1 = (state_111833[(2)]);
var inst_111784 = cljs.core.get.call(null,inst_111783__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_111785 = cljs.core.get.call(null,inst_111783__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_111786 = cljs.core.get.call(null,inst_111783__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_111833__$1 = (function (){var statearr_111848 = state_111833;
(statearr_111848[(13)] = inst_111785);

(statearr_111848[(9)] = inst_111784);

(statearr_111848[(12)] = inst_111783__$1);

return statearr_111848;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_111833__$1,(22),inst_111786);
} else {
if((state_val_111834 === (31))){
var inst_111815 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
if(cljs.core.truth_(inst_111815)){
var statearr_111849_111905 = state_111833__$1;
(statearr_111849_111905[(1)] = (32));

} else {
var statearr_111850_111906 = state_111833__$1;
(statearr_111850_111906[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (32))){
var inst_111792 = (state_111833[(14)]);
var state_111833__$1 = state_111833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111833__$1,(35),out,inst_111792);
} else {
if((state_val_111834 === (33))){
var inst_111783 = (state_111833[(12)]);
var inst_111760 = inst_111783;
var state_111833__$1 = (function (){var statearr_111851 = state_111833;
(statearr_111851[(7)] = inst_111760);

return statearr_111851;
})();
var statearr_111852_111907 = state_111833__$1;
(statearr_111852_111907[(2)] = null);

(statearr_111852_111907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (13))){
var inst_111760 = (state_111833[(7)]);
var inst_111767 = inst_111760.cljs$lang$protocol_mask$partition0$;
var inst_111768 = (inst_111767 & (64));
var inst_111769 = inst_111760.cljs$core$ISeq$;
var inst_111770 = (cljs.core.PROTOCOL_SENTINEL === inst_111769);
var inst_111771 = (inst_111768) || (inst_111770);
var state_111833__$1 = state_111833;
if(cljs.core.truth_(inst_111771)){
var statearr_111853_111908 = state_111833__$1;
(statearr_111853_111908[(1)] = (16));

} else {
var statearr_111854_111909 = state_111833__$1;
(statearr_111854_111909[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (22))){
var inst_111792 = (state_111833[(14)]);
var inst_111793 = (state_111833[(11)]);
var inst_111791 = (state_111833[(2)]);
var inst_111792__$1 = cljs.core.nth.call(null,inst_111791,(0),null);
var inst_111793__$1 = cljs.core.nth.call(null,inst_111791,(1),null);
var inst_111794 = (inst_111792__$1 == null);
var inst_111795 = cljs.core._EQ_.call(null,inst_111793__$1,change);
var inst_111796 = (inst_111794) || (inst_111795);
var state_111833__$1 = (function (){var statearr_111855 = state_111833;
(statearr_111855[(14)] = inst_111792__$1);

(statearr_111855[(11)] = inst_111793__$1);

return statearr_111855;
})();
if(cljs.core.truth_(inst_111796)){
var statearr_111856_111910 = state_111833__$1;
(statearr_111856_111910[(1)] = (23));

} else {
var statearr_111857_111911 = state_111833__$1;
(statearr_111857_111911[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (36))){
var inst_111783 = (state_111833[(12)]);
var inst_111760 = inst_111783;
var state_111833__$1 = (function (){var statearr_111858 = state_111833;
(statearr_111858[(7)] = inst_111760);

return statearr_111858;
})();
var statearr_111859_111912 = state_111833__$1;
(statearr_111859_111912[(2)] = null);

(statearr_111859_111912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (29))){
var inst_111807 = (state_111833[(10)]);
var state_111833__$1 = state_111833;
var statearr_111860_111913 = state_111833__$1;
(statearr_111860_111913[(2)] = inst_111807);

(statearr_111860_111913[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (6))){
var state_111833__$1 = state_111833;
var statearr_111861_111914 = state_111833__$1;
(statearr_111861_111914[(2)] = false);

(statearr_111861_111914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (28))){
var inst_111803 = (state_111833[(2)]);
var inst_111804 = calc_state.call(null);
var inst_111760 = inst_111804;
var state_111833__$1 = (function (){var statearr_111862 = state_111833;
(statearr_111862[(7)] = inst_111760);

(statearr_111862[(15)] = inst_111803);

return statearr_111862;
})();
var statearr_111863_111915 = state_111833__$1;
(statearr_111863_111915[(2)] = null);

(statearr_111863_111915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (25))){
var inst_111829 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
var statearr_111864_111916 = state_111833__$1;
(statearr_111864_111916[(2)] = inst_111829);

(statearr_111864_111916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (34))){
var inst_111827 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
var statearr_111865_111917 = state_111833__$1;
(statearr_111865_111917[(2)] = inst_111827);

(statearr_111865_111917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (17))){
var state_111833__$1 = state_111833;
var statearr_111866_111918 = state_111833__$1;
(statearr_111866_111918[(2)] = false);

(statearr_111866_111918[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (3))){
var state_111833__$1 = state_111833;
var statearr_111867_111919 = state_111833__$1;
(statearr_111867_111919[(2)] = false);

(statearr_111867_111919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (12))){
var inst_111831 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111833__$1,inst_111831);
} else {
if((state_val_111834 === (2))){
var inst_111735 = (state_111833[(8)]);
var inst_111740 = inst_111735.cljs$lang$protocol_mask$partition0$;
var inst_111741 = (inst_111740 & (64));
var inst_111742 = inst_111735.cljs$core$ISeq$;
var inst_111743 = (cljs.core.PROTOCOL_SENTINEL === inst_111742);
var inst_111744 = (inst_111741) || (inst_111743);
var state_111833__$1 = state_111833;
if(cljs.core.truth_(inst_111744)){
var statearr_111868_111920 = state_111833__$1;
(statearr_111868_111920[(1)] = (5));

} else {
var statearr_111869_111921 = state_111833__$1;
(statearr_111869_111921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (23))){
var inst_111792 = (state_111833[(14)]);
var inst_111798 = (inst_111792 == null);
var state_111833__$1 = state_111833;
if(cljs.core.truth_(inst_111798)){
var statearr_111870_111922 = state_111833__$1;
(statearr_111870_111922[(1)] = (26));

} else {
var statearr_111871_111923 = state_111833__$1;
(statearr_111871_111923[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (35))){
var inst_111818 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
if(cljs.core.truth_(inst_111818)){
var statearr_111872_111924 = state_111833__$1;
(statearr_111872_111924[(1)] = (36));

} else {
var statearr_111873_111925 = state_111833__$1;
(statearr_111873_111925[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (19))){
var inst_111760 = (state_111833[(7)]);
var inst_111780 = cljs.core.apply.call(null,cljs.core.hash_map,inst_111760);
var state_111833__$1 = state_111833;
var statearr_111874_111926 = state_111833__$1;
(statearr_111874_111926[(2)] = inst_111780);

(statearr_111874_111926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (11))){
var inst_111760 = (state_111833[(7)]);
var inst_111764 = (inst_111760 == null);
var inst_111765 = cljs.core.not.call(null,inst_111764);
var state_111833__$1 = state_111833;
if(inst_111765){
var statearr_111875_111927 = state_111833__$1;
(statearr_111875_111927[(1)] = (13));

} else {
var statearr_111876_111928 = state_111833__$1;
(statearr_111876_111928[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (9))){
var inst_111735 = (state_111833[(8)]);
var state_111833__$1 = state_111833;
var statearr_111877_111929 = state_111833__$1;
(statearr_111877_111929[(2)] = inst_111735);

(statearr_111877_111929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (5))){
var state_111833__$1 = state_111833;
var statearr_111878_111930 = state_111833__$1;
(statearr_111878_111930[(2)] = true);

(statearr_111878_111930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (14))){
var state_111833__$1 = state_111833;
var statearr_111879_111931 = state_111833__$1;
(statearr_111879_111931[(2)] = false);

(statearr_111879_111931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (26))){
var inst_111793 = (state_111833[(11)]);
var inst_111800 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_111793);
var state_111833__$1 = state_111833;
var statearr_111880_111932 = state_111833__$1;
(statearr_111880_111932[(2)] = inst_111800);

(statearr_111880_111932[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (16))){
var state_111833__$1 = state_111833;
var statearr_111881_111933 = state_111833__$1;
(statearr_111881_111933[(2)] = true);

(statearr_111881_111933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (38))){
var inst_111823 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
var statearr_111882_111934 = state_111833__$1;
(statearr_111882_111934[(2)] = inst_111823);

(statearr_111882_111934[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (30))){
var inst_111785 = (state_111833[(13)]);
var inst_111784 = (state_111833[(9)]);
var inst_111793 = (state_111833[(11)]);
var inst_111810 = cljs.core.empty_QMARK_.call(null,inst_111784);
var inst_111811 = inst_111785.call(null,inst_111793);
var inst_111812 = cljs.core.not.call(null,inst_111811);
var inst_111813 = (inst_111810) && (inst_111812);
var state_111833__$1 = state_111833;
var statearr_111883_111935 = state_111833__$1;
(statearr_111883_111935[(2)] = inst_111813);

(statearr_111883_111935[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (10))){
var inst_111735 = (state_111833[(8)]);
var inst_111756 = (state_111833[(2)]);
var inst_111757 = cljs.core.get.call(null,inst_111756,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_111758 = cljs.core.get.call(null,inst_111756,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_111759 = cljs.core.get.call(null,inst_111756,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_111760 = inst_111735;
var state_111833__$1 = (function (){var statearr_111884 = state_111833;
(statearr_111884[(16)] = inst_111758);

(statearr_111884[(7)] = inst_111760);

(statearr_111884[(17)] = inst_111757);

(statearr_111884[(18)] = inst_111759);

return statearr_111884;
})();
var statearr_111885_111936 = state_111833__$1;
(statearr_111885_111936[(2)] = null);

(statearr_111885_111936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (18))){
var inst_111775 = (state_111833[(2)]);
var state_111833__$1 = state_111833;
var statearr_111886_111937 = state_111833__$1;
(statearr_111886_111937[(2)] = inst_111775);

(statearr_111886_111937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (37))){
var state_111833__$1 = state_111833;
var statearr_111887_111938 = state_111833__$1;
(statearr_111887_111938[(2)] = null);

(statearr_111887_111938[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111834 === (8))){
var inst_111735 = (state_111833[(8)]);
var inst_111753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_111735);
var state_111833__$1 = state_111833;
var statearr_111888_111939 = state_111833__$1;
(statearr_111888_111939[(2)] = inst_111753);

(statearr_111888_111939[(1)] = (10));


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
});})(c__67983__auto___111893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__67960__auto__,c__67983__auto___111893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__67961__auto__ = null;
var cljs$core$async$mix_$_state_machine__67961__auto____0 = (function (){
var statearr_111889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111889[(0)] = cljs$core$async$mix_$_state_machine__67961__auto__);

(statearr_111889[(1)] = (1));

return statearr_111889;
});
var cljs$core$async$mix_$_state_machine__67961__auto____1 = (function (state_111833){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_111833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e111890){if((e111890 instanceof Object)){
var ex__67964__auto__ = e111890;
var statearr_111891_111940 = state_111833;
(statearr_111891_111940[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111941 = state_111833;
state_111833 = G__111941;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__67961__auto__ = function(state_111833){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__67961__auto____1.call(this,state_111833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__67961__auto____0;
cljs$core$async$mix_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__67961__auto____1;
return cljs$core$async$mix_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___111893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__67985__auto__ = (function (){var statearr_111892 = f__67984__auto__.call(null);
(statearr_111892[(6)] = c__67983__auto___111893);

return statearr_111892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___111893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__58861__auto__ = (((p == null))?null:p);
var m__58862__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__58862__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__58861__auto__ = (((p == null))?null:p);
var m__58862__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,p,v,ch);
} else {
var m__58862__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__111943 = arguments.length;
switch (G__111943) {
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
var x__58861__auto__ = (((p == null))?null:p);
var m__58862__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,p);
} else {
var m__58862__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,p);
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
var x__58861__auto__ = (((p == null))?null:p);
var m__58862__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,p,v);
} else {
var m__58862__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,p,v);
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
var G__111947 = arguments.length;
switch (G__111947) {
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
var or__58128__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__58128__auto__,mults){
return (function (p1__111945_SHARP_){
if(cljs.core.truth_(p1__111945_SHARP_.call(null,topic))){
return p1__111945_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__111945_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__58128__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async111948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async111948 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta111949){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta111949 = meta111949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_111950,meta111949__$1){
var self__ = this;
var _111950__$1 = this;
return (new cljs.core.async.t_cljs$core$async111948(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta111949__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_111950){
var self__ = this;
var _111950__$1 = this;
return self__.meta111949;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111948.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111948.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta111949","meta111949",-1507486128,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async111948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async111948";

cljs.core.async.t_cljs$core$async111948.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async111948");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async111948 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async111948(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta111949){
return (new cljs.core.async.t_cljs$core$async111948(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta111949));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async111948(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__67983__auto___112068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___112068,mults,ensure_mult,p){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___112068,mults,ensure_mult,p){
return (function (state_112022){
var state_val_112023 = (state_112022[(1)]);
if((state_val_112023 === (7))){
var inst_112018 = (state_112022[(2)]);
var state_112022__$1 = state_112022;
var statearr_112024_112069 = state_112022__$1;
(statearr_112024_112069[(2)] = inst_112018);

(statearr_112024_112069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (20))){
var state_112022__$1 = state_112022;
var statearr_112025_112070 = state_112022__$1;
(statearr_112025_112070[(2)] = null);

(statearr_112025_112070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (1))){
var state_112022__$1 = state_112022;
var statearr_112026_112071 = state_112022__$1;
(statearr_112026_112071[(2)] = null);

(statearr_112026_112071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (24))){
var inst_112001 = (state_112022[(7)]);
var inst_112010 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_112001);
var state_112022__$1 = state_112022;
var statearr_112027_112072 = state_112022__$1;
(statearr_112027_112072[(2)] = inst_112010);

(statearr_112027_112072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (4))){
var inst_111953 = (state_112022[(8)]);
var inst_111953__$1 = (state_112022[(2)]);
var inst_111954 = (inst_111953__$1 == null);
var state_112022__$1 = (function (){var statearr_112028 = state_112022;
(statearr_112028[(8)] = inst_111953__$1);

return statearr_112028;
})();
if(cljs.core.truth_(inst_111954)){
var statearr_112029_112073 = state_112022__$1;
(statearr_112029_112073[(1)] = (5));

} else {
var statearr_112030_112074 = state_112022__$1;
(statearr_112030_112074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (15))){
var inst_111995 = (state_112022[(2)]);
var state_112022__$1 = state_112022;
var statearr_112031_112075 = state_112022__$1;
(statearr_112031_112075[(2)] = inst_111995);

(statearr_112031_112075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (21))){
var inst_112015 = (state_112022[(2)]);
var state_112022__$1 = (function (){var statearr_112032 = state_112022;
(statearr_112032[(9)] = inst_112015);

return statearr_112032;
})();
var statearr_112033_112076 = state_112022__$1;
(statearr_112033_112076[(2)] = null);

(statearr_112033_112076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (13))){
var inst_111977 = (state_112022[(10)]);
var inst_111979 = cljs.core.chunked_seq_QMARK_.call(null,inst_111977);
var state_112022__$1 = state_112022;
if(inst_111979){
var statearr_112034_112077 = state_112022__$1;
(statearr_112034_112077[(1)] = (16));

} else {
var statearr_112035_112078 = state_112022__$1;
(statearr_112035_112078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (22))){
var inst_112007 = (state_112022[(2)]);
var state_112022__$1 = state_112022;
if(cljs.core.truth_(inst_112007)){
var statearr_112036_112079 = state_112022__$1;
(statearr_112036_112079[(1)] = (23));

} else {
var statearr_112037_112080 = state_112022__$1;
(statearr_112037_112080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (6))){
var inst_111953 = (state_112022[(8)]);
var inst_112003 = (state_112022[(11)]);
var inst_112001 = (state_112022[(7)]);
var inst_112001__$1 = topic_fn.call(null,inst_111953);
var inst_112002 = cljs.core.deref.call(null,mults);
var inst_112003__$1 = cljs.core.get.call(null,inst_112002,inst_112001__$1);
var state_112022__$1 = (function (){var statearr_112038 = state_112022;
(statearr_112038[(11)] = inst_112003__$1);

(statearr_112038[(7)] = inst_112001__$1);

return statearr_112038;
})();
if(cljs.core.truth_(inst_112003__$1)){
var statearr_112039_112081 = state_112022__$1;
(statearr_112039_112081[(1)] = (19));

} else {
var statearr_112040_112082 = state_112022__$1;
(statearr_112040_112082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (25))){
var inst_112012 = (state_112022[(2)]);
var state_112022__$1 = state_112022;
var statearr_112041_112083 = state_112022__$1;
(statearr_112041_112083[(2)] = inst_112012);

(statearr_112041_112083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (17))){
var inst_111977 = (state_112022[(10)]);
var inst_111986 = cljs.core.first.call(null,inst_111977);
var inst_111987 = cljs.core.async.muxch_STAR_.call(null,inst_111986);
var inst_111988 = cljs.core.async.close_BANG_.call(null,inst_111987);
var inst_111989 = cljs.core.next.call(null,inst_111977);
var inst_111963 = inst_111989;
var inst_111964 = null;
var inst_111965 = (0);
var inst_111966 = (0);
var state_112022__$1 = (function (){var statearr_112042 = state_112022;
(statearr_112042[(12)] = inst_111966);

(statearr_112042[(13)] = inst_111964);

(statearr_112042[(14)] = inst_111963);

(statearr_112042[(15)] = inst_111965);

(statearr_112042[(16)] = inst_111988);

return statearr_112042;
})();
var statearr_112043_112084 = state_112022__$1;
(statearr_112043_112084[(2)] = null);

(statearr_112043_112084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (3))){
var inst_112020 = (state_112022[(2)]);
var state_112022__$1 = state_112022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112022__$1,inst_112020);
} else {
if((state_val_112023 === (12))){
var inst_111997 = (state_112022[(2)]);
var state_112022__$1 = state_112022;
var statearr_112044_112085 = state_112022__$1;
(statearr_112044_112085[(2)] = inst_111997);

(statearr_112044_112085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (2))){
var state_112022__$1 = state_112022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112022__$1,(4),ch);
} else {
if((state_val_112023 === (23))){
var state_112022__$1 = state_112022;
var statearr_112045_112086 = state_112022__$1;
(statearr_112045_112086[(2)] = null);

(statearr_112045_112086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (19))){
var inst_111953 = (state_112022[(8)]);
var inst_112003 = (state_112022[(11)]);
var inst_112005 = cljs.core.async.muxch_STAR_.call(null,inst_112003);
var state_112022__$1 = state_112022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112022__$1,(22),inst_112005,inst_111953);
} else {
if((state_val_112023 === (11))){
var inst_111977 = (state_112022[(10)]);
var inst_111963 = (state_112022[(14)]);
var inst_111977__$1 = cljs.core.seq.call(null,inst_111963);
var state_112022__$1 = (function (){var statearr_112046 = state_112022;
(statearr_112046[(10)] = inst_111977__$1);

return statearr_112046;
})();
if(inst_111977__$1){
var statearr_112047_112087 = state_112022__$1;
(statearr_112047_112087[(1)] = (13));

} else {
var statearr_112048_112088 = state_112022__$1;
(statearr_112048_112088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (9))){
var inst_111999 = (state_112022[(2)]);
var state_112022__$1 = state_112022;
var statearr_112049_112089 = state_112022__$1;
(statearr_112049_112089[(2)] = inst_111999);

(statearr_112049_112089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (5))){
var inst_111960 = cljs.core.deref.call(null,mults);
var inst_111961 = cljs.core.vals.call(null,inst_111960);
var inst_111962 = cljs.core.seq.call(null,inst_111961);
var inst_111963 = inst_111962;
var inst_111964 = null;
var inst_111965 = (0);
var inst_111966 = (0);
var state_112022__$1 = (function (){var statearr_112050 = state_112022;
(statearr_112050[(12)] = inst_111966);

(statearr_112050[(13)] = inst_111964);

(statearr_112050[(14)] = inst_111963);

(statearr_112050[(15)] = inst_111965);

return statearr_112050;
})();
var statearr_112051_112090 = state_112022__$1;
(statearr_112051_112090[(2)] = null);

(statearr_112051_112090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (14))){
var state_112022__$1 = state_112022;
var statearr_112055_112091 = state_112022__$1;
(statearr_112055_112091[(2)] = null);

(statearr_112055_112091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (16))){
var inst_111977 = (state_112022[(10)]);
var inst_111981 = cljs.core.chunk_first.call(null,inst_111977);
var inst_111982 = cljs.core.chunk_rest.call(null,inst_111977);
var inst_111983 = cljs.core.count.call(null,inst_111981);
var inst_111963 = inst_111982;
var inst_111964 = inst_111981;
var inst_111965 = inst_111983;
var inst_111966 = (0);
var state_112022__$1 = (function (){var statearr_112056 = state_112022;
(statearr_112056[(12)] = inst_111966);

(statearr_112056[(13)] = inst_111964);

(statearr_112056[(14)] = inst_111963);

(statearr_112056[(15)] = inst_111965);

return statearr_112056;
})();
var statearr_112057_112092 = state_112022__$1;
(statearr_112057_112092[(2)] = null);

(statearr_112057_112092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (10))){
var inst_111966 = (state_112022[(12)]);
var inst_111964 = (state_112022[(13)]);
var inst_111963 = (state_112022[(14)]);
var inst_111965 = (state_112022[(15)]);
var inst_111971 = cljs.core._nth.call(null,inst_111964,inst_111966);
var inst_111972 = cljs.core.async.muxch_STAR_.call(null,inst_111971);
var inst_111973 = cljs.core.async.close_BANG_.call(null,inst_111972);
var inst_111974 = (inst_111966 + (1));
var tmp112052 = inst_111964;
var tmp112053 = inst_111963;
var tmp112054 = inst_111965;
var inst_111963__$1 = tmp112053;
var inst_111964__$1 = tmp112052;
var inst_111965__$1 = tmp112054;
var inst_111966__$1 = inst_111974;
var state_112022__$1 = (function (){var statearr_112058 = state_112022;
(statearr_112058[(12)] = inst_111966__$1);

(statearr_112058[(17)] = inst_111973);

(statearr_112058[(13)] = inst_111964__$1);

(statearr_112058[(14)] = inst_111963__$1);

(statearr_112058[(15)] = inst_111965__$1);

return statearr_112058;
})();
var statearr_112059_112093 = state_112022__$1;
(statearr_112059_112093[(2)] = null);

(statearr_112059_112093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (18))){
var inst_111992 = (state_112022[(2)]);
var state_112022__$1 = state_112022;
var statearr_112060_112094 = state_112022__$1;
(statearr_112060_112094[(2)] = inst_111992);

(statearr_112060_112094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112023 === (8))){
var inst_111966 = (state_112022[(12)]);
var inst_111965 = (state_112022[(15)]);
var inst_111968 = (inst_111966 < inst_111965);
var inst_111969 = inst_111968;
var state_112022__$1 = state_112022;
if(cljs.core.truth_(inst_111969)){
var statearr_112061_112095 = state_112022__$1;
(statearr_112061_112095[(1)] = (10));

} else {
var statearr_112062_112096 = state_112022__$1;
(statearr_112062_112096[(1)] = (11));

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
});})(c__67983__auto___112068,mults,ensure_mult,p))
;
return ((function (switch__67960__auto__,c__67983__auto___112068,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_112063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112063[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_112063[(1)] = (1));

return statearr_112063;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_112022){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112064){if((e112064 instanceof Object)){
var ex__67964__auto__ = e112064;
var statearr_112065_112097 = state_112022;
(statearr_112065_112097[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112098 = state_112022;
state_112022 = G__112098;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_112022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_112022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___112068,mults,ensure_mult,p))
})();
var state__67985__auto__ = (function (){var statearr_112066 = f__67984__auto__.call(null);
(statearr_112066[(6)] = c__67983__auto___112068);

return statearr_112066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___112068,mults,ensure_mult,p))
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
var G__112100 = arguments.length;
switch (G__112100) {
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
var G__112103 = arguments.length;
switch (G__112103) {
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
var G__112106 = arguments.length;
switch (G__112106) {
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
var c__67983__auto___112173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___112173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___112173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_112145){
var state_val_112146 = (state_112145[(1)]);
if((state_val_112146 === (7))){
var state_112145__$1 = state_112145;
var statearr_112147_112174 = state_112145__$1;
(statearr_112147_112174[(2)] = null);

(statearr_112147_112174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (1))){
var state_112145__$1 = state_112145;
var statearr_112148_112175 = state_112145__$1;
(statearr_112148_112175[(2)] = null);

(statearr_112148_112175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (4))){
var inst_112109 = (state_112145[(7)]);
var inst_112111 = (inst_112109 < cnt);
var state_112145__$1 = state_112145;
if(cljs.core.truth_(inst_112111)){
var statearr_112149_112176 = state_112145__$1;
(statearr_112149_112176[(1)] = (6));

} else {
var statearr_112150_112177 = state_112145__$1;
(statearr_112150_112177[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (15))){
var inst_112141 = (state_112145[(2)]);
var state_112145__$1 = state_112145;
var statearr_112151_112178 = state_112145__$1;
(statearr_112151_112178[(2)] = inst_112141);

(statearr_112151_112178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (13))){
var inst_112134 = cljs.core.async.close_BANG_.call(null,out);
var state_112145__$1 = state_112145;
var statearr_112152_112179 = state_112145__$1;
(statearr_112152_112179[(2)] = inst_112134);

(statearr_112152_112179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (6))){
var state_112145__$1 = state_112145;
var statearr_112153_112180 = state_112145__$1;
(statearr_112153_112180[(2)] = null);

(statearr_112153_112180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (3))){
var inst_112143 = (state_112145[(2)]);
var state_112145__$1 = state_112145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112145__$1,inst_112143);
} else {
if((state_val_112146 === (12))){
var inst_112131 = (state_112145[(8)]);
var inst_112131__$1 = (state_112145[(2)]);
var inst_112132 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_112131__$1);
var state_112145__$1 = (function (){var statearr_112154 = state_112145;
(statearr_112154[(8)] = inst_112131__$1);

return statearr_112154;
})();
if(cljs.core.truth_(inst_112132)){
var statearr_112155_112181 = state_112145__$1;
(statearr_112155_112181[(1)] = (13));

} else {
var statearr_112156_112182 = state_112145__$1;
(statearr_112156_112182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (2))){
var inst_112108 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_112109 = (0);
var state_112145__$1 = (function (){var statearr_112157 = state_112145;
(statearr_112157[(7)] = inst_112109);

(statearr_112157[(9)] = inst_112108);

return statearr_112157;
})();
var statearr_112158_112183 = state_112145__$1;
(statearr_112158_112183[(2)] = null);

(statearr_112158_112183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (11))){
var inst_112109 = (state_112145[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_112145,(10),Object,null,(9));
var inst_112118 = chs__$1.call(null,inst_112109);
var inst_112119 = done.call(null,inst_112109);
var inst_112120 = cljs.core.async.take_BANG_.call(null,inst_112118,inst_112119);
var state_112145__$1 = state_112145;
var statearr_112159_112184 = state_112145__$1;
(statearr_112159_112184[(2)] = inst_112120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (9))){
var inst_112109 = (state_112145[(7)]);
var inst_112122 = (state_112145[(2)]);
var inst_112123 = (inst_112109 + (1));
var inst_112109__$1 = inst_112123;
var state_112145__$1 = (function (){var statearr_112160 = state_112145;
(statearr_112160[(7)] = inst_112109__$1);

(statearr_112160[(10)] = inst_112122);

return statearr_112160;
})();
var statearr_112161_112185 = state_112145__$1;
(statearr_112161_112185[(2)] = null);

(statearr_112161_112185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (5))){
var inst_112129 = (state_112145[(2)]);
var state_112145__$1 = (function (){var statearr_112162 = state_112145;
(statearr_112162[(11)] = inst_112129);

return statearr_112162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112145__$1,(12),dchan);
} else {
if((state_val_112146 === (14))){
var inst_112131 = (state_112145[(8)]);
var inst_112136 = cljs.core.apply.call(null,f,inst_112131);
var state_112145__$1 = state_112145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112145__$1,(16),out,inst_112136);
} else {
if((state_val_112146 === (16))){
var inst_112138 = (state_112145[(2)]);
var state_112145__$1 = (function (){var statearr_112163 = state_112145;
(statearr_112163[(12)] = inst_112138);

return statearr_112163;
})();
var statearr_112164_112186 = state_112145__$1;
(statearr_112164_112186[(2)] = null);

(statearr_112164_112186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (10))){
var inst_112113 = (state_112145[(2)]);
var inst_112114 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_112145__$1 = (function (){var statearr_112165 = state_112145;
(statearr_112165[(13)] = inst_112113);

return statearr_112165;
})();
var statearr_112166_112187 = state_112145__$1;
(statearr_112166_112187[(2)] = inst_112114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112146 === (8))){
var inst_112127 = (state_112145[(2)]);
var state_112145__$1 = state_112145;
var statearr_112167_112188 = state_112145__$1;
(statearr_112167_112188[(2)] = inst_112127);

(statearr_112167_112188[(1)] = (5));


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
});})(c__67983__auto___112173,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__67960__auto__,c__67983__auto___112173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_112168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112168[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_112168[(1)] = (1));

return statearr_112168;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_112145){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112169){if((e112169 instanceof Object)){
var ex__67964__auto__ = e112169;
var statearr_112170_112189 = state_112145;
(statearr_112170_112189[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112190 = state_112145;
state_112145 = G__112190;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_112145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_112145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___112173,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__67985__auto__ = (function (){var statearr_112171 = f__67984__auto__.call(null);
(statearr_112171[(6)] = c__67983__auto___112173);

return statearr_112171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___112173,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__112193 = arguments.length;
switch (G__112193) {
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
var c__67983__auto___112247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___112247,out){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___112247,out){
return (function (state_112225){
var state_val_112226 = (state_112225[(1)]);
if((state_val_112226 === (7))){
var inst_112204 = (state_112225[(7)]);
var inst_112205 = (state_112225[(8)]);
var inst_112204__$1 = (state_112225[(2)]);
var inst_112205__$1 = cljs.core.nth.call(null,inst_112204__$1,(0),null);
var inst_112206 = cljs.core.nth.call(null,inst_112204__$1,(1),null);
var inst_112207 = (inst_112205__$1 == null);
var state_112225__$1 = (function (){var statearr_112227 = state_112225;
(statearr_112227[(7)] = inst_112204__$1);

(statearr_112227[(9)] = inst_112206);

(statearr_112227[(8)] = inst_112205__$1);

return statearr_112227;
})();
if(cljs.core.truth_(inst_112207)){
var statearr_112228_112248 = state_112225__$1;
(statearr_112228_112248[(1)] = (8));

} else {
var statearr_112229_112249 = state_112225__$1;
(statearr_112229_112249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112226 === (1))){
var inst_112194 = cljs.core.vec.call(null,chs);
var inst_112195 = inst_112194;
var state_112225__$1 = (function (){var statearr_112230 = state_112225;
(statearr_112230[(10)] = inst_112195);

return statearr_112230;
})();
var statearr_112231_112250 = state_112225__$1;
(statearr_112231_112250[(2)] = null);

(statearr_112231_112250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112226 === (4))){
var inst_112195 = (state_112225[(10)]);
var state_112225__$1 = state_112225;
return cljs.core.async.ioc_alts_BANG_.call(null,state_112225__$1,(7),inst_112195);
} else {
if((state_val_112226 === (6))){
var inst_112221 = (state_112225[(2)]);
var state_112225__$1 = state_112225;
var statearr_112232_112251 = state_112225__$1;
(statearr_112232_112251[(2)] = inst_112221);

(statearr_112232_112251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112226 === (3))){
var inst_112223 = (state_112225[(2)]);
var state_112225__$1 = state_112225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112225__$1,inst_112223);
} else {
if((state_val_112226 === (2))){
var inst_112195 = (state_112225[(10)]);
var inst_112197 = cljs.core.count.call(null,inst_112195);
var inst_112198 = (inst_112197 > (0));
var state_112225__$1 = state_112225;
if(cljs.core.truth_(inst_112198)){
var statearr_112234_112252 = state_112225__$1;
(statearr_112234_112252[(1)] = (4));

} else {
var statearr_112235_112253 = state_112225__$1;
(statearr_112235_112253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112226 === (11))){
var inst_112195 = (state_112225[(10)]);
var inst_112214 = (state_112225[(2)]);
var tmp112233 = inst_112195;
var inst_112195__$1 = tmp112233;
var state_112225__$1 = (function (){var statearr_112236 = state_112225;
(statearr_112236[(10)] = inst_112195__$1);

(statearr_112236[(11)] = inst_112214);

return statearr_112236;
})();
var statearr_112237_112254 = state_112225__$1;
(statearr_112237_112254[(2)] = null);

(statearr_112237_112254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112226 === (9))){
var inst_112205 = (state_112225[(8)]);
var state_112225__$1 = state_112225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112225__$1,(11),out,inst_112205);
} else {
if((state_val_112226 === (5))){
var inst_112219 = cljs.core.async.close_BANG_.call(null,out);
var state_112225__$1 = state_112225;
var statearr_112238_112255 = state_112225__$1;
(statearr_112238_112255[(2)] = inst_112219);

(statearr_112238_112255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112226 === (10))){
var inst_112217 = (state_112225[(2)]);
var state_112225__$1 = state_112225;
var statearr_112239_112256 = state_112225__$1;
(statearr_112239_112256[(2)] = inst_112217);

(statearr_112239_112256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112226 === (8))){
var inst_112195 = (state_112225[(10)]);
var inst_112204 = (state_112225[(7)]);
var inst_112206 = (state_112225[(9)]);
var inst_112205 = (state_112225[(8)]);
var inst_112209 = (function (){var cs = inst_112195;
var vec__112200 = inst_112204;
var v = inst_112205;
var c = inst_112206;
return ((function (cs,vec__112200,v,c,inst_112195,inst_112204,inst_112206,inst_112205,state_val_112226,c__67983__auto___112247,out){
return (function (p1__112191_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__112191_SHARP_);
});
;})(cs,vec__112200,v,c,inst_112195,inst_112204,inst_112206,inst_112205,state_val_112226,c__67983__auto___112247,out))
})();
var inst_112210 = cljs.core.filterv.call(null,inst_112209,inst_112195);
var inst_112195__$1 = inst_112210;
var state_112225__$1 = (function (){var statearr_112240 = state_112225;
(statearr_112240[(10)] = inst_112195__$1);

return statearr_112240;
})();
var statearr_112241_112257 = state_112225__$1;
(statearr_112241_112257[(2)] = null);

(statearr_112241_112257[(1)] = (2));


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
});})(c__67983__auto___112247,out))
;
return ((function (switch__67960__auto__,c__67983__auto___112247,out){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_112242 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112242[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_112242[(1)] = (1));

return statearr_112242;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_112225){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112243){if((e112243 instanceof Object)){
var ex__67964__auto__ = e112243;
var statearr_112244_112258 = state_112225;
(statearr_112244_112258[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112259 = state_112225;
state_112225 = G__112259;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_112225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_112225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___112247,out))
})();
var state__67985__auto__ = (function (){var statearr_112245 = f__67984__auto__.call(null);
(statearr_112245[(6)] = c__67983__auto___112247);

return statearr_112245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___112247,out))
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
var G__112261 = arguments.length;
switch (G__112261) {
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
var c__67983__auto___112306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___112306,out){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___112306,out){
return (function (state_112285){
var state_val_112286 = (state_112285[(1)]);
if((state_val_112286 === (7))){
var inst_112267 = (state_112285[(7)]);
var inst_112267__$1 = (state_112285[(2)]);
var inst_112268 = (inst_112267__$1 == null);
var inst_112269 = cljs.core.not.call(null,inst_112268);
var state_112285__$1 = (function (){var statearr_112287 = state_112285;
(statearr_112287[(7)] = inst_112267__$1);

return statearr_112287;
})();
if(inst_112269){
var statearr_112288_112307 = state_112285__$1;
(statearr_112288_112307[(1)] = (8));

} else {
var statearr_112289_112308 = state_112285__$1;
(statearr_112289_112308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112286 === (1))){
var inst_112262 = (0);
var state_112285__$1 = (function (){var statearr_112290 = state_112285;
(statearr_112290[(8)] = inst_112262);

return statearr_112290;
})();
var statearr_112291_112309 = state_112285__$1;
(statearr_112291_112309[(2)] = null);

(statearr_112291_112309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112286 === (4))){
var state_112285__$1 = state_112285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112285__$1,(7),ch);
} else {
if((state_val_112286 === (6))){
var inst_112280 = (state_112285[(2)]);
var state_112285__$1 = state_112285;
var statearr_112292_112310 = state_112285__$1;
(statearr_112292_112310[(2)] = inst_112280);

(statearr_112292_112310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112286 === (3))){
var inst_112282 = (state_112285[(2)]);
var inst_112283 = cljs.core.async.close_BANG_.call(null,out);
var state_112285__$1 = (function (){var statearr_112293 = state_112285;
(statearr_112293[(9)] = inst_112282);

return statearr_112293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112285__$1,inst_112283);
} else {
if((state_val_112286 === (2))){
var inst_112262 = (state_112285[(8)]);
var inst_112264 = (inst_112262 < n);
var state_112285__$1 = state_112285;
if(cljs.core.truth_(inst_112264)){
var statearr_112294_112311 = state_112285__$1;
(statearr_112294_112311[(1)] = (4));

} else {
var statearr_112295_112312 = state_112285__$1;
(statearr_112295_112312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112286 === (11))){
var inst_112262 = (state_112285[(8)]);
var inst_112272 = (state_112285[(2)]);
var inst_112273 = (inst_112262 + (1));
var inst_112262__$1 = inst_112273;
var state_112285__$1 = (function (){var statearr_112296 = state_112285;
(statearr_112296[(10)] = inst_112272);

(statearr_112296[(8)] = inst_112262__$1);

return statearr_112296;
})();
var statearr_112297_112313 = state_112285__$1;
(statearr_112297_112313[(2)] = null);

(statearr_112297_112313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112286 === (9))){
var state_112285__$1 = state_112285;
var statearr_112298_112314 = state_112285__$1;
(statearr_112298_112314[(2)] = null);

(statearr_112298_112314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112286 === (5))){
var state_112285__$1 = state_112285;
var statearr_112299_112315 = state_112285__$1;
(statearr_112299_112315[(2)] = null);

(statearr_112299_112315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112286 === (10))){
var inst_112277 = (state_112285[(2)]);
var state_112285__$1 = state_112285;
var statearr_112300_112316 = state_112285__$1;
(statearr_112300_112316[(2)] = inst_112277);

(statearr_112300_112316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112286 === (8))){
var inst_112267 = (state_112285[(7)]);
var state_112285__$1 = state_112285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112285__$1,(11),out,inst_112267);
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
});})(c__67983__auto___112306,out))
;
return ((function (switch__67960__auto__,c__67983__auto___112306,out){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_112301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_112301[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_112301[(1)] = (1));

return statearr_112301;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_112285){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112302){if((e112302 instanceof Object)){
var ex__67964__auto__ = e112302;
var statearr_112303_112317 = state_112285;
(statearr_112303_112317[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112318 = state_112285;
state_112285 = G__112318;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_112285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_112285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___112306,out))
})();
var state__67985__auto__ = (function (){var statearr_112304 = f__67984__auto__.call(null);
(statearr_112304[(6)] = c__67983__auto___112306);

return statearr_112304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___112306,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async112320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async112320 = (function (f,ch,meta112321){
this.f = f;
this.ch = ch;
this.meta112321 = meta112321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_112322,meta112321__$1){
var self__ = this;
var _112322__$1 = this;
return (new cljs.core.async.t_cljs$core$async112320(self__.f,self__.ch,meta112321__$1));
});

cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_112322){
var self__ = this;
var _112322__$1 = this;
return self__.meta112321;
});

cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async112323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async112323 = (function (f,ch,meta112321,_,fn1,meta112324){
this.f = f;
this.ch = ch;
this.meta112321 = meta112321;
this._ = _;
this.fn1 = fn1;
this.meta112324 = meta112324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async112323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_112325,meta112324__$1){
var self__ = this;
var _112325__$1 = this;
return (new cljs.core.async.t_cljs$core$async112323(self__.f,self__.ch,self__.meta112321,self__._,self__.fn1,meta112324__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async112323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_112325){
var self__ = this;
var _112325__$1 = this;
return self__.meta112324;
});})(___$1))
;

cljs.core.async.t_cljs$core$async112323.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async112323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async112323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__112319_SHARP_){
return f1.call(null,(((p1__112319_SHARP_ == null))?null:self__.f.call(null,p1__112319_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async112323.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta112321","meta112321",1178971001,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async112320","cljs.core.async/t_cljs$core$async112320",-940172458,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta112324","meta112324",874613926,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async112323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async112323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async112323";

cljs.core.async.t_cljs$core$async112323.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async112323");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async112323 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async112323(f__$1,ch__$1,meta112321__$1,___$2,fn1__$1,meta112324){
return (new cljs.core.async.t_cljs$core$async112323(f__$1,ch__$1,meta112321__$1,___$2,fn1__$1,meta112324));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async112323(self__.f,self__.ch,self__.meta112321,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__58116__auto__ = ret;
if(cljs.core.truth_(and__58116__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__58116__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async112320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta112321","meta112321",1178971001,null)], null);
});

cljs.core.async.t_cljs$core$async112320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async112320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async112320";

cljs.core.async.t_cljs$core$async112320.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async112320");
});

cljs.core.async.__GT_t_cljs$core$async112320 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async112320(f__$1,ch__$1,meta112321){
return (new cljs.core.async.t_cljs$core$async112320(f__$1,ch__$1,meta112321));
});

}

return (new cljs.core.async.t_cljs$core$async112320(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async112326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async112326 = (function (f,ch,meta112327){
this.f = f;
this.ch = ch;
this.meta112327 = meta112327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async112326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_112328,meta112327__$1){
var self__ = this;
var _112328__$1 = this;
return (new cljs.core.async.t_cljs$core$async112326(self__.f,self__.ch,meta112327__$1));
});

cljs.core.async.t_cljs$core$async112326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_112328){
var self__ = this;
var _112328__$1 = this;
return self__.meta112327;
});

cljs.core.async.t_cljs$core$async112326.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112326.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async112326.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112326.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async112326.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112326.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async112326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta112327","meta112327",-239210760,null)], null);
});

cljs.core.async.t_cljs$core$async112326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async112326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async112326";

cljs.core.async.t_cljs$core$async112326.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async112326");
});

cljs.core.async.__GT_t_cljs$core$async112326 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async112326(f__$1,ch__$1,meta112327){
return (new cljs.core.async.t_cljs$core$async112326(f__$1,ch__$1,meta112327));
});

}

return (new cljs.core.async.t_cljs$core$async112326(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async112329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async112329 = (function (p,ch,meta112330){
this.p = p;
this.ch = ch;
this.meta112330 = meta112330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_112331,meta112330__$1){
var self__ = this;
var _112331__$1 = this;
return (new cljs.core.async.t_cljs$core$async112329(self__.p,self__.ch,meta112330__$1));
});

cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_112331){
var self__ = this;
var _112331__$1 = this;
return self__.meta112330;
});

cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async112329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async112329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta112330","meta112330",-300427558,null)], null);
});

cljs.core.async.t_cljs$core$async112329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async112329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async112329";

cljs.core.async.t_cljs$core$async112329.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.core.async/t_cljs$core$async112329");
});

cljs.core.async.__GT_t_cljs$core$async112329 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async112329(p__$1,ch__$1,meta112330){
return (new cljs.core.async.t_cljs$core$async112329(p__$1,ch__$1,meta112330));
});

}

return (new cljs.core.async.t_cljs$core$async112329(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__112333 = arguments.length;
switch (G__112333) {
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
var c__67983__auto___112373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___112373,out){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___112373,out){
return (function (state_112354){
var state_val_112355 = (state_112354[(1)]);
if((state_val_112355 === (7))){
var inst_112350 = (state_112354[(2)]);
var state_112354__$1 = state_112354;
var statearr_112356_112374 = state_112354__$1;
(statearr_112356_112374[(2)] = inst_112350);

(statearr_112356_112374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112355 === (1))){
var state_112354__$1 = state_112354;
var statearr_112357_112375 = state_112354__$1;
(statearr_112357_112375[(2)] = null);

(statearr_112357_112375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112355 === (4))){
var inst_112336 = (state_112354[(7)]);
var inst_112336__$1 = (state_112354[(2)]);
var inst_112337 = (inst_112336__$1 == null);
var state_112354__$1 = (function (){var statearr_112358 = state_112354;
(statearr_112358[(7)] = inst_112336__$1);

return statearr_112358;
})();
if(cljs.core.truth_(inst_112337)){
var statearr_112359_112376 = state_112354__$1;
(statearr_112359_112376[(1)] = (5));

} else {
var statearr_112360_112377 = state_112354__$1;
(statearr_112360_112377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112355 === (6))){
var inst_112336 = (state_112354[(7)]);
var inst_112341 = p.call(null,inst_112336);
var state_112354__$1 = state_112354;
if(cljs.core.truth_(inst_112341)){
var statearr_112361_112378 = state_112354__$1;
(statearr_112361_112378[(1)] = (8));

} else {
var statearr_112362_112379 = state_112354__$1;
(statearr_112362_112379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112355 === (3))){
var inst_112352 = (state_112354[(2)]);
var state_112354__$1 = state_112354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112354__$1,inst_112352);
} else {
if((state_val_112355 === (2))){
var state_112354__$1 = state_112354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112354__$1,(4),ch);
} else {
if((state_val_112355 === (11))){
var inst_112344 = (state_112354[(2)]);
var state_112354__$1 = state_112354;
var statearr_112363_112380 = state_112354__$1;
(statearr_112363_112380[(2)] = inst_112344);

(statearr_112363_112380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112355 === (9))){
var state_112354__$1 = state_112354;
var statearr_112364_112381 = state_112354__$1;
(statearr_112364_112381[(2)] = null);

(statearr_112364_112381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112355 === (5))){
var inst_112339 = cljs.core.async.close_BANG_.call(null,out);
var state_112354__$1 = state_112354;
var statearr_112365_112382 = state_112354__$1;
(statearr_112365_112382[(2)] = inst_112339);

(statearr_112365_112382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112355 === (10))){
var inst_112347 = (state_112354[(2)]);
var state_112354__$1 = (function (){var statearr_112366 = state_112354;
(statearr_112366[(8)] = inst_112347);

return statearr_112366;
})();
var statearr_112367_112383 = state_112354__$1;
(statearr_112367_112383[(2)] = null);

(statearr_112367_112383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112355 === (8))){
var inst_112336 = (state_112354[(7)]);
var state_112354__$1 = state_112354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112354__$1,(11),out,inst_112336);
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
});})(c__67983__auto___112373,out))
;
return ((function (switch__67960__auto__,c__67983__auto___112373,out){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_112368 = [null,null,null,null,null,null,null,null,null];
(statearr_112368[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_112368[(1)] = (1));

return statearr_112368;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_112354){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112369){if((e112369 instanceof Object)){
var ex__67964__auto__ = e112369;
var statearr_112370_112384 = state_112354;
(statearr_112370_112384[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112385 = state_112354;
state_112354 = G__112385;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_112354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_112354);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___112373,out))
})();
var state__67985__auto__ = (function (){var statearr_112371 = f__67984__auto__.call(null);
(statearr_112371[(6)] = c__67983__auto___112373);

return statearr_112371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___112373,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__112387 = arguments.length;
switch (G__112387) {
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
var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__){
return (function (state_112450){
var state_val_112451 = (state_112450[(1)]);
if((state_val_112451 === (7))){
var inst_112446 = (state_112450[(2)]);
var state_112450__$1 = state_112450;
var statearr_112452_112490 = state_112450__$1;
(statearr_112452_112490[(2)] = inst_112446);

(statearr_112452_112490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (20))){
var inst_112416 = (state_112450[(7)]);
var inst_112427 = (state_112450[(2)]);
var inst_112428 = cljs.core.next.call(null,inst_112416);
var inst_112402 = inst_112428;
var inst_112403 = null;
var inst_112404 = (0);
var inst_112405 = (0);
var state_112450__$1 = (function (){var statearr_112453 = state_112450;
(statearr_112453[(8)] = inst_112405);

(statearr_112453[(9)] = inst_112404);

(statearr_112453[(10)] = inst_112403);

(statearr_112453[(11)] = inst_112402);

(statearr_112453[(12)] = inst_112427);

return statearr_112453;
})();
var statearr_112454_112491 = state_112450__$1;
(statearr_112454_112491[(2)] = null);

(statearr_112454_112491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (1))){
var state_112450__$1 = state_112450;
var statearr_112455_112492 = state_112450__$1;
(statearr_112455_112492[(2)] = null);

(statearr_112455_112492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (4))){
var inst_112391 = (state_112450[(13)]);
var inst_112391__$1 = (state_112450[(2)]);
var inst_112392 = (inst_112391__$1 == null);
var state_112450__$1 = (function (){var statearr_112456 = state_112450;
(statearr_112456[(13)] = inst_112391__$1);

return statearr_112456;
})();
if(cljs.core.truth_(inst_112392)){
var statearr_112457_112493 = state_112450__$1;
(statearr_112457_112493[(1)] = (5));

} else {
var statearr_112458_112494 = state_112450__$1;
(statearr_112458_112494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (15))){
var state_112450__$1 = state_112450;
var statearr_112462_112495 = state_112450__$1;
(statearr_112462_112495[(2)] = null);

(statearr_112462_112495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (21))){
var state_112450__$1 = state_112450;
var statearr_112463_112496 = state_112450__$1;
(statearr_112463_112496[(2)] = null);

(statearr_112463_112496[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (13))){
var inst_112405 = (state_112450[(8)]);
var inst_112404 = (state_112450[(9)]);
var inst_112403 = (state_112450[(10)]);
var inst_112402 = (state_112450[(11)]);
var inst_112412 = (state_112450[(2)]);
var inst_112413 = (inst_112405 + (1));
var tmp112459 = inst_112404;
var tmp112460 = inst_112403;
var tmp112461 = inst_112402;
var inst_112402__$1 = tmp112461;
var inst_112403__$1 = tmp112460;
var inst_112404__$1 = tmp112459;
var inst_112405__$1 = inst_112413;
var state_112450__$1 = (function (){var statearr_112464 = state_112450;
(statearr_112464[(14)] = inst_112412);

(statearr_112464[(8)] = inst_112405__$1);

(statearr_112464[(9)] = inst_112404__$1);

(statearr_112464[(10)] = inst_112403__$1);

(statearr_112464[(11)] = inst_112402__$1);

return statearr_112464;
})();
var statearr_112465_112497 = state_112450__$1;
(statearr_112465_112497[(2)] = null);

(statearr_112465_112497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (22))){
var state_112450__$1 = state_112450;
var statearr_112466_112498 = state_112450__$1;
(statearr_112466_112498[(2)] = null);

(statearr_112466_112498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (6))){
var inst_112391 = (state_112450[(13)]);
var inst_112400 = f.call(null,inst_112391);
var inst_112401 = cljs.core.seq.call(null,inst_112400);
var inst_112402 = inst_112401;
var inst_112403 = null;
var inst_112404 = (0);
var inst_112405 = (0);
var state_112450__$1 = (function (){var statearr_112467 = state_112450;
(statearr_112467[(8)] = inst_112405);

(statearr_112467[(9)] = inst_112404);

(statearr_112467[(10)] = inst_112403);

(statearr_112467[(11)] = inst_112402);

return statearr_112467;
})();
var statearr_112468_112499 = state_112450__$1;
(statearr_112468_112499[(2)] = null);

(statearr_112468_112499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (17))){
var inst_112416 = (state_112450[(7)]);
var inst_112420 = cljs.core.chunk_first.call(null,inst_112416);
var inst_112421 = cljs.core.chunk_rest.call(null,inst_112416);
var inst_112422 = cljs.core.count.call(null,inst_112420);
var inst_112402 = inst_112421;
var inst_112403 = inst_112420;
var inst_112404 = inst_112422;
var inst_112405 = (0);
var state_112450__$1 = (function (){var statearr_112469 = state_112450;
(statearr_112469[(8)] = inst_112405);

(statearr_112469[(9)] = inst_112404);

(statearr_112469[(10)] = inst_112403);

(statearr_112469[(11)] = inst_112402);

return statearr_112469;
})();
var statearr_112470_112500 = state_112450__$1;
(statearr_112470_112500[(2)] = null);

(statearr_112470_112500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (3))){
var inst_112448 = (state_112450[(2)]);
var state_112450__$1 = state_112450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112450__$1,inst_112448);
} else {
if((state_val_112451 === (12))){
var inst_112436 = (state_112450[(2)]);
var state_112450__$1 = state_112450;
var statearr_112471_112501 = state_112450__$1;
(statearr_112471_112501[(2)] = inst_112436);

(statearr_112471_112501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (2))){
var state_112450__$1 = state_112450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112450__$1,(4),in$);
} else {
if((state_val_112451 === (23))){
var inst_112444 = (state_112450[(2)]);
var state_112450__$1 = state_112450;
var statearr_112472_112502 = state_112450__$1;
(statearr_112472_112502[(2)] = inst_112444);

(statearr_112472_112502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (19))){
var inst_112431 = (state_112450[(2)]);
var state_112450__$1 = state_112450;
var statearr_112473_112503 = state_112450__$1;
(statearr_112473_112503[(2)] = inst_112431);

(statearr_112473_112503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (11))){
var inst_112416 = (state_112450[(7)]);
var inst_112402 = (state_112450[(11)]);
var inst_112416__$1 = cljs.core.seq.call(null,inst_112402);
var state_112450__$1 = (function (){var statearr_112474 = state_112450;
(statearr_112474[(7)] = inst_112416__$1);

return statearr_112474;
})();
if(inst_112416__$1){
var statearr_112475_112504 = state_112450__$1;
(statearr_112475_112504[(1)] = (14));

} else {
var statearr_112476_112505 = state_112450__$1;
(statearr_112476_112505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (9))){
var inst_112438 = (state_112450[(2)]);
var inst_112439 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_112450__$1 = (function (){var statearr_112477 = state_112450;
(statearr_112477[(15)] = inst_112438);

return statearr_112477;
})();
if(cljs.core.truth_(inst_112439)){
var statearr_112478_112506 = state_112450__$1;
(statearr_112478_112506[(1)] = (21));

} else {
var statearr_112479_112507 = state_112450__$1;
(statearr_112479_112507[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (5))){
var inst_112394 = cljs.core.async.close_BANG_.call(null,out);
var state_112450__$1 = state_112450;
var statearr_112480_112508 = state_112450__$1;
(statearr_112480_112508[(2)] = inst_112394);

(statearr_112480_112508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (14))){
var inst_112416 = (state_112450[(7)]);
var inst_112418 = cljs.core.chunked_seq_QMARK_.call(null,inst_112416);
var state_112450__$1 = state_112450;
if(inst_112418){
var statearr_112481_112509 = state_112450__$1;
(statearr_112481_112509[(1)] = (17));

} else {
var statearr_112482_112510 = state_112450__$1;
(statearr_112482_112510[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (16))){
var inst_112434 = (state_112450[(2)]);
var state_112450__$1 = state_112450;
var statearr_112483_112511 = state_112450__$1;
(statearr_112483_112511[(2)] = inst_112434);

(statearr_112483_112511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112451 === (10))){
var inst_112405 = (state_112450[(8)]);
var inst_112403 = (state_112450[(10)]);
var inst_112410 = cljs.core._nth.call(null,inst_112403,inst_112405);
var state_112450__$1 = state_112450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112450__$1,(13),out,inst_112410);
} else {
if((state_val_112451 === (18))){
var inst_112416 = (state_112450[(7)]);
var inst_112425 = cljs.core.first.call(null,inst_112416);
var state_112450__$1 = state_112450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112450__$1,(20),out,inst_112425);
} else {
if((state_val_112451 === (8))){
var inst_112405 = (state_112450[(8)]);
var inst_112404 = (state_112450[(9)]);
var inst_112407 = (inst_112405 < inst_112404);
var inst_112408 = inst_112407;
var state_112450__$1 = state_112450;
if(cljs.core.truth_(inst_112408)){
var statearr_112484_112512 = state_112450__$1;
(statearr_112484_112512[(1)] = (10));

} else {
var statearr_112485_112513 = state_112450__$1;
(statearr_112485_112513[(1)] = (11));

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
});})(c__67983__auto__))
;
return ((function (switch__67960__auto__,c__67983__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__67961__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__67961__auto____0 = (function (){
var statearr_112486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112486[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__67961__auto__);

(statearr_112486[(1)] = (1));

return statearr_112486;
});
var cljs$core$async$mapcat_STAR__$_state_machine__67961__auto____1 = (function (state_112450){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112487){if((e112487 instanceof Object)){
var ex__67964__auto__ = e112487;
var statearr_112488_112514 = state_112450;
(statearr_112488_112514[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112515 = state_112450;
state_112450 = G__112515;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__67961__auto__ = function(state_112450){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__67961__auto____1.call(this,state_112450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__67961__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__67961__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__))
})();
var state__67985__auto__ = (function (){var statearr_112489 = f__67984__auto__.call(null);
(statearr_112489[(6)] = c__67983__auto__);

return statearr_112489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__))
);

return c__67983__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__112517 = arguments.length;
switch (G__112517) {
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
var G__112520 = arguments.length;
switch (G__112520) {
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
var G__112523 = arguments.length;
switch (G__112523) {
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
var c__67983__auto___112570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___112570,out){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___112570,out){
return (function (state_112547){
var state_val_112548 = (state_112547[(1)]);
if((state_val_112548 === (7))){
var inst_112542 = (state_112547[(2)]);
var state_112547__$1 = state_112547;
var statearr_112549_112571 = state_112547__$1;
(statearr_112549_112571[(2)] = inst_112542);

(statearr_112549_112571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112548 === (1))){
var inst_112524 = null;
var state_112547__$1 = (function (){var statearr_112550 = state_112547;
(statearr_112550[(7)] = inst_112524);

return statearr_112550;
})();
var statearr_112551_112572 = state_112547__$1;
(statearr_112551_112572[(2)] = null);

(statearr_112551_112572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112548 === (4))){
var inst_112527 = (state_112547[(8)]);
var inst_112527__$1 = (state_112547[(2)]);
var inst_112528 = (inst_112527__$1 == null);
var inst_112529 = cljs.core.not.call(null,inst_112528);
var state_112547__$1 = (function (){var statearr_112552 = state_112547;
(statearr_112552[(8)] = inst_112527__$1);

return statearr_112552;
})();
if(inst_112529){
var statearr_112553_112573 = state_112547__$1;
(statearr_112553_112573[(1)] = (5));

} else {
var statearr_112554_112574 = state_112547__$1;
(statearr_112554_112574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112548 === (6))){
var state_112547__$1 = state_112547;
var statearr_112555_112575 = state_112547__$1;
(statearr_112555_112575[(2)] = null);

(statearr_112555_112575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112548 === (3))){
var inst_112544 = (state_112547[(2)]);
var inst_112545 = cljs.core.async.close_BANG_.call(null,out);
var state_112547__$1 = (function (){var statearr_112556 = state_112547;
(statearr_112556[(9)] = inst_112544);

return statearr_112556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112547__$1,inst_112545);
} else {
if((state_val_112548 === (2))){
var state_112547__$1 = state_112547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112547__$1,(4),ch);
} else {
if((state_val_112548 === (11))){
var inst_112527 = (state_112547[(8)]);
var inst_112536 = (state_112547[(2)]);
var inst_112524 = inst_112527;
var state_112547__$1 = (function (){var statearr_112557 = state_112547;
(statearr_112557[(7)] = inst_112524);

(statearr_112557[(10)] = inst_112536);

return statearr_112557;
})();
var statearr_112558_112576 = state_112547__$1;
(statearr_112558_112576[(2)] = null);

(statearr_112558_112576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112548 === (9))){
var inst_112527 = (state_112547[(8)]);
var state_112547__$1 = state_112547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112547__$1,(11),out,inst_112527);
} else {
if((state_val_112548 === (5))){
var inst_112524 = (state_112547[(7)]);
var inst_112527 = (state_112547[(8)]);
var inst_112531 = cljs.core._EQ_.call(null,inst_112527,inst_112524);
var state_112547__$1 = state_112547;
if(inst_112531){
var statearr_112560_112577 = state_112547__$1;
(statearr_112560_112577[(1)] = (8));

} else {
var statearr_112561_112578 = state_112547__$1;
(statearr_112561_112578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112548 === (10))){
var inst_112539 = (state_112547[(2)]);
var state_112547__$1 = state_112547;
var statearr_112562_112579 = state_112547__$1;
(statearr_112562_112579[(2)] = inst_112539);

(statearr_112562_112579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112548 === (8))){
var inst_112524 = (state_112547[(7)]);
var tmp112559 = inst_112524;
var inst_112524__$1 = tmp112559;
var state_112547__$1 = (function (){var statearr_112563 = state_112547;
(statearr_112563[(7)] = inst_112524__$1);

return statearr_112563;
})();
var statearr_112564_112580 = state_112547__$1;
(statearr_112564_112580[(2)] = null);

(statearr_112564_112580[(1)] = (2));


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
});})(c__67983__auto___112570,out))
;
return ((function (switch__67960__auto__,c__67983__auto___112570,out){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_112565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_112565[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_112565[(1)] = (1));

return statearr_112565;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_112547){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112566){if((e112566 instanceof Object)){
var ex__67964__auto__ = e112566;
var statearr_112567_112581 = state_112547;
(statearr_112567_112581[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112582 = state_112547;
state_112547 = G__112582;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_112547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_112547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___112570,out))
})();
var state__67985__auto__ = (function (){var statearr_112568 = f__67984__auto__.call(null);
(statearr_112568[(6)] = c__67983__auto___112570);

return statearr_112568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___112570,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__112584 = arguments.length;
switch (G__112584) {
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
var c__67983__auto___112650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___112650,out){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___112650,out){
return (function (state_112622){
var state_val_112623 = (state_112622[(1)]);
if((state_val_112623 === (7))){
var inst_112618 = (state_112622[(2)]);
var state_112622__$1 = state_112622;
var statearr_112624_112651 = state_112622__$1;
(statearr_112624_112651[(2)] = inst_112618);

(statearr_112624_112651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (1))){
var inst_112585 = (new Array(n));
var inst_112586 = inst_112585;
var inst_112587 = (0);
var state_112622__$1 = (function (){var statearr_112625 = state_112622;
(statearr_112625[(7)] = inst_112587);

(statearr_112625[(8)] = inst_112586);

return statearr_112625;
})();
var statearr_112626_112652 = state_112622__$1;
(statearr_112626_112652[(2)] = null);

(statearr_112626_112652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (4))){
var inst_112590 = (state_112622[(9)]);
var inst_112590__$1 = (state_112622[(2)]);
var inst_112591 = (inst_112590__$1 == null);
var inst_112592 = cljs.core.not.call(null,inst_112591);
var state_112622__$1 = (function (){var statearr_112627 = state_112622;
(statearr_112627[(9)] = inst_112590__$1);

return statearr_112627;
})();
if(inst_112592){
var statearr_112628_112653 = state_112622__$1;
(statearr_112628_112653[(1)] = (5));

} else {
var statearr_112629_112654 = state_112622__$1;
(statearr_112629_112654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (15))){
var inst_112612 = (state_112622[(2)]);
var state_112622__$1 = state_112622;
var statearr_112630_112655 = state_112622__$1;
(statearr_112630_112655[(2)] = inst_112612);

(statearr_112630_112655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (13))){
var state_112622__$1 = state_112622;
var statearr_112631_112656 = state_112622__$1;
(statearr_112631_112656[(2)] = null);

(statearr_112631_112656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (6))){
var inst_112587 = (state_112622[(7)]);
var inst_112608 = (inst_112587 > (0));
var state_112622__$1 = state_112622;
if(cljs.core.truth_(inst_112608)){
var statearr_112632_112657 = state_112622__$1;
(statearr_112632_112657[(1)] = (12));

} else {
var statearr_112633_112658 = state_112622__$1;
(statearr_112633_112658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (3))){
var inst_112620 = (state_112622[(2)]);
var state_112622__$1 = state_112622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112622__$1,inst_112620);
} else {
if((state_val_112623 === (12))){
var inst_112586 = (state_112622[(8)]);
var inst_112610 = cljs.core.vec.call(null,inst_112586);
var state_112622__$1 = state_112622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112622__$1,(15),out,inst_112610);
} else {
if((state_val_112623 === (2))){
var state_112622__$1 = state_112622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112622__$1,(4),ch);
} else {
if((state_val_112623 === (11))){
var inst_112602 = (state_112622[(2)]);
var inst_112603 = (new Array(n));
var inst_112586 = inst_112603;
var inst_112587 = (0);
var state_112622__$1 = (function (){var statearr_112634 = state_112622;
(statearr_112634[(7)] = inst_112587);

(statearr_112634[(10)] = inst_112602);

(statearr_112634[(8)] = inst_112586);

return statearr_112634;
})();
var statearr_112635_112659 = state_112622__$1;
(statearr_112635_112659[(2)] = null);

(statearr_112635_112659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (9))){
var inst_112586 = (state_112622[(8)]);
var inst_112600 = cljs.core.vec.call(null,inst_112586);
var state_112622__$1 = state_112622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112622__$1,(11),out,inst_112600);
} else {
if((state_val_112623 === (5))){
var inst_112587 = (state_112622[(7)]);
var inst_112590 = (state_112622[(9)]);
var inst_112595 = (state_112622[(11)]);
var inst_112586 = (state_112622[(8)]);
var inst_112594 = (inst_112586[inst_112587] = inst_112590);
var inst_112595__$1 = (inst_112587 + (1));
var inst_112596 = (inst_112595__$1 < n);
var state_112622__$1 = (function (){var statearr_112636 = state_112622;
(statearr_112636[(12)] = inst_112594);

(statearr_112636[(11)] = inst_112595__$1);

return statearr_112636;
})();
if(cljs.core.truth_(inst_112596)){
var statearr_112637_112660 = state_112622__$1;
(statearr_112637_112660[(1)] = (8));

} else {
var statearr_112638_112661 = state_112622__$1;
(statearr_112638_112661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (14))){
var inst_112615 = (state_112622[(2)]);
var inst_112616 = cljs.core.async.close_BANG_.call(null,out);
var state_112622__$1 = (function (){var statearr_112640 = state_112622;
(statearr_112640[(13)] = inst_112615);

return statearr_112640;
})();
var statearr_112641_112662 = state_112622__$1;
(statearr_112641_112662[(2)] = inst_112616);

(statearr_112641_112662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (10))){
var inst_112606 = (state_112622[(2)]);
var state_112622__$1 = state_112622;
var statearr_112642_112663 = state_112622__$1;
(statearr_112642_112663[(2)] = inst_112606);

(statearr_112642_112663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112623 === (8))){
var inst_112595 = (state_112622[(11)]);
var inst_112586 = (state_112622[(8)]);
var tmp112639 = inst_112586;
var inst_112586__$1 = tmp112639;
var inst_112587 = inst_112595;
var state_112622__$1 = (function (){var statearr_112643 = state_112622;
(statearr_112643[(7)] = inst_112587);

(statearr_112643[(8)] = inst_112586__$1);

return statearr_112643;
})();
var statearr_112644_112664 = state_112622__$1;
(statearr_112644_112664[(2)] = null);

(statearr_112644_112664[(1)] = (2));


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
});})(c__67983__auto___112650,out))
;
return ((function (switch__67960__auto__,c__67983__auto___112650,out){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_112645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112645[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_112645[(1)] = (1));

return statearr_112645;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_112622){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112646){if((e112646 instanceof Object)){
var ex__67964__auto__ = e112646;
var statearr_112647_112665 = state_112622;
(statearr_112647_112665[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112666 = state_112622;
state_112622 = G__112666;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_112622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_112622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___112650,out))
})();
var state__67985__auto__ = (function (){var statearr_112648 = f__67984__auto__.call(null);
(statearr_112648[(6)] = c__67983__auto___112650);

return statearr_112648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___112650,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__112668 = arguments.length;
switch (G__112668) {
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
var c__67983__auto___112738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___112738,out){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___112738,out){
return (function (state_112710){
var state_val_112711 = (state_112710[(1)]);
if((state_val_112711 === (7))){
var inst_112706 = (state_112710[(2)]);
var state_112710__$1 = state_112710;
var statearr_112712_112739 = state_112710__$1;
(statearr_112712_112739[(2)] = inst_112706);

(statearr_112712_112739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (1))){
var inst_112669 = [];
var inst_112670 = inst_112669;
var inst_112671 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_112710__$1 = (function (){var statearr_112713 = state_112710;
(statearr_112713[(7)] = inst_112671);

(statearr_112713[(8)] = inst_112670);

return statearr_112713;
})();
var statearr_112714_112740 = state_112710__$1;
(statearr_112714_112740[(2)] = null);

(statearr_112714_112740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (4))){
var inst_112674 = (state_112710[(9)]);
var inst_112674__$1 = (state_112710[(2)]);
var inst_112675 = (inst_112674__$1 == null);
var inst_112676 = cljs.core.not.call(null,inst_112675);
var state_112710__$1 = (function (){var statearr_112715 = state_112710;
(statearr_112715[(9)] = inst_112674__$1);

return statearr_112715;
})();
if(inst_112676){
var statearr_112716_112741 = state_112710__$1;
(statearr_112716_112741[(1)] = (5));

} else {
var statearr_112717_112742 = state_112710__$1;
(statearr_112717_112742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (15))){
var inst_112700 = (state_112710[(2)]);
var state_112710__$1 = state_112710;
var statearr_112718_112743 = state_112710__$1;
(statearr_112718_112743[(2)] = inst_112700);

(statearr_112718_112743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (13))){
var state_112710__$1 = state_112710;
var statearr_112719_112744 = state_112710__$1;
(statearr_112719_112744[(2)] = null);

(statearr_112719_112744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (6))){
var inst_112670 = (state_112710[(8)]);
var inst_112695 = inst_112670.length;
var inst_112696 = (inst_112695 > (0));
var state_112710__$1 = state_112710;
if(cljs.core.truth_(inst_112696)){
var statearr_112720_112745 = state_112710__$1;
(statearr_112720_112745[(1)] = (12));

} else {
var statearr_112721_112746 = state_112710__$1;
(statearr_112721_112746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (3))){
var inst_112708 = (state_112710[(2)]);
var state_112710__$1 = state_112710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112710__$1,inst_112708);
} else {
if((state_val_112711 === (12))){
var inst_112670 = (state_112710[(8)]);
var inst_112698 = cljs.core.vec.call(null,inst_112670);
var state_112710__$1 = state_112710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112710__$1,(15),out,inst_112698);
} else {
if((state_val_112711 === (2))){
var state_112710__$1 = state_112710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112710__$1,(4),ch);
} else {
if((state_val_112711 === (11))){
var inst_112674 = (state_112710[(9)]);
var inst_112678 = (state_112710[(10)]);
var inst_112688 = (state_112710[(2)]);
var inst_112689 = [];
var inst_112690 = inst_112689.push(inst_112674);
var inst_112670 = inst_112689;
var inst_112671 = inst_112678;
var state_112710__$1 = (function (){var statearr_112722 = state_112710;
(statearr_112722[(7)] = inst_112671);

(statearr_112722[(11)] = inst_112690);

(statearr_112722[(8)] = inst_112670);

(statearr_112722[(12)] = inst_112688);

return statearr_112722;
})();
var statearr_112723_112747 = state_112710__$1;
(statearr_112723_112747[(2)] = null);

(statearr_112723_112747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (9))){
var inst_112670 = (state_112710[(8)]);
var inst_112686 = cljs.core.vec.call(null,inst_112670);
var state_112710__$1 = state_112710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112710__$1,(11),out,inst_112686);
} else {
if((state_val_112711 === (5))){
var inst_112674 = (state_112710[(9)]);
var inst_112671 = (state_112710[(7)]);
var inst_112678 = (state_112710[(10)]);
var inst_112678__$1 = f.call(null,inst_112674);
var inst_112679 = cljs.core._EQ_.call(null,inst_112678__$1,inst_112671);
var inst_112680 = cljs.core.keyword_identical_QMARK_.call(null,inst_112671,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_112681 = (inst_112679) || (inst_112680);
var state_112710__$1 = (function (){var statearr_112724 = state_112710;
(statearr_112724[(10)] = inst_112678__$1);

return statearr_112724;
})();
if(cljs.core.truth_(inst_112681)){
var statearr_112725_112748 = state_112710__$1;
(statearr_112725_112748[(1)] = (8));

} else {
var statearr_112726_112749 = state_112710__$1;
(statearr_112726_112749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (14))){
var inst_112703 = (state_112710[(2)]);
var inst_112704 = cljs.core.async.close_BANG_.call(null,out);
var state_112710__$1 = (function (){var statearr_112728 = state_112710;
(statearr_112728[(13)] = inst_112703);

return statearr_112728;
})();
var statearr_112729_112750 = state_112710__$1;
(statearr_112729_112750[(2)] = inst_112704);

(statearr_112729_112750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (10))){
var inst_112693 = (state_112710[(2)]);
var state_112710__$1 = state_112710;
var statearr_112730_112751 = state_112710__$1;
(statearr_112730_112751[(2)] = inst_112693);

(statearr_112730_112751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112711 === (8))){
var inst_112674 = (state_112710[(9)]);
var inst_112678 = (state_112710[(10)]);
var inst_112670 = (state_112710[(8)]);
var inst_112683 = inst_112670.push(inst_112674);
var tmp112727 = inst_112670;
var inst_112670__$1 = tmp112727;
var inst_112671 = inst_112678;
var state_112710__$1 = (function (){var statearr_112731 = state_112710;
(statearr_112731[(14)] = inst_112683);

(statearr_112731[(7)] = inst_112671);

(statearr_112731[(8)] = inst_112670__$1);

return statearr_112731;
})();
var statearr_112732_112752 = state_112710__$1;
(statearr_112732_112752[(2)] = null);

(statearr_112732_112752[(1)] = (2));


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
});})(c__67983__auto___112738,out))
;
return ((function (switch__67960__auto__,c__67983__auto___112738,out){
return (function() {
var cljs$core$async$state_machine__67961__auto__ = null;
var cljs$core$async$state_machine__67961__auto____0 = (function (){
var statearr_112733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112733[(0)] = cljs$core$async$state_machine__67961__auto__);

(statearr_112733[(1)] = (1));

return statearr_112733;
});
var cljs$core$async$state_machine__67961__auto____1 = (function (state_112710){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_112710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e112734){if((e112734 instanceof Object)){
var ex__67964__auto__ = e112734;
var statearr_112735_112753 = state_112710;
(statearr_112735_112753[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112754 = state_112710;
state_112710 = G__112754;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
cljs$core$async$state_machine__67961__auto__ = function(state_112710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__67961__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__67961__auto____1.call(this,state_112710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__67961__auto____0;
cljs$core$async$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__67961__auto____1;
return cljs$core$async$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___112738,out))
})();
var state__67985__auto__ = (function (){var statearr_112736 = f__67984__auto__.call(null);
(statearr_112736[(6)] = c__67983__auto___112738);

return statearr_112736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___112738,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1505927819660
