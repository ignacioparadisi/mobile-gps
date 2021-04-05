(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-title>Cuenta</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"handleEdit()\">{{ editButtonTitle }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Cuenta</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <form [formGroup]=\"registerForm\">\n    <!-- Name Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Nombre y Apellido</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" [readonly]=\"!isEditEnabled\" required>\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.name\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Document ID Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Cédula</ion-label>\n      <ion-input type=\"number\" formControlName=\"documentId\" [readonly]=\"!isEditEnabled\" required>\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.documentId\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Birthday Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Fecha de Nacimiento</ion-label>\n      <ion-datetime displayFormat=\"MMM DD, YYYY\" formControlName=\"birthday\" value=\"1960-03-01\"\n        [readonly]=\"!isEditEnabled\" required></ion-datetime>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.birthday\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Phone Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Número telefónico</ion-label>\n      <ion-input type=\"tel\" formControlName=\"phone\" [readonly]=\"!isEditEnabled\" required>\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.phone\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Email Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Correo electrónico</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" [readonly]=\"!isEditEnabled\" required>\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.email\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Password Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" [readonly]=\"!isEditEnabled\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.password\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Password Validation Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Comprobar Contraseña</ion-label>\n      <ion-input type=\"password\" formControlName=\"validPassword\" [readonly]=\"!isEditEnabled\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.validPassword\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Create Account Button -->\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!isEditEnabled\">Guardar\n      </ion-button>\n    </div>\n  </form>\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" class=\"ion-no-margin\" color=\"light\" (click)=\"logOut()\">Cerrar sesión\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"],
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"] }]),
            _account_routing_module__WEBPACK_IMPORTED_MODULE_7__["AccountPageRoutingModule"],
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/resources/auth-guard */ "./src/resources/auth-guard.ts");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");







let AccountPage = class AccountPage {
    constructor(router, userService, loadingController) {
        this.router = router;
        this.userService = userService;
        this.loadingController = loadingController;
        this.isEditEnabled = false;
        this.editButtonTitle = 'Editar';
        this.validationMessages = {
            name: [],
            email: [],
            password: [],
            validPassword: [],
            phone: [],
            documentId: [],
            birthday: []
        };
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
            validPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            documentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ngOnInit() {
        this.presentLoading();
        this.userService.getSignedInUser().subscribe((user) => {
            this.dismissLoading();
            this.registerForm.get('name').setValue(user.full_name);
            this.registerForm.get('email').setValue(user.email);
            this.registerForm.get('phone').setValue(user.phone);
            this.registerForm.get('documentId').setValue(user.cedula);
        }, error => {
            this.dismissLoading();
            console.log(error);
        });
    }
    /**
     * Presenta una vista de carga mientras se envian los datos al servidor.
     */
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingView = yield this.loadingController.create({
                message: 'Cargando'
            });
            this.loadingView.present();
        });
    }
    dismissLoading() {
        this.loadingView.dismiss();
    }
    logOut() {
        src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"].removeUser();
        this.router.navigate(['/login']);
    }
    handleEdit() {
        this.isEditEnabled = !this.isEditEnabled;
        this.editButtonTitle = this.isEditEnabled ? 'Cancelar' : 'Editar';
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")).default]
    })
], AccountPage);



/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/resources/auth-guard */ "./src/resources/auth-guard.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    createUser(user) {
        return this.http.post('https://community-service-ucab.herokuapp.com/api/users', user);
    }
    login(authInfo) {
        return this.http.post('https://community-service-ucab.herokuapp.com/api/login', authInfo);
    }
    getSignedInUser() {
        const localUser = src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"].getUser();
        const params = { email: localUser.email };
        if (localUser !== null) {
            return this.http.get('https://community-service-ucab.herokuapp.com/api/user', { params });
        }
    }
    getUserByEmail(email) {
        const params = { email };
        return this.http.get('https://community-service-ucab.herokuapp.com/api/user', { params });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map