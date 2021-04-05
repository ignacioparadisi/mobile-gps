(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-routes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/routes.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/routes.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-split-pane contentId=\"main\" when=\"md\">\n  <ion-menu contentId=\"main\"> -->\n    <ion-header translucent=\"true\">\n      <ion-toolbar>\n        <ion-title>Mis Rutas</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content fullscreen=\"true\">\n      <ion-header collapse=\"condense\">\n        <ion-toolbar>\n          <ion-title size=\"large\">Mis Rutas</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <ion-list>\n        <ion-card *ngFor=\"let route of routes; let i = index\">\n          <ion-item-sliding>\n            <ion-item [routerLink]=\"['/tabs/routes', route.id]\" routerDirection=\"forward\">\n              <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n              <ion-label>{{route.name}}</ion-label>\n              <ion-label class=\"ion-text-right\">15m</ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"danger\" (click)=\"delete(i)\">Eliminar</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-card>\n      </ion-list>\n    </ion-content>\n  <!-- </ion-menu>\n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n  \n</ion-split-pane> -->\n");

/***/ }),

/***/ "./src/app/routes/routes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RoutesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesPageRoutingModule", function() { return RoutesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _routes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.page */ "./src/app/routes/routes.page.ts");




const routes = [
    {
        path: '',
        component: _routes_page__WEBPACK_IMPORTED_MODULE_3__["RoutesPage"],
    }
];
let RoutesPageRoutingModule = class RoutesPageRoutingModule {
};
RoutesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RoutesPageRoutingModule);



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesPageModule", function() { return RoutesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _routes_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes.page */ "./src/app/routes/routes.page.ts");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes-routing.module */ "./src/app/routes/routes-routing.module.ts");







let RoutesPageModule = class RoutesPageModule {
};
RoutesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _routes_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutesPageRoutingModule"]
        ],
        declarations: [_routes_page__WEBPACK_IMPORTED_MODULE_5__["RoutesPage"]]
    })
], RoutesPageModule);



/***/ }),

/***/ "./src/app/routes/routes.page.scss":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9yb3V0ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/routes/routes.page.ts":
/*!***************************************!*\
  !*** ./src/app/routes/routes.page.ts ***!
  \***************************************/
/*! exports provided: RoutesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesPage", function() { return RoutesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/route.service */ "./src/services/route.service.ts");





let RoutesPage = class RoutesPage {
    constructor(router, routeService, alertController) {
        this.router = router;
        this.routeService = routeService;
        this.alertController = alertController;
        this.routes = [];
    }
    ngOnInit() {
        this.refresh();
    }
    refresh(event) {
        this.routeService.getRoutesForUser().subscribe(response => {
            this.routes = response;
            if (event) {
                event.target.complete();
            }
        }, error => {
            if (event) {
                event.target.complete();
            }
            this.presentErrorAlert();
        });
    }
    /**
     * Presenta una alerta de error
     */
    presentErrorAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error',
                message: 'Hubo al obtener las rutas.',
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
    delete(index) {
        this.routes.splice(index, 1);
    }
    log(message) {
        console.log(message);
    }
};
RoutesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
RoutesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-routes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./routes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/routes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./routes.page.scss */ "./src/app/routes/routes.page.scss")).default]
    })
], RoutesPage);



/***/ })

}]);
//# sourceMappingURL=routes-routes-module-es2015.js.map