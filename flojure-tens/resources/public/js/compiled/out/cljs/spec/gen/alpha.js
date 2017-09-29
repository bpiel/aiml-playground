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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__58806__auto__,writer__58807__auto__,opt__58808__auto__){
return cljs.core._write.call(null,writer__58807__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__59419__auto__ = [];
var len__59412__auto___60443 = arguments.length;
var i__59413__auto___60444 = (0);
while(true){
if((i__59413__auto___60444 < len__59412__auto___60443)){
args__59419__auto__.push((arguments[i__59413__auto___60444]));

var G__60445 = (i__59413__auto___60444 + (1));
i__59413__auto___60444 = G__60445;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq60442){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60442));
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
var args__59419__auto__ = [];
var len__59412__auto___60447 = arguments.length;
var i__59413__auto___60448 = (0);
while(true){
if((i__59413__auto___60448 < len__59412__auto___60447)){
args__59419__auto__.push((arguments[i__59413__auto___60448]));

var G__60449 = (i__59413__auto___60448 + (1));
i__59413__auto___60448 = G__60449;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq60446){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60446));
});

var g_QMARK__60450 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_60451 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__60450){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__60450))
,null));
var mkg_60452 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__60450,g_60451){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__60450,g_60451))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__60450,g_60451,mkg_60452){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__60450).call(null,x);
});})(g_QMARK__60450,g_60451,mkg_60452))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__60450,g_60451,mkg_60452){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_60452).call(null,gfn);
});})(g_QMARK__60450,g_60451,mkg_60452))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__60450,g_60451,mkg_60452){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_60451).call(null,generator);
});})(g_QMARK__60450,g_60451,mkg_60452))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__60414__auto___60472 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__60414__auto___60472){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60473 = arguments.length;
var i__59413__auto___60474 = (0);
while(true){
if((i__59413__auto___60474 < len__59412__auto___60473)){
args__59419__auto__.push((arguments[i__59413__auto___60474]));

var G__60475 = (i__59413__auto___60474 + (1));
i__59413__auto___60474 = G__60475;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60472))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60472){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60472),args);
});})(g__60414__auto___60472))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__60414__auto___60472){
return (function (seq60453){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60453));
});})(g__60414__auto___60472))
;


var g__60414__auto___60476 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__60414__auto___60476){
return (function cljs$spec$gen$alpha$list(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60477 = arguments.length;
var i__59413__auto___60478 = (0);
while(true){
if((i__59413__auto___60478 < len__59412__auto___60477)){
args__59419__auto__.push((arguments[i__59413__auto___60478]));

var G__60479 = (i__59413__auto___60478 + (1));
i__59413__auto___60478 = G__60479;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60476))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60476){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60476),args);
});})(g__60414__auto___60476))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__60414__auto___60476){
return (function (seq60454){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60454));
});})(g__60414__auto___60476))
;


var g__60414__auto___60480 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__60414__auto___60480){
return (function cljs$spec$gen$alpha$map(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60481 = arguments.length;
var i__59413__auto___60482 = (0);
while(true){
if((i__59413__auto___60482 < len__59412__auto___60481)){
args__59419__auto__.push((arguments[i__59413__auto___60482]));

var G__60483 = (i__59413__auto___60482 + (1));
i__59413__auto___60482 = G__60483;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60480))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60480){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60480),args);
});})(g__60414__auto___60480))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__60414__auto___60480){
return (function (seq60455){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60455));
});})(g__60414__auto___60480))
;


var g__60414__auto___60484 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__60414__auto___60484){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60485 = arguments.length;
var i__59413__auto___60486 = (0);
while(true){
if((i__59413__auto___60486 < len__59412__auto___60485)){
args__59419__auto__.push((arguments[i__59413__auto___60486]));

var G__60487 = (i__59413__auto___60486 + (1));
i__59413__auto___60486 = G__60487;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60484))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60484){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60484),args);
});})(g__60414__auto___60484))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__60414__auto___60484){
return (function (seq60456){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60456));
});})(g__60414__auto___60484))
;


var g__60414__auto___60488 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__60414__auto___60488){
return (function cljs$spec$gen$alpha$set(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60489 = arguments.length;
var i__59413__auto___60490 = (0);
while(true){
if((i__59413__auto___60490 < len__59412__auto___60489)){
args__59419__auto__.push((arguments[i__59413__auto___60490]));

var G__60491 = (i__59413__auto___60490 + (1));
i__59413__auto___60490 = G__60491;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60488))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60488){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60488),args);
});})(g__60414__auto___60488))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__60414__auto___60488){
return (function (seq60457){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60457));
});})(g__60414__auto___60488))
;


var g__60414__auto___60492 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__60414__auto___60492){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60493 = arguments.length;
var i__59413__auto___60494 = (0);
while(true){
if((i__59413__auto___60494 < len__59412__auto___60493)){
args__59419__auto__.push((arguments[i__59413__auto___60494]));

var G__60495 = (i__59413__auto___60494 + (1));
i__59413__auto___60494 = G__60495;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60492))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60492){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60492),args);
});})(g__60414__auto___60492))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__60414__auto___60492){
return (function (seq60458){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60458));
});})(g__60414__auto___60492))
;


var g__60414__auto___60496 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__60414__auto___60496){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60497 = arguments.length;
var i__59413__auto___60498 = (0);
while(true){
if((i__59413__auto___60498 < len__59412__auto___60497)){
args__59419__auto__.push((arguments[i__59413__auto___60498]));

var G__60499 = (i__59413__auto___60498 + (1));
i__59413__auto___60498 = G__60499;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60496))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60496){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60496),args);
});})(g__60414__auto___60496))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__60414__auto___60496){
return (function (seq60459){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60459));
});})(g__60414__auto___60496))
;


var g__60414__auto___60500 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__60414__auto___60500){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60501 = arguments.length;
var i__59413__auto___60502 = (0);
while(true){
if((i__59413__auto___60502 < len__59412__auto___60501)){
args__59419__auto__.push((arguments[i__59413__auto___60502]));

var G__60503 = (i__59413__auto___60502 + (1));
i__59413__auto___60502 = G__60503;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60500))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60500){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60500),args);
});})(g__60414__auto___60500))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__60414__auto___60500){
return (function (seq60460){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60460));
});})(g__60414__auto___60500))
;


var g__60414__auto___60504 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__60414__auto___60504){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60505 = arguments.length;
var i__59413__auto___60506 = (0);
while(true){
if((i__59413__auto___60506 < len__59412__auto___60505)){
args__59419__auto__.push((arguments[i__59413__auto___60506]));

var G__60507 = (i__59413__auto___60506 + (1));
i__59413__auto___60506 = G__60507;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60504))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60504){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60504),args);
});})(g__60414__auto___60504))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__60414__auto___60504){
return (function (seq60461){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60461));
});})(g__60414__auto___60504))
;


var g__60414__auto___60508 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__60414__auto___60508){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60509 = arguments.length;
var i__59413__auto___60510 = (0);
while(true){
if((i__59413__auto___60510 < len__59412__auto___60509)){
args__59419__auto__.push((arguments[i__59413__auto___60510]));

var G__60511 = (i__59413__auto___60510 + (1));
i__59413__auto___60510 = G__60511;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60508))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60508),args);
});})(g__60414__auto___60508))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__60414__auto___60508){
return (function (seq60462){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60462));
});})(g__60414__auto___60508))
;


var g__60414__auto___60512 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__60414__auto___60512){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60513 = arguments.length;
var i__59413__auto___60514 = (0);
while(true){
if((i__59413__auto___60514 < len__59412__auto___60513)){
args__59419__auto__.push((arguments[i__59413__auto___60514]));

var G__60515 = (i__59413__auto___60514 + (1));
i__59413__auto___60514 = G__60515;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60512))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60512),args);
});})(g__60414__auto___60512))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__60414__auto___60512){
return (function (seq60463){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60463));
});})(g__60414__auto___60512))
;


var g__60414__auto___60516 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__60414__auto___60516){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60517 = arguments.length;
var i__59413__auto___60518 = (0);
while(true){
if((i__59413__auto___60518 < len__59412__auto___60517)){
args__59419__auto__.push((arguments[i__59413__auto___60518]));

var G__60519 = (i__59413__auto___60518 + (1));
i__59413__auto___60518 = G__60519;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60516))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60516),args);
});})(g__60414__auto___60516))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__60414__auto___60516){
return (function (seq60464){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60464));
});})(g__60414__auto___60516))
;


var g__60414__auto___60520 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__60414__auto___60520){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60521 = arguments.length;
var i__59413__auto___60522 = (0);
while(true){
if((i__59413__auto___60522 < len__59412__auto___60521)){
args__59419__auto__.push((arguments[i__59413__auto___60522]));

var G__60523 = (i__59413__auto___60522 + (1));
i__59413__auto___60522 = G__60523;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60520))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60520),args);
});})(g__60414__auto___60520))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__60414__auto___60520){
return (function (seq60465){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60465));
});})(g__60414__auto___60520))
;


var g__60414__auto___60524 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__60414__auto___60524){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60525 = arguments.length;
var i__59413__auto___60526 = (0);
while(true){
if((i__59413__auto___60526 < len__59412__auto___60525)){
args__59419__auto__.push((arguments[i__59413__auto___60526]));

var G__60527 = (i__59413__auto___60526 + (1));
i__59413__auto___60526 = G__60527;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60524))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60524),args);
});})(g__60414__auto___60524))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__60414__auto___60524){
return (function (seq60466){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60466));
});})(g__60414__auto___60524))
;


var g__60414__auto___60528 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__60414__auto___60528){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60529 = arguments.length;
var i__59413__auto___60530 = (0);
while(true){
if((i__59413__auto___60530 < len__59412__auto___60529)){
args__59419__auto__.push((arguments[i__59413__auto___60530]));

var G__60531 = (i__59413__auto___60530 + (1));
i__59413__auto___60530 = G__60531;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60528))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60528),args);
});})(g__60414__auto___60528))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__60414__auto___60528){
return (function (seq60467){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60467));
});})(g__60414__auto___60528))
;


var g__60414__auto___60532 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__60414__auto___60532){
return (function cljs$spec$gen$alpha$return(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60533 = arguments.length;
var i__59413__auto___60534 = (0);
while(true){
if((i__59413__auto___60534 < len__59412__auto___60533)){
args__59419__auto__.push((arguments[i__59413__auto___60534]));

var G__60535 = (i__59413__auto___60534 + (1));
i__59413__auto___60534 = G__60535;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60532))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60532),args);
});})(g__60414__auto___60532))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__60414__auto___60532){
return (function (seq60468){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60468));
});})(g__60414__auto___60532))
;


var g__60414__auto___60536 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__60414__auto___60536){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60537 = arguments.length;
var i__59413__auto___60538 = (0);
while(true){
if((i__59413__auto___60538 < len__59412__auto___60537)){
args__59419__auto__.push((arguments[i__59413__auto___60538]));

var G__60539 = (i__59413__auto___60538 + (1));
i__59413__auto___60538 = G__60539;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60536))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60536),args);
});})(g__60414__auto___60536))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__60414__auto___60536){
return (function (seq60469){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60469));
});})(g__60414__auto___60536))
;


var g__60414__auto___60540 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__60414__auto___60540){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60541 = arguments.length;
var i__59413__auto___60542 = (0);
while(true){
if((i__59413__auto___60542 < len__59412__auto___60541)){
args__59419__auto__.push((arguments[i__59413__auto___60542]));

var G__60543 = (i__59413__auto___60542 + (1));
i__59413__auto___60542 = G__60543;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60540))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60540){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60540),args);
});})(g__60414__auto___60540))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__60414__auto___60540){
return (function (seq60470){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60470));
});})(g__60414__auto___60540))
;


var g__60414__auto___60544 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__60414__auto___60544){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60545 = arguments.length;
var i__59413__auto___60546 = (0);
while(true){
if((i__59413__auto___60546 < len__59412__auto___60545)){
args__59419__auto__.push((arguments[i__59413__auto___60546]));

var G__60547 = (i__59413__auto___60546 + (1));
i__59413__auto___60546 = G__60547;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60414__auto___60544))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60414__auto___60544){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60414__auto___60544),args);
});})(g__60414__auto___60544))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__60414__auto___60544){
return (function (seq60471){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60471));
});})(g__60414__auto___60544))
;

var g__60427__auto___60569 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__60427__auto___60569){
return (function cljs$spec$gen$alpha$any(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60570 = arguments.length;
var i__59413__auto___60571 = (0);
while(true){
if((i__59413__auto___60571 < len__59412__auto___60570)){
args__59419__auto__.push((arguments[i__59413__auto___60571]));

var G__60572 = (i__59413__auto___60571 + (1));
i__59413__auto___60571 = G__60572;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60569))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60569){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60569);
});})(g__60427__auto___60569))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__60427__auto___60569){
return (function (seq60548){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60548));
});})(g__60427__auto___60569))
;


var g__60427__auto___60573 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__60427__auto___60573){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60574 = arguments.length;
var i__59413__auto___60575 = (0);
while(true){
if((i__59413__auto___60575 < len__59412__auto___60574)){
args__59419__auto__.push((arguments[i__59413__auto___60575]));

var G__60576 = (i__59413__auto___60575 + (1));
i__59413__auto___60575 = G__60576;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60573))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60573){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60573);
});})(g__60427__auto___60573))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__60427__auto___60573){
return (function (seq60549){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60549));
});})(g__60427__auto___60573))
;


var g__60427__auto___60577 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__60427__auto___60577){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60578 = arguments.length;
var i__59413__auto___60579 = (0);
while(true){
if((i__59413__auto___60579 < len__59412__auto___60578)){
args__59419__auto__.push((arguments[i__59413__auto___60579]));

var G__60580 = (i__59413__auto___60579 + (1));
i__59413__auto___60579 = G__60580;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60577))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60577){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60577);
});})(g__60427__auto___60577))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__60427__auto___60577){
return (function (seq60550){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60550));
});})(g__60427__auto___60577))
;


var g__60427__auto___60581 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__60427__auto___60581){
return (function cljs$spec$gen$alpha$char(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60582 = arguments.length;
var i__59413__auto___60583 = (0);
while(true){
if((i__59413__auto___60583 < len__59412__auto___60582)){
args__59419__auto__.push((arguments[i__59413__auto___60583]));

var G__60584 = (i__59413__auto___60583 + (1));
i__59413__auto___60583 = G__60584;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60581))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60581){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60581);
});})(g__60427__auto___60581))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__60427__auto___60581){
return (function (seq60551){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60551));
});})(g__60427__auto___60581))
;


var g__60427__auto___60585 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__60427__auto___60585){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60586 = arguments.length;
var i__59413__auto___60587 = (0);
while(true){
if((i__59413__auto___60587 < len__59412__auto___60586)){
args__59419__auto__.push((arguments[i__59413__auto___60587]));

var G__60588 = (i__59413__auto___60587 + (1));
i__59413__auto___60587 = G__60588;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60585))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60585){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60585);
});})(g__60427__auto___60585))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__60427__auto___60585){
return (function (seq60552){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60552));
});})(g__60427__auto___60585))
;


var g__60427__auto___60589 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__60427__auto___60589){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60590 = arguments.length;
var i__59413__auto___60591 = (0);
while(true){
if((i__59413__auto___60591 < len__59412__auto___60590)){
args__59419__auto__.push((arguments[i__59413__auto___60591]));

var G__60592 = (i__59413__auto___60591 + (1));
i__59413__auto___60591 = G__60592;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60589))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60589){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60589);
});})(g__60427__auto___60589))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__60427__auto___60589){
return (function (seq60553){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60553));
});})(g__60427__auto___60589))
;


var g__60427__auto___60593 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__60427__auto___60593){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60594 = arguments.length;
var i__59413__auto___60595 = (0);
while(true){
if((i__59413__auto___60595 < len__59412__auto___60594)){
args__59419__auto__.push((arguments[i__59413__auto___60595]));

var G__60596 = (i__59413__auto___60595 + (1));
i__59413__auto___60595 = G__60596;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60593))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60593){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60593);
});})(g__60427__auto___60593))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__60427__auto___60593){
return (function (seq60554){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60554));
});})(g__60427__auto___60593))
;


var g__60427__auto___60597 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__60427__auto___60597){
return (function cljs$spec$gen$alpha$double(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60598 = arguments.length;
var i__59413__auto___60599 = (0);
while(true){
if((i__59413__auto___60599 < len__59412__auto___60598)){
args__59419__auto__.push((arguments[i__59413__auto___60599]));

var G__60600 = (i__59413__auto___60599 + (1));
i__59413__auto___60599 = G__60600;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60597))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60597){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60597);
});})(g__60427__auto___60597))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__60427__auto___60597){
return (function (seq60555){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60555));
});})(g__60427__auto___60597))
;


var g__60427__auto___60601 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__60427__auto___60601){
return (function cljs$spec$gen$alpha$int(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60602 = arguments.length;
var i__59413__auto___60603 = (0);
while(true){
if((i__59413__auto___60603 < len__59412__auto___60602)){
args__59419__auto__.push((arguments[i__59413__auto___60603]));

var G__60604 = (i__59413__auto___60603 + (1));
i__59413__auto___60603 = G__60604;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60601))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60601){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60601);
});})(g__60427__auto___60601))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__60427__auto___60601){
return (function (seq60556){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60556));
});})(g__60427__auto___60601))
;


var g__60427__auto___60605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__60427__auto___60605){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60606 = arguments.length;
var i__59413__auto___60607 = (0);
while(true){
if((i__59413__auto___60607 < len__59412__auto___60606)){
args__59419__auto__.push((arguments[i__59413__auto___60607]));

var G__60608 = (i__59413__auto___60607 + (1));
i__59413__auto___60607 = G__60608;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60605))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60605){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60605);
});})(g__60427__auto___60605))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__60427__auto___60605){
return (function (seq60557){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60557));
});})(g__60427__auto___60605))
;


var g__60427__auto___60609 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__60427__auto___60609){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60610 = arguments.length;
var i__59413__auto___60611 = (0);
while(true){
if((i__59413__auto___60611 < len__59412__auto___60610)){
args__59419__auto__.push((arguments[i__59413__auto___60611]));

var G__60612 = (i__59413__auto___60611 + (1));
i__59413__auto___60611 = G__60612;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60609))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60609){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60609);
});})(g__60427__auto___60609))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__60427__auto___60609){
return (function (seq60558){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60558));
});})(g__60427__auto___60609))
;


var g__60427__auto___60613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__60427__auto___60613){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60614 = arguments.length;
var i__59413__auto___60615 = (0);
while(true){
if((i__59413__auto___60615 < len__59412__auto___60614)){
args__59419__auto__.push((arguments[i__59413__auto___60615]));

var G__60616 = (i__59413__auto___60615 + (1));
i__59413__auto___60615 = G__60616;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60613))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60613){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60613);
});})(g__60427__auto___60613))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__60427__auto___60613){
return (function (seq60559){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60559));
});})(g__60427__auto___60613))
;


var g__60427__auto___60617 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__60427__auto___60617){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60618 = arguments.length;
var i__59413__auto___60619 = (0);
while(true){
if((i__59413__auto___60619 < len__59412__auto___60618)){
args__59419__auto__.push((arguments[i__59413__auto___60619]));

var G__60620 = (i__59413__auto___60619 + (1));
i__59413__auto___60619 = G__60620;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60617))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60617){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60617);
});})(g__60427__auto___60617))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__60427__auto___60617){
return (function (seq60560){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60560));
});})(g__60427__auto___60617))
;


var g__60427__auto___60621 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__60427__auto___60621){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60622 = arguments.length;
var i__59413__auto___60623 = (0);
while(true){
if((i__59413__auto___60623 < len__59412__auto___60622)){
args__59419__auto__.push((arguments[i__59413__auto___60623]));

var G__60624 = (i__59413__auto___60623 + (1));
i__59413__auto___60623 = G__60624;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60621))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60621){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60621);
});})(g__60427__auto___60621))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__60427__auto___60621){
return (function (seq60561){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60561));
});})(g__60427__auto___60621))
;


var g__60427__auto___60625 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__60427__auto___60625){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60626 = arguments.length;
var i__59413__auto___60627 = (0);
while(true){
if((i__59413__auto___60627 < len__59412__auto___60626)){
args__59419__auto__.push((arguments[i__59413__auto___60627]));

var G__60628 = (i__59413__auto___60627 + (1));
i__59413__auto___60627 = G__60628;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60625))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60625){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60625);
});})(g__60427__auto___60625))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__60427__auto___60625){
return (function (seq60562){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60562));
});})(g__60427__auto___60625))
;


var g__60427__auto___60629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__60427__auto___60629){
return (function cljs$spec$gen$alpha$string(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60630 = arguments.length;
var i__59413__auto___60631 = (0);
while(true){
if((i__59413__auto___60631 < len__59412__auto___60630)){
args__59419__auto__.push((arguments[i__59413__auto___60631]));

var G__60632 = (i__59413__auto___60631 + (1));
i__59413__auto___60631 = G__60632;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60629))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60629){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60629);
});})(g__60427__auto___60629))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__60427__auto___60629){
return (function (seq60563){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60563));
});})(g__60427__auto___60629))
;


var g__60427__auto___60633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__60427__auto___60633){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60634 = arguments.length;
var i__59413__auto___60635 = (0);
while(true){
if((i__59413__auto___60635 < len__59412__auto___60634)){
args__59419__auto__.push((arguments[i__59413__auto___60635]));

var G__60636 = (i__59413__auto___60635 + (1));
i__59413__auto___60635 = G__60636;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60633))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60633){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60633);
});})(g__60427__auto___60633))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__60427__auto___60633){
return (function (seq60564){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60564));
});})(g__60427__auto___60633))
;


var g__60427__auto___60637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__60427__auto___60637){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60638 = arguments.length;
var i__59413__auto___60639 = (0);
while(true){
if((i__59413__auto___60639 < len__59412__auto___60638)){
args__59419__auto__.push((arguments[i__59413__auto___60639]));

var G__60640 = (i__59413__auto___60639 + (1));
i__59413__auto___60639 = G__60640;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60637))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60637){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60637);
});})(g__60427__auto___60637))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__60427__auto___60637){
return (function (seq60565){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60565));
});})(g__60427__auto___60637))
;


var g__60427__auto___60641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__60427__auto___60641){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60642 = arguments.length;
var i__59413__auto___60643 = (0);
while(true){
if((i__59413__auto___60643 < len__59412__auto___60642)){
args__59419__auto__.push((arguments[i__59413__auto___60643]));

var G__60644 = (i__59413__auto___60643 + (1));
i__59413__auto___60643 = G__60644;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60641))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60641){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60641);
});})(g__60427__auto___60641))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__60427__auto___60641){
return (function (seq60566){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60566));
});})(g__60427__auto___60641))
;


var g__60427__auto___60645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__60427__auto___60645){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60646 = arguments.length;
var i__59413__auto___60647 = (0);
while(true){
if((i__59413__auto___60647 < len__59412__auto___60646)){
args__59419__auto__.push((arguments[i__59413__auto___60647]));

var G__60648 = (i__59413__auto___60647 + (1));
i__59413__auto___60647 = G__60648;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60645))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60645){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60645);
});})(g__60427__auto___60645))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__60427__auto___60645){
return (function (seq60567){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60567));
});})(g__60427__auto___60645))
;


var g__60427__auto___60649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__60427__auto___60649){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60650 = arguments.length;
var i__59413__auto___60651 = (0);
while(true){
if((i__59413__auto___60651 < len__59412__auto___60650)){
args__59419__auto__.push((arguments[i__59413__auto___60651]));

var G__60652 = (i__59413__auto___60651 + (1));
i__59413__auto___60651 = G__60652;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});})(g__60427__auto___60649))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60427__auto___60649){
return (function (args){
return cljs.core.deref.call(null,g__60427__auto___60649);
});})(g__60427__auto___60649))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__60427__auto___60649){
return (function (seq60568){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60568));
});})(g__60427__auto___60649))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__59419__auto__ = [];
var len__59412__auto___60655 = arguments.length;
var i__59413__auto___60656 = (0);
while(true){
if((i__59413__auto___60656 < len__59412__auto___60655)){
args__59419__auto__.push((arguments[i__59413__auto___60656]));

var G__60657 = (i__59413__auto___60656 + (1));
i__59413__auto___60656 = G__60657;
continue;
} else {
}
break;
}

var argseq__59420__auto__ = ((((0) < args__59419__auto__.length))?(new cljs.core.IndexedSeq(args__59419__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__59420__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__60653_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__60653_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq60654){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60654));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__60658_SHARP_){
return (new Date(p1__60658_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1506641500277
