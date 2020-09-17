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


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"es\">\n\n<head>\n    <title>Login V3</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!--===============================================================================================-->\n    <link rel=\"icon\" type=\"image/png\" href=\"images/icons/favicon.ico\" />\n\n</head>\n\n<body>\n\n    <div class=\"limiter\">\n        <div class=\"container-login100\" style=\"background-image: url('../assets/login/images/bg-01.jpg');\">\n            <div class=\"wrap-login100\">\n                <form class=\"login100-form validate-form\" ngNativeValidate>\n                    <span class=\"login100-form-logo\">\n\t\t\t\t\t\t<i class=\"zmdi zmdi-landscape\"></i>\n\t\t\t\t\t</span>\n\n                    <span class=\"login100-form-title p-b-34 p-t-27\">\n\t\t\t\t\t\tLog in\n                    </span>\n                    <br>\n\n                    <div class=\"wrap-input100 validate-input\" data-validate=\"Enter username\">\n                        <input class=\"input100\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Digite usuario o su Email\" autocomplete=\"off\">\n                        <span class=\"focus-input100\" data-placeholder=\"&#xf207;\"></span>\n                    </div>\n\n                    <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n                        <input class=\"input100\" type=\"password\" name=\"pass\" [(ngModel)]=\"user.password\" placeholder=\"Digite su Password\">\n                        <span class=\"focus-input100\" data-placeholder=\"&#xf191;\"></span>\n                    </div>\n\n                    <div class=\"contact100-form-checkbox\">\n                        <input [(ngModel)]=\"recuerdame\" class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                        <label class=\"label-checkbox100\" for=\"ckb1\">\n\t\t\t\t\t\t\tRecordarme\n\t\t\t\t\t\t</label>\n                    </div>\n                    <app-progress *ngIf=\"statussendform\"></app-progress>\n                    <div class=\"contact100-form-checkbox\">\n                        <a class=\"txt1\" href=\"#\">\n                                    Olvidaste tu contraseña?\n                                </a>\n                    </div>\n                    <div class=\"container-login100-form-btn\">\n                        <button class=\"login100-form-btn\" (click)=\"login()\">\n\t\t\t\t\t\t\tIngresar\n                        </button>\n\n                    </div>\n\n                    <br>\n                    <div class=\"text-center p-t-90\">\n                        <a class=\"txt1\" href=\"#\" [routerLink]=\"['/register']\">\n                               ¿No tienes una cuenta? Crea una cuenta <b>AQUÍ</b>\n                            </a>\n                    </div>\n\n                </form>\n            </div>\n        </div>\n    </div>\n\n\n    <div id=\"dropDownSelect1\"></div>\n\n\n\n</body>\n\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoryCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row  mb-5\">\n    <div class=\"col-sm-12 mb-4\">\n        <app-progress *ngIf=\"status\"></app-progress>\n    </div>\n    <div class=\"col-sm-6\">\n        <form ngNativeValidate>\n            <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Nombre categoría:</label>\n                <input type=\"text\" [(ngModel)]=\"category.name\" name=\"name\" class=\"form-control\" placeholder=\"Ingrese nombre de la categoría\" required>\n            </div>\n            <button type=\"submit\" (click)=\"createCategory()\" class=\"btn btn-success\" [disabled]=\"status\">Guardar</button>\n        </form>\n    </div>\n    <div class=\"col-sm-6\">\n\n        <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-search\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" (keyup)=\"search()\" [(ngModel)]=\"term\" placeholder=\"Ingrese termino de busqueda\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n        </div>\n\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Nombre</th>\n                    <th scope=\"col\">Fecha creación</th>\n                    <th scope=\"col\">::</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr app-categoryitem [item]=\"item\" *ngFor=\"let item of categories let i = index\" (canceleditevent)=\"canceledit()\" (editevent)=\"edit($event)\" (deleteevent)=\"delete($event)\">\n                </tr>\n                <tr *ngIf=\"categories.length === 0\" class=\"text-center\">\n                    <td colspan=\"3\">No hay registros</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"well\" *ngIf=\"pages.total > 1\">\n            <div class=\"btn-group\">\n                <button disabled class=\"btn btn-default\">Pág {{pages.current}} de {{pages.total}}</button>\n                <button disabled class=\"btn btn-default\">Items {{items.begin}} - {{items.end}} de {{items.total}}</button>\n            </div>\n            <br>\n            <div class=\"btn-group pull-right\">\n                <button class=\"btn btn-primary\" [disabled]=\"!pages.hasPrev\" (click)=\"prev()\">Anterior</button>\n                <button class=\"btn btn-info\" [disabled]=\"!pages.hasNext\" (click)=\"next()\"> Siguiente</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n\n    </div>\n</div>\n<simple-notifications></simple-notifications>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/categoryitem/categoryitem.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/categoryitem/categoryitem.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoryCategoryitemCategoryitemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<td *ngIf=\"!changed\">{{item.name}}</td>\n<td *ngIf=\"!changed\">{{item.createdAt | date:'medium' }}</td>\n<td *ngIf=\"!changed\">\n    <button class=\"btn btn-info btn-sm mr-2\" title=\"Actividades\" (click)=\"changed = !changed\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button>\n    <button class=\"btn btn-danger btn-sm\" title=\"Actividades\" (click)=\"delete(item)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n</td>\n\n<td *ngIf=\"changed\"><input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.name\" focus=\"true\"></td>\n<td *ngIf=\"changed\">{{item.createdAt | date:'medium' }}</td>\n<td *ngIf=\"changed\">\n    <button class=\"btn btn-info btn-sm mr-2\" title=\"Actividades\" (click)=\"edit()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i></button>\n    <button class=\"btn btn-danger btn-sm\" title=\"Actividades\" (click)=\"canceledit()\"><i class=\"far fa-times-circle\"></i></button>\n</td>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>dashboard works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGraficas1Graficas1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>graficas1 works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n    <app-sidebar></app-sidebar>\n    <!-- Content Wrapper -->\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n        <!-- Main Content -->\n        <div id=\"content\">\n            <app-header>\n            </app-header>\n            <div class=\"container-fluid\">\n                <app-brabcrumbs></app-brabcrumbs>\n                <!-- Page Content -->\n                <router-outlet></router-outlet>\n            </div>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>products works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-8 col-sm-12\">\n    <form ngNativeValidate (ngSubmit)=\"changePassword()\">\n        <div class=\"form-group row\">\n            <label for=\"l\" class=\"col-sm \">Email:</label>\n            <div class=\"col-sm\">\n                <input type=\"text\" readonly class=\"form-control-plaintext pl-2\" [(ngModel)]=\"user.email\" name=\"email\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"\" class=\"col-sm \">Nombre de usuario:</label>\n            <div class=\"col-sm\">\n                <input type=\"text\" readonly class=\"form-control-plaintext pl-2\" [(ngModel)]=\"user.username\" name=\"username\">\n            </div>\n        </div>\n        <hr>\n        <p class=\"text-center text-primary\"><b>Cambiar contraseña</b></p>\n        <div class=\"form-group row\">\n            <label for=\"\" class=\"col-sm \">Password actual:</label>\n            <div class=\"col-sm\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"datachangepass.oldpass\" name=\"oldpass\" placeholder=\"Password actual\" required>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"\" class=\"col-sm \">Nueva Password:</label>\n            <div class=\"col-sm\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"datachangepass.newpass\" name=\"newpass\" placeholder=\"Nueva Password\" required>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"\" class=\"col-sm \">Confirme Password:</label>\n            <div class=\"col-sm\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"datachangepass.confirmpass\" name=\"confirmpass\" placeholder=\"Confirme Password\" required>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success align-content-center\" [disabled]=\"loading\">\n                <i [ngClass]=\"{'fas fa-circle-notch fa-spin': loading,'':!loading}\"></i>\n            Guardar</button>\n    </form>\n    <simple-notifications></simple-notifications>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProgressProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"progress\" style=\"height: 10px;\">\n            <div class=\"progress-bar progress-bar-striped bg-info progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">Cargando ...</div>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <title>Login V3</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!--===============================================================================================-->\n    <link rel=\"icon\" type=\"image/png\" href=\"images/icons/favicon.ico\" />\n\n</head>\n\n<body>\n\n    <div class=\"limiter\">\n        <div class=\"container-login100\" style=\"background-image: url('../assets/login/images/bg-02.jpg');\">\n            <div class=\"wrap-login100\">\n                <form ngNativeValidate class=\"login100-form validate-form\">\n                    <span class=\"login100-form-title p-b-34 p-t-27\">\n\t\t\t\t\t\tCrear cuenta\n                    </span>\n                    <br>\n\n                    <div class=\"wrap-input100 validate-input\" data-validate=\"Enter compania\">\n                        <label class=\"label text-center\">{{errornamecompania}}</label>\n                        <input class=\"input100\" type=\"text\" name=\"namecompany\" [(ngModel)]=\"compania.name\" placeholder=\"Digite nombre de la empresa\" autocomplete=\"off\" required>\n                        <span class=\"focus-input100\" data-placeholder=\"&#xf36f;\"></span>\n                    </div>\n\n                    <div class=\"wrap-input100 validate-input\" data-validate=\"Enter username\">\n                        <label class=\"label text-center\">{{errorusername}}</label>\n                        <input class=\"input100\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Digite nombre de usuario\" autocomplete=\"off\">\n                        <span class=\"focus-input100\" data-placeholder=\"&#xf207;\"></span>\n                    </div>\n\n                    <div class=\"wrap-input100 validate-input\" data-validate=\"Enter email\">\n                        <label class=\"label text-center\">{{erroremail}}</label>\n                        <input class=\"input100\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Digite su Email\" autocomplete=\"off\" required>\n                        <span class=\"focus-input100\" data-placeholder=\"&#xf1fe;\"></span>\n                    </div>\n\n                    <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n                        <label class=\"label text-center\">{{errorpassword}}</label>\n                        <input class=\"input100\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Digite su Password\" required>\n                        <span class=\"focus-input100\" data-placeholder=\"&#xf191;\"></span>\n                    </div>\n\n                    <div class=\"text-center p-t-10\">\n                        <span style=\"color: rgb(90, 90, 90)\" class=\"small\"> Al guardar sus datos usted acepta nuestros terminos y condiciones</span>\n                    </div>\n                    <br>\n                    <div class=\"container-login100-form-btn\">\n\n                        <button class=\"login100-form-btn\" (click)=\"register()\" [disabled]=\"btndisabled\">  \n\t\t\t\t\t\t\tRegistrar\n\t\t\t\t\t\t</button>\n                    </div>\n                    <br>\n                    <div class=\"text-center p-t-90\">\n                        <a class=\"txt1\" href=\"#\" [routerLink]=\"['/login']\">\n                               ¿Ya tienes una cuenta? Inicia sesión <b>AQUÍ</b>\n                            </a>\n                    </div>\n\n                </form>\n                <app-progress *ngIf=\"statussendform\"></app-progress>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"dropDownSelect1\">\n\n    </div>\n\n</body>\n\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/brabcrumbs/brabcrumbs.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/brabcrumbs/brabcrumbs.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedBrabcrumbsBrabcrumbsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"#\" routerLink=\"/dashboard\">Inicio</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">{{titulo}}</li>\n        </ol>\n    </nav>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n    <!-- Sidebar Toggle (Topbar) -->\n    <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n\n    <!-- Topbar Search -->\n    <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-primary\" type=\"button\">\n            <i class=\"fas fa-search fa-sm\"></i>\n          </button>\n            </div>\n        </div>\n    </form>\n\n    <!-- Topbar Navbar -->\n    <ul class=\"navbar-nav ml-auto\">\n\n        <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n        <li class=\"nav-item dropdown no-arrow d-sm-none\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-search fa-fw\"></i>\n            </a>\n            <!-- Dropdown - Messages -->\n            <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\n                <form class=\"form-inline mr-auto w-100 navbar-search\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-primary\" type=\"button\">\n                  <i class=\"fas fa-search fa-sm\"></i>\n                </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </li>\n\n        <!-- Nav Item - Alerts -->\n        <li class=\"nav-item dropdown no-arrow mx-1\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-bell fa-fw\"></i>\n                <!-- Counter - Alerts -->\n                <span class=\"badge badge-danger badge-counter\">3+</span>\n            </a>\n            <!-- Dropdown - Alerts -->\n            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\">\n                <h6 class=\"dropdown-header\">\n                    Alerts Center\n                </h6>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"mr-3\">\n                        <div class=\"icon-circle bg-primary\">\n                            <i class=\"fas fa-file-alt text-white\"></i>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"small text-gray-500\">December 12, 2019</div>\n                        <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"mr-3\">\n                        <div class=\"icon-circle bg-success\">\n                            <i class=\"fas fa-donate text-white\"></i>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"small text-gray-500\">December 7, 2019</div>\n                        $290.29 has been deposited into your account!\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"mr-3\">\n                        <div class=\"icon-circle bg-warning\">\n                            <i class=\"fas fa-exclamation-triangle text-white\"></i>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"small text-gray-500\">December 2, 2019</div>\n                        Spending Alert: We've noticed unusually high spending for your account.\n                    </div>\n                </a>\n                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n            </div>\n        </li>\n\n        <!-- Nav Item - Messages -->\n        <li class=\"nav-item dropdown no-arrow mx-1\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-envelope fa-fw\"></i>\n                <!-- Counter - Messages -->\n                <span class=\"badge badge-danger badge-counter\">7</span>\n            </a>\n            <!-- Dropdown - Messages -->\n            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"messagesDropdown\">\n                <h6 class=\"dropdown-header\">\n                    Message Center\n                </h6>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"dropdown-list-image mr-3\">\n                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/fn_BT9fwg_E/60x60\" alt=\"\">\n                        <div class=\"status-indicator bg-success\"></div>\n                    </div>\n                    <div class=\"font-weight-bold\">\n                        <div class=\"text-truncate\">Hi there! I am wondering if you can help me with a problem I've been having.</div>\n                        <div class=\"small text-gray-500\">Emily Fowler · 58m</div>\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"dropdown-list-image mr-3\">\n                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/AU4VPcFN4LE/60x60\" alt=\"\">\n                        <div class=\"status-indicator\"></div>\n                    </div>\n                    <div>\n                        <div class=\"text-truncate\">I have the photos that you ordered last month, how would you like them sent to you?</div>\n                        <div class=\"small text-gray-500\">Jae Chun · 1d</div>\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"dropdown-list-image mr-3\">\n                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/CS2uCrpNzJY/60x60\" alt=\"\">\n                        <div class=\"status-indicator bg-warning\"></div>\n                    </div>\n                    <div>\n                        <div class=\"text-truncate\">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>\n                        <div class=\"small text-gray-500\">Morgan Alvarez · 2d</div>\n                    </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                    <div class=\"dropdown-list-image mr-3\">\n                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/Mv9hjnEUHR4/60x60\" alt=\"\">\n                        <div class=\"status-indicator bg-success\"></div>\n                    </div>\n                    <div>\n                        <div class=\"text-truncate\">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>\n                        <div class=\"small text-gray-500\">Chicken the Dog · 2w</div>\n                    </div>\n                </a>\n                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Read More Messages</a>\n            </div>\n        </li>\n\n        <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n        <!-- Nav Item - User Information -->\n        <li class=\"nav-item dropdown no-arrow\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\"><b>{{ loaddatauser.username }}</b></span>\n                <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\n            </a>\n            <!-- Dropdown - User Information -->\n            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n                <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/profile']\">\n                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i> Perfil\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i> Settings\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i> Activity Log\n                </a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i> Salir\n                </a>\n            </div>\n        </li>\n\n    </ul>\n\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNopagefoundNopagefoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"display-1\">404</h1>\n<p class=\"lead\">Page not found. You can\n    <a href=\"javascript:history.back()\">go back</a> to the previous page, or\n    <a href=\"index.html\">return home</a>.</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Sidebar -->\n<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n    <!-- Sidebar - Brand -->\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" [routerLink]=\"['/']\">\n        <div class=\"sidebar-brand-icon rotate-n-15\">\n            <i class=\"fas fa-store\"></i>\n        </div>\n        <div class=\"sidebar-brand-text mx-3\">{{ authservice.loaddatauser().namecompany }}<sup></sup></div>\n    </a>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\">\n\n    <!-- Nav Item - Dashboard -->\n    <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"index.html\">\n            <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n            <span>Dashboard</span></a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\" *ngFor=\"let menu of modules; index as i\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" attr.data-target=\"{{'#' + menu.name}}\" aria-expanded=\"true\">\n            <i class=\"{{menu.icon}}\"></i>\n            <span><b>{{menu.description}}</b></span>\n        </a>\n        <div [id]=\"menu.name\" class=\"collapse\" data-parent=\"#accordionSidebar\" style=\"color:cornsilk\">\n            <div class=\"py-2 collapse-inner rounded\">\n                <!-- <h6 class=\"collapse-header\">Custom Components:</h6> -->\n                <!-- *ngFor=\"let item of menu.submodules\" -->\n                <a *ngFor=\"let item of menu.submodules\" href=\"#\" class=\"collapse-item\" routerLinkActive=\"active\" [routerLink]=\"[ item.path ]\"><i class=\"fab fa-staylinked\"></i> {{item.name}}</a>\n            </div>\n        </div>\n    </li>\n\n    <!-- Nav Item - Utilities Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#oedo\" aria-expanded=\"true\" aria-controls=\"collapseUtilities1\">\n            <i class=\"fas fa-shopping-basket\"></i>\n            <span>Utilities</span>\n        </a>\n        <div id=\"oedo\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n                <h6 class=\"collapse-header\">Custom Utilities:</h6>\n                <a class=\"collapse-item\" href=\"utilities-color.html\">Colors</a>\n                <a class=\"collapse-item\" href=\"utilities-border.html\">Borders</a>\n                <a class=\"collapse-item\" href=\"utilities-animation.html\">Animations</a>\n                <a class=\"collapse-item\" href=\"utilities-other.html\">Other</a>\n            </div>\n        </div>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider\">\n\n    <!-- Heading -->\n    <div class=\"sidebar-heading\">\n        Addons\n    </div>\n\n    <!-- Nav Item - Pages Collapse Menu -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\n            <i class=\"fas fa-fw fa-folder\"></i>\n            <span>Pages</span>\n        </a>\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n            <div class=\"bg-white py-2 collapse-inner rounded\">\n                <h6 class=\"collapse-header\">Login Screens:</h6>\n                <a class=\"collapse-item\" href=\"login.html\">Login</a>\n                <a class=\"collapse-item\" href=\"register.html\">Register</a>\n                <a class=\"collapse-item\" href=\"forgot-password.html\">Forgot Password</a>\n                <div class=\"collapse-divider\"></div>\n                <h6 class=\"collapse-header\">Other Pages:</h6>\n                <a class=\"collapse-item\" href=\"404.html\">404 Page</a>\n                <a class=\"collapse-item\" href=\"blank.html\">Blank Page</a>\n            </div>\n        </div>\n    </li>\n\n    <!-- Nav Item - Charts -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"charts.html\">\n            <i class=\"fas fa-fw fa-chart-area\"></i>\n            <span>Charts</span></a>\n    </li>\n\n    <!-- Nav Item - Tables -->\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"tables.html\">\n            <i class=\"fas fa-fw fa-table\"></i>\n            <span>Tables</span></a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider d-none d-md-block\">\n\n    <!-- Sidebar Toggler (Sidebar) -->\n    <div class=\"text-center d-none d-md-inline\">\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n    </div>\n\n</ul>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'bubuk-front';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/pages.module */
    "./src/app/pages/pages.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_service_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/service.module */
    "./src/app/services/service.module.ts");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/locales/es */
    "./node_modules/@angular/common/locales/es.js");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // rutas
    //modulos


    Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_10___default.a);
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routes__WEBPACK_IMPORTED_MODULE_3__["appRouting"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _services_service_module__WEBPACK_IMPORTED_MODULE_9__["ServiceModule"]],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
        useValue: 'es'
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: appRouting */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRouting", function () {
      return appRouting;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/nopagefound/nopagefound.component */
    "./src/app/shared/nopagefound/nopagefound.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    const routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      data: {
        titulo: "Login"
      }
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
      data: {
        titulo: "Registro"
      }
    }, {
      path: '**',
      component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_3__["NopagefoundComponent"]
    }];

    const appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
      useHash: true
    });
    /***/

  },

  /***/
  "./src/app/config/config.ts":
  /*!**********************************!*\
    !*** ./src/app/config/config.ts ***!
    \**********************************/

  /*! exports provided: URL_API */

  /***/
  function srcAppConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_API", function () {
      return URL_API;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    const URL_API = "http://159.89.86.11:3001/api";
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*//////////////////////////////////////////////////////////////////\n[ FONT ]*/\n@font-face {\n  font-family: Poppins-Regular;\n  src: url('Poppins-Regular.ttf');\n}\n@font-face {\n  font-family: Poppins-Medium;\n  src: url('Poppins-Medium.ttf');\n}\n@font-face {\n  font-family: Poppins-Bold;\n  src: url('Poppins-Bold.ttf');\n}\n@font-face {\n  font-family: Poppins-SemiBold;\n  src: url('Poppins-SemiBold.ttf');\n}\n/*//////////////////////////////////////////////////////////////////\n  [ RESTYLE TAG ]*/\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  font-family: Poppins-Regular, sans-serif;\n}\n/*---------------------------------------------*/\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n  color: #fff;\n}\n/*---------------------------------------------*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\nul,\nli {\n  margin: 0px;\n  list-style-type: none;\n}\n/*---------------------------------------------*/\ninput {\n  outline: none;\n  border: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus,\ninput:focus {\n  border-color: transparent !important;\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\ninput::-webkit-input-placeholder {\n  color: #fff;\n}\ninput:-moz-placeholder {\n  color: #fff;\n}\ninput::-moz-placeholder {\n  color: #fff;\n}\ninput:-ms-input-placeholder {\n  color: #fff;\n}\ntextarea::-webkit-input-placeholder {\n  color: #fff;\n}\ntextarea:-moz-placeholder {\n  color: #fff;\n}\ntextarea::-moz-placeholder {\n  color: #fff;\n}\ntextarea:-ms-input-placeholder {\n  color: #fff;\n}\nlabel {\n  margin: 0;\n  display: block;\n}\n/*---------------------------------------------*/\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent;\n}\nbutton:hover {\n  cursor: pointer;\n}\niframe {\n  border: none !important;\n}\n/*//////////////////////////////////////////////////////////////////\n  [ Utility ]*/\n.txt1 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #e5e5e5;\n  line-height: 1.5;\n}\n/*//////////////////////////////////////////////////////////////////\n  [ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  z-index: 1;\n}\n.container-login100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.267);\n}\n.wrap-login100 {\n  width: 500px;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 55px 55px 37px 55px;\n  background: #049bf1;\n}\n/*------------------------------------------------------------------\n  [ Form ]*/\n.login100-form {\n  width: 100%;\n}\n.login100-form-logo {\n  font-size: 60px;\n  color: #333333;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #fff;\n  margin: 0 auto;\n}\n.login100-form-title {\n  font-family: Poppins-Medium;\n  font-size: 30px;\n  color: #fff;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n  display: block;\n}\n/*------------------------------------------------------------------\n  [ Input ]*/\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.24);\n  margin-bottom: 30px;\n}\n.input100 {\n  font-family: Poppins-Regular;\n  font-size: 16px;\n  color: #fff;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px 0 38px;\n}\n/*---------------------------------------------*/\n.focus-input100 {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.focus-input100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  background: #fff;\n}\n.focus-input100::after {\n  font-family: Material-Design-Iconic-Font;\n  font-size: 22px;\n  color: #fff;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  padding-left: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.input100:focus {\n  padding-left: 5px;\n}\n.input100:focus + .focus-input100::after {\n  top: -22px;\n  font-size: 18px;\n}\n.input100:focus + .focus-input100::before {\n  width: 100%;\n}\n.has-val.input100 + .focus-input100::after {\n  top: -22px;\n  font-size: 18px;\n}\n.has-val.input100 + .focus-input100::before {\n  width: 100%;\n}\n.has-val.input100 {\n  padding-left: 5px;\n}\n/*==================================================================\n  [ Restyle Checkbox ]*/\n.contact100-form-checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n  padding-bottom: 35px;\n}\n.input-checkbox100 {\n  display: none;\n}\n.label-checkbox100 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #fff;\n  line-height: 1.2;\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  cursor: pointer;\n}\n.label-checkbox100::before {\n  content: \"\";\n  font-family: Material-Design-Iconic-Font;\n  font-size: 13px;\n  color: transparent;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  background: #fff;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #555555;\n}\n/*------------------------------------------------------------------\n  [ Button ]*/\n.container-login100-form-btn {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.login100-form-btn {\n  font-family: Poppins-Medium;\n  font-size: 16px;\n  color: #555555;\n  line-height: 1.2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 20px;\n  min-width: 120px;\n  height: 50px;\n  border-radius: 25px;\n  background: #373638;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.login100-form-btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.login100-form-btn:hover {\n  color: #fff;\n}\n.login100-form-btn:hover:before {\n  opacity: 0;\n}\n/*------------------------------------------------------------------\n  [ Responsive ]*/\n@media (max-width: 576px) {\n  .wrap-login100 {\n    padding: 55px 15px 37px 15px;\n  }\n}\n/*------------------------------------------------------------------\n  [ Alert validate ]*/\n.validate-input {\n  position: relative;\n}\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: #fff;\n  border: 1px solid #c80000;\n  border-radius: 2px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0px;\n  pointer-events: none;\n  font-family: Poppins-Regular;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.4s;\n  transition: opacity 0.4s;\n}\n.alert-validate::after {\n  content: \"\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #c80000;\n  display: block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 5px;\n}\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1;\n}\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9qdWFuL0RvY3VtZW50b3MvZmluZS1mcm9udGVkL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO1NBQUE7QUFHQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QURDSjtBQ0VBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBREFKO0FDR0E7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FEREo7QUNJQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QURGSjtBQ01BO2tCQUFBO0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FETEo7QUNRQTs7RUFFSSxZQUFBO0VBQ0Esd0NBQUE7QURMSjtBQ1NBLGdEQUFBO0FBRUE7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QURQSjtBQ1VBO0VBQ0ksd0JBQUE7QURQSjtBQ1VBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FEUEo7QUNXQSxnREFBQTtBQUVBOzs7Ozs7RUFNSSxXQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QURUSjtBQ1lBOztFQUVJLFdBQUE7RUFDQSxxQkFBQTtBRFRKO0FDYUEsZ0RBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEWEo7QUNjQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEWEo7QUNjQTs7RUFFSSxvQ0FBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxXQUFBO0FEWEo7QUNjQTtFQUNJLFdBQUE7QURYSjtBQ2NBO0VBQ0ksV0FBQTtBRFhKO0FDY0E7RUFDSSxXQUFBO0FEWEo7QUNjQTtFQUNJLFdBQUE7QURYSjtBQ2NBO0VBQ0ksV0FBQTtBRFhKO0FDY0E7RUFDSSxXQUFBO0FEWEo7QUNjQTtFQUNJLFdBQUE7QURYSjtBQ2NBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QURYSjtBQ2VBLGdEQUFBO0FBRUE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBRGJKO0FDZ0JBO0VBQ0ksZUFBQTtBRGJKO0FDZ0JBO0VBQ0ksdUJBQUE7QURiSjtBQ2lCQTtjQUFBO0FBR0E7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURmSjtBQ21CQTtZQUFBO0FBR0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBRGpCSjtBQ29CQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBSUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURqQko7QUNvQkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw0Q0FBQTtBRGpCSjtBQ29CQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBRGpCSjtBQ3FCQTtXQUFBO0FBR0E7RUFDSSxXQUFBO0FEbkJKO0FDc0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUlBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QURuQko7QUNzQkE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRG5CSjtBQ3VCQTtZQUFBO0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0FEckJKO0FDd0JBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBRHJCSjtBQ3lCQSxnREFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0FEdkJKO0FDMEJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUdBLG9CQUFBO0VBQ0EsZ0JBQUE7QUR2Qko7QUMwQkE7RUFDSSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBR0Esb0JBQUE7QUR2Qko7QUMwQkE7RUFDSSxpQkFBQTtBRHZCSjtBQzBCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FEdkJKO0FDMEJBO0VBQ0ksV0FBQTtBRHZCSjtBQzBCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FEdkJKO0FDMEJBO0VBQ0ksV0FBQTtBRHZCSjtBQzBCQTtFQUNJLGlCQUFBO0FEdkJKO0FDMkJBO3VCQUFBO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUR6Qko7QUM0QkE7RUFDSSxhQUFBO0FEekJKO0FDNEJBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEekJKO0FDNEJBO0VBQ0ksWUFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFJQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFJQSwyQkFBQTtBRHpCSjtBQzRCQTtFQUNJLGNBQUE7QUR6Qko7QUM2QkE7YUFBQTtBQUdBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FEM0JKO0FDOEJBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFJQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBR0Esb0JBQUE7QUQzQko7QUM4QkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBR0Esb0JBQUE7QUQzQko7QUM4QkE7RUFDSSxXQUFBO0FEM0JKO0FDOEJBO0VBQ0ksVUFBQTtBRDNCSjtBQytCQTtpQkFBQTtBQUdBO0VBQ0k7SUFDSSw0QkFBQTtFRDdCTjtBQUNGO0FDaUNBO3FCQUFBO0FBR0E7RUFDSSxrQkFBQTtBRGhDSjtBQ21DQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFJQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFHQSx3QkFBQTtBRGhDSjtBQ21DQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO0VBSUEsMkJBQUE7RUFDQSxVQUFBO0FEaENKO0FDbUNBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FEaENKO0FDbUNBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLFVBQUE7RURoQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgRk9OVCBdKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtTWVkaXVtLnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUG9wcGlucy1Cb2xkO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtQm9sZC50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZC50dGZcIik7XG59XG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBbIFJFU1RZTEUgVEFHIF0qL1xuKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyLCBzYW5zLXNlcmlmO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5hIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbnVsLFxubGkge1xuICBtYXJnaW46IDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxudGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxubGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgVXRpbGl0eSBdKi9cbi50eHQxIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgWyBsb2dpbiBdKi9cbi5saW1pdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjY3KTtcbn1cblxuLndyYXAtbG9naW4xMDAge1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDU1cHggNTVweCAzN3B4IDU1cHg7XG4gIGJhY2tncm91bmQ6ICMwNDliZjE7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgRm9ybSBdKi9cbi5sb2dpbjEwMC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWxvZ28ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIElucHV0IF0qL1xuLndyYXAtaW5wdXQxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmlucHV0MTAwIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDVweCAwIDM4cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb2N1cy1pbnB1dDEwMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uaW5wdXQxMDA6Zm9jdXMge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gIHRvcDogLTIycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhhcy12YWwuaW5wdXQxMDAgKyAuZm9jdXMtaW5wdXQxMDA6OmFmdGVyIHtcbiAgdG9wOiAtMjJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGFzLXZhbC5pbnB1dDEwMCArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtdmFsLmlucHV0MTAwIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFsgUmVzdHlsZSBDaGVja2JveCBdKi9cbi5jb250YWN0MTAwLWZvcm0tY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG5cbi5pbnB1dC1jaGVja2JveDEwMCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbC1jaGVja2JveDEwMCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74mrXCI7XG4gIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pbnB1dC1jaGVja2JveDEwMDpjaGVja2VkICsgLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgWyBCdXR0b24gXSovXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMzNzM2Mzg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIFJlc3BvbnNpdmUgXSovXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLndyYXAtbG9naW4xMDAge1xuICAgIHBhZGRpbmc6IDU1cHggMTVweCAzN3B4IDE1cHg7XG4gIH1cbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgQWxlcnQgdmFsaWRhdGUgXSovXG4udmFsaWRhdGUtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4MDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA0cHggMjVweCA0cHggMTBweDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBjb2xvcjogI2M4MDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+EqlwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNjODAwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICByaWdodDogNXB4O1xufVxuXG4uYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBGT05UIF0qL1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4vZm9udHMvcG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1NZWRpdW0udHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLUJvbGQ7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQudHRmJyk7XG59XG5cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgWyBSRVNUWUxFIFRBRyBdKi9cblxuKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmEge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG5hOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbnVsLFxubGkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmlucHV0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxudGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5sYWJlbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaWZyYW1lIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBbIFV0aWxpdHkgXSovXG5cbi50eHQxIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogI2U1ZTVlNTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgbG9naW4gXSovXG5cbi5saW1pdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjY3KTtcbn1cblxuLndyYXAtbG9naW4xMDAge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNTVweCA1NXB4IDM3cHggNTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDQ5YmYxO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgRm9ybSBdKi9cblxuLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4xMDAtZm9ybS1sb2dvIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIElucHV0IF0qL1xuXG4ud3JhcC1pbnB1dDEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pbnB1dDEwMCB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMCA1cHggMCAzOHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmZvY3VzLWlucHV0MTAwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZm9jdXMtaW5wdXQxMDA6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5mb2N1cy1pbnB1dDEwMDo6YWZ0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5pbnB1dDEwMDpmb2N1cyB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5pbnB1dDEwMDpmb2N1cysuZm9jdXMtaW5wdXQxMDA6OmFmdGVyIHtcbiAgICB0b3A6IC0yMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0MTAwOmZvY3VzKy5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhhcy12YWwuaW5wdXQxMDArLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gICAgdG9wOiAtMjJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oYXMtdmFsLmlucHV0MTAwKy5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhhcy12YWwuaW5wdXQxMDAge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFsgUmVzdHlsZSBDaGVja2JveCBdKi9cblxuLmNvbnRhY3QxMDAtZm9ybS1jaGVja2JveCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cblxuLmlucHV0LWNoZWNrYm94MTAwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFiZWwtY2hlY2tib3gxMDAge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMjZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjI2YlwiO1xuICAgIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pbnB1dC1jaGVja2JveDEwMDpjaGVja2VkKy5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcbiAgICBjb2xvcjogIzU1NTU1NTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIEJ1dHRvbiBdKi9cblxuLmNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0biB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzU1NTU1NTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogIzM3MzYzODtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXI6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgUmVzcG9uc2l2ZSBdKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgLndyYXAtbG9naW4xMDAge1xuICAgICAgICBwYWRkaW5nOiA1NXB4IDE1cHggMzdweCAxNXB4O1xuICAgIH1cbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIEFsZXJ0IHZhbGlkYXRlIF0qL1xuXG4udmFsaWRhdGUtaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWxpZGF0ZSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4MDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogNHB4IDI1cHggNHB4IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgICBjb2xvcjogI2M4MDAwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMTJhXCI7XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2M4MDAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHJpZ2h0OiA1cHg7XG59XG5cbi5hbGVydC12YWxpZGF0ZTpob3ZlcjpiZWZvcmUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _services_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/services.index */
    "./src/app/services/services.index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    let LoginComponent = class LoginComponent {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.recuerdame = false;
        this.statussendform = false;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
      }

      ngOnInit() {
        this.email = localStorage.getItem('remember') || '';
        this.user.username = this.email;

        if (this.email.length > 1) {
          this.recuerdame = true;
        }

        if (this.auth.isLogin()) {
          this.router.navigate(['/dashboard']);
        }
      }

      login() {
        this.statussendform = true;
        this.auth.login(this.user, this.recuerdame).subscribe(esponse => {
          this.statussendform = false;
          this.router.navigate(['/dashboard']);
        }, err => {
          if (err.status === 401) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error!', 'Su contraseña o usuario no son correctas', 'error');
          }

          this.statussendform = false;
        });
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _services_services_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_services_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/models/acoount.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/acoount.model.ts ***!
    \*****************************************/

  /*! exports provided: AccountModel */

  /***/
  function srcAppModelsAcoountModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModel", function () {
      return AccountModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class AccountModel {
      constructor() {
        this.id = 0;
      }

    }
    /***/

  },

  /***/
  "./src/app/models/compania.model.ts":
  /*!******************************************!*\
    !*** ./src/app/models/compania.model.ts ***!
    \******************************************/

  /*! exports provided: CompaniaModel */

  /***/
  function srcAppModelsCompaniaModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniaModel", function () {
      return CompaniaModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class CompaniaModel {
      constructor() {
        this.id = 0;
      }

    }
    /***/

  },

  /***/
  "./src/app/models/user.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/user.model.ts ***!
    \**************************************/

  /*! exports provided: UserModel */

  /***/
  function srcAppModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModel", function () {
      return UserModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class UserModel {}
    /***/

  },

  /***/
  "./src/app/pages/category/category.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/category/category.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoryCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/category/category.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/category/category.component.ts ***!
    \******************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppPagesCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/product/product.service */
    "./src/app/services/product/product.service.ts");
    /* harmony import */


    var src_app_services_notifi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/notifi.service */
    "./src/app/services/notifi.service.ts");
    /* harmony import */


    var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/services.index */
    "./src/app/services/services.index.ts");

    let CategoryComponent = class CategoryComponent {
      constructor(productoservices, noti, auth) {
        this.productoservices = productoservices;
        this.noti = noti;
        this.auth = auth;
        this.category = {};
        this.categories = [];
        this.filters = {};
        this.term = "";
        this.items = {};
        this.pages = {};
        this.status = false;
        this.getAllCategory();
      }

      ngOnInit() {}

      createCategory() {
        if (!this.category.name) {
          return;
        }

        this.status = true;
        this.productoservices.createCategory(this.category).then(result => {
          if (result.success) {
            this.getAllCategory();
            this.category = {};
            this.noti.onSuccess("Categoria registrada con éxito");
          } else {
            if (result.errors) {
              this.noti.onWarning(result.errors[0]);
            }
          }

          this.status = false;
        }, err => {
          this.status = false;

          if (err.status == 401) {
            this.noti.onError("Algo salió mal");
            this.auth.logout();
          }
        });
      }

      getAllCategory() {
        this.status = true;
        this.productoservices.getAllCaterory(this.filters).then(result => {
          if (result.success) {
            this.fillData(result.result);
          } else {
            if (result.errors) {
              this.noti.onWarning("No se puede acceder a las categorias: " + result.errors[0]);
            }
          }

          this.status = false;
        }, err => {
          this.status = false;
          console.log("error lista de categorias");
        });
      }

      search() {
        if (this.term === "") {
          this.filters.search = "";
          this.getAllCategory();
          return;
        }

        if (this.term.length > 2) {
          this.filters.search = this.term;
          this.getAllCategory();
        }
      }

      canceledit() {
        this.getAllCategory();
      }

      edit(data) {
        this.productoservices.EditCategory(data).then(res => {
          console.log(res);

          if (res.success) {
            this.noti.onSuccess("Categoría editada con éxito");
          } else {
            if (res.errors) {
              this.noti.onWarning(res.errors[0]);
            }
          }
        }, err => {
          console.log(err);
        });
      }

      delete(data) {
        this.productoservices.deleteCategory(data).then(res => {
          if (res.success) {
            this.noti.onSuccess("Categoría eliminada con éxito!");
            this.getAllCategory();
          } else {
            if (res.errors) {
              this.noti.onWarning(res.errors[0]);
            }
          }
        }, err => {
          console.log(err);
        });
      }

      fillData(category) {
        this.categories = category.data;
        this.filters = category.filters;
        this.items = category.items;
        this.pages = category.pages;
      }

      prev() {
        this.filters.page = this.pages.prev;
        this.getAllCategory();
      }

      next() {
        this.filters.page = this.pages.next;
        this.getAllCategory();
      }

    };

    CategoryComponent.ctorParameters = () => [{
      type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
    }, {
      type: src_app_services_notifi_service__WEBPACK_IMPORTED_MODULE_3__["NotifiService"]
    }, {
      type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }];

    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-category",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.component.scss */
      "./src/app/pages/category/category.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], src_app_services_notifi_service__WEBPACK_IMPORTED_MODULE_3__["NotifiService"], src_app_services_services_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], CategoryComponent);
    /***/
  },

  /***/
  "./src/app/pages/category/categoryitem/categoryitem.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/category/categoryitem/categoryitem.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CategoryitemComponent */

  /***/
  function srcAppPagesCategoryCategoryitemCategoryitemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryitemComponent", function () {
      return CategoryitemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);

    let CategoryitemComponent = class CategoryitemComponent {
      constructor() {
        this.item = {};
        this.canceleditevent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editevent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteevent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = false;
      }

      ngOnInit() {}

      changedRow() {
        this.changed = true;
      }

      canceledit() {
        this.changed = false;
        this.canceleditevent.emit();
      }

      edit() {
        this.changed = false;
        this.editevent.emit(this.item);
      }

      delete(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
          title: 'Eliminar categoría',
          text: "¿Está seguro de eliminar: " + item.name + "?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar!',
          cancelButtonText: 'Cancelar'
        }).then(result => {
          if (result.value) {
            this.changed = false;
            this.deleteevent.emit(this.item);
          }
        });
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryitemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryitemComponent.prototype, "canceleditevent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryitemComponent.prototype, "editevent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryitemComponent.prototype, "deleteevent", void 0);
    CategoryitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[app-categoryitem]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categoryitem.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/categoryitem/categoryitem.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoryitemComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DashboardComponent = class DashboardComponent {
      constructor() {
        document.body.scrollTop = 0;
        console.log("yes");
      }

      ngOnInit() {}

    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/graficas1/graficas1.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/graficas1/graficas1.component.ts ***!
    \********************************************************/

  /*! exports provided: Graficas1Component */

  /***/
  function srcAppPagesGraficas1Graficas1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Graficas1Component", function () {
      return Graficas1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let Graficas1Component = class Graficas1Component {
      constructor() {}

      ngOnInit() {}

    };
    Graficas1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-graficas1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./graficas1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Graficas1Component);
    /***/
  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PagesComponent = class PagesComponent {
      constructor() {}

      ngOnInit() {}

    };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PagesComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/pages/progress/progress.component.ts");
    /* harmony import */


    var _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./graficas1/graficas1.component */
    "./src/app/pages/graficas1/graficas1.component.ts");
    /* harmony import */


    var _pages_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages.routes */
    "./src/app/pages/pages.routes.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/angular2-notifications.umd.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/pages/products/products.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/pages/category/category.component.ts");
    /* harmony import */


    var _category_categoryitem_categoryitem_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./category/categoryitem/categoryitem.component */
    "./src/app/pages/category/categoryitem/categoryitem.component.ts");
    /* harmony import */


    var angular2_focus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angular2-focus */
    "./node_modules/angular2-focus/dist/angular2-focus.js"); // para if , for etc


    let PagesModule = class PagesModule {};
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_7__["ProgressComponent"], _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_8__["Graficas1Component"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_16__["CategoryComponent"], _category_categoryitem_categoryitem_component__WEBPACK_IMPORTED_MODULE_17__["CategoryitemComponent"]],
      exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_7__["ProgressComponent"], _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_8__["Graficas1Component"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _pages_routes__WEBPACK_IMPORTED_MODULE_9__["PAGES_ROUTES"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_13__["SimpleNotificationsModule"].forRoot({
        position: ["top", "center"]
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], angular2_focus__WEBPACK_IMPORTED_MODULE_18__["FocusModule"].forRoot()]
    })], PagesModule);
    /***/
  },

  /***/
  "./src/app/pages/pages.routes.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.routes.ts ***!
    \***************************************/

  /*! exports provided: PAGES_ROUTES */

  /***/
  function srcAppPagesPagesRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function () {
      return PAGES_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/pages/progress/progress.component.ts");
    /* harmony import */


    var _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./graficas1/graficas1.component */
    "./src/app/pages/graficas1/graficas1.component.ts");
    /* harmony import */


    var _services_services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/services.index */
    "./src/app/services/services.index.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/pages/products/products.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/pages/category/category.component.ts");

    const pagesRoutes = [{
      path: "",
      component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
      canActivate: [_services_services_index__WEBPACK_IMPORTED_MODULE_6__["LoginGuardGuard"]],
      children: [{
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
          titulo: "Dashboard"
        }
      }, {
        path: "products",
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
        data: {
          titulo: "Productos"
        }
      }, {
        path: "category",
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
        data: {
          titulo: "Categorias"
        }
      }, {
        path: "progress",
        component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_4__["ProgressComponent"],
        data: {
          titulo: "Progress"
        }
      }, {
        path: "grafica1",
        component: _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_5__["Graficas1Component"],
        data: {
          titulo: "Gráficas"
        }
      }, {
        path: "profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        data: {
          titulo: "Perfil de usuario"
        }
      }, {
        path: "",
        pathMatch: "full",
        redirectTo: "/dashboard"
      }]
    }];

    const PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pagesRoutes);
    /***/

  },

  /***/
  "./src/app/pages/products/products.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/products/products.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/products/products.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/products/products.component.ts ***!
    \******************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppPagesProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProductsComponent = class ProductsComponent {
      constructor() {}

      ngOnInit() {}

    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/pages/products/products.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.index */
    "./src/app/services/services.index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var src_app_services_notifi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/notifi.service */
    "./src/app/services/notifi.service.ts");

    let ProfileComponent = class ProfileComponent {
      constructor(authservice, router, userservice, _noti) {
        this.authservice = authservice;
        this.router = router;
        this.userservice = userservice;
        this._noti = _noti;
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
        this.datachangepass = {};
        this.loading = false; // if(!this.authservice.isLogin()){
        //   this.router.navigate(['/login']);
        // }

        this.getProfileUSer();
      }

      ngOnInit() {}

      getProfileUSer() {
        this.userservice.getprofile().then(resp => {
          this.user = resp.user;
        }, err => {
          console.log("quepaso");
        });
      }

      changePassword() {
        this.loading = true;
        console.log(this.datachangepass);
        this.userservice.changePassword(this.datachangepass).then(resp => {
          if (resp.success) {
            this._noti.onSuccess("Contraseña actualizada con éxito");

            this.datachangepass = {};
          } else {
            if (resp.errors) {
              this._noti.onWarning(resp.errors[0]);
            }

            if (Object.keys(resp.errfor).length !== 0) {
              this._noti.onWarning(resp.errfor[0]);
            }
          }

          this.loading = false;
        }, err => {
          this._noti.onError("error :" + err);
        });
      }

    };

    ProfileComponent.ctorParameters = () => [{
      type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["UserService"]
    }, {
      type: src_app_services_notifi_service__WEBPACK_IMPORTED_MODULE_5__["NotifiService"]
    }];

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_services_notifi_service__WEBPACK_IMPORTED_MODULE_5__["NotifiService"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/progress/progress.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/progress/progress.component.ts ***!
    \******************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcAppPagesProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProgressComponent = class ProgressComponent {
      constructor() {}

      ngOnInit() {}

    };
    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProgressComponent);
    /***/
  },

  /***/
  "./src/app/pipes/imagen.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/imagen.pipe.ts ***!
    \**************************************/

  /*! exports provided: ImagenPipe */

  /***/
  function srcAppPipesImagenPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagenPipe", function () {
      return ImagenPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ImagenPipe = class ImagenPipe {
      transform(value, ...args) {
        return "funciona";
      }

    };
    ImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'imagen'
    })], ImagenPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _imagen_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./imagen.pipe */
    "./src/app/pipes/imagen.pipe.ts");

    let PipesModule = class PipesModule {};
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"]],
      imports: [],
      exports: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/register/register.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/register/register.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*//////////////////////////////////////////////////////////////////\n[ FONT ]*/\n@font-face {\n  font-family: Poppins-Regular;\n  src: url('Poppins-Regular.ttf');\n}\n@font-face {\n  font-family: Poppins-Medium;\n  src: url('Poppins-Medium.ttf');\n}\n@font-face {\n  font-family: Poppins-Bold;\n  src: url('Poppins-Bold.ttf');\n}\n@font-face {\n  font-family: Poppins-SemiBold;\n  src: url('Poppins-SemiBold.ttf');\n}\n/*//////////////////////////////////////////////////////////////////\n  [ RESTYLE TAG ]*/\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  font-family: Poppins-Regular, sans-serif;\n}\n/*---------------------------------------------*/\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n  color: #fff;\n}\n/*---------------------------------------------*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\nul,\nli {\n  margin: 0px;\n  list-style-type: none;\n}\n/*---------------------------------------------*/\ninput {\n  outline: none;\n  border: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus,\ninput:focus {\n  border-color: transparent !important;\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\ninput::-webkit-input-placeholder {\n  color: #fff;\n}\ninput:-moz-placeholder {\n  color: #fff;\n}\ninput::-moz-placeholder {\n  color: #fff;\n}\ninput:-ms-input-placeholder {\n  color: #fff;\n}\ntextarea::-webkit-input-placeholder {\n  color: #fff;\n}\ntextarea:-moz-placeholder {\n  color: #fff;\n}\ntextarea::-moz-placeholder {\n  color: #fff;\n}\ntextarea:-ms-input-placeholder {\n  color: #fff;\n}\nlabel {\n  margin: 0;\n  display: block;\n  color: #ce3b31;\n  font-family: Poppins-Regular;\n  font-size: 15px;\n  line-height: 1.5;\n}\n/*---------------------------------------------*/\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent;\n}\nbutton:hover {\n  cursor: pointer;\n}\niframe {\n  border: none !important;\n}\n/*//////////////////////////////////////////////////////////////////\n  [ Utility ]*/\n.txt1 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #e5e5e5;\n  line-height: 1.5;\n}\n/*//////////////////////////////////////////////////////////////////\n  [ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  z-index: 1;\n}\n.container-login100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.267);\n}\n.wrap-login100 {\n  width: 500px;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 55px 55px 37px 55px;\n  background: #049bf1;\n}\n/*------------------------------------------------------------------\n  [ Form ]*/\n.login100-form {\n  width: 100%;\n}\n.login100-form-logo {\n  font-size: 60px;\n  color: #333333;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #fff;\n  margin: 0 auto;\n}\n.login100-form-title {\n  font-family: Poppins-Medium;\n  font-size: 30px;\n  color: #fff;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n  display: block;\n}\n/*------------------------------------------------------------------\n  [ Input ]*/\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.24);\n  margin-bottom: 30px;\n}\n.input100 {\n  font-family: Poppins-Regular;\n  font-size: 16px;\n  color: #fff;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px 0 38px;\n}\n/*---------------------------------------------*/\n.focus-input100 {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.focus-input100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  background: #fff;\n}\n.focus-input100::after {\n  font-family: Material-Design-Iconic-Font;\n  font-size: 22px;\n  color: #fff;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  padding-left: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.input100:focus {\n  padding-left: 5px;\n}\n.input100:focus + .focus-input100::after {\n  top: -22px;\n  font-size: 18px;\n}\n.input100:focus + .focus-input100::before {\n  width: 100%;\n}\n.has-val.input100 + .focus-input100::after {\n  top: -22px;\n  font-size: 18px;\n}\n.has-val.input100 + .focus-input100::before {\n  width: 100%;\n}\n.has-val.input100 {\n  padding-left: 5px;\n}\n/*==================================================================\n  [ Restyle Checkbox ]*/\n.contact100-form-checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n  padding-bottom: 35px;\n}\n.input-checkbox100 {\n  display: none;\n}\n.label-checkbox100 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #fff;\n  line-height: 1.2;\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  cursor: pointer;\n}\n.label-checkbox100::before {\n  content: \"\";\n  font-family: Material-Design-Iconic-Font;\n  font-size: 13px;\n  color: transparent;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  background: #fff;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #555555;\n}\n/*------------------------------------------------------------------\n  [ Button ]*/\n.container-login100-form-btn {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.login100-form-btn {\n  font-family: Poppins-Medium;\n  font-size: 16px;\n  color: #555555;\n  line-height: 1.2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 20px;\n  min-width: 120px;\n  height: 50px;\n  border-radius: 25px;\n  background: #373638;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.login100-form-btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.login100-form-btn:hover {\n  color: #fff;\n}\n.login100-form-btn:hover:before {\n  opacity: 0;\n}\n/*------------------------------------------------------------------\n  [ Responsive ]*/\n@media (max-width: 576px) {\n  .wrap-login100 {\n    padding: 55px 15px 37px 15px;\n  }\n}\n/*------------------------------------------------------------------\n  [ Alert validate ]*/\n.validate-input {\n  position: relative;\n}\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: #fff;\n  border: 1px solid #c80000;\n  border-radius: 2px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0px;\n  pointer-events: none;\n  font-family: Poppins-Regular;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.4s;\n  transition: opacity 0.4s;\n}\n.alert-validate::after {\n  content: \"\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #c80000;\n  display: block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 5px;\n}\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1;\n}\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9qdWFuL0RvY3VtZW50b3MvZmluZS1mcm9udGVkL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO1NBQUE7QUFHQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QURDSjtBQ0VBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBREFKO0FDR0E7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FEREo7QUNJQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QURGSjtBQ01BO2tCQUFBO0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FETEo7QUNRQTs7RUFFSSxZQUFBO0VBQ0Esd0NBQUE7QURMSjtBQ1NBLGdEQUFBO0FBRUE7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QURQSjtBQ1VBO0VBQ0ksd0JBQUE7QURQSjtBQ1VBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FEUEo7QUNXQSxnREFBQTtBQUVBOzs7Ozs7RUFNSSxXQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QURUSjtBQ1lBOztFQUVJLFdBQUE7RUFDQSxxQkFBQTtBRFRKO0FDYUEsZ0RBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEWEo7QUNjQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEWEo7QUNjQTs7RUFFSSxvQ0FBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtBRFhKO0FDY0E7RUFDSSxXQUFBO0FEWEo7QUNjQTtFQUNJLFdBQUE7QURYSjtBQ2NBO0VBQ0ksV0FBQTtBRFhKO0FDY0E7RUFDSSxXQUFBO0FEWEo7QUNjQTtFQUNJLFdBQUE7QURYSjtBQ2NBO0VBQ0ksV0FBQTtBRFhKO0FDY0E7RUFDSSxXQUFBO0FEWEo7QUNjQTtFQUNJLFdBQUE7QURYSjtBQ2NBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURYSjtBQ2VBLGdEQUFBO0FBRUE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBRGJKO0FDZ0JBO0VBQ0ksZUFBQTtBRGJKO0FDZ0JBO0VBQ0ksdUJBQUE7QURiSjtBQ2lCQTtjQUFBO0FBR0E7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURmSjtBQ21CQTtZQUFBO0FBR0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBRGpCSjtBQ29CQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBSUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURqQko7QUNvQkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw0Q0FBQTtBRGpCSjtBQ29CQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBRGpCSjtBQ3FCQTtXQUFBO0FBR0E7RUFDSSxXQUFBO0FEbkJKO0FDc0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUlBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QURuQko7QUNzQkE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRG5CSjtBQ3VCQTtZQUFBO0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0FEckJKO0FDd0JBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBRHJCSjtBQ3lCQSxnREFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0FEdkJKO0FDMEJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUdBLG9CQUFBO0VBQ0EsZ0JBQUE7QUR2Qko7QUMwQkE7RUFDSSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBR0Esb0JBQUE7QUR2Qko7QUMwQkE7RUFDSSxpQkFBQTtBRHZCSjtBQzBCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FEdkJKO0FDMEJBO0VBQ0ksV0FBQTtBRHZCSjtBQzBCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FEdkJKO0FDMEJBO0VBQ0ksV0FBQTtBRHZCSjtBQzBCQTtFQUNJLGlCQUFBO0FEdkJKO0FDMkJBO3VCQUFBO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUR6Qko7QUM0QkE7RUFDSSxhQUFBO0FEekJKO0FDNEJBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEekJKO0FDNEJBO0VBQ0ksWUFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFJQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFJQSwyQkFBQTtBRHpCSjtBQzRCQTtFQUNJLGNBQUE7QUR6Qko7QUM2QkE7YUFBQTtBQUdBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FEM0JKO0FDOEJBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFJQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBR0Esb0JBQUE7QUQzQko7QUM4QkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBR0Esb0JBQUE7QUQzQko7QUM4QkE7RUFDSSxXQUFBO0FEM0JKO0FDOEJBO0VBQ0ksVUFBQTtBRDNCSjtBQytCQTtpQkFBQTtBQUdBO0VBQ0k7SUFDSSw0QkFBQTtFRDdCTjtBQUNGO0FDaUNBO3FCQUFBO0FBR0E7RUFDSSxrQkFBQTtBRGhDSjtBQ21DQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFJQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFHQSx3QkFBQTtBRGhDSjtBQ21DQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO0VBSUEsMkJBQUE7RUFDQSxVQUFBO0FEaENKO0FDbUNBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FEaENKO0FDbUNBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLFVBQUE7RURoQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgRk9OVCBdKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtTWVkaXVtLnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUG9wcGlucy1Cb2xkO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtQm9sZC50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZC50dGZcIik7XG59XG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBbIFJFU1RZTEUgVEFHIF0qL1xuKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyLCBzYW5zLXNlcmlmO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5hIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbnVsLFxubGkge1xuICBtYXJnaW46IDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxudGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxubGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2NlM2IzMTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgVXRpbGl0eSBdKi9cbi50eHQxIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgWyBsb2dpbiBdKi9cbi5saW1pdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjY3KTtcbn1cblxuLndyYXAtbG9naW4xMDAge1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDU1cHggNTVweCAzN3B4IDU1cHg7XG4gIGJhY2tncm91bmQ6ICMwNDliZjE7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgRm9ybSBdKi9cbi5sb2dpbjEwMC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWxvZ28ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIElucHV0IF0qL1xuLndyYXAtaW5wdXQxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmlucHV0MTAwIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDVweCAwIDM4cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb2N1cy1pbnB1dDEwMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uaW5wdXQxMDA6Zm9jdXMge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gIHRvcDogLTIycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhhcy12YWwuaW5wdXQxMDAgKyAuZm9jdXMtaW5wdXQxMDA6OmFmdGVyIHtcbiAgdG9wOiAtMjJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGFzLXZhbC5pbnB1dDEwMCArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtdmFsLmlucHV0MTAwIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIFsgUmVzdHlsZSBDaGVja2JveCBdKi9cbi5jb250YWN0MTAwLWZvcm0tY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG5cbi5pbnB1dC1jaGVja2JveDEwMCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbC1jaGVja2JveDEwMCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74mrXCI7XG4gIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pbnB1dC1jaGVja2JveDEwMDpjaGVja2VkICsgLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgWyBCdXR0b24gXSovXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMzNzM2Mzg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIFJlc3BvbnNpdmUgXSovXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLndyYXAtbG9naW4xMDAge1xuICAgIHBhZGRpbmc6IDU1cHggMTVweCAzN3B4IDE1cHg7XG4gIH1cbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgQWxlcnQgdmFsaWRhdGUgXSovXG4udmFsaWRhdGUtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4MDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA0cHggMjVweCA0cHggMTBweDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBjb2xvcjogI2M4MDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+EqlwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNjODAwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICByaWdodDogNXB4O1xufVxuXG4uYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBGT05UIF0qL1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvbG9naW4vZm9udHMvcG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luL2ZvbnRzL3BvcHBpbnMvUG9wcGlucy1NZWRpdW0udHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLUJvbGQ7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi9mb250cy9wb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQudHRmJyk7XG59XG5cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgWyBSRVNUWUxFIFRBRyBdKi9cblxuKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHksXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmEge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG5hOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbnVsLFxubGkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmlucHV0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxudGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5sYWJlbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjY2UzYjMxO1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pZnJhbWUge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgVXRpbGl0eSBdKi9cblxuLnR4dDEge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjZTVlNWU1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgWyBsb2dpbiBdKi9cblxuLmxpbWl0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNjcpO1xufVxuXG4ud3JhcC1sb2dpbjEwMCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1NXB4IDU1cHggMzdweCA1NXB4O1xuICAgIGJhY2tncm91bmQ6ICMwNDliZjE7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgWyBGb3JtIF0qL1xuXG4ubG9naW4xMDAtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWxvZ28ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW4xMDAtZm9ybS10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgSW5wdXQgXSovXG5cbi53cmFwLWlucHV0MTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmlucHV0MTAwIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDM4cHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZm9jdXMtaW5wdXQxMDAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0ycHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gICAgZm9udC1mYW1pbHk6IE1hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmlucHV0MTAwOmZvY3VzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmlucHV0MTAwOmZvY3VzKy5mb2N1cy1pbnB1dDEwMDo6YWZ0ZXIge1xuICAgIHRvcDogLTIycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW5wdXQxMDA6Zm9jdXMrLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFzLXZhbC5pbnB1dDEwMCsuZm9jdXMtaW5wdXQxMDA6OmFmdGVyIHtcbiAgICB0b3A6IC0yMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhhcy12YWwuaW5wdXQxMDArLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFzLXZhbC5pbnB1dDEwMCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgWyBSZXN0eWxlIENoZWNrYm94IF0qL1xuXG4uY29udGFjdDEwMC1mb3JtLWNoZWNrYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuXG4uaW5wdXQtY2hlY2tib3gxMDAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbC1jaGVja2JveDEwMCB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMjZiXCI7XG4gICAgZm9udC1mYW1pbHk6IE1hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmlucHV0LWNoZWNrYm94MTAwOmNoZWNrZWQrLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICAgIGNvbG9yOiAjNTU1NTU1O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgQnV0dG9uIF0qL1xuXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1NZWRpdW07XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzczNjM4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmxvZ2luMTAwLWZvcm0tYnRuOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlcjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgWyBSZXNwb25zaXZlIF0qL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAud3JhcC1sb2dpbjEwMCB7XG4gICAgICAgIHBhZGRpbmc6IDU1cHggMTVweCAzN3B4IDE1cHg7XG4gICAgfVxufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgQWxlcnQgdmFsaWRhdGUgXSovXG5cbi52YWxpZGF0ZS1pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzgwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiA0cHggMjVweCA0cHggMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIGNvbG9yOiAjYzgwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbn1cblxuLmFsZXJ0LXZhbGlkYXRlOjphZnRlciB7XG4gICAgY29udGVudDogXCJcXGYxMmFcIjtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjYzgwMDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcmlnaHQ6IDVweDtcbn1cblxuLmFsZXJ0LXZhbGlkYXRlOmhvdmVyOmJlZm9yZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/services.index */
    "./src/app/services/services.index.ts");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _models_compania_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/compania.model */
    "./src/app/models/compania.model.ts");
    /* harmony import */


    var _models_acoount_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../models/acoount.model */
    "./src/app/models/acoount.model.ts");

    let RegisterComponent = class RegisterComponent {
      constructor(router, registerservice) {
        this.router = router;
        this.registerservice = registerservice;
        this.errors = [];
        this.compania = new _models_compania_model__WEBPACK_IMPORTED_MODULE_7__["CompaniaModel"]();
        this.account = new _models_acoount_model__WEBPACK_IMPORTED_MODULE_8__["AccountModel"]();
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
        this.btndisabled = false;
        this.datasave = {};
        this.statussendform = false;
      }

      sonIguales(campo1, campo2) {
        return group => {
          let email = group.controls[campo1].value;
          let confirmemail = group.controls[campo2].value;

          if (email === confirmemail) {
            return null;
          }

          return {
            sonIguales: true
          };
        };
      }

      ngOnInit() {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          emailconfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, {
          validators: this.sonIguales("email", "emailconfirm")
        });
      }

      register() {
        this.statussendform = true;
        this.btndisabled = true;
        this.errornamecompania = "";
        this.errorusername = "";
        this.erroremail = "";
        this.errorpassword = "";
        this.datasave = {
          namecompany: this.compania.name,
          username: this.user.username,
          email: this.user.email,
          password: this.user.password
        };
        console.log(this.datasave);
        this.registerservice.createcompania(this.datasave).subscribe(resp => {
          console.log(resp);

          if (resp.success) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Muy bien!", "Te has  registrado con éxito, verifica tu email para activar tu cuenta", "success");
            this.router.navigate(["/login"]);
          } else {
            if (resp.errfor) {
              this.errornamecompania = resp.errfor.namecompany ? resp.errfor.namecompany : "";
              this.errorusername = resp.errfor.username ? resp.errfor.username : "";
              this.erroremail = resp.errfor.email ? resp.errfor.email : "";
              this.errorpassword = resp.errfor.password ? resp.errfor.password : "";
            }
          }

          this.statussendform = false;
          this.btndisabled = false;
        }, err => {
          this.statussendform = false;
          console.log(err);

          if (err.status === 400) {
            this.errors = err.error.errors;
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Algo salió mal!", "Error al crear cuenta, intente nuevamente", "error");
          }

          console.log("codigo error: " + err.status);
          console.error(err.error.errors);
          this.btndisabled = false;
        });
      }

    };

    RegisterComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _services_services_index__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]
    }];

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/register/register.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_services_index__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/user.model */
    "./src/app/models/user.model.ts");

    let AuthService = class AuthService {
      constructor(http, router) {
        this.http = http;
        this.router = router;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          "Content-type": "application/json"
        });
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
        this.dataextralocal = {};
      }

      isLogin() {
        let token = localStorage.getItem("_tokenfine");
        return token && token.length > 5 ? true : false;
      }

      login(user, recuerdame) {
        if (recuerdame) {
          localStorage.setItem("remember", user.username);
        } else {
          localStorage.removeItem("remember");
        }

        return this.http.post(src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_API"] + "/auth/login", user, {
          headers: this.httpHeaders
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
          localStorage.setItem("_tokenfine", resp.token);
          this.dataextralocal = {
            email: resp.user.email,
            username: resp.user.username,
            role: resp.user.role,
            namecompany: resp.user.namecompany
          };
          localStorage.setItem("data_user", JSON.stringify(this.dataextralocal));
          return true;
        }));
      }

      logout() {
        localStorage.removeItem("_tokenfine");
        localStorage.removeItem("data_user");
        this.router.navigate(["/login"]);
      }

      loaddatauser() {
        let datauser = localStorage.getItem("data_user");

        if (!datauser || datauser === null) {
          this.logout();
        } else {
          return JSON.parse(datauser);
        }
      }

    };

    AuthService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/guards/login-guard.guard.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/guards/login-guard.guard.ts ***!
    \******************************************************/

  /*! exports provided: LoginGuardGuard */

  /***/
  function srcAppServicesGuardsLoginGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function () {
      return LoginGuardGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let LoginGuardGuard = class LoginGuardGuard {
      constructor(router, authservice) {
        this.router = router;
        this.authservice = authservice;
      }

      canActivate() {
        if (this.authservice.isLogin()) {
          return true;
        }

        this.router.navigate(["/login"]);
        return false;
      }

    };

    LoginGuardGuard.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    LoginGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], LoginGuardGuard);
    /***/
  },

  /***/
  "./src/app/services/httheaders.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/httheaders.service.ts ***!
    \************************************************/

  /*! exports provided: HttheadersService */

  /***/
  function srcAppServicesHttheadersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttheadersService", function () {
      return HttheadersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let HttheadersService = class HttheadersService {
      constructor(authservice) {
        this.authservice = authservice;
      }

      gethttpheaders(filter) {
        if (!this.authservice.isLogin()) {
          this.authservice.logout();
          return;
        }

        const token = localStorage.getItem('_tokenfine');
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            authorization: token
          }),
          params: filter
        };
        return httpOptions;
      }

    };

    HttheadersService.ctorParameters = () => [{
      type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    HttheadersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], HttheadersService);
    /***/
  },

  /***/
  "./src/app/services/notifi.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/notifi.service.ts ***!
    \********************************************/

  /*! exports provided: NotifiService */

  /***/
  function srcAppServicesNotifiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifiService", function () {
      return NotifiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/angular2-notifications.umd.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_2__);

    let NotifiService = class NotifiService {
      constructor(_service) {
        this._service = _service;
      }

      onSuccess(message) {
        this._service.success("Muy bien!", message, {
          timeOut: 5000,
          showProgressBar: false,
          pauseOnHover: true,
          clickToClose: false,
          clickIconToClose: true
        });
      }

      onError(message) {
        this._service.error("Error!", message, {
          timeOut: 5000,
          showProgressBar: false,
          pauseOnHover: true,
          clickToClose: false,
          clickIconToClose: true
        });
      }

      onInfo(message) {
        this._service.info("Información!", message, {
          timeOut: 5000,
          showProgressBar: false,
          pauseOnHover: true,
          clickToClose: false,
          clickIconToClose: true
        });
      }

      onWarning(message) {
        this._service.warn("Algo salió mal!", message, {
          timeOut: 5000,
          showProgressBar: false,
          pauseOnHover: true,
          clickToClose: false,
          clickIconToClose: true
        });
      }

    };

    NotifiService.ctorParameters = () => [{
      type: angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]
    }];

    NotifiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])], NotifiService);
    /***/
  },

  /***/
  "./src/app/services/product/product.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/product/product.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _httheaders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../httheaders.service */
    "./src/app/services/httheaders.service.ts");

    let ProductService = class ProductService {
      constructor(http, headers) {
        this.http = http;
        this.headers = headers;
        this.URL_API = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_API"];
      } //categorias


      createCategory(data) {
        return new Promise((resolve, reject) => {
          this.http.post(this.URL_API + "/category", data, this.headers.gethttpheaders()).subscribe(result => {
            resolve(result);
          }, err => {
            reject(err);
          });
        });
      }

      EditCategory(data) {
        return new Promise((resolve, reject) => {
          this.http.put(this.URL_API + "/category", data, this.headers.gethttpheaders()).subscribe(result => {
            resolve(result);
          }, err => {
            reject(err);
          });
        });
      }

      deleteCategory(data) {
        return new Promise((resolve, reject) => {
          this.http.delete(this.URL_API + "/category/" + data.id, this.headers.gethttpheaders()).subscribe(result => {
            resolve(result);
          }, err => {
            reject(err);
          });
        });
      }

      getAllCaterory(filter) {
        return new Promise((resolve, reject) => {
          this.http.get(this.URL_API + "/category", this.headers.gethttpheaders(filter)).subscribe(result => {
            resolve(result);
          }, err => {
            reject(err);
          });
        });
      }

    };

    ProductService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _httheaders_service__WEBPACK_IMPORTED_MODULE_4__["HttheadersService"]
    }];

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _httheaders_service__WEBPACK_IMPORTED_MODULE_4__["HttheadersService"]])], ProductService);
    /***/
  },

  /***/
  "./src/app/services/register/register.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/register/register.service.ts ***!
    \*******************************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppServicesRegisterRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let RegisterService = class RegisterService {
      constructor(http) {
        this.http = http;
        this.url = src_app_config_config__WEBPACK_IMPORTED_MODULE_2__["URL_API"];
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
      }

      createcompania(data) {
        return this.http.post(this.url + "/auth/register", data, {
          headers: this.httpHeaders
        });
      }

    };

    RegisterService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], RegisterService);
    /***/
  },

  /***/
  "./src/app/services/service.module.ts":
  /*!********************************************!*\
    !*** ./src/app/services/service.module.ts ***!
    \********************************************/

  /*! exports provided: ServiceModule */

  /***/
  function srcAppServicesServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
      return ServiceModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services.index */
    "./src/app/services/services.index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ServiceModule = class ServiceModule {};
    ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [_services_index__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_index__WEBPACK_IMPORTED_MODULE_3__["SidebarService"], _services_index__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_index__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _services_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"], _services_index__WEBPACK_IMPORTED_MODULE_3__["HttheadersService"]],
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
    })], ServiceModule);
    /***/
  },

  /***/
  "./src/app/services/services.index.ts":
  /*!********************************************!*\
    !*** ./src/app/services/services.index.ts ***!
    \********************************************/

  /*! exports provided: HttheadersService, LoginGuardGuard, UserService, SharedService, SidebarService, AuthService, RegisterService */

  /***/
  function srcAppServicesServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _httheaders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./httheaders.service */
    "./src/app/services/httheaders.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttheadersService", function () {
      return _httheaders_service__WEBPACK_IMPORTED_MODULE_1__["HttheadersService"];
    });
    /* harmony import */


    var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guards/login-guard.guard */
    "./src/app/services/guards/login-guard.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function () {
      return _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuardGuard"];
    });
    /* harmony import */


    var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"];
    });
    /* harmony import */


    var _shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/shared.service */
    "./src/app/services/shared/shared.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return _shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"];
    });
    /* harmony import */


    var _shared_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/sidebar.service */
    "./src/app/services/shared/sidebar.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
      return _shared_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"];
    });
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"];
    });
    /* harmony import */


    var _register_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.service */
    "./src/app/services/register/register.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return _register_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"];
    });
    /***/

  },

  /***/
  "./src/app/services/shared/shared.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/shared/shared.service.ts ***!
    \***************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppServicesSharedSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SharedService = class SharedService {
      constructor() {}

    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SharedService);
    /***/
  },

  /***/
  "./src/app/services/shared/sidebar.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/shared/sidebar.service.ts ***!
    \****************************************************/

  /*! exports provided: SidebarService */

  /***/
  function srcAppServicesSharedSidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
      return SidebarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _httheaders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../httheaders.service */
    "./src/app/services/httheaders.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let SidebarService = class SidebarService {
      constructor(http, headers, auth) {
        this.http = http;
        this.headers = headers;
        this.auth = auth;
        this.url = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_API"];
      }

      getmenuallow() {
        return new Promise((resolve, reject) => {
          this.http.get(this.url + "/companies/getmodules", this.headers.gethttpheaders()).subscribe(resp => {
            resolve(resp);
          }, err => {
            if (err.status === 401) {
              this.auth.logout();
            }

            reject(err);
          });
        });
      }

    };

    SidebarService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _httheaders_service__WEBPACK_IMPORTED_MODULE_4__["HttheadersService"]
    }, {
      type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }];

    SidebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _httheaders_service__WEBPACK_IMPORTED_MODULE_4__["HttheadersService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], SidebarService);
    /***/
  },

  /***/
  "./src/app/services/user/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/user/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _httheaders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../httheaders.service */
    "./src/app/services/httheaders.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let UserService = class UserService {
      constructor(http, headers, authserrvice) {
        this.http = http;
        this.headers = headers;
        this.authserrvice = authserrvice;
        this.url = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_API"];
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          "Content-Type": "application/json"
        });
      }

      createUser(user) {
        return this.http.post(this.url + "/register", user, {
          headers: this.httpHeaders
        });
      }

      getprofile() {
        return new Promise(resolve => {
          this.http.get(this.url + "/profile/profileuser", this.headers.gethttpheaders()).subscribe(data => {
            resolve(data);
          }, err => {
            if (err.status === 401) {
              this.authserrvice.logout();
            }

            resolve({
              error: err
            });
          });
        });
      }

      changePassword(data) {
        return new Promise(resolve => {
          this.http.post(this.url + "/profile/changepassword", data, this.headers.gethttpheaders()).subscribe(resp => {
            console.log(resp);
            resolve(resp);
          }, err => {
            if (err.status === 401) {
              this.authserrvice.logout();
            }

            resolve({
              error: err
            });
          });
        });
      }

    };

    UserService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _httheaders_service__WEBPACK_IMPORTED_MODULE_4__["HttheadersService"]
    }, {
      type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }];

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _httheaders_service__WEBPACK_IMPORTED_MODULE_4__["HttheadersService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], UserService);
    /***/
  },

  /***/
  "./src/app/shared/brabcrumbs/brabcrumbs.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/brabcrumbs/brabcrumbs.component.ts ***!
    \***********************************************************/

  /*! exports provided: BrabcrumbsComponent */

  /***/
  function srcAppSharedBrabcrumbsBrabcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrabcrumbsComponent", function () {
      return BrabcrumbsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    let BrabcrumbsComponent = class BrabcrumbsComponent {
      constructor(router, title, meta) {
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.getDataRoute();
      }

      ngOnInit() {}

      getDataRoute() {
        return this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(evento => evento instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(evento => evento.snapshot.firstChild === null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(evento => evento.snapshot.data)).subscribe(event => {
          this.titulo = event.titulo;
          this.title.setTitle(this.titulo + "- Bubuk");
          const metatag = {
            name: 'description',
            content: this.titulo
          };
          this.meta.updateTag(metatag);
        });
      }

    };

    BrabcrumbsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
    }];

    BrabcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brabcrumbs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./brabcrumbs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/brabcrumbs/brabcrumbs.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]])], BrabcrumbsComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.index */
    "./src/app/services/services.index.ts");

    let HeaderComponent = class HeaderComponent {
      constructor(authservice) {
        this.authservice = authservice;
        this.loaddatauser = {};
        this.loaddatauser = this.authservice.loaddatauser();
      }

      ngOnInit() {}

      logout() {
        this.authservice.logout();
      }

    };

    HeaderComponent.ctorParameters = () => [{
      type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/nopagefound/nopagefound.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/nopagefound/nopagefound.component.ts ***!
    \*************************************************************/

  /*! exports provided: NopagefoundComponent */

  /***/
  function srcAppSharedNopagefoundNopagefoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NopagefoundComponent", function () {
      return NopagefoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NopagefoundComponent = class NopagefoundComponent {
      constructor() {}

      ngOnInit() {}

    };
    NopagefoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nopagefound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nopagefound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NopagefoundComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nopagefound/nopagefound.component */
    "./src/app/shared/nopagefound/nopagefound.component.ts");
    /* harmony import */


    var _brabcrumbs_brabcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./brabcrumbs/brabcrumbs.component */
    "./src/app/shared/brabcrumbs/brabcrumbs.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts"); // para if , for etc


    let SharedModule = class SharedModule {};
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__["NopagefoundComponent"], _brabcrumbs_brabcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BrabcrumbsComponent"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__["NopagefoundComponent"], _brabcrumbs_brabcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BrabcrumbsComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/services.index */
    "./src/app/services/services.index.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

    let SidebarComponent = class SidebarComponent {
      constructor(_sidebar, authservice) {
        this._sidebar = _sidebar;
        this.authservice = authservice;
        this.modules = [];
        this.getmenuallow();
      }

      ngOnInit() {}

      getmenuallow() {
        this._sidebar.getmenuallow().then(resp => {
          console.log(resp);

          if (resp.success) {
            this.modules = resp.modules;
          } else {
            console.log("aqui");
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Algo salió mal!", "Ingrese nuevamente", "warning");
          }
        }, err => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Error!", "Algo salió mal, ingrese nuevamente o refresque su navegadors", "error");
        });
      }

    };

    SidebarComponent.ctorParameters = () => [{
      type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]
    }, {
      type: src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sidebar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/shared/sidebar/sidebar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["SidebarService"], src_app_services_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], SidebarComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
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
    /*! /home/juan/Documentos/fine-fronted/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map