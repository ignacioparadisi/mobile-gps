(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-title>Cuenta</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"handleEdit()\">{{ editButtonTitle }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Cuenta</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <form [formGroup]=\"registerForm\">\n    <!-- Name Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Nombre y Apellido</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" [readonly]=\"!isEditEnabled\" required>\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.name\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Document ID Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Cédula</ion-label>\n      <ion-input type=\"number\" formControlName=\"documentId\" [readonly]=\"!isEditEnabled\" required>\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.documentId\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Birthday Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Fecha de Nacimiento</ion-label>\n      <ion-datetime displayFormat=\"MMM DD, YYYY\" formControlName=\"birthday\" value=\"1960-03-01\"\n        [readonly]=\"!isEditEnabled\" required></ion-datetime>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.birthday\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Phone Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Número telefónico</ion-label>\n      <ion-input type=\"tel\" formControlName=\"phone\" [readonly]=\"!isEditEnabled\" required>\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.phone\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Email Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Correo electrónico</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" [readonly]=\"!isEditEnabled\" required>\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.email\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Password Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" [readonly]=\"!isEditEnabled\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.password\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Password Validation Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Comprobar Contraseña</ion-label>\n      <ion-input type=\"password\" formControlName=\"validPassword\" [readonly]=\"!isEditEnabled\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.validPassword\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Create Account Button -->\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!isEditEnabled\">Guardar\n      </ion-button>\n    </div>\n  </form>\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" class=\"ion-no-margin\" color=\"light\" (click)=\"logOut()\">Cerrar sesión\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/account/account-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function srcAppAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "./src/app/account/account.page.ts");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/account/account.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "./src/app/account/account.page.ts");
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account-routing.module */
      "./src/app/account/account-routing.module.ts");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
        }]), _account_routing_module__WEBPACK_IMPORTED_MODULE_7__["AccountPageRoutingModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "./src/app/account/account.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/account/account.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/account/account.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/account/account.page.ts ***!
      \*****************************************/

    /*! exports provided: AccountPage */

    /***/
    function srcAppAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/resources/auth-guard */
      "./src/resources/auth-guard.ts");
      /* harmony import */


      var src_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/user.service */
      "./src/services/user.service.ts");

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(router, userService, loadingController) {
          _classCallCheck(this, AccountPage);

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

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.presentLoading();
            this.userService.getSignedInUser().subscribe(function (user) {
              _this.dismissLoading();

              _this.registerForm.get('name').setValue(user.full_name);

              _this.registerForm.get('email').setValue(user.email);

              _this.registerForm.get('phone').setValue(user.phone);

              _this.registerForm.get('documentId').setValue(user.cedula);
            }, function (error) {
              _this.dismissLoading();

              console.log(error);
            });
          }
          /**
           * Presenta una vista de carga mientras se envian los datos al servidor.
           */

        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Cargando'
                      });

                    case 2:
                      this.loadingView = _context.sent;
                      this.loadingView.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            this.loadingView.dismiss();
          }
        }, {
          key: "logOut",
          value: function logOut() {
            src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"].removeUser();
            this.router.navigate(['/login']);
          }
        }, {
          key: "handleEdit",
          value: function handleEdit() {
            this.isEditEnabled = !this.isEditEnabled;
            this.editButtonTitle = this.isEditEnabled ? 'Cancelar' : 'Editar';
          }
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./account.page.scss */
        "./src/app/account/account.page.scss"))["default"]]
      })], AccountPage);
      /***/
    },

    /***/
    "./src/services/user.service.ts":
    /*!**************************************!*\
      !*** ./src/services/user.service.ts ***!
      \**************************************/

    /*! exports provided: UserService */

    /***/
    function srcServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/resources/auth-guard */
      "./src/resources/auth-guard.ts");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "createUser",
          value: function createUser(user) {
            return this.http.post('https://community-service-ucab.herokuapp.com/api/users', user);
          }
        }, {
          key: "login",
          value: function login(authInfo) {
            return this.http.post('https://community-service-ucab.herokuapp.com/api/login', authInfo);
          }
        }, {
          key: "getSignedInUser",
          value: function getSignedInUser() {
            var localUser = src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"].getUser();
            var params = {
              email: localUser.email
            };

            if (localUser !== null) {
              return this.http.get('https://community-service-ucab.herokuapp.com/api/user', {
                params: params
              });
            }
          }
        }, {
          key: "getUserByEmail",
          value: function getUserByEmail(email) {
            var params = {
              email: email
            };
            return this.http.get('https://community-service-ucab.herokuapp.com/api/user', {
              params: params
            });
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map