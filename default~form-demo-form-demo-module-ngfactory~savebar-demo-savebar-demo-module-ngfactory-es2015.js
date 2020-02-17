(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-demo-form-demo-module-ngfactory~savebar-demo-savebar-demo-module-ngfactory"],{

/***/ "../components/core/index.ts":
/*!***********************************!*\
  !*** ../components/core/index.ts ***!
  \***********************************/
/*! exports provided: PsExceptionMessageExtractor, PsIntlService, PsIntlServiceEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../components/core/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsExceptionMessageExtractor", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PsExceptionMessageExtractor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsIntlService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PsIntlService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsIntlServiceEn", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PsIntlServiceEn"]; });

// export what ./public_api exports so we can import with the lib name like this:
// import { ModuleA } from 'libname'



/***/ }),

/***/ "../components/core/public_api.ts":
/*!****************************************!*\
  !*** ../components/core/public_api.ts ***!
  \****************************************/
/*! exports provided: PsExceptionMessageExtractor, PsIntlService, PsIntlServiceEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_exception_message_extractor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/exception-message-extractor.service */ "../components/core/src/exception-message-extractor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsExceptionMessageExtractor", function() { return _src_exception_message_extractor_service__WEBPACK_IMPORTED_MODULE_0__["PsExceptionMessageExtractor"]; });

/* harmony import */ var _src_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/intl */ "../components/core/src/intl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsIntlService", function() { return _src_intl__WEBPACK_IMPORTED_MODULE_1__["PsIntlService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsIntlServiceEn", function() { return _src_intl__WEBPACK_IMPORTED_MODULE_1__["PsIntlServiceEn"]; });





/***/ }),

/***/ "../components/core/src/exception-message-extractor.service.ts":
/*!*********************************************************************!*\
  !*** ../components/core/src/exception-message-extractor.service.ts ***!
  \*********************************************************************/
/*! exports provided: PsExceptionMessageExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsExceptionMessageExtractor", function() { return PsExceptionMessageExtractor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

class PsExceptionMessageExtractor {
    /**
     * Extracts a error message from a given error object
     * @param error The error object.
     * @returns The error message
     */
    extractErrorMessage(error) {
        if (!error) {
            return null;
        }
        if (typeof error === 'string') {
            return error;
        }
        return error.message;
    }
}
PsExceptionMessageExtractor.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function PsExceptionMessageExtractor_Factory() { return new PsExceptionMessageExtractor(); }, token: PsExceptionMessageExtractor, providedIn: "root" });


/***/ }),

/***/ "../components/savebar/src/savebar-right-content.directive.ts":
/*!********************************************************************!*\
  !*** ../components/savebar/src/savebar-right-content.directive.ts ***!
  \********************************************************************/
/*! exports provided: PsSavebarRightContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSavebarRightContentDirective", function() { return PsSavebarRightContentDirective; });
class PsSavebarRightContentDirective {
}


/***/ }),

/***/ "../components/savebar/src/savebar.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ../components/savebar/src/savebar.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_PsSavebarComponent, View_PsSavebarComponent_0, View_PsSavebarComponent_Host_0, PsSavebarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PsSavebarComponent", function() { return RenderType_PsSavebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PsSavebarComponent_0", function() { return View_PsSavebarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PsSavebarComponent_Host_0", function() { return View_PsSavebarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSavebarComponentNgFactory", function() { return PsSavebarComponentNgFactory; });
/* harmony import */ var _savebar_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savebar.component.scss.ngstyle */ "../components/savebar/src/savebar.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _form_errors_src_form_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form-errors/src/form-errors.component.ngfactory */ "../components/form-errors/src/form-errors.component.ngfactory.js");
/* harmony import */ var _form_errors_src_form_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form-errors/src/form-errors.component */ "../components/form-errors/src/form-errors.component.ts");
/* harmony import */ var _form_base_src_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../form-base/src/form.service */ "../components/form-base/src/form.service.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "../../node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "../../node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _savebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./savebar.component */ "../components/savebar/src/savebar.component.ts");
/* harmony import */ var _core_src_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/src/intl */ "../components/core/src/intl.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_PsSavebarComponent = [_savebar_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PsSavebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_PsSavebarComponent, data: {} });

function View_PsSavebarComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ps-form-errors", [], null, null, null, _form_errors_src_form_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PsFormErrorsComponent_0"], _form_errors_src_form_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PsFormErrorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _form_errors_src_form_errors_component__WEBPACK_IMPORTED_MODULE_3__["PsFormErrorsComponent"], [_form_base_src_form_service__WEBPACK_IMPORTED_MODULE_4__["PsFormService"]], { form: [0, "form"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.form; _ck(_v, 1, 0, currVal_0); }, null); }
function View_PsSavebarComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "ps-savebar__container-spacer"]], null, null, null, null, null))], null, null); }
function View_PsSavebarComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "ps-savebar__button__save"], ["color", "primary"], ["mat-raised-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.save.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"], color: [1, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.saveDisabled; var currVal_3 = "primary"; _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = ((_co.intl == null) ? null : _co.intl.saveLabel); _ck(_v, 2, 0, currVal_4); }); }
function View_PsSavebarComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "ps-savebar__button__save-and-close"], ["color", "primary"], ["mat-raised-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveAndClose.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"], color: [1, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.saveDisabled; var currVal_3 = "primary"; _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = ((_co.intl == null) ? null : _co.intl.saveAndCloseLabel); _ck(_v, 2, 0, currVal_4); }); }
function View_PsSavebarComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.customRightContent; _ck(_v, 1, 0, currVal_0); }, null); }
function View_PsSavebarComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "ps-savebar__button__prev"], ["mat-stroked-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.step.emit((0 - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = !_co.canStepBack; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = ((_co.intl == null) ? null : _co.intl.prevLabel); _ck(_v, 2, 0, currVal_3); }); }
function View_PsSavebarComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "ps-savebar__button__next"], ["color", "primary"], ["mat-raised-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.step.emit(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"], color: [1, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = !_co.canStepFwd; var currVal_3 = "primary"; _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = ((_co.intl == null) ? null : _co.intl.nextLabel); _ck(_v, 2, 0, currVal_4); }); }
function View_PsSavebarComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "ps-savebar__button__cancel"], ["mat-stroked-button", ""], ["type", "button"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = ((_co.intl == null) ? null : _co.intl.cancelLabel); _ck(_v, 2, 0, currVal_2); }); }
function View_PsSavebarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "mat-card", [["class", "ps-savebar__card mat-elevation-z2 mat-card"]], [[2, "ps-savebar__card--sticky", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 17, "div", [["class", "ps-savebar__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [["class", "ps-savebar__container-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.form; _ck(_v, 4, 0, currVal_2); var currVal_3 = !_co.form; _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.hasObservers(_co.save); _ck(_v, 9, 0, currVal_4); var currVal_5 = _co.hasObservers(_co.saveAndClose); _ck(_v, 11, 0, currVal_5); var currVal_6 = _co.customRightContent; _ck(_v, 13, 0, currVal_6); var currVal_7 = _co.hasObservers(_co.step); _ck(_v, 15, 0, currVal_7); var currVal_8 = _co.hasObservers(_co.step); _ck(_v, 17, 0, currVal_8); var currVal_9 = _co.hasObservers(_co.cancel); _ck(_v, 19, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isSticky; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PsSavebarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "ps-savebar__main-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PsSavebarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isHidden; _ck(_v, 3, 0, currVal_0); }, null); }
function View_PsSavebarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ps-savebar", [], null, null, null, View_PsSavebarComponent_0, RenderType_PsSavebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 1, _savebar_component__WEBPACK_IMPORTED_MODULE_12__["PsSavebarComponent"], [_core_src_intl__WEBPACK_IMPORTED_MODULE_13__["PsIntlService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { customRightContent: 0 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PsSavebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ps-savebar", _savebar_component__WEBPACK_IMPORTED_MODULE_12__["PsSavebarComponent"], View_PsSavebarComponent_Host_0, { mode: "mode", form: "form", canSave: "canSave", canStepFwd: "canStepFwd", canStepBack: "canStepBack", intlOverride: "intlOverride", saveKey: "saveKey" }, { save: "save", saveAndClose: "saveAndClose", step: "step", cancel: "cancel" }, ["*"]);



/***/ }),

/***/ "../components/savebar/src/savebar.component.scss.ngstyle.js":
/*!*******************************************************************!*\
  !*** ../components/savebar/src/savebar.component.scss.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".ps-savebar__main-container {\n  box-sizing: border-box;\n}\n\n.ps-savebar__card {\n  bottom: -1px;\n  margin: 1em 0 1em 0;\n  z-index: 5;\n  padding: 1em !important;\n  display: flex;\n  justify-content: space-between;\n  border-top: solid var(--ps-accent) 5px;\n}\n\nmat-card.ps-savebar__card--sticky {\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.ps-savebar__container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin: -0.25em;\n  width: 100%;\n  \n}\n\n.ps-savebar__container button[mat-raised-button],\n.ps-savebar__container button[mat-stroked-button] {\n  margin: 0.25em;\n}\n\n.ps-savebar__container-spacer {\n  margin-right: auto;\n}\n\n@media only screen and (max-width: 35em) {\n  mat-card.ps-savebar__card--sticky {\n    position: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbXBvbmVudHMvc2F2ZWJhci9zcmMvQzpcXHdvcmtzcGFjZVxccHJvc29mdC1jb21wb25lbnRzLWRlbW8vcHJvamVjdHNcXGNvbXBvbmVudHNcXHNhdmViYXJcXHNyY1xcc2F2ZWJhci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvbXBvbmVudHMvc2F2ZWJhci9zcmMvc2F2ZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQWEseURBQUE7QUNFZjs7QURBRTs7RUFFRSxjQUFBO0FDRUo7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxpQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvY29tcG9uZW50cy9zYXZlYmFyL3NyYy9zYXZlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBzLXNhdmViYXJfX21haW4tY29udGFpbmVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucHMtc2F2ZWJhcl9fY2FyZCB7XHJcbiAgYm90dG9tOiAtMXB4O1xyXG4gIG1hcmdpbjogMWVtIDAgMWVtIDA7XHJcbiAgei1pbmRleDogNTtcclxuICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItdG9wOiBzb2xpZCB2YXIoLS1wcy1hY2NlbnQpIDVweDtcclxufVxyXG5cclxubWF0LWNhcmQucHMtc2F2ZWJhcl9fY2FyZC0tc3RpY2t5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcblxyXG4ucHMtc2F2ZWJhcl9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogLTAuMjVlbTtcclxuICB3aWR0aDogMTAwJTsgLyogTXVzcyB3ZWdlbiBkaXNwbGF5OiBmbGV4IGF1ZiAxMDAlIGdlc3RyZXRjaGVkIHdlcmRlbiAqL1xyXG5cclxuICBidXR0b25bbWF0LXJhaXNlZC1idXR0b25dLFxyXG4gIGJ1dHRvblttYXQtc3Ryb2tlZC1idXR0b25dIHtcclxuICAgIG1hcmdpbjogMC4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuLnBzLXNhdmViYXJfX2NvbnRhaW5lci1zcGFjZXIge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNWVtKSB7XHJcbiAgbWF0LWNhcmQucHMtc2F2ZWJhcl9fY2FyZC0tc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gIH1cclxufVxyXG4iLCIucHMtc2F2ZWJhcl9fbWFpbi1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucHMtc2F2ZWJhcl9fY2FyZCB7XG4gIGJvdHRvbTogLTFweDtcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMDtcbiAgei1pbmRleDogNTtcbiAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogc29saWQgdmFyKC0tcHMtYWNjZW50KSA1cHg7XG59XG5cbm1hdC1jYXJkLnBzLXNhdmViYXJfX2NhcmQtLXN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbi5wcy1zYXZlYmFyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogLTAuMjVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIE11c3Mgd2VnZW4gZGlzcGxheTogZmxleCBhdWYgMTAwJSBnZXN0cmV0Y2hlZCB3ZXJkZW4gKi9cbn1cbi5wcy1zYXZlYmFyX19jb250YWluZXIgYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSxcbi5wcy1zYXZlYmFyX19jb250YWluZXIgYnV0dG9uW21hdC1zdHJva2VkLWJ1dHRvbl0ge1xuICBtYXJnaW46IDAuMjVlbTtcbn1cblxuLnBzLXNhdmViYXJfX2NvbnRhaW5lci1zcGFjZXIge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzVlbSkge1xuICBtYXQtY2FyZC5wcy1zYXZlYmFyX19jYXJkLS1zdGlja3kge1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "../components/savebar/src/savebar.component.ts":
/*!******************************************************!*\
  !*** ../components/savebar/src/savebar.component.ts ***!
  \******************************************************/
/*! exports provided: PsSavebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSavebarComponent", function() { return PsSavebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _prosoft_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prosoft/components/core */ "../components/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





class PsSavebarComponent {
    constructor(intlService, renderer, ngZone, cd) {
        this.intlService = intlService;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cd = cd;
        this.mode = 'auto';
        this.saveKey = 's';
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveAndClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.step = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngUnsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get isHidden() {
        return this.mode === 'hide';
    }
    get isSticky() {
        if (this.mode && this.mode !== 'auto') {
            return this.mode === 'sticky';
        }
        if (this.form) {
            return this.form.dirty || this.form.touched;
        }
        return false;
    }
    get saveDisabled() {
        if (typeof this.canSave === 'boolean') {
            return !this.canSave;
        }
        if (this.form) {
            return this.form.pristine || this.form.invalid;
        }
        return true;
    }
    ngOnInit() {
        this.intlService.intlChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe$))
            .subscribe(() => {
            this.updateIntl();
            this.cd.markForCheck();
        });
        this.updateSaveKeyListener();
    }
    ngOnChanges(changes) {
        if (changes.intlOverride) {
            this.updateIntl();
        }
        if (changes.form) {
            if (this._formSub) {
                this._formSub.unsubscribe();
            }
            if (this.form) {
                // Die Werte für isSticky und saveDisabled können hier nicht direkt berechnet und gespeichert werden,
                // weil ValueChanges/statusChanges teils läuft, bevor die dirty, etc. Werte an der FormGroup richtig sind.
                // Über markForCheck() funktioniert es, weil die ChangeDetection nicht sofort läuft und die Werte stimmen, sobald sie dann läuft.
                // Wenn es ein Event für dirty/pristine und touched/untouched gäbe, könnte man es umbauen: https://github.com/angular/angular/issues/10887
                this._formSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.form.valueChanges, this.form.statusChanges).subscribe(() => {
                    this.cd.markForCheck();
                });
            }
        }
        if (changes.saveKey) {
            this.updateSaveKeyListener();
        }
    }
    ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
        if (this._stopListening) {
            this._stopListening();
        }
        if (this._formSub) {
            this._formSub.unsubscribe();
        }
    }
    hasObservers(emitter) {
        return emitter && !!emitter.observers.length;
    }
    updateIntl() {
        const intl = this.intlService.get('savebar');
        this.intl = this.intlService.merge(intl, this.intlOverride);
    }
    updateSaveKeyListener() {
        if (this._stopListening) {
            this._stopListening();
        }
        if (this.saveKey) {
            this.ngZone.runOutsideAngular(() => {
                this._stopListening = this.renderer.listen('document', 'keydown', this.onKeydown.bind(this));
            });
        }
    }
    onKeydown(event) {
        if (event.ctrlKey && event.key === this.saveKey && !this.saveDisabled) {
            if (this.hasObservers(this.save)) {
                event.preventDefault();
                this.ngZone.run(() => this.save.emit());
            }
            else if (this.hasObservers(this.saveAndClose)) {
                event.preventDefault();
                this.ngZone.run(() => this.saveAndClose.emit());
            }
        }
    }
}


/***/ }),

/***/ "../components/savebar/src/savebar.module.ts":
/*!***************************************************!*\
  !*** ../components/savebar/src/savebar.module.ts ***!
  \***************************************************/
/*! exports provided: PsSavebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSavebarModule", function() { return PsSavebarModule; });
class PsSavebarModule {
}


/***/ })

}]);
//# sourceMappingURL=default~form-demo-form-demo-module-ngfactory~savebar-demo-savebar-demo-module-ngfactory-es2015.js.map