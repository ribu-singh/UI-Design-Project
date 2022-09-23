(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"header\">\r\n      <ion-col class=\"user-image\">\r\n        <ion-icon class=\"icon\" name=\"chevron-back\" (click)=back()></ion-icon>\r\n      </ion-col>\r\n      <ion-col class=\"cart\">\r\n        <ion-icon name=\"cart\" class=\"icon\"></ion-icon>\r\n        <div class=\"count\">2</div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-slides>\r\n        <ion-slide>\r\n          <div class=\"slide\">\r\n            <ion-card class=\"card\">\r\n              <img class=\"image3\" src=\"../../assets/dresses/coats/images3.jpg\" />\r\n            </ion-card>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"slide\">\r\n            <ion-card class=\"card\">\r\n              <img class=\"image3\" src=\"../../assets/dresses/coats/images4.jpg\" />\r\n            </ion-card>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"slide\">\r\n            <ion-card class=\"card\">\r\n              <img class=\"image3\" src=\"../../assets/dresses/coats/images5.jpg\" />\r\n            </ion-card>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-card class=\"card1\">\r\n        <ion-row class=\"row1\">\r\n          <ion-col>\r\n            <div class=\"price\">\r\n              <h2 class=\"bold\">Winter Coat</h2>\r\n            </div>\r\n            <div class=\"price\">\r\n              $ 45\r\n            </div>\r\n            <div class=\"price\">\r\n              <b>Your Size</b>\r\n            </div>\r\n            <div class=\"size\">\r\n              <button class=\"count1\">S</button><button style=\"background: pink;\" class=\"count1\">M</button><button\r\n                class=\"count1\">L</button><button class=\"count1\">XL</button>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"colors1\">\r\n            <div class=\"colors\">\r\n              <button style=\"background: gray;\" class=\"count2\"></button>\r\n              <button style=\"background:pink\" class=\"count2\"></button>\r\n              <button style=\"background:brown;\" class=\"count2\"></button>\r\n              <button style=\"background: yellow;\" class=\"count2\"></button>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-1\">\r\n          <ion-col class=\"col-1\"><button class=\"button1\">Details</button></ion-col>\r\n          <ion-col class=\"col-1\"><button class=\"button1\">Order</button></ion-col>\r\n          <ion-col class=\"col-1\"> <button class=\"button1\">Payments</button></ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"price\">\r\n              <h4 class=\"bold\">Composition</h4>\r\n            </div>\r\n            <div class=\"price\">100% Polyester</div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div class=\"price1\">\r\n              <h4 class=\"bold\">Country</h4>\r\n            </div>\r\n            <div class=\"price2\">Ireland</div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <div class=\"price\">\r\n            <h4 class=\"bold\">Care</h4>\r\n          </div>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"row-2\">Follow the care label on your coat when you are cleaning and treat any stains promptly by\r\n            blotting. A majority wool blend coats can't be washed safely at home in a machinen and need to be taken to a\r\n            professional cleaner.</p>\r\n        </ion-row>\r\n        <ion-row>\r\n          <button class=\"count3\">\r\n           Add to Cart\r\n          </button>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product/product.component */
      "./src/app/product/product.component.ts");

      var routes = [{
        path: 'product',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/product/product.component.scss":
    /*!************************************************!*\
      !*** ./src/app/product/product.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  width: 26em;\n  height: 39em;\n}\n\n.image3 {\n  background-position: center center;\n  background: cover;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom: none;\n}\n\n.slide {\n  margin-top: -5%;\n}\n\n.count {\n  display: block;\n  position: absolute;\n  top: -6px;\n  right: 38px;\n  padding: 0 4px;\n  min-width: 20px;\n  text-align: center;\n  border: 1px solid #e7e7e9;\n  background: pink;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.03);\n  border-radius: 35px;\n  z-index: 1;\n  font-size: 11px;\n  line-height: 18px;\n  color: #6e6d7a;\n}\n\n.header {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  top: 4%;\n  margin-left: 2%;\n}\n\n.cart {\n  margin-left: 58%;\n}\n\n.icon {\n  zoom: 1.5;\n}\n\n.count1 {\n  display: block;\n  position: relative;\n  width: 17%;\n  margin: 1.7%;\n  padding: 0 4px;\n  min-width: 9px;\n  text-align: center;\n  border: 1px solid #e7e7e9;\n  background: white;\n  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 21%;\n  z-index: 1;\n  font-size: 13px;\n  line-height: 20px;\n  color: #6e6d7a;\n}\n\n.count1:focus {\n  background: pink;\n}\n\n.size {\n  display: flex;\n}\n\n.row1 {\n  width: 100%;\n}\n\n.price {\n  text-align: left;\n  margin: 0 0 10px 10px;\n  font-size: 16px;\n}\n\n.price1 {\n  margin: 0 10px 10px 10px;\n  text-align: right;\n}\n\n.price2 {\n  margin: 0px 25px 10px 10px;\n  text-align: right;\n  font-size: 20px;\n}\n\n.card1 {\n  width: 100%;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  z-index: 2;\n  margin-top: -60%;\n  height: 535px;\n}\n\n.count3 {\n  position: relative;\n  padding: 7px 20px 6px 20px;\n  outline: none;\n  width: 91%;\n  text-align: center;\n  border: 1px solid #e7e7e9;\n  background: brown;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.03);\n  border-radius: 33px;\n  z-index: 1;\n  margin: 16px 0px 0px 10px;\n  font-size: 17px;\n  line-height: 30px;\n  color: white;\n  box-sizing: border-box;\n}\n\n.count3:focus {\n  opacity: 0.5;\n}\n\n.colors {\n  display: grid;\n  margin-left: 72%;\n}\n\n.colors1 {\n  display: grid;\n}\n\n.count2 {\n  display: block;\n  position: relative;\n  margin: 6.7%;\n  width: 30px;\n  border: 1px solid #e7e7e9;\n  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 35px;\n  z-index: 1;\n  color: #6e6d7a;\n}\n\n.count2:focus {\n  border-radius: 30px;\n}\n\n.button1 {\n  border-radius: 33px;\n  margin: 5px;\n  text-align: center;\n  width: 105px;\n  background: #f3f3f4;\n  height: 42px;\n  color: #0d0c22;\n  outline: none;\n  font-size: 15px;\n  font-weight: 100;\n  line-height: 8px;\n}\n\n.button1:focus {\n  background: pink;\n}\n\n.col-1 {\n  width: 0%;\n}\n\n.row-1 {\n  margin-top: 10px;\n}\n\n.bold {\n  font-weight: 700;\n}\n\n.row-2 {\n  margin: -10px 4px 0px 11px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUdJLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLFNBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtBQVdKOztBQVRBO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFjSjs7QUFaRTtFQUNJLFlBQUE7QUFlTjs7QUFiQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGFBQUE7QUFpQko7O0FBZkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWhCQTtFQUNJLG1CQUFBO0FBbUJKOztBQWpCQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksZ0JBQUE7QUFxQko7O0FBbkJBO0VBQ0ksU0FBQTtBQXNCSjs7QUFwQkE7RUFDSSxnQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxnQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUF5QkoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogMjZlbTtcclxuICAgIGhlaWdodDogMzllbTtcclxufVxyXG4uaW1hZ2UzIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAyNWVtO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5zbGlkZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbn1cclxuLmNvdW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgcmlnaHQ6IDM4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTk7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogIzZlNmQ3YTtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuLmNhcnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU4JTtcclxufVxyXG4uaWNvbiB7XHJcbiAgICB6b29tOiAxLjU7XHJcbn1cclxuLmNvdW50MSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNyU7XHJcbiAgICBtYXJnaW46IDEuNyU7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIG1pbi13aWR0aDogOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlOTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjElO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM2ZTZkN2E7XHJcbn1cclxuLmNvdW50MTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xyXG59XHJcbi5zaXplIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJvdzEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByaWNlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnByaWNlMSB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ucHJpY2UyIHtcclxuICAgIG1hcmdpbjogMHB4IDI1cHggMTBweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNhcmQxIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi10b3A6IC02MCU7XHJcbiAgICBoZWlnaHQ6IDUzNXB4O1xyXG59XHJcbi5jb3VudDMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHggNnB4IDIwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDkxJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTk7XHJcbiAgICBiYWNrZ3JvdW5kOiBicm93bjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzM3B4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbjogMTZweCAwcHggMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5jb3VudDM6Zm9jdXN7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbi5jb2xvcnMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MiU7XHJcbn1cclxuLmNvbG9yczEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4uY291bnQyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA2LjclO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U5O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjb2xvcjogIzZlNmQ3YTtcclxufVxyXG4uY291bnQyOmZvY3VzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLmJ1dHRvbjEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzNweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmNDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGNvbG9yOiAjMGQwYzIyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogOHB4O1xyXG59XHJcbi5idXR0b24xOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbn1cclxuLmNvbC0xIHtcclxuICAgIHdpZHRoOiAwJTtcclxufVxyXG4ucm93LTEge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5yb3ctMiB7XHJcbiAgICBtYXJnaW46IC0xMHB4IDRweCAwcHggMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/product/product.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/product/product.component.ts ***!
      \**********************************************/

    /*! exports provided: ProductComponent */

    /***/
    function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
        return ProductComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProductComponent = /*#__PURE__*/function () {
        function ProductComponent(navControl) {
          _classCallCheck(this, ProductComponent);

          this.navControl = navControl;
          this.dres = [];
          this.dres = [{
            image: '../assets/dresses/coats/download (4).jpg'
          }, {
            image: '../assets/dresses/coats/download (2).jpg'
          }, {
            image: '../assets/dresses/coats/download (1).jpg'
          }];
        }

        _createClass(ProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navControl.pop();
          }
        }]);

        return ProductComponent;
      }();

      ProductComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./product.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./product.component.scss */
        "./src/app/product/product.component.scss"))["default"]]
      })], ProductComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\projects\ui-project\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map