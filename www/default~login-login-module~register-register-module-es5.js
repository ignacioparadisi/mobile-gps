(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~login-login-module~register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Crear cuenta</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"dismiss()\">Cancelar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"createAccount()\">\n    <!-- Name Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Nombre y Apellido<ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.name\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Document ID Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Cédula<ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"number\" formControlName=\"documentId\" required></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.documentId\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Birthday Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Fecha de Nacimiento<ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-datetime displayFormat=\"MMM DD, YYYY\" formControlName=\"birthday\" required></ion-datetime>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.birthday\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Phone Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Número telefónico<ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"tel\" formControlName=\"phone\" required></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.phone\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Email Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Correo electrónico<ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.email\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Password Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña<ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" required></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.password\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Password Validation Field -->\n    <ion-item>\n      <ion-label position=\"floating\">Comprobar Contraseña<ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"password\" formControlName=\"validPassword\" required></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of validationMessages.validPassword\">\n      <div class=\"error\">\n        <ion-icon name=\"alert\" color=\"danger\"></ion-icon>\n        <ion-text color=\"danger\">{{ error }}</ion-text>\n      </div>\n    </div>\n\n    <!-- Create Account Button -->\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Crear cuenta\n      </ion-button>\n    </div>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/register/register.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  margin: 20px 10px;\n}\n\nform .error {\n  margin: 10px;\n}\n\nform .error ion-icon {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFHSTtFQUNJLFlBQUE7QUFBUjs7QUFFUTtFQUNJLGtCQUFBO0FBQVoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbn1cblxuZm9ybSB7XG4gICAgLmVycm9yIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/register/register.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(modalController, loadingController, alertController, userService, router) {
          _classCallCheck(this, RegisterPage);

          this.modalController = modalController;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.userService = userService;
          this.router = router;
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
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            validPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            documentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }

        _createClass(RegisterPage, [{
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
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
                        message: 'Creando cuenta'
                      });

                    case 2:
                      this.loadingView = _context.sent;
                      _context.next = 5;
                      return this.loadingView.present();

                    case 5:
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingView.dismiss();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * Presenta una alerta de error
           */

        }, {
          key: "presentErrorAlert",
          value: function presentErrorAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Error',
                        message: 'Hubo un error al crear el usuario.',
                        buttons: ['Aceptar']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * Se validan los campos y se envian los datos al servidor para ser creado el usuario.
           */

        }, {
          key: "createAccount",
          value: function createAccount() {
            var _this = this;

            this.clearValidationMessages();
            this.validateFields();

            if (this.registerForm.valid) {
              this.presentLoading();
              var user = {
                full_name: this.registerForm.get('name').value,
                email: this.registerForm.get('email').value,
                cedula: this.registerForm.get('documentId').value,
                phone: this.registerForm.get('phone').value,
                password: this.registerForm.get('password').value
              };
              this.userService.createUser(user).subscribe(function (response) {
                console.log(response);

                _this.dismissLoading();

                _this.dismiss();

                var user = {
                  id: response.id,
                  email: response.email
                };
                src_resources_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"].saveUser(user);

                _this.router.navigate(['/tabs']);
              }, function (error) {
                console.log(error);

                _this.dismissLoading();

                _this.presentErrorAlert();
              });
            }
          }
          /**
           * Limpia los mensajes de error.
           */

        }, {
          key: "clearValidationMessages",
          value: function clearValidationMessages() {
            this.validationMessages.name = [];
            this.validationMessages.email = [];
            this.validationMessages.password = [];
            this.validationMessages.validPassword = [];
            this.validationMessages.phone = [];
            this.validationMessages.documentId = [];
            this.validationMessages.birthday = [];
          }
          /**
           * Valida que los campos tengan información válida.
           */

        }, {
          key: "validateFields",
          value: function validateFields() {
            this.validateEmailField();
            this.validateNameField();
            this.validatePasswordField();
            this.validateBirthdayField();
            this.validateDocumentIdField();
            this.validatePhoneField();
          }
          /**
           * Valida la información que contiene el campo de email.
           */

        }, {
          key: "validateEmailField",
          value: function validateEmailField() {
            var emailErrors = this.registerForm.get('email').errors;

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
           * Valida la información que contiene el campo de nombre.
           */

        }, {
          key: "validateNameField",
          value: function validateNameField() {
            var nameErrors = this.registerForm.get('name').errors;

            if (nameErrors) {
              if (nameErrors.required) {
                this.validationMessages.name.push('El nombre es obligatorio.');
              }
            }
          }
          /**
           * Valida la información que contiene el campo de contraseña.
           */

        }, {
          key: "validatePasswordField",
          value: function validatePasswordField() {
            var passwordErrors = this.registerForm.get('password').errors;
            var validPasswordErrors = this.registerForm.get('validPassword').errors;

            if (!passwordErrors && !validPasswordErrors) {
              if (this.registerForm.get('password').value !== this.registerForm.get('validPassword').value) {
                this.validationMessages.password.push('Las contraseñas no coinciden');
                this.validationMessages.validPassword.push('Las contraseñas no coinciden');
              }
            }

            if (passwordErrors) {
              if (passwordErrors.required) {
                this.validationMessages.password.push('La contraseña es obligatorio.');
              }
            }

            if (validPasswordErrors) {
              if (validPasswordErrors.required) {
                this.validationMessages.validPassword.push('La comprobación de la contraseña es obligatorio.');
              }
            }
          }
          /**
           * Valida la información que contiene el campo de cédula.
           */

        }, {
          key: "validateDocumentIdField",
          value: function validateDocumentIdField() {
            var documentIdErrors = this.registerForm.get('documentId').errors;

            if (documentIdErrors) {
              if (documentIdErrors.required) {
                this.validationMessages.documentId.push('La cédula es obligatorio.');
              }
            }
          }
          /**
           * Valida la información que contiene el campo de fecha de nacimiento.
           */

        }, {
          key: "validateBirthdayField",
          value: function validateBirthdayField() {
            var birthdayErrors = this.registerForm.get('birthday').errors;

            if (birthdayErrors) {
              if (birthdayErrors.required) {
                this.validationMessages.birthday.push('La fecha de nacimiento es obligatorio.');
              }
            }
          }
          /**
           * Valida la información que contiene el campo de número de teléfono.
           */

        }, {
          key: "validatePhoneField",
          value: function validatePhoneField() {
            var phoneErrors = this.registerForm.get('phone').errors;

            if (phoneErrors) {
              if (phoneErrors.required) {
                this.validationMessages.phone.push('El número telefónico es obligatorio.');
              }
            }
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/register/register.page.scss"))["default"]]
      })], RegisterPage);
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
//# sourceMappingURL=default~login-login-module~register-register-module-es5.js.map