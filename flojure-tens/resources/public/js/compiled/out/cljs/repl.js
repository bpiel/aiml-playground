// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21810){
var map__21811 = p__21810;
var map__21811__$1 = ((((!((map__21811 == null)))?((((map__21811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21811):map__21811);
var m = map__21811__$1;
var n = cljs.core.get.call(null,map__21811__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21811__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21813_21835 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21814_21836 = null;
var count__21815_21837 = (0);
var i__21816_21838 = (0);
while(true){
if((i__21816_21838 < count__21815_21837)){
var f_21839 = cljs.core._nth.call(null,chunk__21814_21836,i__21816_21838);
cljs.core.println.call(null,"  ",f_21839);

var G__21840 = seq__21813_21835;
var G__21841 = chunk__21814_21836;
var G__21842 = count__21815_21837;
var G__21843 = (i__21816_21838 + (1));
seq__21813_21835 = G__21840;
chunk__21814_21836 = G__21841;
count__21815_21837 = G__21842;
i__21816_21838 = G__21843;
continue;
} else {
var temp__6738__auto___21844 = cljs.core.seq.call(null,seq__21813_21835);
if(temp__6738__auto___21844){
var seq__21813_21845__$1 = temp__6738__auto___21844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21813_21845__$1)){
var c__10741__auto___21846 = cljs.core.chunk_first.call(null,seq__21813_21845__$1);
var G__21847 = cljs.core.chunk_rest.call(null,seq__21813_21845__$1);
var G__21848 = c__10741__auto___21846;
var G__21849 = cljs.core.count.call(null,c__10741__auto___21846);
var G__21850 = (0);
seq__21813_21835 = G__21847;
chunk__21814_21836 = G__21848;
count__21815_21837 = G__21849;
i__21816_21838 = G__21850;
continue;
} else {
var f_21851 = cljs.core.first.call(null,seq__21813_21845__$1);
cljs.core.println.call(null,"  ",f_21851);

var G__21852 = cljs.core.next.call(null,seq__21813_21845__$1);
var G__21853 = null;
var G__21854 = (0);
var G__21855 = (0);
seq__21813_21835 = G__21852;
chunk__21814_21836 = G__21853;
count__21815_21837 = G__21854;
i__21816_21838 = G__21855;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21856 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21856);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21856)))?cljs.core.second.call(null,arglists_21856):arglists_21856));
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
var seq__21817_21857 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21818_21858 = null;
var count__21819_21859 = (0);
var i__21820_21860 = (0);
while(true){
if((i__21820_21860 < count__21819_21859)){
var vec__21821_21861 = cljs.core._nth.call(null,chunk__21818_21858,i__21820_21860);
var name_21862 = cljs.core.nth.call(null,vec__21821_21861,(0),null);
var map__21824_21863 = cljs.core.nth.call(null,vec__21821_21861,(1),null);
var map__21824_21864__$1 = ((((!((map__21824_21863 == null)))?((((map__21824_21863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21824_21863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21824_21863):map__21824_21863);
var doc_21865 = cljs.core.get.call(null,map__21824_21864__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21866 = cljs.core.get.call(null,map__21824_21864__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21862);

cljs.core.println.call(null," ",arglists_21866);

if(cljs.core.truth_(doc_21865)){
cljs.core.println.call(null," ",doc_21865);
} else {
}

var G__21867 = seq__21817_21857;
var G__21868 = chunk__21818_21858;
var G__21869 = count__21819_21859;
var G__21870 = (i__21820_21860 + (1));
seq__21817_21857 = G__21867;
chunk__21818_21858 = G__21868;
count__21819_21859 = G__21869;
i__21820_21860 = G__21870;
continue;
} else {
var temp__6738__auto___21871 = cljs.core.seq.call(null,seq__21817_21857);
if(temp__6738__auto___21871){
var seq__21817_21872__$1 = temp__6738__auto___21871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21817_21872__$1)){
var c__10741__auto___21873 = cljs.core.chunk_first.call(null,seq__21817_21872__$1);
var G__21874 = cljs.core.chunk_rest.call(null,seq__21817_21872__$1);
var G__21875 = c__10741__auto___21873;
var G__21876 = cljs.core.count.call(null,c__10741__auto___21873);
var G__21877 = (0);
seq__21817_21857 = G__21874;
chunk__21818_21858 = G__21875;
count__21819_21859 = G__21876;
i__21820_21860 = G__21877;
continue;
} else {
var vec__21826_21878 = cljs.core.first.call(null,seq__21817_21872__$1);
var name_21879 = cljs.core.nth.call(null,vec__21826_21878,(0),null);
var map__21829_21880 = cljs.core.nth.call(null,vec__21826_21878,(1),null);
var map__21829_21881__$1 = ((((!((map__21829_21880 == null)))?((((map__21829_21880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21829_21880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21829_21880):map__21829_21880);
var doc_21882 = cljs.core.get.call(null,map__21829_21881__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21883 = cljs.core.get.call(null,map__21829_21881__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21879);

cljs.core.println.call(null," ",arglists_21883);

if(cljs.core.truth_(doc_21882)){
cljs.core.println.call(null," ",doc_21882);
} else {
}

var G__21884 = cljs.core.next.call(null,seq__21817_21872__$1);
var G__21885 = null;
var G__21886 = (0);
var G__21887 = (0);
seq__21817_21857 = G__21884;
chunk__21818_21858 = G__21885;
count__21819_21859 = G__21886;
i__21820_21860 = G__21887;
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

var seq__21831 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21832 = null;
var count__21833 = (0);
var i__21834 = (0);
while(true){
if((i__21834 < count__21833)){
var role = cljs.core._nth.call(null,chunk__21832,i__21834);
var temp__6738__auto___21888__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___21888__$1)){
var spec_21889 = temp__6738__auto___21888__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21889));
} else {
}

var G__21890 = seq__21831;
var G__21891 = chunk__21832;
var G__21892 = count__21833;
var G__21893 = (i__21834 + (1));
seq__21831 = G__21890;
chunk__21832 = G__21891;
count__21833 = G__21892;
i__21834 = G__21893;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__21831);
if(temp__6738__auto____$1){
var seq__21831__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21831__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21831__$1);
var G__21894 = cljs.core.chunk_rest.call(null,seq__21831__$1);
var G__21895 = c__10741__auto__;
var G__21896 = cljs.core.count.call(null,c__10741__auto__);
var G__21897 = (0);
seq__21831 = G__21894;
chunk__21832 = G__21895;
count__21833 = G__21896;
i__21834 = G__21897;
continue;
} else {
var role = cljs.core.first.call(null,seq__21831__$1);
var temp__6738__auto___21898__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___21898__$2)){
var spec_21899 = temp__6738__auto___21898__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21899));
} else {
}

var G__21900 = cljs.core.next.call(null,seq__21831__$1);
var G__21901 = null;
var G__21902 = (0);
var G__21903 = (0);
seq__21831 = G__21900;
chunk__21832 = G__21901;
count__21833 = G__21902;
i__21834 = G__21903;
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

//# sourceMappingURL=repl.js.map?rel=1504285962901
