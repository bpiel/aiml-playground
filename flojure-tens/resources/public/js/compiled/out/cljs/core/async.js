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
var G__17704 = arguments.length;
switch (G__17704) {
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
if(typeof cljs.core.async.t_cljs$core$async17705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17705 = (function (f,blockable,meta17706){
this.f = f;
this.blockable = blockable;
this.meta17706 = meta17706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17707,meta17706__$1){
var self__ = this;
var _17707__$1 = this;
return (new cljs.core.async.t_cljs$core$async17705(self__.f,self__.blockable,meta17706__$1));
});

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17707){
var self__ = this;
var _17707__$1 = this;
return self__.meta17706;
});

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17706","meta17706",-376206593,null)], null);
});

cljs.core.async.t_cljs$core$async17705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17705";

cljs.core.async.t_cljs$core$async17705.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17705");
});

cljs.core.async.__GT_t_cljs$core$async17705 = (function cljs$core$async$__GT_t_cljs$core$async17705(f__$1,blockable__$1,meta17706){
return (new cljs.core.async.t_cljs$core$async17705(f__$1,blockable__$1,meta17706));
});

}

return (new cljs.core.async.t_cljs$core$async17705(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17711 = arguments.length;
switch (G__17711) {
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
var G__17714 = arguments.length;
switch (G__17714) {
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
var G__17717 = arguments.length;
switch (G__17717) {
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
var val_17719 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17719);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17719,ret){
return (function (){
return fn1.call(null,val_17719);
});})(val_17719,ret))
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
var G__17721 = arguments.length;
switch (G__17721) {
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
var n__10853__auto___17723 = n;
var x_17724 = (0);
while(true){
if((x_17724 < n__10853__auto___17723)){
(a[x_17724] = (0));

var G__17725 = (x_17724 + (1));
x_17724 = G__17725;
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

var G__17726 = (i + (1));
i = G__17726;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17727 = (function (flag,meta17728){
this.flag = flag;
this.meta17728 = meta17728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17729,meta17728__$1){
var self__ = this;
var _17729__$1 = this;
return (new cljs.core.async.t_cljs$core$async17727(self__.flag,meta17728__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17729){
var self__ = this;
var _17729__$1 = this;
return self__.meta17728;
});})(flag))
;

cljs.core.async.t_cljs$core$async17727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17727.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17728","meta17728",-1311458894,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17727";

cljs.core.async.t_cljs$core$async17727.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17727");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17727 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17727(flag__$1,meta17728){
return (new cljs.core.async.t_cljs$core$async17727(flag__$1,meta17728));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17727(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17730 = (function (flag,cb,meta17731){
this.flag = flag;
this.cb = cb;
this.meta17731 = meta17731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17732,meta17731__$1){
var self__ = this;
var _17732__$1 = this;
return (new cljs.core.async.t_cljs$core$async17730(self__.flag,self__.cb,meta17731__$1));
});

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17732){
var self__ = this;
var _17732__$1 = this;
return self__.meta17731;
});

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17731","meta17731",-653113307,null)], null);
});

cljs.core.async.t_cljs$core$async17730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17730";

cljs.core.async.t_cljs$core$async17730.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17730");
});

cljs.core.async.__GT_t_cljs$core$async17730 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17730(flag__$1,cb__$1,meta17731){
return (new cljs.core.async.t_cljs$core$async17730(flag__$1,cb__$1,meta17731));
});

}

return (new cljs.core.async.t_cljs$core$async17730(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17733_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17733_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17734_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17734_SHARP_,port], null));
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
var G__17735 = (i + (1));
i = G__17735;
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
var len__11087__auto___17741 = arguments.length;
var i__11088__auto___17742 = (0);
while(true){
if((i__11088__auto___17742 < len__11087__auto___17741)){
args__11094__auto__.push((arguments[i__11088__auto___17742]));

var G__17743 = (i__11088__auto___17742 + (1));
i__11088__auto___17742 = G__17743;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17738){
var map__17739 = p__17738;
var map__17739__$1 = ((((!((map__17739 == null)))?((((map__17739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17739):map__17739);
var opts = map__17739__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17736){
var G__17737 = cljs.core.first.call(null,seq17736);
var seq17736__$1 = cljs.core.next.call(null,seq17736);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17737,seq17736__$1);
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
var G__17745 = arguments.length;
switch (G__17745) {
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
var c__17644__auto___17791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___17791){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___17791){
return (function (state_17769){
var state_val_17770 = (state_17769[(1)]);
if((state_val_17770 === (7))){
var inst_17765 = (state_17769[(2)]);
var state_17769__$1 = state_17769;
var statearr_17771_17792 = state_17769__$1;
(statearr_17771_17792[(2)] = inst_17765);

(statearr_17771_17792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (1))){
var state_17769__$1 = state_17769;
var statearr_17772_17793 = state_17769__$1;
(statearr_17772_17793[(2)] = null);

(statearr_17772_17793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (4))){
var inst_17748 = (state_17769[(7)]);
var inst_17748__$1 = (state_17769[(2)]);
var inst_17749 = (inst_17748__$1 == null);
var state_17769__$1 = (function (){var statearr_17773 = state_17769;
(statearr_17773[(7)] = inst_17748__$1);

return statearr_17773;
})();
if(cljs.core.truth_(inst_17749)){
var statearr_17774_17794 = state_17769__$1;
(statearr_17774_17794[(1)] = (5));

} else {
var statearr_17775_17795 = state_17769__$1;
(statearr_17775_17795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (13))){
var state_17769__$1 = state_17769;
var statearr_17776_17796 = state_17769__$1;
(statearr_17776_17796[(2)] = null);

(statearr_17776_17796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (6))){
var inst_17748 = (state_17769[(7)]);
var state_17769__$1 = state_17769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17769__$1,(11),to,inst_17748);
} else {
if((state_val_17770 === (3))){
var inst_17767 = (state_17769[(2)]);
var state_17769__$1 = state_17769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17769__$1,inst_17767);
} else {
if((state_val_17770 === (12))){
var state_17769__$1 = state_17769;
var statearr_17777_17797 = state_17769__$1;
(statearr_17777_17797[(2)] = null);

(statearr_17777_17797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (2))){
var state_17769__$1 = state_17769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17769__$1,(4),from);
} else {
if((state_val_17770 === (11))){
var inst_17758 = (state_17769[(2)]);
var state_17769__$1 = state_17769;
if(cljs.core.truth_(inst_17758)){
var statearr_17778_17798 = state_17769__$1;
(statearr_17778_17798[(1)] = (12));

} else {
var statearr_17779_17799 = state_17769__$1;
(statearr_17779_17799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (9))){
var state_17769__$1 = state_17769;
var statearr_17780_17800 = state_17769__$1;
(statearr_17780_17800[(2)] = null);

(statearr_17780_17800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (5))){
var state_17769__$1 = state_17769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17781_17801 = state_17769__$1;
(statearr_17781_17801[(1)] = (8));

} else {
var statearr_17782_17802 = state_17769__$1;
(statearr_17782_17802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (14))){
var inst_17763 = (state_17769[(2)]);
var state_17769__$1 = state_17769;
var statearr_17783_17803 = state_17769__$1;
(statearr_17783_17803[(2)] = inst_17763);

(statearr_17783_17803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (10))){
var inst_17755 = (state_17769[(2)]);
var state_17769__$1 = state_17769;
var statearr_17784_17804 = state_17769__$1;
(statearr_17784_17804[(2)] = inst_17755);

(statearr_17784_17804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17770 === (8))){
var inst_17752 = cljs.core.async.close_BANG_.call(null,to);
var state_17769__$1 = state_17769;
var statearr_17785_17805 = state_17769__$1;
(statearr_17785_17805[(2)] = inst_17752);

(statearr_17785_17805[(1)] = (10));


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
});})(c__17644__auto___17791))
;
return ((function (switch__17554__auto__,c__17644__auto___17791){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_17786 = [null,null,null,null,null,null,null,null];
(statearr_17786[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_17786[(1)] = (1));

return statearr_17786;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_17769){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_17769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e17787){if((e17787 instanceof Object)){
var ex__17558__auto__ = e17787;
var statearr_17788_17806 = state_17769;
(statearr_17788_17806[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17807 = state_17769;
state_17769 = G__17807;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_17769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_17769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___17791))
})();
var state__17646__auto__ = (function (){var statearr_17789 = f__17645__auto__.call(null);
(statearr_17789[(6)] = c__17644__auto___17791);

return statearr_17789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___17791))
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
return (function (p__17808){
var vec__17809 = p__17808;
var v = cljs.core.nth.call(null,vec__17809,(0),null);
var p = cljs.core.nth.call(null,vec__17809,(1),null);
var job = vec__17809;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17644__auto___17980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___17980,res,vec__17809,v,p,job,jobs,results){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___17980,res,vec__17809,v,p,job,jobs,results){
return (function (state_17816){
var state_val_17817 = (state_17816[(1)]);
if((state_val_17817 === (1))){
var state_17816__$1 = state_17816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17816__$1,(2),res,v);
} else {
if((state_val_17817 === (2))){
var inst_17813 = (state_17816[(2)]);
var inst_17814 = cljs.core.async.close_BANG_.call(null,res);
var state_17816__$1 = (function (){var statearr_17818 = state_17816;
(statearr_17818[(7)] = inst_17813);

return statearr_17818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17816__$1,inst_17814);
} else {
return null;
}
}
});})(c__17644__auto___17980,res,vec__17809,v,p,job,jobs,results))
;
return ((function (switch__17554__auto__,c__17644__auto___17980,res,vec__17809,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0 = (function (){
var statearr_17819 = [null,null,null,null,null,null,null,null];
(statearr_17819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__);

(statearr_17819[(1)] = (1));

return statearr_17819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1 = (function (state_17816){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_17816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e17820){if((e17820 instanceof Object)){
var ex__17558__auto__ = e17820;
var statearr_17821_17981 = state_17816;
(statearr_17821_17981[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17982 = state_17816;
state_17816 = G__17982;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = function(state_17816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1.call(this,state_17816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___17980,res,vec__17809,v,p,job,jobs,results))
})();
var state__17646__auto__ = (function (){var statearr_17822 = f__17645__auto__.call(null);
(statearr_17822[(6)] = c__17644__auto___17980);

return statearr_17822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___17980,res,vec__17809,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17823){
var vec__17824 = p__17823;
var v = cljs.core.nth.call(null,vec__17824,(0),null);
var p = cljs.core.nth.call(null,vec__17824,(1),null);
var job = vec__17824;
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
var n__10853__auto___17983 = n;
var __17984 = (0);
while(true){
if((__17984 < n__10853__auto___17983)){
var G__17827_17985 = type;
var G__17827_17986__$1 = (((G__17827_17985 instanceof cljs.core.Keyword))?G__17827_17985.fqn:null);
switch (G__17827_17986__$1) {
case "compute":
var c__17644__auto___17988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17984,c__17644__auto___17988,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (__17984,c__17644__auto___17988,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async){
return (function (state_17840){
var state_val_17841 = (state_17840[(1)]);
if((state_val_17841 === (1))){
var state_17840__$1 = state_17840;
var statearr_17842_17989 = state_17840__$1;
(statearr_17842_17989[(2)] = null);

(statearr_17842_17989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (2))){
var state_17840__$1 = state_17840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17840__$1,(4),jobs);
} else {
if((state_val_17841 === (3))){
var inst_17838 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17840__$1,inst_17838);
} else {
if((state_val_17841 === (4))){
var inst_17830 = (state_17840[(2)]);
var inst_17831 = process.call(null,inst_17830);
var state_17840__$1 = state_17840;
if(cljs.core.truth_(inst_17831)){
var statearr_17843_17990 = state_17840__$1;
(statearr_17843_17990[(1)] = (5));

} else {
var statearr_17844_17991 = state_17840__$1;
(statearr_17844_17991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (5))){
var state_17840__$1 = state_17840;
var statearr_17845_17992 = state_17840__$1;
(statearr_17845_17992[(2)] = null);

(statearr_17845_17992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (6))){
var state_17840__$1 = state_17840;
var statearr_17846_17993 = state_17840__$1;
(statearr_17846_17993[(2)] = null);

(statearr_17846_17993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17841 === (7))){
var inst_17836 = (state_17840[(2)]);
var state_17840__$1 = state_17840;
var statearr_17847_17994 = state_17840__$1;
(statearr_17847_17994[(2)] = inst_17836);

(statearr_17847_17994[(1)] = (3));


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
});})(__17984,c__17644__auto___17988,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async))
;
return ((function (__17984,switch__17554__auto__,c__17644__auto___17988,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0 = (function (){
var statearr_17848 = [null,null,null,null,null,null,null];
(statearr_17848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__);

(statearr_17848[(1)] = (1));

return statearr_17848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1 = (function (state_17840){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_17840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e17849){if((e17849 instanceof Object)){
var ex__17558__auto__ = e17849;
var statearr_17850_17995 = state_17840;
(statearr_17850_17995[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17996 = state_17840;
state_17840 = G__17996;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = function(state_17840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1.call(this,state_17840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__;
})()
;})(__17984,switch__17554__auto__,c__17644__auto___17988,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async))
})();
var state__17646__auto__ = (function (){var statearr_17851 = f__17645__auto__.call(null);
(statearr_17851[(6)] = c__17644__auto___17988);

return statearr_17851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(__17984,c__17644__auto___17988,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async))
);


break;
case "async":
var c__17644__auto___17997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17984,c__17644__auto___17997,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (__17984,c__17644__auto___17997,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async){
return (function (state_17864){
var state_val_17865 = (state_17864[(1)]);
if((state_val_17865 === (1))){
var state_17864__$1 = state_17864;
var statearr_17866_17998 = state_17864__$1;
(statearr_17866_17998[(2)] = null);

(statearr_17866_17998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (2))){
var state_17864__$1 = state_17864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17864__$1,(4),jobs);
} else {
if((state_val_17865 === (3))){
var inst_17862 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17864__$1,inst_17862);
} else {
if((state_val_17865 === (4))){
var inst_17854 = (state_17864[(2)]);
var inst_17855 = async.call(null,inst_17854);
var state_17864__$1 = state_17864;
if(cljs.core.truth_(inst_17855)){
var statearr_17867_17999 = state_17864__$1;
(statearr_17867_17999[(1)] = (5));

} else {
var statearr_17868_18000 = state_17864__$1;
(statearr_17868_18000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (5))){
var state_17864__$1 = state_17864;
var statearr_17869_18001 = state_17864__$1;
(statearr_17869_18001[(2)] = null);

(statearr_17869_18001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (6))){
var state_17864__$1 = state_17864;
var statearr_17870_18002 = state_17864__$1;
(statearr_17870_18002[(2)] = null);

(statearr_17870_18002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (7))){
var inst_17860 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
var statearr_17871_18003 = state_17864__$1;
(statearr_17871_18003[(2)] = inst_17860);

(statearr_17871_18003[(1)] = (3));


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
});})(__17984,c__17644__auto___17997,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async))
;
return ((function (__17984,switch__17554__auto__,c__17644__auto___17997,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0 = (function (){
var statearr_17872 = [null,null,null,null,null,null,null];
(statearr_17872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__);

(statearr_17872[(1)] = (1));

return statearr_17872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1 = (function (state_17864){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_17864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e17873){if((e17873 instanceof Object)){
var ex__17558__auto__ = e17873;
var statearr_17874_18004 = state_17864;
(statearr_17874_18004[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18005 = state_17864;
state_17864 = G__18005;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = function(state_17864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1.call(this,state_17864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__;
})()
;})(__17984,switch__17554__auto__,c__17644__auto___17997,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async))
})();
var state__17646__auto__ = (function (){var statearr_17875 = f__17645__auto__.call(null);
(statearr_17875[(6)] = c__17644__auto___17997);

return statearr_17875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(__17984,c__17644__auto___17997,G__17827_17985,G__17827_17986__$1,n__10853__auto___17983,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17827_17986__$1)].join('')));

}

var G__18006 = (__17984 + (1));
__17984 = G__18006;
continue;
} else {
}
break;
}

var c__17644__auto___18007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___18007,jobs,results,process,async){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___18007,jobs,results,process,async){
return (function (state_17897){
var state_val_17898 = (state_17897[(1)]);
if((state_val_17898 === (1))){
var state_17897__$1 = state_17897;
var statearr_17899_18008 = state_17897__$1;
(statearr_17899_18008[(2)] = null);

(statearr_17899_18008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17898 === (2))){
var state_17897__$1 = state_17897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17897__$1,(4),from);
} else {
if((state_val_17898 === (3))){
var inst_17895 = (state_17897[(2)]);
var state_17897__$1 = state_17897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17897__$1,inst_17895);
} else {
if((state_val_17898 === (4))){
var inst_17878 = (state_17897[(7)]);
var inst_17878__$1 = (state_17897[(2)]);
var inst_17879 = (inst_17878__$1 == null);
var state_17897__$1 = (function (){var statearr_17900 = state_17897;
(statearr_17900[(7)] = inst_17878__$1);

return statearr_17900;
})();
if(cljs.core.truth_(inst_17879)){
var statearr_17901_18009 = state_17897__$1;
(statearr_17901_18009[(1)] = (5));

} else {
var statearr_17902_18010 = state_17897__$1;
(statearr_17902_18010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17898 === (5))){
var inst_17881 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17897__$1 = state_17897;
var statearr_17903_18011 = state_17897__$1;
(statearr_17903_18011[(2)] = inst_17881);

(statearr_17903_18011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17898 === (6))){
var inst_17878 = (state_17897[(7)]);
var inst_17883 = (state_17897[(8)]);
var inst_17883__$1 = cljs.core.async.chan.call(null,(1));
var inst_17884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17885 = [inst_17878,inst_17883__$1];
var inst_17886 = (new cljs.core.PersistentVector(null,2,(5),inst_17884,inst_17885,null));
var state_17897__$1 = (function (){var statearr_17904 = state_17897;
(statearr_17904[(8)] = inst_17883__$1);

return statearr_17904;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17897__$1,(8),jobs,inst_17886);
} else {
if((state_val_17898 === (7))){
var inst_17893 = (state_17897[(2)]);
var state_17897__$1 = state_17897;
var statearr_17905_18012 = state_17897__$1;
(statearr_17905_18012[(2)] = inst_17893);

(statearr_17905_18012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17898 === (8))){
var inst_17883 = (state_17897[(8)]);
var inst_17888 = (state_17897[(2)]);
var state_17897__$1 = (function (){var statearr_17906 = state_17897;
(statearr_17906[(9)] = inst_17888);

return statearr_17906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17897__$1,(9),results,inst_17883);
} else {
if((state_val_17898 === (9))){
var inst_17890 = (state_17897[(2)]);
var state_17897__$1 = (function (){var statearr_17907 = state_17897;
(statearr_17907[(10)] = inst_17890);

return statearr_17907;
})();
var statearr_17908_18013 = state_17897__$1;
(statearr_17908_18013[(2)] = null);

(statearr_17908_18013[(1)] = (2));


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
});})(c__17644__auto___18007,jobs,results,process,async))
;
return ((function (switch__17554__auto__,c__17644__auto___18007,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0 = (function (){
var statearr_17909 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__);

(statearr_17909[(1)] = (1));

return statearr_17909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1 = (function (state_17897){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_17897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e17910){if((e17910 instanceof Object)){
var ex__17558__auto__ = e17910;
var statearr_17911_18014 = state_17897;
(statearr_17911_18014[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18015 = state_17897;
state_17897 = G__18015;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = function(state_17897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1.call(this,state_17897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___18007,jobs,results,process,async))
})();
var state__17646__auto__ = (function (){var statearr_17912 = f__17645__auto__.call(null);
(statearr_17912[(6)] = c__17644__auto___18007);

return statearr_17912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___18007,jobs,results,process,async))
);


var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__,jobs,results,process,async){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__,jobs,results,process,async){
return (function (state_17950){
var state_val_17951 = (state_17950[(1)]);
if((state_val_17951 === (7))){
var inst_17946 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17952_18016 = state_17950__$1;
(statearr_17952_18016[(2)] = inst_17946);

(statearr_17952_18016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (20))){
var state_17950__$1 = state_17950;
var statearr_17953_18017 = state_17950__$1;
(statearr_17953_18017[(2)] = null);

(statearr_17953_18017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (1))){
var state_17950__$1 = state_17950;
var statearr_17954_18018 = state_17950__$1;
(statearr_17954_18018[(2)] = null);

(statearr_17954_18018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (4))){
var inst_17915 = (state_17950[(7)]);
var inst_17915__$1 = (state_17950[(2)]);
var inst_17916 = (inst_17915__$1 == null);
var state_17950__$1 = (function (){var statearr_17955 = state_17950;
(statearr_17955[(7)] = inst_17915__$1);

return statearr_17955;
})();
if(cljs.core.truth_(inst_17916)){
var statearr_17956_18019 = state_17950__$1;
(statearr_17956_18019[(1)] = (5));

} else {
var statearr_17957_18020 = state_17950__$1;
(statearr_17957_18020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (15))){
var inst_17928 = (state_17950[(8)]);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17950__$1,(18),to,inst_17928);
} else {
if((state_val_17951 === (21))){
var inst_17941 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17958_18021 = state_17950__$1;
(statearr_17958_18021[(2)] = inst_17941);

(statearr_17958_18021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (13))){
var inst_17943 = (state_17950[(2)]);
var state_17950__$1 = (function (){var statearr_17959 = state_17950;
(statearr_17959[(9)] = inst_17943);

return statearr_17959;
})();
var statearr_17960_18022 = state_17950__$1;
(statearr_17960_18022[(2)] = null);

(statearr_17960_18022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (6))){
var inst_17915 = (state_17950[(7)]);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17950__$1,(11),inst_17915);
} else {
if((state_val_17951 === (17))){
var inst_17936 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
if(cljs.core.truth_(inst_17936)){
var statearr_17961_18023 = state_17950__$1;
(statearr_17961_18023[(1)] = (19));

} else {
var statearr_17962_18024 = state_17950__$1;
(statearr_17962_18024[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (3))){
var inst_17948 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17950__$1,inst_17948);
} else {
if((state_val_17951 === (12))){
var inst_17925 = (state_17950[(10)]);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17950__$1,(14),inst_17925);
} else {
if((state_val_17951 === (2))){
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17950__$1,(4),results);
} else {
if((state_val_17951 === (19))){
var state_17950__$1 = state_17950;
var statearr_17963_18025 = state_17950__$1;
(statearr_17963_18025[(2)] = null);

(statearr_17963_18025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (11))){
var inst_17925 = (state_17950[(2)]);
var state_17950__$1 = (function (){var statearr_17964 = state_17950;
(statearr_17964[(10)] = inst_17925);

return statearr_17964;
})();
var statearr_17965_18026 = state_17950__$1;
(statearr_17965_18026[(2)] = null);

(statearr_17965_18026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (9))){
var state_17950__$1 = state_17950;
var statearr_17966_18027 = state_17950__$1;
(statearr_17966_18027[(2)] = null);

(statearr_17966_18027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (5))){
var state_17950__$1 = state_17950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17967_18028 = state_17950__$1;
(statearr_17967_18028[(1)] = (8));

} else {
var statearr_17968_18029 = state_17950__$1;
(statearr_17968_18029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (14))){
var inst_17928 = (state_17950[(8)]);
var inst_17930 = (state_17950[(11)]);
var inst_17928__$1 = (state_17950[(2)]);
var inst_17929 = (inst_17928__$1 == null);
var inst_17930__$1 = cljs.core.not.call(null,inst_17929);
var state_17950__$1 = (function (){var statearr_17969 = state_17950;
(statearr_17969[(8)] = inst_17928__$1);

(statearr_17969[(11)] = inst_17930__$1);

return statearr_17969;
})();
if(inst_17930__$1){
var statearr_17970_18030 = state_17950__$1;
(statearr_17970_18030[(1)] = (15));

} else {
var statearr_17971_18031 = state_17950__$1;
(statearr_17971_18031[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (16))){
var inst_17930 = (state_17950[(11)]);
var state_17950__$1 = state_17950;
var statearr_17972_18032 = state_17950__$1;
(statearr_17972_18032[(2)] = inst_17930);

(statearr_17972_18032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (10))){
var inst_17922 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17973_18033 = state_17950__$1;
(statearr_17973_18033[(2)] = inst_17922);

(statearr_17973_18033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (18))){
var inst_17933 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17974_18034 = state_17950__$1;
(statearr_17974_18034[(2)] = inst_17933);

(statearr_17974_18034[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (8))){
var inst_17919 = cljs.core.async.close_BANG_.call(null,to);
var state_17950__$1 = state_17950;
var statearr_17975_18035 = state_17950__$1;
(statearr_17975_18035[(2)] = inst_17919);

(statearr_17975_18035[(1)] = (10));


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
});})(c__17644__auto__,jobs,results,process,async))
;
return ((function (switch__17554__auto__,c__17644__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0 = (function (){
var statearr_17976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__);

(statearr_17976[(1)] = (1));

return statearr_17976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1 = (function (state_17950){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_17950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e17977){if((e17977 instanceof Object)){
var ex__17558__auto__ = e17977;
var statearr_17978_18036 = state_17950;
(statearr_17978_18036[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18037 = state_17950;
state_17950 = G__18037;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__ = function(state_17950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1.call(this,state_17950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__,jobs,results,process,async))
})();
var state__17646__auto__ = (function (){var statearr_17979 = f__17645__auto__.call(null);
(statearr_17979[(6)] = c__17644__auto__);

return statearr_17979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__,jobs,results,process,async))
);

return c__17644__auto__;
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
var G__18039 = arguments.length;
switch (G__18039) {
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
var G__18042 = arguments.length;
switch (G__18042) {
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
var G__18045 = arguments.length;
switch (G__18045) {
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
var c__17644__auto___18094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___18094,tc,fc){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___18094,tc,fc){
return (function (state_18071){
var state_val_18072 = (state_18071[(1)]);
if((state_val_18072 === (7))){
var inst_18067 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18073_18095 = state_18071__$1;
(statearr_18073_18095[(2)] = inst_18067);

(statearr_18073_18095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (1))){
var state_18071__$1 = state_18071;
var statearr_18074_18096 = state_18071__$1;
(statearr_18074_18096[(2)] = null);

(statearr_18074_18096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (4))){
var inst_18048 = (state_18071[(7)]);
var inst_18048__$1 = (state_18071[(2)]);
var inst_18049 = (inst_18048__$1 == null);
var state_18071__$1 = (function (){var statearr_18075 = state_18071;
(statearr_18075[(7)] = inst_18048__$1);

return statearr_18075;
})();
if(cljs.core.truth_(inst_18049)){
var statearr_18076_18097 = state_18071__$1;
(statearr_18076_18097[(1)] = (5));

} else {
var statearr_18077_18098 = state_18071__$1;
(statearr_18077_18098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (13))){
var state_18071__$1 = state_18071;
var statearr_18078_18099 = state_18071__$1;
(statearr_18078_18099[(2)] = null);

(statearr_18078_18099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (6))){
var inst_18048 = (state_18071[(7)]);
var inst_18054 = p.call(null,inst_18048);
var state_18071__$1 = state_18071;
if(cljs.core.truth_(inst_18054)){
var statearr_18079_18100 = state_18071__$1;
(statearr_18079_18100[(1)] = (9));

} else {
var statearr_18080_18101 = state_18071__$1;
(statearr_18080_18101[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (3))){
var inst_18069 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18071__$1,inst_18069);
} else {
if((state_val_18072 === (12))){
var state_18071__$1 = state_18071;
var statearr_18081_18102 = state_18071__$1;
(statearr_18081_18102[(2)] = null);

(statearr_18081_18102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (2))){
var state_18071__$1 = state_18071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18071__$1,(4),ch);
} else {
if((state_val_18072 === (11))){
var inst_18048 = (state_18071[(7)]);
var inst_18058 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18071__$1,(8),inst_18058,inst_18048);
} else {
if((state_val_18072 === (9))){
var state_18071__$1 = state_18071;
var statearr_18082_18103 = state_18071__$1;
(statearr_18082_18103[(2)] = tc);

(statearr_18082_18103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (5))){
var inst_18051 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18052 = cljs.core.async.close_BANG_.call(null,fc);
var state_18071__$1 = (function (){var statearr_18083 = state_18071;
(statearr_18083[(8)] = inst_18051);

return statearr_18083;
})();
var statearr_18084_18104 = state_18071__$1;
(statearr_18084_18104[(2)] = inst_18052);

(statearr_18084_18104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (14))){
var inst_18065 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18085_18105 = state_18071__$1;
(statearr_18085_18105[(2)] = inst_18065);

(statearr_18085_18105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (10))){
var state_18071__$1 = state_18071;
var statearr_18086_18106 = state_18071__$1;
(statearr_18086_18106[(2)] = fc);

(statearr_18086_18106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (8))){
var inst_18060 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
if(cljs.core.truth_(inst_18060)){
var statearr_18087_18107 = state_18071__$1;
(statearr_18087_18107[(1)] = (12));

} else {
var statearr_18088_18108 = state_18071__$1;
(statearr_18088_18108[(1)] = (13));

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
});})(c__17644__auto___18094,tc,fc))
;
return ((function (switch__17554__auto__,c__17644__auto___18094,tc,fc){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_18089 = [null,null,null,null,null,null,null,null,null];
(statearr_18089[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_18089[(1)] = (1));

return statearr_18089;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_18071){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_18071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e18090){if((e18090 instanceof Object)){
var ex__17558__auto__ = e18090;
var statearr_18091_18109 = state_18071;
(statearr_18091_18109[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18110 = state_18071;
state_18071 = G__18110;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_18071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_18071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___18094,tc,fc))
})();
var state__17646__auto__ = (function (){var statearr_18092 = f__17645__auto__.call(null);
(statearr_18092[(6)] = c__17644__auto___18094);

return statearr_18092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___18094,tc,fc))
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
var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__){
return (function (state_18131){
var state_val_18132 = (state_18131[(1)]);
if((state_val_18132 === (7))){
var inst_18127 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18133_18151 = state_18131__$1;
(statearr_18133_18151[(2)] = inst_18127);

(statearr_18133_18151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (1))){
var inst_18111 = init;
var state_18131__$1 = (function (){var statearr_18134 = state_18131;
(statearr_18134[(7)] = inst_18111);

return statearr_18134;
})();
var statearr_18135_18152 = state_18131__$1;
(statearr_18135_18152[(2)] = null);

(statearr_18135_18152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (4))){
var inst_18114 = (state_18131[(8)]);
var inst_18114__$1 = (state_18131[(2)]);
var inst_18115 = (inst_18114__$1 == null);
var state_18131__$1 = (function (){var statearr_18136 = state_18131;
(statearr_18136[(8)] = inst_18114__$1);

return statearr_18136;
})();
if(cljs.core.truth_(inst_18115)){
var statearr_18137_18153 = state_18131__$1;
(statearr_18137_18153[(1)] = (5));

} else {
var statearr_18138_18154 = state_18131__$1;
(statearr_18138_18154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (6))){
var inst_18114 = (state_18131[(8)]);
var inst_18118 = (state_18131[(9)]);
var inst_18111 = (state_18131[(7)]);
var inst_18118__$1 = f.call(null,inst_18111,inst_18114);
var inst_18119 = cljs.core.reduced_QMARK_.call(null,inst_18118__$1);
var state_18131__$1 = (function (){var statearr_18139 = state_18131;
(statearr_18139[(9)] = inst_18118__$1);

return statearr_18139;
})();
if(inst_18119){
var statearr_18140_18155 = state_18131__$1;
(statearr_18140_18155[(1)] = (8));

} else {
var statearr_18141_18156 = state_18131__$1;
(statearr_18141_18156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (3))){
var inst_18129 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18131__$1,inst_18129);
} else {
if((state_val_18132 === (2))){
var state_18131__$1 = state_18131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18131__$1,(4),ch);
} else {
if((state_val_18132 === (9))){
var inst_18118 = (state_18131[(9)]);
var inst_18111 = inst_18118;
var state_18131__$1 = (function (){var statearr_18142 = state_18131;
(statearr_18142[(7)] = inst_18111);

return statearr_18142;
})();
var statearr_18143_18157 = state_18131__$1;
(statearr_18143_18157[(2)] = null);

(statearr_18143_18157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (5))){
var inst_18111 = (state_18131[(7)]);
var state_18131__$1 = state_18131;
var statearr_18144_18158 = state_18131__$1;
(statearr_18144_18158[(2)] = inst_18111);

(statearr_18144_18158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (10))){
var inst_18125 = (state_18131[(2)]);
var state_18131__$1 = state_18131;
var statearr_18145_18159 = state_18131__$1;
(statearr_18145_18159[(2)] = inst_18125);

(statearr_18145_18159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18132 === (8))){
var inst_18118 = (state_18131[(9)]);
var inst_18121 = cljs.core.deref.call(null,inst_18118);
var state_18131__$1 = state_18131;
var statearr_18146_18160 = state_18131__$1;
(statearr_18146_18160[(2)] = inst_18121);

(statearr_18146_18160[(1)] = (10));


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
});})(c__17644__auto__))
;
return ((function (switch__17554__auto__,c__17644__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17555__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17555__auto____0 = (function (){
var statearr_18147 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18147[(0)] = cljs$core$async$reduce_$_state_machine__17555__auto__);

(statearr_18147[(1)] = (1));

return statearr_18147;
});
var cljs$core$async$reduce_$_state_machine__17555__auto____1 = (function (state_18131){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_18131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e18148){if((e18148 instanceof Object)){
var ex__17558__auto__ = e18148;
var statearr_18149_18161 = state_18131;
(statearr_18149_18161[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18162 = state_18131;
state_18131 = G__18162;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17555__auto__ = function(state_18131){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17555__auto____1.call(this,state_18131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17555__auto____0;
cljs$core$async$reduce_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17555__auto____1;
return cljs$core$async$reduce_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__))
})();
var state__17646__auto__ = (function (){var statearr_18150 = f__17645__auto__.call(null);
(statearr_18150[(6)] = c__17644__auto__);

return statearr_18150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__))
);

return c__17644__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__,f__$1){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__,f__$1){
return (function (state_18168){
var state_val_18169 = (state_18168[(1)]);
if((state_val_18169 === (1))){
var inst_18163 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18168__$1 = state_18168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18168__$1,(2),inst_18163);
} else {
if((state_val_18169 === (2))){
var inst_18165 = (state_18168[(2)]);
var inst_18166 = f__$1.call(null,inst_18165);
var state_18168__$1 = state_18168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18168__$1,inst_18166);
} else {
return null;
}
}
});})(c__17644__auto__,f__$1))
;
return ((function (switch__17554__auto__,c__17644__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17555__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17555__auto____0 = (function (){
var statearr_18170 = [null,null,null,null,null,null,null];
(statearr_18170[(0)] = cljs$core$async$transduce_$_state_machine__17555__auto__);

(statearr_18170[(1)] = (1));

return statearr_18170;
});
var cljs$core$async$transduce_$_state_machine__17555__auto____1 = (function (state_18168){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_18168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e18171){if((e18171 instanceof Object)){
var ex__17558__auto__ = e18171;
var statearr_18172_18174 = state_18168;
(statearr_18172_18174[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18175 = state_18168;
state_18168 = G__18175;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17555__auto__ = function(state_18168){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17555__auto____1.call(this,state_18168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17555__auto____0;
cljs$core$async$transduce_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17555__auto____1;
return cljs$core$async$transduce_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__,f__$1))
})();
var state__17646__auto__ = (function (){var statearr_18173 = f__17645__auto__.call(null);
(statearr_18173[(6)] = c__17644__auto__);

return statearr_18173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__,f__$1))
);

return c__17644__auto__;
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
var G__18177 = arguments.length;
switch (G__18177) {
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
var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__){
return (function (state_18202){
var state_val_18203 = (state_18202[(1)]);
if((state_val_18203 === (7))){
var inst_18184 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
var statearr_18204_18225 = state_18202__$1;
(statearr_18204_18225[(2)] = inst_18184);

(statearr_18204_18225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (1))){
var inst_18178 = cljs.core.seq.call(null,coll);
var inst_18179 = inst_18178;
var state_18202__$1 = (function (){var statearr_18205 = state_18202;
(statearr_18205[(7)] = inst_18179);

return statearr_18205;
})();
var statearr_18206_18226 = state_18202__$1;
(statearr_18206_18226[(2)] = null);

(statearr_18206_18226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (4))){
var inst_18179 = (state_18202[(7)]);
var inst_18182 = cljs.core.first.call(null,inst_18179);
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18202__$1,(7),ch,inst_18182);
} else {
if((state_val_18203 === (13))){
var inst_18196 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
var statearr_18207_18227 = state_18202__$1;
(statearr_18207_18227[(2)] = inst_18196);

(statearr_18207_18227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (6))){
var inst_18187 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
if(cljs.core.truth_(inst_18187)){
var statearr_18208_18228 = state_18202__$1;
(statearr_18208_18228[(1)] = (8));

} else {
var statearr_18209_18229 = state_18202__$1;
(statearr_18209_18229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (3))){
var inst_18200 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18202__$1,inst_18200);
} else {
if((state_val_18203 === (12))){
var state_18202__$1 = state_18202;
var statearr_18210_18230 = state_18202__$1;
(statearr_18210_18230[(2)] = null);

(statearr_18210_18230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (2))){
var inst_18179 = (state_18202[(7)]);
var state_18202__$1 = state_18202;
if(cljs.core.truth_(inst_18179)){
var statearr_18211_18231 = state_18202__$1;
(statearr_18211_18231[(1)] = (4));

} else {
var statearr_18212_18232 = state_18202__$1;
(statearr_18212_18232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (11))){
var inst_18193 = cljs.core.async.close_BANG_.call(null,ch);
var state_18202__$1 = state_18202;
var statearr_18213_18233 = state_18202__$1;
(statearr_18213_18233[(2)] = inst_18193);

(statearr_18213_18233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (9))){
var state_18202__$1 = state_18202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18214_18234 = state_18202__$1;
(statearr_18214_18234[(1)] = (11));

} else {
var statearr_18215_18235 = state_18202__$1;
(statearr_18215_18235[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (5))){
var inst_18179 = (state_18202[(7)]);
var state_18202__$1 = state_18202;
var statearr_18216_18236 = state_18202__$1;
(statearr_18216_18236[(2)] = inst_18179);

(statearr_18216_18236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (10))){
var inst_18198 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
var statearr_18217_18237 = state_18202__$1;
(statearr_18217_18237[(2)] = inst_18198);

(statearr_18217_18237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (8))){
var inst_18179 = (state_18202[(7)]);
var inst_18189 = cljs.core.next.call(null,inst_18179);
var inst_18179__$1 = inst_18189;
var state_18202__$1 = (function (){var statearr_18218 = state_18202;
(statearr_18218[(7)] = inst_18179__$1);

return statearr_18218;
})();
var statearr_18219_18238 = state_18202__$1;
(statearr_18219_18238[(2)] = null);

(statearr_18219_18238[(1)] = (2));


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
});})(c__17644__auto__))
;
return ((function (switch__17554__auto__,c__17644__auto__){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_18220 = [null,null,null,null,null,null,null,null];
(statearr_18220[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_18220[(1)] = (1));

return statearr_18220;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_18202){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_18202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e18221){if((e18221 instanceof Object)){
var ex__17558__auto__ = e18221;
var statearr_18222_18239 = state_18202;
(statearr_18222_18239[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18240 = state_18202;
state_18202 = G__18240;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_18202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_18202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__))
})();
var state__17646__auto__ = (function (){var statearr_18223 = f__17645__auto__.call(null);
(statearr_18223[(6)] = c__17644__auto__);

return statearr_18223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__))
);

return c__17644__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18241 = (function (ch,cs,meta18242){
this.ch = ch;
this.cs = cs;
this.meta18242 = meta18242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18243,meta18242__$1){
var self__ = this;
var _18243__$1 = this;
return (new cljs.core.async.t_cljs$core$async18241(self__.ch,self__.cs,meta18242__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18243){
var self__ = this;
var _18243__$1 = this;
return self__.meta18242;
});})(cs))
;

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18241.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18242","meta18242",-1320258842,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18241";

cljs.core.async.t_cljs$core$async18241.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18241");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18241 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18241(ch__$1,cs__$1,meta18242){
return (new cljs.core.async.t_cljs$core$async18241(ch__$1,cs__$1,meta18242));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18241(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17644__auto___18463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___18463,cs,m,dchan,dctr,done){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___18463,cs,m,dchan,dctr,done){
return (function (state_18378){
var state_val_18379 = (state_18378[(1)]);
if((state_val_18379 === (7))){
var inst_18374 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18380_18464 = state_18378__$1;
(statearr_18380_18464[(2)] = inst_18374);

(statearr_18380_18464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (20))){
var inst_18277 = (state_18378[(7)]);
var inst_18289 = cljs.core.first.call(null,inst_18277);
var inst_18290 = cljs.core.nth.call(null,inst_18289,(0),null);
var inst_18291 = cljs.core.nth.call(null,inst_18289,(1),null);
var state_18378__$1 = (function (){var statearr_18381 = state_18378;
(statearr_18381[(8)] = inst_18290);

return statearr_18381;
})();
if(cljs.core.truth_(inst_18291)){
var statearr_18382_18465 = state_18378__$1;
(statearr_18382_18465[(1)] = (22));

} else {
var statearr_18383_18466 = state_18378__$1;
(statearr_18383_18466[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (27))){
var inst_18321 = (state_18378[(9)]);
var inst_18246 = (state_18378[(10)]);
var inst_18326 = (state_18378[(11)]);
var inst_18319 = (state_18378[(12)]);
var inst_18326__$1 = cljs.core._nth.call(null,inst_18319,inst_18321);
var inst_18327 = cljs.core.async.put_BANG_.call(null,inst_18326__$1,inst_18246,done);
var state_18378__$1 = (function (){var statearr_18384 = state_18378;
(statearr_18384[(11)] = inst_18326__$1);

return statearr_18384;
})();
if(cljs.core.truth_(inst_18327)){
var statearr_18385_18467 = state_18378__$1;
(statearr_18385_18467[(1)] = (30));

} else {
var statearr_18386_18468 = state_18378__$1;
(statearr_18386_18468[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (1))){
var state_18378__$1 = state_18378;
var statearr_18387_18469 = state_18378__$1;
(statearr_18387_18469[(2)] = null);

(statearr_18387_18469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (24))){
var inst_18277 = (state_18378[(7)]);
var inst_18296 = (state_18378[(2)]);
var inst_18297 = cljs.core.next.call(null,inst_18277);
var inst_18255 = inst_18297;
var inst_18256 = null;
var inst_18257 = (0);
var inst_18258 = (0);
var state_18378__$1 = (function (){var statearr_18388 = state_18378;
(statearr_18388[(13)] = inst_18296);

(statearr_18388[(14)] = inst_18255);

(statearr_18388[(15)] = inst_18258);

(statearr_18388[(16)] = inst_18256);

(statearr_18388[(17)] = inst_18257);

return statearr_18388;
})();
var statearr_18389_18470 = state_18378__$1;
(statearr_18389_18470[(2)] = null);

(statearr_18389_18470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (39))){
var state_18378__$1 = state_18378;
var statearr_18393_18471 = state_18378__$1;
(statearr_18393_18471[(2)] = null);

(statearr_18393_18471[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (4))){
var inst_18246 = (state_18378[(10)]);
var inst_18246__$1 = (state_18378[(2)]);
var inst_18247 = (inst_18246__$1 == null);
var state_18378__$1 = (function (){var statearr_18394 = state_18378;
(statearr_18394[(10)] = inst_18246__$1);

return statearr_18394;
})();
if(cljs.core.truth_(inst_18247)){
var statearr_18395_18472 = state_18378__$1;
(statearr_18395_18472[(1)] = (5));

} else {
var statearr_18396_18473 = state_18378__$1;
(statearr_18396_18473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (15))){
var inst_18255 = (state_18378[(14)]);
var inst_18258 = (state_18378[(15)]);
var inst_18256 = (state_18378[(16)]);
var inst_18257 = (state_18378[(17)]);
var inst_18273 = (state_18378[(2)]);
var inst_18274 = (inst_18258 + (1));
var tmp18390 = inst_18255;
var tmp18391 = inst_18256;
var tmp18392 = inst_18257;
var inst_18255__$1 = tmp18390;
var inst_18256__$1 = tmp18391;
var inst_18257__$1 = tmp18392;
var inst_18258__$1 = inst_18274;
var state_18378__$1 = (function (){var statearr_18397 = state_18378;
(statearr_18397[(14)] = inst_18255__$1);

(statearr_18397[(15)] = inst_18258__$1);

(statearr_18397[(18)] = inst_18273);

(statearr_18397[(16)] = inst_18256__$1);

(statearr_18397[(17)] = inst_18257__$1);

return statearr_18397;
})();
var statearr_18398_18474 = state_18378__$1;
(statearr_18398_18474[(2)] = null);

(statearr_18398_18474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (21))){
var inst_18300 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18402_18475 = state_18378__$1;
(statearr_18402_18475[(2)] = inst_18300);

(statearr_18402_18475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (31))){
var inst_18326 = (state_18378[(11)]);
var inst_18330 = done.call(null,null);
var inst_18331 = cljs.core.async.untap_STAR_.call(null,m,inst_18326);
var state_18378__$1 = (function (){var statearr_18403 = state_18378;
(statearr_18403[(19)] = inst_18330);

return statearr_18403;
})();
var statearr_18404_18476 = state_18378__$1;
(statearr_18404_18476[(2)] = inst_18331);

(statearr_18404_18476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (32))){
var inst_18321 = (state_18378[(9)]);
var inst_18318 = (state_18378[(20)]);
var inst_18320 = (state_18378[(21)]);
var inst_18319 = (state_18378[(12)]);
var inst_18333 = (state_18378[(2)]);
var inst_18334 = (inst_18321 + (1));
var tmp18399 = inst_18318;
var tmp18400 = inst_18320;
var tmp18401 = inst_18319;
var inst_18318__$1 = tmp18399;
var inst_18319__$1 = tmp18401;
var inst_18320__$1 = tmp18400;
var inst_18321__$1 = inst_18334;
var state_18378__$1 = (function (){var statearr_18405 = state_18378;
(statearr_18405[(22)] = inst_18333);

(statearr_18405[(9)] = inst_18321__$1);

(statearr_18405[(20)] = inst_18318__$1);

(statearr_18405[(21)] = inst_18320__$1);

(statearr_18405[(12)] = inst_18319__$1);

return statearr_18405;
})();
var statearr_18406_18477 = state_18378__$1;
(statearr_18406_18477[(2)] = null);

(statearr_18406_18477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (40))){
var inst_18346 = (state_18378[(23)]);
var inst_18350 = done.call(null,null);
var inst_18351 = cljs.core.async.untap_STAR_.call(null,m,inst_18346);
var state_18378__$1 = (function (){var statearr_18407 = state_18378;
(statearr_18407[(24)] = inst_18350);

return statearr_18407;
})();
var statearr_18408_18478 = state_18378__$1;
(statearr_18408_18478[(2)] = inst_18351);

(statearr_18408_18478[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (33))){
var inst_18337 = (state_18378[(25)]);
var inst_18339 = cljs.core.chunked_seq_QMARK_.call(null,inst_18337);
var state_18378__$1 = state_18378;
if(inst_18339){
var statearr_18409_18479 = state_18378__$1;
(statearr_18409_18479[(1)] = (36));

} else {
var statearr_18410_18480 = state_18378__$1;
(statearr_18410_18480[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (13))){
var inst_18267 = (state_18378[(26)]);
var inst_18270 = cljs.core.async.close_BANG_.call(null,inst_18267);
var state_18378__$1 = state_18378;
var statearr_18411_18481 = state_18378__$1;
(statearr_18411_18481[(2)] = inst_18270);

(statearr_18411_18481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (22))){
var inst_18290 = (state_18378[(8)]);
var inst_18293 = cljs.core.async.close_BANG_.call(null,inst_18290);
var state_18378__$1 = state_18378;
var statearr_18412_18482 = state_18378__$1;
(statearr_18412_18482[(2)] = inst_18293);

(statearr_18412_18482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (36))){
var inst_18337 = (state_18378[(25)]);
var inst_18341 = cljs.core.chunk_first.call(null,inst_18337);
var inst_18342 = cljs.core.chunk_rest.call(null,inst_18337);
var inst_18343 = cljs.core.count.call(null,inst_18341);
var inst_18318 = inst_18342;
var inst_18319 = inst_18341;
var inst_18320 = inst_18343;
var inst_18321 = (0);
var state_18378__$1 = (function (){var statearr_18413 = state_18378;
(statearr_18413[(9)] = inst_18321);

(statearr_18413[(20)] = inst_18318);

(statearr_18413[(21)] = inst_18320);

(statearr_18413[(12)] = inst_18319);

return statearr_18413;
})();
var statearr_18414_18483 = state_18378__$1;
(statearr_18414_18483[(2)] = null);

(statearr_18414_18483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (41))){
var inst_18337 = (state_18378[(25)]);
var inst_18353 = (state_18378[(2)]);
var inst_18354 = cljs.core.next.call(null,inst_18337);
var inst_18318 = inst_18354;
var inst_18319 = null;
var inst_18320 = (0);
var inst_18321 = (0);
var state_18378__$1 = (function (){var statearr_18415 = state_18378;
(statearr_18415[(27)] = inst_18353);

(statearr_18415[(9)] = inst_18321);

(statearr_18415[(20)] = inst_18318);

(statearr_18415[(21)] = inst_18320);

(statearr_18415[(12)] = inst_18319);

return statearr_18415;
})();
var statearr_18416_18484 = state_18378__$1;
(statearr_18416_18484[(2)] = null);

(statearr_18416_18484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (43))){
var state_18378__$1 = state_18378;
var statearr_18417_18485 = state_18378__$1;
(statearr_18417_18485[(2)] = null);

(statearr_18417_18485[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (29))){
var inst_18362 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18418_18486 = state_18378__$1;
(statearr_18418_18486[(2)] = inst_18362);

(statearr_18418_18486[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (44))){
var inst_18371 = (state_18378[(2)]);
var state_18378__$1 = (function (){var statearr_18419 = state_18378;
(statearr_18419[(28)] = inst_18371);

return statearr_18419;
})();
var statearr_18420_18487 = state_18378__$1;
(statearr_18420_18487[(2)] = null);

(statearr_18420_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (6))){
var inst_18310 = (state_18378[(29)]);
var inst_18309 = cljs.core.deref.call(null,cs);
var inst_18310__$1 = cljs.core.keys.call(null,inst_18309);
var inst_18311 = cljs.core.count.call(null,inst_18310__$1);
var inst_18312 = cljs.core.reset_BANG_.call(null,dctr,inst_18311);
var inst_18317 = cljs.core.seq.call(null,inst_18310__$1);
var inst_18318 = inst_18317;
var inst_18319 = null;
var inst_18320 = (0);
var inst_18321 = (0);
var state_18378__$1 = (function (){var statearr_18421 = state_18378;
(statearr_18421[(9)] = inst_18321);

(statearr_18421[(20)] = inst_18318);

(statearr_18421[(29)] = inst_18310__$1);

(statearr_18421[(30)] = inst_18312);

(statearr_18421[(21)] = inst_18320);

(statearr_18421[(12)] = inst_18319);

return statearr_18421;
})();
var statearr_18422_18488 = state_18378__$1;
(statearr_18422_18488[(2)] = null);

(statearr_18422_18488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (28))){
var inst_18318 = (state_18378[(20)]);
var inst_18337 = (state_18378[(25)]);
var inst_18337__$1 = cljs.core.seq.call(null,inst_18318);
var state_18378__$1 = (function (){var statearr_18423 = state_18378;
(statearr_18423[(25)] = inst_18337__$1);

return statearr_18423;
})();
if(inst_18337__$1){
var statearr_18424_18489 = state_18378__$1;
(statearr_18424_18489[(1)] = (33));

} else {
var statearr_18425_18490 = state_18378__$1;
(statearr_18425_18490[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (25))){
var inst_18321 = (state_18378[(9)]);
var inst_18320 = (state_18378[(21)]);
var inst_18323 = (inst_18321 < inst_18320);
var inst_18324 = inst_18323;
var state_18378__$1 = state_18378;
if(cljs.core.truth_(inst_18324)){
var statearr_18426_18491 = state_18378__$1;
(statearr_18426_18491[(1)] = (27));

} else {
var statearr_18427_18492 = state_18378__$1;
(statearr_18427_18492[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (34))){
var state_18378__$1 = state_18378;
var statearr_18428_18493 = state_18378__$1;
(statearr_18428_18493[(2)] = null);

(statearr_18428_18493[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (17))){
var state_18378__$1 = state_18378;
var statearr_18429_18494 = state_18378__$1;
(statearr_18429_18494[(2)] = null);

(statearr_18429_18494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (3))){
var inst_18376 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18378__$1,inst_18376);
} else {
if((state_val_18379 === (12))){
var inst_18305 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18430_18495 = state_18378__$1;
(statearr_18430_18495[(2)] = inst_18305);

(statearr_18430_18495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (2))){
var state_18378__$1 = state_18378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18378__$1,(4),ch);
} else {
if((state_val_18379 === (23))){
var state_18378__$1 = state_18378;
var statearr_18431_18496 = state_18378__$1;
(statearr_18431_18496[(2)] = null);

(statearr_18431_18496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (35))){
var inst_18360 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18432_18497 = state_18378__$1;
(statearr_18432_18497[(2)] = inst_18360);

(statearr_18432_18497[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (19))){
var inst_18277 = (state_18378[(7)]);
var inst_18281 = cljs.core.chunk_first.call(null,inst_18277);
var inst_18282 = cljs.core.chunk_rest.call(null,inst_18277);
var inst_18283 = cljs.core.count.call(null,inst_18281);
var inst_18255 = inst_18282;
var inst_18256 = inst_18281;
var inst_18257 = inst_18283;
var inst_18258 = (0);
var state_18378__$1 = (function (){var statearr_18433 = state_18378;
(statearr_18433[(14)] = inst_18255);

(statearr_18433[(15)] = inst_18258);

(statearr_18433[(16)] = inst_18256);

(statearr_18433[(17)] = inst_18257);

return statearr_18433;
})();
var statearr_18434_18498 = state_18378__$1;
(statearr_18434_18498[(2)] = null);

(statearr_18434_18498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (11))){
var inst_18255 = (state_18378[(14)]);
var inst_18277 = (state_18378[(7)]);
var inst_18277__$1 = cljs.core.seq.call(null,inst_18255);
var state_18378__$1 = (function (){var statearr_18435 = state_18378;
(statearr_18435[(7)] = inst_18277__$1);

return statearr_18435;
})();
if(inst_18277__$1){
var statearr_18436_18499 = state_18378__$1;
(statearr_18436_18499[(1)] = (16));

} else {
var statearr_18437_18500 = state_18378__$1;
(statearr_18437_18500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (9))){
var inst_18307 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18438_18501 = state_18378__$1;
(statearr_18438_18501[(2)] = inst_18307);

(statearr_18438_18501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (5))){
var inst_18253 = cljs.core.deref.call(null,cs);
var inst_18254 = cljs.core.seq.call(null,inst_18253);
var inst_18255 = inst_18254;
var inst_18256 = null;
var inst_18257 = (0);
var inst_18258 = (0);
var state_18378__$1 = (function (){var statearr_18439 = state_18378;
(statearr_18439[(14)] = inst_18255);

(statearr_18439[(15)] = inst_18258);

(statearr_18439[(16)] = inst_18256);

(statearr_18439[(17)] = inst_18257);

return statearr_18439;
})();
var statearr_18440_18502 = state_18378__$1;
(statearr_18440_18502[(2)] = null);

(statearr_18440_18502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (14))){
var state_18378__$1 = state_18378;
var statearr_18441_18503 = state_18378__$1;
(statearr_18441_18503[(2)] = null);

(statearr_18441_18503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (45))){
var inst_18368 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18442_18504 = state_18378__$1;
(statearr_18442_18504[(2)] = inst_18368);

(statearr_18442_18504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (26))){
var inst_18310 = (state_18378[(29)]);
var inst_18364 = (state_18378[(2)]);
var inst_18365 = cljs.core.seq.call(null,inst_18310);
var state_18378__$1 = (function (){var statearr_18443 = state_18378;
(statearr_18443[(31)] = inst_18364);

return statearr_18443;
})();
if(inst_18365){
var statearr_18444_18505 = state_18378__$1;
(statearr_18444_18505[(1)] = (42));

} else {
var statearr_18445_18506 = state_18378__$1;
(statearr_18445_18506[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (16))){
var inst_18277 = (state_18378[(7)]);
var inst_18279 = cljs.core.chunked_seq_QMARK_.call(null,inst_18277);
var state_18378__$1 = state_18378;
if(inst_18279){
var statearr_18446_18507 = state_18378__$1;
(statearr_18446_18507[(1)] = (19));

} else {
var statearr_18447_18508 = state_18378__$1;
(statearr_18447_18508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (38))){
var inst_18357 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18448_18509 = state_18378__$1;
(statearr_18448_18509[(2)] = inst_18357);

(statearr_18448_18509[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (30))){
var state_18378__$1 = state_18378;
var statearr_18449_18510 = state_18378__$1;
(statearr_18449_18510[(2)] = null);

(statearr_18449_18510[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (10))){
var inst_18258 = (state_18378[(15)]);
var inst_18256 = (state_18378[(16)]);
var inst_18266 = cljs.core._nth.call(null,inst_18256,inst_18258);
var inst_18267 = cljs.core.nth.call(null,inst_18266,(0),null);
var inst_18268 = cljs.core.nth.call(null,inst_18266,(1),null);
var state_18378__$1 = (function (){var statearr_18450 = state_18378;
(statearr_18450[(26)] = inst_18267);

return statearr_18450;
})();
if(cljs.core.truth_(inst_18268)){
var statearr_18451_18511 = state_18378__$1;
(statearr_18451_18511[(1)] = (13));

} else {
var statearr_18452_18512 = state_18378__$1;
(statearr_18452_18512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (18))){
var inst_18303 = (state_18378[(2)]);
var state_18378__$1 = state_18378;
var statearr_18453_18513 = state_18378__$1;
(statearr_18453_18513[(2)] = inst_18303);

(statearr_18453_18513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (42))){
var state_18378__$1 = state_18378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18378__$1,(45),dchan);
} else {
if((state_val_18379 === (37))){
var inst_18337 = (state_18378[(25)]);
var inst_18246 = (state_18378[(10)]);
var inst_18346 = (state_18378[(23)]);
var inst_18346__$1 = cljs.core.first.call(null,inst_18337);
var inst_18347 = cljs.core.async.put_BANG_.call(null,inst_18346__$1,inst_18246,done);
var state_18378__$1 = (function (){var statearr_18454 = state_18378;
(statearr_18454[(23)] = inst_18346__$1);

return statearr_18454;
})();
if(cljs.core.truth_(inst_18347)){
var statearr_18455_18514 = state_18378__$1;
(statearr_18455_18514[(1)] = (39));

} else {
var statearr_18456_18515 = state_18378__$1;
(statearr_18456_18515[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18379 === (8))){
var inst_18258 = (state_18378[(15)]);
var inst_18257 = (state_18378[(17)]);
var inst_18260 = (inst_18258 < inst_18257);
var inst_18261 = inst_18260;
var state_18378__$1 = state_18378;
if(cljs.core.truth_(inst_18261)){
var statearr_18457_18516 = state_18378__$1;
(statearr_18457_18516[(1)] = (10));

} else {
var statearr_18458_18517 = state_18378__$1;
(statearr_18458_18517[(1)] = (11));

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
});})(c__17644__auto___18463,cs,m,dchan,dctr,done))
;
return ((function (switch__17554__auto__,c__17644__auto___18463,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17555__auto__ = null;
var cljs$core$async$mult_$_state_machine__17555__auto____0 = (function (){
var statearr_18459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18459[(0)] = cljs$core$async$mult_$_state_machine__17555__auto__);

(statearr_18459[(1)] = (1));

return statearr_18459;
});
var cljs$core$async$mult_$_state_machine__17555__auto____1 = (function (state_18378){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_18378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e18460){if((e18460 instanceof Object)){
var ex__17558__auto__ = e18460;
var statearr_18461_18518 = state_18378;
(statearr_18461_18518[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18519 = state_18378;
state_18378 = G__18519;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17555__auto__ = function(state_18378){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17555__auto____1.call(this,state_18378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17555__auto____0;
cljs$core$async$mult_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17555__auto____1;
return cljs$core$async$mult_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___18463,cs,m,dchan,dctr,done))
})();
var state__17646__auto__ = (function (){var statearr_18462 = f__17645__auto__.call(null);
(statearr_18462[(6)] = c__17644__auto___18463);

return statearr_18462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___18463,cs,m,dchan,dctr,done))
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
var G__18521 = arguments.length;
switch (G__18521) {
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
var len__11087__auto___18533 = arguments.length;
var i__11088__auto___18534 = (0);
while(true){
if((i__11088__auto___18534 < len__11087__auto___18533)){
args__11094__auto__.push((arguments[i__11088__auto___18534]));

var G__18535 = (i__11088__auto___18534 + (1));
i__11088__auto___18534 = G__18535;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((3) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18527){
var map__18528 = p__18527;
var map__18528__$1 = ((((!((map__18528 == null)))?((((map__18528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18528):map__18528);
var opts = map__18528__$1;
var statearr_18530_18536 = state;
(statearr_18530_18536[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__18528,map__18528__$1,opts){
return (function (val){
var statearr_18531_18537 = state;
(statearr_18531_18537[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18528,map__18528__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_18532_18538 = state;
(statearr_18532_18538[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18523){
var G__18524 = cljs.core.first.call(null,seq18523);
var seq18523__$1 = cljs.core.next.call(null,seq18523);
var G__18525 = cljs.core.first.call(null,seq18523__$1);
var seq18523__$2 = cljs.core.next.call(null,seq18523__$1);
var G__18526 = cljs.core.first.call(null,seq18523__$2);
var seq18523__$3 = cljs.core.next.call(null,seq18523__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18524,G__18525,G__18526,seq18523__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18539 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18540){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18540 = meta18540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18541,meta18540__$1){
var self__ = this;
var _18541__$1 = this;
return (new cljs.core.async.t_cljs$core$async18539(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18540__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18541){
var self__ = this;
var _18541__$1 = this;
return self__.meta18540;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18539.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18539.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta18540","meta18540",1496659060,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18539";

cljs.core.async.t_cljs$core$async18539.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18539");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18539 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18539(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18540){
return (new cljs.core.async.t_cljs$core$async18539(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18540));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18539(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17644__auto___18703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___18703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___18703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18643){
var state_val_18644 = (state_18643[(1)]);
if((state_val_18644 === (7))){
var inst_18558 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18645_18704 = state_18643__$1;
(statearr_18645_18704[(2)] = inst_18558);

(statearr_18645_18704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (20))){
var inst_18570 = (state_18643[(7)]);
var state_18643__$1 = state_18643;
var statearr_18646_18705 = state_18643__$1;
(statearr_18646_18705[(2)] = inst_18570);

(statearr_18646_18705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (27))){
var state_18643__$1 = state_18643;
var statearr_18647_18706 = state_18643__$1;
(statearr_18647_18706[(2)] = null);

(statearr_18647_18706[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (1))){
var inst_18545 = (state_18643[(8)]);
var inst_18545__$1 = calc_state.call(null);
var inst_18547 = (inst_18545__$1 == null);
var inst_18548 = cljs.core.not.call(null,inst_18547);
var state_18643__$1 = (function (){var statearr_18648 = state_18643;
(statearr_18648[(8)] = inst_18545__$1);

return statearr_18648;
})();
if(inst_18548){
var statearr_18649_18707 = state_18643__$1;
(statearr_18649_18707[(1)] = (2));

} else {
var statearr_18650_18708 = state_18643__$1;
(statearr_18650_18708[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (24))){
var inst_18603 = (state_18643[(9)]);
var inst_18594 = (state_18643[(10)]);
var inst_18617 = (state_18643[(11)]);
var inst_18617__$1 = inst_18594.call(null,inst_18603);
var state_18643__$1 = (function (){var statearr_18651 = state_18643;
(statearr_18651[(11)] = inst_18617__$1);

return statearr_18651;
})();
if(cljs.core.truth_(inst_18617__$1)){
var statearr_18652_18709 = state_18643__$1;
(statearr_18652_18709[(1)] = (29));

} else {
var statearr_18653_18710 = state_18643__$1;
(statearr_18653_18710[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (4))){
var inst_18561 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18561)){
var statearr_18654_18711 = state_18643__$1;
(statearr_18654_18711[(1)] = (8));

} else {
var statearr_18655_18712 = state_18643__$1;
(statearr_18655_18712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (15))){
var inst_18588 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18588)){
var statearr_18656_18713 = state_18643__$1;
(statearr_18656_18713[(1)] = (19));

} else {
var statearr_18657_18714 = state_18643__$1;
(statearr_18657_18714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (21))){
var inst_18593 = (state_18643[(12)]);
var inst_18593__$1 = (state_18643[(2)]);
var inst_18594 = cljs.core.get.call(null,inst_18593__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18595 = cljs.core.get.call(null,inst_18593__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18596 = cljs.core.get.call(null,inst_18593__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18643__$1 = (function (){var statearr_18658 = state_18643;
(statearr_18658[(12)] = inst_18593__$1);

(statearr_18658[(13)] = inst_18595);

(statearr_18658[(10)] = inst_18594);

return statearr_18658;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18643__$1,(22),inst_18596);
} else {
if((state_val_18644 === (31))){
var inst_18625 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18625)){
var statearr_18659_18715 = state_18643__$1;
(statearr_18659_18715[(1)] = (32));

} else {
var statearr_18660_18716 = state_18643__$1;
(statearr_18660_18716[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (32))){
var inst_18602 = (state_18643[(14)]);
var state_18643__$1 = state_18643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18643__$1,(35),out,inst_18602);
} else {
if((state_val_18644 === (33))){
var inst_18593 = (state_18643[(12)]);
var inst_18570 = inst_18593;
var state_18643__$1 = (function (){var statearr_18661 = state_18643;
(statearr_18661[(7)] = inst_18570);

return statearr_18661;
})();
var statearr_18662_18717 = state_18643__$1;
(statearr_18662_18717[(2)] = null);

(statearr_18662_18717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (13))){
var inst_18570 = (state_18643[(7)]);
var inst_18577 = inst_18570.cljs$lang$protocol_mask$partition0$;
var inst_18578 = (inst_18577 & (64));
var inst_18579 = inst_18570.cljs$core$ISeq$;
var inst_18580 = (cljs.core.PROTOCOL_SENTINEL === inst_18579);
var inst_18581 = (inst_18578) || (inst_18580);
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18581)){
var statearr_18663_18718 = state_18643__$1;
(statearr_18663_18718[(1)] = (16));

} else {
var statearr_18664_18719 = state_18643__$1;
(statearr_18664_18719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (22))){
var inst_18602 = (state_18643[(14)]);
var inst_18603 = (state_18643[(9)]);
var inst_18601 = (state_18643[(2)]);
var inst_18602__$1 = cljs.core.nth.call(null,inst_18601,(0),null);
var inst_18603__$1 = cljs.core.nth.call(null,inst_18601,(1),null);
var inst_18604 = (inst_18602__$1 == null);
var inst_18605 = cljs.core._EQ_.call(null,inst_18603__$1,change);
var inst_18606 = (inst_18604) || (inst_18605);
var state_18643__$1 = (function (){var statearr_18665 = state_18643;
(statearr_18665[(14)] = inst_18602__$1);

(statearr_18665[(9)] = inst_18603__$1);

return statearr_18665;
})();
if(cljs.core.truth_(inst_18606)){
var statearr_18666_18720 = state_18643__$1;
(statearr_18666_18720[(1)] = (23));

} else {
var statearr_18667_18721 = state_18643__$1;
(statearr_18667_18721[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (36))){
var inst_18593 = (state_18643[(12)]);
var inst_18570 = inst_18593;
var state_18643__$1 = (function (){var statearr_18668 = state_18643;
(statearr_18668[(7)] = inst_18570);

return statearr_18668;
})();
var statearr_18669_18722 = state_18643__$1;
(statearr_18669_18722[(2)] = null);

(statearr_18669_18722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (29))){
var inst_18617 = (state_18643[(11)]);
var state_18643__$1 = state_18643;
var statearr_18670_18723 = state_18643__$1;
(statearr_18670_18723[(2)] = inst_18617);

(statearr_18670_18723[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (6))){
var state_18643__$1 = state_18643;
var statearr_18671_18724 = state_18643__$1;
(statearr_18671_18724[(2)] = false);

(statearr_18671_18724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (28))){
var inst_18613 = (state_18643[(2)]);
var inst_18614 = calc_state.call(null);
var inst_18570 = inst_18614;
var state_18643__$1 = (function (){var statearr_18672 = state_18643;
(statearr_18672[(7)] = inst_18570);

(statearr_18672[(15)] = inst_18613);

return statearr_18672;
})();
var statearr_18673_18725 = state_18643__$1;
(statearr_18673_18725[(2)] = null);

(statearr_18673_18725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (25))){
var inst_18639 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18674_18726 = state_18643__$1;
(statearr_18674_18726[(2)] = inst_18639);

(statearr_18674_18726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (34))){
var inst_18637 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18675_18727 = state_18643__$1;
(statearr_18675_18727[(2)] = inst_18637);

(statearr_18675_18727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (17))){
var state_18643__$1 = state_18643;
var statearr_18676_18728 = state_18643__$1;
(statearr_18676_18728[(2)] = false);

(statearr_18676_18728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (3))){
var state_18643__$1 = state_18643;
var statearr_18677_18729 = state_18643__$1;
(statearr_18677_18729[(2)] = false);

(statearr_18677_18729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (12))){
var inst_18641 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18643__$1,inst_18641);
} else {
if((state_val_18644 === (2))){
var inst_18545 = (state_18643[(8)]);
var inst_18550 = inst_18545.cljs$lang$protocol_mask$partition0$;
var inst_18551 = (inst_18550 & (64));
var inst_18552 = inst_18545.cljs$core$ISeq$;
var inst_18553 = (cljs.core.PROTOCOL_SENTINEL === inst_18552);
var inst_18554 = (inst_18551) || (inst_18553);
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18554)){
var statearr_18678_18730 = state_18643__$1;
(statearr_18678_18730[(1)] = (5));

} else {
var statearr_18679_18731 = state_18643__$1;
(statearr_18679_18731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (23))){
var inst_18602 = (state_18643[(14)]);
var inst_18608 = (inst_18602 == null);
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18608)){
var statearr_18680_18732 = state_18643__$1;
(statearr_18680_18732[(1)] = (26));

} else {
var statearr_18681_18733 = state_18643__$1;
(statearr_18681_18733[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (35))){
var inst_18628 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18628)){
var statearr_18682_18734 = state_18643__$1;
(statearr_18682_18734[(1)] = (36));

} else {
var statearr_18683_18735 = state_18643__$1;
(statearr_18683_18735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (19))){
var inst_18570 = (state_18643[(7)]);
var inst_18590 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18570);
var state_18643__$1 = state_18643;
var statearr_18684_18736 = state_18643__$1;
(statearr_18684_18736[(2)] = inst_18590);

(statearr_18684_18736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (11))){
var inst_18570 = (state_18643[(7)]);
var inst_18574 = (inst_18570 == null);
var inst_18575 = cljs.core.not.call(null,inst_18574);
var state_18643__$1 = state_18643;
if(inst_18575){
var statearr_18685_18737 = state_18643__$1;
(statearr_18685_18737[(1)] = (13));

} else {
var statearr_18686_18738 = state_18643__$1;
(statearr_18686_18738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (9))){
var inst_18545 = (state_18643[(8)]);
var state_18643__$1 = state_18643;
var statearr_18687_18739 = state_18643__$1;
(statearr_18687_18739[(2)] = inst_18545);

(statearr_18687_18739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (5))){
var state_18643__$1 = state_18643;
var statearr_18688_18740 = state_18643__$1;
(statearr_18688_18740[(2)] = true);

(statearr_18688_18740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (14))){
var state_18643__$1 = state_18643;
var statearr_18689_18741 = state_18643__$1;
(statearr_18689_18741[(2)] = false);

(statearr_18689_18741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (26))){
var inst_18603 = (state_18643[(9)]);
var inst_18610 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18603);
var state_18643__$1 = state_18643;
var statearr_18690_18742 = state_18643__$1;
(statearr_18690_18742[(2)] = inst_18610);

(statearr_18690_18742[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (16))){
var state_18643__$1 = state_18643;
var statearr_18691_18743 = state_18643__$1;
(statearr_18691_18743[(2)] = true);

(statearr_18691_18743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (38))){
var inst_18633 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18692_18744 = state_18643__$1;
(statearr_18692_18744[(2)] = inst_18633);

(statearr_18692_18744[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (30))){
var inst_18595 = (state_18643[(13)]);
var inst_18603 = (state_18643[(9)]);
var inst_18594 = (state_18643[(10)]);
var inst_18620 = cljs.core.empty_QMARK_.call(null,inst_18594);
var inst_18621 = inst_18595.call(null,inst_18603);
var inst_18622 = cljs.core.not.call(null,inst_18621);
var inst_18623 = (inst_18620) && (inst_18622);
var state_18643__$1 = state_18643;
var statearr_18693_18745 = state_18643__$1;
(statearr_18693_18745[(2)] = inst_18623);

(statearr_18693_18745[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (10))){
var inst_18545 = (state_18643[(8)]);
var inst_18566 = (state_18643[(2)]);
var inst_18567 = cljs.core.get.call(null,inst_18566,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18568 = cljs.core.get.call(null,inst_18566,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18569 = cljs.core.get.call(null,inst_18566,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18570 = inst_18545;
var state_18643__$1 = (function (){var statearr_18694 = state_18643;
(statearr_18694[(16)] = inst_18567);

(statearr_18694[(7)] = inst_18570);

(statearr_18694[(17)] = inst_18568);

(statearr_18694[(18)] = inst_18569);

return statearr_18694;
})();
var statearr_18695_18746 = state_18643__$1;
(statearr_18695_18746[(2)] = null);

(statearr_18695_18746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (18))){
var inst_18585 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18696_18747 = state_18643__$1;
(statearr_18696_18747[(2)] = inst_18585);

(statearr_18696_18747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (37))){
var state_18643__$1 = state_18643;
var statearr_18697_18748 = state_18643__$1;
(statearr_18697_18748[(2)] = null);

(statearr_18697_18748[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (8))){
var inst_18545 = (state_18643[(8)]);
var inst_18563 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18545);
var state_18643__$1 = state_18643;
var statearr_18698_18749 = state_18643__$1;
(statearr_18698_18749[(2)] = inst_18563);

(statearr_18698_18749[(1)] = (10));


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
});})(c__17644__auto___18703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17554__auto__,c__17644__auto___18703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17555__auto__ = null;
var cljs$core$async$mix_$_state_machine__17555__auto____0 = (function (){
var statearr_18699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18699[(0)] = cljs$core$async$mix_$_state_machine__17555__auto__);

(statearr_18699[(1)] = (1));

return statearr_18699;
});
var cljs$core$async$mix_$_state_machine__17555__auto____1 = (function (state_18643){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_18643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e18700){if((e18700 instanceof Object)){
var ex__17558__auto__ = e18700;
var statearr_18701_18750 = state_18643;
(statearr_18701_18750[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18751 = state_18643;
state_18643 = G__18751;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17555__auto__ = function(state_18643){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17555__auto____1.call(this,state_18643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17555__auto____0;
cljs$core$async$mix_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17555__auto____1;
return cljs$core$async$mix_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___18703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17646__auto__ = (function (){var statearr_18702 = f__17645__auto__.call(null);
(statearr_18702[(6)] = c__17644__auto___18703);

return statearr_18702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___18703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18753 = arguments.length;
switch (G__18753) {
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
var G__18757 = arguments.length;
switch (G__18757) {
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
return (function (p1__18755_SHARP_){
if(cljs.core.truth_(p1__18755_SHARP_.call(null,topic))){
return p1__18755_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18755_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9810__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18758 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18759){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18759 = meta18759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18760,meta18759__$1){
var self__ = this;
var _18760__$1 = this;
return (new cljs.core.async.t_cljs$core$async18758(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18759__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18760){
var self__ = this;
var _18760__$1 = this;
return self__.meta18759;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18758.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18758.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18759","meta18759",-2064862907,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18758";

cljs.core.async.t_cljs$core$async18758.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18758");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18758 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18758(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18759){
return (new cljs.core.async.t_cljs$core$async18758(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18759));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18758(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17644__auto___18878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___18878,mults,ensure_mult,p){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___18878,mults,ensure_mult,p){
return (function (state_18832){
var state_val_18833 = (state_18832[(1)]);
if((state_val_18833 === (7))){
var inst_18828 = (state_18832[(2)]);
var state_18832__$1 = state_18832;
var statearr_18834_18879 = state_18832__$1;
(statearr_18834_18879[(2)] = inst_18828);

(statearr_18834_18879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (20))){
var state_18832__$1 = state_18832;
var statearr_18835_18880 = state_18832__$1;
(statearr_18835_18880[(2)] = null);

(statearr_18835_18880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (1))){
var state_18832__$1 = state_18832;
var statearr_18836_18881 = state_18832__$1;
(statearr_18836_18881[(2)] = null);

(statearr_18836_18881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (24))){
var inst_18811 = (state_18832[(7)]);
var inst_18820 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18811);
var state_18832__$1 = state_18832;
var statearr_18837_18882 = state_18832__$1;
(statearr_18837_18882[(2)] = inst_18820);

(statearr_18837_18882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (4))){
var inst_18763 = (state_18832[(8)]);
var inst_18763__$1 = (state_18832[(2)]);
var inst_18764 = (inst_18763__$1 == null);
var state_18832__$1 = (function (){var statearr_18838 = state_18832;
(statearr_18838[(8)] = inst_18763__$1);

return statearr_18838;
})();
if(cljs.core.truth_(inst_18764)){
var statearr_18839_18883 = state_18832__$1;
(statearr_18839_18883[(1)] = (5));

} else {
var statearr_18840_18884 = state_18832__$1;
(statearr_18840_18884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (15))){
var inst_18805 = (state_18832[(2)]);
var state_18832__$1 = state_18832;
var statearr_18841_18885 = state_18832__$1;
(statearr_18841_18885[(2)] = inst_18805);

(statearr_18841_18885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (21))){
var inst_18825 = (state_18832[(2)]);
var state_18832__$1 = (function (){var statearr_18842 = state_18832;
(statearr_18842[(9)] = inst_18825);

return statearr_18842;
})();
var statearr_18843_18886 = state_18832__$1;
(statearr_18843_18886[(2)] = null);

(statearr_18843_18886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (13))){
var inst_18787 = (state_18832[(10)]);
var inst_18789 = cljs.core.chunked_seq_QMARK_.call(null,inst_18787);
var state_18832__$1 = state_18832;
if(inst_18789){
var statearr_18844_18887 = state_18832__$1;
(statearr_18844_18887[(1)] = (16));

} else {
var statearr_18845_18888 = state_18832__$1;
(statearr_18845_18888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (22))){
var inst_18817 = (state_18832[(2)]);
var state_18832__$1 = state_18832;
if(cljs.core.truth_(inst_18817)){
var statearr_18846_18889 = state_18832__$1;
(statearr_18846_18889[(1)] = (23));

} else {
var statearr_18847_18890 = state_18832__$1;
(statearr_18847_18890[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (6))){
var inst_18763 = (state_18832[(8)]);
var inst_18813 = (state_18832[(11)]);
var inst_18811 = (state_18832[(7)]);
var inst_18811__$1 = topic_fn.call(null,inst_18763);
var inst_18812 = cljs.core.deref.call(null,mults);
var inst_18813__$1 = cljs.core.get.call(null,inst_18812,inst_18811__$1);
var state_18832__$1 = (function (){var statearr_18848 = state_18832;
(statearr_18848[(11)] = inst_18813__$1);

(statearr_18848[(7)] = inst_18811__$1);

return statearr_18848;
})();
if(cljs.core.truth_(inst_18813__$1)){
var statearr_18849_18891 = state_18832__$1;
(statearr_18849_18891[(1)] = (19));

} else {
var statearr_18850_18892 = state_18832__$1;
(statearr_18850_18892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (25))){
var inst_18822 = (state_18832[(2)]);
var state_18832__$1 = state_18832;
var statearr_18851_18893 = state_18832__$1;
(statearr_18851_18893[(2)] = inst_18822);

(statearr_18851_18893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (17))){
var inst_18787 = (state_18832[(10)]);
var inst_18796 = cljs.core.first.call(null,inst_18787);
var inst_18797 = cljs.core.async.muxch_STAR_.call(null,inst_18796);
var inst_18798 = cljs.core.async.close_BANG_.call(null,inst_18797);
var inst_18799 = cljs.core.next.call(null,inst_18787);
var inst_18773 = inst_18799;
var inst_18774 = null;
var inst_18775 = (0);
var inst_18776 = (0);
var state_18832__$1 = (function (){var statearr_18852 = state_18832;
(statearr_18852[(12)] = inst_18774);

(statearr_18852[(13)] = inst_18773);

(statearr_18852[(14)] = inst_18776);

(statearr_18852[(15)] = inst_18798);

(statearr_18852[(16)] = inst_18775);

return statearr_18852;
})();
var statearr_18853_18894 = state_18832__$1;
(statearr_18853_18894[(2)] = null);

(statearr_18853_18894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (3))){
var inst_18830 = (state_18832[(2)]);
var state_18832__$1 = state_18832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18832__$1,inst_18830);
} else {
if((state_val_18833 === (12))){
var inst_18807 = (state_18832[(2)]);
var state_18832__$1 = state_18832;
var statearr_18854_18895 = state_18832__$1;
(statearr_18854_18895[(2)] = inst_18807);

(statearr_18854_18895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (2))){
var state_18832__$1 = state_18832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18832__$1,(4),ch);
} else {
if((state_val_18833 === (23))){
var state_18832__$1 = state_18832;
var statearr_18855_18896 = state_18832__$1;
(statearr_18855_18896[(2)] = null);

(statearr_18855_18896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (19))){
var inst_18763 = (state_18832[(8)]);
var inst_18813 = (state_18832[(11)]);
var inst_18815 = cljs.core.async.muxch_STAR_.call(null,inst_18813);
var state_18832__$1 = state_18832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18832__$1,(22),inst_18815,inst_18763);
} else {
if((state_val_18833 === (11))){
var inst_18787 = (state_18832[(10)]);
var inst_18773 = (state_18832[(13)]);
var inst_18787__$1 = cljs.core.seq.call(null,inst_18773);
var state_18832__$1 = (function (){var statearr_18856 = state_18832;
(statearr_18856[(10)] = inst_18787__$1);

return statearr_18856;
})();
if(inst_18787__$1){
var statearr_18857_18897 = state_18832__$1;
(statearr_18857_18897[(1)] = (13));

} else {
var statearr_18858_18898 = state_18832__$1;
(statearr_18858_18898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (9))){
var inst_18809 = (state_18832[(2)]);
var state_18832__$1 = state_18832;
var statearr_18859_18899 = state_18832__$1;
(statearr_18859_18899[(2)] = inst_18809);

(statearr_18859_18899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (5))){
var inst_18770 = cljs.core.deref.call(null,mults);
var inst_18771 = cljs.core.vals.call(null,inst_18770);
var inst_18772 = cljs.core.seq.call(null,inst_18771);
var inst_18773 = inst_18772;
var inst_18774 = null;
var inst_18775 = (0);
var inst_18776 = (0);
var state_18832__$1 = (function (){var statearr_18860 = state_18832;
(statearr_18860[(12)] = inst_18774);

(statearr_18860[(13)] = inst_18773);

(statearr_18860[(14)] = inst_18776);

(statearr_18860[(16)] = inst_18775);

return statearr_18860;
})();
var statearr_18861_18900 = state_18832__$1;
(statearr_18861_18900[(2)] = null);

(statearr_18861_18900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (14))){
var state_18832__$1 = state_18832;
var statearr_18865_18901 = state_18832__$1;
(statearr_18865_18901[(2)] = null);

(statearr_18865_18901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (16))){
var inst_18787 = (state_18832[(10)]);
var inst_18791 = cljs.core.chunk_first.call(null,inst_18787);
var inst_18792 = cljs.core.chunk_rest.call(null,inst_18787);
var inst_18793 = cljs.core.count.call(null,inst_18791);
var inst_18773 = inst_18792;
var inst_18774 = inst_18791;
var inst_18775 = inst_18793;
var inst_18776 = (0);
var state_18832__$1 = (function (){var statearr_18866 = state_18832;
(statearr_18866[(12)] = inst_18774);

(statearr_18866[(13)] = inst_18773);

(statearr_18866[(14)] = inst_18776);

(statearr_18866[(16)] = inst_18775);

return statearr_18866;
})();
var statearr_18867_18902 = state_18832__$1;
(statearr_18867_18902[(2)] = null);

(statearr_18867_18902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (10))){
var inst_18774 = (state_18832[(12)]);
var inst_18773 = (state_18832[(13)]);
var inst_18776 = (state_18832[(14)]);
var inst_18775 = (state_18832[(16)]);
var inst_18781 = cljs.core._nth.call(null,inst_18774,inst_18776);
var inst_18782 = cljs.core.async.muxch_STAR_.call(null,inst_18781);
var inst_18783 = cljs.core.async.close_BANG_.call(null,inst_18782);
var inst_18784 = (inst_18776 + (1));
var tmp18862 = inst_18774;
var tmp18863 = inst_18773;
var tmp18864 = inst_18775;
var inst_18773__$1 = tmp18863;
var inst_18774__$1 = tmp18862;
var inst_18775__$1 = tmp18864;
var inst_18776__$1 = inst_18784;
var state_18832__$1 = (function (){var statearr_18868 = state_18832;
(statearr_18868[(12)] = inst_18774__$1);

(statearr_18868[(13)] = inst_18773__$1);

(statearr_18868[(14)] = inst_18776__$1);

(statearr_18868[(17)] = inst_18783);

(statearr_18868[(16)] = inst_18775__$1);

return statearr_18868;
})();
var statearr_18869_18903 = state_18832__$1;
(statearr_18869_18903[(2)] = null);

(statearr_18869_18903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (18))){
var inst_18802 = (state_18832[(2)]);
var state_18832__$1 = state_18832;
var statearr_18870_18904 = state_18832__$1;
(statearr_18870_18904[(2)] = inst_18802);

(statearr_18870_18904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18833 === (8))){
var inst_18776 = (state_18832[(14)]);
var inst_18775 = (state_18832[(16)]);
var inst_18778 = (inst_18776 < inst_18775);
var inst_18779 = inst_18778;
var state_18832__$1 = state_18832;
if(cljs.core.truth_(inst_18779)){
var statearr_18871_18905 = state_18832__$1;
(statearr_18871_18905[(1)] = (10));

} else {
var statearr_18872_18906 = state_18832__$1;
(statearr_18872_18906[(1)] = (11));

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
});})(c__17644__auto___18878,mults,ensure_mult,p))
;
return ((function (switch__17554__auto__,c__17644__auto___18878,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_18873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18873[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_18873[(1)] = (1));

return statearr_18873;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_18832){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_18832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e18874){if((e18874 instanceof Object)){
var ex__17558__auto__ = e18874;
var statearr_18875_18907 = state_18832;
(statearr_18875_18907[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18908 = state_18832;
state_18832 = G__18908;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_18832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_18832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___18878,mults,ensure_mult,p))
})();
var state__17646__auto__ = (function (){var statearr_18876 = f__17645__auto__.call(null);
(statearr_18876[(6)] = c__17644__auto___18878);

return statearr_18876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___18878,mults,ensure_mult,p))
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
var G__18910 = arguments.length;
switch (G__18910) {
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
var G__18913 = arguments.length;
switch (G__18913) {
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
var G__18916 = arguments.length;
switch (G__18916) {
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
var c__17644__auto___18983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___18983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___18983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18955){
var state_val_18956 = (state_18955[(1)]);
if((state_val_18956 === (7))){
var state_18955__$1 = state_18955;
var statearr_18957_18984 = state_18955__$1;
(statearr_18957_18984[(2)] = null);

(statearr_18957_18984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (1))){
var state_18955__$1 = state_18955;
var statearr_18958_18985 = state_18955__$1;
(statearr_18958_18985[(2)] = null);

(statearr_18958_18985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (4))){
var inst_18919 = (state_18955[(7)]);
var inst_18921 = (inst_18919 < cnt);
var state_18955__$1 = state_18955;
if(cljs.core.truth_(inst_18921)){
var statearr_18959_18986 = state_18955__$1;
(statearr_18959_18986[(1)] = (6));

} else {
var statearr_18960_18987 = state_18955__$1;
(statearr_18960_18987[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (15))){
var inst_18951 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
var statearr_18961_18988 = state_18955__$1;
(statearr_18961_18988[(2)] = inst_18951);

(statearr_18961_18988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (13))){
var inst_18944 = cljs.core.async.close_BANG_.call(null,out);
var state_18955__$1 = state_18955;
var statearr_18962_18989 = state_18955__$1;
(statearr_18962_18989[(2)] = inst_18944);

(statearr_18962_18989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (6))){
var state_18955__$1 = state_18955;
var statearr_18963_18990 = state_18955__$1;
(statearr_18963_18990[(2)] = null);

(statearr_18963_18990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (3))){
var inst_18953 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18955__$1,inst_18953);
} else {
if((state_val_18956 === (12))){
var inst_18941 = (state_18955[(8)]);
var inst_18941__$1 = (state_18955[(2)]);
var inst_18942 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18941__$1);
var state_18955__$1 = (function (){var statearr_18964 = state_18955;
(statearr_18964[(8)] = inst_18941__$1);

return statearr_18964;
})();
if(cljs.core.truth_(inst_18942)){
var statearr_18965_18991 = state_18955__$1;
(statearr_18965_18991[(1)] = (13));

} else {
var statearr_18966_18992 = state_18955__$1;
(statearr_18966_18992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (2))){
var inst_18918 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18919 = (0);
var state_18955__$1 = (function (){var statearr_18967 = state_18955;
(statearr_18967[(9)] = inst_18918);

(statearr_18967[(7)] = inst_18919);

return statearr_18967;
})();
var statearr_18968_18993 = state_18955__$1;
(statearr_18968_18993[(2)] = null);

(statearr_18968_18993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (11))){
var inst_18919 = (state_18955[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18955,(10),Object,null,(9));
var inst_18928 = chs__$1.call(null,inst_18919);
var inst_18929 = done.call(null,inst_18919);
var inst_18930 = cljs.core.async.take_BANG_.call(null,inst_18928,inst_18929);
var state_18955__$1 = state_18955;
var statearr_18969_18994 = state_18955__$1;
(statearr_18969_18994[(2)] = inst_18930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (9))){
var inst_18919 = (state_18955[(7)]);
var inst_18932 = (state_18955[(2)]);
var inst_18933 = (inst_18919 + (1));
var inst_18919__$1 = inst_18933;
var state_18955__$1 = (function (){var statearr_18970 = state_18955;
(statearr_18970[(10)] = inst_18932);

(statearr_18970[(7)] = inst_18919__$1);

return statearr_18970;
})();
var statearr_18971_18995 = state_18955__$1;
(statearr_18971_18995[(2)] = null);

(statearr_18971_18995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (5))){
var inst_18939 = (state_18955[(2)]);
var state_18955__$1 = (function (){var statearr_18972 = state_18955;
(statearr_18972[(11)] = inst_18939);

return statearr_18972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18955__$1,(12),dchan);
} else {
if((state_val_18956 === (14))){
var inst_18941 = (state_18955[(8)]);
var inst_18946 = cljs.core.apply.call(null,f,inst_18941);
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18955__$1,(16),out,inst_18946);
} else {
if((state_val_18956 === (16))){
var inst_18948 = (state_18955[(2)]);
var state_18955__$1 = (function (){var statearr_18973 = state_18955;
(statearr_18973[(12)] = inst_18948);

return statearr_18973;
})();
var statearr_18974_18996 = state_18955__$1;
(statearr_18974_18996[(2)] = null);

(statearr_18974_18996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (10))){
var inst_18923 = (state_18955[(2)]);
var inst_18924 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18955__$1 = (function (){var statearr_18975 = state_18955;
(statearr_18975[(13)] = inst_18923);

return statearr_18975;
})();
var statearr_18976_18997 = state_18955__$1;
(statearr_18976_18997[(2)] = inst_18924);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (8))){
var inst_18937 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
var statearr_18977_18998 = state_18955__$1;
(statearr_18977_18998[(2)] = inst_18937);

(statearr_18977_18998[(1)] = (5));


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
});})(c__17644__auto___18983,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17554__auto__,c__17644__auto___18983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_18978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18978[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_18978[(1)] = (1));

return statearr_18978;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_18955){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_18955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e18979){if((e18979 instanceof Object)){
var ex__17558__auto__ = e18979;
var statearr_18980_18999 = state_18955;
(statearr_18980_18999[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19000 = state_18955;
state_18955 = G__19000;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_18955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_18955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___18983,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17646__auto__ = (function (){var statearr_18981 = f__17645__auto__.call(null);
(statearr_18981[(6)] = c__17644__auto___18983);

return statearr_18981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___18983,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19003 = arguments.length;
switch (G__19003) {
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
var c__17644__auto___19057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___19057,out){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___19057,out){
return (function (state_19035){
var state_val_19036 = (state_19035[(1)]);
if((state_val_19036 === (7))){
var inst_19015 = (state_19035[(7)]);
var inst_19014 = (state_19035[(8)]);
var inst_19014__$1 = (state_19035[(2)]);
var inst_19015__$1 = cljs.core.nth.call(null,inst_19014__$1,(0),null);
var inst_19016 = cljs.core.nth.call(null,inst_19014__$1,(1),null);
var inst_19017 = (inst_19015__$1 == null);
var state_19035__$1 = (function (){var statearr_19037 = state_19035;
(statearr_19037[(9)] = inst_19016);

(statearr_19037[(7)] = inst_19015__$1);

(statearr_19037[(8)] = inst_19014__$1);

return statearr_19037;
})();
if(cljs.core.truth_(inst_19017)){
var statearr_19038_19058 = state_19035__$1;
(statearr_19038_19058[(1)] = (8));

} else {
var statearr_19039_19059 = state_19035__$1;
(statearr_19039_19059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19036 === (1))){
var inst_19004 = cljs.core.vec.call(null,chs);
var inst_19005 = inst_19004;
var state_19035__$1 = (function (){var statearr_19040 = state_19035;
(statearr_19040[(10)] = inst_19005);

return statearr_19040;
})();
var statearr_19041_19060 = state_19035__$1;
(statearr_19041_19060[(2)] = null);

(statearr_19041_19060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19036 === (4))){
var inst_19005 = (state_19035[(10)]);
var state_19035__$1 = state_19035;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19035__$1,(7),inst_19005);
} else {
if((state_val_19036 === (6))){
var inst_19031 = (state_19035[(2)]);
var state_19035__$1 = state_19035;
var statearr_19042_19061 = state_19035__$1;
(statearr_19042_19061[(2)] = inst_19031);

(statearr_19042_19061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19036 === (3))){
var inst_19033 = (state_19035[(2)]);
var state_19035__$1 = state_19035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19035__$1,inst_19033);
} else {
if((state_val_19036 === (2))){
var inst_19005 = (state_19035[(10)]);
var inst_19007 = cljs.core.count.call(null,inst_19005);
var inst_19008 = (inst_19007 > (0));
var state_19035__$1 = state_19035;
if(cljs.core.truth_(inst_19008)){
var statearr_19044_19062 = state_19035__$1;
(statearr_19044_19062[(1)] = (4));

} else {
var statearr_19045_19063 = state_19035__$1;
(statearr_19045_19063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19036 === (11))){
var inst_19005 = (state_19035[(10)]);
var inst_19024 = (state_19035[(2)]);
var tmp19043 = inst_19005;
var inst_19005__$1 = tmp19043;
var state_19035__$1 = (function (){var statearr_19046 = state_19035;
(statearr_19046[(10)] = inst_19005__$1);

(statearr_19046[(11)] = inst_19024);

return statearr_19046;
})();
var statearr_19047_19064 = state_19035__$1;
(statearr_19047_19064[(2)] = null);

(statearr_19047_19064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19036 === (9))){
var inst_19015 = (state_19035[(7)]);
var state_19035__$1 = state_19035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19035__$1,(11),out,inst_19015);
} else {
if((state_val_19036 === (5))){
var inst_19029 = cljs.core.async.close_BANG_.call(null,out);
var state_19035__$1 = state_19035;
var statearr_19048_19065 = state_19035__$1;
(statearr_19048_19065[(2)] = inst_19029);

(statearr_19048_19065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19036 === (10))){
var inst_19027 = (state_19035[(2)]);
var state_19035__$1 = state_19035;
var statearr_19049_19066 = state_19035__$1;
(statearr_19049_19066[(2)] = inst_19027);

(statearr_19049_19066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19036 === (8))){
var inst_19005 = (state_19035[(10)]);
var inst_19016 = (state_19035[(9)]);
var inst_19015 = (state_19035[(7)]);
var inst_19014 = (state_19035[(8)]);
var inst_19019 = (function (){var cs = inst_19005;
var vec__19010 = inst_19014;
var v = inst_19015;
var c = inst_19016;
return ((function (cs,vec__19010,v,c,inst_19005,inst_19016,inst_19015,inst_19014,state_val_19036,c__17644__auto___19057,out){
return (function (p1__19001_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19001_SHARP_);
});
;})(cs,vec__19010,v,c,inst_19005,inst_19016,inst_19015,inst_19014,state_val_19036,c__17644__auto___19057,out))
})();
var inst_19020 = cljs.core.filterv.call(null,inst_19019,inst_19005);
var inst_19005__$1 = inst_19020;
var state_19035__$1 = (function (){var statearr_19050 = state_19035;
(statearr_19050[(10)] = inst_19005__$1);

return statearr_19050;
})();
var statearr_19051_19067 = state_19035__$1;
(statearr_19051_19067[(2)] = null);

(statearr_19051_19067[(1)] = (2));


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
});})(c__17644__auto___19057,out))
;
return ((function (switch__17554__auto__,c__17644__auto___19057,out){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_19052 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19052[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_19052[(1)] = (1));

return statearr_19052;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_19035){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_19035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e19053){if((e19053 instanceof Object)){
var ex__17558__auto__ = e19053;
var statearr_19054_19068 = state_19035;
(statearr_19054_19068[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19069 = state_19035;
state_19035 = G__19069;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_19035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_19035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___19057,out))
})();
var state__17646__auto__ = (function (){var statearr_19055 = f__17645__auto__.call(null);
(statearr_19055[(6)] = c__17644__auto___19057);

return statearr_19055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___19057,out))
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
var G__19071 = arguments.length;
switch (G__19071) {
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
var c__17644__auto___19116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___19116,out){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___19116,out){
return (function (state_19095){
var state_val_19096 = (state_19095[(1)]);
if((state_val_19096 === (7))){
var inst_19077 = (state_19095[(7)]);
var inst_19077__$1 = (state_19095[(2)]);
var inst_19078 = (inst_19077__$1 == null);
var inst_19079 = cljs.core.not.call(null,inst_19078);
var state_19095__$1 = (function (){var statearr_19097 = state_19095;
(statearr_19097[(7)] = inst_19077__$1);

return statearr_19097;
})();
if(inst_19079){
var statearr_19098_19117 = state_19095__$1;
(statearr_19098_19117[(1)] = (8));

} else {
var statearr_19099_19118 = state_19095__$1;
(statearr_19099_19118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (1))){
var inst_19072 = (0);
var state_19095__$1 = (function (){var statearr_19100 = state_19095;
(statearr_19100[(8)] = inst_19072);

return statearr_19100;
})();
var statearr_19101_19119 = state_19095__$1;
(statearr_19101_19119[(2)] = null);

(statearr_19101_19119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (4))){
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19095__$1,(7),ch);
} else {
if((state_val_19096 === (6))){
var inst_19090 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19102_19120 = state_19095__$1;
(statearr_19102_19120[(2)] = inst_19090);

(statearr_19102_19120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (3))){
var inst_19092 = (state_19095[(2)]);
var inst_19093 = cljs.core.async.close_BANG_.call(null,out);
var state_19095__$1 = (function (){var statearr_19103 = state_19095;
(statearr_19103[(9)] = inst_19092);

return statearr_19103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19095__$1,inst_19093);
} else {
if((state_val_19096 === (2))){
var inst_19072 = (state_19095[(8)]);
var inst_19074 = (inst_19072 < n);
var state_19095__$1 = state_19095;
if(cljs.core.truth_(inst_19074)){
var statearr_19104_19121 = state_19095__$1;
(statearr_19104_19121[(1)] = (4));

} else {
var statearr_19105_19122 = state_19095__$1;
(statearr_19105_19122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (11))){
var inst_19072 = (state_19095[(8)]);
var inst_19082 = (state_19095[(2)]);
var inst_19083 = (inst_19072 + (1));
var inst_19072__$1 = inst_19083;
var state_19095__$1 = (function (){var statearr_19106 = state_19095;
(statearr_19106[(10)] = inst_19082);

(statearr_19106[(8)] = inst_19072__$1);

return statearr_19106;
})();
var statearr_19107_19123 = state_19095__$1;
(statearr_19107_19123[(2)] = null);

(statearr_19107_19123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (9))){
var state_19095__$1 = state_19095;
var statearr_19108_19124 = state_19095__$1;
(statearr_19108_19124[(2)] = null);

(statearr_19108_19124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (5))){
var state_19095__$1 = state_19095;
var statearr_19109_19125 = state_19095__$1;
(statearr_19109_19125[(2)] = null);

(statearr_19109_19125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (10))){
var inst_19087 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19110_19126 = state_19095__$1;
(statearr_19110_19126[(2)] = inst_19087);

(statearr_19110_19126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (8))){
var inst_19077 = (state_19095[(7)]);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19095__$1,(11),out,inst_19077);
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
});})(c__17644__auto___19116,out))
;
return ((function (switch__17554__auto__,c__17644__auto___19116,out){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_19111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19111[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_19111[(1)] = (1));

return statearr_19111;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_19095){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_19095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e19112){if((e19112 instanceof Object)){
var ex__17558__auto__ = e19112;
var statearr_19113_19127 = state_19095;
(statearr_19113_19127[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19128 = state_19095;
state_19095 = G__19128;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_19095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_19095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___19116,out))
})();
var state__17646__auto__ = (function (){var statearr_19114 = f__17645__auto__.call(null);
(statearr_19114[(6)] = c__17644__auto___19116);

return statearr_19114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___19116,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19130 = (function (f,ch,meta19131){
this.f = f;
this.ch = ch;
this.meta19131 = meta19131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19132,meta19131__$1){
var self__ = this;
var _19132__$1 = this;
return (new cljs.core.async.t_cljs$core$async19130(self__.f,self__.ch,meta19131__$1));
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19132){
var self__ = this;
var _19132__$1 = this;
return self__.meta19131;
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19133 = (function (f,ch,meta19131,_,fn1,meta19134){
this.f = f;
this.ch = ch;
this.meta19131 = meta19131;
this._ = _;
this.fn1 = fn1;
this.meta19134 = meta19134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19135,meta19134__$1){
var self__ = this;
var _19135__$1 = this;
return (new cljs.core.async.t_cljs$core$async19133(self__.f,self__.ch,self__.meta19131,self__._,self__.fn1,meta19134__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19135){
var self__ = this;
var _19135__$1 = this;
return self__.meta19134;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19129_SHARP_){
return f1.call(null,(((p1__19129_SHARP_ == null))?null:self__.f.call(null,p1__19129_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19133.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19131","meta19131",-1088108192,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19130","cljs.core.async/t_cljs$core$async19130",-284611768,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19134","meta19134",-1653356350,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19133";

cljs.core.async.t_cljs$core$async19133.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19133");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19133 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19133(f__$1,ch__$1,meta19131__$1,___$2,fn1__$1,meta19134){
return (new cljs.core.async.t_cljs$core$async19133(f__$1,ch__$1,meta19131__$1,___$2,fn1__$1,meta19134));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19133(self__.f,self__.ch,self__.meta19131,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19131","meta19131",-1088108192,null)], null);
});

cljs.core.async.t_cljs$core$async19130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19130";

cljs.core.async.t_cljs$core$async19130.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19130");
});

cljs.core.async.__GT_t_cljs$core$async19130 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19130(f__$1,ch__$1,meta19131){
return (new cljs.core.async.t_cljs$core$async19130(f__$1,ch__$1,meta19131));
});

}

return (new cljs.core.async.t_cljs$core$async19130(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19136 = (function (f,ch,meta19137){
this.f = f;
this.ch = ch;
this.meta19137 = meta19137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19138,meta19137__$1){
var self__ = this;
var _19138__$1 = this;
return (new cljs.core.async.t_cljs$core$async19136(self__.f,self__.ch,meta19137__$1));
});

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19138){
var self__ = this;
var _19138__$1 = this;
return self__.meta19137;
});

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19137","meta19137",-1368486813,null)], null);
});

cljs.core.async.t_cljs$core$async19136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19136";

cljs.core.async.t_cljs$core$async19136.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19136");
});

cljs.core.async.__GT_t_cljs$core$async19136 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19136(f__$1,ch__$1,meta19137){
return (new cljs.core.async.t_cljs$core$async19136(f__$1,ch__$1,meta19137));
});

}

return (new cljs.core.async.t_cljs$core$async19136(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19139 = (function (p,ch,meta19140){
this.p = p;
this.ch = ch;
this.meta19140 = meta19140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19141,meta19140__$1){
var self__ = this;
var _19141__$1 = this;
return (new cljs.core.async.t_cljs$core$async19139(self__.p,self__.ch,meta19140__$1));
});

cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19141){
var self__ = this;
var _19141__$1 = this;
return self__.meta19140;
});

cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19140","meta19140",47064833,null)], null);
});

cljs.core.async.t_cljs$core$async19139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19139";

cljs.core.async.t_cljs$core$async19139.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19139");
});

cljs.core.async.__GT_t_cljs$core$async19139 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19139(p__$1,ch__$1,meta19140){
return (new cljs.core.async.t_cljs$core$async19139(p__$1,ch__$1,meta19140));
});

}

return (new cljs.core.async.t_cljs$core$async19139(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19143 = arguments.length;
switch (G__19143) {
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
var c__17644__auto___19183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___19183,out){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___19183,out){
return (function (state_19164){
var state_val_19165 = (state_19164[(1)]);
if((state_val_19165 === (7))){
var inst_19160 = (state_19164[(2)]);
var state_19164__$1 = state_19164;
var statearr_19166_19184 = state_19164__$1;
(statearr_19166_19184[(2)] = inst_19160);

(statearr_19166_19184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19165 === (1))){
var state_19164__$1 = state_19164;
var statearr_19167_19185 = state_19164__$1;
(statearr_19167_19185[(2)] = null);

(statearr_19167_19185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19165 === (4))){
var inst_19146 = (state_19164[(7)]);
var inst_19146__$1 = (state_19164[(2)]);
var inst_19147 = (inst_19146__$1 == null);
var state_19164__$1 = (function (){var statearr_19168 = state_19164;
(statearr_19168[(7)] = inst_19146__$1);

return statearr_19168;
})();
if(cljs.core.truth_(inst_19147)){
var statearr_19169_19186 = state_19164__$1;
(statearr_19169_19186[(1)] = (5));

} else {
var statearr_19170_19187 = state_19164__$1;
(statearr_19170_19187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19165 === (6))){
var inst_19146 = (state_19164[(7)]);
var inst_19151 = p.call(null,inst_19146);
var state_19164__$1 = state_19164;
if(cljs.core.truth_(inst_19151)){
var statearr_19171_19188 = state_19164__$1;
(statearr_19171_19188[(1)] = (8));

} else {
var statearr_19172_19189 = state_19164__$1;
(statearr_19172_19189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19165 === (3))){
var inst_19162 = (state_19164[(2)]);
var state_19164__$1 = state_19164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19164__$1,inst_19162);
} else {
if((state_val_19165 === (2))){
var state_19164__$1 = state_19164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19164__$1,(4),ch);
} else {
if((state_val_19165 === (11))){
var inst_19154 = (state_19164[(2)]);
var state_19164__$1 = state_19164;
var statearr_19173_19190 = state_19164__$1;
(statearr_19173_19190[(2)] = inst_19154);

(statearr_19173_19190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19165 === (9))){
var state_19164__$1 = state_19164;
var statearr_19174_19191 = state_19164__$1;
(statearr_19174_19191[(2)] = null);

(statearr_19174_19191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19165 === (5))){
var inst_19149 = cljs.core.async.close_BANG_.call(null,out);
var state_19164__$1 = state_19164;
var statearr_19175_19192 = state_19164__$1;
(statearr_19175_19192[(2)] = inst_19149);

(statearr_19175_19192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19165 === (10))){
var inst_19157 = (state_19164[(2)]);
var state_19164__$1 = (function (){var statearr_19176 = state_19164;
(statearr_19176[(8)] = inst_19157);

return statearr_19176;
})();
var statearr_19177_19193 = state_19164__$1;
(statearr_19177_19193[(2)] = null);

(statearr_19177_19193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19165 === (8))){
var inst_19146 = (state_19164[(7)]);
var state_19164__$1 = state_19164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19164__$1,(11),out,inst_19146);
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
});})(c__17644__auto___19183,out))
;
return ((function (switch__17554__auto__,c__17644__auto___19183,out){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_19178 = [null,null,null,null,null,null,null,null,null];
(statearr_19178[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_19178[(1)] = (1));

return statearr_19178;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_19164){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_19164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e19179){if((e19179 instanceof Object)){
var ex__17558__auto__ = e19179;
var statearr_19180_19194 = state_19164;
(statearr_19180_19194[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19195 = state_19164;
state_19164 = G__19195;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_19164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_19164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___19183,out))
})();
var state__17646__auto__ = (function (){var statearr_19181 = f__17645__auto__.call(null);
(statearr_19181[(6)] = c__17644__auto___19183);

return statearr_19181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___19183,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19197 = arguments.length;
switch (G__19197) {
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
var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__){
return (function (state_19260){
var state_val_19261 = (state_19260[(1)]);
if((state_val_19261 === (7))){
var inst_19256 = (state_19260[(2)]);
var state_19260__$1 = state_19260;
var statearr_19262_19300 = state_19260__$1;
(statearr_19262_19300[(2)] = inst_19256);

(statearr_19262_19300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (20))){
var inst_19226 = (state_19260[(7)]);
var inst_19237 = (state_19260[(2)]);
var inst_19238 = cljs.core.next.call(null,inst_19226);
var inst_19212 = inst_19238;
var inst_19213 = null;
var inst_19214 = (0);
var inst_19215 = (0);
var state_19260__$1 = (function (){var statearr_19263 = state_19260;
(statearr_19263[(8)] = inst_19214);

(statearr_19263[(9)] = inst_19237);

(statearr_19263[(10)] = inst_19213);

(statearr_19263[(11)] = inst_19215);

(statearr_19263[(12)] = inst_19212);

return statearr_19263;
})();
var statearr_19264_19301 = state_19260__$1;
(statearr_19264_19301[(2)] = null);

(statearr_19264_19301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (1))){
var state_19260__$1 = state_19260;
var statearr_19265_19302 = state_19260__$1;
(statearr_19265_19302[(2)] = null);

(statearr_19265_19302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (4))){
var inst_19201 = (state_19260[(13)]);
var inst_19201__$1 = (state_19260[(2)]);
var inst_19202 = (inst_19201__$1 == null);
var state_19260__$1 = (function (){var statearr_19266 = state_19260;
(statearr_19266[(13)] = inst_19201__$1);

return statearr_19266;
})();
if(cljs.core.truth_(inst_19202)){
var statearr_19267_19303 = state_19260__$1;
(statearr_19267_19303[(1)] = (5));

} else {
var statearr_19268_19304 = state_19260__$1;
(statearr_19268_19304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (15))){
var state_19260__$1 = state_19260;
var statearr_19272_19305 = state_19260__$1;
(statearr_19272_19305[(2)] = null);

(statearr_19272_19305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (21))){
var state_19260__$1 = state_19260;
var statearr_19273_19306 = state_19260__$1;
(statearr_19273_19306[(2)] = null);

(statearr_19273_19306[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (13))){
var inst_19214 = (state_19260[(8)]);
var inst_19213 = (state_19260[(10)]);
var inst_19215 = (state_19260[(11)]);
var inst_19212 = (state_19260[(12)]);
var inst_19222 = (state_19260[(2)]);
var inst_19223 = (inst_19215 + (1));
var tmp19269 = inst_19214;
var tmp19270 = inst_19213;
var tmp19271 = inst_19212;
var inst_19212__$1 = tmp19271;
var inst_19213__$1 = tmp19270;
var inst_19214__$1 = tmp19269;
var inst_19215__$1 = inst_19223;
var state_19260__$1 = (function (){var statearr_19274 = state_19260;
(statearr_19274[(8)] = inst_19214__$1);

(statearr_19274[(10)] = inst_19213__$1);

(statearr_19274[(11)] = inst_19215__$1);

(statearr_19274[(14)] = inst_19222);

(statearr_19274[(12)] = inst_19212__$1);

return statearr_19274;
})();
var statearr_19275_19307 = state_19260__$1;
(statearr_19275_19307[(2)] = null);

(statearr_19275_19307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (22))){
var state_19260__$1 = state_19260;
var statearr_19276_19308 = state_19260__$1;
(statearr_19276_19308[(2)] = null);

(statearr_19276_19308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (6))){
var inst_19201 = (state_19260[(13)]);
var inst_19210 = f.call(null,inst_19201);
var inst_19211 = cljs.core.seq.call(null,inst_19210);
var inst_19212 = inst_19211;
var inst_19213 = null;
var inst_19214 = (0);
var inst_19215 = (0);
var state_19260__$1 = (function (){var statearr_19277 = state_19260;
(statearr_19277[(8)] = inst_19214);

(statearr_19277[(10)] = inst_19213);

(statearr_19277[(11)] = inst_19215);

(statearr_19277[(12)] = inst_19212);

return statearr_19277;
})();
var statearr_19278_19309 = state_19260__$1;
(statearr_19278_19309[(2)] = null);

(statearr_19278_19309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (17))){
var inst_19226 = (state_19260[(7)]);
var inst_19230 = cljs.core.chunk_first.call(null,inst_19226);
var inst_19231 = cljs.core.chunk_rest.call(null,inst_19226);
var inst_19232 = cljs.core.count.call(null,inst_19230);
var inst_19212 = inst_19231;
var inst_19213 = inst_19230;
var inst_19214 = inst_19232;
var inst_19215 = (0);
var state_19260__$1 = (function (){var statearr_19279 = state_19260;
(statearr_19279[(8)] = inst_19214);

(statearr_19279[(10)] = inst_19213);

(statearr_19279[(11)] = inst_19215);

(statearr_19279[(12)] = inst_19212);

return statearr_19279;
})();
var statearr_19280_19310 = state_19260__$1;
(statearr_19280_19310[(2)] = null);

(statearr_19280_19310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (3))){
var inst_19258 = (state_19260[(2)]);
var state_19260__$1 = state_19260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19260__$1,inst_19258);
} else {
if((state_val_19261 === (12))){
var inst_19246 = (state_19260[(2)]);
var state_19260__$1 = state_19260;
var statearr_19281_19311 = state_19260__$1;
(statearr_19281_19311[(2)] = inst_19246);

(statearr_19281_19311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (2))){
var state_19260__$1 = state_19260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19260__$1,(4),in$);
} else {
if((state_val_19261 === (23))){
var inst_19254 = (state_19260[(2)]);
var state_19260__$1 = state_19260;
var statearr_19282_19312 = state_19260__$1;
(statearr_19282_19312[(2)] = inst_19254);

(statearr_19282_19312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (19))){
var inst_19241 = (state_19260[(2)]);
var state_19260__$1 = state_19260;
var statearr_19283_19313 = state_19260__$1;
(statearr_19283_19313[(2)] = inst_19241);

(statearr_19283_19313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (11))){
var inst_19226 = (state_19260[(7)]);
var inst_19212 = (state_19260[(12)]);
var inst_19226__$1 = cljs.core.seq.call(null,inst_19212);
var state_19260__$1 = (function (){var statearr_19284 = state_19260;
(statearr_19284[(7)] = inst_19226__$1);

return statearr_19284;
})();
if(inst_19226__$1){
var statearr_19285_19314 = state_19260__$1;
(statearr_19285_19314[(1)] = (14));

} else {
var statearr_19286_19315 = state_19260__$1;
(statearr_19286_19315[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (9))){
var inst_19248 = (state_19260[(2)]);
var inst_19249 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19260__$1 = (function (){var statearr_19287 = state_19260;
(statearr_19287[(15)] = inst_19248);

return statearr_19287;
})();
if(cljs.core.truth_(inst_19249)){
var statearr_19288_19316 = state_19260__$1;
(statearr_19288_19316[(1)] = (21));

} else {
var statearr_19289_19317 = state_19260__$1;
(statearr_19289_19317[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (5))){
var inst_19204 = cljs.core.async.close_BANG_.call(null,out);
var state_19260__$1 = state_19260;
var statearr_19290_19318 = state_19260__$1;
(statearr_19290_19318[(2)] = inst_19204);

(statearr_19290_19318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (14))){
var inst_19226 = (state_19260[(7)]);
var inst_19228 = cljs.core.chunked_seq_QMARK_.call(null,inst_19226);
var state_19260__$1 = state_19260;
if(inst_19228){
var statearr_19291_19319 = state_19260__$1;
(statearr_19291_19319[(1)] = (17));

} else {
var statearr_19292_19320 = state_19260__$1;
(statearr_19292_19320[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (16))){
var inst_19244 = (state_19260[(2)]);
var state_19260__$1 = state_19260;
var statearr_19293_19321 = state_19260__$1;
(statearr_19293_19321[(2)] = inst_19244);

(statearr_19293_19321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19261 === (10))){
var inst_19213 = (state_19260[(10)]);
var inst_19215 = (state_19260[(11)]);
var inst_19220 = cljs.core._nth.call(null,inst_19213,inst_19215);
var state_19260__$1 = state_19260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19260__$1,(13),out,inst_19220);
} else {
if((state_val_19261 === (18))){
var inst_19226 = (state_19260[(7)]);
var inst_19235 = cljs.core.first.call(null,inst_19226);
var state_19260__$1 = state_19260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19260__$1,(20),out,inst_19235);
} else {
if((state_val_19261 === (8))){
var inst_19214 = (state_19260[(8)]);
var inst_19215 = (state_19260[(11)]);
var inst_19217 = (inst_19215 < inst_19214);
var inst_19218 = inst_19217;
var state_19260__$1 = state_19260;
if(cljs.core.truth_(inst_19218)){
var statearr_19294_19322 = state_19260__$1;
(statearr_19294_19322[(1)] = (10));

} else {
var statearr_19295_19323 = state_19260__$1;
(statearr_19295_19323[(1)] = (11));

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
});})(c__17644__auto__))
;
return ((function (switch__17554__auto__,c__17644__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17555__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17555__auto____0 = (function (){
var statearr_19296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19296[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17555__auto__);

(statearr_19296[(1)] = (1));

return statearr_19296;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17555__auto____1 = (function (state_19260){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_19260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e19297){if((e19297 instanceof Object)){
var ex__17558__auto__ = e19297;
var statearr_19298_19324 = state_19260;
(statearr_19298_19324[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19325 = state_19260;
state_19260 = G__19325;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17555__auto__ = function(state_19260){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17555__auto____1.call(this,state_19260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17555__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17555__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__))
})();
var state__17646__auto__ = (function (){var statearr_19299 = f__17645__auto__.call(null);
(statearr_19299[(6)] = c__17644__auto__);

return statearr_19299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__))
);

return c__17644__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19327 = arguments.length;
switch (G__19327) {
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
var G__19330 = arguments.length;
switch (G__19330) {
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
var G__19333 = arguments.length;
switch (G__19333) {
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
var c__17644__auto___19380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___19380,out){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___19380,out){
return (function (state_19357){
var state_val_19358 = (state_19357[(1)]);
if((state_val_19358 === (7))){
var inst_19352 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19359_19381 = state_19357__$1;
(statearr_19359_19381[(2)] = inst_19352);

(statearr_19359_19381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (1))){
var inst_19334 = null;
var state_19357__$1 = (function (){var statearr_19360 = state_19357;
(statearr_19360[(7)] = inst_19334);

return statearr_19360;
})();
var statearr_19361_19382 = state_19357__$1;
(statearr_19361_19382[(2)] = null);

(statearr_19361_19382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (4))){
var inst_19337 = (state_19357[(8)]);
var inst_19337__$1 = (state_19357[(2)]);
var inst_19338 = (inst_19337__$1 == null);
var inst_19339 = cljs.core.not.call(null,inst_19338);
var state_19357__$1 = (function (){var statearr_19362 = state_19357;
(statearr_19362[(8)] = inst_19337__$1);

return statearr_19362;
})();
if(inst_19339){
var statearr_19363_19383 = state_19357__$1;
(statearr_19363_19383[(1)] = (5));

} else {
var statearr_19364_19384 = state_19357__$1;
(statearr_19364_19384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (6))){
var state_19357__$1 = state_19357;
var statearr_19365_19385 = state_19357__$1;
(statearr_19365_19385[(2)] = null);

(statearr_19365_19385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (3))){
var inst_19354 = (state_19357[(2)]);
var inst_19355 = cljs.core.async.close_BANG_.call(null,out);
var state_19357__$1 = (function (){var statearr_19366 = state_19357;
(statearr_19366[(9)] = inst_19354);

return statearr_19366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19357__$1,inst_19355);
} else {
if((state_val_19358 === (2))){
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19357__$1,(4),ch);
} else {
if((state_val_19358 === (11))){
var inst_19337 = (state_19357[(8)]);
var inst_19346 = (state_19357[(2)]);
var inst_19334 = inst_19337;
var state_19357__$1 = (function (){var statearr_19367 = state_19357;
(statearr_19367[(10)] = inst_19346);

(statearr_19367[(7)] = inst_19334);

return statearr_19367;
})();
var statearr_19368_19386 = state_19357__$1;
(statearr_19368_19386[(2)] = null);

(statearr_19368_19386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (9))){
var inst_19337 = (state_19357[(8)]);
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19357__$1,(11),out,inst_19337);
} else {
if((state_val_19358 === (5))){
var inst_19334 = (state_19357[(7)]);
var inst_19337 = (state_19357[(8)]);
var inst_19341 = cljs.core._EQ_.call(null,inst_19337,inst_19334);
var state_19357__$1 = state_19357;
if(inst_19341){
var statearr_19370_19387 = state_19357__$1;
(statearr_19370_19387[(1)] = (8));

} else {
var statearr_19371_19388 = state_19357__$1;
(statearr_19371_19388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (10))){
var inst_19349 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19372_19389 = state_19357__$1;
(statearr_19372_19389[(2)] = inst_19349);

(statearr_19372_19389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (8))){
var inst_19334 = (state_19357[(7)]);
var tmp19369 = inst_19334;
var inst_19334__$1 = tmp19369;
var state_19357__$1 = (function (){var statearr_19373 = state_19357;
(statearr_19373[(7)] = inst_19334__$1);

return statearr_19373;
})();
var statearr_19374_19390 = state_19357__$1;
(statearr_19374_19390[(2)] = null);

(statearr_19374_19390[(1)] = (2));


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
});})(c__17644__auto___19380,out))
;
return ((function (switch__17554__auto__,c__17644__auto___19380,out){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_19375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19375[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_19375[(1)] = (1));

return statearr_19375;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_19357){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_19357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e19376){if((e19376 instanceof Object)){
var ex__17558__auto__ = e19376;
var statearr_19377_19391 = state_19357;
(statearr_19377_19391[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19392 = state_19357;
state_19357 = G__19392;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_19357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_19357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___19380,out))
})();
var state__17646__auto__ = (function (){var statearr_19378 = f__17645__auto__.call(null);
(statearr_19378[(6)] = c__17644__auto___19380);

return statearr_19378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___19380,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19394 = arguments.length;
switch (G__19394) {
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
var c__17644__auto___19460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___19460,out){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___19460,out){
return (function (state_19432){
var state_val_19433 = (state_19432[(1)]);
if((state_val_19433 === (7))){
var inst_19428 = (state_19432[(2)]);
var state_19432__$1 = state_19432;
var statearr_19434_19461 = state_19432__$1;
(statearr_19434_19461[(2)] = inst_19428);

(statearr_19434_19461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (1))){
var inst_19395 = (new Array(n));
var inst_19396 = inst_19395;
var inst_19397 = (0);
var state_19432__$1 = (function (){var statearr_19435 = state_19432;
(statearr_19435[(7)] = inst_19397);

(statearr_19435[(8)] = inst_19396);

return statearr_19435;
})();
var statearr_19436_19462 = state_19432__$1;
(statearr_19436_19462[(2)] = null);

(statearr_19436_19462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (4))){
var inst_19400 = (state_19432[(9)]);
var inst_19400__$1 = (state_19432[(2)]);
var inst_19401 = (inst_19400__$1 == null);
var inst_19402 = cljs.core.not.call(null,inst_19401);
var state_19432__$1 = (function (){var statearr_19437 = state_19432;
(statearr_19437[(9)] = inst_19400__$1);

return statearr_19437;
})();
if(inst_19402){
var statearr_19438_19463 = state_19432__$1;
(statearr_19438_19463[(1)] = (5));

} else {
var statearr_19439_19464 = state_19432__$1;
(statearr_19439_19464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (15))){
var inst_19422 = (state_19432[(2)]);
var state_19432__$1 = state_19432;
var statearr_19440_19465 = state_19432__$1;
(statearr_19440_19465[(2)] = inst_19422);

(statearr_19440_19465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (13))){
var state_19432__$1 = state_19432;
var statearr_19441_19466 = state_19432__$1;
(statearr_19441_19466[(2)] = null);

(statearr_19441_19466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (6))){
var inst_19397 = (state_19432[(7)]);
var inst_19418 = (inst_19397 > (0));
var state_19432__$1 = state_19432;
if(cljs.core.truth_(inst_19418)){
var statearr_19442_19467 = state_19432__$1;
(statearr_19442_19467[(1)] = (12));

} else {
var statearr_19443_19468 = state_19432__$1;
(statearr_19443_19468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (3))){
var inst_19430 = (state_19432[(2)]);
var state_19432__$1 = state_19432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19432__$1,inst_19430);
} else {
if((state_val_19433 === (12))){
var inst_19396 = (state_19432[(8)]);
var inst_19420 = cljs.core.vec.call(null,inst_19396);
var state_19432__$1 = state_19432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19432__$1,(15),out,inst_19420);
} else {
if((state_val_19433 === (2))){
var state_19432__$1 = state_19432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19432__$1,(4),ch);
} else {
if((state_val_19433 === (11))){
var inst_19412 = (state_19432[(2)]);
var inst_19413 = (new Array(n));
var inst_19396 = inst_19413;
var inst_19397 = (0);
var state_19432__$1 = (function (){var statearr_19444 = state_19432;
(statearr_19444[(7)] = inst_19397);

(statearr_19444[(8)] = inst_19396);

(statearr_19444[(10)] = inst_19412);

return statearr_19444;
})();
var statearr_19445_19469 = state_19432__$1;
(statearr_19445_19469[(2)] = null);

(statearr_19445_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (9))){
var inst_19396 = (state_19432[(8)]);
var inst_19410 = cljs.core.vec.call(null,inst_19396);
var state_19432__$1 = state_19432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19432__$1,(11),out,inst_19410);
} else {
if((state_val_19433 === (5))){
var inst_19400 = (state_19432[(9)]);
var inst_19397 = (state_19432[(7)]);
var inst_19396 = (state_19432[(8)]);
var inst_19405 = (state_19432[(11)]);
var inst_19404 = (inst_19396[inst_19397] = inst_19400);
var inst_19405__$1 = (inst_19397 + (1));
var inst_19406 = (inst_19405__$1 < n);
var state_19432__$1 = (function (){var statearr_19446 = state_19432;
(statearr_19446[(12)] = inst_19404);

(statearr_19446[(11)] = inst_19405__$1);

return statearr_19446;
})();
if(cljs.core.truth_(inst_19406)){
var statearr_19447_19470 = state_19432__$1;
(statearr_19447_19470[(1)] = (8));

} else {
var statearr_19448_19471 = state_19432__$1;
(statearr_19448_19471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (14))){
var inst_19425 = (state_19432[(2)]);
var inst_19426 = cljs.core.async.close_BANG_.call(null,out);
var state_19432__$1 = (function (){var statearr_19450 = state_19432;
(statearr_19450[(13)] = inst_19425);

return statearr_19450;
})();
var statearr_19451_19472 = state_19432__$1;
(statearr_19451_19472[(2)] = inst_19426);

(statearr_19451_19472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (10))){
var inst_19416 = (state_19432[(2)]);
var state_19432__$1 = state_19432;
var statearr_19452_19473 = state_19432__$1;
(statearr_19452_19473[(2)] = inst_19416);

(statearr_19452_19473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (8))){
var inst_19396 = (state_19432[(8)]);
var inst_19405 = (state_19432[(11)]);
var tmp19449 = inst_19396;
var inst_19396__$1 = tmp19449;
var inst_19397 = inst_19405;
var state_19432__$1 = (function (){var statearr_19453 = state_19432;
(statearr_19453[(7)] = inst_19397);

(statearr_19453[(8)] = inst_19396__$1);

return statearr_19453;
})();
var statearr_19454_19474 = state_19432__$1;
(statearr_19454_19474[(2)] = null);

(statearr_19454_19474[(1)] = (2));


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
});})(c__17644__auto___19460,out))
;
return ((function (switch__17554__auto__,c__17644__auto___19460,out){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_19455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19455[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_19455[(1)] = (1));

return statearr_19455;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_19432){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_19432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e19456){if((e19456 instanceof Object)){
var ex__17558__auto__ = e19456;
var statearr_19457_19475 = state_19432;
(statearr_19457_19475[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19476 = state_19432;
state_19432 = G__19476;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_19432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_19432);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___19460,out))
})();
var state__17646__auto__ = (function (){var statearr_19458 = f__17645__auto__.call(null);
(statearr_19458[(6)] = c__17644__auto___19460);

return statearr_19458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___19460,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19478 = arguments.length;
switch (G__19478) {
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
var c__17644__auto___19548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___19548,out){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___19548,out){
return (function (state_19520){
var state_val_19521 = (state_19520[(1)]);
if((state_val_19521 === (7))){
var inst_19516 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19522_19549 = state_19520__$1;
(statearr_19522_19549[(2)] = inst_19516);

(statearr_19522_19549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (1))){
var inst_19479 = [];
var inst_19480 = inst_19479;
var inst_19481 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19520__$1 = (function (){var statearr_19523 = state_19520;
(statearr_19523[(7)] = inst_19480);

(statearr_19523[(8)] = inst_19481);

return statearr_19523;
})();
var statearr_19524_19550 = state_19520__$1;
(statearr_19524_19550[(2)] = null);

(statearr_19524_19550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (4))){
var inst_19484 = (state_19520[(9)]);
var inst_19484__$1 = (state_19520[(2)]);
var inst_19485 = (inst_19484__$1 == null);
var inst_19486 = cljs.core.not.call(null,inst_19485);
var state_19520__$1 = (function (){var statearr_19525 = state_19520;
(statearr_19525[(9)] = inst_19484__$1);

return statearr_19525;
})();
if(inst_19486){
var statearr_19526_19551 = state_19520__$1;
(statearr_19526_19551[(1)] = (5));

} else {
var statearr_19527_19552 = state_19520__$1;
(statearr_19527_19552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (15))){
var inst_19510 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19528_19553 = state_19520__$1;
(statearr_19528_19553[(2)] = inst_19510);

(statearr_19528_19553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (13))){
var state_19520__$1 = state_19520;
var statearr_19529_19554 = state_19520__$1;
(statearr_19529_19554[(2)] = null);

(statearr_19529_19554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (6))){
var inst_19480 = (state_19520[(7)]);
var inst_19505 = inst_19480.length;
var inst_19506 = (inst_19505 > (0));
var state_19520__$1 = state_19520;
if(cljs.core.truth_(inst_19506)){
var statearr_19530_19555 = state_19520__$1;
(statearr_19530_19555[(1)] = (12));

} else {
var statearr_19531_19556 = state_19520__$1;
(statearr_19531_19556[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (3))){
var inst_19518 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19520__$1,inst_19518);
} else {
if((state_val_19521 === (12))){
var inst_19480 = (state_19520[(7)]);
var inst_19508 = cljs.core.vec.call(null,inst_19480);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19520__$1,(15),out,inst_19508);
} else {
if((state_val_19521 === (2))){
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19520__$1,(4),ch);
} else {
if((state_val_19521 === (11))){
var inst_19488 = (state_19520[(10)]);
var inst_19484 = (state_19520[(9)]);
var inst_19498 = (state_19520[(2)]);
var inst_19499 = [];
var inst_19500 = inst_19499.push(inst_19484);
var inst_19480 = inst_19499;
var inst_19481 = inst_19488;
var state_19520__$1 = (function (){var statearr_19532 = state_19520;
(statearr_19532[(7)] = inst_19480);

(statearr_19532[(11)] = inst_19500);

(statearr_19532[(8)] = inst_19481);

(statearr_19532[(12)] = inst_19498);

return statearr_19532;
})();
var statearr_19533_19557 = state_19520__$1;
(statearr_19533_19557[(2)] = null);

(statearr_19533_19557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (9))){
var inst_19480 = (state_19520[(7)]);
var inst_19496 = cljs.core.vec.call(null,inst_19480);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19520__$1,(11),out,inst_19496);
} else {
if((state_val_19521 === (5))){
var inst_19488 = (state_19520[(10)]);
var inst_19481 = (state_19520[(8)]);
var inst_19484 = (state_19520[(9)]);
var inst_19488__$1 = f.call(null,inst_19484);
var inst_19489 = cljs.core._EQ_.call(null,inst_19488__$1,inst_19481);
var inst_19490 = cljs.core.keyword_identical_QMARK_.call(null,inst_19481,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19491 = (inst_19489) || (inst_19490);
var state_19520__$1 = (function (){var statearr_19534 = state_19520;
(statearr_19534[(10)] = inst_19488__$1);

return statearr_19534;
})();
if(cljs.core.truth_(inst_19491)){
var statearr_19535_19558 = state_19520__$1;
(statearr_19535_19558[(1)] = (8));

} else {
var statearr_19536_19559 = state_19520__$1;
(statearr_19536_19559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (14))){
var inst_19513 = (state_19520[(2)]);
var inst_19514 = cljs.core.async.close_BANG_.call(null,out);
var state_19520__$1 = (function (){var statearr_19538 = state_19520;
(statearr_19538[(13)] = inst_19513);

return statearr_19538;
})();
var statearr_19539_19560 = state_19520__$1;
(statearr_19539_19560[(2)] = inst_19514);

(statearr_19539_19560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (10))){
var inst_19503 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19540_19561 = state_19520__$1;
(statearr_19540_19561[(2)] = inst_19503);

(statearr_19540_19561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19521 === (8))){
var inst_19488 = (state_19520[(10)]);
var inst_19480 = (state_19520[(7)]);
var inst_19484 = (state_19520[(9)]);
var inst_19493 = inst_19480.push(inst_19484);
var tmp19537 = inst_19480;
var inst_19480__$1 = tmp19537;
var inst_19481 = inst_19488;
var state_19520__$1 = (function (){var statearr_19541 = state_19520;
(statearr_19541[(7)] = inst_19480__$1);

(statearr_19541[(8)] = inst_19481);

(statearr_19541[(14)] = inst_19493);

return statearr_19541;
})();
var statearr_19542_19562 = state_19520__$1;
(statearr_19542_19562[(2)] = null);

(statearr_19542_19562[(1)] = (2));


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
});})(c__17644__auto___19548,out))
;
return ((function (switch__17554__auto__,c__17644__auto___19548,out){
return (function() {
var cljs$core$async$state_machine__17555__auto__ = null;
var cljs$core$async$state_machine__17555__auto____0 = (function (){
var statearr_19543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19543[(0)] = cljs$core$async$state_machine__17555__auto__);

(statearr_19543[(1)] = (1));

return statearr_19543;
});
var cljs$core$async$state_machine__17555__auto____1 = (function (state_19520){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_19520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e19544){if((e19544 instanceof Object)){
var ex__17558__auto__ = e19544;
var statearr_19545_19563 = state_19520;
(statearr_19545_19563[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19564 = state_19520;
state_19520 = G__19564;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
cljs$core$async$state_machine__17555__auto__ = function(state_19520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17555__auto____1.call(this,state_19520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17555__auto____0;
cljs$core$async$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17555__auto____1;
return cljs$core$async$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___19548,out))
})();
var state__17646__auto__ = (function (){var statearr_19546 = f__17645__auto__.call(null);
(statearr_19546[(6)] = c__17644__auto___19548);

return statearr_19546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___19548,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504285959401
