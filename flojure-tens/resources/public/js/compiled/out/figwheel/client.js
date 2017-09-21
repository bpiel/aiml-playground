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
}catch (e23769){if((e23769 instanceof Error)){
var e = e23769;
return "Error: Unable to stringify";
} else {
throw e23769;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__23772 = arguments.length;
switch (G__23772) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__23770_SHARP_){
if(typeof p1__23770_SHARP_ === 'string'){
return p1__23770_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__23770_SHARP_);
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
var len__11087__auto___23775 = arguments.length;
var i__11088__auto___23776 = (0);
while(true){
if((i__11088__auto___23776 < len__11087__auto___23775)){
args__11094__auto__.push((arguments[i__11088__auto___23776]));

var G__23777 = (i__11088__auto___23776 + (1));
i__11088__auto___23776 = G__23777;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq23774){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23774));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11094__auto__ = [];
var len__11087__auto___23779 = arguments.length;
var i__11088__auto___23780 = (0);
while(true){
if((i__11088__auto___23780 < len__11087__auto___23779)){
args__11094__auto__.push((arguments[i__11088__auto___23780]));

var G__23781 = (i__11088__auto___23780 + (1));
i__11088__auto___23780 = G__23781;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq23778){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23778));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23782){
var map__23783 = p__23782;
var map__23783__$1 = ((((!((map__23783 == null)))?((((map__23783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23783):map__23783);
var message = cljs.core.get.call(null,map__23783__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23783__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__14384__auto___23862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___23862,ch){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___23862,ch){
return (function (state_23834){
var state_val_23835 = (state_23834[(1)]);
if((state_val_23835 === (7))){
var inst_23830 = (state_23834[(2)]);
var state_23834__$1 = state_23834;
var statearr_23836_23863 = state_23834__$1;
(statearr_23836_23863[(2)] = inst_23830);

(statearr_23836_23863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (1))){
var state_23834__$1 = state_23834;
var statearr_23837_23864 = state_23834__$1;
(statearr_23837_23864[(2)] = null);

(statearr_23837_23864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (4))){
var inst_23787 = (state_23834[(7)]);
var inst_23787__$1 = (state_23834[(2)]);
var state_23834__$1 = (function (){var statearr_23838 = state_23834;
(statearr_23838[(7)] = inst_23787__$1);

return statearr_23838;
})();
if(cljs.core.truth_(inst_23787__$1)){
var statearr_23839_23865 = state_23834__$1;
(statearr_23839_23865[(1)] = (5));

} else {
var statearr_23840_23866 = state_23834__$1;
(statearr_23840_23866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (15))){
var inst_23794 = (state_23834[(8)]);
var inst_23809 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23794);
var inst_23810 = cljs.core.first.call(null,inst_23809);
var inst_23811 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23810);
var inst_23812 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23811)].join('');
var inst_23813 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23812);
var state_23834__$1 = state_23834;
var statearr_23841_23867 = state_23834__$1;
(statearr_23841_23867[(2)] = inst_23813);

(statearr_23841_23867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (13))){
var inst_23818 = (state_23834[(2)]);
var state_23834__$1 = state_23834;
var statearr_23842_23868 = state_23834__$1;
(statearr_23842_23868[(2)] = inst_23818);

(statearr_23842_23868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (6))){
var state_23834__$1 = state_23834;
var statearr_23843_23869 = state_23834__$1;
(statearr_23843_23869[(2)] = null);

(statearr_23843_23869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (17))){
var inst_23816 = (state_23834[(2)]);
var state_23834__$1 = state_23834;
var statearr_23844_23870 = state_23834__$1;
(statearr_23844_23870[(2)] = inst_23816);

(statearr_23844_23870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (3))){
var inst_23832 = (state_23834[(2)]);
var state_23834__$1 = state_23834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23834__$1,inst_23832);
} else {
if((state_val_23835 === (12))){
var inst_23793 = (state_23834[(9)]);
var inst_23807 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23793,opts);
var state_23834__$1 = state_23834;
if(cljs.core.truth_(inst_23807)){
var statearr_23845_23871 = state_23834__$1;
(statearr_23845_23871[(1)] = (15));

} else {
var statearr_23846_23872 = state_23834__$1;
(statearr_23846_23872[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (2))){
var state_23834__$1 = state_23834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23834__$1,(4),ch);
} else {
if((state_val_23835 === (11))){
var inst_23794 = (state_23834[(8)]);
var inst_23799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23800 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23794);
var inst_23801 = cljs.core.async.timeout.call(null,(1000));
var inst_23802 = [inst_23800,inst_23801];
var inst_23803 = (new cljs.core.PersistentVector(null,2,(5),inst_23799,inst_23802,null));
var state_23834__$1 = state_23834;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23834__$1,(14),inst_23803);
} else {
if((state_val_23835 === (9))){
var inst_23794 = (state_23834[(8)]);
var inst_23820 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23821 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23794);
var inst_23822 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23821);
var inst_23823 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23822)].join('');
var inst_23824 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23823);
var state_23834__$1 = (function (){var statearr_23847 = state_23834;
(statearr_23847[(10)] = inst_23820);

return statearr_23847;
})();
var statearr_23848_23873 = state_23834__$1;
(statearr_23848_23873[(2)] = inst_23824);

(statearr_23848_23873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (5))){
var inst_23787 = (state_23834[(7)]);
var inst_23789 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23790 = (new cljs.core.PersistentArrayMap(null,2,inst_23789,null));
var inst_23791 = (new cljs.core.PersistentHashSet(null,inst_23790,null));
var inst_23792 = figwheel.client.focus_msgs.call(null,inst_23791,inst_23787);
var inst_23793 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23792);
var inst_23794 = cljs.core.first.call(null,inst_23792);
var inst_23795 = figwheel.client.autoload_QMARK_.call(null);
var state_23834__$1 = (function (){var statearr_23849 = state_23834;
(statearr_23849[(8)] = inst_23794);

(statearr_23849[(9)] = inst_23793);

return statearr_23849;
})();
if(cljs.core.truth_(inst_23795)){
var statearr_23850_23874 = state_23834__$1;
(statearr_23850_23874[(1)] = (8));

} else {
var statearr_23851_23875 = state_23834__$1;
(statearr_23851_23875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (14))){
var inst_23805 = (state_23834[(2)]);
var state_23834__$1 = state_23834;
var statearr_23852_23876 = state_23834__$1;
(statearr_23852_23876[(2)] = inst_23805);

(statearr_23852_23876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (16))){
var state_23834__$1 = state_23834;
var statearr_23853_23877 = state_23834__$1;
(statearr_23853_23877[(2)] = null);

(statearr_23853_23877[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (10))){
var inst_23826 = (state_23834[(2)]);
var state_23834__$1 = (function (){var statearr_23854 = state_23834;
(statearr_23854[(11)] = inst_23826);

return statearr_23854;
})();
var statearr_23855_23878 = state_23834__$1;
(statearr_23855_23878[(2)] = null);

(statearr_23855_23878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23835 === (8))){
var inst_23793 = (state_23834[(9)]);
var inst_23797 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23793,opts);
var state_23834__$1 = state_23834;
if(cljs.core.truth_(inst_23797)){
var statearr_23856_23879 = state_23834__$1;
(statearr_23856_23879[(1)] = (11));

} else {
var statearr_23857_23880 = state_23834__$1;
(statearr_23857_23880[(1)] = (12));

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
});})(c__14384__auto___23862,ch))
;
return ((function (switch__14294__auto__,c__14384__auto___23862,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____0 = (function (){
var statearr_23858 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23858[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__);

(statearr_23858[(1)] = (1));

return statearr_23858;
});
var figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____1 = (function (state_23834){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_23834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e23859){if((e23859 instanceof Object)){
var ex__14298__auto__ = e23859;
var statearr_23860_23881 = state_23834;
(statearr_23860_23881[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23882 = state_23834;
state_23834 = G__23882;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__ = function(state_23834){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____1.call(this,state_23834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__14295__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___23862,ch))
})();
var state__14386__auto__ = (function (){var statearr_23861 = f__14385__auto__.call(null);
(statearr_23861[(6)] = c__14384__auto___23862);

return statearr_23861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___23862,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23883_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23883_SHARP_));
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
var base_path_23885 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23885){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e23884){if((e23884 instanceof Error)){
var e = e23884;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23885], null));
} else {
var e = e23884;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_23885))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23886){
var map__23887 = p__23886;
var map__23887__$1 = ((((!((map__23887 == null)))?((((map__23887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23887):map__23887);
var opts = map__23887__$1;
var build_id = cljs.core.get.call(null,map__23887__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23887,map__23887__$1,opts,build_id){
return (function (p__23889){
var vec__23890 = p__23889;
var seq__23891 = cljs.core.seq.call(null,vec__23890);
var first__23892 = cljs.core.first.call(null,seq__23891);
var seq__23891__$1 = cljs.core.next.call(null,seq__23891);
var map__23893 = first__23892;
var map__23893__$1 = ((((!((map__23893 == null)))?((((map__23893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23893):map__23893);
var msg = map__23893__$1;
var msg_name = cljs.core.get.call(null,map__23893__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23891__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23890,seq__23891,first__23892,seq__23891__$1,map__23893,map__23893__$1,msg,msg_name,_,map__23887,map__23887__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23890,seq__23891,first__23892,seq__23891__$1,map__23893,map__23893__$1,msg,msg_name,_,map__23887,map__23887__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23887,map__23887__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23895){
var vec__23896 = p__23895;
var seq__23897 = cljs.core.seq.call(null,vec__23896);
var first__23898 = cljs.core.first.call(null,seq__23897);
var seq__23897__$1 = cljs.core.next.call(null,seq__23897);
var map__23899 = first__23898;
var map__23899__$1 = ((((!((map__23899 == null)))?((((map__23899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23899):map__23899);
var msg = map__23899__$1;
var msg_name = cljs.core.get.call(null,map__23899__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23897__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23901){
var map__23902 = p__23901;
var map__23902__$1 = ((((!((map__23902 == null)))?((((map__23902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23902):map__23902);
var on_compile_warning = cljs.core.get.call(null,map__23902__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23902__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23902,map__23902__$1,on_compile_warning,on_compile_fail){
return (function (p__23904){
var vec__23905 = p__23904;
var seq__23906 = cljs.core.seq.call(null,vec__23905);
var first__23907 = cljs.core.first.call(null,seq__23906);
var seq__23906__$1 = cljs.core.next.call(null,seq__23906);
var map__23908 = first__23907;
var map__23908__$1 = ((((!((map__23908 == null)))?((((map__23908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23908):map__23908);
var msg = map__23908__$1;
var msg_name = cljs.core.get.call(null,map__23908__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23906__$1;
var pred__23910 = cljs.core._EQ_;
var expr__23911 = msg_name;
if(cljs.core.truth_(pred__23910.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23911))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23910.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23911))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23902,map__23902__$1,on_compile_warning,on_compile_fail))
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
return (function (state_24000){
var state_val_24001 = (state_24000[(1)]);
if((state_val_24001 === (7))){
var inst_23920 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23920)){
var statearr_24002_24049 = state_24000__$1;
(statearr_24002_24049[(1)] = (8));

} else {
var statearr_24003_24050 = state_24000__$1;
(statearr_24003_24050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (20))){
var inst_23994 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24004_24051 = state_24000__$1;
(statearr_24004_24051[(2)] = inst_23994);

(statearr_24004_24051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (27))){
var inst_23990 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24005_24052 = state_24000__$1;
(statearr_24005_24052[(2)] = inst_23990);

(statearr_24005_24052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (1))){
var inst_23913 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23913)){
var statearr_24006_24053 = state_24000__$1;
(statearr_24006_24053[(1)] = (2));

} else {
var statearr_24007_24054 = state_24000__$1;
(statearr_24007_24054[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (24))){
var inst_23992 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24008_24055 = state_24000__$1;
(statearr_24008_24055[(2)] = inst_23992);

(statearr_24008_24055[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (4))){
var inst_23998 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24000__$1,inst_23998);
} else {
if((state_val_24001 === (15))){
var inst_23996 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24009_24056 = state_24000__$1;
(statearr_24009_24056[(2)] = inst_23996);

(statearr_24009_24056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (21))){
var inst_23949 = (state_24000[(2)]);
var inst_23950 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23951 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23950);
var state_24000__$1 = (function (){var statearr_24010 = state_24000;
(statearr_24010[(7)] = inst_23949);

return statearr_24010;
})();
var statearr_24011_24057 = state_24000__$1;
(statearr_24011_24057[(2)] = inst_23951);

(statearr_24011_24057[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (31))){
var inst_23979 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23979)){
var statearr_24012_24058 = state_24000__$1;
(statearr_24012_24058[(1)] = (34));

} else {
var statearr_24013_24059 = state_24000__$1;
(statearr_24013_24059[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (32))){
var inst_23988 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24014_24060 = state_24000__$1;
(statearr_24014_24060[(2)] = inst_23988);

(statearr_24014_24060[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (33))){
var inst_23975 = (state_24000[(2)]);
var inst_23976 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23977 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23976);
var state_24000__$1 = (function (){var statearr_24015 = state_24000;
(statearr_24015[(8)] = inst_23975);

return statearr_24015;
})();
var statearr_24016_24061 = state_24000__$1;
(statearr_24016_24061[(2)] = inst_23977);

(statearr_24016_24061[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (13))){
var inst_23934 = figwheel.client.heads_up.clear.call(null);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(16),inst_23934);
} else {
if((state_val_24001 === (22))){
var inst_23955 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23956 = figwheel.client.heads_up.append_warning_message.call(null,inst_23955);
var state_24000__$1 = state_24000;
var statearr_24017_24062 = state_24000__$1;
(statearr_24017_24062[(2)] = inst_23956);

(statearr_24017_24062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (36))){
var inst_23986 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24018_24063 = state_24000__$1;
(statearr_24018_24063[(2)] = inst_23986);

(statearr_24018_24063[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (29))){
var inst_23966 = (state_24000[(2)]);
var inst_23967 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23968 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23967);
var state_24000__$1 = (function (){var statearr_24019 = state_24000;
(statearr_24019[(9)] = inst_23966);

return statearr_24019;
})();
var statearr_24020_24064 = state_24000__$1;
(statearr_24020_24064[(2)] = inst_23968);

(statearr_24020_24064[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (6))){
var inst_23915 = (state_24000[(10)]);
var state_24000__$1 = state_24000;
var statearr_24021_24065 = state_24000__$1;
(statearr_24021_24065[(2)] = inst_23915);

(statearr_24021_24065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (28))){
var inst_23962 = (state_24000[(2)]);
var inst_23963 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23964 = figwheel.client.heads_up.display_warning.call(null,inst_23963);
var state_24000__$1 = (function (){var statearr_24022 = state_24000;
(statearr_24022[(11)] = inst_23962);

return statearr_24022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(29),inst_23964);
} else {
if((state_val_24001 === (25))){
var inst_23960 = figwheel.client.heads_up.clear.call(null);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(28),inst_23960);
} else {
if((state_val_24001 === (34))){
var inst_23981 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(37),inst_23981);
} else {
if((state_val_24001 === (17))){
var inst_23940 = (state_24000[(2)]);
var inst_23941 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23942 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23941);
var state_24000__$1 = (function (){var statearr_24023 = state_24000;
(statearr_24023[(12)] = inst_23940);

return statearr_24023;
})();
var statearr_24024_24066 = state_24000__$1;
(statearr_24024_24066[(2)] = inst_23942);

(statearr_24024_24066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (3))){
var inst_23932 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23932)){
var statearr_24025_24067 = state_24000__$1;
(statearr_24025_24067[(1)] = (13));

} else {
var statearr_24026_24068 = state_24000__$1;
(statearr_24026_24068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (12))){
var inst_23928 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24027_24069 = state_24000__$1;
(statearr_24027_24069[(2)] = inst_23928);

(statearr_24027_24069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (2))){
var inst_23915 = (state_24000[(10)]);
var inst_23915__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24000__$1 = (function (){var statearr_24028 = state_24000;
(statearr_24028[(10)] = inst_23915__$1);

return statearr_24028;
})();
if(cljs.core.truth_(inst_23915__$1)){
var statearr_24029_24070 = state_24000__$1;
(statearr_24029_24070[(1)] = (5));

} else {
var statearr_24030_24071 = state_24000__$1;
(statearr_24030_24071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (23))){
var inst_23958 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23958)){
var statearr_24031_24072 = state_24000__$1;
(statearr_24031_24072[(1)] = (25));

} else {
var statearr_24032_24073 = state_24000__$1;
(statearr_24032_24073[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (35))){
var state_24000__$1 = state_24000;
var statearr_24033_24074 = state_24000__$1;
(statearr_24033_24074[(2)] = null);

(statearr_24033_24074[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (19))){
var inst_23953 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23953)){
var statearr_24034_24075 = state_24000__$1;
(statearr_24034_24075[(1)] = (22));

} else {
var statearr_24035_24076 = state_24000__$1;
(statearr_24035_24076[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (11))){
var inst_23924 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24036_24077 = state_24000__$1;
(statearr_24036_24077[(2)] = inst_23924);

(statearr_24036_24077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (9))){
var inst_23926 = figwheel.client.heads_up.clear.call(null);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(12),inst_23926);
} else {
if((state_val_24001 === (5))){
var inst_23917 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24000__$1 = state_24000;
var statearr_24037_24078 = state_24000__$1;
(statearr_24037_24078[(2)] = inst_23917);

(statearr_24037_24078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (14))){
var inst_23944 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23944)){
var statearr_24038_24079 = state_24000__$1;
(statearr_24038_24079[(1)] = (18));

} else {
var statearr_24039_24080 = state_24000__$1;
(statearr_24039_24080[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (26))){
var inst_23970 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23970)){
var statearr_24040_24081 = state_24000__$1;
(statearr_24040_24081[(1)] = (30));

} else {
var statearr_24041_24082 = state_24000__$1;
(statearr_24041_24082[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (16))){
var inst_23936 = (state_24000[(2)]);
var inst_23937 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23938 = figwheel.client.heads_up.display_exception.call(null,inst_23937);
var state_24000__$1 = (function (){var statearr_24042 = state_24000;
(statearr_24042[(13)] = inst_23936);

return statearr_24042;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(17),inst_23938);
} else {
if((state_val_24001 === (30))){
var inst_23972 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23973 = figwheel.client.heads_up.display_warning.call(null,inst_23972);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(33),inst_23973);
} else {
if((state_val_24001 === (10))){
var inst_23930 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24043_24083 = state_24000__$1;
(statearr_24043_24083[(2)] = inst_23930);

(statearr_24043_24083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (18))){
var inst_23946 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23947 = figwheel.client.heads_up.display_exception.call(null,inst_23946);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(21),inst_23947);
} else {
if((state_val_24001 === (37))){
var inst_23983 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24044_24084 = state_24000__$1;
(statearr_24044_24084[(2)] = inst_23983);

(statearr_24044_24084[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (8))){
var inst_23922 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(11),inst_23922);
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
var statearr_24045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24045[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__);

(statearr_24045[(1)] = (1));

return statearr_24045;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____1 = (function (state_24000){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_24000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e24046){if((e24046 instanceof Object)){
var ex__14298__auto__ = e24046;
var statearr_24047_24085 = state_24000;
(statearr_24047_24085[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24086 = state_24000;
state_24000 = G__24086;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__ = function(state_24000){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____1.call(this,state_24000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__,msg_hist,msg_names,msg))
})();
var state__14386__auto__ = (function (){var statearr_24048 = f__14385__auto__.call(null);
(statearr_24048[(6)] = c__14384__auto__);

return statearr_24048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__,msg_hist,msg_names,msg))
);

return c__14384__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__14384__auto___24115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___24115,ch){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___24115,ch){
return (function (state_24101){
var state_val_24102 = (state_24101[(1)]);
if((state_val_24102 === (1))){
var state_24101__$1 = state_24101;
var statearr_24103_24116 = state_24101__$1;
(statearr_24103_24116[(2)] = null);

(statearr_24103_24116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24102 === (2))){
var state_24101__$1 = state_24101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24101__$1,(4),ch);
} else {
if((state_val_24102 === (3))){
var inst_24099 = (state_24101[(2)]);
var state_24101__$1 = state_24101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24101__$1,inst_24099);
} else {
if((state_val_24102 === (4))){
var inst_24089 = (state_24101[(7)]);
var inst_24089__$1 = (state_24101[(2)]);
var state_24101__$1 = (function (){var statearr_24104 = state_24101;
(statearr_24104[(7)] = inst_24089__$1);

return statearr_24104;
})();
if(cljs.core.truth_(inst_24089__$1)){
var statearr_24105_24117 = state_24101__$1;
(statearr_24105_24117[(1)] = (5));

} else {
var statearr_24106_24118 = state_24101__$1;
(statearr_24106_24118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24102 === (5))){
var inst_24089 = (state_24101[(7)]);
var inst_24091 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24089);
var state_24101__$1 = state_24101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24101__$1,(8),inst_24091);
} else {
if((state_val_24102 === (6))){
var state_24101__$1 = state_24101;
var statearr_24107_24119 = state_24101__$1;
(statearr_24107_24119[(2)] = null);

(statearr_24107_24119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24102 === (7))){
var inst_24097 = (state_24101[(2)]);
var state_24101__$1 = state_24101;
var statearr_24108_24120 = state_24101__$1;
(statearr_24108_24120[(2)] = inst_24097);

(statearr_24108_24120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24102 === (8))){
var inst_24093 = (state_24101[(2)]);
var state_24101__$1 = (function (){var statearr_24109 = state_24101;
(statearr_24109[(8)] = inst_24093);

return statearr_24109;
})();
var statearr_24110_24121 = state_24101__$1;
(statearr_24110_24121[(2)] = null);

(statearr_24110_24121[(1)] = (2));


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
});})(c__14384__auto___24115,ch))
;
return ((function (switch__14294__auto__,c__14384__auto___24115,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__14295__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__14295__auto____0 = (function (){
var statearr_24111 = [null,null,null,null,null,null,null,null,null];
(statearr_24111[(0)] = figwheel$client$heads_up_plugin_$_state_machine__14295__auto__);

(statearr_24111[(1)] = (1));

return statearr_24111;
});
var figwheel$client$heads_up_plugin_$_state_machine__14295__auto____1 = (function (state_24101){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_24101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e24112){if((e24112 instanceof Object)){
var ex__14298__auto__ = e24112;
var statearr_24113_24122 = state_24101;
(statearr_24113_24122[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24123 = state_24101;
state_24101 = G__24123;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__14295__auto__ = function(state_24101){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__14295__auto____1.call(this,state_24101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__14295__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__14295__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___24115,ch))
})();
var state__14386__auto__ = (function (){var statearr_24114 = f__14385__auto__.call(null);
(statearr_24114[(6)] = c__14384__auto___24115);

return statearr_24114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___24115,ch))
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
return (function (state_24129){
var state_val_24130 = (state_24129[(1)]);
if((state_val_24130 === (1))){
var inst_24124 = cljs.core.async.timeout.call(null,(3000));
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(2),inst_24124);
} else {
if((state_val_24130 === (2))){
var inst_24126 = (state_24129[(2)]);
var inst_24127 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24129__$1 = (function (){var statearr_24131 = state_24129;
(statearr_24131[(7)] = inst_24126);

return statearr_24131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24129__$1,inst_24127);
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
var statearr_24132 = [null,null,null,null,null,null,null,null];
(statearr_24132[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__);

(statearr_24132[(1)] = (1));

return statearr_24132;
});
var figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____1 = (function (state_24129){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_24129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e24133){if((e24133 instanceof Object)){
var ex__14298__auto__ = e24133;
var statearr_24134_24136 = state_24129;
(statearr_24134_24136[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24137 = state_24129;
state_24129 = G__24137;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__ = function(state_24129){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____1.call(this,state_24129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__14295__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__))
})();
var state__14386__auto__ = (function (){var statearr_24135 = f__14385__auto__.call(null);
(statearr_24135[(6)] = c__14384__auto__);

return statearr_24135;
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
return (function (state_24144){
var state_val_24145 = (state_24144[(1)]);
if((state_val_24145 === (1))){
var inst_24138 = cljs.core.async.timeout.call(null,(2000));
var state_24144__$1 = state_24144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24144__$1,(2),inst_24138);
} else {
if((state_val_24145 === (2))){
var inst_24140 = (state_24144[(2)]);
var inst_24141 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_24142 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_24141);
var state_24144__$1 = (function (){var statearr_24146 = state_24144;
(statearr_24146[(7)] = inst_24140);

return statearr_24146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24144__$1,inst_24142);
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
var statearr_24147 = [null,null,null,null,null,null,null,null];
(statearr_24147[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__);

(statearr_24147[(1)] = (1));

return statearr_24147;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____1 = (function (state_24144){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_24144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e24148){if((e24148 instanceof Object)){
var ex__14298__auto__ = e24148;
var statearr_24149_24151 = state_24144;
(statearr_24149_24151[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24152 = state_24144;
state_24144 = G__24152;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__ = function(state_24144){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____1.call(this,state_24144);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__,figwheel_version,temp__6738__auto__))
})();
var state__14386__auto__ = (function (){var statearr_24150 = f__14385__auto__.call(null);
(statearr_24150[(6)] = c__14384__auto__);

return statearr_24150;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__24153){
var map__24154 = p__24153;
var map__24154__$1 = ((((!((map__24154 == null)))?((((map__24154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24154):map__24154);
var file = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__24156 = "";
var G__24156__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24156),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__24156);
var G__24156__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24156__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__24156__$1);
if(cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24156__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__24156__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24157){
var map__24158 = p__24157;
var map__24158__$1 = ((((!((map__24158 == null)))?((((map__24158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24158):map__24158);
var ed = map__24158__$1;
var formatted_exception = cljs.core.get.call(null,map__24158__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24158__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24158__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24160_24164 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24161_24165 = null;
var count__24162_24166 = (0);
var i__24163_24167 = (0);
while(true){
if((i__24163_24167 < count__24162_24166)){
var msg_24168 = cljs.core._nth.call(null,chunk__24161_24165,i__24163_24167);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24168);

var G__24169 = seq__24160_24164;
var G__24170 = chunk__24161_24165;
var G__24171 = count__24162_24166;
var G__24172 = (i__24163_24167 + (1));
seq__24160_24164 = G__24169;
chunk__24161_24165 = G__24170;
count__24162_24166 = G__24171;
i__24163_24167 = G__24172;
continue;
} else {
var temp__6738__auto___24173 = cljs.core.seq.call(null,seq__24160_24164);
if(temp__6738__auto___24173){
var seq__24160_24174__$1 = temp__6738__auto___24173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24160_24174__$1)){
var c__10741__auto___24175 = cljs.core.chunk_first.call(null,seq__24160_24174__$1);
var G__24176 = cljs.core.chunk_rest.call(null,seq__24160_24174__$1);
var G__24177 = c__10741__auto___24175;
var G__24178 = cljs.core.count.call(null,c__10741__auto___24175);
var G__24179 = (0);
seq__24160_24164 = G__24176;
chunk__24161_24165 = G__24177;
count__24162_24166 = G__24178;
i__24163_24167 = G__24179;
continue;
} else {
var msg_24180 = cljs.core.first.call(null,seq__24160_24174__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24180);

var G__24181 = cljs.core.next.call(null,seq__24160_24174__$1);
var G__24182 = null;
var G__24183 = (0);
var G__24184 = (0);
seq__24160_24164 = G__24181;
chunk__24161_24165 = G__24182;
count__24162_24166 = G__24183;
i__24163_24167 = G__24184;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24185){
var map__24186 = p__24185;
var map__24186__$1 = ((((!((map__24186 == null)))?((((map__24186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24186):map__24186);
var w = map__24186__$1;
var message = cljs.core.get.call(null,map__24186__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__24188 = cljs.core.seq.call(null,plugins);
var chunk__24189 = null;
var count__24190 = (0);
var i__24191 = (0);
while(true){
if((i__24191 < count__24190)){
var vec__24192 = cljs.core._nth.call(null,chunk__24189,i__24191);
var k = cljs.core.nth.call(null,vec__24192,(0),null);
var plugin = cljs.core.nth.call(null,vec__24192,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24198 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24188,chunk__24189,count__24190,i__24191,pl_24198,vec__24192,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24198.call(null,msg_hist);
});})(seq__24188,chunk__24189,count__24190,i__24191,pl_24198,vec__24192,k,plugin))
);
} else {
}

var G__24199 = seq__24188;
var G__24200 = chunk__24189;
var G__24201 = count__24190;
var G__24202 = (i__24191 + (1));
seq__24188 = G__24199;
chunk__24189 = G__24200;
count__24190 = G__24201;
i__24191 = G__24202;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__24188);
if(temp__6738__auto__){
var seq__24188__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24188__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__24188__$1);
var G__24203 = cljs.core.chunk_rest.call(null,seq__24188__$1);
var G__24204 = c__10741__auto__;
var G__24205 = cljs.core.count.call(null,c__10741__auto__);
var G__24206 = (0);
seq__24188 = G__24203;
chunk__24189 = G__24204;
count__24190 = G__24205;
i__24191 = G__24206;
continue;
} else {
var vec__24195 = cljs.core.first.call(null,seq__24188__$1);
var k = cljs.core.nth.call(null,vec__24195,(0),null);
var plugin = cljs.core.nth.call(null,vec__24195,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24207 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24188,chunk__24189,count__24190,i__24191,pl_24207,vec__24195,k,plugin,seq__24188__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24207.call(null,msg_hist);
});})(seq__24188,chunk__24189,count__24190,i__24191,pl_24207,vec__24195,k,plugin,seq__24188__$1,temp__6738__auto__))
);
} else {
}

var G__24208 = cljs.core.next.call(null,seq__24188__$1);
var G__24209 = null;
var G__24210 = (0);
var G__24211 = (0);
seq__24188 = G__24208;
chunk__24189 = G__24209;
count__24190 = G__24210;
i__24191 = G__24211;
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
var G__24213 = arguments.length;
switch (G__24213) {
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

var seq__24214_24219 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__24215_24220 = null;
var count__24216_24221 = (0);
var i__24217_24222 = (0);
while(true){
if((i__24217_24222 < count__24216_24221)){
var msg_24223 = cljs.core._nth.call(null,chunk__24215_24220,i__24217_24222);
figwheel.client.socket.handle_incoming_message.call(null,msg_24223);

var G__24224 = seq__24214_24219;
var G__24225 = chunk__24215_24220;
var G__24226 = count__24216_24221;
var G__24227 = (i__24217_24222 + (1));
seq__24214_24219 = G__24224;
chunk__24215_24220 = G__24225;
count__24216_24221 = G__24226;
i__24217_24222 = G__24227;
continue;
} else {
var temp__6738__auto___24228 = cljs.core.seq.call(null,seq__24214_24219);
if(temp__6738__auto___24228){
var seq__24214_24229__$1 = temp__6738__auto___24228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24214_24229__$1)){
var c__10741__auto___24230 = cljs.core.chunk_first.call(null,seq__24214_24229__$1);
var G__24231 = cljs.core.chunk_rest.call(null,seq__24214_24229__$1);
var G__24232 = c__10741__auto___24230;
var G__24233 = cljs.core.count.call(null,c__10741__auto___24230);
var G__24234 = (0);
seq__24214_24219 = G__24231;
chunk__24215_24220 = G__24232;
count__24216_24221 = G__24233;
i__24217_24222 = G__24234;
continue;
} else {
var msg_24235 = cljs.core.first.call(null,seq__24214_24229__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_24235);

var G__24236 = cljs.core.next.call(null,seq__24214_24229__$1);
var G__24237 = null;
var G__24238 = (0);
var G__24239 = (0);
seq__24214_24219 = G__24236;
chunk__24215_24220 = G__24237;
count__24216_24221 = G__24238;
i__24217_24222 = G__24239;
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
var len__11087__auto___24244 = arguments.length;
var i__11088__auto___24245 = (0);
while(true){
if((i__11088__auto___24245 < len__11087__auto___24244)){
args__11094__auto__.push((arguments[i__11088__auto___24245]));

var G__24246 = (i__11088__auto___24245 + (1));
i__11088__auto___24245 = G__24246;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24241){
var map__24242 = p__24241;
var map__24242__$1 = ((((!((map__24242 == null)))?((((map__24242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24242):map__24242);
var opts = map__24242__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24240){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24240));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e24247){if((e24247 instanceof Error)){
var e = e24247;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e24247;

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
return (function (p__24248){
var map__24249 = p__24248;
var map__24249__$1 = ((((!((map__24249 == null)))?((((map__24249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24249):map__24249);
var msg_name = cljs.core.get.call(null,map__24249__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506007561494
