!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/nyh":function(e,o,a){"use strict";a.d(o,"a",(function(){return u}));var s=a("XoY3"),c=a("ROBh"),u=function(e){n(a,e);var o=i(a);function a(){return t(this,a),o.apply(this,arguments)}return r(a,[{key:"getLabel",value:function(t){return t.psLabel?Object(c.a)(t.psLabel):null}},{key:"mapDataToError",value:function(t){return Object(c.a)(t.map((function(t){return{errorText:"".concat(t.controlPath," - ").concat(t.errorKey," - ").concat(JSON.stringify(t.errorValue)),data:t}})))}}]),a}(s.a)},"2ZYK":function(e,n,o){"use strict";o.r(n),o.d(n,"FormDemoModule",(function(){return ot}));var i=o("2kYt"),a=o("nIj0"),s=o("PBFl"),c=o("Meci"),u=o("+Tre"),d=o("29Wa"),l=o("Cd2c"),b=o("R7+U"),f=o("sEIs"),h=o("bwdy"),p=o("C05f"),m=o("Ohay"),v=o("EM62"),_=o("tUta"),g=o("bFHC"),y=o("AZyY"),k=o("7V4E"),w=["errorCardWrapper"];function S(t,e){if(1&t&&(v.Rb(0,"ps-block-ui",7),v.gc(1),v.Qb()),2&t){var r=v.cc(2);v.ic("blocked",r.contentBlocked)}}function x(t,e){if(1&t&&(v.Rb(0,"mat-icon",10),v.zc(1),v.Qb()),2&t){var r=v.cc(3);v.Ab(1),v.Ac(r.exception.icon)}}function O(t,e){if(1&t&&(v.Rb(0,"mat-card",8),v.xc(1,x,2,1,"mat-icon",9),v.Rb(2,"span"),v.zc(3),v.dc(4,"psErrorMessage"),v.Qb(),v.Qb()),2&t){var r=v.cc(2);v.Db("ps-form__error-container--center",r.exception.alignCenter),v.Ab(1),v.ic("ngIf",r.exception.icon),v.Ab(2),v.Ac(v.ec(4,4,r.exception.errorObject))}}function C(t,e){if(1&t&&(v.Rb(0,"mat-icon"),v.zc(1),v.Qb()),2&t){var r=v.cc().$implicit;v.Ab(1),v.Ac(r.icon)}}function R(t,e){if(1&t&&(v.Rb(0,"button",17),v.Yb("click",(function(){return e.$implicit.click()})),v.xc(1,C,2,1,"mat-icon",18),v.zc(2),v.Qb()),2&t){var r=e.$implicit;v.Db("mat-raised-button","raised"===r.type)("mat-stroked-button","stroked"===r.type)("mat-icon-button","icon"===r.type),v.ic("color",r.color)("disabled",r.disabled&&r.disabled()),v.Ab(1),v.ic("ngIf",r.icon),v.Ab(1),v.Bc(" ",r.label," ")}}function E(t,e){if(1&t&&(v.Rb(0,"mat-card",11),v.Rb(1,"div",12),v.Mb(2,"ps-form-errors",13),v.Mb(3,"div",14),v.Rb(4,"div",15),v.gc(5,1),v.xc(6,R,3,10,"button",16),v.Qb(),v.Qb(),v.Qb()),2&t){var r=v.cc(2);v.Db("ps-form__savebar--sticky",r.savebarSticky),v.Ab(2),v.ic("form",r.form),v.Ab(4),v.ic("ngForOf",r.buttons)}}function M(t,e){if(1&t&&(v.Rb(0,"form",1),v.Rb(1,"div",2),v.xc(2,S,2,1,"ps-block-ui",3),v.Rb(3,"div",null,4),v.xc(5,O,5,6,"mat-card",5),v.Qb(),v.Qb(),v.xc(6,E,7,4,"mat-card",6),v.Qb()),2&t){var r=v.cc();v.ic("formGroup",r.form)("autocomplete",r.autocomplete),v.Ab(2),v.ic("ngIf",r.contentVisible),v.Ab(1),v.uc("display",r.exception?"block":"none"),v.Ab(2),v.ic("ngIf",r.exception),v.Ab(1),v.ic("ngIf",!r.savebarHidden)}}var I,Q,D=["*",[["","psFormSavebarButtons",""]]],A=["*","[psFormSavebarButtons]"],j={IntersectionObserver:IntersectionObserver},V=((I=function(){function e(r){t(this,e),this.cd=r,this._dataSourceSub=h.a.EMPTY,this._viewReady=!1,this._errrorInView$=new p.a(!1)}return r(e,[{key:"ngAfterViewInit",value:function(){this._viewReady=!0,this.updateErrorCardObserver(),this.activateDataSource()}},{key:"ngOnDestroy",value:function(){this._errorCardObserver&&(this._errorCardObserver.disconnect(),this._errorCardObserver=null),this._errrorInView$.complete(),this._dataSourceSub.unsubscribe(),this._dataSource&&this._dataSource.disconnect()}},{key:"activateDataSource",value:function(){var t=this;if(this._viewReady&&this._dataSource){var e={errorInView$:this._errrorInView$.pipe(Object(m.a)()),scrollToError:function(){t.errorCardWrapper.nativeElement.scrollIntoView({behavior:"smooth"})}};this._dataSourceSub=this._dataSource.connect(e).subscribe((function(){t.cd.markForCheck()}))}}},{key:"updateErrorCardObserver",value:function(){var t=this;!this._errorCardObserver&&this._dataSource&&this._viewReady?(this._errorCardObserver=new j.IntersectionObserver((function(e,r){t._errrorInView$.next(e[0].intersectionRatio>0),t.cd.markForCheck()}),{root:null,rootMargin:"-100px",threshold:0}),this._errorCardObserver.observe(this.errorCardWrapper.nativeElement)):this._errorCardObserver&&!this._dataSource&&(this._errorCardObserver.disconnect(),this._errorCardObserver=null)}},{key:"dataSource",set:function(t){this._dataSource&&(this._dataSource.disconnect(),this._dataSourceSub.unsubscribe()),this._dataSource=t,this.updateErrorCardObserver(),this._dataSource&&this.activateDataSource()},get:function(){return this._dataSource}},{key:"autocomplete",get:function(){return this.dataSource.autocomplete}},{key:"form",get:function(){return this.dataSource.form}},{key:"buttons",get:function(){return this.dataSource.buttons}},{key:"savebarMode",get:function(){return this.dataSource.savebarMode||"auto"}},{key:"savebarHidden",get:function(){return"hide"===this.savebarMode}},{key:"savebarSticky",get:function(){return"auto"===this.savebarMode?this.form.dirty||this.form.touched:"sticky"===this.savebarMode}},{key:"contentVisible",get:function(){return this.dataSource.contentVisible}},{key:"contentBlocked",get:function(){return this.dataSource.contentBlocked}},{key:"exception",get:function(){return this.dataSource.exception}}]),e}()).\u0275fac=function(t){return new(t||I)(v.Lb(v.h))},I.\u0275cmp=v.Fb({type:I,selectors:[["ps-form"]],viewQuery:function(t,e){var r;1&t&&v.Dc(w,!0),2&t&&v.mc(r=v.Zb())&&(e.errorCardWrapper=r.first)},inputs:{dataSource:"dataSource"},ngContentSelectors:A,decls:1,vars:1,consts:[["class","ps-form__main-container",3,"formGroup","autocomplete",4,"ngIf"],[1,"ps-form__main-container",3,"formGroup","autocomplete"],[1,"ps-form__cards-container"],[3,"blocked",4,"ngIf"],["errorCardWrapper",""],["class","ps-form__error-container",3,"ps-form__error-container--center",4,"ngIf"],["class","ps-form__savebar",3,"ps-form__savebar--sticky",4,"ngIf"],[3,"blocked"],[1,"ps-form__error-container"],["class","ps-form__error-icon",4,"ngIf"],[1,"ps-form__error-icon"],[1,"ps-form__savebar"],[1,"ps-form__savebar-container"],[3,"form"],[1,"ps-form__savebar-spacer"],[1,"ps-form__buttons"],["mat-button","","type","button",3,"mat-raised-button","mat-stroked-button","mat-icon-button","color","disabled","click",4,"ngFor","ngForOf"],["mat-button","","type","button",3,"color","disabled","click"],[4,"ngIf"]],template:function(t,e){1&t&&(v.hc(D),v.xc(0,M,7,7,"form",0)),2&t&&v.ic("ngIf",e.dataSource)},directives:[i.m,a.v,a.o,a.i,_.a,c.a,g.a,y.a,i.l,s.a],pipes:[k.a],styles:[".ps-form__main-container{box-sizing:border-box}.ps-form__cards-container{display:grid;grid-gap:1em}mat-card.ps-form__error-container{color:var(--ps-error)}mat-card.ps-form__error-container--center{display:grid;justify-items:center}mat-icon.ps-form__error-icon{color:var(--ps-error);font-size:72px;height:72px;width:72px}.ps-form__buttons button{margin:.25em}.ps-form__error-notfier-button{vertical-align:middle;cursor:pointer}.ps-form__savebar{bottom:-1px;margin:1em 0;z-index:5;padding:1em!important;display:flex;justify-content:space-between;border-top:5px solid var(--ps-accent)}mat-card.ps-form__savebar--sticky{position:-webkit-sticky;position:sticky}.ps-form__savebar-container{display:flex;flex-wrap:wrap;justify-content:flex-end;margin:-.25em;width:100%}.ps-form__savebar-container button{margin:.25em}.ps-form__savebar-spacer{margin-right:auto}@media only screen and (max-width:35em){mat-card.ps-form__savebar--sticky{position:static}}"],encapsulation:2,changeDetection:0}),I),T=o("TqqQ"),$=o("aCbn"),B=o("sKM9"),F=((Q=function e(){t(this,e)}).\u0275mod=v.Jb({type:Q}),Q.\u0275inj=v.Ib({factory:function(t){return new(t||Q)},imports:[[i.c,a.s,c.c,g.b,s.b,T.a,B.a,$.a]]}),Q),z=o("XoY3"),P=o("/BkX"),Y=o("/nyh"),q=o("mFH5"),N=o("ZTXN"),L=o("ROBh"),J=o("J+dc"),G=o("BwBJ"),W=o("YtkY"),H=o("8j5Y");function U(t,e){if(1&t&&(v.Rb(0,"div",13),v.zc(1),v.dc(2,"json"),v.Qb()),2&t){var r=e.$implicit;v.Ab(1),v.Ac(v.ec(2,1,r))}}var X,Z=function(){function e(r){var n=this;t(this,e),this.options=r,this.autocomplete="off",this.buttons=[],this._originalData=null,this._loading=!1,this._hasLoadError=!1,this._saving=!1,this._blockView=!1,this._isEditMode=!1,this._errorInView=!1,this.stateChanges$=new N.a,this._loadParams=null,this.buttonDefs={scrollToError:{type:"icon",icon:"error_outline",color:"warn",click:function(){return n._scrollToError()}},edit:{label:"bearbeiten",type:"raised",color:"primary",disabled:function(){return n.contentBlocked},click:function(){return n.edit()}},save:{label:"speichern",type:"raised",color:"primary",disabled:function(){return n.contentBlocked||!n.form.valid},click:function(){return n.save()}},cancel:{label:"cancel",type:"stroked",color:null,disabled:function(){return!1},click:function(){return n.reset()}}},this._loadingSub=h.a.EMPTY,this._connectSub=h.a.EMPTY,this._errorInViewSub=h.a.EMPTY}return r(e,[{key:"connect",value:function(t){var e=this;return this._scrollToError=function(){return setTimeout((function(){return t.scrollToError()}),0)},this._errorInViewSub=t.errorInView$.subscribe((function(t){e._errorInView=t,e.updateButtons(),e.stateChanges$.next()})),this._connectSub=this.options.loadTrigger$.subscribe((function(t){e._loadParams=t,e.loadData(t)})),this.stateChanges$}},{key:"disconnect",value:function(){this._connectSub.unsubscribe(),this._errorInViewSub.unsubscribe(),this._loadingSub.unsubscribe()}},{key:"setViewBlocked",value:function(t){this._blockView=t,this.stateChanges$.next()}},{key:"edit",value:function(){this.setEditMode(!0)}},{key:"save",value:function(){var t=this;this._saving=!0,this.exception=null,this.stateChanges$.next();var e=this.form.getRawValue();this.options.saveFn(e,this._loadParams).pipe(Object(J.a)(1)).subscribe({next:function(e){t.markDataSaved(),t.setEditMode(!1),t._saving=!1,t.stateChanges$.next()},error:function(e){t._saving=!1,t.exception={errorObject:e},t._errorInView||t._scrollToError(),t.updateButtons(),t.stateChanges$.next()}})}},{key:"reset",value:function(){this.resetData(),this.setEditMode(!1),this.stateChanges$.next()}},{key:"loadData",value:function(t){var e=this;this._loadingSub.unsubscribe(),this._loading=!0,this._hasLoadError=!1,this.exception=null,this.initializeData(null),this.setEditMode(!1),this.stateChanges$.next(),this._loadingSub=this.options.loadFn(t).pipe(Object(J.a)(1)).subscribe({next:function(t){e.initializeData(t),e._loading=!1,e.stateChanges$.next()},error:function(t){e._loading=!1,e._hasLoadError=!0,e.exception={errorObject:t,alignCenter:!0,icon:"sentiment_very_dissatisfied"},e.stateChanges$.next()}})}},{key:"initializeData",value:function(t){null==t?this.form.reset():this.form.patchValue(t),this.markDataSaved()}},{key:"markDataSaved",value:function(){this._originalData=this.form.getRawValue(),this.form.markAsPristine(),this.form.markAsUntouched()}},{key:"resetData",value:function(){this.form.patchValue(this._originalData),this.form.markAsPristine(),this.form.markAsUntouched()}},{key:"setEditMode",value:function(t){this._isEditMode=t,t?this.form.enable():this.form.disable(),this.updateButtons()}},{key:"updateButtons",value:function(){this.buttons=[],this.contentVisible&&(this._isEditMode?(this.exception&&!this._errorInView&&this.buttons.push(this.buttonDefs.scrollToError),this.buttons.push(this.buttonDefs.save),this.buttons.push(this.buttonDefs.cancel)):this.buttons.push(this.buttonDefs.edit))}},{key:"form",get:function(){return this.options.form}},{key:"contentVisible",get:function(){return!this._hasLoadError}},{key:"contentBlocked",get:function(){return this._loading||this._saving||this._blockView}},{key:"savebarMode",get:function(){return this._hasLoadError?"hide":"auto"}}]),e}(),K=((X=function(){function e(){var r=this;t(this,e),this.loadError=!1,this.saveError=!1,this.form=new a.h({input1:new a.e("a"),input2:new a.e("b")},[function(t){return t.value.input1===t.value.input2?null:{equal:"input1 and input2 must be equal"}}]),this.counter=0,this.loadTrigger$=new p.a(this.counter),this.logs=[],this.dataSource=new Z({form:this.form,loadTrigger$:this.loadTrigger$,loadFn:function(t){return r.logs.push({type:"load",params:t}),Object(L.a)({input1:"input 1 load count "+t,input2:"input 2 load count "+t}).pipe(Object(G.a)(1e3),Object(W.a)((function(t){if(r.loadError)throw new Error("this is the server error (loading)");return t})))},saveFn:function(t,e){return r.logs.push({type:"save",data:t,params:e}),Object(L.a)(null).pipe(Object(G.a)(1e3),Object(H.a)((function(t){if(r.saveError)throw new Error("this is the server error (saving)");return t})))}})}return r(e,[{key:"reload",value:function(){this.loadTrigger$.next(++this.counter)}}]),e}()).\u0275fac=function(t){return new(t||X)},X.\u0275cmp=v.Fb({type:X,selectors:[["app-form-data-source-demo"]],decls:28,vars:5,consts:[[1,"app-form-data-source-demo__settings"],[3,"ngModel","ngModelChange"],["mat-flat-button","","type","button","color","accent",3,"click"],[1,"app-form-data-source-demo__grid"],[3,"dataSource"],[3,"formGroup"],["type","text","matInput","","formControlName","input1"],["type","text","matInput","","formControlName","input2"],[2,"height","500px","margin-top","1em"],["psFormSavebarButtons",""],["mat-stroked-button","","type","button"],[1,"app-form-data-source-demo__logs"],["class","app-form-data-source-demo__log-item",4,"ngFor","ngForOf"],[1,"app-form-data-source-demo__log-item"]],template:function(t,e){1&t&&(v.Rb(0,"mat-card",0),v.Rb(1,"mat-checkbox",1),v.Yb("ngModelChange",(function(t){return e.loadError=t})),v.zc(2,"load error"),v.Qb(),v.Rb(3,"mat-checkbox",1),v.Yb("ngModelChange",(function(t){return e.saveError=t})),v.zc(4,"save error"),v.Qb(),v.Rb(5,"button",2),v.Yb("click",(function(){return e.reload()})),v.zc(6,"reload"),v.Qb(),v.Qb(),v.Rb(7,"div",3),v.Rb(8,"ps-form",4),v.Rb(9,"mat-card"),v.Rb(10,"form",5),v.Rb(11,"mat-form-field"),v.Rb(12,"mat-label"),v.zc(13,"Input 1"),v.Qb(),v.Mb(14,"input",6),v.Qb(),v.Rb(15,"mat-form-field"),v.Rb(16,"mat-label"),v.zc(17,"Input 2"),v.Qb(),v.Mb(18,"input",7),v.Qb(),v.Qb(),v.Qb(),v.Rb(19,"mat-card",8),v.zc(20,"dummy card"),v.Qb(),v.Pb(21,9),v.Rb(22,"button",10),v.zc(23,"dummy button 1"),v.Qb(),v.Rb(24,"button",10),v.zc(25,"dummy button 2"),v.Qb(),v.Ob(),v.Qb(),v.Rb(26,"mat-card",11),v.xc(27,U,3,3,"div",12),v.Qb(),v.Qb()),2&t&&(v.Ab(1),v.ic("ngModel",e.loadError),v.Ab(2),v.ic("ngModel",e.saveError),v.Ab(5),v.ic("dataSource",e.dataSource),v.Ab(2),v.ic("formGroup",e.form),v.Ab(17),v.ic("ngForOf",e.logs))},directives:[c.a,u.a,a.n,a.q,s.a,V,a.v,a.o,a.i,d.c,d.g,l.a,a.c,a.g,i.l],pipes:[i.g],styles:["\n      .app-form-data-source-demo__settings {\n        margin-bottom: 1em;\n      }\n\n      .app-form-data-source-demo__settings mat-checkbox {\n        margin: 1em;\n      }\n\n      .app-form-data-source-demo__grid {\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-gap: 1em;\n      }\n\n      .app-form-data-source-demo__log-item {\n        margin-bottom: 0.25em;\n        padding-bottom: 0.25em;\n        border-bottom: 1px solid #ccc;\n        font-size: 0.95em;\n      }\n\n      app-form-demo .mat-form-field {\n        display: block;\n      }\n    "],encapsulation:2,changeDetection:0}),X);function tt(t,e){1&t&&v.Mb(0,"app-form-data-source-demo")}var et,rt=((et=function e(){t(this,e),this.demoType="dataSource"}).\u0275fac=function(t){return new(t||et)},et.\u0275cmp=v.Fb({type:et,selectors:[["app-form-demo"]],decls:7,vars:4,consts:[[1,"app-form-demo__settings"],[3,"ngModel","ngModelChange"],[3,"value"],[3,"ngSwitch"],[4,"ngSwitchCase"]],template:function(t,e){1&t&&(v.Rb(0,"mat-card",0),v.Rb(1,"mat-form-field"),v.Rb(2,"mat-select",1),v.Yb("ngModelChange",(function(t){return e.demoType=t})),v.Rb(3,"mat-option",2),v.zc(4,"dataSource"),v.Qb(),v.Qb(),v.Qb(),v.Qb(),v.Pb(5,3),v.xc(6,tt,1,0,"app-form-data-source-demo",4),v.Ob()),2&t&&(v.Ab(2),v.ic("ngModel",e.demoType),v.Ab(1),v.ic("value","dataSource"),v.Ab(2),v.ic("ngSwitch",e.demoType),v.Ab(1),v.ic("ngSwitchCase","dataSource"))},directives:[c.a,d.c,b.a,a.n,a.q,q.k,i.o,i.p,K],styles:[".app-form-demo__settings[_ngcontent-%COMP%] {\n        margin-bottom: 1em;\n      }"],changeDetection:0}),et);o("89kn");var nt,ot=((nt=function e(){t(this,e)}).\u0275mod=v.Jb({type:nt}),nt.\u0275inj=v.Ib({factory:function(t){return new(t||nt)},imports:[[a.j,a.s,i.c,z.b.forRoot(Y.a),P.a,F,f.d.forChild([{path:"",component:rt}]),l.b,d.e,c.c,u.b,b.b,s.b]]}),nt)},BwBJ:function(e,o,a){"use strict";a.d(o,"a",(function(){return d}));var s=a("Efrr"),c=a("5uGe"),u=a("ryP2");function d(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.a,n=(e=t)instanceof Date&&!isNaN(+e)?+t-r.now():Math.abs(t);return function(t){return t.lift(new l(n,r))}}var l=function(){function e(r,n){t(this,e),this.delay=r,this.scheduler=n}return r(e,[{key:"call",value:function(t,e){return e.subscribe(new b(t,this.delay,this.scheduler))}}]),e}(),b=function(e){n(a,e);var o=i(a);function a(e,r,n){var i;return t(this,a),(i=o.call(this,e)).delay=r,i.scheduler=n,i.queue=[],i.active=!1,i.errored=!1,i}return r(a,[{key:"_schedule",value:function(t){this.active=!0,this.destination.add(t.schedule(a.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}},{key:"scheduleNotification",value:function(t){if(!0!==this.errored){var e=this.scheduler,r=new f(e.now()+this.delay,t);this.queue.push(r),!1===this.active&&this._schedule(e)}}},{key:"_next",value:function(t){this.scheduleNotification(u.a.createNext(t))}},{key:"_error",value:function(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleNotification(u.a.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(t){for(var e=t.source,r=e.queue,n=t.scheduler,o=t.destination;r.length>0&&r[0].time-n.now()<=0;)r.shift().notification.observe(o);if(r.length>0){var i=Math.max(0,r[0].time-n.now());this.schedule(t,i)}else this.unsubscribe(),e.active=!1}}]),a}(c.a),f=function e(r,n){t(this,e),this.time=r,this.notification=n}}}])}();