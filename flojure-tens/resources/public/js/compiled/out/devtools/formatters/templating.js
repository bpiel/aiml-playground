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
var x25815_25816 = value;
x25815_25816.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x25818_25819 = value;
x25818_25819.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x25821_25822 = value;
x25821_25822.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var len__11087__auto___25829 = arguments.length;
var i__11088__auto___25830 = (0);
while(true){
if((i__11088__auto___25830 < len__11087__auto___25829)){
args__11094__auto__.push((arguments[i__11088__auto___25830]));

var G__25831 = (i__11088__auto___25830 + (1));
i__11088__auto___25830 = G__25831;
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
var seq__25825_25832 = cljs.core.seq.call(null,items);
var chunk__25826_25833 = null;
var count__25827_25834 = (0);
var i__25828_25835 = (0);
while(true){
if((i__25828_25835 < count__25827_25834)){
var item_25836 = cljs.core._nth.call(null,chunk__25826_25833,i__25828_25835);
if(!((item_25836 == null))){
if(cljs.core.coll_QMARK_.call(null,item_25836)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_25836)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_25836));
}
} else {
}

var G__25837 = seq__25825_25832;
var G__25838 = chunk__25826_25833;
var G__25839 = count__25827_25834;
var G__25840 = (i__25828_25835 + (1));
seq__25825_25832 = G__25837;
chunk__25826_25833 = G__25838;
count__25827_25834 = G__25839;
i__25828_25835 = G__25840;
continue;
} else {
var temp__6738__auto___25841 = cljs.core.seq.call(null,seq__25825_25832);
if(temp__6738__auto___25841){
var seq__25825_25842__$1 = temp__6738__auto___25841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25825_25842__$1)){
var c__10741__auto___25843 = cljs.core.chunk_first.call(null,seq__25825_25842__$1);
var G__25844 = cljs.core.chunk_rest.call(null,seq__25825_25842__$1);
var G__25845 = c__10741__auto___25843;
var G__25846 = cljs.core.count.call(null,c__10741__auto___25843);
var G__25847 = (0);
seq__25825_25832 = G__25844;
chunk__25826_25833 = G__25845;
count__25827_25834 = G__25846;
i__25828_25835 = G__25847;
continue;
} else {
var item_25848 = cljs.core.first.call(null,seq__25825_25842__$1);
if(!((item_25848 == null))){
if(cljs.core.coll_QMARK_.call(null,item_25848)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_25848)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_25848));
}
} else {
}

var G__25849 = cljs.core.next.call(null,seq__25825_25842__$1);
var G__25850 = null;
var G__25851 = (0);
var G__25852 = (0);
seq__25825_25832 = G__25849;
chunk__25826_25833 = G__25850;
count__25827_25834 = G__25851;
i__25828_25835 = G__25852;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq25824){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25824));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
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

var argseq__11095__auto__ = ((((2) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11095__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__25856_25863 = cljs.core.seq.call(null,children);
var chunk__25857_25864 = null;
var count__25858_25865 = (0);
var i__25859_25866 = (0);
while(true){
if((i__25859_25866 < count__25858_25865)){
var child_25867 = cljs.core._nth.call(null,chunk__25857_25864,i__25859_25866);
if(!((child_25867 == null))){
if(cljs.core.coll_QMARK_.call(null,child_25867)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_25867))));
} else {
var temp__6736__auto___25868 = devtools.formatters.helpers.pref.call(null,child_25867);
if(cljs.core.truth_(temp__6736__auto___25868)){
var child_value_25869 = temp__6736__auto___25868;
template.push(child_value_25869);
} else {
}
}
} else {
}

var G__25870 = seq__25856_25863;
var G__25871 = chunk__25857_25864;
var G__25872 = count__25858_25865;
var G__25873 = (i__25859_25866 + (1));
seq__25856_25863 = G__25870;
chunk__25857_25864 = G__25871;
count__25858_25865 = G__25872;
i__25859_25866 = G__25873;
continue;
} else {
var temp__6738__auto___25874 = cljs.core.seq.call(null,seq__25856_25863);
if(temp__6738__auto___25874){
var seq__25856_25875__$1 = temp__6738__auto___25874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25856_25875__$1)){
var c__10741__auto___25876 = cljs.core.chunk_first.call(null,seq__25856_25875__$1);
var G__25877 = cljs.core.chunk_rest.call(null,seq__25856_25875__$1);
var G__25878 = c__10741__auto___25876;
var G__25879 = cljs.core.count.call(null,c__10741__auto___25876);
var G__25880 = (0);
seq__25856_25863 = G__25877;
chunk__25857_25864 = G__25878;
count__25858_25865 = G__25879;
i__25859_25866 = G__25880;
continue;
} else {
var child_25881 = cljs.core.first.call(null,seq__25856_25875__$1);
if(!((child_25881 == null))){
if(cljs.core.coll_QMARK_.call(null,child_25881)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_25881))));
} else {
var temp__6736__auto___25882 = devtools.formatters.helpers.pref.call(null,child_25881);
if(cljs.core.truth_(temp__6736__auto___25882)){
var child_value_25883 = temp__6736__auto___25882;
template.push(child_value_25883);
} else {
}
}
} else {
}

var G__25884 = cljs.core.next.call(null,seq__25856_25875__$1);
var G__25885 = null;
var G__25886 = (0);
var G__25887 = (0);
seq__25856_25863 = G__25884;
chunk__25857_25864 = G__25885;
count__25858_25865 = G__25886;
i__25859_25866 = G__25887;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq25853){
var G__25854 = cljs.core.first.call(null,seq25853);
var seq25853__$1 = cljs.core.next.call(null,seq25853);
var G__25855 = cljs.core.first.call(null,seq25853__$1);
var seq25853__$2 = cljs.core.next.call(null,seq25853__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__25854,G__25855,seq25853__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25890 = arguments.length;
var i__11088__auto___25891 = (0);
while(true){
if((i__11088__auto___25891 < len__11087__auto___25890)){
args__11094__auto__.push((arguments[i__11088__auto___25891]));

var G__25892 = (i__11088__auto___25891 + (1));
i__11088__auto___25891 = G__25892;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq25888){
var G__25889 = cljs.core.first.call(null,seq25888);
var seq25888__$1 = cljs.core.next.call(null,seq25888);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25889,seq25888__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25895 = arguments.length;
var i__11088__auto___25896 = (0);
while(true){
if((i__11088__auto___25896 < len__11087__auto___25895)){
args__11094__auto__.push((arguments[i__11088__auto___25896]));

var G__25897 = (i__11088__auto___25896 + (1));
i__11088__auto___25896 = G__25897;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq25893){
var G__25894 = cljs.core.first.call(null,seq25893);
var seq25893__$1 = cljs.core.next.call(null,seq25893);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25894,seq25893__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__25899 = arguments.length;
switch (G__25899) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj25901 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__9810__auto__ = start_index;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return (0);
}
})()};
return obj25901;
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
var len__11087__auto___25909 = arguments.length;
var i__11088__auto___25910 = (0);
while(true){
if((i__11088__auto___25910 < len__11087__auto___25909)){
args__11094__auto__.push((arguments[i__11088__auto___25910]));

var G__25911 = (i__11088__auto___25910 + (1));
i__11088__auto___25910 = G__25911;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__25905){
var vec__25906 = p__25905;
var state_override_fn = cljs.core.nth.call(null,vec__25906,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq25903){
var G__25904 = cljs.core.first.call(null,seq25903);
var seq25903__$1 = cljs.core.next.call(null,seq25903);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__25904,seq25903__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_25912 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_25912;
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
var G__25913 = name;
switch (G__25913) {
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
var vec__25915 = tag;
var html_tag = cljs.core.nth.call(null,vec__25915,(0),null);
var style = cljs.core.nth.call(null,vec__25915,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_25918 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_25918;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_25919 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_25920 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_25920;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_25919;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__25921 = initial_value;
var G__25922 = value.call(null);
initial_value = G__25921;
value = G__25922;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__25923 = initial_value;
var G__25924 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__25923;
value = G__25924;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__25925 = initial_value;
var G__25926 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__25925;
value = G__25926;
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

//# sourceMappingURL=templating.js.map?rel=1506034940638
