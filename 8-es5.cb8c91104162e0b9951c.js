!function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=o(t);if(e){var a=o(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Meci:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return f}));var n=r("5lCh"),a=r("mFH5"),i=r("EM62"),o=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"],m=function(){var t=function t(){s(this,t),this.align="start"};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Gb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,e){2&t&&i.Db("mat-card-actions-align-end","end"===e.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t}(),d=function(){var t=function t(e){s(this,t),this._animationMode=e};return t.\u0275fac=function(e){return new(e||t)(i.Lb(n.a,8))},t.\u0275cmp=i.Fb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&i.Db("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(t,e){1&t&&(i.hc(o),i.gc(0),i.gc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t}(),f=function(){var t=function t(){s(this,t)};return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},imports:[[a.h],a.h]}),t}()},TqqQ:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r("tUta");var n,a=r("2kYt"),i=r("csyo"),o=r("EM62"),c=((n=function t(){s(this,t)}).\u0275mod=o.Jb({type:n}),n.\u0275inj=o.Ib({factory:function(t){return new(t||n)},imports:[[a.c,i.a]]}),n)},csyo:function(t,n,i){"use strict";i.d(n,"a",(function(){return v})),i.d(n,"b",(function(){return _}));var o=i("EM62"),c=i("2kYt"),m=i("mFH5"),d=i("5XID"),f=i("cZZj"),p=i("5lCh");function l(t,e){if(1&t&&(o.bc(),o.Mb(0,"circle",3)),2&t){var r=o.cc();o.uc("animation-name","mat-progress-spinner-stroke-rotate-"+r._spinnerAnimationLabel)("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),o.Bb("r",r._getCircleRadius())}}function g(t,e){if(1&t&&(o.bc(),o.Mb(0,"circle",3)),2&t){var r=o.cc();o.uc("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),o.Bb("r",r._getCircleRadius())}}function u(t,e){if(1&t&&(o.bc(),o.Mb(0,"circle",3)),2&t){var r=o.cc();o.uc("animation-name","mat-progress-spinner-stroke-rotate-"+r._spinnerAnimationLabel)("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),o.Bb("r",r._getCircleRadius())}}function h(t,e){if(1&t&&(o.bc(),o.Mb(0,"circle",3)),2&t){var r=o.cc();o.uc("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),o.Bb("r",r._getCircleRadius())}}var b=Object(m.t)((function t(e){s(this,t),this._elementRef=e}),"primary"),k=new o.r("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}}),x=function(){var t=function(t){r(i,t);var n=a(i);function i(t,e,r,a,o){var c;s(this,i),(c=n.call(this,t))._elementRef=t,c._document=r,c._diameter=100,c._value=0,c._fallbackAnimation=!1,c.mode="determinate";var m=i._diameters;return c._spinnerAnimationLabel=c._getSpinnerAnimationLabel(),m.has(r.head)||m.set(r.head,new Set([100])),c._fallbackAnimation=e.EDGE||e.TRIDENT,c._noopAnimations="NoopAnimations"===a&&!!o&&!o._forceAnimations,o&&(o.diameter&&(c.diameter=o.diameter),o.strokeWidth&&(c.strokeWidth=o.strokeWidth)),c}return e(i,[{key:"ngOnInit",value:function(){var t=this._elementRef.nativeElement;this._styleRoot=Object(f.c)(t)||this._document.head,this._attachStyleNode(),t.classList.add("mat-progress-spinner-indeterminate".concat(this._fallbackAnimation?"-fallback":"","-animation"))}},{key:"_getCircleRadius",value:function(){return(this.diameter-10)/2}},{key:"_getViewBox",value:function(){var t=2*this._getCircleRadius()+this.strokeWidth;return"0 0 ".concat(t," ").concat(t)}},{key:"_getStrokeCircumference",value:function(){return 2*Math.PI*this._getCircleRadius()}},{key:"_getStrokeDashOffset",value:function(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}},{key:"_getCircleStrokeWidth",value:function(){return this.strokeWidth/this.diameter*100}},{key:"_attachStyleNode",value:function(){var t=this._styleRoot,e=this._diameter,r=i._diameters,n=r.get(t);if(!n||!n.has(e)){var a=this._document.createElement("style");a.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),a.textContent=this._getAnimationText(),t.appendChild(a),n||(n=new Set,r.set(t,n)),n.add(e)}}},{key:"_getAnimationText",value:function(){var t=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*t).replace(/END_VALUE/g,""+.2*t).replace(/DIAMETER/g,""+this._spinnerAnimationLabel)}},{key:"_getSpinnerAnimationLabel",value:function(){return this.diameter.toString().replace(".","_")}},{key:"diameter",get:function(){return this._diameter},set:function(t){this._diameter=Object(d.f)(t),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}},{key:"strokeWidth",get:function(){return this._strokeWidth||this.diameter/10},set:function(t){this._strokeWidth=Object(d.f)(t)}},{key:"value",get:function(){return"determinate"===this.mode?this._value:0},set:function(t){this._value=Math.max(0,Math.min(100,Object(d.f)(t)))}}]),i}(b);return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(f.a),o.Lb(c.d,8),o.Lb(p.a,8),o.Lb(k))},t.\u0275cmp=o.Fb({type:t,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(t,e){2&t&&(o.Bb("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),o.uc("width",e.diameter,"px")("height",e.diameter,"px"),o.Db("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[o.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(o.bc(),o.Rb(0,"svg",0),o.xc(1,l,1,9,"circle",1),o.xc(2,g,1,7,"circle",2),o.Qb()),2&t&&(o.uc("width",e.diameter,"px")("height",e.diameter,"px"),o.ic("ngSwitch","indeterminate"===e.mode),o.Bb("viewBox",e._getViewBox()),o.Ab(1),o.ic("ngSwitchCase",!0),o.Ab(1),o.ic("ngSwitchCase",!1))},directives:[c.o,c.p],styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),t._diameters=new WeakMap,t}(),_=function(){var t=function(t){r(n,t);var e=a(n);function n(t,r,a,i,o){var c;return s(this,n),(c=e.call(this,t,r,a,i,o)).mode="indeterminate",c}return n}(x);return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.l),o.Lb(f.a),o.Lb(c.d,8),o.Lb(p.a,8),o.Lb(k))},t.\u0275cmp=o.Fb({type:t,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(t,e){2&t&&(o.uc("width",e.diameter,"px")("height",e.diameter,"px"),o.Db("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color"},features:[o.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(o.bc(),o.Rb(0,"svg",0),o.xc(1,u,1,9,"circle",1),o.xc(2,h,1,7,"circle",2),o.Qb()),2&t&&(o.uc("width",e.diameter,"px")("height",e.diameter,"px"),o.ic("ngSwitch","indeterminate"===e.mode),o.Bb("viewBox",e._getViewBox()),o.Ab(1),o.ic("ngSwitchCase",!0),o.Ab(1),o.ic("ngSwitchCase",!1))},directives:[c.o,c.p],styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),t}(),v=function(){var t=function t(){s(this,t)};return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[m.h,c.c],m.h]}),t}()},tUta:function(t,r,n){"use strict";n.d(r,"a",(function(){return p}));var a=n("EM62"),i=n("2kYt"),o=n("csyo"),c=["content"];function m(t,e){if(1&t&&(a.Rb(0,"div"),a.zc(1),a.Qb()),2&t){var r=a.cc(2);a.Ab(1),a.Ac(r.spinnerText)}}function d(t,e){if(1&t&&(a.Pb(0),a.Rb(1,"div",3),a.Rb(2,"div",4),a.Rb(3,"div",5),a.Mb(4,"mat-spinner",6),a.Qb(),a.xc(5,m,2,1,"div",2),a.Qb(),a.Qb(),a.Ob()),2&t){var r=a.cc();a.Ab(4),a.ic("diameter",r.spinnerDiameter),a.Ab(1),a.ic("ngIf",r.spinnerText)}}var f=["*"],p=function(){var t=function(){function t(){s(this,t),this.spinnerDiameter=100}return e(t,[{key:"ngOnChanges",value:function(){this.blocked&&this.updateSpinner()}},{key:"ngAfterViewInit",value:function(){this.updateSpinner()}},{key:"updateSpinner",value:function(){var t=this.contentNode.nativeElement,e=Math.min(t.offsetWidth,t.offsetHeight);this.spinnerDiameter=Math.max(Math.min(e-(this.spinnerText?20:0),100),10)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["ps-block-ui"]],viewQuery:function(t,e){var r;1&t&&a.tc(c,!0),2&t&&a.mc(r=a.Zb())&&(e.contentNode=r.first)},inputs:{blocked:"blocked",spinnerText:"spinnerText"},features:[a.yb],ngContentSelectors:f,decls:4,vars:1,consts:[[1,"ps-block-ui__content"],["content",""],[4,"ngIf"],[1,"ps-block-ui__overlay"],[1,"ps-block-ui__overlay-content"],[1,"ps-block-ui__spinner-container"],[1,"ps-block-ui__spinner",3,"diameter"]],template:function(t,e){1&t&&(a.hc(),a.Rb(0,"div",0,1),a.gc(2),a.Qb(),a.xc(3,d,6,2,"ng-container",2)),2&t&&(a.Ab(3),a.ic("ngIf",e.blocked))},directives:[i.m,o.b],styles:["\n      ps-block-ui {\n        display: grid;\n        position: relative;\n      }\n\n      .ps-block-ui__content {\n        grid-column: 1;\n        grid-row: 1;\n      }\n\n      .ps-block-ui__overlay {\n        grid-column: 1;\n        grid-row: 1;\n        z-index: 2;\n        background-color: rgba(244, 244, 244, 0.6);\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .ps-block-ui__spinner-container {\n        overflow: hidden;\n      }\n\n      .ps-block-ui__spinner {\n        display: inline-block;\n        margin: auto;\n        color: var(--ps-primary);\n        opacity: 1;\n      }\n\n      .ps-block-ui__overlay-content {\n        text-align: center;\n\n        position: sticky;\n        top: 10%;\n        bottom: 10%;\n      }\n    "],encapsulation:2,changeDetection:0}),t}()}}])}();