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
var or__64417__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__64417__auto__){
return or__64417__auto__;
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
var or__64417__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
var or__64417__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__64417__auto____$1)){
return or__64417__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__76470_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__76470_SHARP_));
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
var seq__76471 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__76472 = null;
var count__76473 = (0);
var i__76474 = (0);
while(true){
if((i__76474 < count__76473)){
var n = cljs.core._nth.call(null,chunk__76472,i__76474);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__76475 = seq__76471;
var G__76476 = chunk__76472;
var G__76477 = count__76473;
var G__76478 = (i__76474 + (1));
seq__76471 = G__76475;
chunk__76472 = G__76476;
count__76473 = G__76477;
i__76474 = G__76478;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__76471);
if(temp__6738__auto__){
var seq__76471__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76471__$1)){
var c__65348__auto__ = cljs.core.chunk_first.call(null,seq__76471__$1);
var G__76479 = cljs.core.chunk_rest.call(null,seq__76471__$1);
var G__76480 = c__65348__auto__;
var G__76481 = cljs.core.count.call(null,c__65348__auto__);
var G__76482 = (0);
seq__76471 = G__76479;
chunk__76472 = G__76480;
count__76473 = G__76481;
i__76474 = G__76482;
continue;
} else {
var n = cljs.core.first.call(null,seq__76471__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__76483 = cljs.core.next.call(null,seq__76471__$1);
var G__76484 = null;
var G__76485 = (0);
var G__76486 = (0);
seq__76471 = G__76483;
chunk__76472 = G__76484;
count__76473 = G__76485;
i__76474 = G__76486;
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

var seq__76496_76504 = cljs.core.seq.call(null,deps);
var chunk__76497_76505 = null;
var count__76498_76506 = (0);
var i__76499_76507 = (0);
while(true){
if((i__76499_76507 < count__76498_76506)){
var dep_76508 = cljs.core._nth.call(null,chunk__76497_76505,i__76499_76507);
topo_sort_helper_STAR_.call(null,dep_76508,(depth + (1)),state);

var G__76509 = seq__76496_76504;
var G__76510 = chunk__76497_76505;
var G__76511 = count__76498_76506;
var G__76512 = (i__76499_76507 + (1));
seq__76496_76504 = G__76509;
chunk__76497_76505 = G__76510;
count__76498_76506 = G__76511;
i__76499_76507 = G__76512;
continue;
} else {
var temp__6738__auto___76513 = cljs.core.seq.call(null,seq__76496_76504);
if(temp__6738__auto___76513){
var seq__76496_76514__$1 = temp__6738__auto___76513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76496_76514__$1)){
var c__65348__auto___76515 = cljs.core.chunk_first.call(null,seq__76496_76514__$1);
var G__76516 = cljs.core.chunk_rest.call(null,seq__76496_76514__$1);
var G__76517 = c__65348__auto___76515;
var G__76518 = cljs.core.count.call(null,c__65348__auto___76515);
var G__76519 = (0);
seq__76496_76504 = G__76516;
chunk__76497_76505 = G__76517;
count__76498_76506 = G__76518;
i__76499_76507 = G__76519;
continue;
} else {
var dep_76520 = cljs.core.first.call(null,seq__76496_76514__$1);
topo_sort_helper_STAR_.call(null,dep_76520,(depth + (1)),state);

var G__76521 = cljs.core.next.call(null,seq__76496_76514__$1);
var G__76522 = null;
var G__76523 = (0);
var G__76524 = (0);
seq__76496_76504 = G__76521;
chunk__76497_76505 = G__76522;
count__76498_76506 = G__76523;
i__76499_76507 = G__76524;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__76500){
var vec__76501 = p__76500;
var seq__76502 = cljs.core.seq.call(null,vec__76501);
var first__76503 = cljs.core.first.call(null,seq__76502);
var seq__76502__$1 = cljs.core.next.call(null,seq__76502);
var x = first__76503;
var xs = seq__76502__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__76501,seq__76502,first__76503,seq__76502__$1,x,xs,get_deps__$1){
return (function (p1__76487_SHARP_){
return clojure.set.difference.call(null,p1__76487_SHARP_,x);
});})(vec__76501,seq__76502,first__76503,seq__76502__$1,x,xs,get_deps__$1))
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
var seq__76525 = cljs.core.seq.call(null,provides);
var chunk__76526 = null;
var count__76527 = (0);
var i__76528 = (0);
while(true){
if((i__76528 < count__76527)){
var prov = cljs.core._nth.call(null,chunk__76526,i__76528);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__76529_76537 = cljs.core.seq.call(null,requires);
var chunk__76530_76538 = null;
var count__76531_76539 = (0);
var i__76532_76540 = (0);
while(true){
if((i__76532_76540 < count__76531_76539)){
var req_76541 = cljs.core._nth.call(null,chunk__76530_76538,i__76532_76540);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_76541,prov);

var G__76542 = seq__76529_76537;
var G__76543 = chunk__76530_76538;
var G__76544 = count__76531_76539;
var G__76545 = (i__76532_76540 + (1));
seq__76529_76537 = G__76542;
chunk__76530_76538 = G__76543;
count__76531_76539 = G__76544;
i__76532_76540 = G__76545;
continue;
} else {
var temp__6738__auto___76546 = cljs.core.seq.call(null,seq__76529_76537);
if(temp__6738__auto___76546){
var seq__76529_76547__$1 = temp__6738__auto___76546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76529_76547__$1)){
var c__65348__auto___76548 = cljs.core.chunk_first.call(null,seq__76529_76547__$1);
var G__76549 = cljs.core.chunk_rest.call(null,seq__76529_76547__$1);
var G__76550 = c__65348__auto___76548;
var G__76551 = cljs.core.count.call(null,c__65348__auto___76548);
var G__76552 = (0);
seq__76529_76537 = G__76549;
chunk__76530_76538 = G__76550;
count__76531_76539 = G__76551;
i__76532_76540 = G__76552;
continue;
} else {
var req_76553 = cljs.core.first.call(null,seq__76529_76547__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_76553,prov);

var G__76554 = cljs.core.next.call(null,seq__76529_76547__$1);
var G__76555 = null;
var G__76556 = (0);
var G__76557 = (0);
seq__76529_76537 = G__76554;
chunk__76530_76538 = G__76555;
count__76531_76539 = G__76556;
i__76532_76540 = G__76557;
continue;
}
} else {
}
}
break;
}

var G__76558 = seq__76525;
var G__76559 = chunk__76526;
var G__76560 = count__76527;
var G__76561 = (i__76528 + (1));
seq__76525 = G__76558;
chunk__76526 = G__76559;
count__76527 = G__76560;
i__76528 = G__76561;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__76525);
if(temp__6738__auto__){
var seq__76525__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76525__$1)){
var c__65348__auto__ = cljs.core.chunk_first.call(null,seq__76525__$1);
var G__76562 = cljs.core.chunk_rest.call(null,seq__76525__$1);
var G__76563 = c__65348__auto__;
var G__76564 = cljs.core.count.call(null,c__65348__auto__);
var G__76565 = (0);
seq__76525 = G__76562;
chunk__76526 = G__76563;
count__76527 = G__76564;
i__76528 = G__76565;
continue;
} else {
var prov = cljs.core.first.call(null,seq__76525__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__76533_76566 = cljs.core.seq.call(null,requires);
var chunk__76534_76567 = null;
var count__76535_76568 = (0);
var i__76536_76569 = (0);
while(true){
if((i__76536_76569 < count__76535_76568)){
var req_76570 = cljs.core._nth.call(null,chunk__76534_76567,i__76536_76569);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_76570,prov);

var G__76571 = seq__76533_76566;
var G__76572 = chunk__76534_76567;
var G__76573 = count__76535_76568;
var G__76574 = (i__76536_76569 + (1));
seq__76533_76566 = G__76571;
chunk__76534_76567 = G__76572;
count__76535_76568 = G__76573;
i__76536_76569 = G__76574;
continue;
} else {
var temp__6738__auto___76575__$1 = cljs.core.seq.call(null,seq__76533_76566);
if(temp__6738__auto___76575__$1){
var seq__76533_76576__$1 = temp__6738__auto___76575__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76533_76576__$1)){
var c__65348__auto___76577 = cljs.core.chunk_first.call(null,seq__76533_76576__$1);
var G__76578 = cljs.core.chunk_rest.call(null,seq__76533_76576__$1);
var G__76579 = c__65348__auto___76577;
var G__76580 = cljs.core.count.call(null,c__65348__auto___76577);
var G__76581 = (0);
seq__76533_76566 = G__76578;
chunk__76534_76567 = G__76579;
count__76535_76568 = G__76580;
i__76536_76569 = G__76581;
continue;
} else {
var req_76582 = cljs.core.first.call(null,seq__76533_76576__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_76582,prov);

var G__76583 = cljs.core.next.call(null,seq__76533_76576__$1);
var G__76584 = null;
var G__76585 = (0);
var G__76586 = (0);
seq__76533_76566 = G__76583;
chunk__76534_76567 = G__76584;
count__76535_76568 = G__76585;
i__76536_76569 = G__76586;
continue;
}
} else {
}
}
break;
}

var G__76587 = cljs.core.next.call(null,seq__76525__$1);
var G__76588 = null;
var G__76589 = (0);
var G__76590 = (0);
seq__76525 = G__76587;
chunk__76526 = G__76588;
count__76527 = G__76589;
i__76528 = G__76590;
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
var seq__76591_76595 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__76592_76596 = null;
var count__76593_76597 = (0);
var i__76594_76598 = (0);
while(true){
if((i__76594_76598 < count__76593_76597)){
var ns_76599 = cljs.core._nth.call(null,chunk__76592_76596,i__76594_76598);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_76599);

var G__76600 = seq__76591_76595;
var G__76601 = chunk__76592_76596;
var G__76602 = count__76593_76597;
var G__76603 = (i__76594_76598 + (1));
seq__76591_76595 = G__76600;
chunk__76592_76596 = G__76601;
count__76593_76597 = G__76602;
i__76594_76598 = G__76603;
continue;
} else {
var temp__6738__auto___76604 = cljs.core.seq.call(null,seq__76591_76595);
if(temp__6738__auto___76604){
var seq__76591_76605__$1 = temp__6738__auto___76604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76591_76605__$1)){
var c__65348__auto___76606 = cljs.core.chunk_first.call(null,seq__76591_76605__$1);
var G__76607 = cljs.core.chunk_rest.call(null,seq__76591_76605__$1);
var G__76608 = c__65348__auto___76606;
var G__76609 = cljs.core.count.call(null,c__65348__auto___76606);
var G__76610 = (0);
seq__76591_76595 = G__76607;
chunk__76592_76596 = G__76608;
count__76593_76597 = G__76609;
i__76594_76598 = G__76610;
continue;
} else {
var ns_76611 = cljs.core.first.call(null,seq__76591_76605__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_76611);

var G__76612 = cljs.core.next.call(null,seq__76591_76605__$1);
var G__76613 = null;
var G__76614 = (0);
var G__76615 = (0);
seq__76591_76595 = G__76612;
chunk__76592_76596 = G__76613;
count__76593_76597 = G__76614;
i__76594_76598 = G__76615;
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
goog.require_figwheel_backup_ = (function (){var or__64417__auto__ = goog.require__;
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
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
var G__76616__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__76616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76617__i = 0, G__76617__a = new Array(arguments.length -  0);
while (G__76617__i < G__76617__a.length) {G__76617__a[G__76617__i] = arguments[G__76617__i + 0]; ++G__76617__i;}
  args = new cljs.core.IndexedSeq(G__76617__a,0,null);
} 
return G__76616__delegate.call(this,args);};
G__76616.cljs$lang$maxFixedArity = 0;
G__76616.cljs$lang$applyTo = (function (arglist__76618){
var args = cljs.core.seq(arglist__76618);
return G__76616__delegate(args);
});
G__76616.cljs$core$IFn$_invoke$arity$variadic = G__76616__delegate;
return G__76616;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__76619_SHARP_,p2__76620_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76619_SHARP_)].join('')),p2__76620_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__76621_SHARP_,p2__76622_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76621_SHARP_)].join(''),p2__76622_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__76623 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__76623.addCallback(((function (G__76623){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__76623))
);

G__76623.addErrback(((function (G__76623){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__76623))
);

return G__76623;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__76624 = cljs.core._EQ_;
var expr__76625 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__76624.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__76625))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__76624,expr__76625){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__76624,expr__76625))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__76624,expr__76625){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e76627){if((e76627 instanceof Error)){
var e = e76627;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e76627;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__76624,expr__76625))
} else {
if(cljs.core.truth_(pred__76624.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__76625))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__76624.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__76625))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__76624.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__76625))){
return ((function (pred__76624,expr__76625){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e76628){if((e76628 instanceof Error)){
var e = e76628;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e76628;

}
}})());
});
;})(pred__76624,expr__76625))
} else {
return ((function (pred__76624,expr__76625){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__76624,expr__76625))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__76629,callback){
var map__76630 = p__76629;
var map__76630__$1 = ((((!((map__76630 == null)))?((((map__76630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76630):map__76630);
var file_msg = map__76630__$1;
var request_url = cljs.core.get.call(null,map__76630__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__76630,map__76630__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__76630,map__76630__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__){
return (function (state_76654){
var state_val_76655 = (state_76654[(1)]);
if((state_val_76655 === (7))){
var inst_76650 = (state_76654[(2)]);
var state_76654__$1 = state_76654;
var statearr_76656_76673 = state_76654__$1;
(statearr_76656_76673[(2)] = inst_76650);

(statearr_76656_76673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76655 === (1))){
var state_76654__$1 = state_76654;
var statearr_76657_76674 = state_76654__$1;
(statearr_76657_76674[(2)] = null);

(statearr_76657_76674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76655 === (4))){
var inst_76634 = (state_76654[(7)]);
var inst_76634__$1 = (state_76654[(2)]);
var state_76654__$1 = (function (){var statearr_76658 = state_76654;
(statearr_76658[(7)] = inst_76634__$1);

return statearr_76658;
})();
if(cljs.core.truth_(inst_76634__$1)){
var statearr_76659_76675 = state_76654__$1;
(statearr_76659_76675[(1)] = (5));

} else {
var statearr_76660_76676 = state_76654__$1;
(statearr_76660_76676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76655 === (6))){
var state_76654__$1 = state_76654;
var statearr_76661_76677 = state_76654__$1;
(statearr_76661_76677[(2)] = null);

(statearr_76661_76677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76655 === (3))){
var inst_76652 = (state_76654[(2)]);
var state_76654__$1 = state_76654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76654__$1,inst_76652);
} else {
if((state_val_76655 === (2))){
var state_76654__$1 = state_76654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76654__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_76655 === (11))){
var inst_76646 = (state_76654[(2)]);
var state_76654__$1 = (function (){var statearr_76662 = state_76654;
(statearr_76662[(8)] = inst_76646);

return statearr_76662;
})();
var statearr_76663_76678 = state_76654__$1;
(statearr_76663_76678[(2)] = null);

(statearr_76663_76678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76655 === (9))){
var inst_76640 = (state_76654[(9)]);
var inst_76638 = (state_76654[(10)]);
var inst_76642 = inst_76640.call(null,inst_76638);
var state_76654__$1 = state_76654;
var statearr_76664_76679 = state_76654__$1;
(statearr_76664_76679[(2)] = inst_76642);

(statearr_76664_76679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76655 === (5))){
var inst_76634 = (state_76654[(7)]);
var inst_76636 = figwheel.client.file_reloading.blocking_load.call(null,inst_76634);
var state_76654__$1 = state_76654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76654__$1,(8),inst_76636);
} else {
if((state_val_76655 === (10))){
var inst_76638 = (state_76654[(10)]);
var inst_76644 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_76638);
var state_76654__$1 = state_76654;
var statearr_76665_76680 = state_76654__$1;
(statearr_76665_76680[(2)] = inst_76644);

(statearr_76665_76680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76655 === (8))){
var inst_76640 = (state_76654[(9)]);
var inst_76634 = (state_76654[(7)]);
var inst_76638 = (state_76654[(2)]);
var inst_76639 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_76640__$1 = cljs.core.get.call(null,inst_76639,inst_76634);
var state_76654__$1 = (function (){var statearr_76666 = state_76654;
(statearr_76666[(9)] = inst_76640__$1);

(statearr_76666[(10)] = inst_76638);

return statearr_76666;
})();
if(cljs.core.truth_(inst_76640__$1)){
var statearr_76667_76681 = state_76654__$1;
(statearr_76667_76681[(1)] = (9));

} else {
var statearr_76668_76682 = state_76654__$1;
(statearr_76668_76682[(1)] = (10));

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
});})(c__69495__auto__))
;
return ((function (switch__69405__auto__,c__69495__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__69406__auto__ = null;
var figwheel$client$file_reloading$state_machine__69406__auto____0 = (function (){
var statearr_76669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76669[(0)] = figwheel$client$file_reloading$state_machine__69406__auto__);

(statearr_76669[(1)] = (1));

return statearr_76669;
});
var figwheel$client$file_reloading$state_machine__69406__auto____1 = (function (state_76654){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_76654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e76670){if((e76670 instanceof Object)){
var ex__69409__auto__ = e76670;
var statearr_76671_76683 = state_76654;
(statearr_76671_76683[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76684 = state_76654;
state_76654 = G__76684;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__69406__auto__ = function(state_76654){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__69406__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__69406__auto____1.call(this,state_76654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__69406__auto____0;
figwheel$client$file_reloading$state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__69406__auto____1;
return figwheel$client$file_reloading$state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__))
})();
var state__69497__auto__ = (function (){var statearr_76672 = f__69496__auto__.call(null);
(statearr_76672[(6)] = c__69495__auto__);

return statearr_76672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__))
);

return c__69495__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__76685,callback){
var map__76686 = p__76685;
var map__76686__$1 = ((((!((map__76686 == null)))?((((map__76686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76686):map__76686);
var file_msg = map__76686__$1;
var namespace = cljs.core.get.call(null,map__76686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__76686,map__76686__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__76686,map__76686__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__76688){
var map__76689 = p__76688;
var map__76689__$1 = ((((!((map__76689 == null)))?((((map__76689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76689):map__76689);
var file_msg = map__76689__$1;
var namespace = cljs.core.get.call(null,map__76689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__76691){
var map__76692 = p__76691;
var map__76692__$1 = ((((!((map__76692 == null)))?((((map__76692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76692):map__76692);
var file_msg = map__76692__$1;
var namespace = cljs.core.get.call(null,map__76692__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__64405__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__64405__auto__){
var or__64417__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__64417__auto__)){
return or__64417__auto__;
} else {
var or__64417__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__64417__auto____$1)){
return or__64417__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__64405__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__76694,callback){
var map__76695 = p__76694;
var map__76695__$1 = ((((!((map__76695 == null)))?((((map__76695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76695):map__76695);
var file_msg = map__76695__$1;
var request_url = cljs.core.get.call(null,map__76695__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__76695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__69495__auto___76745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto___76745,out){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto___76745,out){
return (function (state_76730){
var state_val_76731 = (state_76730[(1)]);
if((state_val_76731 === (1))){
var inst_76704 = cljs.core.seq.call(null,files);
var inst_76705 = cljs.core.first.call(null,inst_76704);
var inst_76706 = cljs.core.next.call(null,inst_76704);
var inst_76707 = files;
var state_76730__$1 = (function (){var statearr_76732 = state_76730;
(statearr_76732[(7)] = inst_76707);

(statearr_76732[(8)] = inst_76706);

(statearr_76732[(9)] = inst_76705);

return statearr_76732;
})();
var statearr_76733_76746 = state_76730__$1;
(statearr_76733_76746[(2)] = null);

(statearr_76733_76746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76731 === (2))){
var inst_76713 = (state_76730[(10)]);
var inst_76707 = (state_76730[(7)]);
var inst_76712 = cljs.core.seq.call(null,inst_76707);
var inst_76713__$1 = cljs.core.first.call(null,inst_76712);
var inst_76714 = cljs.core.next.call(null,inst_76712);
var inst_76715 = (inst_76713__$1 == null);
var inst_76716 = cljs.core.not.call(null,inst_76715);
var state_76730__$1 = (function (){var statearr_76734 = state_76730;
(statearr_76734[(10)] = inst_76713__$1);

(statearr_76734[(11)] = inst_76714);

return statearr_76734;
})();
if(inst_76716){
var statearr_76735_76747 = state_76730__$1;
(statearr_76735_76747[(1)] = (4));

} else {
var statearr_76736_76748 = state_76730__$1;
(statearr_76736_76748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76731 === (3))){
var inst_76728 = (state_76730[(2)]);
var state_76730__$1 = state_76730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76730__$1,inst_76728);
} else {
if((state_val_76731 === (4))){
var inst_76713 = (state_76730[(10)]);
var inst_76718 = figwheel.client.file_reloading.reload_js_file.call(null,inst_76713);
var state_76730__$1 = state_76730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76730__$1,(7),inst_76718);
} else {
if((state_val_76731 === (5))){
var inst_76724 = cljs.core.async.close_BANG_.call(null,out);
var state_76730__$1 = state_76730;
var statearr_76737_76749 = state_76730__$1;
(statearr_76737_76749[(2)] = inst_76724);

(statearr_76737_76749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76731 === (6))){
var inst_76726 = (state_76730[(2)]);
var state_76730__$1 = state_76730;
var statearr_76738_76750 = state_76730__$1;
(statearr_76738_76750[(2)] = inst_76726);

(statearr_76738_76750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76731 === (7))){
var inst_76714 = (state_76730[(11)]);
var inst_76720 = (state_76730[(2)]);
var inst_76721 = cljs.core.async.put_BANG_.call(null,out,inst_76720);
var inst_76707 = inst_76714;
var state_76730__$1 = (function (){var statearr_76739 = state_76730;
(statearr_76739[(7)] = inst_76707);

(statearr_76739[(12)] = inst_76721);

return statearr_76739;
})();
var statearr_76740_76751 = state_76730__$1;
(statearr_76740_76751[(2)] = null);

(statearr_76740_76751[(1)] = (2));


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
});})(c__69495__auto___76745,out))
;
return ((function (switch__69405__auto__,c__69495__auto___76745,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto____0 = (function (){
var statearr_76741 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76741[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto__);

(statearr_76741[(1)] = (1));

return statearr_76741;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto____1 = (function (state_76730){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_76730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e76742){if((e76742 instanceof Object)){
var ex__69409__auto__ = e76742;
var statearr_76743_76752 = state_76730;
(statearr_76743_76752[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76753 = state_76730;
state_76730 = G__76753;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto__ = function(state_76730){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto____1.call(this,state_76730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto___76745,out))
})();
var state__69497__auto__ = (function (){var statearr_76744 = f__69496__auto__.call(null);
(statearr_76744[(6)] = c__69495__auto___76745);

return statearr_76744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto___76745,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__76754,opts){
var map__76755 = p__76754;
var map__76755__$1 = ((((!((map__76755 == null)))?((((map__76755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76755):map__76755);
var eval_body = cljs.core.get.call(null,map__76755__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__76755__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__64405__auto__ = eval_body;
if(cljs.core.truth_(and__64405__auto__)){
return typeof eval_body === 'string';
} else {
return and__64405__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e76757){var e = e76757;
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
return (function (p1__76758_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__76758_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__76759){
var vec__76760 = p__76759;
var k = cljs.core.nth.call(null,vec__76760,(0),null);
var v = cljs.core.nth.call(null,vec__76760,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__76763){
var vec__76764 = p__76763;
var k = cljs.core.nth.call(null,vec__76764,(0),null);
var v = cljs.core.nth.call(null,vec__76764,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__76770,p__76771){
var map__76772 = p__76770;
var map__76772__$1 = ((((!((map__76772 == null)))?((((map__76772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76772):map__76772);
var opts = map__76772__$1;
var before_jsload = cljs.core.get.call(null,map__76772__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__76772__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__76772__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__76773 = p__76771;
var map__76773__$1 = ((((!((map__76773 == null)))?((((map__76773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76773):map__76773);
var msg = map__76773__$1;
var files = cljs.core.get.call(null,map__76773__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__76773__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__76773__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__69495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__69496__auto__ = (function (){var switch__69405__auto__ = ((function (c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_76927){
var state_val_76928 = (state_76927[(1)]);
if((state_val_76928 === (7))){
var inst_76790 = (state_76927[(7)]);
var inst_76789 = (state_76927[(8)]);
var inst_76787 = (state_76927[(9)]);
var inst_76788 = (state_76927[(10)]);
var inst_76795 = cljs.core._nth.call(null,inst_76788,inst_76790);
var inst_76796 = figwheel.client.file_reloading.eval_body.call(null,inst_76795,opts);
var inst_76797 = (inst_76790 + (1));
var tmp76929 = inst_76789;
var tmp76930 = inst_76787;
var tmp76931 = inst_76788;
var inst_76787__$1 = tmp76930;
var inst_76788__$1 = tmp76931;
var inst_76789__$1 = tmp76929;
var inst_76790__$1 = inst_76797;
var state_76927__$1 = (function (){var statearr_76932 = state_76927;
(statearr_76932[(7)] = inst_76790__$1);

(statearr_76932[(11)] = inst_76796);

(statearr_76932[(8)] = inst_76789__$1);

(statearr_76932[(9)] = inst_76787__$1);

(statearr_76932[(10)] = inst_76788__$1);

return statearr_76932;
})();
var statearr_76933_77016 = state_76927__$1;
(statearr_76933_77016[(2)] = null);

(statearr_76933_77016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (20))){
var inst_76830 = (state_76927[(12)]);
var inst_76838 = figwheel.client.file_reloading.sort_files.call(null,inst_76830);
var state_76927__$1 = state_76927;
var statearr_76934_77017 = state_76927__$1;
(statearr_76934_77017[(2)] = inst_76838);

(statearr_76934_77017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (27))){
var state_76927__$1 = state_76927;
var statearr_76935_77018 = state_76927__$1;
(statearr_76935_77018[(2)] = null);

(statearr_76935_77018[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (1))){
var inst_76779 = (state_76927[(13)]);
var inst_76776 = before_jsload.call(null,files);
var inst_76777 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_76778 = (function (){return ((function (inst_76779,inst_76776,inst_76777,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__76767_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__76767_SHARP_);
});
;})(inst_76779,inst_76776,inst_76777,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_76779__$1 = cljs.core.filter.call(null,inst_76778,files);
var inst_76780 = cljs.core.not_empty.call(null,inst_76779__$1);
var state_76927__$1 = (function (){var statearr_76936 = state_76927;
(statearr_76936[(14)] = inst_76777);

(statearr_76936[(13)] = inst_76779__$1);

(statearr_76936[(15)] = inst_76776);

return statearr_76936;
})();
if(cljs.core.truth_(inst_76780)){
var statearr_76937_77019 = state_76927__$1;
(statearr_76937_77019[(1)] = (2));

} else {
var statearr_76938_77020 = state_76927__$1;
(statearr_76938_77020[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (24))){
var state_76927__$1 = state_76927;
var statearr_76939_77021 = state_76927__$1;
(statearr_76939_77021[(2)] = null);

(statearr_76939_77021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (39))){
var inst_76880 = (state_76927[(16)]);
var state_76927__$1 = state_76927;
var statearr_76940_77022 = state_76927__$1;
(statearr_76940_77022[(2)] = inst_76880);

(statearr_76940_77022[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (46))){
var inst_76922 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
var statearr_76941_77023 = state_76927__$1;
(statearr_76941_77023[(2)] = inst_76922);

(statearr_76941_77023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (4))){
var inst_76824 = (state_76927[(2)]);
var inst_76825 = cljs.core.List.EMPTY;
var inst_76826 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_76825);
var inst_76827 = (function (){return ((function (inst_76824,inst_76825,inst_76826,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__76768_SHARP_){
var and__64405__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__76768_SHARP_);
if(cljs.core.truth_(and__64405__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__76768_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__76768_SHARP_)));
} else {
return and__64405__auto__;
}
});
;})(inst_76824,inst_76825,inst_76826,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_76828 = cljs.core.filter.call(null,inst_76827,files);
var inst_76829 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_76830 = cljs.core.concat.call(null,inst_76828,inst_76829);
var state_76927__$1 = (function (){var statearr_76942 = state_76927;
(statearr_76942[(17)] = inst_76824);

(statearr_76942[(18)] = inst_76826);

(statearr_76942[(12)] = inst_76830);

return statearr_76942;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_76943_77024 = state_76927__$1;
(statearr_76943_77024[(1)] = (16));

} else {
var statearr_76944_77025 = state_76927__$1;
(statearr_76944_77025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (15))){
var inst_76814 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
var statearr_76945_77026 = state_76927__$1;
(statearr_76945_77026[(2)] = inst_76814);

(statearr_76945_77026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (21))){
var inst_76840 = (state_76927[(19)]);
var inst_76840__$1 = (state_76927[(2)]);
var inst_76841 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_76840__$1);
var state_76927__$1 = (function (){var statearr_76946 = state_76927;
(statearr_76946[(19)] = inst_76840__$1);

return statearr_76946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76927__$1,(22),inst_76841);
} else {
if((state_val_76928 === (31))){
var inst_76925 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76927__$1,inst_76925);
} else {
if((state_val_76928 === (32))){
var inst_76880 = (state_76927[(16)]);
var inst_76885 = inst_76880.cljs$lang$protocol_mask$partition0$;
var inst_76886 = (inst_76885 & (64));
var inst_76887 = inst_76880.cljs$core$ISeq$;
var inst_76888 = (cljs.core.PROTOCOL_SENTINEL === inst_76887);
var inst_76889 = (inst_76886) || (inst_76888);
var state_76927__$1 = state_76927;
if(cljs.core.truth_(inst_76889)){
var statearr_76947_77027 = state_76927__$1;
(statearr_76947_77027[(1)] = (35));

} else {
var statearr_76948_77028 = state_76927__$1;
(statearr_76948_77028[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (40))){
var inst_76902 = (state_76927[(20)]);
var inst_76901 = (state_76927[(2)]);
var inst_76902__$1 = cljs.core.get.call(null,inst_76901,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_76903 = cljs.core.get.call(null,inst_76901,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_76904 = cljs.core.not_empty.call(null,inst_76902__$1);
var state_76927__$1 = (function (){var statearr_76949 = state_76927;
(statearr_76949[(21)] = inst_76903);

(statearr_76949[(20)] = inst_76902__$1);

return statearr_76949;
})();
if(cljs.core.truth_(inst_76904)){
var statearr_76950_77029 = state_76927__$1;
(statearr_76950_77029[(1)] = (41));

} else {
var statearr_76951_77030 = state_76927__$1;
(statearr_76951_77030[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (33))){
var state_76927__$1 = state_76927;
var statearr_76952_77031 = state_76927__$1;
(statearr_76952_77031[(2)] = false);

(statearr_76952_77031[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (13))){
var inst_76800 = (state_76927[(22)]);
var inst_76804 = cljs.core.chunk_first.call(null,inst_76800);
var inst_76805 = cljs.core.chunk_rest.call(null,inst_76800);
var inst_76806 = cljs.core.count.call(null,inst_76804);
var inst_76787 = inst_76805;
var inst_76788 = inst_76804;
var inst_76789 = inst_76806;
var inst_76790 = (0);
var state_76927__$1 = (function (){var statearr_76953 = state_76927;
(statearr_76953[(7)] = inst_76790);

(statearr_76953[(8)] = inst_76789);

(statearr_76953[(9)] = inst_76787);

(statearr_76953[(10)] = inst_76788);

return statearr_76953;
})();
var statearr_76954_77032 = state_76927__$1;
(statearr_76954_77032[(2)] = null);

(statearr_76954_77032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (22))){
var inst_76844 = (state_76927[(23)]);
var inst_76840 = (state_76927[(19)]);
var inst_76848 = (state_76927[(24)]);
var inst_76843 = (state_76927[(25)]);
var inst_76843__$1 = (state_76927[(2)]);
var inst_76844__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_76843__$1);
var inst_76845 = (function (){var all_files = inst_76840;
var res_SINGLEQUOTE_ = inst_76843__$1;
var res = inst_76844__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_76844,inst_76840,inst_76848,inst_76843,inst_76843__$1,inst_76844__$1,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__76769_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__76769_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_76844,inst_76840,inst_76848,inst_76843,inst_76843__$1,inst_76844__$1,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_76846 = cljs.core.filter.call(null,inst_76845,inst_76843__$1);
var inst_76847 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_76848__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_76847);
var inst_76849 = cljs.core.not_empty.call(null,inst_76848__$1);
var state_76927__$1 = (function (){var statearr_76955 = state_76927;
(statearr_76955[(23)] = inst_76844__$1);

(statearr_76955[(26)] = inst_76846);

(statearr_76955[(24)] = inst_76848__$1);

(statearr_76955[(25)] = inst_76843__$1);

return statearr_76955;
})();
if(cljs.core.truth_(inst_76849)){
var statearr_76956_77033 = state_76927__$1;
(statearr_76956_77033[(1)] = (23));

} else {
var statearr_76957_77034 = state_76927__$1;
(statearr_76957_77034[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (36))){
var state_76927__$1 = state_76927;
var statearr_76958_77035 = state_76927__$1;
(statearr_76958_77035[(2)] = false);

(statearr_76958_77035[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (41))){
var inst_76902 = (state_76927[(20)]);
var inst_76906 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_76907 = cljs.core.map.call(null,inst_76906,inst_76902);
var inst_76908 = cljs.core.pr_str.call(null,inst_76907);
var inst_76909 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_76908)].join('');
var inst_76910 = figwheel.client.utils.log.call(null,inst_76909);
var state_76927__$1 = state_76927;
var statearr_76959_77036 = state_76927__$1;
(statearr_76959_77036[(2)] = inst_76910);

(statearr_76959_77036[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (43))){
var inst_76903 = (state_76927[(21)]);
var inst_76913 = (state_76927[(2)]);
var inst_76914 = cljs.core.not_empty.call(null,inst_76903);
var state_76927__$1 = (function (){var statearr_76960 = state_76927;
(statearr_76960[(27)] = inst_76913);

return statearr_76960;
})();
if(cljs.core.truth_(inst_76914)){
var statearr_76961_77037 = state_76927__$1;
(statearr_76961_77037[(1)] = (44));

} else {
var statearr_76962_77038 = state_76927__$1;
(statearr_76962_77038[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (29))){
var inst_76844 = (state_76927[(23)]);
var inst_76840 = (state_76927[(19)]);
var inst_76880 = (state_76927[(16)]);
var inst_76846 = (state_76927[(26)]);
var inst_76848 = (state_76927[(24)]);
var inst_76843 = (state_76927[(25)]);
var inst_76876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_76879 = (function (){var all_files = inst_76840;
var res_SINGLEQUOTE_ = inst_76843;
var res = inst_76844;
var files_not_loaded = inst_76846;
var dependencies_that_loaded = inst_76848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_76844,inst_76840,inst_76880,inst_76846,inst_76848,inst_76843,inst_76876,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__76878){
var map__76963 = p__76878;
var map__76963__$1 = ((((!((map__76963 == null)))?((((map__76963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76963):map__76963);
var namespace = cljs.core.get.call(null,map__76963__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_76844,inst_76840,inst_76880,inst_76846,inst_76848,inst_76843,inst_76876,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_76880__$1 = cljs.core.group_by.call(null,inst_76879,inst_76846);
var inst_76882 = (inst_76880__$1 == null);
var inst_76883 = cljs.core.not.call(null,inst_76882);
var state_76927__$1 = (function (){var statearr_76965 = state_76927;
(statearr_76965[(16)] = inst_76880__$1);

(statearr_76965[(28)] = inst_76876);

return statearr_76965;
})();
if(inst_76883){
var statearr_76966_77039 = state_76927__$1;
(statearr_76966_77039[(1)] = (32));

} else {
var statearr_76967_77040 = state_76927__$1;
(statearr_76967_77040[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (44))){
var inst_76903 = (state_76927[(21)]);
var inst_76916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_76903);
var inst_76917 = cljs.core.pr_str.call(null,inst_76916);
var inst_76918 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_76917)].join('');
var inst_76919 = figwheel.client.utils.log.call(null,inst_76918);
var state_76927__$1 = state_76927;
var statearr_76968_77041 = state_76927__$1;
(statearr_76968_77041[(2)] = inst_76919);

(statearr_76968_77041[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (6))){
var inst_76821 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
var statearr_76969_77042 = state_76927__$1;
(statearr_76969_77042[(2)] = inst_76821);

(statearr_76969_77042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (28))){
var inst_76846 = (state_76927[(26)]);
var inst_76873 = (state_76927[(2)]);
var inst_76874 = cljs.core.not_empty.call(null,inst_76846);
var state_76927__$1 = (function (){var statearr_76970 = state_76927;
(statearr_76970[(29)] = inst_76873);

return statearr_76970;
})();
if(cljs.core.truth_(inst_76874)){
var statearr_76971_77043 = state_76927__$1;
(statearr_76971_77043[(1)] = (29));

} else {
var statearr_76972_77044 = state_76927__$1;
(statearr_76972_77044[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (25))){
var inst_76844 = (state_76927[(23)]);
var inst_76860 = (state_76927[(2)]);
var inst_76861 = cljs.core.not_empty.call(null,inst_76844);
var state_76927__$1 = (function (){var statearr_76973 = state_76927;
(statearr_76973[(30)] = inst_76860);

return statearr_76973;
})();
if(cljs.core.truth_(inst_76861)){
var statearr_76974_77045 = state_76927__$1;
(statearr_76974_77045[(1)] = (26));

} else {
var statearr_76975_77046 = state_76927__$1;
(statearr_76975_77046[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (34))){
var inst_76896 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
if(cljs.core.truth_(inst_76896)){
var statearr_76976_77047 = state_76927__$1;
(statearr_76976_77047[(1)] = (38));

} else {
var statearr_76977_77048 = state_76927__$1;
(statearr_76977_77048[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (17))){
var state_76927__$1 = state_76927;
var statearr_76978_77049 = state_76927__$1;
(statearr_76978_77049[(2)] = recompile_dependents);

(statearr_76978_77049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (3))){
var state_76927__$1 = state_76927;
var statearr_76979_77050 = state_76927__$1;
(statearr_76979_77050[(2)] = null);

(statearr_76979_77050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (12))){
var inst_76817 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
var statearr_76980_77051 = state_76927__$1;
(statearr_76980_77051[(2)] = inst_76817);

(statearr_76980_77051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (2))){
var inst_76779 = (state_76927[(13)]);
var inst_76786 = cljs.core.seq.call(null,inst_76779);
var inst_76787 = inst_76786;
var inst_76788 = null;
var inst_76789 = (0);
var inst_76790 = (0);
var state_76927__$1 = (function (){var statearr_76981 = state_76927;
(statearr_76981[(7)] = inst_76790);

(statearr_76981[(8)] = inst_76789);

(statearr_76981[(9)] = inst_76787);

(statearr_76981[(10)] = inst_76788);

return statearr_76981;
})();
var statearr_76982_77052 = state_76927__$1;
(statearr_76982_77052[(2)] = null);

(statearr_76982_77052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (23))){
var inst_76844 = (state_76927[(23)]);
var inst_76840 = (state_76927[(19)]);
var inst_76846 = (state_76927[(26)]);
var inst_76848 = (state_76927[(24)]);
var inst_76843 = (state_76927[(25)]);
var inst_76851 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_76853 = (function (){var all_files = inst_76840;
var res_SINGLEQUOTE_ = inst_76843;
var res = inst_76844;
var files_not_loaded = inst_76846;
var dependencies_that_loaded = inst_76848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_76844,inst_76840,inst_76846,inst_76848,inst_76843,inst_76851,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__76852){
var map__76983 = p__76852;
var map__76983__$1 = ((((!((map__76983 == null)))?((((map__76983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76983):map__76983);
var request_url = cljs.core.get.call(null,map__76983__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_76844,inst_76840,inst_76846,inst_76848,inst_76843,inst_76851,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_76854 = cljs.core.reverse.call(null,inst_76848);
var inst_76855 = cljs.core.map.call(null,inst_76853,inst_76854);
var inst_76856 = cljs.core.pr_str.call(null,inst_76855);
var inst_76857 = figwheel.client.utils.log.call(null,inst_76856);
var state_76927__$1 = (function (){var statearr_76985 = state_76927;
(statearr_76985[(31)] = inst_76851);

return statearr_76985;
})();
var statearr_76986_77053 = state_76927__$1;
(statearr_76986_77053[(2)] = inst_76857);

(statearr_76986_77053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (35))){
var state_76927__$1 = state_76927;
var statearr_76987_77054 = state_76927__$1;
(statearr_76987_77054[(2)] = true);

(statearr_76987_77054[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (19))){
var inst_76830 = (state_76927[(12)]);
var inst_76836 = figwheel.client.file_reloading.expand_files.call(null,inst_76830);
var state_76927__$1 = state_76927;
var statearr_76988_77055 = state_76927__$1;
(statearr_76988_77055[(2)] = inst_76836);

(statearr_76988_77055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (11))){
var state_76927__$1 = state_76927;
var statearr_76989_77056 = state_76927__$1;
(statearr_76989_77056[(2)] = null);

(statearr_76989_77056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (9))){
var inst_76819 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
var statearr_76990_77057 = state_76927__$1;
(statearr_76990_77057[(2)] = inst_76819);

(statearr_76990_77057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (5))){
var inst_76790 = (state_76927[(7)]);
var inst_76789 = (state_76927[(8)]);
var inst_76792 = (inst_76790 < inst_76789);
var inst_76793 = inst_76792;
var state_76927__$1 = state_76927;
if(cljs.core.truth_(inst_76793)){
var statearr_76991_77058 = state_76927__$1;
(statearr_76991_77058[(1)] = (7));

} else {
var statearr_76992_77059 = state_76927__$1;
(statearr_76992_77059[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (14))){
var inst_76800 = (state_76927[(22)]);
var inst_76809 = cljs.core.first.call(null,inst_76800);
var inst_76810 = figwheel.client.file_reloading.eval_body.call(null,inst_76809,opts);
var inst_76811 = cljs.core.next.call(null,inst_76800);
var inst_76787 = inst_76811;
var inst_76788 = null;
var inst_76789 = (0);
var inst_76790 = (0);
var state_76927__$1 = (function (){var statearr_76993 = state_76927;
(statearr_76993[(7)] = inst_76790);

(statearr_76993[(8)] = inst_76789);

(statearr_76993[(32)] = inst_76810);

(statearr_76993[(9)] = inst_76787);

(statearr_76993[(10)] = inst_76788);

return statearr_76993;
})();
var statearr_76994_77060 = state_76927__$1;
(statearr_76994_77060[(2)] = null);

(statearr_76994_77060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (45))){
var state_76927__$1 = state_76927;
var statearr_76995_77061 = state_76927__$1;
(statearr_76995_77061[(2)] = null);

(statearr_76995_77061[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (26))){
var inst_76844 = (state_76927[(23)]);
var inst_76840 = (state_76927[(19)]);
var inst_76846 = (state_76927[(26)]);
var inst_76848 = (state_76927[(24)]);
var inst_76843 = (state_76927[(25)]);
var inst_76863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_76865 = (function (){var all_files = inst_76840;
var res_SINGLEQUOTE_ = inst_76843;
var res = inst_76844;
var files_not_loaded = inst_76846;
var dependencies_that_loaded = inst_76848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_76844,inst_76840,inst_76846,inst_76848,inst_76843,inst_76863,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__76864){
var map__76996 = p__76864;
var map__76996__$1 = ((((!((map__76996 == null)))?((((map__76996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76996):map__76996);
var namespace = cljs.core.get.call(null,map__76996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__76996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_76844,inst_76840,inst_76846,inst_76848,inst_76843,inst_76863,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_76866 = cljs.core.map.call(null,inst_76865,inst_76844);
var inst_76867 = cljs.core.pr_str.call(null,inst_76866);
var inst_76868 = figwheel.client.utils.log.call(null,inst_76867);
var inst_76869 = (function (){var all_files = inst_76840;
var res_SINGLEQUOTE_ = inst_76843;
var res = inst_76844;
var files_not_loaded = inst_76846;
var dependencies_that_loaded = inst_76848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_76844,inst_76840,inst_76846,inst_76848,inst_76843,inst_76863,inst_76865,inst_76866,inst_76867,inst_76868,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_76844,inst_76840,inst_76846,inst_76848,inst_76843,inst_76863,inst_76865,inst_76866,inst_76867,inst_76868,state_val_76928,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_76870 = setTimeout(inst_76869,(10));
var state_76927__$1 = (function (){var statearr_76998 = state_76927;
(statearr_76998[(33)] = inst_76863);

(statearr_76998[(34)] = inst_76868);

return statearr_76998;
})();
var statearr_76999_77062 = state_76927__$1;
(statearr_76999_77062[(2)] = inst_76870);

(statearr_76999_77062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (16))){
var state_76927__$1 = state_76927;
var statearr_77000_77063 = state_76927__$1;
(statearr_77000_77063[(2)] = reload_dependents);

(statearr_77000_77063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (38))){
var inst_76880 = (state_76927[(16)]);
var inst_76898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_76880);
var state_76927__$1 = state_76927;
var statearr_77001_77064 = state_76927__$1;
(statearr_77001_77064[(2)] = inst_76898);

(statearr_77001_77064[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (30))){
var state_76927__$1 = state_76927;
var statearr_77002_77065 = state_76927__$1;
(statearr_77002_77065[(2)] = null);

(statearr_77002_77065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (10))){
var inst_76800 = (state_76927[(22)]);
var inst_76802 = cljs.core.chunked_seq_QMARK_.call(null,inst_76800);
var state_76927__$1 = state_76927;
if(inst_76802){
var statearr_77003_77066 = state_76927__$1;
(statearr_77003_77066[(1)] = (13));

} else {
var statearr_77004_77067 = state_76927__$1;
(statearr_77004_77067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (18))){
var inst_76834 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
if(cljs.core.truth_(inst_76834)){
var statearr_77005_77068 = state_76927__$1;
(statearr_77005_77068[(1)] = (19));

} else {
var statearr_77006_77069 = state_76927__$1;
(statearr_77006_77069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (42))){
var state_76927__$1 = state_76927;
var statearr_77007_77070 = state_76927__$1;
(statearr_77007_77070[(2)] = null);

(statearr_77007_77070[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (37))){
var inst_76893 = (state_76927[(2)]);
var state_76927__$1 = state_76927;
var statearr_77008_77071 = state_76927__$1;
(statearr_77008_77071[(2)] = inst_76893);

(statearr_77008_77071[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76928 === (8))){
var inst_76800 = (state_76927[(22)]);
var inst_76787 = (state_76927[(9)]);
var inst_76800__$1 = cljs.core.seq.call(null,inst_76787);
var state_76927__$1 = (function (){var statearr_77009 = state_76927;
(statearr_77009[(22)] = inst_76800__$1);

return statearr_77009;
})();
if(inst_76800__$1){
var statearr_77010_77072 = state_76927__$1;
(statearr_77010_77072[(1)] = (10));

} else {
var statearr_77011_77073 = state_76927__$1;
(statearr_77011_77073[(1)] = (11));

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
});})(c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__69405__auto__,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto____0 = (function (){
var statearr_77012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77012[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto__);

(statearr_77012[(1)] = (1));

return statearr_77012;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto____1 = (function (state_76927){
while(true){
var ret_value__69407__auto__ = (function (){try{while(true){
var result__69408__auto__ = switch__69405__auto__.call(null,state_76927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__69408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69408__auto__;
}
break;
}
}catch (e77013){if((e77013 instanceof Object)){
var ex__69409__auto__ = e77013;
var statearr_77014_77074 = state_76927;
(statearr_77014_77074[(5)] = ex__69409__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__69407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77075 = state_76927;
state_76927 = G__77075;
continue;
} else {
return ret_value__69407__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto__ = function(state_76927){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto____1.call(this,state_76927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__69406__auto__;
})()
;})(switch__69405__auto__,c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__69497__auto__ = (function (){var statearr_77015 = f__69496__auto__.call(null);
(statearr_77015[(6)] = c__69495__auto__);

return statearr_77015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__69497__auto__);
});})(c__69495__auto__,map__76772,map__76772__$1,opts,before_jsload,on_jsload,reload_dependents,map__76773,map__76773__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__69495__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__77078,link){
var map__77079 = p__77078;
var map__77079__$1 = ((((!((map__77079 == null)))?((((map__77079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77079):map__77079);
var file = cljs.core.get.call(null,map__77079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__77079,map__77079__$1,file){
return (function (p1__77076_SHARP_,p2__77077_SHARP_){
if(cljs.core._EQ_.call(null,p1__77076_SHARP_,p2__77077_SHARP_)){
return p1__77076_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__77079,map__77079__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__77082){
var map__77083 = p__77082;
var map__77083__$1 = ((((!((map__77083 == null)))?((((map__77083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77083):map__77083);
var match_length = cljs.core.get.call(null,map__77083__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__77083__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__77081_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__77081_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__77085_SHARP_,p2__77086_SHARP_){
return cljs.core.assoc.call(null,p1__77085_SHARP_,cljs.core.get.call(null,p2__77086_SHARP_,key),p2__77086_SHARP_);
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
var loaded_f_datas_77087 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_77087);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_77087);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__77088,p__77089){
var map__77090 = p__77088;
var map__77090__$1 = ((((!((map__77090 == null)))?((((map__77090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77090):map__77090);
var on_cssload = cljs.core.get.call(null,map__77090__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__77091 = p__77089;
var map__77091__$1 = ((((!((map__77091 == null)))?((((map__77091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77091):map__77091);
var files_msg = map__77091__$1;
var files = cljs.core.get.call(null,map__77091__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1506558354974
