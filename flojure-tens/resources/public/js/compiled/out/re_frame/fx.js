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
var seq__66459 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__66460 = null;
var count__66461 = (0);
var i__66462 = (0);
while(true){
if((i__66462 < count__66461)){
var vec__66463 = cljs.core._nth.call(null,chunk__66460,i__66462);
var effect_key = cljs.core.nth.call(null,vec__66463,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66463,(1),null);
var temp__6736__auto___66469 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___66469)){
var effect_fn_66470 = temp__6736__auto___66469;
effect_fn_66470.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__66471 = seq__66459;
var G__66472 = chunk__66460;
var G__66473 = count__66461;
var G__66474 = (i__66462 + (1));
seq__66459 = G__66471;
chunk__66460 = G__66472;
count__66461 = G__66473;
i__66462 = G__66474;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__66459);
if(temp__6738__auto__){
var seq__66459__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66459__$1)){
var c__59066__auto__ = cljs.core.chunk_first.call(null,seq__66459__$1);
var G__66475 = cljs.core.chunk_rest.call(null,seq__66459__$1);
var G__66476 = c__59066__auto__;
var G__66477 = cljs.core.count.call(null,c__59066__auto__);
var G__66478 = (0);
seq__66459 = G__66475;
chunk__66460 = G__66476;
count__66461 = G__66477;
i__66462 = G__66478;
continue;
} else {
var vec__66466 = cljs.core.first.call(null,seq__66459__$1);
var effect_key = cljs.core.nth.call(null,vec__66466,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66466,(1),null);
var temp__6736__auto___66479 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___66479)){
var effect_fn_66480 = temp__6736__auto___66479;
effect_fn_66480.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__66481 = cljs.core.next.call(null,seq__66459__$1);
var G__66482 = null;
var G__66483 = (0);
var G__66484 = (0);
seq__66459 = G__66481;
chunk__66460 = G__66482;
count__66461 = G__66483;
i__66462 = G__66484;
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
var seq__66485 = cljs.core.seq.call(null,value);
var chunk__66486 = null;
var count__66487 = (0);
var i__66488 = (0);
while(true){
if((i__66488 < count__66487)){
var map__66489 = cljs.core._nth.call(null,chunk__66486,i__66488);
var map__66489__$1 = ((((!((map__66489 == null)))?((((map__66489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66489):map__66489);
var effect = map__66489__$1;
var ms = cljs.core.get.call(null,map__66489__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__66489__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__66485,chunk__66486,count__66487,i__66488,map__66489,map__66489__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__66485,chunk__66486,count__66487,i__66488,map__66489,map__66489__$1,effect,ms,dispatch))
,ms);
}

var G__66493 = seq__66485;
var G__66494 = chunk__66486;
var G__66495 = count__66487;
var G__66496 = (i__66488 + (1));
seq__66485 = G__66493;
chunk__66486 = G__66494;
count__66487 = G__66495;
i__66488 = G__66496;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__66485);
if(temp__6738__auto__){
var seq__66485__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66485__$1)){
var c__59066__auto__ = cljs.core.chunk_first.call(null,seq__66485__$1);
var G__66497 = cljs.core.chunk_rest.call(null,seq__66485__$1);
var G__66498 = c__59066__auto__;
var G__66499 = cljs.core.count.call(null,c__59066__auto__);
var G__66500 = (0);
seq__66485 = G__66497;
chunk__66486 = G__66498;
count__66487 = G__66499;
i__66488 = G__66500;
continue;
} else {
var map__66491 = cljs.core.first.call(null,seq__66485__$1);
var map__66491__$1 = ((((!((map__66491 == null)))?((((map__66491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66491):map__66491);
var effect = map__66491__$1;
var ms = cljs.core.get.call(null,map__66491__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__66491__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__66485,chunk__66486,count__66487,i__66488,map__66491,map__66491__$1,effect,ms,dispatch,seq__66485__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__66485,chunk__66486,count__66487,i__66488,map__66491,map__66491__$1,effect,ms,dispatch,seq__66485__$1,temp__6738__auto__))
,ms);
}

var G__66501 = cljs.core.next.call(null,seq__66485__$1);
var G__66502 = null;
var G__66503 = (0);
var G__66504 = (0);
seq__66485 = G__66501;
chunk__66486 = G__66502;
count__66487 = G__66503;
i__66488 = G__66504;
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
var seq__66505 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__66506 = null;
var count__66507 = (0);
var i__66508 = (0);
while(true){
if((i__66508 < count__66507)){
var event = cljs.core._nth.call(null,chunk__66506,i__66508);
re_frame.router.dispatch.call(null,event);

var G__66509 = seq__66505;
var G__66510 = chunk__66506;
var G__66511 = count__66507;
var G__66512 = (i__66508 + (1));
seq__66505 = G__66509;
chunk__66506 = G__66510;
count__66507 = G__66511;
i__66508 = G__66512;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__66505);
if(temp__6738__auto__){
var seq__66505__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66505__$1)){
var c__59066__auto__ = cljs.core.chunk_first.call(null,seq__66505__$1);
var G__66513 = cljs.core.chunk_rest.call(null,seq__66505__$1);
var G__66514 = c__59066__auto__;
var G__66515 = cljs.core.count.call(null,c__59066__auto__);
var G__66516 = (0);
seq__66505 = G__66513;
chunk__66506 = G__66514;
count__66507 = G__66515;
i__66508 = G__66516;
continue;
} else {
var event = cljs.core.first.call(null,seq__66505__$1);
re_frame.router.dispatch.call(null,event);

var G__66517 = cljs.core.next.call(null,seq__66505__$1);
var G__66518 = null;
var G__66519 = (0);
var G__66520 = (0);
seq__66505 = G__66517;
chunk__66506 = G__66518;
count__66507 = G__66519;
i__66508 = G__66520;
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
var seq__66521 = cljs.core.seq.call(null,value);
var chunk__66522 = null;
var count__66523 = (0);
var i__66524 = (0);
while(true){
if((i__66524 < count__66523)){
var event = cljs.core._nth.call(null,chunk__66522,i__66524);
clear_event.call(null,event);

var G__66525 = seq__66521;
var G__66526 = chunk__66522;
var G__66527 = count__66523;
var G__66528 = (i__66524 + (1));
seq__66521 = G__66525;
chunk__66522 = G__66526;
count__66523 = G__66527;
i__66524 = G__66528;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__66521);
if(temp__6738__auto__){
var seq__66521__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66521__$1)){
var c__59066__auto__ = cljs.core.chunk_first.call(null,seq__66521__$1);
var G__66529 = cljs.core.chunk_rest.call(null,seq__66521__$1);
var G__66530 = c__59066__auto__;
var G__66531 = cljs.core.count.call(null,c__59066__auto__);
var G__66532 = (0);
seq__66521 = G__66529;
chunk__66522 = G__66530;
count__66523 = G__66531;
i__66524 = G__66532;
continue;
} else {
var event = cljs.core.first.call(null,seq__66521__$1);
clear_event.call(null,event);

var G__66533 = cljs.core.next.call(null,seq__66521__$1);
var G__66534 = null;
var G__66535 = (0);
var G__66536 = (0);
seq__66521 = G__66533;
chunk__66522 = G__66534;
count__66523 = G__66535;
i__66524 = G__66536;
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

//# sourceMappingURL=fx.js.map?rel=1506641509471
