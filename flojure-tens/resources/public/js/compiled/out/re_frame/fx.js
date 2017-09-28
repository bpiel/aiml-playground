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
var seq__72740 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__72741 = null;
var count__72742 = (0);
var i__72743 = (0);
while(true){
if((i__72743 < count__72742)){
var vec__72744 = cljs.core._nth.call(null,chunk__72741,i__72743);
var effect_key = cljs.core.nth.call(null,vec__72744,(0),null);
var effect_value = cljs.core.nth.call(null,vec__72744,(1),null);
var temp__6736__auto___72750 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___72750)){
var effect_fn_72751 = temp__6736__auto___72750;
effect_fn_72751.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__72752 = seq__72740;
var G__72753 = chunk__72741;
var G__72754 = count__72742;
var G__72755 = (i__72743 + (1));
seq__72740 = G__72752;
chunk__72741 = G__72753;
count__72742 = G__72754;
i__72743 = G__72755;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__72740);
if(temp__6738__auto__){
var seq__72740__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72740__$1)){
var c__65348__auto__ = cljs.core.chunk_first.call(null,seq__72740__$1);
var G__72756 = cljs.core.chunk_rest.call(null,seq__72740__$1);
var G__72757 = c__65348__auto__;
var G__72758 = cljs.core.count.call(null,c__65348__auto__);
var G__72759 = (0);
seq__72740 = G__72756;
chunk__72741 = G__72757;
count__72742 = G__72758;
i__72743 = G__72759;
continue;
} else {
var vec__72747 = cljs.core.first.call(null,seq__72740__$1);
var effect_key = cljs.core.nth.call(null,vec__72747,(0),null);
var effect_value = cljs.core.nth.call(null,vec__72747,(1),null);
var temp__6736__auto___72760 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___72760)){
var effect_fn_72761 = temp__6736__auto___72760;
effect_fn_72761.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__72762 = cljs.core.next.call(null,seq__72740__$1);
var G__72763 = null;
var G__72764 = (0);
var G__72765 = (0);
seq__72740 = G__72762;
chunk__72741 = G__72763;
count__72742 = G__72764;
i__72743 = G__72765;
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
var seq__72766 = cljs.core.seq.call(null,value);
var chunk__72767 = null;
var count__72768 = (0);
var i__72769 = (0);
while(true){
if((i__72769 < count__72768)){
var map__72770 = cljs.core._nth.call(null,chunk__72767,i__72769);
var map__72770__$1 = ((((!((map__72770 == null)))?((((map__72770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72770):map__72770);
var effect = map__72770__$1;
var ms = cljs.core.get.call(null,map__72770__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__72770__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__72766,chunk__72767,count__72768,i__72769,map__72770,map__72770__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__72766,chunk__72767,count__72768,i__72769,map__72770,map__72770__$1,effect,ms,dispatch))
,ms);
}

var G__72774 = seq__72766;
var G__72775 = chunk__72767;
var G__72776 = count__72768;
var G__72777 = (i__72769 + (1));
seq__72766 = G__72774;
chunk__72767 = G__72775;
count__72768 = G__72776;
i__72769 = G__72777;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__72766);
if(temp__6738__auto__){
var seq__72766__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72766__$1)){
var c__65348__auto__ = cljs.core.chunk_first.call(null,seq__72766__$1);
var G__72778 = cljs.core.chunk_rest.call(null,seq__72766__$1);
var G__72779 = c__65348__auto__;
var G__72780 = cljs.core.count.call(null,c__65348__auto__);
var G__72781 = (0);
seq__72766 = G__72778;
chunk__72767 = G__72779;
count__72768 = G__72780;
i__72769 = G__72781;
continue;
} else {
var map__72772 = cljs.core.first.call(null,seq__72766__$1);
var map__72772__$1 = ((((!((map__72772 == null)))?((((map__72772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72772):map__72772);
var effect = map__72772__$1;
var ms = cljs.core.get.call(null,map__72772__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__72772__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__72766,chunk__72767,count__72768,i__72769,map__72772,map__72772__$1,effect,ms,dispatch,seq__72766__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__72766,chunk__72767,count__72768,i__72769,map__72772,map__72772__$1,effect,ms,dispatch,seq__72766__$1,temp__6738__auto__))
,ms);
}

var G__72782 = cljs.core.next.call(null,seq__72766__$1);
var G__72783 = null;
var G__72784 = (0);
var G__72785 = (0);
seq__72766 = G__72782;
chunk__72767 = G__72783;
count__72768 = G__72784;
i__72769 = G__72785;
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
var seq__72786 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__72787 = null;
var count__72788 = (0);
var i__72789 = (0);
while(true){
if((i__72789 < count__72788)){
var event = cljs.core._nth.call(null,chunk__72787,i__72789);
re_frame.router.dispatch.call(null,event);

var G__72790 = seq__72786;
var G__72791 = chunk__72787;
var G__72792 = count__72788;
var G__72793 = (i__72789 + (1));
seq__72786 = G__72790;
chunk__72787 = G__72791;
count__72788 = G__72792;
i__72789 = G__72793;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__72786);
if(temp__6738__auto__){
var seq__72786__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72786__$1)){
var c__65348__auto__ = cljs.core.chunk_first.call(null,seq__72786__$1);
var G__72794 = cljs.core.chunk_rest.call(null,seq__72786__$1);
var G__72795 = c__65348__auto__;
var G__72796 = cljs.core.count.call(null,c__65348__auto__);
var G__72797 = (0);
seq__72786 = G__72794;
chunk__72787 = G__72795;
count__72788 = G__72796;
i__72789 = G__72797;
continue;
} else {
var event = cljs.core.first.call(null,seq__72786__$1);
re_frame.router.dispatch.call(null,event);

var G__72798 = cljs.core.next.call(null,seq__72786__$1);
var G__72799 = null;
var G__72800 = (0);
var G__72801 = (0);
seq__72786 = G__72798;
chunk__72787 = G__72799;
count__72788 = G__72800;
i__72789 = G__72801;
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
var seq__72802 = cljs.core.seq.call(null,value);
var chunk__72803 = null;
var count__72804 = (0);
var i__72805 = (0);
while(true){
if((i__72805 < count__72804)){
var event = cljs.core._nth.call(null,chunk__72803,i__72805);
clear_event.call(null,event);

var G__72806 = seq__72802;
var G__72807 = chunk__72803;
var G__72808 = count__72804;
var G__72809 = (i__72805 + (1));
seq__72802 = G__72806;
chunk__72803 = G__72807;
count__72804 = G__72808;
i__72805 = G__72809;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__72802);
if(temp__6738__auto__){
var seq__72802__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72802__$1)){
var c__65348__auto__ = cljs.core.chunk_first.call(null,seq__72802__$1);
var G__72810 = cljs.core.chunk_rest.call(null,seq__72802__$1);
var G__72811 = c__65348__auto__;
var G__72812 = cljs.core.count.call(null,c__65348__auto__);
var G__72813 = (0);
seq__72802 = G__72810;
chunk__72803 = G__72811;
count__72804 = G__72812;
i__72805 = G__72813;
continue;
} else {
var event = cljs.core.first.call(null,seq__72802__$1);
clear_event.call(null,event);

var G__72814 = cljs.core.next.call(null,seq__72802__$1);
var G__72815 = null;
var G__72816 = (0);
var G__72817 = (0);
seq__72802 = G__72814;
chunk__72803 = G__72815;
count__72804 = G__72816;
i__72805 = G__72817;
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

//# sourceMappingURL=fx.js.map?rel=1506558346977
