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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22553_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22553_SHARP_));
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
var seq__22554 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22555 = null;
var count__22556 = (0);
var i__22557 = (0);
while(true){
if((i__22557 < count__22556)){
var n = cljs.core._nth.call(null,chunk__22555,i__22557);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22558 = seq__22554;
var G__22559 = chunk__22555;
var G__22560 = count__22556;
var G__22561 = (i__22557 + (1));
seq__22554 = G__22558;
chunk__22555 = G__22559;
count__22556 = G__22560;
i__22557 = G__22561;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22554);
if(temp__6738__auto__){
var seq__22554__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22554__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__22554__$1);
var G__22562 = cljs.core.chunk_rest.call(null,seq__22554__$1);
var G__22563 = c__10741__auto__;
var G__22564 = cljs.core.count.call(null,c__10741__auto__);
var G__22565 = (0);
seq__22554 = G__22562;
chunk__22555 = G__22563;
count__22556 = G__22564;
i__22557 = G__22565;
continue;
} else {
var n = cljs.core.first.call(null,seq__22554__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22566 = cljs.core.next.call(null,seq__22554__$1);
var G__22567 = null;
var G__22568 = (0);
var G__22569 = (0);
seq__22554 = G__22566;
chunk__22555 = G__22567;
count__22556 = G__22568;
i__22557 = G__22569;
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

var seq__22579_22587 = cljs.core.seq.call(null,deps);
var chunk__22580_22588 = null;
var count__22581_22589 = (0);
var i__22582_22590 = (0);
while(true){
if((i__22582_22590 < count__22581_22589)){
var dep_22591 = cljs.core._nth.call(null,chunk__22580_22588,i__22582_22590);
topo_sort_helper_STAR_.call(null,dep_22591,(depth + (1)),state);

var G__22592 = seq__22579_22587;
var G__22593 = chunk__22580_22588;
var G__22594 = count__22581_22589;
var G__22595 = (i__22582_22590 + (1));
seq__22579_22587 = G__22592;
chunk__22580_22588 = G__22593;
count__22581_22589 = G__22594;
i__22582_22590 = G__22595;
continue;
} else {
var temp__6738__auto___22596 = cljs.core.seq.call(null,seq__22579_22587);
if(temp__6738__auto___22596){
var seq__22579_22597__$1 = temp__6738__auto___22596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22579_22597__$1)){
var c__10741__auto___22598 = cljs.core.chunk_first.call(null,seq__22579_22597__$1);
var G__22599 = cljs.core.chunk_rest.call(null,seq__22579_22597__$1);
var G__22600 = c__10741__auto___22598;
var G__22601 = cljs.core.count.call(null,c__10741__auto___22598);
var G__22602 = (0);
seq__22579_22587 = G__22599;
chunk__22580_22588 = G__22600;
count__22581_22589 = G__22601;
i__22582_22590 = G__22602;
continue;
} else {
var dep_22603 = cljs.core.first.call(null,seq__22579_22597__$1);
topo_sort_helper_STAR_.call(null,dep_22603,(depth + (1)),state);

var G__22604 = cljs.core.next.call(null,seq__22579_22597__$1);
var G__22605 = null;
var G__22606 = (0);
var G__22607 = (0);
seq__22579_22587 = G__22604;
chunk__22580_22588 = G__22605;
count__22581_22589 = G__22606;
i__22582_22590 = G__22607;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22583){
var vec__22584 = p__22583;
var seq__22585 = cljs.core.seq.call(null,vec__22584);
var first__22586 = cljs.core.first.call(null,seq__22585);
var seq__22585__$1 = cljs.core.next.call(null,seq__22585);
var x = first__22586;
var xs = seq__22585__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22584,seq__22585,first__22586,seq__22585__$1,x,xs,get_deps__$1){
return (function (p1__22570_SHARP_){
return clojure.set.difference.call(null,p1__22570_SHARP_,x);
});})(vec__22584,seq__22585,first__22586,seq__22585__$1,x,xs,get_deps__$1))
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
var seq__22608 = cljs.core.seq.call(null,provides);
var chunk__22609 = null;
var count__22610 = (0);
var i__22611 = (0);
while(true){
if((i__22611 < count__22610)){
var prov = cljs.core._nth.call(null,chunk__22609,i__22611);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22612_22620 = cljs.core.seq.call(null,requires);
var chunk__22613_22621 = null;
var count__22614_22622 = (0);
var i__22615_22623 = (0);
while(true){
if((i__22615_22623 < count__22614_22622)){
var req_22624 = cljs.core._nth.call(null,chunk__22613_22621,i__22615_22623);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22624,prov);

var G__22625 = seq__22612_22620;
var G__22626 = chunk__22613_22621;
var G__22627 = count__22614_22622;
var G__22628 = (i__22615_22623 + (1));
seq__22612_22620 = G__22625;
chunk__22613_22621 = G__22626;
count__22614_22622 = G__22627;
i__22615_22623 = G__22628;
continue;
} else {
var temp__6738__auto___22629 = cljs.core.seq.call(null,seq__22612_22620);
if(temp__6738__auto___22629){
var seq__22612_22630__$1 = temp__6738__auto___22629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22612_22630__$1)){
var c__10741__auto___22631 = cljs.core.chunk_first.call(null,seq__22612_22630__$1);
var G__22632 = cljs.core.chunk_rest.call(null,seq__22612_22630__$1);
var G__22633 = c__10741__auto___22631;
var G__22634 = cljs.core.count.call(null,c__10741__auto___22631);
var G__22635 = (0);
seq__22612_22620 = G__22632;
chunk__22613_22621 = G__22633;
count__22614_22622 = G__22634;
i__22615_22623 = G__22635;
continue;
} else {
var req_22636 = cljs.core.first.call(null,seq__22612_22630__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22636,prov);

var G__22637 = cljs.core.next.call(null,seq__22612_22630__$1);
var G__22638 = null;
var G__22639 = (0);
var G__22640 = (0);
seq__22612_22620 = G__22637;
chunk__22613_22621 = G__22638;
count__22614_22622 = G__22639;
i__22615_22623 = G__22640;
continue;
}
} else {
}
}
break;
}

var G__22641 = seq__22608;
var G__22642 = chunk__22609;
var G__22643 = count__22610;
var G__22644 = (i__22611 + (1));
seq__22608 = G__22641;
chunk__22609 = G__22642;
count__22610 = G__22643;
i__22611 = G__22644;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22608);
if(temp__6738__auto__){
var seq__22608__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22608__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__22608__$1);
var G__22645 = cljs.core.chunk_rest.call(null,seq__22608__$1);
var G__22646 = c__10741__auto__;
var G__22647 = cljs.core.count.call(null,c__10741__auto__);
var G__22648 = (0);
seq__22608 = G__22645;
chunk__22609 = G__22646;
count__22610 = G__22647;
i__22611 = G__22648;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22608__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22616_22649 = cljs.core.seq.call(null,requires);
var chunk__22617_22650 = null;
var count__22618_22651 = (0);
var i__22619_22652 = (0);
while(true){
if((i__22619_22652 < count__22618_22651)){
var req_22653 = cljs.core._nth.call(null,chunk__22617_22650,i__22619_22652);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22653,prov);

var G__22654 = seq__22616_22649;
var G__22655 = chunk__22617_22650;
var G__22656 = count__22618_22651;
var G__22657 = (i__22619_22652 + (1));
seq__22616_22649 = G__22654;
chunk__22617_22650 = G__22655;
count__22618_22651 = G__22656;
i__22619_22652 = G__22657;
continue;
} else {
var temp__6738__auto___22658__$1 = cljs.core.seq.call(null,seq__22616_22649);
if(temp__6738__auto___22658__$1){
var seq__22616_22659__$1 = temp__6738__auto___22658__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22616_22659__$1)){
var c__10741__auto___22660 = cljs.core.chunk_first.call(null,seq__22616_22659__$1);
var G__22661 = cljs.core.chunk_rest.call(null,seq__22616_22659__$1);
var G__22662 = c__10741__auto___22660;
var G__22663 = cljs.core.count.call(null,c__10741__auto___22660);
var G__22664 = (0);
seq__22616_22649 = G__22661;
chunk__22617_22650 = G__22662;
count__22618_22651 = G__22663;
i__22619_22652 = G__22664;
continue;
} else {
var req_22665 = cljs.core.first.call(null,seq__22616_22659__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22665,prov);

var G__22666 = cljs.core.next.call(null,seq__22616_22659__$1);
var G__22667 = null;
var G__22668 = (0);
var G__22669 = (0);
seq__22616_22649 = G__22666;
chunk__22617_22650 = G__22667;
count__22618_22651 = G__22668;
i__22619_22652 = G__22669;
continue;
}
} else {
}
}
break;
}

var G__22670 = cljs.core.next.call(null,seq__22608__$1);
var G__22671 = null;
var G__22672 = (0);
var G__22673 = (0);
seq__22608 = G__22670;
chunk__22609 = G__22671;
count__22610 = G__22672;
i__22611 = G__22673;
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
var seq__22674_22678 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22675_22679 = null;
var count__22676_22680 = (0);
var i__22677_22681 = (0);
while(true){
if((i__22677_22681 < count__22676_22680)){
var ns_22682 = cljs.core._nth.call(null,chunk__22675_22679,i__22677_22681);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22682);

var G__22683 = seq__22674_22678;
var G__22684 = chunk__22675_22679;
var G__22685 = count__22676_22680;
var G__22686 = (i__22677_22681 + (1));
seq__22674_22678 = G__22683;
chunk__22675_22679 = G__22684;
count__22676_22680 = G__22685;
i__22677_22681 = G__22686;
continue;
} else {
var temp__6738__auto___22687 = cljs.core.seq.call(null,seq__22674_22678);
if(temp__6738__auto___22687){
var seq__22674_22688__$1 = temp__6738__auto___22687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22674_22688__$1)){
var c__10741__auto___22689 = cljs.core.chunk_first.call(null,seq__22674_22688__$1);
var G__22690 = cljs.core.chunk_rest.call(null,seq__22674_22688__$1);
var G__22691 = c__10741__auto___22689;
var G__22692 = cljs.core.count.call(null,c__10741__auto___22689);
var G__22693 = (0);
seq__22674_22678 = G__22690;
chunk__22675_22679 = G__22691;
count__22676_22680 = G__22692;
i__22677_22681 = G__22693;
continue;
} else {
var ns_22694 = cljs.core.first.call(null,seq__22674_22688__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22694);

var G__22695 = cljs.core.next.call(null,seq__22674_22688__$1);
var G__22696 = null;
var G__22697 = (0);
var G__22698 = (0);
seq__22674_22678 = G__22695;
chunk__22675_22679 = G__22696;
count__22676_22680 = G__22697;
i__22677_22681 = G__22698;
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
var G__22699__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22700__i = 0, G__22700__a = new Array(arguments.length -  0);
while (G__22700__i < G__22700__a.length) {G__22700__a[G__22700__i] = arguments[G__22700__i + 0]; ++G__22700__i;}
  args = new cljs.core.IndexedSeq(G__22700__a,0,null);
} 
return G__22699__delegate.call(this,args);};
G__22699.cljs$lang$maxFixedArity = 0;
G__22699.cljs$lang$applyTo = (function (arglist__22701){
var args = cljs.core.seq(arglist__22701);
return G__22699__delegate(args);
});
G__22699.cljs$core$IFn$_invoke$arity$variadic = G__22699__delegate;
return G__22699;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__22702_SHARP_,p2__22703_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22702_SHARP_)].join('')),p2__22703_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__22704_SHARP_,p2__22705_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22704_SHARP_)].join(''),p2__22705_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__22706 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__22706.addCallback(((function (G__22706){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__22706))
);

G__22706.addErrback(((function (G__22706){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__22706))
);

return G__22706;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22707 = cljs.core._EQ_;
var expr__22708 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22707.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22708))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__22707,expr__22708){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__22707,expr__22708))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__22707,expr__22708){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22710){if((e22710 instanceof Error)){
var e = e22710;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22710;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__22707,expr__22708))
} else {
if(cljs.core.truth_(pred__22707.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22708))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__22707.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__22708))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__22707.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__22708))){
return ((function (pred__22707,expr__22708){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e22711){if((e22711 instanceof Error)){
var e = e22711;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22711;

}
}})());
});
;})(pred__22707,expr__22708))
} else {
return ((function (pred__22707,expr__22708){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22707,expr__22708))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22712,callback){
var map__22713 = p__22712;
var map__22713__$1 = ((((!((map__22713 == null)))?((((map__22713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22713):map__22713);
var file_msg = map__22713__$1;
var request_url = cljs.core.get.call(null,map__22713__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22713,map__22713__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22713,map__22713__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__){
return (function (state_22737){
var state_val_22738 = (state_22737[(1)]);
if((state_val_22738 === (7))){
var inst_22733 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22739_22756 = state_22737__$1;
(statearr_22739_22756[(2)] = inst_22733);

(statearr_22739_22756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (1))){
var state_22737__$1 = state_22737;
var statearr_22740_22757 = state_22737__$1;
(statearr_22740_22757[(2)] = null);

(statearr_22740_22757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (4))){
var inst_22717 = (state_22737[(7)]);
var inst_22717__$1 = (state_22737[(2)]);
var state_22737__$1 = (function (){var statearr_22741 = state_22737;
(statearr_22741[(7)] = inst_22717__$1);

return statearr_22741;
})();
if(cljs.core.truth_(inst_22717__$1)){
var statearr_22742_22758 = state_22737__$1;
(statearr_22742_22758[(1)] = (5));

} else {
var statearr_22743_22759 = state_22737__$1;
(statearr_22743_22759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (6))){
var state_22737__$1 = state_22737;
var statearr_22744_22760 = state_22737__$1;
(statearr_22744_22760[(2)] = null);

(statearr_22744_22760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (3))){
var inst_22735 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22737__$1,inst_22735);
} else {
if((state_val_22738 === (2))){
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22737__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22738 === (11))){
var inst_22729 = (state_22737[(2)]);
var state_22737__$1 = (function (){var statearr_22745 = state_22737;
(statearr_22745[(8)] = inst_22729);

return statearr_22745;
})();
var statearr_22746_22761 = state_22737__$1;
(statearr_22746_22761[(2)] = null);

(statearr_22746_22761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (9))){
var inst_22721 = (state_22737[(9)]);
var inst_22723 = (state_22737[(10)]);
var inst_22725 = inst_22723.call(null,inst_22721);
var state_22737__$1 = state_22737;
var statearr_22747_22762 = state_22737__$1;
(statearr_22747_22762[(2)] = inst_22725);

(statearr_22747_22762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (5))){
var inst_22717 = (state_22737[(7)]);
var inst_22719 = figwheel.client.file_reloading.blocking_load.call(null,inst_22717);
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22737__$1,(8),inst_22719);
} else {
if((state_val_22738 === (10))){
var inst_22721 = (state_22737[(9)]);
var inst_22727 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22721);
var state_22737__$1 = state_22737;
var statearr_22748_22763 = state_22737__$1;
(statearr_22748_22763[(2)] = inst_22727);

(statearr_22748_22763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (8))){
var inst_22717 = (state_22737[(7)]);
var inst_22723 = (state_22737[(10)]);
var inst_22721 = (state_22737[(2)]);
var inst_22722 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22723__$1 = cljs.core.get.call(null,inst_22722,inst_22717);
var state_22737__$1 = (function (){var statearr_22749 = state_22737;
(statearr_22749[(9)] = inst_22721);

(statearr_22749[(10)] = inst_22723__$1);

return statearr_22749;
})();
if(cljs.core.truth_(inst_22723__$1)){
var statearr_22750_22764 = state_22737__$1;
(statearr_22750_22764[(1)] = (9));

} else {
var statearr_22751_22765 = state_22737__$1;
(statearr_22751_22765[(1)] = (10));

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
});})(c__15288__auto__))
;
return ((function (switch__15198__auto__,c__15288__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__15199__auto__ = null;
var figwheel$client$file_reloading$state_machine__15199__auto____0 = (function (){
var statearr_22752 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22752[(0)] = figwheel$client$file_reloading$state_machine__15199__auto__);

(statearr_22752[(1)] = (1));

return statearr_22752;
});
var figwheel$client$file_reloading$state_machine__15199__auto____1 = (function (state_22737){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_22737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e22753){if((e22753 instanceof Object)){
var ex__15202__auto__ = e22753;
var statearr_22754_22766 = state_22737;
(statearr_22754_22766[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22767 = state_22737;
state_22737 = G__22767;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__15199__auto__ = function(state_22737){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__15199__auto____1.call(this,state_22737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__15199__auto____0;
figwheel$client$file_reloading$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__15199__auto____1;
return figwheel$client$file_reloading$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__))
})();
var state__15290__auto__ = (function (){var statearr_22755 = f__15289__auto__.call(null);
(statearr_22755[(6)] = c__15288__auto__);

return statearr_22755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__))
);

return c__15288__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22768,callback){
var map__22769 = p__22768;
var map__22769__$1 = ((((!((map__22769 == null)))?((((map__22769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22769):map__22769);
var file_msg = map__22769__$1;
var namespace = cljs.core.get.call(null,map__22769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22769,map__22769__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22769,map__22769__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__22771){
var map__22772 = p__22771;
var map__22772__$1 = ((((!((map__22772 == null)))?((((map__22772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22772):map__22772);
var file_msg = map__22772__$1;
var namespace = cljs.core.get.call(null,map__22772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22774){
var map__22775 = p__22774;
var map__22775__$1 = ((((!((map__22775 == null)))?((((map__22775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22775):map__22775);
var file_msg = map__22775__$1;
var namespace = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22777,callback){
var map__22778 = p__22777;
var map__22778__$1 = ((((!((map__22778 == null)))?((((map__22778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22778):map__22778);
var file_msg = map__22778__$1;
var request_url = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__15288__auto___22828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___22828,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___22828,out){
return (function (state_22813){
var state_val_22814 = (state_22813[(1)]);
if((state_val_22814 === (1))){
var inst_22787 = cljs.core.seq.call(null,files);
var inst_22788 = cljs.core.first.call(null,inst_22787);
var inst_22789 = cljs.core.next.call(null,inst_22787);
var inst_22790 = files;
var state_22813__$1 = (function (){var statearr_22815 = state_22813;
(statearr_22815[(7)] = inst_22788);

(statearr_22815[(8)] = inst_22790);

(statearr_22815[(9)] = inst_22789);

return statearr_22815;
})();
var statearr_22816_22829 = state_22813__$1;
(statearr_22816_22829[(2)] = null);

(statearr_22816_22829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (2))){
var inst_22790 = (state_22813[(8)]);
var inst_22796 = (state_22813[(10)]);
var inst_22795 = cljs.core.seq.call(null,inst_22790);
var inst_22796__$1 = cljs.core.first.call(null,inst_22795);
var inst_22797 = cljs.core.next.call(null,inst_22795);
var inst_22798 = (inst_22796__$1 == null);
var inst_22799 = cljs.core.not.call(null,inst_22798);
var state_22813__$1 = (function (){var statearr_22817 = state_22813;
(statearr_22817[(11)] = inst_22797);

(statearr_22817[(10)] = inst_22796__$1);

return statearr_22817;
})();
if(inst_22799){
var statearr_22818_22830 = state_22813__$1;
(statearr_22818_22830[(1)] = (4));

} else {
var statearr_22819_22831 = state_22813__$1;
(statearr_22819_22831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (3))){
var inst_22811 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22813__$1,inst_22811);
} else {
if((state_val_22814 === (4))){
var inst_22796 = (state_22813[(10)]);
var inst_22801 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22796);
var state_22813__$1 = state_22813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22813__$1,(7),inst_22801);
} else {
if((state_val_22814 === (5))){
var inst_22807 = cljs.core.async.close_BANG_.call(null,out);
var state_22813__$1 = state_22813;
var statearr_22820_22832 = state_22813__$1;
(statearr_22820_22832[(2)] = inst_22807);

(statearr_22820_22832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (6))){
var inst_22809 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
var statearr_22821_22833 = state_22813__$1;
(statearr_22821_22833[(2)] = inst_22809);

(statearr_22821_22833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (7))){
var inst_22797 = (state_22813[(11)]);
var inst_22803 = (state_22813[(2)]);
var inst_22804 = cljs.core.async.put_BANG_.call(null,out,inst_22803);
var inst_22790 = inst_22797;
var state_22813__$1 = (function (){var statearr_22822 = state_22813;
(statearr_22822[(12)] = inst_22804);

(statearr_22822[(8)] = inst_22790);

return statearr_22822;
})();
var statearr_22823_22834 = state_22813__$1;
(statearr_22823_22834[(2)] = null);

(statearr_22823_22834[(1)] = (2));


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
});})(c__15288__auto___22828,out))
;
return ((function (switch__15198__auto__,c__15288__auto___22828,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____0 = (function (){
var statearr_22824 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22824[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__);

(statearr_22824[(1)] = (1));

return statearr_22824;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____1 = (function (state_22813){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_22813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e22825){if((e22825 instanceof Object)){
var ex__15202__auto__ = e22825;
var statearr_22826_22835 = state_22813;
(statearr_22826_22835[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22836 = state_22813;
state_22813 = G__22836;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__ = function(state_22813){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____1.call(this,state_22813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___22828,out))
})();
var state__15290__auto__ = (function (){var statearr_22827 = f__15289__auto__.call(null);
(statearr_22827[(6)] = c__15288__auto___22828);

return statearr_22827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___22828,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22837,opts){
var map__22838 = p__22837;
var map__22838__$1 = ((((!((map__22838 == null)))?((((map__22838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22838):map__22838);
var eval_body = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e22840){var e = e22840;
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
return (function (p1__22841_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22841_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__22842){
var vec__22843 = p__22842;
var k = cljs.core.nth.call(null,vec__22843,(0),null);
var v = cljs.core.nth.call(null,vec__22843,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22846){
var vec__22847 = p__22846;
var k = cljs.core.nth.call(null,vec__22847,(0),null);
var v = cljs.core.nth.call(null,vec__22847,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22853,p__22854){
var map__22855 = p__22853;
var map__22855__$1 = ((((!((map__22855 == null)))?((((map__22855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22855):map__22855);
var opts = map__22855__$1;
var before_jsload = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22856 = p__22854;
var map__22856__$1 = ((((!((map__22856 == null)))?((((map__22856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22856):map__22856);
var msg = map__22856__$1;
var files = cljs.core.get.call(null,map__22856__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22856__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22856__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23010){
var state_val_23011 = (state_23010[(1)]);
if((state_val_23011 === (7))){
var inst_22870 = (state_23010[(7)]);
var inst_22873 = (state_23010[(8)]);
var inst_22871 = (state_23010[(9)]);
var inst_22872 = (state_23010[(10)]);
var inst_22878 = cljs.core._nth.call(null,inst_22871,inst_22873);
var inst_22879 = figwheel.client.file_reloading.eval_body.call(null,inst_22878,opts);
var inst_22880 = (inst_22873 + (1));
var tmp23012 = inst_22870;
var tmp23013 = inst_22871;
var tmp23014 = inst_22872;
var inst_22870__$1 = tmp23012;
var inst_22871__$1 = tmp23013;
var inst_22872__$1 = tmp23014;
var inst_22873__$1 = inst_22880;
var state_23010__$1 = (function (){var statearr_23015 = state_23010;
(statearr_23015[(7)] = inst_22870__$1);

(statearr_23015[(8)] = inst_22873__$1);

(statearr_23015[(9)] = inst_22871__$1);

(statearr_23015[(10)] = inst_22872__$1);

(statearr_23015[(11)] = inst_22879);

return statearr_23015;
})();
var statearr_23016_23099 = state_23010__$1;
(statearr_23016_23099[(2)] = null);

(statearr_23016_23099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (20))){
var inst_22913 = (state_23010[(12)]);
var inst_22921 = figwheel.client.file_reloading.sort_files.call(null,inst_22913);
var state_23010__$1 = state_23010;
var statearr_23017_23100 = state_23010__$1;
(statearr_23017_23100[(2)] = inst_22921);

(statearr_23017_23100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (27))){
var state_23010__$1 = state_23010;
var statearr_23018_23101 = state_23010__$1;
(statearr_23018_23101[(2)] = null);

(statearr_23018_23101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (1))){
var inst_22862 = (state_23010[(13)]);
var inst_22859 = before_jsload.call(null,files);
var inst_22860 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22861 = (function (){return ((function (inst_22862,inst_22859,inst_22860,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22850_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22850_SHARP_);
});
;})(inst_22862,inst_22859,inst_22860,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22862__$1 = cljs.core.filter.call(null,inst_22861,files);
var inst_22863 = cljs.core.not_empty.call(null,inst_22862__$1);
var state_23010__$1 = (function (){var statearr_23019 = state_23010;
(statearr_23019[(14)] = inst_22859);

(statearr_23019[(13)] = inst_22862__$1);

(statearr_23019[(15)] = inst_22860);

return statearr_23019;
})();
if(cljs.core.truth_(inst_22863)){
var statearr_23020_23102 = state_23010__$1;
(statearr_23020_23102[(1)] = (2));

} else {
var statearr_23021_23103 = state_23010__$1;
(statearr_23021_23103[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (24))){
var state_23010__$1 = state_23010;
var statearr_23022_23104 = state_23010__$1;
(statearr_23022_23104[(2)] = null);

(statearr_23022_23104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (39))){
var inst_22963 = (state_23010[(16)]);
var state_23010__$1 = state_23010;
var statearr_23023_23105 = state_23010__$1;
(statearr_23023_23105[(2)] = inst_22963);

(statearr_23023_23105[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (46))){
var inst_23005 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
var statearr_23024_23106 = state_23010__$1;
(statearr_23024_23106[(2)] = inst_23005);

(statearr_23024_23106[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (4))){
var inst_22907 = (state_23010[(2)]);
var inst_22908 = cljs.core.List.EMPTY;
var inst_22909 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22908);
var inst_22910 = (function (){return ((function (inst_22907,inst_22908,inst_22909,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22851_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22851_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22851_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__22851_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_22907,inst_22908,inst_22909,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22911 = cljs.core.filter.call(null,inst_22910,files);
var inst_22912 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22913 = cljs.core.concat.call(null,inst_22911,inst_22912);
var state_23010__$1 = (function (){var statearr_23025 = state_23010;
(statearr_23025[(17)] = inst_22907);

(statearr_23025[(18)] = inst_22909);

(statearr_23025[(12)] = inst_22913);

return statearr_23025;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23026_23107 = state_23010__$1;
(statearr_23026_23107[(1)] = (16));

} else {
var statearr_23027_23108 = state_23010__$1;
(statearr_23027_23108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (15))){
var inst_22897 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
var statearr_23028_23109 = state_23010__$1;
(statearr_23028_23109[(2)] = inst_22897);

(statearr_23028_23109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (21))){
var inst_22923 = (state_23010[(19)]);
var inst_22923__$1 = (state_23010[(2)]);
var inst_22924 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22923__$1);
var state_23010__$1 = (function (){var statearr_23029 = state_23010;
(statearr_23029[(19)] = inst_22923__$1);

return statearr_23029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23010__$1,(22),inst_22924);
} else {
if((state_val_23011 === (31))){
var inst_23008 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23010__$1,inst_23008);
} else {
if((state_val_23011 === (32))){
var inst_22963 = (state_23010[(16)]);
var inst_22968 = inst_22963.cljs$lang$protocol_mask$partition0$;
var inst_22969 = (inst_22968 & (64));
var inst_22970 = inst_22963.cljs$core$ISeq$;
var inst_22971 = (cljs.core.PROTOCOL_SENTINEL === inst_22970);
var inst_22972 = (inst_22969) || (inst_22971);
var state_23010__$1 = state_23010;
if(cljs.core.truth_(inst_22972)){
var statearr_23030_23110 = state_23010__$1;
(statearr_23030_23110[(1)] = (35));

} else {
var statearr_23031_23111 = state_23010__$1;
(statearr_23031_23111[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (40))){
var inst_22985 = (state_23010[(20)]);
var inst_22984 = (state_23010[(2)]);
var inst_22985__$1 = cljs.core.get.call(null,inst_22984,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22986 = cljs.core.get.call(null,inst_22984,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22987 = cljs.core.not_empty.call(null,inst_22985__$1);
var state_23010__$1 = (function (){var statearr_23032 = state_23010;
(statearr_23032[(21)] = inst_22986);

(statearr_23032[(20)] = inst_22985__$1);

return statearr_23032;
})();
if(cljs.core.truth_(inst_22987)){
var statearr_23033_23112 = state_23010__$1;
(statearr_23033_23112[(1)] = (41));

} else {
var statearr_23034_23113 = state_23010__$1;
(statearr_23034_23113[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (33))){
var state_23010__$1 = state_23010;
var statearr_23035_23114 = state_23010__$1;
(statearr_23035_23114[(2)] = false);

(statearr_23035_23114[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (13))){
var inst_22883 = (state_23010[(22)]);
var inst_22887 = cljs.core.chunk_first.call(null,inst_22883);
var inst_22888 = cljs.core.chunk_rest.call(null,inst_22883);
var inst_22889 = cljs.core.count.call(null,inst_22887);
var inst_22870 = inst_22888;
var inst_22871 = inst_22887;
var inst_22872 = inst_22889;
var inst_22873 = (0);
var state_23010__$1 = (function (){var statearr_23036 = state_23010;
(statearr_23036[(7)] = inst_22870);

(statearr_23036[(8)] = inst_22873);

(statearr_23036[(9)] = inst_22871);

(statearr_23036[(10)] = inst_22872);

return statearr_23036;
})();
var statearr_23037_23115 = state_23010__$1;
(statearr_23037_23115[(2)] = null);

(statearr_23037_23115[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (22))){
var inst_22931 = (state_23010[(23)]);
var inst_22926 = (state_23010[(24)]);
var inst_22927 = (state_23010[(25)]);
var inst_22923 = (state_23010[(19)]);
var inst_22926__$1 = (state_23010[(2)]);
var inst_22927__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22926__$1);
var inst_22928 = (function (){var all_files = inst_22923;
var res_SINGLEQUOTE_ = inst_22926__$1;
var res = inst_22927__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22931,inst_22926,inst_22927,inst_22923,inst_22926__$1,inst_22927__$1,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22852_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22852_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22931,inst_22926,inst_22927,inst_22923,inst_22926__$1,inst_22927__$1,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22929 = cljs.core.filter.call(null,inst_22928,inst_22926__$1);
var inst_22930 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22931__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22930);
var inst_22932 = cljs.core.not_empty.call(null,inst_22931__$1);
var state_23010__$1 = (function (){var statearr_23038 = state_23010;
(statearr_23038[(26)] = inst_22929);

(statearr_23038[(23)] = inst_22931__$1);

(statearr_23038[(24)] = inst_22926__$1);

(statearr_23038[(25)] = inst_22927__$1);

return statearr_23038;
})();
if(cljs.core.truth_(inst_22932)){
var statearr_23039_23116 = state_23010__$1;
(statearr_23039_23116[(1)] = (23));

} else {
var statearr_23040_23117 = state_23010__$1;
(statearr_23040_23117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (36))){
var state_23010__$1 = state_23010;
var statearr_23041_23118 = state_23010__$1;
(statearr_23041_23118[(2)] = false);

(statearr_23041_23118[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (41))){
var inst_22985 = (state_23010[(20)]);
var inst_22989 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22990 = cljs.core.map.call(null,inst_22989,inst_22985);
var inst_22991 = cljs.core.pr_str.call(null,inst_22990);
var inst_22992 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22991)].join('');
var inst_22993 = figwheel.client.utils.log.call(null,inst_22992);
var state_23010__$1 = state_23010;
var statearr_23042_23119 = state_23010__$1;
(statearr_23042_23119[(2)] = inst_22993);

(statearr_23042_23119[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (43))){
var inst_22986 = (state_23010[(21)]);
var inst_22996 = (state_23010[(2)]);
var inst_22997 = cljs.core.not_empty.call(null,inst_22986);
var state_23010__$1 = (function (){var statearr_23043 = state_23010;
(statearr_23043[(27)] = inst_22996);

return statearr_23043;
})();
if(cljs.core.truth_(inst_22997)){
var statearr_23044_23120 = state_23010__$1;
(statearr_23044_23120[(1)] = (44));

} else {
var statearr_23045_23121 = state_23010__$1;
(statearr_23045_23121[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (29))){
var inst_22929 = (state_23010[(26)]);
var inst_22931 = (state_23010[(23)]);
var inst_22963 = (state_23010[(16)]);
var inst_22926 = (state_23010[(24)]);
var inst_22927 = (state_23010[(25)]);
var inst_22923 = (state_23010[(19)]);
var inst_22959 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22962 = (function (){var all_files = inst_22923;
var res_SINGLEQUOTE_ = inst_22926;
var res = inst_22927;
var files_not_loaded = inst_22929;
var dependencies_that_loaded = inst_22931;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22931,inst_22963,inst_22926,inst_22927,inst_22923,inst_22959,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22961){
var map__23046 = p__22961;
var map__23046__$1 = ((((!((map__23046 == null)))?((((map__23046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23046):map__23046);
var namespace = cljs.core.get.call(null,map__23046__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22931,inst_22963,inst_22926,inst_22927,inst_22923,inst_22959,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22963__$1 = cljs.core.group_by.call(null,inst_22962,inst_22929);
var inst_22965 = (inst_22963__$1 == null);
var inst_22966 = cljs.core.not.call(null,inst_22965);
var state_23010__$1 = (function (){var statearr_23048 = state_23010;
(statearr_23048[(16)] = inst_22963__$1);

(statearr_23048[(28)] = inst_22959);

return statearr_23048;
})();
if(inst_22966){
var statearr_23049_23122 = state_23010__$1;
(statearr_23049_23122[(1)] = (32));

} else {
var statearr_23050_23123 = state_23010__$1;
(statearr_23050_23123[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (44))){
var inst_22986 = (state_23010[(21)]);
var inst_22999 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22986);
var inst_23000 = cljs.core.pr_str.call(null,inst_22999);
var inst_23001 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23000)].join('');
var inst_23002 = figwheel.client.utils.log.call(null,inst_23001);
var state_23010__$1 = state_23010;
var statearr_23051_23124 = state_23010__$1;
(statearr_23051_23124[(2)] = inst_23002);

(statearr_23051_23124[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (6))){
var inst_22904 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
var statearr_23052_23125 = state_23010__$1;
(statearr_23052_23125[(2)] = inst_22904);

(statearr_23052_23125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (28))){
var inst_22929 = (state_23010[(26)]);
var inst_22956 = (state_23010[(2)]);
var inst_22957 = cljs.core.not_empty.call(null,inst_22929);
var state_23010__$1 = (function (){var statearr_23053 = state_23010;
(statearr_23053[(29)] = inst_22956);

return statearr_23053;
})();
if(cljs.core.truth_(inst_22957)){
var statearr_23054_23126 = state_23010__$1;
(statearr_23054_23126[(1)] = (29));

} else {
var statearr_23055_23127 = state_23010__$1;
(statearr_23055_23127[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (25))){
var inst_22927 = (state_23010[(25)]);
var inst_22943 = (state_23010[(2)]);
var inst_22944 = cljs.core.not_empty.call(null,inst_22927);
var state_23010__$1 = (function (){var statearr_23056 = state_23010;
(statearr_23056[(30)] = inst_22943);

return statearr_23056;
})();
if(cljs.core.truth_(inst_22944)){
var statearr_23057_23128 = state_23010__$1;
(statearr_23057_23128[(1)] = (26));

} else {
var statearr_23058_23129 = state_23010__$1;
(statearr_23058_23129[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (34))){
var inst_22979 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
if(cljs.core.truth_(inst_22979)){
var statearr_23059_23130 = state_23010__$1;
(statearr_23059_23130[(1)] = (38));

} else {
var statearr_23060_23131 = state_23010__$1;
(statearr_23060_23131[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (17))){
var state_23010__$1 = state_23010;
var statearr_23061_23132 = state_23010__$1;
(statearr_23061_23132[(2)] = recompile_dependents);

(statearr_23061_23132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (3))){
var state_23010__$1 = state_23010;
var statearr_23062_23133 = state_23010__$1;
(statearr_23062_23133[(2)] = null);

(statearr_23062_23133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (12))){
var inst_22900 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
var statearr_23063_23134 = state_23010__$1;
(statearr_23063_23134[(2)] = inst_22900);

(statearr_23063_23134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (2))){
var inst_22862 = (state_23010[(13)]);
var inst_22869 = cljs.core.seq.call(null,inst_22862);
var inst_22870 = inst_22869;
var inst_22871 = null;
var inst_22872 = (0);
var inst_22873 = (0);
var state_23010__$1 = (function (){var statearr_23064 = state_23010;
(statearr_23064[(7)] = inst_22870);

(statearr_23064[(8)] = inst_22873);

(statearr_23064[(9)] = inst_22871);

(statearr_23064[(10)] = inst_22872);

return statearr_23064;
})();
var statearr_23065_23135 = state_23010__$1;
(statearr_23065_23135[(2)] = null);

(statearr_23065_23135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (23))){
var inst_22929 = (state_23010[(26)]);
var inst_22931 = (state_23010[(23)]);
var inst_22926 = (state_23010[(24)]);
var inst_22927 = (state_23010[(25)]);
var inst_22923 = (state_23010[(19)]);
var inst_22934 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22936 = (function (){var all_files = inst_22923;
var res_SINGLEQUOTE_ = inst_22926;
var res = inst_22927;
var files_not_loaded = inst_22929;
var dependencies_that_loaded = inst_22931;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22931,inst_22926,inst_22927,inst_22923,inst_22934,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22935){
var map__23066 = p__22935;
var map__23066__$1 = ((((!((map__23066 == null)))?((((map__23066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23066):map__23066);
var request_url = cljs.core.get.call(null,map__23066__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22931,inst_22926,inst_22927,inst_22923,inst_22934,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22937 = cljs.core.reverse.call(null,inst_22931);
var inst_22938 = cljs.core.map.call(null,inst_22936,inst_22937);
var inst_22939 = cljs.core.pr_str.call(null,inst_22938);
var inst_22940 = figwheel.client.utils.log.call(null,inst_22939);
var state_23010__$1 = (function (){var statearr_23068 = state_23010;
(statearr_23068[(31)] = inst_22934);

return statearr_23068;
})();
var statearr_23069_23136 = state_23010__$1;
(statearr_23069_23136[(2)] = inst_22940);

(statearr_23069_23136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (35))){
var state_23010__$1 = state_23010;
var statearr_23070_23137 = state_23010__$1;
(statearr_23070_23137[(2)] = true);

(statearr_23070_23137[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (19))){
var inst_22913 = (state_23010[(12)]);
var inst_22919 = figwheel.client.file_reloading.expand_files.call(null,inst_22913);
var state_23010__$1 = state_23010;
var statearr_23071_23138 = state_23010__$1;
(statearr_23071_23138[(2)] = inst_22919);

(statearr_23071_23138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (11))){
var state_23010__$1 = state_23010;
var statearr_23072_23139 = state_23010__$1;
(statearr_23072_23139[(2)] = null);

(statearr_23072_23139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (9))){
var inst_22902 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
var statearr_23073_23140 = state_23010__$1;
(statearr_23073_23140[(2)] = inst_22902);

(statearr_23073_23140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (5))){
var inst_22873 = (state_23010[(8)]);
var inst_22872 = (state_23010[(10)]);
var inst_22875 = (inst_22873 < inst_22872);
var inst_22876 = inst_22875;
var state_23010__$1 = state_23010;
if(cljs.core.truth_(inst_22876)){
var statearr_23074_23141 = state_23010__$1;
(statearr_23074_23141[(1)] = (7));

} else {
var statearr_23075_23142 = state_23010__$1;
(statearr_23075_23142[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (14))){
var inst_22883 = (state_23010[(22)]);
var inst_22892 = cljs.core.first.call(null,inst_22883);
var inst_22893 = figwheel.client.file_reloading.eval_body.call(null,inst_22892,opts);
var inst_22894 = cljs.core.next.call(null,inst_22883);
var inst_22870 = inst_22894;
var inst_22871 = null;
var inst_22872 = (0);
var inst_22873 = (0);
var state_23010__$1 = (function (){var statearr_23076 = state_23010;
(statearr_23076[(7)] = inst_22870);

(statearr_23076[(32)] = inst_22893);

(statearr_23076[(8)] = inst_22873);

(statearr_23076[(9)] = inst_22871);

(statearr_23076[(10)] = inst_22872);

return statearr_23076;
})();
var statearr_23077_23143 = state_23010__$1;
(statearr_23077_23143[(2)] = null);

(statearr_23077_23143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (45))){
var state_23010__$1 = state_23010;
var statearr_23078_23144 = state_23010__$1;
(statearr_23078_23144[(2)] = null);

(statearr_23078_23144[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (26))){
var inst_22929 = (state_23010[(26)]);
var inst_22931 = (state_23010[(23)]);
var inst_22926 = (state_23010[(24)]);
var inst_22927 = (state_23010[(25)]);
var inst_22923 = (state_23010[(19)]);
var inst_22946 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22948 = (function (){var all_files = inst_22923;
var res_SINGLEQUOTE_ = inst_22926;
var res = inst_22927;
var files_not_loaded = inst_22929;
var dependencies_that_loaded = inst_22931;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22931,inst_22926,inst_22927,inst_22923,inst_22946,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22947){
var map__23079 = p__22947;
var map__23079__$1 = ((((!((map__23079 == null)))?((((map__23079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23079):map__23079);
var namespace = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22931,inst_22926,inst_22927,inst_22923,inst_22946,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22949 = cljs.core.map.call(null,inst_22948,inst_22927);
var inst_22950 = cljs.core.pr_str.call(null,inst_22949);
var inst_22951 = figwheel.client.utils.log.call(null,inst_22950);
var inst_22952 = (function (){var all_files = inst_22923;
var res_SINGLEQUOTE_ = inst_22926;
var res = inst_22927;
var files_not_loaded = inst_22929;
var dependencies_that_loaded = inst_22931;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22931,inst_22926,inst_22927,inst_22923,inst_22946,inst_22948,inst_22949,inst_22950,inst_22951,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22931,inst_22926,inst_22927,inst_22923,inst_22946,inst_22948,inst_22949,inst_22950,inst_22951,state_val_23011,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22953 = setTimeout(inst_22952,(10));
var state_23010__$1 = (function (){var statearr_23081 = state_23010;
(statearr_23081[(33)] = inst_22951);

(statearr_23081[(34)] = inst_22946);

return statearr_23081;
})();
var statearr_23082_23145 = state_23010__$1;
(statearr_23082_23145[(2)] = inst_22953);

(statearr_23082_23145[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (16))){
var state_23010__$1 = state_23010;
var statearr_23083_23146 = state_23010__$1;
(statearr_23083_23146[(2)] = reload_dependents);

(statearr_23083_23146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (38))){
var inst_22963 = (state_23010[(16)]);
var inst_22981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22963);
var state_23010__$1 = state_23010;
var statearr_23084_23147 = state_23010__$1;
(statearr_23084_23147[(2)] = inst_22981);

(statearr_23084_23147[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (30))){
var state_23010__$1 = state_23010;
var statearr_23085_23148 = state_23010__$1;
(statearr_23085_23148[(2)] = null);

(statearr_23085_23148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (10))){
var inst_22883 = (state_23010[(22)]);
var inst_22885 = cljs.core.chunked_seq_QMARK_.call(null,inst_22883);
var state_23010__$1 = state_23010;
if(inst_22885){
var statearr_23086_23149 = state_23010__$1;
(statearr_23086_23149[(1)] = (13));

} else {
var statearr_23087_23150 = state_23010__$1;
(statearr_23087_23150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (18))){
var inst_22917 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
if(cljs.core.truth_(inst_22917)){
var statearr_23088_23151 = state_23010__$1;
(statearr_23088_23151[(1)] = (19));

} else {
var statearr_23089_23152 = state_23010__$1;
(statearr_23089_23152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (42))){
var state_23010__$1 = state_23010;
var statearr_23090_23153 = state_23010__$1;
(statearr_23090_23153[(2)] = null);

(statearr_23090_23153[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (37))){
var inst_22976 = (state_23010[(2)]);
var state_23010__$1 = state_23010;
var statearr_23091_23154 = state_23010__$1;
(statearr_23091_23154[(2)] = inst_22976);

(statearr_23091_23154[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23011 === (8))){
var inst_22870 = (state_23010[(7)]);
var inst_22883 = (state_23010[(22)]);
var inst_22883__$1 = cljs.core.seq.call(null,inst_22870);
var state_23010__$1 = (function (){var statearr_23092 = state_23010;
(statearr_23092[(22)] = inst_22883__$1);

return statearr_23092;
})();
if(inst_22883__$1){
var statearr_23093_23155 = state_23010__$1;
(statearr_23093_23155[(1)] = (10));

} else {
var statearr_23094_23156 = state_23010__$1;
(statearr_23094_23156[(1)] = (11));

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
});})(c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__15198__auto__,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____0 = (function (){
var statearr_23095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23095[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__);

(statearr_23095[(1)] = (1));

return statearr_23095;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____1 = (function (state_23010){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_23010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e23096){if((e23096 instanceof Object)){
var ex__15202__auto__ = e23096;
var statearr_23097_23157 = state_23010;
(statearr_23097_23157[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23158 = state_23010;
state_23010 = G__23158;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__ = function(state_23010){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____1.call(this,state_23010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__15290__auto__ = (function (){var statearr_23098 = f__15289__auto__.call(null);
(statearr_23098[(6)] = c__15288__auto__);

return statearr_23098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__,map__22855,map__22855__$1,opts,before_jsload,on_jsload,reload_dependents,map__22856,map__22856__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__15288__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23161,link){
var map__23162 = p__23161;
var map__23162__$1 = ((((!((map__23162 == null)))?((((map__23162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23162):map__23162);
var file = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__23162,map__23162__$1,file){
return (function (p1__23159_SHARP_,p2__23160_SHARP_){
if(cljs.core._EQ_.call(null,p1__23159_SHARP_,p2__23160_SHARP_)){
return p1__23159_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__23162,map__23162__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23165){
var map__23166 = p__23165;
var map__23166__$1 = ((((!((map__23166 == null)))?((((map__23166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23166):map__23166);
var match_length = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23164_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23164_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23168_SHARP_,p2__23169_SHARP_){
return cljs.core.assoc.call(null,p1__23168_SHARP_,cljs.core.get.call(null,p2__23169_SHARP_,key),p2__23169_SHARP_);
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
var loaded_f_datas_23170 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_23170);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_23170);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23171,p__23172){
var map__23173 = p__23171;
var map__23173__$1 = ((((!((map__23173 == null)))?((((map__23173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23173):map__23173);
var on_cssload = cljs.core.get.call(null,map__23173__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__23174 = p__23172;
var map__23174__$1 = ((((!((map__23174 == null)))?((((map__23174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23174):map__23174);
var files_msg = map__23174__$1;
var files = cljs.core.get.call(null,map__23174__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1505990291446
