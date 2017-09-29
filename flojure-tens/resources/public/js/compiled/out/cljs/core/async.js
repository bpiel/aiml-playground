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
var G__63274 = arguments.length;
switch (G__63274) {
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
if(typeof cljs.core.async.t_cljs$core$async63275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63275 = (function (f,blockable,meta63276){
this.f = f;
this.blockable = blockable;
this.meta63276 = meta63276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63277,meta63276__$1){
var self__ = this;
var _63277__$1 = this;
return (new cljs.core.async.t_cljs$core$async63275(self__.f,self__.blockable,meta63276__$1));
});

cljs.core.async.t_cljs$core$async63275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63277){
var self__ = this;
var _63277__$1 = this;
return self__.meta63276;
});

cljs.core.async.t_cljs$core$async63275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async63275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async63275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async63275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta63276","meta63276",1258452943,null)], null);
});

cljs.core.async.t_cljs$core$async63275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63275";

cljs.core.async.t_cljs$core$async63275.cljs$lang$ctorPrWriter = (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async63275");
});

cljs.core.async.__GT_t_cljs$core$async63275 = (function cljs$core$async$__GT_t_cljs$core$async63275(f__$1,blockable__$1,meta63276){
return (new cljs.core.async.t_cljs$core$async63275(f__$1,blockable__$1,meta63276));
});

}

return (new cljs.core.async.t_cljs$core$async63275(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__63281 = arguments.length;
switch (G__63281) {
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
var G__63284 = arguments.length;
switch (G__63284) {
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
var G__63287 = arguments.length;
switch (G__63287) {
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
var val_63289 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_63289);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_63289,ret){
return (function (){
return fn1.call(null,val_63289);
});})(val_63289,ret))
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
var G__63291 = arguments.length;
switch (G__63291) {
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
var n__59178__auto___63293 = n;
var x_63294 = (0);
while(true){
if((x_63294 < n__59178__auto___63293)){
(a[x_63294] = (0));

var G__63295 = (x_63294 + (1));
x_63294 = G__63295;
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

var G__63296 = (i + (1));
i = G__63296;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async63297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63297 = (function (flag,meta63298){
this.flag = flag;
this.meta63298 = meta63298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_63299,meta63298__$1){
var self__ = this;
var _63299__$1 = this;
return (new cljs.core.async.t_cljs$core$async63297(self__.flag,meta63298__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async63297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_63299){
var self__ = this;
var _63299__$1 = this;
return self__.meta63298;
});})(flag))
;

cljs.core.async.t_cljs$core$async63297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async63297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async63297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async63297.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta63298","meta63298",454459163,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async63297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63297";

cljs.core.async.t_cljs$core$async63297.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async63297");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async63297 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async63297(flag__$1,meta63298){
return (new cljs.core.async.t_cljs$core$async63297(flag__$1,meta63298));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async63297(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async63300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63300 = (function (flag,cb,meta63301){
this.flag = flag;
this.cb = cb;
this.meta63301 = meta63301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63302,meta63301__$1){
var self__ = this;
var _63302__$1 = this;
return (new cljs.core.async.t_cljs$core$async63300(self__.flag,self__.cb,meta63301__$1));
});

cljs.core.async.t_cljs$core$async63300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63302){
var self__ = this;
var _63302__$1 = this;
return self__.meta63301;
});

cljs.core.async.t_cljs$core$async63300.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async63300.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async63300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async63300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta63301","meta63301",156466246,null)], null);
});

cljs.core.async.t_cljs$core$async63300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63300";

cljs.core.async.t_cljs$core$async63300.cljs$lang$ctorPrWriter = (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async63300");
});

cljs.core.async.__GT_t_cljs$core$async63300 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async63300(flag__$1,cb__$1,meta63301){
return (new cljs.core.async.t_cljs$core$async63300(flag__$1,cb__$1,meta63301));
});

}

return (new cljs.core.async.t_cljs$core$async63300(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__63303_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63303_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63304_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63304_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__58135__auto__ = wport;
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
return port;
}
})()], null));
} else {
var G__63305 = (i + (1));
i = G__63305;
continue;
}
} else {
return null;
}
break;
}
})();
var or__58135__auto__ = ret;
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__58123__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__58123__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__58123__auto__;
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
var args__59419__auto__ = [];
var len__59412__auto___63311 = arguments.length;
var i__59413__auto___63312 = (0);
while(true){
if((i__59413__auto___63312 < len__59412__auto___63311)){
args__59419__auto__.push((arguments[i__59413__auto___63312]));

var G__63313 = (i__59413__auto___63312 + (1));
i__59413__auto___63312 = G__63313;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((1) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59420__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__63308){
var map__63309 = p__63308;
var map__63309__$1 = ((((!((map__63309 == null)))?((((map__63309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63309):map__63309);
var opts = map__63309__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq63306){
var G__63307 = cljs.core.first.call(null,seq63306);
var seq63306__$1 = cljs.core.next.call(null,seq63306);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63307,seq63306__$1);
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
var G__63315 = arguments.length;
switch (G__63315) {
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
var c__63214__auto___63361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___63361){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___63361){
return (function (state_63339){
var state_val_63340 = (state_63339[(1)]);
if((state_val_63340 === (7))){
var inst_63335 = (state_63339[(2)]);
var state_63339__$1 = state_63339;
var statearr_63341_63362 = state_63339__$1;
(statearr_63341_63362[(2)] = inst_63335);

(statearr_63341_63362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (1))){
var state_63339__$1 = state_63339;
var statearr_63342_63363 = state_63339__$1;
(statearr_63342_63363[(2)] = null);

(statearr_63342_63363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (4))){
var inst_63318 = (state_63339[(7)]);
var inst_63318__$1 = (state_63339[(2)]);
var inst_63319 = (inst_63318__$1 == null);
var state_63339__$1 = (function (){var statearr_63343 = state_63339;
(statearr_63343[(7)] = inst_63318__$1);

return statearr_63343;
})();
if(cljs.core.truth_(inst_63319)){
var statearr_63344_63364 = state_63339__$1;
(statearr_63344_63364[(1)] = (5));

} else {
var statearr_63345_63365 = state_63339__$1;
(statearr_63345_63365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (13))){
var state_63339__$1 = state_63339;
var statearr_63346_63366 = state_63339__$1;
(statearr_63346_63366[(2)] = null);

(statearr_63346_63366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (6))){
var inst_63318 = (state_63339[(7)]);
var state_63339__$1 = state_63339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63339__$1,(11),to,inst_63318);
} else {
if((state_val_63340 === (3))){
var inst_63337 = (state_63339[(2)]);
var state_63339__$1 = state_63339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63339__$1,inst_63337);
} else {
if((state_val_63340 === (12))){
var state_63339__$1 = state_63339;
var statearr_63347_63367 = state_63339__$1;
(statearr_63347_63367[(2)] = null);

(statearr_63347_63367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (2))){
var state_63339__$1 = state_63339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63339__$1,(4),from);
} else {
if((state_val_63340 === (11))){
var inst_63328 = (state_63339[(2)]);
var state_63339__$1 = state_63339;
if(cljs.core.truth_(inst_63328)){
var statearr_63348_63368 = state_63339__$1;
(statearr_63348_63368[(1)] = (12));

} else {
var statearr_63349_63369 = state_63339__$1;
(statearr_63349_63369[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (9))){
var state_63339__$1 = state_63339;
var statearr_63350_63370 = state_63339__$1;
(statearr_63350_63370[(2)] = null);

(statearr_63350_63370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (5))){
var state_63339__$1 = state_63339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63351_63371 = state_63339__$1;
(statearr_63351_63371[(1)] = (8));

} else {
var statearr_63352_63372 = state_63339__$1;
(statearr_63352_63372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (14))){
var inst_63333 = (state_63339[(2)]);
var state_63339__$1 = state_63339;
var statearr_63353_63373 = state_63339__$1;
(statearr_63353_63373[(2)] = inst_63333);

(statearr_63353_63373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (10))){
var inst_63325 = (state_63339[(2)]);
var state_63339__$1 = state_63339;
var statearr_63354_63374 = state_63339__$1;
(statearr_63354_63374[(2)] = inst_63325);

(statearr_63354_63374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63340 === (8))){
var inst_63322 = cljs.core.async.close_BANG_.call(null,to);
var state_63339__$1 = state_63339;
var statearr_63355_63375 = state_63339__$1;
(statearr_63355_63375[(2)] = inst_63322);

(statearr_63355_63375[(1)] = (10));


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
});})(c__63214__auto___63361))
;
return ((function (switch__63124__auto__,c__63214__auto___63361){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_63356 = [null,null,null,null,null,null,null,null];
(statearr_63356[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_63356[(1)] = (1));

return statearr_63356;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_63339){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63357){if((e63357 instanceof Object)){
var ex__63128__auto__ = e63357;
var statearr_63358_63376 = state_63339;
(statearr_63358_63376[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63377 = state_63339;
state_63339 = G__63377;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_63339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_63339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___63361))
})();
var state__63216__auto__ = (function (){var statearr_63359 = f__63215__auto__.call(null);
(statearr_63359[(6)] = c__63214__auto___63361);

return statearr_63359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___63361))
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
return (function (p__63378){
var vec__63379 = p__63378;
var v = cljs.core.nth.call(null,vec__63379,(0),null);
var p = cljs.core.nth.call(null,vec__63379,(1),null);
var job = vec__63379;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__63214__auto___63550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___63550,res,vec__63379,v,p,job,jobs,results){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___63550,res,vec__63379,v,p,job,jobs,results){
return (function (state_63386){
var state_val_63387 = (state_63386[(1)]);
if((state_val_63387 === (1))){
var state_63386__$1 = state_63386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63386__$1,(2),res,v);
} else {
if((state_val_63387 === (2))){
var inst_63383 = (state_63386[(2)]);
var inst_63384 = cljs.core.async.close_BANG_.call(null,res);
var state_63386__$1 = (function (){var statearr_63388 = state_63386;
(statearr_63388[(7)] = inst_63383);

return statearr_63388;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63386__$1,inst_63384);
} else {
return null;
}
}
});})(c__63214__auto___63550,res,vec__63379,v,p,job,jobs,results))
;
return ((function (switch__63124__auto__,c__63214__auto___63550,res,vec__63379,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0 = (function (){
var statearr_63389 = [null,null,null,null,null,null,null,null];
(statearr_63389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__);

(statearr_63389[(1)] = (1));

return statearr_63389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1 = (function (state_63386){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63390){if((e63390 instanceof Object)){
var ex__63128__auto__ = e63390;
var statearr_63391_63551 = state_63386;
(statearr_63391_63551[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63552 = state_63386;
state_63386 = G__63552;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = function(state_63386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1.call(this,state_63386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___63550,res,vec__63379,v,p,job,jobs,results))
})();
var state__63216__auto__ = (function (){var statearr_63392 = f__63215__auto__.call(null);
(statearr_63392[(6)] = c__63214__auto___63550);

return statearr_63392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___63550,res,vec__63379,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__63393){
var vec__63394 = p__63393;
var v = cljs.core.nth.call(null,vec__63394,(0),null);
var p = cljs.core.nth.call(null,vec__63394,(1),null);
var job = vec__63394;
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
var n__59178__auto___63553 = n;
var __63554 = (0);
while(true){
if((__63554 < n__59178__auto___63553)){
var G__63397_63555 = type;
var G__63397_63556__$1 = (((G__63397_63555 instanceof cljs.core.Keyword))?G__63397_63555.fqn:null);
switch (G__63397_63556__$1) {
case "compute":
var c__63214__auto___63558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__63554,c__63214__auto___63558,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (__63554,c__63214__auto___63558,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async){
return (function (state_63410){
var state_val_63411 = (state_63410[(1)]);
if((state_val_63411 === (1))){
var state_63410__$1 = state_63410;
var statearr_63412_63559 = state_63410__$1;
(statearr_63412_63559[(2)] = null);

(statearr_63412_63559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63411 === (2))){
var state_63410__$1 = state_63410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63410__$1,(4),jobs);
} else {
if((state_val_63411 === (3))){
var inst_63408 = (state_63410[(2)]);
var state_63410__$1 = state_63410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63410__$1,inst_63408);
} else {
if((state_val_63411 === (4))){
var inst_63400 = (state_63410[(2)]);
var inst_63401 = process.call(null,inst_63400);
var state_63410__$1 = state_63410;
if(cljs.core.truth_(inst_63401)){
var statearr_63413_63560 = state_63410__$1;
(statearr_63413_63560[(1)] = (5));

} else {
var statearr_63414_63561 = state_63410__$1;
(statearr_63414_63561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63411 === (5))){
var state_63410__$1 = state_63410;
var statearr_63415_63562 = state_63410__$1;
(statearr_63415_63562[(2)] = null);

(statearr_63415_63562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63411 === (6))){
var state_63410__$1 = state_63410;
var statearr_63416_63563 = state_63410__$1;
(statearr_63416_63563[(2)] = null);

(statearr_63416_63563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63411 === (7))){
var inst_63406 = (state_63410[(2)]);
var state_63410__$1 = state_63410;
var statearr_63417_63564 = state_63410__$1;
(statearr_63417_63564[(2)] = inst_63406);

(statearr_63417_63564[(1)] = (3));


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
});})(__63554,c__63214__auto___63558,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async))
;
return ((function (__63554,switch__63124__auto__,c__63214__auto___63558,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0 = (function (){
var statearr_63418 = [null,null,null,null,null,null,null];
(statearr_63418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__);

(statearr_63418[(1)] = (1));

return statearr_63418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1 = (function (state_63410){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63419){if((e63419 instanceof Object)){
var ex__63128__auto__ = e63419;
var statearr_63420_63565 = state_63410;
(statearr_63420_63565[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63566 = state_63410;
state_63410 = G__63566;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = function(state_63410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1.call(this,state_63410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__;
})()
;})(__63554,switch__63124__auto__,c__63214__auto___63558,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async))
})();
var state__63216__auto__ = (function (){var statearr_63421 = f__63215__auto__.call(null);
(statearr_63421[(6)] = c__63214__auto___63558);

return statearr_63421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(__63554,c__63214__auto___63558,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async))
);


break;
case "async":
var c__63214__auto___63567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__63554,c__63214__auto___63567,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (__63554,c__63214__auto___63567,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async){
return (function (state_63434){
var state_val_63435 = (state_63434[(1)]);
if((state_val_63435 === (1))){
var state_63434__$1 = state_63434;
var statearr_63436_63568 = state_63434__$1;
(statearr_63436_63568[(2)] = null);

(statearr_63436_63568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63435 === (2))){
var state_63434__$1 = state_63434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63434__$1,(4),jobs);
} else {
if((state_val_63435 === (3))){
var inst_63432 = (state_63434[(2)]);
var state_63434__$1 = state_63434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63434__$1,inst_63432);
} else {
if((state_val_63435 === (4))){
var inst_63424 = (state_63434[(2)]);
var inst_63425 = async.call(null,inst_63424);
var state_63434__$1 = state_63434;
if(cljs.core.truth_(inst_63425)){
var statearr_63437_63569 = state_63434__$1;
(statearr_63437_63569[(1)] = (5));

} else {
var statearr_63438_63570 = state_63434__$1;
(statearr_63438_63570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63435 === (5))){
var state_63434__$1 = state_63434;
var statearr_63439_63571 = state_63434__$1;
(statearr_63439_63571[(2)] = null);

(statearr_63439_63571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63435 === (6))){
var state_63434__$1 = state_63434;
var statearr_63440_63572 = state_63434__$1;
(statearr_63440_63572[(2)] = null);

(statearr_63440_63572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63435 === (7))){
var inst_63430 = (state_63434[(2)]);
var state_63434__$1 = state_63434;
var statearr_63441_63573 = state_63434__$1;
(statearr_63441_63573[(2)] = inst_63430);

(statearr_63441_63573[(1)] = (3));


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
});})(__63554,c__63214__auto___63567,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async))
;
return ((function (__63554,switch__63124__auto__,c__63214__auto___63567,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0 = (function (){
var statearr_63442 = [null,null,null,null,null,null,null];
(statearr_63442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__);

(statearr_63442[(1)] = (1));

return statearr_63442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1 = (function (state_63434){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63443){if((e63443 instanceof Object)){
var ex__63128__auto__ = e63443;
var statearr_63444_63574 = state_63434;
(statearr_63444_63574[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63575 = state_63434;
state_63434 = G__63575;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = function(state_63434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1.call(this,state_63434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__;
})()
;})(__63554,switch__63124__auto__,c__63214__auto___63567,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async))
})();
var state__63216__auto__ = (function (){var statearr_63445 = f__63215__auto__.call(null);
(statearr_63445[(6)] = c__63214__auto___63567);

return statearr_63445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(__63554,c__63214__auto___63567,G__63397_63555,G__63397_63556__$1,n__59178__auto___63553,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63397_63556__$1)].join('')));

}

var G__63576 = (__63554 + (1));
__63554 = G__63576;
continue;
} else {
}
break;
}

var c__63214__auto___63577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___63577,jobs,results,process,async){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___63577,jobs,results,process,async){
return (function (state_63467){
var state_val_63468 = (state_63467[(1)]);
if((state_val_63468 === (1))){
var state_63467__$1 = state_63467;
var statearr_63469_63578 = state_63467__$1;
(statearr_63469_63578[(2)] = null);

(statearr_63469_63578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63468 === (2))){
var state_63467__$1 = state_63467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63467__$1,(4),from);
} else {
if((state_val_63468 === (3))){
var inst_63465 = (state_63467[(2)]);
var state_63467__$1 = state_63467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63467__$1,inst_63465);
} else {
if((state_val_63468 === (4))){
var inst_63448 = (state_63467[(7)]);
var inst_63448__$1 = (state_63467[(2)]);
var inst_63449 = (inst_63448__$1 == null);
var state_63467__$1 = (function (){var statearr_63470 = state_63467;
(statearr_63470[(7)] = inst_63448__$1);

return statearr_63470;
})();
if(cljs.core.truth_(inst_63449)){
var statearr_63471_63579 = state_63467__$1;
(statearr_63471_63579[(1)] = (5));

} else {
var statearr_63472_63580 = state_63467__$1;
(statearr_63472_63580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63468 === (5))){
var inst_63451 = cljs.core.async.close_BANG_.call(null,jobs);
var state_63467__$1 = state_63467;
var statearr_63473_63581 = state_63467__$1;
(statearr_63473_63581[(2)] = inst_63451);

(statearr_63473_63581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63468 === (6))){
var inst_63453 = (state_63467[(8)]);
var inst_63448 = (state_63467[(7)]);
var inst_63453__$1 = cljs.core.async.chan.call(null,(1));
var inst_63454 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63455 = [inst_63448,inst_63453__$1];
var inst_63456 = (new cljs.core.PersistentVector(null,2,(5),inst_63454,inst_63455,null));
var state_63467__$1 = (function (){var statearr_63474 = state_63467;
(statearr_63474[(8)] = inst_63453__$1);

return statearr_63474;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63467__$1,(8),jobs,inst_63456);
} else {
if((state_val_63468 === (7))){
var inst_63463 = (state_63467[(2)]);
var state_63467__$1 = state_63467;
var statearr_63475_63582 = state_63467__$1;
(statearr_63475_63582[(2)] = inst_63463);

(statearr_63475_63582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63468 === (8))){
var inst_63453 = (state_63467[(8)]);
var inst_63458 = (state_63467[(2)]);
var state_63467__$1 = (function (){var statearr_63476 = state_63467;
(statearr_63476[(9)] = inst_63458);

return statearr_63476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63467__$1,(9),results,inst_63453);
} else {
if((state_val_63468 === (9))){
var inst_63460 = (state_63467[(2)]);
var state_63467__$1 = (function (){var statearr_63477 = state_63467;
(statearr_63477[(10)] = inst_63460);

return statearr_63477;
})();
var statearr_63478_63583 = state_63467__$1;
(statearr_63478_63583[(2)] = null);

(statearr_63478_63583[(1)] = (2));


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
});})(c__63214__auto___63577,jobs,results,process,async))
;
return ((function (switch__63124__auto__,c__63214__auto___63577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0 = (function (){
var statearr_63479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__);

(statearr_63479[(1)] = (1));

return statearr_63479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1 = (function (state_63467){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63480){if((e63480 instanceof Object)){
var ex__63128__auto__ = e63480;
var statearr_63481_63584 = state_63467;
(statearr_63481_63584[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63585 = state_63467;
state_63467 = G__63585;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = function(state_63467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1.call(this,state_63467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___63577,jobs,results,process,async))
})();
var state__63216__auto__ = (function (){var statearr_63482 = f__63215__auto__.call(null);
(statearr_63482[(6)] = c__63214__auto___63577);

return statearr_63482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___63577,jobs,results,process,async))
);


var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__,jobs,results,process,async){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__,jobs,results,process,async){
return (function (state_63520){
var state_val_63521 = (state_63520[(1)]);
if((state_val_63521 === (7))){
var inst_63516 = (state_63520[(2)]);
var state_63520__$1 = state_63520;
var statearr_63522_63586 = state_63520__$1;
(statearr_63522_63586[(2)] = inst_63516);

(statearr_63522_63586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (20))){
var state_63520__$1 = state_63520;
var statearr_63523_63587 = state_63520__$1;
(statearr_63523_63587[(2)] = null);

(statearr_63523_63587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (1))){
var state_63520__$1 = state_63520;
var statearr_63524_63588 = state_63520__$1;
(statearr_63524_63588[(2)] = null);

(statearr_63524_63588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (4))){
var inst_63485 = (state_63520[(7)]);
var inst_63485__$1 = (state_63520[(2)]);
var inst_63486 = (inst_63485__$1 == null);
var state_63520__$1 = (function (){var statearr_63525 = state_63520;
(statearr_63525[(7)] = inst_63485__$1);

return statearr_63525;
})();
if(cljs.core.truth_(inst_63486)){
var statearr_63526_63589 = state_63520__$1;
(statearr_63526_63589[(1)] = (5));

} else {
var statearr_63527_63590 = state_63520__$1;
(statearr_63527_63590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (15))){
var inst_63498 = (state_63520[(8)]);
var state_63520__$1 = state_63520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63520__$1,(18),to,inst_63498);
} else {
if((state_val_63521 === (21))){
var inst_63511 = (state_63520[(2)]);
var state_63520__$1 = state_63520;
var statearr_63528_63591 = state_63520__$1;
(statearr_63528_63591[(2)] = inst_63511);

(statearr_63528_63591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (13))){
var inst_63513 = (state_63520[(2)]);
var state_63520__$1 = (function (){var statearr_63529 = state_63520;
(statearr_63529[(9)] = inst_63513);

return statearr_63529;
})();
var statearr_63530_63592 = state_63520__$1;
(statearr_63530_63592[(2)] = null);

(statearr_63530_63592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (6))){
var inst_63485 = (state_63520[(7)]);
var state_63520__$1 = state_63520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63520__$1,(11),inst_63485);
} else {
if((state_val_63521 === (17))){
var inst_63506 = (state_63520[(2)]);
var state_63520__$1 = state_63520;
if(cljs.core.truth_(inst_63506)){
var statearr_63531_63593 = state_63520__$1;
(statearr_63531_63593[(1)] = (19));

} else {
var statearr_63532_63594 = state_63520__$1;
(statearr_63532_63594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (3))){
var inst_63518 = (state_63520[(2)]);
var state_63520__$1 = state_63520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63520__$1,inst_63518);
} else {
if((state_val_63521 === (12))){
var inst_63495 = (state_63520[(10)]);
var state_63520__$1 = state_63520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63520__$1,(14),inst_63495);
} else {
if((state_val_63521 === (2))){
var state_63520__$1 = state_63520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63520__$1,(4),results);
} else {
if((state_val_63521 === (19))){
var state_63520__$1 = state_63520;
var statearr_63533_63595 = state_63520__$1;
(statearr_63533_63595[(2)] = null);

(statearr_63533_63595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (11))){
var inst_63495 = (state_63520[(2)]);
var state_63520__$1 = (function (){var statearr_63534 = state_63520;
(statearr_63534[(10)] = inst_63495);

return statearr_63534;
})();
var statearr_63535_63596 = state_63520__$1;
(statearr_63535_63596[(2)] = null);

(statearr_63535_63596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (9))){
var state_63520__$1 = state_63520;
var statearr_63536_63597 = state_63520__$1;
(statearr_63536_63597[(2)] = null);

(statearr_63536_63597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (5))){
var state_63520__$1 = state_63520;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63537_63598 = state_63520__$1;
(statearr_63537_63598[(1)] = (8));

} else {
var statearr_63538_63599 = state_63520__$1;
(statearr_63538_63599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (14))){
var inst_63498 = (state_63520[(8)]);
var inst_63500 = (state_63520[(11)]);
var inst_63498__$1 = (state_63520[(2)]);
var inst_63499 = (inst_63498__$1 == null);
var inst_63500__$1 = cljs.core.not.call(null,inst_63499);
var state_63520__$1 = (function (){var statearr_63539 = state_63520;
(statearr_63539[(8)] = inst_63498__$1);

(statearr_63539[(11)] = inst_63500__$1);

return statearr_63539;
})();
if(inst_63500__$1){
var statearr_63540_63600 = state_63520__$1;
(statearr_63540_63600[(1)] = (15));

} else {
var statearr_63541_63601 = state_63520__$1;
(statearr_63541_63601[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (16))){
var inst_63500 = (state_63520[(11)]);
var state_63520__$1 = state_63520;
var statearr_63542_63602 = state_63520__$1;
(statearr_63542_63602[(2)] = inst_63500);

(statearr_63542_63602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (10))){
var inst_63492 = (state_63520[(2)]);
var state_63520__$1 = state_63520;
var statearr_63543_63603 = state_63520__$1;
(statearr_63543_63603[(2)] = inst_63492);

(statearr_63543_63603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (18))){
var inst_63503 = (state_63520[(2)]);
var state_63520__$1 = state_63520;
var statearr_63544_63604 = state_63520__$1;
(statearr_63544_63604[(2)] = inst_63503);

(statearr_63544_63604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63521 === (8))){
var inst_63489 = cljs.core.async.close_BANG_.call(null,to);
var state_63520__$1 = state_63520;
var statearr_63545_63605 = state_63520__$1;
(statearr_63545_63605[(2)] = inst_63489);

(statearr_63545_63605[(1)] = (10));


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
});})(c__63214__auto__,jobs,results,process,async))
;
return ((function (switch__63124__auto__,c__63214__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0 = (function (){
var statearr_63546 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__);

(statearr_63546[(1)] = (1));

return statearr_63546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1 = (function (state_63520){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63547){if((e63547 instanceof Object)){
var ex__63128__auto__ = e63547;
var statearr_63548_63606 = state_63520;
(statearr_63548_63606[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63607 = state_63520;
state_63520 = G__63607;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__ = function(state_63520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1.call(this,state_63520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__,jobs,results,process,async))
})();
var state__63216__auto__ = (function (){var statearr_63549 = f__63215__auto__.call(null);
(statearr_63549[(6)] = c__63214__auto__);

return statearr_63549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__,jobs,results,process,async))
);

return c__63214__auto__;
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
var G__63609 = arguments.length;
switch (G__63609) {
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
var G__63612 = arguments.length;
switch (G__63612) {
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
var G__63615 = arguments.length;
switch (G__63615) {
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
var c__63214__auto___63664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___63664,tc,fc){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___63664,tc,fc){
return (function (state_63641){
var state_val_63642 = (state_63641[(1)]);
if((state_val_63642 === (7))){
var inst_63637 = (state_63641[(2)]);
var state_63641__$1 = state_63641;
var statearr_63643_63665 = state_63641__$1;
(statearr_63643_63665[(2)] = inst_63637);

(statearr_63643_63665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (1))){
var state_63641__$1 = state_63641;
var statearr_63644_63666 = state_63641__$1;
(statearr_63644_63666[(2)] = null);

(statearr_63644_63666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (4))){
var inst_63618 = (state_63641[(7)]);
var inst_63618__$1 = (state_63641[(2)]);
var inst_63619 = (inst_63618__$1 == null);
var state_63641__$1 = (function (){var statearr_63645 = state_63641;
(statearr_63645[(7)] = inst_63618__$1);

return statearr_63645;
})();
if(cljs.core.truth_(inst_63619)){
var statearr_63646_63667 = state_63641__$1;
(statearr_63646_63667[(1)] = (5));

} else {
var statearr_63647_63668 = state_63641__$1;
(statearr_63647_63668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (13))){
var state_63641__$1 = state_63641;
var statearr_63648_63669 = state_63641__$1;
(statearr_63648_63669[(2)] = null);

(statearr_63648_63669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (6))){
var inst_63618 = (state_63641[(7)]);
var inst_63624 = p.call(null,inst_63618);
var state_63641__$1 = state_63641;
if(cljs.core.truth_(inst_63624)){
var statearr_63649_63670 = state_63641__$1;
(statearr_63649_63670[(1)] = (9));

} else {
var statearr_63650_63671 = state_63641__$1;
(statearr_63650_63671[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (3))){
var inst_63639 = (state_63641[(2)]);
var state_63641__$1 = state_63641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63641__$1,inst_63639);
} else {
if((state_val_63642 === (12))){
var state_63641__$1 = state_63641;
var statearr_63651_63672 = state_63641__$1;
(statearr_63651_63672[(2)] = null);

(statearr_63651_63672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (2))){
var state_63641__$1 = state_63641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63641__$1,(4),ch);
} else {
if((state_val_63642 === (11))){
var inst_63618 = (state_63641[(7)]);
var inst_63628 = (state_63641[(2)]);
var state_63641__$1 = state_63641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63641__$1,(8),inst_63628,inst_63618);
} else {
if((state_val_63642 === (9))){
var state_63641__$1 = state_63641;
var statearr_63652_63673 = state_63641__$1;
(statearr_63652_63673[(2)] = tc);

(statearr_63652_63673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (5))){
var inst_63621 = cljs.core.async.close_BANG_.call(null,tc);
var inst_63622 = cljs.core.async.close_BANG_.call(null,fc);
var state_63641__$1 = (function (){var statearr_63653 = state_63641;
(statearr_63653[(8)] = inst_63621);

return statearr_63653;
})();
var statearr_63654_63674 = state_63641__$1;
(statearr_63654_63674[(2)] = inst_63622);

(statearr_63654_63674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (14))){
var inst_63635 = (state_63641[(2)]);
var state_63641__$1 = state_63641;
var statearr_63655_63675 = state_63641__$1;
(statearr_63655_63675[(2)] = inst_63635);

(statearr_63655_63675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (10))){
var state_63641__$1 = state_63641;
var statearr_63656_63676 = state_63641__$1;
(statearr_63656_63676[(2)] = fc);

(statearr_63656_63676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63642 === (8))){
var inst_63630 = (state_63641[(2)]);
var state_63641__$1 = state_63641;
if(cljs.core.truth_(inst_63630)){
var statearr_63657_63677 = state_63641__$1;
(statearr_63657_63677[(1)] = (12));

} else {
var statearr_63658_63678 = state_63641__$1;
(statearr_63658_63678[(1)] = (13));

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
});})(c__63214__auto___63664,tc,fc))
;
return ((function (switch__63124__auto__,c__63214__auto___63664,tc,fc){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_63659 = [null,null,null,null,null,null,null,null,null];
(statearr_63659[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_63659[(1)] = (1));

return statearr_63659;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_63641){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63660){if((e63660 instanceof Object)){
var ex__63128__auto__ = e63660;
var statearr_63661_63679 = state_63641;
(statearr_63661_63679[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63680 = state_63641;
state_63641 = G__63680;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_63641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_63641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___63664,tc,fc))
})();
var state__63216__auto__ = (function (){var statearr_63662 = f__63215__auto__.call(null);
(statearr_63662[(6)] = c__63214__auto___63664);

return statearr_63662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___63664,tc,fc))
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
var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__){
return (function (state_63701){
var state_val_63702 = (state_63701[(1)]);
if((state_val_63702 === (7))){
var inst_63697 = (state_63701[(2)]);
var state_63701__$1 = state_63701;
var statearr_63703_63721 = state_63701__$1;
(statearr_63703_63721[(2)] = inst_63697);

(statearr_63703_63721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (1))){
var inst_63681 = init;
var state_63701__$1 = (function (){var statearr_63704 = state_63701;
(statearr_63704[(7)] = inst_63681);

return statearr_63704;
})();
var statearr_63705_63722 = state_63701__$1;
(statearr_63705_63722[(2)] = null);

(statearr_63705_63722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (4))){
var inst_63684 = (state_63701[(8)]);
var inst_63684__$1 = (state_63701[(2)]);
var inst_63685 = (inst_63684__$1 == null);
var state_63701__$1 = (function (){var statearr_63706 = state_63701;
(statearr_63706[(8)] = inst_63684__$1);

return statearr_63706;
})();
if(cljs.core.truth_(inst_63685)){
var statearr_63707_63723 = state_63701__$1;
(statearr_63707_63723[(1)] = (5));

} else {
var statearr_63708_63724 = state_63701__$1;
(statearr_63708_63724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (6))){
var inst_63688 = (state_63701[(9)]);
var inst_63684 = (state_63701[(8)]);
var inst_63681 = (state_63701[(7)]);
var inst_63688__$1 = f.call(null,inst_63681,inst_63684);
var inst_63689 = cljs.core.reduced_QMARK_.call(null,inst_63688__$1);
var state_63701__$1 = (function (){var statearr_63709 = state_63701;
(statearr_63709[(9)] = inst_63688__$1);

return statearr_63709;
})();
if(inst_63689){
var statearr_63710_63725 = state_63701__$1;
(statearr_63710_63725[(1)] = (8));

} else {
var statearr_63711_63726 = state_63701__$1;
(statearr_63711_63726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (3))){
var inst_63699 = (state_63701[(2)]);
var state_63701__$1 = state_63701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63701__$1,inst_63699);
} else {
if((state_val_63702 === (2))){
var state_63701__$1 = state_63701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63701__$1,(4),ch);
} else {
if((state_val_63702 === (9))){
var inst_63688 = (state_63701[(9)]);
var inst_63681 = inst_63688;
var state_63701__$1 = (function (){var statearr_63712 = state_63701;
(statearr_63712[(7)] = inst_63681);

return statearr_63712;
})();
var statearr_63713_63727 = state_63701__$1;
(statearr_63713_63727[(2)] = null);

(statearr_63713_63727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (5))){
var inst_63681 = (state_63701[(7)]);
var state_63701__$1 = state_63701;
var statearr_63714_63728 = state_63701__$1;
(statearr_63714_63728[(2)] = inst_63681);

(statearr_63714_63728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (10))){
var inst_63695 = (state_63701[(2)]);
var state_63701__$1 = state_63701;
var statearr_63715_63729 = state_63701__$1;
(statearr_63715_63729[(2)] = inst_63695);

(statearr_63715_63729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63702 === (8))){
var inst_63688 = (state_63701[(9)]);
var inst_63691 = cljs.core.deref.call(null,inst_63688);
var state_63701__$1 = state_63701;
var statearr_63716_63730 = state_63701__$1;
(statearr_63716_63730[(2)] = inst_63691);

(statearr_63716_63730[(1)] = (10));


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
});})(c__63214__auto__))
;
return ((function (switch__63124__auto__,c__63214__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__63125__auto__ = null;
var cljs$core$async$reduce_$_state_machine__63125__auto____0 = (function (){
var statearr_63717 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63717[(0)] = cljs$core$async$reduce_$_state_machine__63125__auto__);

(statearr_63717[(1)] = (1));

return statearr_63717;
});
var cljs$core$async$reduce_$_state_machine__63125__auto____1 = (function (state_63701){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63718){if((e63718 instanceof Object)){
var ex__63128__auto__ = e63718;
var statearr_63719_63731 = state_63701;
(statearr_63719_63731[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63732 = state_63701;
state_63701 = G__63732;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__63125__auto__ = function(state_63701){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__63125__auto____1.call(this,state_63701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__63125__auto____0;
cljs$core$async$reduce_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__63125__auto____1;
return cljs$core$async$reduce_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__))
})();
var state__63216__auto__ = (function (){var statearr_63720 = f__63215__auto__.call(null);
(statearr_63720[(6)] = c__63214__auto__);

return statearr_63720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__))
);

return c__63214__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__,f__$1){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__,f__$1){
return (function (state_63738){
var state_val_63739 = (state_63738[(1)]);
if((state_val_63739 === (1))){
var inst_63733 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_63738__$1 = state_63738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63738__$1,(2),inst_63733);
} else {
if((state_val_63739 === (2))){
var inst_63735 = (state_63738[(2)]);
var inst_63736 = f__$1.call(null,inst_63735);
var state_63738__$1 = state_63738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63738__$1,inst_63736);
} else {
return null;
}
}
});})(c__63214__auto__,f__$1))
;
return ((function (switch__63124__auto__,c__63214__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__63125__auto__ = null;
var cljs$core$async$transduce_$_state_machine__63125__auto____0 = (function (){
var statearr_63740 = [null,null,null,null,null,null,null];
(statearr_63740[(0)] = cljs$core$async$transduce_$_state_machine__63125__auto__);

(statearr_63740[(1)] = (1));

return statearr_63740;
});
var cljs$core$async$transduce_$_state_machine__63125__auto____1 = (function (state_63738){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63741){if((e63741 instanceof Object)){
var ex__63128__auto__ = e63741;
var statearr_63742_63744 = state_63738;
(statearr_63742_63744[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63745 = state_63738;
state_63738 = G__63745;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__63125__auto__ = function(state_63738){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__63125__auto____1.call(this,state_63738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__63125__auto____0;
cljs$core$async$transduce_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__63125__auto____1;
return cljs$core$async$transduce_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__,f__$1))
})();
var state__63216__auto__ = (function (){var statearr_63743 = f__63215__auto__.call(null);
(statearr_63743[(6)] = c__63214__auto__);

return statearr_63743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__,f__$1))
);

return c__63214__auto__;
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
var G__63747 = arguments.length;
switch (G__63747) {
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
var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__){
return (function (state_63772){
var state_val_63773 = (state_63772[(1)]);
if((state_val_63773 === (7))){
var inst_63754 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
var statearr_63774_63795 = state_63772__$1;
(statearr_63774_63795[(2)] = inst_63754);

(statearr_63774_63795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (1))){
var inst_63748 = cljs.core.seq.call(null,coll);
var inst_63749 = inst_63748;
var state_63772__$1 = (function (){var statearr_63775 = state_63772;
(statearr_63775[(7)] = inst_63749);

return statearr_63775;
})();
var statearr_63776_63796 = state_63772__$1;
(statearr_63776_63796[(2)] = null);

(statearr_63776_63796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (4))){
var inst_63749 = (state_63772[(7)]);
var inst_63752 = cljs.core.first.call(null,inst_63749);
var state_63772__$1 = state_63772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63772__$1,(7),ch,inst_63752);
} else {
if((state_val_63773 === (13))){
var inst_63766 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
var statearr_63777_63797 = state_63772__$1;
(statearr_63777_63797[(2)] = inst_63766);

(statearr_63777_63797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (6))){
var inst_63757 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
if(cljs.core.truth_(inst_63757)){
var statearr_63778_63798 = state_63772__$1;
(statearr_63778_63798[(1)] = (8));

} else {
var statearr_63779_63799 = state_63772__$1;
(statearr_63779_63799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (3))){
var inst_63770 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63772__$1,inst_63770);
} else {
if((state_val_63773 === (12))){
var state_63772__$1 = state_63772;
var statearr_63780_63800 = state_63772__$1;
(statearr_63780_63800[(2)] = null);

(statearr_63780_63800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (2))){
var inst_63749 = (state_63772[(7)]);
var state_63772__$1 = state_63772;
if(cljs.core.truth_(inst_63749)){
var statearr_63781_63801 = state_63772__$1;
(statearr_63781_63801[(1)] = (4));

} else {
var statearr_63782_63802 = state_63772__$1;
(statearr_63782_63802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (11))){
var inst_63763 = cljs.core.async.close_BANG_.call(null,ch);
var state_63772__$1 = state_63772;
var statearr_63783_63803 = state_63772__$1;
(statearr_63783_63803[(2)] = inst_63763);

(statearr_63783_63803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (9))){
var state_63772__$1 = state_63772;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63784_63804 = state_63772__$1;
(statearr_63784_63804[(1)] = (11));

} else {
var statearr_63785_63805 = state_63772__$1;
(statearr_63785_63805[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (5))){
var inst_63749 = (state_63772[(7)]);
var state_63772__$1 = state_63772;
var statearr_63786_63806 = state_63772__$1;
(statearr_63786_63806[(2)] = inst_63749);

(statearr_63786_63806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (10))){
var inst_63768 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
var statearr_63787_63807 = state_63772__$1;
(statearr_63787_63807[(2)] = inst_63768);

(statearr_63787_63807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (8))){
var inst_63749 = (state_63772[(7)]);
var inst_63759 = cljs.core.next.call(null,inst_63749);
var inst_63749__$1 = inst_63759;
var state_63772__$1 = (function (){var statearr_63788 = state_63772;
(statearr_63788[(7)] = inst_63749__$1);

return statearr_63788;
})();
var statearr_63789_63808 = state_63772__$1;
(statearr_63789_63808[(2)] = null);

(statearr_63789_63808[(1)] = (2));


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
});})(c__63214__auto__))
;
return ((function (switch__63124__auto__,c__63214__auto__){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_63790 = [null,null,null,null,null,null,null,null];
(statearr_63790[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_63790[(1)] = (1));

return statearr_63790;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_63772){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e63791){if((e63791 instanceof Object)){
var ex__63128__auto__ = e63791;
var statearr_63792_63809 = state_63772;
(statearr_63792_63809[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63810 = state_63772;
state_63772 = G__63810;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_63772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_63772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__))
})();
var state__63216__auto__ = (function (){var statearr_63793 = f__63215__auto__.call(null);
(statearr_63793[(6)] = c__63214__auto__);

return statearr_63793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__))
);

return c__63214__auto__;
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
var x__58868__auto__ = (((_ == null))?null:_);
var m__58869__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,_);
} else {
var m__58869__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,_);
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
var x__58868__auto__ = (((m == null))?null:m);
var m__58869__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__58869__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__58868__auto__ = (((m == null))?null:m);
var m__58869__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,m,ch);
} else {
var m__58869__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,m,ch);
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
var x__58868__auto__ = (((m == null))?null:m);
var m__58869__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,m);
} else {
var m__58869__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async63811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63811 = (function (ch,cs,meta63812){
this.ch = ch;
this.cs = cs;
this.meta63812 = meta63812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_63813,meta63812__$1){
var self__ = this;
var _63813__$1 = this;
return (new cljs.core.async.t_cljs$core$async63811(self__.ch,self__.cs,meta63812__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async63811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_63813){
var self__ = this;
var _63813__$1 = this;
return self__.meta63812;
});})(cs))
;

cljs.core.async.t_cljs$core$async63811.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63811.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async63811.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63811.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63811.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63811.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63811.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63812","meta63812",-481053754,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async63811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63811";

cljs.core.async.t_cljs$core$async63811.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async63811");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async63811 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async63811(ch__$1,cs__$1,meta63812){
return (new cljs.core.async.t_cljs$core$async63811(ch__$1,cs__$1,meta63812));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async63811(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__63214__auto___64033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___64033,cs,m,dchan,dctr,done){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___64033,cs,m,dchan,dctr,done){
return (function (state_63948){
var state_val_63949 = (state_63948[(1)]);
if((state_val_63949 === (7))){
var inst_63944 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_63950_64034 = state_63948__$1;
(statearr_63950_64034[(2)] = inst_63944);

(statearr_63950_64034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (20))){
var inst_63847 = (state_63948[(7)]);
var inst_63859 = cljs.core.first.call(null,inst_63847);
var inst_63860 = cljs.core.nth.call(null,inst_63859,(0),null);
var inst_63861 = cljs.core.nth.call(null,inst_63859,(1),null);
var state_63948__$1 = (function (){var statearr_63951 = state_63948;
(statearr_63951[(8)] = inst_63860);

return statearr_63951;
})();
if(cljs.core.truth_(inst_63861)){
var statearr_63952_64035 = state_63948__$1;
(statearr_63952_64035[(1)] = (22));

} else {
var statearr_63953_64036 = state_63948__$1;
(statearr_63953_64036[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (27))){
var inst_63816 = (state_63948[(9)]);
var inst_63891 = (state_63948[(10)]);
var inst_63896 = (state_63948[(11)]);
var inst_63889 = (state_63948[(12)]);
var inst_63896__$1 = cljs.core._nth.call(null,inst_63889,inst_63891);
var inst_63897 = cljs.core.async.put_BANG_.call(null,inst_63896__$1,inst_63816,done);
var state_63948__$1 = (function (){var statearr_63954 = state_63948;
(statearr_63954[(11)] = inst_63896__$1);

return statearr_63954;
})();
if(cljs.core.truth_(inst_63897)){
var statearr_63955_64037 = state_63948__$1;
(statearr_63955_64037[(1)] = (30));

} else {
var statearr_63956_64038 = state_63948__$1;
(statearr_63956_64038[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (1))){
var state_63948__$1 = state_63948;
var statearr_63957_64039 = state_63948__$1;
(statearr_63957_64039[(2)] = null);

(statearr_63957_64039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (24))){
var inst_63847 = (state_63948[(7)]);
var inst_63866 = (state_63948[(2)]);
var inst_63867 = cljs.core.next.call(null,inst_63847);
var inst_63825 = inst_63867;
var inst_63826 = null;
var inst_63827 = (0);
var inst_63828 = (0);
var state_63948__$1 = (function (){var statearr_63958 = state_63948;
(statearr_63958[(13)] = inst_63828);

(statearr_63958[(14)] = inst_63826);

(statearr_63958[(15)] = inst_63866);

(statearr_63958[(16)] = inst_63825);

(statearr_63958[(17)] = inst_63827);

return statearr_63958;
})();
var statearr_63959_64040 = state_63948__$1;
(statearr_63959_64040[(2)] = null);

(statearr_63959_64040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (39))){
var state_63948__$1 = state_63948;
var statearr_63963_64041 = state_63948__$1;
(statearr_63963_64041[(2)] = null);

(statearr_63963_64041[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (4))){
var inst_63816 = (state_63948[(9)]);
var inst_63816__$1 = (state_63948[(2)]);
var inst_63817 = (inst_63816__$1 == null);
var state_63948__$1 = (function (){var statearr_63964 = state_63948;
(statearr_63964[(9)] = inst_63816__$1);

return statearr_63964;
})();
if(cljs.core.truth_(inst_63817)){
var statearr_63965_64042 = state_63948__$1;
(statearr_63965_64042[(1)] = (5));

} else {
var statearr_63966_64043 = state_63948__$1;
(statearr_63966_64043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (15))){
var inst_63828 = (state_63948[(13)]);
var inst_63826 = (state_63948[(14)]);
var inst_63825 = (state_63948[(16)]);
var inst_63827 = (state_63948[(17)]);
var inst_63843 = (state_63948[(2)]);
var inst_63844 = (inst_63828 + (1));
var tmp63960 = inst_63826;
var tmp63961 = inst_63825;
var tmp63962 = inst_63827;
var inst_63825__$1 = tmp63961;
var inst_63826__$1 = tmp63960;
var inst_63827__$1 = tmp63962;
var inst_63828__$1 = inst_63844;
var state_63948__$1 = (function (){var statearr_63967 = state_63948;
(statearr_63967[(18)] = inst_63843);

(statearr_63967[(13)] = inst_63828__$1);

(statearr_63967[(14)] = inst_63826__$1);

(statearr_63967[(16)] = inst_63825__$1);

(statearr_63967[(17)] = inst_63827__$1);

return statearr_63967;
})();
var statearr_63968_64044 = state_63948__$1;
(statearr_63968_64044[(2)] = null);

(statearr_63968_64044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (21))){
var inst_63870 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_63972_64045 = state_63948__$1;
(statearr_63972_64045[(2)] = inst_63870);

(statearr_63972_64045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (31))){
var inst_63896 = (state_63948[(11)]);
var inst_63900 = done.call(null,null);
var inst_63901 = cljs.core.async.untap_STAR_.call(null,m,inst_63896);
var state_63948__$1 = (function (){var statearr_63973 = state_63948;
(statearr_63973[(19)] = inst_63900);

return statearr_63973;
})();
var statearr_63974_64046 = state_63948__$1;
(statearr_63974_64046[(2)] = inst_63901);

(statearr_63974_64046[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (32))){
var inst_63891 = (state_63948[(10)]);
var inst_63890 = (state_63948[(20)]);
var inst_63888 = (state_63948[(21)]);
var inst_63889 = (state_63948[(12)]);
var inst_63903 = (state_63948[(2)]);
var inst_63904 = (inst_63891 + (1));
var tmp63969 = inst_63890;
var tmp63970 = inst_63888;
var tmp63971 = inst_63889;
var inst_63888__$1 = tmp63970;
var inst_63889__$1 = tmp63971;
var inst_63890__$1 = tmp63969;
var inst_63891__$1 = inst_63904;
var state_63948__$1 = (function (){var statearr_63975 = state_63948;
(statearr_63975[(10)] = inst_63891__$1);

(statearr_63975[(20)] = inst_63890__$1);

(statearr_63975[(21)] = inst_63888__$1);

(statearr_63975[(22)] = inst_63903);

(statearr_63975[(12)] = inst_63889__$1);

return statearr_63975;
})();
var statearr_63976_64047 = state_63948__$1;
(statearr_63976_64047[(2)] = null);

(statearr_63976_64047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (40))){
var inst_63916 = (state_63948[(23)]);
var inst_63920 = done.call(null,null);
var inst_63921 = cljs.core.async.untap_STAR_.call(null,m,inst_63916);
var state_63948__$1 = (function (){var statearr_63977 = state_63948;
(statearr_63977[(24)] = inst_63920);

return statearr_63977;
})();
var statearr_63978_64048 = state_63948__$1;
(statearr_63978_64048[(2)] = inst_63921);

(statearr_63978_64048[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (33))){
var inst_63907 = (state_63948[(25)]);
var inst_63909 = cljs.core.chunked_seq_QMARK_.call(null,inst_63907);
var state_63948__$1 = state_63948;
if(inst_63909){
var statearr_63979_64049 = state_63948__$1;
(statearr_63979_64049[(1)] = (36));

} else {
var statearr_63980_64050 = state_63948__$1;
(statearr_63980_64050[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (13))){
var inst_63837 = (state_63948[(26)]);
var inst_63840 = cljs.core.async.close_BANG_.call(null,inst_63837);
var state_63948__$1 = state_63948;
var statearr_63981_64051 = state_63948__$1;
(statearr_63981_64051[(2)] = inst_63840);

(statearr_63981_64051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (22))){
var inst_63860 = (state_63948[(8)]);
var inst_63863 = cljs.core.async.close_BANG_.call(null,inst_63860);
var state_63948__$1 = state_63948;
var statearr_63982_64052 = state_63948__$1;
(statearr_63982_64052[(2)] = inst_63863);

(statearr_63982_64052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (36))){
var inst_63907 = (state_63948[(25)]);
var inst_63911 = cljs.core.chunk_first.call(null,inst_63907);
var inst_63912 = cljs.core.chunk_rest.call(null,inst_63907);
var inst_63913 = cljs.core.count.call(null,inst_63911);
var inst_63888 = inst_63912;
var inst_63889 = inst_63911;
var inst_63890 = inst_63913;
var inst_63891 = (0);
var state_63948__$1 = (function (){var statearr_63983 = state_63948;
(statearr_63983[(10)] = inst_63891);

(statearr_63983[(20)] = inst_63890);

(statearr_63983[(21)] = inst_63888);

(statearr_63983[(12)] = inst_63889);

return statearr_63983;
})();
var statearr_63984_64053 = state_63948__$1;
(statearr_63984_64053[(2)] = null);

(statearr_63984_64053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (41))){
var inst_63907 = (state_63948[(25)]);
var inst_63923 = (state_63948[(2)]);
var inst_63924 = cljs.core.next.call(null,inst_63907);
var inst_63888 = inst_63924;
var inst_63889 = null;
var inst_63890 = (0);
var inst_63891 = (0);
var state_63948__$1 = (function (){var statearr_63985 = state_63948;
(statearr_63985[(10)] = inst_63891);

(statearr_63985[(20)] = inst_63890);

(statearr_63985[(21)] = inst_63888);

(statearr_63985[(27)] = inst_63923);

(statearr_63985[(12)] = inst_63889);

return statearr_63985;
})();
var statearr_63986_64054 = state_63948__$1;
(statearr_63986_64054[(2)] = null);

(statearr_63986_64054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (43))){
var state_63948__$1 = state_63948;
var statearr_63987_64055 = state_63948__$1;
(statearr_63987_64055[(2)] = null);

(statearr_63987_64055[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (29))){
var inst_63932 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_63988_64056 = state_63948__$1;
(statearr_63988_64056[(2)] = inst_63932);

(statearr_63988_64056[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (44))){
var inst_63941 = (state_63948[(2)]);
var state_63948__$1 = (function (){var statearr_63989 = state_63948;
(statearr_63989[(28)] = inst_63941);

return statearr_63989;
})();
var statearr_63990_64057 = state_63948__$1;
(statearr_63990_64057[(2)] = null);

(statearr_63990_64057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (6))){
var inst_63880 = (state_63948[(29)]);
var inst_63879 = cljs.core.deref.call(null,cs);
var inst_63880__$1 = cljs.core.keys.call(null,inst_63879);
var inst_63881 = cljs.core.count.call(null,inst_63880__$1);
var inst_63882 = cljs.core.reset_BANG_.call(null,dctr,inst_63881);
var inst_63887 = cljs.core.seq.call(null,inst_63880__$1);
var inst_63888 = inst_63887;
var inst_63889 = null;
var inst_63890 = (0);
var inst_63891 = (0);
var state_63948__$1 = (function (){var statearr_63991 = state_63948;
(statearr_63991[(30)] = inst_63882);

(statearr_63991[(10)] = inst_63891);

(statearr_63991[(20)] = inst_63890);

(statearr_63991[(21)] = inst_63888);

(statearr_63991[(29)] = inst_63880__$1);

(statearr_63991[(12)] = inst_63889);

return statearr_63991;
})();
var statearr_63992_64058 = state_63948__$1;
(statearr_63992_64058[(2)] = null);

(statearr_63992_64058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (28))){
var inst_63888 = (state_63948[(21)]);
var inst_63907 = (state_63948[(25)]);
var inst_63907__$1 = cljs.core.seq.call(null,inst_63888);
var state_63948__$1 = (function (){var statearr_63993 = state_63948;
(statearr_63993[(25)] = inst_63907__$1);

return statearr_63993;
})();
if(inst_63907__$1){
var statearr_63994_64059 = state_63948__$1;
(statearr_63994_64059[(1)] = (33));

} else {
var statearr_63995_64060 = state_63948__$1;
(statearr_63995_64060[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (25))){
var inst_63891 = (state_63948[(10)]);
var inst_63890 = (state_63948[(20)]);
var inst_63893 = (inst_63891 < inst_63890);
var inst_63894 = inst_63893;
var state_63948__$1 = state_63948;
if(cljs.core.truth_(inst_63894)){
var statearr_63996_64061 = state_63948__$1;
(statearr_63996_64061[(1)] = (27));

} else {
var statearr_63997_64062 = state_63948__$1;
(statearr_63997_64062[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (34))){
var state_63948__$1 = state_63948;
var statearr_63998_64063 = state_63948__$1;
(statearr_63998_64063[(2)] = null);

(statearr_63998_64063[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (17))){
var state_63948__$1 = state_63948;
var statearr_63999_64064 = state_63948__$1;
(statearr_63999_64064[(2)] = null);

(statearr_63999_64064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (3))){
var inst_63946 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63948__$1,inst_63946);
} else {
if((state_val_63949 === (12))){
var inst_63875 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_64000_64065 = state_63948__$1;
(statearr_64000_64065[(2)] = inst_63875);

(statearr_64000_64065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (2))){
var state_63948__$1 = state_63948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63948__$1,(4),ch);
} else {
if((state_val_63949 === (23))){
var state_63948__$1 = state_63948;
var statearr_64001_64066 = state_63948__$1;
(statearr_64001_64066[(2)] = null);

(statearr_64001_64066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (35))){
var inst_63930 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_64002_64067 = state_63948__$1;
(statearr_64002_64067[(2)] = inst_63930);

(statearr_64002_64067[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (19))){
var inst_63847 = (state_63948[(7)]);
var inst_63851 = cljs.core.chunk_first.call(null,inst_63847);
var inst_63852 = cljs.core.chunk_rest.call(null,inst_63847);
var inst_63853 = cljs.core.count.call(null,inst_63851);
var inst_63825 = inst_63852;
var inst_63826 = inst_63851;
var inst_63827 = inst_63853;
var inst_63828 = (0);
var state_63948__$1 = (function (){var statearr_64003 = state_63948;
(statearr_64003[(13)] = inst_63828);

(statearr_64003[(14)] = inst_63826);

(statearr_64003[(16)] = inst_63825);

(statearr_64003[(17)] = inst_63827);

return statearr_64003;
})();
var statearr_64004_64068 = state_63948__$1;
(statearr_64004_64068[(2)] = null);

(statearr_64004_64068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (11))){
var inst_63847 = (state_63948[(7)]);
var inst_63825 = (state_63948[(16)]);
var inst_63847__$1 = cljs.core.seq.call(null,inst_63825);
var state_63948__$1 = (function (){var statearr_64005 = state_63948;
(statearr_64005[(7)] = inst_63847__$1);

return statearr_64005;
})();
if(inst_63847__$1){
var statearr_64006_64069 = state_63948__$1;
(statearr_64006_64069[(1)] = (16));

} else {
var statearr_64007_64070 = state_63948__$1;
(statearr_64007_64070[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (9))){
var inst_63877 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_64008_64071 = state_63948__$1;
(statearr_64008_64071[(2)] = inst_63877);

(statearr_64008_64071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (5))){
var inst_63823 = cljs.core.deref.call(null,cs);
var inst_63824 = cljs.core.seq.call(null,inst_63823);
var inst_63825 = inst_63824;
var inst_63826 = null;
var inst_63827 = (0);
var inst_63828 = (0);
var state_63948__$1 = (function (){var statearr_64009 = state_63948;
(statearr_64009[(13)] = inst_63828);

(statearr_64009[(14)] = inst_63826);

(statearr_64009[(16)] = inst_63825);

(statearr_64009[(17)] = inst_63827);

return statearr_64009;
})();
var statearr_64010_64072 = state_63948__$1;
(statearr_64010_64072[(2)] = null);

(statearr_64010_64072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (14))){
var state_63948__$1 = state_63948;
var statearr_64011_64073 = state_63948__$1;
(statearr_64011_64073[(2)] = null);

(statearr_64011_64073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (45))){
var inst_63938 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_64012_64074 = state_63948__$1;
(statearr_64012_64074[(2)] = inst_63938);

(statearr_64012_64074[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (26))){
var inst_63880 = (state_63948[(29)]);
var inst_63934 = (state_63948[(2)]);
var inst_63935 = cljs.core.seq.call(null,inst_63880);
var state_63948__$1 = (function (){var statearr_64013 = state_63948;
(statearr_64013[(31)] = inst_63934);

return statearr_64013;
})();
if(inst_63935){
var statearr_64014_64075 = state_63948__$1;
(statearr_64014_64075[(1)] = (42));

} else {
var statearr_64015_64076 = state_63948__$1;
(statearr_64015_64076[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (16))){
var inst_63847 = (state_63948[(7)]);
var inst_63849 = cljs.core.chunked_seq_QMARK_.call(null,inst_63847);
var state_63948__$1 = state_63948;
if(inst_63849){
var statearr_64016_64077 = state_63948__$1;
(statearr_64016_64077[(1)] = (19));

} else {
var statearr_64017_64078 = state_63948__$1;
(statearr_64017_64078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (38))){
var inst_63927 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_64018_64079 = state_63948__$1;
(statearr_64018_64079[(2)] = inst_63927);

(statearr_64018_64079[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (30))){
var state_63948__$1 = state_63948;
var statearr_64019_64080 = state_63948__$1;
(statearr_64019_64080[(2)] = null);

(statearr_64019_64080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (10))){
var inst_63828 = (state_63948[(13)]);
var inst_63826 = (state_63948[(14)]);
var inst_63836 = cljs.core._nth.call(null,inst_63826,inst_63828);
var inst_63837 = cljs.core.nth.call(null,inst_63836,(0),null);
var inst_63838 = cljs.core.nth.call(null,inst_63836,(1),null);
var state_63948__$1 = (function (){var statearr_64020 = state_63948;
(statearr_64020[(26)] = inst_63837);

return statearr_64020;
})();
if(cljs.core.truth_(inst_63838)){
var statearr_64021_64081 = state_63948__$1;
(statearr_64021_64081[(1)] = (13));

} else {
var statearr_64022_64082 = state_63948__$1;
(statearr_64022_64082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (18))){
var inst_63873 = (state_63948[(2)]);
var state_63948__$1 = state_63948;
var statearr_64023_64083 = state_63948__$1;
(statearr_64023_64083[(2)] = inst_63873);

(statearr_64023_64083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (42))){
var state_63948__$1 = state_63948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63948__$1,(45),dchan);
} else {
if((state_val_63949 === (37))){
var inst_63816 = (state_63948[(9)]);
var inst_63907 = (state_63948[(25)]);
var inst_63916 = (state_63948[(23)]);
var inst_63916__$1 = cljs.core.first.call(null,inst_63907);
var inst_63917 = cljs.core.async.put_BANG_.call(null,inst_63916__$1,inst_63816,done);
var state_63948__$1 = (function (){var statearr_64024 = state_63948;
(statearr_64024[(23)] = inst_63916__$1);

return statearr_64024;
})();
if(cljs.core.truth_(inst_63917)){
var statearr_64025_64084 = state_63948__$1;
(statearr_64025_64084[(1)] = (39));

} else {
var statearr_64026_64085 = state_63948__$1;
(statearr_64026_64085[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63949 === (8))){
var inst_63828 = (state_63948[(13)]);
var inst_63827 = (state_63948[(17)]);
var inst_63830 = (inst_63828 < inst_63827);
var inst_63831 = inst_63830;
var state_63948__$1 = state_63948;
if(cljs.core.truth_(inst_63831)){
var statearr_64027_64086 = state_63948__$1;
(statearr_64027_64086[(1)] = (10));

} else {
var statearr_64028_64087 = state_63948__$1;
(statearr_64028_64087[(1)] = (11));

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
});})(c__63214__auto___64033,cs,m,dchan,dctr,done))
;
return ((function (switch__63124__auto__,c__63214__auto___64033,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__63125__auto__ = null;
var cljs$core$async$mult_$_state_machine__63125__auto____0 = (function (){
var statearr_64029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64029[(0)] = cljs$core$async$mult_$_state_machine__63125__auto__);

(statearr_64029[(1)] = (1));

return statearr_64029;
});
var cljs$core$async$mult_$_state_machine__63125__auto____1 = (function (state_63948){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_63948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64030){if((e64030 instanceof Object)){
var ex__63128__auto__ = e64030;
var statearr_64031_64088 = state_63948;
(statearr_64031_64088[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64089 = state_63948;
state_63948 = G__64089;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__63125__auto__ = function(state_63948){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__63125__auto____1.call(this,state_63948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__63125__auto____0;
cljs$core$async$mult_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__63125__auto____1;
return cljs$core$async$mult_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___64033,cs,m,dchan,dctr,done))
})();
var state__63216__auto__ = (function (){var statearr_64032 = f__63215__auto__.call(null);
(statearr_64032[(6)] = c__63214__auto___64033);

return statearr_64032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___64033,cs,m,dchan,dctr,done))
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
var G__64091 = arguments.length;
switch (G__64091) {
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
var x__58868__auto__ = (((m == null))?null:m);
var m__58869__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,m,ch);
} else {
var m__58869__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,m,ch);
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
var x__58868__auto__ = (((m == null))?null:m);
var m__58869__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,m,ch);
} else {
var m__58869__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,m,ch);
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
var x__58868__auto__ = (((m == null))?null:m);
var m__58869__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,m);
} else {
var m__58869__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,m);
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
var x__58868__auto__ = (((m == null))?null:m);
var m__58869__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,m,state_map);
} else {
var m__58869__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,m,state_map);
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
var x__58868__auto__ = (((m == null))?null:m);
var m__58869__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,m,mode);
} else {
var m__58869__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__59419__auto__ = [];
var len__59412__auto___64103 = arguments.length;
var i__59413__auto___64104 = (0);
while(true){
if((i__59413__auto___64104 < len__59412__auto___64103)){
args__59419__auto__.push((arguments[i__59413__auto___64104]));

var G__64105 = (i__59413__auto___64104 + (1));
i__59413__auto___64104 = G__64105;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((3) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__59420__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__64097){
var map__64098 = p__64097;
var map__64098__$1 = ((((!((map__64098 == null)))?((((map__64098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64098):map__64098);
var opts = map__64098__$1;
var statearr_64100_64106 = state;
(statearr_64100_64106[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__64098,map__64098__$1,opts){
return (function (val){
var statearr_64101_64107 = state;
(statearr_64101_64107[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__64098,map__64098__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_64102_64108 = state;
(statearr_64102_64108[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq64093){
var G__64094 = cljs.core.first.call(null,seq64093);
var seq64093__$1 = cljs.core.next.call(null,seq64093);
var G__64095 = cljs.core.first.call(null,seq64093__$1);
var seq64093__$2 = cljs.core.next.call(null,seq64093__$1);
var G__64096 = cljs.core.first.call(null,seq64093__$2);
var seq64093__$3 = cljs.core.next.call(null,seq64093__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__64094,G__64095,G__64096,seq64093__$3);
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
if(typeof cljs.core.async.t_cljs$core$async64109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64109 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta64110){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta64110 = meta64110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_64111,meta64110__$1){
var self__ = this;
var _64111__$1 = this;
return (new cljs.core.async.t_cljs$core$async64109(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta64110__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_64111){
var self__ = this;
var _64111__$1 = this;
return self__.meta64110;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async64109.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async64109.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta64110","meta64110",515054848,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async64109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64109";

cljs.core.async.t_cljs$core$async64109.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async64109");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async64109 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async64109(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta64110){
return (new cljs.core.async.t_cljs$core$async64109(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta64110));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async64109(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__63214__auto___64273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___64273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___64273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_64213){
var state_val_64214 = (state_64213[(1)]);
if((state_val_64214 === (7))){
var inst_64128 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
var statearr_64215_64274 = state_64213__$1;
(statearr_64215_64274[(2)] = inst_64128);

(statearr_64215_64274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (20))){
var inst_64140 = (state_64213[(7)]);
var state_64213__$1 = state_64213;
var statearr_64216_64275 = state_64213__$1;
(statearr_64216_64275[(2)] = inst_64140);

(statearr_64216_64275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (27))){
var state_64213__$1 = state_64213;
var statearr_64217_64276 = state_64213__$1;
(statearr_64217_64276[(2)] = null);

(statearr_64217_64276[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (1))){
var inst_64115 = (state_64213[(8)]);
var inst_64115__$1 = calc_state.call(null);
var inst_64117 = (inst_64115__$1 == null);
var inst_64118 = cljs.core.not.call(null,inst_64117);
var state_64213__$1 = (function (){var statearr_64218 = state_64213;
(statearr_64218[(8)] = inst_64115__$1);

return statearr_64218;
})();
if(inst_64118){
var statearr_64219_64277 = state_64213__$1;
(statearr_64219_64277[(1)] = (2));

} else {
var statearr_64220_64278 = state_64213__$1;
(statearr_64220_64278[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (24))){
var inst_64187 = (state_64213[(9)]);
var inst_64173 = (state_64213[(10)]);
var inst_64164 = (state_64213[(11)]);
var inst_64187__$1 = inst_64164.call(null,inst_64173);
var state_64213__$1 = (function (){var statearr_64221 = state_64213;
(statearr_64221[(9)] = inst_64187__$1);

return statearr_64221;
})();
if(cljs.core.truth_(inst_64187__$1)){
var statearr_64222_64279 = state_64213__$1;
(statearr_64222_64279[(1)] = (29));

} else {
var statearr_64223_64280 = state_64213__$1;
(statearr_64223_64280[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (4))){
var inst_64131 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
if(cljs.core.truth_(inst_64131)){
var statearr_64224_64281 = state_64213__$1;
(statearr_64224_64281[(1)] = (8));

} else {
var statearr_64225_64282 = state_64213__$1;
(statearr_64225_64282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (15))){
var inst_64158 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
if(cljs.core.truth_(inst_64158)){
var statearr_64226_64283 = state_64213__$1;
(statearr_64226_64283[(1)] = (19));

} else {
var statearr_64227_64284 = state_64213__$1;
(statearr_64227_64284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (21))){
var inst_64163 = (state_64213[(12)]);
var inst_64163__$1 = (state_64213[(2)]);
var inst_64164 = cljs.core.get.call(null,inst_64163__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64165 = cljs.core.get.call(null,inst_64163__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64166 = cljs.core.get.call(null,inst_64163__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_64213__$1 = (function (){var statearr_64228 = state_64213;
(statearr_64228[(13)] = inst_64165);

(statearr_64228[(12)] = inst_64163__$1);

(statearr_64228[(11)] = inst_64164);

return statearr_64228;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_64213__$1,(22),inst_64166);
} else {
if((state_val_64214 === (31))){
var inst_64195 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
if(cljs.core.truth_(inst_64195)){
var statearr_64229_64285 = state_64213__$1;
(statearr_64229_64285[(1)] = (32));

} else {
var statearr_64230_64286 = state_64213__$1;
(statearr_64230_64286[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (32))){
var inst_64172 = (state_64213[(14)]);
var state_64213__$1 = state_64213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64213__$1,(35),out,inst_64172);
} else {
if((state_val_64214 === (33))){
var inst_64163 = (state_64213[(12)]);
var inst_64140 = inst_64163;
var state_64213__$1 = (function (){var statearr_64231 = state_64213;
(statearr_64231[(7)] = inst_64140);

return statearr_64231;
})();
var statearr_64232_64287 = state_64213__$1;
(statearr_64232_64287[(2)] = null);

(statearr_64232_64287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (13))){
var inst_64140 = (state_64213[(7)]);
var inst_64147 = inst_64140.cljs$lang$protocol_mask$partition0$;
var inst_64148 = (inst_64147 & (64));
var inst_64149 = inst_64140.cljs$core$ISeq$;
var inst_64150 = (cljs.core.PROTOCOL_SENTINEL === inst_64149);
var inst_64151 = (inst_64148) || (inst_64150);
var state_64213__$1 = state_64213;
if(cljs.core.truth_(inst_64151)){
var statearr_64233_64288 = state_64213__$1;
(statearr_64233_64288[(1)] = (16));

} else {
var statearr_64234_64289 = state_64213__$1;
(statearr_64234_64289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (22))){
var inst_64173 = (state_64213[(10)]);
var inst_64172 = (state_64213[(14)]);
var inst_64171 = (state_64213[(2)]);
var inst_64172__$1 = cljs.core.nth.call(null,inst_64171,(0),null);
var inst_64173__$1 = cljs.core.nth.call(null,inst_64171,(1),null);
var inst_64174 = (inst_64172__$1 == null);
var inst_64175 = cljs.core._EQ_.call(null,inst_64173__$1,change);
var inst_64176 = (inst_64174) || (inst_64175);
var state_64213__$1 = (function (){var statearr_64235 = state_64213;
(statearr_64235[(10)] = inst_64173__$1);

(statearr_64235[(14)] = inst_64172__$1);

return statearr_64235;
})();
if(cljs.core.truth_(inst_64176)){
var statearr_64236_64290 = state_64213__$1;
(statearr_64236_64290[(1)] = (23));

} else {
var statearr_64237_64291 = state_64213__$1;
(statearr_64237_64291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (36))){
var inst_64163 = (state_64213[(12)]);
var inst_64140 = inst_64163;
var state_64213__$1 = (function (){var statearr_64238 = state_64213;
(statearr_64238[(7)] = inst_64140);

return statearr_64238;
})();
var statearr_64239_64292 = state_64213__$1;
(statearr_64239_64292[(2)] = null);

(statearr_64239_64292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (29))){
var inst_64187 = (state_64213[(9)]);
var state_64213__$1 = state_64213;
var statearr_64240_64293 = state_64213__$1;
(statearr_64240_64293[(2)] = inst_64187);

(statearr_64240_64293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (6))){
var state_64213__$1 = state_64213;
var statearr_64241_64294 = state_64213__$1;
(statearr_64241_64294[(2)] = false);

(statearr_64241_64294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (28))){
var inst_64183 = (state_64213[(2)]);
var inst_64184 = calc_state.call(null);
var inst_64140 = inst_64184;
var state_64213__$1 = (function (){var statearr_64242 = state_64213;
(statearr_64242[(7)] = inst_64140);

(statearr_64242[(15)] = inst_64183);

return statearr_64242;
})();
var statearr_64243_64295 = state_64213__$1;
(statearr_64243_64295[(2)] = null);

(statearr_64243_64295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (25))){
var inst_64209 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
var statearr_64244_64296 = state_64213__$1;
(statearr_64244_64296[(2)] = inst_64209);

(statearr_64244_64296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (34))){
var inst_64207 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
var statearr_64245_64297 = state_64213__$1;
(statearr_64245_64297[(2)] = inst_64207);

(statearr_64245_64297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (17))){
var state_64213__$1 = state_64213;
var statearr_64246_64298 = state_64213__$1;
(statearr_64246_64298[(2)] = false);

(statearr_64246_64298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (3))){
var state_64213__$1 = state_64213;
var statearr_64247_64299 = state_64213__$1;
(statearr_64247_64299[(2)] = false);

(statearr_64247_64299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (12))){
var inst_64211 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64213__$1,inst_64211);
} else {
if((state_val_64214 === (2))){
var inst_64115 = (state_64213[(8)]);
var inst_64120 = inst_64115.cljs$lang$protocol_mask$partition0$;
var inst_64121 = (inst_64120 & (64));
var inst_64122 = inst_64115.cljs$core$ISeq$;
var inst_64123 = (cljs.core.PROTOCOL_SENTINEL === inst_64122);
var inst_64124 = (inst_64121) || (inst_64123);
var state_64213__$1 = state_64213;
if(cljs.core.truth_(inst_64124)){
var statearr_64248_64300 = state_64213__$1;
(statearr_64248_64300[(1)] = (5));

} else {
var statearr_64249_64301 = state_64213__$1;
(statearr_64249_64301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (23))){
var inst_64172 = (state_64213[(14)]);
var inst_64178 = (inst_64172 == null);
var state_64213__$1 = state_64213;
if(cljs.core.truth_(inst_64178)){
var statearr_64250_64302 = state_64213__$1;
(statearr_64250_64302[(1)] = (26));

} else {
var statearr_64251_64303 = state_64213__$1;
(statearr_64251_64303[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (35))){
var inst_64198 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
if(cljs.core.truth_(inst_64198)){
var statearr_64252_64304 = state_64213__$1;
(statearr_64252_64304[(1)] = (36));

} else {
var statearr_64253_64305 = state_64213__$1;
(statearr_64253_64305[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (19))){
var inst_64140 = (state_64213[(7)]);
var inst_64160 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64140);
var state_64213__$1 = state_64213;
var statearr_64254_64306 = state_64213__$1;
(statearr_64254_64306[(2)] = inst_64160);

(statearr_64254_64306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (11))){
var inst_64140 = (state_64213[(7)]);
var inst_64144 = (inst_64140 == null);
var inst_64145 = cljs.core.not.call(null,inst_64144);
var state_64213__$1 = state_64213;
if(inst_64145){
var statearr_64255_64307 = state_64213__$1;
(statearr_64255_64307[(1)] = (13));

} else {
var statearr_64256_64308 = state_64213__$1;
(statearr_64256_64308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (9))){
var inst_64115 = (state_64213[(8)]);
var state_64213__$1 = state_64213;
var statearr_64257_64309 = state_64213__$1;
(statearr_64257_64309[(2)] = inst_64115);

(statearr_64257_64309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (5))){
var state_64213__$1 = state_64213;
var statearr_64258_64310 = state_64213__$1;
(statearr_64258_64310[(2)] = true);

(statearr_64258_64310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (14))){
var state_64213__$1 = state_64213;
var statearr_64259_64311 = state_64213__$1;
(statearr_64259_64311[(2)] = false);

(statearr_64259_64311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (26))){
var inst_64173 = (state_64213[(10)]);
var inst_64180 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_64173);
var state_64213__$1 = state_64213;
var statearr_64260_64312 = state_64213__$1;
(statearr_64260_64312[(2)] = inst_64180);

(statearr_64260_64312[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (16))){
var state_64213__$1 = state_64213;
var statearr_64261_64313 = state_64213__$1;
(statearr_64261_64313[(2)] = true);

(statearr_64261_64313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (38))){
var inst_64203 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
var statearr_64262_64314 = state_64213__$1;
(statearr_64262_64314[(2)] = inst_64203);

(statearr_64262_64314[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (30))){
var inst_64165 = (state_64213[(13)]);
var inst_64173 = (state_64213[(10)]);
var inst_64164 = (state_64213[(11)]);
var inst_64190 = cljs.core.empty_QMARK_.call(null,inst_64164);
var inst_64191 = inst_64165.call(null,inst_64173);
var inst_64192 = cljs.core.not.call(null,inst_64191);
var inst_64193 = (inst_64190) && (inst_64192);
var state_64213__$1 = state_64213;
var statearr_64263_64315 = state_64213__$1;
(statearr_64263_64315[(2)] = inst_64193);

(statearr_64263_64315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (10))){
var inst_64115 = (state_64213[(8)]);
var inst_64136 = (state_64213[(2)]);
var inst_64137 = cljs.core.get.call(null,inst_64136,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64138 = cljs.core.get.call(null,inst_64136,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64139 = cljs.core.get.call(null,inst_64136,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_64140 = inst_64115;
var state_64213__$1 = (function (){var statearr_64264 = state_64213;
(statearr_64264[(7)] = inst_64140);

(statearr_64264[(16)] = inst_64137);

(statearr_64264[(17)] = inst_64139);

(statearr_64264[(18)] = inst_64138);

return statearr_64264;
})();
var statearr_64265_64316 = state_64213__$1;
(statearr_64265_64316[(2)] = null);

(statearr_64265_64316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (18))){
var inst_64155 = (state_64213[(2)]);
var state_64213__$1 = state_64213;
var statearr_64266_64317 = state_64213__$1;
(statearr_64266_64317[(2)] = inst_64155);

(statearr_64266_64317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (37))){
var state_64213__$1 = state_64213;
var statearr_64267_64318 = state_64213__$1;
(statearr_64267_64318[(2)] = null);

(statearr_64267_64318[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (8))){
var inst_64115 = (state_64213[(8)]);
var inst_64133 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64115);
var state_64213__$1 = state_64213;
var statearr_64268_64319 = state_64213__$1;
(statearr_64268_64319[(2)] = inst_64133);

(statearr_64268_64319[(1)] = (10));


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
});})(c__63214__auto___64273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__63124__auto__,c__63214__auto___64273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__63125__auto__ = null;
var cljs$core$async$mix_$_state_machine__63125__auto____0 = (function (){
var statearr_64269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64269[(0)] = cljs$core$async$mix_$_state_machine__63125__auto__);

(statearr_64269[(1)] = (1));

return statearr_64269;
});
var cljs$core$async$mix_$_state_machine__63125__auto____1 = (function (state_64213){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_64213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64270){if((e64270 instanceof Object)){
var ex__63128__auto__ = e64270;
var statearr_64271_64320 = state_64213;
(statearr_64271_64320[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64321 = state_64213;
state_64213 = G__64321;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__63125__auto__ = function(state_64213){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__63125__auto____1.call(this,state_64213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__63125__auto____0;
cljs$core$async$mix_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__63125__auto____1;
return cljs$core$async$mix_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___64273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__63216__auto__ = (function (){var statearr_64272 = f__63215__auto__.call(null);
(statearr_64272[(6)] = c__63214__auto___64273);

return statearr_64272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___64273,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__58868__auto__ = (((p == null))?null:p);
var m__58869__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__58869__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__58868__auto__ = (((p == null))?null:p);
var m__58869__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,p,v,ch);
} else {
var m__58869__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__64323 = arguments.length;
switch (G__64323) {
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
var x__58868__auto__ = (((p == null))?null:p);
var m__58869__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,p);
} else {
var m__58869__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,p);
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
var x__58868__auto__ = (((p == null))?null:p);
var m__58869__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,p,v);
} else {
var m__58869__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,p,v);
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
var G__64327 = arguments.length;
switch (G__64327) {
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
var or__58135__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__58135__auto__,mults){
return (function (p1__64325_SHARP_){
if(cljs.core.truth_(p1__64325_SHARP_.call(null,topic))){
return p1__64325_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__64325_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__58135__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async64328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64328 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta64329){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta64329 = meta64329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_64330,meta64329__$1){
var self__ = this;
var _64330__$1 = this;
return (new cljs.core.async.t_cljs$core$async64328(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta64329__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_64330){
var self__ = this;
var _64330__$1 = this;
return self__.meta64329;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64328.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta64329","meta64329",-1414813387,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64328";

cljs.core.async.t_cljs$core$async64328.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async64328");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async64328 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async64328(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64329){
return (new cljs.core.async.t_cljs$core$async64328(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64329));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async64328(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__63214__auto___64448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___64448,mults,ensure_mult,p){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___64448,mults,ensure_mult,p){
return (function (state_64402){
var state_val_64403 = (state_64402[(1)]);
if((state_val_64403 === (7))){
var inst_64398 = (state_64402[(2)]);
var state_64402__$1 = state_64402;
var statearr_64404_64449 = state_64402__$1;
(statearr_64404_64449[(2)] = inst_64398);

(statearr_64404_64449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (20))){
var state_64402__$1 = state_64402;
var statearr_64405_64450 = state_64402__$1;
(statearr_64405_64450[(2)] = null);

(statearr_64405_64450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (1))){
var state_64402__$1 = state_64402;
var statearr_64406_64451 = state_64402__$1;
(statearr_64406_64451[(2)] = null);

(statearr_64406_64451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (24))){
var inst_64381 = (state_64402[(7)]);
var inst_64390 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_64381);
var state_64402__$1 = state_64402;
var statearr_64407_64452 = state_64402__$1;
(statearr_64407_64452[(2)] = inst_64390);

(statearr_64407_64452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (4))){
var inst_64333 = (state_64402[(8)]);
var inst_64333__$1 = (state_64402[(2)]);
var inst_64334 = (inst_64333__$1 == null);
var state_64402__$1 = (function (){var statearr_64408 = state_64402;
(statearr_64408[(8)] = inst_64333__$1);

return statearr_64408;
})();
if(cljs.core.truth_(inst_64334)){
var statearr_64409_64453 = state_64402__$1;
(statearr_64409_64453[(1)] = (5));

} else {
var statearr_64410_64454 = state_64402__$1;
(statearr_64410_64454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (15))){
var inst_64375 = (state_64402[(2)]);
var state_64402__$1 = state_64402;
var statearr_64411_64455 = state_64402__$1;
(statearr_64411_64455[(2)] = inst_64375);

(statearr_64411_64455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (21))){
var inst_64395 = (state_64402[(2)]);
var state_64402__$1 = (function (){var statearr_64412 = state_64402;
(statearr_64412[(9)] = inst_64395);

return statearr_64412;
})();
var statearr_64413_64456 = state_64402__$1;
(statearr_64413_64456[(2)] = null);

(statearr_64413_64456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (13))){
var inst_64357 = (state_64402[(10)]);
var inst_64359 = cljs.core.chunked_seq_QMARK_.call(null,inst_64357);
var state_64402__$1 = state_64402;
if(inst_64359){
var statearr_64414_64457 = state_64402__$1;
(statearr_64414_64457[(1)] = (16));

} else {
var statearr_64415_64458 = state_64402__$1;
(statearr_64415_64458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (22))){
var inst_64387 = (state_64402[(2)]);
var state_64402__$1 = state_64402;
if(cljs.core.truth_(inst_64387)){
var statearr_64416_64459 = state_64402__$1;
(statearr_64416_64459[(1)] = (23));

} else {
var statearr_64417_64460 = state_64402__$1;
(statearr_64417_64460[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (6))){
var inst_64383 = (state_64402[(11)]);
var inst_64333 = (state_64402[(8)]);
var inst_64381 = (state_64402[(7)]);
var inst_64381__$1 = topic_fn.call(null,inst_64333);
var inst_64382 = cljs.core.deref.call(null,mults);
var inst_64383__$1 = cljs.core.get.call(null,inst_64382,inst_64381__$1);
var state_64402__$1 = (function (){var statearr_64418 = state_64402;
(statearr_64418[(11)] = inst_64383__$1);

(statearr_64418[(7)] = inst_64381__$1);

return statearr_64418;
})();
if(cljs.core.truth_(inst_64383__$1)){
var statearr_64419_64461 = state_64402__$1;
(statearr_64419_64461[(1)] = (19));

} else {
var statearr_64420_64462 = state_64402__$1;
(statearr_64420_64462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (25))){
var inst_64392 = (state_64402[(2)]);
var state_64402__$1 = state_64402;
var statearr_64421_64463 = state_64402__$1;
(statearr_64421_64463[(2)] = inst_64392);

(statearr_64421_64463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (17))){
var inst_64357 = (state_64402[(10)]);
var inst_64366 = cljs.core.first.call(null,inst_64357);
var inst_64367 = cljs.core.async.muxch_STAR_.call(null,inst_64366);
var inst_64368 = cljs.core.async.close_BANG_.call(null,inst_64367);
var inst_64369 = cljs.core.next.call(null,inst_64357);
var inst_64343 = inst_64369;
var inst_64344 = null;
var inst_64345 = (0);
var inst_64346 = (0);
var state_64402__$1 = (function (){var statearr_64422 = state_64402;
(statearr_64422[(12)] = inst_64344);

(statearr_64422[(13)] = inst_64346);

(statearr_64422[(14)] = inst_64368);

(statearr_64422[(15)] = inst_64345);

(statearr_64422[(16)] = inst_64343);

return statearr_64422;
})();
var statearr_64423_64464 = state_64402__$1;
(statearr_64423_64464[(2)] = null);

(statearr_64423_64464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (3))){
var inst_64400 = (state_64402[(2)]);
var state_64402__$1 = state_64402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64402__$1,inst_64400);
} else {
if((state_val_64403 === (12))){
var inst_64377 = (state_64402[(2)]);
var state_64402__$1 = state_64402;
var statearr_64424_64465 = state_64402__$1;
(statearr_64424_64465[(2)] = inst_64377);

(statearr_64424_64465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (2))){
var state_64402__$1 = state_64402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64402__$1,(4),ch);
} else {
if((state_val_64403 === (23))){
var state_64402__$1 = state_64402;
var statearr_64425_64466 = state_64402__$1;
(statearr_64425_64466[(2)] = null);

(statearr_64425_64466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (19))){
var inst_64383 = (state_64402[(11)]);
var inst_64333 = (state_64402[(8)]);
var inst_64385 = cljs.core.async.muxch_STAR_.call(null,inst_64383);
var state_64402__$1 = state_64402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64402__$1,(22),inst_64385,inst_64333);
} else {
if((state_val_64403 === (11))){
var inst_64357 = (state_64402[(10)]);
var inst_64343 = (state_64402[(16)]);
var inst_64357__$1 = cljs.core.seq.call(null,inst_64343);
var state_64402__$1 = (function (){var statearr_64426 = state_64402;
(statearr_64426[(10)] = inst_64357__$1);

return statearr_64426;
})();
if(inst_64357__$1){
var statearr_64427_64467 = state_64402__$1;
(statearr_64427_64467[(1)] = (13));

} else {
var statearr_64428_64468 = state_64402__$1;
(statearr_64428_64468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (9))){
var inst_64379 = (state_64402[(2)]);
var state_64402__$1 = state_64402;
var statearr_64429_64469 = state_64402__$1;
(statearr_64429_64469[(2)] = inst_64379);

(statearr_64429_64469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (5))){
var inst_64340 = cljs.core.deref.call(null,mults);
var inst_64341 = cljs.core.vals.call(null,inst_64340);
var inst_64342 = cljs.core.seq.call(null,inst_64341);
var inst_64343 = inst_64342;
var inst_64344 = null;
var inst_64345 = (0);
var inst_64346 = (0);
var state_64402__$1 = (function (){var statearr_64430 = state_64402;
(statearr_64430[(12)] = inst_64344);

(statearr_64430[(13)] = inst_64346);

(statearr_64430[(15)] = inst_64345);

(statearr_64430[(16)] = inst_64343);

return statearr_64430;
})();
var statearr_64431_64470 = state_64402__$1;
(statearr_64431_64470[(2)] = null);

(statearr_64431_64470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (14))){
var state_64402__$1 = state_64402;
var statearr_64435_64471 = state_64402__$1;
(statearr_64435_64471[(2)] = null);

(statearr_64435_64471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (16))){
var inst_64357 = (state_64402[(10)]);
var inst_64361 = cljs.core.chunk_first.call(null,inst_64357);
var inst_64362 = cljs.core.chunk_rest.call(null,inst_64357);
var inst_64363 = cljs.core.count.call(null,inst_64361);
var inst_64343 = inst_64362;
var inst_64344 = inst_64361;
var inst_64345 = inst_64363;
var inst_64346 = (0);
var state_64402__$1 = (function (){var statearr_64436 = state_64402;
(statearr_64436[(12)] = inst_64344);

(statearr_64436[(13)] = inst_64346);

(statearr_64436[(15)] = inst_64345);

(statearr_64436[(16)] = inst_64343);

return statearr_64436;
})();
var statearr_64437_64472 = state_64402__$1;
(statearr_64437_64472[(2)] = null);

(statearr_64437_64472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (10))){
var inst_64344 = (state_64402[(12)]);
var inst_64346 = (state_64402[(13)]);
var inst_64345 = (state_64402[(15)]);
var inst_64343 = (state_64402[(16)]);
var inst_64351 = cljs.core._nth.call(null,inst_64344,inst_64346);
var inst_64352 = cljs.core.async.muxch_STAR_.call(null,inst_64351);
var inst_64353 = cljs.core.async.close_BANG_.call(null,inst_64352);
var inst_64354 = (inst_64346 + (1));
var tmp64432 = inst_64344;
var tmp64433 = inst_64345;
var tmp64434 = inst_64343;
var inst_64343__$1 = tmp64434;
var inst_64344__$1 = tmp64432;
var inst_64345__$1 = tmp64433;
var inst_64346__$1 = inst_64354;
var state_64402__$1 = (function (){var statearr_64438 = state_64402;
(statearr_64438[(12)] = inst_64344__$1);

(statearr_64438[(17)] = inst_64353);

(statearr_64438[(13)] = inst_64346__$1);

(statearr_64438[(15)] = inst_64345__$1);

(statearr_64438[(16)] = inst_64343__$1);

return statearr_64438;
})();
var statearr_64439_64473 = state_64402__$1;
(statearr_64439_64473[(2)] = null);

(statearr_64439_64473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (18))){
var inst_64372 = (state_64402[(2)]);
var state_64402__$1 = state_64402;
var statearr_64440_64474 = state_64402__$1;
(statearr_64440_64474[(2)] = inst_64372);

(statearr_64440_64474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64403 === (8))){
var inst_64346 = (state_64402[(13)]);
var inst_64345 = (state_64402[(15)]);
var inst_64348 = (inst_64346 < inst_64345);
var inst_64349 = inst_64348;
var state_64402__$1 = state_64402;
if(cljs.core.truth_(inst_64349)){
var statearr_64441_64475 = state_64402__$1;
(statearr_64441_64475[(1)] = (10));

} else {
var statearr_64442_64476 = state_64402__$1;
(statearr_64442_64476[(1)] = (11));

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
});})(c__63214__auto___64448,mults,ensure_mult,p))
;
return ((function (switch__63124__auto__,c__63214__auto___64448,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_64443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64443[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_64443[(1)] = (1));

return statearr_64443;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_64402){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_64402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64444){if((e64444 instanceof Object)){
var ex__63128__auto__ = e64444;
var statearr_64445_64477 = state_64402;
(statearr_64445_64477[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64478 = state_64402;
state_64402 = G__64478;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_64402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_64402);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___64448,mults,ensure_mult,p))
})();
var state__63216__auto__ = (function (){var statearr_64446 = f__63215__auto__.call(null);
(statearr_64446[(6)] = c__63214__auto___64448);

return statearr_64446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___64448,mults,ensure_mult,p))
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
var G__64480 = arguments.length;
switch (G__64480) {
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
var G__64483 = arguments.length;
switch (G__64483) {
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
var G__64486 = arguments.length;
switch (G__64486) {
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
var c__63214__auto___64553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___64553,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___64553,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_64525){
var state_val_64526 = (state_64525[(1)]);
if((state_val_64526 === (7))){
var state_64525__$1 = state_64525;
var statearr_64527_64554 = state_64525__$1;
(statearr_64527_64554[(2)] = null);

(statearr_64527_64554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (1))){
var state_64525__$1 = state_64525;
var statearr_64528_64555 = state_64525__$1;
(statearr_64528_64555[(2)] = null);

(statearr_64528_64555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (4))){
var inst_64489 = (state_64525[(7)]);
var inst_64491 = (inst_64489 < cnt);
var state_64525__$1 = state_64525;
if(cljs.core.truth_(inst_64491)){
var statearr_64529_64556 = state_64525__$1;
(statearr_64529_64556[(1)] = (6));

} else {
var statearr_64530_64557 = state_64525__$1;
(statearr_64530_64557[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (15))){
var inst_64521 = (state_64525[(2)]);
var state_64525__$1 = state_64525;
var statearr_64531_64558 = state_64525__$1;
(statearr_64531_64558[(2)] = inst_64521);

(statearr_64531_64558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (13))){
var inst_64514 = cljs.core.async.close_BANG_.call(null,out);
var state_64525__$1 = state_64525;
var statearr_64532_64559 = state_64525__$1;
(statearr_64532_64559[(2)] = inst_64514);

(statearr_64532_64559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (6))){
var state_64525__$1 = state_64525;
var statearr_64533_64560 = state_64525__$1;
(statearr_64533_64560[(2)] = null);

(statearr_64533_64560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (3))){
var inst_64523 = (state_64525[(2)]);
var state_64525__$1 = state_64525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64525__$1,inst_64523);
} else {
if((state_val_64526 === (12))){
var inst_64511 = (state_64525[(8)]);
var inst_64511__$1 = (state_64525[(2)]);
var inst_64512 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_64511__$1);
var state_64525__$1 = (function (){var statearr_64534 = state_64525;
(statearr_64534[(8)] = inst_64511__$1);

return statearr_64534;
})();
if(cljs.core.truth_(inst_64512)){
var statearr_64535_64561 = state_64525__$1;
(statearr_64535_64561[(1)] = (13));

} else {
var statearr_64536_64562 = state_64525__$1;
(statearr_64536_64562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (2))){
var inst_64488 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_64489 = (0);
var state_64525__$1 = (function (){var statearr_64537 = state_64525;
(statearr_64537[(7)] = inst_64489);

(statearr_64537[(9)] = inst_64488);

return statearr_64537;
})();
var statearr_64538_64563 = state_64525__$1;
(statearr_64538_64563[(2)] = null);

(statearr_64538_64563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (11))){
var inst_64489 = (state_64525[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_64525,(10),Object,null,(9));
var inst_64498 = chs__$1.call(null,inst_64489);
var inst_64499 = done.call(null,inst_64489);
var inst_64500 = cljs.core.async.take_BANG_.call(null,inst_64498,inst_64499);
var state_64525__$1 = state_64525;
var statearr_64539_64564 = state_64525__$1;
(statearr_64539_64564[(2)] = inst_64500);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (9))){
var inst_64489 = (state_64525[(7)]);
var inst_64502 = (state_64525[(2)]);
var inst_64503 = (inst_64489 + (1));
var inst_64489__$1 = inst_64503;
var state_64525__$1 = (function (){var statearr_64540 = state_64525;
(statearr_64540[(7)] = inst_64489__$1);

(statearr_64540[(10)] = inst_64502);

return statearr_64540;
})();
var statearr_64541_64565 = state_64525__$1;
(statearr_64541_64565[(2)] = null);

(statearr_64541_64565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (5))){
var inst_64509 = (state_64525[(2)]);
var state_64525__$1 = (function (){var statearr_64542 = state_64525;
(statearr_64542[(11)] = inst_64509);

return statearr_64542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64525__$1,(12),dchan);
} else {
if((state_val_64526 === (14))){
var inst_64511 = (state_64525[(8)]);
var inst_64516 = cljs.core.apply.call(null,f,inst_64511);
var state_64525__$1 = state_64525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64525__$1,(16),out,inst_64516);
} else {
if((state_val_64526 === (16))){
var inst_64518 = (state_64525[(2)]);
var state_64525__$1 = (function (){var statearr_64543 = state_64525;
(statearr_64543[(12)] = inst_64518);

return statearr_64543;
})();
var statearr_64544_64566 = state_64525__$1;
(statearr_64544_64566[(2)] = null);

(statearr_64544_64566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (10))){
var inst_64493 = (state_64525[(2)]);
var inst_64494 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_64525__$1 = (function (){var statearr_64545 = state_64525;
(statearr_64545[(13)] = inst_64493);

return statearr_64545;
})();
var statearr_64546_64567 = state_64525__$1;
(statearr_64546_64567[(2)] = inst_64494);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64526 === (8))){
var inst_64507 = (state_64525[(2)]);
var state_64525__$1 = state_64525;
var statearr_64547_64568 = state_64525__$1;
(statearr_64547_64568[(2)] = inst_64507);

(statearr_64547_64568[(1)] = (5));


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
});})(c__63214__auto___64553,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__63124__auto__,c__63214__auto___64553,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_64548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64548[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_64548[(1)] = (1));

return statearr_64548;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_64525){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_64525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64549){if((e64549 instanceof Object)){
var ex__63128__auto__ = e64549;
var statearr_64550_64569 = state_64525;
(statearr_64550_64569[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64570 = state_64525;
state_64525 = G__64570;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_64525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_64525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___64553,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__63216__auto__ = (function (){var statearr_64551 = f__63215__auto__.call(null);
(statearr_64551[(6)] = c__63214__auto___64553);

return statearr_64551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___64553,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__64573 = arguments.length;
switch (G__64573) {
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
var c__63214__auto___64627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___64627,out){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___64627,out){
return (function (state_64605){
var state_val_64606 = (state_64605[(1)]);
if((state_val_64606 === (7))){
var inst_64585 = (state_64605[(7)]);
var inst_64584 = (state_64605[(8)]);
var inst_64584__$1 = (state_64605[(2)]);
var inst_64585__$1 = cljs.core.nth.call(null,inst_64584__$1,(0),null);
var inst_64586 = cljs.core.nth.call(null,inst_64584__$1,(1),null);
var inst_64587 = (inst_64585__$1 == null);
var state_64605__$1 = (function (){var statearr_64607 = state_64605;
(statearr_64607[(7)] = inst_64585__$1);

(statearr_64607[(8)] = inst_64584__$1);

(statearr_64607[(9)] = inst_64586);

return statearr_64607;
})();
if(cljs.core.truth_(inst_64587)){
var statearr_64608_64628 = state_64605__$1;
(statearr_64608_64628[(1)] = (8));

} else {
var statearr_64609_64629 = state_64605__$1;
(statearr_64609_64629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64606 === (1))){
var inst_64574 = cljs.core.vec.call(null,chs);
var inst_64575 = inst_64574;
var state_64605__$1 = (function (){var statearr_64610 = state_64605;
(statearr_64610[(10)] = inst_64575);

return statearr_64610;
})();
var statearr_64611_64630 = state_64605__$1;
(statearr_64611_64630[(2)] = null);

(statearr_64611_64630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64606 === (4))){
var inst_64575 = (state_64605[(10)]);
var state_64605__$1 = state_64605;
return cljs.core.async.ioc_alts_BANG_.call(null,state_64605__$1,(7),inst_64575);
} else {
if((state_val_64606 === (6))){
var inst_64601 = (state_64605[(2)]);
var state_64605__$1 = state_64605;
var statearr_64612_64631 = state_64605__$1;
(statearr_64612_64631[(2)] = inst_64601);

(statearr_64612_64631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64606 === (3))){
var inst_64603 = (state_64605[(2)]);
var state_64605__$1 = state_64605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64605__$1,inst_64603);
} else {
if((state_val_64606 === (2))){
var inst_64575 = (state_64605[(10)]);
var inst_64577 = cljs.core.count.call(null,inst_64575);
var inst_64578 = (inst_64577 > (0));
var state_64605__$1 = state_64605;
if(cljs.core.truth_(inst_64578)){
var statearr_64614_64632 = state_64605__$1;
(statearr_64614_64632[(1)] = (4));

} else {
var statearr_64615_64633 = state_64605__$1;
(statearr_64615_64633[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64606 === (11))){
var inst_64575 = (state_64605[(10)]);
var inst_64594 = (state_64605[(2)]);
var tmp64613 = inst_64575;
var inst_64575__$1 = tmp64613;
var state_64605__$1 = (function (){var statearr_64616 = state_64605;
(statearr_64616[(11)] = inst_64594);

(statearr_64616[(10)] = inst_64575__$1);

return statearr_64616;
})();
var statearr_64617_64634 = state_64605__$1;
(statearr_64617_64634[(2)] = null);

(statearr_64617_64634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64606 === (9))){
var inst_64585 = (state_64605[(7)]);
var state_64605__$1 = state_64605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64605__$1,(11),out,inst_64585);
} else {
if((state_val_64606 === (5))){
var inst_64599 = cljs.core.async.close_BANG_.call(null,out);
var state_64605__$1 = state_64605;
var statearr_64618_64635 = state_64605__$1;
(statearr_64618_64635[(2)] = inst_64599);

(statearr_64618_64635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64606 === (10))){
var inst_64597 = (state_64605[(2)]);
var state_64605__$1 = state_64605;
var statearr_64619_64636 = state_64605__$1;
(statearr_64619_64636[(2)] = inst_64597);

(statearr_64619_64636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64606 === (8))){
var inst_64585 = (state_64605[(7)]);
var inst_64584 = (state_64605[(8)]);
var inst_64575 = (state_64605[(10)]);
var inst_64586 = (state_64605[(9)]);
var inst_64589 = (function (){var cs = inst_64575;
var vec__64580 = inst_64584;
var v = inst_64585;
var c = inst_64586;
return ((function (cs,vec__64580,v,c,inst_64585,inst_64584,inst_64575,inst_64586,state_val_64606,c__63214__auto___64627,out){
return (function (p1__64571_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__64571_SHARP_);
});
;})(cs,vec__64580,v,c,inst_64585,inst_64584,inst_64575,inst_64586,state_val_64606,c__63214__auto___64627,out))
})();
var inst_64590 = cljs.core.filterv.call(null,inst_64589,inst_64575);
var inst_64575__$1 = inst_64590;
var state_64605__$1 = (function (){var statearr_64620 = state_64605;
(statearr_64620[(10)] = inst_64575__$1);

return statearr_64620;
})();
var statearr_64621_64637 = state_64605__$1;
(statearr_64621_64637[(2)] = null);

(statearr_64621_64637[(1)] = (2));


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
});})(c__63214__auto___64627,out))
;
return ((function (switch__63124__auto__,c__63214__auto___64627,out){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_64622 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64622[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_64622[(1)] = (1));

return statearr_64622;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_64605){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_64605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64623){if((e64623 instanceof Object)){
var ex__63128__auto__ = e64623;
var statearr_64624_64638 = state_64605;
(statearr_64624_64638[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64639 = state_64605;
state_64605 = G__64639;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_64605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_64605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___64627,out))
})();
var state__63216__auto__ = (function (){var statearr_64625 = f__63215__auto__.call(null);
(statearr_64625[(6)] = c__63214__auto___64627);

return statearr_64625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___64627,out))
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
var G__64641 = arguments.length;
switch (G__64641) {
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
var c__63214__auto___64686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___64686,out){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___64686,out){
return (function (state_64665){
var state_val_64666 = (state_64665[(1)]);
if((state_val_64666 === (7))){
var inst_64647 = (state_64665[(7)]);
var inst_64647__$1 = (state_64665[(2)]);
var inst_64648 = (inst_64647__$1 == null);
var inst_64649 = cljs.core.not.call(null,inst_64648);
var state_64665__$1 = (function (){var statearr_64667 = state_64665;
(statearr_64667[(7)] = inst_64647__$1);

return statearr_64667;
})();
if(inst_64649){
var statearr_64668_64687 = state_64665__$1;
(statearr_64668_64687[(1)] = (8));

} else {
var statearr_64669_64688 = state_64665__$1;
(statearr_64669_64688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (1))){
var inst_64642 = (0);
var state_64665__$1 = (function (){var statearr_64670 = state_64665;
(statearr_64670[(8)] = inst_64642);

return statearr_64670;
})();
var statearr_64671_64689 = state_64665__$1;
(statearr_64671_64689[(2)] = null);

(statearr_64671_64689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (4))){
var state_64665__$1 = state_64665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64665__$1,(7),ch);
} else {
if((state_val_64666 === (6))){
var inst_64660 = (state_64665[(2)]);
var state_64665__$1 = state_64665;
var statearr_64672_64690 = state_64665__$1;
(statearr_64672_64690[(2)] = inst_64660);

(statearr_64672_64690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (3))){
var inst_64662 = (state_64665[(2)]);
var inst_64663 = cljs.core.async.close_BANG_.call(null,out);
var state_64665__$1 = (function (){var statearr_64673 = state_64665;
(statearr_64673[(9)] = inst_64662);

return statearr_64673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64665__$1,inst_64663);
} else {
if((state_val_64666 === (2))){
var inst_64642 = (state_64665[(8)]);
var inst_64644 = (inst_64642 < n);
var state_64665__$1 = state_64665;
if(cljs.core.truth_(inst_64644)){
var statearr_64674_64691 = state_64665__$1;
(statearr_64674_64691[(1)] = (4));

} else {
var statearr_64675_64692 = state_64665__$1;
(statearr_64675_64692[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (11))){
var inst_64642 = (state_64665[(8)]);
var inst_64652 = (state_64665[(2)]);
var inst_64653 = (inst_64642 + (1));
var inst_64642__$1 = inst_64653;
var state_64665__$1 = (function (){var statearr_64676 = state_64665;
(statearr_64676[(10)] = inst_64652);

(statearr_64676[(8)] = inst_64642__$1);

return statearr_64676;
})();
var statearr_64677_64693 = state_64665__$1;
(statearr_64677_64693[(2)] = null);

(statearr_64677_64693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (9))){
var state_64665__$1 = state_64665;
var statearr_64678_64694 = state_64665__$1;
(statearr_64678_64694[(2)] = null);

(statearr_64678_64694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (5))){
var state_64665__$1 = state_64665;
var statearr_64679_64695 = state_64665__$1;
(statearr_64679_64695[(2)] = null);

(statearr_64679_64695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (10))){
var inst_64657 = (state_64665[(2)]);
var state_64665__$1 = state_64665;
var statearr_64680_64696 = state_64665__$1;
(statearr_64680_64696[(2)] = inst_64657);

(statearr_64680_64696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (8))){
var inst_64647 = (state_64665[(7)]);
var state_64665__$1 = state_64665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64665__$1,(11),out,inst_64647);
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
});})(c__63214__auto___64686,out))
;
return ((function (switch__63124__auto__,c__63214__auto___64686,out){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_64681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64681[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_64681[(1)] = (1));

return statearr_64681;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_64665){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_64665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64682){if((e64682 instanceof Object)){
var ex__63128__auto__ = e64682;
var statearr_64683_64697 = state_64665;
(statearr_64683_64697[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64698 = state_64665;
state_64665 = G__64698;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_64665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_64665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___64686,out))
})();
var state__63216__auto__ = (function (){var statearr_64684 = f__63215__auto__.call(null);
(statearr_64684[(6)] = c__63214__auto___64686);

return statearr_64684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___64686,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async64700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64700 = (function (f,ch,meta64701){
this.f = f;
this.ch = ch;
this.meta64701 = meta64701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64702,meta64701__$1){
var self__ = this;
var _64702__$1 = this;
return (new cljs.core.async.t_cljs$core$async64700(self__.f,self__.ch,meta64701__$1));
});

cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64702){
var self__ = this;
var _64702__$1 = this;
return self__.meta64701;
});

cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async64703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64703 = (function (f,ch,meta64701,_,fn1,meta64704){
this.f = f;
this.ch = ch;
this.meta64701 = meta64701;
this._ = _;
this.fn1 = fn1;
this.meta64704 = meta64704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async64703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_64705,meta64704__$1){
var self__ = this;
var _64705__$1 = this;
return (new cljs.core.async.t_cljs$core$async64703(self__.f,self__.ch,self__.meta64701,self__._,self__.fn1,meta64704__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async64703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_64705){
var self__ = this;
var _64705__$1 = this;
return self__.meta64704;
});})(___$1))
;

cljs.core.async.t_cljs$core$async64703.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async64703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async64703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__64699_SHARP_){
return f1.call(null,(((p1__64699_SHARP_ == null))?null:self__.f.call(null,p1__64699_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async64703.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64701","meta64701",759175644,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async64700","cljs.core.async/t_cljs$core$async64700",-1527292284,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta64704","meta64704",2010126056,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async64703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64703";

cljs.core.async.t_cljs$core$async64703.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async64703");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async64703 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64703(f__$1,ch__$1,meta64701__$1,___$2,fn1__$1,meta64704){
return (new cljs.core.async.t_cljs$core$async64703(f__$1,ch__$1,meta64701__$1,___$2,fn1__$1,meta64704));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async64703(self__.f,self__.ch,self__.meta64701,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__58123__auto__ = ret;
if(cljs.core.truth_(and__58123__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__58123__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async64700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64701","meta64701",759175644,null)], null);
});

cljs.core.async.t_cljs$core$async64700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64700";

cljs.core.async.t_cljs$core$async64700.cljs$lang$ctorPrWriter = (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async64700");
});

cljs.core.async.__GT_t_cljs$core$async64700 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64700(f__$1,ch__$1,meta64701){
return (new cljs.core.async.t_cljs$core$async64700(f__$1,ch__$1,meta64701));
});

}

return (new cljs.core.async.t_cljs$core$async64700(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async64706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64706 = (function (f,ch,meta64707){
this.f = f;
this.ch = ch;
this.meta64707 = meta64707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async64706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64708,meta64707__$1){
var self__ = this;
var _64708__$1 = this;
return (new cljs.core.async.t_cljs$core$async64706(self__.f,self__.ch,meta64707__$1));
});

cljs.core.async.t_cljs$core$async64706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64708){
var self__ = this;
var _64708__$1 = this;
return self__.meta64707;
});

cljs.core.async.t_cljs$core$async64706.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64706.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64706.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64706.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async64706.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64706.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async64706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64707","meta64707",-853485712,null)], null);
});

cljs.core.async.t_cljs$core$async64706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64706";

cljs.core.async.t_cljs$core$async64706.cljs$lang$ctorPrWriter = (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async64706");
});

cljs.core.async.__GT_t_cljs$core$async64706 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async64706(f__$1,ch__$1,meta64707){
return (new cljs.core.async.t_cljs$core$async64706(f__$1,ch__$1,meta64707));
});

}

return (new cljs.core.async.t_cljs$core$async64706(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async64709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64709 = (function (p,ch,meta64710){
this.p = p;
this.ch = ch;
this.meta64710 = meta64710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64711,meta64710__$1){
var self__ = this;
var _64711__$1 = this;
return (new cljs.core.async.t_cljs$core$async64709(self__.p,self__.ch,meta64710__$1));
});

cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64711){
var self__ = this;
var _64711__$1 = this;
return self__.meta64710;
});

cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async64709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64710","meta64710",1437631748,null)], null);
});

cljs.core.async.t_cljs$core$async64709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64709";

cljs.core.async.t_cljs$core$async64709.cljs$lang$ctorPrWriter = (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.core.async/t_cljs$core$async64709");
});

cljs.core.async.__GT_t_cljs$core$async64709 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async64709(p__$1,ch__$1,meta64710){
return (new cljs.core.async.t_cljs$core$async64709(p__$1,ch__$1,meta64710));
});

}

return (new cljs.core.async.t_cljs$core$async64709(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__64713 = arguments.length;
switch (G__64713) {
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
var c__63214__auto___64753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___64753,out){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___64753,out){
return (function (state_64734){
var state_val_64735 = (state_64734[(1)]);
if((state_val_64735 === (7))){
var inst_64730 = (state_64734[(2)]);
var state_64734__$1 = state_64734;
var statearr_64736_64754 = state_64734__$1;
(statearr_64736_64754[(2)] = inst_64730);

(statearr_64736_64754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64735 === (1))){
var state_64734__$1 = state_64734;
var statearr_64737_64755 = state_64734__$1;
(statearr_64737_64755[(2)] = null);

(statearr_64737_64755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64735 === (4))){
var inst_64716 = (state_64734[(7)]);
var inst_64716__$1 = (state_64734[(2)]);
var inst_64717 = (inst_64716__$1 == null);
var state_64734__$1 = (function (){var statearr_64738 = state_64734;
(statearr_64738[(7)] = inst_64716__$1);

return statearr_64738;
})();
if(cljs.core.truth_(inst_64717)){
var statearr_64739_64756 = state_64734__$1;
(statearr_64739_64756[(1)] = (5));

} else {
var statearr_64740_64757 = state_64734__$1;
(statearr_64740_64757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64735 === (6))){
var inst_64716 = (state_64734[(7)]);
var inst_64721 = p.call(null,inst_64716);
var state_64734__$1 = state_64734;
if(cljs.core.truth_(inst_64721)){
var statearr_64741_64758 = state_64734__$1;
(statearr_64741_64758[(1)] = (8));

} else {
var statearr_64742_64759 = state_64734__$1;
(statearr_64742_64759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64735 === (3))){
var inst_64732 = (state_64734[(2)]);
var state_64734__$1 = state_64734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64734__$1,inst_64732);
} else {
if((state_val_64735 === (2))){
var state_64734__$1 = state_64734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64734__$1,(4),ch);
} else {
if((state_val_64735 === (11))){
var inst_64724 = (state_64734[(2)]);
var state_64734__$1 = state_64734;
var statearr_64743_64760 = state_64734__$1;
(statearr_64743_64760[(2)] = inst_64724);

(statearr_64743_64760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64735 === (9))){
var state_64734__$1 = state_64734;
var statearr_64744_64761 = state_64734__$1;
(statearr_64744_64761[(2)] = null);

(statearr_64744_64761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64735 === (5))){
var inst_64719 = cljs.core.async.close_BANG_.call(null,out);
var state_64734__$1 = state_64734;
var statearr_64745_64762 = state_64734__$1;
(statearr_64745_64762[(2)] = inst_64719);

(statearr_64745_64762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64735 === (10))){
var inst_64727 = (state_64734[(2)]);
var state_64734__$1 = (function (){var statearr_64746 = state_64734;
(statearr_64746[(8)] = inst_64727);

return statearr_64746;
})();
var statearr_64747_64763 = state_64734__$1;
(statearr_64747_64763[(2)] = null);

(statearr_64747_64763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64735 === (8))){
var inst_64716 = (state_64734[(7)]);
var state_64734__$1 = state_64734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64734__$1,(11),out,inst_64716);
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
});})(c__63214__auto___64753,out))
;
return ((function (switch__63124__auto__,c__63214__auto___64753,out){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_64748 = [null,null,null,null,null,null,null,null,null];
(statearr_64748[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_64748[(1)] = (1));

return statearr_64748;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_64734){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_64734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64749){if((e64749 instanceof Object)){
var ex__63128__auto__ = e64749;
var statearr_64750_64764 = state_64734;
(statearr_64750_64764[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64765 = state_64734;
state_64734 = G__64765;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_64734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_64734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___64753,out))
})();
var state__63216__auto__ = (function (){var statearr_64751 = f__63215__auto__.call(null);
(statearr_64751[(6)] = c__63214__auto___64753);

return statearr_64751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___64753,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__64767 = arguments.length;
switch (G__64767) {
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
var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__){
return (function (state_64830){
var state_val_64831 = (state_64830[(1)]);
if((state_val_64831 === (7))){
var inst_64826 = (state_64830[(2)]);
var state_64830__$1 = state_64830;
var statearr_64832_64870 = state_64830__$1;
(statearr_64832_64870[(2)] = inst_64826);

(statearr_64832_64870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (20))){
var inst_64796 = (state_64830[(7)]);
var inst_64807 = (state_64830[(2)]);
var inst_64808 = cljs.core.next.call(null,inst_64796);
var inst_64782 = inst_64808;
var inst_64783 = null;
var inst_64784 = (0);
var inst_64785 = (0);
var state_64830__$1 = (function (){var statearr_64833 = state_64830;
(statearr_64833[(8)] = inst_64783);

(statearr_64833[(9)] = inst_64782);

(statearr_64833[(10)] = inst_64785);

(statearr_64833[(11)] = inst_64807);

(statearr_64833[(12)] = inst_64784);

return statearr_64833;
})();
var statearr_64834_64871 = state_64830__$1;
(statearr_64834_64871[(2)] = null);

(statearr_64834_64871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (1))){
var state_64830__$1 = state_64830;
var statearr_64835_64872 = state_64830__$1;
(statearr_64835_64872[(2)] = null);

(statearr_64835_64872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (4))){
var inst_64771 = (state_64830[(13)]);
var inst_64771__$1 = (state_64830[(2)]);
var inst_64772 = (inst_64771__$1 == null);
var state_64830__$1 = (function (){var statearr_64836 = state_64830;
(statearr_64836[(13)] = inst_64771__$1);

return statearr_64836;
})();
if(cljs.core.truth_(inst_64772)){
var statearr_64837_64873 = state_64830__$1;
(statearr_64837_64873[(1)] = (5));

} else {
var statearr_64838_64874 = state_64830__$1;
(statearr_64838_64874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (15))){
var state_64830__$1 = state_64830;
var statearr_64842_64875 = state_64830__$1;
(statearr_64842_64875[(2)] = null);

(statearr_64842_64875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (21))){
var state_64830__$1 = state_64830;
var statearr_64843_64876 = state_64830__$1;
(statearr_64843_64876[(2)] = null);

(statearr_64843_64876[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (13))){
var inst_64783 = (state_64830[(8)]);
var inst_64782 = (state_64830[(9)]);
var inst_64785 = (state_64830[(10)]);
var inst_64784 = (state_64830[(12)]);
var inst_64792 = (state_64830[(2)]);
var inst_64793 = (inst_64785 + (1));
var tmp64839 = inst_64783;
var tmp64840 = inst_64782;
var tmp64841 = inst_64784;
var inst_64782__$1 = tmp64840;
var inst_64783__$1 = tmp64839;
var inst_64784__$1 = tmp64841;
var inst_64785__$1 = inst_64793;
var state_64830__$1 = (function (){var statearr_64844 = state_64830;
(statearr_64844[(8)] = inst_64783__$1);

(statearr_64844[(14)] = inst_64792);

(statearr_64844[(9)] = inst_64782__$1);

(statearr_64844[(10)] = inst_64785__$1);

(statearr_64844[(12)] = inst_64784__$1);

return statearr_64844;
})();
var statearr_64845_64877 = state_64830__$1;
(statearr_64845_64877[(2)] = null);

(statearr_64845_64877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (22))){
var state_64830__$1 = state_64830;
var statearr_64846_64878 = state_64830__$1;
(statearr_64846_64878[(2)] = null);

(statearr_64846_64878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (6))){
var inst_64771 = (state_64830[(13)]);
var inst_64780 = f.call(null,inst_64771);
var inst_64781 = cljs.core.seq.call(null,inst_64780);
var inst_64782 = inst_64781;
var inst_64783 = null;
var inst_64784 = (0);
var inst_64785 = (0);
var state_64830__$1 = (function (){var statearr_64847 = state_64830;
(statearr_64847[(8)] = inst_64783);

(statearr_64847[(9)] = inst_64782);

(statearr_64847[(10)] = inst_64785);

(statearr_64847[(12)] = inst_64784);

return statearr_64847;
})();
var statearr_64848_64879 = state_64830__$1;
(statearr_64848_64879[(2)] = null);

(statearr_64848_64879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (17))){
var inst_64796 = (state_64830[(7)]);
var inst_64800 = cljs.core.chunk_first.call(null,inst_64796);
var inst_64801 = cljs.core.chunk_rest.call(null,inst_64796);
var inst_64802 = cljs.core.count.call(null,inst_64800);
var inst_64782 = inst_64801;
var inst_64783 = inst_64800;
var inst_64784 = inst_64802;
var inst_64785 = (0);
var state_64830__$1 = (function (){var statearr_64849 = state_64830;
(statearr_64849[(8)] = inst_64783);

(statearr_64849[(9)] = inst_64782);

(statearr_64849[(10)] = inst_64785);

(statearr_64849[(12)] = inst_64784);

return statearr_64849;
})();
var statearr_64850_64880 = state_64830__$1;
(statearr_64850_64880[(2)] = null);

(statearr_64850_64880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (3))){
var inst_64828 = (state_64830[(2)]);
var state_64830__$1 = state_64830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64830__$1,inst_64828);
} else {
if((state_val_64831 === (12))){
var inst_64816 = (state_64830[(2)]);
var state_64830__$1 = state_64830;
var statearr_64851_64881 = state_64830__$1;
(statearr_64851_64881[(2)] = inst_64816);

(statearr_64851_64881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (2))){
var state_64830__$1 = state_64830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64830__$1,(4),in$);
} else {
if((state_val_64831 === (23))){
var inst_64824 = (state_64830[(2)]);
var state_64830__$1 = state_64830;
var statearr_64852_64882 = state_64830__$1;
(statearr_64852_64882[(2)] = inst_64824);

(statearr_64852_64882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (19))){
var inst_64811 = (state_64830[(2)]);
var state_64830__$1 = state_64830;
var statearr_64853_64883 = state_64830__$1;
(statearr_64853_64883[(2)] = inst_64811);

(statearr_64853_64883[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (11))){
var inst_64782 = (state_64830[(9)]);
var inst_64796 = (state_64830[(7)]);
var inst_64796__$1 = cljs.core.seq.call(null,inst_64782);
var state_64830__$1 = (function (){var statearr_64854 = state_64830;
(statearr_64854[(7)] = inst_64796__$1);

return statearr_64854;
})();
if(inst_64796__$1){
var statearr_64855_64884 = state_64830__$1;
(statearr_64855_64884[(1)] = (14));

} else {
var statearr_64856_64885 = state_64830__$1;
(statearr_64856_64885[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (9))){
var inst_64818 = (state_64830[(2)]);
var inst_64819 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_64830__$1 = (function (){var statearr_64857 = state_64830;
(statearr_64857[(15)] = inst_64818);

return statearr_64857;
})();
if(cljs.core.truth_(inst_64819)){
var statearr_64858_64886 = state_64830__$1;
(statearr_64858_64886[(1)] = (21));

} else {
var statearr_64859_64887 = state_64830__$1;
(statearr_64859_64887[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (5))){
var inst_64774 = cljs.core.async.close_BANG_.call(null,out);
var state_64830__$1 = state_64830;
var statearr_64860_64888 = state_64830__$1;
(statearr_64860_64888[(2)] = inst_64774);

(statearr_64860_64888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (14))){
var inst_64796 = (state_64830[(7)]);
var inst_64798 = cljs.core.chunked_seq_QMARK_.call(null,inst_64796);
var state_64830__$1 = state_64830;
if(inst_64798){
var statearr_64861_64889 = state_64830__$1;
(statearr_64861_64889[(1)] = (17));

} else {
var statearr_64862_64890 = state_64830__$1;
(statearr_64862_64890[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (16))){
var inst_64814 = (state_64830[(2)]);
var state_64830__$1 = state_64830;
var statearr_64863_64891 = state_64830__$1;
(statearr_64863_64891[(2)] = inst_64814);

(statearr_64863_64891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64831 === (10))){
var inst_64783 = (state_64830[(8)]);
var inst_64785 = (state_64830[(10)]);
var inst_64790 = cljs.core._nth.call(null,inst_64783,inst_64785);
var state_64830__$1 = state_64830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64830__$1,(13),out,inst_64790);
} else {
if((state_val_64831 === (18))){
var inst_64796 = (state_64830[(7)]);
var inst_64805 = cljs.core.first.call(null,inst_64796);
var state_64830__$1 = state_64830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64830__$1,(20),out,inst_64805);
} else {
if((state_val_64831 === (8))){
var inst_64785 = (state_64830[(10)]);
var inst_64784 = (state_64830[(12)]);
var inst_64787 = (inst_64785 < inst_64784);
var inst_64788 = inst_64787;
var state_64830__$1 = state_64830;
if(cljs.core.truth_(inst_64788)){
var statearr_64864_64892 = state_64830__$1;
(statearr_64864_64892[(1)] = (10));

} else {
var statearr_64865_64893 = state_64830__$1;
(statearr_64865_64893[(1)] = (11));

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
});})(c__63214__auto__))
;
return ((function (switch__63124__auto__,c__63214__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__63125__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__63125__auto____0 = (function (){
var statearr_64866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64866[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__63125__auto__);

(statearr_64866[(1)] = (1));

return statearr_64866;
});
var cljs$core$async$mapcat_STAR__$_state_machine__63125__auto____1 = (function (state_64830){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_64830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64867){if((e64867 instanceof Object)){
var ex__63128__auto__ = e64867;
var statearr_64868_64894 = state_64830;
(statearr_64868_64894[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64895 = state_64830;
state_64830 = G__64895;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__63125__auto__ = function(state_64830){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__63125__auto____1.call(this,state_64830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__63125__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__63125__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__))
})();
var state__63216__auto__ = (function (){var statearr_64869 = f__63215__auto__.call(null);
(statearr_64869[(6)] = c__63214__auto__);

return statearr_64869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__))
);

return c__63214__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__64897 = arguments.length;
switch (G__64897) {
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
var G__64900 = arguments.length;
switch (G__64900) {
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
var G__64903 = arguments.length;
switch (G__64903) {
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
var c__63214__auto___64950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___64950,out){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___64950,out){
return (function (state_64927){
var state_val_64928 = (state_64927[(1)]);
if((state_val_64928 === (7))){
var inst_64922 = (state_64927[(2)]);
var state_64927__$1 = state_64927;
var statearr_64929_64951 = state_64927__$1;
(statearr_64929_64951[(2)] = inst_64922);

(statearr_64929_64951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64928 === (1))){
var inst_64904 = null;
var state_64927__$1 = (function (){var statearr_64930 = state_64927;
(statearr_64930[(7)] = inst_64904);

return statearr_64930;
})();
var statearr_64931_64952 = state_64927__$1;
(statearr_64931_64952[(2)] = null);

(statearr_64931_64952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64928 === (4))){
var inst_64907 = (state_64927[(8)]);
var inst_64907__$1 = (state_64927[(2)]);
var inst_64908 = (inst_64907__$1 == null);
var inst_64909 = cljs.core.not.call(null,inst_64908);
var state_64927__$1 = (function (){var statearr_64932 = state_64927;
(statearr_64932[(8)] = inst_64907__$1);

return statearr_64932;
})();
if(inst_64909){
var statearr_64933_64953 = state_64927__$1;
(statearr_64933_64953[(1)] = (5));

} else {
var statearr_64934_64954 = state_64927__$1;
(statearr_64934_64954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64928 === (6))){
var state_64927__$1 = state_64927;
var statearr_64935_64955 = state_64927__$1;
(statearr_64935_64955[(2)] = null);

(statearr_64935_64955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64928 === (3))){
var inst_64924 = (state_64927[(2)]);
var inst_64925 = cljs.core.async.close_BANG_.call(null,out);
var state_64927__$1 = (function (){var statearr_64936 = state_64927;
(statearr_64936[(9)] = inst_64924);

return statearr_64936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64927__$1,inst_64925);
} else {
if((state_val_64928 === (2))){
var state_64927__$1 = state_64927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64927__$1,(4),ch);
} else {
if((state_val_64928 === (11))){
var inst_64907 = (state_64927[(8)]);
var inst_64916 = (state_64927[(2)]);
var inst_64904 = inst_64907;
var state_64927__$1 = (function (){var statearr_64937 = state_64927;
(statearr_64937[(10)] = inst_64916);

(statearr_64937[(7)] = inst_64904);

return statearr_64937;
})();
var statearr_64938_64956 = state_64927__$1;
(statearr_64938_64956[(2)] = null);

(statearr_64938_64956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64928 === (9))){
var inst_64907 = (state_64927[(8)]);
var state_64927__$1 = state_64927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64927__$1,(11),out,inst_64907);
} else {
if((state_val_64928 === (5))){
var inst_64907 = (state_64927[(8)]);
var inst_64904 = (state_64927[(7)]);
var inst_64911 = cljs.core._EQ_.call(null,inst_64907,inst_64904);
var state_64927__$1 = state_64927;
if(inst_64911){
var statearr_64940_64957 = state_64927__$1;
(statearr_64940_64957[(1)] = (8));

} else {
var statearr_64941_64958 = state_64927__$1;
(statearr_64941_64958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64928 === (10))){
var inst_64919 = (state_64927[(2)]);
var state_64927__$1 = state_64927;
var statearr_64942_64959 = state_64927__$1;
(statearr_64942_64959[(2)] = inst_64919);

(statearr_64942_64959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64928 === (8))){
var inst_64904 = (state_64927[(7)]);
var tmp64939 = inst_64904;
var inst_64904__$1 = tmp64939;
var state_64927__$1 = (function (){var statearr_64943 = state_64927;
(statearr_64943[(7)] = inst_64904__$1);

return statearr_64943;
})();
var statearr_64944_64960 = state_64927__$1;
(statearr_64944_64960[(2)] = null);

(statearr_64944_64960[(1)] = (2));


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
});})(c__63214__auto___64950,out))
;
return ((function (switch__63124__auto__,c__63214__auto___64950,out){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_64945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64945[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_64945[(1)] = (1));

return statearr_64945;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_64927){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_64927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e64946){if((e64946 instanceof Object)){
var ex__63128__auto__ = e64946;
var statearr_64947_64961 = state_64927;
(statearr_64947_64961[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64962 = state_64927;
state_64927 = G__64962;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_64927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_64927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___64950,out))
})();
var state__63216__auto__ = (function (){var statearr_64948 = f__63215__auto__.call(null);
(statearr_64948[(6)] = c__63214__auto___64950);

return statearr_64948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___64950,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__64964 = arguments.length;
switch (G__64964) {
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
var c__63214__auto___65030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___65030,out){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___65030,out){
return (function (state_65002){
var state_val_65003 = (state_65002[(1)]);
if((state_val_65003 === (7))){
var inst_64998 = (state_65002[(2)]);
var state_65002__$1 = state_65002;
var statearr_65004_65031 = state_65002__$1;
(statearr_65004_65031[(2)] = inst_64998);

(statearr_65004_65031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (1))){
var inst_64965 = (new Array(n));
var inst_64966 = inst_64965;
var inst_64967 = (0);
var state_65002__$1 = (function (){var statearr_65005 = state_65002;
(statearr_65005[(7)] = inst_64966);

(statearr_65005[(8)] = inst_64967);

return statearr_65005;
})();
var statearr_65006_65032 = state_65002__$1;
(statearr_65006_65032[(2)] = null);

(statearr_65006_65032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (4))){
var inst_64970 = (state_65002[(9)]);
var inst_64970__$1 = (state_65002[(2)]);
var inst_64971 = (inst_64970__$1 == null);
var inst_64972 = cljs.core.not.call(null,inst_64971);
var state_65002__$1 = (function (){var statearr_65007 = state_65002;
(statearr_65007[(9)] = inst_64970__$1);

return statearr_65007;
})();
if(inst_64972){
var statearr_65008_65033 = state_65002__$1;
(statearr_65008_65033[(1)] = (5));

} else {
var statearr_65009_65034 = state_65002__$1;
(statearr_65009_65034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (15))){
var inst_64992 = (state_65002[(2)]);
var state_65002__$1 = state_65002;
var statearr_65010_65035 = state_65002__$1;
(statearr_65010_65035[(2)] = inst_64992);

(statearr_65010_65035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (13))){
var state_65002__$1 = state_65002;
var statearr_65011_65036 = state_65002__$1;
(statearr_65011_65036[(2)] = null);

(statearr_65011_65036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (6))){
var inst_64967 = (state_65002[(8)]);
var inst_64988 = (inst_64967 > (0));
var state_65002__$1 = state_65002;
if(cljs.core.truth_(inst_64988)){
var statearr_65012_65037 = state_65002__$1;
(statearr_65012_65037[(1)] = (12));

} else {
var statearr_65013_65038 = state_65002__$1;
(statearr_65013_65038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (3))){
var inst_65000 = (state_65002[(2)]);
var state_65002__$1 = state_65002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65002__$1,inst_65000);
} else {
if((state_val_65003 === (12))){
var inst_64966 = (state_65002[(7)]);
var inst_64990 = cljs.core.vec.call(null,inst_64966);
var state_65002__$1 = state_65002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65002__$1,(15),out,inst_64990);
} else {
if((state_val_65003 === (2))){
var state_65002__$1 = state_65002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65002__$1,(4),ch);
} else {
if((state_val_65003 === (11))){
var inst_64982 = (state_65002[(2)]);
var inst_64983 = (new Array(n));
var inst_64966 = inst_64983;
var inst_64967 = (0);
var state_65002__$1 = (function (){var statearr_65014 = state_65002;
(statearr_65014[(7)] = inst_64966);

(statearr_65014[(8)] = inst_64967);

(statearr_65014[(10)] = inst_64982);

return statearr_65014;
})();
var statearr_65015_65039 = state_65002__$1;
(statearr_65015_65039[(2)] = null);

(statearr_65015_65039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (9))){
var inst_64966 = (state_65002[(7)]);
var inst_64980 = cljs.core.vec.call(null,inst_64966);
var state_65002__$1 = state_65002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65002__$1,(11),out,inst_64980);
} else {
if((state_val_65003 === (5))){
var inst_64975 = (state_65002[(11)]);
var inst_64970 = (state_65002[(9)]);
var inst_64966 = (state_65002[(7)]);
var inst_64967 = (state_65002[(8)]);
var inst_64974 = (inst_64966[inst_64967] = inst_64970);
var inst_64975__$1 = (inst_64967 + (1));
var inst_64976 = (inst_64975__$1 < n);
var state_65002__$1 = (function (){var statearr_65016 = state_65002;
(statearr_65016[(11)] = inst_64975__$1);

(statearr_65016[(12)] = inst_64974);

return statearr_65016;
})();
if(cljs.core.truth_(inst_64976)){
var statearr_65017_65040 = state_65002__$1;
(statearr_65017_65040[(1)] = (8));

} else {
var statearr_65018_65041 = state_65002__$1;
(statearr_65018_65041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (14))){
var inst_64995 = (state_65002[(2)]);
var inst_64996 = cljs.core.async.close_BANG_.call(null,out);
var state_65002__$1 = (function (){var statearr_65020 = state_65002;
(statearr_65020[(13)] = inst_64995);

return statearr_65020;
})();
var statearr_65021_65042 = state_65002__$1;
(statearr_65021_65042[(2)] = inst_64996);

(statearr_65021_65042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (10))){
var inst_64986 = (state_65002[(2)]);
var state_65002__$1 = state_65002;
var statearr_65022_65043 = state_65002__$1;
(statearr_65022_65043[(2)] = inst_64986);

(statearr_65022_65043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65003 === (8))){
var inst_64975 = (state_65002[(11)]);
var inst_64966 = (state_65002[(7)]);
var tmp65019 = inst_64966;
var inst_64966__$1 = tmp65019;
var inst_64967 = inst_64975;
var state_65002__$1 = (function (){var statearr_65023 = state_65002;
(statearr_65023[(7)] = inst_64966__$1);

(statearr_65023[(8)] = inst_64967);

return statearr_65023;
})();
var statearr_65024_65044 = state_65002__$1;
(statearr_65024_65044[(2)] = null);

(statearr_65024_65044[(1)] = (2));


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
});})(c__63214__auto___65030,out))
;
return ((function (switch__63124__auto__,c__63214__auto___65030,out){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_65025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65025[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_65025[(1)] = (1));

return statearr_65025;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_65002){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_65002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e65026){if((e65026 instanceof Object)){
var ex__63128__auto__ = e65026;
var statearr_65027_65045 = state_65002;
(statearr_65027_65045[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65046 = state_65002;
state_65002 = G__65046;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_65002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_65002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___65030,out))
})();
var state__63216__auto__ = (function (){var statearr_65028 = f__63215__auto__.call(null);
(statearr_65028[(6)] = c__63214__auto___65030);

return statearr_65028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___65030,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__65048 = arguments.length;
switch (G__65048) {
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
var c__63214__auto___65118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___65118,out){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___65118,out){
return (function (state_65090){
var state_val_65091 = (state_65090[(1)]);
if((state_val_65091 === (7))){
var inst_65086 = (state_65090[(2)]);
var state_65090__$1 = state_65090;
var statearr_65092_65119 = state_65090__$1;
(statearr_65092_65119[(2)] = inst_65086);

(statearr_65092_65119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (1))){
var inst_65049 = [];
var inst_65050 = inst_65049;
var inst_65051 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_65090__$1 = (function (){var statearr_65093 = state_65090;
(statearr_65093[(7)] = inst_65050);

(statearr_65093[(8)] = inst_65051);

return statearr_65093;
})();
var statearr_65094_65120 = state_65090__$1;
(statearr_65094_65120[(2)] = null);

(statearr_65094_65120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (4))){
var inst_65054 = (state_65090[(9)]);
var inst_65054__$1 = (state_65090[(2)]);
var inst_65055 = (inst_65054__$1 == null);
var inst_65056 = cljs.core.not.call(null,inst_65055);
var state_65090__$1 = (function (){var statearr_65095 = state_65090;
(statearr_65095[(9)] = inst_65054__$1);

return statearr_65095;
})();
if(inst_65056){
var statearr_65096_65121 = state_65090__$1;
(statearr_65096_65121[(1)] = (5));

} else {
var statearr_65097_65122 = state_65090__$1;
(statearr_65097_65122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (15))){
var inst_65080 = (state_65090[(2)]);
var state_65090__$1 = state_65090;
var statearr_65098_65123 = state_65090__$1;
(statearr_65098_65123[(2)] = inst_65080);

(statearr_65098_65123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (13))){
var state_65090__$1 = state_65090;
var statearr_65099_65124 = state_65090__$1;
(statearr_65099_65124[(2)] = null);

(statearr_65099_65124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (6))){
var inst_65050 = (state_65090[(7)]);
var inst_65075 = inst_65050.length;
var inst_65076 = (inst_65075 > (0));
var state_65090__$1 = state_65090;
if(cljs.core.truth_(inst_65076)){
var statearr_65100_65125 = state_65090__$1;
(statearr_65100_65125[(1)] = (12));

} else {
var statearr_65101_65126 = state_65090__$1;
(statearr_65101_65126[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (3))){
var inst_65088 = (state_65090[(2)]);
var state_65090__$1 = state_65090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65090__$1,inst_65088);
} else {
if((state_val_65091 === (12))){
var inst_65050 = (state_65090[(7)]);
var inst_65078 = cljs.core.vec.call(null,inst_65050);
var state_65090__$1 = state_65090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65090__$1,(15),out,inst_65078);
} else {
if((state_val_65091 === (2))){
var state_65090__$1 = state_65090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65090__$1,(4),ch);
} else {
if((state_val_65091 === (11))){
var inst_65058 = (state_65090[(10)]);
var inst_65054 = (state_65090[(9)]);
var inst_65068 = (state_65090[(2)]);
var inst_65069 = [];
var inst_65070 = inst_65069.push(inst_65054);
var inst_65050 = inst_65069;
var inst_65051 = inst_65058;
var state_65090__$1 = (function (){var statearr_65102 = state_65090;
(statearr_65102[(11)] = inst_65068);

(statearr_65102[(12)] = inst_65070);

(statearr_65102[(7)] = inst_65050);

(statearr_65102[(8)] = inst_65051);

return statearr_65102;
})();
var statearr_65103_65127 = state_65090__$1;
(statearr_65103_65127[(2)] = null);

(statearr_65103_65127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (9))){
var inst_65050 = (state_65090[(7)]);
var inst_65066 = cljs.core.vec.call(null,inst_65050);
var state_65090__$1 = state_65090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65090__$1,(11),out,inst_65066);
} else {
if((state_val_65091 === (5))){
var inst_65058 = (state_65090[(10)]);
var inst_65054 = (state_65090[(9)]);
var inst_65051 = (state_65090[(8)]);
var inst_65058__$1 = f.call(null,inst_65054);
var inst_65059 = cljs.core._EQ_.call(null,inst_65058__$1,inst_65051);
var inst_65060 = cljs.core.keyword_identical_QMARK_.call(null,inst_65051,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_65061 = (inst_65059) || (inst_65060);
var state_65090__$1 = (function (){var statearr_65104 = state_65090;
(statearr_65104[(10)] = inst_65058__$1);

return statearr_65104;
})();
if(cljs.core.truth_(inst_65061)){
var statearr_65105_65128 = state_65090__$1;
(statearr_65105_65128[(1)] = (8));

} else {
var statearr_65106_65129 = state_65090__$1;
(statearr_65106_65129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (14))){
var inst_65083 = (state_65090[(2)]);
var inst_65084 = cljs.core.async.close_BANG_.call(null,out);
var state_65090__$1 = (function (){var statearr_65108 = state_65090;
(statearr_65108[(13)] = inst_65083);

return statearr_65108;
})();
var statearr_65109_65130 = state_65090__$1;
(statearr_65109_65130[(2)] = inst_65084);

(statearr_65109_65130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (10))){
var inst_65073 = (state_65090[(2)]);
var state_65090__$1 = state_65090;
var statearr_65110_65131 = state_65090__$1;
(statearr_65110_65131[(2)] = inst_65073);

(statearr_65110_65131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65091 === (8))){
var inst_65058 = (state_65090[(10)]);
var inst_65054 = (state_65090[(9)]);
var inst_65050 = (state_65090[(7)]);
var inst_65063 = inst_65050.push(inst_65054);
var tmp65107 = inst_65050;
var inst_65050__$1 = tmp65107;
var inst_65051 = inst_65058;
var state_65090__$1 = (function (){var statearr_65111 = state_65090;
(statearr_65111[(7)] = inst_65050__$1);

(statearr_65111[(8)] = inst_65051);

(statearr_65111[(14)] = inst_65063);

return statearr_65111;
})();
var statearr_65112_65132 = state_65090__$1;
(statearr_65112_65132[(2)] = null);

(statearr_65112_65132[(1)] = (2));


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
});})(c__63214__auto___65118,out))
;
return ((function (switch__63124__auto__,c__63214__auto___65118,out){
return (function() {
var cljs$core$async$state_machine__63125__auto__ = null;
var cljs$core$async$state_machine__63125__auto____0 = (function (){
var statearr_65113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65113[(0)] = cljs$core$async$state_machine__63125__auto__);

(statearr_65113[(1)] = (1));

return statearr_65113;
});
var cljs$core$async$state_machine__63125__auto____1 = (function (state_65090){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_65090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e65114){if((e65114 instanceof Object)){
var ex__63128__auto__ = e65114;
var statearr_65115_65133 = state_65090;
(statearr_65115_65133[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65134 = state_65090;
state_65090 = G__65134;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
cljs$core$async$state_machine__63125__auto__ = function(state_65090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63125__auto____1.call(this,state_65090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63125__auto____0;
cljs$core$async$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63125__auto____1;
return cljs$core$async$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___65118,out))
})();
var state__63216__auto__ = (function (){var statearr_65116 = f__63215__auto__.call(null);
(statearr_65116[(6)] = c__63214__auto___65118);

return statearr_65116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___65118,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506641505546
