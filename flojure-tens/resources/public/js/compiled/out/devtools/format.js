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
var x__65150__auto__ = (((value == null))?null:value);
var m__65151__auto__ = (devtools.format._header[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,value);
} else {
var m__65151__auto____$1 = (devtools.format._header["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,value);
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
var x__65150__auto__ = (((value == null))?null:value);
var m__65151__auto__ = (devtools.format._has_body[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,value);
} else {
var m__65151__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,value);
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
var x__65150__auto__ = (((value == null))?null:value);
var m__65151__auto__ = (devtools.format._body[goog.typeOf(x__65150__auto__)]);
if(!((m__65151__auto__ == null))){
return m__65151__auto__.call(null,value);
} else {
var m__65151__auto____$1 = (devtools.format._body["_"]);
if(!((m__65151__auto____$1 == null))){
return m__65151__auto____$1.call(null,value);
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
var o79001 = temp__6736__auto__;
var temp__6736__auto____$1 = (o79001["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o79002 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o79002["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o79003 = temp__6736__auto____$2;
return (o79003["make_template"]);
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
var o79004 = temp__6736__auto__;
var temp__6736__auto____$1 = (o79004["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o79005 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o79005["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o79006 = temp__6736__auto____$2;
return (o79006["make_group"]);
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
var o79007 = temp__6736__auto__;
var temp__6736__auto____$1 = (o79007["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o79008 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o79008["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o79009 = temp__6736__auto____$2;
return (o79009["make_reference"]);
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
var o79010 = temp__6736__auto__;
var temp__6736__auto____$1 = (o79010["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o79011 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o79011["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o79012 = temp__6736__auto____$2;
return (o79012["make_surrogate"]);
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
var o79013 = temp__6736__auto__;
var temp__6736__auto____$1 = (o79013["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o79014 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o79014["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o79015 = temp__6736__auto____$2;
return (o79015["render_markup"]);
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
var o79016 = temp__6736__auto__;
var temp__6736__auto____$1 = (o79016["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o79017 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o79017["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o79018 = temp__6736__auto____$2;
return (o79018["_LT_header_GT_"]);
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
var o79019 = temp__6736__auto__;
var temp__6736__auto____$1 = (o79019["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o79020 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o79020["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o79021 = temp__6736__auto____$2;
return (o79021["_LT_standard_body_GT_"]);
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
var args__65701__auto__ = [];
var len__65694__auto___79023 = arguments.length;
var i__65695__auto___79024 = (0);
while(true){
if((i__65695__auto___79024 < len__65694__auto___79023)){
args__65701__auto__.push((arguments[i__65695__auto___79024]));

var G__79025 = (i__65695__auto___79024 + (1));
i__65695__auto___79024 = G__79025;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq79022){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79022));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79027 = arguments.length;
var i__65695__auto___79028 = (0);
while(true){
if((i__65695__auto___79028 < len__65694__auto___79027)){
args__65701__auto__.push((arguments[i__65695__auto___79028]));

var G__79029 = (i__65695__auto___79028 + (1));
i__65695__auto___79028 = G__79029;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq79026){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79026));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79031 = arguments.length;
var i__65695__auto___79032 = (0);
while(true){
if((i__65695__auto___79032 < len__65694__auto___79031)){
args__65701__auto__.push((arguments[i__65695__auto___79032]));

var G__79033 = (i__65695__auto___79032 + (1));
i__65695__auto___79032 = G__79033;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq79030){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79030));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79035 = arguments.length;
var i__65695__auto___79036 = (0);
while(true){
if((i__65695__auto___79036 < len__65694__auto___79035)){
args__65701__auto__.push((arguments[i__65695__auto___79036]));

var G__79037 = (i__65695__auto___79036 + (1));
i__65695__auto___79036 = G__79037;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq79034){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79034));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79039 = arguments.length;
var i__65695__auto___79040 = (0);
while(true){
if((i__65695__auto___79040 < len__65694__auto___79039)){
args__65701__auto__.push((arguments[i__65695__auto___79040]));

var G__79041 = (i__65695__auto___79040 + (1));
i__65695__auto___79040 = G__79041;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq79038){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79038));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79043 = arguments.length;
var i__65695__auto___79044 = (0);
while(true){
if((i__65695__auto___79044 < len__65694__auto___79043)){
args__65701__auto__.push((arguments[i__65695__auto___79044]));

var G__79045 = (i__65695__auto___79044 + (1));
i__65695__auto___79044 = G__79045;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq79042){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79042));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79047 = arguments.length;
var i__65695__auto___79048 = (0);
while(true){
if((i__65695__auto___79048 < len__65694__auto___79047)){
args__65701__auto__.push((arguments[i__65695__auto___79048]));

var G__79049 = (i__65695__auto___79048 + (1));
i__65695__auto___79048 = G__79049;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq79046){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79046));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79057 = arguments.length;
var i__65695__auto___79058 = (0);
while(true){
if((i__65695__auto___79058 < len__65694__auto___79057)){
args__65701__auto__.push((arguments[i__65695__auto___79058]));

var G__79059 = (i__65695__auto___79058 + (1));
i__65695__auto___79058 = G__79059;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((1) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__65702__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__79053){
var vec__79054 = p__79053;
var state_override = cljs.core.nth.call(null,vec__79054,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__79054,state_override){
return (function (p1__79050_SHARP_){
return cljs.core.merge.call(null,p1__79050_SHARP_,state_override);
});})(vec__79054,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq79051){
var G__79052 = cljs.core.first.call(null,seq79051);
var seq79051__$1 = cljs.core.next.call(null,seq79051);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__79052,seq79051__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79061 = arguments.length;
var i__65695__auto___79062 = (0);
while(true){
if((i__65695__auto___79062 < len__65694__auto___79061)){
args__65701__auto__.push((arguments[i__65695__auto___79062]));

var G__79063 = (i__65695__auto___79062 + (1));
i__65695__auto___79062 = G__79063;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq79060){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq79060));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__65701__auto__ = [];
var len__65694__auto___79066 = arguments.length;
var i__65695__auto___79067 = (0);
while(true){
if((i__65695__auto___79067 < len__65694__auto___79066)){
args__65701__auto__.push((arguments[i__65695__auto___79067]));

var G__79068 = (i__65695__auto___79067 + (1));
i__65695__auto___79067 = G__79068;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((1) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__65702__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq79064){
var G__79065 = cljs.core.first.call(null,seq79064);
var seq79064__$1 = cljs.core.next.call(null,seq79064);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__79065,seq79064__$1);
});


//# sourceMappingURL=format.js.map?rel=1506558358718
