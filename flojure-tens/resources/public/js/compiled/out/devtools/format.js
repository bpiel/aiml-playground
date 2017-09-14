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
var x__58894__auto__ = (((value == null))?null:value);
var m__58895__auto__ = (devtools.format._header[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,value);
} else {
var m__58895__auto____$1 = (devtools.format._header["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,value);
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
var x__58894__auto__ = (((value == null))?null:value);
var m__58895__auto__ = (devtools.format._has_body[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,value);
} else {
var m__58895__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,value);
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
var x__58894__auto__ = (((value == null))?null:value);
var m__58895__auto__ = (devtools.format._body[goog.typeOf(x__58894__auto__)]);
if(!((m__58895__auto__ == null))){
return m__58895__auto__.call(null,value);
} else {
var m__58895__auto____$1 = (devtools.format._body["_"]);
if(!((m__58895__auto____$1 == null))){
return m__58895__auto____$1.call(null,value);
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
var o71500 = temp__6736__auto__;
var temp__6736__auto____$1 = (o71500["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o71501 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o71501["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o71502 = temp__6736__auto____$2;
return (o71502["make_template"]);
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
var o71503 = temp__6736__auto__;
var temp__6736__auto____$1 = (o71503["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o71504 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o71504["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o71505 = temp__6736__auto____$2;
return (o71505["make_group"]);
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
var o71506 = temp__6736__auto__;
var temp__6736__auto____$1 = (o71506["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o71507 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o71507["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o71508 = temp__6736__auto____$2;
return (o71508["make_reference"]);
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
var o71509 = temp__6736__auto__;
var temp__6736__auto____$1 = (o71509["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o71510 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o71510["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o71511 = temp__6736__auto____$2;
return (o71511["make_surrogate"]);
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
var o71512 = temp__6736__auto__;
var temp__6736__auto____$1 = (o71512["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o71513 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o71513["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o71514 = temp__6736__auto____$2;
return (o71514["render_markup"]);
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
var o71515 = temp__6736__auto__;
var temp__6736__auto____$1 = (o71515["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o71516 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o71516["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o71517 = temp__6736__auto____$2;
return (o71517["_LT_header_GT_"]);
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
var o71518 = temp__6736__auto__;
var temp__6736__auto____$1 = (o71518["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o71519 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o71519["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o71520 = temp__6736__auto____$2;
return (o71520["_LT_standard_body_GT_"]);
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
var args__59445__auto__ = [];
var len__59438__auto___71522 = arguments.length;
var i__59439__auto___71523 = (0);
while(true){
if((i__59439__auto___71523 < len__59438__auto___71522)){
args__59445__auto__.push((arguments[i__59439__auto___71523]));

var G__71524 = (i__59439__auto___71523 + (1));
i__59439__auto___71523 = G__71524;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq71521){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71521));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71526 = arguments.length;
var i__59439__auto___71527 = (0);
while(true){
if((i__59439__auto___71527 < len__59438__auto___71526)){
args__59445__auto__.push((arguments[i__59439__auto___71527]));

var G__71528 = (i__59439__auto___71527 + (1));
i__59439__auto___71527 = G__71528;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq71525){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71525));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71530 = arguments.length;
var i__59439__auto___71531 = (0);
while(true){
if((i__59439__auto___71531 < len__59438__auto___71530)){
args__59445__auto__.push((arguments[i__59439__auto___71531]));

var G__71532 = (i__59439__auto___71531 + (1));
i__59439__auto___71531 = G__71532;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq71529){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71529));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71534 = arguments.length;
var i__59439__auto___71535 = (0);
while(true){
if((i__59439__auto___71535 < len__59438__auto___71534)){
args__59445__auto__.push((arguments[i__59439__auto___71535]));

var G__71536 = (i__59439__auto___71535 + (1));
i__59439__auto___71535 = G__71536;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq71533){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71533));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71538 = arguments.length;
var i__59439__auto___71539 = (0);
while(true){
if((i__59439__auto___71539 < len__59438__auto___71538)){
args__59445__auto__.push((arguments[i__59439__auto___71539]));

var G__71540 = (i__59439__auto___71539 + (1));
i__59439__auto___71539 = G__71540;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq71537){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71537));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71542 = arguments.length;
var i__59439__auto___71543 = (0);
while(true){
if((i__59439__auto___71543 < len__59438__auto___71542)){
args__59445__auto__.push((arguments[i__59439__auto___71543]));

var G__71544 = (i__59439__auto___71543 + (1));
i__59439__auto___71543 = G__71544;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq71541){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71541));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71546 = arguments.length;
var i__59439__auto___71547 = (0);
while(true){
if((i__59439__auto___71547 < len__59438__auto___71546)){
args__59445__auto__.push((arguments[i__59439__auto___71547]));

var G__71548 = (i__59439__auto___71547 + (1));
i__59439__auto___71547 = G__71548;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq71545){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71545));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71556 = arguments.length;
var i__59439__auto___71557 = (0);
while(true){
if((i__59439__auto___71557 < len__59438__auto___71556)){
args__59445__auto__.push((arguments[i__59439__auto___71557]));

var G__71558 = (i__59439__auto___71557 + (1));
i__59439__auto___71557 = G__71558;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((1) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59446__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__71552){
var vec__71553 = p__71552;
var state_override = cljs.core.nth.call(null,vec__71553,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__71553,state_override){
return (function (p1__71549_SHARP_){
return cljs.core.merge.call(null,p1__71549_SHARP_,state_override);
});})(vec__71553,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq71550){
var G__71551 = cljs.core.first.call(null,seq71550);
var seq71550__$1 = cljs.core.next.call(null,seq71550);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__71551,seq71550__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71560 = arguments.length;
var i__59439__auto___71561 = (0);
while(true){
if((i__59439__auto___71561 < len__59438__auto___71560)){
args__59445__auto__.push((arguments[i__59439__auto___71561]));

var G__71562 = (i__59439__auto___71561 + (1));
i__59439__auto___71561 = G__71562;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq71559){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71559));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__59445__auto__ = [];
var len__59438__auto___71565 = arguments.length;
var i__59439__auto___71566 = (0);
while(true){
if((i__59439__auto___71566 < len__59438__auto___71565)){
args__59445__auto__.push((arguments[i__59439__auto___71566]));

var G__71567 = (i__59439__auto___71566 + (1));
i__59439__auto___71566 = G__71567;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((1) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59446__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq71563){
var G__71564 = cljs.core.first.call(null,seq71563);
var seq71563__$1 = cljs.core.next.call(null,seq71563);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__71564,seq71563__$1);
});


//# sourceMappingURL=format.js.map?rel=1505406794003
