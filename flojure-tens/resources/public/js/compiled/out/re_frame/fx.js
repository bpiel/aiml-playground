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
var seq__21467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21468 = null;
var count__21469 = (0);
var i__21470 = (0);
while(true){
if((i__21470 < count__21469)){
var vec__21471 = cljs.core._nth.call(null,chunk__21468,i__21470);
var effect_key = cljs.core.nth.call(null,vec__21471,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21471,(1),null);
var temp__6736__auto___21477 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___21477)){
var effect_fn_21478 = temp__6736__auto___21477;
effect_fn_21478.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__21479 = seq__21467;
var G__21480 = chunk__21468;
var G__21481 = count__21469;
var G__21482 = (i__21470 + (1));
seq__21467 = G__21479;
chunk__21468 = G__21480;
count__21469 = G__21481;
i__21470 = G__21482;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21467);
if(temp__6738__auto__){
var seq__21467__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21467__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21467__$1);
var G__21483 = cljs.core.chunk_rest.call(null,seq__21467__$1);
var G__21484 = c__10741__auto__;
var G__21485 = cljs.core.count.call(null,c__10741__auto__);
var G__21486 = (0);
seq__21467 = G__21483;
chunk__21468 = G__21484;
count__21469 = G__21485;
i__21470 = G__21486;
continue;
} else {
var vec__21474 = cljs.core.first.call(null,seq__21467__$1);
var effect_key = cljs.core.nth.call(null,vec__21474,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21474,(1),null);
var temp__6736__auto___21487 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___21487)){
var effect_fn_21488 = temp__6736__auto___21487;
effect_fn_21488.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__21489 = cljs.core.next.call(null,seq__21467__$1);
var G__21490 = null;
var G__21491 = (0);
var G__21492 = (0);
seq__21467 = G__21489;
chunk__21468 = G__21490;
count__21469 = G__21491;
i__21470 = G__21492;
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
var seq__21493 = cljs.core.seq.call(null,value);
var chunk__21494 = null;
var count__21495 = (0);
var i__21496 = (0);
while(true){
if((i__21496 < count__21495)){
var map__21497 = cljs.core._nth.call(null,chunk__21494,i__21496);
var map__21497__$1 = ((((!((map__21497 == null)))?((((map__21497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21497):map__21497);
var effect = map__21497__$1;
var ms = cljs.core.get.call(null,map__21497__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21497__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21493,chunk__21494,count__21495,i__21496,map__21497,map__21497__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21493,chunk__21494,count__21495,i__21496,map__21497,map__21497__$1,effect,ms,dispatch))
,ms);
}

var G__21501 = seq__21493;
var G__21502 = chunk__21494;
var G__21503 = count__21495;
var G__21504 = (i__21496 + (1));
seq__21493 = G__21501;
chunk__21494 = G__21502;
count__21495 = G__21503;
i__21496 = G__21504;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21493);
if(temp__6738__auto__){
var seq__21493__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21493__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21493__$1);
var G__21505 = cljs.core.chunk_rest.call(null,seq__21493__$1);
var G__21506 = c__10741__auto__;
var G__21507 = cljs.core.count.call(null,c__10741__auto__);
var G__21508 = (0);
seq__21493 = G__21505;
chunk__21494 = G__21506;
count__21495 = G__21507;
i__21496 = G__21508;
continue;
} else {
var map__21499 = cljs.core.first.call(null,seq__21493__$1);
var map__21499__$1 = ((((!((map__21499 == null)))?((((map__21499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21499):map__21499);
var effect = map__21499__$1;
var ms = cljs.core.get.call(null,map__21499__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21499__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21493,chunk__21494,count__21495,i__21496,map__21499,map__21499__$1,effect,ms,dispatch,seq__21493__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21493,chunk__21494,count__21495,i__21496,map__21499,map__21499__$1,effect,ms,dispatch,seq__21493__$1,temp__6738__auto__))
,ms);
}

var G__21509 = cljs.core.next.call(null,seq__21493__$1);
var G__21510 = null;
var G__21511 = (0);
var G__21512 = (0);
seq__21493 = G__21509;
chunk__21494 = G__21510;
count__21495 = G__21511;
i__21496 = G__21512;
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
var seq__21513 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__21514 = null;
var count__21515 = (0);
var i__21516 = (0);
while(true){
if((i__21516 < count__21515)){
var event = cljs.core._nth.call(null,chunk__21514,i__21516);
re_frame.router.dispatch.call(null,event);

var G__21517 = seq__21513;
var G__21518 = chunk__21514;
var G__21519 = count__21515;
var G__21520 = (i__21516 + (1));
seq__21513 = G__21517;
chunk__21514 = G__21518;
count__21515 = G__21519;
i__21516 = G__21520;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21513);
if(temp__6738__auto__){
var seq__21513__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21513__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21513__$1);
var G__21521 = cljs.core.chunk_rest.call(null,seq__21513__$1);
var G__21522 = c__10741__auto__;
var G__21523 = cljs.core.count.call(null,c__10741__auto__);
var G__21524 = (0);
seq__21513 = G__21521;
chunk__21514 = G__21522;
count__21515 = G__21523;
i__21516 = G__21524;
continue;
} else {
var event = cljs.core.first.call(null,seq__21513__$1);
re_frame.router.dispatch.call(null,event);

var G__21525 = cljs.core.next.call(null,seq__21513__$1);
var G__21526 = null;
var G__21527 = (0);
var G__21528 = (0);
seq__21513 = G__21525;
chunk__21514 = G__21526;
count__21515 = G__21527;
i__21516 = G__21528;
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
var seq__21529 = cljs.core.seq.call(null,value);
var chunk__21530 = null;
var count__21531 = (0);
var i__21532 = (0);
while(true){
if((i__21532 < count__21531)){
var event = cljs.core._nth.call(null,chunk__21530,i__21532);
clear_event.call(null,event);

var G__21533 = seq__21529;
var G__21534 = chunk__21530;
var G__21535 = count__21531;
var G__21536 = (i__21532 + (1));
seq__21529 = G__21533;
chunk__21530 = G__21534;
count__21531 = G__21535;
i__21532 = G__21536;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21529);
if(temp__6738__auto__){
var seq__21529__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21529__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21529__$1);
var G__21537 = cljs.core.chunk_rest.call(null,seq__21529__$1);
var G__21538 = c__10741__auto__;
var G__21539 = cljs.core.count.call(null,c__10741__auto__);
var G__21540 = (0);
seq__21529 = G__21537;
chunk__21530 = G__21538;
count__21531 = G__21539;
i__21532 = G__21540;
continue;
} else {
var event = cljs.core.first.call(null,seq__21529__$1);
clear_event.call(null,event);

var G__21541 = cljs.core.next.call(null,seq__21529__$1);
var G__21542 = null;
var G__21543 = (0);
var G__21544 = (0);
seq__21529 = G__21541;
chunk__21530 = G__21542;
count__21531 = G__21543;
i__21532 = G__21544;
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

//# sourceMappingURL=fx.js.map?rel=1505782686103
