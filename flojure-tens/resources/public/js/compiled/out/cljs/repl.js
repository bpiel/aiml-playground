// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23456){
var map__23457 = p__23456;
var map__23457__$1 = ((((!((map__23457 == null)))?((((map__23457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23457):map__23457);
var m = map__23457__$1;
var n = cljs.core.get.call(null,map__23457__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23457__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__23459_23481 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23460_23482 = null;
var count__23461_23483 = (0);
var i__23462_23484 = (0);
while(true){
if((i__23462_23484 < count__23461_23483)){
var f_23485 = cljs.core._nth.call(null,chunk__23460_23482,i__23462_23484);
cljs.core.println.call(null,"  ",f_23485);

var G__23486 = seq__23459_23481;
var G__23487 = chunk__23460_23482;
var G__23488 = count__23461_23483;
var G__23489 = (i__23462_23484 + (1));
seq__23459_23481 = G__23486;
chunk__23460_23482 = G__23487;
count__23461_23483 = G__23488;
i__23462_23484 = G__23489;
continue;
} else {
var temp__6738__auto___23490 = cljs.core.seq.call(null,seq__23459_23481);
if(temp__6738__auto___23490){
var seq__23459_23491__$1 = temp__6738__auto___23490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23459_23491__$1)){
var c__10741__auto___23492 = cljs.core.chunk_first.call(null,seq__23459_23491__$1);
var G__23493 = cljs.core.chunk_rest.call(null,seq__23459_23491__$1);
var G__23494 = c__10741__auto___23492;
var G__23495 = cljs.core.count.call(null,c__10741__auto___23492);
var G__23496 = (0);
seq__23459_23481 = G__23493;
chunk__23460_23482 = G__23494;
count__23461_23483 = G__23495;
i__23462_23484 = G__23496;
continue;
} else {
var f_23497 = cljs.core.first.call(null,seq__23459_23491__$1);
cljs.core.println.call(null,"  ",f_23497);

var G__23498 = cljs.core.next.call(null,seq__23459_23491__$1);
var G__23499 = null;
var G__23500 = (0);
var G__23501 = (0);
seq__23459_23481 = G__23498;
chunk__23460_23482 = G__23499;
count__23461_23483 = G__23500;
i__23462_23484 = G__23501;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23502 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23502);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23502)))?cljs.core.second.call(null,arglists_23502):arglists_23502));
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
var seq__23463_23503 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23464_23504 = null;
var count__23465_23505 = (0);
var i__23466_23506 = (0);
while(true){
if((i__23466_23506 < count__23465_23505)){
var vec__23467_23507 = cljs.core._nth.call(null,chunk__23464_23504,i__23466_23506);
var name_23508 = cljs.core.nth.call(null,vec__23467_23507,(0),null);
var map__23470_23509 = cljs.core.nth.call(null,vec__23467_23507,(1),null);
var map__23470_23510__$1 = ((((!((map__23470_23509 == null)))?((((map__23470_23509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23470_23509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23470_23509):map__23470_23509);
var doc_23511 = cljs.core.get.call(null,map__23470_23510__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23512 = cljs.core.get.call(null,map__23470_23510__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23508);

cljs.core.println.call(null," ",arglists_23512);

if(cljs.core.truth_(doc_23511)){
cljs.core.println.call(null," ",doc_23511);
} else {
}

var G__23513 = seq__23463_23503;
var G__23514 = chunk__23464_23504;
var G__23515 = count__23465_23505;
var G__23516 = (i__23466_23506 + (1));
seq__23463_23503 = G__23513;
chunk__23464_23504 = G__23514;
count__23465_23505 = G__23515;
i__23466_23506 = G__23516;
continue;
} else {
var temp__6738__auto___23517 = cljs.core.seq.call(null,seq__23463_23503);
if(temp__6738__auto___23517){
var seq__23463_23518__$1 = temp__6738__auto___23517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23463_23518__$1)){
var c__10741__auto___23519 = cljs.core.chunk_first.call(null,seq__23463_23518__$1);
var G__23520 = cljs.core.chunk_rest.call(null,seq__23463_23518__$1);
var G__23521 = c__10741__auto___23519;
var G__23522 = cljs.core.count.call(null,c__10741__auto___23519);
var G__23523 = (0);
seq__23463_23503 = G__23520;
chunk__23464_23504 = G__23521;
count__23465_23505 = G__23522;
i__23466_23506 = G__23523;
continue;
} else {
var vec__23472_23524 = cljs.core.first.call(null,seq__23463_23518__$1);
var name_23525 = cljs.core.nth.call(null,vec__23472_23524,(0),null);
var map__23475_23526 = cljs.core.nth.call(null,vec__23472_23524,(1),null);
var map__23475_23527__$1 = ((((!((map__23475_23526 == null)))?((((map__23475_23526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23475_23526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23475_23526):map__23475_23526);
var doc_23528 = cljs.core.get.call(null,map__23475_23527__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23529 = cljs.core.get.call(null,map__23475_23527__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23525);

cljs.core.println.call(null," ",arglists_23529);

if(cljs.core.truth_(doc_23528)){
cljs.core.println.call(null," ",doc_23528);
} else {
}

var G__23530 = cljs.core.next.call(null,seq__23463_23518__$1);
var G__23531 = null;
var G__23532 = (0);
var G__23533 = (0);
seq__23463_23503 = G__23530;
chunk__23464_23504 = G__23531;
count__23465_23505 = G__23532;
i__23466_23506 = G__23533;
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

var seq__23477 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23478 = null;
var count__23479 = (0);
var i__23480 = (0);
while(true){
if((i__23480 < count__23479)){
var role = cljs.core._nth.call(null,chunk__23478,i__23480);
var temp__6738__auto___23534__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___23534__$1)){
var spec_23535 = temp__6738__auto___23534__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23535));
} else {
}

var G__23536 = seq__23477;
var G__23537 = chunk__23478;
var G__23538 = count__23479;
var G__23539 = (i__23480 + (1));
seq__23477 = G__23536;
chunk__23478 = G__23537;
count__23479 = G__23538;
i__23480 = G__23539;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__23477);
if(temp__6738__auto____$1){
var seq__23477__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23477__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__23477__$1);
var G__23540 = cljs.core.chunk_rest.call(null,seq__23477__$1);
var G__23541 = c__10741__auto__;
var G__23542 = cljs.core.count.call(null,c__10741__auto__);
var G__23543 = (0);
seq__23477 = G__23540;
chunk__23478 = G__23541;
count__23479 = G__23542;
i__23480 = G__23543;
continue;
} else {
var role = cljs.core.first.call(null,seq__23477__$1);
var temp__6738__auto___23544__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___23544__$2)){
var spec_23545 = temp__6738__auto___23544__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23545));
} else {
}

var G__23546 = cljs.core.next.call(null,seq__23477__$1);
var G__23547 = null;
var G__23548 = (0);
var G__23549 = (0);
seq__23477 = G__23546;
chunk__23478 = G__23547;
count__23479 = G__23548;
i__23480 = G__23549;
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

//# sourceMappingURL=repl.js.map?rel=1505319633932
