(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{EhEW:function(e,t,i){"use strict";i.r(t),i.d(t,"NumberInputDemoModule",(function(){return k}));var n=i("2kYt"),a=i("nIj0"),r=i("PBFl"),o=i("Meci"),s=i("+Tre"),d=i("mFH5"),l=i("Cd2c"),c=i("sEIs"),u=i("XoY3"),h=i("eY0o"),m=i("5XID"),b=i("EM62"),p=i("29Wa"),g=i("ZTXN"),f=i("bFHC");const _=["inputfield"];let x=0;const v=Object(d.w)(class{constructor(e,t,i,n){this._defaultErrorStateMatcher=e,this._parentForm=t,this._parentFormGroup=i,this.ngControl=n}});let M=(()=>{class e extends v{constructor(e,t,i,n,a,r){super(n,t,i,e),this.ngControl=e,this.cd=a,this.localeId=r,this._stepSize=1,this.focused=!1,this.stateChanges=new g.a,this.controlType="ps-number-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._value=null,this.valueChange=new b.o,this._readonly=!1,this._uid="ps-number-input-"+x++,this._onModelChange=e=>{},this._onModelTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}get stepSize(){return this._stepSize}set stepSize(e){if(this._stepSize=e,null!=this._stepSize){const e=this.stepSize.toString().split(/[,]|[.]/);this._calculatedDecimals=e[1]?e[1].length:void 0}}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=Object(m.c)(e),this.stateChanges.next(),this.cd.markForCheck()}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=Object(m.c)(e),this.cd.markForCheck()}get value(){return this._value}set value(e){e!==this.value&&(this._value=e,this._formatValue(),this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Object(m.c)(e),this.cd.markForCheck()}get empty(){return null==this._value&&!this.autofilled}get shouldLabelFloat(){return this.focused||!this.empty}ngOnInit(){this.id=this.id,this._decimalSeparator=Object(n.w)(this.localeId,n.s.Decimal),this._thousandSeparator=Object(n.w)(this.localeId,n.s.Group)}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this._clearTimer(),this.stateChanges.complete()}ngDoCheck(){this.ngControl&&this.updateErrorState()}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}onContainerClick(){this.focused||this.focus()}focus(e){this._inputfieldViewChild.nativeElement.focus(e)}writeValue(e){this.value=e}registerOnChange(e){this._onModelChange=e}registerOnTouched(e){this._onModelTouched=e}setDisabledState(e){this.disabled=e}_repeat(e,t,i){const n=t||500;this._clearTimer(),this._timer=setTimeout(()=>{this._repeat(e,40,i)},n),this._spin(e,i)}_clearTimer(){this._timer&&clearInterval(this._timer)}_spin(e,t){const i=this._fixNumber(this.value+this.stepSize*t);this.value=i,this._onModelChange(i),this.valueChange.emit(i)}_parseValue(e){let t;return""===(e=e.trim())?null:(e=e.replace(this._thousandSeparator,"").replace(this._decimalSeparator,"."),t=this._fixNumber(parseFloat(e)),t)}_formatValue(){const e=this.value;if(null==e)this._formattedValue=null;else{const t=this._getDecimals();this._formattedValue=e.toLocaleString(this.localeId,{maximumFractionDigits:t})}this._inputfieldViewChild&&this._inputfieldViewChild.nativeElement&&(this._inputfieldViewChild.nativeElement.value=this._formattedValue)}_getDecimals(){return void 0===this.decimals?this._calculatedDecimals:this.decimals}_toFixed(e,t){const i=Math.pow(10,t||0);return String(Math.round(e*i)/i)}_fixNumber(e){const t=this._getDecimals();return e=t?parseFloat(this._toFixed(e,t)):e>=0?Math.floor(e):Math.ceil(e),isNaN(e)?null:(null!==this.max&&e>this.max&&(e=this.max),null!==this.min&&e<this.min&&(e=this.min),e)}_onUpButtonMousedown(e){this.disabled||(this._inputfieldViewChild.nativeElement.focus(),this._repeat(e,null,1),e.preventDefault())}_onUpButtonMouseup(e){this.disabled||this._clearTimer()}_onUpButtonMouseleave(e){this.disabled||this._clearTimer()}_onDownButtonMousedown(e){this.disabled||(this._inputfieldViewChild.nativeElement.focus(),this._repeat(e,null,-1),e.preventDefault())}_onDownButtonMouseup(e){this.disabled||this._clearTimer()}_onDownButtonMouseleave(e){this.disabled||this._clearTimer()}_onInputKeydown(e){38===e.which?(this._spin(e,1),e.preventDefault()):40===e.which&&(this._spin(e,-1),e.preventDefault())}_onInput(e){this._value=this._parseValue(e.target.value),this.stateChanges.next(),this._onModelChange(this.value),this.valueChange.emit(this.value)}_onFocusChanged(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next()),e||(this._formatValue(),this._onModelTouched())}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(a.m,10),b.Lb(a.p,8),b.Lb(a.i,8),b.Lb(d.c),b.Lb(b.h),b.Lb(b.v))},e.\u0275cmp=b.Fb({type:e,selectors:[["ps-number-input"]],viewQuery:function(e,t){var i;1&e&&b.tc(_,!0),2&e&&b.mc(i=b.Zb())&&(t._inputfieldViewChild=i.first)},hostVars:8,hostBindings:function(e,t){2&e&&b.Bb("id",t.id)("placeholder",t.placeholder)("disabled",t.disabled)("required",t.required)("readonly",t.readonly||null)("aria-describedby",t._ariaDescribedby||null)("aria-invalid",t.errorState)("aria-required",t.required.toString())},inputs:{min:"min",max:"max",tabindex:"tabindex",decimals:"decimals",stepSize:"stepSize",disabled:"disabled",id:"id",placeholder:"placeholder",required:"required",errorStateMatcher:"errorStateMatcher",value:"value",readonly:"readonly"},outputs:{valueChange:"valueChange"},features:[b.zb([{provide:p.d,useExisting:e}]),b.xb,b.yb],decls:9,vars:13,consts:[[1,"ps-number-input__wrapper"],["type","text",1,"ps-number-input__input","mat-input-element",3,"value","disabled","readonly","keydown","input","focus","blur"],["inputfield",""],["type","button","tabindex","-1",1,"ps-number-input__button-up",3,"disabled","mouseleave","mousedown","mouseup"],["type","button","tabindex","-1",1,"ps-number-input__button-down",3,"disabled","mouseleave","mousedown","mouseup"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Rb(1,"input",1,2),b.Yb("keydown",(function(e){return t._onInputKeydown(e)}))("input",(function(e){return t._onInput(e)}))("focus",(function(){return t._onFocusChanged(!0)}))("blur",(function(){return t._onFocusChanged(!1)})),b.Qb(),b.Rb(3,"button",3),b.Yb("mouseleave",(function(e){return t._onUpButtonMouseleave(e)}))("mousedown",(function(e){return t._onUpButtonMousedown(e)}))("mouseup",(function(e){return t._onUpButtonMouseup(e)})),b.Rb(4,"mat-icon"),b.zc(5,"keyboard_arrow_up"),b.Qb(),b.Qb(),b.Rb(6,"button",4),b.Yb("mouseleave",(function(e){return t._onDownButtonMouseleave(e)}))("mousedown",(function(e){return t._onDownButtonMousedown(e)}))("mouseup",(function(e){return t._onDownButtonMouseup(e)})),b.Rb(7,"mat-icon"),b.zc(8,"keyboard_arrow_down"),b.Qb(),b.Qb(),b.Qb()),2&e&&(b.Ab(1),b.ic("value",t._formattedValue||null)("disabled",t.disabled)("readonly",t.readonly),b.Bb("aria-valumin",t.min)("aria-valuemax",t.max)("aria-valuenow",t.value)("tabindex",t.tabindex)("placeholder",t.placeholder)("required",t.required),b.Ab(2),b.ic("disabled",t.disabled||t.readonly),b.Bb("readonly",t.readonly),b.Ab(3),b.ic("disabled",t.disabled||t.readonly),b.Bb("readonly",t.readonly))},directives:[f.a],styles:[".ps-number-input__wrapper{overflow:visible;position:relative}.ps-number-input__input{box-sizing:border-box;width:100%;padding-right:1.5em}.ps-number-input__button-down,.ps-number-input__button-up{cursor:pointer;display:block;height:50%;margin:0;overflow:hidden;padding:0;position:absolute;right:0;text-align:center;width:1.5em;background:none;border:none;color:rgba(0,0,0,.54)}.ps-number-input__button-down mat-icon,.ps-number-input__button-up mat-icon{position:absolute;top:50%;left:50%;margin-top:-.5em;margin-left:-.5em;width:1em}.ps-number-input__button-down:not([disabled]):hover,.ps-number-input__button-up:not([disabled]):hover{color:var(--ps-primary)}.ps-number-input__button-down[disabled],.ps-number-input__button-up[disabled]{cursor:default}.ps-number-input__button-up{top:0}.ps-number-input__button-down{bottom:0}"],encapsulation:2,changeDetection:0}),e})();const C=[n.c,f.b];let w=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[C]}),e})();var y=i("/nyh"),S=i("sxkr"),z=i("q3Sb");function R(e,t){if(1&e){const e=b.Sb();b.Pb(0),b.Rb(1,"div",8),b.Rb(2,"ps-form-field",9),b.Rb(3,"mat-label"),b.zc(4,"value"),b.Qb(),b.Rb(5,"ps-number-input",10),b.Yb("valueChange",(function(t){return b.pc(e),b.cc().value=t})),b.Qb(),b.Qb(),b.zc(6," Code: "),b.Rb(7,"pre",11),b.zc(8),b.Qb(),b.Qb(),b.Rb(9,"div",8),b.Rb(10,"ps-form-field",9),b.Rb(11,"mat-label"),b.zc(12,"ngModel"),b.Qb(),b.Rb(13,"ps-number-input",12),b.Yb("ngModelChange",(function(t){return b.pc(e),b.cc().model=t})),b.Qb(),b.Qb(),b.zc(14," Code: "),b.Rb(15,"pre",11),b.zc(16),b.Qb(),b.Qb(),b.Rb(17,"div",13),b.Rb(18,"ps-form-field",9),b.Rb(19,"mat-label"),b.zc(20,"form"),b.Qb(),b.Mb(21,"ps-number-input",14),b.Qb(),b.zc(22," Code: "),b.Rb(23,"pre",11),b.zc(24),b.Qb(),b.Qb(),b.Ob()}if(2&e){const e=b.cc();b.Ab(2),b.ic("hint","Value: "+e.value),b.Ab(3),b.ic("min",e.min)("max",e.max)("stepSize",e.stepSize)("decimals",e.decimals)("placeholder",e.placeholder)("required",e.required)("disabled",e.disabled)("readonly",e.readonly)("errorStateMatcher",e.errorStateMatcher)("value",e.value),b.Ab(3),b.Ac(e.getCodeSnippet("value")),b.Ab(2),b.ic("hint","Value: "+e.model),b.Ab(3),b.ic("min",e.min)("max",e.max)("stepSize",e.stepSize)("decimals",e.decimals)("placeholder",e.placeholder)("required",e.required)("disabled",e.disabled)("readonly",e.readonly)("errorStateMatcher",e.errorStateMatcher)("ngModel",e.model),b.Ab(3),b.Ac(e.getCodeSnippet("ngmodel")),b.Ab(1),b.ic("formGroup",e.form),b.Ab(1),b.ic("hint","Value: "+e.form.get("control").value),b.Ab(3),b.ic("min",e.min)("max",e.max)("stepSize",e.stepSize)("decimals",e.decimals)("placeholder",e.placeholder)("required",e.required)("disabled",e.disabled)("readonly",e.readonly)("errorStateMatcher",e.errorStateMatcher),b.Ab(3),b.Ac(e.getCodeSnippet("form"))}}let Q=(()=>{class e{constructor(e){this.cd=e,this.value=5,this.model=5,this.control=new a.e(5),this.form=new a.h({control:this.control}),this.show=!0,this.min=0,this.max=20,this.stepSize=1,this.decimals=1,this.placeholder="",this.required=!1,this.disabled=!1,this.readonly=!1,this.errorStateMatcher=null,this.validatorRequired=!1,this.useErrorStateMatcher=!1}onValidatorChange(){const e=[];this.validatorRequired&&e.push(a.u.required),this.control.setValidators(e)}onUseErrorStateMatcherChange(){this.errorStateMatcher=this.useErrorStateMatcher?{isErrorState:()=>!0}:null}setValues(e){this.value=e,this.model=e,this.control.patchValue(e)}onDisabledChanged(){this.disabled?this.form.disable():this.form.enable()}recreate(){this.show=!1,setTimeout(()=>{this.show=!0,this.cd.markForCheck()})}getCodeSnippet(e){let t;return t="value"===e?'[(value)]="value"':"ngmodel"===e?'[(ngModel)]="value"':'formControlName="control"',`  <ps-number-input\n    [min]="${this.min}" [max]="${this.max}" [stepSize]="${this.stepSize}" [decimals]="${this.decimals}"\n    [placeholder]="${this.placeholder}" [required]="${this.required}"\n    [disabled]="${this.disabled}" [readonly]="${this.readonly}" [errorStateMatcher]="${this.errorStateMatcher?"errorStateMatcher":"null"}"\n    ${t}\n  ></ps-number-input>`}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(b.h))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-number-input-demo"]],decls:40,vars:11,consts:[[1,"app-number-input-demo__settings"],[1,"app-number-input-demo__checkboxes"],[3,"ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["matInput","","type","text",3,"ngModel","ngModelChange"],["type","button","mat-stroked-button","",3,"click"],[4,"ngIf"],[1,"app-number-input-demo__input-block"],[3,"hint"],[3,"min","max","stepSize","decimals","placeholder","required","disabled","readonly","errorStateMatcher","value","valueChange"],[1,"app-number-input-demo__code"],[3,"min","max","stepSize","decimals","placeholder","required","disabled","readonly","errorStateMatcher","ngModel","ngModelChange"],[1,"app-number-input-demo__input-block",3,"formGroup"],["formControlName","control",3,"min","max","stepSize","decimals","placeholder","required","disabled","readonly","errorStateMatcher"]],template:function(e,t){1&e&&(b.Rb(0,"mat-card"),b.Rb(1,"h1"),b.zc(2,"ps-slider"),b.Qb(),b.Rb(3,"div",0),b.Rb(4,"div",1),b.Rb(5,"mat-checkbox",2),b.Yb("ngModelChange",(function(e){return t.disabled=e}))("change",(function(){return t.onDisabledChanged()})),b.zc(6,"disabled"),b.Qb(),b.Rb(7,"mat-checkbox",3),b.Yb("ngModelChange",(function(e){return t.readonly=e})),b.zc(8,"readonly"),b.Qb(),b.Rb(9,"mat-checkbox",3),b.Yb("ngModelChange",(function(e){return t.required=e})),b.zc(10,"required"),b.Qb(),b.Rb(11,"mat-checkbox",2),b.Yb("ngModelChange",(function(e){return t.validatorRequired=e}))("change",(function(){return t.onValidatorChange()})),b.zc(12,"required validator"),b.Qb(),b.Rb(13,"mat-checkbox",2),b.Yb("ngModelChange",(function(e){return t.useErrorStateMatcher=e}))("change",(function(){return t.onUseErrorStateMatcherChange()})),b.zc(14,"errorStateMatcher (always invalid)"),b.Qb(),b.Qb(),b.Rb(15,"ps-form-field"),b.Rb(16,"mat-label"),b.zc(17,"min value"),b.Qb(),b.Rb(18,"input",4),b.Yb("ngModelChange",(function(e){return t.min=e})),b.Qb(),b.Qb(),b.Rb(19,"ps-form-field"),b.Rb(20,"mat-label"),b.zc(21,"max value"),b.Qb(),b.Rb(22,"input",4),b.Yb("ngModelChange",(function(e){return t.max=e})),b.Qb(),b.Qb(),b.Rb(23,"ps-form-field"),b.Rb(24,"mat-label"),b.zc(25,"step size"),b.Qb(),b.Rb(26,"input",4),b.Yb("ngModelChange",(function(e){return t.stepSize=e})),b.Qb(),b.Qb(),b.Rb(27,"ps-form-field"),b.Rb(28,"mat-label"),b.zc(29,"decimals"),b.Qb(),b.Rb(30,"input",4),b.Yb("ngModelChange",(function(e){return t.decimals=e})),b.Qb(),b.Qb(),b.Rb(31,"ps-form-field"),b.Rb(32,"mat-label"),b.zc(33,"placeholder"),b.Qb(),b.Rb(34,"input",5),b.Yb("ngModelChange",(function(e){return t.placeholder=e})),b.Qb(),b.Qb(),b.Rb(35,"button",6),b.Yb("click",(function(){return t.setValues(null)})),b.zc(36,"set values null"),b.Qb(),b.Rb(37,"button",6),b.Yb("click",(function(){return t.recreate()})),b.zc(38,"recreate slider"),b.Qb(),b.Qb(),b.xc(39,R,25,36,"ng-container",7),b.Qb()),2&e&&(b.Ab(5),b.ic("ngModel",t.disabled),b.Ab(2),b.ic("ngModel",t.readonly),b.Ab(2),b.ic("ngModel",t.required),b.Ab(2),b.ic("ngModel",t.validatorRequired),b.Ab(2),b.ic("ngModel",t.useErrorStateMatcher),b.Ab(5),b.ic("ngModel",t.min),b.Ab(4),b.ic("ngModel",t.max),b.Ab(4),b.ic("ngModel",t.stepSize),b.Ab(4),b.ic("ngModel",t.decimals),b.Ab(4),b.ic("ngModel",t.placeholder),b.Ab(5),b.ic("ngIf",t.show))},directives:[o.a,s.a,a.n,a.q,z.a,p.g,l.a,a.r,a.c,r.a,n.m,M,a.t,a.o,a.i,a.g],styles:[".app-number-input-demo__settings[_ngcontent-%COMP%] {\n        margin-bottom: 2em;\n      }\n      .app-number-input-demo__checkboxes[_ngcontent-%COMP%] {\n        display: flex;\n      }\n      .app-number-input-demo__checkboxes[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n        margin-right: 1em;\n      }\n      .app-number-input-demo__input-block[_ngcontent-%COMP%] {\n        border: 1px solid #ccc;\n        margin: 0.5em 0;\n        padding: 1em;\n      }\n      .app-number-input-demo__code[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n      }"],changeDetection:0}),e})();i("89kn");let k=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},providers:[{provide:d.c,useClass:S.a}],imports:[[c.d.forChild([{path:"",component:Q}]),n.c,a.j,a.s,w,u.b.forRoot(y.a),h.a,o.c,r.b,s.b,l.b]]}),e})()},Meci:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return c}));var n=i("5lCh"),a=i("mFH5"),r=i("EM62");const o=["*",[["mat-card-footer"]]],s=["*","mat-card-footer"];let d=(()=>{class e{constructor(){this.align="start"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.Gb({type:e,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(e,t){2&e&&r.Db("mat-card-actions-align-end","end"===t.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),e})(),l=(()=>{class e{constructor(e){this._animationMode=e}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(n.a,8))},e.\u0275cmp=r.Fb({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(e,t){2&e&&r.Db("_mat-animation-noopable","NoopAnimations"===t._animationMode)},exportAs:["matCard"],ngContentSelectors:s,decls:2,vars:0,template:function(e,t){1&e&&(r.hc(o),r.gc(0),r.gc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),e})(),c=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},imports:[[a.h],a.h]}),e})()}}]);