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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21649_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21649_SHARP_));
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
var seq__21650 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21651 = null;
var count__21652 = (0);
var i__21653 = (0);
while(true){
if((i__21653 < count__21652)){
var n = cljs.core._nth.call(null,chunk__21651,i__21653);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21654 = seq__21650;
var G__21655 = chunk__21651;
var G__21656 = count__21652;
var G__21657 = (i__21653 + (1));
seq__21650 = G__21654;
chunk__21651 = G__21655;
count__21652 = G__21656;
i__21653 = G__21657;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21650);
if(temp__6738__auto__){
var seq__21650__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21650__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21650__$1);
var G__21658 = cljs.core.chunk_rest.call(null,seq__21650__$1);
var G__21659 = c__10741__auto__;
var G__21660 = cljs.core.count.call(null,c__10741__auto__);
var G__21661 = (0);
seq__21650 = G__21658;
chunk__21651 = G__21659;
count__21652 = G__21660;
i__21653 = G__21661;
continue;
} else {
var n = cljs.core.first.call(null,seq__21650__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21662 = cljs.core.next.call(null,seq__21650__$1);
var G__21663 = null;
var G__21664 = (0);
var G__21665 = (0);
seq__21650 = G__21662;
chunk__21651 = G__21663;
count__21652 = G__21664;
i__21653 = G__21665;
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

var seq__21675_21683 = cljs.core.seq.call(null,deps);
var chunk__21676_21684 = null;
var count__21677_21685 = (0);
var i__21678_21686 = (0);
while(true){
if((i__21678_21686 < count__21677_21685)){
var dep_21687 = cljs.core._nth.call(null,chunk__21676_21684,i__21678_21686);
topo_sort_helper_STAR_.call(null,dep_21687,(depth + (1)),state);

var G__21688 = seq__21675_21683;
var G__21689 = chunk__21676_21684;
var G__21690 = count__21677_21685;
var G__21691 = (i__21678_21686 + (1));
seq__21675_21683 = G__21688;
chunk__21676_21684 = G__21689;
count__21677_21685 = G__21690;
i__21678_21686 = G__21691;
continue;
} else {
var temp__6738__auto___21692 = cljs.core.seq.call(null,seq__21675_21683);
if(temp__6738__auto___21692){
var seq__21675_21693__$1 = temp__6738__auto___21692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21675_21693__$1)){
var c__10741__auto___21694 = cljs.core.chunk_first.call(null,seq__21675_21693__$1);
var G__21695 = cljs.core.chunk_rest.call(null,seq__21675_21693__$1);
var G__21696 = c__10741__auto___21694;
var G__21697 = cljs.core.count.call(null,c__10741__auto___21694);
var G__21698 = (0);
seq__21675_21683 = G__21695;
chunk__21676_21684 = G__21696;
count__21677_21685 = G__21697;
i__21678_21686 = G__21698;
continue;
} else {
var dep_21699 = cljs.core.first.call(null,seq__21675_21693__$1);
topo_sort_helper_STAR_.call(null,dep_21699,(depth + (1)),state);

var G__21700 = cljs.core.next.call(null,seq__21675_21693__$1);
var G__21701 = null;
var G__21702 = (0);
var G__21703 = (0);
seq__21675_21683 = G__21700;
chunk__21676_21684 = G__21701;
count__21677_21685 = G__21702;
i__21678_21686 = G__21703;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21679){
var vec__21680 = p__21679;
var seq__21681 = cljs.core.seq.call(null,vec__21680);
var first__21682 = cljs.core.first.call(null,seq__21681);
var seq__21681__$1 = cljs.core.next.call(null,seq__21681);
var x = first__21682;
var xs = seq__21681__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21680,seq__21681,first__21682,seq__21681__$1,x,xs,get_deps__$1){
return (function (p1__21666_SHARP_){
return clojure.set.difference.call(null,p1__21666_SHARP_,x);
});})(vec__21680,seq__21681,first__21682,seq__21681__$1,x,xs,get_deps__$1))
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
var seq__21704 = cljs.core.seq.call(null,provides);
var chunk__21705 = null;
var count__21706 = (0);
var i__21707 = (0);
while(true){
if((i__21707 < count__21706)){
var prov = cljs.core._nth.call(null,chunk__21705,i__21707);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21708_21716 = cljs.core.seq.call(null,requires);
var chunk__21709_21717 = null;
var count__21710_21718 = (0);
var i__21711_21719 = (0);
while(true){
if((i__21711_21719 < count__21710_21718)){
var req_21720 = cljs.core._nth.call(null,chunk__21709_21717,i__21711_21719);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21720,prov);

var G__21721 = seq__21708_21716;
var G__21722 = chunk__21709_21717;
var G__21723 = count__21710_21718;
var G__21724 = (i__21711_21719 + (1));
seq__21708_21716 = G__21721;
chunk__21709_21717 = G__21722;
count__21710_21718 = G__21723;
i__21711_21719 = G__21724;
continue;
} else {
var temp__6738__auto___21725 = cljs.core.seq.call(null,seq__21708_21716);
if(temp__6738__auto___21725){
var seq__21708_21726__$1 = temp__6738__auto___21725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21708_21726__$1)){
var c__10741__auto___21727 = cljs.core.chunk_first.call(null,seq__21708_21726__$1);
var G__21728 = cljs.core.chunk_rest.call(null,seq__21708_21726__$1);
var G__21729 = c__10741__auto___21727;
var G__21730 = cljs.core.count.call(null,c__10741__auto___21727);
var G__21731 = (0);
seq__21708_21716 = G__21728;
chunk__21709_21717 = G__21729;
count__21710_21718 = G__21730;
i__21711_21719 = G__21731;
continue;
} else {
var req_21732 = cljs.core.first.call(null,seq__21708_21726__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21732,prov);

var G__21733 = cljs.core.next.call(null,seq__21708_21726__$1);
var G__21734 = null;
var G__21735 = (0);
var G__21736 = (0);
seq__21708_21716 = G__21733;
chunk__21709_21717 = G__21734;
count__21710_21718 = G__21735;
i__21711_21719 = G__21736;
continue;
}
} else {
}
}
break;
}

var G__21737 = seq__21704;
var G__21738 = chunk__21705;
var G__21739 = count__21706;
var G__21740 = (i__21707 + (1));
seq__21704 = G__21737;
chunk__21705 = G__21738;
count__21706 = G__21739;
i__21707 = G__21740;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21704);
if(temp__6738__auto__){
var seq__21704__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21704__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21704__$1);
var G__21741 = cljs.core.chunk_rest.call(null,seq__21704__$1);
var G__21742 = c__10741__auto__;
var G__21743 = cljs.core.count.call(null,c__10741__auto__);
var G__21744 = (0);
seq__21704 = G__21741;
chunk__21705 = G__21742;
count__21706 = G__21743;
i__21707 = G__21744;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21704__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21712_21745 = cljs.core.seq.call(null,requires);
var chunk__21713_21746 = null;
var count__21714_21747 = (0);
var i__21715_21748 = (0);
while(true){
if((i__21715_21748 < count__21714_21747)){
var req_21749 = cljs.core._nth.call(null,chunk__21713_21746,i__21715_21748);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21749,prov);

var G__21750 = seq__21712_21745;
var G__21751 = chunk__21713_21746;
var G__21752 = count__21714_21747;
var G__21753 = (i__21715_21748 + (1));
seq__21712_21745 = G__21750;
chunk__21713_21746 = G__21751;
count__21714_21747 = G__21752;
i__21715_21748 = G__21753;
continue;
} else {
var temp__6738__auto___21754__$1 = cljs.core.seq.call(null,seq__21712_21745);
if(temp__6738__auto___21754__$1){
var seq__21712_21755__$1 = temp__6738__auto___21754__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21712_21755__$1)){
var c__10741__auto___21756 = cljs.core.chunk_first.call(null,seq__21712_21755__$1);
var G__21757 = cljs.core.chunk_rest.call(null,seq__21712_21755__$1);
var G__21758 = c__10741__auto___21756;
var G__21759 = cljs.core.count.call(null,c__10741__auto___21756);
var G__21760 = (0);
seq__21712_21745 = G__21757;
chunk__21713_21746 = G__21758;
count__21714_21747 = G__21759;
i__21715_21748 = G__21760;
continue;
} else {
var req_21761 = cljs.core.first.call(null,seq__21712_21755__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21761,prov);

var G__21762 = cljs.core.next.call(null,seq__21712_21755__$1);
var G__21763 = null;
var G__21764 = (0);
var G__21765 = (0);
seq__21712_21745 = G__21762;
chunk__21713_21746 = G__21763;
count__21714_21747 = G__21764;
i__21715_21748 = G__21765;
continue;
}
} else {
}
}
break;
}

var G__21766 = cljs.core.next.call(null,seq__21704__$1);
var G__21767 = null;
var G__21768 = (0);
var G__21769 = (0);
seq__21704 = G__21766;
chunk__21705 = G__21767;
count__21706 = G__21768;
i__21707 = G__21769;
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
var seq__21770_21774 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21771_21775 = null;
var count__21772_21776 = (0);
var i__21773_21777 = (0);
while(true){
if((i__21773_21777 < count__21772_21776)){
var ns_21778 = cljs.core._nth.call(null,chunk__21771_21775,i__21773_21777);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21778);

var G__21779 = seq__21770_21774;
var G__21780 = chunk__21771_21775;
var G__21781 = count__21772_21776;
var G__21782 = (i__21773_21777 + (1));
seq__21770_21774 = G__21779;
chunk__21771_21775 = G__21780;
count__21772_21776 = G__21781;
i__21773_21777 = G__21782;
continue;
} else {
var temp__6738__auto___21783 = cljs.core.seq.call(null,seq__21770_21774);
if(temp__6738__auto___21783){
var seq__21770_21784__$1 = temp__6738__auto___21783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21770_21784__$1)){
var c__10741__auto___21785 = cljs.core.chunk_first.call(null,seq__21770_21784__$1);
var G__21786 = cljs.core.chunk_rest.call(null,seq__21770_21784__$1);
var G__21787 = c__10741__auto___21785;
var G__21788 = cljs.core.count.call(null,c__10741__auto___21785);
var G__21789 = (0);
seq__21770_21774 = G__21786;
chunk__21771_21775 = G__21787;
count__21772_21776 = G__21788;
i__21773_21777 = G__21789;
continue;
} else {
var ns_21790 = cljs.core.first.call(null,seq__21770_21784__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21790);

var G__21791 = cljs.core.next.call(null,seq__21770_21784__$1);
var G__21792 = null;
var G__21793 = (0);
var G__21794 = (0);
seq__21770_21774 = G__21791;
chunk__21771_21775 = G__21792;
count__21772_21776 = G__21793;
i__21773_21777 = G__21794;
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
var G__21795__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21796__i = 0, G__21796__a = new Array(arguments.length -  0);
while (G__21796__i < G__21796__a.length) {G__21796__a[G__21796__i] = arguments[G__21796__i + 0]; ++G__21796__i;}
  args = new cljs.core.IndexedSeq(G__21796__a,0,null);
} 
return G__21795__delegate.call(this,args);};
G__21795.cljs$lang$maxFixedArity = 0;
G__21795.cljs$lang$applyTo = (function (arglist__21797){
var args = cljs.core.seq(arglist__21797);
return G__21795__delegate(args);
});
G__21795.cljs$core$IFn$_invoke$arity$variadic = G__21795__delegate;
return G__21795;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__21798_SHARP_,p2__21799_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21798_SHARP_)].join('')),p2__21799_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__21800_SHARP_,p2__21801_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21800_SHARP_)].join(''),p2__21801_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__21802 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__21802.addCallback(((function (G__21802){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__21802))
);

G__21802.addErrback(((function (G__21802){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__21802))
);

return G__21802;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21803 = cljs.core._EQ_;
var expr__21804 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21803.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21804))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__21803,expr__21804){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__21803,expr__21804))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__21803,expr__21804){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21806){if((e21806 instanceof Error)){
var e = e21806;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21806;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__21803,expr__21804))
} else {
if(cljs.core.truth_(pred__21803.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21804))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__21803.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__21804))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__21803.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__21804))){
return ((function (pred__21803,expr__21804){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e21807){if((e21807 instanceof Error)){
var e = e21807;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21807;

}
}})());
});
;})(pred__21803,expr__21804))
} else {
return ((function (pred__21803,expr__21804){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21803,expr__21804))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21808,callback){
var map__21809 = p__21808;
var map__21809__$1 = ((((!((map__21809 == null)))?((((map__21809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21809):map__21809);
var file_msg = map__21809__$1;
var request_url = cljs.core.get.call(null,map__21809__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21809,map__21809__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21809,map__21809__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__){
return (function (state_21833){
var state_val_21834 = (state_21833[(1)]);
if((state_val_21834 === (7))){
var inst_21829 = (state_21833[(2)]);
var state_21833__$1 = state_21833;
var statearr_21835_21852 = state_21833__$1;
(statearr_21835_21852[(2)] = inst_21829);

(statearr_21835_21852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (1))){
var state_21833__$1 = state_21833;
var statearr_21836_21853 = state_21833__$1;
(statearr_21836_21853[(2)] = null);

(statearr_21836_21853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (4))){
var inst_21813 = (state_21833[(7)]);
var inst_21813__$1 = (state_21833[(2)]);
var state_21833__$1 = (function (){var statearr_21837 = state_21833;
(statearr_21837[(7)] = inst_21813__$1);

return statearr_21837;
})();
if(cljs.core.truth_(inst_21813__$1)){
var statearr_21838_21854 = state_21833__$1;
(statearr_21838_21854[(1)] = (5));

} else {
var statearr_21839_21855 = state_21833__$1;
(statearr_21839_21855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (6))){
var state_21833__$1 = state_21833;
var statearr_21840_21856 = state_21833__$1;
(statearr_21840_21856[(2)] = null);

(statearr_21840_21856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (3))){
var inst_21831 = (state_21833[(2)]);
var state_21833__$1 = state_21833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21833__$1,inst_21831);
} else {
if((state_val_21834 === (2))){
var state_21833__$1 = state_21833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21833__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21834 === (11))){
var inst_21825 = (state_21833[(2)]);
var state_21833__$1 = (function (){var statearr_21841 = state_21833;
(statearr_21841[(8)] = inst_21825);

return statearr_21841;
})();
var statearr_21842_21857 = state_21833__$1;
(statearr_21842_21857[(2)] = null);

(statearr_21842_21857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (9))){
var inst_21819 = (state_21833[(9)]);
var inst_21817 = (state_21833[(10)]);
var inst_21821 = inst_21819.call(null,inst_21817);
var state_21833__$1 = state_21833;
var statearr_21843_21858 = state_21833__$1;
(statearr_21843_21858[(2)] = inst_21821);

(statearr_21843_21858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (5))){
var inst_21813 = (state_21833[(7)]);
var inst_21815 = figwheel.client.file_reloading.blocking_load.call(null,inst_21813);
var state_21833__$1 = state_21833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21833__$1,(8),inst_21815);
} else {
if((state_val_21834 === (10))){
var inst_21817 = (state_21833[(10)]);
var inst_21823 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21817);
var state_21833__$1 = state_21833;
var statearr_21844_21859 = state_21833__$1;
(statearr_21844_21859[(2)] = inst_21823);

(statearr_21844_21859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (8))){
var inst_21813 = (state_21833[(7)]);
var inst_21819 = (state_21833[(9)]);
var inst_21817 = (state_21833[(2)]);
var inst_21818 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21819__$1 = cljs.core.get.call(null,inst_21818,inst_21813);
var state_21833__$1 = (function (){var statearr_21845 = state_21833;
(statearr_21845[(9)] = inst_21819__$1);

(statearr_21845[(10)] = inst_21817);

return statearr_21845;
})();
if(cljs.core.truth_(inst_21819__$1)){
var statearr_21846_21860 = state_21833__$1;
(statearr_21846_21860[(1)] = (9));

} else {
var statearr_21847_21861 = state_21833__$1;
(statearr_21847_21861[(1)] = (10));

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
});})(c__14384__auto__))
;
return ((function (switch__14294__auto__,c__14384__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__14295__auto__ = null;
var figwheel$client$file_reloading$state_machine__14295__auto____0 = (function (){
var statearr_21848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21848[(0)] = figwheel$client$file_reloading$state_machine__14295__auto__);

(statearr_21848[(1)] = (1));

return statearr_21848;
});
var figwheel$client$file_reloading$state_machine__14295__auto____1 = (function (state_21833){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_21833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e21849){if((e21849 instanceof Object)){
var ex__14298__auto__ = e21849;
var statearr_21850_21862 = state_21833;
(statearr_21850_21862[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21863 = state_21833;
state_21833 = G__21863;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__14295__auto__ = function(state_21833){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__14295__auto____1.call(this,state_21833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__14295__auto____0;
figwheel$client$file_reloading$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__14295__auto____1;
return figwheel$client$file_reloading$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__))
})();
var state__14386__auto__ = (function (){var statearr_21851 = f__14385__auto__.call(null);
(statearr_21851[(6)] = c__14384__auto__);

return statearr_21851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__))
);

return c__14384__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21864,callback){
var map__21865 = p__21864;
var map__21865__$1 = ((((!((map__21865 == null)))?((((map__21865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21865):map__21865);
var file_msg = map__21865__$1;
var namespace = cljs.core.get.call(null,map__21865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21865,map__21865__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21865,map__21865__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__21867){
var map__21868 = p__21867;
var map__21868__$1 = ((((!((map__21868 == null)))?((((map__21868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21868):map__21868);
var file_msg = map__21868__$1;
var namespace = cljs.core.get.call(null,map__21868__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21870){
var map__21871 = p__21870;
var map__21871__$1 = ((((!((map__21871 == null)))?((((map__21871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21871):map__21871);
var file_msg = map__21871__$1;
var namespace = cljs.core.get.call(null,map__21871__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21873,callback){
var map__21874 = p__21873;
var map__21874__$1 = ((((!((map__21874 == null)))?((((map__21874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21874):map__21874);
var file_msg = map__21874__$1;
var request_url = cljs.core.get.call(null,map__21874__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__14384__auto___21924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___21924,out){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___21924,out){
return (function (state_21909){
var state_val_21910 = (state_21909[(1)]);
if((state_val_21910 === (1))){
var inst_21883 = cljs.core.seq.call(null,files);
var inst_21884 = cljs.core.first.call(null,inst_21883);
var inst_21885 = cljs.core.next.call(null,inst_21883);
var inst_21886 = files;
var state_21909__$1 = (function (){var statearr_21911 = state_21909;
(statearr_21911[(7)] = inst_21886);

(statearr_21911[(8)] = inst_21885);

(statearr_21911[(9)] = inst_21884);

return statearr_21911;
})();
var statearr_21912_21925 = state_21909__$1;
(statearr_21912_21925[(2)] = null);

(statearr_21912_21925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (2))){
var inst_21886 = (state_21909[(7)]);
var inst_21892 = (state_21909[(10)]);
var inst_21891 = cljs.core.seq.call(null,inst_21886);
var inst_21892__$1 = cljs.core.first.call(null,inst_21891);
var inst_21893 = cljs.core.next.call(null,inst_21891);
var inst_21894 = (inst_21892__$1 == null);
var inst_21895 = cljs.core.not.call(null,inst_21894);
var state_21909__$1 = (function (){var statearr_21913 = state_21909;
(statearr_21913[(11)] = inst_21893);

(statearr_21913[(10)] = inst_21892__$1);

return statearr_21913;
})();
if(inst_21895){
var statearr_21914_21926 = state_21909__$1;
(statearr_21914_21926[(1)] = (4));

} else {
var statearr_21915_21927 = state_21909__$1;
(statearr_21915_21927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (3))){
var inst_21907 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21909__$1,inst_21907);
} else {
if((state_val_21910 === (4))){
var inst_21892 = (state_21909[(10)]);
var inst_21897 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21892);
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21909__$1,(7),inst_21897);
} else {
if((state_val_21910 === (5))){
var inst_21903 = cljs.core.async.close_BANG_.call(null,out);
var state_21909__$1 = state_21909;
var statearr_21916_21928 = state_21909__$1;
(statearr_21916_21928[(2)] = inst_21903);

(statearr_21916_21928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (6))){
var inst_21905 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
var statearr_21917_21929 = state_21909__$1;
(statearr_21917_21929[(2)] = inst_21905);

(statearr_21917_21929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (7))){
var inst_21893 = (state_21909[(11)]);
var inst_21899 = (state_21909[(2)]);
var inst_21900 = cljs.core.async.put_BANG_.call(null,out,inst_21899);
var inst_21886 = inst_21893;
var state_21909__$1 = (function (){var statearr_21918 = state_21909;
(statearr_21918[(7)] = inst_21886);

(statearr_21918[(12)] = inst_21900);

return statearr_21918;
})();
var statearr_21919_21930 = state_21909__$1;
(statearr_21919_21930[(2)] = null);

(statearr_21919_21930[(1)] = (2));


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
});})(c__14384__auto___21924,out))
;
return ((function (switch__14294__auto__,c__14384__auto___21924,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____0 = (function (){
var statearr_21920 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21920[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__);

(statearr_21920[(1)] = (1));

return statearr_21920;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____1 = (function (state_21909){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_21909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e21921){if((e21921 instanceof Object)){
var ex__14298__auto__ = e21921;
var statearr_21922_21931 = state_21909;
(statearr_21922_21931[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21932 = state_21909;
state_21909 = G__21932;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__ = function(state_21909){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____1.call(this,state_21909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___21924,out))
})();
var state__14386__auto__ = (function (){var statearr_21923 = f__14385__auto__.call(null);
(statearr_21923[(6)] = c__14384__auto___21924);

return statearr_21923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___21924,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21933,opts){
var map__21934 = p__21933;
var map__21934__$1 = ((((!((map__21934 == null)))?((((map__21934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21934):map__21934);
var eval_body = cljs.core.get.call(null,map__21934__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e21936){var e = e21936;
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
return (function (p1__21937_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21937_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__21938){
var vec__21939 = p__21938;
var k = cljs.core.nth.call(null,vec__21939,(0),null);
var v = cljs.core.nth.call(null,vec__21939,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21942){
var vec__21943 = p__21942;
var k = cljs.core.nth.call(null,vec__21943,(0),null);
var v = cljs.core.nth.call(null,vec__21943,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21949,p__21950){
var map__21951 = p__21949;
var map__21951__$1 = ((((!((map__21951 == null)))?((((map__21951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21951):map__21951);
var opts = map__21951__$1;
var before_jsload = cljs.core.get.call(null,map__21951__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21951__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21951__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21952 = p__21950;
var map__21952__$1 = ((((!((map__21952 == null)))?((((map__21952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21952):map__21952);
var msg = map__21952__$1;
var files = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21952__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22106){
var state_val_22107 = (state_22106[(1)]);
if((state_val_22107 === (7))){
var inst_21968 = (state_22106[(7)]);
var inst_21969 = (state_22106[(8)]);
var inst_21967 = (state_22106[(9)]);
var inst_21966 = (state_22106[(10)]);
var inst_21974 = cljs.core._nth.call(null,inst_21967,inst_21969);
var inst_21975 = figwheel.client.file_reloading.eval_body.call(null,inst_21974,opts);
var inst_21976 = (inst_21969 + (1));
var tmp22108 = inst_21968;
var tmp22109 = inst_21967;
var tmp22110 = inst_21966;
var inst_21966__$1 = tmp22110;
var inst_21967__$1 = tmp22109;
var inst_21968__$1 = tmp22108;
var inst_21969__$1 = inst_21976;
var state_22106__$1 = (function (){var statearr_22111 = state_22106;
(statearr_22111[(7)] = inst_21968__$1);

(statearr_22111[(8)] = inst_21969__$1);

(statearr_22111[(11)] = inst_21975);

(statearr_22111[(9)] = inst_21967__$1);

(statearr_22111[(10)] = inst_21966__$1);

return statearr_22111;
})();
var statearr_22112_22195 = state_22106__$1;
(statearr_22112_22195[(2)] = null);

(statearr_22112_22195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (20))){
var inst_22009 = (state_22106[(12)]);
var inst_22017 = figwheel.client.file_reloading.sort_files.call(null,inst_22009);
var state_22106__$1 = state_22106;
var statearr_22113_22196 = state_22106__$1;
(statearr_22113_22196[(2)] = inst_22017);

(statearr_22113_22196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (27))){
var state_22106__$1 = state_22106;
var statearr_22114_22197 = state_22106__$1;
(statearr_22114_22197[(2)] = null);

(statearr_22114_22197[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (1))){
var inst_21958 = (state_22106[(13)]);
var inst_21955 = before_jsload.call(null,files);
var inst_21956 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21957 = (function (){return ((function (inst_21958,inst_21955,inst_21956,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21946_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21946_SHARP_);
});
;})(inst_21958,inst_21955,inst_21956,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21958__$1 = cljs.core.filter.call(null,inst_21957,files);
var inst_21959 = cljs.core.not_empty.call(null,inst_21958__$1);
var state_22106__$1 = (function (){var statearr_22115 = state_22106;
(statearr_22115[(13)] = inst_21958__$1);

(statearr_22115[(14)] = inst_21956);

(statearr_22115[(15)] = inst_21955);

return statearr_22115;
})();
if(cljs.core.truth_(inst_21959)){
var statearr_22116_22198 = state_22106__$1;
(statearr_22116_22198[(1)] = (2));

} else {
var statearr_22117_22199 = state_22106__$1;
(statearr_22117_22199[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (24))){
var state_22106__$1 = state_22106;
var statearr_22118_22200 = state_22106__$1;
(statearr_22118_22200[(2)] = null);

(statearr_22118_22200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (39))){
var inst_22059 = (state_22106[(16)]);
var state_22106__$1 = state_22106;
var statearr_22119_22201 = state_22106__$1;
(statearr_22119_22201[(2)] = inst_22059);

(statearr_22119_22201[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (46))){
var inst_22101 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22120_22202 = state_22106__$1;
(statearr_22120_22202[(2)] = inst_22101);

(statearr_22120_22202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (4))){
var inst_22003 = (state_22106[(2)]);
var inst_22004 = cljs.core.List.EMPTY;
var inst_22005 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22004);
var inst_22006 = (function (){return ((function (inst_22003,inst_22004,inst_22005,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21947_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21947_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21947_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__21947_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_22003,inst_22004,inst_22005,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22007 = cljs.core.filter.call(null,inst_22006,files);
var inst_22008 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22009 = cljs.core.concat.call(null,inst_22007,inst_22008);
var state_22106__$1 = (function (){var statearr_22121 = state_22106;
(statearr_22121[(12)] = inst_22009);

(statearr_22121[(17)] = inst_22003);

(statearr_22121[(18)] = inst_22005);

return statearr_22121;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22122_22203 = state_22106__$1;
(statearr_22122_22203[(1)] = (16));

} else {
var statearr_22123_22204 = state_22106__$1;
(statearr_22123_22204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (15))){
var inst_21993 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22124_22205 = state_22106__$1;
(statearr_22124_22205[(2)] = inst_21993);

(statearr_22124_22205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (21))){
var inst_22019 = (state_22106[(19)]);
var inst_22019__$1 = (state_22106[(2)]);
var inst_22020 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22019__$1);
var state_22106__$1 = (function (){var statearr_22125 = state_22106;
(statearr_22125[(19)] = inst_22019__$1);

return statearr_22125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22106__$1,(22),inst_22020);
} else {
if((state_val_22107 === (31))){
var inst_22104 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22106__$1,inst_22104);
} else {
if((state_val_22107 === (32))){
var inst_22059 = (state_22106[(16)]);
var inst_22064 = inst_22059.cljs$lang$protocol_mask$partition0$;
var inst_22065 = (inst_22064 & (64));
var inst_22066 = inst_22059.cljs$core$ISeq$;
var inst_22067 = (cljs.core.PROTOCOL_SENTINEL === inst_22066);
var inst_22068 = (inst_22065) || (inst_22067);
var state_22106__$1 = state_22106;
if(cljs.core.truth_(inst_22068)){
var statearr_22126_22206 = state_22106__$1;
(statearr_22126_22206[(1)] = (35));

} else {
var statearr_22127_22207 = state_22106__$1;
(statearr_22127_22207[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (40))){
var inst_22081 = (state_22106[(20)]);
var inst_22080 = (state_22106[(2)]);
var inst_22081__$1 = cljs.core.get.call(null,inst_22080,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22082 = cljs.core.get.call(null,inst_22080,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22083 = cljs.core.not_empty.call(null,inst_22081__$1);
var state_22106__$1 = (function (){var statearr_22128 = state_22106;
(statearr_22128[(20)] = inst_22081__$1);

(statearr_22128[(21)] = inst_22082);

return statearr_22128;
})();
if(cljs.core.truth_(inst_22083)){
var statearr_22129_22208 = state_22106__$1;
(statearr_22129_22208[(1)] = (41));

} else {
var statearr_22130_22209 = state_22106__$1;
(statearr_22130_22209[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (33))){
var state_22106__$1 = state_22106;
var statearr_22131_22210 = state_22106__$1;
(statearr_22131_22210[(2)] = false);

(statearr_22131_22210[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (13))){
var inst_21979 = (state_22106[(22)]);
var inst_21983 = cljs.core.chunk_first.call(null,inst_21979);
var inst_21984 = cljs.core.chunk_rest.call(null,inst_21979);
var inst_21985 = cljs.core.count.call(null,inst_21983);
var inst_21966 = inst_21984;
var inst_21967 = inst_21983;
var inst_21968 = inst_21985;
var inst_21969 = (0);
var state_22106__$1 = (function (){var statearr_22132 = state_22106;
(statearr_22132[(7)] = inst_21968);

(statearr_22132[(8)] = inst_21969);

(statearr_22132[(9)] = inst_21967);

(statearr_22132[(10)] = inst_21966);

return statearr_22132;
})();
var statearr_22133_22211 = state_22106__$1;
(statearr_22133_22211[(2)] = null);

(statearr_22133_22211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (22))){
var inst_22019 = (state_22106[(19)]);
var inst_22023 = (state_22106[(23)]);
var inst_22027 = (state_22106[(24)]);
var inst_22022 = (state_22106[(25)]);
var inst_22022__$1 = (state_22106[(2)]);
var inst_22023__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22022__$1);
var inst_22024 = (function (){var all_files = inst_22019;
var res_SINGLEQUOTE_ = inst_22022__$1;
var res = inst_22023__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22019,inst_22023,inst_22027,inst_22022,inst_22022__$1,inst_22023__$1,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21948_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21948_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22019,inst_22023,inst_22027,inst_22022,inst_22022__$1,inst_22023__$1,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22025 = cljs.core.filter.call(null,inst_22024,inst_22022__$1);
var inst_22026 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22027__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22026);
var inst_22028 = cljs.core.not_empty.call(null,inst_22027__$1);
var state_22106__$1 = (function (){var statearr_22134 = state_22106;
(statearr_22134[(23)] = inst_22023__$1);

(statearr_22134[(24)] = inst_22027__$1);

(statearr_22134[(26)] = inst_22025);

(statearr_22134[(25)] = inst_22022__$1);

return statearr_22134;
})();
if(cljs.core.truth_(inst_22028)){
var statearr_22135_22212 = state_22106__$1;
(statearr_22135_22212[(1)] = (23));

} else {
var statearr_22136_22213 = state_22106__$1;
(statearr_22136_22213[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (36))){
var state_22106__$1 = state_22106;
var statearr_22137_22214 = state_22106__$1;
(statearr_22137_22214[(2)] = false);

(statearr_22137_22214[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (41))){
var inst_22081 = (state_22106[(20)]);
var inst_22085 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22086 = cljs.core.map.call(null,inst_22085,inst_22081);
var inst_22087 = cljs.core.pr_str.call(null,inst_22086);
var inst_22088 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22087)].join('');
var inst_22089 = figwheel.client.utils.log.call(null,inst_22088);
var state_22106__$1 = state_22106;
var statearr_22138_22215 = state_22106__$1;
(statearr_22138_22215[(2)] = inst_22089);

(statearr_22138_22215[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (43))){
var inst_22082 = (state_22106[(21)]);
var inst_22092 = (state_22106[(2)]);
var inst_22093 = cljs.core.not_empty.call(null,inst_22082);
var state_22106__$1 = (function (){var statearr_22139 = state_22106;
(statearr_22139[(27)] = inst_22092);

return statearr_22139;
})();
if(cljs.core.truth_(inst_22093)){
var statearr_22140_22216 = state_22106__$1;
(statearr_22140_22216[(1)] = (44));

} else {
var statearr_22141_22217 = state_22106__$1;
(statearr_22141_22217[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (29))){
var inst_22019 = (state_22106[(19)]);
var inst_22023 = (state_22106[(23)]);
var inst_22027 = (state_22106[(24)]);
var inst_22025 = (state_22106[(26)]);
var inst_22022 = (state_22106[(25)]);
var inst_22059 = (state_22106[(16)]);
var inst_22055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22058 = (function (){var all_files = inst_22019;
var res_SINGLEQUOTE_ = inst_22022;
var res = inst_22023;
var files_not_loaded = inst_22025;
var dependencies_that_loaded = inst_22027;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22019,inst_22023,inst_22027,inst_22025,inst_22022,inst_22059,inst_22055,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22057){
var map__22142 = p__22057;
var map__22142__$1 = ((((!((map__22142 == null)))?((((map__22142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22142):map__22142);
var namespace = cljs.core.get.call(null,map__22142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22019,inst_22023,inst_22027,inst_22025,inst_22022,inst_22059,inst_22055,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22059__$1 = cljs.core.group_by.call(null,inst_22058,inst_22025);
var inst_22061 = (inst_22059__$1 == null);
var inst_22062 = cljs.core.not.call(null,inst_22061);
var state_22106__$1 = (function (){var statearr_22144 = state_22106;
(statearr_22144[(28)] = inst_22055);

(statearr_22144[(16)] = inst_22059__$1);

return statearr_22144;
})();
if(inst_22062){
var statearr_22145_22218 = state_22106__$1;
(statearr_22145_22218[(1)] = (32));

} else {
var statearr_22146_22219 = state_22106__$1;
(statearr_22146_22219[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (44))){
var inst_22082 = (state_22106[(21)]);
var inst_22095 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22082);
var inst_22096 = cljs.core.pr_str.call(null,inst_22095);
var inst_22097 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22096)].join('');
var inst_22098 = figwheel.client.utils.log.call(null,inst_22097);
var state_22106__$1 = state_22106;
var statearr_22147_22220 = state_22106__$1;
(statearr_22147_22220[(2)] = inst_22098);

(statearr_22147_22220[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (6))){
var inst_22000 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22148_22221 = state_22106__$1;
(statearr_22148_22221[(2)] = inst_22000);

(statearr_22148_22221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (28))){
var inst_22025 = (state_22106[(26)]);
var inst_22052 = (state_22106[(2)]);
var inst_22053 = cljs.core.not_empty.call(null,inst_22025);
var state_22106__$1 = (function (){var statearr_22149 = state_22106;
(statearr_22149[(29)] = inst_22052);

return statearr_22149;
})();
if(cljs.core.truth_(inst_22053)){
var statearr_22150_22222 = state_22106__$1;
(statearr_22150_22222[(1)] = (29));

} else {
var statearr_22151_22223 = state_22106__$1;
(statearr_22151_22223[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (25))){
var inst_22023 = (state_22106[(23)]);
var inst_22039 = (state_22106[(2)]);
var inst_22040 = cljs.core.not_empty.call(null,inst_22023);
var state_22106__$1 = (function (){var statearr_22152 = state_22106;
(statearr_22152[(30)] = inst_22039);

return statearr_22152;
})();
if(cljs.core.truth_(inst_22040)){
var statearr_22153_22224 = state_22106__$1;
(statearr_22153_22224[(1)] = (26));

} else {
var statearr_22154_22225 = state_22106__$1;
(statearr_22154_22225[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (34))){
var inst_22075 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
if(cljs.core.truth_(inst_22075)){
var statearr_22155_22226 = state_22106__$1;
(statearr_22155_22226[(1)] = (38));

} else {
var statearr_22156_22227 = state_22106__$1;
(statearr_22156_22227[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (17))){
var state_22106__$1 = state_22106;
var statearr_22157_22228 = state_22106__$1;
(statearr_22157_22228[(2)] = recompile_dependents);

(statearr_22157_22228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (3))){
var state_22106__$1 = state_22106;
var statearr_22158_22229 = state_22106__$1;
(statearr_22158_22229[(2)] = null);

(statearr_22158_22229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (12))){
var inst_21996 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22159_22230 = state_22106__$1;
(statearr_22159_22230[(2)] = inst_21996);

(statearr_22159_22230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (2))){
var inst_21958 = (state_22106[(13)]);
var inst_21965 = cljs.core.seq.call(null,inst_21958);
var inst_21966 = inst_21965;
var inst_21967 = null;
var inst_21968 = (0);
var inst_21969 = (0);
var state_22106__$1 = (function (){var statearr_22160 = state_22106;
(statearr_22160[(7)] = inst_21968);

(statearr_22160[(8)] = inst_21969);

(statearr_22160[(9)] = inst_21967);

(statearr_22160[(10)] = inst_21966);

return statearr_22160;
})();
var statearr_22161_22231 = state_22106__$1;
(statearr_22161_22231[(2)] = null);

(statearr_22161_22231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (23))){
var inst_22019 = (state_22106[(19)]);
var inst_22023 = (state_22106[(23)]);
var inst_22027 = (state_22106[(24)]);
var inst_22025 = (state_22106[(26)]);
var inst_22022 = (state_22106[(25)]);
var inst_22030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22032 = (function (){var all_files = inst_22019;
var res_SINGLEQUOTE_ = inst_22022;
var res = inst_22023;
var files_not_loaded = inst_22025;
var dependencies_that_loaded = inst_22027;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22019,inst_22023,inst_22027,inst_22025,inst_22022,inst_22030,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22031){
var map__22162 = p__22031;
var map__22162__$1 = ((((!((map__22162 == null)))?((((map__22162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22162):map__22162);
var request_url = cljs.core.get.call(null,map__22162__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22019,inst_22023,inst_22027,inst_22025,inst_22022,inst_22030,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22033 = cljs.core.reverse.call(null,inst_22027);
var inst_22034 = cljs.core.map.call(null,inst_22032,inst_22033);
var inst_22035 = cljs.core.pr_str.call(null,inst_22034);
var inst_22036 = figwheel.client.utils.log.call(null,inst_22035);
var state_22106__$1 = (function (){var statearr_22164 = state_22106;
(statearr_22164[(31)] = inst_22030);

return statearr_22164;
})();
var statearr_22165_22232 = state_22106__$1;
(statearr_22165_22232[(2)] = inst_22036);

(statearr_22165_22232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (35))){
var state_22106__$1 = state_22106;
var statearr_22166_22233 = state_22106__$1;
(statearr_22166_22233[(2)] = true);

(statearr_22166_22233[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (19))){
var inst_22009 = (state_22106[(12)]);
var inst_22015 = figwheel.client.file_reloading.expand_files.call(null,inst_22009);
var state_22106__$1 = state_22106;
var statearr_22167_22234 = state_22106__$1;
(statearr_22167_22234[(2)] = inst_22015);

(statearr_22167_22234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (11))){
var state_22106__$1 = state_22106;
var statearr_22168_22235 = state_22106__$1;
(statearr_22168_22235[(2)] = null);

(statearr_22168_22235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (9))){
var inst_21998 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22169_22236 = state_22106__$1;
(statearr_22169_22236[(2)] = inst_21998);

(statearr_22169_22236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (5))){
var inst_21968 = (state_22106[(7)]);
var inst_21969 = (state_22106[(8)]);
var inst_21971 = (inst_21969 < inst_21968);
var inst_21972 = inst_21971;
var state_22106__$1 = state_22106;
if(cljs.core.truth_(inst_21972)){
var statearr_22170_22237 = state_22106__$1;
(statearr_22170_22237[(1)] = (7));

} else {
var statearr_22171_22238 = state_22106__$1;
(statearr_22171_22238[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (14))){
var inst_21979 = (state_22106[(22)]);
var inst_21988 = cljs.core.first.call(null,inst_21979);
var inst_21989 = figwheel.client.file_reloading.eval_body.call(null,inst_21988,opts);
var inst_21990 = cljs.core.next.call(null,inst_21979);
var inst_21966 = inst_21990;
var inst_21967 = null;
var inst_21968 = (0);
var inst_21969 = (0);
var state_22106__$1 = (function (){var statearr_22172 = state_22106;
(statearr_22172[(7)] = inst_21968);

(statearr_22172[(32)] = inst_21989);

(statearr_22172[(8)] = inst_21969);

(statearr_22172[(9)] = inst_21967);

(statearr_22172[(10)] = inst_21966);

return statearr_22172;
})();
var statearr_22173_22239 = state_22106__$1;
(statearr_22173_22239[(2)] = null);

(statearr_22173_22239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (45))){
var state_22106__$1 = state_22106;
var statearr_22174_22240 = state_22106__$1;
(statearr_22174_22240[(2)] = null);

(statearr_22174_22240[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (26))){
var inst_22019 = (state_22106[(19)]);
var inst_22023 = (state_22106[(23)]);
var inst_22027 = (state_22106[(24)]);
var inst_22025 = (state_22106[(26)]);
var inst_22022 = (state_22106[(25)]);
var inst_22042 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22044 = (function (){var all_files = inst_22019;
var res_SINGLEQUOTE_ = inst_22022;
var res = inst_22023;
var files_not_loaded = inst_22025;
var dependencies_that_loaded = inst_22027;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22019,inst_22023,inst_22027,inst_22025,inst_22022,inst_22042,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22043){
var map__22175 = p__22043;
var map__22175__$1 = ((((!((map__22175 == null)))?((((map__22175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22175):map__22175);
var namespace = cljs.core.get.call(null,map__22175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22019,inst_22023,inst_22027,inst_22025,inst_22022,inst_22042,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22045 = cljs.core.map.call(null,inst_22044,inst_22023);
var inst_22046 = cljs.core.pr_str.call(null,inst_22045);
var inst_22047 = figwheel.client.utils.log.call(null,inst_22046);
var inst_22048 = (function (){var all_files = inst_22019;
var res_SINGLEQUOTE_ = inst_22022;
var res = inst_22023;
var files_not_loaded = inst_22025;
var dependencies_that_loaded = inst_22027;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22019,inst_22023,inst_22027,inst_22025,inst_22022,inst_22042,inst_22044,inst_22045,inst_22046,inst_22047,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22019,inst_22023,inst_22027,inst_22025,inst_22022,inst_22042,inst_22044,inst_22045,inst_22046,inst_22047,state_val_22107,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22049 = setTimeout(inst_22048,(10));
var state_22106__$1 = (function (){var statearr_22177 = state_22106;
(statearr_22177[(33)] = inst_22042);

(statearr_22177[(34)] = inst_22047);

return statearr_22177;
})();
var statearr_22178_22241 = state_22106__$1;
(statearr_22178_22241[(2)] = inst_22049);

(statearr_22178_22241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (16))){
var state_22106__$1 = state_22106;
var statearr_22179_22242 = state_22106__$1;
(statearr_22179_22242[(2)] = reload_dependents);

(statearr_22179_22242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (38))){
var inst_22059 = (state_22106[(16)]);
var inst_22077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22059);
var state_22106__$1 = state_22106;
var statearr_22180_22243 = state_22106__$1;
(statearr_22180_22243[(2)] = inst_22077);

(statearr_22180_22243[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (30))){
var state_22106__$1 = state_22106;
var statearr_22181_22244 = state_22106__$1;
(statearr_22181_22244[(2)] = null);

(statearr_22181_22244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (10))){
var inst_21979 = (state_22106[(22)]);
var inst_21981 = cljs.core.chunked_seq_QMARK_.call(null,inst_21979);
var state_22106__$1 = state_22106;
if(inst_21981){
var statearr_22182_22245 = state_22106__$1;
(statearr_22182_22245[(1)] = (13));

} else {
var statearr_22183_22246 = state_22106__$1;
(statearr_22183_22246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (18))){
var inst_22013 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
if(cljs.core.truth_(inst_22013)){
var statearr_22184_22247 = state_22106__$1;
(statearr_22184_22247[(1)] = (19));

} else {
var statearr_22185_22248 = state_22106__$1;
(statearr_22185_22248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (42))){
var state_22106__$1 = state_22106;
var statearr_22186_22249 = state_22106__$1;
(statearr_22186_22249[(2)] = null);

(statearr_22186_22249[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (37))){
var inst_22072 = (state_22106[(2)]);
var state_22106__$1 = state_22106;
var statearr_22187_22250 = state_22106__$1;
(statearr_22187_22250[(2)] = inst_22072);

(statearr_22187_22250[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22107 === (8))){
var inst_21979 = (state_22106[(22)]);
var inst_21966 = (state_22106[(10)]);
var inst_21979__$1 = cljs.core.seq.call(null,inst_21966);
var state_22106__$1 = (function (){var statearr_22188 = state_22106;
(statearr_22188[(22)] = inst_21979__$1);

return statearr_22188;
})();
if(inst_21979__$1){
var statearr_22189_22251 = state_22106__$1;
(statearr_22189_22251[(1)] = (10));

} else {
var statearr_22190_22252 = state_22106__$1;
(statearr_22190_22252[(1)] = (11));

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
});})(c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__14294__auto__,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____0 = (function (){
var statearr_22191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22191[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__);

(statearr_22191[(1)] = (1));

return statearr_22191;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____1 = (function (state_22106){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_22106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e22192){if((e22192 instanceof Object)){
var ex__14298__auto__ = e22192;
var statearr_22193_22253 = state_22106;
(statearr_22193_22253[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22254 = state_22106;
state_22106 = G__22254;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__ = function(state_22106){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____1.call(this,state_22106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__14386__auto__ = (function (){var statearr_22194 = f__14385__auto__.call(null);
(statearr_22194[(6)] = c__14384__auto__);

return statearr_22194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__,map__21951,map__21951__$1,opts,before_jsload,on_jsload,reload_dependents,map__21952,map__21952__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__14384__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22257,link){
var map__22258 = p__22257;
var map__22258__$1 = ((((!((map__22258 == null)))?((((map__22258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22258):map__22258);
var file = cljs.core.get.call(null,map__22258__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__22258,map__22258__$1,file){
return (function (p1__22255_SHARP_,p2__22256_SHARP_){
if(cljs.core._EQ_.call(null,p1__22255_SHARP_,p2__22256_SHARP_)){
return p1__22255_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__22258,map__22258__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22261){
var map__22262 = p__22261;
var map__22262__$1 = ((((!((map__22262 == null)))?((((map__22262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22262):map__22262);
var match_length = cljs.core.get.call(null,map__22262__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22262__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22260_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22260_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22264_SHARP_,p2__22265_SHARP_){
return cljs.core.assoc.call(null,p1__22264_SHARP_,cljs.core.get.call(null,p2__22265_SHARP_,key),p2__22265_SHARP_);
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
var loaded_f_datas_22266 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_22266);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_22266);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22267,p__22268){
var map__22269 = p__22267;
var map__22269__$1 = ((((!((map__22269 == null)))?((((map__22269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22269):map__22269);
var on_cssload = cljs.core.get.call(null,map__22269__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__22270 = p__22268;
var map__22270__$1 = ((((!((map__22270 == null)))?((((map__22270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22270):map__22270);
var files_msg = map__22270__$1;
var files = cljs.core.get.call(null,map__22270__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1506034933810
