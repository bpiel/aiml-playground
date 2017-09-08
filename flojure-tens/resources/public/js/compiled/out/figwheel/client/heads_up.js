// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24470 = arguments.length;
var i__11088__auto___24471 = (0);
while(true){
if((i__11088__auto___24471 < len__11087__auto___24470)){
args__11094__auto__.push((arguments[i__11088__auto___24471]));

var G__24472 = (i__11088__auto___24471 + (1));
i__11088__auto___24471 = G__24472;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((2) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11095__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24462_24473 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24463_24474 = null;
var count__24464_24475 = (0);
var i__24465_24476 = (0);
while(true){
if((i__24465_24476 < count__24464_24475)){
var k_24477 = cljs.core._nth.call(null,chunk__24463_24474,i__24465_24476);
e.setAttribute(cljs.core.name.call(null,k_24477),cljs.core.get.call(null,attrs,k_24477));

var G__24478 = seq__24462_24473;
var G__24479 = chunk__24463_24474;
var G__24480 = count__24464_24475;
var G__24481 = (i__24465_24476 + (1));
seq__24462_24473 = G__24478;
chunk__24463_24474 = G__24479;
count__24464_24475 = G__24480;
i__24465_24476 = G__24481;
continue;
} else {
var temp__6738__auto___24482 = cljs.core.seq.call(null,seq__24462_24473);
if(temp__6738__auto___24482){
var seq__24462_24483__$1 = temp__6738__auto___24482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24462_24483__$1)){
var c__10741__auto___24484 = cljs.core.chunk_first.call(null,seq__24462_24483__$1);
var G__24485 = cljs.core.chunk_rest.call(null,seq__24462_24483__$1);
var G__24486 = c__10741__auto___24484;
var G__24487 = cljs.core.count.call(null,c__10741__auto___24484);
var G__24488 = (0);
seq__24462_24473 = G__24485;
chunk__24463_24474 = G__24486;
count__24464_24475 = G__24487;
i__24465_24476 = G__24488;
continue;
} else {
var k_24489 = cljs.core.first.call(null,seq__24462_24483__$1);
e.setAttribute(cljs.core.name.call(null,k_24489),cljs.core.get.call(null,attrs,k_24489));

var G__24490 = cljs.core.next.call(null,seq__24462_24483__$1);
var G__24491 = null;
var G__24492 = (0);
var G__24493 = (0);
seq__24462_24473 = G__24490;
chunk__24463_24474 = G__24491;
count__24464_24475 = G__24492;
i__24465_24476 = G__24493;
continue;
}
} else {
}
}
break;
}

var seq__24466_24494 = cljs.core.seq.call(null,children);
var chunk__24467_24495 = null;
var count__24468_24496 = (0);
var i__24469_24497 = (0);
while(true){
if((i__24469_24497 < count__24468_24496)){
var ch_24498 = cljs.core._nth.call(null,chunk__24467_24495,i__24469_24497);
e.appendChild(ch_24498);

var G__24499 = seq__24466_24494;
var G__24500 = chunk__24467_24495;
var G__24501 = count__24468_24496;
var G__24502 = (i__24469_24497 + (1));
seq__24466_24494 = G__24499;
chunk__24467_24495 = G__24500;
count__24468_24496 = G__24501;
i__24469_24497 = G__24502;
continue;
} else {
var temp__6738__auto___24503 = cljs.core.seq.call(null,seq__24466_24494);
if(temp__6738__auto___24503){
var seq__24466_24504__$1 = temp__6738__auto___24503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24466_24504__$1)){
var c__10741__auto___24505 = cljs.core.chunk_first.call(null,seq__24466_24504__$1);
var G__24506 = cljs.core.chunk_rest.call(null,seq__24466_24504__$1);
var G__24507 = c__10741__auto___24505;
var G__24508 = cljs.core.count.call(null,c__10741__auto___24505);
var G__24509 = (0);
seq__24466_24494 = G__24506;
chunk__24467_24495 = G__24507;
count__24468_24496 = G__24508;
i__24469_24497 = G__24509;
continue;
} else {
var ch_24510 = cljs.core.first.call(null,seq__24466_24504__$1);
e.appendChild(ch_24510);

var G__24511 = cljs.core.next.call(null,seq__24466_24504__$1);
var G__24512 = null;
var G__24513 = (0);
var G__24514 = (0);
seq__24466_24494 = G__24511;
chunk__24467_24495 = G__24512;
count__24468_24496 = G__24513;
i__24469_24497 = G__24514;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24459){
var G__24460 = cljs.core.first.call(null,seq24459);
var seq24459__$1 = cljs.core.next.call(null,seq24459);
var G__24461 = cljs.core.first.call(null,seq24459__$1);
var seq24459__$2 = cljs.core.next.call(null,seq24459__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24460,G__24461,seq24459__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__10863__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10864__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10865__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10866__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10867__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__10863__auto__,prefer_table__10864__auto__,method_cache__10865__auto__,cached_hierarchy__10866__auto__,hierarchy__10867__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__10863__auto__,prefer_table__10864__auto__,method_cache__10865__auto__,cached_hierarchy__10866__auto__,hierarchy__10867__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10867__auto__,method_table__10863__auto__,prefer_table__10864__auto__,method_cache__10865__auto__,cached_hierarchy__10866__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_24515 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_24515.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24515.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24515.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24515);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24516,st_map){
var map__24517 = p__24516;
var map__24517__$1 = ((((!((map__24517 == null)))?((((map__24517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24517):map__24517);
var container_el = cljs.core.get.call(null,map__24517__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24517,map__24517__$1,container_el){
return (function (p__24519){
var vec__24520 = p__24519;
var k = cljs.core.nth.call(null,vec__24520,(0),null);
var v = cljs.core.nth.call(null,vec__24520,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__24517,map__24517__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24523,dom_str){
var map__24524 = p__24523;
var map__24524__$1 = ((((!((map__24524 == null)))?((((map__24524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24524):map__24524);
var c = map__24524__$1;
var content_area_el = cljs.core.get.call(null,map__24524__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24526){
var map__24527 = p__24526;
var map__24527__$1 = ((((!((map__24527 == null)))?((((map__24527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24527):map__24527);
var content_area_el = cljs.core.get.call(null,map__24527__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__){
return (function (state_24544){
var state_val_24545 = (state_24544[(1)]);
if((state_val_24545 === (1))){
var inst_24529 = (state_24544[(7)]);
var inst_24529__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24530 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24531 = ["10px","10px","100%","68px","1.0"];
var inst_24532 = cljs.core.PersistentHashMap.fromArrays(inst_24530,inst_24531);
var inst_24533 = cljs.core.merge.call(null,inst_24532,style);
var inst_24534 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24529__$1,inst_24533);
var inst_24535 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24529__$1,msg);
var inst_24536 = cljs.core.async.timeout.call(null,(300));
var state_24544__$1 = (function (){var statearr_24546 = state_24544;
(statearr_24546[(8)] = inst_24535);

(statearr_24546[(7)] = inst_24529__$1);

(statearr_24546[(9)] = inst_24534);

return statearr_24546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24544__$1,(2),inst_24536);
} else {
if((state_val_24545 === (2))){
var inst_24529 = (state_24544[(7)]);
var inst_24538 = (state_24544[(2)]);
var inst_24539 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24540 = ["auto"];
var inst_24541 = cljs.core.PersistentHashMap.fromArrays(inst_24539,inst_24540);
var inst_24542 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24529,inst_24541);
var state_24544__$1 = (function (){var statearr_24547 = state_24544;
(statearr_24547[(10)] = inst_24538);

return statearr_24547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24544__$1,inst_24542);
} else {
return null;
}
}
});})(c__17933__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto____0 = (function (){
var statearr_24548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24548[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto__);

(statearr_24548[(1)] = (1));

return statearr_24548;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto____1 = (function (state_24544){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_24544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e24549){if((e24549 instanceof Object)){
var ex__17847__auto__ = e24549;
var statearr_24550_24552 = state_24544;
(statearr_24550_24552[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24553 = state_24544;
state_24544 = G__24553;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto__ = function(state_24544){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto____1.call(this,state_24544);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__))
})();
var state__17935__auto__ = (function (){var statearr_24551 = f__17934__auto__.call(null);
(statearr_24551[(6)] = c__17933__auto__);

return statearr_24551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__))
);

return c__17933__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__24555 = arguments.length;
switch (G__24555) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__24557){
var map__24558 = p__24557;
var map__24558__$1 = ((((!((map__24558 == null)))?((((map__24558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24558):map__24558);
var file = cljs.core.get.call(null,map__24558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24558__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24558__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__9810__auto__ = file;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__24560){
var vec__24561 = p__24560;
var typ = cljs.core.nth.call(null,vec__24561,(0),null);
var line_number = cljs.core.nth.call(null,vec__24561,(1),null);
var line = cljs.core.nth.call(null,vec__24561,(2),null);
var pred__24564 = cljs.core._EQ_;
var expr__24565 = typ;
if(cljs.core.truth_(pred__24564.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__24565))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__24564.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__24565))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__24564.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__24565))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__24567_SHARP_){
return cljs.core.update_in.call(null,p1__24567_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__24568_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__24568_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__24571){
var map__24572 = p__24571;
var map__24572__$1 = ((((!((map__24572 == null)))?((((map__24572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24572):map__24572);
var exception = map__24572__$1;
var message = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__9798__auto__ = file;
if(cljs.core.truth_(and__9798__auto__)){
return line;
} else {
return and__9798__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__24572,map__24572__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__24569_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24569_SHARP_),"</div>"].join('');
});})(last_message,map__24572,map__24572__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__24572,map__24572__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__24570_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__24570_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__24570_SHARP_)))].join('');
});})(last_message,map__24572,map__24572__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__24574){
var map__24575 = p__24574;
var map__24575__$1 = ((((!((map__24575 == null)))?((((map__24575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24575):map__24575);
var file = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__24578 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__24578__$1 = ((((!((map__24578 == null)))?((((map__24578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24578):map__24578);
var head = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__24581){
var map__24582 = p__24581;
var map__24582__$1 = ((((!((map__24582 == null)))?((((map__24582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24582):map__24582);
var warning_data = map__24582__$1;
var file = cljs.core.get.call(null,map__24582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24582__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24582__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__24582__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__24582__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__9798__auto__ = file;
if(cljs.core.truth_(and__9798__auto__)){
return line;
} else {
return and__9798__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__24582,map__24582__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__24580_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24580_SHARP_),"</div>"].join('');
});})(last_message,map__24582,map__24582__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__24584 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__24584__$1 = ((((!((map__24584 == null)))?((((map__24584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24584):map__24584);
var head = cljs.core.get.call(null,map__24584__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__24584__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__24584__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__24584__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__24584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24584__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24584__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__24586){
var map__24587 = p__24586;
var map__24587__$1 = ((((!((map__24587 == null)))?((((map__24587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24587):map__24587);
var warning_data = map__24587__$1;
var message = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__24589 = message;
var G__24589__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24589)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__24589);
var G__24589__$2 = (cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24589__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__24589__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24589__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__24589__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__24590){
var map__24591 = p__24590;
var map__24591__$1 = ((((!((map__24591 == null)))?((((map__24591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24591):map__24591);
var warning_data = map__24591__$1;
var message = cljs.core.get.call(null,map__24591__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__24591__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24591__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24591__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__24593 = figwheel.client.heads_up.ensure_container.call(null);
var map__24593__$1 = ((((!((map__24593 == null)))?((((map__24593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24593):map__24593);
var content_area_el = cljs.core.get.call(null,map__24593__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__6738__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__6738__auto__)){
var last_child = temp__6738__auto__;
var temp__6736__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__6736__auto__)){
var message_count = temp__6736__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__){
return (function (state_24612){
var state_val_24613 = (state_24612[(1)]);
if((state_val_24613 === (1))){
var inst_24595 = (state_24612[(7)]);
var inst_24595__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24596 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24597 = ["0.0"];
var inst_24598 = cljs.core.PersistentHashMap.fromArrays(inst_24596,inst_24597);
var inst_24599 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24595__$1,inst_24598);
var inst_24600 = cljs.core.async.timeout.call(null,(300));
var state_24612__$1 = (function (){var statearr_24614 = state_24612;
(statearr_24614[(8)] = inst_24599);

(statearr_24614[(7)] = inst_24595__$1);

return statearr_24614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(2),inst_24600);
} else {
if((state_val_24613 === (2))){
var inst_24595 = (state_24612[(7)]);
var inst_24602 = (state_24612[(2)]);
var inst_24603 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24604 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24605 = cljs.core.PersistentHashMap.fromArrays(inst_24603,inst_24604);
var inst_24606 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24595,inst_24605);
var inst_24607 = cljs.core.async.timeout.call(null,(200));
var state_24612__$1 = (function (){var statearr_24615 = state_24612;
(statearr_24615[(9)] = inst_24602);

(statearr_24615[(10)] = inst_24606);

return statearr_24615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(3),inst_24607);
} else {
if((state_val_24613 === (3))){
var inst_24595 = (state_24612[(7)]);
var inst_24609 = (state_24612[(2)]);
var inst_24610 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24595,"");
var state_24612__$1 = (function (){var statearr_24616 = state_24612;
(statearr_24616[(11)] = inst_24609);

return statearr_24616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else {
return null;
}
}
}
});})(c__17933__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__17844__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__17844__auto____0 = (function (){
var statearr_24617 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24617[(0)] = figwheel$client$heads_up$clear_$_state_machine__17844__auto__);

(statearr_24617[(1)] = (1));

return statearr_24617;
});
var figwheel$client$heads_up$clear_$_state_machine__17844__auto____1 = (function (state_24612){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_24612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e24618){if((e24618 instanceof Object)){
var ex__17847__auto__ = e24618;
var statearr_24619_24621 = state_24612;
(statearr_24619_24621[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24622 = state_24612;
state_24612 = G__24622;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__17844__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__17844__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__17844__auto____0;
figwheel$client$heads_up$clear_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__17844__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__))
})();
var state__17935__auto__ = (function (){var statearr_24620 = f__17934__auto__.call(null);
(statearr_24620[(6)] = c__17933__auto__);

return statearr_24620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__))
);

return c__17933__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__17933__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17933__auto__){
return (function (){
var f__17934__auto__ = (function (){var switch__17843__auto__ = ((function (c__17933__auto__){
return (function (state_24633){
var state_val_24634 = (state_24633[(1)]);
if((state_val_24634 === (1))){
var inst_24623 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24633__$1 = state_24633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24633__$1,(2),inst_24623);
} else {
if((state_val_24634 === (2))){
var inst_24625 = (state_24633[(2)]);
var inst_24626 = cljs.core.async.timeout.call(null,(400));
var state_24633__$1 = (function (){var statearr_24635 = state_24633;
(statearr_24635[(7)] = inst_24625);

return statearr_24635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24633__$1,(3),inst_24626);
} else {
if((state_val_24634 === (3))){
var inst_24628 = (state_24633[(2)]);
var inst_24629 = figwheel.client.heads_up.clear.call(null);
var state_24633__$1 = (function (){var statearr_24636 = state_24633;
(statearr_24636[(8)] = inst_24628);

return statearr_24636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24633__$1,(4),inst_24629);
} else {
if((state_val_24634 === (4))){
var inst_24631 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24633__$1,inst_24631);
} else {
return null;
}
}
}
}
});})(c__17933__auto__))
;
return ((function (switch__17843__auto__,c__17933__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto____0 = (function (){
var statearr_24637 = [null,null,null,null,null,null,null,null,null];
(statearr_24637[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto__);

(statearr_24637[(1)] = (1));

return statearr_24637;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto____1 = (function (state_24633){
while(true){
var ret_value__17845__auto__ = (function (){try{while(true){
var result__17846__auto__ = switch__17843__auto__.call(null,state_24633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17846__auto__;
}
break;
}
}catch (e24638){if((e24638 instanceof Object)){
var ex__17847__auto__ = e24638;
var statearr_24639_24641 = state_24633;
(statearr_24639_24641[(5)] = ex__17847__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24642 = state_24633;
state_24633 = G__24642;
continue;
} else {
return ret_value__17845__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto__ = function(state_24633){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto____1.call(this,state_24633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__17844__auto__;
})()
;})(switch__17843__auto__,c__17933__auto__))
})();
var state__17935__auto__ = (function (){var statearr_24640 = f__17934__auto__.call(null);
(statearr_24640[(6)] = c__17933__auto__);

return statearr_24640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17935__auto__);
});})(c__17933__auto__))
);

return c__17933__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__6738__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__6738__auto__)){
var el = temp__6738__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1504894097639
