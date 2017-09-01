// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__9810__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13135 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_13135){
return (function (){
var _STAR_always_update_STAR_13136 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13136;
}});})(_STAR_always_update_STAR_13135))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13135;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__13138 = arguments.length;
switch (G__13138) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__13140_13144 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__13141_13145 = null;
var count__13142_13146 = (0);
var i__13143_13147 = (0);
while(true){
if((i__13143_13147 < count__13142_13146)){
var v_13148 = cljs.core._nth.call(null,chunk__13141_13145,i__13143_13147);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_13148);

var G__13149 = seq__13140_13144;
var G__13150 = chunk__13141_13145;
var G__13151 = count__13142_13146;
var G__13152 = (i__13143_13147 + (1));
seq__13140_13144 = G__13149;
chunk__13141_13145 = G__13150;
count__13142_13146 = G__13151;
i__13143_13147 = G__13152;
continue;
} else {
var temp__6738__auto___13153 = cljs.core.seq.call(null,seq__13140_13144);
if(temp__6738__auto___13153){
var seq__13140_13154__$1 = temp__6738__auto___13153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13140_13154__$1)){
var c__10741__auto___13155 = cljs.core.chunk_first.call(null,seq__13140_13154__$1);
var G__13156 = cljs.core.chunk_rest.call(null,seq__13140_13154__$1);
var G__13157 = c__10741__auto___13155;
var G__13158 = cljs.core.count.call(null,c__10741__auto___13155);
var G__13159 = (0);
seq__13140_13144 = G__13156;
chunk__13141_13145 = G__13157;
count__13142_13146 = G__13158;
i__13143_13147 = G__13159;
continue;
} else {
var v_13160 = cljs.core.first.call(null,seq__13140_13154__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_13160);

var G__13161 = cljs.core.next.call(null,seq__13140_13154__$1);
var G__13162 = null;
var G__13163 = (0);
var G__13164 = (0);
seq__13140_13144 = G__13161;
chunk__13141_13145 = G__13162;
count__13142_13146 = G__13163;
i__13143_13147 = G__13164;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1504285952645
