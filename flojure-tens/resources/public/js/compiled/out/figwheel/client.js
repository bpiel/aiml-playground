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
}catch (e77959){if((e77959 instanceof Error)){
var e = e77959;
return "Error: Unable to stringify";
} else {
throw e77959;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__77962 = arguments.length;
switch (G__77962) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__77960_SHARP_){
if(typeof p1__77960_SHARP_ === 'string'){
return p1__77960_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__77960_SHARP_);
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
var args__65701__auto__ = [];
var len__65694__auto___77965 = arguments.length;
var i__65695__auto___77966 = (0);
while(true){
if((i__65695__auto___77966 < len__65694__auto___77965)){
args__65701__auto__.push((arguments[i__65695__auto___77966]));

var G__77967 = (i__65695__auto___77966 + (1));
i__65695__auto___77966 = G__77967;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq77964){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq77964));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__65701__auto__ = [];
var len__65694__auto___77969 = arguments.length;
var i__65695__auto___77970 = (0);
while(true){
if((i__65695__auto___77970 < len__65694__auto___77969)){
args__65701__auto__.push((arguments[i__65695__auto___77970]));

var G__77971 = (i__65695__auto___77970 + (1));
i__65695__auto___77970 = G__77971;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq77968){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq77968));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__77972){
var map__77973 = p__77972;
var map__77973__$1 = ((((!((map__77973 == null)))?((((map__77973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77973):map__77973);
var message = cljs.core.get.call(null,map__77973__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__77973__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__64417__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__64405__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__64405__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__64405__auto__;
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
var c__69495__auto___78052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___78052,ch){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___78052,ch){
return (function (state_78024){
var state_val_78025 = (state_78024[(1)]);
if((state_val_78025 === (7))){
var inst_78020 = (state_78024[(2)]);
var state_78024__$1 = state_78024;
var statearr_78026_78053 = state_78024__$1;
(statearr_78026_78053[(2)] = inst_78020);

(statearr_78026_78053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (1))){
var state_78024__$1 = state_78024;
var statearr_78027_78054 = state_78024__$1;
(statearr_78027_78054[(2)] = null);

(statearr_78027_78054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (4))){
var inst_77977 = (state_78024[(7)]);
var inst_77977__$1 = (state_78024[(2)]);
var state_78024__$1 = (function (){var statearr_78028 = state_78024;
(statearr_78028[(7)] = inst_77977__$1);

return statearr_78028;
})();
if(cljs.core.truth_(inst_77977__$1)){
var statearr_78029_78055 = state_78024__$1;
(statearr_78029_78055[(1)] = (5));

} else {
var statearr_78030_78056 = state_78024__$1;
(statearr_78030_78056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (15))){
var inst_77984 = (state_78024[(8)]);
var inst_77999 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_77984);
var inst_78000 = cljs.core.first.call(null,inst_77999);
var inst_78001 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_78000);
var inst_78002 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_78001)].join('');
var inst_78003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_78002);
var state_78024__$1 = state_78024;
var statearr_78031_78057 = state_78024__$1;
(statearr_78031_78057[(2)] = inst_78003);

(statearr_78031_78057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (13))){
var inst_78008 = (state_78024[(2)]);
var state_78024__$1 = state_78024;
var statearr_78032_78058 = state_78024__$1;
(statearr_78032_78058[(2)] = inst_78008);

(statearr_78032_78058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (6))){
var state_78024__$1 = state_78024;
var statearr_78033_78059 = state_78024__$1;
(statearr_78033_78059[(2)] = null);

(statearr_78033_78059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (17))){
var inst_78006 = (state_78024[(2)]);
var state_78024__$1 = state_78024;
var statearr_78034_78060 = state_78024__$1;
(statearr_78034_78060[(2)] = inst_78006);

(statearr_78034_78060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (3))){
var inst_78022 = (state_78024[(2)]);
var state_78024__$1 = state_78024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78024__$1,inst_78022);
} else {
if((state_val_78025 === (12))){
var inst_77983 = (state_78024[(9)]);
var inst_77997 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_77983,opts);
var state_78024__$1 = state_78024;
if(cljs.core.truth_(inst_77997)){
var statearr_78035_78061 = state_78024__$1;
(statearr_78035_78061[(1)] = (15));

} else {
var statearr_78036_78062 = state_78024__$1;
(statearr_78036_78062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (2))){
var state_78024__$1 = state_78024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78024__$1,(4),ch);
} else {
if((state_val_78025 === (11))){
var inst_77984 = (state_78024[(8)]);
var inst_77989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77990 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_77984);
var inst_77991 = cljs.core.async.timeout.call(null,(1000));
var inst_77992 = [inst_77990,inst_77991];
var inst_77993 = (new cljs.core.PersistentVector(null,2,(5),inst_77989,inst_77992,null));
var state_78024__$1 = state_78024;
return cljs.core.async.ioc_alts_BANG_.call(null,state_78024__$1,(14),inst_77993);
} else {
if((state_val_78025 === (9))){
var inst_77984 = (state_78024[(8)]);
var inst_78010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_78011 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_77984);
var inst_78012 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_78011);
var inst_78013 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_78012)].join('');
var inst_78014 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_78013);
var state_78024__$1 = (function (){var statearr_78037 = state_78024;
(statearr_78037[(10)] = inst_78010);

return statearr_78037;
})();
var statearr_78038_78063 = state_78024__$1;
(statearr_78038_78063[(2)] = inst_78014);

(statearr_78038_78063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (5))){
var inst_77977 = (state_78024[(7)]);
var inst_77979 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_77980 = (new cljs.core.PersistentArrayMap(null,2,inst_77979,null));
var inst_77981 = (new cljs.core.PersistentHashSet(null,inst_77980,null));
var inst_77982 = figwheel.client.focus_msgs.call(null,inst_77981,inst_77977);
var inst_77983 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_77982);
var inst_77984 = cljs.core.first.call(null,inst_77982);
var inst_77985 = figwheel.client.autoload_QMARK_.call(null);
var state_78024__$1 = (function (){var statearr_78039 = state_78024;
(statearr_78039[(9)] = inst_77983);

(statearr_78039[(8)] = inst_77984);

return statearr_78039;
})();
if(cljs.core.truth_(inst_77985)){
var statearr_78040_78064 = state_78024__$1;
(statearr_78040_78064[(1)] = (8));

} else {
var statearr_78041_78065 = state_78024__$1;
(statearr_78041_78065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (14))){
var inst_77995 = (state_78024[(2)]);
var state_78024__$1 = state_78024;
var statearr_78042_78066 = state_78024__$1;
(statearr_78042_78066[(2)] = inst_77995);

(statearr_78042_78066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (16))){
var state_78024__$1 = state_78024;
var statearr_78043_78067 = state_78024__$1;
(statearr_78043_78067[(2)] = null);

(statearr_78043_78067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (10))){
var inst_78016 = (state_78024[(2)]);
var state_78024__$1 = (function (){var statearr_78044 = state_78024;
(statearr_78044[(11)] = inst_78016);

return statearr_78044;
})();
var statearr_78045_78068 = state_78024__$1;
(statearr_78045_78068[(2)] = null);

(statearr_78045_78068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78025 === (8))){
var inst_77983 = (state_78024[(9)]);
var inst_77987 = figwheel.client.reload_file_state_QMARK_.call(null,inst_77983,opts);
var state_78024__$1 = state_78024;
if(cljs.core.truth_(inst_77987)){
var statearr_78046_78069 = state_78024__$1;
(statearr_78046_78069[(1)] = (11));

} else {
var statearr_78047_78070 = state_78024__$1;
(statearr_78047_78070[(1)] = (12));

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
});})(c__69495__auto___78052,ch))
;
return ((function (switch__69405__auto__,c__69495__auto___78052,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__69406__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__69406__auto____0 = (function (){
var statearr_78048 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78048[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__69406__auto__);

(statearr_78048[(1)] = (1));

return statearr_78048;
});
var figwheel$client$file_reloader_plugin_$_state_machine__69406__auto____1 = (function (state_78024){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_78024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e78049){if((e78049 instanceof Object)){
var ex__69409__auto__ = e78049;
var statearr_78050_78071 = state_78024;
(statearr_78050_78071[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78072 = state_78024;
state_78024 = G__78072;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__69406__auto__ = function(state_78024){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__69406__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__69406__auto____1.call(this,state_78024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__69406__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__69406__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___78052,ch))
})();
var state__69497__auto__ = (function (){var statearr_78051 = f__69496__auto__.call(null);
(statearr_78051[(6)] = c__69495__auto___78052);

return statearr_78051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___78052,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__78073_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__78073_SHARP_));
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
var base_path_78075 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_78075){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e78074){if((e78074 instanceof Error)){
var e = e78074;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_78075], null));
} else {
var e = e78074;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_78075))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__78076){
var map__78077 = p__78076;
var map__78077__$1 = ((((!((map__78077 == null)))?((((map__78077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78077):map__78077);
var opts = map__78077__$1;
var build_id = cljs.core.get.call(null,map__78077__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__78077,map__78077__$1,opts,build_id){
return (function (p__78079){
var vec__78080 = p__78079;
var seq__78081 = cljs.core.seq.call(null,vec__78080);
var first__78082 = cljs.core.first.call(null,seq__78081);
var seq__78081__$1 = cljs.core.next.call(null,seq__78081);
var map__78083 = first__78082;
var map__78083__$1 = ((((!((map__78083 == null)))?((((map__78083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78083):map__78083);
var msg = map__78083__$1;
var msg_name = cljs.core.get.call(null,map__78083__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__78081__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__78080,seq__78081,first__78082,seq__78081__$1,map__78083,map__78083__$1,msg,msg_name,_,map__78077,map__78077__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__78080,seq__78081,first__78082,seq__78081__$1,map__78083,map__78083__$1,msg,msg_name,_,map__78077,map__78077__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__78077,map__78077__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__78085){
var vec__78086 = p__78085;
var seq__78087 = cljs.core.seq.call(null,vec__78086);
var first__78088 = cljs.core.first.call(null,seq__78087);
var seq__78087__$1 = cljs.core.next.call(null,seq__78087);
var map__78089 = first__78088;
var map__78089__$1 = ((((!((map__78089 == null)))?((((map__78089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78089):map__78089);
var msg = map__78089__$1;
var msg_name = cljs.core.get.call(null,map__78089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__78087__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__78091){
var map__78092 = p__78091;
var map__78092__$1 = ((((!((map__78092 == null)))?((((map__78092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78092):map__78092);
var on_compile_warning = cljs.core.get.call(null,map__78092__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__78092__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__78092,map__78092__$1,on_compile_warning,on_compile_fail){
return (function (p__78094){
var vec__78095 = p__78094;
var seq__78096 = cljs.core.seq.call(null,vec__78095);
var first__78097 = cljs.core.first.call(null,seq__78096);
var seq__78096__$1 = cljs.core.next.call(null,seq__78096);
var map__78098 = first__78097;
var map__78098__$1 = ((((!((map__78098 == null)))?((((map__78098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78098):map__78098);
var msg = map__78098__$1;
var msg_name = cljs.core.get.call(null,map__78098__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__78096__$1;
var pred__78100 = cljs.core._EQ_;
var expr__78101 = msg_name;
if(cljs.core.truth_(pred__78100.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__78101))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__78100.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__78101))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__78092,map__78092__$1,on_compile_warning,on_compile_fail))
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
var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__,msg_hist,msg_names,msg){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__,msg_hist,msg_names,msg){
return (function (state_78190){
var state_val_78191 = (state_78190[(1)]);
if((state_val_78191 === (7))){
var inst_78110 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
if(cljs.core.truth_(inst_78110)){
var statearr_78192_78239 = state_78190__$1;
(statearr_78192_78239[(1)] = (8));

} else {
var statearr_78193_78240 = state_78190__$1;
(statearr_78193_78240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (20))){
var inst_78184 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78194_78241 = state_78190__$1;
(statearr_78194_78241[(2)] = inst_78184);

(statearr_78194_78241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (27))){
var inst_78180 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78195_78242 = state_78190__$1;
(statearr_78195_78242[(2)] = inst_78180);

(statearr_78195_78242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (1))){
var inst_78103 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_78190__$1 = state_78190;
if(cljs.core.truth_(inst_78103)){
var statearr_78196_78243 = state_78190__$1;
(statearr_78196_78243[(1)] = (2));

} else {
var statearr_78197_78244 = state_78190__$1;
(statearr_78197_78244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (24))){
var inst_78182 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78198_78245 = state_78190__$1;
(statearr_78198_78245[(2)] = inst_78182);

(statearr_78198_78245[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (4))){
var inst_78188 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78190__$1,inst_78188);
} else {
if((state_val_78191 === (15))){
var inst_78186 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78199_78246 = state_78190__$1;
(statearr_78199_78246[(2)] = inst_78186);

(statearr_78199_78246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (21))){
var inst_78139 = (state_78190[(2)]);
var inst_78140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78141 = figwheel.client.auto_jump_to_error.call(null,opts,inst_78140);
var state_78190__$1 = (function (){var statearr_78200 = state_78190;
(statearr_78200[(7)] = inst_78139);

return statearr_78200;
})();
var statearr_78201_78247 = state_78190__$1;
(statearr_78201_78247[(2)] = inst_78141);

(statearr_78201_78247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (31))){
var inst_78169 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_78190__$1 = state_78190;
if(cljs.core.truth_(inst_78169)){
var statearr_78202_78248 = state_78190__$1;
(statearr_78202_78248[(1)] = (34));

} else {
var statearr_78203_78249 = state_78190__$1;
(statearr_78203_78249[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (32))){
var inst_78178 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78204_78250 = state_78190__$1;
(statearr_78204_78250[(2)] = inst_78178);

(statearr_78204_78250[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (33))){
var inst_78165 = (state_78190[(2)]);
var inst_78166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78167 = figwheel.client.auto_jump_to_error.call(null,opts,inst_78166);
var state_78190__$1 = (function (){var statearr_78205 = state_78190;
(statearr_78205[(8)] = inst_78165);

return statearr_78205;
})();
var statearr_78206_78251 = state_78190__$1;
(statearr_78206_78251[(2)] = inst_78167);

(statearr_78206_78251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (13))){
var inst_78124 = figwheel.client.heads_up.clear.call(null);
var state_78190__$1 = state_78190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(16),inst_78124);
} else {
if((state_val_78191 === (22))){
var inst_78145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78146 = figwheel.client.heads_up.append_warning_message.call(null,inst_78145);
var state_78190__$1 = state_78190;
var statearr_78207_78252 = state_78190__$1;
(statearr_78207_78252[(2)] = inst_78146);

(statearr_78207_78252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (36))){
var inst_78176 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78208_78253 = state_78190__$1;
(statearr_78208_78253[(2)] = inst_78176);

(statearr_78208_78253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (29))){
var inst_78156 = (state_78190[(2)]);
var inst_78157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78158 = figwheel.client.auto_jump_to_error.call(null,opts,inst_78157);
var state_78190__$1 = (function (){var statearr_78209 = state_78190;
(statearr_78209[(9)] = inst_78156);

return statearr_78209;
})();
var statearr_78210_78254 = state_78190__$1;
(statearr_78210_78254[(2)] = inst_78158);

(statearr_78210_78254[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (6))){
var inst_78105 = (state_78190[(10)]);
var state_78190__$1 = state_78190;
var statearr_78211_78255 = state_78190__$1;
(statearr_78211_78255[(2)] = inst_78105);

(statearr_78211_78255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (28))){
var inst_78152 = (state_78190[(2)]);
var inst_78153 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78154 = figwheel.client.heads_up.display_warning.call(null,inst_78153);
var state_78190__$1 = (function (){var statearr_78212 = state_78190;
(statearr_78212[(11)] = inst_78152);

return statearr_78212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(29),inst_78154);
} else {
if((state_val_78191 === (25))){
var inst_78150 = figwheel.client.heads_up.clear.call(null);
var state_78190__$1 = state_78190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(28),inst_78150);
} else {
if((state_val_78191 === (34))){
var inst_78171 = figwheel.client.heads_up.flash_loaded.call(null);
var state_78190__$1 = state_78190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(37),inst_78171);
} else {
if((state_val_78191 === (17))){
var inst_78130 = (state_78190[(2)]);
var inst_78131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78132 = figwheel.client.auto_jump_to_error.call(null,opts,inst_78131);
var state_78190__$1 = (function (){var statearr_78213 = state_78190;
(statearr_78213[(12)] = inst_78130);

return statearr_78213;
})();
var statearr_78214_78256 = state_78190__$1;
(statearr_78214_78256[(2)] = inst_78132);

(statearr_78214_78256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (3))){
var inst_78122 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_78190__$1 = state_78190;
if(cljs.core.truth_(inst_78122)){
var statearr_78215_78257 = state_78190__$1;
(statearr_78215_78257[(1)] = (13));

} else {
var statearr_78216_78258 = state_78190__$1;
(statearr_78216_78258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (12))){
var inst_78118 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78217_78259 = state_78190__$1;
(statearr_78217_78259[(2)] = inst_78118);

(statearr_78217_78259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (2))){
var inst_78105 = (state_78190[(10)]);
var inst_78105__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_78190__$1 = (function (){var statearr_78218 = state_78190;
(statearr_78218[(10)] = inst_78105__$1);

return statearr_78218;
})();
if(cljs.core.truth_(inst_78105__$1)){
var statearr_78219_78260 = state_78190__$1;
(statearr_78219_78260[(1)] = (5));

} else {
var statearr_78220_78261 = state_78190__$1;
(statearr_78220_78261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (23))){
var inst_78148 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_78190__$1 = state_78190;
if(cljs.core.truth_(inst_78148)){
var statearr_78221_78262 = state_78190__$1;
(statearr_78221_78262[(1)] = (25));

} else {
var statearr_78222_78263 = state_78190__$1;
(statearr_78222_78263[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (35))){
var state_78190__$1 = state_78190;
var statearr_78223_78264 = state_78190__$1;
(statearr_78223_78264[(2)] = null);

(statearr_78223_78264[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (19))){
var inst_78143 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_78190__$1 = state_78190;
if(cljs.core.truth_(inst_78143)){
var statearr_78224_78265 = state_78190__$1;
(statearr_78224_78265[(1)] = (22));

} else {
var statearr_78225_78266 = state_78190__$1;
(statearr_78225_78266[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (11))){
var inst_78114 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78226_78267 = state_78190__$1;
(statearr_78226_78267[(2)] = inst_78114);

(statearr_78226_78267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (9))){
var inst_78116 = figwheel.client.heads_up.clear.call(null);
var state_78190__$1 = state_78190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(12),inst_78116);
} else {
if((state_val_78191 === (5))){
var inst_78107 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_78190__$1 = state_78190;
var statearr_78227_78268 = state_78190__$1;
(statearr_78227_78268[(2)] = inst_78107);

(statearr_78227_78268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (14))){
var inst_78134 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_78190__$1 = state_78190;
if(cljs.core.truth_(inst_78134)){
var statearr_78228_78269 = state_78190__$1;
(statearr_78228_78269[(1)] = (18));

} else {
var statearr_78229_78270 = state_78190__$1;
(statearr_78229_78270[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (26))){
var inst_78160 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_78190__$1 = state_78190;
if(cljs.core.truth_(inst_78160)){
var statearr_78230_78271 = state_78190__$1;
(statearr_78230_78271[(1)] = (30));

} else {
var statearr_78231_78272 = state_78190__$1;
(statearr_78231_78272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (16))){
var inst_78126 = (state_78190[(2)]);
var inst_78127 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78128 = figwheel.client.heads_up.display_exception.call(null,inst_78127);
var state_78190__$1 = (function (){var statearr_78232 = state_78190;
(statearr_78232[(13)] = inst_78126);

return statearr_78232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(17),inst_78128);
} else {
if((state_val_78191 === (30))){
var inst_78162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78163 = figwheel.client.heads_up.display_warning.call(null,inst_78162);
var state_78190__$1 = state_78190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(33),inst_78163);
} else {
if((state_val_78191 === (10))){
var inst_78120 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78233_78273 = state_78190__$1;
(statearr_78233_78273[(2)] = inst_78120);

(statearr_78233_78273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (18))){
var inst_78136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78137 = figwheel.client.heads_up.display_exception.call(null,inst_78136);
var state_78190__$1 = state_78190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(21),inst_78137);
} else {
if((state_val_78191 === (37))){
var inst_78173 = (state_78190[(2)]);
var state_78190__$1 = state_78190;
var statearr_78234_78274 = state_78190__$1;
(statearr_78234_78274[(2)] = inst_78173);

(statearr_78234_78274[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78191 === (8))){
var inst_78112 = figwheel.client.heads_up.flash_loaded.call(null);
var state_78190__$1 = state_78190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78190__$1,(11),inst_78112);
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
});})(c__69495__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__69405__auto__,c__69495__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto____0 = (function (){
var statearr_78235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78235[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto__);

(statearr_78235[(1)] = (1));

return statearr_78235;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto____1 = (function (state_78190){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_78190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e78236){if((e78236 instanceof Object)){
var ex__69409__auto__ = e78236;
var statearr_78237_78275 = state_78190;
(statearr_78237_78275[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78276 = state_78190;
state_78190 = G__78276;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto__ = function(state_78190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto____1.call(this,state_78190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__,msg_hist,msg_names,msg))
})();
var state__69497__auto__ = (function (){var statearr_78238 = f__69496__auto__.call(null);
(statearr_78238[(6)] = c__69495__auto__);

return statearr_78238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__,msg_hist,msg_names,msg))
);

return c__69495__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__69495__auto___78305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___78305,ch){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___78305,ch){
return (function (state_78291){
var state_val_78292 = (state_78291[(1)]);
if((state_val_78292 === (1))){
var state_78291__$1 = state_78291;
var statearr_78293_78306 = state_78291__$1;
(statearr_78293_78306[(2)] = null);

(statearr_78293_78306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78292 === (2))){
var state_78291__$1 = state_78291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78291__$1,(4),ch);
} else {
if((state_val_78292 === (3))){
var inst_78289 = (state_78291[(2)]);
var state_78291__$1 = state_78291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78291__$1,inst_78289);
} else {
if((state_val_78292 === (4))){
var inst_78279 = (state_78291[(7)]);
var inst_78279__$1 = (state_78291[(2)]);
var state_78291__$1 = (function (){var statearr_78294 = state_78291;
(statearr_78294[(7)] = inst_78279__$1);

return statearr_78294;
})();
if(cljs.core.truth_(inst_78279__$1)){
var statearr_78295_78307 = state_78291__$1;
(statearr_78295_78307[(1)] = (5));

} else {
var statearr_78296_78308 = state_78291__$1;
(statearr_78296_78308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78292 === (5))){
var inst_78279 = (state_78291[(7)]);
var inst_78281 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_78279);
var state_78291__$1 = state_78291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78291__$1,(8),inst_78281);
} else {
if((state_val_78292 === (6))){
var state_78291__$1 = state_78291;
var statearr_78297_78309 = state_78291__$1;
(statearr_78297_78309[(2)] = null);

(statearr_78297_78309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78292 === (7))){
var inst_78287 = (state_78291[(2)]);
var state_78291__$1 = state_78291;
var statearr_78298_78310 = state_78291__$1;
(statearr_78298_78310[(2)] = inst_78287);

(statearr_78298_78310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78292 === (8))){
var inst_78283 = (state_78291[(2)]);
var state_78291__$1 = (function (){var statearr_78299 = state_78291;
(statearr_78299[(8)] = inst_78283);

return statearr_78299;
})();
var statearr_78300_78311 = state_78291__$1;
(statearr_78300_78311[(2)] = null);

(statearr_78300_78311[(1)] = (2));


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
});})(c__69495__auto___78305,ch))
;
return ((function (switch__69405__auto__,c__69495__auto___78305,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__69406__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__69406__auto____0 = (function (){
var statearr_78301 = [null,null,null,null,null,null,null,null,null];
(statearr_78301[(0)] = figwheel$client$heads_up_plugin_$_state_machine__69406__auto__);

(statearr_78301[(1)] = (1));

return statearr_78301;
});
var figwheel$client$heads_up_plugin_$_state_machine__69406__auto____1 = (function (state_78291){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_78291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e78302){if((e78302 instanceof Object)){
var ex__69409__auto__ = e78302;
var statearr_78303_78312 = state_78291;
(statearr_78303_78312[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78313 = state_78291;
state_78291 = G__78313;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__69406__auto__ = function(state_78291){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__69406__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__69406__auto____1.call(this,state_78291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__69406__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__69406__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___78305,ch))
})();
var state__69497__auto__ = (function (){var statearr_78304 = f__69496__auto__.call(null);
(statearr_78304[(6)] = c__69495__auto___78305);

return statearr_78304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___78305,ch))
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
var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__){
return (function (state_78319){
var state_val_78320 = (state_78319[(1)]);
if((state_val_78320 === (1))){
var inst_78314 = cljs.core.async.timeout.call(null,(3000));
var state_78319__$1 = state_78319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78319__$1,(2),inst_78314);
} else {
if((state_val_78320 === (2))){
var inst_78316 = (state_78319[(2)]);
var inst_78317 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_78319__$1 = (function (){var statearr_78321 = state_78319;
(statearr_78321[(7)] = inst_78316);

return statearr_78321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78319__$1,inst_78317);
} else {
return null;
}
}
});})(c__69495__auto__))
;
return ((function (switch__69405__auto__,c__69495__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__69406__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__69406__auto____0 = (function (){
var statearr_78322 = [null,null,null,null,null,null,null,null];
(statearr_78322[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__69406__auto__);

(statearr_78322[(1)] = (1));

return statearr_78322;
});
var figwheel$client$enforce_project_plugin_$_state_machine__69406__auto____1 = (function (state_78319){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_78319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e78323){if((e78323 instanceof Object)){
var ex__69409__auto__ = e78323;
var statearr_78324_78326 = state_78319;
(statearr_78324_78326[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78327 = state_78319;
state_78319 = G__78327;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__69406__auto__ = function(state_78319){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__69406__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__69406__auto____1.call(this,state_78319);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__69406__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__69406__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__))
})();
var state__69497__auto__ = (function (){var statearr_78325 = f__69496__auto__.call(null);
(statearr_78325[(6)] = c__69495__auto__);

return statearr_78325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__))
);

return c__69495__auto__;
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
var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__,figwheel_version,temp__6738__auto__){
return (function (state_78334){
var state_val_78335 = (state_78334[(1)]);
if((state_val_78335 === (1))){
var inst_78328 = cljs.core.async.timeout.call(null,(2000));
var state_78334__$1 = state_78334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78334__$1,(2),inst_78328);
} else {
if((state_val_78335 === (2))){
var inst_78330 = (state_78334[(2)]);
var inst_78331 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_78332 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_78331);
var state_78334__$1 = (function (){var statearr_78336 = state_78334;
(statearr_78336[(7)] = inst_78330);

return statearr_78336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78334__$1,inst_78332);
} else {
return null;
}
}
});})(c__69495__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__69405__auto__,c__69495__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto____0 = (function (){
var statearr_78337 = [null,null,null,null,null,null,null,null];
(statearr_78337[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto__);

(statearr_78337[(1)] = (1));

return statearr_78337;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto____1 = (function (state_78334){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_78334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e78338){if((e78338 instanceof Object)){
var ex__69409__auto__ = e78338;
var statearr_78339_78341 = state_78334;
(statearr_78339_78341[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78342 = state_78334;
state_78334 = G__78342;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto__ = function(state_78334){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto____1.call(this,state_78334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__,figwheel_version,temp__6738__auto__))
})();
var state__69497__auto__ = (function (){var statearr_78340 = f__69496__auto__.call(null);
(statearr_78340[(6)] = c__69495__auto__);

return statearr_78340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__,figwheel_version,temp__6738__auto__))
);

return c__69495__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__78343){
var map__78344 = p__78343;
var map__78344__$1 = ((((!((map__78344 == null)))?((((map__78344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78344):map__78344);
var file = cljs.core.get.call(null,map__78344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__78344__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__78344__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__78346 = "";
var G__78346__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78346),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__78346);
var G__78346__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78346__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__78346__$1);
if(cljs.core.truth_((function (){var and__64405__auto__ = line;
if(cljs.core.truth_(and__64405__auto__)){
return column;
} else {
return and__64405__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78346__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__78346__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__78347){
var map__78348 = p__78347;
var map__78348__$1 = ((((!((map__78348 == null)))?((((map__78348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78348):map__78348);
var ed = map__78348__$1;
var formatted_exception = cljs.core.get.call(null,map__78348__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__78348__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__78348__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__78350_78354 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__78351_78355 = null;
var count__78352_78356 = (0);
var i__78353_78357 = (0);
while(true){
if((i__78353_78357 < count__78352_78356)){
var msg_78358 = cljs.core._nth.call(null,chunk__78351_78355,i__78353_78357);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_78358);

var G__78359 = seq__78350_78354;
var G__78360 = chunk__78351_78355;
var G__78361 = count__78352_78356;
var G__78362 = (i__78353_78357 + (1));
seq__78350_78354 = G__78359;
chunk__78351_78355 = G__78360;
count__78352_78356 = G__78361;
i__78353_78357 = G__78362;
continue;
} else {
var temp__6738__auto___78363 = cljs.core.seq.call(null,seq__78350_78354);
if(temp__6738__auto___78363){
var seq__78350_78364__$1 = temp__6738__auto___78363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78350_78364__$1)){
var c__65348__auto___78365 = cljs.core.chunk_first.call(null,seq__78350_78364__$1);
var G__78366 = cljs.core.chunk_rest.call(null,seq__78350_78364__$1);
var G__78367 = c__65348__auto___78365;
var G__78368 = cljs.core.count.call(null,c__65348__auto___78365);
var G__78369 = (0);
seq__78350_78354 = G__78366;
chunk__78351_78355 = G__78367;
count__78352_78356 = G__78368;
i__78353_78357 = G__78369;
continue;
} else {
var msg_78370 = cljs.core.first.call(null,seq__78350_78364__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_78370);

var G__78371 = cljs.core.next.call(null,seq__78350_78364__$1);
var G__78372 = null;
var G__78373 = (0);
var G__78374 = (0);
seq__78350_78354 = G__78371;
chunk__78351_78355 = G__78372;
count__78352_78356 = G__78373;
i__78353_78357 = G__78374;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__78375){
var map__78376 = p__78375;
var map__78376__$1 = ((((!((map__78376 == null)))?((((map__78376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78376):map__78376);
var w = map__78376__$1;
var message = cljs.core.get.call(null,map__78376__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__64405__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__64405__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__64405__auto__;
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
var seq__78378 = cljs.core.seq.call(null,plugins);
var chunk__78379 = null;
var count__78380 = (0);
var i__78381 = (0);
while(true){
if((i__78381 < count__78380)){
var vec__78382 = cljs.core._nth.call(null,chunk__78379,i__78381);
var k = cljs.core.nth.call(null,vec__78382,(0),null);
var plugin = cljs.core.nth.call(null,vec__78382,(1),null);
if(cljs.core.truth_(plugin)){
var pl_78388 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__78378,chunk__78379,count__78380,i__78381,pl_78388,vec__78382,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_78388.call(null,msg_hist);
});})(seq__78378,chunk__78379,count__78380,i__78381,pl_78388,vec__78382,k,plugin))
);
} else {
}

var G__78389 = seq__78378;
var G__78390 = chunk__78379;
var G__78391 = count__78380;
var G__78392 = (i__78381 + (1));
seq__78378 = G__78389;
chunk__78379 = G__78390;
count__78380 = G__78391;
i__78381 = G__78392;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__78378);
if(temp__6738__auto__){
var seq__78378__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78378__$1)){
var c__65348__auto__ = cljs.core.chunk_first.call(null,seq__78378__$1);
var G__78393 = cljs.core.chunk_rest.call(null,seq__78378__$1);
var G__78394 = c__65348__auto__;
var G__78395 = cljs.core.count.call(null,c__65348__auto__);
var G__78396 = (0);
seq__78378 = G__78393;
chunk__78379 = G__78394;
count__78380 = G__78395;
i__78381 = G__78396;
continue;
} else {
var vec__78385 = cljs.core.first.call(null,seq__78378__$1);
var k = cljs.core.nth.call(null,vec__78385,(0),null);
var plugin = cljs.core.nth.call(null,vec__78385,(1),null);
if(cljs.core.truth_(plugin)){
var pl_78397 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__78378,chunk__78379,count__78380,i__78381,pl_78397,vec__78385,k,plugin,seq__78378__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_78397.call(null,msg_hist);
});})(seq__78378,chunk__78379,count__78380,i__78381,pl_78397,vec__78385,k,plugin,seq__78378__$1,temp__6738__auto__))
);
} else {
}

var G__78398 = cljs.core.next.call(null,seq__78378__$1);
var G__78399 = null;
var G__78400 = (0);
var G__78401 = (0);
seq__78378 = G__78398;
chunk__78379 = G__78399;
count__78380 = G__78400;
i__78381 = G__78401;
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
var G__78403 = arguments.length;
switch (G__78403) {
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

var seq__78404_78409 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__78405_78410 = null;
var count__78406_78411 = (0);
var i__78407_78412 = (0);
while(true){
if((i__78407_78412 < count__78406_78411)){
var msg_78413 = cljs.core._nth.call(null,chunk__78405_78410,i__78407_78412);
figwheel.client.socket.handle_incoming_message.call(null,msg_78413);

var G__78414 = seq__78404_78409;
var G__78415 = chunk__78405_78410;
var G__78416 = count__78406_78411;
var G__78417 = (i__78407_78412 + (1));
seq__78404_78409 = G__78414;
chunk__78405_78410 = G__78415;
count__78406_78411 = G__78416;
i__78407_78412 = G__78417;
continue;
} else {
var temp__6738__auto___78418 = cljs.core.seq.call(null,seq__78404_78409);
if(temp__6738__auto___78418){
var seq__78404_78419__$1 = temp__6738__auto___78418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78404_78419__$1)){
var c__65348__auto___78420 = cljs.core.chunk_first.call(null,seq__78404_78419__$1);
var G__78421 = cljs.core.chunk_rest.call(null,seq__78404_78419__$1);
var G__78422 = c__65348__auto___78420;
var G__78423 = cljs.core.count.call(null,c__65348__auto___78420);
var G__78424 = (0);
seq__78404_78409 = G__78421;
chunk__78405_78410 = G__78422;
count__78406_78411 = G__78423;
i__78407_78412 = G__78424;
continue;
} else {
var msg_78425 = cljs.core.first.call(null,seq__78404_78419__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_78425);

var G__78426 = cljs.core.next.call(null,seq__78404_78419__$1);
var G__78427 = null;
var G__78428 = (0);
var G__78429 = (0);
seq__78404_78409 = G__78426;
chunk__78405_78410 = G__78427;
count__78406_78411 = G__78428;
i__78407_78412 = G__78429;
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
var args__65701__auto__ = [];
var len__65694__auto___78434 = arguments.length;
var i__65695__auto___78435 = (0);
while(true){
if((i__65695__auto___78435 < len__65694__auto___78434)){
args__65701__auto__.push((arguments[i__65695__auto___78435]));

var G__78436 = (i__65695__auto___78435 + (1));
i__65695__auto___78435 = G__78436;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__78431){
var map__78432 = p__78431;
var map__78432__$1 = ((((!((map__78432 == null)))?((((map__78432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78432):map__78432);
var opts = map__78432__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq78430){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78430));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e78437){if((e78437 instanceof Error)){
var e = e78437;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e78437;

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
return (function (p__78438){
var map__78439 = p__78438;
var map__78439__$1 = ((((!((map__78439 == null)))?((((map__78439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78439):map__78439);
var msg_name = cljs.core.get.call(null,map__78439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506558357515
