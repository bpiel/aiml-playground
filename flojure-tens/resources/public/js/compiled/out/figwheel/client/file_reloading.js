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
var or__58128__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__58128__auto__){
return or__58128__auto__;
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
var or__58128__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
var or__58128__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__58128__auto____$1)){
return or__58128__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__116877_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__116877_SHARP_));
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
var seq__116878 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__116879 = null;
var count__116880 = (0);
var i__116881 = (0);
while(true){
if((i__116881 < count__116880)){
var n = cljs.core._nth.call(null,chunk__116879,i__116881);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__116882 = seq__116878;
var G__116883 = chunk__116879;
var G__116884 = count__116880;
var G__116885 = (i__116881 + (1));
seq__116878 = G__116882;
chunk__116879 = G__116883;
count__116880 = G__116884;
i__116881 = G__116885;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__116878);
if(temp__6738__auto__){
var seq__116878__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116878__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__116878__$1);
var G__116886 = cljs.core.chunk_rest.call(null,seq__116878__$1);
var G__116887 = c__59059__auto__;
var G__116888 = cljs.core.count.call(null,c__59059__auto__);
var G__116889 = (0);
seq__116878 = G__116886;
chunk__116879 = G__116887;
count__116880 = G__116888;
i__116881 = G__116889;
continue;
} else {
var n = cljs.core.first.call(null,seq__116878__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__116890 = cljs.core.next.call(null,seq__116878__$1);
var G__116891 = null;
var G__116892 = (0);
var G__116893 = (0);
seq__116878 = G__116890;
chunk__116879 = G__116891;
count__116880 = G__116892;
i__116881 = G__116893;
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

var seq__116903_116911 = cljs.core.seq.call(null,deps);
var chunk__116904_116912 = null;
var count__116905_116913 = (0);
var i__116906_116914 = (0);
while(true){
if((i__116906_116914 < count__116905_116913)){
var dep_116915 = cljs.core._nth.call(null,chunk__116904_116912,i__116906_116914);
topo_sort_helper_STAR_.call(null,dep_116915,(depth + (1)),state);

var G__116916 = seq__116903_116911;
var G__116917 = chunk__116904_116912;
var G__116918 = count__116905_116913;
var G__116919 = (i__116906_116914 + (1));
seq__116903_116911 = G__116916;
chunk__116904_116912 = G__116917;
count__116905_116913 = G__116918;
i__116906_116914 = G__116919;
continue;
} else {
var temp__6738__auto___116920 = cljs.core.seq.call(null,seq__116903_116911);
if(temp__6738__auto___116920){
var seq__116903_116921__$1 = temp__6738__auto___116920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116903_116921__$1)){
var c__59059__auto___116922 = cljs.core.chunk_first.call(null,seq__116903_116921__$1);
var G__116923 = cljs.core.chunk_rest.call(null,seq__116903_116921__$1);
var G__116924 = c__59059__auto___116922;
var G__116925 = cljs.core.count.call(null,c__59059__auto___116922);
var G__116926 = (0);
seq__116903_116911 = G__116923;
chunk__116904_116912 = G__116924;
count__116905_116913 = G__116925;
i__116906_116914 = G__116926;
continue;
} else {
var dep_116927 = cljs.core.first.call(null,seq__116903_116921__$1);
topo_sort_helper_STAR_.call(null,dep_116927,(depth + (1)),state);

var G__116928 = cljs.core.next.call(null,seq__116903_116921__$1);
var G__116929 = null;
var G__116930 = (0);
var G__116931 = (0);
seq__116903_116911 = G__116928;
chunk__116904_116912 = G__116929;
count__116905_116913 = G__116930;
i__116906_116914 = G__116931;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__116907){
var vec__116908 = p__116907;
var seq__116909 = cljs.core.seq.call(null,vec__116908);
var first__116910 = cljs.core.first.call(null,seq__116909);
var seq__116909__$1 = cljs.core.next.call(null,seq__116909);
var x = first__116910;
var xs = seq__116909__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__116908,seq__116909,first__116910,seq__116909__$1,x,xs,get_deps__$1){
return (function (p1__116894_SHARP_){
return clojure.set.difference.call(null,p1__116894_SHARP_,x);
});})(vec__116908,seq__116909,first__116910,seq__116909__$1,x,xs,get_deps__$1))
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
var seq__116932 = cljs.core.seq.call(null,provides);
var chunk__116933 = null;
var count__116934 = (0);
var i__116935 = (0);
while(true){
if((i__116935 < count__116934)){
var prov = cljs.core._nth.call(null,chunk__116933,i__116935);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__116936_116944 = cljs.core.seq.call(null,requires);
var chunk__116937_116945 = null;
var count__116938_116946 = (0);
var i__116939_116947 = (0);
while(true){
if((i__116939_116947 < count__116938_116946)){
var req_116948 = cljs.core._nth.call(null,chunk__116937_116945,i__116939_116947);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_116948,prov);

var G__116949 = seq__116936_116944;
var G__116950 = chunk__116937_116945;
var G__116951 = count__116938_116946;
var G__116952 = (i__116939_116947 + (1));
seq__116936_116944 = G__116949;
chunk__116937_116945 = G__116950;
count__116938_116946 = G__116951;
i__116939_116947 = G__116952;
continue;
} else {
var temp__6738__auto___116953 = cljs.core.seq.call(null,seq__116936_116944);
if(temp__6738__auto___116953){
var seq__116936_116954__$1 = temp__6738__auto___116953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116936_116954__$1)){
var c__59059__auto___116955 = cljs.core.chunk_first.call(null,seq__116936_116954__$1);
var G__116956 = cljs.core.chunk_rest.call(null,seq__116936_116954__$1);
var G__116957 = c__59059__auto___116955;
var G__116958 = cljs.core.count.call(null,c__59059__auto___116955);
var G__116959 = (0);
seq__116936_116944 = G__116956;
chunk__116937_116945 = G__116957;
count__116938_116946 = G__116958;
i__116939_116947 = G__116959;
continue;
} else {
var req_116960 = cljs.core.first.call(null,seq__116936_116954__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_116960,prov);

var G__116961 = cljs.core.next.call(null,seq__116936_116954__$1);
var G__116962 = null;
var G__116963 = (0);
var G__116964 = (0);
seq__116936_116944 = G__116961;
chunk__116937_116945 = G__116962;
count__116938_116946 = G__116963;
i__116939_116947 = G__116964;
continue;
}
} else {
}
}
break;
}

var G__116965 = seq__116932;
var G__116966 = chunk__116933;
var G__116967 = count__116934;
var G__116968 = (i__116935 + (1));
seq__116932 = G__116965;
chunk__116933 = G__116966;
count__116934 = G__116967;
i__116935 = G__116968;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__116932);
if(temp__6738__auto__){
var seq__116932__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116932__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__116932__$1);
var G__116969 = cljs.core.chunk_rest.call(null,seq__116932__$1);
var G__116970 = c__59059__auto__;
var G__116971 = cljs.core.count.call(null,c__59059__auto__);
var G__116972 = (0);
seq__116932 = G__116969;
chunk__116933 = G__116970;
count__116934 = G__116971;
i__116935 = G__116972;
continue;
} else {
var prov = cljs.core.first.call(null,seq__116932__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__116940_116973 = cljs.core.seq.call(null,requires);
var chunk__116941_116974 = null;
var count__116942_116975 = (0);
var i__116943_116976 = (0);
while(true){
if((i__116943_116976 < count__116942_116975)){
var req_116977 = cljs.core._nth.call(null,chunk__116941_116974,i__116943_116976);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_116977,prov);

var G__116978 = seq__116940_116973;
var G__116979 = chunk__116941_116974;
var G__116980 = count__116942_116975;
var G__116981 = (i__116943_116976 + (1));
seq__116940_116973 = G__116978;
chunk__116941_116974 = G__116979;
count__116942_116975 = G__116980;
i__116943_116976 = G__116981;
continue;
} else {
var temp__6738__auto___116982__$1 = cljs.core.seq.call(null,seq__116940_116973);
if(temp__6738__auto___116982__$1){
var seq__116940_116983__$1 = temp__6738__auto___116982__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116940_116983__$1)){
var c__59059__auto___116984 = cljs.core.chunk_first.call(null,seq__116940_116983__$1);
var G__116985 = cljs.core.chunk_rest.call(null,seq__116940_116983__$1);
var G__116986 = c__59059__auto___116984;
var G__116987 = cljs.core.count.call(null,c__59059__auto___116984);
var G__116988 = (0);
seq__116940_116973 = G__116985;
chunk__116941_116974 = G__116986;
count__116942_116975 = G__116987;
i__116943_116976 = G__116988;
continue;
} else {
var req_116989 = cljs.core.first.call(null,seq__116940_116983__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_116989,prov);

var G__116990 = cljs.core.next.call(null,seq__116940_116983__$1);
var G__116991 = null;
var G__116992 = (0);
var G__116993 = (0);
seq__116940_116973 = G__116990;
chunk__116941_116974 = G__116991;
count__116942_116975 = G__116992;
i__116943_116976 = G__116993;
continue;
}
} else {
}
}
break;
}

var G__116994 = cljs.core.next.call(null,seq__116932__$1);
var G__116995 = null;
var G__116996 = (0);
var G__116997 = (0);
seq__116932 = G__116994;
chunk__116933 = G__116995;
count__116934 = G__116996;
i__116935 = G__116997;
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
var seq__116998_117002 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__116999_117003 = null;
var count__117000_117004 = (0);
var i__117001_117005 = (0);
while(true){
if((i__117001_117005 < count__117000_117004)){
var ns_117006 = cljs.core._nth.call(null,chunk__116999_117003,i__117001_117005);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_117006);

var G__117007 = seq__116998_117002;
var G__117008 = chunk__116999_117003;
var G__117009 = count__117000_117004;
var G__117010 = (i__117001_117005 + (1));
seq__116998_117002 = G__117007;
chunk__116999_117003 = G__117008;
count__117000_117004 = G__117009;
i__117001_117005 = G__117010;
continue;
} else {
var temp__6738__auto___117011 = cljs.core.seq.call(null,seq__116998_117002);
if(temp__6738__auto___117011){
var seq__116998_117012__$1 = temp__6738__auto___117011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116998_117012__$1)){
var c__59059__auto___117013 = cljs.core.chunk_first.call(null,seq__116998_117012__$1);
var G__117014 = cljs.core.chunk_rest.call(null,seq__116998_117012__$1);
var G__117015 = c__59059__auto___117013;
var G__117016 = cljs.core.count.call(null,c__59059__auto___117013);
var G__117017 = (0);
seq__116998_117002 = G__117014;
chunk__116999_117003 = G__117015;
count__117000_117004 = G__117016;
i__117001_117005 = G__117017;
continue;
} else {
var ns_117018 = cljs.core.first.call(null,seq__116998_117012__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_117018);

var G__117019 = cljs.core.next.call(null,seq__116998_117012__$1);
var G__117020 = null;
var G__117021 = (0);
var G__117022 = (0);
seq__116998_117002 = G__117019;
chunk__116999_117003 = G__117020;
count__117000_117004 = G__117021;
i__117001_117005 = G__117022;
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
goog.require_figwheel_backup_ = (function (){var or__58128__auto__ = goog.require__;
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
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
var G__117023__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__117023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117024__i = 0, G__117024__a = new Array(arguments.length -  0);
while (G__117024__i < G__117024__a.length) {G__117024__a[G__117024__i] = arguments[G__117024__i + 0]; ++G__117024__i;}
  args = new cljs.core.IndexedSeq(G__117024__a,0,null);
} 
return G__117023__delegate.call(this,args);};
G__117023.cljs$lang$maxFixedArity = 0;
G__117023.cljs$lang$applyTo = (function (arglist__117025){
var args = cljs.core.seq(arglist__117025);
return G__117023__delegate(args);
});
G__117023.cljs$core$IFn$_invoke$arity$variadic = G__117023__delegate;
return G__117023;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__117026_SHARP_,p2__117027_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__117026_SHARP_)].join('')),p2__117027_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__117028_SHARP_,p2__117029_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__117028_SHARP_)].join(''),p2__117029_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__117030 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__117030.addCallback(((function (G__117030){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__117030))
);

G__117030.addErrback(((function (G__117030){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__117030))
);

return G__117030;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__117031 = cljs.core._EQ_;
var expr__117032 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__117031.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__117032))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__117031,expr__117032){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__117031,expr__117032))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__117031,expr__117032){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e117034){if((e117034 instanceof Error)){
var e = e117034;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e117034;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__117031,expr__117032))
} else {
if(cljs.core.truth_(pred__117031.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__117032))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__117031.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__117032))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__117031.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__117032))){
return ((function (pred__117031,expr__117032){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e117035){if((e117035 instanceof Error)){
var e = e117035;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e117035;

}
}})());
});
;})(pred__117031,expr__117032))
} else {
return ((function (pred__117031,expr__117032){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__117031,expr__117032))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__117036,callback){
var map__117037 = p__117036;
var map__117037__$1 = ((((!((map__117037 == null)))?((((map__117037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117037):map__117037);
var file_msg = map__117037__$1;
var request_url = cljs.core.get.call(null,map__117037__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__117037,map__117037__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__117037,map__117037__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__){
return (function (state_117061){
var state_val_117062 = (state_117061[(1)]);
if((state_val_117062 === (7))){
var inst_117057 = (state_117061[(2)]);
var state_117061__$1 = state_117061;
var statearr_117063_117080 = state_117061__$1;
(statearr_117063_117080[(2)] = inst_117057);

(statearr_117063_117080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117062 === (1))){
var state_117061__$1 = state_117061;
var statearr_117064_117081 = state_117061__$1;
(statearr_117064_117081[(2)] = null);

(statearr_117064_117081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117062 === (4))){
var inst_117041 = (state_117061[(7)]);
var inst_117041__$1 = (state_117061[(2)]);
var state_117061__$1 = (function (){var statearr_117065 = state_117061;
(statearr_117065[(7)] = inst_117041__$1);

return statearr_117065;
})();
if(cljs.core.truth_(inst_117041__$1)){
var statearr_117066_117082 = state_117061__$1;
(statearr_117066_117082[(1)] = (5));

} else {
var statearr_117067_117083 = state_117061__$1;
(statearr_117067_117083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117062 === (6))){
var state_117061__$1 = state_117061;
var statearr_117068_117084 = state_117061__$1;
(statearr_117068_117084[(2)] = null);

(statearr_117068_117084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117062 === (3))){
var inst_117059 = (state_117061[(2)]);
var state_117061__$1 = state_117061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117061__$1,inst_117059);
} else {
if((state_val_117062 === (2))){
var state_117061__$1 = state_117061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117061__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_117062 === (11))){
var inst_117053 = (state_117061[(2)]);
var state_117061__$1 = (function (){var statearr_117069 = state_117061;
(statearr_117069[(8)] = inst_117053);

return statearr_117069;
})();
var statearr_117070_117085 = state_117061__$1;
(statearr_117070_117085[(2)] = null);

(statearr_117070_117085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117062 === (9))){
var inst_117045 = (state_117061[(9)]);
var inst_117047 = (state_117061[(10)]);
var inst_117049 = inst_117047.call(null,inst_117045);
var state_117061__$1 = state_117061;
var statearr_117071_117086 = state_117061__$1;
(statearr_117071_117086[(2)] = inst_117049);

(statearr_117071_117086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117062 === (5))){
var inst_117041 = (state_117061[(7)]);
var inst_117043 = figwheel.client.file_reloading.blocking_load.call(null,inst_117041);
var state_117061__$1 = state_117061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117061__$1,(8),inst_117043);
} else {
if((state_val_117062 === (10))){
var inst_117045 = (state_117061[(9)]);
var inst_117051 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_117045);
var state_117061__$1 = state_117061;
var statearr_117072_117087 = state_117061__$1;
(statearr_117072_117087[(2)] = inst_117051);

(statearr_117072_117087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117062 === (8))){
var inst_117041 = (state_117061[(7)]);
var inst_117047 = (state_117061[(10)]);
var inst_117045 = (state_117061[(2)]);
var inst_117046 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_117047__$1 = cljs.core.get.call(null,inst_117046,inst_117041);
var state_117061__$1 = (function (){var statearr_117073 = state_117061;
(statearr_117073[(9)] = inst_117045);

(statearr_117073[(10)] = inst_117047__$1);

return statearr_117073;
})();
if(cljs.core.truth_(inst_117047__$1)){
var statearr_117074_117088 = state_117061__$1;
(statearr_117074_117088[(1)] = (9));

} else {
var statearr_117075_117089 = state_117061__$1;
(statearr_117075_117089[(1)] = (10));

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
});})(c__67983__auto__))
;
return ((function (switch__67960__auto__,c__67983__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__67961__auto__ = null;
var figwheel$client$file_reloading$state_machine__67961__auto____0 = (function (){
var statearr_117076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_117076[(0)] = figwheel$client$file_reloading$state_machine__67961__auto__);

(statearr_117076[(1)] = (1));

return statearr_117076;
});
var figwheel$client$file_reloading$state_machine__67961__auto____1 = (function (state_117061){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_117061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e117077){if((e117077 instanceof Object)){
var ex__67964__auto__ = e117077;
var statearr_117078_117090 = state_117061;
(statearr_117078_117090[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e117077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117091 = state_117061;
state_117061 = G__117091;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__67961__auto__ = function(state_117061){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__67961__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__67961__auto____1.call(this,state_117061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__67961__auto____0;
figwheel$client$file_reloading$state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__67961__auto____1;
return figwheel$client$file_reloading$state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__))
})();
var state__67985__auto__ = (function (){var statearr_117079 = f__67984__auto__.call(null);
(statearr_117079[(6)] = c__67983__auto__);

return statearr_117079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__))
);

return c__67983__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__117092,callback){
var map__117093 = p__117092;
var map__117093__$1 = ((((!((map__117093 == null)))?((((map__117093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117093):map__117093);
var file_msg = map__117093__$1;
var namespace = cljs.core.get.call(null,map__117093__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__117093,map__117093__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__117093,map__117093__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__117095){
var map__117096 = p__117095;
var map__117096__$1 = ((((!((map__117096 == null)))?((((map__117096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117096):map__117096);
var file_msg = map__117096__$1;
var namespace = cljs.core.get.call(null,map__117096__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__117098){
var map__117099 = p__117098;
var map__117099__$1 = ((((!((map__117099 == null)))?((((map__117099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117099):map__117099);
var file_msg = map__117099__$1;
var namespace = cljs.core.get.call(null,map__117099__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__58116__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__58116__auto__){
var or__58128__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
var or__58128__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__58128__auto____$1)){
return or__58128__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__58116__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__117101,callback){
var map__117102 = p__117101;
var map__117102__$1 = ((((!((map__117102 == null)))?((((map__117102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117102):map__117102);
var file_msg = map__117102__$1;
var request_url = cljs.core.get.call(null,map__117102__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__117102__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__67983__auto___117152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto___117152,out){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto___117152,out){
return (function (state_117137){
var state_val_117138 = (state_117137[(1)]);
if((state_val_117138 === (1))){
var inst_117111 = cljs.core.seq.call(null,files);
var inst_117112 = cljs.core.first.call(null,inst_117111);
var inst_117113 = cljs.core.next.call(null,inst_117111);
var inst_117114 = files;
var state_117137__$1 = (function (){var statearr_117139 = state_117137;
(statearr_117139[(7)] = inst_117113);

(statearr_117139[(8)] = inst_117112);

(statearr_117139[(9)] = inst_117114);

return statearr_117139;
})();
var statearr_117140_117153 = state_117137__$1;
(statearr_117140_117153[(2)] = null);

(statearr_117140_117153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117138 === (2))){
var inst_117120 = (state_117137[(10)]);
var inst_117114 = (state_117137[(9)]);
var inst_117119 = cljs.core.seq.call(null,inst_117114);
var inst_117120__$1 = cljs.core.first.call(null,inst_117119);
var inst_117121 = cljs.core.next.call(null,inst_117119);
var inst_117122 = (inst_117120__$1 == null);
var inst_117123 = cljs.core.not.call(null,inst_117122);
var state_117137__$1 = (function (){var statearr_117141 = state_117137;
(statearr_117141[(10)] = inst_117120__$1);

(statearr_117141[(11)] = inst_117121);

return statearr_117141;
})();
if(inst_117123){
var statearr_117142_117154 = state_117137__$1;
(statearr_117142_117154[(1)] = (4));

} else {
var statearr_117143_117155 = state_117137__$1;
(statearr_117143_117155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117138 === (3))){
var inst_117135 = (state_117137[(2)]);
var state_117137__$1 = state_117137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117137__$1,inst_117135);
} else {
if((state_val_117138 === (4))){
var inst_117120 = (state_117137[(10)]);
var inst_117125 = figwheel.client.file_reloading.reload_js_file.call(null,inst_117120);
var state_117137__$1 = state_117137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117137__$1,(7),inst_117125);
} else {
if((state_val_117138 === (5))){
var inst_117131 = cljs.core.async.close_BANG_.call(null,out);
var state_117137__$1 = state_117137;
var statearr_117144_117156 = state_117137__$1;
(statearr_117144_117156[(2)] = inst_117131);

(statearr_117144_117156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117138 === (6))){
var inst_117133 = (state_117137[(2)]);
var state_117137__$1 = state_117137;
var statearr_117145_117157 = state_117137__$1;
(statearr_117145_117157[(2)] = inst_117133);

(statearr_117145_117157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117138 === (7))){
var inst_117121 = (state_117137[(11)]);
var inst_117127 = (state_117137[(2)]);
var inst_117128 = cljs.core.async.put_BANG_.call(null,out,inst_117127);
var inst_117114 = inst_117121;
var state_117137__$1 = (function (){var statearr_117146 = state_117137;
(statearr_117146[(12)] = inst_117128);

(statearr_117146[(9)] = inst_117114);

return statearr_117146;
})();
var statearr_117147_117158 = state_117137__$1;
(statearr_117147_117158[(2)] = null);

(statearr_117147_117158[(1)] = (2));


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
});})(c__67983__auto___117152,out))
;
return ((function (switch__67960__auto__,c__67983__auto___117152,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto____0 = (function (){
var statearr_117148 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_117148[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto__);

(statearr_117148[(1)] = (1));

return statearr_117148;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto____1 = (function (state_117137){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_117137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e117149){if((e117149 instanceof Object)){
var ex__67964__auto__ = e117149;
var statearr_117150_117159 = state_117137;
(statearr_117150_117159[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e117149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117160 = state_117137;
state_117137 = G__117160;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto__ = function(state_117137){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto____1.call(this,state_117137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto___117152,out))
})();
var state__67985__auto__ = (function (){var statearr_117151 = f__67984__auto__.call(null);
(statearr_117151[(6)] = c__67983__auto___117152);

return statearr_117151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto___117152,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__117161,opts){
var map__117162 = p__117161;
var map__117162__$1 = ((((!((map__117162 == null)))?((((map__117162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117162):map__117162);
var eval_body = cljs.core.get.call(null,map__117162__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__117162__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__58116__auto__ = eval_body;
if(cljs.core.truth_(and__58116__auto__)){
return typeof eval_body === 'string';
} else {
return and__58116__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e117164){var e = e117164;
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
return (function (p1__117165_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__117165_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__117166){
var vec__117167 = p__117166;
var k = cljs.core.nth.call(null,vec__117167,(0),null);
var v = cljs.core.nth.call(null,vec__117167,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__117170){
var vec__117171 = p__117170;
var k = cljs.core.nth.call(null,vec__117171,(0),null);
var v = cljs.core.nth.call(null,vec__117171,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__117177,p__117178){
var map__117179 = p__117177;
var map__117179__$1 = ((((!((map__117179 == null)))?((((map__117179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117179):map__117179);
var opts = map__117179__$1;
var before_jsload = cljs.core.get.call(null,map__117179__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__117179__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__117179__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__117180 = p__117178;
var map__117180__$1 = ((((!((map__117180 == null)))?((((map__117180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117180):map__117180);
var msg = map__117180__$1;
var files = cljs.core.get.call(null,map__117180__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__117180__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__117180__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__67983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__67984__auto__ = (function (){var switch__67960__auto__ = ((function (c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_117334){
var state_val_117335 = (state_117334[(1)]);
if((state_val_117335 === (7))){
var inst_117196 = (state_117334[(7)]);
var inst_117197 = (state_117334[(8)]);
var inst_117195 = (state_117334[(9)]);
var inst_117194 = (state_117334[(10)]);
var inst_117202 = cljs.core._nth.call(null,inst_117195,inst_117197);
var inst_117203 = figwheel.client.file_reloading.eval_body.call(null,inst_117202,opts);
var inst_117204 = (inst_117197 + (1));
var tmp117336 = inst_117196;
var tmp117337 = inst_117195;
var tmp117338 = inst_117194;
var inst_117194__$1 = tmp117338;
var inst_117195__$1 = tmp117337;
var inst_117196__$1 = tmp117336;
var inst_117197__$1 = inst_117204;
var state_117334__$1 = (function (){var statearr_117339 = state_117334;
(statearr_117339[(7)] = inst_117196__$1);

(statearr_117339[(8)] = inst_117197__$1);

(statearr_117339[(9)] = inst_117195__$1);

(statearr_117339[(10)] = inst_117194__$1);

(statearr_117339[(11)] = inst_117203);

return statearr_117339;
})();
var statearr_117340_117423 = state_117334__$1;
(statearr_117340_117423[(2)] = null);

(statearr_117340_117423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (20))){
var inst_117237 = (state_117334[(12)]);
var inst_117245 = figwheel.client.file_reloading.sort_files.call(null,inst_117237);
var state_117334__$1 = state_117334;
var statearr_117341_117424 = state_117334__$1;
(statearr_117341_117424[(2)] = inst_117245);

(statearr_117341_117424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (27))){
var state_117334__$1 = state_117334;
var statearr_117342_117425 = state_117334__$1;
(statearr_117342_117425[(2)] = null);

(statearr_117342_117425[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (1))){
var inst_117186 = (state_117334[(13)]);
var inst_117183 = before_jsload.call(null,files);
var inst_117184 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_117185 = (function (){return ((function (inst_117186,inst_117183,inst_117184,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__117174_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__117174_SHARP_);
});
;})(inst_117186,inst_117183,inst_117184,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_117186__$1 = cljs.core.filter.call(null,inst_117185,files);
var inst_117187 = cljs.core.not_empty.call(null,inst_117186__$1);
var state_117334__$1 = (function (){var statearr_117343 = state_117334;
(statearr_117343[(14)] = inst_117183);

(statearr_117343[(13)] = inst_117186__$1);

(statearr_117343[(15)] = inst_117184);

return statearr_117343;
})();
if(cljs.core.truth_(inst_117187)){
var statearr_117344_117426 = state_117334__$1;
(statearr_117344_117426[(1)] = (2));

} else {
var statearr_117345_117427 = state_117334__$1;
(statearr_117345_117427[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (24))){
var state_117334__$1 = state_117334;
var statearr_117346_117428 = state_117334__$1;
(statearr_117346_117428[(2)] = null);

(statearr_117346_117428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (39))){
var inst_117287 = (state_117334[(16)]);
var state_117334__$1 = state_117334;
var statearr_117347_117429 = state_117334__$1;
(statearr_117347_117429[(2)] = inst_117287);

(statearr_117347_117429[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (46))){
var inst_117329 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
var statearr_117348_117430 = state_117334__$1;
(statearr_117348_117430[(2)] = inst_117329);

(statearr_117348_117430[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (4))){
var inst_117231 = (state_117334[(2)]);
var inst_117232 = cljs.core.List.EMPTY;
var inst_117233 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_117232);
var inst_117234 = (function (){return ((function (inst_117231,inst_117232,inst_117233,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__117175_SHARP_){
var and__58116__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__117175_SHARP_);
if(cljs.core.truth_(and__58116__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__117175_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__117175_SHARP_)));
} else {
return and__58116__auto__;
}
});
;})(inst_117231,inst_117232,inst_117233,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_117235 = cljs.core.filter.call(null,inst_117234,files);
var inst_117236 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_117237 = cljs.core.concat.call(null,inst_117235,inst_117236);
var state_117334__$1 = (function (){var statearr_117349 = state_117334;
(statearr_117349[(12)] = inst_117237);

(statearr_117349[(17)] = inst_117231);

(statearr_117349[(18)] = inst_117233);

return statearr_117349;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_117350_117431 = state_117334__$1;
(statearr_117350_117431[(1)] = (16));

} else {
var statearr_117351_117432 = state_117334__$1;
(statearr_117351_117432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (15))){
var inst_117221 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
var statearr_117352_117433 = state_117334__$1;
(statearr_117352_117433[(2)] = inst_117221);

(statearr_117352_117433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (21))){
var inst_117247 = (state_117334[(19)]);
var inst_117247__$1 = (state_117334[(2)]);
var inst_117248 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_117247__$1);
var state_117334__$1 = (function (){var statearr_117353 = state_117334;
(statearr_117353[(19)] = inst_117247__$1);

return statearr_117353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117334__$1,(22),inst_117248);
} else {
if((state_val_117335 === (31))){
var inst_117332 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117334__$1,inst_117332);
} else {
if((state_val_117335 === (32))){
var inst_117287 = (state_117334[(16)]);
var inst_117292 = inst_117287.cljs$lang$protocol_mask$partition0$;
var inst_117293 = (inst_117292 & (64));
var inst_117294 = inst_117287.cljs$core$ISeq$;
var inst_117295 = (cljs.core.PROTOCOL_SENTINEL === inst_117294);
var inst_117296 = (inst_117293) || (inst_117295);
var state_117334__$1 = state_117334;
if(cljs.core.truth_(inst_117296)){
var statearr_117354_117434 = state_117334__$1;
(statearr_117354_117434[(1)] = (35));

} else {
var statearr_117355_117435 = state_117334__$1;
(statearr_117355_117435[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (40))){
var inst_117309 = (state_117334[(20)]);
var inst_117308 = (state_117334[(2)]);
var inst_117309__$1 = cljs.core.get.call(null,inst_117308,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_117310 = cljs.core.get.call(null,inst_117308,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_117311 = cljs.core.not_empty.call(null,inst_117309__$1);
var state_117334__$1 = (function (){var statearr_117356 = state_117334;
(statearr_117356[(20)] = inst_117309__$1);

(statearr_117356[(21)] = inst_117310);

return statearr_117356;
})();
if(cljs.core.truth_(inst_117311)){
var statearr_117357_117436 = state_117334__$1;
(statearr_117357_117436[(1)] = (41));

} else {
var statearr_117358_117437 = state_117334__$1;
(statearr_117358_117437[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (33))){
var state_117334__$1 = state_117334;
var statearr_117359_117438 = state_117334__$1;
(statearr_117359_117438[(2)] = false);

(statearr_117359_117438[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (13))){
var inst_117207 = (state_117334[(22)]);
var inst_117211 = cljs.core.chunk_first.call(null,inst_117207);
var inst_117212 = cljs.core.chunk_rest.call(null,inst_117207);
var inst_117213 = cljs.core.count.call(null,inst_117211);
var inst_117194 = inst_117212;
var inst_117195 = inst_117211;
var inst_117196 = inst_117213;
var inst_117197 = (0);
var state_117334__$1 = (function (){var statearr_117360 = state_117334;
(statearr_117360[(7)] = inst_117196);

(statearr_117360[(8)] = inst_117197);

(statearr_117360[(9)] = inst_117195);

(statearr_117360[(10)] = inst_117194);

return statearr_117360;
})();
var statearr_117361_117439 = state_117334__$1;
(statearr_117361_117439[(2)] = null);

(statearr_117361_117439[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (22))){
var inst_117251 = (state_117334[(23)]);
var inst_117255 = (state_117334[(24)]);
var inst_117250 = (state_117334[(25)]);
var inst_117247 = (state_117334[(19)]);
var inst_117250__$1 = (state_117334[(2)]);
var inst_117251__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_117250__$1);
var inst_117252 = (function (){var all_files = inst_117247;
var res_SINGLEQUOTE_ = inst_117250__$1;
var res = inst_117251__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_117251,inst_117255,inst_117250,inst_117247,inst_117250__$1,inst_117251__$1,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__117176_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__117176_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_117251,inst_117255,inst_117250,inst_117247,inst_117250__$1,inst_117251__$1,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_117253 = cljs.core.filter.call(null,inst_117252,inst_117250__$1);
var inst_117254 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_117255__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_117254);
var inst_117256 = cljs.core.not_empty.call(null,inst_117255__$1);
var state_117334__$1 = (function (){var statearr_117362 = state_117334;
(statearr_117362[(23)] = inst_117251__$1);

(statearr_117362[(26)] = inst_117253);

(statearr_117362[(24)] = inst_117255__$1);

(statearr_117362[(25)] = inst_117250__$1);

return statearr_117362;
})();
if(cljs.core.truth_(inst_117256)){
var statearr_117363_117440 = state_117334__$1;
(statearr_117363_117440[(1)] = (23));

} else {
var statearr_117364_117441 = state_117334__$1;
(statearr_117364_117441[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (36))){
var state_117334__$1 = state_117334;
var statearr_117365_117442 = state_117334__$1;
(statearr_117365_117442[(2)] = false);

(statearr_117365_117442[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (41))){
var inst_117309 = (state_117334[(20)]);
var inst_117313 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_117314 = cljs.core.map.call(null,inst_117313,inst_117309);
var inst_117315 = cljs.core.pr_str.call(null,inst_117314);
var inst_117316 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_117315)].join('');
var inst_117317 = figwheel.client.utils.log.call(null,inst_117316);
var state_117334__$1 = state_117334;
var statearr_117366_117443 = state_117334__$1;
(statearr_117366_117443[(2)] = inst_117317);

(statearr_117366_117443[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (43))){
var inst_117310 = (state_117334[(21)]);
var inst_117320 = (state_117334[(2)]);
var inst_117321 = cljs.core.not_empty.call(null,inst_117310);
var state_117334__$1 = (function (){var statearr_117367 = state_117334;
(statearr_117367[(27)] = inst_117320);

return statearr_117367;
})();
if(cljs.core.truth_(inst_117321)){
var statearr_117368_117444 = state_117334__$1;
(statearr_117368_117444[(1)] = (44));

} else {
var statearr_117369_117445 = state_117334__$1;
(statearr_117369_117445[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (29))){
var inst_117287 = (state_117334[(16)]);
var inst_117251 = (state_117334[(23)]);
var inst_117253 = (state_117334[(26)]);
var inst_117255 = (state_117334[(24)]);
var inst_117250 = (state_117334[(25)]);
var inst_117247 = (state_117334[(19)]);
var inst_117283 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_117286 = (function (){var all_files = inst_117247;
var res_SINGLEQUOTE_ = inst_117250;
var res = inst_117251;
var files_not_loaded = inst_117253;
var dependencies_that_loaded = inst_117255;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_117287,inst_117251,inst_117253,inst_117255,inst_117250,inst_117247,inst_117283,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__117285){
var map__117370 = p__117285;
var map__117370__$1 = ((((!((map__117370 == null)))?((((map__117370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117370):map__117370);
var namespace = cljs.core.get.call(null,map__117370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_117287,inst_117251,inst_117253,inst_117255,inst_117250,inst_117247,inst_117283,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_117287__$1 = cljs.core.group_by.call(null,inst_117286,inst_117253);
var inst_117289 = (inst_117287__$1 == null);
var inst_117290 = cljs.core.not.call(null,inst_117289);
var state_117334__$1 = (function (){var statearr_117372 = state_117334;
(statearr_117372[(16)] = inst_117287__$1);

(statearr_117372[(28)] = inst_117283);

return statearr_117372;
})();
if(inst_117290){
var statearr_117373_117446 = state_117334__$1;
(statearr_117373_117446[(1)] = (32));

} else {
var statearr_117374_117447 = state_117334__$1;
(statearr_117374_117447[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (44))){
var inst_117310 = (state_117334[(21)]);
var inst_117323 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_117310);
var inst_117324 = cljs.core.pr_str.call(null,inst_117323);
var inst_117325 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_117324)].join('');
var inst_117326 = figwheel.client.utils.log.call(null,inst_117325);
var state_117334__$1 = state_117334;
var statearr_117375_117448 = state_117334__$1;
(statearr_117375_117448[(2)] = inst_117326);

(statearr_117375_117448[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (6))){
var inst_117228 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
var statearr_117376_117449 = state_117334__$1;
(statearr_117376_117449[(2)] = inst_117228);

(statearr_117376_117449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (28))){
var inst_117253 = (state_117334[(26)]);
var inst_117280 = (state_117334[(2)]);
var inst_117281 = cljs.core.not_empty.call(null,inst_117253);
var state_117334__$1 = (function (){var statearr_117377 = state_117334;
(statearr_117377[(29)] = inst_117280);

return statearr_117377;
})();
if(cljs.core.truth_(inst_117281)){
var statearr_117378_117450 = state_117334__$1;
(statearr_117378_117450[(1)] = (29));

} else {
var statearr_117379_117451 = state_117334__$1;
(statearr_117379_117451[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (25))){
var inst_117251 = (state_117334[(23)]);
var inst_117267 = (state_117334[(2)]);
var inst_117268 = cljs.core.not_empty.call(null,inst_117251);
var state_117334__$1 = (function (){var statearr_117380 = state_117334;
(statearr_117380[(30)] = inst_117267);

return statearr_117380;
})();
if(cljs.core.truth_(inst_117268)){
var statearr_117381_117452 = state_117334__$1;
(statearr_117381_117452[(1)] = (26));

} else {
var statearr_117382_117453 = state_117334__$1;
(statearr_117382_117453[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (34))){
var inst_117303 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
if(cljs.core.truth_(inst_117303)){
var statearr_117383_117454 = state_117334__$1;
(statearr_117383_117454[(1)] = (38));

} else {
var statearr_117384_117455 = state_117334__$1;
(statearr_117384_117455[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (17))){
var state_117334__$1 = state_117334;
var statearr_117385_117456 = state_117334__$1;
(statearr_117385_117456[(2)] = recompile_dependents);

(statearr_117385_117456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (3))){
var state_117334__$1 = state_117334;
var statearr_117386_117457 = state_117334__$1;
(statearr_117386_117457[(2)] = null);

(statearr_117386_117457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (12))){
var inst_117224 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
var statearr_117387_117458 = state_117334__$1;
(statearr_117387_117458[(2)] = inst_117224);

(statearr_117387_117458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (2))){
var inst_117186 = (state_117334[(13)]);
var inst_117193 = cljs.core.seq.call(null,inst_117186);
var inst_117194 = inst_117193;
var inst_117195 = null;
var inst_117196 = (0);
var inst_117197 = (0);
var state_117334__$1 = (function (){var statearr_117388 = state_117334;
(statearr_117388[(7)] = inst_117196);

(statearr_117388[(8)] = inst_117197);

(statearr_117388[(9)] = inst_117195);

(statearr_117388[(10)] = inst_117194);

return statearr_117388;
})();
var statearr_117389_117459 = state_117334__$1;
(statearr_117389_117459[(2)] = null);

(statearr_117389_117459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (23))){
var inst_117251 = (state_117334[(23)]);
var inst_117253 = (state_117334[(26)]);
var inst_117255 = (state_117334[(24)]);
var inst_117250 = (state_117334[(25)]);
var inst_117247 = (state_117334[(19)]);
var inst_117258 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_117260 = (function (){var all_files = inst_117247;
var res_SINGLEQUOTE_ = inst_117250;
var res = inst_117251;
var files_not_loaded = inst_117253;
var dependencies_that_loaded = inst_117255;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_117251,inst_117253,inst_117255,inst_117250,inst_117247,inst_117258,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__117259){
var map__117390 = p__117259;
var map__117390__$1 = ((((!((map__117390 == null)))?((((map__117390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117390):map__117390);
var request_url = cljs.core.get.call(null,map__117390__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_117251,inst_117253,inst_117255,inst_117250,inst_117247,inst_117258,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_117261 = cljs.core.reverse.call(null,inst_117255);
var inst_117262 = cljs.core.map.call(null,inst_117260,inst_117261);
var inst_117263 = cljs.core.pr_str.call(null,inst_117262);
var inst_117264 = figwheel.client.utils.log.call(null,inst_117263);
var state_117334__$1 = (function (){var statearr_117392 = state_117334;
(statearr_117392[(31)] = inst_117258);

return statearr_117392;
})();
var statearr_117393_117460 = state_117334__$1;
(statearr_117393_117460[(2)] = inst_117264);

(statearr_117393_117460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (35))){
var state_117334__$1 = state_117334;
var statearr_117394_117461 = state_117334__$1;
(statearr_117394_117461[(2)] = true);

(statearr_117394_117461[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (19))){
var inst_117237 = (state_117334[(12)]);
var inst_117243 = figwheel.client.file_reloading.expand_files.call(null,inst_117237);
var state_117334__$1 = state_117334;
var statearr_117395_117462 = state_117334__$1;
(statearr_117395_117462[(2)] = inst_117243);

(statearr_117395_117462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (11))){
var state_117334__$1 = state_117334;
var statearr_117396_117463 = state_117334__$1;
(statearr_117396_117463[(2)] = null);

(statearr_117396_117463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (9))){
var inst_117226 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
var statearr_117397_117464 = state_117334__$1;
(statearr_117397_117464[(2)] = inst_117226);

(statearr_117397_117464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (5))){
var inst_117196 = (state_117334[(7)]);
var inst_117197 = (state_117334[(8)]);
var inst_117199 = (inst_117197 < inst_117196);
var inst_117200 = inst_117199;
var state_117334__$1 = state_117334;
if(cljs.core.truth_(inst_117200)){
var statearr_117398_117465 = state_117334__$1;
(statearr_117398_117465[(1)] = (7));

} else {
var statearr_117399_117466 = state_117334__$1;
(statearr_117399_117466[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (14))){
var inst_117207 = (state_117334[(22)]);
var inst_117216 = cljs.core.first.call(null,inst_117207);
var inst_117217 = figwheel.client.file_reloading.eval_body.call(null,inst_117216,opts);
var inst_117218 = cljs.core.next.call(null,inst_117207);
var inst_117194 = inst_117218;
var inst_117195 = null;
var inst_117196 = (0);
var inst_117197 = (0);
var state_117334__$1 = (function (){var statearr_117400 = state_117334;
(statearr_117400[(7)] = inst_117196);

(statearr_117400[(8)] = inst_117197);

(statearr_117400[(32)] = inst_117217);

(statearr_117400[(9)] = inst_117195);

(statearr_117400[(10)] = inst_117194);

return statearr_117400;
})();
var statearr_117401_117467 = state_117334__$1;
(statearr_117401_117467[(2)] = null);

(statearr_117401_117467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (45))){
var state_117334__$1 = state_117334;
var statearr_117402_117468 = state_117334__$1;
(statearr_117402_117468[(2)] = null);

(statearr_117402_117468[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (26))){
var inst_117251 = (state_117334[(23)]);
var inst_117253 = (state_117334[(26)]);
var inst_117255 = (state_117334[(24)]);
var inst_117250 = (state_117334[(25)]);
var inst_117247 = (state_117334[(19)]);
var inst_117270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_117272 = (function (){var all_files = inst_117247;
var res_SINGLEQUOTE_ = inst_117250;
var res = inst_117251;
var files_not_loaded = inst_117253;
var dependencies_that_loaded = inst_117255;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_117251,inst_117253,inst_117255,inst_117250,inst_117247,inst_117270,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__117271){
var map__117403 = p__117271;
var map__117403__$1 = ((((!((map__117403 == null)))?((((map__117403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117403):map__117403);
var namespace = cljs.core.get.call(null,map__117403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__117403__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_117251,inst_117253,inst_117255,inst_117250,inst_117247,inst_117270,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_117273 = cljs.core.map.call(null,inst_117272,inst_117251);
var inst_117274 = cljs.core.pr_str.call(null,inst_117273);
var inst_117275 = figwheel.client.utils.log.call(null,inst_117274);
var inst_117276 = (function (){var all_files = inst_117247;
var res_SINGLEQUOTE_ = inst_117250;
var res = inst_117251;
var files_not_loaded = inst_117253;
var dependencies_that_loaded = inst_117255;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_117251,inst_117253,inst_117255,inst_117250,inst_117247,inst_117270,inst_117272,inst_117273,inst_117274,inst_117275,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_117251,inst_117253,inst_117255,inst_117250,inst_117247,inst_117270,inst_117272,inst_117273,inst_117274,inst_117275,state_val_117335,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_117277 = setTimeout(inst_117276,(10));
var state_117334__$1 = (function (){var statearr_117405 = state_117334;
(statearr_117405[(33)] = inst_117275);

(statearr_117405[(34)] = inst_117270);

return statearr_117405;
})();
var statearr_117406_117469 = state_117334__$1;
(statearr_117406_117469[(2)] = inst_117277);

(statearr_117406_117469[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (16))){
var state_117334__$1 = state_117334;
var statearr_117407_117470 = state_117334__$1;
(statearr_117407_117470[(2)] = reload_dependents);

(statearr_117407_117470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (38))){
var inst_117287 = (state_117334[(16)]);
var inst_117305 = cljs.core.apply.call(null,cljs.core.hash_map,inst_117287);
var state_117334__$1 = state_117334;
var statearr_117408_117471 = state_117334__$1;
(statearr_117408_117471[(2)] = inst_117305);

(statearr_117408_117471[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (30))){
var state_117334__$1 = state_117334;
var statearr_117409_117472 = state_117334__$1;
(statearr_117409_117472[(2)] = null);

(statearr_117409_117472[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (10))){
var inst_117207 = (state_117334[(22)]);
var inst_117209 = cljs.core.chunked_seq_QMARK_.call(null,inst_117207);
var state_117334__$1 = state_117334;
if(inst_117209){
var statearr_117410_117473 = state_117334__$1;
(statearr_117410_117473[(1)] = (13));

} else {
var statearr_117411_117474 = state_117334__$1;
(statearr_117411_117474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (18))){
var inst_117241 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
if(cljs.core.truth_(inst_117241)){
var statearr_117412_117475 = state_117334__$1;
(statearr_117412_117475[(1)] = (19));

} else {
var statearr_117413_117476 = state_117334__$1;
(statearr_117413_117476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (42))){
var state_117334__$1 = state_117334;
var statearr_117414_117477 = state_117334__$1;
(statearr_117414_117477[(2)] = null);

(statearr_117414_117477[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (37))){
var inst_117300 = (state_117334[(2)]);
var state_117334__$1 = state_117334;
var statearr_117415_117478 = state_117334__$1;
(statearr_117415_117478[(2)] = inst_117300);

(statearr_117415_117478[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117335 === (8))){
var inst_117207 = (state_117334[(22)]);
var inst_117194 = (state_117334[(10)]);
var inst_117207__$1 = cljs.core.seq.call(null,inst_117194);
var state_117334__$1 = (function (){var statearr_117416 = state_117334;
(statearr_117416[(22)] = inst_117207__$1);

return statearr_117416;
})();
if(inst_117207__$1){
var statearr_117417_117479 = state_117334__$1;
(statearr_117417_117479[(1)] = (10));

} else {
var statearr_117418_117480 = state_117334__$1;
(statearr_117418_117480[(1)] = (11));

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
});})(c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__67960__auto__,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto____0 = (function (){
var statearr_117419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_117419[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto__);

(statearr_117419[(1)] = (1));

return statearr_117419;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto____1 = (function (state_117334){
while(true){
var ret_value__67962__auto__ = (function (){try{while(true){
var result__67963__auto__ = switch__67960__auto__.call(null,state_117334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__67963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__67963__auto__;
}
break;
}
}catch (e117420){if((e117420 instanceof Object)){
var ex__67964__auto__ = e117420;
var statearr_117421_117481 = state_117334;
(statearr_117421_117481[(5)] = ex__67964__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e117420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__67962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117482 = state_117334;
state_117334 = G__117482;
continue;
} else {
return ret_value__67962__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto__ = function(state_117334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto____1.call(this,state_117334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__67961__auto__;
})()
;})(switch__67960__auto__,c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__67985__auto__ = (function (){var statearr_117422 = f__67984__auto__.call(null);
(statearr_117422[(6)] = c__67983__auto__);

return statearr_117422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__67985__auto__);
});})(c__67983__auto__,map__117179,map__117179__$1,opts,before_jsload,on_jsload,reload_dependents,map__117180,map__117180__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__67983__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__117485,link){
var map__117486 = p__117485;
var map__117486__$1 = ((((!((map__117486 == null)))?((((map__117486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117486):map__117486);
var file = cljs.core.get.call(null,map__117486__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__117486,map__117486__$1,file){
return (function (p1__117483_SHARP_,p2__117484_SHARP_){
if(cljs.core._EQ_.call(null,p1__117483_SHARP_,p2__117484_SHARP_)){
return p1__117483_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__117486,map__117486__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__117489){
var map__117490 = p__117489;
var map__117490__$1 = ((((!((map__117490 == null)))?((((map__117490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117490):map__117490);
var match_length = cljs.core.get.call(null,map__117490__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__117490__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__117488_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__117488_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__117492_SHARP_,p2__117493_SHARP_){
return cljs.core.assoc.call(null,p1__117492_SHARP_,cljs.core.get.call(null,p2__117493_SHARP_,key),p2__117493_SHARP_);
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
var loaded_f_datas_117494 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_117494);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_117494);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__117495,p__117496){
var map__117497 = p__117495;
var map__117497__$1 = ((((!((map__117497 == null)))?((((map__117497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117497):map__117497);
var on_cssload = cljs.core.get.call(null,map__117497__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__117498 = p__117496;
var map__117498__$1 = ((((!((map__117498 == null)))?((((map__117498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117498):map__117498);
var files_msg = map__117498__$1;
var files = cljs.core.get.call(null,map__117498__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1505927830227
