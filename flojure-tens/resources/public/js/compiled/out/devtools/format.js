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
var o24176 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24176["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24177 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24177["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24178 = temp__6736__auto____$2;
return (o24178["make_template"]);
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
var o24179 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24179["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24180 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24180["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24181 = temp__6736__auto____$2;
return (o24181["make_group"]);
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
var o24182 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24182["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24183 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24183["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24184 = temp__6736__auto____$2;
return (o24184["make_reference"]);
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
var o24185 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24185["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24186 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24186["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24187 = temp__6736__auto____$2;
return (o24187["make_surrogate"]);
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
var o24188 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24188["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24189 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24189["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24190 = temp__6736__auto____$2;
return (o24190["render_markup"]);
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
var o24191 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24191["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24192 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24192["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24193 = temp__6736__auto____$2;
return (o24193["_LT_header_GT_"]);
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
var o24194 = temp__6736__auto__;
var temp__6736__auto____$1 = (o24194["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o24195 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o24195["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o24196 = temp__6736__auto____$2;
return (o24196["_LT_standard_body_GT_"]);
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
var len__11087__auto___24198 = arguments.length;
var i__11088__auto___24199 = (0);
while(true){
if((i__11088__auto___24199 < len__11087__auto___24198)){
args__11094__auto__.push((arguments[i__11088__auto___24199]));

var G__24200 = (i__11088__auto___24199 + (1));
i__11088__auto___24199 = G__24200;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq24197){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24197));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24202 = arguments.length;
var i__11088__auto___24203 = (0);
while(true){
if((i__11088__auto___24203 < len__11087__auto___24202)){
args__11094__auto__.push((arguments[i__11088__auto___24203]));

var G__24204 = (i__11088__auto___24203 + (1));
i__11088__auto___24203 = G__24204;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq24201){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24201));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24206 = arguments.length;
var i__11088__auto___24207 = (0);
while(true){
if((i__11088__auto___24207 < len__11087__auto___24206)){
args__11094__auto__.push((arguments[i__11088__auto___24207]));

var G__24208 = (i__11088__auto___24207 + (1));
i__11088__auto___24207 = G__24208;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq24205){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24205));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24210 = arguments.length;
var i__11088__auto___24211 = (0);
while(true){
if((i__11088__auto___24211 < len__11087__auto___24210)){
args__11094__auto__.push((arguments[i__11088__auto___24211]));

var G__24212 = (i__11088__auto___24211 + (1));
i__11088__auto___24211 = G__24212;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq24209){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24209));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24214 = arguments.length;
var i__11088__auto___24215 = (0);
while(true){
if((i__11088__auto___24215 < len__11087__auto___24214)){
args__11094__auto__.push((arguments[i__11088__auto___24215]));

var G__24216 = (i__11088__auto___24215 + (1));
i__11088__auto___24215 = G__24216;
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

devtools.format.template.cljs$lang$applyTo = (function (seq24213){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24213));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24218 = arguments.length;
var i__11088__auto___24219 = (0);
while(true){
if((i__11088__auto___24219 < len__11087__auto___24218)){
args__11094__auto__.push((arguments[i__11088__auto___24219]));

var G__24220 = (i__11088__auto___24219 + (1));
i__11088__auto___24219 = G__24220;
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

devtools.format.group.cljs$lang$applyTo = (function (seq24217){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24217));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24222 = arguments.length;
var i__11088__auto___24223 = (0);
while(true){
if((i__11088__auto___24223 < len__11087__auto___24222)){
args__11094__auto__.push((arguments[i__11088__auto___24223]));

var G__24224 = (i__11088__auto___24223 + (1));
i__11088__auto___24223 = G__24224;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq24221){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24221));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24232 = arguments.length;
var i__11088__auto___24233 = (0);
while(true){
if((i__11088__auto___24233 < len__11087__auto___24232)){
args__11094__auto__.push((arguments[i__11088__auto___24233]));

var G__24234 = (i__11088__auto___24233 + (1));
i__11088__auto___24233 = G__24234;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24228){
var vec__24229 = p__24228;
var state_override = cljs.core.nth.call(null,vec__24229,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__24229,state_override){
return (function (p1__24225_SHARP_){
return cljs.core.merge.call(null,p1__24225_SHARP_,state_override);
});})(vec__24229,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq24226){
var G__24227 = cljs.core.first.call(null,seq24226);
var seq24226__$1 = cljs.core.next.call(null,seq24226);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__24227,seq24226__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24236 = arguments.length;
var i__11088__auto___24237 = (0);
while(true){
if((i__11088__auto___24237 < len__11087__auto___24236)){
args__11094__auto__.push((arguments[i__11088__auto___24237]));

var G__24238 = (i__11088__auto___24237 + (1));
i__11088__auto___24237 = G__24238;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq24235){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24235));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24241 = arguments.length;
var i__11088__auto___24242 = (0);
while(true){
if((i__11088__auto___24242 < len__11087__auto___24241)){
args__11094__auto__.push((arguments[i__11088__auto___24242]));

var G__24243 = (i__11088__auto___24242 + (1));
i__11088__auto___24242 = G__24243;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq24239){
var G__24240 = cljs.core.first.call(null,seq24239);
var seq24239__$1 = cljs.core.next.call(null,seq24239);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__24240,seq24239__$1);
});


//# sourceMappingURL=format.js.map?rel=1504285965879
