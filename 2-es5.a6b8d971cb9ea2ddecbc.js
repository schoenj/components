!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=i(e);if(t){var s=i(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{bFHC:function(t,r,i){"use strict";i.d(r,"a",(function(){return ne})),i.d(r,"b",(function(){return re}));var a=i("EM62"),c=i("mFH5"),u=i("5XID"),f=i("2kYt"),d=i("ROBh"),v=i("47ST"),p=i("P4Xx"),m=i("bwdy"),y=i("8j5Y"),g=i("YtkY"),b=i("4e/d"),_=i("ruxD"),S=i("7ntQ"),w=i("J+dc"),I=(i("IdLP"),i("5uDM")),k=i("xVbo"),C=function e(){h(this,e)},E=function(){function e(t){var n=this;h(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){n.headers=new Map,t.split("\n").forEach((function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),i=r.toLowerCase(),o=e.slice(t+1).trim();n.maybeSetNormalizedName(r,i),n.headers.has(i)?n.headers.get(i).push(o):n.headers.set(i,[o])}}))}:function(){n.headers=new Map,Object.keys(t).forEach((function(e){var r=t[e],i=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(n.headers.set(i,r),n.maybeSetNormalizedName(e,i))}))}:this.headers=new Map}return l(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((function(e){return t.applyUpdate(e)})),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach((function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))}))}},{key:"clone",value:function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,s(n)),this.headers.set(t,r);break;case"d":var i=e.value;if(i){var o=this.headers.get(t);if(!o)return;0===(o=o.filter((function(e){return-1===i.indexOf(e)}))).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach((function(n){return e(t.normalizedNames.get(n),t.headers.get(n))}))}}]),e}(),O=function(){function e(){h(this,e)}return l(e,[{key:"encodeKey",value:function(e){return F(e)}},{key:"encodeValue",value:function(e){return F(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function F(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var j=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(h(this,e),this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new O,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){var n=new Map;return e.length>0&&e.split("&").forEach((function(e){var r=e.indexOf("="),i=o(-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],2),s=i[0],a=i[1],c=n.get(s)||[];c.push(a),n.set(s,c)})),n}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach((function(e){var r=n.fromObject[e];t.map.set(e,Array.isArray(r)?r:[r])}))):this.map=null}return l(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map((function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map((function(t){return n+"="+e.encoder.encodeValue(t)})).join("&")})).filter((function(e){return""!==e})).join("&")}},{key:"clone",value:function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((function(t){return e.map.set(t,e.cloneFrom.map.get(t))})),this.updates.forEach((function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],i=r.indexOf(t.value);-1!==i&&r.splice(i,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}})),this.cloneFrom=this.updates=null)}}]),e}();function A(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function N(e){return"undefined"!=typeof Blob&&e instanceof Blob}function x(e){return"undefined"!=typeof FormData&&e instanceof FormData}var T=function(){function e(t,n,r,i){var o;if(h(this,e),this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||i?(this.body=void 0!==r?r:null,o=i):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new E),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{var a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new j,this.urlWithParams=n}return l(e,[{key:"serializeBody",value:function(){return null===this.body?null:A(this.body)||N(this.body)||x(this.body)||"string"==typeof this.body?this.body:this.body instanceof j?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body||x(this.body)?null:N(this.body)?this.body.type||null:A(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof j?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,s=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,c=t.headers||this.headers,u=t.params||this.params;return void 0!==t.setHeaders&&(c=Object.keys(t.setHeaders).reduce((function(e,n){return e.set(n,t.setHeaders[n])}),c)),t.setParams&&(u=Object.keys(t.setParams).reduce((function(e,n){return e.set(n,t.setParams[n])}),u)),new e(n,r,o,{params:u,headers:c,reportProgress:a,responseType:i,withCredentials:s})}}]),e}(),R=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({}),P=function(t){e(i,t);var r=n(i);function i(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h(this,i),(e=r.call(this,t)).type=R.Response,e.body=void 0!==t.body?t.body:null,e}return l(i,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new i({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),i}(function(){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";h(this,e),this.headers=t.headers||new E,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}());function z(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var L,U=((L=function(){function e(t){h(this,e),this.handler=t}return l(e,[{key:"request",value:function(e,t){var n,r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof T)n=e;else{var o=void 0;o=i.headers instanceof E?i.headers:new E(i.headers);var s=void 0;i.params&&(s=i.params instanceof j?i.params:new j({fromObject:i.params})),n=new T(e,t,void 0!==i.body?i.body:null,{headers:o,params:s,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials})}var a=Object(d.a)(n).pipe(Object(I.a)((function(e){return r.handler.handle(e)})));if(e instanceof T||"events"===i.observe)return a;var c=a.pipe(Object(k.a)((function(e){return e instanceof P})));switch(i.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return c.pipe(Object(g.a)((function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return c.pipe(Object(g.a)((function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return c.pipe(Object(g.a)((function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));case"json":default:return c.pipe(Object(g.a)((function(e){return e.body})))}case"response":return c;default:throw new Error("Unreachable: unhandled observe type ".concat(i.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new j).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,z(n,t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,z(n,t))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,z(n,t))}}]),e}()).\u0275fac=function(e){return new(e||L)(a.Vb(C))},L.\u0275prov=a.Hb({token:L,factory:L.\u0275fac}),L),M=i("e4iD"),D=["*"];function B(e){return Error('Unable to find icon with the name "'.concat(e,'"'))}function H(e){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was \"".concat(e,'".'))}function V(e){return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was \"".concat(e,'".'))}var W,q=function e(t,n,r){h(this,e),this.url=t,this.svgText=n,this.options=r},J=((W=function(){function e(t,n,r,i){h(this,e),this._httpClient=t,this._sanitizer=n,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons",this._document=r}return l(e,[{key:"addSvgIcon",value:function(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}},{key:"addSvgIconLiteral",value:function(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}},{key:"addSvgIconInNamespace",value:function(e,t,n,r){return this._addSvgIconConfig(e,t,new q(n,null,r))}},{key:"addSvgIconLiteralInNamespace",value:function(e,t,n,r){var i=this._sanitizer.sanitize(a.J.HTML,n);if(!i)throw V(n);return this._addSvgIconConfig(e,t,new q("",i,r))}},{key:"addSvgIconSet",value:function(e,t){return this.addSvgIconSetInNamespace("",e,t)}},{key:"addSvgIconSetLiteral",value:function(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}},{key:"addSvgIconSetInNamespace",value:function(e,t,n){return this._addSvgIconSetConfig(e,new q(t,null,n))}},{key:"addSvgIconSetLiteralInNamespace",value:function(e,t,n){var r=this._sanitizer.sanitize(a.J.HTML,t);if(!r)throw V(t);return this._addSvgIconSetConfig(e,new q("",r,n))}},{key:"registerFontClassAlias",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return this._fontCssClassesByAlias.set(e,t),this}},{key:"classNameForFontAlias",value:function(e){return this._fontCssClassesByAlias.get(e)||e}},{key:"setDefaultFontSetClass",value:function(e){return this._defaultFontSetClass=e,this}},{key:"getDefaultFontSetClass",value:function(){return this._defaultFontSetClass}},{key:"getSvgIconFromUrl",value:function(e){var t=this,n=this._sanitizer.sanitize(a.J.RESOURCE_URL,e);if(!n)throw H(e);var r=this._cachedIconsByUrl.get(n);return r?Object(d.a)(K(r)):this._loadSvgIconFromConfig(new q(e,null)).pipe(Object(y.a)((function(e){return t._cachedIconsByUrl.set(n,e)})),Object(g.a)((function(e){return K(e)})))}},{key:"getNamedSvgIcon",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Y(t,e),r=this._svgIconConfigs.get(n);if(r)return this._getSvgFromConfig(r);var i=this._iconSetConfigs.get(t);return i?this._getSvgFromIconSetConfigs(e,i):Object(v.a)(B(n))}},{key:"ngOnDestroy",value:function(){this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}},{key:"_getSvgFromConfig",value:function(e){return e.svgText?Object(d.a)(K(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(Object(g.a)((function(e){return K(e)})))}},{key:"_getSvgFromIconSetConfigs",value:function(e,t){var n=this,r=this._extractIconWithNameFromAnySet(e,t);if(r)return Object(d.a)(r);var i=t.filter((function(e){return!e.svgText})).map((function(e){return n._loadSvgIconSetFromConfig(e).pipe(Object(b.a)((function(t){var r=n._sanitizer.sanitize(a.J.RESOURCE_URL,e.url);return n._errorHandler.handleError(new Error("Loading icon set URL: ".concat(r," failed: ").concat(t.message))),Object(d.a)(null)})))}));return Object(p.a)(i).pipe(Object(g.a)((function(){var r=n._extractIconWithNameFromAnySet(e,t);if(!r)throw B(e);return r})))}},{key:"_extractIconWithNameFromAnySet",value:function(e,t){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.svgText&&r.svgText.indexOf(e)>-1){var i=this._svgElementFromConfig(r),o=this._extractSvgIconFromSet(i,e,r.options);if(o)return o}}return null}},{key:"_loadSvgIconFromConfig",value:function(e){var t=this;return this._fetchIcon(e).pipe(Object(y.a)((function(t){return e.svgText=t})),Object(g.a)((function(){return t._svgElementFromConfig(e)})))}},{key:"_loadSvgIconSetFromConfig",value:function(e){return e.svgText?Object(d.a)(null):this._fetchIcon(e).pipe(Object(y.a)((function(t){return e.svgText=t})))}},{key:"_extractSvgIconFromSet",value:function(e,t,n){var r=e.querySelector('[id="'.concat(t,'"]'));if(!r)return null;var i=r.cloneNode(!0);if(i.removeAttribute("id"),"svg"===i.nodeName.toLowerCase())return this._setSvgAttributes(i,n);if("symbol"===i.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(i),n);var o=this._svgElementFromString("<svg></svg>");return o.appendChild(i),this._setSvgAttributes(o,n)}},{key:"_svgElementFromString",value:function(e){var t=this._document.createElement("DIV");t.innerHTML=e;var n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}},{key:"_toSvgElement",value:function(e){for(var t=this._svgElementFromString("<svg></svg>"),n=e.attributes,r=0;r<n.length;r++){var i=n[r],o=i.name,s=i.value;"id"!==o&&t.setAttribute(o,s)}for(var a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}},{key:"_setSvgAttributes",value:function(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}},{key:"_fetchIcon",value:function(e){var t,n=this,r=e.url,i=e.options,o=null!==(t=null==i?void 0:i.withCredentials)&&void 0!==t&&t;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==r)throw Error('Cannot fetch icon from URL "'.concat(r,'".'));var s=this._sanitizer.sanitize(a.J.RESOURCE_URL,r);if(!s)throw H(r);var c=this._inProgressUrlFetches.get(s);if(c)return c;var u=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(Object(_.a)((function(){return n._inProgressUrlFetches.delete(s)})),Object(S.a)());return this._inProgressUrlFetches.set(s,u),u}},{key:"_addSvgIconConfig",value:function(e,t,n){return this._svgIconConfigs.set(Y(e,t),n),this}},{key:"_addSvgIconSetConfig",value:function(e,t){var n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}},{key:"_svgElementFromConfig",value:function(e){if(!e.svgElement){var t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}}]),e}()).\u0275fac=function(e){return new(e||W)(a.Vb(U,8),a.Vb(M.b),a.Vb(f.d,8),a.Vb(a.n))},W.\u0275prov=Object(a.Hb)({factory:function(){return new W(Object(a.Vb)(U,8),Object(a.Vb)(M.b),Object(a.Vb)(f.d,8),Object(a.Vb)(a.n))},token:W,providedIn:"root"}),W);function K(e){return e.cloneNode(!0)}function Y(e,t){return e+":"+t}var $,G,X=Object(c.t)((function e(t){h(this,e),this._elementRef=t})),Q=new a.r("mat-icon-location",{providedIn:"root",factory:function(){var e=Object(a.V)(f.d),t=e?e.location:null;return{getPathname:function(){return t?t.pathname+t.search:""}}}}),Z=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ee=Z.map((function(e){return"[".concat(e,"]")})).join(", "),te=/^url\(['"]?#(.*?)['"]?\)$/,ne=((G=function(t){e(i,t);var r=n(i);function i(e,t,n,o,s){var a;return h(this,i),(a=r.call(this,e))._iconRegistry=t,a._location=o,a._errorHandler=s,a._inline=!1,a._currentIconFetch=m.a.EMPTY,n||e.nativeElement.setAttribute("aria-hidden","true"),a}return l(i,[{key:"_splitIconName",value:function(e){if(!e)return["",""];var t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error('Invalid icon name: "'.concat(e,'"'))}}},{key:"ngOnChanges",value:function(e){var t=this,n=e.svgIcon;if(this._svgNamespace=null,this._svgName=null,n)if(this._currentIconFetch.unsubscribe(),this.svgIcon){var r=o(this._splitIconName(this.svgIcon),2),i=r[0],s=r[1];i&&(this._svgNamespace=i),s&&(this._svgName=s),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(s,i).pipe(Object(w.a)(1)).subscribe((function(e){return t._setSvgElement(e)}),(function(e){t._errorHandler.handleError(new Error("Error retrieving icon ".concat(i,":").concat(s,"! ").concat(e.message)))}))}else n.previousValue&&this._clearSvgElement();this._usingFontIcon()&&this._updateFontIconClasses()}},{key:"ngOnInit",value:function(){this._usingFontIcon()&&this._updateFontIconClasses()}},{key:"ngAfterViewChecked",value:function(){var e=this._elementsWithExternalReferences;if(e&&e.size){var t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}},{key:"ngOnDestroy",value:function(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}},{key:"_usingFontIcon",value:function(){return!this.svgIcon}},{key:"_setSvgElement",value:function(e){this._clearSvgElement();for(var t=e.querySelectorAll("style"),n=0;n<t.length;n++)t[n].textContent+=" ";var r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(e)}},{key:"_clearSvgElement",value:function(){var e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){var n=e.childNodes[t];1===n.nodeType&&"svg"!==n.nodeName.toLowerCase()||e.removeChild(n)}}},{key:"_updateFontIconClasses",value:function(){if(this._usingFontIcon()){var e=this._elementRef.nativeElement,t=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();t!=this._previousFontSetClass&&(this._previousFontSetClass&&e.classList.remove(this._previousFontSetClass),t&&e.classList.add(t),this._previousFontSetClass=t),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}}},{key:"_cleanupFontValue",value:function(e){return"string"==typeof e?e.trim().split(" ")[0]:e}},{key:"_prependPathToReferences",value:function(e){var t=this._elementsWithExternalReferences;t&&t.forEach((function(t,n){t.forEach((function(t){n.setAttribute(t.name,"url('".concat(e,"#").concat(t.value,"')"))}))}))}},{key:"_cacheChildrenWithExternalReferences",value:function(e){for(var t=e.querySelectorAll(ee),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map,r=function(e){Z.forEach((function(r){var i=t[e],o=i.getAttribute(r),s=o?o.match(te):null;if(s){var a=n.get(i);a||(a=[],n.set(i,a)),a.push({name:r,value:s[1]})}}))},i=0;i<t.length;i++)r(i)}},{key:"inline",get:function(){return this._inline},set:function(e){this._inline=Object(u.c)(e)}},{key:"fontSet",get:function(){return this._fontSet},set:function(e){this._fontSet=this._cleanupFontValue(e)}},{key:"fontIcon",get:function(){return this._fontIcon},set:function(e){this._fontIcon=this._cleanupFontValue(e)}}]),i}(X)).\u0275fac=function(e){return new(e||G)(a.Lb(a.l),a.Lb(J),a.Wb("aria-hidden"),a.Lb(Q),a.Lb(a.n))},G.\u0275cmp=a.Fb({type:G,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(e,t){2&e&&(a.Bb("data-mat-icon-type",t._usingFontIcon()?"font":"svg")("data-mat-icon-name",t._svgName||t.fontIcon)("data-mat-icon-namespace",t._svgNamespace||t.fontSet),a.Db("mat-icon-inline",t.inline)("mat-icon-no-color","primary"!==t.color&&"accent"!==t.color&&"warn"!==t.color))},inputs:{color:"color",inline:"inline",fontSet:"fontSet",fontIcon:"fontIcon",svgIcon:"svgIcon"},exportAs:["matIcon"],features:[a.xb,a.yb],ngContentSelectors:D,decls:1,vars:0,template:function(e,t){1&e&&(a.hc(),a.gc(0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),G),re=(($=function e(){h(this,e)}).\u0275mod=a.Jb({type:$}),$.\u0275inj=a.Ib({factory:function(e){return new(e||$)},imports:[[c.h],c.h]}),$)}}])}();