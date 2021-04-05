(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"form-content\">\n    <ion-grid style=\"height: 100%\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <div class=\"center-content\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <h1  class=\"ion-text-center\">Iniciar sesión</h1>\n            <ion-item>\n              <ion-label position=\"floating\">Correo electrónico</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" required color=\"red\"></ion-input>\n            </ion-item>\n            <div *ngFor=\"let error of validationMessages.email\">\n              <div class=\"error\">\n                <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n                <ion-text color=\"danger\">{{ error }}</ion-text>\n              </div>\n            </div>\n            <ion-item>\n              <ion-label position=\"floating\">Contraseña</ion-label>\n              <ion-input type=\"password\" formControlName=\"password\" required></ion-input>\n            </ion-item>\n            <div *ngFor=\"let error of validationMessages.password\">\n              <div class=\"error\">\n                <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n                <ion-text color=\"danger\">{{ error }}</ion-text>\n              </div>\n            </div>\n            <div class=\"ion-padding\">\n              <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Iniciar sesión\n              </ion-button>\n              <ion-button expand=\"block\" class=\"ion-no-margin\" color=\"tertiary\" (click)=\"presentSignUpModal()\">Crear\n                cuenta</ion-button>\n            </div>\n          </form>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.form-content {\n  background: url('shapes.svg') no-repeat;\n  background-size: cover;\n  height: 100%;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\nh1 {\n  margin: 0;\n  margin-top: 10px;\n  padding: 0;\n}\n\n.center-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform {\n  background-color: white;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  width: 90%;\n  max-width: 400px;\n}\n\nform .error {\n  margin: 10px;\n}\n\nform .error ion-icon {\n  margin-right: 10px;\n}\n\nion-button {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBQ1E7RUFDSSxrQkFBQTtBQUNaOztBQUlBO0VBQ0ksZ0JBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbi5mb3JtLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9zaGFwZXMuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5jZW50ZXItY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuXG4gICAgLmVycm9yIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/resources/auth-guard */ "./src/resources/auth-guard.ts");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register/register.page */ "./src/app/register/register.page.ts");








let LoginPage = class LoginPage {
    constructor(userService, modalController, loadingController, router, alertController) {
        this.userService = userService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.alertController = alertController;
        this.validationMessages = {
            email: [],
            password: []
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ngOnInit() {
    }
    /**
     * Muestra la vista para hacer el registro de usuario.
     */
    presentSignUpModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _register_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
            });
            return yield modal.present();
        });
    }
    /**
     * Presenta una vista con un spinner.
     */
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Iniciando sesión'
            });
            yield loading.present();
            return loading;
        });
    }
    /**
     * Presenta una alerta de error
     */
    presentErrorAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Credenciales inválidas',
                message: 'El correo o la contraseña son inválidos.',
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
    /**
     * Ejecuta el login del usuario enviando el correo y la contraseña al servidor.
     */
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.clearValidationMessages();
            this.validateFields();
            if (this.loginForm.valid) {
                const user = {
                    id: null,
                    email: null
                };
                const authInfo = {
                    email: this.loginForm.get('email').value,
                    password: this.loginForm.get('password').value
                };
                let loadingView = yield this.presentLoading();
                this.userService.login(authInfo).subscribe((response) => {
                    loadingView.dismiss();
                    user.email = response.email;
                    user.id = response.id;
                    src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"].saveUser(user);
                    this.router.navigate(['/tabs']);
                }, error => {
                    loadingView.dismiss();
                    this.presentErrorAlert();
                });
            }
        });
    }
    /**
     * Limpia los mensajes de error.
     */
    clearValidationMessages() {
        this.validationMessages.email = [];
        this.validationMessages.password = [];
    }
    /**
     * Valida que los campos tengan información válida.
     */
    validateFields() {
        this.validateEmailField();
        this.validatePasswordField();
    }
    /**
     * Valida la información que contiene el campo de email.
     */
    validateEmailField() {
        const emailErrors = this.loginForm.get('email').errors;
        console.log(emailErrors);
        if (emailErrors) {
            if (emailErrors.required) {
                this.validationMessages.email.push('El correo electrónico es obligatorio.');
            }
            if (emailErrors.email) {
                this.validationMessages.email.push('El formato del correo electrónico no es válido.');
            }
        }
    }
    /**
     * Valida la información que contiene el campo de contraseña.
     */
    validatePasswordField() {
        const passwordErrors = this.loginForm.get('password').errors;
        console.log(passwordErrors);
        if (passwordErrors) {
            if (passwordErrors.required) {
                this.validationMessages.password.push('La contraseña es obligatoria.');
            }
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map