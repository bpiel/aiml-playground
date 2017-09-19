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
var G__11983__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11984__i = 0, G__11984__a = new Array(arguments.length -  0);
while (G__11984__i < G__11984__a.length) {G__11984__a[G__11984__i] = arguments[G__11984__i + 0]; ++G__11984__i;}
  args = new cljs.core.IndexedSeq(G__11984__a,0,null);
} 
return G__11983__delegate.call(this,args);};
G__11983.cljs$lang$maxFixedArity = 0;
G__11983.cljs$lang$applyTo = (function (arglist__11985){
var args = cljs.core.seq(arglist__11985);
return G__11983__delegate(args);
});
G__11983.cljs$core$IFn$_invoke$arity$variadic = G__11983__delegate;
return G__11983;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11986__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11987__i = 0, G__11987__a = new Array(arguments.length -  0);
while (G__11987__i < G__11987__a.length) {G__11987__a[G__11987__i] = arguments[G__11987__i + 0]; ++G__11987__i;}
  args = new cljs.core.IndexedSeq(G__11987__a,0,null);
} 
return G__11986__delegate.call(this,args);};
G__11986.cljs$lang$maxFixedArity = 0;
G__11986.cljs$lang$applyTo = (function (arglist__11988){
var args = cljs.core.seq(arglist__11988);
return G__11986__delegate(args);
});
G__11986.cljs$core$IFn$_invoke$arity$variadic = G__11986__delegate;
return G__11986;
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

//# sourceMappingURL=debug.js.map?rel=1505834874961
