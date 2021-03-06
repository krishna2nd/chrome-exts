// Compiled by ClojureScript 0.0-2913 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('goog.net.ErrorCode');

ajax.core.AjaxImpl = (function (){var obj24333 = {};
return obj24333;
})();

ajax.core._js_ajax_request = (function _js_ajax_request(this$,request,handler){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,request,handler);
}
});


ajax.core.AjaxRequest = (function (){var obj24335 = {};
return obj24335;
})();

ajax.core._abort = (function _abort(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._abort[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._abort["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$);
}
});


ajax.core.AjaxResponse = (function (){var obj24337 = {};
return obj24337;
})();

ajax.core._status = (function _status(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$AjaxResponse$_status$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._status[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._status["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
})().call(null,this$);
}
});

ajax.core._status_text = (function _status_text(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$AjaxResponse$_status_text$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._status_text[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._status_text["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
})().call(null,this$);
}
});

ajax.core._body = (function _body(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$AjaxResponse$_body$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._body[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._body["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
})().call(null,this$);
}
});

ajax.core._get_response_header = (function _get_response_header(this$,header){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._get_response_header[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._get_response_header["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
})().call(null,this$,header);
}
});

ajax.core._was_aborted = (function _was_aborted(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._was_aborted[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._was_aborted["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
})().call(null,this$);
}
});


ajax.core.Interceptor = (function (){var obj24339 = {};
return obj24339;
})();

ajax.core._process_request = (function _process_request(this$,request){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$Interceptor$_process_request$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$Interceptor$_process_request$arity$2(this$,request);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._process_request[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._process_request["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-request",this$);
}
}
})().call(null,this$,request);
}
});

ajax.core._process_response = (function _process_response(this$,response){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.ajax$core$Interceptor$_process_response$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.ajax$core$Interceptor$_process_response$arity$2(this$,response);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (ajax.core._process_response[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (ajax.core._process_response["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-response",this$);
}
}
})().call(null,this$,response);
}
});

ajax.core.process_response = (function process_response(response,interceptor){

return ajax.core._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function process_request(request,interceptor){

return ajax.core._process_request.call(null,interceptor,request);
});

/**
* @constructor
* @param {*} name
* @param {*} request
* @param {*} response
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4584__auto__,k__4585__auto__){
var self__ = this;
var this__4584__auto____$1 = this;
return cljs.core._lookup.call(null,this__4584__auto____$1,k__4585__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4586__auto__,k24341,else__4587__auto__){
var self__ = this;
var this__4586__auto____$1 = this;
var G__24343 = (((k24341 instanceof cljs.core.Keyword))?k24341.fqn:null);
switch (G__24343) {
case "response":
return self__.response;

break;
case "request":
return self__.request;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24341,else__4587__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$core$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$core$Interceptor$_process_request$arity$2 = (function (p__24344,opts){
var self__ = this;
var map__24345 = p__24344;
var map__24345__$1 = ((cljs.core.seq_QMARK_.call(null,map__24345))?cljs.core.apply.call(null,cljs.core.hash_map,map__24345):map__24345);
var request__$1 = cljs.core.get.call(null,map__24345__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__24346 = this;
var map__24346__$1 = ((cljs.core.seq_QMARK_.call(null,map__24346))?cljs.core.apply.call(null,cljs.core.hash_map,map__24346):map__24346);
var request__$2 = cljs.core.get.call(null,map__24346__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$core$Interceptor$_process_response$arity$2 = (function (p__24347,xhrio){
var self__ = this;
var map__24348 = p__24347;
var map__24348__$1 = ((cljs.core.seq_QMARK_.call(null,map__24348))?cljs.core.apply.call(null,cljs.core.hash_map,map__24348):map__24348);
var response__$1 = cljs.core.get.call(null,map__24348__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__24349 = this;
var map__24349__$1 = ((cljs.core.seq_QMARK_.call(null,map__24349))?cljs.core.apply.call(null,cljs.core.hash_map,map__24349):map__24349);
var response__$2 = cljs.core.get.call(null,map__24349__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4598__auto__,writer__4599__auto__,opts__4600__auto__){
var self__ = this;
var this__4598__auto____$1 = this;
var pr_pair__4601__auto__ = ((function (this__4598__auto____$1){
return (function (keyval__4602__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,cljs.core.pr_writer,""," ","",opts__4600__auto__,keyval__4602__auto__);
});})(this__4598__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,pr_pair__4601__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__4600__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4582__auto__){
var self__ = this;
var this__4582__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4578__auto__){
var self__ = this;
var this__4578__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4588__auto__){
var self__ = this;
var this__4588__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4579__auto__){
var self__ = this;
var this__4579__auto____$1 = this;
var h__4402__auto__ = self__.__hash;
if(!((h__4402__auto__ == null))){
return h__4402__auto__;
} else {
var h__4402__auto____$1 = cljs.core.hash_imap.call(null,this__4579__auto____$1);
self__.__hash = h__4402__auto____$1;

return h__4402__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4580__auto__,other__4581__auto__){
var self__ = this;
var this__4580__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3969__auto__ = other__4581__auto__;
if(cljs.core.truth_(and__3969__auto__)){
return ((this__4580__auto____$1.constructor === other__4581__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4580__auto____$1,other__4581__auto__));
} else {
return and__3969__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4593__auto__,k__4594__auto__){
var self__ = this;
var this__4593__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__4594__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4593__auto____$1),self__.__meta),k__4594__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4594__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4591__auto__,k__4592__auto__,G__24340){
var self__ = this;
var this__4591__auto____$1 = this;
var pred__24350 = cljs.core.keyword_identical_QMARK_;
var expr__24351 = k__4592__auto__;
if(cljs.core.truth_(pred__24350.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__24351))){
return (new ajax.core.StandardInterceptor(G__24340,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24350.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__24351))){
return (new ajax.core.StandardInterceptor(self__.name,G__24340,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24350.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__24351))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__24340,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4592__auto__,G__24340),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4596__auto__){
var self__ = this;
var this__4596__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4583__auto__,G__24340){
var self__ = this;
var this__4583__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__24340,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4589__auto__,entry__4590__auto__){
var self__ = this;
var this__4589__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4590__auto__)){
return cljs.core._assoc.call(null,this__4589__auto____$1,cljs.core._nth.call(null,entry__4590__auto__,(0)),cljs.core._nth.call(null,entry__4590__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4589__auto____$1,entry__4590__auto__);
}
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__4618__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__4618__auto__,writer__4619__auto__){
return cljs.core._write.call(null,writer__4619__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function __GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function map__GT_StandardInterceptor(G__24342){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__24342),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__24342),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__24342),null,cljs.core.dissoc.call(null,G__24342,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24355,handler){
var map__24356 = p__24355;
var map__24356__$1 = ((cljs.core.seq_QMARK_.call(null,map__24356))?cljs.core.apply.call(null,cljs.core.hash_map,map__24356):map__24356);
var with_credentials = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var timeout = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var headers = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var method = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var this$__$1 = this;
var G__24357 = this$__$1;
goog.events.listen(G__24357,goog.net.EventType.COMPLETE,((function (G__24357,this$__$1,map__24356,map__24356__$1,with_credentials,timeout,headers,body,method,uri){
return (function (p1__24354_SHARP_){
return handler.call(null,p1__24354_SHARP_.target);
});})(G__24357,this$__$1,map__24356,map__24356__$1,with_credentials,timeout,headers,body,method,uri))
);

G__24357.setTimeoutInterval(timeout);

G__24357.setWithCredentials(with_credentials);

G__24357.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__24357;
});
ajax.core.ready_state = (function ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24359,handler){
var map__24360 = p__24359;
var map__24360__$1 = ((cljs.core.seq_QMARK_.call(null,map__24360))?cljs.core.apply.call(null,cljs.core.hash_map,map__24360):map__24360);
var response_format = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var with_credentials = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var timeout = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var headers = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var method = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__24360,map__24360__$1,response_format,with_credentials,timeout,headers,body,method,uri){
return (function (p1__24358_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.core.ready_state.call(null,p1__24358_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__24360,map__24360__$1,response_format,with_credentials,timeout,headers,body,method,uri))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4126__auto___24367 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4126__auto___24367)){
var response_type_24368 = temp__4126__auto___24367;
this$__$1.responseType = cljs.core.name.call(null,response_type_24368);
} else {
}

var seq__24361_24369 = cljs.core.seq.call(null,headers);
var chunk__24362_24370 = null;
var count__24363_24371 = (0);
var i__24364_24372 = (0);
while(true){
if((i__24364_24372 < count__24363_24371)){
var vec__24365_24373 = cljs.core._nth.call(null,chunk__24362_24370,i__24364_24372);
var k_24374 = cljs.core.nth.call(null,vec__24365_24373,(0),null);
var v_24375 = cljs.core.nth.call(null,vec__24365_24373,(1),null);
this$__$1.setRequestHeader(k_24374,v_24375);

var G__24376 = seq__24361_24369;
var G__24377 = chunk__24362_24370;
var G__24378 = count__24363_24371;
var G__24379 = (i__24364_24372 + (1));
seq__24361_24369 = G__24376;
chunk__24362_24370 = G__24377;
count__24363_24371 = G__24378;
i__24364_24372 = G__24379;
continue;
} else {
var temp__4126__auto___24380 = cljs.core.seq.call(null,seq__24361_24369);
if(temp__4126__auto___24380){
var seq__24361_24381__$1 = temp__4126__auto___24380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24361_24381__$1)){
var c__4768__auto___24382 = cljs.core.chunk_first.call(null,seq__24361_24381__$1);
var G__24383 = cljs.core.chunk_rest.call(null,seq__24361_24381__$1);
var G__24384 = c__4768__auto___24382;
var G__24385 = cljs.core.count.call(null,c__4768__auto___24382);
var G__24386 = (0);
seq__24361_24369 = G__24383;
chunk__24362_24370 = G__24384;
count__24363_24371 = G__24385;
i__24364_24372 = G__24386;
continue;
} else {
var vec__24366_24387 = cljs.core.first.call(null,seq__24361_24381__$1);
var k_24388 = cljs.core.nth.call(null,vec__24366_24387,(0),null);
var v_24389 = cljs.core.nth.call(null,vec__24366_24387,(1),null);
this$__$1.setRequestHeader(k_24388,v_24389);

var G__24390 = cljs.core.next.call(null,seq__24361_24381__$1);
var G__24391 = null;
var G__24392 = (0);
var G__24393 = (0);
seq__24361_24369 = G__24390;
chunk__24362_24370 = G__24391;
count__24363_24371 = G__24392;
i__24364_24372 = G__24393;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3981__auto__ = body;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return "";
}
})());

return this$__$1;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24394,handler){
var map__24395 = p__24394;
var map__24395__$1 = ((cljs.core.seq_QMARK_.call(null,map__24395))?cljs.core.apply.call(null,cljs.core.hash_map,map__24395):map__24395);
var max_retries = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var priority = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var timeout = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var id = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var headers = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var method = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){
return ajax.core._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_response = (function exception_response(e,status,p__24396,xhrio){
var map__24398 = p__24396;
var map__24398__$1 = ((cljs.core.seq_QMARK_.call(null,map__24398))?cljs.core.apply.call(null,cljs.core.hash_map,map__24398):map__24398);
var description = cljs.core.get.call(null,map__24398__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.core._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
/**
* @param {...*} var_args
*/
ajax.core.fail = (function() { 
var fail__delegate = function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
};
var fail = function (status,status_text,failure,var_args){
var params = null;
if (arguments.length > 3) {
var G__24399__i = 0, G__24399__a = new Array(arguments.length -  3);
while (G__24399__i < G__24399__a.length) {G__24399__a[G__24399__i] = arguments[G__24399__i + 3]; ++G__24399__i;}
  params = new cljs.core.IndexedSeq(G__24399__a,0);
} 
return fail__delegate.call(this,status,status_text,failure,params);};
fail.cljs$lang$maxFixedArity = 3;
fail.cljs$lang$applyTo = (function (arglist__24400){
var status = cljs.core.first(arglist__24400);
arglist__24400 = cljs.core.next(arglist__24400);
var status_text = cljs.core.first(arglist__24400);
arglist__24400 = cljs.core.next(arglist__24400);
var failure = cljs.core.first(arglist__24400);
var params = cljs.core.rest(arglist__24400);
return fail__delegate(status,status_text,failure,params);
});
fail.cljs$core$IFn$_invoke$arity$variadic = fail__delegate;
return fail;
})()
;

/**
* @constructor
* @param {*} read
* @param {*} description
* @param {*} content_type
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4584__auto__,k__4585__auto__){
var self__ = this;
var this__4584__auto____$1 = this;
return cljs.core._lookup.call(null,this__4584__auto____$1,k__4585__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4586__auto__,k24403,else__4587__auto__){
var self__ = this;
var this__4586__auto____$1 = this;
var G__24405 = (((k24403 instanceof cljs.core.Keyword))?k24403.fqn:null);
switch (G__24405) {
case "content-type":
return self__.content_type;

break;
case "description":
return self__.description;

break;
case "read":
return self__.read;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24403,else__4587__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$core$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$core$Interceptor$_process_request$arity$2 = (function (p__24406,request){
var self__ = this;
var map__24407 = p__24406;
var map__24407__$1 = ((cljs.core.seq_QMARK_.call(null,map__24407))?cljs.core.apply.call(null,cljs.core.hash_map,map__24407):map__24407);
var content_type__$1 = cljs.core.get.call(null,map__24407__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__24408 = this;
var map__24408__$1 = ((cljs.core.seq_QMARK_.call(null,map__24408))?cljs.core.apply.call(null,cljs.core.hash_map,map__24408):map__24408);
var content_type__$2 = cljs.core.get.call(null,map__24408__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__24408,map__24408__$1,content_type__$2,map__24407,map__24407__$1,content_type__$1){
return (function (p1__24401_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type__$2], null),(function (){var or__3981__auto__ = p1__24401_SHARP_;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__24408,map__24408__$1,content_type__$2,map__24407,map__24407__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$core$Interceptor$_process_response$arity$2 = (function (p__24409,xhrio){
var self__ = this;
var map__24410 = p__24409;
var map__24410__$1 = ((cljs.core.seq_QMARK_.call(null,map__24410))?cljs.core.apply.call(null,cljs.core.hash_map,map__24410):map__24410);
var format = map__24410__$1;
var read__$1 = cljs.core.get.call(null,map__24410__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__24411 = this;
var map__24411__$1 = ((cljs.core.seq_QMARK_.call(null,map__24411))?cljs.core.apply.call(null,cljs.core.hash_map,map__24411):map__24411);
var format__$1 = map__24411__$1;
var read__$2 = cljs.core.get.call(null,map__24411__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__24413 = status;
switch (G__24413) {
case (-1):
if(cljs.core.truth_(ajax.core._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e24414){if((e24414 instanceof Object)){
var e = e24414;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e24414;

}
}
}
}catch (e24412){if((e24412 instanceof Object)){
var e = e24412;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e24412;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4598__auto__,writer__4599__auto__,opts__4600__auto__){
var self__ = this;
var this__4598__auto____$1 = this;
var pr_pair__4601__auto__ = ((function (this__4598__auto____$1){
return (function (keyval__4602__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,cljs.core.pr_writer,""," ","",opts__4600__auto__,keyval__4602__auto__);
});})(this__4598__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,pr_pair__4601__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__4600__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4582__auto__){
var self__ = this;
var this__4582__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4578__auto__){
var self__ = this;
var this__4578__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4588__auto__){
var self__ = this;
var this__4588__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4579__auto__){
var self__ = this;
var this__4579__auto____$1 = this;
var h__4402__auto__ = self__.__hash;
if(!((h__4402__auto__ == null))){
return h__4402__auto__;
} else {
var h__4402__auto____$1 = cljs.core.hash_imap.call(null,this__4579__auto____$1);
self__.__hash = h__4402__auto____$1;

return h__4402__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4580__auto__,other__4581__auto__){
var self__ = this;
var this__4580__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3969__auto__ = other__4581__auto__;
if(cljs.core.truth_(and__3969__auto__)){
return ((this__4580__auto____$1.constructor === other__4581__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4580__auto____$1,other__4581__auto__));
} else {
return and__3969__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4593__auto__,k__4594__auto__){
var self__ = this;
var this__4593__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__4594__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4593__auto____$1),self__.__meta),k__4594__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4594__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4591__auto__,k__4592__auto__,G__24402){
var self__ = this;
var this__4591__auto____$1 = this;
var pred__24415 = cljs.core.keyword_identical_QMARK_;
var expr__24416 = k__4592__auto__;
if(cljs.core.truth_(pred__24415.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__24416))){
return (new ajax.core.ResponseFormat(G__24402,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24415.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__24416))){
return (new ajax.core.ResponseFormat(self__.read,G__24402,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24415.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__24416))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__24402,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4592__auto__,G__24402),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4596__auto__){
var self__ = this;
var this__4596__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4583__auto__,G__24402){
var self__ = this;
var this__4583__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__24402,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4589__auto__,entry__4590__auto__){
var self__ = this;
var this__4589__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4590__auto__)){
return cljs.core._assoc.call(null,this__4589__auto____$1,cljs.core._nth.call(null,entry__4590__auto__,(0)),cljs.core._nth.call(null,entry__4590__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4589__auto____$1,entry__4590__auto__);
}
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__4618__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__4618__auto__,writer__4619__auto__){
return cljs.core._write.call(null,writer__4619__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function __GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function map__GT_ResponseFormat(G__24404){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__24404),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__24404),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__24404),null,cljs.core.dissoc.call(null,G__24404,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function() {
var vec_param_to_str = null;
var vec_param_to_str__1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});
var vec_param_to_str__2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});
var vec_param_to_str__3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
vec_param_to_str = function(prefix,key,value){
switch(arguments.length){
case 1:
return vec_param_to_str__1.call(this,prefix);
case 2:
return vec_param_to_str__2.call(this,prefix,key);
case 3:
return vec_param_to_str__3.call(this,prefix,key,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = vec_param_to_str__1;
vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = vec_param_to_str__2;
vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = vec_param_to_str__3;
return vec_param_to_str;
})()
;
ajax.core.param_to_str = (function() {
var param_to_str = null;
var param_to_str__1 = (function (prefix){
return (function (p__24425){
var vec__24426 = p__24425;
var key = cljs.core.nth.call(null,vec__24426,(0),null);
var value = cljs.core.nth.call(null,vec__24426,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});
var param_to_str__2 = (function (prefix,p__24420){
var vec__24424 = p__24420;
var key = cljs.core.nth.call(null,vec__24424,(0),null);
var value = cljs.core.nth.call(null,vec__24424,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
param_to_str = function(prefix,p__24420){
switch(arguments.length){
case 1:
return param_to_str__1.call(this,prefix);
case 2:
return param_to_str__2.call(this,prefix,p__24420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
param_to_str.cljs$core$IFn$_invoke$arity$1 = param_to_str__1;
param_to_str.cljs$core$IFn$_invoke$arity$2 = param_to_str__2;
return param_to_str;
})()
;
ajax.core.params_to_str = (function params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__24429){
var vec__24430 = p__24429;
var k = cljs.core.nth.call(null,vec__24430,(0),null);
var v = cljs.core.nth.call(null,vec__24430,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4584__auto__,k__4585__auto__){
var self__ = this;
var this__4584__auto____$1 = this;
return cljs.core._lookup.call(null,this__4584__auto____$1,k__4585__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4586__auto__,k24433,else__4587__auto__){
var self__ = this;
var this__4586__auto____$1 = this;
var G__24435 = k24433;
switch (G__24435) {
default:
return cljs.core.get.call(null,self__.__extmap,k24433,else__4587__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$core$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$core$Interceptor$_process_request$arity$2 = (function (_,p__24436){
var self__ = this;
var map__24437 = p__24436;
var map__24437__$1 = ((cljs.core.seq_QMARK_.call(null,map__24437))?cljs.core.apply.call(null,cljs.core.hash_map,map__24437):map__24437);
var request = map__24437__$1;
var method = cljs.core.get.call(null,map__24437__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__24437,map__24437__$1,request,method){
return (function (p1__24431_SHARP_){
return ajax.core.uri_with_params.call(null,p1__24431_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__24437,map__24437__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$core$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4598__auto__,writer__4599__auto__,opts__4600__auto__){
var self__ = this;
var this__4598__auto____$1 = this;
var pr_pair__4601__auto__ = ((function (this__4598__auto____$1){
return (function (keyval__4602__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,cljs.core.pr_writer,""," ","",opts__4600__auto__,keyval__4602__auto__);
});})(this__4598__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,pr_pair__4601__auto__,"#ajax.core.ProcessGet{",", ","}",opts__4600__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4582__auto__){
var self__ = this;
var this__4582__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4578__auto__){
var self__ = this;
var this__4578__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4588__auto__){
var self__ = this;
var this__4588__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4579__auto__){
var self__ = this;
var this__4579__auto____$1 = this;
var h__4402__auto__ = self__.__hash;
if(!((h__4402__auto__ == null))){
return h__4402__auto__;
} else {
var h__4402__auto____$1 = cljs.core.hash_imap.call(null,this__4579__auto____$1);
self__.__hash = h__4402__auto____$1;

return h__4402__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4580__auto__,other__4581__auto__){
var self__ = this;
var this__4580__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3969__auto__ = other__4581__auto__;
if(cljs.core.truth_(and__3969__auto__)){
return ((this__4580__auto____$1.constructor === other__4581__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4580__auto____$1,other__4581__auto__));
} else {
return and__3969__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4593__auto__,k__4594__auto__){
var self__ = this;
var this__4593__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4594__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4593__auto____$1),self__.__meta),k__4594__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4594__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4591__auto__,k__4592__auto__,G__24432){
var self__ = this;
var this__4591__auto____$1 = this;
var pred__24438 = cljs.core.keyword_identical_QMARK_;
var expr__24439 = k__4592__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4592__auto__,G__24432),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4596__auto__){
var self__ = this;
var this__4596__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4583__auto__,G__24432){
var self__ = this;
var this__4583__auto____$1 = this;
return (new ajax.core.ProcessGet(G__24432,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4589__auto__,entry__4590__auto__){
var self__ = this;
var this__4589__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4590__auto__)){
return cljs.core._assoc.call(null,this__4589__auto____$1,cljs.core._nth.call(null,entry__4590__auto__,(0)),cljs.core._nth.call(null,entry__4590__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4589__auto____$1,entry__4590__auto__);
}
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__4618__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__4618__auto__,writer__4619__auto__){
return cljs.core._write.call(null,writer__4619__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function __GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function map__GT_ProcessGet(G__24434){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__24434),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4584__auto__,k__4585__auto__){
var self__ = this;
var this__4584__auto____$1 = this;
return cljs.core._lookup.call(null,this__4584__auto____$1,k__4585__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4586__auto__,k24443,else__4587__auto__){
var self__ = this;
var this__4586__auto____$1 = this;
var G__24445 = k24443;
switch (G__24445) {
default:
return cljs.core.get.call(null,self__.__extmap,k24443,else__4587__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$core$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$core$Interceptor$_process_request$arity$2 = (function (_,p__24446){
var self__ = this;
var map__24447 = p__24446;
var map__24447__$1 = ((cljs.core.seq_QMARK_.call(null,map__24447))?cljs.core.apply.call(null,cljs.core.hash_map,map__24447):map__24447);
var request = map__24447__$1;
var params = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if(cljs.core.truth_(body)){
return cljs.core.reduced.call(null,request);
} else {
return request;
}
});

ajax.core.DirectSubmission.prototype.ajax$core$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4598__auto__,writer__4599__auto__,opts__4600__auto__){
var self__ = this;
var this__4598__auto____$1 = this;
var pr_pair__4601__auto__ = ((function (this__4598__auto____$1){
return (function (keyval__4602__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,cljs.core.pr_writer,""," ","",opts__4600__auto__,keyval__4602__auto__);
});})(this__4598__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,pr_pair__4601__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__4600__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4582__auto__){
var self__ = this;
var this__4582__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4578__auto__){
var self__ = this;
var this__4578__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4588__auto__){
var self__ = this;
var this__4588__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4579__auto__){
var self__ = this;
var this__4579__auto____$1 = this;
var h__4402__auto__ = self__.__hash;
if(!((h__4402__auto__ == null))){
return h__4402__auto__;
} else {
var h__4402__auto____$1 = cljs.core.hash_imap.call(null,this__4579__auto____$1);
self__.__hash = h__4402__auto____$1;

return h__4402__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4580__auto__,other__4581__auto__){
var self__ = this;
var this__4580__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3969__auto__ = other__4581__auto__;
if(cljs.core.truth_(and__3969__auto__)){
return ((this__4580__auto____$1.constructor === other__4581__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4580__auto____$1,other__4581__auto__));
} else {
return and__3969__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4593__auto__,k__4594__auto__){
var self__ = this;
var this__4593__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4594__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4593__auto____$1),self__.__meta),k__4594__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4594__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4591__auto__,k__4592__auto__,G__24442){
var self__ = this;
var this__4591__auto____$1 = this;
var pred__24448 = cljs.core.keyword_identical_QMARK_;
var expr__24449 = k__4592__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4592__auto__,G__24442),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4596__auto__){
var self__ = this;
var this__4596__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4583__auto__,G__24442){
var self__ = this;
var this__4583__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__24442,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4589__auto__,entry__4590__auto__){
var self__ = this;
var this__4589__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4590__auto__)){
return cljs.core._assoc.call(null,this__4589__auto____$1,cljs.core._nth.call(null,entry__4590__auto__,(0)),cljs.core._nth.call(null,entry__4590__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4589__auto____$1,entry__4590__auto__);
}
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__4618__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__4618__auto__,writer__4619__auto__){
return cljs.core._write.call(null,writer__4619__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function __GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function map__GT_DirectSubmission(G__24444){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__24444),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4584__auto__,k__4585__auto__){
var self__ = this;
var this__4584__auto____$1 = this;
return cljs.core._lookup.call(null,this__4584__auto____$1,k__4585__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4586__auto__,k24453,else__4587__auto__){
var self__ = this;
var this__4586__auto____$1 = this;
var G__24455 = k24453;
switch (G__24455) {
default:
return cljs.core.get.call(null,self__.__extmap,k24453,else__4587__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$core$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$core$Interceptor$_process_request$arity$2 = (function (_,p__24456){
var self__ = this;
var map__24457 = p__24456;
var map__24457__$1 = ((cljs.core.seq_QMARK_.call(null,map__24457))?cljs.core.apply.call(null,cljs.core.hash_map,map__24457):map__24457);
var request = map__24457__$1;
var headers = cljs.core.get.call(null,map__24457__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var params = cljs.core.get.call(null,map__24457__$1,new cljs.core.Keyword(null,"params","params",710516235));
var format = cljs.core.get.call(null,map__24457__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__24457__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__24457__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var ___$1 = this;
var map__24458 = ajax.core.get_request_format.call(null,format);
var map__24458__$1 = ((cljs.core.seq_QMARK_.call(null,map__24458))?cljs.core.apply.call(null,cljs.core.hash_map,map__24458):map__24458);
var content_type = cljs.core.get.call(null,map__24458__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var write = cljs.core.get.call(null,map__24458__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var body = ((!((write == null)))?write.call(null,params):(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})());
var headers__$1 = (function (){var or__3981__auto__ = headers;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",[cljs.core.str(content_type),cljs.core.str("; charset=utf-8")].join('')):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$core$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4598__auto__,writer__4599__auto__,opts__4600__auto__){
var self__ = this;
var this__4598__auto____$1 = this;
var pr_pair__4601__auto__ = ((function (this__4598__auto____$1){
return (function (keyval__4602__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,cljs.core.pr_writer,""," ","",opts__4600__auto__,keyval__4602__auto__);
});})(this__4598__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,pr_pair__4601__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__4600__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4582__auto__){
var self__ = this;
var this__4582__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4578__auto__){
var self__ = this;
var this__4578__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4588__auto__){
var self__ = this;
var this__4588__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4579__auto__){
var self__ = this;
var this__4579__auto____$1 = this;
var h__4402__auto__ = self__.__hash;
if(!((h__4402__auto__ == null))){
return h__4402__auto__;
} else {
var h__4402__auto____$1 = cljs.core.hash_imap.call(null,this__4579__auto____$1);
self__.__hash = h__4402__auto____$1;

return h__4402__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4580__auto__,other__4581__auto__){
var self__ = this;
var this__4580__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3969__auto__ = other__4581__auto__;
if(cljs.core.truth_(and__3969__auto__)){
return ((this__4580__auto____$1.constructor === other__4581__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4580__auto____$1,other__4581__auto__));
} else {
return and__3969__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4593__auto__,k__4594__auto__){
var self__ = this;
var this__4593__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4594__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4593__auto____$1),self__.__meta),k__4594__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4594__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4591__auto__,k__4592__auto__,G__24452){
var self__ = this;
var this__4591__auto____$1 = this;
var pred__24459 = cljs.core.keyword_identical_QMARK_;
var expr__24460 = k__4592__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4592__auto__,G__24452),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4596__auto__){
var self__ = this;
var this__4596__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4583__auto__,G__24452){
var self__ = this;
var this__4583__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__24452,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4589__auto__,entry__4590__auto__){
var self__ = this;
var this__4589__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4590__auto__)){
return cljs.core._assoc.call(null,this__4589__auto____$1,cljs.core._nth.call(null,entry__4590__auto__,(0)),cljs.core._nth.call(null,entry__4590__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4589__auto____$1,entry__4590__auto__);
}
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__4618__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__4618__auto__,writer__4619__auto__){
return cljs.core._write.call(null,writer__4619__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function __GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function map__GT_ApplyRequestFormat(G__24454){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__24454),null));
});

ajax.core.transit_write = (function() {
var transit_write = null;
var transit_write__1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});
var transit_write__2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});
transit_write = function(writer,params){
switch(arguments.length){
case 1:
return transit_write__1.call(this,writer);
case 2:
return transit_write__2.call(this,writer,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_write.cljs$core$IFn$_invoke$arity$1 = transit_write__1;
transit_write.cljs$core$IFn$_invoke$arity$2 = transit_write__2;
return transit_write;
})()
;
ajax.core.transit_request_format = (function() {
var transit_request_format = null;
var transit_request_format__0 = (function (){
return transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var transit_request_format__1 = (function (p__24463){
var map__24465 = p__24463;
var map__24465__$1 = ((cljs.core.seq_QMARK_.call(null,map__24465))?cljs.core.apply.call(null,cljs.core.hash_map,map__24465):map__24465);
var request = map__24465__$1;
var writer = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var type = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer__$1 = (function (){var or__3981__auto__ = writer;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__3981__auto____$1 = type;
if(cljs.core.truth_(or__3981__auto____$1)){
return or__3981__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),request);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});
transit_request_format = function(p__24463){
switch(arguments.length){
case 0:
return transit_request_format__0.call(this);
case 1:
return transit_request_format__1.call(this,p__24463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_request_format.cljs$core$IFn$_invoke$arity$0 = transit_request_format__0;
transit_request_format.cljs$core$IFn$_invoke$arity$1 = transit_request_format__1;
return transit_request_format;
})()
;
ajax.core.transit_read = (function() {
var transit_read = null;
var transit_read__1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});
var transit_read__2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});
var transit_read__3 = (function (reader,raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
transit_read = function(reader,raw,xhrio){
switch(arguments.length){
case 1:
return transit_read__1.call(this,reader);
case 2:
return transit_read__2.call(this,reader,raw);
case 3:
return transit_read__3.call(this,reader,raw,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_read.cljs$core$IFn$_invoke$arity$1 = transit_read__1;
transit_read.cljs$core$IFn$_invoke$arity$2 = transit_read__2;
transit_read.cljs$core$IFn$_invoke$arity$3 = transit_read__3;
return transit_read;
})()
;
ajax.core.transit_response_format = (function() {
var transit_response_format = null;
var transit_response_format__0 = (function (){
return transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var transit_response_format__1 = (function (p__24466){
var map__24468 = p__24466;
var map__24468__$1 = ((cljs.core.seq_QMARK_.call(null,map__24468))?cljs.core.apply.call(null,cljs.core.hash_map,map__24468):map__24468);
var request = map__24468__$1;
var raw = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var type = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader__$1 = (function (){var or__3981__auto__ = reader;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__3981__auto____$1 = type;
if(cljs.core.truth_(or__3981__auto____$1)){
return or__3981__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),request);
}
})();
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null));
});
transit_response_format = function(p__24466){
switch(arguments.length){
case 0:
return transit_response_format__0.call(this);
case 1:
return transit_response_format__1.call(this,p__24466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_response_format.cljs$core$IFn$_invoke$arity$0 = transit_response_format__0;
transit_response_format.cljs$core$IFn$_invoke$arity$1 = transit_response_format__1;
return transit_response_format;
})()
;
ajax.core.url_request_format = (function url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function() {
var raw_response_format = null;
var raw_response_format__0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
});
var raw_response_format__1 = (function (_){
return raw_response_format.call(null);
});
raw_response_format = function(_){
switch(arguments.length){
case 0:
return raw_response_format__0.call(this);
case 1:
return raw_response_format__1.call(this,_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
raw_response_format.cljs$core$IFn$_invoke$arity$0 = raw_response_format__0;
raw_response_format.cljs$core$IFn$_invoke$arity$1 = raw_response_format__1;
return raw_response_format;
})()
;
ajax.core.write_json = (function write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function() {
var json_read = null;
var json_read__1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3969__auto__ = prefix;
if(cljs.core.truth_(and__3969__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__3969__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var json_read__2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3969__auto__ = prefix;
if(cljs.core.truth_(and__3969__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__3969__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var json_read__3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3969__auto__ = prefix;
if(cljs.core.truth_(and__3969__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__3969__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var json_read__4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3969__auto__ = prefix;
if(cljs.core.truth_(and__3969__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__3969__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
json_read = function(prefix,raw,keywords_QMARK_,xhrio){
switch(arguments.length){
case 1:
return json_read__1.call(this,prefix);
case 2:
return json_read__2.call(this,prefix,raw);
case 3:
return json_read__3.call(this,prefix,raw,keywords_QMARK_);
case 4:
return json_read__4.call(this,prefix,raw,keywords_QMARK_,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_read.cljs$core$IFn$_invoke$arity$1 = json_read__1;
json_read.cljs$core$IFn$_invoke$arity$2 = json_read__2;
json_read.cljs$core$IFn$_invoke$arity$3 = json_read__3;
json_read.cljs$core$IFn$_invoke$arity$4 = json_read__4;
return json_read;
})()
;
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should think about using this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function() {
var json_response_format = null;
var json_response_format__0 = (function (){
return json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var json_response_format__1 = (function (p__24469){
var map__24471 = p__24469;
var map__24471__$1 = ((cljs.core.seq_QMARK_.call(null,map__24471))?cljs.core.apply.call(null,cljs.core.hash_map,map__24471):map__24471);
var raw = cljs.core.get.call(null,map__24471__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var keywords_QMARK_ = cljs.core.get.call(null,map__24471__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var prefix = cljs.core.get.call(null,map__24471__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null));
});
json_response_format = function(p__24469){
switch(arguments.length){
case 0:
return json_response_format__0.call(this);
case 1:
return json_response_format__1.call(this,p__24469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_response_format.cljs$core$IFn$_invoke$arity$0 = json_response_format__0;
json_response_format.cljs$core$IFn$_invoke$arity$1 = json_response_format__1;
return json_response_format;
})()
;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function() {
var get_format = null;
var get_format__1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});
var get_format__2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
get_format = function(request,format_entry){
switch(arguments.length){
case 1:
return get_format__1.call(this,request);
case 2:
return get_format__2.call(this,request,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_format.cljs$core$IFn$_invoke$arity$1 = get_format__1;
get_format.cljs$core$IFn$_invoke$arity$2 = get_format__2;
return get_format;
})()
;
ajax.core.accept_entry = (function() {
var accept_entry = null;
var accept_entry__1 = (function (request){
return (function (format_entry){
var or__3981__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return "*/*";
}
});
});
var accept_entry__2 = (function (request,format_entry){
var or__3981__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return "*/*";
}
});
accept_entry = function(request,format_entry){
switch(arguments.length){
case 1:
return accept_entry__1.call(this,request);
case 2:
return accept_entry__2.call(this,request,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accept_entry.cljs$core$IFn$_invoke$arity$1 = accept_entry__1;
accept_entry.cljs$core$IFn$_invoke$arity$2 = accept_entry__2;
return accept_entry;
})()
;
ajax.core.detect_content_type = (function() {
var detect_content_type = null;
var detect_content_type__1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.accept_entry.call(null,request,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var detect_content_type__2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.accept_entry.call(null,request,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var detect_content_type__3 = (function (content_type,request,format_entry){
var accept = ajax.core.accept_entry.call(null,request,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
detect_content_type = function(content_type,request,format_entry){
switch(arguments.length){
case 1:
return detect_content_type__1.call(this,content_type);
case 2:
return detect_content_type__2.call(this,content_type,request);
case 3:
return detect_content_type__3.call(this,content_type,request,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_content_type.cljs$core$IFn$_invoke$arity$1 = detect_content_type__1;
detect_content_type.cljs$core$IFn$_invoke$arity$2 = detect_content_type__2;
detect_content_type.cljs$core$IFn$_invoke$arity$3 = detect_content_type__3;
return detect_content_type;
})()
;
ajax.core.get_default_format = (function get_default_format(xhrio,p__24472){
var map__24474 = p__24472;
var map__24474__$1 = ((cljs.core.seq_QMARK_.call(null,map__24474))?cljs.core.apply.call(null,cljs.core.hash_map,map__24474):map__24474);
var request = map__24474__$1;
var response_format = cljs.core.get.call(null,map__24474__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__3981__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return "";
}
})(),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function() {
var detect_response_format_read = null;
var detect_response_format_read__1 = (function (request){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,request)).call(null,xhrio);
});
});
var detect_response_format_read__2 = (function (request,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,request)).call(null,xhrio);
});
detect_response_format_read = function(request,xhrio){
switch(arguments.length){
case 1:
return detect_response_format_read__1.call(this,request);
case 2:
return detect_response_format_read__2.call(this,request,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = detect_response_format_read__1;
detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = detect_response_format_read__2;
return detect_response_format_read;
})()
;
ajax.core.accept_header = (function accept_header(p__24475){
var map__24477 = p__24475;
var map__24477__$1 = ((cljs.core.seq_QMARK_.call(null,map__24477))?cljs.core.apply.call(null,cljs.core.hash_map,map__24477):map__24477);
var request = map__24477__$1;
var response_format = cljs.core.get.call(null,map__24477__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,request),response_format));
} else {
return ajax.core.accept_entry.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function() {
var detect_response_format = null;
var detect_response_format__0 = (function (){
return detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});
var detect_response_format__1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});
detect_response_format = function(opts){
switch(arguments.length){
case 0:
return detect_response_format__0.call(this);
case 1:
return detect_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format.cljs$core$IFn$_invoke$arity$0 = detect_response_format__0;
detect_response_format.cljs$core$IFn$_invoke$arity$1 = detect_response_format__1;
return detect_response_format;
})()
;
ajax.core.get_response_format = (function get_response_format(p__24478){
var map__24480 = p__24478;
var map__24480__$1 = ((cljs.core.seq_QMARK_.call(null,map__24480))?cljs.core.apply.call(null,cljs.core.hash_map,map__24480):map__24480);
var opts = map__24480__$1;
var response_format = cljs.core.get.call(null,map__24480__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
}
});
ajax.core.no_format = (function no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.normalize_method = (function normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function() {
var js_handler = null;
var js_handler__1 = (function (handler){
return (function (interceptors,response){
var process = (function process__$1(response__$1,interceptor){
return ajax.core._process_response.call(null,interceptor,response__$1);
});
var response__$1 = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,response__$1);
});
});
var js_handler__2 = (function (handler,interceptors){
return (function (response){
var process = (function process__$1(response__$1,interceptor){
return ajax.core._process_response.call(null,interceptor,response__$1);
});
var response__$1 = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,response__$1);
});
});
var js_handler__3 = (function (handler,interceptors,response){
var process = (function process__$1(response__$1,interceptor){
return ajax.core._process_response.call(null,interceptor,response__$1);
});
var response__$1 = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,response__$1);
});
js_handler = function(handler,interceptors,response){
switch(arguments.length){
case 1:
return js_handler__1.call(this,handler);
case 2:
return js_handler__2.call(this,handler,interceptors);
case 3:
return js_handler__3.call(this,handler,interceptors,response);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_handler.cljs$core$IFn$_invoke$arity$1 = js_handler__1;
js_handler.cljs$core$IFn$_invoke$arity$2 = js_handler__2;
js_handler.cljs$core$IFn$_invoke$arity$3 = js_handler__3;
return js_handler;
})()
;
ajax.core.base_handler = (function base_handler(interceptors,p__24481){
var map__24483 = p__24481;
var map__24483__$1 = ((cljs.core.seq_QMARK_.call(null,map__24483))?cljs.core.apply.call(null,cljs.core.hash_map,map__24483):map__24483);
var handler = cljs.core.get.call(null,map__24483__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__24484_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__3981__auto__ = p1__24484_SHARP_;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.raw_ajax_request = (function raw_ajax_request(p__24485){
var map__24487 = p__24485;
var map__24487__$1 = ((cljs.core.seq_QMARK_.call(null,map__24487))?cljs.core.apply.call(null,cljs.core.hash_map,map__24487):map__24487);
var request = map__24487__$1;
var interceptors = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__3981__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__24489 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__24489) {
case "url":
return ajax.core.url_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__24492 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__24492) {
case "detect":
return ajax.core.detect_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__24494_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__24494_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function() {
var transform_handler = null;
var transform_handler__1 = (function (p__24497){
var map__24505 = p__24497;
var map__24505__$1 = ((cljs.core.seq_QMARK_.call(null,map__24505))?cljs.core.apply.call(null,cljs.core.hash_map,map__24505):map__24505);
var finally$ = cljs.core.get.call(null,map__24505__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__24505__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__24505__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return ((function (map__24505,map__24505__$1,finally$,error_handler,handler){
return (function (p__24506){
var vec__24507 = p__24506;
var ok = cljs.core.nth.call(null,vec__24507,(0),null);
var result = cljs.core.nth.call(null,vec__24507,(1),null);
var temp__4124__auto___24508 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___24508)){
var h_24509 = temp__4124__auto___24508;
h_24509.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__24505,map__24505__$1,finally$,error_handler,handler))
});
var transform_handler__2 = (function (p__24495,p__24496){
var map__24503 = p__24495;
var map__24503__$1 = ((cljs.core.seq_QMARK_.call(null,map__24503))?cljs.core.apply.call(null,cljs.core.hash_map,map__24503):map__24503);
var finally$ = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var vec__24504 = p__24496;
var ok = cljs.core.nth.call(null,vec__24504,(0),null);
var result = cljs.core.nth.call(null,vec__24504,(1),null);
var temp__4124__auto___24510 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___24510)){
var h_24511 = temp__4124__auto___24510;
h_24511.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
transform_handler = function(p__24495,p__24496){
switch(arguments.length){
case 1:
return transform_handler__1.call(this,p__24495);
case 2:
return transform_handler__2.call(this,p__24495,p__24496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transform_handler.cljs$core$IFn$_invoke$arity$1 = transform_handler__1;
transform_handler.cljs$core$IFn$_invoke$arity$2 = transform_handler__2;
return transform_handler;
})()
;
ajax.core.transform_opts = (function transform_opts(p__24512){
var map__24514 = p__24512;
var map__24514__$1 = ((cljs.core.seq_QMARK_.call(null,map__24514))?cljs.core.apply.call(null,cljs.core.hash_map,map__24514):map__24514);
var opts = map__24514__$1;
var body = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"params","params",710516235));
var response_format = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var format = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"method","method",55703592));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__3981__auto__ = format;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,opts){
var f__6207__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__6207__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__6207__auto__));
};
var GET = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__24515__i = 0, G__24515__a = new Array(arguments.length -  1);
while (G__24515__i < G__24515__a.length) {G__24515__a[G__24515__i] = arguments[G__24515__i + 1]; ++G__24515__i;}
  opts = new cljs.core.IndexedSeq(G__24515__a,0);
} 
return GET__delegate.call(this,uri,opts);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__24516){
var uri = cljs.core.first(arglist__24516);
var opts = cljs.core.rest(arglist__24516);
return GET__delegate(uri,opts);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,opts){
var f__6207__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__6207__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__6207__auto__));
};
var HEAD = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__24517__i = 0, G__24517__a = new Array(arguments.length -  1);
while (G__24517__i < G__24517__a.length) {G__24517__a[G__24517__i] = arguments[G__24517__i + 1]; ++G__24517__i;}
  opts = new cljs.core.IndexedSeq(G__24517__a,0);
} 
return HEAD__delegate.call(this,uri,opts);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__24518){
var uri = cljs.core.first(arglist__24518);
var opts = cljs.core.rest(arglist__24518);
return HEAD__delegate(uri,opts);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,opts){
var f__6207__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__6207__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__6207__auto__));
};
var POST = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__24519__i = 0, G__24519__a = new Array(arguments.length -  1);
while (G__24519__i < G__24519__a.length) {G__24519__a[G__24519__i] = arguments[G__24519__i + 1]; ++G__24519__i;}
  opts = new cljs.core.IndexedSeq(G__24519__a,0);
} 
return POST__delegate.call(this,uri,opts);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__24520){
var uri = cljs.core.first(arglist__24520);
var opts = cljs.core.rest(arglist__24520);
return POST__delegate(uri,opts);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,opts){
var f__6207__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__6207__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__6207__auto__));
};
var PUT = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__24521__i = 0, G__24521__a = new Array(arguments.length -  1);
while (G__24521__i < G__24521__a.length) {G__24521__a[G__24521__i] = arguments[G__24521__i + 1]; ++G__24521__i;}
  opts = new cljs.core.IndexedSeq(G__24521__a,0);
} 
return PUT__delegate.call(this,uri,opts);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__24522){
var uri = cljs.core.first(arglist__24522);
var opts = cljs.core.rest(arglist__24522);
return PUT__delegate(uri,opts);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,opts){
var f__6207__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__6207__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__6207__auto__));
};
var DELETE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__24523__i = 0, G__24523__a = new Array(arguments.length -  1);
while (G__24523__i < G__24523__a.length) {G__24523__a[G__24523__i] = arguments[G__24523__i + 1]; ++G__24523__i;}
  opts = new cljs.core.IndexedSeq(G__24523__a,0);
} 
return DELETE__delegate.call(this,uri,opts);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__24524){
var uri = cljs.core.first(arglist__24524);
var opts = cljs.core.rest(arglist__24524);
return DELETE__delegate(uri,opts);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,opts){
var f__6207__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__6207__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__6207__auto__));
};
var OPTIONS = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__24525__i = 0, G__24525__a = new Array(arguments.length -  1);
while (G__24525__i < G__24525__a.length) {G__24525__a[G__24525__i] = arguments[G__24525__i + 1]; ++G__24525__i;}
  opts = new cljs.core.IndexedSeq(G__24525__a,0);
} 
return OPTIONS__delegate.call(this,uri,opts);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__24526){
var uri = cljs.core.first(arglist__24526);
var opts = cljs.core.rest(arglist__24526);
return OPTIONS__delegate(uri,opts);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,opts){
var f__6207__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__6207__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__6207__auto__));
};
var TRACE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__24527__i = 0, G__24527__a = new Array(arguments.length -  1);
while (G__24527__i < G__24527__a.length) {G__24527__a[G__24527__i] = arguments[G__24527__i + 1]; ++G__24527__i;}
  opts = new cljs.core.IndexedSeq(G__24527__a,0);
} 
return TRACE__delegate.call(this,uri,opts);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__24528){
var uri = cljs.core.first(arglist__24528);
var opts = cljs.core.rest(arglist__24528);
return TRACE__delegate(uri,opts);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PATCH = (function() { 
var PATCH__delegate = function (uri,opts){
var f__6207__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__6207__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__6207__auto__));
};
var PATCH = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__24529__i = 0, G__24529__a = new Array(arguments.length -  1);
while (G__24529__i < G__24529__a.length) {G__24529__a[G__24529__i] = arguments[G__24529__i + 1]; ++G__24529__i;}
  opts = new cljs.core.IndexedSeq(G__24529__a,0);
} 
return PATCH__delegate.call(this,uri,opts);};
PATCH.cljs$lang$maxFixedArity = 1;
PATCH.cljs$lang$applyTo = (function (arglist__24530){
var uri = cljs.core.first(arglist__24530);
var opts = cljs.core.rest(arglist__24530);
return PATCH__delegate(uri,opts);
});
PATCH.cljs$core$IFn$_invoke$arity$variadic = PATCH__delegate;
return PATCH;
})()
;
