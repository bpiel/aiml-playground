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
var x72792_72793 = value;
x72792_72793.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x72795_72796 = value;
x72795_72796.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x72798_72799 = value;
x72798_72799.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__58149__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__58149__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__58149__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__59445__auto__ = [];
var len__59438__auto___72806 = arguments.length;
var i__59439__auto___72807 = (0);
while(true){
if((i__59439__auto___72807 < len__59438__auto___72806)){
args__59445__auto__.push((arguments[i__59439__auto___72807]));

var G__72808 = (i__59439__auto___72807 + (1));
i__59439__auto___72807 = G__72808;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__72802_72809 = cljs.core.seq.call(null,items);
var chunk__72803_72810 = null;
var count__72804_72811 = (0);
var i__72805_72812 = (0);
while(true){
if((i__72805_72812 < count__72804_72811)){
var item_72813 = cljs.core._nth.call(null,chunk__72803_72810,i__72805_72812);
if(!((item_72813 == null))){
if(cljs.core.coll_QMARK_.call(null,item_72813)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_72813)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_72813));
}
} else {
}

var G__72814 = seq__72802_72809;
var G__72815 = chunk__72803_72810;
var G__72816 = count__72804_72811;
var G__72817 = (i__72805_72812 + (1));
seq__72802_72809 = G__72814;
chunk__72803_72810 = G__72815;
count__72804_72811 = G__72816;
i__72805_72812 = G__72817;
continue;
} else {
var temp__6738__auto___72818 = cljs.core.seq.call(null,seq__72802_72809);
if(temp__6738__auto___72818){
var seq__72802_72819__$1 = temp__6738__auto___72818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72802_72819__$1)){
var c__59092__auto___72820 = cljs.core.chunk_first.call(null,seq__72802_72819__$1);
var G__72821 = cljs.core.chunk_rest.call(null,seq__72802_72819__$1);
var G__72822 = c__59092__auto___72820;
var G__72823 = cljs.core.count.call(null,c__59092__auto___72820);
var G__72824 = (0);
seq__72802_72809 = G__72821;
chunk__72803_72810 = G__72822;
count__72804_72811 = G__72823;
i__72805_72812 = G__72824;
continue;
} else {
var item_72825 = cljs.core.first.call(null,seq__72802_72819__$1);
if(!((item_72825 == null))){
if(cljs.core.coll_QMARK_.call(null,item_72825)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_72825)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_72825));
}
} else {
}

var G__72826 = cljs.core.next.call(null,seq__72802_72819__$1);
var G__72827 = null;
var G__72828 = (0);
var G__72829 = (0);
seq__72802_72809 = G__72826;
chunk__72803_72810 = G__72827;
count__72804_72811 = G__72828;
i__72805_72812 = G__72829;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq72801){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72801));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__59445__auto__ = [];
var len__59438__auto___72837 = arguments.length;
var i__59439__auto___72838 = (0);
while(true){
if((i__59439__auto___72838 < len__59438__auto___72837)){
args__59445__auto__.push((arguments[i__59439__auto___72838]));

var G__72839 = (i__59439__auto___72838 + (1));
i__59439__auto___72838 = G__72839;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((2) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__59446__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__72833_72840 = cljs.core.seq.call(null,children);
var chunk__72834_72841 = null;
var count__72835_72842 = (0);
var i__72836_72843 = (0);
while(true){
if((i__72836_72843 < count__72835_72842)){
var child_72844 = cljs.core._nth.call(null,chunk__72834_72841,i__72836_72843);
if(!((child_72844 == null))){
if(cljs.core.coll_QMARK_.call(null,child_72844)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_72844))));
} else {
var temp__6736__auto___72845 = devtools.formatters.helpers.pref.call(null,child_72844);
if(cljs.core.truth_(temp__6736__auto___72845)){
var child_value_72846 = temp__6736__auto___72845;
template.push(child_value_72846);
} else {
}
}
} else {
}

var G__72847 = seq__72833_72840;
var G__72848 = chunk__72834_72841;
var G__72849 = count__72835_72842;
var G__72850 = (i__72836_72843 + (1));
seq__72833_72840 = G__72847;
chunk__72834_72841 = G__72848;
count__72835_72842 = G__72849;
i__72836_72843 = G__72850;
continue;
} else {
var temp__6738__auto___72851 = cljs.core.seq.call(null,seq__72833_72840);
if(temp__6738__auto___72851){
var seq__72833_72852__$1 = temp__6738__auto___72851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72833_72852__$1)){
var c__59092__auto___72853 = cljs.core.chunk_first.call(null,seq__72833_72852__$1);
var G__72854 = cljs.core.chunk_rest.call(null,seq__72833_72852__$1);
var G__72855 = c__59092__auto___72853;
var G__72856 = cljs.core.count.call(null,c__59092__auto___72853);
var G__72857 = (0);
seq__72833_72840 = G__72854;
chunk__72834_72841 = G__72855;
count__72835_72842 = G__72856;
i__72836_72843 = G__72857;
continue;
} else {
var child_72858 = cljs.core.first.call(null,seq__72833_72852__$1);
if(!((child_72858 == null))){
if(cljs.core.coll_QMARK_.call(null,child_72858)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_72858))));
} else {
var temp__6736__auto___72859 = devtools.formatters.helpers.pref.call(null,child_72858);
if(cljs.core.truth_(temp__6736__auto___72859)){
var child_value_72860 = temp__6736__auto___72859;
template.push(child_value_72860);
} else {
}
}
} else {
}

var G__72861 = cljs.core.next.call(null,seq__72833_72852__$1);
var G__72862 = null;
var G__72863 = (0);
var G__72864 = (0);
seq__72833_72840 = G__72861;
chunk__72834_72841 = G__72862;
count__72835_72842 = G__72863;
i__72836_72843 = G__72864;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq72830){
var G__72831 = cljs.core.first.call(null,seq72830);
var seq72830__$1 = cljs.core.next.call(null,seq72830);
var G__72832 = cljs.core.first.call(null,seq72830__$1);
var seq72830__$2 = cljs.core.next.call(null,seq72830__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__72831,G__72832,seq72830__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__59445__auto__ = [];
var len__59438__auto___72867 = arguments.length;
var i__59439__auto___72868 = (0);
while(true){
if((i__59439__auto___72868 < len__59438__auto___72867)){
args__59445__auto__.push((arguments[i__59439__auto___72868]));

var G__72869 = (i__59439__auto___72868 + (1));
i__59439__auto___72868 = G__72869;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((1) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59446__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq72865){
var G__72866 = cljs.core.first.call(null,seq72865);
var seq72865__$1 = cljs.core.next.call(null,seq72865);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__72866,seq72865__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__59445__auto__ = [];
var len__59438__auto___72872 = arguments.length;
var i__59439__auto___72873 = (0);
while(true){
if((i__59439__auto___72873 < len__59438__auto___72872)){
args__59445__auto__.push((arguments[i__59439__auto___72873]));

var G__72874 = (i__59439__auto___72873 + (1));
i__59439__auto___72873 = G__72874;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((1) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59446__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq72870){
var G__72871 = cljs.core.first.call(null,seq72870);
var seq72870__$1 = cljs.core.next.call(null,seq72870);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__72871,seq72870__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__72876 = arguments.length;
switch (G__72876) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj72878 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__58161__auto__ = start_index;
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
return (0);
}
})()};
return obj72878;
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
var args__59445__auto__ = [];
var len__59438__auto___72886 = arguments.length;
var i__59439__auto___72887 = (0);
while(true){
if((i__59439__auto___72887 < len__59438__auto___72886)){
args__59445__auto__.push((arguments[i__59439__auto___72887]));

var G__72888 = (i__59439__auto___72887 + (1));
i__59439__auto___72887 = G__72888;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((1) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59446__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__72882){
var vec__72883 = p__72882;
var state_override_fn = cljs.core.nth.call(null,vec__72883,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq72880){
var G__72881 = cljs.core.first.call(null,seq72880);
var seq72880__$1 = cljs.core.next.call(null,seq72880);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__72881,seq72880__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_72889 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_72889;
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
var G__72890 = name;
switch (G__72890) {
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
var vec__72892 = tag;
var html_tag = cljs.core.nth.call(null,vec__72892,(0),null);
var style = cljs.core.nth.call(null,vec__72892,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_72895 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_72895;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_72896 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_72897 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_72897;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_72896;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__72898 = initial_value;
var G__72899 = value.call(null);
initial_value = G__72898;
value = G__72899;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__72900 = initial_value;
var G__72901 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__72900;
value = G__72901;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__72902 = initial_value;
var G__72903 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__72902;
value = G__72903;
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

//# sourceMappingURL=templating.js.map?rel=1505406797252
