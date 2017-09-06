// Compiled by ClojureScript 1.9.908 {}
goog.provide('guildsman.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('devtools.core');
goog.require('figwheel.client');
goog.require('cognitect.transit');
goog.require('cljsjs.c3');
goog.require('goog.History');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"start loading");
guildsman.core.ws_conn = cljs.core.atom.call(null,null);
guildsman.core.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
guildsman.core.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
guildsman.core.chart = (function guildsman$core$chart(m){
cljs.core.println.call(null,"chart");

cljs.core.println.call(null,m);

return c3.generate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data'","data'",-536549145,null),(1),(3),(7),(2)], null)], null)], null)], null)));
});
guildsman.core.init_cyto = (function guildsman$core$init_cyto(m){
return cytoscape(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),document.getElementById("app"),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"dagre"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"node",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"data(name)"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"edge",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, ["curve-style","unbundled-bezier",new cljs.core.Keyword(null,"control-point-distances","control-point-distances",-74004649),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20)], null),new cljs.core.Keyword(null,"control-point-weights","control-point-weights",-1956061709),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null)], null)], null)], null),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"edges","edges",-694791395)], null))], null)));
});
guildsman.core.dispatch_ws_msg = (function guildsman$core$dispatch_ws_msg(p__69199){
var map__69200 = p__69199;
var map__69200__$1 = ((((!((map__69200 == null)))?((((map__69200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69200):map__69200);
var msg = map__69200__$1;
var cmd = cljs.core.get.call(null,map__69200__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var G__69202 = cmd;
var G__69202__$1 = (((G__69202 instanceof cljs.core.Keyword))?G__69202.fqn:null);
switch (G__69202__$1) {
case "graph":
return guildsman.core.init_cyto.call(null,msg);

break;
case "chart":
return guildsman.core.chart.call(null,msg);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69202__$1)].join('')));

}
});
guildsman.core.ws_onmessage = (function guildsman$core$ws_onmessage(data){
cljs.core.println.call(null,data.data);

var d = cognitect.transit.read.call(null,guildsman.core.json_reader,data.data);
cljs.core.println.call(null,d);

return guildsman.core.dispatch_ws_msg.call(null,d);
});
guildsman.core.init_ws = (function guildsman$core$init_ws(){
var temp__6736__auto__ = (new WebSocket(["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),"/ws"].join('')));
if(cljs.core.truth_(temp__6736__auto__)){
var ws = temp__6736__auto__;
ws.onmessage = guildsman.core.ws_onmessage;

return cljs.core.reset_BANG_.call(null,guildsman.core.ws_conn,ws);
} else {
throw (new Error("Websocket connection failed!"));
}
});
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws");
guildsman.core.init_ws.call(null);
cljs.core.println.call(null,"done loading.");

//# sourceMappingURL=core.js.map?rel=1504732005750
