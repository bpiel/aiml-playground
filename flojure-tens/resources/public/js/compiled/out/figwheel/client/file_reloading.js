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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21624_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21624_SHARP_));
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
var seq__21625 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21626 = null;
var count__21627 = (0);
var i__21628 = (0);
while(true){
if((i__21628 < count__21627)){
var n = cljs.core._nth.call(null,chunk__21626,i__21628);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21629 = seq__21625;
var G__21630 = chunk__21626;
var G__21631 = count__21627;
var G__21632 = (i__21628 + (1));
seq__21625 = G__21629;
chunk__21626 = G__21630;
count__21627 = G__21631;
i__21628 = G__21632;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21625);
if(temp__6738__auto__){
var seq__21625__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21625__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21625__$1);
var G__21633 = cljs.core.chunk_rest.call(null,seq__21625__$1);
var G__21634 = c__10741__auto__;
var G__21635 = cljs.core.count.call(null,c__10741__auto__);
var G__21636 = (0);
seq__21625 = G__21633;
chunk__21626 = G__21634;
count__21627 = G__21635;
i__21628 = G__21636;
continue;
} else {
var n = cljs.core.first.call(null,seq__21625__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21637 = cljs.core.next.call(null,seq__21625__$1);
var G__21638 = null;
var G__21639 = (0);
var G__21640 = (0);
seq__21625 = G__21637;
chunk__21626 = G__21638;
count__21627 = G__21639;
i__21628 = G__21640;
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

var seq__21650_21658 = cljs.core.seq.call(null,deps);
var chunk__21651_21659 = null;
var count__21652_21660 = (0);
var i__21653_21661 = (0);
while(true){
if((i__21653_21661 < count__21652_21660)){
var dep_21662 = cljs.core._nth.call(null,chunk__21651_21659,i__21653_21661);
topo_sort_helper_STAR_.call(null,dep_21662,(depth + (1)),state);

var G__21663 = seq__21650_21658;
var G__21664 = chunk__21651_21659;
var G__21665 = count__21652_21660;
var G__21666 = (i__21653_21661 + (1));
seq__21650_21658 = G__21663;
chunk__21651_21659 = G__21664;
count__21652_21660 = G__21665;
i__21653_21661 = G__21666;
continue;
} else {
var temp__6738__auto___21667 = cljs.core.seq.call(null,seq__21650_21658);
if(temp__6738__auto___21667){
var seq__21650_21668__$1 = temp__6738__auto___21667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21650_21668__$1)){
var c__10741__auto___21669 = cljs.core.chunk_first.call(null,seq__21650_21668__$1);
var G__21670 = cljs.core.chunk_rest.call(null,seq__21650_21668__$1);
var G__21671 = c__10741__auto___21669;
var G__21672 = cljs.core.count.call(null,c__10741__auto___21669);
var G__21673 = (0);
seq__21650_21658 = G__21670;
chunk__21651_21659 = G__21671;
count__21652_21660 = G__21672;
i__21653_21661 = G__21673;
continue;
} else {
var dep_21674 = cljs.core.first.call(null,seq__21650_21668__$1);
topo_sort_helper_STAR_.call(null,dep_21674,(depth + (1)),state);

var G__21675 = cljs.core.next.call(null,seq__21650_21668__$1);
var G__21676 = null;
var G__21677 = (0);
var G__21678 = (0);
seq__21650_21658 = G__21675;
chunk__21651_21659 = G__21676;
count__21652_21660 = G__21677;
i__21653_21661 = G__21678;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21654){
var vec__21655 = p__21654;
var seq__21656 = cljs.core.seq.call(null,vec__21655);
var first__21657 = cljs.core.first.call(null,seq__21656);
var seq__21656__$1 = cljs.core.next.call(null,seq__21656);
var x = first__21657;
var xs = seq__21656__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21655,seq__21656,first__21657,seq__21656__$1,x,xs,get_deps__$1){
return (function (p1__21641_SHARP_){
return clojure.set.difference.call(null,p1__21641_SHARP_,x);
});})(vec__21655,seq__21656,first__21657,seq__21656__$1,x,xs,get_deps__$1))
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
var seq__21679 = cljs.core.seq.call(null,provides);
var chunk__21680 = null;
var count__21681 = (0);
var i__21682 = (0);
while(true){
if((i__21682 < count__21681)){
var prov = cljs.core._nth.call(null,chunk__21680,i__21682);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21683_21691 = cljs.core.seq.call(null,requires);
var chunk__21684_21692 = null;
var count__21685_21693 = (0);
var i__21686_21694 = (0);
while(true){
if((i__21686_21694 < count__21685_21693)){
var req_21695 = cljs.core._nth.call(null,chunk__21684_21692,i__21686_21694);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21695,prov);

var G__21696 = seq__21683_21691;
var G__21697 = chunk__21684_21692;
var G__21698 = count__21685_21693;
var G__21699 = (i__21686_21694 + (1));
seq__21683_21691 = G__21696;
chunk__21684_21692 = G__21697;
count__21685_21693 = G__21698;
i__21686_21694 = G__21699;
continue;
} else {
var temp__6738__auto___21700 = cljs.core.seq.call(null,seq__21683_21691);
if(temp__6738__auto___21700){
var seq__21683_21701__$1 = temp__6738__auto___21700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21683_21701__$1)){
var c__10741__auto___21702 = cljs.core.chunk_first.call(null,seq__21683_21701__$1);
var G__21703 = cljs.core.chunk_rest.call(null,seq__21683_21701__$1);
var G__21704 = c__10741__auto___21702;
var G__21705 = cljs.core.count.call(null,c__10741__auto___21702);
var G__21706 = (0);
seq__21683_21691 = G__21703;
chunk__21684_21692 = G__21704;
count__21685_21693 = G__21705;
i__21686_21694 = G__21706;
continue;
} else {
var req_21707 = cljs.core.first.call(null,seq__21683_21701__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21707,prov);

var G__21708 = cljs.core.next.call(null,seq__21683_21701__$1);
var G__21709 = null;
var G__21710 = (0);
var G__21711 = (0);
seq__21683_21691 = G__21708;
chunk__21684_21692 = G__21709;
count__21685_21693 = G__21710;
i__21686_21694 = G__21711;
continue;
}
} else {
}
}
break;
}

var G__21712 = seq__21679;
var G__21713 = chunk__21680;
var G__21714 = count__21681;
var G__21715 = (i__21682 + (1));
seq__21679 = G__21712;
chunk__21680 = G__21713;
count__21681 = G__21714;
i__21682 = G__21715;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21679);
if(temp__6738__auto__){
var seq__21679__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21679__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21679__$1);
var G__21716 = cljs.core.chunk_rest.call(null,seq__21679__$1);
var G__21717 = c__10741__auto__;
var G__21718 = cljs.core.count.call(null,c__10741__auto__);
var G__21719 = (0);
seq__21679 = G__21716;
chunk__21680 = G__21717;
count__21681 = G__21718;
i__21682 = G__21719;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21679__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21687_21720 = cljs.core.seq.call(null,requires);
var chunk__21688_21721 = null;
var count__21689_21722 = (0);
var i__21690_21723 = (0);
while(true){
if((i__21690_21723 < count__21689_21722)){
var req_21724 = cljs.core._nth.call(null,chunk__21688_21721,i__21690_21723);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21724,prov);

var G__21725 = seq__21687_21720;
var G__21726 = chunk__21688_21721;
var G__21727 = count__21689_21722;
var G__21728 = (i__21690_21723 + (1));
seq__21687_21720 = G__21725;
chunk__21688_21721 = G__21726;
count__21689_21722 = G__21727;
i__21690_21723 = G__21728;
continue;
} else {
var temp__6738__auto___21729__$1 = cljs.core.seq.call(null,seq__21687_21720);
if(temp__6738__auto___21729__$1){
var seq__21687_21730__$1 = temp__6738__auto___21729__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21687_21730__$1)){
var c__10741__auto___21731 = cljs.core.chunk_first.call(null,seq__21687_21730__$1);
var G__21732 = cljs.core.chunk_rest.call(null,seq__21687_21730__$1);
var G__21733 = c__10741__auto___21731;
var G__21734 = cljs.core.count.call(null,c__10741__auto___21731);
var G__21735 = (0);
seq__21687_21720 = G__21732;
chunk__21688_21721 = G__21733;
count__21689_21722 = G__21734;
i__21690_21723 = G__21735;
continue;
} else {
var req_21736 = cljs.core.first.call(null,seq__21687_21730__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21736,prov);

var G__21737 = cljs.core.next.call(null,seq__21687_21730__$1);
var G__21738 = null;
var G__21739 = (0);
var G__21740 = (0);
seq__21687_21720 = G__21737;
chunk__21688_21721 = G__21738;
count__21689_21722 = G__21739;
i__21690_21723 = G__21740;
continue;
}
} else {
}
}
break;
}

var G__21741 = cljs.core.next.call(null,seq__21679__$1);
var G__21742 = null;
var G__21743 = (0);
var G__21744 = (0);
seq__21679 = G__21741;
chunk__21680 = G__21742;
count__21681 = G__21743;
i__21682 = G__21744;
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
var seq__21745_21749 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21746_21750 = null;
var count__21747_21751 = (0);
var i__21748_21752 = (0);
while(true){
if((i__21748_21752 < count__21747_21751)){
var ns_21753 = cljs.core._nth.call(null,chunk__21746_21750,i__21748_21752);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21753);

var G__21754 = seq__21745_21749;
var G__21755 = chunk__21746_21750;
var G__21756 = count__21747_21751;
var G__21757 = (i__21748_21752 + (1));
seq__21745_21749 = G__21754;
chunk__21746_21750 = G__21755;
count__21747_21751 = G__21756;
i__21748_21752 = G__21757;
continue;
} else {
var temp__6738__auto___21758 = cljs.core.seq.call(null,seq__21745_21749);
if(temp__6738__auto___21758){
var seq__21745_21759__$1 = temp__6738__auto___21758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21745_21759__$1)){
var c__10741__auto___21760 = cljs.core.chunk_first.call(null,seq__21745_21759__$1);
var G__21761 = cljs.core.chunk_rest.call(null,seq__21745_21759__$1);
var G__21762 = c__10741__auto___21760;
var G__21763 = cljs.core.count.call(null,c__10741__auto___21760);
var G__21764 = (0);
seq__21745_21749 = G__21761;
chunk__21746_21750 = G__21762;
count__21747_21751 = G__21763;
i__21748_21752 = G__21764;
continue;
} else {
var ns_21765 = cljs.core.first.call(null,seq__21745_21759__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21765);

var G__21766 = cljs.core.next.call(null,seq__21745_21759__$1);
var G__21767 = null;
var G__21768 = (0);
var G__21769 = (0);
seq__21745_21749 = G__21766;
chunk__21746_21750 = G__21767;
count__21747_21751 = G__21768;
i__21748_21752 = G__21769;
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
var G__21770__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21771__i = 0, G__21771__a = new Array(arguments.length -  0);
while (G__21771__i < G__21771__a.length) {G__21771__a[G__21771__i] = arguments[G__21771__i + 0]; ++G__21771__i;}
  args = new cljs.core.IndexedSeq(G__21771__a,0,null);
} 
return G__21770__delegate.call(this,args);};
G__21770.cljs$lang$maxFixedArity = 0;
G__21770.cljs$lang$applyTo = (function (arglist__21772){
var args = cljs.core.seq(arglist__21772);
return G__21770__delegate(args);
});
G__21770.cljs$core$IFn$_invoke$arity$variadic = G__21770__delegate;
return G__21770;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__21773_SHARP_,p2__21774_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21773_SHARP_)].join('')),p2__21774_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__21775_SHARP_,p2__21776_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21775_SHARP_)].join(''),p2__21776_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__21777 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__21777.addCallback(((function (G__21777){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__21777))
);

G__21777.addErrback(((function (G__21777){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__21777))
);

return G__21777;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21778 = cljs.core._EQ_;
var expr__21779 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21778.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21779))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__21778,expr__21779){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__21778,expr__21779))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__21778,expr__21779){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21781){if((e21781 instanceof Error)){
var e = e21781;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21781;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__21778,expr__21779))
} else {
if(cljs.core.truth_(pred__21778.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21779))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__21778.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__21779))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__21778.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__21779))){
return ((function (pred__21778,expr__21779){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e21782){if((e21782 instanceof Error)){
var e = e21782;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21782;

}
}})());
});
;})(pred__21778,expr__21779))
} else {
return ((function (pred__21778,expr__21779){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21778,expr__21779))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21783,callback){
var map__21784 = p__21783;
var map__21784__$1 = ((((!((map__21784 == null)))?((((map__21784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21784):map__21784);
var file_msg = map__21784__$1;
var request_url = cljs.core.get.call(null,map__21784__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21784,map__21784__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21784,map__21784__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__){
return (function (state_21808){
var state_val_21809 = (state_21808[(1)]);
if((state_val_21809 === (7))){
var inst_21804 = (state_21808[(2)]);
var state_21808__$1 = state_21808;
var statearr_21810_21827 = state_21808__$1;
(statearr_21810_21827[(2)] = inst_21804);

(statearr_21810_21827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21809 === (1))){
var state_21808__$1 = state_21808;
var statearr_21811_21828 = state_21808__$1;
(statearr_21811_21828[(2)] = null);

(statearr_21811_21828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21809 === (4))){
var inst_21788 = (state_21808[(7)]);
var inst_21788__$1 = (state_21808[(2)]);
var state_21808__$1 = (function (){var statearr_21812 = state_21808;
(statearr_21812[(7)] = inst_21788__$1);

return statearr_21812;
})();
if(cljs.core.truth_(inst_21788__$1)){
var statearr_21813_21829 = state_21808__$1;
(statearr_21813_21829[(1)] = (5));

} else {
var statearr_21814_21830 = state_21808__$1;
(statearr_21814_21830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21809 === (6))){
var state_21808__$1 = state_21808;
var statearr_21815_21831 = state_21808__$1;
(statearr_21815_21831[(2)] = null);

(statearr_21815_21831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21809 === (3))){
var inst_21806 = (state_21808[(2)]);
var state_21808__$1 = state_21808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21808__$1,inst_21806);
} else {
if((state_val_21809 === (2))){
var state_21808__$1 = state_21808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21808__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21809 === (11))){
var inst_21800 = (state_21808[(2)]);
var state_21808__$1 = (function (){var statearr_21816 = state_21808;
(statearr_21816[(8)] = inst_21800);

return statearr_21816;
})();
var statearr_21817_21832 = state_21808__$1;
(statearr_21817_21832[(2)] = null);

(statearr_21817_21832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21809 === (9))){
var inst_21794 = (state_21808[(9)]);
var inst_21792 = (state_21808[(10)]);
var inst_21796 = inst_21794.call(null,inst_21792);
var state_21808__$1 = state_21808;
var statearr_21818_21833 = state_21808__$1;
(statearr_21818_21833[(2)] = inst_21796);

(statearr_21818_21833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21809 === (5))){
var inst_21788 = (state_21808[(7)]);
var inst_21790 = figwheel.client.file_reloading.blocking_load.call(null,inst_21788);
var state_21808__$1 = state_21808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21808__$1,(8),inst_21790);
} else {
if((state_val_21809 === (10))){
var inst_21792 = (state_21808[(10)]);
var inst_21798 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21792);
var state_21808__$1 = state_21808;
var statearr_21819_21834 = state_21808__$1;
(statearr_21819_21834[(2)] = inst_21798);

(statearr_21819_21834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21809 === (8))){
var inst_21794 = (state_21808[(9)]);
var inst_21788 = (state_21808[(7)]);
var inst_21792 = (state_21808[(2)]);
var inst_21793 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21794__$1 = cljs.core.get.call(null,inst_21793,inst_21788);
var state_21808__$1 = (function (){var statearr_21820 = state_21808;
(statearr_21820[(9)] = inst_21794__$1);

(statearr_21820[(10)] = inst_21792);

return statearr_21820;
})();
if(cljs.core.truth_(inst_21794__$1)){
var statearr_21821_21835 = state_21808__$1;
(statearr_21821_21835[(1)] = (9));

} else {
var statearr_21822_21836 = state_21808__$1;
(statearr_21822_21836[(1)] = (10));

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
});})(c__17029__auto__))
;
return ((function (switch__16939__auto__,c__17029__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__16940__auto__ = null;
var figwheel$client$file_reloading$state_machine__16940__auto____0 = (function (){
var statearr_21823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21823[(0)] = figwheel$client$file_reloading$state_machine__16940__auto__);

(statearr_21823[(1)] = (1));

return statearr_21823;
});
var figwheel$client$file_reloading$state_machine__16940__auto____1 = (function (state_21808){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_21808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e21824){if((e21824 instanceof Object)){
var ex__16943__auto__ = e21824;
var statearr_21825_21837 = state_21808;
(statearr_21825_21837[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21838 = state_21808;
state_21808 = G__21838;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__16940__auto__ = function(state_21808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__16940__auto____1.call(this,state_21808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__16940__auto____0;
figwheel$client$file_reloading$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__16940__auto____1;
return figwheel$client$file_reloading$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__))
})();
var state__17031__auto__ = (function (){var statearr_21826 = f__17030__auto__.call(null);
(statearr_21826[(6)] = c__17029__auto__);

return statearr_21826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__))
);

return c__17029__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21839,callback){
var map__21840 = p__21839;
var map__21840__$1 = ((((!((map__21840 == null)))?((((map__21840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21840):map__21840);
var file_msg = map__21840__$1;
var namespace = cljs.core.get.call(null,map__21840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21840,map__21840__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21840,map__21840__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__21842){
var map__21843 = p__21842;
var map__21843__$1 = ((((!((map__21843 == null)))?((((map__21843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21843):map__21843);
var file_msg = map__21843__$1;
var namespace = cljs.core.get.call(null,map__21843__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21845){
var map__21846 = p__21845;
var map__21846__$1 = ((((!((map__21846 == null)))?((((map__21846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21846):map__21846);
var file_msg = map__21846__$1;
var namespace = cljs.core.get.call(null,map__21846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21848,callback){
var map__21849 = p__21848;
var map__21849__$1 = ((((!((map__21849 == null)))?((((map__21849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21849):map__21849);
var file_msg = map__21849__$1;
var request_url = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__17029__auto___21899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___21899,out){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___21899,out){
return (function (state_21884){
var state_val_21885 = (state_21884[(1)]);
if((state_val_21885 === (1))){
var inst_21858 = cljs.core.seq.call(null,files);
var inst_21859 = cljs.core.first.call(null,inst_21858);
var inst_21860 = cljs.core.next.call(null,inst_21858);
var inst_21861 = files;
var state_21884__$1 = (function (){var statearr_21886 = state_21884;
(statearr_21886[(7)] = inst_21861);

(statearr_21886[(8)] = inst_21860);

(statearr_21886[(9)] = inst_21859);

return statearr_21886;
})();
var statearr_21887_21900 = state_21884__$1;
(statearr_21887_21900[(2)] = null);

(statearr_21887_21900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21885 === (2))){
var inst_21861 = (state_21884[(7)]);
var inst_21867 = (state_21884[(10)]);
var inst_21866 = cljs.core.seq.call(null,inst_21861);
var inst_21867__$1 = cljs.core.first.call(null,inst_21866);
var inst_21868 = cljs.core.next.call(null,inst_21866);
var inst_21869 = (inst_21867__$1 == null);
var inst_21870 = cljs.core.not.call(null,inst_21869);
var state_21884__$1 = (function (){var statearr_21888 = state_21884;
(statearr_21888[(11)] = inst_21868);

(statearr_21888[(10)] = inst_21867__$1);

return statearr_21888;
})();
if(inst_21870){
var statearr_21889_21901 = state_21884__$1;
(statearr_21889_21901[(1)] = (4));

} else {
var statearr_21890_21902 = state_21884__$1;
(statearr_21890_21902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21885 === (3))){
var inst_21882 = (state_21884[(2)]);
var state_21884__$1 = state_21884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21884__$1,inst_21882);
} else {
if((state_val_21885 === (4))){
var inst_21867 = (state_21884[(10)]);
var inst_21872 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21867);
var state_21884__$1 = state_21884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21884__$1,(7),inst_21872);
} else {
if((state_val_21885 === (5))){
var inst_21878 = cljs.core.async.close_BANG_.call(null,out);
var state_21884__$1 = state_21884;
var statearr_21891_21903 = state_21884__$1;
(statearr_21891_21903[(2)] = inst_21878);

(statearr_21891_21903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21885 === (6))){
var inst_21880 = (state_21884[(2)]);
var state_21884__$1 = state_21884;
var statearr_21892_21904 = state_21884__$1;
(statearr_21892_21904[(2)] = inst_21880);

(statearr_21892_21904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21885 === (7))){
var inst_21868 = (state_21884[(11)]);
var inst_21874 = (state_21884[(2)]);
var inst_21875 = cljs.core.async.put_BANG_.call(null,out,inst_21874);
var inst_21861 = inst_21868;
var state_21884__$1 = (function (){var statearr_21893 = state_21884;
(statearr_21893[(7)] = inst_21861);

(statearr_21893[(12)] = inst_21875);

return statearr_21893;
})();
var statearr_21894_21905 = state_21884__$1;
(statearr_21894_21905[(2)] = null);

(statearr_21894_21905[(1)] = (2));


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
});})(c__17029__auto___21899,out))
;
return ((function (switch__16939__auto__,c__17029__auto___21899,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____0 = (function (){
var statearr_21895 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21895[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__);

(statearr_21895[(1)] = (1));

return statearr_21895;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____1 = (function (state_21884){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_21884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e21896){if((e21896 instanceof Object)){
var ex__16943__auto__ = e21896;
var statearr_21897_21906 = state_21884;
(statearr_21897_21906[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21907 = state_21884;
state_21884 = G__21907;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__ = function(state_21884){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____1.call(this,state_21884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___21899,out))
})();
var state__17031__auto__ = (function (){var statearr_21898 = f__17030__auto__.call(null);
(statearr_21898[(6)] = c__17029__auto___21899);

return statearr_21898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___21899,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21908,opts){
var map__21909 = p__21908;
var map__21909__$1 = ((((!((map__21909 == null)))?((((map__21909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21909):map__21909);
var eval_body = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e21911){var e = e21911;
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
return (function (p1__21912_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21912_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__21913){
var vec__21914 = p__21913;
var k = cljs.core.nth.call(null,vec__21914,(0),null);
var v = cljs.core.nth.call(null,vec__21914,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21917){
var vec__21918 = p__21917;
var k = cljs.core.nth.call(null,vec__21918,(0),null);
var v = cljs.core.nth.call(null,vec__21918,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21924,p__21925){
var map__21926 = p__21924;
var map__21926__$1 = ((((!((map__21926 == null)))?((((map__21926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21926):map__21926);
var opts = map__21926__$1;
var before_jsload = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21927 = p__21925;
var map__21927__$1 = ((((!((map__21927 == null)))?((((map__21927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21927):map__21927);
var msg = map__21927__$1;
var files = cljs.core.get.call(null,map__21927__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21927__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21927__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22081){
var state_val_22082 = (state_22081[(1)]);
if((state_val_22082 === (7))){
var inst_21941 = (state_22081[(7)]);
var inst_21943 = (state_22081[(8)]);
var inst_21944 = (state_22081[(9)]);
var inst_21942 = (state_22081[(10)]);
var inst_21949 = cljs.core._nth.call(null,inst_21942,inst_21944);
var inst_21950 = figwheel.client.file_reloading.eval_body.call(null,inst_21949,opts);
var inst_21951 = (inst_21944 + (1));
var tmp22083 = inst_21941;
var tmp22084 = inst_21943;
var tmp22085 = inst_21942;
var inst_21941__$1 = tmp22083;
var inst_21942__$1 = tmp22085;
var inst_21943__$1 = tmp22084;
var inst_21944__$1 = inst_21951;
var state_22081__$1 = (function (){var statearr_22086 = state_22081;
(statearr_22086[(7)] = inst_21941__$1);

(statearr_22086[(8)] = inst_21943__$1);

(statearr_22086[(9)] = inst_21944__$1);

(statearr_22086[(10)] = inst_21942__$1);

(statearr_22086[(11)] = inst_21950);

return statearr_22086;
})();
var statearr_22087_22170 = state_22081__$1;
(statearr_22087_22170[(2)] = null);

(statearr_22087_22170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (20))){
var inst_21984 = (state_22081[(12)]);
var inst_21992 = figwheel.client.file_reloading.sort_files.call(null,inst_21984);
var state_22081__$1 = state_22081;
var statearr_22088_22171 = state_22081__$1;
(statearr_22088_22171[(2)] = inst_21992);

(statearr_22088_22171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (27))){
var state_22081__$1 = state_22081;
var statearr_22089_22172 = state_22081__$1;
(statearr_22089_22172[(2)] = null);

(statearr_22089_22172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (1))){
var inst_21933 = (state_22081[(13)]);
var inst_21930 = before_jsload.call(null,files);
var inst_21931 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21932 = (function (){return ((function (inst_21933,inst_21930,inst_21931,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21921_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21921_SHARP_);
});
;})(inst_21933,inst_21930,inst_21931,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21933__$1 = cljs.core.filter.call(null,inst_21932,files);
var inst_21934 = cljs.core.not_empty.call(null,inst_21933__$1);
var state_22081__$1 = (function (){var statearr_22090 = state_22081;
(statearr_22090[(14)] = inst_21930);

(statearr_22090[(13)] = inst_21933__$1);

(statearr_22090[(15)] = inst_21931);

return statearr_22090;
})();
if(cljs.core.truth_(inst_21934)){
var statearr_22091_22173 = state_22081__$1;
(statearr_22091_22173[(1)] = (2));

} else {
var statearr_22092_22174 = state_22081__$1;
(statearr_22092_22174[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (24))){
var state_22081__$1 = state_22081;
var statearr_22093_22175 = state_22081__$1;
(statearr_22093_22175[(2)] = null);

(statearr_22093_22175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (39))){
var inst_22034 = (state_22081[(16)]);
var state_22081__$1 = state_22081;
var statearr_22094_22176 = state_22081__$1;
(statearr_22094_22176[(2)] = inst_22034);

(statearr_22094_22176[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (46))){
var inst_22076 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22095_22177 = state_22081__$1;
(statearr_22095_22177[(2)] = inst_22076);

(statearr_22095_22177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (4))){
var inst_21978 = (state_22081[(2)]);
var inst_21979 = cljs.core.List.EMPTY;
var inst_21980 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21979);
var inst_21981 = (function (){return ((function (inst_21978,inst_21979,inst_21980,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21922_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21922_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21922_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__21922_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_21978,inst_21979,inst_21980,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21982 = cljs.core.filter.call(null,inst_21981,files);
var inst_21983 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21984 = cljs.core.concat.call(null,inst_21982,inst_21983);
var state_22081__$1 = (function (){var statearr_22096 = state_22081;
(statearr_22096[(12)] = inst_21984);

(statearr_22096[(17)] = inst_21978);

(statearr_22096[(18)] = inst_21980);

return statearr_22096;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22097_22178 = state_22081__$1;
(statearr_22097_22178[(1)] = (16));

} else {
var statearr_22098_22179 = state_22081__$1;
(statearr_22098_22179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (15))){
var inst_21968 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22099_22180 = state_22081__$1;
(statearr_22099_22180[(2)] = inst_21968);

(statearr_22099_22180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (21))){
var inst_21994 = (state_22081[(19)]);
var inst_21994__$1 = (state_22081[(2)]);
var inst_21995 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21994__$1);
var state_22081__$1 = (function (){var statearr_22100 = state_22081;
(statearr_22100[(19)] = inst_21994__$1);

return statearr_22100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22081__$1,(22),inst_21995);
} else {
if((state_val_22082 === (31))){
var inst_22079 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22081__$1,inst_22079);
} else {
if((state_val_22082 === (32))){
var inst_22034 = (state_22081[(16)]);
var inst_22039 = inst_22034.cljs$lang$protocol_mask$partition0$;
var inst_22040 = (inst_22039 & (64));
var inst_22041 = inst_22034.cljs$core$ISeq$;
var inst_22042 = (cljs.core.PROTOCOL_SENTINEL === inst_22041);
var inst_22043 = (inst_22040) || (inst_22042);
var state_22081__$1 = state_22081;
if(cljs.core.truth_(inst_22043)){
var statearr_22101_22181 = state_22081__$1;
(statearr_22101_22181[(1)] = (35));

} else {
var statearr_22102_22182 = state_22081__$1;
(statearr_22102_22182[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (40))){
var inst_22056 = (state_22081[(20)]);
var inst_22055 = (state_22081[(2)]);
var inst_22056__$1 = cljs.core.get.call(null,inst_22055,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22057 = cljs.core.get.call(null,inst_22055,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22058 = cljs.core.not_empty.call(null,inst_22056__$1);
var state_22081__$1 = (function (){var statearr_22103 = state_22081;
(statearr_22103[(20)] = inst_22056__$1);

(statearr_22103[(21)] = inst_22057);

return statearr_22103;
})();
if(cljs.core.truth_(inst_22058)){
var statearr_22104_22183 = state_22081__$1;
(statearr_22104_22183[(1)] = (41));

} else {
var statearr_22105_22184 = state_22081__$1;
(statearr_22105_22184[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (33))){
var state_22081__$1 = state_22081;
var statearr_22106_22185 = state_22081__$1;
(statearr_22106_22185[(2)] = false);

(statearr_22106_22185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (13))){
var inst_21954 = (state_22081[(22)]);
var inst_21958 = cljs.core.chunk_first.call(null,inst_21954);
var inst_21959 = cljs.core.chunk_rest.call(null,inst_21954);
var inst_21960 = cljs.core.count.call(null,inst_21958);
var inst_21941 = inst_21959;
var inst_21942 = inst_21958;
var inst_21943 = inst_21960;
var inst_21944 = (0);
var state_22081__$1 = (function (){var statearr_22107 = state_22081;
(statearr_22107[(7)] = inst_21941);

(statearr_22107[(8)] = inst_21943);

(statearr_22107[(9)] = inst_21944);

(statearr_22107[(10)] = inst_21942);

return statearr_22107;
})();
var statearr_22108_22186 = state_22081__$1;
(statearr_22108_22186[(2)] = null);

(statearr_22108_22186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (22))){
var inst_21998 = (state_22081[(23)]);
var inst_21994 = (state_22081[(19)]);
var inst_22002 = (state_22081[(24)]);
var inst_21997 = (state_22081[(25)]);
var inst_21997__$1 = (state_22081[(2)]);
var inst_21998__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21997__$1);
var inst_21999 = (function (){var all_files = inst_21994;
var res_SINGLEQUOTE_ = inst_21997__$1;
var res = inst_21998__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21998,inst_21994,inst_22002,inst_21997,inst_21997__$1,inst_21998__$1,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21923_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21923_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21998,inst_21994,inst_22002,inst_21997,inst_21997__$1,inst_21998__$1,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22000 = cljs.core.filter.call(null,inst_21999,inst_21997__$1);
var inst_22001 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22002__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22001);
var inst_22003 = cljs.core.not_empty.call(null,inst_22002__$1);
var state_22081__$1 = (function (){var statearr_22109 = state_22081;
(statearr_22109[(26)] = inst_22000);

(statearr_22109[(23)] = inst_21998__$1);

(statearr_22109[(24)] = inst_22002__$1);

(statearr_22109[(25)] = inst_21997__$1);

return statearr_22109;
})();
if(cljs.core.truth_(inst_22003)){
var statearr_22110_22187 = state_22081__$1;
(statearr_22110_22187[(1)] = (23));

} else {
var statearr_22111_22188 = state_22081__$1;
(statearr_22111_22188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (36))){
var state_22081__$1 = state_22081;
var statearr_22112_22189 = state_22081__$1;
(statearr_22112_22189[(2)] = false);

(statearr_22112_22189[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (41))){
var inst_22056 = (state_22081[(20)]);
var inst_22060 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22061 = cljs.core.map.call(null,inst_22060,inst_22056);
var inst_22062 = cljs.core.pr_str.call(null,inst_22061);
var inst_22063 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22062)].join('');
var inst_22064 = figwheel.client.utils.log.call(null,inst_22063);
var state_22081__$1 = state_22081;
var statearr_22113_22190 = state_22081__$1;
(statearr_22113_22190[(2)] = inst_22064);

(statearr_22113_22190[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (43))){
var inst_22057 = (state_22081[(21)]);
var inst_22067 = (state_22081[(2)]);
var inst_22068 = cljs.core.not_empty.call(null,inst_22057);
var state_22081__$1 = (function (){var statearr_22114 = state_22081;
(statearr_22114[(27)] = inst_22067);

return statearr_22114;
})();
if(cljs.core.truth_(inst_22068)){
var statearr_22115_22191 = state_22081__$1;
(statearr_22115_22191[(1)] = (44));

} else {
var statearr_22116_22192 = state_22081__$1;
(statearr_22116_22192[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (29))){
var inst_22000 = (state_22081[(26)]);
var inst_21998 = (state_22081[(23)]);
var inst_22034 = (state_22081[(16)]);
var inst_21994 = (state_22081[(19)]);
var inst_22002 = (state_22081[(24)]);
var inst_21997 = (state_22081[(25)]);
var inst_22030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22033 = (function (){var all_files = inst_21994;
var res_SINGLEQUOTE_ = inst_21997;
var res = inst_21998;
var files_not_loaded = inst_22000;
var dependencies_that_loaded = inst_22002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22000,inst_21998,inst_22034,inst_21994,inst_22002,inst_21997,inst_22030,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22032){
var map__22117 = p__22032;
var map__22117__$1 = ((((!((map__22117 == null)))?((((map__22117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22117):map__22117);
var namespace = cljs.core.get.call(null,map__22117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22000,inst_21998,inst_22034,inst_21994,inst_22002,inst_21997,inst_22030,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22034__$1 = cljs.core.group_by.call(null,inst_22033,inst_22000);
var inst_22036 = (inst_22034__$1 == null);
var inst_22037 = cljs.core.not.call(null,inst_22036);
var state_22081__$1 = (function (){var statearr_22119 = state_22081;
(statearr_22119[(16)] = inst_22034__$1);

(statearr_22119[(28)] = inst_22030);

return statearr_22119;
})();
if(inst_22037){
var statearr_22120_22193 = state_22081__$1;
(statearr_22120_22193[(1)] = (32));

} else {
var statearr_22121_22194 = state_22081__$1;
(statearr_22121_22194[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (44))){
var inst_22057 = (state_22081[(21)]);
var inst_22070 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22057);
var inst_22071 = cljs.core.pr_str.call(null,inst_22070);
var inst_22072 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22071)].join('');
var inst_22073 = figwheel.client.utils.log.call(null,inst_22072);
var state_22081__$1 = state_22081;
var statearr_22122_22195 = state_22081__$1;
(statearr_22122_22195[(2)] = inst_22073);

(statearr_22122_22195[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (6))){
var inst_21975 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22123_22196 = state_22081__$1;
(statearr_22123_22196[(2)] = inst_21975);

(statearr_22123_22196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (28))){
var inst_22000 = (state_22081[(26)]);
var inst_22027 = (state_22081[(2)]);
var inst_22028 = cljs.core.not_empty.call(null,inst_22000);
var state_22081__$1 = (function (){var statearr_22124 = state_22081;
(statearr_22124[(29)] = inst_22027);

return statearr_22124;
})();
if(cljs.core.truth_(inst_22028)){
var statearr_22125_22197 = state_22081__$1;
(statearr_22125_22197[(1)] = (29));

} else {
var statearr_22126_22198 = state_22081__$1;
(statearr_22126_22198[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (25))){
var inst_21998 = (state_22081[(23)]);
var inst_22014 = (state_22081[(2)]);
var inst_22015 = cljs.core.not_empty.call(null,inst_21998);
var state_22081__$1 = (function (){var statearr_22127 = state_22081;
(statearr_22127[(30)] = inst_22014);

return statearr_22127;
})();
if(cljs.core.truth_(inst_22015)){
var statearr_22128_22199 = state_22081__$1;
(statearr_22128_22199[(1)] = (26));

} else {
var statearr_22129_22200 = state_22081__$1;
(statearr_22129_22200[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (34))){
var inst_22050 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
if(cljs.core.truth_(inst_22050)){
var statearr_22130_22201 = state_22081__$1;
(statearr_22130_22201[(1)] = (38));

} else {
var statearr_22131_22202 = state_22081__$1;
(statearr_22131_22202[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (17))){
var state_22081__$1 = state_22081;
var statearr_22132_22203 = state_22081__$1;
(statearr_22132_22203[(2)] = recompile_dependents);

(statearr_22132_22203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (3))){
var state_22081__$1 = state_22081;
var statearr_22133_22204 = state_22081__$1;
(statearr_22133_22204[(2)] = null);

(statearr_22133_22204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (12))){
var inst_21971 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22134_22205 = state_22081__$1;
(statearr_22134_22205[(2)] = inst_21971);

(statearr_22134_22205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (2))){
var inst_21933 = (state_22081[(13)]);
var inst_21940 = cljs.core.seq.call(null,inst_21933);
var inst_21941 = inst_21940;
var inst_21942 = null;
var inst_21943 = (0);
var inst_21944 = (0);
var state_22081__$1 = (function (){var statearr_22135 = state_22081;
(statearr_22135[(7)] = inst_21941);

(statearr_22135[(8)] = inst_21943);

(statearr_22135[(9)] = inst_21944);

(statearr_22135[(10)] = inst_21942);

return statearr_22135;
})();
var statearr_22136_22206 = state_22081__$1;
(statearr_22136_22206[(2)] = null);

(statearr_22136_22206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (23))){
var inst_22000 = (state_22081[(26)]);
var inst_21998 = (state_22081[(23)]);
var inst_21994 = (state_22081[(19)]);
var inst_22002 = (state_22081[(24)]);
var inst_21997 = (state_22081[(25)]);
var inst_22005 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22007 = (function (){var all_files = inst_21994;
var res_SINGLEQUOTE_ = inst_21997;
var res = inst_21998;
var files_not_loaded = inst_22000;
var dependencies_that_loaded = inst_22002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22000,inst_21998,inst_21994,inst_22002,inst_21997,inst_22005,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22006){
var map__22137 = p__22006;
var map__22137__$1 = ((((!((map__22137 == null)))?((((map__22137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22137):map__22137);
var request_url = cljs.core.get.call(null,map__22137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22000,inst_21998,inst_21994,inst_22002,inst_21997,inst_22005,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22008 = cljs.core.reverse.call(null,inst_22002);
var inst_22009 = cljs.core.map.call(null,inst_22007,inst_22008);
var inst_22010 = cljs.core.pr_str.call(null,inst_22009);
var inst_22011 = figwheel.client.utils.log.call(null,inst_22010);
var state_22081__$1 = (function (){var statearr_22139 = state_22081;
(statearr_22139[(31)] = inst_22005);

return statearr_22139;
})();
var statearr_22140_22207 = state_22081__$1;
(statearr_22140_22207[(2)] = inst_22011);

(statearr_22140_22207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (35))){
var state_22081__$1 = state_22081;
var statearr_22141_22208 = state_22081__$1;
(statearr_22141_22208[(2)] = true);

(statearr_22141_22208[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (19))){
var inst_21984 = (state_22081[(12)]);
var inst_21990 = figwheel.client.file_reloading.expand_files.call(null,inst_21984);
var state_22081__$1 = state_22081;
var statearr_22142_22209 = state_22081__$1;
(statearr_22142_22209[(2)] = inst_21990);

(statearr_22142_22209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (11))){
var state_22081__$1 = state_22081;
var statearr_22143_22210 = state_22081__$1;
(statearr_22143_22210[(2)] = null);

(statearr_22143_22210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (9))){
var inst_21973 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22144_22211 = state_22081__$1;
(statearr_22144_22211[(2)] = inst_21973);

(statearr_22144_22211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (5))){
var inst_21943 = (state_22081[(8)]);
var inst_21944 = (state_22081[(9)]);
var inst_21946 = (inst_21944 < inst_21943);
var inst_21947 = inst_21946;
var state_22081__$1 = state_22081;
if(cljs.core.truth_(inst_21947)){
var statearr_22145_22212 = state_22081__$1;
(statearr_22145_22212[(1)] = (7));

} else {
var statearr_22146_22213 = state_22081__$1;
(statearr_22146_22213[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (14))){
var inst_21954 = (state_22081[(22)]);
var inst_21963 = cljs.core.first.call(null,inst_21954);
var inst_21964 = figwheel.client.file_reloading.eval_body.call(null,inst_21963,opts);
var inst_21965 = cljs.core.next.call(null,inst_21954);
var inst_21941 = inst_21965;
var inst_21942 = null;
var inst_21943 = (0);
var inst_21944 = (0);
var state_22081__$1 = (function (){var statearr_22147 = state_22081;
(statearr_22147[(7)] = inst_21941);

(statearr_22147[(32)] = inst_21964);

(statearr_22147[(8)] = inst_21943);

(statearr_22147[(9)] = inst_21944);

(statearr_22147[(10)] = inst_21942);

return statearr_22147;
})();
var statearr_22148_22214 = state_22081__$1;
(statearr_22148_22214[(2)] = null);

(statearr_22148_22214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (45))){
var state_22081__$1 = state_22081;
var statearr_22149_22215 = state_22081__$1;
(statearr_22149_22215[(2)] = null);

(statearr_22149_22215[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (26))){
var inst_22000 = (state_22081[(26)]);
var inst_21998 = (state_22081[(23)]);
var inst_21994 = (state_22081[(19)]);
var inst_22002 = (state_22081[(24)]);
var inst_21997 = (state_22081[(25)]);
var inst_22017 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22019 = (function (){var all_files = inst_21994;
var res_SINGLEQUOTE_ = inst_21997;
var res = inst_21998;
var files_not_loaded = inst_22000;
var dependencies_that_loaded = inst_22002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22000,inst_21998,inst_21994,inst_22002,inst_21997,inst_22017,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22018){
var map__22150 = p__22018;
var map__22150__$1 = ((((!((map__22150 == null)))?((((map__22150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22150):map__22150);
var namespace = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22000,inst_21998,inst_21994,inst_22002,inst_21997,inst_22017,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22020 = cljs.core.map.call(null,inst_22019,inst_21998);
var inst_22021 = cljs.core.pr_str.call(null,inst_22020);
var inst_22022 = figwheel.client.utils.log.call(null,inst_22021);
var inst_22023 = (function (){var all_files = inst_21994;
var res_SINGLEQUOTE_ = inst_21997;
var res = inst_21998;
var files_not_loaded = inst_22000;
var dependencies_that_loaded = inst_22002;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22000,inst_21998,inst_21994,inst_22002,inst_21997,inst_22017,inst_22019,inst_22020,inst_22021,inst_22022,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22000,inst_21998,inst_21994,inst_22002,inst_21997,inst_22017,inst_22019,inst_22020,inst_22021,inst_22022,state_val_22082,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22024 = setTimeout(inst_22023,(10));
var state_22081__$1 = (function (){var statearr_22152 = state_22081;
(statearr_22152[(33)] = inst_22017);

(statearr_22152[(34)] = inst_22022);

return statearr_22152;
})();
var statearr_22153_22216 = state_22081__$1;
(statearr_22153_22216[(2)] = inst_22024);

(statearr_22153_22216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (16))){
var state_22081__$1 = state_22081;
var statearr_22154_22217 = state_22081__$1;
(statearr_22154_22217[(2)] = reload_dependents);

(statearr_22154_22217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (38))){
var inst_22034 = (state_22081[(16)]);
var inst_22052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22034);
var state_22081__$1 = state_22081;
var statearr_22155_22218 = state_22081__$1;
(statearr_22155_22218[(2)] = inst_22052);

(statearr_22155_22218[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (30))){
var state_22081__$1 = state_22081;
var statearr_22156_22219 = state_22081__$1;
(statearr_22156_22219[(2)] = null);

(statearr_22156_22219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (10))){
var inst_21954 = (state_22081[(22)]);
var inst_21956 = cljs.core.chunked_seq_QMARK_.call(null,inst_21954);
var state_22081__$1 = state_22081;
if(inst_21956){
var statearr_22157_22220 = state_22081__$1;
(statearr_22157_22220[(1)] = (13));

} else {
var statearr_22158_22221 = state_22081__$1;
(statearr_22158_22221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (18))){
var inst_21988 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
if(cljs.core.truth_(inst_21988)){
var statearr_22159_22222 = state_22081__$1;
(statearr_22159_22222[(1)] = (19));

} else {
var statearr_22160_22223 = state_22081__$1;
(statearr_22160_22223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (42))){
var state_22081__$1 = state_22081;
var statearr_22161_22224 = state_22081__$1;
(statearr_22161_22224[(2)] = null);

(statearr_22161_22224[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (37))){
var inst_22047 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22162_22225 = state_22081__$1;
(statearr_22162_22225[(2)] = inst_22047);

(statearr_22162_22225[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (8))){
var inst_21941 = (state_22081[(7)]);
var inst_21954 = (state_22081[(22)]);
var inst_21954__$1 = cljs.core.seq.call(null,inst_21941);
var state_22081__$1 = (function (){var statearr_22163 = state_22081;
(statearr_22163[(22)] = inst_21954__$1);

return statearr_22163;
})();
if(inst_21954__$1){
var statearr_22164_22226 = state_22081__$1;
(statearr_22164_22226[(1)] = (10));

} else {
var statearr_22165_22227 = state_22081__$1;
(statearr_22165_22227[(1)] = (11));

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
});})(c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__16939__auto__,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____0 = (function (){
var statearr_22166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22166[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__);

(statearr_22166[(1)] = (1));

return statearr_22166;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____1 = (function (state_22081){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_22081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e22167){if((e22167 instanceof Object)){
var ex__16943__auto__ = e22167;
var statearr_22168_22228 = state_22081;
(statearr_22168_22228[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22229 = state_22081;
state_22081 = G__22229;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__ = function(state_22081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____1.call(this,state_22081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__17031__auto__ = (function (){var statearr_22169 = f__17030__auto__.call(null);
(statearr_22169[(6)] = c__17029__auto__);

return statearr_22169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__,map__21926,map__21926__$1,opts,before_jsload,on_jsload,reload_dependents,map__21927,map__21927__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__17029__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22232,link){
var map__22233 = p__22232;
var map__22233__$1 = ((((!((map__22233 == null)))?((((map__22233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22233):map__22233);
var file = cljs.core.get.call(null,map__22233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__22233,map__22233__$1,file){
return (function (p1__22230_SHARP_,p2__22231_SHARP_){
if(cljs.core._EQ_.call(null,p1__22230_SHARP_,p2__22231_SHARP_)){
return p1__22230_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__22233,map__22233__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22236){
var map__22237 = p__22236;
var map__22237__$1 = ((((!((map__22237 == null)))?((((map__22237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22237):map__22237);
var match_length = cljs.core.get.call(null,map__22237__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22237__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22235_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22235_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22239_SHARP_,p2__22240_SHARP_){
return cljs.core.assoc.call(null,p1__22239_SHARP_,cljs.core.get.call(null,p2__22240_SHARP_,key),p2__22240_SHARP_);
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
var loaded_f_datas_22241 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_22241);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_22241);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22242,p__22243){
var map__22244 = p__22242;
var map__22244__$1 = ((((!((map__22244 == null)))?((((map__22244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22244):map__22244);
var on_cssload = cljs.core.get.call(null,map__22244__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__22245 = p__22243;
var map__22245__$1 = ((((!((map__22245 == null)))?((((map__22245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22245):map__22245);
var files_msg = map__22245__$1;
var files = cljs.core.get.call(null,map__22245__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1505319632808
