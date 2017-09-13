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
var o24474 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24474["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24475 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24475["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24476 = temp__6736__auto____$2;
return (o24476["make_template"]);
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
var o24477 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24477["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24478 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24478["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24479 = temp__6736__auto____$2;
return (o24479["make_group"]);
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
var o24480 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24480["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24481 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24481["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24482 = temp__6736__auto____$2;
return (o24482["make_reference"]);
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
var o24483 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24483["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24484 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24484["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24485 = temp__6736__auto____$2;
return (o24485["make_surrogate"]);
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
var o24486 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24486["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24487 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24487["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24488 = temp__6736__auto____$2;
return (o24488["render_markup"]);
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
var o24489 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24489["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24490 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24490["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24491 = temp__6736__auto____$2;
return (o24491["_LT_header_GT_"]);
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
var o24492 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24492["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24493 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24493["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24494 = temp__6736__auto____$2;
return (o24494["_LT_standard_body_GT_"]);
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
var len__11087__auto___24496 = arguments.length;
var i__11088__auto___24497 = (0);
while(true){
if((i__11088__auto___24497 < len__11087__auto___24496)){
args__11094__auto__.push((arguments[i__11088__auto___24497]));

var G__24498 = (i__11088__auto___24497 + (1));
i__11088__auto___24497 = G__24498;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq24495){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24495));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24500 = arguments.length;
var i__11088__auto___24501 = (0);
while(true){
if((i__11088__auto___24501 < len__11087__auto___24500)){
args__11094__auto__.push((arguments[i__11088__auto___24501]));

var G__24502 = (i__11088__auto___24501 + (1));
i__11088__auto___24501 = G__24502;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq24499){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24499));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24504 = arguments.length;
var i__11088__auto___24505 = (0);
while(true){
if((i__11088__auto___24505 < len__11087__auto___24504)){
args__11094__auto__.push((arguments[i__11088__auto___24505]));

var G__24506 = (i__11088__auto___24505 + (1));
i__11088__auto___24505 = G__24506;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq24503){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24503));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24508 = arguments.length;
var i__11088__auto___24509 = (0);
while(true){
if((i__11088__auto___24509 < len__11087__auto___24508)){
args__11094__auto__.push((arguments[i__11088__auto___24509]));

var G__24510 = (i__11088__auto___24509 + (1));
i__11088__auto___24509 = G__24510;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq24507){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24507));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24512 = arguments.length;
var i__11088__auto___24513 = (0);
while(true){
if((i__11088__auto___24513 < len__11087__auto___24512)){
args__11094__auto__.push((arguments[i__11088__auto___24513]));

var G__24514 = (i__11088__auto___24513 + (1));
i__11088__auto___24513 = G__24514;
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

devtools.format.template.cljs$lang$applyTo = (function (seq24511){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24511));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24516 = arguments.length;
var i__11088__auto___24517 = (0);
while(true){
if((i__11088__auto___24517 < len__11087__auto___24516)){
args__11094__auto__.push((arguments[i__11088__auto___24517]));

var G__24518 = (i__11088__auto___24517 + (1));
i__11088__auto___24517 = G__24518;
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

devtools.format.group.cljs$lang$applyTo = (function (seq24515){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24515));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24520 = arguments.length;
var i__11088__auto___24521 = (0);
while(true){
if((i__11088__auto___24521 < len__11087__auto___24520)){
args__11094__auto__.push((arguments[i__11088__auto___24521]));

var G__24522 = (i__11088__auto___24521 + (1));
i__11088__auto___24521 = G__24522;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq24519){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24519));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24530 = arguments.length;
var i__11088__auto___24531 = (0);
while(true){
if((i__11088__auto___24531 < len__11087__auto___24530)){
args__11094__auto__.push((arguments[i__11088__auto___24531]));

var G__24532 = (i__11088__auto___24531 + (1));
i__11088__auto___24531 = G__24532;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24526){
var vec__24527 = p__24526;
var state_override = cljs.core.nth.call(null,vec__24527,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__24527,state_override){
return (function (p1__24523_SHARP_){
return cljs.core.merge.call(null,p1__24523_SHARP_,state_override);
});})(vec__24527,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq24524){
var G__24525 = cljs.core.first.call(null,seq24524);
var seq24524__$1 = cljs.core.next.call(null,seq24524);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__24525,seq24524__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24534 = arguments.length;
var i__11088__auto___24535 = (0);
while(true){
if((i__11088__auto___24535 < len__11087__auto___24534)){
args__11094__auto__.push((arguments[i__11088__auto___24535]));

var G__24536 = (i__11088__auto___24535 + (1));
i__11088__auto___24535 = G__24536;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq24533){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24533));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24539 = arguments.length;
var i__11088__auto___24540 = (0);
while(true){
if((i__11088__auto___24540 < len__11087__auto___24539)){
args__11094__auto__.push((arguments[i__11088__auto___24540]));

var G__24541 = (i__11088__auto___24540 + (1));
i__11088__auto___24540 = G__24541;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq24537){
var G__24538 = cljs.core.first.call(null,seq24537);
var seq24537__$1 = cljs.core.next.call(null,seq24537);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__24538,seq24537__$1);
});


//# sourceMappingURL=format.js.map?rel=1505319634948
