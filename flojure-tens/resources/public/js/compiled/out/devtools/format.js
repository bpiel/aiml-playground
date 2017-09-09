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
var o24473 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24473["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24474 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24474["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24475 = temp__6736__auto____$2;
return (o24475["make_template"]);
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
var o24476 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24476["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24477 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24477["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24478 = temp__6736__auto____$2;
return (o24478["make_group"]);
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
var o24479 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24479["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24480 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24480["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24481 = temp__6736__auto____$2;
return (o24481["make_reference"]);
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
var o24482 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24482["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24483 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24483["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24484 = temp__6736__auto____$2;
return (o24484["make_surrogate"]);
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
var o24485 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24485["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24486 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24486["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24487 = temp__6736__auto____$2;
return (o24487["render_markup"]);
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
var o24488 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24488["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24489 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24489["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24490 = temp__6736__auto____$2;
return (o24490["_LT_header_GT_"]);
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
var o24491 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24491["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24492 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24492["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24493 = temp__6736__auto____$2;
return (o24493["_LT_standard_body_GT_"]);
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
var len__11087__auto___24495 = arguments.length;
var i__11088__auto___24496 = (0);
while(true){
if((i__11088__auto___24496 < len__11087__auto___24495)){
args__11094__auto__.push((arguments[i__11088__auto___24496]));

var G__24497 = (i__11088__auto___24496 + (1));
i__11088__auto___24496 = G__24497;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq24494){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24494));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24499 = arguments.length;
var i__11088__auto___24500 = (0);
while(true){
if((i__11088__auto___24500 < len__11087__auto___24499)){
args__11094__auto__.push((arguments[i__11088__auto___24500]));

var G__24501 = (i__11088__auto___24500 + (1));
i__11088__auto___24500 = G__24501;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq24498){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24498));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24503 = arguments.length;
var i__11088__auto___24504 = (0);
while(true){
if((i__11088__auto___24504 < len__11087__auto___24503)){
args__11094__auto__.push((arguments[i__11088__auto___24504]));

var G__24505 = (i__11088__auto___24504 + (1));
i__11088__auto___24504 = G__24505;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq24502){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24502));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24507 = arguments.length;
var i__11088__auto___24508 = (0);
while(true){
if((i__11088__auto___24508 < len__11087__auto___24507)){
args__11094__auto__.push((arguments[i__11088__auto___24508]));

var G__24509 = (i__11088__auto___24508 + (1));
i__11088__auto___24508 = G__24509;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq24506){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24506));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24511 = arguments.length;
var i__11088__auto___24512 = (0);
while(true){
if((i__11088__auto___24512 < len__11087__auto___24511)){
args__11094__auto__.push((arguments[i__11088__auto___24512]));

var G__24513 = (i__11088__auto___24512 + (1));
i__11088__auto___24512 = G__24513;
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

devtools.format.template.cljs$lang$applyTo = (function (seq24510){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24510));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24515 = arguments.length;
var i__11088__auto___24516 = (0);
while(true){
if((i__11088__auto___24516 < len__11087__auto___24515)){
args__11094__auto__.push((arguments[i__11088__auto___24516]));

var G__24517 = (i__11088__auto___24516 + (1));
i__11088__auto___24516 = G__24517;
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

devtools.format.group.cljs$lang$applyTo = (function (seq24514){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24514));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24519 = arguments.length;
var i__11088__auto___24520 = (0);
while(true){
if((i__11088__auto___24520 < len__11087__auto___24519)){
args__11094__auto__.push((arguments[i__11088__auto___24520]));

var G__24521 = (i__11088__auto___24520 + (1));
i__11088__auto___24520 = G__24521;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq24518){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24518));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24529 = arguments.length;
var i__11088__auto___24530 = (0);
while(true){
if((i__11088__auto___24530 < len__11087__auto___24529)){
args__11094__auto__.push((arguments[i__11088__auto___24530]));

var G__24531 = (i__11088__auto___24530 + (1));
i__11088__auto___24530 = G__24531;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24525){
var vec__24526 = p__24525;
var state_override = cljs.core.nth.call(null,vec__24526,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__24526,state_override){
return (function (p1__24522_SHARP_){
return cljs.core.merge.call(null,p1__24522_SHARP_,state_override);
});})(vec__24526,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq24523){
var G__24524 = cljs.core.first.call(null,seq24523);
var seq24523__$1 = cljs.core.next.call(null,seq24523);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__24524,seq24523__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24533 = arguments.length;
var i__11088__auto___24534 = (0);
while(true){
if((i__11088__auto___24534 < len__11087__auto___24533)){
args__11094__auto__.push((arguments[i__11088__auto___24534]));

var G__24535 = (i__11088__auto___24534 + (1));
i__11088__auto___24534 = G__24535;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq24532){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24532));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24538 = arguments.length;
var i__11088__auto___24539 = (0);
while(true){
if((i__11088__auto___24539 < len__11087__auto___24538)){
args__11094__auto__.push((arguments[i__11088__auto___24539]));

var G__24540 = (i__11088__auto___24539 + (1));
i__11088__auto___24539 = G__24540;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq24536){
var G__24537 = cljs.core.first.call(null,seq24536);
var seq24536__$1 = cljs.core.next.call(null,seq24536);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__24537,seq24536__$1);
});


//# sourceMappingURL=format.js.map?rel=1504914137850
