// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24385){
var map__24386 = p__24385;
var map__24386__$1 = ((((!((map__24386 == null)))?((((map__24386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24386):map__24386);
var m = map__24386__$1;
var n = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24388_24410 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24389_24411 = null;
var count__24390_24412 = (0);
var i__24391_24413 = (0);
while(true){
if((i__24391_24413 < count__24390_24412)){
var f_24414 = cljs.core._nth.call(null,chunk__24389_24411,i__24391_24413);
cljs.core.println.call(null,"  ",f_24414);

var G__24415 = seq__24388_24410;
var G__24416 = chunk__24389_24411;
var G__24417 = count__24390_24412;
var G__24418 = (i__24391_24413 + (1));
seq__24388_24410 = G__24415;
chunk__24389_24411 = G__24416;
count__24390_24412 = G__24417;
i__24391_24413 = G__24418;
continue;
} else {
var temp__6738__auto___24419 = cljs.core.seq.call(null,seq__24388_24410);
if(temp__6738__auto___24419){
var seq__24388_24420__$1 = temp__6738__auto___24419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24388_24420__$1)){
var c__10741__auto___24421 = cljs.core.chunk_first.call(null,seq__24388_24420__$1);
var G__24422 = cljs.core.chunk_rest.call(null,seq__24388_24420__$1);
var G__24423 = c__10741__auto___24421;
var G__24424 = cljs.core.count.call(null,c__10741__auto___24421);
var G__24425 = (0);
seq__24388_24410 = G__24422;
chunk__24389_24411 = G__24423;
count__24390_24412 = G__24424;
i__24391_24413 = G__24425;
continue;
} else {
var f_24426 = cljs.core.first.call(null,seq__24388_24420__$1);
cljs.core.println.call(null,"  ",f_24426);

var G__24427 = cljs.core.next.call(null,seq__24388_24420__$1);
var G__24428 = null;
var G__24429 = (0);
var G__24430 = (0);
seq__24388_24410 = G__24427;
chunk__24389_24411 = G__24428;
count__24390_24412 = G__24429;
i__24391_24413 = G__24430;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24431 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24431);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24431)))?cljs.core.second.call(null,arglists_24431):arglists_24431));
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
var seq__24392_24432 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24393_24433 = null;
var count__24394_24434 = (0);
var i__24395_24435 = (0);
while(true){
if((i__24395_24435 < count__24394_24434)){
var vec__24396_24436 = cljs.core._nth.call(null,chunk__24393_24433,i__24395_24435);
var name_24437 = cljs.core.nth.call(null,vec__24396_24436,(0),null);
var map__24399_24438 = cljs.core.nth.call(null,vec__24396_24436,(1),null);
var map__24399_24439__$1 = ((((!((map__24399_24438 == null)))?((((map__24399_24438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24399_24438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24399_24438):map__24399_24438);
var doc_24440 = cljs.core.get.call(null,map__24399_24439__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24441 = cljs.core.get.call(null,map__24399_24439__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24437);

cljs.core.println.call(null," ",arglists_24441);

if(cljs.core.truth_(doc_24440)){
cljs.core.println.call(null," ",doc_24440);
} else {
}

var G__24442 = seq__24392_24432;
var G__24443 = chunk__24393_24433;
var G__24444 = count__24394_24434;
var G__24445 = (i__24395_24435 + (1));
seq__24392_24432 = G__24442;
chunk__24393_24433 = G__24443;
count__24394_24434 = G__24444;
i__24395_24435 = G__24445;
continue;
} else {
var temp__6738__auto___24446 = cljs.core.seq.call(null,seq__24392_24432);
if(temp__6738__auto___24446){
var seq__24392_24447__$1 = temp__6738__auto___24446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24392_24447__$1)){
var c__10741__auto___24448 = cljs.core.chunk_first.call(null,seq__24392_24447__$1);
var G__24449 = cljs.core.chunk_rest.call(null,seq__24392_24447__$1);
var G__24450 = c__10741__auto___24448;
var G__24451 = cljs.core.count.call(null,c__10741__auto___24448);
var G__24452 = (0);
seq__24392_24432 = G__24449;
chunk__24393_24433 = G__24450;
count__24394_24434 = G__24451;
i__24395_24435 = G__24452;
continue;
} else {
var vec__24401_24453 = cljs.core.first.call(null,seq__24392_24447__$1);
var name_24454 = cljs.core.nth.call(null,vec__24401_24453,(0),null);
var map__24404_24455 = cljs.core.nth.call(null,vec__24401_24453,(1),null);
var map__24404_24456__$1 = ((((!((map__24404_24455 == null)))?((((map__24404_24455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24404_24455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24404_24455):map__24404_24455);
var doc_24457 = cljs.core.get.call(null,map__24404_24456__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24458 = cljs.core.get.call(null,map__24404_24456__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24454);

cljs.core.println.call(null," ",arglists_24458);

if(cljs.core.truth_(doc_24457)){
cljs.core.println.call(null," ",doc_24457);
} else {
}

var G__24459 = cljs.core.next.call(null,seq__24392_24447__$1);
var G__24460 = null;
var G__24461 = (0);
var G__24462 = (0);
seq__24392_24432 = G__24459;
chunk__24393_24433 = G__24460;
count__24394_24434 = G__24461;
i__24395_24435 = G__24462;
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

var seq__24406 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24407 = null;
var count__24408 = (0);
var i__24409 = (0);
while(true){
if((i__24409 < count__24408)){
var role = cljs.core._nth.call(null,chunk__24407,i__24409);
var temp__6738__auto___24463__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24463__$1)){
var spec_24464 = temp__6738__auto___24463__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24464));
} else {
}

var G__24465 = seq__24406;
var G__24466 = chunk__24407;
var G__24467 = count__24408;
var G__24468 = (i__24409 + (1));
seq__24406 = G__24465;
chunk__24407 = G__24466;
count__24408 = G__24467;
i__24409 = G__24468;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__24406);
if(temp__6738__auto____$1){
var seq__24406__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24406__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__24406__$1);
var G__24469 = cljs.core.chunk_rest.call(null,seq__24406__$1);
var G__24470 = c__10741__auto__;
var G__24471 = cljs.core.count.call(null,c__10741__auto__);
var G__24472 = (0);
seq__24406 = G__24469;
chunk__24407 = G__24470;
count__24408 = G__24471;
i__24409 = G__24472;
continue;
} else {
var role = cljs.core.first.call(null,seq__24406__$1);
var temp__6738__auto___24473__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24473__$2)){
var spec_24474 = temp__6738__auto___24473__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24474));
} else {
}

var G__24475 = cljs.core.next.call(null,seq__24406__$1);
var G__24476 = null;
var G__24477 = (0);
var G__24478 = (0);
seq__24406 = G__24475;
chunk__24407 = G__24476;
count__24408 = G__24477;
i__24409 = G__24478;
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

//# sourceMappingURL=repl.js.map?rel=1505990293628
