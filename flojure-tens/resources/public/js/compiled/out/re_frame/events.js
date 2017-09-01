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
var make_chain = (function (p1__23306_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__23306_SHARP_));
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

var temp__6738__auto___23307 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6738__auto___23307)){
var not_i_23308 = temp__6738__auto___23307;
if(cljs.core.fn_QMARK_.call(null,not_i_23308)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_23308);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_23308);
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
var _STAR_handling_STAR_23309 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_23310 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__23254__auto___23323 = re_frame.interop.now.call(null);
var duration__23255__auto___23324 = (end__23254__auto___23323 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23311_23325 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__23312_23326 = null;
var count__23313_23327 = (0);
var i__23314_23328 = (0);
while(true){
if((i__23314_23328 < count__23313_23327)){
var vec__23315_23329 = cljs.core._nth.call(null,chunk__23312_23326,i__23314_23328);
var k__23256__auto___23330 = cljs.core.nth.call(null,vec__23315_23329,(0),null);
var cb__23257__auto___23331 = cljs.core.nth.call(null,vec__23315_23329,(1),null);
try{cb__23257__auto___23331.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23255__auto___23324,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e23318){if((e23318 instanceof java.lang.Exception)){
var e__23258__auto___23332 = e23318;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__23256__auto___23330,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__23258__auto___23332);
} else {
throw e23318;

}
}
var G__23333 = seq__23311_23325;
var G__23334 = chunk__23312_23326;
var G__23335 = count__23313_23327;
var G__23336 = (i__23314_23328 + (1));
seq__23311_23325 = G__23333;
chunk__23312_23326 = G__23334;
count__23313_23327 = G__23335;
i__23314_23328 = G__23336;
continue;
} else {
var temp__6738__auto___23337 = cljs.core.seq.call(null,seq__23311_23325);
if(temp__6738__auto___23337){
var seq__23311_23338__$1 = temp__6738__auto___23337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23311_23338__$1)){
var c__10741__auto___23339 = cljs.core.chunk_first.call(null,seq__23311_23338__$1);
var G__23340 = cljs.core.chunk_rest.call(null,seq__23311_23338__$1);
var G__23341 = c__10741__auto___23339;
var G__23342 = cljs.core.count.call(null,c__10741__auto___23339);
var G__23343 = (0);
seq__23311_23325 = G__23340;
chunk__23312_23326 = G__23341;
count__23313_23327 = G__23342;
i__23314_23328 = G__23343;
continue;
} else {
var vec__23319_23344 = cljs.core.first.call(null,seq__23311_23338__$1);
var k__23256__auto___23345 = cljs.core.nth.call(null,vec__23319_23344,(0),null);
var cb__23257__auto___23346 = cljs.core.nth.call(null,vec__23319_23344,(1),null);
try{cb__23257__auto___23346.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23255__auto___23324,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e23322){if((e23322 instanceof java.lang.Exception)){
var e__23258__auto___23347 = e23322;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__23256__auto___23345,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__23258__auto___23347);
} else {
throw e23322;

}
}
var G__23348 = cljs.core.next.call(null,seq__23311_23338__$1);
var G__23349 = null;
var G__23350 = (0);
var G__23351 = (0);
seq__23311_23325 = G__23348;
chunk__23312_23326 = G__23349;
count__23313_23327 = G__23350;
i__23314_23328 = G__23351;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23310;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_23309;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1504285964756
