// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__20443_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__20443_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__6738__auto___20444 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6738__auto___20444)){
var not_i_20445 = temp__6738__auto___20444;
if(cljs.core.fn_QMARK_.call(null,not_i_20445)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_20445);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_20445);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__6736__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__6736__auto__)){
var interceptors = temp__6736__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_20446 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_20447 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__20391__auto___20460 = re_frame.interop.now.call(null);
var duration__20392__auto___20461 = (end__20391__auto___20460 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__20448_20462 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__20449_20463 = null;
var count__20450_20464 = (0);
var i__20451_20465 = (0);
while(true){
if((i__20451_20465 < count__20450_20464)){
var vec__20452_20466 = cljs.core._nth.call(null,chunk__20449_20463,i__20451_20465);
var k__20393__auto___20467 = cljs.core.nth.call(null,vec__20452_20466,(0),null);
var cb__20394__auto___20468 = cljs.core.nth.call(null,vec__20452_20466,(1),null);
try{cb__20394__auto___20468.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20392__auto___20461,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e20455){if((e20455 instanceof java.lang.Exception)){
var e__20395__auto___20469 = e20455;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__20393__auto___20467,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__20395__auto___20469);
} else {
throw e20455;

}
}
var G__20470 = seq__20448_20462;
var G__20471 = chunk__20449_20463;
var G__20472 = count__20450_20464;
var G__20473 = (i__20451_20465 + (1));
seq__20448_20462 = G__20470;
chunk__20449_20463 = G__20471;
count__20450_20464 = G__20472;
i__20451_20465 = G__20473;
continue;
} else {
var temp__6738__auto___20474 = cljs.core.seq.call(null,seq__20448_20462);
if(temp__6738__auto___20474){
var seq__20448_20475__$1 = temp__6738__auto___20474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20448_20475__$1)){
var c__10741__auto___20476 = cljs.core.chunk_first.call(null,seq__20448_20475__$1);
var G__20477 = cljs.core.chunk_rest.call(null,seq__20448_20475__$1);
var G__20478 = c__10741__auto___20476;
var G__20479 = cljs.core.count.call(null,c__10741__auto___20476);
var G__20480 = (0);
seq__20448_20462 = G__20477;
chunk__20449_20463 = G__20478;
count__20450_20464 = G__20479;
i__20451_20465 = G__20480;
continue;
} else {
var vec__20456_20481 = cljs.core.first.call(null,seq__20448_20475__$1);
var k__20393__auto___20482 = cljs.core.nth.call(null,vec__20456_20481,(0),null);
var cb__20394__auto___20483 = cljs.core.nth.call(null,vec__20456_20481,(1),null);
try{cb__20394__auto___20483.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20392__auto___20461,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e20459){if((e20459 instanceof java.lang.Exception)){
var e__20395__auto___20484 = e20459;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__20393__auto___20482,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__20395__auto___20484);
} else {
throw e20459;

}
}
var G__20485 = cljs.core.next.call(null,seq__20448_20475__$1);
var G__20486 = null;
var G__20487 = (0);
var G__20488 = (0);
seq__20448_20462 = G__20485;
chunk__20449_20463 = G__20486;
count__20450_20464 = G__20487;
i__20451_20465 = G__20488;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_20447;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_20446;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1505319630849
