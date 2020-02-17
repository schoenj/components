(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-field-demo-form-field-demo-module-ngfactory~slider-demo-slider-demo-module-ngfactory"],{

/***/ "../components/form-base/index.ts":
/*!****************************************!*\
  !*** ../components/form-base/index.ts ***!
  \****************************************/
/*! exports provided: PsFormBaseModule, BasePsFormService, PsFormService, hasRequiredField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../components/form-base/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsFormBaseModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PsFormBaseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePsFormService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BasePsFormService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsFormService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PsFormService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasRequiredField", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["hasRequiredField"]; });

// export what ./public_api exports so we can import with the lib name like this:
// import { ModuleA } from 'libname'



/***/ }),

/***/ "../components/form-base/public_api.ts":
/*!*********************************************!*\
  !*** ../components/form-base/public_api.ts ***!
  \*********************************************/
/*! exports provided: PsFormBaseModule, BasePsFormService, PsFormService, hasRequiredField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_form_base_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/form-base.module */ "../components/form-base/src/form-base.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsFormBaseModule", function() { return _src_form_base_module__WEBPACK_IMPORTED_MODULE_0__["PsFormBaseModule"]; });

/* harmony import */ var _src_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/form.service */ "../components/form-base/src/form.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePsFormService", function() { return _src_form_service__WEBPACK_IMPORTED_MODULE_1__["BasePsFormService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsFormService", function() { return _src_form_service__WEBPACK_IMPORTED_MODULE_1__["PsFormService"]; });

/* harmony import */ var _src_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/helpers */ "../components/form-base/src/helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasRequiredField", function() { return _src_helpers__WEBPACK_IMPORTED_MODULE_2__["hasRequiredField"]; });






/***/ }),

/***/ "../components/form-base/src/form-base.module.ts":
/*!*******************************************************!*\
  !*** ../components/form-base/src/form-base.module.ts ***!
  \*******************************************************/
/*! exports provided: PsFormBaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsFormBaseModule", function() { return PsFormBaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.service */ "../components/form-base/src/form.service.ts");


class PsFormBaseModule {
    static forRoot(formsServiceType) {
        return {
            ngModule: PsFormBaseModule,
            providers: [{ provide: _form_service__WEBPACK_IMPORTED_MODULE_1__["PsFormService"], useClass: formsServiceType }],
        };
    }
}


/***/ }),

/***/ "../components/form-base/src/form.service.ts":
/*!***************************************************!*\
  !*** ../components/form-base/src/form.service.ts ***!
  \***************************************************/
/*! exports provided: PsFormService, BasePsFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsFormService", function() { return PsFormService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePsFormService", function() { return BasePsFormService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _prosoft_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prosoft/components/utils */ "../components/utils/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "../components/form-base/src/helpers.ts");





class PsFormService {
}
class BasePsFormService extends PsFormService {
    constructor() {
        super(...arguments);
        this.options = {
            debounceTime: 100,
            includeControlsDefault: false,
        };
        this.tryDetectRequired = true;
        this.getControlType = _helpers__WEBPACK_IMPORTED_MODULE_4__["getControlType"];
    }
    getControlErrors(control) {
        return this.getErrors(control, true, 'control');
    }
    getFormErrors(form, includeControls) {
        if (includeControls == null) {
            includeControls = this.options.includeControlsDefault;
        }
        return this.getErrors(form, includeControls, 'form');
    }
    /**
     * Provided to be overwritten to filter the errors.
     */
    filterErrors(errorData, includeControls, source) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(errorData);
    }
    getErrors(control, includeControls, source) {
        const update$ = this.createUpdateTrigger(control);
        return update$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.getErrorInfo(control, includeControls)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(errorData => this.filterErrors(errorData, includeControls, source)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(errorData => this.mapDataToError(errorData)));
    }
    createUpdateTrigger(control) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(control.valueChanges, control.statusChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.options.debounceTime));
    }
    getErrorInfo(control, includeControls = false) {
        return this.getControlErrorInfoInternal(control, '', includeControls);
    }
    getControlErrorInfoInternal(control, controlPath, includeControls) {
        const errors = [];
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
            for (const childName in control.controls) {
                if (!control.controls.hasOwnProperty(childName)) {
                    continue;
                }
                const childControl = control.controls[childName];
                if (!(childControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) || includeControls) {
                    errors.push(...this.getControlErrorInfoInternal(childControl, controlPath ? controlPath + '.' + childName : childName, includeControls));
                }
            }
        }
        if (control.errors) {
            errors.push(...Object(_prosoft_components_utils__WEBPACK_IMPORTED_MODULE_1__["objectToKeyValueArray"])(control.errors).map(error => this.createFormErrorData(error, control, controlPath)));
        }
        return errors;
    }
    createFormErrorData(error, control, controlPath) {
        return {
            controlPath: controlPath,
            errorKey: error.key,
            errorValue: error.value,
            isControl: control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"],
        };
    }
}


/***/ }),

/***/ "../components/form-base/src/helpers.ts":
/*!**********************************************!*\
  !*** ../components/form-base/src/helpers.ts ***!
  \**********************************************/
/*! exports provided: hasRequiredField, getControlType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRequiredField", function() { return hasRequiredField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlType", function() { return getControlType; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");

function hasRequiredField(abstractControl) {
    if (abstractControl.validator) {
        const validator = abstractControl.validator({});
        if (validator && validator.required) {
            return true;
        }
    }
    if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"] || abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
        const controls = abstractControl.controls; // any because of https://github.com/microsoft/TypeScript/issues/32552
        for (const controlName in controls) {
            if (controls[controlName]) {
                if (hasRequiredField(controls[controlName])) {
                    return true;
                }
            }
        }
    }
    return false;
}
/**
 * Returns the type of the control. Most of the time the type is the same as the selector.
 *
 * @param control The control class (MatSlider, MatSelect, ...)
 */
function getControlType(control) {
    const controlId = control.id /* MatFormFieldControl, z.B. checkbox */ || control.name; /* mat-radio-group */
    if (controlId) {
        const parts = controlId.split('-');
        if (parts[parts.length - 1].match(/[0-9]/)) {
            parts.pop();
        }
        return parts.join('-');
    }
    if (control.step !== undefined && control.thumbLabel !== undefined) {
        return 'mat-slider';
    }
    return null;
}


/***/ }),

/***/ "../components/form-field/src/dummy-mat-form-field-control.ts":
/*!********************************************************************!*\
  !*** ../components/form-field/src/dummy-mat-form-field-control.ts ***!
  \********************************************************************/
/*! exports provided: DummyMatFormFieldControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyMatFormFieldControl", function() { return DummyMatFormFieldControl; });
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");



class DummyMatFormFieldControl extends _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldControl"] {
    constructor(ngControl, formControl) {
        super();
        this.ngControl = ngControl;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'ps-dummy';
        this._value = null;
        this._required = false;
        this._disabled = false;
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
        if (formControl) {
            this._valueSubscription = formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(formControl.value)).subscribe(value => {
                this.value = value;
                this.errorState = formControl.invalid;
            });
            this._statusSubscription = formControl.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(formControl.status)).subscribe(() => {
                this.errorState = formControl.invalid;
            });
        }
    }
    get required() {
        return this._required;
    }
    set required(req) {
        this._required = !!req;
        this.stateChanges.next();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(dis) {
        this._disabled = !!dis;
        this.stateChanges.next();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.stateChanges.next();
    }
    get empty() {
        return !this.value;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    onContainerClick(_) { }
    setDescribedByIds(_) { }
    ngOnDestroy() {
        this.stateChanges.complete();
        if (this._statusSubscription) {
            this._statusSubscription.unsubscribe();
        }
        if (this._valueSubscription) {
            this._valueSubscription.unsubscribe();
        }
    }
    writeValue(_) { }
    registerOnChange(_) { }
    registerOnTouched(_) { }
    setDisabledState(_) { }
}


/***/ }),

/***/ "../components/form-field/src/form-field.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ../components/form-field/src/form-field.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_PsFormFieldComponent, View_PsFormFieldComponent_0, View_PsFormFieldComponent_Host_0, PsFormFieldComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PsFormFieldComponent", function() { return RenderType_PsFormFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PsFormFieldComponent_0", function() { return View_PsFormFieldComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PsFormFieldComponent_Host_0", function() { return View_PsFormFieldComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsFormFieldComponentNgFactory", function() { return PsFormFieldComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "../../node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "../../node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "../../node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-field.component */ "../components/form-field/src/form-field.component.ts");
/* harmony import */ var _form_base_src_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../form-base/src/form.service */ "../components/form-base/src/form.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_PsFormFieldComponent = ["\n      .mat-form-field--no-underline .mat-form-field-underline,\n      .mat-form-field--no-underline .mat-form-field-ripple {\n        background-color: transparent !important;\n      }\n\n      .ps-form-field-type-mat-slider mat-slider {\n        margin: -8px 0;\n        width: 100%;\n      }\n\n      ps-form-field .mat-form-field-invalid .mat-checkbox-frame,\n      ps-form-field .mat-form-field-invalid .mat-radio-outer-circle,\n      ps-form-field .mat-form-field-invalid .mat-slider-thumb {\n        border-color: var(--ps-error) !important;\n      }\n\n      .ps-form-field-type-mat-radio-group .mat-form-field-infix {\n        padding: 0.35em 0;\n      }\n      .ps-form-field-type-mat-checkbox .mat-form-field-infix {\n        padding: 0.25em 0;\n      }\n\n      .ps-form-field-type-mat-slider .mat-form-field-infix {\n        padding: 0;\n      }\n\n      \n\n      \n      .ps-form-field--subscript-resize .mat-form-field-underline,\n      .ps-form-field--subscript-resize .mat-form-field-subscript-wrapper {\n        position: static;\n      }\n      .ps-form-field--subscript-resize .mat-form-field-wrapper {\n        padding-bottom: 0;\n      }\n\n      \n      .ps-form-field--bubble .mat-form-field-subscript-wrapper {\n        padding-top: 1.25em !important;\n        overflow: visible;\n        z-index: 1;\n        margin-top: 0.25em;\n      }\n\n      \n      .ps-form-field--bubble .mat-form-field-subscript-wrapper > div {\n        display: block;\n        position: absolute;\n        top: 0;\n        max-width: 100%;\n        box-sizing: border-box;\n        bottom: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n\n        background: #fff;\n        border: 1px solid rgba(0, 0, 0, 0.2);\n        border-radius: 5px;\n        padding: 0 8px;\n        box-shadow: 1px 1px 3px #ccc;\n      }\n\n      \n      .ps-form-field--bubble .mat-form-field-subscript-wrapper > .mat-form-field-hint-wrapper {\n        left: auto;\n        right: 0;\n      }\n      \n      .ps-form-field--bubble .mat-form-field-subscript-wrapper > div:not(.mat-form-field-hint-wrapper) {\n        left: 0;\n        right: auto;\n      }\n\n      \n      .ps-form-field--bubble .mat-form-field-subscript-wrapper:before {\n        content: '';\n        position: absolute;\n        top: -3px;\n        width: 6px;\n        height: 6px;\n        border-right: none;\n        border-bottom: none;\n        border-bottom-right-radius: 999px;\n        transform: rotate(45deg) skew(-10deg, -10deg);\n        z-index: 100;\n        border-width: 1px 0 0 1px;\n        border-style: solid;\n      }\n\n      \n      .ps-form-field--bubble .mat-form-field-subscript-wrapper:before {\n        left: auto;\n        right: 10px;\n      }\n      \n      .ps-form-field--error-bubble .mat-form-field-subscript-wrapper:before {\n        left: 10px;\n        right: auto;\n      }\n\n      \n      .ps-form-field--bubble .mat-form-field-subscript-wrapper > div,\n      .ps-form-field--bubble .mat-form-field-subscript-wrapper:before {\n        border-color: rgba(0, 0, 0, 0.2);\n        background-color: #fff;\n      }\n\n      \n      .ps-form-field--error-bubble .mat-form-field-subscript-wrapper > div,\n      .ps-form-field--error-bubble .mat-form-field-subscript-wrapper:before {\n        border-color: #f99;\n        background-color: #fcc;\n      }\n\n      .ps-form-field--bubble .mat-error {\n        display: inline;\n        color: black;\n      }\n\n      .ps-form-field--bubble .mat-hint {\n        display: inline;\n        color: rgba(0, 0, 0, 0.54);\n      }\n\n      .ps-form-field--bubble:hover .mat-form-field-subscript-wrapper > div,\n      .ps-form-field--bubble .mat-focused .mat-form-field-subscript-wrapper > div {\n        bottom: initial !important;\n        white-space: initial;\n      }\n\n      .ps-form-field--bubble:hover .mat-form-field-subscript-wrapper,\n      .ps-form-field--bubble .mat-focused .mat-form-field-subscript-wrapper {\n        z-index: 10;\n      }\n\n      .ps-form-field--bubble:hover .mat-error,\n      .ps-form-field--bubble .mat-focused .mat-error,\n      .ps-form-field--bubble:hover .mat-hint,\n      .ps-form-field--bubble .mat-focused .mat-hint {\n        display: block;\n      }\n    "];
var RenderType_PsFormFieldComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_PsFormFieldComponent, data: {} });

function View_PsFormFieldComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, [[4, 4], [5, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_PsFormFieldComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, [[4, 4], [5, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, [[4, 4], [5, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.calculatedLabel; _ck(_v, 4, 0, currVal_0); }); }
function View_PsFormFieldComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, [[9, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatPrefix"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_PsFormFieldComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, [[10, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_PsFormFieldComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "button", [["mat-icon-button", ""], ["matSuffix", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleHint($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, [[10, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["info_outline"]))], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_2, currVal_3); }); }
function View_PsFormFieldComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, [[7, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).id; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.errorText; _ck(_v, 2, 0, currVal_1); }); }
function View_PsFormFieldComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { _matFormField: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 24, "mat-form-field", [["class", "mat-form-field"], ["style", "width: 100%;"]], [[2, "mat-form-field--emulated", null], [2, "mat-form-field--no-underline", null], [2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 7520256, [[1, 4]], 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], { appearance: [0, "appearance"], hintLabel: [1, "hintLabel"], floatLabel: [2, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 5, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 3, 1, null, View_PsFormFieldComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 3, 1, null, View_PsFormFieldComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_PsFormFieldComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](1, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 4, 1, null, View_PsFormFieldComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 4, 1, null, View_PsFormFieldComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 5, 2, null, View_PsFormFieldComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_24 = _co.appearance; var currVal_25 = _co.visibleHint; var currVal_26 = _co.floatLabel; _ck(_v, 2, 0, currVal_24, currVal_25, currVal_26); var currVal_27 = _co._labelChild; _ck(_v, 13, 0, currVal_27); var currVal_28 = (!_co._labelChild && _co.calculatedLabel); _ck(_v, 15, 0, currVal_28); var currVal_29 = _co._prefixChildren.length; _ck(_v, 17, 0, currVal_29); var currVal_30 = _co._suffixChildren.length; _ck(_v, 20, 0, currVal_30); var currVal_31 = _co.showHintToggle; _ck(_v, 22, 0, currVal_31); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).transform(_co.errors$)); _ck(_v, 24, 0, currVal_32); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.emulated; var currVal_1 = _co.noUnderline; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).appearance == "standard"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).appearance == "fill"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).appearance == "outline"); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).appearance == "legacy"); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._control.errorState; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._canLabelFloat; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._shouldLabelFloat(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._hasFloatingLabel(); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._hideControlPlaceholder(); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._control.disabled; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._control.autofilled; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._control.focused; var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).color == "accent"); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).color == "warn"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._shouldForward("untouched"); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._shouldForward("touched"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._shouldForward("pristine"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._shouldForward("dirty"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._shouldForward("valid"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._shouldForward("invalid"); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._shouldForward("pending"); var currVal_23 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationsEnabled; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23]); }); }
function View_PsFormFieldComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "ps-form-field", [], [[2, "ps-form-field--bubble", null], [2, "ps-form-field--error-bubble", null], [2, "ps-form-field--subscript-resize", null]], null, null, View_PsFormFieldComponent_0, RenderType_PsFormFieldComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1753088, null, 5, _form_field_component__WEBPACK_IMPORTED_MODULE_13__["PsFormFieldComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _form_base_src_form_service__WEBPACK_IMPORTED_MODULE_14__["PsFormService"], [2, _form_field_component__WEBPACK_IMPORTED_MODULE_13__["PS_FORM_FIELD_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { _ngControl: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { _suffixChildren: 1 })], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).showBubble; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).showErrorBubble; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).autoResizeHintError; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var PsFormFieldComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ps-form-field", _form_field_component__WEBPACK_IMPORTED_MODULE_13__["PsFormFieldComponent"], View_PsFormFieldComponent_Host_0, { createLabel: "createLabel", floatLabel: "floatLabel", hint: "hint", appearance: "appearance", subscriptType: "subscriptType", hintToggle: "hintToggle" }, {}, ["mat-label", "[matPrefix]", "*", "[matSuffix]"]);



/***/ }),

/***/ "../components/form-field/src/form-field.component.ts":
/*!************************************************************!*\
  !*** ../components/form-field/src/form-field.component.ts ***!
  \************************************************************/
/*! exports provided: PS_FORM_FIELD_CONFIG, PsFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PS_FORM_FIELD_CONFIG", function() { return PS_FORM_FIELD_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsFormFieldComponent", function() { return PsFormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _prosoft_components_form_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prosoft/components/form-base */ "../components/form-base/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dummy_mat_form_field_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dummy-mat-form-field-control */ "../components/form-field/src/dummy-mat-form-field-control.ts");







const PS_FORM_FIELD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PS_FORM_FIELD_CONFIG');
class PsFormFieldComponent {
    constructor(_elementRef, formsService, defaults) {
        this._elementRef = _elementRef;
        this.formsService = formsService;
        this.defaults = defaults;
        this.createLabel = true;
        this.floatLabel = 'auto';
        this.hint = null;
        this.appearance = 'legacy';
        this.subscriptType = this.defaults ? this.defaults.subscriptType : 'resize';
        this.hintToggle = null;
        /** The error messages to show */
        this.errors$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        /** indicates if the control is no real MatFormFieldControl */
        this.emulated = false;
        /** ide the underline for the control */
        this.noUnderline = false;
        this.showHint = false;
        this.calculatedLabel = null;
        this.hasError = false;
        if (!this.defaults) {
            this.defaults = {
                hintToggle: false,
                subscriptType: 'resize',
            };
        }
    }
    /** The MatLabel, if it is set or null */
    set labelChild(value) {
        this._labelChild = value;
        this.updateLabel();
        if (this._matFormField) {
            this._matFormField._changeDetectorRef.markForCheck();
        }
    }
    get showBubble() {
        return this.subscriptType === 'bubble' && (!!this.visibleHint || this.hasError);
    }
    get showErrorBubble() {
        return this.subscriptType === 'bubble' && this.hasError;
    }
    get autoResizeHintError() {
        return this.subscriptType === 'resize';
    }
    // mat-form-field childs, that we dont support:
    // @ContentChild(MatPlaceholder) _placeholderChild: MatPlaceholder; // Deprecated, placeholder attribute of the form field control should be used instead!
    // @ContentChildren(MatError) public _errorChildren: QueryList<MatError>; // Will be created automatically
    // @ContentChildren(MatHint) public _hintChildren: QueryList<MatHint>; // No idea how to make this work...
    get hintToggleOptionActive() {
        return typeof this.hintToggle === 'boolean' ? this.hintToggle : this.defaults.hintToggle;
    }
    get showHintToggle() {
        return !!this.hint && this.hintToggleOptionActive;
    }
    get visibleHint() {
        return this.showHint || !this.hintToggleOptionActive ? this.hint : null;
    }
    ngOnChanges(changes) {
        if (changes.hintToggle) {
            this.showHint = !this.hintToggleOptionActive;
        }
    }
    ngAfterContentInit() {
        this.formControl = this._ngControl && this._ngControl.control;
        this.matFormFieldControl = this._control || new _dummy_mat_form_field_control__WEBPACK_IMPORTED_MODULE_6__["DummyMatFormFieldControl"](this._ngControl, this.formControl);
        this._matFormField._control = this.matFormFieldControl;
        this.emulated = this.matFormFieldControl instanceof _dummy_mat_form_field_control__WEBPACK_IMPORTED_MODULE_6__["DummyMatFormFieldControl"];
        this.realFormControl = getRealFormControl(this._ngControl, this.matFormFieldControl);
        this.controlType = this.formsService.getControlType(this.realFormControl) || 'unknown';
        this._elementRef.nativeElement.classList.add(`ps-form-field-type-${this.controlType}`);
        this.noUnderline = this.emulated || !!this.realFormControl.noUnderline;
        if (this.floatLabel === 'auto' && (this.emulated || this.realFormControl.shouldLabelFloat === undefined)) {
            this.floatLabel = 'always';
        }
        if (this.formControl) {
            if (this.formsService.tryDetectRequired) {
                this.matFormFieldControl.required = Object(_prosoft_components_form_base__WEBPACK_IMPORTED_MODULE_3__["hasRequiredField"])(this.formControl);
            }
            this.errors$ = this.formsService.getControlErrors(this.formControl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(errors => {
                this.hasError = !!errors.length;
            }));
            this.updateLabel();
        }
    }
    ngOnDestroy() {
        if (this.matFormFieldControl instanceof _dummy_mat_form_field_control__WEBPACK_IMPORTED_MODULE_6__["DummyMatFormFieldControl"]) {
            this.matFormFieldControl.ngOnDestroy();
        }
        if (this.labelTextSubscription) {
            this.labelTextSubscription.unsubscribe();
        }
    }
    toggleHint(event) {
        this.showHint = !this.showHint;
        event.stopPropagation();
    }
    updateLabel() {
        this.calculatedLabel = null;
        if (!this.createLabel || this._labelChild || !this.formControl) {
            return;
        }
        const labelText$ = this.formsService.getLabel(this.formControl);
        if (!labelText$) {
            return;
        }
        if (this.labelTextSubscription) {
            this.labelTextSubscription.unsubscribe();
        }
        this.labelTextSubscription = labelText$.subscribe(label => {
            if (this.controlType.startsWith('mat-checkbox')) {
                const labelNode = this._elementRef.nativeElement.querySelectorAll('.mat-checkbox-label')[0];
                if (!labelNode.innerText.trim()) {
                    if (labelNode.childNodes.length === 1) {
                        labelNode.appendChild(document.createTextNode(label));
                    }
                    else {
                        labelNode.childNodes[1].nodeValue = label;
                    }
                }
            }
            else {
                this.calculatedLabel = label;
            }
            // when only our own component is marked for check, then the label will not be shown
            // when labelText$ didn't run synchronously
            this._matFormField._changeDetectorRef.markForCheck();
        });
    }
}
function getRealFormControl(ngControl, matFormFieldControl) {
    if (!(matFormFieldControl instanceof _dummy_mat_form_field_control__WEBPACK_IMPORTED_MODULE_6__["DummyMatFormFieldControl"]) || !ngControl) {
        return matFormFieldControl;
    }
    return ngControl.valueAccessor;
}


/***/ }),

/***/ "../components/form-field/src/form-field.module.ts":
/*!*********************************************************!*\
  !*** ../components/form-field/src/form-field.module.ts ***!
  \*********************************************************/
/*! exports provided: PsFormFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsFormFieldModule", function() { return PsFormFieldModule; });
class PsFormFieldModule {
}


/***/ }),

/***/ "../components/utils/index.ts":
/*!************************************!*\
  !*** ../components/utils/index.ts ***!
  \************************************/
/*! exports provided: objectToKeyValueArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../components/utils/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectToKeyValueArray", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["objectToKeyValueArray"]; });

// export what ./public_api exports so we can import with the lib name like this:
// import { ModuleA } from 'libname'



/***/ }),

/***/ "../components/utils/public_api.ts":
/*!*****************************************!*\
  !*** ../components/utils/public_api.ts ***!
  \*****************************************/
/*! exports provided: objectToKeyValueArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/object */ "../components/utils/src/object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectToKeyValueArray", function() { return _src_object__WEBPACK_IMPORTED_MODULE_0__["objectToKeyValueArray"]; });




/***/ }),

/***/ "../components/utils/src/object.ts":
/*!*****************************************!*\
  !*** ../components/utils/src/object.ts ***!
  \*****************************************/
/*! exports provided: objectToKeyValueArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToKeyValueArray", function() { return objectToKeyValueArray; });
function objectToKeyValueArray(errors) {
    const errorList = [];
    for (const key in errors) {
        if (!errors.hasOwnProperty(key)) {
            continue;
        }
        errorList.push({
            key: key,
            value: errors[key],
        });
    }
    return errorList;
}


/***/ })

}]);
//# sourceMappingURL=default~form-field-demo-form-field-demo-module-ngfactory~slider-demo-slider-demo-module-ngfactory-es2015.js.map