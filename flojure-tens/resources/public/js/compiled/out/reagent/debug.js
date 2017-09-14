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
var G__60162__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__60162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60163__i = 0, G__60163__a = new Array(arguments.length -  0);
while (G__60163__i < G__60163__a.length) {G__60163__a[G__60163__i] = arguments[G__60163__i + 0]; ++G__60163__i;}
  args = new cljs.core.IndexedSeq(G__60163__a,0,null);
} 
return G__60162__delegate.call(this,args);};
G__60162.cljs$lang$maxFixedArity = 0;
G__60162.cljs$lang$applyTo = (function (arglist__60164){
var args = cljs.core.seq(arglist__60164);
return G__60162__delegate(args);
});
G__60162.cljs$core$IFn$_invoke$arity$variadic = G__60162__delegate;
return G__60162;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__60165__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__60165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60166__i = 0, G__60166__a = new Array(arguments.length -  0);
while (G__60166__i < G__60166__a.length) {G__60166__a[G__60166__i] = arguments[G__60166__i + 0]; ++G__60166__i;}
  args = new cljs.core.IndexedSeq(G__60166__a,0,null);
} 
return G__60165__delegate.call(this,args);};
G__60165.cljs$lang$maxFixedArity = 0;
G__60165.cljs$lang$applyTo = (function (arglist__60167){
var args = cljs.core.seq(arglist__60167);
return G__60165__delegate(args);
});
G__60165.cljs$core$IFn$_invoke$arity$variadic = G__60165__delegate;
return G__60165;
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

//# sourceMappingURL=debug.js.map?rel=1505406774119
