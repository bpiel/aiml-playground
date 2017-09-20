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
var G__110175__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__110175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110176__i = 0, G__110176__a = new Array(arguments.length -  0);
while (G__110176__i < G__110176__a.length) {G__110176__a[G__110176__i] = arguments[G__110176__i + 0]; ++G__110176__i;}
  args = new cljs.core.IndexedSeq(G__110176__a,0,null);
} 
return G__110175__delegate.call(this,args);};
G__110175.cljs$lang$maxFixedArity = 0;
G__110175.cljs$lang$applyTo = (function (arglist__110177){
var args = cljs.core.seq(arglist__110177);
return G__110175__delegate(args);
});
G__110175.cljs$core$IFn$_invoke$arity$variadic = G__110175__delegate;
return G__110175;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__110178__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__110178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110179__i = 0, G__110179__a = new Array(arguments.length -  0);
while (G__110179__i < G__110179__a.length) {G__110179__a[G__110179__i] = arguments[G__110179__i + 0]; ++G__110179__i;}
  args = new cljs.core.IndexedSeq(G__110179__a,0,null);
} 
return G__110178__delegate.call(this,args);};
G__110178.cljs$lang$maxFixedArity = 0;
G__110178.cljs$lang$applyTo = (function (arglist__110180){
var args = cljs.core.seq(arglist__110180);
return G__110178__delegate(args);
});
G__110178.cljs$core$IFn$_invoke$arity$variadic = G__110178__delegate;
return G__110178;
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

//# sourceMappingURL=debug.js.map?rel=1505927815503
