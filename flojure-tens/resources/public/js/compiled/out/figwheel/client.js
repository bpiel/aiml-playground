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
}catch (e23744){if((e23744 instanceof Error)){
var e = e23744;
return "Error: Unable to stringify";
} else {
throw e23744;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__23747 = arguments.length;
switch (G__23747) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__23745_SHARP_){
if(typeof p1__23745_SHARP_ === 'string'){
return p1__23745_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__23745_SHARP_);
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
var args__11094__auto__ = [];
var len__11087__auto___23750 = arguments.length;
var i__11088__auto___23751 = (0);
while(true){
if((i__11088__auto___23751 < len__11087__auto___23750)){
args__11094__auto__.push((arguments[i__11088__auto___23751]));

var G__23752 = (i__11088__auto___23751 + (1));
i__11088__auto___23751 = G__23752;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq23749){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23749));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11094__auto__ = [];
var len__11087__auto___23754 = arguments.length;
var i__11088__auto___23755 = (0);
while(true){
if((i__11088__auto___23755 < len__11087__auto___23754)){
args__11094__auto__.push((arguments[i__11088__auto___23755]));

var G__23756 = (i__11088__auto___23755 + (1));
i__11088__auto___23755 = G__23756;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq23753){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23753));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23757){
var map__23758 = p__23757;
var map__23758__$1 = ((((!((map__23758 == null)))?((((map__23758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23758):map__23758);
var message = cljs.core.get.call(null,map__23758__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23758__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__9810__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__9798__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__9798__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__9798__auto__;
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
var c__17029__auto___23837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___23837,ch){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___23837,ch){
return (function (state_23809){
var state_val_23810 = (state_23809[(1)]);
if((state_val_23810 === (7))){
var inst_23805 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
var statearr_23811_23838 = state_23809__$1;
(statearr_23811_23838[(2)] = inst_23805);

(statearr_23811_23838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (1))){
var state_23809__$1 = state_23809;
var statearr_23812_23839 = state_23809__$1;
(statearr_23812_23839[(2)] = null);

(statearr_23812_23839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (4))){
var inst_23762 = (state_23809[(7)]);
var inst_23762__$1 = (state_23809[(2)]);
var state_23809__$1 = (function (){var statearr_23813 = state_23809;
(statearr_23813[(7)] = inst_23762__$1);

return statearr_23813;
})();
if(cljs.core.truth_(inst_23762__$1)){
var statearr_23814_23840 = state_23809__$1;
(statearr_23814_23840[(1)] = (5));

} else {
var statearr_23815_23841 = state_23809__$1;
(statearr_23815_23841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (15))){
var inst_23769 = (state_23809[(8)]);
var inst_23784 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23769);
var inst_23785 = cljs.core.first.call(null,inst_23784);
var inst_23786 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23785);
var inst_23787 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23786)].join('');
var inst_23788 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23787);
var state_23809__$1 = state_23809;
var statearr_23816_23842 = state_23809__$1;
(statearr_23816_23842[(2)] = inst_23788);

(statearr_23816_23842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (13))){
var inst_23793 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
var statearr_23817_23843 = state_23809__$1;
(statearr_23817_23843[(2)] = inst_23793);

(statearr_23817_23843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (6))){
var state_23809__$1 = state_23809;
var statearr_23818_23844 = state_23809__$1;
(statearr_23818_23844[(2)] = null);

(statearr_23818_23844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (17))){
var inst_23791 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
var statearr_23819_23845 = state_23809__$1;
(statearr_23819_23845[(2)] = inst_23791);

(statearr_23819_23845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (3))){
var inst_23807 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23809__$1,inst_23807);
} else {
if((state_val_23810 === (12))){
var inst_23768 = (state_23809[(9)]);
var inst_23782 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23768,opts);
var state_23809__$1 = state_23809;
if(cljs.core.truth_(inst_23782)){
var statearr_23820_23846 = state_23809__$1;
(statearr_23820_23846[(1)] = (15));

} else {
var statearr_23821_23847 = state_23809__$1;
(statearr_23821_23847[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (2))){
var state_23809__$1 = state_23809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23809__$1,(4),ch);
} else {
if((state_val_23810 === (11))){
var inst_23769 = (state_23809[(8)]);
var inst_23774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23775 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23769);
var inst_23776 = cljs.core.async.timeout.call(null,(1000));
var inst_23777 = [inst_23775,inst_23776];
var inst_23778 = (new cljs.core.PersistentVector(null,2,(5),inst_23774,inst_23777,null));
var state_23809__$1 = state_23809;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23809__$1,(14),inst_23778);
} else {
if((state_val_23810 === (9))){
var inst_23769 = (state_23809[(8)]);
var inst_23795 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23796 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23769);
var inst_23797 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23796);
var inst_23798 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23797)].join('');
var inst_23799 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23798);
var state_23809__$1 = (function (){var statearr_23822 = state_23809;
(statearr_23822[(10)] = inst_23795);

return statearr_23822;
})();
var statearr_23823_23848 = state_23809__$1;
(statearr_23823_23848[(2)] = inst_23799);

(statearr_23823_23848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (5))){
var inst_23762 = (state_23809[(7)]);
var inst_23764 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23765 = (new cljs.core.PersistentArrayMap(null,2,inst_23764,null));
var inst_23766 = (new cljs.core.PersistentHashSet(null,inst_23765,null));
var inst_23767 = figwheel.client.focus_msgs.call(null,inst_23766,inst_23762);
var inst_23768 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23767);
var inst_23769 = cljs.core.first.call(null,inst_23767);
var inst_23770 = figwheel.client.autoload_QMARK_.call(null);
var state_23809__$1 = (function (){var statearr_23824 = state_23809;
(statearr_23824[(8)] = inst_23769);

(statearr_23824[(9)] = inst_23768);

return statearr_23824;
})();
if(cljs.core.truth_(inst_23770)){
var statearr_23825_23849 = state_23809__$1;
(statearr_23825_23849[(1)] = (8));

} else {
var statearr_23826_23850 = state_23809__$1;
(statearr_23826_23850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (14))){
var inst_23780 = (state_23809[(2)]);
var state_23809__$1 = state_23809;
var statearr_23827_23851 = state_23809__$1;
(statearr_23827_23851[(2)] = inst_23780);

(statearr_23827_23851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (16))){
var state_23809__$1 = state_23809;
var statearr_23828_23852 = state_23809__$1;
(statearr_23828_23852[(2)] = null);

(statearr_23828_23852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (10))){
var inst_23801 = (state_23809[(2)]);
var state_23809__$1 = (function (){var statearr_23829 = state_23809;
(statearr_23829[(11)] = inst_23801);

return statearr_23829;
})();
var statearr_23830_23853 = state_23809__$1;
(statearr_23830_23853[(2)] = null);

(statearr_23830_23853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23810 === (8))){
var inst_23768 = (state_23809[(9)]);
var inst_23772 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23768,opts);
var state_23809__$1 = state_23809;
if(cljs.core.truth_(inst_23772)){
var statearr_23831_23854 = state_23809__$1;
(statearr_23831_23854[(1)] = (11));

} else {
var statearr_23832_23855 = state_23809__$1;
(statearr_23832_23855[(1)] = (12));

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
});})(c__17029__auto___23837,ch))
;
return ((function (switch__16939__auto__,c__17029__auto___23837,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____0 = (function (){
var statearr_23833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23833[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__);

(statearr_23833[(1)] = (1));

return statearr_23833;
});
var figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____1 = (function (state_23809){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_23809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e23834){if((e23834 instanceof Object)){
var ex__16943__auto__ = e23834;
var statearr_23835_23856 = state_23809;
(statearr_23835_23856[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23857 = state_23809;
state_23809 = G__23857;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__ = function(state_23809){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____1.call(this,state_23809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___23837,ch))
})();
var state__17031__auto__ = (function (){var statearr_23836 = f__17030__auto__.call(null);
(statearr_23836[(6)] = c__17029__auto___23837);

return statearr_23836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___23837,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23858_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23858_SHARP_));
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
var base_path_23860 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23860){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e23859){if((e23859 instanceof Error)){
var e = e23859;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23860], null));
} else {
var e = e23859;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_23860))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23861){
var map__23862 = p__23861;
var map__23862__$1 = ((((!((map__23862 == null)))?((((map__23862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23862):map__23862);
var opts = map__23862__$1;
var build_id = cljs.core.get.call(null,map__23862__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23862,map__23862__$1,opts,build_id){
return (function (p__23864){
var vec__23865 = p__23864;
var seq__23866 = cljs.core.seq.call(null,vec__23865);
var first__23867 = cljs.core.first.call(null,seq__23866);
var seq__23866__$1 = cljs.core.next.call(null,seq__23866);
var map__23868 = first__23867;
var map__23868__$1 = ((((!((map__23868 == null)))?((((map__23868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23868):map__23868);
var msg = map__23868__$1;
var msg_name = cljs.core.get.call(null,map__23868__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23866__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23865,seq__23866,first__23867,seq__23866__$1,map__23868,map__23868__$1,msg,msg_name,_,map__23862,map__23862__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23865,seq__23866,first__23867,seq__23866__$1,map__23868,map__23868__$1,msg,msg_name,_,map__23862,map__23862__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23862,map__23862__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23870){
var vec__23871 = p__23870;
var seq__23872 = cljs.core.seq.call(null,vec__23871);
var first__23873 = cljs.core.first.call(null,seq__23872);
var seq__23872__$1 = cljs.core.next.call(null,seq__23872);
var map__23874 = first__23873;
var map__23874__$1 = ((((!((map__23874 == null)))?((((map__23874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23874):map__23874);
var msg = map__23874__$1;
var msg_name = cljs.core.get.call(null,map__23874__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23872__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23876){
var map__23877 = p__23876;
var map__23877__$1 = ((((!((map__23877 == null)))?((((map__23877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23877):map__23877);
var on_compile_warning = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23877,map__23877__$1,on_compile_warning,on_compile_fail){
return (function (p__23879){
var vec__23880 = p__23879;
var seq__23881 = cljs.core.seq.call(null,vec__23880);
var first__23882 = cljs.core.first.call(null,seq__23881);
var seq__23881__$1 = cljs.core.next.call(null,seq__23881);
var map__23883 = first__23882;
var map__23883__$1 = ((((!((map__23883 == null)))?((((map__23883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23883):map__23883);
var msg = map__23883__$1;
var msg_name = cljs.core.get.call(null,map__23883__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23881__$1;
var pred__23885 = cljs.core._EQ_;
var expr__23886 = msg_name;
if(cljs.core.truth_(pred__23885.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23886))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23885.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23886))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23877,map__23877__$1,on_compile_warning,on_compile_fail))
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
var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__,msg_hist,msg_names,msg){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__,msg_hist,msg_names,msg){
return (function (state_23975){
var state_val_23976 = (state_23975[(1)]);
if((state_val_23976 === (7))){
var inst_23895 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23895)){
var statearr_23977_24024 = state_23975__$1;
(statearr_23977_24024[(1)] = (8));

} else {
var statearr_23978_24025 = state_23975__$1;
(statearr_23978_24025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (20))){
var inst_23969 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23979_24026 = state_23975__$1;
(statearr_23979_24026[(2)] = inst_23969);

(statearr_23979_24026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (27))){
var inst_23965 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23980_24027 = state_23975__$1;
(statearr_23980_24027[(2)] = inst_23965);

(statearr_23980_24027[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (1))){
var inst_23888 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23888)){
var statearr_23981_24028 = state_23975__$1;
(statearr_23981_24028[(1)] = (2));

} else {
var statearr_23982_24029 = state_23975__$1;
(statearr_23982_24029[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (24))){
var inst_23967 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23983_24030 = state_23975__$1;
(statearr_23983_24030[(2)] = inst_23967);

(statearr_23983_24030[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (4))){
var inst_23973 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23975__$1,inst_23973);
} else {
if((state_val_23976 === (15))){
var inst_23971 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23984_24031 = state_23975__$1;
(statearr_23984_24031[(2)] = inst_23971);

(statearr_23984_24031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (21))){
var inst_23924 = (state_23975[(2)]);
var inst_23925 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23926 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23925);
var state_23975__$1 = (function (){var statearr_23985 = state_23975;
(statearr_23985[(7)] = inst_23924);

return statearr_23985;
})();
var statearr_23986_24032 = state_23975__$1;
(statearr_23986_24032[(2)] = inst_23926);

(statearr_23986_24032[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (31))){
var inst_23954 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23954)){
var statearr_23987_24033 = state_23975__$1;
(statearr_23987_24033[(1)] = (34));

} else {
var statearr_23988_24034 = state_23975__$1;
(statearr_23988_24034[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (32))){
var inst_23963 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23989_24035 = state_23975__$1;
(statearr_23989_24035[(2)] = inst_23963);

(statearr_23989_24035[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (33))){
var inst_23950 = (state_23975[(2)]);
var inst_23951 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23952 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23951);
var state_23975__$1 = (function (){var statearr_23990 = state_23975;
(statearr_23990[(8)] = inst_23950);

return statearr_23990;
})();
var statearr_23991_24036 = state_23975__$1;
(statearr_23991_24036[(2)] = inst_23952);

(statearr_23991_24036[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (13))){
var inst_23909 = figwheel.client.heads_up.clear.call(null);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(16),inst_23909);
} else {
if((state_val_23976 === (22))){
var inst_23930 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23931 = figwheel.client.heads_up.append_warning_message.call(null,inst_23930);
var state_23975__$1 = state_23975;
var statearr_23992_24037 = state_23975__$1;
(statearr_23992_24037[(2)] = inst_23931);

(statearr_23992_24037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (36))){
var inst_23961 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23993_24038 = state_23975__$1;
(statearr_23993_24038[(2)] = inst_23961);

(statearr_23993_24038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (29))){
var inst_23941 = (state_23975[(2)]);
var inst_23942 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23943 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23942);
var state_23975__$1 = (function (){var statearr_23994 = state_23975;
(statearr_23994[(9)] = inst_23941);

return statearr_23994;
})();
var statearr_23995_24039 = state_23975__$1;
(statearr_23995_24039[(2)] = inst_23943);

(statearr_23995_24039[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (6))){
var inst_23890 = (state_23975[(10)]);
var state_23975__$1 = state_23975;
var statearr_23996_24040 = state_23975__$1;
(statearr_23996_24040[(2)] = inst_23890);

(statearr_23996_24040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (28))){
var inst_23937 = (state_23975[(2)]);
var inst_23938 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23939 = figwheel.client.heads_up.display_warning.call(null,inst_23938);
var state_23975__$1 = (function (){var statearr_23997 = state_23975;
(statearr_23997[(11)] = inst_23937);

return statearr_23997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(29),inst_23939);
} else {
if((state_val_23976 === (25))){
var inst_23935 = figwheel.client.heads_up.clear.call(null);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(28),inst_23935);
} else {
if((state_val_23976 === (34))){
var inst_23956 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(37),inst_23956);
} else {
if((state_val_23976 === (17))){
var inst_23915 = (state_23975[(2)]);
var inst_23916 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23917 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23916);
var state_23975__$1 = (function (){var statearr_23998 = state_23975;
(statearr_23998[(12)] = inst_23915);

return statearr_23998;
})();
var statearr_23999_24041 = state_23975__$1;
(statearr_23999_24041[(2)] = inst_23917);

(statearr_23999_24041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (3))){
var inst_23907 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23907)){
var statearr_24000_24042 = state_23975__$1;
(statearr_24000_24042[(1)] = (13));

} else {
var statearr_24001_24043 = state_23975__$1;
(statearr_24001_24043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (12))){
var inst_23903 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_24002_24044 = state_23975__$1;
(statearr_24002_24044[(2)] = inst_23903);

(statearr_24002_24044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (2))){
var inst_23890 = (state_23975[(10)]);
var inst_23890__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23975__$1 = (function (){var statearr_24003 = state_23975;
(statearr_24003[(10)] = inst_23890__$1);

return statearr_24003;
})();
if(cljs.core.truth_(inst_23890__$1)){
var statearr_24004_24045 = state_23975__$1;
(statearr_24004_24045[(1)] = (5));

} else {
var statearr_24005_24046 = state_23975__$1;
(statearr_24005_24046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (23))){
var inst_23933 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23933)){
var statearr_24006_24047 = state_23975__$1;
(statearr_24006_24047[(1)] = (25));

} else {
var statearr_24007_24048 = state_23975__$1;
(statearr_24007_24048[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (35))){
var state_23975__$1 = state_23975;
var statearr_24008_24049 = state_23975__$1;
(statearr_24008_24049[(2)] = null);

(statearr_24008_24049[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (19))){
var inst_23928 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23928)){
var statearr_24009_24050 = state_23975__$1;
(statearr_24009_24050[(1)] = (22));

} else {
var statearr_24010_24051 = state_23975__$1;
(statearr_24010_24051[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (11))){
var inst_23899 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_24011_24052 = state_23975__$1;
(statearr_24011_24052[(2)] = inst_23899);

(statearr_24011_24052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (9))){
var inst_23901 = figwheel.client.heads_up.clear.call(null);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(12),inst_23901);
} else {
if((state_val_23976 === (5))){
var inst_23892 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23975__$1 = state_23975;
var statearr_24012_24053 = state_23975__$1;
(statearr_24012_24053[(2)] = inst_23892);

(statearr_24012_24053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (14))){
var inst_23919 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23919)){
var statearr_24013_24054 = state_23975__$1;
(statearr_24013_24054[(1)] = (18));

} else {
var statearr_24014_24055 = state_23975__$1;
(statearr_24014_24055[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (26))){
var inst_23945 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23945)){
var statearr_24015_24056 = state_23975__$1;
(statearr_24015_24056[(1)] = (30));

} else {
var statearr_24016_24057 = state_23975__$1;
(statearr_24016_24057[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (16))){
var inst_23911 = (state_23975[(2)]);
var inst_23912 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23913 = figwheel.client.heads_up.display_exception.call(null,inst_23912);
var state_23975__$1 = (function (){var statearr_24017 = state_23975;
(statearr_24017[(13)] = inst_23911);

return statearr_24017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(17),inst_23913);
} else {
if((state_val_23976 === (30))){
var inst_23947 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23948 = figwheel.client.heads_up.display_warning.call(null,inst_23947);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(33),inst_23948);
} else {
if((state_val_23976 === (10))){
var inst_23905 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_24018_24058 = state_23975__$1;
(statearr_24018_24058[(2)] = inst_23905);

(statearr_24018_24058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (18))){
var inst_23921 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23922 = figwheel.client.heads_up.display_exception.call(null,inst_23921);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(21),inst_23922);
} else {
if((state_val_23976 === (37))){
var inst_23958 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_24019_24059 = state_23975__$1;
(statearr_24019_24059[(2)] = inst_23958);

(statearr_24019_24059[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (8))){
var inst_23897 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(11),inst_23897);
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
});})(c__17029__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16939__auto__,c__17029__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____0 = (function (){
var statearr_24020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24020[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__);

(statearr_24020[(1)] = (1));

return statearr_24020;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____1 = (function (state_23975){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_23975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e24021){if((e24021 instanceof Object)){
var ex__16943__auto__ = e24021;
var statearr_24022_24060 = state_23975;
(statearr_24022_24060[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24061 = state_23975;
state_23975 = G__24061;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__ = function(state_23975){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____1.call(this,state_23975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__,msg_hist,msg_names,msg))
})();
var state__17031__auto__ = (function (){var statearr_24023 = f__17030__auto__.call(null);
(statearr_24023[(6)] = c__17029__auto__);

return statearr_24023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__,msg_hist,msg_names,msg))
);

return c__17029__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__17029__auto___24090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___24090,ch){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___24090,ch){
return (function (state_24076){
var state_val_24077 = (state_24076[(1)]);
if((state_val_24077 === (1))){
var state_24076__$1 = state_24076;
var statearr_24078_24091 = state_24076__$1;
(statearr_24078_24091[(2)] = null);

(statearr_24078_24091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24077 === (2))){
var state_24076__$1 = state_24076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24076__$1,(4),ch);
} else {
if((state_val_24077 === (3))){
var inst_24074 = (state_24076[(2)]);
var state_24076__$1 = state_24076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24076__$1,inst_24074);
} else {
if((state_val_24077 === (4))){
var inst_24064 = (state_24076[(7)]);
var inst_24064__$1 = (state_24076[(2)]);
var state_24076__$1 = (function (){var statearr_24079 = state_24076;
(statearr_24079[(7)] = inst_24064__$1);

return statearr_24079;
})();
if(cljs.core.truth_(inst_24064__$1)){
var statearr_24080_24092 = state_24076__$1;
(statearr_24080_24092[(1)] = (5));

} else {
var statearr_24081_24093 = state_24076__$1;
(statearr_24081_24093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24077 === (5))){
var inst_24064 = (state_24076[(7)]);
var inst_24066 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24064);
var state_24076__$1 = state_24076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24076__$1,(8),inst_24066);
} else {
if((state_val_24077 === (6))){
var state_24076__$1 = state_24076;
var statearr_24082_24094 = state_24076__$1;
(statearr_24082_24094[(2)] = null);

(statearr_24082_24094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24077 === (7))){
var inst_24072 = (state_24076[(2)]);
var state_24076__$1 = state_24076;
var statearr_24083_24095 = state_24076__$1;
(statearr_24083_24095[(2)] = inst_24072);

(statearr_24083_24095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24077 === (8))){
var inst_24068 = (state_24076[(2)]);
var state_24076__$1 = (function (){var statearr_24084 = state_24076;
(statearr_24084[(8)] = inst_24068);

return statearr_24084;
})();
var statearr_24085_24096 = state_24076__$1;
(statearr_24085_24096[(2)] = null);

(statearr_24085_24096[(1)] = (2));


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
});})(c__17029__auto___24090,ch))
;
return ((function (switch__16939__auto__,c__17029__auto___24090,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__16940__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__16940__auto____0 = (function (){
var statearr_24086 = [null,null,null,null,null,null,null,null,null];
(statearr_24086[(0)] = figwheel$client$heads_up_plugin_$_state_machine__16940__auto__);

(statearr_24086[(1)] = (1));

return statearr_24086;
});
var figwheel$client$heads_up_plugin_$_state_machine__16940__auto____1 = (function (state_24076){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_24076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e24087){if((e24087 instanceof Object)){
var ex__16943__auto__ = e24087;
var statearr_24088_24097 = state_24076;
(statearr_24088_24097[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24098 = state_24076;
state_24076 = G__24098;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__16940__auto__ = function(state_24076){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__16940__auto____1.call(this,state_24076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__16940__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__16940__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___24090,ch))
})();
var state__17031__auto__ = (function (){var statearr_24089 = f__17030__auto__.call(null);
(statearr_24089[(6)] = c__17029__auto___24090);

return statearr_24089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___24090,ch))
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
var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__){
return (function (state_24104){
var state_val_24105 = (state_24104[(1)]);
if((state_val_24105 === (1))){
var inst_24099 = cljs.core.async.timeout.call(null,(3000));
var state_24104__$1 = state_24104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24104__$1,(2),inst_24099);
} else {
if((state_val_24105 === (2))){
var inst_24101 = (state_24104[(2)]);
var inst_24102 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24104__$1 = (function (){var statearr_24106 = state_24104;
(statearr_24106[(7)] = inst_24101);

return statearr_24106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24104__$1,inst_24102);
} else {
return null;
}
}
});})(c__17029__auto__))
;
return ((function (switch__16939__auto__,c__17029__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____0 = (function (){
var statearr_24107 = [null,null,null,null,null,null,null,null];
(statearr_24107[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__);

(statearr_24107[(1)] = (1));

return statearr_24107;
});
var figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____1 = (function (state_24104){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_24104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e24108){if((e24108 instanceof Object)){
var ex__16943__auto__ = e24108;
var statearr_24109_24111 = state_24104;
(statearr_24109_24111[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24112 = state_24104;
state_24104 = G__24112;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__ = function(state_24104){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____1.call(this,state_24104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__))
})();
var state__17031__auto__ = (function (){var statearr_24110 = f__17030__auto__.call(null);
(statearr_24110[(6)] = c__17029__auto__);

return statearr_24110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__))
);

return c__17029__auto__;
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
var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__,figwheel_version,temp__6738__auto__){
return (function (state_24119){
var state_val_24120 = (state_24119[(1)]);
if((state_val_24120 === (1))){
var inst_24113 = cljs.core.async.timeout.call(null,(2000));
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24119__$1,(2),inst_24113);
} else {
if((state_val_24120 === (2))){
var inst_24115 = (state_24119[(2)]);
var inst_24116 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_24117 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_24116);
var state_24119__$1 = (function (){var statearr_24121 = state_24119;
(statearr_24121[(7)] = inst_24115);

return statearr_24121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24119__$1,inst_24117);
} else {
return null;
}
}
});})(c__17029__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__16939__auto__,c__17029__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____0 = (function (){
var statearr_24122 = [null,null,null,null,null,null,null,null];
(statearr_24122[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__);

(statearr_24122[(1)] = (1));

return statearr_24122;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____1 = (function (state_24119){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_24119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e24123){if((e24123 instanceof Object)){
var ex__16943__auto__ = e24123;
var statearr_24124_24126 = state_24119;
(statearr_24124_24126[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24127 = state_24119;
state_24119 = G__24127;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__ = function(state_24119){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____1.call(this,state_24119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__,figwheel_version,temp__6738__auto__))
})();
var state__17031__auto__ = (function (){var statearr_24125 = f__17030__auto__.call(null);
(statearr_24125[(6)] = c__17029__auto__);

return statearr_24125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__,figwheel_version,temp__6738__auto__))
);

return c__17029__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__24128){
var map__24129 = p__24128;
var map__24129__$1 = ((((!((map__24129 == null)))?((((map__24129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24129):map__24129);
var file = cljs.core.get.call(null,map__24129__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24129__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24129__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__24131 = "";
var G__24131__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24131),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__24131);
var G__24131__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24131__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__24131__$1);
if(cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24131__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__24131__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24132){
var map__24133 = p__24132;
var map__24133__$1 = ((((!((map__24133 == null)))?((((map__24133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24133):map__24133);
var ed = map__24133__$1;
var formatted_exception = cljs.core.get.call(null,map__24133__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24133__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24133__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24135_24139 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24136_24140 = null;
var count__24137_24141 = (0);
var i__24138_24142 = (0);
while(true){
if((i__24138_24142 < count__24137_24141)){
var msg_24143 = cljs.core._nth.call(null,chunk__24136_24140,i__24138_24142);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24143);

var G__24144 = seq__24135_24139;
var G__24145 = chunk__24136_24140;
var G__24146 = count__24137_24141;
var G__24147 = (i__24138_24142 + (1));
seq__24135_24139 = G__24144;
chunk__24136_24140 = G__24145;
count__24137_24141 = G__24146;
i__24138_24142 = G__24147;
continue;
} else {
var temp__6738__auto___24148 = cljs.core.seq.call(null,seq__24135_24139);
if(temp__6738__auto___24148){
var seq__24135_24149__$1 = temp__6738__auto___24148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24135_24149__$1)){
var c__10741__auto___24150 = cljs.core.chunk_first.call(null,seq__24135_24149__$1);
var G__24151 = cljs.core.chunk_rest.call(null,seq__24135_24149__$1);
var G__24152 = c__10741__auto___24150;
var G__24153 = cljs.core.count.call(null,c__10741__auto___24150);
var G__24154 = (0);
seq__24135_24139 = G__24151;
chunk__24136_24140 = G__24152;
count__24137_24141 = G__24153;
i__24138_24142 = G__24154;
continue;
} else {
var msg_24155 = cljs.core.first.call(null,seq__24135_24149__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24155);

var G__24156 = cljs.core.next.call(null,seq__24135_24149__$1);
var G__24157 = null;
var G__24158 = (0);
var G__24159 = (0);
seq__24135_24139 = G__24156;
chunk__24136_24140 = G__24157;
count__24137_24141 = G__24158;
i__24138_24142 = G__24159;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24160){
var map__24161 = p__24160;
var map__24161__$1 = ((((!((map__24161 == null)))?((((map__24161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24161):map__24161);
var w = map__24161__$1;
var message = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__9798__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__9798__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__9798__auto__;
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
var seq__24163 = cljs.core.seq.call(null,plugins);
var chunk__24164 = null;
var count__24165 = (0);
var i__24166 = (0);
while(true){
if((i__24166 < count__24165)){
var vec__24167 = cljs.core._nth.call(null,chunk__24164,i__24166);
var k = cljs.core.nth.call(null,vec__24167,(0),null);
var plugin = cljs.core.nth.call(null,vec__24167,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24173 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24163,chunk__24164,count__24165,i__24166,pl_24173,vec__24167,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24173.call(null,msg_hist);
});})(seq__24163,chunk__24164,count__24165,i__24166,pl_24173,vec__24167,k,plugin))
);
} else {
}

var G__24174 = seq__24163;
var G__24175 = chunk__24164;
var G__24176 = count__24165;
var G__24177 = (i__24166 + (1));
seq__24163 = G__24174;
chunk__24164 = G__24175;
count__24165 = G__24176;
i__24166 = G__24177;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__24163);
if(temp__6738__auto__){
var seq__24163__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24163__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__24163__$1);
var G__24178 = cljs.core.chunk_rest.call(null,seq__24163__$1);
var G__24179 = c__10741__auto__;
var G__24180 = cljs.core.count.call(null,c__10741__auto__);
var G__24181 = (0);
seq__24163 = G__24178;
chunk__24164 = G__24179;
count__24165 = G__24180;
i__24166 = G__24181;
continue;
} else {
var vec__24170 = cljs.core.first.call(null,seq__24163__$1);
var k = cljs.core.nth.call(null,vec__24170,(0),null);
var plugin = cljs.core.nth.call(null,vec__24170,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24182 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24163,chunk__24164,count__24165,i__24166,pl_24182,vec__24170,k,plugin,seq__24163__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24182.call(null,msg_hist);
});})(seq__24163,chunk__24164,count__24165,i__24166,pl_24182,vec__24170,k,plugin,seq__24163__$1,temp__6738__auto__))
);
} else {
}

var G__24183 = cljs.core.next.call(null,seq__24163__$1);
var G__24184 = null;
var G__24185 = (0);
var G__24186 = (0);
seq__24163 = G__24183;
chunk__24164 = G__24184;
count__24165 = G__24185;
i__24166 = G__24186;
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
var G__24188 = arguments.length;
switch (G__24188) {
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

var seq__24189_24194 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__24190_24195 = null;
var count__24191_24196 = (0);
var i__24192_24197 = (0);
while(true){
if((i__24192_24197 < count__24191_24196)){
var msg_24198 = cljs.core._nth.call(null,chunk__24190_24195,i__24192_24197);
figwheel.client.socket.handle_incoming_message.call(null,msg_24198);

var G__24199 = seq__24189_24194;
var G__24200 = chunk__24190_24195;
var G__24201 = count__24191_24196;
var G__24202 = (i__24192_24197 + (1));
seq__24189_24194 = G__24199;
chunk__24190_24195 = G__24200;
count__24191_24196 = G__24201;
i__24192_24197 = G__24202;
continue;
} else {
var temp__6738__auto___24203 = cljs.core.seq.call(null,seq__24189_24194);
if(temp__6738__auto___24203){
var seq__24189_24204__$1 = temp__6738__auto___24203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24189_24204__$1)){
var c__10741__auto___24205 = cljs.core.chunk_first.call(null,seq__24189_24204__$1);
var G__24206 = cljs.core.chunk_rest.call(null,seq__24189_24204__$1);
var G__24207 = c__10741__auto___24205;
var G__24208 = cljs.core.count.call(null,c__10741__auto___24205);
var G__24209 = (0);
seq__24189_24194 = G__24206;
chunk__24190_24195 = G__24207;
count__24191_24196 = G__24208;
i__24192_24197 = G__24209;
continue;
} else {
var msg_24210 = cljs.core.first.call(null,seq__24189_24204__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_24210);

var G__24211 = cljs.core.next.call(null,seq__24189_24204__$1);
var G__24212 = null;
var G__24213 = (0);
var G__24214 = (0);
seq__24189_24194 = G__24211;
chunk__24190_24195 = G__24212;
count__24191_24196 = G__24213;
i__24192_24197 = G__24214;
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
var args__11094__auto__ = [];
var len__11087__auto___24219 = arguments.length;
var i__11088__auto___24220 = (0);
while(true){
if((i__11088__auto___24220 < len__11087__auto___24219)){
args__11094__auto__.push((arguments[i__11088__auto___24220]));

var G__24221 = (i__11088__auto___24220 + (1));
i__11088__auto___24220 = G__24221;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24216){
var map__24217 = p__24216;
var map__24217__$1 = ((((!((map__24217 == null)))?((((map__24217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24217):map__24217);
var opts = map__24217__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24215){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24215));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e24222){if((e24222 instanceof Error)){
var e = e24222;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e24222;

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
return (function (p__24223){
var map__24224 = p__24223;
var map__24224__$1 = ((((!((map__24224 == null)))?((((map__24224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24224):map__24224);
var msg_name = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1505319634395
