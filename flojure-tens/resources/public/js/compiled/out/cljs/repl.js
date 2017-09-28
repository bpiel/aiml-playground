// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__77671){
var map__77672 = p__77671;
var map__77672__$1 = ((((!((map__77672 == null)))?((((map__77672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77672):map__77672);
var m = map__77672__$1;
var n = cljs.core.get.call(null,map__77672__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__77672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__77674_77696 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__77675_77697 = null;
var count__77676_77698 = (0);
var i__77677_77699 = (0);
while(true){
if((i__77677_77699 < count__77676_77698)){
var f_77700 = cljs.core._nth.call(null,chunk__77675_77697,i__77677_77699);
cljs.core.println.call(null,"  ",f_77700);

var G__77701 = seq__77674_77696;
var G__77702 = chunk__77675_77697;
var G__77703 = count__77676_77698;
var G__77704 = (i__77677_77699 + (1));
seq__77674_77696 = G__77701;
chunk__77675_77697 = G__77702;
count__77676_77698 = G__77703;
i__77677_77699 = G__77704;
continue;
} else {
var temp__6738__auto___77705 = cljs.core.seq.call(null,seq__77674_77696);
if(temp__6738__auto___77705){
var seq__77674_77706__$1 = temp__6738__auto___77705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77674_77706__$1)){
var c__65348__auto___77707 = cljs.core.chunk_first.call(null,seq__77674_77706__$1);
var G__77708 = cljs.core.chunk_rest.call(null,seq__77674_77706__$1);
var G__77709 = c__65348__auto___77707;
var G__77710 = cljs.core.count.call(null,c__65348__auto___77707);
var G__77711 = (0);
seq__77674_77696 = G__77708;
chunk__77675_77697 = G__77709;
count__77676_77698 = G__77710;
i__77677_77699 = G__77711;
continue;
} else {
var f_77712 = cljs.core.first.call(null,seq__77674_77706__$1);
cljs.core.println.call(null,"  ",f_77712);

var G__77713 = cljs.core.next.call(null,seq__77674_77706__$1);
var G__77714 = null;
var G__77715 = (0);
var G__77716 = (0);
seq__77674_77696 = G__77713;
chunk__77675_77697 = G__77714;
count__77676_77698 = G__77715;
i__77677_77699 = G__77716;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_77717 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__64417__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_77717);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_77717)))?cljs.core.second.call(null,arglists_77717):arglists_77717));
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
var seq__77678_77718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__77679_77719 = null;
var count__77680_77720 = (0);
var i__77681_77721 = (0);
while(true){
if((i__77681_77721 < count__77680_77720)){
var vec__77682_77722 = cljs.core._nth.call(null,chunk__77679_77719,i__77681_77721);
var name_77723 = cljs.core.nth.call(null,vec__77682_77722,(0),null);
var map__77685_77724 = cljs.core.nth.call(null,vec__77682_77722,(1),null);
var map__77685_77725__$1 = ((((!((map__77685_77724 == null)))?((((map__77685_77724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77685_77724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77685_77724):map__77685_77724);
var doc_77726 = cljs.core.get.call(null,map__77685_77725__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_77727 = cljs.core.get.call(null,map__77685_77725__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_77723);

cljs.core.println.call(null," ",arglists_77727);

if(cljs.core.truth_(doc_77726)){
cljs.core.println.call(null," ",doc_77726);
} else {
}

var G__77728 = seq__77678_77718;
var G__77729 = chunk__77679_77719;
var G__77730 = count__77680_77720;
var G__77731 = (i__77681_77721 + (1));
seq__77678_77718 = G__77728;
chunk__77679_77719 = G__77729;
count__77680_77720 = G__77730;
i__77681_77721 = G__77731;
continue;
} else {
var temp__6738__auto___77732 = cljs.core.seq.call(null,seq__77678_77718);
if(temp__6738__auto___77732){
var seq__77678_77733__$1 = temp__6738__auto___77732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77678_77733__$1)){
var c__65348__auto___77734 = cljs.core.chunk_first.call(null,seq__77678_77733__$1);
var G__77735 = cljs.core.chunk_rest.call(null,seq__77678_77733__$1);
var G__77736 = c__65348__auto___77734;
var G__77737 = cljs.core.count.call(null,c__65348__auto___77734);
var G__77738 = (0);
seq__77678_77718 = G__77735;
chunk__77679_77719 = G__77736;
count__77680_77720 = G__77737;
i__77681_77721 = G__77738;
continue;
} else {
var vec__77687_77739 = cljs.core.first.call(null,seq__77678_77733__$1);
var name_77740 = cljs.core.nth.call(null,vec__77687_77739,(0),null);
var map__77690_77741 = cljs.core.nth.call(null,vec__77687_77739,(1),null);
var map__77690_77742__$1 = ((((!((map__77690_77741 == null)))?((((map__77690_77741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77690_77741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77690_77741):map__77690_77741);
var doc_77743 = cljs.core.get.call(null,map__77690_77742__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_77744 = cljs.core.get.call(null,map__77690_77742__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_77740);

cljs.core.println.call(null," ",arglists_77744);

if(cljs.core.truth_(doc_77743)){
cljs.core.println.call(null," ",doc_77743);
} else {
}

var G__77745 = cljs.core.next.call(null,seq__77678_77733__$1);
var G__77746 = null;
var G__77747 = (0);
var G__77748 = (0);
seq__77678_77718 = G__77745;
chunk__77679_77719 = G__77746;
count__77680_77720 = G__77747;
i__77681_77721 = G__77748;
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

var seq__77692 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__77693 = null;
var count__77694 = (0);
var i__77695 = (0);
while(true){
if((i__77695 < count__77694)){
var role = cljs.core._nth.call(null,chunk__77693,i__77695);
var temp__6738__auto___77749__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___77749__$1)){
var spec_77750 = temp__6738__auto___77749__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_77750));
} else {
}

var G__77751 = seq__77692;
var G__77752 = chunk__77693;
var G__77753 = count__77694;
var G__77754 = (i__77695 + (1));
seq__77692 = G__77751;
chunk__77693 = G__77752;
count__77694 = G__77753;
i__77695 = G__77754;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__77692);
if(temp__6738__auto____$1){
var seq__77692__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77692__$1)){
var c__65348__auto__ = cljs.core.chunk_first.call(null,seq__77692__$1);
var G__77755 = cljs.core.chunk_rest.call(null,seq__77692__$1);
var G__77756 = c__65348__auto__;
var G__77757 = cljs.core.count.call(null,c__65348__auto__);
var G__77758 = (0);
seq__77692 = G__77755;
chunk__77693 = G__77756;
count__77694 = G__77757;
i__77695 = G__77758;
continue;
} else {
var role = cljs.core.first.call(null,seq__77692__$1);
var temp__6738__auto___77759__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___77759__$2)){
var spec_77760 = temp__6738__auto___77759__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_77760));
} else {
}

var G__77761 = cljs.core.next.call(null,seq__77692__$1);
var G__77762 = null;
var G__77763 = (0);
var G__77764 = (0);
seq__77692 = G__77761;
chunk__77693 = G__77762;
count__77694 = G__77763;
i__77695 = G__77764;
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

//# sourceMappingURL=repl.js.map?rel=1506558356667
