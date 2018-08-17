(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark\">\r\n    <ul class=\"nav nav-tabs\">\r\n        <li>\r\n            <a class=\"nav-link active\" [class.active]=\"router.url === '/tabs'\" data-toggle=\"tab\" [routerLink]=\"['/tabs']\">Tabs</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link\" [class.active]=\"router.url === '/textfield'\" data-toggle=\"tab\" [routerLink]=\"['/textfield']\">TextField</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link\" [class.active]=\"router.url === '/select'\" data-toggle=\"tab\" [routerLink]=\"['/select']\">Select</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link\" [class.active]=\"router.url === '/checkbox'\" data-toggle=\"tab\" [routerLink]=\"['/checkbox']\">Checkbox</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link\" [class.active]=\"router.url === '/radio'\" data-toggle=\"tab\" [routerLink]=\"['/radio']\">Radio</a>\r\n        </li>\r\n    </ul>\r\n\r\n</nav>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #673ab7; }\n  .navbar ul {\n    border: none; }\n  .navbar ul li {\n      margin-right: 2px; }\n  .navbar ul li a {\n        color: white; }\n  .navbar ul li a.active {\n          color: #673ab7;\n          font-weight: 600;\n          border-radius: .25rem; }\n  .navbar ul li a:hover {\n          border-radius: .25rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.host = '/tabs';
        this.host = router.url;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/app/components/tabs/tabs.component.ts");
/* harmony import */ var _components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/textfield/textfield.component */ "./src/app/components/textfield/textfield.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/select/select.component */ "./src/app/components/select/select.component.ts");
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "./src/app/components/checkbox/checkbox.component.ts");
/* harmony import */ var _components_radio_radio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/radio/radio.component */ "./src/app/components/radio/radio.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _containers_tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/tabs-container/tabs-container.component */ "./src/app/containers/tabs-container/tabs-container.component.ts");
/* harmony import */ var _containers_checkbox_container_checkbox_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/checkbox-container/checkbox-container.component */ "./src/app/containers/checkbox-container/checkbox-container.component.ts");
/* harmony import */ var _containers_textfield_container_textfield_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/textfield-container/textfield-container.component */ "./src/app/containers/textfield-container/textfield-container.component.ts");
/* harmony import */ var _containers_select_container_select_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/select-container/select-container.component */ "./src/app/containers/select-container/select-container.component.ts");
/* harmony import */ var _containers_radio_container_radio_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/radio-container/radio-container.component */ "./src/app/containers/radio-container/radio-container.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _components_duplicate_tabs_duplicate_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/duplicate-tabs/duplicate-tabs.component */ "./src/app/components/duplicate-tabs/duplicate-tabs.component.ts");
/* harmony import */ var _components_duplicate_radio_duplicate_radio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/duplicate-radio/duplicate-radio.component */ "./src/app/components/duplicate-radio/duplicate-radio.component.ts");
/* harmony import */ var _components_duplicate_checkbox_duplicate_checkbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/duplicate-checkbox/duplicate-checkbox.component */ "./src/app/components/duplicate-checkbox/duplicate-checkbox.component.ts");
/* harmony import */ var _components_duplicate_select_duplicate_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/duplicate-select/duplicate-select.component */ "./src/app/components/duplicate-select/duplicate-select.component.ts");
/* harmony import */ var _components_duplicate_textfield_duplicate_textfield_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/duplicate-textfield/duplicate-textfield.component */ "./src/app/components/duplicate-textfield/duplicate-textfield.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"],
                _components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_4__["TextfieldComponent"],
                _components_select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"],
                _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"],
                _components_radio_radio_component__WEBPACK_IMPORTED_MODULE_7__["RadioComponent"],
                _containers_tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_11__["TabsContainerComponent"],
                _containers_checkbox_container_checkbox_container_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxContainerComponent"],
                _containers_textfield_container_textfield_container_component__WEBPACK_IMPORTED_MODULE_13__["TextfieldContainerComponent"],
                _containers_select_container_select_container_component__WEBPACK_IMPORTED_MODULE_14__["SelectContainerComponent"],
                _containers_radio_container_radio_container_component__WEBPACK_IMPORTED_MODULE_15__["RadioContainerComponent"],
                _components_duplicate_tabs_duplicate_tabs_component__WEBPACK_IMPORTED_MODULE_17__["DuplicateTabsComponent"],
                _components_duplicate_radio_duplicate_radio_component__WEBPACK_IMPORTED_MODULE_18__["DuplicateRadioComponent"],
                _components_duplicate_checkbox_duplicate_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["DuplicateCheckboxComponent"],
                _components_duplicate_select_duplicate_select_component__WEBPACK_IMPORTED_MODULE_20__["DuplicateSelectComponent"],
                _components_duplicate_textfield_duplicate_textfield_component__WEBPACK_IMPORTED_MODULE_21__["DuplicateTextfieldComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                // Here is configuration for set up of store module
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_10__["reducers"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/tabs-container/tabs-container.component */ "./src/app/containers/tabs-container/tabs-container.component.ts");
/* harmony import */ var _containers_checkbox_container_checkbox_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/checkbox-container/checkbox-container.component */ "./src/app/containers/checkbox-container/checkbox-container.component.ts");
/* harmony import */ var _containers_textfield_container_textfield_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/textfield-container/textfield-container.component */ "./src/app/containers/textfield-container/textfield-container.component.ts");
/* harmony import */ var _containers_select_container_select_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/select-container/select-container.component */ "./src/app/containers/select-container/select-container.component.ts");
/* harmony import */ var _containers_radio_container_radio_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/radio-container/radio-container.component */ "./src/app/containers/radio-container/radio-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: _containers_tabs_container_tabs_container_component__WEBPACK_IMPORTED_MODULE_2__["TabsContainerComponent"]
    },
    {
        path: 'textfield',
        component: _containers_textfield_container_textfield_container_component__WEBPACK_IMPORTED_MODULE_4__["TextfieldContainerComponent"]
    },
    {
        path: 'select',
        component: _containers_select_container_select_container_component__WEBPACK_IMPORTED_MODULE_5__["SelectContainerComponent"]
    },
    {
        path: 'checkbox',
        component: _containers_checkbox_container_checkbox_container_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxContainerComponent"]
    },
    {
        path: 'radio',
        component: _containers_radio_container_radio_container_component__WEBPACK_IMPORTED_MODULE_6__["RadioContainerComponent"]
    },
    {
        path: '**',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-12\" *ngIf=\"checkBoxValue | async; let checkBox\">\r\n\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"ios\" (change)=\"onChangeCheckBox($event,'ios')\" [checked]=\"checkBox.indexOf('ios') != -1\">\r\n                <label class=\"form-check-label\" for=\"ios\">\r\n                  ios\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"android\" (change)=\"onChangeCheckBox($event,'android')\" [checked]=\"checkBox.indexOf('android') != -1\">\r\n                <label class=\"form-check-label\" for=\"android\">\r\n                  Android\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"angular\" (change)=\"onChangeCheckBox($event,'angular')\" [checked]=\"checkBox.indexOf('angular') != -1\">\r\n                <label class=\"form-check-label\" for=\"angular\">\r\n                    Angular\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(store) {
        var _this = this;
        this.store = store;
        this.arrayCheckBoxValues = [];
        this.checkBoxValue = this.store.select(function (state) { return state.ui.checkBoxValues; });
        // for fill the array with store's data
        this.checkBoxValue.subscribe(function (res) {
            _this.arrayCheckBoxValues = res;
            /*
               If we initialize arrayCheckBoxValues i.e.
               if this line is uncommented then the store should be dispatched
               to assign values of arrayCheckBoxValues in store's "checkBoxValues" property
           */
            // this.arrayCheckBoxValues = Object.assign({}, res);
        });
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.onChangeCheckBox = function (event, id) {
        if (event.target.checked) {
            this.arrayCheckBoxValues.push(id);
        }
        else {
            this.arrayCheckBoxValues.splice(this.arrayCheckBoxValues.indexOf(id), 1);
        }
        /*
            Here we do not need to dispatch the store because
            this.arrayCheckBoxValues contains the reference of
            store's "checkBoxValues" property.

            this.arrayCheckBoxValues = res;

            this line means that both are referncing the same address.

            this.arrayCheckBoxValues = Object.assign({}, res);

            this will create another instance and store the same value in it.
        */
        // this.store.dispatch(new CheckBoxValueChangedAction(this.arrayCheckBoxValues));
    };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/components/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/components/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/components/duplicate-checkbox/duplicate-checkbox.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/duplicate-checkbox/duplicate-checkbox.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-12\" *ngIf=\"checkBoxValue | async; let checkBox\">\r\n\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"ios\" (change)=\"onChangeCheckBox($event,'ios')\" [checked]=\"checkBox.indexOf('ios') != -1\">\r\n                <label class=\"form-check-label\" for=\"ios\">\r\n                  ios\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"android\" (change)=\"onChangeCheckBox($event,'android')\" [checked]=\"checkBox.indexOf('android') != -1\">\r\n                <label class=\"form-check-label\" for=\"android\">\r\n                  Android\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"angular\" (change)=\"onChangeCheckBox($event,'angular')\" [checked]=\"checkBox.indexOf('angular') != -1\">\r\n                <label class=\"form-check-label\" for=\"angular\">\r\n                    Angular\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/duplicate-checkbox/duplicate-checkbox.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/duplicate-checkbox/duplicate-checkbox.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/duplicate-checkbox/duplicate-checkbox.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/duplicate-checkbox/duplicate-checkbox.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DuplicateCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateCheckboxComponent", function() { return DuplicateCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DuplicateCheckboxComponent = /** @class */ (function () {
    function DuplicateCheckboxComponent(store) {
        var _this = this;
        this.store = store;
        this.arrayCheckBoxValues = [];
        this.checkBoxValue = this.store.select(function (state) { return state.ui.checkBoxValues; });
        // for fill the array with store's data
        this.checkBoxValue.subscribe(function (res) {
            _this.arrayCheckBoxValues = res;
            // this.arrayCheckBoxValues = Object.assign({}, res);
        });
    }
    DuplicateCheckboxComponent.prototype.ngOnInit = function () {
    };
    DuplicateCheckboxComponent.prototype.onChangeCheckBox = function (event, id) {
        if (event.target.checked) {
            this.arrayCheckBoxValues.push(id);
        }
        else {
            this.arrayCheckBoxValues.splice(this.arrayCheckBoxValues.indexOf(id), 1);
        }
        // this.store.dispatch(new CheckBoxValueChangedAction(this.arrayCheckBoxValues));
    };
    DuplicateCheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-duplicate-checkbox',
            template: __webpack_require__(/*! ./duplicate-checkbox.component.html */ "./src/app/components/duplicate-checkbox/duplicate-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./duplicate-checkbox.component.scss */ "./src/app/components/duplicate-checkbox/duplicate-checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DuplicateCheckboxComponent);
    return DuplicateCheckboxComponent;
}());



/***/ }),

/***/ "./src/app/components/duplicate-radio/duplicate-radio.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/duplicate-radio/duplicate-radio.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-12\" *ngIf=\"radioValue | async; let radios\">\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" value=\"developer\" [checked]=\"(radioValue | async) == 'developer'\" (change)=\"onChangeRadio($event)\">\r\n                <label class=\"form-check-label\" for=\"developer\">\r\n                  Devloper\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" value=\"designer\" [checked]=\"(radioValue | async) == 'designer'\" (change)=\"onChangeRadio($event)\">\r\n                <label class=\"form-check-label\" for=\"designer\">\r\n                  Designer\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/duplicate-radio/duplicate-radio.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/duplicate-radio/duplicate-radio.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/duplicate-radio/duplicate-radio.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/duplicate-radio/duplicate-radio.component.ts ***!
  \*************************************************************************/
/*! exports provided: DuplicateRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateRadioComponent", function() { return DuplicateRadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/UI/ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DuplicateRadioComponent = /** @class */ (function () {
    function DuplicateRadioComponent(store) {
        this.store = store;
        this.radioValue = this.store.select(function (state) { return state.ui.radioValue; });
    }
    DuplicateRadioComponent.prototype.ngOnInit = function () {
    };
    DuplicateRadioComponent.prototype.onChangeRadio = function (event) {
        this.store.dispatch(new _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__["RadioChangedAction"](event.target.value));
    };
    DuplicateRadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-duplicate-radio',
            template: __webpack_require__(/*! ./duplicate-radio.component.html */ "./src/app/components/duplicate-radio/duplicate-radio.component.html"),
            styles: [__webpack_require__(/*! ./duplicate-radio.component.scss */ "./src/app/components/duplicate-radio/duplicate-radio.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DuplicateRadioComponent);
    return DuplicateRadioComponent;
}());



/***/ }),

/***/ "./src/app/components/duplicate-select/duplicate-select.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/duplicate-select/duplicate-select.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group col-md-12\">\r\n\r\n    <select class=\"form-control row\" id=\"serviceDropdown\" (change)=\"onChangeSelect($event)\">\r\n                        <option *ngFor=\"let c of test\" [selected]=\"c.id == (selectedValue | async)\"  value={{c.id}}> {{c.text}}</option>\r\n                    </select>\r\n</div>"

/***/ }),

/***/ "./src/app/components/duplicate-select/duplicate-select.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/duplicate-select/duplicate-select.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/duplicate-select/duplicate-select.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/duplicate-select/duplicate-select.component.ts ***!
  \***************************************************************************/
/*! exports provided: DuplicateSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateSelectComponent", function() { return DuplicateSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/UI/ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DuplicateSelectComponent = /** @class */ (function () {
    function DuplicateSelectComponent(store) {
        this.store = store;
        this.test = [
            {
                id: 1,
                text: 1
            },
            {
                id: 2,
                text: 2
            },
            {
                id: 3,
                text: 3
            },
            {
                id: 4,
                text: 4
            },
            {
                id: 5,
                text: 5
            },
        ];
        this.selectedValue = this.store.select(function (state) { return state.ui.selectValue; });
    }
    DuplicateSelectComponent.prototype.onChangeSelect = function (event) {
        this.store.dispatch(new _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__["SelectChangedAction"](event.target.value));
    };
    DuplicateSelectComponent.prototype.ngOnInit = function () {
    };
    DuplicateSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-duplicate-select',
            template: __webpack_require__(/*! ./duplicate-select.component.html */ "./src/app/components/duplicate-select/duplicate-select.component.html"),
            styles: [__webpack_require__(/*! ./duplicate-select.component.scss */ "./src/app/components/duplicate-select/duplicate-select.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DuplicateSelectComponent);
    return DuplicateSelectComponent;
}());



/***/ }),

/***/ "./src/app/components/duplicate-tabs/duplicate-tabs.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/duplicate-tabs/duplicate-tabs.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-12\">\r\n    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n        <a class=\"nav-item nav-link\" [class.active]=\"(selectedTab | async) === 'nav-tab1-tab'\" id=\"nav-tab1-tab\" data-toggle=\"tab\" href=\"#nav-tab1\" role=\"tab\" aria-controls=\"nav-tab1\" aria-selected=\"true\" (click)=\"onChangeTab('nav-tab1-tab')\">Tab 1</a>\r\n        <a class=\"nav-item nav-link\" [class.active]=\"(selectedTab | async) === 'nav-tab2-tab'\" id=\"nav-tab2-tab\" data-toggle=\"tab\" href=\"#nav-tab2\" role=\"tab\" aria-controls=\"nav-tab2\" aria-selected=\"false\" (click)=\"onChangeTab('nav-tab2-tab')\">Tab 2</a>\r\n\r\n        <a class=\"nav-item nav-link\" [class.active]=\"(selectedTab | async) === 'nav-tab3-tab'\" id=\"nav-tab2-tab\" data-toggle=\"tab\" href=\"#nav-tab2\" role=\"tab\" aria-controls=\"nav-tab2\" aria-selected=\"false\" (click)=\"onChangeTab('nav-tab3-tab')\">Tab 3</a>\r\n    </div>\r\n</nav>\r\n<div class=\"tab-content col-md-12\" id=\"nav-tabContent\">\r\n    <div class=\"tab-pane fade\" [ngClass]=\"(selectedTab | async) === 'nav-tab1-tab' ? ' show active' : ''\" id=\"nav-tab1\" role=\"tabpanel\" aria-labelledby=\"nav-tab1-tab\">\r\n        <h5>\r\n            Tab 1\r\n        </h5>\r\n    </div>\r\n    <div class=\"tab-pane fade\" [ngClass]=\"(selectedTab | async) === 'nav-tab2-tab' ? ' show active' : ''\" id=\"nav-tab2\" role=\"tabpanel\" aria-labelledby=\"nav-tab2-tab\">\r\n        <h5>\r\n            Tab 2\r\n        </h5>\r\n    </div>\r\n    <div class=\"tab-pane fade\" [ngClass]=\"(selectedTab | async) === 'nav-tab3-tab' ? ' show active' : ''\" id=\"nav-tab2\" role=\"tabpanel\" aria-labelledby=\"nav-tab2-tab\">\r\n        <h5>\r\n            Tab 3\r\n        </h5>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/duplicate-tabs/duplicate-tabs.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/duplicate-tabs/duplicate-tabs.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/duplicate-tabs/duplicate-tabs.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/duplicate-tabs/duplicate-tabs.component.ts ***!
  \***********************************************************************/
/*! exports provided: DuplicateTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateTabsComponent", function() { return DuplicateTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/UI/ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DuplicateTabsComponent = /** @class */ (function () {
    function DuplicateTabsComponent(store) {
        this.store = store;
        this.selectedTab = this.store.select(function (state) { return state.ui.selectedTab; });
    }
    DuplicateTabsComponent.prototype.ngOnInit = function () {
    };
    DuplicateTabsComponent.prototype.onChangeTab = function (id) {
        this.store.dispatch(new _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__["TabChangedAction"](id));
    };
    DuplicateTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-duplicate-tabs',
            template: __webpack_require__(/*! ./duplicate-tabs.component.html */ "./src/app/components/duplicate-tabs/duplicate-tabs.component.html"),
            styles: [__webpack_require__(/*! ./duplicate-tabs.component.scss */ "./src/app/components/duplicate-tabs/duplicate-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DuplicateTabsComponent);
    return DuplicateTabsComponent;
}());



/***/ }),

/***/ "./src/app/components/duplicate-textfield/duplicate-textfield.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/duplicate-textfield/duplicate-textfield.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 form-group\">\r\n    <input type=\"email\" class=\"form-control row\" placeholder=\"Enter text\" [ngModel]=\"txtfieldValue | async\" (ngModelChange)=\"onChangeModelValue($event)\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/duplicate-textfield/duplicate-textfield.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/duplicate-textfield/duplicate-textfield.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/duplicate-textfield/duplicate-textfield.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/duplicate-textfield/duplicate-textfield.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DuplicateTextfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateTextfieldComponent", function() { return DuplicateTextfieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/UI/ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DuplicateTextfieldComponent = /** @class */ (function () {
    function DuplicateTextfieldComponent(store) {
        this.store = store;
        this.txtfieldValue = this.store.select(function (state) { return state.ui.textfieldValue; });
    }
    DuplicateTextfieldComponent.prototype.onChangeModelValue = function (event) {
        this.store.dispatch(new _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__["TextFieldChangedAction"](event));
    };
    DuplicateTextfieldComponent.prototype.ngOnInit = function () {
    };
    DuplicateTextfieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-duplicate-textfield',
            template: __webpack_require__(/*! ./duplicate-textfield.component.html */ "./src/app/components/duplicate-textfield/duplicate-textfield.component.html"),
            styles: [__webpack_require__(/*! ./duplicate-textfield.component.scss */ "./src/app/components/duplicate-textfield/duplicate-textfield.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DuplicateTextfieldComponent);
    return DuplicateTextfieldComponent;
}());



/***/ }),

/***/ "./src/app/components/radio/radio.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/radio/radio.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-12\" *ngIf=\"radioValue | async; let radios\">\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" value=\"developer\" [checked]=\"(radioValue | async) == 'developer'\" (change)=\"onChangeRadio($event)\">\r\n                <label class=\"form-check-label\" for=\"developer\">\r\n                  Devloper\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" value=\"designer\" [checked]=\"(radioValue | async) == 'designer'\" (change)=\"onChangeRadio($event)\">\r\n                <label class=\"form-check-label\" for=\"designer\">\r\n                  Designer\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/radio/radio.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/radio/radio.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/components/radio/radio.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/radio/radio.component.ts ***!
  \*****************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/UI/ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RadioComponent = /** @class */ (function () {
    function RadioComponent(store) {
        this.store = store;
        this.radioValue = this.store.select(function (state) { return state.ui.radioValue; });
    }
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.onChangeRadio = function (event) {
        this.store.dispatch(new _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__["RadioChangedAction"](event.target.value));
    };
    RadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radio',
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/components/radio/radio.component.html"),
            styles: [__webpack_require__(/*! ./radio.component.scss */ "./src/app/components/radio/radio.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/components/select/select.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/select/select.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group col-md-12\">\r\n\r\n    <select class=\"form-control row\" id=\"serviceDropdown\" (change)=\"onChangeSelect($event)\">\r\n                <option *ngFor=\"let c of test\" [selected]=\"c.id == (selectedValue | async)\"  value={{c.id}}> {{c.text}}</option>\r\n            </select>\r\n</div>"

/***/ }),

/***/ "./src/app/components/select/select.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/select/select.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/components/select/select.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/UI/ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectComponent = /** @class */ (function () {
    function SelectComponent(store) {
        this.store = store;
        this.test = [
            {
                id: 1,
                text: 1
            },
            {
                id: 2,
                text: 2
            },
            {
                id: 3,
                text: 3
            },
            {
                id: 4,
                text: 4
            },
            {
                id: 5,
                text: 5
            },
        ];
        this.selectedValue = this.store.select(function (state) { return state.ui.selectValue; });
    }
    SelectComponent.prototype.onChangeSelect = function (event) {
        this.store.dispatch(new _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__["SelectChangedAction"](event.target.value));
    };
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/components/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/components/select/select.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/tabs.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-12\">\r\n    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n        <a class=\"nav-item nav-link\" [class.active]=\"(selectedTab | async) === 'nav-tab1-tab'\" id=\"nav-tab1-tab\" data-toggle=\"tab\" href=\"#nav-tab1\" role=\"tab\" aria-controls=\"nav-tab1\" aria-selected=\"true\" (click)=\"onChangeTab('nav-tab1-tab')\">Tab 1</a>\r\n        <a class=\"nav-item nav-link\" [class.active]=\"(selectedTab | async) === 'nav-tab2-tab'\" id=\"nav-tab2-tab\" data-toggle=\"tab\" href=\"#nav-tab2\" role=\"tab\" aria-controls=\"nav-tab2\" aria-selected=\"false\" (click)=\"onChangeTab('nav-tab2-tab')\">Tab 2</a>\r\n\r\n        <a class=\"nav-item nav-link\" [class.active]=\"(selectedTab | async) === 'nav-tab3-tab'\" id=\"nav-tab2-tab\" data-toggle=\"tab\" href=\"#nav-tab2\" role=\"tab\" aria-controls=\"nav-tab2\" aria-selected=\"false\" (click)=\"onChangeTab('nav-tab3-tab')\">Tab 3</a>\r\n    </div>\r\n</nav>\r\n<div class=\"tab-content col-md-12\" id=\"nav-tabContent\">\r\n    <div class=\"tab-pane fade\" [ngClass]=\"(selectedTab | async) === 'nav-tab1-tab' ? ' show active' : ''\" id=\"nav-tab1\" role=\"tabpanel\" aria-labelledby=\"nav-tab1-tab\">\r\n        <h5>\r\n            Tab 1\r\n        </h5>\r\n    </div>\r\n    <div class=\"tab-pane fade\" [ngClass]=\"(selectedTab | async) === 'nav-tab2-tab' ? ' show active' : ''\" id=\"nav-tab2\" role=\"tabpanel\" aria-labelledby=\"nav-tab2-tab\">\r\n        <h5>\r\n            Tab 2\r\n        </h5>\r\n    </div>\r\n    <div class=\"tab-pane fade\" [ngClass]=\"(selectedTab | async) === 'nav-tab3-tab' ? ' show active' : ''\" id=\"nav-tab2\" role=\"tabpanel\" aria-labelledby=\"nav-tab2-tab\">\r\n        <h5>\r\n            Tab 3\r\n        </h5>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  margin: 10px; }\n"

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/UI/ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsComponent = /** @class */ (function () {
    function TabsComponent(store) {
        this.store = store;
        this.selectedTab = this.store.select(function (state) { return state.ui.selectedTab; });
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.onChangeTab = function (id) {
        this.store.dispatch(new _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__["TabChangedAction"](id));
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/components/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/components/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/components/textfield/textfield.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/textfield/textfield.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 form-group\">\r\n    <input type=\"email\" class=\"form-control row\" placeholder=\"Enter text\" [ngModel]=\"txtfieldValue | async\" (ngModelChange)=\"onChangeModelValue($event)\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/textfield/textfield.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/textfield/textfield.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/components/textfield/textfield.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/textfield/textfield.component.ts ***!
  \*************************************************************/
/*! exports provided: TextfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextfieldComponent", function() { return TextfieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/UI/ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextfieldComponent = /** @class */ (function () {
    function TextfieldComponent(store) {
        this.store = store;
        this.txtfieldValue = this.store.select(function (state) { return state.ui.textfieldValue; });
    }
    TextfieldComponent.prototype.onChangeModelValue = function (event) {
        this.store.dispatch(new _store_UI_ui_actions__WEBPACK_IMPORTED_MODULE_2__["TextFieldChangedAction"](event));
    };
    TextfieldComponent.prototype.ngOnInit = function () {
    };
    TextfieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-textfield',
            template: __webpack_require__(/*! ./textfield.component.html */ "./src/app/components/textfield/textfield.component.html"),
            styles: [__webpack_require__(/*! ./textfield.component.scss */ "./src/app/components/textfield/textfield.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TextfieldComponent);
    return TextfieldComponent;
}());



/***/ }),

/***/ "./src/app/containers/checkbox-container/checkbox-container.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/checkbox-container/checkbox-container.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <app-checkbox></app-checkbox>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 m-auto\">\r\n            <h2>Duplicating state in child component</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <app-duplicate-checkbox></app-duplicate-checkbox>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/containers/checkbox-container/checkbox-container.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/checkbox-container/checkbox-container.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 50px; }\n"

/***/ }),

/***/ "./src/app/containers/checkbox-container/checkbox-container.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/containers/checkbox-container/checkbox-container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckboxContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxContainerComponent", function() { return CheckboxContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxContainerComponent = /** @class */ (function () {
    function CheckboxContainerComponent() {
    }
    CheckboxContainerComponent.prototype.ngOnInit = function () {
    };
    CheckboxContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox-container',
            template: __webpack_require__(/*! ./checkbox-container.component.html */ "./src/app/containers/checkbox-container/checkbox-container.component.html"),
            styles: [__webpack_require__(/*! ./checkbox-container.component.scss */ "./src/app/containers/checkbox-container/checkbox-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxContainerComponent);
    return CheckboxContainerComponent;
}());



/***/ }),

/***/ "./src/app/containers/radio-container/radio-container.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/containers/radio-container/radio-container.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <app-radio></app-radio>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 m-auto\">\r\n            <h2>Duplicating state in child component</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <app-duplicate-radio></app-duplicate-radio>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/containers/radio-container/radio-container.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/containers/radio-container/radio-container.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 50px; }\n"

/***/ }),

/***/ "./src/app/containers/radio-container/radio-container.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/containers/radio-container/radio-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: RadioContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioContainerComponent", function() { return RadioContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadioContainerComponent = /** @class */ (function () {
    function RadioContainerComponent() {
    }
    RadioContainerComponent.prototype.ngOnInit = function () {
    };
    RadioContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radio-container',
            template: __webpack_require__(/*! ./radio-container.component.html */ "./src/app/containers/radio-container/radio-container.component.html"),
            styles: [__webpack_require__(/*! ./radio-container.component.scss */ "./src/app/containers/radio-container/radio-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RadioContainerComponent);
    return RadioContainerComponent;
}());



/***/ }),

/***/ "./src/app/containers/select-container/select-container.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/select-container/select-container.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <app-select></app-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 m-auto\">\r\n            <h2>Duplicating state in child component</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <app-duplicate-select></app-duplicate-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/containers/select-container/select-container.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/select-container/select-container.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 50px; }\n"

/***/ }),

/***/ "./src/app/containers/select-container/select-container.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/containers/select-container/select-container.component.ts ***!
  \***************************************************************************/
/*! exports provided: SelectContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectContainerComponent", function() { return SelectContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectContainerComponent = /** @class */ (function () {
    function SelectContainerComponent() {
    }
    SelectContainerComponent.prototype.ngOnInit = function () {
    };
    SelectContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-container',
            template: __webpack_require__(/*! ./select-container.component.html */ "./src/app/containers/select-container/select-container.component.html"),
            styles: [__webpack_require__(/*! ./select-container.component.scss */ "./src/app/containers/select-container/select-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectContainerComponent);
    return SelectContainerComponent;
}());



/***/ }),

/***/ "./src/app/containers/tabs-container/tabs-container.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/containers/tabs-container/tabs-container.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <app-tabs></app-tabs>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 m-auto\">\r\n            <h2>Duplicating state in child component</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <app-duplicate-tabs></app-duplicate-tabs>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/containers/tabs-container/tabs-container.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/containers/tabs-container/tabs-container.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 50px; }\n"

/***/ }),

/***/ "./src/app/containers/tabs-container/tabs-container.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/tabs-container/tabs-container.component.ts ***!
  \***********************************************************************/
/*! exports provided: TabsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsContainerComponent", function() { return TabsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsContainerComponent = /** @class */ (function () {
    function TabsContainerComponent() {
    }
    TabsContainerComponent.prototype.ngOnInit = function () {
    };
    TabsContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs-container',
            template: __webpack_require__(/*! ./tabs-container.component.html */ "./src/app/containers/tabs-container/tabs-container.component.html"),
            styles: [__webpack_require__(/*! ./tabs-container.component.scss */ "./src/app/containers/tabs-container/tabs-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsContainerComponent);
    return TabsContainerComponent;
}());



/***/ }),

/***/ "./src/app/containers/textfield-container/textfield-container.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/textfield-container/textfield-container.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <app-textfield></app-textfield>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 m-auto\">\r\n            <h2>Duplicating state in child component</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <app-duplicate-textfield></app-duplicate-textfield>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/containers/textfield-container/textfield-container.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/textfield-container/textfield-container.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 50px; }\n"

/***/ }),

/***/ "./src/app/containers/textfield-container/textfield-container.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/textfield-container/textfield-container.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TextfieldContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextfieldContainerComponent", function() { return TextfieldContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextfieldContainerComponent = /** @class */ (function () {
    function TextfieldContainerComponent() {
    }
    TextfieldContainerComponent.prototype.ngOnInit = function () {
    };
    TextfieldContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-textfield-container',
            template: __webpack_require__(/*! ./textfield-container.component.html */ "./src/app/containers/textfield-container/textfield-container.component.html"),
            styles: [__webpack_require__(/*! ./textfield-container.component.scss */ "./src/app/containers/textfield-container/textfield-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextfieldContainerComponent);
    return TextfieldContainerComponent;
}());



/***/ }),

/***/ "./src/app/store/UI/ui.actions.ts":
/*!****************************************!*\
  !*** ./src/app/store/UI/ui.actions.ts ***!
  \****************************************/
/*! exports provided: UIActionsTypes, TextFieldChangedAction, TabChangedAction, SelectChangedAction, CheckBoxValueChangedAction, RadioChangedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIActionsTypes", function() { return UIActionsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldChangedAction", function() { return TextFieldChangedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabChangedAction", function() { return TabChangedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectChangedAction", function() { return SelectChangedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxValueChangedAction", function() { return CheckBoxValueChangedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioChangedAction", function() { return RadioChangedAction; });
var UIActionsTypes = {
    TEXTFIELD_CHANGED_ACTION: '[UI] -Textfield value changed-',
    TAB_CHANGED_ACTION: '[UI] -Tab changed-',
    SELECT_CHANGED_ACTION: '[UI] -Select changed-',
    CHECKBOX_VALUE_CHANGED_ACTION: '[UI] -Check box value changed-',
    RADIO_CHANGED_ACTION: '[UI] -Radio changed-',
};
var TextFieldChangedAction = /** @class */ (function () {
    function TextFieldChangedAction(payload) {
        this.payload = payload;
        this.type = UIActionsTypes.TEXTFIELD_CHANGED_ACTION;
    }
    return TextFieldChangedAction;
}());

var TabChangedAction = /** @class */ (function () {
    function TabChangedAction(payload) {
        this.payload = payload;
        this.type = UIActionsTypes.TAB_CHANGED_ACTION;
    }
    return TabChangedAction;
}());

var SelectChangedAction = /** @class */ (function () {
    function SelectChangedAction(payload) {
        this.payload = payload;
        this.type = UIActionsTypes.SELECT_CHANGED_ACTION;
    }
    return SelectChangedAction;
}());

var CheckBoxValueChangedAction = /** @class */ (function () {
    function CheckBoxValueChangedAction(payload) {
        this.payload = payload;
        this.type = UIActionsTypes.CHECKBOX_VALUE_CHANGED_ACTION;
    }
    return CheckBoxValueChangedAction;
}());

var RadioChangedAction = /** @class */ (function () {
    function RadioChangedAction(payload) {
        this.payload = payload;
        this.type = UIActionsTypes.RADIO_CHANGED_ACTION;
    }
    return RadioChangedAction;
}());



/***/ }),

/***/ "./src/app/store/UI/ui.reducer.ts":
/*!****************************************!*\
  !*** ./src/app/store/UI/ui.reducer.ts ***!
  \****************************************/
/*! exports provided: appInitialState, uiReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitialState", function() { return appInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiReducer", function() { return uiReducer; });
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.actions */ "./src/app/store/UI/ui.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var appInitialState = {
    textfieldValue: '',
    selectedTab: 'nav-tab1-tab',
    selectValue: '1',
    checkBoxValues: [],
    radioValue: 'developer'
};
function uiReducer(state, action) {
    if (state === void 0) { state = appInitialState; }
    switch (action.type) {
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["UIActionsTypes"].TEXTFIELD_CHANGED_ACTION: {
            return Object.assign(state, __assign({}, state, { textfieldValue: action.payload }));
        }
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["UIActionsTypes"].TAB_CHANGED_ACTION: {
            return Object.assign(state, __assign({}, state, { selectedTab: action.payload }));
        }
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["UIActionsTypes"].SELECT_CHANGED_ACTION: {
            return Object.assign(state, __assign({}, state, { selectValue: action.payload }));
        }
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["UIActionsTypes"].CHECKBOX_VALUE_CHANGED_ACTION: {
            return Object.assign(state, __assign({}, state, { checkBoxValues: action.payload }));
        }
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["UIActionsTypes"].RADIO_CHANGED_ACTION: {
            return Object.assign(state, __assign({}, state, { radioValue: action.payload }));
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _UI_ui_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/ui.reducer */ "./src/app/store/UI/ui.reducer.ts");

var reducers = {
    ui: _UI_ui_reducer__WEBPACK_IMPORTED_MODULE_0__["uiReducer"],
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\KP\Documents\angular\easiest-demo-ngrx-angular6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map