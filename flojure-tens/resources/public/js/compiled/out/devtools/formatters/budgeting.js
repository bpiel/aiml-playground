// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__73233__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__73233__auto__["add"]).call(o__73233__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__73233__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__73233__auto__["delete"]).call(o__73233__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__73233__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__73233__auto__["has"]).call(o__73233__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__80702 = data;
var target__73238__auto__ = G__80702;
if(cljs.core.truth_(target__73238__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80702)].join('')),"\n","target__73238__auto__"].join('')));
}

(target__73238__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__80702;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_80707 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_80707);
} else {
var seq__80703_80708 = cljs.core.seq.call(null,json_ml);
var chunk__80704_80709 = null;
var count__80705_80710 = (0);
var i__80706_80711 = (0);
while(true){
if((i__80706_80711 < count__80705_80710)){
var item_80712 = cljs.core._nth.call(null,chunk__80704_80709,i__80706_80711);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_80712,new_depth_budget_80707);

var G__80713 = seq__80703_80708;
var G__80714 = chunk__80704_80709;
var G__80715 = count__80705_80710;
var G__80716 = (i__80706_80711 + (1));
seq__80703_80708 = G__80713;
chunk__80704_80709 = G__80714;
count__80705_80710 = G__80715;
i__80706_80711 = G__80716;
continue;
} else {
var temp__6738__auto___80717 = cljs.core.seq.call(null,seq__80703_80708);
if(temp__6738__auto___80717){
var seq__80703_80718__$1 = temp__6738__auto___80717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80703_80718__$1)){
var c__65348__auto___80719 = cljs.core.chunk_first.call(null,seq__80703_80718__$1);
var G__80720 = cljs.core.chunk_rest.call(null,seq__80703_80718__$1);
var G__80721 = c__65348__auto___80719;
var G__80722 = cljs.core.count.call(null,c__65348__auto___80719);
var G__80723 = (0);
seq__80703_80708 = G__80720;
chunk__80704_80709 = G__80721;
count__80705_80710 = G__80722;
i__80706_80711 = G__80723;
continue;
} else {
var item_80724 = cljs.core.first.call(null,seq__80703_80718__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_80724,new_depth_budget_80707);

var G__80725 = cljs.core.next.call(null,seq__80703_80718__$1);
var G__80726 = null;
var G__80727 = (0);
var G__80728 = (0);
seq__80703_80708 = G__80725;
chunk__80704_80709 = G__80726;
count__80705_80710 = G__80727;
i__80706_80711 = G__80728;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__6736__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__6736__auto__)){
var initial_hierarchy_depth_budget = temp__6736__auto__;
var remaining_depth_budget = (function (){var or__64417__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1506558363020
