// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12453__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12454__i = 0, G__12454__a = new Array(arguments.length -  0);
while (G__12454__i < G__12454__a.length) {G__12454__a[G__12454__i] = arguments[G__12454__i + 0]; ++G__12454__i;}
  args = new cljs.core.IndexedSeq(G__12454__a,0,null);
} 
return G__12453__delegate.call(this,args);};
G__12453.cljs$lang$maxFixedArity = 0;
G__12453.cljs$lang$applyTo = (function (arglist__12455){
var args = cljs.core.seq(arglist__12455);
return G__12453__delegate(args);
});
G__12453.cljs$core$IFn$_invoke$arity$variadic = G__12453__delegate;
return G__12453;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12456__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12457__i = 0, G__12457__a = new Array(arguments.length -  0);
while (G__12457__i < G__12457__a.length) {G__12457__a[G__12457__i] = arguments[G__12457__i + 0]; ++G__12457__i;}
  args = new cljs.core.IndexedSeq(G__12457__a,0,null);
} 
return G__12456__delegate.call(this,args);};
G__12456.cljs$lang$maxFixedArity = 0;
G__12456.cljs$lang$applyTo = (function (arglist__12458){
var args = cljs.core.seq(arglist__12458);
return G__12456__delegate(args);
});
G__12456.cljs$core$IFn$_invoke$arity$variadic = G__12456__delegate;
return G__12456;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1505782672933
