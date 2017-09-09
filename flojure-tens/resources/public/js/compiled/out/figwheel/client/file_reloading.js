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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21623_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21623_SHARP_));
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
var seq__21624 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21625 = null;
var count__21626 = (0);
var i__21627 = (0);
while(true){
if((i__21627 < count__21626)){
var n = cljs.core._nth.call(null,chunk__21625,i__21627);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21628 = seq__21624;
var G__21629 = chunk__21625;
var G__21630 = count__21626;
var G__21631 = (i__21627 + (1));
seq__21624 = G__21628;
chunk__21625 = G__21629;
count__21626 = G__21630;
i__21627 = G__21631;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21624);
if(temp__6738__auto__){
var seq__21624__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21624__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21624__$1);
var G__21632 = cljs.core.chunk_rest.call(null,seq__21624__$1);
var G__21633 = c__10741__auto__;
var G__21634 = cljs.core.count.call(null,c__10741__auto__);
var G__21635 = (0);
seq__21624 = G__21632;
chunk__21625 = G__21633;
count__21626 = G__21634;
i__21627 = G__21635;
continue;
} else {
var n = cljs.core.first.call(null,seq__21624__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21636 = cljs.core.next.call(null,seq__21624__$1);
var G__21637 = null;
var G__21638 = (0);
var G__21639 = (0);
seq__21624 = G__21636;
chunk__21625 = G__21637;
count__21626 = G__21638;
i__21627 = G__21639;
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

var seq__21649_21657 = cljs.core.seq.call(null,deps);
var chunk__21650_21658 = null;
var count__21651_21659 = (0);
var i__21652_21660 = (0);
while(true){
if((i__21652_21660 < count__21651_21659)){
var dep_21661 = cljs.core._nth.call(null,chunk__21650_21658,i__21652_21660);
topo_sort_helper_STAR_.call(null,dep_21661,(depth + (1)),state);

var G__21662 = seq__21649_21657;
var G__21663 = chunk__21650_21658;
var G__21664 = count__21651_21659;
var G__21665 = (i__21652_21660 + (1));
seq__21649_21657 = G__21662;
chunk__21650_21658 = G__21663;
count__21651_21659 = G__21664;
i__21652_21660 = G__21665;
continue;
} else {
var temp__6738__auto___21666 = cljs.core.seq.call(null,seq__21649_21657);
if(temp__6738__auto___21666){
var seq__21649_21667__$1 = temp__6738__auto___21666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21649_21667__$1)){
var c__10741__auto___21668 = cljs.core.chunk_first.call(null,seq__21649_21667__$1);
var G__21669 = cljs.core.chunk_rest.call(null,seq__21649_21667__$1);
var G__21670 = c__10741__auto___21668;
var G__21671 = cljs.core.count.call(null,c__10741__auto___21668);
var G__21672 = (0);
seq__21649_21657 = G__21669;
chunk__21650_21658 = G__21670;
count__21651_21659 = G__21671;
i__21652_21660 = G__21672;
continue;
} else {
var dep_21673 = cljs.core.first.call(null,seq__21649_21667__$1);
topo_sort_helper_STAR_.call(null,dep_21673,(depth + (1)),state);

var G__21674 = cljs.core.next.call(null,seq__21649_21667__$1);
var G__21675 = null;
var G__21676 = (0);
var G__21677 = (0);
seq__21649_21657 = G__21674;
chunk__21650_21658 = G__21675;
count__21651_21659 = G__21676;
i__21652_21660 = G__21677;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21653){
var vec__21654 = p__21653;
var seq__21655 = cljs.core.seq.call(null,vec__21654);
var first__21656 = cljs.core.first.call(null,seq__21655);
var seq__21655__$1 = cljs.core.next.call(null,seq__21655);
var x = first__21656;
var xs = seq__21655__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21654,seq__21655,first__21656,seq__21655__$1,x,xs,get_deps__$1){
return (function (p1__21640_SHARP_){
return clojure.set.difference.call(null,p1__21640_SHARP_,x);
});})(vec__21654,seq__21655,first__21656,seq__21655__$1,x,xs,get_deps__$1))
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
var seq__21678 = cljs.core.seq.call(null,provides);
var chunk__21679 = null;
var count__21680 = (0);
var i__21681 = (0);
while(true){
if((i__21681 < count__21680)){
var prov = cljs.core._nth.call(null,chunk__21679,i__21681);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21682_21690 = cljs.core.seq.call(null,requires);
var chunk__21683_21691 = null;
var count__21684_21692 = (0);
var i__21685_21693 = (0);
while(true){
if((i__21685_21693 < count__21684_21692)){
var req_21694 = cljs.core._nth.call(null,chunk__21683_21691,i__21685_21693);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21694,prov);

var G__21695 = seq__21682_21690;
var G__21696 = chunk__21683_21691;
var G__21697 = count__21684_21692;
var G__21698 = (i__21685_21693 + (1));
seq__21682_21690 = G__21695;
chunk__21683_21691 = G__21696;
count__21684_21692 = G__21697;
i__21685_21693 = G__21698;
continue;
} else {
var temp__6738__auto___21699 = cljs.core.seq.call(null,seq__21682_21690);
if(temp__6738__auto___21699){
var seq__21682_21700__$1 = temp__6738__auto___21699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21682_21700__$1)){
var c__10741__auto___21701 = cljs.core.chunk_first.call(null,seq__21682_21700__$1);
var G__21702 = cljs.core.chunk_rest.call(null,seq__21682_21700__$1);
var G__21703 = c__10741__auto___21701;
var G__21704 = cljs.core.count.call(null,c__10741__auto___21701);
var G__21705 = (0);
seq__21682_21690 = G__21702;
chunk__21683_21691 = G__21703;
count__21684_21692 = G__21704;
i__21685_21693 = G__21705;
continue;
} else {
var req_21706 = cljs.core.first.call(null,seq__21682_21700__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21706,prov);

var G__21707 = cljs.core.next.call(null,seq__21682_21700__$1);
var G__21708 = null;
var G__21709 = (0);
var G__21710 = (0);
seq__21682_21690 = G__21707;
chunk__21683_21691 = G__21708;
count__21684_21692 = G__21709;
i__21685_21693 = G__21710;
continue;
}
} else {
}
}
break;
}

var G__21711 = seq__21678;
var G__21712 = chunk__21679;
var G__21713 = count__21680;
var G__21714 = (i__21681 + (1));
seq__21678 = G__21711;
chunk__21679 = G__21712;
count__21680 = G__21713;
i__21681 = G__21714;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21678);
if(temp__6738__auto__){
var seq__21678__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21678__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21678__$1);
var G__21715 = cljs.core.chunk_rest.call(null,seq__21678__$1);
var G__21716 = c__10741__auto__;
var G__21717 = cljs.core.count.call(null,c__10741__auto__);
var G__21718 = (0);
seq__21678 = G__21715;
chunk__21679 = G__21716;
count__21680 = G__21717;
i__21681 = G__21718;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21678__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21686_21719 = cljs.core.seq.call(null,requires);
var chunk__21687_21720 = null;
var count__21688_21721 = (0);
var i__21689_21722 = (0);
while(true){
if((i__21689_21722 < count__21688_21721)){
var req_21723 = cljs.core._nth.call(null,chunk__21687_21720,i__21689_21722);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21723,prov);

var G__21724 = seq__21686_21719;
var G__21725 = chunk__21687_21720;
var G__21726 = count__21688_21721;
var G__21727 = (i__21689_21722 + (1));
seq__21686_21719 = G__21724;
chunk__21687_21720 = G__21725;
count__21688_21721 = G__21726;
i__21689_21722 = G__21727;
continue;
} else {
var temp__6738__auto___21728__$1 = cljs.core.seq.call(null,seq__21686_21719);
if(temp__6738__auto___21728__$1){
var seq__21686_21729__$1 = temp__6738__auto___21728__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21686_21729__$1)){
var c__10741__auto___21730 = cljs.core.chunk_first.call(null,seq__21686_21729__$1);
var G__21731 = cljs.core.chunk_rest.call(null,seq__21686_21729__$1);
var G__21732 = c__10741__auto___21730;
var G__21733 = cljs.core.count.call(null,c__10741__auto___21730);
var G__21734 = (0);
seq__21686_21719 = G__21731;
chunk__21687_21720 = G__21732;
count__21688_21721 = G__21733;
i__21689_21722 = G__21734;
continue;
} else {
var req_21735 = cljs.core.first.call(null,seq__21686_21729__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21735,prov);

var G__21736 = cljs.core.next.call(null,seq__21686_21729__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21686_21719 = G__21736;
chunk__21687_21720 = G__21737;
count__21688_21721 = G__21738;
i__21689_21722 = G__21739;
continue;
}
} else {
}
}
break;
}

var G__21740 = cljs.core.next.call(null,seq__21678__$1);
var G__21741 = null;
var G__21742 = (0);
var G__21743 = (0);
seq__21678 = G__21740;
chunk__21679 = G__21741;
count__21680 = G__21742;
i__21681 = G__21743;
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
var seq__21744_21748 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21745_21749 = null;
var count__21746_21750 = (0);
var i__21747_21751 = (0);
while(true){
if((i__21747_21751 < count__21746_21750)){
var ns_21752 = cljs.core._nth.call(null,chunk__21745_21749,i__21747_21751);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21752);

var G__21753 = seq__21744_21748;
var G__21754 = chunk__21745_21749;
var G__21755 = count__21746_21750;
var G__21756 = (i__21747_21751 + (1));
seq__21744_21748 = G__21753;
chunk__21745_21749 = G__21754;
count__21746_21750 = G__21755;
i__21747_21751 = G__21756;
continue;
} else {
var temp__6738__auto___21757 = cljs.core.seq.call(null,seq__21744_21748);
if(temp__6738__auto___21757){
var seq__21744_21758__$1 = temp__6738__auto___21757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21744_21758__$1)){
var c__10741__auto___21759 = cljs.core.chunk_first.call(null,seq__21744_21758__$1);
var G__21760 = cljs.core.chunk_rest.call(null,seq__21744_21758__$1);
var G__21761 = c__10741__auto___21759;
var G__21762 = cljs.core.count.call(null,c__10741__auto___21759);
var G__21763 = (0);
seq__21744_21748 = G__21760;
chunk__21745_21749 = G__21761;
count__21746_21750 = G__21762;
i__21747_21751 = G__21763;
continue;
} else {
var ns_21764 = cljs.core.first.call(null,seq__21744_21758__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21764);

var G__21765 = cljs.core.next.call(null,seq__21744_21758__$1);
var G__21766 = null;
var G__21767 = (0);
var G__21768 = (0);
seq__21744_21748 = G__21765;
chunk__21745_21749 = G__21766;
count__21746_21750 = G__21767;
i__21747_21751 = G__21768;
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
var G__21769__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21770__i = 0, G__21770__a = new Array(arguments.length -  0);
while (G__21770__i < G__21770__a.length) {G__21770__a[G__21770__i] = arguments[G__21770__i + 0]; ++G__21770__i;}
  args = new cljs.core.IndexedSeq(G__21770__a,0,null);
} 
return G__21769__delegate.call(this,args);};
G__21769.cljs$lang$maxFixedArity = 0;
G__21769.cljs$lang$applyTo = (function (arglist__21771){
var args = cljs.core.seq(arglist__21771);
return G__21769__delegate(args);
});
G__21769.cljs$core$IFn$_invoke$arity$variadic = G__21769__delegate;
return G__21769;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__21772_SHARP_,p2__21773_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21772_SHARP_)].join('')),p2__21773_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__21774_SHARP_,p2__21775_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21774_SHARP_)].join(''),p2__21775_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__21776 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__21776.addCallback(((function (G__21776){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__21776))
);

G__21776.addErrback(((function (G__21776){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__21776))
);

return G__21776;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21777 = cljs.core._EQ_;
var expr__21778 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21777.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21778))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__21777,expr__21778){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__21777,expr__21778))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__21777,expr__21778){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21780){if((e21780 instanceof Error)){
var e = e21780;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21780;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__21777,expr__21778))
} else {
if(cljs.core.truth_(pred__21777.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21778))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__21777.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__21778))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__21777.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__21778))){
return ((function (pred__21777,expr__21778){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e21781){if((e21781 instanceof Error)){
var e = e21781;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21781;

}
}})());
});
;})(pred__21777,expr__21778))
} else {
return ((function (pred__21777,expr__21778){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21777,expr__21778))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21782,callback){
var map__21783 = p__21782;
var map__21783__$1 = ((((!((map__21783 == null)))?((((map__21783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21783):map__21783);
var file_msg = map__21783__$1;
var request_url = cljs.core.get.call(null,map__21783__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21783,map__21783__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21783,map__21783__$1,file_msg,request_url))
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
return (function (state_21807){
var state_val_21808 = (state_21807[(1)]);
if((state_val_21808 === (7))){
var inst_21803 = (state_21807[(2)]);
var state_21807__$1 = state_21807;
var statearr_21809_21826 = state_21807__$1;
(statearr_21809_21826[(2)] = inst_21803);

(statearr_21809_21826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21808 === (1))){
var state_21807__$1 = state_21807;
var statearr_21810_21827 = state_21807__$1;
(statearr_21810_21827[(2)] = null);

(statearr_21810_21827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21808 === (4))){
var inst_21787 = (state_21807[(7)]);
var inst_21787__$1 = (state_21807[(2)]);
var state_21807__$1 = (function (){var statearr_21811 = state_21807;
(statearr_21811[(7)] = inst_21787__$1);

return statearr_21811;
})();
if(cljs.core.truth_(inst_21787__$1)){
var statearr_21812_21828 = state_21807__$1;
(statearr_21812_21828[(1)] = (5));

} else {
var statearr_21813_21829 = state_21807__$1;
(statearr_21813_21829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21808 === (6))){
var state_21807__$1 = state_21807;
var statearr_21814_21830 = state_21807__$1;
(statearr_21814_21830[(2)] = null);

(statearr_21814_21830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21808 === (3))){
var inst_21805 = (state_21807[(2)]);
var state_21807__$1 = state_21807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21807__$1,inst_21805);
} else {
if((state_val_21808 === (2))){
var state_21807__$1 = state_21807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21807__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21808 === (11))){
var inst_21799 = (state_21807[(2)]);
var state_21807__$1 = (function (){var statearr_21815 = state_21807;
(statearr_21815[(8)] = inst_21799);

return statearr_21815;
})();
var statearr_21816_21831 = state_21807__$1;
(statearr_21816_21831[(2)] = null);

(statearr_21816_21831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21808 === (9))){
var inst_21793 = (state_21807[(9)]);
var inst_21791 = (state_21807[(10)]);
var inst_21795 = inst_21793.call(null,inst_21791);
var state_21807__$1 = state_21807;
var statearr_21817_21832 = state_21807__$1;
(statearr_21817_21832[(2)] = inst_21795);

(statearr_21817_21832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21808 === (5))){
var inst_21787 = (state_21807[(7)]);
var inst_21789 = figwheel.client.file_reloading.blocking_load.call(null,inst_21787);
var state_21807__$1 = state_21807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21807__$1,(8),inst_21789);
} else {
if((state_val_21808 === (10))){
var inst_21791 = (state_21807[(10)]);
var inst_21797 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21791);
var state_21807__$1 = state_21807;
var statearr_21818_21833 = state_21807__$1;
(statearr_21818_21833[(2)] = inst_21797);

(statearr_21818_21833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21808 === (8))){
var inst_21793 = (state_21807[(9)]);
var inst_21787 = (state_21807[(7)]);
var inst_21791 = (state_21807[(2)]);
var inst_21792 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21793__$1 = cljs.core.get.call(null,inst_21792,inst_21787);
var state_21807__$1 = (function (){var statearr_21819 = state_21807;
(statearr_21819[(9)] = inst_21793__$1);

(statearr_21819[(10)] = inst_21791);

return statearr_21819;
})();
if(cljs.core.truth_(inst_21793__$1)){
var statearr_21820_21834 = state_21807__$1;
(statearr_21820_21834[(1)] = (9));

} else {
var statearr_21821_21835 = state_21807__$1;
(statearr_21821_21835[(1)] = (10));

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
var statearr_21822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21822[(0)] = figwheel$client$file_reloading$state_machine__16940__auto__);

(statearr_21822[(1)] = (1));

return statearr_21822;
});
var figwheel$client$file_reloading$state_machine__16940__auto____1 = (function (state_21807){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_21807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e21823){if((e21823 instanceof Object)){
var ex__16943__auto__ = e21823;
var statearr_21824_21836 = state_21807;
(statearr_21824_21836[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21837 = state_21807;
state_21807 = G__21837;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__16940__auto__ = function(state_21807){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__16940__auto____1.call(this,state_21807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__16940__auto____0;
figwheel$client$file_reloading$state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__16940__auto____1;
return figwheel$client$file_reloading$state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__))
})();
var state__17031__auto__ = (function (){var statearr_21825 = f__17030__auto__.call(null);
(statearr_21825[(6)] = c__17029__auto__);

return statearr_21825;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21838,callback){
var map__21839 = p__21838;
var map__21839__$1 = ((((!((map__21839 == null)))?((((map__21839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21839):map__21839);
var file_msg = map__21839__$1;
var namespace = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21839,map__21839__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21839,map__21839__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__21841){
var map__21842 = p__21841;
var map__21842__$1 = ((((!((map__21842 == null)))?((((map__21842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21842):map__21842);
var file_msg = map__21842__$1;
var namespace = cljs.core.get.call(null,map__21842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21844){
var map__21845 = p__21844;
var map__21845__$1 = ((((!((map__21845 == null)))?((((map__21845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21845):map__21845);
var file_msg = map__21845__$1;
var namespace = cljs.core.get.call(null,map__21845__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21847,callback){
var map__21848 = p__21847;
var map__21848__$1 = ((((!((map__21848 == null)))?((((map__21848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21848):map__21848);
var file_msg = map__21848__$1;
var request_url = cljs.core.get.call(null,map__21848__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21848__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__17029__auto___21898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto___21898,out){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto___21898,out){
return (function (state_21883){
var state_val_21884 = (state_21883[(1)]);
if((state_val_21884 === (1))){
var inst_21857 = cljs.core.seq.call(null,files);
var inst_21858 = cljs.core.first.call(null,inst_21857);
var inst_21859 = cljs.core.next.call(null,inst_21857);
var inst_21860 = files;
var state_21883__$1 = (function (){var statearr_21885 = state_21883;
(statearr_21885[(7)] = inst_21860);

(statearr_21885[(8)] = inst_21859);

(statearr_21885[(9)] = inst_21858);

return statearr_21885;
})();
var statearr_21886_21899 = state_21883__$1;
(statearr_21886_21899[(2)] = null);

(statearr_21886_21899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (2))){
var inst_21866 = (state_21883[(10)]);
var inst_21860 = (state_21883[(7)]);
var inst_21865 = cljs.core.seq.call(null,inst_21860);
var inst_21866__$1 = cljs.core.first.call(null,inst_21865);
var inst_21867 = cljs.core.next.call(null,inst_21865);
var inst_21868 = (inst_21866__$1 == null);
var inst_21869 = cljs.core.not.call(null,inst_21868);
var state_21883__$1 = (function (){var statearr_21887 = state_21883;
(statearr_21887[(10)] = inst_21866__$1);

(statearr_21887[(11)] = inst_21867);

return statearr_21887;
})();
if(inst_21869){
var statearr_21888_21900 = state_21883__$1;
(statearr_21888_21900[(1)] = (4));

} else {
var statearr_21889_21901 = state_21883__$1;
(statearr_21889_21901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (3))){
var inst_21881 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21883__$1,inst_21881);
} else {
if((state_val_21884 === (4))){
var inst_21866 = (state_21883[(10)]);
var inst_21871 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21866);
var state_21883__$1 = state_21883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21883__$1,(7),inst_21871);
} else {
if((state_val_21884 === (5))){
var inst_21877 = cljs.core.async.close_BANG_.call(null,out);
var state_21883__$1 = state_21883;
var statearr_21890_21902 = state_21883__$1;
(statearr_21890_21902[(2)] = inst_21877);

(statearr_21890_21902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (6))){
var inst_21879 = (state_21883[(2)]);
var state_21883__$1 = state_21883;
var statearr_21891_21903 = state_21883__$1;
(statearr_21891_21903[(2)] = inst_21879);

(statearr_21891_21903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21884 === (7))){
var inst_21867 = (state_21883[(11)]);
var inst_21873 = (state_21883[(2)]);
var inst_21874 = cljs.core.async.put_BANG_.call(null,out,inst_21873);
var inst_21860 = inst_21867;
var state_21883__$1 = (function (){var statearr_21892 = state_21883;
(statearr_21892[(7)] = inst_21860);

(statearr_21892[(12)] = inst_21874);

return statearr_21892;
})();
var statearr_21893_21904 = state_21883__$1;
(statearr_21893_21904[(2)] = null);

(statearr_21893_21904[(1)] = (2));


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
});})(c__17029__auto___21898,out))
;
return ((function (switch__16939__auto__,c__17029__auto___21898,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____0 = (function (){
var statearr_21894 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21894[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__);

(statearr_21894[(1)] = (1));

return statearr_21894;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____1 = (function (state_21883){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_21883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e21895){if((e21895 instanceof Object)){
var ex__16943__auto__ = e21895;
var statearr_21896_21905 = state_21883;
(statearr_21896_21905[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21906 = state_21883;
state_21883 = G__21906;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__ = function(state_21883){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____1.call(this,state_21883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto___21898,out))
})();
var state__17031__auto__ = (function (){var statearr_21897 = f__17030__auto__.call(null);
(statearr_21897[(6)] = c__17029__auto___21898);

return statearr_21897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto___21898,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21907,opts){
var map__21908 = p__21907;
var map__21908__$1 = ((((!((map__21908 == null)))?((((map__21908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21908):map__21908);
var eval_body = cljs.core.get.call(null,map__21908__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21908__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e21910){var e = e21910;
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
return (function (p1__21911_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21911_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__21912){
var vec__21913 = p__21912;
var k = cljs.core.nth.call(null,vec__21913,(0),null);
var v = cljs.core.nth.call(null,vec__21913,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21916){
var vec__21917 = p__21916;
var k = cljs.core.nth.call(null,vec__21917,(0),null);
var v = cljs.core.nth.call(null,vec__21917,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21923,p__21924){
var map__21925 = p__21923;
var map__21925__$1 = ((((!((map__21925 == null)))?((((map__21925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21925):map__21925);
var opts = map__21925__$1;
var before_jsload = cljs.core.get.call(null,map__21925__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21925__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21925__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21926 = p__21924;
var map__21926__$1 = ((((!((map__21926 == null)))?((((map__21926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21926):map__21926);
var msg = map__21926__$1;
var files = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__17029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__17030__auto__ = (function (){var switch__16939__auto__ = ((function (c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22080){
var state_val_22081 = (state_22080[(1)]);
if((state_val_22081 === (7))){
var inst_21941 = (state_22080[(7)]);
var inst_21943 = (state_22080[(8)]);
var inst_21940 = (state_22080[(9)]);
var inst_21942 = (state_22080[(10)]);
var inst_21948 = cljs.core._nth.call(null,inst_21941,inst_21943);
var inst_21949 = figwheel.client.file_reloading.eval_body.call(null,inst_21948,opts);
var inst_21950 = (inst_21943 + (1));
var tmp22082 = inst_21941;
var tmp22083 = inst_21940;
var tmp22084 = inst_21942;
var inst_21940__$1 = tmp22083;
var inst_21941__$1 = tmp22082;
var inst_21942__$1 = tmp22084;
var inst_21943__$1 = inst_21950;
var state_22080__$1 = (function (){var statearr_22085 = state_22080;
(statearr_22085[(7)] = inst_21941__$1);

(statearr_22085[(8)] = inst_21943__$1);

(statearr_22085[(9)] = inst_21940__$1);

(statearr_22085[(10)] = inst_21942__$1);

(statearr_22085[(11)] = inst_21949);

return statearr_22085;
})();
var statearr_22086_22169 = state_22080__$1;
(statearr_22086_22169[(2)] = null);

(statearr_22086_22169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (20))){
var inst_21983 = (state_22080[(12)]);
var inst_21991 = figwheel.client.file_reloading.sort_files.call(null,inst_21983);
var state_22080__$1 = state_22080;
var statearr_22087_22170 = state_22080__$1;
(statearr_22087_22170[(2)] = inst_21991);

(statearr_22087_22170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (27))){
var state_22080__$1 = state_22080;
var statearr_22088_22171 = state_22080__$1;
(statearr_22088_22171[(2)] = null);

(statearr_22088_22171[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (1))){
var inst_21932 = (state_22080[(13)]);
var inst_21929 = before_jsload.call(null,files);
var inst_21930 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21931 = (function (){return ((function (inst_21932,inst_21929,inst_21930,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21920_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21920_SHARP_);
});
;})(inst_21932,inst_21929,inst_21930,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21932__$1 = cljs.core.filter.call(null,inst_21931,files);
var inst_21933 = cljs.core.not_empty.call(null,inst_21932__$1);
var state_22080__$1 = (function (){var statearr_22089 = state_22080;
(statearr_22089[(14)] = inst_21929);

(statearr_22089[(15)] = inst_21930);

(statearr_22089[(13)] = inst_21932__$1);

return statearr_22089;
})();
if(cljs.core.truth_(inst_21933)){
var statearr_22090_22172 = state_22080__$1;
(statearr_22090_22172[(1)] = (2));

} else {
var statearr_22091_22173 = state_22080__$1;
(statearr_22091_22173[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (24))){
var state_22080__$1 = state_22080;
var statearr_22092_22174 = state_22080__$1;
(statearr_22092_22174[(2)] = null);

(statearr_22092_22174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (39))){
var inst_22033 = (state_22080[(16)]);
var state_22080__$1 = state_22080;
var statearr_22093_22175 = state_22080__$1;
(statearr_22093_22175[(2)] = inst_22033);

(statearr_22093_22175[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (46))){
var inst_22075 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22094_22176 = state_22080__$1;
(statearr_22094_22176[(2)] = inst_22075);

(statearr_22094_22176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (4))){
var inst_21977 = (state_22080[(2)]);
var inst_21978 = cljs.core.List.EMPTY;
var inst_21979 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21978);
var inst_21980 = (function (){return ((function (inst_21977,inst_21978,inst_21979,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21921_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21921_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21921_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__21921_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_21977,inst_21978,inst_21979,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21981 = cljs.core.filter.call(null,inst_21980,files);
var inst_21982 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21983 = cljs.core.concat.call(null,inst_21981,inst_21982);
var state_22080__$1 = (function (){var statearr_22095 = state_22080;
(statearr_22095[(17)] = inst_21979);

(statearr_22095[(12)] = inst_21983);

(statearr_22095[(18)] = inst_21977);

return statearr_22095;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22096_22177 = state_22080__$1;
(statearr_22096_22177[(1)] = (16));

} else {
var statearr_22097_22178 = state_22080__$1;
(statearr_22097_22178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (15))){
var inst_21967 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22098_22179 = state_22080__$1;
(statearr_22098_22179[(2)] = inst_21967);

(statearr_22098_22179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (21))){
var inst_21993 = (state_22080[(19)]);
var inst_21993__$1 = (state_22080[(2)]);
var inst_21994 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21993__$1);
var state_22080__$1 = (function (){var statearr_22099 = state_22080;
(statearr_22099[(19)] = inst_21993__$1);

return statearr_22099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22080__$1,(22),inst_21994);
} else {
if((state_val_22081 === (31))){
var inst_22078 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22080__$1,inst_22078);
} else {
if((state_val_22081 === (32))){
var inst_22033 = (state_22080[(16)]);
var inst_22038 = inst_22033.cljs$lang$protocol_mask$partition0$;
var inst_22039 = (inst_22038 & (64));
var inst_22040 = inst_22033.cljs$core$ISeq$;
var inst_22041 = (cljs.core.PROTOCOL_SENTINEL === inst_22040);
var inst_22042 = (inst_22039) || (inst_22041);
var state_22080__$1 = state_22080;
if(cljs.core.truth_(inst_22042)){
var statearr_22100_22180 = state_22080__$1;
(statearr_22100_22180[(1)] = (35));

} else {
var statearr_22101_22181 = state_22080__$1;
(statearr_22101_22181[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (40))){
var inst_22055 = (state_22080[(20)]);
var inst_22054 = (state_22080[(2)]);
var inst_22055__$1 = cljs.core.get.call(null,inst_22054,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22056 = cljs.core.get.call(null,inst_22054,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22057 = cljs.core.not_empty.call(null,inst_22055__$1);
var state_22080__$1 = (function (){var statearr_22102 = state_22080;
(statearr_22102[(21)] = inst_22056);

(statearr_22102[(20)] = inst_22055__$1);

return statearr_22102;
})();
if(cljs.core.truth_(inst_22057)){
var statearr_22103_22182 = state_22080__$1;
(statearr_22103_22182[(1)] = (41));

} else {
var statearr_22104_22183 = state_22080__$1;
(statearr_22104_22183[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (33))){
var state_22080__$1 = state_22080;
var statearr_22105_22184 = state_22080__$1;
(statearr_22105_22184[(2)] = false);

(statearr_22105_22184[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (13))){
var inst_21953 = (state_22080[(22)]);
var inst_21957 = cljs.core.chunk_first.call(null,inst_21953);
var inst_21958 = cljs.core.chunk_rest.call(null,inst_21953);
var inst_21959 = cljs.core.count.call(null,inst_21957);
var inst_21940 = inst_21958;
var inst_21941 = inst_21957;
var inst_21942 = inst_21959;
var inst_21943 = (0);
var state_22080__$1 = (function (){var statearr_22106 = state_22080;
(statearr_22106[(7)] = inst_21941);

(statearr_22106[(8)] = inst_21943);

(statearr_22106[(9)] = inst_21940);

(statearr_22106[(10)] = inst_21942);

return statearr_22106;
})();
var statearr_22107_22185 = state_22080__$1;
(statearr_22107_22185[(2)] = null);

(statearr_22107_22185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (22))){
var inst_21996 = (state_22080[(23)]);
var inst_22001 = (state_22080[(24)]);
var inst_21997 = (state_22080[(25)]);
var inst_21993 = (state_22080[(19)]);
var inst_21996__$1 = (state_22080[(2)]);
var inst_21997__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21996__$1);
var inst_21998 = (function (){var all_files = inst_21993;
var res_SINGLEQUOTE_ = inst_21996__$1;
var res = inst_21997__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21996,inst_22001,inst_21997,inst_21993,inst_21996__$1,inst_21997__$1,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21922_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21922_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21996,inst_22001,inst_21997,inst_21993,inst_21996__$1,inst_21997__$1,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21999 = cljs.core.filter.call(null,inst_21998,inst_21996__$1);
var inst_22000 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22001__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22000);
var inst_22002 = cljs.core.not_empty.call(null,inst_22001__$1);
var state_22080__$1 = (function (){var statearr_22108 = state_22080;
(statearr_22108[(23)] = inst_21996__$1);

(statearr_22108[(24)] = inst_22001__$1);

(statearr_22108[(26)] = inst_21999);

(statearr_22108[(25)] = inst_21997__$1);

return statearr_22108;
})();
if(cljs.core.truth_(inst_22002)){
var statearr_22109_22186 = state_22080__$1;
(statearr_22109_22186[(1)] = (23));

} else {
var statearr_22110_22187 = state_22080__$1;
(statearr_22110_22187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (36))){
var state_22080__$1 = state_22080;
var statearr_22111_22188 = state_22080__$1;
(statearr_22111_22188[(2)] = false);

(statearr_22111_22188[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (41))){
var inst_22055 = (state_22080[(20)]);
var inst_22059 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22060 = cljs.core.map.call(null,inst_22059,inst_22055);
var inst_22061 = cljs.core.pr_str.call(null,inst_22060);
var inst_22062 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22061)].join('');
var inst_22063 = figwheel.client.utils.log.call(null,inst_22062);
var state_22080__$1 = state_22080;
var statearr_22112_22189 = state_22080__$1;
(statearr_22112_22189[(2)] = inst_22063);

(statearr_22112_22189[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (43))){
var inst_22056 = (state_22080[(21)]);
var inst_22066 = (state_22080[(2)]);
var inst_22067 = cljs.core.not_empty.call(null,inst_22056);
var state_22080__$1 = (function (){var statearr_22113 = state_22080;
(statearr_22113[(27)] = inst_22066);

return statearr_22113;
})();
if(cljs.core.truth_(inst_22067)){
var statearr_22114_22190 = state_22080__$1;
(statearr_22114_22190[(1)] = (44));

} else {
var statearr_22115_22191 = state_22080__$1;
(statearr_22115_22191[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (29))){
var inst_22033 = (state_22080[(16)]);
var inst_21996 = (state_22080[(23)]);
var inst_22001 = (state_22080[(24)]);
var inst_21999 = (state_22080[(26)]);
var inst_21997 = (state_22080[(25)]);
var inst_21993 = (state_22080[(19)]);
var inst_22029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22032 = (function (){var all_files = inst_21993;
var res_SINGLEQUOTE_ = inst_21996;
var res = inst_21997;
var files_not_loaded = inst_21999;
var dependencies_that_loaded = inst_22001;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22033,inst_21996,inst_22001,inst_21999,inst_21997,inst_21993,inst_22029,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22031){
var map__22116 = p__22031;
var map__22116__$1 = ((((!((map__22116 == null)))?((((map__22116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22116):map__22116);
var namespace = cljs.core.get.call(null,map__22116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22033,inst_21996,inst_22001,inst_21999,inst_21997,inst_21993,inst_22029,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22033__$1 = cljs.core.group_by.call(null,inst_22032,inst_21999);
var inst_22035 = (inst_22033__$1 == null);
var inst_22036 = cljs.core.not.call(null,inst_22035);
var state_22080__$1 = (function (){var statearr_22118 = state_22080;
(statearr_22118[(16)] = inst_22033__$1);

(statearr_22118[(28)] = inst_22029);

return statearr_22118;
})();
if(inst_22036){
var statearr_22119_22192 = state_22080__$1;
(statearr_22119_22192[(1)] = (32));

} else {
var statearr_22120_22193 = state_22080__$1;
(statearr_22120_22193[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (44))){
var inst_22056 = (state_22080[(21)]);
var inst_22069 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22056);
var inst_22070 = cljs.core.pr_str.call(null,inst_22069);
var inst_22071 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22070)].join('');
var inst_22072 = figwheel.client.utils.log.call(null,inst_22071);
var state_22080__$1 = state_22080;
var statearr_22121_22194 = state_22080__$1;
(statearr_22121_22194[(2)] = inst_22072);

(statearr_22121_22194[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (6))){
var inst_21974 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22122_22195 = state_22080__$1;
(statearr_22122_22195[(2)] = inst_21974);

(statearr_22122_22195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (28))){
var inst_21999 = (state_22080[(26)]);
var inst_22026 = (state_22080[(2)]);
var inst_22027 = cljs.core.not_empty.call(null,inst_21999);
var state_22080__$1 = (function (){var statearr_22123 = state_22080;
(statearr_22123[(29)] = inst_22026);

return statearr_22123;
})();
if(cljs.core.truth_(inst_22027)){
var statearr_22124_22196 = state_22080__$1;
(statearr_22124_22196[(1)] = (29));

} else {
var statearr_22125_22197 = state_22080__$1;
(statearr_22125_22197[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (25))){
var inst_21997 = (state_22080[(25)]);
var inst_22013 = (state_22080[(2)]);
var inst_22014 = cljs.core.not_empty.call(null,inst_21997);
var state_22080__$1 = (function (){var statearr_22126 = state_22080;
(statearr_22126[(30)] = inst_22013);

return statearr_22126;
})();
if(cljs.core.truth_(inst_22014)){
var statearr_22127_22198 = state_22080__$1;
(statearr_22127_22198[(1)] = (26));

} else {
var statearr_22128_22199 = state_22080__$1;
(statearr_22128_22199[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (34))){
var inst_22049 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
if(cljs.core.truth_(inst_22049)){
var statearr_22129_22200 = state_22080__$1;
(statearr_22129_22200[(1)] = (38));

} else {
var statearr_22130_22201 = state_22080__$1;
(statearr_22130_22201[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (17))){
var state_22080__$1 = state_22080;
var statearr_22131_22202 = state_22080__$1;
(statearr_22131_22202[(2)] = recompile_dependents);

(statearr_22131_22202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (3))){
var state_22080__$1 = state_22080;
var statearr_22132_22203 = state_22080__$1;
(statearr_22132_22203[(2)] = null);

(statearr_22132_22203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (12))){
var inst_21970 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22133_22204 = state_22080__$1;
(statearr_22133_22204[(2)] = inst_21970);

(statearr_22133_22204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (2))){
var inst_21932 = (state_22080[(13)]);
var inst_21939 = cljs.core.seq.call(null,inst_21932);
var inst_21940 = inst_21939;
var inst_21941 = null;
var inst_21942 = (0);
var inst_21943 = (0);
var state_22080__$1 = (function (){var statearr_22134 = state_22080;
(statearr_22134[(7)] = inst_21941);

(statearr_22134[(8)] = inst_21943);

(statearr_22134[(9)] = inst_21940);

(statearr_22134[(10)] = inst_21942);

return statearr_22134;
})();
var statearr_22135_22205 = state_22080__$1;
(statearr_22135_22205[(2)] = null);

(statearr_22135_22205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (23))){
var inst_21996 = (state_22080[(23)]);
var inst_22001 = (state_22080[(24)]);
var inst_21999 = (state_22080[(26)]);
var inst_21997 = (state_22080[(25)]);
var inst_21993 = (state_22080[(19)]);
var inst_22004 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22006 = (function (){var all_files = inst_21993;
var res_SINGLEQUOTE_ = inst_21996;
var res = inst_21997;
var files_not_loaded = inst_21999;
var dependencies_that_loaded = inst_22001;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21996,inst_22001,inst_21999,inst_21997,inst_21993,inst_22004,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22005){
var map__22136 = p__22005;
var map__22136__$1 = ((((!((map__22136 == null)))?((((map__22136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22136):map__22136);
var request_url = cljs.core.get.call(null,map__22136__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21996,inst_22001,inst_21999,inst_21997,inst_21993,inst_22004,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22007 = cljs.core.reverse.call(null,inst_22001);
var inst_22008 = cljs.core.map.call(null,inst_22006,inst_22007);
var inst_22009 = cljs.core.pr_str.call(null,inst_22008);
var inst_22010 = figwheel.client.utils.log.call(null,inst_22009);
var state_22080__$1 = (function (){var statearr_22138 = state_22080;
(statearr_22138[(31)] = inst_22004);

return statearr_22138;
})();
var statearr_22139_22206 = state_22080__$1;
(statearr_22139_22206[(2)] = inst_22010);

(statearr_22139_22206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (35))){
var state_22080__$1 = state_22080;
var statearr_22140_22207 = state_22080__$1;
(statearr_22140_22207[(2)] = true);

(statearr_22140_22207[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (19))){
var inst_21983 = (state_22080[(12)]);
var inst_21989 = figwheel.client.file_reloading.expand_files.call(null,inst_21983);
var state_22080__$1 = state_22080;
var statearr_22141_22208 = state_22080__$1;
(statearr_22141_22208[(2)] = inst_21989);

(statearr_22141_22208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (11))){
var state_22080__$1 = state_22080;
var statearr_22142_22209 = state_22080__$1;
(statearr_22142_22209[(2)] = null);

(statearr_22142_22209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (9))){
var inst_21972 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22143_22210 = state_22080__$1;
(statearr_22143_22210[(2)] = inst_21972);

(statearr_22143_22210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (5))){
var inst_21943 = (state_22080[(8)]);
var inst_21942 = (state_22080[(10)]);
var inst_21945 = (inst_21943 < inst_21942);
var inst_21946 = inst_21945;
var state_22080__$1 = state_22080;
if(cljs.core.truth_(inst_21946)){
var statearr_22144_22211 = state_22080__$1;
(statearr_22144_22211[(1)] = (7));

} else {
var statearr_22145_22212 = state_22080__$1;
(statearr_22145_22212[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (14))){
var inst_21953 = (state_22080[(22)]);
var inst_21962 = cljs.core.first.call(null,inst_21953);
var inst_21963 = figwheel.client.file_reloading.eval_body.call(null,inst_21962,opts);
var inst_21964 = cljs.core.next.call(null,inst_21953);
var inst_21940 = inst_21964;
var inst_21941 = null;
var inst_21942 = (0);
var inst_21943 = (0);
var state_22080__$1 = (function (){var statearr_22146 = state_22080;
(statearr_22146[(7)] = inst_21941);

(statearr_22146[(8)] = inst_21943);

(statearr_22146[(9)] = inst_21940);

(statearr_22146[(10)] = inst_21942);

(statearr_22146[(32)] = inst_21963);

return statearr_22146;
})();
var statearr_22147_22213 = state_22080__$1;
(statearr_22147_22213[(2)] = null);

(statearr_22147_22213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (45))){
var state_22080__$1 = state_22080;
var statearr_22148_22214 = state_22080__$1;
(statearr_22148_22214[(2)] = null);

(statearr_22148_22214[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (26))){
var inst_21996 = (state_22080[(23)]);
var inst_22001 = (state_22080[(24)]);
var inst_21999 = (state_22080[(26)]);
var inst_21997 = (state_22080[(25)]);
var inst_21993 = (state_22080[(19)]);
var inst_22016 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22018 = (function (){var all_files = inst_21993;
var res_SINGLEQUOTE_ = inst_21996;
var res = inst_21997;
var files_not_loaded = inst_21999;
var dependencies_that_loaded = inst_22001;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21996,inst_22001,inst_21999,inst_21997,inst_21993,inst_22016,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22017){
var map__22149 = p__22017;
var map__22149__$1 = ((((!((map__22149 == null)))?((((map__22149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22149):map__22149);
var namespace = cljs.core.get.call(null,map__22149__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22149__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21996,inst_22001,inst_21999,inst_21997,inst_21993,inst_22016,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22019 = cljs.core.map.call(null,inst_22018,inst_21997);
var inst_22020 = cljs.core.pr_str.call(null,inst_22019);
var inst_22021 = figwheel.client.utils.log.call(null,inst_22020);
var inst_22022 = (function (){var all_files = inst_21993;
var res_SINGLEQUOTE_ = inst_21996;
var res = inst_21997;
var files_not_loaded = inst_21999;
var dependencies_that_loaded = inst_22001;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21996,inst_22001,inst_21999,inst_21997,inst_21993,inst_22016,inst_22018,inst_22019,inst_22020,inst_22021,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21996,inst_22001,inst_21999,inst_21997,inst_21993,inst_22016,inst_22018,inst_22019,inst_22020,inst_22021,state_val_22081,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22023 = setTimeout(inst_22022,(10));
var state_22080__$1 = (function (){var statearr_22151 = state_22080;
(statearr_22151[(33)] = inst_22016);

(statearr_22151[(34)] = inst_22021);

return statearr_22151;
})();
var statearr_22152_22215 = state_22080__$1;
(statearr_22152_22215[(2)] = inst_22023);

(statearr_22152_22215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (16))){
var state_22080__$1 = state_22080;
var statearr_22153_22216 = state_22080__$1;
(statearr_22153_22216[(2)] = reload_dependents);

(statearr_22153_22216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (38))){
var inst_22033 = (state_22080[(16)]);
var inst_22051 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22033);
var state_22080__$1 = state_22080;
var statearr_22154_22217 = state_22080__$1;
(statearr_22154_22217[(2)] = inst_22051);

(statearr_22154_22217[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (30))){
var state_22080__$1 = state_22080;
var statearr_22155_22218 = state_22080__$1;
(statearr_22155_22218[(2)] = null);

(statearr_22155_22218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (10))){
var inst_21953 = (state_22080[(22)]);
var inst_21955 = cljs.core.chunked_seq_QMARK_.call(null,inst_21953);
var state_22080__$1 = state_22080;
if(inst_21955){
var statearr_22156_22219 = state_22080__$1;
(statearr_22156_22219[(1)] = (13));

} else {
var statearr_22157_22220 = state_22080__$1;
(statearr_22157_22220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (18))){
var inst_21987 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
if(cljs.core.truth_(inst_21987)){
var statearr_22158_22221 = state_22080__$1;
(statearr_22158_22221[(1)] = (19));

} else {
var statearr_22159_22222 = state_22080__$1;
(statearr_22159_22222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (42))){
var state_22080__$1 = state_22080;
var statearr_22160_22223 = state_22080__$1;
(statearr_22160_22223[(2)] = null);

(statearr_22160_22223[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (37))){
var inst_22046 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22161_22224 = state_22080__$1;
(statearr_22161_22224[(2)] = inst_22046);

(statearr_22161_22224[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (8))){
var inst_21940 = (state_22080[(9)]);
var inst_21953 = (state_22080[(22)]);
var inst_21953__$1 = cljs.core.seq.call(null,inst_21940);
var state_22080__$1 = (function (){var statearr_22162 = state_22080;
(statearr_22162[(22)] = inst_21953__$1);

return statearr_22162;
})();
if(inst_21953__$1){
var statearr_22163_22225 = state_22080__$1;
(statearr_22163_22225[(1)] = (10));

} else {
var statearr_22164_22226 = state_22080__$1;
(statearr_22164_22226[(1)] = (11));

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
});})(c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__16939__auto__,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____0 = (function (){
var statearr_22165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22165[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__);

(statearr_22165[(1)] = (1));

return statearr_22165;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____1 = (function (state_22080){
while(true){
var ret_value__16941__auto__ = (function (){try{while(true){
var result__16942__auto__ = switch__16939__auto__.call(null,state_22080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16942__auto__;
}
break;
}
}catch (e22166){if((e22166 instanceof Object)){
var ex__16943__auto__ = e22166;
var statearr_22167_22227 = state_22080;
(statearr_22167_22227[(5)] = ex__16943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22228 = state_22080;
state_22080 = G__22228;
continue;
} else {
return ret_value__16941__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__ = function(state_22080){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____1.call(this,state_22080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16940__auto__;
})()
;})(switch__16939__auto__,c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__17031__auto__ = (function (){var statearr_22168 = f__17030__auto__.call(null);
(statearr_22168[(6)] = c__17029__auto__);

return statearr_22168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17031__auto__);
});})(c__17029__auto__,map__21925,map__21925__$1,opts,before_jsload,on_jsload,reload_dependents,map__21926,map__21926__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__17029__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22231,link){
var map__22232 = p__22231;
var map__22232__$1 = ((((!((map__22232 == null)))?((((map__22232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22232):map__22232);
var file = cljs.core.get.call(null,map__22232__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__22232,map__22232__$1,file){
return (function (p1__22229_SHARP_,p2__22230_SHARP_){
if(cljs.core._EQ_.call(null,p1__22229_SHARP_,p2__22230_SHARP_)){
return p1__22229_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__22232,map__22232__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22235){
var map__22236 = p__22235;
var map__22236__$1 = ((((!((map__22236 == null)))?((((map__22236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22236):map__22236);
var match_length = cljs.core.get.call(null,map__22236__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22236__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22234_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22234_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22238_SHARP_,p2__22239_SHARP_){
return cljs.core.assoc.call(null,p1__22238_SHARP_,cljs.core.get.call(null,p2__22239_SHARP_,key),p2__22239_SHARP_);
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
var loaded_f_datas_22240 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_22240);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_22240);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22241,p__22242){
var map__22243 = p__22241;
var map__22243__$1 = ((((!((map__22243 == null)))?((((map__22243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22243):map__22243);
var on_cssload = cljs.core.get.call(null,map__22243__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__22244 = p__22242;
var map__22244__$1 = ((((!((map__22244 == null)))?((((map__22244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22244):map__22244);
var files_msg = map__22244__$1;
var files = cljs.core.get.call(null,map__22244__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1504914134434
