// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__59181__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__59182__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__59183__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__59184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__59185__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__,hierarchy__59185__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__,hierarchy__59185__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__59185__auto__,method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__58128__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__120734 = cljs.core.reduce.call(null,((function (xs){
return (function (p__120740,p__120741){
var vec__120742 = p__120740;
var pre = cljs.core.nth.call(null,vec__120742,(0),null);
var post = cljs.core.nth.call(null,vec__120742,(1),null);
var vec__120745 = p__120741;
var x = cljs.core.nth.call(null,vec__120745,(0),null);
var i = cljs.core.nth.call(null,vec__120745,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__120734,(0),null);
var vec__120737 = cljs.core.nth.call(null,vec__120734,(1),null);
var line = cljs.core.nth.call(null,vec__120737,(0),null);
var column = cljs.core.nth.call(null,vec__120737,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__120748 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__120748,"(","");
} else {
return G__120748;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__120749 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__120749,")","");
} else {
return G__120749;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__120750 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__120750,")","");
} else {
return G__120750;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__120751,file,p__120752){
var map__120753 = p__120751;
var map__120753__$1 = ((((!((map__120753 == null)))?((((map__120753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120753):map__120753);
var repl_env = map__120753__$1;
var host = cljs.core.get.call(null,map__120753__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__120753__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__120753__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__120754 = p__120752;
var map__120754__$1 = ((((!((map__120754 == null)))?((((map__120754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120754):map__120754);
var opts = map__120754__$1;
var asset_path = cljs.core.get.call(null,map__120754__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__58128__auto__ = host_port;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__58128__auto__ = (function (){var and__58116__auto__ = asset_path;
if(cljs.core.truth_(and__58116__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__58116__auto__;
}
})();
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),"/"].join('')),"");
} else {
var temp__6736__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__6736__auto__)){
var asset_root = temp__6736__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__120757 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__120757,(0),null);
var flc = cljs.core.nth.call(null,vec__120757,(1),null);
var vec__120760 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__120760,(0),null);
var line = cljs.core.nth.call(null,vec__120760,(1),null);
var column = cljs.core.nth.call(null,vec__120760,(2),null);
if(cljs.core.truth_((function (){var and__58116__auto__ = file;
if(cljs.core.truth_(and__58116__auto__)){
var and__58116__auto____$1 = function$;
if(cljs.core.truth_(and__58116__auto____$1)){
var and__58116__auto____$2 = line;
if(cljs.core.truth_(and__58116__auto____$2)){
return column;
} else {
return and__58116__auto____$2;
}
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__120765_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__120765_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__120764_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__120764_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__120763_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__120763_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__120766 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__120766,(0),null);
var flc = cljs.core.nth.call(null,vec__120766,(1),null);
var vec__120769 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__120769,(0),null);
var line = cljs.core.nth.call(null,vec__120769,(1),null);
var column = cljs.core.nth.call(null,vec__120769,(2),null);
if(cljs.core.truth_((function (){var and__58116__auto__ = file;
if(cljs.core.truth_(and__58116__auto__)){
var and__58116__auto____$1 = function$;
if(cljs.core.truth_(and__58116__auto____$1)){
var and__58116__auto____$2 = line;
if(cljs.core.truth_(and__58116__auto____$2)){
return column;
} else {
return and__58116__auto____$2;
}
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__120774_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__120774_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__120773_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__120773_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__120772_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__120772_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__120775 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__120775,(0),null);
var flc = cljs.core.nth.call(null,vec__120775,(1),null);
var vec__120778 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__120778,(0),null);
var line = cljs.core.nth.call(null,vec__120778,(1),null);
var column = cljs.core.nth.call(null,vec__120778,(2),null);
if(cljs.core.truth_((function (){var and__58116__auto__ = file;
if(cljs.core.truth_(and__58116__auto__)){
var and__58116__auto____$1 = function$;
if(cljs.core.truth_(and__58116__auto____$1)){
var and__58116__auto____$2 = line;
if(cljs.core.truth_(and__58116__auto____$2)){
return column;
} else {
return and__58116__auto____$2;
}
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__120783_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__120783_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__120782_SHARP_){
return cljs.core._EQ_.call(null,p1__120782_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__120781_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__120781_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__120784){
var map__120785 = p__120784;
var map__120785__$1 = ((((!((map__120785 == null)))?((((map__120785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120785):map__120785);
var opts = map__120785__$1;
var output_dir = cljs.core.get.call(null,map__120785__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__120785,map__120785__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__120793 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__120793,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__120793,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__120796 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__120796,(0),null);
var function$ = cljs.core.nth.call(null,vec__120796,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__58116__auto__ = line;
if(cljs.core.truth_(and__58116__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__58116__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__120785,map__120785__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__120799){
var map__120800 = p__120799;
var map__120800__$1 = ((((!((map__120800 == null)))?((((map__120800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120800):map__120800);
var opts = map__120800__$1;
var output_dir = cljs.core.get.call(null,map__120800__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__120800,map__120800__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__120808 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__120808,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__120808,(1),null);
var vec__120811 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__120811,(0),null);
var line_part = cljs.core.nth.call(null,vec__120811,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__58116__auto__ = line_part;
if(cljs.core.truth_(and__58116__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__58116__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__120800,map__120800__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__120814){
var map__120815 = p__120814;
var map__120815__$1 = ((((!((map__120815 == null)))?((((map__120815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120815):map__120815);
var opts = map__120815__$1;
var output_dir = cljs.core.get.call(null,map__120815__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__120815,map__120815__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__58116__auto__ = x;
if(cljs.core.truth_(and__58116__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__58116__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});})(map__120815,map__120815__$1,opts,output_dir))
;
var process_frame = ((function (map__120815,map__120815__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__120824 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__120824,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__120824,(1),null);
var vec__120827 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__120827,(0),null);
var line_part = cljs.core.nth.call(null,vec__120827,(1),null);
var col_part = cljs.core.nth.call(null,vec__120827,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__120830 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__120830,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__120830;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});})(map__120815,map__120815__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__58128__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__120831_SHARP_){
return (p1__120831_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__120832_SHARP_,p2__120833_SHARP_){
return p1__120832_SHARP_.call(null,p2__120833_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__6736__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__6736__auto__)){
var columns = temp__6736__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__120834,sms,opts){
var map__120835 = p__120834;
var map__120835__$1 = ((((!((map__120835 == null)))?((((map__120835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120835):map__120835);
var function$ = cljs.core.get.call(null,map__120835__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__120835__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__120835__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__120835__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__120837 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__120837,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__120837,(1),null);
var call = cljs.core.nth.call(null,vec__120837,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?["NO_SOURCE_FILE",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__120843 = arguments.length;
switch (G__120843) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__120840_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__120840_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__120841_SHARP_){
return cljs.core.dissoc.call(null,p1__120841_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__120846 = arguments.length;
switch (G__120846) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__59253__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_120847_120858 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_120848_120859 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_120847_120858,_STAR_print_fn_STAR_120848_120859,sb__59253__auto__){
return (function (x__59254__auto__){
return sb__59253__auto__.append(x__59254__auto__);
});})(_STAR_print_newline_STAR_120847_120858,_STAR_print_fn_STAR_120848_120859,sb__59253__auto__))
;

try{var seq__120849_120860 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__120850_120861 = null;
var count__120851_120862 = (0);
var i__120852_120863 = (0);
while(true){
if((i__120852_120863 < count__120851_120862)){
var map__120853_120864 = cljs.core._nth.call(null,chunk__120850_120861,i__120852_120863);
var map__120853_120865__$1 = ((((!((map__120853_120864 == null)))?((((map__120853_120864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120853_120864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120853_120864):map__120853_120864);
var function_120866 = cljs.core.get.call(null,map__120853_120865__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_120867 = cljs.core.get.call(null,map__120853_120865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_120868 = cljs.core.get.call(null,map__120853_120865__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_120869 = cljs.core.get.call(null,map__120853_120865__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_120866)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_120866)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_120867),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_120868)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_120868)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_120869)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_120869)].join(''):null)),")"].join(''));

var G__120870 = seq__120849_120860;
var G__120871 = chunk__120850_120861;
var G__120872 = count__120851_120862;
var G__120873 = (i__120852_120863 + (1));
seq__120849_120860 = G__120870;
chunk__120850_120861 = G__120871;
count__120851_120862 = G__120872;
i__120852_120863 = G__120873;
continue;
} else {
var temp__6738__auto___120874 = cljs.core.seq.call(null,seq__120849_120860);
if(temp__6738__auto___120874){
var seq__120849_120875__$1 = temp__6738__auto___120874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120849_120875__$1)){
var c__59059__auto___120876 = cljs.core.chunk_first.call(null,seq__120849_120875__$1);
var G__120877 = cljs.core.chunk_rest.call(null,seq__120849_120875__$1);
var G__120878 = c__59059__auto___120876;
var G__120879 = cljs.core.count.call(null,c__59059__auto___120876);
var G__120880 = (0);
seq__120849_120860 = G__120877;
chunk__120850_120861 = G__120878;
count__120851_120862 = G__120879;
i__120852_120863 = G__120880;
continue;
} else {
var map__120855_120881 = cljs.core.first.call(null,seq__120849_120875__$1);
var map__120855_120882__$1 = ((((!((map__120855_120881 == null)))?((((map__120855_120881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120855_120881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120855_120881):map__120855_120881);
var function_120883 = cljs.core.get.call(null,map__120855_120882__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_120884 = cljs.core.get.call(null,map__120855_120882__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_120885 = cljs.core.get.call(null,map__120855_120882__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_120886 = cljs.core.get.call(null,map__120855_120882__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_120883)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_120883)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_120884),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_120885)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_120885)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_120886)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_120886)].join(''):null)),")"].join(''));

var G__120887 = cljs.core.next.call(null,seq__120849_120875__$1);
var G__120888 = null;
var G__120889 = (0);
var G__120890 = (0);
seq__120849_120860 = G__120887;
chunk__120850_120861 = G__120888;
count__120851_120862 = G__120889;
i__120852_120863 = G__120890;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_120848_120859;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_120847_120858;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__59253__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=stacktrace.js.map?rel=1505927837171
