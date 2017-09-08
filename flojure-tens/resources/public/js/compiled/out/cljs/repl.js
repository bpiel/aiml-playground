// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24357){
var map__24358 = p__24357;
var map__24358__$1 = ((((!((map__24358 == null)))?((((map__24358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24358):map__24358);
var m = map__24358__$1;
var n = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24360_24382 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24361_24383 = null;
var count__24362_24384 = (0);
var i__24363_24385 = (0);
while(true){
if((i__24363_24385 < count__24362_24384)){
var f_24386 = cljs.core._nth.call(null,chunk__24361_24383,i__24363_24385);
cljs.core.println.call(null,"  ",f_24386);

var G__24387 = seq__24360_24382;
var G__24388 = chunk__24361_24383;
var G__24389 = count__24362_24384;
var G__24390 = (i__24363_24385 + (1));
seq__24360_24382 = G__24387;
chunk__24361_24383 = G__24388;
count__24362_24384 = G__24389;
i__24363_24385 = G__24390;
continue;
} else {
var temp__6738__auto___24391 = cljs.core.seq.call(null,seq__24360_24382);
if(temp__6738__auto___24391){
var seq__24360_24392__$1 = temp__6738__auto___24391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24360_24392__$1)){
var c__10741__auto___24393 = cljs.core.chunk_first.call(null,seq__24360_24392__$1);
var G__24394 = cljs.core.chunk_rest.call(null,seq__24360_24392__$1);
var G__24395 = c__10741__auto___24393;
var G__24396 = cljs.core.count.call(null,c__10741__auto___24393);
var G__24397 = (0);
seq__24360_24382 = G__24394;
chunk__24361_24383 = G__24395;
count__24362_24384 = G__24396;
i__24363_24385 = G__24397;
continue;
} else {
var f_24398 = cljs.core.first.call(null,seq__24360_24392__$1);
cljs.core.println.call(null,"  ",f_24398);

var G__24399 = cljs.core.next.call(null,seq__24360_24392__$1);
var G__24400 = null;
var G__24401 = (0);
var G__24402 = (0);
seq__24360_24382 = G__24399;
chunk__24361_24383 = G__24400;
count__24362_24384 = G__24401;
i__24363_24385 = G__24402;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24403 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24403);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24403)))?cljs.core.second.call(null,arglists_24403):arglists_24403));
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
var seq__24364_24404 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24365_24405 = null;
var count__24366_24406 = (0);
var i__24367_24407 = (0);
while(true){
if((i__24367_24407 < count__24366_24406)){
var vec__24368_24408 = cljs.core._nth.call(null,chunk__24365_24405,i__24367_24407);
var name_24409 = cljs.core.nth.call(null,vec__24368_24408,(0),null);
var map__24371_24410 = cljs.core.nth.call(null,vec__24368_24408,(1),null);
var map__24371_24411__$1 = ((((!((map__24371_24410 == null)))?((((map__24371_24410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24371_24410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24371_24410):map__24371_24410);
var doc_24412 = cljs.core.get.call(null,map__24371_24411__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24413 = cljs.core.get.call(null,map__24371_24411__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24409);

cljs.core.println.call(null," ",arglists_24413);

if(cljs.core.truth_(doc_24412)){
cljs.core.println.call(null," ",doc_24412);
} else {
}

var G__24414 = seq__24364_24404;
var G__24415 = chunk__24365_24405;
var G__24416 = count__24366_24406;
var G__24417 = (i__24367_24407 + (1));
seq__24364_24404 = G__24414;
chunk__24365_24405 = G__24415;
count__24366_24406 = G__24416;
i__24367_24407 = G__24417;
continue;
} else {
var temp__6738__auto___24418 = cljs.core.seq.call(null,seq__24364_24404);
if(temp__6738__auto___24418){
var seq__24364_24419__$1 = temp__6738__auto___24418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24364_24419__$1)){
var c__10741__auto___24420 = cljs.core.chunk_first.call(null,seq__24364_24419__$1);
var G__24421 = cljs.core.chunk_rest.call(null,seq__24364_24419__$1);
var G__24422 = c__10741__auto___24420;
var G__24423 = cljs.core.count.call(null,c__10741__auto___24420);
var G__24424 = (0);
seq__24364_24404 = G__24421;
chunk__24365_24405 = G__24422;
count__24366_24406 = G__24423;
i__24367_24407 = G__24424;
continue;
} else {
var vec__24373_24425 = cljs.core.first.call(null,seq__24364_24419__$1);
var name_24426 = cljs.core.nth.call(null,vec__24373_24425,(0),null);
var map__24376_24427 = cljs.core.nth.call(null,vec__24373_24425,(1),null);
var map__24376_24428__$1 = ((((!((map__24376_24427 == null)))?((((map__24376_24427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24376_24427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24376_24427):map__24376_24427);
var doc_24429 = cljs.core.get.call(null,map__24376_24428__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24430 = cljs.core.get.call(null,map__24376_24428__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24426);

cljs.core.println.call(null," ",arglists_24430);

if(cljs.core.truth_(doc_24429)){
cljs.core.println.call(null," ",doc_24429);
} else {
}

var G__24431 = cljs.core.next.call(null,seq__24364_24419__$1);
var G__24432 = null;
var G__24433 = (0);
var G__24434 = (0);
seq__24364_24404 = G__24431;
chunk__24365_24405 = G__24432;
count__24366_24406 = G__24433;
i__24367_24407 = G__24434;
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

var seq__24378 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24379 = null;
var count__24380 = (0);
var i__24381 = (0);
while(true){
if((i__24381 < count__24380)){
var role = cljs.core._nth.call(null,chunk__24379,i__24381);
var temp__6738__auto___24435__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24435__$1)){
var spec_24436 = temp__6738__auto___24435__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24436));
} else {
}

var G__24437 = seq__24378;
var G__24438 = chunk__24379;
var G__24439 = count__24380;
var G__24440 = (i__24381 + (1));
seq__24378 = G__24437;
chunk__24379 = G__24438;
count__24380 = G__24439;
i__24381 = G__24440;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__24378);
if(temp__6738__auto____$1){
var seq__24378__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24378__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__24378__$1);
var G__24441 = cljs.core.chunk_rest.call(null,seq__24378__$1);
var G__24442 = c__10741__auto__;
var G__24443 = cljs.core.count.call(null,c__10741__auto__);
var G__24444 = (0);
seq__24378 = G__24441;
chunk__24379 = G__24442;
count__24380 = G__24443;
i__24381 = G__24444;
continue;
} else {
var role = cljs.core.first.call(null,seq__24378__$1);
var temp__6738__auto___24445__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24445__$2)){
var spec_24446 = temp__6738__auto___24445__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24446));
} else {
}

var G__24447 = cljs.core.next.call(null,seq__24378__$1);
var G__24448 = null;
var G__24449 = (0);
var G__24450 = (0);
seq__24378 = G__24447;
chunk__24379 = G__24448;
count__24380 = G__24449;
i__24381 = G__24450;
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

//# sourceMappingURL=repl.js.map?rel=1504894097433
