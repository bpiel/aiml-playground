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
var x120378_120379 = value;
x120378_120379.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x120381_120382 = value;
x120381_120382.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x120384_120385 = value;
x120384_120385.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__58116__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__58116__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__58116__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__59412__auto__ = [];
var len__59405__auto___120392 = arguments.length;
var i__59406__auto___120393 = (0);
while(true){
if((i__59406__auto___120393 < len__59405__auto___120392)){
args__59412__auto__.push((arguments[i__59406__auto___120393]));

var G__120394 = (i__59406__auto___120393 + (1));
i__59406__auto___120393 = G__120394;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__120388_120395 = cljs.core.seq.call(null,items);
var chunk__120389_120396 = null;
var count__120390_120397 = (0);
var i__120391_120398 = (0);
while(true){
if((i__120391_120398 < count__120390_120397)){
var item_120399 = cljs.core._nth.call(null,chunk__120389_120396,i__120391_120398);
if(!((item_120399 == null))){
if(cljs.core.coll_QMARK_.call(null,item_120399)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_120399)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_120399));
}
} else {
}

var G__120400 = seq__120388_120395;
var G__120401 = chunk__120389_120396;
var G__120402 = count__120390_120397;
var G__120403 = (i__120391_120398 + (1));
seq__120388_120395 = G__120400;
chunk__120389_120396 = G__120401;
count__120390_120397 = G__120402;
i__120391_120398 = G__120403;
continue;
} else {
var temp__6738__auto___120404 = cljs.core.seq.call(null,seq__120388_120395);
if(temp__6738__auto___120404){
var seq__120388_120405__$1 = temp__6738__auto___120404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120388_120405__$1)){
var c__59059__auto___120406 = cljs.core.chunk_first.call(null,seq__120388_120405__$1);
var G__120407 = cljs.core.chunk_rest.call(null,seq__120388_120405__$1);
var G__120408 = c__59059__auto___120406;
var G__120409 = cljs.core.count.call(null,c__59059__auto___120406);
var G__120410 = (0);
seq__120388_120395 = G__120407;
chunk__120389_120396 = G__120408;
count__120390_120397 = G__120409;
i__120391_120398 = G__120410;
continue;
} else {
var item_120411 = cljs.core.first.call(null,seq__120388_120405__$1);
if(!((item_120411 == null))){
if(cljs.core.coll_QMARK_.call(null,item_120411)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_120411)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_120411));
}
} else {
}

var G__120412 = cljs.core.next.call(null,seq__120388_120405__$1);
var G__120413 = null;
var G__120414 = (0);
var G__120415 = (0);
seq__120388_120395 = G__120412;
chunk__120389_120396 = G__120413;
count__120390_120397 = G__120414;
i__120391_120398 = G__120415;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq120387){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq120387));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__59412__auto__ = [];
var len__59405__auto___120423 = arguments.length;
var i__59406__auto___120424 = (0);
while(true){
if((i__59406__auto___120424 < len__59405__auto___120423)){
args__59412__auto__.push((arguments[i__59406__auto___120424]));

var G__120425 = (i__59406__auto___120424 + (1));
i__59406__auto___120424 = G__120425;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((2) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__59413__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__120419_120426 = cljs.core.seq.call(null,children);
var chunk__120420_120427 = null;
var count__120421_120428 = (0);
var i__120422_120429 = (0);
while(true){
if((i__120422_120429 < count__120421_120428)){
var child_120430 = cljs.core._nth.call(null,chunk__120420_120427,i__120422_120429);
if(!((child_120430 == null))){
if(cljs.core.coll_QMARK_.call(null,child_120430)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_120430))));
} else {
var temp__6736__auto___120431 = devtools.formatters.helpers.pref.call(null,child_120430);
if(cljs.core.truth_(temp__6736__auto___120431)){
var child_value_120432 = temp__6736__auto___120431;
template.push(child_value_120432);
} else {
}
}
} else {
}

var G__120433 = seq__120419_120426;
var G__120434 = chunk__120420_120427;
var G__120435 = count__120421_120428;
var G__120436 = (i__120422_120429 + (1));
seq__120419_120426 = G__120433;
chunk__120420_120427 = G__120434;
count__120421_120428 = G__120435;
i__120422_120429 = G__120436;
continue;
} else {
var temp__6738__auto___120437 = cljs.core.seq.call(null,seq__120419_120426);
if(temp__6738__auto___120437){
var seq__120419_120438__$1 = temp__6738__auto___120437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120419_120438__$1)){
var c__59059__auto___120439 = cljs.core.chunk_first.call(null,seq__120419_120438__$1);
var G__120440 = cljs.core.chunk_rest.call(null,seq__120419_120438__$1);
var G__120441 = c__59059__auto___120439;
var G__120442 = cljs.core.count.call(null,c__59059__auto___120439);
var G__120443 = (0);
seq__120419_120426 = G__120440;
chunk__120420_120427 = G__120441;
count__120421_120428 = G__120442;
i__120422_120429 = G__120443;
continue;
} else {
var child_120444 = cljs.core.first.call(null,seq__120419_120438__$1);
if(!((child_120444 == null))){
if(cljs.core.coll_QMARK_.call(null,child_120444)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_120444))));
} else {
var temp__6736__auto___120445 = devtools.formatters.helpers.pref.call(null,child_120444);
if(cljs.core.truth_(temp__6736__auto___120445)){
var child_value_120446 = temp__6736__auto___120445;
template.push(child_value_120446);
} else {
}
}
} else {
}

var G__120447 = cljs.core.next.call(null,seq__120419_120438__$1);
var G__120448 = null;
var G__120449 = (0);
var G__120450 = (0);
seq__120419_120426 = G__120447;
chunk__120420_120427 = G__120448;
count__120421_120428 = G__120449;
i__120422_120429 = G__120450;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq120416){
var G__120417 = cljs.core.first.call(null,seq120416);
var seq120416__$1 = cljs.core.next.call(null,seq120416);
var G__120418 = cljs.core.first.call(null,seq120416__$1);
var seq120416__$2 = cljs.core.next.call(null,seq120416__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__120417,G__120418,seq120416__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__59412__auto__ = [];
var len__59405__auto___120453 = arguments.length;
var i__59406__auto___120454 = (0);
while(true){
if((i__59406__auto___120454 < len__59405__auto___120453)){
args__59412__auto__.push((arguments[i__59406__auto___120454]));

var G__120455 = (i__59406__auto___120454 + (1));
i__59406__auto___120454 = G__120455;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((1) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59413__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq120451){
var G__120452 = cljs.core.first.call(null,seq120451);
var seq120451__$1 = cljs.core.next.call(null,seq120451);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__120452,seq120451__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__59412__auto__ = [];
var len__59405__auto___120458 = arguments.length;
var i__59406__auto___120459 = (0);
while(true){
if((i__59406__auto___120459 < len__59405__auto___120458)){
args__59412__auto__.push((arguments[i__59406__auto___120459]));

var G__120460 = (i__59406__auto___120459 + (1));
i__59406__auto___120459 = G__120460;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((1) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59413__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq120456){
var G__120457 = cljs.core.first.call(null,seq120456);
var seq120456__$1 = cljs.core.next.call(null,seq120456);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__120457,seq120456__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__120462 = arguments.length;
switch (G__120462) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj120464 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__58128__auto__ = start_index;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return (0);
}
})()};
return obj120464;
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
var args__59412__auto__ = [];
var len__59405__auto___120472 = arguments.length;
var i__59406__auto___120473 = (0);
while(true){
if((i__59406__auto___120473 < len__59405__auto___120472)){
args__59412__auto__.push((arguments[i__59406__auto___120473]));

var G__120474 = (i__59406__auto___120473 + (1));
i__59406__auto___120473 = G__120474;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((1) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59413__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__120468){
var vec__120469 = p__120468;
var state_override_fn = cljs.core.nth.call(null,vec__120469,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq120466){
var G__120467 = cljs.core.first.call(null,seq120466);
var seq120466__$1 = cljs.core.next.call(null,seq120466);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__120467,seq120466__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_120475 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_120475;
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
var G__120476 = name;
switch (G__120476) {
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
var vec__120478 = tag;
var html_tag = cljs.core.nth.call(null,vec__120478,(0),null);
var style = cljs.core.nth.call(null,vec__120478,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_120481 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_120481;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_120482 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_120483 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_120483;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_120482;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__120484 = initial_value;
var G__120485 = value.call(null);
initial_value = G__120484;
value = G__120485;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__120486 = initial_value;
var G__120487 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__120486;
value = G__120487;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__120488 = initial_value;
var G__120489 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__120488;
value = G__120489;
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

//# sourceMappingURL=templating.js.map?rel=1505927836435
