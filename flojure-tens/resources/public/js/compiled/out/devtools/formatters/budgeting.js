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
var o__68636__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__68636__auto__["add"]).call(o__68636__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__68636__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__68636__auto__["delete"]).call(o__68636__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__68636__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__68636__auto__["has"]).call(o__68636__auto__,value);
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
var G__120678 = data;
var target__68641__auto__ = G__120678;
if(cljs.core.truth_(target__68641__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__120678)].join('')),"\n","target__68641__auto__"].join('')));
}

(target__68641__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__120678;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_120683 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_120683);
} else {
var seq__120679_120684 = cljs.core.seq.call(null,json_ml);
var chunk__120680_120685 = null;
var count__120681_120686 = (0);
var i__120682_120687 = (0);
while(true){
if((i__120682_120687 < count__120681_120686)){
var item_120688 = cljs.core._nth.call(null,chunk__120680_120685,i__120682_120687);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_120688,new_depth_budget_120683);

var G__120689 = seq__120679_120684;
var G__120690 = chunk__120680_120685;
var G__120691 = count__120681_120686;
var G__120692 = (i__120682_120687 + (1));
seq__120679_120684 = G__120689;
chunk__120680_120685 = G__120690;
count__120681_120686 = G__120691;
i__120682_120687 = G__120692;
continue;
} else {
var temp__6738__auto___120693 = cljs.core.seq.call(null,seq__120679_120684);
if(temp__6738__auto___120693){
var seq__120679_120694__$1 = temp__6738__auto___120693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120679_120694__$1)){
var c__59059__auto___120695 = cljs.core.chunk_first.call(null,seq__120679_120694__$1);
var G__120696 = cljs.core.chunk_rest.call(null,seq__120679_120694__$1);
var G__120697 = c__59059__auto___120695;
var G__120698 = cljs.core.count.call(null,c__59059__auto___120695);
var G__120699 = (0);
seq__120679_120684 = G__120696;
chunk__120680_120685 = G__120697;
count__120681_120686 = G__120698;
i__120682_120687 = G__120699;
continue;
} else {
var item_120700 = cljs.core.first.call(null,seq__120679_120694__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_120700,new_depth_budget_120683);

var G__120701 = cljs.core.next.call(null,seq__120679_120694__$1);
var G__120702 = null;
var G__120703 = (0);
var G__120704 = (0);
seq__120679_120684 = G__120701;
chunk__120680_120685 = G__120702;
count__120681_120686 = G__120703;
i__120682_120687 = G__120704;
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
var remaining_depth_budget = (function (){var or__58128__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
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

//# sourceMappingURL=budgeting.js.map?rel=1505927836865
