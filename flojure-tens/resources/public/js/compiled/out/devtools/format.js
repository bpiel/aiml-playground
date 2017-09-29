// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__58868__auto__ = (((value == null))?null:value);
var m__58869__auto__ = (devtools.format._header[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,value);
} else {
var m__58869__auto____$1 = (devtools.format._header["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__58868__auto__ = (((value == null))?null:value);
var m__58869__auto__ = (devtools.format._has_body[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,value);
} else {
var m__58869__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__58868__auto__ = (((value == null))?null:value);
var m__58869__auto__ = (devtools.format._body[goog.typeOf(x__58868__auto__)]);
if(!((m__58869__auto__ == null))){
return m__58869__auto__.call(null,value);
} else {
var m__58869__auto____$1 = (devtools.format._body["_"]);
if(!((m__58869__auto____$1 == null))){
return m__58869__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o72437 = temp__6736__auto__;
var temp__6736__auto____$1 = (o72437["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o72438 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o72438["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o72439 = temp__6736__auto____$2;
return (o72439["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o72440 = temp__6736__auto__;
var temp__6736__auto____$1 = (o72440["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o72441 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o72441["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o72442 = temp__6736__auto____$2;
return (o72442["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o72443 = temp__6736__auto__;
var temp__6736__auto____$1 = (o72443["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o72444 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o72444["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o72445 = temp__6736__auto____$2;
return (o72445["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o72446 = temp__6736__auto__;
var temp__6736__auto____$1 = (o72446["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o72447 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o72447["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o72448 = temp__6736__auto____$2;
return (o72448["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o72449 = temp__6736__auto__;
var temp__6736__auto____$1 = (o72449["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o72450 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o72450["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o72451 = temp__6736__auto____$2;
return (o72451["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o72452 = temp__6736__auto__;
var temp__6736__auto____$1 = (o72452["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o72453 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o72453["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o72454 = temp__6736__auto____$2;
return (o72454["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o72455 = temp__6736__auto__;
var temp__6736__auto____$1 = (o72455["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o72456 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o72456["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o72457 = temp__6736__auto____$2;
return (o72457["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72459 = arguments.length;
var i__59413__auto___72460 = (0);
while(true){
if((i__59413__auto___72460 < len__59412__auto___72459)){
args__59419__auto__.push((arguments[i__59413__auto___72460]));

var G__72461 = (i__59413__auto___72460 + (1));
i__59413__auto___72460 = G__72461;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq72458){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72458));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72463 = arguments.length;
var i__59413__auto___72464 = (0);
while(true){
if((i__59413__auto___72464 < len__59412__auto___72463)){
args__59419__auto__.push((arguments[i__59413__auto___72464]));

var G__72465 = (i__59413__auto___72464 + (1));
i__59413__auto___72464 = G__72465;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq72462){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72462));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72467 = arguments.length;
var i__59413__auto___72468 = (0);
while(true){
if((i__59413__auto___72468 < len__59412__auto___72467)){
args__59419__auto__.push((arguments[i__59413__auto___72468]));

var G__72469 = (i__59413__auto___72468 + (1));
i__59413__auto___72468 = G__72469;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq72466){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72466));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72471 = arguments.length;
var i__59413__auto___72472 = (0);
while(true){
if((i__59413__auto___72472 < len__59412__auto___72471)){
args__59419__auto__.push((arguments[i__59413__auto___72472]));

var G__72473 = (i__59413__auto___72472 + (1));
i__59413__auto___72472 = G__72473;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq72470){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72470));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72475 = arguments.length;
var i__59413__auto___72476 = (0);
while(true){
if((i__59413__auto___72476 < len__59412__auto___72475)){
args__59419__auto__.push((arguments[i__59413__auto___72476]));

var G__72477 = (i__59413__auto___72476 + (1));
i__59413__auto___72476 = G__72477;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq72474){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72474));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72479 = arguments.length;
var i__59413__auto___72480 = (0);
while(true){
if((i__59413__auto___72480 < len__59412__auto___72479)){
args__59419__auto__.push((arguments[i__59413__auto___72480]));

var G__72481 = (i__59413__auto___72480 + (1));
i__59413__auto___72480 = G__72481;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq72478){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72478));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72483 = arguments.length;
var i__59413__auto___72484 = (0);
while(true){
if((i__59413__auto___72484 < len__59412__auto___72483)){
args__59419__auto__.push((arguments[i__59413__auto___72484]));

var G__72485 = (i__59413__auto___72484 + (1));
i__59413__auto___72484 = G__72485;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq72482){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72482));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72493 = arguments.length;
var i__59413__auto___72494 = (0);
while(true){
if((i__59413__auto___72494 < len__59412__auto___72493)){
args__59419__auto__.push((arguments[i__59413__auto___72494]));

var G__72495 = (i__59413__auto___72494 + (1));
i__59413__auto___72494 = G__72495;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((1) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59420__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__72489){
var vec__72490 = p__72489;
var state_override = cljs.core.nth.call(null,vec__72490,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__72490,state_override){
return (function (p1__72486_SHARP_){
return cljs.core.merge.call(null,p1__72486_SHARP_,state_override);
});})(vec__72490,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq72487){
var G__72488 = cljs.core.first.call(null,seq72487);
var seq72487__$1 = cljs.core.next.call(null,seq72487);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__72488,seq72487__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72497 = arguments.length;
var i__59413__auto___72498 = (0);
while(true){
if((i__59413__auto___72498 < len__59412__auto___72497)){
args__59419__auto__.push((arguments[i__59413__auto___72498]));

var G__72499 = (i__59413__auto___72498 + (1));
i__59413__auto___72498 = G__72499;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq72496){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72496));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72502 = arguments.length;
var i__59413__auto___72503 = (0);
while(true){
if((i__59413__auto___72503 < len__59412__auto___72502)){
args__59419__auto__.push((arguments[i__59413__auto___72503]));

var G__72504 = (i__59413__auto___72503 + (1));
i__59413__auto___72503 = G__72504;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((1) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59420__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq72500){
var G__72501 = cljs.core.first.call(null,seq72500);
var seq72500__$1 = cljs.core.next.call(null,seq72500);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__72501,seq72500__$1);
});


//# sourceMappingURL=format.js.map?rel=1506641520106
