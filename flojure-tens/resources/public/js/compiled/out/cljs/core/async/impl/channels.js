// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290 = (function (val,meta63291){
this.val = val;
this.meta63291 = meta63291;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63292,meta63291__$1){
var self__ = this;
var _63292__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290(self__.val,meta63291__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63292){
var self__ = this;
var _63292__$1 = this;
return self__.meta63291;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta63291","meta63291",-1580272544,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels63290";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels63290");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels63290 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels63290(val__$1,meta63291){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290(val__$1,meta63291));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels63290(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__58894__auto__ = (((this$ == null))?null:this$);
var m__58895__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,this$);
} else {
var m__58895__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_63304 = self__.puts.pop();
if((putter_63304 == null)){
} else {
var put_handler_63305 = putter_63304.handler;
var val_63306 = putter_63304.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_63305)){
var put_cb_63307 = cljs.core.async.impl.protocols.commit.call(null,put_handler_63305);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_63307,put_handler_63305,val_63306,putter_63304,this$__$1){
return (function (){
return put_cb_63307.call(null,true);
});})(put_cb_63307,put_handler_63305,val_63306,putter_63304,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__58149__auto__ = self__.buf;
if(cljs.core.truth_(and__58149__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__58149__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__63308 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__63308;
continue;
} else {
var G__63309 = takers;
takers = G__63309;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__63293_63310 = cljs.core.seq.call(null,take_cbs);
var chunk__63294_63311 = null;
var count__63295_63312 = (0);
var i__63296_63313 = (0);
while(true){
if((i__63296_63313 < count__63295_63312)){
var f_63314 = cljs.core._nth.call(null,chunk__63294_63311,i__63296_63313);
cljs.core.async.impl.dispatch.run.call(null,f_63314);

var G__63315 = seq__63293_63310;
var G__63316 = chunk__63294_63311;
var G__63317 = count__63295_63312;
var G__63318 = (i__63296_63313 + (1));
seq__63293_63310 = G__63315;
chunk__63294_63311 = G__63316;
count__63295_63312 = G__63317;
i__63296_63313 = G__63318;
continue;
} else {
var temp__6738__auto___63319 = cljs.core.seq.call(null,seq__63293_63310);
if(temp__6738__auto___63319){
var seq__63293_63320__$1 = temp__6738__auto___63319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63293_63320__$1)){
var c__59092__auto___63321 = cljs.core.chunk_first.call(null,seq__63293_63320__$1);
var G__63322 = cljs.core.chunk_rest.call(null,seq__63293_63320__$1);
var G__63323 = c__59092__auto___63321;
var G__63324 = cljs.core.count.call(null,c__59092__auto___63321);
var G__63325 = (0);
seq__63293_63310 = G__63322;
chunk__63294_63311 = G__63323;
count__63295_63312 = G__63324;
i__63296_63313 = G__63325;
continue;
} else {
var f_63326 = cljs.core.first.call(null,seq__63293_63320__$1);
cljs.core.async.impl.dispatch.run.call(null,f_63326);

var G__63327 = cljs.core.next.call(null,seq__63293_63320__$1);
var G__63328 = null;
var G__63329 = (0);
var G__63330 = (0);
seq__63293_63310 = G__63327;
chunk__63294_63311 = G__63328;
count__63295_63312 = G__63329;
i__63296_63313 = G__63330;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__6736__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__6736__auto__)){
var take_cb = temp__6736__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__63297 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__58149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__58149__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__58149__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__63331 = cbs__$1;
cbs = G__63331;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__63297,(0),null);
var cbs = cljs.core.nth.call(null,vec__63297,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__63300_63332 = cljs.core.seq.call(null,cbs);
var chunk__63301_63333 = null;
var count__63302_63334 = (0);
var i__63303_63335 = (0);
while(true){
if((i__63303_63335 < count__63302_63334)){
var cb_63336 = cljs.core._nth.call(null,chunk__63301_63333,i__63303_63335);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__63300_63332,chunk__63301_63333,count__63302_63334,i__63303_63335,cb_63336,val,vec__63297,done_QMARK_,cbs,take_cb,temp__6736__auto__,this$__$1){
return (function (){
return cb_63336.call(null,true);
});})(seq__63300_63332,chunk__63301_63333,count__63302_63334,i__63303_63335,cb_63336,val,vec__63297,done_QMARK_,cbs,take_cb,temp__6736__auto__,this$__$1))
);

var G__63337 = seq__63300_63332;
var G__63338 = chunk__63301_63333;
var G__63339 = count__63302_63334;
var G__63340 = (i__63303_63335 + (1));
seq__63300_63332 = G__63337;
chunk__63301_63333 = G__63338;
count__63302_63334 = G__63339;
i__63303_63335 = G__63340;
continue;
} else {
var temp__6738__auto___63341 = cljs.core.seq.call(null,seq__63300_63332);
if(temp__6738__auto___63341){
var seq__63300_63342__$1 = temp__6738__auto___63341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63300_63342__$1)){
var c__59092__auto___63343 = cljs.core.chunk_first.call(null,seq__63300_63342__$1);
var G__63344 = cljs.core.chunk_rest.call(null,seq__63300_63342__$1);
var G__63345 = c__59092__auto___63343;
var G__63346 = cljs.core.count.call(null,c__59092__auto___63343);
var G__63347 = (0);
seq__63300_63332 = G__63344;
chunk__63301_63333 = G__63345;
count__63302_63334 = G__63346;
i__63303_63335 = G__63347;
continue;
} else {
var cb_63348 = cljs.core.first.call(null,seq__63300_63342__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__63300_63332,chunk__63301_63333,count__63302_63334,i__63303_63335,cb_63348,seq__63300_63342__$1,temp__6738__auto___63341,val,vec__63297,done_QMARK_,cbs,take_cb,temp__6736__auto__,this$__$1){
return (function (){
return cb_63348.call(null,true);
});})(seq__63300_63332,chunk__63301_63333,count__63302_63334,i__63303_63335,cb_63348,seq__63300_63342__$1,temp__6738__auto___63341,val,vec__63297,done_QMARK_,cbs,take_cb,temp__6736__auto__,this$__$1))
);

var G__63349 = cljs.core.next.call(null,seq__63300_63342__$1);
var G__63350 = null;
var G__63351 = (0);
var G__63352 = (0);
seq__63300_63332 = G__63349;
chunk__63301_63333 = G__63350;
count__63302_63334 = G__63351;
i__63303_63335 = G__63352;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__58149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__58149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__58149__auto__;
}
})())){
var has_val = (function (){var and__58149__auto__ = self__.buf;
if(cljs.core.truth_(and__58149__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__58149__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__58149__auto__ = self__.buf;
if(cljs.core.truth_(and__58149__auto__)){
return (self__.puts.length === (0));
} else {
return and__58149__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_63353 = self__.takes.pop();
if((taker_63353 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_63353)){
var take_cb_63354 = cljs.core.async.impl.protocols.commit.call(null,taker_63353);
var val_63355 = (cljs.core.truth_((function (){var and__58149__auto__ = self__.buf;
if(cljs.core.truth_(and__58149__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__58149__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_63354,val_63355,taker_63353,this$__$1){
return (function (){
return take_cb_63354.call(null,val_63355);
});})(take_cb_63354,val_63355,taker_63353,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__58161__auto__ = exh;
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__63357 = arguments.length;
switch (G__63357) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__63361 = null;
var G__63361__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e63358){var t = e63358;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__63361__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e63359){var t = e63359;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__63361 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__63361__1.call(this,buf__$1);
case 2:
return G__63361__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__63361.cljs$core$IFn$_invoke$arity$1 = G__63361__1;
G__63361.cljs$core$IFn$_invoke$arity$2 = G__63361__2;
return G__63361;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1505406780721
