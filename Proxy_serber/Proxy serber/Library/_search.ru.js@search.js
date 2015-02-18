function logAction(t,e){for(var i,n,s=t[0]?t[0]:t.domElem?t.domElem[0]:t,o=[];s&&"#document"!==s.nodeName;){i=s.getAttribute("data-log-node"),i&&(i=JSON.parse(i),o.unshift(i));
var r=s.getAttribute("data-log-tree-portal-bottom");if(r){var a=document.querySelector(".log-tree-portal-top-"+r);
if(!a)throw Error("invalid data-log-tree-portal-top id");s=a}else s=s.parentNode}o.length&&(n={event:e,path:o},sendTreeToLog(t,n))
}function sendTreeToLog(t,e){e&&(host=window.BEM&&BEM.blocks["i-global"].param("clck")||(document.body.onclick||document.body.ondblclick)()["i-global"].clck,document.createElement("IMG").src=host+"/events="+encodeURIComponent(JSON.stringify([e]))+"/cts="+(new Date).getTime()+"/*"+(t&&t.href?t.href:"http://yandex.ru/"))
}var _borschik=function(){var t=this._borschik||function(e){return!(e in t||t[e]++)};return t}();if(_borschik("HiMlFMeFAH603IudCL-WvHML3iE")){var BEMHTML=function(){function t(t){return t._mode=i,t.block=n,t.elem=s,t.elemMods=o,t.mods=r,t
}function e(t,e){var a=i;i=e._mode;var c=n;n=e.block;var u=s;s=e.elem;var l=o;o=e.elemMods;var h=r;r=e.mods;
var d=t(e);return i=a,n=c,s=u,o=l,r=h,d}var i,n,s,o,r,a,c={},u=function(c){function u(t){var e=i;if("attrs"===e)return l(t);
if("icon-size"===e)return"z-interactive"===n?"form-checkbox"===s?Ti(t):nn(t):nn(t);if("empty-option"===e)return"z-interactive"===n?"form-dropdown"===s?Oi(t):nn(t):nn(t);
if("elem"===e)return"dropdown"===n?!(r&&"yes"===r.advanced)==!1?"title-text":nn(t):nn(t);if("date-string"===e)return"z-interactive"===n?"form-date"===s?Ii(t):nn(t):nn(t);
if("live"===e){var e=n;return"checkbox"===e?!!s==!1?$i(t):nn(t):"input"===e?!!s==!1?Ni(t):nn(t):nn(t)
}if("auto-content"===e)return"auth"===n?zi(t):nn(t);if("action"===e)return"auth"===n?!!s==!1?Ri(t):nn(t):nn(t);
if("service-url"===e)return"i-services"===n?Li(t):nn(t);if("bem"===e)return Ui(t);if("price"===e)return"interactive-results"===n?"item"===s?Di(t):nn(t):nn(t);
if("lego-input"===e)return"search"===n?!!s==!1?Vi(t):nn(t):nn(t);if("price-format"===e)return"interactive-results"===n?"item"===s?Ci(t):nn(t):nn(t);
if("lego-label"===e)return"search"===n?!!s==!1?Ki(t):nn(t):nn(t);if("price-format-cents"===e)return"interactive-results"===n?"item"===s?Si(t):nn(t):nn(t);
if("get-label"===e)return"search"===n?!!s==!1?Wi(t):nn(t):nn(t);if("default"===e)return je(t);if("value"===e)return"input"===n?Qi(t):nn(t);
if(""===e)return Ce(t);if("public-params"===e)return"i-global"===n?Yi(t):nn(t);if("mix"===e)return ye(t);
if("js-params"===e)return"b-page"===n?!!s==!1?Ji(t):nn(t):nn(t);if("js"===e)return pe(t);if("env"===e)return"i-global"===n?Zi(t):nn(t);
if("content"===e)return L(t);if("jsAttr"===e)return tn(t);if("tag"===e)return A(t);if("cls"===e)return en(t);
if("format-value"===e){if("value"===s){var e=n;return"notice"===e?ji(t):"ticker"===e?Ai(t):nn(t)}return nn(t)
}return nn(t)}function l(t){var e=n;if("b-link"===e)return h(t);if("z-interactive"===e){var e=s;return"send-form"===e?{method:"POST"}:"form"===e?{target:"_blank"}:j(t)
}if("input"===e){var e=s;return"control"===e?m(t):"label"===e?{id:t._labelId,"for":t._inputId,"aria-hidden":!0}:"hint"===e?{id:t._hintId,"for":t._inputId,"aria-hidden":!0}:"requery"===e?{"aria-hidden":!0}:"clear"===e?{unselectable:"on"}:j(t)
}if("dropdown"===e)return"hidden-value"===s?!(r&&"yes"===r.advanced)==!1?{type:"hidden",name:t.ctx.name,value:t.ctx.value||""}:j(t):j(t);
if("notice"===e)return"count"===s?!t.ctx.url==!1?{href:t.ctx.url}:g(t):g(t);if("interactive-results"===e)return"image"===s?{style:"background-image:url("+t.ctx.src+")"}:j(t);
if("checkbox"===e){var e=s;if("label"===e){var o=t.ctx.attrs||{};return o["for"]=t._checkboxAttrs.id,o.id=t._labelId,o["aria-hidden"]=!0,o
}return"control"===e?v(t):j(t)}if("auth"===e){var e=s;if("social-link"===e)return{role:"button",tabindex:0,title:t.ctx.title,"aria-label":t.ctx.title};
if("social"===e)return{role:"group","aria-label":BEM.I18N("auth","social-log-in")};if("retpath"===e)return{type:"hidden",name:"retpath",value:t._retpath||""};
if(!!s==!1){var a,c;return{method:"POST",action:t.ctx.url||(a=i,i="action",c=Ri(t),i=a,c),role:"form","aria-label":BEM.I18N("auth","auth")}
}return j(t)}if("domik"===e)return y(t);if("link"===e)return k(t);if("service"===e){if("url"===s){var u=t.ctx.urlAttrs||{};
return u.href=t.ctx.url+t.ctx.urlParams,t.ctx.counter&&(u.onmousedown=t.ctx.counter),u}return j(t)}if("check-button"===e){var e=s;
if("control"===e){for(var l,d=t.ctx,p={type:"checkbox"},f=["tabindex","name","value","id"];l=f.pop();)d[l]&&(p[l]=d[l]);
return d.checked&&(p.checked="checked"),d.disabled&&(p.disabled="disabled"),p["aria-labelledby"]=d.labelledby,p
}return"text"===e?{id:t._control.labelledby}:!!s==!1?{"for":t._control.id}:j(t)}if("search"===e){if(!!s==!1){var a,c;
return{action:t.ctx.action||"/",role:"search","aria-label":(a=i,i="get-label",c=Wi(t),i=a,c)}}return j(t)
}if("image"===e){if(!!s==!1){var _,x=t.ctx,w={src:"//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",alt:""},M=["alt","width","height"];
for(x.url&&(w.src=x.url);_=M.shift();)x[_]&&(w[_]=x[_]);return w}return j(t)}if("suggest2-item"===e){var e=s;
return"icon"===e?!t.ctx.png==!1?!t.ctx.svg==!1?{style:'background-image:url("'+t.ctx[BEM.blocks["i-ua"]&&BEM.blocks["i-ua"].svg?"svg":"png"]+'")'}:B(t):B(t):"link"===e?{href:t.ctx.url,target:t.ctx.target}:"bullet"===e?{"aria-hidden":!0}:j(t)
}if("slider"===e){var e=s;return"unit"===e?{"aria-hidden":!0}:"title"===e?{id:t._titleId,"aria-hidden":!0}:"mark"===e?{"aria-hidden":!0}:"runner"===e?{hideFocus:"true",id:t.ctx.id,role:"slider","aria-valuenow":t._value,"aria-valuemin":t.ctx.min,"aria-valuemax":t.ctx.max,"aria-disabled":"yes"===(t.ctx.mods||{}).disabled,"aria-labelledby":t.ctx.labelledby,"aria-controls":t.ctx.inputId}:j(t)
}if("select"===e){var e=s;if("group"===e)return{role:"group","aria-labelledby":t._labelId};if("control"===e){for(var E,D=["id","name","tabindex"],P={};E=D.pop();)t._controlAttrs[E]&&(P[E]=t._controlAttrs[E]);
return"yes"===r.disabled&&(P.disabled="disabled"),P.tabindex=-1,P["aria-hidden"]=!0,t.ctx.controlAttrs||P
}return"item"===e?S(t):j(t)}if("b-icon"===e){if(!!s==!1){var I,T=t.ctx,O={src:"//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",alt:""},A=["alt","width","height"];
for(T.url&&(O.src=T.url);I=A.shift();)T[I]&&(O[I]=T[I]);return O}return j(t)}if("button"===e)return C(t);
if("ticker"===e){var e=s;return"value"===e?{title:t._count}:"count"===e?!t.ctx.url==!1?{href:t.ctx.url}:b(t):b(t)
}return j(t)}function h(t){return!(t.__$anflg44!==!0)==!1?!!s==!1?d(t):p(t):p(t)}function d(t){for(var e,i,n,s=(e=t.__$anflg44,t.__$anflg44=!0,i=h(t),t.__$anflg44=e,i||{}),o=t.ctx,r=o.url,a=o.counter,c=t["i-global"],u=["title","target"],l=/^(https?:)?\/\/([^.?#\/]+\.)*?yandex\.(ru|by|ua|kz|com|com\.tr|net|st)(:\d{1,5})?([#\/?].*)?$/,d=c.isYandexNet&&!c.isPumpkin&&a&&-1===a.indexOf(c.redirPrefix)&&r&&r.match(/^(https?:)?\/\//)&&!r.match(l);n=u.pop();)o[n]&&(s[n]=o[n]);
return a&&(s.onmousedown=a),s.href=d?"//h.yandex.net/?"+encodeURIComponent(r):r,s}function p(t){return!!s==!1?f(t):j(t)
}function f(t){for(var e,n,s,o,r=t.ctx,a=["title","target"],c=typeof r.url,u={href:"undefined"===c||"string"===c?r.url:(c=[],e=t._buf,t._buf=c,n=i,i="",s=t.ctx,t.ctx=r.url,o=Ce(t),t._buf=e,i=n,t.ctx=s,c.join(""))};c=a.pop();)r[c]&&(u[c]=r[c]);
return u}function m(t){if(!(t.__$anflg32!==!0)==!1){if(!(r&&"yes"===r.readonly)==!1){var e,i,n=(e=t.__$anflg32,t.__$anflg32=!0,i=m(t),t.__$anflg32=e,i);
return n.readonly="readonly",n}return _(t)}return _(t)}function _(t){var e=t._.extend({id:t._inputId,name:t._name},t.ctx.controlAttrs);
return(t._value||0===t._value)&&(e.value=t._value),r.disabled&&(e.disabled="disabled"),t._live&&(e.autocomplete="off"),e["aria-labelledby"]=t._labelId+" "+t._hintId,e
}function g(t){return!!s==!1?{role:"alert","aria-live":"assertive","aria-atomic":!0}:j(t)}function b(t){return!!s==!1?{role:"alert","aria-live":"assertive","aria-atomic":!0}:j(t)
}function v(t){if(!(t.__$anflg29!==!0)==!1){var e,i;return t._.extend((e=t.__$anflg29,t.__$anflg29=!0,i=v(t),t.__$anflg29=e,i),{autocomplete:"off"})
}var n=t.ctx.attrs||{};return n.id=t._checkboxAttrs.id,n.type="checkbox",n.autocomplete="off",r.disabled&&(n.disabled="disabled"),"yes"==r.checked&&(n.checked="checked"),n["aria-labelledby"]=t._labelId,n
}function y(t){if(!(t.__$anflg22!==!0)==!1){if(!(r&&"popup"===r.type)==!1){if(!!s==!1){var e,i,n=(e=t.__$anflg22,t.__$anflg22=!0,i=y(t),t.__$anflg22=e,i||{});
return n.role="dialog",n}return j(t)}return j(t)}return j(t)}function k(t){return!(t.__$anflg21!==!0)==!1?!!s==!1?x(t):w(t):w(t)
}function x(t){for(var e,i,n,s=(e=t.__$anflg21,t.__$anflg21=!0,i=k(t),t.__$anflg21=e,i||{}),o=t.ctx,r=o.url,a=o.counter,c=t["i-global"],u=["title","target"],l=/^(https?:)?\/\/([^.?#\/]+\.)*?yandex\.(ru|by|ua|kz|com|com\.tr|net|st)(:\d{1,5})?([#\/?].*)?$/,h=c.isYandexNet&&!c.isPumpkin&&a&&-1===a.indexOf(c.redirPrefix)&&r&&r.match(/^(https?:)?\/\//)&&!r.match(l);n=u.pop();)o[n]&&(s[n]=o[n]);
return a&&(s.onmousedown=a),s.href=h?"//h.yandex.net/?"+encodeURIComponent(r):r,s}function w(t){if(!(t.__$anflg20!==!0)==!1){if(!(r&&"yes"===r.disabled)==!1){if(!!s==!1){var e,i,n=(e=t.__$anflg20,t.__$anflg20=!0,i=k(t),t.__$anflg20=e,i||{});
return n.tabindex=-1,n["aria-disabled"]=!0,n}return M(t)}return M(t)}return M(t)}function M(t){return!!s==!1?E(t):j(t)
}function E(t){var e=t.ctx,n={};if(["title","target","id","tabindex"].forEach(function(t){e.hasOwnProperty(t)&&(n[t]=String(e[t]))
}),null!==e.url&&"undefined"!=typeof e.url)if(t.isSimple(e.url))n.href=String(e.url);else{var s=[],o=i;
i="";var r=t._buf;t._buf=s;var a=t.ctx;t.ctx=e.url,Ce(t),i=o,t._buf=r,t.ctx=a,n.href=s.join("")}else n.role="button",n.tabindex||(n.tabindex="0");
return n}function B(t){return!t.ctx.svg==!1?{style:'background-image:url("'+t.ctx.svg+'")'}:!t.ctx.png==!1?{style:'background-image:url("'+t.ctx.png+'")'}:j(t)
}function S(t){if(!(t.__$anflg8!==!0)==!1){var e,i,n=(e=t.__$anflg8,t.__$anflg8=!0,i=S(t),t.__$anflg8=e,i||{});
return"yes"===(t.ctx.elemMods||{}).label&&(n.id=t._labelId,n["aria-hidden"]=!0),n}return{id:t.generateId()}
}function C(t){return!t._formSelect==!1?!!s==!1?{role:"listbox",type:"button","aria-haspopup":!0,"aria-expanded":!1}:D(t):D(t)
}function D(t){if(!(t.__$anflg5!==!0)==!1){if(!t.ctx.counter==!1){if(!!s==!1){var e,i;return t._.extend((e=t.__$anflg5,t.__$anflg5=!0,i=C(t),t.__$anflg5=e,i),{onmousedown:t.ctx.counter})
}return P(t)}return P(t)}return P(t)}function P(t){if(!(t.__$anflg4!==!0)==!1){if(!t.ctx.url==!1){if(!!s==!1){var e,i,n=t.ctx,o=(e=t.__$anflg4,t.__$anflg4=!0,i=C(t),t.__$anflg4=e,i),a={href:n.url};
return n.target&&(a.target=n.target),r.disabled&&(a["aria-disabled"]=!0),t._.extend(o,a)}return I(t)}return I(t)
}return I(t)}function I(t){return!(t.__$anflg3!==!0)==!1?!!s==!1?!!t.ctx.url==!1?T(t):O(t):O(t):O(t)}function T(t){for(var e,i,n,s=t.ctx,o=(e=t.__$anflg3,t.__$anflg3=!0,i=C(t),t.__$anflg3=e,i),a={type:s.type||"button"},c=["name","value"];n=c.shift();)s[n]&&(a[n]=s[n]);
return r.disabled&&(a.disabled="disabled"),t._.extend(o,a)}function O(t){if(!!s==!1){var e=t.ctx,i={role:"button"};
return e.tabindex&&(i.tabindex=e.tabindex),i}return j(t)}function j(){return void 0}function A(t){var e=n;
if("b-link"===e)return!!s==!1?"a":R(t);if("dropdown"===e)return!(r&&"yes"===r.advanced)==!1?!!s==!1?"span":z(t):z(t);
if("notice"===e||"ticker"===e){var e=s;return"value"===e||"text"===e?"span":"count"===e?!t.ctx.url==!1?"a":"span":!!s==!1?"span":R(t)
}if("checkbox"===e){var e=s;return"label"===e?"label":"control"===e?"input":!!s==!1?"span":R(t)}if("input"===e){var e=s;
return"calendar"===e?"i":"label"===e||"hint"===e?"label":"box-layout-cell"===e?!t._service==!1?"td":N(t):"box-layout"===e?!t._service==!1?"table":N(t):"clear"===e?"span":"control"===e?"input":"ahead-hint"===e||"ahead-filler"===e?"span":N(t)
}if("domik"===e){var e=s;return"logo"===e||"roof-body"===e||"roof-border"===e?"i":R(t)}if("link"===e)return"inner"===s?"span":!!s==!1?t.ctx.url?"a":"span":R(t);
if("service"===e)return"url"===s?"a":R(t);if("search"===e){var e=s;return"cell"===e?"td":"row"===e?"tr":"table"===e?"table":!!s==!1?"form":R(t)
}if("suggest2-item"===e){var e=s;return"icon"===e?"span":"link"===e?"a":"bullet"===e?"span":"highlight"===e?"b":"fact"===e||"text"===e?"span":!!s==!1?"li":R(t)
}if("z-interactive"===e){var e=s;return"send-form"===e||"form"===e?"form":"cell"===e||"row"===e||"table"===e?"div":R(t)
}if("suggest2"===e){var e=s;return"a11y"===e?"span":"items"===e?"ul":R(t)}if("interactive-results"===e)return"image"===s?"i":R(t);
if("select"===e){var e=s;return"control"===e?"select":"text"===e?"span":"option-group"===e?"optgroup":"option"===e?"option":!!s==!1?"span":R(t)
}if("check-button"===e)return"control"===s?"input":!!s==!1?"label":R(t);if("popup"===e){var e=s;return"tail"===e||"close"===e?"i":R(t)
}if("spin"===e)return"label"===s?"span":R(t);if("frame"===e)return"iframe"===s?"iframe":R(t);if("image"===e)return!!s==!1?"img":R(t);
if("button"===e)return!t.ctx.url==!1?!!s==!1?"a":F(t):F(t);if("slider"===e)return!(r&&"interactive"===r["for"])==!1?!~["title-from","title-to"].indexOf(s)==!1?"span":$(t):$(t);
if("b-statcounter"===e)return!!s==!1?"i":R(t);if("b-icon"===e)return!!s==!1?"img":R(t);if("rub"===e)return!!s==!1?"span":R(t);
if("b-autocomplete-item"===e)return!!s==!1?"li":R(t);if("i-ua"===e)return!!s==!1?"script":R(t);if("auth"===e){var e=s;
return"social-link"===e?"a":"social-icon"===e?"i":"retpath"===e?"input":!!s==!1?"form":R(t)}return R(t)
}function $(t){var e=s;return"unit"===e||"title"===e||"text"===e?"span":"runner"===e?"a":R(t)}function N(t){return!!s==!1?"span":R(t)
}function z(t){var e=s;return"hidden-value"===e?!(r&&"yes"===r.advanced)==!1?"input":R(t):"switcher-text"===e||"text"===e?"span":R(t)
}function F(t){return!!s==!1?"button":R(t)}function R(){return void 0}function L(t){var e=n;if("b-autocomplete-item"===e){if(!(r&&"service-pay"===r.type)==!1){if(!!s==!1){var o=BEM.blocks["i-common__string"],a=o.escapeHTML(t.ctx.data[1]),c=t.ctx.data[2];
return[{block:"b-autocomplete-item",elem:"text",content:a},{block:"b-autocomplete-item",elem:"service-pay-inn",content:c.inn}]
}return q(t)}return q(t)}if("input"===e){var e=s;return"box"===e?te(t):"requery"===e?[{elem:"requery-input",tag:"input"},{elem:"requery-hidden",tag:"span"},{elem:"requery-visible",tag:"span"}]:"clear"===e?!!t.ctx.content==!1?"":de(t):"ahead"===e?[{elem:"ahead-filler"},{elem:"ahead-hint"}]:de(t)
}if("notice"===e){var e=s;if("value"===e){var u,l;return u=i,i="format-value",l=ji(t),i=u,l}return"text"===e?BEM.I18N("notice","notifications"):"count"===e?[{elem:"text"},{elem:"value",count:t.ctx.content}]:!("undefined"!=typeof t.ctx.count)==!1?!!s==!1?{elem:"count",url:t.ctx.url,content:t.ctx.count}:de(t):de(t)
}if("ticker"===e){var e=s;if("value"===e){var u,l;return u=i,i="format-value",l=Ai(t),i=u,l}return"text"===e?BEM.I18N("ticker__text","notifications"):"count"===e?[{elem:"text"},{elem:"value",count:t.ctx.content}]:!!s==!1?{elem:"count",url:t.ctx.url,content:t.ctx.count}:de(t)
}if("checkbox"===e)return!!s==!1?[{elem:"box",tag:"span",elemMods:"yes"===r.checked?{checked:"yes"}:"",content:[{elem:"control",attrs:t.ctx.checkboxAttrs||{}},{elem:"tick",tag:"i"}]},t.ctx.content]:de(t);
if("z-interactive"===e){var e=s;if("form-slider"===e)return Q(t);if("form-action"===e)return{block:"button",mix:[{block:"z-interactive",elem:"submit"}],type:"submit",mods:{theme:"action",size:t._size},content:[{elem:"label",content:t.ctx.go_text},{block:"z-interactive",elem:"count",content:t.ctx.found_text}]};
if("form-date"===e)return G(t);if("form-suggest"===e)return X(t);if("form-input"===e){var h=t.ctx.data;
return{block:"input",js:{"default":h["default"]},name:h.id,value:h.selected||h["default"]||"",mods:{size:t._size,filter:t.ctx.filter,"has-default":h["default"]?"yes":"","default-view":!h.selected&&h["default"]?"yes":""},content:[{elem:"label",content:t._.xmlEscape(h.caption)},{elem:"control"}]}
}return"form-checkbox"===e?Y(t):"form-dropdown"===e?J(t):"form-table"===e?Z(t):de(t)}if("domik"===e)return!!s==!1?[{elem:"roof",content:[{elem:"roof-border"},{elem:"roof-body"},{elem:"logo"}]},{elem:"content",content:t.ctx.content}]:de(t);
if("suggest2"===e)return"title"===s?[{elem:"a11y",content:BEM.I18N("suggest2","group")+": "},t.ctx.content]:de(t);
if("service"===e)return se(t);if("search"===e)return!!t.ctx.content==!1?!!s==!1?ae(t):ce(t):ce(t);if("suggest2-item"===e)return!(r&&"link"===r.interact)==!1?!!s==!1?{elem:"link",url:t.ctx.url,target:t.ctx.target||"_blank",content:t.ctx.content}:ue(t):ue(t);
if("interactive-results"===e){var e=s;return"item"===e?"gallery"===t.ctx.type?H(t):K(t):"ajax-wrap"===e?!(t.ctx.data&&"gallery"===t.ctx.data.template)==!1?V(t):{block:"interactive-results",elem:"main",mods:{type:t.ctx.type},target:t.ctx.target}:K(t)
}if("button"===e)return!!s==!1?{elem:"text",tag:"span",content:t.ctx.content}:de(t);if("check-button"===e)return!!s==!1?[t._control,{elem:"text",tag:"span",content:t.ctx.content}]:de(t);
if("popup"===e)return!!s==!1?[{elem:"under",mods:t.ctx.underMods},t.ctx.content]:de(t);if("spin"===e)return U(t);
if("rub"===e)return!!s==!1?"Р":de(t);if("slider"===e){var e=s;return"text"===e?t._value:"runner"===e?{elem:"text"}:!!s==!1?[t.ctx.content,{elem:"body",content:{elem:"click"}}]:de(t)
}if("i-ua"===e)return le(t);if("auth"===e){var e=s;return"register"===e?!!t.ctx.content==!1?{block:"button",mods:{theme:"pseudo",size:"s"},url:t.ctx.url||[t._passportHost,"/passport?mode=register",t._paramFrom,t._paramRetpath].join(""),content:BEM.I18N("auth","register")}:ne(t):"remember"===e?!!t.ctx.content==!1?{block:"button",mods:{theme:"pseudo",size:"s"},url:t.ctx.url||[t._passportHost,"/passport?mode=restore",t._paramFrom,t._paramRetpath].join(""),content:BEM.I18N("auth","remember")}:ne(t):"button"===e?!!t.ctx.content==!1?{block:"button",type:"submit",mods:{theme:"action",size:"m"},content:BEM.I18N("auth","logon")}:ne(t):"haunter"===e?!!t.ctx.content==!1?{block:"checkbox",mods:{theme:"normal",size:"m"},checkboxAttrs:{id:"auth-haunter",autocomplete:"off",name:"twoweeks",value:"no"},content:{elem:"label",content:BEM.I18N("auth","temporary")}}:ne(t):"password"===e?!!t.ctx.content==!1?{block:"input",mods:{theme:"normal",size:"m"},name:"passwd",content:[{elem:"hint",content:BEM.I18N("auth","password")},{elem:"control",attrs:{type:"password",maxlength:256,"aria-required":!0}}]}:ne(t):"username"===e?!!t.ctx.content==!1?{block:"input",mods:{theme:"normal",size:"m"},name:"login",content:[{elem:"hint",content:BEM.I18N("auth","login")},{elem:"control",attrs:{"aria-required":!0}}]}:ne(t):ne(t)
}return de(t)}function q(t){if(!!s==!1){var e=t.ctx.data,i=BEM.blocks["i-common__string"],n=i.escapeHTML(t._.isArray(e)?e[1]:e);
return i.highlight(n,t.ctx.hl)}return de(t)}function U(t){if(!(t.__$anflg39!==!0)==!1){if(!t.ctx.label==!1){if(!!s==!1){var e,i;
return[{elem:"label",content:t.ctx.label},(e=t.__$anflg39,t.__$anflg39=!0,i=U(t),t.__$anflg39=e,i)]}return de(t)
}return de(t)}return de(t)}function H(t){var e,n,s,o,r=t.ctx.itemData,a=t.ctx.index,c=r.meta?r.meta[0]:"";
return[{block:"b-link",url:r.url,target:t.ctx.target,content:{block:"interactive-results",elem:"image",src:r.image,mods:{pos:a}}},{elem:"price",content:(e=i,i="price",n=t._currency,t._currency=t.ctx.currency,s=t.ctx,t.ctx=r,o=Di(t),i=e,t._currency=n,t.ctx=s,o)},{block:"b-link",mix:{block:"interactive-results",elem:"link"},url:r.url,target:t.ctx.target,content:{block:"interactive-results",elem:"title",content:r.title,mods:{pos:a}}},r.description&&{elem:"description",content:r.description},c&&{elem:"meta",content:c}]
}function V(t){for(var e,i=t.ctx.data,n=i.results||[],s=t.ctx.target,o=t.ctx.currency,r=t.ctx.displayCount,a=[],c=0;r>c;c++)e=n[c],a.push({elem:"cell",mods:{first:0===c?"yes":null,last:c===r-1?"yes":null,"main-last":1===c?"yes":"",extra:c>1?"yes":""},content:e&&{block:"interactive-results",elem:"item",type:"gallery",data:i,index:c,itemData:e,currency:o,target:s}});
return{block:"z-interactive",elem:"table",mix:[{block:"interactive-results",elem:"main",mods:{type:"gallery"}}],content:{elem:"row",mods:{first:"yes"},content:a}}
}function K(t){return!!s==!1?W(t):de(t)}function W(t){var e=t.ctx.data,i=t.ctx.i18n;return[{elem:"ajax-wrap",data:e,type:t.ctx.type,target:t.ctx.js.target,currency:t.ctx.js.currency,displayCount:t.ctx.js.displayCount},{elem:"message",elemMods:{type:"error"},content:[{elem:"message-title",content:i.errorTitle},{elem:"message-description",content:i.errorDescription},{block:"b-link",mix:{block:"interactive-results",elem:"submit"},target:t.ctx.js.target,content:t.ctx.host.name,url:t.ctx.host.url}]},{elem:"message",elemMods:{type:"not-found"},content:{elem:"message-title",content:i.notFound}},{elem:"fade",content:{block:"spin",mods:{theme:"gray-32",progress:"yes"===(t.ctx.mods||{}).empty?"yes":""},js:!0}}]
}function Q(t){var e=t.ctx.data,i=e.selected,n=i.from||i["default-from"],s=i.to||i["default-to"],o=t.ctx.isSliderDegradation,r="",a="",c=t.ctx.size;
if(o!==!0&&(r={size:c,block:"slider",mix:[{block:"z-interactive",elem:"slider"}],mods:{type:"range",theme:"normal",interactive:"no",size:"s",orientation:"horiz",input:"hidden","for":"interactive"},js:{min:e.min,max:e.max,scale:[{value:e.min,step:e.step},{value:e.max}]},content:[{elem:"title",content:[e.caption+" ",e["from-caption"]+" ",{elem:"title-from",content:n}," "+e["to-caption"]+" ",{elem:"title-to",content:s}," "+e.unit]},{elem:"info",elemMods:{preset:"inline"},content:[{block:"input",mods:{size:"s"},value:n,content:{elem:"control",attrs:{name:e.id}}},{block:"input",mods:{size:"s"},value:s,content:{elem:"control",attrs:{name:e.id}}}]}]}),o!==!1){var u=e.unit?", "+e.unit:"",n=e["from-caption"]?(u?" ":", ")+e["from-caption"]:"",s=e["to-caption"]?(u?" ":", ")+e["to-caption"]:"",l=e.caption+n+u,h=e.caption+s+u,d={id:e.id,selected:e.selected&&e.selected.from,"default":e.selected&&e.selected["default-from"],caption:l},p={id:e.id,selected:e.selected&&e.selected.to,"default":e.selected&&e.selected["default-to"],caption:h};
a=[{elem:"form-input",mods:{first:"yes"},size:3,filter:"digit",data:d},{elem:"form-input",mods:{last:"yes"},size:3,filter:"digit",data:p}]
}return[r,a]}function G(t){var e,n,s,o,r,a,c,u,l=t.ctx.data;return isNaN(parseInt(l.min,10))||(e=i,i="date-string",n=t._offset,t._offset=parseInt(l.min,10),s=Ii(t),i=e,t._offset=n,c=s),isNaN(parseInt(l.max,10))||(o=i,i="date-string",r=t._offset,t._offset=parseInt(l.max,10),a=Ii(t),i=o,t._offset=r,u=a),{block:"input",js:{earlierLimit:c,laterLimit:u,months:t.ctx.i18n.months,weekDays:t.ctx.i18n.weekdays,popupMix:{block:"input",elem:"calendar-popup",elemMods:{type:"interactive"}},"default":l["default"]},name:l.id,value:l.selected||l["default"]||"",mods:{size:t._size,"has-calendar":"yes","has-default":l["default"]?"yes":"","default-view":!l.selected&&l["default"]?"yes":""},content:[{elem:"label",content:t._.xmlEscape(l.caption)},{elem:"control",content:{elem:"calendar"}}]}
}function X(t){var e=t.ctx.data,i=e["default"]&&e["default"].key,n=e.selected&&e.selected.key;return{block:"input",name:e.id,value:n&&e.selected.caption||i&&e["default"].caption||"",attrs:{"data-key":n&&e.selected.key||i&&e["default"].key,"data-val":n&&e.selected.caption||i&&e["default"].caption},mods:{size:t._size,"nosplit-words":"yes","noprevent-tab":"yes","default-view":!n&&i?"yes":"","z-interactive":"yes"},js:{"default":e["default"],i18n:{empty:t.ctx.i18n.empty_item_text},showOverChars:1},content:[{elem:"label",content:t._.xmlEscape(e.caption)},{elem:"control"}]}
}function Y(t){var e,n,s=t.ctx.data,o=(e=i,i="icon-size",n=Ti(t),i=e,n),r={};return r[o]="check",{block:"check-button",js:{val:s.checked},mods:{size:t._size,checked:s.selected?"yes":"","z-interactive":"yes","z-interactive-exp":t._exp?"yes":""},name:s.id,value:s.checked,content:[{block:"b-icon",mix:[{block:"check-button",elem:"icon",mods:r}],alt:"Metro"},t._.xmlEscape(s.caption)]}
}function J(e){var n,s,o,r=e.ctx.data,a=t(e),c=r["default"]&&r["default"].key,u=r.selected&&r.selected.key;
return{block:"select",name:r.id,mods:{size:e._size,theme:"normal","z-interactive":"yes","z-interactive-exp":e._exp?"yes":""},js:{popupMods:{"z-interactive":"yes","z-interactive-exp":e._exp?"yes":""},popupParams:{directions:["bottom-left","bottom-right"]}},content:[{tag:"span",elem:"caption",content:e._.xmlEscape(r.caption)},{block:"button",mods:{size:e._size},content:u&&e._.xmlEscape(r.selected.caption)||c&&e._.xmlEscape(r["default"].caption)||""},{elem:"control",content:[(n=i,i="empty-option",s=e._label,e._label=e._.xmlEscape(r.caption),o=Oi(e),i=n,e._label=s,o)].concat(r.values.map(function(t){return{elem:"option",attrs:u&&r.selected.key==t.key||!u&&c&&r["default"].key==t.key?{value:t.key,selected:"selected"}:{value:t.key},content:a._.xmlEscape(t.caption)}
}))}]}}function Z(t){var e=t.ctx,i=t.ctx.i18n,n=t.ctx.data||{},s=n.filters||[],o=(t.ctx.baseline3,0),r=5,a=function(t,e){if(o===r)return void 0;
if(Array.isArray(t)){r+=t.length-1;for(var i=[],n=0;n<t.length;n++)a(t[n],i);e.push(i)}else{if(!t.size){var s,c=parseInt(t.chars,10);
s=c>0&&6>c?2:c>0&&11>c?3:c>0&&15>c?4:c>0&&19>c?5:c>0?6:3,t.size=s}o+=1,e.push(t)}},c=function(t,e){e.push({elem:"form-action",url:t,size:3,go_text:i.go,found_text:i.found})
},u=[],l=function(t){for(var s=0;s<t.length;s++){var o=t[s],r=o.view&&o.view["expected-width-in-chars"],a="drop-down"==o.type||"geo"==o.type;
if(a&&o.values&&o.values.length>0)o["default"]=o["default-selected"],u.push({elem:"form-dropdown",chars:r,data:o});
else if("range-geo"==o.type){var c={id:o.id,selected:o.selected&&o.selected.from,"default":o.selected&&o.selected["default-from"],caption:i.geo_from},h={id:o.id,selected:o.selected&&o.selected.to,"default":o.selected&&o.selected["default-to"],caption:i.geo_to};
o.values&&o.values.length>0?(c.values=h.values=o.values,u.push([{elem:"form-dropdown",chars:r,data:c},{elem:"form-dropdown",chars:r,data:h}])):o.suggest&&(c.site_id=h.site_id=n["site-id"],u.push([{elem:"form-suggest",chars:r,data:c,i18n:i},{elem:"form-suggest",chars:r,data:h,i18n:i}]))
}else if("checkbox"==o.type)u.push({elem:"form-checkbox",chars:r,data:o});else if("date"==o.type)u.push({elem:"form-date",chars:r,data:o,i18n:i});
else if("range-date"==o.type){var c={id:o.id,min:o.min,max:o.max,selected:o.selected&&o.selected.from,"default":o.selected&&o.selected["default-from"],caption:o["from-caption"]},h={id:o.id,min:o.min,max:o.max,selected:o.selected&&o.selected.to,"default":o.selected&&o.selected["default-to"],caption:o["to-caption"]};
u.push([{elem:"form-date",chars:Math.ceil(r/2),data:c,i18n:i},{elem:"form-date",chars:Math.floor(r/2),data:h,i18n:i}])
}else"range"==o.type?u.push({elem:"form-slider",mods:{degradable:e.isSliderDegradation?"yes":""},isSliderDegradation:e.isSliderDegradation,size:6,data:o}):"textbox"==o.type&&u.push({elem:"form-input",chars:r,data:o});
o["sub-filters"]&&o["sub-filters"].length>0&&l(o["sub-filters"])}},h=[];l(s);for(var d=0,p=u.length;p>d;d++){var f=u[d];
a(f,h)}c(n.request.url,h);var m=function(t){return{elem:"cell",mods:{span:t.size},content:t}};return{elem:"table",content:h.map(function(t){return{elem:"row",content:Array.isArray(t)?t.map(m):m(t)}
})}}function te(t){if(!(t.__$anflg31!==!0)==!1){if(!(r&&"yes"===r["has-calendar"])==!1){var e,i;return[(e=t.__$anflg31,t.__$anflg31=!0,i=te(t),t.__$anflg31=e,i),{elem:"calendar"}]
}return ee(t)}return ee(t)}function ee(t){return!(t.__$anflg16!==!0)==!1?!t._service==!1?ie(t):de(t):de(t)
}function ie(t){var e,i;return[{elem:"box-layout",content:{tag:"tr",content:[{elem:"box-layout-cell",elemMods:{pos:"first"},content:t._.extend({block:"service",urlAttrs:{tabindex:-1,"aria-hidden":!0},mix:[{block:"input",elem:"service-label"}],icon:!1},"string"==typeof t._service?{service:t._service}:t._service)},{elem:"box-layout-cell",elemMods:{pos:"last"},content:(e=t.__$anflg16,t.__$anflg16=!0,i=te(t),t.__$anflg16=e,i)}]}}]
}function ne(t){if(!!s==!1){var e,n;return[t.ctx.content||(e=i,i="auto-content",n=zi(t),i=e,n),{elem:"retpath"}]
}return de(t)}function se(t){var e=s;if("url"===e)return t.ctx.content;if("name"===e){var i=t.ctx,n=i.service,o=i.name||t["i-services"].serviceName(n)||n;
return o}if(!!t._url==!1){if(!!s==!1){var r=[];return t._icon&&r.push({elem:"icon",service:t.ctx.service,elemMods:t.ctx.iconMods}),t._name&&r.push({elem:"name",service:t.ctx.service,name:t.ctx.name}),r
}return oe(t)}return oe(t)}function oe(t){return!(t.__$anflg18!==!0)==!1?!t._url==!1?!!s==!1?re(t):de(t):de(t):de(t)
}function re(t){var e,i,n,s;return{elem:"url",url:t._url,urlParams:t.ctx.urlParams||"",urlAttrs:t.ctx.urlAttrs,counter:t.ctx.counter,content:(e=t.__$anflg18,t.__$anflg18=!0,n=t._url,t._url=!1,s=se(t),t._url=n,i=s,t.__$anflg18=e,i)}
}function ae(t){for(var e,n,s,o,r,a,c,u,l=t.ctx.input,h=t._.isArray(l)?l.length:(l=[l],1),d=[],p=0;h>p;)u=l[p++],u&&d.push([(e=i,i="lego-label",n=t.ctx,t.ctx=u,s=t.position,t.position=p,o=Ki(t),i=e,t.ctx=n,t.position=s,o),(r=i,i="lego-input",a=t.ctx,t.ctx=u,c=Vi(t),i=r,t.ctx=a,c)]);
return t.ctx.button&&d.push({elem:"button",content:t.ctx.button.content}),d={elem:"table",content:[{elem:"row",content:d}]},u&&d.content.push({elem:"row",content:u}),t.ctx.hidden&&(d=[d,t.ctx.hidden]),d
}function ce(t){return!!s==!1?{elem:"table",content:t.ctx.content}:de(t)}function ue(e){var i=s;return"fact"===i?!(r&&"nav"===r.type)==!1?"&nbsp;&mdash;&nbsp;"+e.ctx.content:[{block:"suggest2",elem:"a11y",content:BEM.I18N("suggest2-item","quick-answer")+": "},e.xmlEscape(e.ctx.content)]:"highlight"===i?e.xmlEscape(e.ctx.content):"text"===i?Array.isArray(e.ctx.content)?e.ctx.content.map(function(t){return"string"==typeof t?this.xmlEscape(t):t
},t(e)):e.xmlEscape(e.ctx.content):de(e)}function le(t){if(!(t.__$anflg1!==!0)==!1){if(!!s==!1){var e,i,n=(e=t.__$anflg1,t.__$anflg1=!0,i=le(t),t.__$anflg1=e,i);
return n+=[";(function(d,e,c,n,w,v,f){","e=d.documentElement;",'c="className";','n="createElementNS";','f="firstChild";','w="http://www.w3.org/2000/svg";','e[c]+=" i-ua_svg_"+(!!d[n]&&!!d[n](w,"svg").createSVGRect?"yes":"no");','v=d.createElement("div");','v.innerHTML="<svg/>";','e[c]+=" i-ua_inlinesvg_"+((v[f]&&v[f].namespaceURI)==w?"yes":"no");',"})(document);"].join("")
}return he(t)}return he(t)}function he(t){return!!s==!1?[";(function(d,e,c,r){","e=d.documentElement;",'c="className";','r="replace";','e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");','if(d.compatMode!="CSS1Compat")','e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',"})(document);"].join(""):de(t)
}function de(t){return t.ctx.content}function pe(t){var e=n;if("b-autocomplete-item"===e)return!(r&&"service-pay"===r.type)==!1?!!s==!1?t.ctx.data[2]:fe(t):fe(t);
if("notice"===e)return!!s==!1?!0:!("undefined"!=typeof t.ctx.count)==!1?!!s==!1?{count:t.ctx.count}:ve(t):ve(t);
if("ticker"===e)return!!s==!1?{count:t._count,maxCount:t._maxCount}:ve(t);if("checkbox"===e){if(!!s==!1){var o,a,c=t.ctx.js,u=Object(c).hasOwnProperty("live")?c.live:(o=i,i="live",a=$i(t),i=o,a);
return{live:u}}return ve(t)}return"input"===e?me(t):"auth"===e?!!s==!1?!0:ve(t):"domik"===e?!(r&&"hidden"===r.type)==!1?!!s==!1?!1:ve(t):ve(t):"link"===e?!t.ctx.hasOwnProperty("tabindex")==!1?{origTabindex:String(t.ctx.tabindex)}:ve(t):"suggest2-item"===e||"suggest2"===e?!!s==!1?!0:ve(t):"z-interactive"===e?"form-table"===s?{size:t.ctx.size,i18n:t.ctx.i18n,limit:t.ctx.limit,backend:t.ctx.backend,baseline3:t.ctx.baseline3}:ve(t):"select"===e||"check-button"===e||"button"===e||"dropdown"===e?!!s==!1?!0:ve(t):ve(t)
}function fe(t){return!!s==!1?!0:!t.ctx.search_cgi==!1?!t._.isArray(t.ctx.search_cgi)==!1?{cgi:t.ctx.search_cgi}:ve(t):ve(t)
}function me(t){if(!(t.__$anflg33!==!0)==!1){if(!(r&&"ahead"===r.tap)==!1){if(!!s==!1){var e,i;return t.extend((e=t.__$anflg33,t.__$anflg33=!0,i=me(t),t.__$anflg33=e,i),{live:!1})
}return _e(t)}return _e(t)}return _e(t)}function _e(t){if(!(t.__$anflg14!==!0)==!1){if(!(r&&"yes"===r.autofocus)==!1){if(!!s==!1){var e,i;
return t.extend((e=t.__$anflg14,t.__$anflg14=!0,i=me(t),t.__$anflg14=e,i),{live:!1})}return ge(t)}return ge(t)
}return ge(t)}function ge(t){return!!s==!1?be(t):ve(t)}function be(t){var e,n,s=(e=i,i="live",n=Ni(t),i=e,n),o=t.ctx.js;
if(o){if(o.autoFocus&&o.live)throw new Error('input block can\'t have both "live" and "autoFocus" enabled');
"live"in o&&(s=o.live),o.autoFocus&&(s=!1)}return"gradient"==r.popup?{live:s,popupMods:{gradient:"yes"}}:{live:s}
}function ve(){return void 0}function ye(t){var e=n;if("b-autocomplete-item"===e)return!!s==!1?[{mods:{pers:t.ctx.pers?"yes":""}}]:Se(t);
if("input"===e)return!t._inSlider==!1?!!s==!1?[{block:"slider",elem:"input"}]:Ee(t):Ee(t);if("image"===e)return!(r&&"yes"===r.placeholder)==!1?!!s==!1?[{block:"content-placeholder"}]:Se(t):Se(t);
if("notice"===e){var e=s;return"text"===e?[{block:"a11y-hidden"}]:"count"===e?!!t.ctx.url==!1?[{elem:"plain"}]:Se(t):Se(t)
}if("ticker"===e){var e=s;return"text"===e?[{block:"a11y-hidden"}]:"count"===e?!!t.ctx.url==!1?[{elem:"plain"}]:Be(t):Be(t)
}if("slider"===e)return"body"===s?ke(t):Se(t);if("service"===e){var e=s;return"url"===e?!t.ajax==!1?{block:"link",mods:{pseudo:"yes",ajax:"yes"},js:!0}:[{block:"link"}]:"icon"===e?[{block:"service-icon",elem:t.ctx.service,elemMods:t.ctx.elemMods}]:Se(t)
}if("suggest2-item"===e)return"text"===s?!(r&&"link"===r.interact)==!1?!("nav"===r.type||"icon"===r.type)==!1?{mods:{type:"url"}}:Se(t):Se(t):Se(t);
if("suggest2"===e)return!!s==!1?[{block:"suggest2-detect",js:!0}]:Se(t);if("select"===e){if("group"===s){var i=t.isFirst()?t.isLast()?"both":"first":t.isLast()?"last":"middle";
return{mods:{position:i}}}return Se(t)}return"button"===e?!t._formSelect==!1?!!s==!1?[{block:t._formSelect.block,elem:"button"}]:Se(t):Se(t):"dropdown"===e?!!s==!1?[{mods:{action:"closed"}}]:Se(t):Se(t)
}function ke(t){return!(t.__$anflg43!==!0)==!1?!r.type==!1?!!t.ctx._wType==!1?xe(t):we(t):we(t):we(t)
}function xe(t){var e,i,n,s,o,a=(e=t.__$anflg43,t.__$anflg43=!0,n=t.ctx,s=n._wType,n._wType=!0,o=ke(t),n._wType=s,i=o,t.__$anflg43=e,i||[]);
return a.push({elemMods:{type:r.type}}),a}function we(t){return!(t.__$anflg42!==!0)==!1?!r.orientation==!1?!!t.ctx._wOrigin==!1?Me(t):Se(t):Se(t):Se(t)
}function Me(t){var e,i,n,s,o,a=(e=t.__$anflg42,t.__$anflg42=!0,n=t.ctx,s=n._wOrigin,n._wOrigin=!0,o=ke(t),n._wOrigin=s,i=o,t.__$anflg42=e,i||[]);
return a.push({elemMods:{origin:"vert"===r.orientation?"y":"x"}}),a}function Ee(t){return"ahead"===s?[{block:"input",elem:"input"}]:Se(t)
}function Be(t){return!!t._count==!1?!!s==!1?[{mods:{state:"empty"}}]:Se(t):Se(t)}function Se(){return void 0
}function Ce(t){return!t._==!1?!!t._.cleverSubstring==!1?(t._.cleverSubstring=function(t,e,i){return t.length>e+i?t.substring(0,e-1)+"…":t
},pn(t),void 0):De(t):De(t)}function De(t){return!t["i-global"]==!1?!!t["i-services"]==!1?Pe(t):Ie(t):Ie(t)
}function Pe(t){var e,s,o,r=t["i-services"]={},a=t["i-global"];r._data=(e=n,n="i-services",s=i,i="service-url",o=Li(t),n=e,i=s,o),r.serviceName=function(t){return BEM.I18N("i-services",t||a.id)
},r.serviceUrl=function(t,e){return t||(t=a.id),r._data[t](e||a["content-region"])},pn(t)}function Ie(t){return"popup"===n?!t._popupDefaults==!1?!!s==!1?(delete t._popupDefaults,pn(t),void 0):Te(t):Te(t):Te(t)
}function Te(t){return!!t["i-global"]==!1?Oe(t):nn(t)}function Oe(t){for(var e,o,r,a,c,u,l,h,d={},p=["lang","tld","content-region","click-host","passport-host","pass-host","social-host","export-host","login","lego-static-host"];h=p.shift();)d[h]=(e=i,i="default",o=n,n="i-global",r=s,s=h,a=Ei(t),i=e,n=o,s=r,a);
t["i-global"]=t._.extend(d,(c=i,i="env",u=n,n="i-global",l=Zi(t),i=c,n=u,l)),pn(t)}function je(t){var e=n;
if("slider"===e)return Ae(t);if("checkbox"===e)return We(t);if("input"===e)return Ge(t);if("dropdown"===e)return"popup"===s?!(t.__$anflg26!==!0)==!1?ti(t):nn(t):nn(t);
if("ticker"===e)return Ve(t);if("domik"===e)return oi(t);if("service"===e)return ci(t);if("i-services"===e){var e=s;
return"url"===e?(t._buf.push(t["i-services"].serviceUrl(t.ctx.id,t.ctx.region)),void 0):"name"===e?(t._buf.push(t["i-services"].serviceName(t.ctx.id)),void 0):!s==!1?"":nn(t)
}return"search"===e?di(t):"paranja"===e?pi(t):"z-interactive"===e?"form-table"===s?He(t):nn(t):"i-bem"===e?"i18n"===s?fi(t):nn(t):"interactive-results"===e?qe(t):"select"===e?mi(t):"check-button"===e?Re(t):"button"===e?vi(t):"spin"===e?!(t.__$anflg38!==!0)==!1?!!s==!1?Fe(t):nn(t):nn(t):"popup"===e?xi(t):"image"===e?!(t.__$anflg40!==!0)==!1?!t.ctx==!1?!(t.ctx.text||t.ctx.mods&&"cover"===t.ctx.mods.type)==!1?!!t.ctx.wrapped==!1?ze(t):nn(t):nn(t):nn(t):nn(t):"i-global"===e?Ei(t):"auth"===e?ei(t):nn(t)
}function Ae(t){return"runner"===s?$e(t):Ne(t)}function $e(t){if(!!t._done==!1){var e,i,n;return e=t._value,t._value=t.ctx.value,i=t._done,t._done=!0,n=$e(t),t._value=e,t._done=i,n
}return Ne(t)}function Ne(t){if(!(t.__$anflg41!==!0)==!1){if(!!s==!1){var e=t.generateId(),i=t.__$anflg41;
t.__$anflg41=!0;var n=t._inSlider;t._inSlider=!0;var o=t._titleId;return t._titleId="title"+e,Ae(t),t._inSlider=n,t._titleId=o,t.__$anflg41=i,void 0
}return nn(t)}return nn(t)}function ze(t){var e,n,s,o,r,a=t.ctx.text;return t.ctx.wrapped=!0,e=t.__$anflg40,t.__$anflg40=!0,s=t.ctx,t.ctx={block:"image",elem:"wrapper",elemMods:{type:a?"text":"cover"},attrs:!a&&{style:"width:"+t.ctx.width+"px; height:"+t.ctx.height+"px;"},content:[t.ctx,a&&{elem:"text",content:a}]},o=i,i="",r=Ce(t),t.ctx=s,i=o,n=r,t.__$anflg40=e,n
}function Fe(t){var e,n,s,o,r,a=t.ctx.mods||{};return a.theme||(a.theme="gray-32"),t.ctx.mods=a,t.ctx.content={block:"image",mix:[{block:"spin",elem:"icon"}]},e=t.__$anflg38,t.__$anflg38=!0,s=t.ctx,t.ctx=t.ctx,o=i,i="",r=Ce(t),t.ctx=s,i=o,n=r,t.__$anflg38=e,n
}function Re(t){return!(t.__$anflg37!==!0)==!1?!!s==!1?Le(t):nn(t):nn(t)}function Le(t){var e=t.ctx,i=(e.controlAttrs||{}).id||t.generateId(),n=e.mods||{};
n.theme=n.theme||"normal";var s=t.__$anflg37;t.__$anflg37=!0;var o=t._control;t._control={elem:"control",attrs:e.controlAttrs,id:i,labelledby:"text"+i,name:e.name,tabindex:e.tabindex,checked:r.checked,disabled:r.disabled,value:e.value||e.content};
var a=e.mods;e.mods=n,Re(t),t._control=o,e.mods=a,t.__$anflg37=s}function qe(t){if(!(t.__$anflg36!==!0)==!1){if(!(t.ctx.data&&t.ctx.data.results_count<=0)==!1){if(!!s==!1){var e=t.__$anflg36;
t.__$anflg36=!0;var i=t.ctx,n=i.mods;return i.mods=t._.extend(t.ctx.mods||{},{message:"not-found"}),qe(t),i.mods=n,t.__$anflg36=e,void 0
}return Ue(t)}return Ue(t)}return Ue(t)}function Ue(t){if(!(t.__$anflg35!==!0)==!1){if(!!t.ctx.data==!1){if(!!s==!1){var e=t.__$anflg35;
t.__$anflg35=!0;var i=t.ctx,n=i.mods;return i.mods=t._.extend(t.ctx.mods||{},{empty:"yes"}),qe(t),i.mods=n,t.__$anflg35=e,void 0
}return nn(t)}return nn(t)}return nn(t)}function He(t){if(!(t.__$anflg34!==!0)==!1){var e=t.__$anflg34;
t.__$anflg34=!0;var i=t._exp;t._exp=t.ctx.exp;var n=t._size;return t._size=t.ctx.size,He(t),t._exp=i,t._size=n,t.__$anflg34=e,void 0
}return nn(t)}function Ve(t){return!(t.__$anflg30!==!0)==!1?!!s==!1?Ke(t):nn(t):nn(t)}function Ke(t){var e=t.__$anflg30;
t.__$anflg30=!0;var i=t._count;t._count=t.ctx.count||0;var n=t._maxCount;t._maxCount=t.ctx.maxCount||99;
var s=t._url;t._url=t.ctx.url,Ve(t),t._count=i,t._maxCount=n,t._url=s,t.__$anflg30=e}function We(t){return!(t.__$anflg28!==!0)==!1?!!s==!1?Qe(t):nn(t):nn(t)
}function Qe(t){var e=t.ctx,i=e.checkboxAttrs||{},n=i.id||t.generateId(),s=e.mods||{};s.theme=s.theme||"normal";
var o=t.__$anflg28;t.__$anflg28=!0;var r=t._checkboxAttrs;t._checkboxAttrs=i.id?i:{id:"id"+n};var a=t._labelId;
t._labelId="label"+n;var c=e.mods;e.mods=s,We(t),t._checkboxAttrs=r,t._labelId=a,e.mods=c,t.__$anflg28=o
}function Ge(t){var e=s;return"hint"===e?!(t.__$anflg27!==!0)==!1?!!t._value==!1?!(0!==t._value)==!1?Xe(t):Je(t):Je(t):Je(t):"control"===e?!(t.__$anflg12!==!0)==!1?!!r.clear==!1?Ye(t):Je(t):Je(t):Je(t)
}function Xe(t){var e,n,s,o,r,a=t.ctx,c=a.elemMods||(a.elemMods={});return c.visibility="visible",e=t.__$anflg27,t.__$anflg27=!0,s=t.ctx,t.ctx=a,o=i,i="",r=Ce(t),t.ctx=s,i=o,n=r,t.__$anflg27=e,n
}function Ye(t){var e=t.__$anflg12;t.__$anflg12=!0;var n=t.ctx;t.ctx={elem:"box",tag:"span",content:[t.ctx,{elem:"clear",elemMods:t._value||0===t._value?{visibility:"visible"}:void 0}]};
var s=i;i="",Ce(t),t.ctx=n,i=s,t.__$anflg12=e}function Je(t){return!(t.__$anflg11!==!0)==!1?!!s==!1?Ze(t):nn(t):nn(t)
}function Ze(t){var e,n,s,o=(e=i,i="value",n=t.ctx,t.ctx=t.ctx.value,s=Qi(t),i=e,t.ctx=n,s),a=t.ctx.id||t.generateId(),c=t.ctx.mods||{},u=t.ctx.js||{};
c.theme=c.theme||"normal";var l=t.__$anflg11;t.__$anflg11=!0;var h=t._inputId;t._inputId=a;var d=t._labelId;
t._labelId="label"+a;var p=t._hintId;t._hintId="hint"+a;var f=t._name;t._name=t.ctx.name||"";var m=t._value;
t._value=o;var _=t._inputLink;t._inputLink=!0;var g=t._disabled;t._disabled=r.disabled;var b=t._live;
t._live=u.live||!1;var v=t.ctx,y=v.mods;v.mods=c,Ge(t),t._inputId=h,t._labelId=d,t._hintId=p,t._name=f,t._value=m,t._inputLink=_,t._disabled=g,t._live=b,v.mods=y,t.__$anflg11=l
}function ti(t){var e=t.ctx,n=[{block:"dropdown",elem:"popup"}];e.mix&&(n=n.concat(e.mix));var s=t.__$anflg26;
t.__$anflg26=!0;var o=t.ctx;t.ctx={block:"popup",mix:n,mods:e.mods,attrs:e.attrs,js:e.js,content:[{elem:"tail"},{elem:"content",content:e.content}]};
var r=i;i="",Ce(t),t.ctx=o,i=r,t.__$anflg26=s}function ei(t){return"retpath"===s?ii(t):ni(t)}function ii(t){if(!(t.__$anflg25!==!0)==!1){var e=t.__$anflg25;
t.__$anflg25=!0;var i=t._retpath;return t._retpath=BEM&&BEM.blocks?BEM.blocks["i-global"].param("retpath"):t["i-global"].retpath,ii(t),t._retpath=i,t.__$anflg25=e,void 0
}return ni(t)}function ni(t){return!(t.__$anflg24!==!0)==!1?!!s==!1?si(t):nn(t):nn(t)}function si(t){var e,i,n,s;
BEM&&BEM.blocks?(s=BEM.blocks["i-global"],e=s.param("passport-host"),i=s.param("retpath"),n=s.param("passport-msg")):(s=t["i-global"],e=s["passport-host"],i=s.retpath,n=s["passport-msg"]);
var o=t.__$anflg24;t.__$anflg24=!0;var r=t._passportHost;t._passportHost=e;var a=t._paramRetpath;t._paramRetpath=i?"&retpath="+encodeURIComponent(i):"";
var c=t._paramFrom;t._paramFrom=n?"&from="+encodeURIComponent(n):"",ei(t),t._passportHost=r,t._paramRetpath=a,t._paramFrom=c,t.__$anflg24=o
}function oi(t){return!(t.__$anflg23!==!0)==!1?!(r&&"hidden"===r.type)==!1?!!s==!1?ri(t):ai(t):ai(t):ai(t)
}function ri(t){var e,n,s,o,r;return e=t.__$anflg23,t.__$anflg23=!0,s=t.ctx,t.ctx={block:"auth",mix:[{block:"domik",mods:{type:"hidden"}}],js:!1,attrs:{style:"display:none"},content:[{tag:"input",attrs:{name:"login"}},{tag:"input",attrs:{name:"passwd",type:"password"}}]},o=i,i="",r=Ce(t),t.ctx=s,i=o,n=r,t.__$anflg23=e,n
}function ai(t){if(!!s==!1){if(!!(t.ctx.mods||{}).logo==!1){var e,i;BEM.blocks?(i=BEM.blocks["i-global"],e=i.param("lang")):(i=t["i-global"],e=i.lang);
var n=t.ctx,o=n.mods;return n.mods=t.extend(t.ctx.mods||{},{logo:~["en","tr"].indexOf(e)?"en":"ru"}),oi(t),n.mods=o,void 0
}return nn(t)}return nn(t)}function ci(t){return!(t.__$anflg19!==!0)==!1?!!s==!1?ui(t):li(t):li(t)}function ui(t){var e,n,s,o,r,a=t.ctx.service;
return e=t.__$anflg19,t.__$anflg19=!0,s=t.ctx,t.ctx=t._.extend(t.ctx,{mix:(t.ctx.mix||[]).concat({block:"service",mods:{name:a}}),counter:t.ctx.counter||t["i-global"]._counter&&t["i-global"]._counter("/table/"+a)}),o=i,i="",r=Ce(t),t.ctx=s,i=o,n=r,t.__$anflg19=e,n
}function li(t){return!(t.__$anflg17!==!0)==!1?!!s==!1?hi(t):nn(t):nn(t)}function hi(t){var e,i,n,s,o,r,a=t.ctx;
return e=t.__$anflg17,t.__$anflg17=!0,n=t._url,t._url=a.url!==!1&&(a.url||t["i-services"].serviceUrl(a.service)),s=t._icon,t._icon=a.icon!==!1,o=t._name,t._name=a.name!==!1,r=ci(t),t._url=n,t._icon=s,t._name=o,i=r,t.__$anflg17=e,i
}function di(t){if(!(t.__$anflg15!==!0)==!1){if(!(r&&"yes"===r["service-label"])==!1){if(!!s==!1){var e,i,n,o;
return e=t.__$anflg15,t.__$anflg15=!0,n=t._service,t._service=t.ctx.service,o=di(t),t._service=n,i=o,t.__$anflg15=e,i
}return nn(t)}return nn(t)}return nn(t)}function pi(t){if(!(t.__$anflg13!==!0)==!1){if(!!s==!1){var e,i,n,o,r;
return e=t.__$anflg13,t.__$anflg13=!0,n=t.ctx,o=n.mods,n.mods=t._.extend({state:"close",theme:"normal"},t.ctx.mods),r=pi(t),n.mods=o,i=r,t.__$anflg13=e,i
}return nn(t)}return nn(t)}function fi(t){var e,n,s,o;if(!t.ctx)return"";var r=t.ctx,a=r.keyset,c=r.key,u=r.params||{};
if(!a&&!c)return"";if(r.content){var l;u.content=(l=[],e=t._buf,t._buf=l,n=i,i="",s=t.ctx,t.ctx=r.content,o=Ce(t),t._buf=e,i=n,t.ctx=s,l.join(""))
}t._buf.push(BEM.I18N(a,c,u))}function mi(t){return"group"===s?_i(t):gi(t)}function _i(t){if(!(t.__$anflg10!==!0)==!1){var e=t.__$anflg10;
t.__$anflg10=!0;var i=t._labelId;return t._labelId=t.generateId(),_i(t),t._labelId=i,t.__$anflg10=e,void 0
}return gi(t)}function gi(t){return!(t.__$anflg7!==!0)==!1?!!s==!1?bi(t):nn(t):nn(t)}function bi(t){var e=t.ctx,i=e.id||t.generateId(),s=t.__$anflg7;
t.__$anflg7=!0;var o=t._controlAttrs;t._controlAttrs={id:i,name:e.name||i,tabindex:e.tabindex};var a=t._formSelect;
t._formSelect={block:n,mods:r,tabindex:e.tabindex},mi(t),t._controlAttrs=o,t._formSelect=a,t.__$anflg7=s
}function vi(t){return!(t.__$anflg9!==!0)==!1?!t._formSelect==!1?!!s==!1?yi(t):ki(t):ki(t):ki(t)}function yi(t){var e=t.ctx,i=t._formSelect.mods,n=t._formSelect.tabindex,s=e.mods||{};
s.arrow="down",i.theme&&(s.theme=i.theme),i.size&&(s.size=i.size),"yes"===i.disabled&&(s.disabled="yes"),e.mods=s,n&&(e.tabindex=n);
var o=t.__$anflg9;t.__$anflg9=!0;var r=t.ctx,a=r._theme;r._theme=!0,vi(t),r._theme=a,t.__$anflg9=o}function ki(t){if(!(t.__$anflg2!==!0)==!1){if(!!s==!1){var e=t.ctx.mods||{};
e.theme=e.theme||"normal";var i=t.__$anflg2;t.__$anflg2=!0;var n=t.ctx,o=n.mods;return n.mods=e,vi(t),n.mods=o,t.__$anflg2=i,void 0
}return nn(t)}return nn(t)}function xi(t){if(!(t.__$anflg6!==!0)==!1){if(!(r&&"yes"===r["has-close"])==!1){if(!!s==!1){t.ctx.content.push({elem:"close"});
var e=t.__$anflg6;return t.__$anflg6=!0,xi(t),t.__$anflg6=e,void 0}return wi(t)}return wi(t)}return wi(t)
}function wi(t){return!!t._popupDefaults==!1?!!s==!1?Mi(t):nn(t):nn(t)}function Mi(t){var e=t.ctx;if(e.mods=r=t.extend({theme:"ffffff",autoclosable:"yes",adaptive:"yes",animate:"yes"},r),e.zIndex){var i=e.attrs||(e.attrs={});
i.style=(i.style||"")+";z-index:"+e.zIndex+";"}var n=t._popupDefaults;t._popupDefaults=!0,xi(t),t._popupDefaults=n
}function Ei(t){var e=s;return"lego-static-host"===e?"//yastatic.net/lego/2.10-142":"export-host"===e?"https://export.yandex.ru":"social-host"===e?"https://social.yandex.ru":"pass-host"===e?"https://pass.yandex.ru":"passport-host"===e?"https://passport.yandex.ru":"click-host"===e?"//clck.yandex.ru":"content-region"===e||"tld"===e||"lang"===e?"ru":!s==!1?"":!!s==!1?Bi(t):nn(t)
}function Bi(t){var e,i,n,s=t.ctx.params||{},o=t["i-global"],r=s.tld&&s.tld!==o.tld;r&&(e=s.tld,i="tr"===e?"yandex.com.tr":"yandex."+e,n=-1!=["ua","by","kz"].indexOf(e)?"yandex.ru":i,o["content-region"]=e,o["click-host"]="//clck."+n,o["passport-host"]="https://passport."+n,o["pass-host"]="https://pass."+i,o["social-host"]="https://social."+i,o["export-host"]="https://export."+i);
for(var a in s)o[a]=s[a]}function Si(t){if(0===t._value)return"";var e=t._value<10?"0"+t._value:t._value,i="tr"===BEM.I18N.lang()?{elem:"price-cents",content:e}:e;
return[",",i]}function Ci(t){var e="tr"===BEM.I18N.lang()?".":"&thinsp;";return t._value.replace(/(\d)(?=(?:\d\d\d)+$)/g,"$1"+e)
}function Di(t){return!t.ctx.price_currency==!1?Pi(t):""}function Pi(t){var e,n,s,o,r,a,c,u=(t.ctx.price_currency||"").toUpperCase();
return[(e=i,i="price-format",n=t._value,t._value=t.ctx.price,s=Ci(t),i=e,t._value=n,s),(o=i,i="price-format-cents",r=t._value,t._value=parseInt(t.ctx.price_cents,10),a=t._currency,t._currency=t.ctx.price_currency,c=Si(t),i=o,t._value=r,t._currency=a,c),"&nbsp;"+(t._currency[u]||u)]
}function Ii(t){var e=new Date;e.setDate(e.getDate()+(t._offset||0));var i=e.getMonth()+1,n=e.getDate();
return e.getFullYear()+"-"+(10>i?"0"+i:i)+"-"+(10>n?"0"+n:n)}function Ti(){return 24}function Oi(){return{block:"select",elem:"option",attrs:{value:""},content:"&mdash;"}
}function ji(t){var e,i,n=t.ctx;return e=parseInt(n.count,10),i=n.maxCount?n.maxCount:99,e>i?i+"+":e}function Ai(t){return t._count>t._maxCount?t._maxCount+"+":t._count
}function $i(){return!1}function Ni(){return!1}function zi(t){return!!t.ctx.content==!1?!!s==!1?[{elem:"username"},{elem:"password"},{elem:"row",mods:{button:"yes"},content:[{elem:"haunter"},{elem:"button"}]},{elem:"social"},{elem:"row",content:[{elem:"remember"},{elem:"register"}]}]:Fi(t):Fi(t)
}function Fi(t){return!!s==!1?[]:nn(t)}function Ri(t){var e,i;return BEM&&BEM.blocks?(e=BEM.blocks["i-global"],i=e.param("passport-msg")):(e=t["i-global"],i=e["passport-msg"]),[t._passportHost,"/auth?twoweeks=yes",i?"&from="+encodeURIComponent(i):""].join("")
}function Li(t){return!!s==!1?qi(t):nn(t)}function qi(){return{serp:function(t){return"ru"===t?"http://yandex.ru":"ua"===t?"http://yandex.ua":"by"===t?"http://yandex.by":"kz"===t?"http://yandex.kz":"com"===t?"http://www.yandex.com":"tr"===t?"http://www.yandex.com.tr":"http://yandex.ru"
},mail:function(t){return"ru"===t?"https://mail.yandex.ru":"ua"===t?"https://mail.yandex.ua":"by"===t?"https://mail.yandex.by":"kz"===t?"https://mail.yandex.kz":"com"===t?"https://mail.yandex.com":"tr"===t?"https://mail.yandex.com.tr":"https://mail.yandex.ru"
},pdd:function(t){return"ru"===t?"http://pdd.yandex.ru":"http://pdd.yandex.ru"},zakladki:function(t){return"ru"===t?"http://zakladki.yandex.ru":"http://zakladki.yandex.ru"
},fotki:function(t){return"ru"===t?"http://fotki.yandex.ru":"http://fotki.yandex.ru"},moikrug:function(t){return"ru"===t?"http://moikrug.ru":"http://moikrug.ru"
},direct:function(t){return"ru"===t?"http://direct.yandex.ru":"ua"===t?"http://direct.yandex.ua":"by"===t?"http://direct.yandex.by":"kz"===t?"http://direct.yandex.kz":"com"===t?"http://direct.yandex.com":"http://direct.yandex.ru"
},money:function(t){return"ru"===t?"https://money.yandex.ru":"https://money.yandex.ru"},lenta:function(t){return"ru"===t?"http://lenta.yandex.ru":"http://lenta.yandex.ru"
},market:function(t){return"ru"===t?"//market.yandex.ru":"ua"===t?"//market.yandex.ua":"by"===t?"//market.yandex.by":"kz"===t?"//market.yandex.kz":"tr"===t?"//market.yandex.com.tr":"//market.yandex.ru"
},"market.advertising":function(t){return"ru"===t?"http://welcome.advertising.yandex.ru/market/":"http://welcome.advertising.yandex.ru/market/"
},wow:function(t){return"ru"===t?"http://my.ya.ru":"http://my.ya.ru"},tv:function(t){return"ru"===t?"http://tv.yandex.ru":"ua"===t?"http://tv.yandex.ua":"by"===t?"http://tv.yandex.by":"kz"===t?"http://tv.yandex.kz":"http://tv.yandex.ru"
},afisha:function(t){return"ru"===t?"http://afisha.yandex.ru":"ua"===t?"http://afisha.yandex.ua":"by"===t?"http://afisha.yandex.by":"kz"===t?"http://afisha.yandex.kz":"tr"===t?"http://afis.yandex.com.tr":"http://afisha.yandex.ru"
},calendar:function(t){return"ru"===t?"http://calendar.yandex.ru":"http://calendar.yandex.ru"},nahodki:function(t){return"ru"===t?"http://nahodki.yandex.ru":"ua"===t?"http://nahodki.yandex.ua":"kz"===t?"http://nahodki.yandex.kz":"http://nahodki.yandex.ru"
},weather:function(t){return"ru"===t?"http://pogoda.yandex.ru":"ua"===t?"http://pogoda.yandex.ua":"by"===t?"http://pogoda.yandex.by":"kz"===t?"http://pogoda.yandex.kz":"tr"===t?"http://hava.yandex.com.tr":"http://pogoda.yandex.ru"
},kuda:function(t){return"ru"===t?"http://kuda.yandex.ru":"http://kuda.yandex.ru"},video:function(t){return"ru"===t?"http://www.yandex.ru/video/":"ua"===t?"http://www.yandex.ua/video/":"by"===t?"http://www.yandex.by/video/":"kz"===t?"http://www.yandex.kz/video/":"com"===t?"http://www.yandex.com/video/":"tr"===t?"http://www.yandex.com.tr/video/":"http://yandex.ru/video/"
},"video-com":function(t){return"ru"===t?"http://video.yandex.com":"http://video.yandex.com"},music:function(t){return"ru"===t?"//music.yandex.ru":"ua"===t?"//music.yandex.ua":"by"===t?"//music.yandex.by":"kz"===t?"//music.yandex.kz":"//music.yandex.ru"
},"music-partner":function(t){return"ru"===t?"http://music-partner.yandex.ru":"http://music-partner.yandex.ru"
},www:function(t){return"ru"===t?"http://www.yandex.ru":"ua"===t?"http://www.yandex.ua":"com"===t?"http://www.yandex.com":"by"===t?"http://www.yandex.by":"kz"===t?"http://www.yandex.kz":"tr"===t?"http://www.yandex.com.tr":"http://www.yandex.ru"
},search:function(t){return"ru"===t?"http://yandex.ru":"ua"===t?"http://yandex.ua":"com"===t?"http://yandex.com":"by"===t?"http://yandex.by":"kz"===t?"http://yandex.kz":"tr"===t?"http://yandex.com.tr":"http://yandex.ru"
},review:function(t){return"ru"===t?"http://yandex.ru":"ua"===t?"http://yandex.ua":"by"===t?"http://yandex.by":"kz"===t?"http://yandex.kz":"com"===t?"http://www.yandex.com":"tr"===t?"http://www.yandex.com.tr":"http://yandex.ru"
},fresh:function(t){return"ru"===t?"http://yandex.ru":"ua"===t?"http://yandex.ua":"by"===t?"http://yandex.by":"kz"===t?"http://yandex.kz":"com"===t?"http://www.yandex.com":"tr"===t?"http://www.yandex.com.tr":"http://yandex.ru"
},news:function(t){return"ru"===t?"http://news.yandex.ru":"ua"===t?"http://news.yandex.ua":"by"===t?"http://news.yandex.by":"kz"===t?"http://news.yandex.kz":"tr"===t?"http://haber.yandex.com.tr":"http://news.yandex.ru"
},"news-com":function(t){return"ru"===t?"http://news.yandex.com":"http://news.yandex.com"},maps:function(t){return"ru"===t?"//maps.yandex.ru":"ua"===t?"//maps.yandex.ua":"tr"===t?"//harita.yandex.com.tr":"//maps.yandex.ru"
},"maps-com":function(t){return"ru"===t?"http://maps.yandex.com":"http://maps.yandex.com"},probki:function(t){return"ru"===t?"http://probki.yandex.ru":"ua"===t?"http://probki.yandex.ua":"http://probki.yandex.ru"
},slovari:function(t){return"ru"===t?"//slovari.yandex.ru":"ua"===t?"//slovari.yandex.ua":"by"===t?"//slovari.yandex.by":"kz"===t?"//slovari.yandex.kz":"//slovari.yandex.ru"
},images:function(t){return"ru"===t?"http://www.yandex.ru/images/":"ua"===t?"http://www.yandex.ua/images/":"by"===t?"http://www.yandex.by/images/":"kz"===t?"http://www.yandex.kz/images/":"com"===t?"http://www.yandex.com/images/":"tr"===t?"http://www.yandex.com.tr/gorsel/":"http://yandex.ru/images/"
},"images-com":function(){return"http://www.yandex.com/images/"},blogs:function(t){return"ru"===t?"http://blogs.yandex.ru":"ua"===t?"http://blogs.yandex.ua":"by"===t?"http://blogs.yandex.by":"kz"===t?"http://blogs.yandex.kz":"http://blogs.yandex.ru"
},auto:function(t){return"ru"===t?"http://auto.yandex.ru":"ua"===t?"http://auto.yandex.ua":"http://auto.yandex.ru"
},adresa:function(t){return"ru"===t?"http://adresa.yandex.ru":"http://adresa.yandex.ru"},games:function(t){return"ru"===t?"http://games.yandex.ru":"http://games.yandex.ru"
},yaca:function(t){return"ru"===t?"http://yaca.yandex.ru":"ua"===t?"http://yaca.yandex.ua":"by"===t?"http://yaca.yandex.by":"http://yaca.yandex.ru"
},rasp:function(t){return"ru"===t?"http://rasp.yandex.ru":"ua"===t?"http://rasp.yandex.ua":"by"===t?"http://rasp.yandex.by":"kz"===t?"http://rasp.yandex.kz":"tr"===t?"http://seferler.yandex.com.tr":"http://rasp.yandex.ru"
},avia:function(t){return"ru"===t?"https://avia.yandex.ru":"ua"===t?"https://avia.yandex.ua":"https://avia.yandex.ru"
},ticket:function(){return"http://ticket.yandex.ru"},pvo:function(t){return"ru"===t?"http://ask.yandex.ru":"http://ask.yandex.ru"
},online:function(t){return"ru"===t?"http://online.yandex.ru":"http://online.yandex.ru"},books:function(t){return"ru"===t?"http://books.yandex.ru":"http://books.yandex.ru"
},site:function(t){return"ru"===t?"http://site.yandex.ru":"ua"===t?"http://site.yandex.ua":"tr"===t?"http://ozel.yandex.com.tr":"http://site.yandex.ru"
},bar:function(t){return"ru"===t?"http://bar.yandex.ru":"ua"===t?"http://bar.yandex.ua":"by"===t?"http://bar.yandex.by":"kz"===t?"http://bar.yandex.kz":"tr"===t?"http://bar.yandex.com.tr":"http://bar.yandex.ru"
},widgets:function(t){return"ru"===t?"http://widgets.yandex.ru":"ua"===t?"http://widgets.yandex.ua":"by"===t?"http://widgets.yandex.by":"kz"===t?"http://widgets.yandex.kz":"tr"===t?"http://widgets.yandex.com.tr":"http://widgets.yandex.ru"
},wdgt:function(t){return"ru"===t?"http://wdgt.yandex.ru":"ua"===t?"http://wdgt.yandex.ua":"by"===t?"http://wdgt.yandex.by":"kz"===t?"http://wdgt.yandex.kz":"tr"===t?"http://wdgt.yandex.com.tr":"http://wdgt.yandex.ru"
},interests:function(t){return"ru"===t?"http://interests.yandex.ru":"http://interests.yandex.ru"},kraski:function(t){return"ru"===t?"http://kraski.yandex.ru":"http://kraski.yandex.ru"
},local:function(t){return"ru"===t?"http://local.yandex.ru":"http://local.yandex.ru"},museums:function(t){return"ru"===t?"http://18.yandex.ru":"http://18.yandex.ru"
},collection:function(t){return"ru"===t?"http://collection.yandex.ru":"http://collection.yandex.ru"},company:function(t){return"ru"===t?"http://company.yandex.ru":"com"===t?"http://company.yandex.com":"tr"===t?"http://company.yandex.com.tr":"http://company.yandex.ru"
},tests:function(t){return"ru"===t?"http://tests.yandex.ru":"http://tests.yandex.ru"},referats:function(t){return"ru"===t?"http://referats.yandex.ru":"http://referats.yandex.ru"
},terms:function(t){return"ru"===t?"http://terms.yandex.ru":"http://terms.yandex.ru"},tune:function(t){return"ru"===t?"http://tune.yandex.ru":"ua"===t?"http://tune.yandex.ua":"com"===t?"http://tune.yandex.com":"by"===t?"http://tune.yandex.by":"kz"===t?"http://tune.yandex.kz":"tr"===t?"http://tune.yandex.com.tr":"http://tune.yandex.ru"
},api:function(t){return"ru"===t?"http://api.yandex.ru":"com"===t?"http://api.yandex.com":"http://api.yandex.ru"
},punto:function(t){return"ru"===t?"http://punto.yandex.ru":"http://punto.yandex.ru"},opinion:function(t){return"ru"===t?"http://opinion.yandex.ru":"http://opinion.yandex.ru"
},perevod:function(t){return"ru"===t?"http://perevod.yandex.ru":"http://perevod.yandex.ru"},rabota:function(t){return"ru"===t?"http://rabota.yandex.ru":"ua"===t?"http://rabota.yandex.ua":"by"===t?"http://rabota.yandex.by":"kz"===t?"http://rabota.yandex.kz":"http://rabota.yandex.ru"
},sprav:function(t){return"ru"===t?"http://sprav.yandex.ru":"ua"===t?"http://sprav.yandex.ua":"by"===t?"http://sprav.yandex.by":"kz"===t?"http://sprav.yandex.kz":"tr"===t?"http://rehber.yandex.com.tr":"http://sprav.yandex.ru"
},realty:function(t){return"ru"===t?"http://realty.yandex.ru":"ua"===t?"http://realty.yandex.ua":"by"===t?"http://realty.yandex.by":"kz"===t?"http://realty.yandex.kz":"http://realty.yandex.ru"
},advertising:function(t){return"ru"===t?"http://advertising.yandex.ru":"ua"===t?"http://advertising.yandex.ua":"com"===t?"http://advertising.yandex.com":"by"===t?"http://advertising.yandex.by":"kz"===t?"http://advertising.yandex.kz":"http://advertising.yandex.ru"
},expert:function(t){return"ru"===t?"http://expert.yandex.ru":"http://expert.yandex.ru"},"direct.market":function(t){return"ru"===t?"http://partner.market.yandex.ru/yandex.market/":"http://partner.market.yandex.ru/yandex.market/"
},ba:function(t){return"ru"===t?"http://ba.yandex.ru":"ua"===t?"http://ba.yandex.ua":"com"===t?"http://ba.yandex.com":"by"===t?"http://ba.yandex.by":"kz"===t?"http://ba.yandex.kz":"http://ba.yandex.ru"
},bayan:function(t){return"ru"===t?"http://bayan.yandex.ru":"http://bayan.yandex.ru"},partners:function(t){return"ru"===t?"http://partner.yandex.ru":"ua"===t?"http://partner.yandex.ua":"com"===t?"http://partner.yandex.com":"by"===t?"http://partner.yandex.by":"kz"===t?"http://partner.yandex.kz":"http://partner.yandex.ru"
},metrika:function(t){return"ru"===t?"https://metrika.yandex.ru":"ua"===t?"https://metrika.yandex.ua":"com"===t?"https://metrica.yandex.com":"by"===t?"https://metrika.yandex.by":"kz"===t?"https://metrika.yandex.kz":"tr"===t?"https://metrica.yandex.com.tr":"https://metrika.yandex.ru"
},balance:function(t){return"ru"===t?"http://balance.yandex.ru":"http://balance.yandex.ru"},wordstat:function(t){return"ru"===t?"http://wordstat.yandex.ru":"http://wordstat.yandex.ru"
},webmaster:function(t){return"ru"===t?"http://webmaster.yandex.ru":"ua"===t?"http://webmaster.yandex.ua":"com"===t?"http://webmaster.yandex.com":"tr"===t?"http://webmaster.yandex.com.tr":"http://webmaster.yandex.ru"
},server:function(t){return"ru"===t?"http://company.yandex.ru/technology/server/":"http://company.yandex.ru/technology/server/"
},stat:function(t){return"ru"===t?"http://stat.yandex.ru":"ua"===t?"http://stat.yandex.ua":"by"===t?"http://stat.yandex.by":"http://stat.yandex.ru"
},mobile:function(t){return"ru"===t?"http://mobile.yandex.ru":"ua"===t?"http://mobile.yandex.ua":"tr"===t?"http://mobil.yandex.com.tr":"http://mobile.yandex.ru"
},help:function(t){return"ru"===t?"http://help.yandex.ru":"ua"===t?"http://help.yandex.ua":"com"===t?"http://help.yandex.com":"tr"===t?"http://yardim.yandex.com.tr":"http://help.yandex.ru"
},feedback:function(t){return"ru"===t?"http://feedback.yandex.ru":"ua"===t?"http://feedback.yandex.ua":"com"===t?"http://feedback.yandex.com":"by"===t?"http://feedback.yandex.by":"kz"===t?"http://feedback.yandex.kz":"tr"===t?"http://contact.yandex.com.tr":"http://feedback.yandex.ru"
},feedback2:function(t){return"ru"===t?"http://feedback2.yandex.ru":"ua"===t?"http://feedback2.yandex.ua":"com"===t?"http://feedback2.yandex.com":"by"===t?"http://feedback2.yandex.by":"kz"===t?"http://feedback2.yandex.kz":"tr"===t?"http://contact2.yandex.com.tr":"http://feedback2.yandex.ru"
},start:function(t){return"ru"===t?"http://help.yandex.ru/start/":"ua"===t?"http://help.yandex.ua/start/":"com"===t?"http://help.yandex.com/start/":"tr"===t?"http://yardim.yandex.com.tr/start":"http://help.yandex.ru/start/"
},cityday:function(t){return"ru"===t?"http://cityday.yandex.ru":"http://cityday.yandex.ru"},openid:function(t){return"ru"===t?"http://openid.yandex.ru":"http://openid.yandex.ru"
},oauth:function(t){return"ru"===t?"https://oauth.yandex.ru":"com"===t?"https://oauth.yandex.com":"https://oauth.yandex.ru"
},nano:function(t){return"ru"===t?"http://nano.yandex.ru":"http://nano.yandex.ru"},partnersearch:function(t){return"ru"===t?"http://yandex.ru":"http://yandex.ru"
},city:function(t){return"ru"===t?"http://city.yandex.ru":"http://city.yandex.ru"},goroda:function(t){return"ru"===t?"http://goroda.yandex.ru":"http://goroda.yandex.ru"
},toster:function(t){return"ru"===t?"http://toster.yandex.ru":"http://toster.yandex.ru"},love:function(t){return"ru"===t?"http://love.yandex.ru":"http://love.yandex.ru"
},rk:function(t){return"ru"===t?"http://rk.yandex.ru":"http://rk.yandex.ru"},lost:function(t){return"ru"===t?"http://lost.yandex.ru":"http://lost.yandex.ru"
},soft:function(t){return"ru"===t?"http://soft.yandex.ru":"ua"===t?"http://soft.yandex.ua":"tr"===t?"http://soft.yandex.com.tr":"http://soft.yandex.ru"
},passport:function(t){return"ru"===t?"https://passport.yandex.ru":"com"===t?"https://passport.yandex.com":"tr"===t?"https://passport.yandex.com.tr":"https://passport.yandex.ru"
},"maps-wiki":function(t){return"ru"===t?"http://nk.yandex.ru":"http://nk.yandex.ru"},404:function(t){return"ru"===t?"http://404.yandex.ru":"ua"===t?"http://404.yandex.ua":"com"===t?"http://404.yandex.com":"by"===t?"http://404.yandex.by":"kz"===t?"http://404.yandex.kz":"tr"===t?"http://404.yandex.com.tr":"http://404.yandex.ru"
},i:function(t){return"ru"===t?"http://i.yandex.ru":"http://i.yandex.ru"},desktop:function(t){return"ru"===t?"http://desktop.yandex.ru":"http://desktop.yandex.ru"
},ff:function(t){return"ru"===t?"http://ff.yandex.ru":"http://ff.yandex.ru"},fx:function(t){return"ru"===t?"http://fx.yandex.ru":"ua"===t?"http://fx.yandex.ua":"tr"===t?"http://fx.yandex.com.tr":"http://fx.yandex.ru"
},ie:function(t){return"ru"===t?"http://ie.yandex.ru":"ua"===t?"http://ie.yandex.ua":"tr"===t?"http://ie.yandex.com.tr":"http://ie.yandex.ru"
},"bar-ie":function(t){return"ru"===t?"http://bar.yandex.ru/ie":"ua"===t?"http://bar.yandex.ua/ie":"com"===t?"http://bar.yandex.com/ie":"by"===t?"http://bar.yandex.by/ie":"kz"===t?"http://bar.yandex.kz/ie":"tr"===t?"http://bar.yandex.com.tr/ie":"http://bar.yandex.ru/ie"
},"bar-ie9":function(t){return"ru"===t?"http://bar.yandex.ru/ie":"ua"===t?"http://bar.yandex.ua/ie":"com"===t?"http://bar.yandex.com/ie":"by"===t?"http://bar.yandex.by/ie":"kz"===t?"http://bar.yandex.kz/ie":"tr"===t?"http://bar.yandex.com.tr/ie":"http://bar.yandex.ru/ie"
},internet:function(t){return"ru"===t?"http://internet.yandex.ru":"com"===t?"http://internet.yandex.com":"tr"===t?"http://internet.yandex.com.tr":"http://internet.yandex.ru"
},keyboard:function(t){return"ru"===t?"http://www.yandex.ru/index_engl_qwerty.html":"http://www.yandex.ru/index_engl_qwerty.html"
},metro:function(t){return"ru"===t?"http://metro.yandex.ru":"http://metro.yandex.ru"},pulse:function(t){return"ru"===t?"http://blogs.yandex.ru/pulse":"ua"===t?"http://blogs.yandex.ua/pulse":"by"===t?"http://blogs.yandex.by/pulse":"kz"===t?"http://blogs.yandex.kz/pulse":"http://blogs.yandex.ru/pulse"
},school:function(t){return"ru"===t?"http://school.yandex.ru":"http://school.yandex.ru"},so:function(t){return"ru"===t?"http://so.yandex.ru":"http://so.yandex.ru"
},time:function(t){return"ru"===t?"http://time.yandex.ru":"ua"===t?"http://time.yandex.ua":"com"===t?"http://time.yandex.com":"by"===t?"http://time.yandex.by":"kz"===t?"http://time.yandex.kz":"tr"===t?"http://saat.yandex.com.tr":"http://time.yandex.ru"
},xmlsearch:function(t){return"ru"===t?"http://xml.yandex.ru":"ua"===t?"http://xml.yandex.ua":"com"===t?"http://xml.yandex.com":"by"===t?"http://xml.yandex.by":"kz"===t?"http://xml.yandex.kz":"tr"===t?"http://xml.yandex.com.tr":"http://xml.yandex.ru"
},catalogwdgt:function(t){return"ru"===t?"http://www.yandex.ru/catalog":"http://www.yandex.ru/catalog"
},opera:function(t){return"ru"===t?"http://opera.yandex.ru":"tr"===t?"http://opera.yandex.com.tr":"http://opera.yandex.ru"
},uslugi:function(t){return"ru"===t?"http://uslugi.yandex.ru":"http://uslugi.yandex.ru"},backapv:function(t){return"ru"===t?"http://backapv.yandex.ru":"http://backapv.yandex.ru"
},chrome:function(t){return"ru"===t?"http://chrome.yandex.ru":"http://chrome.yandex.ru"},browser:function(t){return"ru"===t?"//browser.yandex.ru":"ua"===t?"//browser.yandex.ua":"com"===t?"//browser.yandex.com":"by"===t?"//browser.yandex.by":"kz"===t?"//browser.yandex.kz":"tr"===t?"//browser.yandex.com.tr":"//browser.yandex.ru"
},aziada:function(t){return"ru"===t?"http://aziada2011.yandex.kz":"http://aziada2011.yandex.kz"},translate:function(t){return"ru"===t?"//translate.yandex.ru":"ua"===t?"//translate.yandex.ua":"com"===t?"//translate.yandex.com":"by"===t?"//translate.yandex.by":"kz"===t?"//translate.yandex.kz":"tr"===t?"//ceviri.yandex.com.tr":"//translate.yandex.ru"
},subs:function(t){return"ru"===t?"http://subs.yandex.ru":"http://subs.yandex.ru"},all:function(t){return"ru"===t?"http://www.yandex.ru/all":"ua"===t?"http://www.yandex.ua/all":"com"===t?"http://www.yandex.com/all":"by"===t?"http://www.yandex.by/all":"kz"===t?"http://www.yandex.kz/all":"tr"===t?"http://www.yandex.com.tr/all":"http://www.yandex.ru/all"
},large:function(t){return"ru"===t?"http://large.yandex.ru":"http://large.yandex.ru"},geocontext:function(t){return"ru"===t?"http://geocontext.yandex.ru":"http://geocontext.yandex.ru"
},root:function(t){return"ru"===t?"http://root.yandex.ru":"http://root.yandex.ru"},yamb:function(t){return"ru"===t?"https://yamb.yandex.ru":"https://yamb.yandex.ru"
},legal:function(t){return"ru"===t?"http://legal.yandex.ru":"ua"===t?"http://legal.yandex.ua":"com"===t?"http://legal.yandex.com":"tr"===t?"http://legal.yandex.com.tr":"http://legal.yandex.ru"
},taxi:function(t){return"ru"===t?"https://taxi.yandex.ru":"https://taxi.yandex.ru"},social:function(t){return"ru"===t?"https://social.yandex.ru":"ua"===t?"https://social.yandex.ua":"com"===t?"https://social.yandex.ru":"by"===t?"https://social.yandex.by":"kz"===t?"https://social.yandex.kz":"tr"===t?"https://social.yandex.com.tr":"https://social.yandex.ru"
},contest:function(t){return"ru"===t?"http://contest.yandex.ru":"com"===t?"http://contest.yandex.com":"http://contest.yandex.ru"
},peoplesearch:function(t){return"ru"===t?"http://people.yandex.ru":"ua"===t?"http://people.yandex.ua":"http://people.yandex.ru"
},disk:function(t){return"ru"===t?"https://disk.yandex.ru":"com"===t?"https://disk.yandex.com":"ua"===t?"https://disk.yandex.ua":"kz"===t?"https://disk.yandex.kz":"by"===t?"https://disk.yandex.by":"tr"===t?"https://disk.yandex.com.tr":"https://disk.yandex.ru"
},sport:function(t){return"ru"===t?"http://sport.yandex.ru":"by"===t?"http://sport.yandex.by":"ua"===t?"http://sport.yandex.ua":"kz"===t?"http://sport.yandex.kz":"tr"===t?"http://spor.yandex.com.tr":"http://sport.yandex.ru"
},literacy:function(t){return"ru"===t?"http://literacy.yandex.ru":"http://literacy.yandex.ru"},appsearch:function(t){return"ru"===t?"//appsearch.yandex.ru":"//appsearch.yandex.ru"
},ege:function(t){return"ru"===t?"//ege.yandex.ru":"//ege.yandex.ru"},vno:function(t){return"ru"===t?"//zno.yandex.ua":"//zno.yandex.ua"
},notifications:function(t){return"ru"===t?"https://notifications.yandex.ru":"ua"===t?"https://notifications.yandex.ua":"by"===t?"https://notifications.yandex.by":"kz"===t?"https://notifications.yandex.kz":"com"===t?"https://notifications.yandex.com":"tr"===t?"https://notifications.yandex.com.tr":"https://notifications.yandex.ru"
}}}function Ui(t){var e=n;return"search"===e?"row"===s?!0:Hi(t):"suggest2-item"===e?"highlight"===s?!1:Hi(t):"i-ua"===e?!!s==!1?!1:Hi(t):Hi(t)
}function Hi(){return void 0}function Vi(t){return{elem:"input",content:t.ctx.content}}function Ki(){return void 0
}function Wi(t){return t.ctx.label?t.ctx.label:BEM.I18N("search","search-for")}function Qi(t){return!t.isSimple(t.ctx)==!1?!!s==!1?t.ctx:Gi(t):Gi(t)
}function Gi(t){if(!t.ctx==!1){if(!!s==!1){var e=[],n=t._buf;t._buf=e;var o=i;return i="",Ce(t),t._buf=n,i=o,e.join("")
}return Xi(t)}return Xi(t)}function Xi(t){return!!s==!1?"":nn(t)}function Yi(t){var e=s;return"maxAjaxUrlLength"===e||"isPageLoadCounter"===e||"isCounterHeights"===e||"serpRequestExtraParams"===e||"pid"===e||"isGameEnabled"===e||"ajaxUrl"===e||"framebuster"===e||"shownResult"===e||"pg"===e||"nahodki"===e||"isCounterSerpview"===e||"tld"===e||"cache"===e||"reqid"===e||"pref-ajax"===e||"query"===e||"lr"===e?!0:!s==!1?{id:1,lang:1,tld:1,"content-region":1,"user-region":1,login:1,displayName:1,index:1,yandexuid:1,"passport-host":1,"pass-host":1,"passport-msg":1,"static-host":1,"lego-static-host":1,"social-host":1,clck:1,"click-host":1,"export-host":1,"i-host":1,"social-retpath":1,"lego-path":1,sid:1,retpath:1,uid:1}[s]||!1:nn(t)
}function Ji(t){var e,o,r,a,c,u=t["i-global"],l={},h={block:"i-global",js:l};for(c in u)u.hasOwnProperty(c)&&(e=i,i="public-params",o=n,n="i-global",r=s,s=c,a=Yi(t),i=e,n=o,s=r,a)&&(l[c]=u[c]);
return h}function Zi(t){return!!s==!1?{}:nn(t)}function tn(){return void 0}function en(){return void 0
}function nn(t){return!t.ctx==!1?!t.ctx.link==!1?!!t._.isSimple(t.ctx)==!1?sn(t):on(t):on(t):on(t)}function sn(i){function n(){if("no-follow"===this.ctx.link)return void 0;
var t=this._links[this.ctx.link];return __r0=this.ctx,this.ctx=t,__r1=e(pn,this),this.ctx=__r0,__r1}if(!a||!i._cacheLog)return n.call(t(i));
var s=i._buf.slice(i._cachePos).join("");i._cachePos=i._buf.length,i._cacheLog.push(s,{log:i._localLog.slice(),link:i.ctx.link});
var o=n.call(t(i));return i._cachePos=i._buf.length,o}function on(t){return!a==!1?!t.ctx==!1?!t.ctx.cache==!1?rn(t):an(t):an(t):an(t)
}function rn(e){function i(t,e,i){if(0===e.length)return void 0;if(Array.isArray(i)){for(var n=t,s=0;s<i.length-1;s++)n=n[i[s]];
i=n[i[s]]}for(var o,r=t,s=0;s<e.length-1;s++)r=r[e[s]];return o=r[e[s]],r[e[s]]=i,o}var n;if(n=a.get(e.ctx.cache)){var s=e._links;
e.ctx.links&&(e._links=e.ctx.links);for(var o=0;o<n.log.length;o++)if("string"!=typeof n.log[o]){var r,c=n.log[o];
r=c.log.map(function(t){return{key:t[0],value:i(this,t[0],t[1])}},t(e)).reverse();var l=e.ctx,h=l.cache;
l.cache=null;var d=e._cacheLog;e._cacheLog=null;var p=e.ctx,f=p.link;p.link=c.link,u(e),l.cache=h,e._cacheLog=d,p.link=f,r.forEach(function(t){i(this,t.key,t.value)
},t(e))}else e._buf.push(n.log[o]);return e._links=s,n.res}var m,_=[],g=e.ctx,b=g.cache;g.cache=null;
var v=e._cachePos;e._cachePos=e._buf.length;var y=e._cacheLog;e._cacheLog=_;var k=e._localLog;e._localLog=[],m=u(e);
var x=e._buf.slice(e._cachePos).join("");return x&&_.push(x),g.cache=b,e._cachePos=v,e._cacheLog=y,e._localLog=k,a.set(e.ctx.cache,{log:_,res:m}),m
}function an(t){var e=i;if("default"===e)return cn(t);if(""===e){if(!t._.isSimple(t.ctx)==!1){t._listLength--;
var n=t.ctx;return(n&&n!==!0||0===n)&&t._buf.push(n),void 0}return!!t.ctx==!1?(t._listLength--,void 0):!t._.isArray(t.ctx)==!1?un(t):ln(t)
}return hn(t)}function cn(t){function e(t,e){return(t||"")+"__"+(e||"")}var a,c,u,h,d,p,f,m,_,g,b,v,y,k,x,w,M,E,B,S,C,D,P,I=t.BEM,T=t.ctx,O=t._buf;
if(c=i,i="tag",v=A(t),i=c,P=v,"undefined"!=typeof P||(P=T.tag),"undefined"!=typeof P||(P="div"),P){var j,$;
n&&T.js!==!1&&(u=i,i="js",h=pe(t),i=u,$=h,$=$?t._.extend(T.js,$===!0?{}:$):T.js===!0?{}:T.js,$&&((j={})[I.INTERNAL.buildClass(n,T.elem)]=$)),O.push("<",P);
var N=(d=i,i="bem",p=Ui(t),i=d,p);"undefined"!=typeof N||(N="undefined"!=typeof T.bem?T.bem:T.block||T.elem);
var z=(f=i,i="cls",m=en(t),i=f,m);z||(z=T.cls);var F=T.block&&j&&!T.elem;if(N||z){if(O.push(' class="'),N){I.INTERNAL.buildClasses(n,T.elem,T.elemMods||T.mods,O);
var R=(_=i,i="mix",g=ye(t),i=_,g);if(T.mix&&(R=R?[].concat(R,T.mix):T.mix),R){var q={};q[e(n,s)]=!0,t._.isArray(R)||(R=[R]);
for(var U=0;U<R.length;U++){var H=R[U];if(H){var V=H.block||H.elem,K=H.block||H._block||n,W=H.elem||H._elem||s,Q=H.mods||r,G=H.elemMods||{};
if(V&&O.push(" "),I.INTERNAL[V?"buildClasses":"buildModsClasses"](K,H.elem||H._elem||(H.block?void 0:s),H.elemMods||H.mods,O),H.js&&((j||(j={}))[I.INTERNAL.buildClass(K,H.elem)]=H.js===!0?{}:H.js,F||(F=K&&!H.elem)),V&&!q[e(K,W)]){q[e(K,W)]=!0;
var X=(b=n,n=K,a=s,s=W,y=r,r=Q,k=o,o=G,x=i,i="mix",w=ye(t),n=b,s=a,r=y,o=k,i=x,w);if(X)for(var Y=0;Y<X.length;Y++){var J=X[Y];
(J.block||J.elem)&&q[e(J.block,J.elem)]||(J._block=K,J._elem=W,R.splice(U+1,0,J))}}}}}}z&&O.push(N?" ":"",z),F&&O.push(" i-bem"),O.push('"')
}if(j){var Z=(M=i,i="jsAttr",E=tn(t),i=M,E);O.push(" ",Z||"data-bem",'="',t._.attrEscape(JSON.stringify(j)),'"')
}var te=(B=i,i="attrs",S=l(t),i=B,S);if(te=t._.extend(te,T.attrs)){var ee;for(ee in te)void 0!==te[ee]&&O.push(" ",ee,'="',t._.attrEscape(te[ee]),'"')
}}if(t._.isShortTag(P))O.push("/>");else{P&&O.push(">");var ie=(C=i,i="content",D=L(t),i=C,D);if(ie||0===ie){var N=n||s,ne=t._notNewList;
t._notNewList=!1;var se=t.position;t.position=N?1:t.position;var oe=t._listLength;t._listLength=N?1:t._listLength;
var re=t.ctx;t.ctx=ie;var ae=i;i="",Ce(t),t._notNewList=ne,t.position=se,t._listLength=oe,t.ctx=re,i=ae
}P&&O.push("</",P,">")}}function un(t){var e=t.ctx,i=e.length,n=0,s=t.position,o=t._notNewList;for(o?t._listLength+=i-1:(t.position=0,t._listLength=i),t._notNewList=!0;i>n;){var r=e[n++],a=t.ctx;
t.ctx=null==r?"":r,Ce(t),t.ctx=a}o||(t.position=s)}function ln(t){var e=t.ctx.block,a=t.ctx.elem,c=t._currBlock||n;
t.ctx||(t.ctx={});var u=i;i="default";var l=t._links;t._links=t.ctx.links||t._links;var h=n;n=e||(a?c:void 0);
var d=t._currBlock;t._currBlock=e||a?void 0:c;var p=s;s=t.ctx.elem;var f=r;r=(e?t.ctx.mods:r)||{};var m=o;
o=t.ctx.elemMods||{},n||s?t.position=(t.position||0)+1:t._listLength--,je(t),i=u,t._links=l,n=h,t._currBlock=d,s=p,r=f,o=m
}function hn(){throw new Error(this)}function dn(t){return pn(t||this)}function pn(t){return u(t)}return!function(){!function(t,e){if(e.I18N)return void 0;
t.BEM=e;var i=e.I18N=function(t,e){return e};i.keyset=function(){return i},i.key=function(t){return t
},i.lang=function(){return void 0}}(this,"undefined"==typeof BEM?{}:BEM)}(),!function(){function t(t,e){this.ctx=null===typeof t?"":t,this.apply=e,this._buf=[],this._=this,this._start=!0,this._listLength=0,this._notNewList=!1,this.position=0
}var e={},i=Object.prototype.toString,n={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};
!function(t,e){function i(t,e,i){i.push(o,t,o,e)}function n(t,e,n,s){s.push(t),n&&i(e,n,s)}function s(t,s,o,a,c){n(t,e,e,c),c.push(r,s),a&&i(o,a,c)
}var o="_",r="__",a="[a-zA-Z0-9-]+";t.INTERNAL={NAME_PATTERN:a,MOD_DELIM:o,ELEM_DELIM:r,buildModPostfix:function(t,e,n){var s=n||[];
return i(t,e,s),n?s:s.join("")},buildClass:function(t,i,o,r,a){var c=typeof o;if("string"==c?"string"!=typeof r&&(a=r,r=o,o=i,i=e):"undefined"!=c?(a=o,o=e):i&&"string"!=typeof i&&(a=i,i=e),!(i||o||a))return t;
var u=a||[];return i?s(t,i,o,r,u):n(t,o,r,u),a?u:u.join("")},buildModsClasses:function(t,e,i,o){var r=o||[];
if(i){var a;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];null!=c&&(c=i[a]+"",c&&(r.push(" "),e?s(t,e,a,c,r):n(t,a,c,r)))
}}return o?r:r.join("")},buildClasses:function(t,i,o,r){var a=r||[];return i?s(t,i,e,e,a):n(t,e,e,a),this.buildModsClasses(t,i,o,r),r?a:a.join("")
}}}(e);var s=function(){var t={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},e=function(e){return t[e]||e
};return function(t){return t=new RegExp(t,"g"),function(i){return(""+i).replace(t,e)}}}();t.prototype.isArray=function(t){return"[object Array]"===i.call(t)
},t.prototype.isSimple=function(t){var e=typeof t;return"string"===e||"number"===e||"boolean"===e},t.prototype.isShortTag=function(t){return n.hasOwnProperty(t)
},t.prototype.extend=function(t,e){if(!t||!e)return t||e;var i,n={};for(i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);
for(i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return n},t.prototype.identify=function(){var t=0,i=e.__id=+new Date,n="__"+i,s=function(){return"uniq"+i+ ++t
};return function(t,e){return t?e||t[n]?t[n]:t[n]=s():s()}}(),t.prototype.xmlEscape=s("[&<>]"),t.prototype.attrEscape=s('["&<>]'),t.prototype.BEM=e,t.prototype.isFirst=function(){return 1===this.position
},t.prototype.isLast=function(){return this.position===this._listLength},t.prototype.generateId=function(){return this.identify(this.ctx)
},c.apply=t.apply=function(){var e=new t(this,dn);return e.apply(),e._buf.join("")}}(),c}("undefined"==typeof c?{}:c);
return function(t){var e=this;return t||(t={}),a=t.cache,function(){return e===this?(e=void 0,i="",n="",s="",o="",r=""):(i="",n="",s="",o="",r=""),u.apply.call([e])
}.call(null)}}();"undefined"==typeof exports||(exports.BEMHTML=BEMHTML),_borschik("AUiCuvCsFkeXqPHTCnve3trT-eI")&&(jQuery.cookie=function(t,e,i){if("undefined"==typeof e){var n=null;
if(document.cookie&&""!=document.cookie)for(var s=document.cookie.split(";"),o=0;o<s.length;o++){var r=jQuery.trim(s[o]);
if(r.substring(0,t.length+1)==t+"="){n=decodeURIComponent(r.substring(t.length+1));break}}return n}i=i||{},null===e&&(e="",i.expires=-1);
var a="";if(i.expires&&("number"==typeof i.expires||i.expires.toUTCString)){var c;"number"==typeof i.expires?(c=new Date,c.setTime(c.getTime()+24*i.expires*60*60*1e3)):c=i.expires,a="; expires="+c.toUTCString()
}var u=i.path?"; path="+i.path:"",l=i.domain?"; domain="+i.domain:"",h=i.secure?"; secure":"";document.cookie=[t,"=",encodeURIComponent(e),a,u,l,h].join("")
}),_borschik("irbqP6Ggd1noo1nmTI1gPmuX7A4")&&!function(t){function e(t){return t.replace(/%.{2}/g,function(t){return n[t]||t
})}function i(t,i){var n="";try{n=t(i)}catch(s){try{n=t(e(i))}catch(s){n=i}}return n}var n={"%D0":"%D0%A0","%C0":"%D0%90","%C1":"%D0%91","%C2":"%D0%92","%C3":"%D0%93","%C4":"%D0%94","%C5":"%D0%95","%A8":"%D0%81","%C6":"%D0%96","%C7":"%D0%97","%C8":"%D0%98","%C9":"%D0%99","%CA":"%D0%9A","%CB":"%D0%9B","%CC":"%D0%9C","%CD":"%D0%9D","%CE":"%D0%9E","%CF":"%D0%9F","%D1":"%D0%A1","%D2":"%D0%A2","%D3":"%D0%A3","%D4":"%D0%A4","%D5":"%D0%A5","%D6":"%D0%A6","%D7":"%D0%A7","%D8":"%D0%A8","%D9":"%D0%A9","%DA":"%D0%AA","%DB":"%D0%AB","%DC":"%D0%AC","%DD":"%D0%AD","%DE":"%D0%AE","%DF":"%D0%AF","%E0":"%D0%B0","%E1":"%D0%B1","%E2":"%D0%B2","%E3":"%D0%B3","%E4":"%D0%B4","%E5":"%D0%B5","%B8":"%D1%91","%E6":"%D0%B6","%E7":"%D0%B7","%E8":"%D0%B8","%E9":"%D0%B9","%EA":"%D0%BA","%EB":"%D0%BB","%EC":"%D0%BC","%ED":"%D0%BD","%EE":"%D0%BE","%EF":"%D0%BF","%F0":"%D1%80","%F1":"%D1%81","%F2":"%D1%82","%F3":"%D1%83","%F4":"%D1%84","%F5":"%D1%85","%F6":"%D1%86","%F7":"%D1%87","%F8":"%D1%88","%F9":"%D1%89","%FA":"%D1%8A","%FB":"%D1%8B","%FC":"%D1%8C","%FD":"%D1%8D","%FE":"%D1%8E","%FF":"%D1%8F"};
t.extend({decodeURI:function(t){return i(decodeURI,t)},decodeURIComponent:function(t){return i(decodeURIComponent,t)
}})}(jQuery),_borschik("oUJpFqlIp9iA1Zv57aq1wiF4aLA")&&!function(t){function e(e,n,s){var r=!1;if(o){var a=[];
t.each(c,function(){s.hasOwnProperty(this)&&(r=!0)&&a.push({name:this,val:s[this]})}),r&&(t.each(s,function(t){a.push({name:t,val:this})
}),s=a)}t.each(s,function(s,o){if(r&&(s=o.name,o=o.val),t.isFunction(o)&&(!i||o.toString().indexOf(".__base")>-1)){var a=e[s]||function(){};
n[s]=function(){var t=this.__base;this.__base=a;var e=o.apply(this,arguments);return this.__base=t,e}
}else n[s]=o})}var i=function(){"_"}.toString().indexOf("_")>-1,n=function(){},s=Object.create||function(t){var e=function(){};
return e.prototype=t,new e},o=!0,r={toString:""};for(var a in r)r.hasOwnProperty(a)&&(o=!1);var c=o?["toString","valueOf"]:null;
t.inherit=function(){var i=arguments,o=t.isFunction(i[0]),r=o?i[0]:n,a=i[o?1:0]||{},c=i[o?2:1],u=a.__constructor||o&&r.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)
}:function(){};if(!o)return u.prototype=a,u.prototype.__self=u.prototype.constructor=u,t.extend(u,c);
t.extend(u,r);var l=r.prototype,h=u.prototype=s(l);return h.__self=h.constructor=u,e(l,h,a),c&&e(r,u,c),u
},t.inheritSelf=function(t,i,n){var s=t.prototype;return e(s,s,i),n&&e(t,t,n),t}}(jQuery),_borschik("eim9mbh-HguuX6sdshSBuau-YF8")&&!function(t){var e=0,i="__"+ +new Date,n=function(){return"uniq"+ ++e
};t.identify=function(t,e){if(!t)return n();var s="uniqueID"in t?"uniqueID":i;return e||s in t?t[s]:t[s]=n()
}}(jQuery),_borschik("gOR9FuNtxxFTRUHpBJCppIiGQD8")&&!function(t){t.isEmptyObject||(t.isEmptyObject=function(t){for(var e in t)return!1;
return!0})}(jQuery),_borschik("AW47RAjsjOlefg_2L_CsT2aXktI")&&!function(t){t.extend({debounce:function(t,e,i,n){3==arguments.length&&"boolean"!=typeof i&&(n=i,i=!1);
var s;return function(){var o=arguments;n=n||this,i&&!s&&t.apply(n,o),clearTimeout(s),s=setTimeout(function(){i||t.apply(n,o),s=null
},e)}},throttle:function(t,e,i){var n,s,o;return function(){s=arguments,o=!0,i=i||this,n||function(){o?(t.apply(i,s),o=!1,n=setTimeout(arguments.callee,e)):n=null
}()}}})}(jQuery),_borschik("zp1cShcmhQhukkz4jYNgMjVnI7s")&&!function(t){var e="__"+ +new Date+"storage",i=function(e,i){return t.identify(e)+(i?t.identify(i):"")
},n={buildEventName:function(t){return t},on:function(n,s,o,r,a){if("string"==typeof n){t.isFunction(s)&&(r=o,o=s,s=void 0);
for(var c,u=i(o,r),l=this[e]||(this[e]={}),h=n.split(" "),d=0;n=h[d++];)if(n=this.buildEventName(n),c=l[n]||(l[n]={ids:{},list:{}}),!(u in c.ids)){var p=c.list,f={fn:o,data:s,ctx:r,special:a};
p.last?(p.last.next=f,f.prev=p.last):p.first=f,c.ids[u]=p.last=f}}else{var m=this;t.each(n,function(t,e){m.on(t,e,s,a)
})}return this},onFirst:function(t,e,i,n){return this.on(t,e,i,n,{one:!0})},un:function(n,s,o){if("string"==typeof n||"undefined"==typeof n){var r=this[e];
if(r)if(n){for(var a,c=n.split(" "),u=0;n=c[u++];)if(n=this.buildEventName(n),a=r[n])if(s){var l=i(s,o),h=a.ids;
if(l in h){var d=a.list,p=h[l],f=p.prev,m=p.next;f?f.next=m:p===d.first&&(d.first=m),m?m.prev=f:p===d.last&&(d.last=f),delete h[l]
}}else delete this[e][n]}else delete this[e]}else{var _=this;t.each(n,function(t,e){_.un(t,e,o)})}return this
},trigger:function(i,n){var s,o=this,r=o[e];if("string"==typeof i?i=t.Event(o.buildEventName(s=i)):i.type=o.buildEventName(s=i.type),i.target||(i.target=o),r&&(r=r[i.type]))for(var a,c=r.list.first;c;)i.data=c.data,a=c.fn.call(c.ctx||o,i,n),"undefined"!=typeof a&&(i.result=a,a===!1&&(i.preventDefault(),i.stopPropagation())),c.special&&c.special.one&&o.un(s,c.fn,c.ctx),c=c.next;
return this}};t.observable=t.inherit(n,n)}(jQuery),_borschik("81oks9O2VxdWVgGGq-7t2ceDNsI")&&!function(t,e){function i(t,e,i){return(t?"__elem_"+t:"")+"__mod"+(e?"_"+e:"")+(i?"_"+i:"")
}function n(e,n,s){t.isFunction(e)?n[i(s,"*","*")]=e:t.each(e,function(e,o){t.isFunction(o)?n[i(s,e,"*")]=o:t.each(o,function(t,o){n[i(s,e,t)]=o
})})}function s(t,e){return e?Array.isArray(e)?function(i){for(var n=0,s=e.length;s>n;)if(i.hasMod(t,e[n++]))return!0;
return!1}:function(i){return i.hasMod(t,e)}:function(e){return e.hasMod(t)}}var o=[],r={},a={};this.BEM=t.inherit(t.observable,{__constructor:function(t,e,i){var n=this;
n._modCache=t||{},n._processingMods={},n._params=e,n.params=null,i!==!1?n._init():n.afterCurrentEvent(function(){n._init()
})},_init:function(){return this._initing||this.hasMod("js","inited")||(this._initing=!0,this.params||(this.params=t.extend(this.getDefaultParams(),this._params),delete this._params),this.setMod("js","inited"),delete this._initing,this.hasMod("js","inited")&&this.trigger("init")),this
},changeThis:function(t,e){return t.bind(e||this)},afterCurrentEvent:function(t,e){this.__self.afterCurrentEvent(this.changeThis(t,e))
},trigger:function(t,e){return this.__base(t=this.buildEvent(t),e).__self.trigger(t,e),this},buildEvent:function(e){return"string"==typeof e&&(e=t.Event(e)),e.block=this,e
},hasMod:function(t,i,n){var s=arguments.length,o=!1;1==s?(n="",i=t,t=e,o=!0):2==s&&("string"==typeof t?(n=i,i=t,t=e):(n="",o=!0));
var r=this.getMod(t,i)===n;return o?!r:r},getMod:function(t,e){var i=typeof t;if("string"===i||"undefined"===i){e=t||e;
var n=this._modCache;return e in n?n[e]:n[e]=this._extractModVal(e)}return this._getElemMod(e,t)},_getElemMod:function(t,e,i){return this._extractModVal(t,e,i)
},getMods:function(t){var i=t&&"string"!=typeof t,n=this,s=[].slice.call(arguments,i?1:0),o=n._extractMods(s,i?t:e);
return i||(s.length?s.forEach(function(t){n._modCache[t]=o[t]}):n._modCache=o),o},setMod:function(i,n,s){"undefined"==typeof s&&(s=n,n=i,i=e);
var o=this;if(!i||i[0]){var r=(i&&i[0]?t.identify(i[0]):"")+"_"+n;if(this._processingMods[r])return o;
var a,c=i?o._getElemMod(n,i,a=o.__self._extractElemNameFrom(i)):o.getMod(n);if(c===s)return o;this._processingMods[r]=!0;
var u=!0,l=[n,s,c];i&&l.unshift(i),[["*","*"],[n,"*"],[n,s]].forEach(function(t){u=o._callModFn(a,t[0],t[1],l)!==!1&&u
}),!i&&u&&(o._modCache[n]=s),u&&o._afterSetMod(n,s,c,i,a),delete this._processingMods[r]}return o},_afterSetMod:function(){},toggleMod:function(t,i,n,s,o){"string"==typeof t&&(o=s,s=n,n=i,i=t,t=e),"undefined"==typeof s?s="":"boolean"==typeof s&&(o=s,s="");
var r=this.getMod(t,i);return(r==n||r==s)&&this.setMod(t,i,"boolean"==typeof o?o?n:s:this.hasMod(t,i,n)?s:n),this
},delMod:function(t,i){return i||(i=t,t=e),this.setMod(t,i,"")},_callModFn:function(t,n,s,o){var r=i(t,n,s);
return this[r]?this[r].apply(this,o):e},_extractModVal:function(){return""},_extractMods:function(){return{}
},channel:function(t,e){return this.__self.channel(t,e)},getDefaultParams:function(){return{}},del:function(t){var e=[].slice.call(arguments);
return"string"==typeof t&&e.unshift(this),this.__self.del.apply(this.__self,e),this},destruct:function(){}},{_name:"i-bem",blocks:r,decl:function(i,o,a){if("string"==typeof i?i={block:i}:i.name&&(i.block=i.name),i.baseBlock&&!r[i.baseBlock])throw'baseBlock "'+i.baseBlock+'" for "'+i.block+'" is undefined';
o||(o={}),o.onSetMod&&(n(o.onSetMod,o),delete o.onSetMod),o.onElemSetMod&&(t.each(o.onElemSetMod,function(t,e){n(e,o,t)
}),delete o.onElemSetMod);var c=r[i.baseBlock||i.block]||this;if(i.modName){var u=s(i.modName,i.modVal);
t.each(o,function(i,n){t.isFunction(n)&&(o[i]=function(){var t;if(u(this))t=n;else{var s=c.prototype[i];
s&&s!==o[i]&&(t=this.__base)}return t?t.apply(this,arguments):e})})}if(a&&"boolean"==typeof a.live){var l=a.live;
a.live=function(){return l}}var h;return i.block==c._name?(h=t.inheritSelf(c,o,a))._processLive(!0):((h=r[i.block]=t.inherit(c,o,a))._name=i.block,delete h._liveInitable),h
},_processLive:function(){return!1},create:function(t,e){return"string"==typeof t&&(t={block:t}),new r[t.block](t.mods,e)
},getName:function(){return this._name},_extractElemNameFrom:function(){},afterCurrentEvent:function(t,e){1==o.push({fn:t,ctx:e})&&setTimeout(this._runAfterCurrentEventFns,0)
},_runAfterCurrentEventFns:function(){var t=o.length;if(t)for(var e,i=o.splice(0,t);e=i.shift();)e.fn.call(e.ctx||this)
},changeThis:function(t,e){return t.bind(e||this)},del:function(t){var e="string"==typeof t,i=e?0:1,n=arguments.length;
for(e&&(t=this);n>i;)delete t[arguments[i++]];return this},channel:function(i,n){return"boolean"==typeof i&&(n=i,i=e),i||(i="default"),n?(a[i]&&(a[i].un(),delete a[i]),void 0):a[i]||(a[i]=new t.observable)
}})}(jQuery),_borschik("0-nxidvUpMH0LJvfm0bs3XgluxQ")&&!function(){Object.keys||(Object.keys=function(t){var e=[];
for(var i in t)t.hasOwnProperty(i)&&e.push(i);return e})}(),_borschik("-ZDvPX6or8Y70YiXchEgISxjbdc")&&!function(){var t=Array.prototype,e=Object.prototype.toString,i={indexOf:function(t,e){e=+(e||0);
var i=this,n=i.length;if(n>0&&n>e)for(e=0>e?Math.ceil(e):Math.floor(e),-n>e&&(e=0),0>e&&(e+=n);n>e;){if(e in i&&i[e]===t)return e;
++e}return-1},forEach:function(t,e){for(var i=-1,n=this,s=n.length;++i<s;)i in n&&(e?t.call(e,n[i],i,n):t(n[i],i,n))
},map:function(t,e){for(var i=-1,n=this,s=n.length,o=new Array(s);++i<s;)i in n&&(o[i]=e?t.call(e,n[i],i,n):t(n[i],i,n));
return o},filter:function(t,e){for(var i=-1,n=this,s=n.length,o=[];++i<s;)i in n&&(e?t.call(e,n[i],i,n):t(n[i],i,n))&&o.push(n[i]);
return o},reduce:function(t,e){var i,n=-1,s=this,o=s.length;if(arguments.length<2){for(;++n<o;)if(n in s){i=s[n];
break}}else i=e;for(;++n<o;)n in s&&(i=t(i,s[n],n,s));return i},some:function(t,e){for(var i=-1,n=this,s=n.length;++i<s;)if(i in n&&(e?t.call(e,n[i],i,n):t(n[i],i,n)))return!0;
return!1},every:function(t,e){for(var i=-1,n=this,s=n.length;++i<s;)if(i in n&&!(e?t.call(e,n[i],i,n):t(n[i],i,n)))return!1;
return!0}};for(var n in i)t[n]||(t[n]=i[n]);Array.isArray||(Array.isArray=function(t){return"[object Array]"===e.call(t)
})}(),_borschik("vAscd2mB4A4XPDZE8_rLW4IBSF8")&&!function(){var t=Array.prototype.slice;Function.prototype.bind||(Function.prototype.bind=function(e){var i=this,n=t.call(arguments,1);
return function(){return i.apply(e,n.concat(t.call(arguments)))}})}(),_borschik("jsCjS5rSMjCXvTk4uYxD9E_6410")&&!function(t,e,i){function n(t,e,i){i.push(r,t,r,e)
}function s(t,e,i,s){s.push(t),i&&n(e,i,s)}function o(t,e,o,r,c){s(t,i,i,c),c.push(a,e),r&&n(o,r,c)}var r="_",a="__",c="[a-zA-Z0-9-]+";
t.INTERNAL={NAME_PATTERN:c,MOD_DELIM:r,ELEM_DELIM:a,buildModPostfix:function(t,e,i){var s=i||[];return n(t,e,s),i?s:s.join("")
},buildClass:function(t,e,n,r,a){var c=typeof n;if("string"==c?"string"!=typeof r&&"number"!=typeof r&&(a=r,r=n,n=e,e=i):"undefined"!=c?(a=n,n=i):e&&"string"!=typeof e&&(a=e,e=i),!(e||n||a))return t;
var u=a||[];return e?o(t,e,n,r,u):s(t,n,r,u),a?u:u.join("")},buildClasses:function(t,n,r,a){n&&"string"!=typeof n&&(a=r,r=n,n=i);
var c=a||[];return n?o(t,n,i,i,c):s(t,i,i,c),r&&e.each(r,function(e,i){i&&(c.push(" "),n?o(t,n,e,i,c):s(t,e,i,c))
}),a?c:c.join("")}}}(BEM,jQuery),_borschik("0SCysFuZDJLtQIXOA4fR53FXRuA")&&(!function(t){function e(t){return t.replace(/^(?:https?:)?\/\//,"")
}t||(t=window.Lego={}),!t.params&&(t.params={}),t.c=function(t,i,n){var s=e(n&&n.host||BEM.blocks["i-global"].param("click-host")||"clck.yandex.ru"),o=function(t,e,i,n){return e=e.replace("'","%27"),e.indexOf("/dtype=")>-1?e:location.protocol+"//"+s+"/"+i+"/dtype="+t+"/rnd="+((new Date).getTime()+Math.round(100*Math.random()))+(n?"/*"+(e.match(/^http/)?e:location.protocol+"//"+location.host+(e.match("^/")?e:"/"+e)):"/*data="+encodeURIComponent("url="+encodeURIComponent(e.match(/^http/)?e:location.protocol+"//"+location.host+(e.match("^/")?e:"/"+e))))
},r=function(){var e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],i=document.createElement("script");
i.setAttribute("src",o(t,location.href,"jclck")),e.insertBefore(i,e.firstChild)};if(i)if(i.className.match(/b-link_pseudo_yes/)||i.href&&i.href.match(/^mailto:/)||n&&n.noRedirect===!0)r();
else if(i.href){var a=i.href;i.href=o(t,a,"redir"),setTimeout(function(){i.href=a},500)}else if(i.form)if(i.type.match(/submit|button|image/)){var a=i.form.action;
i.form.action=o(t,a,"redir",!0),setTimeout(function(){i.form.action=a},500)}else r();else{if(!i.action)throw"counter.js: not link and not form!";
i.action=o(t,i.action,"redir",!0)}else r()}}(window.Lego),function(t,e){t||(t=window.Lego={}),t.cp=function(i,n,s,o,r,a){"string"==typeof o||(a=r,r=o,o=e),t.c("stred/pid="+i+"/cid="+n+(s?"/path="+s+(o?"/vars="+o:""):""),r,a)
}}(window.Lego),function(t){t||(t=window.Lego={}),t.ch=function(e,i,n){BEM.blocks["i-global"].param("show-counters")&&t.cp(0,2219,e,i,n)
}}(window.Lego)),_borschik("cXnDO14Y5A-NxW1rFFI6qOjFo1E")&&!function(t){t||(t=window.Lego={}),t.getCookie=function(t){var e=document.cookie;
if(e.length<1)return!1;var i=e.indexOf(t+"=");if(-1==i)return!1;i+=t.length+1;var n=e.indexOf(";",i);
return decodeURIComponent(-1==n?e.substring(i):e.substring(i,n))}}(window.Lego),_borschik("aIsupGFtZhGfKbXxiPQIrAPBfBk")&&!function(t){t||(t=window.Lego={}),t.isSessionValid=function(){return!!t.getCookie("yandex_login")
}}(window.Lego),_borschik("CphGF0hhQqPR-EeGzZOfvnREL3E")&&!function(t,e){e||(e=window.Lego={}),e.init||(e.init=function(i){return(i=e.params=t.extend({id:"",login:e.isSessionValid()?e.getCookie("yandex_login")||"":"",yandexuid:e.getCookie("yandexuid"),locale:"ru",retpath:window.location.toString(),"passport-host":"https://passport.yandex.ru","pass-host":"https://pass.yandex.ru","passport-msg":i.id,"social-host":"https://social.yandex.ru","lego-path":"/lego","show-counters-percent":100},i,e.params))["show-counters"]=Math.round(100*Math.random())<=i["show-counters-percent"],BEM.blocks["i-global"]._params||t.extend(BEM.blocks["i-global"]._params={},i),t(function(){i.oframebust&&e.oframebust(i.oframebust)
}),i}),e.block||(e.block={}),e.blockInit||(e.blockInit=function(i,n){i=i||document,n=n||".g-js",t(i).find(n).each(function(){var i=t(this),n=this.onclick?this.onclick():{},s=n.name||"",o=e.block[s];
o&&!i.data(s)&&(o.call(i,n),i.data(s,!0).addClass(s+"_js_inited"))})}),e.blockInitBinded||(e.blockInitBinded=!!t(document).ready(function(){e.blockInit()
}))}(jQuery,window.Lego),_borschik("E6vqydSSAYnWVICbcEV2tFXJF1U")&&!function(t,e,i){function n(t,e,i){(t[e]||(t[e]=[])).unshift(i)
}function s(t,e){return e.modName?function(i){(i._curBlock.mods||{})[e.modName]===e.modVal&&t(i)}:t}function o(t,i){var n,s=e.isArray(i);
return e.isArray(t)?s?n=t.concat(i):(n=t).push(i):s?(n=i).unshift(t):n=[t,i],n}function r(t){return t.replace(f,function(t){return p[t]
})}var a=t.INTERNAL,c=a.ELEM_DELIM,u={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1},l=a.buildClass,h=a.buildClasses,d={},p={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=/["&<>]/g;
t.HTML={decl:function(t,i){"string"==typeof t&&(t={block:t}),t.name&&(t.block=t.name);var o=d[t.block]||(d[t.block]={});
i.onBlock&&n(o,"_block",s(i.onBlock,t)),i.onElem&&(e.isFunction(i.onElem)?n(o,"_elem",s(i.onElem,t)):e.each(i.onElem,function(e,i){n(o,"_elem"+("*"===e?"":c+e),s(i,t))
}))},build:function(t){var e=new this.Ctx(t);return e._buildAll(),e._flush()},Ctx:e.inherit({__constructor:function(t){this._buffer=[],this._params=t,this._tParams=null,this._tParamsChanges=null,this._curBlock=i
},pos:function(){return this._params._pos},isFirst:function(){return 1===this._params._pos},isLast:function(){var t=this._params;
return t._pos===t._siblingsCount},params:function(t){var e=this;return"undefined"==typeof t?e._params:(e._params=t,e)
},param:function(t,i,n,s){var o=this,r=o._params;return"undefined"==typeof i?r[t]:(!n&&t in r?s&&(r[t]=e.extend(i,r[t])):r[t]=i,o)
},attrs:function(t,e){return this.param("attrs",t,e,!0)},attr:function(t,e,i){var n=this;if("undefined"==typeof e)return(n._params.attrs||{})[t];
var s=n._params.attrs;return s?(i||!(t in s))&&(s[t]=e):(n._params.attrs={})[t]=e,n},tag:function(t,e){return this.param("tag",t,e)
},cls:function(t,e){return this.param("cls",t,e)},mods:function(t,e){return this.param("mods",t,e,!0)
},mod:function(t,e,i){var n=this;if("undefined"==typeof e)return(n._params.mods||{})[t];var s=n._params.mods;
return s?(i||!(t in s))&&(s[t]=e):(n._params.mods={})[t]=e,n},mix:function(t,e){var i=this,n=i._params;
return"undefined"==typeof t?n.mix:(n.mix=!e&&"mix"in n?n.mix.concat(t):t,i)},js:function(t){return this.param("js",t)
},content:function(t,e){return this.param("content",t,e)},wrapContent:function(t){var e=this,i=e._params;
return t.content=i.content,i.content=t,e},beforeContent:function(t){var e=this,i=e._params;return i.content=o(t,i.content),e
},afterContent:function(t){var e=this,i=e._params;return i.content=o(i.content,t),e},wrap:function(t){var e=this,i=e._params;
return t.block||(t._curBlock=e._curBlock),t.content=i._wrapper?i._wrapper:i,i._wrapper=t,e},tParam:function(t,e){var i=this,n=i._tParams||(i._tParams={});
if("undefined"==typeof e)return n[t];var s=i._tParamsChanges||(i._tParamsChanges={});return t in s||(s[t]=n[t]),n[t]=e,i
},generateId:function(){return e.identify()},stop:function(){this._params._isStopped=!0},_buildAll:function(){var t=this,i=t._buffer,n=t._params,s=typeof n;
if("string"==s||"number"==s)i.push(n);else if(e.isArray(n))for(var o,r,a=0,c=n.length;c>a;)t._params=o=n[a++],r=typeof o,"string"==r||"number"==r?i.push(o):o&&(o._pos=a,o._siblingsCount=c,t._buildByDecl());
else n&&(t._params._pos=t._params._siblingsCount=1,t._buildByDecl())},_build:function(){var t,i=this,n=i._buffer,s=i._params,o=s.tag||"div",a=s.block||s.elem,c=a&&(s.block||i._curBlock.block),d=!1;
s.js&&((t={})[l(c,s.elem)]=s.js===!0?{}:s.js,d=!s.elem),n.push("<",o),(a||s.cls)&&(n.push(' class="'),a&&(h(c,s.elem,s.mods,n),s.mix&&e.each(s.mix,function(e,i){i&&(n.push(" "),h(i.block,i.elem,i.mods,n),i.js&&((t||(t={}))[l(i.block,i.elem)]=i.js===!0?{}:i.js,d||(d=!i.elem)))
})),s.cls&&n.push(a?" ":"",s.cls),d&&n.push(" i-bem"),n.push('"')),t&&n.push(' onclick="return ',r(JSON.stringify(t)),'"'),s.attrs&&e.each(s.attrs,function(t,e){"undefined"!=typeof e&&null!==e&&e!==!1&&n.push(" ",t,'="',e.toString().replace(/"/g,"&quot;"),'"')
}),u[o]?n.push("/>"):(n.push(">"),"undefined"!=typeof s.content&&(i._params=s.content,i._buildAll()),n.push("</",o,">"))
},_flush:function(){var t=this._buffer.join("");return delete this._buffer,t},_buildByDecl:function(){var t=this,i=t._curBlock,n=t._params;
if(n._curBlock&&(t._curBlock=n._curBlock),n.block&&(t._curBlock=n),!n._wrapper){if(n.block||n.elem){var s=d[t._curBlock.block];
if(s){var o;if(n.elem?(o=s["_elem"+c+n.elem],s._elem&&(o=o?o.concat(s._elem):s._elem)):o=s._block,o)for(var r,a=0;(r=o[a++])&&(r(t),!n._isStopped););}}if(n._wrapper)return n._curBlock=t._curBlock,t._params=n._wrapper,t._buildAll()
}var u=t._tParamsChanges;if(t._tParamsChanges=null,t._build(),t._curBlock=i,u){var l=t._tParams;e.each(u,function(t,e){"undefined"==typeof e?delete l[t]:l[t]=e
})}}})}}(BEM,jQuery),_borschik("jLrogLSSl8ftqkwOsITrwGNhhNM")&&!function(t){if(!window.JSON){var e,i=Object.prototype.toString,n=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,s={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
window.JSON={stringify:e=function(o){if(null===o)return"null";if("undefined"==typeof o)return t;switch(i.call(o)){case"[object String]":return n.lastIndex=0,'"'+(n.test(o)?o.replace(n,function(t){var e=s[t];
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}):o)+'"';case"[object Number]":case"[object Boolean]":return""+o;
case"[object Array]":for(var r,a="[",c=0,u=o.length;u>c;)r=e(o[c]),a+=(c++?",":"")+("undefined"==typeof r?"null":r);
return a+"]";case"[object Object]":if("[object Function]"===i.call(o.toJSON))return e(o.toJSON());var r,a="{",c=0;
for(var l in o)o.hasOwnProperty(l)&&(r=e(o[l]),"undefined"!=typeof r&&(a+=(c++?",":"")+'"'+l+'":'+r));
return a+"}";default:return t}},parse:function(t){return Function("return "+t)()}}}}(),_borschik("E4bTwwzCqVA54zTUUySrx44Rylo")&&!function(t,e,i){function n(t,i){var n=t[0];
e.each(a(n),function(r,a){o(a,n,r,i);var c=f[a.uniqId];c?c.domElem.index(n)<0&&(c.domElem=c.domElem.add(t),e.extend(c._params,a)):s(r,t,a)
})}function s(t,n,s,r,c){"boolean"==typeof s&&(c=r,r=s,s=i);var u=n[0];s=o(s||a(u)[t],u,t);var l=s.uniqId;
if(f[l])return f[l]._init();p[l]=p[l]?p[l].add(n):n;var h=u.parentNode;h&&11!==h.nodeType||e.unique(p[l]);
var d=b[t]||S.decl(t,{},{live:!0});if(!(d._liveInitable=!!d._processLive())||r||s.live===!1){r&&n.addClass("i-bem");
var m=new d(p[l],s,!!r);return delete p[l],c&&c.apply(m,E.call(arguments,4)),m}}function o(t,i,n,s){(t||(t={})).uniqId||(t.uniqId=(t.id?n+"-id-"+t.id:e.identify())+(s||e.identify()));
var o=e.identify(i),r=m[o]||(m[o]={});return r[n]||(r[n]=t),t}function r(t,e,i){var n=t.find(e);return i?n:n.add(t.filter(e))
}function a(t){var i=e.identify(t);return m[i]||(m[i]=c(t))}function c(t){var i,n,s=t.getAttribute("data-bem");
return s?JSON.parse(s):(i=t.onclick||t.ondblclick,i||"body"!=t.tagName.toLowerCase()||(n=e(t),s=n.attr("onclick")||n.attr("ondblclick"),s&&(i=Function(s))),i?i():{})
}function u(t){delete m[e.identify(t)]}function l(t,e){1===t.domElem.length?t.destruct(!0):t.domElem=t.domElem.not(e)
}var h=e(window),d=e(document),p={},f={},m={},_={},g={},b=t.blocks,v=t.INTERNAL,y=v.NAME_PATTERN,k=v.MOD_DELIM,x=v.ELEM_DELIM,w=v.buildModPostfix,M=v.buildClass,E=Array.prototype.slice,B=Array.prototype.reverse;
e.fn.bem=function(t,e){return s(t,this,e,!0)};var S=t.DOM=t.decl("i-bem__dom",{__constructor:function(t,i,n){var s=this;
s.domElem=t,s._eventNameCache={},s._elemCache={},f[s._uniqId=i.uniqId||e.identify(s)]=s,s._needSpecialUnbind=!1,s.__base(null,i,n)
},findBlocksInside:function(t,e){return this._findBlocks("find",t,e)},findBlockInside:function(t,e){return this._findBlocks("find",t,e,!0)
},findBlocksOutside:function(t,e){return this._findBlocks("parents",t,e)},findBlockOutside:function(t,e){return this._findBlocks("closest",t,e)[0]||null
},findBlocksOn:function(t,e){return this._findBlocks("",t,e)},findBlockOn:function(t,e){return this._findBlocks("",t,e,!0)
},_findBlocks:function(t,n,o,r){if(!this.domElem)return[];o||(o=n,n=i);var a=n?"string"==typeof n?this.findElem(n):n:this.domElem,c="string"==typeof o,u=c?o:o.block||o.blockName,l="."+(c?M(u):M(u,o.modName,o.modVal))+(r?":first":""),h=a.filter(l);
if(t&&(h=h.add(a[t](l))),r)return h[0]?s(u,h.eq(0),!0):null;var d=[],p={};return e.each(h,function(t,i){var n=s(u,e(i),!0);
p[n._uniqId]||(p[n._uniqId]=!0,d.push(n))}),d},bindToDomElem:function(t,i,n){var s=this;return n?t.bind(s._buildEventName(i),function(t){return(t.data||(t.data={})).domElem=e(this),n.apply(s,arguments)
}):e.each(i,function(e,i){s.bindToDomElem(t,e,i)}),s},bindToDoc:function(t,e){return this._needSpecialUnbind=!0,this.bindToDomElem(d,t,e)
},bindToWin:function(t,e){var i,n,s=e;return"resize"===t&&(e=function(){var t=h.height(),e=h.width();
(i!==t||n!==e)&&(i=t,n=e,s.apply(this,arguments))}),this._needSpecialUnbind=!0,this.bindToDomElem(h,t,e)
},bindTo:function(t,i,n){return!i||e.isFunction(i)?(n=i,i=t,t=this.domElem):"string"==typeof t&&(t=this.elem(t)),this.bindToDomElem(t,i,n)
},unbindFromDomElem:function(t,e){return t.unbind(this._buildEventName(e)),this},unbindFromDoc:function(t){return this.unbindFromDomElem(d,t)
},unbindFromWin:function(t){return this.unbindFromDomElem(h,t)},unbindFrom:function(t,e){return e?"string"==typeof t&&(t=this.elem(t)):(e=t,t=this.domElem),this.unbindFromDomElem(t,e)
},_buildEventName:function(t){var e=this;return t.indexOf(" ")>1?t.split(" ").map(function(t){return e._buildOneEventName(t)
}).join(" "):e._buildOneEventName(t)},_buildOneEventName:function(t){var e=this,i=e._eventNameCache;if(t in i)return i[t];
var n="."+e._uniqId;if(t.indexOf(".")<0)return i[t]=t+n;var s=".bem_"+e.__self._name;return i[t]=t.split(".").map(function(t,e){return 0==e?t+s:s+"_"+t
}).join("")+n},trigger:function(t,e){return this.__base(t=this.buildEvent(t),e).domElem&&this._ctxTrigger(t,e),this
},_ctxTrigger:function(t,i){var n=this,s=_[n.__self._buildCtxEventName(t.type)],o={};s&&n.domElem.each(function(){for(var r=this,a=s.counter;r&&a;){var c=e.identify(r,!0);
if(c){if(o[c])break;var u=s.ctxs[c];u&&(e.each(u,function(e,s){s.fn.call(s.ctx||n,t,i)}),a--),o[c]=!0
}r=r.parentNode}})},setMod:function(t,i,n){if(t&&"undefined"!=typeof n&&t.length>1){var s=this;return t.each(function(){var o=e(this);
o.__bemElemName=t.__bemElemName,s.setMod(o,i,n)}),s}return this.__base(t,i,n)},_extractModVal:function(t,e,i){var n,s=(e||this.domElem)[0];
return s&&(n=s.className.match(this.__self._buildModValRE(t,i||e))),n?n[2]:""},_extractMods:function(t,e){var i={},n=!t.length,s=0;
return((e||this.domElem)[0].className.match(this.__self._buildModValRE("("+(n?y:t.join("|"))+")",e,"g"))||[]).forEach(function(t){var e=(t=t.trim()).lastIndexOf(k),n=t.substr(0,e-1).lastIndexOf(k);
i[t.substr(n+1,e-n-1)]=t.substr(e+1),++s}),s<t.length&&t.forEach(function(t){t in i||(i[t]="")}),i},_afterSetMod:function(t,i,n,s,o){var r=this.__self,a=r._buildModClassPrefix(t,o),c=r._buildModValRE(t,o),u=""===i;
(s||this.domElem).each(function(){var t=this.className;t.indexOf(a)>-1?this.className=t.replace(c,u?"":"$1"+a+i):u||e(this).addClass(a+i)
}),o&&this.dropElemCache(o,t,n).dropElemCache(o,t,i)},findElem:function(t,e,i,n){arguments.length%2?(n=i,i=e,e=t,t=this.domElem):"string"==typeof t&&(t=this.findElem(t));
var s=this.__self,o="."+e.split(" ").map(function(t){return M(s._name,t,i,n)}).join(",.");return r(t,o)
},_elem:function(t,e,i){var n,s=t+w(e,i);return(n=this._elemCache[s])||(n=this._elemCache[s]=this.findElem(t,e,i),n.__bemElemName=t),n
},elem:function(t,i,n){if(i&&"string"!=typeof i)return i.__bemElemName=t,i;if(t.indexOf(" ")<0)return this._elem(t,i,n);
var s=e([]),o=this;return t.split(" ").forEach(function(t){s=s.add(o._elem(t,i,n))}),s},dropElemCache:function(t,e,i){if(t){var n=this,s=w(e,i);
t.indexOf(" ")<0?delete n._elemCache[t+s]:t.split(" ").forEach(function(t){delete n._elemCache[t+s]})
}else this._elemCache={};return this},elemParams:function(t){var e;return"string"==typeof t?(e=t,t=this.elem(t)):e=this.__self._extractElemNameFrom(t),c(t[0])[M(this.__self.getName(),e)]||{}
},elemify:function(t,i){return(t=e(t)).__bemElemName=i,t},containsDomElem:function(t){var e=!1;return this.domElem.each(function(){return!(e=t.parents().andSelf().index(this)>-1)
}),e},buildSelector:function(t,e,i){return this.__self.buildSelector(t,e,i)},destruct:function(t){var i=this,n=i.__self;
i._isDestructing||(i._isDestructing=!0,i._needSpecialUnbind&&n.doc.add(n.win).unbind("."+i._uniqId),i.dropElemCache().domElem.each(function(t,i){var n=a(i);
e.each(n,function(t,e){var n=f[e.uniqId];n?n._isDestructing||l(n,i):delete p[e.uniqId]}),u(i)}),t||i.domElem.remove(),delete f[i.un()._uniqId],delete i.domElem,delete i._elemCache,i.__base())
}},{scope:null,doc:d,win:h,_processLive:function(t){var e=this,i=e._liveInitable;if("live"in e){var n="undefined"==typeof i;
if(n^t){i=e.live()!==!1;var s=e.getName(),o=e.live;e.live=function(){return this.getName()===s?i:o.apply(this,arguments)
}}}return i},init:function(t,i,s){(!t||e.isFunction(t))&&(s=i,i=t,t=d);var o=e.identify();return r(t,".i-bem").each(function(){n(e(this),o)
}),i&&this.afterCurrentEvent(function(){i.call(s||this,t)}),this._runAfterCurrentEventFns(),t},destruct:function(t,n,s){"boolean"!=typeof t&&(s=n,n=t,t=i),B.call(r(n,".i-bem",s)).each(function(t,i){var n=a(this);
e.each(n,function(t,e){if(e.uniqId){var n=f[e.uniqId];n?l(n,i):delete p[e.uniqId]}}),u(this)}),t||(s?n.empty():n.remove())
},update:function(t,e,i,n){this.destruct(t,!0),this.init(t.html(e),i,n)},replace:function(t,i){this.destruct(!0,t),this.init(e(i).replaceAll(t))
},append:function(t,i){this.init(e(i).appendTo(t))},prepend:function(t,i){this.init(e(i).prependTo(t))
},before:function(t,i){this.init(e(i).insertBefore(t))},after:function(t,i){this.init(e(i).insertAfter(t))
},_buildCtxEventName:function(t){return this._name+":"+t},_liveClassBind:function(t,i,n,s){var o=this;
if(i.indexOf(" ")>-1)i.split(" ").forEach(function(e){o._liveClassBind(t,e,n,s)});else{var r=g[i],a=e.identify(n);
r||(r=g[i]={},d.bind(i,o.changeThis(o._liveClassTrigger,o))),r=r[t]||(r[t]={uniqIds:{},fns:[]}),a in r.uniqIds||(r.fns.push({uniqId:a,fn:o._buildLiveEventFn(n,s)}),r.uniqIds[a]=r.fns.length-1)
}return this},_liveClassUnbind:function(t,i,n){var s=g[i];if(s)if(n){if(s=s[t]){var o=e.identify(n);if(o in s.uniqIds){var r=s.uniqIds[o],a=s.fns.length-1;
for(s.fns.splice(r,1);a>r;)s.uniqIds[s.fns[r++].uniqId]=r-1;delete s.uniqIds[o]}}}else delete s[t];return this
},_liveClassTrigger:function(t){var i=g[t.type];if(i){var n=t.target,s=[];for(var o in i)i.hasOwnProperty(o)&&s.push(o);
do for(var r=" "+n.className+" ",a=0;o=s[a++];)if(r.indexOf(" "+o+" ")>-1){for(var c,u=0,l=i[o].fns,h=!1;c=l[u++];)c.fn.call(e(n),t)===!1&&(h=!0);
if(h&&t.preventDefault(),h||t.isPropagationStopped())return;s.splice(--a,1)}while(s.length&&(n=n.parentNode))
}},_buildLiveEventFn:function(t,i){var n=this;return function(o){var r=[n._name,((o.data||(o.data={})).domElem=e(this)).closest(n.buildSelector()),!0],a=s.apply(null,i?r.concat([t,o]):r);
return a&&!i&&t?t.apply(a,arguments):void 0}},liveInitOnEvent:function(t,e,i){return this.liveBindTo(t,e,i,!0)
},liveBindTo:function(t,n,s,o){(!n||e.isFunction(n))&&(s=n,n=t,t=i),t&&"string"!=typeof t||(t={elem:t}),t.elemName&&(t.elem=t.elemName);
var r=this;return t.elem&&t.elem.indexOf(" ")>0?(t.elem.split(" ").forEach(function(e){r._liveClassBind(M(r._name,e,t.modName,t.modVal),n,s,o)
}),r):r._liveClassBind(M(r._name,t.elem,t.modName,t.modVal),n,s,o)},liveUnbindFrom:function(t,n,s){(!n||e.isFunction(n))&&(s=n,n=t,t=i);
var o=this;return t&&t.indexOf(" ")>1?(t.split(" ").forEach(function(t){o._liveClassUnbind(M(o._name,t),n,s)
}),o):o._liveClassUnbind(M(o._name,t),n,s)},_liveInitOnBlockEvent:function(t,e,i,n){var s=this._name;
return b[e].on(t,function(t){if(t.block.domElem){var e=arguments,o=t.block[n](s);i&&o.forEach(function(t){i.apply(t,e)
})}}),this},liveInitOnBlockEvent:function(t,e,i){return this._liveInitOnBlockEvent(t,e,i,"findBlocksOn")
},liveInitOnBlockInsideEvent:function(t,e,i){return this._liveInitOnBlockEvent(t,e,i,"findBlocksOutside")
},liveInitOnBlockInit:function(t,e){return this.liveInitOnBlockEvent("init",t,e)},liveInitOnBlockInsideInit:function(t,e){return this.liveInitOnBlockInsideEvent("init",t,e)
},on:function(t,e,i,n,s){return t.jquery?this._liveCtxBind(t,e,i,n,s):this.__base(t,e,i,n)},un:function(t,e,i,n){return t.jquery?this._liveCtxUnbind(t,e,i,n):this.__base(t,e,i)
},liveCtxBind:function(t,e,i,n,s){return this._liveCtxBind(t,e,i,n,s)},_liveCtxBind:function(t,n,s,o,r){var a=this;
if("string"==typeof n)if(e.isFunction(s)&&(r=o,o=s,s=i),n.indexOf(" ")>-1)n.split(" ").forEach(function(e){a._liveCtxBind(t,e,s,o,r)
});else{var c=a._buildCtxEventName(n),u=_[c]||(_[c]={counter:0,ctxs:{}});t.each(function(){var t=e.identify(this),i=u.ctxs[t];
i||(i=u.ctxs[t]={},++u.counter),i[e.identify(o)+(r?e.identify(r):"")]={fn:o,data:s,ctx:r}})}else e.each(n,function(e,i){a._liveCtxBind(t,e,i,s)
});return a},liveCtxUnbind:function(t,e,i,n){return this._liveCtxUnbind(t,e,i,n)},_liveCtxUnbind:function(t,i,n,s){var o=this,r=_[i=o._buildCtxEventName(i)];
return r&&(t.each(function(){var t,i=e.identify(this,!0);i&&(t=r.ctxs[i])&&(n&&delete t[e.identify(n)+(s?e.identify(s):"")],(!n||e.isEmptyObject(t))&&(r.counter--,delete r.ctxs[i]))
}),r.counter||delete _[i]),o},_extractElemNameFrom:function(t){if(t.__bemElemName)return t.__bemElemName;
var e=t[0].className.match(this._buildElemNameRE());return e?e[1]:i},extractParams:c,_buildModClassPrefix:function(t,e){return M(this._name)+(e?x+("string"==typeof e?e:this._extractElemNameFrom(e)):"")+k+t+k
},_buildModValRE:function(t,e,i){return new RegExp("(\\s|^)"+this._buildModClassPrefix(t,e)+"("+y+")(?=\\s|$)",i)
},_buildElemNameRE:function(){return new RegExp(this._name+x+"("+y+")(?:\\s|$)")},buildSelector:function(t,e,i){return"."+M(this._name,t,e,i)
},getBlockByUniqId:function(t){return f[t]},getWindowSize:function(){return{width:h.width(),height:h.height()}
}});e(function(){t.DOM.scope=e("body")})}(BEM,jQuery),_borschik("5iPwhAxg0OtVlbQ7xKwlc6ZyD9A")&&!function(){String.prototype.trim||(String.prototype.trim=function(){for(var t=this.replace(/^\s\s*/,""),e=/\s/,i=t.length;e.test(t.charAt(--i)););return t.slice(0,i+1)
})}(),_borschik("iLapcIwwMoWny1t82wYYA6h5Xws")&&BEM.decl("location",{onSetMod:{js:function(){this._history=BEM.blocks.history.getInstance(),this._syncState(),this._history.on("statechange",this.changeThis(this._onStateChange))
}},_onStateChange:function(){this._syncState(),this._state.referer!==BEM.blocks.uri.normalize(window.location.href)&&this._state.trigger!==!1&&(this.trigger("change",this._state),this._state.block&&this.channel(this._state.block).trigger("change"))
},_syncState:function(){var t=this._history.state,e=BEM.blocks.uri.parse(t.url);return this._state=$.extend({},t.data,{referer:this._state&&this._state.url,url:e.build(),hostname:e.host(),path:e.path(),params:e.queryParams}),this
},change:function(t){var e=BEM.blocks.uri.parse(t.url);if(t.url&&delete t.params,t.url=e.build(),t.params){var i=BEM.blocks.uri.parse(),n=t.forceParams?t.params:$.extend({},this._state.params,t.params);
Object.keys(n).forEach(function(t){i.addParam(t,n[t])}),t.url=i.build()}t.trigger===!1||(t.trigger=!0);
try{this._history.changeState(t.history===!1?"replace":"push",{data:t,url:t.url})}catch(s){window.location.assign(t.url)
}},getState:function(){return $.extend(!0,{},this._state)},getUri:function(){return BEM.blocks.uri.parse(this._state.url)
},getReferer:function(){return this._state.referer}},{_instance:null,getInstance:function(){return this._instance||(this._instance=BEM.create("location"))
}}),_borschik("1a0tHsk5Gwa7OO8a8MWLOFdRA2Q")&&BEM.decl("history",{onSetMod:{js:function(){if(!this.hasMod("provider"))throw new Error("Use BEM.blocks['history'].getInstance() instead of BEM.create('history')");
this._resetUrl().bindEvents().syncState()}},destruct:function(){this.unbindEvents(),this.__base.apply(this,arguments)
},pushState:function(t,e,i){return this.changeState("push",this.normalizeState(t,e,i))},replaceState:function(t,e,i){return this.changeState("replace",this.normalizeState(t,e,i))
},bindEvents:function(){return this},_resetUrl:function(){return this},_removeHashbang:function(t){var e=BEM.blocks.uri,i=e.parse(t);
if(""===i.anchor())return t;var n=e.parse(i.anchor().replace(/^!/,""));return i.anchor(""),i.query(n.query()),i.build()
},unbindEvents:function(){return this},syncState:function(){return this.state=this.normalizeState(void 0,document.title,window.location.href),this
},normalizeState:function(t,e,i){return{data:null===t?void 0:t,title:e,url:i}},changeState:function(t,e){try{window.location.assign(e.url)
}catch(i){}}},{hasNativeAPI:function(){return window.history&&"pushState"in window.history},_instance:null,getInstance:function(){return this._instance||(this._instance=BEM.create({block:"history",mods:{provider:this.hasNativeAPI()?"history-api":"hashchange"}}))
}}),_borschik("i0VIlgGdnXrH8n-xe-UQ90hodws")&&BEM.decl("uri",{onSetMod:{js:function(){var t=this;["protocol","host","port","path","anchor"].forEach(function(e){t[e]=function(t){return"undefined"!=typeof t?(this.uriParts[e]=t,this):this.uriParts[e]
}})}},encode:function(t){return encodeURIComponent(t)},decode:function(t){try{t=decodeURIComponent(t)
}catch(e){try{t=decodeURIComponent(this.convert(t))}catch(i){}}return t},convert:function(t){var e={"%D0":"%D0%A0","%C0":"%D0%90","%C1":"%D0%91","%C2":"%D0%92","%C3":"%D0%93","%C4":"%D0%94","%C5":"%D0%95","%A8":"%D0%81","%C6":"%D0%96","%C7":"%D0%97","%C8":"%D0%98","%C9":"%D0%99","%CA":"%D0%9A","%CB":"%D0%9B","%CC":"%D0%9C","%CD":"%D0%9D","%CE":"%D0%9E","%CF":"%D0%9F","%D1":"%D0%A1","%D2":"%D0%A2","%D3":"%D0%A3","%D4":"%D0%A4","%D5":"%D0%A5","%D6":"%D0%A6","%D7":"%D0%A7","%D8":"%D0%A8","%D9":"%D0%A9","%DA":"%D0%AA","%DB":"%D0%AB","%DC":"%D0%AC","%DD":"%D0%AD","%DE":"%D0%AE","%DF":"%D0%AF","%E0":"%D0%B0","%E1":"%D0%B1","%E2":"%D0%B2","%E3":"%D0%B3","%E4":"%D0%B4","%E5":"%D0%B5","%B8":"%D1%91","%E6":"%D0%B6","%E7":"%D0%B7","%E8":"%D0%B8","%E9":"%D0%B9","%EA":"%D0%BA","%EB":"%D0%BB","%EC":"%D0%BC","%ED":"%D0%BD","%EE":"%D0%BE","%EF":"%D0%BF","%F0":"%D1%80","%F1":"%D1%81","%F2":"%D1%82","%F3":"%D1%83","%F4":"%D1%84","%F5":"%D1%85","%F6":"%D1%86","%F7":"%D1%87","%F8":"%D1%88","%F9":"%D1%89","%FA":"%D1%8A","%FB":"%D1%8B","%FC":"%D1%8C","%FD":"%D1%8D","%FE":"%D1%8E","%FF":"%D1%8F"};
return t=t.replace(/%.{2}/g,function(t){return e[t]||t})},normalize:function(t){return(t||"").replace(/\+/g,"%20")
},parseUri:function(t){var e=/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,i=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],n=e.exec(t||""),s={};
return i.forEach(function(t,e){s[t]=n[e]||""}),s},parseQuery:function(t){var e,i,n,s,o,r={};if("string"!=typeof t||""===t)return r;
for(i=t.replace("?","").split("&"),e=0;e<i.length;e++)n=i[e].split("="),n=[n.shift(),void 0!==n[0]?n.join("="):null],s=this.decode(n[0]),o=n[1]||""===n[1]?this.decode(n[1]):null,r[s]?(o||""===o)&&r[s].push(o):r[s]=null===o?[]:[o];
return r},query:function(t){var e="";"undefined"!=typeof t&&(this.queryParams=this.parseQuery(t));var i=this.queryParams,n=Object.keys(i),s=this;
return n.forEach(function(t,n){n>0&&(e+="&"),"object"!=typeof i[t]||i[t].length?i[t].forEach(function(i,n){n>0&&(e+="&"),e+=s.encode(t)+"="+s.encode(i)
}):e+=t}),e.length>0?"?"+e:e},getParam:function(t){return this.queryParams[t]},deleteParam:function(t,e){var i=[];
return"undefined"!=typeof e&&(this.queryParams[t].forEach(function(t){t!==e&&i.push(t)}),this.queryParams[t]=i),("undefined"==typeof e||0===i.length)&&delete this.queryParams[t],this
},addParam:function(t,e){return this.queryParams[t]=(this.queryParams[t]||[]).concat(e),this},replaceParam:function(t,e,i){return this.deleteParam(t,i).addParam(t,e)
},scheme:function(){var t="";return this.protocol()?(t+=this.protocol(),this.protocol().indexOf(":")!==this.protocol().length-1&&(t+=":"),t+="//"):this.host()&&(t+="//"),t
},origin:function(){var t=this.scheme();return this.host()&&(t+=this.host(),this.port()&&(t+=":"+this.port())),t
},getRoot:function(){var t=this.origin();return this.path()&&(t+=this.path().replace(/\/[^\/]*$/,"")),t
},pathParts:function(){return this.path().split("/")},toString:function(){var t=this.origin();return this.path()?t+=0!==this.path().indexOf("/")&&"/"!==t[t.length-1]?"/"+this.path():this.path():this.host()&&(this.query().toString()||this.anchor())&&(t+="/"),this.query().toString()&&(0!==this.query().toString().indexOf("?")&&(t+="?"),t+=this.query().toString()),this.anchor()&&(0!==this.anchor().indexOf("#")&&(t+="#"),t+=this.anchor()),t
},build:function(){var t="";return t+=this.protocol()?this.protocol():window.location.protocol,t+=t.indexOf(":")!==t.length-1?"://":"//",t+=this.host()?this.host():window.location.hostname,this.port()?t+=":"+this.port():!this.host()&&window.location.hostname&&(t+=":"+window.location.port),t+=this.path()?this.path():this.host()?"/":window.location.pathname,this.query()&&(0!==this.query().indexOf("?")&&(t+="?"),t+=this.query()),this.anchor()&&(0!==this.anchor().indexOf("#")&&(t+="#"),t+=this.anchor()),t
}},{parse:function(t){var e=BEM.create({block:"uri"});return e.uriParts=e.parseUri(e.normalize(t)),e.queryParams=e.parseQuery(e.uriParts.query),e
},normalize:function(t){return this.parse(t).toString()}}),_borschik("IK_XO0vfhGpLtw4Srr7I07N2hh0")&&BEM.decl({block:"history",modName:"provider",modVal:"history-api"},{_onPopState:function(t){var e=t.originalEvent.state;
null!==e&&(this.state=this.normalizeState(e,document.title,window.location.href),this.state.data&&delete this.state.data.trigger,this.trigger("statechange",this.state))
},bindEvents:function(){return this.__base.apply(this,arguments),BEM.DOM.win.on("popstate",this.changeThis(this._onPopState)),this
},unbindEvents:function(){return this.__base.apply(this,arguments),BEM.DOM.win.off("popstate",this._onPopState),this
},_resetUrl:function(){var t=BEM.blocks.uri.parse(window.location.href);return t.anchor()&&window.history.replaceState(null,document.title,this._removeHashbang(window.location.href)),this
},syncState:function(){return null===window.history.state&&window.history.replaceState(void 0,document.title,window.location.href),(null===this.state||void 0===this.state)&&(this.state=this.normalizeState(void 0,document.title,window.location.href)),this
},changeState:function(t,e){return window.history[t+"State"](e.data,e.title||document.title,e.url),this.state=e,this.trigger("statechange",{state:e,nativeApi:!0}),this
}}),_borschik("EBtlUlQXmrGKOpyMC2IKXjXXwc0")&&BEM.decl({block:"history",modName:"provider",modVal:"hashchange"},{_onHashChange:function(){this.state=this.normalizeState(void 0,document.title,this._removeHashbang(window.location.href)),this.trigger("statechange",{state:this.state,nativeApi:!1})
},bindEvents:function(){return this.__base.apply(this,arguments),BEM.DOM.win.on("hashchange",this.changeThis(this._onHashChange)),this
},unbindEvents:function(){return this.__base.apply(this,arguments),BEM.DOM.win.off("hashchange",this._onHashChange),this
},syncState:function(){return this.state=this.normalizeState(void 0,document.title,this._removeHashbang(window.location.href)),this
},_generateHashbang:function(t){var e=BEM.blocks.uri.parse(t),i=e.pathParts();return"!/"+i[i.length-1]+e.query()
},_resetUrl:function(){return this},changeState:function(t,e){var i=BEM.blocks.uri.parse(e.url);if(i.host()&&i.host()!==window.location.hostname||i.port()&&i.port()!==window.location.port||i.protocol()&&i.protocol()!==window.location.protocol.replace(":",""))throw new Error("SECURITY_ERR: DOM Exception 18");
this.state=e,window.location.hash=this._generateHashbang(e.url)}}),_borschik("6E64pL8uB3fXwwdi5gTPpMwtk6M")&&!function(t){var e=1,i=!1;
if("deviceXDPI"in screen&&"logicalXDPI"in screen?e=screen.deviceXDPI/screen.logicalXDPI:"devicePixelRatio"in t&&(e=t.devicePixelRatio),"function"==typeof t.matchMedia){var n="only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min-resolution: 124dpi)";
i=t.matchMedia(n).matches}else i=e>=1.3;BEM.DOM.decl("i-ua",{onSetMod:{js:function(){var t=this,e=t.__self;
e.hiDpi&&t.setMod("hi-dpi","yes")}}},{dpr:e,hiDpi:i})}(window),_borschik("y7kwd8srwWMa7KrW1CgMUftWyAg")&&!function(){var t,e,i;
BEM.decl("i-ua",{},{canUseAjax:function(){return"undefined"==typeof t&&(t=(window.history&&"pushState"in window.history||"onhashchange"in window)&&this.isCookieEnabled()),t
},isCookieEnabled:function(){if("undefined"==typeof e){var t=Math.random().toString(16).slice(2);document.cookie=t+"=1",e=document.cookie.indexOf(t)>=0,document.cookie=t+"=;expires="+new Date(0).toGMTString()
}return e},canUseDataURIAsync:function(t){if("undefined"==typeof i){var e=new Image;e.onerror=function(){t(i=!1)
},e.onload=function(){1==e.width&&1==e.height?t(i=!0):t(i=!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
}else this.afterCurrentEvent(function(){t(i)})}})}(),_borschik("7NY8E_X8L7PQ0KJooSBACcgRNq0")&&BEM.decl("i-ua",{},{canUseAjax:function(){return this.__base.apply(this,arguments)&&BEM.blocks["i-global"].param("pref-ajax")
}}),_borschik("oBxXkftuvFSxIodWbtoM8GzKW3g")&&!function(t){t||(t=window.Lego={}),t.messages=t.messages||{},t.message=function(e,i){return"ru"==t.params.locale?i:t.messages[e]||i
}}(window.Lego),_borschik("rPoVNjfkSbG7cNaAbXJQqtdyBQc")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){this.del(this.__self._params=$.extend({},this.params),"uniqId","name");
var t=this.__self._params;t["passport-msg"]||(t["passport-msg"]=t.id),void 0===t["show-counters"]&&(t["show-counters"]=Math.round(100*Math.random())<=t["show-counters-percent"]),t.locale=t.lang,$(function(){t.oframebust&&Lego.oframebust(t.oframebust)
})}},getDefaultParams:function(){return{id:"",login:Lego.isSessionValid()?$.cookie("yandex_login")||"":"",yandexuid:$.cookie("yandexuid"),lang:"ru",tld:"ru",retpath:encodeURI($.decodeURI(location.href)),"passport-host":"https://passport.yandex.ru","pass-host":"https://pass.yandex.ru","social-host":"https://social.yandex.ru","lego-path":"/lego","show-counters-percent":100}
}},{param:function(t){return(this._params||{})[t]}}),_borschik("65Wul-XyZuXKyVEo_QYPxz7pVt0")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){this.params.framebuster&&BEM.create({block:"i-framebuster",mods:{type:"yandex"}},{whitelist:this.params.framebuster}),window.history&&"pushState"in window.history&&window.location.href.indexOf("reload=")>-1&&BEM.blocks.location.getInstance().change({url:BEM.blocks.uri.parse(window.location.href).deleteParam("reload").toString(),trigger:!1,history:!1}),this.__base.apply(this,arguments),BEM.blocks.location.getInstance().on("change",function(t,e){this.__self.setParams({retpath:e.url})
},this)}}},{setParams:function(t){$.extend(this._params,t)}}),_borschik("CXHFnEIepnLwqbAUMdZ55F8crUU")&&BEM.decl("i-framebuster",{onSetMod:{js:function(){if(window.top.location!==window.location){var t=document.referrer.match(/^https?:\/\/([^:\/\s]+)\/?.*/);
t&&!this.isInWhitelist(t[1])&&(window.top.location=window.location)}}},isInWhitelist:function(t){for(var e=this.defaultWhitelist().concat(this.params.whitelist||[]),i=0;i<e.length;++i){var n=e[i];
if("string"!=typeof n){if(n.test(t))return!0}else if(n===t||-1!=t.indexOf(n,t.length-n.length))return!0
}},defaultWhitelist:function(){return[]}}),_borschik("piMndFoeA4XTJUPCoHFb_jDyYxg")&&BEM.decl({name:"i-framebuster",modName:"type",modVal:"yandex"},{defaultWhitelist:function(){return[/^(\w*\.)*yandex\.(ru|kz|by|ua|com|com\.tr|net)\.?$/,/^(\w*\.)*yandex-team\.(ru|kz|by|ua|com|com\.tr)\.?$/]
}}),_borschik("_8AsYukRI4qmvezy2kvX9g_9Ucc")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.__self.rstat=BEM.create({block:"b-statcounter",elem:"statface",elemMods:{type:"rstat"}});
var t={path:"click",keys:["path"]};if(t.customKeys=["vars"],this.__self.pageLoadCounter=BEM.create("i-statface",t),window.history&&window.history.pushState){var e=BEM.blocks.location.getInstance();
e.getState().params.lr||e.change({params:{lr:this.params.lr},trigger:!1,history:!1})}this.__self.sendCounters(this.__self.viewPortParamsCount())
}}},{sendCounters:function(t){var e={path:"471.143.1007"};t&&$.extend(e,{vars:"-visible-web-cnt="+t.serpTitlesCount+",-visible-direct-cnt="+t.serpAdvTitlesCount+",-visible-banner="+t.bannerInArea+",-viewport-size="+t.winWidth+";"+t.winHeight+",-serp=3"}),this.param("isCounterHeights")&&(e.vars=(e.vars?e.vars+",":"")+"-res-heights="+this.getBlocksHeights()),this.rstat.send(this.param("reqid")),(this.param("isPageLoadCounter")||this.param("isCounterHeights"))&&this.pageLoadCounter.set(e).sendCounter()
},getBlocksHeights:function(){var t={};return $("*[data-counter-block-id]").each(function(){var e=$(this).data("counterBlockId");
t[e]=(t[e]||0)+$(this).height()}),$.map(t,function(t,e){return e+":"+t}).join(";")},viewPortParamsCount:function(){var t=BEM.DOM.win,e=t.width(),i=t.scrollTop(),n=t.height(),s={t:i+$(".header").outerHeight(),r:e,b:i+n,l:0},o=function(t,e){if(t&&t.length){var i=t.offset(),n=i.top;
return e&&(n+=t.height()),t.length&&i.left<s.r&&n<s.b&&n>s.t}},r=function(t){if(t.length){for(var e=0;e<t.length;e++){var i=$(t[e]),n=o(i.find(".serp-item__title"),!0);
if(n||l){if(!n&&l)break;l=!0,i.hasClass("serp-adv__item")?u++:c++}}l=!1}},a=!1,c=0,u=0,l=!1;return r($(".content__left").find(".serp-item")),o($(".serp-adv__banner"))&&(a=!0),{serpTitlesCount:c,serpAdvTitlesCount:u,bannerInArea:a,winWidth:e,winHeight:n}
}}),_borschik("xrIj6Mt0kN3Dg7y9o8dyFtosF9c")&&!function(){var t=0,e=72043,i=0;$(document).one("mousemove",function(){i=1
}),BEM.decl({block:"b-statcounter",elem:"statface",elemMods:{type:"rstat"}},{send:function(n,s){n&&setTimeout(function(){Lego.cp(t,e,"M"+i+"/reqid="+n)
},s||1e3)}})}(),_borschik("0DBwCeZTy79OEw8Vi3tBQrqlxZ4")&&!function(){var t={};BEM.decl("i-request",{onSetMod:{js:function(){this._preventCache=!1
}},get:function(t,e,i,n){$.isFunction(i)||(n=i,i=this.params.onError),this._get(t,e,i,$.extend({},this.params,n))
},_get:function(e,i,n,s){var o=this._buildCacheKey(e,s),r=t[s.cacheGroup];s.cache&&r&&o in r.data?this.afterCurrentEvent(function(){i.call(this.params.callbackCtx,r.data[o])
},this):this._do(e,i,n,s)},_do:function(){},_onSuccess:function(t,e,i,n){n.cache&&!this._preventCache&&this.putToCache(n,t,i),this._preventCache=!1
},_buildCacheKey:function(t){return"string"==typeof t?t:$.param(t)},putToCache:function(e,i,n){var s=t[e.cacheGroup]||(t[e.cacheGroup]={keys:[],data:{}});
s.keys.length>=e.cacheSize&&delete s.data[s.keys.shift()];var o=this._buildCacheKey(i,e);s.data[o]=n,s.keys.push(o)
},dropCache:function(){delete t[this.params.cacheGroup]},getDefaultParams:function(){return{cache:!1,cacheGroup:"default",cacheSize:100,callbackCtx:this}
}},{_cache:t})}(),_borschik("bj-QU2oLq0vHa8Mjy_HL2GySYPs")&&!function(t){t.decl({block:"i-request_type_ajax",baseBlock:"i-request"},{onSetMod:{js:function(){this.__base(),this._requestNumber=this._number=this._preventNumber=this._retryCount=0
}},_get:function(t,e,i,n){this._number++,this._requestNumber++,this._retryCount=n.retryCount,this.__base.apply(this,arguments)
},_do:function(t,e,i,n){var s=this;if(s._number>s._preventNumber){var o=arguments,r={data:n.data?$.extend({},n.data,t):t},a=s._wrapCallback(function(i,o,r){s._onSuccess(s._buildCacheKey(t,n),t,i[0],n),s._allowCallback(o,r)&&e.apply(n.callbackCtx,i)
}),c=s._wrapCallback(function(t,e,r){s._allowCallback(e,r)&&(s._retryCount-->0?setTimeout(function(){s._do.apply(s,o)
},n.retryInterval):i&&i.apply(n.callbackCtx,t))});$.each(["url","dataType","timeout","type","jsonp","jsonpCallback"].concat(n.paramsToSettings||[]),function(t,e){r[e]=n[e]
}),$.ajax(r).done(a).fail(c)}},_wrapCallback:function(t){var e=this._requestNumber,i=this._number;return function(n){null!==n&&t(arguments,e,i)
}},_allowCallback:function(t,e){return e>this._preventNumber&&this._requestNumber==t},_buildCacheKey:function(t,e){return"string"==typeof t?t:this.__base(t)+e.url
},abort:function(){this._preventNumber=++this._number},preventCallbacks:function(){this.abort()},getDefaultParams:function(){return $.extend(this.__base(),{cache:!0,type:"GET",dataType:"jsonp",timeout:2e4,retryCount:0,retryInterval:2e3})
}})}(BEM),_borschik("Sn_oz1jE8m6fmrgr3lvo4SGsb1w")&&BEM.decl({block:"i-request_type_ajax"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.cacheIrrelevantParams=["rf","skip-banner","lr","redircnt","prefetch","reqid"];
var t=BEM.blocks["i-global"].param("serpRequestExtraParams");for(var e in t)t.hasOwnProperty(e)&&this.cacheIrrelevantParams.push(e)
}},_get:function(t,e,i,n){if(n.data&&(n.data.reqid=BEM.blocks["i-global"].param("reqid")),this.params.cacheTimeout){var s,o=this._buildCacheKey(t,n),r=this.__self._cache,a=r[n.cacheGroup];
n.cache&&a&&o in a.data&&(s=a.timestamps[o],(new Date).getTime()-s>this.params.cacheTimeout&&(delete a.timestamps[o],delete a.data[o],a.keys.splice(a.keys.indexOf(o),1)))
}this.__base.apply(this,arguments)},_onSuccess:function(t,e,i,n){this.__base.apply(this,arguments),n.hubName&&n.cache&&!this._preventCache&&n.hubCallback(n.hubName,t)
},_buildCacheKey:function(t,e){if("string"==typeof t)return t;for(var i=$.extend(!0,{},t),n=this.cacheIrrelevantParams,s=0,o=n.length;o>s;s++)n[s]in i&&delete i[n[s]];
return $.param(i)+e.url},putToCache:function(t,e){var i=this._buildCacheKey(e,t),n=this.__self._cache,s=n[t.cacheGroup]||(n[t.cacheGroup]={keys:[],data:{},timestamps:{}});
this.__base.apply(this,arguments),s.keys.length>=t.cacheSize&&delete s.timestamps[s.keys[0]],s.timestamps[i]=(new Date).getTime()
}}),_borschik("cx78Xug3m9kpJD5vUgffPTOxu3M")&&!function(){BEM.decl("i-mcounter",{},{entropy:0,cellSize:100,previous:"",current:"",moves:{total:0,cells:{}},init:function(){this.bind()
},bind:function(){var t=this;$(window).unbind("mousemove.i-mcounter").bind("mousemove.i-mcounter",function(e){t.track(e.clientX,e.clientY)
})},track:function(t,e){this.current=this.getKey(t,e),this.shouldTrack()&&(this.updateCellCounter(),this.moves.total++,this.previous=this.current)
},shouldTrack:function(){return this.current!==this.previous||!this.previous},updateCellCounter:function(){var t=this.moves.cells;
this.current in t||(t[this.current]=0),t[this.current]++},getKey:function(t,e){return Math.floor(t/100)+"."+Math.floor(e/100)
},getCellPosition:function(t){return Math.floor(t/this.cellSize)},get:function(){return this.calculate(),this.entropy
},calculate:function(){var t=0,e=this.moves.cells,i=this;$.each(e,function(e,n){var s=i.moves.total,o=n/s;
t-=o*Math.log(o)/Math.log(2)}),this.entropy=t}}).init()}(),_borschik("k1SW_T7uym9a92egWrrspcHh5yA")&&$(function(){BEM.afterCurrentEvent(function(){BEM.DOM.init()
})}),_borschik("G9yqiyl0uxWHC6lZQToKDd_Zzt8")&&!function(){var t={9:"tab",13:"enter",32:"space",33:"page up",34:"page down",35:"end",36:"home",37:"left arrow",38:"up arrow",39:"right arrow",40:"down arrow",46:"delete"},e={27:"escape"};
BEM.DOM.decl({block:"i-ua",modName:"interaction",modVal:"yes"},{onSetMod:{js:{inited:function(){this.bindTo("mousedown",this._onPointer).bindTo("keydown",this._onKeyboard)
}}},_onPointer:function(){this.interaction="pointer",this.domElem.attr("data-interaction","pointer"),this.unbindFrom("mousedown")
},_onKeyboard:function(i){var n=i.keyCode;return e[n]?(this._onPointer(),void 0):(t[n]&&"keyboard"!==this.interaction&&(this.domElem.attr("data-interaction","keyboard"),this.interaction="keyboard",this.bindTo("mousedown",this._onPointer)),void 0)
}})}(),_borschik("mPDd1HTyxeKNUFR0zVW0F8SWQZA")&&BEM.DOM.decl("b-page",{onSetMod:{js:function(){this.bindToWin("focus focusin",this._updateWprid)
}},_updateWprid:function(){var t=BEM.blocks["i-global"].param("reqid"),e=BEM.blocks["i-cookie"].get();
t!==e.ys("wprid")&&e.ys("wprid",t)}}),_borschik("ShgATzASB-ROJtabxwGoPQHpFf4")&&!function(t){t=t||{},t.oframebustMatchDomain=function(t,e){t="[object Array]"===Object.prototype.toString.call(t)?t:function(){var e=[];
for(var i in t)t.hasOwnProperty(i)&&e.push(i);return e}();for(var i=0,n=t.length;n>i;i++){var s=t[i];
if("string"==typeof s){if(/(\?|\*)/.test(s)){var o=s.replace(/\./g,"\\.").replace(/\*/g,".*").replace(/\?/g,".{1}");
if(new RegExp("^"+o+"$").test(e))return!0}else if(e==s)return!0}else try{if(s.test(e))return!0}catch(r){}}}
}(window.Lego),_borschik("-TdS4jafy63XFqw-rGn6ubNJuqg")&&!function(t){t=t||{},t.oframebust=function(e){if(window.top.location!=window.location){var i=document.referrer.match(/^https?:\/\/([^:\/\s]+)\/?.*/);
if(!i)return;!t.oframebustMatchDomain(e,i[1])&&(window.top.location=window.location)}}}(window.Lego),_borschik("IBsg3T_ytgR-W1a-nkVbhmJXUQY"),_borschik("Rf2nfzsIJmN0pdjyK4dDjWFS3Bw")&&BEM.DOM.decl("i-services",{onSetMod:{js:function(){this._searchInput=this.findBlockInside("search").findBlockInside("input")
}},getServicePath:function(t,e){var i=this.params[t];return i?i.search+encodeURIComponent(e||this._searchInput.val())+(i.params||""):""
},getServiceUrl:function(t){return(this.params[t]||{}).baseUrl}}),_borschik("Czu3BwTZ7aRScOPOGV2qvOHX7jk")&&BEM.DOM.decl("link",{getDefaultParams:function(){return{origTabindex:"0"}
},onSetMod:{disabled:function(t,e){var i="yes"===e;this.domElem.attr({"aria-disabled":i,tabindex:i?-1:this.params.origTabindex})
}}}),_borschik("rnS9r8o1HOJCZfTK4pkXRiP9av4")&&!function(){var t;BEM.decl("i-cookie",{defaultExpire:new Date+604800,getDefaultParams:function(){return{yp:{expires:new Date("Tue Jan 1 00:00:00 2038"),domain:".yandex."+BEM.blocks["i-global"].param("tld"),path:"/"},ys:{domain:".yandex."+BEM.blocks["i-global"].param("tld"),path:"/"}}
},ypRead:function(){for(var t,e=$.cookie("yp"),i=e?e.split("#"):[],n=new Date/1e3,s={},o=0,r=i.length;r>o;o++)t=i[o].split("."),t[0]>n&&(s[t[1]]={value:t[2],expires:t[0]});
return s},ypWrite:function(t){for(var e=[],i=0,n=Object.keys(t),s=n.length;s>i;i++)e.push([t[n[i]].expires,n[i],t[n[i]].value].join("."));
$.cookie("yp",e.join("#"),this.params.yp)},yp:function(t,e,i){var n=this.ypRead(),s=n[t];return 1===arguments.length?s&&s.value:(s||(s={}),s.value=e,s.expires=i||s.expires||this.defaultExpires,n[t]=s,this.ypWrite(n))
},ysRead:function(){var t,e=$.cookie("ys"),i=e?e.split("#"):[],n={};return i.forEach(function(e){t=e.split("."),n[t[0]]=decodeURIComponent(t[1])
}),n},ysWrite:function(t){for(var e=[],i=0,n=Object.keys(t),s=n.length;s>i;i++)e.push([n[i],t[n[i]]].join("."));
$.cookie("ys",e.join("#"),this.params.ys)},ys:function(t,e){var i=this.ysRead();return e?(i[t]=e,this.ysWrite(i)):i[t]
}},{get:function(){return t||(t=BEM.create("i-cookie"))}})}(),_borschik("YPAwY4tkhSLA451j11A1Z9PQZow")&&BEM.DOM.decl("metrika",{onSetMod:{js:function(){var t=this.params.counter,e=BEM.blocks.location.getInstance();
e.on("change",function(e,i){try{window["yaCounter"+t].hit(i.url,document.title)}catch(n){}},this);var i=this.findBlockOutside("b-page").findBlockInside("more");
i&&i.on("nextPage",function(){try{window["yaCounter"+t].hit(e.getUri().replaceQueryParam("rnd",Math.round(1e6*Math.random())).toString(),document.title)
}catch(i){}})}}}),_borschik("zjVCmSEQK0cH7IKsJi8cpNrLW2Y")&&(BEM.DOM.decl({name:"i-flashcookie",modName:"type",modVal:"iframe"},{onSetMod:{js:function(){Lego.block["i-flashcookie"].call(this.domElem,this.params)
}}}),function(){var t=Lego.block["i-flashcookie"],e=function(t){t||(t={});var e=this,i=t.host||"kiks.yandex",n=arguments.callee.load=function(){e.replaceWith($('<iframe src="//'+i+location.host.match(/.*([.].*?):?\d{0,}$/)[1]+'/su/" class="'+e.attr("class")+'"/>'))
};e.hasClass("i-flashcookie_autoload_no")||n()};Lego.block["i-flashcookie"]=function(i){var n=this.hasClass("i-flashcookie_type_iframe")?e:t;
n&&n.call(this,i)}}()),_borschik("0alFzS0vCukFS7C_3wer7fwhO2M")&&(BEM.DOM.decl({name:"i-flashcookie",modName:"type",modVal:"inline"},{onSetMod:{js:function(){Lego.block["i-flashcookie"].call(this.domElem,this.params)
}}}),function(){var t=Lego.block["i-flashcookie"],e=function(t){function e(t,e){return'<param name="'+t+'" value="'+e+'" />'
}function i(t,e){return" "+t+'="'+e+'"'}function n(t,e,i){var n=t.match(e);return n&&n[i+1?i:1]||""}function s(){return n(d.cookie,new RegExp("fuid"+c+"=([^;]+)"))
}function o(){var t=d.domain;return t&&n(t,/[^.]+\.[^.]{2,3}(\.tr)?$/,0)}t||(t={});var r,a,c,u,l=t.host||"kiks.yandex",h=window,d=document,p=navigator,f=p.userAgent,m=p.mimeTypes,_=9,g=f&&/gecko/i.test(f),b=f&&/MSIE/.test(f)&&/Win/.test(f),v=g?"embed":"object",y="//"+l.split(".").slice(0,-1).join(".")+".%s/system/fc%d.html",k="//"+l+".ru/system/%s%d.swf",x="//"+l+".ru/fu",w="//"+l+".ru/fu",M="application/x-shockwave-flash",E="style",B="position:absolute;margin-left:-999em;top:0;",S=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',C="allowScriptAccess",D="always",P="height",I="wmode",T="window",O="width",j="bgcolor",A="#FFFFFF",$="ya_fc",N=i(E,B)+i(O,1)+i(P,1)+i("id",$),z=!1;
h.ya_fc_external=function(t,n,l,h){r=t,a=n,c=l,u=h||"fc";var d,p=m&&m[M]?m[M].enabledPlugin:0,f=z,y=0,E=s()?k.replace("%d",a).replace("%s",u):x.replace("%s",o());
if(p)y=p.description.split("Shockwave Flash ")[1],f=parseInt(y,10)>=_;else if(b){f=z;try{f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_)
}catch(P){}}return d=f?g?'<div style="'+B+'"><'+v+N+i("src",E)+i(I,T)+i(j,A)+i(C,D)+i("type",M)+"/></div>":(b?"<"+v+S+N+">"+e("movie",E):"<"+v+N+i("type",M)+i("data",E)+">")+e(I,T)+e(j,A)+e(C,D)+"</"+v+">":'<img src="'+w.replace("%s",o())+'" style="'+B+'" />'
},h.ya_fc_requestData=function(){var t=d.getElementById("ya_fc");try{t.setLocation(o(),s())}catch(e){}},h.ya_fc_setCookie=function(t){var e=new Date;
e.setTime(e.getTime()+31536e7),d.cookie="fuid"+c+"="+t+";expires="+e.toGMTString()+";path=/;domain="+o()
},h.ya_fc_getIFrame=function(t){var e=y.replace("%s",t).replace("%d",r),i=d.createElement("iframe"),n=d.getElementsByTagName("body")[0],s="40px;";
i.src=e,i.style.cssText=O+s+P+s+"border:0;"+B,i.frameBorder=0,n&&n.insertBefore(i,n.firstChild)};var F=this,R=arguments.callee.load=function(t){var e,i;
t.mode?(e="00",i="kfc"):e="07",F.replaceWith(h.ya_fc_external("07_2",e,"01",i))};F.hasClass("i-flashcookie_autoload_no")||R(t)
};Lego.block["i-flashcookie"]=function(i){var n=this.hasClass("i-flashcookie_type_inline")?e:t;n&&n.call(this,i)
}}()),_borschik("-X2f-4NCE97fyQyR29pNg7C9cp0")&&!function(t){var e=t.event.special.leftclick={setup:function(){t(this).bind("click",e.handler)
},teardown:function(){t(this).unbind("click",e.handler)},handler:function(e){e.button||(e.type="leftclick",t.event.handle.apply(this,arguments),e.type="click")
}}}(jQuery),_borschik("JmxYeUpKdEDOLLo8gToWnm3jNo8")&&!function(t){var e,i=t.browser,n=i.opera&&i.version<13,s=i.opera&&i.version<12.1?"keypress":"keydown",o=Object.prototype.hasOwnProperty,r=BEM.DOM,a=i.msie&&i.version>=9&&i.version<10,c=function(t){try{return t.activeElement
}catch(e){}};BEM.DOM.decl("popup",{getDefaultParams:function(){var t={left:15,right:15,top:15,bottom:15};
return{directions:[{to:"bottom",axis:"center",tail:{axis:"center"}},{to:"top",axis:"center",tail:{axis:"center"}},{to:"right",axis:"middle",tail:{axis:"middle"}},{to:"left",axis:"middle",tail:{axis:"middle"}}],tail:{width:24.04,height:12.02,offset:t},duration:150}
},onSetMod:{js:function(){this._cache={},this._viewport=r.win,this._scope=r.scope,this._channel=BEM.channel("popups"),this._inContainer=!1,this._isParentFixed=!1,this._owner=null,this._userPosition=null,this._parent=null,this._childs=[],this._isShown=!1,this._isHiding=!1,this._positions={},this._currPos={},this._visibilityFactor=null,this._direction=!1,this._directions={};
var t=this.getDefaultParams(),e=this.params,i=this._repackDirParams(t.directions),n=e.generateDirections?this._generateDirections:e.directions,s=this._repackDirParams(n);
e.tail&&(this.params.tail=this._mergeParams(t.tail,e.tail)),this._order=s.keys.map(function(t){var e=s.directions[t],n=i.directions[t];
return n||(n=i.directions[e.to]),this._directions[t]=this._mergeParams(n,e,{tail:this._tailParamsHook}),t
},this)},visibility:{visible:function(){this._onShown()},"":function(){this._onHidden()}}},show:function(e){var i;
if(e instanceof BEM)i=e.domElem.eq(0);else if(e instanceof t)i=e;else if(!e)return;if(i){this._owner&&i[0]!==this._owner[0]&&this.delMod("visibility"),this._owner=i;
var n=this._findParent(i);n&&this.setParent(n)}else this._userPosition=e;return this.setMod("visibility","outside").repaint()
},hide:function(){if(this._isHiding)return this;if(this._isShown&&(this._isHiding=!0,this._childs.forEach(function(t){t.hide()
}),this.hasMod("animate","yes")&&!this.hasMod("fade-out","no"))){var t=this;return this.beforeHide(function(){t.domElem&&t.delMod("visibility")
}),this}return this.delMod("visibility")},toggle:function(t){return this._isShown&&!this._isHiding?this.hide():this.show(t||this._owner)
},repaint:function(){this._moveToContainer();var t=this._pickDirection();return this.setMod("to",t.to)._show(this._positions[t.key],this._tailPos&&this._tailPos[t.key]),this
},repaintShadowIfNeeded:function(){return a&&this._repaintShadow(),this},getCurrPos:function(){return this._currPos
},getCurrDirection:function(){return this._direction},setContent:function(t){return r.update(this.elem("content"),t),this._resetDefault(),this._isShown&&this.repaint(),this
},isShown:function(){return this._isShown},setParent:function(t){return this._parent=t,this._isParentFixed=t.hasMod("position","fixed"),t.addChild(this),this
},addChild:function(t){for(var e=this._childs,i=e.length,n=0;i>n;n++)if(e[n]._uniqId===t._uniqId)return;
t.on("hide",function(){this.removeChild(t)},this),e.push(t)},removeChild:function(t){for(var e=this._childs,i=e.length,n=0;i>n;n++)if(e[n]._uniqId===t._uniqId)return e.splice(n,1),void 0
},setSize:function(t){return t&&(this._resetDefault(),this.domElem.css(t),this._isShown&&!this._isHiding&&this.repaint()),this
},_show:function(t,e){return this._currPos=t,e&&this.elem("tail").removeAttr("style").css(e),this.domElem.css(t),(!this._isShown||this._isHiding)&&this.hasMod("animate","yes")&&!this.hasMod("fade-in","no")&&this.afterShow(),this._isHiding=!1,this.setMod("visibility","visible"),this
},_onShown:function(){this.bindToDoc(s,function(t){27===t.which&&0===this._childs.length&&this.hide()
}),this._bindFocusEvents(),this._attachUnder(),this._isShown=!0,this.hasMod("autoclosable","yes")&&this.afterCurrentEvent(function(){this._enableAutoclosable()
}),this.hasMod("adaptive","yes")&&this._enableAdaptive(),this._channel.on("hide",this.hide,this),this.trigger("show")
},_onHidden:function(){this._unbindFocusEvents(),this.unbindFromDoc(s),this._detachUnder(),this.hasMod("autoclosable","yes")&&this._disableAutoclosable(),this.hasMod("adaptive","yes")&&this._disableAdaptive(),this._cache={},this._isShown=!1,this._isHiding=!1,this._channel.un("hide"),this._returnFocus(),this.trigger("hide")
},_bindFocusEvents:function(){this._lastFocused=t(c(document)||this._scope);var e=this.__self._getFocusable(this.elem("content"));
return this._firstFocusable=e.first(),this._lastFocusable=e.last(),this._skipReturnFocus=!1,0===this._firstFocusable.length?(this._skipReturnFocus=!0,void 0):(this.bindTo(this._lastFocused,"keydown",this._onLastFocusedKeyDown).bindTo(this._firstFocusable,"keydown",this._onFirstFocusableKeyDown).bindTo(this._lastFocusable,"keydown",this._onLastFocusableKeyDown),void 0)
},_unbindFocusEvents:function(){this.unbindFrom(this._firstFocusable,"keydown"),this.unbindFrom(this._lastFocusable,"keydown"),this.unbindFrom(this._lastFocused,"keydown")
},_onLastFocusedKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this[t.shiftKey?"_lastFocusable":"_firstFocusable"].focus())
},_onFirstFocusableKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&9===t.which&&(t.preventDefault(),this._lastFocused.focus())
},_onLastFocusableKeyDown:function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this._lastFocused.focus())
},_returnFocus:function(){var t=(this._parent||{})._skipReturnFocus||this._skipReturnFocus;t||this._lastFocused.focus()
},_mergeParams:function(t,e,i){var n={};return i||(i={}),t&&"object"==typeof t&&Object.keys(t).forEach(function(e){n[e]=t[e]
}),Object.keys(e).forEach(function(s){var r=o.call(i,s)?i[s].call(this,t[s],e[s]):e[s];n[s]=!r||"object"!=typeof r||Array.isArray(r)?r:t[s]?this._mergeParams(t[s],r,i):r
},this),n},_tailParamsHook:function(t,e){return e.offset||(e.offset=this.params.tail.offset),"number"==typeof e.offset?{offset:{left:e.offset,top:e.offset}}:e
},_generateDirections:function(){if(e)return e;for(var t=[["bottom","top"],["left","right"]],i=[["center","left","right"],["middle","top","bottom"]],n=i,s=t.length,o=[],r=0;s>r;r++)for(var a=t[r],c=a.length,u=0;c>u;u++)for(var l=i[r],h=l.length,d=0;h>d;d++)for(var p=n[r],f=p.length,m=0;f>m;m++)o.push({direction:a[u],axis:l[d],tail:{axis:p[m]}});
return e=o,o},_repackDirParams:function(e){var i={},n=[];return("string"==typeof e||t.isPlainObject(e))&&(e=[e]),n=e.map(function(t){if("string"==typeof t){var e=t.split("-");
t={to:e[0],tail:{}},e[1]&&(t.axis=e[1]),e[2]&&(t.tail.axis=e[2])}var n=t.to;return i[n]||(i[n]=t),t.axis&&(n+="-"+t.axis),t.key=n,i[n]=t,n
},this),{directions:i,keys:n}},setViewport:function(t){return this._viewport=t,this},_pickDirection:function(){var t,e=this._order,i=this.hasMod("adaptive","yes")?e.length:1;
for(this._visibilityFactor=0,t=0;i>t;t++){var n=e[t],s=this._directions[n];this._resetPos(n)._pushPos(n,this._calcPos(s))._pushPos(n,this._calcOffsets(s)),this._hasTail()&&this._resetTailPos(n)._pushTailPos(n,this._calcTailPos(s))._pushTailPos(n,this._calcTailOffset(s))._pushPos(n,this._calcOffsetByTail(s)),this._pushPos(n,this._getParentOffset());
var o=this._calcVisibilityFactor(s);if((o>this._visibilityFactor||!this._direction)&&(this._visibilityFactor=o,this._direction=this._directions[n],this.size=this.getPlacingSize(),100===o))break
}return this._direction},_getParentOffset:function(){var t=this.domElem.offsetParent().offset();return t.left*=-1,t.top*=-1,t
},_calcPos:function(t){this._calcPlacingSize(t);var e=this.getOwnerPos(),i=this.getOwnerSize(),n=this.getPlacingSize(),s=t.axis,r=this.params.position||{},a={};
switch(t.to){case"bottom":a={top:o.call(r,"top")?r.top:e.top+i.height,left:o.call(r,"left")?r.left:this._calcLeft(s)};
break;case"top":a={top:o.call(r,"top")?r.top:e.top-n.height,left:o.call(r,"left")?r.left:this._calcLeft(s)};
break;case"left":a={top:o.call(r,"top")?r.top:this._calcTop(s),left:o.call(r,"left")?r.left:e.left-n.width};
break;case"right":a={top:o.call(r,"top")?r.top:this._calcTop(s),left:o.call(r,"left")?r.left:e.left+i.width}
}return a},_calcTop:function(t){var e=0,i=this.getPlacingSize(),n=this.getOwnerPos(),s=this.getOwnerSize();
return"top"===t?e+=n.top:"middle"===t?e+=n.top+s.height/2-i.height/2:"bottom"===t&&(e+=n.top+s.height-i.height),e
},_calcLeft:function(t){var e=0,i=this.getPlacingSize(),n=this.getOwnerPos(),s=this.getOwnerSize();return"left"===t?e+=n.left:"center"===t?e+=n.left+s.width/2-i.width/2:"right"===t&&(e+=n.left+s.width-i.width),e
},getPlacingSize:function(){return this.getPopupSize()},_calcOffsets:function(t){var e,i=this._cache.offset||(this._cache.offset={}),n=t.key,s=t.offset;
if(i[n])return i[n];if(!s)return!1;if(e={left:0,top:0},"number"==typeof s)switch(n){case"left":e.left+=s;
break;case"right":e.left-=s;break;case"top":e.top+=s;break;case"bottom":e.top-=s}else s.left&&(e.left+=s.left),s.right&&(e.left-=s.right),s.top&&(e.top+=s.top),s.bottom&&(e.top-=s.bottom);
return i[n]=e,e},_hasTail:function(){return 0!==this.elem("tail").length},_moveToContainer:function(t){if(t)this._inContainer=!1;
else{if(this._isShown)return;t=this._parent?this._parent.domElem:this._scope}this.domElem.appendTo(t),this._inContainer=!0
},_resetPos:function(t){return t?this._positions[t]=null:this._positions={},this},_pushPosTo:function(t,e,i){i!==!1&&("string"==typeof e?this._sum(t[e]||(t[e]={}),i):(i=e,Object.keys(t).forEach(function(e){this._sum(t[e],i)
},this)))},_pushPos:function(t,e){return this._pushPosTo(this._positions,t,e),this},_sum:function(t,e){Object.keys(e).forEach(function(i){t[i]=(t[i]||0)+e[i]
})},_getSizeOf:function(t){return{height:t.outerHeight(),width:t.outerWidth()}},getOwnerSize:function(){return this._owner?this._cache.ownerSize||(this._cache.ownerSize=this._getSizeOf(this._owner)):{height:0,width:0}
},getPopupSize:function(){return this._getSizeOf(this.domElem)},_getPosOf:function(t){return t.offset()||{left:0,top:0}
},getOwnerPos:function(){var t;return this._owner&&(t=this._getPosOf(this._owner),"pageYOffset"in window&&(t.top-=window.pageYOffset-(document.documentElement.scrollTop||document.body.scrollTop),t.left-=window.pageXOffset-(document.documentElement.scrollLeft||document.body.scrollLeft))),t||this._userPosition
},_calcVisibilityFactor:function(t){var e,i,n=this._viewport,s=this._getSizeOf(n),o=this.getPopupSize(),r=this._positions[t.key],a=this._parent?this._parent.domElem.offset():{top:0,left:0},c=r.top+(this._isParentFixed?a.top:-n.scrollTop()),u=r.left+(this._isParentFixed?a.left:-n.scrollLeft()),l=u+o.width-s.width,h=c+o.height-s.height,d={height:o.height,width:o.width},p=100;
return h>0&&(d.height-=h),0>c&&(d.height+=c),0>u&&(d.width+=u),l>0&&(d.width-=l),d.height<0||d.width<0?p=0:(i=Math.abs(d.height*d.width),e=o.height*o.width,e!==i&&(p=i/e*100)),p
},_repaintShadow:function(){"undefined"==typeof this._repaintShadowCounter&&(this._repaintShadowCounter=0),this.domElem.css("zoom",1&++this._repaintShadowCounter)
},_findParent:function(t){return this.findBlockOutside(t,"popup")},destruct:function(){var t=arguments;
return this._channel.un("hide"),this._childs.forEach(function(e){e.destruct.apply(e,t)}),this.__base.apply(this,t)
},_resetDefault:function(){},_calcPlacingSize:function(){}},{live:function(){this.liveBindTo("close","leftclick tap",function(){this.hide()
})},_getFocusable:function(e){var i=t.data(e,"popup-getFocusable-id");i||(i=t.identify(),t.data(e,"popup-getFocusable-id",i)),i='*[data-popup-getFocusable-id="'+i+'"]';
var s=n?"":"a[href], link, ";return e.find(s+'*[tabindex], button, input:not([type="hidden"]), textarea, select, menuitem').filter(function(){var e=t(this),n=!0;
return parseInt(e.prop("tabindex"),10)<0||"hidden"===e.css("visibility")?!1:(t(this).parentsUntil(i).each(function(){var e=t(this);
return"none"===e.css("display")?n=!1:void 0}),n)})}})}(jQuery),_borschik("dEaZOFX2GFpzBd8-6mX9Urpt5fc")&&BEM.DOM.decl("popup",{show:function(t){var e;
if(t instanceof BEM)e=t.domElem.eq(0);else if(t instanceof $)e=t;else if(!t)return;if(e){this._owner&&e[0]!==this._owner[0]&&this.delMod("visibility"),this._owner=e;
var i=this.findBlockOutside(e,"popup")||this.findBlockOutside(e,"popup-owner");i&&this.setParent(i)}else this._userPosition=t;
return this.setMod("visibility","outside").repaint()},_calcVisibilityFactor:function(t){var e,i,n=this._viewport,s=this._getSizeOf(n),o=this.getPopupSize(),r=this._positions[t.key],a=this._parent?this._parent.domElem.offset():{top:0,left:0},c=r.top+(this._isParentFixed?a.top:0)-n.scrollTop(),u=r.left+(this._isParentFixed?a.left:0)-n.scrollLeft(),l=u+o.width-s.width,h=c+o.height-s.height,d={height:o.height,width:o.width},p=100;
return h>0&&(d.height-=h),0>c&&(d.height+=c),0>u&&(d.width+=u),l>0&&(d.width-=l),d.height<0||d.width<0?p=0:(i=Math.abs(d.height*d.width),e=o.height*o.width,e!==i&&(p=i/e*100)),p
}}),_borschik("8WQoowkMYUMdANww8iqmxqme1-s")&&BEM.DOM.decl("popup",{onSetMod:{js:function(){var t=$.identify();
this.domElem.attr("data-log-tree-portal-bottom",t).parent().addClass("log-tree-portal-top-"+t),this.__base.apply(this,arguments)
}}}),_borschik("S_eQb0sDJ-CJ0AjBxwwYc9DJNP8")&&BEM.DOM.decl("popup",{onSetMod:{autoclosable:{yes:function(){this._enableAutoclosable()
},"":function(){this._disableAutoclosable()}}},_enableAutoclosable:function(){var t=this._under;this.hasMod(t,"type","paranja")&&(t.is("iframe")&&(t=$([t[0].contentWindow,t[0].contentWindow.document])),this.bindTo(t,"leftclick tap",function(t){t.stopPropagation(),this.hide()
}),this.bindTo(t,"mousedown",function(){this._skipReturnFocus=!0})),this.bindToDoc("leftclick tap",function(t){if(!this._isRelatedNode($(t.target))){var e=$.Event("outside-click");
this.trigger(e,t),e.isDefaultPrevented()||this.hide()}}),this.bindToDoc("mousedown",function(){this._skipReturnFocus=!0
})},_disableAutoclosable:function(){this.hasMod(this._under,"type","paranja")&&this.unbindFrom(this._under,"leftclick tap mousedown"),this.unbindFromDoc("leftclick tap mousedown")
},_isRelatedNode:function(t){var e=this.containsDomElem(t);if(e||(e=Boolean(this._owner)&&this.containsDomElem.call({domElem:this._owner},t)),e)return!0;
var i,n=this._childs.length;for(i=0;n>i;i++)if(this.containsDomElem.call({domElem:this._childs[i].domElem},t))return!0;
return!1}}),_borschik("qV6sVreEJMz90tIvnMyqvRDOXrA")&&BEM.DOM.decl({block:"popup",modName:"autoclosable",modVal:"yes"},{_isRelatedNode:function(){return this.domElem?this.__base.apply(this,arguments):!1
},show:function(){return this.domElem?this.__base.apply(this,arguments):!1},hide:function(){return this.domElem?this.__base.apply(this,arguments):!1
}}),_borschik("dxYpe1RmwnckJspH3jf8OdvGDRA")&&BEM.DOM.decl({block:"popup",modName:"adaptive",modVal:"yes"},{onSetMod:{adaptive:{yes:function(){this._enableAdaptive()
},no:function(){this._disableAdaptive()}},"watch-scroll":{yes:function(){this._watchScroll()},no:function(){this._unwatchScroll()
}}},_enableAdaptive:function(){this.afterCurrentEvent(function(){this.domElem&&this.bindToWin("resize",this.onResize)
}),this._watchScroll()},_disableAdaptive:function(){this.unbindFromWin("resize")._unwatchScroll()},getScrollEvents:function(){return["scroll"]
},_watchScroll:function(){this._owner&&!this.hasMod("watch-scroll","no")&&this.bindTo(this._owner.parents().add(this._viewport),this.getScrollEvents().join(" "),this.onScroll,this)
},_unwatchScroll:function(){this._owner&&this.unbindFromDomElem(this._owner.parents().add(this._viewport),this.getScrollEvents().join(" "))
},onResize:function(){this._cache={},this._isShown&&!this._isHiding&&this.repaint()},onScroll:function(){this._cache={},this._isShown&&!this._isHiding&&this.repaint()
},destruct:function(){this._disableAdaptive(),this.__base.apply(this,arguments)}}),_borschik("VVHPmyb70tHsCgccGMY-04SIDJ4")&&BEM.DOM.decl({block:"popup",modName:"animate",modVal:"yes"},{afterShow:function(){var t=this.getCurrDirection();
if(t){var e=t.to,i=this.getCurrPos(),n={opacity:1,top:i.top,left:i.left},s={opacity:0,top:i.top,left:i.left};
"bottom"===e?s.top+=10:"top"===e?s.top-=10:"left"===e?s.left-=10:"right"===e&&(s.left+=10),this.domElem.stop(!0).css(s).animate(n,this.params.duration)
}},beforeHide:function(t){var e=this.getCurrDirection();if(!e)return t();var i=e.to,n=this.getCurrPos(),s=this.domElem,o={top:n.top,left:n.left,opacity:0};
return"bottom"===i?o.top+=10:"top"===i?o.top-=10:"left"===i?o.left-=10:"right"===i&&(o.left+=10),s.stop(!0,!0).animate(o,this.params.duration,function(){t(),s.css("opacity","")
})}}),_borschik("kQ2fImSjIvuHOU2Fy4twthM9NP4")&&!function(){var t=[];BEM.DOM.decl("popup",{onSetMod:{js:function(){this.__base.call(this);
var t=this.findElem("under").first();this._underClassAttr=t.attr("class"),this.isDivEnough()?this._under=t:(t.remove(),this._under=null),this._underInPool=!1
}},isDivEnough:function(){return!1},_createUnder:function(){return $('<iframe frameBorder="0" tabindex="-1" src="about:blank"/>')
},_getUnder:function(){if(this._under)return this._under;var e=t.pop();return e&&(this._underInPool=!1),this._under=e||this._createUnder()
},_attachUnder:function(){var t=this._under=this._getUnder();t.attr("class",this._underClassAttr),this.hasMod(t,"type","paranja")?t.detach().insertBefore(this.domElem):t.prependTo(this.domElem)
},_detachUnder:function(){var e=this._under;t.push(e.detach()),this._under=null,this._underInPool=!0},destruct:function(){return this._underInPool&&t.pop(),this._under&&this._under.remove(),this.__base.apply(this,arguments)
}})}(),_borschik("8TtU8iZ95_f0ZwI47puJhWXytLU")&&BEM.DOM.decl("popup-owner",{onSetMod:{js:function(){this._childs=[]
}},addChild:function(t){for(var e=this._childs.length,i=0;e>i;i++)if(this._childs[i]._uniqId==t._uniqId)return;
this._childs.push(t),t.on("hide",function(){this.removeChild(t)},this)},repaint:function(){},removeChild:function(t){for(var e=this._childs.length,i=0;e>i;i++)if(this._childs[i]._uniqId==t._uniqId){this._childs.splice(i,1);
break}},hide:function(){this._childs.forEach(function(t){t.hide()})},destruct:function(){var t=arguments;
return this._childs.forEach(function(e){e.destruct.apply(e,t)}),this.__base.apply(this,t)}}),_borschik("DOWYWcmkfvSDldA6vh4IcrJP984")&&BEM.DOM.decl({block:"popup",modName:"type",modVal:"modal"},{getDefaultParams:function(){var t=this.__base();
return t.top="50%",t.left="50%",t},_isPercentVal:function(t){return"string"==typeof t&&t.indexOf("%")>0
},show:function(t){return this._moveToContainer(),this.setMod("visibility","outside").setMod("adaptive","no"),this.repaint(t),this
},repaint:function(t){this._moveToContainer(),t||(t={left:this.params.left,top:this.params.top});var e=this.getPopupSize();
return this._isPercentVal(t.left)&&!t.marginLeft&&(t.marginLeft=e.width/(-100/parseInt(t.left,10))),this._isPercentVal(t.top)&&!t.marginTop&&(t.marginTop=e.height/(-100/parseInt(t.top,10))),this._show(t),this
}}),_borschik("33_-vGXYFH-SjDpffgkCDlqCHyw")&&BEM.DOM.decl("feedback",{externalData:{},onSetMod:{js:function(){this.checkboxes=this.findBlocksInside("checkbox"),this.submit=this.findBlockInside({block:"button",modName:"type",modVal:"submit"}).on("press",this.submitFeedback,this),this.findBlockInside({block:"button",modName:"type",modVal:"close"}).on("press",function(){this.popup.hide()
},this),this.popup=this.findBlockInside("popup").on("show",this.onShowPopup,this).on("hide",this.onHidePopup,this),this.setCheckboxEvent(),this._ajax=BEM.create("i-request_type_ajax",{url:this.params.abuseLink,cache:!1,dataType:"script",type:"POST"}),this.channel("feedback").on("show",this.showFeedback,this)
}},showFeedback:function(t,e){this.externalData=e,this.resetPopup(),this.popup.toggle()},resetPopup:function(){this.checkboxes.forEach(function(t){t.delMod("checked")
}),this.popup.findBlockInside("radiobox").val("no"),this.popup.findElem("result").hide(),this.popup.findElem("complaint").show()
},setCheckboxEvent:function(){var t=this.findBlocksInside("checkbox"),e=this;t&&t.map(function(t){t.on("change",e.checkboxChanged,e)
})},checkboxChanged:function(){this.submit.setMod("disabled",this.hasCheckedItems()?"no":"yes")},hasCheckedItems:function(){return this.checkboxes.filter(function(t){return t.isChecked()
}).length>0},submitFeedback:function(){var t=this;this._ajax.get(t.getLogParams(),this.onSuccess),setTimeout(function(){t.popup.findElem("result").show(),t.popup.findElem("complaint").hide()
},200)},defaultParams:function(){var t=this.popup.findBlocksInside("checkbox").filter(function(t){return t.isChecked()
}).map(function(t){return t.val()}).toString(),e=this.popup.findBlockInside("radiobox").val(),i=this.params&&this.params.request,n={"complaint-query":e,"reason-complaint":t};
return i&&$.extend(n,i),n},getLogParams:function(){return this.defaultParams()},onShowPopup:function(){},onHidePopup:function(){},onSuccess:function(){}}),_borschik("PKk5lMR_QMpDKDIdtiGKqttZW8Q")&&BEM.DOM.decl("feedback",{onSetMod:{js:function(){this.__base(),this.popup.findBlockInside("radiobox").on("change",this.radioboxChanged,this)
}},radioboxChanged:function(){"yes"===this.popup.findBlockInside("radiobox").val()?this.removeSerpItemBorder():this.setSerpItemBorder()
},onShowPopup:function(){this.setSerpItemBorder()},onHidePopup:function(){this.removeSerpItemBorder()
},setSerpItemBorder:function(){this.externalData.serpItem&&this.externalData.serpItem.setMod("feedback","yes")
},removeSerpItemBorder:function(){this.externalData.serpItem&&this.externalData.serpItem.delMod("feedback")
},getLogParams:function(){var t=BEM.blocks["i-global"],e={query:t.param("query"),service:"yandex."+t.param("tld")},i=this.externalData.serpItem,n=$(".serp-item__title a").map(function(t,e){return $(e).attr("href")
});return e["shows-urls"]=n.toArray().join(";"),i&&(e["url-complaint"]=i.findElem("title-link").attr("href")),$.extend(e,this.defaultParams()),e
}}),_borschik("f6eKZk0PhCBFVSlgNXHL-Z0dr2Y")&&BEM.DOM.decl("paranja",{onSetMod:{js:function(){var t=this;
$(t.params.rel).each(function(){$(this.elem||t.domElem).on(this.event,t[this.method].bind(t))}),this.bindTo("leftclick tap",function(){this.trigger("click")
})},state:{open:function(){this.trigger("open")},close:function(){this.trigger("close")}}},open:function(){this.setMod("state","open")
},close:function(){this.setMod("state","close")}},{live:!1}),_borschik("Md2Bf2v8wRpAvlQa5xotw-K_rLQ")&&BEM.DOM.decl("show-feedback",{onSetMod:{js:function(){var t=this.findBlockOutside("popup");
this.paranja=this.findBlockOutside("b-page").findBlockInside("paranja"),this.feedbackContainer=this.findBlockOutside("main"),this.serpItem=this.findBlockOutside("serp-item"),this.bindTo(this.domElem,"click",function(){t&&t.hide(),this.feedbackContainer.findBlockInside("feedback")?this.callFeedback(this):(this.showParanja(),this.channel("serp-request").trigger("request",{key:"feedback",success:this.loadFeedback.bind(this),error:this.hideParanja.bind(this)}))
})}},loadFeedback:function(t){BEM.DOM.init($(t.html).appendTo(this.feedbackContainer.domElem)).bem("feedback"),this.callFeedback(this)
},callFeedback:function(){this.hideParanja(),this.channel("feedback").trigger("show",{serpItem:this.serpItem})
},showParanja:function(){this.paranja.open(),this.paranja.setMod("full","yes")},hideParanja:function(){this.paranja.close(),this.paranja.delMod("full")
}}),_borschik("Ec5jZ5lI13RJNXy0c3JsjuoszF4")&&BEM.DOM.decl("timing",{onSetMod:{js:function(){this.data={},this.send()
}},send:function(){this.getData().then(this.changeThis(function(t){this._send(this.buildCounterParams(this.normalizeMetrics(this.buildMetrics(t))))
}))},_send:function(t){t&&(document.createElement("IMG").src=[this.getClickUrl(),this._serializeParams(t),"*"].join("/"))
},getData:function(){var t=this._timing=(window.performance||{}).timing;if(!t||!t.navigationStart||t.navigationStart<+new Date-18e5)return $.Deferred().reject().promise();
var e=this.data;return $.when.apply($,this.getDataList()).pipe(function(){return e})},buildMetrics:function(){var t=this._timing,e={1036:[t.domainLookupStart,t.navigationStart],1037:[t.domainLookupEnd,t.domainLookupStart],1038:[t.connectEnd,t.connectStart],1039:[t.responseStart,t.connectEnd],1040:[t.responseEnd,t.responseStart],1040.906:[t.responseEnd,t.domainLookupStart],1310.1309:[t.domContentLoadedEventEnd,t.domContentLoadedEventStart],1310.1007:[t.domContentLoadedEventStart,t.responseStart]},i=this.data.firstPaintTime;
i&&i>0&&(e["1041"]=[i,t.responseStart],e["1041.906"]=[i,t.domainLookupStart]);var n=t.secureConnectionStart;
n&&n>0&&(e["1383"]=[t.requestStart,n]);var s=window.performance.navigation;return s&&(s.redirectCount&&(e["1384.1385"]=s.redirectCount),(1==s.type||2==s.type)&&(e["770.76"]=s.type)),e
},normalizeMetrics:function(t){var e=this._timing.navigationStart;return $.each(t,function(i,n){if($.isArray(n)){if(n[0]<n[1]||n[1]<e)return t=!1;
t[i]=n=n[0]-n[1]}return 0>n?t=!1:void 0}),t},buildCounterParams:function(t){if(t){var e=this.getCounterParams();
return e.vars=$.extend(t,this.params.vars),e.vars["1042"]=encodeURIComponent(navigator.userAgent),e}},getDataList:function(){if(this.isPrerender())return[];
var t,e;this._timing.msFirstPaint&&(t=this._timing,e="msFirstPaint"),this.withLoadTimes(function(i){t=i,e="firstPaintTime"
});var i=this,n=[];return t&&n.push(this.promiseProperty(t,e).then(function(t){"firstPaintTime"===e&&(t*=1e3),i.data.firstPaintTime=Math.floor(t)
})),n},promiseProperty:function(t,e,i){var n=this.channel("sys"),s=$.Deferred(),o=function(){var n=$.isFunction(t)?t():t;
return n&&n[e]?((i?i(n[e]):n[e]>0)&&s.resolve(n[e],n),void 0):s.reject("Property does not exist")};return n.on("tick",o),s.always(function(){n.un("tick",o)
}),s.promise()},withLoadTimes:function(t){var e=(window.chrome||{}).loadTimes;return $.isFunction(e)&&t&&t.call(this,e),this
},getCounterParams:function(){return{dtype:"stred",pid:1,cid:72202,path:"690.1033"}},isPrerender:function(){return"prerender"===(document.visibilityState||document.webkitVisibilityState||document.msVisibilityState)
},getClickUrl:function(){var t=this.params.clckHost;if(!t){var e=location.hostname.match(/^(?:[-\w]+\.)*(yandex(?:.[a-z]+)+)$/i);
t=(e?e[1]:"yandex.ru")+"/clck"}return"//"+t+"/click"},_flatten:function(t,e){var i=[];return e=e||"=",$.each(t,function(t,n){i.push(t+e+n)
}),i},_serializeParams:function(t){var e=this;return $.each(t,function(i,n){$.isPlainObject(n)&&(t[i]=e._flatten(n).join(","))
}),this._flatten(t).join("/")}}),_borschik("N2zmuIYLhfClKKgfzkgobQgNVf0")&&BEM.DOM.decl("timing",{getCounterParams:function(){var t=this.__base.apply(this,arguments);
return this.params.reqid&&(t.reqid=encodeURIComponent(this.params.reqid)),t}}),_borschik("jPQE72c7fhedaxpkW6TbFakeQSo")&&BEM.DOM.decl("ajax-perf",{errors:{UNKNOWN_ERROR:-1,SERVER_TIMEOUT:1,CLIENT_TIMEOUT:2,ABORT:3,PARSE_ERROR:4,JS_ERROR:5,HTTP_ERROR:6,HANDLED_ERROR:7},onSetMod:{js:function(){this._requests={},this._stateChange=0,this._bindEvents()
}},_bindEvents:function(){var t=this;BEM.blocks.history.getInstance().on("statechange",function(){t._stateChange=+new Date
}),this.bindToDoc({ajaxSend:this._onSend,ajaxError:this._onError,ajaxSuccess:this._onSuccess,ajaxComplete:this._onComplete})
},_getRequestData:function(t){return this._requests[$.identify(t)]},_onSend:function(t,e,i){this.filterRequest(i)&&(this._requests[$.identify(e)]={ajaxSend:+new Date,stateChange:this._stateChange})
},_onSuccess:function(t,e,i,n){if(n&&n.error){var s=this._getRequestData(e);s&&(s.ajaxError=+new Date,s.ajaxErrorType=this.errors.HANDLED_ERROR)
}},_onError:function(t,e,i,n){var s=this._getRequestData(e);s&&(s.ajaxError=+new Date,s.ajaxErrorType=this._getErrorType(e,n))
},_onComplete:function(t,e,i){var n=this._getRequestData(e);if(n){n.ajaxComplete=+new Date;var s=this._buildMetrics(n),o=i.url;
this._hasResourceTiming()&&!n.ajaxError?this.afterCurrentEvent(function(){s=$.extend(s,this._buildMetricsForUrl(o)),this._send(s,o)
}):this._send(s,o),delete this._requests[$.identify(e)]}},_getErrorType:function(t,e){var i=this.errors;
if(0===t.status&&"timeout"===t.statusText)return i.SERVER_TIMEOUT;switch(e){case"timeout":return i.CLIENT_TIMEOUT;
case"canceled":case"abort":return i.ABORT;case"parsererror":return i.PARSE_ERROR;default:if(e instanceof Error)return i.JS_ERROR
}return 200!==t.status&&304!==t.status?i.HTTP_ERROR:i.UNKNOWN_ERROR},filterRequest:function(t){var e=BEM.blocks.uri.parse(t.url),i=e.queryParams;
return 0===e.path().indexOf("/yandsearch")&&i.callback&&!(i.rpt||i.filter)},_hasResourceTiming:function(){return!window.externalHost&&window.performance&&$.isFunction(window.performance.getEntriesByName)
},_buildMetrics:function(t){var e={1201.906:(t.ajaxError||t.ajaxComplete)-t.ajaxSend};return t.ajaxError&&(e["1201.1030"]=t.ajaxErrorType),t.stateChange&&(e["1201.789"]=t.ajaxSend-t.stateChange),e
},_buildMetricsForUrl:function(t){t=this._getFullUrl(t);var e,i={},n=performance.getEntriesByName(t);
return n.length&&(n=n[0],e=n.domainLookupStart-n.fetchStart,n.connectEnd===n.fetchStart&&(e=n.requestStart-n.connectEnd),i={1036:e,1037:n.domainLookupEnd-n.domainLookupStart,1038:n.connectEnd-n.connectStart,1039:n.responseStart-n.connectEnd,1040:n.responseEnd-n.responseStart,1040.906:n.responseEnd-n.domainLookupStart}),i
},_getFullUrl:function(t){return t.indexOf("//")<0&&(t=location.protocol+"//"+location.host+location.pathname+t),t
},getClickUrl:function(){var t=this.params.clckHost;if(!t){var e=location.hostname.match(/^(?:[-\w]+\.)*(yandex(?:.[a-z]+)+)$/i);
t=(e?e[1]:"yandex.ru")+"/clck"}return"//"+t+"/click"},getCounterParams:function(){return{reqid:encodeURIComponent(BEM.blocks["i-global"].param("reqid")),dtype:"stred",pid:1,cid:72202,path:"690.1201"}
},buildCounterParams:function(t){var e=this.getCounterParams();return e.vars=$.extend(t,this.params.vars),e.vars["1042"]=encodeURIComponent(navigator.userAgent),e
},_send:function(t,e){t=this._normalizeMetrics(t),t&&(t=this.buildCounterParams(t),t.vars["1201.1030"]&&(t.vars["13"]=encodeURIComponent(e)),document.createElement("IMG").src=[this.getClickUrl(),this._serializeParams(t),"*"].join("/"))
},_normalizeMetrics:function(t){return $.each(t,function(e,i){return isNaN(i)||0>i?t=!1:(t&&(t[e]=parseInt(i,10)),void 0)
}),t},_flatten:function(t,e,i){return e=e||"=",$.map(t,function(t,i){return i+e+t}).join(i||",")},_serializeParams:function(t){var e=this;
return $.each(t,function(i,n){$.isPlainObject(n)&&(t[i]=e._flatten(n))}),this._flatten(t,"=","/")}}),_borschik("MOZRWJEgqXuaRbhVMqQYSETDm1s")&&BEM.DOM.decl("main",{onAjaxSuccess:function(t){this.closePanel(!0),this.update(t,!0),this.afterCurrentEvent(function(){BEM.DOM.win.scrollTop(0)
})},update:function(t,e){this.appendScripts(t),(t||{}).html?BEM.DOM[e?"update":"append"](this.elem("content"),t.html):this.showNoConnectionError()
},appendScripts:function(t){(t&&t.scripts||[]).forEach(function(t){if(t){var e=document.createElement("script");
t.content&&(e.text=t.content),t.url&&(e.src=t.url),document.body.appendChild(e)}})},showNoConnectionError:function(){this._serp||(this._serp=this.findBlockOn("serp")),this._serp.showServerError()
}}),_borschik("ZvXzpIimD23U4NX1k459XDx5RCc")&&BEM.DOM.decl("no-connection",{_onButtonClick:function(){var t=BEM.blocks.location.getInstance();
t.trigger({type:"change",reasonForReload:2},t.getState())}},{live:function(){this.liveBindTo("reload","click",function(){this._onButtonClick()
})}}),_borschik("4PuAiMsP_43jdLhlRp1hbQdNgUE")&&!function(t){t.fn.extend({isMedia:function(t){if(!this.css)return!1;
var e=this.css("counter-reset");return e=e&&e.split(" ")||"",e[1===e.length?0:e.length-2]===t}})}(jQuery),_borschik("7jdffeoLT_0rKMAGDygz0M3QUUk")&&BEM.HTML.decl("b-link",{onBlock:function(t){t.tag("a").attr("href",t.param("url"));
for(var e,i=["title","target"];e=i.pop();)t.param(e)&&t.attr(e,t.param(e))}}),_borschik("MUpq9D2dAErd1HJcL8yG176Ivmw")&&BEM.DOM.decl("b-link"),_borschik("4IsucfDkDjO3Mb7-LVtQBL8pnbk")&&BEM.DOM.decl({block:"b-link",modName:"pseudo",modVal:"yes"},{_onClick:function(t){t.preventDefault(),this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){this.trigger("click")
})}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo({modName:"pseudo",modVal:"yes"},"leftclick",function(t){this._onClick(t)
})}}),_borschik("FsDv-T1CC3zXSGCCFtrtOLD0EgU")&&BEM.HTML.decl({name:"b-link",modName:"pseudo",modVal:"yes"},{onBlock:function(t){t.tag(t.param("url")?"a":"span"),t.wrapContent({elem:"inner"}),t.js(!0)
},onElem:{inner:function(t){t.tag("span")}}}),_borschik("B3PclJ41WMhCgFZwRe5Xs8NtPMk")&&BEM.DOM.decl("z-entity-card",{onSetMod:{js:function(){this.hasMod("empty","yes")||this._addCounters()
}},_addCounters:function(){var t=this.params.counters;t["hover-in"]&&t["hover-out"]&&(this.bindTo("mouseenter",function(){w(null,t["hover-in"][0],t["hover-in"][1])
}),this.bindTo("mouseleave",function(){w(null,t["hover-out"][0],t["hover-out"][1])}))}}),_borschik("HuTwPTGOamJqEQ1BRpDBRzjgnXY")&&!function(){var t=50,e=85,i=$.inherit($.observable,{alreadySent:{},children:[],__constructor:function(t){this.tree=t,this.send=$.debounce(this.send,500,this)
},addChild:function(t,e,i){this.alreadySent[t]||(this.children.push({ctag:e,vars:i}),this.alreadySent[t]=!0,this.send())
},send:function(){this.children.length&&(sh($.extend(this.tree,{children:this.children})),this.children=[])
}});BEM.DOM.decl("z-entity-collection",{onSetMod:{js:function(){this.initialize()},"portion-load":function(t,e){this.findBlockInside("spin").toggleMod("progress","yes","","yes"===e)
}},initialize:function(){this.hasMod("empty","yes")||(this.itemsBatch=new i(this.countersParams().batch),this.itemsContainer=this.findElem("items"),this.items=this.findElem("item"),this.itemWidth=this.items.outerWidth(!0),this.nextStartIndex=this.params.nextStartIndex,this.prepareCarousel(function(){this.updateVisibleElementsState(),this.bindEvents()
}.bind(this)))},prepareCarousel:function(t){var e=this.findElem("item","selected","yes");e.length?this.shiftTo(this.calculateShiftToPutInMiddle(e),t):t()
},calculateShiftToPutInMiddle:function(t){var e=this.visibleItemsCount()>>1,i=t?t.index()-e:0;return Math.max(i,0)
},bindEvents:function(){var t=this.countersParams();t["hover-in"]&&t["hover-out"]&&(this.bindTo(this.findElem("carousel"),"mouseenter",function(){w(null,t["hover-in"][0],t["hover-in"][1])
}),this.bindTo(this.findElem("carousel"),"mouseleave",function(){w(null,t["hover-out"][0],t["hover-out"][1])
})),this.bindTo(this.findElem("back-button"),"leftclick tap",this.onBackButtonClick.bind(this)),this.bindTo(this.findElem("item"),"leftclick tap",this.onItemClick.bind(this)).bindTo(this.findElem("arrow"),"leftclick tap",this.scrollOnArrowClick.bind(this)).bindTo(this.findElem("items"),"scroll",this.updateVisibleElementsState.bind(this)),this.bindToWin("resize.carousel",$.throttle(this.updateVisibleElementsState.bind(this),200))
},unbindEvents:function(){this.unbindFrom(this.findElem("carousel"),"mouseenter"),this.unbindFrom(this.findElem("carousel"),"mouseleave"),this.unbindFrom(this.findElem("back-button"),"leftclick tap"),this.unbindFrom(this.findElem("item"),"leftclick tap").unbindFrom(this.findElem("arrow"),"leftclick tap").unbindFrom(this.findElem("items"),"scroll"),this.unbindFromWin("resize.carousel")
},countersParams:function(){return this.elemParams(this.findElem("carousel")).counters},scrollOnArrowClick:function(t){var e=this.elemParams(t.data.domElem).direction,i=this.visibleItemsCount()-1,n=i*("left"===e?-1:"right"===e?1:0);
return this.shiftTo(n,this.updateVisibleElementsState.bind(this)),!1},shiftTo:function(t,e){if(0===t)return e();
var i=this.itemsContainer.scrollLeft()%this.itemWidth,n=t*this.itemWidth-i;this.itemsContainer.stop().animate({scrollLeft:"+="+n},250,e||$.noop)
},updateVisibleElementsState:function(){this.updateButtonsState(),this.countVisibleItems(),this.params.isLoadAllowed&&this.loadNextPortion()
},updateBackButton:function(t){var e=this.findElem("back-button");e.attr("href",t.url),this.findBlockOn(e,"button").findElem("text").text(t.text),t.needShow?this.delMod(e,"hidden"):this.setMod(e,"hidden","yes")
},updateButtonsState:function(){var t=this.itemsContainer.scrollLeft()<=0,e=this.items.last().position().left+this.itemWidth<=this.itemsContainer.scrollLeft()+this.itemsContainer.width();
this.toggleArrow("left",t),this.toggleArrow("right",e)},toggleArrow:function(t,e){var i=this,n=this.findElem("arrow","direction",t),s=function(t){i.setMod(n,"visible",t),i.unbindFrom(n,"mousemove"),clearTimeout(i._arrowTimer)
},o=function(){s("no")};hideArrowOnMove=function(t){i._hideArrowOnMove(t)&&o()},this.hasMod(n,"visible","yes")&&e&&(this.setMod(n,"visible","hidden"),this.bindTo(n,"mousemove",hideArrowOnMove),this._arrowTimer=setTimeout(o,1e3),this._mouseX=-1,this._mouseY=-1),(this.hasMod(n,"visible","hidden")&&!e||this.hasMod(n,"visible","no")&&!e)&&s("yes")
},_hideArrowOnMove:function(t){if(-1===this._mouseX)return this._mouseX=t.clientX,this._mouseY=t.clientY,!1;
var e=t.clientX-this._mouseX;return deltaY=t.clientY-this._mouseY,destance=Math.sqrt(e*e+deltaY*deltaY),destance>10
},countVisibleItems:function(){for(var i=this.itemsContainer.scrollLeft(),n=Math.floor(i/this.itemWidth),s=Math.min(n+this.visibleItemsCount(),t-1,this.items.length),o=n;s>o;o++)this.itemsBatch.addChild(o,e+o,"-id="+this.elemParams(this.items.eq(o)).id)
},visibleItemsCount:function(){var t=this.itemsContainer.scrollLeft()%this.itemWidth;return Math.floor((this.itemsContainer.width()+t)/this.itemWidth)
},onItemClick:function(t){var e=t.data.domElem;this.countClick(e),this.selectItem(e)},onBackButtonClick:function(){var t=this.findElem("item","selected","yes");
t.length&&(this.delMod(t,"selected"),this.isAjaxUpdateCanceled=!0)},countClick:function(i){var n=this.countersParams(),s=i.index();
if(n.click&&t>s){var o=n.click[0]+"."+(e+s);vars=(n.click[1]?n.click[1]+",":"")+"-id="+this.elemParams(i).id,w(null,o,vars)
}},selectItem:function(t){this.delMod(this.findElem("item"),"selected"),this.setMod(t,"selected","yes"),this.isAjaxUpdateCanceled=!0
},onAjaxSuccess:function(t){t.params&&t.params.isEmpty||!this.isAjaxUpdateCanceled?this.updateContent($(t.html).html(),t.params):this.updateBackButton(t.params&&t.params.backButton||{}),this.isAjaxUpdateCanceled=!1
},updateContent:function(t,e){this.toggleMod("empty","","yes",!!t),this.unbindEvents(),t&&BEM.DOM.update(this.domElem,t,function(){e&&(this.params.entref=e.entref,this.params.nextStartIndex=e.nextStartIndex),this.initialize()
}.bind(this))},needLoadNextPortion:function(){var t=this.itemWidth*this.items.length;return-1!==this.nextStartIndex&&this.itemsContainer.width()===t-this.itemsContainer.scrollLeft()&&this.items.length<this.params.maxItemsLength
},loadNextPortion:function(){if(this.needLoadNextPortion()&&!this.hasMod("portion-load","yes")){var t=BEM.blocks.uri.parse(location.href).getParam("ento");
t=t&&t.length?t[0]:this.params.entref,this.setMod("portion-load","yes"),this.channel("serp-request").trigger("request",{key:this.__self.getName(),params:{ento:t+";entlistskip="+this.nextStartIndex},success:this.updatePortionContent.bind(this),error:this.delMod.bind(this,"portion-load")})
}},updatePortionContent:function(t){this.delMod("portion-load");var e=$(t.html).find(".z-entity-collection__item"),i=this.params.maxItemsLength-this.items.length;
e.length&&(this.unbindFrom(this.items,"click"),e.length>i&&(e.splice(i),this.params.nextStartIndex=-1),this.findElem("spin").before(e),this.items=this.findElem("item"),this.nextStartIndex=t.params&&t.params.nextStartIndex||-1,this.updateVisibleElementsState(),this.bindTo(this.items,"click",this.onItemClick.bind(this)))
}})}(),_borschik("xf64KSUie5hFgJy501I9osSHwlI")&&BEM.decl("i-statface",{onSetMod:{js:function(){this._data={},this._needSend=!1,this.hasMod("send","manual")||$(window).unload(this.changeThis(this.send))
}},set:function(t,e){this._needSend=!0;var i=this._data;return"object"==typeof t?$.each(t,function(t,e){i[t]=e
}):i[t]=e,this},reset:function(){var t=this;return arguments[0]?$.each(arguments,function(e,i){delete t._data[i]
}):this._data={},$.isEmptyObject(this._data)&&(this._needSend=!1),this},serialize:function(){var t=this;
return $.map(t.params.keys,function(e){return t._data[e]}).join(".")+(t.params.customKeys?$.map(t.params.customKeys,function(e){var i=t._data[e];
return"/"+e+"="+(void 0==i?"":i)}).join(""):"")},send:function(t){if(this._needSend){var e=this.params,i=["//",e.host,"/",e.path,"/dtype=stred","/pid=",e.pid,"/cid=",e.cid,"/cts=",(new Date).getTime(),"/path=",this.serialize(),"/*data=",encodeURIComponent("url="+encodeURIComponent(e.url))].join("");
"click"==e.path?document.createElement("IMG").src=i:$.ajax({type:"GET",url:i,data:null,complete:t||$.noop,dataType:"script",timeout:500}),this._needSend=!1
}return this},getDefaultParams:function(){return{host:"clck.yandex.ru",path:"jclck",url:location.href}
}}),_borschik("xyHy8YRnSDDWvd_v0zFquDw81ms")&&BEM.decl("i-statface",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.params.customKeys.push("u","reqid")
}},sendCounter:function(t){this.set({u:(new Date).getTime(),reqid:BEM.blocks["i-global"].param("reqid")}).send(t).reset()
},getDefaultParams:function(){return $.extend(this.__base(),{pid:1,host:BEM.blocks["i-global"].param("click-host").replace(/(.*)\/\//,""),customKeys:[]})
}}),_borschik("CQrMnde1bgDy3PACRTPEqL0OhEE")&&(BEM.decl("z-entity-image-counter",{},{start:function(){this._initCounter(),this.channel("serp-request").on("request",this._perRequest,this)
},_initCounter:function(){this._total=$(".z-entity-image__image").length,this._total>0&&(this._timer=setTimeout(this._sendCounter.bind(this),1e3))
},_createCounter:function(){var t={cid:"72639",keys:["path"],customKeys:["906","1030"]};this.imageCounter=BEM.create("i-statface",t)
},_perRequest:function(){window["z-entity-image__failed"]=0,this._initCounter()},_sendCounter:function(){clearTimeout(this._timer),this._timer=null;
var t=window["z-entity-image__failed"];t&&this.sendData(this._total,t)},sendData:function(t,e){this.imageCounter||this._createCounter();
var i={path:"690.277.1030",906:t,1030:e};this.imageCounter.set(i).sendCounter()}}),BEM.blocks["z-entity-image-counter"].start()),_borschik("8CyRVvLjpdUAHLCXpcT8e3IJEjY")&&BEM.DOM.decl("z-entity-cut",{onSetMod:{js:function(){var t=["leftclick tap",function(){this.setMod("state","open")
}];this.hasMod("precision","yes")&&t.unshift("more"),this.bindTo.apply(this,t)}}}),_borschik("pEnniqh4ULl7eH2B4cgl4GzfCcA")&&BEM.DOM.decl("z-entity-popup",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._popup=this.findBlockInside("popup"),this._iframe=this.elem("iframe"),this._popupOpened=null,this.bindToWin("message",function(t){"closeIframe"===t.originalEvent.data&&this._popup.isShown()&&(this._popup.hide(),setTimeout(function(){this._iframe.focus(),this.elem("button").focus(),this.elem("button").blur()
}.bind(this),300))})}},openWindow:function(t){this._popup.show({top:0,left:0}),this._iframe.focus();var e=this.findBlockOn(t.data.domElem,"button");
this._popupOpened!==e&&(this._popupIsOpened=e,this._iframe.attr("src",e.params.iframe))}},{live:function(){this.liveBindTo("button","leftclick tap",function(t){this.openWindow(t)
})}}),_borschik("b0wszeqPOWXhMEBIhT4Y1VAYpEE")&&BEM.DOM.decl({block:"popup",modName:"position",modVal:"fixed"},{addChild:function(t){this.__base.apply(this,arguments),t.setMod("watch-scroll","no")
},_onFirstFocusableKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&9===t.which&&(t.preventDefault(),this._lastFocusable.focus())
},_onLastFocusableKeyDown:function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this._firstFocusable.focus())
}}),_borschik("sfH9C4IGy1ip9PvIpfb14fsz6M8")&&BEM.DOM.decl({block:"popup",modName:"position",modVal:"fixed"},{getOwnerPos:function(){var t=this.__base.apply(this,arguments);
if(this._owner){var e=this._viewport;t.top-=e.scrollTop(),t.left-=e.scrollLeft()}return t}}),_borschik("ZoSfwPi7z4_8rql8ue24gr0ly-I")&&BEM.DOM.decl({block:"popup",modName:"behaviour",modVal:"scrollable"},{getDefaultParams:function(){var t=this.__base();
return t.top=20,t}}),_borschik("KTnKVBZwDON0CvnyTwB1m-9Zvoc")&&BEM.DOM.decl({block:"popup",modName:"wrapped",modVal:"yes"},{onSetMod:{visibility:{visible:function(){this.__base(),this._wrap()
},"":function(){this.__base(),this._unwrap()}},wrapped:{"":function(){this._unwrap()}}},_wrap:function(){this._wrapper||(this._wrapper=this.elem("wrapper").detach()),this._wrapper&&this.domElem.wrap(this._wrapper)
},_unwrap:function(){this._wrapper&&this.domElem.unwrap()},destruct:function(){this._unwrap(),this.__base()
}}),_borschik("PfHRek1FuKwWIOwzx2E-N9VF_OY")&&!function(){var t={};BEM.DOM.decl({block:"popup",modName:"body-scroll",modVal:"no"},{onSetMod:{visibility:function(){return this.afterCurrentEvent(function(){this.domElem&&this.hasMod("visibility","visible")?t[this.params.uniqId]=!0:delete t[this.params.uniqId],this._manageScopeOverflow()
}),this.__base()}},destruct:function(){var e=this.params.uniqId;t[e]&&(delete t[e],this._manageScopeOverflow()),this.__base.apply(this,arguments)
},_enableScroll:function(){return this._scope.css({overflow:""}),this},_disableScroll:function(){return this._scope.css({overflow:"hidden"}),this
},_manageScopeOverflow:function(){var e=Object.keys(t).length;0===e?this._enableScroll():1===e&&this._disableScroll()
}})}(),_borschik("C8Jcuk3sggWl-uiu7-1V6KQ83tA")&&BEM.DOM.decl("z-related-list",{onSetMod:{js:function(){var t=this.params.counters;
t["hover-in"]&&t["hover-out"]&&(this.bindTo("mouseenter",function(){w(null,t["hover-in"][0],t["hover-in"][1])
}),this.bindTo("mouseleave",function(){w(null,t["hover-out"][0],t["hover-out"][1])}))}}}),_borschik("QZaqarvgKRwbmhibHagc8g_Udmg")&&BEM.DOM.decl({name:"z-entity-navigator",modName:"type",modVal:"seasons"},{_updateList:function(t){var e=t.target.val();
this.elem("content-wrapper").html(BEMHTML.apply(this.params.itemList[e]))}},{live:function(){this.liveInitOnBlockInsideEvent("change","select",function(){this.findBlockInside("select").on("change",this._updateList,this)
})}}),_borschik("3x4k4Rr5nSOd56ZoT7N87hi-i8M")&&BEM.DOM.decl("button",{onSetMod:{js:function(){var t=this.isDisabled(),e=this.domElem;
(this._href=e.attr("href"))&&t&&e.removeAttr("href")},disabled:function(t,e){var i="yes"===e,n=this.domElem;
this._href&&(i?n.removeAttr("href"):n.attr("href",this._href)),this.afterCurrentEvent(function(){n.attr("disabled",i)
})},pressed:function(t,e){return this.isDisabled()?!1:(this.trigger("yes"===e?"press":"release"),void 0)
}},isDisabled:function(){return this.hasMod("disabled","yes")},url:function(t){return"undefined"==typeof t?this._href:(this._href=t,this.isDisabled()||this.domElem.attr("href",t),this)
},_onClick:function(t){this.isDisabled()?t.preventDefault():this.afterCurrentEvent(function(){this.trigger("click")
})}},{live:function(){this.liveBindTo("leftclick tap",function(t){this._onClick(t)})}}),_borschik("tMLceeeX6Y0LqDfLDcqd2OiLJik")&&BEM.DOM.decl("button",{onSetMod:{js:function(){this.__base.apply(this,arguments)
},focused:{yes:function(){return this.isDisabled()?!1:(this.bindToWin("unload",function(){this.delMod("focused")
}).bindTo("keydown",this._onKeyDown),this._isControlFocused()||this._getControl().focus(),this.afterCurrentEvent(function(){this.trigger("focus")
}),void 0)},"":function(){this.unbindFromWin("unload").unbindFrom("keydown"),this._isControlFocused()&&this._getControl().blur(),this.afterCurrentEvent(function(){this.trigger("blur")
})}},disabled:function(t,e){this.__base.apply(this,arguments),"yes"===e&&this.domElem.keyup()},hovered:function(t,e){return this.isDisabled()?!1:(""===e&&this.delMod("pressed"),void 0)
},pressed:function(){return this.isDisabled()||this.setMod("focused","yes"),this.__base.apply(this,arguments)
}},_getControl:function(){return this.elem("control").length&&this.elem("control")||this.domElem},_isControlFocused:function(){try{return this.containsDomElem($(this.__self.doc[0].activeElement))
}catch(t){return!1}},_onKeyDown:function(t){var e=t.keyCode;13!==e&&32!==e||this._keyDowned||(this._keyDowned=!0,this.setMod("pressed","yes").bindTo("keyup",function(){this.delMod("pressed").unbindFrom("keyup"),delete this._keyDowned,32===e&&this.domElem.attr("href")&&(document.location=this.domElem.attr("href"))
}))},destruct:function(){this.delMod("focused"),this.__base.apply(this,arguments)}},{live:function(){this.__base.apply(this,arguments);
var t={mouseover:{name:"hovered",val:"yes"},mouseout:{name:"hovered"},mousedown:{name:"pressed",val:"yes"},mouseup:{name:"pressed"},focusin:{name:"focused",val:"yes"},focusout:{name:"focused"}},e=$.browser.msie&&"8.0"===$.browser.version;
this.liveBindTo("mouseover mouseout mouseup focusin focusout",function(i){var n=t[i.type];this.setMod(n.name,n.val||""),!e||this._href||"mouseup"!==i.type&&"mouseout"!==i.type||this.domElem.height()
}).liveBindTo("mousedown",function(e){var i=t[e.type];1===e.which&&this.setMod(i.name,i.val||"")})}}),_borschik("2jmj7l5rSw0yVb_vlWAYkK_YBwk"),_borschik("2PKfP_y9qA7GMX4QTWbfZEG4Fi4")&&!function(){function t(){s=!0,setTimeout(e)
}function e(){s=!1}function i(){n.toggleClass("pointerfocus",s)}var n=$(document.documentElement),s=!1;
window.addEventListener&&(addEventListener("mousedown",t,!0),addEventListener("mouseup",t,!0),addEventListener("click",t,!0),addEventListener("focus",i,!0))
}(),_borschik("E4OkTC0b1dkNXmvZwK8CtvdiVbI")&&BEM.DOM.decl("enframed",{onSetMod:{js:function(){var t=this.__self;
t.frame||(t.frame=this.findBlockOutside("b-page").findBlockInside("frame"))}}},{live:function(){this.liveBindTo("leftclick tap",function(t){var e=this.params;
this.__self.frame.show({src:e.src,width:e.width,height:e.height}),t.preventDefault()})}}),_borschik("XyDdRd-wpGZJzptIoDQHT6gipKo")&&BEM.DOM.decl("frame",{show:function(t){this.elem("iframe").attr({frameborder:0,height:t.height,width:t.width,src:t.src}),this.findBlockOn(this.domElem,"popup").toggle()
}},{live:!0}),_borschik("nt8Z1jIII0CUhBo2aH9GNFavEGU")&&BEM.DOM.decl("popup",{onSetMod:{js:function(){this.__base(),this._tailPos={}
}},_calcTailPos:function(t){var e=t.to,i=this._positions[t.key],n=t.tail.axis,s={};return"top"===e||"bottom"===e?s.left=this._calcTailLeft(n,i):("left"===e||"right"===e)&&(s.top=this._calcTailTop(n,i)),s
},_calcTailTop:function(t,e){var i=0,n=this.getOwnerSize(),s=this.getOwnerPos(),o=this.params.tail.width,r=this.getPopupSize(),a=r.height,c=s.top-e.top,u=e.top+r.height-(s.top+n.height);
return c>0&&(i+=c,a-=c),u>0&&(a-=u),"middle"===t?(a-=o,i+=a/2):"bottom"===t&&(a-=o,i+=a),0>i&&(i=0),i
},_calcTailLeft:function(t,e){var i=0,n=this.getOwnerSize(),s=this.getOwnerPos(),o=this.params.tail.width,r=this.getPopupSize(),a=s.left-e.left,c=r.width,u=e.left+r.width-(s.left+n.width);
return a>0&&(i+=a,c-=a),u>0&&(c-=u),"center"===t?(c-=o,i+=c/2):"right"===t&&(c-=o,i+=c),i},_calcOffsetByTail:function(t){var e=this.params.tail,i=e.height,n={};
switch(t.to){case"top":n={top:-i};break;case"bottom":n={top:i};break;case"right":n={left:i};break;case"left":n={left:-i}
}return n},_calcTailOffset:function(t){var e={},i=t.to,n=t.tail,s=n.offset,o=n.axis;return s?("top"===i||"bottom"===i?(e.left=0,"left"===o?e.left+=s.left:"center"===o?(s.left&&(e.left+=s.left),s.right&&(e.left-=s.right)):"right"===o&&(e.left-=s.right)):("left"===i||"right"===i)&&(e.top=0,"top"===o?e.top+=s.top:"middle"===o?(s.top&&(e.top+=s.top),s.bottom&&(e.top-=s.bottom)):"bottom"===o&&(e.top-=s.bottom)),e):!1
},_resetTailPos:function(t){return t?this._tailPos[t]=null:this._tailPos={},this},_pushTailPos:function(t,e){return this._pushPosTo(this._tailPos,t,e),this
}}),_borschik("xuTos_jMiGTi7Kh3BbPnYgYzrlI")&&BEM.DOM.decl({block:"popup",modName:"autosize",modVal:"yes"},{getDefaultParams:function(){var t=this.__base();
return t.offsetWithoutTail=5,t},repaint:function(){return this._saveDefault(),this.__base(),this.domElem.css({maxWidth:this.size.width,height:this.size.height}),this
},_saveDefault:function(){this._defSize||(this._defSize=this.getPopupSize())},_resetDefault:function(){return this._defSize=null,this.domElem.css({maxWidth:"",height:""}),this
},_getAvailableSpace:function(t){return this._owner?{width:this._getAvailableWidth(t),height:this._getAvailableHeight(t)}:$.extend({},this._defSize)
},_getAvailableWidth:function(t){var e=BEM.DOM.getWindowSize(),i=e.width,n=t.offset,s=this._owner[0].getBoundingClientRect(),o=$.extend({},this._defSize);
switch(t.to){case"left":i=s.left,"number"==typeof n&&(i-=n),"object"==typeof n&&(n.left&&(i+=n.left),n.right&&(i-=n.right));
break;case"right":i=e.width-s.right,"number"==typeof n&&(i-=n),"object"==typeof n&&(n.left&&(i-=n.left),n.right&&(i+=n.right))
}return("left"===t.to||"right"===t.to)&&(i-=this._tailPos?2*this.params.tail.width:this.params.offsetWithoutTail),Math.min(o.width,i)
},_getAvailableHeight:function(t){var e=BEM.DOM.getWindowSize(),i=e.height,n=t.offset,s=this._owner[0].getBoundingClientRect(),o=$.extend({},this._defSize);
switch(t.to){case"bottom":i=e.height-s.bottom,"number"==typeof n&&(i-=n),"object"==typeof n&&(n.bottom&&(i+=n.bottom),n.top&&(i-=n.top));
break;case"top":i=s.top,"number"==typeof n&&(i-=n),"object"==typeof n&&(n.bottom&&(i-=n.bottom),n.top&&(i+=n.top))
}return("bottom"===t.to||"top"===t.to)&&(i-=this._tailPos?2*this.params.tail.height:this.params.offsetWithoutTail),Math.min(o.height,i)
},_calcTop:function(t){var e,i=this.__base(t),n=$(window).scrollTop(),s=BEM.DOM.getWindowSize(),o=this.getPlacingSize(),r=this.getOwnerPos(),a=this.getOwnerSize();
return 0>i&&(i=0),e=Math.max(s.height+n,r.top+a.height),i+o.height>e&&(i=e-o.height),i},_calcLeft:function(t){var e,i=this.__base(t),n=$(window).scrollLeft(),s=BEM.DOM.getWindowSize(),o=this.getPlacingSize(),r=this.getOwnerPos(),a=this.getOwnerSize();
return 0>i&&(i=0),e=Math.max(s.width+n,r.left+a.width),i+o.width>e&&(i=e-o.width),i},getPlacingSize:function(){return this._availSizes
},_calcPlacingSize:function(t){return this._availSizes=this._getAvailableSpace(t),this._availSizes},_calcVisibilityFactor:function(){var t=this._defSize,e=this.getPlacingSize(),i=e.height*e.width,n=t.height*t.width;
return i/n*100}}),_borschik("paUhhigaizGhyRenf1aX1Uyv1YU")&&!function(t,e){function i(t){var e={};return"option"===t.item?(e={block:c,elem:"option",tag:"option",attrs:{value:t.value},content:t.content},t.disabled&&(e.attrs.disabled="disabled"),t.selected&&(e.attrs.selected="selected")):"optgroup"===t.item&&(e={elem:"option-group",tag:"optgroup",attrs:{label:t.label}},t.disabled&&(e.attrs.disabled="disabled"),e.content=Array.isArray(t.content)?t.content.map(function(t,e){return i(t,e)
}):t.content),e.block=c,e}var n=t.browser.opera&&t.browser.version<12.1?"keypress":"keydown",s=t.browser,o=s.msie&&parseInt(s.version,10)<=10,r=s.msie&&8===parseInt(s.version,10),a=null,c="select";
e.DOM.decl("select",{onSetMod:{js:function(){this._items=[],this._curItemIndex=-1,this._scrollableElemOutsidePopup=null,this._rowHeight=22,this.on("change",this._redrawParentPopup),this._getSelectedText()!==this._buttonText()&&this.elem("control").trigger("change")
},disabled:function(t,e){var i="yes"===e;this.elem("control").attr("disabled",i),this._getButton().setMod(t,e),i&&this.delMod("opened").delMod("focused")
},focused:{yes:function(){return this.hasMod("disabled","yes")?!1:(this._useNativeControl()||this.bindTo(n,this._onKeyDown),this.afterCurrentEvent(function(){this.trigger("focus")
}),void 0)},"":function(){this._useNativeControl()||this.delMod("opened").unbindFrom(n),this.afterCurrentEvent(function(){this.trigger("blur")
})}}},isDisabled:function(){return this.hasMod("disabled","yes")},isOpened:function(){return this.hasMod("opened","yes")
},open:function(){return this.setMod("opened","yes")},close:function(){return this.delMod("opened")},val:function(e,i){if("undefined"==typeof e)return this.elem("control").val();
var n,s=-1;return this.findElem("option").each(function(i){this.value===e&&!this.disabled&&(n=t(this).parent("optgroup")[0],!(n&&n.disabled))&&(s=i)
}),s>-1&&this._selectedIndex(s,i),this},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")
},_selectedIndex:function(e,i){var n=this._getSelectedIndex();return"undefined"==typeof e||e===n?n:(this.elem("control").prop("selectedIndex",e),this._useNativeControl()||(this._buttonText(this._getSelectedText()),this._items[0]&&this.delMod(this._items,"selected").setMod(this._items.eq(e),"selected","yes")),this.trigger("change",t.extend({index:e,prev:n},i)),e)
},setOptions:function(n){return n?(e.DOM.update(this.elem("control"),BEMHTML.apply(t.map(n,i))),this.redraw()):this
},redraw:function(){return this._popup&&this._redrawList(),this.elem("control").trigger("change"),this
},_useNativeControl:function(){return null!==a?a:a="none"!==this.elem("control").css("display")},_redrawParentPopup:function(){return this._isParentPopup()&&this._popup._parent.repaint(),this
},_isParentPopup:function(){return this._popup&&this._popup._parent&&!this.hasMod("layout","fixed")},_onSelectChange:function(){var t=this;
t._buttonText(t._getSelectedText()),this.trigger("change",{index:t._getSelectedIndex(),prev:-1})},_onControlFocusInOut:function(t){this._useNativeControl()&&this.toggleMod("focused","yes","","focusin"===t.type)
},_onMouseDown:function(t){this._isControlFocused()&&t.preventDefault()},_onKeyDown:function(t){var e=38===t.keyCode,i=40===t.keyCode,n=13===t.keyCode,s=32===t.keyCode;
if(e||i){if(t.preventDefault(),!this.isOpened())return this.open();var o=this._items.length,r=this._curItemIndex;
if(e&&0===r||i&&r>o-2)return;if(o){var a=i?1:-1,c=0;for(c=r;c>=0&&o>=c;)if(c+=a,this._isSelectableItem(this._items.eq(c))){r=c;
break}this._onEnterItem(this._items.eq(r),!0)}}(n||s)&&this._onEnterItem(this._items.eq(this._curItemIndex),!0,!0)
},_onEnterItem:function(t,e,i){this.elem("button").attr("aria-activedescendant",t.attr("id"));var n=this._curItemIndex,s=this._getItemIndex(t),o=this._items;
n>-1&&this.delMod(o.eq(n),"hovered"),s>-1&&(this._curItemIndex=s,this.setMod(o.eq(s),"hovered","yes")),i&&this._selectedIndex(this._curItemIndex),e&&this._scrollToCurrent()
},_onLeaveItem:function(t){var e=this._curItemIndex;e>-1&&e===this._getItemIndex(t)&&(this.delMod(this._items.eq(e),"hovered")._curItemIndex=-1)
},_onSelectItem:function(t){return this._isSelectableItem(t)&&this._selectedIndex(this._curItemIndex),this.close()
},_onButtonFocus:function(){this.setMod("focused","yes")},_findScrollableElemOutsidePopup:function(){if(null===this._scrollableElemOutsidePopup){var t,e=this._getPopup().domElem;
do e=e.parent(),t=e.css("overflow-y");while("scroll"!==t&&"auto"!==t&&"HTML"!==e.prop("tagName"));this._scrollableElemOutsidePopup=e
}return this._scrollableElemOutsidePopup},_onButtonBlur:function(){if(this.isOpened()&&this._isPopupFocused())if(r){var t=this._findScrollableElemOutsidePopup(),e=t.scrollTop();
this._focusButton(),t.scrollTop(e)}else this._focusButton();else this.delMod("focused")},_onButtonPress:function(){this.toggleMod("opened","yes","")
},_focusButton:function(){return this._getButton().setMod("focused","yes"),this},_blurButton:function(){return this._getButton().delMod("focused"),this
},_isPopupFocused:function(){try{return this._getPopup().containsDomElem(t(document.activeElement))}catch(e){return!1
}},_buttonText:function(t){return"undefined"==typeof t?this._getButton().elem("text").text():(this._getButton().elem("text").html(t||" &nbsp; "),o&&this.domElem.parent().css("outline",""),void 0)
},_isOutsideClicked:function(e,i){return this.containsDomElem(t(i.target))},_getItemIndex:function(e){return t.inArray(e.get(0),this._items)
},_getSelectedText:function(){return this.elem("control").find(":selected").text()},_getSelectedIndex:function(){return this.elem("control").prop("selectedIndex")
},_isSelectableItem:function(t){var e;return e=this.hasMod(t,"disabled","yes")||this.hasMod(t,"label","yes")?!1:!0
},_getButton:function(){return this._button||(this._button=this.findBlockOn("button","button"))},_getRowHeight:function(){return this.findElem(this._getPopup().domElem,"item").outerHeight()
},_isControlFocused:function(){try{return this.containsDomElem(t(this.__self.doc[0].activeElement))}catch(e){return!1
}},destruct:function(){this._outPopup&&this._outPopup.un("outside-click"),this.delMod("opened");var t=this._popup;
t&&t.domElem&&t.destruct(),this.__base.apply(this,arguments)},getDefaultParams:function(){return{rows:15,popupMods:{direction:"down"}}
}},{live:function(){return this.liveBindTo("control","change",function(){this._onSelectChange()}),this.liveBindTo("control","focusin focusout",function(t){this._onControlFocusInOut(t)
}),this.liveBindTo("mousedown",function(t){this._onMouseDown(t)}),!1}})}(jQuery,BEM),_borschik("K1E8nXnim3Sheu_8rkXQxT3_QP0")&&!function(t,e){var i=t.browser.opera&&t.browser.version<15;
e.DOM.decl("select",{onElemSetMod:{item:{hovered:function(){i&&this._popup.domElem.css("display","inline").css("display","")
}}}})}(jQuery,BEM),_borschik("6zMBK-28tGknPGEZxiK-D4s67O0")&&!function(t){function e(t,e,i){var n={block:"select",elem:"item",content:{elem:"text",tag:"span",content:e||" &nbsp; "},elemMods:{}};
return i&&(n.elemMods=i),n}function i(t){function i(t,n){var c=t.length;if(c){var u=0;do{var l=$(t[u]),h=l.attr("disabled")&&{disabled:"yes"};
if(l.is("optgroup")){a=!0,!l.prev().is("optgroup")&&u>0&&o.push(s),r.push(o),o=[],o.push(e(l,l.attr("label"),$.extend({label:"yes"},h,n))),i(l.children(),$.extend({inner:"yes"},h,n));
var d=o;o=r.pop(),o.push({block:"select",elem:"group",content:d})}else o.push(e(l,l.text(),$.extend(h,l.is(":selected")&&{selected:"yes"},n)))
}while(++u<c||(a=!1))}}var n="select",s={block:n,elem:"separator",tag:"i"},o=[],r=[],a=!1;return i(t),BEMHTML.apply(o)
}t.DOM.decl("select",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._initButton()}},_initButton:function(){this._getButton().on("focus",this._onButtonFocus,this).on("blur",this._onButtonBlur,this).on("press",this._onButtonPress,this)
},_redrawList:function(){var e,n=this,s=this._getPopup().domElem;return t.DOM.update(this.findElem(s,"list"),i(this.elem("control").children())),e=this.findElem(s,"item"),this._curItemIndex=-1,this._items=e.filter(function(){return!n.hasMod($(this),"label","yes")
}),this}})}(BEM),_borschik("AlvFf0ZmeOjMXrxeeDmVFScrWtQ")&&BEM.DOM.decl("select",{_redrawList:function(){this.__base();
var t=this;this.bindTo(t._items,{mouseup:function(e){1===e.which&&(e.preventDefault(),t._onSelectItem(e.data.domElem))
},mouseover:function(e){t._onEnterItem(e.data.domElem)},mouseout:function(e){t._onLeaveItem(e.data.domElem)
}})}}),_borschik("-ApeJueH4mFcDiKObOyfT2oRUAU")&&BEM.DOM.decl("select",{onSetMod:{opened:{yes:function(){if(this.hasMod("disabled","yes"))return!1;
this._drawPopup();var t=this.findElem(this._popup.domElem,"item","selected","yes");this.elem("button").attr({"aria-activedescendant":t.attr("id"),"aria-expanded":!0})
},"":function(){this.elem("button").attr("aria-expanded",!1).removeAttr("aria-activedescendant"),this._getPopup().hide()
}}},_getPopup:function(){if(this._popup)return this._popup;var t=this,e=t.params,i=t.__self.getName(),n={block:i,elem:"list"},s={block:i,elem:"popup",elemMods:{}},o={animate:"no"},r={directions:[{to:"bottom",axis:"left",offset:{top:8}},{to:"top",axis:"left",offset:{bottom:8}}]};
["size","layout","theme","width"].forEach(function(e){t.hasMod(e)&&(s.elemMods[e]=t.getMod(e))}),$.extend(s.elemMods,e.elemPopupMods),$.extend(o,e.popupMods),$.extend(r,e.popupParams);
var a=$(BEMHTML.apply({block:"popup",mods:o,mix:[s],js:r,content:{elem:"content",content:n}}));return BEM.DOM.append(this.domElem,a),(t._popup=t.findBlockOn(a,"popup")).on({show:function(){t._curItemIndex=t._getSelectedIndex();
var e=t._items.eq(t._curItemIndex);t.delMod(t._items,"selected").setMod(e,"hovered","yes").setMod(e,"selected","yes")
},"outside-click":function(e,i){t._isOutsideClicked(e,i)?e.preventDefault():t._blurButton()},hide:function(){t.delMod("opened").delMod(t._items,"hovered").delMod(t.findElem(t._popup.domElem,"popup"),"scrollable")
}}).bindTo("mousedown",function(t){t.preventDefault()}),t._redrawList(),t._outPopup=t.findBlockOutside("button","popup"),t._outPopup&&t._outPopup.on("outside-click",function(e,i){t._popup.containsDomElem($(i.target))&&e.preventDefault()
}),t._popup},_calcPopupDimensions:function(){this._popupContent||(this._popupContent=this._getPopup().findBlockInside("popup").elem("content"));
var t=parseInt(this.params.rows,10)||!1;if(t&&this.findElem(this._popupContent,"item").size()>t){this._rowHeight=this._getRowHeight();
var e=parseInt(this._getPopup().domElem.css("height"),10);if(e>t*this._rowHeight)this._getPopup().setSize({height:t*this._rowHeight}),this.setMod(this.findElem(this._getPopup().domElem,"popup"),"scrollable","yes");
else{var i=t*this._rowHeight+"px";this._getPopup().domElem.css("height")!==i&&this._getPopup().setSize({height:i})
}}else this._getPopup().setSize({height:"auto"})},_drawPopup:function(){var t=this.findBlockInside("select"),e=this._getPopup();
e.show(t),this._calcPopupDimensions(),this._scrollToCurrent()},_scrollToCurrent:function(){if(this._popupContent&&!(this._curItemIndex<0)){var t,e=this._items.eq(this._curItemIndex).get(0).offsetTop,i=this._popupContent,n=i.scrollTop(),s=e-n,o=2*this._rowHeight;
s>i.height()-o?t=e-o:n&&o>s&&(t=e-i.height()+o),t&&i.scrollTop(t)}}},{SHADOW_OFFSET:1}),_borschik("RqJ7dq26IiGblpEVzL00p-hrs1A")&&BEM.DOM.decl("video-thumb",{},{live:function(){this.liveBindTo("click",function(t){this.getMod("playable")&&t.preventDefault()
})}}),_borschik("1daRn97bWIDV25CqmnAO5VIc6a8")&&!function(t,e){if(t.addEventListener&&t.getComputedStyle&&Function.prototype.bind){var i="76",n="487",s="238",o="690",r="836",a="1042",c="1132",u="1133",l="1134",h="1135",d={MIN_HEIGHT:16,probeElem:null,probeClass:"adbanner advblock b-adv b-banner bannerad reklama pagead sideads spec-adv sponsoredlinks",probeId:"adbanner",probeStyle:"position: absolute !important; visibility: hidden !important; height: 9px !important",params:null,counterParams:{dtype:"yact",path:o+"."+c},vars:{},isMSIE:navigator.userAgent.indexOf("Trident")>-1,detect:function(i){this.params=i,this.prepareTests();
for(var n,s=0,o=this.tests.length;!n&&o>s;s++)n=this.tests[s].call(this);return!n&&this.isMSIE?"complete"==e.readyState?this.doDeferredTests():t.addEventListener("load",this.doDeferredTests.bind(this),!1):(this.report(n),void 0)
},doDeferredTests:function(){for(var t,e=0,i=this.deferredTests.length;!t&&i>e;e++)t=this.deferredTests[e].call(this);
this.report(t)},report:function(t){var e=this.check();e&&!t&&(t=r),t?this.vars[i]=t:this.setCookie(!1),this.send()
},check:function(){var t=this.params.inquire,e=[],i=[];for(var o in t)if(t.hasOwnProperty(o)){i.push(o);
var r=!0,a=t[o];if(a instanceof Array)for(var c=a.length;c--&&r;)r=this.checkBlock(a[c]);else r=this.checkBlock(a);
r||e.push(o)}return i.length&&(this.vars[n]=i),e.length&&(this.setCookie(!0),this.vars[s]=e),!!e.length
},checkBlock:function(i){var n=e.querySelector(i),s=n&&t.getComputedStyle(n,"");return!(!n||"none"==s.display||"visible"!=s.visibility||"1"!=s.opacity||s.MozBinding&&s.MozBinding.indexOf("abp")>-1||parseInt(s.height,10)<this.MIN_HEIGHT)
},send:function(){this.vars[a]=encodeURIComponent(navigator.userAgent),(new Image).src=[this.params.counterUrl,this._stringify(this.counterParams),this._stringify(this.vars),"*"].join("/")
},_stringify:function(t,e){var i=[];e||(e="/");for(var n in t)t.hasOwnProperty(n)&&null!=t[n]&&i.push(n+"="+t[n]);
return i.join(e)},setCookie:function(t){for(var i=(e.cookie||"").split(/\s*;\s*/),n=String(location.host),s="."+n.substring(n.indexOf("yandex")),o="Tue, 19 Jan 2038 03:14:00 GMT",r="; expires="+o+"; domain="+s+"; path=/",a=2592e3,c=[],u=!1,l=i.length;!c.length&&l--;)"yp="==i[l].substring(0,3)&&(c=i[l].substring(3).split(/#|%23/));
for(var l=0,h=c.length;!u&&h>l;l++){var d=c[l].split(".");if("los"==d[1])if(u=!0,t){if("0"!=d[2])return;
d[2]="1",c[l]=d.join(".")}else c.splice(l,1)}t&&!u&&c.push(Math.round(.001*new Date+a)+".los.1"),(t||u)&&(e.cookie="yp="+c.join("#")+r)
},prepareTests:function(){"MozBinding"in e.body.style?this.tests.push(function(){var i=this.createTestElement(),n=t.getComputedStyle(i,"").MozBinding;
return e.body.removeChild(i),n&&n.indexOf("about:abp")>-1?u:void 0}):t.opera&&t.opera.version()<13?this.tests.push(function(){for(var t=e.querySelectorAll('style[type="text/css"]'),i=0,n=t.length;n>i;i++){var s=t[i].sheet.cssRules;
if(s.length){var o=s[0].selectorText;if(o&&o.toLowerCase().indexOf("#ad")>-1)return 20==o.split(",").length?u:c
}}}):this.tests.push(function(){for(var t=e.documentElement.webkitShadowRoot||e.documentElement.shadowRoot,i=t?Array.apply(null,t.getElementsByTagName("style")):[],n=Array.prototype.slice.call(e.querySelectorAll('head>style[type="text/css"]'),0),s=i.concat(n),o=0,r=s.length;r>o;o++){var a,l=s[o].sheet.cssRules;
if(l.length){if(1==l[0].type&&(a=l[0].selectorText,a.toLowerCase().indexOf("#ad")>-1&&20==a.split(",").length))return u;
var h=l[l.length-1];if(1==h.type&&(a=h.selectorText,a.toLowerCase().indexOf("#ad")>-1&&1e3==a.split(",").length))return c
}}}),this.isMSIE?this.deferredTests.push(this.doTraitTest):this.tests.push(this.doTraitTest)},doTraitTest:function(){var i=this.createTestElement(),n=t.getComputedStyle(i,null),s=n.display,o=parseInt(n.height,10);
return e.body.removeChild(i),"none"!=s&&o?void 0:r},createTestElement:function(){var t=this.probeElem||(this.probeElem=e.createElement("div"));
return t.className=this.probeClass,t.id=this.probeId,t.style.cssText=this.probeStyle,e.body.appendChild(t),t
},tests:[function(){if("undefined"!=typeof adguard)return h;this.styleLinks||(this.styleLinks=e.querySelectorAll('head>link[rel="stylesheet"]'));
for(var t=0,i=this.styleLinks.length;i>t;t++)if(this.styleLinks[t].href.indexOf("adguard")>-1)return h
},function(){this.styleLinks||(this.styleLinks=e.querySelectorAll('head>link[rel="stylesheet"]'));for(var t=0,i=this.styleLinks.length;i>t;t++)if(this.styleLinks[t].href.indexOf("interceptedby.admuncher.com")>-1)return l
}],deferredTests:[function(){return null!=e.body.getAttribute("abp")?u:void 0}]};return BEM&&BEM.DOM&&BEM.DOM.decl("inquire",{onSetMod:{js:function(){var t=BEM.blocks["i-global"].param("click-host");
if(!t){var e=location.hostname.match(/^yandex(?:.[a-z]+)+$/i);t="//"+(e?e[0]:"yandex.ru")+"/clck"}this.params.counterUrl=t+"/click",d.detect(this.params)
}}}),d}}(window,document),_borschik("A2zUAQ17mQURQUnx2xM4xXCMykE")&&BEM.DOM.decl("main",{onSetMod:{js:function(){this.__base.apply(this,arguments)
}},isPanelOpened:function(){return!this.hasMod("right-panel-hidden")},openPanel:function(){this.hasMod("right-panel-hidden","yes")&&(this.delMod("right-panel-animate"),this.delMod("right-panel-hidden"),this.bindEvents(),this.syncScroll(),this.trigger("panelOpened"))
},closePanel:function(t){this.hasMod("right-panel-hidden","yes")||(t&&this.setMod("right-panel-animate","no"),this.setMod("right-panel-hidden","yes"),this.unbindEvents(),this.trigger("panelClosed"))
},togglePanel:function(){this.hasMod("right-panel-hidden","yes")?this.openPanel():this.closePanel()},_onEventsSomewhereElse:function(t){$(t.target).filter(this.__self._activeElements).length||$(t.target).parents(this.__self._activeElements).length||(this.closePanel(),this.unbindEvents())
},bindEvents:function(){this.bindToDoc("leftclick.mainRight tap.mainRight",this._onEventsSomewhereElse)
},unbindEvents:function(){this.unbindFromDoc("leftclick.mainRight tap.mainRight")}},{_activeElements:[".serp-item__preview-btn",".serp-item_preview-active_yes",".z-images__link",".main__right-inner",".content-preview",".i-geo-point__cont",'[target="_blank"]',"ymaps",".video-thumb",".popup"].join()}),_borschik("_iIGv8xTYlyqhzr-QVDYY4x30Ws")&&BEM.DOM.decl("main",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindToWin("scroll.mainRight",this.syncScroll,this),this.bindToWin("resize",this.syncScroll,this),this.bindToDoc("keydown",this._keyControls,this),this.on("panelClosed",this._unfixCenterHeight,this),/MSIE 8/i.test(navigator.userAgent)&&(this.ieOnlyModsSetup(),this.bindToWin("resize",$.throttle(this.ieOnlyModsSetup,100)))
}},_throttleTrigger:$.throttle(function(t){this.trigger(t)},200),ieOnlyModsSetup:function(){var t=BEM.DOM.win.width(),e={s:843,m:943,l:1296},i="xs";
["s","m","l"].forEach(function(n){t>e[n]&&(i=n)}),this.setMod("size",i)},_keyControls:function(t){if(("INPUT"!==t.target.tagName||"text"!==t.target.name)&&this.isPanelOpened()){var e=27;
t.keyCode===e&&this.closePanel()}},_fixCenterHeight:function(t){this.findElem("center").css({"min-height":t})
},_unfixCenterHeight:function(){this.findElem("center").css({"min-height":0})},syncScroll:function(){if(this.isPanelOpened()){this._content=this._content||this.findBlockInside("content").elem("left"),this._entityCard=this._entityCard||this.findBlockInside("z-entity-card");
var t=BEM.DOM.win,e=BEM.DOM.doc,i=this._content.offset().top,n=this.elem("center").height(),s=this.elem("right-inner"),o=this.elem("right"),r=o.offset().top,a=parseInt(s.css("margin-top"),10),c=t.scrollTop(),u=a-c+this.prevScroll,l=s.height(),h=this.prevScroll&&0>=u&&l>o.height();
if(l>n)return this._fixCenterHeight(l+76),this.syncScroll(),void 0;0>=c&&(u=0),(c+t.height()>=e.height()||l+u<o.height())&&(u=o.height()-l),(!o.isMedia("main__right_large_yes")||this.hasMod(o,"size","l"))&&i>r&&(u=i-r,h=!0),s.css("margin-top",h?u:0),this.prevScroll=t.scrollTop()
}}}),_borschik("Xzas17HTgIqnkrqLaPV_CVdALkE")&&BEM.DOM.decl("main",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this.hasMod(this.elem("left"),"fixed","yes")&&(this._html=BEM.DOM.doc[0].documentElement,this._body=BEM.DOM.scope[0],this._toggleScrollHandler(),this._repositionMenu(),this._repositionMenu=$.throttle(this._repositionMenu,50),this.bindToWin("resize",$.throttle(this._toggleScrollHandler,100)))
}}},_repositionMenu:function(t){var e=this._html.scrollLeft||this._body.scrollLeft,i=Math.min(e,this._maxScrollLeft),n=Math.min(-i,0);
void 0===t&&(this._currentScrollLeft=0),(void 0===t||i!==this._currentScrollLeft)&&this.elem("left").css("left",n),this._currentScrollLeft=i
},_toggleScrollHandler:function(){var t=100;this._maxScrollLeft=this._body.scrollWidth-this._body.offsetWidth,0!==this._maxScrollLeft?(this._isOnScrollBound||this.bindToWin("scroll.mainLeft",this._repositionMenu),this._isOnScrollBound=!0):this._isOnScrollBound&&(this.unbindFromWin("scroll.mainLeft"),this._isOnScrollBound=!1),BEM.DOM.win.width()-this._previousWinWidth>t&&this._repositionMenu(),this._previousWinWidth=BEM.DOM.win.width()
}}),_borschik("CM-4F8bj_WjOAVbOn-v-gK4x98o")&&BEM.DOM.decl("internal-stripe",{onSetMod:{js:function(){this.params.counter&&this.bindToWin("scroll",$.debounce(this._onScroll,50))
}},_onScroll:function(){var t=this.domElem;BEM.DOM.win.scrollTop()+BEM.DOM.win.height()>t.offset().top+t.height()&&(w.apply("",[].concat(this.domElem[0],this.params.counter)),this.unbindFromWin("scroll",this._onScroll))
}}),_borschik("-oI6QfJWZ9HeziV5jKVANVfzBIM")&&BEM.decl("suggest2-popup",{onSetMod:{js:{inited:function(){this._popup=this.params.popup,this._popup.on("hide",function(){BEM.blocks["suggest2-detect"].isPressedEscape()&&this.trigger("hide",{})
},this),this.bindSuggestEvents()}}},show:function(t){return this._popup.domElem?(t&&this._popup.setContent(t),this.isShown()?this:(this.trigger("preshow"),this._popup.show(this.params.owner),this.trigger("show"),this)):this
},hide:function(t){return this.isShown()&&(this._popup.hide(),this.trigger("hide",t||{})),this},setContent:function(t){return this._popup.setContent(t),this
},isShown:function(){return this._popup?this._popup.isShown():!1},owner:function(t){return t?(this.params.owner=t,this):this.params.owner
},getOwnerPos:function(){return this._popup.getOwnerPos()||{}},get:function(){return this._popup},width:function(t){return void 0===t?this._popup.domElem.outerWidth():(this._popup.domElem.outerWidth(t),this)
},destruct:function(){return this._popup?this._popup.destruct():void 0},bindSuggestEvents:function(){return this.params.suggest.on({select:function(t,e){this.hide(e)
},update:function(t,e){e.items.length||this.hide({response:"empty"})}},this),this}}),_borschik("SNoAgYDmlIpAu1IYY5yHk0kUVM8")&&BEM.DOM.decl("suggest2-detect",{onSetMod:{js:{inited:function(){this.bindToDoc("keydown",function(t){this.__self._pressedKeyCode=t.which
},this).bindToDoc("keyup",function(){this.__self._pressedKeyCode=null},this)}}}},{_pressedKeyCode:null,isPressedEscape:function(){return 27===this._pressedKeyCode
},isSupportInlineSVG:function(){var t=document.createElement("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)
}}),_borschik("GDdgcllydYlFq0gCqldLRHsmado")&&BEM.DOM.decl("header",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this.bindToWin("resize",$.throttle(this._onResize,150)),this._collapseUserIfNeeded()
}}},_onResize:function(){this._collapseUserIfNeeded()},_onUserUpdatesName:function(){this._collapseBreakpoint=null,this._collapseUserIfNeeded()
},_collapseUserIfNeeded:function(){var t=this._getUser();t&&t.toggleCollapsed(this._getCollapseBreakpoint()>=this.elem("nav").width())
},_getCollapseBreakpoint:function(){return this._collapseBreakpoint||(this._collapseBreakpoint=this._getNavItemsWidth()+this.__self.NAV_ITEMS_GAP),this._collapseBreakpoint
},_getNavItemsWidth:function(){var t=0;return this.elem("nav").children().each(function(){t+=$(this).outerWidth(!0)
}),t},_getUser:function(){return this._user?this._user._isDestructing&&(this._collapseBreakpoint=null,this._user=this.findBlockInside("user")):(this._user=this.findBlockInside("user"),this._user&&this._user.on("update-name",this._onUserUpdatesName,this)),this._user
}},{NAV_ITEMS_GAP:10,live:!1}),_borschik("poiEVpac9CiApb3Eu__AzBIG1tA")&&BEM.DOM.decl("header",{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOutside("b-page").findBlockInside("main");this.bindTo(this.elem("action","type","adv"),"pressed",function(){this.findBlockInside("advanced-search").initBlock(),this.setMod("type","advanced"),t.setMod("kind","advanced-search")
}),this.bindTo(this.elem("action","type","adv"),"released",function(){this.findBlockInside("advanced-search").reset(),this.delMod("type"),t.delMod("kind")
}),this.params.advPressed&&this.afterCurrentEvent(function(){this.setMod(this.elem("action","type","adv"),"pressed","yes")
}),this.bindTo(this.elem("action","type","srv"),"pressed",function(){this.findBlockInside("services-table").updateServicesLink()
}),this.searchInput=this.findBlockInside("search").findBlockInside("input","input"),BEM.channel("header").on("init",function(t,e){this.updateData(e,!0)
}.bind(this.searchInput)),this.findBlockInside("suggest2").on({preshow:function(){this.setMod(this.elem("main"),"line","no")
},hide:function(){this.delMod(this.elem("main"),"line")}},this)}}}),_borschik("-w3d7S9LFlDSwxJ0-elRe3v-sCA")&&!function(t){var e=t.event.special.outsideclick={add:function(i){t(document).on("click."+i.guid,e.handler.bind(this))
},remove:function(e){t(document).off("click."+e.guid)},handler:function(e){t.contains(this,e.target)||(e.type="outsideclick",t.event.handle.apply(this,arguments),e.type="click")
}}}(jQuery),_borschik("3bzBsUY4VQ2BfUcU-p8ytRFCXzc")&&!function(t,e){var i=t.browser.opera&&t.browser.version<13;
e.DOM.decl("header",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._openedSlide=null
}}},onElemSetMod:{action:{pressed:{"":function(t){this.elemParams(t).releaseByDocumentScroll&&this.unbindFromWin("scroll"),this._openedSlide&&(this._openedSlide.unbindFromDoc("click"),this._openedSlide=null),this.unbindFromWin("closeUnder"),t.attr({"aria-pressed":!1,"aria-expanded":!1}),t.trigger("released")
},yes:function(t,e){var i=this;i.delMod(this.elem("action"),e).bindToWin("closeUnder",function(){i.delMod(t,e)
}),i.elemParams(t).releaseByHeaderOutsideClick&&i.afterCurrentEvent(function(){if(i.domElem){var e=i._openedSlide=i._getOpenedSlide(t);
e&&i._slideOnClick(e,t)}}),i.elemParams(t).releaseByDocumentScroll&&this.bindToWin("scroll",function(){i._onScroll(t)
}),t.attr({"aria-pressed":!0,"aria-expanded":!0}),t.trigger("pressed")}}}},_getOpenedSlide:function(t){var e,i=this.buildSelector("action","type",this.getMod(t,"type"));
return this.findBlocksInside("slide").some(function(t){return t.params.rel&&t.params.rel[0].elem===i?(e=t,!0):void 0
}),e},_onScroll:function(t){this.delMod(t,"pressed")},_slideOnClick:function(e,i){var n=this;e.bindToDoc("click",function(s){var o=t(s.target);
e.containsDomElem(o)||o.is(n.elem("main"))||o.is(n.elem("action-i"))||n.delMod(i,"pressed")})},_onActionClick:function(t){t.preventDefault(),i&&t.stopPropagation(),this.toggleMod(t.data.domElem,"pressed","yes","")
},_onActionKeyup:function(t){(!i&&13===t.keyCode||32===t.keyCode)&&(t.preventDefault(),this.toggleMod(t.data.domElem,"pressed","yes",""))
},destruct:function(){this._openedSlide&&(this._openedSlide.unbindFromDoc("click"),this._openedSlide=null),this.__base.apply(this,arguments)
}},{live:function(){return this.liveBindTo("action","leftclick tap",function(t){this._onActionClick(t)
}).liveBindTo("action","keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||this._onActionKeyup(t)}),this.__base.apply(this,arguments)
}})}(jQuery,BEM),_borschik("c43duPjUFt_knLMRSyOpx9v_mpE")&&!function(t){var e=t.browser,i=e.opera&&e.version<12.1?"keypress":"keydown";
BEM.DOM.decl("tooltip",{onSetMod:{js:{inited:function(){this._popup=null,this._owner=null}},shown:{yes:function(){if(!this._owner)throw new Error("Owner is unset");
this._getPopup().show(this._owner).unbindFromDoc(i)},"":function(){this._getPopup().hide()}}},getOwner:function(){return this._owner
},setOwner:function(t){return this._owner=t,this},setContent:function(t){return this._getPopup().setContent(t),this
},redraw:function(){return this.hasMod("shown","yes")&&this._getPopup().repaint(),this},destruct:function(){this.delMod("shown"),this.__base.apply(this,arguments)
},_getPopup:function(){return this._popup||(this._popup=this.findBlockOn("popup").on("show",this._onPopupShow,this).on("hide",this._onPopupHide,this)),this._popup
},_onPopupShow:function(){this.trigger("show")},_onPopupHide:function(){this.delMod("shown").trigger("hide")
},_onClick:function(){this.trigger("click").delMod("shown")}},{live:function(){this.liveBindTo("click",function(){this._onClick()
})}})}(jQuery),_borschik("0-dFyoN-QSCNB0MPKkSQ32eiMI0")&&BEM.DOM.decl("tooltip",{onSetMod:{hovered:{yes:function(){this.bindTo("mouseleave",this._onMouseLeave)
},"":function(){this.unbindFrom("mouseleave")}}},_onMouseOver:function(){this.setMod("hovered","yes")
},_onMouseLeave:function(){this.delMod("hovered")}},{live:function(){return this.liveBindTo("mouseover",function(){this._onMouseOver()
}),this.__base.apply(this,arguments)}}),_borschik("g-vKkcXTDKrS6ctWAkL0vBQaCNo")&&!function(){var t=27;
BEM.DOM.decl({block:"tooltip",modName:"autoclosable",modVal:"yes"},{onSetMod:{shown:{yes:function(){this.__base.apply(this,arguments),this.bindToDoc("keydown",this._onKeyDown)
},"":function(){this.unbindFromDoc("keydown"),this.__base.apply(this,arguments)}}},_onKeyDown:function(e){e.keyCode===t&&this.delMod("shown")
}})}(),_borschik("_TrLVuHiyhsdq_fWdnTpW7I5e3c")&&BEM.DOM.decl({block:"logo",modName:"tooltip",modVal:"yes"},{onSetMod:{js:function(){var t=this,e=this.findBlockOutside("b-page"),i=e.findBlockInside("main"),n=localStorage.getItem("last_show_tooltip"),s=+new Date,o=n?Math.round((s-n)/36e5):null,r=o>=72;
this.tooltip=e.findBlockInside({block:"tooltip",modName:"type",modVal:"tablo"}),this.isVisible=!1,this.tooltip&&(this.tooltip.on("hide",function(){t._hide()
}),!n&&localStorage.setItem("last_show_tooltip",s),parseInt(localStorage.getItem("is_first_tooltip"),10)||(localStorage.setItem("is_first_tooltip",1),this._showWithTimeout()),parseInt(localStorage.getItem("is_first_tooltip"),10)&&r&&i.bindTo("left","mouseover",function(){t.isVisible||(t._show(),t._hideWithTimeout(),localStorage.setItem("last_show_tooltip",s))
}).bindTo("left","mouseout",function(){t._clear()}))}},_showWithTimeout:function(){setTimeout(function(){this._show()
}.bind(this),5e3)},_show:function(){this._clear(),this.timer=setTimeout(function(){this.tooltip.setOwner(this).setMod("shown","yes"),this.isVisible=!0
}.bind(this),200)},_hide:function(){this.tooltip.setOwner(this).delMod("shown"),this.isVisible=!1},_clear:function(){this.timer&&clearTimeout(this.timer)
},_hideWithTimeout:function(){this.timerClear=setTimeout(function(){this._hide(),clearTimeout(this.timerClear)
}.bind(this),5e3)}}),_borschik("3uiEVziVwDpejYtaO-It-7qTG8g")&&BEM.DOM.decl({block:"logo",modName:"logotablo",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOutside("b-page"),e=t.findBlockInside("search").findBlockInside("input");this.channel("serp-request").on("success",function(){window.servicesTable.setSearchText(encodeURIComponent(e.val()))
}),this._initTablo(encodeURIComponent(e.val())),this.bindTo("mousemove",$.throttle(this._open,25)).bindTo("mouseleave",this._clearTimers).bindTo("mouseenter",$.debounce(this._triggerMouseEnter,100,!0)).bindTo("mouseleave",$.debounce(this._closeTableauWithDelay,100,!0)),this.tableauCloseDelay=350,this.tableauTimer=null,BEM.channel("tablo-panel").on("enter",function(){this._clearTimer(this.tableauTimer)
}.bind(this))}},_clearTimer:function(t){t&&(clearTimeout(t),t=null)},_initTablo:function(t){window.servicesTable.init({searchText:t,lang:BEM.I18N.lang(),header:".header"})
},_triggerMouseEnter:function(){BEM.channel("logo").trigger("enter"),this._clearTimer(this.tableauTimer)
},_open:function(){this._clear(),this.tooltipTimer=setTimeout(function(){window.servicesTable.open(),this._hideTooltip()
}.bind(this),100)},_closeTableauWithDelay:function(){this.tableauTimer=setTimeout(function(){this._close(),this._clearTimer(this.tableauTimer)
}.bind(this),this.tableauCloseDelay)},_close:function(){window.servicesTable.close()},_clearTimers:function(){this.tooltipTimer&&clearTimeout(this.tooltipTimer)
},_hideTooltip:function(){this.tooltip&&this.tooltip.setOwner(this).delMod("shown")}}),_borschik("vjZQ5RgylAmUQJdWCS8Ij3Qi2NM")&&BEM.DOM.decl("services-table",{onSetMod:{js:function(){this._globalServices=this.findBlockOutside("i-services"),this._services=this.findBlocksInside("service")
}},updateServicesLink:function(){var t=this;$.each(this._services,function(){var e=this.elem("url"),i=this.getMod("name"),n=e.attr("href"),s=BEM.blocks.uri.parse(n).getRoot(),o=t._globalServices.getServicePath(i),r={maps:"source=serp_table",browser:"from=link_serp___|&banerid=0402000000"},a=r[i];
a&&(o+=(o?"&":"/?")+a),s=t._globalServices.getServiceUrl(this.getMod("name"))||s,e.attr("href",s.replace(/\/$/,"")+o)
})}},{live:!0}),_borschik("iNvEiPmqCOvImWxa082v7nPKLoU")&&!function(t,e){var i=".tabloPanel",n="open"+i,s="close"+i,o="enter",r="tablo-panel",a="tablo-panel_visibility_visible",c="tablo-panel_preset_",u="tablo-panel_visibility_hidden",l="tablo-panel__iframe",h="body",d=!1;
!d&&e.documentMode>10&&(d=!0),d&&e.documentMode<9&&(h="html"),t.TabloPanel=function(){this.tableauCloseDelay=350
},t.TabloPanel.prototype={init:function(t){this._inited||(this._setParams(t),this._setEvents(),this._buildIframe(),this._inited=!0)
},open:function(t){this._iframeInited||(this._iframeInited=!0),this._open(t)},close:function(t){this._iframeInited&&this.isOpened()&&(this._clearTimer(this.closeTimer),this._$panel.removeClass(a).addClass(u),this._params.overflowHidden&&$(h).css("overflow",this._overflow),t||this.postMessage(s),this._trigger(s))
},toggle:function(){this.isOpened()?this.close():this.open()},isOpened:function(){return this._iframeInited?!!this._$panel.hasClass(a):!1
},destruct:function(){this._iframeInited&&(this._$iframe.remove(),this._$iframe=null,this._$panel.remove(),this._$panel=null,this._iframeInited=!1,$(t).off("message",this._onmessage),this._$iframe.off())
},_iframeInited:!1,_open:function(t){if(this._iframeInited&&!this.isOpened()){var e=$(h);this._$panel.removeClass(u).addClass(a),this._params.overflowHidden&&(this._overflow=e.css("overflow"),e.css("overflow","hidden")),t||this.postMessage(n),this._trigger(n)
}},_trigger:function(e,i){if(e){var n=t.BEM;"undefined"!=typeof n&&n.channel&&(e=e.split(".")[0],n.channel("tablo-panel").trigger(e,i))
}},_setParams:function(t){t=t||{},this._params={device:t.device||"desktop",position:t.position||"left",width:t.width,top:t.top,header:t.header,container:t.container||"body",overflowHidden:t.overflowHidden,host:t.host,path:t.path,preset:t.preset,data:t.data||{},cache:t.cache,onload:t.onload}
},postMessage:function(t){try{this._$iframe[0].contentWindow.postMessage(t,"*")}catch(e){}},_buildIframe:function(){var i=this,n=$(this._params.container),s=[r,this._getDeviceClass(r),this._getPositionClass(r),u,c+this._params.preset].join(" ");
this._$panel=$('<div class="'+s+'"></div>'),this._$iframe=$("<iframe/>",{"class":l,src:this._getUrl(),frameBorder:"0",allowTransparency:"true"});
var o=this._params.top;if(!o){var a=$(this._params.header);a.length&&(o=a.outerHeight())}o&&this._$panel.css("top",o+"px");
var h=this._params.width;h&&this._$panel.css("width",h+"px"),this._$iframe.appendTo(this._$panel),this._$panel.appendTo(n),$(t).on("message",this._onmessage),this._$iframe.on("mouseenter",$.debounce(this._onPanelEnter.bind(this),100,!0)),this._$iframe.on("mouseleave",$.debounce(this._onPanelLeave.bind(this),100,!0)),$(e.body).on("keydown",this._onKeyDown.bind(this));
var d=this._params.onload;d&&this._$iframe.on("load",function(){d.apply(i,arguments)})},_getUrl:function(){var e=function(e,i){return e+"="+t.encodeURIComponent(String(i).substr(0,512))
},i=this._params,n=i.host+i.path,s=i.data,o=Object.keys(s).map(function(t){return e(t,s[t])});return i.cache===!1&&o.push(e("_",Math.floor(1e6*Math.random()))),n+(o.length?"?"+o.join("&"):"")
},_getDeviceClass:function(t){return t+"_device_"+this._params.device},_getPositionClass:function(t){return t+"_position_"+this._params.position
},_clearTimer:function(t){t&&(clearTimeout(t),t=null)},_setEvents:function(){var t=this;this._onmessage=function(e){try{var i=e.originalEvent.data;
i&&"string"==typeof i&&(i===s?t.close(!0):t._trigger(i))}catch(e){}},this._onesc=function(e){e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||27===e.keyCode&&t.close()
},this._onPanelLeave=function(){this.closeTimer=setTimeout(function(){this.close()}.bind(this),this.tableauCloseDelay)
},this._onPanelEnter=function(){this._trigger(o),this._clearTimer(this.closeTimer)},this._onKeyDown=function(){this.close()
},BEM.channel("logo").on("enter",function(){this._clearTimer(this.closeTimer)}.bind(this))}}}(this,this.document),_borschik("Di0EnOAF0cEv5pfG6rbZJHHrT5Y")&&!function(t,e,i){var n,s,o=t.servicesTable=new t.TabloPanel;
o.init=function(o){o||(o={});var r={},a=o.device||"desktop",c=o.services,u=o.lang,l=o.domain,h=e.blocks["i-global"].param("tld"),d={"com.tr":"tr",ua:"ua",kz:"kz",by:"by",com:"com"},p=d[h];
if(r.device=a,c&&(r.services=c),u&&(r.lang=u),l&&(r.domain="com.tr"===l?"tr":l),r.target="blank",r.preset=p,n=o.clid,!n&&(s=o.serviceId,!s)){var f=e&&e.blocks["i-global"];
s=f&&f.param("id")}s&&(r["service-id"]=s),t.TabloPanel.prototype.init.call(this,{device:a,width:o.width||370,top:o.top||(o.header?i:70),header:o.header,container:o.container,overflowHidden:o.overflowHidden,host:"undefined"!=typeof o.host?o.host:"//yastatic.net",path:o.path||"/tableau/tableau.html",data:r,cache:!0,preset:p,onload:function(){setTimeout(function(){this.setSearchText(o.searchText||"")
}.bind(this),0)}})},o.setSearchText=function(t){this.postMessage(JSON.stringify({fnName:"updateUrls",fnArgs:[{text:t.trim(),clid:n,serviceId:s}]}),"*")
}}(window,window.BEM),_borschik("DgYV8KJtpcC4RKBz7TlnBocQDLs")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this._val=this.elem("control").val()
},disabled:function(t,e){this.elem("control").attr("disabled","yes"===e)},focused:function(t,e){if(this.hasMod("disabled","yes"))return!1;
var i="yes"===e;i?this._focused||this._focus():this._focused&&this._blur(),this.afterCurrentEvent(function(){this.trigger(i?"focus":"blur")
})}},isDisabled:function(){return this.hasMod("disabled","yes")},val:function(t,e){if("undefined"==typeof t)return this._val;
t=null===t?"":t.toString();var i=this.elem("control");return i.val()!==t&&i.val(t),this._val=t,this.trigger("change",e),this
},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")
},getSelectionEnd:function(){var t=this.elem("control")[0],e=0;if("number"==typeof t.selectionEnd)e=t.selectionEnd;
else{var i=document.selection.createRange();if(i&&i.parentElement()===t){var n=t.value.length,s=t.createTextRange();
s.moveToBookmark(i.getBookmark());var o=t.createTextRange();o.collapse(!1),e=s.compareEndPoints("EndToEnd",o)>-1?n:-s.moveEnd("character",-n)
}}return e},_onFocus:function(){return this._focused=!0,this.setMod("focused","yes")},_onBlur:function(){return this._returnFocus?(this.afterCurrentEvent(function(){this._focus()
}),this):this.hasMod(this.elem("clear"),"pressed")?this:(this._focused=!1,this.delMod("focused"))},_focus:function(){return this.hasMod("disabled","yes")?!1:(this.elem("control").focus(),void 0)
},_blur:function(){this._returnFocus=!1,this.elem("control").blur()},destruct:function(){this._blur(),this.__base.apply(this,arguments)
}},{live:function(){this.liveBindTo("control","focusin focusout",function(t){this["focusin"===t.type?"_onFocus":"_onBlur"](t)
})}}),_borschik("TyOHpMeUkdMWf9uZdjOsOj34zLs")&&!function(){var t,e=[],i=function(){e.forEach(function(t){t.val(t.elem("control").val())
})},n=function(t){try{return t.activeElement}catch(e){}};BEM.DOM.decl("input",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._instanceIndex=e.push(this)-1;
var s=this.elem("control"),o=n(this.__self.doc[0]),r=this.params.autoFocus&&(!o||!$(o).is("input, textarea"));
(o===s[0]||r)&&(this.setMod("focused","yes")._focused=!0),t||(t=this.channel("sys").on({tick:i,idle:function(){t.un("tick",i)
},wakeup:function(){t.on("tick",i)}})),this.params.shortcut&&this.bindToDoc("keydown",function(t){t.ctrlKey&&38===t.which&&!$(t.target).is("input, textarea")&&this.setMod("focused","yes")
})}}},val:function(t,e){var i="undefined"!=typeof t,n=this.elem("control");return t=i?null===t?"":t.toString():n.val(),this._val!==t&&(this._val=t,n.val()!==t&&n.val(t),this.trigger("change",e)),i?this:t
},_focus:function(){var t=this.elem("control")[0];if(t.createTextRange&&!t.selectionStart){var e=t.createTextRange();
e.move("character",t.value.length),e.select()}else t.focus()},destruct:function(){this.__base.apply(this,arguments),this.params.shortcut&&this.unbindFromDoc("keydown"),e.splice(this._instanceIndex,1),e.slice(this._instanceIndex).forEach(function(t){t._instanceIndex--
})}},{})}(),_borschik("dwbw09YBhlVCbf44Dup_Qz9jpEo")&&BEM.DOM.decl("input",{_mayShowSuggest:!0,_hasChanged:!1,onSetMod:{js:function(){this.__base(),this.on("change",function(){this._hasChanged=!0
})}},onAjaxPrepare:function(){this._hasChanged=!1},onAjaxSuccess:function(t){var e=t.params;this._mayShowSuggest=!0,this._hasChanged||(this.updateData(e),this.delMod("focused"))
},updateData:function(t,e){if(t){!e&&this.val(t.value,{noSuggest:!0});var i=this.findBlockInside("search__hidden-inputs");
i&&i.domElem&&i.domElem.replaceWith(t.hiddenInputs)}},mayShowSuggest:function(t){return void 0!==t&&(this._mayShowSuggest=t),this._mayShowSuggest
}}),_borschik("sqkkdQr0R-IEJ1YCJckrwW_aH-c")&&!function(){var t,e=0,i=!1,n=0,s=BEM.channel("sys"),o=50;
BEM.decl("i-system",{},{start:function(){$(document).bind("mousemove keydown",function(){n=0,i&&(i=!1,s.trigger("wakeup"))
}),this._tick()},_tick:function(){var r=this;s.trigger("tick",{counter:e++}),!i&&(n+=o)>3e3&&(i=!0,s.trigger("idle")),t=setTimeout(function(){r._tick()
},o)}}).start()}(),_borschik("WIF96DABM44506iz53erQuBCzZc")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.on("change",this._updateClear)._updateClear()
}},_onBoxClear:function(){this.hasMod("clear","visibility","visible")||this.hasMod("disabled","yes")||this.setMod("focused","yes")
},_onClearClick:function(){return this.trigger("clear"),this.removeInsets&&this.removeInsets(),this.clearInput({source:"clear"})._focus()
},clearInput:function(t){return this.val("",t),this},_updateClear:function(){return this.toggleMod(this.elem("clear"),"visibility","visible","",!!this._val)
}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo("clear","mousedown",function(t){1===t.which&&this.setMod(this.elem("clear"),"pressed","yes")
}).liveBindTo("clear","leftclick tap",function(){this.delMod(this.elem("clear"),"pressed"),this._onClearClick()
}).liveBindTo("box","leftclick tap",function(){this._onBoxClear()})}}),_borschik("nKcV1Lclev9wcgpjLkM95vvGwOg")&&BEM.DOM.decl("search",{_needSend:function(t){var e,i=!1,n=this._cleanParams(BEM.blocks.uri.parse("?"+this.serialize(t)).queryParams);
return newParamsKeys=Object.keys(n),oldParams=this._cleanParams(this.location.getState().params),oldParamsKeys=Object.keys(oldParams),e=newParamsKeys.length>oldParamsKeys.length?newParamsKeys:oldParamsKeys,$.each(e,function(t,e){n[e]instanceof Array&&oldParams[e]instanceof Array&&n[e].sort().join().trim()!==oldParams[e].sort().join().trim()&&(i=!0)
}),i},_cleanParams:function(t){t=$.extend({},t);for(var e,i=["msid","tld","rnd"];e=i.shift();)t.hasOwnProperty(e)&&delete t[e];
return t},serialize:function(t){var e=this.domElem.serializeArray();return $.each(t||{},function(t,i){e.push({name:t,value:i})
}),$.param(e)}}),_borschik("EFowZf8NNnyjjxTv3fEZu3PYzFo")&&BEM.DOM.decl("search",{onSetMod:{js:function(){this.__base();
var t=this.findBlockInside("suggest2"),e=this.findBlockOutside("header"),i=e.elem("wrapper"),n=$.browser.msie,s=n&&parseInt($.browser.version,10);
this.input=this.findBlockInside("input"),this.inputClear=this.input.elem("clear"),this.suggest=this.findBlockInside("suggest2"),this.suggestCounter=this.findBlockOn("suggest2-counter"),BEM.blocks["i-ua"].canUseAjax()&&(s>9||!n)&&(this.location=BEM.blocks.location.getInstance(),this.serp=this.input.findBlockOn("serp")),this.findBlockInside("suggest2-form").on("ready",t.setOwner(i[0]&&i||e)),this.input.bindTo(this.input.elem("clear"),"click",this._onClear.bind(this)),this.bindTo("submit",this._onSubmit.bind(this)),this.suggestCounter.on("submit",function(t,e){this.setSuggestCsgParams(e)
}.bind(this)),this._rnd=0,this._lastSubmit=new Date}},setSuggestCsgParams:function(t){this.suggestCsgParams||(this.suggestCsgParams=[t.since_last_change,t.since_first_change,t.user_input.length,t.ratio.actionsCount,t.path.index,"button_by_mouse"===t.path.submit?"1":"0","edit"===t.path.state?"1":"0"].join(","))
},reSubmit:function(){this._rnd=Math.floor(1e5*Math.random()),this.domElem.submit()},_onClear:function(t){w(null,this.input.params.counterClear),t.preventDefault()
},_onSubmit:function(t,e){if(!(e&&e.item&&e.item.hasMod("interact","link"))){this.advancedSearch||(this.advancedSearch=this.findBlockOutside("b-page").findBlockInside("advanced-search")),BEM.blocks["i-global"]._params.timeSinceSearchSubmit=(new Date).getTime();
var i,n=!this.advancedSearch.isDefaultState()&&this.advancedSearch.getParams(),s={url:this.domElem.attr("action")+"?"+this.serialize()+(n?"&"+n:"")};
this.input.mayShowSuggest(!1);var o=e&&e.item&&e.item.params&&e.item.params.cgi;if(o&&o.forEach(function(t){s.url+="&"+t.join("=")
}),i=!this.serp||location.host.length+s.url.length>BEM.blocks["i-global"].param("maxAjaxUrlLength"))return document.location=s.url,!1;
var r=new Date-this._lastSubmit>5e3,a=this._needSend();return a?this._rnd=0:r&&(this._rnd=Math.floor(1e5*Math.random())),this._rnd&&(s.url+="&rnd="+this._rnd,s.history=!1),(r||a)&&(this._lastSubmit=new Date),this.suggestCsgParams&&(s.url+="&csg="+this.suggestCsgParams,this.suggestCsgParams=null),this.location.change(s),!1
}}}),_borschik("BbiMWkySNWZ1G6gXpnX1LQKoA1g")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base(),this.elem("requery-input").appendTo(this.elem("control").parent())
},requery:function(t,e){this.setMod(this.elem("control"),"visibility","yes"==e?"hidden":""),this.setMod(this.elem("requery requery-input"),"visibility","yes"==e?"visible":"")
}},showRequery:function(){this.setMod("requery","yes")},hideRequery:function(){this.delMod("requery")
},updateRequeryHidden:function(t){this.elem("requery-input").val(t+" "),this.elem("requery-hidden").html(t+"&nbsp;")
},updateRequeryVisible:function(t){this.elem("requery-visible").html(t)}}),_borschik("WcjHiBchaVDV6osyPz1XucLQleQ")&&BEM.DOM.decl("input",{onSetMod:{js:function(){if(this.__base.apply(this,arguments),this.elem("found").length){var t=this.elem("control");
$("<span/>",{"class":this.buildSelector("query-holder").slice(1)}).css({"font-size":t.css("font-size")}).text(this.val()).appendTo(this.domElem),this._controlQueryLeftOffset=parseInt(t.css("padding-left"),10)+(parseInt(t.css("border-left-width"),10)||0),this.on("change",this._toggleVisibility).bindToWin("resize",$.throttle(this._onWindowResize,100,this)).setPosition()
}}},_toggleVisibility:function(){var t=this.val()===this.elem("query-holder").text()&&this.textWidth<this.inputWidth&&!!this.elem("found").html();
this.toggleMod(this.elem("found"),"visibility","visible","",t)},setPosition:function(){var t=this.elem("control"),e=this.elem("found"),i=t.offset().left-this.domElem.offset().left+this._controlQueryLeftOffset+this.elem("query-holder").width();
this.inputWidth=t.width(),this.textWidth=e.width()+i,e.css({left:i}),this._toggleVisibility()},_onWindowResize:function(){this.inputWidth=this.elem("control").width(),this._toggleVisibility()
},setFound:function(t,e){this.elem("found").html(t),this.elem("query-holder").html(e),this.setPosition()
}}),_borschik("CPhvoQKaG_bfMOFW0g9rwlyBKB8")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindTo("found","mousedown",function(){this.setMod("focused","yes")
})}}}),_borschik("-XiGPtfAFqM741ynj06ubd05lAk")&&BEM.DOM.decl({name:"input",modName:"found",modVal:"yes"},{updateData:function(t){this.__base.apply(this,arguments),t&&this.setFound(t.found,BEM.blocks["i-common__string"].escapeHTML(t.value))
}}),_borschik("WRGGUBvfufJOnL8_d29mp4Jo8V4")&&!function(){var t=function(t){var e=t.charCode||t.keyCode||t.which||0,i=t.ctrlKey||t.altKey||t.metaKey,n=e>=48&&57>=e,s=e>=96&&105>=e,o=[e>=65&&90>=e,e>=1025&&1071>=e,0===e,231===e].some(Boolean);
return!i&&(n||s||o)};BEM.DOM.decl({name:"input",modName:"autofocus",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindToDoc("keydown",this._autoFocusBind)
},autofocus:{yes:function(){this.bindToDoc("keydown",this._autoFocusBind)},"":function(){this.unbindFromDoc("keydown")
}}},_autoFocusBind:function(e){if(!this.hasMod("focused","yes")){var i;try{i=document.activeElement.tagName.toLowerCase()
}catch(e){}if(t(e)&&"input"!==i&&"textarea"!==i){var n=this.elem("control")[0],s=this.val();if(s.length>0&&" "!==s.slice(-1)&&(s+=" ",this.val(s)),n.createTextRange){var o=n.createTextRange();
o.collapse(!1),o.select()}else n.selectionStart&&n.setSelectionRange(s.length,s.length);this.setMod("focused","yes")
}}}})}(),_borschik("xBLEh4L0LNP5BbxWVup3SN6KuaM")&&BEM.DOM.decl("input",{onSetMod:{js:{inited:function(){this.__base(),this.bindTo("service-label","tap click",function(t){t.stopPropagation()
})}}}}),_borschik("h8Cdg2uIRJ2A1Bp0ePNHPmlOHn8")&&BEM.DOM.decl("suggest2",{onSetMod:{js:{inited:function(){this.params.form||this.findBlockOutside("suggest2-form"),this._lastSubmitTime=0,this._lastBlurTime=0,this._clear()
}}},getDefaultParams:function(){return{submitBySelect:!1,updateOnEnterByKeyboard:!0,onFocus:"request",requestOnEmptyInput:!1}
},init:function(){var t=this;t.params.form.on("submit",function(){this._lastSubmitTime=(new Date).getTime(),t._clear(),t._popup.hide()
},t),t._model=t.initModel(),t._view=t.initView(),t._counter=t.initCounter(),t._model.on({response:this.setItems,reject:function(e,i){2===i.code&&(t._popup.hide(),t._clear())
}},t),t._input=t.params["suggest2-input"],t._popup=t.params["suggest2-popup"],t.bindEvents()},initModel:function(){return BEM.create("suggest2-model",this.params)
},getModel:function(){return this._model},initView:function(){var t=this.getMod("theme")||"normal",e={theme:t};
return"large"===t&&(e.group="type"),"label"===this.getMod("group")&&(e.group="label"),BEM.create({block:"suggest2-view",mods:e})
},getView:function(){return this._view},initCounter:function(){return this.params.counter?this.params.counter.initValues().bindEvents():void 0
},getCounter:function(){return this._counter},setDataConverter:function(t){return this.getModel().getProvider().convert=t,this
},setRequestData:function(t){return this.getModel().getProvider().getRequestData=t,this},setRequestUrl:function(t){return this.getModel().getProvider().getRequestUrl=t,this
},setOwner:function(t){return this._popup.owner(t),this},bindEvents:function(){var t=this;return t._input.bindEvents({change:t._onChange,focus:t._onFocus,blur:t._onBlur},t),t._popup.on({preshow:function(){this.trigger("preshow")
},show:function(){this.trigger("show")},hide:function(t,e){this.trigger("hide",e)}},this),t.params.button&&t.params.button.bindTo("mousedown",function(){t._input.realVal(t._input.val()),t._popup.hide()
}),t},setItems:function(t,e){var i=this;return i._isFormSubmitDurinQuery()||!e.data.items.length?(i._popup.hide(),i._clear()):i._input.val()!==e.val?i._clear():(i._text=e.val,i._pos=e.pos,i._meta=e.data.meta||{},i._popup.show(i._view.html(e.data.items,i._meta)).width(i.getPopupWidth()),i._items=i.findBlocksInside("suggest2-item"),i._clearItems().trigger("update",{val:i._text,pos:i._pos,items:i._items}),i)
},getItems:function(){return this._items||[]},isBlur:function(){return this._isBlur},getPopupWidth:function(){},_isFormSubmitDurinQuery:function(){return this._lastSubmitTime?this._model.isTimeInRequestInterval(this._lastSubmitTime)?(this._lastSubmitTime=0,!0):!1:!1
},_onChange:function(t,e){this._model.request(this._input.realVal(this._input.val()),this._input.getCaretPosition(),e)
},_onFocus:function(){this._isBlur&&this.params.onFocus&&this._isLastBlurTimeLater(300)&&(this.getItems().length&&this._input.val()===this._text?(this._clearItems(),this._popup.show()):this._isMouseDown||"request"!==this.params.onFocus||this._onChange())
},_onBlur:function(){this._lastBlurTime=(new Date).getTime(),this._isBlur?(this._clear(),this._popup.hide()):this._freezeInputFocus?(this._clear(),this._input.focus()):this._isMouseDown&&this._input.focus(),this._isBlur=!0
},_getItemIndex:function(t){return this.getItems().indexOf(t)},_clear:function(){return this._isBlur=!0,this._freezeInputFocus=!1,this._clearItems()
},_clearItems:function(){return this._isMouseDown=!1,this._enterItemIndex=-1,this._unselectItems()},_isLastBlurTimeLater:function(t){return(new Date).getTime()-this._lastBlurTime>t
},_unselectItems:function(t){var e=t?[].slice.call(arguments):this.getItems();return e.forEach(function(t){t.onLeave()
}),this},_onSelectItem:function(t,e){var i=this,n=i._getItemIndex(t),s=t.onSelect(e).val();return i._text=i._input.realVal(s),i._isBlur=!0,i._freezeInputFocus=!1,i.trigger("select",{val:i._text,pos:i._pos,item:t,meta:i._meta,itemIndex:n,byKeyboard:e}),s!==!1&&(i._items=[],i.params.submitBySelect&&i.params.form.submit()),n
},_onDownItem:function(){this._isBlur=!1,this._isMouseDown=!0}}),_borschik("EFxPXjRYzoTQP9Q4i5r8fvoP4-0")&&BEM.DOM.decl("suggest2",{bindEvents:function(){var t=this;
return t._input.bindEvents({keydown:t._onKeyDown,keyup:t._onKeyUp,keypress:t._onKeyPress},t),BEM.blocks["suggest2-item"].on(t.domElem,{mouseover:function(e){t._onEnterItem(e.block,!1)
},mouseout:function(e){t._onLeaveItem(e.block,!1)},mousedown:function(){t._onDownItem()},leftclick:function(e){t._onSelectItem(e.block,!1)
}}),t.__base.apply(t,arguments)},_onKeyDown:function(t){var e=this.__self.keyboard,i=t.which;!this._popup.isShown()||i!==e.up&&i!==e.down||(t.preventDefault(),this._enterByKeyboard(i))
},_onKeyUp:function(t){var e=this.__self.keyboard;if((t.which===e.left||t.which===e.right)&&(this.trigger("change-cursor-pos"),this._model.request(this._input.realVal(this._input.val()),this._input.getCaretPosition())),t.which===e.right&&~this._enterItemIndex&&this._enterItemByKeyboard){var i=this._items[this._enterItemIndex];
i&&this.trigger("ahead",{item:i,val:"link"===i.getMod("interact")?i.elem("text").text():i.val()})}},_onKeyPress:function(t){if(t.which===this.__self.keyboard.enter&&~this._enterItemIndex&&this._enterItemByKeyboard){var e=this._items[this._enterItemIndex];
e&&(t.preventDefault(),this._onSelectItem(e,!0))}},_enterByKeyboard:function(t){var e=t-39,i=this._items.length,n=this._enterItemIndex+e;
return-1===n||n===i?(this._enterItemIndex=n,this._unselectItems(this._items[n]),this.trigger("out",{val:this._text,byKeyboard:!0})):(0>n?n=i-1:n>=i&&(n=0),this._onEnterItem(this._items[n],!0),void 0)
},_onEnterItem:function(t,e){this._enterItemIndex=this._getItemIndex(t),this._enterItemByKeyboard=e,this._unselectItems(),t.onEnter(e)
},_onLeaveItem:function(t){this._clearItems()._unselectItems(t)}},{keyboard:{enter:13,left:37,up:38,right:39,down:40},live:function(){this.liveBindTo("mousedown",function(){this._onDownItem()
})}}),_borschik("p5Oz7ci6xrAm6qFErv_c1SIsT_k")&&BEM.DOM.decl("suggest2",{setRequestUrl:function(t){return this.getModel().getProvider().getRequestUrl=t,this
},_onChange:function(t,e){e&&e.noSuggest||this.__base.apply(this,arguments)}}),_borschik("7h1KDJvpuB7WA_M_Kleiis5TrFw")&&BEM.decl("suggest2-model",{onSetMod:{js:{inited:function(){this._requests=[]
}}},destruct:function(){return this._provider&&this._provider.destruct(),this.__base.apply(this,arguments)
},getProvider:function(){return this._provider?this._provider:(this._provider=this.setProvider(this.params),this._provider)
},setProvider:function(t){return this._provider=BEM.create("suggest2-provider",t),this._provider},getCancelRequestConditions:function(){return[{block:"suggest2",show:!1},{block:"suggest2",event:"select"},{block:"suggest2",event:"out"},{block:"suggest2-item",show:!1},{block:"suggest2-popup",event:"hide"},{suggest:!1},{source:"sample"}]
},request:function(t,e,i){var n=this._isNeedRequest(t,i);if(!n.need)return this.trigger("reject",{val:t,pos:e,code:n.code,reason:n.reason||{}});
var s={val:t,requestTime:(new Date).getTime()};return this.trigger("request",{val:t,pos:e}),this.getProvider().get(t,e,function(t,e,i){s.responseTime=(new Date).getTime(),this._requests.push(s),this._onResponse(t,e,i)
}.bind(this)),this},isTimeInRequestInterval:function(t){for(var e=this._requests.length-1;e>=0;e--)if(t>this._requests[e].requestTime&&t<this._requests[e].responseTime)return!0;
return!1},_isNeedRequest:function(t,e){if(""===t&&!this.params.requestOnEmptyInput)return{need:!1,code:2};
if(!e)return{need:!0};var i,n=this.getCancelRequestConditions();t:for(var s=0;s<n.length;s++){i=n[s];
for(var o in i)if(i.hasOwnProperty(o)&&i[o]!==e[o])continue t;return{need:!1,code:1,reason:{condition:i}}
}return{need:!0}},_onResponse:function(t,e,i){this.trigger("response",{val:t,pos:e,data:i})}}),_borschik("bPsQBhIkrNVYN5ADOUed_RSjDg4")&&BEM.decl("suggest2-provider",{getDefaultParams:function(){return{cache:!1,type:"GET",dataType:"jsonp",timeout:2e3}
},get:function(t,e,i){this._lastText!==t&&(this._lastText=t,$.ajax(this._extendParamsData(this.getRequestData(t,e))).done(function(n){i.call(this,t,e,this.convert(n))
}.bind(this)).error(function(){i.call(this,t,e,{items:[]})}.bind(this)))},convert:function(t){return{orig:t[0],items:t[1],meta:t[2]}
},getRequestData:function(t,e){var i={};return BEM.blocks["suggest2-detect"].isSupportInlineSVG()&&(i.svg=1),$.extend({part:t,pos:e},i)
},getRequestUrl:function(){return this.params.url},_extendParamsData:function(t){return this.params.url=this.getRequestUrl(),this.params.data=$.extend(this.params.data||{},t),this.params
},_lastText:void 0}),_borschik("JRWQrE8GGi85Lai1MemaubDSJWw")&&BEM.decl("suggest2-provider",{getRequestData:function(){return $.extend(this.__base.apply(this,arguments),{"prev-query":BEM.blocks["i-global"].param("query")})
},getRequestUrl:function(){return this.params.url},_extendParamsData:function(){return this.params.url=this.getRequestUrl(),this.__base.apply(this,arguments),this.params
}}),_borschik("6gG2EomLQT3WXy7yU9wtK2LeDCI")&&BEM.decl("suggest2-view",{html:function(t,e){return BEMHTML.apply(this.build(t,e))
},build:function(t,e){return{block:"suggest2",elem:"content",mods:{theme:"normal"},content:this.buildItems(t,e)}
},buildItems:function(t){return t.reduce(function(t,e){return t.push(this.buildItem(e)),t}.bind(this),[])
},buildItem:function(t){var e=this.__self._getPrefs(t),i=this.__self._getType(t,e),n="html"===i?{}:{type:i};
return this._getItemByType(t,e,i,{text:{elem:"text",content:this.__self._highlight(this.__self._getText(t,e),e)},mods:n,js:e.js||{},props:{},content:[]})
},_getItemByType:function(t,e,i,n){var s=n.text,o=n.mods,r=n.js,a=n.props,c=n.content;if(e.pers&&(o.personal="yes"),"fact"===i)c.push(s,{elem:"bullet"},{elem:"fact",content:t[2]});
else if("weather"===i)c.push(s,{elem:"icon",elemMods:{weather:t[3].replace("-","minus-").replace("+","plus-").replace(/_/g,"-")}},{elem:"fact",content:t[2]});
else if("traffic"===i)c.push(s,{elem:"icon",elemMods:{traffic:t[3]}},{elem:"fact",content:t[2]});else if("nav"===i)o.interact="link",a.url=this.__self._resolveUrl(t[4]),c.push({elem:"text",content:t[3]},{elem:"fact",content:t[2]});
else if("icon"===i){var u={};e.icon.forEach(function(t,e,i){Array.isArray(t)?u[t[0]]=t[1]:0===e&&(u[t]=i[e+1])
}),c.push(s,$.extend({elem:"icon",elemMods:{type:"favicon"}},u)),e.fact&&c.push({elem:"fact",content:e.fact})
}else"html"===i?(r.val=t[1],c.push(e.body)):c.push(s);return e.url&&(o.interact="link",a.url=this.__self._resolveUrl(e.url),e.target&&(a.target=e.target)),$.extend({block:"suggest2-item",mods:o,js:r,content:c},a)
}},{_getPrefs:function(t){if(!Array.isArray(t))return{};var e=t[t.length-1];return $.isPlainObject(e)?e:{}
},_getType:function(t,e){var i=Array.isArray(t)?t[0]||"text":"text";return"icon"!==i||e.icon?i:"text"
},_getText:function(t){return Array.isArray(t)?t[1]:t},_highlight:function(t,e){if(!e.hl)return t;var i,n=e.hl.sort(function(t,e){return t[0]-e[0]
}).filter(function(t){return t[0]>=0}),s=[],o=0;return n.length?(n.forEach(function(e){i=o>e[0]?o:e[0],s.push(t.slice(o,i)),s.push({elem:"highlight",content:t.slice(i,o=e[1])})
},this),s.push(t.slice(o)),s.filter(function(t){return!!t})):t},_resolveUrl:function(t){return(/[\/]{2}/.test(t)?"":"http://")+t
}}),_borschik("5YC0q8o6La9H-Ejl8HcJnJ-4dGw")&&BEM.decl("suggest2-view",{},{_getGroupType:function(t,e){return t.pers?"nah":~["nav"].indexOf(e)?e:"text"
},_getTextLabel:function(t){return BEM.I18N("suggest2",t)}}),_borschik("1oBjccxOecghFl0CvMAlwFfyqXc")&&BEM.decl("suggest2-input",{onSetMod:{js:{inited:function(){var t=this;
t._input=t.params.input,t.disableBrowserAutocomplete(),t.realVal(t.val()),t.bindEvents({change:function(e,i){t.trigger("change",i)
},clear:$.throttle(function(e,i){t.trigger("clear",i)},300)},t),t.bindSuggestEvents()}}},get:function(){return this._input
},focus:function(){return this._input.setMod("focused","yes"),this},blur:function(){return this._input.delMod("focused"),this
},getControl:function(){return this._input.elem("control")},val:function(){return this._input.val.apply(this._input,arguments)
},valWithoutSuggest:function(t,e){return this._input.val.call(this._input,t,$.extend(e,{suggest:!1}))
},realVal:function(t){return void 0===t?this._realVal:("string"==typeof t&&(this._realVal=t),this._realVal)
},width:function(){return this._input.domElem.width()},getCaretPosition:function(){var t,e=this.getControl()[0],i=this.val().length;
return document.selection?(t=document.selection.createRange(),t.moveStart("character",-i),t.text.length):e.selectionStart||0===e.selectionStart?e.selectionStart:i
},moveCaretToEnd:function(){var t=this.getControl()[0],e=t.value.length;if("number"==typeof t.selectionStart)t.scrollLeft=999999,t.setSelectionRange(e,e);
else if("undefined"!=typeof t.createTextRange){t.focus();var i=t.createTextRange();i.collapse(!1),i.select()
}return this},disableBrowserAutocomplete:function(){var t=this._input.hasMod("focused");t&&this._input.delMod("focused"),this.getControl().attr({autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false","aria-autocomplete":"list"}),t&&this._input.setMod("focused","yes")
},bindEvents:function(t,e){return Object.keys(t).forEach(function(i){this._eventsFilter(i).on(i,t[i].bind(e||this))
},this),this},bindSuggestEvents:function(){var t=this.params.suggest;return t.on({out:function(t,e){this.a11yDeactive(),this._changeValueByEvent(t,e)
}},this),BEM.blocks["suggest2-item"].on(t.domElem,{tpah:function(t,e){this._changeValueByEvent(t,e),this.moveCaretToEnd()
},select:this._changeValueByEvent,enter:function(t,e){this.a11yActive(e.id),e.byKeyboard&&this.params.updateOnEnterByKeyboard&&this._changeValueByEvent(t,e)
}},this),this},a11yActive:function(t){this.getControl().attr("aria-activedescendant",t)},a11yDeactive:function(){this.getControl().removeAttr("aria-activedescendant")
},_eventsFilter:function(t){return~["blur","focus","change","clear"].indexOf(t)?this._input:this.getControl()
},_changeValueByEvent:function(t,e){this.val(e&&e.val||this.realVal(),$.extend({block:t.block.__self.getName(),event:t.type},e))
}}),_borschik("G4_TUza8DU6dzjOlX6BPe7pihNg")&&BEM.decl("suggest2-input",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this.bindEvents({keydown:function(t){t.which===this.params.suggest.__self.keyboard.enter&&this.trigger("enter")
}},this)}}}}),_borschik("9KrpyL3ofbnublGncJ9tbh1TQXQ")&&BEM.DOM.decl("suggest2-item",{val:function(){if(this.params.val)return this.params.val;
var t=this.elem("text");return(t.length?t:this.domElem).text()},onEnter:function(t){return this.setMod("selected","yes").triggerEvent("enter",{val:this.val(),byKeyboard:t})
},onLeave:function(){return this.delMod("selected")},onSelect:function(t){return this.triggerEvent("select",{val:this.val(),byKeyboard:t})
},triggerEvent:function(t,e){return this.trigger(t,{val:e.val,id:this.domElem.attr("id"),show:!1,byKeyboard:e.byKeyboard})
}}),_borschik("QIccT0_wugcRsNnmOHczc_wwF9Q")&&BEM.DOM.decl("suggest2-item",{},{live:function(){this.liveBindTo("mouseover mouseout mousedown leftclick",function(t){this.trigger(t.type,t)
})}}),_borschik("DImbpQu2wyM1qQCMSxG0QtTkyuw")&&BEM.DOM.decl({block:"suggest2-item",modName:"type",modVal:"nav"},{select:function(){var t=BEM.blocks["i-game"];
return t&&t.sendSerpEvent(this.elem("link").text()),this.__base(),!1}}),_borschik("JrDLdtoLYmlMQ14Sf7OSCvDvAEI")&&BEM.DOM.decl({block:"suggest2-item",modName:"interact",modVal:"link"},{val:function(){return!1
},onSelect:function(t){return t&&(window.location=this.elem("link").attr("href")),this.__base.apply(this,arguments)
}}),_borschik("xhnHTtTSLXm5BQryVAxZ726wwFU")&&BEM.DOM.decl({block:"search",modName:"paranja",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.paranja=this.findBlockInside("paranja"),BEM.DOM.append(BEM.DOM.scope,this.paranja.domElem),this.input.on({focus:this._showParanja.bind(this),blur:function(){this.suggest._isBlur&&!this.getMod("progress")&&this._hideParanja()
}},this),BEM.channel("serp-request").on({startProgress:function(){this._showParanja(),this.setMod("progress","yes")
},stopProgress:function(){this._hideParanja(),this.delMod("progress")}},this)}},_showParanja:function(){this.paranja.open()
},_hideParanja:function(){this.paranja.close()}}),_borschik("L61zgDBlD9ydY5pjVVASQdfx7gs")&&BEM.decl({block:"suggest2-view",modName:"theme",modVal:"large"},{build:function(t,e){return{block:"suggest2",elem:"content",mods:{theme:"large"},content:this.buildItems(t,e)}
}}),_borschik("aaR21EmMGSMeSIcxmXgXHOEMyas")&&BEM.decl({block:"suggest2-view",modName:"group",modVal:"type"},{buildItems:function(t){var e,i;
return t.reduce(function(t,n){var s=this.__self._getPrefs(n),o=this.__self._getType(n,s),r=this.__self._getGroupType(s,o);
return e!==r&&(e=r,i=[],t.push({block:"suggest2",elem:"group",content:[{elem:"title",content:this.__self._getTextLabel(e)},{elem:"items",content:i}]})),i.push(this.buildItem(n)),t
}.bind(this),[])}}),_borschik("TbDbovjUuyQ3kkLlpfPn0J-XMTI")&&BEM.decl({block:"suggest2-view",modName:"group",modVal:"label"},{buildItems:function(t){var e,i;
return t.reduce(function(t,n,s){var o=this.__self._getPrefs(n).label||"";if(e!==o){e=o,i=[];var r;r=o?o:0===s?"":this.__self._getTextLabel("text"),t.push({block:"suggest2",elem:"group",content:[{elem:"title",content:r},{elem:"items",content:i}]})
}return i.push(this.buildItem(n)),t}.bind(this),[])}}),_borschik("Q8rJxngxHFXvTMvVbTxS-4cbs1A")&&BEM.DOM.decl("suggest2-form",{onSetMod:{js:{inited:function(){this._isReady=!1,this.initNodes()
}}},getDefaultParams:function(){return{inputName:"input",buttonName:"button",popupName:"popup"}},getOwner:function(){},isReady:function(){return this._isReady
},initNodes:function(){var t=this.getNodes();t.forEach(function(t){t.suggest.init()}),this._isReady=!0,this.trigger("ready",{nodes:t})
},getNodes:function(){return this.getNodeList().map(function(t){var e=t.suggest,i=e.params;return i.input=t.input,i.button=t.button,i.form=this,i["suggest2-popup"]=BEM.create("suggest2-popup",{suggest:e,popup:e.findBlockOn(this.params.popupName),owner:this.getOwner(t)||i.input}),i["suggest2-input"]=BEM.create("suggest2-input",{suggest:e,input:i.input,updateOnEnterByKeyboard:i.updateOnEnterByKeyboard}),t.counter&&(t.counter.params.suggest=e,t.counter.params.form=this,i.counter=t.counter),this.bindFormEvents(t),t
},this)},bindFormEvents:function(t){var e=this;return t.button&&t.button.bindTo("click",function(t){e.trigger("button-click",t)
}),e.bindTo("submit",function(t,i){e.onSubmit(t,i)}),e},submit:function(t){return this.domElem.trigger("submit",t||{}),this
},onSubmit:function(t,e){t.data=e||{},this.trigger("submit",t)},getNodeList:function(){var t=this,e=[];
return t.elem("node").each(function(i,n){var s=$(n),o=t.findBlockInside(s,"suggest2"),r={input:t.findElem(s,"input"),button:t.findElem(s,"button")};
e.push({node:s,suggest:o,counter:t.findBlockOn("suggest2-counter"),input:t.findBlockOn(r.input,t.params.inputName),button:t.findBlockOn(r.button,t.params.buttonName),popup:o.findBlockOn(t.params.popupName)})
}),e}}),_borschik("voLNVT6Fr9Mrt2sXAiXtFN2PlpE")&&BEM.DOM.decl("suggest2-counter",{onSetMod:{js:{inited:function(){this.clear()
}}},getDefaultParams:function(){return{submitBySelect:!1,preventSubmit:!0,host:"//yandex.ru",path:"clck/jclck",dataUrl:"http://ya.ru",params:{},timeout:300}
},metaProps:{exprt:"exprt",r:"region",log:"log"},clear:function(){var t=this;return t._params={user_input:"",text:""},t._times=[],t._path={service:t.params.service,state:"not_shown",index:0,personal:"nah_not_shown",submit:""},t._ratio={len:0,queryLen:0,actionsCount:0},t._firstChange=0,t._lastChange=0,t._sinceChange={first:0,last:0},t._selectedText="",t._session=0,t._meta={},t._afterSendAjaxCallback,t
},submit:function(){var t=this,e=t.params.suggest.params["suggest2-input"];t._params.text=e.val(),t._params.pos=e.getCaretPosition(),t._selectedText&&t._selectedText!==t._params.text&&(t._path.state="edit"),t.sendAjax(t.getUrl()),this.trigger("submit",this._getSubmitEventData()).clear(),this._params.prev_query=e.val()
},_getSubmitEventData:function(){var t=this;return{path:t._path,times:t._times,prev_query:t._params.prev_query,user_input:t._params.user_input,text:t._params.text,pos:t._params.pos,ratio:t._ratio,since_first_change:t._sinceChange.first,since_last_change:t._sinceChange.last,session:t._session,meta:t._meta,url:t.getUrl()}
},sendAjax:function(t){return $.ajax({type:"GET",url:t,dataType:"script",timeout:this.params.timeout,cache:!0,async:!this.params.preventSubmit}).always(function(){this._afterSendAjaxCallback&&this._afterSendAjaxCallback()
}.bind(this)),this},afterSendAjax:function(t){return this._afterSendAjaxCallback=t,this},getUrl:function(){return this.params.host+["/",this.params.path].concat(this._getUrlParams()).join("/").replace(/(\/+)/g,"/")
},_getUrlParams:function(){var t=this;return this._getParamsList().concat(t._getData()).reduce(function(e,i){return e.concat(t._getParams(i))
},[]).concat(["/"])},_getParamsList:function(){var t=this;return[t.params.params,t._getPath(),t._params,t._getRatio(),t._getSinceChange(),t._getSession()]
},initValues:function(){return this._params.prev_query=this.params.suggest.params["suggest2-input"].val(),this
},bindEvents:function(){var t,e=this,i=e.params,n=i.suggest;return i.form.on("button-click",function(){"keyboard"!==e._path.submit&&(e._path.submit="button_by_mouse")
}),i.form.on("submit",e.submit.bind(e)),n.getModel().on({request:function(){t=new Date},response:function(i,n){e._path.personal=e._hasPersonal(n.data.items)?"nah_not_used":"nah_not_shown",e._meta=n.data.meta||{},e._addTime(new Date-t),e._setMetaProps(n)
}}),n.params["suggest2-input"].on({change:function(t,i){i&&"clear"!==i.source||(e._params.user_input=t.block.val(),e[e._firstChange?"_lastChange":"_firstChange"]=new Date),e._ratio.actionsCount++
},enter:function(){e._path.submit="keyboard"}}),n.params["suggest2-popup"].on({show:function(){e._path.state="not_used"
},hide:function(t,i){"empty"===i.response&&(e._path.state="not_shown")}}),BEM.blocks["suggest2-item"].on(n.domElem,{enter:function(t,i){i.byKeyboard&&e.params.suggest.params.updateOnEnterByKeyboard&&(e._selectedText=i.val,e._path.state="suggest")
}}),n.on({select:function(t,n){e._path.state=n.byKeyboard?"keyboard":"mouse",e._path.index=n.itemIndex+1,e._selectedText=n.val,n.item.hasMod("personal")&&(e._path.personal="nah_used"),i.submitBySelect&&(e._path.submit=n.byKeyboard?"keyboard":"click_by_mouse",e._params.pos=n.pos,e._params.text=e._selectedText,e.submit())
}},e),e},_hasPersonal:function(t){return t.some(function(t){return 1===BEM.blocks["suggest2-view"]._getPrefs(t).pers
})},_setMetaProps:function(t){t.data.meta&&Object.keys(this.metaProps).forEach(function(e){this._params[this.metaProps[e]]=t.data.meta[e]||""
},this)},_getParams:function(t){return Object.keys(t).reduce(function(e,i){return""===t[i]?e:(e.push(i+"="+encodeURIComponent(t[i]).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%2C/g,",")),e)
},[])},_getPath:function(){return{path:[this._path.service,this._path.state,"p"+this._path.index,this._path.personal,this._path.submit].join(".")}
},_getSession:function(){return this._session=(new Date).getTime()+Math.round(1e4*Math.random()),{session:this._session}
},_getSinceChange:function(){return{since_first_change:this._getSinceTime("first"),since_last_change:this._getSinceTime("last")}
},_getSinceTime:function(t){var e="_"+t+"Change";return this._sinceChange[t]=this[e]?(new Date).getTime()-this[e]:0,this._sinceChange[t]
},_getRatio:function(){return this._ratio.len=this._params.user_input.length,this._ratio.queryLen=this._params.text.length,{ratio:[this._ratio.len,this._ratio.queryLen,this._ratio.actionsCount].join(".")}
},_addTime:function(t){return this._times.push(t),this._params.times=this._times.join("."),this},_getData:function(){return{"*data":"url="+this.params.dataUrl}
}}),_borschik("faIAhpa5g32GFT4ov10di2i1gBE")&&BEM.DOM.decl("suggest2-counter",{bindEvents:function(){var t,e=this,i=e.params,n=i.suggest;
return i.form.on("button-click",function(){"keyboard"!==e._path.submit&&(e._path.submit="button_by_mouse")
}),i.form.on("submit",e.submit.bind(e)),n.getModel().on({request:function(){t=new Date},response:function(i,n){e._path.personal=e._hasPersonal(n.data.items)?"nah_not_used":"nah_not_shown",e._meta=n.data.meta||{},e._addTime(new Date-t),e._setMetaProps(n)
}}),n.params["suggest2-input"].on({change:function(t,i){i&&"clear"!==i.source||(e._params.user_input=t.block.val(),e[e._firstChange?"_lastChange":"_firstChange"]=new Date),e._ratio.actionsCount++
},enter:function(){e._path.submit="keyboard"}}),n.params["suggest2-popup"].on({show:function(){e._path.state="not_used"
},hide:function(t,i){"empty"===i.response&&(e._path.state="not_shown")}}),BEM.blocks["suggest2-item"].on(n.domElem,{enter:function(t,i){i.byKeyboard&&e.params.suggest.params.updateOnEnterByKeyboard&&(e._selectedText=i.val,e._path.state="suggest")
}}),n.on({select:function(t,n){e._path.state=n.byKeyboard?"keyboard":"mouse",e._path.index=n.itemIndex+1,e._selectedText=n.val,n.item.hasMod("personal")&&(e._path.personal="nah_used"),i.submitBySelect&&(e._path.submit=n.byKeyboard?"keyboard":"click_by_mouse",e._params.pos=n.pos,e._params.text=e._selectedText)
}},e),e}}),_borschik("wKatFqA6sf5LZMONVfXfVHDuF4Q")&&BEM.DOM.decl("progress",{update:function(t,e){return this.setMod("timing",e||"").domElem.css({width:0>=t?"0":t>=1?"100%":(100*t).toPrecision(2)+"%"}).css("width"),this
}}),_borschik("Zhd4tnf5avFUaSQzrAaHOh4VWaI")&&!function(){var t=0,e=400,i=200,n=.8;BEM.DOM.decl("progress",{onSetMod:{js:{inited:function(){BEM.channel("serp-request").on({startProgress:this._startProgress,stopProgress:this._stopProgress},this)
}}},_startProgress:function(){this._clearTimers(),this.update(0),this._timeout=setTimeout(function(){delete this._timeout,this._thresholdDistance=n,this._onPending(),this._interval=setInterval(this._onPending.bind(this),e)
}.bind(this),t)},_onPending:function(){this._thresholdDistance/=2,this.update(n-this._thresholdDistance,"pending")
},_stopProgress:function(){return this._timeout?(this._clearTimers(),this.update(0),void 0):(this._clearTimers(),this.update(1,"finish"),this._timeout=setTimeout(function(){delete this._timeout,this.update(1,"hide")
}.bind(this),i),void 0)},_clearTimers:function(){this._timeout&&(clearTimeout(this._timeout),delete this._timeout),this._interval&&(clearInterval(this._interval),delete this._interval)
}})}(),_borschik("AISYGuQ0sOvYHsS7YEf4EcQekdY")&&BEM.DOM.decl("user",{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOn("enter","button");if(null!==t){var e=this.domElem.prop("tabindex");this.domElem.attr({tabindex:-1,role:"group"}).removeAttr("aria-haspopup aria-expanded"),t.domElem.attr("tabindex",e),this._domik=BEM.create("domik_type_popup",{mods:this.params.domikMods,js:this.params.domikJs,hidden:this.findBlockInside({block:"domik",modName:"type",modVal:"hidden"})}),t.bindTo("leftclick tap",function(t){t.preventDefault(),this._domik.open()
}.bind(this))}}},destruct:function(){this._domik&&this._domik.destruct(),this.__base.apply(this,arguments)
}}),_borschik("hSYARxXNNbv5mIjKfWwovEE_mJs")&&BEM.DOM.decl({name:"button",modName:"pseudo",modVal:"yes"},{_onClick:function(t){this.__base.apply(this,arguments),this._href&&t.preventDefault()
}}),_borschik("Ek5aP7-8RGTMp-_oz57bC2NzhJg")&&BEM.decl("domik_type_popup",{destruct:function(){this._form&&this._form.destruct(),this._popup&&this._popup.destruct(),this.__base.apply(this,arguments)
},create:function(){if(this._created)return this;var t,e,i=this.__self,n=i._buildTypePopup(this._uniqId,this.params.mods,this.params.js),s=$(BEMHTML.apply(n)),o=this.params.hidden;
if(BEM.DOM.append(BEM.DOM.scope,s),e=this._popup=s.bem("popup"),t=this._form=this._popup.findBlockInside("auth"),o){var r=o.domElem;
t.getUsernameBlock().val(r.find("input[name=login]").change().val()),t.getPasswordBlock().val(r.find("input[name=passwd]").change().val()),delete this.params.hidden,o.destruct()
}return this._created=!0,this},open:function(){var t=this;return BEM.blocks["i-global"].param("login")?this:(this._created||this.create(),this.close(),this._popup.show(),this.afterCurrentEvent(function(){t._form.getUsernameBlock().setMod("focused","yes"),t._form.redraw()
}),this)},close:function(){return this._popup.hide(),this},isOpened:function(){return this._popup&&this._popup.isShown()||!1
},getFormBlock:function(){return this._form}},{_buildTypePopup:function(t,e,i){var n=(i||{}).explain;
return{block:"popup",mix:[{block:"domik",elem:"popup"}],mods:{type:"modal",position:"fixed","body-scroll":"no",theme:"ffffff"},underMods:{type:"paranja"},content:{elem:"content",content:{block:"domik",js:$.extend({_uniqId:t},i),mods:$.extend({type:"popup"},e),content:[n?{elem:"explain",content:n}:"",{block:"auth",mods:{content:"auto"}}]}}}
}}),_borschik("m0VPFZoFcdlllwwCJO0yyQcHUVw")&&!function(){function t(t,e,i,n){var s=t.__self,o=n.checkEmpty;
return[function(){return o&&0===e.length?[t._username,"fill-input"]:!0},function(){return o&&0===i.length?[t._password,"fill-input"]:!0
},function(){return/[а-яА-ЯёЁ]/.test(i)?[t._password,"wrong-keyboard-layout"]:!0},function(){return s._isUsernameValid(e,!o)?!0:[t._username,"wrong-characters"]
},function(){return s._isPasswordValid(i)?!0:[t._password,"wrong-characters"]},function(){return i&&i===e?[t._password,"wrong-password"]:!0
}]}BEM.DOM.decl("auth",{onSetMod:{js:{inited:function(){this._username=this.findBlockInside("username","input").on("change",this._onInputChange,this),this._password=this.findBlockInside("password","input").on("change",this._onInputChange,this),this._button=this.findBlockInside("button","button"),this._error=null,this._errorOwner=null,this.bindTo("submit",this._onBeforeSubmit),this.redraw()
}}},destruct:function(){this._error&&this._error.destruct(),this.__base.apply(this,arguments)},_checkInput:function(e){var i=this,n=t(i,i._username.val(),i._password.val(),{checkEmpty:e}),s=n.every(function(t){var e=t();
return Array.isArray(e)?(i.showError(e[0],BEM.I18N("auth",e[1])),e[0].elem("control").attr("aria-invalid",!0),!1):!0
});return s&&(this.hideError(),this._username.elem("control").removeAttr("aria-invalid"),this._password.elem("control").removeAttr("aria-invalid")),s
},_onInputChange:function(){this._checkInput(!1)},enableButton:function(){return this._button.delMod("disabled"),this
},disableButton:function(){return this._button.setMod("disabled","yes"),this},_onBeforeSubmit:function(t){return this._username.val(this._username.val().trim()),this._checkInput(!0)?(this._onSubmit(t),this.trigger("submit",t),void 0):!1
},_onSubmit:function(){if(this.disableButton(),this.elem("retpath").val(this.__self._getRetpath()),!this._timestamp){var t=this.__self._timestampName;
this._timestamp=$('<input type="hidden" name="'+t+'"/>').appendTo(this.domElem)}this._timestamp.val(+new Date);
var e=this.domElem.attr("action");e&&this.domElem.attr("action",e.replace(/^(https?:)?/,"https:"))},_getError:function(){if(this._error)return this._error;
var t=$(BEMHTML.apply(this.__self._buildError()));return BEM.DOM.append(this.domElem,t),this._error=this.findBlockOn(t,"popup"),this._errorMsg=this.findElem(t,"error"),this._error.on("hide",function(){this._errorOwner=null
},this),this._error},showError:function(t,e){var i=this._getError();return this._curErrorMsg!==e&&(this._errorMsg.text(e),this._curErrorMsg=e),this._errorOwner!==t&&(this._errorOwner=t,i.hide().show(t)),this
},hideError:function(){return this._error&&this._error.hide(),this},getUsernameBlock:function(){return this._username
},getPasswordBlock:function(){return this._password},getHaunterBlock:function(){return this._haunter||(this._haunter=this.findBlockInside("haunter","checkbox")),this._haunter
},submit:function(){return this.domElem.submit(),this},redraw:function(){var t,e=this.__self;return this._onInputChange(),t=this.findBlockInside("register","button"),t&&t.url(e._getRegisterURL()),t=this.findBlockInside("remember","button"),t&&t.url(e._getRememberURL()),this
}},{_fromName:"from",_retpathName:"retpath",_timestampName:"timestamp",_isUsernameValid:function(t,e){return this._isUsernameEmailValid(t)||this._isUsernameLoginValid(t)||this._isUsernamePhoneValid(t,e)
},_isUsernameEmailValid:function(t){return/^\s*[^@\s]+@[^@\s]+\s*$/.test(t)},_isUsernameLoginValid:function(t){return/^\s*[-а-яА-ЯёЁA-Za-z0-9.]+\s*$/.test(t)
},_isUsernamePhoneValid:function(t,e){return e?(t=t.trim(),t=t.replace(/-\)/,"+)"),t=t.replace(/(\d)-/g,"$1"),t=t.replace(/\((\d+)\)/,"$1"),t=t.replace(/(^|\d+)\(/,"$1"),t=t.replace(/^\+/,""),/^\d*$/.test(t)):/^\+?[-0-9]*(?:\([-0-9]+\))?[-0-9]+$/.test(t)
},_isPasswordValid:function(t){return!/[^\-a-zA-Z0-9`!@#$%^&*()_=+\[\]{};:"\|\\,.<>\/?]/.test(t)},_getRetpath:function(){return BEM.blocks["i-global"].param("retpath")
},_getPassportURL:function(t){var e=BEM.blocks["i-global"],i=e.param("passport-host"),n=e.param("passport-msg"),s=this._getRetpath();
return[i,"/passport?mode=",t,n?"&"+this._fromName+"="+encodeURIComponent(n):"",s?"&"+this._retpathName+"="+encodeURIComponent(s):""].join("")
},_getRegisterURL:function(){return this._getPassportURL("register")},_getRememberURL:function(){return this._getPassportURL("restore")
},_buildError:function(){return{block:"popup",mods:{autoclosable:"no"},js:{directions:["right","left"]},attrs:{role:"alert","aria-live":"assertive","aria-atomic":!0},content:[{elem:"tail"},{elem:"content",mix:[{block:"auth",elem:"error"}]}]}
}})}(),_borschik("8HuK6X5SQDrsntZClirOf6pgffo")&&BEM.DOM.decl("auth",{onSetMod:{js:{inited:function(){var t=this;
t.__base.apply(t,arguments);var e=document.createElement("b");e.innerHTML="<!--[if IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length&&t._username.elem("control").add(t._password.elem("control")).keydown(function(e){return 13===e.which?(t.submit(),!1):void 0
})}}}}),_borschik("Mpg1S5FtwPH-sZqoJLdJME4gfo4")&&!function(){function t(){}var e=BEM.DOM,i=28;e.decl("auth",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._socialDropdown=null,this._initSocialProviders()
}}},destruct:function(){var t=this._socialDropdown;t&&t.domElem&&t.desruct(),this.__base.apply(this,arguments)
},_initSocialProviders:function(){var t=BEM.blocks["i-global"],e=t.param("social-providers"),i=this;if(e)i._createSocial(e);
else{var n=t.param("social-host");if(!n)return;i._getSocialProviders(n,function(t){i._createSocial(t)
})}},_getSocialProviders:function(t,e){var n=this.elem("social");n.css("height",i),$.getJSON(this.__self._getProvidersURL(t),function(t){n.css("height",""),e(t.providers)
})},_createSocial:function(t){return t.length?(e.update(this.elem("social"),BEMHTML.apply(this.__self._buildSocial(t,this._uniqId))),this._socialDropdown=this.findBlockInside("social","dropdown"),void 0):(this.elem("social").remove(),this.dropElemCache("social"),void 0)
},_onSocialClick:function(e){e.preventDefault();var i=BEM.blocks["i-global"];this._socialDropdown&&this._socialDropdown.hide(),BEM.blocks["social-broker"].start(function(){i.param("retpath")&&top.location.href!==i.param("retpath")?top.location.href=i.param("retpath"):top.location.reload()
},t,{provider:this.elemParams(e.data.domElem).provider})}},{live:function(){return this.__base.apply(this,arguments),this.liveBindTo("social-link","leftclick tap",function(t){this._onSocialClick(t)
}).liveBindTo("social-link","keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||32===t.keyCode&&this._onSocialClick(t)
}),!1},_getProvidersURL:function(t){return t+"/providers2.jsonp?callback=?"},_buildSocial:function(t,e){var i,n,s=[];
if(t=t.filter(function(t){return t.enabled}),i=t.filter(function(t){return t.primary}).map(function(t){return{block:"auth",elem:"social-link",js:{provider:t.code},mix:[{elem:"social-icon",elemMods:{code:t.code}}],title:t.display_name}
}),s=s.concat(i),n=t.map(function(t){return{block:"auth",elem:"social-link",js:{provider:t.code},title:t.display_name,content:[{elem:"social-icon",elemMods:{code:t.code}},t.display_name]}
}),i.length<t.length){var o=BEM.I18N("auth","more");s.push({block:"dropdown",js:!0,content:[{block:"button",mods:{pseudo:"yes",theme:"pseudo",size:"s"},mix:[{block:"dropdown",elem:"switcher"}],attrs:{title:o,"aria-label":o},content:"· · ·"},{elem:"popup",content:{block:"auth",elem:"social-popup",mix:[{block:"auth",js:{uniqId:e}}],content:n}}]})
}return s}})}(),_borschik("CEBAiHppSZUbzStGmdZbYQGtNdc")&&BEM.decl("social-broker",{_windowWidth:500,_windowHeight:280,onSetMod:{js:{inited:function(){this._window=null,this._timer=0
}}},start:function(t,e,i){var n,s,o,r,a=this;if(this._cleanup(),this._onSuccess=t,this._onFailure=e,i=$.extend({},a._getDefaultParams(),i),n=i.startUrl+"?",r=i.popupName,delete i.startUrl,delete i.popupName,s=i.display,o=i.retpath,s&&"popup"!==s)i.retpath=i.retnopopup||i.retpath||window.location.href,delete i.retnopopup;
else{var c="ddom="+(i.ddom||(location.hostname===document.domain?"":document.domain));i.retpath+=(o.match("#")?"&":"#")+c
}return n+=Object.keys(i).reduce(function(t,e){return t.push(encodeURIComponent(e)+"="+encodeURIComponent(i[e])),t
},[]).join("&"),s&&"popup"!==s?(this._navigate(n),void 0):(this._window=window.open(n,r,a._getPopupParams()),this._window&&(this._window.focus(),clearInterval(this._timer),this._timer=setInterval(function(){a.isClosed()&&(clearInterval(a._timer),a.onFailure({status:"error"}))
},500)),void 0)},isClosed:function(){if(!this._window)return!0;try{return this._window.closed}catch(t){return!0
}},_navigate:function(t){window.location.href=t},_getDefaultParams:function(){var t=BEM.blocks["i-global"],e=t.param("id");
return{startUrl:t.param("social-startUrl")||t.param("social-host")+"/broker/start",retpath:t.param("social-retpath")||[location.protocol,"//",location.host,t.param("lego-path"),"/blocks-common/i-social/closer/i-social__closer.html"].join(""),retnopopup:t.param("social-retnopopup")||!1,consumer:e||"morda",popupName:"social_"+(e||"morda"),action_if_anonymous:"authorize",result_location:"fragment"}
},_getPositionedParams:function(t,e,i,n){return["scrollbars=yes, resizable=1, menubar=0, toolbar=0, status=0, location=0, directories=0",", left=",e,", top=",t,", width=",i,", height=",n].join("")
},_getPopupParams:function(){var t,e,i=this._windowWidth,n=this._windowHeight;return window.opera?(t=(screen.availWidth-i)/2,e=(screen.availHeight-n)/2):(t=(window.innerWidth-i)/2,e=(window.innerHeight-n)/2),t=Math.round(t),e=Math.round(e),this._getPositionedParams(e,t,i,n)
},_cleanup:function(){clearInterval(this._timer),this.isClosed()||this._window.close(),this._window=null
},onSuccess:function(t){this._cleanup(),this._onSuccess&&this._onSuccess(t)},onFailure:function(t){this._cleanup(),this._onFailure&&this._onFailure(t)
}},{start:function(){this._current&&this._current.destruct(),this._current=BEM.create("social-broker"),Lego.block["i-social"]={broker:this._current},this._current.start.apply(this._current,arguments)
},onSuccess:function(){this._current.onSuccess.apply(this._current,arguments)},onFailure:function(){this._current.onFailure.apply(this._current,arguments)
}}),_borschik("WUzKrSqK0LLBOkkWjsUB0c_ZrZs")&&BEM.DOM.decl("dropdown",{onSetMod:{js:function(){var t=this,e=t.params,i=t._popup=t.findBlockOn(t.elem(e.popupElem),"popup").on("show",function(){t.setMod("action","open").trigger("show")
}).on("hide",function(){t.setMod("action","closed").trigger("hide")});e.popupMethods.map(function(e){t[e]=i[e].bind(i)
});var n=t.params.switcherBlock,s=t.elem("switcher");n&&(t._switcher=t.findBlockOn(s,n).domElem),s.attr({"aria-haspopup":!0,"aria-expanded":!1})
},action:function(t,e){this.elem("switcher").attr("aria-expanded","open"===e)}},getPopup:function(){return this._popup
},getDefaultParams:function(){return{popupElem:"popup",popupMethods:["toggle","show","hide","setContent"]}
},destruct:function(){this._popup&&this._popup.domElem&&this._popup.destruct(),this.__base.apply(this,arguments)
},_toggle:function(){this._popup.toggle(this._switcher)},_onSwitcherClick:function(){this._switcher||(this._switcher=this.elem("switcher")),this._toggle()
},_onSwitcherKeyUp:function(t){if(!(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)){var e=this.elem("switcher")[0].tagName.toLowerCase();
"button"!==e&&("a"!==e&&13===t.which||32===t.which)&&(t.preventDefault(),this.params.switcherBlock||this._toggle())
}}},{live:function(){this.liveBindTo("switcher","leftclick tap",function(t){this._onSwitcherClick(t)}).liveBindTo("switcher","keyup",function(t){this._onSwitcherKeyUp(t)
})}}),_borschik("leHgF4hwEChStLH262biSuLuA78")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base.apply(this,arguments),(this._hasHint=Boolean(this.elem("hint")[0]))&&this.on("change",this._updateHint)._updateHint()
},focused:function(){return this.__base.apply(this,arguments)===!1?!1:(this._hasHint&&this._updateHint(),void 0)
}},_updateHint:function(){this.toggleMod(this.elem("hint"),"visibility","visible",!this.val())}}),_borschik("QeuXc4Hsu8_MI5kaI7Y0XK8PUe8")&&BEM.DOM.decl("checkbox",{name:function(t){var e=this.elem("control");
return"undefined"==typeof t?e.attr("name"):(e.attr("name",t),this)}}),_borschik("T0DCmxKcm9dCO_4rDXRHrEdNuTc")&&BEM.DOM.decl("checkbox",{onSetMod:{js:function(){this.setMod("checked",this.elem("control").prop("checked")?"yes":""),this._isControlFocused()&&this.setMod("focused","yes")
},focused:{yes:function(){return this.isDisabled()?!1:(this._isControlFocused()||this.elem("control").focus(),this.setMod(this.elem("box"),"focused","yes"),this.afterCurrentEvent(function(){this.trigger("focus")
}),void 0)},"":function(){this._isControlFocused()&&this.elem("control").blur(),this.delMod(this.elem("box"),"focused"),this.afterCurrentEvent(function(){this.trigger("blur")
})}},checked:function(t,e){return this.isDisabled()?!1:(this.elem("control").prop("checked","yes"===e),this.afterCurrentEvent(function(){this.trigger("change",{checked:"yes"===e})
}),this.setMod(this.elem("box"),"checked",e),void 0)},disabled:function(t,e){this.elem("control").prop("disabled","yes"===e)
}},isDisabled:function(){return this.hasMod("disabled","yes")},isChecked:function(){return this.hasMod("checked","yes")
},toggle:function(){this.toggleMod("checked","yes","")},val:function(t){var e=this.elem("control");return"undefined"==typeof t?e.val():(e.val(t),this)
},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")
},_onClick:function(){this.isDisabled()||this.setMod("focused","yes")},_onChange:function(t){t.target.checked?this.setMod("checked","yes"):this.delMod("checked")
},_onFocusInFocusOut:function(t){this.setMod("focused","focusin"===t.type?"yes":"")},_onMouseOverMouseOut:function(t){this.isDisabled()||this.setMod("hovered","mouseover"===t.type?"yes":"")
},_isControlFocused:function(){try{return this.containsDomElem($(this.__self.doc[0].activeElement))}catch(t){return!1
}}},{live:function(){this.liveBindTo("leftclick tap",function(t){this._onClick(t)}).liveBindTo("control","change",function(t){this._onChange(t)
}).liveBindTo("control","focusin focusout",function(t){this._onFocusInFocusOut(t)}).liveBindTo("mouseover mouseout",function(t){this._onMouseOverMouseOut(t)
})}}),_borschik("YyAEn5-8ibwBEKpgLbsDg7HgYvw")&&BEM.DOM.decl("user",{redraw:function(){return this}},{getLogoutUrl:function(){var t=BEM.blocks["i-global"],e=t.param("retpath"),i=t.param("yandexuid");
return[t.param("passport-host"),"/passport?mode=logout",i?"&yu="+i:"",e?"&retpath="+encodeURIComponent(e):""].join("")
}}),_borschik("xbcK__uEqzYuLKMxEAxGIU9tWas")&&BEM.decl("i-common__string",{},{cleverSubstring:function(){var t="…";
return function(e,i,n){return e.length>i+n?e.substring(0,i-1)+t:e}}(),escapeHTML:function(){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
return function(e){return String(e).replace(/&(?!\w+;)|[<>"']/g,function(e){return t[e]||e})}}(),escapeRegExp:function(t){return t.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")
},highlight:function(t,e){if(!$.isArray(e))return t;var i,n=[],s=0,o=e.sort(function(t,e){return t[0]-e[0]
}),r=[],a="?",c=~t.indexOf(a),u=function(){for(var e,i=/\&#\d+;/gi;e=i.exec(t);)r.push(e[0]),t=t.replace(e[0],a)
},l=function(t){if(c)return t;for(;~t.indexOf(a)&&r.length;)t=t.replace(a,r[0]),r.shift();return t};return!c&&u(),o.forEach(function(e){i=s>e[0]?s:e[0],n.push({tag:"span",elem:"span",content:l(t.slice(s,i))}),n.push({tag:"em",elem:"em",content:l(t.slice(i,s=e[1]))})
},this),n.push({tag:"span",elem:"span",content:l(t.slice(s))}),n}}),_borschik("YrTEP_xGTWikHC3dQQtexdadIXo")&&BEM.DOM.decl("user",{onSetMod:{js:{inited:function(){if(this.__base.apply(this,arguments),this.elem("name").length){var t=this,e=t.elemParams("name");
e.isUglyUserName&&BEM.blocks["i-user-services"].get(function(i){var n=BEM.blocks["i-common__string"].cleverSubstring,s=i.displayName?i.displayName.name:i.login,o=n(s,e.maxLength,e.maxLengthRelative);
t.elem("name").text(o),t.trigger("update-name")})}}}},toggleCollapsed:function(t){return this.toggleMod("hide-name","yes","",t)
}}),_borschik("RBHiUEGUf7Ys26X-qKbKxwmEoVY")&&BEM.decl("i-user-services",{},{get:function(t){this._data?t(this._data):this._get(t)
},getApiUrl:function(){return BEM.blocks["i-global"].param("pass-host")+"/services?callback=?"},_callbacks:[],_get:function(t){var e=this;
e._callbacks.push(t),1==e._callbacks.length&&$.getJSON(e.getApiUrl(),{locale:BEM.blocks["i-global"].param("lang"),login:"yes","current-login":BEM.blocks["i-global"].param("login"),yu:$.cookie("yandexuid")},function(t){e._data=t,$.each(e._callbacks,function(){this(t)
}),e._callbacks.length=0})}}),_borschik("LreM3Uxj6PqLzwE2uTTGnU_BKdw")&&BEM.DOM.decl("user",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._isRetina=BEM.blocks["i-ua"].hiDpi,this._isRetina&&this.updateIcon()
}}},_getIconPath:function(){var t=this.params.avatarHost,e=this.params.uid||BEM.blocks["i-global"].param("uid"),i=this._getIconSize(),n=(this._isRetina?"/islands-retina-":"/islands-")+i;
return[t,"/get-yapic/",e,n,"?rnd=",+new Date].join("")},_setIconBackground:function(t){var e=this.elem("icon");
e&&e.css("background-image","url("+t+")")},updateIcon:function(){this._setIconBackground(this._getIconPath())
},getDefaultParams:function(){return{avatarHost:"//avatars.yandex.net"}}}),_borschik("U1bMZGOFwPTVbzGf11XPiRCbio4")&&BEM.DOM.decl("user",{_getIconSize:function(){return"middle"
}}),_borschik("np-o3E6Lvl0wfPejbROsEUQkqEI")&&!function(t,e,i){t.DOM.decl({block:"user",modName:"notification-panel",modVal:"yes"},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments);
var e=t.blocks["i-global"];if(e.param("login")){this._ticker=this.findBlockInside("ticker");var i=this.findBlockOutside("header");
window.notificationPanel.init({container:this.params.notificationPanelContainer,contentRegion:e.param("content-region"),device:this.params.notificationPanelDevice,header:i&&i.domElem,lang:e.param("lang"),overflowHidden:this.params.notificationPanelOverflowHidden,retpath:e.param("retpath"),withoutParanja:this.params.notificationPanelWithoutParanja}),this.bindTo("leftclick tap",function(t){t.preventDefault(),this._onUserClick()
}),this.bindTo("keypress",function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||32===t.which&&(t.preventDefault(),this._onUserClick())
}),this.channel("notification-panel-notice").on("click",this._onNotificationClick,this),this._loadData()
}}}},getDefaultParams:function(){var e=t.blocks["i-global"].param("content-region"),n="tr"===e?"com.tr":e;
return i.extend(this.__base(),{tickerUrl:"https://notifications.yandex."+n+"/api/1.x/user/ticker?callback=?"})
},destruct:function(){window.notificationPanel.destruct(),this.channel("notification-panel-notice").un("click",this._onNotificationClick,this),this._ticker&&this._ticker.destruct(),this._notice&&this._notice.destruct(),this.__base()
},_onNotificationClick:function(){window.notificationPanel.open(),this._ticker.hide()},_onUserClick:function(){window.notificationPanel.toggle(),this._ticker.hide(),this.channel("notification-panel-notice").trigger("close")
},_onTickerLoaded:function(e){e&&(this._ticker.val(e.ticker),this._hasNotification||(this._notice=t.blocks["notification-panel-notice"].create(),this._hasNotification=!0),this.channel("notification-panel-notice").trigger("open",e.tooltip))
},_loadData:function(){var e=t.blocks["i-global"];t.create("i-request_type_ajax",{url:this.params.tickerUrl,cache:!1,callbackCtx:this}).get({lang:e.param("lang"),"content-region":e.param("content-region"),yu:i.cookie("yandexuid")},this._onTickerLoaded)
}})}(BEM,BEMHTML,jQuery),_borschik("sNxpnX3V7RVg0Z5xblAH2NK-ioY")&&BEM.DOM.decl({block:"user",modName:"notification-panel",modVal:"yes"},{getDefaultParams:function(){return $.extend(this.__base(),{notificationPanelDevice:"desktop",notificationPanelOverflowHidden:!0})
}}),_borschik("MT9vi7qYkXBfWbF3GLyunemiIzc")&&BEM.DOM.decl({block:"user",modName:"notification-panel",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this._page=this.findBlockOutside("b-page"),this._main=this._page.findBlockInside("main")
}},_onUserClick:function(){this.__base.apply(this,arguments),this._togglePanel(),this.afterCurrentEvent(function(){this.bindToWin("click",function(){this._togglePanel()
})})},_togglePanel:function(){var t=this.params.counter;this._userOpen?(this._userOpen=!1,w(this.domElem[0],t.off[0],t.off[1])):(this._userOpen=!0,w(this.domElem[0],t.on[0],t.on[1])),this.unbindFromWin("click")
}}),_borschik("oBlS3rc_NPFx2ZftxwfxEM55HuE")&&!function(t){var e=4e3,i="notification-panel-notice",n=27;
t.DOM.decl("notification-panel-notice",{onSetMod:{js:{inited:function(){this._ignoreClick=!1,this.bindTo("leftclick tap",this._onClick).channel(i).on("open",this._onOpen,this).on("close",this._onClose,this)
}},state:{open:function(){this._timer=setTimeout(this.close.bind(this),e),this.bindTo("mouseover",function(){clearTimeout(this._timer),this.unbindFrom("mouseover")
}).bindTo("close","leftclick tap",function(){this._ignoreClick=!0,this.close()}).bindToDoc("keydown",function(t){t.keyCode===n&&this.close()
}).bindToDoc("leftclick tap",function(t){$.contains(this.domElem,t.target)||this.close()})},close:function(){clearTimeout(this._timer),this.unbindFrom("outsideclick").unbindFrom("mouseover").unbindFrom("close","leftclick tap").unbindFromDoc("keydown").unbindFromDoc("leftclick tap")
}}},open:function(){return this.setMod("state","open"),this},close:function(){return this.setMod("state","close"),this
},text:function(e){var i="";return this.delMod("service"),e&&e.count&&(1===e.count&&e.services&&"gamification"===e.services[0]&&(i=t.I18N("notification-panel-notice","new-achievement"),this.setMod("service","gamification")),i=i||t.I18N("notification-panel-notice","n-new-notifications",{count:e.count})),this.findElem("inner").html(i),this
},destruct:function(){this.close().channel(i).un("open",this._onOpen,this).un("close",this._onClose,this),this.__base.apply(this,arguments)
},_onClick:function(){this.close(),this._ignoreClick||this.channel(i).trigger("click"),this._ignoreClick=!1
},_onOpen:function(t,e){e&&e.count&&(this.text(e),this.afterCurrentEvent(function(){this.domElem&&this.open()
}))},_onClose:function(){this.close()}},{live:!1,create:function(){var e=$(BEMHTML.apply(this.build())).bem(this.getName());
return t.DOM.append(document.body,e.domElem),e},build:function(){return{block:"notification-panel-notice",js:!0,content:[{elem:"inner"},{elem:"close"}]}
}})}(BEM),_borschik("zSPkRjKVpihsB1Zzk52v8JJ8pAU")&&!function(t,e){var i=".notification-panel_device_desktop{position:fixed;top:70px;right:0;bottom:0;width:360px;margin:0;padding:0;border:0;border-left:1px solid #e5e5e5;border-left:1px solid rgba(0,0,0,.1);-webkit-transition:-webkit-transform .15s linear;transition:transform .15s linear}.notification-panel_device_desktop.notification-panel_visibility_hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}.notification-panel_device_desktop.notification-panel_visibility_visible{-webkit-transform:translateX(0);transform:translateX(0)}.notification-panel_device_touch-pad{position:fixed;top:0;right:0;bottom:0;width:360px;border:0;border-left:1px solid #e5e5e5;border-left:1px solid rgba(0,0,0,.1);-webkit-transition:-webkit-transform .15s linear;transition:transform .15s linear}.notification-panel_device_touch-pad.notification-panel_visibility_hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}.notification-panel_device_touch-pad.notification-panel_visibility_visible{-webkit-transform:translateX(0);transform:translateX(0)}.notification-panel_device_touch-phone{width:100%}.notification-panel__iframe{position:absolute;top:0;left:0;overflow-x:hidden;overflow-y:auto;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;background-color:#fff}.notification-panel_device_touch-pad .notification-panel__iframe{background-color:rgba(255,255,255,.99)}.notification-panel__paranja{position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;opacity:0;background:#000;background:rgba(0,0,0,.15);-webkit-transition:visibility 0 linear .3s,opacity .3s ease-out;transition:visibility 0s linear .3s,opacity .3s ease-out;-webkit-tap-highlight-color:rgba(0,0,0,0)}.notification-panel__paranja_opened_yes{visibility:visible;opacity:1;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out}",n=".notification-panel.notification-panel_visibility_visible{display:block}.notification-panel.notification-panel_visibility_hidden{display:none}.notification-panel__paranja{filter:progid:DXImageTransform.Microsoft.Alpha(opacity=15)}",s="https://notifications.yandex.{domain}",o="/{device}/{lang}/",r=".notificationPanel",a="open"+r,c="close"+r,u="notification-panel",l=u+"_visibility_visible",h=u+"_visibility_hidden",d=u+"__paranja",p=u+"__paranja_opened_yes",f=u+"__iframe",m="body",_="execScript"in t,g=e.documentMode<=9;
_&&e.documentMode<9&&(m="html"),t.notificationPanel={init:function(t){this._inited||(this._setParams(t),this._setEvents(),this._inited=!0)
},open:function(t){var e=this;this._iframeInited?this._open(t):(this._clearTimerOpen(),this._buildIframe(),this._iframeInited=!0,this._timerOpen=setTimeout(function(){e._open(t)
},0))},close:function(t){var i=this;this._iframeInited&&this.isOpened()&&(this._clearTimerOpen(),this._$panel.removeClass(l).addClass(h),this._$paranja&&(this._$paranja.removeClass(p).off("click",this._onclose),$(e).off("keypress",this._onesc).off("click",this._onclose)),this._params.overflowHidden&&(g?this._unsetOverflow():this._timerOverflow=setTimeout(function(){i._unsetOverflow()
},300)),t||this._postMessage(c),this._trigger(c))},toggle:function(){this.isOpened()?this.close():this.open()
},isOpened:function(){return this._iframeInited?!!this._$panel.hasClass(l):!1},destruct:function(){this._iframeInited&&(this._$paranja&&(this._$paranja.remove(),this._$paranja=null),this._unsetOverflow(),this._$iframe.remove(),this._$iframe=null,this._$panel.remove(),this._$panel=null,$(this._css).remove(),this._css=null,this._clearTimerOpen(),this._iframeInited=!1,$(t).off("message",this._onmessage))
},_iframeInited:!1,_open:function(t){if(this._iframeInited&&!this.isOpened()){var i=this;this._clearTimerOpen(),this._$panel.removeClass(h).addClass(l),this._$paranja&&(this._$paranja.addClass(p).on("click",this._onclose),setTimeout(function(){$(e).on("keypress",i._onesc).on("click",i._onclose)
},0)),this._setOverflow(),t||this._postMessage(a),this._trigger(a)}},_trigger:function(e,i){if(e){var n=t.BEM;
"undefined"!=typeof n&&n.channel&&(e=e.split(".")[0],n.channel(u).trigger(e,i))}},_setParams:function(e){e=e||{},this._params={lang:e.lang||"ru",contentRegion:e.contentRegion||"ru",retpath:e.retpath||t.location.href,device:e.device||"desktop",header:e.header,container:e.container||"body",withoutParanja:e.withoutParanja,overflowHidden:e.overflowHidden,linkTarget:e.linkTarget,host:e.host||s,path:e.path||o}
},_postMessage:function(t){try{this._$iframe[0].contentWindow.postMessage(t,"*")}catch(e){}},_buildIframe:function(){var e=$(this._params.container),s=[u,this._getDeviceClass(u),h].join(" ");
this._css=this._addCSS(i+(g?n:"")),"touch-phone"===this._params.device||this._params.withoutParanja||(this._$paranja=$('<div class="'+d+'"></div>'),this._$paranja.appendTo(e)),this._$panel=$('<div class="'+s+'"></div>'),this._$iframe=$("<iframe/>",{"class":f,src:this._getUrl(),frameBorder:"0",allowTransparency:"true"});
var o=$(this._params.header);o.length&&this._$panel.css("top",o.outerHeight()+"px"),this._$iframe.appendTo(this._$panel),this._$panel.appendTo(e),$(t).on("message",this._onmessage)
},_getUrl:function(){var e=function(e,i){return e+"="+t.encodeURIComponent((""+i).substr(0,512))},i=this._params.host+this._params.path,n="tr"===this._params.contentRegion?"com.tr":this._params.contentRegion;
return i=i.replace("{device}",this._params.device).replace("{lang}",this._params.lang).replace("{domain}",n||"ru"),i+"?"+[e("ltarget",this._params.linkTarget||""),e("content-region",this._params.contentRegion),e("origin",t.location.protocol+"//"+t.location.host),e("retpath",this._params.retpath),e("rn",Math.floor(1e6*Math.random()))].join("&")
},_getDeviceClass:function(t){return t+"_device_"+this._params.device},_setEvents:function(){var t=this;
this._onmessage=function(e){try{var i=e.originalEvent.data;i&&"string"==typeof i&&(i===c?t.close(!0):t._trigger(i))
}catch(e){}},this._onesc=function(e){e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||27===e.keyCode&&t.close()
},this._onclose=function(){t.close()}},_setOverflow:function(){var t;this._params.overflowHidden&&(t=$(m),this._overflow||(this._overflow=t.css("overflow")),t.css("overflow","hidden"),clearTimeout(this._timerOverflow),this._timerOverflow=null)
},_unsetOverflow:function(){this._params.overflowHidden&&this._overflow&&($(m).css("overflow",this._overflow),this._overflow=null,this._timerOverflow=null)
},_clearTimerOpen:function(){this._timerOpen&&(clearTimeout(this._timerOpen),this._timerOpen=null)},_addCSS:function(t){var i=e.createElement("style");
return i.type="text/css",e.getElementsByTagName("head")[0].appendChild(i),i.styleSheet?i.styleSheet.cssText=t:"textContent"in i?i.textContent=t:i.innerHTML=t,i
}}}(this,this.document),_borschik("MAsdS1MaMXOGifcdInr2oVfX-hc")&&BEM.DOM.decl("ticker",{onSetMod:{js:{inited:function(){this._count=this.params.count
}}},show:function(){return this.setMod("state","normal")},hide:function(){return this.setMod("state","empty")
},val:function(t){if(!arguments.length)return this._count;var e=this.params.maxCount;return this._count=t,this.elem("value").attr("title",t).text(t>e?e+"+":t),t?this.show():this.hide(),this
}}),_borschik("W2OThg4oiLrQqcAsiz90_GllgG8")&&BEM.DOM.decl({block:"user",modName:"menu",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=60;this._dropdown=this.findBlockOutside("dropdown-menu")||0,this._dropdown&&this._dropdown.on("show",function(){this.bindToWin("scroll",$.throttle(this._hide,t,this)).redraw().domElem.attr("aria-expanded",!0)
}.bind(this)).on("hide",function(){this.unbindFromWin("scroll").domElem.attr("aria-expanded",!1)}.bind(this))
}},_hide:function(){this._dropdown&&this._dropdown.hide()},_onClick:function(t){t.preventDefault(),this.__base.apply(this,arguments),this._dropdown&&this._dropdown.toggle(this.elem("icon").length?this.elem("icon"):this.elem("name"))
},redraw:function(){if(this.__base.apply(this,arguments),!this._dropdown)return this;var t=this.__self.getLogoutUrl();
return this._dropdown._popup.findBlockInside("user").elem("logout").attr("href",t),this},destruct:function(){this._dropdown&&this._dropdown.domElem&&this._dropdown.destruct(),this.__base.apply(this,arguments)
}},{live:function(){return this.__base.apply(this,arguments),this.liveBindTo("leftclick tap",function(t){this._onClick(t)
}).liveBindTo("keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||32===t.which&&this.domElem.click()
}),!1}}),_borschik("nw2ku2drTyYR76dTT1b0dXGC5So")&&BEM.DOM.decl({block:"user",modName:"menu",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOutside("dropdown-menu"),e=this.params.counter;e&&this.bindTo("click",function(){var i=this.findBlockInside("notice"),n=i&&i.getCountNotice()>0?e.on.ticker:e.on.none;
t.hasMod("action","open")?w(this.domElem[0],e.off[0],e.off[1]):w(this.domElem[0],n[0],n[1])})}}}),_borschik("OQYYlNZLGXjmC2VipuLVfUuafP0")&&BEM.DOM.decl({block:"dropdown-menu",baseBlock:"dropdown"}),_borschik("4Ex7zp13w1kn9mvrH-nPGULVXZk")&&!function(){BEM.DOM.decl("i-menu",{onElemSetMod:{item:{state:{current:function(t,e,i,n){if("disabled"==n)return!1;
var s=this.elem("item","state","current");this.delMod(s,"state").trigger("current",{prev:s,current:t})
}}}},onItemSelectorClick:function(t){var e=this._getItemByEvent(t);this.setMod(e,"state","current")},_getItemByEvent:function(t){return t.data.domElem.closest(this.buildSelector("item"))
}},{live:function(){this.liveBindTo("item-selector","leftclick",function(t){this.onItemSelectorClick(t)
})}})}(),_borschik("gUB_nEQ3WwQk6FRxfzk9uzN57Io")&&BEM.DOM.decl({block:"b-menu-vert",baseBlock:"i-menu"}),_borschik("0U5L-r31ZUbbLRM1ru4D7qzsMaY")&&!function(){BEM.DOM.decl({name:"b-menu-horiz",baseBlock:"i-menu"})
}(),_borschik("MZnT3HhQInjUGrIboAJtyLU3khg")&&BEM.DOM.decl("user-menu-update",{onSetMod:{js:{inited:function(){var t=this;
t.updateInformer(t.onUpdateSuccess,t.onUpdateError)}}},updateInformer:function(t,e){var i=this;i._getExporter().get({key:$.cookie("yandexuid")},function(i){i.unread?t.apply(this,arguments):e&&e.call(this)
},e)},onUpdateSuccess:function(t){var e=parseInt(t.unread,10)||0,i=this.params.unreadMax;e&&i&&e>i&&(e=i+"+");
var n=e?e+" ":"";BEM.DOM.update(this.domElem,n+BEM.I18N("user","letter",{count:e}))},onUpdateError:function(){},_getExporter:function(){return this._exporter||(this._exporter=BEM.create("i-request_type_ajax",{url:this.__self.getExportApiUrl(),cache:!1,callbackCtx:this}))
},getDefaultParams:function(){return{unreadMax:99}}},{getExportApiUrl:function(){return BEM.blocks["i-global"].param("export-host")+"/for/unread.xml?callback=?"
}}),_borschik("sTaQQKMy826qGJs9MKmrtaoFENI")&&BEM.DOM.decl({name:"user",modName:"account",modVal:"yes"},{onSetMod:{js:function(){}},update:function(t,e,i,n,s){this.params={uid:e,pos:s,avatarHost:"//avatars.yandex.net"},this._isRetina=BEM.blocks["i-ua"].hiDpi,this.updateIcon(),this.elem("name").text(n),this.delMod("blank")
},getUid:function(){return this.params.uid},getPos:function(){return this.params.pos}}),_borschik("icUQaECEsuKIhhmTbIytMndY-_g")&&BEM.DOM.decl("multi-auth",{onSetMod:{js:function(){this.findBlockOn("popup").on("show",this._onShow,this)
}},getDefaultParams:function(){var t=BEM.blocks["i-global"].param("tld"),e=~["ua","by","kz"].indexOf(t)?"ru":t;
return{accountsGate:"//pass.yandex."+e+"/accounts?yu=",maxAccounts:5}},_onShow:function(){this.getAccounts(),["add","edit","logout"].forEach(function(t){this.changeRetPath(this.findElem(t))
},this)},changeRetPath:function(t){t.attr("href",BEM.blocks.uri.parse(t.attr("href")).replaceParam("retpath",BEM.blocks["i-global"].param("retpath")).toString())
},getAccounts:function(){this._accountsInited||(this._accountsInited=!0,$.ajax({url:this.params.accountsGate+BEM.blocks["i-global"].param("yandexuid"),jsonp:"callback",dataType:"jsonp",timeout:5e3,success:this.addAccounts.bind(this)}))
},_buildCounterData:function(t,e,i){var n=this.params.switchUserCounterData,s=$.extend(!0,{},n.tree),o=e+(i||1)-1;
s.vars=n.actionVars[t];for(var r=e;o>=r;r++)s.children.push({ctag:n.childCtag,vars:n.childVarPos+"="+(parseInt(n.childVarP0)+r)});
return s},addAccounts:function(t){if((t&&t.accounts||[]).length>1){var e=this.findBlockInside({blockName:"user",modName:"blank",modVal:"yes"}),i=e.domElem.parents(".b-menu-vert__layout-unit, .b-menu-vert__item").last(),n=0,s=i;
t.accounts.forEach(function(e){if(e.uid!==t.default_uid&&e&&e.displayName){var o=e.displayName,r=i.clone();
s.after(r),s=r,this.findBlockInside(r,"user").update(r,e.uid,o.default_avatar,o.name,n++)}},this);var o=this._buildCounterData("show",0,n);
sh(o),this.setMod(this.elem("edit"),"visible","yes"),(!t["can-add-more"]||t.accounts.length>=this.params.maxAccounts)&&this.setMod(this.findElem("add"),"hidden","yes")
}},onAccountClick:function(t){var e=this.findBlockOutside(t,"user");sh(this._buildCounterData("click",e.getPos())),this.setMainAccount(e.getUid())
},setMainAccount:function(t){var e=this.elem("form"),i=BEM.blocks["i-global"];$("[name=uid]",e).val(t),$("[name=retpath]",e).val(i.param("retpath")),$("[name=yu]",e).val(i.param("yandexuid")),e.submit()
}},{live:function(){return this.liveBindTo("account-link","leftclick tap",function(t){this.onAccountClick($(t.target))
}),!1}}),_borschik("W24eamJ5S8u4sG6TLlfeNJJXIG0")&&BEM.DOM.decl("notice",{onSetMod:{js:{inited:function(){this._count=this.params.count
}}},setCount:function(t){t>=0||(t=0);var e=$(BEMHTML.apply({block:"notice",elem:"value",count:t,maxCount:this.params.maxCount})).text();
return this._count=t,this.elem("value").text(e),this},getCount:function(){return this._count}}),_borschik("60zSQ8PSdsoF6JNTzi6GSXtmj7c")&&BEM.DOM.decl("notice",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._noticeRequest(function(t){this._countNotice=t.unread,t.unread>0&&(BEM.DOM.append(this.domElem,BEMHTML.apply({block:"notice",mods:this.hasMod("more","no")&&{more:"no"},elem:"count",count:t.unread})),this.setCount(t.unread),this.trigger("update"))
},function(){})}},_noticeRequest:function(t,e){BEM.create("i-request_type_ajax",{url:"//export.yandex.ru/for/unread.xml",callbackCtx:this}).get({key:$.cookie("yandexuid")},t,e)
},getCountNotice:function(){return this._countNotice}}),_borschik("eqs6g4nLu3b5bjRkqixKb4O_ZME")&&BEM.DOM.decl("advanced-search",{initBlock:function(){if(!this._inited){this._inited=!0,this._vals=[];
var t=this.findBlocksInside({block:"dropdown",modName:"advanced",modVal:"yes"}),e=t.filter(function(t){return"safety"!=t.params.name
}),i=t.filter(function(t){return"safety"==t.params.name}),n=this.findBlocksOn(this.elem("input"),"input"),s=this.findBlockInside("suggest2");
s&&s.setDataConverter(function(t){var e=t[1].map(function(t){return["city",t[0],t[1]]});return{orig:t[0],items:e,meta:t[2]}
}),this.bindTo(this.domElem,"submit",function(){return this.submit(),!1}),e.concat(n).map(function(t,e){this._initSearchControl(t,e)
},this),i.map(function(t){this._initSettingsControl(t)},this),this.afterCurrentEvent(function(){e.map(function(t){t.on("change",function(){this.submit()
},this)},this)}),n.forEach(function(t){t.on("clear",function(){this.submit()},this)},this),this._initRegion(),this.params.opened&&this.open(),this._isIe="msie"===this.params.browserName.toLowerCase(),this._needRefresh=this._isIe&&this.__self._isKub()||!BEM.blocks["i-ua"].canUseAjax()
}},_initSettingsControl:function(t){t.on("change",function(){var e={save:"family",family:t.val()[0].val,rnd:Math.random(),yandexuid:BEM.blocks["i-global"].param("yandexuid")};
this._needRefresh?(e.retpath=BEM.blocks.location.getInstance().getState().url,e.save=1,location.href=this.__self._domain()+this.__self._settingsUrl+"?"+$.param(e)):this.__self.getSettingsRequest().get(e,this.changeThis(this.submit),this.changeThis(this.submit))
},this)},_initSearchControl:function(t,e){this._vals.push(t.val()),t.on("change",function(t){this._vals[e]=t.block.val()
},this)},_initRegion:function(){var t=this.findBlockInside({block:"input",modName:"type",modVal:"city"}),e=this.findBlockInside("suggest2"),i=e&&e.getModel(),n={};
t&&(i.on("response",function(t,e){$.each(e.data.items,function(){n[this[1].toLowerCase()]=this[2]})}),t.on("change",function(t){var e=n[t.block.val().toLowerCase()];
e&&this.elem("hidden-value","for","region").val("-"+e)},this))},isDefaultState:function(){return!this._vals||!this._vals.some(function(t){return t&&""!=t
})},submit:$.debounce(function(){var t=this.findBlockOutside("b-page").findBlockInside("search");"function"==typeof t.reSubmit?t.reSubmit():t.domElem.submit()
},50),reset:function(){this.isDefaultState()||(this.findBlocksInside({block:"dropdown",modName:"advanced",modVal:"yes"}).map(function(t){t.reset()
},this),this.findBlocksInside("input").map(function(t){t.val("")}),this.submit())},getParams:function(){var t="&?[^&?]+=(?=(?:&|$))",e="|&?within=-1",i=new RegExp(t+e,"g");
return this.domElem.serialize().replace(i,"").replace(/^&/,"")}},{_request:null,_settingsUrl:"/search/settings",_tld:function(){return BEM.blocks["i-global"].param("tld")
},_isKub:function(){return"by"===this._tld()||"ua"===this._tld()||"kz"===this._tld()},_domain:function(){return this._isKub()?"//yandex.ru":""
},getSettingsRequest:function(){return this._request||(this._request=BEM.create("i-request_type_ajax",{dataType:"html",url:this._domain()+this._settingsUrl,type:"iframe",cache:!1})),this._request
},live:!0}),_borschik("rDtwNpORN8CvXml_59sMwo7SZRE")&&BEM.DOM.decl("advanced-search",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindTo("action-link","mousedown",function(t){var e=BEM.blocks.location.getInstance().getUri().toString(),i=$(t.currentTarget),n=BEM.blocks.uri.parse(i.attr("href"));
i.attr("href",n.replaceParam("retpath",e).toString())})}}}),_borschik("d0XiTpUMpqd3BBB_IvTnFwDFxOg")&&BEM.HTML.decl("b-icon",{onBlock:function(t){var e,i={src:"//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",alt:""},n=t.params(),s=["alt","width","height"];
for(n.url&&(i.src=n.url);e=s.shift();)n[e]&&(i[e]=n[e]);t.tag("img").attrs(i)}}),_borschik("hGvVCXvZgCBCHMR4q4_Tn3XsyEY")&&BEM.DOM.decl({name:"dropdown",modName:"advanced",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this._controls={},this._popup=this.findBlockInside("popup"),this._button=this.findBlockInside("button"),this._buttonText=this.findElem(this._button.domElem,"switcher-text"),0===this._buttonText.length&&(this._buttonText=this._button.elem("text")),this._buttonDefaultTitle=this._buttonText.text(),this._buttonIcon=this.findElem(this._button.domElem,"icon"),this._initWidth(),this._initControls(),this._afterInit()
}},_initControls:function(){this.__self.supportedControls.map(function(t){var e=this.findBlocksInside(t);
0!==e.length&&(this._controls[t]=e,e.map(this["_"+t+"Init"],this))},this)},_afterInit:function(){this.__self.supportedControls.map(function(t){this._controls[t]&&this["_"+t+"AfterInit"]()
},this)},_initWidth:function(){var t=this._getLongestTitle(),e=t.length>this._buttonDefaultTitle.length;
e&&this._buttonText.empty().append(t),this._fixWidth(),e&&this._buttonText.empty().append(this._buttonDefaultTitle)
},_getLongestTitle:function(){return this.findElem("text").toArray().map(function(t){return $(t).text()
}).sort(function(t,e){return e.length-t.length}).slice(0,this.params.maxItemsInTitle).join(", ")},_fixWidth:function(){this._popup.domElem.css({"min-width":this._button.domElem.width()+3}),this._button.domElem.css({"min-width":this._button.domElem.width()+3})
},_buildHidden:function(t,e){return BEMHTML.apply({block:"dropdown",mods:{advanced:"yes"},elem:"hidden-value",name:e,value:t})
},_radioboxInit:function(t){t.on("change",function(e,i){this._radioboxProcess(i.current,e.target.val(),t.name()),this.trigger("change")
},this)},_radioboxAfterInit:function(){var t=this._controls.radiobox[0];this._radioboxProcess(t.getCurrent(),t.val(),t.name())
},_getRadioboxText:function(){if(!this._controls.radiobox)return"";var t=this._controls.radiobox[0],e=this.findElem(t.getCurrent(),"text").text();
return+t.val()===this.params.defaultValue?"":e},_radioboxProcess:function(t,e){var i=this._getChekcboxText(),n=this.findElem(t,"text").text(),s=+e!==this.params.defaultValue?n:0!==i.length?i:this._buttonDefaultTitle;
this._buttonText.empty().append(s),this.params.withIcons&&this.setMod(this._buttonIcon,"type",this.params.withIcons[e]),this._generateHidden()
},_checkboxInit:function(t){t.on("change",function(){this._checkboxProcess(),this.trigger("change")},this)
},_checkboxAfterInit:function(){this._checkboxProcess()},_getChekcboxText:function(){if(this._controls.checkbox){var t=this._controls.checkbox.filter(function(t){return t.isChecked()
});return isOverflow=t.length>this.params.maxItemsInTitle,extend=isOverflow?" &hellip;":"",t.slice(0,isOverflow?this.params.maxItemsInTitle-1:this.params.maxItemsInTitle).map(function(t){return this.findElem(t.domElem,"text").text()
},this).join(", ")+extend}},_checkboxProcess:function(){var t=this._controls.checkbox.filter(function(t){return t.isChecked()
}),e=this._getChekcboxText(t),i=this._getRadioboxText(),n=0!==i.length?i:0!==e.length?e:this._buttonDefaultTitle;
this._buttonText.empty().append(n.length>0?n:this._buttonDefaultTitle),this._generateHidden()},_generateHidden:function(){this.params.generateHidden&&(this.findElem("hidden-value").remove(),this.__self.supportedControls.map(function(t){return this._controls[t]&&this["_"+t+"GenerateHidden"]()
},this))},_radioboxGenerateHidden:function(){this._controls.radiobox.map(function(t){var e=t.val();e!==this.params.defaultValue&&this.domElem.append(this._buildHidden(e,t.name()))
},this)},_checkboxGenerateHidden:function(){var t=this._controls.checkbox.filter(function(t){return t.isChecked()
});t.map(function(t){this.domElem.append(this._buildHidden(t.val(),t.name()))},this)},val:function(){return this.__self.supportedControls.map(function(t){return this._controls[t]&&this["_"+t+"Val"]()
},this).reduce(function(t,e){return e?(t||[]).concat(e):t})},_radioboxVal:function(){var t=this._controls.radiobox[0];
return t.val()!=this.params.defaultValue&&[{name:this.params.name,val:t.val()}]},_checkboxVal:function(){var t=this._controls.checkbox.filter(function(t){return t.isChecked()
}).map(function(t){return{name:this.params.name,val:t.val()}},this);return 0==t.length?void 0:t},reset:function(){return this.findElem("hidden-value").remove(),this.__self.supportedControls.map(function(t){this["_"+t+"Reset"]()
},this)},_radioboxReset:function(){this.params.defaultValue&&this._controls.radiobox.map(function(t){t.val(String(this.params.defaultValue))
},this)},_checkboxReset:function(){(this._controls.checkbox||[]).map(function(t){t.delMod("checked")})
},getDefaultParams:function(){return $.extend(this.__base.apply(this,arguments),{maxItemsInTitle:1,generateHidden:!0})
}},{supportedControls:["checkbox","radiobox"]}),_borschik("jj1ceDO4YA4A4mM816SQepyF_-c")&&BEM.decl({name:"input__dataprovider",baseBlock:"i-request_type_ajax"},{get:function(t,e){return this.__base({part:t},function(t){e.call(this,{items:t[1],metainfo:t[2]})
})}}),_borschik("rZ3U7KvFxHpWtK0c-en7cbw47f0")&&BEM.DOM.decl("radiobox",{name:function(t){var e=this.elem("control");
return"undefined"==typeof t?e.attr("name"):(e.each(function(e,i){i.name=t}),this)}}),_borschik("DTKb7GrrlVxYf6POQlJjiB8xDuk")&&!function(t,e){t.DOM.decl("radiobox",{onSetMod:{js:function(){var t=this;
t._val=t.findElem(t.elem("radio","checked","yes"),"control").val(),t.elem("control").each(function(e,i){var n=[];
if(t._isControlFocused($(i))&&n.push("focused"),i.checked&&n.push("checked"),n[0]){var s=t.__self._getRadioByElem($(i));
n.forEach(function(e){t.setMod(s,e,"yes")})}})},disabled:{yes:function(){this.setMod(this.elem("radio"),"disabled","yes")
},"":function(){this.delMod(this.elem("radio"),"disabled")}}},onElemSetMod:{radio:{focused:{yes:function(t){this.delMod(this.elem("radio","focused","yes"),"focused");
var e=this.findElem(t,"control");this._isControlFocused(e)||e.focus(),this.afterCurrentEvent(function(){this.trigger("focus",{current:t})
})},"":function(t){this.afterCurrentEvent(function(){this.trigger("blur",{prev:t})})}},checked:{yes:function(t){this._val=this.findElem(t,"control").prop("checked",!0).val();
var e=this.elem("radio","checked","yes");this.delMod(e,"checked"),this.trigger("change",{current:t,prev:e})
}},hovered:function(t){return!this.isDisabled(t)},disabled:function(t,e,i){t.find(this.buildSelector("control")).prop("disabled","yes"===i)
}}},_isControlFocused:function(t){try{return t[0]===this.__self.doc[0].activeElement}catch(e){return!1
}},isDisabled:function(t){return this.hasMod(t,"disabled","yes")},val:function(t){if("undefined"==typeof t)return this._val;
var e=this;return this.elem("control").each(function(i,n){return n.value===t?(e.setMod(e.__self._getRadioByElem($(n)),"checked","yes"),!1):void 0
}),e},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")
},getCurrent:function(){return this.findElem("radio","checked","yes")},uncheckAll:function(){var t=this.elem("radio","checked","yes");
return this.delMod(t,"checked").findElem(t,"control").prop("checked",!1),this._val=e,this.trigger("change",{current:e,prev:t}),this
},_onLeftClick:function(t){this.isDisabled(t.data.domElem)||this.setMod(t.data.domElem,"focused","yes")
},_onChange:function(t){this.setMod(this.__self._getRadioByElem(t.data.domElem),"checked","yes")}},{live:function(){return this.liveBindTo("radio","leftclick tap",function(t){this._onLeftClick(t)
}).liveBindTo("control","change",function(t){this._onChange(t)}).liveBindTo("radio","mouseover mouseout",function(t){this.setMod(t.data.domElem,"hovered","mouseover"===t.type?"yes":"")
}).liveBindTo("control","focusin focusout",function(t){this.setMod(this.__self._getRadioByElem(t.data.domElem),"focused","focusin"===t.type?"yes":"")
}),!1},_getRadioByElem:function(t){return t.closest(this.buildSelector("radio"))}})}(BEM),_borschik("pQHv5-NORKIf9_kHTgq6T8E-rLc")&&BEM.DOM.decl("radiobox",{getCurrent:function(){return this.findElem("radio","checked","yes")
}}),_borschik("wLAHrEnp0plnosm1y0EMq2gQLFg")&&BEM.DOM.decl({block:"suggest2",modName:"theme",modVal:"normal"},{getPopupWidth:function(){return this._input.width()
}}),_borschik("3wxMUlC8y-_gHcaDlXCGExUCCgg")&&!function(t){"use strict";t.ajaxPrefilter(function(t){return"iframe"===t.type.toLowerCase()?"iframe":void 0
}),t.ajaxTransport("iframe",function(e,i){var n,s="iframe-"+t.now(),o=e.url+"?"+t.param(i.data),r=function(){n.remove()
};return{send:function(e,i){n=t("<iframe></iframe>").hide().attr({name:s,id:s,src:o}),n.one("load",function(){try{var t=this.contentWindow?this.contentWindow.document:this.contentDocument?this.contentDocument:this.document,e=t.documentElement?t.documentElement:t.body;
i(200,e.innerHTML)}catch(n){i(500)}setTimeout(function(){r()},42)}),t("body").append(n)},abort:function(){n||(n.unbind("load"),r())
}}})}(jQuery),_borschik("oPlptIKyMnAHb43er7ObsMrZ2Wc")&&!function(t,e){var i=function(t){try{return t.activeElement
}catch(e){}},n=t.browser,s=n.opera&&n.version<13;e.DOM.decl("slide",{onSetMod:{js:{inited:function(){var e=this;
t(e.params.rel).each(function(){t(this.elem||e.domElem).on(this.event,e[this.method].bind(e))})}},state:{open:function(){this.afterCurrentEvent(function(){this._bindFocusEvents()
}),this.domElem.attr("aria-hidden",!1).trigger("open")},close:function(){this._unbindFocusEvents(),this._returnFocus(),this.domElem.attr("aria-hidden",!0).trigger("close")
}}},open:function(){var t=this;this.setMod("state","open"),this._resize(t._getSlideParams())},close:function(){var t=this;
this.setMod("state","close"),this._resize(t._getSlideParams())},_bindFocusEvents:function(){this._lastFocused=t(i(document)||e.DOM.scope);
var n=this.__self._getFocusable(this.domElem);return this._firstFocusable=n.first(),this._lastFocusable=n.last(),0===this._firstFocusable.length?(this._skipReturnFocus=!0,void 0):(this.bindTo(this._lastFocused,"keydown",this._onLastFocusedKeyDown).bindTo(this._firstFocusable,"keydown",this._onFirstFocusableKeyDown).bindTo(this._lastFocusable,"keydown",this._onLastFocusableKeyDown),this._skipReturnFocus=!1,this.bindToDoc("mousedown.returnFocus",function(){this._skipReturnFocus=!0
}),void 0)},_unbindFocusEvents:function(){this.unbindFromDoc("mousedown.returnFocus"),this.unbindFrom(this._firstFocusable,"keydown"),this.unbindFrom(this._lastFocusable,"keydown"),this.unbindFrom(this._lastFocused,"keydown")
},_onLastFocusedKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this[t.shiftKey?"_lastFocusable":"_firstFocusable"].focus())
},_onFirstFocusableKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&9===t.which&&(t.preventDefault(),this._lastFocused.focus())
},_onLastFocusableKeyDown:function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this._lastFocused.focus())
},_returnFocus:function(){this._skipReturnFocus||this.afterCurrentEvent(function(){this._lastFocused.focus()
})},_resize:function(t){this._body=this._body||this.findBlockOutside("b-page");var e=this,i=this.domElem,n=t.dur,s=this.hasMod("state","open"),o="right"===t.dir,r={},a={};
s?(o&&this._body.setMod("overflow","hidden"),r[t.sizeType]=t.sizeVal,r[t.dir]=-t.sizeVal,a[t.dir]=0,i.css(r).css("visibility","visible").stop().animate(a,n,function(){o&&e._body.delMod("overflow")
})):(o&&this._body.setMod("overflow","hidden"),r[t.sizeType]="",r[t.dir]="",a[t.dir]=-t.sizeVal,i.stop().animate(a,n,function(){i.css("visibility","hidden").css(r),o&&e._body.delMod("overflow")
}))},_getSlideParams:function o(){if(!o[this._uniqId]){var e=0,i={t:{meth:"outerHeight",sizeType:"height",direction:"top"},r:{meth:"outerWidth",sizeType:"width",direction:"right"},b:{meth:"outerHeight",sizeType:"height",direction:"bottom"},l:{meth:"outerWidth",sizeType:"width",direction:"left"}}[this.getMod("dir")],n=this.getMod("dur");
this.domElem.children().each(function(){e+=t(this)[i.meth](!0)}),o[this._uniqId]={sizeType:i.sizeType,sizeVal:e,dir:i.direction,dur:+n}
}return o[this._uniqId]}},{live:!1,_getFocusable:function(e){var i=t.data(e,"slide-getFocusable-id");
i||(i=t.identify(),t.data(e,"slide-getFocusable-id",i)),i='*[data-slide-getFocusable-id="'+i+'"]';var n=s?"":"a[href], link, ";
return e.find(n+'*[tabindex], button, input:not([type="hidden"]), textarea, select, menuitem').filter(function(){var e=t(this),n=!0;
return parseInt(e.prop("tabindex"),10)<0||"hidden"===e.css("visibility")?!1:(t(this).parentsUntil(i).each(function(){var e=t(this);
return"none"===e.css("display")?n=!1:void 0}),n)})}})}(jQuery,BEM),_borschik("iKP95yIJqIAKQlWC1EngIgKGg9s")&&BEM.DOM.decl("header",{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockInside("notice"),e=this.elem("mail");t&&e[0]&&t.on("update",function(){this.setMod(e,"notice","yes")
},this)}}}),_borschik("dZ-bN1ctjSaRLqEYfwfRX-P2Dg0")&&BEM.DOM.decl("header",{onElemSetMod:{action:{pressed:{yes:function(t){this.__base.apply(this,arguments),this.hasMod(t,"type","srv")&&this.bindToDoc("keydown",function(e){e.shiftKey||e.ctrlKey||e.altKey||27===e.keyCode&&this.delMod(t,"pressed","yes")
})},"":function(t){this.__base.apply(this,arguments),this.hasMod(t,"type","srv")&&this.unbindFromDoc("keydown")
}}}}}),_borschik("VJBZ_AYCxpHvYTYWLkdZGYwR7E8")&&BEM.DOM.decl("lang-switcher",{_onLangKeyUp:function(t){var e=t.data.domElem;
this.hasMod(e,"selected","yes")||!this.findBlockOn("popup").containsDomElem(e)||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||32===t.which&&e.click()
}},{live:function(){this.liveBindTo("lang","keyup",function(t){this._onLangKeyUp(t)})}}),_borschik("8XiRROfVb0RdDitETSkxYaEZEhw")&&BEM.DOM.decl("lang-switcher",{onSetMod:{js:function(){var t=this.findBlockOn("dropdown-menu")._popup.domElem;
this.langs=this.findElem(t,"lang")}}},{live:function(){this.liveBindTo("leftclick tap",function(){this.langs.each(function(){var t=$(this).attr("href"),e=BEM.blocks.location.getInstance();
t&&$(this).attr("href",BEM.blocks.uri.parse(t).replaceParam("retpath",e.getState().url).toString())})
})}}),_borschik("PiXHs9rIR1GwTkA5_TdnO6af0yg")&&BEM.DOM.decl({name:"link",modName:"pseudo",modVal:"yes"},{_onClick:function(t){t.preventDefault(),this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){this.trigger("click")
})},_onKeyUp:function(t){t.shiftKey||t.ctrlKey||t.altKey||(13===t.which||32===t.which)&&(this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){this.trigger("click")
}))}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo({modName:"pseudo",modVal:"yes"},"leftclick tap",function(t){this._onClick(t)
}).liveBindTo({modName:"pseudo",modVal:"yes"},"keyup",function(t){this._onKeyUp(t)})}}),_borschik("O1OKTXAYiHgHOzJsUdd81JcZ3Z4")&&BEM.DOM.decl("content",{showRightPanel:function(){this.delMod(this.elem("right"),"hidden")
},hideRightPanel:function(){this.setMod(this.elem("right"),"hidden","yes")}}),_borschik("V_NsaTG6eGS41QBxookhLLLEp5w")&&BEM.DOM.decl("serp-adv",{onSetMod:{js:function(){if(this.params.banner){if(this.params.banner.indexOf("flashldr019.js")<0)return this.elem("banner").html(this.params.banner);
var t=this,e=document.write,i="";document.write=function(){document.write=function(t){i+=t},$.ajax({url:"//yabs.yandex.ru/resource/flashldr019.js",cache:!0,dataType:"script",success:function(){return document.write=e,t.elem("banner").html(i)
}})},this.elem("banner").append(this.params.banner)}}}}),_borschik("b-0cojCiYBbBFtsurukP6PnBnbc")&&BEM.DOM.decl("serp-adv__banner",{onSetMod:{js:function(){window.swfobject?this.initFlash():this.flashErrorCallback()
}},initFlash:function(){var t=this,e=t.params;e.flashVersion&&!swfobject.hasFlashPlayerVersion(e.flashVersion)?this.flashErrorCallback():swfobject.embedSWF(e.flash,e.id,e.width,e.height,e.flashVersion,null,{color:"0xFFFFFF"},{allowscriptaccess:"always",wmode:"transparent"},"",function(i){i.success?(new Image).src=e.counter:t.flashErrorCallback()
})},flashErrorCallback:function(){if(this.params.html.indexOf("flashldr019.js")<0)return this.domElem.html(this.params.html);
var t=this,e=document.write,i="";document.write=function(){document.write=function(t){i+=t},$.ajax({url:"//yabs.yandex.ru/resource/flashldr019.js",cache:!0,dataType:"script",success:function(){return document.write=e,t.domElem.html(i)
}})},this.domElem.append(this.params.html)}}),_borschik("gtjIKnRZGnyESB3rS2L3jq3lqP8")&&BEM.DOM.decl("serp-adv__counter",{onSetMod:{js:function(){this.elemParams(this.domElem).counterUrl&&this.bindToWin("scroll",$.debounce(this._onScroll,100))
}},_onScroll:function(){BEM.DOM.win.scrollTop()+BEM.DOM.win.height()>=this.domElem.offset().top+15&&((new Image).src=this.elemParams(this.domElem).counterUrl,this.unbindFromWin("scroll",this._onScroll))
}}),_borschik("b4F7l_f07Vrisq91b5Ls1B3ZAoc")&&!function(){var t=/(?:^|\/\/)[^\s/?#]+(yandex|ya)\.[a-z\.]+/,e=/(?:^|\/\/)[^\s/?#]+wikipedia\.org/;
BEM.decl("i-game",{},{sendSerpEvent:function(i,n){var s={},o=BEM.blocks["i-global"];o.param("isGameEnabled")&&"com.tr"===o.param("tld")&&!t.test(i)&&(s.verb=e.test(i)?"serp.wikipedia_click":"serp.outlander_click",n&&(s.language=n),this.send(s))
}})}(),_borschik("UmgzYPhZgw55eU9bRi8NQfvi02Q")&&BEM.decl("i-game",{},{send:function(t){if(this._site||(this._site="yandex.com.tr",this._pid=BEM.blocks["i-global"].param("pid")),!this._pid||!t)return!1;
var e=new BEM.blocks.game,i={user:this._pid+"@yandex.com",site:this._site};return"string"==typeof t||"number"==typeof t?i["activity[verb]"]=t:Object.keys(t).forEach(function(e){i["activity["+e+"]"]=t[e]
}),e.send(i)}}),_borschik("m_bkfeo8m9quDlcKjHzkrm_ABhw")&&!function(){function t(t,i){return $.support.cors?$.ajax({url:s.addresses.activities.xhr,type:"POST",data:t,context:i}):window.XDomainRequest?e(t,i):$.Deferred().rejectWith(i,[{},"fail"]).promise()
}function e(t,e){var i=$.Deferred(),n=new window.XDomainRequest;return n.timeout=n.onerror=function(){i.rejectWith(e)
},n.onload=function(){var t;try{t=JSON.parse(n.responseText)}catch(s){return i.rejectWith(e)}i.resolveWith(e,[t,"success"])
},n.open("POST",s.addresses.activities.xhr),n.send($.param(t||{})),i.promise()}var i=[].slice,n=+new Date,s=BEM.decl("game",{__constructor:function(t,e){return e?this.send(e):(this.request=$.Deferred().rejectWith(this,[{},"Not sended",0]).promise(),$.extend(this,this.request))
},send:function(e){var s=n++,o=this.request=$.Deferred();return t(e,this).done(function(){var t=i.call(arguments,0,2);
t.push(s),o.resolveWith(this,t)}).fail(function(){o.rejectWith(this,[{},"fail",s])}),this.request=this.request.promise(),$.extend(this,this.request)
}});s.addresses={activities:{xhr:"http://gproxy.yandex.net/berlin/activities.json",jsonp:"http://gproxy.yandex.net/berlin/activities.jsonp"}}
}.call(BEM),_borschik("2y3Y1CEMucg8IBbh18a8GW_a0Wk")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this._bindBackgroundEvents()
}},_bindBackgroundEvents:function(){var t,e,i,n=5;this.bindTo(this.domElem,"mouseup pointerup",function(s){t||Math.abs(s.pageX-e)>n||Math.abs(s.pageY-i)>n||"A"===s.target.tagName||$(s.target).parents(this.__self.active).length||this.trigger("backgroundClick")
}),this.bindTo(this.domElem,"mousedown pointdown",function(n){e=n.pageX,i=n.pageY,t=window.getSelection&&""!==window.getSelection().toString()
})}},{active:["a",".serp-url",".check-button",".serp-item__preview",".serp-item__right"].join(",")}),_borschik("oZa28fSByqPhWP03qczKoaJgcms")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base();
var t=BEM.blocks["i-game"];if(t&&this.params.game){var e=this.params.game.url,i=this.params.game.lang;
$("a",this.domElem).each(function(n,s){$(s).click(function(){t.sendSerpEvent(e,i)})})}}}}),_borschik("J3oRMvdRWzjgFXEdmu48FClW1pc")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.findBlocksOn("preview-btn","check-button").map(function(t){t.afterCurrentEvent(function(){t.on("change",this._onPreviewButtonStateChange,this)
},this),this._uncheckPreviewButton(t)},this)}},togglePreview:function(t){this._isActivePreview(t)?this.closePreview(t):this.openPreview(t)
},openPreview:function(t){this._isModernPreview(t)?this._modernPreviewOpen(t):this._legacyPreviewOpen(t),this.trigger("previewShow",{name:t})
},closePreview:function(t){this._isModernPreview(t)?this._modernPreviewClose(t):this._legacyPreviewClose(t)
},_onPreviewButtonStateChange:function(t){return this._skipToggle?(this._skipToggle=!1,void 0):(this.togglePreview(this.getMod(t.block.domElem,"name")),void 0)
},_legacyPreviewOpen:function(t){this._legacyPreviewClose(this._legacyPreviewGetActivePreviewId()),this._legacyPreviewSetActivePreviewId(t),this._checkPreviewButton(this._getCorrespondedButton(t)),this.setMod("expanded","yes"),this.setMod(this._legacyPreviewGet(t),"visibility","visible")
},_legacyPreviewClose:function(t){this._uncheckPreviewButton(this._getCorrespondedButton(t)),this._legacyPreviewSetActivePreviewId(null),this.delMod("expanded"),this.delMod(this._legacyPreviewGet(t),"visibility"),this.trigger("previewHide",{name:t})
},_legacyPreviewSetActivePreviewId:function(t){this._legacyPreviewActiveId=t},_legacyPreviewGetActivePreviewId:function(){return this._legacyPreviewActiveId
},_legacyPreviewGet:function(t){return this.elem("preview","name",t)},_legacyPreviewIsActive:function(t){return t===this._legacyPreviewGetActivePreviewId()
},_uncheckPreviewButton:function(t){t&&t.isChecked()&&(this._skipToggle=!0,t.toggle())},_checkPreviewButton:function(t){t&&!t.isChecked()&&(this._skipToggle=!0,t.toggle())
},_getCorrespondedButton:function(t){var e=this.elem("preview-btn","name",t);return this.findBlockOn(e,"check-button")
},_isActivePreview:function(t){return this._isModernPreview(t)?this._modernPreviewIsActive(t):this._legacyPreviewIsActive(t)
},_isModernPreview:function(t){return!this._legacyPreviewGet(t).length}}),_borschik("jCjArGqbsX94lqeDO2vDqxJX9M8")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._main=this.findBlockOutside("main")
}},_modernPreviewOnPreviewUpdate:function(t,e){!e.partial&&this._modernPreviewDeactivate()},_modernPreviewOpen:function(t){this._modernPreviewPreloadSiblings(t),this.channel("content-preview").trigger("update",this._modernPreviewGetParams(t)),this._modernPreviewActivate(t),this._main.openPanel()
},_modernPreviewClose:function(){this._main.closePanel()},_modernPreviewActivate:function(t){var e=this._getCorrespondedButton(t);
this._modernPreviewSetActivePreviewId(t),this._modernPrevieSetActiveButton(e),this._modernPreviewBindDeactivationEvents(),this._modernPreviewSetVisualChanges(t),this._checkPreviewButton(e)
},_modernPreviewDeactivate:function(){var t=this._modernPreviewGetActiveButton();t&&t.findBlockOutside("serp-item")._uncheckPreviewButton(t),this.trigger("previewHide",{name:this._modernPreviewGetActivePreviewId()}),this._modernPreviewSetActivePreviewId(null),this._modernPrevieSetActiveButton(null),this._modernPreviewUnbindDeactivationEvents(),this._modernPreviewUnsetVisualChanges()
},_modernPreviewBindDeactivationEvents:function(){this._main.on("panelClosed",this._modernPreviewDeactivate,this),this.channel("content-preview").on("update",this._modernPreviewOnPreviewUpdate,this)
},_modernPreviewUnbindDeactivationEvents:function(){this._main.un("panelClosed",this._modernPreviewDeactivate,this),this.channel("content-preview").un("update",this._modernPreviewOnPreviewUpdate,this)
},_modernPreviewGetActiveButton:function(){return this.__self.modernPreviewActiveButton},_modernPrevieSetActiveButton:function(t){this.__self.modernPreviewActiveButton=t
},_modernPreviewSetActivePreviewId:function(t){this._modernPreviewActiveId=t},_modernPreviewGetActivePreviewId:function(){return this._modernPreviewActiveId
},_modernPreviewIsActive:function(t){return t===this._modernPreviewActiveId},_modernPreviewGetParams:function(t){return this.params.preview&&$.extend({},this.params.preview[t],this.params.preview._extra)
},_modernPreviewSetVisualChanges:function(){},_modernPreviewUnsetVisualChanges:function(){},_modernPreviewPreloadSiblings:function(t){var e=1,i=7,n=this._main.findBlocksInside({block:"serp-item",modName:"content-preview",modVal:"yes"}),s=n.indexOf(this),o=Math.max(s-e,0),r=Math.min(s+i,n.length);
n.slice(o,r).map(function(e){var i=e.params.preview,n=i&&(i[t]?i[t].url:i[n]);if(n)return Array.isArray(n)?n.map(function(t){BEM.blocks["content-preview"].preload(t)
}):BEM.blocks["content-preview"].preload(n)},this)}}),_borschik("vj4k43OVb4TAZ4FermoN479WdPw")&&BEM.DOM.decl("serp-item",{togglePreview:function(){if(this.__base.apply(this,arguments),$.browser.msie&&$.browser.version<9){var t=BEM.DOM.win.scrollTop(),e=this.findBlockOutside("main"),i=e&&e.elem("center");
if(!i.length)return;i[0].className=i[0].className,BEM.DOM.win.scrollTop(t)}}}),_borschik("lijmpv4PN9ZAkUM8HZAfvt_MeMA")&&BEM.DOM.decl({block:"check-button",baseBlock:"checkbox"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.elem("control").attr({role:"button","aria-labelledby":this.elem("text").attr("id"),"aria-pressed":this.hasMod("checked","yes")}),this.bindTo("keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||13===t.which&&this.elem("control").click()
})},checked:function(t,e){if(this.__base.apply(this,arguments)===!1)return!1;var i="yes"===e;this.elem("control").attr("aria-pressed",i)
},pressed:function(){return this.isDisabled()?!1:void 0}},_onMouseDown:function(){this.setMod("pressed","yes"),this.bindToDoc("mouseup touchend",function(){this.delMod("pressed"),this.unbindFromDoc("mouseup touchend")
})}},{live:function(){return this.__base.apply(this,arguments),this.liveBindTo("mousedown touchstart",function(t){this._onMouseDown(t)
}),!1}}),_borschik("S3rZ8rL-AZC-xAiQj7VGj3GJ_xM")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOn(this.elem("preview-btn","name","common"),"check-button");this.bindTo(this.elem("text-link"),"click",function(e){return"A"===e.target.nodeName.toUpperCase()||$(e.target).parents("a, .serp-item__preview-btn").length?void 0:(t.toggle(),!1)
})}}}),_borschik("nPXEnVUyFaUF3IE7DI1pETWtVBQ")&&BEM.DOM.decl({name:"serp-item",modName:"nahodki",modVal:"yes"},{onSetMod:{js:function(){this.nahodkiUrl=this.elem("title-link").attr("href"),this.__base()
}},nahodkiSave:function(){$.post("/storeclick",this.nahodkiGatherParams())},nahodkiGatherParams:function(){return{header:this.elem("title-link").html(),url:this.nahodkiUrl,request:BEM.blocks["i-global"].param("query"),request_time:this.params.nahodkiTime,yandexuid:BEM.blocks["i-global"].param("yandexuid"),ajax:1,snippet:this.nahodkiGatherText(),exsnp_img:this.nahodkiGatherImg()}
},nahodkiGatherText:function(){var t=this.elem("text").toArray().map(function(t){return $(t).html()}).join("<br/>");
return"<p>"+t+"</p>"},nahodkiGatherImg:function(){if(this.elem("nahodki-thumb").length){var t=this.elemParams("nahodki-thumb").url;
return BEM.blocks.uri.parse(t).protocol("http").toString()}}},{live:function(){return this.__base(),this.liveBindTo("title-link nahodki-link","click",function(){this.nahodkiSave()
}),!1}}),_borschik("EicMbNnxsvRJzobNcbnE2_XAhlQ")&&BEM.DOM.decl({block:"serp-item",modName:"content-preview-mode",modVal:"available"},{onSetMod:{js:function(){var t=this.params.backgroundClickCounter;
this.__base.apply(this,arguments),this.on("previewShow",function(){this.setMod("preview-active","yes")
},this),this.on("previewHide",function(){this.delMod("preview-active")},this),this.on("backgroundClick",function(){t&&t.length&&w("",t[0],t[1]),this.togglePreview("common")
})}}}),_borschik("Z4OhU8dNYLxR8QZDdcGj5rtAj38")&&BEM.DOM.decl({block:"serp-item",modName:"full",modVal:"infected"},{onSetMod:{js:function(){this.__base();
var t=this.previewToggle.bind(this),e=this.findBlockInside("serp-url");this.findBlocksInside(this.elem("title"),"b-link").forEach(function(e){e.bindTo("click",t)
},this),e.bindTo("arrow","click",t),e.bindTo("link","click",t),this.bindTo("warning-prev","click",t)}},previewToggle:function(t){t.preventDefault(),this.togglePreview("warning")
}}),_borschik("todhGbTkvvVvV5my_mvhsQOFay0")&&BEM.DOM.decl("serp-url",{_showPopup:function(t){this._popup=this._popup||this.findBlockInside("popup"),this._popup&&this._popup.toggle(t.data.domElem)
},destruct:function(){this._popup&&this._popup.destruct(),delete this._popup}},{live:function(){this.liveBindTo("arrow","click",function(t){this._showPopup(t)
})}}),_borschik("wrO7Y44XlpsbgxyAbSIMQegmkfo")&&BEM.DOM.decl("content-preview",{onSetMod:{js:function(){this.setMod("first","yes"),this._defaultParams=this.params,this._previousData={},this.channel("content-preview").on("update",function(t,e){this.update(e)
},this)}},destruct:function(){},show:function(t){BEM.DOM.update(this.elem("wrap"),t),this.delMod(this.elem("close-wrap"),"hidden"),BEM.DOM.update(this.elem("close-wrap"),this.__self.createCloser(this.params)),this._initCloseButton()
},showEmpty:function(){this.show(this.__self.createEmpty(this.params.empty)),sh(this.params.empty.showCounter)
},update:function(t){if(this._isInited||this._afterInit(),!this._isSameContent(t)){this._previousData=t,this.params=$.extend(!0,[],this._defaultParams,t),this.setMod("transition","yes"),!t.content&&!t.partial&&this.delMod("updated");
var e=t.content&&t.url||t.partial;if(t.content){if(t.type?this.setMod("type",t.type):this.delMod("type"),this._beforeUpdate(),this.show(t.content),this.setMod("updated","yes"),this._afterUpdate(),!e)return;
this.delMod("transition")}if(!t.url)return this.showEmpty();e?this._beforeUrlUpdate():this._beforeUpdate();
var i=this;e||(BEM.DOM.destruct(this.elem("close-wrap"),!0),this.setMod(this.elem("close-wrap"),"hidden","yes")),this.__self._getLoader().get({},function(t){setTimeout(function(){i._updateCssJs(t),e?i._appendHtml(t):i._updateHtml(t),e?i._afterUrlUpdate(t.content):i._afterUpdate()
},Math.max(Math.min(new Date-this._extraSpinStarted,0),this.__self.EXTRA_SPIN_MIN_DURATION)||0)},function(t){i._onError(t)
},{url:this.__self._getHandleUrlForRequest(t.url,!0)})}},_onError:function(){this.findBlockInside("spin").delMod("progress"),this.showEmpty()
},_updateHtml:function(t){BEM.DOM.update(this.elem("wrap"),t.content)},_appendHtml:function(t){BEM.DOM.update(this.elem("extra-wrap"),t.content)
},_updateCssJs:function(t){if(!this.__self._alreadyLoadedWithStyle){var e=this.findBlockOutside("b-page").domElem,i=this.findBlockOutside("main").domElem,n=document.createElement("script");
n.text=t.js,e[0].appendChild(n),i.prepend(t.css),this.__self._alreadyLoadedWithStyle=!0,this._afterInit()
}},_initCloseButton:function(){this.bindTo(this.findElem("close"),"click",function(){return this.findBlockOutside("main").closePanel(),!1
},this)},_afterInit:function(){this._isInited=!0},_showExtraPreloader:function(){var t=this;this._extraSpinTimeoutId=setTimeout(function(){t._extraSpinStarted=new Date,t.setMod(t.elem("outer-wrap"),"updating","yes"),t.findBlockOn(t.elem("extra-spin"),"spin").setMod("progress","yes")
},this.__self.EXTRA_SPIN_DELAY)},_beforeUrlUpdate:function(){this._showExtraPreloader()},_beforeUpdate:function(){BEM.DOM.destruct(this.elem("wrap"),!0),BEM.DOM.destruct(this.elem("extra-wrap"),!0),this.findBlockInside("spin").setMod("progress","yes"),this.trigger("beforeUpdate")
},_hideExtraPreloader:function(){var t=this;clearTimeout(this._extraSpinTimeoutId),this._extraSpinTimeoutId=null,t.delMod(t.elem("outer-wrap"),"updating"),t.findBlockOn(t.elem("extra-spin"),"spin").delMod("progress"),this._extraSpinStarted=null
},_afterUrlUpdate:function(){this._hideExtraPreloader(),this.findBlockOutside("main").syncScroll()},_afterUpdate:function(){var t=this._getExtraParams();
return this.findBlockInside("spin").delMod("progress"),this.delMod("first"),t.isEmpty?this.showEmpty():(t.counter&&sh(t.counter),this._initCloseButton(),this.findBlockOutside("main").syncScroll(),this.trigger("updated"),void 0)
},_getExtraParams:function(){var t=this.findElem("extra-params");return t.length?this.elemParams(t):{}
},_isSameContent:function(t){return!t.force&&this._previousData.url===t.url&&this._previousData.content===t.content
}},{EXTRA_SPIN_DELAY:500,EXTRA_SPIN_MIN_DURATION:300,isCssJsLoaded:!1,_loader:null,_getLoader:function(){return this._loader=this._loader||BEM.create("i-request_type_ajax",{dataType:"jsonp",timeout:1e4,data:{yu:BEM.blocks["i-global"].param("yandexuid")}}),this._loader
},_getHandleUrlForRequest:function(t){return this._alreadyLoadedWithStyle?t:(this._requestedWithStyle=t,t+"&css=1")
},_getHandleUrlForPreload:function(t){return this._requestedWithStyle&&this._requestedWithStyle!==t?t:t+"&css=1"
},preload:function(t){this._getLoader().get({},function(){},{url:this._getHandleUrlForPreload(t)})},createCloser:function(t){return BEMHTML.apply({block:"b-link",mix:{block:"content-preview",elem:"close"},counter:t.closeCounter,content:[{block:"content-preview",elem:"close-icon"},{block:"content-preview",elem:"close-text",content:t.closeText}]})
},createEmpty:function(t){return BEMHTML.apply([{block:"content-preview",elem:"content",mods:{empty:"yes"},content:t.text.replace("%sitename%",BEMHTML.apply({block:"b-link",mix:[{block:"content-preview",elem:"empty-link"}],url:t.siteUrl,counter:t.textCounter,target:"_blank",content:t.siteName}))}])
}}),_borschik("RK5tvGUWSp99gLSF_ib0Chz5t30")&&BEM.DOM.decl("video-player",{open:function(){this._spin=this.findBlockInside("spin"),this.__self.closeActivePlayer(this),this._setInitialMods(),this._initPlayer(),this.isOpened||(this._setPlayerParams(),this.trigger("open"),this._sendSERPCounter("open")),this.isOpened=!0,this.params.doNotScroll||this.findBlockOutside({blockName:"content-preview",modName:"updated",modVal:"yes"})||this.afterCurrentEvent(this._scrollToView)
},close:function(){this._player.clean(),this.isOpened=!1,this.__self.dropActivePlayer(this),this.trigger("close"),this._sendSERPCounter("close")
},destruct:function(){this.isOpened&&this.close(),this.unbindFromWin("resize"),this.__base.apply(this,arguments)
},_setInitialMods:function(){this.delMod("error"),this._spin.setMod("progress","yes")},_initPlayer:function(){this._player||(this._player=this.findBlockInside("player"),/MSIE 8/i.test(navigator.userAgent)&&this._player.elem("iframe")[0].removeAttribute("allowfullscreen"),this._player.on("error load-error",this._onError,this),this._player.on("started",this._onStart,this),this._player.on("load-success",this._onLoadSuccess,this),this._player.on("paused",this._onPause,this),this._player.on("ended",this._onEnd,this))
},_setPlayerParams:function(){this._spin.setMod("progress","yes"),this._player.setParams({hosting:this.params.hosting,url:this.params.src,autoplay:this.params.autoplay,properties:this.params.videoUrlParam})
},_onStart:function(t,e){this._spin.delMod("progress"),this._sendSERPCounter("play",e.time?",-time="+e.time:"")
},_onLoadSuccess:function(){this._spin.delMod("progress")},_onPause:function(t,e){this._sendSERPCounter("pause",e.time?",-time="+e.time:"")
},_onEnd:function(){this._sendSERPCounter("end")},_onError:function(t,e){this._spin.delMod("progress"),this.setMod("error","yes"),this._player.clean(),this._sendErrCounter(e)
},_scrollToView:function(){var t=this.domElem.height(),e=this.findBlockOutside("b-page").findBlockInside("header").domElem.outerHeight(),i=this.domElem.offset().top-e,n=this.domElem.offset().top-BEM.DOM.win.height()+t+5,s=Math.min(i,Math.max(n,BEM.DOM.win.scrollTop()));
$("html, body").animate({scrollTop:s},"fast")},_sendErrCounter:function(t){w(null,this.params.countersData.techPath,"-event=error,-hosting="+t.hosting+",-code="+t.code+",-source-url="+encodeURI(t.url)+(t.time||0===t.time?",-time="+t.time:""))
},_sendSERPCounter:function(t,e){e=e||"",w(this.domElem[0],this.params.countersData[t+"Path"],this.params.countersData.vars+e)
}},{live:!0,_current:null,closeActivePlayer:function(t){this._current&&this._current.trigger("closeActive"),this._current=t
},dropActivePlayer:function(t){t===this._current&&(this._current=null)}}),_borschik("UQoE3whoo9-145V3qyjMQ4wxq3c")&&BEM.DOM.decl({block:"video-player",modName:"auto",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.open(),this._spin.delMod("progress")
}}},{live:!1}),_borschik("dwnvRHqDY4dzJkP7PRg4PsF4vVw")&&BEM.DOM.decl("player",{onSetMod:{"iframe-listener":{yes:function(){this.afterCurrentEvent(function(){this._startListenHostingsPostMessage()
}.bind(this))}}},setParams:function(t){var e=this._getNormalizedParams(t);this._isEqual(this.params,e)||(this.params=e,this._setMods()._update())
},_setMods:function(){var t=this.params,e=t.hosting||"",i=e&&-1!==this.__self.IFRAME_LISTENERS.indexOf(e),n=-1===this.__self.NO_TRANSPORT.indexOf(e),s="";
return n&&(t.autoplayHtml&&t.noAutoplayHtml?s="direct":t.url&&(s="ajax")),this.setMod("transport",s),i&&this.setMod("iframe-listener","yes"),this.setMod("hosting",e),this
},getParams:function(){return this.params},_getNormalizedParams:function(t){var e=this.__self.HOSTING_NORMALIZE_MAP,i={};
return this.__self.ALLOWED_PARAMS.forEach(function(e){"undefined"!=typeof t[e]&&(i[e]=t[e])}),this.params.includeHostings&&(e=function(t,e){var i={};
return $.each(t,function(t,n){-1!==e.indexOf(n)&&(i[t]=n)}),i}(e,this.params.includeHostings)),i.hosting=t.hosting&&e[t.hosting]?e[t.hosting]:"",i.includeHostings=this.params.includeHostings,i
},_replacePlayerSizes:function(t){return t.replace(/%{playerWidth}/gi,this.domElem.width()).replace(/%{playerHeight}/gi,this.domElem.height())
},_updateDomElem:function(t){return t=this._replacePlayerSizes(t),this.domElem.html(t),this},_update:function(){},clean:function(){return this.unbindFromWin("message"),this.__self._alreadyListeningHostingsPostMessages=!1,this.domElem&&this.domElem.empty(),this
},_triggerEvent:function(t,e){e&&(e.hosting=this.getMod("hosting")),-1!==["started","paused","ended","error"].indexOf(t)&&this.trigger(t,e)
},destruct:function(){this.__base.apply(this,arguments),this.unbindFromWin("message")}},{SOFT_404_ERROR_CODE:"s404",HOSTING_NORMALIZE_MAP:{},ALLOWED_PARAMS:["url","autoplay","autoplayHtml","noAutoplayHtml","properties","hosting","remoteServerUrl"],IFRAME_LISTENERS:["mailru","rutube"],NO_TRANSPORT:[],registerHosting:function(t){this.HOSTING_NORMALIZE_MAP=$.extend(this.HOSTING_NORMALIZE_MAP,t)
},registerNoTransport:function(t){this.NO_TRANSPORT.push(t)}}),_borschik("2Evt6NlnXYxdg-PSUILOczreYJE")&&!function(){function t(t){return window.YT?(setTimeout(t,1),void 0):i?(i.promise().done(t),void 0):(i=$.Deferred(),i.promise().done(t),window.onYouTubeIframeAPIReady=function(){i.resolve(),i=null,delete window.onYouTubeIframeAPIReady
}.bind(this),$.getScript("//www.youtube.com/iframe_api"),void 0)}function e(t){var e;return[/(?:youtube\.com\/watch\?v=([\da-z\-_]+))/i,/(?:youtube\.com\/v\/([\da-z\-_]+))/i,/(?:youtu\.be\/([\da-z\-_]+))/i].some(function(i){var n=t.match(i);
return e=n&&n[1],!!e}),e}var i=null;BEM.DOM.decl({block:"player",modName:"hosting",modVal:"youtube"},{_update:function(){this.params.videoid=e(this.params.url),t(function(){this._player=new YT.Player(this.domElem.html("<div>").children()[0],{width:"100%",height:"100%",videoId:this.params.videoid,events:{onReady:this._onReady.bind(this),onStateChange:this._onStateChange.bind(this),onError:this._onError.bind(this)}})
}.bind(this))},_onStateChange:function(t){var e=Math.round(this._player.getCurrentTime()),i={};i[YT.PlayerState.PLAYING]="started",i[YT.PlayerState.PAUSED]="paused",i[YT.PlayerState.ENDED]="ended",i[t.data]&&this._triggerEvent(i[t.data],{url:this.params.url,time:e})
},_onError:function(t){this._triggerEvent("error",{url:this.params.url,time:Math.round(this._player.getCurrentTime()),code:t.data})
},_onReady:function(){this.params.autoplay&&this._player.playVideo()}}),BEM.blocks.player.registerHosting({youtube:"youtube","youtube.com":"youtube","www.youtube.com":"youtube"}),BEM.blocks.player.registerNoTransport("youtube")
}(),_borschik("SJeR6nV8TKZPb7uVoJfJrfYQ75U")&&(BEM.DOM.decl({block:"player",modName:"hosting",modVal:"mailru"},{_onHostingsPostMessage:function(t){if(t=t.originalEvent,this._isCorrectOrigin(t.origin)){var e={start:"started",pause:"paused",stop:"ended"};
e[t.data]&&this._triggerEvent(e[t.data],{url:this.params.url})}},_isCorrectOrigin:function(t){return-1!==t.indexOf("mail.ru")
}}),BEM.blocks.player.registerHosting({maulru:"mailru","video.mail.ru":"mailru"})),_borschik("dPnXPO-08XipMO6eucXc7QU-_0E")&&(BEM.DOM.decl({block:"player",modName:"hosting",modVal:"rutube"},{_onHostingsPostMessage:function(t){if(t=t.originalEvent,this._isCorrectOrigin(t.origin)){var e=$.parseJSON(t.data),i=e.type,n=e.data&&e.data.time,s=e.data&&e.data.state;
"player:currentTime"===i?this._setCurrentTime(n):"player:changeState"===i&&s?this._triggerPlayerStateEvent(s):"player:playComplete"===i&&this._triggerPlayerStateEvent("ended")
}},_isCorrectOrigin:function(t){return-1!==t.indexOf("rutube")},_setCurrentTime:function(t){this._time=t
},_getCurrentTime:function(){return Math.round(this._time)||0},_triggerPlayerStateEvent:function(t){var e={playing:"started",paused:"paused",ended:"ended"};
"lockScreenOn"===t?this._triggerEvent("error",{url:this.params.url,code:this.__self.SOFT_404_ERROR_CODE}):e[t]&&this._triggerEvent(e[t],{url:this.params.url,time:this._getCurrentTime()})
}}),BEM.blocks.player.registerHosting({rutube:"rutube","rutube.ru":"rutube"})),_borschik("iu6m7qYfC7iWqTYjFKofj_hB63g")&&BEM.DOM.decl({block:"player",modName:"transport",modVal:"ajax"},{DEFAULT_EMBED_URL:"/video/hosting?action=generateEmbedSimple",_update:function(){this.__base.apply(this,arguments);
var t=this.params;this._deferred&&this._deferred.reject(),this._loadPlayer(function(e){"undefined"!=typeof e&&(e.autoplay||e.noautoplay)?this._updateDomElem(t.autoplay?e.autoplay.html:e.noautoplay.html):this.trigger("load-error")
}.bind(this))},_loadPlayer:function(t){this._deferred=$.Deferred(),this.trigger("load-starts"),$.ajax({url:this.DEFAULT_EMBED_URL,context:this,dataType:"json",timeout:1500,data:{properties:this.params.properties||"",url:this.params.url}}).done(function(t){this._deferred&&this._deferred.resolve(t),this._cleanPlayerLoad(),this.trigger("load-success")
}).fail(function(t,e){this._cleanPlayerLoad(),this.trigger("load-error",[e])}),this._deferred.promise().done(t)
},clean:function(){return this.__base.apply(this,arguments),this._ajax&&(this._ajax.abort(),this._cleanPlayerLoad()),this
},_cleanPlayerLoad:function(){delete this._deferred,delete this._ajax}}),_borschik("yANtkX9tCdk7iOpimA5o4cya-us")&&BEM.DOM.decl({block:"player",modName:"transport",modVal:"direct"},{_update:function(){this.__base.apply(this,arguments);
var t=this.params,e="";return t.autoplay&&t.autoplayHtml?e=t.autoplayHtml:!t.autoplay&&t.noAutoplayHtml&&(e=t.noAutoplayHtml),e?(this._updateDomElem(e),void 0):void 0
}}),_borschik("_Rp-S27kVuL4khfj0x3uC_rQ4CQ")&&BEM.DOM.decl({block:"player",modName:"iframe-listener",modVal:"yes"},{_startListenHostingsPostMessage:function(){this.__self._alreadyListeningHostingsPostMessages||(this.bindToWin("message",this._onHostingsPostMessage.bind(this)),this.__self._alreadyListeningHostingsPostMessages=!0)
}}),_borschik("68NEhNk_lq9mEOTOgbuXsQm1B0U")&&!function(){function t(){var t,e,i,n,s,o=["constructor","setParams","getDefaultParams","destruct","clean"],r={};
for(t=Object.keys(BEM.blocks.player.prototype),e=0,i=t.length;i>e;e++)n=t[e],s=BEM.blocks.player.prototype[n],$.isFunction(s)&&0!==n.indexOf("_")&&-1===o.indexOf(n)&&!function(t){r[t]=function(){return this._callRemoteMethod.call(this,t,Array.prototype.slice.call(arguments))
}}(n);BEM.DOM.decl({block:"player",modName:"remote",modVal:"client"},r)}BEM.DOM.decl({block:"player",modName:"remote",modVal:"client"},{onSetMod:{js:function(){this._ready=!1,this._readyCommands=[],this._callPromises={},this._generateId(),this._startListenPostMessage(),this._iframe=this.elem("iframe")[0],this.params.remoteServerUrl?this._updateIframeUrl(this.params.remoteServerUrl):this._updateIframeUrl(this._getServersUrl())
}},_getServersUrl:function(){return"//yastatic.net/video-player/"+this.__self.STATIC_VERSION+"/pages-desktop/player/player.html"
},_update:function(){var t=$.extend(this.params,{});return this.hasMod("transport","ajax")?(this._loadPlayer(function(e){"undefined"!=typeof e&&(e.autoplay||e.noautoplay)?(t.noAutoplayHtml=e.noautoplay.html,t.autoplayHtml=e.autoplay.html,this._callRemoteMethod("setParams",[t])):this.trigger("load-error")
}.bind(this)),void 0):(this._callRemoteMethod("setParams",[t]),void 0)},_generateId:function(){this._id=this._uniqueId("player-remote-")
},_updateIframeUrl:function(t){this._iframe.src=t+"#"+this._id},_startListenPostMessage:function(){this.bindToWin("message",this._onPostMessage.bind(this))
},_onPostMessage:function(t){var e,i=t.originalEvent;i.source===this._iframe.contentWindow&&(e=$.parseJSON(i.data),setTimeout(function(){"event"===e.type?this._processPostMessageEvent(e):"result"===e.type&&this._processPostMessageResult(e)
}.bind(this),1))},_processPostMessageEvent:function(t){"init"===t.name?(this._ready=!0,this._callRemoteDelayedMethods()):this.trigger(t.name,t.data)
},_processPostMessageResult:function(t){this._callPromises[t.callId].resolve(t.data),delete this._callPromises[t.callId]
},_callRemoteMethod:function(t,e,i){return i||(i=this._uniqueId(),this._callPromises[i]=$.Deferred()),this._ready?this._iframe.contentWindow.postMessage(JSON.stringify({type:"command",name:t,args:e,callId:i,id:this._id}),"*"):this._readyCommands.push([t,e,i]),this._callPromises[i].promise()
},_callRemoteDelayedMethods:function(){for(;this._readyCommands.length;)this._callRemoteMethod.apply(this,this._readyCommands.shift())
}}),t()}(),_borschik("NXfVsSXlJHMJ2yoZYyMdeALw6AQ")&&BEM.DOM.decl("player",{},{STATIC_VERSION:"0xce8f4e1"}),_borschik("KjOZwKma7JrZjYktLupVpgZ7apE")&&BEM.DOM.decl("player",{_uniqueId:function(){var t=0;
return function(e){return(e||"")+ ++t}}(),_isEqual:function(t,e){if(t===e)return 0!==t||1/t===1/e;if(null==t||null==e)return t===e;
if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var i in t)if(t.hasOwnProperty(i)&&t[i]!==e[i])return!1;
return!0}}),_borschik("0F4xLmsAbPViB0kPmOzDw0KRgas")&&!function(){BEM.DOM.decl({block:"player",modName:"hosting",modVal:"yavideo"},{_update:function(){this.__base.apply(this,arguments);
var t=this.params,e='<iframe src="'+t.url+(t.autoplay?"&autoplay=1":"")+'"></iframe>',i=this;this._updateDomElem(e).domElem.find("iframe").on("load",function(){i.trigger("load-success")
})}}),BEM.blocks.player.registerHosting({"yandex.video":"yavideo",yavideo:"yavideo"}),BEM.blocks.player.registerNoTransport("yavideo")
}(),_borschik("-9ZNbb1CQDUZ8SeCwy-X1mCO9jY")&&!function(){var t="background-position",e="0 -",i=!1,n="animation",s="islands-spin",o="transform",r="sprite";
!function(){var s=document.createElement("img");void 0!==s.style["background-position-y"]&&(t="background-position-y",e="-");
var o="Webkit Moz O ms Khtml".split(" ");if(void 0!==s.style.animationName)i=!0;else for(var r=0;r<o.length;r++){var a=o[r];
if(void 0!==s.style[a+"AnimationName"]){n="-"+a.toLowerCase()+"-animation",i=!0;break}}}(),BEM.DOM.decl("spin",{getDefaultParams:function(){return{animation:o,startDelay:0,frameAngle:10,frameTime:27,frames:36}
},onSetMod:{js:function(){i||(this.params.animation=r),this.params.animation===r&&(this._size=parseInt(this.getMod("size")||/[\d]+/.exec(this.getMod("theme"))[0],10),this._height=this._size*this.params.frames,this._curFrame=0,this.setMod("support-transforms","no")),this.hasMod("progress","yes")&&this._startSpin()
},progress:{yes:function(){this._startSpin()},"":function(){this._stopSpin()}}},_startSpin:function(){var t=function(){if(this.hasMod("progress","yes")&&!this._interval)switch(this.params.animation){case o:var t=s+" "+Math.floor(360*this.params.frameTime/this.params.frameAngle)+"ms infinite linear";
this.elem("icon").css(n,t);break;case r:this._interval=setInterval(this._switchFrame.bind(this),this.params.frameTime)
}}.bind(this);this._delayTimeout=setTimeout(t,this.params.startDelay)},_stopSpin:function(){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._interval&&(clearInterval(this._interval),delete this._interval)
},_switchFrame:function(){var i=++this._curFrame,n=i*this._size;n>=this._height&&(this._curFrame=n=0),this.elem("icon").css(t,e+n+"px")
},destruct:function(){this._stopSpin(),this.__base.apply(this,arguments)}})}(),_borschik("Ff7IPjfM9m4CZsEYlhfqvb9pO-A")&&BEM.decl("serp-request",{onSetMod:{js:function(){this._buf={},this._request=BEM.create("i-request_type_ajax",{url:BEM.blocks["i-global"].param("ajaxUrl")||"",data:{yu:BEM.blocks["i-global"].param("yandexuid"),staticVersion:BEM.blocks["i-global"].param("static-host").match(/\/([^\/]*)\/$/)[1]},cacheTimeout:3e5,traditional:!0,paramsToSettings:["traditional"],cache:BEM.blocks["i-global"].param("cache")}),this._requestParams={},this._location=BEM.blocks.location.getInstance(),this._doRequest=$.debounce(this._doRequest,this.__self.debounceTime,this),this.channel("serp-request").on("request",function(t,e){this._isEmptyBuf=!1,this._buf[e.key]=e,this._doRequest(t.reasonForReload)
},this)}},_doRequest:function(t){var e=this._buf,i={},n={};this._isEmptyBuf||(t&&(i.reload=t),$.each(e,function(t,e){n[t]=e.data||{},$.extend(i,e.params)
}),this._tmpBuf=this._buf,this._buf={},this._isEmptyBuf=!0,this._request.get($.extend({rf:this._location.getState().referer},this._location.getState().params,i,this.getSearchParams(n),BEM.blocks["i-global"].param("serpRequestExtraParams")),this.changeThis(this._onSuccess),this.changeThis(this._onError),this._requestParams))
},_onSuccess:function(t){if(t.error)return this._onError(t.error),void 0;if(t.captcha)return location.href=t.captcha["captcha-page"],void 0;
if(t["static-host"]!=BEM.blocks["i-global"].param("static-host"))return this._onError("Invalid static-host"),void 0;
BEM.blocks["i-global"].setParams({reqid:t.serp.params.reqid,clck:t.serp.params.clck,query:t.serp.params.query,serpRequestExtraParams:t.serp.params.extraParams});
var e=this._tmpBuf;$.each(t,function(t,i){e[t]&&e[t].success&&e[t].success(i)}),this.channel("serp-request").trigger("success",t)
},_onError:function(t){if(200===t.status||409===t.status)return this._reloadPage(),void 0;var e=this._tmpBuf;
$.each(e,function(i){"function"==typeof e[i].error&&e[i].error(t)})},_reloadPage:function(){document.location=this._location.getState().url
},getSearchParams:function(t){return{ajax:JSON.stringify(t)}}},{debounceTime:15}),_borschik("RUFibUNjAr_cIOOtPQ9NgvjEfXI")&&BEM.decl("serp-request",{_reloadPage:function(){document.location=window.history&&"pushState"in window.history?BEM.blocks.uri.parse(this._location.getState().url).addParam("reload",3).toString():this._location.getState().url
}}),_borschik("ldiS7h28htxUZDTBzljljI2EMqA")&&BEM.decl("serp-request",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._preloadedRequests={},this.channel("serp-request").on("preload",function(t,e){this._isEmptyBuf=!1,e.error&&delete e.error,e.success&&delete e.success,this._buf[e.key]=e;
var i=e.cacheHub||{};i.isPreloadRequest=!0,i.hubCallback=this._addToPreloaded(),this._doRequest(i)},this)
}},_addToPreloaded:function(){var t=this;return function(e,i){t._preloadedRequests[i]={hub:e,guessed:!1},t._sendPreloadCounter(!1,e)
}},_checkPreloaded:function(t){if(t in this._preloadedRequests){var e=this._preloadedRequests[t];if(e.guessed)return;
this._sendPreloadCounter(!0,e.hub),e.guessed=!0}},_sendPreloadCounter:function(t,e){var i={suggest:695,more:75};
if(i[e]){var n="//"+BEM.blocks["i-global"].param("click-host")+"/",s=["1112="+BEM.blocks.serp._prefetchTask,"884="+(t?1:0),"76="+i[e]],o=["click","dtype=stred","pid=306","cid=72304","path=690.1035.1034.1088","vars="+s.join(","),"*"];
(new Image).src=n+o.join("/")}},_doRequest:function(t){BEM.blocks["i-global"]._params.sts=(new Date).getTime(),this._requestParams=t||{},this.__base.apply(this,arguments)
},_onSuccess:function(t,e){this._requestParams.isPreloadRequest||(e&&e.cacheKey&&this._checkPreloaded(e.cacheKey),this.__base.apply(this,arguments),t.error||BEM.blocks["i-global"].sendCounters(BEM.blocks["i-global"].viewPortParamsCount()))
}}),_borschik("YGqCIUeiauGbmtyD2clrGwdOOkM")&&BEM.DOM.decl("serp",{onSetMod:{js:function(){BEM.create("serp-request"),BEM.blocks["i-ua"].canUseAjax()&&this.afterCurrentEvent(this._initBlocks)
}},_initBlocks:function(){var t=this.__self.blocks.map(function(t){return this.findBlockOn(t)},this);
t.unshift(this),t.forEach(this._initBlock)},_initBlock:function(t){t&&(t.__onLocationChange=function(e){var i;
"function"==typeof t.onAjaxPrepare&&t.onAjaxPrepare(),"function"==typeof t.getAjaxData&&(i=t.getAjaxData()),this.channel("serp-request").trigger({type:"request",reasonForReload:e.reasonForReload},{key:t.params.ajaxKey||t.__self.getName(),data:i||{},success:t.changeThis(function(t){"function"==typeof this.onAjaxSuccess?this.onAjaxSuccess(t):t&&t.html&&BEM.DOM.update(this.domElem,$(t.html).html())
}),error:t.changeThis(function(t){"function"==typeof this.onAjaxError&&this.onAjaxError(t)})})},BEM.blocks.location.getInstance().on("change",t.__onLocationChange))
},_startProgress:function(){this.spin||(this.spin=this.findBlockInside(this.elem("spin"),"spin")),this.spin&&this.spin.setMod("progress","yes"),this.setMod("loading","yes"),this.setMod(this.elem("spin"),"progress","yes"),BEM.DOM.scope.attr("aria-busy",!0)
},_stopProgress:function(){BEM.DOM.scope.attr("aria-busy",!1),this.delMod("loading"),this.delMod(this.elem("spin"),"progress"),this.spin.delMod("progress")
},_hideError:function(){},_showError:function(t){t&&alert(t)},addRequestListener:function(t){this._initBlock(t)
},removeRequestListener:function(t){t&&"function"==typeof t.__onLocationChange&&BEM.blocks.location.getInstance().un("change",t.__onLocationChange)
},onAjaxPrepare:function(){this._hideError(),this._startProgress()},onAjaxError:function(t){return"string"==typeof t&&~t.indexOf("static-host")?(this._reloadPage(),void 0):(this._stopProgress(),this._showError(this.params[t.readyState?"serverError":"clientError"]),void 0)
},_reloadPage:function(){document.location=BEM.blocks.location.getInstance().getState().url},onAjaxSuccess:function(t){this._stopProgress();
var e=t.params.found,i=document.createElement("i");i.innerHTML=e,document.title=i.firstChild.nodeValue
}},{blocks:[]}),_borschik("VBkjLlUQKPW6Id61A8I4hEItidA")&&BEM.DOM.decl("serp",{_reloadPage:function(){document.location=BEM.blocks.uri.parse(BEM.blocks.location.getInstance().getState().url).addParam("reload",1).toString()
}}),_borschik("FVsVqkDgfiwW6wCq_HkB4U-87WA")&&!function(){BEM.DOM.decl("serp",{onSetMod:{js:function(){this.__base();
var t=this.__self,e=function(e){var i=e.target.domElem.bem(this.getName()),n=i&&!i.hasMod("ajax","no")&&(i.findBlockOutside("serp")||i.hasMod("ajax","yes"));
if(n){var s=i.domElem.attr("href");s&&t.go(s)}};BEM.blocks["b-link"].on("click",e),BEM.blocks.link.on("click",e)
}},_stopProgress:function(){var t=(new Date).getTime(),e=this.spinStarted.getTime(),i=250;i=Math.max(0,i-(t-e)),this.hasMod("loading","yes")&&window.setTimeout(this.__base.bind(this),i),BEM.channel("serp-request").trigger("stopProgress")
},_startProgress:function(){BEM.channel("serp-request").trigger("startProgress"),this.elem("spin").css("padding-top",this.findBlockOutside("header").domElem.outerHeight(!0)+50),this.spinStarted=new Date,this.__base()
},_showError:function(t){this._main=this.findBlockOutside("main"),this._noConnectionBlock=this._main&&this._main.findBlockInside("no-connection"),this._noConnectionBlock&&(this._noConnectionBlock.elem("message").text(t),this._noConnectionBlock.setMod("visible","yes"),this._main.setMod("hidden-content","yes"))
},showServerError:function(){this._stopProgress(),this._showError(this.params.serverError)},_hideError:function(){this._noConnectionBlock&&(this._noConnectionBlock.delMod("visible"),delete this._noConnectionBlock,this._main&&this._main.delMod("hidden-content"))
}},{go:function(t){if(BEM.blocks["i-ua"].canUseAjax()){var e=BEM.blocks.location.getInstance();"string"==typeof t?e.change({url:t}):e.change(t)
}else"string"==typeof t&&(window.location=t)},blocks:["input","misspell","b-counters","more","pager","region","region-change","navigation","competitors","main","search","first-impression","z-entity-collection","feedback"]})
}(),_borschik("taGiFmN6Yeh1ZQJXEskCGpn_gC0")&&BEM.DOM.decl("more",{onAjaxSuccess:function(t){this._page=t.params&&t.params.page,BEM.DOM.init(BEM.DOM.update(this.domElem,$(t.html).html()))
},onAjaxError:function(t){return"string"==typeof t&&~t.indexOf("static-host")&&this._requestInProgress&&this.elem("button").length?(window.location=this.elem("button").attr("href"),void 0):void 0
}}),_borschik("QQWKm0CKCfKC5McXNWHEl2rCu2s")&&BEM.DOM.decl("more",{onSetMod:{js:function(){this._page=this.params.page,this._serp=this.findBlockOn("serp"),this._list=this._serp.findBlockOn("main"),this._pager=this._serp.findBlockOn("pager"),this._spin=this.findBlockInside("spin"),this._setCounterData(),this._counted="",this._onResize=$.throttle(this._onResize,100),this.bindToWin("load scroll resize",this._onResize)
}},_setCounterData:function(){this._showCounter=this.dropElemCache("button").elem("button").length&&this.elemParams("button").showCounter[0]
},_onResize:function(){var t=this.domElem;if(t.is(":empty"))return!1;if(!this._showCounter||this._counted===this._showCounter)return!1;
var e=t.offset().top,i=BEM.DOM.win.height()+BEM.DOM.win.scrollTop();i>=e&&this._counted!==this._showCounter&&(this._counted=this._showCounter,w.apply("",[].concat(t[0],this._showCounter)))
},_onClick:function(){this._getPortion()},_hideOnLoad:function(t){"undefined"==typeof this._hideOnLoadBlock&&(this._hideOnLoadBlock=this.findBlockOutside("b-page").findBlockInside("more-hidden")),this._hideOnLoadBlock&&(t?this._hideOnLoadBlock.setMod("visibility","hidden"):this._hideOnLoadBlock.delMod("visibility"))
},_toggleSpin:function(t){var e=this._spin=this.findBlockInside("spin"),i=this.findElem("button");this.toggleMod("progress","yes",t),t?(e.setMod("progress","yes"),this.setMod(i,"hidden","yes")):(e.delMod("progress"),this.delMod(i,"hidden")),this._hideOnLoad(t)
},_getPortion:function(){var t=this.findBlockOutside("b-page");if(this.params.isLast)return this;if(this._page>9||!BEM.blocks["i-ua"].canUseAjax()||t.hasMod("baseline","serp3")||t.hasMod("pager","simple")){var e=BEM.blocks.location.getInstance(),i=e.getUri().replaceParam("p",this._page).toString();
return BEM.blocks.serp.go(i),this}this._toggleSpin(!0);var n=this._list;return this.channel("serp-request").trigger("request",{key:this.__self.getName(),params:{p:this._page},data:{endless:1},success:this.changeThis(function(t){this.onAjaxSuccess(t)
}),error:this.changeThis(function(t){this.onAjaxError(t)})}).trigger("request",{key:n.__self.getName(),success:n.update.bind(n)}).trigger("request",{key:this._pager.__self.getName(),success:this.changeThis(function(t){this.trigger("nextPage"),this._pager.update(t,["bottom"])
})}),this},onAjaxSuccess:function(){this._toggleSpin(!1),this.__base.apply(this,arguments),this._setCounterData()
},onAjaxError:function(){this.__base.apply(this,arguments),this._toggleSpin(!1)}},{live:function(){this.liveBindTo("button","click",function(){return BEM.blocks["i-ua"].canUseAjax()?(this._onClick(),!1):void 0
})}}),_borschik("b5GbVRLGCr5AimRuC0U6GVGVKPE")&&!function(t){var e=Math.floor(100*Math.random());BEM.DOM.decl({name:"button",modName:"counter",modVal:"yes"},{_onCounterClick:function(){e<=(this.params["show-counter"]||10)&&t.ch(this.params.counter)
}},{live:function(){return this.liveBindTo({modName:"counter",modVal:"yes"},"mousedown",function(t){this._onCounterClick(t)
}),this.__base.apply(this,arguments)}})}(window.Lego),_borschik("pBMfOqg20vznSF118h-lVSmHe7Q")&&BEM.DOM.decl("button",{onSetMod:{focused:{yes:function(){return this.hasMod("focus","no")?!1:this.__base.apply(this,arguments)
}}}}),_borschik("6qeIKP0SIWA1Xzd8NTV1xoQuz1Q")&&BEM.DOM.decl("more-hidden",{},{live:!0}),_borschik("d7iDsv0dbPumzmZFqyNmEXz0Sfw")&&BEM.DOM.decl("pager",{onSetMod:{js:function(){this._instances={top:this.elem("instance","position","top"),bottom:this.elem("instance","position","bottom")}
}},update:function(t,e){e?e.forEach(this.changeThis(function(e){this._instances[e]&&BEM.DOM.update(this._instances[e],$(t.html).html())
})):BEM.DOM.update(this.domElem,$(t.html).html())},onAjaxSuccess:function(t){var e=t.params&&1!==t.params.nextPage;
e||BEM.DOM.update(this._instances.top,""),t.params&&$.extend(this.params,t.params),this.update(t,e?null:["bottom"])
}}),_borschik("DGaoW2HYVG_JLxndS_Ah8IAKgpA")&&BEM.DOM.decl("pager",{onSetMod:{js:function(){this.__base(),this.bindToDoc("keydown",function(t){if(!this._focusOnInput()&&this._modifierPressed(t)){var e,i=t.keyCode===this.__self.ARROW_NEXT?"next":t.keyCode===this.__self.ARROW_BACK?"prev":null;
i&&(t.preventDefault(),e=this._getUrl(i),e&&BEM.blocks.serp.go(e))}})}},_getUrl:function(t){var e=this.params["next"===t?"nextPage":"prevPage"];
return e!==!1&&BEM.blocks.location.getInstance().getUri().replaceParam("p",e).toString()},_modifierPressed:function(t){var e,i,n=0,s=this.__self;
if(!t[s.modifierKey])return!1;for(e=0,i=s.modifierKeys.length;i>e;e++)t[s.modifierKeys[e]]&&n++;return 1===n
},_focusOnInput:function(){var t=document.activeElement;return t&&"input textarea".indexOf(t.tagName.toLowerCase())>-1
}},{modifierKey:-1!==navigator.userAgent.search(/Mac OS X/i)?"altKey":"ctrlKey",modifierKeys:["ctrlKey","altKey","shiftKey","metaKey"],ARROW_NEXT:39,ARROW_BACK:37}),_borschik("v8Un0uNE1GbnGWA-s9nGMeJ4HUw")&&BEM.DOM.decl("navigation",{onSetMod:{js:function(){this.__base(),this._searchInput=this.findBlockOutside("b-page").findBlockInside("search").findBlockInside("input"),this._onSearchQueryChange=$.debounce(this._onSearchQueryChange,200,this),this._searchInput.on("change",this._onSearchQueryChange,this),this._changeLabel(this._searchInput.val())
}},_onSearchQueryChange:function(){var t=this.elem("item").map(this.changeThis(this._processItem)),e=this._searchInput.val();
t.each(this.changeThis(function(t,i){var n,s,o=this.findBlockInside(i,"service").elem("url"),r=o.attr("href");
$.url&&r&&e&&(n=$.url.getParam(r,"request")?"request":"text",s=$.url.setParam(r,n,$.trim(e)),o.attr("href",s))
})),this._changeLabel(e)},_changeLabel:function(t){t=t?BEM.I18N("navigation","search-on",{query:t}):BEM.I18N("navigation","search-also"),this.domElem.attr("aria-label",t)
}}),_borschik("nRDw4bTs1E0PbjOTwNV5p3Ujh3M")&&BEM.DOM.decl("navigation",{onSetMod:{js:{inited:function(){this._selectedItem=-1,this._items=this.elem("item","service","yes").map(this.changeThis(this._processItem,this)),this._onWindowResize=$.throttle(this._onWindowResize,100,this),this._onWindowResize(),this.bindToWin("resize",this._onWindowResize)
}}},onElemSetMod:{item:{state:{selected:function(t){t.attr({role:"link","aria-hidden":!0})},"":function(t){t.attr("role","listitem").removeAttr("aria-hidden")
}}}},_processItem:function(t,e){var i=$(e),n=this.getMod(i,"name"),s=this.hasMod(i,"state","selected");
return n?(s&&(this._selectedItem=t),$.extend(i,{_index:t,_cachedBottom:this._getBorders(i).bottom,_sticky:s}),i):null
},_onWindowResize:function(){this.reflow()},reflow:function(){var t,e=this._getViewportThreshold(),i=this._items.length,n=0;
for(t=i;t--;)this._items[t]._cachedBottom>e&&n++;if(n=this._reflowExtra(e,i,n),n===i)for(t=i;t--;)this.setMod(this._items[t],"stacked","yes");
else{var s=n;for(t=i;t--;){var o=this._items[t];s&&!o._sticky?(this.setMod(o,"stacked","yes"),s--):this.delMod(o,"stacked")
}}return n},_reflowExtra:function(t,e,i){return i},_onMoreClick:function(){},_getViewportThreshold:function(){return this.__self.win.height()
},_getBorders:function(t){"number"==typeof t&&(t=this._items[t]),!t instanceof $&&(t=$(t));var e=t.outerHeight(),i=t.offset().top-BEM.DOM.win.scrollTop();
return{top:i,bottom:e+i}}},{live:function(){return this.liveBindTo("more","leftclick tap",function(t){this._onMoreClick(t)
}).liveBindTo("more","keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||(13===t.which||32===t.which)&&this._onMoreClick(t)
}),!1}}),_borschik("C2_O_3uJOxROdzNtaA1bHX5KSuw")&&BEM.DOM.decl("navigation",{_getBorders:function(){if($.browser.opera||$.browser.msie&&$.browser.version<9){var t=this.elem("more").css("bottom");
this.elem("more").css("bottom","0"),this.elem("more").offset().top,this.elem("more").css("bottom",t)}return this.__base.apply(this,arguments)
}}),_borschik("fS6ggGrgoIq4bJ2CPzq157GoO9M")&&BEM.DOM.decl("navigation",{onAjaxSuccess:function(t){this.dropElemCache(),BEM.DOM.update(this.domElem,$(t.html).html()),this._items=this.elem("item","service","yes").map(this.changeThis(this._processItem,this)),this.reflow()
}}),_borschik("F5VGJmoErOpnXbEFUXh1avNqdak")&&BEM.DOM.decl({block:"navigation",modName:"more-type",modVal:"popup"},{onSetMod:{js:{inited:function(){var t=this.elem("more-label");
this._popup=this.findBlockInside("popup").on("show",function(){t.attr("aria-expanded",!0)}).on("hide",function(){t.attr("aria-expanded",!1)
}),this._stack=this.elem("more-stack"),this.bindTo(this.findElem(this._stack,"item"),"leftclick tap",this._onStackedItemClick),this.__base.apply(this,arguments)
}}},onElemSetMod:{item:{stacked:function(t,e,i){this.setMod(t._popupElem,"visibility",i)}},more:{visibility:{"":function(){this._popup.hide()
}}}},_processItem:function(){var t=this.__base.apply(this,arguments),e=this.getMod(t,"name");return $.extend(t,{_popupElem:this.findElem(this._stack,"item","name",e)}),t
},_onStackedItemClick:function(){this._popup.hide()},reflow:function(){var t=this.__base.apply(this,arguments);
return this.toggleMod(this.elem("more"),"visibility","yes","",t>0),t},_reflowExtra:function(t,e,i){return 1===i&&e>1&&i++,i
},_onMoreClick:function(){this._popup.toggle(this.elem("more"))},_getViewportThreshold:function(){return this._getBorders(this.elem("more")).top
}}),_borschik("F5tuF257W3AWnJTxQckyMvj2gZg")&&BEM.decl({block:"navigation",modName:"sticky",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this._footerHeight=this.findBlockOutside("b-page").findBlockInside("footer").domElem.height()
}},_getViewportThreshold:function(){var t=this.domElem.offset().top-this.__self.win.scrollTop();return this.__self.win.height()-t-this._footerHeight
}}),_borschik("2h9bFF4n1sBcV1ibvY22tfnbrHE")&&!function(t){var e=t.DOM,i=e.win;e.decl({block:"navigation",modName:"more-type",modVal:"tablo"},{_onMoreClick:function(){var t=this._getHeader();
if(t){var e=t.findElem("action","type","srv").focus();t.setMod(e,"pressed","yes")}},_getViewportThreshold:function(){return i.height()-this.elem("more").height()
},_getHeader:function(){return this._header||(this._header=this.findBlockInside(e.doc,"header"))}})}(BEM),_borschik("N-ykyOXnYbQ_tjFaRo0JY32yAC4")&&BEM.DOM.decl("region",{onSetMod:{js:function(){this._initPopup()
}},onAjaxPrepare:function(){this._rmPopup()},onAjaxSuccess:function(t){var e="hidden";t&&t.html&&(BEM.DOM.update(this.domElem,$(t.html).html()),this._initPopup(),t.params&&(e=t.params.visibility)),this.setMod("visibility",e)
},_initPopup:function(){var t=this.findBlockInside(this.findElem("button"),"button");this._popup=this.findBlockInside("popup"),t&&this._popup&&this.bindTo(t.domElem,"leftclick tap",function(){this._popup.toggle(t)
})},_rmPopup:function(){this.unbindFrom("button","leftclick tap"),this._popup&&this._popup.destruct(),delete this._popup
}}),_borschik("WOPISYtu0-MQY5Pr21AF2UQx0PM")&&BEM.DOM.decl({block:"popup",modName:"poll",modVal:"size"},{onSetMod:{visibility:{outside:function(){this.__base(),this._prevSize=this.getPopupSize()
}}},_onShown:function(){this.__base(),this._sizePollInterval||(this._sizePollInterval=setInterval(this._sizePoller.bind(this),this.params.sizePoll||100))
},_sizePoller:function(){if(this._isShown&&!this._isHiding){var t=this.getPopupSize(),e=this.getCurrPos();
this._prevSize&&this._prevPos&&this._prevSize.height===t.height&&this._prevSize.width===t.width&&this._prevPos.left===e.left&&this._prevPos.top===e.top||(this._prevSize=t,this._prevPos=e,this.repaint())
}},_onHidden:function(){this.__base(),clearInterval(this._sizePollInterval)}}),_borschik("QxUbItu5PHc5I9vbAodKOt_Uy_0")&&BEM.DOM.decl({block:"popup",modName:"poll",modVal:"size"},{destruct:function(){clearInterval(this._sizePollInterval),this.__base.apply(this,arguments)
}}),_borschik("_zO_bSLtASOnPwBIQx3wUOp3ooM")&&BEM.DOM.decl("intents",{onSetMod:{js:function(){this._cacheElems(),this.afterCurrentEvent(function(){(this._onWindowResize=$.throttle(this._onWindowResize,200,this))(),this.bindToWin("resize",this._onWindowResize)
}),this.separator=this.elem("separator")}},onElemSetMod:{button:{pressed:{yes:function(t){this.afterCurrentEvent(function(){this.hasMod(this._level(t),"pos","top")&&this._indicateTo(t)
})}}}},_cacheElems:function(){var t=this;this.dropElemCache(),this._levels=this.elem("level"),this._levels.each(function(e,i){i.$=$(i),i._buttons=t.findElem(i.$,"button"),i._buttons.each(function(t,e){e.$=$(e)
})})},_level:function(t){return t.closest(this.buildSelector("level"))},_container:function(t){return t.closest(this.buildSelector("container"))
},_sep:function(t){return this.findElem(this._container(t),"separator")},_sepLeft:function(t){return this.findElem(this._container(t),"separator-left")
},_sepRight:function(t){return this.findElem(this._container(t),"separator-right")},_sepArrow:function(t){return this.findElem(this._container(t),"separator-arrow")
},_indicateNone:function(t){this.separator[t]&&(this.elem("separator-left").css("width","50%"),this.elem("separator-right").css("left","50%"),this.elem("separator-arrow").hide())
},_indicateTo:function(t,e){if(0!=this.elem("separator").length&&0!==this.domElem.height()){if(!t||!t.length)return this._indicateNone(e),void 0;
var i=t.offset().left,n=t.width(),s=this._sep(t).offset().left,o=this._sepArrow(t).show().width(),r=i+Math.floor(n/2)-s,a=Math.floor(o/2),c=r-a,u=r-a,l=r+a;
this._indicateToSetStyle(t,c,u,l)}},_indicateToSetStyle:function(t,e,i,n){this._sepLeft(t).css("width",Math.max(e,0)+"px"),this._sepArrow(t).css("left",i+"px"),this._sepRight(t).css("left",n+"px")
},_indicateToActive:function(){var t=this,e=this.elem("level","pos","top");e.each(function(e,i){var n=t.findElem($(i),"button","pressed","yes");
n&&t._indicateTo(n,e)})},_onWindowResize:function(){this._indicateToActive()},_onMouseDownTarget:function(t){return t.data.domElem
}},{live:function(){return this.liveBindTo("button","click",function(){this.trigger("buttonPressed")}),!1
}}),_borschik("emAjCPR7uv5_Qa2-2jSRp-yI014")&&BEM.DOM.decl({block:"check-button",modName:"skipjs",modVal:"yes"},{onSetMod:{js:function(){"ничего не делаем"
}}}),_borschik("RMuNN1ry8SHVdi-acMvELf0MSgs")&&BEM.DOM.decl({block:"intents",modName:"ajax",modVal:"yes"},{onSetMod:{js:function(){this.__base(),this.findBlockOn("serp").addRequestListener(this)
}},destruct:function(){this.findBlockOn("serp").removeRequestListener(this),this.__base()},onAjaxSuccess:function(){this._cacheElems(),this._firstPageQuery=this._searchInput&&this._searchInput.val(),this.setMod("empty",0==this._levels.length?"yes":""),this._indicateToActive()
}},{_go:function(t,e){var i,n=$.browser.msie,s=n&&parseInt($.browser.version,10);return e?(window.open(t,"_blank"),void 0):(BEM.blocks["i-ua"].canUseAjax()&&(s>9||!n)&&(i=BEM.blocks.location.getInstance()),i?i.change({url:t}):window.location=t,void 0)
},live:function(){return this.__base(),this.liveBindTo("button","click",function(t){t.preventDefault();
var e=t.data.domElem,i=e.attr("href"),n="_blank"===e.attr("target");i&&this.__self._go(i,n)}),!1}}),_borschik("Z63S0Qz6Lk_jXw7HFt5kiEp7WgY")&&BEM.DOM.decl({block:"intents",modName:"ajax",modVal:"yes"},{onAjaxPrepare:function(){this.__base(),this._levels.each(function(t,e){e._more&&e._more._popup&&e._more._popup.destruct(),e._more._popup=null
})},onAjaxSuccess:function(){}}),_borschik("uYWqceKO18ylTtoCRiU9R86eTFM")&&BEM.DOM.decl({block:"intents",modName:"hover",modValue:"yes"},{onSetMod:{js:function(){this.__base();
var t=this.findBlockOutside("b-page"),e=t&&t.findBlockInside("header"),i=e&&e.findBlockInside("search");
this._searchInput=i&&i.findBlockInside(i.elem("input"),"input"),this._firstPageQuery=this._searchInput&&this._searchInput.val(),this._hoverInProgress=!1,this._addMouseEventListeners()
}},destruct:function(){clearTimeout(this._hoverTimer),clearTimeout(this._pageQueryTimer),this._searchInput&&this._searchInput.hideRequery&&this._searchInput.hideRequery(),this._removeMouseEventListeners(),this.__base()
},_addMouseEventListeners:function(){this.bindTo("button","click",this._onClick),this.bindTo("button","mouseenter",this._onMouseOver),this.bindTo("button","mouseleave",this._onMouseOut)
},_removeMouseEventListeners:function(){this.unbindFrom("button","click mouseenter mouseleave")},_updateSearchInput:function(t,e){this._searchInput.updateRequeryHidden&&this._searchInput.updateRequeryHidden(t.join(" ")),this._searchInput.updateRequeryVisible&&this._searchInput.updateRequeryVisible(e.join(" ")),this._searchInput.showRequery&&this._searchInput.showRequery()
},_onMouseOver:function(t){if(this._searchInput&&!($(t.relatedTarget).hasClass("serp__spin")||$(t.relatedTarget).hasClass("spin")||$(t.relatedTarget).hasClass("intents__button-text")||null==t.relatedTarget)){clearTimeout(this._pageQueryTimer);
var e=this._onMouseDownTarget(t),i=this.__self.extractParams(e[0]);if(i.intents__button){var n=i.intents__button.query;
if(this._pageQuery=this._pageQuery||this._searchInput&&this._searchInput.val(),this._pageQuery==this._firstPageQuery){for(var s=this._pageQuery.split(/\s+/),o=n.split(/\s+/),r={},a=0;a<s.length;a++)for(var c=0;c<o.length;c++){var u=s[a].toLowerCase(),l=o[c].toLowerCase();
u==l&&(r[u]=s[a])}for(var h=!1,d=[],p=[],a=0;a<o.length;a++){var f=r[o[a].toLowerCase()];f&&!h?d.push(f):(h=!0,p.push(o[a]))
}if(this._hoverInProgress)this._updateSearchInput(d,p);else{var m=this;clearTimeout(this._hoverTimer),this._hoverTimer=setTimeout(function(){m._hoverInProgress=!0,m._updateSearchInput(d,p)
},100)}}}}},_onMouseOut:function(){if(this._searchInput){clearTimeout(this._hoverTimer);var t=this;this._pageQueryTimer=setTimeout(function(){t._pageQuery=null,t._hoverInProgress=!1,t._searchInput.hideRequery&&t._searchInput.hideRequery()
},100)}},_onClick:function(t){var e=this._onMouseDownTarget(t),i=this.__self.extractParams(e[0]),n=i.intents__button.query;
this._searchInput&&this._searchInput.val(n,{noSuggest:!0})}}),_borschik("oewWN_eY5Sxuy_lWuXn-rehwFmM")&&BEM.DOM.decl({block:"intents",modName:"collapse",modValue:"yes"},{onElemSetMod:{button:{pressed:{yes:function(t){var e=this.__base;
this.afterCurrentEvent(function(){this._updateCollapse(),e.call(this,t)})}},visibility:{hidden:function(t){this._delayVisibility(t,"visible")
},visible:function(t){this._delayVisibility(t,"hidden")}}},more:{visibility:{hidden:function(t){var e=this._popup(t);
e&&e.hide()}}}},_delayVisibility:function(t,e){var i=this;setTimeout(function(){var n=$.data(t[0],"mirror");
n&&i.setMod(n,"visibility",e)},500)},_cacheElems:function(){this.__base();var t=this;this._levels.each(function(e,i){i._more=t.findElem(i.$,"more"),i._more._popup=t.findBlockInside(i._more,"popup"),i._stack=t.findElem(i.$,"more-stack"),i._buttons.each(function(e,n){var s=n.$.clone(1);
s.appendTo(i._stack),$.data(n,"mirror",s),$.data(s[0],"original",n.$),t.setMod(s,"pressed","")})})},_popup:function(t){var e=t[0];
return e._popup||(e._popup=this.findBlockInside(t,"popup")),e._popup},_updateCollapse:function(){var t=this,e=BEM.DOM.getWindowSize().width;
$.each(this._levels,function(i,n){var s=n.$,o=s.width(),r=Math.min(e,o),a=t.findElem(s,"button","pressed","yes"),c=a?a.width()+parseInt(a.css("margin-right")):0,u=r,l=0,h=[];
t.setMod(n._more,"visibility","hidden");for(var d=0;d<n._buttons.length;d++)t.setMod(n._buttons[d].$,"visibility","visible");
var p=n._buttons.length-1,f=!1,m=!1;for($.each(n._buttons,function(t,e){l+=$(e).outerWidth(!0),h.push(l)
});n._buttons[p];){var _=n._buttons[p].$,g=h[p];if(_[0]===a[0])u-=c;else{if(!(g>u))break;t.setMod(_,"visibility","hidden"),m=!0
}m&&!f&&(t.setMod(n._more,"visibility","visible"),u-=n._more.width()+10,f=!0),p--}})},_onWindowResize:function(){var t=this;
t._updateCollapse(),this.__base()},_onMouseDownTarget:function(t){var e=t.data.domElem;return $.data(e[0],"original")||e
}},{live:function(){return this.__base(),this.liveBindTo("more","leftclick tap",function(t){var e=this._popup(t.data.domElem);
e&&e.toggle(t.data.domElem)}),!1}}),_borschik("ZWjucwzzpN3X2VBGNnRSsKtD78I")&&BEM.DOM.decl("competitors",{onSetMod:{js:function(){this._searchInput=this.findBlockOutside("b-page").findBlockInside("search").findBlockInside("input"),this._onSearchQueryChange=$.debounce(this._onSearchQueryChange,200,this),this._searchInput&&this._searchInput.on("change",this._onSearchQueryChange,this),this._footer=this.findBlockOutside("b-page").findBlockInside("footer"),this._bottomOffset=this._footer.domElem.height(),this.updateCompetitorsPos(),this.bindToWin("orientationchange resize",$.debounce(this.updateCompetitorsPos,50,this))
}},onAjaxSuccess:function(t){BEM.DOM.update(this.domElem,$(t.html).html()),this.setMod("pos",t.params.pos),this.setMod("visibility",t.params.visibility),this.dropElemCache("link query")
},_onSearchQueryChange:function(){var t=BEM.blocks["i-common__string"],e=this._searchInput.val();e&&(this.elem("link").each(function(t,i){var n,s,o=$(i),r=o.attr("href");
r&&(n=BEM.blocks.uri.parse(r),"h.yandex.net"===n.host()&&(n=BEM.blocks.uri.parse(decodeURIComponent(n.query().slice(1))),s=!0),n=n.replaceParam("q",$.trim(e)).toString(),s&&(n="//h.yandex.net/?"+encodeURIComponent(n)),o.attr("href",n))
}),this.elem("query").html(t.escapeHTML(t.cleverSubstring(e,52,0))))},updateCompetitorsPos:function(){if(this.hasMod("pos","bottom")){var t=BEM.DOM.win.height()-this._footer.domElem.offset().top-this._bottomOffset;
this.domElem.css("position",t>0?"":"static")}}}),_borschik("vyin8kurO4RRLfV4MwGBKWFlKw0")&&BEM.DOM.decl("region-change",{getAjaxData:function(){return this.getMod(this.elem("instance"),"position")
},onAjaxSuccess:function(t){BEM.DOM.update(this.domElem,$(t.html).html())}}),_borschik("0jSBsm74plUv2ZGNTXMjgcT9HnU")&&BEM.DOM.decl("b-counters",{onSetMod:{js:function(){this._counter=BEM.create({block:"b-statcounter",elem:"statface",elemMods:{type:"rstat"}}),this._counter.send(this.params.reqid)
}},update:function(t){BEM.DOM.update(this.domElem,$(t.html).children()),this._counter.send(t.params.reqid)
}}),function(t,e){function i(){p&&f&&console.log.apply(console,arguments)}function n(t){return"string"==typeof t&&(t={block:t}),t.block+(t.elem?u+t.elem:"")+(t.modName?c+t.modName+c+t.modVal:"")
}function s(t){var e={};return t.split(u).forEach(function(t,i){var n=[i?"elem":"block","mod","val"];
t.split(c).forEach(function(t,i){e[n[i]]=t})}),e}function o(t){return t?d.push(t):!1}function r(){return d.length&&d.pop()
}function a(){this._lang="",this._prj="lego",this._keyset="",this._key=""}if("function"==typeof e.I18N&&e.I18N._proto)return e.I18N;
"undefined"==typeof i18n&&(i18n={}),BEM=e;var c="_",u="__",l="ru",h={},d=[],p=!1,f="undefined"!=typeof console&&"function"==typeof console.log;
a.prototype={lang:function(t){return this._lang=t,this},project:function(t){return this._prj=t,this},keyset:function(t,e){return e&&o(this._keyset),this._keyset=n(t),this
},key:function(t){return this._key=t,this},decl:function(t){var e=s(this._keyset),i="i-tanker"===e.block?"tanker":this._prj,n=e.elem||this._keyset,o=this._key;
i=i18n[i]||(i18n[i]={}),n=i[n]||(i[n]={}),n[o]="function"==typeof t?t:function(){return t};var r=h[this._lang]||(h[this._lang]={}),a=r[this._keyset]||(r[this._keyset]={});
a[o]=t},val:function(t,e){var n=h[this._lang]&&h[this._lang][this._keyset],s="keyset: "+this._keyset+" key: "+this._key+" (lang: "+this._lang+")";
if(!n)return i("[I18N_NO_KEYSET] %s",s),"";n=n[this._key];var o=typeof n;return"undefined"===o?(i("[I18N_NO_VALUE] %s",s),""):"string"===o?n:(e||(e=this),n.call(e,t))
},_cache:function(){return h}},e.I18N=function(t){var e=function(t,i,n){return e.keyset(t).key(i,n)};
return e._proto=t,e.project=function(t){return this._proto.project(t),this},e.keyset=function(t){return this._proto.keyset(t,!0),this
},e.key=function(t,i){var n,s,o=this._proto;return o.lang(this._lang).key(t),n=o.val.call(o,i,e),s=r(),s&&o.keyset(s,!1),n
},e.decl=function(t,e,i){var n,s=this._proto;i||(i={}),i.lang&&s.lang(i.lang),s.keyset(t);for(n in e)e.hasOwnProperty(n)&&s.key(n).decl(e[n]);
return this},e.lang=function(t){return"undefined"!=typeof t&&(this._lang=t),this._lang},e.debug=function(t){p=!!t
},e.lang(l),e}(new a)}(this,"undefined"==typeof BEM?{}:BEM),BEM.I18N.decl("auth",{auth:"Авторизация","fill-input":"Заполните это поле",login:"Логин",logon:"Войти",more:"Ещё",password:"Пароль",permanent:"Запомнить меня",register:"Регистрация",remember:"Вспомнить пароль","social-log-in":"Войти при помощи социальной сети",temporary:"Чужой компьютер","wrong-characters":"Недопустимый ввод","wrong-keyboard-layout":"Смените раскладку","wrong-password":"Пароль не может совпадать с логином"},{lang:"ru"}),BEM.I18N.decl("copyright",{link:function(t){return"ООО «"+t.content+"»"
},yandex:"Яндекс"},{lang:"ru"}),BEM.I18N.decl("feedback",{"Вернуться на Яндекс":"Вернуться на Яндекс","На все результаты на странице":"На все результаты на странице","На этот результат":"На этот результат","Ответ не соответствует запросу":"Ответ не соответствует запросу","Ответ содержит неуместную порнографию":"Ответ содержит неуместную порнографию","Ответ содержит отталкивающую информацию":"Ответ содержит отталкивающую информацию",Пожаловаться:"Пожаловаться","Спасибо, что помогли сделать Яндекс лучше!":"Спасибо, что помогли сделать Яндекс лучше!","Что не так?":"Что не так?"},{lang:"ru"}),BEM.I18N.decl("footer",{about:"О компании","about-url":"//company.yandex.ru",advert:"Реклама","advert-url":"//advertising.yandex.ru/kupislova.xml?advertising",agreement:"Пользовательское соглашение",apps:"Мобильные приложения","apps-url":"//mobile.yandex.ru",beta:"β-версия","copyright-notice":"",design:"Дизайн","design-artlebedev":"Студия Артемия Лебедева","design-artlebedev-url":"http://www.artlebedev.ru",mobile:"Мобильная версия","privacy-policy":"","services-button-value":"Перейти",stat:"Статистика","terms-of-service":"",termsofuse:"Лицензия на поиск","termsofuse-url":"//legal.yandex.ru/termsofuse/",vacancies:"Вакансии","yandex-is-local":"Яндекс локален","yandex-is-not-local":"Как сделать Яндекс локальным"},{lang:"ru"}),BEM.I18N.decl("header__action_type_srv",{"services-table":"Табло сервисов"},{lang:"ru"}),BEM.I18N.decl("i-services",{404:"404",adresa:"Адреса",advertising:"Реклама",afisha:"Афиша",all:"Все сервисы",api:"API",appsearch:"Приложения",auto:"Авто",avia:"Авиабилеты",aziada:"Азиада",ba:"Баян",backapv:"Партнер Я.Карт",balance:"Баланс",bar:"Бар","bar-ie":"Бар для ИЕ","bar-ie9":"Бар для ИЕ9",bayan:"Баннеры Яндекса",blogs:"Блоги",books:"Книги",browser:"Браузер",calendar:"Календарь",captcha:"ой...",catalogwdgt:"Каталог виджетов",chrome:"Хром с поиском Яндекса",city:"Города",cityday:"День города",collection:"Коллекция",company:"Компания",contest:"Contest",desktop:"Персональный поиск",direct:"Директ","direct.market":"Маркет",disk:"Диск",ege:"ЕГЭ",expert:"Эксперт",feedback:"Обратная связь",feedback2:"Обратная связь",ff:"ФФ с поиском Яндекса",fotki:"Фотки",fresh:"Свежее",games:"Игрушки",geocontext:"Геоконтекст",goroda:"Города",help:"Помощь",i:"Мои сервисы",ie:"ИЕ с поиском Яндекса",images:"Картинки","images-com":"Картинки",interests:"Интересы",internet:"Интернет",keyboard:"Клавиатура",kraski:"Краски",kuda:"Куда все идут",large:"Яндекс для слабовидящих",legal:"Правовые документы",lenta:"Лента",libra:"Библиотека",literacy:"Неделя борьбы за грамотность",local:"Локальная сеть",lost:"Незабудки",love:"День взаимного тяготения — 13 августа",mail:"Почта",maps:"Карты","maps-wiki":"Народная карта",market:"Маркет","market.advertising":"Маркет",metrika:"Метрика",metro:"Метро",mobile:"Мобильный",moikrug:"Мой Круг",money:"Деньги",museums:"Дни исторического и культурного наследия",music:"Музыка","music-partner":"Музыка: статистика",nahodki:"Мои находки",nano:"Нано",newhire:"Наниматор",news:"Новости",notifications:"Нотификационная панель",oauth:"Авторизация",online:"Онлайн",openid:"OpenID",opera:"Opera Software",opinion:"Цитаты",partners:"Рекламная сеть",partnersearch:"Поиск для партнеров",passport:"Паспорт",pdd:"Почта для домена",peoplesearch:"Люди",perevod:"Перевод",probki:"Пробки",pulse:"блоги: пульс",punto:"Punto switcher",pvo:"Ответы",rabota:"Работа",ramazan:"",rasp:"Расписания",realty:"Недвижимость",referats:"Рефераты",rk:"Есть вопросы?",root:"Яндекс.Олимпиада для Unix администраторов",school:"Школа",search:"Поиск",server:"Сервер",site:"Поиск для сайта",slovari:"Словари",so:"Самооборона",social:"Социализм",soft:"Программы",sport:"Спорт",sprav:"Справочник",start:"Стартовая страница",stat:"Статистика",subs:"Подписки",taxi:"Такси",terms:"Разговорник",tests:"Тесты и опросы",tickets:"Билеты",time:"Яндекс.Время",toster:"Тосты",translate:"Перевод",tune:"Настройки",tv:"Телепрограмма",uslugi:"Услуги",video:"Видео","video-com":"Видео",vno:"ВНО",wdgt:"Виджеты",weather:"Погода",webmaster:"Вебмастер",widgets:"Виджеты",wordstat:"Статистика",wow:"Я.ру",www:"Поиск",xmlsearch:"XML",yaca:"Каталог",yamb:"Медийные баннеры",zakladki:"Закладки"},{lang:"ru"}),BEM.I18N.decl("i-tanker__dynamic",{gender:function(t){return function(t){return t[t.gender]
}.call(this,t)},plural:function(t){return function(t){var e=isNaN(parseInt(t.count))?0:t.count,i=e%10,n=e%100;
return 1==i&&11!=n?t.one:i>1&&5>i&&(10>n||n>20)?t.some:t.many}.call(this,t)},plural_adv:function(t){return function(t){var e=isNaN(parseInt(t.count))?0:t.count;
return 0===e?t.none:this.keyset("i-tanker__dynamic").key("plural",{count:t.count,one:t.one,some:t.some,many:t.many})
}.call(this,t)},toggle:function(t){return function(t){return Boolean(t.condition)?t["true"]:t["false"]
}.call(this,t)}},{lang:"ru"}),BEM.I18N.decl("lang-switcher",{all:"Ещё"},{lang:"ru"}),BEM.I18N.decl("logo",{yandex:"Яндекс"},{lang:"ru"}),BEM.I18N.decl("navigation",{more:"Ещё","search-also":"Найти также","search-on":function(t){return"Найти "+t.query+" в других сервисах"
}},{lang:"ru"}),BEM.I18N.decl("notice",{notifications:"Уведомлений"},{lang:"ru"}),BEM.I18N.decl("notification-panel-notice",{"n-new-notifications":function(t){return t.count+" "+this.keyset("notification-panel-notice").key("new-notifications",{count:t.count})
},"new-achievement":"Новое достижение!","new-notification":"Новое событие:","new-notifications":function(t){return this.keyset("i-tanker__dynamic").key("plural_adv",{count:t.count,one:"новое событие",some:"новых события",many:"новых событий",none:"новых событий"})
}},{lang:"ru"}),BEM.I18N.decl("search",{"search-for":"Искать",query:"Запрос"},{lang:"ru"}),BEM.I18N.decl("suggest2",{fact:"Факты",group:"Группа подсказок",nah:"Вы искали",nav:"Сайт",text:"Поиск",traffic:"Пробки",weather:"Погода"},{lang:"ru"}),BEM.I18N.decl("suggest2-item",{"quick-answer":"Быстрый ответ"},{lang:"ru"}),BEM.I18N.decl("ticker__text",{notifications:"Уведомлений"},{lang:"ru"}),BEM.I18N.decl("user",{"Загрузить файлы":"Загрузить файлы","Редактировать список":"Редактировать список","Добавить пользователя":"Добавить пользователя",enter:"Войти",exit:"Выйти",letter:function(t){return this.keyset("i-tanker__dynamic").key("plural_adv",{count:t.count,one:"новое письмо",some:"новых письма",many:"новых писем",none:"Нет новых писем"})
},letter_compose:"Написать письмо",passport:"Паспорт",tune:"Настройка",upload_files:"Мой диск"},{lang:"ru"}),BEM.I18N.lang("ru")
}