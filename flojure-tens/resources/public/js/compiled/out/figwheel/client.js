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
}catch (e23750){if((e23750 instanceof Error)){
var e = e23750;
return "Error: Unable to stringify";
} else {
throw e23750;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__23753 = arguments.length;
switch (G__23753) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__23751_SHARP_){
if(typeof p1__23751_SHARP_ === 'string'){
return p1__23751_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__23751_SHARP_);
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
var len__11087__auto___23756 = arguments.length;
var i__11088__auto___23757 = (0);
while(true){
if((i__11088__auto___23757 < len__11087__auto___23756)){
args__11094__auto__.push((arguments[i__11088__auto___23757]));

var G__23758 = (i__11088__auto___23757 + (1));
i__11088__auto___23757 = G__23758;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq23755){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23755));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11094__auto__ = [];
var len__11087__auto___23760 = arguments.length;
var i__11088__auto___23761 = (0);
while(true){
if((i__11088__auto___23761 < len__11087__auto___23760)){
args__11094__auto__.push((arguments[i__11088__auto___23761]));

var G__23762 = (i__11088__auto___23761 + (1));
i__11088__auto___23761 = G__23762;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq23759){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23759));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23763){
var map__23764 = p__23763;
var map__23764__$1 = ((((!((map__23764 == null)))?((((map__23764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23764):map__23764);
var message = cljs.core.get.call(null,map__23764__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23764__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__14384__auto___23843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___23843,ch){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___23843,ch){
return (function (state_23815){
var state_val_23816 = (state_23815[(1)]);
if((state_val_23816 === (7))){
var inst_23811 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23817_23844 = state_23815__$1;
(statearr_23817_23844[(2)] = inst_23811);

(statearr_23817_23844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (1))){
var state_23815__$1 = state_23815;
var statearr_23818_23845 = state_23815__$1;
(statearr_23818_23845[(2)] = null);

(statearr_23818_23845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (4))){
var inst_23768 = (state_23815[(7)]);
var inst_23768__$1 = (state_23815[(2)]);
var state_23815__$1 = (function (){var statearr_23819 = state_23815;
(statearr_23819[(7)] = inst_23768__$1);

return statearr_23819;
})();
if(cljs.core.truth_(inst_23768__$1)){
var statearr_23820_23846 = state_23815__$1;
(statearr_23820_23846[(1)] = (5));

} else {
var statearr_23821_23847 = state_23815__$1;
(statearr_23821_23847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (15))){
var inst_23775 = (state_23815[(8)]);
var inst_23790 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23775);
var inst_23791 = cljs.core.first.call(null,inst_23790);
var inst_23792 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23791);
var inst_23793 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23792)].join('');
var inst_23794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23793);
var state_23815__$1 = state_23815;
var statearr_23822_23848 = state_23815__$1;
(statearr_23822_23848[(2)] = inst_23794);

(statearr_23822_23848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (13))){
var inst_23799 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23823_23849 = state_23815__$1;
(statearr_23823_23849[(2)] = inst_23799);

(statearr_23823_23849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (6))){
var state_23815__$1 = state_23815;
var statearr_23824_23850 = state_23815__$1;
(statearr_23824_23850[(2)] = null);

(statearr_23824_23850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (17))){
var inst_23797 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23825_23851 = state_23815__$1;
(statearr_23825_23851[(2)] = inst_23797);

(statearr_23825_23851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (3))){
var inst_23813 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23815__$1,inst_23813);
} else {
if((state_val_23816 === (12))){
var inst_23774 = (state_23815[(9)]);
var inst_23788 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23774,opts);
var state_23815__$1 = state_23815;
if(cljs.core.truth_(inst_23788)){
var statearr_23826_23852 = state_23815__$1;
(statearr_23826_23852[(1)] = (15));

} else {
var statearr_23827_23853 = state_23815__$1;
(statearr_23827_23853[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (2))){
var state_23815__$1 = state_23815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23815__$1,(4),ch);
} else {
if((state_val_23816 === (11))){
var inst_23775 = (state_23815[(8)]);
var inst_23780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23781 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23775);
var inst_23782 = cljs.core.async.timeout.call(null,(1000));
var inst_23783 = [inst_23781,inst_23782];
var inst_23784 = (new cljs.core.PersistentVector(null,2,(5),inst_23780,inst_23783,null));
var state_23815__$1 = state_23815;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23815__$1,(14),inst_23784);
} else {
if((state_val_23816 === (9))){
var inst_23775 = (state_23815[(8)]);
var inst_23801 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23802 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23775);
var inst_23803 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23802);
var inst_23804 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23803)].join('');
var inst_23805 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23804);
var state_23815__$1 = (function (){var statearr_23828 = state_23815;
(statearr_23828[(10)] = inst_23801);

return statearr_23828;
})();
var statearr_23829_23854 = state_23815__$1;
(statearr_23829_23854[(2)] = inst_23805);

(statearr_23829_23854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (5))){
var inst_23768 = (state_23815[(7)]);
var inst_23770 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23771 = (new cljs.core.PersistentArrayMap(null,2,inst_23770,null));
var inst_23772 = (new cljs.core.PersistentHashSet(null,inst_23771,null));
var inst_23773 = figwheel.client.focus_msgs.call(null,inst_23772,inst_23768);
var inst_23774 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23773);
var inst_23775 = cljs.core.first.call(null,inst_23773);
var inst_23776 = figwheel.client.autoload_QMARK_.call(null);
var state_23815__$1 = (function (){var statearr_23830 = state_23815;
(statearr_23830[(8)] = inst_23775);

(statearr_23830[(9)] = inst_23774);

return statearr_23830;
})();
if(cljs.core.truth_(inst_23776)){
var statearr_23831_23855 = state_23815__$1;
(statearr_23831_23855[(1)] = (8));

} else {
var statearr_23832_23856 = state_23815__$1;
(statearr_23832_23856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (14))){
var inst_23786 = (state_23815[(2)]);
var state_23815__$1 = state_23815;
var statearr_23833_23857 = state_23815__$1;
(statearr_23833_23857[(2)] = inst_23786);

(statearr_23833_23857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (16))){
var state_23815__$1 = state_23815;
var statearr_23834_23858 = state_23815__$1;
(statearr_23834_23858[(2)] = null);

(statearr_23834_23858[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (10))){
var inst_23807 = (state_23815[(2)]);
var state_23815__$1 = (function (){var statearr_23835 = state_23815;
(statearr_23835[(11)] = inst_23807);

return statearr_23835;
})();
var statearr_23836_23859 = state_23815__$1;
(statearr_23836_23859[(2)] = null);

(statearr_23836_23859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23816 === (8))){
var inst_23774 = (state_23815[(9)]);
var inst_23778 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23774,opts);
var state_23815__$1 = state_23815;
if(cljs.core.truth_(inst_23778)){
var statearr_23837_23860 = state_23815__$1;
(statearr_23837_23860[(1)] = (11));

} else {
var statearr_23838_23861 = state_23815__$1;
(statearr_23838_23861[(1)] = (12));

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
});})(c__14384__auto___23843,ch))
;
return ((function (switch__14294__auto__,c__14384__auto___23843,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____0 = (function (){
var statearr_23839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23839[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__);

(statearr_23839[(1)] = (1));

return statearr_23839;
});
var figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____1 = (function (state_23815){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_23815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e23840){if((e23840 instanceof Object)){
var ex__14298__auto__ = e23840;
var statearr_23841_23862 = state_23815;
(statearr_23841_23862[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23863 = state_23815;
state_23815 = G__23863;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__ = function(state_23815){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____1.call(this,state_23815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___23843,ch))
})();
var state__14386__auto__ = (function (){var statearr_23842 = f__14385__auto__.call(null);
(statearr_23842[(6)] = c__14384__auto___23843);

return statearr_23842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___23843,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23864_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23864_SHARP_));
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
var base_path_23866 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23866){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e23865){if((e23865 instanceof Error)){
var e = e23865;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23866], null));
} else {
var e = e23865;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_23866))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23867){
var map__23868 = p__23867;
var map__23868__$1 = ((((!((map__23868 == null)))?((((map__23868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23868):map__23868);
var opts = map__23868__$1;
var build_id = cljs.core.get.call(null,map__23868__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23868,map__23868__$1,opts,build_id){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23871,seq__23872,first__23873,seq__23872__$1,map__23874,map__23874__$1,msg,msg_name,_,map__23868,map__23868__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23871,seq__23872,first__23873,seq__23872__$1,map__23874,map__23874__$1,msg,msg_name,_,map__23868,map__23868__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23868,map__23868__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23876){
var vec__23877 = p__23876;
var seq__23878 = cljs.core.seq.call(null,vec__23877);
var first__23879 = cljs.core.first.call(null,seq__23878);
var seq__23878__$1 = cljs.core.next.call(null,seq__23878);
var map__23880 = first__23879;
var map__23880__$1 = ((((!((map__23880 == null)))?((((map__23880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23880):map__23880);
var msg = map__23880__$1;
var msg_name = cljs.core.get.call(null,map__23880__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23878__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23882){
var map__23883 = p__23882;
var map__23883__$1 = ((((!((map__23883 == null)))?((((map__23883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23883):map__23883);
var on_compile_warning = cljs.core.get.call(null,map__23883__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23883__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23883,map__23883__$1,on_compile_warning,on_compile_fail){
return (function (p__23885){
var vec__23886 = p__23885;
var seq__23887 = cljs.core.seq.call(null,vec__23886);
var first__23888 = cljs.core.first.call(null,seq__23887);
var seq__23887__$1 = cljs.core.next.call(null,seq__23887);
var map__23889 = first__23888;
var map__23889__$1 = ((((!((map__23889 == null)))?((((map__23889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23889):map__23889);
var msg = map__23889__$1;
var msg_name = cljs.core.get.call(null,map__23889__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23887__$1;
var pred__23891 = cljs.core._EQ_;
var expr__23892 = msg_name;
if(cljs.core.truth_(pred__23891.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23892))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23891.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23892))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23883,map__23883__$1,on_compile_warning,on_compile_fail))
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
var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__,msg_hist,msg_names,msg){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__,msg_hist,msg_names,msg){
return (function (state_23981){
var state_val_23982 = (state_23981[(1)]);
if((state_val_23982 === (7))){
var inst_23901 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
if(cljs.core.truth_(inst_23901)){
var statearr_23983_24030 = state_23981__$1;
(statearr_23983_24030[(1)] = (8));

} else {
var statearr_23984_24031 = state_23981__$1;
(statearr_23984_24031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (20))){
var inst_23975 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_23985_24032 = state_23981__$1;
(statearr_23985_24032[(2)] = inst_23975);

(statearr_23985_24032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (27))){
var inst_23971 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_23986_24033 = state_23981__$1;
(statearr_23986_24033[(2)] = inst_23971);

(statearr_23986_24033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (1))){
var inst_23894 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23981__$1 = state_23981;
if(cljs.core.truth_(inst_23894)){
var statearr_23987_24034 = state_23981__$1;
(statearr_23987_24034[(1)] = (2));

} else {
var statearr_23988_24035 = state_23981__$1;
(statearr_23988_24035[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (24))){
var inst_23973 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_23989_24036 = state_23981__$1;
(statearr_23989_24036[(2)] = inst_23973);

(statearr_23989_24036[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (4))){
var inst_23979 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23981__$1,inst_23979);
} else {
if((state_val_23982 === (15))){
var inst_23977 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_23990_24037 = state_23981__$1;
(statearr_23990_24037[(2)] = inst_23977);

(statearr_23990_24037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (21))){
var inst_23930 = (state_23981[(2)]);
var inst_23931 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23932 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23931);
var state_23981__$1 = (function (){var statearr_23991 = state_23981;
(statearr_23991[(7)] = inst_23930);

return statearr_23991;
})();
var statearr_23992_24038 = state_23981__$1;
(statearr_23992_24038[(2)] = inst_23932);

(statearr_23992_24038[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (31))){
var inst_23960 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23981__$1 = state_23981;
if(cljs.core.truth_(inst_23960)){
var statearr_23993_24039 = state_23981__$1;
(statearr_23993_24039[(1)] = (34));

} else {
var statearr_23994_24040 = state_23981__$1;
(statearr_23994_24040[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (32))){
var inst_23969 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_23995_24041 = state_23981__$1;
(statearr_23995_24041[(2)] = inst_23969);

(statearr_23995_24041[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (33))){
var inst_23956 = (state_23981[(2)]);
var inst_23957 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23958 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23957);
var state_23981__$1 = (function (){var statearr_23996 = state_23981;
(statearr_23996[(8)] = inst_23956);

return statearr_23996;
})();
var statearr_23997_24042 = state_23981__$1;
(statearr_23997_24042[(2)] = inst_23958);

(statearr_23997_24042[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (13))){
var inst_23915 = figwheel.client.heads_up.clear.call(null);
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(16),inst_23915);
} else {
if((state_val_23982 === (22))){
var inst_23936 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23937 = figwheel.client.heads_up.append_warning_message.call(null,inst_23936);
var state_23981__$1 = state_23981;
var statearr_23998_24043 = state_23981__$1;
(statearr_23998_24043[(2)] = inst_23937);

(statearr_23998_24043[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (36))){
var inst_23967 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_23999_24044 = state_23981__$1;
(statearr_23999_24044[(2)] = inst_23967);

(statearr_23999_24044[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (29))){
var inst_23947 = (state_23981[(2)]);
var inst_23948 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23949 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23948);
var state_23981__$1 = (function (){var statearr_24000 = state_23981;
(statearr_24000[(9)] = inst_23947);

return statearr_24000;
})();
var statearr_24001_24045 = state_23981__$1;
(statearr_24001_24045[(2)] = inst_23949);

(statearr_24001_24045[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (6))){
var inst_23896 = (state_23981[(10)]);
var state_23981__$1 = state_23981;
var statearr_24002_24046 = state_23981__$1;
(statearr_24002_24046[(2)] = inst_23896);

(statearr_24002_24046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (28))){
var inst_23943 = (state_23981[(2)]);
var inst_23944 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23945 = figwheel.client.heads_up.display_warning.call(null,inst_23944);
var state_23981__$1 = (function (){var statearr_24003 = state_23981;
(statearr_24003[(11)] = inst_23943);

return statearr_24003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(29),inst_23945);
} else {
if((state_val_23982 === (25))){
var inst_23941 = figwheel.client.heads_up.clear.call(null);
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(28),inst_23941);
} else {
if((state_val_23982 === (34))){
var inst_23962 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(37),inst_23962);
} else {
if((state_val_23982 === (17))){
var inst_23921 = (state_23981[(2)]);
var inst_23922 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23923 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23922);
var state_23981__$1 = (function (){var statearr_24004 = state_23981;
(statearr_24004[(12)] = inst_23921);

return statearr_24004;
})();
var statearr_24005_24047 = state_23981__$1;
(statearr_24005_24047[(2)] = inst_23923);

(statearr_24005_24047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (3))){
var inst_23913 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23981__$1 = state_23981;
if(cljs.core.truth_(inst_23913)){
var statearr_24006_24048 = state_23981__$1;
(statearr_24006_24048[(1)] = (13));

} else {
var statearr_24007_24049 = state_23981__$1;
(statearr_24007_24049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (12))){
var inst_23909 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_24008_24050 = state_23981__$1;
(statearr_24008_24050[(2)] = inst_23909);

(statearr_24008_24050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (2))){
var inst_23896 = (state_23981[(10)]);
var inst_23896__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23981__$1 = (function (){var statearr_24009 = state_23981;
(statearr_24009[(10)] = inst_23896__$1);

return statearr_24009;
})();
if(cljs.core.truth_(inst_23896__$1)){
var statearr_24010_24051 = state_23981__$1;
(statearr_24010_24051[(1)] = (5));

} else {
var statearr_24011_24052 = state_23981__$1;
(statearr_24011_24052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (23))){
var inst_23939 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23981__$1 = state_23981;
if(cljs.core.truth_(inst_23939)){
var statearr_24012_24053 = state_23981__$1;
(statearr_24012_24053[(1)] = (25));

} else {
var statearr_24013_24054 = state_23981__$1;
(statearr_24013_24054[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (35))){
var state_23981__$1 = state_23981;
var statearr_24014_24055 = state_23981__$1;
(statearr_24014_24055[(2)] = null);

(statearr_24014_24055[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (19))){
var inst_23934 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23981__$1 = state_23981;
if(cljs.core.truth_(inst_23934)){
var statearr_24015_24056 = state_23981__$1;
(statearr_24015_24056[(1)] = (22));

} else {
var statearr_24016_24057 = state_23981__$1;
(statearr_24016_24057[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (11))){
var inst_23905 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_24017_24058 = state_23981__$1;
(statearr_24017_24058[(2)] = inst_23905);

(statearr_24017_24058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (9))){
var inst_23907 = figwheel.client.heads_up.clear.call(null);
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(12),inst_23907);
} else {
if((state_val_23982 === (5))){
var inst_23898 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23981__$1 = state_23981;
var statearr_24018_24059 = state_23981__$1;
(statearr_24018_24059[(2)] = inst_23898);

(statearr_24018_24059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (14))){
var inst_23925 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23981__$1 = state_23981;
if(cljs.core.truth_(inst_23925)){
var statearr_24019_24060 = state_23981__$1;
(statearr_24019_24060[(1)] = (18));

} else {
var statearr_24020_24061 = state_23981__$1;
(statearr_24020_24061[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (26))){
var inst_23951 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23981__$1 = state_23981;
if(cljs.core.truth_(inst_23951)){
var statearr_24021_24062 = state_23981__$1;
(statearr_24021_24062[(1)] = (30));

} else {
var statearr_24022_24063 = state_23981__$1;
(statearr_24022_24063[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (16))){
var inst_23917 = (state_23981[(2)]);
var inst_23918 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23919 = figwheel.client.heads_up.display_exception.call(null,inst_23918);
var state_23981__$1 = (function (){var statearr_24023 = state_23981;
(statearr_24023[(13)] = inst_23917);

return statearr_24023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(17),inst_23919);
} else {
if((state_val_23982 === (30))){
var inst_23953 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23954 = figwheel.client.heads_up.display_warning.call(null,inst_23953);
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(33),inst_23954);
} else {
if((state_val_23982 === (10))){
var inst_23911 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_24024_24064 = state_23981__$1;
(statearr_24024_24064[(2)] = inst_23911);

(statearr_24024_24064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (18))){
var inst_23927 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23928 = figwheel.client.heads_up.display_exception.call(null,inst_23927);
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(21),inst_23928);
} else {
if((state_val_23982 === (37))){
var inst_23964 = (state_23981[(2)]);
var state_23981__$1 = state_23981;
var statearr_24025_24065 = state_23981__$1;
(statearr_24025_24065[(2)] = inst_23964);

(statearr_24025_24065[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23982 === (8))){
var inst_23903 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23981__$1 = state_23981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(11),inst_23903);
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
});})(c__14384__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__14294__auto__,c__14384__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____0 = (function (){
var statearr_24026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24026[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__);

(statearr_24026[(1)] = (1));

return statearr_24026;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____1 = (function (state_23981){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_23981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e24027){if((e24027 instanceof Object)){
var ex__14298__auto__ = e24027;
var statearr_24028_24066 = state_23981;
(statearr_24028_24066[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24067 = state_23981;
state_23981 = G__24067;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__ = function(state_23981){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____1.call(this,state_23981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__,msg_hist,msg_names,msg))
})();
var state__14386__auto__ = (function (){var statearr_24029 = f__14385__auto__.call(null);
(statearr_24029[(6)] = c__14384__auto__);

return statearr_24029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__,msg_hist,msg_names,msg))
);

return c__14384__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__14384__auto___24096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___24096,ch){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___24096,ch){
return (function (state_24082){
var state_val_24083 = (state_24082[(1)]);
if((state_val_24083 === (1))){
var state_24082__$1 = state_24082;
var statearr_24084_24097 = state_24082__$1;
(statearr_24084_24097[(2)] = null);

(statearr_24084_24097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24083 === (2))){
var state_24082__$1 = state_24082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24082__$1,(4),ch);
} else {
if((state_val_24083 === (3))){
var inst_24080 = (state_24082[(2)]);
var state_24082__$1 = state_24082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24082__$1,inst_24080);
} else {
if((state_val_24083 === (4))){
var inst_24070 = (state_24082[(7)]);
var inst_24070__$1 = (state_24082[(2)]);
var state_24082__$1 = (function (){var statearr_24085 = state_24082;
(statearr_24085[(7)] = inst_24070__$1);

return statearr_24085;
})();
if(cljs.core.truth_(inst_24070__$1)){
var statearr_24086_24098 = state_24082__$1;
(statearr_24086_24098[(1)] = (5));

} else {
var statearr_24087_24099 = state_24082__$1;
(statearr_24087_24099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24083 === (5))){
var inst_24070 = (state_24082[(7)]);
var inst_24072 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24070);
var state_24082__$1 = state_24082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24082__$1,(8),inst_24072);
} else {
if((state_val_24083 === (6))){
var state_24082__$1 = state_24082;
var statearr_24088_24100 = state_24082__$1;
(statearr_24088_24100[(2)] = null);

(statearr_24088_24100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24083 === (7))){
var inst_24078 = (state_24082[(2)]);
var state_24082__$1 = state_24082;
var statearr_24089_24101 = state_24082__$1;
(statearr_24089_24101[(2)] = inst_24078);

(statearr_24089_24101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24083 === (8))){
var inst_24074 = (state_24082[(2)]);
var state_24082__$1 = (function (){var statearr_24090 = state_24082;
(statearr_24090[(8)] = inst_24074);

return statearr_24090;
})();
var statearr_24091_24102 = state_24082__$1;
(statearr_24091_24102[(2)] = null);

(statearr_24091_24102[(1)] = (2));


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
});})(c__14384__auto___24096,ch))
;
return ((function (switch__14294__auto__,c__14384__auto___24096,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__14295__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__14295__auto____0 = (function (){
var statearr_24092 = [null,null,null,null,null,null,null,null,null];
(statearr_24092[(0)] = figwheel$client$heads_up_plugin_$_state_machine__14295__auto__);

(statearr_24092[(1)] = (1));

return statearr_24092;
});
var figwheel$client$heads_up_plugin_$_state_machine__14295__auto____1 = (function (state_24082){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_24082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e24093){if((e24093 instanceof Object)){
var ex__14298__auto__ = e24093;
var statearr_24094_24103 = state_24082;
(statearr_24094_24103[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24104 = state_24082;
state_24082 = G__24104;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__14295__auto__ = function(state_24082){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__14295__auto____1.call(this,state_24082);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__14295__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__14295__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___24096,ch))
})();
var state__14386__auto__ = (function (){var statearr_24095 = f__14385__auto__.call(null);
(statearr_24095[(6)] = c__14384__auto___24096);

return statearr_24095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___24096,ch))
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
var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__){
return (function (state_24110){
var state_val_24111 = (state_24110[(1)]);
if((state_val_24111 === (1))){
var inst_24105 = cljs.core.async.timeout.call(null,(3000));
var state_24110__$1 = state_24110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24110__$1,(2),inst_24105);
} else {
if((state_val_24111 === (2))){
var inst_24107 = (state_24110[(2)]);
var inst_24108 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24110__$1 = (function (){var statearr_24112 = state_24110;
(statearr_24112[(7)] = inst_24107);

return statearr_24112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24110__$1,inst_24108);
} else {
return null;
}
}
});})(c__14384__auto__))
;
return ((function (switch__14294__auto__,c__14384__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____0 = (function (){
var statearr_24113 = [null,null,null,null,null,null,null,null];
(statearr_24113[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__);

(statearr_24113[(1)] = (1));

return statearr_24113;
});
var figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____1 = (function (state_24110){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_24110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e24114){if((e24114 instanceof Object)){
var ex__14298__auto__ = e24114;
var statearr_24115_24117 = state_24110;
(statearr_24115_24117[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24118 = state_24110;
state_24110 = G__24118;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__ = function(state_24110){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____1.call(this,state_24110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__))
})();
var state__14386__auto__ = (function (){var statearr_24116 = f__14385__auto__.call(null);
(statearr_24116[(6)] = c__14384__auto__);

return statearr_24116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__))
);

return c__14384__auto__;
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
var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__,figwheel_version,temp__6738__auto__){
return (function (state_24125){
var state_val_24126 = (state_24125[(1)]);
if((state_val_24126 === (1))){
var inst_24119 = cljs.core.async.timeout.call(null,(2000));
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24125__$1,(2),inst_24119);
} else {
if((state_val_24126 === (2))){
var inst_24121 = (state_24125[(2)]);
var inst_24122 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_24123 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_24122);
var state_24125__$1 = (function (){var statearr_24127 = state_24125;
(statearr_24127[(7)] = inst_24121);

return statearr_24127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24125__$1,inst_24123);
} else {
return null;
}
}
});})(c__14384__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__14294__auto__,c__14384__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____0 = (function (){
var statearr_24128 = [null,null,null,null,null,null,null,null];
(statearr_24128[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__);

(statearr_24128[(1)] = (1));

return statearr_24128;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____1 = (function (state_24125){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_24125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e24129){if((e24129 instanceof Object)){
var ex__14298__auto__ = e24129;
var statearr_24130_24132 = state_24125;
(statearr_24130_24132[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24133 = state_24125;
state_24125 = G__24133;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__ = function(state_24125){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____1.call(this,state_24125);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__,figwheel_version,temp__6738__auto__))
})();
var state__14386__auto__ = (function (){var statearr_24131 = f__14385__auto__.call(null);
(statearr_24131[(6)] = c__14384__auto__);

return statearr_24131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__,figwheel_version,temp__6738__auto__))
);

return c__14384__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__24134){
var map__24135 = p__24134;
var map__24135__$1 = ((((!((map__24135 == null)))?((((map__24135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24135):map__24135);
var file = cljs.core.get.call(null,map__24135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24135__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24135__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__24137 = "";
var G__24137__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24137),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__24137);
var G__24137__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24137__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__24137__$1);
if(cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24137__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__24137__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24138){
var map__24139 = p__24138;
var map__24139__$1 = ((((!((map__24139 == null)))?((((map__24139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24139):map__24139);
var ed = map__24139__$1;
var formatted_exception = cljs.core.get.call(null,map__24139__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24139__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24139__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24141_24145 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24142_24146 = null;
var count__24143_24147 = (0);
var i__24144_24148 = (0);
while(true){
if((i__24144_24148 < count__24143_24147)){
var msg_24149 = cljs.core._nth.call(null,chunk__24142_24146,i__24144_24148);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24149);

var G__24150 = seq__24141_24145;
var G__24151 = chunk__24142_24146;
var G__24152 = count__24143_24147;
var G__24153 = (i__24144_24148 + (1));
seq__24141_24145 = G__24150;
chunk__24142_24146 = G__24151;
count__24143_24147 = G__24152;
i__24144_24148 = G__24153;
continue;
} else {
var temp__6738__auto___24154 = cljs.core.seq.call(null,seq__24141_24145);
if(temp__6738__auto___24154){
var seq__24141_24155__$1 = temp__6738__auto___24154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24141_24155__$1)){
var c__10741__auto___24156 = cljs.core.chunk_first.call(null,seq__24141_24155__$1);
var G__24157 = cljs.core.chunk_rest.call(null,seq__24141_24155__$1);
var G__24158 = c__10741__auto___24156;
var G__24159 = cljs.core.count.call(null,c__10741__auto___24156);
var G__24160 = (0);
seq__24141_24145 = G__24157;
chunk__24142_24146 = G__24158;
count__24143_24147 = G__24159;
i__24144_24148 = G__24160;
continue;
} else {
var msg_24161 = cljs.core.first.call(null,seq__24141_24155__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24161);

var G__24162 = cljs.core.next.call(null,seq__24141_24155__$1);
var G__24163 = null;
var G__24164 = (0);
var G__24165 = (0);
seq__24141_24145 = G__24162;
chunk__24142_24146 = G__24163;
count__24143_24147 = G__24164;
i__24144_24148 = G__24165;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24166){
var map__24167 = p__24166;
var map__24167__$1 = ((((!((map__24167 == null)))?((((map__24167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24167):map__24167);
var w = map__24167__$1;
var message = cljs.core.get.call(null,map__24167__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__24169 = cljs.core.seq.call(null,plugins);
var chunk__24170 = null;
var count__24171 = (0);
var i__24172 = (0);
while(true){
if((i__24172 < count__24171)){
var vec__24173 = cljs.core._nth.call(null,chunk__24170,i__24172);
var k = cljs.core.nth.call(null,vec__24173,(0),null);
var plugin = cljs.core.nth.call(null,vec__24173,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24179 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24169,chunk__24170,count__24171,i__24172,pl_24179,vec__24173,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24179.call(null,msg_hist);
});})(seq__24169,chunk__24170,count__24171,i__24172,pl_24179,vec__24173,k,plugin))
);
} else {
}

var G__24180 = seq__24169;
var G__24181 = chunk__24170;
var G__24182 = count__24171;
var G__24183 = (i__24172 + (1));
seq__24169 = G__24180;
chunk__24170 = G__24181;
count__24171 = G__24182;
i__24172 = G__24183;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__24169);
if(temp__6738__auto__){
var seq__24169__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24169__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__24169__$1);
var G__24184 = cljs.core.chunk_rest.call(null,seq__24169__$1);
var G__24185 = c__10741__auto__;
var G__24186 = cljs.core.count.call(null,c__10741__auto__);
var G__24187 = (0);
seq__24169 = G__24184;
chunk__24170 = G__24185;
count__24171 = G__24186;
i__24172 = G__24187;
continue;
} else {
var vec__24176 = cljs.core.first.call(null,seq__24169__$1);
var k = cljs.core.nth.call(null,vec__24176,(0),null);
var plugin = cljs.core.nth.call(null,vec__24176,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24188 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24169,chunk__24170,count__24171,i__24172,pl_24188,vec__24176,k,plugin,seq__24169__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24188.call(null,msg_hist);
});})(seq__24169,chunk__24170,count__24171,i__24172,pl_24188,vec__24176,k,plugin,seq__24169__$1,temp__6738__auto__))
);
} else {
}

var G__24189 = cljs.core.next.call(null,seq__24169__$1);
var G__24190 = null;
var G__24191 = (0);
var G__24192 = (0);
seq__24169 = G__24189;
chunk__24170 = G__24190;
count__24171 = G__24191;
i__24172 = G__24192;
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
var G__24194 = arguments.length;
switch (G__24194) {
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

var seq__24195_24200 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__24196_24201 = null;
var count__24197_24202 = (0);
var i__24198_24203 = (0);
while(true){
if((i__24198_24203 < count__24197_24202)){
var msg_24204 = cljs.core._nth.call(null,chunk__24196_24201,i__24198_24203);
figwheel.client.socket.handle_incoming_message.call(null,msg_24204);

var G__24205 = seq__24195_24200;
var G__24206 = chunk__24196_24201;
var G__24207 = count__24197_24202;
var G__24208 = (i__24198_24203 + (1));
seq__24195_24200 = G__24205;
chunk__24196_24201 = G__24206;
count__24197_24202 = G__24207;
i__24198_24203 = G__24208;
continue;
} else {
var temp__6738__auto___24209 = cljs.core.seq.call(null,seq__24195_24200);
if(temp__6738__auto___24209){
var seq__24195_24210__$1 = temp__6738__auto___24209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24195_24210__$1)){
var c__10741__auto___24211 = cljs.core.chunk_first.call(null,seq__24195_24210__$1);
var G__24212 = cljs.core.chunk_rest.call(null,seq__24195_24210__$1);
var G__24213 = c__10741__auto___24211;
var G__24214 = cljs.core.count.call(null,c__10741__auto___24211);
var G__24215 = (0);
seq__24195_24200 = G__24212;
chunk__24196_24201 = G__24213;
count__24197_24202 = G__24214;
i__24198_24203 = G__24215;
continue;
} else {
var msg_24216 = cljs.core.first.call(null,seq__24195_24210__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_24216);

var G__24217 = cljs.core.next.call(null,seq__24195_24210__$1);
var G__24218 = null;
var G__24219 = (0);
var G__24220 = (0);
seq__24195_24200 = G__24217;
chunk__24196_24201 = G__24218;
count__24197_24202 = G__24219;
i__24198_24203 = G__24220;
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
var len__11087__auto___24225 = arguments.length;
var i__11088__auto___24226 = (0);
while(true){
if((i__11088__auto___24226 < len__11087__auto___24225)){
args__11094__auto__.push((arguments[i__11088__auto___24226]));

var G__24227 = (i__11088__auto___24226 + (1));
i__11088__auto___24226 = G__24227;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24222){
var map__24223 = p__24222;
var map__24223__$1 = ((((!((map__24223 == null)))?((((map__24223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24223):map__24223);
var opts = map__24223__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24221){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24221));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e24228){if((e24228 instanceof Error)){
var e = e24228;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e24228;

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
return (function (p__24229){
var map__24230 = p__24229;
var map__24230__$1 = ((((!((map__24230 == null)))?((((map__24230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24230):map__24230);
var msg_name = cljs.core.get.call(null,map__24230__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1505834888190
