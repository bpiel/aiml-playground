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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__65088__auto__,writer__65089__auto__,opt__65090__auto__){
return cljs.core._write.call(null,writer__65089__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__65701__auto__ = [];
var len__65694__auto___66724 = arguments.length;
var i__65695__auto___66725 = (0);
while(true){
if((i__65695__auto___66725 < len__65694__auto___66724)){
args__65701__auto__.push((arguments[i__65695__auto___66725]));

var G__66726 = (i__65695__auto___66725 + (1));
i__65695__auto___66725 = G__66726;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq66723){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66723));
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
var args__65701__auto__ = [];
var len__65694__auto___66728 = arguments.length;
var i__65695__auto___66729 = (0);
while(true){
if((i__65695__auto___66729 < len__65694__auto___66728)){
args__65701__auto__.push((arguments[i__65695__auto___66729]));

var G__66730 = (i__65695__auto___66729 + (1));
i__65695__auto___66729 = G__66730;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq66727){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66727));
});

var g_QMARK__66731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_66732 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__66731){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__66731))
,null));
var mkg_66733 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__66731,g_66732){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__66731,g_66732))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__66731,g_66732,mkg_66733){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__66731).call(null,x);
});})(g_QMARK__66731,g_66732,mkg_66733))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__66731,g_66732,mkg_66733){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_66733).call(null,gfn);
});})(g_QMARK__66731,g_66732,mkg_66733))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__66731,g_66732,mkg_66733){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_66732).call(null,generator);
});})(g_QMARK__66731,g_66732,mkg_66733))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__66695__auto___66753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__66695__auto___66753){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66754 = arguments.length;
var i__65695__auto___66755 = (0);
while(true){
if((i__65695__auto___66755 < len__65694__auto___66754)){
args__65701__auto__.push((arguments[i__65695__auto___66755]));

var G__66756 = (i__65695__auto___66755 + (1));
i__65695__auto___66755 = G__66756;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66753))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66753){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66753),args);
});})(g__66695__auto___66753))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__66695__auto___66753){
return (function (seq66734){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66734));
});})(g__66695__auto___66753))
;


var g__66695__auto___66757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__66695__auto___66757){
return (function cljs$spec$gen$alpha$list(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66758 = arguments.length;
var i__65695__auto___66759 = (0);
while(true){
if((i__65695__auto___66759 < len__65694__auto___66758)){
args__65701__auto__.push((arguments[i__65695__auto___66759]));

var G__66760 = (i__65695__auto___66759 + (1));
i__65695__auto___66759 = G__66760;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66757))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66757){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66757),args);
});})(g__66695__auto___66757))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__66695__auto___66757){
return (function (seq66735){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66735));
});})(g__66695__auto___66757))
;


var g__66695__auto___66761 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__66695__auto___66761){
return (function cljs$spec$gen$alpha$map(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66762 = arguments.length;
var i__65695__auto___66763 = (0);
while(true){
if((i__65695__auto___66763 < len__65694__auto___66762)){
args__65701__auto__.push((arguments[i__65695__auto___66763]));

var G__66764 = (i__65695__auto___66763 + (1));
i__65695__auto___66763 = G__66764;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66761))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66761){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66761),args);
});})(g__66695__auto___66761))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__66695__auto___66761){
return (function (seq66736){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66736));
});})(g__66695__auto___66761))
;


var g__66695__auto___66765 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__66695__auto___66765){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66766 = arguments.length;
var i__65695__auto___66767 = (0);
while(true){
if((i__65695__auto___66767 < len__65694__auto___66766)){
args__65701__auto__.push((arguments[i__65695__auto___66767]));

var G__66768 = (i__65695__auto___66767 + (1));
i__65695__auto___66767 = G__66768;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66765))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66765){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66765),args);
});})(g__66695__auto___66765))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__66695__auto___66765){
return (function (seq66737){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66737));
});})(g__66695__auto___66765))
;


var g__66695__auto___66769 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__66695__auto___66769){
return (function cljs$spec$gen$alpha$set(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66770 = arguments.length;
var i__65695__auto___66771 = (0);
while(true){
if((i__65695__auto___66771 < len__65694__auto___66770)){
args__65701__auto__.push((arguments[i__65695__auto___66771]));

var G__66772 = (i__65695__auto___66771 + (1));
i__65695__auto___66771 = G__66772;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66769))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66769){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66769),args);
});})(g__66695__auto___66769))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__66695__auto___66769){
return (function (seq66738){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66738));
});})(g__66695__auto___66769))
;


var g__66695__auto___66773 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__66695__auto___66773){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66774 = arguments.length;
var i__65695__auto___66775 = (0);
while(true){
if((i__65695__auto___66775 < len__65694__auto___66774)){
args__65701__auto__.push((arguments[i__65695__auto___66775]));

var G__66776 = (i__65695__auto___66775 + (1));
i__65695__auto___66775 = G__66776;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66773))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66773){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66773),args);
});})(g__66695__auto___66773))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__66695__auto___66773){
return (function (seq66739){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66739));
});})(g__66695__auto___66773))
;


var g__66695__auto___66777 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__66695__auto___66777){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66778 = arguments.length;
var i__65695__auto___66779 = (0);
while(true){
if((i__65695__auto___66779 < len__65694__auto___66778)){
args__65701__auto__.push((arguments[i__65695__auto___66779]));

var G__66780 = (i__65695__auto___66779 + (1));
i__65695__auto___66779 = G__66780;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66777))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66777){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66777),args);
});})(g__66695__auto___66777))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__66695__auto___66777){
return (function (seq66740){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66740));
});})(g__66695__auto___66777))
;


var g__66695__auto___66781 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__66695__auto___66781){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66782 = arguments.length;
var i__65695__auto___66783 = (0);
while(true){
if((i__65695__auto___66783 < len__65694__auto___66782)){
args__65701__auto__.push((arguments[i__65695__auto___66783]));

var G__66784 = (i__65695__auto___66783 + (1));
i__65695__auto___66783 = G__66784;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66781))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66781){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66781),args);
});})(g__66695__auto___66781))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__66695__auto___66781){
return (function (seq66741){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66741));
});})(g__66695__auto___66781))
;


var g__66695__auto___66785 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__66695__auto___66785){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66786 = arguments.length;
var i__65695__auto___66787 = (0);
while(true){
if((i__65695__auto___66787 < len__65694__auto___66786)){
args__65701__auto__.push((arguments[i__65695__auto___66787]));

var G__66788 = (i__65695__auto___66787 + (1));
i__65695__auto___66787 = G__66788;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66785))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66785){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66785),args);
});})(g__66695__auto___66785))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__66695__auto___66785){
return (function (seq66742){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66742));
});})(g__66695__auto___66785))
;


var g__66695__auto___66789 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__66695__auto___66789){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66790 = arguments.length;
var i__65695__auto___66791 = (0);
while(true){
if((i__65695__auto___66791 < len__65694__auto___66790)){
args__65701__auto__.push((arguments[i__65695__auto___66791]));

var G__66792 = (i__65695__auto___66791 + (1));
i__65695__auto___66791 = G__66792;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66789))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66789){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66789),args);
});})(g__66695__auto___66789))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__66695__auto___66789){
return (function (seq66743){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66743));
});})(g__66695__auto___66789))
;


var g__66695__auto___66793 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__66695__auto___66793){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66794 = arguments.length;
var i__65695__auto___66795 = (0);
while(true){
if((i__65695__auto___66795 < len__65694__auto___66794)){
args__65701__auto__.push((arguments[i__65695__auto___66795]));

var G__66796 = (i__65695__auto___66795 + (1));
i__65695__auto___66795 = G__66796;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66793))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66793){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66793),args);
});})(g__66695__auto___66793))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__66695__auto___66793){
return (function (seq66744){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66744));
});})(g__66695__auto___66793))
;


var g__66695__auto___66797 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__66695__auto___66797){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66798 = arguments.length;
var i__65695__auto___66799 = (0);
while(true){
if((i__65695__auto___66799 < len__65694__auto___66798)){
args__65701__auto__.push((arguments[i__65695__auto___66799]));

var G__66800 = (i__65695__auto___66799 + (1));
i__65695__auto___66799 = G__66800;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66797))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66797){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66797),args);
});})(g__66695__auto___66797))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__66695__auto___66797){
return (function (seq66745){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66745));
});})(g__66695__auto___66797))
;


var g__66695__auto___66801 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__66695__auto___66801){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66802 = arguments.length;
var i__65695__auto___66803 = (0);
while(true){
if((i__65695__auto___66803 < len__65694__auto___66802)){
args__65701__auto__.push((arguments[i__65695__auto___66803]));

var G__66804 = (i__65695__auto___66803 + (1));
i__65695__auto___66803 = G__66804;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66801))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66801){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66801),args);
});})(g__66695__auto___66801))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__66695__auto___66801){
return (function (seq66746){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66746));
});})(g__66695__auto___66801))
;


var g__66695__auto___66805 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__66695__auto___66805){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66806 = arguments.length;
var i__65695__auto___66807 = (0);
while(true){
if((i__65695__auto___66807 < len__65694__auto___66806)){
args__65701__auto__.push((arguments[i__65695__auto___66807]));

var G__66808 = (i__65695__auto___66807 + (1));
i__65695__auto___66807 = G__66808;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66805))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66805){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66805),args);
});})(g__66695__auto___66805))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__66695__auto___66805){
return (function (seq66747){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66747));
});})(g__66695__auto___66805))
;


var g__66695__auto___66809 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__66695__auto___66809){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66810 = arguments.length;
var i__65695__auto___66811 = (0);
while(true){
if((i__65695__auto___66811 < len__65694__auto___66810)){
args__65701__auto__.push((arguments[i__65695__auto___66811]));

var G__66812 = (i__65695__auto___66811 + (1));
i__65695__auto___66811 = G__66812;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66809))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66809){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66809),args);
});})(g__66695__auto___66809))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__66695__auto___66809){
return (function (seq66748){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66748));
});})(g__66695__auto___66809))
;


var g__66695__auto___66813 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__66695__auto___66813){
return (function cljs$spec$gen$alpha$return(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66814 = arguments.length;
var i__65695__auto___66815 = (0);
while(true){
if((i__65695__auto___66815 < len__65694__auto___66814)){
args__65701__auto__.push((arguments[i__65695__auto___66815]));

var G__66816 = (i__65695__auto___66815 + (1));
i__65695__auto___66815 = G__66816;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66813))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66813){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66813),args);
});})(g__66695__auto___66813))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__66695__auto___66813){
return (function (seq66749){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66749));
});})(g__66695__auto___66813))
;


var g__66695__auto___66817 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__66695__auto___66817){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66818 = arguments.length;
var i__65695__auto___66819 = (0);
while(true){
if((i__65695__auto___66819 < len__65694__auto___66818)){
args__65701__auto__.push((arguments[i__65695__auto___66819]));

var G__66820 = (i__65695__auto___66819 + (1));
i__65695__auto___66819 = G__66820;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66817))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66817){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66817),args);
});})(g__66695__auto___66817))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__66695__auto___66817){
return (function (seq66750){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66750));
});})(g__66695__auto___66817))
;


var g__66695__auto___66821 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__66695__auto___66821){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66822 = arguments.length;
var i__65695__auto___66823 = (0);
while(true){
if((i__65695__auto___66823 < len__65694__auto___66822)){
args__65701__auto__.push((arguments[i__65695__auto___66823]));

var G__66824 = (i__65695__auto___66823 + (1));
i__65695__auto___66823 = G__66824;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66821))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66821){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66821),args);
});})(g__66695__auto___66821))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__66695__auto___66821){
return (function (seq66751){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66751));
});})(g__66695__auto___66821))
;


var g__66695__auto___66825 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__66695__auto___66825){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66826 = arguments.length;
var i__65695__auto___66827 = (0);
while(true){
if((i__65695__auto___66827 < len__65694__auto___66826)){
args__65701__auto__.push((arguments[i__65695__auto___66827]));

var G__66828 = (i__65695__auto___66827 + (1));
i__65695__auto___66827 = G__66828;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66695__auto___66825))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66695__auto___66825){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__66695__auto___66825),args);
});})(g__66695__auto___66825))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__66695__auto___66825){
return (function (seq66752){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66752));
});})(g__66695__auto___66825))
;

var g__66708__auto___66850 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__66708__auto___66850){
return (function cljs$spec$gen$alpha$any(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66851 = arguments.length;
var i__65695__auto___66852 = (0);
while(true){
if((i__65695__auto___66852 < len__65694__auto___66851)){
args__65701__auto__.push((arguments[i__65695__auto___66852]));

var G__66853 = (i__65695__auto___66852 + (1));
i__65695__auto___66852 = G__66853;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66850))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66850){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66850);
});})(g__66708__auto___66850))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__66708__auto___66850){
return (function (seq66829){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66829));
});})(g__66708__auto___66850))
;


var g__66708__auto___66854 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__66708__auto___66854){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66855 = arguments.length;
var i__65695__auto___66856 = (0);
while(true){
if((i__65695__auto___66856 < len__65694__auto___66855)){
args__65701__auto__.push((arguments[i__65695__auto___66856]));

var G__66857 = (i__65695__auto___66856 + (1));
i__65695__auto___66856 = G__66857;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66854))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66854){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66854);
});})(g__66708__auto___66854))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__66708__auto___66854){
return (function (seq66830){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66830));
});})(g__66708__auto___66854))
;


var g__66708__auto___66858 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__66708__auto___66858){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66859 = arguments.length;
var i__65695__auto___66860 = (0);
while(true){
if((i__65695__auto___66860 < len__65694__auto___66859)){
args__65701__auto__.push((arguments[i__65695__auto___66860]));

var G__66861 = (i__65695__auto___66860 + (1));
i__65695__auto___66860 = G__66861;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66858))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66858){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66858);
});})(g__66708__auto___66858))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__66708__auto___66858){
return (function (seq66831){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66831));
});})(g__66708__auto___66858))
;


var g__66708__auto___66862 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__66708__auto___66862){
return (function cljs$spec$gen$alpha$char(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66863 = arguments.length;
var i__65695__auto___66864 = (0);
while(true){
if((i__65695__auto___66864 < len__65694__auto___66863)){
args__65701__auto__.push((arguments[i__65695__auto___66864]));

var G__66865 = (i__65695__auto___66864 + (1));
i__65695__auto___66864 = G__66865;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66862))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66862){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66862);
});})(g__66708__auto___66862))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__66708__auto___66862){
return (function (seq66832){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66832));
});})(g__66708__auto___66862))
;


var g__66708__auto___66866 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__66708__auto___66866){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66867 = arguments.length;
var i__65695__auto___66868 = (0);
while(true){
if((i__65695__auto___66868 < len__65694__auto___66867)){
args__65701__auto__.push((arguments[i__65695__auto___66868]));

var G__66869 = (i__65695__auto___66868 + (1));
i__65695__auto___66868 = G__66869;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66866))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66866){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66866);
});})(g__66708__auto___66866))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__66708__auto___66866){
return (function (seq66833){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66833));
});})(g__66708__auto___66866))
;


var g__66708__auto___66870 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__66708__auto___66870){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66871 = arguments.length;
var i__65695__auto___66872 = (0);
while(true){
if((i__65695__auto___66872 < len__65694__auto___66871)){
args__65701__auto__.push((arguments[i__65695__auto___66872]));

var G__66873 = (i__65695__auto___66872 + (1));
i__65695__auto___66872 = G__66873;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66870))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66870){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66870);
});})(g__66708__auto___66870))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__66708__auto___66870){
return (function (seq66834){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66834));
});})(g__66708__auto___66870))
;


var g__66708__auto___66874 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__66708__auto___66874){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66875 = arguments.length;
var i__65695__auto___66876 = (0);
while(true){
if((i__65695__auto___66876 < len__65694__auto___66875)){
args__65701__auto__.push((arguments[i__65695__auto___66876]));

var G__66877 = (i__65695__auto___66876 + (1));
i__65695__auto___66876 = G__66877;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66874))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66874){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66874);
});})(g__66708__auto___66874))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__66708__auto___66874){
return (function (seq66835){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66835));
});})(g__66708__auto___66874))
;


var g__66708__auto___66878 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__66708__auto___66878){
return (function cljs$spec$gen$alpha$double(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66879 = arguments.length;
var i__65695__auto___66880 = (0);
while(true){
if((i__65695__auto___66880 < len__65694__auto___66879)){
args__65701__auto__.push((arguments[i__65695__auto___66880]));

var G__66881 = (i__65695__auto___66880 + (1));
i__65695__auto___66880 = G__66881;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66878))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66878){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66878);
});})(g__66708__auto___66878))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__66708__auto___66878){
return (function (seq66836){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66836));
});})(g__66708__auto___66878))
;


var g__66708__auto___66882 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__66708__auto___66882){
return (function cljs$spec$gen$alpha$int(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66883 = arguments.length;
var i__65695__auto___66884 = (0);
while(true){
if((i__65695__auto___66884 < len__65694__auto___66883)){
args__65701__auto__.push((arguments[i__65695__auto___66884]));

var G__66885 = (i__65695__auto___66884 + (1));
i__65695__auto___66884 = G__66885;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66882))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66882){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66882);
});})(g__66708__auto___66882))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__66708__auto___66882){
return (function (seq66837){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66837));
});})(g__66708__auto___66882))
;


var g__66708__auto___66886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__66708__auto___66886){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66887 = arguments.length;
var i__65695__auto___66888 = (0);
while(true){
if((i__65695__auto___66888 < len__65694__auto___66887)){
args__65701__auto__.push((arguments[i__65695__auto___66888]));

var G__66889 = (i__65695__auto___66888 + (1));
i__65695__auto___66888 = G__66889;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66886))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66886){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66886);
});})(g__66708__auto___66886))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__66708__auto___66886){
return (function (seq66838){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66838));
});})(g__66708__auto___66886))
;


var g__66708__auto___66890 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__66708__auto___66890){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66891 = arguments.length;
var i__65695__auto___66892 = (0);
while(true){
if((i__65695__auto___66892 < len__65694__auto___66891)){
args__65701__auto__.push((arguments[i__65695__auto___66892]));

var G__66893 = (i__65695__auto___66892 + (1));
i__65695__auto___66892 = G__66893;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66890))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66890){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66890);
});})(g__66708__auto___66890))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__66708__auto___66890){
return (function (seq66839){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66839));
});})(g__66708__auto___66890))
;


var g__66708__auto___66894 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__66708__auto___66894){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66895 = arguments.length;
var i__65695__auto___66896 = (0);
while(true){
if((i__65695__auto___66896 < len__65694__auto___66895)){
args__65701__auto__.push((arguments[i__65695__auto___66896]));

var G__66897 = (i__65695__auto___66896 + (1));
i__65695__auto___66896 = G__66897;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66894))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66894){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66894);
});})(g__66708__auto___66894))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__66708__auto___66894){
return (function (seq66840){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66840));
});})(g__66708__auto___66894))
;


var g__66708__auto___66898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__66708__auto___66898){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66899 = arguments.length;
var i__65695__auto___66900 = (0);
while(true){
if((i__65695__auto___66900 < len__65694__auto___66899)){
args__65701__auto__.push((arguments[i__65695__auto___66900]));

var G__66901 = (i__65695__auto___66900 + (1));
i__65695__auto___66900 = G__66901;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66898))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66898){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66898);
});})(g__66708__auto___66898))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__66708__auto___66898){
return (function (seq66841){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66841));
});})(g__66708__auto___66898))
;


var g__66708__auto___66902 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__66708__auto___66902){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66903 = arguments.length;
var i__65695__auto___66904 = (0);
while(true){
if((i__65695__auto___66904 < len__65694__auto___66903)){
args__65701__auto__.push((arguments[i__65695__auto___66904]));

var G__66905 = (i__65695__auto___66904 + (1));
i__65695__auto___66904 = G__66905;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66902))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66902){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66902);
});})(g__66708__auto___66902))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__66708__auto___66902){
return (function (seq66842){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66842));
});})(g__66708__auto___66902))
;


var g__66708__auto___66906 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__66708__auto___66906){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66907 = arguments.length;
var i__65695__auto___66908 = (0);
while(true){
if((i__65695__auto___66908 < len__65694__auto___66907)){
args__65701__auto__.push((arguments[i__65695__auto___66908]));

var G__66909 = (i__65695__auto___66908 + (1));
i__65695__auto___66908 = G__66909;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66906))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66906){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66906);
});})(g__66708__auto___66906))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__66708__auto___66906){
return (function (seq66843){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66843));
});})(g__66708__auto___66906))
;


var g__66708__auto___66910 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__66708__auto___66910){
return (function cljs$spec$gen$alpha$string(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66911 = arguments.length;
var i__65695__auto___66912 = (0);
while(true){
if((i__65695__auto___66912 < len__65694__auto___66911)){
args__65701__auto__.push((arguments[i__65695__auto___66912]));

var G__66913 = (i__65695__auto___66912 + (1));
i__65695__auto___66912 = G__66913;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66910))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66910){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66910);
});})(g__66708__auto___66910))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__66708__auto___66910){
return (function (seq66844){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66844));
});})(g__66708__auto___66910))
;


var g__66708__auto___66914 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__66708__auto___66914){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66915 = arguments.length;
var i__65695__auto___66916 = (0);
while(true){
if((i__65695__auto___66916 < len__65694__auto___66915)){
args__65701__auto__.push((arguments[i__65695__auto___66916]));

var G__66917 = (i__65695__auto___66916 + (1));
i__65695__auto___66916 = G__66917;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66914))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66914){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66914);
});})(g__66708__auto___66914))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__66708__auto___66914){
return (function (seq66845){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66845));
});})(g__66708__auto___66914))
;


var g__66708__auto___66918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__66708__auto___66918){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66919 = arguments.length;
var i__65695__auto___66920 = (0);
while(true){
if((i__65695__auto___66920 < len__65694__auto___66919)){
args__65701__auto__.push((arguments[i__65695__auto___66920]));

var G__66921 = (i__65695__auto___66920 + (1));
i__65695__auto___66920 = G__66921;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66918))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66918){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66918);
});})(g__66708__auto___66918))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__66708__auto___66918){
return (function (seq66846){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66846));
});})(g__66708__auto___66918))
;


var g__66708__auto___66922 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__66708__auto___66922){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66923 = arguments.length;
var i__65695__auto___66924 = (0);
while(true){
if((i__65695__auto___66924 < len__65694__auto___66923)){
args__65701__auto__.push((arguments[i__65695__auto___66924]));

var G__66925 = (i__65695__auto___66924 + (1));
i__65695__auto___66924 = G__66925;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66922))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66922){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66922);
});})(g__66708__auto___66922))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__66708__auto___66922){
return (function (seq66847){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66847));
});})(g__66708__auto___66922))
;


var g__66708__auto___66926 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__66708__auto___66926){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66927 = arguments.length;
var i__65695__auto___66928 = (0);
while(true){
if((i__65695__auto___66928 < len__65694__auto___66927)){
args__65701__auto__.push((arguments[i__65695__auto___66928]));

var G__66929 = (i__65695__auto___66928 + (1));
i__65695__auto___66928 = G__66929;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66926))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66926){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66926);
});})(g__66708__auto___66926))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__66708__auto___66926){
return (function (seq66848){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66848));
});})(g__66708__auto___66926))
;


var g__66708__auto___66930 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__66708__auto___66930){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66931 = arguments.length;
var i__65695__auto___66932 = (0);
while(true){
if((i__65695__auto___66932 < len__65694__auto___66931)){
args__65701__auto__.push((arguments[i__65695__auto___66932]));

var G__66933 = (i__65695__auto___66932 + (1));
i__65695__auto___66932 = G__66933;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});})(g__66708__auto___66930))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__66708__auto___66930){
return (function (args){
return cljs.core.deref.call(null,g__66708__auto___66930);
});})(g__66708__auto___66930))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__66708__auto___66930){
return (function (seq66849){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66849));
});})(g__66708__auto___66930))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__65701__auto__ = [];
var len__65694__auto___66936 = arguments.length;
var i__65695__auto___66937 = (0);
while(true){
if((i__65695__auto___66937 < len__65694__auto___66936)){
args__65701__auto__.push((arguments[i__65695__auto___66937]));

var G__66938 = (i__65695__auto___66937 + (1));
i__65695__auto___66937 = G__66938;
continue;
} else {
}
break;
}

var argseq__65702__auto__ = ((((0) < args__65701__auto__.length))?(new cljs.core.IndexedSeq(args__65701__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__65702__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__66934_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__66934_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq66935){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66935));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__66939_SHARP_){
return (new Date(p1__66939_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1506558336846
