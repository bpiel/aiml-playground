// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70482){
var map__70483 = p__70482;
var map__70483__$1 = ((((!((map__70483 == null)))?((((map__70483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70483):map__70483);
var m = map__70483__$1;
var n = cljs.core.get.call(null,map__70483__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__70483__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__70485_70507 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70486_70508 = null;
var count__70487_70509 = (0);
var i__70488_70510 = (0);
while(true){
if((i__70488_70510 < count__70487_70509)){
var f_70511 = cljs.core._nth.call(null,chunk__70486_70508,i__70488_70510);
cljs.core.println.call(null,"  ",f_70511);

var G__70512 = seq__70485_70507;
var G__70513 = chunk__70486_70508;
var G__70514 = count__70487_70509;
var G__70515 = (i__70488_70510 + (1));
seq__70485_70507 = G__70512;
chunk__70486_70508 = G__70513;
count__70487_70509 = G__70514;
i__70488_70510 = G__70515;
continue;
} else {
var temp__6738__auto___70516 = cljs.core.seq.call(null,seq__70485_70507);
if(temp__6738__auto___70516){
var seq__70485_70517__$1 = temp__6738__auto___70516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70485_70517__$1)){
var c__59092__auto___70518 = cljs.core.chunk_first.call(null,seq__70485_70517__$1);
var G__70519 = cljs.core.chunk_rest.call(null,seq__70485_70517__$1);
var G__70520 = c__59092__auto___70518;
var G__70521 = cljs.core.count.call(null,c__59092__auto___70518);
var G__70522 = (0);
seq__70485_70507 = G__70519;
chunk__70486_70508 = G__70520;
count__70487_70509 = G__70521;
i__70488_70510 = G__70522;
continue;
} else {
var f_70523 = cljs.core.first.call(null,seq__70485_70517__$1);
cljs.core.println.call(null,"  ",f_70523);

var G__70524 = cljs.core.next.call(null,seq__70485_70517__$1);
var G__70525 = null;
var G__70526 = (0);
var G__70527 = (0);
seq__70485_70507 = G__70524;
chunk__70486_70508 = G__70525;
count__70487_70509 = G__70526;
i__70488_70510 = G__70527;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70528 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__58161__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_70528);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_70528)))?cljs.core.second.call(null,arglists_70528):arglists_70528));
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
var seq__70489_70529 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70490_70530 = null;
var count__70491_70531 = (0);
var i__70492_70532 = (0);
while(true){
if((i__70492_70532 < count__70491_70531)){
var vec__70493_70533 = cljs.core._nth.call(null,chunk__70490_70530,i__70492_70532);
var name_70534 = cljs.core.nth.call(null,vec__70493_70533,(0),null);
var map__70496_70535 = cljs.core.nth.call(null,vec__70493_70533,(1),null);
var map__70496_70536__$1 = ((((!((map__70496_70535 == null)))?((((map__70496_70535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70496_70535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70496_70535):map__70496_70535);
var doc_70537 = cljs.core.get.call(null,map__70496_70536__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70538 = cljs.core.get.call(null,map__70496_70536__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_70534);

cljs.core.println.call(null," ",arglists_70538);

if(cljs.core.truth_(doc_70537)){
cljs.core.println.call(null," ",doc_70537);
} else {
}

var G__70539 = seq__70489_70529;
var G__70540 = chunk__70490_70530;
var G__70541 = count__70491_70531;
var G__70542 = (i__70492_70532 + (1));
seq__70489_70529 = G__70539;
chunk__70490_70530 = G__70540;
count__70491_70531 = G__70541;
i__70492_70532 = G__70542;
continue;
} else {
var temp__6738__auto___70543 = cljs.core.seq.call(null,seq__70489_70529);
if(temp__6738__auto___70543){
var seq__70489_70544__$1 = temp__6738__auto___70543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70489_70544__$1)){
var c__59092__auto___70545 = cljs.core.chunk_first.call(null,seq__70489_70544__$1);
var G__70546 = cljs.core.chunk_rest.call(null,seq__70489_70544__$1);
var G__70547 = c__59092__auto___70545;
var G__70548 = cljs.core.count.call(null,c__59092__auto___70545);
var G__70549 = (0);
seq__70489_70529 = G__70546;
chunk__70490_70530 = G__70547;
count__70491_70531 = G__70548;
i__70492_70532 = G__70549;
continue;
} else {
var vec__70498_70550 = cljs.core.first.call(null,seq__70489_70544__$1);
var name_70551 = cljs.core.nth.call(null,vec__70498_70550,(0),null);
var map__70501_70552 = cljs.core.nth.call(null,vec__70498_70550,(1),null);
var map__70501_70553__$1 = ((((!((map__70501_70552 == null)))?((((map__70501_70552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70501_70552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70501_70552):map__70501_70552);
var doc_70554 = cljs.core.get.call(null,map__70501_70553__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70555 = cljs.core.get.call(null,map__70501_70553__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_70551);

cljs.core.println.call(null," ",arglists_70555);

if(cljs.core.truth_(doc_70554)){
cljs.core.println.call(null," ",doc_70554);
} else {
}

var G__70556 = cljs.core.next.call(null,seq__70489_70544__$1);
var G__70557 = null;
var G__70558 = (0);
var G__70559 = (0);
seq__70489_70529 = G__70556;
chunk__70490_70530 = G__70557;
count__70491_70531 = G__70558;
i__70492_70532 = G__70559;
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

var seq__70503 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70504 = null;
var count__70505 = (0);
var i__70506 = (0);
while(true){
if((i__70506 < count__70505)){
var role = cljs.core._nth.call(null,chunk__70504,i__70506);
var temp__6738__auto___70560__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___70560__$1)){
var spec_70561 = temp__6738__auto___70560__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_70561));
} else {
}

var G__70562 = seq__70503;
var G__70563 = chunk__70504;
var G__70564 = count__70505;
var G__70565 = (i__70506 + (1));
seq__70503 = G__70562;
chunk__70504 = G__70563;
count__70505 = G__70564;
i__70506 = G__70565;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__70503);
if(temp__6738__auto____$1){
var seq__70503__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70503__$1)){
var c__59092__auto__ = cljs.core.chunk_first.call(null,seq__70503__$1);
var G__70566 = cljs.core.chunk_rest.call(null,seq__70503__$1);
var G__70567 = c__59092__auto__;
var G__70568 = cljs.core.count.call(null,c__59092__auto__);
var G__70569 = (0);
seq__70503 = G__70566;
chunk__70504 = G__70567;
count__70505 = G__70568;
i__70506 = G__70569;
continue;
} else {
var role = cljs.core.first.call(null,seq__70503__$1);
var temp__6738__auto___70570__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___70570__$2)){
var spec_70571 = temp__6738__auto___70570__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_70571));
} else {
}

var G__70572 = cljs.core.next.call(null,seq__70503__$1);
var G__70573 = null;
var G__70574 = (0);
var G__70575 = (0);
seq__70503 = G__70572;
chunk__70504 = G__70573;
count__70505 = G__70574;
i__70506 = G__70575;
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

//# sourceMappingURL=repl.js.map?rel=1505406792352
