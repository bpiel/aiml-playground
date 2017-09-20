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
var seq__113937 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__113938 = null;
var count__113939 = (0);
var i__113940 = (0);
while(true){
if((i__113940 < count__113939)){
var vec__113941 = cljs.core._nth.call(null,chunk__113938,i__113940);
var effect_key = cljs.core.nth.call(null,vec__113941,(0),null);
var effect_value = cljs.core.nth.call(null,vec__113941,(1),null);
var temp__6736__auto___113947 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___113947)){
var effect_fn_113948 = temp__6736__auto___113947;
effect_fn_113948.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__113949 = seq__113937;
var G__113950 = chunk__113938;
var G__113951 = count__113939;
var G__113952 = (i__113940 + (1));
seq__113937 = G__113949;
chunk__113938 = G__113950;
count__113939 = G__113951;
i__113940 = G__113952;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__113937);
if(temp__6738__auto__){
var seq__113937__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__113937__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__113937__$1);
var G__113953 = cljs.core.chunk_rest.call(null,seq__113937__$1);
var G__113954 = c__59059__auto__;
var G__113955 = cljs.core.count.call(null,c__59059__auto__);
var G__113956 = (0);
seq__113937 = G__113953;
chunk__113938 = G__113954;
count__113939 = G__113955;
i__113940 = G__113956;
continue;
} else {
var vec__113944 = cljs.core.first.call(null,seq__113937__$1);
var effect_key = cljs.core.nth.call(null,vec__113944,(0),null);
var effect_value = cljs.core.nth.call(null,vec__113944,(1),null);
var temp__6736__auto___113957 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___113957)){
var effect_fn_113958 = temp__6736__auto___113957;
effect_fn_113958.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__113959 = cljs.core.next.call(null,seq__113937__$1);
var G__113960 = null;
var G__113961 = (0);
var G__113962 = (0);
seq__113937 = G__113959;
chunk__113938 = G__113960;
count__113939 = G__113961;
i__113940 = G__113962;
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
var seq__113963 = cljs.core.seq.call(null,value);
var chunk__113964 = null;
var count__113965 = (0);
var i__113966 = (0);
while(true){
if((i__113966 < count__113965)){
var map__113967 = cljs.core._nth.call(null,chunk__113964,i__113966);
var map__113967__$1 = ((((!((map__113967 == null)))?((((map__113967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113967):map__113967);
var effect = map__113967__$1;
var ms = cljs.core.get.call(null,map__113967__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__113967__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__113963,chunk__113964,count__113965,i__113966,map__113967,map__113967__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__113963,chunk__113964,count__113965,i__113966,map__113967,map__113967__$1,effect,ms,dispatch))
,ms);
}

var G__113971 = seq__113963;
var G__113972 = chunk__113964;
var G__113973 = count__113965;
var G__113974 = (i__113966 + (1));
seq__113963 = G__113971;
chunk__113964 = G__113972;
count__113965 = G__113973;
i__113966 = G__113974;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__113963);
if(temp__6738__auto__){
var seq__113963__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__113963__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__113963__$1);
var G__113975 = cljs.core.chunk_rest.call(null,seq__113963__$1);
var G__113976 = c__59059__auto__;
var G__113977 = cljs.core.count.call(null,c__59059__auto__);
var G__113978 = (0);
seq__113963 = G__113975;
chunk__113964 = G__113976;
count__113965 = G__113977;
i__113966 = G__113978;
continue;
} else {
var map__113969 = cljs.core.first.call(null,seq__113963__$1);
var map__113969__$1 = ((((!((map__113969 == null)))?((((map__113969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__113969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113969):map__113969);
var effect = map__113969__$1;
var ms = cljs.core.get.call(null,map__113969__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__113969__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__113963,chunk__113964,count__113965,i__113966,map__113969,map__113969__$1,effect,ms,dispatch,seq__113963__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__113963,chunk__113964,count__113965,i__113966,map__113969,map__113969__$1,effect,ms,dispatch,seq__113963__$1,temp__6738__auto__))
,ms);
}

var G__113979 = cljs.core.next.call(null,seq__113963__$1);
var G__113980 = null;
var G__113981 = (0);
var G__113982 = (0);
seq__113963 = G__113979;
chunk__113964 = G__113980;
count__113965 = G__113981;
i__113966 = G__113982;
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
var seq__113983 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__113984 = null;
var count__113985 = (0);
var i__113986 = (0);
while(true){
if((i__113986 < count__113985)){
var event = cljs.core._nth.call(null,chunk__113984,i__113986);
re_frame.router.dispatch.call(null,event);

var G__113987 = seq__113983;
var G__113988 = chunk__113984;
var G__113989 = count__113985;
var G__113990 = (i__113986 + (1));
seq__113983 = G__113987;
chunk__113984 = G__113988;
count__113985 = G__113989;
i__113986 = G__113990;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__113983);
if(temp__6738__auto__){
var seq__113983__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__113983__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__113983__$1);
var G__113991 = cljs.core.chunk_rest.call(null,seq__113983__$1);
var G__113992 = c__59059__auto__;
var G__113993 = cljs.core.count.call(null,c__59059__auto__);
var G__113994 = (0);
seq__113983 = G__113991;
chunk__113984 = G__113992;
count__113985 = G__113993;
i__113986 = G__113994;
continue;
} else {
var event = cljs.core.first.call(null,seq__113983__$1);
re_frame.router.dispatch.call(null,event);

var G__113995 = cljs.core.next.call(null,seq__113983__$1);
var G__113996 = null;
var G__113997 = (0);
var G__113998 = (0);
seq__113983 = G__113995;
chunk__113984 = G__113996;
count__113985 = G__113997;
i__113986 = G__113998;
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
var seq__113999 = cljs.core.seq.call(null,value);
var chunk__114000 = null;
var count__114001 = (0);
var i__114002 = (0);
while(true){
if((i__114002 < count__114001)){
var event = cljs.core._nth.call(null,chunk__114000,i__114002);
clear_event.call(null,event);

var G__114003 = seq__113999;
var G__114004 = chunk__114000;
var G__114005 = count__114001;
var G__114006 = (i__114002 + (1));
seq__113999 = G__114003;
chunk__114000 = G__114004;
count__114001 = G__114005;
i__114002 = G__114006;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__113999);
if(temp__6738__auto__){
var seq__113999__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__113999__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__113999__$1);
var G__114007 = cljs.core.chunk_rest.call(null,seq__113999__$1);
var G__114008 = c__59059__auto__;
var G__114009 = cljs.core.count.call(null,c__59059__auto__);
var G__114010 = (0);
seq__113999 = G__114007;
chunk__114000 = G__114008;
count__114001 = G__114009;
i__114002 = G__114010;
continue;
} else {
var event = cljs.core.first.call(null,seq__113999__$1);
clear_event.call(null,event);

var G__114011 = cljs.core.next.call(null,seq__113999__$1);
var G__114012 = null;
var G__114013 = (0);
var G__114014 = (0);
seq__113999 = G__114011;
chunk__114000 = G__114012;
count__114001 = G__114013;
i__114002 = G__114014;
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

//# sourceMappingURL=fx.js.map?rel=1505927823451
