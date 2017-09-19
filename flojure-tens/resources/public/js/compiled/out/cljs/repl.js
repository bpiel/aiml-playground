// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23462){
var map__23463 = p__23462;
var map__23463__$1 = ((((!((map__23463 == null)))?((((map__23463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23463):map__23463);
var m = map__23463__$1;
var n = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__23465_23487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23466_23488 = null;
var count__23467_23489 = (0);
var i__23468_23490 = (0);
while(true){
if((i__23468_23490 < count__23467_23489)){
var f_23491 = cljs.core._nth.call(null,chunk__23466_23488,i__23468_23490);
cljs.core.println.call(null,"  ",f_23491);

var G__23492 = seq__23465_23487;
var G__23493 = chunk__23466_23488;
var G__23494 = count__23467_23489;
var G__23495 = (i__23468_23490 + (1));
seq__23465_23487 = G__23492;
chunk__23466_23488 = G__23493;
count__23467_23489 = G__23494;
i__23468_23490 = G__23495;
continue;
} else {
var temp__6738__auto___23496 = cljs.core.seq.call(null,seq__23465_23487);
if(temp__6738__auto___23496){
var seq__23465_23497__$1 = temp__6738__auto___23496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23465_23497__$1)){
var c__10741__auto___23498 = cljs.core.chunk_first.call(null,seq__23465_23497__$1);
var G__23499 = cljs.core.chunk_rest.call(null,seq__23465_23497__$1);
var G__23500 = c__10741__auto___23498;
var G__23501 = cljs.core.count.call(null,c__10741__auto___23498);
var G__23502 = (0);
seq__23465_23487 = G__23499;
chunk__23466_23488 = G__23500;
count__23467_23489 = G__23501;
i__23468_23490 = G__23502;
continue;
} else {
var f_23503 = cljs.core.first.call(null,seq__23465_23497__$1);
cljs.core.println.call(null,"  ",f_23503);

var G__23504 = cljs.core.next.call(null,seq__23465_23497__$1);
var G__23505 = null;
var G__23506 = (0);
var G__23507 = (0);
seq__23465_23487 = G__23504;
chunk__23466_23488 = G__23505;
count__23467_23489 = G__23506;
i__23468_23490 = G__23507;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23508 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23508);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23508)))?cljs.core.second.call(null,arglists_23508):arglists_23508));
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
var seq__23469_23509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23470_23510 = null;
var count__23471_23511 = (0);
var i__23472_23512 = (0);
while(true){
if((i__23472_23512 < count__23471_23511)){
var vec__23473_23513 = cljs.core._nth.call(null,chunk__23470_23510,i__23472_23512);
var name_23514 = cljs.core.nth.call(null,vec__23473_23513,(0),null);
var map__23476_23515 = cljs.core.nth.call(null,vec__23473_23513,(1),null);
var map__23476_23516__$1 = ((((!((map__23476_23515 == null)))?((((map__23476_23515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23476_23515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23476_23515):map__23476_23515);
var doc_23517 = cljs.core.get.call(null,map__23476_23516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23518 = cljs.core.get.call(null,map__23476_23516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23514);

cljs.core.println.call(null," ",arglists_23518);

if(cljs.core.truth_(doc_23517)){
cljs.core.println.call(null," ",doc_23517);
} else {
}

var G__23519 = seq__23469_23509;
var G__23520 = chunk__23470_23510;
var G__23521 = count__23471_23511;
var G__23522 = (i__23472_23512 + (1));
seq__23469_23509 = G__23519;
chunk__23470_23510 = G__23520;
count__23471_23511 = G__23521;
i__23472_23512 = G__23522;
continue;
} else {
var temp__6738__auto___23523 = cljs.core.seq.call(null,seq__23469_23509);
if(temp__6738__auto___23523){
var seq__23469_23524__$1 = temp__6738__auto___23523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23469_23524__$1)){
var c__10741__auto___23525 = cljs.core.chunk_first.call(null,seq__23469_23524__$1);
var G__23526 = cljs.core.chunk_rest.call(null,seq__23469_23524__$1);
var G__23527 = c__10741__auto___23525;
var G__23528 = cljs.core.count.call(null,c__10741__auto___23525);
var G__23529 = (0);
seq__23469_23509 = G__23526;
chunk__23470_23510 = G__23527;
count__23471_23511 = G__23528;
i__23472_23512 = G__23529;
continue;
} else {
var vec__23478_23530 = cljs.core.first.call(null,seq__23469_23524__$1);
var name_23531 = cljs.core.nth.call(null,vec__23478_23530,(0),null);
var map__23481_23532 = cljs.core.nth.call(null,vec__23478_23530,(1),null);
var map__23481_23533__$1 = ((((!((map__23481_23532 == null)))?((((map__23481_23532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23481_23532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23481_23532):map__23481_23532);
var doc_23534 = cljs.core.get.call(null,map__23481_23533__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23535 = cljs.core.get.call(null,map__23481_23533__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23531);

cljs.core.println.call(null," ",arglists_23535);

if(cljs.core.truth_(doc_23534)){
cljs.core.println.call(null," ",doc_23534);
} else {
}

var G__23536 = cljs.core.next.call(null,seq__23469_23524__$1);
var G__23537 = null;
var G__23538 = (0);
var G__23539 = (0);
seq__23469_23509 = G__23536;
chunk__23470_23510 = G__23537;
count__23471_23511 = G__23538;
i__23472_23512 = G__23539;
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

var seq__23483 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23484 = null;
var count__23485 = (0);
var i__23486 = (0);
while(true){
if((i__23486 < count__23485)){
var role = cljs.core._nth.call(null,chunk__23484,i__23486);
var temp__6738__auto___23540__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___23540__$1)){
var spec_23541 = temp__6738__auto___23540__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23541));
} else {
}

var G__23542 = seq__23483;
var G__23543 = chunk__23484;
var G__23544 = count__23485;
var G__23545 = (i__23486 + (1));
seq__23483 = G__23542;
chunk__23484 = G__23543;
count__23485 = G__23544;
i__23486 = G__23545;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__23483);
if(temp__6738__auto____$1){
var seq__23483__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23483__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__23483__$1);
var G__23546 = cljs.core.chunk_rest.call(null,seq__23483__$1);
var G__23547 = c__10741__auto__;
var G__23548 = cljs.core.count.call(null,c__10741__auto__);
var G__23549 = (0);
seq__23483 = G__23546;
chunk__23484 = G__23547;
count__23485 = G__23548;
i__23486 = G__23549;
continue;
} else {
var role = cljs.core.first.call(null,seq__23483__$1);
var temp__6738__auto___23550__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___23550__$2)){
var spec_23551 = temp__6738__auto___23550__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23551));
} else {
}

var G__23552 = cljs.core.next.call(null,seq__23483__$1);
var G__23553 = null;
var G__23554 = (0);
var G__23555 = (0);
seq__23483 = G__23552;
chunk__23484 = G__23553;
count__23485 = G__23554;
i__23486 = G__23555;
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

//# sourceMappingURL=repl.js.map?rel=1505834887650
