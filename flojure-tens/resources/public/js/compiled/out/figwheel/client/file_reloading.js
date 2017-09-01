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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__19978_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__19978_SHARP_));
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
var seq__19979 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__19980 = null;
var count__19981 = (0);
var i__19982 = (0);
while(true){
if((i__19982 < count__19981)){
var n = cljs.core._nth.call(null,chunk__19980,i__19982);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__19983 = seq__19979;
var G__19984 = chunk__19980;
var G__19985 = count__19981;
var G__19986 = (i__19982 + (1));
seq__19979 = G__19983;
chunk__19980 = G__19984;
count__19981 = G__19985;
i__19982 = G__19986;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__19979);
if(temp__6738__auto__){
var seq__19979__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19979__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__19979__$1);
var G__19987 = cljs.core.chunk_rest.call(null,seq__19979__$1);
var G__19988 = c__10741__auto__;
var G__19989 = cljs.core.count.call(null,c__10741__auto__);
var G__19990 = (0);
seq__19979 = G__19987;
chunk__19980 = G__19988;
count__19981 = G__19989;
i__19982 = G__19990;
continue;
} else {
var n = cljs.core.first.call(null,seq__19979__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__19991 = cljs.core.next.call(null,seq__19979__$1);
var G__19992 = null;
var G__19993 = (0);
var G__19994 = (0);
seq__19979 = G__19991;
chunk__19980 = G__19992;
count__19981 = G__19993;
i__19982 = G__19994;
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

var seq__20004_20012 = cljs.core.seq.call(null,deps);
var chunk__20005_20013 = null;
var count__20006_20014 = (0);
var i__20007_20015 = (0);
while(true){
if((i__20007_20015 < count__20006_20014)){
var dep_20016 = cljs.core._nth.call(null,chunk__20005_20013,i__20007_20015);
topo_sort_helper_STAR_.call(null,dep_20016,(depth + (1)),state);

var G__20017 = seq__20004_20012;
var G__20018 = chunk__20005_20013;
var G__20019 = count__20006_20014;
var G__20020 = (i__20007_20015 + (1));
seq__20004_20012 = G__20017;
chunk__20005_20013 = G__20018;
count__20006_20014 = G__20019;
i__20007_20015 = G__20020;
continue;
} else {
var temp__6738__auto___20021 = cljs.core.seq.call(null,seq__20004_20012);
if(temp__6738__auto___20021){
var seq__20004_20022__$1 = temp__6738__auto___20021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20004_20022__$1)){
var c__10741__auto___20023 = cljs.core.chunk_first.call(null,seq__20004_20022__$1);
var G__20024 = cljs.core.chunk_rest.call(null,seq__20004_20022__$1);
var G__20025 = c__10741__auto___20023;
var G__20026 = cljs.core.count.call(null,c__10741__auto___20023);
var G__20027 = (0);
seq__20004_20012 = G__20024;
chunk__20005_20013 = G__20025;
count__20006_20014 = G__20026;
i__20007_20015 = G__20027;
continue;
} else {
var dep_20028 = cljs.core.first.call(null,seq__20004_20022__$1);
topo_sort_helper_STAR_.call(null,dep_20028,(depth + (1)),state);

var G__20029 = cljs.core.next.call(null,seq__20004_20022__$1);
var G__20030 = null;
var G__20031 = (0);
var G__20032 = (0);
seq__20004_20012 = G__20029;
chunk__20005_20013 = G__20030;
count__20006_20014 = G__20031;
i__20007_20015 = G__20032;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20008){
var vec__20009 = p__20008;
var seq__20010 = cljs.core.seq.call(null,vec__20009);
var first__20011 = cljs.core.first.call(null,seq__20010);
var seq__20010__$1 = cljs.core.next.call(null,seq__20010);
var x = first__20011;
var xs = seq__20010__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__20009,seq__20010,first__20011,seq__20010__$1,x,xs,get_deps__$1){
return (function (p1__19995_SHARP_){
return clojure.set.difference.call(null,p1__19995_SHARP_,x);
});})(vec__20009,seq__20010,first__20011,seq__20010__$1,x,xs,get_deps__$1))
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
var seq__20033 = cljs.core.seq.call(null,provides);
var chunk__20034 = null;
var count__20035 = (0);
var i__20036 = (0);
while(true){
if((i__20036 < count__20035)){
var prov = cljs.core._nth.call(null,chunk__20034,i__20036);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20037_20045 = cljs.core.seq.call(null,requires);
var chunk__20038_20046 = null;
var count__20039_20047 = (0);
var i__20040_20048 = (0);
while(true){
if((i__20040_20048 < count__20039_20047)){
var req_20049 = cljs.core._nth.call(null,chunk__20038_20046,i__20040_20048);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20049,prov);

var G__20050 = seq__20037_20045;
var G__20051 = chunk__20038_20046;
var G__20052 = count__20039_20047;
var G__20053 = (i__20040_20048 + (1));
seq__20037_20045 = G__20050;
chunk__20038_20046 = G__20051;
count__20039_20047 = G__20052;
i__20040_20048 = G__20053;
continue;
} else {
var temp__6738__auto___20054 = cljs.core.seq.call(null,seq__20037_20045);
if(temp__6738__auto___20054){
var seq__20037_20055__$1 = temp__6738__auto___20054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20037_20055__$1)){
var c__10741__auto___20056 = cljs.core.chunk_first.call(null,seq__20037_20055__$1);
var G__20057 = cljs.core.chunk_rest.call(null,seq__20037_20055__$1);
var G__20058 = c__10741__auto___20056;
var G__20059 = cljs.core.count.call(null,c__10741__auto___20056);
var G__20060 = (0);
seq__20037_20045 = G__20057;
chunk__20038_20046 = G__20058;
count__20039_20047 = G__20059;
i__20040_20048 = G__20060;
continue;
} else {
var req_20061 = cljs.core.first.call(null,seq__20037_20055__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20061,prov);

var G__20062 = cljs.core.next.call(null,seq__20037_20055__$1);
var G__20063 = null;
var G__20064 = (0);
var G__20065 = (0);
seq__20037_20045 = G__20062;
chunk__20038_20046 = G__20063;
count__20039_20047 = G__20064;
i__20040_20048 = G__20065;
continue;
}
} else {
}
}
break;
}

var G__20066 = seq__20033;
var G__20067 = chunk__20034;
var G__20068 = count__20035;
var G__20069 = (i__20036 + (1));
seq__20033 = G__20066;
chunk__20034 = G__20067;
count__20035 = G__20068;
i__20036 = G__20069;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__20033);
if(temp__6738__auto__){
var seq__20033__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20033__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__20033__$1);
var G__20070 = cljs.core.chunk_rest.call(null,seq__20033__$1);
var G__20071 = c__10741__auto__;
var G__20072 = cljs.core.count.call(null,c__10741__auto__);
var G__20073 = (0);
seq__20033 = G__20070;
chunk__20034 = G__20071;
count__20035 = G__20072;
i__20036 = G__20073;
continue;
} else {
var prov = cljs.core.first.call(null,seq__20033__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20041_20074 = cljs.core.seq.call(null,requires);
var chunk__20042_20075 = null;
var count__20043_20076 = (0);
var i__20044_20077 = (0);
while(true){
if((i__20044_20077 < count__20043_20076)){
var req_20078 = cljs.core._nth.call(null,chunk__20042_20075,i__20044_20077);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20078,prov);

var G__20079 = seq__20041_20074;
var G__20080 = chunk__20042_20075;
var G__20081 = count__20043_20076;
var G__20082 = (i__20044_20077 + (1));
seq__20041_20074 = G__20079;
chunk__20042_20075 = G__20080;
count__20043_20076 = G__20081;
i__20044_20077 = G__20082;
continue;
} else {
var temp__6738__auto___20083__$1 = cljs.core.seq.call(null,seq__20041_20074);
if(temp__6738__auto___20083__$1){
var seq__20041_20084__$1 = temp__6738__auto___20083__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20041_20084__$1)){
var c__10741__auto___20085 = cljs.core.chunk_first.call(null,seq__20041_20084__$1);
var G__20086 = cljs.core.chunk_rest.call(null,seq__20041_20084__$1);
var G__20087 = c__10741__auto___20085;
var G__20088 = cljs.core.count.call(null,c__10741__auto___20085);
var G__20089 = (0);
seq__20041_20074 = G__20086;
chunk__20042_20075 = G__20087;
count__20043_20076 = G__20088;
i__20044_20077 = G__20089;
continue;
} else {
var req_20090 = cljs.core.first.call(null,seq__20041_20084__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20090,prov);

var G__20091 = cljs.core.next.call(null,seq__20041_20084__$1);
var G__20092 = null;
var G__20093 = (0);
var G__20094 = (0);
seq__20041_20074 = G__20091;
chunk__20042_20075 = G__20092;
count__20043_20076 = G__20093;
i__20044_20077 = G__20094;
continue;
}
} else {
}
}
break;
}

var G__20095 = cljs.core.next.call(null,seq__20033__$1);
var G__20096 = null;
var G__20097 = (0);
var G__20098 = (0);
seq__20033 = G__20095;
chunk__20034 = G__20096;
count__20035 = G__20097;
i__20036 = G__20098;
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
var seq__20099_20103 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__20100_20104 = null;
var count__20101_20105 = (0);
var i__20102_20106 = (0);
while(true){
if((i__20102_20106 < count__20101_20105)){
var ns_20107 = cljs.core._nth.call(null,chunk__20100_20104,i__20102_20106);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20107);

var G__20108 = seq__20099_20103;
var G__20109 = chunk__20100_20104;
var G__20110 = count__20101_20105;
var G__20111 = (i__20102_20106 + (1));
seq__20099_20103 = G__20108;
chunk__20100_20104 = G__20109;
count__20101_20105 = G__20110;
i__20102_20106 = G__20111;
continue;
} else {
var temp__6738__auto___20112 = cljs.core.seq.call(null,seq__20099_20103);
if(temp__6738__auto___20112){
var seq__20099_20113__$1 = temp__6738__auto___20112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20099_20113__$1)){
var c__10741__auto___20114 = cljs.core.chunk_first.call(null,seq__20099_20113__$1);
var G__20115 = cljs.core.chunk_rest.call(null,seq__20099_20113__$1);
var G__20116 = c__10741__auto___20114;
var G__20117 = cljs.core.count.call(null,c__10741__auto___20114);
var G__20118 = (0);
seq__20099_20103 = G__20115;
chunk__20100_20104 = G__20116;
count__20101_20105 = G__20117;
i__20102_20106 = G__20118;
continue;
} else {
var ns_20119 = cljs.core.first.call(null,seq__20099_20113__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20119);

var G__20120 = cljs.core.next.call(null,seq__20099_20113__$1);
var G__20121 = null;
var G__20122 = (0);
var G__20123 = (0);
seq__20099_20103 = G__20120;
chunk__20100_20104 = G__20121;
count__20101_20105 = G__20122;
i__20102_20106 = G__20123;
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
var G__20124__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__20124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20125__i = 0, G__20125__a = new Array(arguments.length -  0);
while (G__20125__i < G__20125__a.length) {G__20125__a[G__20125__i] = arguments[G__20125__i + 0]; ++G__20125__i;}
  args = new cljs.core.IndexedSeq(G__20125__a,0,null);
} 
return G__20124__delegate.call(this,args);};
G__20124.cljs$lang$maxFixedArity = 0;
G__20124.cljs$lang$applyTo = (function (arglist__20126){
var args = cljs.core.seq(arglist__20126);
return G__20124__delegate(args);
});
G__20124.cljs$core$IFn$_invoke$arity$variadic = G__20124__delegate;
return G__20124;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__20127_SHARP_,p2__20128_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20127_SHARP_)].join('')),p2__20128_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__20129_SHARP_,p2__20130_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20129_SHARP_)].join(''),p2__20130_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__20131 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__20131.addCallback(((function (G__20131){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__20131))
);

G__20131.addErrback(((function (G__20131){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__20131))
);

return G__20131;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20132 = cljs.core._EQ_;
var expr__20133 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__20132.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__20133))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__20132,expr__20133){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__20132,expr__20133))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__20132,expr__20133){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e20135){if((e20135 instanceof Error)){
var e = e20135;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20135;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__20132,expr__20133))
} else {
if(cljs.core.truth_(pred__20132.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__20133))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__20132.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__20133))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__20132.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__20133))){
return ((function (pred__20132,expr__20133){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e20136){if((e20136 instanceof Error)){
var e = e20136;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20136;

}
}})());
});
;})(pred__20132,expr__20133))
} else {
return ((function (pred__20132,expr__20133){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20132,expr__20133))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20137,callback){
var map__20138 = p__20137;
var map__20138__$1 = ((((!((map__20138 == null)))?((((map__20138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20138):map__20138);
var file_msg = map__20138__$1;
var request_url = cljs.core.get.call(null,map__20138__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20138,map__20138__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20138,map__20138__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__){
return (function (state_20162){
var state_val_20163 = (state_20162[(1)]);
if((state_val_20163 === (7))){
var inst_20158 = (state_20162[(2)]);
var state_20162__$1 = state_20162;
var statearr_20164_20181 = state_20162__$1;
(statearr_20164_20181[(2)] = inst_20158);

(statearr_20164_20181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20163 === (1))){
var state_20162__$1 = state_20162;
var statearr_20165_20182 = state_20162__$1;
(statearr_20165_20182[(2)] = null);

(statearr_20165_20182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20163 === (4))){
var inst_20142 = (state_20162[(7)]);
var inst_20142__$1 = (state_20162[(2)]);
var state_20162__$1 = (function (){var statearr_20166 = state_20162;
(statearr_20166[(7)] = inst_20142__$1);

return statearr_20166;
})();
if(cljs.core.truth_(inst_20142__$1)){
var statearr_20167_20183 = state_20162__$1;
(statearr_20167_20183[(1)] = (5));

} else {
var statearr_20168_20184 = state_20162__$1;
(statearr_20168_20184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20163 === (6))){
var state_20162__$1 = state_20162;
var statearr_20169_20185 = state_20162__$1;
(statearr_20169_20185[(2)] = null);

(statearr_20169_20185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20163 === (3))){
var inst_20160 = (state_20162[(2)]);
var state_20162__$1 = state_20162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20162__$1,inst_20160);
} else {
if((state_val_20163 === (2))){
var state_20162__$1 = state_20162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20162__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20163 === (11))){
var inst_20154 = (state_20162[(2)]);
var state_20162__$1 = (function (){var statearr_20170 = state_20162;
(statearr_20170[(8)] = inst_20154);

return statearr_20170;
})();
var statearr_20171_20186 = state_20162__$1;
(statearr_20171_20186[(2)] = null);

(statearr_20171_20186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20163 === (9))){
var inst_20146 = (state_20162[(9)]);
var inst_20148 = (state_20162[(10)]);
var inst_20150 = inst_20148.call(null,inst_20146);
var state_20162__$1 = state_20162;
var statearr_20172_20187 = state_20162__$1;
(statearr_20172_20187[(2)] = inst_20150);

(statearr_20172_20187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20163 === (5))){
var inst_20142 = (state_20162[(7)]);
var inst_20144 = figwheel.client.file_reloading.blocking_load.call(null,inst_20142);
var state_20162__$1 = state_20162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20162__$1,(8),inst_20144);
} else {
if((state_val_20163 === (10))){
var inst_20146 = (state_20162[(9)]);
var inst_20152 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20146);
var state_20162__$1 = state_20162;
var statearr_20173_20188 = state_20162__$1;
(statearr_20173_20188[(2)] = inst_20152);

(statearr_20173_20188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20163 === (8))){
var inst_20148 = (state_20162[(10)]);
var inst_20142 = (state_20162[(7)]);
var inst_20146 = (state_20162[(2)]);
var inst_20147 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_20148__$1 = cljs.core.get.call(null,inst_20147,inst_20142);
var state_20162__$1 = (function (){var statearr_20174 = state_20162;
(statearr_20174[(9)] = inst_20146);

(statearr_20174[(10)] = inst_20148__$1);

return statearr_20174;
})();
if(cljs.core.truth_(inst_20148__$1)){
var statearr_20175_20189 = state_20162__$1;
(statearr_20175_20189[(1)] = (9));

} else {
var statearr_20176_20190 = state_20162__$1;
(statearr_20176_20190[(1)] = (10));

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
});})(c__17644__auto__))
;
return ((function (switch__17554__auto__,c__17644__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__17555__auto__ = null;
var figwheel$client$file_reloading$state_machine__17555__auto____0 = (function (){
var statearr_20177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20177[(0)] = figwheel$client$file_reloading$state_machine__17555__auto__);

(statearr_20177[(1)] = (1));

return statearr_20177;
});
var figwheel$client$file_reloading$state_machine__17555__auto____1 = (function (state_20162){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_20162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e20178){if((e20178 instanceof Object)){
var ex__17558__auto__ = e20178;
var statearr_20179_20191 = state_20162;
(statearr_20179_20191[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20192 = state_20162;
state_20162 = G__20192;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__17555__auto__ = function(state_20162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__17555__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__17555__auto____1.call(this,state_20162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__17555__auto____0;
figwheel$client$file_reloading$state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__17555__auto____1;
return figwheel$client$file_reloading$state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__))
})();
var state__17646__auto__ = (function (){var statearr_20180 = f__17645__auto__.call(null);
(statearr_20180[(6)] = c__17644__auto__);

return statearr_20180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__))
);

return c__17644__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20193,callback){
var map__20194 = p__20193;
var map__20194__$1 = ((((!((map__20194 == null)))?((((map__20194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20194):map__20194);
var file_msg = map__20194__$1;
var namespace = cljs.core.get.call(null,map__20194__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20194,map__20194__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__20194,map__20194__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__20196){
var map__20197 = p__20196;
var map__20197__$1 = ((((!((map__20197 == null)))?((((map__20197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20197):map__20197);
var file_msg = map__20197__$1;
var namespace = cljs.core.get.call(null,map__20197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20199){
var map__20200 = p__20199;
var map__20200__$1 = ((((!((map__20200 == null)))?((((map__20200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20200):map__20200);
var file_msg = map__20200__$1;
var namespace = cljs.core.get.call(null,map__20200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20202,callback){
var map__20203 = p__20202;
var map__20203__$1 = ((((!((map__20203 == null)))?((((map__20203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20203):map__20203);
var file_msg = map__20203__$1;
var request_url = cljs.core.get.call(null,map__20203__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__20203__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__17644__auto___20253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto___20253,out){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto___20253,out){
return (function (state_20238){
var state_val_20239 = (state_20238[(1)]);
if((state_val_20239 === (1))){
var inst_20212 = cljs.core.seq.call(null,files);
var inst_20213 = cljs.core.first.call(null,inst_20212);
var inst_20214 = cljs.core.next.call(null,inst_20212);
var inst_20215 = files;
var state_20238__$1 = (function (){var statearr_20240 = state_20238;
(statearr_20240[(7)] = inst_20215);

(statearr_20240[(8)] = inst_20213);

(statearr_20240[(9)] = inst_20214);

return statearr_20240;
})();
var statearr_20241_20254 = state_20238__$1;
(statearr_20241_20254[(2)] = null);

(statearr_20241_20254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20239 === (2))){
var inst_20221 = (state_20238[(10)]);
var inst_20215 = (state_20238[(7)]);
var inst_20220 = cljs.core.seq.call(null,inst_20215);
var inst_20221__$1 = cljs.core.first.call(null,inst_20220);
var inst_20222 = cljs.core.next.call(null,inst_20220);
var inst_20223 = (inst_20221__$1 == null);
var inst_20224 = cljs.core.not.call(null,inst_20223);
var state_20238__$1 = (function (){var statearr_20242 = state_20238;
(statearr_20242[(10)] = inst_20221__$1);

(statearr_20242[(11)] = inst_20222);

return statearr_20242;
})();
if(inst_20224){
var statearr_20243_20255 = state_20238__$1;
(statearr_20243_20255[(1)] = (4));

} else {
var statearr_20244_20256 = state_20238__$1;
(statearr_20244_20256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20239 === (3))){
var inst_20236 = (state_20238[(2)]);
var state_20238__$1 = state_20238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20238__$1,inst_20236);
} else {
if((state_val_20239 === (4))){
var inst_20221 = (state_20238[(10)]);
var inst_20226 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20221);
var state_20238__$1 = state_20238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20238__$1,(7),inst_20226);
} else {
if((state_val_20239 === (5))){
var inst_20232 = cljs.core.async.close_BANG_.call(null,out);
var state_20238__$1 = state_20238;
var statearr_20245_20257 = state_20238__$1;
(statearr_20245_20257[(2)] = inst_20232);

(statearr_20245_20257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20239 === (6))){
var inst_20234 = (state_20238[(2)]);
var state_20238__$1 = state_20238;
var statearr_20246_20258 = state_20238__$1;
(statearr_20246_20258[(2)] = inst_20234);

(statearr_20246_20258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20239 === (7))){
var inst_20222 = (state_20238[(11)]);
var inst_20228 = (state_20238[(2)]);
var inst_20229 = cljs.core.async.put_BANG_.call(null,out,inst_20228);
var inst_20215 = inst_20222;
var state_20238__$1 = (function (){var statearr_20247 = state_20238;
(statearr_20247[(7)] = inst_20215);

(statearr_20247[(12)] = inst_20229);

return statearr_20247;
})();
var statearr_20248_20259 = state_20238__$1;
(statearr_20248_20259[(2)] = null);

(statearr_20248_20259[(1)] = (2));


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
});})(c__17644__auto___20253,out))
;
return ((function (switch__17554__auto__,c__17644__auto___20253,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto____0 = (function (){
var statearr_20249 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20249[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto__);

(statearr_20249[(1)] = (1));

return statearr_20249;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto____1 = (function (state_20238){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_20238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e20250){if((e20250 instanceof Object)){
var ex__17558__auto__ = e20250;
var statearr_20251_20260 = state_20238;
(statearr_20251_20260[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20261 = state_20238;
state_20238 = G__20261;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto__ = function(state_20238){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto____1.call(this,state_20238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto___20253,out))
})();
var state__17646__auto__ = (function (){var statearr_20252 = f__17645__auto__.call(null);
(statearr_20252[(6)] = c__17644__auto___20253);

return statearr_20252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto___20253,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20262,opts){
var map__20263 = p__20262;
var map__20263__$1 = ((((!((map__20263 == null)))?((((map__20263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20263):map__20263);
var eval_body = cljs.core.get.call(null,map__20263__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__20263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e20265){var e = e20265;
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
return (function (p1__20266_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20266_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__20267){
var vec__20268 = p__20267;
var k = cljs.core.nth.call(null,vec__20268,(0),null);
var v = cljs.core.nth.call(null,vec__20268,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__20271){
var vec__20272 = p__20271;
var k = cljs.core.nth.call(null,vec__20272,(0),null);
var v = cljs.core.nth.call(null,vec__20272,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__20278,p__20279){
var map__20280 = p__20278;
var map__20280__$1 = ((((!((map__20280 == null)))?((((map__20280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20280):map__20280);
var opts = map__20280__$1;
var before_jsload = cljs.core.get.call(null,map__20280__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__20280__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__20280__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__20281 = p__20279;
var map__20281__$1 = ((((!((map__20281 == null)))?((((map__20281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20281):map__20281);
var msg = map__20281__$1;
var files = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__17644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__17645__auto__ = (function (){var switch__17554__auto__ = ((function (c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_20435){
var state_val_20436 = (state_20435[(1)]);
if((state_val_20436 === (7))){
var inst_20295 = (state_20435[(7)]);
var inst_20297 = (state_20435[(8)]);
var inst_20296 = (state_20435[(9)]);
var inst_20298 = (state_20435[(10)]);
var inst_20303 = cljs.core._nth.call(null,inst_20296,inst_20298);
var inst_20304 = figwheel.client.file_reloading.eval_body.call(null,inst_20303,opts);
var inst_20305 = (inst_20298 + (1));
var tmp20437 = inst_20295;
var tmp20438 = inst_20297;
var tmp20439 = inst_20296;
var inst_20295__$1 = tmp20437;
var inst_20296__$1 = tmp20439;
var inst_20297__$1 = tmp20438;
var inst_20298__$1 = inst_20305;
var state_20435__$1 = (function (){var statearr_20440 = state_20435;
(statearr_20440[(7)] = inst_20295__$1);

(statearr_20440[(8)] = inst_20297__$1);

(statearr_20440[(9)] = inst_20296__$1);

(statearr_20440[(11)] = inst_20304);

(statearr_20440[(10)] = inst_20298__$1);

return statearr_20440;
})();
var statearr_20441_20524 = state_20435__$1;
(statearr_20441_20524[(2)] = null);

(statearr_20441_20524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (20))){
var inst_20338 = (state_20435[(12)]);
var inst_20346 = figwheel.client.file_reloading.sort_files.call(null,inst_20338);
var state_20435__$1 = state_20435;
var statearr_20442_20525 = state_20435__$1;
(statearr_20442_20525[(2)] = inst_20346);

(statearr_20442_20525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (27))){
var state_20435__$1 = state_20435;
var statearr_20443_20526 = state_20435__$1;
(statearr_20443_20526[(2)] = null);

(statearr_20443_20526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (1))){
var inst_20287 = (state_20435[(13)]);
var inst_20284 = before_jsload.call(null,files);
var inst_20285 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_20286 = (function (){return ((function (inst_20287,inst_20284,inst_20285,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20275_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20275_SHARP_);
});
;})(inst_20287,inst_20284,inst_20285,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20287__$1 = cljs.core.filter.call(null,inst_20286,files);
var inst_20288 = cljs.core.not_empty.call(null,inst_20287__$1);
var state_20435__$1 = (function (){var statearr_20444 = state_20435;
(statearr_20444[(14)] = inst_20285);

(statearr_20444[(15)] = inst_20284);

(statearr_20444[(13)] = inst_20287__$1);

return statearr_20444;
})();
if(cljs.core.truth_(inst_20288)){
var statearr_20445_20527 = state_20435__$1;
(statearr_20445_20527[(1)] = (2));

} else {
var statearr_20446_20528 = state_20435__$1;
(statearr_20446_20528[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (24))){
var state_20435__$1 = state_20435;
var statearr_20447_20529 = state_20435__$1;
(statearr_20447_20529[(2)] = null);

(statearr_20447_20529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (39))){
var inst_20388 = (state_20435[(16)]);
var state_20435__$1 = state_20435;
var statearr_20448_20530 = state_20435__$1;
(statearr_20448_20530[(2)] = inst_20388);

(statearr_20448_20530[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (46))){
var inst_20430 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20449_20531 = state_20435__$1;
(statearr_20449_20531[(2)] = inst_20430);

(statearr_20449_20531[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (4))){
var inst_20332 = (state_20435[(2)]);
var inst_20333 = cljs.core.List.EMPTY;
var inst_20334 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_20333);
var inst_20335 = (function (){return ((function (inst_20332,inst_20333,inst_20334,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20276_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20276_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20276_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__20276_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_20332,inst_20333,inst_20334,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20336 = cljs.core.filter.call(null,inst_20335,files);
var inst_20337 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_20338 = cljs.core.concat.call(null,inst_20336,inst_20337);
var state_20435__$1 = (function (){var statearr_20450 = state_20435;
(statearr_20450[(12)] = inst_20338);

(statearr_20450[(17)] = inst_20334);

(statearr_20450[(18)] = inst_20332);

return statearr_20450;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_20451_20532 = state_20435__$1;
(statearr_20451_20532[(1)] = (16));

} else {
var statearr_20452_20533 = state_20435__$1;
(statearr_20452_20533[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (15))){
var inst_20322 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20453_20534 = state_20435__$1;
(statearr_20453_20534[(2)] = inst_20322);

(statearr_20453_20534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (21))){
var inst_20348 = (state_20435[(19)]);
var inst_20348__$1 = (state_20435[(2)]);
var inst_20349 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_20348__$1);
var state_20435__$1 = (function (){var statearr_20454 = state_20435;
(statearr_20454[(19)] = inst_20348__$1);

return statearr_20454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20435__$1,(22),inst_20349);
} else {
if((state_val_20436 === (31))){
var inst_20433 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20435__$1,inst_20433);
} else {
if((state_val_20436 === (32))){
var inst_20388 = (state_20435[(16)]);
var inst_20393 = inst_20388.cljs$lang$protocol_mask$partition0$;
var inst_20394 = (inst_20393 & (64));
var inst_20395 = inst_20388.cljs$core$ISeq$;
var inst_20396 = (cljs.core.PROTOCOL_SENTINEL === inst_20395);
var inst_20397 = (inst_20394) || (inst_20396);
var state_20435__$1 = state_20435;
if(cljs.core.truth_(inst_20397)){
var statearr_20455_20535 = state_20435__$1;
(statearr_20455_20535[(1)] = (35));

} else {
var statearr_20456_20536 = state_20435__$1;
(statearr_20456_20536[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (40))){
var inst_20410 = (state_20435[(20)]);
var inst_20409 = (state_20435[(2)]);
var inst_20410__$1 = cljs.core.get.call(null,inst_20409,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_20411 = cljs.core.get.call(null,inst_20409,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_20412 = cljs.core.not_empty.call(null,inst_20410__$1);
var state_20435__$1 = (function (){var statearr_20457 = state_20435;
(statearr_20457[(20)] = inst_20410__$1);

(statearr_20457[(21)] = inst_20411);

return statearr_20457;
})();
if(cljs.core.truth_(inst_20412)){
var statearr_20458_20537 = state_20435__$1;
(statearr_20458_20537[(1)] = (41));

} else {
var statearr_20459_20538 = state_20435__$1;
(statearr_20459_20538[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (33))){
var state_20435__$1 = state_20435;
var statearr_20460_20539 = state_20435__$1;
(statearr_20460_20539[(2)] = false);

(statearr_20460_20539[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (13))){
var inst_20308 = (state_20435[(22)]);
var inst_20312 = cljs.core.chunk_first.call(null,inst_20308);
var inst_20313 = cljs.core.chunk_rest.call(null,inst_20308);
var inst_20314 = cljs.core.count.call(null,inst_20312);
var inst_20295 = inst_20313;
var inst_20296 = inst_20312;
var inst_20297 = inst_20314;
var inst_20298 = (0);
var state_20435__$1 = (function (){var statearr_20461 = state_20435;
(statearr_20461[(7)] = inst_20295);

(statearr_20461[(8)] = inst_20297);

(statearr_20461[(9)] = inst_20296);

(statearr_20461[(10)] = inst_20298);

return statearr_20461;
})();
var statearr_20462_20540 = state_20435__$1;
(statearr_20462_20540[(2)] = null);

(statearr_20462_20540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (22))){
var inst_20348 = (state_20435[(19)]);
var inst_20351 = (state_20435[(23)]);
var inst_20352 = (state_20435[(24)]);
var inst_20356 = (state_20435[(25)]);
var inst_20351__$1 = (state_20435[(2)]);
var inst_20352__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20351__$1);
var inst_20353 = (function (){var all_files = inst_20348;
var res_SINGLEQUOTE_ = inst_20351__$1;
var res = inst_20352__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_20348,inst_20351,inst_20352,inst_20356,inst_20351__$1,inst_20352__$1,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20277_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__20277_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_20348,inst_20351,inst_20352,inst_20356,inst_20351__$1,inst_20352__$1,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20354 = cljs.core.filter.call(null,inst_20353,inst_20351__$1);
var inst_20355 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_20356__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20355);
var inst_20357 = cljs.core.not_empty.call(null,inst_20356__$1);
var state_20435__$1 = (function (){var statearr_20463 = state_20435;
(statearr_20463[(26)] = inst_20354);

(statearr_20463[(23)] = inst_20351__$1);

(statearr_20463[(24)] = inst_20352__$1);

(statearr_20463[(25)] = inst_20356__$1);

return statearr_20463;
})();
if(cljs.core.truth_(inst_20357)){
var statearr_20464_20541 = state_20435__$1;
(statearr_20464_20541[(1)] = (23));

} else {
var statearr_20465_20542 = state_20435__$1;
(statearr_20465_20542[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (36))){
var state_20435__$1 = state_20435;
var statearr_20466_20543 = state_20435__$1;
(statearr_20466_20543[(2)] = false);

(statearr_20466_20543[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (41))){
var inst_20410 = (state_20435[(20)]);
var inst_20414 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_20415 = cljs.core.map.call(null,inst_20414,inst_20410);
var inst_20416 = cljs.core.pr_str.call(null,inst_20415);
var inst_20417 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20416)].join('');
var inst_20418 = figwheel.client.utils.log.call(null,inst_20417);
var state_20435__$1 = state_20435;
var statearr_20467_20544 = state_20435__$1;
(statearr_20467_20544[(2)] = inst_20418);

(statearr_20467_20544[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (43))){
var inst_20411 = (state_20435[(21)]);
var inst_20421 = (state_20435[(2)]);
var inst_20422 = cljs.core.not_empty.call(null,inst_20411);
var state_20435__$1 = (function (){var statearr_20468 = state_20435;
(statearr_20468[(27)] = inst_20421);

return statearr_20468;
})();
if(cljs.core.truth_(inst_20422)){
var statearr_20469_20545 = state_20435__$1;
(statearr_20469_20545[(1)] = (44));

} else {
var statearr_20470_20546 = state_20435__$1;
(statearr_20470_20546[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (29))){
var inst_20348 = (state_20435[(19)]);
var inst_20354 = (state_20435[(26)]);
var inst_20351 = (state_20435[(23)]);
var inst_20352 = (state_20435[(24)]);
var inst_20388 = (state_20435[(16)]);
var inst_20356 = (state_20435[(25)]);
var inst_20384 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_20387 = (function (){var all_files = inst_20348;
var res_SINGLEQUOTE_ = inst_20351;
var res = inst_20352;
var files_not_loaded = inst_20354;
var dependencies_that_loaded = inst_20356;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20348,inst_20354,inst_20351,inst_20352,inst_20388,inst_20356,inst_20384,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20386){
var map__20471 = p__20386;
var map__20471__$1 = ((((!((map__20471 == null)))?((((map__20471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20471):map__20471);
var namespace = cljs.core.get.call(null,map__20471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20348,inst_20354,inst_20351,inst_20352,inst_20388,inst_20356,inst_20384,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20388__$1 = cljs.core.group_by.call(null,inst_20387,inst_20354);
var inst_20390 = (inst_20388__$1 == null);
var inst_20391 = cljs.core.not.call(null,inst_20390);
var state_20435__$1 = (function (){var statearr_20473 = state_20435;
(statearr_20473[(16)] = inst_20388__$1);

(statearr_20473[(28)] = inst_20384);

return statearr_20473;
})();
if(inst_20391){
var statearr_20474_20547 = state_20435__$1;
(statearr_20474_20547[(1)] = (32));

} else {
var statearr_20475_20548 = state_20435__$1;
(statearr_20475_20548[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (44))){
var inst_20411 = (state_20435[(21)]);
var inst_20424 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20411);
var inst_20425 = cljs.core.pr_str.call(null,inst_20424);
var inst_20426 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20425)].join('');
var inst_20427 = figwheel.client.utils.log.call(null,inst_20426);
var state_20435__$1 = state_20435;
var statearr_20476_20549 = state_20435__$1;
(statearr_20476_20549[(2)] = inst_20427);

(statearr_20476_20549[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (6))){
var inst_20329 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20477_20550 = state_20435__$1;
(statearr_20477_20550[(2)] = inst_20329);

(statearr_20477_20550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (28))){
var inst_20354 = (state_20435[(26)]);
var inst_20381 = (state_20435[(2)]);
var inst_20382 = cljs.core.not_empty.call(null,inst_20354);
var state_20435__$1 = (function (){var statearr_20478 = state_20435;
(statearr_20478[(29)] = inst_20381);

return statearr_20478;
})();
if(cljs.core.truth_(inst_20382)){
var statearr_20479_20551 = state_20435__$1;
(statearr_20479_20551[(1)] = (29));

} else {
var statearr_20480_20552 = state_20435__$1;
(statearr_20480_20552[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (25))){
var inst_20352 = (state_20435[(24)]);
var inst_20368 = (state_20435[(2)]);
var inst_20369 = cljs.core.not_empty.call(null,inst_20352);
var state_20435__$1 = (function (){var statearr_20481 = state_20435;
(statearr_20481[(30)] = inst_20368);

return statearr_20481;
})();
if(cljs.core.truth_(inst_20369)){
var statearr_20482_20553 = state_20435__$1;
(statearr_20482_20553[(1)] = (26));

} else {
var statearr_20483_20554 = state_20435__$1;
(statearr_20483_20554[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (34))){
var inst_20404 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
if(cljs.core.truth_(inst_20404)){
var statearr_20484_20555 = state_20435__$1;
(statearr_20484_20555[(1)] = (38));

} else {
var statearr_20485_20556 = state_20435__$1;
(statearr_20485_20556[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (17))){
var state_20435__$1 = state_20435;
var statearr_20486_20557 = state_20435__$1;
(statearr_20486_20557[(2)] = recompile_dependents);

(statearr_20486_20557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (3))){
var state_20435__$1 = state_20435;
var statearr_20487_20558 = state_20435__$1;
(statearr_20487_20558[(2)] = null);

(statearr_20487_20558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (12))){
var inst_20325 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20488_20559 = state_20435__$1;
(statearr_20488_20559[(2)] = inst_20325);

(statearr_20488_20559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (2))){
var inst_20287 = (state_20435[(13)]);
var inst_20294 = cljs.core.seq.call(null,inst_20287);
var inst_20295 = inst_20294;
var inst_20296 = null;
var inst_20297 = (0);
var inst_20298 = (0);
var state_20435__$1 = (function (){var statearr_20489 = state_20435;
(statearr_20489[(7)] = inst_20295);

(statearr_20489[(8)] = inst_20297);

(statearr_20489[(9)] = inst_20296);

(statearr_20489[(10)] = inst_20298);

return statearr_20489;
})();
var statearr_20490_20560 = state_20435__$1;
(statearr_20490_20560[(2)] = null);

(statearr_20490_20560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (23))){
var inst_20348 = (state_20435[(19)]);
var inst_20354 = (state_20435[(26)]);
var inst_20351 = (state_20435[(23)]);
var inst_20352 = (state_20435[(24)]);
var inst_20356 = (state_20435[(25)]);
var inst_20359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_20361 = (function (){var all_files = inst_20348;
var res_SINGLEQUOTE_ = inst_20351;
var res = inst_20352;
var files_not_loaded = inst_20354;
var dependencies_that_loaded = inst_20356;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20348,inst_20354,inst_20351,inst_20352,inst_20356,inst_20359,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20360){
var map__20491 = p__20360;
var map__20491__$1 = ((((!((map__20491 == null)))?((((map__20491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20491):map__20491);
var request_url = cljs.core.get.call(null,map__20491__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20348,inst_20354,inst_20351,inst_20352,inst_20356,inst_20359,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20362 = cljs.core.reverse.call(null,inst_20356);
var inst_20363 = cljs.core.map.call(null,inst_20361,inst_20362);
var inst_20364 = cljs.core.pr_str.call(null,inst_20363);
var inst_20365 = figwheel.client.utils.log.call(null,inst_20364);
var state_20435__$1 = (function (){var statearr_20493 = state_20435;
(statearr_20493[(31)] = inst_20359);

return statearr_20493;
})();
var statearr_20494_20561 = state_20435__$1;
(statearr_20494_20561[(2)] = inst_20365);

(statearr_20494_20561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (35))){
var state_20435__$1 = state_20435;
var statearr_20495_20562 = state_20435__$1;
(statearr_20495_20562[(2)] = true);

(statearr_20495_20562[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (19))){
var inst_20338 = (state_20435[(12)]);
var inst_20344 = figwheel.client.file_reloading.expand_files.call(null,inst_20338);
var state_20435__$1 = state_20435;
var statearr_20496_20563 = state_20435__$1;
(statearr_20496_20563[(2)] = inst_20344);

(statearr_20496_20563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (11))){
var state_20435__$1 = state_20435;
var statearr_20497_20564 = state_20435__$1;
(statearr_20497_20564[(2)] = null);

(statearr_20497_20564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (9))){
var inst_20327 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20498_20565 = state_20435__$1;
(statearr_20498_20565[(2)] = inst_20327);

(statearr_20498_20565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (5))){
var inst_20297 = (state_20435[(8)]);
var inst_20298 = (state_20435[(10)]);
var inst_20300 = (inst_20298 < inst_20297);
var inst_20301 = inst_20300;
var state_20435__$1 = state_20435;
if(cljs.core.truth_(inst_20301)){
var statearr_20499_20566 = state_20435__$1;
(statearr_20499_20566[(1)] = (7));

} else {
var statearr_20500_20567 = state_20435__$1;
(statearr_20500_20567[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (14))){
var inst_20308 = (state_20435[(22)]);
var inst_20317 = cljs.core.first.call(null,inst_20308);
var inst_20318 = figwheel.client.file_reloading.eval_body.call(null,inst_20317,opts);
var inst_20319 = cljs.core.next.call(null,inst_20308);
var inst_20295 = inst_20319;
var inst_20296 = null;
var inst_20297 = (0);
var inst_20298 = (0);
var state_20435__$1 = (function (){var statearr_20501 = state_20435;
(statearr_20501[(7)] = inst_20295);

(statearr_20501[(32)] = inst_20318);

(statearr_20501[(8)] = inst_20297);

(statearr_20501[(9)] = inst_20296);

(statearr_20501[(10)] = inst_20298);

return statearr_20501;
})();
var statearr_20502_20568 = state_20435__$1;
(statearr_20502_20568[(2)] = null);

(statearr_20502_20568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (45))){
var state_20435__$1 = state_20435;
var statearr_20503_20569 = state_20435__$1;
(statearr_20503_20569[(2)] = null);

(statearr_20503_20569[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (26))){
var inst_20348 = (state_20435[(19)]);
var inst_20354 = (state_20435[(26)]);
var inst_20351 = (state_20435[(23)]);
var inst_20352 = (state_20435[(24)]);
var inst_20356 = (state_20435[(25)]);
var inst_20371 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_20373 = (function (){var all_files = inst_20348;
var res_SINGLEQUOTE_ = inst_20351;
var res = inst_20352;
var files_not_loaded = inst_20354;
var dependencies_that_loaded = inst_20356;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20348,inst_20354,inst_20351,inst_20352,inst_20356,inst_20371,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20372){
var map__20504 = p__20372;
var map__20504__$1 = ((((!((map__20504 == null)))?((((map__20504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20504):map__20504);
var namespace = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20348,inst_20354,inst_20351,inst_20352,inst_20356,inst_20371,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20374 = cljs.core.map.call(null,inst_20373,inst_20352);
var inst_20375 = cljs.core.pr_str.call(null,inst_20374);
var inst_20376 = figwheel.client.utils.log.call(null,inst_20375);
var inst_20377 = (function (){var all_files = inst_20348;
var res_SINGLEQUOTE_ = inst_20351;
var res = inst_20352;
var files_not_loaded = inst_20354;
var dependencies_that_loaded = inst_20356;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20348,inst_20354,inst_20351,inst_20352,inst_20356,inst_20371,inst_20373,inst_20374,inst_20375,inst_20376,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20348,inst_20354,inst_20351,inst_20352,inst_20356,inst_20371,inst_20373,inst_20374,inst_20375,inst_20376,state_val_20436,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20378 = setTimeout(inst_20377,(10));
var state_20435__$1 = (function (){var statearr_20506 = state_20435;
(statearr_20506[(33)] = inst_20376);

(statearr_20506[(34)] = inst_20371);

return statearr_20506;
})();
var statearr_20507_20570 = state_20435__$1;
(statearr_20507_20570[(2)] = inst_20378);

(statearr_20507_20570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (16))){
var state_20435__$1 = state_20435;
var statearr_20508_20571 = state_20435__$1;
(statearr_20508_20571[(2)] = reload_dependents);

(statearr_20508_20571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (38))){
var inst_20388 = (state_20435[(16)]);
var inst_20406 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20388);
var state_20435__$1 = state_20435;
var statearr_20509_20572 = state_20435__$1;
(statearr_20509_20572[(2)] = inst_20406);

(statearr_20509_20572[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (30))){
var state_20435__$1 = state_20435;
var statearr_20510_20573 = state_20435__$1;
(statearr_20510_20573[(2)] = null);

(statearr_20510_20573[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (10))){
var inst_20308 = (state_20435[(22)]);
var inst_20310 = cljs.core.chunked_seq_QMARK_.call(null,inst_20308);
var state_20435__$1 = state_20435;
if(inst_20310){
var statearr_20511_20574 = state_20435__$1;
(statearr_20511_20574[(1)] = (13));

} else {
var statearr_20512_20575 = state_20435__$1;
(statearr_20512_20575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (18))){
var inst_20342 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
if(cljs.core.truth_(inst_20342)){
var statearr_20513_20576 = state_20435__$1;
(statearr_20513_20576[(1)] = (19));

} else {
var statearr_20514_20577 = state_20435__$1;
(statearr_20514_20577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (42))){
var state_20435__$1 = state_20435;
var statearr_20515_20578 = state_20435__$1;
(statearr_20515_20578[(2)] = null);

(statearr_20515_20578[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (37))){
var inst_20401 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20516_20579 = state_20435__$1;
(statearr_20516_20579[(2)] = inst_20401);

(statearr_20516_20579[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (8))){
var inst_20295 = (state_20435[(7)]);
var inst_20308 = (state_20435[(22)]);
var inst_20308__$1 = cljs.core.seq.call(null,inst_20295);
var state_20435__$1 = (function (){var statearr_20517 = state_20435;
(statearr_20517[(22)] = inst_20308__$1);

return statearr_20517;
})();
if(inst_20308__$1){
var statearr_20518_20580 = state_20435__$1;
(statearr_20518_20580[(1)] = (10));

} else {
var statearr_20519_20581 = state_20435__$1;
(statearr_20519_20581[(1)] = (11));

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
});})(c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__17554__auto__,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto____0 = (function (){
var statearr_20520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20520[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto__);

(statearr_20520[(1)] = (1));

return statearr_20520;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto____1 = (function (state_20435){
while(true){
var ret_value__17556__auto__ = (function (){try{while(true){
var result__17557__auto__ = switch__17554__auto__.call(null,state_20435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17557__auto__;
}
break;
}
}catch (e20521){if((e20521 instanceof Object)){
var ex__17558__auto__ = e20521;
var statearr_20522_20582 = state_20435;
(statearr_20522_20582[(5)] = ex__17558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20583 = state_20435;
state_20435 = G__20583;
continue;
} else {
return ret_value__17556__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto__ = function(state_20435){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto____1.call(this,state_20435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17555__auto__;
})()
;})(switch__17554__auto__,c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__17646__auto__ = (function (){var statearr_20523 = f__17645__auto__.call(null);
(statearr_20523[(6)] = c__17644__auto__);

return statearr_20523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17646__auto__);
});})(c__17644__auto__,map__20280,map__20280__$1,opts,before_jsload,on_jsload,reload_dependents,map__20281,map__20281__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__17644__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__20586,link){
var map__20587 = p__20586;
var map__20587__$1 = ((((!((map__20587 == null)))?((((map__20587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20587):map__20587);
var file = cljs.core.get.call(null,map__20587__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__20587,map__20587__$1,file){
return (function (p1__20584_SHARP_,p2__20585_SHARP_){
if(cljs.core._EQ_.call(null,p1__20584_SHARP_,p2__20585_SHARP_)){
return p1__20584_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__20587,map__20587__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__20590){
var map__20591 = p__20590;
var map__20591__$1 = ((((!((map__20591 == null)))?((((map__20591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20591):map__20591);
var match_length = cljs.core.get.call(null,map__20591__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__20591__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__20589_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__20589_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__20593_SHARP_,p2__20594_SHARP_){
return cljs.core.assoc.call(null,p1__20593_SHARP_,cljs.core.get.call(null,p2__20594_SHARP_,key),p2__20594_SHARP_);
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
var loaded_f_datas_20595 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_20595);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_20595);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__20596,p__20597){
var map__20598 = p__20596;
var map__20598__$1 = ((((!((map__20598 == null)))?((((map__20598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20598):map__20598);
var on_cssload = cljs.core.get.call(null,map__20598__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__20599 = p__20597;
var map__20599__$1 = ((((!((map__20599 == null)))?((((map__20599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20599):map__20599);
var files_msg = map__20599__$1;
var files = cljs.core.get.call(null,map__20599__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1504285961183
