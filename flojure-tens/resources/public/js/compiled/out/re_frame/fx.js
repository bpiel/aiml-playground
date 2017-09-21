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
var seq__17926 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__17927 = null;
var count__17928 = (0);
var i__17929 = (0);
while(true){
if((i__17929 < count__17928)){
var vec__17930 = cljs.core._nth.call(null,chunk__17927,i__17929);
var effect_key = cljs.core.nth.call(null,vec__17930,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17930,(1),null);
var temp__6736__auto___17936 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___17936)){
var effect_fn_17937 = temp__6736__auto___17936;
effect_fn_17937.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__17938 = seq__17926;
var G__17939 = chunk__17927;
var G__17940 = count__17928;
var G__17941 = (i__17929 + (1));
seq__17926 = G__17938;
chunk__17927 = G__17939;
count__17928 = G__17940;
i__17929 = G__17941;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__17926);
if(temp__6738__auto__){
var seq__17926__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17926__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__17926__$1);
var G__17942 = cljs.core.chunk_rest.call(null,seq__17926__$1);
var G__17943 = c__10741__auto__;
var G__17944 = cljs.core.count.call(null,c__10741__auto__);
var G__17945 = (0);
seq__17926 = G__17942;
chunk__17927 = G__17943;
count__17928 = G__17944;
i__17929 = G__17945;
continue;
} else {
var vec__17933 = cljs.core.first.call(null,seq__17926__$1);
var effect_key = cljs.core.nth.call(null,vec__17933,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17933,(1),null);
var temp__6736__auto___17946 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___17946)){
var effect_fn_17947 = temp__6736__auto___17946;
effect_fn_17947.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__17948 = cljs.core.next.call(null,seq__17926__$1);
var G__17949 = null;
var G__17950 = (0);
var G__17951 = (0);
seq__17926 = G__17948;
chunk__17927 = G__17949;
count__17928 = G__17950;
i__17929 = G__17951;
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
var seq__17952 = cljs.core.seq.call(null,value);
var chunk__17953 = null;
var count__17954 = (0);
var i__17955 = (0);
while(true){
if((i__17955 < count__17954)){
var map__17956 = cljs.core._nth.call(null,chunk__17953,i__17955);
var map__17956__$1 = ((((!((map__17956 == null)))?((((map__17956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17956):map__17956);
var effect = map__17956__$1;
var ms = cljs.core.get.call(null,map__17956__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__17956__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__17952,chunk__17953,count__17954,i__17955,map__17956,map__17956__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__17952,chunk__17953,count__17954,i__17955,map__17956,map__17956__$1,effect,ms,dispatch))
,ms);
}

var G__17960 = seq__17952;
var G__17961 = chunk__17953;
var G__17962 = count__17954;
var G__17963 = (i__17955 + (1));
seq__17952 = G__17960;
chunk__17953 = G__17961;
count__17954 = G__17962;
i__17955 = G__17963;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__17952);
if(temp__6738__auto__){
var seq__17952__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17952__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__17952__$1);
var G__17964 = cljs.core.chunk_rest.call(null,seq__17952__$1);
var G__17965 = c__10741__auto__;
var G__17966 = cljs.core.count.call(null,c__10741__auto__);
var G__17967 = (0);
seq__17952 = G__17964;
chunk__17953 = G__17965;
count__17954 = G__17966;
i__17955 = G__17967;
continue;
} else {
var map__17958 = cljs.core.first.call(null,seq__17952__$1);
var map__17958__$1 = ((((!((map__17958 == null)))?((((map__17958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17958):map__17958);
var effect = map__17958__$1;
var ms = cljs.core.get.call(null,map__17958__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__17958__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__17952,chunk__17953,count__17954,i__17955,map__17958,map__17958__$1,effect,ms,dispatch,seq__17952__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__17952,chunk__17953,count__17954,i__17955,map__17958,map__17958__$1,effect,ms,dispatch,seq__17952__$1,temp__6738__auto__))
,ms);
}

var G__17968 = cljs.core.next.call(null,seq__17952__$1);
var G__17969 = null;
var G__17970 = (0);
var G__17971 = (0);
seq__17952 = G__17968;
chunk__17953 = G__17969;
count__17954 = G__17970;
i__17955 = G__17971;
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
var seq__17972 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__17973 = null;
var count__17974 = (0);
var i__17975 = (0);
while(true){
if((i__17975 < count__17974)){
var event = cljs.core._nth.call(null,chunk__17973,i__17975);
re_frame.router.dispatch.call(null,event);

var G__17976 = seq__17972;
var G__17977 = chunk__17973;
var G__17978 = count__17974;
var G__17979 = (i__17975 + (1));
seq__17972 = G__17976;
chunk__17973 = G__17977;
count__17974 = G__17978;
i__17975 = G__17979;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__17972);
if(temp__6738__auto__){
var seq__17972__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17972__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__17972__$1);
var G__17980 = cljs.core.chunk_rest.call(null,seq__17972__$1);
var G__17981 = c__10741__auto__;
var G__17982 = cljs.core.count.call(null,c__10741__auto__);
var G__17983 = (0);
seq__17972 = G__17980;
chunk__17973 = G__17981;
count__17974 = G__17982;
i__17975 = G__17983;
continue;
} else {
var event = cljs.core.first.call(null,seq__17972__$1);
re_frame.router.dispatch.call(null,event);

var G__17984 = cljs.core.next.call(null,seq__17972__$1);
var G__17985 = null;
var G__17986 = (0);
var G__17987 = (0);
seq__17972 = G__17984;
chunk__17973 = G__17985;
count__17974 = G__17986;
i__17975 = G__17987;
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
var seq__17988 = cljs.core.seq.call(null,value);
var chunk__17989 = null;
var count__17990 = (0);
var i__17991 = (0);
while(true){
if((i__17991 < count__17990)){
var event = cljs.core._nth.call(null,chunk__17989,i__17991);
clear_event.call(null,event);

var G__17992 = seq__17988;
var G__17993 = chunk__17989;
var G__17994 = count__17990;
var G__17995 = (i__17991 + (1));
seq__17988 = G__17992;
chunk__17989 = G__17993;
count__17990 = G__17994;
i__17991 = G__17995;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__17988);
if(temp__6738__auto__){
var seq__17988__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17988__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__17988__$1);
var G__17996 = cljs.core.chunk_rest.call(null,seq__17988__$1);
var G__17997 = c__10741__auto__;
var G__17998 = cljs.core.count.call(null,c__10741__auto__);
var G__17999 = (0);
seq__17988 = G__17996;
chunk__17989 = G__17997;
count__17990 = G__17998;
i__17991 = G__17999;
continue;
} else {
var event = cljs.core.first.call(null,seq__17988__$1);
clear_event.call(null,event);

var G__18000 = cljs.core.next.call(null,seq__17988__$1);
var G__18001 = null;
var G__18002 = (0);
var G__18003 = (0);
seq__17988 = G__18000;
chunk__17989 = G__18001;
count__17990 = G__18002;
i__17991 = G__18003;
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

//# sourceMappingURL=fx.js.map?rel=1506007555039
