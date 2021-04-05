(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["route-detail-route-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/route-detail/route-detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/route-detail/route-detail.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-title>{{ route?.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ route?.name }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card *ngFor=\"let point of route?.points\">\n      <ion-item>Latitude: {{ point.latitude }}</ion-item>\n      <ion-item>Longitude: {{ point.longitude }}</ion-item>\n      <ion-item>Precision: {{ point.precision }}</ion-item>\n  </ion-card>\n\n  <canvas #mapCanvas></canvas>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/route-detail/route-detail-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/route-detail/route-detail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RouteDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteDetailPageRoutingModule", function() { return RouteDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _route_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-detail.page */ "./src/app/route-detail/route-detail.page.ts");




const routes = [
    {
        path: '',
        component: _route_detail_page__WEBPACK_IMPORTED_MODULE_3__["RouteDetailPage"]
    }
];
let RouteDetailPageRoutingModule = class RouteDetailPageRoutingModule {
};
RouteDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RouteDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/route-detail/route-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/route-detail/route-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: RouteDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteDetailPageModule", function() { return RouteDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _route_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-detail-routing.module */ "./src/app/route-detail/route-detail-routing.module.ts");
/* harmony import */ var _route_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-detail.page */ "./src/app/route-detail/route-detail.page.ts");







let RouteDetailPageModule = class RouteDetailPageModule {
};
RouteDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _route_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["RouteDetailPageRoutingModule"]
        ],
        declarations: [_route_detail_page__WEBPACK_IMPORTED_MODULE_6__["RouteDetailPage"]]
    })
], RouteDetailPageModule);



/***/ }),

/***/ "./src/app/route-detail/route-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/route-detail/route-detail.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas {\n  border: 1px solid #bbb2b2;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGUtZGV0YWlsL3JvdXRlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlLWRldGFpbC9yb3V0ZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg3LCAxNzgsIDE3OCk7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/route-detail/route-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/route-detail/route-detail.page.ts ***!
  \***************************************************/
/*! exports provided: RouteDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteDetailPage", function() { return RouteDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/route.service */ "./src/services/route.service.ts");




let RouteDetailPage = class RouteDetailPage {
    constructor(activatedRoute, routeService) {
        this.activatedRoute = activatedRoute;
        this.routeService = routeService;
    }
    ngOnInit() {
        const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.fetchRoute(routeId);
    }
    ngAfterViewInit() {
    }
    fetchRoute(id) {
        this.routeService.getRouteById(id).subscribe((route) => {
            this.route = route;
            var gameValuesX = route.points.map((point) => point.latitude);
            for (var i = 0; i < gameValuesX.length; i++) {
                // where canvas.width is the width of the canvas in pixels
                console.log(this.mapRange(gameValuesX[i], 0, this.canvas.nativeElement.width, 0, this.canvas.nativeElement.width));
            }
        });
    }
    mapRange(value, gameLow, gameHigh, canvasLow, canvasHigh) {
        console.log('value ' + value);
        console.log('gameLow ' + gameLow);
        console.log('gameHigh ' + gameHigh);
        console.log('canvasLow ' + canvasLow);
        console.log('canvasHigh ' + canvasHigh);
        return (canvasLow +
            (canvasHigh - canvasLow) * (value - gameLow) / (gameHigh - gameLow));
    }
    calcgameMinMax(a) {
        var min = 100000000;
        var max = -100000000;
        for (var i = 0; i < a.length; i++) {
            var value = a[i];
            if (value < min) {
                min = value;
            }
            if (value > max) {
                max = value;
            }
        }
        return ({ min: min, max: max });
    }
};
RouteDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"] }
];
RouteDetailPage.propDecorators = {
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['mapCanvas',] }]
};
RouteDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-route-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./route-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/route-detail/route-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./route-detail.page.scss */ "./src/app/route-detail/route-detail.page.scss")).default]
    })
], RouteDetailPage);



/***/ })

}]);
//# sourceMappingURL=route-detail-route-detail-module-es2015.js.map