// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x25766_25767 = value;
x25766_25767.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x25769_25770 = value;
x25769_25770.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x25772_25773 = value;
x25772_25773.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__9798__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__9798__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__9798__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25780 = arguments.length;
var i__11088__auto___25781 = (0);
while(true){
if((i__11088__auto___25781 < len__11087__auto___25780)){
args__11094__auto__.push((arguments[i__11088__auto___25781]));

var G__25782 = (i__11088__auto___25781 + (1));
i__11088__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__25776_25783 = cljs.core.seq.call(null,items);
var chunk__25777_25784 = null;
var count__25778_25785 = (0);
var i__25779_25786 = (0);
while(true){
if((i__25779_25786 < count__25778_25785)){
var item_25787 = cljs.core._nth.call(null,chunk__25777_25784,i__25779_25786);
if(!((item_25787 == null))){
if(cljs.core.coll_QMARK_.call(null,item_25787)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_25787)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_25787));
}
} else {
}

var G__25788 = seq__25776_25783;
var G__25789 = chunk__25777_25784;
var G__25790 = count__25778_25785;
var G__25791 = (i__25779_25786 + (1));
seq__25776_25783 = G__25788;
chunk__25777_25784 = G__25789;
count__25778_25785 = G__25790;
i__25779_25786 = G__25791;
continue;
} else {
var temp__6738__auto___25792 = cljs.core.seq.call(null,seq__25776_25783);
if(temp__6738__auto___25792){
var seq__25776_25793__$1 = temp__6738__auto___25792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25776_25793__$1)){
var c__10741__auto___25794 = cljs.core.chunk_first.call(null,seq__25776_25793__$1);
var G__25795 = cljs.core.chunk_rest.call(null,seq__25776_25793__$1);
var G__25796 = c__10741__auto___25794;
var G__25797 = cljs.core.count.call(null,c__10741__auto___25794);
var G__25798 = (0);
seq__25776_25783 = G__25795;
chunk__25777_25784 = G__25796;
count__25778_25785 = G__25797;
i__25779_25786 = G__25798;
continue;
} else {
var item_25799 = cljs.core.first.call(null,seq__25776_25793__$1);
if(!((item_25799 == null))){
if(cljs.core.coll_QMARK_.call(null,item_25799)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_25799)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_25799));
}
} else {
}

var G__25800 = cljs.core.next.call(null,seq__25776_25793__$1);
var G__25801 = null;
var G__25802 = (0);
var G__25803 = (0);
seq__25776_25783 = G__25800;
chunk__25777_25784 = G__25801;
count__25778_25785 = G__25802;
i__25779_25786 = G__25803;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq25775){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25775));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25811 = arguments.length;
var i__11088__auto___25812 = (0);
while(true){
if((i__11088__auto___25812 < len__11087__auto___25811)){
args__11094__auto__.push((arguments[i__11088__auto___25812]));

var G__25813 = (i__11088__auto___25812 + (1));
i__11088__auto___25812 = G__25813;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((2) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11095__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__25807_25814 = cljs.core.seq.call(null,children);
var chunk__25808_25815 = null;
var count__25809_25816 = (0);
var i__25810_25817 = (0);
while(true){
if((i__25810_25817 < count__25809_25816)){
var child_25818 = cljs.core._nth.call(null,chunk__25808_25815,i__25810_25817);
if(!((child_25818 == null))){
if(cljs.core.coll_QMARK_.call(null,child_25818)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_25818))));
} else {
var temp__6736__auto___25819 = devtools.formatters.helpers.pref.call(null,child_25818);
if(cljs.core.truth_(temp__6736__auto___25819)){
var child_value_25820 = temp__6736__auto___25819;
template.push(child_value_25820);
} else {
}
}
} else {
}

var G__25821 = seq__25807_25814;
var G__25822 = chunk__25808_25815;
var G__25823 = count__25809_25816;
var G__25824 = (i__25810_25817 + (1));
seq__25807_25814 = G__25821;
chunk__25808_25815 = G__25822;
count__25809_25816 = G__25823;
i__25810_25817 = G__25824;
continue;
} else {
var temp__6738__auto___25825 = cljs.core.seq.call(null,seq__25807_25814);
if(temp__6738__auto___25825){
var seq__25807_25826__$1 = temp__6738__auto___25825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25807_25826__$1)){
var c__10741__auto___25827 = cljs.core.chunk_first.call(null,seq__25807_25826__$1);
var G__25828 = cljs.core.chunk_rest.call(null,seq__25807_25826__$1);
var G__25829 = c__10741__auto___25827;
var G__25830 = cljs.core.count.call(null,c__10741__auto___25827);
var G__25831 = (0);
seq__25807_25814 = G__25828;
chunk__25808_25815 = G__25829;
count__25809_25816 = G__25830;
i__25810_25817 = G__25831;
continue;
} else {
var child_25832 = cljs.core.first.call(null,seq__25807_25826__$1);
if(!((child_25832 == null))){
if(cljs.core.coll_QMARK_.call(null,child_25832)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_25832))));
} else {
var temp__6736__auto___25833 = devtools.formatters.helpers.pref.call(null,child_25832);
if(cljs.core.truth_(temp__6736__auto___25833)){
var child_value_25834 = temp__6736__auto___25833;
template.push(child_value_25834);
} else {
}
}
} else {
}

var G__25835 = cljs.core.next.call(null,seq__25807_25826__$1);
var G__25836 = null;
var G__25837 = (0);
var G__25838 = (0);
seq__25807_25814 = G__25835;
chunk__25808_25815 = G__25836;
count__25809_25816 = G__25837;
i__25810_25817 = G__25838;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq25804){
var G__25805 = cljs.core.first.call(null,seq25804);
var seq25804__$1 = cljs.core.next.call(null,seq25804);
var G__25806 = cljs.core.first.call(null,seq25804__$1);
var seq25804__$2 = cljs.core.next.call(null,seq25804__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__25805,G__25806,seq25804__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25841 = arguments.length;
var i__11088__auto___25842 = (0);
while(true){
if((i__11088__auto___25842 < len__11087__auto___25841)){
args__11094__auto__.push((arguments[i__11088__auto___25842]));

var G__25843 = (i__11088__auto___25842 + (1));
i__11088__auto___25842 = G__25843;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq25839){
var G__25840 = cljs.core.first.call(null,seq25839);
var seq25839__$1 = cljs.core.next.call(null,seq25839);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25840,seq25839__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25846 = arguments.length;
var i__11088__auto___25847 = (0);
while(true){
if((i__11088__auto___25847 < len__11087__auto___25846)){
args__11094__auto__.push((arguments[i__11088__auto___25847]));

var G__25848 = (i__11088__auto___25847 + (1));
i__11088__auto___25847 = G__25848;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq25844){
var G__25845 = cljs.core.first.call(null,seq25844);
var seq25844__$1 = cljs.core.next.call(null,seq25844);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25845,seq25844__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__25850 = arguments.length;
switch (G__25850) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj25852 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__9810__auto__ = start_index;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return (0);
}
})()};
return obj25852;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25860 = arguments.length;
var i__11088__auto___25861 = (0);
while(true){
if((i__11088__auto___25861 < len__11087__auto___25860)){
args__11094__auto__.push((arguments[i__11088__auto___25861]));

var G__25862 = (i__11088__auto___25861 + (1));
i__11088__auto___25861 = G__25862;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__25856){
var vec__25857 = p__25856;
var state_override_fn = cljs.core.nth.call(null,vec__25857,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq25854){
var G__25855 = cljs.core.first.call(null,seq25854);
var seq25854__$1 = cljs.core.next.call(null,seq25854);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__25855,seq25854__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_25863 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_25863;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__25864 = name;
switch (G__25864) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__25866 = tag;
var html_tag = cljs.core.nth.call(null,vec__25866,(0),null);
var style = cljs.core.nth.call(null,vec__25866,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_25869 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_25869;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_25870 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_25871 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_25871;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_25870;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__25872 = initial_value;
var G__25873 = value.call(null);
initial_value = G__25872;
value = G__25873;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__25874 = initial_value;
var G__25875 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__25874;
value = G__25875;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__25876 = initial_value;
var G__25877 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__25876;
value = G__25877;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1505319636950
