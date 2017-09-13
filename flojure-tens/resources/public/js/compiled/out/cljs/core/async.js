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
var G__17089 = arguments.length;
switch (G__17089) {
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
if(typeof cljs.core.async.t_cljs$core$async17090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17090 = (function (f,blockable,meta17091){
this.f = f;
this.blockable = blockable;
this.meta17091 = meta17091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17092,meta17091__$1){
var self__ = this;
var _17092__$1 = this;
return (new cljs.core.async.t_cljs$core$async17090(self__.f,self__.blockable,meta17091__$1));
});

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17092){
var self__ = this;
var _17092__$1 = this;
return self__.meta17091;
});

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17091","meta17091",-1501796318,null)], null);
});

cljs.core.async.t_cljs$core$async17090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17090";

cljs.core.async.t_cljs$core$async17090.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17090");
});

cljs.core.async.__GT_t_cljs$core$async17090 = (function cljs$core$async$__GT_t_cljs$core$async17090(f__$1,blockable__$1,meta17091){
return (new cljs.core.async.t_cljs$core$async17090(f__$1,blockable__$1,meta17091));
});

}

return (new cljs.core.async.t_cljs$core$async17090(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17096 = arguments.length;
switch (G__17096) {
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
var G__17099 = arguments.length;
switch (G__17099) {
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
var G__17102 = arguments.length;
switch (G__17102) {
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
var val_17104 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17104);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17104,ret){
return (function (){
return fn1.call(null,val_17104);
});})(val_17104,ret))
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
var G__17106 = arguments.length;
switch (G__17106) {
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
var n__10853__auto___17108 = n;
var x_17109 = (0);
while(true){
if((x_17109 < n__10853__auto___17108)){
(a[x_17109] = (0));

var G__17110 = (x_17109 + (1));
x_17109 = G__17110;
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

var G__17111 = (i + (1));
i = G__17111;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17112 = (function (flag,meta17113){
this.flag = flag;
this.meta17113 = meta17113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17114,meta17113__$1){
var self__ = this;
var _17114__$1 = this;
return (new cljs.core.async.t_cljs$core$async17112(self__.flag,meta17113__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17114){
var self__ = this;
var _17114__$1 = this;
return self__.meta17113;
});})(flag))
;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17112.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17113","meta17113",-1806329750,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17112";

cljs.core.async.t_cljs$core$async17112.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17112");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17112 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17112(flag__$1,meta17113){
return (new cljs.core.async.t_cljs$core$async17112(flag__$1,meta17113));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17112(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17115 = (function (flag,cb,meta17116){
this.flag = flag;
this.cb = cb;
this.meta17116 = meta17116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17117,meta17116__$1){
var self__ = this;
var _17117__$1 = this;
return (new cljs.core.async.t_cljs$core$async17115(self__.flag,self__.cb,meta17116__$1));
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17117){
var self__ = this;
var _17117__$1 = this;
return self__.meta17116;
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17116","meta17116",53331489,null)], null);
});

cljs.core.async.t_cljs$core$async17115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17115";

cljs.core.async.t_cljs$core$async17115.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17115");
});

cljs.core.async.__GT_t_cljs$core$async17115 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17115(flag__$1,cb__$1,meta17116){
return (new cljs.core.async.t_cljs$core$async17115(flag__$1,cb__$1,meta17116));
});

}

return (new cljs.core.async.t_cljs$core$async17115(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17118_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17118_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17119_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17119_SHARP_,port], null));
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
var G__17120 = (i + (1));
i = G__17120;
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
var len__11087__auto___17126 = arguments.length;
var i__11088__auto___17127 = (0);
while(true){
if((i__11088__auto___17127 < len__11087__auto___17126)){
args__11094__auto__.push((arguments[i__11088__auto___17127]));

var G__17128 = (i__11088__auto___17127 + (1));
i__11088__auto___17127 = G__17128;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17123){
var map__17124 = p__17123;
var map__17124__$1 = ((((!((map__17124 == null)))?((((map__17124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17124):map__17124);
var opts = map__17124__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17121){
var G__17122 = cljs.core.first.call(null,seq17121);
var seq17121__$1 = cljs.core.next.call(null,seq17121);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17122,seq17121__$1);
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
var G__17130 = arguments.length;
switch (G__17130) {
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
var c__17029__auto___17176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___17176){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___17176){
return (function (state_17154){
var state_val_17155 = (state_17154[(1)]);
if((state_val_17155 === (7))){
var inst_17150 = (state_17154[(2)]);
var state_17154__$1 = state_17154;
var statearr_17156_17177 = state_17154__$1;
(statearr_17156_17177[(2)] = inst_17150);

(statearr_17156_17177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (1))){
var state_17154__$1 = state_17154;
var statearr_17157_17178 = state_17154__$1;
(statearr_17157_17178[(2)] = null);

(statearr_17157_17178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (4))){
var inst_17133 = (state_17154[(7)]);
var inst_17133__$1 = (state_17154[(2)]);
var inst_17134 = (inst_17133__$1 == null);
var state_17154__$1 = (function (){var statearr_17158 = state_17154;
(statearr_17158[(7)] = inst_17133__$1);

return statearr_17158;
})();
if(cljs.core.truth_(inst_17134)){
var statearr_17159_17179 = state_17154__$1;
(statearr_17159_17179[(1)] = (5));

} else {
var statearr_17160_17180 = state_17154__$1;
(statearr_17160_17180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (13))){
var state_17154__$1 = state_17154;
var statearr_17161_17181 = state_17154__$1;
(statearr_17161_17181[(2)] = null);

(statearr_17161_17181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (6))){
var inst_17133 = (state_17154[(7)]);
var state_17154__$1 = state_17154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17154__$1,(11),to,inst_17133);
} else {
if((state_val_17155 === (3))){
var inst_17152 = (state_17154[(2)]);
var state_17154__$1 = state_17154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17154__$1,inst_17152);
} else {
if((state_val_17155 === (12))){
var state_17154__$1 = state_17154;
var statearr_17162_17182 = state_17154__$1;
(statearr_17162_17182[(2)] = null);

(statearr_17162_17182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (2))){
var state_17154__$1 = state_17154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17154__$1,(4),from);
} else {
if((state_val_17155 === (11))){
var inst_17143 = (state_17154[(2)]);
var state_17154__$1 = state_17154;
if(cljs.core.truth_(inst_17143)){
var statearr_17163_17183 = state_17154__$1;
(statearr_17163_17183[(1)] = (12));

} else {
var statearr_17164_17184 = state_17154__$1;
(statearr_17164_17184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (9))){
var state_17154__$1 = state_17154;
var statearr_17165_17185 = state_17154__$1;
(statearr_17165_17185[(2)] = null);

(statearr_17165_17185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (5))){
var state_17154__$1 = state_17154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17166_17186 = state_17154__$1;
(statearr_17166_17186[(1)] = (8));

} else {
var statearr_17167_17187 = state_17154__$1;
(statearr_17167_17187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (14))){
var inst_17148 = (state_17154[(2)]);
var state_17154__$1 = state_17154;
var statearr_17168_17188 = state_17154__$1;
(statearr_17168_17188[(2)] = inst_17148);

(statearr_17168_17188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (10))){
var inst_17140 = (state_17154[(2)]);
var state_17154__$1 = state_17154;
var statearr_17169_17189 = state_17154__$1;
(statearr_17169_17189[(2)] = inst_17140);

(statearr_17169_17189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (8))){
var inst_17137 = cljs.core.async.close_BANG_.call(null,to);
var state_17154__$1 = state_17154;
var statearr_17170_17190 = state_17154__$1;
(statearr_17170_17190[(2)] = inst_17137);

(statearr_17170_17190[(1)] = (10));


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
});})(c__17029__auto___17176))
;
return ((function (switch__16939__auto__,c__17029__auto___17176){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_17171 = [null,null,null,null,null,null,null,null];
(statearr_17171[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_17171[(1)] = (1));

return statearr_17171;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_17154){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17172){if((e17172 instanceof Object)){
var ex__16943__auto__ = e17172;
var statearr_17173_17191 = state_17154;
(statearr_17173_17191[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17192 = state_17154;
state_17154 = G__17192;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_17154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_17154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___17176))
})();
var state__17031__auto__ = (function (){var statearr_17174 = f__17030__auto__.call(null);
(statearr_17174[(6)] = c__17029__auto___17176);

return statearr_17174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___17176))
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
return (function (p__17193){
var vec__17194 = p__17193;
var v = cljs.core.nth.call(null,vec__17194,(0),null);
var p = cljs.core.nth.call(null,vec__17194,(1),null);
var job = vec__17194;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17029__auto___17365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___17365,res,vec__17194,v,p,job,jobs,results){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___17365,res,vec__17194,v,p,job,jobs,results){
return (function (state_17201){
var state_val_17202 = (state_17201[(1)]);
if((state_val_17202 === (1))){
var state_17201__$1 = state_17201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17201__$1,(2),res,v);
} else {
if((state_val_17202 === (2))){
var inst_17198 = (state_17201[(2)]);
var inst_17199 = cljs.core.async.close_BANG_.call(null,res);
var state_17201__$1 = (function (){var statearr_17203 = state_17201;
(statearr_17203[(7)] = inst_17198);

return statearr_17203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17201__$1,inst_17199);
} else {
return null;
}
}
});})(c__17029__auto___17365,res,vec__17194,v,p,job,jobs,results))
;
return ((function (switch__16939__auto__,c__17029__auto___17365,res,vec__17194,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0 = (function (){
var statearr_17204 = [null,null,null,null,null,null,null,null];
(statearr_17204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__);

(statearr_17204[(1)] = (1));

return statearr_17204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1 = (function (state_17201){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17205){if((e17205 instanceof Object)){
var ex__16943__auto__ = e17205;
var statearr_17206_17366 = state_17201;
(statearr_17206_17366[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17367 = state_17201;
state_17201 = G__17367;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = function(state_17201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1.call(this,state_17201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___17365,res,vec__17194,v,p,job,jobs,results))
})();
var state__17031__auto__ = (function (){var statearr_17207 = f__17030__auto__.call(null);
(statearr_17207[(6)] = c__17029__auto___17365);

return statearr_17207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___17365,res,vec__17194,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17208){
var vec__17209 = p__17208;
var v = cljs.core.nth.call(null,vec__17209,(0),null);
var p = cljs.core.nth.call(null,vec__17209,(1),null);
var job = vec__17209;
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
var n__10853__auto___17368 = n;
var __17369 = (0);
while(true){
if((__17369 < n__10853__auto___17368)){
var G__17212_17370 = type;
var G__17212_17371__$1 = (((G__17212_17370 instanceof cljs.core.Keyword))?G__17212_17370.fqn:null);
switch (G__17212_17371__$1) {
case "compute":
var c__17029__auto___17373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17369,c__17029__auto___17373,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (__17369,c__17029__auto___17373,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async){
return (function (state_17225){
var state_val_17226 = (state_17225[(1)]);
if((state_val_17226 === (1))){
var state_17225__$1 = state_17225;
var statearr_17227_17374 = state_17225__$1;
(statearr_17227_17374[(2)] = null);

(statearr_17227_17374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (2))){
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17225__$1,(4),jobs);
} else {
if((state_val_17226 === (3))){
var inst_17223 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17225__$1,inst_17223);
} else {
if((state_val_17226 === (4))){
var inst_17215 = (state_17225[(2)]);
var inst_17216 = process.call(null,inst_17215);
var state_17225__$1 = state_17225;
if(cljs.core.truth_(inst_17216)){
var statearr_17228_17375 = state_17225__$1;
(statearr_17228_17375[(1)] = (5));

} else {
var statearr_17229_17376 = state_17225__$1;
(statearr_17229_17376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (5))){
var state_17225__$1 = state_17225;
var statearr_17230_17377 = state_17225__$1;
(statearr_17230_17377[(2)] = null);

(statearr_17230_17377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (6))){
var state_17225__$1 = state_17225;
var statearr_17231_17378 = state_17225__$1;
(statearr_17231_17378[(2)] = null);

(statearr_17231_17378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (7))){
var inst_17221 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17232_17379 = state_17225__$1;
(statearr_17232_17379[(2)] = inst_17221);

(statearr_17232_17379[(1)] = (3));


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
});})(__17369,c__17029__auto___17373,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async))
;
return ((function (__17369,switch__16939__auto__,c__17029__auto___17373,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0 = (function (){
var statearr_17233 = [null,null,null,null,null,null,null];
(statearr_17233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__);

(statearr_17233[(1)] = (1));

return statearr_17233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1 = (function (state_17225){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17234){if((e17234 instanceof Object)){
var ex__16943__auto__ = e17234;
var statearr_17235_17380 = state_17225;
(statearr_17235_17380[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17381 = state_17225;
state_17225 = G__17381;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = function(state_17225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1.call(this,state_17225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__;
})()
;})(__17369,switch__16939__auto__,c__17029__auto___17373,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async))
})();
var state__17031__auto__ = (function (){var statearr_17236 = f__17030__auto__.call(null);
(statearr_17236[(6)] = c__17029__auto___17373);

return statearr_17236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(__17369,c__17029__auto___17373,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async))
);


break;
case "async":
var c__17029__auto___17382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17369,c__17029__auto___17382,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (__17369,c__17029__auto___17382,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async){
return (function (state_17249){
var state_val_17250 = (state_17249[(1)]);
if((state_val_17250 === (1))){
var state_17249__$1 = state_17249;
var statearr_17251_17383 = state_17249__$1;
(statearr_17251_17383[(2)] = null);

(statearr_17251_17383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17250 === (2))){
var state_17249__$1 = state_17249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17249__$1,(4),jobs);
} else {
if((state_val_17250 === (3))){
var inst_17247 = (state_17249[(2)]);
var state_17249__$1 = state_17249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17249__$1,inst_17247);
} else {
if((state_val_17250 === (4))){
var inst_17239 = (state_17249[(2)]);
var inst_17240 = async.call(null,inst_17239);
var state_17249__$1 = state_17249;
if(cljs.core.truth_(inst_17240)){
var statearr_17252_17384 = state_17249__$1;
(statearr_17252_17384[(1)] = (5));

} else {
var statearr_17253_17385 = state_17249__$1;
(statearr_17253_17385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17250 === (5))){
var state_17249__$1 = state_17249;
var statearr_17254_17386 = state_17249__$1;
(statearr_17254_17386[(2)] = null);

(statearr_17254_17386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17250 === (6))){
var state_17249__$1 = state_17249;
var statearr_17255_17387 = state_17249__$1;
(statearr_17255_17387[(2)] = null);

(statearr_17255_17387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17250 === (7))){
var inst_17245 = (state_17249[(2)]);
var state_17249__$1 = state_17249;
var statearr_17256_17388 = state_17249__$1;
(statearr_17256_17388[(2)] = inst_17245);

(statearr_17256_17388[(1)] = (3));


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
});})(__17369,c__17029__auto___17382,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async))
;
return ((function (__17369,switch__16939__auto__,c__17029__auto___17382,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0 = (function (){
var statearr_17257 = [null,null,null,null,null,null,null];
(statearr_17257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__);

(statearr_17257[(1)] = (1));

return statearr_17257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1 = (function (state_17249){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17258){if((e17258 instanceof Object)){
var ex__16943__auto__ = e17258;
var statearr_17259_17389 = state_17249;
(statearr_17259_17389[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17390 = state_17249;
state_17249 = G__17390;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = function(state_17249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1.call(this,state_17249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__;
})()
;})(__17369,switch__16939__auto__,c__17029__auto___17382,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async))
})();
var state__17031__auto__ = (function (){var statearr_17260 = f__17030__auto__.call(null);
(statearr_17260[(6)] = c__17029__auto___17382);

return statearr_17260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(__17369,c__17029__auto___17382,G__17212_17370,G__17212_17371__$1,n__10853__auto___17368,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17212_17371__$1)].join('')));

}

var G__17391 = (__17369 + (1));
__17369 = G__17391;
continue;
} else {
}
break;
}

var c__17029__auto___17392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___17392,jobs,results,process,async){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___17392,jobs,results,process,async){
return (function (state_17282){
var state_val_17283 = (state_17282[(1)]);
if((state_val_17283 === (1))){
var state_17282__$1 = state_17282;
var statearr_17284_17393 = state_17282__$1;
(statearr_17284_17393[(2)] = null);

(statearr_17284_17393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (2))){
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17282__$1,(4),from);
} else {
if((state_val_17283 === (3))){
var inst_17280 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17282__$1,inst_17280);
} else {
if((state_val_17283 === (4))){
var inst_17263 = (state_17282[(7)]);
var inst_17263__$1 = (state_17282[(2)]);
var inst_17264 = (inst_17263__$1 == null);
var state_17282__$1 = (function (){var statearr_17285 = state_17282;
(statearr_17285[(7)] = inst_17263__$1);

return statearr_17285;
})();
if(cljs.core.truth_(inst_17264)){
var statearr_17286_17394 = state_17282__$1;
(statearr_17286_17394[(1)] = (5));

} else {
var statearr_17287_17395 = state_17282__$1;
(statearr_17287_17395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (5))){
var inst_17266 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17282__$1 = state_17282;
var statearr_17288_17396 = state_17282__$1;
(statearr_17288_17396[(2)] = inst_17266);

(statearr_17288_17396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (6))){
var inst_17263 = (state_17282[(7)]);
var inst_17268 = (state_17282[(8)]);
var inst_17268__$1 = cljs.core.async.chan.call(null,(1));
var inst_17269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17270 = [inst_17263,inst_17268__$1];
var inst_17271 = (new cljs.core.PersistentVector(null,2,(5),inst_17269,inst_17270,null));
var state_17282__$1 = (function (){var statearr_17289 = state_17282;
(statearr_17289[(8)] = inst_17268__$1);

return statearr_17289;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17282__$1,(8),jobs,inst_17271);
} else {
if((state_val_17283 === (7))){
var inst_17278 = (state_17282[(2)]);
var state_17282__$1 = state_17282;
var statearr_17290_17397 = state_17282__$1;
(statearr_17290_17397[(2)] = inst_17278);

(statearr_17290_17397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17283 === (8))){
var inst_17268 = (state_17282[(8)]);
var inst_17273 = (state_17282[(2)]);
var state_17282__$1 = (function (){var statearr_17291 = state_17282;
(statearr_17291[(9)] = inst_17273);

return statearr_17291;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17282__$1,(9),results,inst_17268);
} else {
if((state_val_17283 === (9))){
var inst_17275 = (state_17282[(2)]);
var state_17282__$1 = (function (){var statearr_17292 = state_17282;
(statearr_17292[(10)] = inst_17275);

return statearr_17292;
})();
var statearr_17293_17398 = state_17282__$1;
(statearr_17293_17398[(2)] = null);

(statearr_17293_17398[(1)] = (2));


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
});})(c__17029__auto___17392,jobs,results,process,async))
;
return ((function (switch__16939__auto__,c__17029__auto___17392,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0 = (function (){
var statearr_17294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__);

(statearr_17294[(1)] = (1));

return statearr_17294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1 = (function (state_17282){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17295){if((e17295 instanceof Object)){
var ex__16943__auto__ = e17295;
var statearr_17296_17399 = state_17282;
(statearr_17296_17399[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17400 = state_17282;
state_17282 = G__17400;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = function(state_17282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1.call(this,state_17282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___17392,jobs,results,process,async))
})();
var state__17031__auto__ = (function (){var statearr_17297 = f__17030__auto__.call(null);
(statearr_17297[(6)] = c__17029__auto___17392);

return statearr_17297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___17392,jobs,results,process,async))
);


var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__,jobs,results,process,async){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__,jobs,results,process,async){
return (function (state_17335){
var state_val_17336 = (state_17335[(1)]);
if((state_val_17336 === (7))){
var inst_17331 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17337_17401 = state_17335__$1;
(statearr_17337_17401[(2)] = inst_17331);

(statearr_17337_17401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (20))){
var state_17335__$1 = state_17335;
var statearr_17338_17402 = state_17335__$1;
(statearr_17338_17402[(2)] = null);

(statearr_17338_17402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (1))){
var state_17335__$1 = state_17335;
var statearr_17339_17403 = state_17335__$1;
(statearr_17339_17403[(2)] = null);

(statearr_17339_17403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (4))){
var inst_17300 = (state_17335[(7)]);
var inst_17300__$1 = (state_17335[(2)]);
var inst_17301 = (inst_17300__$1 == null);
var state_17335__$1 = (function (){var statearr_17340 = state_17335;
(statearr_17340[(7)] = inst_17300__$1);

return statearr_17340;
})();
if(cljs.core.truth_(inst_17301)){
var statearr_17341_17404 = state_17335__$1;
(statearr_17341_17404[(1)] = (5));

} else {
var statearr_17342_17405 = state_17335__$1;
(statearr_17342_17405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (15))){
var inst_17313 = (state_17335[(8)]);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17335__$1,(18),to,inst_17313);
} else {
if((state_val_17336 === (21))){
var inst_17326 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17343_17406 = state_17335__$1;
(statearr_17343_17406[(2)] = inst_17326);

(statearr_17343_17406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (13))){
var inst_17328 = (state_17335[(2)]);
var state_17335__$1 = (function (){var statearr_17344 = state_17335;
(statearr_17344[(9)] = inst_17328);

return statearr_17344;
})();
var statearr_17345_17407 = state_17335__$1;
(statearr_17345_17407[(2)] = null);

(statearr_17345_17407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (6))){
var inst_17300 = (state_17335[(7)]);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17335__$1,(11),inst_17300);
} else {
if((state_val_17336 === (17))){
var inst_17321 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
if(cljs.core.truth_(inst_17321)){
var statearr_17346_17408 = state_17335__$1;
(statearr_17346_17408[(1)] = (19));

} else {
var statearr_17347_17409 = state_17335__$1;
(statearr_17347_17409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (3))){
var inst_17333 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17335__$1,inst_17333);
} else {
if((state_val_17336 === (12))){
var inst_17310 = (state_17335[(10)]);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17335__$1,(14),inst_17310);
} else {
if((state_val_17336 === (2))){
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17335__$1,(4),results);
} else {
if((state_val_17336 === (19))){
var state_17335__$1 = state_17335;
var statearr_17348_17410 = state_17335__$1;
(statearr_17348_17410[(2)] = null);

(statearr_17348_17410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (11))){
var inst_17310 = (state_17335[(2)]);
var state_17335__$1 = (function (){var statearr_17349 = state_17335;
(statearr_17349[(10)] = inst_17310);

return statearr_17349;
})();
var statearr_17350_17411 = state_17335__$1;
(statearr_17350_17411[(2)] = null);

(statearr_17350_17411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (9))){
var state_17335__$1 = state_17335;
var statearr_17351_17412 = state_17335__$1;
(statearr_17351_17412[(2)] = null);

(statearr_17351_17412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (5))){
var state_17335__$1 = state_17335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17352_17413 = state_17335__$1;
(statearr_17352_17413[(1)] = (8));

} else {
var statearr_17353_17414 = state_17335__$1;
(statearr_17353_17414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (14))){
var inst_17313 = (state_17335[(8)]);
var inst_17315 = (state_17335[(11)]);
var inst_17313__$1 = (state_17335[(2)]);
var inst_17314 = (inst_17313__$1 == null);
var inst_17315__$1 = cljs.core.not.call(null,inst_17314);
var state_17335__$1 = (function (){var statearr_17354 = state_17335;
(statearr_17354[(8)] = inst_17313__$1);

(statearr_17354[(11)] = inst_17315__$1);

return statearr_17354;
})();
if(inst_17315__$1){
var statearr_17355_17415 = state_17335__$1;
(statearr_17355_17415[(1)] = (15));

} else {
var statearr_17356_17416 = state_17335__$1;
(statearr_17356_17416[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (16))){
var inst_17315 = (state_17335[(11)]);
var state_17335__$1 = state_17335;
var statearr_17357_17417 = state_17335__$1;
(statearr_17357_17417[(2)] = inst_17315);

(statearr_17357_17417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (10))){
var inst_17307 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17358_17418 = state_17335__$1;
(statearr_17358_17418[(2)] = inst_17307);

(statearr_17358_17418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (18))){
var inst_17318 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17359_17419 = state_17335__$1;
(statearr_17359_17419[(2)] = inst_17318);

(statearr_17359_17419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (8))){
var inst_17304 = cljs.core.async.close_BANG_.call(null,to);
var state_17335__$1 = state_17335;
var statearr_17360_17420 = state_17335__$1;
(statearr_17360_17420[(2)] = inst_17304);

(statearr_17360_17420[(1)] = (10));


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
});})(c__17029__auto__,jobs,results,process,async))
;
return ((function (switch__16939__auto__,c__17029__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0 = (function (){
var statearr_17361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__);

(statearr_17361[(1)] = (1));

return statearr_17361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1 = (function (state_17335){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17362){if((e17362 instanceof Object)){
var ex__16943__auto__ = e17362;
var statearr_17363_17421 = state_17335;
(statearr_17363_17421[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17422 = state_17335;
state_17335 = G__17422;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__ = function(state_17335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1.call(this,state_17335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__,jobs,results,process,async))
})();
var state__17031__auto__ = (function (){var statearr_17364 = f__17030__auto__.call(null);
(statearr_17364[(6)] = c__17029__auto__);

return statearr_17364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__,jobs,results,process,async))
);

return c__17029__auto__;
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
var G__17424 = arguments.length;
switch (G__17424) {
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
var G__17427 = arguments.length;
switch (G__17427) {
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
var G__17430 = arguments.length;
switch (G__17430) {
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
var c__17029__auto___17479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___17479,tc,fc){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___17479,tc,fc){
return (function (state_17456){
var state_val_17457 = (state_17456[(1)]);
if((state_val_17457 === (7))){
var inst_17452 = (state_17456[(2)]);
var state_17456__$1 = state_17456;
var statearr_17458_17480 = state_17456__$1;
(statearr_17458_17480[(2)] = inst_17452);

(statearr_17458_17480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (1))){
var state_17456__$1 = state_17456;
var statearr_17459_17481 = state_17456__$1;
(statearr_17459_17481[(2)] = null);

(statearr_17459_17481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (4))){
var inst_17433 = (state_17456[(7)]);
var inst_17433__$1 = (state_17456[(2)]);
var inst_17434 = (inst_17433__$1 == null);
var state_17456__$1 = (function (){var statearr_17460 = state_17456;
(statearr_17460[(7)] = inst_17433__$1);

return statearr_17460;
})();
if(cljs.core.truth_(inst_17434)){
var statearr_17461_17482 = state_17456__$1;
(statearr_17461_17482[(1)] = (5));

} else {
var statearr_17462_17483 = state_17456__$1;
(statearr_17462_17483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (13))){
var state_17456__$1 = state_17456;
var statearr_17463_17484 = state_17456__$1;
(statearr_17463_17484[(2)] = null);

(statearr_17463_17484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (6))){
var inst_17433 = (state_17456[(7)]);
var inst_17439 = p.call(null,inst_17433);
var state_17456__$1 = state_17456;
if(cljs.core.truth_(inst_17439)){
var statearr_17464_17485 = state_17456__$1;
(statearr_17464_17485[(1)] = (9));

} else {
var statearr_17465_17486 = state_17456__$1;
(statearr_17465_17486[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (3))){
var inst_17454 = (state_17456[(2)]);
var state_17456__$1 = state_17456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17456__$1,inst_17454);
} else {
if((state_val_17457 === (12))){
var state_17456__$1 = state_17456;
var statearr_17466_17487 = state_17456__$1;
(statearr_17466_17487[(2)] = null);

(statearr_17466_17487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (2))){
var state_17456__$1 = state_17456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17456__$1,(4),ch);
} else {
if((state_val_17457 === (11))){
var inst_17433 = (state_17456[(7)]);
var inst_17443 = (state_17456[(2)]);
var state_17456__$1 = state_17456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17456__$1,(8),inst_17443,inst_17433);
} else {
if((state_val_17457 === (9))){
var state_17456__$1 = state_17456;
var statearr_17467_17488 = state_17456__$1;
(statearr_17467_17488[(2)] = tc);

(statearr_17467_17488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (5))){
var inst_17436 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17437 = cljs.core.async.close_BANG_.call(null,fc);
var state_17456__$1 = (function (){var statearr_17468 = state_17456;
(statearr_17468[(8)] = inst_17436);

return statearr_17468;
})();
var statearr_17469_17489 = state_17456__$1;
(statearr_17469_17489[(2)] = inst_17437);

(statearr_17469_17489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (14))){
var inst_17450 = (state_17456[(2)]);
var state_17456__$1 = state_17456;
var statearr_17470_17490 = state_17456__$1;
(statearr_17470_17490[(2)] = inst_17450);

(statearr_17470_17490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (10))){
var state_17456__$1 = state_17456;
var statearr_17471_17491 = state_17456__$1;
(statearr_17471_17491[(2)] = fc);

(statearr_17471_17491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (8))){
var inst_17445 = (state_17456[(2)]);
var state_17456__$1 = state_17456;
if(cljs.core.truth_(inst_17445)){
var statearr_17472_17492 = state_17456__$1;
(statearr_17472_17492[(1)] = (12));

} else {
var statearr_17473_17493 = state_17456__$1;
(statearr_17473_17493[(1)] = (13));

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
});})(c__17029__auto___17479,tc,fc))
;
return ((function (switch__16939__auto__,c__17029__auto___17479,tc,fc){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_17474 = [null,null,null,null,null,null,null,null,null];
(statearr_17474[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_17474[(1)] = (1));

return statearr_17474;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_17456){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17475){if((e17475 instanceof Object)){
var ex__16943__auto__ = e17475;
var statearr_17476_17494 = state_17456;
(statearr_17476_17494[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17495 = state_17456;
state_17456 = G__17495;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_17456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_17456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___17479,tc,fc))
})();
var state__17031__auto__ = (function (){var statearr_17477 = f__17030__auto__.call(null);
(statearr_17477[(6)] = c__17029__auto___17479);

return statearr_17477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___17479,tc,fc))
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
var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__){
return (function (state_17516){
var state_val_17517 = (state_17516[(1)]);
if((state_val_17517 === (7))){
var inst_17512 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17518_17536 = state_17516__$1;
(statearr_17518_17536[(2)] = inst_17512);

(statearr_17518_17536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (1))){
var inst_17496 = init;
var state_17516__$1 = (function (){var statearr_17519 = state_17516;
(statearr_17519[(7)] = inst_17496);

return statearr_17519;
})();
var statearr_17520_17537 = state_17516__$1;
(statearr_17520_17537[(2)] = null);

(statearr_17520_17537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (4))){
var inst_17499 = (state_17516[(8)]);
var inst_17499__$1 = (state_17516[(2)]);
var inst_17500 = (inst_17499__$1 == null);
var state_17516__$1 = (function (){var statearr_17521 = state_17516;
(statearr_17521[(8)] = inst_17499__$1);

return statearr_17521;
})();
if(cljs.core.truth_(inst_17500)){
var statearr_17522_17538 = state_17516__$1;
(statearr_17522_17538[(1)] = (5));

} else {
var statearr_17523_17539 = state_17516__$1;
(statearr_17523_17539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (6))){
var inst_17499 = (state_17516[(8)]);
var inst_17496 = (state_17516[(7)]);
var inst_17503 = (state_17516[(9)]);
var inst_17503__$1 = f.call(null,inst_17496,inst_17499);
var inst_17504 = cljs.core.reduced_QMARK_.call(null,inst_17503__$1);
var state_17516__$1 = (function (){var statearr_17524 = state_17516;
(statearr_17524[(9)] = inst_17503__$1);

return statearr_17524;
})();
if(inst_17504){
var statearr_17525_17540 = state_17516__$1;
(statearr_17525_17540[(1)] = (8));

} else {
var statearr_17526_17541 = state_17516__$1;
(statearr_17526_17541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (3))){
var inst_17514 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17516__$1,inst_17514);
} else {
if((state_val_17517 === (2))){
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17516__$1,(4),ch);
} else {
if((state_val_17517 === (9))){
var inst_17503 = (state_17516[(9)]);
var inst_17496 = inst_17503;
var state_17516__$1 = (function (){var statearr_17527 = state_17516;
(statearr_17527[(7)] = inst_17496);

return statearr_17527;
})();
var statearr_17528_17542 = state_17516__$1;
(statearr_17528_17542[(2)] = null);

(statearr_17528_17542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (5))){
var inst_17496 = (state_17516[(7)]);
var state_17516__$1 = state_17516;
var statearr_17529_17543 = state_17516__$1;
(statearr_17529_17543[(2)] = inst_17496);

(statearr_17529_17543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (10))){
var inst_17510 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17530_17544 = state_17516__$1;
(statearr_17530_17544[(2)] = inst_17510);

(statearr_17530_17544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (8))){
var inst_17503 = (state_17516[(9)]);
var inst_17506 = cljs.core.deref.call(null,inst_17503);
var state_17516__$1 = state_17516;
var statearr_17531_17545 = state_17516__$1;
(statearr_17531_17545[(2)] = inst_17506);

(statearr_17531_17545[(1)] = (10));


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
});})(c__17029__auto__))
;
return ((function (switch__16939__auto__,c__17029__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16940__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16940__auto____0 = (function (){
var statearr_17532 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17532[(0)] = cljs$core$async$reduce_$_state_machine__16940__auto__);

(statearr_17532[(1)] = (1));

return statearr_17532;
});
var cljs$core$async$reduce_$_state_machine__16940__auto____1 = (function (state_17516){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17533){if((e17533 instanceof Object)){
var ex__16943__auto__ = e17533;
var statearr_17534_17546 = state_17516;
(statearr_17534_17546[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17547 = state_17516;
state_17516 = G__17547;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16940__auto__ = function(state_17516){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16940__auto____1.call(this,state_17516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16940__auto____0;
cljs$core$async$reduce_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16940__auto____1;
return cljs$core$async$reduce_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__))
})();
var state__17031__auto__ = (function (){var statearr_17535 = f__17030__auto__.call(null);
(statearr_17535[(6)] = c__17029__auto__);

return statearr_17535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__))
);

return c__17029__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__,f__$1){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__,f__$1){
return (function (state_17553){
var state_val_17554 = (state_17553[(1)]);
if((state_val_17554 === (1))){
var inst_17548 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17553__$1 = state_17553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17553__$1,(2),inst_17548);
} else {
if((state_val_17554 === (2))){
var inst_17550 = (state_17553[(2)]);
var inst_17551 = f__$1.call(null,inst_17550);
var state_17553__$1 = state_17553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17553__$1,inst_17551);
} else {
return null;
}
}
});})(c__17029__auto__,f__$1))
;
return ((function (switch__16939__auto__,c__17029__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16940__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16940__auto____0 = (function (){
var statearr_17555 = [null,null,null,null,null,null,null];
(statearr_17555[(0)] = cljs$core$async$transduce_$_state_machine__16940__auto__);

(statearr_17555[(1)] = (1));

return statearr_17555;
});
var cljs$core$async$transduce_$_state_machine__16940__auto____1 = (function (state_17553){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17556){if((e17556 instanceof Object)){
var ex__16943__auto__ = e17556;
var statearr_17557_17559 = state_17553;
(statearr_17557_17559[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17560 = state_17553;
state_17553 = G__17560;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16940__auto__ = function(state_17553){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16940__auto____1.call(this,state_17553);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16940__auto____0;
cljs$core$async$transduce_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16940__auto____1;
return cljs$core$async$transduce_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__,f__$1))
})();
var state__17031__auto__ = (function (){var statearr_17558 = f__17030__auto__.call(null);
(statearr_17558[(6)] = c__17029__auto__);

return statearr_17558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__,f__$1))
);

return c__17029__auto__;
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
var G__17562 = arguments.length;
switch (G__17562) {
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
var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__){
return (function (state_17587){
var state_val_17588 = (state_17587[(1)]);
if((state_val_17588 === (7))){
var inst_17569 = (state_17587[(2)]);
var state_17587__$1 = state_17587;
var statearr_17589_17610 = state_17587__$1;
(statearr_17589_17610[(2)] = inst_17569);

(statearr_17589_17610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (1))){
var inst_17563 = cljs.core.seq.call(null,coll);
var inst_17564 = inst_17563;
var state_17587__$1 = (function (){var statearr_17590 = state_17587;
(statearr_17590[(7)] = inst_17564);

return statearr_17590;
})();
var statearr_17591_17611 = state_17587__$1;
(statearr_17591_17611[(2)] = null);

(statearr_17591_17611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (4))){
var inst_17564 = (state_17587[(7)]);
var inst_17567 = cljs.core.first.call(null,inst_17564);
var state_17587__$1 = state_17587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17587__$1,(7),ch,inst_17567);
} else {
if((state_val_17588 === (13))){
var inst_17581 = (state_17587[(2)]);
var state_17587__$1 = state_17587;
var statearr_17592_17612 = state_17587__$1;
(statearr_17592_17612[(2)] = inst_17581);

(statearr_17592_17612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (6))){
var inst_17572 = (state_17587[(2)]);
var state_17587__$1 = state_17587;
if(cljs.core.truth_(inst_17572)){
var statearr_17593_17613 = state_17587__$1;
(statearr_17593_17613[(1)] = (8));

} else {
var statearr_17594_17614 = state_17587__$1;
(statearr_17594_17614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (3))){
var inst_17585 = (state_17587[(2)]);
var state_17587__$1 = state_17587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17587__$1,inst_17585);
} else {
if((state_val_17588 === (12))){
var state_17587__$1 = state_17587;
var statearr_17595_17615 = state_17587__$1;
(statearr_17595_17615[(2)] = null);

(statearr_17595_17615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (2))){
var inst_17564 = (state_17587[(7)]);
var state_17587__$1 = state_17587;
if(cljs.core.truth_(inst_17564)){
var statearr_17596_17616 = state_17587__$1;
(statearr_17596_17616[(1)] = (4));

} else {
var statearr_17597_17617 = state_17587__$1;
(statearr_17597_17617[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (11))){
var inst_17578 = cljs.core.async.close_BANG_.call(null,ch);
var state_17587__$1 = state_17587;
var statearr_17598_17618 = state_17587__$1;
(statearr_17598_17618[(2)] = inst_17578);

(statearr_17598_17618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (9))){
var state_17587__$1 = state_17587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17599_17619 = state_17587__$1;
(statearr_17599_17619[(1)] = (11));

} else {
var statearr_17600_17620 = state_17587__$1;
(statearr_17600_17620[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (5))){
var inst_17564 = (state_17587[(7)]);
var state_17587__$1 = state_17587;
var statearr_17601_17621 = state_17587__$1;
(statearr_17601_17621[(2)] = inst_17564);

(statearr_17601_17621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (10))){
var inst_17583 = (state_17587[(2)]);
var state_17587__$1 = state_17587;
var statearr_17602_17622 = state_17587__$1;
(statearr_17602_17622[(2)] = inst_17583);

(statearr_17602_17622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17588 === (8))){
var inst_17564 = (state_17587[(7)]);
var inst_17574 = cljs.core.next.call(null,inst_17564);
var inst_17564__$1 = inst_17574;
var state_17587__$1 = (function (){var statearr_17603 = state_17587;
(statearr_17603[(7)] = inst_17564__$1);

return statearr_17603;
})();
var statearr_17604_17623 = state_17587__$1;
(statearr_17604_17623[(2)] = null);

(statearr_17604_17623[(1)] = (2));


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
});})(c__17029__auto__))
;
return ((function (switch__16939__auto__,c__17029__auto__){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_17605 = [null,null,null,null,null,null,null,null];
(statearr_17605[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_17605[(1)] = (1));

return statearr_17605;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_17587){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17606){if((e17606 instanceof Object)){
var ex__16943__auto__ = e17606;
var statearr_17607_17624 = state_17587;
(statearr_17607_17624[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17625 = state_17587;
state_17587 = G__17625;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_17587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_17587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__))
})();
var state__17031__auto__ = (function (){var statearr_17608 = f__17030__auto__.call(null);
(statearr_17608[(6)] = c__17029__auto__);

return statearr_17608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__))
);

return c__17029__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async17626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17626 = (function (ch,cs,meta17627){
this.ch = ch;
this.cs = cs;
this.meta17627 = meta17627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17628,meta17627__$1){
var self__ = this;
var _17628__$1 = this;
return (new cljs.core.async.t_cljs$core$async17626(self__.ch,self__.cs,meta17627__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17628){
var self__ = this;
var _17628__$1 = this;
return self__.meta17627;
});})(cs))
;

cljs.core.async.t_cljs$core$async17626.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17626.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17626.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17626.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17626.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17626.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17627","meta17627",242395195,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17626";

cljs.core.async.t_cljs$core$async17626.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17626");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17626 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17626(ch__$1,cs__$1,meta17627){
return (new cljs.core.async.t_cljs$core$async17626(ch__$1,cs__$1,meta17627));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17626(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17029__auto___17848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___17848,cs,m,dchan,dctr,done){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___17848,cs,m,dchan,dctr,done){
return (function (state_17763){
var state_val_17764 = (state_17763[(1)]);
if((state_val_17764 === (7))){
var inst_17759 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17765_17849 = state_17763__$1;
(statearr_17765_17849[(2)] = inst_17759);

(statearr_17765_17849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (20))){
var inst_17662 = (state_17763[(7)]);
var inst_17674 = cljs.core.first.call(null,inst_17662);
var inst_17675 = cljs.core.nth.call(null,inst_17674,(0),null);
var inst_17676 = cljs.core.nth.call(null,inst_17674,(1),null);
var state_17763__$1 = (function (){var statearr_17766 = state_17763;
(statearr_17766[(8)] = inst_17675);

return statearr_17766;
})();
if(cljs.core.truth_(inst_17676)){
var statearr_17767_17850 = state_17763__$1;
(statearr_17767_17850[(1)] = (22));

} else {
var statearr_17768_17851 = state_17763__$1;
(statearr_17768_17851[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (27))){
var inst_17706 = (state_17763[(9)]);
var inst_17631 = (state_17763[(10)]);
var inst_17704 = (state_17763[(11)]);
var inst_17711 = (state_17763[(12)]);
var inst_17711__$1 = cljs.core._nth.call(null,inst_17704,inst_17706);
var inst_17712 = cljs.core.async.put_BANG_.call(null,inst_17711__$1,inst_17631,done);
var state_17763__$1 = (function (){var statearr_17769 = state_17763;
(statearr_17769[(12)] = inst_17711__$1);

return statearr_17769;
})();
if(cljs.core.truth_(inst_17712)){
var statearr_17770_17852 = state_17763__$1;
(statearr_17770_17852[(1)] = (30));

} else {
var statearr_17771_17853 = state_17763__$1;
(statearr_17771_17853[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (1))){
var state_17763__$1 = state_17763;
var statearr_17772_17854 = state_17763__$1;
(statearr_17772_17854[(2)] = null);

(statearr_17772_17854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (24))){
var inst_17662 = (state_17763[(7)]);
var inst_17681 = (state_17763[(2)]);
var inst_17682 = cljs.core.next.call(null,inst_17662);
var inst_17640 = inst_17682;
var inst_17641 = null;
var inst_17642 = (0);
var inst_17643 = (0);
var state_17763__$1 = (function (){var statearr_17773 = state_17763;
(statearr_17773[(13)] = inst_17640);

(statearr_17773[(14)] = inst_17643);

(statearr_17773[(15)] = inst_17642);

(statearr_17773[(16)] = inst_17681);

(statearr_17773[(17)] = inst_17641);

return statearr_17773;
})();
var statearr_17774_17855 = state_17763__$1;
(statearr_17774_17855[(2)] = null);

(statearr_17774_17855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (39))){
var state_17763__$1 = state_17763;
var statearr_17778_17856 = state_17763__$1;
(statearr_17778_17856[(2)] = null);

(statearr_17778_17856[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (4))){
var inst_17631 = (state_17763[(10)]);
var inst_17631__$1 = (state_17763[(2)]);
var inst_17632 = (inst_17631__$1 == null);
var state_17763__$1 = (function (){var statearr_17779 = state_17763;
(statearr_17779[(10)] = inst_17631__$1);

return statearr_17779;
})();
if(cljs.core.truth_(inst_17632)){
var statearr_17780_17857 = state_17763__$1;
(statearr_17780_17857[(1)] = (5));

} else {
var statearr_17781_17858 = state_17763__$1;
(statearr_17781_17858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (15))){
var inst_17640 = (state_17763[(13)]);
var inst_17643 = (state_17763[(14)]);
var inst_17642 = (state_17763[(15)]);
var inst_17641 = (state_17763[(17)]);
var inst_17658 = (state_17763[(2)]);
var inst_17659 = (inst_17643 + (1));
var tmp17775 = inst_17640;
var tmp17776 = inst_17642;
var tmp17777 = inst_17641;
var inst_17640__$1 = tmp17775;
var inst_17641__$1 = tmp17777;
var inst_17642__$1 = tmp17776;
var inst_17643__$1 = inst_17659;
var state_17763__$1 = (function (){var statearr_17782 = state_17763;
(statearr_17782[(13)] = inst_17640__$1);

(statearr_17782[(14)] = inst_17643__$1);

(statearr_17782[(15)] = inst_17642__$1);

(statearr_17782[(18)] = inst_17658);

(statearr_17782[(17)] = inst_17641__$1);

return statearr_17782;
})();
var statearr_17783_17859 = state_17763__$1;
(statearr_17783_17859[(2)] = null);

(statearr_17783_17859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (21))){
var inst_17685 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17787_17860 = state_17763__$1;
(statearr_17787_17860[(2)] = inst_17685);

(statearr_17787_17860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (31))){
var inst_17711 = (state_17763[(12)]);
var inst_17715 = done.call(null,null);
var inst_17716 = cljs.core.async.untap_STAR_.call(null,m,inst_17711);
var state_17763__$1 = (function (){var statearr_17788 = state_17763;
(statearr_17788[(19)] = inst_17715);

return statearr_17788;
})();
var statearr_17789_17861 = state_17763__$1;
(statearr_17789_17861[(2)] = inst_17716);

(statearr_17789_17861[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (32))){
var inst_17706 = (state_17763[(9)]);
var inst_17704 = (state_17763[(11)]);
var inst_17703 = (state_17763[(20)]);
var inst_17705 = (state_17763[(21)]);
var inst_17718 = (state_17763[(2)]);
var inst_17719 = (inst_17706 + (1));
var tmp17784 = inst_17704;
var tmp17785 = inst_17703;
var tmp17786 = inst_17705;
var inst_17703__$1 = tmp17785;
var inst_17704__$1 = tmp17784;
var inst_17705__$1 = tmp17786;
var inst_17706__$1 = inst_17719;
var state_17763__$1 = (function (){var statearr_17790 = state_17763;
(statearr_17790[(9)] = inst_17706__$1);

(statearr_17790[(11)] = inst_17704__$1);

(statearr_17790[(20)] = inst_17703__$1);

(statearr_17790[(21)] = inst_17705__$1);

(statearr_17790[(22)] = inst_17718);

return statearr_17790;
})();
var statearr_17791_17862 = state_17763__$1;
(statearr_17791_17862[(2)] = null);

(statearr_17791_17862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (40))){
var inst_17731 = (state_17763[(23)]);
var inst_17735 = done.call(null,null);
var inst_17736 = cljs.core.async.untap_STAR_.call(null,m,inst_17731);
var state_17763__$1 = (function (){var statearr_17792 = state_17763;
(statearr_17792[(24)] = inst_17735);

return statearr_17792;
})();
var statearr_17793_17863 = state_17763__$1;
(statearr_17793_17863[(2)] = inst_17736);

(statearr_17793_17863[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (33))){
var inst_17722 = (state_17763[(25)]);
var inst_17724 = cljs.core.chunked_seq_QMARK_.call(null,inst_17722);
var state_17763__$1 = state_17763;
if(inst_17724){
var statearr_17794_17864 = state_17763__$1;
(statearr_17794_17864[(1)] = (36));

} else {
var statearr_17795_17865 = state_17763__$1;
(statearr_17795_17865[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (13))){
var inst_17652 = (state_17763[(26)]);
var inst_17655 = cljs.core.async.close_BANG_.call(null,inst_17652);
var state_17763__$1 = state_17763;
var statearr_17796_17866 = state_17763__$1;
(statearr_17796_17866[(2)] = inst_17655);

(statearr_17796_17866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (22))){
var inst_17675 = (state_17763[(8)]);
var inst_17678 = cljs.core.async.close_BANG_.call(null,inst_17675);
var state_17763__$1 = state_17763;
var statearr_17797_17867 = state_17763__$1;
(statearr_17797_17867[(2)] = inst_17678);

(statearr_17797_17867[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (36))){
var inst_17722 = (state_17763[(25)]);
var inst_17726 = cljs.core.chunk_first.call(null,inst_17722);
var inst_17727 = cljs.core.chunk_rest.call(null,inst_17722);
var inst_17728 = cljs.core.count.call(null,inst_17726);
var inst_17703 = inst_17727;
var inst_17704 = inst_17726;
var inst_17705 = inst_17728;
var inst_17706 = (0);
var state_17763__$1 = (function (){var statearr_17798 = state_17763;
(statearr_17798[(9)] = inst_17706);

(statearr_17798[(11)] = inst_17704);

(statearr_17798[(20)] = inst_17703);

(statearr_17798[(21)] = inst_17705);

return statearr_17798;
})();
var statearr_17799_17868 = state_17763__$1;
(statearr_17799_17868[(2)] = null);

(statearr_17799_17868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (41))){
var inst_17722 = (state_17763[(25)]);
var inst_17738 = (state_17763[(2)]);
var inst_17739 = cljs.core.next.call(null,inst_17722);
var inst_17703 = inst_17739;
var inst_17704 = null;
var inst_17705 = (0);
var inst_17706 = (0);
var state_17763__$1 = (function (){var statearr_17800 = state_17763;
(statearr_17800[(9)] = inst_17706);

(statearr_17800[(27)] = inst_17738);

(statearr_17800[(11)] = inst_17704);

(statearr_17800[(20)] = inst_17703);

(statearr_17800[(21)] = inst_17705);

return statearr_17800;
})();
var statearr_17801_17869 = state_17763__$1;
(statearr_17801_17869[(2)] = null);

(statearr_17801_17869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (43))){
var state_17763__$1 = state_17763;
var statearr_17802_17870 = state_17763__$1;
(statearr_17802_17870[(2)] = null);

(statearr_17802_17870[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (29))){
var inst_17747 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17803_17871 = state_17763__$1;
(statearr_17803_17871[(2)] = inst_17747);

(statearr_17803_17871[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (44))){
var inst_17756 = (state_17763[(2)]);
var state_17763__$1 = (function (){var statearr_17804 = state_17763;
(statearr_17804[(28)] = inst_17756);

return statearr_17804;
})();
var statearr_17805_17872 = state_17763__$1;
(statearr_17805_17872[(2)] = null);

(statearr_17805_17872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (6))){
var inst_17695 = (state_17763[(29)]);
var inst_17694 = cljs.core.deref.call(null,cs);
var inst_17695__$1 = cljs.core.keys.call(null,inst_17694);
var inst_17696 = cljs.core.count.call(null,inst_17695__$1);
var inst_17697 = cljs.core.reset_BANG_.call(null,dctr,inst_17696);
var inst_17702 = cljs.core.seq.call(null,inst_17695__$1);
var inst_17703 = inst_17702;
var inst_17704 = null;
var inst_17705 = (0);
var inst_17706 = (0);
var state_17763__$1 = (function (){var statearr_17806 = state_17763;
(statearr_17806[(30)] = inst_17697);

(statearr_17806[(9)] = inst_17706);

(statearr_17806[(29)] = inst_17695__$1);

(statearr_17806[(11)] = inst_17704);

(statearr_17806[(20)] = inst_17703);

(statearr_17806[(21)] = inst_17705);

return statearr_17806;
})();
var statearr_17807_17873 = state_17763__$1;
(statearr_17807_17873[(2)] = null);

(statearr_17807_17873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (28))){
var inst_17722 = (state_17763[(25)]);
var inst_17703 = (state_17763[(20)]);
var inst_17722__$1 = cljs.core.seq.call(null,inst_17703);
var state_17763__$1 = (function (){var statearr_17808 = state_17763;
(statearr_17808[(25)] = inst_17722__$1);

return statearr_17808;
})();
if(inst_17722__$1){
var statearr_17809_17874 = state_17763__$1;
(statearr_17809_17874[(1)] = (33));

} else {
var statearr_17810_17875 = state_17763__$1;
(statearr_17810_17875[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (25))){
var inst_17706 = (state_17763[(9)]);
var inst_17705 = (state_17763[(21)]);
var inst_17708 = (inst_17706 < inst_17705);
var inst_17709 = inst_17708;
var state_17763__$1 = state_17763;
if(cljs.core.truth_(inst_17709)){
var statearr_17811_17876 = state_17763__$1;
(statearr_17811_17876[(1)] = (27));

} else {
var statearr_17812_17877 = state_17763__$1;
(statearr_17812_17877[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (34))){
var state_17763__$1 = state_17763;
var statearr_17813_17878 = state_17763__$1;
(statearr_17813_17878[(2)] = null);

(statearr_17813_17878[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (17))){
var state_17763__$1 = state_17763;
var statearr_17814_17879 = state_17763__$1;
(statearr_17814_17879[(2)] = null);

(statearr_17814_17879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (3))){
var inst_17761 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17763__$1,inst_17761);
} else {
if((state_val_17764 === (12))){
var inst_17690 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17815_17880 = state_17763__$1;
(statearr_17815_17880[(2)] = inst_17690);

(statearr_17815_17880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (2))){
var state_17763__$1 = state_17763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17763__$1,(4),ch);
} else {
if((state_val_17764 === (23))){
var state_17763__$1 = state_17763;
var statearr_17816_17881 = state_17763__$1;
(statearr_17816_17881[(2)] = null);

(statearr_17816_17881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (35))){
var inst_17745 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17817_17882 = state_17763__$1;
(statearr_17817_17882[(2)] = inst_17745);

(statearr_17817_17882[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (19))){
var inst_17662 = (state_17763[(7)]);
var inst_17666 = cljs.core.chunk_first.call(null,inst_17662);
var inst_17667 = cljs.core.chunk_rest.call(null,inst_17662);
var inst_17668 = cljs.core.count.call(null,inst_17666);
var inst_17640 = inst_17667;
var inst_17641 = inst_17666;
var inst_17642 = inst_17668;
var inst_17643 = (0);
var state_17763__$1 = (function (){var statearr_17818 = state_17763;
(statearr_17818[(13)] = inst_17640);

(statearr_17818[(14)] = inst_17643);

(statearr_17818[(15)] = inst_17642);

(statearr_17818[(17)] = inst_17641);

return statearr_17818;
})();
var statearr_17819_17883 = state_17763__$1;
(statearr_17819_17883[(2)] = null);

(statearr_17819_17883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (11))){
var inst_17640 = (state_17763[(13)]);
var inst_17662 = (state_17763[(7)]);
var inst_17662__$1 = cljs.core.seq.call(null,inst_17640);
var state_17763__$1 = (function (){var statearr_17820 = state_17763;
(statearr_17820[(7)] = inst_17662__$1);

return statearr_17820;
})();
if(inst_17662__$1){
var statearr_17821_17884 = state_17763__$1;
(statearr_17821_17884[(1)] = (16));

} else {
var statearr_17822_17885 = state_17763__$1;
(statearr_17822_17885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (9))){
var inst_17692 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17823_17886 = state_17763__$1;
(statearr_17823_17886[(2)] = inst_17692);

(statearr_17823_17886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (5))){
var inst_17638 = cljs.core.deref.call(null,cs);
var inst_17639 = cljs.core.seq.call(null,inst_17638);
var inst_17640 = inst_17639;
var inst_17641 = null;
var inst_17642 = (0);
var inst_17643 = (0);
var state_17763__$1 = (function (){var statearr_17824 = state_17763;
(statearr_17824[(13)] = inst_17640);

(statearr_17824[(14)] = inst_17643);

(statearr_17824[(15)] = inst_17642);

(statearr_17824[(17)] = inst_17641);

return statearr_17824;
})();
var statearr_17825_17887 = state_17763__$1;
(statearr_17825_17887[(2)] = null);

(statearr_17825_17887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (14))){
var state_17763__$1 = state_17763;
var statearr_17826_17888 = state_17763__$1;
(statearr_17826_17888[(2)] = null);

(statearr_17826_17888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (45))){
var inst_17753 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17827_17889 = state_17763__$1;
(statearr_17827_17889[(2)] = inst_17753);

(statearr_17827_17889[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (26))){
var inst_17695 = (state_17763[(29)]);
var inst_17749 = (state_17763[(2)]);
var inst_17750 = cljs.core.seq.call(null,inst_17695);
var state_17763__$1 = (function (){var statearr_17828 = state_17763;
(statearr_17828[(31)] = inst_17749);

return statearr_17828;
})();
if(inst_17750){
var statearr_17829_17890 = state_17763__$1;
(statearr_17829_17890[(1)] = (42));

} else {
var statearr_17830_17891 = state_17763__$1;
(statearr_17830_17891[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (16))){
var inst_17662 = (state_17763[(7)]);
var inst_17664 = cljs.core.chunked_seq_QMARK_.call(null,inst_17662);
var state_17763__$1 = state_17763;
if(inst_17664){
var statearr_17831_17892 = state_17763__$1;
(statearr_17831_17892[(1)] = (19));

} else {
var statearr_17832_17893 = state_17763__$1;
(statearr_17832_17893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (38))){
var inst_17742 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17833_17894 = state_17763__$1;
(statearr_17833_17894[(2)] = inst_17742);

(statearr_17833_17894[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (30))){
var state_17763__$1 = state_17763;
var statearr_17834_17895 = state_17763__$1;
(statearr_17834_17895[(2)] = null);

(statearr_17834_17895[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (10))){
var inst_17643 = (state_17763[(14)]);
var inst_17641 = (state_17763[(17)]);
var inst_17651 = cljs.core._nth.call(null,inst_17641,inst_17643);
var inst_17652 = cljs.core.nth.call(null,inst_17651,(0),null);
var inst_17653 = cljs.core.nth.call(null,inst_17651,(1),null);
var state_17763__$1 = (function (){var statearr_17835 = state_17763;
(statearr_17835[(26)] = inst_17652);

return statearr_17835;
})();
if(cljs.core.truth_(inst_17653)){
var statearr_17836_17896 = state_17763__$1;
(statearr_17836_17896[(1)] = (13));

} else {
var statearr_17837_17897 = state_17763__$1;
(statearr_17837_17897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (18))){
var inst_17688 = (state_17763[(2)]);
var state_17763__$1 = state_17763;
var statearr_17838_17898 = state_17763__$1;
(statearr_17838_17898[(2)] = inst_17688);

(statearr_17838_17898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (42))){
var state_17763__$1 = state_17763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17763__$1,(45),dchan);
} else {
if((state_val_17764 === (37))){
var inst_17722 = (state_17763[(25)]);
var inst_17631 = (state_17763[(10)]);
var inst_17731 = (state_17763[(23)]);
var inst_17731__$1 = cljs.core.first.call(null,inst_17722);
var inst_17732 = cljs.core.async.put_BANG_.call(null,inst_17731__$1,inst_17631,done);
var state_17763__$1 = (function (){var statearr_17839 = state_17763;
(statearr_17839[(23)] = inst_17731__$1);

return statearr_17839;
})();
if(cljs.core.truth_(inst_17732)){
var statearr_17840_17899 = state_17763__$1;
(statearr_17840_17899[(1)] = (39));

} else {
var statearr_17841_17900 = state_17763__$1;
(statearr_17841_17900[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17764 === (8))){
var inst_17643 = (state_17763[(14)]);
var inst_17642 = (state_17763[(15)]);
var inst_17645 = (inst_17643 < inst_17642);
var inst_17646 = inst_17645;
var state_17763__$1 = state_17763;
if(cljs.core.truth_(inst_17646)){
var statearr_17842_17901 = state_17763__$1;
(statearr_17842_17901[(1)] = (10));

} else {
var statearr_17843_17902 = state_17763__$1;
(statearr_17843_17902[(1)] = (11));

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
});})(c__17029__auto___17848,cs,m,dchan,dctr,done))
;
return ((function (switch__16939__auto__,c__17029__auto___17848,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16940__auto__ = null;
var cljs$core$async$mult_$_state_machine__16940__auto____0 = (function (){
var statearr_17844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17844[(0)] = cljs$core$async$mult_$_state_machine__16940__auto__);

(statearr_17844[(1)] = (1));

return statearr_17844;
});
var cljs$core$async$mult_$_state_machine__16940__auto____1 = (function (state_17763){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_17763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e17845){if((e17845 instanceof Object)){
var ex__16943__auto__ = e17845;
var statearr_17846_17903 = state_17763;
(statearr_17846_17903[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17904 = state_17763;
state_17763 = G__17904;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16940__auto__ = function(state_17763){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16940__auto____1.call(this,state_17763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16940__auto____0;
cljs$core$async$mult_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16940__auto____1;
return cljs$core$async$mult_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___17848,cs,m,dchan,dctr,done))
})();
var state__17031__auto__ = (function (){var statearr_17847 = f__17030__auto__.call(null);
(statearr_17847[(6)] = c__17029__auto___17848);

return statearr_17847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___17848,cs,m,dchan,dctr,done))
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
var G__17906 = arguments.length;
switch (G__17906) {
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
var len__11087__auto___17918 = arguments.length;
var i__11088__auto___17919 = (0);
while(true){
if((i__11088__auto___17919 < len__11087__auto___17918)){
args__11094__auto__.push((arguments[i__11088__auto___17919]));

var G__17920 = (i__11088__auto___17919 + (1));
i__11088__auto___17919 = G__17920;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((3) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17912){
var map__17913 = p__17912;
var map__17913__$1 = ((((!((map__17913 == null)))?((((map__17913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17913):map__17913);
var opts = map__17913__$1;
var statearr_17915_17921 = state;
(statearr_17915_17921[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__17913,map__17913__$1,opts){
return (function (val){
var statearr_17916_17922 = state;
(statearr_17916_17922[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17913,map__17913__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_17917_17923 = state;
(statearr_17917_17923[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17908){
var G__17909 = cljs.core.first.call(null,seq17908);
var seq17908__$1 = cljs.core.next.call(null,seq17908);
var G__17910 = cljs.core.first.call(null,seq17908__$1);
var seq17908__$2 = cljs.core.next.call(null,seq17908__$1);
var G__17911 = cljs.core.first.call(null,seq17908__$2);
var seq17908__$3 = cljs.core.next.call(null,seq17908__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17909,G__17910,G__17911,seq17908__$3);
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
if(typeof cljs.core.async.t_cljs$core$async17924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17924 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17925){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17925 = meta17925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17926,meta17925__$1){
var self__ = this;
var _17926__$1 = this;
return (new cljs.core.async.t_cljs$core$async17924(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17925__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17926){
var self__ = this;
var _17926__$1 = this;
return self__.meta17925;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17924.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17925","meta17925",1065259854,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17924";

cljs.core.async.t_cljs$core$async17924.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17924");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17924 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17924(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17925){
return (new cljs.core.async.t_cljs$core$async17924(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17925));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17924(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17029__auto___18088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18028){
var state_val_18029 = (state_18028[(1)]);
if((state_val_18029 === (7))){
var inst_17943 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18030_18089 = state_18028__$1;
(statearr_18030_18089[(2)] = inst_17943);

(statearr_18030_18089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (20))){
var inst_17955 = (state_18028[(7)]);
var state_18028__$1 = state_18028;
var statearr_18031_18090 = state_18028__$1;
(statearr_18031_18090[(2)] = inst_17955);

(statearr_18031_18090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (27))){
var state_18028__$1 = state_18028;
var statearr_18032_18091 = state_18028__$1;
(statearr_18032_18091[(2)] = null);

(statearr_18032_18091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (1))){
var inst_17930 = (state_18028[(8)]);
var inst_17930__$1 = calc_state.call(null);
var inst_17932 = (inst_17930__$1 == null);
var inst_17933 = cljs.core.not.call(null,inst_17932);
var state_18028__$1 = (function (){var statearr_18033 = state_18028;
(statearr_18033[(8)] = inst_17930__$1);

return statearr_18033;
})();
if(inst_17933){
var statearr_18034_18092 = state_18028__$1;
(statearr_18034_18092[(1)] = (2));

} else {
var statearr_18035_18093 = state_18028__$1;
(statearr_18035_18093[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (24))){
var inst_17979 = (state_18028[(9)]);
var inst_17988 = (state_18028[(10)]);
var inst_18002 = (state_18028[(11)]);
var inst_18002__$1 = inst_17979.call(null,inst_17988);
var state_18028__$1 = (function (){var statearr_18036 = state_18028;
(statearr_18036[(11)] = inst_18002__$1);

return statearr_18036;
})();
if(cljs.core.truth_(inst_18002__$1)){
var statearr_18037_18094 = state_18028__$1;
(statearr_18037_18094[(1)] = (29));

} else {
var statearr_18038_18095 = state_18028__$1;
(statearr_18038_18095[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (4))){
var inst_17946 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_17946)){
var statearr_18039_18096 = state_18028__$1;
(statearr_18039_18096[(1)] = (8));

} else {
var statearr_18040_18097 = state_18028__$1;
(statearr_18040_18097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (15))){
var inst_17973 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_17973)){
var statearr_18041_18098 = state_18028__$1;
(statearr_18041_18098[(1)] = (19));

} else {
var statearr_18042_18099 = state_18028__$1;
(statearr_18042_18099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (21))){
var inst_17978 = (state_18028[(12)]);
var inst_17978__$1 = (state_18028[(2)]);
var inst_17979 = cljs.core.get.call(null,inst_17978__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17980 = cljs.core.get.call(null,inst_17978__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17981 = cljs.core.get.call(null,inst_17978__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18028__$1 = (function (){var statearr_18043 = state_18028;
(statearr_18043[(12)] = inst_17978__$1);

(statearr_18043[(9)] = inst_17979);

(statearr_18043[(13)] = inst_17980);

return statearr_18043;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18028__$1,(22),inst_17981);
} else {
if((state_val_18029 === (31))){
var inst_18010 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_18010)){
var statearr_18044_18100 = state_18028__$1;
(statearr_18044_18100[(1)] = (32));

} else {
var statearr_18045_18101 = state_18028__$1;
(statearr_18045_18101[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (32))){
var inst_17987 = (state_18028[(14)]);
var state_18028__$1 = state_18028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18028__$1,(35),out,inst_17987);
} else {
if((state_val_18029 === (33))){
var inst_17978 = (state_18028[(12)]);
var inst_17955 = inst_17978;
var state_18028__$1 = (function (){var statearr_18046 = state_18028;
(statearr_18046[(7)] = inst_17955);

return statearr_18046;
})();
var statearr_18047_18102 = state_18028__$1;
(statearr_18047_18102[(2)] = null);

(statearr_18047_18102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (13))){
var inst_17955 = (state_18028[(7)]);
var inst_17962 = inst_17955.cljs$lang$protocol_mask$partition0$;
var inst_17963 = (inst_17962 & (64));
var inst_17964 = inst_17955.cljs$core$ISeq$;
var inst_17965 = (cljs.core.PROTOCOL_SENTINEL === inst_17964);
var inst_17966 = (inst_17963) || (inst_17965);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_17966)){
var statearr_18048_18103 = state_18028__$1;
(statearr_18048_18103[(1)] = (16));

} else {
var statearr_18049_18104 = state_18028__$1;
(statearr_18049_18104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (22))){
var inst_17988 = (state_18028[(10)]);
var inst_17987 = (state_18028[(14)]);
var inst_17986 = (state_18028[(2)]);
var inst_17987__$1 = cljs.core.nth.call(null,inst_17986,(0),null);
var inst_17988__$1 = cljs.core.nth.call(null,inst_17986,(1),null);
var inst_17989 = (inst_17987__$1 == null);
var inst_17990 = cljs.core._EQ_.call(null,inst_17988__$1,change);
var inst_17991 = (inst_17989) || (inst_17990);
var state_18028__$1 = (function (){var statearr_18050 = state_18028;
(statearr_18050[(10)] = inst_17988__$1);

(statearr_18050[(14)] = inst_17987__$1);

return statearr_18050;
})();
if(cljs.core.truth_(inst_17991)){
var statearr_18051_18105 = state_18028__$1;
(statearr_18051_18105[(1)] = (23));

} else {
var statearr_18052_18106 = state_18028__$1;
(statearr_18052_18106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (36))){
var inst_17978 = (state_18028[(12)]);
var inst_17955 = inst_17978;
var state_18028__$1 = (function (){var statearr_18053 = state_18028;
(statearr_18053[(7)] = inst_17955);

return statearr_18053;
})();
var statearr_18054_18107 = state_18028__$1;
(statearr_18054_18107[(2)] = null);

(statearr_18054_18107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (29))){
var inst_18002 = (state_18028[(11)]);
var state_18028__$1 = state_18028;
var statearr_18055_18108 = state_18028__$1;
(statearr_18055_18108[(2)] = inst_18002);

(statearr_18055_18108[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (6))){
var state_18028__$1 = state_18028;
var statearr_18056_18109 = state_18028__$1;
(statearr_18056_18109[(2)] = false);

(statearr_18056_18109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (28))){
var inst_17998 = (state_18028[(2)]);
var inst_17999 = calc_state.call(null);
var inst_17955 = inst_17999;
var state_18028__$1 = (function (){var statearr_18057 = state_18028;
(statearr_18057[(15)] = inst_17998);

(statearr_18057[(7)] = inst_17955);

return statearr_18057;
})();
var statearr_18058_18110 = state_18028__$1;
(statearr_18058_18110[(2)] = null);

(statearr_18058_18110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (25))){
var inst_18024 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18059_18111 = state_18028__$1;
(statearr_18059_18111[(2)] = inst_18024);

(statearr_18059_18111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (34))){
var inst_18022 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18060_18112 = state_18028__$1;
(statearr_18060_18112[(2)] = inst_18022);

(statearr_18060_18112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (17))){
var state_18028__$1 = state_18028;
var statearr_18061_18113 = state_18028__$1;
(statearr_18061_18113[(2)] = false);

(statearr_18061_18113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (3))){
var state_18028__$1 = state_18028;
var statearr_18062_18114 = state_18028__$1;
(statearr_18062_18114[(2)] = false);

(statearr_18062_18114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (12))){
var inst_18026 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18028__$1,inst_18026);
} else {
if((state_val_18029 === (2))){
var inst_17930 = (state_18028[(8)]);
var inst_17935 = inst_17930.cljs$lang$protocol_mask$partition0$;
var inst_17936 = (inst_17935 & (64));
var inst_17937 = inst_17930.cljs$core$ISeq$;
var inst_17938 = (cljs.core.PROTOCOL_SENTINEL === inst_17937);
var inst_17939 = (inst_17936) || (inst_17938);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_17939)){
var statearr_18063_18115 = state_18028__$1;
(statearr_18063_18115[(1)] = (5));

} else {
var statearr_18064_18116 = state_18028__$1;
(statearr_18064_18116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (23))){
var inst_17987 = (state_18028[(14)]);
var inst_17993 = (inst_17987 == null);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_17993)){
var statearr_18065_18117 = state_18028__$1;
(statearr_18065_18117[(1)] = (26));

} else {
var statearr_18066_18118 = state_18028__$1;
(statearr_18066_18118[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (35))){
var inst_18013 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_18013)){
var statearr_18067_18119 = state_18028__$1;
(statearr_18067_18119[(1)] = (36));

} else {
var statearr_18068_18120 = state_18028__$1;
(statearr_18068_18120[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (19))){
var inst_17955 = (state_18028[(7)]);
var inst_17975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17955);
var state_18028__$1 = state_18028;
var statearr_18069_18121 = state_18028__$1;
(statearr_18069_18121[(2)] = inst_17975);

(statearr_18069_18121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (11))){
var inst_17955 = (state_18028[(7)]);
var inst_17959 = (inst_17955 == null);
var inst_17960 = cljs.core.not.call(null,inst_17959);
var state_18028__$1 = state_18028;
if(inst_17960){
var statearr_18070_18122 = state_18028__$1;
(statearr_18070_18122[(1)] = (13));

} else {
var statearr_18071_18123 = state_18028__$1;
(statearr_18071_18123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (9))){
var inst_17930 = (state_18028[(8)]);
var state_18028__$1 = state_18028;
var statearr_18072_18124 = state_18028__$1;
(statearr_18072_18124[(2)] = inst_17930);

(statearr_18072_18124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (5))){
var state_18028__$1 = state_18028;
var statearr_18073_18125 = state_18028__$1;
(statearr_18073_18125[(2)] = true);

(statearr_18073_18125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (14))){
var state_18028__$1 = state_18028;
var statearr_18074_18126 = state_18028__$1;
(statearr_18074_18126[(2)] = false);

(statearr_18074_18126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (26))){
var inst_17988 = (state_18028[(10)]);
var inst_17995 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17988);
var state_18028__$1 = state_18028;
var statearr_18075_18127 = state_18028__$1;
(statearr_18075_18127[(2)] = inst_17995);

(statearr_18075_18127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (16))){
var state_18028__$1 = state_18028;
var statearr_18076_18128 = state_18028__$1;
(statearr_18076_18128[(2)] = true);

(statearr_18076_18128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (38))){
var inst_18018 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18077_18129 = state_18028__$1;
(statearr_18077_18129[(2)] = inst_18018);

(statearr_18077_18129[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (30))){
var inst_17979 = (state_18028[(9)]);
var inst_17980 = (state_18028[(13)]);
var inst_17988 = (state_18028[(10)]);
var inst_18005 = cljs.core.empty_QMARK_.call(null,inst_17979);
var inst_18006 = inst_17980.call(null,inst_17988);
var inst_18007 = cljs.core.not.call(null,inst_18006);
var inst_18008 = (inst_18005) && (inst_18007);
var state_18028__$1 = state_18028;
var statearr_18078_18130 = state_18028__$1;
(statearr_18078_18130[(2)] = inst_18008);

(statearr_18078_18130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (10))){
var inst_17930 = (state_18028[(8)]);
var inst_17951 = (state_18028[(2)]);
var inst_17952 = cljs.core.get.call(null,inst_17951,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17953 = cljs.core.get.call(null,inst_17951,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17954 = cljs.core.get.call(null,inst_17951,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17955 = inst_17930;
var state_18028__$1 = (function (){var statearr_18079 = state_18028;
(statearr_18079[(16)] = inst_17954);

(statearr_18079[(17)] = inst_17953);

(statearr_18079[(7)] = inst_17955);

(statearr_18079[(18)] = inst_17952);

return statearr_18079;
})();
var statearr_18080_18131 = state_18028__$1;
(statearr_18080_18131[(2)] = null);

(statearr_18080_18131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (18))){
var inst_17970 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18081_18132 = state_18028__$1;
(statearr_18081_18132[(2)] = inst_17970);

(statearr_18081_18132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (37))){
var state_18028__$1 = state_18028;
var statearr_18082_18133 = state_18028__$1;
(statearr_18082_18133[(2)] = null);

(statearr_18082_18133[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (8))){
var inst_17930 = (state_18028[(8)]);
var inst_17948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17930);
var state_18028__$1 = state_18028;
var statearr_18083_18134 = state_18028__$1;
(statearr_18083_18134[(2)] = inst_17948);

(statearr_18083_18134[(1)] = (10));


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
});})(c__17029__auto___18088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16939__auto__,c__17029__auto___18088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16940__auto__ = null;
var cljs$core$async$mix_$_state_machine__16940__auto____0 = (function (){
var statearr_18084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18084[(0)] = cljs$core$async$mix_$_state_machine__16940__auto__);

(statearr_18084[(1)] = (1));

return statearr_18084;
});
var cljs$core$async$mix_$_state_machine__16940__auto____1 = (function (state_18028){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18085){if((e18085 instanceof Object)){
var ex__16943__auto__ = e18085;
var statearr_18086_18135 = state_18028;
(statearr_18086_18135[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18136 = state_18028;
state_18028 = G__18136;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16940__auto__ = function(state_18028){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16940__auto____1.call(this,state_18028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16940__auto____0;
cljs$core$async$mix_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16940__auto____1;
return cljs$core$async$mix_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17031__auto__ = (function (){var statearr_18087 = f__17030__auto__.call(null);
(statearr_18087[(6)] = c__17029__auto___18088);

return statearr_18087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18138 = arguments.length;
switch (G__18138) {
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
var G__18142 = arguments.length;
switch (G__18142) {
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
return (function (p1__18140_SHARP_){
if(cljs.core.truth_(p1__18140_SHARP_.call(null,topic))){
return p1__18140_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18140_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9810__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18143 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18144){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18144 = meta18144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18145,meta18144__$1){
var self__ = this;
var _18145__$1 = this;
return (new cljs.core.async.t_cljs$core$async18143(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18144__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18145){
var self__ = this;
var _18145__$1 = this;
return self__.meta18144;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18143.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18143.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18144","meta18144",1506146787,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18143";

cljs.core.async.t_cljs$core$async18143.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18143");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18143 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18143(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18144){
return (new cljs.core.async.t_cljs$core$async18143(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18144));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18143(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17029__auto___18263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18263,mults,ensure_mult,p){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18263,mults,ensure_mult,p){
return (function (state_18217){
var state_val_18218 = (state_18217[(1)]);
if((state_val_18218 === (7))){
var inst_18213 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18219_18264 = state_18217__$1;
(statearr_18219_18264[(2)] = inst_18213);

(statearr_18219_18264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (20))){
var state_18217__$1 = state_18217;
var statearr_18220_18265 = state_18217__$1;
(statearr_18220_18265[(2)] = null);

(statearr_18220_18265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (1))){
var state_18217__$1 = state_18217;
var statearr_18221_18266 = state_18217__$1;
(statearr_18221_18266[(2)] = null);

(statearr_18221_18266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (24))){
var inst_18196 = (state_18217[(7)]);
var inst_18205 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18196);
var state_18217__$1 = state_18217;
var statearr_18222_18267 = state_18217__$1;
(statearr_18222_18267[(2)] = inst_18205);

(statearr_18222_18267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (4))){
var inst_18148 = (state_18217[(8)]);
var inst_18148__$1 = (state_18217[(2)]);
var inst_18149 = (inst_18148__$1 == null);
var state_18217__$1 = (function (){var statearr_18223 = state_18217;
(statearr_18223[(8)] = inst_18148__$1);

return statearr_18223;
})();
if(cljs.core.truth_(inst_18149)){
var statearr_18224_18268 = state_18217__$1;
(statearr_18224_18268[(1)] = (5));

} else {
var statearr_18225_18269 = state_18217__$1;
(statearr_18225_18269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (15))){
var inst_18190 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18226_18270 = state_18217__$1;
(statearr_18226_18270[(2)] = inst_18190);

(statearr_18226_18270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (21))){
var inst_18210 = (state_18217[(2)]);
var state_18217__$1 = (function (){var statearr_18227 = state_18217;
(statearr_18227[(9)] = inst_18210);

return statearr_18227;
})();
var statearr_18228_18271 = state_18217__$1;
(statearr_18228_18271[(2)] = null);

(statearr_18228_18271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (13))){
var inst_18172 = (state_18217[(10)]);
var inst_18174 = cljs.core.chunked_seq_QMARK_.call(null,inst_18172);
var state_18217__$1 = state_18217;
if(inst_18174){
var statearr_18229_18272 = state_18217__$1;
(statearr_18229_18272[(1)] = (16));

} else {
var statearr_18230_18273 = state_18217__$1;
(statearr_18230_18273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (22))){
var inst_18202 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
if(cljs.core.truth_(inst_18202)){
var statearr_18231_18274 = state_18217__$1;
(statearr_18231_18274[(1)] = (23));

} else {
var statearr_18232_18275 = state_18217__$1;
(statearr_18232_18275[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (6))){
var inst_18148 = (state_18217[(8)]);
var inst_18198 = (state_18217[(11)]);
var inst_18196 = (state_18217[(7)]);
var inst_18196__$1 = topic_fn.call(null,inst_18148);
var inst_18197 = cljs.core.deref.call(null,mults);
var inst_18198__$1 = cljs.core.get.call(null,inst_18197,inst_18196__$1);
var state_18217__$1 = (function (){var statearr_18233 = state_18217;
(statearr_18233[(11)] = inst_18198__$1);

(statearr_18233[(7)] = inst_18196__$1);

return statearr_18233;
})();
if(cljs.core.truth_(inst_18198__$1)){
var statearr_18234_18276 = state_18217__$1;
(statearr_18234_18276[(1)] = (19));

} else {
var statearr_18235_18277 = state_18217__$1;
(statearr_18235_18277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (25))){
var inst_18207 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18236_18278 = state_18217__$1;
(statearr_18236_18278[(2)] = inst_18207);

(statearr_18236_18278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (17))){
var inst_18172 = (state_18217[(10)]);
var inst_18181 = cljs.core.first.call(null,inst_18172);
var inst_18182 = cljs.core.async.muxch_STAR_.call(null,inst_18181);
var inst_18183 = cljs.core.async.close_BANG_.call(null,inst_18182);
var inst_18184 = cljs.core.next.call(null,inst_18172);
var inst_18158 = inst_18184;
var inst_18159 = null;
var inst_18160 = (0);
var inst_18161 = (0);
var state_18217__$1 = (function (){var statearr_18237 = state_18217;
(statearr_18237[(12)] = inst_18159);

(statearr_18237[(13)] = inst_18183);

(statearr_18237[(14)] = inst_18158);

(statearr_18237[(15)] = inst_18160);

(statearr_18237[(16)] = inst_18161);

return statearr_18237;
})();
var statearr_18238_18279 = state_18217__$1;
(statearr_18238_18279[(2)] = null);

(statearr_18238_18279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (3))){
var inst_18215 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18217__$1,inst_18215);
} else {
if((state_val_18218 === (12))){
var inst_18192 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18239_18280 = state_18217__$1;
(statearr_18239_18280[(2)] = inst_18192);

(statearr_18239_18280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (2))){
var state_18217__$1 = state_18217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18217__$1,(4),ch);
} else {
if((state_val_18218 === (23))){
var state_18217__$1 = state_18217;
var statearr_18240_18281 = state_18217__$1;
(statearr_18240_18281[(2)] = null);

(statearr_18240_18281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (19))){
var inst_18148 = (state_18217[(8)]);
var inst_18198 = (state_18217[(11)]);
var inst_18200 = cljs.core.async.muxch_STAR_.call(null,inst_18198);
var state_18217__$1 = state_18217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18217__$1,(22),inst_18200,inst_18148);
} else {
if((state_val_18218 === (11))){
var inst_18158 = (state_18217[(14)]);
var inst_18172 = (state_18217[(10)]);
var inst_18172__$1 = cljs.core.seq.call(null,inst_18158);
var state_18217__$1 = (function (){var statearr_18241 = state_18217;
(statearr_18241[(10)] = inst_18172__$1);

return statearr_18241;
})();
if(inst_18172__$1){
var statearr_18242_18282 = state_18217__$1;
(statearr_18242_18282[(1)] = (13));

} else {
var statearr_18243_18283 = state_18217__$1;
(statearr_18243_18283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (9))){
var inst_18194 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18244_18284 = state_18217__$1;
(statearr_18244_18284[(2)] = inst_18194);

(statearr_18244_18284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (5))){
var inst_18155 = cljs.core.deref.call(null,mults);
var inst_18156 = cljs.core.vals.call(null,inst_18155);
var inst_18157 = cljs.core.seq.call(null,inst_18156);
var inst_18158 = inst_18157;
var inst_18159 = null;
var inst_18160 = (0);
var inst_18161 = (0);
var state_18217__$1 = (function (){var statearr_18245 = state_18217;
(statearr_18245[(12)] = inst_18159);

(statearr_18245[(14)] = inst_18158);

(statearr_18245[(15)] = inst_18160);

(statearr_18245[(16)] = inst_18161);

return statearr_18245;
})();
var statearr_18246_18285 = state_18217__$1;
(statearr_18246_18285[(2)] = null);

(statearr_18246_18285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (14))){
var state_18217__$1 = state_18217;
var statearr_18250_18286 = state_18217__$1;
(statearr_18250_18286[(2)] = null);

(statearr_18250_18286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (16))){
var inst_18172 = (state_18217[(10)]);
var inst_18176 = cljs.core.chunk_first.call(null,inst_18172);
var inst_18177 = cljs.core.chunk_rest.call(null,inst_18172);
var inst_18178 = cljs.core.count.call(null,inst_18176);
var inst_18158 = inst_18177;
var inst_18159 = inst_18176;
var inst_18160 = inst_18178;
var inst_18161 = (0);
var state_18217__$1 = (function (){var statearr_18251 = state_18217;
(statearr_18251[(12)] = inst_18159);

(statearr_18251[(14)] = inst_18158);

(statearr_18251[(15)] = inst_18160);

(statearr_18251[(16)] = inst_18161);

return statearr_18251;
})();
var statearr_18252_18287 = state_18217__$1;
(statearr_18252_18287[(2)] = null);

(statearr_18252_18287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (10))){
var inst_18159 = (state_18217[(12)]);
var inst_18158 = (state_18217[(14)]);
var inst_18160 = (state_18217[(15)]);
var inst_18161 = (state_18217[(16)]);
var inst_18166 = cljs.core._nth.call(null,inst_18159,inst_18161);
var inst_18167 = cljs.core.async.muxch_STAR_.call(null,inst_18166);
var inst_18168 = cljs.core.async.close_BANG_.call(null,inst_18167);
var inst_18169 = (inst_18161 + (1));
var tmp18247 = inst_18159;
var tmp18248 = inst_18158;
var tmp18249 = inst_18160;
var inst_18158__$1 = tmp18248;
var inst_18159__$1 = tmp18247;
var inst_18160__$1 = tmp18249;
var inst_18161__$1 = inst_18169;
var state_18217__$1 = (function (){var statearr_18253 = state_18217;
(statearr_18253[(12)] = inst_18159__$1);

(statearr_18253[(14)] = inst_18158__$1);

(statearr_18253[(15)] = inst_18160__$1);

(statearr_18253[(16)] = inst_18161__$1);

(statearr_18253[(17)] = inst_18168);

return statearr_18253;
})();
var statearr_18254_18288 = state_18217__$1;
(statearr_18254_18288[(2)] = null);

(statearr_18254_18288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (18))){
var inst_18187 = (state_18217[(2)]);
var state_18217__$1 = state_18217;
var statearr_18255_18289 = state_18217__$1;
(statearr_18255_18289[(2)] = inst_18187);

(statearr_18255_18289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18218 === (8))){
var inst_18160 = (state_18217[(15)]);
var inst_18161 = (state_18217[(16)]);
var inst_18163 = (inst_18161 < inst_18160);
var inst_18164 = inst_18163;
var state_18217__$1 = state_18217;
if(cljs.core.truth_(inst_18164)){
var statearr_18256_18290 = state_18217__$1;
(statearr_18256_18290[(1)] = (10));

} else {
var statearr_18257_18291 = state_18217__$1;
(statearr_18257_18291[(1)] = (11));

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
});})(c__17029__auto___18263,mults,ensure_mult,p))
;
return ((function (switch__16939__auto__,c__17029__auto___18263,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_18258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18258[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_18258[(1)] = (1));

return statearr_18258;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_18217){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18259){if((e18259 instanceof Object)){
var ex__16943__auto__ = e18259;
var statearr_18260_18292 = state_18217;
(statearr_18260_18292[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18293 = state_18217;
state_18217 = G__18293;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_18217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_18217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18263,mults,ensure_mult,p))
})();
var state__17031__auto__ = (function (){var statearr_18261 = f__17030__auto__.call(null);
(statearr_18261[(6)] = c__17029__auto___18263);

return statearr_18261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18263,mults,ensure_mult,p))
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
var G__18295 = arguments.length;
switch (G__18295) {
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
var G__18298 = arguments.length;
switch (G__18298) {
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
var G__18301 = arguments.length;
switch (G__18301) {
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
var c__17029__auto___18368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18340){
var state_val_18341 = (state_18340[(1)]);
if((state_val_18341 === (7))){
var state_18340__$1 = state_18340;
var statearr_18342_18369 = state_18340__$1;
(statearr_18342_18369[(2)] = null);

(statearr_18342_18369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (1))){
var state_18340__$1 = state_18340;
var statearr_18343_18370 = state_18340__$1;
(statearr_18343_18370[(2)] = null);

(statearr_18343_18370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (4))){
var inst_18304 = (state_18340[(7)]);
var inst_18306 = (inst_18304 < cnt);
var state_18340__$1 = state_18340;
if(cljs.core.truth_(inst_18306)){
var statearr_18344_18371 = state_18340__$1;
(statearr_18344_18371[(1)] = (6));

} else {
var statearr_18345_18372 = state_18340__$1;
(statearr_18345_18372[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (15))){
var inst_18336 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18346_18373 = state_18340__$1;
(statearr_18346_18373[(2)] = inst_18336);

(statearr_18346_18373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (13))){
var inst_18329 = cljs.core.async.close_BANG_.call(null,out);
var state_18340__$1 = state_18340;
var statearr_18347_18374 = state_18340__$1;
(statearr_18347_18374[(2)] = inst_18329);

(statearr_18347_18374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (6))){
var state_18340__$1 = state_18340;
var statearr_18348_18375 = state_18340__$1;
(statearr_18348_18375[(2)] = null);

(statearr_18348_18375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (3))){
var inst_18338 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18340__$1,inst_18338);
} else {
if((state_val_18341 === (12))){
var inst_18326 = (state_18340[(8)]);
var inst_18326__$1 = (state_18340[(2)]);
var inst_18327 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18326__$1);
var state_18340__$1 = (function (){var statearr_18349 = state_18340;
(statearr_18349[(8)] = inst_18326__$1);

return statearr_18349;
})();
if(cljs.core.truth_(inst_18327)){
var statearr_18350_18376 = state_18340__$1;
(statearr_18350_18376[(1)] = (13));

} else {
var statearr_18351_18377 = state_18340__$1;
(statearr_18351_18377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (2))){
var inst_18303 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18304 = (0);
var state_18340__$1 = (function (){var statearr_18352 = state_18340;
(statearr_18352[(7)] = inst_18304);

(statearr_18352[(9)] = inst_18303);

return statearr_18352;
})();
var statearr_18353_18378 = state_18340__$1;
(statearr_18353_18378[(2)] = null);

(statearr_18353_18378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (11))){
var inst_18304 = (state_18340[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18340,(10),Object,null,(9));
var inst_18313 = chs__$1.call(null,inst_18304);
var inst_18314 = done.call(null,inst_18304);
var inst_18315 = cljs.core.async.take_BANG_.call(null,inst_18313,inst_18314);
var state_18340__$1 = state_18340;
var statearr_18354_18379 = state_18340__$1;
(statearr_18354_18379[(2)] = inst_18315);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18340__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (9))){
var inst_18304 = (state_18340[(7)]);
var inst_18317 = (state_18340[(2)]);
var inst_18318 = (inst_18304 + (1));
var inst_18304__$1 = inst_18318;
var state_18340__$1 = (function (){var statearr_18355 = state_18340;
(statearr_18355[(7)] = inst_18304__$1);

(statearr_18355[(10)] = inst_18317);

return statearr_18355;
})();
var statearr_18356_18380 = state_18340__$1;
(statearr_18356_18380[(2)] = null);

(statearr_18356_18380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (5))){
var inst_18324 = (state_18340[(2)]);
var state_18340__$1 = (function (){var statearr_18357 = state_18340;
(statearr_18357[(11)] = inst_18324);

return statearr_18357;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18340__$1,(12),dchan);
} else {
if((state_val_18341 === (14))){
var inst_18326 = (state_18340[(8)]);
var inst_18331 = cljs.core.apply.call(null,f,inst_18326);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18340__$1,(16),out,inst_18331);
} else {
if((state_val_18341 === (16))){
var inst_18333 = (state_18340[(2)]);
var state_18340__$1 = (function (){var statearr_18358 = state_18340;
(statearr_18358[(12)] = inst_18333);

return statearr_18358;
})();
var statearr_18359_18381 = state_18340__$1;
(statearr_18359_18381[(2)] = null);

(statearr_18359_18381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (10))){
var inst_18308 = (state_18340[(2)]);
var inst_18309 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18340__$1 = (function (){var statearr_18360 = state_18340;
(statearr_18360[(13)] = inst_18308);

return statearr_18360;
})();
var statearr_18361_18382 = state_18340__$1;
(statearr_18361_18382[(2)] = inst_18309);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18340__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (8))){
var inst_18322 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18362_18383 = state_18340__$1;
(statearr_18362_18383[(2)] = inst_18322);

(statearr_18362_18383[(1)] = (5));


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
});})(c__17029__auto___18368,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16939__auto__,c__17029__auto___18368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_18363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18363[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_18363[(1)] = (1));

return statearr_18363;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_18340){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18364){if((e18364 instanceof Object)){
var ex__16943__auto__ = e18364;
var statearr_18365_18384 = state_18340;
(statearr_18365_18384[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18385 = state_18340;
state_18340 = G__18385;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_18340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_18340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18368,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17031__auto__ = (function (){var statearr_18366 = f__17030__auto__.call(null);
(statearr_18366[(6)] = c__17029__auto___18368);

return statearr_18366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18368,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18388 = arguments.length;
switch (G__18388) {
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
var c__17029__auto___18442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18442,out){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18442,out){
return (function (state_18420){
var state_val_18421 = (state_18420[(1)]);
if((state_val_18421 === (7))){
var inst_18400 = (state_18420[(7)]);
var inst_18399 = (state_18420[(8)]);
var inst_18399__$1 = (state_18420[(2)]);
var inst_18400__$1 = cljs.core.nth.call(null,inst_18399__$1,(0),null);
var inst_18401 = cljs.core.nth.call(null,inst_18399__$1,(1),null);
var inst_18402 = (inst_18400__$1 == null);
var state_18420__$1 = (function (){var statearr_18422 = state_18420;
(statearr_18422[(9)] = inst_18401);

(statearr_18422[(7)] = inst_18400__$1);

(statearr_18422[(8)] = inst_18399__$1);

return statearr_18422;
})();
if(cljs.core.truth_(inst_18402)){
var statearr_18423_18443 = state_18420__$1;
(statearr_18423_18443[(1)] = (8));

} else {
var statearr_18424_18444 = state_18420__$1;
(statearr_18424_18444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (1))){
var inst_18389 = cljs.core.vec.call(null,chs);
var inst_18390 = inst_18389;
var state_18420__$1 = (function (){var statearr_18425 = state_18420;
(statearr_18425[(10)] = inst_18390);

return statearr_18425;
})();
var statearr_18426_18445 = state_18420__$1;
(statearr_18426_18445[(2)] = null);

(statearr_18426_18445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (4))){
var inst_18390 = (state_18420[(10)]);
var state_18420__$1 = state_18420;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18420__$1,(7),inst_18390);
} else {
if((state_val_18421 === (6))){
var inst_18416 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18427_18446 = state_18420__$1;
(statearr_18427_18446[(2)] = inst_18416);

(statearr_18427_18446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (3))){
var inst_18418 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18420__$1,inst_18418);
} else {
if((state_val_18421 === (2))){
var inst_18390 = (state_18420[(10)]);
var inst_18392 = cljs.core.count.call(null,inst_18390);
var inst_18393 = (inst_18392 > (0));
var state_18420__$1 = state_18420;
if(cljs.core.truth_(inst_18393)){
var statearr_18429_18447 = state_18420__$1;
(statearr_18429_18447[(1)] = (4));

} else {
var statearr_18430_18448 = state_18420__$1;
(statearr_18430_18448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (11))){
var inst_18390 = (state_18420[(10)]);
var inst_18409 = (state_18420[(2)]);
var tmp18428 = inst_18390;
var inst_18390__$1 = tmp18428;
var state_18420__$1 = (function (){var statearr_18431 = state_18420;
(statearr_18431[(10)] = inst_18390__$1);

(statearr_18431[(11)] = inst_18409);

return statearr_18431;
})();
var statearr_18432_18449 = state_18420__$1;
(statearr_18432_18449[(2)] = null);

(statearr_18432_18449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (9))){
var inst_18400 = (state_18420[(7)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18420__$1,(11),out,inst_18400);
} else {
if((state_val_18421 === (5))){
var inst_18414 = cljs.core.async.close_BANG_.call(null,out);
var state_18420__$1 = state_18420;
var statearr_18433_18450 = state_18420__$1;
(statearr_18433_18450[(2)] = inst_18414);

(statearr_18433_18450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (10))){
var inst_18412 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18434_18451 = state_18420__$1;
(statearr_18434_18451[(2)] = inst_18412);

(statearr_18434_18451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (8))){
var inst_18401 = (state_18420[(9)]);
var inst_18400 = (state_18420[(7)]);
var inst_18399 = (state_18420[(8)]);
var inst_18390 = (state_18420[(10)]);
var inst_18404 = (function (){var cs = inst_18390;
var vec__18395 = inst_18399;
var v = inst_18400;
var c = inst_18401;
return ((function (cs,vec__18395,v,c,inst_18401,inst_18400,inst_18399,inst_18390,state_val_18421,c__17029__auto___18442,out){
return (function (p1__18386_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18386_SHARP_);
});
;})(cs,vec__18395,v,c,inst_18401,inst_18400,inst_18399,inst_18390,state_val_18421,c__17029__auto___18442,out))
})();
var inst_18405 = cljs.core.filterv.call(null,inst_18404,inst_18390);
var inst_18390__$1 = inst_18405;
var state_18420__$1 = (function (){var statearr_18435 = state_18420;
(statearr_18435[(10)] = inst_18390__$1);

return statearr_18435;
})();
var statearr_18436_18452 = state_18420__$1;
(statearr_18436_18452[(2)] = null);

(statearr_18436_18452[(1)] = (2));


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
});})(c__17029__auto___18442,out))
;
return ((function (switch__16939__auto__,c__17029__auto___18442,out){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_18437 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18437[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_18437[(1)] = (1));

return statearr_18437;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_18420){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18438){if((e18438 instanceof Object)){
var ex__16943__auto__ = e18438;
var statearr_18439_18453 = state_18420;
(statearr_18439_18453[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18454 = state_18420;
state_18420 = G__18454;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18442,out))
})();
var state__17031__auto__ = (function (){var statearr_18440 = f__17030__auto__.call(null);
(statearr_18440[(6)] = c__17029__auto___18442);

return statearr_18440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18442,out))
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
var G__18456 = arguments.length;
switch (G__18456) {
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
var c__17029__auto___18501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18501,out){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18501,out){
return (function (state_18480){
var state_val_18481 = (state_18480[(1)]);
if((state_val_18481 === (7))){
var inst_18462 = (state_18480[(7)]);
var inst_18462__$1 = (state_18480[(2)]);
var inst_18463 = (inst_18462__$1 == null);
var inst_18464 = cljs.core.not.call(null,inst_18463);
var state_18480__$1 = (function (){var statearr_18482 = state_18480;
(statearr_18482[(7)] = inst_18462__$1);

return statearr_18482;
})();
if(inst_18464){
var statearr_18483_18502 = state_18480__$1;
(statearr_18483_18502[(1)] = (8));

} else {
var statearr_18484_18503 = state_18480__$1;
(statearr_18484_18503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (1))){
var inst_18457 = (0);
var state_18480__$1 = (function (){var statearr_18485 = state_18480;
(statearr_18485[(8)] = inst_18457);

return statearr_18485;
})();
var statearr_18486_18504 = state_18480__$1;
(statearr_18486_18504[(2)] = null);

(statearr_18486_18504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (4))){
var state_18480__$1 = state_18480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18480__$1,(7),ch);
} else {
if((state_val_18481 === (6))){
var inst_18475 = (state_18480[(2)]);
var state_18480__$1 = state_18480;
var statearr_18487_18505 = state_18480__$1;
(statearr_18487_18505[(2)] = inst_18475);

(statearr_18487_18505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (3))){
var inst_18477 = (state_18480[(2)]);
var inst_18478 = cljs.core.async.close_BANG_.call(null,out);
var state_18480__$1 = (function (){var statearr_18488 = state_18480;
(statearr_18488[(9)] = inst_18477);

return statearr_18488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18480__$1,inst_18478);
} else {
if((state_val_18481 === (2))){
var inst_18457 = (state_18480[(8)]);
var inst_18459 = (inst_18457 < n);
var state_18480__$1 = state_18480;
if(cljs.core.truth_(inst_18459)){
var statearr_18489_18506 = state_18480__$1;
(statearr_18489_18506[(1)] = (4));

} else {
var statearr_18490_18507 = state_18480__$1;
(statearr_18490_18507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (11))){
var inst_18457 = (state_18480[(8)]);
var inst_18467 = (state_18480[(2)]);
var inst_18468 = (inst_18457 + (1));
var inst_18457__$1 = inst_18468;
var state_18480__$1 = (function (){var statearr_18491 = state_18480;
(statearr_18491[(8)] = inst_18457__$1);

(statearr_18491[(10)] = inst_18467);

return statearr_18491;
})();
var statearr_18492_18508 = state_18480__$1;
(statearr_18492_18508[(2)] = null);

(statearr_18492_18508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (9))){
var state_18480__$1 = state_18480;
var statearr_18493_18509 = state_18480__$1;
(statearr_18493_18509[(2)] = null);

(statearr_18493_18509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (5))){
var state_18480__$1 = state_18480;
var statearr_18494_18510 = state_18480__$1;
(statearr_18494_18510[(2)] = null);

(statearr_18494_18510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (10))){
var inst_18472 = (state_18480[(2)]);
var state_18480__$1 = state_18480;
var statearr_18495_18511 = state_18480__$1;
(statearr_18495_18511[(2)] = inst_18472);

(statearr_18495_18511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18481 === (8))){
var inst_18462 = (state_18480[(7)]);
var state_18480__$1 = state_18480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18480__$1,(11),out,inst_18462);
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
});})(c__17029__auto___18501,out))
;
return ((function (switch__16939__auto__,c__17029__auto___18501,out){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_18496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18496[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_18496[(1)] = (1));

return statearr_18496;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_18480){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18497){if((e18497 instanceof Object)){
var ex__16943__auto__ = e18497;
var statearr_18498_18512 = state_18480;
(statearr_18498_18512[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18513 = state_18480;
state_18480 = G__18513;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_18480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_18480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18501,out))
})();
var state__17031__auto__ = (function (){var statearr_18499 = f__17030__auto__.call(null);
(statearr_18499[(6)] = c__17029__auto___18501);

return statearr_18499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18501,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18515 = (function (f,ch,meta18516){
this.f = f;
this.ch = ch;
this.meta18516 = meta18516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18517,meta18516__$1){
var self__ = this;
var _18517__$1 = this;
return (new cljs.core.async.t_cljs$core$async18515(self__.f,self__.ch,meta18516__$1));
});

cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18517){
var self__ = this;
var _18517__$1 = this;
return self__.meta18516;
});

cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18518 = (function (f,ch,meta18516,_,fn1,meta18519){
this.f = f;
this.ch = ch;
this.meta18516 = meta18516;
this._ = _;
this.fn1 = fn1;
this.meta18519 = meta18519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18520,meta18519__$1){
var self__ = this;
var _18520__$1 = this;
return (new cljs.core.async.t_cljs$core$async18518(self__.f,self__.ch,self__.meta18516,self__._,self__.fn1,meta18519__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18520){
var self__ = this;
var _18520__$1 = this;
return self__.meta18519;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18514_SHARP_){
return f1.call(null,(((p1__18514_SHARP_ == null))?null:self__.f.call(null,p1__18514_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18518.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18516","meta18516",175280548,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18515","cljs.core.async/t_cljs$core$async18515",694687978,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18519","meta18519",1430004606,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18518";

cljs.core.async.t_cljs$core$async18518.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18518");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18518 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18518(f__$1,ch__$1,meta18516__$1,___$2,fn1__$1,meta18519){
return (new cljs.core.async.t_cljs$core$async18518(f__$1,ch__$1,meta18516__$1,___$2,fn1__$1,meta18519));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18518(self__.f,self__.ch,self__.meta18516,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18515.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18516","meta18516",175280548,null)], null);
});

cljs.core.async.t_cljs$core$async18515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18515";

cljs.core.async.t_cljs$core$async18515.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18515");
});

cljs.core.async.__GT_t_cljs$core$async18515 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18515(f__$1,ch__$1,meta18516){
return (new cljs.core.async.t_cljs$core$async18515(f__$1,ch__$1,meta18516));
});

}

return (new cljs.core.async.t_cljs$core$async18515(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18521 = (function (f,ch,meta18522){
this.f = f;
this.ch = ch;
this.meta18522 = meta18522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18523,meta18522__$1){
var self__ = this;
var _18523__$1 = this;
return (new cljs.core.async.t_cljs$core$async18521(self__.f,self__.ch,meta18522__$1));
});

cljs.core.async.t_cljs$core$async18521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18523){
var self__ = this;
var _18523__$1 = this;
return self__.meta18522;
});

cljs.core.async.t_cljs$core$async18521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async18521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18522","meta18522",1098935220,null)], null);
});

cljs.core.async.t_cljs$core$async18521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18521";

cljs.core.async.t_cljs$core$async18521.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18521");
});

cljs.core.async.__GT_t_cljs$core$async18521 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18521(f__$1,ch__$1,meta18522){
return (new cljs.core.async.t_cljs$core$async18521(f__$1,ch__$1,meta18522));
});

}

return (new cljs.core.async.t_cljs$core$async18521(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18524 = (function (p,ch,meta18525){
this.p = p;
this.ch = ch;
this.meta18525 = meta18525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18526,meta18525__$1){
var self__ = this;
var _18526__$1 = this;
return (new cljs.core.async.t_cljs$core$async18524(self__.p,self__.ch,meta18525__$1));
});

cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18526){
var self__ = this;
var _18526__$1 = this;
return self__.meta18525;
});

cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18525","meta18525",-977280574,null)], null);
});

cljs.core.async.t_cljs$core$async18524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18524";

cljs.core.async.t_cljs$core$async18524.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18524");
});

cljs.core.async.__GT_t_cljs$core$async18524 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18524(p__$1,ch__$1,meta18525){
return (new cljs.core.async.t_cljs$core$async18524(p__$1,ch__$1,meta18525));
});

}

return (new cljs.core.async.t_cljs$core$async18524(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18528 = arguments.length;
switch (G__18528) {
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
var c__17029__auto___18568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18568,out){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18568,out){
return (function (state_18549){
var state_val_18550 = (state_18549[(1)]);
if((state_val_18550 === (7))){
var inst_18545 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
var statearr_18551_18569 = state_18549__$1;
(statearr_18551_18569[(2)] = inst_18545);

(statearr_18551_18569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (1))){
var state_18549__$1 = state_18549;
var statearr_18552_18570 = state_18549__$1;
(statearr_18552_18570[(2)] = null);

(statearr_18552_18570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (4))){
var inst_18531 = (state_18549[(7)]);
var inst_18531__$1 = (state_18549[(2)]);
var inst_18532 = (inst_18531__$1 == null);
var state_18549__$1 = (function (){var statearr_18553 = state_18549;
(statearr_18553[(7)] = inst_18531__$1);

return statearr_18553;
})();
if(cljs.core.truth_(inst_18532)){
var statearr_18554_18571 = state_18549__$1;
(statearr_18554_18571[(1)] = (5));

} else {
var statearr_18555_18572 = state_18549__$1;
(statearr_18555_18572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (6))){
var inst_18531 = (state_18549[(7)]);
var inst_18536 = p.call(null,inst_18531);
var state_18549__$1 = state_18549;
if(cljs.core.truth_(inst_18536)){
var statearr_18556_18573 = state_18549__$1;
(statearr_18556_18573[(1)] = (8));

} else {
var statearr_18557_18574 = state_18549__$1;
(statearr_18557_18574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (3))){
var inst_18547 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18549__$1,inst_18547);
} else {
if((state_val_18550 === (2))){
var state_18549__$1 = state_18549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18549__$1,(4),ch);
} else {
if((state_val_18550 === (11))){
var inst_18539 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
var statearr_18558_18575 = state_18549__$1;
(statearr_18558_18575[(2)] = inst_18539);

(statearr_18558_18575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (9))){
var state_18549__$1 = state_18549;
var statearr_18559_18576 = state_18549__$1;
(statearr_18559_18576[(2)] = null);

(statearr_18559_18576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (5))){
var inst_18534 = cljs.core.async.close_BANG_.call(null,out);
var state_18549__$1 = state_18549;
var statearr_18560_18577 = state_18549__$1;
(statearr_18560_18577[(2)] = inst_18534);

(statearr_18560_18577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (10))){
var inst_18542 = (state_18549[(2)]);
var state_18549__$1 = (function (){var statearr_18561 = state_18549;
(statearr_18561[(8)] = inst_18542);

return statearr_18561;
})();
var statearr_18562_18578 = state_18549__$1;
(statearr_18562_18578[(2)] = null);

(statearr_18562_18578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18550 === (8))){
var inst_18531 = (state_18549[(7)]);
var state_18549__$1 = state_18549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18549__$1,(11),out,inst_18531);
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
});})(c__17029__auto___18568,out))
;
return ((function (switch__16939__auto__,c__17029__auto___18568,out){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_18563 = [null,null,null,null,null,null,null,null,null];
(statearr_18563[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_18563[(1)] = (1));

return statearr_18563;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_18549){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18564){if((e18564 instanceof Object)){
var ex__16943__auto__ = e18564;
var statearr_18565_18579 = state_18549;
(statearr_18565_18579[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18580 = state_18549;
state_18549 = G__18580;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_18549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_18549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18568,out))
})();
var state__17031__auto__ = (function (){var statearr_18566 = f__17030__auto__.call(null);
(statearr_18566[(6)] = c__17029__auto___18568);

return statearr_18566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18568,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18582 = arguments.length;
switch (G__18582) {
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
var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__){
return (function (state_18645){
var state_val_18646 = (state_18645[(1)]);
if((state_val_18646 === (7))){
var inst_18641 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18647_18685 = state_18645__$1;
(statearr_18647_18685[(2)] = inst_18641);

(statearr_18647_18685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (20))){
var inst_18611 = (state_18645[(7)]);
var inst_18622 = (state_18645[(2)]);
var inst_18623 = cljs.core.next.call(null,inst_18611);
var inst_18597 = inst_18623;
var inst_18598 = null;
var inst_18599 = (0);
var inst_18600 = (0);
var state_18645__$1 = (function (){var statearr_18648 = state_18645;
(statearr_18648[(8)] = inst_18600);

(statearr_18648[(9)] = inst_18598);

(statearr_18648[(10)] = inst_18599);

(statearr_18648[(11)] = inst_18622);

(statearr_18648[(12)] = inst_18597);

return statearr_18648;
})();
var statearr_18649_18686 = state_18645__$1;
(statearr_18649_18686[(2)] = null);

(statearr_18649_18686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (1))){
var state_18645__$1 = state_18645;
var statearr_18650_18687 = state_18645__$1;
(statearr_18650_18687[(2)] = null);

(statearr_18650_18687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (4))){
var inst_18586 = (state_18645[(13)]);
var inst_18586__$1 = (state_18645[(2)]);
var inst_18587 = (inst_18586__$1 == null);
var state_18645__$1 = (function (){var statearr_18651 = state_18645;
(statearr_18651[(13)] = inst_18586__$1);

return statearr_18651;
})();
if(cljs.core.truth_(inst_18587)){
var statearr_18652_18688 = state_18645__$1;
(statearr_18652_18688[(1)] = (5));

} else {
var statearr_18653_18689 = state_18645__$1;
(statearr_18653_18689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (15))){
var state_18645__$1 = state_18645;
var statearr_18657_18690 = state_18645__$1;
(statearr_18657_18690[(2)] = null);

(statearr_18657_18690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (21))){
var state_18645__$1 = state_18645;
var statearr_18658_18691 = state_18645__$1;
(statearr_18658_18691[(2)] = null);

(statearr_18658_18691[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (13))){
var inst_18600 = (state_18645[(8)]);
var inst_18598 = (state_18645[(9)]);
var inst_18599 = (state_18645[(10)]);
var inst_18597 = (state_18645[(12)]);
var inst_18607 = (state_18645[(2)]);
var inst_18608 = (inst_18600 + (1));
var tmp18654 = inst_18598;
var tmp18655 = inst_18599;
var tmp18656 = inst_18597;
var inst_18597__$1 = tmp18656;
var inst_18598__$1 = tmp18654;
var inst_18599__$1 = tmp18655;
var inst_18600__$1 = inst_18608;
var state_18645__$1 = (function (){var statearr_18659 = state_18645;
(statearr_18659[(8)] = inst_18600__$1);

(statearr_18659[(9)] = inst_18598__$1);

(statearr_18659[(14)] = inst_18607);

(statearr_18659[(10)] = inst_18599__$1);

(statearr_18659[(12)] = inst_18597__$1);

return statearr_18659;
})();
var statearr_18660_18692 = state_18645__$1;
(statearr_18660_18692[(2)] = null);

(statearr_18660_18692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (22))){
var state_18645__$1 = state_18645;
var statearr_18661_18693 = state_18645__$1;
(statearr_18661_18693[(2)] = null);

(statearr_18661_18693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (6))){
var inst_18586 = (state_18645[(13)]);
var inst_18595 = f.call(null,inst_18586);
var inst_18596 = cljs.core.seq.call(null,inst_18595);
var inst_18597 = inst_18596;
var inst_18598 = null;
var inst_18599 = (0);
var inst_18600 = (0);
var state_18645__$1 = (function (){var statearr_18662 = state_18645;
(statearr_18662[(8)] = inst_18600);

(statearr_18662[(9)] = inst_18598);

(statearr_18662[(10)] = inst_18599);

(statearr_18662[(12)] = inst_18597);

return statearr_18662;
})();
var statearr_18663_18694 = state_18645__$1;
(statearr_18663_18694[(2)] = null);

(statearr_18663_18694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (17))){
var inst_18611 = (state_18645[(7)]);
var inst_18615 = cljs.core.chunk_first.call(null,inst_18611);
var inst_18616 = cljs.core.chunk_rest.call(null,inst_18611);
var inst_18617 = cljs.core.count.call(null,inst_18615);
var inst_18597 = inst_18616;
var inst_18598 = inst_18615;
var inst_18599 = inst_18617;
var inst_18600 = (0);
var state_18645__$1 = (function (){var statearr_18664 = state_18645;
(statearr_18664[(8)] = inst_18600);

(statearr_18664[(9)] = inst_18598);

(statearr_18664[(10)] = inst_18599);

(statearr_18664[(12)] = inst_18597);

return statearr_18664;
})();
var statearr_18665_18695 = state_18645__$1;
(statearr_18665_18695[(2)] = null);

(statearr_18665_18695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (3))){
var inst_18643 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18645__$1,inst_18643);
} else {
if((state_val_18646 === (12))){
var inst_18631 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18666_18696 = state_18645__$1;
(statearr_18666_18696[(2)] = inst_18631);

(statearr_18666_18696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (2))){
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18645__$1,(4),in$);
} else {
if((state_val_18646 === (23))){
var inst_18639 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18667_18697 = state_18645__$1;
(statearr_18667_18697[(2)] = inst_18639);

(statearr_18667_18697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (19))){
var inst_18626 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18668_18698 = state_18645__$1;
(statearr_18668_18698[(2)] = inst_18626);

(statearr_18668_18698[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (11))){
var inst_18611 = (state_18645[(7)]);
var inst_18597 = (state_18645[(12)]);
var inst_18611__$1 = cljs.core.seq.call(null,inst_18597);
var state_18645__$1 = (function (){var statearr_18669 = state_18645;
(statearr_18669[(7)] = inst_18611__$1);

return statearr_18669;
})();
if(inst_18611__$1){
var statearr_18670_18699 = state_18645__$1;
(statearr_18670_18699[(1)] = (14));

} else {
var statearr_18671_18700 = state_18645__$1;
(statearr_18671_18700[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (9))){
var inst_18633 = (state_18645[(2)]);
var inst_18634 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18645__$1 = (function (){var statearr_18672 = state_18645;
(statearr_18672[(15)] = inst_18633);

return statearr_18672;
})();
if(cljs.core.truth_(inst_18634)){
var statearr_18673_18701 = state_18645__$1;
(statearr_18673_18701[(1)] = (21));

} else {
var statearr_18674_18702 = state_18645__$1;
(statearr_18674_18702[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (5))){
var inst_18589 = cljs.core.async.close_BANG_.call(null,out);
var state_18645__$1 = state_18645;
var statearr_18675_18703 = state_18645__$1;
(statearr_18675_18703[(2)] = inst_18589);

(statearr_18675_18703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (14))){
var inst_18611 = (state_18645[(7)]);
var inst_18613 = cljs.core.chunked_seq_QMARK_.call(null,inst_18611);
var state_18645__$1 = state_18645;
if(inst_18613){
var statearr_18676_18704 = state_18645__$1;
(statearr_18676_18704[(1)] = (17));

} else {
var statearr_18677_18705 = state_18645__$1;
(statearr_18677_18705[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (16))){
var inst_18629 = (state_18645[(2)]);
var state_18645__$1 = state_18645;
var statearr_18678_18706 = state_18645__$1;
(statearr_18678_18706[(2)] = inst_18629);

(statearr_18678_18706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18646 === (10))){
var inst_18600 = (state_18645[(8)]);
var inst_18598 = (state_18645[(9)]);
var inst_18605 = cljs.core._nth.call(null,inst_18598,inst_18600);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18645__$1,(13),out,inst_18605);
} else {
if((state_val_18646 === (18))){
var inst_18611 = (state_18645[(7)]);
var inst_18620 = cljs.core.first.call(null,inst_18611);
var state_18645__$1 = state_18645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18645__$1,(20),out,inst_18620);
} else {
if((state_val_18646 === (8))){
var inst_18600 = (state_18645[(8)]);
var inst_18599 = (state_18645[(10)]);
var inst_18602 = (inst_18600 < inst_18599);
var inst_18603 = inst_18602;
var state_18645__$1 = state_18645;
if(cljs.core.truth_(inst_18603)){
var statearr_18679_18707 = state_18645__$1;
(statearr_18679_18707[(1)] = (10));

} else {
var statearr_18680_18708 = state_18645__$1;
(statearr_18680_18708[(1)] = (11));

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
});})(c__17029__auto__))
;
return ((function (switch__16939__auto__,c__17029__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16940__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16940__auto____0 = (function (){
var statearr_18681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18681[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16940__auto__);

(statearr_18681[(1)] = (1));

return statearr_18681;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16940__auto____1 = (function (state_18645){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18682){if((e18682 instanceof Object)){
var ex__16943__auto__ = e18682;
var statearr_18683_18709 = state_18645;
(statearr_18683_18709[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18710 = state_18645;
state_18645 = G__18710;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16940__auto__ = function(state_18645){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16940__auto____1.call(this,state_18645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16940__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16940__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__))
})();
var state__17031__auto__ = (function (){var statearr_18684 = f__17030__auto__.call(null);
(statearr_18684[(6)] = c__17029__auto__);

return statearr_18684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__))
);

return c__17029__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18712 = arguments.length;
switch (G__18712) {
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
var G__18715 = arguments.length;
switch (G__18715) {
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
var G__18718 = arguments.length;
switch (G__18718) {
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
var c__17029__auto___18765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18765,out){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18765,out){
return (function (state_18742){
var state_val_18743 = (state_18742[(1)]);
if((state_val_18743 === (7))){
var inst_18737 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18744_18766 = state_18742__$1;
(statearr_18744_18766[(2)] = inst_18737);

(statearr_18744_18766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (1))){
var inst_18719 = null;
var state_18742__$1 = (function (){var statearr_18745 = state_18742;
(statearr_18745[(7)] = inst_18719);

return statearr_18745;
})();
var statearr_18746_18767 = state_18742__$1;
(statearr_18746_18767[(2)] = null);

(statearr_18746_18767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (4))){
var inst_18722 = (state_18742[(8)]);
var inst_18722__$1 = (state_18742[(2)]);
var inst_18723 = (inst_18722__$1 == null);
var inst_18724 = cljs.core.not.call(null,inst_18723);
var state_18742__$1 = (function (){var statearr_18747 = state_18742;
(statearr_18747[(8)] = inst_18722__$1);

return statearr_18747;
})();
if(inst_18724){
var statearr_18748_18768 = state_18742__$1;
(statearr_18748_18768[(1)] = (5));

} else {
var statearr_18749_18769 = state_18742__$1;
(statearr_18749_18769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (6))){
var state_18742__$1 = state_18742;
var statearr_18750_18770 = state_18742__$1;
(statearr_18750_18770[(2)] = null);

(statearr_18750_18770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (3))){
var inst_18739 = (state_18742[(2)]);
var inst_18740 = cljs.core.async.close_BANG_.call(null,out);
var state_18742__$1 = (function (){var statearr_18751 = state_18742;
(statearr_18751[(9)] = inst_18739);

return statearr_18751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18742__$1,inst_18740);
} else {
if((state_val_18743 === (2))){
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18742__$1,(4),ch);
} else {
if((state_val_18743 === (11))){
var inst_18722 = (state_18742[(8)]);
var inst_18731 = (state_18742[(2)]);
var inst_18719 = inst_18722;
var state_18742__$1 = (function (){var statearr_18752 = state_18742;
(statearr_18752[(10)] = inst_18731);

(statearr_18752[(7)] = inst_18719);

return statearr_18752;
})();
var statearr_18753_18771 = state_18742__$1;
(statearr_18753_18771[(2)] = null);

(statearr_18753_18771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (9))){
var inst_18722 = (state_18742[(8)]);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18742__$1,(11),out,inst_18722);
} else {
if((state_val_18743 === (5))){
var inst_18722 = (state_18742[(8)]);
var inst_18719 = (state_18742[(7)]);
var inst_18726 = cljs.core._EQ_.call(null,inst_18722,inst_18719);
var state_18742__$1 = state_18742;
if(inst_18726){
var statearr_18755_18772 = state_18742__$1;
(statearr_18755_18772[(1)] = (8));

} else {
var statearr_18756_18773 = state_18742__$1;
(statearr_18756_18773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (10))){
var inst_18734 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18757_18774 = state_18742__$1;
(statearr_18757_18774[(2)] = inst_18734);

(statearr_18757_18774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (8))){
var inst_18719 = (state_18742[(7)]);
var tmp18754 = inst_18719;
var inst_18719__$1 = tmp18754;
var state_18742__$1 = (function (){var statearr_18758 = state_18742;
(statearr_18758[(7)] = inst_18719__$1);

return statearr_18758;
})();
var statearr_18759_18775 = state_18742__$1;
(statearr_18759_18775[(2)] = null);

(statearr_18759_18775[(1)] = (2));


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
});})(c__17029__auto___18765,out))
;
return ((function (switch__16939__auto__,c__17029__auto___18765,out){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_18760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18760[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_18760[(1)] = (1));

return statearr_18760;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_18742){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18761){if((e18761 instanceof Object)){
var ex__16943__auto__ = e18761;
var statearr_18762_18776 = state_18742;
(statearr_18762_18776[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18777 = state_18742;
state_18742 = G__18777;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_18742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_18742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18765,out))
})();
var state__17031__auto__ = (function (){var statearr_18763 = f__17030__auto__.call(null);
(statearr_18763[(6)] = c__17029__auto___18765);

return statearr_18763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18765,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18779 = arguments.length;
switch (G__18779) {
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
var c__17029__auto___18845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18845,out){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18845,out){
return (function (state_18817){
var state_val_18818 = (state_18817[(1)]);
if((state_val_18818 === (7))){
var inst_18813 = (state_18817[(2)]);
var state_18817__$1 = state_18817;
var statearr_18819_18846 = state_18817__$1;
(statearr_18819_18846[(2)] = inst_18813);

(statearr_18819_18846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (1))){
var inst_18780 = (new Array(n));
var inst_18781 = inst_18780;
var inst_18782 = (0);
var state_18817__$1 = (function (){var statearr_18820 = state_18817;
(statearr_18820[(7)] = inst_18781);

(statearr_18820[(8)] = inst_18782);

return statearr_18820;
})();
var statearr_18821_18847 = state_18817__$1;
(statearr_18821_18847[(2)] = null);

(statearr_18821_18847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (4))){
var inst_18785 = (state_18817[(9)]);
var inst_18785__$1 = (state_18817[(2)]);
var inst_18786 = (inst_18785__$1 == null);
var inst_18787 = cljs.core.not.call(null,inst_18786);
var state_18817__$1 = (function (){var statearr_18822 = state_18817;
(statearr_18822[(9)] = inst_18785__$1);

return statearr_18822;
})();
if(inst_18787){
var statearr_18823_18848 = state_18817__$1;
(statearr_18823_18848[(1)] = (5));

} else {
var statearr_18824_18849 = state_18817__$1;
(statearr_18824_18849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (15))){
var inst_18807 = (state_18817[(2)]);
var state_18817__$1 = state_18817;
var statearr_18825_18850 = state_18817__$1;
(statearr_18825_18850[(2)] = inst_18807);

(statearr_18825_18850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (13))){
var state_18817__$1 = state_18817;
var statearr_18826_18851 = state_18817__$1;
(statearr_18826_18851[(2)] = null);

(statearr_18826_18851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (6))){
var inst_18782 = (state_18817[(8)]);
var inst_18803 = (inst_18782 > (0));
var state_18817__$1 = state_18817;
if(cljs.core.truth_(inst_18803)){
var statearr_18827_18852 = state_18817__$1;
(statearr_18827_18852[(1)] = (12));

} else {
var statearr_18828_18853 = state_18817__$1;
(statearr_18828_18853[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (3))){
var inst_18815 = (state_18817[(2)]);
var state_18817__$1 = state_18817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18817__$1,inst_18815);
} else {
if((state_val_18818 === (12))){
var inst_18781 = (state_18817[(7)]);
var inst_18805 = cljs.core.vec.call(null,inst_18781);
var state_18817__$1 = state_18817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18817__$1,(15),out,inst_18805);
} else {
if((state_val_18818 === (2))){
var state_18817__$1 = state_18817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18817__$1,(4),ch);
} else {
if((state_val_18818 === (11))){
var inst_18797 = (state_18817[(2)]);
var inst_18798 = (new Array(n));
var inst_18781 = inst_18798;
var inst_18782 = (0);
var state_18817__$1 = (function (){var statearr_18829 = state_18817;
(statearr_18829[(7)] = inst_18781);

(statearr_18829[(10)] = inst_18797);

(statearr_18829[(8)] = inst_18782);

return statearr_18829;
})();
var statearr_18830_18854 = state_18817__$1;
(statearr_18830_18854[(2)] = null);

(statearr_18830_18854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (9))){
var inst_18781 = (state_18817[(7)]);
var inst_18795 = cljs.core.vec.call(null,inst_18781);
var state_18817__$1 = state_18817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18817__$1,(11),out,inst_18795);
} else {
if((state_val_18818 === (5))){
var inst_18781 = (state_18817[(7)]);
var inst_18790 = (state_18817[(11)]);
var inst_18785 = (state_18817[(9)]);
var inst_18782 = (state_18817[(8)]);
var inst_18789 = (inst_18781[inst_18782] = inst_18785);
var inst_18790__$1 = (inst_18782 + (1));
var inst_18791 = (inst_18790__$1 < n);
var state_18817__$1 = (function (){var statearr_18831 = state_18817;
(statearr_18831[(12)] = inst_18789);

(statearr_18831[(11)] = inst_18790__$1);

return statearr_18831;
})();
if(cljs.core.truth_(inst_18791)){
var statearr_18832_18855 = state_18817__$1;
(statearr_18832_18855[(1)] = (8));

} else {
var statearr_18833_18856 = state_18817__$1;
(statearr_18833_18856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (14))){
var inst_18810 = (state_18817[(2)]);
var inst_18811 = cljs.core.async.close_BANG_.call(null,out);
var state_18817__$1 = (function (){var statearr_18835 = state_18817;
(statearr_18835[(13)] = inst_18810);

return statearr_18835;
})();
var statearr_18836_18857 = state_18817__$1;
(statearr_18836_18857[(2)] = inst_18811);

(statearr_18836_18857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (10))){
var inst_18801 = (state_18817[(2)]);
var state_18817__$1 = state_18817;
var statearr_18837_18858 = state_18817__$1;
(statearr_18837_18858[(2)] = inst_18801);

(statearr_18837_18858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18818 === (8))){
var inst_18781 = (state_18817[(7)]);
var inst_18790 = (state_18817[(11)]);
var tmp18834 = inst_18781;
var inst_18781__$1 = tmp18834;
var inst_18782 = inst_18790;
var state_18817__$1 = (function (){var statearr_18838 = state_18817;
(statearr_18838[(7)] = inst_18781__$1);

(statearr_18838[(8)] = inst_18782);

return statearr_18838;
})();
var statearr_18839_18859 = state_18817__$1;
(statearr_18839_18859[(2)] = null);

(statearr_18839_18859[(1)] = (2));


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
});})(c__17029__auto___18845,out))
;
return ((function (switch__16939__auto__,c__17029__auto___18845,out){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_18840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18840[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_18840[(1)] = (1));

return statearr_18840;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_18817){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18841){if((e18841 instanceof Object)){
var ex__16943__auto__ = e18841;
var statearr_18842_18860 = state_18817;
(statearr_18842_18860[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18861 = state_18817;
state_18817 = G__18861;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_18817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_18817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18845,out))
})();
var state__17031__auto__ = (function (){var statearr_18843 = f__17030__auto__.call(null);
(statearr_18843[(6)] = c__17029__auto___18845);

return statearr_18843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18845,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18863 = arguments.length;
switch (G__18863) {
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
var c__17029__auto___18933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___18933,out){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___18933,out){
return (function (state_18905){
var state_val_18906 = (state_18905[(1)]);
if((state_val_18906 === (7))){
var inst_18901 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18907_18934 = state_18905__$1;
(statearr_18907_18934[(2)] = inst_18901);

(statearr_18907_18934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (1))){
var inst_18864 = [];
var inst_18865 = inst_18864;
var inst_18866 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18905__$1 = (function (){var statearr_18908 = state_18905;
(statearr_18908[(7)] = inst_18865);

(statearr_18908[(8)] = inst_18866);

return statearr_18908;
})();
var statearr_18909_18935 = state_18905__$1;
(statearr_18909_18935[(2)] = null);

(statearr_18909_18935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (4))){
var inst_18869 = (state_18905[(9)]);
var inst_18869__$1 = (state_18905[(2)]);
var inst_18870 = (inst_18869__$1 == null);
var inst_18871 = cljs.core.not.call(null,inst_18870);
var state_18905__$1 = (function (){var statearr_18910 = state_18905;
(statearr_18910[(9)] = inst_18869__$1);

return statearr_18910;
})();
if(inst_18871){
var statearr_18911_18936 = state_18905__$1;
(statearr_18911_18936[(1)] = (5));

} else {
var statearr_18912_18937 = state_18905__$1;
(statearr_18912_18937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (15))){
var inst_18895 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18913_18938 = state_18905__$1;
(statearr_18913_18938[(2)] = inst_18895);

(statearr_18913_18938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (13))){
var state_18905__$1 = state_18905;
var statearr_18914_18939 = state_18905__$1;
(statearr_18914_18939[(2)] = null);

(statearr_18914_18939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (6))){
var inst_18865 = (state_18905[(7)]);
var inst_18890 = inst_18865.length;
var inst_18891 = (inst_18890 > (0));
var state_18905__$1 = state_18905;
if(cljs.core.truth_(inst_18891)){
var statearr_18915_18940 = state_18905__$1;
(statearr_18915_18940[(1)] = (12));

} else {
var statearr_18916_18941 = state_18905__$1;
(statearr_18916_18941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (3))){
var inst_18903 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18905__$1,inst_18903);
} else {
if((state_val_18906 === (12))){
var inst_18865 = (state_18905[(7)]);
var inst_18893 = cljs.core.vec.call(null,inst_18865);
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18905__$1,(15),out,inst_18893);
} else {
if((state_val_18906 === (2))){
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18905__$1,(4),ch);
} else {
if((state_val_18906 === (11))){
var inst_18873 = (state_18905[(10)]);
var inst_18869 = (state_18905[(9)]);
var inst_18883 = (state_18905[(2)]);
var inst_18884 = [];
var inst_18885 = inst_18884.push(inst_18869);
var inst_18865 = inst_18884;
var inst_18866 = inst_18873;
var state_18905__$1 = (function (){var statearr_18917 = state_18905;
(statearr_18917[(7)] = inst_18865);

(statearr_18917[(11)] = inst_18883);

(statearr_18917[(12)] = inst_18885);

(statearr_18917[(8)] = inst_18866);

return statearr_18917;
})();
var statearr_18918_18942 = state_18905__$1;
(statearr_18918_18942[(2)] = null);

(statearr_18918_18942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (9))){
var inst_18865 = (state_18905[(7)]);
var inst_18881 = cljs.core.vec.call(null,inst_18865);
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18905__$1,(11),out,inst_18881);
} else {
if((state_val_18906 === (5))){
var inst_18873 = (state_18905[(10)]);
var inst_18869 = (state_18905[(9)]);
var inst_18866 = (state_18905[(8)]);
var inst_18873__$1 = f.call(null,inst_18869);
var inst_18874 = cljs.core._EQ_.call(null,inst_18873__$1,inst_18866);
var inst_18875 = cljs.core.keyword_identical_QMARK_.call(null,inst_18866,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18876 = (inst_18874) || (inst_18875);
var state_18905__$1 = (function (){var statearr_18919 = state_18905;
(statearr_18919[(10)] = inst_18873__$1);

return statearr_18919;
})();
if(cljs.core.truth_(inst_18876)){
var statearr_18920_18943 = state_18905__$1;
(statearr_18920_18943[(1)] = (8));

} else {
var statearr_18921_18944 = state_18905__$1;
(statearr_18921_18944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (14))){
var inst_18898 = (state_18905[(2)]);
var inst_18899 = cljs.core.async.close_BANG_.call(null,out);
var state_18905__$1 = (function (){var statearr_18923 = state_18905;
(statearr_18923[(13)] = inst_18898);

return statearr_18923;
})();
var statearr_18924_18945 = state_18905__$1;
(statearr_18924_18945[(2)] = inst_18899);

(statearr_18924_18945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (10))){
var inst_18888 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18925_18946 = state_18905__$1;
(statearr_18925_18946[(2)] = inst_18888);

(statearr_18925_18946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18906 === (8))){
var inst_18865 = (state_18905[(7)]);
var inst_18873 = (state_18905[(10)]);
var inst_18869 = (state_18905[(9)]);
var inst_18878 = inst_18865.push(inst_18869);
var tmp18922 = inst_18865;
var inst_18865__$1 = tmp18922;
var inst_18866 = inst_18873;
var state_18905__$1 = (function (){var statearr_18926 = state_18905;
(statearr_18926[(14)] = inst_18878);

(statearr_18926[(7)] = inst_18865__$1);

(statearr_18926[(8)] = inst_18866);

return statearr_18926;
})();
var statearr_18927_18947 = state_18905__$1;
(statearr_18927_18947[(2)] = null);

(statearr_18927_18947[(1)] = (2));


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
});})(c__17029__auto___18933,out))
;
return ((function (switch__16939__auto__,c__17029__auto___18933,out){
return (function() {
var cljs$core$async$state_machine__16940__auto__ = null;
var cljs$core$async$state_machine__16940__auto____0 = (function (){
var statearr_18928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18928[(0)] = cljs$core$async$state_machine__16940__auto__);

(statearr_18928[(1)] = (1));

return statearr_18928;
});
var cljs$core$async$state_machine__16940__auto____1 = (function (state_18905){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_18905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e18929){if((e18929 instanceof Object)){
var ex__16943__auto__ = e18929;
var statearr_18930_18948 = state_18905;
(statearr_18930_18948[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18949 = state_18905;
state_18905 = G__18949;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
cljs$core$async$state_machine__16940__auto__ = function(state_18905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16940__auto____1.call(this,state_18905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16940__auto____0;
cljs$core$async$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16940__auto____1;
return cljs$core$async$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___18933,out))
})();
var state__17031__auto__ = (function (){var statearr_18931 = f__17030__auto__.call(null);
(statearr_18931[(6)] = c__17029__auto___18933);

return statearr_18931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___18933,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1505319628430
