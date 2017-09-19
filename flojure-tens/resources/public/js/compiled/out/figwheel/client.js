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
}catch (e16646){if((e16646 instanceof Error)){
var e = e16646;
return "Error: Unable to stringify";
} else {
throw e16646;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__16649 = arguments.length;
switch (G__16649) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__16647_SHARP_){
if(typeof p1__16647_SHARP_ === 'string'){
return p1__16647_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__16647_SHARP_);
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
var len__11087__auto___16652 = arguments.length;
var i__11088__auto___16653 = (0);
while(true){
if((i__11088__auto___16653 < len__11087__auto___16652)){
args__11094__auto__.push((arguments[i__11088__auto___16653]));

var G__16654 = (i__11088__auto___16653 + (1));
i__11088__auto___16653 = G__16654;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq16651){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16651));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11094__auto__ = [];
var len__11087__auto___16656 = arguments.length;
var i__11088__auto___16657 = (0);
while(true){
if((i__11088__auto___16657 < len__11087__auto___16656)){
args__11094__auto__.push((arguments[i__11088__auto___16657]));

var G__16658 = (i__11088__auto___16657 + (1));
i__11088__auto___16657 = G__16658;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq16655){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16655));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__16659){
var map__16660 = p__16659;
var map__16660__$1 = ((((!((map__16660 == null)))?((((map__16660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16660):map__16660);
var message = cljs.core.get.call(null,map__16660__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__16660__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__13770__auto___16739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13770__auto___16739,ch){
return (function (){
var f__13771__auto__ = (function (){var switch__13747__auto__ = ((function (c__13770__auto___16739,ch){
return (function (state_16711){
var state_val_16712 = (state_16711[(1)]);
if((state_val_16712 === (7))){
var inst_16707 = (state_16711[(2)]);
var state_16711__$1 = state_16711;
var statearr_16713_16740 = state_16711__$1;
(statearr_16713_16740[(2)] = inst_16707);

(statearr_16713_16740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (1))){
var state_16711__$1 = state_16711;
var statearr_16714_16741 = state_16711__$1;
(statearr_16714_16741[(2)] = null);

(statearr_16714_16741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (4))){
var inst_16664 = (state_16711[(7)]);
var inst_16664__$1 = (state_16711[(2)]);
var state_16711__$1 = (function (){var statearr_16715 = state_16711;
(statearr_16715[(7)] = inst_16664__$1);

return statearr_16715;
})();
if(cljs.core.truth_(inst_16664__$1)){
var statearr_16716_16742 = state_16711__$1;
(statearr_16716_16742[(1)] = (5));

} else {
var statearr_16717_16743 = state_16711__$1;
(statearr_16717_16743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (15))){
var inst_16671 = (state_16711[(8)]);
var inst_16686 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_16671);
var inst_16687 = cljs.core.first.call(null,inst_16686);
var inst_16688 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_16687);
var inst_16689 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16688)].join('');
var inst_16690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_16689);
var state_16711__$1 = state_16711;
var statearr_16718_16744 = state_16711__$1;
(statearr_16718_16744[(2)] = inst_16690);

(statearr_16718_16744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (13))){
var inst_16695 = (state_16711[(2)]);
var state_16711__$1 = state_16711;
var statearr_16719_16745 = state_16711__$1;
(statearr_16719_16745[(2)] = inst_16695);

(statearr_16719_16745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (6))){
var state_16711__$1 = state_16711;
var statearr_16720_16746 = state_16711__$1;
(statearr_16720_16746[(2)] = null);

(statearr_16720_16746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (17))){
var inst_16693 = (state_16711[(2)]);
var state_16711__$1 = state_16711;
var statearr_16721_16747 = state_16711__$1;
(statearr_16721_16747[(2)] = inst_16693);

(statearr_16721_16747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (3))){
var inst_16709 = (state_16711[(2)]);
var state_16711__$1 = state_16711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16711__$1,inst_16709);
} else {
if((state_val_16712 === (12))){
var inst_16670 = (state_16711[(9)]);
var inst_16684 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_16670,opts);
var state_16711__$1 = state_16711;
if(cljs.core.truth_(inst_16684)){
var statearr_16722_16748 = state_16711__$1;
(statearr_16722_16748[(1)] = (15));

} else {
var statearr_16723_16749 = state_16711__$1;
(statearr_16723_16749[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (2))){
var state_16711__$1 = state_16711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16711__$1,(4),ch);
} else {
if((state_val_16712 === (11))){
var inst_16671 = (state_16711[(8)]);
var inst_16676 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16677 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_16671);
var inst_16678 = cljs.core.async.timeout.call(null,(1000));
var inst_16679 = [inst_16677,inst_16678];
var inst_16680 = (new cljs.core.PersistentVector(null,2,(5),inst_16676,inst_16679,null));
var state_16711__$1 = state_16711;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16711__$1,(14),inst_16680);
} else {
if((state_val_16712 === (9))){
var inst_16671 = (state_16711[(8)]);
var inst_16697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_16698 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_16671);
var inst_16699 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16698);
var inst_16700 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16699)].join('');
var inst_16701 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_16700);
var state_16711__$1 = (function (){var statearr_16724 = state_16711;
(statearr_16724[(10)] = inst_16697);

return statearr_16724;
})();
var statearr_16725_16750 = state_16711__$1;
(statearr_16725_16750[(2)] = inst_16701);

(statearr_16725_16750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (5))){
var inst_16664 = (state_16711[(7)]);
var inst_16666 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_16667 = (new cljs.core.PersistentArrayMap(null,2,inst_16666,null));
var inst_16668 = (new cljs.core.PersistentHashSet(null,inst_16667,null));
var inst_16669 = figwheel.client.focus_msgs.call(null,inst_16668,inst_16664);
var inst_16670 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_16669);
var inst_16671 = cljs.core.first.call(null,inst_16669);
var inst_16672 = figwheel.client.autoload_QMARK_.call(null);
var state_16711__$1 = (function (){var statearr_16726 = state_16711;
(statearr_16726[(9)] = inst_16670);

(statearr_16726[(8)] = inst_16671);

return statearr_16726;
})();
if(cljs.core.truth_(inst_16672)){
var statearr_16727_16751 = state_16711__$1;
(statearr_16727_16751[(1)] = (8));

} else {
var statearr_16728_16752 = state_16711__$1;
(statearr_16728_16752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (14))){
var inst_16682 = (state_16711[(2)]);
var state_16711__$1 = state_16711;
var statearr_16729_16753 = state_16711__$1;
(statearr_16729_16753[(2)] = inst_16682);

(statearr_16729_16753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (16))){
var state_16711__$1 = state_16711;
var statearr_16730_16754 = state_16711__$1;
(statearr_16730_16754[(2)] = null);

(statearr_16730_16754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (10))){
var inst_16703 = (state_16711[(2)]);
var state_16711__$1 = (function (){var statearr_16731 = state_16711;
(statearr_16731[(11)] = inst_16703);

return statearr_16731;
})();
var statearr_16732_16755 = state_16711__$1;
(statearr_16732_16755[(2)] = null);

(statearr_16732_16755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16712 === (8))){
var inst_16670 = (state_16711[(9)]);
var inst_16674 = figwheel.client.reload_file_state_QMARK_.call(null,inst_16670,opts);
var state_16711__$1 = state_16711;
if(cljs.core.truth_(inst_16674)){
var statearr_16733_16756 = state_16711__$1;
(statearr_16733_16756[(1)] = (11));

} else {
var statearr_16734_16757 = state_16711__$1;
(statearr_16734_16757[(1)] = (12));

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
});})(c__13770__auto___16739,ch))
;
return ((function (switch__13747__auto__,c__13770__auto___16739,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__13748__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__13748__auto____0 = (function (){
var statearr_16735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16735[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__13748__auto__);

(statearr_16735[(1)] = (1));

return statearr_16735;
});
var figwheel$client$file_reloader_plugin_$_state_machine__13748__auto____1 = (function (state_16711){
while(true){
var ret_value__13749__auto__ = (function (){try{while(true){
var result__13750__auto__ = switch__13747__auto__.call(null,state_16711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13750__auto__;
}
break;
}
}catch (e16736){if((e16736 instanceof Object)){
var ex__13751__auto__ = e16736;
var statearr_16737_16758 = state_16711;
(statearr_16737_16758[(5)] = ex__13751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16759 = state_16711;
state_16711 = G__16759;
continue;
} else {
return ret_value__13749__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__13748__auto__ = function(state_16711){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__13748__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__13748__auto____1.call(this,state_16711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__13748__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__13748__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__13748__auto__;
})()
;})(switch__13747__auto__,c__13770__auto___16739,ch))
})();
var state__13772__auto__ = (function (){var statearr_16738 = f__13771__auto__.call(null);
(statearr_16738[(6)] = c__13770__auto___16739);

return statearr_16738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13772__auto__);
});})(c__13770__auto___16739,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__16760_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__16760_SHARP_));
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
var base_path_16762 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_16762){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e16761){if((e16761 instanceof Error)){
var e = e16761;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_16762], null));
} else {
var e = e16761;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_16762))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__16763){
var map__16764 = p__16763;
var map__16764__$1 = ((((!((map__16764 == null)))?((((map__16764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16764):map__16764);
var opts = map__16764__$1;
var build_id = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__16764,map__16764__$1,opts,build_id){
return (function (p__16766){
var vec__16767 = p__16766;
var seq__16768 = cljs.core.seq.call(null,vec__16767);
var first__16769 = cljs.core.first.call(null,seq__16768);
var seq__16768__$1 = cljs.core.next.call(null,seq__16768);
var map__16770 = first__16769;
var map__16770__$1 = ((((!((map__16770 == null)))?((((map__16770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16770):map__16770);
var msg = map__16770__$1;
var msg_name = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__16768__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__16767,seq__16768,first__16769,seq__16768__$1,map__16770,map__16770__$1,msg,msg_name,_,map__16764,map__16764__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__16767,seq__16768,first__16769,seq__16768__$1,map__16770,map__16770__$1,msg,msg_name,_,map__16764,map__16764__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__16764,map__16764__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__16772){
var vec__16773 = p__16772;
var seq__16774 = cljs.core.seq.call(null,vec__16773);
var first__16775 = cljs.core.first.call(null,seq__16774);
var seq__16774__$1 = cljs.core.next.call(null,seq__16774);
var map__16776 = first__16775;
var map__16776__$1 = ((((!((map__16776 == null)))?((((map__16776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16776):map__16776);
var msg = map__16776__$1;
var msg_name = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__16774__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__16778){
var map__16779 = p__16778;
var map__16779__$1 = ((((!((map__16779 == null)))?((((map__16779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16779):map__16779);
var on_compile_warning = cljs.core.get.call(null,map__16779__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__16779__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__16779,map__16779__$1,on_compile_warning,on_compile_fail){
return (function (p__16781){
var vec__16782 = p__16781;
var seq__16783 = cljs.core.seq.call(null,vec__16782);
var first__16784 = cljs.core.first.call(null,seq__16783);
var seq__16783__$1 = cljs.core.next.call(null,seq__16783);
var map__16785 = first__16784;
var map__16785__$1 = ((((!((map__16785 == null)))?((((map__16785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16785):map__16785);
var msg = map__16785__$1;
var msg_name = cljs.core.get.call(null,map__16785__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__16783__$1;
var pred__16787 = cljs.core._EQ_;
var expr__16788 = msg_name;
if(cljs.core.truth_(pred__16787.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__16788))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__16787.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__16788))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__16779,map__16779__$1,on_compile_warning,on_compile_fail))
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
var c__13770__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13770__auto__,msg_hist,msg_names,msg){
return (function (){
var f__13771__auto__ = (function (){var switch__13747__auto__ = ((function (c__13770__auto__,msg_hist,msg_names,msg){
return (function (state_16877){
var state_val_16878 = (state_16877[(1)]);
if((state_val_16878 === (7))){
var inst_16797 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16797)){
var statearr_16879_16926 = state_16877__$1;
(statearr_16879_16926[(1)] = (8));

} else {
var statearr_16880_16927 = state_16877__$1;
(statearr_16880_16927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (20))){
var inst_16871 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16881_16928 = state_16877__$1;
(statearr_16881_16928[(2)] = inst_16871);

(statearr_16881_16928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (27))){
var inst_16867 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16882_16929 = state_16877__$1;
(statearr_16882_16929[(2)] = inst_16867);

(statearr_16882_16929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (1))){
var inst_16790 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16790)){
var statearr_16883_16930 = state_16877__$1;
(statearr_16883_16930[(1)] = (2));

} else {
var statearr_16884_16931 = state_16877__$1;
(statearr_16884_16931[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (24))){
var inst_16869 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16885_16932 = state_16877__$1;
(statearr_16885_16932[(2)] = inst_16869);

(statearr_16885_16932[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (4))){
var inst_16875 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16877__$1,inst_16875);
} else {
if((state_val_16878 === (15))){
var inst_16873 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16886_16933 = state_16877__$1;
(statearr_16886_16933[(2)] = inst_16873);

(statearr_16886_16933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (21))){
var inst_16826 = (state_16877[(2)]);
var inst_16827 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16828 = figwheel.client.auto_jump_to_error.call(null,opts,inst_16827);
var state_16877__$1 = (function (){var statearr_16887 = state_16877;
(statearr_16887[(7)] = inst_16826);

return statearr_16887;
})();
var statearr_16888_16934 = state_16877__$1;
(statearr_16888_16934[(2)] = inst_16828);

(statearr_16888_16934[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (31))){
var inst_16856 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16856)){
var statearr_16889_16935 = state_16877__$1;
(statearr_16889_16935[(1)] = (34));

} else {
var statearr_16890_16936 = state_16877__$1;
(statearr_16890_16936[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (32))){
var inst_16865 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16891_16937 = state_16877__$1;
(statearr_16891_16937[(2)] = inst_16865);

(statearr_16891_16937[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (33))){
var inst_16852 = (state_16877[(2)]);
var inst_16853 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16854 = figwheel.client.auto_jump_to_error.call(null,opts,inst_16853);
var state_16877__$1 = (function (){var statearr_16892 = state_16877;
(statearr_16892[(8)] = inst_16852);

return statearr_16892;
})();
var statearr_16893_16938 = state_16877__$1;
(statearr_16893_16938[(2)] = inst_16854);

(statearr_16893_16938[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (13))){
var inst_16811 = figwheel.client.heads_up.clear.call(null);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(16),inst_16811);
} else {
if((state_val_16878 === (22))){
var inst_16832 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16833 = figwheel.client.heads_up.append_warning_message.call(null,inst_16832);
var state_16877__$1 = state_16877;
var statearr_16894_16939 = state_16877__$1;
(statearr_16894_16939[(2)] = inst_16833);

(statearr_16894_16939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (36))){
var inst_16863 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16895_16940 = state_16877__$1;
(statearr_16895_16940[(2)] = inst_16863);

(statearr_16895_16940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (29))){
var inst_16843 = (state_16877[(2)]);
var inst_16844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16845 = figwheel.client.auto_jump_to_error.call(null,opts,inst_16844);
var state_16877__$1 = (function (){var statearr_16896 = state_16877;
(statearr_16896[(9)] = inst_16843);

return statearr_16896;
})();
var statearr_16897_16941 = state_16877__$1;
(statearr_16897_16941[(2)] = inst_16845);

(statearr_16897_16941[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (6))){
var inst_16792 = (state_16877[(10)]);
var state_16877__$1 = state_16877;
var statearr_16898_16942 = state_16877__$1;
(statearr_16898_16942[(2)] = inst_16792);

(statearr_16898_16942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (28))){
var inst_16839 = (state_16877[(2)]);
var inst_16840 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16841 = figwheel.client.heads_up.display_warning.call(null,inst_16840);
var state_16877__$1 = (function (){var statearr_16899 = state_16877;
(statearr_16899[(11)] = inst_16839);

return statearr_16899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(29),inst_16841);
} else {
if((state_val_16878 === (25))){
var inst_16837 = figwheel.client.heads_up.clear.call(null);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(28),inst_16837);
} else {
if((state_val_16878 === (34))){
var inst_16858 = figwheel.client.heads_up.flash_loaded.call(null);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(37),inst_16858);
} else {
if((state_val_16878 === (17))){
var inst_16817 = (state_16877[(2)]);
var inst_16818 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16819 = figwheel.client.auto_jump_to_error.call(null,opts,inst_16818);
var state_16877__$1 = (function (){var statearr_16900 = state_16877;
(statearr_16900[(12)] = inst_16817);

return statearr_16900;
})();
var statearr_16901_16943 = state_16877__$1;
(statearr_16901_16943[(2)] = inst_16819);

(statearr_16901_16943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (3))){
var inst_16809 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16809)){
var statearr_16902_16944 = state_16877__$1;
(statearr_16902_16944[(1)] = (13));

} else {
var statearr_16903_16945 = state_16877__$1;
(statearr_16903_16945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (12))){
var inst_16805 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16904_16946 = state_16877__$1;
(statearr_16904_16946[(2)] = inst_16805);

(statearr_16904_16946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (2))){
var inst_16792 = (state_16877[(10)]);
var inst_16792__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_16877__$1 = (function (){var statearr_16905 = state_16877;
(statearr_16905[(10)] = inst_16792__$1);

return statearr_16905;
})();
if(cljs.core.truth_(inst_16792__$1)){
var statearr_16906_16947 = state_16877__$1;
(statearr_16906_16947[(1)] = (5));

} else {
var statearr_16907_16948 = state_16877__$1;
(statearr_16907_16948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (23))){
var inst_16835 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16835)){
var statearr_16908_16949 = state_16877__$1;
(statearr_16908_16949[(1)] = (25));

} else {
var statearr_16909_16950 = state_16877__$1;
(statearr_16909_16950[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (35))){
var state_16877__$1 = state_16877;
var statearr_16910_16951 = state_16877__$1;
(statearr_16910_16951[(2)] = null);

(statearr_16910_16951[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (19))){
var inst_16830 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16830)){
var statearr_16911_16952 = state_16877__$1;
(statearr_16911_16952[(1)] = (22));

} else {
var statearr_16912_16953 = state_16877__$1;
(statearr_16912_16953[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (11))){
var inst_16801 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16913_16954 = state_16877__$1;
(statearr_16913_16954[(2)] = inst_16801);

(statearr_16913_16954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (9))){
var inst_16803 = figwheel.client.heads_up.clear.call(null);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(12),inst_16803);
} else {
if((state_val_16878 === (5))){
var inst_16794 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_16877__$1 = state_16877;
var statearr_16914_16955 = state_16877__$1;
(statearr_16914_16955[(2)] = inst_16794);

(statearr_16914_16955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (14))){
var inst_16821 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16821)){
var statearr_16915_16956 = state_16877__$1;
(statearr_16915_16956[(1)] = (18));

} else {
var statearr_16916_16957 = state_16877__$1;
(statearr_16916_16957[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (26))){
var inst_16847 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16847)){
var statearr_16917_16958 = state_16877__$1;
(statearr_16917_16958[(1)] = (30));

} else {
var statearr_16918_16959 = state_16877__$1;
(statearr_16918_16959[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (16))){
var inst_16813 = (state_16877[(2)]);
var inst_16814 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16815 = figwheel.client.heads_up.display_exception.call(null,inst_16814);
var state_16877__$1 = (function (){var statearr_16919 = state_16877;
(statearr_16919[(13)] = inst_16813);

return statearr_16919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(17),inst_16815);
} else {
if((state_val_16878 === (30))){
var inst_16849 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16850 = figwheel.client.heads_up.display_warning.call(null,inst_16849);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(33),inst_16850);
} else {
if((state_val_16878 === (10))){
var inst_16807 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16920_16960 = state_16877__$1;
(statearr_16920_16960[(2)] = inst_16807);

(statearr_16920_16960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (18))){
var inst_16823 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16824 = figwheel.client.heads_up.display_exception.call(null,inst_16823);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(21),inst_16824);
} else {
if((state_val_16878 === (37))){
var inst_16860 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16921_16961 = state_16877__$1;
(statearr_16921_16961[(2)] = inst_16860);

(statearr_16921_16961[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16878 === (8))){
var inst_16799 = figwheel.client.heads_up.flash_loaded.call(null);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16877__$1,(11),inst_16799);
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
});})(c__13770__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__13747__auto__,c__13770__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto____0 = (function (){
var statearr_16922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16922[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto__);

(statearr_16922[(1)] = (1));

return statearr_16922;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto____1 = (function (state_16877){
while(true){
var ret_value__13749__auto__ = (function (){try{while(true){
var result__13750__auto__ = switch__13747__auto__.call(null,state_16877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13750__auto__;
}
break;
}
}catch (e16923){if((e16923 instanceof Object)){
var ex__13751__auto__ = e16923;
var statearr_16924_16962 = state_16877;
(statearr_16924_16962[(5)] = ex__13751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16963 = state_16877;
state_16877 = G__16963;
continue;
} else {
return ret_value__13749__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto__ = function(state_16877){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto____1.call(this,state_16877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13748__auto__;
})()
;})(switch__13747__auto__,c__13770__auto__,msg_hist,msg_names,msg))
})();
var state__13772__auto__ = (function (){var statearr_16925 = f__13771__auto__.call(null);
(statearr_16925[(6)] = c__13770__auto__);

return statearr_16925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13772__auto__);
});})(c__13770__auto__,msg_hist,msg_names,msg))
);

return c__13770__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__13770__auto___16992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13770__auto___16992,ch){
return (function (){
var f__13771__auto__ = (function (){var switch__13747__auto__ = ((function (c__13770__auto___16992,ch){
return (function (state_16978){
var state_val_16979 = (state_16978[(1)]);
if((state_val_16979 === (1))){
var state_16978__$1 = state_16978;
var statearr_16980_16993 = state_16978__$1;
(statearr_16980_16993[(2)] = null);

(statearr_16980_16993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (2))){
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16978__$1,(4),ch);
} else {
if((state_val_16979 === (3))){
var inst_16976 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16978__$1,inst_16976);
} else {
if((state_val_16979 === (4))){
var inst_16966 = (state_16978[(7)]);
var inst_16966__$1 = (state_16978[(2)]);
var state_16978__$1 = (function (){var statearr_16981 = state_16978;
(statearr_16981[(7)] = inst_16966__$1);

return statearr_16981;
})();
if(cljs.core.truth_(inst_16966__$1)){
var statearr_16982_16994 = state_16978__$1;
(statearr_16982_16994[(1)] = (5));

} else {
var statearr_16983_16995 = state_16978__$1;
(statearr_16983_16995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (5))){
var inst_16966 = (state_16978[(7)]);
var inst_16968 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_16966);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16978__$1,(8),inst_16968);
} else {
if((state_val_16979 === (6))){
var state_16978__$1 = state_16978;
var statearr_16984_16996 = state_16978__$1;
(statearr_16984_16996[(2)] = null);

(statearr_16984_16996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (7))){
var inst_16974 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_16985_16997 = state_16978__$1;
(statearr_16985_16997[(2)] = inst_16974);

(statearr_16985_16997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (8))){
var inst_16970 = (state_16978[(2)]);
var state_16978__$1 = (function (){var statearr_16986 = state_16978;
(statearr_16986[(8)] = inst_16970);

return statearr_16986;
})();
var statearr_16987_16998 = state_16978__$1;
(statearr_16987_16998[(2)] = null);

(statearr_16987_16998[(1)] = (2));


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
});})(c__13770__auto___16992,ch))
;
return ((function (switch__13747__auto__,c__13770__auto___16992,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__13748__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__13748__auto____0 = (function (){
var statearr_16988 = [null,null,null,null,null,null,null,null,null];
(statearr_16988[(0)] = figwheel$client$heads_up_plugin_$_state_machine__13748__auto__);

(statearr_16988[(1)] = (1));

return statearr_16988;
});
var figwheel$client$heads_up_plugin_$_state_machine__13748__auto____1 = (function (state_16978){
while(true){
var ret_value__13749__auto__ = (function (){try{while(true){
var result__13750__auto__ = switch__13747__auto__.call(null,state_16978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13750__auto__;
}
break;
}
}catch (e16989){if((e16989 instanceof Object)){
var ex__13751__auto__ = e16989;
var statearr_16990_16999 = state_16978;
(statearr_16990_16999[(5)] = ex__13751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17000 = state_16978;
state_16978 = G__17000;
continue;
} else {
return ret_value__13749__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__13748__auto__ = function(state_16978){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__13748__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__13748__auto____1.call(this,state_16978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__13748__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__13748__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__13748__auto__;
})()
;})(switch__13747__auto__,c__13770__auto___16992,ch))
})();
var state__13772__auto__ = (function (){var statearr_16991 = f__13771__auto__.call(null);
(statearr_16991[(6)] = c__13770__auto___16992);

return statearr_16991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13772__auto__);
});})(c__13770__auto___16992,ch))
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
var c__13770__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13770__auto__){
return (function (){
var f__13771__auto__ = (function (){var switch__13747__auto__ = ((function (c__13770__auto__){
return (function (state_17006){
var state_val_17007 = (state_17006[(1)]);
if((state_val_17007 === (1))){
var inst_17001 = cljs.core.async.timeout.call(null,(3000));
var state_17006__$1 = state_17006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17006__$1,(2),inst_17001);
} else {
if((state_val_17007 === (2))){
var inst_17003 = (state_17006[(2)]);
var inst_17004 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_17006__$1 = (function (){var statearr_17008 = state_17006;
(statearr_17008[(7)] = inst_17003);

return statearr_17008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17006__$1,inst_17004);
} else {
return null;
}
}
});})(c__13770__auto__))
;
return ((function (switch__13747__auto__,c__13770__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__13748__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__13748__auto____0 = (function (){
var statearr_17009 = [null,null,null,null,null,null,null,null];
(statearr_17009[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__13748__auto__);

(statearr_17009[(1)] = (1));

return statearr_17009;
});
var figwheel$client$enforce_project_plugin_$_state_machine__13748__auto____1 = (function (state_17006){
while(true){
var ret_value__13749__auto__ = (function (){try{while(true){
var result__13750__auto__ = switch__13747__auto__.call(null,state_17006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13750__auto__;
}
break;
}
}catch (e17010){if((e17010 instanceof Object)){
var ex__13751__auto__ = e17010;
var statearr_17011_17013 = state_17006;
(statearr_17011_17013[(5)] = ex__13751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17014 = state_17006;
state_17006 = G__17014;
continue;
} else {
return ret_value__13749__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__13748__auto__ = function(state_17006){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__13748__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__13748__auto____1.call(this,state_17006);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__13748__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__13748__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__13748__auto__;
})()
;})(switch__13747__auto__,c__13770__auto__))
})();
var state__13772__auto__ = (function (){var statearr_17012 = f__13771__auto__.call(null);
(statearr_17012[(6)] = c__13770__auto__);

return statearr_17012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13772__auto__);
});})(c__13770__auto__))
);

return c__13770__auto__;
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
var c__13770__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13770__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__13771__auto__ = (function (){var switch__13747__auto__ = ((function (c__13770__auto__,figwheel_version,temp__6738__auto__){
return (function (state_17021){
var state_val_17022 = (state_17021[(1)]);
if((state_val_17022 === (1))){
var inst_17015 = cljs.core.async.timeout.call(null,(2000));
var state_17021__$1 = state_17021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17021__$1,(2),inst_17015);
} else {
if((state_val_17022 === (2))){
var inst_17017 = (state_17021[(2)]);
var inst_17018 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_17019 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_17018);
var state_17021__$1 = (function (){var statearr_17023 = state_17021;
(statearr_17023[(7)] = inst_17017);

return statearr_17023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17021__$1,inst_17019);
} else {
return null;
}
}
});})(c__13770__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__13747__auto__,c__13770__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto____0 = (function (){
var statearr_17024 = [null,null,null,null,null,null,null,null];
(statearr_17024[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto__);

(statearr_17024[(1)] = (1));

return statearr_17024;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto____1 = (function (state_17021){
while(true){
var ret_value__13749__auto__ = (function (){try{while(true){
var result__13750__auto__ = switch__13747__auto__.call(null,state_17021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13750__auto__;
}
break;
}
}catch (e17025){if((e17025 instanceof Object)){
var ex__13751__auto__ = e17025;
var statearr_17026_17028 = state_17021;
(statearr_17026_17028[(5)] = ex__13751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17029 = state_17021;
state_17021 = G__17029;
continue;
} else {
return ret_value__13749__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto__ = function(state_17021){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto____1.call(this,state_17021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13748__auto__;
})()
;})(switch__13747__auto__,c__13770__auto__,figwheel_version,temp__6738__auto__))
})();
var state__13772__auto__ = (function (){var statearr_17027 = f__13771__auto__.call(null);
(statearr_17027[(6)] = c__13770__auto__);

return statearr_17027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13772__auto__);
});})(c__13770__auto__,figwheel_version,temp__6738__auto__))
);

return c__13770__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__17030){
var map__17031 = p__17030;
var map__17031__$1 = ((((!((map__17031 == null)))?((((map__17031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17031):map__17031);
var file = cljs.core.get.call(null,map__17031__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__17031__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__17031__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__17033 = "";
var G__17033__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17033),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__17033);
var G__17033__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17033__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__17033__$1);
if(cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17033__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__17033__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__17034){
var map__17035 = p__17034;
var map__17035__$1 = ((((!((map__17035 == null)))?((((map__17035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17035):map__17035);
var ed = map__17035__$1;
var formatted_exception = cljs.core.get.call(null,map__17035__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__17035__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__17035__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__17037_17041 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__17038_17042 = null;
var count__17039_17043 = (0);
var i__17040_17044 = (0);
while(true){
if((i__17040_17044 < count__17039_17043)){
var msg_17045 = cljs.core._nth.call(null,chunk__17038_17042,i__17040_17044);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17045);

var G__17046 = seq__17037_17041;
var G__17047 = chunk__17038_17042;
var G__17048 = count__17039_17043;
var G__17049 = (i__17040_17044 + (1));
seq__17037_17041 = G__17046;
chunk__17038_17042 = G__17047;
count__17039_17043 = G__17048;
i__17040_17044 = G__17049;
continue;
} else {
var temp__6738__auto___17050 = cljs.core.seq.call(null,seq__17037_17041);
if(temp__6738__auto___17050){
var seq__17037_17051__$1 = temp__6738__auto___17050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17037_17051__$1)){
var c__10741__auto___17052 = cljs.core.chunk_first.call(null,seq__17037_17051__$1);
var G__17053 = cljs.core.chunk_rest.call(null,seq__17037_17051__$1);
var G__17054 = c__10741__auto___17052;
var G__17055 = cljs.core.count.call(null,c__10741__auto___17052);
var G__17056 = (0);
seq__17037_17041 = G__17053;
chunk__17038_17042 = G__17054;
count__17039_17043 = G__17055;
i__17040_17044 = G__17056;
continue;
} else {
var msg_17057 = cljs.core.first.call(null,seq__17037_17051__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17057);

var G__17058 = cljs.core.next.call(null,seq__17037_17051__$1);
var G__17059 = null;
var G__17060 = (0);
var G__17061 = (0);
seq__17037_17041 = G__17058;
chunk__17038_17042 = G__17059;
count__17039_17043 = G__17060;
i__17040_17044 = G__17061;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__17062){
var map__17063 = p__17062;
var map__17063__$1 = ((((!((map__17063 == null)))?((((map__17063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17063):map__17063);
var w = map__17063__$1;
var message = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__17065 = cljs.core.seq.call(null,plugins);
var chunk__17066 = null;
var count__17067 = (0);
var i__17068 = (0);
while(true){
if((i__17068 < count__17067)){
var vec__17069 = cljs.core._nth.call(null,chunk__17066,i__17068);
var k = cljs.core.nth.call(null,vec__17069,(0),null);
var plugin = cljs.core.nth.call(null,vec__17069,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17075 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17065,chunk__17066,count__17067,i__17068,pl_17075,vec__17069,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_17075.call(null,msg_hist);
});})(seq__17065,chunk__17066,count__17067,i__17068,pl_17075,vec__17069,k,plugin))
);
} else {
}

var G__17076 = seq__17065;
var G__17077 = chunk__17066;
var G__17078 = count__17067;
var G__17079 = (i__17068 + (1));
seq__17065 = G__17076;
chunk__17066 = G__17077;
count__17067 = G__17078;
i__17068 = G__17079;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__17065);
if(temp__6738__auto__){
var seq__17065__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17065__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__17065__$1);
var G__17080 = cljs.core.chunk_rest.call(null,seq__17065__$1);
var G__17081 = c__10741__auto__;
var G__17082 = cljs.core.count.call(null,c__10741__auto__);
var G__17083 = (0);
seq__17065 = G__17080;
chunk__17066 = G__17081;
count__17067 = G__17082;
i__17068 = G__17083;
continue;
} else {
var vec__17072 = cljs.core.first.call(null,seq__17065__$1);
var k = cljs.core.nth.call(null,vec__17072,(0),null);
var plugin = cljs.core.nth.call(null,vec__17072,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17084 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17065,chunk__17066,count__17067,i__17068,pl_17084,vec__17072,k,plugin,seq__17065__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_17084.call(null,msg_hist);
});})(seq__17065,chunk__17066,count__17067,i__17068,pl_17084,vec__17072,k,plugin,seq__17065__$1,temp__6738__auto__))
);
} else {
}

var G__17085 = cljs.core.next.call(null,seq__17065__$1);
var G__17086 = null;
var G__17087 = (0);
var G__17088 = (0);
seq__17065 = G__17085;
chunk__17066 = G__17086;
count__17067 = G__17087;
i__17068 = G__17088;
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
var G__17090 = arguments.length;
switch (G__17090) {
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

var seq__17091_17096 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__17092_17097 = null;
var count__17093_17098 = (0);
var i__17094_17099 = (0);
while(true){
if((i__17094_17099 < count__17093_17098)){
var msg_17100 = cljs.core._nth.call(null,chunk__17092_17097,i__17094_17099);
figwheel.client.socket.handle_incoming_message.call(null,msg_17100);

var G__17101 = seq__17091_17096;
var G__17102 = chunk__17092_17097;
var G__17103 = count__17093_17098;
var G__17104 = (i__17094_17099 + (1));
seq__17091_17096 = G__17101;
chunk__17092_17097 = G__17102;
count__17093_17098 = G__17103;
i__17094_17099 = G__17104;
continue;
} else {
var temp__6738__auto___17105 = cljs.core.seq.call(null,seq__17091_17096);
if(temp__6738__auto___17105){
var seq__17091_17106__$1 = temp__6738__auto___17105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17091_17106__$1)){
var c__10741__auto___17107 = cljs.core.chunk_first.call(null,seq__17091_17106__$1);
var G__17108 = cljs.core.chunk_rest.call(null,seq__17091_17106__$1);
var G__17109 = c__10741__auto___17107;
var G__17110 = cljs.core.count.call(null,c__10741__auto___17107);
var G__17111 = (0);
seq__17091_17096 = G__17108;
chunk__17092_17097 = G__17109;
count__17093_17098 = G__17110;
i__17094_17099 = G__17111;
continue;
} else {
var msg_17112 = cljs.core.first.call(null,seq__17091_17106__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_17112);

var G__17113 = cljs.core.next.call(null,seq__17091_17106__$1);
var G__17114 = null;
var G__17115 = (0);
var G__17116 = (0);
seq__17091_17096 = G__17113;
chunk__17092_17097 = G__17114;
count__17093_17098 = G__17115;
i__17094_17099 = G__17116;
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
var len__11087__auto___17121 = arguments.length;
var i__11088__auto___17122 = (0);
while(true){
if((i__11088__auto___17122 < len__11087__auto___17121)){
args__11094__auto__.push((arguments[i__11088__auto___17122]));

var G__17123 = (i__11088__auto___17122 + (1));
i__11088__auto___17122 = G__17123;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__17118){
var map__17119 = p__17118;
var map__17119__$1 = ((((!((map__17119 == null)))?((((map__17119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17119):map__17119);
var opts = map__17119__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq17117){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17117));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e17124){if((e17124 instanceof Error)){
var e = e17124;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e17124;

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
return (function (p__17125){
var map__17126 = p__17125;
var map__17126__$1 = ((((!((map__17126 == null)))?((((map__17126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17126):map__17126);
var msg_name = cljs.core.get.call(null,map__17126__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1505782741746
