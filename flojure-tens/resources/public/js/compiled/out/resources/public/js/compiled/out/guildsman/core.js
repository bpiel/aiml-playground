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
goog.require('guildsman.chart');
goog.require('goog.History');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"start loading");
guildsman.core.ws_conn = cljs.core.atom.call(null,null);
guildsman.core.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
guildsman.core.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
guildsman.core.init_cyto = (function guildsman$core$init_cyto(m){
return cytoscape(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),document.getElementById("app"),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"dagre"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"node",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"data(name)"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"edge",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, ["curve-style","unbundled-bezier",new cljs.core.Keyword(null,"control-point-distances","control-point-distances",-74004649),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20)], null),new cljs.core.Keyword(null,"control-point-weights","control-point-weights",-1956061709),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null)], null)], null)], null),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"edges","edges",-694791395)], null))], null)));
});
guildsman.core.dispatch_ws_msg = (function guildsman$core$dispatch_ws_msg(p__71095){
var map__71096 = p__71095;
var map__71096__$1 = ((((!((map__71096 == null)))?((((map__71096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71096):map__71096);
var msg = map__71096__$1;
var cmd = cljs.core.get.call(null,map__71096__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),msg], null),document.getElementById("app"));
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
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.chart.chart,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(0)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data1",(1),(4),(2),(5)], null)], null)], null),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),null,new cljs.core.Keyword(null,"selected","selected",574897764),null], null)], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1504748227902
