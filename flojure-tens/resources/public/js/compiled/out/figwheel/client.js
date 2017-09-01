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
}catch (e22098){if((e22098 instanceof Error)){
var e = e22098;
return "Error: Unable to stringify";
} else {
throw e22098;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__22101 = arguments.length;
switch (G__22101) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__22099_SHARP_){
if(typeof p1__22099_SHARP_ === 'string'){
return p1__22099_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__22099_SHARP_);
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
var len__11087__auto___22104 = arguments.length;
var i__11088__auto___22105 = (0);
while(true){
if((i__11088__auto___22105 < len__11087__auto___22104)){
args__11094__auto__.push((arguments[i__11088__auto___22105]));

var G__22106 = (i__11088__auto___22105 + (1));
i__11088__auto___22105 = G__22106;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq22103){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22103));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11094__auto__ = [];
var len__11087__auto___22108 = arguments.length;
var i__11088__auto___22109 = (0);
while(true){
if((i__11088__auto___22109 < len__11087__auto___22108)){
args__11094__auto__.push((arguments[i__11088__auto___22109]));

var G__22110 = (i__11088__auto___22109 + (1));
i__11088__auto___22109 = G__22110;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq22107){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22107));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22111){
var map__22112 = p__22111;
var map__22112__$1 = ((((!((map__22112 == null)))?((((map__22112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22112):map__22112);
var message = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22112__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__17644__auto___22191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___22191,ch){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___22191,ch){
return (function (state_22163){
var state_val_22164 = (state_22163[(1)]);
if((state_val_22164 === (7))){
var inst_22159 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
var statearr_22165_22192 = state_22163__$1;
(statearr_22165_22192[(2)] = inst_22159);

(statearr_22165_22192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (1))){
var state_22163__$1 = state_22163;
var statearr_22166_22193 = state_22163__$1;
(statearr_22166_22193[(2)] = null);

(statearr_22166_22193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (4))){
var inst_22116 = (state_22163[(7)]);
var inst_22116__$1 = (state_22163[(2)]);
var state_22163__$1 = (function (){var statearr_22167 = state_22163;
(statearr_22167[(7)] = inst_22116__$1);

return statearr_22167;
})();
if(cljs.core.truth_(inst_22116__$1)){
var statearr_22168_22194 = state_22163__$1;
(statearr_22168_22194[(1)] = (5));

} else {
var statearr_22169_22195 = state_22163__$1;
(statearr_22169_22195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (15))){
var inst_22123 = (state_22163[(8)]);
var inst_22138 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22123);
var inst_22139 = cljs.core.first.call(null,inst_22138);
var inst_22140 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22139);
var inst_22141 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22140)].join('');
var inst_22142 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_22141);
var state_22163__$1 = state_22163;
var statearr_22170_22196 = state_22163__$1;
(statearr_22170_22196[(2)] = inst_22142);

(statearr_22170_22196[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (13))){
var inst_22147 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
var statearr_22171_22197 = state_22163__$1;
(statearr_22171_22197[(2)] = inst_22147);

(statearr_22171_22197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (6))){
var state_22163__$1 = state_22163;
var statearr_22172_22198 = state_22163__$1;
(statearr_22172_22198[(2)] = null);

(statearr_22172_22198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (17))){
var inst_22145 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
var statearr_22173_22199 = state_22163__$1;
(statearr_22173_22199[(2)] = inst_22145);

(statearr_22173_22199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (3))){
var inst_22161 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22163__$1,inst_22161);
} else {
if((state_val_22164 === (12))){
var inst_22122 = (state_22163[(9)]);
var inst_22136 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22122,opts);
var state_22163__$1 = state_22163;
if(cljs.core.truth_(inst_22136)){
var statearr_22174_22200 = state_22163__$1;
(statearr_22174_22200[(1)] = (15));

} else {
var statearr_22175_22201 = state_22163__$1;
(statearr_22175_22201[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (2))){
var state_22163__$1 = state_22163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22163__$1,(4),ch);
} else {
if((state_val_22164 === (11))){
var inst_22123 = (state_22163[(8)]);
var inst_22128 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22129 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22123);
var inst_22130 = cljs.core.async.timeout.call(null,(1000));
var inst_22131 = [inst_22129,inst_22130];
var inst_22132 = (new cljs.core.PersistentVector(null,2,(5),inst_22128,inst_22131,null));
var state_22163__$1 = state_22163;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22163__$1,(14),inst_22132);
} else {
if((state_val_22164 === (9))){
var inst_22123 = (state_22163[(8)]);
var inst_22149 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_22150 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22123);
var inst_22151 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22150);
var inst_22152 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22151)].join('');
var inst_22153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_22152);
var state_22163__$1 = (function (){var statearr_22176 = state_22163;
(statearr_22176[(10)] = inst_22149);

return statearr_22176;
})();
var statearr_22177_22202 = state_22163__$1;
(statearr_22177_22202[(2)] = inst_22153);

(statearr_22177_22202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (5))){
var inst_22116 = (state_22163[(7)]);
var inst_22118 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22119 = (new cljs.core.PersistentArrayMap(null,2,inst_22118,null));
var inst_22120 = (new cljs.core.PersistentHashSet(null,inst_22119,null));
var inst_22121 = figwheel.client.focus_msgs.call(null,inst_22120,inst_22116);
var inst_22122 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22121);
var inst_22123 = cljs.core.first.call(null,inst_22121);
var inst_22124 = figwheel.client.autoload_QMARK_.call(null);
var state_22163__$1 = (function (){var statearr_22178 = state_22163;
(statearr_22178[(9)] = inst_22122);

(statearr_22178[(8)] = inst_22123);

return statearr_22178;
})();
if(cljs.core.truth_(inst_22124)){
var statearr_22179_22203 = state_22163__$1;
(statearr_22179_22203[(1)] = (8));

} else {
var statearr_22180_22204 = state_22163__$1;
(statearr_22180_22204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (14))){
var inst_22134 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
var statearr_22181_22205 = state_22163__$1;
(statearr_22181_22205[(2)] = inst_22134);

(statearr_22181_22205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (16))){
var state_22163__$1 = state_22163;
var statearr_22182_22206 = state_22163__$1;
(statearr_22182_22206[(2)] = null);

(statearr_22182_22206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (10))){
var inst_22155 = (state_22163[(2)]);
var state_22163__$1 = (function (){var statearr_22183 = state_22163;
(statearr_22183[(11)] = inst_22155);

return statearr_22183;
})();
var statearr_22184_22207 = state_22163__$1;
(statearr_22184_22207[(2)] = null);

(statearr_22184_22207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (8))){
var inst_22122 = (state_22163[(9)]);
var inst_22126 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22122,opts);
var state_22163__$1 = state_22163;
if(cljs.core.truth_(inst_22126)){
var statearr_22185_22208 = state_22163__$1;
(statearr_22185_22208[(1)] = (11));

} else {
var statearr_22186_22209 = state_22163__$1;
(statearr_22186_22209[(1)] = (12));

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
});})(c__17644__auto___22191,ch))
;
return ((function (switch__17554__auto__,c__17644__auto___22191,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__17555__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__17555__auto____0 = (function (){
var statearr_22187 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22187[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__17555__auto__);

(statearr_22187[(1)] = (1));

return statearr_22187;
});
var figwheel$client$file_reloader_plugin_$_state_machine__17555__auto____1 = (function (state_22163){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_22163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e22188){if((e22188 instanceof Object)){
var ex__17558__auto__ = e22188;
var statearr_22189_22210 = state_22163;
(statearr_22189_22210[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22211 = state_22163;
state_22163 = G__22211;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__17555__auto__ = function(state_22163){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__17555__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__17555__auto____1.call(this,state_22163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__17555__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__17555__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___22191,ch))
})();
var state__17646__auto__ = (function (){var statearr_22190 = f__17645__auto__.call(null);
(statearr_22190[(6)] = c__17644__auto___22191);

return statearr_22190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___22191,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22212_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22212_SHARP_));
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
var base_path_22214 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22214){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e22213){if((e22213 instanceof Error)){
var e = e22213;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22214], null));
} else {
var e = e22213;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_22214))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22215){
var map__22216 = p__22215;
var map__22216__$1 = ((((!((map__22216 == null)))?((((map__22216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22216):map__22216);
var opts = map__22216__$1;
var build_id = cljs.core.get.call(null,map__22216__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22216,map__22216__$1,opts,build_id){
return (function (p__22218){
var vec__22219 = p__22218;
var seq__22220 = cljs.core.seq.call(null,vec__22219);
var first__22221 = cljs.core.first.call(null,seq__22220);
var seq__22220__$1 = cljs.core.next.call(null,seq__22220);
var map__22222 = first__22221;
var map__22222__$1 = ((((!((map__22222 == null)))?((((map__22222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22222):map__22222);
var msg = map__22222__$1;
var msg_name = cljs.core.get.call(null,map__22222__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22220__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22219,seq__22220,first__22221,seq__22220__$1,map__22222,map__22222__$1,msg,msg_name,_,map__22216,map__22216__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22219,seq__22220,first__22221,seq__22220__$1,map__22222,map__22222__$1,msg,msg_name,_,map__22216,map__22216__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22216,map__22216__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22224){
var vec__22225 = p__22224;
var seq__22226 = cljs.core.seq.call(null,vec__22225);
var first__22227 = cljs.core.first.call(null,seq__22226);
var seq__22226__$1 = cljs.core.next.call(null,seq__22226);
var map__22228 = first__22227;
var map__22228__$1 = ((((!((map__22228 == null)))?((((map__22228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22228):map__22228);
var msg = map__22228__$1;
var msg_name = cljs.core.get.call(null,map__22228__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22226__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22230){
var map__22231 = p__22230;
var map__22231__$1 = ((((!((map__22231 == null)))?((((map__22231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22231):map__22231);
var on_compile_warning = cljs.core.get.call(null,map__22231__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22231__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22231,map__22231__$1,on_compile_warning,on_compile_fail){
return (function (p__22233){
var vec__22234 = p__22233;
var seq__22235 = cljs.core.seq.call(null,vec__22234);
var first__22236 = cljs.core.first.call(null,seq__22235);
var seq__22235__$1 = cljs.core.next.call(null,seq__22235);
var map__22237 = first__22236;
var map__22237__$1 = ((((!((map__22237 == null)))?((((map__22237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22237):map__22237);
var msg = map__22237__$1;
var msg_name = cljs.core.get.call(null,map__22237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22235__$1;
var pred__22239 = cljs.core._EQ_;
var expr__22240 = msg_name;
if(cljs.core.truth_(pred__22239.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22240))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22239.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22240))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22231,map__22231__$1,on_compile_warning,on_compile_fail))
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
var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__,msg_hist,msg_names,msg){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__,msg_hist,msg_names,msg){
return (function (state_22329){
var state_val_22330 = (state_22329[(1)]);
if((state_val_22330 === (7))){
var inst_22249 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
if(cljs.core.truth_(inst_22249)){
var statearr_22331_22378 = state_22329__$1;
(statearr_22331_22378[(1)] = (8));

} else {
var statearr_22332_22379 = state_22329__$1;
(statearr_22332_22379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (20))){
var inst_22323 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22333_22380 = state_22329__$1;
(statearr_22333_22380[(2)] = inst_22323);

(statearr_22333_22380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (27))){
var inst_22319 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22334_22381 = state_22329__$1;
(statearr_22334_22381[(2)] = inst_22319);

(statearr_22334_22381[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (1))){
var inst_22242 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22329__$1 = state_22329;
if(cljs.core.truth_(inst_22242)){
var statearr_22335_22382 = state_22329__$1;
(statearr_22335_22382[(1)] = (2));

} else {
var statearr_22336_22383 = state_22329__$1;
(statearr_22336_22383[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (24))){
var inst_22321 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22337_22384 = state_22329__$1;
(statearr_22337_22384[(2)] = inst_22321);

(statearr_22337_22384[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (4))){
var inst_22327 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22329__$1,inst_22327);
} else {
if((state_val_22330 === (15))){
var inst_22325 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22338_22385 = state_22329__$1;
(statearr_22338_22385[(2)] = inst_22325);

(statearr_22338_22385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (21))){
var inst_22278 = (state_22329[(2)]);
var inst_22279 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22280 = figwheel.client.auto_jump_to_error.call(null,opts,inst_22279);
var state_22329__$1 = (function (){var statearr_22339 = state_22329;
(statearr_22339[(7)] = inst_22278);

return statearr_22339;
})();
var statearr_22340_22386 = state_22329__$1;
(statearr_22340_22386[(2)] = inst_22280);

(statearr_22340_22386[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (31))){
var inst_22308 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22329__$1 = state_22329;
if(cljs.core.truth_(inst_22308)){
var statearr_22341_22387 = state_22329__$1;
(statearr_22341_22387[(1)] = (34));

} else {
var statearr_22342_22388 = state_22329__$1;
(statearr_22342_22388[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (32))){
var inst_22317 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22343_22389 = state_22329__$1;
(statearr_22343_22389[(2)] = inst_22317);

(statearr_22343_22389[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (33))){
var inst_22304 = (state_22329[(2)]);
var inst_22305 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22306 = figwheel.client.auto_jump_to_error.call(null,opts,inst_22305);
var state_22329__$1 = (function (){var statearr_22344 = state_22329;
(statearr_22344[(8)] = inst_22304);

return statearr_22344;
})();
var statearr_22345_22390 = state_22329__$1;
(statearr_22345_22390[(2)] = inst_22306);

(statearr_22345_22390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (13))){
var inst_22263 = figwheel.client.heads_up.clear.call(null);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(16),inst_22263);
} else {
if((state_val_22330 === (22))){
var inst_22284 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22285 = figwheel.client.heads_up.append_warning_message.call(null,inst_22284);
var state_22329__$1 = state_22329;
var statearr_22346_22391 = state_22329__$1;
(statearr_22346_22391[(2)] = inst_22285);

(statearr_22346_22391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (36))){
var inst_22315 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22347_22392 = state_22329__$1;
(statearr_22347_22392[(2)] = inst_22315);

(statearr_22347_22392[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (29))){
var inst_22295 = (state_22329[(2)]);
var inst_22296 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22297 = figwheel.client.auto_jump_to_error.call(null,opts,inst_22296);
var state_22329__$1 = (function (){var statearr_22348 = state_22329;
(statearr_22348[(9)] = inst_22295);

return statearr_22348;
})();
var statearr_22349_22393 = state_22329__$1;
(statearr_22349_22393[(2)] = inst_22297);

(statearr_22349_22393[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (6))){
var inst_22244 = (state_22329[(10)]);
var state_22329__$1 = state_22329;
var statearr_22350_22394 = state_22329__$1;
(statearr_22350_22394[(2)] = inst_22244);

(statearr_22350_22394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (28))){
var inst_22291 = (state_22329[(2)]);
var inst_22292 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22293 = figwheel.client.heads_up.display_warning.call(null,inst_22292);
var state_22329__$1 = (function (){var statearr_22351 = state_22329;
(statearr_22351[(11)] = inst_22291);

return statearr_22351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(29),inst_22293);
} else {
if((state_val_22330 === (25))){
var inst_22289 = figwheel.client.heads_up.clear.call(null);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(28),inst_22289);
} else {
if((state_val_22330 === (34))){
var inst_22310 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(37),inst_22310);
} else {
if((state_val_22330 === (17))){
var inst_22269 = (state_22329[(2)]);
var inst_22270 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22271 = figwheel.client.auto_jump_to_error.call(null,opts,inst_22270);
var state_22329__$1 = (function (){var statearr_22352 = state_22329;
(statearr_22352[(12)] = inst_22269);

return statearr_22352;
})();
var statearr_22353_22395 = state_22329__$1;
(statearr_22353_22395[(2)] = inst_22271);

(statearr_22353_22395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (3))){
var inst_22261 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22329__$1 = state_22329;
if(cljs.core.truth_(inst_22261)){
var statearr_22354_22396 = state_22329__$1;
(statearr_22354_22396[(1)] = (13));

} else {
var statearr_22355_22397 = state_22329__$1;
(statearr_22355_22397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (12))){
var inst_22257 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22356_22398 = state_22329__$1;
(statearr_22356_22398[(2)] = inst_22257);

(statearr_22356_22398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (2))){
var inst_22244 = (state_22329[(10)]);
var inst_22244__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22329__$1 = (function (){var statearr_22357 = state_22329;
(statearr_22357[(10)] = inst_22244__$1);

return statearr_22357;
})();
if(cljs.core.truth_(inst_22244__$1)){
var statearr_22358_22399 = state_22329__$1;
(statearr_22358_22399[(1)] = (5));

} else {
var statearr_22359_22400 = state_22329__$1;
(statearr_22359_22400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (23))){
var inst_22287 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22329__$1 = state_22329;
if(cljs.core.truth_(inst_22287)){
var statearr_22360_22401 = state_22329__$1;
(statearr_22360_22401[(1)] = (25));

} else {
var statearr_22361_22402 = state_22329__$1;
(statearr_22361_22402[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (35))){
var state_22329__$1 = state_22329;
var statearr_22362_22403 = state_22329__$1;
(statearr_22362_22403[(2)] = null);

(statearr_22362_22403[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (19))){
var inst_22282 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22329__$1 = state_22329;
if(cljs.core.truth_(inst_22282)){
var statearr_22363_22404 = state_22329__$1;
(statearr_22363_22404[(1)] = (22));

} else {
var statearr_22364_22405 = state_22329__$1;
(statearr_22364_22405[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (11))){
var inst_22253 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22365_22406 = state_22329__$1;
(statearr_22365_22406[(2)] = inst_22253);

(statearr_22365_22406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (9))){
var inst_22255 = figwheel.client.heads_up.clear.call(null);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(12),inst_22255);
} else {
if((state_val_22330 === (5))){
var inst_22246 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22329__$1 = state_22329;
var statearr_22366_22407 = state_22329__$1;
(statearr_22366_22407[(2)] = inst_22246);

(statearr_22366_22407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (14))){
var inst_22273 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22329__$1 = state_22329;
if(cljs.core.truth_(inst_22273)){
var statearr_22367_22408 = state_22329__$1;
(statearr_22367_22408[(1)] = (18));

} else {
var statearr_22368_22409 = state_22329__$1;
(statearr_22368_22409[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (26))){
var inst_22299 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22329__$1 = state_22329;
if(cljs.core.truth_(inst_22299)){
var statearr_22369_22410 = state_22329__$1;
(statearr_22369_22410[(1)] = (30));

} else {
var statearr_22370_22411 = state_22329__$1;
(statearr_22370_22411[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (16))){
var inst_22265 = (state_22329[(2)]);
var inst_22266 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22267 = figwheel.client.heads_up.display_exception.call(null,inst_22266);
var state_22329__$1 = (function (){var statearr_22371 = state_22329;
(statearr_22371[(13)] = inst_22265);

return statearr_22371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(17),inst_22267);
} else {
if((state_val_22330 === (30))){
var inst_22301 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22302 = figwheel.client.heads_up.display_warning.call(null,inst_22301);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(33),inst_22302);
} else {
if((state_val_22330 === (10))){
var inst_22259 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22372_22412 = state_22329__$1;
(statearr_22372_22412[(2)] = inst_22259);

(statearr_22372_22412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (18))){
var inst_22275 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22276 = figwheel.client.heads_up.display_exception.call(null,inst_22275);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(21),inst_22276);
} else {
if((state_val_22330 === (37))){
var inst_22312 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22373_22413 = state_22329__$1;
(statearr_22373_22413[(2)] = inst_22312);

(statearr_22373_22413[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (8))){
var inst_22251 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(11),inst_22251);
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
});})(c__17644__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__17554__auto__,c__17644__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto____0 = (function (){
var statearr_22374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22374[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto__);

(statearr_22374[(1)] = (1));

return statearr_22374;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto____1 = (function (state_22329){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_22329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e22375){if((e22375 instanceof Object)){
var ex__17558__auto__ = e22375;
var statearr_22376_22414 = state_22329;
(statearr_22376_22414[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22415 = state_22329;
state_22329 = G__22415;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto__ = function(state_22329){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto____1.call(this,state_22329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__,msg_hist,msg_names,msg))
})();
var state__17646__auto__ = (function (){var statearr_22377 = f__17645__auto__.call(null);
(statearr_22377[(6)] = c__17644__auto__);

return statearr_22377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__,msg_hist,msg_names,msg))
);

return c__17644__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__17644__auto___22444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___22444,ch){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___22444,ch){
return (function (state_22430){
var state_val_22431 = (state_22430[(1)]);
if((state_val_22431 === (1))){
var state_22430__$1 = state_22430;
var statearr_22432_22445 = state_22430__$1;
(statearr_22432_22445[(2)] = null);

(statearr_22432_22445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (2))){
var state_22430__$1 = state_22430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22430__$1,(4),ch);
} else {
if((state_val_22431 === (3))){
var inst_22428 = (state_22430[(2)]);
var state_22430__$1 = state_22430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22430__$1,inst_22428);
} else {
if((state_val_22431 === (4))){
var inst_22418 = (state_22430[(7)]);
var inst_22418__$1 = (state_22430[(2)]);
var state_22430__$1 = (function (){var statearr_22433 = state_22430;
(statearr_22433[(7)] = inst_22418__$1);

return statearr_22433;
})();
if(cljs.core.truth_(inst_22418__$1)){
var statearr_22434_22446 = state_22430__$1;
(statearr_22434_22446[(1)] = (5));

} else {
var statearr_22435_22447 = state_22430__$1;
(statearr_22435_22447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (5))){
var inst_22418 = (state_22430[(7)]);
var inst_22420 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22418);
var state_22430__$1 = state_22430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22430__$1,(8),inst_22420);
} else {
if((state_val_22431 === (6))){
var state_22430__$1 = state_22430;
var statearr_22436_22448 = state_22430__$1;
(statearr_22436_22448[(2)] = null);

(statearr_22436_22448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (7))){
var inst_22426 = (state_22430[(2)]);
var state_22430__$1 = state_22430;
var statearr_22437_22449 = state_22430__$1;
(statearr_22437_22449[(2)] = inst_22426);

(statearr_22437_22449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22431 === (8))){
var inst_22422 = (state_22430[(2)]);
var state_22430__$1 = (function (){var statearr_22438 = state_22430;
(statearr_22438[(8)] = inst_22422);

return statearr_22438;
})();
var statearr_22439_22450 = state_22430__$1;
(statearr_22439_22450[(2)] = null);

(statearr_22439_22450[(1)] = (2));


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
});})(c__17644__auto___22444,ch))
;
return ((function (switch__17554__auto__,c__17644__auto___22444,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__17555__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__17555__auto____0 = (function (){
var statearr_22440 = [null,null,null,null,null,null,null,null,null];
(statearr_22440[(0)] = figwheel$client$heads_up_plugin_$_state_machine__17555__auto__);

(statearr_22440[(1)] = (1));

return statearr_22440;
});
var figwheel$client$heads_up_plugin_$_state_machine__17555__auto____1 = (function (state_22430){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_22430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e22441){if((e22441 instanceof Object)){
var ex__17558__auto__ = e22441;
var statearr_22442_22451 = state_22430;
(statearr_22442_22451[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22452 = state_22430;
state_22430 = G__22452;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__17555__auto__ = function(state_22430){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__17555__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__17555__auto____1.call(this,state_22430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__17555__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__17555__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___22444,ch))
})();
var state__17646__auto__ = (function (){var statearr_22443 = f__17645__auto__.call(null);
(statearr_22443[(6)] = c__17644__auto___22444);

return statearr_22443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___22444,ch))
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
var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__){
return (function (state_22458){
var state_val_22459 = (state_22458[(1)]);
if((state_val_22459 === (1))){
var inst_22453 = cljs.core.async.timeout.call(null,(3000));
var state_22458__$1 = state_22458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22458__$1,(2),inst_22453);
} else {
if((state_val_22459 === (2))){
var inst_22455 = (state_22458[(2)]);
var inst_22456 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22458__$1 = (function (){var statearr_22460 = state_22458;
(statearr_22460[(7)] = inst_22455);

return statearr_22460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22458__$1,inst_22456);
} else {
return null;
}
}
});})(c__17644__auto__))
;
return ((function (switch__17554__auto__,c__17644__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__17555__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__17555__auto____0 = (function (){
var statearr_22461 = [null,null,null,null,null,null,null,null];
(statearr_22461[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__17555__auto__);

(statearr_22461[(1)] = (1));

return statearr_22461;
});
var figwheel$client$enforce_project_plugin_$_state_machine__17555__auto____1 = (function (state_22458){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_22458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e22462){if((e22462 instanceof Object)){
var ex__17558__auto__ = e22462;
var statearr_22463_22465 = state_22458;
(statearr_22463_22465[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22466 = state_22458;
state_22458 = G__22466;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__17555__auto__ = function(state_22458){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__17555__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__17555__auto____1.call(this,state_22458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__17555__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__17555__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__))
})();
var state__17646__auto__ = (function (){var statearr_22464 = f__17645__auto__.call(null);
(statearr_22464[(6)] = c__17644__auto__);

return statearr_22464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__))
);

return c__17644__auto__;
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
var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__,figwheel_version,temp__6738__auto__){
return (function (state_22473){
var state_val_22474 = (state_22473[(1)]);
if((state_val_22474 === (1))){
var inst_22467 = cljs.core.async.timeout.call(null,(2000));
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22473__$1,(2),inst_22467);
} else {
if((state_val_22474 === (2))){
var inst_22469 = (state_22473[(2)]);
var inst_22470 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_22471 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_22470);
var state_22473__$1 = (function (){var statearr_22475 = state_22473;
(statearr_22475[(7)] = inst_22469);

return statearr_22475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22473__$1,inst_22471);
} else {
return null;
}
}
});})(c__17644__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__17554__auto__,c__17644__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto____0 = (function (){
var statearr_22476 = [null,null,null,null,null,null,null,null];
(statearr_22476[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto__);

(statearr_22476[(1)] = (1));

return statearr_22476;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto____1 = (function (state_22473){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_22473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e22477){if((e22477 instanceof Object)){
var ex__17558__auto__ = e22477;
var statearr_22478_22480 = state_22473;
(statearr_22478_22480[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22481 = state_22473;
state_22473 = G__22481;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto__ = function(state_22473){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto____1.call(this,state_22473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__,figwheel_version,temp__6738__auto__))
})();
var state__17646__auto__ = (function (){var statearr_22479 = f__17645__auto__.call(null);
(statearr_22479[(6)] = c__17644__auto__);

return statearr_22479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__,figwheel_version,temp__6738__auto__))
);

return c__17644__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__22482){
var map__22483 = p__22482;
var map__22483__$1 = ((((!((map__22483 == null)))?((((map__22483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22483):map__22483);
var file = cljs.core.get.call(null,map__22483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22483__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22483__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__22485 = "";
var G__22485__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22485),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__22485);
var G__22485__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22485__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__22485__$1);
if(cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22485__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__22485__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22486){
var map__22487 = p__22486;
var map__22487__$1 = ((((!((map__22487 == null)))?((((map__22487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22487):map__22487);
var ed = map__22487__$1;
var formatted_exception = cljs.core.get.call(null,map__22487__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22487__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22487__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22489_22493 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22490_22494 = null;
var count__22491_22495 = (0);
var i__22492_22496 = (0);
while(true){
if((i__22492_22496 < count__22491_22495)){
var msg_22497 = cljs.core._nth.call(null,chunk__22490_22494,i__22492_22496);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22497);

var G__22498 = seq__22489_22493;
var G__22499 = chunk__22490_22494;
var G__22500 = count__22491_22495;
var G__22501 = (i__22492_22496 + (1));
seq__22489_22493 = G__22498;
chunk__22490_22494 = G__22499;
count__22491_22495 = G__22500;
i__22492_22496 = G__22501;
continue;
} else {
var temp__6738__auto___22502 = cljs.core.seq.call(null,seq__22489_22493);
if(temp__6738__auto___22502){
var seq__22489_22503__$1 = temp__6738__auto___22502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22489_22503__$1)){
var c__10741__auto___22504 = cljs.core.chunk_first.call(null,seq__22489_22503__$1);
var G__22505 = cljs.core.chunk_rest.call(null,seq__22489_22503__$1);
var G__22506 = c__10741__auto___22504;
var G__22507 = cljs.core.count.call(null,c__10741__auto___22504);
var G__22508 = (0);
seq__22489_22493 = G__22505;
chunk__22490_22494 = G__22506;
count__22491_22495 = G__22507;
i__22492_22496 = G__22508;
continue;
} else {
var msg_22509 = cljs.core.first.call(null,seq__22489_22503__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22509);

var G__22510 = cljs.core.next.call(null,seq__22489_22503__$1);
var G__22511 = null;
var G__22512 = (0);
var G__22513 = (0);
seq__22489_22493 = G__22510;
chunk__22490_22494 = G__22511;
count__22491_22495 = G__22512;
i__22492_22496 = G__22513;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22514){
var map__22515 = p__22514;
var map__22515__$1 = ((((!((map__22515 == null)))?((((map__22515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22515):map__22515);
var w = map__22515__$1;
var message = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__22517 = cljs.core.seq.call(null,plugins);
var chunk__22518 = null;
var count__22519 = (0);
var i__22520 = (0);
while(true){
if((i__22520 < count__22519)){
var vec__22521 = cljs.core._nth.call(null,chunk__22518,i__22520);
var k = cljs.core.nth.call(null,vec__22521,(0),null);
var plugin = cljs.core.nth.call(null,vec__22521,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22527 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22517,chunk__22518,count__22519,i__22520,pl_22527,vec__22521,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22527.call(null,msg_hist);
});})(seq__22517,chunk__22518,count__22519,i__22520,pl_22527,vec__22521,k,plugin))
);
} else {
}

var G__22528 = seq__22517;
var G__22529 = chunk__22518;
var G__22530 = count__22519;
var G__22531 = (i__22520 + (1));
seq__22517 = G__22528;
chunk__22518 = G__22529;
count__22519 = G__22530;
i__22520 = G__22531;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22517);
if(temp__6738__auto__){
var seq__22517__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22517__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__22517__$1);
var G__22532 = cljs.core.chunk_rest.call(null,seq__22517__$1);
var G__22533 = c__10741__auto__;
var G__22534 = cljs.core.count.call(null,c__10741__auto__);
var G__22535 = (0);
seq__22517 = G__22532;
chunk__22518 = G__22533;
count__22519 = G__22534;
i__22520 = G__22535;
continue;
} else {
var vec__22524 = cljs.core.first.call(null,seq__22517__$1);
var k = cljs.core.nth.call(null,vec__22524,(0),null);
var plugin = cljs.core.nth.call(null,vec__22524,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22536 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22517,chunk__22518,count__22519,i__22520,pl_22536,vec__22524,k,plugin,seq__22517__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22536.call(null,msg_hist);
});})(seq__22517,chunk__22518,count__22519,i__22520,pl_22536,vec__22524,k,plugin,seq__22517__$1,temp__6738__auto__))
);
} else {
}

var G__22537 = cljs.core.next.call(null,seq__22517__$1);
var G__22538 = null;
var G__22539 = (0);
var G__22540 = (0);
seq__22517 = G__22537;
chunk__22518 = G__22538;
count__22519 = G__22539;
i__22520 = G__22540;
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
var G__22542 = arguments.length;
switch (G__22542) {
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

var seq__22543_22548 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__22544_22549 = null;
var count__22545_22550 = (0);
var i__22546_22551 = (0);
while(true){
if((i__22546_22551 < count__22545_22550)){
var msg_22552 = cljs.core._nth.call(null,chunk__22544_22549,i__22546_22551);
figwheel.client.socket.handle_incoming_message.call(null,msg_22552);

var G__22553 = seq__22543_22548;
var G__22554 = chunk__22544_22549;
var G__22555 = count__22545_22550;
var G__22556 = (i__22546_22551 + (1));
seq__22543_22548 = G__22553;
chunk__22544_22549 = G__22554;
count__22545_22550 = G__22555;
i__22546_22551 = G__22556;
continue;
} else {
var temp__6738__auto___22557 = cljs.core.seq.call(null,seq__22543_22548);
if(temp__6738__auto___22557){
var seq__22543_22558__$1 = temp__6738__auto___22557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22543_22558__$1)){
var c__10741__auto___22559 = cljs.core.chunk_first.call(null,seq__22543_22558__$1);
var G__22560 = cljs.core.chunk_rest.call(null,seq__22543_22558__$1);
var G__22561 = c__10741__auto___22559;
var G__22562 = cljs.core.count.call(null,c__10741__auto___22559);
var G__22563 = (0);
seq__22543_22548 = G__22560;
chunk__22544_22549 = G__22561;
count__22545_22550 = G__22562;
i__22546_22551 = G__22563;
continue;
} else {
var msg_22564 = cljs.core.first.call(null,seq__22543_22558__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_22564);

var G__22565 = cljs.core.next.call(null,seq__22543_22558__$1);
var G__22566 = null;
var G__22567 = (0);
var G__22568 = (0);
seq__22543_22548 = G__22565;
chunk__22544_22549 = G__22566;
count__22545_22550 = G__22567;
i__22546_22551 = G__22568;
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
var len__11087__auto___22573 = arguments.length;
var i__11088__auto___22574 = (0);
while(true){
if((i__11088__auto___22574 < len__11087__auto___22573)){
args__11094__auto__.push((arguments[i__11088__auto___22574]));

var G__22575 = (i__11088__auto___22574 + (1));
i__11088__auto___22574 = G__22575;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22570){
var map__22571 = p__22570;
var map__22571__$1 = ((((!((map__22571 == null)))?((((map__22571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22571):map__22571);
var opts = map__22571__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22569){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22569));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e22576){if((e22576 instanceof Error)){
var e = e22576;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e22576;

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
return (function (p__22577){
var map__22578 = p__22577;
var map__22578__$1 = ((((!((map__22578 == null)))?((((map__22578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22578):map__22578);
var msg_name = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504285963605
