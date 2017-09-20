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
var x__58861__auto__ = (((value == null))?null:value);
var m__58862__auto__ = (devtools.format._header[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,value);
} else {
var m__58862__auto____$1 = (devtools.format._header["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,value);
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
var x__58861__auto__ = (((value == null))?null:value);
var m__58862__auto__ = (devtools.format._has_body[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,value);
} else {
var m__58862__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,value);
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
var x__58861__auto__ = (((value == null))?null:value);
var m__58862__auto__ = (devtools.format._body[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,value);
} else {
var m__58862__auto____$1 = (devtools.format._body["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,value);
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
var o119086 = temp__6736__auto__;
var temp__6736__auto____$1 = (o119086["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o119087 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o119087["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o119088 = temp__6736__auto____$2;
return (o119088["make_template"]);
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
var o119089 = temp__6736__auto__;
var temp__6736__auto____$1 = (o119089["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o119090 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o119090["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o119091 = temp__6736__auto____$2;
return (o119091["make_group"]);
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
var o119092 = temp__6736__auto__;
var temp__6736__auto____$1 = (o119092["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o119093 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o119093["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o119094 = temp__6736__auto____$2;
return (o119094["make_reference"]);
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
var o119095 = temp__6736__auto__;
var temp__6736__auto____$1 = (o119095["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o119096 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o119096["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o119097 = temp__6736__auto____$2;
return (o119097["make_surrogate"]);
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
var o119098 = temp__6736__auto__;
var temp__6736__auto____$1 = (o119098["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o119099 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o119099["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o119100 = temp__6736__auto____$2;
return (o119100["render_markup"]);
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
var o119101 = temp__6736__auto__;
var temp__6736__auto____$1 = (o119101["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o119102 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o119102["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o119103 = temp__6736__auto____$2;
return (o119103["_LT_header_GT_"]);
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
var o119104 = temp__6736__auto__;
var temp__6736__auto____$1 = (o119104["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o119105 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o119105["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o119106 = temp__6736__auto____$2;
return (o119106["_LT_standard_body_GT_"]);
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
var args__59412__auto__ = [];
var len__59405__auto___119108 = arguments.length;
var i__59406__auto___119109 = (0);
while(true){
if((i__59406__auto___119109 < len__59405__auto___119108)){
args__59412__auto__.push((arguments[i__59406__auto___119109]));

var G__119110 = (i__59406__auto___119109 + (1));
i__59406__auto___119109 = G__119110;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq119107){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119107));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119112 = arguments.length;
var i__59406__auto___119113 = (0);
while(true){
if((i__59406__auto___119113 < len__59405__auto___119112)){
args__59412__auto__.push((arguments[i__59406__auto___119113]));

var G__119114 = (i__59406__auto___119113 + (1));
i__59406__auto___119113 = G__119114;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq119111){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119111));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119116 = arguments.length;
var i__59406__auto___119117 = (0);
while(true){
if((i__59406__auto___119117 < len__59405__auto___119116)){
args__59412__auto__.push((arguments[i__59406__auto___119117]));

var G__119118 = (i__59406__auto___119117 + (1));
i__59406__auto___119117 = G__119118;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq119115){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119115));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119120 = arguments.length;
var i__59406__auto___119121 = (0);
while(true){
if((i__59406__auto___119121 < len__59405__auto___119120)){
args__59412__auto__.push((arguments[i__59406__auto___119121]));

var G__119122 = (i__59406__auto___119121 + (1));
i__59406__auto___119121 = G__119122;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq119119){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119119));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119124 = arguments.length;
var i__59406__auto___119125 = (0);
while(true){
if((i__59406__auto___119125 < len__59405__auto___119124)){
args__59412__auto__.push((arguments[i__59406__auto___119125]));

var G__119126 = (i__59406__auto___119125 + (1));
i__59406__auto___119125 = G__119126;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq119123){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119123));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119128 = arguments.length;
var i__59406__auto___119129 = (0);
while(true){
if((i__59406__auto___119129 < len__59405__auto___119128)){
args__59412__auto__.push((arguments[i__59406__auto___119129]));

var G__119130 = (i__59406__auto___119129 + (1));
i__59406__auto___119129 = G__119130;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq119127){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119127));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119132 = arguments.length;
var i__59406__auto___119133 = (0);
while(true){
if((i__59406__auto___119133 < len__59405__auto___119132)){
args__59412__auto__.push((arguments[i__59406__auto___119133]));

var G__119134 = (i__59406__auto___119133 + (1));
i__59406__auto___119133 = G__119134;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq119131){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119131));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119142 = arguments.length;
var i__59406__auto___119143 = (0);
while(true){
if((i__59406__auto___119143 < len__59405__auto___119142)){
args__59412__auto__.push((arguments[i__59406__auto___119143]));

var G__119144 = (i__59406__auto___119143 + (1));
i__59406__auto___119143 = G__119144;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((1) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59413__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__119138){
var vec__119139 = p__119138;
var state_override = cljs.core.nth.call(null,vec__119139,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__119139,state_override){
return (function (p1__119135_SHARP_){
return cljs.core.merge.call(null,p1__119135_SHARP_,state_override);
});})(vec__119139,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq119136){
var G__119137 = cljs.core.first.call(null,seq119136);
var seq119136__$1 = cljs.core.next.call(null,seq119136);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__119137,seq119136__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119146 = arguments.length;
var i__59406__auto___119147 = (0);
while(true){
if((i__59406__auto___119147 < len__59405__auto___119146)){
args__59412__auto__.push((arguments[i__59406__auto___119147]));

var G__119148 = (i__59406__auto___119147 + (1));
i__59406__auto___119147 = G__119148;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq119145){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119145));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119151 = arguments.length;
var i__59406__auto___119152 = (0);
while(true){
if((i__59406__auto___119152 < len__59405__auto___119151)){
args__59412__auto__.push((arguments[i__59406__auto___119152]));

var G__119153 = (i__59406__auto___119152 + (1));
i__59406__auto___119152 = G__119153;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((1) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59413__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq119149){
var G__119150 = cljs.core.first.call(null,seq119149);
var seq119149__$1 = cljs.core.next.call(null,seq119149);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__119150,seq119149__$1);
});


//# sourceMappingURL=format.js.map?rel=1505927833276
