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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__14526_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__14526_SHARP_));
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
var seq__14527 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__14528 = null;
var count__14529 = (0);
var i__14530 = (0);
while(true){
if((i__14530 < count__14529)){
var n = cljs.core._nth.call(null,chunk__14528,i__14530);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__14531 = seq__14527;
var G__14532 = chunk__14528;
var G__14533 = count__14529;
var G__14534 = (i__14530 + (1));
seq__14527 = G__14531;
chunk__14528 = G__14532;
count__14529 = G__14533;
i__14530 = G__14534;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__14527);
if(temp__6738__auto__){
var seq__14527__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14527__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__14527__$1);
var G__14535 = cljs.core.chunk_rest.call(null,seq__14527__$1);
var G__14536 = c__10741__auto__;
var G__14537 = cljs.core.count.call(null,c__10741__auto__);
var G__14538 = (0);
seq__14527 = G__14535;
chunk__14528 = G__14536;
count__14529 = G__14537;
i__14530 = G__14538;
continue;
} else {
var n = cljs.core.first.call(null,seq__14527__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__14539 = cljs.core.next.call(null,seq__14527__$1);
var G__14540 = null;
var G__14541 = (0);
var G__14542 = (0);
seq__14527 = G__14539;
chunk__14528 = G__14540;
count__14529 = G__14541;
i__14530 = G__14542;
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

var seq__14552_14560 = cljs.core.seq.call(null,deps);
var chunk__14553_14561 = null;
var count__14554_14562 = (0);
var i__14555_14563 = (0);
while(true){
if((i__14555_14563 < count__14554_14562)){
var dep_14564 = cljs.core._nth.call(null,chunk__14553_14561,i__14555_14563);
topo_sort_helper_STAR_.call(null,dep_14564,(depth + (1)),state);

var G__14565 = seq__14552_14560;
var G__14566 = chunk__14553_14561;
var G__14567 = count__14554_14562;
var G__14568 = (i__14555_14563 + (1));
seq__14552_14560 = G__14565;
chunk__14553_14561 = G__14566;
count__14554_14562 = G__14567;
i__14555_14563 = G__14568;
continue;
} else {
var temp__6738__auto___14569 = cljs.core.seq.call(null,seq__14552_14560);
if(temp__6738__auto___14569){
var seq__14552_14570__$1 = temp__6738__auto___14569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14552_14570__$1)){
var c__10741__auto___14571 = cljs.core.chunk_first.call(null,seq__14552_14570__$1);
var G__14572 = cljs.core.chunk_rest.call(null,seq__14552_14570__$1);
var G__14573 = c__10741__auto___14571;
var G__14574 = cljs.core.count.call(null,c__10741__auto___14571);
var G__14575 = (0);
seq__14552_14560 = G__14572;
chunk__14553_14561 = G__14573;
count__14554_14562 = G__14574;
i__14555_14563 = G__14575;
continue;
} else {
var dep_14576 = cljs.core.first.call(null,seq__14552_14570__$1);
topo_sort_helper_STAR_.call(null,dep_14576,(depth + (1)),state);

var G__14577 = cljs.core.next.call(null,seq__14552_14570__$1);
var G__14578 = null;
var G__14579 = (0);
var G__14580 = (0);
seq__14552_14560 = G__14577;
chunk__14553_14561 = G__14578;
count__14554_14562 = G__14579;
i__14555_14563 = G__14580;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__14556){
var vec__14557 = p__14556;
var seq__14558 = cljs.core.seq.call(null,vec__14557);
var first__14559 = cljs.core.first.call(null,seq__14558);
var seq__14558__$1 = cljs.core.next.call(null,seq__14558);
var x = first__14559;
var xs = seq__14558__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__14557,seq__14558,first__14559,seq__14558__$1,x,xs,get_deps__$1){
return (function (p1__14543_SHARP_){
return clojure.set.difference.call(null,p1__14543_SHARP_,x);
});})(vec__14557,seq__14558,first__14559,seq__14558__$1,x,xs,get_deps__$1))
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
var seq__14581 = cljs.core.seq.call(null,provides);
var chunk__14582 = null;
var count__14583 = (0);
var i__14584 = (0);
while(true){
if((i__14584 < count__14583)){
var prov = cljs.core._nth.call(null,chunk__14582,i__14584);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14585_14593 = cljs.core.seq.call(null,requires);
var chunk__14586_14594 = null;
var count__14587_14595 = (0);
var i__14588_14596 = (0);
while(true){
if((i__14588_14596 < count__14587_14595)){
var req_14597 = cljs.core._nth.call(null,chunk__14586_14594,i__14588_14596);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14597,prov);

var G__14598 = seq__14585_14593;
var G__14599 = chunk__14586_14594;
var G__14600 = count__14587_14595;
var G__14601 = (i__14588_14596 + (1));
seq__14585_14593 = G__14598;
chunk__14586_14594 = G__14599;
count__14587_14595 = G__14600;
i__14588_14596 = G__14601;
continue;
} else {
var temp__6738__auto___14602 = cljs.core.seq.call(null,seq__14585_14593);
if(temp__6738__auto___14602){
var seq__14585_14603__$1 = temp__6738__auto___14602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14585_14603__$1)){
var c__10741__auto___14604 = cljs.core.chunk_first.call(null,seq__14585_14603__$1);
var G__14605 = cljs.core.chunk_rest.call(null,seq__14585_14603__$1);
var G__14606 = c__10741__auto___14604;
var G__14607 = cljs.core.count.call(null,c__10741__auto___14604);
var G__14608 = (0);
seq__14585_14593 = G__14605;
chunk__14586_14594 = G__14606;
count__14587_14595 = G__14607;
i__14588_14596 = G__14608;
continue;
} else {
var req_14609 = cljs.core.first.call(null,seq__14585_14603__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14609,prov);

var G__14610 = cljs.core.next.call(null,seq__14585_14603__$1);
var G__14611 = null;
var G__14612 = (0);
var G__14613 = (0);
seq__14585_14593 = G__14610;
chunk__14586_14594 = G__14611;
count__14587_14595 = G__14612;
i__14588_14596 = G__14613;
continue;
}
} else {
}
}
break;
}

var G__14614 = seq__14581;
var G__14615 = chunk__14582;
var G__14616 = count__14583;
var G__14617 = (i__14584 + (1));
seq__14581 = G__14614;
chunk__14582 = G__14615;
count__14583 = G__14616;
i__14584 = G__14617;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__14581);
if(temp__6738__auto__){
var seq__14581__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14581__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__14581__$1);
var G__14618 = cljs.core.chunk_rest.call(null,seq__14581__$1);
var G__14619 = c__10741__auto__;
var G__14620 = cljs.core.count.call(null,c__10741__auto__);
var G__14621 = (0);
seq__14581 = G__14618;
chunk__14582 = G__14619;
count__14583 = G__14620;
i__14584 = G__14621;
continue;
} else {
var prov = cljs.core.first.call(null,seq__14581__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14589_14622 = cljs.core.seq.call(null,requires);
var chunk__14590_14623 = null;
var count__14591_14624 = (0);
var i__14592_14625 = (0);
while(true){
if((i__14592_14625 < count__14591_14624)){
var req_14626 = cljs.core._nth.call(null,chunk__14590_14623,i__14592_14625);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14626,prov);

var G__14627 = seq__14589_14622;
var G__14628 = chunk__14590_14623;
var G__14629 = count__14591_14624;
var G__14630 = (i__14592_14625 + (1));
seq__14589_14622 = G__14627;
chunk__14590_14623 = G__14628;
count__14591_14624 = G__14629;
i__14592_14625 = G__14630;
continue;
} else {
var temp__6738__auto___14631__$1 = cljs.core.seq.call(null,seq__14589_14622);
if(temp__6738__auto___14631__$1){
var seq__14589_14632__$1 = temp__6738__auto___14631__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14589_14632__$1)){
var c__10741__auto___14633 = cljs.core.chunk_first.call(null,seq__14589_14632__$1);
var G__14634 = cljs.core.chunk_rest.call(null,seq__14589_14632__$1);
var G__14635 = c__10741__auto___14633;
var G__14636 = cljs.core.count.call(null,c__10741__auto___14633);
var G__14637 = (0);
seq__14589_14622 = G__14634;
chunk__14590_14623 = G__14635;
count__14591_14624 = G__14636;
i__14592_14625 = G__14637;
continue;
} else {
var req_14638 = cljs.core.first.call(null,seq__14589_14632__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14638,prov);

var G__14639 = cljs.core.next.call(null,seq__14589_14632__$1);
var G__14640 = null;
var G__14641 = (0);
var G__14642 = (0);
seq__14589_14622 = G__14639;
chunk__14590_14623 = G__14640;
count__14591_14624 = G__14641;
i__14592_14625 = G__14642;
continue;
}
} else {
}
}
break;
}

var G__14643 = cljs.core.next.call(null,seq__14581__$1);
var G__14644 = null;
var G__14645 = (0);
var G__14646 = (0);
seq__14581 = G__14643;
chunk__14582 = G__14644;
count__14583 = G__14645;
i__14584 = G__14646;
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
var seq__14647_14651 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__14648_14652 = null;
var count__14649_14653 = (0);
var i__14650_14654 = (0);
while(true){
if((i__14650_14654 < count__14649_14653)){
var ns_14655 = cljs.core._nth.call(null,chunk__14648_14652,i__14650_14654);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14655);

var G__14656 = seq__14647_14651;
var G__14657 = chunk__14648_14652;
var G__14658 = count__14649_14653;
var G__14659 = (i__14650_14654 + (1));
seq__14647_14651 = G__14656;
chunk__14648_14652 = G__14657;
count__14649_14653 = G__14658;
i__14650_14654 = G__14659;
continue;
} else {
var temp__6738__auto___14660 = cljs.core.seq.call(null,seq__14647_14651);
if(temp__6738__auto___14660){
var seq__14647_14661__$1 = temp__6738__auto___14660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14647_14661__$1)){
var c__10741__auto___14662 = cljs.core.chunk_first.call(null,seq__14647_14661__$1);
var G__14663 = cljs.core.chunk_rest.call(null,seq__14647_14661__$1);
var G__14664 = c__10741__auto___14662;
var G__14665 = cljs.core.count.call(null,c__10741__auto___14662);
var G__14666 = (0);
seq__14647_14651 = G__14663;
chunk__14648_14652 = G__14664;
count__14649_14653 = G__14665;
i__14650_14654 = G__14666;
continue;
} else {
var ns_14667 = cljs.core.first.call(null,seq__14647_14661__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14667);

var G__14668 = cljs.core.next.call(null,seq__14647_14661__$1);
var G__14669 = null;
var G__14670 = (0);
var G__14671 = (0);
seq__14647_14651 = G__14668;
chunk__14648_14652 = G__14669;
count__14649_14653 = G__14670;
i__14650_14654 = G__14671;
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
var G__14672__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__14672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14673__i = 0, G__14673__a = new Array(arguments.length -  0);
while (G__14673__i < G__14673__a.length) {G__14673__a[G__14673__i] = arguments[G__14673__i + 0]; ++G__14673__i;}
  args = new cljs.core.IndexedSeq(G__14673__a,0,null);
} 
return G__14672__delegate.call(this,args);};
G__14672.cljs$lang$maxFixedArity = 0;
G__14672.cljs$lang$applyTo = (function (arglist__14674){
var args = cljs.core.seq(arglist__14674);
return G__14672__delegate(args);
});
G__14672.cljs$core$IFn$_invoke$arity$variadic = G__14672__delegate;
return G__14672;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__14675_SHARP_,p2__14676_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14675_SHARP_)].join('')),p2__14676_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__14677_SHARP_,p2__14678_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14677_SHARP_)].join(''),p2__14678_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__14679 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__14679.addCallback(((function (G__14679){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__14679))
);

G__14679.addErrback(((function (G__14679){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__14679))
);

return G__14679;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__14680 = cljs.core._EQ_;
var expr__14681 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__14680.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__14681))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__14680,expr__14681){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__14680,expr__14681))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__14680,expr__14681){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e14683){if((e14683 instanceof Error)){
var e = e14683;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14683;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__14680,expr__14681))
} else {
if(cljs.core.truth_(pred__14680.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__14681))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__14680.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__14681))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__14680.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__14681))){
return ((function (pred__14680,expr__14681){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e14684){if((e14684 instanceof Error)){
var e = e14684;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14684;

}
}})());
});
;})(pred__14680,expr__14681))
} else {
return ((function (pred__14680,expr__14681){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__14680,expr__14681))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__14685,callback){
var map__14686 = p__14685;
var map__14686__$1 = ((((!((map__14686 == null)))?((((map__14686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14686):map__14686);
var file_msg = map__14686__$1;
var request_url = cljs.core.get.call(null,map__14686__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__14686,map__14686__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__14686,map__14686__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__13770__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13770__auto__){
return (function (){
var f__13771__auto__ = (function (){var switch__13747__auto__ = ((function (c__13770__auto__){
return (function (state_14710){
var state_val_14711 = (state_14710[(1)]);
if((state_val_14711 === (7))){
var inst_14706 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14712_14729 = state_14710__$1;
(statearr_14712_14729[(2)] = inst_14706);

(statearr_14712_14729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (1))){
var state_14710__$1 = state_14710;
var statearr_14713_14730 = state_14710__$1;
(statearr_14713_14730[(2)] = null);

(statearr_14713_14730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (4))){
var inst_14690 = (state_14710[(7)]);
var inst_14690__$1 = (state_14710[(2)]);
var state_14710__$1 = (function (){var statearr_14714 = state_14710;
(statearr_14714[(7)] = inst_14690__$1);

return statearr_14714;
})();
if(cljs.core.truth_(inst_14690__$1)){
var statearr_14715_14731 = state_14710__$1;
(statearr_14715_14731[(1)] = (5));

} else {
var statearr_14716_14732 = state_14710__$1;
(statearr_14716_14732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (6))){
var state_14710__$1 = state_14710;
var statearr_14717_14733 = state_14710__$1;
(statearr_14717_14733[(2)] = null);

(statearr_14717_14733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (3))){
var inst_14708 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14710__$1,inst_14708);
} else {
if((state_val_14711 === (2))){
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14710__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_14711 === (11))){
var inst_14702 = (state_14710[(2)]);
var state_14710__$1 = (function (){var statearr_14718 = state_14710;
(statearr_14718[(8)] = inst_14702);

return statearr_14718;
})();
var statearr_14719_14734 = state_14710__$1;
(statearr_14719_14734[(2)] = null);

(statearr_14719_14734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (9))){
var inst_14696 = (state_14710[(9)]);
var inst_14694 = (state_14710[(10)]);
var inst_14698 = inst_14696.call(null,inst_14694);
var state_14710__$1 = state_14710;
var statearr_14720_14735 = state_14710__$1;
(statearr_14720_14735[(2)] = inst_14698);

(statearr_14720_14735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (5))){
var inst_14690 = (state_14710[(7)]);
var inst_14692 = figwheel.client.file_reloading.blocking_load.call(null,inst_14690);
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14710__$1,(8),inst_14692);
} else {
if((state_val_14711 === (10))){
var inst_14694 = (state_14710[(10)]);
var inst_14700 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_14694);
var state_14710__$1 = state_14710;
var statearr_14721_14736 = state_14710__$1;
(statearr_14721_14736[(2)] = inst_14700);

(statearr_14721_14736[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (8))){
var inst_14696 = (state_14710[(9)]);
var inst_14690 = (state_14710[(7)]);
var inst_14694 = (state_14710[(2)]);
var inst_14695 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_14696__$1 = cljs.core.get.call(null,inst_14695,inst_14690);
var state_14710__$1 = (function (){var statearr_14722 = state_14710;
(statearr_14722[(9)] = inst_14696__$1);

(statearr_14722[(10)] = inst_14694);

return statearr_14722;
})();
if(cljs.core.truth_(inst_14696__$1)){
var statearr_14723_14737 = state_14710__$1;
(statearr_14723_14737[(1)] = (9));

} else {
var statearr_14724_14738 = state_14710__$1;
(statearr_14724_14738[(1)] = (10));

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
});})(c__13770__auto__))
;
return ((function (switch__13747__auto__,c__13770__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__13748__auto__ = null;
var figwheel$client$file_reloading$state_machine__13748__auto____0 = (function (){
var statearr_14725 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14725[(0)] = figwheel$client$file_reloading$state_machine__13748__auto__);

(statearr_14725[(1)] = (1));

return statearr_14725;
});
var figwheel$client$file_reloading$state_machine__13748__auto____1 = (function (state_14710){
while(true){
var ret_value__13749__auto__ = (function (){try{while(true){
var result__13750__auto__ = switch__13747__auto__.call(null,state_14710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13750__auto__;
}
break;
}
}catch (e14726){if((e14726 instanceof Object)){
var ex__13751__auto__ = e14726;
var statearr_14727_14739 = state_14710;
(statearr_14727_14739[(5)] = ex__13751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14740 = state_14710;
state_14710 = G__14740;
continue;
} else {
return ret_value__13749__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__13748__auto__ = function(state_14710){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__13748__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__13748__auto____1.call(this,state_14710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__13748__auto____0;
figwheel$client$file_reloading$state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__13748__auto____1;
return figwheel$client$file_reloading$state_machine__13748__auto__;
})()
;})(switch__13747__auto__,c__13770__auto__))
})();
var state__13772__auto__ = (function (){var statearr_14728 = f__13771__auto__.call(null);
(statearr_14728[(6)] = c__13770__auto__);

return statearr_14728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13772__auto__);
});})(c__13770__auto__))
);

return c__13770__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__14741,callback){
var map__14742 = p__14741;
var map__14742__$1 = ((((!((map__14742 == null)))?((((map__14742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14742):map__14742);
var file_msg = map__14742__$1;
var namespace = cljs.core.get.call(null,map__14742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__14742,map__14742__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__14742,map__14742__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__14744){
var map__14745 = p__14744;
var map__14745__$1 = ((((!((map__14745 == null)))?((((map__14745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14745):map__14745);
var file_msg = map__14745__$1;
var namespace = cljs.core.get.call(null,map__14745__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__14747){
var map__14748 = p__14747;
var map__14748__$1 = ((((!((map__14748 == null)))?((((map__14748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14748):map__14748);
var file_msg = map__14748__$1;
var namespace = cljs.core.get.call(null,map__14748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__14750,callback){
var map__14751 = p__14750;
var map__14751__$1 = ((((!((map__14751 == null)))?((((map__14751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14751):map__14751);
var file_msg = map__14751__$1;
var request_url = cljs.core.get.call(null,map__14751__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__14751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__13770__auto___14801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13770__auto___14801,out){
return (function (){
var f__13771__auto__ = (function (){var switch__13747__auto__ = ((function (c__13770__auto___14801,out){
return (function (state_14786){
var state_val_14787 = (state_14786[(1)]);
if((state_val_14787 === (1))){
var inst_14760 = cljs.core.seq.call(null,files);
var inst_14761 = cljs.core.first.call(null,inst_14760);
var inst_14762 = cljs.core.next.call(null,inst_14760);
var inst_14763 = files;
var state_14786__$1 = (function (){var statearr_14788 = state_14786;
(statearr_14788[(7)] = inst_14762);

(statearr_14788[(8)] = inst_14761);

(statearr_14788[(9)] = inst_14763);

return statearr_14788;
})();
var statearr_14789_14802 = state_14786__$1;
(statearr_14789_14802[(2)] = null);

(statearr_14789_14802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (2))){
var inst_14769 = (state_14786[(10)]);
var inst_14763 = (state_14786[(9)]);
var inst_14768 = cljs.core.seq.call(null,inst_14763);
var inst_14769__$1 = cljs.core.first.call(null,inst_14768);
var inst_14770 = cljs.core.next.call(null,inst_14768);
var inst_14771 = (inst_14769__$1 == null);
var inst_14772 = cljs.core.not.call(null,inst_14771);
var state_14786__$1 = (function (){var statearr_14790 = state_14786;
(statearr_14790[(10)] = inst_14769__$1);

(statearr_14790[(11)] = inst_14770);

return statearr_14790;
})();
if(inst_14772){
var statearr_14791_14803 = state_14786__$1;
(statearr_14791_14803[(1)] = (4));

} else {
var statearr_14792_14804 = state_14786__$1;
(statearr_14792_14804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (3))){
var inst_14784 = (state_14786[(2)]);
var state_14786__$1 = state_14786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14786__$1,inst_14784);
} else {
if((state_val_14787 === (4))){
var inst_14769 = (state_14786[(10)]);
var inst_14774 = figwheel.client.file_reloading.reload_js_file.call(null,inst_14769);
var state_14786__$1 = state_14786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14786__$1,(7),inst_14774);
} else {
if((state_val_14787 === (5))){
var inst_14780 = cljs.core.async.close_BANG_.call(null,out);
var state_14786__$1 = state_14786;
var statearr_14793_14805 = state_14786__$1;
(statearr_14793_14805[(2)] = inst_14780);

(statearr_14793_14805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (6))){
var inst_14782 = (state_14786[(2)]);
var state_14786__$1 = state_14786;
var statearr_14794_14806 = state_14786__$1;
(statearr_14794_14806[(2)] = inst_14782);

(statearr_14794_14806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (7))){
var inst_14770 = (state_14786[(11)]);
var inst_14776 = (state_14786[(2)]);
var inst_14777 = cljs.core.async.put_BANG_.call(null,out,inst_14776);
var inst_14763 = inst_14770;
var state_14786__$1 = (function (){var statearr_14795 = state_14786;
(statearr_14795[(12)] = inst_14777);

(statearr_14795[(9)] = inst_14763);

return statearr_14795;
})();
var statearr_14796_14807 = state_14786__$1;
(statearr_14796_14807[(2)] = null);

(statearr_14796_14807[(1)] = (2));


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
});})(c__13770__auto___14801,out))
;
return ((function (switch__13747__auto__,c__13770__auto___14801,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto____0 = (function (){
var statearr_14797 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14797[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto__);

(statearr_14797[(1)] = (1));

return statearr_14797;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto____1 = (function (state_14786){
while(true){
var ret_value__13749__auto__ = (function (){try{while(true){
var result__13750__auto__ = switch__13747__auto__.call(null,state_14786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13750__auto__;
}
break;
}
}catch (e14798){if((e14798 instanceof Object)){
var ex__13751__auto__ = e14798;
var statearr_14799_14808 = state_14786;
(statearr_14799_14808[(5)] = ex__13751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14809 = state_14786;
state_14786 = G__14809;
continue;
} else {
return ret_value__13749__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto__ = function(state_14786){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto____1.call(this,state_14786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13748__auto__;
})()
;})(switch__13747__auto__,c__13770__auto___14801,out))
})();
var state__13772__auto__ = (function (){var statearr_14800 = f__13771__auto__.call(null);
(statearr_14800[(6)] = c__13770__auto___14801);

return statearr_14800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13772__auto__);
});})(c__13770__auto___14801,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__14810,opts){
var map__14811 = p__14810;
var map__14811__$1 = ((((!((map__14811 == null)))?((((map__14811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14811):map__14811);
var eval_body = cljs.core.get.call(null,map__14811__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__14811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e14813){var e = e14813;
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
return (function (p1__14814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14814_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__14815){
var vec__14816 = p__14815;
var k = cljs.core.nth.call(null,vec__14816,(0),null);
var v = cljs.core.nth.call(null,vec__14816,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__14819){
var vec__14820 = p__14819;
var k = cljs.core.nth.call(null,vec__14820,(0),null);
var v = cljs.core.nth.call(null,vec__14820,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__14826,p__14827){
var map__14828 = p__14826;
var map__14828__$1 = ((((!((map__14828 == null)))?((((map__14828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14828):map__14828);
var opts = map__14828__$1;
var before_jsload = cljs.core.get.call(null,map__14828__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__14828__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__14828__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__14829 = p__14827;
var map__14829__$1 = ((((!((map__14829 == null)))?((((map__14829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14829):map__14829);
var msg = map__14829__$1;
var files = cljs.core.get.call(null,map__14829__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__14829__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__14829__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__13770__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__13771__auto__ = (function (){var switch__13747__auto__ = ((function (c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_14983){
var state_val_14984 = (state_14983[(1)]);
if((state_val_14984 === (7))){
var inst_14844 = (state_14983[(7)]);
var inst_14846 = (state_14983[(8)]);
var inst_14843 = (state_14983[(9)]);
var inst_14845 = (state_14983[(10)]);
var inst_14851 = cljs.core._nth.call(null,inst_14844,inst_14846);
var inst_14852 = figwheel.client.file_reloading.eval_body.call(null,inst_14851,opts);
var inst_14853 = (inst_14846 + (1));
var tmp14985 = inst_14844;
var tmp14986 = inst_14843;
var tmp14987 = inst_14845;
var inst_14843__$1 = tmp14986;
var inst_14844__$1 = tmp14985;
var inst_14845__$1 = tmp14987;
var inst_14846__$1 = inst_14853;
var state_14983__$1 = (function (){var statearr_14988 = state_14983;
(statearr_14988[(7)] = inst_14844__$1);

(statearr_14988[(8)] = inst_14846__$1);

(statearr_14988[(9)] = inst_14843__$1);

(statearr_14988[(10)] = inst_14845__$1);

(statearr_14988[(11)] = inst_14852);

return statearr_14988;
})();
var statearr_14989_15072 = state_14983__$1;
(statearr_14989_15072[(2)] = null);

(statearr_14989_15072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (20))){
var inst_14886 = (state_14983[(12)]);
var inst_14894 = figwheel.client.file_reloading.sort_files.call(null,inst_14886);
var state_14983__$1 = state_14983;
var statearr_14990_15073 = state_14983__$1;
(statearr_14990_15073[(2)] = inst_14894);

(statearr_14990_15073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (27))){
var state_14983__$1 = state_14983;
var statearr_14991_15074 = state_14983__$1;
(statearr_14991_15074[(2)] = null);

(statearr_14991_15074[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (1))){
var inst_14835 = (state_14983[(13)]);
var inst_14832 = before_jsload.call(null,files);
var inst_14833 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_14834 = (function (){return ((function (inst_14835,inst_14832,inst_14833,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14823_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14823_SHARP_);
});
;})(inst_14835,inst_14832,inst_14833,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14835__$1 = cljs.core.filter.call(null,inst_14834,files);
var inst_14836 = cljs.core.not_empty.call(null,inst_14835__$1);
var state_14983__$1 = (function (){var statearr_14992 = state_14983;
(statearr_14992[(13)] = inst_14835__$1);

(statearr_14992[(14)] = inst_14832);

(statearr_14992[(15)] = inst_14833);

return statearr_14992;
})();
if(cljs.core.truth_(inst_14836)){
var statearr_14993_15075 = state_14983__$1;
(statearr_14993_15075[(1)] = (2));

} else {
var statearr_14994_15076 = state_14983__$1;
(statearr_14994_15076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (24))){
var state_14983__$1 = state_14983;
var statearr_14995_15077 = state_14983__$1;
(statearr_14995_15077[(2)] = null);

(statearr_14995_15077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (39))){
var inst_14936 = (state_14983[(16)]);
var state_14983__$1 = state_14983;
var statearr_14996_15078 = state_14983__$1;
(statearr_14996_15078[(2)] = inst_14936);

(statearr_14996_15078[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (46))){
var inst_14978 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
var statearr_14997_15079 = state_14983__$1;
(statearr_14997_15079[(2)] = inst_14978);

(statearr_14997_15079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (4))){
var inst_14880 = (state_14983[(2)]);
var inst_14881 = cljs.core.List.EMPTY;
var inst_14882 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_14881);
var inst_14883 = (function (){return ((function (inst_14880,inst_14881,inst_14882,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14824_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14824_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14824_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__14824_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_14880,inst_14881,inst_14882,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14884 = cljs.core.filter.call(null,inst_14883,files);
var inst_14885 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_14886 = cljs.core.concat.call(null,inst_14884,inst_14885);
var state_14983__$1 = (function (){var statearr_14998 = state_14983;
(statearr_14998[(12)] = inst_14886);

(statearr_14998[(17)] = inst_14882);

(statearr_14998[(18)] = inst_14880);

return statearr_14998;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_14999_15080 = state_14983__$1;
(statearr_14999_15080[(1)] = (16));

} else {
var statearr_15000_15081 = state_14983__$1;
(statearr_15000_15081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (15))){
var inst_14870 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
var statearr_15001_15082 = state_14983__$1;
(statearr_15001_15082[(2)] = inst_14870);

(statearr_15001_15082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (21))){
var inst_14896 = (state_14983[(19)]);
var inst_14896__$1 = (state_14983[(2)]);
var inst_14897 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14896__$1);
var state_14983__$1 = (function (){var statearr_15002 = state_14983;
(statearr_15002[(19)] = inst_14896__$1);

return statearr_15002;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14983__$1,(22),inst_14897);
} else {
if((state_val_14984 === (31))){
var inst_14981 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14983__$1,inst_14981);
} else {
if((state_val_14984 === (32))){
var inst_14936 = (state_14983[(16)]);
var inst_14941 = inst_14936.cljs$lang$protocol_mask$partition0$;
var inst_14942 = (inst_14941 & (64));
var inst_14943 = inst_14936.cljs$core$ISeq$;
var inst_14944 = (cljs.core.PROTOCOL_SENTINEL === inst_14943);
var inst_14945 = (inst_14942) || (inst_14944);
var state_14983__$1 = state_14983;
if(cljs.core.truth_(inst_14945)){
var statearr_15003_15083 = state_14983__$1;
(statearr_15003_15083[(1)] = (35));

} else {
var statearr_15004_15084 = state_14983__$1;
(statearr_15004_15084[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (40))){
var inst_14958 = (state_14983[(20)]);
var inst_14957 = (state_14983[(2)]);
var inst_14958__$1 = cljs.core.get.call(null,inst_14957,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_14959 = cljs.core.get.call(null,inst_14957,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_14960 = cljs.core.not_empty.call(null,inst_14958__$1);
var state_14983__$1 = (function (){var statearr_15005 = state_14983;
(statearr_15005[(20)] = inst_14958__$1);

(statearr_15005[(21)] = inst_14959);

return statearr_15005;
})();
if(cljs.core.truth_(inst_14960)){
var statearr_15006_15085 = state_14983__$1;
(statearr_15006_15085[(1)] = (41));

} else {
var statearr_15007_15086 = state_14983__$1;
(statearr_15007_15086[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (33))){
var state_14983__$1 = state_14983;
var statearr_15008_15087 = state_14983__$1;
(statearr_15008_15087[(2)] = false);

(statearr_15008_15087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (13))){
var inst_14856 = (state_14983[(22)]);
var inst_14860 = cljs.core.chunk_first.call(null,inst_14856);
var inst_14861 = cljs.core.chunk_rest.call(null,inst_14856);
var inst_14862 = cljs.core.count.call(null,inst_14860);
var inst_14843 = inst_14861;
var inst_14844 = inst_14860;
var inst_14845 = inst_14862;
var inst_14846 = (0);
var state_14983__$1 = (function (){var statearr_15009 = state_14983;
(statearr_15009[(7)] = inst_14844);

(statearr_15009[(8)] = inst_14846);

(statearr_15009[(9)] = inst_14843);

(statearr_15009[(10)] = inst_14845);

return statearr_15009;
})();
var statearr_15010_15088 = state_14983__$1;
(statearr_15010_15088[(2)] = null);

(statearr_15010_15088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (22))){
var inst_14899 = (state_14983[(23)]);
var inst_14900 = (state_14983[(24)]);
var inst_14896 = (state_14983[(19)]);
var inst_14904 = (state_14983[(25)]);
var inst_14899__$1 = (state_14983[(2)]);
var inst_14900__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14899__$1);
var inst_14901 = (function (){var all_files = inst_14896;
var res_SINGLEQUOTE_ = inst_14899__$1;
var res = inst_14900__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_14899,inst_14900,inst_14896,inst_14904,inst_14899__$1,inst_14900__$1,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__14825_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14825_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_14899,inst_14900,inst_14896,inst_14904,inst_14899__$1,inst_14900__$1,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14902 = cljs.core.filter.call(null,inst_14901,inst_14899__$1);
var inst_14903 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_14904__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14903);
var inst_14905 = cljs.core.not_empty.call(null,inst_14904__$1);
var state_14983__$1 = (function (){var statearr_15011 = state_14983;
(statearr_15011[(23)] = inst_14899__$1);

(statearr_15011[(24)] = inst_14900__$1);

(statearr_15011[(26)] = inst_14902);

(statearr_15011[(25)] = inst_14904__$1);

return statearr_15011;
})();
if(cljs.core.truth_(inst_14905)){
var statearr_15012_15089 = state_14983__$1;
(statearr_15012_15089[(1)] = (23));

} else {
var statearr_15013_15090 = state_14983__$1;
(statearr_15013_15090[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (36))){
var state_14983__$1 = state_14983;
var statearr_15014_15091 = state_14983__$1;
(statearr_15014_15091[(2)] = false);

(statearr_15014_15091[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (41))){
var inst_14958 = (state_14983[(20)]);
var inst_14962 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_14963 = cljs.core.map.call(null,inst_14962,inst_14958);
var inst_14964 = cljs.core.pr_str.call(null,inst_14963);
var inst_14965 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14964)].join('');
var inst_14966 = figwheel.client.utils.log.call(null,inst_14965);
var state_14983__$1 = state_14983;
var statearr_15015_15092 = state_14983__$1;
(statearr_15015_15092[(2)] = inst_14966);

(statearr_15015_15092[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (43))){
var inst_14959 = (state_14983[(21)]);
var inst_14969 = (state_14983[(2)]);
var inst_14970 = cljs.core.not_empty.call(null,inst_14959);
var state_14983__$1 = (function (){var statearr_15016 = state_14983;
(statearr_15016[(27)] = inst_14969);

return statearr_15016;
})();
if(cljs.core.truth_(inst_14970)){
var statearr_15017_15093 = state_14983__$1;
(statearr_15017_15093[(1)] = (44));

} else {
var statearr_15018_15094 = state_14983__$1;
(statearr_15018_15094[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (29))){
var inst_14899 = (state_14983[(23)]);
var inst_14936 = (state_14983[(16)]);
var inst_14900 = (state_14983[(24)]);
var inst_14896 = (state_14983[(19)]);
var inst_14902 = (state_14983[(26)]);
var inst_14904 = (state_14983[(25)]);
var inst_14932 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_14935 = (function (){var all_files = inst_14896;
var res_SINGLEQUOTE_ = inst_14899;
var res = inst_14900;
var files_not_loaded = inst_14902;
var dependencies_that_loaded = inst_14904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14899,inst_14936,inst_14900,inst_14896,inst_14902,inst_14904,inst_14932,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14934){
var map__15019 = p__14934;
var map__15019__$1 = ((((!((map__15019 == null)))?((((map__15019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15019):map__15019);
var namespace = cljs.core.get.call(null,map__15019__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14899,inst_14936,inst_14900,inst_14896,inst_14902,inst_14904,inst_14932,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14936__$1 = cljs.core.group_by.call(null,inst_14935,inst_14902);
var inst_14938 = (inst_14936__$1 == null);
var inst_14939 = cljs.core.not.call(null,inst_14938);
var state_14983__$1 = (function (){var statearr_15021 = state_14983;
(statearr_15021[(28)] = inst_14932);

(statearr_15021[(16)] = inst_14936__$1);

return statearr_15021;
})();
if(inst_14939){
var statearr_15022_15095 = state_14983__$1;
(statearr_15022_15095[(1)] = (32));

} else {
var statearr_15023_15096 = state_14983__$1;
(statearr_15023_15096[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (44))){
var inst_14959 = (state_14983[(21)]);
var inst_14972 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14959);
var inst_14973 = cljs.core.pr_str.call(null,inst_14972);
var inst_14974 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14973)].join('');
var inst_14975 = figwheel.client.utils.log.call(null,inst_14974);
var state_14983__$1 = state_14983;
var statearr_15024_15097 = state_14983__$1;
(statearr_15024_15097[(2)] = inst_14975);

(statearr_15024_15097[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (6))){
var inst_14877 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
var statearr_15025_15098 = state_14983__$1;
(statearr_15025_15098[(2)] = inst_14877);

(statearr_15025_15098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (28))){
var inst_14902 = (state_14983[(26)]);
var inst_14929 = (state_14983[(2)]);
var inst_14930 = cljs.core.not_empty.call(null,inst_14902);
var state_14983__$1 = (function (){var statearr_15026 = state_14983;
(statearr_15026[(29)] = inst_14929);

return statearr_15026;
})();
if(cljs.core.truth_(inst_14930)){
var statearr_15027_15099 = state_14983__$1;
(statearr_15027_15099[(1)] = (29));

} else {
var statearr_15028_15100 = state_14983__$1;
(statearr_15028_15100[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (25))){
var inst_14900 = (state_14983[(24)]);
var inst_14916 = (state_14983[(2)]);
var inst_14917 = cljs.core.not_empty.call(null,inst_14900);
var state_14983__$1 = (function (){var statearr_15029 = state_14983;
(statearr_15029[(30)] = inst_14916);

return statearr_15029;
})();
if(cljs.core.truth_(inst_14917)){
var statearr_15030_15101 = state_14983__$1;
(statearr_15030_15101[(1)] = (26));

} else {
var statearr_15031_15102 = state_14983__$1;
(statearr_15031_15102[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (34))){
var inst_14952 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
if(cljs.core.truth_(inst_14952)){
var statearr_15032_15103 = state_14983__$1;
(statearr_15032_15103[(1)] = (38));

} else {
var statearr_15033_15104 = state_14983__$1;
(statearr_15033_15104[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (17))){
var state_14983__$1 = state_14983;
var statearr_15034_15105 = state_14983__$1;
(statearr_15034_15105[(2)] = recompile_dependents);

(statearr_15034_15105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (3))){
var state_14983__$1 = state_14983;
var statearr_15035_15106 = state_14983__$1;
(statearr_15035_15106[(2)] = null);

(statearr_15035_15106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (12))){
var inst_14873 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
var statearr_15036_15107 = state_14983__$1;
(statearr_15036_15107[(2)] = inst_14873);

(statearr_15036_15107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (2))){
var inst_14835 = (state_14983[(13)]);
var inst_14842 = cljs.core.seq.call(null,inst_14835);
var inst_14843 = inst_14842;
var inst_14844 = null;
var inst_14845 = (0);
var inst_14846 = (0);
var state_14983__$1 = (function (){var statearr_15037 = state_14983;
(statearr_15037[(7)] = inst_14844);

(statearr_15037[(8)] = inst_14846);

(statearr_15037[(9)] = inst_14843);

(statearr_15037[(10)] = inst_14845);

return statearr_15037;
})();
var statearr_15038_15108 = state_14983__$1;
(statearr_15038_15108[(2)] = null);

(statearr_15038_15108[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (23))){
var inst_14899 = (state_14983[(23)]);
var inst_14900 = (state_14983[(24)]);
var inst_14896 = (state_14983[(19)]);
var inst_14902 = (state_14983[(26)]);
var inst_14904 = (state_14983[(25)]);
var inst_14907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_14909 = (function (){var all_files = inst_14896;
var res_SINGLEQUOTE_ = inst_14899;
var res = inst_14900;
var files_not_loaded = inst_14902;
var dependencies_that_loaded = inst_14904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14899,inst_14900,inst_14896,inst_14902,inst_14904,inst_14907,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14908){
var map__15039 = p__14908;
var map__15039__$1 = ((((!((map__15039 == null)))?((((map__15039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15039):map__15039);
var request_url = cljs.core.get.call(null,map__15039__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14899,inst_14900,inst_14896,inst_14902,inst_14904,inst_14907,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14910 = cljs.core.reverse.call(null,inst_14904);
var inst_14911 = cljs.core.map.call(null,inst_14909,inst_14910);
var inst_14912 = cljs.core.pr_str.call(null,inst_14911);
var inst_14913 = figwheel.client.utils.log.call(null,inst_14912);
var state_14983__$1 = (function (){var statearr_15041 = state_14983;
(statearr_15041[(31)] = inst_14907);

return statearr_15041;
})();
var statearr_15042_15109 = state_14983__$1;
(statearr_15042_15109[(2)] = inst_14913);

(statearr_15042_15109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (35))){
var state_14983__$1 = state_14983;
var statearr_15043_15110 = state_14983__$1;
(statearr_15043_15110[(2)] = true);

(statearr_15043_15110[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (19))){
var inst_14886 = (state_14983[(12)]);
var inst_14892 = figwheel.client.file_reloading.expand_files.call(null,inst_14886);
var state_14983__$1 = state_14983;
var statearr_15044_15111 = state_14983__$1;
(statearr_15044_15111[(2)] = inst_14892);

(statearr_15044_15111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (11))){
var state_14983__$1 = state_14983;
var statearr_15045_15112 = state_14983__$1;
(statearr_15045_15112[(2)] = null);

(statearr_15045_15112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (9))){
var inst_14875 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
var statearr_15046_15113 = state_14983__$1;
(statearr_15046_15113[(2)] = inst_14875);

(statearr_15046_15113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (5))){
var inst_14846 = (state_14983[(8)]);
var inst_14845 = (state_14983[(10)]);
var inst_14848 = (inst_14846 < inst_14845);
var inst_14849 = inst_14848;
var state_14983__$1 = state_14983;
if(cljs.core.truth_(inst_14849)){
var statearr_15047_15114 = state_14983__$1;
(statearr_15047_15114[(1)] = (7));

} else {
var statearr_15048_15115 = state_14983__$1;
(statearr_15048_15115[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (14))){
var inst_14856 = (state_14983[(22)]);
var inst_14865 = cljs.core.first.call(null,inst_14856);
var inst_14866 = figwheel.client.file_reloading.eval_body.call(null,inst_14865,opts);
var inst_14867 = cljs.core.next.call(null,inst_14856);
var inst_14843 = inst_14867;
var inst_14844 = null;
var inst_14845 = (0);
var inst_14846 = (0);
var state_14983__$1 = (function (){var statearr_15049 = state_14983;
(statearr_15049[(7)] = inst_14844);

(statearr_15049[(8)] = inst_14846);

(statearr_15049[(9)] = inst_14843);

(statearr_15049[(10)] = inst_14845);

(statearr_15049[(32)] = inst_14866);

return statearr_15049;
})();
var statearr_15050_15116 = state_14983__$1;
(statearr_15050_15116[(2)] = null);

(statearr_15050_15116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (45))){
var state_14983__$1 = state_14983;
var statearr_15051_15117 = state_14983__$1;
(statearr_15051_15117[(2)] = null);

(statearr_15051_15117[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (26))){
var inst_14899 = (state_14983[(23)]);
var inst_14900 = (state_14983[(24)]);
var inst_14896 = (state_14983[(19)]);
var inst_14902 = (state_14983[(26)]);
var inst_14904 = (state_14983[(25)]);
var inst_14919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_14921 = (function (){var all_files = inst_14896;
var res_SINGLEQUOTE_ = inst_14899;
var res = inst_14900;
var files_not_loaded = inst_14902;
var dependencies_that_loaded = inst_14904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14899,inst_14900,inst_14896,inst_14902,inst_14904,inst_14919,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__14920){
var map__15052 = p__14920;
var map__15052__$1 = ((((!((map__15052 == null)))?((((map__15052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15052):map__15052);
var namespace = cljs.core.get.call(null,map__15052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__15052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14899,inst_14900,inst_14896,inst_14902,inst_14904,inst_14919,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14922 = cljs.core.map.call(null,inst_14921,inst_14900);
var inst_14923 = cljs.core.pr_str.call(null,inst_14922);
var inst_14924 = figwheel.client.utils.log.call(null,inst_14923);
var inst_14925 = (function (){var all_files = inst_14896;
var res_SINGLEQUOTE_ = inst_14899;
var res = inst_14900;
var files_not_loaded = inst_14902;
var dependencies_that_loaded = inst_14904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14899,inst_14900,inst_14896,inst_14902,inst_14904,inst_14919,inst_14921,inst_14922,inst_14923,inst_14924,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_14899,inst_14900,inst_14896,inst_14902,inst_14904,inst_14919,inst_14921,inst_14922,inst_14923,inst_14924,state_val_14984,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_14926 = setTimeout(inst_14925,(10));
var state_14983__$1 = (function (){var statearr_15054 = state_14983;
(statearr_15054[(33)] = inst_14919);

(statearr_15054[(34)] = inst_14924);

return statearr_15054;
})();
var statearr_15055_15118 = state_14983__$1;
(statearr_15055_15118[(2)] = inst_14926);

(statearr_15055_15118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (16))){
var state_14983__$1 = state_14983;
var statearr_15056_15119 = state_14983__$1;
(statearr_15056_15119[(2)] = reload_dependents);

(statearr_15056_15119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (38))){
var inst_14936 = (state_14983[(16)]);
var inst_14954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14936);
var state_14983__$1 = state_14983;
var statearr_15057_15120 = state_14983__$1;
(statearr_15057_15120[(2)] = inst_14954);

(statearr_15057_15120[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (30))){
var state_14983__$1 = state_14983;
var statearr_15058_15121 = state_14983__$1;
(statearr_15058_15121[(2)] = null);

(statearr_15058_15121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (10))){
var inst_14856 = (state_14983[(22)]);
var inst_14858 = cljs.core.chunked_seq_QMARK_.call(null,inst_14856);
var state_14983__$1 = state_14983;
if(inst_14858){
var statearr_15059_15122 = state_14983__$1;
(statearr_15059_15122[(1)] = (13));

} else {
var statearr_15060_15123 = state_14983__$1;
(statearr_15060_15123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (18))){
var inst_14890 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
if(cljs.core.truth_(inst_14890)){
var statearr_15061_15124 = state_14983__$1;
(statearr_15061_15124[(1)] = (19));

} else {
var statearr_15062_15125 = state_14983__$1;
(statearr_15062_15125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (42))){
var state_14983__$1 = state_14983;
var statearr_15063_15126 = state_14983__$1;
(statearr_15063_15126[(2)] = null);

(statearr_15063_15126[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (37))){
var inst_14949 = (state_14983[(2)]);
var state_14983__$1 = state_14983;
var statearr_15064_15127 = state_14983__$1;
(statearr_15064_15127[(2)] = inst_14949);

(statearr_15064_15127[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14984 === (8))){
var inst_14843 = (state_14983[(9)]);
var inst_14856 = (state_14983[(22)]);
var inst_14856__$1 = cljs.core.seq.call(null,inst_14843);
var state_14983__$1 = (function (){var statearr_15065 = state_14983;
(statearr_15065[(22)] = inst_14856__$1);

return statearr_15065;
})();
if(inst_14856__$1){
var statearr_15066_15128 = state_14983__$1;
(statearr_15066_15128[(1)] = (10));

} else {
var statearr_15067_15129 = state_14983__$1;
(statearr_15067_15129[(1)] = (11));

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
});})(c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__13747__auto__,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto____0 = (function (){
var statearr_15068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15068[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto__);

(statearr_15068[(1)] = (1));

return statearr_15068;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto____1 = (function (state_14983){
while(true){
var ret_value__13749__auto__ = (function (){try{while(true){
var result__13750__auto__ = switch__13747__auto__.call(null,state_14983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13750__auto__;
}
break;
}
}catch (e15069){if((e15069 instanceof Object)){
var ex__13751__auto__ = e15069;
var statearr_15070_15130 = state_14983;
(statearr_15070_15130[(5)] = ex__13751__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15131 = state_14983;
state_14983 = G__15131;
continue;
} else {
return ret_value__13749__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto__ = function(state_14983){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto____1.call(this,state_14983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13748__auto__;
})()
;})(switch__13747__auto__,c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__13772__auto__ = (function (){var statearr_15071 = f__13771__auto__.call(null);
(statearr_15071[(6)] = c__13770__auto__);

return statearr_15071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13772__auto__);
});})(c__13770__auto__,map__14828,map__14828__$1,opts,before_jsload,on_jsload,reload_dependents,map__14829,map__14829__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__13770__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__15134,link){
var map__15135 = p__15134;
var map__15135__$1 = ((((!((map__15135 == null)))?((((map__15135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15135):map__15135);
var file = cljs.core.get.call(null,map__15135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__15135,map__15135__$1,file){
return (function (p1__15132_SHARP_,p2__15133_SHARP_){
if(cljs.core._EQ_.call(null,p1__15132_SHARP_,p2__15133_SHARP_)){
return p1__15132_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__15135,map__15135__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__15138){
var map__15139 = p__15138;
var map__15139__$1 = ((((!((map__15139 == null)))?((((map__15139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15139):map__15139);
var match_length = cljs.core.get.call(null,map__15139__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__15139__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__15137_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__15137_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__15141_SHARP_,p2__15142_SHARP_){
return cljs.core.assoc.call(null,p1__15141_SHARP_,cljs.core.get.call(null,p2__15142_SHARP_,key),p2__15142_SHARP_);
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
var loaded_f_datas_15143 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_15143);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_15143);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__15144,p__15145){
var map__15146 = p__15144;
var map__15146__$1 = ((((!((map__15146 == null)))?((((map__15146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15146):map__15146);
var on_cssload = cljs.core.get.call(null,map__15146__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__15147 = p__15145;
var map__15147__$1 = ((((!((map__15147 == null)))?((((map__15147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15147):map__15147);
var files_msg = map__15147__$1;
var files = cljs.core.get.call(null,map__15147__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1505782739186
