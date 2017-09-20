// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__118078){
var map__118079 = p__118078;
var map__118079__$1 = ((((!((map__118079 == null)))?((((map__118079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118079):map__118079);
var m = map__118079__$1;
var n = cljs.core.get.call(null,map__118079__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__118079__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__118081_118103 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__118082_118104 = null;
var count__118083_118105 = (0);
var i__118084_118106 = (0);
while(true){
if((i__118084_118106 < count__118083_118105)){
var f_118107 = cljs.core._nth.call(null,chunk__118082_118104,i__118084_118106);
cljs.core.println.call(null,"  ",f_118107);

var G__118108 = seq__118081_118103;
var G__118109 = chunk__118082_118104;
var G__118110 = count__118083_118105;
var G__118111 = (i__118084_118106 + (1));
seq__118081_118103 = G__118108;
chunk__118082_118104 = G__118109;
count__118083_118105 = G__118110;
i__118084_118106 = G__118111;
continue;
} else {
var temp__6738__auto___118112 = cljs.core.seq.call(null,seq__118081_118103);
if(temp__6738__auto___118112){
var seq__118081_118113__$1 = temp__6738__auto___118112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__118081_118113__$1)){
var c__59059__auto___118114 = cljs.core.chunk_first.call(null,seq__118081_118113__$1);
var G__118115 = cljs.core.chunk_rest.call(null,seq__118081_118113__$1);
var G__118116 = c__59059__auto___118114;
var G__118117 = cljs.core.count.call(null,c__59059__auto___118114);
var G__118118 = (0);
seq__118081_118103 = G__118115;
chunk__118082_118104 = G__118116;
count__118083_118105 = G__118117;
i__118084_118106 = G__118118;
continue;
} else {
var f_118119 = cljs.core.first.call(null,seq__118081_118113__$1);
cljs.core.println.call(null,"  ",f_118119);

var G__118120 = cljs.core.next.call(null,seq__118081_118113__$1);
var G__118121 = null;
var G__118122 = (0);
var G__118123 = (0);
seq__118081_118103 = G__118120;
chunk__118082_118104 = G__118121;
count__118083_118105 = G__118122;
i__118084_118106 = G__118123;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_118124 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__58128__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_118124);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_118124)))?cljs.core.second.call(null,arglists_118124):arglists_118124));
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
var seq__118085_118125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__118086_118126 = null;
var count__118087_118127 = (0);
var i__118088_118128 = (0);
while(true){
if((i__118088_118128 < count__118087_118127)){
var vec__118089_118129 = cljs.core._nth.call(null,chunk__118086_118126,i__118088_118128);
var name_118130 = cljs.core.nth.call(null,vec__118089_118129,(0),null);
var map__118092_118131 = cljs.core.nth.call(null,vec__118089_118129,(1),null);
var map__118092_118132__$1 = ((((!((map__118092_118131 == null)))?((((map__118092_118131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118092_118131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118092_118131):map__118092_118131);
var doc_118133 = cljs.core.get.call(null,map__118092_118132__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_118134 = cljs.core.get.call(null,map__118092_118132__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_118130);

cljs.core.println.call(null," ",arglists_118134);

if(cljs.core.truth_(doc_118133)){
cljs.core.println.call(null," ",doc_118133);
} else {
}

var G__118135 = seq__118085_118125;
var G__118136 = chunk__118086_118126;
var G__118137 = count__118087_118127;
var G__118138 = (i__118088_118128 + (1));
seq__118085_118125 = G__118135;
chunk__118086_118126 = G__118136;
count__118087_118127 = G__118137;
i__118088_118128 = G__118138;
continue;
} else {
var temp__6738__auto___118139 = cljs.core.seq.call(null,seq__118085_118125);
if(temp__6738__auto___118139){
var seq__118085_118140__$1 = temp__6738__auto___118139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__118085_118140__$1)){
var c__59059__auto___118141 = cljs.core.chunk_first.call(null,seq__118085_118140__$1);
var G__118142 = cljs.core.chunk_rest.call(null,seq__118085_118140__$1);
var G__118143 = c__59059__auto___118141;
var G__118144 = cljs.core.count.call(null,c__59059__auto___118141);
var G__118145 = (0);
seq__118085_118125 = G__118142;
chunk__118086_118126 = G__118143;
count__118087_118127 = G__118144;
i__118088_118128 = G__118145;
continue;
} else {
var vec__118094_118146 = cljs.core.first.call(null,seq__118085_118140__$1);
var name_118147 = cljs.core.nth.call(null,vec__118094_118146,(0),null);
var map__118097_118148 = cljs.core.nth.call(null,vec__118094_118146,(1),null);
var map__118097_118149__$1 = ((((!((map__118097_118148 == null)))?((((map__118097_118148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118097_118148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118097_118148):map__118097_118148);
var doc_118150 = cljs.core.get.call(null,map__118097_118149__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_118151 = cljs.core.get.call(null,map__118097_118149__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_118147);

cljs.core.println.call(null," ",arglists_118151);

if(cljs.core.truth_(doc_118150)){
cljs.core.println.call(null," ",doc_118150);
} else {
}

var G__118152 = cljs.core.next.call(null,seq__118085_118140__$1);
var G__118153 = null;
var G__118154 = (0);
var G__118155 = (0);
seq__118085_118125 = G__118152;
chunk__118086_118126 = G__118153;
count__118087_118127 = G__118154;
i__118088_118128 = G__118155;
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

var seq__118099 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__118100 = null;
var count__118101 = (0);
var i__118102 = (0);
while(true){
if((i__118102 < count__118101)){
var role = cljs.core._nth.call(null,chunk__118100,i__118102);
var temp__6738__auto___118156__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___118156__$1)){
var spec_118157 = temp__6738__auto___118156__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_118157));
} else {
}

var G__118158 = seq__118099;
var G__118159 = chunk__118100;
var G__118160 = count__118101;
var G__118161 = (i__118102 + (1));
seq__118099 = G__118158;
chunk__118100 = G__118159;
count__118101 = G__118160;
i__118102 = G__118161;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__118099);
if(temp__6738__auto____$1){
var seq__118099__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__118099__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__118099__$1);
var G__118162 = cljs.core.chunk_rest.call(null,seq__118099__$1);
var G__118163 = c__59059__auto__;
var G__118164 = cljs.core.count.call(null,c__59059__auto__);
var G__118165 = (0);
seq__118099 = G__118162;
chunk__118100 = G__118163;
count__118101 = G__118164;
i__118102 = G__118165;
continue;
} else {
var role = cljs.core.first.call(null,seq__118099__$1);
var temp__6738__auto___118166__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___118166__$2)){
var spec_118167 = temp__6738__auto___118166__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_118167));
} else {
}

var G__118168 = cljs.core.next.call(null,seq__118099__$1);
var G__118169 = null;
var G__118170 = (0);
var G__118171 = (0);
seq__118099 = G__118168;
chunk__118100 = G__118169;
count__118101 = G__118170;
i__118102 = G__118171;
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

//# sourceMappingURL=repl.js.map?rel=1505927831766
