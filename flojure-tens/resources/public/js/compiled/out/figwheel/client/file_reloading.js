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
var or__9810__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__9810__auto__){
return or__9810__auto__;
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
var or__9810__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
var or__9810__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__9810__auto____$1)){
return or__9810__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22525_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22525_SHARP_));
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
var seq__22526 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22527 = null;
var count__22528 = (0);
var i__22529 = (0);
while(true){
if((i__22529 < count__22528)){
var n = cljs.core._nth.call(null,chunk__22527,i__22529);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22530 = seq__22526;
var G__22531 = chunk__22527;
var G__22532 = count__22528;
var G__22533 = (i__22529 + (1));
seq__22526 = G__22530;
chunk__22527 = G__22531;
count__22528 = G__22532;
i__22529 = G__22533;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22526);
if(temp__6738__auto__){
var seq__22526__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22526__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__22526__$1);
var G__22534 = cljs.core.chunk_rest.call(null,seq__22526__$1);
var G__22535 = c__10741__auto__;
var G__22536 = cljs.core.count.call(null,c__10741__auto__);
var G__22537 = (0);
seq__22526 = G__22534;
chunk__22527 = G__22535;
count__22528 = G__22536;
i__22529 = G__22537;
continue;
} else {
var n = cljs.core.first.call(null,seq__22526__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22538 = cljs.core.next.call(null,seq__22526__$1);
var G__22539 = null;
var G__22540 = (0);
var G__22541 = (0);
seq__22526 = G__22538;
chunk__22527 = G__22539;
count__22528 = G__22540;
i__22529 = G__22541;
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

var seq__22551_22559 = cljs.core.seq.call(null,deps);
var chunk__22552_22560 = null;
var count__22553_22561 = (0);
var i__22554_22562 = (0);
while(true){
if((i__22554_22562 < count__22553_22561)){
var dep_22563 = cljs.core._nth.call(null,chunk__22552_22560,i__22554_22562);
topo_sort_helper_STAR_.call(null,dep_22563,(depth + (1)),state);

var G__22564 = seq__22551_22559;
var G__22565 = chunk__22552_22560;
var G__22566 = count__22553_22561;
var G__22567 = (i__22554_22562 + (1));
seq__22551_22559 = G__22564;
chunk__22552_22560 = G__22565;
count__22553_22561 = G__22566;
i__22554_22562 = G__22567;
continue;
} else {
var temp__6738__auto___22568 = cljs.core.seq.call(null,seq__22551_22559);
if(temp__6738__auto___22568){
var seq__22551_22569__$1 = temp__6738__auto___22568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22551_22569__$1)){
var c__10741__auto___22570 = cljs.core.chunk_first.call(null,seq__22551_22569__$1);
var G__22571 = cljs.core.chunk_rest.call(null,seq__22551_22569__$1);
var G__22572 = c__10741__auto___22570;
var G__22573 = cljs.core.count.call(null,c__10741__auto___22570);
var G__22574 = (0);
seq__22551_22559 = G__22571;
chunk__22552_22560 = G__22572;
count__22553_22561 = G__22573;
i__22554_22562 = G__22574;
continue;
} else {
var dep_22575 = cljs.core.first.call(null,seq__22551_22569__$1);
topo_sort_helper_STAR_.call(null,dep_22575,(depth + (1)),state);

var G__22576 = cljs.core.next.call(null,seq__22551_22569__$1);
var G__22577 = null;
var G__22578 = (0);
var G__22579 = (0);
seq__22551_22559 = G__22576;
chunk__22552_22560 = G__22577;
count__22553_22561 = G__22578;
i__22554_22562 = G__22579;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22555){
var vec__22556 = p__22555;
var seq__22557 = cljs.core.seq.call(null,vec__22556);
var first__22558 = cljs.core.first.call(null,seq__22557);
var seq__22557__$1 = cljs.core.next.call(null,seq__22557);
var x = first__22558;
var xs = seq__22557__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22556,seq__22557,first__22558,seq__22557__$1,x,xs,get_deps__$1){
return (function (p1__22542_SHARP_){
return clojure.set.difference.call(null,p1__22542_SHARP_,x);
});})(vec__22556,seq__22557,first__22558,seq__22557__$1,x,xs,get_deps__$1))
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
var seq__22580 = cljs.core.seq.call(null,provides);
var chunk__22581 = null;
var count__22582 = (0);
var i__22583 = (0);
while(true){
if((i__22583 < count__22582)){
var prov = cljs.core._nth.call(null,chunk__22581,i__22583);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22584_22592 = cljs.core.seq.call(null,requires);
var chunk__22585_22593 = null;
var count__22586_22594 = (0);
var i__22587_22595 = (0);
while(true){
if((i__22587_22595 < count__22586_22594)){
var req_22596 = cljs.core._nth.call(null,chunk__22585_22593,i__22587_22595);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22596,prov);

var G__22597 = seq__22584_22592;
var G__22598 = chunk__22585_22593;
var G__22599 = count__22586_22594;
var G__22600 = (i__22587_22595 + (1));
seq__22584_22592 = G__22597;
chunk__22585_22593 = G__22598;
count__22586_22594 = G__22599;
i__22587_22595 = G__22600;
continue;
} else {
var temp__6738__auto___22601 = cljs.core.seq.call(null,seq__22584_22592);
if(temp__6738__auto___22601){
var seq__22584_22602__$1 = temp__6738__auto___22601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22584_22602__$1)){
var c__10741__auto___22603 = cljs.core.chunk_first.call(null,seq__22584_22602__$1);
var G__22604 = cljs.core.chunk_rest.call(null,seq__22584_22602__$1);
var G__22605 = c__10741__auto___22603;
var G__22606 = cljs.core.count.call(null,c__10741__auto___22603);
var G__22607 = (0);
seq__22584_22592 = G__22604;
chunk__22585_22593 = G__22605;
count__22586_22594 = G__22606;
i__22587_22595 = G__22607;
continue;
} else {
var req_22608 = cljs.core.first.call(null,seq__22584_22602__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22608,prov);

var G__22609 = cljs.core.next.call(null,seq__22584_22602__$1);
var G__22610 = null;
var G__22611 = (0);
var G__22612 = (0);
seq__22584_22592 = G__22609;
chunk__22585_22593 = G__22610;
count__22586_22594 = G__22611;
i__22587_22595 = G__22612;
continue;
}
} else {
}
}
break;
}

var G__22613 = seq__22580;
var G__22614 = chunk__22581;
var G__22615 = count__22582;
var G__22616 = (i__22583 + (1));
seq__22580 = G__22613;
chunk__22581 = G__22614;
count__22582 = G__22615;
i__22583 = G__22616;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22580);
if(temp__6738__auto__){
var seq__22580__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22580__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__22580__$1);
var G__22617 = cljs.core.chunk_rest.call(null,seq__22580__$1);
var G__22618 = c__10741__auto__;
var G__22619 = cljs.core.count.call(null,c__10741__auto__);
var G__22620 = (0);
seq__22580 = G__22617;
chunk__22581 = G__22618;
count__22582 = G__22619;
i__22583 = G__22620;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22580__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22588_22621 = cljs.core.seq.call(null,requires);
var chunk__22589_22622 = null;
var count__22590_22623 = (0);
var i__22591_22624 = (0);
while(true){
if((i__22591_22624 < count__22590_22623)){
var req_22625 = cljs.core._nth.call(null,chunk__22589_22622,i__22591_22624);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22625,prov);

var G__22626 = seq__22588_22621;
var G__22627 = chunk__22589_22622;
var G__22628 = count__22590_22623;
var G__22629 = (i__22591_22624 + (1));
seq__22588_22621 = G__22626;
chunk__22589_22622 = G__22627;
count__22590_22623 = G__22628;
i__22591_22624 = G__22629;
continue;
} else {
var temp__6738__auto___22630__$1 = cljs.core.seq.call(null,seq__22588_22621);
if(temp__6738__auto___22630__$1){
var seq__22588_22631__$1 = temp__6738__auto___22630__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22588_22631__$1)){
var c__10741__auto___22632 = cljs.core.chunk_first.call(null,seq__22588_22631__$1);
var G__22633 = cljs.core.chunk_rest.call(null,seq__22588_22631__$1);
var G__22634 = c__10741__auto___22632;
var G__22635 = cljs.core.count.call(null,c__10741__auto___22632);
var G__22636 = (0);
seq__22588_22621 = G__22633;
chunk__22589_22622 = G__22634;
count__22590_22623 = G__22635;
i__22591_22624 = G__22636;
continue;
} else {
var req_22637 = cljs.core.first.call(null,seq__22588_22631__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22637,prov);

var G__22638 = cljs.core.next.call(null,seq__22588_22631__$1);
var G__22639 = null;
var G__22640 = (0);
var G__22641 = (0);
seq__22588_22621 = G__22638;
chunk__22589_22622 = G__22639;
count__22590_22623 = G__22640;
i__22591_22624 = G__22641;
continue;
}
} else {
}
}
break;
}

var G__22642 = cljs.core.next.call(null,seq__22580__$1);
var G__22643 = null;
var G__22644 = (0);
var G__22645 = (0);
seq__22580 = G__22642;
chunk__22581 = G__22643;
count__22582 = G__22644;
i__22583 = G__22645;
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
var seq__22646_22650 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22647_22651 = null;
var count__22648_22652 = (0);
var i__22649_22653 = (0);
while(true){
if((i__22649_22653 < count__22648_22652)){
var ns_22654 = cljs.core._nth.call(null,chunk__22647_22651,i__22649_22653);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22654);

var G__22655 = seq__22646_22650;
var G__22656 = chunk__22647_22651;
var G__22657 = count__22648_22652;
var G__22658 = (i__22649_22653 + (1));
seq__22646_22650 = G__22655;
chunk__22647_22651 = G__22656;
count__22648_22652 = G__22657;
i__22649_22653 = G__22658;
continue;
} else {
var temp__6738__auto___22659 = cljs.core.seq.call(null,seq__22646_22650);
if(temp__6738__auto___22659){
var seq__22646_22660__$1 = temp__6738__auto___22659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22646_22660__$1)){
var c__10741__auto___22661 = cljs.core.chunk_first.call(null,seq__22646_22660__$1);
var G__22662 = cljs.core.chunk_rest.call(null,seq__22646_22660__$1);
var G__22663 = c__10741__auto___22661;
var G__22664 = cljs.core.count.call(null,c__10741__auto___22661);
var G__22665 = (0);
seq__22646_22650 = G__22662;
chunk__22647_22651 = G__22663;
count__22648_22652 = G__22664;
i__22649_22653 = G__22665;
continue;
} else {
var ns_22666 = cljs.core.first.call(null,seq__22646_22660__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22666);

var G__22667 = cljs.core.next.call(null,seq__22646_22660__$1);
var G__22668 = null;
var G__22669 = (0);
var G__22670 = (0);
seq__22646_22650 = G__22667;
chunk__22647_22651 = G__22668;
count__22648_22652 = G__22669;
i__22649_22653 = G__22670;
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
goog.require_figwheel_backup_ = (function (){var or__9810__auto__ = goog.require__;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
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
var G__22671__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22672__i = 0, G__22672__a = new Array(arguments.length -  0);
while (G__22672__i < G__22672__a.length) {G__22672__a[G__22672__i] = arguments[G__22672__i + 0]; ++G__22672__i;}
  args = new cljs.core.IndexedSeq(G__22672__a,0,null);
} 
return G__22671__delegate.call(this,args);};
G__22671.cljs$lang$maxFixedArity = 0;
G__22671.cljs$lang$applyTo = (function (arglist__22673){
var args = cljs.core.seq(arglist__22673);
return G__22671__delegate(args);
});
G__22671.cljs$core$IFn$_invoke$arity$variadic = G__22671__delegate;
return G__22671;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__22674_SHARP_,p2__22675_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22674_SHARP_)].join('')),p2__22675_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__22676_SHARP_,p2__22677_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22676_SHARP_)].join(''),p2__22677_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__22678 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__22678.addCallback(((function (G__22678){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__22678))
);

G__22678.addErrback(((function (G__22678){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__22678))
);

return G__22678;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22679 = cljs.core._EQ_;
var expr__22680 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22679.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22680))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__22679,expr__22680){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__22679,expr__22680))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__22679,expr__22680){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22682){if((e22682 instanceof Error)){
var e = e22682;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22682;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__22679,expr__22680))
} else {
if(cljs.core.truth_(pred__22679.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22680))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__22679.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__22680))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__22679.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__22680))){
return ((function (pred__22679,expr__22680){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e22683){if((e22683 instanceof Error)){
var e = e22683;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22683;

}
}})());
});
;})(pred__22679,expr__22680))
} else {
return ((function (pred__22679,expr__22680){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22679,expr__22680))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22684,callback){
var map__22685 = p__22684;
var map__22685__$1 = ((((!((map__22685 == null)))?((((map__22685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22685):map__22685);
var file_msg = map__22685__$1;
var request_url = cljs.core.get.call(null,map__22685__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22685,map__22685__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22685,map__22685__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__){
return (function (state_22709){
var state_val_22710 = (state_22709[(1)]);
if((state_val_22710 === (7))){
var inst_22705 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22711_22728 = state_22709__$1;
(statearr_22711_22728[(2)] = inst_22705);

(statearr_22711_22728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (1))){
var state_22709__$1 = state_22709;
var statearr_22712_22729 = state_22709__$1;
(statearr_22712_22729[(2)] = null);

(statearr_22712_22729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (4))){
var inst_22689 = (state_22709[(7)]);
var inst_22689__$1 = (state_22709[(2)]);
var state_22709__$1 = (function (){var statearr_22713 = state_22709;
(statearr_22713[(7)] = inst_22689__$1);

return statearr_22713;
})();
if(cljs.core.truth_(inst_22689__$1)){
var statearr_22714_22730 = state_22709__$1;
(statearr_22714_22730[(1)] = (5));

} else {
var statearr_22715_22731 = state_22709__$1;
(statearr_22715_22731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (6))){
var state_22709__$1 = state_22709;
var statearr_22716_22732 = state_22709__$1;
(statearr_22716_22732[(2)] = null);

(statearr_22716_22732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (3))){
var inst_22707 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22709__$1,inst_22707);
} else {
if((state_val_22710 === (2))){
var state_22709__$1 = state_22709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22709__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22710 === (11))){
var inst_22701 = (state_22709[(2)]);
var state_22709__$1 = (function (){var statearr_22717 = state_22709;
(statearr_22717[(8)] = inst_22701);

return statearr_22717;
})();
var statearr_22718_22733 = state_22709__$1;
(statearr_22718_22733[(2)] = null);

(statearr_22718_22733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (9))){
var inst_22695 = (state_22709[(9)]);
var inst_22693 = (state_22709[(10)]);
var inst_22697 = inst_22695.call(null,inst_22693);
var state_22709__$1 = state_22709;
var statearr_22719_22734 = state_22709__$1;
(statearr_22719_22734[(2)] = inst_22697);

(statearr_22719_22734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (5))){
var inst_22689 = (state_22709[(7)]);
var inst_22691 = figwheel.client.file_reloading.blocking_load.call(null,inst_22689);
var state_22709__$1 = state_22709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22709__$1,(8),inst_22691);
} else {
if((state_val_22710 === (10))){
var inst_22693 = (state_22709[(10)]);
var inst_22699 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22693);
var state_22709__$1 = state_22709;
var statearr_22720_22735 = state_22709__$1;
(statearr_22720_22735[(2)] = inst_22699);

(statearr_22720_22735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (8))){
var inst_22689 = (state_22709[(7)]);
var inst_22695 = (state_22709[(9)]);
var inst_22693 = (state_22709[(2)]);
var inst_22694 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22695__$1 = cljs.core.get.call(null,inst_22694,inst_22689);
var state_22709__$1 = (function (){var statearr_22721 = state_22709;
(statearr_22721[(9)] = inst_22695__$1);

(statearr_22721[(10)] = inst_22693);

return statearr_22721;
})();
if(cljs.core.truth_(inst_22695__$1)){
var statearr_22722_22736 = state_22709__$1;
(statearr_22722_22736[(1)] = (9));

} else {
var statearr_22723_22737 = state_22709__$1;
(statearr_22723_22737[(1)] = (10));

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
});})(c__17933__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__17844__auto__ = null;
var figwheel$client$file_reloading$state_machine__17844__auto____0 = (function (){
var statearr_22724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22724[(0)] = figwheel$client$file_reloading$state_machine__17844__auto__);

(statearr_22724[(1)] = (1));

return statearr_22724;
});
var figwheel$client$file_reloading$state_machine__17844__auto____1 = (function (state_22709){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_22709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e22725){if((e22725 instanceof Object)){
var ex__17847__auto__ = e22725;
var statearr_22726_22738 = state_22709;
(statearr_22726_22738[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22739 = state_22709;
state_22709 = G__22739;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__17844__auto__ = function(state_22709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__17844__auto____1.call(this,state_22709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__17844__auto____0;
figwheel$client$file_reloading$state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__17844__auto____1;
return figwheel$client$file_reloading$state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__))
})();
var state__17935__auto__ = (function (){var statearr_22727 = f__17934__auto__.call(null);
(statearr_22727[(6)] = c__17933__auto__);

return statearr_22727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__))
);

return c__17933__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22740,callback){
var map__22741 = p__22740;
var map__22741__$1 = ((((!((map__22741 == null)))?((((map__22741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22741):map__22741);
var file_msg = map__22741__$1;
var namespace = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22741,map__22741__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22741,map__22741__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__22743){
var map__22744 = p__22743;
var map__22744__$1 = ((((!((map__22744 == null)))?((((map__22744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22744):map__22744);
var file_msg = map__22744__$1;
var namespace = cljs.core.get.call(null,map__22744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22746){
var map__22747 = p__22746;
var map__22747__$1 = ((((!((map__22747 == null)))?((((map__22747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22747):map__22747);
var file_msg = map__22747__$1;
var namespace = cljs.core.get.call(null,map__22747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__9798__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__9798__auto__){
var or__9810__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
var or__9810__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__9810__auto____$1)){
return or__9810__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__9798__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22749,callback){
var map__22750 = p__22749;
var map__22750__$1 = ((((!((map__22750 == null)))?((((map__22750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22750):map__22750);
var file_msg = map__22750__$1;
var request_url = cljs.core.get.call(null,map__22750__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22750__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__17933__auto___22800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto___22800,out){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto___22800,out){
return (function (state_22785){
var state_val_22786 = (state_22785[(1)]);
if((state_val_22786 === (1))){
var inst_22759 = cljs.core.seq.call(null,files);
var inst_22760 = cljs.core.first.call(null,inst_22759);
var inst_22761 = cljs.core.next.call(null,inst_22759);
var inst_22762 = files;
var state_22785__$1 = (function (){var statearr_22787 = state_22785;
(statearr_22787[(7)] = inst_22760);

(statearr_22787[(8)] = inst_22761);

(statearr_22787[(9)] = inst_22762);

return statearr_22787;
})();
var statearr_22788_22801 = state_22785__$1;
(statearr_22788_22801[(2)] = null);

(statearr_22788_22801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (2))){
var inst_22762 = (state_22785[(9)]);
var inst_22768 = (state_22785[(10)]);
var inst_22767 = cljs.core.seq.call(null,inst_22762);
var inst_22768__$1 = cljs.core.first.call(null,inst_22767);
var inst_22769 = cljs.core.next.call(null,inst_22767);
var inst_22770 = (inst_22768__$1 == null);
var inst_22771 = cljs.core.not.call(null,inst_22770);
var state_22785__$1 = (function (){var statearr_22789 = state_22785;
(statearr_22789[(11)] = inst_22769);

(statearr_22789[(10)] = inst_22768__$1);

return statearr_22789;
})();
if(inst_22771){
var statearr_22790_22802 = state_22785__$1;
(statearr_22790_22802[(1)] = (4));

} else {
var statearr_22791_22803 = state_22785__$1;
(statearr_22791_22803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (3))){
var inst_22783 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22785__$1,inst_22783);
} else {
if((state_val_22786 === (4))){
var inst_22768 = (state_22785[(10)]);
var inst_22773 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22768);
var state_22785__$1 = state_22785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22785__$1,(7),inst_22773);
} else {
if((state_val_22786 === (5))){
var inst_22779 = cljs.core.async.close_BANG_.call(null,out);
var state_22785__$1 = state_22785;
var statearr_22792_22804 = state_22785__$1;
(statearr_22792_22804[(2)] = inst_22779);

(statearr_22792_22804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (6))){
var inst_22781 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
var statearr_22793_22805 = state_22785__$1;
(statearr_22793_22805[(2)] = inst_22781);

(statearr_22793_22805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (7))){
var inst_22769 = (state_22785[(11)]);
var inst_22775 = (state_22785[(2)]);
var inst_22776 = cljs.core.async.put_BANG_.call(null,out,inst_22775);
var inst_22762 = inst_22769;
var state_22785__$1 = (function (){var statearr_22794 = state_22785;
(statearr_22794[(9)] = inst_22762);

(statearr_22794[(12)] = inst_22776);

return statearr_22794;
})();
var statearr_22795_22806 = state_22785__$1;
(statearr_22795_22806[(2)] = null);

(statearr_22795_22806[(1)] = (2));


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
});})(c__17933__auto___22800,out))
;
return ((function (switch__17843__auto__,c__17933__auto___22800,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto____0 = (function (){
var statearr_22796 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22796[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto__);

(statearr_22796[(1)] = (1));

return statearr_22796;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto____1 = (function (state_22785){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_22785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e22797){if((e22797 instanceof Object)){
var ex__17847__auto__ = e22797;
var statearr_22798_22807 = state_22785;
(statearr_22798_22807[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22808 = state_22785;
state_22785 = G__22808;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto__ = function(state_22785){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto____1.call(this,state_22785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto___22800,out))
})();
var state__17935__auto__ = (function (){var statearr_22799 = f__17934__auto__.call(null);
(statearr_22799[(6)] = c__17933__auto___22800);

return statearr_22799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto___22800,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22809,opts){
var map__22810 = p__22809;
var map__22810__$1 = ((((!((map__22810 == null)))?((((map__22810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22810):map__22810);
var eval_body = cljs.core.get.call(null,map__22810__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22810__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__9798__auto__ = eval_body;
if(cljs.core.truth_(and__9798__auto__)){
return typeof eval_body === 'string';
} else {
return and__9798__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22812){var e = e22812;
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
return (function (p1__22813_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22813_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__22814){
var vec__22815 = p__22814;
var k = cljs.core.nth.call(null,vec__22815,(0),null);
var v = cljs.core.nth.call(null,vec__22815,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22818){
var vec__22819 = p__22818;
var k = cljs.core.nth.call(null,vec__22819,(0),null);
var v = cljs.core.nth.call(null,vec__22819,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22825,p__22826){
var map__22827 = p__22825;
var map__22827__$1 = ((((!((map__22827 == null)))?((((map__22827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22827):map__22827);
var opts = map__22827__$1;
var before_jsload = cljs.core.get.call(null,map__22827__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22827__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22827__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22828 = p__22826;
var map__22828__$1 = ((((!((map__22828 == null)))?((((map__22828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22828):map__22828);
var msg = map__22828__$1;
var files = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22982){
var state_val_22983 = (state_22982[(1)]);
if((state_val_22983 === (7))){
var inst_22843 = (state_22982[(7)]);
var inst_22842 = (state_22982[(8)]);
var inst_22845 = (state_22982[(9)]);
var inst_22844 = (state_22982[(10)]);
var inst_22850 = cljs.core._nth.call(null,inst_22843,inst_22845);
var inst_22851 = figwheel.client.file_reloading.eval_body.call(null,inst_22850,opts);
var inst_22852 = (inst_22845 + (1));
var tmp22984 = inst_22843;
var tmp22985 = inst_22842;
var tmp22986 = inst_22844;
var inst_22842__$1 = tmp22985;
var inst_22843__$1 = tmp22984;
var inst_22844__$1 = tmp22986;
var inst_22845__$1 = inst_22852;
var state_22982__$1 = (function (){var statearr_22987 = state_22982;
(statearr_22987[(7)] = inst_22843__$1);

(statearr_22987[(8)] = inst_22842__$1);

(statearr_22987[(11)] = inst_22851);

(statearr_22987[(9)] = inst_22845__$1);

(statearr_22987[(10)] = inst_22844__$1);

return statearr_22987;
})();
var statearr_22988_23071 = state_22982__$1;
(statearr_22988_23071[(2)] = null);

(statearr_22988_23071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (20))){
var inst_22885 = (state_22982[(12)]);
var inst_22893 = figwheel.client.file_reloading.sort_files.call(null,inst_22885);
var state_22982__$1 = state_22982;
var statearr_22989_23072 = state_22982__$1;
(statearr_22989_23072[(2)] = inst_22893);

(statearr_22989_23072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (27))){
var state_22982__$1 = state_22982;
var statearr_22990_23073 = state_22982__$1;
(statearr_22990_23073[(2)] = null);

(statearr_22990_23073[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (1))){
var inst_22834 = (state_22982[(13)]);
var inst_22831 = before_jsload.call(null,files);
var inst_22832 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22833 = (function (){return ((function (inst_22834,inst_22831,inst_22832,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22822_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22822_SHARP_);
});
;})(inst_22834,inst_22831,inst_22832,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22834__$1 = cljs.core.filter.call(null,inst_22833,files);
var inst_22835 = cljs.core.not_empty.call(null,inst_22834__$1);
var state_22982__$1 = (function (){var statearr_22991 = state_22982;
(statearr_22991[(14)] = inst_22832);

(statearr_22991[(15)] = inst_22831);

(statearr_22991[(13)] = inst_22834__$1);

return statearr_22991;
})();
if(cljs.core.truth_(inst_22835)){
var statearr_22992_23074 = state_22982__$1;
(statearr_22992_23074[(1)] = (2));

} else {
var statearr_22993_23075 = state_22982__$1;
(statearr_22993_23075[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (24))){
var state_22982__$1 = state_22982;
var statearr_22994_23076 = state_22982__$1;
(statearr_22994_23076[(2)] = null);

(statearr_22994_23076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (39))){
var inst_22935 = (state_22982[(16)]);
var state_22982__$1 = state_22982;
var statearr_22995_23077 = state_22982__$1;
(statearr_22995_23077[(2)] = inst_22935);

(statearr_22995_23077[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (46))){
var inst_22977 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_22996_23078 = state_22982__$1;
(statearr_22996_23078[(2)] = inst_22977);

(statearr_22996_23078[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (4))){
var inst_22879 = (state_22982[(2)]);
var inst_22880 = cljs.core.List.EMPTY;
var inst_22881 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22880);
var inst_22882 = (function (){return ((function (inst_22879,inst_22880,inst_22881,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22823_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22823_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22823_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__22823_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_22879,inst_22880,inst_22881,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22883 = cljs.core.filter.call(null,inst_22882,files);
var inst_22884 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22885 = cljs.core.concat.call(null,inst_22883,inst_22884);
var state_22982__$1 = (function (){var statearr_22997 = state_22982;
(statearr_22997[(17)] = inst_22881);

(statearr_22997[(12)] = inst_22885);

(statearr_22997[(18)] = inst_22879);

return statearr_22997;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22998_23079 = state_22982__$1;
(statearr_22998_23079[(1)] = (16));

} else {
var statearr_22999_23080 = state_22982__$1;
(statearr_22999_23080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (15))){
var inst_22869 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_23000_23081 = state_22982__$1;
(statearr_23000_23081[(2)] = inst_22869);

(statearr_23000_23081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (21))){
var inst_22895 = (state_22982[(19)]);
var inst_22895__$1 = (state_22982[(2)]);
var inst_22896 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22895__$1);
var state_22982__$1 = (function (){var statearr_23001 = state_22982;
(statearr_23001[(19)] = inst_22895__$1);

return statearr_23001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22982__$1,(22),inst_22896);
} else {
if((state_val_22983 === (31))){
var inst_22980 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22982__$1,inst_22980);
} else {
if((state_val_22983 === (32))){
var inst_22935 = (state_22982[(16)]);
var inst_22940 = inst_22935.cljs$lang$protocol_mask$partition0$;
var inst_22941 = (inst_22940 & (64));
var inst_22942 = inst_22935.cljs$core$ISeq$;
var inst_22943 = (cljs.core.PROTOCOL_SENTINEL === inst_22942);
var inst_22944 = (inst_22941) || (inst_22943);
var state_22982__$1 = state_22982;
if(cljs.core.truth_(inst_22944)){
var statearr_23002_23082 = state_22982__$1;
(statearr_23002_23082[(1)] = (35));

} else {
var statearr_23003_23083 = state_22982__$1;
(statearr_23003_23083[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (40))){
var inst_22957 = (state_22982[(20)]);
var inst_22956 = (state_22982[(2)]);
var inst_22957__$1 = cljs.core.get.call(null,inst_22956,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22958 = cljs.core.get.call(null,inst_22956,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22959 = cljs.core.not_empty.call(null,inst_22957__$1);
var state_22982__$1 = (function (){var statearr_23004 = state_22982;
(statearr_23004[(20)] = inst_22957__$1);

(statearr_23004[(21)] = inst_22958);

return statearr_23004;
})();
if(cljs.core.truth_(inst_22959)){
var statearr_23005_23084 = state_22982__$1;
(statearr_23005_23084[(1)] = (41));

} else {
var statearr_23006_23085 = state_22982__$1;
(statearr_23006_23085[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (33))){
var state_22982__$1 = state_22982;
var statearr_23007_23086 = state_22982__$1;
(statearr_23007_23086[(2)] = false);

(statearr_23007_23086[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (13))){
var inst_22855 = (state_22982[(22)]);
var inst_22859 = cljs.core.chunk_first.call(null,inst_22855);
var inst_22860 = cljs.core.chunk_rest.call(null,inst_22855);
var inst_22861 = cljs.core.count.call(null,inst_22859);
var inst_22842 = inst_22860;
var inst_22843 = inst_22859;
var inst_22844 = inst_22861;
var inst_22845 = (0);
var state_22982__$1 = (function (){var statearr_23008 = state_22982;
(statearr_23008[(7)] = inst_22843);

(statearr_23008[(8)] = inst_22842);

(statearr_23008[(9)] = inst_22845);

(statearr_23008[(10)] = inst_22844);

return statearr_23008;
})();
var statearr_23009_23087 = state_22982__$1;
(statearr_23009_23087[(2)] = null);

(statearr_23009_23087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (22))){
var inst_22903 = (state_22982[(23)]);
var inst_22899 = (state_22982[(24)]);
var inst_22898 = (state_22982[(25)]);
var inst_22895 = (state_22982[(19)]);
var inst_22898__$1 = (state_22982[(2)]);
var inst_22899__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22898__$1);
var inst_22900 = (function (){var all_files = inst_22895;
var res_SINGLEQUOTE_ = inst_22898__$1;
var res = inst_22899__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22903,inst_22899,inst_22898,inst_22895,inst_22898__$1,inst_22899__$1,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22824_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22824_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22903,inst_22899,inst_22898,inst_22895,inst_22898__$1,inst_22899__$1,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22901 = cljs.core.filter.call(null,inst_22900,inst_22898__$1);
var inst_22902 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22903__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22902);
var inst_22904 = cljs.core.not_empty.call(null,inst_22903__$1);
var state_22982__$1 = (function (){var statearr_23010 = state_22982;
(statearr_23010[(23)] = inst_22903__$1);

(statearr_23010[(26)] = inst_22901);

(statearr_23010[(24)] = inst_22899__$1);

(statearr_23010[(25)] = inst_22898__$1);

return statearr_23010;
})();
if(cljs.core.truth_(inst_22904)){
var statearr_23011_23088 = state_22982__$1;
(statearr_23011_23088[(1)] = (23));

} else {
var statearr_23012_23089 = state_22982__$1;
(statearr_23012_23089[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (36))){
var state_22982__$1 = state_22982;
var statearr_23013_23090 = state_22982__$1;
(statearr_23013_23090[(2)] = false);

(statearr_23013_23090[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (41))){
var inst_22957 = (state_22982[(20)]);
var inst_22961 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22962 = cljs.core.map.call(null,inst_22961,inst_22957);
var inst_22963 = cljs.core.pr_str.call(null,inst_22962);
var inst_22964 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22963)].join('');
var inst_22965 = figwheel.client.utils.log.call(null,inst_22964);
var state_22982__$1 = state_22982;
var statearr_23014_23091 = state_22982__$1;
(statearr_23014_23091[(2)] = inst_22965);

(statearr_23014_23091[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (43))){
var inst_22958 = (state_22982[(21)]);
var inst_22968 = (state_22982[(2)]);
var inst_22969 = cljs.core.not_empty.call(null,inst_22958);
var state_22982__$1 = (function (){var statearr_23015 = state_22982;
(statearr_23015[(27)] = inst_22968);

return statearr_23015;
})();
if(cljs.core.truth_(inst_22969)){
var statearr_23016_23092 = state_22982__$1;
(statearr_23016_23092[(1)] = (44));

} else {
var statearr_23017_23093 = state_22982__$1;
(statearr_23017_23093[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (29))){
var inst_22903 = (state_22982[(23)]);
var inst_22901 = (state_22982[(26)]);
var inst_22899 = (state_22982[(24)]);
var inst_22935 = (state_22982[(16)]);
var inst_22898 = (state_22982[(25)]);
var inst_22895 = (state_22982[(19)]);
var inst_22931 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22934 = (function (){var all_files = inst_22895;
var res_SINGLEQUOTE_ = inst_22898;
var res = inst_22899;
var files_not_loaded = inst_22901;
var dependencies_that_loaded = inst_22903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22903,inst_22901,inst_22899,inst_22935,inst_22898,inst_22895,inst_22931,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22933){
var map__23018 = p__22933;
var map__23018__$1 = ((((!((map__23018 == null)))?((((map__23018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23018):map__23018);
var namespace = cljs.core.get.call(null,map__23018__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22903,inst_22901,inst_22899,inst_22935,inst_22898,inst_22895,inst_22931,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22935__$1 = cljs.core.group_by.call(null,inst_22934,inst_22901);
var inst_22937 = (inst_22935__$1 == null);
var inst_22938 = cljs.core.not.call(null,inst_22937);
var state_22982__$1 = (function (){var statearr_23020 = state_22982;
(statearr_23020[(28)] = inst_22931);

(statearr_23020[(16)] = inst_22935__$1);

return statearr_23020;
})();
if(inst_22938){
var statearr_23021_23094 = state_22982__$1;
(statearr_23021_23094[(1)] = (32));

} else {
var statearr_23022_23095 = state_22982__$1;
(statearr_23022_23095[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (44))){
var inst_22958 = (state_22982[(21)]);
var inst_22971 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22958);
var inst_22972 = cljs.core.pr_str.call(null,inst_22971);
var inst_22973 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22972)].join('');
var inst_22974 = figwheel.client.utils.log.call(null,inst_22973);
var state_22982__$1 = state_22982;
var statearr_23023_23096 = state_22982__$1;
(statearr_23023_23096[(2)] = inst_22974);

(statearr_23023_23096[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (6))){
var inst_22876 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_23024_23097 = state_22982__$1;
(statearr_23024_23097[(2)] = inst_22876);

(statearr_23024_23097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (28))){
var inst_22901 = (state_22982[(26)]);
var inst_22928 = (state_22982[(2)]);
var inst_22929 = cljs.core.not_empty.call(null,inst_22901);
var state_22982__$1 = (function (){var statearr_23025 = state_22982;
(statearr_23025[(29)] = inst_22928);

return statearr_23025;
})();
if(cljs.core.truth_(inst_22929)){
var statearr_23026_23098 = state_22982__$1;
(statearr_23026_23098[(1)] = (29));

} else {
var statearr_23027_23099 = state_22982__$1;
(statearr_23027_23099[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (25))){
var inst_22899 = (state_22982[(24)]);
var inst_22915 = (state_22982[(2)]);
var inst_22916 = cljs.core.not_empty.call(null,inst_22899);
var state_22982__$1 = (function (){var statearr_23028 = state_22982;
(statearr_23028[(30)] = inst_22915);

return statearr_23028;
})();
if(cljs.core.truth_(inst_22916)){
var statearr_23029_23100 = state_22982__$1;
(statearr_23029_23100[(1)] = (26));

} else {
var statearr_23030_23101 = state_22982__$1;
(statearr_23030_23101[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (34))){
var inst_22951 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
if(cljs.core.truth_(inst_22951)){
var statearr_23031_23102 = state_22982__$1;
(statearr_23031_23102[(1)] = (38));

} else {
var statearr_23032_23103 = state_22982__$1;
(statearr_23032_23103[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (17))){
var state_22982__$1 = state_22982;
var statearr_23033_23104 = state_22982__$1;
(statearr_23033_23104[(2)] = recompile_dependents);

(statearr_23033_23104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (3))){
var state_22982__$1 = state_22982;
var statearr_23034_23105 = state_22982__$1;
(statearr_23034_23105[(2)] = null);

(statearr_23034_23105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (12))){
var inst_22872 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_23035_23106 = state_22982__$1;
(statearr_23035_23106[(2)] = inst_22872);

(statearr_23035_23106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (2))){
var inst_22834 = (state_22982[(13)]);
var inst_22841 = cljs.core.seq.call(null,inst_22834);
var inst_22842 = inst_22841;
var inst_22843 = null;
var inst_22844 = (0);
var inst_22845 = (0);
var state_22982__$1 = (function (){var statearr_23036 = state_22982;
(statearr_23036[(7)] = inst_22843);

(statearr_23036[(8)] = inst_22842);

(statearr_23036[(9)] = inst_22845);

(statearr_23036[(10)] = inst_22844);

return statearr_23036;
})();
var statearr_23037_23107 = state_22982__$1;
(statearr_23037_23107[(2)] = null);

(statearr_23037_23107[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (23))){
var inst_22903 = (state_22982[(23)]);
var inst_22901 = (state_22982[(26)]);
var inst_22899 = (state_22982[(24)]);
var inst_22898 = (state_22982[(25)]);
var inst_22895 = (state_22982[(19)]);
var inst_22906 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22908 = (function (){var all_files = inst_22895;
var res_SINGLEQUOTE_ = inst_22898;
var res = inst_22899;
var files_not_loaded = inst_22901;
var dependencies_that_loaded = inst_22903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22903,inst_22901,inst_22899,inst_22898,inst_22895,inst_22906,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22907){
var map__23038 = p__22907;
var map__23038__$1 = ((((!((map__23038 == null)))?((((map__23038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23038):map__23038);
var request_url = cljs.core.get.call(null,map__23038__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22903,inst_22901,inst_22899,inst_22898,inst_22895,inst_22906,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22909 = cljs.core.reverse.call(null,inst_22903);
var inst_22910 = cljs.core.map.call(null,inst_22908,inst_22909);
var inst_22911 = cljs.core.pr_str.call(null,inst_22910);
var inst_22912 = figwheel.client.utils.log.call(null,inst_22911);
var state_22982__$1 = (function (){var statearr_23040 = state_22982;
(statearr_23040[(31)] = inst_22906);

return statearr_23040;
})();
var statearr_23041_23108 = state_22982__$1;
(statearr_23041_23108[(2)] = inst_22912);

(statearr_23041_23108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (35))){
var state_22982__$1 = state_22982;
var statearr_23042_23109 = state_22982__$1;
(statearr_23042_23109[(2)] = true);

(statearr_23042_23109[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (19))){
var inst_22885 = (state_22982[(12)]);
var inst_22891 = figwheel.client.file_reloading.expand_files.call(null,inst_22885);
var state_22982__$1 = state_22982;
var statearr_23043_23110 = state_22982__$1;
(statearr_23043_23110[(2)] = inst_22891);

(statearr_23043_23110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (11))){
var state_22982__$1 = state_22982;
var statearr_23044_23111 = state_22982__$1;
(statearr_23044_23111[(2)] = null);

(statearr_23044_23111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (9))){
var inst_22874 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_23045_23112 = state_22982__$1;
(statearr_23045_23112[(2)] = inst_22874);

(statearr_23045_23112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (5))){
var inst_22845 = (state_22982[(9)]);
var inst_22844 = (state_22982[(10)]);
var inst_22847 = (inst_22845 < inst_22844);
var inst_22848 = inst_22847;
var state_22982__$1 = state_22982;
if(cljs.core.truth_(inst_22848)){
var statearr_23046_23113 = state_22982__$1;
(statearr_23046_23113[(1)] = (7));

} else {
var statearr_23047_23114 = state_22982__$1;
(statearr_23047_23114[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (14))){
var inst_22855 = (state_22982[(22)]);
var inst_22864 = cljs.core.first.call(null,inst_22855);
var inst_22865 = figwheel.client.file_reloading.eval_body.call(null,inst_22864,opts);
var inst_22866 = cljs.core.next.call(null,inst_22855);
var inst_22842 = inst_22866;
var inst_22843 = null;
var inst_22844 = (0);
var inst_22845 = (0);
var state_22982__$1 = (function (){var statearr_23048 = state_22982;
(statearr_23048[(7)] = inst_22843);

(statearr_23048[(32)] = inst_22865);

(statearr_23048[(8)] = inst_22842);

(statearr_23048[(9)] = inst_22845);

(statearr_23048[(10)] = inst_22844);

return statearr_23048;
})();
var statearr_23049_23115 = state_22982__$1;
(statearr_23049_23115[(2)] = null);

(statearr_23049_23115[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (45))){
var state_22982__$1 = state_22982;
var statearr_23050_23116 = state_22982__$1;
(statearr_23050_23116[(2)] = null);

(statearr_23050_23116[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (26))){
var inst_22903 = (state_22982[(23)]);
var inst_22901 = (state_22982[(26)]);
var inst_22899 = (state_22982[(24)]);
var inst_22898 = (state_22982[(25)]);
var inst_22895 = (state_22982[(19)]);
var inst_22918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22920 = (function (){var all_files = inst_22895;
var res_SINGLEQUOTE_ = inst_22898;
var res = inst_22899;
var files_not_loaded = inst_22901;
var dependencies_that_loaded = inst_22903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22903,inst_22901,inst_22899,inst_22898,inst_22895,inst_22918,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22919){
var map__23051 = p__22919;
var map__23051__$1 = ((((!((map__23051 == null)))?((((map__23051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23051):map__23051);
var namespace = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22903,inst_22901,inst_22899,inst_22898,inst_22895,inst_22918,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22921 = cljs.core.map.call(null,inst_22920,inst_22899);
var inst_22922 = cljs.core.pr_str.call(null,inst_22921);
var inst_22923 = figwheel.client.utils.log.call(null,inst_22922);
var inst_22924 = (function (){var all_files = inst_22895;
var res_SINGLEQUOTE_ = inst_22898;
var res = inst_22899;
var files_not_loaded = inst_22901;
var dependencies_that_loaded = inst_22903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22903,inst_22901,inst_22899,inst_22898,inst_22895,inst_22918,inst_22920,inst_22921,inst_22922,inst_22923,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22903,inst_22901,inst_22899,inst_22898,inst_22895,inst_22918,inst_22920,inst_22921,inst_22922,inst_22923,state_val_22983,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22925 = setTimeout(inst_22924,(10));
var state_22982__$1 = (function (){var statearr_23053 = state_22982;
(statearr_23053[(33)] = inst_22923);

(statearr_23053[(34)] = inst_22918);

return statearr_23053;
})();
var statearr_23054_23117 = state_22982__$1;
(statearr_23054_23117[(2)] = inst_22925);

(statearr_23054_23117[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (16))){
var state_22982__$1 = state_22982;
var statearr_23055_23118 = state_22982__$1;
(statearr_23055_23118[(2)] = reload_dependents);

(statearr_23055_23118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (38))){
var inst_22935 = (state_22982[(16)]);
var inst_22953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22935);
var state_22982__$1 = state_22982;
var statearr_23056_23119 = state_22982__$1;
(statearr_23056_23119[(2)] = inst_22953);

(statearr_23056_23119[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (30))){
var state_22982__$1 = state_22982;
var statearr_23057_23120 = state_22982__$1;
(statearr_23057_23120[(2)] = null);

(statearr_23057_23120[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (10))){
var inst_22855 = (state_22982[(22)]);
var inst_22857 = cljs.core.chunked_seq_QMARK_.call(null,inst_22855);
var state_22982__$1 = state_22982;
if(inst_22857){
var statearr_23058_23121 = state_22982__$1;
(statearr_23058_23121[(1)] = (13));

} else {
var statearr_23059_23122 = state_22982__$1;
(statearr_23059_23122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (18))){
var inst_22889 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
if(cljs.core.truth_(inst_22889)){
var statearr_23060_23123 = state_22982__$1;
(statearr_23060_23123[(1)] = (19));

} else {
var statearr_23061_23124 = state_22982__$1;
(statearr_23061_23124[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (42))){
var state_22982__$1 = state_22982;
var statearr_23062_23125 = state_22982__$1;
(statearr_23062_23125[(2)] = null);

(statearr_23062_23125[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (37))){
var inst_22948 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_23063_23126 = state_22982__$1;
(statearr_23063_23126[(2)] = inst_22948);

(statearr_23063_23126[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (8))){
var inst_22842 = (state_22982[(8)]);
var inst_22855 = (state_22982[(22)]);
var inst_22855__$1 = cljs.core.seq.call(null,inst_22842);
var state_22982__$1 = (function (){var statearr_23064 = state_22982;
(statearr_23064[(22)] = inst_22855__$1);

return statearr_23064;
})();
if(inst_22855__$1){
var statearr_23065_23127 = state_22982__$1;
(statearr_23065_23127[(1)] = (10));

} else {
var statearr_23066_23128 = state_22982__$1;
(statearr_23066_23128[(1)] = (11));

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
});})(c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__17843__auto__,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto____0 = (function (){
var statearr_23067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23067[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto__);

(statearr_23067[(1)] = (1));

return statearr_23067;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto____1 = (function (state_22982){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_22982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e23068){if((e23068 instanceof Object)){
var ex__17847__auto__ = e23068;
var statearr_23069_23129 = state_22982;
(statearr_23069_23129[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23130 = state_22982;
state_22982 = G__23130;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto__ = function(state_22982){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto____1.call(this,state_22982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__17935__auto__ = (function (){var statearr_23070 = f__17934__auto__.call(null);
(statearr_23070[(6)] = c__17933__auto__);

return statearr_23070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__,map__22827,map__22827__$1,opts,before_jsload,on_jsload,reload_dependents,map__22828,map__22828__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__17933__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23133,link){
var map__23134 = p__23133;
var map__23134__$1 = ((((!((map__23134 == null)))?((((map__23134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23134):map__23134);
var file = cljs.core.get.call(null,map__23134__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__23134,map__23134__$1,file){
return (function (p1__23131_SHARP_,p2__23132_SHARP_){
if(cljs.core._EQ_.call(null,p1__23131_SHARP_,p2__23132_SHARP_)){
return p1__23131_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__23134,map__23134__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23137){
var map__23138 = p__23137;
var map__23138__$1 = ((((!((map__23138 == null)))?((((map__23138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23138):map__23138);
var match_length = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23136_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23136_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23140_SHARP_,p2__23141_SHARP_){
return cljs.core.assoc.call(null,p1__23140_SHARP_,cljs.core.get.call(null,p2__23141_SHARP_,key),p2__23141_SHARP_);
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
var loaded_f_datas_23142 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_23142);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_23142);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23143,p__23144){
var map__23145 = p__23143;
var map__23145__$1 = ((((!((map__23145 == null)))?((((map__23145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23145):map__23145);
var on_cssload = cljs.core.get.call(null,map__23145__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__23146 = p__23144;
var map__23146__$1 = ((((!((map__23146 == null)))?((((map__23146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23146):map__23146);
var files_msg = map__23146__$1;
var files = cljs.core.get.call(null,map__23146__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1504894096058
