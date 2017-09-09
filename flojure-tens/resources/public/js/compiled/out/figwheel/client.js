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
}catch (e23743){if((e23743 instanceof Error)){
var e = e23743;
return "Error: Unable to stringify";
} else {
throw e23743;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__23746 = arguments.length;
switch (G__23746) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__23744_SHARP_){
if(typeof p1__23744_SHARP_ === 'string'){
return p1__23744_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__23744_SHARP_);
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
var len__11087__auto___23749 = arguments.length;
var i__11088__auto___23750 = (0);
while(true){
if((i__11088__auto___23750 < len__11087__auto___23749)){
args__11094__auto__.push((arguments[i__11088__auto___23750]));

var G__23751 = (i__11088__auto___23750 + (1));
i__11088__auto___23750 = G__23751;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq23748){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23748));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11094__auto__ = [];
var len__11087__auto___23753 = arguments.length;
var i__11088__auto___23754 = (0);
while(true){
if((i__11088__auto___23754 < len__11087__auto___23753)){
args__11094__auto__.push((arguments[i__11088__auto___23754]));

var G__23755 = (i__11088__auto___23754 + (1));
i__11088__auto___23754 = G__23755;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq23752){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23752));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23756){
var map__23757 = p__23756;
var map__23757__$1 = ((((!((map__23757 == null)))?((((map__23757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23757):map__23757);
var message = cljs.core.get.call(null,map__23757__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23757__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__17029__auto___23836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___23836,ch){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___23836,ch){
return (function (state_23808){
var state_val_23809 = (state_23808[(1)]);
if((state_val_23809 === (7))){
var inst_23804 = (state_23808[(2)]);
var state_23808__$1 = state_23808;
var statearr_23810_23837 = state_23808__$1;
(statearr_23810_23837[(2)] = inst_23804);

(statearr_23810_23837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (1))){
var state_23808__$1 = state_23808;
var statearr_23811_23838 = state_23808__$1;
(statearr_23811_23838[(2)] = null);

(statearr_23811_23838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (4))){
var inst_23761 = (state_23808[(7)]);
var inst_23761__$1 = (state_23808[(2)]);
var state_23808__$1 = (function (){var statearr_23812 = state_23808;
(statearr_23812[(7)] = inst_23761__$1);

return statearr_23812;
})();
if(cljs.core.truth_(inst_23761__$1)){
var statearr_23813_23839 = state_23808__$1;
(statearr_23813_23839[(1)] = (5));

} else {
var statearr_23814_23840 = state_23808__$1;
(statearr_23814_23840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (15))){
var inst_23768 = (state_23808[(8)]);
var inst_23783 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23768);
var inst_23784 = cljs.core.first.call(null,inst_23783);
var inst_23785 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23784);
var inst_23786 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23785)].join('');
var inst_23787 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23786);
var state_23808__$1 = state_23808;
var statearr_23815_23841 = state_23808__$1;
(statearr_23815_23841[(2)] = inst_23787);

(statearr_23815_23841[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (13))){
var inst_23792 = (state_23808[(2)]);
var state_23808__$1 = state_23808;
var statearr_23816_23842 = state_23808__$1;
(statearr_23816_23842[(2)] = inst_23792);

(statearr_23816_23842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (6))){
var state_23808__$1 = state_23808;
var statearr_23817_23843 = state_23808__$1;
(statearr_23817_23843[(2)] = null);

(statearr_23817_23843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (17))){
var inst_23790 = (state_23808[(2)]);
var state_23808__$1 = state_23808;
var statearr_23818_23844 = state_23808__$1;
(statearr_23818_23844[(2)] = inst_23790);

(statearr_23818_23844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (3))){
var inst_23806 = (state_23808[(2)]);
var state_23808__$1 = state_23808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23808__$1,inst_23806);
} else {
if((state_val_23809 === (12))){
var inst_23767 = (state_23808[(9)]);
var inst_23781 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23767,opts);
var state_23808__$1 = state_23808;
if(cljs.core.truth_(inst_23781)){
var statearr_23819_23845 = state_23808__$1;
(statearr_23819_23845[(1)] = (15));

} else {
var statearr_23820_23846 = state_23808__$1;
(statearr_23820_23846[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (2))){
var state_23808__$1 = state_23808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23808__$1,(4),ch);
} else {
if((state_val_23809 === (11))){
var inst_23768 = (state_23808[(8)]);
var inst_23773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23774 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23768);
var inst_23775 = cljs.core.async.timeout.call(null,(1000));
var inst_23776 = [inst_23774,inst_23775];
var inst_23777 = (new cljs.core.PersistentVector(null,2,(5),inst_23773,inst_23776,null));
var state_23808__$1 = state_23808;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23808__$1,(14),inst_23777);
} else {
if((state_val_23809 === (9))){
var inst_23768 = (state_23808[(8)]);
var inst_23794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23795 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23768);
var inst_23796 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23795);
var inst_23797 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23796)].join('');
var inst_23798 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23797);
var state_23808__$1 = (function (){var statearr_23821 = state_23808;
(statearr_23821[(10)] = inst_23794);

return statearr_23821;
})();
var statearr_23822_23847 = state_23808__$1;
(statearr_23822_23847[(2)] = inst_23798);

(statearr_23822_23847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (5))){
var inst_23761 = (state_23808[(7)]);
var inst_23763 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23764 = (new cljs.core.PersistentArrayMap(null,2,inst_23763,null));
var inst_23765 = (new cljs.core.PersistentHashSet(null,inst_23764,null));
var inst_23766 = figwheel.client.focus_msgs.call(null,inst_23765,inst_23761);
var inst_23767 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23766);
var inst_23768 = cljs.core.first.call(null,inst_23766);
var inst_23769 = figwheel.client.autoload_QMARK_.call(null);
var state_23808__$1 = (function (){var statearr_23823 = state_23808;
(statearr_23823[(9)] = inst_23767);

(statearr_23823[(8)] = inst_23768);

return statearr_23823;
})();
if(cljs.core.truth_(inst_23769)){
var statearr_23824_23848 = state_23808__$1;
(statearr_23824_23848[(1)] = (8));

} else {
var statearr_23825_23849 = state_23808__$1;
(statearr_23825_23849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (14))){
var inst_23779 = (state_23808[(2)]);
var state_23808__$1 = state_23808;
var statearr_23826_23850 = state_23808__$1;
(statearr_23826_23850[(2)] = inst_23779);

(statearr_23826_23850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (16))){
var state_23808__$1 = state_23808;
var statearr_23827_23851 = state_23808__$1;
(statearr_23827_23851[(2)] = null);

(statearr_23827_23851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (10))){
var inst_23800 = (state_23808[(2)]);
var state_23808__$1 = (function (){var statearr_23828 = state_23808;
(statearr_23828[(11)] = inst_23800);

return statearr_23828;
})();
var statearr_23829_23852 = state_23808__$1;
(statearr_23829_23852[(2)] = null);

(statearr_23829_23852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23809 === (8))){
var inst_23767 = (state_23808[(9)]);
var inst_23771 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23767,opts);
var state_23808__$1 = state_23808;
if(cljs.core.truth_(inst_23771)){
var statearr_23830_23853 = state_23808__$1;
(statearr_23830_23853[(1)] = (11));

} else {
var statearr_23831_23854 = state_23808__$1;
(statearr_23831_23854[(1)] = (12));

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
});})(c__17029__auto___23836,ch))
;
return ((function (switch__16939__auto__,c__17029__auto___23836,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____0 = (function (){
var statearr_23832 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23832[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__);

(statearr_23832[(1)] = (1));

return statearr_23832;
});
var figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____1 = (function (state_23808){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_23808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e23833){if((e23833 instanceof Object)){
var ex__16943__auto__ = e23833;
var statearr_23834_23855 = state_23808;
(statearr_23834_23855[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23856 = state_23808;
state_23808 = G__23856;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__ = function(state_23808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____1.call(this,state_23808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__16940__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___23836,ch))
})();
var state__17031__auto__ = (function (){var statearr_23835 = f__17030__auto__.call(null);
(statearr_23835[(6)] = c__17029__auto___23836);

return statearr_23835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___23836,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23857_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23857_SHARP_));
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
var base_path_23859 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23859){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e23858){if((e23858 instanceof Error)){
var e = e23858;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23859], null));
} else {
var e = e23858;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_23859))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23860){
var map__23861 = p__23860;
var map__23861__$1 = ((((!((map__23861 == null)))?((((map__23861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23861):map__23861);
var opts = map__23861__$1;
var build_id = cljs.core.get.call(null,map__23861__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23861,map__23861__$1,opts,build_id){
return (function (p__23863){
var vec__23864 = p__23863;
var seq__23865 = cljs.core.seq.call(null,vec__23864);
var first__23866 = cljs.core.first.call(null,seq__23865);
var seq__23865__$1 = cljs.core.next.call(null,seq__23865);
var map__23867 = first__23866;
var map__23867__$1 = ((((!((map__23867 == null)))?((((map__23867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23867):map__23867);
var msg = map__23867__$1;
var msg_name = cljs.core.get.call(null,map__23867__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23865__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23864,seq__23865,first__23866,seq__23865__$1,map__23867,map__23867__$1,msg,msg_name,_,map__23861,map__23861__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23864,seq__23865,first__23866,seq__23865__$1,map__23867,map__23867__$1,msg,msg_name,_,map__23861,map__23861__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23861,map__23861__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23869){
var vec__23870 = p__23869;
var seq__23871 = cljs.core.seq.call(null,vec__23870);
var first__23872 = cljs.core.first.call(null,seq__23871);
var seq__23871__$1 = cljs.core.next.call(null,seq__23871);
var map__23873 = first__23872;
var map__23873__$1 = ((((!((map__23873 == null)))?((((map__23873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23873):map__23873);
var msg = map__23873__$1;
var msg_name = cljs.core.get.call(null,map__23873__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23871__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23875){
var map__23876 = p__23875;
var map__23876__$1 = ((((!((map__23876 == null)))?((((map__23876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23876):map__23876);
var on_compile_warning = cljs.core.get.call(null,map__23876__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23876__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23876,map__23876__$1,on_compile_warning,on_compile_fail){
return (function (p__23878){
var vec__23879 = p__23878;
var seq__23880 = cljs.core.seq.call(null,vec__23879);
var first__23881 = cljs.core.first.call(null,seq__23880);
var seq__23880__$1 = cljs.core.next.call(null,seq__23880);
var map__23882 = first__23881;
var map__23882__$1 = ((((!((map__23882 == null)))?((((map__23882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23882):map__23882);
var msg = map__23882__$1;
var msg_name = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23880__$1;
var pred__23884 = cljs.core._EQ_;
var expr__23885 = msg_name;
if(cljs.core.truth_(pred__23884.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23885))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23884.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23885))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23876,map__23876__$1,on_compile_warning,on_compile_fail))
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
return (function (state_23974){
var state_val_23975 = (state_23974[(1)]);
if((state_val_23975 === (7))){
var inst_23894 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23894)){
var statearr_23976_24023 = state_23974__$1;
(statearr_23976_24023[(1)] = (8));

} else {
var statearr_23977_24024 = state_23974__$1;
(statearr_23977_24024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (20))){
var inst_23968 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23978_24025 = state_23974__$1;
(statearr_23978_24025[(2)] = inst_23968);

(statearr_23978_24025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (27))){
var inst_23964 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23979_24026 = state_23974__$1;
(statearr_23979_24026[(2)] = inst_23964);

(statearr_23979_24026[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (1))){
var inst_23887 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23887)){
var statearr_23980_24027 = state_23974__$1;
(statearr_23980_24027[(1)] = (2));

} else {
var statearr_23981_24028 = state_23974__$1;
(statearr_23981_24028[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (24))){
var inst_23966 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23982_24029 = state_23974__$1;
(statearr_23982_24029[(2)] = inst_23966);

(statearr_23982_24029[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (4))){
var inst_23972 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23974__$1,inst_23972);
} else {
if((state_val_23975 === (15))){
var inst_23970 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23983_24030 = state_23974__$1;
(statearr_23983_24030[(2)] = inst_23970);

(statearr_23983_24030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (21))){
var inst_23923 = (state_23974[(2)]);
var inst_23924 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23925 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23924);
var state_23974__$1 = (function (){var statearr_23984 = state_23974;
(statearr_23984[(7)] = inst_23923);

return statearr_23984;
})();
var statearr_23985_24031 = state_23974__$1;
(statearr_23985_24031[(2)] = inst_23925);

(statearr_23985_24031[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (31))){
var inst_23953 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23953)){
var statearr_23986_24032 = state_23974__$1;
(statearr_23986_24032[(1)] = (34));

} else {
var statearr_23987_24033 = state_23974__$1;
(statearr_23987_24033[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (32))){
var inst_23962 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23988_24034 = state_23974__$1;
(statearr_23988_24034[(2)] = inst_23962);

(statearr_23988_24034[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (33))){
var inst_23949 = (state_23974[(2)]);
var inst_23950 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23951 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23950);
var state_23974__$1 = (function (){var statearr_23989 = state_23974;
(statearr_23989[(8)] = inst_23949);

return statearr_23989;
})();
var statearr_23990_24035 = state_23974__$1;
(statearr_23990_24035[(2)] = inst_23951);

(statearr_23990_24035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (13))){
var inst_23908 = figwheel.client.heads_up.clear.call(null);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(16),inst_23908);
} else {
if((state_val_23975 === (22))){
var inst_23929 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23930 = figwheel.client.heads_up.append_warning_message.call(null,inst_23929);
var state_23974__$1 = state_23974;
var statearr_23991_24036 = state_23974__$1;
(statearr_23991_24036[(2)] = inst_23930);

(statearr_23991_24036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (36))){
var inst_23960 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23992_24037 = state_23974__$1;
(statearr_23992_24037[(2)] = inst_23960);

(statearr_23992_24037[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (29))){
var inst_23940 = (state_23974[(2)]);
var inst_23941 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23942 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23941);
var state_23974__$1 = (function (){var statearr_23993 = state_23974;
(statearr_23993[(9)] = inst_23940);

return statearr_23993;
})();
var statearr_23994_24038 = state_23974__$1;
(statearr_23994_24038[(2)] = inst_23942);

(statearr_23994_24038[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (6))){
var inst_23889 = (state_23974[(10)]);
var state_23974__$1 = state_23974;
var statearr_23995_24039 = state_23974__$1;
(statearr_23995_24039[(2)] = inst_23889);

(statearr_23995_24039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (28))){
var inst_23936 = (state_23974[(2)]);
var inst_23937 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23938 = figwheel.client.heads_up.display_warning.call(null,inst_23937);
var state_23974__$1 = (function (){var statearr_23996 = state_23974;
(statearr_23996[(11)] = inst_23936);

return statearr_23996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(29),inst_23938);
} else {
if((state_val_23975 === (25))){
var inst_23934 = figwheel.client.heads_up.clear.call(null);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(28),inst_23934);
} else {
if((state_val_23975 === (34))){
var inst_23955 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(37),inst_23955);
} else {
if((state_val_23975 === (17))){
var inst_23914 = (state_23974[(2)]);
var inst_23915 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23916 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23915);
var state_23974__$1 = (function (){var statearr_23997 = state_23974;
(statearr_23997[(12)] = inst_23914);

return statearr_23997;
})();
var statearr_23998_24040 = state_23974__$1;
(statearr_23998_24040[(2)] = inst_23916);

(statearr_23998_24040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (3))){
var inst_23906 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23906)){
var statearr_23999_24041 = state_23974__$1;
(statearr_23999_24041[(1)] = (13));

} else {
var statearr_24000_24042 = state_23974__$1;
(statearr_24000_24042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (12))){
var inst_23902 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_24001_24043 = state_23974__$1;
(statearr_24001_24043[(2)] = inst_23902);

(statearr_24001_24043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (2))){
var inst_23889 = (state_23974[(10)]);
var inst_23889__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23974__$1 = (function (){var statearr_24002 = state_23974;
(statearr_24002[(10)] = inst_23889__$1);

return statearr_24002;
})();
if(cljs.core.truth_(inst_23889__$1)){
var statearr_24003_24044 = state_23974__$1;
(statearr_24003_24044[(1)] = (5));

} else {
var statearr_24004_24045 = state_23974__$1;
(statearr_24004_24045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (23))){
var inst_23932 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23932)){
var statearr_24005_24046 = state_23974__$1;
(statearr_24005_24046[(1)] = (25));

} else {
var statearr_24006_24047 = state_23974__$1;
(statearr_24006_24047[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (35))){
var state_23974__$1 = state_23974;
var statearr_24007_24048 = state_23974__$1;
(statearr_24007_24048[(2)] = null);

(statearr_24007_24048[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (19))){
var inst_23927 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23927)){
var statearr_24008_24049 = state_23974__$1;
(statearr_24008_24049[(1)] = (22));

} else {
var statearr_24009_24050 = state_23974__$1;
(statearr_24009_24050[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (11))){
var inst_23898 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_24010_24051 = state_23974__$1;
(statearr_24010_24051[(2)] = inst_23898);

(statearr_24010_24051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (9))){
var inst_23900 = figwheel.client.heads_up.clear.call(null);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(12),inst_23900);
} else {
if((state_val_23975 === (5))){
var inst_23891 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23974__$1 = state_23974;
var statearr_24011_24052 = state_23974__$1;
(statearr_24011_24052[(2)] = inst_23891);

(statearr_24011_24052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (14))){
var inst_23918 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23918)){
var statearr_24012_24053 = state_23974__$1;
(statearr_24012_24053[(1)] = (18));

} else {
var statearr_24013_24054 = state_23974__$1;
(statearr_24013_24054[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (26))){
var inst_23944 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23944)){
var statearr_24014_24055 = state_23974__$1;
(statearr_24014_24055[(1)] = (30));

} else {
var statearr_24015_24056 = state_23974__$1;
(statearr_24015_24056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (16))){
var inst_23910 = (state_23974[(2)]);
var inst_23911 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23912 = figwheel.client.heads_up.display_exception.call(null,inst_23911);
var state_23974__$1 = (function (){var statearr_24016 = state_23974;
(statearr_24016[(13)] = inst_23910);

return statearr_24016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(17),inst_23912);
} else {
if((state_val_23975 === (30))){
var inst_23946 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23947 = figwheel.client.heads_up.display_warning.call(null,inst_23946);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(33),inst_23947);
} else {
if((state_val_23975 === (10))){
var inst_23904 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_24017_24057 = state_23974__$1;
(statearr_24017_24057[(2)] = inst_23904);

(statearr_24017_24057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (18))){
var inst_23920 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23921 = figwheel.client.heads_up.display_exception.call(null,inst_23920);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(21),inst_23921);
} else {
if((state_val_23975 === (37))){
var inst_23957 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_24018_24058 = state_23974__$1;
(statearr_24018_24058[(2)] = inst_23957);

(statearr_24018_24058[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (8))){
var inst_23896 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(11),inst_23896);
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
var statearr_24019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24019[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__);

(statearr_24019[(1)] = (1));

return statearr_24019;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____1 = (function (state_23974){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_23974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e24020){if((e24020 instanceof Object)){
var ex__16943__auto__ = e24020;
var statearr_24021_24059 = state_23974;
(statearr_24021_24059[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24060 = state_23974;
state_23974 = G__24060;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__ = function(state_23974){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____1.call(this,state_23974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__,msg_hist,msg_names,msg))
})();
var state__17031__auto__ = (function (){var statearr_24022 = f__17030__auto__.call(null);
(statearr_24022[(6)] = c__17029__auto__);

return statearr_24022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__,msg_hist,msg_names,msg))
);

return c__17029__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__17029__auto___24089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___24089,ch){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___24089,ch){
return (function (state_24075){
var state_val_24076 = (state_24075[(1)]);
if((state_val_24076 === (1))){
var state_24075__$1 = state_24075;
var statearr_24077_24090 = state_24075__$1;
(statearr_24077_24090[(2)] = null);

(statearr_24077_24090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (2))){
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24075__$1,(4),ch);
} else {
if((state_val_24076 === (3))){
var inst_24073 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24075__$1,inst_24073);
} else {
if((state_val_24076 === (4))){
var inst_24063 = (state_24075[(7)]);
var inst_24063__$1 = (state_24075[(2)]);
var state_24075__$1 = (function (){var statearr_24078 = state_24075;
(statearr_24078[(7)] = inst_24063__$1);

return statearr_24078;
})();
if(cljs.core.truth_(inst_24063__$1)){
var statearr_24079_24091 = state_24075__$1;
(statearr_24079_24091[(1)] = (5));

} else {
var statearr_24080_24092 = state_24075__$1;
(statearr_24080_24092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (5))){
var inst_24063 = (state_24075[(7)]);
var inst_24065 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24063);
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24075__$1,(8),inst_24065);
} else {
if((state_val_24076 === (6))){
var state_24075__$1 = state_24075;
var statearr_24081_24093 = state_24075__$1;
(statearr_24081_24093[(2)] = null);

(statearr_24081_24093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (7))){
var inst_24071 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
var statearr_24082_24094 = state_24075__$1;
(statearr_24082_24094[(2)] = inst_24071);

(statearr_24082_24094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (8))){
var inst_24067 = (state_24075[(2)]);
var state_24075__$1 = (function (){var statearr_24083 = state_24075;
(statearr_24083[(8)] = inst_24067);

return statearr_24083;
})();
var statearr_24084_24095 = state_24075__$1;
(statearr_24084_24095[(2)] = null);

(statearr_24084_24095[(1)] = (2));


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
});})(c__17029__auto___24089,ch))
;
return ((function (switch__16939__auto__,c__17029__auto___24089,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__16940__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__16940__auto____0 = (function (){
var statearr_24085 = [null,null,null,null,null,null,null,null,null];
(statearr_24085[(0)] = figwheel$client$heads_up_plugin_$_state_machine__16940__auto__);

(statearr_24085[(1)] = (1));

return statearr_24085;
});
var figwheel$client$heads_up_plugin_$_state_machine__16940__auto____1 = (function (state_24075){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_24075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e24086){if((e24086 instanceof Object)){
var ex__16943__auto__ = e24086;
var statearr_24087_24096 = state_24075;
(statearr_24087_24096[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24097 = state_24075;
state_24075 = G__24097;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__16940__auto__ = function(state_24075){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__16940__auto____1.call(this,state_24075);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__16940__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__16940__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___24089,ch))
})();
var state__17031__auto__ = (function (){var statearr_24088 = f__17030__auto__.call(null);
(statearr_24088[(6)] = c__17029__auto___24089);

return statearr_24088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___24089,ch))
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
return (function (state_24103){
var state_val_24104 = (state_24103[(1)]);
if((state_val_24104 === (1))){
var inst_24098 = cljs.core.async.timeout.call(null,(3000));
var state_24103__$1 = state_24103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24103__$1,(2),inst_24098);
} else {
if((state_val_24104 === (2))){
var inst_24100 = (state_24103[(2)]);
var inst_24101 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24103__$1 = (function (){var statearr_24105 = state_24103;
(statearr_24105[(7)] = inst_24100);

return statearr_24105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24103__$1,inst_24101);
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
var statearr_24106 = [null,null,null,null,null,null,null,null];
(statearr_24106[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__);

(statearr_24106[(1)] = (1));

return statearr_24106;
});
var figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____1 = (function (state_24103){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_24103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e24107){if((e24107 instanceof Object)){
var ex__16943__auto__ = e24107;
var statearr_24108_24110 = state_24103;
(statearr_24108_24110[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24111 = state_24103;
state_24103 = G__24111;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__ = function(state_24103){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____1.call(this,state_24103);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__16940__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__))
})();
var state__17031__auto__ = (function (){var statearr_24109 = f__17030__auto__.call(null);
(statearr_24109[(6)] = c__17029__auto__);

return statearr_24109;
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
return (function (state_24118){
var state_val_24119 = (state_24118[(1)]);
if((state_val_24119 === (1))){
var inst_24112 = cljs.core.async.timeout.call(null,(2000));
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24118__$1,(2),inst_24112);
} else {
if((state_val_24119 === (2))){
var inst_24114 = (state_24118[(2)]);
var inst_24115 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_24116 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_24115);
var state_24118__$1 = (function (){var statearr_24120 = state_24118;
(statearr_24120[(7)] = inst_24114);

return statearr_24120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24118__$1,inst_24116);
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
var statearr_24121 = [null,null,null,null,null,null,null,null];
(statearr_24121[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__);

(statearr_24121[(1)] = (1));

return statearr_24121;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____1 = (function (state_24118){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_24118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e24122){if((e24122 instanceof Object)){
var ex__16943__auto__ = e24122;
var statearr_24123_24125 = state_24118;
(statearr_24123_24125[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24126 = state_24118;
state_24118 = G__24126;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__ = function(state_24118){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____1.call(this,state_24118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__,figwheel_version,temp__6738__auto__))
})();
var state__17031__auto__ = (function (){var statearr_24124 = f__17030__auto__.call(null);
(statearr_24124[(6)] = c__17029__auto__);

return statearr_24124;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__24127){
var map__24128 = p__24127;
var map__24128__$1 = ((((!((map__24128 == null)))?((((map__24128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24128):map__24128);
var file = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__24130 = "";
var G__24130__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24130),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__24130);
var G__24130__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24130__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__24130__$1);
if(cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24130__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__24130__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24131){
var map__24132 = p__24131;
var map__24132__$1 = ((((!((map__24132 == null)))?((((map__24132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24132):map__24132);
var ed = map__24132__$1;
var formatted_exception = cljs.core.get.call(null,map__24132__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24132__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24132__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24134_24138 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24135_24139 = null;
var count__24136_24140 = (0);
var i__24137_24141 = (0);
while(true){
if((i__24137_24141 < count__24136_24140)){
var msg_24142 = cljs.core._nth.call(null,chunk__24135_24139,i__24137_24141);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24142);

var G__24143 = seq__24134_24138;
var G__24144 = chunk__24135_24139;
var G__24145 = count__24136_24140;
var G__24146 = (i__24137_24141 + (1));
seq__24134_24138 = G__24143;
chunk__24135_24139 = G__24144;
count__24136_24140 = G__24145;
i__24137_24141 = G__24146;
continue;
} else {
var temp__6738__auto___24147 = cljs.core.seq.call(null,seq__24134_24138);
if(temp__6738__auto___24147){
var seq__24134_24148__$1 = temp__6738__auto___24147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24134_24148__$1)){
var c__10741__auto___24149 = cljs.core.chunk_first.call(null,seq__24134_24148__$1);
var G__24150 = cljs.core.chunk_rest.call(null,seq__24134_24148__$1);
var G__24151 = c__10741__auto___24149;
var G__24152 = cljs.core.count.call(null,c__10741__auto___24149);
var G__24153 = (0);
seq__24134_24138 = G__24150;
chunk__24135_24139 = G__24151;
count__24136_24140 = G__24152;
i__24137_24141 = G__24153;
continue;
} else {
var msg_24154 = cljs.core.first.call(null,seq__24134_24148__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24154);

var G__24155 = cljs.core.next.call(null,seq__24134_24148__$1);
var G__24156 = null;
var G__24157 = (0);
var G__24158 = (0);
seq__24134_24138 = G__24155;
chunk__24135_24139 = G__24156;
count__24136_24140 = G__24157;
i__24137_24141 = G__24158;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24159){
var map__24160 = p__24159;
var map__24160__$1 = ((((!((map__24160 == null)))?((((map__24160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24160):map__24160);
var w = map__24160__$1;
var message = cljs.core.get.call(null,map__24160__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__24162 = cljs.core.seq.call(null,plugins);
var chunk__24163 = null;
var count__24164 = (0);
var i__24165 = (0);
while(true){
if((i__24165 < count__24164)){
var vec__24166 = cljs.core._nth.call(null,chunk__24163,i__24165);
var k = cljs.core.nth.call(null,vec__24166,(0),null);
var plugin = cljs.core.nth.call(null,vec__24166,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24172 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24162,chunk__24163,count__24164,i__24165,pl_24172,vec__24166,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24172.call(null,msg_hist);
});})(seq__24162,chunk__24163,count__24164,i__24165,pl_24172,vec__24166,k,plugin))
);
} else {
}

var G__24173 = seq__24162;
var G__24174 = chunk__24163;
var G__24175 = count__24164;
var G__24176 = (i__24165 + (1));
seq__24162 = G__24173;
chunk__24163 = G__24174;
count__24164 = G__24175;
i__24165 = G__24176;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__24162);
if(temp__6738__auto__){
var seq__24162__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24162__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__24162__$1);
var G__24177 = cljs.core.chunk_rest.call(null,seq__24162__$1);
var G__24178 = c__10741__auto__;
var G__24179 = cljs.core.count.call(null,c__10741__auto__);
var G__24180 = (0);
seq__24162 = G__24177;
chunk__24163 = G__24178;
count__24164 = G__24179;
i__24165 = G__24180;
continue;
} else {
var vec__24169 = cljs.core.first.call(null,seq__24162__$1);
var k = cljs.core.nth.call(null,vec__24169,(0),null);
var plugin = cljs.core.nth.call(null,vec__24169,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24181 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24162,chunk__24163,count__24164,i__24165,pl_24181,vec__24169,k,plugin,seq__24162__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24181.call(null,msg_hist);
});})(seq__24162,chunk__24163,count__24164,i__24165,pl_24181,vec__24169,k,plugin,seq__24162__$1,temp__6738__auto__))
);
} else {
}

var G__24182 = cljs.core.next.call(null,seq__24162__$1);
var G__24183 = null;
var G__24184 = (0);
var G__24185 = (0);
seq__24162 = G__24182;
chunk__24163 = G__24183;
count__24164 = G__24184;
i__24165 = G__24185;
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
var G__24187 = arguments.length;
switch (G__24187) {
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

var seq__24188_24193 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__24189_24194 = null;
var count__24190_24195 = (0);
var i__24191_24196 = (0);
while(true){
if((i__24191_24196 < count__24190_24195)){
var msg_24197 = cljs.core._nth.call(null,chunk__24189_24194,i__24191_24196);
figwheel.client.socket.handle_incoming_message.call(null,msg_24197);

var G__24198 = seq__24188_24193;
var G__24199 = chunk__24189_24194;
var G__24200 = count__24190_24195;
var G__24201 = (i__24191_24196 + (1));
seq__24188_24193 = G__24198;
chunk__24189_24194 = G__24199;
count__24190_24195 = G__24200;
i__24191_24196 = G__24201;
continue;
} else {
var temp__6738__auto___24202 = cljs.core.seq.call(null,seq__24188_24193);
if(temp__6738__auto___24202){
var seq__24188_24203__$1 = temp__6738__auto___24202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24188_24203__$1)){
var c__10741__auto___24204 = cljs.core.chunk_first.call(null,seq__24188_24203__$1);
var G__24205 = cljs.core.chunk_rest.call(null,seq__24188_24203__$1);
var G__24206 = c__10741__auto___24204;
var G__24207 = cljs.core.count.call(null,c__10741__auto___24204);
var G__24208 = (0);
seq__24188_24193 = G__24205;
chunk__24189_24194 = G__24206;
count__24190_24195 = G__24207;
i__24191_24196 = G__24208;
continue;
} else {
var msg_24209 = cljs.core.first.call(null,seq__24188_24203__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_24209);

var G__24210 = cljs.core.next.call(null,seq__24188_24203__$1);
var G__24211 = null;
var G__24212 = (0);
var G__24213 = (0);
seq__24188_24193 = G__24210;
chunk__24189_24194 = G__24211;
count__24190_24195 = G__24212;
i__24191_24196 = G__24213;
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
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24215){
var map__24216 = p__24215;
var map__24216__$1 = ((((!((map__24216 == null)))?((((map__24216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24216):map__24216);
var opts = map__24216__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24214){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24214));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e24221){if((e24221 instanceof Error)){
var e = e24221;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e24221;

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
return (function (p__24222){
var map__24223 = p__24222;
var map__24223__$1 = ((((!((map__24223 == null)))?((((map__24223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24223):map__24223);
var msg_name = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504914137025
