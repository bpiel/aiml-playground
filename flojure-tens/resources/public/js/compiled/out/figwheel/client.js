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
}catch (e70770){if((e70770 instanceof Error)){
var e = e70770;
return "Error: Unable to stringify";
} else {
throw e70770;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__70773 = arguments.length;
switch (G__70773) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__70771_SHARP_){
if(typeof p1__70771_SHARP_ === 'string'){
return p1__70771_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__70771_SHARP_);
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
var args__59445__auto__ = [];
var len__59438__auto___70776 = arguments.length;
var i__59439__auto___70777 = (0);
while(true){
if((i__59439__auto___70777 < len__59438__auto___70776)){
args__59445__auto__.push((arguments[i__59439__auto___70777]));

var G__70778 = (i__59439__auto___70777 + (1));
i__59439__auto___70777 = G__70778;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq70775){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70775));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__59445__auto__ = [];
var len__59438__auto___70780 = arguments.length;
var i__59439__auto___70781 = (0);
while(true){
if((i__59439__auto___70781 < len__59438__auto___70780)){
args__59445__auto__.push((arguments[i__59439__auto___70781]));

var G__70782 = (i__59439__auto___70781 + (1));
i__59439__auto___70781 = G__70782;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq70779){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70779));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__70783){
var map__70784 = p__70783;
var map__70784__$1 = ((((!((map__70784 == null)))?((((map__70784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70784):map__70784);
var message = cljs.core.get.call(null,map__70784__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__70784__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__58161__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__58149__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__58149__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__58149__auto__;
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
var c__64983__auto___70863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___70863,ch){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___70863,ch){
return (function (state_70835){
var state_val_70836 = (state_70835[(1)]);
if((state_val_70836 === (7))){
var inst_70831 = (state_70835[(2)]);
var state_70835__$1 = state_70835;
var statearr_70837_70864 = state_70835__$1;
(statearr_70837_70864[(2)] = inst_70831);

(statearr_70837_70864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (1))){
var state_70835__$1 = state_70835;
var statearr_70838_70865 = state_70835__$1;
(statearr_70838_70865[(2)] = null);

(statearr_70838_70865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (4))){
var inst_70788 = (state_70835[(7)]);
var inst_70788__$1 = (state_70835[(2)]);
var state_70835__$1 = (function (){var statearr_70839 = state_70835;
(statearr_70839[(7)] = inst_70788__$1);

return statearr_70839;
})();
if(cljs.core.truth_(inst_70788__$1)){
var statearr_70840_70866 = state_70835__$1;
(statearr_70840_70866[(1)] = (5));

} else {
var statearr_70841_70867 = state_70835__$1;
(statearr_70841_70867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (15))){
var inst_70795 = (state_70835[(8)]);
var inst_70810 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_70795);
var inst_70811 = cljs.core.first.call(null,inst_70810);
var inst_70812 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_70811);
var inst_70813 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_70812)].join('');
var inst_70814 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_70813);
var state_70835__$1 = state_70835;
var statearr_70842_70868 = state_70835__$1;
(statearr_70842_70868[(2)] = inst_70814);

(statearr_70842_70868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (13))){
var inst_70819 = (state_70835[(2)]);
var state_70835__$1 = state_70835;
var statearr_70843_70869 = state_70835__$1;
(statearr_70843_70869[(2)] = inst_70819);

(statearr_70843_70869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (6))){
var state_70835__$1 = state_70835;
var statearr_70844_70870 = state_70835__$1;
(statearr_70844_70870[(2)] = null);

(statearr_70844_70870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (17))){
var inst_70817 = (state_70835[(2)]);
var state_70835__$1 = state_70835;
var statearr_70845_70871 = state_70835__$1;
(statearr_70845_70871[(2)] = inst_70817);

(statearr_70845_70871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (3))){
var inst_70833 = (state_70835[(2)]);
var state_70835__$1 = state_70835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70835__$1,inst_70833);
} else {
if((state_val_70836 === (12))){
var inst_70794 = (state_70835[(9)]);
var inst_70808 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_70794,opts);
var state_70835__$1 = state_70835;
if(cljs.core.truth_(inst_70808)){
var statearr_70846_70872 = state_70835__$1;
(statearr_70846_70872[(1)] = (15));

} else {
var statearr_70847_70873 = state_70835__$1;
(statearr_70847_70873[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (2))){
var state_70835__$1 = state_70835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70835__$1,(4),ch);
} else {
if((state_val_70836 === (11))){
var inst_70795 = (state_70835[(8)]);
var inst_70800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70801 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_70795);
var inst_70802 = cljs.core.async.timeout.call(null,(1000));
var inst_70803 = [inst_70801,inst_70802];
var inst_70804 = (new cljs.core.PersistentVector(null,2,(5),inst_70800,inst_70803,null));
var state_70835__$1 = state_70835;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70835__$1,(14),inst_70804);
} else {
if((state_val_70836 === (9))){
var inst_70795 = (state_70835[(8)]);
var inst_70821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_70822 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_70795);
var inst_70823 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_70822);
var inst_70824 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_70823)].join('');
var inst_70825 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_70824);
var state_70835__$1 = (function (){var statearr_70848 = state_70835;
(statearr_70848[(10)] = inst_70821);

return statearr_70848;
})();
var statearr_70849_70874 = state_70835__$1;
(statearr_70849_70874[(2)] = inst_70825);

(statearr_70849_70874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (5))){
var inst_70788 = (state_70835[(7)]);
var inst_70790 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_70791 = (new cljs.core.PersistentArrayMap(null,2,inst_70790,null));
var inst_70792 = (new cljs.core.PersistentHashSet(null,inst_70791,null));
var inst_70793 = figwheel.client.focus_msgs.call(null,inst_70792,inst_70788);
var inst_70794 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_70793);
var inst_70795 = cljs.core.first.call(null,inst_70793);
var inst_70796 = figwheel.client.autoload_QMARK_.call(null);
var state_70835__$1 = (function (){var statearr_70850 = state_70835;
(statearr_70850[(8)] = inst_70795);

(statearr_70850[(9)] = inst_70794);

return statearr_70850;
})();
if(cljs.core.truth_(inst_70796)){
var statearr_70851_70875 = state_70835__$1;
(statearr_70851_70875[(1)] = (8));

} else {
var statearr_70852_70876 = state_70835__$1;
(statearr_70852_70876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (14))){
var inst_70806 = (state_70835[(2)]);
var state_70835__$1 = state_70835;
var statearr_70853_70877 = state_70835__$1;
(statearr_70853_70877[(2)] = inst_70806);

(statearr_70853_70877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (16))){
var state_70835__$1 = state_70835;
var statearr_70854_70878 = state_70835__$1;
(statearr_70854_70878[(2)] = null);

(statearr_70854_70878[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (10))){
var inst_70827 = (state_70835[(2)]);
var state_70835__$1 = (function (){var statearr_70855 = state_70835;
(statearr_70855[(11)] = inst_70827);

return statearr_70855;
})();
var statearr_70856_70879 = state_70835__$1;
(statearr_70856_70879[(2)] = null);

(statearr_70856_70879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70836 === (8))){
var inst_70794 = (state_70835[(9)]);
var inst_70798 = figwheel.client.reload_file_state_QMARK_.call(null,inst_70794,opts);
var state_70835__$1 = state_70835;
if(cljs.core.truth_(inst_70798)){
var statearr_70857_70880 = state_70835__$1;
(statearr_70857_70880[(1)] = (11));

} else {
var statearr_70858_70881 = state_70835__$1;
(statearr_70858_70881[(1)] = (12));

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
});})(c__64983__auto___70863,ch))
;
return ((function (switch__64893__auto__,c__64983__auto___70863,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__64894__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__64894__auto____0 = (function (){
var statearr_70859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70859[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__64894__auto__);

(statearr_70859[(1)] = (1));

return statearr_70859;
});
var figwheel$client$file_reloader_plugin_$_state_machine__64894__auto____1 = (function (state_70835){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_70835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e70860){if((e70860 instanceof Object)){
var ex__64897__auto__ = e70860;
var statearr_70861_70882 = state_70835;
(statearr_70861_70882[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70883 = state_70835;
state_70835 = G__70883;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__64894__auto__ = function(state_70835){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__64894__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__64894__auto____1.call(this,state_70835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__64894__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__64894__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___70863,ch))
})();
var state__64985__auto__ = (function (){var statearr_70862 = f__64984__auto__.call(null);
(statearr_70862[(6)] = c__64983__auto___70863);

return statearr_70862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___70863,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__70884_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__70884_SHARP_));
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
var base_path_70886 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_70886){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e70885){if((e70885 instanceof Error)){
var e = e70885;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_70886], null));
} else {
var e = e70885;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_70886))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__70887){
var map__70888 = p__70887;
var map__70888__$1 = ((((!((map__70888 == null)))?((((map__70888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70888):map__70888);
var opts = map__70888__$1;
var build_id = cljs.core.get.call(null,map__70888__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__70888,map__70888__$1,opts,build_id){
return (function (p__70890){
var vec__70891 = p__70890;
var seq__70892 = cljs.core.seq.call(null,vec__70891);
var first__70893 = cljs.core.first.call(null,seq__70892);
var seq__70892__$1 = cljs.core.next.call(null,seq__70892);
var map__70894 = first__70893;
var map__70894__$1 = ((((!((map__70894 == null)))?((((map__70894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70894):map__70894);
var msg = map__70894__$1;
var msg_name = cljs.core.get.call(null,map__70894__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__70892__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__70891,seq__70892,first__70893,seq__70892__$1,map__70894,map__70894__$1,msg,msg_name,_,map__70888,map__70888__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__70891,seq__70892,first__70893,seq__70892__$1,map__70894,map__70894__$1,msg,msg_name,_,map__70888,map__70888__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__70888,map__70888__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__70896){
var vec__70897 = p__70896;
var seq__70898 = cljs.core.seq.call(null,vec__70897);
var first__70899 = cljs.core.first.call(null,seq__70898);
var seq__70898__$1 = cljs.core.next.call(null,seq__70898);
var map__70900 = first__70899;
var map__70900__$1 = ((((!((map__70900 == null)))?((((map__70900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70900):map__70900);
var msg = map__70900__$1;
var msg_name = cljs.core.get.call(null,map__70900__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__70898__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__70902){
var map__70903 = p__70902;
var map__70903__$1 = ((((!((map__70903 == null)))?((((map__70903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70903):map__70903);
var on_compile_warning = cljs.core.get.call(null,map__70903__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__70903__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__70903,map__70903__$1,on_compile_warning,on_compile_fail){
return (function (p__70905){
var vec__70906 = p__70905;
var seq__70907 = cljs.core.seq.call(null,vec__70906);
var first__70908 = cljs.core.first.call(null,seq__70907);
var seq__70907__$1 = cljs.core.next.call(null,seq__70907);
var map__70909 = first__70908;
var map__70909__$1 = ((((!((map__70909 == null)))?((((map__70909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70909):map__70909);
var msg = map__70909__$1;
var msg_name = cljs.core.get.call(null,map__70909__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__70907__$1;
var pred__70911 = cljs.core._EQ_;
var expr__70912 = msg_name;
if(cljs.core.truth_(pred__70911.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__70912))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__70911.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__70912))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__70903,map__70903__$1,on_compile_warning,on_compile_fail))
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
var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__,msg_hist,msg_names,msg){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__,msg_hist,msg_names,msg){
return (function (state_71001){
var state_val_71002 = (state_71001[(1)]);
if((state_val_71002 === (7))){
var inst_70921 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
if(cljs.core.truth_(inst_70921)){
var statearr_71003_71050 = state_71001__$1;
(statearr_71003_71050[(1)] = (8));

} else {
var statearr_71004_71051 = state_71001__$1;
(statearr_71004_71051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (20))){
var inst_70995 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71005_71052 = state_71001__$1;
(statearr_71005_71052[(2)] = inst_70995);

(statearr_71005_71052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (27))){
var inst_70991 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71006_71053 = state_71001__$1;
(statearr_71006_71053[(2)] = inst_70991);

(statearr_71006_71053[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (1))){
var inst_70914 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_71001__$1 = state_71001;
if(cljs.core.truth_(inst_70914)){
var statearr_71007_71054 = state_71001__$1;
(statearr_71007_71054[(1)] = (2));

} else {
var statearr_71008_71055 = state_71001__$1;
(statearr_71008_71055[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (24))){
var inst_70993 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71009_71056 = state_71001__$1;
(statearr_71009_71056[(2)] = inst_70993);

(statearr_71009_71056[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (4))){
var inst_70999 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71001__$1,inst_70999);
} else {
if((state_val_71002 === (15))){
var inst_70997 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71010_71057 = state_71001__$1;
(statearr_71010_71057[(2)] = inst_70997);

(statearr_71010_71057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (21))){
var inst_70950 = (state_71001[(2)]);
var inst_70951 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70952 = figwheel.client.auto_jump_to_error.call(null,opts,inst_70951);
var state_71001__$1 = (function (){var statearr_71011 = state_71001;
(statearr_71011[(7)] = inst_70950);

return statearr_71011;
})();
var statearr_71012_71058 = state_71001__$1;
(statearr_71012_71058[(2)] = inst_70952);

(statearr_71012_71058[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (31))){
var inst_70980 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_71001__$1 = state_71001;
if(cljs.core.truth_(inst_70980)){
var statearr_71013_71059 = state_71001__$1;
(statearr_71013_71059[(1)] = (34));

} else {
var statearr_71014_71060 = state_71001__$1;
(statearr_71014_71060[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (32))){
var inst_70989 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71015_71061 = state_71001__$1;
(statearr_71015_71061[(2)] = inst_70989);

(statearr_71015_71061[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (33))){
var inst_70976 = (state_71001[(2)]);
var inst_70977 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70978 = figwheel.client.auto_jump_to_error.call(null,opts,inst_70977);
var state_71001__$1 = (function (){var statearr_71016 = state_71001;
(statearr_71016[(8)] = inst_70976);

return statearr_71016;
})();
var statearr_71017_71062 = state_71001__$1;
(statearr_71017_71062[(2)] = inst_70978);

(statearr_71017_71062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (13))){
var inst_70935 = figwheel.client.heads_up.clear.call(null);
var state_71001__$1 = state_71001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(16),inst_70935);
} else {
if((state_val_71002 === (22))){
var inst_70956 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70957 = figwheel.client.heads_up.append_warning_message.call(null,inst_70956);
var state_71001__$1 = state_71001;
var statearr_71018_71063 = state_71001__$1;
(statearr_71018_71063[(2)] = inst_70957);

(statearr_71018_71063[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (36))){
var inst_70987 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71019_71064 = state_71001__$1;
(statearr_71019_71064[(2)] = inst_70987);

(statearr_71019_71064[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (29))){
var inst_70967 = (state_71001[(2)]);
var inst_70968 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70969 = figwheel.client.auto_jump_to_error.call(null,opts,inst_70968);
var state_71001__$1 = (function (){var statearr_71020 = state_71001;
(statearr_71020[(9)] = inst_70967);

return statearr_71020;
})();
var statearr_71021_71065 = state_71001__$1;
(statearr_71021_71065[(2)] = inst_70969);

(statearr_71021_71065[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (6))){
var inst_70916 = (state_71001[(10)]);
var state_71001__$1 = state_71001;
var statearr_71022_71066 = state_71001__$1;
(statearr_71022_71066[(2)] = inst_70916);

(statearr_71022_71066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (28))){
var inst_70963 = (state_71001[(2)]);
var inst_70964 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70965 = figwheel.client.heads_up.display_warning.call(null,inst_70964);
var state_71001__$1 = (function (){var statearr_71023 = state_71001;
(statearr_71023[(11)] = inst_70963);

return statearr_71023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(29),inst_70965);
} else {
if((state_val_71002 === (25))){
var inst_70961 = figwheel.client.heads_up.clear.call(null);
var state_71001__$1 = state_71001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(28),inst_70961);
} else {
if((state_val_71002 === (34))){
var inst_70982 = figwheel.client.heads_up.flash_loaded.call(null);
var state_71001__$1 = state_71001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(37),inst_70982);
} else {
if((state_val_71002 === (17))){
var inst_70941 = (state_71001[(2)]);
var inst_70942 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70943 = figwheel.client.auto_jump_to_error.call(null,opts,inst_70942);
var state_71001__$1 = (function (){var statearr_71024 = state_71001;
(statearr_71024[(12)] = inst_70941);

return statearr_71024;
})();
var statearr_71025_71067 = state_71001__$1;
(statearr_71025_71067[(2)] = inst_70943);

(statearr_71025_71067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (3))){
var inst_70933 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_71001__$1 = state_71001;
if(cljs.core.truth_(inst_70933)){
var statearr_71026_71068 = state_71001__$1;
(statearr_71026_71068[(1)] = (13));

} else {
var statearr_71027_71069 = state_71001__$1;
(statearr_71027_71069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (12))){
var inst_70929 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71028_71070 = state_71001__$1;
(statearr_71028_71070[(2)] = inst_70929);

(statearr_71028_71070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (2))){
var inst_70916 = (state_71001[(10)]);
var inst_70916__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_71001__$1 = (function (){var statearr_71029 = state_71001;
(statearr_71029[(10)] = inst_70916__$1);

return statearr_71029;
})();
if(cljs.core.truth_(inst_70916__$1)){
var statearr_71030_71071 = state_71001__$1;
(statearr_71030_71071[(1)] = (5));

} else {
var statearr_71031_71072 = state_71001__$1;
(statearr_71031_71072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (23))){
var inst_70959 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_71001__$1 = state_71001;
if(cljs.core.truth_(inst_70959)){
var statearr_71032_71073 = state_71001__$1;
(statearr_71032_71073[(1)] = (25));

} else {
var statearr_71033_71074 = state_71001__$1;
(statearr_71033_71074[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (35))){
var state_71001__$1 = state_71001;
var statearr_71034_71075 = state_71001__$1;
(statearr_71034_71075[(2)] = null);

(statearr_71034_71075[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (19))){
var inst_70954 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_71001__$1 = state_71001;
if(cljs.core.truth_(inst_70954)){
var statearr_71035_71076 = state_71001__$1;
(statearr_71035_71076[(1)] = (22));

} else {
var statearr_71036_71077 = state_71001__$1;
(statearr_71036_71077[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (11))){
var inst_70925 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71037_71078 = state_71001__$1;
(statearr_71037_71078[(2)] = inst_70925);

(statearr_71037_71078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (9))){
var inst_70927 = figwheel.client.heads_up.clear.call(null);
var state_71001__$1 = state_71001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(12),inst_70927);
} else {
if((state_val_71002 === (5))){
var inst_70918 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_71001__$1 = state_71001;
var statearr_71038_71079 = state_71001__$1;
(statearr_71038_71079[(2)] = inst_70918);

(statearr_71038_71079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (14))){
var inst_70945 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_71001__$1 = state_71001;
if(cljs.core.truth_(inst_70945)){
var statearr_71039_71080 = state_71001__$1;
(statearr_71039_71080[(1)] = (18));

} else {
var statearr_71040_71081 = state_71001__$1;
(statearr_71040_71081[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (26))){
var inst_70971 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_71001__$1 = state_71001;
if(cljs.core.truth_(inst_70971)){
var statearr_71041_71082 = state_71001__$1;
(statearr_71041_71082[(1)] = (30));

} else {
var statearr_71042_71083 = state_71001__$1;
(statearr_71042_71083[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (16))){
var inst_70937 = (state_71001[(2)]);
var inst_70938 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70939 = figwheel.client.heads_up.display_exception.call(null,inst_70938);
var state_71001__$1 = (function (){var statearr_71043 = state_71001;
(statearr_71043[(13)] = inst_70937);

return statearr_71043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(17),inst_70939);
} else {
if((state_val_71002 === (30))){
var inst_70973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70974 = figwheel.client.heads_up.display_warning.call(null,inst_70973);
var state_71001__$1 = state_71001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(33),inst_70974);
} else {
if((state_val_71002 === (10))){
var inst_70931 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71044_71084 = state_71001__$1;
(statearr_71044_71084[(2)] = inst_70931);

(statearr_71044_71084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (18))){
var inst_70947 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_70948 = figwheel.client.heads_up.display_exception.call(null,inst_70947);
var state_71001__$1 = state_71001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(21),inst_70948);
} else {
if((state_val_71002 === (37))){
var inst_70984 = (state_71001[(2)]);
var state_71001__$1 = state_71001;
var statearr_71045_71085 = state_71001__$1;
(statearr_71045_71085[(2)] = inst_70984);

(statearr_71045_71085[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71002 === (8))){
var inst_70923 = figwheel.client.heads_up.flash_loaded.call(null);
var state_71001__$1 = state_71001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71001__$1,(11),inst_70923);
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
});})(c__64983__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__64893__auto__,c__64983__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto____0 = (function (){
var statearr_71046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71046[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto__);

(statearr_71046[(1)] = (1));

return statearr_71046;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto____1 = (function (state_71001){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_71001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e71047){if((e71047 instanceof Object)){
var ex__64897__auto__ = e71047;
var statearr_71048_71086 = state_71001;
(statearr_71048_71086[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71087 = state_71001;
state_71001 = G__71087;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto__ = function(state_71001){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto____1.call(this,state_71001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__,msg_hist,msg_names,msg))
})();
var state__64985__auto__ = (function (){var statearr_71049 = f__64984__auto__.call(null);
(statearr_71049[(6)] = c__64983__auto__);

return statearr_71049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__,msg_hist,msg_names,msg))
);

return c__64983__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__64983__auto___71116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___71116,ch){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___71116,ch){
return (function (state_71102){
var state_val_71103 = (state_71102[(1)]);
if((state_val_71103 === (1))){
var state_71102__$1 = state_71102;
var statearr_71104_71117 = state_71102__$1;
(statearr_71104_71117[(2)] = null);

(statearr_71104_71117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71103 === (2))){
var state_71102__$1 = state_71102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71102__$1,(4),ch);
} else {
if((state_val_71103 === (3))){
var inst_71100 = (state_71102[(2)]);
var state_71102__$1 = state_71102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71102__$1,inst_71100);
} else {
if((state_val_71103 === (4))){
var inst_71090 = (state_71102[(7)]);
var inst_71090__$1 = (state_71102[(2)]);
var state_71102__$1 = (function (){var statearr_71105 = state_71102;
(statearr_71105[(7)] = inst_71090__$1);

return statearr_71105;
})();
if(cljs.core.truth_(inst_71090__$1)){
var statearr_71106_71118 = state_71102__$1;
(statearr_71106_71118[(1)] = (5));

} else {
var statearr_71107_71119 = state_71102__$1;
(statearr_71107_71119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71103 === (5))){
var inst_71090 = (state_71102[(7)]);
var inst_71092 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_71090);
var state_71102__$1 = state_71102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71102__$1,(8),inst_71092);
} else {
if((state_val_71103 === (6))){
var state_71102__$1 = state_71102;
var statearr_71108_71120 = state_71102__$1;
(statearr_71108_71120[(2)] = null);

(statearr_71108_71120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71103 === (7))){
var inst_71098 = (state_71102[(2)]);
var state_71102__$1 = state_71102;
var statearr_71109_71121 = state_71102__$1;
(statearr_71109_71121[(2)] = inst_71098);

(statearr_71109_71121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71103 === (8))){
var inst_71094 = (state_71102[(2)]);
var state_71102__$1 = (function (){var statearr_71110 = state_71102;
(statearr_71110[(8)] = inst_71094);

return statearr_71110;
})();
var statearr_71111_71122 = state_71102__$1;
(statearr_71111_71122[(2)] = null);

(statearr_71111_71122[(1)] = (2));


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
});})(c__64983__auto___71116,ch))
;
return ((function (switch__64893__auto__,c__64983__auto___71116,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__64894__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__64894__auto____0 = (function (){
var statearr_71112 = [null,null,null,null,null,null,null,null,null];
(statearr_71112[(0)] = figwheel$client$heads_up_plugin_$_state_machine__64894__auto__);

(statearr_71112[(1)] = (1));

return statearr_71112;
});
var figwheel$client$heads_up_plugin_$_state_machine__64894__auto____1 = (function (state_71102){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_71102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e71113){if((e71113 instanceof Object)){
var ex__64897__auto__ = e71113;
var statearr_71114_71123 = state_71102;
(statearr_71114_71123[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71124 = state_71102;
state_71102 = G__71124;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__64894__auto__ = function(state_71102){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__64894__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__64894__auto____1.call(this,state_71102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__64894__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__64894__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___71116,ch))
})();
var state__64985__auto__ = (function (){var statearr_71115 = f__64984__auto__.call(null);
(statearr_71115[(6)] = c__64983__auto___71116);

return statearr_71115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___71116,ch))
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
var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__){
return (function (state_71130){
var state_val_71131 = (state_71130[(1)]);
if((state_val_71131 === (1))){
var inst_71125 = cljs.core.async.timeout.call(null,(3000));
var state_71130__$1 = state_71130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71130__$1,(2),inst_71125);
} else {
if((state_val_71131 === (2))){
var inst_71127 = (state_71130[(2)]);
var inst_71128 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_71130__$1 = (function (){var statearr_71132 = state_71130;
(statearr_71132[(7)] = inst_71127);

return statearr_71132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71130__$1,inst_71128);
} else {
return null;
}
}
});})(c__64983__auto__))
;
return ((function (switch__64893__auto__,c__64983__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__64894__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__64894__auto____0 = (function (){
var statearr_71133 = [null,null,null,null,null,null,null,null];
(statearr_71133[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__64894__auto__);

(statearr_71133[(1)] = (1));

return statearr_71133;
});
var figwheel$client$enforce_project_plugin_$_state_machine__64894__auto____1 = (function (state_71130){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_71130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e71134){if((e71134 instanceof Object)){
var ex__64897__auto__ = e71134;
var statearr_71135_71137 = state_71130;
(statearr_71135_71137[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71138 = state_71130;
state_71130 = G__71138;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__64894__auto__ = function(state_71130){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__64894__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__64894__auto____1.call(this,state_71130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__64894__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__64894__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__))
})();
var state__64985__auto__ = (function (){var statearr_71136 = f__64984__auto__.call(null);
(statearr_71136[(6)] = c__64983__auto__);

return statearr_71136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__))
);

return c__64983__auto__;
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
var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__,figwheel_version,temp__6738__auto__){
return (function (state_71145){
var state_val_71146 = (state_71145[(1)]);
if((state_val_71146 === (1))){
var inst_71139 = cljs.core.async.timeout.call(null,(2000));
var state_71145__$1 = state_71145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71145__$1,(2),inst_71139);
} else {
if((state_val_71146 === (2))){
var inst_71141 = (state_71145[(2)]);
var inst_71142 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_71143 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_71142);
var state_71145__$1 = (function (){var statearr_71147 = state_71145;
(statearr_71147[(7)] = inst_71141);

return statearr_71147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71145__$1,inst_71143);
} else {
return null;
}
}
});})(c__64983__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__64893__auto__,c__64983__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto____0 = (function (){
var statearr_71148 = [null,null,null,null,null,null,null,null];
(statearr_71148[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto__);

(statearr_71148[(1)] = (1));

return statearr_71148;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto____1 = (function (state_71145){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_71145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e71149){if((e71149 instanceof Object)){
var ex__64897__auto__ = e71149;
var statearr_71150_71152 = state_71145;
(statearr_71150_71152[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71153 = state_71145;
state_71145 = G__71153;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto__ = function(state_71145){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto____1.call(this,state_71145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__,figwheel_version,temp__6738__auto__))
})();
var state__64985__auto__ = (function (){var statearr_71151 = f__64984__auto__.call(null);
(statearr_71151[(6)] = c__64983__auto__);

return statearr_71151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__,figwheel_version,temp__6738__auto__))
);

return c__64983__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__71154){
var map__71155 = p__71154;
var map__71155__$1 = ((((!((map__71155 == null)))?((((map__71155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71155):map__71155);
var file = cljs.core.get.call(null,map__71155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__71155__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__71155__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__71157 = "";
var G__71157__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71157),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__71157);
var G__71157__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71157__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__71157__$1);
if(cljs.core.truth_((function (){var and__58149__auto__ = line;
if(cljs.core.truth_(and__58149__auto__)){
return column;
} else {
return and__58149__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71157__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__71157__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__71158){
var map__71159 = p__71158;
var map__71159__$1 = ((((!((map__71159 == null)))?((((map__71159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71159):map__71159);
var ed = map__71159__$1;
var formatted_exception = cljs.core.get.call(null,map__71159__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__71159__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__71159__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__71161_71165 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__71162_71166 = null;
var count__71163_71167 = (0);
var i__71164_71168 = (0);
while(true){
if((i__71164_71168 < count__71163_71167)){
var msg_71169 = cljs.core._nth.call(null,chunk__71162_71166,i__71164_71168);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_71169);

var G__71170 = seq__71161_71165;
var G__71171 = chunk__71162_71166;
var G__71172 = count__71163_71167;
var G__71173 = (i__71164_71168 + (1));
seq__71161_71165 = G__71170;
chunk__71162_71166 = G__71171;
count__71163_71167 = G__71172;
i__71164_71168 = G__71173;
continue;
} else {
var temp__6738__auto___71174 = cljs.core.seq.call(null,seq__71161_71165);
if(temp__6738__auto___71174){
var seq__71161_71175__$1 = temp__6738__auto___71174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71161_71175__$1)){
var c__59092__auto___71176 = cljs.core.chunk_first.call(null,seq__71161_71175__$1);
var G__71177 = cljs.core.chunk_rest.call(null,seq__71161_71175__$1);
var G__71178 = c__59092__auto___71176;
var G__71179 = cljs.core.count.call(null,c__59092__auto___71176);
var G__71180 = (0);
seq__71161_71165 = G__71177;
chunk__71162_71166 = G__71178;
count__71163_71167 = G__71179;
i__71164_71168 = G__71180;
continue;
} else {
var msg_71181 = cljs.core.first.call(null,seq__71161_71175__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_71181);

var G__71182 = cljs.core.next.call(null,seq__71161_71175__$1);
var G__71183 = null;
var G__71184 = (0);
var G__71185 = (0);
seq__71161_71165 = G__71182;
chunk__71162_71166 = G__71183;
count__71163_71167 = G__71184;
i__71164_71168 = G__71185;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__71186){
var map__71187 = p__71186;
var map__71187__$1 = ((((!((map__71187 == null)))?((((map__71187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71187):map__71187);
var w = map__71187__$1;
var message = cljs.core.get.call(null,map__71187__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__58149__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__58149__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__58149__auto__;
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
var seq__71189 = cljs.core.seq.call(null,plugins);
var chunk__71190 = null;
var count__71191 = (0);
var i__71192 = (0);
while(true){
if((i__71192 < count__71191)){
var vec__71193 = cljs.core._nth.call(null,chunk__71190,i__71192);
var k = cljs.core.nth.call(null,vec__71193,(0),null);
var plugin = cljs.core.nth.call(null,vec__71193,(1),null);
if(cljs.core.truth_(plugin)){
var pl_71199 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__71189,chunk__71190,count__71191,i__71192,pl_71199,vec__71193,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_71199.call(null,msg_hist);
});})(seq__71189,chunk__71190,count__71191,i__71192,pl_71199,vec__71193,k,plugin))
);
} else {
}

var G__71200 = seq__71189;
var G__71201 = chunk__71190;
var G__71202 = count__71191;
var G__71203 = (i__71192 + (1));
seq__71189 = G__71200;
chunk__71190 = G__71201;
count__71191 = G__71202;
i__71192 = G__71203;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__71189);
if(temp__6738__auto__){
var seq__71189__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71189__$1)){
var c__59092__auto__ = cljs.core.chunk_first.call(null,seq__71189__$1);
var G__71204 = cljs.core.chunk_rest.call(null,seq__71189__$1);
var G__71205 = c__59092__auto__;
var G__71206 = cljs.core.count.call(null,c__59092__auto__);
var G__71207 = (0);
seq__71189 = G__71204;
chunk__71190 = G__71205;
count__71191 = G__71206;
i__71192 = G__71207;
continue;
} else {
var vec__71196 = cljs.core.first.call(null,seq__71189__$1);
var k = cljs.core.nth.call(null,vec__71196,(0),null);
var plugin = cljs.core.nth.call(null,vec__71196,(1),null);
if(cljs.core.truth_(plugin)){
var pl_71208 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__71189,chunk__71190,count__71191,i__71192,pl_71208,vec__71196,k,plugin,seq__71189__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_71208.call(null,msg_hist);
});})(seq__71189,chunk__71190,count__71191,i__71192,pl_71208,vec__71196,k,plugin,seq__71189__$1,temp__6738__auto__))
);
} else {
}

var G__71209 = cljs.core.next.call(null,seq__71189__$1);
var G__71210 = null;
var G__71211 = (0);
var G__71212 = (0);
seq__71189 = G__71209;
chunk__71190 = G__71210;
count__71191 = G__71211;
i__71192 = G__71212;
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
var G__71214 = arguments.length;
switch (G__71214) {
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

var seq__71215_71220 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__71216_71221 = null;
var count__71217_71222 = (0);
var i__71218_71223 = (0);
while(true){
if((i__71218_71223 < count__71217_71222)){
var msg_71224 = cljs.core._nth.call(null,chunk__71216_71221,i__71218_71223);
figwheel.client.socket.handle_incoming_message.call(null,msg_71224);

var G__71225 = seq__71215_71220;
var G__71226 = chunk__71216_71221;
var G__71227 = count__71217_71222;
var G__71228 = (i__71218_71223 + (1));
seq__71215_71220 = G__71225;
chunk__71216_71221 = G__71226;
count__71217_71222 = G__71227;
i__71218_71223 = G__71228;
continue;
} else {
var temp__6738__auto___71229 = cljs.core.seq.call(null,seq__71215_71220);
if(temp__6738__auto___71229){
var seq__71215_71230__$1 = temp__6738__auto___71229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71215_71230__$1)){
var c__59092__auto___71231 = cljs.core.chunk_first.call(null,seq__71215_71230__$1);
var G__71232 = cljs.core.chunk_rest.call(null,seq__71215_71230__$1);
var G__71233 = c__59092__auto___71231;
var G__71234 = cljs.core.count.call(null,c__59092__auto___71231);
var G__71235 = (0);
seq__71215_71220 = G__71232;
chunk__71216_71221 = G__71233;
count__71217_71222 = G__71234;
i__71218_71223 = G__71235;
continue;
} else {
var msg_71236 = cljs.core.first.call(null,seq__71215_71230__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_71236);

var G__71237 = cljs.core.next.call(null,seq__71215_71230__$1);
var G__71238 = null;
var G__71239 = (0);
var G__71240 = (0);
seq__71215_71220 = G__71237;
chunk__71216_71221 = G__71238;
count__71217_71222 = G__71239;
i__71218_71223 = G__71240;
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
var args__59445__auto__ = [];
var len__59438__auto___71245 = arguments.length;
var i__59439__auto___71246 = (0);
while(true){
if((i__59439__auto___71246 < len__59438__auto___71245)){
args__59445__auto__.push((arguments[i__59439__auto___71246]));

var G__71247 = (i__59439__auto___71246 + (1));
i__59439__auto___71246 = G__71247;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__71242){
var map__71243 = p__71242;
var map__71243__$1 = ((((!((map__71243 == null)))?((((map__71243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71243):map__71243);
var opts = map__71243__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq71241){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71241));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e71248){if((e71248 instanceof Error)){
var e = e71248;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e71248;

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
return (function (p__71249){
var map__71250 = p__71249;
var map__71250__$1 = ((((!((map__71250 == null)))?((((map__71250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71250):map__71250);
var msg_name = cljs.core.get.call(null,map__71250__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1505406793131
