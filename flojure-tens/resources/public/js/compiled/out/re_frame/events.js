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
var make_chain = (function (p1__72620_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__72620_SHARP_));
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

var temp__6738__auto___72621 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6738__auto___72621)){
var not_i_72622 = temp__6738__auto___72621;
if(cljs.core.fn_QMARK_.call(null,not_i_72622)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_72622);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_72622);
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
var _STAR_handling_STAR_72623 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_72624 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__72568__auto___72637 = re_frame.interop.now.call(null);
var duration__72569__auto___72638 = (end__72568__auto___72637 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__72625_72639 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__72626_72640 = null;
var count__72627_72641 = (0);
var i__72628_72642 = (0);
while(true){
if((i__72628_72642 < count__72627_72641)){
var vec__72629_72643 = cljs.core._nth.call(null,chunk__72626_72640,i__72628_72642);
var k__72570__auto___72644 = cljs.core.nth.call(null,vec__72629_72643,(0),null);
var cb__72571__auto___72645 = cljs.core.nth.call(null,vec__72629_72643,(1),null);
try{cb__72571__auto___72645.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__72569__auto___72638,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e72632){if((e72632 instanceof java.lang.Exception)){
var e__72572__auto___72646 = e72632;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__72570__auto___72644,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__72572__auto___72646);
} else {
throw e72632;

}
}
var G__72647 = seq__72625_72639;
var G__72648 = chunk__72626_72640;
var G__72649 = count__72627_72641;
var G__72650 = (i__72628_72642 + (1));
seq__72625_72639 = G__72647;
chunk__72626_72640 = G__72648;
count__72627_72641 = G__72649;
i__72628_72642 = G__72650;
continue;
} else {
var temp__6738__auto___72651 = cljs.core.seq.call(null,seq__72625_72639);
if(temp__6738__auto___72651){
var seq__72625_72652__$1 = temp__6738__auto___72651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72625_72652__$1)){
var c__65348__auto___72653 = cljs.core.chunk_first.call(null,seq__72625_72652__$1);
var G__72654 = cljs.core.chunk_rest.call(null,seq__72625_72652__$1);
var G__72655 = c__65348__auto___72653;
var G__72656 = cljs.core.count.call(null,c__65348__auto___72653);
var G__72657 = (0);
seq__72625_72639 = G__72654;
chunk__72626_72640 = G__72655;
count__72627_72641 = G__72656;
i__72628_72642 = G__72657;
continue;
} else {
var vec__72633_72658 = cljs.core.first.call(null,seq__72625_72652__$1);
var k__72570__auto___72659 = cljs.core.nth.call(null,vec__72633_72658,(0),null);
var cb__72571__auto___72660 = cljs.core.nth.call(null,vec__72633_72658,(1),null);
try{cb__72571__auto___72660.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__72569__auto___72638,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e72636){if((e72636 instanceof java.lang.Exception)){
var e__72572__auto___72661 = e72636;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__72570__auto___72659,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__72572__auto___72661);
} else {
throw e72636;

}
}
var G__72662 = cljs.core.next.call(null,seq__72625_72652__$1);
var G__72663 = null;
var G__72664 = (0);
var G__72665 = (0);
seq__72625_72639 = G__72662;
chunk__72626_72640 = G__72663;
count__72627_72641 = G__72664;
i__72628_72642 = G__72665;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_72624;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_72623;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1506558346597
