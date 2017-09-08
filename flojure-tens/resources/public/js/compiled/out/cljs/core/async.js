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
var G__17993 = arguments.length;
switch (G__17993) {
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
if(typeof cljs.core.async.t_cljs$core$async17994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17994 = (function (f,blockable,meta17995){
this.f = f;
this.blockable = blockable;
this.meta17995 = meta17995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17996,meta17995__$1){
var self__ = this;
var _17996__$1 = this;
return (new cljs.core.async.t_cljs$core$async17994(self__.f,self__.blockable,meta17995__$1));
});

cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17996){
var self__ = this;
var _17996__$1 = this;
return self__.meta17995;
});

cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17995","meta17995",1679582611,null)], null);
});

cljs.core.async.t_cljs$core$async17994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17994";

cljs.core.async.t_cljs$core$async17994.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async17994");
});

cljs.core.async.__GT_t_cljs$core$async17994 = (function cljs$core$async$__GT_t_cljs$core$async17994(f__$1,blockable__$1,meta17995){
return (new cljs.core.async.t_cljs$core$async17994(f__$1,blockable__$1,meta17995));
});

}

return (new cljs.core.async.t_cljs$core$async17994(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18000 = arguments.length;
switch (G__18000) {
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
var G__18003 = arguments.length;
switch (G__18003) {
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
var G__18006 = arguments.length;
switch (G__18006) {
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
var val_18008 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18008);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18008,ret){
return (function (){
return fn1.call(null,val_18008);
});})(val_18008,ret))
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
var G__18010 = arguments.length;
switch (G__18010) {
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
var n__10853__auto___18012 = n;
var x_18013 = (0);
while(true){
if((x_18013 < n__10853__auto___18012)){
(a[x_18013] = (0));

var G__18014 = (x_18013 + (1));
x_18013 = G__18014;
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

var G__18015 = (i + (1));
i = G__18015;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18016 = (function (flag,meta18017){
this.flag = flag;
this.meta18017 = meta18017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18018,meta18017__$1){
var self__ = this;
var _18018__$1 = this;
return (new cljs.core.async.t_cljs$core$async18016(self__.flag,meta18017__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18018){
var self__ = this;
var _18018__$1 = this;
return self__.meta18017;
});})(flag))
;

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18016.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18017","meta18017",-2057817182,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18016";

cljs.core.async.t_cljs$core$async18016.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18016");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18016 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18016(flag__$1,meta18017){
return (new cljs.core.async.t_cljs$core$async18016(flag__$1,meta18017));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18016(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18019 = (function (flag,cb,meta18020){
this.flag = flag;
this.cb = cb;
this.meta18020 = meta18020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18021,meta18020__$1){
var self__ = this;
var _18021__$1 = this;
return (new cljs.core.async.t_cljs$core$async18019(self__.flag,self__.cb,meta18020__$1));
});

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18021){
var self__ = this;
var _18021__$1 = this;
return self__.meta18020;
});

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18020","meta18020",-529110482,null)], null);
});

cljs.core.async.t_cljs$core$async18019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18019";

cljs.core.async.t_cljs$core$async18019.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18019");
});

cljs.core.async.__GT_t_cljs$core$async18019 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18019(flag__$1,cb__$1,meta18020){
return (new cljs.core.async.t_cljs$core$async18019(flag__$1,cb__$1,meta18020));
});

}

return (new cljs.core.async.t_cljs$core$async18019(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18022_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18022_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18023_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18023_SHARP_,port], null));
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
var G__18024 = (i + (1));
i = G__18024;
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
var len__11087__auto___18030 = arguments.length;
var i__11088__auto___18031 = (0);
while(true){
if((i__11088__auto___18031 < len__11087__auto___18030)){
args__11094__auto__.push((arguments[i__11088__auto___18031]));

var G__18032 = (i__11088__auto___18031 + (1));
i__11088__auto___18031 = G__18032;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18027){
var map__18028 = p__18027;
var map__18028__$1 = ((((!((map__18028 == null)))?((((map__18028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18028):map__18028);
var opts = map__18028__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18025){
var G__18026 = cljs.core.first.call(null,seq18025);
var seq18025__$1 = cljs.core.next.call(null,seq18025);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18026,seq18025__$1);
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
var G__18034 = arguments.length;
switch (G__18034) {
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
var c__17933__auto___18080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___18080){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___18080){
return (function (state_18058){
var state_val_18059 = (state_18058[(1)]);
if((state_val_18059 === (7))){
var inst_18054 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
var statearr_18060_18081 = state_18058__$1;
(statearr_18060_18081[(2)] = inst_18054);

(statearr_18060_18081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (1))){
var state_18058__$1 = state_18058;
var statearr_18061_18082 = state_18058__$1;
(statearr_18061_18082[(2)] = null);

(statearr_18061_18082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (4))){
var inst_18037 = (state_18058[(7)]);
var inst_18037__$1 = (state_18058[(2)]);
var inst_18038 = (inst_18037__$1 == null);
var state_18058__$1 = (function (){var statearr_18062 = state_18058;
(statearr_18062[(7)] = inst_18037__$1);

return statearr_18062;
})();
if(cljs.core.truth_(inst_18038)){
var statearr_18063_18083 = state_18058__$1;
(statearr_18063_18083[(1)] = (5));

} else {
var statearr_18064_18084 = state_18058__$1;
(statearr_18064_18084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (13))){
var state_18058__$1 = state_18058;
var statearr_18065_18085 = state_18058__$1;
(statearr_18065_18085[(2)] = null);

(statearr_18065_18085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (6))){
var inst_18037 = (state_18058[(7)]);
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18058__$1,(11),to,inst_18037);
} else {
if((state_val_18059 === (3))){
var inst_18056 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18058__$1,inst_18056);
} else {
if((state_val_18059 === (12))){
var state_18058__$1 = state_18058;
var statearr_18066_18086 = state_18058__$1;
(statearr_18066_18086[(2)] = null);

(statearr_18066_18086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (2))){
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18058__$1,(4),from);
} else {
if((state_val_18059 === (11))){
var inst_18047 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
if(cljs.core.truth_(inst_18047)){
var statearr_18067_18087 = state_18058__$1;
(statearr_18067_18087[(1)] = (12));

} else {
var statearr_18068_18088 = state_18058__$1;
(statearr_18068_18088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (9))){
var state_18058__$1 = state_18058;
var statearr_18069_18089 = state_18058__$1;
(statearr_18069_18089[(2)] = null);

(statearr_18069_18089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (5))){
var state_18058__$1 = state_18058;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18070_18090 = state_18058__$1;
(statearr_18070_18090[(1)] = (8));

} else {
var statearr_18071_18091 = state_18058__$1;
(statearr_18071_18091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (14))){
var inst_18052 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
var statearr_18072_18092 = state_18058__$1;
(statearr_18072_18092[(2)] = inst_18052);

(statearr_18072_18092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (10))){
var inst_18044 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
var statearr_18073_18093 = state_18058__$1;
(statearr_18073_18093[(2)] = inst_18044);

(statearr_18073_18093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (8))){
var inst_18041 = cljs.core.async.close_BANG_.call(null,to);
var state_18058__$1 = state_18058;
var statearr_18074_18094 = state_18058__$1;
(statearr_18074_18094[(2)] = inst_18041);

(statearr_18074_18094[(1)] = (10));


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
});})(c__17933__auto___18080))
;
return ((function (switch__17843__auto__,c__17933__auto___18080){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_18075 = [null,null,null,null,null,null,null,null];
(statearr_18075[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_18075[(1)] = (1));

return statearr_18075;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_18058){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18076){if((e18076 instanceof Object)){
var ex__17847__auto__ = e18076;
var statearr_18077_18095 = state_18058;
(statearr_18077_18095[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18096 = state_18058;
state_18058 = G__18096;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_18058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_18058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___18080))
})();
var state__17935__auto__ = (function (){var statearr_18078 = f__17934__auto__.call(null);
(statearr_18078[(6)] = c__17933__auto___18080);

return statearr_18078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___18080))
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
return (function (p__18097){
var vec__18098 = p__18097;
var v = cljs.core.nth.call(null,vec__18098,(0),null);
var p = cljs.core.nth.call(null,vec__18098,(1),null);
var job = vec__18098;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17933__auto___18269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___18269,res,vec__18098,v,p,job,jobs,results){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___18269,res,vec__18098,v,p,job,jobs,results){
return (function (state_18105){
var state_val_18106 = (state_18105[(1)]);
if((state_val_18106 === (1))){
var state_18105__$1 = state_18105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18105__$1,(2),res,v);
} else {
if((state_val_18106 === (2))){
var inst_18102 = (state_18105[(2)]);
var inst_18103 = cljs.core.async.close_BANG_.call(null,res);
var state_18105__$1 = (function (){var statearr_18107 = state_18105;
(statearr_18107[(7)] = inst_18102);

return statearr_18107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18105__$1,inst_18103);
} else {
return null;
}
}
});})(c__17933__auto___18269,res,vec__18098,v,p,job,jobs,results))
;
return ((function (switch__17843__auto__,c__17933__auto___18269,res,vec__18098,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0 = (function (){
var statearr_18108 = [null,null,null,null,null,null,null,null];
(statearr_18108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__);

(statearr_18108[(1)] = (1));

return statearr_18108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1 = (function (state_18105){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18109){if((e18109 instanceof Object)){
var ex__17847__auto__ = e18109;
var statearr_18110_18270 = state_18105;
(statearr_18110_18270[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18271 = state_18105;
state_18105 = G__18271;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = function(state_18105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1.call(this,state_18105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___18269,res,vec__18098,v,p,job,jobs,results))
})();
var state__17935__auto__ = (function (){var statearr_18111 = f__17934__auto__.call(null);
(statearr_18111[(6)] = c__17933__auto___18269);

return statearr_18111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___18269,res,vec__18098,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18112){
var vec__18113 = p__18112;
var v = cljs.core.nth.call(null,vec__18113,(0),null);
var p = cljs.core.nth.call(null,vec__18113,(1),null);
var job = vec__18113;
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
var n__10853__auto___18272 = n;
var __18273 = (0);
while(true){
if((__18273 < n__10853__auto___18272)){
var G__18116_18274 = type;
var G__18116_18275__$1 = (((G__18116_18274 instanceof cljs.core.Keyword))?G__18116_18274.fqn:null);
switch (G__18116_18275__$1) {
case "compute":
var c__17933__auto___18277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18273,c__17933__auto___18277,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (__18273,c__17933__auto___18277,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async){
return (function (state_18129){
var state_val_18130 = (state_18129[(1)]);
if((state_val_18130 === (1))){
var state_18129__$1 = state_18129;
var statearr_18131_18278 = state_18129__$1;
(statearr_18131_18278[(2)] = null);

(statearr_18131_18278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18130 === (2))){
var state_18129__$1 = state_18129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18129__$1,(4),jobs);
} else {
if((state_val_18130 === (3))){
var inst_18127 = (state_18129[(2)]);
var state_18129__$1 = state_18129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18129__$1,inst_18127);
} else {
if((state_val_18130 === (4))){
var inst_18119 = (state_18129[(2)]);
var inst_18120 = process.call(null,inst_18119);
var state_18129__$1 = state_18129;
if(cljs.core.truth_(inst_18120)){
var statearr_18132_18279 = state_18129__$1;
(statearr_18132_18279[(1)] = (5));

} else {
var statearr_18133_18280 = state_18129__$1;
(statearr_18133_18280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18130 === (5))){
var state_18129__$1 = state_18129;
var statearr_18134_18281 = state_18129__$1;
(statearr_18134_18281[(2)] = null);

(statearr_18134_18281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18130 === (6))){
var state_18129__$1 = state_18129;
var statearr_18135_18282 = state_18129__$1;
(statearr_18135_18282[(2)] = null);

(statearr_18135_18282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18130 === (7))){
var inst_18125 = (state_18129[(2)]);
var state_18129__$1 = state_18129;
var statearr_18136_18283 = state_18129__$1;
(statearr_18136_18283[(2)] = inst_18125);

(statearr_18136_18283[(1)] = (3));


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
});})(__18273,c__17933__auto___18277,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async))
;
return ((function (__18273,switch__17843__auto__,c__17933__auto___18277,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0 = (function (){
var statearr_18137 = [null,null,null,null,null,null,null];
(statearr_18137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__);

(statearr_18137[(1)] = (1));

return statearr_18137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1 = (function (state_18129){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18138){if((e18138 instanceof Object)){
var ex__17847__auto__ = e18138;
var statearr_18139_18284 = state_18129;
(statearr_18139_18284[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18285 = state_18129;
state_18129 = G__18285;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = function(state_18129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1.call(this,state_18129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__;
})()
;})(__18273,switch__17843__auto__,c__17933__auto___18277,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async))
})();
var state__17935__auto__ = (function (){var statearr_18140 = f__17934__auto__.call(null);
(statearr_18140[(6)] = c__17933__auto___18277);

return statearr_18140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(__18273,c__17933__auto___18277,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async))
);


break;
case "async":
var c__17933__auto___18286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18273,c__17933__auto___18286,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (__18273,c__17933__auto___18286,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async){
return (function (state_18153){
var state_val_18154 = (state_18153[(1)]);
if((state_val_18154 === (1))){
var state_18153__$1 = state_18153;
var statearr_18155_18287 = state_18153__$1;
(statearr_18155_18287[(2)] = null);

(statearr_18155_18287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (2))){
var state_18153__$1 = state_18153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18153__$1,(4),jobs);
} else {
if((state_val_18154 === (3))){
var inst_18151 = (state_18153[(2)]);
var state_18153__$1 = state_18153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18153__$1,inst_18151);
} else {
if((state_val_18154 === (4))){
var inst_18143 = (state_18153[(2)]);
var inst_18144 = async.call(null,inst_18143);
var state_18153__$1 = state_18153;
if(cljs.core.truth_(inst_18144)){
var statearr_18156_18288 = state_18153__$1;
(statearr_18156_18288[(1)] = (5));

} else {
var statearr_18157_18289 = state_18153__$1;
(statearr_18157_18289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (5))){
var state_18153__$1 = state_18153;
var statearr_18158_18290 = state_18153__$1;
(statearr_18158_18290[(2)] = null);

(statearr_18158_18290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (6))){
var state_18153__$1 = state_18153;
var statearr_18159_18291 = state_18153__$1;
(statearr_18159_18291[(2)] = null);

(statearr_18159_18291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (7))){
var inst_18149 = (state_18153[(2)]);
var state_18153__$1 = state_18153;
var statearr_18160_18292 = state_18153__$1;
(statearr_18160_18292[(2)] = inst_18149);

(statearr_18160_18292[(1)] = (3));


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
});})(__18273,c__17933__auto___18286,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async))
;
return ((function (__18273,switch__17843__auto__,c__17933__auto___18286,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0 = (function (){
var statearr_18161 = [null,null,null,null,null,null,null];
(statearr_18161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__);

(statearr_18161[(1)] = (1));

return statearr_18161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1 = (function (state_18153){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18162){if((e18162 instanceof Object)){
var ex__17847__auto__ = e18162;
var statearr_18163_18293 = state_18153;
(statearr_18163_18293[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18294 = state_18153;
state_18153 = G__18294;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = function(state_18153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1.call(this,state_18153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__;
})()
;})(__18273,switch__17843__auto__,c__17933__auto___18286,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async))
})();
var state__17935__auto__ = (function (){var statearr_18164 = f__17934__auto__.call(null);
(statearr_18164[(6)] = c__17933__auto___18286);

return statearr_18164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(__18273,c__17933__auto___18286,G__18116_18274,G__18116_18275__$1,n__10853__auto___18272,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18116_18275__$1)].join('')));

}

var G__18295 = (__18273 + (1));
__18273 = G__18295;
continue;
} else {
}
break;
}

var c__17933__auto___18296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___18296,jobs,results,process,async){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___18296,jobs,results,process,async){
return (function (state_18186){
var state_val_18187 = (state_18186[(1)]);
if((state_val_18187 === (1))){
var state_18186__$1 = state_18186;
var statearr_18188_18297 = state_18186__$1;
(statearr_18188_18297[(2)] = null);

(statearr_18188_18297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18187 === (2))){
var state_18186__$1 = state_18186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18186__$1,(4),from);
} else {
if((state_val_18187 === (3))){
var inst_18184 = (state_18186[(2)]);
var state_18186__$1 = state_18186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18186__$1,inst_18184);
} else {
if((state_val_18187 === (4))){
var inst_18167 = (state_18186[(7)]);
var inst_18167__$1 = (state_18186[(2)]);
var inst_18168 = (inst_18167__$1 == null);
var state_18186__$1 = (function (){var statearr_18189 = state_18186;
(statearr_18189[(7)] = inst_18167__$1);

return statearr_18189;
})();
if(cljs.core.truth_(inst_18168)){
var statearr_18190_18298 = state_18186__$1;
(statearr_18190_18298[(1)] = (5));

} else {
var statearr_18191_18299 = state_18186__$1;
(statearr_18191_18299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18187 === (5))){
var inst_18170 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18186__$1 = state_18186;
var statearr_18192_18300 = state_18186__$1;
(statearr_18192_18300[(2)] = inst_18170);

(statearr_18192_18300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18187 === (6))){
var inst_18167 = (state_18186[(7)]);
var inst_18172 = (state_18186[(8)]);
var inst_18172__$1 = cljs.core.async.chan.call(null,(1));
var inst_18173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18174 = [inst_18167,inst_18172__$1];
var inst_18175 = (new cljs.core.PersistentVector(null,2,(5),inst_18173,inst_18174,null));
var state_18186__$1 = (function (){var statearr_18193 = state_18186;
(statearr_18193[(8)] = inst_18172__$1);

return statearr_18193;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18186__$1,(8),jobs,inst_18175);
} else {
if((state_val_18187 === (7))){
var inst_18182 = (state_18186[(2)]);
var state_18186__$1 = state_18186;
var statearr_18194_18301 = state_18186__$1;
(statearr_18194_18301[(2)] = inst_18182);

(statearr_18194_18301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18187 === (8))){
var inst_18172 = (state_18186[(8)]);
var inst_18177 = (state_18186[(2)]);
var state_18186__$1 = (function (){var statearr_18195 = state_18186;
(statearr_18195[(9)] = inst_18177);

return statearr_18195;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18186__$1,(9),results,inst_18172);
} else {
if((state_val_18187 === (9))){
var inst_18179 = (state_18186[(2)]);
var state_18186__$1 = (function (){var statearr_18196 = state_18186;
(statearr_18196[(10)] = inst_18179);

return statearr_18196;
})();
var statearr_18197_18302 = state_18186__$1;
(statearr_18197_18302[(2)] = null);

(statearr_18197_18302[(1)] = (2));


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
});})(c__17933__auto___18296,jobs,results,process,async))
;
return ((function (switch__17843__auto__,c__17933__auto___18296,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0 = (function (){
var statearr_18198 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18198[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__);

(statearr_18198[(1)] = (1));

return statearr_18198;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1 = (function (state_18186){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18199){if((e18199 instanceof Object)){
var ex__17847__auto__ = e18199;
var statearr_18200_18303 = state_18186;
(statearr_18200_18303[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18304 = state_18186;
state_18186 = G__18304;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = function(state_18186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1.call(this,state_18186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___18296,jobs,results,process,async))
})();
var state__17935__auto__ = (function (){var statearr_18201 = f__17934__auto__.call(null);
(statearr_18201[(6)] = c__17933__auto___18296);

return statearr_18201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___18296,jobs,results,process,async))
);


var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__,jobs,results,process,async){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__,jobs,results,process,async){
return (function (state_18239){
var state_val_18240 = (state_18239[(1)]);
if((state_val_18240 === (7))){
var inst_18235 = (state_18239[(2)]);
var state_18239__$1 = state_18239;
var statearr_18241_18305 = state_18239__$1;
(statearr_18241_18305[(2)] = inst_18235);

(statearr_18241_18305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (20))){
var state_18239__$1 = state_18239;
var statearr_18242_18306 = state_18239__$1;
(statearr_18242_18306[(2)] = null);

(statearr_18242_18306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (1))){
var state_18239__$1 = state_18239;
var statearr_18243_18307 = state_18239__$1;
(statearr_18243_18307[(2)] = null);

(statearr_18243_18307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (4))){
var inst_18204 = (state_18239[(7)]);
var inst_18204__$1 = (state_18239[(2)]);
var inst_18205 = (inst_18204__$1 == null);
var state_18239__$1 = (function (){var statearr_18244 = state_18239;
(statearr_18244[(7)] = inst_18204__$1);

return statearr_18244;
})();
if(cljs.core.truth_(inst_18205)){
var statearr_18245_18308 = state_18239__$1;
(statearr_18245_18308[(1)] = (5));

} else {
var statearr_18246_18309 = state_18239__$1;
(statearr_18246_18309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (15))){
var inst_18217 = (state_18239[(8)]);
var state_18239__$1 = state_18239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18239__$1,(18),to,inst_18217);
} else {
if((state_val_18240 === (21))){
var inst_18230 = (state_18239[(2)]);
var state_18239__$1 = state_18239;
var statearr_18247_18310 = state_18239__$1;
(statearr_18247_18310[(2)] = inst_18230);

(statearr_18247_18310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (13))){
var inst_18232 = (state_18239[(2)]);
var state_18239__$1 = (function (){var statearr_18248 = state_18239;
(statearr_18248[(9)] = inst_18232);

return statearr_18248;
})();
var statearr_18249_18311 = state_18239__$1;
(statearr_18249_18311[(2)] = null);

(statearr_18249_18311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (6))){
var inst_18204 = (state_18239[(7)]);
var state_18239__$1 = state_18239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18239__$1,(11),inst_18204);
} else {
if((state_val_18240 === (17))){
var inst_18225 = (state_18239[(2)]);
var state_18239__$1 = state_18239;
if(cljs.core.truth_(inst_18225)){
var statearr_18250_18312 = state_18239__$1;
(statearr_18250_18312[(1)] = (19));

} else {
var statearr_18251_18313 = state_18239__$1;
(statearr_18251_18313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (3))){
var inst_18237 = (state_18239[(2)]);
var state_18239__$1 = state_18239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18239__$1,inst_18237);
} else {
if((state_val_18240 === (12))){
var inst_18214 = (state_18239[(10)]);
var state_18239__$1 = state_18239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18239__$1,(14),inst_18214);
} else {
if((state_val_18240 === (2))){
var state_18239__$1 = state_18239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18239__$1,(4),results);
} else {
if((state_val_18240 === (19))){
var state_18239__$1 = state_18239;
var statearr_18252_18314 = state_18239__$1;
(statearr_18252_18314[(2)] = null);

(statearr_18252_18314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (11))){
var inst_18214 = (state_18239[(2)]);
var state_18239__$1 = (function (){var statearr_18253 = state_18239;
(statearr_18253[(10)] = inst_18214);

return statearr_18253;
})();
var statearr_18254_18315 = state_18239__$1;
(statearr_18254_18315[(2)] = null);

(statearr_18254_18315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (9))){
var state_18239__$1 = state_18239;
var statearr_18255_18316 = state_18239__$1;
(statearr_18255_18316[(2)] = null);

(statearr_18255_18316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (5))){
var state_18239__$1 = state_18239;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18256_18317 = state_18239__$1;
(statearr_18256_18317[(1)] = (8));

} else {
var statearr_18257_18318 = state_18239__$1;
(statearr_18257_18318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (14))){
var inst_18219 = (state_18239[(11)]);
var inst_18217 = (state_18239[(8)]);
var inst_18217__$1 = (state_18239[(2)]);
var inst_18218 = (inst_18217__$1 == null);
var inst_18219__$1 = cljs.core.not.call(null,inst_18218);
var state_18239__$1 = (function (){var statearr_18258 = state_18239;
(statearr_18258[(11)] = inst_18219__$1);

(statearr_18258[(8)] = inst_18217__$1);

return statearr_18258;
})();
if(inst_18219__$1){
var statearr_18259_18319 = state_18239__$1;
(statearr_18259_18319[(1)] = (15));

} else {
var statearr_18260_18320 = state_18239__$1;
(statearr_18260_18320[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (16))){
var inst_18219 = (state_18239[(11)]);
var state_18239__$1 = state_18239;
var statearr_18261_18321 = state_18239__$1;
(statearr_18261_18321[(2)] = inst_18219);

(statearr_18261_18321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (10))){
var inst_18211 = (state_18239[(2)]);
var state_18239__$1 = state_18239;
var statearr_18262_18322 = state_18239__$1;
(statearr_18262_18322[(2)] = inst_18211);

(statearr_18262_18322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (18))){
var inst_18222 = (state_18239[(2)]);
var state_18239__$1 = state_18239;
var statearr_18263_18323 = state_18239__$1;
(statearr_18263_18323[(2)] = inst_18222);

(statearr_18263_18323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (8))){
var inst_18208 = cljs.core.async.close_BANG_.call(null,to);
var state_18239__$1 = state_18239;
var statearr_18264_18324 = state_18239__$1;
(statearr_18264_18324[(2)] = inst_18208);

(statearr_18264_18324[(1)] = (10));


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
});})(c__17933__auto__,jobs,results,process,async))
;
return ((function (switch__17843__auto__,c__17933__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0 = (function (){
var statearr_18265 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__);

(statearr_18265[(1)] = (1));

return statearr_18265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1 = (function (state_18239){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18266){if((e18266 instanceof Object)){
var ex__17847__auto__ = e18266;
var statearr_18267_18325 = state_18239;
(statearr_18267_18325[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18326 = state_18239;
state_18239 = G__18326;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__ = function(state_18239){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1.call(this,state_18239);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17844__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__,jobs,results,process,async))
})();
var state__17935__auto__ = (function (){var statearr_18268 = f__17934__auto__.call(null);
(statearr_18268[(6)] = c__17933__auto__);

return statearr_18268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__,jobs,results,process,async))
);

return c__17933__auto__;
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
var G__18328 = arguments.length;
switch (G__18328) {
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
var G__18331 = arguments.length;
switch (G__18331) {
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
var G__18334 = arguments.length;
switch (G__18334) {
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
var c__17933__auto___18383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___18383,tc,fc){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___18383,tc,fc){
return (function (state_18360){
var state_val_18361 = (state_18360[(1)]);
if((state_val_18361 === (7))){
var inst_18356 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18362_18384 = state_18360__$1;
(statearr_18362_18384[(2)] = inst_18356);

(statearr_18362_18384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (1))){
var state_18360__$1 = state_18360;
var statearr_18363_18385 = state_18360__$1;
(statearr_18363_18385[(2)] = null);

(statearr_18363_18385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (4))){
var inst_18337 = (state_18360[(7)]);
var inst_18337__$1 = (state_18360[(2)]);
var inst_18338 = (inst_18337__$1 == null);
var state_18360__$1 = (function (){var statearr_18364 = state_18360;
(statearr_18364[(7)] = inst_18337__$1);

return statearr_18364;
})();
if(cljs.core.truth_(inst_18338)){
var statearr_18365_18386 = state_18360__$1;
(statearr_18365_18386[(1)] = (5));

} else {
var statearr_18366_18387 = state_18360__$1;
(statearr_18366_18387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (13))){
var state_18360__$1 = state_18360;
var statearr_18367_18388 = state_18360__$1;
(statearr_18367_18388[(2)] = null);

(statearr_18367_18388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (6))){
var inst_18337 = (state_18360[(7)]);
var inst_18343 = p.call(null,inst_18337);
var state_18360__$1 = state_18360;
if(cljs.core.truth_(inst_18343)){
var statearr_18368_18389 = state_18360__$1;
(statearr_18368_18389[(1)] = (9));

} else {
var statearr_18369_18390 = state_18360__$1;
(statearr_18369_18390[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (3))){
var inst_18358 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18360__$1,inst_18358);
} else {
if((state_val_18361 === (12))){
var state_18360__$1 = state_18360;
var statearr_18370_18391 = state_18360__$1;
(statearr_18370_18391[(2)] = null);

(statearr_18370_18391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (2))){
var state_18360__$1 = state_18360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18360__$1,(4),ch);
} else {
if((state_val_18361 === (11))){
var inst_18337 = (state_18360[(7)]);
var inst_18347 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18360__$1,(8),inst_18347,inst_18337);
} else {
if((state_val_18361 === (9))){
var state_18360__$1 = state_18360;
var statearr_18371_18392 = state_18360__$1;
(statearr_18371_18392[(2)] = tc);

(statearr_18371_18392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (5))){
var inst_18340 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18341 = cljs.core.async.close_BANG_.call(null,fc);
var state_18360__$1 = (function (){var statearr_18372 = state_18360;
(statearr_18372[(8)] = inst_18340);

return statearr_18372;
})();
var statearr_18373_18393 = state_18360__$1;
(statearr_18373_18393[(2)] = inst_18341);

(statearr_18373_18393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (14))){
var inst_18354 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18374_18394 = state_18360__$1;
(statearr_18374_18394[(2)] = inst_18354);

(statearr_18374_18394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (10))){
var state_18360__$1 = state_18360;
var statearr_18375_18395 = state_18360__$1;
(statearr_18375_18395[(2)] = fc);

(statearr_18375_18395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18361 === (8))){
var inst_18349 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
if(cljs.core.truth_(inst_18349)){
var statearr_18376_18396 = state_18360__$1;
(statearr_18376_18396[(1)] = (12));

} else {
var statearr_18377_18397 = state_18360__$1;
(statearr_18377_18397[(1)] = (13));

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
});})(c__17933__auto___18383,tc,fc))
;
return ((function (switch__17843__auto__,c__17933__auto___18383,tc,fc){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_18378 = [null,null,null,null,null,null,null,null,null];
(statearr_18378[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_18378[(1)] = (1));

return statearr_18378;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_18360){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18379){if((e18379 instanceof Object)){
var ex__17847__auto__ = e18379;
var statearr_18380_18398 = state_18360;
(statearr_18380_18398[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18399 = state_18360;
state_18360 = G__18399;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_18360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_18360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___18383,tc,fc))
})();
var state__17935__auto__ = (function (){var statearr_18381 = f__17934__auto__.call(null);
(statearr_18381[(6)] = c__17933__auto___18383);

return statearr_18381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___18383,tc,fc))
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
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__){
return (function (state_18420){
var state_val_18421 = (state_18420[(1)]);
if((state_val_18421 === (7))){
var inst_18416 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18422_18440 = state_18420__$1;
(statearr_18422_18440[(2)] = inst_18416);

(statearr_18422_18440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (1))){
var inst_18400 = init;
var state_18420__$1 = (function (){var statearr_18423 = state_18420;
(statearr_18423[(7)] = inst_18400);

return statearr_18423;
})();
var statearr_18424_18441 = state_18420__$1;
(statearr_18424_18441[(2)] = null);

(statearr_18424_18441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (4))){
var inst_18403 = (state_18420[(8)]);
var inst_18403__$1 = (state_18420[(2)]);
var inst_18404 = (inst_18403__$1 == null);
var state_18420__$1 = (function (){var statearr_18425 = state_18420;
(statearr_18425[(8)] = inst_18403__$1);

return statearr_18425;
})();
if(cljs.core.truth_(inst_18404)){
var statearr_18426_18442 = state_18420__$1;
(statearr_18426_18442[(1)] = (5));

} else {
var statearr_18427_18443 = state_18420__$1;
(statearr_18427_18443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (6))){
var inst_18403 = (state_18420[(8)]);
var inst_18400 = (state_18420[(7)]);
var inst_18407 = (state_18420[(9)]);
var inst_18407__$1 = f.call(null,inst_18400,inst_18403);
var inst_18408 = cljs.core.reduced_QMARK_.call(null,inst_18407__$1);
var state_18420__$1 = (function (){var statearr_18428 = state_18420;
(statearr_18428[(9)] = inst_18407__$1);

return statearr_18428;
})();
if(inst_18408){
var statearr_18429_18444 = state_18420__$1;
(statearr_18429_18444[(1)] = (8));

} else {
var statearr_18430_18445 = state_18420__$1;
(statearr_18430_18445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (3))){
var inst_18418 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18420__$1,inst_18418);
} else {
if((state_val_18421 === (2))){
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18420__$1,(4),ch);
} else {
if((state_val_18421 === (9))){
var inst_18407 = (state_18420[(9)]);
var inst_18400 = inst_18407;
var state_18420__$1 = (function (){var statearr_18431 = state_18420;
(statearr_18431[(7)] = inst_18400);

return statearr_18431;
})();
var statearr_18432_18446 = state_18420__$1;
(statearr_18432_18446[(2)] = null);

(statearr_18432_18446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (5))){
var inst_18400 = (state_18420[(7)]);
var state_18420__$1 = state_18420;
var statearr_18433_18447 = state_18420__$1;
(statearr_18433_18447[(2)] = inst_18400);

(statearr_18433_18447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (10))){
var inst_18414 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18434_18448 = state_18420__$1;
(statearr_18434_18448[(2)] = inst_18414);

(statearr_18434_18448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18421 === (8))){
var inst_18407 = (state_18420[(9)]);
var inst_18410 = cljs.core.deref.call(null,inst_18407);
var state_18420__$1 = state_18420;
var statearr_18435_18449 = state_18420__$1;
(statearr_18435_18449[(2)] = inst_18410);

(statearr_18435_18449[(1)] = (10));


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
});})(c__17933__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17844__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17844__auto____0 = (function (){
var statearr_18436 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18436[(0)] = cljs$core$async$reduce_$_state_machine__17844__auto__);

(statearr_18436[(1)] = (1));

return statearr_18436;
});
var cljs$core$async$reduce_$_state_machine__17844__auto____1 = (function (state_18420){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18437){if((e18437 instanceof Object)){
var ex__17847__auto__ = e18437;
var statearr_18438_18450 = state_18420;
(statearr_18438_18450[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18451 = state_18420;
state_18420 = G__18451;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17844__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17844__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17844__auto____0;
cljs$core$async$reduce_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17844__auto____1;
return cljs$core$async$reduce_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__))
})();
var state__17935__auto__ = (function (){var statearr_18439 = f__17934__auto__.call(null);
(statearr_18439[(6)] = c__17933__auto__);

return statearr_18439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__))
);

return c__17933__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__,f__$1){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__,f__$1){
return (function (state_18457){
var state_val_18458 = (state_18457[(1)]);
if((state_val_18458 === (1))){
var inst_18452 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18457__$1,(2),inst_18452);
} else {
if((state_val_18458 === (2))){
var inst_18454 = (state_18457[(2)]);
var inst_18455 = f__$1.call(null,inst_18454);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18457__$1,inst_18455);
} else {
return null;
}
}
});})(c__17933__auto__,f__$1))
;
return ((function (switch__17843__auto__,c__17933__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17844__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17844__auto____0 = (function (){
var statearr_18459 = [null,null,null,null,null,null,null];
(statearr_18459[(0)] = cljs$core$async$transduce_$_state_machine__17844__auto__);

(statearr_18459[(1)] = (1));

return statearr_18459;
});
var cljs$core$async$transduce_$_state_machine__17844__auto____1 = (function (state_18457){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18460){if((e18460 instanceof Object)){
var ex__17847__auto__ = e18460;
var statearr_18461_18463 = state_18457;
(statearr_18461_18463[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18464 = state_18457;
state_18457 = G__18464;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17844__auto__ = function(state_18457){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17844__auto____1.call(this,state_18457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17844__auto____0;
cljs$core$async$transduce_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17844__auto____1;
return cljs$core$async$transduce_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__,f__$1))
})();
var state__17935__auto__ = (function (){var statearr_18462 = f__17934__auto__.call(null);
(statearr_18462[(6)] = c__17933__auto__);

return statearr_18462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__,f__$1))
);

return c__17933__auto__;
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
var G__18466 = arguments.length;
switch (G__18466) {
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
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__){
return (function (state_18491){
var state_val_18492 = (state_18491[(1)]);
if((state_val_18492 === (7))){
var inst_18473 = (state_18491[(2)]);
var state_18491__$1 = state_18491;
var statearr_18493_18514 = state_18491__$1;
(statearr_18493_18514[(2)] = inst_18473);

(statearr_18493_18514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (1))){
var inst_18467 = cljs.core.seq.call(null,coll);
var inst_18468 = inst_18467;
var state_18491__$1 = (function (){var statearr_18494 = state_18491;
(statearr_18494[(7)] = inst_18468);

return statearr_18494;
})();
var statearr_18495_18515 = state_18491__$1;
(statearr_18495_18515[(2)] = null);

(statearr_18495_18515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (4))){
var inst_18468 = (state_18491[(7)]);
var inst_18471 = cljs.core.first.call(null,inst_18468);
var state_18491__$1 = state_18491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18491__$1,(7),ch,inst_18471);
} else {
if((state_val_18492 === (13))){
var inst_18485 = (state_18491[(2)]);
var state_18491__$1 = state_18491;
var statearr_18496_18516 = state_18491__$1;
(statearr_18496_18516[(2)] = inst_18485);

(statearr_18496_18516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (6))){
var inst_18476 = (state_18491[(2)]);
var state_18491__$1 = state_18491;
if(cljs.core.truth_(inst_18476)){
var statearr_18497_18517 = state_18491__$1;
(statearr_18497_18517[(1)] = (8));

} else {
var statearr_18498_18518 = state_18491__$1;
(statearr_18498_18518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (3))){
var inst_18489 = (state_18491[(2)]);
var state_18491__$1 = state_18491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18491__$1,inst_18489);
} else {
if((state_val_18492 === (12))){
var state_18491__$1 = state_18491;
var statearr_18499_18519 = state_18491__$1;
(statearr_18499_18519[(2)] = null);

(statearr_18499_18519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (2))){
var inst_18468 = (state_18491[(7)]);
var state_18491__$1 = state_18491;
if(cljs.core.truth_(inst_18468)){
var statearr_18500_18520 = state_18491__$1;
(statearr_18500_18520[(1)] = (4));

} else {
var statearr_18501_18521 = state_18491__$1;
(statearr_18501_18521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (11))){
var inst_18482 = cljs.core.async.close_BANG_.call(null,ch);
var state_18491__$1 = state_18491;
var statearr_18502_18522 = state_18491__$1;
(statearr_18502_18522[(2)] = inst_18482);

(statearr_18502_18522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (9))){
var state_18491__$1 = state_18491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18503_18523 = state_18491__$1;
(statearr_18503_18523[(1)] = (11));

} else {
var statearr_18504_18524 = state_18491__$1;
(statearr_18504_18524[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (5))){
var inst_18468 = (state_18491[(7)]);
var state_18491__$1 = state_18491;
var statearr_18505_18525 = state_18491__$1;
(statearr_18505_18525[(2)] = inst_18468);

(statearr_18505_18525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (10))){
var inst_18487 = (state_18491[(2)]);
var state_18491__$1 = state_18491;
var statearr_18506_18526 = state_18491__$1;
(statearr_18506_18526[(2)] = inst_18487);

(statearr_18506_18526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (8))){
var inst_18468 = (state_18491[(7)]);
var inst_18478 = cljs.core.next.call(null,inst_18468);
var inst_18468__$1 = inst_18478;
var state_18491__$1 = (function (){var statearr_18507 = state_18491;
(statearr_18507[(7)] = inst_18468__$1);

return statearr_18507;
})();
var statearr_18508_18527 = state_18491__$1;
(statearr_18508_18527[(2)] = null);

(statearr_18508_18527[(1)] = (2));


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
});})(c__17933__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_18509 = [null,null,null,null,null,null,null,null];
(statearr_18509[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_18509[(1)] = (1));

return statearr_18509;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_18491){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18510){if((e18510 instanceof Object)){
var ex__17847__auto__ = e18510;
var statearr_18511_18528 = state_18491;
(statearr_18511_18528[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18529 = state_18491;
state_18491 = G__18529;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_18491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_18491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__))
})();
var state__17935__auto__ = (function (){var statearr_18512 = f__17934__auto__.call(null);
(statearr_18512[(6)] = c__17933__auto__);

return statearr_18512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__))
);

return c__17933__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18530 = (function (ch,cs,meta18531){
this.ch = ch;
this.cs = cs;
this.meta18531 = meta18531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18532,meta18531__$1){
var self__ = this;
var _18532__$1 = this;
return (new cljs.core.async.t_cljs$core$async18530(self__.ch,self__.cs,meta18531__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18532){
var self__ = this;
var _18532__$1 = this;
return self__.meta18531;
});})(cs))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18530.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18530.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18531","meta18531",-169874505,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18530";

cljs.core.async.t_cljs$core$async18530.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18530");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18530 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18530(ch__$1,cs__$1,meta18531){
return (new cljs.core.async.t_cljs$core$async18530(ch__$1,cs__$1,meta18531));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18530(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17933__auto___18752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___18752,cs,m,dchan,dctr,done){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___18752,cs,m,dchan,dctr,done){
return (function (state_18667){
var state_val_18668 = (state_18667[(1)]);
if((state_val_18668 === (7))){
var inst_18663 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18669_18753 = state_18667__$1;
(statearr_18669_18753[(2)] = inst_18663);

(statearr_18669_18753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (20))){
var inst_18566 = (state_18667[(7)]);
var inst_18578 = cljs.core.first.call(null,inst_18566);
var inst_18579 = cljs.core.nth.call(null,inst_18578,(0),null);
var inst_18580 = cljs.core.nth.call(null,inst_18578,(1),null);
var state_18667__$1 = (function (){var statearr_18670 = state_18667;
(statearr_18670[(8)] = inst_18579);

return statearr_18670;
})();
if(cljs.core.truth_(inst_18580)){
var statearr_18671_18754 = state_18667__$1;
(statearr_18671_18754[(1)] = (22));

} else {
var statearr_18672_18755 = state_18667__$1;
(statearr_18672_18755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (27))){
var inst_18608 = (state_18667[(9)]);
var inst_18610 = (state_18667[(10)]);
var inst_18615 = (state_18667[(11)]);
var inst_18535 = (state_18667[(12)]);
var inst_18615__$1 = cljs.core._nth.call(null,inst_18608,inst_18610);
var inst_18616 = cljs.core.async.put_BANG_.call(null,inst_18615__$1,inst_18535,done);
var state_18667__$1 = (function (){var statearr_18673 = state_18667;
(statearr_18673[(11)] = inst_18615__$1);

return statearr_18673;
})();
if(cljs.core.truth_(inst_18616)){
var statearr_18674_18756 = state_18667__$1;
(statearr_18674_18756[(1)] = (30));

} else {
var statearr_18675_18757 = state_18667__$1;
(statearr_18675_18757[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (1))){
var state_18667__$1 = state_18667;
var statearr_18676_18758 = state_18667__$1;
(statearr_18676_18758[(2)] = null);

(statearr_18676_18758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (24))){
var inst_18566 = (state_18667[(7)]);
var inst_18585 = (state_18667[(2)]);
var inst_18586 = cljs.core.next.call(null,inst_18566);
var inst_18544 = inst_18586;
var inst_18545 = null;
var inst_18546 = (0);
var inst_18547 = (0);
var state_18667__$1 = (function (){var statearr_18677 = state_18667;
(statearr_18677[(13)] = inst_18547);

(statearr_18677[(14)] = inst_18545);

(statearr_18677[(15)] = inst_18546);

(statearr_18677[(16)] = inst_18585);

(statearr_18677[(17)] = inst_18544);

return statearr_18677;
})();
var statearr_18678_18759 = state_18667__$1;
(statearr_18678_18759[(2)] = null);

(statearr_18678_18759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (39))){
var state_18667__$1 = state_18667;
var statearr_18682_18760 = state_18667__$1;
(statearr_18682_18760[(2)] = null);

(statearr_18682_18760[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (4))){
var inst_18535 = (state_18667[(12)]);
var inst_18535__$1 = (state_18667[(2)]);
var inst_18536 = (inst_18535__$1 == null);
var state_18667__$1 = (function (){var statearr_18683 = state_18667;
(statearr_18683[(12)] = inst_18535__$1);

return statearr_18683;
})();
if(cljs.core.truth_(inst_18536)){
var statearr_18684_18761 = state_18667__$1;
(statearr_18684_18761[(1)] = (5));

} else {
var statearr_18685_18762 = state_18667__$1;
(statearr_18685_18762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (15))){
var inst_18547 = (state_18667[(13)]);
var inst_18545 = (state_18667[(14)]);
var inst_18546 = (state_18667[(15)]);
var inst_18544 = (state_18667[(17)]);
var inst_18562 = (state_18667[(2)]);
var inst_18563 = (inst_18547 + (1));
var tmp18679 = inst_18545;
var tmp18680 = inst_18546;
var tmp18681 = inst_18544;
var inst_18544__$1 = tmp18681;
var inst_18545__$1 = tmp18679;
var inst_18546__$1 = tmp18680;
var inst_18547__$1 = inst_18563;
var state_18667__$1 = (function (){var statearr_18686 = state_18667;
(statearr_18686[(13)] = inst_18547__$1);

(statearr_18686[(14)] = inst_18545__$1);

(statearr_18686[(15)] = inst_18546__$1);

(statearr_18686[(18)] = inst_18562);

(statearr_18686[(17)] = inst_18544__$1);

return statearr_18686;
})();
var statearr_18687_18763 = state_18667__$1;
(statearr_18687_18763[(2)] = null);

(statearr_18687_18763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (21))){
var inst_18589 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18691_18764 = state_18667__$1;
(statearr_18691_18764[(2)] = inst_18589);

(statearr_18691_18764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (31))){
var inst_18615 = (state_18667[(11)]);
var inst_18619 = done.call(null,null);
var inst_18620 = cljs.core.async.untap_STAR_.call(null,m,inst_18615);
var state_18667__$1 = (function (){var statearr_18692 = state_18667;
(statearr_18692[(19)] = inst_18619);

return statearr_18692;
})();
var statearr_18693_18765 = state_18667__$1;
(statearr_18693_18765[(2)] = inst_18620);

(statearr_18693_18765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (32))){
var inst_18608 = (state_18667[(9)]);
var inst_18610 = (state_18667[(10)]);
var inst_18607 = (state_18667[(20)]);
var inst_18609 = (state_18667[(21)]);
var inst_18622 = (state_18667[(2)]);
var inst_18623 = (inst_18610 + (1));
var tmp18688 = inst_18608;
var tmp18689 = inst_18607;
var tmp18690 = inst_18609;
var inst_18607__$1 = tmp18689;
var inst_18608__$1 = tmp18688;
var inst_18609__$1 = tmp18690;
var inst_18610__$1 = inst_18623;
var state_18667__$1 = (function (){var statearr_18694 = state_18667;
(statearr_18694[(9)] = inst_18608__$1);

(statearr_18694[(10)] = inst_18610__$1);

(statearr_18694[(20)] = inst_18607__$1);

(statearr_18694[(22)] = inst_18622);

(statearr_18694[(21)] = inst_18609__$1);

return statearr_18694;
})();
var statearr_18695_18766 = state_18667__$1;
(statearr_18695_18766[(2)] = null);

(statearr_18695_18766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (40))){
var inst_18635 = (state_18667[(23)]);
var inst_18639 = done.call(null,null);
var inst_18640 = cljs.core.async.untap_STAR_.call(null,m,inst_18635);
var state_18667__$1 = (function (){var statearr_18696 = state_18667;
(statearr_18696[(24)] = inst_18639);

return statearr_18696;
})();
var statearr_18697_18767 = state_18667__$1;
(statearr_18697_18767[(2)] = inst_18640);

(statearr_18697_18767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (33))){
var inst_18626 = (state_18667[(25)]);
var inst_18628 = cljs.core.chunked_seq_QMARK_.call(null,inst_18626);
var state_18667__$1 = state_18667;
if(inst_18628){
var statearr_18698_18768 = state_18667__$1;
(statearr_18698_18768[(1)] = (36));

} else {
var statearr_18699_18769 = state_18667__$1;
(statearr_18699_18769[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (13))){
var inst_18556 = (state_18667[(26)]);
var inst_18559 = cljs.core.async.close_BANG_.call(null,inst_18556);
var state_18667__$1 = state_18667;
var statearr_18700_18770 = state_18667__$1;
(statearr_18700_18770[(2)] = inst_18559);

(statearr_18700_18770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (22))){
var inst_18579 = (state_18667[(8)]);
var inst_18582 = cljs.core.async.close_BANG_.call(null,inst_18579);
var state_18667__$1 = state_18667;
var statearr_18701_18771 = state_18667__$1;
(statearr_18701_18771[(2)] = inst_18582);

(statearr_18701_18771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (36))){
var inst_18626 = (state_18667[(25)]);
var inst_18630 = cljs.core.chunk_first.call(null,inst_18626);
var inst_18631 = cljs.core.chunk_rest.call(null,inst_18626);
var inst_18632 = cljs.core.count.call(null,inst_18630);
var inst_18607 = inst_18631;
var inst_18608 = inst_18630;
var inst_18609 = inst_18632;
var inst_18610 = (0);
var state_18667__$1 = (function (){var statearr_18702 = state_18667;
(statearr_18702[(9)] = inst_18608);

(statearr_18702[(10)] = inst_18610);

(statearr_18702[(20)] = inst_18607);

(statearr_18702[(21)] = inst_18609);

return statearr_18702;
})();
var statearr_18703_18772 = state_18667__$1;
(statearr_18703_18772[(2)] = null);

(statearr_18703_18772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (41))){
var inst_18626 = (state_18667[(25)]);
var inst_18642 = (state_18667[(2)]);
var inst_18643 = cljs.core.next.call(null,inst_18626);
var inst_18607 = inst_18643;
var inst_18608 = null;
var inst_18609 = (0);
var inst_18610 = (0);
var state_18667__$1 = (function (){var statearr_18704 = state_18667;
(statearr_18704[(9)] = inst_18608);

(statearr_18704[(10)] = inst_18610);

(statearr_18704[(20)] = inst_18607);

(statearr_18704[(21)] = inst_18609);

(statearr_18704[(27)] = inst_18642);

return statearr_18704;
})();
var statearr_18705_18773 = state_18667__$1;
(statearr_18705_18773[(2)] = null);

(statearr_18705_18773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (43))){
var state_18667__$1 = state_18667;
var statearr_18706_18774 = state_18667__$1;
(statearr_18706_18774[(2)] = null);

(statearr_18706_18774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (29))){
var inst_18651 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18707_18775 = state_18667__$1;
(statearr_18707_18775[(2)] = inst_18651);

(statearr_18707_18775[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (44))){
var inst_18660 = (state_18667[(2)]);
var state_18667__$1 = (function (){var statearr_18708 = state_18667;
(statearr_18708[(28)] = inst_18660);

return statearr_18708;
})();
var statearr_18709_18776 = state_18667__$1;
(statearr_18709_18776[(2)] = null);

(statearr_18709_18776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (6))){
var inst_18599 = (state_18667[(29)]);
var inst_18598 = cljs.core.deref.call(null,cs);
var inst_18599__$1 = cljs.core.keys.call(null,inst_18598);
var inst_18600 = cljs.core.count.call(null,inst_18599__$1);
var inst_18601 = cljs.core.reset_BANG_.call(null,dctr,inst_18600);
var inst_18606 = cljs.core.seq.call(null,inst_18599__$1);
var inst_18607 = inst_18606;
var inst_18608 = null;
var inst_18609 = (0);
var inst_18610 = (0);
var state_18667__$1 = (function (){var statearr_18710 = state_18667;
(statearr_18710[(9)] = inst_18608);

(statearr_18710[(10)] = inst_18610);

(statearr_18710[(20)] = inst_18607);

(statearr_18710[(29)] = inst_18599__$1);

(statearr_18710[(30)] = inst_18601);

(statearr_18710[(21)] = inst_18609);

return statearr_18710;
})();
var statearr_18711_18777 = state_18667__$1;
(statearr_18711_18777[(2)] = null);

(statearr_18711_18777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (28))){
var inst_18607 = (state_18667[(20)]);
var inst_18626 = (state_18667[(25)]);
var inst_18626__$1 = cljs.core.seq.call(null,inst_18607);
var state_18667__$1 = (function (){var statearr_18712 = state_18667;
(statearr_18712[(25)] = inst_18626__$1);

return statearr_18712;
})();
if(inst_18626__$1){
var statearr_18713_18778 = state_18667__$1;
(statearr_18713_18778[(1)] = (33));

} else {
var statearr_18714_18779 = state_18667__$1;
(statearr_18714_18779[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (25))){
var inst_18610 = (state_18667[(10)]);
var inst_18609 = (state_18667[(21)]);
var inst_18612 = (inst_18610 < inst_18609);
var inst_18613 = inst_18612;
var state_18667__$1 = state_18667;
if(cljs.core.truth_(inst_18613)){
var statearr_18715_18780 = state_18667__$1;
(statearr_18715_18780[(1)] = (27));

} else {
var statearr_18716_18781 = state_18667__$1;
(statearr_18716_18781[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (34))){
var state_18667__$1 = state_18667;
var statearr_18717_18782 = state_18667__$1;
(statearr_18717_18782[(2)] = null);

(statearr_18717_18782[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (17))){
var state_18667__$1 = state_18667;
var statearr_18718_18783 = state_18667__$1;
(statearr_18718_18783[(2)] = null);

(statearr_18718_18783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (3))){
var inst_18665 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18667__$1,inst_18665);
} else {
if((state_val_18668 === (12))){
var inst_18594 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18719_18784 = state_18667__$1;
(statearr_18719_18784[(2)] = inst_18594);

(statearr_18719_18784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (2))){
var state_18667__$1 = state_18667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18667__$1,(4),ch);
} else {
if((state_val_18668 === (23))){
var state_18667__$1 = state_18667;
var statearr_18720_18785 = state_18667__$1;
(statearr_18720_18785[(2)] = null);

(statearr_18720_18785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (35))){
var inst_18649 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18721_18786 = state_18667__$1;
(statearr_18721_18786[(2)] = inst_18649);

(statearr_18721_18786[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (19))){
var inst_18566 = (state_18667[(7)]);
var inst_18570 = cljs.core.chunk_first.call(null,inst_18566);
var inst_18571 = cljs.core.chunk_rest.call(null,inst_18566);
var inst_18572 = cljs.core.count.call(null,inst_18570);
var inst_18544 = inst_18571;
var inst_18545 = inst_18570;
var inst_18546 = inst_18572;
var inst_18547 = (0);
var state_18667__$1 = (function (){var statearr_18722 = state_18667;
(statearr_18722[(13)] = inst_18547);

(statearr_18722[(14)] = inst_18545);

(statearr_18722[(15)] = inst_18546);

(statearr_18722[(17)] = inst_18544);

return statearr_18722;
})();
var statearr_18723_18787 = state_18667__$1;
(statearr_18723_18787[(2)] = null);

(statearr_18723_18787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (11))){
var inst_18566 = (state_18667[(7)]);
var inst_18544 = (state_18667[(17)]);
var inst_18566__$1 = cljs.core.seq.call(null,inst_18544);
var state_18667__$1 = (function (){var statearr_18724 = state_18667;
(statearr_18724[(7)] = inst_18566__$1);

return statearr_18724;
})();
if(inst_18566__$1){
var statearr_18725_18788 = state_18667__$1;
(statearr_18725_18788[(1)] = (16));

} else {
var statearr_18726_18789 = state_18667__$1;
(statearr_18726_18789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (9))){
var inst_18596 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18727_18790 = state_18667__$1;
(statearr_18727_18790[(2)] = inst_18596);

(statearr_18727_18790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (5))){
var inst_18542 = cljs.core.deref.call(null,cs);
var inst_18543 = cljs.core.seq.call(null,inst_18542);
var inst_18544 = inst_18543;
var inst_18545 = null;
var inst_18546 = (0);
var inst_18547 = (0);
var state_18667__$1 = (function (){var statearr_18728 = state_18667;
(statearr_18728[(13)] = inst_18547);

(statearr_18728[(14)] = inst_18545);

(statearr_18728[(15)] = inst_18546);

(statearr_18728[(17)] = inst_18544);

return statearr_18728;
})();
var statearr_18729_18791 = state_18667__$1;
(statearr_18729_18791[(2)] = null);

(statearr_18729_18791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (14))){
var state_18667__$1 = state_18667;
var statearr_18730_18792 = state_18667__$1;
(statearr_18730_18792[(2)] = null);

(statearr_18730_18792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (45))){
var inst_18657 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18731_18793 = state_18667__$1;
(statearr_18731_18793[(2)] = inst_18657);

(statearr_18731_18793[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (26))){
var inst_18599 = (state_18667[(29)]);
var inst_18653 = (state_18667[(2)]);
var inst_18654 = cljs.core.seq.call(null,inst_18599);
var state_18667__$1 = (function (){var statearr_18732 = state_18667;
(statearr_18732[(31)] = inst_18653);

return statearr_18732;
})();
if(inst_18654){
var statearr_18733_18794 = state_18667__$1;
(statearr_18733_18794[(1)] = (42));

} else {
var statearr_18734_18795 = state_18667__$1;
(statearr_18734_18795[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (16))){
var inst_18566 = (state_18667[(7)]);
var inst_18568 = cljs.core.chunked_seq_QMARK_.call(null,inst_18566);
var state_18667__$1 = state_18667;
if(inst_18568){
var statearr_18735_18796 = state_18667__$1;
(statearr_18735_18796[(1)] = (19));

} else {
var statearr_18736_18797 = state_18667__$1;
(statearr_18736_18797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (38))){
var inst_18646 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18737_18798 = state_18667__$1;
(statearr_18737_18798[(2)] = inst_18646);

(statearr_18737_18798[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (30))){
var state_18667__$1 = state_18667;
var statearr_18738_18799 = state_18667__$1;
(statearr_18738_18799[(2)] = null);

(statearr_18738_18799[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (10))){
var inst_18547 = (state_18667[(13)]);
var inst_18545 = (state_18667[(14)]);
var inst_18555 = cljs.core._nth.call(null,inst_18545,inst_18547);
var inst_18556 = cljs.core.nth.call(null,inst_18555,(0),null);
var inst_18557 = cljs.core.nth.call(null,inst_18555,(1),null);
var state_18667__$1 = (function (){var statearr_18739 = state_18667;
(statearr_18739[(26)] = inst_18556);

return statearr_18739;
})();
if(cljs.core.truth_(inst_18557)){
var statearr_18740_18800 = state_18667__$1;
(statearr_18740_18800[(1)] = (13));

} else {
var statearr_18741_18801 = state_18667__$1;
(statearr_18741_18801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (18))){
var inst_18592 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18742_18802 = state_18667__$1;
(statearr_18742_18802[(2)] = inst_18592);

(statearr_18742_18802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (42))){
var state_18667__$1 = state_18667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18667__$1,(45),dchan);
} else {
if((state_val_18668 === (37))){
var inst_18626 = (state_18667[(25)]);
var inst_18635 = (state_18667[(23)]);
var inst_18535 = (state_18667[(12)]);
var inst_18635__$1 = cljs.core.first.call(null,inst_18626);
var inst_18636 = cljs.core.async.put_BANG_.call(null,inst_18635__$1,inst_18535,done);
var state_18667__$1 = (function (){var statearr_18743 = state_18667;
(statearr_18743[(23)] = inst_18635__$1);

return statearr_18743;
})();
if(cljs.core.truth_(inst_18636)){
var statearr_18744_18803 = state_18667__$1;
(statearr_18744_18803[(1)] = (39));

} else {
var statearr_18745_18804 = state_18667__$1;
(statearr_18745_18804[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (8))){
var inst_18547 = (state_18667[(13)]);
var inst_18546 = (state_18667[(15)]);
var inst_18549 = (inst_18547 < inst_18546);
var inst_18550 = inst_18549;
var state_18667__$1 = state_18667;
if(cljs.core.truth_(inst_18550)){
var statearr_18746_18805 = state_18667__$1;
(statearr_18746_18805[(1)] = (10));

} else {
var statearr_18747_18806 = state_18667__$1;
(statearr_18747_18806[(1)] = (11));

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
});})(c__17933__auto___18752,cs,m,dchan,dctr,done))
;
return ((function (switch__17843__auto__,c__17933__auto___18752,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17844__auto__ = null;
var cljs$core$async$mult_$_state_machine__17844__auto____0 = (function (){
var statearr_18748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18748[(0)] = cljs$core$async$mult_$_state_machine__17844__auto__);

(statearr_18748[(1)] = (1));

return statearr_18748;
});
var cljs$core$async$mult_$_state_machine__17844__auto____1 = (function (state_18667){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18749){if((e18749 instanceof Object)){
var ex__17847__auto__ = e18749;
var statearr_18750_18807 = state_18667;
(statearr_18750_18807[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18808 = state_18667;
state_18667 = G__18808;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17844__auto__ = function(state_18667){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17844__auto____1.call(this,state_18667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17844__auto____0;
cljs$core$async$mult_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17844__auto____1;
return cljs$core$async$mult_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___18752,cs,m,dchan,dctr,done))
})();
var state__17935__auto__ = (function (){var statearr_18751 = f__17934__auto__.call(null);
(statearr_18751[(6)] = c__17933__auto___18752);

return statearr_18751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___18752,cs,m,dchan,dctr,done))
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
var G__18810 = arguments.length;
switch (G__18810) {
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
var len__11087__auto___18822 = arguments.length;
var i__11088__auto___18823 = (0);
while(true){
if((i__11088__auto___18823 < len__11087__auto___18822)){
args__11094__auto__.push((arguments[i__11088__auto___18823]));

var G__18824 = (i__11088__auto___18823 + (1));
i__11088__auto___18823 = G__18824;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((3) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18816){
var map__18817 = p__18816;
var map__18817__$1 = ((((!((map__18817 == null)))?((((map__18817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18817):map__18817);
var opts = map__18817__$1;
var statearr_18819_18825 = state;
(statearr_18819_18825[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__18817,map__18817__$1,opts){
return (function (val){
var statearr_18820_18826 = state;
(statearr_18820_18826[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18817,map__18817__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_18821_18827 = state;
(statearr_18821_18827[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18812){
var G__18813 = cljs.core.first.call(null,seq18812);
var seq18812__$1 = cljs.core.next.call(null,seq18812);
var G__18814 = cljs.core.first.call(null,seq18812__$1);
var seq18812__$2 = cljs.core.next.call(null,seq18812__$1);
var G__18815 = cljs.core.first.call(null,seq18812__$2);
var seq18812__$3 = cljs.core.next.call(null,seq18812__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18813,G__18814,G__18815,seq18812__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18828 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18829){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18829 = meta18829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18830,meta18829__$1){
var self__ = this;
var _18830__$1 = this;
return (new cljs.core.async.t_cljs$core$async18828(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18830){
var self__ = this;
var _18830__$1 = this;
return self__.meta18829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18828.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta18829","meta18829",-922505894,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18828";

cljs.core.async.t_cljs$core$async18828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async18828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18828(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18829){
return (new cljs.core.async.t_cljs$core$async18828(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18828(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17933__auto___18992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___18992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___18992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18932){
var state_val_18933 = (state_18932[(1)]);
if((state_val_18933 === (7))){
var inst_18847 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18934_18993 = state_18932__$1;
(statearr_18934_18993[(2)] = inst_18847);

(statearr_18934_18993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (20))){
var inst_18859 = (state_18932[(7)]);
var state_18932__$1 = state_18932;
var statearr_18935_18994 = state_18932__$1;
(statearr_18935_18994[(2)] = inst_18859);

(statearr_18935_18994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (27))){
var state_18932__$1 = state_18932;
var statearr_18936_18995 = state_18932__$1;
(statearr_18936_18995[(2)] = null);

(statearr_18936_18995[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (1))){
var inst_18834 = (state_18932[(8)]);
var inst_18834__$1 = calc_state.call(null);
var inst_18836 = (inst_18834__$1 == null);
var inst_18837 = cljs.core.not.call(null,inst_18836);
var state_18932__$1 = (function (){var statearr_18937 = state_18932;
(statearr_18937[(8)] = inst_18834__$1);

return statearr_18937;
})();
if(inst_18837){
var statearr_18938_18996 = state_18932__$1;
(statearr_18938_18996[(1)] = (2));

} else {
var statearr_18939_18997 = state_18932__$1;
(statearr_18939_18997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (24))){
var inst_18906 = (state_18932[(9)]);
var inst_18883 = (state_18932[(10)]);
var inst_18892 = (state_18932[(11)]);
var inst_18906__$1 = inst_18883.call(null,inst_18892);
var state_18932__$1 = (function (){var statearr_18940 = state_18932;
(statearr_18940[(9)] = inst_18906__$1);

return statearr_18940;
})();
if(cljs.core.truth_(inst_18906__$1)){
var statearr_18941_18998 = state_18932__$1;
(statearr_18941_18998[(1)] = (29));

} else {
var statearr_18942_18999 = state_18932__$1;
(statearr_18942_18999[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (4))){
var inst_18850 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18850)){
var statearr_18943_19000 = state_18932__$1;
(statearr_18943_19000[(1)] = (8));

} else {
var statearr_18944_19001 = state_18932__$1;
(statearr_18944_19001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (15))){
var inst_18877 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18877)){
var statearr_18945_19002 = state_18932__$1;
(statearr_18945_19002[(1)] = (19));

} else {
var statearr_18946_19003 = state_18932__$1;
(statearr_18946_19003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (21))){
var inst_18882 = (state_18932[(12)]);
var inst_18882__$1 = (state_18932[(2)]);
var inst_18883 = cljs.core.get.call(null,inst_18882__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18884 = cljs.core.get.call(null,inst_18882__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18885 = cljs.core.get.call(null,inst_18882__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18932__$1 = (function (){var statearr_18947 = state_18932;
(statearr_18947[(10)] = inst_18883);

(statearr_18947[(12)] = inst_18882__$1);

(statearr_18947[(13)] = inst_18884);

return statearr_18947;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18932__$1,(22),inst_18885);
} else {
if((state_val_18933 === (31))){
var inst_18914 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18914)){
var statearr_18948_19004 = state_18932__$1;
(statearr_18948_19004[(1)] = (32));

} else {
var statearr_18949_19005 = state_18932__$1;
(statearr_18949_19005[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (32))){
var inst_18891 = (state_18932[(14)]);
var state_18932__$1 = state_18932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18932__$1,(35),out,inst_18891);
} else {
if((state_val_18933 === (33))){
var inst_18882 = (state_18932[(12)]);
var inst_18859 = inst_18882;
var state_18932__$1 = (function (){var statearr_18950 = state_18932;
(statearr_18950[(7)] = inst_18859);

return statearr_18950;
})();
var statearr_18951_19006 = state_18932__$1;
(statearr_18951_19006[(2)] = null);

(statearr_18951_19006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (13))){
var inst_18859 = (state_18932[(7)]);
var inst_18866 = inst_18859.cljs$lang$protocol_mask$partition0$;
var inst_18867 = (inst_18866 & (64));
var inst_18868 = inst_18859.cljs$core$ISeq$;
var inst_18869 = (cljs.core.PROTOCOL_SENTINEL === inst_18868);
var inst_18870 = (inst_18867) || (inst_18869);
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18870)){
var statearr_18952_19007 = state_18932__$1;
(statearr_18952_19007[(1)] = (16));

} else {
var statearr_18953_19008 = state_18932__$1;
(statearr_18953_19008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (22))){
var inst_18892 = (state_18932[(11)]);
var inst_18891 = (state_18932[(14)]);
var inst_18890 = (state_18932[(2)]);
var inst_18891__$1 = cljs.core.nth.call(null,inst_18890,(0),null);
var inst_18892__$1 = cljs.core.nth.call(null,inst_18890,(1),null);
var inst_18893 = (inst_18891__$1 == null);
var inst_18894 = cljs.core._EQ_.call(null,inst_18892__$1,change);
var inst_18895 = (inst_18893) || (inst_18894);
var state_18932__$1 = (function (){var statearr_18954 = state_18932;
(statearr_18954[(11)] = inst_18892__$1);

(statearr_18954[(14)] = inst_18891__$1);

return statearr_18954;
})();
if(cljs.core.truth_(inst_18895)){
var statearr_18955_19009 = state_18932__$1;
(statearr_18955_19009[(1)] = (23));

} else {
var statearr_18956_19010 = state_18932__$1;
(statearr_18956_19010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (36))){
var inst_18882 = (state_18932[(12)]);
var inst_18859 = inst_18882;
var state_18932__$1 = (function (){var statearr_18957 = state_18932;
(statearr_18957[(7)] = inst_18859);

return statearr_18957;
})();
var statearr_18958_19011 = state_18932__$1;
(statearr_18958_19011[(2)] = null);

(statearr_18958_19011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (29))){
var inst_18906 = (state_18932[(9)]);
var state_18932__$1 = state_18932;
var statearr_18959_19012 = state_18932__$1;
(statearr_18959_19012[(2)] = inst_18906);

(statearr_18959_19012[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (6))){
var state_18932__$1 = state_18932;
var statearr_18960_19013 = state_18932__$1;
(statearr_18960_19013[(2)] = false);

(statearr_18960_19013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (28))){
var inst_18902 = (state_18932[(2)]);
var inst_18903 = calc_state.call(null);
var inst_18859 = inst_18903;
var state_18932__$1 = (function (){var statearr_18961 = state_18932;
(statearr_18961[(7)] = inst_18859);

(statearr_18961[(15)] = inst_18902);

return statearr_18961;
})();
var statearr_18962_19014 = state_18932__$1;
(statearr_18962_19014[(2)] = null);

(statearr_18962_19014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (25))){
var inst_18928 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18963_19015 = state_18932__$1;
(statearr_18963_19015[(2)] = inst_18928);

(statearr_18963_19015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (34))){
var inst_18926 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18964_19016 = state_18932__$1;
(statearr_18964_19016[(2)] = inst_18926);

(statearr_18964_19016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (17))){
var state_18932__$1 = state_18932;
var statearr_18965_19017 = state_18932__$1;
(statearr_18965_19017[(2)] = false);

(statearr_18965_19017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (3))){
var state_18932__$1 = state_18932;
var statearr_18966_19018 = state_18932__$1;
(statearr_18966_19018[(2)] = false);

(statearr_18966_19018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (12))){
var inst_18930 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18932__$1,inst_18930);
} else {
if((state_val_18933 === (2))){
var inst_18834 = (state_18932[(8)]);
var inst_18839 = inst_18834.cljs$lang$protocol_mask$partition0$;
var inst_18840 = (inst_18839 & (64));
var inst_18841 = inst_18834.cljs$core$ISeq$;
var inst_18842 = (cljs.core.PROTOCOL_SENTINEL === inst_18841);
var inst_18843 = (inst_18840) || (inst_18842);
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18843)){
var statearr_18967_19019 = state_18932__$1;
(statearr_18967_19019[(1)] = (5));

} else {
var statearr_18968_19020 = state_18932__$1;
(statearr_18968_19020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (23))){
var inst_18891 = (state_18932[(14)]);
var inst_18897 = (inst_18891 == null);
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18897)){
var statearr_18969_19021 = state_18932__$1;
(statearr_18969_19021[(1)] = (26));

} else {
var statearr_18970_19022 = state_18932__$1;
(statearr_18970_19022[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (35))){
var inst_18917 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18917)){
var statearr_18971_19023 = state_18932__$1;
(statearr_18971_19023[(1)] = (36));

} else {
var statearr_18972_19024 = state_18932__$1;
(statearr_18972_19024[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (19))){
var inst_18859 = (state_18932[(7)]);
var inst_18879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18859);
var state_18932__$1 = state_18932;
var statearr_18973_19025 = state_18932__$1;
(statearr_18973_19025[(2)] = inst_18879);

(statearr_18973_19025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (11))){
var inst_18859 = (state_18932[(7)]);
var inst_18863 = (inst_18859 == null);
var inst_18864 = cljs.core.not.call(null,inst_18863);
var state_18932__$1 = state_18932;
if(inst_18864){
var statearr_18974_19026 = state_18932__$1;
(statearr_18974_19026[(1)] = (13));

} else {
var statearr_18975_19027 = state_18932__$1;
(statearr_18975_19027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (9))){
var inst_18834 = (state_18932[(8)]);
var state_18932__$1 = state_18932;
var statearr_18976_19028 = state_18932__$1;
(statearr_18976_19028[(2)] = inst_18834);

(statearr_18976_19028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (5))){
var state_18932__$1 = state_18932;
var statearr_18977_19029 = state_18932__$1;
(statearr_18977_19029[(2)] = true);

(statearr_18977_19029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (14))){
var state_18932__$1 = state_18932;
var statearr_18978_19030 = state_18932__$1;
(statearr_18978_19030[(2)] = false);

(statearr_18978_19030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (26))){
var inst_18892 = (state_18932[(11)]);
var inst_18899 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18892);
var state_18932__$1 = state_18932;
var statearr_18979_19031 = state_18932__$1;
(statearr_18979_19031[(2)] = inst_18899);

(statearr_18979_19031[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (16))){
var state_18932__$1 = state_18932;
var statearr_18980_19032 = state_18932__$1;
(statearr_18980_19032[(2)] = true);

(statearr_18980_19032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (38))){
var inst_18922 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18981_19033 = state_18932__$1;
(statearr_18981_19033[(2)] = inst_18922);

(statearr_18981_19033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (30))){
var inst_18883 = (state_18932[(10)]);
var inst_18884 = (state_18932[(13)]);
var inst_18892 = (state_18932[(11)]);
var inst_18909 = cljs.core.empty_QMARK_.call(null,inst_18883);
var inst_18910 = inst_18884.call(null,inst_18892);
var inst_18911 = cljs.core.not.call(null,inst_18910);
var inst_18912 = (inst_18909) && (inst_18911);
var state_18932__$1 = state_18932;
var statearr_18982_19034 = state_18932__$1;
(statearr_18982_19034[(2)] = inst_18912);

(statearr_18982_19034[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (10))){
var inst_18834 = (state_18932[(8)]);
var inst_18855 = (state_18932[(2)]);
var inst_18856 = cljs.core.get.call(null,inst_18855,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18857 = cljs.core.get.call(null,inst_18855,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18858 = cljs.core.get.call(null,inst_18855,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18859 = inst_18834;
var state_18932__$1 = (function (){var statearr_18983 = state_18932;
(statearr_18983[(16)] = inst_18858);

(statearr_18983[(17)] = inst_18857);

(statearr_18983[(18)] = inst_18856);

(statearr_18983[(7)] = inst_18859);

return statearr_18983;
})();
var statearr_18984_19035 = state_18932__$1;
(statearr_18984_19035[(2)] = null);

(statearr_18984_19035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (18))){
var inst_18874 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18985_19036 = state_18932__$1;
(statearr_18985_19036[(2)] = inst_18874);

(statearr_18985_19036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (37))){
var state_18932__$1 = state_18932;
var statearr_18986_19037 = state_18932__$1;
(statearr_18986_19037[(2)] = null);

(statearr_18986_19037[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (8))){
var inst_18834 = (state_18932[(8)]);
var inst_18852 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18834);
var state_18932__$1 = state_18932;
var statearr_18987_19038 = state_18932__$1;
(statearr_18987_19038[(2)] = inst_18852);

(statearr_18987_19038[(1)] = (10));


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
});})(c__17933__auto___18992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17843__auto__,c__17933__auto___18992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17844__auto__ = null;
var cljs$core$async$mix_$_state_machine__17844__auto____0 = (function (){
var statearr_18988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18988[(0)] = cljs$core$async$mix_$_state_machine__17844__auto__);

(statearr_18988[(1)] = (1));

return statearr_18988;
});
var cljs$core$async$mix_$_state_machine__17844__auto____1 = (function (state_18932){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_18932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e18989){if((e18989 instanceof Object)){
var ex__17847__auto__ = e18989;
var statearr_18990_19039 = state_18932;
(statearr_18990_19039[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19040 = state_18932;
state_18932 = G__19040;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17844__auto__ = function(state_18932){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17844__auto____1.call(this,state_18932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17844__auto____0;
cljs$core$async$mix_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17844__auto____1;
return cljs$core$async$mix_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___18992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17935__auto__ = (function (){var statearr_18991 = f__17934__auto__.call(null);
(statearr_18991[(6)] = c__17933__auto___18992);

return statearr_18991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___18992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__19042 = arguments.length;
switch (G__19042) {
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
var G__19046 = arguments.length;
switch (G__19046) {
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
return (function (p1__19044_SHARP_){
if(cljs.core.truth_(p1__19044_SHARP_.call(null,topic))){
return p1__19044_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19044_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9810__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19047 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19048){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19048 = meta19048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19049,meta19048__$1){
var self__ = this;
var _19049__$1 = this;
return (new cljs.core.async.t_cljs$core$async19047(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19048__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19049){
var self__ = this;
var _19049__$1 = this;
return self__.meta19048;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19047.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19048","meta19048",-812654544,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19047";

cljs.core.async.t_cljs$core$async19047.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19047");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19047 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19047(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19048){
return (new cljs.core.async.t_cljs$core$async19047(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19048));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19047(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17933__auto___19167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___19167,mults,ensure_mult,p){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___19167,mults,ensure_mult,p){
return (function (state_19121){
var state_val_19122 = (state_19121[(1)]);
if((state_val_19122 === (7))){
var inst_19117 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
var statearr_19123_19168 = state_19121__$1;
(statearr_19123_19168[(2)] = inst_19117);

(statearr_19123_19168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (20))){
var state_19121__$1 = state_19121;
var statearr_19124_19169 = state_19121__$1;
(statearr_19124_19169[(2)] = null);

(statearr_19124_19169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (1))){
var state_19121__$1 = state_19121;
var statearr_19125_19170 = state_19121__$1;
(statearr_19125_19170[(2)] = null);

(statearr_19125_19170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (24))){
var inst_19100 = (state_19121[(7)]);
var inst_19109 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19100);
var state_19121__$1 = state_19121;
var statearr_19126_19171 = state_19121__$1;
(statearr_19126_19171[(2)] = inst_19109);

(statearr_19126_19171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (4))){
var inst_19052 = (state_19121[(8)]);
var inst_19052__$1 = (state_19121[(2)]);
var inst_19053 = (inst_19052__$1 == null);
var state_19121__$1 = (function (){var statearr_19127 = state_19121;
(statearr_19127[(8)] = inst_19052__$1);

return statearr_19127;
})();
if(cljs.core.truth_(inst_19053)){
var statearr_19128_19172 = state_19121__$1;
(statearr_19128_19172[(1)] = (5));

} else {
var statearr_19129_19173 = state_19121__$1;
(statearr_19129_19173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (15))){
var inst_19094 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
var statearr_19130_19174 = state_19121__$1;
(statearr_19130_19174[(2)] = inst_19094);

(statearr_19130_19174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (21))){
var inst_19114 = (state_19121[(2)]);
var state_19121__$1 = (function (){var statearr_19131 = state_19121;
(statearr_19131[(9)] = inst_19114);

return statearr_19131;
})();
var statearr_19132_19175 = state_19121__$1;
(statearr_19132_19175[(2)] = null);

(statearr_19132_19175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (13))){
var inst_19076 = (state_19121[(10)]);
var inst_19078 = cljs.core.chunked_seq_QMARK_.call(null,inst_19076);
var state_19121__$1 = state_19121;
if(inst_19078){
var statearr_19133_19176 = state_19121__$1;
(statearr_19133_19176[(1)] = (16));

} else {
var statearr_19134_19177 = state_19121__$1;
(statearr_19134_19177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (22))){
var inst_19106 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
if(cljs.core.truth_(inst_19106)){
var statearr_19135_19178 = state_19121__$1;
(statearr_19135_19178[(1)] = (23));

} else {
var statearr_19136_19179 = state_19121__$1;
(statearr_19136_19179[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (6))){
var inst_19052 = (state_19121[(8)]);
var inst_19102 = (state_19121[(11)]);
var inst_19100 = (state_19121[(7)]);
var inst_19100__$1 = topic_fn.call(null,inst_19052);
var inst_19101 = cljs.core.deref.call(null,mults);
var inst_19102__$1 = cljs.core.get.call(null,inst_19101,inst_19100__$1);
var state_19121__$1 = (function (){var statearr_19137 = state_19121;
(statearr_19137[(11)] = inst_19102__$1);

(statearr_19137[(7)] = inst_19100__$1);

return statearr_19137;
})();
if(cljs.core.truth_(inst_19102__$1)){
var statearr_19138_19180 = state_19121__$1;
(statearr_19138_19180[(1)] = (19));

} else {
var statearr_19139_19181 = state_19121__$1;
(statearr_19139_19181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (25))){
var inst_19111 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
var statearr_19140_19182 = state_19121__$1;
(statearr_19140_19182[(2)] = inst_19111);

(statearr_19140_19182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (17))){
var inst_19076 = (state_19121[(10)]);
var inst_19085 = cljs.core.first.call(null,inst_19076);
var inst_19086 = cljs.core.async.muxch_STAR_.call(null,inst_19085);
var inst_19087 = cljs.core.async.close_BANG_.call(null,inst_19086);
var inst_19088 = cljs.core.next.call(null,inst_19076);
var inst_19062 = inst_19088;
var inst_19063 = null;
var inst_19064 = (0);
var inst_19065 = (0);
var state_19121__$1 = (function (){var statearr_19141 = state_19121;
(statearr_19141[(12)] = inst_19065);

(statearr_19141[(13)] = inst_19063);

(statearr_19141[(14)] = inst_19087);

(statearr_19141[(15)] = inst_19062);

(statearr_19141[(16)] = inst_19064);

return statearr_19141;
})();
var statearr_19142_19183 = state_19121__$1;
(statearr_19142_19183[(2)] = null);

(statearr_19142_19183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (3))){
var inst_19119 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19121__$1,inst_19119);
} else {
if((state_val_19122 === (12))){
var inst_19096 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
var statearr_19143_19184 = state_19121__$1;
(statearr_19143_19184[(2)] = inst_19096);

(statearr_19143_19184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (2))){
var state_19121__$1 = state_19121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19121__$1,(4),ch);
} else {
if((state_val_19122 === (23))){
var state_19121__$1 = state_19121;
var statearr_19144_19185 = state_19121__$1;
(statearr_19144_19185[(2)] = null);

(statearr_19144_19185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (19))){
var inst_19052 = (state_19121[(8)]);
var inst_19102 = (state_19121[(11)]);
var inst_19104 = cljs.core.async.muxch_STAR_.call(null,inst_19102);
var state_19121__$1 = state_19121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19121__$1,(22),inst_19104,inst_19052);
} else {
if((state_val_19122 === (11))){
var inst_19062 = (state_19121[(15)]);
var inst_19076 = (state_19121[(10)]);
var inst_19076__$1 = cljs.core.seq.call(null,inst_19062);
var state_19121__$1 = (function (){var statearr_19145 = state_19121;
(statearr_19145[(10)] = inst_19076__$1);

return statearr_19145;
})();
if(inst_19076__$1){
var statearr_19146_19186 = state_19121__$1;
(statearr_19146_19186[(1)] = (13));

} else {
var statearr_19147_19187 = state_19121__$1;
(statearr_19147_19187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (9))){
var inst_19098 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
var statearr_19148_19188 = state_19121__$1;
(statearr_19148_19188[(2)] = inst_19098);

(statearr_19148_19188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (5))){
var inst_19059 = cljs.core.deref.call(null,mults);
var inst_19060 = cljs.core.vals.call(null,inst_19059);
var inst_19061 = cljs.core.seq.call(null,inst_19060);
var inst_19062 = inst_19061;
var inst_19063 = null;
var inst_19064 = (0);
var inst_19065 = (0);
var state_19121__$1 = (function (){var statearr_19149 = state_19121;
(statearr_19149[(12)] = inst_19065);

(statearr_19149[(13)] = inst_19063);

(statearr_19149[(15)] = inst_19062);

(statearr_19149[(16)] = inst_19064);

return statearr_19149;
})();
var statearr_19150_19189 = state_19121__$1;
(statearr_19150_19189[(2)] = null);

(statearr_19150_19189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (14))){
var state_19121__$1 = state_19121;
var statearr_19154_19190 = state_19121__$1;
(statearr_19154_19190[(2)] = null);

(statearr_19154_19190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (16))){
var inst_19076 = (state_19121[(10)]);
var inst_19080 = cljs.core.chunk_first.call(null,inst_19076);
var inst_19081 = cljs.core.chunk_rest.call(null,inst_19076);
var inst_19082 = cljs.core.count.call(null,inst_19080);
var inst_19062 = inst_19081;
var inst_19063 = inst_19080;
var inst_19064 = inst_19082;
var inst_19065 = (0);
var state_19121__$1 = (function (){var statearr_19155 = state_19121;
(statearr_19155[(12)] = inst_19065);

(statearr_19155[(13)] = inst_19063);

(statearr_19155[(15)] = inst_19062);

(statearr_19155[(16)] = inst_19064);

return statearr_19155;
})();
var statearr_19156_19191 = state_19121__$1;
(statearr_19156_19191[(2)] = null);

(statearr_19156_19191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (10))){
var inst_19065 = (state_19121[(12)]);
var inst_19063 = (state_19121[(13)]);
var inst_19062 = (state_19121[(15)]);
var inst_19064 = (state_19121[(16)]);
var inst_19070 = cljs.core._nth.call(null,inst_19063,inst_19065);
var inst_19071 = cljs.core.async.muxch_STAR_.call(null,inst_19070);
var inst_19072 = cljs.core.async.close_BANG_.call(null,inst_19071);
var inst_19073 = (inst_19065 + (1));
var tmp19151 = inst_19063;
var tmp19152 = inst_19062;
var tmp19153 = inst_19064;
var inst_19062__$1 = tmp19152;
var inst_19063__$1 = tmp19151;
var inst_19064__$1 = tmp19153;
var inst_19065__$1 = inst_19073;
var state_19121__$1 = (function (){var statearr_19157 = state_19121;
(statearr_19157[(12)] = inst_19065__$1);

(statearr_19157[(13)] = inst_19063__$1);

(statearr_19157[(15)] = inst_19062__$1);

(statearr_19157[(17)] = inst_19072);

(statearr_19157[(16)] = inst_19064__$1);

return statearr_19157;
})();
var statearr_19158_19192 = state_19121__$1;
(statearr_19158_19192[(2)] = null);

(statearr_19158_19192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (18))){
var inst_19091 = (state_19121[(2)]);
var state_19121__$1 = state_19121;
var statearr_19159_19193 = state_19121__$1;
(statearr_19159_19193[(2)] = inst_19091);

(statearr_19159_19193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19122 === (8))){
var inst_19065 = (state_19121[(12)]);
var inst_19064 = (state_19121[(16)]);
var inst_19067 = (inst_19065 < inst_19064);
var inst_19068 = inst_19067;
var state_19121__$1 = state_19121;
if(cljs.core.truth_(inst_19068)){
var statearr_19160_19194 = state_19121__$1;
(statearr_19160_19194[(1)] = (10));

} else {
var statearr_19161_19195 = state_19121__$1;
(statearr_19161_19195[(1)] = (11));

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
});})(c__17933__auto___19167,mults,ensure_mult,p))
;
return ((function (switch__17843__auto__,c__17933__auto___19167,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_19162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19162[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_19162[(1)] = (1));

return statearr_19162;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_19121){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19163){if((e19163 instanceof Object)){
var ex__17847__auto__ = e19163;
var statearr_19164_19196 = state_19121;
(statearr_19164_19196[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19197 = state_19121;
state_19121 = G__19197;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_19121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_19121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___19167,mults,ensure_mult,p))
})();
var state__17935__auto__ = (function (){var statearr_19165 = f__17934__auto__.call(null);
(statearr_19165[(6)] = c__17933__auto___19167);

return statearr_19165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___19167,mults,ensure_mult,p))
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
var G__19199 = arguments.length;
switch (G__19199) {
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
var G__19202 = arguments.length;
switch (G__19202) {
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
var G__19205 = arguments.length;
switch (G__19205) {
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
var c__17933__auto___19272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___19272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___19272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19244){
var state_val_19245 = (state_19244[(1)]);
if((state_val_19245 === (7))){
var state_19244__$1 = state_19244;
var statearr_19246_19273 = state_19244__$1;
(statearr_19246_19273[(2)] = null);

(statearr_19246_19273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (1))){
var state_19244__$1 = state_19244;
var statearr_19247_19274 = state_19244__$1;
(statearr_19247_19274[(2)] = null);

(statearr_19247_19274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (4))){
var inst_19208 = (state_19244[(7)]);
var inst_19210 = (inst_19208 < cnt);
var state_19244__$1 = state_19244;
if(cljs.core.truth_(inst_19210)){
var statearr_19248_19275 = state_19244__$1;
(statearr_19248_19275[(1)] = (6));

} else {
var statearr_19249_19276 = state_19244__$1;
(statearr_19249_19276[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (15))){
var inst_19240 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
var statearr_19250_19277 = state_19244__$1;
(statearr_19250_19277[(2)] = inst_19240);

(statearr_19250_19277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (13))){
var inst_19233 = cljs.core.async.close_BANG_.call(null,out);
var state_19244__$1 = state_19244;
var statearr_19251_19278 = state_19244__$1;
(statearr_19251_19278[(2)] = inst_19233);

(statearr_19251_19278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (6))){
var state_19244__$1 = state_19244;
var statearr_19252_19279 = state_19244__$1;
(statearr_19252_19279[(2)] = null);

(statearr_19252_19279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (3))){
var inst_19242 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19244__$1,inst_19242);
} else {
if((state_val_19245 === (12))){
var inst_19230 = (state_19244[(8)]);
var inst_19230__$1 = (state_19244[(2)]);
var inst_19231 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19230__$1);
var state_19244__$1 = (function (){var statearr_19253 = state_19244;
(statearr_19253[(8)] = inst_19230__$1);

return statearr_19253;
})();
if(cljs.core.truth_(inst_19231)){
var statearr_19254_19280 = state_19244__$1;
(statearr_19254_19280[(1)] = (13));

} else {
var statearr_19255_19281 = state_19244__$1;
(statearr_19255_19281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (2))){
var inst_19207 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19208 = (0);
var state_19244__$1 = (function (){var statearr_19256 = state_19244;
(statearr_19256[(9)] = inst_19207);

(statearr_19256[(7)] = inst_19208);

return statearr_19256;
})();
var statearr_19257_19282 = state_19244__$1;
(statearr_19257_19282[(2)] = null);

(statearr_19257_19282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (11))){
var inst_19208 = (state_19244[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19244,(10),Object,null,(9));
var inst_19217 = chs__$1.call(null,inst_19208);
var inst_19218 = done.call(null,inst_19208);
var inst_19219 = cljs.core.async.take_BANG_.call(null,inst_19217,inst_19218);
var state_19244__$1 = state_19244;
var statearr_19258_19283 = state_19244__$1;
(statearr_19258_19283[(2)] = inst_19219);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19244__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (9))){
var inst_19208 = (state_19244[(7)]);
var inst_19221 = (state_19244[(2)]);
var inst_19222 = (inst_19208 + (1));
var inst_19208__$1 = inst_19222;
var state_19244__$1 = (function (){var statearr_19259 = state_19244;
(statearr_19259[(10)] = inst_19221);

(statearr_19259[(7)] = inst_19208__$1);

return statearr_19259;
})();
var statearr_19260_19284 = state_19244__$1;
(statearr_19260_19284[(2)] = null);

(statearr_19260_19284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (5))){
var inst_19228 = (state_19244[(2)]);
var state_19244__$1 = (function (){var statearr_19261 = state_19244;
(statearr_19261[(11)] = inst_19228);

return statearr_19261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19244__$1,(12),dchan);
} else {
if((state_val_19245 === (14))){
var inst_19230 = (state_19244[(8)]);
var inst_19235 = cljs.core.apply.call(null,f,inst_19230);
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19244__$1,(16),out,inst_19235);
} else {
if((state_val_19245 === (16))){
var inst_19237 = (state_19244[(2)]);
var state_19244__$1 = (function (){var statearr_19262 = state_19244;
(statearr_19262[(12)] = inst_19237);

return statearr_19262;
})();
var statearr_19263_19285 = state_19244__$1;
(statearr_19263_19285[(2)] = null);

(statearr_19263_19285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (10))){
var inst_19212 = (state_19244[(2)]);
var inst_19213 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19244__$1 = (function (){var statearr_19264 = state_19244;
(statearr_19264[(13)] = inst_19212);

return statearr_19264;
})();
var statearr_19265_19286 = state_19244__$1;
(statearr_19265_19286[(2)] = inst_19213);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19244__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (8))){
var inst_19226 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
var statearr_19266_19287 = state_19244__$1;
(statearr_19266_19287[(2)] = inst_19226);

(statearr_19266_19287[(1)] = (5));


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
});})(c__17933__auto___19272,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17843__auto__,c__17933__auto___19272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_19267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19267[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_19267[(1)] = (1));

return statearr_19267;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_19244){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19268){if((e19268 instanceof Object)){
var ex__17847__auto__ = e19268;
var statearr_19269_19288 = state_19244;
(statearr_19269_19288[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19289 = state_19244;
state_19244 = G__19289;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_19244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_19244);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___19272,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17935__auto__ = (function (){var statearr_19270 = f__17934__auto__.call(null);
(statearr_19270[(6)] = c__17933__auto___19272);

return statearr_19270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___19272,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19292 = arguments.length;
switch (G__19292) {
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
var c__17933__auto___19346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___19346,out){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___19346,out){
return (function (state_19324){
var state_val_19325 = (state_19324[(1)]);
if((state_val_19325 === (7))){
var inst_19303 = (state_19324[(7)]);
var inst_19304 = (state_19324[(8)]);
var inst_19303__$1 = (state_19324[(2)]);
var inst_19304__$1 = cljs.core.nth.call(null,inst_19303__$1,(0),null);
var inst_19305 = cljs.core.nth.call(null,inst_19303__$1,(1),null);
var inst_19306 = (inst_19304__$1 == null);
var state_19324__$1 = (function (){var statearr_19326 = state_19324;
(statearr_19326[(9)] = inst_19305);

(statearr_19326[(7)] = inst_19303__$1);

(statearr_19326[(8)] = inst_19304__$1);

return statearr_19326;
})();
if(cljs.core.truth_(inst_19306)){
var statearr_19327_19347 = state_19324__$1;
(statearr_19327_19347[(1)] = (8));

} else {
var statearr_19328_19348 = state_19324__$1;
(statearr_19328_19348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (1))){
var inst_19293 = cljs.core.vec.call(null,chs);
var inst_19294 = inst_19293;
var state_19324__$1 = (function (){var statearr_19329 = state_19324;
(statearr_19329[(10)] = inst_19294);

return statearr_19329;
})();
var statearr_19330_19349 = state_19324__$1;
(statearr_19330_19349[(2)] = null);

(statearr_19330_19349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (4))){
var inst_19294 = (state_19324[(10)]);
var state_19324__$1 = state_19324;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19324__$1,(7),inst_19294);
} else {
if((state_val_19325 === (6))){
var inst_19320 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
var statearr_19331_19350 = state_19324__$1;
(statearr_19331_19350[(2)] = inst_19320);

(statearr_19331_19350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (3))){
var inst_19322 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19324__$1,inst_19322);
} else {
if((state_val_19325 === (2))){
var inst_19294 = (state_19324[(10)]);
var inst_19296 = cljs.core.count.call(null,inst_19294);
var inst_19297 = (inst_19296 > (0));
var state_19324__$1 = state_19324;
if(cljs.core.truth_(inst_19297)){
var statearr_19333_19351 = state_19324__$1;
(statearr_19333_19351[(1)] = (4));

} else {
var statearr_19334_19352 = state_19324__$1;
(statearr_19334_19352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (11))){
var inst_19294 = (state_19324[(10)]);
var inst_19313 = (state_19324[(2)]);
var tmp19332 = inst_19294;
var inst_19294__$1 = tmp19332;
var state_19324__$1 = (function (){var statearr_19335 = state_19324;
(statearr_19335[(11)] = inst_19313);

(statearr_19335[(10)] = inst_19294__$1);

return statearr_19335;
})();
var statearr_19336_19353 = state_19324__$1;
(statearr_19336_19353[(2)] = null);

(statearr_19336_19353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (9))){
var inst_19304 = (state_19324[(8)]);
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19324__$1,(11),out,inst_19304);
} else {
if((state_val_19325 === (5))){
var inst_19318 = cljs.core.async.close_BANG_.call(null,out);
var state_19324__$1 = state_19324;
var statearr_19337_19354 = state_19324__$1;
(statearr_19337_19354[(2)] = inst_19318);

(statearr_19337_19354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (10))){
var inst_19316 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
var statearr_19338_19355 = state_19324__$1;
(statearr_19338_19355[(2)] = inst_19316);

(statearr_19338_19355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (8))){
var inst_19305 = (state_19324[(9)]);
var inst_19303 = (state_19324[(7)]);
var inst_19304 = (state_19324[(8)]);
var inst_19294 = (state_19324[(10)]);
var inst_19308 = (function (){var cs = inst_19294;
var vec__19299 = inst_19303;
var v = inst_19304;
var c = inst_19305;
return ((function (cs,vec__19299,v,c,inst_19305,inst_19303,inst_19304,inst_19294,state_val_19325,c__17933__auto___19346,out){
return (function (p1__19290_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19290_SHARP_);
});
;})(cs,vec__19299,v,c,inst_19305,inst_19303,inst_19304,inst_19294,state_val_19325,c__17933__auto___19346,out))
})();
var inst_19309 = cljs.core.filterv.call(null,inst_19308,inst_19294);
var inst_19294__$1 = inst_19309;
var state_19324__$1 = (function (){var statearr_19339 = state_19324;
(statearr_19339[(10)] = inst_19294__$1);

return statearr_19339;
})();
var statearr_19340_19356 = state_19324__$1;
(statearr_19340_19356[(2)] = null);

(statearr_19340_19356[(1)] = (2));


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
});})(c__17933__auto___19346,out))
;
return ((function (switch__17843__auto__,c__17933__auto___19346,out){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_19341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19341[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_19341[(1)] = (1));

return statearr_19341;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_19324){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19342){if((e19342 instanceof Object)){
var ex__17847__auto__ = e19342;
var statearr_19343_19357 = state_19324;
(statearr_19343_19357[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19358 = state_19324;
state_19324 = G__19358;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_19324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_19324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___19346,out))
})();
var state__17935__auto__ = (function (){var statearr_19344 = f__17934__auto__.call(null);
(statearr_19344[(6)] = c__17933__auto___19346);

return statearr_19344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___19346,out))
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
var G__19360 = arguments.length;
switch (G__19360) {
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
var c__17933__auto___19405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___19405,out){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___19405,out){
return (function (state_19384){
var state_val_19385 = (state_19384[(1)]);
if((state_val_19385 === (7))){
var inst_19366 = (state_19384[(7)]);
var inst_19366__$1 = (state_19384[(2)]);
var inst_19367 = (inst_19366__$1 == null);
var inst_19368 = cljs.core.not.call(null,inst_19367);
var state_19384__$1 = (function (){var statearr_19386 = state_19384;
(statearr_19386[(7)] = inst_19366__$1);

return statearr_19386;
})();
if(inst_19368){
var statearr_19387_19406 = state_19384__$1;
(statearr_19387_19406[(1)] = (8));

} else {
var statearr_19388_19407 = state_19384__$1;
(statearr_19388_19407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (1))){
var inst_19361 = (0);
var state_19384__$1 = (function (){var statearr_19389 = state_19384;
(statearr_19389[(8)] = inst_19361);

return statearr_19389;
})();
var statearr_19390_19408 = state_19384__$1;
(statearr_19390_19408[(2)] = null);

(statearr_19390_19408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (4))){
var state_19384__$1 = state_19384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19384__$1,(7),ch);
} else {
if((state_val_19385 === (6))){
var inst_19379 = (state_19384[(2)]);
var state_19384__$1 = state_19384;
var statearr_19391_19409 = state_19384__$1;
(statearr_19391_19409[(2)] = inst_19379);

(statearr_19391_19409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (3))){
var inst_19381 = (state_19384[(2)]);
var inst_19382 = cljs.core.async.close_BANG_.call(null,out);
var state_19384__$1 = (function (){var statearr_19392 = state_19384;
(statearr_19392[(9)] = inst_19381);

return statearr_19392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19384__$1,inst_19382);
} else {
if((state_val_19385 === (2))){
var inst_19361 = (state_19384[(8)]);
var inst_19363 = (inst_19361 < n);
var state_19384__$1 = state_19384;
if(cljs.core.truth_(inst_19363)){
var statearr_19393_19410 = state_19384__$1;
(statearr_19393_19410[(1)] = (4));

} else {
var statearr_19394_19411 = state_19384__$1;
(statearr_19394_19411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (11))){
var inst_19361 = (state_19384[(8)]);
var inst_19371 = (state_19384[(2)]);
var inst_19372 = (inst_19361 + (1));
var inst_19361__$1 = inst_19372;
var state_19384__$1 = (function (){var statearr_19395 = state_19384;
(statearr_19395[(8)] = inst_19361__$1);

(statearr_19395[(10)] = inst_19371);

return statearr_19395;
})();
var statearr_19396_19412 = state_19384__$1;
(statearr_19396_19412[(2)] = null);

(statearr_19396_19412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (9))){
var state_19384__$1 = state_19384;
var statearr_19397_19413 = state_19384__$1;
(statearr_19397_19413[(2)] = null);

(statearr_19397_19413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (5))){
var state_19384__$1 = state_19384;
var statearr_19398_19414 = state_19384__$1;
(statearr_19398_19414[(2)] = null);

(statearr_19398_19414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (10))){
var inst_19376 = (state_19384[(2)]);
var state_19384__$1 = state_19384;
var statearr_19399_19415 = state_19384__$1;
(statearr_19399_19415[(2)] = inst_19376);

(statearr_19399_19415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (8))){
var inst_19366 = (state_19384[(7)]);
var state_19384__$1 = state_19384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19384__$1,(11),out,inst_19366);
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
});})(c__17933__auto___19405,out))
;
return ((function (switch__17843__auto__,c__17933__auto___19405,out){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_19400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19400[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_19400[(1)] = (1));

return statearr_19400;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_19384){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19401){if((e19401 instanceof Object)){
var ex__17847__auto__ = e19401;
var statearr_19402_19416 = state_19384;
(statearr_19402_19416[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19417 = state_19384;
state_19384 = G__19417;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_19384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_19384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___19405,out))
})();
var state__17935__auto__ = (function (){var statearr_19403 = f__17934__auto__.call(null);
(statearr_19403[(6)] = c__17933__auto___19405);

return statearr_19403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___19405,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19419 = (function (f,ch,meta19420){
this.f = f;
this.ch = ch;
this.meta19420 = meta19420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19421,meta19420__$1){
var self__ = this;
var _19421__$1 = this;
return (new cljs.core.async.t_cljs$core$async19419(self__.f,self__.ch,meta19420__$1));
});

cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19421){
var self__ = this;
var _19421__$1 = this;
return self__.meta19420;
});

cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19422 = (function (f,ch,meta19420,_,fn1,meta19423){
this.f = f;
this.ch = ch;
this.meta19420 = meta19420;
this._ = _;
this.fn1 = fn1;
this.meta19423 = meta19423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19424,meta19423__$1){
var self__ = this;
var _19424__$1 = this;
return (new cljs.core.async.t_cljs$core$async19422(self__.f,self__.ch,self__.meta19420,self__._,self__.fn1,meta19423__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19424){
var self__ = this;
var _19424__$1 = this;
return self__.meta19423;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19422.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19422.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19418_SHARP_){
return f1.call(null,(((p1__19418_SHARP_ == null))?null:self__.f.call(null,p1__19418_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19422.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19420","meta19420",1177920386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19419","cljs.core.async/t_cljs$core$async19419",-402491807,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19423","meta19423",-1218875770,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19422";

cljs.core.async.t_cljs$core$async19422.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19422");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19422 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19422(f__$1,ch__$1,meta19420__$1,___$2,fn1__$1,meta19423){
return (new cljs.core.async.t_cljs$core$async19422(f__$1,ch__$1,meta19420__$1,___$2,fn1__$1,meta19423));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19422(self__.f,self__.ch,self__.meta19420,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19420","meta19420",1177920386,null)], null);
});

cljs.core.async.t_cljs$core$async19419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19419";

cljs.core.async.t_cljs$core$async19419.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19419");
});

cljs.core.async.__GT_t_cljs$core$async19419 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19419(f__$1,ch__$1,meta19420){
return (new cljs.core.async.t_cljs$core$async19419(f__$1,ch__$1,meta19420));
});

}

return (new cljs.core.async.t_cljs$core$async19419(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19425 = (function (f,ch,meta19426){
this.f = f;
this.ch = ch;
this.meta19426 = meta19426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19427,meta19426__$1){
var self__ = this;
var _19427__$1 = this;
return (new cljs.core.async.t_cljs$core$async19425(self__.f,self__.ch,meta19426__$1));
});

cljs.core.async.t_cljs$core$async19425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19427){
var self__ = this;
var _19427__$1 = this;
return self__.meta19426;
});

cljs.core.async.t_cljs$core$async19425.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19425.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19425.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19426","meta19426",-1305990616,null)], null);
});

cljs.core.async.t_cljs$core$async19425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19425";

cljs.core.async.t_cljs$core$async19425.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19425");
});

cljs.core.async.__GT_t_cljs$core$async19425 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19425(f__$1,ch__$1,meta19426){
return (new cljs.core.async.t_cljs$core$async19425(f__$1,ch__$1,meta19426));
});

}

return (new cljs.core.async.t_cljs$core$async19425(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19428 = (function (p,ch,meta19429){
this.p = p;
this.ch = ch;
this.meta19429 = meta19429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19430,meta19429__$1){
var self__ = this;
var _19430__$1 = this;
return (new cljs.core.async.t_cljs$core$async19428(self__.p,self__.ch,meta19429__$1));
});

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19430){
var self__ = this;
var _19430__$1 = this;
return self__.meta19429;
});

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19429","meta19429",-1574208579,null)], null);
});

cljs.core.async.t_cljs$core$async19428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19428";

cljs.core.async.t_cljs$core$async19428.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async19428");
});

cljs.core.async.__GT_t_cljs$core$async19428 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19428(p__$1,ch__$1,meta19429){
return (new cljs.core.async.t_cljs$core$async19428(p__$1,ch__$1,meta19429));
});

}

return (new cljs.core.async.t_cljs$core$async19428(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19432 = arguments.length;
switch (G__19432) {
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
var c__17933__auto___19472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___19472,out){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___19472,out){
return (function (state_19453){
var state_val_19454 = (state_19453[(1)]);
if((state_val_19454 === (7))){
var inst_19449 = (state_19453[(2)]);
var state_19453__$1 = state_19453;
var statearr_19455_19473 = state_19453__$1;
(statearr_19455_19473[(2)] = inst_19449);

(statearr_19455_19473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19454 === (1))){
var state_19453__$1 = state_19453;
var statearr_19456_19474 = state_19453__$1;
(statearr_19456_19474[(2)] = null);

(statearr_19456_19474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19454 === (4))){
var inst_19435 = (state_19453[(7)]);
var inst_19435__$1 = (state_19453[(2)]);
var inst_19436 = (inst_19435__$1 == null);
var state_19453__$1 = (function (){var statearr_19457 = state_19453;
(statearr_19457[(7)] = inst_19435__$1);

return statearr_19457;
})();
if(cljs.core.truth_(inst_19436)){
var statearr_19458_19475 = state_19453__$1;
(statearr_19458_19475[(1)] = (5));

} else {
var statearr_19459_19476 = state_19453__$1;
(statearr_19459_19476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19454 === (6))){
var inst_19435 = (state_19453[(7)]);
var inst_19440 = p.call(null,inst_19435);
var state_19453__$1 = state_19453;
if(cljs.core.truth_(inst_19440)){
var statearr_19460_19477 = state_19453__$1;
(statearr_19460_19477[(1)] = (8));

} else {
var statearr_19461_19478 = state_19453__$1;
(statearr_19461_19478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19454 === (3))){
var inst_19451 = (state_19453[(2)]);
var state_19453__$1 = state_19453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19453__$1,inst_19451);
} else {
if((state_val_19454 === (2))){
var state_19453__$1 = state_19453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19453__$1,(4),ch);
} else {
if((state_val_19454 === (11))){
var inst_19443 = (state_19453[(2)]);
var state_19453__$1 = state_19453;
var statearr_19462_19479 = state_19453__$1;
(statearr_19462_19479[(2)] = inst_19443);

(statearr_19462_19479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19454 === (9))){
var state_19453__$1 = state_19453;
var statearr_19463_19480 = state_19453__$1;
(statearr_19463_19480[(2)] = null);

(statearr_19463_19480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19454 === (5))){
var inst_19438 = cljs.core.async.close_BANG_.call(null,out);
var state_19453__$1 = state_19453;
var statearr_19464_19481 = state_19453__$1;
(statearr_19464_19481[(2)] = inst_19438);

(statearr_19464_19481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19454 === (10))){
var inst_19446 = (state_19453[(2)]);
var state_19453__$1 = (function (){var statearr_19465 = state_19453;
(statearr_19465[(8)] = inst_19446);

return statearr_19465;
})();
var statearr_19466_19482 = state_19453__$1;
(statearr_19466_19482[(2)] = null);

(statearr_19466_19482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19454 === (8))){
var inst_19435 = (state_19453[(7)]);
var state_19453__$1 = state_19453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19453__$1,(11),out,inst_19435);
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
});})(c__17933__auto___19472,out))
;
return ((function (switch__17843__auto__,c__17933__auto___19472,out){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_19467 = [null,null,null,null,null,null,null,null,null];
(statearr_19467[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_19467[(1)] = (1));

return statearr_19467;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_19453){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19468){if((e19468 instanceof Object)){
var ex__17847__auto__ = e19468;
var statearr_19469_19483 = state_19453;
(statearr_19469_19483[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19484 = state_19453;
state_19453 = G__19484;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_19453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_19453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___19472,out))
})();
var state__17935__auto__ = (function (){var statearr_19470 = f__17934__auto__.call(null);
(statearr_19470[(6)] = c__17933__auto___19472);

return statearr_19470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___19472,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19486 = arguments.length;
switch (G__19486) {
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
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__){
return (function (state_19549){
var state_val_19550 = (state_19549[(1)]);
if((state_val_19550 === (7))){
var inst_19545 = (state_19549[(2)]);
var state_19549__$1 = state_19549;
var statearr_19551_19589 = state_19549__$1;
(statearr_19551_19589[(2)] = inst_19545);

(statearr_19551_19589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (20))){
var inst_19515 = (state_19549[(7)]);
var inst_19526 = (state_19549[(2)]);
var inst_19527 = cljs.core.next.call(null,inst_19515);
var inst_19501 = inst_19527;
var inst_19502 = null;
var inst_19503 = (0);
var inst_19504 = (0);
var state_19549__$1 = (function (){var statearr_19552 = state_19549;
(statearr_19552[(8)] = inst_19501);

(statearr_19552[(9)] = inst_19504);

(statearr_19552[(10)] = inst_19526);

(statearr_19552[(11)] = inst_19502);

(statearr_19552[(12)] = inst_19503);

return statearr_19552;
})();
var statearr_19553_19590 = state_19549__$1;
(statearr_19553_19590[(2)] = null);

(statearr_19553_19590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (1))){
var state_19549__$1 = state_19549;
var statearr_19554_19591 = state_19549__$1;
(statearr_19554_19591[(2)] = null);

(statearr_19554_19591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (4))){
var inst_19490 = (state_19549[(13)]);
var inst_19490__$1 = (state_19549[(2)]);
var inst_19491 = (inst_19490__$1 == null);
var state_19549__$1 = (function (){var statearr_19555 = state_19549;
(statearr_19555[(13)] = inst_19490__$1);

return statearr_19555;
})();
if(cljs.core.truth_(inst_19491)){
var statearr_19556_19592 = state_19549__$1;
(statearr_19556_19592[(1)] = (5));

} else {
var statearr_19557_19593 = state_19549__$1;
(statearr_19557_19593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (15))){
var state_19549__$1 = state_19549;
var statearr_19561_19594 = state_19549__$1;
(statearr_19561_19594[(2)] = null);

(statearr_19561_19594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (21))){
var state_19549__$1 = state_19549;
var statearr_19562_19595 = state_19549__$1;
(statearr_19562_19595[(2)] = null);

(statearr_19562_19595[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (13))){
var inst_19501 = (state_19549[(8)]);
var inst_19504 = (state_19549[(9)]);
var inst_19502 = (state_19549[(11)]);
var inst_19503 = (state_19549[(12)]);
var inst_19511 = (state_19549[(2)]);
var inst_19512 = (inst_19504 + (1));
var tmp19558 = inst_19501;
var tmp19559 = inst_19502;
var tmp19560 = inst_19503;
var inst_19501__$1 = tmp19558;
var inst_19502__$1 = tmp19559;
var inst_19503__$1 = tmp19560;
var inst_19504__$1 = inst_19512;
var state_19549__$1 = (function (){var statearr_19563 = state_19549;
(statearr_19563[(8)] = inst_19501__$1);

(statearr_19563[(9)] = inst_19504__$1);

(statearr_19563[(11)] = inst_19502__$1);

(statearr_19563[(12)] = inst_19503__$1);

(statearr_19563[(14)] = inst_19511);

return statearr_19563;
})();
var statearr_19564_19596 = state_19549__$1;
(statearr_19564_19596[(2)] = null);

(statearr_19564_19596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (22))){
var state_19549__$1 = state_19549;
var statearr_19565_19597 = state_19549__$1;
(statearr_19565_19597[(2)] = null);

(statearr_19565_19597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (6))){
var inst_19490 = (state_19549[(13)]);
var inst_19499 = f.call(null,inst_19490);
var inst_19500 = cljs.core.seq.call(null,inst_19499);
var inst_19501 = inst_19500;
var inst_19502 = null;
var inst_19503 = (0);
var inst_19504 = (0);
var state_19549__$1 = (function (){var statearr_19566 = state_19549;
(statearr_19566[(8)] = inst_19501);

(statearr_19566[(9)] = inst_19504);

(statearr_19566[(11)] = inst_19502);

(statearr_19566[(12)] = inst_19503);

return statearr_19566;
})();
var statearr_19567_19598 = state_19549__$1;
(statearr_19567_19598[(2)] = null);

(statearr_19567_19598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (17))){
var inst_19515 = (state_19549[(7)]);
var inst_19519 = cljs.core.chunk_first.call(null,inst_19515);
var inst_19520 = cljs.core.chunk_rest.call(null,inst_19515);
var inst_19521 = cljs.core.count.call(null,inst_19519);
var inst_19501 = inst_19520;
var inst_19502 = inst_19519;
var inst_19503 = inst_19521;
var inst_19504 = (0);
var state_19549__$1 = (function (){var statearr_19568 = state_19549;
(statearr_19568[(8)] = inst_19501);

(statearr_19568[(9)] = inst_19504);

(statearr_19568[(11)] = inst_19502);

(statearr_19568[(12)] = inst_19503);

return statearr_19568;
})();
var statearr_19569_19599 = state_19549__$1;
(statearr_19569_19599[(2)] = null);

(statearr_19569_19599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (3))){
var inst_19547 = (state_19549[(2)]);
var state_19549__$1 = state_19549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19549__$1,inst_19547);
} else {
if((state_val_19550 === (12))){
var inst_19535 = (state_19549[(2)]);
var state_19549__$1 = state_19549;
var statearr_19570_19600 = state_19549__$1;
(statearr_19570_19600[(2)] = inst_19535);

(statearr_19570_19600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (2))){
var state_19549__$1 = state_19549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19549__$1,(4),in$);
} else {
if((state_val_19550 === (23))){
var inst_19543 = (state_19549[(2)]);
var state_19549__$1 = state_19549;
var statearr_19571_19601 = state_19549__$1;
(statearr_19571_19601[(2)] = inst_19543);

(statearr_19571_19601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (19))){
var inst_19530 = (state_19549[(2)]);
var state_19549__$1 = state_19549;
var statearr_19572_19602 = state_19549__$1;
(statearr_19572_19602[(2)] = inst_19530);

(statearr_19572_19602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (11))){
var inst_19501 = (state_19549[(8)]);
var inst_19515 = (state_19549[(7)]);
var inst_19515__$1 = cljs.core.seq.call(null,inst_19501);
var state_19549__$1 = (function (){var statearr_19573 = state_19549;
(statearr_19573[(7)] = inst_19515__$1);

return statearr_19573;
})();
if(inst_19515__$1){
var statearr_19574_19603 = state_19549__$1;
(statearr_19574_19603[(1)] = (14));

} else {
var statearr_19575_19604 = state_19549__$1;
(statearr_19575_19604[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (9))){
var inst_19537 = (state_19549[(2)]);
var inst_19538 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19549__$1 = (function (){var statearr_19576 = state_19549;
(statearr_19576[(15)] = inst_19537);

return statearr_19576;
})();
if(cljs.core.truth_(inst_19538)){
var statearr_19577_19605 = state_19549__$1;
(statearr_19577_19605[(1)] = (21));

} else {
var statearr_19578_19606 = state_19549__$1;
(statearr_19578_19606[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (5))){
var inst_19493 = cljs.core.async.close_BANG_.call(null,out);
var state_19549__$1 = state_19549;
var statearr_19579_19607 = state_19549__$1;
(statearr_19579_19607[(2)] = inst_19493);

(statearr_19579_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (14))){
var inst_19515 = (state_19549[(7)]);
var inst_19517 = cljs.core.chunked_seq_QMARK_.call(null,inst_19515);
var state_19549__$1 = state_19549;
if(inst_19517){
var statearr_19580_19608 = state_19549__$1;
(statearr_19580_19608[(1)] = (17));

} else {
var statearr_19581_19609 = state_19549__$1;
(statearr_19581_19609[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (16))){
var inst_19533 = (state_19549[(2)]);
var state_19549__$1 = state_19549;
var statearr_19582_19610 = state_19549__$1;
(statearr_19582_19610[(2)] = inst_19533);

(statearr_19582_19610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19550 === (10))){
var inst_19504 = (state_19549[(9)]);
var inst_19502 = (state_19549[(11)]);
var inst_19509 = cljs.core._nth.call(null,inst_19502,inst_19504);
var state_19549__$1 = state_19549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19549__$1,(13),out,inst_19509);
} else {
if((state_val_19550 === (18))){
var inst_19515 = (state_19549[(7)]);
var inst_19524 = cljs.core.first.call(null,inst_19515);
var state_19549__$1 = state_19549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19549__$1,(20),out,inst_19524);
} else {
if((state_val_19550 === (8))){
var inst_19504 = (state_19549[(9)]);
var inst_19503 = (state_19549[(12)]);
var inst_19506 = (inst_19504 < inst_19503);
var inst_19507 = inst_19506;
var state_19549__$1 = state_19549;
if(cljs.core.truth_(inst_19507)){
var statearr_19583_19611 = state_19549__$1;
(statearr_19583_19611[(1)] = (10));

} else {
var statearr_19584_19612 = state_19549__$1;
(statearr_19584_19612[(1)] = (11));

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
});})(c__17933__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17844__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17844__auto____0 = (function (){
var statearr_19585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19585[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17844__auto__);

(statearr_19585[(1)] = (1));

return statearr_19585;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17844__auto____1 = (function (state_19549){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19586){if((e19586 instanceof Object)){
var ex__17847__auto__ = e19586;
var statearr_19587_19613 = state_19549;
(statearr_19587_19613[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19614 = state_19549;
state_19549 = G__19614;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17844__auto__ = function(state_19549){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17844__auto____1.call(this,state_19549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17844__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17844__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__))
})();
var state__17935__auto__ = (function (){var statearr_19588 = f__17934__auto__.call(null);
(statearr_19588[(6)] = c__17933__auto__);

return statearr_19588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__))
);

return c__17933__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19616 = arguments.length;
switch (G__19616) {
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
var G__19619 = arguments.length;
switch (G__19619) {
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
var G__19622 = arguments.length;
switch (G__19622) {
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
var c__17933__auto___19669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___19669,out){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___19669,out){
return (function (state_19646){
var state_val_19647 = (state_19646[(1)]);
if((state_val_19647 === (7))){
var inst_19641 = (state_19646[(2)]);
var state_19646__$1 = state_19646;
var statearr_19648_19670 = state_19646__$1;
(statearr_19648_19670[(2)] = inst_19641);

(statearr_19648_19670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19647 === (1))){
var inst_19623 = null;
var state_19646__$1 = (function (){var statearr_19649 = state_19646;
(statearr_19649[(7)] = inst_19623);

return statearr_19649;
})();
var statearr_19650_19671 = state_19646__$1;
(statearr_19650_19671[(2)] = null);

(statearr_19650_19671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19647 === (4))){
var inst_19626 = (state_19646[(8)]);
var inst_19626__$1 = (state_19646[(2)]);
var inst_19627 = (inst_19626__$1 == null);
var inst_19628 = cljs.core.not.call(null,inst_19627);
var state_19646__$1 = (function (){var statearr_19651 = state_19646;
(statearr_19651[(8)] = inst_19626__$1);

return statearr_19651;
})();
if(inst_19628){
var statearr_19652_19672 = state_19646__$1;
(statearr_19652_19672[(1)] = (5));

} else {
var statearr_19653_19673 = state_19646__$1;
(statearr_19653_19673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19647 === (6))){
var state_19646__$1 = state_19646;
var statearr_19654_19674 = state_19646__$1;
(statearr_19654_19674[(2)] = null);

(statearr_19654_19674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19647 === (3))){
var inst_19643 = (state_19646[(2)]);
var inst_19644 = cljs.core.async.close_BANG_.call(null,out);
var state_19646__$1 = (function (){var statearr_19655 = state_19646;
(statearr_19655[(9)] = inst_19643);

return statearr_19655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19646__$1,inst_19644);
} else {
if((state_val_19647 === (2))){
var state_19646__$1 = state_19646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19646__$1,(4),ch);
} else {
if((state_val_19647 === (11))){
var inst_19626 = (state_19646[(8)]);
var inst_19635 = (state_19646[(2)]);
var inst_19623 = inst_19626;
var state_19646__$1 = (function (){var statearr_19656 = state_19646;
(statearr_19656[(10)] = inst_19635);

(statearr_19656[(7)] = inst_19623);

return statearr_19656;
})();
var statearr_19657_19675 = state_19646__$1;
(statearr_19657_19675[(2)] = null);

(statearr_19657_19675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19647 === (9))){
var inst_19626 = (state_19646[(8)]);
var state_19646__$1 = state_19646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19646__$1,(11),out,inst_19626);
} else {
if((state_val_19647 === (5))){
var inst_19626 = (state_19646[(8)]);
var inst_19623 = (state_19646[(7)]);
var inst_19630 = cljs.core._EQ_.call(null,inst_19626,inst_19623);
var state_19646__$1 = state_19646;
if(inst_19630){
var statearr_19659_19676 = state_19646__$1;
(statearr_19659_19676[(1)] = (8));

} else {
var statearr_19660_19677 = state_19646__$1;
(statearr_19660_19677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19647 === (10))){
var inst_19638 = (state_19646[(2)]);
var state_19646__$1 = state_19646;
var statearr_19661_19678 = state_19646__$1;
(statearr_19661_19678[(2)] = inst_19638);

(statearr_19661_19678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19647 === (8))){
var inst_19623 = (state_19646[(7)]);
var tmp19658 = inst_19623;
var inst_19623__$1 = tmp19658;
var state_19646__$1 = (function (){var statearr_19662 = state_19646;
(statearr_19662[(7)] = inst_19623__$1);

return statearr_19662;
})();
var statearr_19663_19679 = state_19646__$1;
(statearr_19663_19679[(2)] = null);

(statearr_19663_19679[(1)] = (2));


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
});})(c__17933__auto___19669,out))
;
return ((function (switch__17843__auto__,c__17933__auto___19669,out){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_19664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19664[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_19664[(1)] = (1));

return statearr_19664;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_19646){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19665){if((e19665 instanceof Object)){
var ex__17847__auto__ = e19665;
var statearr_19666_19680 = state_19646;
(statearr_19666_19680[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19681 = state_19646;
state_19646 = G__19681;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_19646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_19646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___19669,out))
})();
var state__17935__auto__ = (function (){var statearr_19667 = f__17934__auto__.call(null);
(statearr_19667[(6)] = c__17933__auto___19669);

return statearr_19667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___19669,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19683 = arguments.length;
switch (G__19683) {
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
var c__17933__auto___19749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___19749,out){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___19749,out){
return (function (state_19721){
var state_val_19722 = (state_19721[(1)]);
if((state_val_19722 === (7))){
var inst_19717 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
var statearr_19723_19750 = state_19721__$1;
(statearr_19723_19750[(2)] = inst_19717);

(statearr_19723_19750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (1))){
var inst_19684 = (new Array(n));
var inst_19685 = inst_19684;
var inst_19686 = (0);
var state_19721__$1 = (function (){var statearr_19724 = state_19721;
(statearr_19724[(7)] = inst_19685);

(statearr_19724[(8)] = inst_19686);

return statearr_19724;
})();
var statearr_19725_19751 = state_19721__$1;
(statearr_19725_19751[(2)] = null);

(statearr_19725_19751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (4))){
var inst_19689 = (state_19721[(9)]);
var inst_19689__$1 = (state_19721[(2)]);
var inst_19690 = (inst_19689__$1 == null);
var inst_19691 = cljs.core.not.call(null,inst_19690);
var state_19721__$1 = (function (){var statearr_19726 = state_19721;
(statearr_19726[(9)] = inst_19689__$1);

return statearr_19726;
})();
if(inst_19691){
var statearr_19727_19752 = state_19721__$1;
(statearr_19727_19752[(1)] = (5));

} else {
var statearr_19728_19753 = state_19721__$1;
(statearr_19728_19753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (15))){
var inst_19711 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
var statearr_19729_19754 = state_19721__$1;
(statearr_19729_19754[(2)] = inst_19711);

(statearr_19729_19754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (13))){
var state_19721__$1 = state_19721;
var statearr_19730_19755 = state_19721__$1;
(statearr_19730_19755[(2)] = null);

(statearr_19730_19755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (6))){
var inst_19686 = (state_19721[(8)]);
var inst_19707 = (inst_19686 > (0));
var state_19721__$1 = state_19721;
if(cljs.core.truth_(inst_19707)){
var statearr_19731_19756 = state_19721__$1;
(statearr_19731_19756[(1)] = (12));

} else {
var statearr_19732_19757 = state_19721__$1;
(statearr_19732_19757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (3))){
var inst_19719 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19721__$1,inst_19719);
} else {
if((state_val_19722 === (12))){
var inst_19685 = (state_19721[(7)]);
var inst_19709 = cljs.core.vec.call(null,inst_19685);
var state_19721__$1 = state_19721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19721__$1,(15),out,inst_19709);
} else {
if((state_val_19722 === (2))){
var state_19721__$1 = state_19721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19721__$1,(4),ch);
} else {
if((state_val_19722 === (11))){
var inst_19701 = (state_19721[(2)]);
var inst_19702 = (new Array(n));
var inst_19685 = inst_19702;
var inst_19686 = (0);
var state_19721__$1 = (function (){var statearr_19733 = state_19721;
(statearr_19733[(7)] = inst_19685);

(statearr_19733[(10)] = inst_19701);

(statearr_19733[(8)] = inst_19686);

return statearr_19733;
})();
var statearr_19734_19758 = state_19721__$1;
(statearr_19734_19758[(2)] = null);

(statearr_19734_19758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (9))){
var inst_19685 = (state_19721[(7)]);
var inst_19699 = cljs.core.vec.call(null,inst_19685);
var state_19721__$1 = state_19721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19721__$1,(11),out,inst_19699);
} else {
if((state_val_19722 === (5))){
var inst_19685 = (state_19721[(7)]);
var inst_19689 = (state_19721[(9)]);
var inst_19686 = (state_19721[(8)]);
var inst_19694 = (state_19721[(11)]);
var inst_19693 = (inst_19685[inst_19686] = inst_19689);
var inst_19694__$1 = (inst_19686 + (1));
var inst_19695 = (inst_19694__$1 < n);
var state_19721__$1 = (function (){var statearr_19735 = state_19721;
(statearr_19735[(11)] = inst_19694__$1);

(statearr_19735[(12)] = inst_19693);

return statearr_19735;
})();
if(cljs.core.truth_(inst_19695)){
var statearr_19736_19759 = state_19721__$1;
(statearr_19736_19759[(1)] = (8));

} else {
var statearr_19737_19760 = state_19721__$1;
(statearr_19737_19760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (14))){
var inst_19714 = (state_19721[(2)]);
var inst_19715 = cljs.core.async.close_BANG_.call(null,out);
var state_19721__$1 = (function (){var statearr_19739 = state_19721;
(statearr_19739[(13)] = inst_19714);

return statearr_19739;
})();
var statearr_19740_19761 = state_19721__$1;
(statearr_19740_19761[(2)] = inst_19715);

(statearr_19740_19761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (10))){
var inst_19705 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
var statearr_19741_19762 = state_19721__$1;
(statearr_19741_19762[(2)] = inst_19705);

(statearr_19741_19762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19722 === (8))){
var inst_19685 = (state_19721[(7)]);
var inst_19694 = (state_19721[(11)]);
var tmp19738 = inst_19685;
var inst_19685__$1 = tmp19738;
var inst_19686 = inst_19694;
var state_19721__$1 = (function (){var statearr_19742 = state_19721;
(statearr_19742[(7)] = inst_19685__$1);

(statearr_19742[(8)] = inst_19686);

return statearr_19742;
})();
var statearr_19743_19763 = state_19721__$1;
(statearr_19743_19763[(2)] = null);

(statearr_19743_19763[(1)] = (2));


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
});})(c__17933__auto___19749,out))
;
return ((function (switch__17843__auto__,c__17933__auto___19749,out){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_19744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19744[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_19744[(1)] = (1));

return statearr_19744;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_19721){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19745){if((e19745 instanceof Object)){
var ex__17847__auto__ = e19745;
var statearr_19746_19764 = state_19721;
(statearr_19746_19764[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19765 = state_19721;
state_19721 = G__19765;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_19721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_19721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___19749,out))
})();
var state__17935__auto__ = (function (){var statearr_19747 = f__17934__auto__.call(null);
(statearr_19747[(6)] = c__17933__auto___19749);

return statearr_19747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___19749,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19767 = arguments.length;
switch (G__19767) {
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
var c__17933__auto___19837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___19837,out){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___19837,out){
return (function (state_19809){
var state_val_19810 = (state_19809[(1)]);
if((state_val_19810 === (7))){
var inst_19805 = (state_19809[(2)]);
var state_19809__$1 = state_19809;
var statearr_19811_19838 = state_19809__$1;
(statearr_19811_19838[(2)] = inst_19805);

(statearr_19811_19838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (1))){
var inst_19768 = [];
var inst_19769 = inst_19768;
var inst_19770 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19809__$1 = (function (){var statearr_19812 = state_19809;
(statearr_19812[(7)] = inst_19769);

(statearr_19812[(8)] = inst_19770);

return statearr_19812;
})();
var statearr_19813_19839 = state_19809__$1;
(statearr_19813_19839[(2)] = null);

(statearr_19813_19839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (4))){
var inst_19773 = (state_19809[(9)]);
var inst_19773__$1 = (state_19809[(2)]);
var inst_19774 = (inst_19773__$1 == null);
var inst_19775 = cljs.core.not.call(null,inst_19774);
var state_19809__$1 = (function (){var statearr_19814 = state_19809;
(statearr_19814[(9)] = inst_19773__$1);

return statearr_19814;
})();
if(inst_19775){
var statearr_19815_19840 = state_19809__$1;
(statearr_19815_19840[(1)] = (5));

} else {
var statearr_19816_19841 = state_19809__$1;
(statearr_19816_19841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (15))){
var inst_19799 = (state_19809[(2)]);
var state_19809__$1 = state_19809;
var statearr_19817_19842 = state_19809__$1;
(statearr_19817_19842[(2)] = inst_19799);

(statearr_19817_19842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (13))){
var state_19809__$1 = state_19809;
var statearr_19818_19843 = state_19809__$1;
(statearr_19818_19843[(2)] = null);

(statearr_19818_19843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (6))){
var inst_19769 = (state_19809[(7)]);
var inst_19794 = inst_19769.length;
var inst_19795 = (inst_19794 > (0));
var state_19809__$1 = state_19809;
if(cljs.core.truth_(inst_19795)){
var statearr_19819_19844 = state_19809__$1;
(statearr_19819_19844[(1)] = (12));

} else {
var statearr_19820_19845 = state_19809__$1;
(statearr_19820_19845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (3))){
var inst_19807 = (state_19809[(2)]);
var state_19809__$1 = state_19809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19809__$1,inst_19807);
} else {
if((state_val_19810 === (12))){
var inst_19769 = (state_19809[(7)]);
var inst_19797 = cljs.core.vec.call(null,inst_19769);
var state_19809__$1 = state_19809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19809__$1,(15),out,inst_19797);
} else {
if((state_val_19810 === (2))){
var state_19809__$1 = state_19809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19809__$1,(4),ch);
} else {
if((state_val_19810 === (11))){
var inst_19773 = (state_19809[(9)]);
var inst_19777 = (state_19809[(10)]);
var inst_19787 = (state_19809[(2)]);
var inst_19788 = [];
var inst_19789 = inst_19788.push(inst_19773);
var inst_19769 = inst_19788;
var inst_19770 = inst_19777;
var state_19809__$1 = (function (){var statearr_19821 = state_19809;
(statearr_19821[(11)] = inst_19787);

(statearr_19821[(12)] = inst_19789);

(statearr_19821[(7)] = inst_19769);

(statearr_19821[(8)] = inst_19770);

return statearr_19821;
})();
var statearr_19822_19846 = state_19809__$1;
(statearr_19822_19846[(2)] = null);

(statearr_19822_19846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (9))){
var inst_19769 = (state_19809[(7)]);
var inst_19785 = cljs.core.vec.call(null,inst_19769);
var state_19809__$1 = state_19809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19809__$1,(11),out,inst_19785);
} else {
if((state_val_19810 === (5))){
var inst_19773 = (state_19809[(9)]);
var inst_19770 = (state_19809[(8)]);
var inst_19777 = (state_19809[(10)]);
var inst_19777__$1 = f.call(null,inst_19773);
var inst_19778 = cljs.core._EQ_.call(null,inst_19777__$1,inst_19770);
var inst_19779 = cljs.core.keyword_identical_QMARK_.call(null,inst_19770,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19780 = (inst_19778) || (inst_19779);
var state_19809__$1 = (function (){var statearr_19823 = state_19809;
(statearr_19823[(10)] = inst_19777__$1);

return statearr_19823;
})();
if(cljs.core.truth_(inst_19780)){
var statearr_19824_19847 = state_19809__$1;
(statearr_19824_19847[(1)] = (8));

} else {
var statearr_19825_19848 = state_19809__$1;
(statearr_19825_19848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (14))){
var inst_19802 = (state_19809[(2)]);
var inst_19803 = cljs.core.async.close_BANG_.call(null,out);
var state_19809__$1 = (function (){var statearr_19827 = state_19809;
(statearr_19827[(13)] = inst_19802);

return statearr_19827;
})();
var statearr_19828_19849 = state_19809__$1;
(statearr_19828_19849[(2)] = inst_19803);

(statearr_19828_19849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (10))){
var inst_19792 = (state_19809[(2)]);
var state_19809__$1 = state_19809;
var statearr_19829_19850 = state_19809__$1;
(statearr_19829_19850[(2)] = inst_19792);

(statearr_19829_19850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19810 === (8))){
var inst_19773 = (state_19809[(9)]);
var inst_19769 = (state_19809[(7)]);
var inst_19777 = (state_19809[(10)]);
var inst_19782 = inst_19769.push(inst_19773);
var tmp19826 = inst_19769;
var inst_19769__$1 = tmp19826;
var inst_19770 = inst_19777;
var state_19809__$1 = (function (){var statearr_19830 = state_19809;
(statearr_19830[(14)] = inst_19782);

(statearr_19830[(7)] = inst_19769__$1);

(statearr_19830[(8)] = inst_19770);

return statearr_19830;
})();
var statearr_19831_19851 = state_19809__$1;
(statearr_19831_19851[(2)] = null);

(statearr_19831_19851[(1)] = (2));


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
});})(c__17933__auto___19837,out))
;
return ((function (switch__17843__auto__,c__17933__auto___19837,out){
return (function() {
var cljs$core$async$state_machine__17844__auto__ = null;
var cljs$core$async$state_machine__17844__auto____0 = (function (){
var statearr_19832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19832[(0)] = cljs$core$async$state_machine__17844__auto__);

(statearr_19832[(1)] = (1));

return statearr_19832;
});
var cljs$core$async$state_machine__17844__auto____1 = (function (state_19809){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_19809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e19833){if((e19833 instanceof Object)){
var ex__17847__auto__ = e19833;
var statearr_19834_19852 = state_19809;
(statearr_19834_19852[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19853 = state_19809;
state_19809 = G__19853;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
cljs$core$async$state_machine__17844__auto__ = function(state_19809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17844__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17844__auto____1.call(this,state_19809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17844__auto____0;
cljs$core$async$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17844__auto____1;
return cljs$core$async$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___19837,out))
})();
var state__17935__auto__ = (function (){var statearr_19835 = f__17934__auto__.call(null);
(statearr_19835[(6)] = c__17933__auto___19837);

return statearr_19835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___19837,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504894091330
