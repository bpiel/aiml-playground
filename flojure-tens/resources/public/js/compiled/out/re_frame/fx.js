// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__23426 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23427 = null;
var count__23428 = (0);
var i__23429 = (0);
while(true){
if((i__23429 < count__23428)){
var vec__23430 = cljs.core._nth.call(null,chunk__23427,i__23429);
var effect_key = cljs.core.nth.call(null,vec__23430,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23430,(1),null);
var temp__6736__auto___23436 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___23436)){
var effect_fn_23437 = temp__6736__auto___23436;
effect_fn_23437.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__23438 = seq__23426;
var G__23439 = chunk__23427;
var G__23440 = count__23428;
var G__23441 = (i__23429 + (1));
seq__23426 = G__23438;
chunk__23427 = G__23439;
count__23428 = G__23440;
i__23429 = G__23441;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__23426);
if(temp__6738__auto__){
var seq__23426__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23426__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__23426__$1);
var G__23442 = cljs.core.chunk_rest.call(null,seq__23426__$1);
var G__23443 = c__10741__auto__;
var G__23444 = cljs.core.count.call(null,c__10741__auto__);
var G__23445 = (0);
seq__23426 = G__23442;
chunk__23427 = G__23443;
count__23428 = G__23444;
i__23429 = G__23445;
continue;
} else {
var vec__23433 = cljs.core.first.call(null,seq__23426__$1);
var effect_key = cljs.core.nth.call(null,vec__23433,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23433,(1),null);
var temp__6736__auto___23446 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___23446)){
var effect_fn_23447 = temp__6736__auto___23446;
effect_fn_23447.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__23448 = cljs.core.next.call(null,seq__23426__$1);
var G__23449 = null;
var G__23450 = (0);
var G__23451 = (0);
seq__23426 = G__23448;
chunk__23427 = G__23449;
count__23428 = G__23450;
i__23429 = G__23451;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23452 = cljs.core.seq.call(null,value);
var chunk__23453 = null;
var count__23454 = (0);
var i__23455 = (0);
while(true){
if((i__23455 < count__23454)){
var map__23456 = cljs.core._nth.call(null,chunk__23453,i__23455);
var map__23456__$1 = ((((!((map__23456 == null)))?((((map__23456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23456):map__23456);
var effect = map__23456__$1;
var ms = cljs.core.get.call(null,map__23456__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23456__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23452,chunk__23453,count__23454,i__23455,map__23456,map__23456__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23452,chunk__23453,count__23454,i__23455,map__23456,map__23456__$1,effect,ms,dispatch))
,ms);
}

var G__23460 = seq__23452;
var G__23461 = chunk__23453;
var G__23462 = count__23454;
var G__23463 = (i__23455 + (1));
seq__23452 = G__23460;
chunk__23453 = G__23461;
count__23454 = G__23462;
i__23455 = G__23463;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__23452);
if(temp__6738__auto__){
var seq__23452__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23452__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__23452__$1);
var G__23464 = cljs.core.chunk_rest.call(null,seq__23452__$1);
var G__23465 = c__10741__auto__;
var G__23466 = cljs.core.count.call(null,c__10741__auto__);
var G__23467 = (0);
seq__23452 = G__23464;
chunk__23453 = G__23465;
count__23454 = G__23466;
i__23455 = G__23467;
continue;
} else {
var map__23458 = cljs.core.first.call(null,seq__23452__$1);
var map__23458__$1 = ((((!((map__23458 == null)))?((((map__23458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23458):map__23458);
var effect = map__23458__$1;
var ms = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23452,chunk__23453,count__23454,i__23455,map__23458,map__23458__$1,effect,ms,dispatch,seq__23452__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23452,chunk__23453,count__23454,i__23455,map__23458,map__23458__$1,effect,ms,dispatch,seq__23452__$1,temp__6738__auto__))
,ms);
}

var G__23468 = cljs.core.next.call(null,seq__23452__$1);
var G__23469 = null;
var G__23470 = (0);
var G__23471 = (0);
seq__23452 = G__23468;
chunk__23453 = G__23469;
count__23454 = G__23470;
i__23455 = G__23471;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__23472 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23473 = null;
var count__23474 = (0);
var i__23475 = (0);
while(true){
if((i__23475 < count__23474)){
var event = cljs.core._nth.call(null,chunk__23473,i__23475);
re_frame.router.dispatch.call(null,event);

var G__23476 = seq__23472;
var G__23477 = chunk__23473;
var G__23478 = count__23474;
var G__23479 = (i__23475 + (1));
seq__23472 = G__23476;
chunk__23473 = G__23477;
count__23474 = G__23478;
i__23475 = G__23479;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__23472);
if(temp__6738__auto__){
var seq__23472__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23472__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__23472__$1);
var G__23480 = cljs.core.chunk_rest.call(null,seq__23472__$1);
var G__23481 = c__10741__auto__;
var G__23482 = cljs.core.count.call(null,c__10741__auto__);
var G__23483 = (0);
seq__23472 = G__23480;
chunk__23473 = G__23481;
count__23474 = G__23482;
i__23475 = G__23483;
continue;
} else {
var event = cljs.core.first.call(null,seq__23472__$1);
re_frame.router.dispatch.call(null,event);

var G__23484 = cljs.core.next.call(null,seq__23472__$1);
var G__23485 = null;
var G__23486 = (0);
var G__23487 = (0);
seq__23472 = G__23484;
chunk__23473 = G__23485;
count__23474 = G__23486;
i__23475 = G__23487;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__23488 = cljs.core.seq.call(null,value);
var chunk__23489 = null;
var count__23490 = (0);
var i__23491 = (0);
while(true){
if((i__23491 < count__23490)){
var event = cljs.core._nth.call(null,chunk__23489,i__23491);
clear_event.call(null,event);

var G__23492 = seq__23488;
var G__23493 = chunk__23489;
var G__23494 = count__23490;
var G__23495 = (i__23491 + (1));
seq__23488 = G__23492;
chunk__23489 = G__23493;
count__23490 = G__23494;
i__23491 = G__23495;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__23488);
if(temp__6738__auto__){
var seq__23488__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23488__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__23488__$1);
var G__23496 = cljs.core.chunk_rest.call(null,seq__23488__$1);
var G__23497 = c__10741__auto__;
var G__23498 = cljs.core.count.call(null,c__10741__auto__);
var G__23499 = (0);
seq__23488 = G__23496;
chunk__23489 = G__23497;
count__23490 = G__23498;
i__23491 = G__23499;
continue;
} else {
var event = cljs.core.first.call(null,seq__23488__$1);
clear_event.call(null,event);

var G__23500 = cljs.core.next.call(null,seq__23488__$1);
var G__23501 = null;
var G__23502 = (0);
var G__23503 = (0);
seq__23488 = G__23500;
chunk__23489 = G__23501;
count__23490 = G__23502;
i__23491 = G__23503;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1504285965001
