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
var x73729_73730 = value;
x73729_73730.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x73732_73733 = value;
x73732_73733.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x73735_73736 = value;
x73735_73736.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__58123__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__58123__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__58123__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__59419__auto__ = [];
var len__59412__auto___73743 = arguments.length;
var i__59413__auto___73744 = (0);
while(true){
if((i__59413__auto___73744 < len__59412__auto___73743)){
args__59419__auto__.push((arguments[i__59413__auto___73744]));

var G__73745 = (i__59413__auto___73744 + (1));
i__59413__auto___73744 = G__73745;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__73739_73746 = cljs.core.seq.call(null,items);
var chunk__73740_73747 = null;
var count__73741_73748 = (0);
var i__73742_73749 = (0);
while(true){
if((i__73742_73749 < count__73741_73748)){
var item_73750 = cljs.core._nth.call(null,chunk__73740_73747,i__73742_73749);
if(!((item_73750 == null))){
if(cljs.core.coll_QMARK_.call(null,item_73750)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_73750)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_73750));
}
} else {
}

var G__73751 = seq__73739_73746;
var G__73752 = chunk__73740_73747;
var G__73753 = count__73741_73748;
var G__73754 = (i__73742_73749 + (1));
seq__73739_73746 = G__73751;
chunk__73740_73747 = G__73752;
count__73741_73748 = G__73753;
i__73742_73749 = G__73754;
continue;
} else {
var temp__6738__auto___73755 = cljs.core.seq.call(null,seq__73739_73746);
if(temp__6738__auto___73755){
var seq__73739_73756__$1 = temp__6738__auto___73755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73739_73756__$1)){
var c__59066__auto___73757 = cljs.core.chunk_first.call(null,seq__73739_73756__$1);
var G__73758 = cljs.core.chunk_rest.call(null,seq__73739_73756__$1);
var G__73759 = c__59066__auto___73757;
var G__73760 = cljs.core.count.call(null,c__59066__auto___73757);
var G__73761 = (0);
seq__73739_73746 = G__73758;
chunk__73740_73747 = G__73759;
count__73741_73748 = G__73760;
i__73742_73749 = G__73761;
continue;
} else {
var item_73762 = cljs.core.first.call(null,seq__73739_73756__$1);
if(!((item_73762 == null))){
if(cljs.core.coll_QMARK_.call(null,item_73762)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_73762)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_73762));
}
} else {
}

var G__73763 = cljs.core.next.call(null,seq__73739_73756__$1);
var G__73764 = null;
var G__73765 = (0);
var G__73766 = (0);
seq__73739_73746 = G__73763;
chunk__73740_73747 = G__73764;
count__73741_73748 = G__73765;
i__73742_73749 = G__73766;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq73738){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73738));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__59419__auto__ = [];
var len__59412__auto___73774 = arguments.length;
var i__59413__auto___73775 = (0);
while(true){
if((i__59413__auto___73775 < len__59412__auto___73774)){
args__59419__auto__.push((arguments[i__59413__auto___73775]));

var G__73776 = (i__59413__auto___73775 + (1));
i__59413__auto___73775 = G__73776;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((2) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__59420__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__73770_73777 = cljs.core.seq.call(null,children);
var chunk__73771_73778 = null;
var count__73772_73779 = (0);
var i__73773_73780 = (0);
while(true){
if((i__73773_73780 < count__73772_73779)){
var child_73781 = cljs.core._nth.call(null,chunk__73771_73778,i__73773_73780);
if(!((child_73781 == null))){
if(cljs.core.coll_QMARK_.call(null,child_73781)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_73781))));
} else {
var temp__6736__auto___73782 = devtools.formatters.helpers.pref.call(null,child_73781);
if(cljs.core.truth_(temp__6736__auto___73782)){
var child_value_73783 = temp__6736__auto___73782;
template.push(child_value_73783);
} else {
}
}
} else {
}

var G__73784 = seq__73770_73777;
var G__73785 = chunk__73771_73778;
var G__73786 = count__73772_73779;
var G__73787 = (i__73773_73780 + (1));
seq__73770_73777 = G__73784;
chunk__73771_73778 = G__73785;
count__73772_73779 = G__73786;
i__73773_73780 = G__73787;
continue;
} else {
var temp__6738__auto___73788 = cljs.core.seq.call(null,seq__73770_73777);
if(temp__6738__auto___73788){
var seq__73770_73789__$1 = temp__6738__auto___73788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73770_73789__$1)){
var c__59066__auto___73790 = cljs.core.chunk_first.call(null,seq__73770_73789__$1);
var G__73791 = cljs.core.chunk_rest.call(null,seq__73770_73789__$1);
var G__73792 = c__59066__auto___73790;
var G__73793 = cljs.core.count.call(null,c__59066__auto___73790);
var G__73794 = (0);
seq__73770_73777 = G__73791;
chunk__73771_73778 = G__73792;
count__73772_73779 = G__73793;
i__73773_73780 = G__73794;
continue;
} else {
var child_73795 = cljs.core.first.call(null,seq__73770_73789__$1);
if(!((child_73795 == null))){
if(cljs.core.coll_QMARK_.call(null,child_73795)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_73795))));
} else {
var temp__6736__auto___73796 = devtools.formatters.helpers.pref.call(null,child_73795);
if(cljs.core.truth_(temp__6736__auto___73796)){
var child_value_73797 = temp__6736__auto___73796;
template.push(child_value_73797);
} else {
}
}
} else {
}

var G__73798 = cljs.core.next.call(null,seq__73770_73789__$1);
var G__73799 = null;
var G__73800 = (0);
var G__73801 = (0);
seq__73770_73777 = G__73798;
chunk__73771_73778 = G__73799;
count__73772_73779 = G__73800;
i__73773_73780 = G__73801;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq73767){
var G__73768 = cljs.core.first.call(null,seq73767);
var seq73767__$1 = cljs.core.next.call(null,seq73767);
var G__73769 = cljs.core.first.call(null,seq73767__$1);
var seq73767__$2 = cljs.core.next.call(null,seq73767__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__73768,G__73769,seq73767__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__59419__auto__ = [];
var len__59412__auto___73804 = arguments.length;
var i__59413__auto___73805 = (0);
while(true){
if((i__59413__auto___73805 < len__59412__auto___73804)){
args__59419__auto__.push((arguments[i__59413__auto___73805]));

var G__73806 = (i__59413__auto___73805 + (1));
i__59413__auto___73805 = G__73806;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((1) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59420__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq73802){
var G__73803 = cljs.core.first.call(null,seq73802);
var seq73802__$1 = cljs.core.next.call(null,seq73802);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73803,seq73802__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__59419__auto__ = [];
var len__59412__auto___73809 = arguments.length;
var i__59413__auto___73810 = (0);
while(true){
if((i__59413__auto___73810 < len__59412__auto___73809)){
args__59419__auto__.push((arguments[i__59413__auto___73810]));

var G__73811 = (i__59413__auto___73810 + (1));
i__59413__auto___73810 = G__73811;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((1) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59420__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq73807){
var G__73808 = cljs.core.first.call(null,seq73807);
var seq73807__$1 = cljs.core.next.call(null,seq73807);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73808,seq73807__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__73813 = arguments.length;
switch (G__73813) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj73815 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__58135__auto__ = start_index;
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
return (0);
}
})()};
return obj73815;
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
var args__59419__auto__ = [];
var len__59412__auto___73823 = arguments.length;
var i__59413__auto___73824 = (0);
while(true){
if((i__59413__auto___73824 < len__59412__auto___73823)){
args__59419__auto__.push((arguments[i__59413__auto___73824]));

var G__73825 = (i__59413__auto___73824 + (1));
i__59413__auto___73824 = G__73825;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((1) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59420__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__73819){
var vec__73820 = p__73819;
var state_override_fn = cljs.core.nth.call(null,vec__73820,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq73817){
var G__73818 = cljs.core.first.call(null,seq73817);
var seq73817__$1 = cljs.core.next.call(null,seq73817);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__73818,seq73817__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_73826 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_73826;
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
var G__73827 = name;
switch (G__73827) {
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
var vec__73829 = tag;
var html_tag = cljs.core.nth.call(null,vec__73829,(0),null);
var style = cljs.core.nth.call(null,vec__73829,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_73832 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_73832;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_73833 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_73834 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_73834;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_73833;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__73835 = initial_value;
var G__73836 = value.call(null);
initial_value = G__73835;
value = G__73836;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__73837 = initial_value;
var G__73838 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__73837;
value = G__73838;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__73839 = initial_value;
var G__73840 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__73839;
value = G__73840;
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

//# sourceMappingURL=templating.js.map?rel=1506641523356
