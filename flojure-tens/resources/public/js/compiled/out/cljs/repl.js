// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__71389){
var map__71390 = p__71389;
var map__71390__$1 = ((((!((map__71390 == null)))?((((map__71390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71390):map__71390);
var m = map__71390__$1;
var n = cljs.core.get.call(null,map__71390__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__71390__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__71392_71414 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__71393_71415 = null;
var count__71394_71416 = (0);
var i__71395_71417 = (0);
while(true){
if((i__71395_71417 < count__71394_71416)){
var f_71418 = cljs.core._nth.call(null,chunk__71393_71415,i__71395_71417);
cljs.core.println.call(null,"  ",f_71418);

var G__71419 = seq__71392_71414;
var G__71420 = chunk__71393_71415;
var G__71421 = count__71394_71416;
var G__71422 = (i__71395_71417 + (1));
seq__71392_71414 = G__71419;
chunk__71393_71415 = G__71420;
count__71394_71416 = G__71421;
i__71395_71417 = G__71422;
continue;
} else {
var temp__6738__auto___71423 = cljs.core.seq.call(null,seq__71392_71414);
if(temp__6738__auto___71423){
var seq__71392_71424__$1 = temp__6738__auto___71423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71392_71424__$1)){
var c__59066__auto___71425 = cljs.core.chunk_first.call(null,seq__71392_71424__$1);
var G__71426 = cljs.core.chunk_rest.call(null,seq__71392_71424__$1);
var G__71427 = c__59066__auto___71425;
var G__71428 = cljs.core.count.call(null,c__59066__auto___71425);
var G__71429 = (0);
seq__71392_71414 = G__71426;
chunk__71393_71415 = G__71427;
count__71394_71416 = G__71428;
i__71395_71417 = G__71429;
continue;
} else {
var f_71430 = cljs.core.first.call(null,seq__71392_71424__$1);
cljs.core.println.call(null,"  ",f_71430);

var G__71431 = cljs.core.next.call(null,seq__71392_71424__$1);
var G__71432 = null;
var G__71433 = (0);
var G__71434 = (0);
seq__71392_71414 = G__71431;
chunk__71393_71415 = G__71432;
count__71394_71416 = G__71433;
i__71395_71417 = G__71434;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_71435 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__58135__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_71435);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_71435)))?cljs.core.second.call(null,arglists_71435):arglists_71435));
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
var seq__71396_71436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__71397_71437 = null;
var count__71398_71438 = (0);
var i__71399_71439 = (0);
while(true){
if((i__71399_71439 < count__71398_71438)){
var vec__71400_71440 = cljs.core._nth.call(null,chunk__71397_71437,i__71399_71439);
var name_71441 = cljs.core.nth.call(null,vec__71400_71440,(0),null);
var map__71403_71442 = cljs.core.nth.call(null,vec__71400_71440,(1),null);
var map__71403_71443__$1 = ((((!((map__71403_71442 == null)))?((((map__71403_71442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71403_71442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71403_71442):map__71403_71442);
var doc_71444 = cljs.core.get.call(null,map__71403_71443__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_71445 = cljs.core.get.call(null,map__71403_71443__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_71441);

cljs.core.println.call(null," ",arglists_71445);

if(cljs.core.truth_(doc_71444)){
cljs.core.println.call(null," ",doc_71444);
} else {
}

var G__71446 = seq__71396_71436;
var G__71447 = chunk__71397_71437;
var G__71448 = count__71398_71438;
var G__71449 = (i__71399_71439 + (1));
seq__71396_71436 = G__71446;
chunk__71397_71437 = G__71447;
count__71398_71438 = G__71448;
i__71399_71439 = G__71449;
continue;
} else {
var temp__6738__auto___71450 = cljs.core.seq.call(null,seq__71396_71436);
if(temp__6738__auto___71450){
var seq__71396_71451__$1 = temp__6738__auto___71450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71396_71451__$1)){
var c__59066__auto___71452 = cljs.core.chunk_first.call(null,seq__71396_71451__$1);
var G__71453 = cljs.core.chunk_rest.call(null,seq__71396_71451__$1);
var G__71454 = c__59066__auto___71452;
var G__71455 = cljs.core.count.call(null,c__59066__auto___71452);
var G__71456 = (0);
seq__71396_71436 = G__71453;
chunk__71397_71437 = G__71454;
count__71398_71438 = G__71455;
i__71399_71439 = G__71456;
continue;
} else {
var vec__71405_71457 = cljs.core.first.call(null,seq__71396_71451__$1);
var name_71458 = cljs.core.nth.call(null,vec__71405_71457,(0),null);
var map__71408_71459 = cljs.core.nth.call(null,vec__71405_71457,(1),null);
var map__71408_71460__$1 = ((((!((map__71408_71459 == null)))?((((map__71408_71459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71408_71459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71408_71459):map__71408_71459);
var doc_71461 = cljs.core.get.call(null,map__71408_71460__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_71462 = cljs.core.get.call(null,map__71408_71460__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_71458);

cljs.core.println.call(null," ",arglists_71462);

if(cljs.core.truth_(doc_71461)){
cljs.core.println.call(null," ",doc_71461);
} else {
}

var G__71463 = cljs.core.next.call(null,seq__71396_71451__$1);
var G__71464 = null;
var G__71465 = (0);
var G__71466 = (0);
seq__71396_71436 = G__71463;
chunk__71397_71437 = G__71464;
count__71398_71438 = G__71465;
i__71399_71439 = G__71466;
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

var seq__71410 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__71411 = null;
var count__71412 = (0);
var i__71413 = (0);
while(true){
if((i__71413 < count__71412)){
var role = cljs.core._nth.call(null,chunk__71411,i__71413);
var temp__6738__auto___71467__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___71467__$1)){
var spec_71468 = temp__6738__auto___71467__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_71468));
} else {
}

var G__71469 = seq__71410;
var G__71470 = chunk__71411;
var G__71471 = count__71412;
var G__71472 = (i__71413 + (1));
seq__71410 = G__71469;
chunk__71411 = G__71470;
count__71412 = G__71471;
i__71413 = G__71472;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__71410);
if(temp__6738__auto____$1){
var seq__71410__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71410__$1)){
var c__59066__auto__ = cljs.core.chunk_first.call(null,seq__71410__$1);
var G__71473 = cljs.core.chunk_rest.call(null,seq__71410__$1);
var G__71474 = c__59066__auto__;
var G__71475 = cljs.core.count.call(null,c__59066__auto__);
var G__71476 = (0);
seq__71410 = G__71473;
chunk__71411 = G__71474;
count__71412 = G__71475;
i__71413 = G__71476;
continue;
} else {
var role = cljs.core.first.call(null,seq__71410__$1);
var temp__6738__auto___71477__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___71477__$2)){
var spec_71478 = temp__6738__auto___71477__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_71478));
} else {
}

var G__71479 = cljs.core.next.call(null,seq__71410__$1);
var G__71480 = null;
var G__71481 = (0);
var G__71482 = (0);
seq__71410 = G__71479;
chunk__71411 = G__71480;
count__71412 = G__71481;
i__71413 = G__71482;
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

//# sourceMappingURL=repl.js.map?rel=1506641518449
