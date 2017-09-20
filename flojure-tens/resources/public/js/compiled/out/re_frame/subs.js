// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__114064_114074 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__114065_114075 = null;
var count__114066_114076 = (0);
var i__114067_114077 = (0);
while(true){
if((i__114067_114077 < count__114066_114076)){
var vec__114068_114078 = cljs.core._nth.call(null,chunk__114065_114075,i__114067_114077);
var k_114079 = cljs.core.nth.call(null,vec__114068_114078,(0),null);
var rxn_114080 = cljs.core.nth.call(null,vec__114068_114078,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_114080);

var G__114081 = seq__114064_114074;
var G__114082 = chunk__114065_114075;
var G__114083 = count__114066_114076;
var G__114084 = (i__114067_114077 + (1));
seq__114064_114074 = G__114081;
chunk__114065_114075 = G__114082;
count__114066_114076 = G__114083;
i__114067_114077 = G__114084;
continue;
} else {
var temp__6738__auto___114085 = cljs.core.seq.call(null,seq__114064_114074);
if(temp__6738__auto___114085){
var seq__114064_114086__$1 = temp__6738__auto___114085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114064_114086__$1)){
var c__59059__auto___114087 = cljs.core.chunk_first.call(null,seq__114064_114086__$1);
var G__114088 = cljs.core.chunk_rest.call(null,seq__114064_114086__$1);
var G__114089 = c__59059__auto___114087;
var G__114090 = cljs.core.count.call(null,c__59059__auto___114087);
var G__114091 = (0);
seq__114064_114074 = G__114088;
chunk__114065_114075 = G__114089;
count__114066_114076 = G__114090;
i__114067_114077 = G__114091;
continue;
} else {
var vec__114071_114092 = cljs.core.first.call(null,seq__114064_114086__$1);
var k_114093 = cljs.core.nth.call(null,vec__114071_114092,(0),null);
var rxn_114094 = cljs.core.nth.call(null,vec__114071_114092,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_114094);

var G__114095 = cljs.core.next.call(null,seq__114064_114086__$1);
var G__114096 = null;
var G__114097 = (0);
var G__114098 = (0);
seq__114064_114074 = G__114095;
chunk__114065_114075 = G__114096;
count__114066_114076 = G__114097;
i__114067_114077 = G__114098;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_114099 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66665__auto___114112 = re_frame.interop.now.call(null);
var duration__66666__auto___114113 = (end__66665__auto___114112 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114100_114114 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114101_114115 = null;
var count__114102_114116 = (0);
var i__114103_114117 = (0);
while(true){
if((i__114103_114117 < count__114102_114116)){
var vec__114104_114118 = cljs.core._nth.call(null,chunk__114101_114115,i__114103_114117);
var k__66667__auto___114119 = cljs.core.nth.call(null,vec__114104_114118,(0),null);
var cb__66668__auto___114120 = cljs.core.nth.call(null,vec__114104_114118,(1),null);
try{cb__66668__auto___114120.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114113,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114107){if((e114107 instanceof java.lang.Exception)){
var e__66669__auto___114121 = e114107;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114119,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114121);
} else {
throw e114107;

}
}
var G__114122 = seq__114100_114114;
var G__114123 = chunk__114101_114115;
var G__114124 = count__114102_114116;
var G__114125 = (i__114103_114117 + (1));
seq__114100_114114 = G__114122;
chunk__114101_114115 = G__114123;
count__114102_114116 = G__114124;
i__114103_114117 = G__114125;
continue;
} else {
var temp__6738__auto___114126 = cljs.core.seq.call(null,seq__114100_114114);
if(temp__6738__auto___114126){
var seq__114100_114127__$1 = temp__6738__auto___114126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114100_114127__$1)){
var c__59059__auto___114128 = cljs.core.chunk_first.call(null,seq__114100_114127__$1);
var G__114129 = cljs.core.chunk_rest.call(null,seq__114100_114127__$1);
var G__114130 = c__59059__auto___114128;
var G__114131 = cljs.core.count.call(null,c__59059__auto___114128);
var G__114132 = (0);
seq__114100_114114 = G__114129;
chunk__114101_114115 = G__114130;
count__114102_114116 = G__114131;
i__114103_114117 = G__114132;
continue;
} else {
var vec__114108_114133 = cljs.core.first.call(null,seq__114100_114127__$1);
var k__66667__auto___114134 = cljs.core.nth.call(null,vec__114108_114133,(0),null);
var cb__66668__auto___114135 = cljs.core.nth.call(null,vec__114108_114133,(1),null);
try{cb__66668__auto___114135.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114113,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114111){if((e114111 instanceof java.lang.Exception)){
var e__66669__auto___114136 = e114111;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114134,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114136);
} else {
throw e114111;

}
}
var G__114137 = cljs.core.next.call(null,seq__114100_114127__$1);
var G__114138 = null;
var G__114139 = (0);
var G__114140 = (0);
seq__114100_114114 = G__114137;
chunk__114101_114115 = G__114138;
count__114102_114116 = G__114139;
i__114103_114117 = G__114140;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114099;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114141 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114141;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__114143 = arguments.length;
switch (G__114143) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__114146 = arguments.length;
switch (G__114146) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_114147 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__6736__auto__ = re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__6736__auto__)){
var cached = temp__6736__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114174 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114174;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114175 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114175;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114176 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114176;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66665__auto___114177 = re_frame.interop.now.call(null);
var duration__66666__auto___114178 = (end__66665__auto___114177 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114148_114179 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114149_114180 = null;
var count__114150_114181 = (0);
var i__114151_114182 = (0);
while(true){
if((i__114151_114182 < count__114150_114181)){
var vec__114152_114183 = cljs.core._nth.call(null,chunk__114149_114180,i__114151_114182);
var k__66667__auto___114184 = cljs.core.nth.call(null,vec__114152_114183,(0),null);
var cb__66668__auto___114185 = cljs.core.nth.call(null,vec__114152_114183,(1),null);
try{cb__66668__auto___114185.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114178,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114155){if((e114155 instanceof java.lang.Exception)){
var e__66669__auto___114186 = e114155;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114184,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114186);
} else {
throw e114155;

}
}
var G__114187 = seq__114148_114179;
var G__114188 = chunk__114149_114180;
var G__114189 = count__114150_114181;
var G__114190 = (i__114151_114182 + (1));
seq__114148_114179 = G__114187;
chunk__114149_114180 = G__114188;
count__114150_114181 = G__114189;
i__114151_114182 = G__114190;
continue;
} else {
var temp__6738__auto___114191 = cljs.core.seq.call(null,seq__114148_114179);
if(temp__6738__auto___114191){
var seq__114148_114192__$1 = temp__6738__auto___114191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114148_114192__$1)){
var c__59059__auto___114193 = cljs.core.chunk_first.call(null,seq__114148_114192__$1);
var G__114194 = cljs.core.chunk_rest.call(null,seq__114148_114192__$1);
var G__114195 = c__59059__auto___114193;
var G__114196 = cljs.core.count.call(null,c__59059__auto___114193);
var G__114197 = (0);
seq__114148_114179 = G__114194;
chunk__114149_114180 = G__114195;
count__114150_114181 = G__114196;
i__114151_114182 = G__114197;
continue;
} else {
var vec__114156_114198 = cljs.core.first.call(null,seq__114148_114192__$1);
var k__66667__auto___114199 = cljs.core.nth.call(null,vec__114156_114198,(0),null);
var cb__66668__auto___114200 = cljs.core.nth.call(null,vec__114156_114198,(1),null);
try{cb__66668__auto___114200.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114178,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114159){if((e114159 instanceof java.lang.Exception)){
var e__66669__auto___114201 = e114159;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114199,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114201);
} else {
throw e114159;

}
}
var G__114202 = cljs.core.next.call(null,seq__114148_114192__$1);
var G__114203 = null;
var G__114204 = (0);
var G__114205 = (0);
seq__114148_114179 = G__114202;
chunk__114149_114180 = G__114203;
count__114150_114181 = G__114204;
i__114151_114182 = G__114205;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114147;
}} else {
var temp__6736__auto__ = re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__6736__auto__)){
var cached = temp__6736__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114206 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114206;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114207 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114207;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114208 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114208;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_114160 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__6736__auto__ = re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__6736__auto__)){
var cached = temp__6736__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114209 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114209;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114210 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114210;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6738__auto___114211 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6738__auto___114211)){
var not_reactive_114212 = temp__6738__auto___114211;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_114212);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114213 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114213;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__6736__auto__,_STAR_current_trace_STAR_114160){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__6736__auto__,_STAR_current_trace_STAR_114160))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__6736__auto__,_STAR_current_trace_STAR_114160){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__6736__auto__,_STAR_current_trace_STAR_114160))
);
return re_frame.subs.cache_and_return.call(null,query,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__6736__auto__,_STAR_current_trace_STAR_114160){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__6736__auto__,_STAR_current_trace_STAR_114160))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66665__auto___114214 = re_frame.interop.now.call(null);
var duration__66666__auto___114215 = (end__66665__auto___114214 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114161_114216 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114162_114217 = null;
var count__114163_114218 = (0);
var i__114164_114219 = (0);
while(true){
if((i__114164_114219 < count__114163_114218)){
var vec__114165_114220 = cljs.core._nth.call(null,chunk__114162_114217,i__114164_114219);
var k__66667__auto___114221 = cljs.core.nth.call(null,vec__114165_114220,(0),null);
var cb__66668__auto___114222 = cljs.core.nth.call(null,vec__114165_114220,(1),null);
try{cb__66668__auto___114222.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114215,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114168){if((e114168 instanceof java.lang.Exception)){
var e__66669__auto___114223 = e114168;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114221,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114223);
} else {
throw e114168;

}
}
var G__114224 = seq__114161_114216;
var G__114225 = chunk__114162_114217;
var G__114226 = count__114163_114218;
var G__114227 = (i__114164_114219 + (1));
seq__114161_114216 = G__114224;
chunk__114162_114217 = G__114225;
count__114163_114218 = G__114226;
i__114164_114219 = G__114227;
continue;
} else {
var temp__6738__auto___114228 = cljs.core.seq.call(null,seq__114161_114216);
if(temp__6738__auto___114228){
var seq__114161_114229__$1 = temp__6738__auto___114228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114161_114229__$1)){
var c__59059__auto___114230 = cljs.core.chunk_first.call(null,seq__114161_114229__$1);
var G__114231 = cljs.core.chunk_rest.call(null,seq__114161_114229__$1);
var G__114232 = c__59059__auto___114230;
var G__114233 = cljs.core.count.call(null,c__59059__auto___114230);
var G__114234 = (0);
seq__114161_114216 = G__114231;
chunk__114162_114217 = G__114232;
count__114163_114218 = G__114233;
i__114164_114219 = G__114234;
continue;
} else {
var vec__114169_114235 = cljs.core.first.call(null,seq__114161_114229__$1);
var k__66667__auto___114236 = cljs.core.nth.call(null,vec__114169_114235,(0),null);
var cb__66668__auto___114237 = cljs.core.nth.call(null,vec__114169_114235,(1),null);
try{cb__66668__auto___114237.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114215,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114172){if((e114172 instanceof java.lang.Exception)){
var e__66669__auto___114238 = e114172;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114236,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114238);
} else {
throw e114172;

}
}
var G__114239 = cljs.core.next.call(null,seq__114161_114229__$1);
var G__114240 = null;
var G__114241 = (0);
var G__114242 = (0);
seq__114161_114216 = G__114239;
chunk__114162_114217 = G__114240;
count__114163_114218 = G__114241;
i__114164_114219 = G__114242;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114160;
}} else {
var temp__6736__auto__ = re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__6736__auto__)){
var cached = temp__6736__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114243 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114243;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114244 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114244;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6738__auto___114245 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6738__auto___114245)){
var not_reactive_114246 = temp__6738__auto___114245;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_114246);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114247 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114247;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__6736__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__6736__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__6736__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__6736__auto__))
);
return re_frame.subs.cache_and_return.call(null,query,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__6736__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__6736__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__114248){
var vec__114249 = p__114248;
var k = cljs.core.nth.call(null,vec__114249,(0),null);
var v = cljs.core.nth.call(null,vec__114249,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__66670__auto___114252 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__66670__auto___114252;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__59412__auto__ = [];
var len__59405__auto___114285 = arguments.length;
var i__59406__auto___114286 = (0);
while(true){
if((i__59406__auto___114286 < len__59405__auto___114285)){
args__59412__auto__.push((arguments[i__59406__auto___114286]));

var G__114287 = (i__59406__auto___114286 + (1));
i__59406__auto___114286 = G__114287;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((1) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59413__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__114255 = cljs.core.count.call(null,input_args);
switch (G__114255) {
case (0):
return ((function (G__114255,computation_fn,input_args,err_header){
return (function() {
var G__114289 = null;
var G__114289__1 = (function (_){
return re_frame.db.app_db;
});
var G__114289__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__114289 = function(_,___$1){
switch(arguments.length){
case 1:
return G__114289__1.call(this,_);
case 2:
return G__114289__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__114289.cljs$core$IFn$_invoke$arity$1 = G__114289__1;
G__114289.cljs$core$IFn$_invoke$arity$2 = G__114289__2;
return G__114289;
})()
;})(G__114255,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__114256 = input_args;
var marker = cljs.core.nth.call(null,vec__114256,(0),null);
var vec = cljs.core.nth.call(null,vec__114256,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__114256,marker,vec,G__114255,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__114256,marker,vec,G__114255,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__114255,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__114255,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_114259 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66665__auto___114290 = re_frame.interop.now.call(null);
var duration__66666__auto___114291 = (end__66665__auto___114290 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114260_114292 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114261_114293 = null;
var count__114262_114294 = (0);
var i__114263_114295 = (0);
while(true){
if((i__114263_114295 < count__114262_114294)){
var vec__114264_114296 = cljs.core._nth.call(null,chunk__114261_114293,i__114263_114295);
var k__66667__auto___114297 = cljs.core.nth.call(null,vec__114264_114296,(0),null);
var cb__66668__auto___114298 = cljs.core.nth.call(null,vec__114264_114296,(1),null);
try{cb__66668__auto___114298.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114291,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114267){if((e114267 instanceof java.lang.Exception)){
var e__66669__auto___114299 = e114267;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114297,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114299);
} else {
throw e114267;

}
}
var G__114300 = seq__114260_114292;
var G__114301 = chunk__114261_114293;
var G__114302 = count__114262_114294;
var G__114303 = (i__114263_114295 + (1));
seq__114260_114292 = G__114300;
chunk__114261_114293 = G__114301;
count__114262_114294 = G__114302;
i__114263_114295 = G__114303;
continue;
} else {
var temp__6738__auto___114304 = cljs.core.seq.call(null,seq__114260_114292);
if(temp__6738__auto___114304){
var seq__114260_114305__$1 = temp__6738__auto___114304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114260_114305__$1)){
var c__59059__auto___114306 = cljs.core.chunk_first.call(null,seq__114260_114305__$1);
var G__114307 = cljs.core.chunk_rest.call(null,seq__114260_114305__$1);
var G__114308 = c__59059__auto___114306;
var G__114309 = cljs.core.count.call(null,c__59059__auto___114306);
var G__114310 = (0);
seq__114260_114292 = G__114307;
chunk__114261_114293 = G__114308;
count__114262_114294 = G__114309;
i__114263_114295 = G__114310;
continue;
} else {
var vec__114268_114311 = cljs.core.first.call(null,seq__114260_114305__$1);
var k__66667__auto___114312 = cljs.core.nth.call(null,vec__114268_114311,(0),null);
var cb__66668__auto___114313 = cljs.core.nth.call(null,vec__114268_114311,(1),null);
try{cb__66668__auto___114313.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114291,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114271){if((e114271 instanceof java.lang.Exception)){
var e__66669__auto___114314 = e114271;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114312,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114314);
} else {
throw e114271;

}
}
var G__114315 = cljs.core.next.call(null,seq__114260_114305__$1);
var G__114316 = null;
var G__114317 = (0);
var G__114318 = (0);
seq__114260_114292 = G__114315;
chunk__114261_114293 = G__114316;
count__114262_114294 = G__114317;
i__114263_114295 = G__114318;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114259;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_114272 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__66665__auto___114319 = re_frame.interop.now.call(null);
var duration__66666__auto___114320 = (end__66665__auto___114319 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114273_114321 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114274_114322 = null;
var count__114275_114323 = (0);
var i__114276_114324 = (0);
while(true){
if((i__114276_114324 < count__114275_114323)){
var vec__114277_114325 = cljs.core._nth.call(null,chunk__114274_114322,i__114276_114324);
var k__66667__auto___114326 = cljs.core.nth.call(null,vec__114277_114325,(0),null);
var cb__66668__auto___114327 = cljs.core.nth.call(null,vec__114277_114325,(1),null);
try{cb__66668__auto___114327.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114320,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114280){if((e114280 instanceof java.lang.Exception)){
var e__66669__auto___114328 = e114280;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114326,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114328);
} else {
throw e114280;

}
}
var G__114329 = seq__114273_114321;
var G__114330 = chunk__114274_114322;
var G__114331 = count__114275_114323;
var G__114332 = (i__114276_114324 + (1));
seq__114273_114321 = G__114329;
chunk__114274_114322 = G__114330;
count__114275_114323 = G__114331;
i__114276_114324 = G__114332;
continue;
} else {
var temp__6738__auto___114333 = cljs.core.seq.call(null,seq__114273_114321);
if(temp__6738__auto___114333){
var seq__114273_114334__$1 = temp__6738__auto___114333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114273_114334__$1)){
var c__59059__auto___114335 = cljs.core.chunk_first.call(null,seq__114273_114334__$1);
var G__114336 = cljs.core.chunk_rest.call(null,seq__114273_114334__$1);
var G__114337 = c__59059__auto___114335;
var G__114338 = cljs.core.count.call(null,c__59059__auto___114335);
var G__114339 = (0);
seq__114273_114321 = G__114336;
chunk__114274_114322 = G__114337;
count__114275_114323 = G__114338;
i__114276_114324 = G__114339;
continue;
} else {
var vec__114281_114340 = cljs.core.first.call(null,seq__114273_114334__$1);
var k__66667__auto___114341 = cljs.core.nth.call(null,vec__114281_114340,(0),null);
var cb__66668__auto___114342 = cljs.core.nth.call(null,vec__114281_114340,(1),null);
try{cb__66668__auto___114342.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66666__auto___114320,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114284){if((e114284 instanceof java.lang.Exception)){
var e__66669__auto___114343 = e114284;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__66667__auto___114341,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__66669__auto___114343);
} else {
throw e114284;

}
}
var G__114344 = cljs.core.next.call(null,seq__114273_114334__$1);
var G__114345 = null;
var G__114346 = (0);
var G__114347 = (0);
seq__114273_114321 = G__114344;
chunk__114274_114322 = G__114345;
count__114275_114323 = G__114346;
i__114276_114324 = G__114347;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114272;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq114253){
var G__114254 = cljs.core.first.call(null,seq114253);
var seq114253__$1 = cljs.core.next.call(null,seq114253);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__114254,seq114253__$1);
});


//# sourceMappingURL=subs.js.map?rel=1505927823899
