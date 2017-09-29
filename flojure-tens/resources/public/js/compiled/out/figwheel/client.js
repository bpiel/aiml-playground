// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e71677){if((e71677 instanceof Error)){
var e = e71677;
return "Error: Unable to stringify";
} else {
throw e71677;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__71680 = arguments.length;
switch (G__71680) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__71678_SHARP_){
if(typeof p1__71678_SHARP_ === 'string'){
return p1__71678_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__71678_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__59419__auto__ = [];
var len__59412__auto___71683 = arguments.length;
var i__59413__auto___71684 = (0);
while(true){
if((i__59413__auto___71684 < len__59412__auto___71683)){
args__59419__auto__.push((arguments[i__59413__auto___71684]));

var G__71685 = (i__59413__auto___71684 + (1));
i__59413__auto___71684 = G__71685;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq71682){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71682));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__59419__auto__ = [];
var len__59412__auto___71687 = arguments.length;
var i__59413__auto___71688 = (0);
while(true){
if((i__59413__auto___71688 < len__59412__auto___71687)){
args__59419__auto__.push((arguments[i__59413__auto___71688]));

var G__71689 = (i__59413__auto___71688 + (1));
i__59413__auto___71688 = G__71689;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq71686){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71686));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__71690){
var map__71691 = p__71690;
var map__71691__$1 = ((((!((map__71691 == null)))?((((map__71691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71691):map__71691);
var message = cljs.core.get.call(null,map__71691__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__71691__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__58135__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__58123__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__58123__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__58123__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__63214__auto___71770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___71770,ch){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___71770,ch){
return (function (state_71742){
var state_val_71743 = (state_71742[(1)]);
if((state_val_71743 === (7))){
var inst_71738 = (state_71742[(2)]);
var state_71742__$1 = state_71742;
var statearr_71744_71771 = state_71742__$1;
(statearr_71744_71771[(2)] = inst_71738);

(statearr_71744_71771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (1))){
var state_71742__$1 = state_71742;
var statearr_71745_71772 = state_71742__$1;
(statearr_71745_71772[(2)] = null);

(statearr_71745_71772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (4))){
var inst_71695 = (state_71742[(7)]);
var inst_71695__$1 = (state_71742[(2)]);
var state_71742__$1 = (function (){var statearr_71746 = state_71742;
(statearr_71746[(7)] = inst_71695__$1);

return statearr_71746;
})();
if(cljs.core.truth_(inst_71695__$1)){
var statearr_71747_71773 = state_71742__$1;
(statearr_71747_71773[(1)] = (5));

} else {
var statearr_71748_71774 = state_71742__$1;
(statearr_71748_71774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (15))){
var inst_71702 = (state_71742[(8)]);
var inst_71717 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_71702);
var inst_71718 = cljs.core.first.call(null,inst_71717);
var inst_71719 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_71718);
var inst_71720 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_71719)].join('');
var inst_71721 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_71720);
var state_71742__$1 = state_71742;
var statearr_71749_71775 = state_71742__$1;
(statearr_71749_71775[(2)] = inst_71721);

(statearr_71749_71775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (13))){
var inst_71726 = (state_71742[(2)]);
var state_71742__$1 = state_71742;
var statearr_71750_71776 = state_71742__$1;
(statearr_71750_71776[(2)] = inst_71726);

(statearr_71750_71776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (6))){
var state_71742__$1 = state_71742;
var statearr_71751_71777 = state_71742__$1;
(statearr_71751_71777[(2)] = null);

(statearr_71751_71777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (17))){
var inst_71724 = (state_71742[(2)]);
var state_71742__$1 = state_71742;
var statearr_71752_71778 = state_71742__$1;
(statearr_71752_71778[(2)] = inst_71724);

(statearr_71752_71778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (3))){
var inst_71740 = (state_71742[(2)]);
var state_71742__$1 = state_71742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71742__$1,inst_71740);
} else {
if((state_val_71743 === (12))){
var inst_71701 = (state_71742[(9)]);
var inst_71715 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_71701,opts);
var state_71742__$1 = state_71742;
if(cljs.core.truth_(inst_71715)){
var statearr_71753_71779 = state_71742__$1;
(statearr_71753_71779[(1)] = (15));

} else {
var statearr_71754_71780 = state_71742__$1;
(statearr_71754_71780[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (2))){
var state_71742__$1 = state_71742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71742__$1,(4),ch);
} else {
if((state_val_71743 === (11))){
var inst_71702 = (state_71742[(8)]);
var inst_71707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71708 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_71702);
var inst_71709 = cljs.core.async.timeout.call(null,(1000));
var inst_71710 = [inst_71708,inst_71709];
var inst_71711 = (new cljs.core.PersistentVector(null,2,(5),inst_71707,inst_71710,null));
var state_71742__$1 = state_71742;
return cljs.core.async.ioc_alts_BANG_.call(null,state_71742__$1,(14),inst_71711);
} else {
if((state_val_71743 === (9))){
var inst_71702 = (state_71742[(8)]);
var inst_71728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_71729 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_71702);
var inst_71730 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_71729);
var inst_71731 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_71730)].join('');
var inst_71732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_71731);
var state_71742__$1 = (function (){var statearr_71755 = state_71742;
(statearr_71755[(10)] = inst_71728);

return statearr_71755;
})();
var statearr_71756_71781 = state_71742__$1;
(statearr_71756_71781[(2)] = inst_71732);

(statearr_71756_71781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (5))){
var inst_71695 = (state_71742[(7)]);
var inst_71697 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_71698 = (new cljs.core.PersistentArrayMap(null,2,inst_71697,null));
var inst_71699 = (new cljs.core.PersistentHashSet(null,inst_71698,null));
var inst_71700 = figwheel.client.focus_msgs.call(null,inst_71699,inst_71695);
var inst_71701 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_71700);
var inst_71702 = cljs.core.first.call(null,inst_71700);
var inst_71703 = figwheel.client.autoload_QMARK_.call(null);
var state_71742__$1 = (function (){var statearr_71757 = state_71742;
(statearr_71757[(9)] = inst_71701);

(statearr_71757[(8)] = inst_71702);

return statearr_71757;
})();
if(cljs.core.truth_(inst_71703)){
var statearr_71758_71782 = state_71742__$1;
(statearr_71758_71782[(1)] = (8));

} else {
var statearr_71759_71783 = state_71742__$1;
(statearr_71759_71783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (14))){
var inst_71713 = (state_71742[(2)]);
var state_71742__$1 = state_71742;
var statearr_71760_71784 = state_71742__$1;
(statearr_71760_71784[(2)] = inst_71713);

(statearr_71760_71784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (16))){
var state_71742__$1 = state_71742;
var statearr_71761_71785 = state_71742__$1;
(statearr_71761_71785[(2)] = null);

(statearr_71761_71785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (10))){
var inst_71734 = (state_71742[(2)]);
var state_71742__$1 = (function (){var statearr_71762 = state_71742;
(statearr_71762[(11)] = inst_71734);

return statearr_71762;
})();
var statearr_71763_71786 = state_71742__$1;
(statearr_71763_71786[(2)] = null);

(statearr_71763_71786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71743 === (8))){
var inst_71701 = (state_71742[(9)]);
var inst_71705 = figwheel.client.reload_file_state_QMARK_.call(null,inst_71701,opts);
var state_71742__$1 = state_71742;
if(cljs.core.truth_(inst_71705)){
var statearr_71764_71787 = state_71742__$1;
(statearr_71764_71787[(1)] = (11));

} else {
var statearr_71765_71788 = state_71742__$1;
(statearr_71765_71788[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__63214__auto___71770,ch))
;
return ((function (switch__63124__auto__,c__63214__auto___71770,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__63125__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__63125__auto____0 = (function (){
var statearr_71766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71766[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__63125__auto__);

(statearr_71766[(1)] = (1));

return statearr_71766;
});
var figwheel$client$file_reloader_plugin_$_state_machine__63125__auto____1 = (function (state_71742){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_71742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e71767){if((e71767 instanceof Object)){
var ex__63128__auto__ = e71767;
var statearr_71768_71789 = state_71742;
(statearr_71768_71789[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71790 = state_71742;
state_71742 = G__71790;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__63125__auto__ = function(state_71742){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__63125__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__63125__auto____1.call(this,state_71742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__63125__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__63125__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___71770,ch))
})();
var state__63216__auto__ = (function (){var statearr_71769 = f__63215__auto__.call(null);
(statearr_71769[(6)] = c__63214__auto___71770);

return statearr_71769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___71770,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__71791_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__71791_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_71793 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_71793){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e71792){if((e71792 instanceof Error)){
var e = e71792;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_71793], null));
} else {
var e = e71792;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_71793))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__71794){
var map__71795 = p__71794;
var map__71795__$1 = ((((!((map__71795 == null)))?((((map__71795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71795):map__71795);
var opts = map__71795__$1;
var build_id = cljs.core.get.call(null,map__71795__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__71795,map__71795__$1,opts,build_id){
return (function (p__71797){
var vec__71798 = p__71797;
var seq__71799 = cljs.core.seq.call(null,vec__71798);
var first__71800 = cljs.core.first.call(null,seq__71799);
var seq__71799__$1 = cljs.core.next.call(null,seq__71799);
var map__71801 = first__71800;
var map__71801__$1 = ((((!((map__71801 == null)))?((((map__71801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71801):map__71801);
var msg = map__71801__$1;
var msg_name = cljs.core.get.call(null,map__71801__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__71799__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__71798,seq__71799,first__71800,seq__71799__$1,map__71801,map__71801__$1,msg,msg_name,_,map__71795,map__71795__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__71798,seq__71799,first__71800,seq__71799__$1,map__71801,map__71801__$1,msg,msg_name,_,map__71795,map__71795__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__71795,map__71795__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__71803){
var vec__71804 = p__71803;
var seq__71805 = cljs.core.seq.call(null,vec__71804);
var first__71806 = cljs.core.first.call(null,seq__71805);
var seq__71805__$1 = cljs.core.next.call(null,seq__71805);
var map__71807 = first__71806;
var map__71807__$1 = ((((!((map__71807 == null)))?((((map__71807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71807):map__71807);
var msg = map__71807__$1;
var msg_name = cljs.core.get.call(null,map__71807__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__71805__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__71809){
var map__71810 = p__71809;
var map__71810__$1 = ((((!((map__71810 == null)))?((((map__71810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71810):map__71810);
var on_compile_warning = cljs.core.get.call(null,map__71810__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__71810__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__71810,map__71810__$1,on_compile_warning,on_compile_fail){
return (function (p__71812){
var vec__71813 = p__71812;
var seq__71814 = cljs.core.seq.call(null,vec__71813);
var first__71815 = cljs.core.first.call(null,seq__71814);
var seq__71814__$1 = cljs.core.next.call(null,seq__71814);
var map__71816 = first__71815;
var map__71816__$1 = ((((!((map__71816 == null)))?((((map__71816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71816):map__71816);
var msg = map__71816__$1;
var msg_name = cljs.core.get.call(null,map__71816__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__71814__$1;
var pred__71818 = cljs.core._EQ_;
var expr__71819 = msg_name;
if(cljs.core.truth_(pred__71818.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__71819))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__71818.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__71819))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__71810,map__71810__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__,msg_hist,msg_names,msg){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__,msg_hist,msg_names,msg){
return (function (state_71908){
var state_val_71909 = (state_71908[(1)]);
if((state_val_71909 === (7))){
var inst_71828 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
if(cljs.core.truth_(inst_71828)){
var statearr_71910_71957 = state_71908__$1;
(statearr_71910_71957[(1)] = (8));

} else {
var statearr_71911_71958 = state_71908__$1;
(statearr_71911_71958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (20))){
var inst_71902 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71912_71959 = state_71908__$1;
(statearr_71912_71959[(2)] = inst_71902);

(statearr_71912_71959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (27))){
var inst_71898 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71913_71960 = state_71908__$1;
(statearr_71913_71960[(2)] = inst_71898);

(statearr_71913_71960[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (1))){
var inst_71821 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_71908__$1 = state_71908;
if(cljs.core.truth_(inst_71821)){
var statearr_71914_71961 = state_71908__$1;
(statearr_71914_71961[(1)] = (2));

} else {
var statearr_71915_71962 = state_71908__$1;
(statearr_71915_71962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (24))){
var inst_71900 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71916_71963 = state_71908__$1;
(statearr_71916_71963[(2)] = inst_71900);

(statearr_71916_71963[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (4))){
var inst_71906 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71908__$1,inst_71906);
} else {
if((state_val_71909 === (15))){
var inst_71904 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71917_71964 = state_71908__$1;
(statearr_71917_71964[(2)] = inst_71904);

(statearr_71917_71964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (21))){
var inst_71857 = (state_71908[(2)]);
var inst_71858 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71859 = figwheel.client.auto_jump_to_error.call(null,opts,inst_71858);
var state_71908__$1 = (function (){var statearr_71918 = state_71908;
(statearr_71918[(7)] = inst_71857);

return statearr_71918;
})();
var statearr_71919_71965 = state_71908__$1;
(statearr_71919_71965[(2)] = inst_71859);

(statearr_71919_71965[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (31))){
var inst_71887 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_71908__$1 = state_71908;
if(cljs.core.truth_(inst_71887)){
var statearr_71920_71966 = state_71908__$1;
(statearr_71920_71966[(1)] = (34));

} else {
var statearr_71921_71967 = state_71908__$1;
(statearr_71921_71967[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (32))){
var inst_71896 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71922_71968 = state_71908__$1;
(statearr_71922_71968[(2)] = inst_71896);

(statearr_71922_71968[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (33))){
var inst_71883 = (state_71908[(2)]);
var inst_71884 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71885 = figwheel.client.auto_jump_to_error.call(null,opts,inst_71884);
var state_71908__$1 = (function (){var statearr_71923 = state_71908;
(statearr_71923[(8)] = inst_71883);

return statearr_71923;
})();
var statearr_71924_71969 = state_71908__$1;
(statearr_71924_71969[(2)] = inst_71885);

(statearr_71924_71969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (13))){
var inst_71842 = figwheel.client.heads_up.clear.call(null);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(16),inst_71842);
} else {
if((state_val_71909 === (22))){
var inst_71863 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71864 = figwheel.client.heads_up.append_warning_message.call(null,inst_71863);
var state_71908__$1 = state_71908;
var statearr_71925_71970 = state_71908__$1;
(statearr_71925_71970[(2)] = inst_71864);

(statearr_71925_71970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (36))){
var inst_71894 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71926_71971 = state_71908__$1;
(statearr_71926_71971[(2)] = inst_71894);

(statearr_71926_71971[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (29))){
var inst_71874 = (state_71908[(2)]);
var inst_71875 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71876 = figwheel.client.auto_jump_to_error.call(null,opts,inst_71875);
var state_71908__$1 = (function (){var statearr_71927 = state_71908;
(statearr_71927[(9)] = inst_71874);

return statearr_71927;
})();
var statearr_71928_71972 = state_71908__$1;
(statearr_71928_71972[(2)] = inst_71876);

(statearr_71928_71972[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (6))){
var inst_71823 = (state_71908[(10)]);
var state_71908__$1 = state_71908;
var statearr_71929_71973 = state_71908__$1;
(statearr_71929_71973[(2)] = inst_71823);

(statearr_71929_71973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (28))){
var inst_71870 = (state_71908[(2)]);
var inst_71871 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71872 = figwheel.client.heads_up.display_warning.call(null,inst_71871);
var state_71908__$1 = (function (){var statearr_71930 = state_71908;
(statearr_71930[(11)] = inst_71870);

return statearr_71930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(29),inst_71872);
} else {
if((state_val_71909 === (25))){
var inst_71868 = figwheel.client.heads_up.clear.call(null);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(28),inst_71868);
} else {
if((state_val_71909 === (34))){
var inst_71889 = figwheel.client.heads_up.flash_loaded.call(null);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(37),inst_71889);
} else {
if((state_val_71909 === (17))){
var inst_71848 = (state_71908[(2)]);
var inst_71849 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71850 = figwheel.client.auto_jump_to_error.call(null,opts,inst_71849);
var state_71908__$1 = (function (){var statearr_71931 = state_71908;
(statearr_71931[(12)] = inst_71848);

return statearr_71931;
})();
var statearr_71932_71974 = state_71908__$1;
(statearr_71932_71974[(2)] = inst_71850);

(statearr_71932_71974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (3))){
var inst_71840 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_71908__$1 = state_71908;
if(cljs.core.truth_(inst_71840)){
var statearr_71933_71975 = state_71908__$1;
(statearr_71933_71975[(1)] = (13));

} else {
var statearr_71934_71976 = state_71908__$1;
(statearr_71934_71976[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (12))){
var inst_71836 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71935_71977 = state_71908__$1;
(statearr_71935_71977[(2)] = inst_71836);

(statearr_71935_71977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (2))){
var inst_71823 = (state_71908[(10)]);
var inst_71823__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_71908__$1 = (function (){var statearr_71936 = state_71908;
(statearr_71936[(10)] = inst_71823__$1);

return statearr_71936;
})();
if(cljs.core.truth_(inst_71823__$1)){
var statearr_71937_71978 = state_71908__$1;
(statearr_71937_71978[(1)] = (5));

} else {
var statearr_71938_71979 = state_71908__$1;
(statearr_71938_71979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (23))){
var inst_71866 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_71908__$1 = state_71908;
if(cljs.core.truth_(inst_71866)){
var statearr_71939_71980 = state_71908__$1;
(statearr_71939_71980[(1)] = (25));

} else {
var statearr_71940_71981 = state_71908__$1;
(statearr_71940_71981[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (35))){
var state_71908__$1 = state_71908;
var statearr_71941_71982 = state_71908__$1;
(statearr_71941_71982[(2)] = null);

(statearr_71941_71982[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (19))){
var inst_71861 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_71908__$1 = state_71908;
if(cljs.core.truth_(inst_71861)){
var statearr_71942_71983 = state_71908__$1;
(statearr_71942_71983[(1)] = (22));

} else {
var statearr_71943_71984 = state_71908__$1;
(statearr_71943_71984[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (11))){
var inst_71832 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71944_71985 = state_71908__$1;
(statearr_71944_71985[(2)] = inst_71832);

(statearr_71944_71985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (9))){
var inst_71834 = figwheel.client.heads_up.clear.call(null);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(12),inst_71834);
} else {
if((state_val_71909 === (5))){
var inst_71825 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_71908__$1 = state_71908;
var statearr_71945_71986 = state_71908__$1;
(statearr_71945_71986[(2)] = inst_71825);

(statearr_71945_71986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (14))){
var inst_71852 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_71908__$1 = state_71908;
if(cljs.core.truth_(inst_71852)){
var statearr_71946_71987 = state_71908__$1;
(statearr_71946_71987[(1)] = (18));

} else {
var statearr_71947_71988 = state_71908__$1;
(statearr_71947_71988[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (26))){
var inst_71878 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_71908__$1 = state_71908;
if(cljs.core.truth_(inst_71878)){
var statearr_71948_71989 = state_71908__$1;
(statearr_71948_71989[(1)] = (30));

} else {
var statearr_71949_71990 = state_71908__$1;
(statearr_71949_71990[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (16))){
var inst_71844 = (state_71908[(2)]);
var inst_71845 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71846 = figwheel.client.heads_up.display_exception.call(null,inst_71845);
var state_71908__$1 = (function (){var statearr_71950 = state_71908;
(statearr_71950[(13)] = inst_71844);

return statearr_71950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(17),inst_71846);
} else {
if((state_val_71909 === (30))){
var inst_71880 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71881 = figwheel.client.heads_up.display_warning.call(null,inst_71880);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(33),inst_71881);
} else {
if((state_val_71909 === (10))){
var inst_71838 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71951_71991 = state_71908__$1;
(statearr_71951_71991[(2)] = inst_71838);

(statearr_71951_71991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (18))){
var inst_71854 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_71855 = figwheel.client.heads_up.display_exception.call(null,inst_71854);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(21),inst_71855);
} else {
if((state_val_71909 === (37))){
var inst_71891 = (state_71908[(2)]);
var state_71908__$1 = state_71908;
var statearr_71952_71992 = state_71908__$1;
(statearr_71952_71992[(2)] = inst_71891);

(statearr_71952_71992[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71909 === (8))){
var inst_71830 = figwheel.client.heads_up.flash_loaded.call(null);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(11),inst_71830);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__63214__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__63124__auto__,c__63214__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto____0 = (function (){
var statearr_71953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71953[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto__);

(statearr_71953[(1)] = (1));

return statearr_71953;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto____1 = (function (state_71908){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_71908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e71954){if((e71954 instanceof Object)){
var ex__63128__auto__ = e71954;
var statearr_71955_71993 = state_71908;
(statearr_71955_71993[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71994 = state_71908;
state_71908 = G__71994;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto__ = function(state_71908){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto____1.call(this,state_71908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__,msg_hist,msg_names,msg))
})();
var state__63216__auto__ = (function (){var statearr_71956 = f__63215__auto__.call(null);
(statearr_71956[(6)] = c__63214__auto__);

return statearr_71956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__,msg_hist,msg_names,msg))
);

return c__63214__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__63214__auto___72023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___72023,ch){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___72023,ch){
return (function (state_72009){
var state_val_72010 = (state_72009[(1)]);
if((state_val_72010 === (1))){
var state_72009__$1 = state_72009;
var statearr_72011_72024 = state_72009__$1;
(statearr_72011_72024[(2)] = null);

(statearr_72011_72024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72010 === (2))){
var state_72009__$1 = state_72009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72009__$1,(4),ch);
} else {
if((state_val_72010 === (3))){
var inst_72007 = (state_72009[(2)]);
var state_72009__$1 = state_72009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72009__$1,inst_72007);
} else {
if((state_val_72010 === (4))){
var inst_71997 = (state_72009[(7)]);
var inst_71997__$1 = (state_72009[(2)]);
var state_72009__$1 = (function (){var statearr_72012 = state_72009;
(statearr_72012[(7)] = inst_71997__$1);

return statearr_72012;
})();
if(cljs.core.truth_(inst_71997__$1)){
var statearr_72013_72025 = state_72009__$1;
(statearr_72013_72025[(1)] = (5));

} else {
var statearr_72014_72026 = state_72009__$1;
(statearr_72014_72026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72010 === (5))){
var inst_71997 = (state_72009[(7)]);
var inst_71999 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_71997);
var state_72009__$1 = state_72009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72009__$1,(8),inst_71999);
} else {
if((state_val_72010 === (6))){
var state_72009__$1 = state_72009;
var statearr_72015_72027 = state_72009__$1;
(statearr_72015_72027[(2)] = null);

(statearr_72015_72027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72010 === (7))){
var inst_72005 = (state_72009[(2)]);
var state_72009__$1 = state_72009;
var statearr_72016_72028 = state_72009__$1;
(statearr_72016_72028[(2)] = inst_72005);

(statearr_72016_72028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72010 === (8))){
var inst_72001 = (state_72009[(2)]);
var state_72009__$1 = (function (){var statearr_72017 = state_72009;
(statearr_72017[(8)] = inst_72001);

return statearr_72017;
})();
var statearr_72018_72029 = state_72009__$1;
(statearr_72018_72029[(2)] = null);

(statearr_72018_72029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__63214__auto___72023,ch))
;
return ((function (switch__63124__auto__,c__63214__auto___72023,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__63125__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__63125__auto____0 = (function (){
var statearr_72019 = [null,null,null,null,null,null,null,null,null];
(statearr_72019[(0)] = figwheel$client$heads_up_plugin_$_state_machine__63125__auto__);

(statearr_72019[(1)] = (1));

return statearr_72019;
});
var figwheel$client$heads_up_plugin_$_state_machine__63125__auto____1 = (function (state_72009){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_72009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e72020){if((e72020 instanceof Object)){
var ex__63128__auto__ = e72020;
var statearr_72021_72030 = state_72009;
(statearr_72021_72030[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72031 = state_72009;
state_72009 = G__72031;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__63125__auto__ = function(state_72009){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__63125__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__63125__auto____1.call(this,state_72009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__63125__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__63125__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___72023,ch))
})();
var state__63216__auto__ = (function (){var statearr_72022 = f__63215__auto__.call(null);
(statearr_72022[(6)] = c__63214__auto___72023);

return statearr_72022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___72023,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__){
return (function (state_72037){
var state_val_72038 = (state_72037[(1)]);
if((state_val_72038 === (1))){
var inst_72032 = cljs.core.async.timeout.call(null,(3000));
var state_72037__$1 = state_72037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72037__$1,(2),inst_72032);
} else {
if((state_val_72038 === (2))){
var inst_72034 = (state_72037[(2)]);
var inst_72035 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_72037__$1 = (function (){var statearr_72039 = state_72037;
(statearr_72039[(7)] = inst_72034);

return statearr_72039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72037__$1,inst_72035);
} else {
return null;
}
}
});})(c__63214__auto__))
;
return ((function (switch__63124__auto__,c__63214__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__63125__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__63125__auto____0 = (function (){
var statearr_72040 = [null,null,null,null,null,null,null,null];
(statearr_72040[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__63125__auto__);

(statearr_72040[(1)] = (1));

return statearr_72040;
});
var figwheel$client$enforce_project_plugin_$_state_machine__63125__auto____1 = (function (state_72037){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_72037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e72041){if((e72041 instanceof Object)){
var ex__63128__auto__ = e72041;
var statearr_72042_72044 = state_72037;
(statearr_72042_72044[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72045 = state_72037;
state_72037 = G__72045;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__63125__auto__ = function(state_72037){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__63125__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__63125__auto____1.call(this,state_72037);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__63125__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__63125__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__))
})();
var state__63216__auto__ = (function (){var statearr_72043 = f__63215__auto__.call(null);
(statearr_72043[(6)] = c__63214__auto__);

return statearr_72043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__))
);

return c__63214__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6738__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6738__auto__)){
var figwheel_version = temp__6738__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__,figwheel_version,temp__6738__auto__){
return (function (state_72052){
var state_val_72053 = (state_72052[(1)]);
if((state_val_72053 === (1))){
var inst_72046 = cljs.core.async.timeout.call(null,(2000));
var state_72052__$1 = state_72052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72052__$1,(2),inst_72046);
} else {
if((state_val_72053 === (2))){
var inst_72048 = (state_72052[(2)]);
var inst_72049 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_72050 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_72049);
var state_72052__$1 = (function (){var statearr_72054 = state_72052;
(statearr_72054[(7)] = inst_72048);

return statearr_72054;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72052__$1,inst_72050);
} else {
return null;
}
}
});})(c__63214__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__63124__auto__,c__63214__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto____0 = (function (){
var statearr_72055 = [null,null,null,null,null,null,null,null];
(statearr_72055[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto__);

(statearr_72055[(1)] = (1));

return statearr_72055;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto____1 = (function (state_72052){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_72052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e72056){if((e72056 instanceof Object)){
var ex__63128__auto__ = e72056;
var statearr_72057_72059 = state_72052;
(statearr_72057_72059[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72060 = state_72052;
state_72052 = G__72060;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto__ = function(state_72052){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto____1.call(this,state_72052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__,figwheel_version,temp__6738__auto__))
})();
var state__63216__auto__ = (function (){var statearr_72058 = f__63215__auto__.call(null);
(statearr_72058[(6)] = c__63214__auto__);

return statearr_72058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__,figwheel_version,temp__6738__auto__))
);

return c__63214__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__72061){
var map__72062 = p__72061;
var map__72062__$1 = ((((!((map__72062 == null)))?((((map__72062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72062):map__72062);
var file = cljs.core.get.call(null,map__72062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__72062__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__72062__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__72064 = "";
var G__72064__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72064),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__72064);
var G__72064__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72064__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__72064__$1);
if(cljs.core.truth_((function (){var and__58123__auto__ = line;
if(cljs.core.truth_(and__58123__auto__)){
return column;
} else {
return and__58123__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72064__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__72064__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__72065){
var map__72066 = p__72065;
var map__72066__$1 = ((((!((map__72066 == null)))?((((map__72066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72066):map__72066);
var ed = map__72066__$1;
var formatted_exception = cljs.core.get.call(null,map__72066__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__72066__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__72066__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__72068_72072 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__72069_72073 = null;
var count__72070_72074 = (0);
var i__72071_72075 = (0);
while(true){
if((i__72071_72075 < count__72070_72074)){
var msg_72076 = cljs.core._nth.call(null,chunk__72069_72073,i__72071_72075);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_72076);

var G__72077 = seq__72068_72072;
var G__72078 = chunk__72069_72073;
var G__72079 = count__72070_72074;
var G__72080 = (i__72071_72075 + (1));
seq__72068_72072 = G__72077;
chunk__72069_72073 = G__72078;
count__72070_72074 = G__72079;
i__72071_72075 = G__72080;
continue;
} else {
var temp__6738__auto___72081 = cljs.core.seq.call(null,seq__72068_72072);
if(temp__6738__auto___72081){
var seq__72068_72082__$1 = temp__6738__auto___72081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72068_72082__$1)){
var c__59066__auto___72083 = cljs.core.chunk_first.call(null,seq__72068_72082__$1);
var G__72084 = cljs.core.chunk_rest.call(null,seq__72068_72082__$1);
var G__72085 = c__59066__auto___72083;
var G__72086 = cljs.core.count.call(null,c__59066__auto___72083);
var G__72087 = (0);
seq__72068_72072 = G__72084;
chunk__72069_72073 = G__72085;
count__72070_72074 = G__72086;
i__72071_72075 = G__72087;
continue;
} else {
var msg_72088 = cljs.core.first.call(null,seq__72068_72082__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_72088);

var G__72089 = cljs.core.next.call(null,seq__72068_72082__$1);
var G__72090 = null;
var G__72091 = (0);
var G__72092 = (0);
seq__72068_72072 = G__72089;
chunk__72069_72073 = G__72090;
count__72070_72074 = G__72091;
i__72071_72075 = G__72092;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__72093){
var map__72094 = p__72093;
var map__72094__$1 = ((((!((map__72094 == null)))?((((map__72094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72094):map__72094);
var w = map__72094__$1;
var message = cljs.core.get.call(null,map__72094__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__58123__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__58123__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__58123__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__72096 = cljs.core.seq.call(null,plugins);
var chunk__72097 = null;
var count__72098 = (0);
var i__72099 = (0);
while(true){
if((i__72099 < count__72098)){
var vec__72100 = cljs.core._nth.call(null,chunk__72097,i__72099);
var k = cljs.core.nth.call(null,vec__72100,(0),null);
var plugin = cljs.core.nth.call(null,vec__72100,(1),null);
if(cljs.core.truth_(plugin)){
var pl_72106 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__72096,chunk__72097,count__72098,i__72099,pl_72106,vec__72100,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_72106.call(null,msg_hist);
});})(seq__72096,chunk__72097,count__72098,i__72099,pl_72106,vec__72100,k,plugin))
);
} else {
}

var G__72107 = seq__72096;
var G__72108 = chunk__72097;
var G__72109 = count__72098;
var G__72110 = (i__72099 + (1));
seq__72096 = G__72107;
chunk__72097 = G__72108;
count__72098 = G__72109;
i__72099 = G__72110;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__72096);
if(temp__6738__auto__){
var seq__72096__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72096__$1)){
var c__59066__auto__ = cljs.core.chunk_first.call(null,seq__72096__$1);
var G__72111 = cljs.core.chunk_rest.call(null,seq__72096__$1);
var G__72112 = c__59066__auto__;
var G__72113 = cljs.core.count.call(null,c__59066__auto__);
var G__72114 = (0);
seq__72096 = G__72111;
chunk__72097 = G__72112;
count__72098 = G__72113;
i__72099 = G__72114;
continue;
} else {
var vec__72103 = cljs.core.first.call(null,seq__72096__$1);
var k = cljs.core.nth.call(null,vec__72103,(0),null);
var plugin = cljs.core.nth.call(null,vec__72103,(1),null);
if(cljs.core.truth_(plugin)){
var pl_72115 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__72096,chunk__72097,count__72098,i__72099,pl_72115,vec__72103,k,plugin,seq__72096__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_72115.call(null,msg_hist);
});})(seq__72096,chunk__72097,count__72098,i__72099,pl_72115,vec__72103,k,plugin,seq__72096__$1,temp__6738__auto__))
);
} else {
}

var G__72116 = cljs.core.next.call(null,seq__72096__$1);
var G__72117 = null;
var G__72118 = (0);
var G__72119 = (0);
seq__72096 = G__72116;
chunk__72097 = G__72117;
count__72098 = G__72118;
i__72099 = G__72119;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__72121 = arguments.length;
switch (G__72121) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__72122_72127 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__72123_72128 = null;
var count__72124_72129 = (0);
var i__72125_72130 = (0);
while(true){
if((i__72125_72130 < count__72124_72129)){
var msg_72131 = cljs.core._nth.call(null,chunk__72123_72128,i__72125_72130);
figwheel.client.socket.handle_incoming_message.call(null,msg_72131);

var G__72132 = seq__72122_72127;
var G__72133 = chunk__72123_72128;
var G__72134 = count__72124_72129;
var G__72135 = (i__72125_72130 + (1));
seq__72122_72127 = G__72132;
chunk__72123_72128 = G__72133;
count__72124_72129 = G__72134;
i__72125_72130 = G__72135;
continue;
} else {
var temp__6738__auto___72136 = cljs.core.seq.call(null,seq__72122_72127);
if(temp__6738__auto___72136){
var seq__72122_72137__$1 = temp__6738__auto___72136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72122_72137__$1)){
var c__59066__auto___72138 = cljs.core.chunk_first.call(null,seq__72122_72137__$1);
var G__72139 = cljs.core.chunk_rest.call(null,seq__72122_72137__$1);
var G__72140 = c__59066__auto___72138;
var G__72141 = cljs.core.count.call(null,c__59066__auto___72138);
var G__72142 = (0);
seq__72122_72127 = G__72139;
chunk__72123_72128 = G__72140;
count__72124_72129 = G__72141;
i__72125_72130 = G__72142;
continue;
} else {
var msg_72143 = cljs.core.first.call(null,seq__72122_72137__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_72143);

var G__72144 = cljs.core.next.call(null,seq__72122_72137__$1);
var G__72145 = null;
var G__72146 = (0);
var G__72147 = (0);
seq__72122_72127 = G__72144;
chunk__72123_72128 = G__72145;
count__72124_72129 = G__72146;
i__72125_72130 = G__72147;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__59419__auto__ = [];
var len__59412__auto___72152 = arguments.length;
var i__59413__auto___72153 = (0);
while(true){
if((i__59413__auto___72153 < len__59412__auto___72152)){
args__59419__auto__.push((arguments[i__59413__auto___72153]));

var G__72154 = (i__59413__auto___72153 + (1));
i__59413__auto___72153 = G__72154;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__72149){
var map__72150 = p__72149;
var map__72150__$1 = ((((!((map__72150 == null)))?((((map__72150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72150):map__72150);
var opts = map__72150__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq72148){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72148));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e72155){if((e72155 instanceof Error)){
var e = e72155;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e72155;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__72156){
var map__72157 = p__72156;
var map__72157__$1 = ((((!((map__72157 == null)))?((((map__72157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72157):map__72157);
var msg_name = cljs.core.get.call(null,map__72157__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506641519200
