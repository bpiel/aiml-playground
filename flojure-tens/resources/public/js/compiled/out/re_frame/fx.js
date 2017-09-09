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
var seq__20563 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__20564 = null;
var count__20565 = (0);
var i__20566 = (0);
while(true){
if((i__20566 < count__20565)){
var vec__20567 = cljs.core._nth.call(null,chunk__20564,i__20566);
var effect_key = cljs.core.nth.call(null,vec__20567,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20567,(1),null);
var temp__6736__auto___20573 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___20573)){
var effect_fn_20574 = temp__6736__auto___20573;
effect_fn_20574.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__20575 = seq__20563;
var G__20576 = chunk__20564;
var G__20577 = count__20565;
var G__20578 = (i__20566 + (1));
seq__20563 = G__20575;
chunk__20564 = G__20576;
count__20565 = G__20577;
i__20566 = G__20578;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__20563);
if(temp__6738__auto__){
var seq__20563__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20563__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__20563__$1);
var G__20579 = cljs.core.chunk_rest.call(null,seq__20563__$1);
var G__20580 = c__10741__auto__;
var G__20581 = cljs.core.count.call(null,c__10741__auto__);
var G__20582 = (0);
seq__20563 = G__20579;
chunk__20564 = G__20580;
count__20565 = G__20581;
i__20566 = G__20582;
continue;
} else {
var vec__20570 = cljs.core.first.call(null,seq__20563__$1);
var effect_key = cljs.core.nth.call(null,vec__20570,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20570,(1),null);
var temp__6736__auto___20583 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___20583)){
var effect_fn_20584 = temp__6736__auto___20583;
effect_fn_20584.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__20585 = cljs.core.next.call(null,seq__20563__$1);
var G__20586 = null;
var G__20587 = (0);
var G__20588 = (0);
seq__20563 = G__20585;
chunk__20564 = G__20586;
count__20565 = G__20587;
i__20566 = G__20588;
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
var seq__20589 = cljs.core.seq.call(null,value);
var chunk__20590 = null;
var count__20591 = (0);
var i__20592 = (0);
while(true){
if((i__20592 < count__20591)){
var map__20593 = cljs.core._nth.call(null,chunk__20590,i__20592);
var map__20593__$1 = ((((!((map__20593 == null)))?((((map__20593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20593):map__20593);
var effect = map__20593__$1;
var ms = cljs.core.get.call(null,map__20593__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__20593__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__20589,chunk__20590,count__20591,i__20592,map__20593,map__20593__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__20589,chunk__20590,count__20591,i__20592,map__20593,map__20593__$1,effect,ms,dispatch))
,ms);
}

var G__20597 = seq__20589;
var G__20598 = chunk__20590;
var G__20599 = count__20591;
var G__20600 = (i__20592 + (1));
seq__20589 = G__20597;
chunk__20590 = G__20598;
count__20591 = G__20599;
i__20592 = G__20600;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__20589);
if(temp__6738__auto__){
var seq__20589__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20589__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__20589__$1);
var G__20601 = cljs.core.chunk_rest.call(null,seq__20589__$1);
var G__20602 = c__10741__auto__;
var G__20603 = cljs.core.count.call(null,c__10741__auto__);
var G__20604 = (0);
seq__20589 = G__20601;
chunk__20590 = G__20602;
count__20591 = G__20603;
i__20592 = G__20604;
continue;
} else {
var map__20595 = cljs.core.first.call(null,seq__20589__$1);
var map__20595__$1 = ((((!((map__20595 == null)))?((((map__20595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20595):map__20595);
var effect = map__20595__$1;
var ms = cljs.core.get.call(null,map__20595__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__20595__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__20589,chunk__20590,count__20591,i__20592,map__20595,map__20595__$1,effect,ms,dispatch,seq__20589__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__20589,chunk__20590,count__20591,i__20592,map__20595,map__20595__$1,effect,ms,dispatch,seq__20589__$1,temp__6738__auto__))
,ms);
}

var G__20605 = cljs.core.next.call(null,seq__20589__$1);
var G__20606 = null;
var G__20607 = (0);
var G__20608 = (0);
seq__20589 = G__20605;
chunk__20590 = G__20606;
count__20591 = G__20607;
i__20592 = G__20608;
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
var seq__20609 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__20610 = null;
var count__20611 = (0);
var i__20612 = (0);
while(true){
if((i__20612 < count__20611)){
var event = cljs.core._nth.call(null,chunk__20610,i__20612);
re_frame.router.dispatch.call(null,event);

var G__20613 = seq__20609;
var G__20614 = chunk__20610;
var G__20615 = count__20611;
var G__20616 = (i__20612 + (1));
seq__20609 = G__20613;
chunk__20610 = G__20614;
count__20611 = G__20615;
i__20612 = G__20616;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__20609);
if(temp__6738__auto__){
var seq__20609__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20609__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__20609__$1);
var G__20617 = cljs.core.chunk_rest.call(null,seq__20609__$1);
var G__20618 = c__10741__auto__;
var G__20619 = cljs.core.count.call(null,c__10741__auto__);
var G__20620 = (0);
seq__20609 = G__20617;
chunk__20610 = G__20618;
count__20611 = G__20619;
i__20612 = G__20620;
continue;
} else {
var event = cljs.core.first.call(null,seq__20609__$1);
re_frame.router.dispatch.call(null,event);

var G__20621 = cljs.core.next.call(null,seq__20609__$1);
var G__20622 = null;
var G__20623 = (0);
var G__20624 = (0);
seq__20609 = G__20621;
chunk__20610 = G__20622;
count__20611 = G__20623;
i__20612 = G__20624;
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
var seq__20625 = cljs.core.seq.call(null,value);
var chunk__20626 = null;
var count__20627 = (0);
var i__20628 = (0);
while(true){
if((i__20628 < count__20627)){
var event = cljs.core._nth.call(null,chunk__20626,i__20628);
clear_event.call(null,event);

var G__20629 = seq__20625;
var G__20630 = chunk__20626;
var G__20631 = count__20627;
var G__20632 = (i__20628 + (1));
seq__20625 = G__20629;
chunk__20626 = G__20630;
count__20627 = G__20631;
i__20628 = G__20632;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__20625);
if(temp__6738__auto__){
var seq__20625__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20625__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__20625__$1);
var G__20633 = cljs.core.chunk_rest.call(null,seq__20625__$1);
var G__20634 = c__10741__auto__;
var G__20635 = cljs.core.count.call(null,c__10741__auto__);
var G__20636 = (0);
seq__20625 = G__20633;
chunk__20626 = G__20634;
count__20627 = G__20635;
i__20628 = G__20636;
continue;
} else {
var event = cljs.core.first.call(null,seq__20625__$1);
clear_event.call(null,event);

var G__20637 = cljs.core.next.call(null,seq__20625__$1);
var G__20638 = null;
var G__20639 = (0);
var G__20640 = (0);
seq__20625 = G__20637;
chunk__20626 = G__20638;
count__20627 = G__20639;
i__20628 = G__20640;
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

//# sourceMappingURL=fx.js.map?rel=1504914131595
