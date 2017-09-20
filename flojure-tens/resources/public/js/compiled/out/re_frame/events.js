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
var make_chain = (function (p1__113817_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__113817_SHARP_));
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

var temp__6738__auto___113818 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6738__auto___113818)){
var not_i_113819 = temp__6738__auto___113818;
if(cljs.core.fn_QMARK_.call(null,not_i_113819)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_113819);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_113819);
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
var _STAR_handling_STAR_113820 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_113821 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66665__auto___113834 = re_frame.interop.now.call(null);
var duration__66666__auto___113835 = (end__66665__auto___113834 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__113822_113836 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__113823_113837 = null;
var count__113824_113838 = (0);
var i__113825_113839 = (0);
while(true){
if((i__113825_113839 < count__113824_113838)){
var vec__113826_113840 = cljs.core._nth.call(null,chunk__113823_113837,i__113825_113839);
var k__66667__auto___113841 = cljs.core.nth.call(null,vec__113826_113840,(0),null);
var cb__66668__auto___113842 = cljs.core.nth.call(null,vec__113826_113840,(1),null);
try{cb__66668__auto___113842.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___113835,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e113829){if((e113829 instanceof java.lang.Exception)){
var e__66669__auto___113843 = e113829;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___113841,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___113843);
} else {
throw e113829;

}
}
var G__113844 = seq__113822_113836;
var G__113845 = chunk__113823_113837;
var G__113846 = count__113824_113838;
var G__113847 = (i__113825_113839 + (1));
seq__113822_113836 = G__113844;
chunk__113823_113837 = G__113845;
count__113824_113838 = G__113846;
i__113825_113839 = G__113847;
continue;
} else {
var temp__6738__auto___113848 = cljs.core.seq.call(null,seq__113822_113836);
if(temp__6738__auto___113848){
var seq__113822_113849__$1 = temp__6738__auto___113848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__113822_113849__$1)){
var c__59059__auto___113850 = cljs.core.chunk_first.call(null,seq__113822_113849__$1);
var G__113851 = cljs.core.chunk_rest.call(null,seq__113822_113849__$1);
var G__113852 = c__59059__auto___113850;
var G__113853 = cljs.core.count.call(null,c__59059__auto___113850);
var G__113854 = (0);
seq__113822_113836 = G__113851;
chunk__113823_113837 = G__113852;
count__113824_113838 = G__113853;
i__113825_113839 = G__113854;
continue;
} else {
var vec__113830_113855 = cljs.core.first.call(null,seq__113822_113849__$1);
var k__66667__auto___113856 = cljs.core.nth.call(null,vec__113830_113855,(0),null);
var cb__66668__auto___113857 = cljs.core.nth.call(null,vec__113830_113855,(1),null);
try{cb__66668__auto___113857.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___113835,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e113833){if((e113833 instanceof java.lang.Exception)){
var e__66669__auto___113858 = e113833;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___113856,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___113858);
} else {
throw e113833;

}
}
var G__113859 = cljs.core.next.call(null,seq__113822_113849__$1);
var G__113860 = null;
var G__113861 = (0);
var G__113862 = (0);
seq__113822_113836 = G__113859;
chunk__113823_113837 = G__113860;
count__113824_113838 = G__113861;
i__113825_113839 = G__113862;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_113821;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_113820;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1505927823192
