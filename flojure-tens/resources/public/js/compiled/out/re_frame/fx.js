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
var seq__68220 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__68221 = null;
var count__68222 = (0);
var i__68223 = (0);
while(true){
if((i__68223 < count__68222)){
var vec__68224 = cljs.core._nth.call(null,chunk__68221,i__68223);
var effect_key = cljs.core.nth.call(null,vec__68224,(0),null);
var effect_value = cljs.core.nth.call(null,vec__68224,(1),null);
var temp__6736__auto___68230 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___68230)){
var effect_fn_68231 = temp__6736__auto___68230;
effect_fn_68231.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__68232 = seq__68220;
var G__68233 = chunk__68221;
var G__68234 = count__68222;
var G__68235 = (i__68223 + (1));
seq__68220 = G__68232;
chunk__68221 = G__68233;
count__68222 = G__68234;
i__68223 = G__68235;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__68220);
if(temp__6738__auto__){
var seq__68220__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68220__$1)){
var c__59092__auto__ = cljs.core.chunk_first.call(null,seq__68220__$1);
var G__68236 = cljs.core.chunk_rest.call(null,seq__68220__$1);
var G__68237 = c__59092__auto__;
var G__68238 = cljs.core.count.call(null,c__59092__auto__);
var G__68239 = (0);
seq__68220 = G__68236;
chunk__68221 = G__68237;
count__68222 = G__68238;
i__68223 = G__68239;
continue;
} else {
var vec__68227 = cljs.core.first.call(null,seq__68220__$1);
var effect_key = cljs.core.nth.call(null,vec__68227,(0),null);
var effect_value = cljs.core.nth.call(null,vec__68227,(1),null);
var temp__6736__auto___68240 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___68240)){
var effect_fn_68241 = temp__6736__auto___68240;
effect_fn_68241.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__68242 = cljs.core.next.call(null,seq__68220__$1);
var G__68243 = null;
var G__68244 = (0);
var G__68245 = (0);
seq__68220 = G__68242;
chunk__68221 = G__68243;
count__68222 = G__68244;
i__68223 = G__68245;
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
var seq__68246 = cljs.core.seq.call(null,value);
var chunk__68247 = null;
var count__68248 = (0);
var i__68249 = (0);
while(true){
if((i__68249 < count__68248)){
var map__68250 = cljs.core._nth.call(null,chunk__68247,i__68249);
var map__68250__$1 = ((((!((map__68250 == null)))?((((map__68250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68250):map__68250);
var effect = map__68250__$1;
var ms = cljs.core.get.call(null,map__68250__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__68250__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__68246,chunk__68247,count__68248,i__68249,map__68250,map__68250__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__68246,chunk__68247,count__68248,i__68249,map__68250,map__68250__$1,effect,ms,dispatch))
,ms);
}

var G__68254 = seq__68246;
var G__68255 = chunk__68247;
var G__68256 = count__68248;
var G__68257 = (i__68249 + (1));
seq__68246 = G__68254;
chunk__68247 = G__68255;
count__68248 = G__68256;
i__68249 = G__68257;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__68246);
if(temp__6738__auto__){
var seq__68246__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68246__$1)){
var c__59092__auto__ = cljs.core.chunk_first.call(null,seq__68246__$1);
var G__68258 = cljs.core.chunk_rest.call(null,seq__68246__$1);
var G__68259 = c__59092__auto__;
var G__68260 = cljs.core.count.call(null,c__59092__auto__);
var G__68261 = (0);
seq__68246 = G__68258;
chunk__68247 = G__68259;
count__68248 = G__68260;
i__68249 = G__68261;
continue;
} else {
var map__68252 = cljs.core.first.call(null,seq__68246__$1);
var map__68252__$1 = ((((!((map__68252 == null)))?((((map__68252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68252):map__68252);
var effect = map__68252__$1;
var ms = cljs.core.get.call(null,map__68252__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__68252__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__68246,chunk__68247,count__68248,i__68249,map__68252,map__68252__$1,effect,ms,dispatch,seq__68246__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__68246,chunk__68247,count__68248,i__68249,map__68252,map__68252__$1,effect,ms,dispatch,seq__68246__$1,temp__6738__auto__))
,ms);
}

var G__68262 = cljs.core.next.call(null,seq__68246__$1);
var G__68263 = null;
var G__68264 = (0);
var G__68265 = (0);
seq__68246 = G__68262;
chunk__68247 = G__68263;
count__68248 = G__68264;
i__68249 = G__68265;
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
var seq__68266 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__68267 = null;
var count__68268 = (0);
var i__68269 = (0);
while(true){
if((i__68269 < count__68268)){
var event = cljs.core._nth.call(null,chunk__68267,i__68269);
re_frame.router.dispatch.call(null,event);

var G__68270 = seq__68266;
var G__68271 = chunk__68267;
var G__68272 = count__68268;
var G__68273 = (i__68269 + (1));
seq__68266 = G__68270;
chunk__68267 = G__68271;
count__68268 = G__68272;
i__68269 = G__68273;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__68266);
if(temp__6738__auto__){
var seq__68266__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68266__$1)){
var c__59092__auto__ = cljs.core.chunk_first.call(null,seq__68266__$1);
var G__68274 = cljs.core.chunk_rest.call(null,seq__68266__$1);
var G__68275 = c__59092__auto__;
var G__68276 = cljs.core.count.call(null,c__59092__auto__);
var G__68277 = (0);
seq__68266 = G__68274;
chunk__68267 = G__68275;
count__68268 = G__68276;
i__68269 = G__68277;
continue;
} else {
var event = cljs.core.first.call(null,seq__68266__$1);
re_frame.router.dispatch.call(null,event);

var G__68278 = cljs.core.next.call(null,seq__68266__$1);
var G__68279 = null;
var G__68280 = (0);
var G__68281 = (0);
seq__68266 = G__68278;
chunk__68267 = G__68279;
count__68268 = G__68280;
i__68269 = G__68281;
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
var seq__68282 = cljs.core.seq.call(null,value);
var chunk__68283 = null;
var count__68284 = (0);
var i__68285 = (0);
while(true){
if((i__68285 < count__68284)){
var event = cljs.core._nth.call(null,chunk__68283,i__68285);
clear_event.call(null,event);

var G__68286 = seq__68282;
var G__68287 = chunk__68283;
var G__68288 = count__68284;
var G__68289 = (i__68285 + (1));
seq__68282 = G__68286;
chunk__68283 = G__68287;
count__68284 = G__68288;
i__68285 = G__68289;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__68282);
if(temp__6738__auto__){
var seq__68282__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68282__$1)){
var c__59092__auto__ = cljs.core.chunk_first.call(null,seq__68282__$1);
var G__68290 = cljs.core.chunk_rest.call(null,seq__68282__$1);
var G__68291 = c__59092__auto__;
var G__68292 = cljs.core.count.call(null,c__59092__auto__);
var G__68293 = (0);
seq__68282 = G__68290;
chunk__68283 = G__68291;
count__68284 = G__68292;
i__68285 = G__68293;
continue;
} else {
var event = cljs.core.first.call(null,seq__68282__$1);
clear_event.call(null,event);

var G__68294 = cljs.core.next.call(null,seq__68282__$1);
var G__68295 = null;
var G__68296 = (0);
var G__68297 = (0);
seq__68282 = G__68294;
chunk__68283 = G__68295;
count__68284 = G__68296;
i__68285 = G__68297;
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

//# sourceMappingURL=fx.js.map?rel=1505406788106
