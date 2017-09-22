// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23481){
var map__23482 = p__23481;
var map__23482__$1 = ((((!((map__23482 == null)))?((((map__23482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23482):map__23482);
var m = map__23482__$1;
var n = cljs.core.get.call(null,map__23482__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__23484_23506 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23485_23507 = null;
var count__23486_23508 = (0);
var i__23487_23509 = (0);
while(true){
if((i__23487_23509 < count__23486_23508)){
var f_23510 = cljs.core._nth.call(null,chunk__23485_23507,i__23487_23509);
cljs.core.println.call(null,"  ",f_23510);

var G__23511 = seq__23484_23506;
var G__23512 = chunk__23485_23507;
var G__23513 = count__23486_23508;
var G__23514 = (i__23487_23509 + (1));
seq__23484_23506 = G__23511;
chunk__23485_23507 = G__23512;
count__23486_23508 = G__23513;
i__23487_23509 = G__23514;
continue;
} else {
var temp__6738__auto___23515 = cljs.core.seq.call(null,seq__23484_23506);
if(temp__6738__auto___23515){
var seq__23484_23516__$1 = temp__6738__auto___23515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23484_23516__$1)){
var c__10741__auto___23517 = cljs.core.chunk_first.call(null,seq__23484_23516__$1);
var G__23518 = cljs.core.chunk_rest.call(null,seq__23484_23516__$1);
var G__23519 = c__10741__auto___23517;
var G__23520 = cljs.core.count.call(null,c__10741__auto___23517);
var G__23521 = (0);
seq__23484_23506 = G__23518;
chunk__23485_23507 = G__23519;
count__23486_23508 = G__23520;
i__23487_23509 = G__23521;
continue;
} else {
var f_23522 = cljs.core.first.call(null,seq__23484_23516__$1);
cljs.core.println.call(null,"  ",f_23522);

var G__23523 = cljs.core.next.call(null,seq__23484_23516__$1);
var G__23524 = null;
var G__23525 = (0);
var G__23526 = (0);
seq__23484_23506 = G__23523;
chunk__23485_23507 = G__23524;
count__23486_23508 = G__23525;
i__23487_23509 = G__23526;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23527 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23527);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23527)))?cljs.core.second.call(null,arglists_23527):arglists_23527));
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
var seq__23488_23528 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23489_23529 = null;
var count__23490_23530 = (0);
var i__23491_23531 = (0);
while(true){
if((i__23491_23531 < count__23490_23530)){
var vec__23492_23532 = cljs.core._nth.call(null,chunk__23489_23529,i__23491_23531);
var name_23533 = cljs.core.nth.call(null,vec__23492_23532,(0),null);
var map__23495_23534 = cljs.core.nth.call(null,vec__23492_23532,(1),null);
var map__23495_23535__$1 = ((((!((map__23495_23534 == null)))?((((map__23495_23534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23495_23534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23495_23534):map__23495_23534);
var doc_23536 = cljs.core.get.call(null,map__23495_23535__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23537 = cljs.core.get.call(null,map__23495_23535__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23533);

cljs.core.println.call(null," ",arglists_23537);

if(cljs.core.truth_(doc_23536)){
cljs.core.println.call(null," ",doc_23536);
} else {
}

var G__23538 = seq__23488_23528;
var G__23539 = chunk__23489_23529;
var G__23540 = count__23490_23530;
var G__23541 = (i__23491_23531 + (1));
seq__23488_23528 = G__23538;
chunk__23489_23529 = G__23539;
count__23490_23530 = G__23540;
i__23491_23531 = G__23541;
continue;
} else {
var temp__6738__auto___23542 = cljs.core.seq.call(null,seq__23488_23528);
if(temp__6738__auto___23542){
var seq__23488_23543__$1 = temp__6738__auto___23542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23488_23543__$1)){
var c__10741__auto___23544 = cljs.core.chunk_first.call(null,seq__23488_23543__$1);
var G__23545 = cljs.core.chunk_rest.call(null,seq__23488_23543__$1);
var G__23546 = c__10741__auto___23544;
var G__23547 = cljs.core.count.call(null,c__10741__auto___23544);
var G__23548 = (0);
seq__23488_23528 = G__23545;
chunk__23489_23529 = G__23546;
count__23490_23530 = G__23547;
i__23491_23531 = G__23548;
continue;
} else {
var vec__23497_23549 = cljs.core.first.call(null,seq__23488_23543__$1);
var name_23550 = cljs.core.nth.call(null,vec__23497_23549,(0),null);
var map__23500_23551 = cljs.core.nth.call(null,vec__23497_23549,(1),null);
var map__23500_23552__$1 = ((((!((map__23500_23551 == null)))?((((map__23500_23551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23500_23551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23500_23551):map__23500_23551);
var doc_23553 = cljs.core.get.call(null,map__23500_23552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23554 = cljs.core.get.call(null,map__23500_23552__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23550);

cljs.core.println.call(null," ",arglists_23554);

if(cljs.core.truth_(doc_23553)){
cljs.core.println.call(null," ",doc_23553);
} else {
}

var G__23555 = cljs.core.next.call(null,seq__23488_23543__$1);
var G__23556 = null;
var G__23557 = (0);
var G__23558 = (0);
seq__23488_23528 = G__23555;
chunk__23489_23529 = G__23556;
count__23490_23530 = G__23557;
i__23491_23531 = G__23558;
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

var seq__23502 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23503 = null;
var count__23504 = (0);
var i__23505 = (0);
while(true){
if((i__23505 < count__23504)){
var role = cljs.core._nth.call(null,chunk__23503,i__23505);
var temp__6738__auto___23559__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___23559__$1)){
var spec_23560 = temp__6738__auto___23559__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23560));
} else {
}

var G__23561 = seq__23502;
var G__23562 = chunk__23503;
var G__23563 = count__23504;
var G__23564 = (i__23505 + (1));
seq__23502 = G__23561;
chunk__23503 = G__23562;
count__23504 = G__23563;
i__23505 = G__23564;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__23502);
if(temp__6738__auto____$1){
var seq__23502__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23502__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__23502__$1);
var G__23565 = cljs.core.chunk_rest.call(null,seq__23502__$1);
var G__23566 = c__10741__auto__;
var G__23567 = cljs.core.count.call(null,c__10741__auto__);
var G__23568 = (0);
seq__23502 = G__23565;
chunk__23503 = G__23566;
count__23504 = G__23567;
i__23505 = G__23568;
continue;
} else {
var role = cljs.core.first.call(null,seq__23502__$1);
var temp__6738__auto___23569__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___23569__$2)){
var spec_23570 = temp__6738__auto___23569__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23570));
} else {
}

var G__23571 = cljs.core.next.call(null,seq__23502__$1);
var G__23572 = null;
var G__23573 = (0);
var G__23574 = (0);
seq__23502 = G__23571;
chunk__23503 = G__23572;
count__23504 = G__23573;
i__23505 = G__23574;
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

//# sourceMappingURL=repl.js.map?rel=1506034935877
