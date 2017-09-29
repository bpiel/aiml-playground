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
var G__60892__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__60892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60893__i = 0, G__60893__a = new Array(arguments.length -  0);
while (G__60893__i < G__60893__a.length) {G__60893__a[G__60893__i] = arguments[G__60893__i + 0]; ++G__60893__i;}
  args = new cljs.core.IndexedSeq(G__60893__a,0,null);
} 
return G__60892__delegate.call(this,args);};
G__60892.cljs$lang$maxFixedArity = 0;
G__60892.cljs$lang$applyTo = (function (arglist__60894){
var args = cljs.core.seq(arglist__60894);
return G__60892__delegate(args);
});
G__60892.cljs$core$IFn$_invoke$arity$variadic = G__60892__delegate;
return G__60892;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__60895__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__60895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60896__i = 0, G__60896__a = new Array(arguments.length -  0);
while (G__60896__i < G__60896__a.length) {G__60896__a[G__60896__i] = arguments[G__60896__i + 0]; ++G__60896__i;}
  args = new cljs.core.IndexedSeq(G__60896__a,0,null);
} 
return G__60895__delegate.call(this,args);};
G__60895.cljs$lang$maxFixedArity = 0;
G__60895.cljs$lang$applyTo = (function (arglist__60897){
var args = cljs.core.seq(arglist__60897);
return G__60895__delegate(args);
});
G__60895.cljs$core$IFn$_invoke$arity$variadic = G__60895__delegate;
return G__60895;
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

//# sourceMappingURL=debug.js.map?rel=1506641500650
