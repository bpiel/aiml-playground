// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119302 = arguments.length;
var i__59406__auto___119303 = (0);
while(true){
if((i__59406__auto___119303 < len__59405__auto___119302)){
args__59412__auto__.push((arguments[i__59406__auto___119303]));

var G__119304 = (i__59406__auto___119303 + (1));
i__59406__auto___119303 = G__119304;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq119301){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119301));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119306 = arguments.length;
var i__59406__auto___119307 = (0);
while(true){
if((i__59406__auto___119307 < len__59405__auto___119306)){
args__59412__auto__.push((arguments[i__59406__auto___119307]));

var G__119308 = (i__59406__auto___119307 + (1));
i__59406__auto___119307 = G__119308;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq119305){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119305));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__119309 = cljs.core._EQ_;
var expr__119310 = c;
if(cljs.core.truth_(pred__119309.call(null,"\b",expr__119310))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__119309.call(null,"\t",expr__119310))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__119309.call(null,"\n",expr__119310))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__119309.call(null,"\f",expr__119310))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__119309.call(null,"\r",expr__119310))){
return "\\return";
} else {
if(cljs.core.truth_(pred__119309.call(null,"\"",expr__119310))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__119309.call(null,"\\",expr__119310))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119313 = arguments.length;
var i__59406__auto___119314 = (0);
while(true){
if((i__59406__auto___119314 < len__59405__auto___119313)){
args__59412__auto__.push((arguments[i__59406__auto___119314]));

var G__119315 = (i__59406__auto___119314 + (1));
i__59406__auto___119314 = G__119315;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq119312){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119312));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119317 = arguments.length;
var i__59406__auto___119318 = (0);
while(true){
if((i__59406__auto___119318 < len__59405__auto___119317)){
args__59412__auto__.push((arguments[i__59406__auto___119318]));

var G__119319 = (i__59406__auto___119318 + (1));
i__59406__auto___119318 = G__119319;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq119316){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119316));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__119320 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__119320,(0),null);
var new_context = cljs.core.nth.call(null,vec__119320,(1),null);
var G__119323 = new_context;
var G__119324 = remainder;
var G__119325 = cljs.core.conj.call(null,acc,result);
context = G__119323;
lis__$1 = G__119324;
acc = G__119325;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__119326 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__119326,(0),null);
var new_context = cljs.core.nth.call(null,vec__119326,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__119329 = new_context;
var G__119330 = cljs.core.conj.call(null,acc,result);
context = G__119329;
acc = G__119330;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__119331 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__119331,(0),null);
var continue$ = cljs.core.nth.call(null,vec__119331,(1),null);
var new_context = cljs.core.nth.call(null,vec__119331,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__119334 = new_context;
var G__119335 = cljs.core.conj.call(null,acc,result);
context = G__119334;
acc = G__119335;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__59010__auto__ = (function cljs$pprint$unzip_map_$_iter__119336(s__119337){
return (new cljs.core.LazySeq(null,(function (){
var s__119337__$1 = s__119337;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__119337__$1);
if(temp__6738__auto__){
var s__119337__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__119337__$2)){
var c__59008__auto__ = cljs.core.chunk_first.call(null,s__119337__$2);
var size__59009__auto__ = cljs.core.count.call(null,c__59008__auto__);
var b__119339 = cljs.core.chunk_buffer.call(null,size__59009__auto__);
if((function (){var i__119338 = (0);
while(true){
if((i__119338 < size__59009__auto__)){
var vec__119340 = cljs.core._nth.call(null,c__59008__auto__,i__119338);
var k = cljs.core.nth.call(null,vec__119340,(0),null);
var vec__119343 = cljs.core.nth.call(null,vec__119340,(1),null);
var v1 = cljs.core.nth.call(null,vec__119343,(0),null);
var v2 = cljs.core.nth.call(null,vec__119343,(1),null);
cljs.core.chunk_append.call(null,b__119339,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__119368 = (i__119338 + (1));
i__119338 = G__119368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__119339),cljs$pprint$unzip_map_$_iter__119336.call(null,cljs.core.chunk_rest.call(null,s__119337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__119339),null);
}
} else {
var vec__119346 = cljs.core.first.call(null,s__119337__$2);
var k = cljs.core.nth.call(null,vec__119346,(0),null);
var vec__119349 = cljs.core.nth.call(null,vec__119346,(1),null);
var v1 = cljs.core.nth.call(null,vec__119349,(0),null);
var v2 = cljs.core.nth.call(null,vec__119349,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__119336.call(null,cljs.core.rest.call(null,s__119337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__59010__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__59010__auto__ = (function cljs$pprint$unzip_map_$_iter__119352(s__119353){
return (new cljs.core.LazySeq(null,(function (){
var s__119353__$1 = s__119353;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__119353__$1);
if(temp__6738__auto__){
var s__119353__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__119353__$2)){
var c__59008__auto__ = cljs.core.chunk_first.call(null,s__119353__$2);
var size__59009__auto__ = cljs.core.count.call(null,c__59008__auto__);
var b__119355 = cljs.core.chunk_buffer.call(null,size__59009__auto__);
if((function (){var i__119354 = (0);
while(true){
if((i__119354 < size__59009__auto__)){
var vec__119356 = cljs.core._nth.call(null,c__59008__auto__,i__119354);
var k = cljs.core.nth.call(null,vec__119356,(0),null);
var vec__119359 = cljs.core.nth.call(null,vec__119356,(1),null);
var v1 = cljs.core.nth.call(null,vec__119359,(0),null);
var v2 = cljs.core.nth.call(null,vec__119359,(1),null);
cljs.core.chunk_append.call(null,b__119355,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__119369 = (i__119354 + (1));
i__119354 = G__119369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__119355),cljs$pprint$unzip_map_$_iter__119352.call(null,cljs.core.chunk_rest.call(null,s__119353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__119355),null);
}
} else {
var vec__119362 = cljs.core.first.call(null,s__119353__$2);
var k = cljs.core.nth.call(null,vec__119362,(0),null);
var vec__119365 = cljs.core.nth.call(null,vec__119362,(1),null);
var v1 = cljs.core.nth.call(null,vec__119365,(0),null);
var v2 = cljs.core.nth.call(null,vec__119365,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__119352.call(null,cljs.core.rest.call(null,s__119353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__59010__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__59010__auto__ = (function cljs$pprint$tuple_map_$_iter__119370(s__119371){
return (new cljs.core.LazySeq(null,(function (){
var s__119371__$1 = s__119371;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__119371__$1);
if(temp__6738__auto__){
var s__119371__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__119371__$2)){
var c__59008__auto__ = cljs.core.chunk_first.call(null,s__119371__$2);
var size__59009__auto__ = cljs.core.count.call(null,c__59008__auto__);
var b__119373 = cljs.core.chunk_buffer.call(null,size__59009__auto__);
if((function (){var i__119372 = (0);
while(true){
if((i__119372 < size__59009__auto__)){
var vec__119374 = cljs.core._nth.call(null,c__59008__auto__,i__119372);
var k = cljs.core.nth.call(null,vec__119374,(0),null);
var v = cljs.core.nth.call(null,vec__119374,(1),null);
cljs.core.chunk_append.call(null,b__119373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__119380 = (i__119372 + (1));
i__119372 = G__119380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__119373),cljs$pprint$tuple_map_$_iter__119370.call(null,cljs.core.chunk_rest.call(null,s__119371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__119373),null);
}
} else {
var vec__119377 = cljs.core.first.call(null,s__119371__$2);
var k = cljs.core.nth.call(null,vec__119377,(0),null);
var v = cljs.core.nth.call(null,vec__119377,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__119370.call(null,cljs.core.rest.call(null,s__119371__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__59010__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__119381 = (n - (1));
n = G__119381;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,n);
} else {
var G__119382 = (n + (1));
n = G__119382;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos))))){
return pos;
} else {
var G__119383 = (pos + (1));
pos = G__119383;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__58861__auto__ = (((pp == null))?null:pp);
var m__58862__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__58861__auto__)]);
if(!((m__58862__auto__ == null))){
return m__58862__auto__.call(null,pp);
} else {
var m__58862__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__58862__auto____$1 == null))){
return m__58862__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__119386 = arguments.length;
switch (G__119386) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if(typeof cljs.pprint.t_cljs$pprint119387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint119387 = (function (writer,max_columns,fields,meta119388){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta119388 = meta119388;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint119387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_119389,meta119388__$1){
var self__ = this;
var _119389__$1 = this;
return (new cljs.pprint.t_cljs$pprint119387(self__.writer,self__.max_columns,self__.fields,meta119388__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint119387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_119389){
var self__ = this;
var _119389__$1 = this;
return self__.meta119388;
});})(fields))
;

cljs.pprint.t_cljs$pprint119387.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint119387.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint119387.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__119390 = cljs.core._EQ_;
var expr__119391 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__119390.call(null,String,expr__119391))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__119390,expr__119391,this$__$1,fields){
return (function (p1__119384_SHARP_){
return cljs.core._EQ_.call(null,p1__119384_SHARP_,"\n");
});})(s,nl,pred__119390,expr__119391,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__119390.call(null,Number,expr__119391))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119391)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint119387.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta119388","meta119388",-1492816621,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint119387.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint119387.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint119387";

cljs.pprint.t_cljs$pprint119387.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.pprint/t_cljs$pprint119387");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint119387 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint119387(writer__$1,max_columns__$1,fields__$1,meta119388){
return (new cljs.pprint.t_cljs$pprint119387(writer__$1,max_columns__$1,fields__$1,meta119388));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint119387(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__58816__auto__,k__58817__auto__){
var self__ = this;
var this__58816__auto____$1 = this;
return this__58816__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__58817__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__58818__auto__,k119395,else__58819__auto__){
var self__ = this;
var this__58818__auto____$1 = this;
var G__119399 = k119395;
var G__119399__$1 = (((G__119399 instanceof cljs.core.Keyword))?G__119399.fqn:null);
switch (G__119399__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k119395,else__58819__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__58830__auto__,writer__58831__auto__,opts__58832__auto__){
var self__ = this;
var this__58830__auto____$1 = this;
var pr_pair__58833__auto__ = ((function (this__58830__auto____$1){
return (function (keyval__58834__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,cljs.core.pr_writer,""," ","",opts__58832__auto__,keyval__58834__auto__);
});})(this__58830__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,pr_pair__58833__auto__,"#cljs.pprint.logical-block{",", ","}",opts__58832__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__119394){
var self__ = this;
var G__119394__$1 = this;
return (new cljs.core.RecordIter((0),G__119394__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__58814__auto__){
var self__ = this;
var this__58814__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__58811__auto__){
var self__ = this;
var this__58811__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__58820__auto__){
var self__ = this;
var this__58820__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__58812__auto__){
var self__ = this;
var this__58812__auto____$1 = this;
var h__58584__auto__ = self__.__hash;
if(!((h__58584__auto__ == null))){
return h__58584__auto__;
} else {
var h__58584__auto____$1 = ((function (h__58584__auto__,this__58812__auto____$1){
return (function (coll__58813__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__58813__auto__));
});})(h__58584__auto__,this__58812__auto____$1))
.call(null,this__58812__auto____$1);
self__.__hash = h__58584__auto____$1;

return h__58584__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this119396,other119397){
var self__ = this;
var this119396__$1 = this;
return (!((other119397 == null))) && ((this119396__$1.constructor === other119397.constructor)) && (cljs.core._EQ_.call(null,this119396__$1.parent,other119397.parent)) && (cljs.core._EQ_.call(null,this119396__$1.section,other119397.section)) && (cljs.core._EQ_.call(null,this119396__$1.start_col,other119397.start_col)) && (cljs.core._EQ_.call(null,this119396__$1.indent,other119397.indent)) && (cljs.core._EQ_.call(null,this119396__$1.done_nl,other119397.done_nl)) && (cljs.core._EQ_.call(null,this119396__$1.intra_block_nl,other119397.intra_block_nl)) && (cljs.core._EQ_.call(null,this119396__$1.prefix,other119397.prefix)) && (cljs.core._EQ_.call(null,this119396__$1.per_line_prefix,other119397.per_line_prefix)) && (cljs.core._EQ_.call(null,this119396__$1.suffix,other119397.suffix)) && (cljs.core._EQ_.call(null,this119396__$1.logical_block_callback,other119397.logical_block_callback)) && (cljs.core._EQ_.call(null,this119396__$1.__extmap,other119397.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__58825__auto__,k__58826__auto__){
var self__ = this;
var this__58825__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__58826__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__58825__auto____$1),self__.__meta),k__58826__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__58826__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__58823__auto__,k__58824__auto__,G__119394){
var self__ = this;
var this__58823__auto____$1 = this;
var pred__119400 = cljs.core.keyword_identical_QMARK_;
var expr__119401 = k__58824__auto__;
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__119401))){
return (new cljs.pprint.logical_block(G__119394,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,G__119394,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__119394,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__119394,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__119394,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__119394,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__119394,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__119394,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__119394,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119400.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__119401))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__119394,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__58824__auto__,G__119394),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__58828__auto__){
var self__ = this;
var this__58828__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__58815__auto__,G__119394){
var self__ = this;
var this__58815__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__119394,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__58821__auto__,entry__58822__auto__){
var self__ = this;
var this__58821__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__58822__auto__)){
return this__58821__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__58822__auto__,(0)),cljs.core._nth.call(null,entry__58822__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__58821__auto____$1,entry__58822__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__58854__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__58854__auto__,writer__58855__auto__){
return cljs.core._write.call(null,writer__58855__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__119398){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__119398),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__119398),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__119398,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__119404 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__119404;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__58816__auto__,k__58817__auto__){
var self__ = this;
var this__58816__auto____$1 = this;
return this__58816__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__58817__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__58818__auto__,k119406,else__58819__auto__){
var self__ = this;
var this__58818__auto____$1 = this;
var G__119410 = k119406;
var G__119410__$1 = (((G__119410 instanceof cljs.core.Keyword))?G__119410.fqn:null);
switch (G__119410__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k119406,else__58819__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__58830__auto__,writer__58831__auto__,opts__58832__auto__){
var self__ = this;
var this__58830__auto____$1 = this;
var pr_pair__58833__auto__ = ((function (this__58830__auto____$1){
return (function (keyval__58834__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,cljs.core.pr_writer,""," ","",opts__58832__auto__,keyval__58834__auto__);
});})(this__58830__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,pr_pair__58833__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__58832__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__119405){
var self__ = this;
var G__119405__$1 = this;
return (new cljs.core.RecordIter((0),G__119405__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__58814__auto__){
var self__ = this;
var this__58814__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__58811__auto__){
var self__ = this;
var this__58811__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__58820__auto__){
var self__ = this;
var this__58820__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__58812__auto__){
var self__ = this;
var this__58812__auto____$1 = this;
var h__58584__auto__ = self__.__hash;
if(!((h__58584__auto__ == null))){
return h__58584__auto__;
} else {
var h__58584__auto____$1 = ((function (h__58584__auto__,this__58812__auto____$1){
return (function (coll__58813__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__58813__auto__));
});})(h__58584__auto__,this__58812__auto____$1))
.call(null,this__58812__auto____$1);
self__.__hash = h__58584__auto____$1;

return h__58584__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this119407,other119408){
var self__ = this;
var this119407__$1 = this;
return (!((other119408 == null))) && ((this119407__$1.constructor === other119408.constructor)) && (cljs.core._EQ_.call(null,this119407__$1.type_tag,other119408.type_tag)) && (cljs.core._EQ_.call(null,this119407__$1.data,other119408.data)) && (cljs.core._EQ_.call(null,this119407__$1.trailing_white_space,other119408.trailing_white_space)) && (cljs.core._EQ_.call(null,this119407__$1.start_pos,other119408.start_pos)) && (cljs.core._EQ_.call(null,this119407__$1.end_pos,other119408.end_pos)) && (cljs.core._EQ_.call(null,this119407__$1.__extmap,other119408.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__58825__auto__,k__58826__auto__){
var self__ = this;
var this__58825__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__58826__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__58825__auto____$1),self__.__meta),k__58826__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__58826__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__58823__auto__,k__58824__auto__,G__119405){
var self__ = this;
var this__58823__auto____$1 = this;
var pred__119411 = cljs.core.keyword_identical_QMARK_;
var expr__119412 = k__58824__auto__;
if(cljs.core.truth_(pred__119411.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__119412))){
return (new cljs.pprint.buffer_blob(G__119405,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119411.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__119412))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__119405,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119411.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__119412))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__119405,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119411.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__119412))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__119405,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119411.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__119412))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__119405,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__58824__auto__,G__119405),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__58828__auto__){
var self__ = this;
var this__58828__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__58815__auto__,G__119405){
var self__ = this;
var this__58815__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__119405,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__58821__auto__,entry__58822__auto__){
var self__ = this;
var this__58821__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__58822__auto__)){
return this__58821__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__58822__auto__,(0)),cljs.core._nth.call(null,entry__58822__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__58821__auto____$1,entry__58822__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__58854__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__58854__auto__,writer__58855__auto__){
return cljs.core._write.call(null,writer__58855__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__119409){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__119409),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__119409),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__119409),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__119409),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__119409),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__119409,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__68557__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__68557__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__58816__auto__,k__58817__auto__){
var self__ = this;
var this__58816__auto____$1 = this;
return this__58816__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__58817__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__58818__auto__,k119416,else__58819__auto__){
var self__ = this;
var this__58818__auto____$1 = this;
var G__119420 = k119416;
var G__119420__$1 = (((G__119420 instanceof cljs.core.Keyword))?G__119420.fqn:null);
switch (G__119420__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k119416,else__58819__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__58830__auto__,writer__58831__auto__,opts__58832__auto__){
var self__ = this;
var this__58830__auto____$1 = this;
var pr_pair__58833__auto__ = ((function (this__58830__auto____$1){
return (function (keyval__58834__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,cljs.core.pr_writer,""," ","",opts__58832__auto__,keyval__58834__auto__);
});})(this__58830__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,pr_pair__58833__auto__,"#cljs.pprint.nl-t{",", ","}",opts__58832__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__119415){
var self__ = this;
var G__119415__$1 = this;
return (new cljs.core.RecordIter((0),G__119415__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__58814__auto__){
var self__ = this;
var this__58814__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__58811__auto__){
var self__ = this;
var this__58811__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__58820__auto__){
var self__ = this;
var this__58820__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__58812__auto__){
var self__ = this;
var this__58812__auto____$1 = this;
var h__58584__auto__ = self__.__hash;
if(!((h__58584__auto__ == null))){
return h__58584__auto__;
} else {
var h__58584__auto____$1 = ((function (h__58584__auto__,this__58812__auto____$1){
return (function (coll__58813__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__58813__auto__));
});})(h__58584__auto__,this__58812__auto____$1))
.call(null,this__58812__auto____$1);
self__.__hash = h__58584__auto____$1;

return h__58584__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this119417,other119418){
var self__ = this;
var this119417__$1 = this;
return (!((other119418 == null))) && ((this119417__$1.constructor === other119418.constructor)) && (cljs.core._EQ_.call(null,this119417__$1.type_tag,other119418.type_tag)) && (cljs.core._EQ_.call(null,this119417__$1.type,other119418.type)) && (cljs.core._EQ_.call(null,this119417__$1.logical_block,other119418.logical_block)) && (cljs.core._EQ_.call(null,this119417__$1.start_pos,other119418.start_pos)) && (cljs.core._EQ_.call(null,this119417__$1.end_pos,other119418.end_pos)) && (cljs.core._EQ_.call(null,this119417__$1.__extmap,other119418.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__58825__auto__,k__58826__auto__){
var self__ = this;
var this__58825__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__58826__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__58825__auto____$1),self__.__meta),k__58826__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__58826__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__58823__auto__,k__58824__auto__,G__119415){
var self__ = this;
var this__58823__auto____$1 = this;
var pred__119421 = cljs.core.keyword_identical_QMARK_;
var expr__119422 = k__58824__auto__;
if(cljs.core.truth_(pred__119421.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__119422))){
return (new cljs.pprint.nl_t(G__119415,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119421.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__119422))){
return (new cljs.pprint.nl_t(self__.type_tag,G__119415,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119421.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__119422))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__119415,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119421.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__119422))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__119415,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119421.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__119422))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__119415,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__58824__auto__,G__119415),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__58828__auto__){
var self__ = this;
var this__58828__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__58815__auto__,G__119415){
var self__ = this;
var this__58815__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__119415,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__58821__auto__,entry__58822__auto__){
var self__ = this;
var this__58821__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__58822__auto__)){
return this__58821__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__58822__auto__,(0)),cljs.core._nth.call(null,entry__58822__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__58821__auto____$1,entry__58822__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__58854__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__58854__auto__,writer__58855__auto__){
return cljs.core._write.call(null,writer__58855__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__119419){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__119419),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__119419),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__119419),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__119419),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__119419),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__119419,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__68557__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__68557__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__58816__auto__,k__58817__auto__){
var self__ = this;
var this__58816__auto____$1 = this;
return this__58816__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__58817__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__58818__auto__,k119426,else__58819__auto__){
var self__ = this;
var this__58818__auto____$1 = this;
var G__119430 = k119426;
var G__119430__$1 = (((G__119430 instanceof cljs.core.Keyword))?G__119430.fqn:null);
switch (G__119430__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k119426,else__58819__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__58830__auto__,writer__58831__auto__,opts__58832__auto__){
var self__ = this;
var this__58830__auto____$1 = this;
var pr_pair__58833__auto__ = ((function (this__58830__auto____$1){
return (function (keyval__58834__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,cljs.core.pr_writer,""," ","",opts__58832__auto__,keyval__58834__auto__);
});})(this__58830__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,pr_pair__58833__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__58832__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__119425){
var self__ = this;
var G__119425__$1 = this;
return (new cljs.core.RecordIter((0),G__119425__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__58814__auto__){
var self__ = this;
var this__58814__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__58811__auto__){
var self__ = this;
var this__58811__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__58820__auto__){
var self__ = this;
var this__58820__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__58812__auto__){
var self__ = this;
var this__58812__auto____$1 = this;
var h__58584__auto__ = self__.__hash;
if(!((h__58584__auto__ == null))){
return h__58584__auto__;
} else {
var h__58584__auto____$1 = ((function (h__58584__auto__,this__58812__auto____$1){
return (function (coll__58813__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__58813__auto__));
});})(h__58584__auto__,this__58812__auto____$1))
.call(null,this__58812__auto____$1);
self__.__hash = h__58584__auto____$1;

return h__58584__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this119427,other119428){
var self__ = this;
var this119427__$1 = this;
return (!((other119428 == null))) && ((this119427__$1.constructor === other119428.constructor)) && (cljs.core._EQ_.call(null,this119427__$1.type_tag,other119428.type_tag)) && (cljs.core._EQ_.call(null,this119427__$1.logical_block,other119428.logical_block)) && (cljs.core._EQ_.call(null,this119427__$1.start_pos,other119428.start_pos)) && (cljs.core._EQ_.call(null,this119427__$1.end_pos,other119428.end_pos)) && (cljs.core._EQ_.call(null,this119427__$1.__extmap,other119428.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__58825__auto__,k__58826__auto__){
var self__ = this;
var this__58825__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__58826__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__58825__auto____$1),self__.__meta),k__58826__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__58826__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__58823__auto__,k__58824__auto__,G__119425){
var self__ = this;
var this__58823__auto____$1 = this;
var pred__119431 = cljs.core.keyword_identical_QMARK_;
var expr__119432 = k__58824__auto__;
if(cljs.core.truth_(pred__119431.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__119432))){
return (new cljs.pprint.start_block_t(G__119425,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119431.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__119432))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__119425,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119431.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__119432))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__119425,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119431.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__119432))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__119425,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__58824__auto__,G__119425),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__58828__auto__){
var self__ = this;
var this__58828__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__58815__auto__,G__119425){
var self__ = this;
var this__58815__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__119425,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__58821__auto__,entry__58822__auto__){
var self__ = this;
var this__58821__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__58822__auto__)){
return this__58821__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__58822__auto__,(0)),cljs.core._nth.call(null,entry__58822__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__58821__auto____$1,entry__58822__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__58854__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__58854__auto__,writer__58855__auto__){
return cljs.core._write.call(null,writer__58855__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__119429){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__119429),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__119429),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__119429),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__119429),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__119429,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__68557__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__68557__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__58816__auto__,k__58817__auto__){
var self__ = this;
var this__58816__auto____$1 = this;
return this__58816__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__58817__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__58818__auto__,k119436,else__58819__auto__){
var self__ = this;
var this__58818__auto____$1 = this;
var G__119440 = k119436;
var G__119440__$1 = (((G__119440 instanceof cljs.core.Keyword))?G__119440.fqn:null);
switch (G__119440__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k119436,else__58819__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__58830__auto__,writer__58831__auto__,opts__58832__auto__){
var self__ = this;
var this__58830__auto____$1 = this;
var pr_pair__58833__auto__ = ((function (this__58830__auto____$1){
return (function (keyval__58834__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,cljs.core.pr_writer,""," ","",opts__58832__auto__,keyval__58834__auto__);
});})(this__58830__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,pr_pair__58833__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__58832__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__119435){
var self__ = this;
var G__119435__$1 = this;
return (new cljs.core.RecordIter((0),G__119435__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__58814__auto__){
var self__ = this;
var this__58814__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__58811__auto__){
var self__ = this;
var this__58811__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__58820__auto__){
var self__ = this;
var this__58820__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__58812__auto__){
var self__ = this;
var this__58812__auto____$1 = this;
var h__58584__auto__ = self__.__hash;
if(!((h__58584__auto__ == null))){
return h__58584__auto__;
} else {
var h__58584__auto____$1 = ((function (h__58584__auto__,this__58812__auto____$1){
return (function (coll__58813__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__58813__auto__));
});})(h__58584__auto__,this__58812__auto____$1))
.call(null,this__58812__auto____$1);
self__.__hash = h__58584__auto____$1;

return h__58584__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this119437,other119438){
var self__ = this;
var this119437__$1 = this;
return (!((other119438 == null))) && ((this119437__$1.constructor === other119438.constructor)) && (cljs.core._EQ_.call(null,this119437__$1.type_tag,other119438.type_tag)) && (cljs.core._EQ_.call(null,this119437__$1.logical_block,other119438.logical_block)) && (cljs.core._EQ_.call(null,this119437__$1.start_pos,other119438.start_pos)) && (cljs.core._EQ_.call(null,this119437__$1.end_pos,other119438.end_pos)) && (cljs.core._EQ_.call(null,this119437__$1.__extmap,other119438.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__58825__auto__,k__58826__auto__){
var self__ = this;
var this__58825__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__58826__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__58825__auto____$1),self__.__meta),k__58826__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__58826__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__58823__auto__,k__58824__auto__,G__119435){
var self__ = this;
var this__58823__auto____$1 = this;
var pred__119441 = cljs.core.keyword_identical_QMARK_;
var expr__119442 = k__58824__auto__;
if(cljs.core.truth_(pred__119441.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__119442))){
return (new cljs.pprint.end_block_t(G__119435,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119441.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__119442))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__119435,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119441.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__119442))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__119435,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119441.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__119442))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__119435,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__58824__auto__,G__119435),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__58828__auto__){
var self__ = this;
var this__58828__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__58815__auto__,G__119435){
var self__ = this;
var this__58815__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__119435,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__58821__auto__,entry__58822__auto__){
var self__ = this;
var this__58821__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__58822__auto__)){
return this__58821__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__58822__auto__,(0)),cljs.core._nth.call(null,entry__58822__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__58821__auto____$1,entry__58822__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__58854__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__58854__auto__,writer__58855__auto__){
return cljs.core._write.call(null,writer__58855__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__119439){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__119439),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__119439),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__119439),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__119439),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__119439,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__68557__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__68557__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__58816__auto__,k__58817__auto__){
var self__ = this;
var this__58816__auto____$1 = this;
return this__58816__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__58817__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__58818__auto__,k119446,else__58819__auto__){
var self__ = this;
var this__58818__auto____$1 = this;
var G__119450 = k119446;
var G__119450__$1 = (((G__119450 instanceof cljs.core.Keyword))?G__119450.fqn:null);
switch (G__119450__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k119446,else__58819__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__58830__auto__,writer__58831__auto__,opts__58832__auto__){
var self__ = this;
var this__58830__auto____$1 = this;
var pr_pair__58833__auto__ = ((function (this__58830__auto____$1){
return (function (keyval__58834__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,cljs.core.pr_writer,""," ","",opts__58832__auto__,keyval__58834__auto__);
});})(this__58830__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,pr_pair__58833__auto__,"#cljs.pprint.indent-t{",", ","}",opts__58832__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__119445){
var self__ = this;
var G__119445__$1 = this;
return (new cljs.core.RecordIter((0),G__119445__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__58814__auto__){
var self__ = this;
var this__58814__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__58811__auto__){
var self__ = this;
var this__58811__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__58820__auto__){
var self__ = this;
var this__58820__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__58812__auto__){
var self__ = this;
var this__58812__auto____$1 = this;
var h__58584__auto__ = self__.__hash;
if(!((h__58584__auto__ == null))){
return h__58584__auto__;
} else {
var h__58584__auto____$1 = ((function (h__58584__auto__,this__58812__auto____$1){
return (function (coll__58813__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__58813__auto__));
});})(h__58584__auto__,this__58812__auto____$1))
.call(null,this__58812__auto____$1);
self__.__hash = h__58584__auto____$1;

return h__58584__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this119447,other119448){
var self__ = this;
var this119447__$1 = this;
return (!((other119448 == null))) && ((this119447__$1.constructor === other119448.constructor)) && (cljs.core._EQ_.call(null,this119447__$1.type_tag,other119448.type_tag)) && (cljs.core._EQ_.call(null,this119447__$1.logical_block,other119448.logical_block)) && (cljs.core._EQ_.call(null,this119447__$1.relative_to,other119448.relative_to)) && (cljs.core._EQ_.call(null,this119447__$1.offset,other119448.offset)) && (cljs.core._EQ_.call(null,this119447__$1.start_pos,other119448.start_pos)) && (cljs.core._EQ_.call(null,this119447__$1.end_pos,other119448.end_pos)) && (cljs.core._EQ_.call(null,this119447__$1.__extmap,other119448.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__58825__auto__,k__58826__auto__){
var self__ = this;
var this__58825__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__58826__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__58825__auto____$1),self__.__meta),k__58826__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__58826__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__58823__auto__,k__58824__auto__,G__119445){
var self__ = this;
var this__58823__auto____$1 = this;
var pred__119451 = cljs.core.keyword_identical_QMARK_;
var expr__119452 = k__58824__auto__;
if(cljs.core.truth_(pred__119451.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__119452))){
return (new cljs.pprint.indent_t(G__119445,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119451.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__119452))){
return (new cljs.pprint.indent_t(self__.type_tag,G__119445,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119451.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__119452))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__119445,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119451.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__119452))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__119445,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119451.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__119452))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__119445,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119451.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__119452))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__119445,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__58824__auto__,G__119445),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__58828__auto__){
var self__ = this;
var this__58828__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__58815__auto__,G__119445){
var self__ = this;
var this__58815__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__119445,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__58821__auto__,entry__58822__auto__){
var self__ = this;
var this__58821__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__58822__auto__)){
return this__58821__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__58822__auto__,(0)),cljs.core._nth.call(null,entry__58822__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__58821__auto____$1,entry__58822__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__58854__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__58854__auto__,writer__58855__auto__){
return cljs.core._write.call(null,writer__58855__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__119449){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__119449),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__119449),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__119449),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__119449),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__119449),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__119449),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__119449,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__68557__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__68557__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__59181__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__59182__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__59183__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__59184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__59185__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__,hierarchy__59185__auto__){
return (function (p1__119456_SHARP_,p2__119455_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__119455_SHARP_);
});})(method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__,hierarchy__59185__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__59185__auto__,method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__6738__auto___119457 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6738__auto___119457)){
var cb_119458 = temp__6738__auto___119457;
cb_119458.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__6738__auto___119459 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__6738__auto___119459)){
var prefix_119460 = temp__6738__auto___119459;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_119460);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__6738__auto___119461 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6738__auto___119461)){
var cb_119462 = temp__6738__auto___119461;
cb_119462.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__6738__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__6738__auto__)){
var suffix = temp__6738__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__119463 = cljs.core._EQ_;
var expr__119464 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__119463.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__119464))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__119463.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__119464))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119464)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__58128__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__58128__auto__){
return or__58128__auto__;
} else {
var and__58116__auto__ = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__58116__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__58116__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__6736__auto___119466 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6736__auto___119466)){
var tws_119467 = temp__6736__auto___119466;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_119467);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__119468 = cljs.core.seq.call(null,tokens);
var chunk__119469 = null;
var count__119470 = (0);
var i__119471 = (0);
while(true){
if((i__119471 < count__119470)){
var token = cljs.core._nth.call(null,chunk__119469,i__119471);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__6736__auto___119472 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6736__auto___119472)){
var tws_119473 = temp__6736__auto___119472;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_119473);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_119474 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__58116__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__58116__auto__)){
return tws_119474;
} else {
return and__58116__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_119474);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__119475 = seq__119468;
var G__119476 = chunk__119469;
var G__119477 = count__119470;
var G__119478 = (i__119471 + (1));
seq__119468 = G__119475;
chunk__119469 = G__119476;
count__119470 = G__119477;
i__119471 = G__119478;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__119468);
if(temp__6738__auto__){
var seq__119468__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119468__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__119468__$1);
var G__119479 = cljs.core.chunk_rest.call(null,seq__119468__$1);
var G__119480 = c__59059__auto__;
var G__119481 = cljs.core.count.call(null,c__59059__auto__);
var G__119482 = (0);
seq__119468 = G__119479;
chunk__119469 = G__119480;
count__119470 = G__119481;
i__119471 = G__119482;
continue;
} else {
var token = cljs.core.first.call(null,seq__119468__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__6736__auto___119483 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6736__auto___119483)){
var tws_119484 = temp__6736__auto___119483;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_119484);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_119485 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__58116__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__58116__auto__)){
return tws_119485;
} else {
return and__58116__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_119485);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__119486 = cljs.core.next.call(null,seq__119468__$1);
var G__119487 = null;
var G__119488 = (0);
var G__119489 = (0);
seq__119468 = G__119486;
chunk__119469 = G__119487;
count__119470 = G__119488;
i__119471 = G__119489;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__58128__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__58116__auto__ = miser_width;
if(cljs.core.truth_(and__58116__auto__)){
var and__58116__auto____$1 = maxcol;
if(cljs.core.truth_(and__58116__auto____$1)){
var and__58116__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__58116__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__58116__auto____$2;
}
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__59181__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__59182__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__59183__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__59184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__59185__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__,hierarchy__59185__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__,hierarchy__59185__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__59185__auto__,method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__58128__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
var or__58128__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__58128__auto____$1){
return or__58128__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__119490_SHARP_){
return cljs.core.not.call(null,(function (){var and__58116__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__119490_SHARP_);
if(cljs.core.truth_(and__58116__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__119490_SHARP_),lb);
} else {
return and__58116__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__119491_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__119491_SHARP_);
return cljs.core.not.call(null,(function (){var and__58116__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__119491_SHARP_);
if(cljs.core.truth_(and__58116__auto__)){
var or__58128__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__58128__auto__){
return or__58128__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__58116__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__119492 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__119492;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_119493 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_119493);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__119494_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__119494_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__119495 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__119495,(0),null);
var b = cljs.core.nth.call(null,vec__119495,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__119498 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__119498,(0),null);
var remainder = cljs.core.nth.call(null,vec__119498,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__119501 = new_buffer;
buffer = G__119501;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__6736__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6736__auto__)){
var buf = temp__6736__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__6738__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6738__auto__)){
var tws = temp__6738__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_119506 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_119507 = (oldpos_119506 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_119507);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_119506,newpos_119507));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__119502_119508 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__119503_119509 = null;
var count__119504_119510 = (0);
var i__119505_119511 = (0);
while(true){
if((i__119505_119511 < count__119504_119510)){
var l_119512__$1 = cljs.core._nth.call(null,chunk__119503_119509,i__119505_119511);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_119512__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__119513 = seq__119502_119508;
var G__119514 = chunk__119503_119509;
var G__119515 = count__119504_119510;
var G__119516 = (i__119505_119511 + (1));
seq__119502_119508 = G__119513;
chunk__119503_119509 = G__119514;
count__119504_119510 = G__119515;
i__119505_119511 = G__119516;
continue;
} else {
var temp__6738__auto___119517 = cljs.core.seq.call(null,seq__119502_119508);
if(temp__6738__auto___119517){
var seq__119502_119518__$1 = temp__6738__auto___119517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119502_119518__$1)){
var c__59059__auto___119519 = cljs.core.chunk_first.call(null,seq__119502_119518__$1);
var G__119520 = cljs.core.chunk_rest.call(null,seq__119502_119518__$1);
var G__119521 = c__59059__auto___119519;
var G__119522 = cljs.core.count.call(null,c__59059__auto___119519);
var G__119523 = (0);
seq__119502_119508 = G__119520;
chunk__119503_119509 = G__119521;
count__119504_119510 = G__119522;
i__119505_119511 = G__119523;
continue;
} else {
var l_119524__$1 = cljs.core.first.call(null,seq__119502_119518__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_119524__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__119525 = cljs.core.next.call(null,seq__119502_119518__$1);
var G__119526 = null;
var G__119527 = (0);
var G__119528 = (0);
seq__119502_119508 = G__119525;
chunk__119503_119509 = G__119526;
count__119504_119510 = G__119527;
i__119505_119511 = G__119528;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint119529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint119529 = (function (writer,max_columns,miser_width,lb,fields,meta119530){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta119530 = meta119530;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint119529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_119531,meta119530__$1){
var self__ = this;
var _119531__$1 = this;
return (new cljs.pprint.t_cljs$pprint119529(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta119530__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint119529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_119531){
var self__ = this;
var _119531__$1 = this;
return self__.meta119530;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint119529.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint119529.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__119532 = cljs.core._EQ_;
var expr__119533 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__119532.call(null,String,expr__119533))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__119532.call(null,Number,expr__119533))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119533)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint119529.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint119529.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint119529.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint119529.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta119530","meta119530",-428500858,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint119529.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint119529.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint119529";

cljs.pprint.t_cljs$pprint119529.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.pprint/t_cljs$pprint119529");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint119529 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint119529(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta119530){
return (new cljs.pprint.t_cljs$pprint119529(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta119530));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint119529(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__6738__auto___119535 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6738__auto___119535)){
var cb_119536 = temp__6738__auto___119535;
cb_119536.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__6738__auto___119537 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__6738__auto___119537)){
var cb_119538 = temp__6738__auto___119537;
cb_119538.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_119539 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_119540 = (oldpos_119539 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_119540);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_119539,newpos_119540));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__119541 = cljs.core._EQ_;
var expr__119542 = relative_to;
if(cljs.core.truth_(pred__119541.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__119542))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__119541.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__119542))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119542)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__119544_SHARP_){
var temp__6738__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__119544_SHARP_));
if(cljs.core.truth_(temp__6738__auto__)){
var v = temp__6738__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__119544_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__58116__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__58116__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__58116__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__58116__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__58116__auto__)){
var and__58116__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__58116__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119563 = arguments.length;
var i__59406__auto___119564 = (0);
while(true){
if((i__59406__auto___119564 < len__59405__auto___119563)){
args__59412__auto__.push((arguments[i__59406__auto___119564]));

var G__119565 = (i__59406__auto___119564 + (1));
i__59406__auto___119564 = G__119565;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((1) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__59413__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_119549 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_119550 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_119551 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_119552 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_119553 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_119554 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_119555 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_119556 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_119557 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_119558 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_119559 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_119560 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__68540__auto___119566 = base_writer;
var new_writer__68541__auto___119567 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__68540__auto___119566));
var _STAR_out_STAR_119561_119568 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__68541__auto___119567)?cljs.pprint.make_pretty_writer.call(null,base_writer__68540__auto___119566,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__68540__auto___119566);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_119561_119568;
}} else {
var _STAR_out_STAR_119562_119569 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_119562_119569;
}}

if(optval === true){
cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_119560;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_119559;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_119558;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_119557;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_119556;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_119555;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_119554;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_119553;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_119552;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_119551;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_119550;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_119549;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq119547){
var G__119548 = cljs.core.first.call(null,seq119547);
var seq119547__$1 = cljs.core.next.call(null,seq119547);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__119548,seq119547__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__119571 = arguments.length;
switch (G__119571) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_119572 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_119572;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__68540__auto__ = writer;
var new_writer__68541__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__68540__auto__));
var _STAR_out_STAR_119573 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__68541__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__68540__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__68540__auto__);

try{var _STAR_print_pretty_STAR_119574_119576 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_119574_119576;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_119573;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__58116__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__58116__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__58116__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__59412__auto__ = [];
var len__59405__auto___119580 = arguments.length;
var i__59406__auto___119581 = (0);
while(true){
if((i__59406__auto___119581 < len__59405__auto___119580)){
args__59412__auto__.push((arguments[i__59406__auto___119581]));

var G__119582 = (i__59406__auto___119581 + (1));
i__59406__auto___119581 = G__119582;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((2) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__59413__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq119577){
var G__119578 = cljs.core.first.call(null,seq119577);
var seq119577__$1 = cljs.core.next.call(null,seq119577);
var G__119579 = cljs.core.first.call(null,seq119577__$1);
var seq119577__$2 = cljs.core.next.call(null,seq119577__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__119578,G__119579,seq119577__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__58816__auto__,k__58817__auto__){
var self__ = this;
var this__58816__auto____$1 = this;
return this__58816__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__58817__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__58818__auto__,k119584,else__58819__auto__){
var self__ = this;
var this__58818__auto____$1 = this;
var G__119588 = k119584;
var G__119588__$1 = (((G__119588 instanceof cljs.core.Keyword))?G__119588.fqn:null);
switch (G__119588__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k119584,else__58819__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__58830__auto__,writer__58831__auto__,opts__58832__auto__){
var self__ = this;
var this__58830__auto____$1 = this;
var pr_pair__58833__auto__ = ((function (this__58830__auto____$1){
return (function (keyval__58834__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,cljs.core.pr_writer,""," ","",opts__58832__auto__,keyval__58834__auto__);
});})(this__58830__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,pr_pair__58833__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__58832__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__119583){
var self__ = this;
var G__119583__$1 = this;
return (new cljs.core.RecordIter((0),G__119583__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__58814__auto__){
var self__ = this;
var this__58814__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__58811__auto__){
var self__ = this;
var this__58811__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__58820__auto__){
var self__ = this;
var this__58820__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__58812__auto__){
var self__ = this;
var this__58812__auto____$1 = this;
var h__58584__auto__ = self__.__hash;
if(!((h__58584__auto__ == null))){
return h__58584__auto__;
} else {
var h__58584__auto____$1 = ((function (h__58584__auto__,this__58812__auto____$1){
return (function (coll__58813__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__58813__auto__));
});})(h__58584__auto__,this__58812__auto____$1))
.call(null,this__58812__auto____$1);
self__.__hash = h__58584__auto____$1;

return h__58584__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this119585,other119586){
var self__ = this;
var this119585__$1 = this;
return (!((other119586 == null))) && ((this119585__$1.constructor === other119586.constructor)) && (cljs.core._EQ_.call(null,this119585__$1.seq,other119586.seq)) && (cljs.core._EQ_.call(null,this119585__$1.rest,other119586.rest)) && (cljs.core._EQ_.call(null,this119585__$1.pos,other119586.pos)) && (cljs.core._EQ_.call(null,this119585__$1.__extmap,other119586.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__58825__auto__,k__58826__auto__){
var self__ = this;
var this__58825__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__58826__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__58825__auto____$1),self__.__meta),k__58826__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__58826__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__58823__auto__,k__58824__auto__,G__119583){
var self__ = this;
var this__58823__auto____$1 = this;
var pred__119589 = cljs.core.keyword_identical_QMARK_;
var expr__119590 = k__58824__auto__;
if(cljs.core.truth_(pred__119589.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__119590))){
return (new cljs.pprint.arg_navigator(G__119583,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119589.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__119590))){
return (new cljs.pprint.arg_navigator(self__.seq,G__119583,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119589.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__119590))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__119583,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__58824__auto__,G__119583),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__58828__auto__){
var self__ = this;
var this__58828__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__58815__auto__,G__119583){
var self__ = this;
var this__58815__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__119583,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__58821__auto__,entry__58822__auto__){
var self__ = this;
var this__58821__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__58822__auto__)){
return this__58821__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__58822__auto__,(0)),cljs.core._nth.call(null,entry__58822__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__58821__auto____$1,entry__58822__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__58854__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__58854__auto__,writer__58855__auto__){
return cljs.core._write.call(null,writer__58855__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__119587){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__119587),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__119587),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__119587),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__119587,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__119593 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__119593,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119593,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__58816__auto__,k__58817__auto__){
var self__ = this;
var this__58816__auto____$1 = this;
return this__58816__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__58817__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__58818__auto__,k119597,else__58819__auto__){
var self__ = this;
var this__58818__auto____$1 = this;
var G__119601 = k119597;
var G__119601__$1 = (((G__119601 instanceof cljs.core.Keyword))?G__119601.fqn:null);
switch (G__119601__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k119597,else__58819__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__58830__auto__,writer__58831__auto__,opts__58832__auto__){
var self__ = this;
var this__58830__auto____$1 = this;
var pr_pair__58833__auto__ = ((function (this__58830__auto____$1){
return (function (keyval__58834__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,cljs.core.pr_writer,""," ","",opts__58832__auto__,keyval__58834__auto__);
});})(this__58830__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__58831__auto__,pr_pair__58833__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__58832__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__119596){
var self__ = this;
var G__119596__$1 = this;
return (new cljs.core.RecordIter((0),G__119596__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__58814__auto__){
var self__ = this;
var this__58814__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__58811__auto__){
var self__ = this;
var this__58811__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__58820__auto__){
var self__ = this;
var this__58820__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__58812__auto__){
var self__ = this;
var this__58812__auto____$1 = this;
var h__58584__auto__ = self__.__hash;
if(!((h__58584__auto__ == null))){
return h__58584__auto__;
} else {
var h__58584__auto____$1 = ((function (h__58584__auto__,this__58812__auto____$1){
return (function (coll__58813__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__58813__auto__));
});})(h__58584__auto__,this__58812__auto____$1))
.call(null,this__58812__auto____$1);
self__.__hash = h__58584__auto____$1;

return h__58584__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this119598,other119599){
var self__ = this;
var this119598__$1 = this;
return (!((other119599 == null))) && ((this119598__$1.constructor === other119599.constructor)) && (cljs.core._EQ_.call(null,this119598__$1.func,other119599.func)) && (cljs.core._EQ_.call(null,this119598__$1.def,other119599.def)) && (cljs.core._EQ_.call(null,this119598__$1.params,other119599.params)) && (cljs.core._EQ_.call(null,this119598__$1.offset,other119599.offset)) && (cljs.core._EQ_.call(null,this119598__$1.__extmap,other119599.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__58825__auto__,k__58826__auto__){
var self__ = this;
var this__58825__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__58826__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__58825__auto____$1),self__.__meta),k__58826__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__58826__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__58823__auto__,k__58824__auto__,G__119596){
var self__ = this;
var this__58823__auto____$1 = this;
var pred__119602 = cljs.core.keyword_identical_QMARK_;
var expr__119603 = k__58824__auto__;
if(cljs.core.truth_(pred__119602.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__119603))){
return (new cljs.pprint.compiled_directive(G__119596,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119602.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__119603))){
return (new cljs.pprint.compiled_directive(self__.func,G__119596,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119602.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__119603))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__119596,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__119602.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__119603))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__119596,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__58824__auto__,G__119596),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__58828__auto__){
var self__ = this;
var this__58828__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__58815__auto__,G__119596){
var self__ = this;
var this__58815__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__119596,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__58821__auto__,entry__58822__auto__){
var self__ = this;
var this__58821__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__58822__auto__)){
return this__58821__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__58822__auto__,(0)),cljs.core._nth.call(null,entry__58822__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__58821__auto____$1,entry__58822__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__58854__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__58854__auto__,writer__58855__auto__){
return cljs.core._write.call(null,writer__58855__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__119600){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__119600),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__119600),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__119600),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__119600),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__119600,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__119606,navigator){
var vec__119607 = p__119606;
var param = cljs.core.nth.call(null,vec__119607,(0),null);
var vec__119610 = cljs.core.nth.call(null,vec__119607,(1),null);
var raw_val = cljs.core.nth.call(null,vec__119610,(0),null);
var offset = cljs.core.nth.call(null,vec__119610,(1),null);
var vec__119613 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__119613,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__119613,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__119616 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__119616,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__119616,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__58128__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__119619 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__119619,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__119619,(1),null);
var base_output = (function (){var or__58128__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__119622_SHARP_){
if((p1__119622_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__119622_SHARP_,base),cljs.core.quot.call(null,p1__119622_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__119623_SHARP_){
if((p1__119623_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__119623_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__119623_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__119625 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__119625,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__119625,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_119628 = (arg < (0));
var pos_arg_119629 = ((neg_119628)?(- arg):arg);
var raw_str_119630 = cljs.pprint.opt_base_str.call(null,base,pos_arg_119629);
var group_str_119631 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_119628,pos_arg_119629,raw_str_119630,vec__119625,arg,arg_navigator__$1){
return (function (p1__119624_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__119624_SHARP_);
});})(neg_119628,pos_arg_119629,raw_str_119630,vec__119625,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_119630));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_119630);
var signed_str_119632 = ((neg_119628)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_119631)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_119631)].join(''):group_str_119631
));
var padded_str_119633 = (((signed_str_119632.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_119632.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_119632)].join(''):signed_str_119632);
cljs.pprint.print.call(null,padded_str_119633);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__119634 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__119635 = (pos - (1));
var G__119636 = cljs.core.first.call(null,remainder);
var G__119637 = cljs.core.next.call(null,remainder);
acc = G__119634;
pos = G__119635;
this$ = G__119636;
remainder = G__119637;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__119638 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119638,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119638,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_119641 = (((arg < (0)))?(- arg):arg);
var parts_119642 = cljs.pprint.remainders.call(null,(1000),abs_arg_119641);
if((cljs.core.count.call(null,parts_119642) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_119643 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_119642);
var full_str_119644 = cljs.pprint.add_english_scales.call(null,parts_strs_119643,(0));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_119644)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__119645 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119645,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119645,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_119648 = (((arg < (0)))?(- arg):arg);
var parts_119649 = cljs.pprint.remainders.call(null,(1000),abs_arg_119648);
if((cljs.core.count.call(null,parts_119649) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_119650 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_119649));
var head_str_119651 = cljs.pprint.add_english_scales.call(null,parts_strs_119650,(1));
var tail_str_119652 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_119649));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,head_str_119651))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_119652))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_119651),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_119652)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_119651)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_119651),"th"].join(''):tail_str_119652
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_119653 = cljs.core.rem.call(null,arg,(100));
var not_teens_119654 = (((11) < low_two_digits_119653)) || (((19) > low_two_digits_119653));
var low_digit_119655 = cljs.core.rem.call(null,low_two_digits_119653,(10));
cljs.pprint.print.call(null,((((low_digit_119655 === (1))) && (not_teens_119654))?"st":((((low_digit_119655 === (2))) && (not_teens_119654))?"nd":((((low_digit_119655 === (3))) && (not_teens_119654))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__119656 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119656,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119656,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_119659 = cljs.pprint.remainders.call(null,(10),arg);
var acc_119660 = cljs.core.PersistentVector.EMPTY;
var pos_119661 = (cljs.core.count.call(null,digits_119659) - (1));
var digits_119662__$1 = digits_119659;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_119662__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_119660));
} else {
var digit_119663 = cljs.core.first.call(null,digits_119662__$1);
var G__119664 = ((cljs.core._EQ_.call(null,(0),digit_119663))?acc_119660:cljs.core.conj.call(null,acc_119660,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_119661),(digit_119663 - (1)))));
var G__119665 = (pos_119661 - (1));
var G__119666 = cljs.core.next.call(null,digits_119662__$1);
acc_119660 = G__119664;
pos_119661 = G__119665;
digits_119662__$1 = G__119666;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__119667 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__119667,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119667,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__119670 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__119670,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119670,(1),null);
var pred__119673_119676 = cljs.core._EQ_;
var expr__119674_119677 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__119673_119676.call(null,"o",expr__119674_119677))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__119673_119676.call(null,"u",expr__119674_119677))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__119673_119676.call(null,null,expr__119674_119677))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119674_119677)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__119678 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__119678,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119678,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__119681 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__119681,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__119681,(1),null);
var vec__119684 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__119684,(0),null);
var offsets = cljs.core.nth.call(null,vec__119684,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__119687 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__119687,(0),null);
var e = cljs.core.nth.call(null,vec__119687,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = ((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+")))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__119690 = (i - (1));
i = G__119690;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__58128__auto__ = d;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__58480__auto__ = (2);
var y__58481__auto__ = w;
return ((x__58480__auto__ > y__58481__auto__) ? x__58480__auto__ : y__58481__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__58480__auto__ = (e + (1));
var y__58481__auto__ = (w__$1 - (1));
return ((x__58480__auto__ > y__58481__auto__) ? x__58480__auto__ : y__58481__auto__);
})():(w__$1 + e)
));
var vec__119691 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__119691,(0),null);
var e1 = cljs.core.nth.call(null,vec__119691,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__119691,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__119691,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__119694 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__119694,(0),null);
var e1 = cljs.core.nth.call(null,vec__119694,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__119697 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119697,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119697,(1),null);
var vec__119700 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__119700,(0),null);
var abs = cljs.core.nth.call(null,vec__119700,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__119703 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__119703,(0),null);
var exp = cljs.core.nth.call(null,vec__119703,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__58128__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp));
var vec__119706 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__119706,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__119706,(1),null);
var expanded = cljs.core.nth.call(null,vec__119706,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__58116__auto__ = w;
if(cljs.core.truth_(and__58116__auto__)){
var and__58116__auto____$1 = d;
if(cljs.core.truth_(and__58116__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_119709 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_119710 = (cljs.core.truth_(add_sign)?(len_119709 + (1)):len_119709);
var prepend_zero_119711__$1 = (prepend_zero) && (!((signed_len_119710 >= w)));
var append_zero_119712__$1 = (append_zero) && (!((signed_len_119710 >= w)));
var full_len_119713 = (((prepend_zero_119711__$1) || (append_zero_119712__$1))?(signed_len_119710 + (1)):signed_len_119710);
if(cljs.core.truth_((function (){var and__58116__auto__ = (full_len_119713 > w);
if(and__58116__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__58116__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_119713),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_119711__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_119712__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__119714 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119714,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119714,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__119720_119730 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__119721_119731 = G__119720_119730;
var mantissa_119732 = cljs.core.nth.call(null,vec__119721_119731,(0),null);
var exp_119733 = cljs.core.nth.call(null,vec__119721_119731,(1),null);
var G__119720_119734__$1 = G__119720_119730;
while(true){
var vec__119724_119735 = G__119720_119734__$1;
var mantissa_119736__$1 = cljs.core.nth.call(null,vec__119724_119735,(0),null);
var exp_119737__$1 = cljs.core.nth.call(null,vec__119724_119735,(1),null);
var w_119738 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_119739 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_119740 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_119741 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_119742 = (function (){var or__58128__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return "E";
}
})();
var add_sign_119743 = (function (){var or__58128__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_119744 = (k_119741 <= (0));
var scaled_exp_119745 = (exp_119737__$1 - (k_119741 - (1)));
var scaled_exp_str_119746 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_119745))].join('');
var scaled_exp_str_119747__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_119742),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_119745 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_119740)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_119740 - cljs.core.count.call(null,scaled_exp_str_119746)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_119746)].join('');
var exp_width_119748 = cljs.core.count.call(null,scaled_exp_str_119747__$1);
var base_mantissa_width_119749 = cljs.core.count.call(null,mantissa_119736__$1);
var scaled_mantissa_119750 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_119741),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_119736__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_119739)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_119739 - (base_mantissa_width_119749 - (1))) - (((k_119741 < (0)))?(- k_119741):(0))),"0")):null))].join('');
var w_mantissa_119751 = (cljs.core.truth_(w_119738)?(w_119738 - exp_width_119748):null);
var vec__119727_119752 = cljs.pprint.round_str.call(null,scaled_mantissa_119750,(0),((cljs.core._EQ_.call(null,k_119741,(0)))?(d_119739 - (1)):(((k_119741 > (0)))?d_119739:(((k_119741 < (0)))?(d_119739 - (1)):null))),(cljs.core.truth_(w_mantissa_119751)?(w_mantissa_119751 - (cljs.core.truth_(add_sign_119743)?(1):(0))):null));
var rounded_mantissa_119753 = cljs.core.nth.call(null,vec__119727_119752,(0),null);
var __119754 = cljs.core.nth.call(null,vec__119727_119752,(1),null);
var incr_exp_119755 = cljs.core.nth.call(null,vec__119727_119752,(2),null);
var full_mantissa_119756 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_119753,k_119741);
var append_zero_119757 = (cljs.core._EQ_.call(null,k_119741,cljs.core.count.call(null,rounded_mantissa_119753))) && ((d_119739 == null));
if(cljs.core.not.call(null,incr_exp_119755)){
if(cljs.core.truth_(w_119738)){
var len_119758 = (cljs.core.count.call(null,full_mantissa_119756) + exp_width_119748);
var signed_len_119759 = (cljs.core.truth_(add_sign_119743)?(len_119758 + (1)):len_119758);
var prepend_zero_119760__$1 = (prepend_zero_119744) && (!(cljs.core._EQ_.call(null,signed_len_119759,w_119738)));
var full_len_119761 = ((prepend_zero_119760__$1)?(signed_len_119759 + (1)):signed_len_119759);
var append_zero_119762__$1 = (append_zero_119757) && ((full_len_119761 < w_119738));
if(cljs.core.truth_((function (){var and__58116__auto__ = (function (){var or__58128__auto__ = (full_len_119761 > w_119738);
if(or__58128__auto__){
return or__58128__auto__;
} else {
var and__58116__auto__ = e_119740;
if(cljs.core.truth_(and__58116__auto__)){
return ((exp_width_119748 - (2)) > e_119740);
} else {
return and__58116__auto__;
}
}
})();
if(cljs.core.truth_(and__58116__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__58116__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_119738,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_119738 - full_len_119761) - ((append_zero_119762__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_119743)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_119760__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_119756),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_119762__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_119747__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_119743)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_119744)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_119756),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_119757)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_119747__$1)].join(''));
}
} else {
var G__119763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_119753,(exp_119737__$1 + (1))], null);
G__119720_119734__$1 = G__119763;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__119764 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119764,(0),null);
var _ = cljs.core.nth.call(null,vec__119764,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__119767 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__119767,(0),null);
var exp = cljs.core.nth.call(null,vec__119767,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__58480__auto__ = cljs.core.count.call(null,mantissa);
var y__58481__auto__ = (function (){var x__58487__auto__ = n;
var y__58488__auto__ = (7);
return ((x__58487__auto__ < y__58488__auto__) ? x__58487__auto__ : y__58488__auto__);
})();
return ((x__58480__auto__ > y__58481__auto__) ? x__58480__auto__ : y__58481__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__119770 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119770,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119770,(1),null);
var vec__119773 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__119773,(0),null);
var exp = cljs.core.nth.call(null,vec__119773,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__58128__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return (arg < (0));
}
})();
var vec__119776 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__119776,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__119776,(1),null);
var expanded = cljs.core.nth.call(null,vec__119776,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__58116__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__58116__auto__)){
return add_sign;
} else {
return and__58116__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__58116__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__58116__auto__){
return add_sign;
} else {
return and__58116__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__119779 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__119779,(0),null);
var navigator = cljs.core.nth.call(null,vec__119779,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__119782 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__119782,(0),null);
var navigator = cljs.core.nth.call(null,vec__119782,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__119785 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__119785,(0),null);
var navigator = cljs.core.nth.call(null,vec__119785,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__119788 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__119788,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119788,(1),null);
var vec__119791 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__119791,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__119791,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__58128__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__58128__auto__){
return or__58128__auto__;
} else {
var and__58116__auto__ = max_count;
if(cljs.core.truth_(and__58116__auto__)){
return (count >= max_count);
} else {
return and__58116__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__119794 = (count + (1));
var G__119795 = iter_result;
var G__119796 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__119794;
args__$1 = G__119795;
last_pos = G__119796;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__119797 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__119797,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119797,(1),null);
var vec__119800 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__119800,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__119800,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__58128__auto__ = (cljs.core.empty_QMARK_.call(null,arg_list__$1)) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__58128__auto__){
return or__58128__auto__;
} else {
var and__58116__auto__ = max_count;
if(cljs.core.truth_(and__58116__auto__)){
return (count >= max_count);
} else {
return and__58116__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__119803 = (count + (1));
var G__119804 = cljs.core.next.call(null,arg_list__$1);
count = G__119803;
arg_list__$1 = G__119804;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__119805 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__119805,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119805,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__58128__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__58128__auto__){
return or__58128__auto__;
} else {
var and__58116__auto__ = max_count;
if(cljs.core.truth_(and__58116__auto__)){
return (count >= max_count);
} else {
return and__58116__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__119808 = (count + (1));
var G__119809 = iter_result;
var G__119810 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__119808;
navigator__$2 = G__119809;
last_pos = G__119810;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__119811 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__119811,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119811,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__58128__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__58128__auto__){
return or__58128__auto__;
} else {
var and__58116__auto__ = max_count;
if(cljs.core.truth_(and__58116__auto__)){
return (count >= max_count);
} else {
return and__58116__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__119814 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__119814,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__119814,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__119817 = (count + (1));
var G__119818 = navigator__$3;
count = G__119817;
navigator__$2 = G__119818;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__119819 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_119822 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_119822;
}})();
var iter_result = cljs.core.nth.call(null,vec__119819,(0),null);
var result_str = cljs.core.nth.call(null,vec__119819,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__119823 = cljs.core.next.call(null,clauses__$1);
var G__119824 = cljs.core.conj.call(null,acc,result_str);
var G__119825 = iter_result;
clauses__$1 = G__119823;
acc = G__119824;
navigator__$1 = G__119825;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__119826 = (function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__6738__auto__)){
var else$ = temp__6738__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__119829 = cljs.core.nth.call(null,vec__119826,(0),null);
var eol_str = cljs.core.nth.call(null,vec__119829,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__119826,(1),null);
var navigator__$1 = (function (){var or__58128__auto__ = new_navigator;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return navigator;
}
})();
var vec__119832 = (function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__6738__auto__)){
var p = temp__6738__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__119832,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__119832,(1),null);
var navigator__$2 = (function (){var or__58128__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__58128__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__58128__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__119835 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__119835,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__119835,(1),null);
var slots = (function (){var x__58480__auto__ = (1);
var y__58481__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__58480__auto__ > y__58481__auto__) ? x__58480__auto__ : y__58481__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__58480__auto__ = minpad;
var y__58481__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__58480__auto__ > y__58481__auto__) ? x__58480__auto__ : y__58481__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__58116__auto__ = eol_str;
if(cljs.core.truth_(and__58116__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__58116__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_119838__$1 = slots;
var extra_pad_119839__$1 = extra_pad;
var strs_119840__$1 = strs;
var pad_only_119841 = (function (){var or__58128__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_119840__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_119840__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_119841))?cljs.core.first.call(null,strs_119840__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__58128__auto__ = pad_only_119841;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
var or__58128__auto____$1 = cljs.core.next.call(null,strs_119840__$1);
if(or__58128__auto____$1){
return or__58128__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_119839__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__119842 = (slots_119838__$1 - (1));
var G__119843 = (extra_pad_119839__$1 - (1));
var G__119844 = (cljs.core.truth_(pad_only_119841)?strs_119840__$1:cljs.core.next.call(null,strs_119840__$1));
var G__119845 = false;
slots_119838__$1 = G__119842;
extra_pad_119839__$1 = G__119843;
strs_119840__$1 = G__119844;
pad_only_119841 = G__119845;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint119846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint119846 = (function (writer,meta119847){
this.writer = writer;
this.meta119847 = meta119847;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint119846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119848,meta119847__$1){
var self__ = this;
var _119848__$1 = this;
return (new cljs.pprint.t_cljs$pprint119846(self__.writer,meta119847__$1));
});

cljs.pprint.t_cljs$pprint119846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119848){
var self__ = this;
var _119848__$1 = this;
return self__.meta119847;
});

cljs.pprint.t_cljs$pprint119846.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint119846.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__119849 = cljs.core._EQ_;
var expr__119850 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__119849.call(null,String,expr__119850))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__119849.call(null,Number,expr__119850))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119850)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint119846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta119847","meta119847",-360208688,null)], null);
});

cljs.pprint.t_cljs$pprint119846.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint119846.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint119846";

cljs.pprint.t_cljs$pprint119846.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.pprint/t_cljs$pprint119846");
});

cljs.pprint.__GT_t_cljs$pprint119846 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint119846(writer__$1,meta119847){
return (new cljs.pprint.t_cljs$pprint119846(writer__$1,meta119847));
});

}

return (new cljs.pprint.t_cljs$pprint119846(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint119852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint119852 = (function (writer,meta119853){
this.writer = writer;
this.meta119853 = meta119853;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint119852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119854,meta119853__$1){
var self__ = this;
var _119854__$1 = this;
return (new cljs.pprint.t_cljs$pprint119852(self__.writer,meta119853__$1));
});

cljs.pprint.t_cljs$pprint119852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119854){
var self__ = this;
var _119854__$1 = this;
return self__.meta119853;
});

cljs.pprint.t_cljs$pprint119852.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint119852.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__119855 = cljs.core._EQ_;
var expr__119856 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__119855.call(null,String,expr__119856))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__119855.call(null,Number,expr__119856))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119856)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint119852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta119853","meta119853",286187824,null)], null);
});

cljs.pprint.t_cljs$pprint119852.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint119852.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint119852";

cljs.pprint.t_cljs$pprint119852.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.pprint/t_cljs$pprint119852");
});

cljs.pprint.__GT_t_cljs$pprint119852 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint119852(writer__$1,meta119853){
return (new cljs.pprint.t_cljs$pprint119852(writer__$1,meta119853));
});

}

return (new cljs.pprint.t_cljs$pprint119852(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__58116__auto__ = first_QMARK_;
if(cljs.core.truth_(and__58116__auto__)){
var and__58116__auto____$1 = f;
if(cljs.core.truth_(and__58116__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__58116__auto__ = m;
if(cljs.core.truth_(and__58116__auto__)){
return (m.index + (1));
} else {
return and__58116__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if(typeof cljs.pprint.t_cljs$pprint119858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint119858 = (function (writer,last_was_whitespace_QMARK_,meta119859){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta119859 = meta119859;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint119858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_119860,meta119859__$1){
var self__ = this;
var _119860__$1 = this;
return (new cljs.pprint.t_cljs$pprint119858(self__.writer,self__.last_was_whitespace_QMARK_,meta119859__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint119858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_119860){
var self__ = this;
var _119860__$1 = this;
return self__.meta119859;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint119858.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint119858.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__119861 = cljs.core._EQ_;
var expr__119862 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__119861.call(null,String,expr__119862))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__119861.call(null,Number,expr__119862))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119862)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint119858.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta119859","meta119859",364677001,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint119858.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint119858.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint119858";

cljs.pprint.t_cljs$pprint119858.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.pprint/t_cljs$pprint119858");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint119858 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint119858(writer__$1,last_was_whitespace_QMARK___$1,meta119859){
return (new cljs.pprint.t_cljs$pprint119858(writer__$1,last_was_whitespace_QMARK___$1,meta119859));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint119858(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if(typeof cljs.pprint.t_cljs$pprint119864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint119864 = (function (writer,capped,meta119865){
this.writer = writer;
this.capped = capped;
this.meta119865 = meta119865;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint119864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_119866,meta119865__$1){
var self__ = this;
var _119866__$1 = this;
return (new cljs.pprint.t_cljs$pprint119864(self__.writer,self__.capped,meta119865__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint119864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_119866){
var self__ = this;
var _119866__$1 = this;
return self__.meta119865;
});})(capped))
;

cljs.pprint.t_cljs$pprint119864.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint119864.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__119867 = cljs.core._EQ_;
var expr__119868 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__119867.call(null,String,expr__119868))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__58116__auto__ = m;
if(cljs.core.truth_(and__58116__auto__)){
return m.index;
} else {
return and__58116__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__119867.call(null,Number,expr__119868))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__58116__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__58116__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__58116__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__119868)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint119864.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta119865","meta119865",-472362908,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint119864.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint119864.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint119864";

cljs.pprint.t_cljs$pprint119864.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.pprint/t_cljs$pprint119864");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint119864 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint119864(writer__$1,capped__$1,meta119865){
return (new cljs.pprint.t_cljs$pprint119864(writer__$1,capped__$1,meta119865));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint119864(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_119870 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = make_writer.call(null,cljs.core._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_119870;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_119872 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_119873 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_119874 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_119875 = (((current_119874 < colnum_119872))?(colnum_119872 - current_119874):((cljs.core._EQ_.call(null,colinc_119873,(0)))?(0):(colinc_119873 - cljs.core.rem.call(null,(current_119874 - colnum_119872),colinc_119873))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_119875," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_119876 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_119877 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_119878 = (colrel_119876 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_119879 = (((colinc_119877 > (0)))?cljs.core.rem.call(null,start_col_119878,colinc_119877):(0));
var space_count_119880 = (colrel_119876 + ((cljs.core._EQ_.call(null,(0),offset_119879))?(0):(colinc_119877 - offset_119879)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_119880," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__119881 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119881,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119881,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_119884_119886 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_119885_119887 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_119885_119887;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_119884_119886;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__119888_SHARP_,p2__119889_SHARP_,p3__119890_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__119888_SHARP_,p2__119889_SHARP_,p3__119890_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__119891_SHARP_,p2__119892_SHARP_,p3__119893_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__119891_SHARP_,p2__119892_SHARP_,p3__119893_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__119894_SHARP_,p2__119895_SHARP_,p3__119896_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__119894_SHARP_,p2__119895_SHARP_,p3__119896_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__119897_SHARP_,p2__119898_SHARP_,p3__119899_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__119897_SHARP_,p2__119898_SHARP_,p3__119899_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__119900_SHARP_,p2__119901_SHARP_,p3__119902_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__119900_SHARP_,p2__119901_SHARP_,p3__119902_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__119903_SHARP_,p2__119904_SHARP_,p3__119905_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__119903_SHARP_,p2__119904_SHARP_,p3__119905_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__119906_SHARP_,p2__119907_SHARP_,p3__119908_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__119906_SHARP_),p1__119906_SHARP_,p2__119907_SHARP_,p3__119908_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__58116__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__58116__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__58116__auto__;
}
})())){
return (function (p1__119909_SHARP_,p2__119910_SHARP_,p3__119911_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__119909_SHARP_,p2__119910_SHARP_,p3__119911_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__119912_SHARP_,p2__119913_SHARP_,p3__119914_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__119912_SHARP_,p2__119913_SHARP_,p3__119914_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__119915_SHARP_,p2__119916_SHARP_,p3__119917_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__119915_SHARP_,p2__119916_SHARP_,p3__119917_SHARP_);
});
} else {
return (function (p1__119918_SHARP_,p2__119919_SHARP_,p3__119920_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__119918_SHARP_,p2__119919_SHARP_,p3__119920_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__119930 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__119930,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__119930,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__59171__auto___119948 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_119949 = (0);
while(true){
if((i_119949 < n__59171__auto___119948)){
cljs.pprint.prn.call(null);

var G__119950 = (i_119949 + (1));
i_119949 = G__119950;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_119951 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_119951 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__59171__auto___119952 = (cnt_119951 - (1));
var i_119953 = (0);
while(true){
if((i_119953 < n__59171__auto___119952)){
cljs.pprint.prn.call(null);

var G__119954 = (i_119953 + (1));
i_119953 = G__119954;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__59171__auto___119955 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_119956 = (0);
while(true){
if((i_119956 < n__59171__auto___119955)){
cljs.pprint.print.call(null,"\f");

var G__119957 = (i_119956 + (1));
i_119956 = G__119957;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__119921_SHARP_,p2__119922_SHARP_,p3__119923_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__119921_SHARP_,p2__119922_SHARP_,p3__119923_SHARP_);
});
} else {
return (function (p1__119924_SHARP_,p2__119925_SHARP_,p3__119926_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__119924_SHARP_,p2__119925_SHARP_,p3__119926_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__119933 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__119933,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119933,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__119936 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__119936,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119936,(1),null);
var vec__119939 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__119939,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__119939,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__58116__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__58116__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__58116__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__119927_SHARP_,p2__119928_SHARP_,p3__119929_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__119927_SHARP_,p2__119928_SHARP_,p3__119929_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__58116__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__58116__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__58116__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__58116__auto__ = arg1;
if(cljs.core.truth_(and__58116__auto__)){
var and__58116__auto____$1 = arg2;
if(cljs.core.truth_(and__58116__auto____$1)){
return arg3;
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__58116__auto__ = arg1;
if(cljs.core.truth_(and__58116__auto__)){
return arg2;
} else {
return and__58116__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__58128__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__119942 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119942,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119942,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__119945 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__119945,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__119945,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__119958){
var vec__119959 = p__119958;
var s = cljs.core.nth.call(null,vec__119959,(0),null);
var offset = cljs.core.nth.call(null,vec__119959,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__119959,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__119962){
var vec__119963 = p__119962;
var p = cljs.core.nth.call(null,vec__119963,(0),null);
var offset = cljs.core.nth.call(null,vec__119963,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):(((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0)))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__119966){
var vec__119967 = p__119966;
var s__$1 = cljs.core.nth.call(null,vec__119967,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__119967,(1),null);
var flags = cljs.core.nth.call(null,vec__119967,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__58116__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__58116__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__58116__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__58116__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__58116__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__58116__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__58116__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__58116__auto__){
var and__58116__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__58116__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__58116__auto____$1;
}
} else {
return and__58116__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__58487__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__58488__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__58487__auto__ < y__58488__auto__) ? x__58487__auto__ : y__58488__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__119970_SHARP_,p2__119971_SHARP_){
var val = cljs.core.first.call(null,p1__119970_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__119971_SHARP_)),cljs.core.type.call(null,val))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,p2__119971_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__119970_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__59010__auto__ = (function cljs$pprint$map_params_$_iter__119975(s__119976){
return (new cljs.core.LazySeq(null,(function (){
var s__119976__$1 = s__119976;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__119976__$1);
if(temp__6738__auto__){
var s__119976__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__119976__$2)){
var c__59008__auto__ = cljs.core.chunk_first.call(null,s__119976__$2);
var size__59009__auto__ = cljs.core.count.call(null,c__59008__auto__);
var b__119978 = cljs.core.chunk_buffer.call(null,size__59009__auto__);
if((function (){var i__119977 = (0);
while(true){
if((i__119977 < size__59009__auto__)){
var vec__119979 = cljs.core._nth.call(null,c__59008__auto__,i__119977);
var name = cljs.core.nth.call(null,vec__119979,(0),null);
var vec__119982 = cljs.core.nth.call(null,vec__119979,(1),null);
var default$ = cljs.core.nth.call(null,vec__119982,(0),null);
cljs.core.chunk_append.call(null,b__119978,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__119991 = (i__119977 + (1));
i__119977 = G__119991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__119978),cljs$pprint$map_params_$_iter__119975.call(null,cljs.core.chunk_rest.call(null,s__119976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__119978),null);
}
} else {
var vec__119985 = cljs.core.first.call(null,s__119976__$2);
var name = cljs.core.nth.call(null,vec__119985,(0),null);
var vec__119988 = cljs.core.nth.call(null,vec__119985,(1),null);
var default$ = cljs.core.nth.call(null,vec__119988,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__119975.call(null,cljs.core.rest.call(null,s__119976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__59010__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__119972_SHARP_,p2__119973_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__119972_SHARP_,p2__119973_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__119974_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__119974_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__119992 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__119992,(0),null);
var vec__119995 = cljs.core.nth.call(null,vec__119992,(1),null);
var rest = cljs.core.nth.call(null,vec__119995,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__119995,(1),null);
var vec__119998 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__119998,(0),null);
var vec__120001 = cljs.core.nth.call(null,vec__119998,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__120001,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__120001,(1),null);
var flags = cljs.core.nth.call(null,vec__120001,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__58116__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__58116__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__58116__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__120004 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__120004,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__120004,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__120007){
var vec__120008 = p__120007;
var clause_map = cljs.core.nth.call(null,vec__120008,(0),null);
var saw_else = cljs.core.nth.call(null,vec__120008,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__120008,(2),null);
var vec__120011 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__120011,(0),null);
var vec__120014 = cljs.core.nth.call(null,vec__120011,(1),null);
var type = cljs.core.nth.call(null,vec__120014,(0),null);
var right_params = cljs.core.nth.call(null,vec__120014,(1),null);
var else_params = cljs.core.nth.call(null,vec__120014,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__120014,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_120017 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_120017){
return (function (p__120018){
var vec__120019 = p__120018;
var s = cljs.core.nth.call(null,vec__120019,(0),null);
var offset = cljs.core.nth.call(null,vec__120019,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_120017))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_120017;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__58128__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
var or__58128__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__58128__auto____$1)){
return or__58128__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__120022 = cljs.core.next.call(null,format__$1);
format__$1 = G__120022;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__120024 = arguments.length;
switch (G__120024) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not.call(null,stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__58116__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__58116__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__58116__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_120025 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_120025;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__120026 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__120026,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__120026,(1),null);
var vec__120029 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__120029,(0),null);
var offsets = cljs.core.nth.call(null,vec__120029,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__58116__auto__ = macro_char;
if(cljs.core.truth_(and__58116__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__58116__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120033_120036 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120034_120037 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count120035_120038 = (0);
var alis_120039__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count120035_120038 < cljs.core._STAR_print_length_STAR_))){
if(alis_120039__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_120039__$1));

if(cljs.core.next.call(null,alis_120039__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__120040 = (length_count120035_120038 + (1));
var G__120041 = cljs.core.next.call(null,alis_120039__$1);
length_count120035_120038 = G__120040;
alis_120039__$1 = G__120041;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120034_120037;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120033_120036;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120042_120045 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120043_120046 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count120044_120047 = (0);
var aseq_120048 = cljs.core.seq.call(null,avec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count120044_120047 < cljs.core._STAR_print_length_STAR_))){
if(aseq_120048){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_120048));

if(cljs.core.next.call(null,aseq_120048)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__120049 = (length_count120044_120047 + (1));
var G__120050 = cljs.core.next.call(null,aseq_120048);
length_count120044_120047 = G__120049;
aseq_120048 = G__120050;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120043_120046;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120042_120045;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__68605__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120051__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120051 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120052__i = 0, G__120052__a = new Array(arguments.length -  0);
while (G__120052__i < G__120052__a.length) {G__120052__a[G__120052__i] = arguments[G__120052__i + 0]; ++G__120052__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120052__a,0,null);
} 
return G__120051__delegate.call(this,args__68607__auto__);};
G__120051.cljs$lang$maxFixedArity = 0;
G__120051.cljs$lang$applyTo = (function (arglist__120053){
var args__68607__auto__ = cljs.core.seq(arglist__120053);
return G__120051__delegate(args__68607__auto__);
});
G__120051.cljs$core$IFn$_invoke$arity$variadic = G__120051__delegate;
return G__120051;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__120054 = ((!(cljs.core.record_QMARK_.call(null,amap)))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(9804),(9804),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__120054,(0),null);
var lift_map = cljs.core.nth.call(null,vec__120054,(1),null);
var amap__$1 = (function (){var or__58128__auto__ = lift_map;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120057_120062 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120058_120063 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count120059_120064 = (0);
var aseq_120065 = cljs.core.seq.call(null,amap__$1);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count120059_120064 < cljs.core._STAR_print_length_STAR_))){
if(aseq_120065){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120060_120066 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120061_120067 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_120065));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_120065)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120061_120067;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120060_120066;
}}


if(cljs.core.next.call(null,aseq_120065)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__120068 = (length_count120059_120064 + (1));
var G__120069 = cljs.core.next.call(null,aseq_120065);
length_count120059_120064 = G__120068;
aseq_120065 = G__120069;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120058_120063;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120057_120062;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__68605__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120070__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120070 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120071__i = 0, G__120071__a = new Array(arguments.length -  0);
while (G__120071__i < G__120071__a.length) {G__120071__a[G__120071__i] = arguments[G__120071__i + 0]; ++G__120071__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120071__a,0,null);
} 
return G__120070__delegate.call(this,args__68607__auto__);};
G__120070.cljs$lang$maxFixedArity = 0;
G__120070.cljs$lang$applyTo = (function (arglist__120072){
var args__68607__auto__ = cljs.core.seq(arglist__120072);
return G__120070__delegate(args__68607__auto__);
});
G__120070.cljs$core$IFn$_invoke$arity$variadic = G__120070__delegate;
return G__120070;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__58128__auto__ = (function (){var temp__6738__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__6738__auto__)){
var match = temp__6738__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120073_120077 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120074_120078 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__58116__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__58116__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__58116__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120074_120078;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120073_120077;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__68605__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120079__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120079 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120080__i = 0, G__120080__a = new Array(arguments.length -  0);
while (G__120080__i < G__120080__a.length) {G__120080__a[G__120080__i] = arguments[G__120080__i + 0]; ++G__120080__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120080__a,0,null);
} 
return G__120079__delegate.call(this,args__68607__auto__);};
G__120079.cljs$lang$maxFixedArity = 0;
G__120079.cljs$lang$applyTo = (function (arglist__120081){
var args__68607__auto__ = cljs.core.seq(arglist__120081);
return G__120079__delegate(args__68607__auto__);
});
G__120079.cljs$core$IFn$_invoke$arity$variadic = G__120079__delegate;
return G__120079;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__59181__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__59182__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__59183__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__59184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__59185__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__59185__auto__,method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__120083 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__120083,(0),null);
var end = cljs.core.nth.call(null,vec__120083,(1),null);
var vec__120086 = reference;
var seq__120087 = cljs.core.seq.call(null,vec__120086);
var first__120088 = cljs.core.first.call(null,seq__120087);
var seq__120087__$1 = cljs.core.next.call(null,seq__120087);
var keyw = first__120088;
var args = seq__120087__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120089_120099 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120090_120100 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__68605__auto__ = "~w~:i";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args){
return (function() { 
var G__120101__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120101 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120102__i = 0, G__120102__a = new Array(arguments.length -  0);
while (G__120102__i < G__120102__a.length) {G__120102__a[G__120102__i] = arguments[G__120102__i + 0]; ++G__120102__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120102__a,0,null);
} 
return G__120101__delegate.call(this,args__68607__auto__);};
G__120101.cljs$lang$maxFixedArity = 0;
G__120101.cljs$lang$applyTo = (function (arglist__120103){
var args__68607__auto__ = cljs.core.seq(arglist__120103);
return G__120101__delegate(args__68607__auto__);
});
G__120101.cljs$core$IFn$_invoke$arity$variadic = G__120101__delegate;
return G__120101;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args))
})().call(null,keyw);

var args_120104__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_120104__$1)){
(function (){var format_in__68605__auto__ = " ";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (args_120104__$1,format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args){
return (function() { 
var G__120105__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120105 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120106__i = 0, G__120106__a = new Array(arguments.length -  0);
while (G__120106__i < G__120106__a.length) {G__120106__a[G__120106__i] = arguments[G__120106__i + 0]; ++G__120106__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120106__a,0,null);
} 
return G__120105__delegate.call(this,args__68607__auto__);};
G__120105.cljs$lang$maxFixedArity = 0;
G__120105.cljs$lang$applyTo = (function (arglist__120107){
var args__68607__auto__ = cljs.core.seq(arglist__120107);
return G__120105__delegate(args__68607__auto__);
});
G__120105.cljs$core$IFn$_invoke$arity$variadic = G__120105__delegate;
return G__120105;
})()
;
;})(args_120104__$1,format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args))
})().call(null);

var arg_120108 = cljs.core.first.call(null,args_120104__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_120108)){
var vec__120091_120109 = cljs.pprint.brackets.call(null,arg_120108);
var start_120110__$1 = cljs.core.nth.call(null,vec__120091_120109,(0),null);
var end_120111__$1 = cljs.core.nth.call(null,vec__120091_120109,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120094_120112 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120095_120113 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_120110__$1,null,end_120111__$1);

if((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_120108),(3))) && ((cljs.core.second.call(null,arg_120108) instanceof cljs.core.Keyword))){
var vec__120096_120114 = arg_120108;
var ns_120115 = cljs.core.nth.call(null,vec__120096_120114,(0),null);
var kw_120116 = cljs.core.nth.call(null,vec__120096_120114,(1),null);
var lis_120117 = cljs.core.nth.call(null,vec__120096_120114,(2),null);
(function (){var format_in__68605__auto__ = "~w ~w ";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (args_120104__$1,format_in__68605__auto__,cf__68606__auto__,vec__120096_120114,ns_120115,kw_120116,lis_120117,_STAR_current_level_STAR_120094_120112,_STAR_current_length_STAR_120095_120113,vec__120091_120109,start_120110__$1,end_120111__$1,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args){
return (function() { 
var G__120118__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120118 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120119__i = 0, G__120119__a = new Array(arguments.length -  0);
while (G__120119__i < G__120119__a.length) {G__120119__a[G__120119__i] = arguments[G__120119__i + 0]; ++G__120119__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120119__a,0,null);
} 
return G__120118__delegate.call(this,args__68607__auto__);};
G__120118.cljs$lang$maxFixedArity = 0;
G__120118.cljs$lang$applyTo = (function (arglist__120120){
var args__68607__auto__ = cljs.core.seq(arglist__120120);
return G__120118__delegate(args__68607__auto__);
});
G__120118.cljs$core$IFn$_invoke$arity$variadic = G__120118__delegate;
return G__120118;
})()
;
;})(args_120104__$1,format_in__68605__auto__,cf__68606__auto__,vec__120096_120114,ns_120115,kw_120116,lis_120117,_STAR_current_level_STAR_120094_120112,_STAR_current_length_STAR_120095_120113,vec__120091_120109,start_120110__$1,end_120111__$1,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args))
})().call(null,ns_120115,kw_120116);

if(cljs.core.sequential_QMARK_.call(null,lis_120117)){
(function (){var format_in__68605__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_120117))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (args_120104__$1,format_in__68605__auto__,cf__68606__auto__,vec__120096_120114,ns_120115,kw_120116,lis_120117,_STAR_current_level_STAR_120094_120112,_STAR_current_length_STAR_120095_120113,vec__120091_120109,start_120110__$1,end_120111__$1,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args){
return (function() { 
var G__120121__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120121 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120122__i = 0, G__120122__a = new Array(arguments.length -  0);
while (G__120122__i < G__120122__a.length) {G__120122__a[G__120122__i] = arguments[G__120122__i + 0]; ++G__120122__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120122__a,0,null);
} 
return G__120121__delegate.call(this,args__68607__auto__);};
G__120121.cljs$lang$maxFixedArity = 0;
G__120121.cljs$lang$applyTo = (function (arglist__120123){
var args__68607__auto__ = cljs.core.seq(arglist__120123);
return G__120121__delegate(args__68607__auto__);
});
G__120121.cljs$core$IFn$_invoke$arity$variadic = G__120121__delegate;
return G__120121;
})()
;
;})(args_120104__$1,format_in__68605__auto__,cf__68606__auto__,vec__120096_120114,ns_120115,kw_120116,lis_120117,_STAR_current_level_STAR_120094_120112,_STAR_current_length_STAR_120095_120113,vec__120091_120109,start_120110__$1,end_120111__$1,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args))
})().call(null,lis_120117);
} else {
cljs.pprint.write_out.call(null,lis_120117);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__68605__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (args_120104__$1,format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120094_120112,_STAR_current_length_STAR_120095_120113,vec__120091_120109,start_120110__$1,end_120111__$1,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args){
return (function() { 
var G__120124__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120124 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120125__i = 0, G__120125__a = new Array(arguments.length -  0);
while (G__120125__i < G__120125__a.length) {G__120125__a[G__120125__i] = arguments[G__120125__i + 0]; ++G__120125__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120125__a,0,null);
} 
return G__120124__delegate.call(this,args__68607__auto__);};
G__120124.cljs$lang$maxFixedArity = 0;
G__120124.cljs$lang$applyTo = (function (arglist__120126){
var args__68607__auto__ = cljs.core.seq(arglist__120126);
return G__120124__delegate(args__68607__auto__);
});
G__120124.cljs$core$IFn$_invoke$arity$variadic = G__120124__delegate;
return G__120124;
})()
;
;})(args_120104__$1,format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120094_120112,_STAR_current_length_STAR_120095_120113,vec__120091_120109,start_120110__$1,end_120111__$1,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args))
})(),arg_120108);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120095_120113;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120094_120112;
}}


if(cljs.core.next.call(null,args_120104__$1)){
(function (){var format_in__68605__auto__ = "~_";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (args_120104__$1,format_in__68605__auto__,cf__68606__auto__,vec__120091_120109,start_120110__$1,end_120111__$1,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args){
return (function() { 
var G__120127__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120127 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120128__i = 0, G__120128__a = new Array(arguments.length -  0);
while (G__120128__i < G__120128__a.length) {G__120128__a[G__120128__i] = arguments[G__120128__i + 0]; ++G__120128__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120128__a,0,null);
} 
return G__120127__delegate.call(this,args__68607__auto__);};
G__120127.cljs$lang$maxFixedArity = 0;
G__120127.cljs$lang$applyTo = (function (arglist__120129){
var args__68607__auto__ = cljs.core.seq(arglist__120129);
return G__120127__delegate(args__68607__auto__);
});
G__120127.cljs$core$IFn$_invoke$arity$variadic = G__120127__delegate;
return G__120127;
})()
;
;})(args_120104__$1,format_in__68605__auto__,cf__68606__auto__,vec__120091_120109,start_120110__$1,end_120111__$1,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_120108);

if(cljs.core.next.call(null,args_120104__$1)){
(function (){var format_in__68605__auto__ = "~:_";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (args_120104__$1,format_in__68605__auto__,cf__68606__auto__,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args){
return (function() { 
var G__120130__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120130 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120131__i = 0, G__120131__a = new Array(arguments.length -  0);
while (G__120131__i < G__120131__a.length) {G__120131__a[G__120131__i] = arguments[G__120131__i + 0]; ++G__120131__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120131__a,0,null);
} 
return G__120130__delegate.call(this,args__68607__auto__);};
G__120130.cljs$lang$maxFixedArity = 0;
G__120130.cljs$lang$applyTo = (function (arglist__120132){
var args__68607__auto__ = cljs.core.seq(arglist__120132);
return G__120130__delegate(args__68607__auto__);
});
G__120130.cljs$core$IFn$_invoke$arity$variadic = G__120130__delegate;
return G__120130;
})()
;
;})(args_120104__$1,format_in__68605__auto__,cf__68606__auto__,arg_120108,_STAR_current_level_STAR_120089_120099,_STAR_current_length_STAR_120090_120100,vec__120083,start,end,vec__120086,seq__120087,first__120088,seq__120087__$1,keyw,args))
})().call(null);
} else {
}
}

var G__120133 = cljs.core.next.call(null,args_120104__$1);
args_120104__$1 = G__120133;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120090_120100;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120089_120099;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__120134 = alis;
var seq__120135 = cljs.core.seq.call(null,vec__120134);
var first__120136 = cljs.core.first.call(null,seq__120135);
var seq__120135__$1 = cljs.core.next.call(null,seq__120135);
var ns_sym = first__120136;
var first__120136__$1 = cljs.core.first.call(null,seq__120135__$1);
var seq__120135__$2 = cljs.core.next.call(null,seq__120135__$1);
var ns_name = first__120136__$1;
var stuff = seq__120135__$2;
var vec__120137 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__120137,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__120137,(1),null);
var vec__120140 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__120140,(0),null);
var references = cljs.core.nth.call(null,vec__120140,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120143_120145 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120144_120146 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__68605__auto__ = "~w ~1I~@_~w";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120143_120145,_STAR_current_length_STAR_120144_120146,vec__120134,seq__120135,first__120136,seq__120135__$1,ns_sym,first__120136__$1,seq__120135__$2,ns_name,stuff,vec__120137,doc_str,stuff__$1,vec__120140,attr_map,references){
return (function() { 
var G__120147__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120147 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120148__i = 0, G__120148__a = new Array(arguments.length -  0);
while (G__120148__i < G__120148__a.length) {G__120148__a[G__120148__i] = arguments[G__120148__i + 0]; ++G__120148__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120148__a,0,null);
} 
return G__120147__delegate.call(this,args__68607__auto__);};
G__120147.cljs$lang$maxFixedArity = 0;
G__120147.cljs$lang$applyTo = (function (arglist__120149){
var args__68607__auto__ = cljs.core.seq(arglist__120149);
return G__120147__delegate(args__68607__auto__);
});
G__120147.cljs$core$IFn$_invoke$arity$variadic = G__120147__delegate;
return G__120147;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120143_120145,_STAR_current_length_STAR_120144_120146,vec__120134,seq__120135,first__120136,seq__120135__$1,ns_sym,first__120136__$1,seq__120135__$2,ns_name,stuff,vec__120137,doc_str,stuff__$1,vec__120140,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__58128__auto__ = doc_str;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
var or__58128__auto____$1 = attr_map;
if(cljs.core.truth_(or__58128__auto____$1)){
return or__58128__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__68605__auto__ = "~@:_";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120143_120145,_STAR_current_length_STAR_120144_120146,vec__120134,seq__120135,first__120136,seq__120135__$1,ns_sym,first__120136__$1,seq__120135__$2,ns_name,stuff,vec__120137,doc_str,stuff__$1,vec__120140,attr_map,references){
return (function() { 
var G__120150__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120150 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120151__i = 0, G__120151__a = new Array(arguments.length -  0);
while (G__120151__i < G__120151__a.length) {G__120151__a[G__120151__i] = arguments[G__120151__i + 0]; ++G__120151__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120151__a,0,null);
} 
return G__120150__delegate.call(this,args__68607__auto__);};
G__120150.cljs$lang$maxFixedArity = 0;
G__120150.cljs$lang$applyTo = (function (arglist__120152){
var args__68607__auto__ = cljs.core.seq(arglist__120152);
return G__120150__delegate(args__68607__auto__);
});
G__120150.cljs$core$IFn$_invoke$arity$variadic = G__120150__delegate;
return G__120150;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120143_120145,_STAR_current_length_STAR_120144_120146,vec__120134,seq__120135,first__120136,seq__120135__$1,ns_sym,first__120136__$1,seq__120135__$2,ns_name,stuff,vec__120137,doc_str,stuff__$1,vec__120140,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__58128__auto__ = attr_map;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__68605__auto__ = "~w~:[~;~:@_~]";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120143_120145,_STAR_current_length_STAR_120144_120146,vec__120134,seq__120135,first__120136,seq__120135__$1,ns_sym,first__120136__$1,seq__120135__$2,ns_name,stuff,vec__120137,doc_str,stuff__$1,vec__120140,attr_map,references){
return (function() { 
var G__120153__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120153 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120154__i = 0, G__120154__a = new Array(arguments.length -  0);
while (G__120154__i < G__120154__a.length) {G__120154__a[G__120154__i] = arguments[G__120154__i + 0]; ++G__120154__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120154__a,0,null);
} 
return G__120153__delegate.call(this,args__68607__auto__);};
G__120153.cljs$lang$maxFixedArity = 0;
G__120153.cljs$lang$applyTo = (function (arglist__120155){
var args__68607__auto__ = cljs.core.seq(arglist__120155);
return G__120153__delegate(args__68607__auto__);
});
G__120153.cljs$core$IFn$_invoke$arity$variadic = G__120153__delegate;
return G__120153;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120143_120145,_STAR_current_length_STAR_120144_120146,vec__120134,seq__120135,first__120136,seq__120135__$1,ns_sym,first__120136__$1,seq__120135__$2,ns_name,stuff,vec__120137,doc_str,stuff__$1,vec__120140,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_120156__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_120156__$1));

var temp__6738__auto___120157 = cljs.core.next.call(null,references_120156__$1);
if(temp__6738__auto___120157){
var references_120158__$2 = temp__6738__auto___120157;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__120159 = references_120158__$2;
references_120156__$1 = G__120159;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120144_120146;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120143_120145;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__68605__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120160__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120160 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120161__i = 0, G__120161__a = new Array(arguments.length -  0);
while (G__120161__i < G__120161__a.length) {G__120161__a[G__120161__i] = arguments[G__120161__i + 0]; ++G__120161__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120161__a,0,null);
} 
return G__120160__delegate.call(this,args__68607__auto__);};
G__120160.cljs$lang$maxFixedArity = 0;
G__120160.cljs$lang$applyTo = (function (arglist__120162){
var args__68607__auto__ = cljs.core.seq(arglist__120162);
return G__120160__delegate(args__68607__auto__);
});
G__120160.cljs$core$IFn$_invoke$arity$variadic = G__120160__delegate;
return G__120160;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__68605__auto__ = " ~_";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120163__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120163 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120164__i = 0, G__120164__a = new Array(arguments.length -  0);
while (G__120164__i < G__120164__a.length) {G__120164__a[G__120164__i] = arguments[G__120164__i + 0]; ++G__120164__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120164__a,0,null);
} 
return G__120163__delegate.call(this,args__68607__auto__);};
G__120163.cljs$lang$maxFixedArity = 0;
G__120163.cljs$lang$applyTo = (function (arglist__120165){
var args__68607__auto__ = cljs.core.seq(arglist__120165);
return G__120163__delegate(args__68607__auto__);
});
G__120163.cljs$core$IFn$_invoke$arity$variadic = G__120163__delegate;
return G__120163;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})().call(null);
} else {
(function (){var format_in__68605__auto__ = " ~@_";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120166__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120166 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120167__i = 0, G__120167__a = new Array(arguments.length -  0);
while (G__120167__i < G__120167__a.length) {G__120167__a[G__120167__i] = arguments[G__120167__i + 0]; ++G__120167__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120167__a,0,null);
} 
return G__120166__delegate.call(this,args__68607__auto__);};
G__120166.cljs$lang$maxFixedArity = 0;
G__120166.cljs$lang$applyTo = (function (arglist__120168){
var args__68607__auto__ = cljs.core.seq(arglist__120168);
return G__120166__delegate(args__68607__auto__);
});
G__120166.cljs$core$IFn$_invoke$arity$variadic = G__120166__delegate;
return G__120166;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})().call(null);
}

return (function (){var format_in__68605__auto__ = "~{~w~^ ~_~}";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120169__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120169 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120170__i = 0, G__120170__a = new Array(arguments.length -  0);
while (G__120170__i < G__120170__a.length) {G__120170__a[G__120170__i] = arguments[G__120170__i + 0]; ++G__120170__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120170__a,0,null);
} 
return G__120169__delegate.call(this,args__68607__auto__);};
G__120169.cljs$lang$maxFixedArity = 0;
G__120169.cljs$lang$applyTo = (function (arglist__120171){
var args__68607__auto__ = cljs.core.seq(arglist__120171);
return G__120169__delegate(args__68607__auto__);
});
G__120169.cljs$core$IFn$_invoke$arity$variadic = G__120169__delegate;
return G__120169;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__68605__auto__ = " ~_~{~w~^ ~_~}";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120172__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120172 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120173__i = 0, G__120173__a = new Array(arguments.length -  0);
while (G__120173__i < G__120173__a.length) {G__120173__a[G__120173__i] = arguments[G__120173__i + 0]; ++G__120173__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120173__a,0,null);
} 
return G__120172__delegate.call(this,args__68607__auto__);};
G__120172.cljs$lang$maxFixedArity = 0;
G__120172.cljs$lang$applyTo = (function (arglist__120174){
var args__68607__auto__ = cljs.core.seq(arglist__120174);
return G__120172__delegate(args__68607__auto__);
});
G__120172.cljs$core$IFn$_invoke$arity$variadic = G__120172__delegate;
return G__120172;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__120175 = alis;
var seq__120176 = cljs.core.seq.call(null,vec__120175);
var first__120177 = cljs.core.first.call(null,seq__120176);
var seq__120176__$1 = cljs.core.next.call(null,seq__120176);
var defn_sym = first__120177;
var first__120177__$1 = cljs.core.first.call(null,seq__120176__$1);
var seq__120176__$2 = cljs.core.next.call(null,seq__120176__$1);
var defn_name = first__120177__$1;
var stuff = seq__120176__$2;
var vec__120178 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__120178,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__120178,(1),null);
var vec__120181 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__120181,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__120181,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120184_120186 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120185_120187 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__68605__auto__ = "~w ~1I~@_~w";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120184_120186,_STAR_current_length_STAR_120185_120187,vec__120175,seq__120176,first__120177,seq__120176__$1,defn_sym,first__120177__$1,seq__120176__$2,defn_name,stuff,vec__120178,doc_str,stuff__$1,vec__120181,attr_map,stuff__$2){
return (function() { 
var G__120188__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120188 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120189__i = 0, G__120189__a = new Array(arguments.length -  0);
while (G__120189__i < G__120189__a.length) {G__120189__a[G__120189__i] = arguments[G__120189__i + 0]; ++G__120189__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120189__a,0,null);
} 
return G__120188__delegate.call(this,args__68607__auto__);};
G__120188.cljs$lang$maxFixedArity = 0;
G__120188.cljs$lang$applyTo = (function (arglist__120190){
var args__68607__auto__ = cljs.core.seq(arglist__120190);
return G__120188__delegate(args__68607__auto__);
});
G__120188.cljs$core$IFn$_invoke$arity$variadic = G__120188__delegate;
return G__120188;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120184_120186,_STAR_current_length_STAR_120185_120187,vec__120175,seq__120176,first__120177,seq__120176__$1,defn_sym,first__120177__$1,seq__120176__$2,defn_name,stuff,vec__120178,doc_str,stuff__$1,vec__120181,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__68605__auto__ = " ~_~w";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120184_120186,_STAR_current_length_STAR_120185_120187,vec__120175,seq__120176,first__120177,seq__120176__$1,defn_sym,first__120177__$1,seq__120176__$2,defn_name,stuff,vec__120178,doc_str,stuff__$1,vec__120181,attr_map,stuff__$2){
return (function() { 
var G__120191__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120191 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120192__i = 0, G__120192__a = new Array(arguments.length -  0);
while (G__120192__i < G__120192__a.length) {G__120192__a[G__120192__i] = arguments[G__120192__i + 0]; ++G__120192__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120192__a,0,null);
} 
return G__120191__delegate.call(this,args__68607__auto__);};
G__120191.cljs$lang$maxFixedArity = 0;
G__120191.cljs$lang$applyTo = (function (arglist__120193){
var args__68607__auto__ = cljs.core.seq(arglist__120193);
return G__120191__delegate(args__68607__auto__);
});
G__120191.cljs$core$IFn$_invoke$arity$variadic = G__120191__delegate;
return G__120191;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120184_120186,_STAR_current_length_STAR_120185_120187,vec__120175,seq__120176,first__120177,seq__120176__$1,defn_sym,first__120177__$1,seq__120176__$2,defn_name,stuff,vec__120178,doc_str,stuff__$1,vec__120181,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__68605__auto__ = " ~_~w";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120184_120186,_STAR_current_length_STAR_120185_120187,vec__120175,seq__120176,first__120177,seq__120176__$1,defn_sym,first__120177__$1,seq__120176__$2,defn_name,stuff,vec__120178,doc_str,stuff__$1,vec__120181,attr_map,stuff__$2){
return (function() { 
var G__120194__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120194 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120195__i = 0, G__120195__a = new Array(arguments.length -  0);
while (G__120195__i < G__120195__a.length) {G__120195__a[G__120195__i] = arguments[G__120195__i + 0]; ++G__120195__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120195__a,0,null);
} 
return G__120194__delegate.call(this,args__68607__auto__);};
G__120194.cljs$lang$maxFixedArity = 0;
G__120194.cljs$lang$applyTo = (function (arglist__120196){
var args__68607__auto__ = cljs.core.seq(arglist__120196);
return G__120194__delegate(args__68607__auto__);
});
G__120194.cljs$core$IFn$_invoke$arity$variadic = G__120194__delegate;
return G__120194;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120184_120186,_STAR_current_length_STAR_120185_120187,vec__120175,seq__120176,first__120177,seq__120176__$1,defn_sym,first__120177__$1,seq__120176__$2,defn_name,stuff,vec__120178,doc_str,stuff__$1,vec__120181,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__58128__auto__ = doc_str;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__58128__auto__ = doc_str;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120185_120187;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120184_120186;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120197_120202 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120198_120203 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count120199_120204 = (0);
var binding_120205 = binding_vec;
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count120199_120204 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq.call(null,binding_120205)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120200_120206 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120201_120207 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_120205));

if(cljs.core.next.call(null,binding_120205)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_120205));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120201_120207;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120200_120206;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_120205))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__120208 = (length_count120199_120204 + (1));
var G__120209 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_120205));
length_count120199_120204 = G__120208;
binding_120205 = G__120209;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120198_120203;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120197_120202;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120210_120212 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120211_120213 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis)))){
(function (){var format_in__68605__auto__ = "~w ~1I~@_";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120210_120212,_STAR_current_length_STAR_120211_120213,base_sym){
return (function() { 
var G__120214__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120214 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120215__i = 0, G__120215__a = new Array(arguments.length -  0);
while (G__120215__i < G__120215__a.length) {G__120215__a[G__120215__i] = arguments[G__120215__i + 0]; ++G__120215__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120215__a,0,null);
} 
return G__120214__delegate.call(this,args__68607__auto__);};
G__120214.cljs$lang$maxFixedArity = 0;
G__120214.cljs$lang$applyTo = (function (arglist__120216){
var args__68607__auto__ = cljs.core.seq(arglist__120216);
return G__120214__delegate(args__68607__auto__);
});
G__120214.cljs$core$IFn$_invoke$arity$variadic = G__120214__delegate;
return G__120214;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120210_120212,_STAR_current_length_STAR_120211_120213,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__68605__auto__ = " ~_~{~w~^ ~_~}";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120210_120212,_STAR_current_length_STAR_120211_120213,base_sym){
return (function() { 
var G__120217__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120217 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120218__i = 0, G__120218__a = new Array(arguments.length -  0);
while (G__120218__i < G__120218__a.length) {G__120218__a[G__120218__i] = arguments[G__120218__i + 0]; ++G__120218__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120218__a,0,null);
} 
return G__120217__delegate.call(this,args__68607__auto__);};
G__120217.cljs$lang$maxFixedArity = 0;
G__120217.cljs$lang$applyTo = (function (arglist__120219){
var args__68607__auto__ = cljs.core.seq(arglist__120219);
return G__120217__delegate(args__68607__auto__);
});
G__120217.cljs$core$IFn$_invoke$arity$variadic = G__120217__delegate;
return G__120217;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120210_120212,_STAR_current_length_STAR_120211_120213,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120211_120213;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120210_120212;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__68605__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__){
return (function() { 
var G__120220__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120220 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120221__i = 0, G__120221__a = new Array(arguments.length -  0);
while (G__120221__i < G__120221__a.length) {G__120221__a[G__120221__i] = arguments[G__120221__i + 0]; ++G__120221__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120221__a,0,null);
} 
return G__120220__delegate.call(this,args__68607__auto__);};
G__120220.cljs$lang$maxFixedArity = 0;
G__120220.cljs$lang$applyTo = (function (arglist__120222){
var args__68607__auto__ = cljs.core.seq(arglist__120222);
return G__120220__delegate(args__68607__auto__);
});
G__120220.cljs$core$IFn$_invoke$arity$variadic = G__120220__delegate;
return G__120220;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120223_120228 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120224_120229 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count120225_120230 = (0);
var alis_120231__$1 = cljs.core.next.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count120225_120230 < cljs.core._STAR_print_length_STAR_))){
if(alis_120231__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120226_120232 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120227_120233 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_120231__$1));

if(cljs.core.next.call(null,alis_120231__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_120231__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120227_120233;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120226_120232;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_120231__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__120234 = (length_count120225_120230 + (1));
var G__120235 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_120231__$1));
length_count120225_120230 = G__120234;
alis_120231__$1 = G__120235;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120224_120229;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120223_120228;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120236_120241 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120237_120242 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__68605__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120236_120241,_STAR_current_length_STAR_120237_120242){
return (function() { 
var G__120243__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120243 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120244__i = 0, G__120244__a = new Array(arguments.length -  0);
while (G__120244__i < G__120244__a.length) {G__120244__a[G__120244__i] = arguments[G__120244__i + 0]; ++G__120244__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120244__a,0,null);
} 
return G__120243__delegate.call(this,args__68607__auto__);};
G__120243.cljs$lang$maxFixedArity = 0;
G__120243.cljs$lang$applyTo = (function (arglist__120245){
var args__68607__auto__ = cljs.core.seq(arglist__120245);
return G__120243__delegate(args__68607__auto__);
});
G__120243.cljs$core$IFn$_invoke$arity$variadic = G__120243__delegate;
return G__120243;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_current_level_STAR_120236_120241,_STAR_current_length_STAR_120237_120242))
})(),alis);

var length_count120238_120246 = (0);
var alis_120247__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count120238_120246 < cljs.core._STAR_print_length_STAR_))){
if(alis_120247__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120239_120248 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120240_120249 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_120247__$1));

if(cljs.core.next.call(null,alis_120247__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_120247__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120240_120249;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120239_120248;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_120247__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__120250 = (length_count120238_120246 + (1));
var G__120251 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_120247__$1));
length_count120238_120246 = G__120250;
alis_120247__$1 = G__120251;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120237_120242;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120236_120241;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_120254 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_120254,args,nlis){
return (function (p1__120252_SHARP_,p2__120253_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__120252_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__120253_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_120254,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__68605__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__68606__auto__ = ((typeof format_in__68605__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__68605__auto__):format_in__68605__auto__);
return ((function (format_in__68605__auto__,cf__68606__auto__,_STAR_symbol_map_STAR_120254,args,nlis){
return (function() { 
var G__120255__delegate = function (args__68607__auto__){
var navigator__68608__auto__ = cljs.pprint.init_navigator.call(null,args__68607__auto__);
return cljs.pprint.execute_format.call(null,cf__68606__auto__,navigator__68608__auto__);
};
var G__120255 = function (var_args){
var args__68607__auto__ = null;
if (arguments.length > 0) {
var G__120256__i = 0, G__120256__a = new Array(arguments.length -  0);
while (G__120256__i < G__120256__a.length) {G__120256__a[G__120256__i] = arguments[G__120256__i + 0]; ++G__120256__i;}
  args__68607__auto__ = new cljs.core.IndexedSeq(G__120256__a,0,null);
} 
return G__120255__delegate.call(this,args__68607__auto__);};
G__120255.cljs$lang$maxFixedArity = 0;
G__120255.cljs$lang$applyTo = (function (arglist__120257){
var args__68607__auto__ = cljs.core.seq(arglist__120257);
return G__120255__delegate(args__68607__auto__);
});
G__120255.cljs$core$IFn$_invoke$arity$variadic = G__120255__delegate;
return G__120255;
})()
;
;})(format_in__68605__auto__,cf__68606__auto__,_STAR_symbol_map_STAR_120254,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_120254;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_120258_120261 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_120259_120262 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count120260_120263 = (0);
var alis_120264__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count120260_120263 < cljs.core._STAR_print_length_STAR_))){
if(alis_120264__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_120264__$1));

if(cljs.core.next.call(null,alis_120264__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__120265 = (length_count120260_120263 + (1));
var G__120266 = cljs.core.next.call(null,alis_120264__$1);
length_count120260_120263 = G__120265;
alis_120264__$1 = G__120266;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_120259_120262;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_120258_120261;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__59010__auto__ = (function cljs$pprint$two_forms_$_iter__120267(s__120268){
return (new cljs.core.LazySeq(null,(function (){
var s__120268__$1 = s__120268;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__120268__$1);
if(temp__6738__auto__){
var s__120268__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__120268__$2)){
var c__59008__auto__ = cljs.core.chunk_first.call(null,s__120268__$2);
var size__59009__auto__ = cljs.core.count.call(null,c__59008__auto__);
var b__120270 = cljs.core.chunk_buffer.call(null,size__59009__auto__);
if((function (){var i__120269 = (0);
while(true){
if((i__120269 < size__59009__auto__)){
var x = cljs.core._nth.call(null,c__59008__auto__,i__120269);
cljs.core.chunk_append.call(null,b__120270,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__120271 = (i__120269 + (1));
i__120269 = G__120271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__120270),cljs$pprint$two_forms_$_iter__120267.call(null,cljs.core.chunk_rest.call(null,s__120268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__120270),null);
}
} else {
var x = cljs.core.first.call(null,s__120268__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__120267.call(null,cljs.core.rest.call(null,s__120268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__59010__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__120272_SHARP_){
var vec__120273 = p1__120272_SHARP_;
var s = cljs.core.nth.call(null,vec__120273,(0),null);
var f = cljs.core.nth.call(null,vec__120273,(1),null);
if(cljs.core.not.call(null,(function (){var or__58128__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__120272_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__6736__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__6736__auto__)){
var special_form = temp__6736__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__6736__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__6736__auto__)){
var arg_num = temp__6736__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__59181__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__59182__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__59183__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__59184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__59185__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__59185__auto__,method_table__59181__auto__,prefer_table__59182__auto__,method_cache__59183__auto__,cached_hierarchy__59184__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__58480__auto__ = (0);
var y__58481__auto__ = (width - cljs.core.count.call(null,s));
return ((x__58480__auto__ > y__58481__auto__) ? x__58480__auto__ : y__58481__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__120280 = arguments.length;
switch (G__120280) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_120281 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_120281){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_120281){
return (function (p1__120276_SHARP_){
return cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__120276_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_120281))
,rows));
});})(_STAR_print_newline_STAR_120281))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_120281){
return (function (p1__120277_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__120277_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_120281))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_120281){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__59010__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_120281){
return (function cljs$pprint$iter__120282(s__120283){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_120281){
return (function (){
var s__120283__$1 = s__120283;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__120283__$1);
if(temp__6738__auto__){
var s__120283__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__120283__$2)){
var c__59008__auto__ = cljs.core.chunk_first.call(null,s__120283__$2);
var size__59009__auto__ = cljs.core.count.call(null,c__59008__auto__);
var b__120285 = cljs.core.chunk_buffer.call(null,size__59009__auto__);
if((function (){var i__120284 = (0);
while(true){
if((i__120284 < size__59009__auto__)){
var vec__120286 = cljs.core._nth.call(null,c__59008__auto__,i__120284);
var col = cljs.core.nth.call(null,vec__120286,(0),null);
var width = cljs.core.nth.call(null,vec__120286,(1),null);
cljs.core.chunk_append.call(null,b__120285,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__120297 = (i__120284 + (1));
i__120284 = G__120297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__120285),cljs$pprint$iter__120282.call(null,cljs.core.chunk_rest.call(null,s__120283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__120285),null);
}
} else {
var vec__120289 = cljs.core.first.call(null,s__120283__$2);
var col = cljs.core.nth.call(null,vec__120289,(0),null);
var width = cljs.core.nth.call(null,vec__120289,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__120282.call(null,cljs.core.rest.call(null,s__120283__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_120281))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_120281))
;
return iter__59010__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__59010__auto__,widths,spacers,_STAR_print_newline_STAR_120281){
return (function (p1__120278_SHARP_){
return cljs.core.get.call(null,row,p1__120278_SHARP_);
});})(iter__59010__auto__,widths,spacers,_STAR_print_newline_STAR_120281))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_120281))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__120292 = cljs.core.seq.call(null,rows);
var chunk__120293 = null;
var count__120294 = (0);
var i__120295 = (0);
while(true){
if((i__120295 < count__120294)){
var row = cljs.core._nth.call(null,chunk__120293,i__120295);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__120298 = seq__120292;
var G__120299 = chunk__120293;
var G__120300 = count__120294;
var G__120301 = (i__120295 + (1));
seq__120292 = G__120298;
chunk__120293 = G__120299;
count__120294 = G__120300;
i__120295 = G__120301;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__120292);
if(temp__6738__auto__){
var seq__120292__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120292__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__120292__$1);
var G__120302 = cljs.core.chunk_rest.call(null,seq__120292__$1);
var G__120303 = c__59059__auto__;
var G__120304 = cljs.core.count.call(null,c__59059__auto__);
var G__120305 = (0);
seq__120292 = G__120302;
chunk__120293 = G__120303;
count__120294 = G__120304;
i__120295 = G__120305;
continue;
} else {
var row = cljs.core.first.call(null,seq__120292__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__120306 = cljs.core.next.call(null,seq__120292__$1);
var G__120307 = null;
var G__120308 = (0);
var G__120309 = (0);
seq__120292 = G__120306;
chunk__120293 = G__120307;
count__120294 = G__120308;
i__120295 = G__120309;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_120281;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map?rel=1505927835827
