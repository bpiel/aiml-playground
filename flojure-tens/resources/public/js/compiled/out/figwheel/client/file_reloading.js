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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21630_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21630_SHARP_));
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
var seq__21631 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21632 = null;
var count__21633 = (0);
var i__21634 = (0);
while(true){
if((i__21634 < count__21633)){
var n = cljs.core._nth.call(null,chunk__21632,i__21634);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21635 = seq__21631;
var G__21636 = chunk__21632;
var G__21637 = count__21633;
var G__21638 = (i__21634 + (1));
seq__21631 = G__21635;
chunk__21632 = G__21636;
count__21633 = G__21637;
i__21634 = G__21638;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21631);
if(temp__6738__auto__){
var seq__21631__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21631__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21631__$1);
var G__21639 = cljs.core.chunk_rest.call(null,seq__21631__$1);
var G__21640 = c__10741__auto__;
var G__21641 = cljs.core.count.call(null,c__10741__auto__);
var G__21642 = (0);
seq__21631 = G__21639;
chunk__21632 = G__21640;
count__21633 = G__21641;
i__21634 = G__21642;
continue;
} else {
var n = cljs.core.first.call(null,seq__21631__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21643 = cljs.core.next.call(null,seq__21631__$1);
var G__21644 = null;
var G__21645 = (0);
var G__21646 = (0);
seq__21631 = G__21643;
chunk__21632 = G__21644;
count__21633 = G__21645;
i__21634 = G__21646;
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

var seq__21656_21664 = cljs.core.seq.call(null,deps);
var chunk__21657_21665 = null;
var count__21658_21666 = (0);
var i__21659_21667 = (0);
while(true){
if((i__21659_21667 < count__21658_21666)){
var dep_21668 = cljs.core._nth.call(null,chunk__21657_21665,i__21659_21667);
topo_sort_helper_STAR_.call(null,dep_21668,(depth + (1)),state);

var G__21669 = seq__21656_21664;
var G__21670 = chunk__21657_21665;
var G__21671 = count__21658_21666;
var G__21672 = (i__21659_21667 + (1));
seq__21656_21664 = G__21669;
chunk__21657_21665 = G__21670;
count__21658_21666 = G__21671;
i__21659_21667 = G__21672;
continue;
} else {
var temp__6738__auto___21673 = cljs.core.seq.call(null,seq__21656_21664);
if(temp__6738__auto___21673){
var seq__21656_21674__$1 = temp__6738__auto___21673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21656_21674__$1)){
var c__10741__auto___21675 = cljs.core.chunk_first.call(null,seq__21656_21674__$1);
var G__21676 = cljs.core.chunk_rest.call(null,seq__21656_21674__$1);
var G__21677 = c__10741__auto___21675;
var G__21678 = cljs.core.count.call(null,c__10741__auto___21675);
var G__21679 = (0);
seq__21656_21664 = G__21676;
chunk__21657_21665 = G__21677;
count__21658_21666 = G__21678;
i__21659_21667 = G__21679;
continue;
} else {
var dep_21680 = cljs.core.first.call(null,seq__21656_21674__$1);
topo_sort_helper_STAR_.call(null,dep_21680,(depth + (1)),state);

var G__21681 = cljs.core.next.call(null,seq__21656_21674__$1);
var G__21682 = null;
var G__21683 = (0);
var G__21684 = (0);
seq__21656_21664 = G__21681;
chunk__21657_21665 = G__21682;
count__21658_21666 = G__21683;
i__21659_21667 = G__21684;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21660){
var vec__21661 = p__21660;
var seq__21662 = cljs.core.seq.call(null,vec__21661);
var first__21663 = cljs.core.first.call(null,seq__21662);
var seq__21662__$1 = cljs.core.next.call(null,seq__21662);
var x = first__21663;
var xs = seq__21662__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21661,seq__21662,first__21663,seq__21662__$1,x,xs,get_deps__$1){
return (function (p1__21647_SHARP_){
return clojure.set.difference.call(null,p1__21647_SHARP_,x);
});})(vec__21661,seq__21662,first__21663,seq__21662__$1,x,xs,get_deps__$1))
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
var seq__21685 = cljs.core.seq.call(null,provides);
var chunk__21686 = null;
var count__21687 = (0);
var i__21688 = (0);
while(true){
if((i__21688 < count__21687)){
var prov = cljs.core._nth.call(null,chunk__21686,i__21688);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21689_21697 = cljs.core.seq.call(null,requires);
var chunk__21690_21698 = null;
var count__21691_21699 = (0);
var i__21692_21700 = (0);
while(true){
if((i__21692_21700 < count__21691_21699)){
var req_21701 = cljs.core._nth.call(null,chunk__21690_21698,i__21692_21700);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21701,prov);

var G__21702 = seq__21689_21697;
var G__21703 = chunk__21690_21698;
var G__21704 = count__21691_21699;
var G__21705 = (i__21692_21700 + (1));
seq__21689_21697 = G__21702;
chunk__21690_21698 = G__21703;
count__21691_21699 = G__21704;
i__21692_21700 = G__21705;
continue;
} else {
var temp__6738__auto___21706 = cljs.core.seq.call(null,seq__21689_21697);
if(temp__6738__auto___21706){
var seq__21689_21707__$1 = temp__6738__auto___21706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21689_21707__$1)){
var c__10741__auto___21708 = cljs.core.chunk_first.call(null,seq__21689_21707__$1);
var G__21709 = cljs.core.chunk_rest.call(null,seq__21689_21707__$1);
var G__21710 = c__10741__auto___21708;
var G__21711 = cljs.core.count.call(null,c__10741__auto___21708);
var G__21712 = (0);
seq__21689_21697 = G__21709;
chunk__21690_21698 = G__21710;
count__21691_21699 = G__21711;
i__21692_21700 = G__21712;
continue;
} else {
var req_21713 = cljs.core.first.call(null,seq__21689_21707__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21713,prov);

var G__21714 = cljs.core.next.call(null,seq__21689_21707__$1);
var G__21715 = null;
var G__21716 = (0);
var G__21717 = (0);
seq__21689_21697 = G__21714;
chunk__21690_21698 = G__21715;
count__21691_21699 = G__21716;
i__21692_21700 = G__21717;
continue;
}
} else {
}
}
break;
}

var G__21718 = seq__21685;
var G__21719 = chunk__21686;
var G__21720 = count__21687;
var G__21721 = (i__21688 + (1));
seq__21685 = G__21718;
chunk__21686 = G__21719;
count__21687 = G__21720;
i__21688 = G__21721;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__21685);
if(temp__6738__auto__){
var seq__21685__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21685__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__21685__$1);
var G__21722 = cljs.core.chunk_rest.call(null,seq__21685__$1);
var G__21723 = c__10741__auto__;
var G__21724 = cljs.core.count.call(null,c__10741__auto__);
var G__21725 = (0);
seq__21685 = G__21722;
chunk__21686 = G__21723;
count__21687 = G__21724;
i__21688 = G__21725;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21685__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21693_21726 = cljs.core.seq.call(null,requires);
var chunk__21694_21727 = null;
var count__21695_21728 = (0);
var i__21696_21729 = (0);
while(true){
if((i__21696_21729 < count__21695_21728)){
var req_21730 = cljs.core._nth.call(null,chunk__21694_21727,i__21696_21729);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21730,prov);

var G__21731 = seq__21693_21726;
var G__21732 = chunk__21694_21727;
var G__21733 = count__21695_21728;
var G__21734 = (i__21696_21729 + (1));
seq__21693_21726 = G__21731;
chunk__21694_21727 = G__21732;
count__21695_21728 = G__21733;
i__21696_21729 = G__21734;
continue;
} else {
var temp__6738__auto___21735__$1 = cljs.core.seq.call(null,seq__21693_21726);
if(temp__6738__auto___21735__$1){
var seq__21693_21736__$1 = temp__6738__auto___21735__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21693_21736__$1)){
var c__10741__auto___21737 = cljs.core.chunk_first.call(null,seq__21693_21736__$1);
var G__21738 = cljs.core.chunk_rest.call(null,seq__21693_21736__$1);
var G__21739 = c__10741__auto___21737;
var G__21740 = cljs.core.count.call(null,c__10741__auto___21737);
var G__21741 = (0);
seq__21693_21726 = G__21738;
chunk__21694_21727 = G__21739;
count__21695_21728 = G__21740;
i__21696_21729 = G__21741;
continue;
} else {
var req_21742 = cljs.core.first.call(null,seq__21693_21736__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21742,prov);

var G__21743 = cljs.core.next.call(null,seq__21693_21736__$1);
var G__21744 = null;
var G__21745 = (0);
var G__21746 = (0);
seq__21693_21726 = G__21743;
chunk__21694_21727 = G__21744;
count__21695_21728 = G__21745;
i__21696_21729 = G__21746;
continue;
}
} else {
}
}
break;
}

var G__21747 = cljs.core.next.call(null,seq__21685__$1);
var G__21748 = null;
var G__21749 = (0);
var G__21750 = (0);
seq__21685 = G__21747;
chunk__21686 = G__21748;
count__21687 = G__21749;
i__21688 = G__21750;
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
var seq__21751_21755 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21752_21756 = null;
var count__21753_21757 = (0);
var i__21754_21758 = (0);
while(true){
if((i__21754_21758 < count__21753_21757)){
var ns_21759 = cljs.core._nth.call(null,chunk__21752_21756,i__21754_21758);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21759);

var G__21760 = seq__21751_21755;
var G__21761 = chunk__21752_21756;
var G__21762 = count__21753_21757;
var G__21763 = (i__21754_21758 + (1));
seq__21751_21755 = G__21760;
chunk__21752_21756 = G__21761;
count__21753_21757 = G__21762;
i__21754_21758 = G__21763;
continue;
} else {
var temp__6738__auto___21764 = cljs.core.seq.call(null,seq__21751_21755);
if(temp__6738__auto___21764){
var seq__21751_21765__$1 = temp__6738__auto___21764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21751_21765__$1)){
var c__10741__auto___21766 = cljs.core.chunk_first.call(null,seq__21751_21765__$1);
var G__21767 = cljs.core.chunk_rest.call(null,seq__21751_21765__$1);
var G__21768 = c__10741__auto___21766;
var G__21769 = cljs.core.count.call(null,c__10741__auto___21766);
var G__21770 = (0);
seq__21751_21755 = G__21767;
chunk__21752_21756 = G__21768;
count__21753_21757 = G__21769;
i__21754_21758 = G__21770;
continue;
} else {
var ns_21771 = cljs.core.first.call(null,seq__21751_21765__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21771);

var G__21772 = cljs.core.next.call(null,seq__21751_21765__$1);
var G__21773 = null;
var G__21774 = (0);
var G__21775 = (0);
seq__21751_21755 = G__21772;
chunk__21752_21756 = G__21773;
count__21753_21757 = G__21774;
i__21754_21758 = G__21775;
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
var G__21776__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21777__i = 0, G__21777__a = new Array(arguments.length -  0);
while (G__21777__i < G__21777__a.length) {G__21777__a[G__21777__i] = arguments[G__21777__i + 0]; ++G__21777__i;}
  args = new cljs.core.IndexedSeq(G__21777__a,0,null);
} 
return G__21776__delegate.call(this,args);};
G__21776.cljs$lang$maxFixedArity = 0;
G__21776.cljs$lang$applyTo = (function (arglist__21778){
var args = cljs.core.seq(arglist__21778);
return G__21776__delegate(args);
});
G__21776.cljs$core$IFn$_invoke$arity$variadic = G__21776__delegate;
return G__21776;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__21779_SHARP_,p2__21780_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21779_SHARP_)].join('')),p2__21780_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__21781_SHARP_,p2__21782_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21781_SHARP_)].join(''),p2__21782_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__21783 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__21783.addCallback(((function (G__21783){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__21783))
);

G__21783.addErrback(((function (G__21783){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__21783))
);

return G__21783;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21784 = cljs.core._EQ_;
var expr__21785 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21784.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21785))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__21784,expr__21785){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__21784,expr__21785))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__21784,expr__21785){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21787){if((e21787 instanceof Error)){
var e = e21787;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21787;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__21784,expr__21785))
} else {
if(cljs.core.truth_(pred__21784.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21785))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__21784.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__21785))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__21784.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__21785))){
return ((function (pred__21784,expr__21785){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e21788){if((e21788 instanceof Error)){
var e = e21788;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21788;

}
}})());
});
;})(pred__21784,expr__21785))
} else {
return ((function (pred__21784,expr__21785){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21784,expr__21785))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21789,callback){
var map__21790 = p__21789;
var map__21790__$1 = ((((!((map__21790 == null)))?((((map__21790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21790):map__21790);
var file_msg = map__21790__$1;
var request_url = cljs.core.get.call(null,map__21790__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21790,map__21790__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21790,map__21790__$1,file_msg,request_url))
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
return (function (state_21814){
var state_val_21815 = (state_21814[(1)]);
if((state_val_21815 === (7))){
var inst_21810 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
var statearr_21816_21833 = state_21814__$1;
(statearr_21816_21833[(2)] = inst_21810);

(statearr_21816_21833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (1))){
var state_21814__$1 = state_21814;
var statearr_21817_21834 = state_21814__$1;
(statearr_21817_21834[(2)] = null);

(statearr_21817_21834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (4))){
var inst_21794 = (state_21814[(7)]);
var inst_21794__$1 = (state_21814[(2)]);
var state_21814__$1 = (function (){var statearr_21818 = state_21814;
(statearr_21818[(7)] = inst_21794__$1);

return statearr_21818;
})();
if(cljs.core.truth_(inst_21794__$1)){
var statearr_21819_21835 = state_21814__$1;
(statearr_21819_21835[(1)] = (5));

} else {
var statearr_21820_21836 = state_21814__$1;
(statearr_21820_21836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (6))){
var state_21814__$1 = state_21814;
var statearr_21821_21837 = state_21814__$1;
(statearr_21821_21837[(2)] = null);

(statearr_21821_21837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (3))){
var inst_21812 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21814__$1,inst_21812);
} else {
if((state_val_21815 === (2))){
var state_21814__$1 = state_21814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21814__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21815 === (11))){
var inst_21806 = (state_21814[(2)]);
var state_21814__$1 = (function (){var statearr_21822 = state_21814;
(statearr_21822[(8)] = inst_21806);

return statearr_21822;
})();
var statearr_21823_21838 = state_21814__$1;
(statearr_21823_21838[(2)] = null);

(statearr_21823_21838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (9))){
var inst_21798 = (state_21814[(9)]);
var inst_21800 = (state_21814[(10)]);
var inst_21802 = inst_21800.call(null,inst_21798);
var state_21814__$1 = state_21814;
var statearr_21824_21839 = state_21814__$1;
(statearr_21824_21839[(2)] = inst_21802);

(statearr_21824_21839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (5))){
var inst_21794 = (state_21814[(7)]);
var inst_21796 = figwheel.client.file_reloading.blocking_load.call(null,inst_21794);
var state_21814__$1 = state_21814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21814__$1,(8),inst_21796);
} else {
if((state_val_21815 === (10))){
var inst_21798 = (state_21814[(9)]);
var inst_21804 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21798);
var state_21814__$1 = state_21814;
var statearr_21825_21840 = state_21814__$1;
(statearr_21825_21840[(2)] = inst_21804);

(statearr_21825_21840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (8))){
var inst_21794 = (state_21814[(7)]);
var inst_21800 = (state_21814[(10)]);
var inst_21798 = (state_21814[(2)]);
var inst_21799 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21800__$1 = cljs.core.get.call(null,inst_21799,inst_21794);
var state_21814__$1 = (function (){var statearr_21826 = state_21814;
(statearr_21826[(9)] = inst_21798);

(statearr_21826[(10)] = inst_21800__$1);

return statearr_21826;
})();
if(cljs.core.truth_(inst_21800__$1)){
var statearr_21827_21841 = state_21814__$1;
(statearr_21827_21841[(1)] = (9));

} else {
var statearr_21828_21842 = state_21814__$1;
(statearr_21828_21842[(1)] = (10));

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
var statearr_21829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21829[(0)] = figwheel$client$file_reloading$state_machine__14295__auto__);

(statearr_21829[(1)] = (1));

return statearr_21829;
});
var figwheel$client$file_reloading$state_machine__14295__auto____1 = (function (state_21814){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_21814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e21830){if((e21830 instanceof Object)){
var ex__14298__auto__ = e21830;
var statearr_21831_21843 = state_21814;
(statearr_21831_21843[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21844 = state_21814;
state_21814 = G__21844;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__14295__auto__ = function(state_21814){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__14295__auto____1.call(this,state_21814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__14295__auto____0;
figwheel$client$file_reloading$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__14295__auto____1;
return figwheel$client$file_reloading$state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__))
})();
var state__14386__auto__ = (function (){var statearr_21832 = f__14385__auto__.call(null);
(statearr_21832[(6)] = c__14384__auto__);

return statearr_21832;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21845,callback){
var map__21846 = p__21845;
var map__21846__$1 = ((((!((map__21846 == null)))?((((map__21846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21846):map__21846);
var file_msg = map__21846__$1;
var namespace = cljs.core.get.call(null,map__21846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21846,map__21846__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21846,map__21846__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__21848){
var map__21849 = p__21848;
var map__21849__$1 = ((((!((map__21849 == null)))?((((map__21849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21849):map__21849);
var file_msg = map__21849__$1;
var namespace = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21851){
var map__21852 = p__21851;
var map__21852__$1 = ((((!((map__21852 == null)))?((((map__21852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21852):map__21852);
var file_msg = map__21852__$1;
var namespace = cljs.core.get.call(null,map__21852__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21854,callback){
var map__21855 = p__21854;
var map__21855__$1 = ((((!((map__21855 == null)))?((((map__21855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21855):map__21855);
var file_msg = map__21855__$1;
var request_url = cljs.core.get.call(null,map__21855__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__14384__auto___21905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto___21905,out){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto___21905,out){
return (function (state_21890){
var state_val_21891 = (state_21890[(1)]);
if((state_val_21891 === (1))){
var inst_21864 = cljs.core.seq.call(null,files);
var inst_21865 = cljs.core.first.call(null,inst_21864);
var inst_21866 = cljs.core.next.call(null,inst_21864);
var inst_21867 = files;
var state_21890__$1 = (function (){var statearr_21892 = state_21890;
(statearr_21892[(7)] = inst_21866);

(statearr_21892[(8)] = inst_21865);

(statearr_21892[(9)] = inst_21867);

return statearr_21892;
})();
var statearr_21893_21906 = state_21890__$1;
(statearr_21893_21906[(2)] = null);

(statearr_21893_21906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (2))){
var inst_21873 = (state_21890[(10)]);
var inst_21867 = (state_21890[(9)]);
var inst_21872 = cljs.core.seq.call(null,inst_21867);
var inst_21873__$1 = cljs.core.first.call(null,inst_21872);
var inst_21874 = cljs.core.next.call(null,inst_21872);
var inst_21875 = (inst_21873__$1 == null);
var inst_21876 = cljs.core.not.call(null,inst_21875);
var state_21890__$1 = (function (){var statearr_21894 = state_21890;
(statearr_21894[(10)] = inst_21873__$1);

(statearr_21894[(11)] = inst_21874);

return statearr_21894;
})();
if(inst_21876){
var statearr_21895_21907 = state_21890__$1;
(statearr_21895_21907[(1)] = (4));

} else {
var statearr_21896_21908 = state_21890__$1;
(statearr_21896_21908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (3))){
var inst_21888 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21890__$1,inst_21888);
} else {
if((state_val_21891 === (4))){
var inst_21873 = (state_21890[(10)]);
var inst_21878 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21873);
var state_21890__$1 = state_21890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21890__$1,(7),inst_21878);
} else {
if((state_val_21891 === (5))){
var inst_21884 = cljs.core.async.close_BANG_.call(null,out);
var state_21890__$1 = state_21890;
var statearr_21897_21909 = state_21890__$1;
(statearr_21897_21909[(2)] = inst_21884);

(statearr_21897_21909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (6))){
var inst_21886 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21898_21910 = state_21890__$1;
(statearr_21898_21910[(2)] = inst_21886);

(statearr_21898_21910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (7))){
var inst_21874 = (state_21890[(11)]);
var inst_21880 = (state_21890[(2)]);
var inst_21881 = cljs.core.async.put_BANG_.call(null,out,inst_21880);
var inst_21867 = inst_21874;
var state_21890__$1 = (function (){var statearr_21899 = state_21890;
(statearr_21899[(9)] = inst_21867);

(statearr_21899[(12)] = inst_21881);

return statearr_21899;
})();
var statearr_21900_21911 = state_21890__$1;
(statearr_21900_21911[(2)] = null);

(statearr_21900_21911[(1)] = (2));


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
});})(c__14384__auto___21905,out))
;
return ((function (switch__14294__auto__,c__14384__auto___21905,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____0 = (function (){
var statearr_21901 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21901[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__);

(statearr_21901[(1)] = (1));

return statearr_21901;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____1 = (function (state_21890){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_21890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e21902){if((e21902 instanceof Object)){
var ex__14298__auto__ = e21902;
var statearr_21903_21912 = state_21890;
(statearr_21903_21912[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21913 = state_21890;
state_21890 = G__21913;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__ = function(state_21890){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____1.call(this,state_21890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto___21905,out))
})();
var state__14386__auto__ = (function (){var statearr_21904 = f__14385__auto__.call(null);
(statearr_21904[(6)] = c__14384__auto___21905);

return statearr_21904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto___21905,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21914,opts){
var map__21915 = p__21914;
var map__21915__$1 = ((((!((map__21915 == null)))?((((map__21915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21915):map__21915);
var eval_body = cljs.core.get.call(null,map__21915__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21915__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e21917){var e = e21917;
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
return (function (p1__21918_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21918_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__21919){
var vec__21920 = p__21919;
var k = cljs.core.nth.call(null,vec__21920,(0),null);
var v = cljs.core.nth.call(null,vec__21920,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21923){
var vec__21924 = p__21923;
var k = cljs.core.nth.call(null,vec__21924,(0),null);
var v = cljs.core.nth.call(null,vec__21924,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21930,p__21931){
var map__21932 = p__21930;
var map__21932__$1 = ((((!((map__21932 == null)))?((((map__21932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21932):map__21932);
var opts = map__21932__$1;
var before_jsload = cljs.core.get.call(null,map__21932__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21932__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21932__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21933 = p__21931;
var map__21933__$1 = ((((!((map__21933 == null)))?((((map__21933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21933):map__21933);
var msg = map__21933__$1;
var files = cljs.core.get.call(null,map__21933__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21933__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21933__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__14384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__14385__auto__ = (function (){var switch__14294__auto__ = ((function (c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22087){
var state_val_22088 = (state_22087[(1)]);
if((state_val_22088 === (7))){
var inst_21948 = (state_22087[(7)]);
var inst_21949 = (state_22087[(8)]);
var inst_21947 = (state_22087[(9)]);
var inst_21950 = (state_22087[(10)]);
var inst_21955 = cljs.core._nth.call(null,inst_21948,inst_21950);
var inst_21956 = figwheel.client.file_reloading.eval_body.call(null,inst_21955,opts);
var inst_21957 = (inst_21950 + (1));
var tmp22089 = inst_21948;
var tmp22090 = inst_21949;
var tmp22091 = inst_21947;
var inst_21947__$1 = tmp22091;
var inst_21948__$1 = tmp22089;
var inst_21949__$1 = tmp22090;
var inst_21950__$1 = inst_21957;
var state_22087__$1 = (function (){var statearr_22092 = state_22087;
(statearr_22092[(7)] = inst_21948__$1);

(statearr_22092[(8)] = inst_21949__$1);

(statearr_22092[(11)] = inst_21956);

(statearr_22092[(9)] = inst_21947__$1);

(statearr_22092[(10)] = inst_21950__$1);

return statearr_22092;
})();
var statearr_22093_22176 = state_22087__$1;
(statearr_22093_22176[(2)] = null);

(statearr_22093_22176[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (20))){
var inst_21990 = (state_22087[(12)]);
var inst_21998 = figwheel.client.file_reloading.sort_files.call(null,inst_21990);
var state_22087__$1 = state_22087;
var statearr_22094_22177 = state_22087__$1;
(statearr_22094_22177[(2)] = inst_21998);

(statearr_22094_22177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (27))){
var state_22087__$1 = state_22087;
var statearr_22095_22178 = state_22087__$1;
(statearr_22095_22178[(2)] = null);

(statearr_22095_22178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (1))){
var inst_21939 = (state_22087[(13)]);
var inst_21936 = before_jsload.call(null,files);
var inst_21937 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21938 = (function (){return ((function (inst_21939,inst_21936,inst_21937,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21927_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21927_SHARP_);
});
;})(inst_21939,inst_21936,inst_21937,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21939__$1 = cljs.core.filter.call(null,inst_21938,files);
var inst_21940 = cljs.core.not_empty.call(null,inst_21939__$1);
var state_22087__$1 = (function (){var statearr_22096 = state_22087;
(statearr_22096[(14)] = inst_21936);

(statearr_22096[(13)] = inst_21939__$1);

(statearr_22096[(15)] = inst_21937);

return statearr_22096;
})();
if(cljs.core.truth_(inst_21940)){
var statearr_22097_22179 = state_22087__$1;
(statearr_22097_22179[(1)] = (2));

} else {
var statearr_22098_22180 = state_22087__$1;
(statearr_22098_22180[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (24))){
var state_22087__$1 = state_22087;
var statearr_22099_22181 = state_22087__$1;
(statearr_22099_22181[(2)] = null);

(statearr_22099_22181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (39))){
var inst_22040 = (state_22087[(16)]);
var state_22087__$1 = state_22087;
var statearr_22100_22182 = state_22087__$1;
(statearr_22100_22182[(2)] = inst_22040);

(statearr_22100_22182[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (46))){
var inst_22082 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22101_22183 = state_22087__$1;
(statearr_22101_22183[(2)] = inst_22082);

(statearr_22101_22183[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (4))){
var inst_21984 = (state_22087[(2)]);
var inst_21985 = cljs.core.List.EMPTY;
var inst_21986 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21985);
var inst_21987 = (function (){return ((function (inst_21984,inst_21985,inst_21986,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21928_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21928_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21928_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__21928_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_21984,inst_21985,inst_21986,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21988 = cljs.core.filter.call(null,inst_21987,files);
var inst_21989 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21990 = cljs.core.concat.call(null,inst_21988,inst_21989);
var state_22087__$1 = (function (){var statearr_22102 = state_22087;
(statearr_22102[(17)] = inst_21984);

(statearr_22102[(12)] = inst_21990);

(statearr_22102[(18)] = inst_21986);

return statearr_22102;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22103_22184 = state_22087__$1;
(statearr_22103_22184[(1)] = (16));

} else {
var statearr_22104_22185 = state_22087__$1;
(statearr_22104_22185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (15))){
var inst_21974 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22105_22186 = state_22087__$1;
(statearr_22105_22186[(2)] = inst_21974);

(statearr_22105_22186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (21))){
var inst_22000 = (state_22087[(19)]);
var inst_22000__$1 = (state_22087[(2)]);
var inst_22001 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22000__$1);
var state_22087__$1 = (function (){var statearr_22106 = state_22087;
(statearr_22106[(19)] = inst_22000__$1);

return statearr_22106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22087__$1,(22),inst_22001);
} else {
if((state_val_22088 === (31))){
var inst_22085 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22087__$1,inst_22085);
} else {
if((state_val_22088 === (32))){
var inst_22040 = (state_22087[(16)]);
var inst_22045 = inst_22040.cljs$lang$protocol_mask$partition0$;
var inst_22046 = (inst_22045 & (64));
var inst_22047 = inst_22040.cljs$core$ISeq$;
var inst_22048 = (cljs.core.PROTOCOL_SENTINEL === inst_22047);
var inst_22049 = (inst_22046) || (inst_22048);
var state_22087__$1 = state_22087;
if(cljs.core.truth_(inst_22049)){
var statearr_22107_22187 = state_22087__$1;
(statearr_22107_22187[(1)] = (35));

} else {
var statearr_22108_22188 = state_22087__$1;
(statearr_22108_22188[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (40))){
var inst_22062 = (state_22087[(20)]);
var inst_22061 = (state_22087[(2)]);
var inst_22062__$1 = cljs.core.get.call(null,inst_22061,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22063 = cljs.core.get.call(null,inst_22061,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22064 = cljs.core.not_empty.call(null,inst_22062__$1);
var state_22087__$1 = (function (){var statearr_22109 = state_22087;
(statearr_22109[(21)] = inst_22063);

(statearr_22109[(20)] = inst_22062__$1);

return statearr_22109;
})();
if(cljs.core.truth_(inst_22064)){
var statearr_22110_22189 = state_22087__$1;
(statearr_22110_22189[(1)] = (41));

} else {
var statearr_22111_22190 = state_22087__$1;
(statearr_22111_22190[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (33))){
var state_22087__$1 = state_22087;
var statearr_22112_22191 = state_22087__$1;
(statearr_22112_22191[(2)] = false);

(statearr_22112_22191[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (13))){
var inst_21960 = (state_22087[(22)]);
var inst_21964 = cljs.core.chunk_first.call(null,inst_21960);
var inst_21965 = cljs.core.chunk_rest.call(null,inst_21960);
var inst_21966 = cljs.core.count.call(null,inst_21964);
var inst_21947 = inst_21965;
var inst_21948 = inst_21964;
var inst_21949 = inst_21966;
var inst_21950 = (0);
var state_22087__$1 = (function (){var statearr_22113 = state_22087;
(statearr_22113[(7)] = inst_21948);

(statearr_22113[(8)] = inst_21949);

(statearr_22113[(9)] = inst_21947);

(statearr_22113[(10)] = inst_21950);

return statearr_22113;
})();
var statearr_22114_22192 = state_22087__$1;
(statearr_22114_22192[(2)] = null);

(statearr_22114_22192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (22))){
var inst_22000 = (state_22087[(19)]);
var inst_22008 = (state_22087[(23)]);
var inst_22003 = (state_22087[(24)]);
var inst_22004 = (state_22087[(25)]);
var inst_22003__$1 = (state_22087[(2)]);
var inst_22004__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22003__$1);
var inst_22005 = (function (){var all_files = inst_22000;
var res_SINGLEQUOTE_ = inst_22003__$1;
var res = inst_22004__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22000,inst_22008,inst_22003,inst_22004,inst_22003__$1,inst_22004__$1,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21929_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21929_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22000,inst_22008,inst_22003,inst_22004,inst_22003__$1,inst_22004__$1,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22006 = cljs.core.filter.call(null,inst_22005,inst_22003__$1);
var inst_22007 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22008__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22007);
var inst_22009 = cljs.core.not_empty.call(null,inst_22008__$1);
var state_22087__$1 = (function (){var statearr_22115 = state_22087;
(statearr_22115[(26)] = inst_22006);

(statearr_22115[(23)] = inst_22008__$1);

(statearr_22115[(24)] = inst_22003__$1);

(statearr_22115[(25)] = inst_22004__$1);

return statearr_22115;
})();
if(cljs.core.truth_(inst_22009)){
var statearr_22116_22193 = state_22087__$1;
(statearr_22116_22193[(1)] = (23));

} else {
var statearr_22117_22194 = state_22087__$1;
(statearr_22117_22194[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (36))){
var state_22087__$1 = state_22087;
var statearr_22118_22195 = state_22087__$1;
(statearr_22118_22195[(2)] = false);

(statearr_22118_22195[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (41))){
var inst_22062 = (state_22087[(20)]);
var inst_22066 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22067 = cljs.core.map.call(null,inst_22066,inst_22062);
var inst_22068 = cljs.core.pr_str.call(null,inst_22067);
var inst_22069 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22068)].join('');
var inst_22070 = figwheel.client.utils.log.call(null,inst_22069);
var state_22087__$1 = state_22087;
var statearr_22119_22196 = state_22087__$1;
(statearr_22119_22196[(2)] = inst_22070);

(statearr_22119_22196[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (43))){
var inst_22063 = (state_22087[(21)]);
var inst_22073 = (state_22087[(2)]);
var inst_22074 = cljs.core.not_empty.call(null,inst_22063);
var state_22087__$1 = (function (){var statearr_22120 = state_22087;
(statearr_22120[(27)] = inst_22073);

return statearr_22120;
})();
if(cljs.core.truth_(inst_22074)){
var statearr_22121_22197 = state_22087__$1;
(statearr_22121_22197[(1)] = (44));

} else {
var statearr_22122_22198 = state_22087__$1;
(statearr_22122_22198[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (29))){
var inst_22006 = (state_22087[(26)]);
var inst_22000 = (state_22087[(19)]);
var inst_22040 = (state_22087[(16)]);
var inst_22008 = (state_22087[(23)]);
var inst_22003 = (state_22087[(24)]);
var inst_22004 = (state_22087[(25)]);
var inst_22036 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22039 = (function (){var all_files = inst_22000;
var res_SINGLEQUOTE_ = inst_22003;
var res = inst_22004;
var files_not_loaded = inst_22006;
var dependencies_that_loaded = inst_22008;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22006,inst_22000,inst_22040,inst_22008,inst_22003,inst_22004,inst_22036,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22038){
var map__22123 = p__22038;
var map__22123__$1 = ((((!((map__22123 == null)))?((((map__22123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22123):map__22123);
var namespace = cljs.core.get.call(null,map__22123__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22006,inst_22000,inst_22040,inst_22008,inst_22003,inst_22004,inst_22036,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22040__$1 = cljs.core.group_by.call(null,inst_22039,inst_22006);
var inst_22042 = (inst_22040__$1 == null);
var inst_22043 = cljs.core.not.call(null,inst_22042);
var state_22087__$1 = (function (){var statearr_22125 = state_22087;
(statearr_22125[(28)] = inst_22036);

(statearr_22125[(16)] = inst_22040__$1);

return statearr_22125;
})();
if(inst_22043){
var statearr_22126_22199 = state_22087__$1;
(statearr_22126_22199[(1)] = (32));

} else {
var statearr_22127_22200 = state_22087__$1;
(statearr_22127_22200[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (44))){
var inst_22063 = (state_22087[(21)]);
var inst_22076 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22063);
var inst_22077 = cljs.core.pr_str.call(null,inst_22076);
var inst_22078 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22077)].join('');
var inst_22079 = figwheel.client.utils.log.call(null,inst_22078);
var state_22087__$1 = state_22087;
var statearr_22128_22201 = state_22087__$1;
(statearr_22128_22201[(2)] = inst_22079);

(statearr_22128_22201[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (6))){
var inst_21981 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22129_22202 = state_22087__$1;
(statearr_22129_22202[(2)] = inst_21981);

(statearr_22129_22202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (28))){
var inst_22006 = (state_22087[(26)]);
var inst_22033 = (state_22087[(2)]);
var inst_22034 = cljs.core.not_empty.call(null,inst_22006);
var state_22087__$1 = (function (){var statearr_22130 = state_22087;
(statearr_22130[(29)] = inst_22033);

return statearr_22130;
})();
if(cljs.core.truth_(inst_22034)){
var statearr_22131_22203 = state_22087__$1;
(statearr_22131_22203[(1)] = (29));

} else {
var statearr_22132_22204 = state_22087__$1;
(statearr_22132_22204[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (25))){
var inst_22004 = (state_22087[(25)]);
var inst_22020 = (state_22087[(2)]);
var inst_22021 = cljs.core.not_empty.call(null,inst_22004);
var state_22087__$1 = (function (){var statearr_22133 = state_22087;
(statearr_22133[(30)] = inst_22020);

return statearr_22133;
})();
if(cljs.core.truth_(inst_22021)){
var statearr_22134_22205 = state_22087__$1;
(statearr_22134_22205[(1)] = (26));

} else {
var statearr_22135_22206 = state_22087__$1;
(statearr_22135_22206[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (34))){
var inst_22056 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
if(cljs.core.truth_(inst_22056)){
var statearr_22136_22207 = state_22087__$1;
(statearr_22136_22207[(1)] = (38));

} else {
var statearr_22137_22208 = state_22087__$1;
(statearr_22137_22208[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (17))){
var state_22087__$1 = state_22087;
var statearr_22138_22209 = state_22087__$1;
(statearr_22138_22209[(2)] = recompile_dependents);

(statearr_22138_22209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (3))){
var state_22087__$1 = state_22087;
var statearr_22139_22210 = state_22087__$1;
(statearr_22139_22210[(2)] = null);

(statearr_22139_22210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (12))){
var inst_21977 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22140_22211 = state_22087__$1;
(statearr_22140_22211[(2)] = inst_21977);

(statearr_22140_22211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (2))){
var inst_21939 = (state_22087[(13)]);
var inst_21946 = cljs.core.seq.call(null,inst_21939);
var inst_21947 = inst_21946;
var inst_21948 = null;
var inst_21949 = (0);
var inst_21950 = (0);
var state_22087__$1 = (function (){var statearr_22141 = state_22087;
(statearr_22141[(7)] = inst_21948);

(statearr_22141[(8)] = inst_21949);

(statearr_22141[(9)] = inst_21947);

(statearr_22141[(10)] = inst_21950);

return statearr_22141;
})();
var statearr_22142_22212 = state_22087__$1;
(statearr_22142_22212[(2)] = null);

(statearr_22142_22212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (23))){
var inst_22006 = (state_22087[(26)]);
var inst_22000 = (state_22087[(19)]);
var inst_22008 = (state_22087[(23)]);
var inst_22003 = (state_22087[(24)]);
var inst_22004 = (state_22087[(25)]);
var inst_22011 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22013 = (function (){var all_files = inst_22000;
var res_SINGLEQUOTE_ = inst_22003;
var res = inst_22004;
var files_not_loaded = inst_22006;
var dependencies_that_loaded = inst_22008;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22006,inst_22000,inst_22008,inst_22003,inst_22004,inst_22011,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22012){
var map__22143 = p__22012;
var map__22143__$1 = ((((!((map__22143 == null)))?((((map__22143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22143):map__22143);
var request_url = cljs.core.get.call(null,map__22143__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22006,inst_22000,inst_22008,inst_22003,inst_22004,inst_22011,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22014 = cljs.core.reverse.call(null,inst_22008);
var inst_22015 = cljs.core.map.call(null,inst_22013,inst_22014);
var inst_22016 = cljs.core.pr_str.call(null,inst_22015);
var inst_22017 = figwheel.client.utils.log.call(null,inst_22016);
var state_22087__$1 = (function (){var statearr_22145 = state_22087;
(statearr_22145[(31)] = inst_22011);

return statearr_22145;
})();
var statearr_22146_22213 = state_22087__$1;
(statearr_22146_22213[(2)] = inst_22017);

(statearr_22146_22213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (35))){
var state_22087__$1 = state_22087;
var statearr_22147_22214 = state_22087__$1;
(statearr_22147_22214[(2)] = true);

(statearr_22147_22214[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (19))){
var inst_21990 = (state_22087[(12)]);
var inst_21996 = figwheel.client.file_reloading.expand_files.call(null,inst_21990);
var state_22087__$1 = state_22087;
var statearr_22148_22215 = state_22087__$1;
(statearr_22148_22215[(2)] = inst_21996);

(statearr_22148_22215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (11))){
var state_22087__$1 = state_22087;
var statearr_22149_22216 = state_22087__$1;
(statearr_22149_22216[(2)] = null);

(statearr_22149_22216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (9))){
var inst_21979 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22150_22217 = state_22087__$1;
(statearr_22150_22217[(2)] = inst_21979);

(statearr_22150_22217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (5))){
var inst_21949 = (state_22087[(8)]);
var inst_21950 = (state_22087[(10)]);
var inst_21952 = (inst_21950 < inst_21949);
var inst_21953 = inst_21952;
var state_22087__$1 = state_22087;
if(cljs.core.truth_(inst_21953)){
var statearr_22151_22218 = state_22087__$1;
(statearr_22151_22218[(1)] = (7));

} else {
var statearr_22152_22219 = state_22087__$1;
(statearr_22152_22219[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (14))){
var inst_21960 = (state_22087[(22)]);
var inst_21969 = cljs.core.first.call(null,inst_21960);
var inst_21970 = figwheel.client.file_reloading.eval_body.call(null,inst_21969,opts);
var inst_21971 = cljs.core.next.call(null,inst_21960);
var inst_21947 = inst_21971;
var inst_21948 = null;
var inst_21949 = (0);
var inst_21950 = (0);
var state_22087__$1 = (function (){var statearr_22153 = state_22087;
(statearr_22153[(7)] = inst_21948);

(statearr_22153[(32)] = inst_21970);

(statearr_22153[(8)] = inst_21949);

(statearr_22153[(9)] = inst_21947);

(statearr_22153[(10)] = inst_21950);

return statearr_22153;
})();
var statearr_22154_22220 = state_22087__$1;
(statearr_22154_22220[(2)] = null);

(statearr_22154_22220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (45))){
var state_22087__$1 = state_22087;
var statearr_22155_22221 = state_22087__$1;
(statearr_22155_22221[(2)] = null);

(statearr_22155_22221[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (26))){
var inst_22006 = (state_22087[(26)]);
var inst_22000 = (state_22087[(19)]);
var inst_22008 = (state_22087[(23)]);
var inst_22003 = (state_22087[(24)]);
var inst_22004 = (state_22087[(25)]);
var inst_22023 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22025 = (function (){var all_files = inst_22000;
var res_SINGLEQUOTE_ = inst_22003;
var res = inst_22004;
var files_not_loaded = inst_22006;
var dependencies_that_loaded = inst_22008;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22006,inst_22000,inst_22008,inst_22003,inst_22004,inst_22023,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22024){
var map__22156 = p__22024;
var map__22156__$1 = ((((!((map__22156 == null)))?((((map__22156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22156):map__22156);
var namespace = cljs.core.get.call(null,map__22156__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22006,inst_22000,inst_22008,inst_22003,inst_22004,inst_22023,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22026 = cljs.core.map.call(null,inst_22025,inst_22004);
var inst_22027 = cljs.core.pr_str.call(null,inst_22026);
var inst_22028 = figwheel.client.utils.log.call(null,inst_22027);
var inst_22029 = (function (){var all_files = inst_22000;
var res_SINGLEQUOTE_ = inst_22003;
var res = inst_22004;
var files_not_loaded = inst_22006;
var dependencies_that_loaded = inst_22008;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22006,inst_22000,inst_22008,inst_22003,inst_22004,inst_22023,inst_22025,inst_22026,inst_22027,inst_22028,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22006,inst_22000,inst_22008,inst_22003,inst_22004,inst_22023,inst_22025,inst_22026,inst_22027,inst_22028,state_val_22088,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22030 = setTimeout(inst_22029,(10));
var state_22087__$1 = (function (){var statearr_22158 = state_22087;
(statearr_22158[(33)] = inst_22028);

(statearr_22158[(34)] = inst_22023);

return statearr_22158;
})();
var statearr_22159_22222 = state_22087__$1;
(statearr_22159_22222[(2)] = inst_22030);

(statearr_22159_22222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (16))){
var state_22087__$1 = state_22087;
var statearr_22160_22223 = state_22087__$1;
(statearr_22160_22223[(2)] = reload_dependents);

(statearr_22160_22223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (38))){
var inst_22040 = (state_22087[(16)]);
var inst_22058 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22040);
var state_22087__$1 = state_22087;
var statearr_22161_22224 = state_22087__$1;
(statearr_22161_22224[(2)] = inst_22058);

(statearr_22161_22224[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (30))){
var state_22087__$1 = state_22087;
var statearr_22162_22225 = state_22087__$1;
(statearr_22162_22225[(2)] = null);

(statearr_22162_22225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (10))){
var inst_21960 = (state_22087[(22)]);
var inst_21962 = cljs.core.chunked_seq_QMARK_.call(null,inst_21960);
var state_22087__$1 = state_22087;
if(inst_21962){
var statearr_22163_22226 = state_22087__$1;
(statearr_22163_22226[(1)] = (13));

} else {
var statearr_22164_22227 = state_22087__$1;
(statearr_22164_22227[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (18))){
var inst_21994 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
if(cljs.core.truth_(inst_21994)){
var statearr_22165_22228 = state_22087__$1;
(statearr_22165_22228[(1)] = (19));

} else {
var statearr_22166_22229 = state_22087__$1;
(statearr_22166_22229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (42))){
var state_22087__$1 = state_22087;
var statearr_22167_22230 = state_22087__$1;
(statearr_22167_22230[(2)] = null);

(statearr_22167_22230[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (37))){
var inst_22053 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
var statearr_22168_22231 = state_22087__$1;
(statearr_22168_22231[(2)] = inst_22053);

(statearr_22168_22231[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (8))){
var inst_21947 = (state_22087[(9)]);
var inst_21960 = (state_22087[(22)]);
var inst_21960__$1 = cljs.core.seq.call(null,inst_21947);
var state_22087__$1 = (function (){var statearr_22169 = state_22087;
(statearr_22169[(22)] = inst_21960__$1);

return statearr_22169;
})();
if(inst_21960__$1){
var statearr_22170_22232 = state_22087__$1;
(statearr_22170_22232[(1)] = (10));

} else {
var statearr_22171_22233 = state_22087__$1;
(statearr_22171_22233[(1)] = (11));

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
});})(c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__14294__auto__,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____0 = (function (){
var statearr_22172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22172[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__);

(statearr_22172[(1)] = (1));

return statearr_22172;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____1 = (function (state_22087){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__.call(null,state_22087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e22173){if((e22173 instanceof Object)){
var ex__14298__auto__ = e22173;
var statearr_22174_22234 = state_22087;
(statearr_22174_22234[(5)] = ex__14298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22235 = state_22087;
state_22087 = G__22235;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__ = function(state_22087){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____1.call(this,state_22087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14295__auto__;
})()
;})(switch__14294__auto__,c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__14386__auto__ = (function (){var statearr_22175 = f__14385__auto__.call(null);
(statearr_22175[(6)] = c__14384__auto__);

return statearr_22175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14386__auto__);
});})(c__14384__auto__,map__21932,map__21932__$1,opts,before_jsload,on_jsload,reload_dependents,map__21933,map__21933__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__14384__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22238,link){
var map__22239 = p__22238;
var map__22239__$1 = ((((!((map__22239 == null)))?((((map__22239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22239):map__22239);
var file = cljs.core.get.call(null,map__22239__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__22239,map__22239__$1,file){
return (function (p1__22236_SHARP_,p2__22237_SHARP_){
if(cljs.core._EQ_.call(null,p1__22236_SHARP_,p2__22237_SHARP_)){
return p1__22236_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__22239,map__22239__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22242){
var map__22243 = p__22242;
var map__22243__$1 = ((((!((map__22243 == null)))?((((map__22243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22243):map__22243);
var match_length = cljs.core.get.call(null,map__22243__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22243__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22241_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22241_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22245_SHARP_,p2__22246_SHARP_){
return cljs.core.assoc.call(null,p1__22245_SHARP_,cljs.core.get.call(null,p2__22246_SHARP_,key),p2__22246_SHARP_);
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
var loaded_f_datas_22247 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_22247);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_22247);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22248,p__22249){
var map__22250 = p__22248;
var map__22250__$1 = ((((!((map__22250 == null)))?((((map__22250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22250):map__22250);
var on_cssload = cljs.core.get.call(null,map__22250__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__22251 = p__22249;
var map__22251__$1 = ((((!((map__22251 == null)))?((((map__22251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22251):map__22251);
var files_msg = map__22251__$1;
var files = cljs.core.get.call(null,map__22251__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1505834886373
