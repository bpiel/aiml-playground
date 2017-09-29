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
var make_chain = (function (p1__66339_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__66339_SHARP_));
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

var temp__6738__auto___66340 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6738__auto___66340)){
var not_i_66341 = temp__6738__auto___66340;
if(cljs.core.fn_QMARK_.call(null,not_i_66341)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_66341);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_66341);
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
var _STAR_handling_STAR_66342 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_66343 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66287__auto___66356 = re_frame.interop.now.call(null);
var duration__66288__auto___66357 = (end__66287__auto___66356 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__66344_66358 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__66345_66359 = null;
var count__66346_66360 = (0);
var i__66347_66361 = (0);
while(true){
if((i__66347_66361 < count__66346_66360)){
var vec__66348_66362 = cljs.core._nth.call(null,chunk__66345_66359,i__66347_66361);
var k__66289__auto___66363 = cljs.core.nth.call(null,vec__66348_66362,(0),null);
var cb__66290__auto___66364 = cljs.core.nth.call(null,vec__66348_66362,(1),null);
try{cb__66290__auto___66364.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66288__auto___66357,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e66351){if((e66351 instanceof java.lang.Exception)){
var e__66291__auto___66365 = e66351;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66289__auto___66363,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66291__auto___66365);
} else {
throw e66351;

}
}
var G__66366 = seq__66344_66358;
var G__66367 = chunk__66345_66359;
var G__66368 = count__66346_66360;
var G__66369 = (i__66347_66361 + (1));
seq__66344_66358 = G__66366;
chunk__66345_66359 = G__66367;
count__66346_66360 = G__66368;
i__66347_66361 = G__66369;
continue;
} else {
var temp__6738__auto___66370 = cljs.core.seq.call(null,seq__66344_66358);
if(temp__6738__auto___66370){
var seq__66344_66371__$1 = temp__6738__auto___66370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66344_66371__$1)){
var c__59066__auto___66372 = cljs.core.chunk_first.call(null,seq__66344_66371__$1);
var G__66373 = cljs.core.chunk_rest.call(null,seq__66344_66371__$1);
var G__66374 = c__59066__auto___66372;
var G__66375 = cljs.core.count.call(null,c__59066__auto___66372);
var G__66376 = (0);
seq__66344_66358 = G__66373;
chunk__66345_66359 = G__66374;
count__66346_66360 = G__66375;
i__66347_66361 = G__66376;
continue;
} else {
var vec__66352_66377 = cljs.core.first.call(null,seq__66344_66371__$1);
var k__66289__auto___66378 = cljs.core.nth.call(null,vec__66352_66377,(0),null);
var cb__66290__auto___66379 = cljs.core.nth.call(null,vec__66352_66377,(1),null);
try{cb__66290__auto___66379.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66288__auto___66357,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e66355){if((e66355 instanceof java.lang.Exception)){
var e__66291__auto___66380 = e66355;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66289__auto___66378,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66291__auto___66380);
} else {
throw e66355;

}
}
var G__66381 = cljs.core.next.call(null,seq__66344_66371__$1);
var G__66382 = null;
var G__66383 = (0);
var G__66384 = (0);
seq__66344_66358 = G__66381;
chunk__66345_66359 = G__66382;
count__66346_66360 = G__66383;
i__66347_66361 = G__66384;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_66343;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_66342;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1506641509222
