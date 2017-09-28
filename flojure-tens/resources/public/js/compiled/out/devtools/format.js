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
var x__10543__auto__ = (((value == null))?null:value);
var m__10544__auto__ = (devtools.format._header[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,value);
} else {
var m__10544__auto____$1 = (devtools.format._header["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,value);
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
var x__10543__auto__ = (((value == null))?null:value);
var m__10544__auto__ = (devtools.format._has_body[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,value);
} else {
var m__10544__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,value);
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
var x__10543__auto__ = (((value == null))?null:value);
var m__10544__auto__ = (devtools.format._body[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,value);
} else {
var m__10544__auto____$1 = (devtools.format._body["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,value);
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
var o25439 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25439["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25440 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25440["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25441 = temp__6736__auto____$2;
return (o25441["make_template"]);
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
var o25442 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25442["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25443 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25443["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25444 = temp__6736__auto____$2;
return (o25444["make_group"]);
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
var o25445 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25445["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25446 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25446["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25447 = temp__6736__auto____$2;
return (o25447["make_reference"]);
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
var o25448 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25448["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25449 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25449["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25450 = temp__6736__auto____$2;
return (o25450["make_surrogate"]);
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
var o25451 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25451["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25452 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25452["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25453 = temp__6736__auto____$2;
return (o25453["render_markup"]);
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
var o25454 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25454["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25455 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25455["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25456 = temp__6736__auto____$2;
return (o25456["_LT_header_GT_"]);
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
var o25457 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25457["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25458 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25458["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25459 = temp__6736__auto____$2;
return (o25459["_LT_standard_body_GT_"]);
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
var args__11094__auto__ = [];
var len__11087__auto___25461 = arguments.length;
var i__11088__auto___25462 = (0);
while(true){
if((i__11088__auto___25462 < len__11087__auto___25461)){
args__11094__auto__.push((arguments[i__11088__auto___25462]));

var G__25463 = (i__11088__auto___25462 + (1));
i__11088__auto___25462 = G__25463;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq25460){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25460));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25465 = arguments.length;
var i__11088__auto___25466 = (0);
while(true){
if((i__11088__auto___25466 < len__11087__auto___25465)){
args__11094__auto__.push((arguments[i__11088__auto___25466]));

var G__25467 = (i__11088__auto___25466 + (1));
i__11088__auto___25466 = G__25467;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq25464){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25464));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25469 = arguments.length;
var i__11088__auto___25470 = (0);
while(true){
if((i__11088__auto___25470 < len__11087__auto___25469)){
args__11094__auto__.push((arguments[i__11088__auto___25470]));

var G__25471 = (i__11088__auto___25470 + (1));
i__11088__auto___25470 = G__25471;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq25468){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25468));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25473 = arguments.length;
var i__11088__auto___25474 = (0);
while(true){
if((i__11088__auto___25474 < len__11087__auto___25473)){
args__11094__auto__.push((arguments[i__11088__auto___25474]));

var G__25475 = (i__11088__auto___25474 + (1));
i__11088__auto___25474 = G__25475;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq25472){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25472));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25477 = arguments.length;
var i__11088__auto___25478 = (0);
while(true){
if((i__11088__auto___25478 < len__11087__auto___25477)){
args__11094__auto__.push((arguments[i__11088__auto___25478]));

var G__25479 = (i__11088__auto___25478 + (1));
i__11088__auto___25478 = G__25479;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq25476){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25476));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25481 = arguments.length;
var i__11088__auto___25482 = (0);
while(true){
if((i__11088__auto___25482 < len__11087__auto___25481)){
args__11094__auto__.push((arguments[i__11088__auto___25482]));

var G__25483 = (i__11088__auto___25482 + (1));
i__11088__auto___25482 = G__25483;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq25480){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25480));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25485 = arguments.length;
var i__11088__auto___25486 = (0);
while(true){
if((i__11088__auto___25486 < len__11087__auto___25485)){
args__11094__auto__.push((arguments[i__11088__auto___25486]));

var G__25487 = (i__11088__auto___25486 + (1));
i__11088__auto___25486 = G__25487;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq25484){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25484));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25495 = arguments.length;
var i__11088__auto___25496 = (0);
while(true){
if((i__11088__auto___25496 < len__11087__auto___25495)){
args__11094__auto__.push((arguments[i__11088__auto___25496]));

var G__25497 = (i__11088__auto___25496 + (1));
i__11088__auto___25496 = G__25497;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__25491){
var vec__25492 = p__25491;
var state_override = cljs.core.nth.call(null,vec__25492,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__25492,state_override){
return (function (p1__25488_SHARP_){
return cljs.core.merge.call(null,p1__25488_SHARP_,state_override);
});})(vec__25492,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq25489){
var G__25490 = cljs.core.first.call(null,seq25489);
var seq25489__$1 = cljs.core.next.call(null,seq25489);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__25490,seq25489__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25499 = arguments.length;
var i__11088__auto___25500 = (0);
while(true){
if((i__11088__auto___25500 < len__11087__auto___25499)){
args__11094__auto__.push((arguments[i__11088__auto___25500]));

var G__25501 = (i__11088__auto___25500 + (1));
i__11088__auto___25500 = G__25501;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq25498){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25498));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25504 = arguments.length;
var i__11088__auto___25505 = (0);
while(true){
if((i__11088__auto___25505 < len__11087__auto___25504)){
args__11094__auto__.push((arguments[i__11088__auto___25505]));

var G__25506 = (i__11088__auto___25505 + (1));
i__11088__auto___25505 = G__25506;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq25502){
var G__25503 = cljs.core.first.call(null,seq25502);
var seq25502__$1 = cljs.core.next.call(null,seq25502);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__25503,seq25502__$1);
});


//# sourceMappingURL=format.js.map?rel=1506616996707
