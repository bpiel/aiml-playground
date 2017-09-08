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
}catch (e24645){if((e24645 instanceof Error)){
var e = e24645;
return "Error: Unable to stringify";
} else {
throw e24645;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__24648 = arguments.length;
switch (G__24648) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__24646_SHARP_){
if(typeof p1__24646_SHARP_ === 'string'){
return p1__24646_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__24646_SHARP_);
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
var len__11087__auto___24651 = arguments.length;
var i__11088__auto___24652 = (0);
while(true){
if((i__11088__auto___24652 < len__11087__auto___24651)){
args__11094__auto__.push((arguments[i__11088__auto___24652]));

var G__24653 = (i__11088__auto___24652 + (1));
i__11088__auto___24652 = G__24653;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq24650){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24650));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24655 = arguments.length;
var i__11088__auto___24656 = (0);
while(true){
if((i__11088__auto___24656 < len__11087__auto___24655)){
args__11094__auto__.push((arguments[i__11088__auto___24656]));

var G__24657 = (i__11088__auto___24656 + (1));
i__11088__auto___24656 = G__24657;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq24654){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24654));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24658){
var map__24659 = p__24658;
var map__24659__$1 = ((((!((map__24659 == null)))?((((map__24659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24659):map__24659);
var message = cljs.core.get.call(null,map__24659__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24659__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__17933__auto___24738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___24738,ch){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___24738,ch){
return (function (state_24710){
var state_val_24711 = (state_24710[(1)]);
if((state_val_24711 === (7))){
var inst_24706 = (state_24710[(2)]);
var state_24710__$1 = state_24710;
var statearr_24712_24739 = state_24710__$1;
(statearr_24712_24739[(2)] = inst_24706);

(statearr_24712_24739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (1))){
var state_24710__$1 = state_24710;
var statearr_24713_24740 = state_24710__$1;
(statearr_24713_24740[(2)] = null);

(statearr_24713_24740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (4))){
var inst_24663 = (state_24710[(7)]);
var inst_24663__$1 = (state_24710[(2)]);
var state_24710__$1 = (function (){var statearr_24714 = state_24710;
(statearr_24714[(7)] = inst_24663__$1);

return statearr_24714;
})();
if(cljs.core.truth_(inst_24663__$1)){
var statearr_24715_24741 = state_24710__$1;
(statearr_24715_24741[(1)] = (5));

} else {
var statearr_24716_24742 = state_24710__$1;
(statearr_24716_24742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (15))){
var inst_24670 = (state_24710[(8)]);
var inst_24685 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24670);
var inst_24686 = cljs.core.first.call(null,inst_24685);
var inst_24687 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24686);
var inst_24688 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24687)].join('');
var inst_24689 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24688);
var state_24710__$1 = state_24710;
var statearr_24717_24743 = state_24710__$1;
(statearr_24717_24743[(2)] = inst_24689);

(statearr_24717_24743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (13))){
var inst_24694 = (state_24710[(2)]);
var state_24710__$1 = state_24710;
var statearr_24718_24744 = state_24710__$1;
(statearr_24718_24744[(2)] = inst_24694);

(statearr_24718_24744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (6))){
var state_24710__$1 = state_24710;
var statearr_24719_24745 = state_24710__$1;
(statearr_24719_24745[(2)] = null);

(statearr_24719_24745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (17))){
var inst_24692 = (state_24710[(2)]);
var state_24710__$1 = state_24710;
var statearr_24720_24746 = state_24710__$1;
(statearr_24720_24746[(2)] = inst_24692);

(statearr_24720_24746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (3))){
var inst_24708 = (state_24710[(2)]);
var state_24710__$1 = state_24710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24710__$1,inst_24708);
} else {
if((state_val_24711 === (12))){
var inst_24669 = (state_24710[(9)]);
var inst_24683 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24669,opts);
var state_24710__$1 = state_24710;
if(cljs.core.truth_(inst_24683)){
var statearr_24721_24747 = state_24710__$1;
(statearr_24721_24747[(1)] = (15));

} else {
var statearr_24722_24748 = state_24710__$1;
(statearr_24722_24748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (2))){
var state_24710__$1 = state_24710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24710__$1,(4),ch);
} else {
if((state_val_24711 === (11))){
var inst_24670 = (state_24710[(8)]);
var inst_24675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24676 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24670);
var inst_24677 = cljs.core.async.timeout.call(null,(1000));
var inst_24678 = [inst_24676,inst_24677];
var inst_24679 = (new cljs.core.PersistentVector(null,2,(5),inst_24675,inst_24678,null));
var state_24710__$1 = state_24710;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24710__$1,(14),inst_24679);
} else {
if((state_val_24711 === (9))){
var inst_24670 = (state_24710[(8)]);
var inst_24696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24697 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24670);
var inst_24698 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24697);
var inst_24699 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24698)].join('');
var inst_24700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24699);
var state_24710__$1 = (function (){var statearr_24723 = state_24710;
(statearr_24723[(10)] = inst_24696);

return statearr_24723;
})();
var statearr_24724_24749 = state_24710__$1;
(statearr_24724_24749[(2)] = inst_24700);

(statearr_24724_24749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (5))){
var inst_24663 = (state_24710[(7)]);
var inst_24665 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24666 = (new cljs.core.PersistentArrayMap(null,2,inst_24665,null));
var inst_24667 = (new cljs.core.PersistentHashSet(null,inst_24666,null));
var inst_24668 = figwheel.client.focus_msgs.call(null,inst_24667,inst_24663);
var inst_24669 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24668);
var inst_24670 = cljs.core.first.call(null,inst_24668);
var inst_24671 = figwheel.client.autoload_QMARK_.call(null);
var state_24710__$1 = (function (){var statearr_24725 = state_24710;
(statearr_24725[(8)] = inst_24670);

(statearr_24725[(9)] = inst_24669);

return statearr_24725;
})();
if(cljs.core.truth_(inst_24671)){
var statearr_24726_24750 = state_24710__$1;
(statearr_24726_24750[(1)] = (8));

} else {
var statearr_24727_24751 = state_24710__$1;
(statearr_24727_24751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (14))){
var inst_24681 = (state_24710[(2)]);
var state_24710__$1 = state_24710;
var statearr_24728_24752 = state_24710__$1;
(statearr_24728_24752[(2)] = inst_24681);

(statearr_24728_24752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (16))){
var state_24710__$1 = state_24710;
var statearr_24729_24753 = state_24710__$1;
(statearr_24729_24753[(2)] = null);

(statearr_24729_24753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (10))){
var inst_24702 = (state_24710[(2)]);
var state_24710__$1 = (function (){var statearr_24730 = state_24710;
(statearr_24730[(11)] = inst_24702);

return statearr_24730;
})();
var statearr_24731_24754 = state_24710__$1;
(statearr_24731_24754[(2)] = null);

(statearr_24731_24754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24711 === (8))){
var inst_24669 = (state_24710[(9)]);
var inst_24673 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24669,opts);
var state_24710__$1 = state_24710;
if(cljs.core.truth_(inst_24673)){
var statearr_24732_24755 = state_24710__$1;
(statearr_24732_24755[(1)] = (11));

} else {
var statearr_24733_24756 = state_24710__$1;
(statearr_24733_24756[(1)] = (12));

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
});})(c__17933__auto___24738,ch))
;
return ((function (switch__17843__auto__,c__17933__auto___24738,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__17844__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__17844__auto____0 = (function (){
var statearr_24734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24734[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__17844__auto__);

(statearr_24734[(1)] = (1));

return statearr_24734;
});
var figwheel$client$file_reloader_plugin_$_state_machine__17844__auto____1 = (function (state_24710){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_24710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e24735){if((e24735 instanceof Object)){
var ex__17847__auto__ = e24735;
var statearr_24736_24757 = state_24710;
(statearr_24736_24757[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24758 = state_24710;
state_24710 = G__24758;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__17844__auto__ = function(state_24710){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__17844__auto____1.call(this,state_24710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__17844__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__17844__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___24738,ch))
})();
var state__17935__auto__ = (function (){var statearr_24737 = f__17934__auto__.call(null);
(statearr_24737[(6)] = c__17933__auto___24738);

return statearr_24737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___24738,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24759_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24759_SHARP_));
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
var base_path_24761 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24761){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e24760){if((e24760 instanceof Error)){
var e = e24760;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24761], null));
} else {
var e = e24760;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_24761))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24762){
var map__24763 = p__24762;
var map__24763__$1 = ((((!((map__24763 == null)))?((((map__24763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24763):map__24763);
var opts = map__24763__$1;
var build_id = cljs.core.get.call(null,map__24763__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24763,map__24763__$1,opts,build_id){
return (function (p__24765){
var vec__24766 = p__24765;
var seq__24767 = cljs.core.seq.call(null,vec__24766);
var first__24768 = cljs.core.first.call(null,seq__24767);
var seq__24767__$1 = cljs.core.next.call(null,seq__24767);
var map__24769 = first__24768;
var map__24769__$1 = ((((!((map__24769 == null)))?((((map__24769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24769):map__24769);
var msg = map__24769__$1;
var msg_name = cljs.core.get.call(null,map__24769__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24767__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24766,seq__24767,first__24768,seq__24767__$1,map__24769,map__24769__$1,msg,msg_name,_,map__24763,map__24763__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24766,seq__24767,first__24768,seq__24767__$1,map__24769,map__24769__$1,msg,msg_name,_,map__24763,map__24763__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24763,map__24763__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24771){
var vec__24772 = p__24771;
var seq__24773 = cljs.core.seq.call(null,vec__24772);
var first__24774 = cljs.core.first.call(null,seq__24773);
var seq__24773__$1 = cljs.core.next.call(null,seq__24773);
var map__24775 = first__24774;
var map__24775__$1 = ((((!((map__24775 == null)))?((((map__24775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24775):map__24775);
var msg = map__24775__$1;
var msg_name = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24773__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24777){
var map__24778 = p__24777;
var map__24778__$1 = ((((!((map__24778 == null)))?((((map__24778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24778):map__24778);
var on_compile_warning = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24778,map__24778__$1,on_compile_warning,on_compile_fail){
return (function (p__24780){
var vec__24781 = p__24780;
var seq__24782 = cljs.core.seq.call(null,vec__24781);
var first__24783 = cljs.core.first.call(null,seq__24782);
var seq__24782__$1 = cljs.core.next.call(null,seq__24782);
var map__24784 = first__24783;
var map__24784__$1 = ((((!((map__24784 == null)))?((((map__24784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24784):map__24784);
var msg = map__24784__$1;
var msg_name = cljs.core.get.call(null,map__24784__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24782__$1;
var pred__24786 = cljs.core._EQ_;
var expr__24787 = msg_name;
if(cljs.core.truth_(pred__24786.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24787))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24786.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24787))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24778,map__24778__$1,on_compile_warning,on_compile_fail))
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
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__,msg_hist,msg_names,msg){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__,msg_hist,msg_names,msg){
return (function (state_24876){
var state_val_24877 = (state_24876[(1)]);
if((state_val_24877 === (7))){
var inst_24796 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24796)){
var statearr_24878_24925 = state_24876__$1;
(statearr_24878_24925[(1)] = (8));

} else {
var statearr_24879_24926 = state_24876__$1;
(statearr_24879_24926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (20))){
var inst_24870 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24880_24927 = state_24876__$1;
(statearr_24880_24927[(2)] = inst_24870);

(statearr_24880_24927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (27))){
var inst_24866 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24881_24928 = state_24876__$1;
(statearr_24881_24928[(2)] = inst_24866);

(statearr_24881_24928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (1))){
var inst_24789 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24789)){
var statearr_24882_24929 = state_24876__$1;
(statearr_24882_24929[(1)] = (2));

} else {
var statearr_24883_24930 = state_24876__$1;
(statearr_24883_24930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (24))){
var inst_24868 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24884_24931 = state_24876__$1;
(statearr_24884_24931[(2)] = inst_24868);

(statearr_24884_24931[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (4))){
var inst_24874 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24876__$1,inst_24874);
} else {
if((state_val_24877 === (15))){
var inst_24872 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24885_24932 = state_24876__$1;
(statearr_24885_24932[(2)] = inst_24872);

(statearr_24885_24932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (21))){
var inst_24825 = (state_24876[(2)]);
var inst_24826 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24827 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24826);
var state_24876__$1 = (function (){var statearr_24886 = state_24876;
(statearr_24886[(7)] = inst_24825);

return statearr_24886;
})();
var statearr_24887_24933 = state_24876__$1;
(statearr_24887_24933[(2)] = inst_24827);

(statearr_24887_24933[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (31))){
var inst_24855 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24855)){
var statearr_24888_24934 = state_24876__$1;
(statearr_24888_24934[(1)] = (34));

} else {
var statearr_24889_24935 = state_24876__$1;
(statearr_24889_24935[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (32))){
var inst_24864 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24890_24936 = state_24876__$1;
(statearr_24890_24936[(2)] = inst_24864);

(statearr_24890_24936[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (33))){
var inst_24851 = (state_24876[(2)]);
var inst_24852 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24853 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24852);
var state_24876__$1 = (function (){var statearr_24891 = state_24876;
(statearr_24891[(8)] = inst_24851);

return statearr_24891;
})();
var statearr_24892_24937 = state_24876__$1;
(statearr_24892_24937[(2)] = inst_24853);

(statearr_24892_24937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (13))){
var inst_24810 = figwheel.client.heads_up.clear.call(null);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(16),inst_24810);
} else {
if((state_val_24877 === (22))){
var inst_24831 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24832 = figwheel.client.heads_up.append_warning_message.call(null,inst_24831);
var state_24876__$1 = state_24876;
var statearr_24893_24938 = state_24876__$1;
(statearr_24893_24938[(2)] = inst_24832);

(statearr_24893_24938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (36))){
var inst_24862 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24894_24939 = state_24876__$1;
(statearr_24894_24939[(2)] = inst_24862);

(statearr_24894_24939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (29))){
var inst_24842 = (state_24876[(2)]);
var inst_24843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24844 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24843);
var state_24876__$1 = (function (){var statearr_24895 = state_24876;
(statearr_24895[(9)] = inst_24842);

return statearr_24895;
})();
var statearr_24896_24940 = state_24876__$1;
(statearr_24896_24940[(2)] = inst_24844);

(statearr_24896_24940[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (6))){
var inst_24791 = (state_24876[(10)]);
var state_24876__$1 = state_24876;
var statearr_24897_24941 = state_24876__$1;
(statearr_24897_24941[(2)] = inst_24791);

(statearr_24897_24941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (28))){
var inst_24838 = (state_24876[(2)]);
var inst_24839 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24840 = figwheel.client.heads_up.display_warning.call(null,inst_24839);
var state_24876__$1 = (function (){var statearr_24898 = state_24876;
(statearr_24898[(11)] = inst_24838);

return statearr_24898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(29),inst_24840);
} else {
if((state_val_24877 === (25))){
var inst_24836 = figwheel.client.heads_up.clear.call(null);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(28),inst_24836);
} else {
if((state_val_24877 === (34))){
var inst_24857 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(37),inst_24857);
} else {
if((state_val_24877 === (17))){
var inst_24816 = (state_24876[(2)]);
var inst_24817 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24818 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24817);
var state_24876__$1 = (function (){var statearr_24899 = state_24876;
(statearr_24899[(12)] = inst_24816);

return statearr_24899;
})();
var statearr_24900_24942 = state_24876__$1;
(statearr_24900_24942[(2)] = inst_24818);

(statearr_24900_24942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (3))){
var inst_24808 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24808)){
var statearr_24901_24943 = state_24876__$1;
(statearr_24901_24943[(1)] = (13));

} else {
var statearr_24902_24944 = state_24876__$1;
(statearr_24902_24944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (12))){
var inst_24804 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24903_24945 = state_24876__$1;
(statearr_24903_24945[(2)] = inst_24804);

(statearr_24903_24945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (2))){
var inst_24791 = (state_24876[(10)]);
var inst_24791__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24876__$1 = (function (){var statearr_24904 = state_24876;
(statearr_24904[(10)] = inst_24791__$1);

return statearr_24904;
})();
if(cljs.core.truth_(inst_24791__$1)){
var statearr_24905_24946 = state_24876__$1;
(statearr_24905_24946[(1)] = (5));

} else {
var statearr_24906_24947 = state_24876__$1;
(statearr_24906_24947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (23))){
var inst_24834 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24834)){
var statearr_24907_24948 = state_24876__$1;
(statearr_24907_24948[(1)] = (25));

} else {
var statearr_24908_24949 = state_24876__$1;
(statearr_24908_24949[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (35))){
var state_24876__$1 = state_24876;
var statearr_24909_24950 = state_24876__$1;
(statearr_24909_24950[(2)] = null);

(statearr_24909_24950[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (19))){
var inst_24829 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24829)){
var statearr_24910_24951 = state_24876__$1;
(statearr_24910_24951[(1)] = (22));

} else {
var statearr_24911_24952 = state_24876__$1;
(statearr_24911_24952[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (11))){
var inst_24800 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24912_24953 = state_24876__$1;
(statearr_24912_24953[(2)] = inst_24800);

(statearr_24912_24953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (9))){
var inst_24802 = figwheel.client.heads_up.clear.call(null);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(12),inst_24802);
} else {
if((state_val_24877 === (5))){
var inst_24793 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24876__$1 = state_24876;
var statearr_24913_24954 = state_24876__$1;
(statearr_24913_24954[(2)] = inst_24793);

(statearr_24913_24954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (14))){
var inst_24820 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24820)){
var statearr_24914_24955 = state_24876__$1;
(statearr_24914_24955[(1)] = (18));

} else {
var statearr_24915_24956 = state_24876__$1;
(statearr_24915_24956[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (26))){
var inst_24846 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24846)){
var statearr_24916_24957 = state_24876__$1;
(statearr_24916_24957[(1)] = (30));

} else {
var statearr_24917_24958 = state_24876__$1;
(statearr_24917_24958[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (16))){
var inst_24812 = (state_24876[(2)]);
var inst_24813 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24814 = figwheel.client.heads_up.display_exception.call(null,inst_24813);
var state_24876__$1 = (function (){var statearr_24918 = state_24876;
(statearr_24918[(13)] = inst_24812);

return statearr_24918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(17),inst_24814);
} else {
if((state_val_24877 === (30))){
var inst_24848 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24849 = figwheel.client.heads_up.display_warning.call(null,inst_24848);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(33),inst_24849);
} else {
if((state_val_24877 === (10))){
var inst_24806 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24919_24959 = state_24876__$1;
(statearr_24919_24959[(2)] = inst_24806);

(statearr_24919_24959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (18))){
var inst_24822 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24823 = figwheel.client.heads_up.display_exception.call(null,inst_24822);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(21),inst_24823);
} else {
if((state_val_24877 === (37))){
var inst_24859 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24920_24960 = state_24876__$1;
(statearr_24920_24960[(2)] = inst_24859);

(statearr_24920_24960[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (8))){
var inst_24798 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(11),inst_24798);
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
});})(c__17933__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__17843__auto__,c__17933__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto____0 = (function (){
var statearr_24921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24921[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto__);

(statearr_24921[(1)] = (1));

return statearr_24921;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto____1 = (function (state_24876){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_24876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e24922){if((e24922 instanceof Object)){
var ex__17847__auto__ = e24922;
var statearr_24923_24961 = state_24876;
(statearr_24923_24961[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24962 = state_24876;
state_24876 = G__24962;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto__ = function(state_24876){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto____1.call(this,state_24876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__,msg_hist,msg_names,msg))
})();
var state__17935__auto__ = (function (){var statearr_24924 = f__17934__auto__.call(null);
(statearr_24924[(6)] = c__17933__auto__);

return statearr_24924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__,msg_hist,msg_names,msg))
);

return c__17933__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__17933__auto___24991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___24991,ch){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___24991,ch){
return (function (state_24977){
var state_val_24978 = (state_24977[(1)]);
if((state_val_24978 === (1))){
var state_24977__$1 = state_24977;
var statearr_24979_24992 = state_24977__$1;
(statearr_24979_24992[(2)] = null);

(statearr_24979_24992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (2))){
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24977__$1,(4),ch);
} else {
if((state_val_24978 === (3))){
var inst_24975 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24977__$1,inst_24975);
} else {
if((state_val_24978 === (4))){
var inst_24965 = (state_24977[(7)]);
var inst_24965__$1 = (state_24977[(2)]);
var state_24977__$1 = (function (){var statearr_24980 = state_24977;
(statearr_24980[(7)] = inst_24965__$1);

return statearr_24980;
})();
if(cljs.core.truth_(inst_24965__$1)){
var statearr_24981_24993 = state_24977__$1;
(statearr_24981_24993[(1)] = (5));

} else {
var statearr_24982_24994 = state_24977__$1;
(statearr_24982_24994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (5))){
var inst_24965 = (state_24977[(7)]);
var inst_24967 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24965);
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24977__$1,(8),inst_24967);
} else {
if((state_val_24978 === (6))){
var state_24977__$1 = state_24977;
var statearr_24983_24995 = state_24977__$1;
(statearr_24983_24995[(2)] = null);

(statearr_24983_24995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (7))){
var inst_24973 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24984_24996 = state_24977__$1;
(statearr_24984_24996[(2)] = inst_24973);

(statearr_24984_24996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (8))){
var inst_24969 = (state_24977[(2)]);
var state_24977__$1 = (function (){var statearr_24985 = state_24977;
(statearr_24985[(8)] = inst_24969);

return statearr_24985;
})();
var statearr_24986_24997 = state_24977__$1;
(statearr_24986_24997[(2)] = null);

(statearr_24986_24997[(1)] = (2));


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
});})(c__17933__auto___24991,ch))
;
return ((function (switch__17843__auto__,c__17933__auto___24991,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__17844__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__17844__auto____0 = (function (){
var statearr_24987 = [null,null,null,null,null,null,null,null,null];
(statearr_24987[(0)] = figwheel$client$heads_up_plugin_$_state_machine__17844__auto__);

(statearr_24987[(1)] = (1));

return statearr_24987;
});
var figwheel$client$heads_up_plugin_$_state_machine__17844__auto____1 = (function (state_24977){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_24977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e24988){if((e24988 instanceof Object)){
var ex__17847__auto__ = e24988;
var statearr_24989_24998 = state_24977;
(statearr_24989_24998[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24999 = state_24977;
state_24977 = G__24999;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__17844__auto__ = function(state_24977){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__17844__auto____1.call(this,state_24977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__17844__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__17844__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___24991,ch))
})();
var state__17935__auto__ = (function (){var statearr_24990 = f__17934__auto__.call(null);
(statearr_24990[(6)] = c__17933__auto___24991);

return statearr_24990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___24991,ch))
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
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__){
return (function (state_25005){
var state_val_25006 = (state_25005[(1)]);
if((state_val_25006 === (1))){
var inst_25000 = cljs.core.async.timeout.call(null,(3000));
var state_25005__$1 = state_25005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25005__$1,(2),inst_25000);
} else {
if((state_val_25006 === (2))){
var inst_25002 = (state_25005[(2)]);
var inst_25003 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25005__$1 = (function (){var statearr_25007 = state_25005;
(statearr_25007[(7)] = inst_25002);

return statearr_25007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25005__$1,inst_25003);
} else {
return null;
}
}
});})(c__17933__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__17844__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__17844__auto____0 = (function (){
var statearr_25008 = [null,null,null,null,null,null,null,null];
(statearr_25008[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__17844__auto__);

(statearr_25008[(1)] = (1));

return statearr_25008;
});
var figwheel$client$enforce_project_plugin_$_state_machine__17844__auto____1 = (function (state_25005){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_25005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e25009){if((e25009 instanceof Object)){
var ex__17847__auto__ = e25009;
var statearr_25010_25012 = state_25005;
(statearr_25010_25012[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25013 = state_25005;
state_25005 = G__25013;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__17844__auto__ = function(state_25005){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__17844__auto____1.call(this,state_25005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__17844__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__17844__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__))
})();
var state__17935__auto__ = (function (){var statearr_25011 = f__17934__auto__.call(null);
(statearr_25011[(6)] = c__17933__auto__);

return statearr_25011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__))
);

return c__17933__auto__;
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
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__,figwheel_version,temp__6738__auto__){
return (function (state_25020){
var state_val_25021 = (state_25020[(1)]);
if((state_val_25021 === (1))){
var inst_25014 = cljs.core.async.timeout.call(null,(2000));
var state_25020__$1 = state_25020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25020__$1,(2),inst_25014);
} else {
if((state_val_25021 === (2))){
var inst_25016 = (state_25020[(2)]);
var inst_25017 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_25018 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_25017);
var state_25020__$1 = (function (){var statearr_25022 = state_25020;
(statearr_25022[(7)] = inst_25016);

return statearr_25022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25020__$1,inst_25018);
} else {
return null;
}
}
});})(c__17933__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto____0 = (function (){
var statearr_25023 = [null,null,null,null,null,null,null,null];
(statearr_25023[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto__);

(statearr_25023[(1)] = (1));

return statearr_25023;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto____1 = (function (state_25020){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_25020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e25024){if((e25024 instanceof Object)){
var ex__17847__auto__ = e25024;
var statearr_25025_25027 = state_25020;
(statearr_25025_25027[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25028 = state_25020;
state_25020 = G__25028;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto__ = function(state_25020){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto____1.call(this,state_25020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__,figwheel_version,temp__6738__auto__))
})();
var state__17935__auto__ = (function (){var statearr_25026 = f__17934__auto__.call(null);
(statearr_25026[(6)] = c__17933__auto__);

return statearr_25026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__,figwheel_version,temp__6738__auto__))
);

return c__17933__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__25029){
var map__25030 = p__25029;
var map__25030__$1 = ((((!((map__25030 == null)))?((((map__25030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25030):map__25030);
var file = cljs.core.get.call(null,map__25030__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25030__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25030__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__25032 = "";
var G__25032__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25032),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__25032);
var G__25032__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25032__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__25032__$1);
if(cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25032__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__25032__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25033){
var map__25034 = p__25033;
var map__25034__$1 = ((((!((map__25034 == null)))?((((map__25034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25034):map__25034);
var ed = map__25034__$1;
var formatted_exception = cljs.core.get.call(null,map__25034__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25034__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25034__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25036_25040 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25037_25041 = null;
var count__25038_25042 = (0);
var i__25039_25043 = (0);
while(true){
if((i__25039_25043 < count__25038_25042)){
var msg_25044 = cljs.core._nth.call(null,chunk__25037_25041,i__25039_25043);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25044);

var G__25045 = seq__25036_25040;
var G__25046 = chunk__25037_25041;
var G__25047 = count__25038_25042;
var G__25048 = (i__25039_25043 + (1));
seq__25036_25040 = G__25045;
chunk__25037_25041 = G__25046;
count__25038_25042 = G__25047;
i__25039_25043 = G__25048;
continue;
} else {
var temp__6738__auto___25049 = cljs.core.seq.call(null,seq__25036_25040);
if(temp__6738__auto___25049){
var seq__25036_25050__$1 = temp__6738__auto___25049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25036_25050__$1)){
var c__10741__auto___25051 = cljs.core.chunk_first.call(null,seq__25036_25050__$1);
var G__25052 = cljs.core.chunk_rest.call(null,seq__25036_25050__$1);
var G__25053 = c__10741__auto___25051;
var G__25054 = cljs.core.count.call(null,c__10741__auto___25051);
var G__25055 = (0);
seq__25036_25040 = G__25052;
chunk__25037_25041 = G__25053;
count__25038_25042 = G__25054;
i__25039_25043 = G__25055;
continue;
} else {
var msg_25056 = cljs.core.first.call(null,seq__25036_25050__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25056);

var G__25057 = cljs.core.next.call(null,seq__25036_25050__$1);
var G__25058 = null;
var G__25059 = (0);
var G__25060 = (0);
seq__25036_25040 = G__25057;
chunk__25037_25041 = G__25058;
count__25038_25042 = G__25059;
i__25039_25043 = G__25060;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25061){
var map__25062 = p__25061;
var map__25062__$1 = ((((!((map__25062 == null)))?((((map__25062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25062):map__25062);
var w = map__25062__$1;
var message = cljs.core.get.call(null,map__25062__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25064 = cljs.core.seq.call(null,plugins);
var chunk__25065 = null;
var count__25066 = (0);
var i__25067 = (0);
while(true){
if((i__25067 < count__25066)){
var vec__25068 = cljs.core._nth.call(null,chunk__25065,i__25067);
var k = cljs.core.nth.call(null,vec__25068,(0),null);
var plugin = cljs.core.nth.call(null,vec__25068,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25074 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25064,chunk__25065,count__25066,i__25067,pl_25074,vec__25068,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25074.call(null,msg_hist);
});})(seq__25064,chunk__25065,count__25066,i__25067,pl_25074,vec__25068,k,plugin))
);
} else {
}

var G__25075 = seq__25064;
var G__25076 = chunk__25065;
var G__25077 = count__25066;
var G__25078 = (i__25067 + (1));
seq__25064 = G__25075;
chunk__25065 = G__25076;
count__25066 = G__25077;
i__25067 = G__25078;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__25064);
if(temp__6738__auto__){
var seq__25064__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25064__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__25064__$1);
var G__25079 = cljs.core.chunk_rest.call(null,seq__25064__$1);
var G__25080 = c__10741__auto__;
var G__25081 = cljs.core.count.call(null,c__10741__auto__);
var G__25082 = (0);
seq__25064 = G__25079;
chunk__25065 = G__25080;
count__25066 = G__25081;
i__25067 = G__25082;
continue;
} else {
var vec__25071 = cljs.core.first.call(null,seq__25064__$1);
var k = cljs.core.nth.call(null,vec__25071,(0),null);
var plugin = cljs.core.nth.call(null,vec__25071,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25083 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25064,chunk__25065,count__25066,i__25067,pl_25083,vec__25071,k,plugin,seq__25064__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25083.call(null,msg_hist);
});})(seq__25064,chunk__25065,count__25066,i__25067,pl_25083,vec__25071,k,plugin,seq__25064__$1,temp__6738__auto__))
);
} else {
}

var G__25084 = cljs.core.next.call(null,seq__25064__$1);
var G__25085 = null;
var G__25086 = (0);
var G__25087 = (0);
seq__25064 = G__25084;
chunk__25065 = G__25085;
count__25066 = G__25086;
i__25067 = G__25087;
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
var G__25089 = arguments.length;
switch (G__25089) {
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

var seq__25090_25095 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__25091_25096 = null;
var count__25092_25097 = (0);
var i__25093_25098 = (0);
while(true){
if((i__25093_25098 < count__25092_25097)){
var msg_25099 = cljs.core._nth.call(null,chunk__25091_25096,i__25093_25098);
figwheel.client.socket.handle_incoming_message.call(null,msg_25099);

var G__25100 = seq__25090_25095;
var G__25101 = chunk__25091_25096;
var G__25102 = count__25092_25097;
var G__25103 = (i__25093_25098 + (1));
seq__25090_25095 = G__25100;
chunk__25091_25096 = G__25101;
count__25092_25097 = G__25102;
i__25093_25098 = G__25103;
continue;
} else {
var temp__6738__auto___25104 = cljs.core.seq.call(null,seq__25090_25095);
if(temp__6738__auto___25104){
var seq__25090_25105__$1 = temp__6738__auto___25104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25090_25105__$1)){
var c__10741__auto___25106 = cljs.core.chunk_first.call(null,seq__25090_25105__$1);
var G__25107 = cljs.core.chunk_rest.call(null,seq__25090_25105__$1);
var G__25108 = c__10741__auto___25106;
var G__25109 = cljs.core.count.call(null,c__10741__auto___25106);
var G__25110 = (0);
seq__25090_25095 = G__25107;
chunk__25091_25096 = G__25108;
count__25092_25097 = G__25109;
i__25093_25098 = G__25110;
continue;
} else {
var msg_25111 = cljs.core.first.call(null,seq__25090_25105__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_25111);

var G__25112 = cljs.core.next.call(null,seq__25090_25105__$1);
var G__25113 = null;
var G__25114 = (0);
var G__25115 = (0);
seq__25090_25095 = G__25112;
chunk__25091_25096 = G__25113;
count__25092_25097 = G__25114;
i__25093_25098 = G__25115;
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
var len__11087__auto___25120 = arguments.length;
var i__11088__auto___25121 = (0);
while(true){
if((i__11088__auto___25121 < len__11087__auto___25120)){
args__11094__auto__.push((arguments[i__11088__auto___25121]));

var G__25122 = (i__11088__auto___25121 + (1));
i__11088__auto___25121 = G__25122;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25117){
var map__25118 = p__25117;
var map__25118__$1 = ((((!((map__25118 == null)))?((((map__25118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25118):map__25118);
var opts = map__25118__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25116){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25116));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e25123){if((e25123 instanceof Error)){
var e = e25123;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e25123;

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
return (function (p__25124){
var map__25125 = p__25124;
var map__25125__$1 = ((((!((map__25125 == null)))?((((map__25125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25125):map__25125);
var msg_name = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504894097954
