// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23455){
var map__23456 = p__23455;
var map__23456__$1 = ((((!((map__23456 == null)))?((((map__23456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23456):map__23456);
var m = map__23456__$1;
var n = cljs.core.get.call(null,map__23456__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23456__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__23458_23480 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23459_23481 = null;
var count__23460_23482 = (0);
var i__23461_23483 = (0);
while(true){
if((i__23461_23483 < count__23460_23482)){
var f_23484 = cljs.core._nth.call(null,chunk__23459_23481,i__23461_23483);
cljs.core.println.call(null,"  ",f_23484);

var G__23485 = seq__23458_23480;
var G__23486 = chunk__23459_23481;
var G__23487 = count__23460_23482;
var G__23488 = (i__23461_23483 + (1));
seq__23458_23480 = G__23485;
chunk__23459_23481 = G__23486;
count__23460_23482 = G__23487;
i__23461_23483 = G__23488;
continue;
} else {
var temp__6738__auto___23489 = cljs.core.seq.call(null,seq__23458_23480);
if(temp__6738__auto___23489){
var seq__23458_23490__$1 = temp__6738__auto___23489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23458_23490__$1)){
var c__10741__auto___23491 = cljs.core.chunk_first.call(null,seq__23458_23490__$1);
var G__23492 = cljs.core.chunk_rest.call(null,seq__23458_23490__$1);
var G__23493 = c__10741__auto___23491;
var G__23494 = cljs.core.count.call(null,c__10741__auto___23491);
var G__23495 = (0);
seq__23458_23480 = G__23492;
chunk__23459_23481 = G__23493;
count__23460_23482 = G__23494;
i__23461_23483 = G__23495;
continue;
} else {
var f_23496 = cljs.core.first.call(null,seq__23458_23490__$1);
cljs.core.println.call(null,"  ",f_23496);

var G__23497 = cljs.core.next.call(null,seq__23458_23490__$1);
var G__23498 = null;
var G__23499 = (0);
var G__23500 = (0);
seq__23458_23480 = G__23497;
chunk__23459_23481 = G__23498;
count__23460_23482 = G__23499;
i__23461_23483 = G__23500;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23501 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23501);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23501)))?cljs.core.second.call(null,arglists_23501):arglists_23501));
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
var seq__23462_23502 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23463_23503 = null;
var count__23464_23504 = (0);
var i__23465_23505 = (0);
while(true){
if((i__23465_23505 < count__23464_23504)){
var vec__23466_23506 = cljs.core._nth.call(null,chunk__23463_23503,i__23465_23505);
var name_23507 = cljs.core.nth.call(null,vec__23466_23506,(0),null);
var map__23469_23508 = cljs.core.nth.call(null,vec__23466_23506,(1),null);
var map__23469_23509__$1 = ((((!((map__23469_23508 == null)))?((((map__23469_23508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23469_23508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23469_23508):map__23469_23508);
var doc_23510 = cljs.core.get.call(null,map__23469_23509__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23511 = cljs.core.get.call(null,map__23469_23509__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23507);

cljs.core.println.call(null," ",arglists_23511);

if(cljs.core.truth_(doc_23510)){
cljs.core.println.call(null," ",doc_23510);
} else {
}

var G__23512 = seq__23462_23502;
var G__23513 = chunk__23463_23503;
var G__23514 = count__23464_23504;
var G__23515 = (i__23465_23505 + (1));
seq__23462_23502 = G__23512;
chunk__23463_23503 = G__23513;
count__23464_23504 = G__23514;
i__23465_23505 = G__23515;
continue;
} else {
var temp__6738__auto___23516 = cljs.core.seq.call(null,seq__23462_23502);
if(temp__6738__auto___23516){
var seq__23462_23517__$1 = temp__6738__auto___23516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23462_23517__$1)){
var c__10741__auto___23518 = cljs.core.chunk_first.call(null,seq__23462_23517__$1);
var G__23519 = cljs.core.chunk_rest.call(null,seq__23462_23517__$1);
var G__23520 = c__10741__auto___23518;
var G__23521 = cljs.core.count.call(null,c__10741__auto___23518);
var G__23522 = (0);
seq__23462_23502 = G__23519;
chunk__23463_23503 = G__23520;
count__23464_23504 = G__23521;
i__23465_23505 = G__23522;
continue;
} else {
var vec__23471_23523 = cljs.core.first.call(null,seq__23462_23517__$1);
var name_23524 = cljs.core.nth.call(null,vec__23471_23523,(0),null);
var map__23474_23525 = cljs.core.nth.call(null,vec__23471_23523,(1),null);
var map__23474_23526__$1 = ((((!((map__23474_23525 == null)))?((((map__23474_23525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23474_23525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23474_23525):map__23474_23525);
var doc_23527 = cljs.core.get.call(null,map__23474_23526__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23528 = cljs.core.get.call(null,map__23474_23526__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23524);

cljs.core.println.call(null," ",arglists_23528);

if(cljs.core.truth_(doc_23527)){
cljs.core.println.call(null," ",doc_23527);
} else {
}

var G__23529 = cljs.core.next.call(null,seq__23462_23517__$1);
var G__23530 = null;
var G__23531 = (0);
var G__23532 = (0);
seq__23462_23502 = G__23529;
chunk__23463_23503 = G__23530;
count__23464_23504 = G__23531;
i__23465_23505 = G__23532;
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

var seq__23476 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23477 = null;
var count__23478 = (0);
var i__23479 = (0);
while(true){
if((i__23479 < count__23478)){
var role = cljs.core._nth.call(null,chunk__23477,i__23479);
var temp__6738__auto___23533__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___23533__$1)){
var spec_23534 = temp__6738__auto___23533__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23534));
} else {
}

var G__23535 = seq__23476;
var G__23536 = chunk__23477;
var G__23537 = count__23478;
var G__23538 = (i__23479 + (1));
seq__23476 = G__23535;
chunk__23477 = G__23536;
count__23478 = G__23537;
i__23479 = G__23538;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__23476);
if(temp__6738__auto____$1){
var seq__23476__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23476__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__23476__$1);
var G__23539 = cljs.core.chunk_rest.call(null,seq__23476__$1);
var G__23540 = c__10741__auto__;
var G__23541 = cljs.core.count.call(null,c__10741__auto__);
var G__23542 = (0);
seq__23476 = G__23539;
chunk__23477 = G__23540;
count__23478 = G__23541;
i__23479 = G__23542;
continue;
} else {
var role = cljs.core.first.call(null,seq__23476__$1);
var temp__6738__auto___23543__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___23543__$2)){
var spec_23544 = temp__6738__auto___23543__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23544));
} else {
}

var G__23545 = cljs.core.next.call(null,seq__23476__$1);
var G__23546 = null;
var G__23547 = (0);
var G__23548 = (0);
seq__23476 = G__23545;
chunk__23477 = G__23546;
count__23478 = G__23547;
i__23479 = G__23548;
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

//# sourceMappingURL=repl.js.map?rel=1504914136255
