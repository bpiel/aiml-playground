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
guildsman.core.init_cyto = (function guildsman$core$init_cyto(m){
return cytoscape(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container","container",-1736937707),document.getElementById("app"),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"dagre"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"node",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"data(name)"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),"edge",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, ["curve-style","unbundled-bezier",new cljs.core.Keyword(null,"control-point-distances","control-point-distances",-74004649),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20)], null),new cljs.core.Keyword(null,"control-point-weights","control-point-weights",-1956061709),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null)], null)], null)], null),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"edges","edges",-694791395)], null))], null)));
});
guildsman.core.components = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("$","graph","$/graph",-1096336384,null),new cljs.core.Var(function(){return guildsman.cytoscape.cytoscape;},new cljs.core.Symbol("guildsman.cytoscape","cytoscape","guildsman.cytoscape/cytoscape",1353209160,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guildsman.cytoscape","guildsman.cytoscape",-1875550483,null),new cljs.core.Symbol(null,"cytoscape","cytoscape",2032419273,null),"src/cljs/guildsman/cytoscape.cljs",16,1,309,309,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(guildsman.cytoscape.cytoscape)?guildsman.cytoscape.cytoscape.cljs$lang$test:null)])),new cljs.core.Symbol("$","v-box","$/v-box",5238418,null),re_com.core.v_box,new cljs.core.Symbol("$","h-box","$/h-box",1637186877,null),re_com.core.h_box], null);
guildsman.core.dispatch_ws_msg = (function guildsman$core$dispatch_ws_msg(p__62964){
var map__62965 = p__62964;
var map__62965__$1 = ((((!((map__62965 == null)))?((((map__62965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62965):map__62965);
var msg = map__62965__$1;
var cmd = cljs.core.get.call(null,map__62965__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
return reagent.core.render.call(null,clojure.walk.prewalk_replace.call(null,guildsman.core.components,msg),document.getElementById("app"));
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
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.histogram_series.histogram_series,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"offset",new cljs.core.Keyword(null,"timeProperty","timeProperty",2115950543),"step",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"bins","bins",1670395210),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),-3.0,new cljs.core.Keyword(null,"y","y",-1757859776),1.0,new cljs.core.Keyword(null,"dx","dx",-381796732),1.0], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),-2.0,new cljs.core.Keyword(null,"y","y",-1757859776),2.0,new cljs.core.Keyword(null,"dx","dx",-381796732),1.0], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),-1.0,new cljs.core.Keyword(null,"y","y",-1757859776),5.0,new cljs.core.Keyword(null,"dx","dx",-381796732),1.0], null)], null)], null)], null)], null)], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1505786050659
