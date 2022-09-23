(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"user-div\">\r\n  <ion-grid class=\"body\">\r\n    <ion-row class=\"header\">\r\n      <ion-col class=\"user-image\">\r\n        <ion-icon name=\"person-circle-sharp\" class=\"icon1\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col class=\"cart\">\r\n        <ion-icon name=\"cart\" class=\"icon2\"></ion-icon>\r\n        <div class=\"count\">2</div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <button class=\"box1\">Coats</button>\r\n      <button class=\"box\" *ngFor=\"let data of headerData\">\r\n        {{data}}\r\n      </button>\r\n    </ion-row>\r\n\r\n    <ion-slides>\r\n      <ion-slide *ngFor=\"let drs of dress\" class=\"dress-slide\">\r\n        <ion-card class=\"card1\" routerLink=\"/product\">\r\n          <img class=\"image4\" [ngStyle]=\"{'background-image': 'url(' + drs.image + ')'}\" />\r\n          <ion-row>\r\n            <ion-col>\r\n              <p class=\"text\"><b>{{drs.name}}</b></p>\r\n            </ion-col>\r\n            <ion-col>\r\n              <h4 class=\"text1\">{{drs.price}}</h4>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <!-- <ion-slides class=\"image-slider\" loop=\"true\"  slidesPerView=\"2\" [options]=\"slideOpts\">\r\n      <ion-slide *ngFor=\"let drs of dress\" class=\"imageslide\">\r\n        <img [ngStyle]=\"{'background-image': 'url(' + drs.image + ')'}\" class=\"hotelSmallImg\"  />\r\n        <ion-row>\r\n          <ion-col>\r\n            <p class=\"text\"><b>{{drs.name}}</b></p>\r\n          </ion-col>\r\n          <ion-col>\r\n            <h4 class=\"text1\">{{drs.price}}</h4>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-slide>\r\n    </ion-slides> -->\r\n\r\n\r\n\r\n    <ion-row class=\"col-1\">\r\n      <p class=\"para\"><b>Recommended For You</b></p>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-slides slidesPerView=\"2\">\r\n        <ion-slide class=\"dress-slide1\">\r\n          <ion-card class=\"card2\" routerLink=\"/product\">\r\n            <img class=\"image3\" src=\"../../assets/dresses/coats/download4.jpg\" />\r\n            <div class=\"count1\">10% OFF</div>\r\n          </ion-card>\r\n        </ion-slide>\r\n\r\n        <ion-slide class=\"dress-slide1\">\r\n          <ion-card class=\"card2\" routerLink=\"/product\">\r\n            <img class=\"image3\" src=\"../../assets/dresses/coats/download1.jpg\" />\r\n          </ion-card>\r\n        </ion-slide>\r\n\r\n        <ion-slide class=\"dress-slide1\">\r\n          <ion-card class=\"card2\" routerLink=\"/product\">\r\n            <img class=\"image3\" src=\"../../assets/dresses/coats/download2.jpg\" />\r\n            <div class=\"count1\">15% OFF</div>\r\n          </ion-card>\r\n        </ion-slide>\r\n\r\n        <ion-slide class=\"dress-slide1\">\r\n          <ion-card class=\"card2\" routerLink=\"/product\">\r\n            <img class=\"image3\" src=\"../../assets/dresses/coats/images.jpg\" />\r\n          </ion-card>\r\n        </ion-slide>\r\n\r\n        <ion-slide class=\"dress-slide1\">\r\n          <ion-card class=\"card2\" routerLink=\"/product\">\r\n            <img class=\"image3\" src=\"../../assets/dresses/coats/download.jpg\" />\r\n          </ion-card>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-row>\r\n    <ion-row>\r\n      <button class=\"count2\">\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </button>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  margin: 5% 0 4% 2%;\n}\n\n.icon1 {\n  zoom: 2;\n}\n\n.icon2 {\n  float: right;\n  margin-right: 9%;\n  zoom: 1.5;\n}\n\n.box {\n  border-radius: 33px;\n  margin: 5px;\n  text-align: center;\n  width: 78px;\n  background: white;\n  height: 42px;\n  color: #0d0c22;\n  outline: none;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 8px;\n}\n\n.card {\n  width: 17em;\n  height: 25em;\n}\n\n.card1 {\n  width: 70%;\n  height: 85%;\n  outline: none;\n  box-shadow: none;\n}\n\n.card2 {\n  width: 100%;\n  outline: none;\n  height: 82%;\n  box-shadow: none;\n  border-radius: 15px;\n}\n\n.count {\n  display: block;\n  position: absolute;\n  top: -6px;\n  right: 4px;\n  padding: 0 4px;\n  min-width: 20px;\n  text-align: center;\n  border: 1px solid #e7e7e9;\n  background: pink;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.03);\n  border-radius: 50%;\n  z-index: 1;\n  font-size: 11px;\n  line-height: 18px;\n  color: #6e6d7a;\n  box-sizing: border-box;\n}\n\n.image3 {\n  width: 100%;\n  height: 16em;\n  background-position: center center;\n  background: cover;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom: none;\n}\n\n.para {\n  margin-left: 5%;\n}\n\n.text {\n  font-size: 15px;\n  width: 100px;\n}\n\n.text1 {\n  margin-top: 18%;\n  text-align: right;\n}\n\n.count1 {\n  display: block;\n  position: absolute;\n  top: 6px;\n  right: 80px;\n  padding: 0 4px;\n  min-width: 20px;\n  text-align: center;\n  border: 1px solid #e7e7e9;\n  background: brown;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.03);\n  border-radius: 6px;\n  z-index: 1;\n  font-size: 11px;\n  line-height: 18px;\n  color: white;\n  box-sizing: border-box;\n}\n\n.count2 {\n  position: relative;\n  left: 43%;\n  padding: 7px 20px 6px 20px;\n  min-width: 39px;\n  margin-top: -44px;\n  outline: none;\n  text-align: center;\n  border: 1px solid #e7e7e9;\n  background: black;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.03);\n  border-radius: 33px;\n  z-index: 1;\n  font-size: 26px;\n  color: white;\n  box-sizing: border-box;\n}\n\n.box1 {\n  border-radius: 33px;\n  margin: 5px;\n  text-align: center;\n  width: 78px;\n  height: 42px;\n  color: #0d0c22;\n  outline: none;\n  font-size: 13px;\n  background: peachpuff;\n  font-weight: 400;\n  line-height: 8px;\n}\n\n.box:focus {\n  background: peachpuff;\n}\n\n.dress-slide {\n  width: 250px !important;\n  margin: 0 -25px -30px -25px !important;\n}\n\n.col-1 {\n  margin-bottom: -10px;\n}\n\n.dress-slide1 {\n  width: 175px !important;\n  margin: 0 -10px 0px -10px !important;\n}\n\n.image4 {\n  width: 100%;\n  height: 19em;\n  border-radius: 15px;\n  background-position: center center;\n  background: cover;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxPQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxzQkFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0FBVUY7O0FBUkE7RUFFRSxlQUFBO0VBQ0EsWUFBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFZRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWFGOztBQVJBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVdGOztBQVRBO0VBQ0UscUJBQUE7QUFZRjs7QUFLQTtFQUVFLHVCQUFBO0VBQ0Esc0NBQUE7QUFIRjs7QUFLQTtFQUNFLG9CQUFBO0FBRkY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLG9DQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBtYXJnaW46IDUlIDAgNCUgMiU7XG59XG4uaWNvbjEge1xuICB6b29tOiAyO1xufVxuLmljb24yIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDklO1xuICB6b29tOiAxLjU7XG59XG4uYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQycHg7XG4gIGNvbG9yOiAjMGQwYzIyO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiA4cHg7XG59XG4uY2FyZCB7XG4gIHdpZHRoOiAxN2VtO1xuICBoZWlnaHQ6IDI1ZW07XG59XG4uY2FyZDEge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDg1JTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jYXJkMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDgyJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5jb3VudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgcmlnaHQ6IDRweDtcbiAgcGFkZGluZzogMCA0cHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U5O1xuICBiYWNrZ3JvdW5kOiBwaW5rO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICM2ZTZkN2E7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5pbWFnZTMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5wYXJhIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLnRleHQge1xuICAvLyBwYWRkaW5nLXRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnRleHQxIHtcbiAgbWFyZ2luLXRvcDogMTglO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb3VudDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlOTtcbiAgYmFja2dyb3VuZDogYnJvd247XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNvdW50MiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDMlO1xuICBwYWRkaW5nOiA3cHggMjBweCA2cHggMjBweDtcbiAgbWluLXdpZHRoOiAzOXB4O1xuICBtYXJnaW4tdG9wOiAtNDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vLyAuYm9keXtcbi8vICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbi8vIH1cbi5ib3gxIHtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc4cHg7XG4gIGhlaWdodDogNDJweDtcbiAgY29sb3I6ICMwZDBjMjI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYmFja2dyb3VuZDogcGVhY2hwdWZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogOHB4O1xufVxuLmJveDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHBlYWNocHVmZjtcbn1cbi8vIC5pbWFnZS1zbGlkZXIge1xuLy8gICBtYXJnaW4tbGVmdDogLTE0OXB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAuaW1hZ2VzbGlkZSB7XG4vLyAgIHdpZHRoOiAxMDhweCAhaW1wb3J0YW50O1xuLy8gICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuLy8gfVxuLy8gLmhvdGVsU21hbGxJbWcge1xuLy8gICBtYXJnaW4tdG9wOiAxMnB4O1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA5MHB4O1xuLy8gfVxuXG4uZHJlc3Mtc2xpZGUge1xuICAvLyBtYXJnaW4tcmlnaHQ6IC05NXB4O1xuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIC0yNXB4IC0zMHB4IC0yNXB4ICFpbXBvcnRhbnQ7XG59XG4uY29sLTEge1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cbi5kcmVzcy1zbGlkZTEge1xuICB3aWR0aDogMTc1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIC0xMHB4IDBweCAtMTBweCAhaW1wb3J0YW50O1xufVxuLmltYWdlNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE5ZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() {
        this.headerData = [];
        this.dress = [];
        this.slideOpts = {
            zoom: false
        };
    }
    ionViewWillEnter() {
        this.headerData = ['Dresses', 'Jersey', 'Pants'];
        this.dress = [{ image: '../assets/dresses/coats/download1.jpg', name: 'Winter Coat', price: '$12' },
            { image: '../assets/dresses/coats/download2.jpg', name: 'Woolen Coat', price: '$20' },
            { image: '../assets/dresses/coats/images.jpg', name: 'Long Coat', price: '$45' },
            { image: '../assets/dresses/coats/download4.jpg', name: 'Short Coat', price: '$40' },
            { image: '../assets/dresses/coats/download.jpg', name: 'Normal Coat', price: '$41' },
        ];
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map