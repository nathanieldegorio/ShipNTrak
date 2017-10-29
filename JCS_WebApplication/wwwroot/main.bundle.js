webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"nav-side-menu\" *ngIf=\"isLoggedIn\">\r\n  <menu-section></menu-section>\r\n</div>\r\n<div class=\"container\" id=\"main\" *ngIf=\"isLoggedIn\" style=\"padding: 12px; font-size: 15px !important;\">\r\n\r\n  <div class=\"row\" style=\"margin-bottom: 12px; padding-right: 12px !important;\">\r\n    <div class=\"dropdown pull-right\">\r\n      <button class=\"btn btn-lg btn-info btn-outline dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" style=\"font-size: 10px;\">\r\n        {{ account._lastname +' , '+account._firstname }}\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n        <li><a >View Messages</a></li>\r\n        <li><a >Edit Profile</a></li>\r\n        <li><a >Change Password</a></li>\r\n        <li role=\"separator\" class=\"divider\"></li>\r\n        <li><a (click)=\"logout()\" >Sign Out</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-blue\">\r\n    <div class=\"panel-heading\">\r\n     \r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n  <div style=\"width: 100%; height: 100vh; background-color:rgba(0,0,0,0.4);\">\r\n    <div class=\"container\" *ngIf=\"!isLoggedIn\">\r\n      <div class=\"row\">\r\n        <div class=\"centered\" style=\"width: 350px; height: 500px; padding: 20px; background-image:url('/assets/bg.jpg'); color: white;\">\r\n          <div class=\"panel panel-default\"  style=\"text-align: center; background: none;\">\r\n            <div style=\"text-align: center\">\r\n              <img src=\"/assets/logo.png\" />\r\n            </div>\r\n            <h1 class=\"changefont\" style=\"font-size: 50px;\">JCS</h1>\r\n            Shipments &amp; Billing  Management Sytem\r\n            <br/>\r\n            <br/>\r\n            <div class=\"form\" style=\"padding: 10%; padding-top:0; text-align:left;font-size: smaller; background-color:rgba(255,255,255,0.4); color: black;\">\r\n              <br/>\r\n              <div class=\"row\" *ngIf=\"(errorMsg != '')\">\r\n                <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n                  {{ errorMsg }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"(account._passwordReset != 'True')\">\r\n                <label>\r\n                  Username\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"account._userLogin\">\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"(account._passwordReset != 'True')\">\r\n                <label>\r\n                  Password\r\n                </label>\r\n                <input type=\"password\" [(ngModel)]=\"account._userAccessKey\" class=\"form-control\">\r\n              </div>\r\n               <div class=\"row\" *ngIf=\"(account._passwordReset == 'True')\">\r\n                <label>\r\n                  New Password\r\n                </label>\r\n                <input type=\"password\" [(ngModel)]=\"account._userAccessKey\" class=\"form-control\">\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"(account._passwordReset == 'True')\">\r\n                <label>\r\n                  COnfirm Password\r\n                </label>\r\n                <input type=\"password\" [(ngModel)]=\"confirmPassword\" (change)=\"confirmPass()\" class=\"form-control\">\r\n              </div>\r\n              <div class=\"row\">\r\n                <br />\r\n                <button type=\"button\" class=\"btn btn-success btn-circle\" style=\"width: 100%; border-radius: 300px;\" (click)=\"login()\" *ngIf=\"(account._passwordReset != 'True')\">Login</button>\r\n                <button type=\"button\" class=\"btn btn-success btn-circle\" style=\"width: 100%; border-radius: 300px;\" (click)=\"updatePass()\" *ngIf=\"(account._passwordReset == 'True')\">Update Password</button>\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_useraccount_useraccount_model__ = __webpack_require__("../../../../../src/app/components/useraccount/useraccount.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery___default()('.ui.dropdown').dropdown();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.menu = 'home';
        this.checkSession();
        this.account = new __WEBPACK_IMPORTED_MODULE_1__components_useraccount_useraccount_model__["a" /* UserAccount */]();
        this.errorMsg = '';
    };
    AppComponent.prototype.checkSession = function () {
        var _this = this;
        this.isLoggedIn = false;
        this._httpService.post('/api/User/LoggedIn', null, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            console.log(values);
            if (values == 'True') {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
            _this.loadingState = false;
        });
    };
    AppComponent.prototype.confirmPass = function () {
        if (this.account._userAccessKey == this.confirmPassword) {
            this.errorMsg = '';
        }
        else {
            this.errorMsg = 'Passwords do not match';
        }
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        if (this.account._userAccessKey.trim() == "") {
            this.errorMsg = "Please enter password.";
        }
        else if (this.account._userLogin.trim() == "") {
            this.errorMsg = "Please enter username.";
        }
        else {
            this.loadingState = true;
            var body = JSON.stringify(this.account);
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            this._httpService.post('/api/User/Login', body, {
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8')
            }).subscribe(function (values) {
                _this.account = values;
                if (_this.account._userAccountID == "Invalid Username/Password") {
                    _this.errorMsg = _this.account._userAccountID;
                    _this.loadingState = false;
                }
                else if (_this.account._passwordReset == "True") {
                    _this.errorMsg = "Your current password is system generated. Please change password and login again.";
                    _this.account._userAccessKey = '';
                    _this.confirmPassword = '';
                    _this.loadingState = false;
                }
                else {
                    _this.checkSession();
                }
            });
        }
    };
    AppComponent.prototype.updatePass = function () {
        var _this = this;
        this.account._passwordReset = "0";
        var body = JSON.stringify(this.account);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/administration/UserAccount/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) { _this.login(); });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        var body = JSON.stringify(this.account);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/User/Logout', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) { _this.checkSession(); });
    };
    AppComponent.prototype.reset = function () {
        this.account = new __WEBPACK_IMPORTED_MODULE_1__components_useraccount_useraccount_model__["a" /* UserAccount */]();
        this.errorMsg = '';
    };
    AppComponent.prototype.setMenu = function (menuclick) {
        this.menu = menuclick;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_collectiontype_collectiontype_list_component__ = __webpack_require__("../../../../../src/app/components/collectiontype/collectiontype-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_paymenttype_paymenttype_list_component__ = __webpack_require__("../../../../../src/app/components/paymenttype/paymenttype-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_userstatus_userstatus_list_component__ = __webpack_require__("../../../../../src/app/components/userstatus/userstatus-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_systembranch_systembranch_list_component__ = __webpack_require__("../../../../../src/app/components/systembranch/systembranch-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_userlevel_userlevel_list_component__ = __webpack_require__("../../../../../src/app/components/userlevel/userlevel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_useraccount_useraccount_list_component__ = __webpack_require__("../../../../../src/app/components/useraccount/useraccount-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_administration_administration_menu_component__ = __webpack_require__("../../../../../src/app/components/administration/administration-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_shipmenttype_shipmenttype_component__ = __webpack_require__("../../../../../src/app/components/shipmenttype/shipmenttype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_accountmgt_accountmgt_menu_component__ = __webpack_require__("../../../../../src/app/components/accountmgt/accountmgt-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_shipmentmgt_shipmentmgt_menu_component__ = __webpack_require__("../../../../../src/app/components/shipmentmgt/shipmentmgt-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_customerprofile_customerprofile_list_component__ = __webpack_require__("../../../../../src/app/components/customerprofile/customerprofile-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_units_units_list_component__ = __webpack_require__("../../../../../src/app/components/units/units-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_cargotypes_cargotype_list_component__ = __webpack_require__("../../../../../src/app/components/cargotypes/cargotype-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_collectiontype_collectiontype_list_component__["a" /* CollectionTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_paymenttype_paymenttype_list_component__["a" /* PaymentTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_userstatus_userstatus_list_component__["a" /* UserStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_systembranch_systembranch_list_component__["a" /* SystemBranchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_userlevel_userlevel_list_component__["a" /* UserLevelComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_useraccount_useraccount_list_component__["a" /* UserAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_administration_administration_menu_component__["a" /* AdministrationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_shipmenttype_shipmenttype_component__["a" /* ShipmentTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_accountmgt_accountmgt_menu_component__["a" /* AccountMgtComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_shipmentmgt_shipmentmgt_menu_component__["a" /* ShipmentMgtComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_customerprofile_customerprofile_list_component__["a" /* CustomerAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_cargotypes_cargotype_list_component__["a" /* CargoTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_units_units_list_component__["a" /* UnitComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'administration',
                    component: __WEBPACK_IMPORTED_MODULE_13__components_administration_administration_menu_component__["a" /* AdministrationComponent */]
                },
                {
                    path: 'administration/:menuid',
                    component: __WEBPACK_IMPORTED_MODULE_13__components_administration_administration_menu_component__["a" /* AdministrationComponent */]
                },
                {
                    path: 'customeraccounts',
                    component: __WEBPACK_IMPORTED_MODULE_16__components_accountmgt_accountmgt_menu_component__["a" /* AccountMgtComponent */]
                },
                {
                    path: 'customeraccounts/:menuid',
                    component: __WEBPACK_IMPORTED_MODULE_16__components_accountmgt_accountmgt_menu_component__["a" /* AccountMgtComponent */]
                },
                {
                    path: 'shipments',
                    component: __WEBPACK_IMPORTED_MODULE_17__components_shipmentmgt_shipmentmgt_menu_component__["a" /* ShipmentMgtComponent */]
                },
                {
                    path: 'shipments/:menuid',
                    component: __WEBPACK_IMPORTED_MODULE_17__components_shipmentmgt_shipmentmgt_menu_component__["a" /* ShipmentMgtComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/accountmgt/accountmgt-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\r\n  <div class=\"row\">\r\n    <div class=\"segment\">\r\n      <customer-type-main *ngIf=\"(menu=='profiles')\"></customer-type-main>\r\n  \r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/accountmgt/accountmgt-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountMgtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountMgtComponent = (function () {
    function AccountMgtComponent(route) {
        this.route = route;
    }
    AccountMgtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.menu = params['menuid'];
        });
    };
    return AccountMgtComponent;
}());
AccountMgtComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'accountmgt',
        template: __webpack_require__("../../../../../src/app/components/accountmgt/accountmgt-menu.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], AccountMgtComponent);

var _a;
//# sourceMappingURL=accountmgt-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/administration/administration-menu.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <div class=\"row\" style=\"padding: 12px;\">\r\n    <div>\r\n      <div class=\"segment\">\r\n        <useraccount-type-main *ngIf=\"(menu=='users')\"></useraccount-type-main>\r\n        <userlevel-type-main *ngIf=\"(menu=='userlevels')\"></userlevel-type-main>\r\n        <userstatus-type-main *ngIf=\"(menu=='userstatus')\"></userstatus-type-main>\r\n        <systembranch-type-main *ngIf=\"(menu=='branches')\"></systembranch-type-main>\r\n        <collection-type-main *ngIf=\"(menu=='collectiontype')\"></collection-type-main>\r\n        <payment-type-main *ngIf=\"(menu=='paymenttype')\"></payment-type-main>\r\n        <cargo-type *ngIf=\"(menu=='cargotypes')\"></cargo-type>\r\n        <units-list *ngIf=\"(menu=='units')\"></units-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/administration/administration-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdministrationComponent = (function () {
    function AdministrationComponent(route) {
        this.route = route;
    }
    AdministrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.menu = params['menuid'];
        });
    };
    return AdministrationComponent;
}());
AdministrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'administration',
        template: __webpack_require__("../../../../../src/app/components/administration/administration-menu.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], AdministrationComponent);

var _a;
//# sourceMappingURL=administration-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cargotypes/cargotype-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row\"><h2><label class=\"label label-primary\">Cargo Types</label></h2></div>\r\n    <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n      <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n        {{ errMessage }}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-4 pull-right well\" style=\"margin-right: 10px;margin-left: 10px;\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#cargotypeModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<hr />\r\n<div class=\"well\">\r\n  <div class=\"table-responsive table-striped\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Code</th>\r\n          <th>Name</th>\r\n          <th>Descrption</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let cargo of apiValues\">\r\n          <td><button (click)=\"viewThis(cargo)\" onclick=\"$('#cargotypeModal').modal('show');\"><i class=\"glyphicon glyphicon-edit\"></i></button></td>\r\n          <td>{{ cargo._cargoCode }}</td>\r\n           <td>{{ cargo._cargoName }}</td>\r\n          <td>{{ cargo._cargoDescription }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"cargotypeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <h3><span class=\"label label-default\">Cargo Type</span></h3>\r\n        </div>\r\n        <div class=\"well\">\r\n          <div class=\"ui grid\">\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Code</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._cargoCode\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Name</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._cargoName\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Description</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._cargoDescription\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateCargoType()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._cargoID != 'New'\">\r\n          Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addPCargoType()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._cargoID === 'New'\">\r\n          Create New\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/cargotypes/cargotype-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargoTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cargotype_model__ = __webpack_require__("../../../../../src/app/components/cargotypes/cargotype.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CargoTypeComponent = (function () {
    function CargoTypeComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    CargoTypeComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.errMessage = '';
    };
    CargoTypeComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CargoType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    CargoTypeComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        this.newSelect();
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CargoType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    CargoTypeComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CargoType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    CargoTypeComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
    };
    CargoTypeComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__cargotype_model__["a" /* CargoType */]();
        this.selectedModel._cargoID = 'New';
        this.selectedModel._cargoCode = '';
        this.selectedModel._cargoName = '';
        this.selectedModel._cargoDescription = '0';
    };
    CargoTypeComponent.prototype.updateCargoType = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CargoType/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'OK') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    CargoTypeComponent.prototype.addPCargoType = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CargoType/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    return CargoTypeComponent;
}());
CargoTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cargo-type',
        template: __webpack_require__("../../../../../src/app/components/cargotypes/cargotype-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CargoTypeComponent);

var _a;
//# sourceMappingURL=cargotype-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cargotypes/cargotype.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargoType; });
var CargoType = (function () {
    function CargoType() {
    }
    return CargoType;
}());

//# sourceMappingURL=cargotype.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/collectiontype/collectiontype-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row\"><h2><label class=\"label label-primary\">Collection Types</label></h2></div>\r\n    <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n      <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n        {{ errMessage }}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-4 pull-right well\" style=\"margin-right: 10px;margin-left: 10px;\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#collectiontypeModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<hr />\r\n<div class=\"well\">\r\n  <div class=\"table-responsive table-striped\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Name</th>\r\n          <th>Descrption</th>\r\n          <th>Billed To</th>\r\n          <th style=\"text-align:center\">Collectable Account</th>\r\n          <th style=\"text-align:center\">Collect On Delivery</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let collectionType of apiValues\">\r\n          <td><button (click)=\"viewThis(collectionType)\" onclick=\"$('#collectiontypeModal').modal('show');\"><i class=\"glyphicon glyphicon-edit\"></i></button></td>\r\n          <td>{{ collectionType._ctDisplayName }}</td>\r\n          <td>{{ collectionType._ctDescription }}</td>\r\n          <td>\r\n            <i *ngIf=\"(collectionType._ctBilledTo.indexOf('0') > -1);then content_true_else else content_false_else\">\r\n            </i>\r\n            <ng-template #content_true_else>Shipper</ng-template>\r\n            <ng-template #content_false_else>Consignee</ng-template>\r\n          </td>\r\n          <td style=\"text-align:center\">\r\n            <i *ngIf=\"(collectionType._collectableFlag.indexOf('0') > -1);then content_true else content_false\">\r\n            </i>\r\n            <ng-template #content_true></ng-template>\r\n            <ng-template #content_false><i class=\"glyphicon glyphicon-check\"></i></ng-template>\r\n          </td>\r\n          <td style=\"text-align:center\">\r\n            <i *ngIf=\"(collectionType._collectOnDeliveryFlag.indexOf('0') > -1);then content_true else content_false\">\r\n            </i>\r\n            <ng-template #content_true></ng-template>\r\n            <ng-template #content_false><i class=\"glyphicon glyphicon-check\"></i></ng-template>\r\n          </td>\r\n\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"collectiontypeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <h3><span class=\"label label-default\">User Level</span></h3>\r\n        </div>\r\n        <div class=\"well\">\r\n          <div class=\"ui grid\">\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Name</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._ctDisplayName\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Description</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._ctDescription\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Bill to: </label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n               \r\n                <select class=\"form-control\" [(ngModel)]=\"selectedModel._ctBilledTo\">\r\n                  <option value=\"0\">Shipper</option>\r\n                  <option value=\"1\">Consignee</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Collectable Account: </label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <select class=\"form-control\" [(ngModel)]=\"selectedModel._collectableFlag\">\r\n                  <option value=\"0\">No</option>\r\n                  <option value=\"1\">Yes</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n             \r\n              \r\n              <div class=\"col-md-6\">\r\n                <label>Collect on Delivery: </label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                \r\n                <select class=\"form-control\" [(ngModel)]=\"selectedModel._collectOnDeliveryFlag\">\r\n                  <option value=\"0\">No</option>\r\n                  <option value=\"1\">Yes</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateCollectionType()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._collectionTypeCode != 'New'\">\r\n          Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addCollectionType()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._collectionTypeCode === 'New'\">\r\n          Create New\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/collectiontype/collectiontype-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collectiontype_model__ = __webpack_require__("../../../../../src/app/components/collectiontype/collectiontype.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollectionTypeComponent = (function () {
    function CollectionTypeComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    CollectionTypeComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.errMessage = '';
    };
    CollectionTypeComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CollectionType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    CollectionTypeComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        this.newSelect();
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CollectionType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    CollectionTypeComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CollectionType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    CollectionTypeComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
    };
    CollectionTypeComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__collectiontype_model__["a" /* CollectionType */]();
        this.selectedModel._collectionTypeCode = 'New';
        this.selectedModel._ctDisplayName = '';
        this.selectedModel._collectableFlag = '0';
        this.selectedModel._collectOnDeliveryFlag = '0';
        this.selectedModel._ctBilledTo = '0';
    };
    CollectionTypeComponent.prototype.updateCollectionType = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CollectionType/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    CollectionTypeComponent.prototype.addCollectionType = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/CollectionType/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    return CollectionTypeComponent;
}());
CollectionTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'collection-type-main',
        template: __webpack_require__("../../../../../src/app/components/collectiontype/collectiontype-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CollectionTypeComponent);

var _a;
//# sourceMappingURL=collectiontype-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/collectiontype/collectiontype.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionType; });
var CollectionType = (function () {
    function CollectionType() {
    }
    return CollectionType;
}());

//# sourceMappingURL=collectiontype.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/customerprofile/customerprofile-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"input-group\">\r\n      <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n          {{ errMessage }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4 pull-right\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#customerAccountModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div><!-- /input-group -->\r\n  </div><!-- /.col-lg-6 -->\r\n \r\n</div>\r\n<div class=\"row\" style=\"padding: 12px;\">\r\n    <div class=\"col-sm-6 col-md-4\"  *ngFor=\"let customeraccount of apiValues\" style=\"padding: 20px;\">\r\n      <div class=\"card\" style=\"box-shadow: 5px 5px 10px;\">\r\n        <div class=\"caption\" style=\"background-color: white;height:140px; padding: 12px; border: 1px solid #808080;\">\r\n          <p style=\"font-size: 16px; text-decoration: underline;\"><label class=\"label label-default\" style=\"font-size:larger;\">{{ customeraccount._lastname }}, {{ customeraccount._firstname }} </label> <span *ngIf=\"(customeraccount._company != '' && customeraccount._company!=  null)\"> ( {{ customeraccount._company }} )</span></p>\r\n          <p style=\"font-size: 14px;\">Phone: {{ customeraccount._businessPhone}}</p>\r\n          <p style=\"font-size: 14px;\">Address: {{ customeraccount._address}}</p>\r\n          <div class=\"btn-group pull-right\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-primary\" onclick=\"$('#customerAccountModal').modal('show');\" (click)=\"viewThis(customeraccount)\">Edit</button>\r\n         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"customerAccountModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n     <div class=\"modal-body\">\r\n       <div class=\"well\">\r\n         <div class=\"ui grid\">\r\n           <div>\r\n             <div class=\"row\">\r\n               <h3><span class=\"label label-default\">Customer Account</span></h3>\r\n             </div>\r\n             <hr />\r\n             <div class=\"row\">\r\n               <h4><span class=\"label label-default\">Customer Details</span></h4>\r\n             </div>\r\n             <div class=\"row\">\r\n               <div class=\"col-md-4\">\r\n                 <label>First Name</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._firstname\">\r\n               </div>\r\n               <div class=\"col-md-4\">\r\n                 <label>Middle Name</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._middlename\">\r\n               </div>\r\n               <div class=\"col-md-4\">\r\n                 <label>Last Name</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._lastname\">\r\n               </div>\r\n             </div>\r\n             <div class=\"row\">\r\n               <div class=\"col-md-4\">\r\n                 <label>Email:</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._email\">\r\n               </div>\r\n               <div class=\"col-md-8\">\r\n                 <label>Address</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._address\">\r\n               </div>\r\n\r\n\r\n             </div>\r\n             <div class=\"row\">\r\n               <div class=\"col-md-8\">\r\n                 <label>Company </label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._company\">\r\n               </div>\r\n               <div class=\"col-md-4\">\r\n                 <label>Business Phone No.:</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._businessPhone\">\r\n               </div>\r\n\r\n             </div>\r\n           </div>\r\n           <hr/>\r\n           <div class=\"row\">\r\n             <h4><span class=\"label label-default\">Account Details</span></h4>\r\n           </div>\r\n           <div class=\"row\">\r\n             <div class=\"col-md-8\">\r\n               <label>Account Number</label>\r\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._accountNumber\">\r\n             </div>\r\n             \r\n\r\n           </div>\r\n           <div class=\"row\">\r\n             <div class=\"col-md-4\">\r\n               <label>Closest Branch</label>\r\n               <select class=\"form-control\" [(ngModel)]=\"selectedModel._closestBranch\">\r\n                 <option *ngFor=\"let branch of branchValues\" [ngValue]=\"branch._branchID\">{{branch._branchName}}</option>\r\n               </select>\r\n\r\n             </div>\r\n             <div class=\"col-md-4\">\r\n               <label>Priority Client</label>\r\n               <select class=\"form-control\" [(ngModel)]=\"selectedModel._isVIP\">\r\n                 <option value=\"1\">Yes</option>\r\n                 <option value=\"0\">No</option>\r\n               </select>\r\n\r\n             </div>\r\n             \r\n           </div>\r\n\r\n         </div>\r\n       </div>\r\n     </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateCustomerAccount()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._customerID != 'New'\">\r\n            Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addCustomerAccount()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._customerID === 'New'\">\r\n            Create New User\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/customerprofile/customerprofile-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customerprofile_model__ = __webpack_require__("../../../../../src/app/components/customerprofile/customerprofile.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerAccountComponent = (function () {
    function CustomerAccountComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
        this.branchValues = [];
    }
    CustomerAccountComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.loadCollectionTypes();
        this.newSelect();
        this.errMessage = '';
    };
    CustomerAccountComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery___default()('.ui.dropdown').dropdown();
    };
    CustomerAccountComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/customer/CustomerProfile/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
            console.log(_this.apiValues);
        });
    };
    CustomerAccountComponent.prototype.loadCollectionTypes = function () {
        var _this = this;
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.branchValues = values;
        });
    };
    CustomerAccountComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/customer/CustomerProfile/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
            console.log(_this.apiValues);
        });
    };
    CustomerAccountComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/customer/CustomerProfile/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    CustomerAccountComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
    };
    CustomerAccountComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__customerprofile_model__["a" /* CustomerAccount */]();
        this.selectedModel._customerID = 'New';
        this.selectedModel._firstname = '';
        this.selectedModel._middlename = '';
        this.selectedModel._lastname = '';
        this.selectedModel._address = '';
        this.selectedModel._email = '';
        this.selectedModel._company = '';
        this.selectedModel._phoneNumber = '';
        this.selectedModel._isVIP = '0';
        this.selectedModel._businessPhone = '';
        this.selectedModel._accountNumber = '';
        if (this.branchValues.length > 0) {
            this.selectedModel._closestBranch = this.branchValues[0]._branchID;
        }
    };
    CustomerAccountComponent.prototype.updateCustomerAccount = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/customer/CustomerProfile/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.errMessage = values;
            _this.refreshCollectionTypes();
        });
    };
    CustomerAccountComponent.prototype.addCustomerAccount = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/customer/CustomerProfile/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            _this.errMessage = values;
            _this.refreshCollectionTypes();
        });
    };
    return CustomerAccountComponent;
}());
CustomerAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'customer-type-main',
        template: __webpack_require__("../../../../../src/app/components/customerprofile/customerprofile-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CustomerAccountComponent);

var _a;
//# sourceMappingURL=customerprofile-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customerprofile/customerprofile.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAccount; });
var CustomerAccount = (function () {
    function CustomerAccount() {
    }
    return CustomerAccount;
}());

//# sourceMappingURL=customerprofile.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n  <div class=\"column\">\r\n    <div>&nbsp;</div>\r\n  </div>\r\n<div class=\" four wide column\">\r\n  <div class=\"ui small feed\">\r\n    <h4 class=\"ui header\">Branch Activity</h4>\r\n    <div class=\"event\">\r\n      <div class=\"content\">\r\n        <div class=\"summary\">\r\n         <p>Currently no recorded activity for this Branch</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n  <div class=\"column\">\r\n    <div>&nbsp;</div>\r\n  </div>\r\n  <div class=\" four wide column\" >\r\n    <div class=\"ui small feed\">\r\n      <h4 class=\"ui header\">Announcement</h4>\r\n      <div class=\"event\">\r\n        <div class=\"content\">\r\n          <div class=\"summary\">\r\n            <p>Currently no Announcements</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\" four wide column\">\r\n    <h4 class=\"ui horizontal divider header\">\r\n      <i class=\"tag icon\"></i>\r\n      Quick Access Menus\r\n    </h4>\r\n    <div style=\"width: 100%; margin: auto;\">\r\n      <div class=\"ui vertical menu\" style=\"width: 100%;\">\r\n\r\n        <a class=\"item\" style=\"width: 100%;\">\r\n          Missing Items\r\n          <div class=\"ui green label\">0</div>\r\n        </a>\r\n        <a class=\"item\" style=\"width: 100%;\">\r\n          For Checking\r\n          <div class=\"ui green label\">0</div>\r\n        </a>\r\n        <a class=\"item\"  style=\"width: 100%;\">\r\n          For Approval\r\n          <div class=\"ui green label\">0</div>\r\n        </a>\r\n        <div class=\"item\"  style=\"width: 100%;\">\r\n          <div class=\"ui transparent icon input\">\r\n            <input type=\"text\" placeholder=\"Search Delivery Tracking No.\">\r\n            <i class=\"search icon\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu-component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"brand\">Jades Cargo Services</div>\r\n  <i class=\"glyphicon glyphicon-align-justify toggle-btn\" style=\"font-size: 25px;\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n  <div class=\"menu-list\">\r\n    <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n      <li  class=\" item\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">\r\n          Dashboard\r\n      </li>\r\n      <li data-toggle=\"collapse\" data-target=\"#administration\" class=\"collapsed\">\r\n        <a >Administration</a>\r\n      </li>\r\n      <ul class=\"sub-menu collapse\" id=\"administration\">\r\n        <li  class=\" item\" [routerLink]=\"['/administration','users']\" routerLinkActive=\"active\">\r\n            Users\r\n       \r\n        </li>\r\n        <li  class=\" item\" [routerLink]=\"['/administration','userlevels']\" routerLinkActive=\"active\">\r\n            User Level\r\n       \r\n        </li>\r\n        <li  class=\" item\" [routerLink]=\"['/administration','userstatus']\" routerLinkActive=\"active\">\r\n            User Status\r\n         \r\n        </li>\r\n        <li  [routerLink]=\"['/administration','branches']\" routerLinkActive=\"active\">\r\n            Branches\r\n        \r\n        </li>\r\n        <li  [routerLink]=\"['/administration','collectiontype']\" routerLinkActive=\"active\">\r\n            Collection Type\r\n      \r\n        </li>\r\n        <li [routerLink]=\"['/administration','paymenttype']\" routerLinkActive=\"active\">\r\n            Payment Type\r\n         \r\n        </li>\r\n        <li [routerLink]=\"['/administration','units']\" routerLinkActive=\"active\">\r\n            Item Units\r\n        </li>\r\n        <li [routerLink]=\"['/administration','cargotypes']\" routerLinkActive=\"active\">\r\n            Cargo Types\r\n        </li>\r\n      \r\n      </ul>\r\n      <li data-toggle=\"collapse\" data-target=\"#new\" class=\"collapsed\">\r\n        <a> Customer Accounts</a>\r\n      </li>\r\n      <ul class=\"sub-menu collapse\" id=\"new\">\r\n        <li [routerLink]=\"['/customeraccounts','profiles']\" routerLinkActive=\"active\">\r\n            Manage Accounts\r\n        </li>\r\n        <li>Statement of Accounts</li>\r\n        <li>Payments</li>\r\n      </ul>\r\n      <li data-toggle=\"collapse\" data-target=\"#airService\" class=\"collapsed\">\r\n        <a>Air Services</a>\r\n      </li>\r\n      <ul class=\"sub-menu collapse\" id=\"airService\">\r\n        <li>Air Shipments</li>\r\n        <li>Air Collectibles</li>\r\n        <li>Adjust Rates</li>\r\n      </ul>\r\n      <li data-toggle=\"collapse\" data-target=\"#seaLandService\" class=\"collapsed\">\r\n        <a>Sea/Land Services</a>\r\n      </li>\r\n      <ul class=\"sub-menu collapse\" id=\"seaLandService\">\r\n        <li>Sea/Land Shipments</li>\r\n        <li>Shipment Collectibles</li>\r\n        <li>Sea/Land Rates(per Route)</li>\r\n      </ul>\r\n      \r\n    </ul>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(route) {
        this.route = route;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'menu-section',
        template: __webpack_require__("../../../../../src/app/components/menu/menu-component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/paymenttype/paymenttype-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row\"><h2><label class=\"label label-primary\">Payment Types</label></h2></div>\r\n    <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n      <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n        {{ errMessage }}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-4 pull-right well\" style=\"margin-right: 10px;margin-left: 10px;\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#paymenttypeModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<hr />\r\n<div class=\"well\">\r\n  <div class=\"table-responsive table-striped\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Name</th>\r\n          <th>Descrption</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let PaymentType of apiValues\">\r\n          <td><button (click)=\"viewThis(PaymentType)\" onclick=\"$('#paymenttypeModal').modal('show');\"><i class=\"glyphicon glyphicon-edit\"></i></button></td>\r\n           <td>{{ PaymentType._ptDisplayName }}</td>\r\n          <td>{{ PaymentType._ptDescription }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"paymenttypeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <h3><span class=\"label label-default\">User Level</span></h3>\r\n        </div>\r\n        <div class=\"well\">\r\n          <div class=\"ui grid\">\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Name</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._ptDisplayName\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Description</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._ptDescription\" />\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updatePaymentType()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._paymentTypeCode != 'New'\">\r\n          Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addPaymentType()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._paymentTypeCode === 'New'\">\r\n          Create New\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/paymenttype/paymenttype-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymenttype_model__ = __webpack_require__("../../../../../src/app/components/paymenttype/paymenttype.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentTypeComponent = (function () {
    function PaymentTypeComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    PaymentTypeComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.errMessage = '';
    };
    PaymentTypeComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/PaymentType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    PaymentTypeComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        this.newSelect();
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/PaymentType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    PaymentTypeComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/PaymentType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    PaymentTypeComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
    };
    PaymentTypeComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__paymenttype_model__["a" /* PaymentType */]();
        this.selectedModel._paymentTypeCode = 'New';
        this.selectedModel._ptDisplayName = '';
        this.selectedModel._ptDescription = '';
        this.selectedModel._checkFlag = '0';
    };
    PaymentTypeComponent.prototype.updatePaymentType = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/PaymentType/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'OK') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    PaymentTypeComponent.prototype.addPaymentType = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/PaymentType/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    return PaymentTypeComponent;
}());
PaymentTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'payment-type-main',
        template: __webpack_require__("../../../../../src/app/components/paymenttype/paymenttype-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PaymentTypeComponent);

var _a;
//# sourceMappingURL=paymenttype-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/paymenttype/paymenttype.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentType; });
var PaymentType = (function () {
    function PaymentType() {
    }
    return PaymentType;
}());

//# sourceMappingURL=paymenttype.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/shipmentmgt/shipmentmgt-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\r\n  <div class=\"row\">\r\n    <div class=\"three wide column\">\r\n      <div class=\"ui secondary vertical pointing menu\" style=\"margin: auto;\">\r\n        <a class=\" item\"  [routerLink]=\"['/customeraccounts','management']\" routerLinkActive=\"active\" style=\"width: 100%;\">\r\n          Air Shipments\r\n        </a>\r\n        <a class=\" item\"  [routerLink]=\"['/customeraccounts','transactions']\"  routerLinkActive=\"active\"  style=\"width: 100%;\">\r\n          Sea Shipment\r\n        </a>\r\n        <a class=\" item\" [routerLink]=\"['/customeraccounts','transactions']\" routerLinkActive=\"active\" style=\"width: 100%;\">\r\n          Sea Shipment\r\n        </a>\r\n        <a class=\" item\" [routerLink]=\"['/customeraccounts','transactions']\" routerLinkActive=\"active\" style=\"width: 100%;\">\r\n          Sea Rates per Route\r\n        </a>\r\n        <a class=\" item\" [routerLink]=\"['/customeraccounts','transactions']\" routerLinkActive=\"active\" style=\"width: 100%;\">\r\n          Standard Air Fees\r\n        </a>\r\n        <a class=\" item\" [routerLink]=\"['/customeraccounts','transactions']\" routerLinkActive=\"active\" style=\"width: 100%;\">\r\n          Cargo Weight Class\r\n        </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <div class=\"segment\">\r\n       </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shipmentmgt/shipmentmgt-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentMgtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShipmentMgtComponent = (function () {
    function ShipmentMgtComponent(route) {
        this.route = route;
    }
    ShipmentMgtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.menu = params['menuid'];
        });
    };
    return ShipmentMgtComponent;
}());
ShipmentMgtComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shipmentmgt',
        template: __webpack_require__("../../../../../src/app/components/shipmentmgt/shipmentmgt-menu.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ShipmentMgtComponent);

var _a;
//# sourceMappingURL=shipmentmgt-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shipmenttype/shipmenttype.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\r\n  <div class=\"ui form\">\r\n    <h4 class=\"ui dividing header\">User Accounts</h4>\r\n    <div class=\"ui message\" *ngIf=\"(errMessage != '' && errMessage != null)\">\r\n      <i class=\"close icon\" (click)=\"errMessage = '';\"></i>\r\n      <div class=\"header\">\r\n        {{ errMessage }}\r\n      </div>\r\n      <p>&nbsp;</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"two fields\">\r\n        <div class=\"field\">\r\n          <div class=\"ui action input\">\r\n            <input type=\"text\" placeholder=\"Enter search terms here..\" [(ngModel)]=\"searchkey\">\r\n            <button class=\"ui button\" (click)=\"search()\">Search</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui teal button\" onclick=\"$('#paymenttypeModal').modal('show');\" (click)=\"newSelect()\">New</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui segment\">\r\n    <div class=\"ui divided items\">\r\n      <div class=\"small item\" *ngFor=\"let shipmenttype of apiValues\">\r\n        <div class=\"content\">\r\n          <a class=\"header\">\r\n            \r\n            <span class=\"ui button\" onclick=\"$('#shipmentTypeModal').modal('show');\" (click)=\"viewThis(shipmenttype)\">\r\n              <i class=\"edit icon\"></i>\r\n            </span>\r\n            <span style=\"width: 100px;\">\r\n              <span class=\"ui label\" *ngIf=\"(shipmenttype._isTransaction == 'True')\">Transaction</span>\r\n              <span class=\"ui label\" *ngIf=\"(shipmenttype._isTransaction != 'True')\">Internal&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n            </span>\r\n            &nbsp;&nbsp;&nbsp;\r\n            {{ shipmenttype._description }}   \r\n            \r\n          </a>\r\n         </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"ui modal\" id=\"shipmentTypeModal\">\r\n  <i class=\"close icon\"></i>\r\n  <div class=\"content\">\r\n    <div class=\"ui form\">\r\n      <h4 class=\"ui dividing header\">Shipment Type Information</h4>\r\n      <div class=\"field\">\r\n        <div class=\"two fields\">\r\n          <div class=\"field\">\r\n            <label>Description</label>\r\n            <input [(ngModel)]=\"selectedModel._description\" placeholder=\"\" />\r\n          </div>\r\n          <div class=\"field\" style=\"margin: auto;\">\r\n            <label>is Transaction</label>\r\n            <input type=\"checkbox\" (checked)=\"isTransactionFlag\" [(ngModel)]=\"isTransactionFlag\" (click)=\"changeTransactionFlag()\" />\r\n          </div>\r\n         \r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n  </div>\r\n  <div class=\"actions\">\r\n    <div class=\"ui positive right labeled icon button\" (click)=\"addUserAccount()\" *ngIf=\"(this.selectedModel._shipmentType == '0')\">\r\n      Add\r\n      <i class=\"checkmark icon\"></i>\r\n    </div>\r\n    <div class=\"ui positive right labeled icon button\" (click)=\"updateUserAccount()\" *ngIf=\"(this.selectedModel._shipmentType != '0')\">\r\n      Save\r\n      <i class=\"checkmark icon\"></i>\r\n    </div>\r\n    <div class=\"ui red deny button\">\r\n      Remove\r\n    </div>\r\n    <div class=\"ui black deny button\">\r\n      Cancel\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shipmenttype/shipmenttype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipmenttype_model__ = __webpack_require__("../../../../../src/app/components/shipmenttype/shipmenttype.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipmentTypeComponent = (function () {
    function ShipmentTypeComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    ShipmentTypeComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__shipmenttype_model__["a" /* ShipmentType */]();
        this.errMessage = '';
        this.isTransactionFlag = false;
    };
    ShipmentTypeComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/ShipmentType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
            console.log(_this.apiValues);
        });
    };
    ShipmentTypeComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/ShipmentType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
            console.log(_this.apiValues);
        });
    };
    ShipmentTypeComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/ShipmentType/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    ShipmentTypeComponent.prototype.viewThis = function (model) {
        console.log(model);
        this.isTransactionFlag = (model._isTransaction.toLowerCase() == 'true');
        console.log(Boolean(model._isTransaction.toLowerCase()));
        this.selectedModel = model;
    };
    ShipmentTypeComponent.prototype.newSelect = function () {
        this.selectedModel._shipmentType = '0';
        this.selectedModel._description = '';
        this.selectedModel._isTransaction = 'False';
    };
    ShipmentTypeComponent.prototype.updateUserAccount = function () {
        var _this = this;
        this.selectedModel._isTransaction = String(this.isTransactionFlag);
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/ShipmentType/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.errMessage = values;
            _this.refreshCollectionTypes();
        });
    };
    ShipmentTypeComponent.prototype.changeTransactionFlag = function () {
        this.isTransactionFlag = !this.isTransactionFlag;
    };
    ShipmentTypeComponent.prototype.addUserAccount = function () {
        var _this = this;
        this.selectedModel._isTransaction = String(this.isTransactionFlag);
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/ShipmentType/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            _this.errMessage = values;
            _this.refreshCollectionTypes();
        });
    };
    return ShipmentTypeComponent;
}());
ShipmentTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'shipment-type-main',
        template: __webpack_require__("../../../../../src/app/components/shipmenttype/shipmenttype.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ShipmentTypeComponent);

var _a;
//# sourceMappingURL=shipmenttype.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shipmenttype/shipmenttype.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentType; });
var ShipmentType = (function () {
    function ShipmentType() {
    }
    return ShipmentType;
}());

//# sourceMappingURL=shipmenttype.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/systembranch/systembranch-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row\"><h2><label class=\"label label-primary\">Branches </label></h2></div>\r\n    <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n      <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n        {{ errMessage }}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-4 pull-right well\" style=\"margin-right: 10px;margin-left: 10px;\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#branchModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<hr />\r\n<div class=\"well\">\r\n  <div class=\"table-responsive table-striped\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Name</th>\r\n          <th>Short Code</th>\r\n          <th>Parent Branch</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let branch of apiValues\">\r\n          <td><button (click)=\"viewThis(branch)\" onclick=\"$('#branchModal').modal('show');\"><i class=\"glyphicon glyphicon-edit\"></i></button></td>\r\n          <td>{{ branch._branchName  }}</td>\r\n          <td>{{ branch._shortCode }}</td>\r\n          <td>\r\n            <select style=\"background:none; border: none;\" [(ngModel)]=\"branch._parentBranch\" disabled>\r\n              <option *ngFor=\"let parentbranch of apiValues\" [ngValue]=\"parentbranch._branchID\">{{parentbranch._branchName}}</option>\r\n            </select>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"branchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <h3><span class=\"label label-default\">User Status</span></h3>\r\n        </div>\r\n        <div class=\"well\">\r\n          <div class=\"ui grid\">\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Name</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._branchName\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Short Code</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._shortCode\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Parent Branch</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <select class=\"form-control\" [(ngModel)]=\"selectedModel._parentBranch\">\r\n                  <option *ngFor=\"let parentbranch of apiValues\" [ngValue]=\"parentbranch._branchID\">{{parentbranch._branchName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateSystemBranch()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._branchID != 'New'\">\r\n          Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addSystemBranch()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._branchID === 'New'\">\r\n          Create New \r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/systembranch/systembranch-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemBranchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systembranch_model__ = __webpack_require__("../../../../../src/app/components/systembranch/systembranch.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemBranchComponent = (function () {
    function SystemBranchComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    SystemBranchComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.errMessage = '';
    };
    SystemBranchComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    SystemBranchComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        this.newSelect();
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    SystemBranchComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    SystemBranchComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
    };
    SystemBranchComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__systembranch_model__["a" /* SystemBranch */]();
        this.selectedModel._branchID = 'New';
        this.selectedModel._branchName = '';
        this.selectedModel._manager = '0';
        this.selectedModel._parentBranch = '0';
        this.selectedModel._routeDisplay = '';
        this.selectedModel._shortCode = '';
    };
    SystemBranchComponent.prototype.updateSystemBranch = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/SystemBranch/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    SystemBranchComponent.prototype.addSystemBranch = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/SystemBranch/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    return SystemBranchComponent;
}());
SystemBranchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'systembranch-type-main',
        template: __webpack_require__("../../../../../src/app/components/systembranch/systembranch-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SystemBranchComponent);

var _a;
//# sourceMappingURL=systembranch-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/systembranch/systembranch.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemBranch; });
var SystemBranch = (function () {
    function SystemBranch() {
    }
    return SystemBranch;
}());

//# sourceMappingURL=systembranch.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/units/unit.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unit; });
var Unit = (function () {
    function Unit() {
    }
    return Unit;
}());

//# sourceMappingURL=unit.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/units/units-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row\"><h2><label class=\"label label-primary\">Item Units</label></h2></div>\r\n    <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n      <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n        {{ errMessage }}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-4 pull-right well\" style=\"margin-right: 10px;margin-left: 10px;\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#unitModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<hr />\r\n<div class=\"well\">\r\n  <div class=\"table-responsive table-striped\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Name</th>\r\n          <th>Descrption</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let unit of apiValues\">\r\n          <td><button (click)=\"viewThis(unit)\" onclick=\"$('#unitModal').modal('show');\"><i class=\"glyphicon glyphicon-edit\"></i></button></td>\r\n           <td>{{ unit._unitName }}</td>\r\n          <td>{{ unit._unitDescription }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"unitModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <h3><span class=\"label label-default\">Item Unit</span></h3>\r\n        </div>\r\n        <div class=\"well\">\r\n          <div class=\"ui grid\">\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Name</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._unitName\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Description</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._unitDescription\" />\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateUnit()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._unitCode != 'New'\">\r\n          Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addUnit()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._unitCode === 'New'\">\r\n          Create New\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/units/units-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unit_model__ = __webpack_require__("../../../../../src/app/components/units/unit.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitComponent = (function () {
    function UnitComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    UnitComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.errMessage = '';
    };
    UnitComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/Unit/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UnitComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        this.newSelect();
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/Unit/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UnitComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/Unit/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UnitComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
    };
    UnitComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__unit_model__["a" /* Unit */]();
        this.selectedModel._unitCode = 'New';
        this.selectedModel._unitName = '';
        this.selectedModel._unitDescription = '';
    };
    UnitComponent.prototype.updateUnit = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/Unit/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'OK') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    UnitComponent.prototype.addUnit = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/Unit/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    return UnitComponent;
}());
UnitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'units-list',
        template: __webpack_require__("../../../../../src/app/components/units/units-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UnitComponent);

var _a;
//# sourceMappingURL=units-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/useraccount/useraccount-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"input-group\">\r\n      <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n          {{ errMessage }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4 pull-right\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#userAccountModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div><!-- /input-group -->\r\n  </div><!-- /.col-lg-6 -->\r\n \r\n</div>\r\n<div class=\"row\" style=\"padding: 12px;\">\r\n    <div class=\"col-sm-6 col-md-4\"  *ngFor=\"let useraccount of apiValues\">\r\n      <div class=\"card\" style=\"box-shadow: 5px 5px 10px;\">\r\n        <div class=\"caption\" style=\"background-color: white;height:140px; padding: 12px; border: 1px solid #808080;\">\r\n          <p style=\"font-size: 16px; text-decoration: underline;\"><label class=\"label label-default\">{{ useraccount._lastname }}, {{ useraccount._firstname }}</label></p>\r\n          <p style=\"font-size: 14px;\">Phone: {{ useraccount._phoneNumber}}</p>\r\n          <p style=\"font-size: 14px;\">Address: {{ useraccount._address}}</p>\r\n          <div class=\"btn-group pull-right\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-primary\" onclick=\"$('#userAccountModal').modal('show');\" (click)=\"viewThis(useraccount)\">Edit</button>\r\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"resetPassword(useraccount)\">Reset</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"userAccountModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n     <div class=\"modal-body\">\r\n       <div class=\"well\">\r\n         <div class=\"ui grid\">\r\n           <div>\r\n             <div class=\"row\">\r\n               <h3><span class=\"label label-default\">User Account</span></h3>\r\n             </div>\r\n             <hr />\r\n             <div class=\"row\">\r\n               <h4><span class=\"label label-default\">User Details</span></h4>\r\n             </div>\r\n             <div class=\"row\">\r\n               <div class=\"col-md-4\">\r\n                 <label>First Name</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._firstname\">\r\n               </div>\r\n               <div class=\"col-md-4\">\r\n                 <label>Middle Name</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._middlename\">\r\n               </div>\r\n               <div class=\"col-md-4\">\r\n                 <label>Last Name</label>\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._lastname\">\r\n               </div>\r\n             </div>\r\n             <div class=\"row\">\r\n               <div class=\"col-md-8\">\r\n                 <label>Address</label>\r\n                 <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedModel._address\">\r\n               </div>\r\n               <div class=\"col-md-4\">\r\n                 <label>Phone No.:</label>\r\n                 <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedModel._phoneNumber\">\r\n               </div>\r\n\r\n             </div>\r\n           </div>\r\n           <hr />\r\n           <div class=\"row\"><h4><span class=\"label label-default\">Access Control</span></h4></div>\r\n           <div class=\"row\">\r\n             <div class=\"col-md-4\">\r\n               <label>User Name</label>\r\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._userLogin\" *ngIf=\"(selectedModel._userAccountID == 'New')\">\r\n               <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedModel._userLogin\" *ngIf=\"(selectedModel._userAccountID != 'New')\" readonly>\r\n             </div>\r\n             <div class=\"col-md-4\">\r\n               <label>User Level</label>\r\n               <select class=\"form-control\" [(ngModel)]=\"selectedModel._userLevel\">\r\n                 <option *ngFor=\"let ul of userLevelValues\" [ngValue]=\"ul._userLevelCode\">{{ul._ulDisplayName}}</option>\r\n               </select>\r\n             </div>\r\n             <div class=\"col-md-4\">\r\n               <label>User Status</label>\r\n               <select class=\"form-control\" [(ngModel)]=\"selectedModel._userStatus\">\r\n                 <option *ngFor=\"let ustat of userStatusValues\" [ngValue]=\"ustat._userStatusCode\">{{ustat._usDisplay}}</option>\r\n               </select>\r\n             </div>\r\n           </div>\r\n           \r\n           <div class=\"row\">\r\n             <div class=\"col-md-4\">\r\n               <label>Branch</label>\r\n               <select class=\"form-control\" [(ngModel)]=\"selectedModel._userBranch\">\r\n                 <option *ngFor=\"let branch of branchValues\" [ngValue]=\"branch._branchID\">{{branch._branchName}}</option>\r\n               </select>\r\n\r\n             </div>\r\n             <div class=\"col-md-8\" style=\"font-size: 10px; padding-top: 10px;\">\r\n               <div class=\"well\">\r\n                 <div class=\"row\">\r\n                   <label>Transaction Access:</label>\r\n                 </div>\r\n                 <div class=\"row\" style=\"margin-top: 5px;\">\r\n                   <div class=\" col-md-4\"><label>Sea Transaction</label></div>\r\n                   <div class=\" col-md-8\">\r\n                     <select class=\"form-control\" [(ngModel)]=\"selectedModel._isSea\" >\r\n                       <option value=\"1\">Yes</option>\r\n                       <option value=\"0\">No</option>\r\n                     </select>\r\n                   </div>\r\n                 </div>\r\n                 <div class=\"row\" style=\"margin-top: 5px;\">\r\n                   <div class=\" col-md-4\"><label>Air Transaction</label></div>\r\n                   <div class=\"  col-md-8\">\r\n                     <select class=\"form-control\" [(ngModel)]=\"selectedModel.isAir\">\r\n                       <option value=\"1\">Yes</option>\r\n                       <option value=\"0\">No</option>\r\n                     </select>\r\n                   </div>\r\n                 </div>\r\n                 <div class=\"row\" style=\"margin-top: 5px;\">\r\n                   <div class=\" col-md-4\"><label>Interbranch Transaction</label></div>\r\n                   <div class=\" col-md-8\">\r\n                     <select class=\"form-control\" [(ngModel)]=\"selectedModel._isBranch\">\r\n                       <option value=\"1\">Yes</option>\r\n                       <option value=\"0\">No</option>\r\n                     </select>\r\n                   </div>\r\n                 </div>\r\n               </div>\r\n             </div>\r\n           </div>\r\n\r\n         </div>\r\n       </div>\r\n     </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateUserAccount()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._userAccountID != 'New'\">\r\n            Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addUserAccount()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._userAccountID === 'New'\">\r\n            Create New User\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/useraccount/useraccount-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__useraccount_model__ = __webpack_require__("../../../../../src/app/components/useraccount/useraccount.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAccountComponent = (function () {
    function UserAccountComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
        this.branchValues = [];
        this.userStatusValues = [];
        this.userLevelValues = [];
        this.userAccessValues = [];
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.loadCollectionTypes();
        this.newSelect();
        this.errMessage = '';
    };
    UserAccountComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery___default()('.ui.dropdown').dropdown();
    };
    UserAccountComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserAccount/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
            console.log(_this.apiValues);
        });
    };
    UserAccountComponent.prototype.loadCollectionTypes = function () {
        var _this = this;
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/SystemBranch/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.branchValues = values;
        });
        this._httpService.post('/api/Administration/UserLevel/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.userLevelValues = values;
        });
        this._httpService.post('/api/Administration/UserStatus/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.userStatusValues = values;
        });
    };
    UserAccountComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserAccount/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
            console.log(_this.apiValues);
        });
    };
    UserAccountComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserAccount/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UserAccountComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
        this.getUserAccess();
    };
    UserAccountComponent.prototype.getUserAccess = function () {
        var _this = this;
        console.log(this.selectedModel._userAccountID);
        var body = JSON.stringify(this.selectedModel._userAccountID);
        this._httpService.post('/api/Administration/UserAccount/ListAccess', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.userAccessValues = values;
            console.log(values);
        });
    };
    UserAccountComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__useraccount_model__["a" /* UserAccount */]();
        this.selectedModel._userAccountID = 'New';
        this.selectedModel._firstname = '';
        this.selectedModel._middlename = '';
        this.selectedModel._lastname = '';
        this.selectedModel._address = '';
        this.selectedModel._employeeReference = '';
        this.selectedModel._userLogin = '';
        this.selectedModel._userAccessKey = '';
        this.selectedModel._createdBy = '0';
        this.selectedModel._createdOn = '08/24/2017';
        this.selectedModel._updatedBy = '0';
        this.selectedModel._updatedOn = '08/24/2017';
        this.selectedModel._userLevel = '0';
        this.selectedModel._userStatus = '0';
        this.selectedModel._passwordReset = "1";
        this.selectedModel._isAir = '0';
        this.selectedModel._isSea = '0';
        this.selectedModel._isBranch = '0';
        if (this.branchValues.length > 0) {
            this.selectedModel._userBranch = this.branchValues[0]._branchID;
        }
        if (this.userLevelValues.length > 0) {
            this.selectedModel._userLevel = this.userLevelValues[0]._userLevelCode;
        }
        if (this.userStatusValues.length > 0) {
            this.selectedModel._userStatus = this.userStatusValues[0]._userStatusCode;
        }
    };
    UserAccountComponent.prototype.updateUserAccount = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserAccount/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.errMessage = values;
            _this.refreshCollectionTypes();
        });
    };
    UserAccountComponent.prototype.resetPassword = function (model) {
        var _this = this;
        model._passwordReset = "1";
        var body = JSON.stringify(model);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserAccount/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            _this.errMessage = values;
            _this.refreshCollectionTypes();
        });
    };
    UserAccountComponent.prototype.addUserAccount = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserAccount/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            _this.errMessage = values;
            _this.refreshCollectionTypes();
        });
    };
    return UserAccountComponent;
}());
UserAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'useraccount-type-main',
        template: __webpack_require__("../../../../../src/app/components/useraccount/useraccount-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserAccountComponent);

var _a;
//# sourceMappingURL=useraccount-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/useraccount/useraccount.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccount; });
var UserAccount = (function () {
    function UserAccount() {
    }
    return UserAccount;
}());

//# sourceMappingURL=useraccount.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/userlevel/userlevel-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row\"><h2><label class=\"label label-primary\">User Level</label></h2></div>\r\n      <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n          {{ errMessage }}\r\n        </div>\r\n      </div>\r\n    \r\n  </div>\r\n  <div class=\"col-md-4 pull-right well\" style=\"margin-right: 10px;margin-left: 10px;\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#userlevelModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n \r\n</div>\r\n<hr/>\r\n<div class=\"well\">\r\n  <div class=\"table-responsive table-striped\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Name</th>\r\n          <th>Description</th>\r\n          <th style=\"text-align: center;\">Administrator</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let userLevel of apiValues\">\r\n          <td><button (click)=\"viewThis(userLevel)\" onclick=\"$('#userlevelModal').modal('show');\"><i class=\"glyphicon glyphicon-edit\"></i></button></td>\r\n          <td>{{ userLevel._ulDisplayName }}</td>\r\n          <td>{{userLevel._ulDescription }}</td>\r\n          <td style=\"text-align: center;\"><i *ngIf=\"(userLevel._isAdmin == '1')\" class=\"glyphicon glyphicon-check\"></i></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"userlevelModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <h3><span class=\"label label-default\">User Level</span></h3>\r\n        </div>\r\n        <div class=\"well\">\r\n          <div class=\"ui grid\">\r\n\r\n            <div class=\"row\">\r\n            \r\n                <div class=\"col-md-6\">\r\n                  <label>Name</label>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._ulDisplayName\" />\r\n                </div>\r\n          \r\n            </div>\r\n            <div class=\"row\">\r\n            \r\n                <div class=\"col-md-6\">\r\n                  <label>Description</label>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._ulDescription\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n            \r\n                <div class=\"col-md-6\">\r\n                  <label>Administrator Rights</label>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"selectedModel._isAdmin\">\r\n                    <option value=\"1\">Yes</option>\r\n                    <option value=\"0\">No</option>\r\n                  </select>\r\n                </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateUserLevel()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._userLevelCode != 'New'\">\r\n          Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addUserLevel()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._userLevelCode === 'New'\">\r\n          Create New\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/userlevel/userlevel-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLevelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userlevel_model__ = __webpack_require__("../../../../../src/app/components/userlevel/userlevel.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLevelComponent = (function () {
    function UserLevelComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    UserLevelComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.errMessage = '';
    };
    UserLevelComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserLevel/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UserLevelComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        this.newSelect();
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserLevel/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UserLevelComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserLevel/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UserLevelComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
    };
    UserLevelComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__userlevel_model__["a" /* UserLevel */]();
        this.selectedModel._userLevelCode = 'New';
        this.selectedModel._ulDisplayName = '';
        this.selectedModel._ulDescription = '';
        this.selectedModel._isAdmin = '0';
    };
    UserLevelComponent.prototype.updateUserLevel = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserLevel/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    UserLevelComponent.prototype.addUserLevel = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserLevel/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    return UserLevelComponent;
}());
UserLevelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'userlevel-type-main',
        template: __webpack_require__("../../../../../src/app/components/userlevel/userlevel-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserLevelComponent);

var _a;
//# sourceMappingURL=userlevel-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/userlevel/userlevel.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLevel; });
var UserLevel = (function () {
    function UserLevel() {
    }
    return UserLevel;
}());

//# sourceMappingURL=userlevel.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/userstatus/userstatus-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n      <div class=\"row\"><h2><label class=\"label label-primary\">User Status</label></h2></div>\r\n      <div class=\"row\" *ngIf=\"(errMessage != '')\">\r\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n          {{ errMessage }}\r\n        </div>\r\n      </div>\r\n    \r\n  </div>\r\n  <div class=\"col-md-4 pull-right well\" style=\"margin-right: 10px;margin-left: 10px;\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchkey\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" onclick=\"$('#userstatusModal').modal('show');\" (click)=\"newSelect()\">+</button>\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\">Search!</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<hr />\r\n<div class=\"well\">\r\n  <div class=\"table-responsive table-striped\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Name</th>\r\n          <th>Description</th>\r\n          <th style=\"text-align: center;\">Access Disabled</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let userStatus of apiValues\">\r\n          <td><button (click)=\"viewThis(userStatus)\" onclick=\"$('#userstatusModal').modal('show');\"><i class=\"glyphicon glyphicon-edit\"></i></button></td>\r\n          <td>{{ userStatus._usDisplay  }}</td>\r\n          <td>{{userStatus._usDescription }}</td>\r\n          <td style=\"text-align: center;\"><i *ngIf=\"(userStatus._disableFeaturesFlag == '1')\" class=\"glyphicon glyphicon-check\"></i></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"userstatusModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <h3><span class=\"label label-default\">User Status</span></h3>\r\n        </div>\r\n        <div class=\"well\">\r\n          <div class=\"ui grid\">\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Name</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._usDisplay\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Description</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedModel._usDescription\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <label>Disable Access</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <select class=\"form-control\" [(ngModel)]=\"selectedModel._disableFeaturesFlag\">\r\n                  <option value=\"0\">No</option>\r\n                  <option value=\"1\">Yes</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateUserStatus()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._userStatusCode != 'New'\">\r\n          Save changes\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addUserStatus()\" data-dismiss=\"modal\" *ngIf=\"selectedModel._userStatusCode === 'New'\">\r\n          Create New\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/userstatus/userstatus-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userstatus_userstatus_model__ = __webpack_require__("../../../../../src/app/components/userstatus/userstatus.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserStatusComponent = (function () {
    function UserStatusComponent(_httpService) {
        this._httpService = _httpService;
        this.apiValues = [];
    }
    UserStatusComponent.prototype.ngOnInit = function () {
        this.refreshCollectionTypes();
        this.errMessage = '';
    };
    UserStatusComponent.prototype.search = function () {
        var _this = this;
        var body = JSON.stringify(this.searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserStatus/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UserStatusComponent.prototype.refreshCollectionTypes = function () {
        var _this = this;
        this.newSelect();
        var body = JSON.stringify('');
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserStatus/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UserStatusComponent.prototype.searchCollectionTypes = function (searchkey) {
        var _this = this;
        var body = JSON.stringify(searchkey);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserStatus/List', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(function (values) {
            _this.apiValues = values;
        });
    };
    UserStatusComponent.prototype.viewThis = function (model) {
        this.selectedModel = model;
    };
    UserStatusComponent.prototype.newSelect = function () {
        this.selectedModel = new __WEBPACK_IMPORTED_MODULE_2__userstatus_userstatus_model__["a" /* UserStatus */]();
        this.selectedModel._userStatusCode = 'New';
        this.selectedModel._usDisplay = '';
        this.selectedModel._usDescription = '';
        this.selectedModel._disableFeaturesFlag = '0';
    };
    UserStatusComponent.prototype.updateUserStatus = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserStatus/Edit', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    UserStatusComponent.prototype.addUserStatus = function () {
        var _this = this;
        var body = JSON.stringify(this.selectedModel);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this._httpService.post('/api/Administration/UserStatus/New', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8'), responseType: 'text'
        }).subscribe(function (values) {
            if (values != 'Ok') {
                _this.errMessage = values;
            }
            _this.refreshCollectionTypes();
        });
    };
    return UserStatusComponent;
}());
UserStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'userstatus-type-main',
        template: __webpack_require__("../../../../../src/app/components/userstatus/userstatus-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserStatusComponent);

var _a;
//# sourceMappingURL=userstatus-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/userstatus/userstatus.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatus; });
var UserStatus = (function () {
    function UserStatus() {
    }
    return UserStatus;
}());

//# sourceMappingURL=userstatus.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map