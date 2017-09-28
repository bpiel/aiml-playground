// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__65701__auto__ = [];
var len__65694__auto___80697 = arguments.length;
var i__65695__auto___80698 = (0);
while(true){
if((i__65695__auto___80698 < len__65694__auto___80697)){
args__65701__auto__.push((arguments[i__65695__auto___80698]));

var G__80699 = (i__65695__auto___80698 + (1));
i__65695__auto___80698 = G__80699;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((1) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__65702__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__80692){
var vec__80693 = p__80692;
var context = cljs.core.nth.call(null,vec__80693,(0),null);
var footer = cljs.core.nth.call(null,vec__80693,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__64417__auto__ = e.message;
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e80696){var e__$1 = e80696;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq80690){
var G__80691 = cljs.core.first.call(null,seq80690);
var seq80690__$1 = cljs.core.next.call(null,seq80690);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__80691,seq80690__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1506558362971
