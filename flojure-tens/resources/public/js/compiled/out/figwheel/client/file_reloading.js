// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__58135__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__58135__auto__){
return or__58135__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__58135__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
var or__58135__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__58135__auto____$1)){
return or__58135__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__70188_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__70188_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__70189 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__70190 = null;
var count__70191 = (0);
var i__70192 = (0);
while(true){
if((i__70192 < count__70191)){
var n = cljs.core._nth.call(null,chunk__70190,i__70192);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__70193 = seq__70189;
var G__70194 = chunk__70190;
var G__70195 = count__70191;
var G__70196 = (i__70192 + (1));
seq__70189 = G__70193;
chunk__70190 = G__70194;
count__70191 = G__70195;
i__70192 = G__70196;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__70189);
if(temp__6738__auto__){
var seq__70189__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70189__$1)){
var c__59066__auto__ = cljs.core.chunk_first.call(null,seq__70189__$1);
var G__70197 = cljs.core.chunk_rest.call(null,seq__70189__$1);
var G__70198 = c__59066__auto__;
var G__70199 = cljs.core.count.call(null,c__59066__auto__);
var G__70200 = (0);
seq__70189 = G__70197;
chunk__70190 = G__70198;
count__70191 = G__70199;
i__70192 = G__70200;
continue;
} else {
var n = cljs.core.first.call(null,seq__70189__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__70201 = cljs.core.next.call(null,seq__70189__$1);
var G__70202 = null;
var G__70203 = (0);
var G__70204 = (0);
seq__70189 = G__70201;
chunk__70190 = G__70202;
count__70191 = G__70203;
i__70192 = G__70204;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__70214_70222 = cljs.core.seq.call(null,deps);
var chunk__70215_70223 = null;
var count__70216_70224 = (0);
var i__70217_70225 = (0);
while(true){
if((i__70217_70225 < count__70216_70224)){
var dep_70226 = cljs.core._nth.call(null,chunk__70215_70223,i__70217_70225);
topo_sort_helper_STAR_.call(null,dep_70226,(depth + (1)),state);

var G__70227 = seq__70214_70222;
var G__70228 = chunk__70215_70223;
var G__70229 = count__70216_70224;
var G__70230 = (i__70217_70225 + (1));
seq__70214_70222 = G__70227;
chunk__70215_70223 = G__70228;
count__70216_70224 = G__70229;
i__70217_70225 = G__70230;
continue;
} else {
var temp__6738__auto___70231 = cljs.core.seq.call(null,seq__70214_70222);
if(temp__6738__auto___70231){
var seq__70214_70232__$1 = temp__6738__auto___70231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70214_70232__$1)){
var c__59066__auto___70233 = cljs.core.chunk_first.call(null,seq__70214_70232__$1);
var G__70234 = cljs.core.chunk_rest.call(null,seq__70214_70232__$1);
var G__70235 = c__59066__auto___70233;
var G__70236 = cljs.core.count.call(null,c__59066__auto___70233);
var G__70237 = (0);
seq__70214_70222 = G__70234;
chunk__70215_70223 = G__70235;
count__70216_70224 = G__70236;
i__70217_70225 = G__70237;
continue;
} else {
var dep_70238 = cljs.core.first.call(null,seq__70214_70232__$1);
topo_sort_helper_STAR_.call(null,dep_70238,(depth + (1)),state);

var G__70239 = cljs.core.next.call(null,seq__70214_70232__$1);
var G__70240 = null;
var G__70241 = (0);
var G__70242 = (0);
seq__70214_70222 = G__70239;
chunk__70215_70223 = G__70240;
count__70216_70224 = G__70241;
i__70217_70225 = G__70242;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__70218){
var vec__70219 = p__70218;
var seq__70220 = cljs.core.seq.call(null,vec__70219);
var first__70221 = cljs.core.first.call(null,seq__70220);
var seq__70220__$1 = cljs.core.next.call(null,seq__70220);
var x = first__70221;
var xs = seq__70220__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__70219,seq__70220,first__70221,seq__70220__$1,x,xs,get_deps__$1){
return (function (p1__70205_SHARP_){
return clojure.set.difference.call(null,p1__70205_SHARP_,x);
});})(vec__70219,seq__70220,first__70221,seq__70220__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__70243 = cljs.core.seq.call(null,provides);
var chunk__70244 = null;
var count__70245 = (0);
var i__70246 = (0);
while(true){
if((i__70246 < count__70245)){
var prov = cljs.core._nth.call(null,chunk__70244,i__70246);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__70247_70255 = cljs.core.seq.call(null,requires);
var chunk__70248_70256 = null;
var count__70249_70257 = (0);
var i__70250_70258 = (0);
while(true){
if((i__70250_70258 < count__70249_70257)){
var req_70259 = cljs.core._nth.call(null,chunk__70248_70256,i__70250_70258);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_70259,prov);

var G__70260 = seq__70247_70255;
var G__70261 = chunk__70248_70256;
var G__70262 = count__70249_70257;
var G__70263 = (i__70250_70258 + (1));
seq__70247_70255 = G__70260;
chunk__70248_70256 = G__70261;
count__70249_70257 = G__70262;
i__70250_70258 = G__70263;
continue;
} else {
var temp__6738__auto___70264 = cljs.core.seq.call(null,seq__70247_70255);
if(temp__6738__auto___70264){
var seq__70247_70265__$1 = temp__6738__auto___70264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70247_70265__$1)){
var c__59066__auto___70266 = cljs.core.chunk_first.call(null,seq__70247_70265__$1);
var G__70267 = cljs.core.chunk_rest.call(null,seq__70247_70265__$1);
var G__70268 = c__59066__auto___70266;
var G__70269 = cljs.core.count.call(null,c__59066__auto___70266);
var G__70270 = (0);
seq__70247_70255 = G__70267;
chunk__70248_70256 = G__70268;
count__70249_70257 = G__70269;
i__70250_70258 = G__70270;
continue;
} else {
var req_70271 = cljs.core.first.call(null,seq__70247_70265__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_70271,prov);

var G__70272 = cljs.core.next.call(null,seq__70247_70265__$1);
var G__70273 = null;
var G__70274 = (0);
var G__70275 = (0);
seq__70247_70255 = G__70272;
chunk__70248_70256 = G__70273;
count__70249_70257 = G__70274;
i__70250_70258 = G__70275;
continue;
}
} else {
}
}
break;
}

var G__70276 = seq__70243;
var G__70277 = chunk__70244;
var G__70278 = count__70245;
var G__70279 = (i__70246 + (1));
seq__70243 = G__70276;
chunk__70244 = G__70277;
count__70245 = G__70278;
i__70246 = G__70279;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__70243);
if(temp__6738__auto__){
var seq__70243__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70243__$1)){
var c__59066__auto__ = cljs.core.chunk_first.call(null,seq__70243__$1);
var G__70280 = cljs.core.chunk_rest.call(null,seq__70243__$1);
var G__70281 = c__59066__auto__;
var G__70282 = cljs.core.count.call(null,c__59066__auto__);
var G__70283 = (0);
seq__70243 = G__70280;
chunk__70244 = G__70281;
count__70245 = G__70282;
i__70246 = G__70283;
continue;
} else {
var prov = cljs.core.first.call(null,seq__70243__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__70251_70284 = cljs.core.seq.call(null,requires);
var chunk__70252_70285 = null;
var count__70253_70286 = (0);
var i__70254_70287 = (0);
while(true){
if((i__70254_70287 < count__70253_70286)){
var req_70288 = cljs.core._nth.call(null,chunk__70252_70285,i__70254_70287);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_70288,prov);

var G__70289 = seq__70251_70284;
var G__70290 = chunk__70252_70285;
var G__70291 = count__70253_70286;
var G__70292 = (i__70254_70287 + (1));
seq__70251_70284 = G__70289;
chunk__70252_70285 = G__70290;
count__70253_70286 = G__70291;
i__70254_70287 = G__70292;
continue;
} else {
var temp__6738__auto___70293__$1 = cljs.core.seq.call(null,seq__70251_70284);
if(temp__6738__auto___70293__$1){
var seq__70251_70294__$1 = temp__6738__auto___70293__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70251_70294__$1)){
var c__59066__auto___70295 = cljs.core.chunk_first.call(null,seq__70251_70294__$1);
var G__70296 = cljs.core.chunk_rest.call(null,seq__70251_70294__$1);
var G__70297 = c__59066__auto___70295;
var G__70298 = cljs.core.count.call(null,c__59066__auto___70295);
var G__70299 = (0);
seq__70251_70284 = G__70296;
chunk__70252_70285 = G__70297;
count__70253_70286 = G__70298;
i__70254_70287 = G__70299;
continue;
} else {
var req_70300 = cljs.core.first.call(null,seq__70251_70294__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_70300,prov);

var G__70301 = cljs.core.next.call(null,seq__70251_70294__$1);
var G__70302 = null;
var G__70303 = (0);
var G__70304 = (0);
seq__70251_70284 = G__70301;
chunk__70252_70285 = G__70302;
count__70253_70286 = G__70303;
i__70254_70287 = G__70304;
continue;
}
} else {
}
}
break;
}

var G__70305 = cljs.core.next.call(null,seq__70243__$1);
var G__70306 = null;
var G__70307 = (0);
var G__70308 = (0);
seq__70243 = G__70305;
chunk__70244 = G__70306;
count__70245 = G__70307;
i__70246 = G__70308;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__70309_70313 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__70310_70314 = null;
var count__70311_70315 = (0);
var i__70312_70316 = (0);
while(true){
if((i__70312_70316 < count__70311_70315)){
var ns_70317 = cljs.core._nth.call(null,chunk__70310_70314,i__70312_70316);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_70317);

var G__70318 = seq__70309_70313;
var G__70319 = chunk__70310_70314;
var G__70320 = count__70311_70315;
var G__70321 = (i__70312_70316 + (1));
seq__70309_70313 = G__70318;
chunk__70310_70314 = G__70319;
count__70311_70315 = G__70320;
i__70312_70316 = G__70321;
continue;
} else {
var temp__6738__auto___70322 = cljs.core.seq.call(null,seq__70309_70313);
if(temp__6738__auto___70322){
var seq__70309_70323__$1 = temp__6738__auto___70322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70309_70323__$1)){
var c__59066__auto___70324 = cljs.core.chunk_first.call(null,seq__70309_70323__$1);
var G__70325 = cljs.core.chunk_rest.call(null,seq__70309_70323__$1);
var G__70326 = c__59066__auto___70324;
var G__70327 = cljs.core.count.call(null,c__59066__auto___70324);
var G__70328 = (0);
seq__70309_70313 = G__70325;
chunk__70310_70314 = G__70326;
count__70311_70315 = G__70327;
i__70312_70316 = G__70328;
continue;
} else {
var ns_70329 = cljs.core.first.call(null,seq__70309_70323__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_70329);

var G__70330 = cljs.core.next.call(null,seq__70309_70323__$1);
var G__70331 = null;
var G__70332 = (0);
var G__70333 = (0);
seq__70309_70313 = G__70330;
chunk__70310_70314 = G__70331;
count__70311_70315 = G__70332;
i__70312_70316 = G__70333;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__58135__auto__ = goog.require__;
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__70334__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__70334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70335__i = 0, G__70335__a = new Array(arguments.length -  0);
while (G__70335__i < G__70335__a.length) {G__70335__a[G__70335__i] = arguments[G__70335__i + 0]; ++G__70335__i;}
  args = new cljs.core.IndexedSeq(G__70335__a,0,null);
} 
return G__70334__delegate.call(this,args);};
G__70334.cljs$lang$maxFixedArity = 0;
G__70334.cljs$lang$applyTo = (function (arglist__70336){
var args = cljs.core.seq(arglist__70336);
return G__70334__delegate(args);
});
G__70334.cljs$core$IFn$_invoke$arity$variadic = G__70334__delegate;
return G__70334;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__70337_SHARP_,p2__70338_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70337_SHARP_)].join('')),p2__70338_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__70339_SHARP_,p2__70340_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70339_SHARP_)].join(''),p2__70340_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__70341 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__70341.addCallback(((function (G__70341){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__70341))
);

G__70341.addErrback(((function (G__70341){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__70341))
);

return G__70341;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__70342 = cljs.core._EQ_;
var expr__70343 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__70342.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__70343))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__70342,expr__70343){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__70342,expr__70343))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__70342,expr__70343){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e70345){if((e70345 instanceof Error)){
var e = e70345;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e70345;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__70342,expr__70343))
} else {
if(cljs.core.truth_(pred__70342.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__70343))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__70342.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__70343))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__70342.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__70343))){
return ((function (pred__70342,expr__70343){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e70346){if((e70346 instanceof Error)){
var e = e70346;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e70346;

}
}})());
});
;})(pred__70342,expr__70343))
} else {
return ((function (pred__70342,expr__70343){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__70342,expr__70343))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__70347,callback){
var map__70348 = p__70347;
var map__70348__$1 = ((((!((map__70348 == null)))?((((map__70348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70348):map__70348);
var file_msg = map__70348__$1;
var request_url = cljs.core.get.call(null,map__70348__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__70348,map__70348__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__70348,map__70348__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__){
return (function (state_70372){
var state_val_70373 = (state_70372[(1)]);
if((state_val_70373 === (7))){
var inst_70368 = (state_70372[(2)]);
var state_70372__$1 = state_70372;
var statearr_70374_70391 = state_70372__$1;
(statearr_70374_70391[(2)] = inst_70368);

(statearr_70374_70391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70373 === (1))){
var state_70372__$1 = state_70372;
var statearr_70375_70392 = state_70372__$1;
(statearr_70375_70392[(2)] = null);

(statearr_70375_70392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70373 === (4))){
var inst_70352 = (state_70372[(7)]);
var inst_70352__$1 = (state_70372[(2)]);
var state_70372__$1 = (function (){var statearr_70376 = state_70372;
(statearr_70376[(7)] = inst_70352__$1);

return statearr_70376;
})();
if(cljs.core.truth_(inst_70352__$1)){
var statearr_70377_70393 = state_70372__$1;
(statearr_70377_70393[(1)] = (5));

} else {
var statearr_70378_70394 = state_70372__$1;
(statearr_70378_70394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70373 === (6))){
var state_70372__$1 = state_70372;
var statearr_70379_70395 = state_70372__$1;
(statearr_70379_70395[(2)] = null);

(statearr_70379_70395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70373 === (3))){
var inst_70370 = (state_70372[(2)]);
var state_70372__$1 = state_70372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70372__$1,inst_70370);
} else {
if((state_val_70373 === (2))){
var state_70372__$1 = state_70372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70372__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_70373 === (11))){
var inst_70364 = (state_70372[(2)]);
var state_70372__$1 = (function (){var statearr_70380 = state_70372;
(statearr_70380[(8)] = inst_70364);

return statearr_70380;
})();
var statearr_70381_70396 = state_70372__$1;
(statearr_70381_70396[(2)] = null);

(statearr_70381_70396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70373 === (9))){
var inst_70356 = (state_70372[(9)]);
var inst_70358 = (state_70372[(10)]);
var inst_70360 = inst_70358.call(null,inst_70356);
var state_70372__$1 = state_70372;
var statearr_70382_70397 = state_70372__$1;
(statearr_70382_70397[(2)] = inst_70360);

(statearr_70382_70397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70373 === (5))){
var inst_70352 = (state_70372[(7)]);
var inst_70354 = figwheel.client.file_reloading.blocking_load.call(null,inst_70352);
var state_70372__$1 = state_70372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70372__$1,(8),inst_70354);
} else {
if((state_val_70373 === (10))){
var inst_70356 = (state_70372[(9)]);
var inst_70362 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_70356);
var state_70372__$1 = state_70372;
var statearr_70383_70398 = state_70372__$1;
(statearr_70383_70398[(2)] = inst_70362);

(statearr_70383_70398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70373 === (8))){
var inst_70358 = (state_70372[(10)]);
var inst_70352 = (state_70372[(7)]);
var inst_70356 = (state_70372[(2)]);
var inst_70357 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_70358__$1 = cljs.core.get.call(null,inst_70357,inst_70352);
var state_70372__$1 = (function (){var statearr_70384 = state_70372;
(statearr_70384[(9)] = inst_70356);

(statearr_70384[(10)] = inst_70358__$1);

return statearr_70384;
})();
if(cljs.core.truth_(inst_70358__$1)){
var statearr_70385_70399 = state_70372__$1;
(statearr_70385_70399[(1)] = (9));

} else {
var statearr_70386_70400 = state_70372__$1;
(statearr_70386_70400[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__63214__auto__))
;
return ((function (switch__63124__auto__,c__63214__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__63125__auto__ = null;
var figwheel$client$file_reloading$state_machine__63125__auto____0 = (function (){
var statearr_70387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70387[(0)] = figwheel$client$file_reloading$state_machine__63125__auto__);

(statearr_70387[(1)] = (1));

return statearr_70387;
});
var figwheel$client$file_reloading$state_machine__63125__auto____1 = (function (state_70372){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_70372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e70388){if((e70388 instanceof Object)){
var ex__63128__auto__ = e70388;
var statearr_70389_70401 = state_70372;
(statearr_70389_70401[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70402 = state_70372;
state_70372 = G__70402;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__63125__auto__ = function(state_70372){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__63125__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__63125__auto____1.call(this,state_70372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__63125__auto____0;
figwheel$client$file_reloading$state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__63125__auto____1;
return figwheel$client$file_reloading$state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__))
})();
var state__63216__auto__ = (function (){var statearr_70390 = f__63215__auto__.call(null);
(statearr_70390[(6)] = c__63214__auto__);

return statearr_70390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__))
);

return c__63214__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__70403,callback){
var map__70404 = p__70403;
var map__70404__$1 = ((((!((map__70404 == null)))?((((map__70404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70404):map__70404);
var file_msg = map__70404__$1;
var namespace = cljs.core.get.call(null,map__70404__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__70404,map__70404__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__70404,map__70404__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__70406){
var map__70407 = p__70406;
var map__70407__$1 = ((((!((map__70407 == null)))?((((map__70407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70407):map__70407);
var file_msg = map__70407__$1;
var namespace = cljs.core.get.call(null,map__70407__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__70409){
var map__70410 = p__70409;
var map__70410__$1 = ((((!((map__70410 == null)))?((((map__70410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70410):map__70410);
var file_msg = map__70410__$1;
var namespace = cljs.core.get.call(null,map__70410__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__58123__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__58123__auto__){
var or__58135__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__58135__auto__)){
return or__58135__auto__;
} else {
var or__58135__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__58135__auto____$1)){
return or__58135__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__58123__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__70412,callback){
var map__70413 = p__70412;
var map__70413__$1 = ((((!((map__70413 == null)))?((((map__70413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70413):map__70413);
var file_msg = map__70413__$1;
var request_url = cljs.core.get.call(null,map__70413__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__70413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__63214__auto___70463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto___70463,out){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto___70463,out){
return (function (state_70448){
var state_val_70449 = (state_70448[(1)]);
if((state_val_70449 === (1))){
var inst_70422 = cljs.core.seq.call(null,files);
var inst_70423 = cljs.core.first.call(null,inst_70422);
var inst_70424 = cljs.core.next.call(null,inst_70422);
var inst_70425 = files;
var state_70448__$1 = (function (){var statearr_70450 = state_70448;
(statearr_70450[(7)] = inst_70424);

(statearr_70450[(8)] = inst_70425);

(statearr_70450[(9)] = inst_70423);

return statearr_70450;
})();
var statearr_70451_70464 = state_70448__$1;
(statearr_70451_70464[(2)] = null);

(statearr_70451_70464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70449 === (2))){
var inst_70425 = (state_70448[(8)]);
var inst_70431 = (state_70448[(10)]);
var inst_70430 = cljs.core.seq.call(null,inst_70425);
var inst_70431__$1 = cljs.core.first.call(null,inst_70430);
var inst_70432 = cljs.core.next.call(null,inst_70430);
var inst_70433 = (inst_70431__$1 == null);
var inst_70434 = cljs.core.not.call(null,inst_70433);
var state_70448__$1 = (function (){var statearr_70452 = state_70448;
(statearr_70452[(10)] = inst_70431__$1);

(statearr_70452[(11)] = inst_70432);

return statearr_70452;
})();
if(inst_70434){
var statearr_70453_70465 = state_70448__$1;
(statearr_70453_70465[(1)] = (4));

} else {
var statearr_70454_70466 = state_70448__$1;
(statearr_70454_70466[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70449 === (3))){
var inst_70446 = (state_70448[(2)]);
var state_70448__$1 = state_70448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70448__$1,inst_70446);
} else {
if((state_val_70449 === (4))){
var inst_70431 = (state_70448[(10)]);
var inst_70436 = figwheel.client.file_reloading.reload_js_file.call(null,inst_70431);
var state_70448__$1 = state_70448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70448__$1,(7),inst_70436);
} else {
if((state_val_70449 === (5))){
var inst_70442 = cljs.core.async.close_BANG_.call(null,out);
var state_70448__$1 = state_70448;
var statearr_70455_70467 = state_70448__$1;
(statearr_70455_70467[(2)] = inst_70442);

(statearr_70455_70467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70449 === (6))){
var inst_70444 = (state_70448[(2)]);
var state_70448__$1 = state_70448;
var statearr_70456_70468 = state_70448__$1;
(statearr_70456_70468[(2)] = inst_70444);

(statearr_70456_70468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70449 === (7))){
var inst_70432 = (state_70448[(11)]);
var inst_70438 = (state_70448[(2)]);
var inst_70439 = cljs.core.async.put_BANG_.call(null,out,inst_70438);
var inst_70425 = inst_70432;
var state_70448__$1 = (function (){var statearr_70457 = state_70448;
(statearr_70457[(8)] = inst_70425);

(statearr_70457[(12)] = inst_70439);

return statearr_70457;
})();
var statearr_70458_70469 = state_70448__$1;
(statearr_70458_70469[(2)] = null);

(statearr_70458_70469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__63214__auto___70463,out))
;
return ((function (switch__63124__auto__,c__63214__auto___70463,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto____0 = (function (){
var statearr_70459 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70459[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto__);

(statearr_70459[(1)] = (1));

return statearr_70459;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto____1 = (function (state_70448){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_70448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e70460){if((e70460 instanceof Object)){
var ex__63128__auto__ = e70460;
var statearr_70461_70470 = state_70448;
(statearr_70461_70470[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70471 = state_70448;
state_70448 = G__70471;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto__ = function(state_70448){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto____1.call(this,state_70448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto___70463,out))
})();
var state__63216__auto__ = (function (){var statearr_70462 = f__63215__auto__.call(null);
(statearr_70462[(6)] = c__63214__auto___70463);

return statearr_70462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto___70463,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__70472,opts){
var map__70473 = p__70472;
var map__70473__$1 = ((((!((map__70473 == null)))?((((map__70473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70473):map__70473);
var eval_body = cljs.core.get.call(null,map__70473__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__70473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__58123__auto__ = eval_body;
if(cljs.core.truth_(and__58123__auto__)){
return typeof eval_body === 'string';
} else {
return and__58123__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e70475){var e = e70475;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6736__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__70476_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__70476_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6736__auto__)){
var file_msg = temp__6736__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__70477){
var vec__70478 = p__70477;
var k = cljs.core.nth.call(null,vec__70478,(0),null);
var v = cljs.core.nth.call(null,vec__70478,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__70481){
var vec__70482 = p__70481;
var k = cljs.core.nth.call(null,vec__70482,(0),null);
var v = cljs.core.nth.call(null,vec__70482,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__70488,p__70489){
var map__70490 = p__70488;
var map__70490__$1 = ((((!((map__70490 == null)))?((((map__70490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70490):map__70490);
var opts = map__70490__$1;
var before_jsload = cljs.core.get.call(null,map__70490__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__70490__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__70490__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__70491 = p__70489;
var map__70491__$1 = ((((!((map__70491 == null)))?((((map__70491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70491):map__70491);
var msg = map__70491__$1;
var files = cljs.core.get.call(null,map__70491__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__70491__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__70491__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__63214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__63215__auto__ = (function (){var switch__63124__auto__ = ((function (c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_70645){
var state_val_70646 = (state_70645[(1)]);
if((state_val_70646 === (7))){
var inst_70506 = (state_70645[(7)]);
var inst_70507 = (state_70645[(8)]);
var inst_70505 = (state_70645[(9)]);
var inst_70508 = (state_70645[(10)]);
var inst_70513 = cljs.core._nth.call(null,inst_70506,inst_70508);
var inst_70514 = figwheel.client.file_reloading.eval_body.call(null,inst_70513,opts);
var inst_70515 = (inst_70508 + (1));
var tmp70647 = inst_70506;
var tmp70648 = inst_70507;
var tmp70649 = inst_70505;
var inst_70505__$1 = tmp70649;
var inst_70506__$1 = tmp70647;
var inst_70507__$1 = tmp70648;
var inst_70508__$1 = inst_70515;
var state_70645__$1 = (function (){var statearr_70650 = state_70645;
(statearr_70650[(7)] = inst_70506__$1);

(statearr_70650[(8)] = inst_70507__$1);

(statearr_70650[(9)] = inst_70505__$1);

(statearr_70650[(10)] = inst_70508__$1);

(statearr_70650[(11)] = inst_70514);

return statearr_70650;
})();
var statearr_70651_70734 = state_70645__$1;
(statearr_70651_70734[(2)] = null);

(statearr_70651_70734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (20))){
var inst_70548 = (state_70645[(12)]);
var inst_70556 = figwheel.client.file_reloading.sort_files.call(null,inst_70548);
var state_70645__$1 = state_70645;
var statearr_70652_70735 = state_70645__$1;
(statearr_70652_70735[(2)] = inst_70556);

(statearr_70652_70735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (27))){
var state_70645__$1 = state_70645;
var statearr_70653_70736 = state_70645__$1;
(statearr_70653_70736[(2)] = null);

(statearr_70653_70736[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (1))){
var inst_70497 = (state_70645[(13)]);
var inst_70494 = before_jsload.call(null,files);
var inst_70495 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_70496 = (function (){return ((function (inst_70497,inst_70494,inst_70495,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__70485_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__70485_SHARP_);
});
;})(inst_70497,inst_70494,inst_70495,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70497__$1 = cljs.core.filter.call(null,inst_70496,files);
var inst_70498 = cljs.core.not_empty.call(null,inst_70497__$1);
var state_70645__$1 = (function (){var statearr_70654 = state_70645;
(statearr_70654[(14)] = inst_70494);

(statearr_70654[(13)] = inst_70497__$1);

(statearr_70654[(15)] = inst_70495);

return statearr_70654;
})();
if(cljs.core.truth_(inst_70498)){
var statearr_70655_70737 = state_70645__$1;
(statearr_70655_70737[(1)] = (2));

} else {
var statearr_70656_70738 = state_70645__$1;
(statearr_70656_70738[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (24))){
var state_70645__$1 = state_70645;
var statearr_70657_70739 = state_70645__$1;
(statearr_70657_70739[(2)] = null);

(statearr_70657_70739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (39))){
var inst_70598 = (state_70645[(16)]);
var state_70645__$1 = state_70645;
var statearr_70658_70740 = state_70645__$1;
(statearr_70658_70740[(2)] = inst_70598);

(statearr_70658_70740[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (46))){
var inst_70640 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
var statearr_70659_70741 = state_70645__$1;
(statearr_70659_70741[(2)] = inst_70640);

(statearr_70659_70741[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (4))){
var inst_70542 = (state_70645[(2)]);
var inst_70543 = cljs.core.List.EMPTY;
var inst_70544 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_70543);
var inst_70545 = (function (){return ((function (inst_70542,inst_70543,inst_70544,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__70486_SHARP_){
var and__58123__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__70486_SHARP_);
if(cljs.core.truth_(and__58123__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__70486_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__70486_SHARP_)));
} else {
return and__58123__auto__;
}
});
;})(inst_70542,inst_70543,inst_70544,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70546 = cljs.core.filter.call(null,inst_70545,files);
var inst_70547 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_70548 = cljs.core.concat.call(null,inst_70546,inst_70547);
var state_70645__$1 = (function (){var statearr_70660 = state_70645;
(statearr_70660[(17)] = inst_70542);

(statearr_70660[(18)] = inst_70544);

(statearr_70660[(12)] = inst_70548);

return statearr_70660;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_70661_70742 = state_70645__$1;
(statearr_70661_70742[(1)] = (16));

} else {
var statearr_70662_70743 = state_70645__$1;
(statearr_70662_70743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (15))){
var inst_70532 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
var statearr_70663_70744 = state_70645__$1;
(statearr_70663_70744[(2)] = inst_70532);

(statearr_70663_70744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (21))){
var inst_70558 = (state_70645[(19)]);
var inst_70558__$1 = (state_70645[(2)]);
var inst_70559 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_70558__$1);
var state_70645__$1 = (function (){var statearr_70664 = state_70645;
(statearr_70664[(19)] = inst_70558__$1);

return statearr_70664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70645__$1,(22),inst_70559);
} else {
if((state_val_70646 === (31))){
var inst_70643 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70645__$1,inst_70643);
} else {
if((state_val_70646 === (32))){
var inst_70598 = (state_70645[(16)]);
var inst_70603 = inst_70598.cljs$lang$protocol_mask$partition0$;
var inst_70604 = (inst_70603 & (64));
var inst_70605 = inst_70598.cljs$core$ISeq$;
var inst_70606 = (cljs.core.PROTOCOL_SENTINEL === inst_70605);
var inst_70607 = (inst_70604) || (inst_70606);
var state_70645__$1 = state_70645;
if(cljs.core.truth_(inst_70607)){
var statearr_70665_70745 = state_70645__$1;
(statearr_70665_70745[(1)] = (35));

} else {
var statearr_70666_70746 = state_70645__$1;
(statearr_70666_70746[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (40))){
var inst_70620 = (state_70645[(20)]);
var inst_70619 = (state_70645[(2)]);
var inst_70620__$1 = cljs.core.get.call(null,inst_70619,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_70621 = cljs.core.get.call(null,inst_70619,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_70622 = cljs.core.not_empty.call(null,inst_70620__$1);
var state_70645__$1 = (function (){var statearr_70667 = state_70645;
(statearr_70667[(21)] = inst_70621);

(statearr_70667[(20)] = inst_70620__$1);

return statearr_70667;
})();
if(cljs.core.truth_(inst_70622)){
var statearr_70668_70747 = state_70645__$1;
(statearr_70668_70747[(1)] = (41));

} else {
var statearr_70669_70748 = state_70645__$1;
(statearr_70669_70748[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (33))){
var state_70645__$1 = state_70645;
var statearr_70670_70749 = state_70645__$1;
(statearr_70670_70749[(2)] = false);

(statearr_70670_70749[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (13))){
var inst_70518 = (state_70645[(22)]);
var inst_70522 = cljs.core.chunk_first.call(null,inst_70518);
var inst_70523 = cljs.core.chunk_rest.call(null,inst_70518);
var inst_70524 = cljs.core.count.call(null,inst_70522);
var inst_70505 = inst_70523;
var inst_70506 = inst_70522;
var inst_70507 = inst_70524;
var inst_70508 = (0);
var state_70645__$1 = (function (){var statearr_70671 = state_70645;
(statearr_70671[(7)] = inst_70506);

(statearr_70671[(8)] = inst_70507);

(statearr_70671[(9)] = inst_70505);

(statearr_70671[(10)] = inst_70508);

return statearr_70671;
})();
var statearr_70672_70750 = state_70645__$1;
(statearr_70672_70750[(2)] = null);

(statearr_70672_70750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (22))){
var inst_70566 = (state_70645[(23)]);
var inst_70562 = (state_70645[(24)]);
var inst_70561 = (state_70645[(25)]);
var inst_70558 = (state_70645[(19)]);
var inst_70561__$1 = (state_70645[(2)]);
var inst_70562__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_70561__$1);
var inst_70563 = (function (){var all_files = inst_70558;
var res_SINGLEQUOTE_ = inst_70561__$1;
var res = inst_70562__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_70566,inst_70562,inst_70561,inst_70558,inst_70561__$1,inst_70562__$1,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__70487_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__70487_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_70566,inst_70562,inst_70561,inst_70558,inst_70561__$1,inst_70562__$1,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70564 = cljs.core.filter.call(null,inst_70563,inst_70561__$1);
var inst_70565 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_70566__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_70565);
var inst_70567 = cljs.core.not_empty.call(null,inst_70566__$1);
var state_70645__$1 = (function (){var statearr_70673 = state_70645;
(statearr_70673[(26)] = inst_70564);

(statearr_70673[(23)] = inst_70566__$1);

(statearr_70673[(24)] = inst_70562__$1);

(statearr_70673[(25)] = inst_70561__$1);

return statearr_70673;
})();
if(cljs.core.truth_(inst_70567)){
var statearr_70674_70751 = state_70645__$1;
(statearr_70674_70751[(1)] = (23));

} else {
var statearr_70675_70752 = state_70645__$1;
(statearr_70675_70752[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (36))){
var state_70645__$1 = state_70645;
var statearr_70676_70753 = state_70645__$1;
(statearr_70676_70753[(2)] = false);

(statearr_70676_70753[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (41))){
var inst_70620 = (state_70645[(20)]);
var inst_70624 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_70625 = cljs.core.map.call(null,inst_70624,inst_70620);
var inst_70626 = cljs.core.pr_str.call(null,inst_70625);
var inst_70627 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_70626)].join('');
var inst_70628 = figwheel.client.utils.log.call(null,inst_70627);
var state_70645__$1 = state_70645;
var statearr_70677_70754 = state_70645__$1;
(statearr_70677_70754[(2)] = inst_70628);

(statearr_70677_70754[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (43))){
var inst_70621 = (state_70645[(21)]);
var inst_70631 = (state_70645[(2)]);
var inst_70632 = cljs.core.not_empty.call(null,inst_70621);
var state_70645__$1 = (function (){var statearr_70678 = state_70645;
(statearr_70678[(27)] = inst_70631);

return statearr_70678;
})();
if(cljs.core.truth_(inst_70632)){
var statearr_70679_70755 = state_70645__$1;
(statearr_70679_70755[(1)] = (44));

} else {
var statearr_70680_70756 = state_70645__$1;
(statearr_70680_70756[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (29))){
var inst_70564 = (state_70645[(26)]);
var inst_70598 = (state_70645[(16)]);
var inst_70566 = (state_70645[(23)]);
var inst_70562 = (state_70645[(24)]);
var inst_70561 = (state_70645[(25)]);
var inst_70558 = (state_70645[(19)]);
var inst_70594 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_70597 = (function (){var all_files = inst_70558;
var res_SINGLEQUOTE_ = inst_70561;
var res = inst_70562;
var files_not_loaded = inst_70564;
var dependencies_that_loaded = inst_70566;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70564,inst_70598,inst_70566,inst_70562,inst_70561,inst_70558,inst_70594,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__70596){
var map__70681 = p__70596;
var map__70681__$1 = ((((!((map__70681 == null)))?((((map__70681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70681):map__70681);
var namespace = cljs.core.get.call(null,map__70681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70564,inst_70598,inst_70566,inst_70562,inst_70561,inst_70558,inst_70594,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70598__$1 = cljs.core.group_by.call(null,inst_70597,inst_70564);
var inst_70600 = (inst_70598__$1 == null);
var inst_70601 = cljs.core.not.call(null,inst_70600);
var state_70645__$1 = (function (){var statearr_70683 = state_70645;
(statearr_70683[(28)] = inst_70594);

(statearr_70683[(16)] = inst_70598__$1);

return statearr_70683;
})();
if(inst_70601){
var statearr_70684_70757 = state_70645__$1;
(statearr_70684_70757[(1)] = (32));

} else {
var statearr_70685_70758 = state_70645__$1;
(statearr_70685_70758[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (44))){
var inst_70621 = (state_70645[(21)]);
var inst_70634 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_70621);
var inst_70635 = cljs.core.pr_str.call(null,inst_70634);
var inst_70636 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_70635)].join('');
var inst_70637 = figwheel.client.utils.log.call(null,inst_70636);
var state_70645__$1 = state_70645;
var statearr_70686_70759 = state_70645__$1;
(statearr_70686_70759[(2)] = inst_70637);

(statearr_70686_70759[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (6))){
var inst_70539 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
var statearr_70687_70760 = state_70645__$1;
(statearr_70687_70760[(2)] = inst_70539);

(statearr_70687_70760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (28))){
var inst_70564 = (state_70645[(26)]);
var inst_70591 = (state_70645[(2)]);
var inst_70592 = cljs.core.not_empty.call(null,inst_70564);
var state_70645__$1 = (function (){var statearr_70688 = state_70645;
(statearr_70688[(29)] = inst_70591);

return statearr_70688;
})();
if(cljs.core.truth_(inst_70592)){
var statearr_70689_70761 = state_70645__$1;
(statearr_70689_70761[(1)] = (29));

} else {
var statearr_70690_70762 = state_70645__$1;
(statearr_70690_70762[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (25))){
var inst_70562 = (state_70645[(24)]);
var inst_70578 = (state_70645[(2)]);
var inst_70579 = cljs.core.not_empty.call(null,inst_70562);
var state_70645__$1 = (function (){var statearr_70691 = state_70645;
(statearr_70691[(30)] = inst_70578);

return statearr_70691;
})();
if(cljs.core.truth_(inst_70579)){
var statearr_70692_70763 = state_70645__$1;
(statearr_70692_70763[(1)] = (26));

} else {
var statearr_70693_70764 = state_70645__$1;
(statearr_70693_70764[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (34))){
var inst_70614 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
if(cljs.core.truth_(inst_70614)){
var statearr_70694_70765 = state_70645__$1;
(statearr_70694_70765[(1)] = (38));

} else {
var statearr_70695_70766 = state_70645__$1;
(statearr_70695_70766[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (17))){
var state_70645__$1 = state_70645;
var statearr_70696_70767 = state_70645__$1;
(statearr_70696_70767[(2)] = recompile_dependents);

(statearr_70696_70767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (3))){
var state_70645__$1 = state_70645;
var statearr_70697_70768 = state_70645__$1;
(statearr_70697_70768[(2)] = null);

(statearr_70697_70768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (12))){
var inst_70535 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
var statearr_70698_70769 = state_70645__$1;
(statearr_70698_70769[(2)] = inst_70535);

(statearr_70698_70769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (2))){
var inst_70497 = (state_70645[(13)]);
var inst_70504 = cljs.core.seq.call(null,inst_70497);
var inst_70505 = inst_70504;
var inst_70506 = null;
var inst_70507 = (0);
var inst_70508 = (0);
var state_70645__$1 = (function (){var statearr_70699 = state_70645;
(statearr_70699[(7)] = inst_70506);

(statearr_70699[(8)] = inst_70507);

(statearr_70699[(9)] = inst_70505);

(statearr_70699[(10)] = inst_70508);

return statearr_70699;
})();
var statearr_70700_70770 = state_70645__$1;
(statearr_70700_70770[(2)] = null);

(statearr_70700_70770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (23))){
var inst_70564 = (state_70645[(26)]);
var inst_70566 = (state_70645[(23)]);
var inst_70562 = (state_70645[(24)]);
var inst_70561 = (state_70645[(25)]);
var inst_70558 = (state_70645[(19)]);
var inst_70569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_70571 = (function (){var all_files = inst_70558;
var res_SINGLEQUOTE_ = inst_70561;
var res = inst_70562;
var files_not_loaded = inst_70564;
var dependencies_that_loaded = inst_70566;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70564,inst_70566,inst_70562,inst_70561,inst_70558,inst_70569,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__70570){
var map__70701 = p__70570;
var map__70701__$1 = ((((!((map__70701 == null)))?((((map__70701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70701):map__70701);
var request_url = cljs.core.get.call(null,map__70701__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70564,inst_70566,inst_70562,inst_70561,inst_70558,inst_70569,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70572 = cljs.core.reverse.call(null,inst_70566);
var inst_70573 = cljs.core.map.call(null,inst_70571,inst_70572);
var inst_70574 = cljs.core.pr_str.call(null,inst_70573);
var inst_70575 = figwheel.client.utils.log.call(null,inst_70574);
var state_70645__$1 = (function (){var statearr_70703 = state_70645;
(statearr_70703[(31)] = inst_70569);

return statearr_70703;
})();
var statearr_70704_70771 = state_70645__$1;
(statearr_70704_70771[(2)] = inst_70575);

(statearr_70704_70771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (35))){
var state_70645__$1 = state_70645;
var statearr_70705_70772 = state_70645__$1;
(statearr_70705_70772[(2)] = true);

(statearr_70705_70772[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (19))){
var inst_70548 = (state_70645[(12)]);
var inst_70554 = figwheel.client.file_reloading.expand_files.call(null,inst_70548);
var state_70645__$1 = state_70645;
var statearr_70706_70773 = state_70645__$1;
(statearr_70706_70773[(2)] = inst_70554);

(statearr_70706_70773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (11))){
var state_70645__$1 = state_70645;
var statearr_70707_70774 = state_70645__$1;
(statearr_70707_70774[(2)] = null);

(statearr_70707_70774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (9))){
var inst_70537 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
var statearr_70708_70775 = state_70645__$1;
(statearr_70708_70775[(2)] = inst_70537);

(statearr_70708_70775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (5))){
var inst_70507 = (state_70645[(8)]);
var inst_70508 = (state_70645[(10)]);
var inst_70510 = (inst_70508 < inst_70507);
var inst_70511 = inst_70510;
var state_70645__$1 = state_70645;
if(cljs.core.truth_(inst_70511)){
var statearr_70709_70776 = state_70645__$1;
(statearr_70709_70776[(1)] = (7));

} else {
var statearr_70710_70777 = state_70645__$1;
(statearr_70710_70777[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (14))){
var inst_70518 = (state_70645[(22)]);
var inst_70527 = cljs.core.first.call(null,inst_70518);
var inst_70528 = figwheel.client.file_reloading.eval_body.call(null,inst_70527,opts);
var inst_70529 = cljs.core.next.call(null,inst_70518);
var inst_70505 = inst_70529;
var inst_70506 = null;
var inst_70507 = (0);
var inst_70508 = (0);
var state_70645__$1 = (function (){var statearr_70711 = state_70645;
(statearr_70711[(32)] = inst_70528);

(statearr_70711[(7)] = inst_70506);

(statearr_70711[(8)] = inst_70507);

(statearr_70711[(9)] = inst_70505);

(statearr_70711[(10)] = inst_70508);

return statearr_70711;
})();
var statearr_70712_70778 = state_70645__$1;
(statearr_70712_70778[(2)] = null);

(statearr_70712_70778[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (45))){
var state_70645__$1 = state_70645;
var statearr_70713_70779 = state_70645__$1;
(statearr_70713_70779[(2)] = null);

(statearr_70713_70779[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (26))){
var inst_70564 = (state_70645[(26)]);
var inst_70566 = (state_70645[(23)]);
var inst_70562 = (state_70645[(24)]);
var inst_70561 = (state_70645[(25)]);
var inst_70558 = (state_70645[(19)]);
var inst_70581 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_70583 = (function (){var all_files = inst_70558;
var res_SINGLEQUOTE_ = inst_70561;
var res = inst_70562;
var files_not_loaded = inst_70564;
var dependencies_that_loaded = inst_70566;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70564,inst_70566,inst_70562,inst_70561,inst_70558,inst_70581,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__70582){
var map__70714 = p__70582;
var map__70714__$1 = ((((!((map__70714 == null)))?((((map__70714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70714):map__70714);
var namespace = cljs.core.get.call(null,map__70714__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__70714__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70564,inst_70566,inst_70562,inst_70561,inst_70558,inst_70581,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70584 = cljs.core.map.call(null,inst_70583,inst_70562);
var inst_70585 = cljs.core.pr_str.call(null,inst_70584);
var inst_70586 = figwheel.client.utils.log.call(null,inst_70585);
var inst_70587 = (function (){var all_files = inst_70558;
var res_SINGLEQUOTE_ = inst_70561;
var res = inst_70562;
var files_not_loaded = inst_70564;
var dependencies_that_loaded = inst_70566;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70564,inst_70566,inst_70562,inst_70561,inst_70558,inst_70581,inst_70583,inst_70584,inst_70585,inst_70586,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70564,inst_70566,inst_70562,inst_70561,inst_70558,inst_70581,inst_70583,inst_70584,inst_70585,inst_70586,state_val_70646,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70588 = setTimeout(inst_70587,(10));
var state_70645__$1 = (function (){var statearr_70716 = state_70645;
(statearr_70716[(33)] = inst_70581);

(statearr_70716[(34)] = inst_70586);

return statearr_70716;
})();
var statearr_70717_70780 = state_70645__$1;
(statearr_70717_70780[(2)] = inst_70588);

(statearr_70717_70780[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (16))){
var state_70645__$1 = state_70645;
var statearr_70718_70781 = state_70645__$1;
(statearr_70718_70781[(2)] = reload_dependents);

(statearr_70718_70781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (38))){
var inst_70598 = (state_70645[(16)]);
var inst_70616 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70598);
var state_70645__$1 = state_70645;
var statearr_70719_70782 = state_70645__$1;
(statearr_70719_70782[(2)] = inst_70616);

(statearr_70719_70782[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (30))){
var state_70645__$1 = state_70645;
var statearr_70720_70783 = state_70645__$1;
(statearr_70720_70783[(2)] = null);

(statearr_70720_70783[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (10))){
var inst_70518 = (state_70645[(22)]);
var inst_70520 = cljs.core.chunked_seq_QMARK_.call(null,inst_70518);
var state_70645__$1 = state_70645;
if(inst_70520){
var statearr_70721_70784 = state_70645__$1;
(statearr_70721_70784[(1)] = (13));

} else {
var statearr_70722_70785 = state_70645__$1;
(statearr_70722_70785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (18))){
var inst_70552 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
if(cljs.core.truth_(inst_70552)){
var statearr_70723_70786 = state_70645__$1;
(statearr_70723_70786[(1)] = (19));

} else {
var statearr_70724_70787 = state_70645__$1;
(statearr_70724_70787[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (42))){
var state_70645__$1 = state_70645;
var statearr_70725_70788 = state_70645__$1;
(statearr_70725_70788[(2)] = null);

(statearr_70725_70788[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (37))){
var inst_70611 = (state_70645[(2)]);
var state_70645__$1 = state_70645;
var statearr_70726_70789 = state_70645__$1;
(statearr_70726_70789[(2)] = inst_70611);

(statearr_70726_70789[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70646 === (8))){
var inst_70518 = (state_70645[(22)]);
var inst_70505 = (state_70645[(9)]);
var inst_70518__$1 = cljs.core.seq.call(null,inst_70505);
var state_70645__$1 = (function (){var statearr_70727 = state_70645;
(statearr_70727[(22)] = inst_70518__$1);

return statearr_70727;
})();
if(inst_70518__$1){
var statearr_70728_70790 = state_70645__$1;
(statearr_70728_70790[(1)] = (10));

} else {
var statearr_70729_70791 = state_70645__$1;
(statearr_70729_70791[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__63124__auto__,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto____0 = (function (){
var statearr_70730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70730[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto__);

(statearr_70730[(1)] = (1));

return statearr_70730;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto____1 = (function (state_70645){
while(true){
var ret_value__63126__auto__ = (function (){try{while(true){
var result__63127__auto__ = switch__63124__auto__.call(null,state_70645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__63127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63127__auto__;
}
break;
}
}catch (e70731){if((e70731 instanceof Object)){
var ex__63128__auto__ = e70731;
var statearr_70732_70792 = state_70645;
(statearr_70732_70792[(5)] = ex__63128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__63126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70793 = state_70645;
state_70645 = G__70793;
continue;
} else {
return ret_value__63126__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto__ = function(state_70645){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto____1.call(this,state_70645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__63125__auto__;
})()
;})(switch__63124__auto__,c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__63216__auto__ = (function (){var statearr_70733 = f__63215__auto__.call(null);
(statearr_70733[(6)] = c__63214__auto__);

return statearr_70733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__63216__auto__);
});})(c__63214__auto__,map__70490,map__70490__$1,opts,before_jsload,on_jsload,reload_dependents,map__70491,map__70491__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__63214__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__70796,link){
var map__70797 = p__70796;
var map__70797__$1 = ((((!((map__70797 == null)))?((((map__70797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70797):map__70797);
var file = cljs.core.get.call(null,map__70797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__70797,map__70797__$1,file){
return (function (p1__70794_SHARP_,p2__70795_SHARP_){
if(cljs.core._EQ_.call(null,p1__70794_SHARP_,p2__70795_SHARP_)){
return p1__70794_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__70797,map__70797__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__70800){
var map__70801 = p__70800;
var map__70801__$1 = ((((!((map__70801 == null)))?((((map__70801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70801):map__70801);
var match_length = cljs.core.get.call(null,map__70801__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__70801__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__70799_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__70799_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6738__auto__)){
var res = temp__6738__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__70803_SHARP_,p2__70804_SHARP_){
return cljs.core.assoc.call(null,p1__70803_SHARP_,cljs.core.get.call(null,p2__70804_SHARP_,key),p2__70804_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6736__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6736__auto__)){
var link = temp__6736__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6736__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6736__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_70805 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_70805);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_70805);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__70806,p__70807){
var map__70808 = p__70806;
var map__70808__$1 = ((((!((map__70808 == null)))?((((map__70808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70808):map__70808);
var on_cssload = cljs.core.get.call(null,map__70808__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__70809 = p__70807;
var map__70809__$1 = ((((!((map__70809 == null)))?((((map__70809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70809):map__70809);
var files_msg = map__70809__$1;
var files = cljs.core.get.call(null,map__70809__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6738__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6738__auto__)){
var f_datas = temp__6738__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1506641516736
