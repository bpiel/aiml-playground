// Compiled by ClojureScript 1.9.908 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__116393_116397 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__116394_116398 = null;
var count__116395_116399 = (0);
var i__116396_116400 = (0);
while(true){
if((i__116396_116400 < count__116395_116399)){
var k_116401 = cljs.core._nth.call(null,chunk__116394_116398,i__116396_116400);
var v_116402 = (b[k_116401]);
(a[k_116401] = v_116402);

var G__116403 = seq__116393_116397;
var G__116404 = chunk__116394_116398;
var G__116405 = count__116395_116399;
var G__116406 = (i__116396_116400 + (1));
seq__116393_116397 = G__116403;
chunk__116394_116398 = G__116404;
count__116395_116399 = G__116405;
i__116396_116400 = G__116406;
continue;
} else {
var temp__6738__auto___116407 = cljs.core.seq.call(null,seq__116393_116397);
if(temp__6738__auto___116407){
var seq__116393_116408__$1 = temp__6738__auto___116407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116393_116408__$1)){
var c__59059__auto___116409 = cljs.core.chunk_first.call(null,seq__116393_116408__$1);
var G__116410 = cljs.core.chunk_rest.call(null,seq__116393_116408__$1);
var G__116411 = c__59059__auto___116409;
var G__116412 = cljs.core.count.call(null,c__59059__auto___116409);
var G__116413 = (0);
seq__116393_116397 = G__116410;
chunk__116394_116398 = G__116411;
count__116395_116399 = G__116412;
i__116396_116400 = G__116413;
continue;
} else {
var k_116414 = cljs.core.first.call(null,seq__116393_116408__$1);
var v_116415 = (b[k_116414]);
(a[k_116414] = v_116415);

var G__116416 = cljs.core.next.call(null,seq__116393_116408__$1);
var G__116417 = null;
var G__116418 = (0);
var G__116419 = (0);
seq__116393_116397 = G__116416;
chunk__116394_116398 = G__116417;
count__116395_116399 = G__116418;
i__116396_116400 = G__116419;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__116421 = arguments.length;
switch (G__116421) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__116423 = (i + (2));
var G__116424 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__116423;
ret = G__116424;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__116425_116429 = cljs.core.seq.call(null,v);
var chunk__116426_116430 = null;
var count__116427_116431 = (0);
var i__116428_116432 = (0);
while(true){
if((i__116428_116432 < count__116427_116431)){
var x_116433 = cljs.core._nth.call(null,chunk__116426_116430,i__116428_116432);
ret.push(x_116433);

var G__116434 = seq__116425_116429;
var G__116435 = chunk__116426_116430;
var G__116436 = count__116427_116431;
var G__116437 = (i__116428_116432 + (1));
seq__116425_116429 = G__116434;
chunk__116426_116430 = G__116435;
count__116427_116431 = G__116436;
i__116428_116432 = G__116437;
continue;
} else {
var temp__6738__auto___116438 = cljs.core.seq.call(null,seq__116425_116429);
if(temp__6738__auto___116438){
var seq__116425_116439__$1 = temp__6738__auto___116438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116425_116439__$1)){
var c__59059__auto___116440 = cljs.core.chunk_first.call(null,seq__116425_116439__$1);
var G__116441 = cljs.core.chunk_rest.call(null,seq__116425_116439__$1);
var G__116442 = c__59059__auto___116440;
var G__116443 = cljs.core.count.call(null,c__59059__auto___116440);
var G__116444 = (0);
seq__116425_116429 = G__116441;
chunk__116426_116430 = G__116442;
count__116427_116431 = G__116443;
i__116428_116432 = G__116444;
continue;
} else {
var x_116445 = cljs.core.first.call(null,seq__116425_116439__$1);
ret.push(x_116445);

var G__116446 = cljs.core.next.call(null,seq__116425_116439__$1);
var G__116447 = null;
var G__116448 = (0);
var G__116449 = (0);
seq__116425_116429 = G__116446;
chunk__116426_116430 = G__116447;
count__116427_116431 = G__116448;
i__116428_116432 = G__116449;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__116450_116454 = cljs.core.seq.call(null,v);
var chunk__116451_116455 = null;
var count__116452_116456 = (0);
var i__116453_116457 = (0);
while(true){
if((i__116453_116457 < count__116452_116456)){
var x_116458 = cljs.core._nth.call(null,chunk__116451_116455,i__116453_116457);
ret.push(x_116458);

var G__116459 = seq__116450_116454;
var G__116460 = chunk__116451_116455;
var G__116461 = count__116452_116456;
var G__116462 = (i__116453_116457 + (1));
seq__116450_116454 = G__116459;
chunk__116451_116455 = G__116460;
count__116452_116456 = G__116461;
i__116453_116457 = G__116462;
continue;
} else {
var temp__6738__auto___116463 = cljs.core.seq.call(null,seq__116450_116454);
if(temp__6738__auto___116463){
var seq__116450_116464__$1 = temp__6738__auto___116463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116450_116464__$1)){
var c__59059__auto___116465 = cljs.core.chunk_first.call(null,seq__116450_116464__$1);
var G__116466 = cljs.core.chunk_rest.call(null,seq__116450_116464__$1);
var G__116467 = c__59059__auto___116465;
var G__116468 = cljs.core.count.call(null,c__59059__auto___116465);
var G__116469 = (0);
seq__116450_116454 = G__116466;
chunk__116451_116455 = G__116467;
count__116452_116456 = G__116468;
i__116453_116457 = G__116469;
continue;
} else {
var x_116470 = cljs.core.first.call(null,seq__116450_116464__$1);
ret.push(x_116470);

var G__116471 = cljs.core.next.call(null,seq__116450_116464__$1);
var G__116472 = null;
var G__116473 = (0);
var G__116474 = (0);
seq__116450_116454 = G__116471;
chunk__116451_116455 = G__116472;
count__116452_116456 = G__116473;
i__116453_116457 = G__116474;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__116475_116479 = cljs.core.seq.call(null,v);
var chunk__116476_116480 = null;
var count__116477_116481 = (0);
var i__116478_116482 = (0);
while(true){
if((i__116478_116482 < count__116477_116481)){
var x_116483 = cljs.core._nth.call(null,chunk__116476_116480,i__116478_116482);
ret.push(x_116483);

var G__116484 = seq__116475_116479;
var G__116485 = chunk__116476_116480;
var G__116486 = count__116477_116481;
var G__116487 = (i__116478_116482 + (1));
seq__116475_116479 = G__116484;
chunk__116476_116480 = G__116485;
count__116477_116481 = G__116486;
i__116478_116482 = G__116487;
continue;
} else {
var temp__6738__auto___116488 = cljs.core.seq.call(null,seq__116475_116479);
if(temp__6738__auto___116488){
var seq__116475_116489__$1 = temp__6738__auto___116488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116475_116489__$1)){
var c__59059__auto___116490 = cljs.core.chunk_first.call(null,seq__116475_116489__$1);
var G__116491 = cljs.core.chunk_rest.call(null,seq__116475_116489__$1);
var G__116492 = c__59059__auto___116490;
var G__116493 = cljs.core.count.call(null,c__59059__auto___116490);
var G__116494 = (0);
seq__116475_116479 = G__116491;
chunk__116476_116480 = G__116492;
count__116477_116481 = G__116493;
i__116478_116482 = G__116494;
continue;
} else {
var x_116495 = cljs.core.first.call(null,seq__116475_116489__$1);
ret.push(x_116495);

var G__116496 = cljs.core.next.call(null,seq__116475_116489__$1);
var G__116497 = null;
var G__116498 = (0);
var G__116499 = (0);
seq__116475_116479 = G__116496;
chunk__116476_116480 = G__116497;
count__116477_116481 = G__116498;
i__116478_116482 = G__116499;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__116501 = arguments.length;
switch (G__116501) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__116502 = obj;
G__116502.push(kfn.call(null,k),vfn.call(null,v));

return G__116502;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x116503 = cljs.core.clone.call(null,handlers);
x116503.forEach = ((function (x116503,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__116504 = cljs.core.seq.call(null,coll);
var chunk__116505 = null;
var count__116506 = (0);
var i__116507 = (0);
while(true){
if((i__116507 < count__116506)){
var vec__116508 = cljs.core._nth.call(null,chunk__116505,i__116507);
var k = cljs.core.nth.call(null,vec__116508,(0),null);
var v = cljs.core.nth.call(null,vec__116508,(1),null);
f.call(null,v,k);

var G__116515 = seq__116504;
var G__116516 = chunk__116505;
var G__116517 = count__116506;
var G__116518 = (i__116507 + (1));
seq__116504 = G__116515;
chunk__116505 = G__116516;
count__116506 = G__116517;
i__116507 = G__116518;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__116504);
if(temp__6738__auto__){
var seq__116504__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__116504__$1)){
var c__59059__auto__ = cljs.core.chunk_first.call(null,seq__116504__$1);
var G__116519 = cljs.core.chunk_rest.call(null,seq__116504__$1);
var G__116520 = c__59059__auto__;
var G__116521 = cljs.core.count.call(null,c__59059__auto__);
var G__116522 = (0);
seq__116504 = G__116519;
chunk__116505 = G__116520;
count__116506 = G__116521;
i__116507 = G__116522;
continue;
} else {
var vec__116511 = cljs.core.first.call(null,seq__116504__$1);
var k = cljs.core.nth.call(null,vec__116511,(0),null);
var v = cljs.core.nth.call(null,vec__116511,(1),null);
f.call(null,v,k);

var G__116523 = cljs.core.next.call(null,seq__116504__$1);
var G__116524 = null;
var G__116525 = (0);
var G__116526 = (0);
seq__116504 = G__116523;
chunk__116505 = G__116524;
count__116506 = G__116525;
i__116507 = G__116526;
continue;
}
} else {
return null;
}
}
break;
}
});})(x116503,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x116503;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__116528 = arguments.length;
switch (G__116528) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit116529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit116529 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta116530){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta116530 = meta116530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cognitect.transit.t_cognitect$transit116529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_116531,meta116530__$1){
var self__ = this;
var _116531__$1 = this;
return (new cognitect.transit.t_cognitect$transit116529(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta116530__$1));
});

cognitect.transit.t_cognitect$transit116529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_116531){
var self__ = this;
var _116531__$1 = this;
return self__.meta116530;
});

cognitect.transit.t_cognitect$transit116529.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit116529.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit116529.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit116529.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit116529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta116530","meta116530",-2130233284,null)], null);
});

cognitect.transit.t_cognitect$transit116529.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit116529.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit116529";

cognitect.transit.t_cognitect$transit116529.cljs$lang$ctorPrWriter = (function (this__58799__auto__,writer__58800__auto__,opt__58801__auto__){
return cljs.core._write.call(null,writer__58800__auto__,"cognitect.transit/t_cognitect$transit116529");
});

cognitect.transit.__GT_t_cognitect$transit116529 = (function cognitect$transit$__GT_t_cognitect$transit116529(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta116530){
return (new cognitect.transit.t_cognitect$transit116529(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta116530));
});

}

return (new cognitect.transit.t_cognitect$transit116529(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__58128__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__58128__auto__)){
return or__58128__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});

//# sourceMappingURL=transit.js.map?rel=1505927828551
