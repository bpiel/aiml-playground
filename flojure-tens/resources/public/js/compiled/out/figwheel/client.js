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
}catch (e118366){if((e118366 instanceof Error)){
var e = e118366;
return "Error: Unable to stringify";
} else {
throw e118366;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__118369 = arguments.length;
switch (G__118369) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__118367_SHARP_){
if(typeof p1__118367_SHARP_ === 'string'){
return p1__118367_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__118367_SHARP_);
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
var args__59412__auto__ = [];
var len__59405__auto___118372 = arguments.length;
var i__59406__auto___118373 = (0);
while(true){
if((i__59406__auto___118373 < len__59405__auto___118372)){
args__59412__auto__.push((arguments[i__59406__auto___118373]));

var G__118374 = (i__59406__auto___118373 + (1));
i__59406__auto___118373 = G__118374;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq118371){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq118371));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__59412__auto__ = [];
var len__59405__auto___118376 = arguments.length;
var i__59406__auto___118377 = (0);
while(true){
if((i__59406__auto___118377 < len__59405__auto___118376)){
args__59412__auto__.push((arguments[i__59406__auto___118377]));

var G__118378 = (i__59406__auto___118377 + (1));
i__59406__auto___118377 = G__118378;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq118375){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq118375));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__118379){
var map__118380 = p__118379;
var map__118380__$1 = ((((!((map__118380 == null)))?((((map__118380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118380):map__118380);
var message = cljs.core.get.call(null,map__118380__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__118380__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__58128__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__58116__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__58116__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__58116__auto__;
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
var c__67983__auto___118459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___118459,ch){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___118459,ch){
return (function (state_118431){
var state_val_118432 = (state_118431[(1)]);
if((state_val_118432 === (7))){
var inst_118427 = (state_118431[(2)]);
var state_118431__$1 = state_118431;
var statearr_118433_118460 = state_118431__$1;
(statearr_118433_118460[(2)] = inst_118427);

(statearr_118433_118460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (1))){
var state_118431__$1 = state_118431;
var statearr_118434_118461 = state_118431__$1;
(statearr_118434_118461[(2)] = null);

(statearr_118434_118461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (4))){
var inst_118384 = (state_118431[(7)]);
var inst_118384__$1 = (state_118431[(2)]);
var state_118431__$1 = (function (){var statearr_118435 = state_118431;
(statearr_118435[(7)] = inst_118384__$1);

return statearr_118435;
})();
if(cljs.core.truth_(inst_118384__$1)){
var statearr_118436_118462 = state_118431__$1;
(statearr_118436_118462[(1)] = (5));

} else {
var statearr_118437_118463 = state_118431__$1;
(statearr_118437_118463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (15))){
var inst_118391 = (state_118431[(8)]);
var inst_118406 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_118391);
var inst_118407 = cljs.core.first.call(null,inst_118406);
var inst_118408 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_118407);
var inst_118409 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_118408)].join('');
var inst_118410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_118409);
var state_118431__$1 = state_118431;
var statearr_118438_118464 = state_118431__$1;
(statearr_118438_118464[(2)] = inst_118410);

(statearr_118438_118464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (13))){
var inst_118415 = (state_118431[(2)]);
var state_118431__$1 = state_118431;
var statearr_118439_118465 = state_118431__$1;
(statearr_118439_118465[(2)] = inst_118415);

(statearr_118439_118465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (6))){
var state_118431__$1 = state_118431;
var statearr_118440_118466 = state_118431__$1;
(statearr_118440_118466[(2)] = null);

(statearr_118440_118466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (17))){
var inst_118413 = (state_118431[(2)]);
var state_118431__$1 = state_118431;
var statearr_118441_118467 = state_118431__$1;
(statearr_118441_118467[(2)] = inst_118413);

(statearr_118441_118467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (3))){
var inst_118429 = (state_118431[(2)]);
var state_118431__$1 = state_118431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118431__$1,inst_118429);
} else {
if((state_val_118432 === (12))){
var inst_118390 = (state_118431[(9)]);
var inst_118404 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_118390,opts);
var state_118431__$1 = state_118431;
if(cljs.core.truth_(inst_118404)){
var statearr_118442_118468 = state_118431__$1;
(statearr_118442_118468[(1)] = (15));

} else {
var statearr_118443_118469 = state_118431__$1;
(statearr_118443_118469[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (2))){
var state_118431__$1 = state_118431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118431__$1,(4),ch);
} else {
if((state_val_118432 === (11))){
var inst_118391 = (state_118431[(8)]);
var inst_118396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_118397 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_118391);
var inst_118398 = cljs.core.async.timeout.call(null,(1000));
var inst_118399 = [inst_118397,inst_118398];
var inst_118400 = (new cljs.core.PersistentVector(null,2,(5),inst_118396,inst_118399,null));
var state_118431__$1 = state_118431;
return cljs.core.async.ioc_alts_BANG_.call(null,state_118431__$1,(14),inst_118400);
} else {
if((state_val_118432 === (9))){
var inst_118391 = (state_118431[(8)]);
var inst_118417 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_118418 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_118391);
var inst_118419 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_118418);
var inst_118420 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_118419)].join('');
var inst_118421 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_118420);
var state_118431__$1 = (function (){var statearr_118444 = state_118431;
(statearr_118444[(10)] = inst_118417);

return statearr_118444;
})();
var statearr_118445_118470 = state_118431__$1;
(statearr_118445_118470[(2)] = inst_118421);

(statearr_118445_118470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (5))){
var inst_118384 = (state_118431[(7)]);
var inst_118386 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_118387 = (new cljs.core.PersistentArrayMap(null,2,inst_118386,null));
var inst_118388 = (new cljs.core.PersistentHashSet(null,inst_118387,null));
var inst_118389 = figwheel.client.focus_msgs.call(null,inst_118388,inst_118384);
var inst_118390 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_118389);
var inst_118391 = cljs.core.first.call(null,inst_118389);
var inst_118392 = figwheel.client.autoload_QMARK_.call(null);
var state_118431__$1 = (function (){var statearr_118446 = state_118431;
(statearr_118446[(8)] = inst_118391);

(statearr_118446[(9)] = inst_118390);

return statearr_118446;
})();
if(cljs.core.truth_(inst_118392)){
var statearr_118447_118471 = state_118431__$1;
(statearr_118447_118471[(1)] = (8));

} else {
var statearr_118448_118472 = state_118431__$1;
(statearr_118448_118472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (14))){
var inst_118402 = (state_118431[(2)]);
var state_118431__$1 = state_118431;
var statearr_118449_118473 = state_118431__$1;
(statearr_118449_118473[(2)] = inst_118402);

(statearr_118449_118473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (16))){
var state_118431__$1 = state_118431;
var statearr_118450_118474 = state_118431__$1;
(statearr_118450_118474[(2)] = null);

(statearr_118450_118474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (10))){
var inst_118423 = (state_118431[(2)]);
var state_118431__$1 = (function (){var statearr_118451 = state_118431;
(statearr_118451[(11)] = inst_118423);

return statearr_118451;
})();
var statearr_118452_118475 = state_118431__$1;
(statearr_118452_118475[(2)] = null);

(statearr_118452_118475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118432 === (8))){
var inst_118390 = (state_118431[(9)]);
var inst_118394 = figwheel.client.reload_file_state_QMARK_.call(null,inst_118390,opts);
var state_118431__$1 = state_118431;
if(cljs.core.truth_(inst_118394)){
var statearr_118453_118476 = state_118431__$1;
(statearr_118453_118476[(1)] = (11));

} else {
var statearr_118454_118477 = state_118431__$1;
(statearr_118454_118477[(1)] = (12));

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
});})(c__67983__auto___118459,ch))
;
return ((function (switch__67960__auto__,c__67983__auto___118459,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__67961__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__67961__auto____0 = (function (){
var statearr_118455 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_118455[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__67961__auto__);

(statearr_118455[(1)] = (1));

return statearr_118455;
});
var figwheel$client$file_reloader_plugin_$_state_machine__67961__auto____1 = (function (state_118431){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_118431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e118456){if((e118456 instanceof Object)){
var ex__67964__auto__ = e118456;
var statearr_118457_118478 = state_118431;
(statearr_118457_118478[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e118456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118479 = state_118431;
state_118431 = G__118479;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__67961__auto__ = function(state_118431){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__67961__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__67961__auto____1.call(this,state_118431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__67961__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__67961__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___118459,ch))
})();
var state__67985__auto__ = (function (){var statearr_118458 = f__67984__auto__.call(null);
(statearr_118458[(6)] = c__67983__auto___118459);

return statearr_118458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___118459,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__118480_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__118480_SHARP_));
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
var base_path_118482 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_118482){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e118481){if((e118481 instanceof Error)){
var e = e118481;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_118482], null));
} else {
var e = e118481;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_118482))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__118483){
var map__118484 = p__118483;
var map__118484__$1 = ((((!((map__118484 == null)))?((((map__118484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118484):map__118484);
var opts = map__118484__$1;
var build_id = cljs.core.get.call(null,map__118484__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__118484,map__118484__$1,opts,build_id){
return (function (p__118486){
var vec__118487 = p__118486;
var seq__118488 = cljs.core.seq.call(null,vec__118487);
var first__118489 = cljs.core.first.call(null,seq__118488);
var seq__118488__$1 = cljs.core.next.call(null,seq__118488);
var map__118490 = first__118489;
var map__118490__$1 = ((((!((map__118490 == null)))?((((map__118490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118490):map__118490);
var msg = map__118490__$1;
var msg_name = cljs.core.get.call(null,map__118490__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__118488__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__118487,seq__118488,first__118489,seq__118488__$1,map__118490,map__118490__$1,msg,msg_name,_,map__118484,map__118484__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__118487,seq__118488,first__118489,seq__118488__$1,map__118490,map__118490__$1,msg,msg_name,_,map__118484,map__118484__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__118484,map__118484__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__118492){
var vec__118493 = p__118492;
var seq__118494 = cljs.core.seq.call(null,vec__118493);
var first__118495 = cljs.core.first.call(null,seq__118494);
var seq__118494__$1 = cljs.core.next.call(null,seq__118494);
var map__118496 = first__118495;
var map__118496__$1 = ((((!((map__118496 == null)))?((((map__118496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118496):map__118496);
var msg = map__118496__$1;
var msg_name = cljs.core.get.call(null,map__118496__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__118494__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__118498){
var map__118499 = p__118498;
var map__118499__$1 = ((((!((map__118499 == null)))?((((map__118499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118499):map__118499);
var on_compile_warning = cljs.core.get.call(null,map__118499__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__118499__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__118499,map__118499__$1,on_compile_warning,on_compile_fail){
return (function (p__118501){
var vec__118502 = p__118501;
var seq__118503 = cljs.core.seq.call(null,vec__118502);
var first__118504 = cljs.core.first.call(null,seq__118503);
var seq__118503__$1 = cljs.core.next.call(null,seq__118503);
var map__118505 = first__118504;
var map__118505__$1 = ((((!((map__118505 == null)))?((((map__118505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118505):map__118505);
var msg = map__118505__$1;
var msg_name = cljs.core.get.call(null,map__118505__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__118503__$1;
var pred__118507 = cljs.core._EQ_;
var expr__118508 = msg_name;
if(cljs.core.truth_(pred__118507.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__118508))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__118507.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__118508))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__118499,map__118499__$1,on_compile_warning,on_compile_fail))
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
var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__,msg_hist,msg_names,msg){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__,msg_hist,msg_names,msg){
return (function (state_118597){
var state_val_118598 = (state_118597[(1)]);
if((state_val_118598 === (7))){
var inst_118517 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
if(cljs.core.truth_(inst_118517)){
var statearr_118599_118646 = state_118597__$1;
(statearr_118599_118646[(1)] = (8));

} else {
var statearr_118600_118647 = state_118597__$1;
(statearr_118600_118647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (20))){
var inst_118591 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118601_118648 = state_118597__$1;
(statearr_118601_118648[(2)] = inst_118591);

(statearr_118601_118648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (27))){
var inst_118587 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118602_118649 = state_118597__$1;
(statearr_118602_118649[(2)] = inst_118587);

(statearr_118602_118649[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (1))){
var inst_118510 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_118597__$1 = state_118597;
if(cljs.core.truth_(inst_118510)){
var statearr_118603_118650 = state_118597__$1;
(statearr_118603_118650[(1)] = (2));

} else {
var statearr_118604_118651 = state_118597__$1;
(statearr_118604_118651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (24))){
var inst_118589 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118605_118652 = state_118597__$1;
(statearr_118605_118652[(2)] = inst_118589);

(statearr_118605_118652[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (4))){
var inst_118595 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118597__$1,inst_118595);
} else {
if((state_val_118598 === (15))){
var inst_118593 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118606_118653 = state_118597__$1;
(statearr_118606_118653[(2)] = inst_118593);

(statearr_118606_118653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (21))){
var inst_118546 = (state_118597[(2)]);
var inst_118547 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118548 = figwheel.client.auto_jump_to_error.call(null,opts,inst_118547);
var state_118597__$1 = (function (){var statearr_118607 = state_118597;
(statearr_118607[(7)] = inst_118546);

return statearr_118607;
})();
var statearr_118608_118654 = state_118597__$1;
(statearr_118608_118654[(2)] = inst_118548);

(statearr_118608_118654[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (31))){
var inst_118576 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_118597__$1 = state_118597;
if(cljs.core.truth_(inst_118576)){
var statearr_118609_118655 = state_118597__$1;
(statearr_118609_118655[(1)] = (34));

} else {
var statearr_118610_118656 = state_118597__$1;
(statearr_118610_118656[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (32))){
var inst_118585 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118611_118657 = state_118597__$1;
(statearr_118611_118657[(2)] = inst_118585);

(statearr_118611_118657[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (33))){
var inst_118572 = (state_118597[(2)]);
var inst_118573 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118574 = figwheel.client.auto_jump_to_error.call(null,opts,inst_118573);
var state_118597__$1 = (function (){var statearr_118612 = state_118597;
(statearr_118612[(8)] = inst_118572);

return statearr_118612;
})();
var statearr_118613_118658 = state_118597__$1;
(statearr_118613_118658[(2)] = inst_118574);

(statearr_118613_118658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (13))){
var inst_118531 = figwheel.client.heads_up.clear.call(null);
var state_118597__$1 = state_118597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(16),inst_118531);
} else {
if((state_val_118598 === (22))){
var inst_118552 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118553 = figwheel.client.heads_up.append_warning_message.call(null,inst_118552);
var state_118597__$1 = state_118597;
var statearr_118614_118659 = state_118597__$1;
(statearr_118614_118659[(2)] = inst_118553);

(statearr_118614_118659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (36))){
var inst_118583 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118615_118660 = state_118597__$1;
(statearr_118615_118660[(2)] = inst_118583);

(statearr_118615_118660[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (29))){
var inst_118563 = (state_118597[(2)]);
var inst_118564 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118565 = figwheel.client.auto_jump_to_error.call(null,opts,inst_118564);
var state_118597__$1 = (function (){var statearr_118616 = state_118597;
(statearr_118616[(9)] = inst_118563);

return statearr_118616;
})();
var statearr_118617_118661 = state_118597__$1;
(statearr_118617_118661[(2)] = inst_118565);

(statearr_118617_118661[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (6))){
var inst_118512 = (state_118597[(10)]);
var state_118597__$1 = state_118597;
var statearr_118618_118662 = state_118597__$1;
(statearr_118618_118662[(2)] = inst_118512);

(statearr_118618_118662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (28))){
var inst_118559 = (state_118597[(2)]);
var inst_118560 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118561 = figwheel.client.heads_up.display_warning.call(null,inst_118560);
var state_118597__$1 = (function (){var statearr_118619 = state_118597;
(statearr_118619[(11)] = inst_118559);

return statearr_118619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(29),inst_118561);
} else {
if((state_val_118598 === (25))){
var inst_118557 = figwheel.client.heads_up.clear.call(null);
var state_118597__$1 = state_118597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(28),inst_118557);
} else {
if((state_val_118598 === (34))){
var inst_118578 = figwheel.client.heads_up.flash_loaded.call(null);
var state_118597__$1 = state_118597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(37),inst_118578);
} else {
if((state_val_118598 === (17))){
var inst_118537 = (state_118597[(2)]);
var inst_118538 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118539 = figwheel.client.auto_jump_to_error.call(null,opts,inst_118538);
var state_118597__$1 = (function (){var statearr_118620 = state_118597;
(statearr_118620[(12)] = inst_118537);

return statearr_118620;
})();
var statearr_118621_118663 = state_118597__$1;
(statearr_118621_118663[(2)] = inst_118539);

(statearr_118621_118663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (3))){
var inst_118529 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_118597__$1 = state_118597;
if(cljs.core.truth_(inst_118529)){
var statearr_118622_118664 = state_118597__$1;
(statearr_118622_118664[(1)] = (13));

} else {
var statearr_118623_118665 = state_118597__$1;
(statearr_118623_118665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (12))){
var inst_118525 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118624_118666 = state_118597__$1;
(statearr_118624_118666[(2)] = inst_118525);

(statearr_118624_118666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (2))){
var inst_118512 = (state_118597[(10)]);
var inst_118512__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_118597__$1 = (function (){var statearr_118625 = state_118597;
(statearr_118625[(10)] = inst_118512__$1);

return statearr_118625;
})();
if(cljs.core.truth_(inst_118512__$1)){
var statearr_118626_118667 = state_118597__$1;
(statearr_118626_118667[(1)] = (5));

} else {
var statearr_118627_118668 = state_118597__$1;
(statearr_118627_118668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (23))){
var inst_118555 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_118597__$1 = state_118597;
if(cljs.core.truth_(inst_118555)){
var statearr_118628_118669 = state_118597__$1;
(statearr_118628_118669[(1)] = (25));

} else {
var statearr_118629_118670 = state_118597__$1;
(statearr_118629_118670[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (35))){
var state_118597__$1 = state_118597;
var statearr_118630_118671 = state_118597__$1;
(statearr_118630_118671[(2)] = null);

(statearr_118630_118671[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (19))){
var inst_118550 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_118597__$1 = state_118597;
if(cljs.core.truth_(inst_118550)){
var statearr_118631_118672 = state_118597__$1;
(statearr_118631_118672[(1)] = (22));

} else {
var statearr_118632_118673 = state_118597__$1;
(statearr_118632_118673[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (11))){
var inst_118521 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118633_118674 = state_118597__$1;
(statearr_118633_118674[(2)] = inst_118521);

(statearr_118633_118674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (9))){
var inst_118523 = figwheel.client.heads_up.clear.call(null);
var state_118597__$1 = state_118597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(12),inst_118523);
} else {
if((state_val_118598 === (5))){
var inst_118514 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_118597__$1 = state_118597;
var statearr_118634_118675 = state_118597__$1;
(statearr_118634_118675[(2)] = inst_118514);

(statearr_118634_118675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (14))){
var inst_118541 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_118597__$1 = state_118597;
if(cljs.core.truth_(inst_118541)){
var statearr_118635_118676 = state_118597__$1;
(statearr_118635_118676[(1)] = (18));

} else {
var statearr_118636_118677 = state_118597__$1;
(statearr_118636_118677[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (26))){
var inst_118567 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_118597__$1 = state_118597;
if(cljs.core.truth_(inst_118567)){
var statearr_118637_118678 = state_118597__$1;
(statearr_118637_118678[(1)] = (30));

} else {
var statearr_118638_118679 = state_118597__$1;
(statearr_118638_118679[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (16))){
var inst_118533 = (state_118597[(2)]);
var inst_118534 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118535 = figwheel.client.heads_up.display_exception.call(null,inst_118534);
var state_118597__$1 = (function (){var statearr_118639 = state_118597;
(statearr_118639[(13)] = inst_118533);

return statearr_118639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(17),inst_118535);
} else {
if((state_val_118598 === (30))){
var inst_118569 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118570 = figwheel.client.heads_up.display_warning.call(null,inst_118569);
var state_118597__$1 = state_118597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(33),inst_118570);
} else {
if((state_val_118598 === (10))){
var inst_118527 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118640_118680 = state_118597__$1;
(statearr_118640_118680[(2)] = inst_118527);

(statearr_118640_118680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (18))){
var inst_118543 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_118544 = figwheel.client.heads_up.display_exception.call(null,inst_118543);
var state_118597__$1 = state_118597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(21),inst_118544);
} else {
if((state_val_118598 === (37))){
var inst_118580 = (state_118597[(2)]);
var state_118597__$1 = state_118597;
var statearr_118641_118681 = state_118597__$1;
(statearr_118641_118681[(2)] = inst_118580);

(statearr_118641_118681[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118598 === (8))){
var inst_118519 = figwheel.client.heads_up.flash_loaded.call(null);
var state_118597__$1 = state_118597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118597__$1,(11),inst_118519);
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
});})(c__67983__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__67960__auto__,c__67983__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto____0 = (function (){
var statearr_118642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_118642[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto__);

(statearr_118642[(1)] = (1));

return statearr_118642;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto____1 = (function (state_118597){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_118597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e118643){if((e118643 instanceof Object)){
var ex__67964__auto__ = e118643;
var statearr_118644_118682 = state_118597;
(statearr_118644_118682[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e118643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118683 = state_118597;
state_118597 = G__118683;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto__ = function(state_118597){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto____1.call(this,state_118597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__,msg_hist,msg_names,msg))
})();
var state__67985__auto__ = (function (){var statearr_118645 = f__67984__auto__.call(null);
(statearr_118645[(6)] = c__67983__auto__);

return statearr_118645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__,msg_hist,msg_names,msg))
);

return c__67983__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__67983__auto___118712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___118712,ch){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___118712,ch){
return (function (state_118698){
var state_val_118699 = (state_118698[(1)]);
if((state_val_118699 === (1))){
var state_118698__$1 = state_118698;
var statearr_118700_118713 = state_118698__$1;
(statearr_118700_118713[(2)] = null);

(statearr_118700_118713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118699 === (2))){
var state_118698__$1 = state_118698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118698__$1,(4),ch);
} else {
if((state_val_118699 === (3))){
var inst_118696 = (state_118698[(2)]);
var state_118698__$1 = state_118698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118698__$1,inst_118696);
} else {
if((state_val_118699 === (4))){
var inst_118686 = (state_118698[(7)]);
var inst_118686__$1 = (state_118698[(2)]);
var state_118698__$1 = (function (){var statearr_118701 = state_118698;
(statearr_118701[(7)] = inst_118686__$1);

return statearr_118701;
})();
if(cljs.core.truth_(inst_118686__$1)){
var statearr_118702_118714 = state_118698__$1;
(statearr_118702_118714[(1)] = (5));

} else {
var statearr_118703_118715 = state_118698__$1;
(statearr_118703_118715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118699 === (5))){
var inst_118686 = (state_118698[(7)]);
var inst_118688 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_118686);
var state_118698__$1 = state_118698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118698__$1,(8),inst_118688);
} else {
if((state_val_118699 === (6))){
var state_118698__$1 = state_118698;
var statearr_118704_118716 = state_118698__$1;
(statearr_118704_118716[(2)] = null);

(statearr_118704_118716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118699 === (7))){
var inst_118694 = (state_118698[(2)]);
var state_118698__$1 = state_118698;
var statearr_118705_118717 = state_118698__$1;
(statearr_118705_118717[(2)] = inst_118694);

(statearr_118705_118717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118699 === (8))){
var inst_118690 = (state_118698[(2)]);
var state_118698__$1 = (function (){var statearr_118706 = state_118698;
(statearr_118706[(8)] = inst_118690);

return statearr_118706;
})();
var statearr_118707_118718 = state_118698__$1;
(statearr_118707_118718[(2)] = null);

(statearr_118707_118718[(1)] = (2));


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
});})(c__67983__auto___118712,ch))
;
return ((function (switch__67960__auto__,c__67983__auto___118712,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__67961__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__67961__auto____0 = (function (){
var statearr_118708 = [null,null,null,null,null,null,null,null,null];
(statearr_118708[(0)] = figwheel$client$heads_up_plugin_$_state_machine__67961__auto__);

(statearr_118708[(1)] = (1));

return statearr_118708;
});
var figwheel$client$heads_up_plugin_$_state_machine__67961__auto____1 = (function (state_118698){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_118698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e118709){if((e118709 instanceof Object)){
var ex__67964__auto__ = e118709;
var statearr_118710_118719 = state_118698;
(statearr_118710_118719[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e118709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118720 = state_118698;
state_118698 = G__118720;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__67961__auto__ = function(state_118698){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__67961__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__67961__auto____1.call(this,state_118698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__67961__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__67961__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___118712,ch))
})();
var state__67985__auto__ = (function (){var statearr_118711 = f__67984__auto__.call(null);
(statearr_118711[(6)] = c__67983__auto___118712);

return statearr_118711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___118712,ch))
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
var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__){
return (function (state_118726){
var state_val_118727 = (state_118726[(1)]);
if((state_val_118727 === (1))){
var inst_118721 = cljs.core.async.timeout.call(null,(3000));
var state_118726__$1 = state_118726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118726__$1,(2),inst_118721);
} else {
if((state_val_118727 === (2))){
var inst_118723 = (state_118726[(2)]);
var inst_118724 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_118726__$1 = (function (){var statearr_118728 = state_118726;
(statearr_118728[(7)] = inst_118723);

return statearr_118728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118726__$1,inst_118724);
} else {
return null;
}
}
});})(c__67983__auto__))
;
return ((function (switch__67960__auto__,c__67983__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__67961__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__67961__auto____0 = (function (){
var statearr_118729 = [null,null,null,null,null,null,null,null];
(statearr_118729[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__67961__auto__);

(statearr_118729[(1)] = (1));

return statearr_118729;
});
var figwheel$client$enforce_project_plugin_$_state_machine__67961__auto____1 = (function (state_118726){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_118726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e118730){if((e118730 instanceof Object)){
var ex__67964__auto__ = e118730;
var statearr_118731_118733 = state_118726;
(statearr_118731_118733[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e118730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118734 = state_118726;
state_118726 = G__118734;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__67961__auto__ = function(state_118726){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__67961__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__67961__auto____1.call(this,state_118726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__67961__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__67961__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__))
})();
var state__67985__auto__ = (function (){var statearr_118732 = f__67984__auto__.call(null);
(statearr_118732[(6)] = c__67983__auto__);

return statearr_118732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__))
);

return c__67983__auto__;
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
var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__,figwheel_version,temp__6738__auto__){
return (function (state_118741){
var state_val_118742 = (state_118741[(1)]);
if((state_val_118742 === (1))){
var inst_118735 = cljs.core.async.timeout.call(null,(2000));
var state_118741__$1 = state_118741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118741__$1,(2),inst_118735);
} else {
if((state_val_118742 === (2))){
var inst_118737 = (state_118741[(2)]);
var inst_118738 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_118739 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_118738);
var state_118741__$1 = (function (){var statearr_118743 = state_118741;
(statearr_118743[(7)] = inst_118737);

return statearr_118743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118741__$1,inst_118739);
} else {
return null;
}
}
});})(c__67983__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__67960__auto__,c__67983__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto____0 = (function (){
var statearr_118744 = [null,null,null,null,null,null,null,null];
(statearr_118744[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto__);

(statearr_118744[(1)] = (1));

return statearr_118744;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto____1 = (function (state_118741){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_118741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e118745){if((e118745 instanceof Object)){
var ex__67964__auto__ = e118745;
var statearr_118746_118748 = state_118741;
(statearr_118746_118748[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e118745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118749 = state_118741;
state_118741 = G__118749;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto__ = function(state_118741){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto____1.call(this,state_118741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__,figwheel_version,temp__6738__auto__))
})();
var state__67985__auto__ = (function (){var statearr_118747 = f__67984__auto__.call(null);
(statearr_118747[(6)] = c__67983__auto__);

return statearr_118747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__,figwheel_version,temp__6738__auto__))
);

return c__67983__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__118750){
var map__118751 = p__118750;
var map__118751__$1 = ((((!((map__118751 == null)))?((((map__118751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118751):map__118751);
var file = cljs.core.get.call(null,map__118751__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__118751__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__118751__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__118753 = "";
var G__118753__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__118753),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__118753);
var G__118753__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__118753__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__118753__$1);
if(cljs.core.truth_((function (){var and__58116__auto__ = line;
if(cljs.core.truth_(and__58116__auto__)){
return column;
} else {
return and__58116__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__118753__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__118753__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__118754){
var map__118755 = p__118754;
var map__118755__$1 = ((((!((map__118755 == null)))?((((map__118755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118755):map__118755);
var ed = map__118755__$1;
var formatted_exception = cljs.core.get.call(null,map__118755__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__118755__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__118755__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__118757_118761 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__118758_118762 = null;
var count__118759_118763 = (0);
var i__118760_118764 = (0);
while(true){
if((i__118760_118764 < count__118759_118763)){
var msg_118765 = cljs.core._nth.call(null,chunk__118758_118762,i__118760_118764);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_118765);

var G__118766 = seq__118757_118761;
var G__118767 = chunk__118758_118762;
var G__118768 = count__118759_118763;
var G__118769 = (i__118760_118764 + (1));
seq__118757_118761 = G__118766;
chunk__118758_118762 = G__118767;
count__118759_118763 = G__118768;
i__118760_118764 = G__118769;
continue;
} else {
var temp__6738__auto___118770 = cljs.core.seq.call(null,seq__118757_118761);
if(temp__6738__auto___118770){
var seq__118757_118771__$1 = temp__6738__auto___118770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__118757_118771__$1)){
var c__59059__auto___118772 = cljs.core.chunk_first.call(null,seq__118757_118771__$1);
var G__118773 = cljs.core.chunk_rest.call(null,seq__118757_118771__$1);
var G__118774 = c__59059__auto___118772;
var G__118775 = cljs.core.count.call(null,c__59059__auto___118772);
var G__118776 = (0);
seq__118757_118761 = G__118773;
chunk__118758_118762 = G__118774;
count__118759_118763 = G__118775;
i__118760_118764 = G__118776;
continue;
} else {
var msg_118777 = cljs.core.first.call(null,seq__118757_118771__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_118777);

var G__118778 = cljs.core.next.call(null,seq__118757_118771__$1);
var G__118779 = null;
var G__118780 = (0);
var G__118781 = (0);
seq__118757_118761 = G__118778;
chunk__118758_118762 = G__118779;
count__118759_118763 = G__118780;
i__118760_118764 = G__118781;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__118782){
var map__118783 = p__118782;
var map__118783__$1 = ((((!((map__118783 == null)))?((((map__118783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118783):map__118783);
var w = map__118783__$1;
var message = cljs.core.get.call(null,map__118783__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__58116__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__58116__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__58116__auto__;
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
var seq__118785 = cljs.core.seq.call(null,plugins);
var chunk__118786 = null;
var count__118787 = (0);
var i__118788 = (0);
while(true){
if((i__118788 < count__118787)){
var vec__118789 = cljs.core._nth.call(null,chunk__118786,i__118788);
var k = cljs.core.nth.call(null,vec__118789,(0),null);
var plugin = cljs.core.nth.call(null,vec__118789,(1),null);
if(cljs.core.truth_(plugin)){
var pl_118795 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__118785,chunk__118786,count__118787,i__118788,pl_118795,vec__118789,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_118795.call(null,msg_hist);
});})(seq__118785,chunk__118786,count__118787,i__118788,pl_118795,vec__118789,k,plugin))
);
} else {
}

var G__118796 = seq__118785;
var G__118797 = chunk__118786;
var G__118798 = count__118787;
var G__118799 = (i__118788 + (1));
seq__118785 = G__118796;
chunk__118786 = G__118797;
count__118787 = G__118798;
i__118788 = G__118799;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__118785);
if(temp__6738__auto__){
var seq__118785__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__118785__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__118785__$1);
var G__118800 = cljs.core.chunk_rest.call(null,seq__118785__$1);
var G__118801 = c__59059__auto__;
var G__118802 = cljs.core.count.call(null,c__59059__auto__);
var G__118803 = (0);
seq__118785 = G__118800;
chunk__118786 = G__118801;
count__118787 = G__118802;
i__118788 = G__118803;
continue;
} else {
var vec__118792 = cljs.core.first.call(null,seq__118785__$1);
var k = cljs.core.nth.call(null,vec__118792,(0),null);
var plugin = cljs.core.nth.call(null,vec__118792,(1),null);
if(cljs.core.truth_(plugin)){
var pl_118804 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__118785,chunk__118786,count__118787,i__118788,pl_118804,vec__118792,k,plugin,seq__118785__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_118804.call(null,msg_hist);
});})(seq__118785,chunk__118786,count__118787,i__118788,pl_118804,vec__118792,k,plugin,seq__118785__$1,temp__6738__auto__))
);
} else {
}

var G__118805 = cljs.core.next.call(null,seq__118785__$1);
var G__118806 = null;
var G__118807 = (0);
var G__118808 = (0);
seq__118785 = G__118805;
chunk__118786 = G__118806;
count__118787 = G__118807;
i__118788 = G__118808;
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
var G__118810 = arguments.length;
switch (G__118810) {
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

var seq__118811_118816 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__118812_118817 = null;
var count__118813_118818 = (0);
var i__118814_118819 = (0);
while(true){
if((i__118814_118819 < count__118813_118818)){
var msg_118820 = cljs.core._nth.call(null,chunk__118812_118817,i__118814_118819);
figwheel.client.socket.handle_incoming_message.call(null,msg_118820);

var G__118821 = seq__118811_118816;
var G__118822 = chunk__118812_118817;
var G__118823 = count__118813_118818;
var G__118824 = (i__118814_118819 + (1));
seq__118811_118816 = G__118821;
chunk__118812_118817 = G__118822;
count__118813_118818 = G__118823;
i__118814_118819 = G__118824;
continue;
} else {
var temp__6738__auto___118825 = cljs.core.seq.call(null,seq__118811_118816);
if(temp__6738__auto___118825){
var seq__118811_118826__$1 = temp__6738__auto___118825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__118811_118826__$1)){
var c__59059__auto___118827 = cljs.core.chunk_first.call(null,seq__118811_118826__$1);
var G__118828 = cljs.core.chunk_rest.call(null,seq__118811_118826__$1);
var G__118829 = c__59059__auto___118827;
var G__118830 = cljs.core.count.call(null,c__59059__auto___118827);
var G__118831 = (0);
seq__118811_118816 = G__118828;
chunk__118812_118817 = G__118829;
count__118813_118818 = G__118830;
i__118814_118819 = G__118831;
continue;
} else {
var msg_118832 = cljs.core.first.call(null,seq__118811_118826__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_118832);

var G__118833 = cljs.core.next.call(null,seq__118811_118826__$1);
var G__118834 = null;
var G__118835 = (0);
var G__118836 = (0);
seq__118811_118816 = G__118833;
chunk__118812_118817 = G__118834;
count__118813_118818 = G__118835;
i__118814_118819 = G__118836;
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
var args__59412__auto__ = [];
var len__59405__auto___118841 = arguments.length;
var i__59406__auto___118842 = (0);
while(true){
if((i__59406__auto___118842 < len__59405__auto___118841)){
args__59412__auto__.push((arguments[i__59406__auto___118842]));

var G__118843 = (i__59406__auto___118842 + (1));
i__59406__auto___118842 = G__118843;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__118838){
var map__118839 = p__118838;
var map__118839__$1 = ((((!((map__118839 == null)))?((((map__118839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118839):map__118839);
var opts = map__118839__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq118837){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq118837));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e118844){if((e118844 instanceof Error)){
var e = e118844;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e118844;

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
return (function (p__118845){
var map__118846 = p__118845;
var map__118846__$1 = ((((!((map__118846 == null)))?((((map__118846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118846):map__118846);
var msg_name = cljs.core.get.call(null,map__118846__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1505927832486
