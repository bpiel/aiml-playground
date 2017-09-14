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
var or__58161__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__58161__auto__){
return or__58161__auto__;
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
var or__58161__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
var or__58161__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__58161__auto____$1)){
return or__58161__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__69281_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__69281_SHARP_));
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
var seq__69282 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__69283 = null;
var count__69284 = (0);
var i__69285 = (0);
while(true){
if((i__69285 < count__69284)){
var n = cljs.core._nth.call(null,chunk__69283,i__69285);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__69286 = seq__69282;
var G__69287 = chunk__69283;
var G__69288 = count__69284;
var G__69289 = (i__69285 + (1));
seq__69282 = G__69286;
chunk__69283 = G__69287;
count__69284 = G__69288;
i__69285 = G__69289;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__69282);
if(temp__6738__auto__){
var seq__69282__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69282__$1)){
var c__59092__auto__ = cljs.core.chunk_first.call(null,seq__69282__$1);
var G__69290 = cljs.core.chunk_rest.call(null,seq__69282__$1);
var G__69291 = c__59092__auto__;
var G__69292 = cljs.core.count.call(null,c__59092__auto__);
var G__69293 = (0);
seq__69282 = G__69290;
chunk__69283 = G__69291;
count__69284 = G__69292;
i__69285 = G__69293;
continue;
} else {
var n = cljs.core.first.call(null,seq__69282__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__69294 = cljs.core.next.call(null,seq__69282__$1);
var G__69295 = null;
var G__69296 = (0);
var G__69297 = (0);
seq__69282 = G__69294;
chunk__69283 = G__69295;
count__69284 = G__69296;
i__69285 = G__69297;
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

var seq__69307_69315 = cljs.core.seq.call(null,deps);
var chunk__69308_69316 = null;
var count__69309_69317 = (0);
var i__69310_69318 = (0);
while(true){
if((i__69310_69318 < count__69309_69317)){
var dep_69319 = cljs.core._nth.call(null,chunk__69308_69316,i__69310_69318);
topo_sort_helper_STAR_.call(null,dep_69319,(depth + (1)),state);

var G__69320 = seq__69307_69315;
var G__69321 = chunk__69308_69316;
var G__69322 = count__69309_69317;
var G__69323 = (i__69310_69318 + (1));
seq__69307_69315 = G__69320;
chunk__69308_69316 = G__69321;
count__69309_69317 = G__69322;
i__69310_69318 = G__69323;
continue;
} else {
var temp__6738__auto___69324 = cljs.core.seq.call(null,seq__69307_69315);
if(temp__6738__auto___69324){
var seq__69307_69325__$1 = temp__6738__auto___69324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69307_69325__$1)){
var c__59092__auto___69326 = cljs.core.chunk_first.call(null,seq__69307_69325__$1);
var G__69327 = cljs.core.chunk_rest.call(null,seq__69307_69325__$1);
var G__69328 = c__59092__auto___69326;
var G__69329 = cljs.core.count.call(null,c__59092__auto___69326);
var G__69330 = (0);
seq__69307_69315 = G__69327;
chunk__69308_69316 = G__69328;
count__69309_69317 = G__69329;
i__69310_69318 = G__69330;
continue;
} else {
var dep_69331 = cljs.core.first.call(null,seq__69307_69325__$1);
topo_sort_helper_STAR_.call(null,dep_69331,(depth + (1)),state);

var G__69332 = cljs.core.next.call(null,seq__69307_69325__$1);
var G__69333 = null;
var G__69334 = (0);
var G__69335 = (0);
seq__69307_69315 = G__69332;
chunk__69308_69316 = G__69333;
count__69309_69317 = G__69334;
i__69310_69318 = G__69335;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__69311){
var vec__69312 = p__69311;
var seq__69313 = cljs.core.seq.call(null,vec__69312);
var first__69314 = cljs.core.first.call(null,seq__69313);
var seq__69313__$1 = cljs.core.next.call(null,seq__69313);
var x = first__69314;
var xs = seq__69313__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__69312,seq__69313,first__69314,seq__69313__$1,x,xs,get_deps__$1){
return (function (p1__69298_SHARP_){
return clojure.set.difference.call(null,p1__69298_SHARP_,x);
});})(vec__69312,seq__69313,first__69314,seq__69313__$1,x,xs,get_deps__$1))
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
var seq__69336 = cljs.core.seq.call(null,provides);
var chunk__69337 = null;
var count__69338 = (0);
var i__69339 = (0);
while(true){
if((i__69339 < count__69338)){
var prov = cljs.core._nth.call(null,chunk__69337,i__69339);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__69340_69348 = cljs.core.seq.call(null,requires);
var chunk__69341_69349 = null;
var count__69342_69350 = (0);
var i__69343_69351 = (0);
while(true){
if((i__69343_69351 < count__69342_69350)){
var req_69352 = cljs.core._nth.call(null,chunk__69341_69349,i__69343_69351);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_69352,prov);

var G__69353 = seq__69340_69348;
var G__69354 = chunk__69341_69349;
var G__69355 = count__69342_69350;
var G__69356 = (i__69343_69351 + (1));
seq__69340_69348 = G__69353;
chunk__69341_69349 = G__69354;
count__69342_69350 = G__69355;
i__69343_69351 = G__69356;
continue;
} else {
var temp__6738__auto___69357 = cljs.core.seq.call(null,seq__69340_69348);
if(temp__6738__auto___69357){
var seq__69340_69358__$1 = temp__6738__auto___69357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69340_69358__$1)){
var c__59092__auto___69359 = cljs.core.chunk_first.call(null,seq__69340_69358__$1);
var G__69360 = cljs.core.chunk_rest.call(null,seq__69340_69358__$1);
var G__69361 = c__59092__auto___69359;
var G__69362 = cljs.core.count.call(null,c__59092__auto___69359);
var G__69363 = (0);
seq__69340_69348 = G__69360;
chunk__69341_69349 = G__69361;
count__69342_69350 = G__69362;
i__69343_69351 = G__69363;
continue;
} else {
var req_69364 = cljs.core.first.call(null,seq__69340_69358__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_69364,prov);

var G__69365 = cljs.core.next.call(null,seq__69340_69358__$1);
var G__69366 = null;
var G__69367 = (0);
var G__69368 = (0);
seq__69340_69348 = G__69365;
chunk__69341_69349 = G__69366;
count__69342_69350 = G__69367;
i__69343_69351 = G__69368;
continue;
}
} else {
}
}
break;
}

var G__69369 = seq__69336;
var G__69370 = chunk__69337;
var G__69371 = count__69338;
var G__69372 = (i__69339 + (1));
seq__69336 = G__69369;
chunk__69337 = G__69370;
count__69338 = G__69371;
i__69339 = G__69372;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__69336);
if(temp__6738__auto__){
var seq__69336__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69336__$1)){
var c__59092__auto__ = cljs.core.chunk_first.call(null,seq__69336__$1);
var G__69373 = cljs.core.chunk_rest.call(null,seq__69336__$1);
var G__69374 = c__59092__auto__;
var G__69375 = cljs.core.count.call(null,c__59092__auto__);
var G__69376 = (0);
seq__69336 = G__69373;
chunk__69337 = G__69374;
count__69338 = G__69375;
i__69339 = G__69376;
continue;
} else {
var prov = cljs.core.first.call(null,seq__69336__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__69344_69377 = cljs.core.seq.call(null,requires);
var chunk__69345_69378 = null;
var count__69346_69379 = (0);
var i__69347_69380 = (0);
while(true){
if((i__69347_69380 < count__69346_69379)){
var req_69381 = cljs.core._nth.call(null,chunk__69345_69378,i__69347_69380);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_69381,prov);

var G__69382 = seq__69344_69377;
var G__69383 = chunk__69345_69378;
var G__69384 = count__69346_69379;
var G__69385 = (i__69347_69380 + (1));
seq__69344_69377 = G__69382;
chunk__69345_69378 = G__69383;
count__69346_69379 = G__69384;
i__69347_69380 = G__69385;
continue;
} else {
var temp__6738__auto___69386__$1 = cljs.core.seq.call(null,seq__69344_69377);
if(temp__6738__auto___69386__$1){
var seq__69344_69387__$1 = temp__6738__auto___69386__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69344_69387__$1)){
var c__59092__auto___69388 = cljs.core.chunk_first.call(null,seq__69344_69387__$1);
var G__69389 = cljs.core.chunk_rest.call(null,seq__69344_69387__$1);
var G__69390 = c__59092__auto___69388;
var G__69391 = cljs.core.count.call(null,c__59092__auto___69388);
var G__69392 = (0);
seq__69344_69377 = G__69389;
chunk__69345_69378 = G__69390;
count__69346_69379 = G__69391;
i__69347_69380 = G__69392;
continue;
} else {
var req_69393 = cljs.core.first.call(null,seq__69344_69387__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_69393,prov);

var G__69394 = cljs.core.next.call(null,seq__69344_69387__$1);
var G__69395 = null;
var G__69396 = (0);
var G__69397 = (0);
seq__69344_69377 = G__69394;
chunk__69345_69378 = G__69395;
count__69346_69379 = G__69396;
i__69347_69380 = G__69397;
continue;
}
} else {
}
}
break;
}

var G__69398 = cljs.core.next.call(null,seq__69336__$1);
var G__69399 = null;
var G__69400 = (0);
var G__69401 = (0);
seq__69336 = G__69398;
chunk__69337 = G__69399;
count__69338 = G__69400;
i__69339 = G__69401;
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
var seq__69402_69406 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__69403_69407 = null;
var count__69404_69408 = (0);
var i__69405_69409 = (0);
while(true){
if((i__69405_69409 < count__69404_69408)){
var ns_69410 = cljs.core._nth.call(null,chunk__69403_69407,i__69405_69409);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_69410);

var G__69411 = seq__69402_69406;
var G__69412 = chunk__69403_69407;
var G__69413 = count__69404_69408;
var G__69414 = (i__69405_69409 + (1));
seq__69402_69406 = G__69411;
chunk__69403_69407 = G__69412;
count__69404_69408 = G__69413;
i__69405_69409 = G__69414;
continue;
} else {
var temp__6738__auto___69415 = cljs.core.seq.call(null,seq__69402_69406);
if(temp__6738__auto___69415){
var seq__69402_69416__$1 = temp__6738__auto___69415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69402_69416__$1)){
var c__59092__auto___69417 = cljs.core.chunk_first.call(null,seq__69402_69416__$1);
var G__69418 = cljs.core.chunk_rest.call(null,seq__69402_69416__$1);
var G__69419 = c__59092__auto___69417;
var G__69420 = cljs.core.count.call(null,c__59092__auto___69417);
var G__69421 = (0);
seq__69402_69406 = G__69418;
chunk__69403_69407 = G__69419;
count__69404_69408 = G__69420;
i__69405_69409 = G__69421;
continue;
} else {
var ns_69422 = cljs.core.first.call(null,seq__69402_69416__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_69422);

var G__69423 = cljs.core.next.call(null,seq__69402_69416__$1);
var G__69424 = null;
var G__69425 = (0);
var G__69426 = (0);
seq__69402_69406 = G__69423;
chunk__69403_69407 = G__69424;
count__69404_69408 = G__69425;
i__69405_69409 = G__69426;
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
goog.require_figwheel_backup_ = (function (){var or__58161__auto__ = goog.require__;
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
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
var G__69427__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__69427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69428__i = 0, G__69428__a = new Array(arguments.length -  0);
while (G__69428__i < G__69428__a.length) {G__69428__a[G__69428__i] = arguments[G__69428__i + 0]; ++G__69428__i;}
  args = new cljs.core.IndexedSeq(G__69428__a,0,null);
} 
return G__69427__delegate.call(this,args);};
G__69427.cljs$lang$maxFixedArity = 0;
G__69427.cljs$lang$applyTo = (function (arglist__69429){
var args = cljs.core.seq(arglist__69429);
return G__69427__delegate(args);
});
G__69427.cljs$core$IFn$_invoke$arity$variadic = G__69427__delegate;
return G__69427;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__69430_SHARP_,p2__69431_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__69430_SHARP_)].join('')),p2__69431_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__69432_SHARP_,p2__69433_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__69432_SHARP_)].join(''),p2__69433_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__69434 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__69434.addCallback(((function (G__69434){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__69434))
);

G__69434.addErrback(((function (G__69434){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__69434))
);

return G__69434;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__69435 = cljs.core._EQ_;
var expr__69436 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__69435.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__69436))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__69435,expr__69436){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__69435,expr__69436))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__69435,expr__69436){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e69438){if((e69438 instanceof Error)){
var e = e69438;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e69438;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__69435,expr__69436))
} else {
if(cljs.core.truth_(pred__69435.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__69436))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__69435.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__69436))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__69435.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__69436))){
return ((function (pred__69435,expr__69436){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e69439){if((e69439 instanceof Error)){
var e = e69439;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e69439;

}
}})());
});
;})(pred__69435,expr__69436))
} else {
return ((function (pred__69435,expr__69436){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__69435,expr__69436))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__69440,callback){
var map__69441 = p__69440;
var map__69441__$1 = ((((!((map__69441 == null)))?((((map__69441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69441):map__69441);
var file_msg = map__69441__$1;
var request_url = cljs.core.get.call(null,map__69441__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__69441,map__69441__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__69441,map__69441__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__){
return (function (state_69465){
var state_val_69466 = (state_69465[(1)]);
if((state_val_69466 === (7))){
var inst_69461 = (state_69465[(2)]);
var state_69465__$1 = state_69465;
var statearr_69467_69484 = state_69465__$1;
(statearr_69467_69484[(2)] = inst_69461);

(statearr_69467_69484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69466 === (1))){
var state_69465__$1 = state_69465;
var statearr_69468_69485 = state_69465__$1;
(statearr_69468_69485[(2)] = null);

(statearr_69468_69485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69466 === (4))){
var inst_69445 = (state_69465[(7)]);
var inst_69445__$1 = (state_69465[(2)]);
var state_69465__$1 = (function (){var statearr_69469 = state_69465;
(statearr_69469[(7)] = inst_69445__$1);

return statearr_69469;
})();
if(cljs.core.truth_(inst_69445__$1)){
var statearr_69470_69486 = state_69465__$1;
(statearr_69470_69486[(1)] = (5));

} else {
var statearr_69471_69487 = state_69465__$1;
(statearr_69471_69487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69466 === (6))){
var state_69465__$1 = state_69465;
var statearr_69472_69488 = state_69465__$1;
(statearr_69472_69488[(2)] = null);

(statearr_69472_69488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69466 === (3))){
var inst_69463 = (state_69465[(2)]);
var state_69465__$1 = state_69465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69465__$1,inst_69463);
} else {
if((state_val_69466 === (2))){
var state_69465__$1 = state_69465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69465__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_69466 === (11))){
var inst_69457 = (state_69465[(2)]);
var state_69465__$1 = (function (){var statearr_69473 = state_69465;
(statearr_69473[(8)] = inst_69457);

return statearr_69473;
})();
var statearr_69474_69489 = state_69465__$1;
(statearr_69474_69489[(2)] = null);

(statearr_69474_69489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69466 === (9))){
var inst_69449 = (state_69465[(9)]);
var inst_69451 = (state_69465[(10)]);
var inst_69453 = inst_69451.call(null,inst_69449);
var state_69465__$1 = state_69465;
var statearr_69475_69490 = state_69465__$1;
(statearr_69475_69490[(2)] = inst_69453);

(statearr_69475_69490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69466 === (5))){
var inst_69445 = (state_69465[(7)]);
var inst_69447 = figwheel.client.file_reloading.blocking_load.call(null,inst_69445);
var state_69465__$1 = state_69465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69465__$1,(8),inst_69447);
} else {
if((state_val_69466 === (10))){
var inst_69449 = (state_69465[(9)]);
var inst_69455 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_69449);
var state_69465__$1 = state_69465;
var statearr_69476_69491 = state_69465__$1;
(statearr_69476_69491[(2)] = inst_69455);

(statearr_69476_69491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69466 === (8))){
var inst_69445 = (state_69465[(7)]);
var inst_69451 = (state_69465[(10)]);
var inst_69449 = (state_69465[(2)]);
var inst_69450 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_69451__$1 = cljs.core.get.call(null,inst_69450,inst_69445);
var state_69465__$1 = (function (){var statearr_69477 = state_69465;
(statearr_69477[(9)] = inst_69449);

(statearr_69477[(10)] = inst_69451__$1);

return statearr_69477;
})();
if(cljs.core.truth_(inst_69451__$1)){
var statearr_69478_69492 = state_69465__$1;
(statearr_69478_69492[(1)] = (9));

} else {
var statearr_69479_69493 = state_69465__$1;
(statearr_69479_69493[(1)] = (10));

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
});})(c__64983__auto__))
;
return ((function (switch__64893__auto__,c__64983__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__64894__auto__ = null;
var figwheel$client$file_reloading$state_machine__64894__auto____0 = (function (){
var statearr_69480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69480[(0)] = figwheel$client$file_reloading$state_machine__64894__auto__);

(statearr_69480[(1)] = (1));

return statearr_69480;
});
var figwheel$client$file_reloading$state_machine__64894__auto____1 = (function (state_69465){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_69465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e69481){if((e69481 instanceof Object)){
var ex__64897__auto__ = e69481;
var statearr_69482_69494 = state_69465;
(statearr_69482_69494[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69495 = state_69465;
state_69465 = G__69495;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__64894__auto__ = function(state_69465){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__64894__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__64894__auto____1.call(this,state_69465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__64894__auto____0;
figwheel$client$file_reloading$state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__64894__auto____1;
return figwheel$client$file_reloading$state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__))
})();
var state__64985__auto__ = (function (){var statearr_69483 = f__64984__auto__.call(null);
(statearr_69483[(6)] = c__64983__auto__);

return statearr_69483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__))
);

return c__64983__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__69496,callback){
var map__69497 = p__69496;
var map__69497__$1 = ((((!((map__69497 == null)))?((((map__69497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69497):map__69497);
var file_msg = map__69497__$1;
var namespace = cljs.core.get.call(null,map__69497__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__69497,map__69497__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__69497,map__69497__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__69499){
var map__69500 = p__69499;
var map__69500__$1 = ((((!((map__69500 == null)))?((((map__69500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69500):map__69500);
var file_msg = map__69500__$1;
var namespace = cljs.core.get.call(null,map__69500__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__69502){
var map__69503 = p__69502;
var map__69503__$1 = ((((!((map__69503 == null)))?((((map__69503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69503):map__69503);
var file_msg = map__69503__$1;
var namespace = cljs.core.get.call(null,map__69503__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__58149__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__58149__auto__){
var or__58161__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__58161__auto__)){
return or__58161__auto__;
} else {
var or__58161__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__58161__auto____$1)){
return or__58161__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__58149__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__69505,callback){
var map__69506 = p__69505;
var map__69506__$1 = ((((!((map__69506 == null)))?((((map__69506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69506):map__69506);
var file_msg = map__69506__$1;
var request_url = cljs.core.get.call(null,map__69506__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__69506__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__64983__auto___69556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto___69556,out){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto___69556,out){
return (function (state_69541){
var state_val_69542 = (state_69541[(1)]);
if((state_val_69542 === (1))){
var inst_69515 = cljs.core.seq.call(null,files);
var inst_69516 = cljs.core.first.call(null,inst_69515);
var inst_69517 = cljs.core.next.call(null,inst_69515);
var inst_69518 = files;
var state_69541__$1 = (function (){var statearr_69543 = state_69541;
(statearr_69543[(7)] = inst_69516);

(statearr_69543[(8)] = inst_69518);

(statearr_69543[(9)] = inst_69517);

return statearr_69543;
})();
var statearr_69544_69557 = state_69541__$1;
(statearr_69544_69557[(2)] = null);

(statearr_69544_69557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69542 === (2))){
var inst_69518 = (state_69541[(8)]);
var inst_69524 = (state_69541[(10)]);
var inst_69523 = cljs.core.seq.call(null,inst_69518);
var inst_69524__$1 = cljs.core.first.call(null,inst_69523);
var inst_69525 = cljs.core.next.call(null,inst_69523);
var inst_69526 = (inst_69524__$1 == null);
var inst_69527 = cljs.core.not.call(null,inst_69526);
var state_69541__$1 = (function (){var statearr_69545 = state_69541;
(statearr_69545[(10)] = inst_69524__$1);

(statearr_69545[(11)] = inst_69525);

return statearr_69545;
})();
if(inst_69527){
var statearr_69546_69558 = state_69541__$1;
(statearr_69546_69558[(1)] = (4));

} else {
var statearr_69547_69559 = state_69541__$1;
(statearr_69547_69559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69542 === (3))){
var inst_69539 = (state_69541[(2)]);
var state_69541__$1 = state_69541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69541__$1,inst_69539);
} else {
if((state_val_69542 === (4))){
var inst_69524 = (state_69541[(10)]);
var inst_69529 = figwheel.client.file_reloading.reload_js_file.call(null,inst_69524);
var state_69541__$1 = state_69541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69541__$1,(7),inst_69529);
} else {
if((state_val_69542 === (5))){
var inst_69535 = cljs.core.async.close_BANG_.call(null,out);
var state_69541__$1 = state_69541;
var statearr_69548_69560 = state_69541__$1;
(statearr_69548_69560[(2)] = inst_69535);

(statearr_69548_69560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69542 === (6))){
var inst_69537 = (state_69541[(2)]);
var state_69541__$1 = state_69541;
var statearr_69549_69561 = state_69541__$1;
(statearr_69549_69561[(2)] = inst_69537);

(statearr_69549_69561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69542 === (7))){
var inst_69525 = (state_69541[(11)]);
var inst_69531 = (state_69541[(2)]);
var inst_69532 = cljs.core.async.put_BANG_.call(null,out,inst_69531);
var inst_69518 = inst_69525;
var state_69541__$1 = (function (){var statearr_69550 = state_69541;
(statearr_69550[(8)] = inst_69518);

(statearr_69550[(12)] = inst_69532);

return statearr_69550;
})();
var statearr_69551_69562 = state_69541__$1;
(statearr_69551_69562[(2)] = null);

(statearr_69551_69562[(1)] = (2));


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
});})(c__64983__auto___69556,out))
;
return ((function (switch__64893__auto__,c__64983__auto___69556,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto____0 = (function (){
var statearr_69552 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69552[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto__);

(statearr_69552[(1)] = (1));

return statearr_69552;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto____1 = (function (state_69541){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_69541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e69553){if((e69553 instanceof Object)){
var ex__64897__auto__ = e69553;
var statearr_69554_69563 = state_69541;
(statearr_69554_69563[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69564 = state_69541;
state_69541 = G__69564;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto__ = function(state_69541){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto____1.call(this,state_69541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto___69556,out))
})();
var state__64985__auto__ = (function (){var statearr_69555 = f__64984__auto__.call(null);
(statearr_69555[(6)] = c__64983__auto___69556);

return statearr_69555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto___69556,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__69565,opts){
var map__69566 = p__69565;
var map__69566__$1 = ((((!((map__69566 == null)))?((((map__69566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69566):map__69566);
var eval_body = cljs.core.get.call(null,map__69566__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__69566__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__58149__auto__ = eval_body;
if(cljs.core.truth_(and__58149__auto__)){
return typeof eval_body === 'string';
} else {
return and__58149__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e69568){var e = e69568;
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
return (function (p1__69569_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__69569_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__69570){
var vec__69571 = p__69570;
var k = cljs.core.nth.call(null,vec__69571,(0),null);
var v = cljs.core.nth.call(null,vec__69571,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__69574){
var vec__69575 = p__69574;
var k = cljs.core.nth.call(null,vec__69575,(0),null);
var v = cljs.core.nth.call(null,vec__69575,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__69581,p__69582){
var map__69583 = p__69581;
var map__69583__$1 = ((((!((map__69583 == null)))?((((map__69583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69583):map__69583);
var opts = map__69583__$1;
var before_jsload = cljs.core.get.call(null,map__69583__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__69583__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__69583__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__69584 = p__69582;
var map__69584__$1 = ((((!((map__69584 == null)))?((((map__69584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69584):map__69584);
var msg = map__69584__$1;
var files = cljs.core.get.call(null,map__69584__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__69584__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__69584__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__64983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__64984__auto__ = (function (){var switch__64893__auto__ = ((function (c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_69738){
var state_val_69739 = (state_69738[(1)]);
if((state_val_69739 === (7))){
var inst_69599 = (state_69738[(7)]);
var inst_69601 = (state_69738[(8)]);
var inst_69598 = (state_69738[(9)]);
var inst_69600 = (state_69738[(10)]);
var inst_69606 = cljs.core._nth.call(null,inst_69599,inst_69601);
var inst_69607 = figwheel.client.file_reloading.eval_body.call(null,inst_69606,opts);
var inst_69608 = (inst_69601 + (1));
var tmp69740 = inst_69599;
var tmp69741 = inst_69598;
var tmp69742 = inst_69600;
var inst_69598__$1 = tmp69741;
var inst_69599__$1 = tmp69740;
var inst_69600__$1 = tmp69742;
var inst_69601__$1 = inst_69608;
var state_69738__$1 = (function (){var statearr_69743 = state_69738;
(statearr_69743[(7)] = inst_69599__$1);

(statearr_69743[(8)] = inst_69601__$1);

(statearr_69743[(9)] = inst_69598__$1);

(statearr_69743[(10)] = inst_69600__$1);

(statearr_69743[(11)] = inst_69607);

return statearr_69743;
})();
var statearr_69744_69827 = state_69738__$1;
(statearr_69744_69827[(2)] = null);

(statearr_69744_69827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (20))){
var inst_69641 = (state_69738[(12)]);
var inst_69649 = figwheel.client.file_reloading.sort_files.call(null,inst_69641);
var state_69738__$1 = state_69738;
var statearr_69745_69828 = state_69738__$1;
(statearr_69745_69828[(2)] = inst_69649);

(statearr_69745_69828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (27))){
var state_69738__$1 = state_69738;
var statearr_69746_69829 = state_69738__$1;
(statearr_69746_69829[(2)] = null);

(statearr_69746_69829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (1))){
var inst_69590 = (state_69738[(13)]);
var inst_69587 = before_jsload.call(null,files);
var inst_69588 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_69589 = (function (){return ((function (inst_69590,inst_69587,inst_69588,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__69578_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__69578_SHARP_);
});
;})(inst_69590,inst_69587,inst_69588,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69590__$1 = cljs.core.filter.call(null,inst_69589,files);
var inst_69591 = cljs.core.not_empty.call(null,inst_69590__$1);
var state_69738__$1 = (function (){var statearr_69747 = state_69738;
(statearr_69747[(13)] = inst_69590__$1);

(statearr_69747[(14)] = inst_69587);

(statearr_69747[(15)] = inst_69588);

return statearr_69747;
})();
if(cljs.core.truth_(inst_69591)){
var statearr_69748_69830 = state_69738__$1;
(statearr_69748_69830[(1)] = (2));

} else {
var statearr_69749_69831 = state_69738__$1;
(statearr_69749_69831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (24))){
var state_69738__$1 = state_69738;
var statearr_69750_69832 = state_69738__$1;
(statearr_69750_69832[(2)] = null);

(statearr_69750_69832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (39))){
var inst_69691 = (state_69738[(16)]);
var state_69738__$1 = state_69738;
var statearr_69751_69833 = state_69738__$1;
(statearr_69751_69833[(2)] = inst_69691);

(statearr_69751_69833[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (46))){
var inst_69733 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
var statearr_69752_69834 = state_69738__$1;
(statearr_69752_69834[(2)] = inst_69733);

(statearr_69752_69834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (4))){
var inst_69635 = (state_69738[(2)]);
var inst_69636 = cljs.core.List.EMPTY;
var inst_69637 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_69636);
var inst_69638 = (function (){return ((function (inst_69635,inst_69636,inst_69637,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__69579_SHARP_){
var and__58149__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__69579_SHARP_);
if(cljs.core.truth_(and__58149__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__69579_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__69579_SHARP_)));
} else {
return and__58149__auto__;
}
});
;})(inst_69635,inst_69636,inst_69637,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69639 = cljs.core.filter.call(null,inst_69638,files);
var inst_69640 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_69641 = cljs.core.concat.call(null,inst_69639,inst_69640);
var state_69738__$1 = (function (){var statearr_69753 = state_69738;
(statearr_69753[(12)] = inst_69641);

(statearr_69753[(17)] = inst_69637);

(statearr_69753[(18)] = inst_69635);

return statearr_69753;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_69754_69835 = state_69738__$1;
(statearr_69754_69835[(1)] = (16));

} else {
var statearr_69755_69836 = state_69738__$1;
(statearr_69755_69836[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (15))){
var inst_69625 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
var statearr_69756_69837 = state_69738__$1;
(statearr_69756_69837[(2)] = inst_69625);

(statearr_69756_69837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (21))){
var inst_69651 = (state_69738[(19)]);
var inst_69651__$1 = (state_69738[(2)]);
var inst_69652 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_69651__$1);
var state_69738__$1 = (function (){var statearr_69757 = state_69738;
(statearr_69757[(19)] = inst_69651__$1);

return statearr_69757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69738__$1,(22),inst_69652);
} else {
if((state_val_69739 === (31))){
var inst_69736 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69738__$1,inst_69736);
} else {
if((state_val_69739 === (32))){
var inst_69691 = (state_69738[(16)]);
var inst_69696 = inst_69691.cljs$lang$protocol_mask$partition0$;
var inst_69697 = (inst_69696 & (64));
var inst_69698 = inst_69691.cljs$core$ISeq$;
var inst_69699 = (cljs.core.PROTOCOL_SENTINEL === inst_69698);
var inst_69700 = (inst_69697) || (inst_69699);
var state_69738__$1 = state_69738;
if(cljs.core.truth_(inst_69700)){
var statearr_69758_69838 = state_69738__$1;
(statearr_69758_69838[(1)] = (35));

} else {
var statearr_69759_69839 = state_69738__$1;
(statearr_69759_69839[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (40))){
var inst_69713 = (state_69738[(20)]);
var inst_69712 = (state_69738[(2)]);
var inst_69713__$1 = cljs.core.get.call(null,inst_69712,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_69714 = cljs.core.get.call(null,inst_69712,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_69715 = cljs.core.not_empty.call(null,inst_69713__$1);
var state_69738__$1 = (function (){var statearr_69760 = state_69738;
(statearr_69760[(21)] = inst_69714);

(statearr_69760[(20)] = inst_69713__$1);

return statearr_69760;
})();
if(cljs.core.truth_(inst_69715)){
var statearr_69761_69840 = state_69738__$1;
(statearr_69761_69840[(1)] = (41));

} else {
var statearr_69762_69841 = state_69738__$1;
(statearr_69762_69841[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (33))){
var state_69738__$1 = state_69738;
var statearr_69763_69842 = state_69738__$1;
(statearr_69763_69842[(2)] = false);

(statearr_69763_69842[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (13))){
var inst_69611 = (state_69738[(22)]);
var inst_69615 = cljs.core.chunk_first.call(null,inst_69611);
var inst_69616 = cljs.core.chunk_rest.call(null,inst_69611);
var inst_69617 = cljs.core.count.call(null,inst_69615);
var inst_69598 = inst_69616;
var inst_69599 = inst_69615;
var inst_69600 = inst_69617;
var inst_69601 = (0);
var state_69738__$1 = (function (){var statearr_69764 = state_69738;
(statearr_69764[(7)] = inst_69599);

(statearr_69764[(8)] = inst_69601);

(statearr_69764[(9)] = inst_69598);

(statearr_69764[(10)] = inst_69600);

return statearr_69764;
})();
var statearr_69765_69843 = state_69738__$1;
(statearr_69765_69843[(2)] = null);

(statearr_69765_69843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (22))){
var inst_69659 = (state_69738[(23)]);
var inst_69651 = (state_69738[(19)]);
var inst_69655 = (state_69738[(24)]);
var inst_69654 = (state_69738[(25)]);
var inst_69654__$1 = (state_69738[(2)]);
var inst_69655__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_69654__$1);
var inst_69656 = (function (){var all_files = inst_69651;
var res_SINGLEQUOTE_ = inst_69654__$1;
var res = inst_69655__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_69659,inst_69651,inst_69655,inst_69654,inst_69654__$1,inst_69655__$1,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__69580_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__69580_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_69659,inst_69651,inst_69655,inst_69654,inst_69654__$1,inst_69655__$1,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69657 = cljs.core.filter.call(null,inst_69656,inst_69654__$1);
var inst_69658 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_69659__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_69658);
var inst_69660 = cljs.core.not_empty.call(null,inst_69659__$1);
var state_69738__$1 = (function (){var statearr_69766 = state_69738;
(statearr_69766[(23)] = inst_69659__$1);

(statearr_69766[(24)] = inst_69655__$1);

(statearr_69766[(26)] = inst_69657);

(statearr_69766[(25)] = inst_69654__$1);

return statearr_69766;
})();
if(cljs.core.truth_(inst_69660)){
var statearr_69767_69844 = state_69738__$1;
(statearr_69767_69844[(1)] = (23));

} else {
var statearr_69768_69845 = state_69738__$1;
(statearr_69768_69845[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (36))){
var state_69738__$1 = state_69738;
var statearr_69769_69846 = state_69738__$1;
(statearr_69769_69846[(2)] = false);

(statearr_69769_69846[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (41))){
var inst_69713 = (state_69738[(20)]);
var inst_69717 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_69718 = cljs.core.map.call(null,inst_69717,inst_69713);
var inst_69719 = cljs.core.pr_str.call(null,inst_69718);
var inst_69720 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69719)].join('');
var inst_69721 = figwheel.client.utils.log.call(null,inst_69720);
var state_69738__$1 = state_69738;
var statearr_69770_69847 = state_69738__$1;
(statearr_69770_69847[(2)] = inst_69721);

(statearr_69770_69847[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (43))){
var inst_69714 = (state_69738[(21)]);
var inst_69724 = (state_69738[(2)]);
var inst_69725 = cljs.core.not_empty.call(null,inst_69714);
var state_69738__$1 = (function (){var statearr_69771 = state_69738;
(statearr_69771[(27)] = inst_69724);

return statearr_69771;
})();
if(cljs.core.truth_(inst_69725)){
var statearr_69772_69848 = state_69738__$1;
(statearr_69772_69848[(1)] = (44));

} else {
var statearr_69773_69849 = state_69738__$1;
(statearr_69773_69849[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (29))){
var inst_69691 = (state_69738[(16)]);
var inst_69659 = (state_69738[(23)]);
var inst_69651 = (state_69738[(19)]);
var inst_69655 = (state_69738[(24)]);
var inst_69657 = (state_69738[(26)]);
var inst_69654 = (state_69738[(25)]);
var inst_69687 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_69690 = (function (){var all_files = inst_69651;
var res_SINGLEQUOTE_ = inst_69654;
var res = inst_69655;
var files_not_loaded = inst_69657;
var dependencies_that_loaded = inst_69659;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69691,inst_69659,inst_69651,inst_69655,inst_69657,inst_69654,inst_69687,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__69689){
var map__69774 = p__69689;
var map__69774__$1 = ((((!((map__69774 == null)))?((((map__69774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69774):map__69774);
var namespace = cljs.core.get.call(null,map__69774__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69691,inst_69659,inst_69651,inst_69655,inst_69657,inst_69654,inst_69687,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69691__$1 = cljs.core.group_by.call(null,inst_69690,inst_69657);
var inst_69693 = (inst_69691__$1 == null);
var inst_69694 = cljs.core.not.call(null,inst_69693);
var state_69738__$1 = (function (){var statearr_69776 = state_69738;
(statearr_69776[(16)] = inst_69691__$1);

(statearr_69776[(28)] = inst_69687);

return statearr_69776;
})();
if(inst_69694){
var statearr_69777_69850 = state_69738__$1;
(statearr_69777_69850[(1)] = (32));

} else {
var statearr_69778_69851 = state_69738__$1;
(statearr_69778_69851[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (44))){
var inst_69714 = (state_69738[(21)]);
var inst_69727 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_69714);
var inst_69728 = cljs.core.pr_str.call(null,inst_69727);
var inst_69729 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69728)].join('');
var inst_69730 = figwheel.client.utils.log.call(null,inst_69729);
var state_69738__$1 = state_69738;
var statearr_69779_69852 = state_69738__$1;
(statearr_69779_69852[(2)] = inst_69730);

(statearr_69779_69852[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (6))){
var inst_69632 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
var statearr_69780_69853 = state_69738__$1;
(statearr_69780_69853[(2)] = inst_69632);

(statearr_69780_69853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (28))){
var inst_69657 = (state_69738[(26)]);
var inst_69684 = (state_69738[(2)]);
var inst_69685 = cljs.core.not_empty.call(null,inst_69657);
var state_69738__$1 = (function (){var statearr_69781 = state_69738;
(statearr_69781[(29)] = inst_69684);

return statearr_69781;
})();
if(cljs.core.truth_(inst_69685)){
var statearr_69782_69854 = state_69738__$1;
(statearr_69782_69854[(1)] = (29));

} else {
var statearr_69783_69855 = state_69738__$1;
(statearr_69783_69855[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (25))){
var inst_69655 = (state_69738[(24)]);
var inst_69671 = (state_69738[(2)]);
var inst_69672 = cljs.core.not_empty.call(null,inst_69655);
var state_69738__$1 = (function (){var statearr_69784 = state_69738;
(statearr_69784[(30)] = inst_69671);

return statearr_69784;
})();
if(cljs.core.truth_(inst_69672)){
var statearr_69785_69856 = state_69738__$1;
(statearr_69785_69856[(1)] = (26));

} else {
var statearr_69786_69857 = state_69738__$1;
(statearr_69786_69857[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (34))){
var inst_69707 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
if(cljs.core.truth_(inst_69707)){
var statearr_69787_69858 = state_69738__$1;
(statearr_69787_69858[(1)] = (38));

} else {
var statearr_69788_69859 = state_69738__$1;
(statearr_69788_69859[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (17))){
var state_69738__$1 = state_69738;
var statearr_69789_69860 = state_69738__$1;
(statearr_69789_69860[(2)] = recompile_dependents);

(statearr_69789_69860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (3))){
var state_69738__$1 = state_69738;
var statearr_69790_69861 = state_69738__$1;
(statearr_69790_69861[(2)] = null);

(statearr_69790_69861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (12))){
var inst_69628 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
var statearr_69791_69862 = state_69738__$1;
(statearr_69791_69862[(2)] = inst_69628);

(statearr_69791_69862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (2))){
var inst_69590 = (state_69738[(13)]);
var inst_69597 = cljs.core.seq.call(null,inst_69590);
var inst_69598 = inst_69597;
var inst_69599 = null;
var inst_69600 = (0);
var inst_69601 = (0);
var state_69738__$1 = (function (){var statearr_69792 = state_69738;
(statearr_69792[(7)] = inst_69599);

(statearr_69792[(8)] = inst_69601);

(statearr_69792[(9)] = inst_69598);

(statearr_69792[(10)] = inst_69600);

return statearr_69792;
})();
var statearr_69793_69863 = state_69738__$1;
(statearr_69793_69863[(2)] = null);

(statearr_69793_69863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (23))){
var inst_69659 = (state_69738[(23)]);
var inst_69651 = (state_69738[(19)]);
var inst_69655 = (state_69738[(24)]);
var inst_69657 = (state_69738[(26)]);
var inst_69654 = (state_69738[(25)]);
var inst_69662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_69664 = (function (){var all_files = inst_69651;
var res_SINGLEQUOTE_ = inst_69654;
var res = inst_69655;
var files_not_loaded = inst_69657;
var dependencies_that_loaded = inst_69659;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69659,inst_69651,inst_69655,inst_69657,inst_69654,inst_69662,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__69663){
var map__69794 = p__69663;
var map__69794__$1 = ((((!((map__69794 == null)))?((((map__69794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69794):map__69794);
var request_url = cljs.core.get.call(null,map__69794__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69659,inst_69651,inst_69655,inst_69657,inst_69654,inst_69662,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69665 = cljs.core.reverse.call(null,inst_69659);
var inst_69666 = cljs.core.map.call(null,inst_69664,inst_69665);
var inst_69667 = cljs.core.pr_str.call(null,inst_69666);
var inst_69668 = figwheel.client.utils.log.call(null,inst_69667);
var state_69738__$1 = (function (){var statearr_69796 = state_69738;
(statearr_69796[(31)] = inst_69662);

return statearr_69796;
})();
var statearr_69797_69864 = state_69738__$1;
(statearr_69797_69864[(2)] = inst_69668);

(statearr_69797_69864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (35))){
var state_69738__$1 = state_69738;
var statearr_69798_69865 = state_69738__$1;
(statearr_69798_69865[(2)] = true);

(statearr_69798_69865[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (19))){
var inst_69641 = (state_69738[(12)]);
var inst_69647 = figwheel.client.file_reloading.expand_files.call(null,inst_69641);
var state_69738__$1 = state_69738;
var statearr_69799_69866 = state_69738__$1;
(statearr_69799_69866[(2)] = inst_69647);

(statearr_69799_69866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (11))){
var state_69738__$1 = state_69738;
var statearr_69800_69867 = state_69738__$1;
(statearr_69800_69867[(2)] = null);

(statearr_69800_69867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (9))){
var inst_69630 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
var statearr_69801_69868 = state_69738__$1;
(statearr_69801_69868[(2)] = inst_69630);

(statearr_69801_69868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (5))){
var inst_69601 = (state_69738[(8)]);
var inst_69600 = (state_69738[(10)]);
var inst_69603 = (inst_69601 < inst_69600);
var inst_69604 = inst_69603;
var state_69738__$1 = state_69738;
if(cljs.core.truth_(inst_69604)){
var statearr_69802_69869 = state_69738__$1;
(statearr_69802_69869[(1)] = (7));

} else {
var statearr_69803_69870 = state_69738__$1;
(statearr_69803_69870[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (14))){
var inst_69611 = (state_69738[(22)]);
var inst_69620 = cljs.core.first.call(null,inst_69611);
var inst_69621 = figwheel.client.file_reloading.eval_body.call(null,inst_69620,opts);
var inst_69622 = cljs.core.next.call(null,inst_69611);
var inst_69598 = inst_69622;
var inst_69599 = null;
var inst_69600 = (0);
var inst_69601 = (0);
var state_69738__$1 = (function (){var statearr_69804 = state_69738;
(statearr_69804[(7)] = inst_69599);

(statearr_69804[(8)] = inst_69601);

(statearr_69804[(9)] = inst_69598);

(statearr_69804[(10)] = inst_69600);

(statearr_69804[(32)] = inst_69621);

return statearr_69804;
})();
var statearr_69805_69871 = state_69738__$1;
(statearr_69805_69871[(2)] = null);

(statearr_69805_69871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (45))){
var state_69738__$1 = state_69738;
var statearr_69806_69872 = state_69738__$1;
(statearr_69806_69872[(2)] = null);

(statearr_69806_69872[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (26))){
var inst_69659 = (state_69738[(23)]);
var inst_69651 = (state_69738[(19)]);
var inst_69655 = (state_69738[(24)]);
var inst_69657 = (state_69738[(26)]);
var inst_69654 = (state_69738[(25)]);
var inst_69674 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_69676 = (function (){var all_files = inst_69651;
var res_SINGLEQUOTE_ = inst_69654;
var res = inst_69655;
var files_not_loaded = inst_69657;
var dependencies_that_loaded = inst_69659;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69659,inst_69651,inst_69655,inst_69657,inst_69654,inst_69674,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__69675){
var map__69807 = p__69675;
var map__69807__$1 = ((((!((map__69807 == null)))?((((map__69807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69807):map__69807);
var namespace = cljs.core.get.call(null,map__69807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__69807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69659,inst_69651,inst_69655,inst_69657,inst_69654,inst_69674,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69677 = cljs.core.map.call(null,inst_69676,inst_69655);
var inst_69678 = cljs.core.pr_str.call(null,inst_69677);
var inst_69679 = figwheel.client.utils.log.call(null,inst_69678);
var inst_69680 = (function (){var all_files = inst_69651;
var res_SINGLEQUOTE_ = inst_69654;
var res = inst_69655;
var files_not_loaded = inst_69657;
var dependencies_that_loaded = inst_69659;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69659,inst_69651,inst_69655,inst_69657,inst_69654,inst_69674,inst_69676,inst_69677,inst_69678,inst_69679,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69659,inst_69651,inst_69655,inst_69657,inst_69654,inst_69674,inst_69676,inst_69677,inst_69678,inst_69679,state_val_69739,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69681 = setTimeout(inst_69680,(10));
var state_69738__$1 = (function (){var statearr_69809 = state_69738;
(statearr_69809[(33)] = inst_69674);

(statearr_69809[(34)] = inst_69679);

return statearr_69809;
})();
var statearr_69810_69873 = state_69738__$1;
(statearr_69810_69873[(2)] = inst_69681);

(statearr_69810_69873[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (16))){
var state_69738__$1 = state_69738;
var statearr_69811_69874 = state_69738__$1;
(statearr_69811_69874[(2)] = reload_dependents);

(statearr_69811_69874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (38))){
var inst_69691 = (state_69738[(16)]);
var inst_69709 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69691);
var state_69738__$1 = state_69738;
var statearr_69812_69875 = state_69738__$1;
(statearr_69812_69875[(2)] = inst_69709);

(statearr_69812_69875[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (30))){
var state_69738__$1 = state_69738;
var statearr_69813_69876 = state_69738__$1;
(statearr_69813_69876[(2)] = null);

(statearr_69813_69876[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (10))){
var inst_69611 = (state_69738[(22)]);
var inst_69613 = cljs.core.chunked_seq_QMARK_.call(null,inst_69611);
var state_69738__$1 = state_69738;
if(inst_69613){
var statearr_69814_69877 = state_69738__$1;
(statearr_69814_69877[(1)] = (13));

} else {
var statearr_69815_69878 = state_69738__$1;
(statearr_69815_69878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (18))){
var inst_69645 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
if(cljs.core.truth_(inst_69645)){
var statearr_69816_69879 = state_69738__$1;
(statearr_69816_69879[(1)] = (19));

} else {
var statearr_69817_69880 = state_69738__$1;
(statearr_69817_69880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (42))){
var state_69738__$1 = state_69738;
var statearr_69818_69881 = state_69738__$1;
(statearr_69818_69881[(2)] = null);

(statearr_69818_69881[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (37))){
var inst_69704 = (state_69738[(2)]);
var state_69738__$1 = state_69738;
var statearr_69819_69882 = state_69738__$1;
(statearr_69819_69882[(2)] = inst_69704);

(statearr_69819_69882[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69739 === (8))){
var inst_69611 = (state_69738[(22)]);
var inst_69598 = (state_69738[(9)]);
var inst_69611__$1 = cljs.core.seq.call(null,inst_69598);
var state_69738__$1 = (function (){var statearr_69820 = state_69738;
(statearr_69820[(22)] = inst_69611__$1);

return statearr_69820;
})();
if(inst_69611__$1){
var statearr_69821_69883 = state_69738__$1;
(statearr_69821_69883[(1)] = (10));

} else {
var statearr_69822_69884 = state_69738__$1;
(statearr_69822_69884[(1)] = (11));

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
});})(c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__64893__auto__,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto____0 = (function (){
var statearr_69823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69823[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto__);

(statearr_69823[(1)] = (1));

return statearr_69823;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto____1 = (function (state_69738){
while(true){
var ret_value__64895__auto__ = (function (){try{while(true){
var result__64896__auto__ = switch__64893__auto__.call(null,state_69738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__64896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64896__auto__;
}
break;
}
}catch (e69824){if((e69824 instanceof Object)){
var ex__64897__auto__ = e69824;
var statearr_69825_69885 = state_69738;
(statearr_69825_69885[(5)] = ex__64897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__64895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69886 = state_69738;
state_69738 = G__69886;
continue;
} else {
return ret_value__64895__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto__ = function(state_69738){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto____1.call(this,state_69738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__64894__auto__;
})()
;})(switch__64893__auto__,c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__64985__auto__ = (function (){var statearr_69826 = f__64984__auto__.call(null);
(statearr_69826[(6)] = c__64983__auto__);

return statearr_69826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__64985__auto__);
});})(c__64983__auto__,map__69583,map__69583__$1,opts,before_jsload,on_jsload,reload_dependents,map__69584,map__69584__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__64983__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__69889,link){
var map__69890 = p__69889;
var map__69890__$1 = ((((!((map__69890 == null)))?((((map__69890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69890):map__69890);
var file = cljs.core.get.call(null,map__69890__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__69890,map__69890__$1,file){
return (function (p1__69887_SHARP_,p2__69888_SHARP_){
if(cljs.core._EQ_.call(null,p1__69887_SHARP_,p2__69888_SHARP_)){
return p1__69887_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__69890,map__69890__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__69893){
var map__69894 = p__69893;
var map__69894__$1 = ((((!((map__69894 == null)))?((((map__69894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69894):map__69894);
var match_length = cljs.core.get.call(null,map__69894__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__69894__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__69892_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__69892_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__69896_SHARP_,p2__69897_SHARP_){
return cljs.core.assoc.call(null,p1__69896_SHARP_,cljs.core.get.call(null,p2__69897_SHARP_,key),p2__69897_SHARP_);
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
var loaded_f_datas_69898 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_69898);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_69898);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__69899,p__69900){
var map__69901 = p__69899;
var map__69901__$1 = ((((!((map__69901 == null)))?((((map__69901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69901):map__69901);
var on_cssload = cljs.core.get.call(null,map__69901__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__69902 = p__69900;
var map__69902__$1 = ((((!((map__69902 == null)))?((((map__69902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69902):map__69902);
var files_msg = map__69902__$1;
var files = cljs.core.get.call(null,map__69902__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1505406790749
