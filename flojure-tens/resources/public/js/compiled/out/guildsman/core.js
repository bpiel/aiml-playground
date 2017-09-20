// Compiled by ClojureScript 1.9.908 {}
goog.provide('guildsman.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('devtools.core');
goog.require('figwheel.client');
goog.require('cognitect.transit');
goog.require('cljsjs.d3');
goog.require('guildsman.histogram_series');
goog.require('guildsman.cytoscape');
goog.require('goog.History');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"start loading");
guildsman.core.ws_conn = cljs.core.atom.call(null,null);
guildsman.core.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
guildsman.core.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"left","left",-399115937),(function (db,_){
return new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"right","right",-452581833),(function (db,_){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(db);
}));
guildsman.core.init_cyto = (function guildsman$core$init_cyto(m){
return cytoscape(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),document.getElementById("app"),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"dagre"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"node",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"data(name)"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"edge",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, ["curve-style","unbundled-bezier",new cljs.core.Keyword(null,"control-point-distances","control-point-distances",-74004649),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20)], null),new cljs.core.Keyword(null,"control-point-weights","control-point-weights",-1956061709),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null)], null)], null)], null),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"edges","edges",-694791395)], null))], null)));
});
guildsman.core.components = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"histos","histos",1926565943,null),new cljs.core.Var(function(){return guildsman.histogram_series.histogram_series;},new cljs.core.Symbol("guildsman.histogram-series","histogram-series","guildsman.histogram-series/histogram-series",882868166,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guildsman.histogram-series","guildsman.histogram-series",-1477011424,null),new cljs.core.Symbol(null,"histogram-series","histogram-series",1553154010,null),"src/cljs/guildsman/histogram_series.cljs",23,1,60,60,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(guildsman.histogram_series.histogram_series)?guildsman.histogram_series.histogram_series.cljs$lang$test:null)])),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Var(function(){return guildsman.cytoscape.cytoscape;},new cljs.core.Symbol("guildsman.cytoscape","cytoscape","guildsman.cytoscape/cytoscape",1353209160,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guildsman.cytoscape","guildsman.cytoscape",-1875550483,null),new cljs.core.Symbol(null,"cytoscape","cytoscape",2032419273,null),"src/cljs/guildsman/cytoscape.cljs",16,1,310,310,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(guildsman.cytoscape.cytoscape)?guildsman.cytoscape.cytoscape.cljs$lang$test:null)])),new cljs.core.Symbol(null,"v-box","v-box",5238454,null),re_com.core.v_box,new cljs.core.Symbol(null,"h-box","h-box",1637186817,null),re_com.core.h_box], null);
guildsman.core.mk_renderable = (function guildsman$core$mk_renderable(v){
return clojure.walk.prewalk_replace.call(null,guildsman.core.components,v);
});
guildsman.core.dispatch_ws_msg = (function guildsman$core$dispatch_ws_msg(msg){
return reagent.core.render.call(null,guildsman.core.mk_renderable.call(null,msg),document.getElementById("app"));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ws-inbound","ws-inbound",994735957),(function (db,p__136659){
var vec__136660 = p__136659;
var _ = cljs.core.nth.call(null,vec__136660,(0),null);
var map__136663 = cljs.core.nth.call(null,vec__136660,(1),null);
var map__136663__$1 = ((((!((map__136663 == null)))?((((map__136663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__136663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__136663):map__136663);
var p = map__136663__$1;
var left = cljs.core.get.call(null,map__136663__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__136663__$1,new cljs.core.Keyword(null,"right","right",-452581833));
cljs.core.println.call(null,p);

return cljs.core.merge.call(null,db,(cljs.core.truth_(left)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),guildsman.core.mk_renderable.call(null,left)], null):null),(cljs.core.truth_(right)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),guildsman.core.mk_renderable.call(null,right)], null):null));
}));
guildsman.core.ws_onmessage = (function guildsman$core$ws_onmessage(data){
cljs.core.println.call(null,data.data);

var d = cognitect.transit.read.call(null,guildsman.core.json_reader,data.data);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-inbound","ws-inbound",994735957),d], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ws-init","ws-init",-1786192831),(function (db,_){
var temp__6736__auto___136665 = (new WebSocket(["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),"/ws"].join('')));
if(cljs.core.truth_(temp__6736__auto___136665)){
var ws_136666 = temp__6736__auto___136665;
cljs.core.println.call(null,"ws init'd!");

ws_136666.onmessage = guildsman.core.ws_onmessage;

cljs.core.reset_BANG_.call(null,guildsman.core.ws_conn,ws_136666);
} else {
throw (new Error("Websocket connection failed!"));
}

return db;
}));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws");
cljs.core.println.call(null,"done loading.");
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"loaded"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null);
}));
guildsman.core.page = (function guildsman$core$page(){
var left = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937)], null)));
var right = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)], null);
});
guildsman.core.init_BANG_ = (function guildsman$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-init","ws-init",-1786192831)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return guildsman.core.page;},new cljs.core.Symbol("guildsman.core","page","guildsman.core/page",-1281679159,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guildsman.core","guildsman.core",1813441153,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src/cljs/guildsman/core.cljs",11,1,121,121,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(guildsman.core.page)?guildsman.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
guildsman.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1505932716554
