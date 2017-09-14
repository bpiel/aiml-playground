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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__58832__auto__,writer__58833__auto__,opt__58834__auto__){
return cljs.core._write.call(null,writer__58833__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__59445__auto__ = [];
var len__59438__auto___59826 = arguments.length;
var i__59439__auto___59827 = (0);
while(true){
if((i__59439__auto___59827 < len__59438__auto___59826)){
args__59445__auto__.push((arguments[i__59439__auto___59827]));

var G__59828 = (i__59439__auto___59827 + (1));
i__59439__auto___59827 = G__59828;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq59825){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59825));
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
var args__59445__auto__ = [];
var len__59438__auto___59830 = arguments.length;
var i__59439__auto___59831 = (0);
while(true){
if((i__59439__auto___59831 < len__59438__auto___59830)){
args__59445__auto__.push((arguments[i__59439__auto___59831]));

var G__59832 = (i__59439__auto___59831 + (1));
i__59439__auto___59831 = G__59832;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq59829){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59829));
});

var g_QMARK__59833 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_59834 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__59833){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__59833))
,null));
var mkg_59835 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__59833,g_59834){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__59833,g_59834))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__59833,g_59834,mkg_59835){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__59833).call(null,x);
});})(g_QMARK__59833,g_59834,mkg_59835))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__59833,g_59834,mkg_59835){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_59835).call(null,gfn);
});})(g_QMARK__59833,g_59834,mkg_59835))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__59833,g_59834,mkg_59835){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_59834).call(null,generator);
});})(g_QMARK__59833,g_59834,mkg_59835))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__59541__auto___59855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__59541__auto___59855){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59856 = arguments.length;
var i__59439__auto___59857 = (0);
while(true){
if((i__59439__auto___59857 < len__59438__auto___59856)){
args__59445__auto__.push((arguments[i__59439__auto___59857]));

var G__59858 = (i__59439__auto___59857 + (1));
i__59439__auto___59857 = G__59858;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59855))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59855),args);
});})(g__59541__auto___59855))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__59541__auto___59855){
return (function (seq59836){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59836));
});})(g__59541__auto___59855))
;


var g__59541__auto___59859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__59541__auto___59859){
return (function cljs$spec$gen$alpha$list(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59860 = arguments.length;
var i__59439__auto___59861 = (0);
while(true){
if((i__59439__auto___59861 < len__59438__auto___59860)){
args__59445__auto__.push((arguments[i__59439__auto___59861]));

var G__59862 = (i__59439__auto___59861 + (1));
i__59439__auto___59861 = G__59862;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59859))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59859),args);
});})(g__59541__auto___59859))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__59541__auto___59859){
return (function (seq59837){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59837));
});})(g__59541__auto___59859))
;


var g__59541__auto___59863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__59541__auto___59863){
return (function cljs$spec$gen$alpha$map(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59864 = arguments.length;
var i__59439__auto___59865 = (0);
while(true){
if((i__59439__auto___59865 < len__59438__auto___59864)){
args__59445__auto__.push((arguments[i__59439__auto___59865]));

var G__59866 = (i__59439__auto___59865 + (1));
i__59439__auto___59865 = G__59866;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59863))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59863),args);
});})(g__59541__auto___59863))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__59541__auto___59863){
return (function (seq59838){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59838));
});})(g__59541__auto___59863))
;


var g__59541__auto___59867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__59541__auto___59867){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59868 = arguments.length;
var i__59439__auto___59869 = (0);
while(true){
if((i__59439__auto___59869 < len__59438__auto___59868)){
args__59445__auto__.push((arguments[i__59439__auto___59869]));

var G__59870 = (i__59439__auto___59869 + (1));
i__59439__auto___59869 = G__59870;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59867))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59867),args);
});})(g__59541__auto___59867))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__59541__auto___59867){
return (function (seq59839){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59839));
});})(g__59541__auto___59867))
;


var g__59541__auto___59871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__59541__auto___59871){
return (function cljs$spec$gen$alpha$set(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59872 = arguments.length;
var i__59439__auto___59873 = (0);
while(true){
if((i__59439__auto___59873 < len__59438__auto___59872)){
args__59445__auto__.push((arguments[i__59439__auto___59873]));

var G__59874 = (i__59439__auto___59873 + (1));
i__59439__auto___59873 = G__59874;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59871))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59871),args);
});})(g__59541__auto___59871))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__59541__auto___59871){
return (function (seq59840){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59840));
});})(g__59541__auto___59871))
;


var g__59541__auto___59875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__59541__auto___59875){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59876 = arguments.length;
var i__59439__auto___59877 = (0);
while(true){
if((i__59439__auto___59877 < len__59438__auto___59876)){
args__59445__auto__.push((arguments[i__59439__auto___59877]));

var G__59878 = (i__59439__auto___59877 + (1));
i__59439__auto___59877 = G__59878;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59875))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59875),args);
});})(g__59541__auto___59875))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__59541__auto___59875){
return (function (seq59841){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59841));
});})(g__59541__auto___59875))
;


var g__59541__auto___59879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__59541__auto___59879){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59880 = arguments.length;
var i__59439__auto___59881 = (0);
while(true){
if((i__59439__auto___59881 < len__59438__auto___59880)){
args__59445__auto__.push((arguments[i__59439__auto___59881]));

var G__59882 = (i__59439__auto___59881 + (1));
i__59439__auto___59881 = G__59882;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59879))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59879),args);
});})(g__59541__auto___59879))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__59541__auto___59879){
return (function (seq59842){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59842));
});})(g__59541__auto___59879))
;


var g__59541__auto___59883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__59541__auto___59883){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59884 = arguments.length;
var i__59439__auto___59885 = (0);
while(true){
if((i__59439__auto___59885 < len__59438__auto___59884)){
args__59445__auto__.push((arguments[i__59439__auto___59885]));

var G__59886 = (i__59439__auto___59885 + (1));
i__59439__auto___59885 = G__59886;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59883))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59883),args);
});})(g__59541__auto___59883))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__59541__auto___59883){
return (function (seq59843){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59843));
});})(g__59541__auto___59883))
;


var g__59541__auto___59887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__59541__auto___59887){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59888 = arguments.length;
var i__59439__auto___59889 = (0);
while(true){
if((i__59439__auto___59889 < len__59438__auto___59888)){
args__59445__auto__.push((arguments[i__59439__auto___59889]));

var G__59890 = (i__59439__auto___59889 + (1));
i__59439__auto___59889 = G__59890;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59887))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59887),args);
});})(g__59541__auto___59887))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__59541__auto___59887){
return (function (seq59844){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59844));
});})(g__59541__auto___59887))
;


var g__59541__auto___59891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__59541__auto___59891){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59892 = arguments.length;
var i__59439__auto___59893 = (0);
while(true){
if((i__59439__auto___59893 < len__59438__auto___59892)){
args__59445__auto__.push((arguments[i__59439__auto___59893]));

var G__59894 = (i__59439__auto___59893 + (1));
i__59439__auto___59893 = G__59894;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59891))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59891),args);
});})(g__59541__auto___59891))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__59541__auto___59891){
return (function (seq59845){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59845));
});})(g__59541__auto___59891))
;


var g__59541__auto___59895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__59541__auto___59895){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59896 = arguments.length;
var i__59439__auto___59897 = (0);
while(true){
if((i__59439__auto___59897 < len__59438__auto___59896)){
args__59445__auto__.push((arguments[i__59439__auto___59897]));

var G__59898 = (i__59439__auto___59897 + (1));
i__59439__auto___59897 = G__59898;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59895))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59895),args);
});})(g__59541__auto___59895))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__59541__auto___59895){
return (function (seq59846){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59846));
});})(g__59541__auto___59895))
;


var g__59541__auto___59899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__59541__auto___59899){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59900 = arguments.length;
var i__59439__auto___59901 = (0);
while(true){
if((i__59439__auto___59901 < len__59438__auto___59900)){
args__59445__auto__.push((arguments[i__59439__auto___59901]));

var G__59902 = (i__59439__auto___59901 + (1));
i__59439__auto___59901 = G__59902;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59899))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59899),args);
});})(g__59541__auto___59899))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__59541__auto___59899){
return (function (seq59847){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59847));
});})(g__59541__auto___59899))
;


var g__59541__auto___59903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__59541__auto___59903){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59904 = arguments.length;
var i__59439__auto___59905 = (0);
while(true){
if((i__59439__auto___59905 < len__59438__auto___59904)){
args__59445__auto__.push((arguments[i__59439__auto___59905]));

var G__59906 = (i__59439__auto___59905 + (1));
i__59439__auto___59905 = G__59906;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59903))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59903),args);
});})(g__59541__auto___59903))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__59541__auto___59903){
return (function (seq59848){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59848));
});})(g__59541__auto___59903))
;


var g__59541__auto___59907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__59541__auto___59907){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59908 = arguments.length;
var i__59439__auto___59909 = (0);
while(true){
if((i__59439__auto___59909 < len__59438__auto___59908)){
args__59445__auto__.push((arguments[i__59439__auto___59909]));

var G__59910 = (i__59439__auto___59909 + (1));
i__59439__auto___59909 = G__59910;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59907))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59907),args);
});})(g__59541__auto___59907))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__59541__auto___59907){
return (function (seq59849){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59849));
});})(g__59541__auto___59907))
;


var g__59541__auto___59911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__59541__auto___59911){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59912 = arguments.length;
var i__59439__auto___59913 = (0);
while(true){
if((i__59439__auto___59913 < len__59438__auto___59912)){
args__59445__auto__.push((arguments[i__59439__auto___59913]));

var G__59914 = (i__59439__auto___59913 + (1));
i__59439__auto___59913 = G__59914;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59911))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59911),args);
});})(g__59541__auto___59911))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__59541__auto___59911){
return (function (seq59850){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59850));
});})(g__59541__auto___59911))
;


var g__59541__auto___59915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__59541__auto___59915){
return (function cljs$spec$gen$alpha$return(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59916 = arguments.length;
var i__59439__auto___59917 = (0);
while(true){
if((i__59439__auto___59917 < len__59438__auto___59916)){
args__59445__auto__.push((arguments[i__59439__auto___59917]));

var G__59918 = (i__59439__auto___59917 + (1));
i__59439__auto___59917 = G__59918;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59915))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59915){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59915),args);
});})(g__59541__auto___59915))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__59541__auto___59915){
return (function (seq59851){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59851));
});})(g__59541__auto___59915))
;


var g__59541__auto___59919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__59541__auto___59919){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59920 = arguments.length;
var i__59439__auto___59921 = (0);
while(true){
if((i__59439__auto___59921 < len__59438__auto___59920)){
args__59445__auto__.push((arguments[i__59439__auto___59921]));

var G__59922 = (i__59439__auto___59921 + (1));
i__59439__auto___59921 = G__59922;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59919))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59919),args);
});})(g__59541__auto___59919))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__59541__auto___59919){
return (function (seq59852){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59852));
});})(g__59541__auto___59919))
;


var g__59541__auto___59923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__59541__auto___59923){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59924 = arguments.length;
var i__59439__auto___59925 = (0);
while(true){
if((i__59439__auto___59925 < len__59438__auto___59924)){
args__59445__auto__.push((arguments[i__59439__auto___59925]));

var G__59926 = (i__59439__auto___59925 + (1));
i__59439__auto___59925 = G__59926;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59923))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59923),args);
});})(g__59541__auto___59923))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__59541__auto___59923){
return (function (seq59853){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59853));
});})(g__59541__auto___59923))
;


var g__59541__auto___59927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__59541__auto___59927){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59928 = arguments.length;
var i__59439__auto___59929 = (0);
while(true){
if((i__59439__auto___59929 < len__59438__auto___59928)){
args__59445__auto__.push((arguments[i__59439__auto___59929]));

var G__59930 = (i__59439__auto___59929 + (1));
i__59439__auto___59929 = G__59930;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59541__auto___59927))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59541__auto___59927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59541__auto___59927),args);
});})(g__59541__auto___59927))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__59541__auto___59927){
return (function (seq59854){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59854));
});})(g__59541__auto___59927))
;

var g__59554__auto___59952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__59554__auto___59952){
return (function cljs$spec$gen$alpha$any(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59953 = arguments.length;
var i__59439__auto___59954 = (0);
while(true){
if((i__59439__auto___59954 < len__59438__auto___59953)){
args__59445__auto__.push((arguments[i__59439__auto___59954]));

var G__59955 = (i__59439__auto___59954 + (1));
i__59439__auto___59954 = G__59955;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59952))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59952){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59952);
});})(g__59554__auto___59952))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__59554__auto___59952){
return (function (seq59931){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59931));
});})(g__59554__auto___59952))
;


var g__59554__auto___59956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__59554__auto___59956){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59957 = arguments.length;
var i__59439__auto___59958 = (0);
while(true){
if((i__59439__auto___59958 < len__59438__auto___59957)){
args__59445__auto__.push((arguments[i__59439__auto___59958]));

var G__59959 = (i__59439__auto___59958 + (1));
i__59439__auto___59958 = G__59959;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59956))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59956){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59956);
});})(g__59554__auto___59956))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__59554__auto___59956){
return (function (seq59932){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59932));
});})(g__59554__auto___59956))
;


var g__59554__auto___59960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__59554__auto___59960){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59961 = arguments.length;
var i__59439__auto___59962 = (0);
while(true){
if((i__59439__auto___59962 < len__59438__auto___59961)){
args__59445__auto__.push((arguments[i__59439__auto___59962]));

var G__59963 = (i__59439__auto___59962 + (1));
i__59439__auto___59962 = G__59963;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59960))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59960){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59960);
});})(g__59554__auto___59960))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__59554__auto___59960){
return (function (seq59933){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59933));
});})(g__59554__auto___59960))
;


var g__59554__auto___59964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__59554__auto___59964){
return (function cljs$spec$gen$alpha$char(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59965 = arguments.length;
var i__59439__auto___59966 = (0);
while(true){
if((i__59439__auto___59966 < len__59438__auto___59965)){
args__59445__auto__.push((arguments[i__59439__auto___59966]));

var G__59967 = (i__59439__auto___59966 + (1));
i__59439__auto___59966 = G__59967;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59964))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59964){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59964);
});})(g__59554__auto___59964))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__59554__auto___59964){
return (function (seq59934){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59934));
});})(g__59554__auto___59964))
;


var g__59554__auto___59968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__59554__auto___59968){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59969 = arguments.length;
var i__59439__auto___59970 = (0);
while(true){
if((i__59439__auto___59970 < len__59438__auto___59969)){
args__59445__auto__.push((arguments[i__59439__auto___59970]));

var G__59971 = (i__59439__auto___59970 + (1));
i__59439__auto___59970 = G__59971;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59968))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59968){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59968);
});})(g__59554__auto___59968))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__59554__auto___59968){
return (function (seq59935){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59935));
});})(g__59554__auto___59968))
;


var g__59554__auto___59972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__59554__auto___59972){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59973 = arguments.length;
var i__59439__auto___59974 = (0);
while(true){
if((i__59439__auto___59974 < len__59438__auto___59973)){
args__59445__auto__.push((arguments[i__59439__auto___59974]));

var G__59975 = (i__59439__auto___59974 + (1));
i__59439__auto___59974 = G__59975;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59972))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59972){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59972);
});})(g__59554__auto___59972))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__59554__auto___59972){
return (function (seq59936){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59936));
});})(g__59554__auto___59972))
;


var g__59554__auto___59976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__59554__auto___59976){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59977 = arguments.length;
var i__59439__auto___59978 = (0);
while(true){
if((i__59439__auto___59978 < len__59438__auto___59977)){
args__59445__auto__.push((arguments[i__59439__auto___59978]));

var G__59979 = (i__59439__auto___59978 + (1));
i__59439__auto___59978 = G__59979;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59976))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59976){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59976);
});})(g__59554__auto___59976))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__59554__auto___59976){
return (function (seq59937){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59937));
});})(g__59554__auto___59976))
;


var g__59554__auto___59980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__59554__auto___59980){
return (function cljs$spec$gen$alpha$double(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59981 = arguments.length;
var i__59439__auto___59982 = (0);
while(true){
if((i__59439__auto___59982 < len__59438__auto___59981)){
args__59445__auto__.push((arguments[i__59439__auto___59982]));

var G__59983 = (i__59439__auto___59982 + (1));
i__59439__auto___59982 = G__59983;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59980))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59980){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59980);
});})(g__59554__auto___59980))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__59554__auto___59980){
return (function (seq59938){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59938));
});})(g__59554__auto___59980))
;


var g__59554__auto___59984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__59554__auto___59984){
return (function cljs$spec$gen$alpha$int(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59985 = arguments.length;
var i__59439__auto___59986 = (0);
while(true){
if((i__59439__auto___59986 < len__59438__auto___59985)){
args__59445__auto__.push((arguments[i__59439__auto___59986]));

var G__59987 = (i__59439__auto___59986 + (1));
i__59439__auto___59986 = G__59987;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59984))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59984){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59984);
});})(g__59554__auto___59984))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__59554__auto___59984){
return (function (seq59939){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59939));
});})(g__59554__auto___59984))
;


var g__59554__auto___59988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__59554__auto___59988){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59989 = arguments.length;
var i__59439__auto___59990 = (0);
while(true){
if((i__59439__auto___59990 < len__59438__auto___59989)){
args__59445__auto__.push((arguments[i__59439__auto___59990]));

var G__59991 = (i__59439__auto___59990 + (1));
i__59439__auto___59990 = G__59991;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59988))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59988){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59988);
});})(g__59554__auto___59988))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__59554__auto___59988){
return (function (seq59940){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59940));
});})(g__59554__auto___59988))
;


var g__59554__auto___59992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__59554__auto___59992){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59993 = arguments.length;
var i__59439__auto___59994 = (0);
while(true){
if((i__59439__auto___59994 < len__59438__auto___59993)){
args__59445__auto__.push((arguments[i__59439__auto___59994]));

var G__59995 = (i__59439__auto___59994 + (1));
i__59439__auto___59994 = G__59995;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59992))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59992){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59992);
});})(g__59554__auto___59992))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__59554__auto___59992){
return (function (seq59941){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59941));
});})(g__59554__auto___59992))
;


var g__59554__auto___59996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__59554__auto___59996){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__59445__auto__ = [];
var len__59438__auto___59997 = arguments.length;
var i__59439__auto___59998 = (0);
while(true){
if((i__59439__auto___59998 < len__59438__auto___59997)){
args__59445__auto__.push((arguments[i__59439__auto___59998]));

var G__59999 = (i__59439__auto___59998 + (1));
i__59439__auto___59998 = G__59999;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___59996))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___59996){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___59996);
});})(g__59554__auto___59996))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__59554__auto___59996){
return (function (seq59942){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59942));
});})(g__59554__auto___59996))
;


var g__59554__auto___60000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__59554__auto___60000){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60001 = arguments.length;
var i__59439__auto___60002 = (0);
while(true){
if((i__59439__auto___60002 < len__59438__auto___60001)){
args__59445__auto__.push((arguments[i__59439__auto___60002]));

var G__60003 = (i__59439__auto___60002 + (1));
i__59439__auto___60002 = G__60003;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60000))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60000){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60000);
});})(g__59554__auto___60000))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__59554__auto___60000){
return (function (seq59943){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59943));
});})(g__59554__auto___60000))
;


var g__59554__auto___60004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__59554__auto___60004){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60005 = arguments.length;
var i__59439__auto___60006 = (0);
while(true){
if((i__59439__auto___60006 < len__59438__auto___60005)){
args__59445__auto__.push((arguments[i__59439__auto___60006]));

var G__60007 = (i__59439__auto___60006 + (1));
i__59439__auto___60006 = G__60007;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60004))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60004){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60004);
});})(g__59554__auto___60004))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__59554__auto___60004){
return (function (seq59944){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59944));
});})(g__59554__auto___60004))
;


var g__59554__auto___60008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__59554__auto___60008){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60009 = arguments.length;
var i__59439__auto___60010 = (0);
while(true){
if((i__59439__auto___60010 < len__59438__auto___60009)){
args__59445__auto__.push((arguments[i__59439__auto___60010]));

var G__60011 = (i__59439__auto___60010 + (1));
i__59439__auto___60010 = G__60011;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60008))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60008){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60008);
});})(g__59554__auto___60008))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__59554__auto___60008){
return (function (seq59945){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59945));
});})(g__59554__auto___60008))
;


var g__59554__auto___60012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__59554__auto___60012){
return (function cljs$spec$gen$alpha$string(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60013 = arguments.length;
var i__59439__auto___60014 = (0);
while(true){
if((i__59439__auto___60014 < len__59438__auto___60013)){
args__59445__auto__.push((arguments[i__59439__auto___60014]));

var G__60015 = (i__59439__auto___60014 + (1));
i__59439__auto___60014 = G__60015;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60012))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60012){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60012);
});})(g__59554__auto___60012))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__59554__auto___60012){
return (function (seq59946){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59946));
});})(g__59554__auto___60012))
;


var g__59554__auto___60016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__59554__auto___60016){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60017 = arguments.length;
var i__59439__auto___60018 = (0);
while(true){
if((i__59439__auto___60018 < len__59438__auto___60017)){
args__59445__auto__.push((arguments[i__59439__auto___60018]));

var G__60019 = (i__59439__auto___60018 + (1));
i__59439__auto___60018 = G__60019;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60016))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60016){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60016);
});})(g__59554__auto___60016))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__59554__auto___60016){
return (function (seq59947){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59947));
});})(g__59554__auto___60016))
;


var g__59554__auto___60020 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__59554__auto___60020){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60021 = arguments.length;
var i__59439__auto___60022 = (0);
while(true){
if((i__59439__auto___60022 < len__59438__auto___60021)){
args__59445__auto__.push((arguments[i__59439__auto___60022]));

var G__60023 = (i__59439__auto___60022 + (1));
i__59439__auto___60022 = G__60023;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60020))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60020){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60020);
});})(g__59554__auto___60020))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__59554__auto___60020){
return (function (seq59948){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59948));
});})(g__59554__auto___60020))
;


var g__59554__auto___60024 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__59554__auto___60024){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60025 = arguments.length;
var i__59439__auto___60026 = (0);
while(true){
if((i__59439__auto___60026 < len__59438__auto___60025)){
args__59445__auto__.push((arguments[i__59439__auto___60026]));

var G__60027 = (i__59439__auto___60026 + (1));
i__59439__auto___60026 = G__60027;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60024))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60024){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60024);
});})(g__59554__auto___60024))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__59554__auto___60024){
return (function (seq59949){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59949));
});})(g__59554__auto___60024))
;


var g__59554__auto___60028 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__59554__auto___60028){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60029 = arguments.length;
var i__59439__auto___60030 = (0);
while(true){
if((i__59439__auto___60030 < len__59438__auto___60029)){
args__59445__auto__.push((arguments[i__59439__auto___60030]));

var G__60031 = (i__59439__auto___60030 + (1));
i__59439__auto___60030 = G__60031;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60028))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60028){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60028);
});})(g__59554__auto___60028))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__59554__auto___60028){
return (function (seq59950){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59950));
});})(g__59554__auto___60028))
;


var g__59554__auto___60032 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__59554__auto___60032){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60033 = arguments.length;
var i__59439__auto___60034 = (0);
while(true){
if((i__59439__auto___60034 < len__59438__auto___60033)){
args__59445__auto__.push((arguments[i__59439__auto___60034]));

var G__60035 = (i__59439__auto___60034 + (1));
i__59439__auto___60034 = G__60035;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});})(g__59554__auto___60032))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59554__auto___60032){
return (function (args){
return cljs.core.deref.call(null,g__59554__auto___60032);
});})(g__59554__auto___60032))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__59554__auto___60032){
return (function (seq59951){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59951));
});})(g__59554__auto___60032))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__59445__auto__ = [];
var len__59438__auto___60038 = arguments.length;
var i__59439__auto___60039 = (0);
while(true){
if((i__59439__auto___60039 < len__59438__auto___60038)){
args__59445__auto__.push((arguments[i__59439__auto___60039]));

var G__60040 = (i__59439__auto___60039 + (1));
i__59439__auto___60039 = G__60040;
continue;
} else {
}
break;
}

var argseq__59446__auto__ = ((((0) < args__59445__auto__.length))?(new cljs.core.IndexedSeq(args__59445__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__59446__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__60036_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__60036_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq60037){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60037));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__60041_SHARP_){
return (new Date(p1__60041_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1505406773905
