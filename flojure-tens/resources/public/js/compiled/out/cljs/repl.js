// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16358){
var map__16359 = p__16358;
var map__16359__$1 = ((((!((map__16359 == null)))?((((map__16359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16359):map__16359);
var m = map__16359__$1;
var n = cljs.core.get.call(null,map__16359__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto__)){
var ns = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16361_16383 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16362_16384 = null;
var count__16363_16385 = (0);
var i__16364_16386 = (0);
while(true){
if((i__16364_16386 < count__16363_16385)){
var f_16387 = cljs.core._nth.call(null,chunk__16362_16384,i__16364_16386);
cljs.core.println.call(null,"  ",f_16387);

var G__16388 = seq__16361_16383;
var G__16389 = chunk__16362_16384;
var G__16390 = count__16363_16385;
var G__16391 = (i__16364_16386 + (1));
seq__16361_16383 = G__16388;
chunk__16362_16384 = G__16389;
count__16363_16385 = G__16390;
i__16364_16386 = G__16391;
continue;
} else {
var temp__6738__auto___16392 = cljs.core.seq.call(null,seq__16361_16383);
if(temp__6738__auto___16392){
var seq__16361_16393__$1 = temp__6738__auto___16392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16361_16393__$1)){
var c__10741__auto___16394 = cljs.core.chunk_first.call(null,seq__16361_16393__$1);
var G__16395 = cljs.core.chunk_rest.call(null,seq__16361_16393__$1);
var G__16396 = c__10741__auto___16394;
var G__16397 = cljs.core.count.call(null,c__10741__auto___16394);
var G__16398 = (0);
seq__16361_16383 = G__16395;
chunk__16362_16384 = G__16396;
count__16363_16385 = G__16397;
i__16364_16386 = G__16398;
continue;
} else {
var f_16399 = cljs.core.first.call(null,seq__16361_16393__$1);
cljs.core.println.call(null,"  ",f_16399);

var G__16400 = cljs.core.next.call(null,seq__16361_16393__$1);
var G__16401 = null;
var G__16402 = (0);
var G__16403 = (0);
seq__16361_16383 = G__16400;
chunk__16362_16384 = G__16401;
count__16363_16385 = G__16402;
i__16364_16386 = G__16403;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16404 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16404);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16404)))?cljs.core.second.call(null,arglists_16404):arglists_16404));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16365_16405 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16366_16406 = null;
var count__16367_16407 = (0);
var i__16368_16408 = (0);
while(true){
if((i__16368_16408 < count__16367_16407)){
var vec__16369_16409 = cljs.core._nth.call(null,chunk__16366_16406,i__16368_16408);
var name_16410 = cljs.core.nth.call(null,vec__16369_16409,(0),null);
var map__16372_16411 = cljs.core.nth.call(null,vec__16369_16409,(1),null);
var map__16372_16412__$1 = ((((!((map__16372_16411 == null)))?((((map__16372_16411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16372_16411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16372_16411):map__16372_16411);
var doc_16413 = cljs.core.get.call(null,map__16372_16412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16414 = cljs.core.get.call(null,map__16372_16412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16410);

cljs.core.println.call(null," ",arglists_16414);

if(cljs.core.truth_(doc_16413)){
cljs.core.println.call(null," ",doc_16413);
} else {
}

var G__16415 = seq__16365_16405;
var G__16416 = chunk__16366_16406;
var G__16417 = count__16367_16407;
var G__16418 = (i__16368_16408 + (1));
seq__16365_16405 = G__16415;
chunk__16366_16406 = G__16416;
count__16367_16407 = G__16417;
i__16368_16408 = G__16418;
continue;
} else {
var temp__6738__auto___16419 = cljs.core.seq.call(null,seq__16365_16405);
if(temp__6738__auto___16419){
var seq__16365_16420__$1 = temp__6738__auto___16419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16365_16420__$1)){
var c__10741__auto___16421 = cljs.core.chunk_first.call(null,seq__16365_16420__$1);
var G__16422 = cljs.core.chunk_rest.call(null,seq__16365_16420__$1);
var G__16423 = c__10741__auto___16421;
var G__16424 = cljs.core.count.call(null,c__10741__auto___16421);
var G__16425 = (0);
seq__16365_16405 = G__16422;
chunk__16366_16406 = G__16423;
count__16367_16407 = G__16424;
i__16368_16408 = G__16425;
continue;
} else {
var vec__16374_16426 = cljs.core.first.call(null,seq__16365_16420__$1);
var name_16427 = cljs.core.nth.call(null,vec__16374_16426,(0),null);
var map__16377_16428 = cljs.core.nth.call(null,vec__16374_16426,(1),null);
var map__16377_16429__$1 = ((((!((map__16377_16428 == null)))?((((map__16377_16428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16377_16428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16377_16428):map__16377_16428);
var doc_16430 = cljs.core.get.call(null,map__16377_16429__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16431 = cljs.core.get.call(null,map__16377_16429__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16427);

cljs.core.println.call(null," ",arglists_16431);

if(cljs.core.truth_(doc_16430)){
cljs.core.println.call(null," ",doc_16430);
} else {
}

var G__16432 = cljs.core.next.call(null,seq__16365_16420__$1);
var G__16433 = null;
var G__16434 = (0);
var G__16435 = (0);
seq__16365_16405 = G__16432;
chunk__16366_16406 = G__16433;
count__16367_16407 = G__16434;
i__16368_16408 = G__16435;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6738__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6738__auto__)){
var fnspec = temp__6738__auto__;
cljs.core.print.call(null,"Spec");

var seq__16379 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16380 = null;
var count__16381 = (0);
var i__16382 = (0);
while(true){
if((i__16382 < count__16381)){
var role = cljs.core._nth.call(null,chunk__16380,i__16382);
var temp__6738__auto___16436__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___16436__$1)){
var spec_16437 = temp__6738__auto___16436__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16437));
} else {
}

var G__16438 = seq__16379;
var G__16439 = chunk__16380;
var G__16440 = count__16381;
var G__16441 = (i__16382 + (1));
seq__16379 = G__16438;
chunk__16380 = G__16439;
count__16381 = G__16440;
i__16382 = G__16441;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__16379);
if(temp__6738__auto____$1){
var seq__16379__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16379__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__16379__$1);
var G__16442 = cljs.core.chunk_rest.call(null,seq__16379__$1);
var G__16443 = c__10741__auto__;
var G__16444 = cljs.core.count.call(null,c__10741__auto__);
var G__16445 = (0);
seq__16379 = G__16442;
chunk__16380 = G__16443;
count__16381 = G__16444;
i__16382 = G__16445;
continue;
} else {
var role = cljs.core.first.call(null,seq__16379__$1);
var temp__6738__auto___16446__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___16446__$2)){
var spec_16447 = temp__6738__auto___16446__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16447));
} else {
}

var G__16448 = cljs.core.next.call(null,seq__16379__$1);
var G__16449 = null;
var G__16450 = (0);
var G__16451 = (0);
seq__16379 = G__16448;
chunk__16380 = G__16449;
count__16381 = G__16450;
i__16382 = G__16451;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1505782741001
