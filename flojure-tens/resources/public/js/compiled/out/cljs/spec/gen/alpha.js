// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109840 = arguments.length;
var i__59406__auto___109841 = (0);
while(true){
if((i__59406__auto___109841 < len__59405__auto___109840)){
args__59412__auto__.push((arguments[i__59406__auto___109841]));

var G__109842 = (i__59406__auto___109841 + (1));
i__59406__auto___109841 = G__109842;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq109839){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109839));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109844 = arguments.length;
var i__59406__auto___109845 = (0);
while(true){
if((i__59406__auto___109845 < len__59405__auto___109844)){
args__59412__auto__.push((arguments[i__59406__auto___109845]));

var G__109846 = (i__59406__auto___109845 + (1));
i__59406__auto___109845 = G__109846;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq109843){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109843));
});

var g_QMARK__109847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_109848 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__109847){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__109847))
,null));
var mkg_109849 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__109847,g_109848){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__109847,g_109848))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__109847,g_109848,mkg_109849){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__109847).call(null,x);
});})(g_QMARK__109847,g_109848,mkg_109849))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__109847,g_109848,mkg_109849){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_109849).call(null,gfn);
});})(g_QMARK__109847,g_109848,mkg_109849))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__109847,g_109848,mkg_109849){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_109848).call(null,generator);
});})(g_QMARK__109847,g_109848,mkg_109849))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__59516__auto___109869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__59516__auto___109869){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109870 = arguments.length;
var i__59406__auto___109871 = (0);
while(true){
if((i__59406__auto___109871 < len__59405__auto___109870)){
args__59412__auto__.push((arguments[i__59406__auto___109871]));

var G__109872 = (i__59406__auto___109871 + (1));
i__59406__auto___109871 = G__109872;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109869))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109869){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109869),args);
});})(g__59516__auto___109869))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__59516__auto___109869){
return (function (seq109850){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109850));
});})(g__59516__auto___109869))
;


var g__59516__auto___109873 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__59516__auto___109873){
return (function cljs$spec$gen$alpha$list(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109874 = arguments.length;
var i__59406__auto___109875 = (0);
while(true){
if((i__59406__auto___109875 < len__59405__auto___109874)){
args__59412__auto__.push((arguments[i__59406__auto___109875]));

var G__109876 = (i__59406__auto___109875 + (1));
i__59406__auto___109875 = G__109876;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109873))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109873){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109873),args);
});})(g__59516__auto___109873))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__59516__auto___109873){
return (function (seq109851){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109851));
});})(g__59516__auto___109873))
;


var g__59516__auto___109877 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__59516__auto___109877){
return (function cljs$spec$gen$alpha$map(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109878 = arguments.length;
var i__59406__auto___109879 = (0);
while(true){
if((i__59406__auto___109879 < len__59405__auto___109878)){
args__59412__auto__.push((arguments[i__59406__auto___109879]));

var G__109880 = (i__59406__auto___109879 + (1));
i__59406__auto___109879 = G__109880;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109877))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109877){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109877),args);
});})(g__59516__auto___109877))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__59516__auto___109877){
return (function (seq109852){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109852));
});})(g__59516__auto___109877))
;


var g__59516__auto___109881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__59516__auto___109881){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109882 = arguments.length;
var i__59406__auto___109883 = (0);
while(true){
if((i__59406__auto___109883 < len__59405__auto___109882)){
args__59412__auto__.push((arguments[i__59406__auto___109883]));

var G__109884 = (i__59406__auto___109883 + (1));
i__59406__auto___109883 = G__109884;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109881))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109881){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109881),args);
});})(g__59516__auto___109881))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__59516__auto___109881){
return (function (seq109853){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109853));
});})(g__59516__auto___109881))
;


var g__59516__auto___109885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__59516__auto___109885){
return (function cljs$spec$gen$alpha$set(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109886 = arguments.length;
var i__59406__auto___109887 = (0);
while(true){
if((i__59406__auto___109887 < len__59405__auto___109886)){
args__59412__auto__.push((arguments[i__59406__auto___109887]));

var G__109888 = (i__59406__auto___109887 + (1));
i__59406__auto___109887 = G__109888;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109885))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109885){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109885),args);
});})(g__59516__auto___109885))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__59516__auto___109885){
return (function (seq109854){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109854));
});})(g__59516__auto___109885))
;


var g__59516__auto___109889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__59516__auto___109889){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109890 = arguments.length;
var i__59406__auto___109891 = (0);
while(true){
if((i__59406__auto___109891 < len__59405__auto___109890)){
args__59412__auto__.push((arguments[i__59406__auto___109891]));

var G__109892 = (i__59406__auto___109891 + (1));
i__59406__auto___109891 = G__109892;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109889))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109889){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109889),args);
});})(g__59516__auto___109889))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__59516__auto___109889){
return (function (seq109855){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109855));
});})(g__59516__auto___109889))
;


var g__59516__auto___109893 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__59516__auto___109893){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109894 = arguments.length;
var i__59406__auto___109895 = (0);
while(true){
if((i__59406__auto___109895 < len__59405__auto___109894)){
args__59412__auto__.push((arguments[i__59406__auto___109895]));

var G__109896 = (i__59406__auto___109895 + (1));
i__59406__auto___109895 = G__109896;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109893))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109893){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109893),args);
});})(g__59516__auto___109893))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__59516__auto___109893){
return (function (seq109856){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109856));
});})(g__59516__auto___109893))
;


var g__59516__auto___109897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__59516__auto___109897){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109898 = arguments.length;
var i__59406__auto___109899 = (0);
while(true){
if((i__59406__auto___109899 < len__59405__auto___109898)){
args__59412__auto__.push((arguments[i__59406__auto___109899]));

var G__109900 = (i__59406__auto___109899 + (1));
i__59406__auto___109899 = G__109900;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109897))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109897){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109897),args);
});})(g__59516__auto___109897))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__59516__auto___109897){
return (function (seq109857){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109857));
});})(g__59516__auto___109897))
;


var g__59516__auto___109901 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__59516__auto___109901){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109902 = arguments.length;
var i__59406__auto___109903 = (0);
while(true){
if((i__59406__auto___109903 < len__59405__auto___109902)){
args__59412__auto__.push((arguments[i__59406__auto___109903]));

var G__109904 = (i__59406__auto___109903 + (1));
i__59406__auto___109903 = G__109904;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109901))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109901){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109901),args);
});})(g__59516__auto___109901))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__59516__auto___109901){
return (function (seq109858){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109858));
});})(g__59516__auto___109901))
;


var g__59516__auto___109905 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__59516__auto___109905){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109906 = arguments.length;
var i__59406__auto___109907 = (0);
while(true){
if((i__59406__auto___109907 < len__59405__auto___109906)){
args__59412__auto__.push((arguments[i__59406__auto___109907]));

var G__109908 = (i__59406__auto___109907 + (1));
i__59406__auto___109907 = G__109908;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109905))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109905){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109905),args);
});})(g__59516__auto___109905))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__59516__auto___109905){
return (function (seq109859){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109859));
});})(g__59516__auto___109905))
;


var g__59516__auto___109909 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__59516__auto___109909){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109910 = arguments.length;
var i__59406__auto___109911 = (0);
while(true){
if((i__59406__auto___109911 < len__59405__auto___109910)){
args__59412__auto__.push((arguments[i__59406__auto___109911]));

var G__109912 = (i__59406__auto___109911 + (1));
i__59406__auto___109911 = G__109912;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109909))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109909){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109909),args);
});})(g__59516__auto___109909))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__59516__auto___109909){
return (function (seq109860){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109860));
});})(g__59516__auto___109909))
;


var g__59516__auto___109913 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__59516__auto___109913){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109914 = arguments.length;
var i__59406__auto___109915 = (0);
while(true){
if((i__59406__auto___109915 < len__59405__auto___109914)){
args__59412__auto__.push((arguments[i__59406__auto___109915]));

var G__109916 = (i__59406__auto___109915 + (1));
i__59406__auto___109915 = G__109916;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109913))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109913),args);
});})(g__59516__auto___109913))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__59516__auto___109913){
return (function (seq109861){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109861));
});})(g__59516__auto___109913))
;


var g__59516__auto___109917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__59516__auto___109917){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109918 = arguments.length;
var i__59406__auto___109919 = (0);
while(true){
if((i__59406__auto___109919 < len__59405__auto___109918)){
args__59412__auto__.push((arguments[i__59406__auto___109919]));

var G__109920 = (i__59406__auto___109919 + (1));
i__59406__auto___109919 = G__109920;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109917))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109917),args);
});})(g__59516__auto___109917))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__59516__auto___109917){
return (function (seq109862){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109862));
});})(g__59516__auto___109917))
;


var g__59516__auto___109921 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__59516__auto___109921){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109922 = arguments.length;
var i__59406__auto___109923 = (0);
while(true){
if((i__59406__auto___109923 < len__59405__auto___109922)){
args__59412__auto__.push((arguments[i__59406__auto___109923]));

var G__109924 = (i__59406__auto___109923 + (1));
i__59406__auto___109923 = G__109924;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109921))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109921){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109921),args);
});})(g__59516__auto___109921))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__59516__auto___109921){
return (function (seq109863){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109863));
});})(g__59516__auto___109921))
;


var g__59516__auto___109925 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__59516__auto___109925){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109926 = arguments.length;
var i__59406__auto___109927 = (0);
while(true){
if((i__59406__auto___109927 < len__59405__auto___109926)){
args__59412__auto__.push((arguments[i__59406__auto___109927]));

var G__109928 = (i__59406__auto___109927 + (1));
i__59406__auto___109927 = G__109928;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109925))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109925){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109925),args);
});})(g__59516__auto___109925))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__59516__auto___109925){
return (function (seq109864){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109864));
});})(g__59516__auto___109925))
;


var g__59516__auto___109929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__59516__auto___109929){
return (function cljs$spec$gen$alpha$return(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109930 = arguments.length;
var i__59406__auto___109931 = (0);
while(true){
if((i__59406__auto___109931 < len__59405__auto___109930)){
args__59412__auto__.push((arguments[i__59406__auto___109931]));

var G__109932 = (i__59406__auto___109931 + (1));
i__59406__auto___109931 = G__109932;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109929))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109929){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109929),args);
});})(g__59516__auto___109929))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__59516__auto___109929){
return (function (seq109865){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109865));
});})(g__59516__auto___109929))
;


var g__59516__auto___109933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__59516__auto___109933){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109934 = arguments.length;
var i__59406__auto___109935 = (0);
while(true){
if((i__59406__auto___109935 < len__59405__auto___109934)){
args__59412__auto__.push((arguments[i__59406__auto___109935]));

var G__109936 = (i__59406__auto___109935 + (1));
i__59406__auto___109935 = G__109936;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109933))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109933){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109933),args);
});})(g__59516__auto___109933))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__59516__auto___109933){
return (function (seq109866){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109866));
});})(g__59516__auto___109933))
;


var g__59516__auto___109937 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__59516__auto___109937){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109938 = arguments.length;
var i__59406__auto___109939 = (0);
while(true){
if((i__59406__auto___109939 < len__59405__auto___109938)){
args__59412__auto__.push((arguments[i__59406__auto___109939]));

var G__109940 = (i__59406__auto___109939 + (1));
i__59406__auto___109939 = G__109940;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109937))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109937){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109937),args);
});})(g__59516__auto___109937))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__59516__auto___109937){
return (function (seq109867){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109867));
});})(g__59516__auto___109937))
;


var g__59516__auto___109941 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__59516__auto___109941){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109942 = arguments.length;
var i__59406__auto___109943 = (0);
while(true){
if((i__59406__auto___109943 < len__59405__auto___109942)){
args__59412__auto__.push((arguments[i__59406__auto___109943]));

var G__109944 = (i__59406__auto___109943 + (1));
i__59406__auto___109943 = G__109944;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59516__auto___109941))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59516__auto___109941){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59516__auto___109941),args);
});})(g__59516__auto___109941))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__59516__auto___109941){
return (function (seq109868){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109868));
});})(g__59516__auto___109941))
;

var g__59529__auto___109966 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__59529__auto___109966){
return (function cljs$spec$gen$alpha$any(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109967 = arguments.length;
var i__59406__auto___109968 = (0);
while(true){
if((i__59406__auto___109968 < len__59405__auto___109967)){
args__59412__auto__.push((arguments[i__59406__auto___109968]));

var G__109969 = (i__59406__auto___109968 + (1));
i__59406__auto___109968 = G__109969;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109966))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109966){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109966);
});})(g__59529__auto___109966))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__59529__auto___109966){
return (function (seq109945){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109945));
});})(g__59529__auto___109966))
;


var g__59529__auto___109970 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__59529__auto___109970){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109971 = arguments.length;
var i__59406__auto___109972 = (0);
while(true){
if((i__59406__auto___109972 < len__59405__auto___109971)){
args__59412__auto__.push((arguments[i__59406__auto___109972]));

var G__109973 = (i__59406__auto___109972 + (1));
i__59406__auto___109972 = G__109973;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109970))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109970){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109970);
});})(g__59529__auto___109970))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__59529__auto___109970){
return (function (seq109946){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109946));
});})(g__59529__auto___109970))
;


var g__59529__auto___109974 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__59529__auto___109974){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109975 = arguments.length;
var i__59406__auto___109976 = (0);
while(true){
if((i__59406__auto___109976 < len__59405__auto___109975)){
args__59412__auto__.push((arguments[i__59406__auto___109976]));

var G__109977 = (i__59406__auto___109976 + (1));
i__59406__auto___109976 = G__109977;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109974))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109974){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109974);
});})(g__59529__auto___109974))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__59529__auto___109974){
return (function (seq109947){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109947));
});})(g__59529__auto___109974))
;


var g__59529__auto___109978 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__59529__auto___109978){
return (function cljs$spec$gen$alpha$char(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109979 = arguments.length;
var i__59406__auto___109980 = (0);
while(true){
if((i__59406__auto___109980 < len__59405__auto___109979)){
args__59412__auto__.push((arguments[i__59406__auto___109980]));

var G__109981 = (i__59406__auto___109980 + (1));
i__59406__auto___109980 = G__109981;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109978))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109978){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109978);
});})(g__59529__auto___109978))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__59529__auto___109978){
return (function (seq109948){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109948));
});})(g__59529__auto___109978))
;


var g__59529__auto___109982 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__59529__auto___109982){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109983 = arguments.length;
var i__59406__auto___109984 = (0);
while(true){
if((i__59406__auto___109984 < len__59405__auto___109983)){
args__59412__auto__.push((arguments[i__59406__auto___109984]));

var G__109985 = (i__59406__auto___109984 + (1));
i__59406__auto___109984 = G__109985;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109982))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109982){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109982);
});})(g__59529__auto___109982))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__59529__auto___109982){
return (function (seq109949){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109949));
});})(g__59529__auto___109982))
;


var g__59529__auto___109986 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__59529__auto___109986){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109987 = arguments.length;
var i__59406__auto___109988 = (0);
while(true){
if((i__59406__auto___109988 < len__59405__auto___109987)){
args__59412__auto__.push((arguments[i__59406__auto___109988]));

var G__109989 = (i__59406__auto___109988 + (1));
i__59406__auto___109988 = G__109989;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109986))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109986){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109986);
});})(g__59529__auto___109986))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__59529__auto___109986){
return (function (seq109950){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109950));
});})(g__59529__auto___109986))
;


var g__59529__auto___109990 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__59529__auto___109990){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109991 = arguments.length;
var i__59406__auto___109992 = (0);
while(true){
if((i__59406__auto___109992 < len__59405__auto___109991)){
args__59412__auto__.push((arguments[i__59406__auto___109992]));

var G__109993 = (i__59406__auto___109992 + (1));
i__59406__auto___109992 = G__109993;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109990))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109990){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109990);
});})(g__59529__auto___109990))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__59529__auto___109990){
return (function (seq109951){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109951));
});})(g__59529__auto___109990))
;


var g__59529__auto___109994 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__59529__auto___109994){
return (function cljs$spec$gen$alpha$double(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109995 = arguments.length;
var i__59406__auto___109996 = (0);
while(true){
if((i__59406__auto___109996 < len__59405__auto___109995)){
args__59412__auto__.push((arguments[i__59406__auto___109996]));

var G__109997 = (i__59406__auto___109996 + (1));
i__59406__auto___109996 = G__109997;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109994))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109994){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109994);
});})(g__59529__auto___109994))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__59529__auto___109994){
return (function (seq109952){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109952));
});})(g__59529__auto___109994))
;


var g__59529__auto___109998 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__59529__auto___109998){
return (function cljs$spec$gen$alpha$int(var_args){
var args__59412__auto__ = [];
var len__59405__auto___109999 = arguments.length;
var i__59406__auto___110000 = (0);
while(true){
if((i__59406__auto___110000 < len__59405__auto___109999)){
args__59412__auto__.push((arguments[i__59406__auto___110000]));

var G__110001 = (i__59406__auto___110000 + (1));
i__59406__auto___110000 = G__110001;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___109998))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___109998){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___109998);
});})(g__59529__auto___109998))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__59529__auto___109998){
return (function (seq109953){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109953));
});})(g__59529__auto___109998))
;


var g__59529__auto___110002 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__59529__auto___110002){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110003 = arguments.length;
var i__59406__auto___110004 = (0);
while(true){
if((i__59406__auto___110004 < len__59405__auto___110003)){
args__59412__auto__.push((arguments[i__59406__auto___110004]));

var G__110005 = (i__59406__auto___110004 + (1));
i__59406__auto___110004 = G__110005;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110002))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110002){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110002);
});})(g__59529__auto___110002))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__59529__auto___110002){
return (function (seq109954){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109954));
});})(g__59529__auto___110002))
;


var g__59529__auto___110006 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__59529__auto___110006){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110007 = arguments.length;
var i__59406__auto___110008 = (0);
while(true){
if((i__59406__auto___110008 < len__59405__auto___110007)){
args__59412__auto__.push((arguments[i__59406__auto___110008]));

var G__110009 = (i__59406__auto___110008 + (1));
i__59406__auto___110008 = G__110009;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110006))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110006){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110006);
});})(g__59529__auto___110006))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__59529__auto___110006){
return (function (seq109955){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109955));
});})(g__59529__auto___110006))
;


var g__59529__auto___110010 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__59529__auto___110010){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110011 = arguments.length;
var i__59406__auto___110012 = (0);
while(true){
if((i__59406__auto___110012 < len__59405__auto___110011)){
args__59412__auto__.push((arguments[i__59406__auto___110012]));

var G__110013 = (i__59406__auto___110012 + (1));
i__59406__auto___110012 = G__110013;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110010))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110010){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110010);
});})(g__59529__auto___110010))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__59529__auto___110010){
return (function (seq109956){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109956));
});})(g__59529__auto___110010))
;


var g__59529__auto___110014 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__59529__auto___110014){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110015 = arguments.length;
var i__59406__auto___110016 = (0);
while(true){
if((i__59406__auto___110016 < len__59405__auto___110015)){
args__59412__auto__.push((arguments[i__59406__auto___110016]));

var G__110017 = (i__59406__auto___110016 + (1));
i__59406__auto___110016 = G__110017;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110014))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110014){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110014);
});})(g__59529__auto___110014))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__59529__auto___110014){
return (function (seq109957){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109957));
});})(g__59529__auto___110014))
;


var g__59529__auto___110018 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__59529__auto___110018){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110019 = arguments.length;
var i__59406__auto___110020 = (0);
while(true){
if((i__59406__auto___110020 < len__59405__auto___110019)){
args__59412__auto__.push((arguments[i__59406__auto___110020]));

var G__110021 = (i__59406__auto___110020 + (1));
i__59406__auto___110020 = G__110021;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110018))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110018){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110018);
});})(g__59529__auto___110018))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__59529__auto___110018){
return (function (seq109958){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109958));
});})(g__59529__auto___110018))
;


var g__59529__auto___110022 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__59529__auto___110022){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110023 = arguments.length;
var i__59406__auto___110024 = (0);
while(true){
if((i__59406__auto___110024 < len__59405__auto___110023)){
args__59412__auto__.push((arguments[i__59406__auto___110024]));

var G__110025 = (i__59406__auto___110024 + (1));
i__59406__auto___110024 = G__110025;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110022))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110022){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110022);
});})(g__59529__auto___110022))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__59529__auto___110022){
return (function (seq109959){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109959));
});})(g__59529__auto___110022))
;


var g__59529__auto___110026 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__59529__auto___110026){
return (function cljs$spec$gen$alpha$string(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110027 = arguments.length;
var i__59406__auto___110028 = (0);
while(true){
if((i__59406__auto___110028 < len__59405__auto___110027)){
args__59412__auto__.push((arguments[i__59406__auto___110028]));

var G__110029 = (i__59406__auto___110028 + (1));
i__59406__auto___110028 = G__110029;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110026))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110026){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110026);
});})(g__59529__auto___110026))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__59529__auto___110026){
return (function (seq109960){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109960));
});})(g__59529__auto___110026))
;


var g__59529__auto___110030 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__59529__auto___110030){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110031 = arguments.length;
var i__59406__auto___110032 = (0);
while(true){
if((i__59406__auto___110032 < len__59405__auto___110031)){
args__59412__auto__.push((arguments[i__59406__auto___110032]));

var G__110033 = (i__59406__auto___110032 + (1));
i__59406__auto___110032 = G__110033;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110030))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110030){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110030);
});})(g__59529__auto___110030))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__59529__auto___110030){
return (function (seq109961){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109961));
});})(g__59529__auto___110030))
;


var g__59529__auto___110034 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__59529__auto___110034){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110035 = arguments.length;
var i__59406__auto___110036 = (0);
while(true){
if((i__59406__auto___110036 < len__59405__auto___110035)){
args__59412__auto__.push((arguments[i__59406__auto___110036]));

var G__110037 = (i__59406__auto___110036 + (1));
i__59406__auto___110036 = G__110037;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110034))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110034){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110034);
});})(g__59529__auto___110034))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__59529__auto___110034){
return (function (seq109962){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109962));
});})(g__59529__auto___110034))
;


var g__59529__auto___110038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__59529__auto___110038){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110039 = arguments.length;
var i__59406__auto___110040 = (0);
while(true){
if((i__59406__auto___110040 < len__59405__auto___110039)){
args__59412__auto__.push((arguments[i__59406__auto___110040]));

var G__110041 = (i__59406__auto___110040 + (1));
i__59406__auto___110040 = G__110041;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110038))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110038){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110038);
});})(g__59529__auto___110038))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__59529__auto___110038){
return (function (seq109963){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109963));
});})(g__59529__auto___110038))
;


var g__59529__auto___110042 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__59529__auto___110042){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110043 = arguments.length;
var i__59406__auto___110044 = (0);
while(true){
if((i__59406__auto___110044 < len__59405__auto___110043)){
args__59412__auto__.push((arguments[i__59406__auto___110044]));

var G__110045 = (i__59406__auto___110044 + (1));
i__59406__auto___110044 = G__110045;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110042))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110042){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110042);
});})(g__59529__auto___110042))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__59529__auto___110042){
return (function (seq109964){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109964));
});})(g__59529__auto___110042))
;


var g__59529__auto___110046 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__59529__auto___110046){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110047 = arguments.length;
var i__59406__auto___110048 = (0);
while(true){
if((i__59406__auto___110048 < len__59405__auto___110047)){
args__59412__auto__.push((arguments[i__59406__auto___110048]));

var G__110049 = (i__59406__auto___110048 + (1));
i__59406__auto___110048 = G__110049;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});})(g__59529__auto___110046))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59529__auto___110046){
return (function (args){
return cljs.core.deref.call(null,g__59529__auto___110046);
});})(g__59529__auto___110046))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__59529__auto___110046){
return (function (seq109965){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq109965));
});})(g__59529__auto___110046))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__59412__auto__ = [];
var len__59405__auto___110052 = arguments.length;
var i__59406__auto___110053 = (0);
while(true){
if((i__59406__auto___110053 < len__59405__auto___110052)){
args__59412__auto__.push((arguments[i__59406__auto___110053]));

var G__110054 = (i__59406__auto___110053 + (1));
i__59406__auto___110053 = G__110054;
continue;
} else {
}
break;
}

var argseq__59413__auto__ = ((((0) < args__59412__auto__.length))?(new cljs.core.IndexedSeq(args__59412__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__59413__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__110050_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__110050_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq110051){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq110051));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__110055_SHARP_){
return (new Date(p1__110055_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1505927815211
