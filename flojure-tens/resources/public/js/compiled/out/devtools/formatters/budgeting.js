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
var o__60650__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__60650__auto__["add"]).call(o__60650__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__60650__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__60650__auto__["delete"]).call(o__60650__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__60650__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__60650__auto__["has"]).call(o__60650__auto__,value);
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
var G__73092 = data;
var target__60655__auto__ = G__73092;
if(cljs.core.truth_(target__60655__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73092)].join('')),"\n","target__60655__auto__"].join('')));
}

(target__60655__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__73092;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_73097 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_73097);
} else {
var seq__73093_73098 = cljs.core.seq.call(null,json_ml);
var chunk__73094_73099 = null;
var count__73095_73100 = (0);
var i__73096_73101 = (0);
while(true){
if((i__73096_73101 < count__73095_73100)){
var item_73102 = cljs.core._nth.call(null,chunk__73094_73099,i__73096_73101);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_73102,new_depth_budget_73097);

var G__73103 = seq__73093_73098;
var G__73104 = chunk__73094_73099;
var G__73105 = count__73095_73100;
var G__73106 = (i__73096_73101 + (1));
seq__73093_73098 = G__73103;
chunk__73094_73099 = G__73104;
count__73095_73100 = G__73105;
i__73096_73101 = G__73106;
continue;
} else {
var temp__6738__auto___73107 = cljs.core.seq.call(null,seq__73093_73098);
if(temp__6738__auto___73107){
var seq__73093_73108__$1 = temp__6738__auto___73107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73093_73108__$1)){
var c__59092__auto___73109 = cljs.core.chunk_first.call(null,seq__73093_73108__$1);
var G__73110 = cljs.core.chunk_rest.call(null,seq__73093_73108__$1);
var G__73111 = c__59092__auto___73109;
var G__73112 = cljs.core.count.call(null,c__59092__auto___73109);
var G__73113 = (0);
seq__73093_73098 = G__73110;
chunk__73094_73099 = G__73111;
count__73095_73100 = G__73112;
i__73096_73101 = G__73113;
continue;
} else {
var item_73114 = cljs.core.first.call(null,seq__73093_73108__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_73114,new_depth_budget_73097);

var G__73115 = cljs.core.next.call(null,seq__73093_73108__$1);
var G__73116 = null;
var G__73117 = (0);
var G__73118 = (0);
seq__73093_73098 = G__73115;
chunk__73094_73099 = G__73116;
count__73095_73100 = G__73117;
i__73096_73101 = G__73118;
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
var remaining_depth_budget = (function (){var or__58161__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
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

//# sourceMappingURL=budgeting.js.map?rel=1505406797706
