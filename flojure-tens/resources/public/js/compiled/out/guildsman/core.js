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
goog.require('goog.History');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"start loading");
guildsman.core.ws_conn = cljs.core.atom.call(null,null);
guildsman.core.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
guildsman.core.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
guildsman.core.init_cyto = (function guildsman$core$init_cyto(m){
return cytoscape(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),document.getElementById("app"),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"dagre"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"node",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"data(name)"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"edge",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, ["curve-style","unbundled-bezier",new cljs.core.Keyword(null,"control-point-distances","control-point-distances",-74004649),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20)], null),new cljs.core.Keyword(null,"control-point-weights","control-point-weights",-1956061709),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null)], null)], null)], null),new cljs.core.Keyword(null,"elements","elements",657646735),m], null)));
});
guildsman.core.ws_onmessage = (function guildsman$core$ws_onmessage(data){
cljs.core.println.call(null,data.data);

var d = cognitect.transit.read.call(null,guildsman.core.json_reader,data.data);
return guildsman.core.init_cyto.call(null,d);
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
cljs.core.println.call(null,"done loading.");

//# sourceMappingURL=core.js.map?rel=1504299773467
