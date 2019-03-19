(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-portfolio type=\"ideas\"></app-portfolio>\n</div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/experience/experience.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/experience/experience.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/experience/experience.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n  <div class=\"col-md-10\">\n    <div class=\"intro\">\n      <h4>\n        {{infoPersonal?.personal.summary}}\n      </h4>\n      <p>\n        Contacto: <a href=\"mailTo:{{ infoPersonal?.personal.email }}\">{{infoPersonal?.personal.email}}</a>\n      </p>\n    </div>\n  </div>\n  <!-- <div class=\"col-md-5\">\n    <form>\n      <fieldset class=\"form-search\">\n        <input type=\"text\" class=\"input-search\" placeholder=\"To search type and hit enter\" />\n        <button type=\"submit\" class=\"btn-search\"><i class=\"fa fa-search\"></i></button>\n      </fieldset>\n    </form>\n  </div> -->\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"divider\"></div>\n  </div>\n</div>\n\n<div *ngIf=\"!infoPersonal.loadingProjects\" class=\"row\">\n  <app-portfolio type=\"filter\" [data]=\"infoPersonal.projects\" (action)=\"showDetail($event)\"></app-portfolio>\n</div>\n\n<!-- <app-carousel></app-carousel> -->"

/***/ }),

/***/ "./src/app/pages/experience/experience.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_personal_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/personal-info.service */ "./src/app/services/personal-info.service.ts");




var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(infoPersonal, router) {
        this.infoPersonal = infoPersonal;
        this.router = router;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent.prototype.showDetail = function (item) {
        this.infoPersonal.storageService.setProject(item);
        this.router.navigate(['/pages/project']);
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/pages/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/pages/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_personal_info_service__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/pages/formation/formation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/formation/formation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/formation/formation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/formation/formation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"innerpage-head\">\n      <h5>Pages</h5>\n      <p>\n        At eos honestatis eloquentiam cu vix enim meliorea cum augue explicari.\n      </p>\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">Pages</a></li>\n        <li class=\"active\">Blog</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <!-- Start post 2 -->\n    <article class=\"row post\">\n      <div class=\"col-md-6\">\n        <div class=\"\">\n          <!-- Start Images slider -->\n          <img src=\"assets/img/blog/img01.jpg\" class=\"img-responsive\" alt=\"\" />\n          <!-- End Images slider -->\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <h5><a href=\"#\">Blog article with default image</a></h5>\n        <div class=\"meta-tags\"><strong>Tags :</strong> <a href=\"#\">Design</a>, <a href=\"#\">Graphic</a>, <a\n            href=\"#\">Fonts</a>, <a href=\"#\">Vector</a></div>\n        <p>\n          Vis doming iudicabit te. Purto saperet usu eu. Ipsum insolens vis an, pro et hinc graece tamquam. Assum\n          forensibus maiestatis ei mea, in ullum tation qui, est iuvaret tacimates cu. No tibique epicurei eos, vix ex\n          soleat ignota.\n        </p>\n        <p><a href=\"#\" class=\"btn btn-primary\">Read more</a></p>\n      </div>\n    </article>\n    <!-- End post 2 -->\n  </div>\n</div>\n\n<app-portfolio type=\"detail\" ></app-portfolio>\n\n\n\n\t\n"

/***/ }),

/***/ "./src/app/pages/formation/formation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/formation/formation.component.ts ***!
  \********************************************************/
/*! exports provided: FormationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationComponent", function() { return FormationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormationComponent = /** @class */ (function () {
    function FormationComponent() {
    }
    FormationComponent.prototype.ngOnInit = function () {
    };
    FormationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formation',
            template: __webpack_require__(/*! ./formation.component.html */ "./src/app/pages/formation/formation.component.html"),
            styles: [__webpack_require__(/*! ./formation.component.css */ "./src/app/pages/formation/formation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormationComponent);
    return FormationComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/page-routing.module.ts ***!
  \**********************************************/
/*! exports provided: PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutingModule", function() { return PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/pages/experience/experience.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "./src/app/pages/project/project.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: 'projects',
                component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"],
                data: {
                    title: 'ejemplo'
                }
            },
            {
                path: 'project',
                component: _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"],
                data: {
                    title: 'ejemplo5'
                }
            }
            // {
            //   path: 'formation',
            //   component: FormationComponent,
            //   data: {
            //     title: 'ejemplo2'
            //   }
            // }, 
            // {
            //   path: 'about',
            //   component: AboutComponent,
            //   data: {
            //     title: 'ejemplo3'
            //   }
            // }
        ]
    }
];
var PageRoutingModule = /** @class */ (function () {
    function PageRoutingModule() {
    }
    PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PageRoutingModule);
    return PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-routing.module */ "./src/app/pages/page-routing.module.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/pages/experience/experience.component.ts");
/* harmony import */ var _formation_formation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formation/formation.component */ "./src/app/pages/formation/formation.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ "./src/app/pages/project/project.component.ts");









var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"],
                _formation_formation_component__WEBPACK_IMPORTED_MODULE_5__["FormationComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _page_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageRoutingModule"],
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/project/project.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/project/project.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/project/project.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/project/project.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start inner page heading -->\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"innerpage-head\">\n      <h5>Proyecto: {{ data?.title }}</h5>\n      <p>\n        {{ data?.description }}\n      </p>\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">Pages</a></li>\n        <li class=\"active\">Blog</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\" *ngIf=\"!loading\">\n\n    <!-- Start post 2 -->\n    <article class=\"row post\">\n      <div class=\"col-md-6\">\n        <div class=\"\">\n          <img [src]=\"data.imgs.principal\" class=\"img-responsive\" alt=\"\" />\n          <!-- Start Images slider -->\n          <!-- <app-flex-slider></app-flex-slider> -->\n          <!-- End Images slider -->\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <h5><a href=\"#\">Rol: {{data?.role}}</a></h5>\n        <div class=\"meta-tags-p\"><strong>Año: </strong> <a href=\"#\">{{data?.date}}</a></div>\n        <div class=\"meta-tags-p\"><strong>Metodología: </strong> <a href=\"#\">{{data?.methodology}}</a></div>\n        <p>\n          {{data?.resumen}}\n        </p>\n        <div class=\"meta-tags-p\"><strong>Estado: </strong> <a href=\"#\">{{data?.status}}</a></div>\n        <p>\n          <p *ngIf=\"data.url != ''\"><a target=\"\" [href]=\"data.url\" target=\"_blank\" class=\"btn btn-primary\">Visitar</a>\n          </p>\n      </div>\n    </article>\n    <!-- End post 2 -->\n\n    <!-- Start post 2 -->\n    <article class=\"row post\">\n\n      <div class=\"col-md-4\">\n        <h5><a href=\"#\">Desarrollo</a></h5>\n        <div class=\"meta-tags\"><strong>Participación en actividades como:</strong></div>\n        <ul>\n          <li *ngFor=\"let item of data.activities\">\n            {{item.name}}\n          </li>\n        </ul>\n        <p><a href=\"#\" class=\"btn btn-primary\">Read more</a></p>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"\">\n\n          <!-- Start Images slider -->\n          <img [src]=\"data?.imgs.cover\" class=\"img-responsive\" alt=\"\" />\n          <!-- End Images slider -->\n        </div>\n      </div>\n    </article>\n    <!-- End post 2 -->\n\n    <article *ngFor=\"let item of data.imgs.others\" class=\"row post\">\n\n      <div class=\"col-md-12\">\n        <div class=\"\">\n\n          <!-- Start Images slider -->\n          <img [src]=\"item.img\" class=\"img-responsive\" alt=\"\" />\n          <!-- End Images slider -->\n        </div>\n      </div>\n    </article>\n\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_personal_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/personal-info.service */ "./src/app/services/personal-info.service.ts");



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(perService) {
        this.perService = perService;
        this.data = {};
        this.loading = true;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    ProjectComponent.prototype.getProject = function () {
        var _this = this;
        this.perService.getProject().subscribe(function (data) {
            _this.data = data;
            _this.loading = false;
        });
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/pages/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/pages/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_personal_info_service__WEBPACK_IMPORTED_MODULE_2__["PersonalInfoService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/carousel/carousel.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/carousel/carousel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margintop80\">\n  <div class=\"col-md-10 col-md-offset-1 owl-column-wrapp\">\n    <div id=\"clients\" class=\"owl-carousel leftControls-right\">\n      <div *ngFor=\"let item of data; let i=index;\" class=\"item\">\n        <div class=\"client-box\">\n          <a href=\"#\" class=\"client-logo\">\n            <img src=\"assets/img/clients/logo{{i + 1}}.png\" class=\"client-default\" alt=\"\" />\n            <img src=\"assets/img/clients/logo{{i + 1}}-hover.png\" class=\"client-hover\" alt=\"\" />\n          </a>\n        </div>\n      </div> \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/carousel/carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.data = [
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
            {
                imgDefault: "assets/img/clients/logo1.png",
                imgHover: "assets/img/clients/logo1.png"
            },
        ];
        this.loadding = true;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initCarrousel();
        }, 500);
    };
    CarouselComponent.prototype.initCarrousel = function () {
        $("#clients").owlCarousel({
            autoPlay: false,
            items: 6,
            navigation: true,
            pagination: false,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 5],
            itemsTablet: [920, 4],
            itemsTabletSmall: [767, 3],
        });
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/shared/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/shared/components/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/shared/components/portfolio/portfolio.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/shared/components/carousel/carousel.component.ts");
/* harmony import */ var _flex_slider_flex_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flex-slider/flex-slider.component */ "./src/app/shared/components/flex-slider/flex-slider.component.ts");






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
                _flex_slider_flex_slider_component__WEBPACK_IMPORTED_MODULE_5__["FlexSliderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
                _flex_slider_flex_slider_component__WEBPACK_IMPORTED_MODULE_5__["FlexSliderComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/flex-slider/flex-slider.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/flex-slider/flex-slider.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZsZXgtc2xpZGVyL2ZsZXgtc2xpZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/flex-slider/flex-slider.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/flex-slider/flex-slider.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-slider\">\n  <ul class=\"slides\">\n    <li *ngFor=\"let item of data; let i=index;\"><img src=\"assets/img/blog/img0{{i+1}}.jpg\" alt=\"\"></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/flex-slider/flex-slider.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/flex-slider/flex-slider.component.ts ***!
  \************************************************************************/
/*! exports provided: FlexSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexSliderComponent", function() { return FlexSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FlexSliderComponent = /** @class */ (function () {
    function FlexSliderComponent() {
        this.data = [
            { img: "" },
            { img: "" },
            { img: "" }
        ];
    }
    FlexSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initSlider();
        }, 500);
    };
    FlexSliderComponent.prototype.initSlider = function () {
        $('.img-slider').flexslider({
            animation: "slide",
            controlNav: false,
        });
    };
    FlexSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flex-slider',
            template: __webpack_require__(/*! ./flex-slider.component.html */ "./src/app/shared/components/flex-slider/flex-slider.component.html"),
            styles: [__webpack_require__(/*! ./flex-slider.component.css */ "./src/app/shared/components/flex-slider/flex-slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlexSliderComponent);
    return FlexSliderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/portfolio/portfolio.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/portfolio/portfolio.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/portfolio/portfolio.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/portfolio/portfolio.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"type == 'filter'\" class=\"col-md-12\">\n    <!-- Start portfolio filter -->\n    <div id=\"js-filters-masonry\" class=\"cbp-l-filters-text\">\n      <div class=\"cbp-l-filters-text-sort\">Proyectos:</div>\n      <div data-filter=\"*\" class=\"cbp-filter-item-active cbp-filter-item\">\n        Todo <div class=\"cbp-filter-counter\"></div>\n      </div> |\n      <div data-filter=\".elea\" class=\"cbp-filter-item\">\n        E-Learning <div class=\"cbp-filter-counter\"></div>\n      </div> |\n      <div data-filter=\".real\" class=\"cbp-filter-item\">\n        Real Estate <div class=\"cbp-filter-counter\"></div>\n      </div> |\n      <div data-filter=\".tele\" class=\"cbp-filter-item\">\n        Telecomunicaciones <div class=\"cbp-filter-counter\"></div>\n      </div> |\n      <div data-filter=\".othe\" class=\"cbp-filter-item\">\n          Others <div class=\"cbp-filter-counter\"></div>\n      </div>\n    </div>\n    <!-- End portfolio filter -->\n    <!-- Start portfolio -->\n    <div id=\"js-grid-masonry\" class=\"cbp\">\n      <!-- Start project 1 -->\n      <div *ngFor=\"let item of data\" class=\"cbp-item\" [ngClass]=\"item.class\">\n        <div class=\"cbp-caption\">\n          <div class=\"cbp-caption-defaultWrap\" (click)=\"showDetail(item)\">\n            <img [src]=\"item.cover\" class=\"img-responsive\" alt=\"\">\n          </div>\n          <div class=\"cbp-caption-activeWrap\">\n            <div class=\"cbp-l-caption-alignLeft\">\n              <div class=\"cbp-l-caption-body\">\n                <a [href]=\"item.cover\" class=\"cbp-lightbox cbp-zoom\"\n                  data-title=\"Image<br>Proyects\"><i class=\"fa fa-search\"></i></a>\n                <div class=\"cbp-l-caption-title\"><a (click)=\"showDetail(item)\" >{{item.name}}</a></div>\n                <div class=\"cbp-l-caption-desc\">{{item.company}}, {{item.property}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n    <!-- End portfolio -->\n</div>\n\n<!-- Portfolio with detail -->\n\n\t<!-- Start contain wrapp -->\n<div *ngIf=\"type == 'detail'\" class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- Start portfolio -->\n      <div id=\"js-grid-masonry-c\" class=\"cbp\">\n        <!-- Start project 1 -->\n        <div *ngFor=\"let item of data\" class=\"cbp-item\">\n          <a href=\"#\">\n            <div class=\"cbp-caption-defaultWrap\">\n              <img src=\"assets/img/gallery/380/img02.jpg\" alt=\"\" />\n            </div>\n            <div class=\"cbp-caption-activeWrap\">\n              <div class=\"cbp-l-caption-zoom\">\n                <div class=\"cbp-l-caption-body\">\n                  <div class=\"cbp-l-caption-title\">Disputationi</div>\n                  <div class=\"cbp-l-caption-desc\">by 99webpage</div>\n                </div>\n              </div>\n            </div>\n          </a>\n          <div class=\"cbp-caption-content\">\n            <h5 class=\"caption-title\"><a href=\"#\" class=\"cbp-singlePage\" rel=\"nofollow\">Disputationi</a></h5>\n            <p class=\"author-label\">By 99webpage</p>\n            <p>\n            Sit ad adhuc illum epicurei, congue\n            </p>\n            <ul class=\"cbp-project-action\">\n              <li><a href=\"#\">202 <i class=\"fa fa-heart\"></i></a></li>\n              <li><a href=\"#\">80 <i class=\"fa fa-download\"></i></a></li>\n              <li><a href=\"#\"><span class=\"project-label\">Free</span></a></li>\n            </ul>\n          </div>\n        </div>\n        <!-- End project 1 -->\n        \n      </div>\n      <!-- End portfolio -->\n    \n    </div>\n  </div>\n\n<!-- End contain wrapp -->\n\n<!-- Portfolio About me-->\n<div *ngIf=\"type == 'ideas'\" class=\"col-md-12\">\n  <!-- Start portfolio -->\n  <div id=\"js-grid-masonry\" class=\"cbp\">\n    <!-- Start project 1 -->\n    <div class=\"cbp-item\">\n      <a href=\"#\">\n        <div class=\"cbp-caption-defaultWrap\">\n          <img src=\"assets/img/man01.jpg\" alt=\"\" />\n        </div>\n        <div class=\"cbp-caption-activeWrap\">\n          <div class=\"cbp-l-caption-zoom\">\n            <div class=\"cbp-l-caption-body\">\n              <div class=\"cbp-l-caption-title\">John doe</div>\n              <div class=\"cbp-l-caption-desc\">View profile</div>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- End project 1 -->\n    \n    <!-- Start project 2 -->\n    <div class=\"cbp-item\">\n      <div class=\"grid-boxed\">\n        <h5>Lugares que te impresionan y te transportan...</h5>\n        <p><a href=\"about.html\" class=\"btn btn-link\">Learn more</a></p>\n      </div>\n    </div>\n    <!-- End project 2 -->\n\n    <!-- Start project 3 -->\n    <div class=\"cbp-item\">\n      <a href=\"portfolioDetail/project1.html\" class=\"cbp-caption cbp-singlePage\" rel=\"nofollow\">\n        <div class=\"cbp-caption-defaultWrap\">\n          <img src=\"assets/img/about/playa.jpg\" width=\"480\" height=\"720\" />\n        </div>\n        <div class=\"cbp-caption-activeWrap\">\n          <div class=\"cbp-l-caption-zoom\">\n            <div class=\"cbp-l-caption-body\">\n              <div class=\"cbp-l-caption-title\">Disputationi</div>\n              <div class=\"cbp-l-caption-desc\">by 99webpage</div>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- End project 3 -->\n    \n    <!-- Start project 4 -->\n    <div class=\"cbp-item\">\n      <a href=\"portfolioDetail/project3.html\" class=\"cbp-caption cbp-singlePage\" rel=\"nofollow\">\n        <div class=\"cbp-caption-defaultWrap\">\n          <img src=\"assets/img/about/arenacielo.jpg\" width=\"480\" height=\"460\"/>\n        </div>\n        <div class=\"cbp-caption-activeWrap\">\n          <div class=\"cbp-l-caption-zoom\">\n            <div class=\"cbp-l-caption-body\">\n              <div class=\"cbp-l-caption-title\">Suscipiantur</div>\n              <div class=\"cbp-l-caption-desc\">by 99webpage</div>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- End project 4 -->\n    \n    <!-- Start project 5 -->\n    <div class=\"cbp-item\">\n      <div class=\"grid-boxed\">\n        <h5>No existen limites cuando crees en ti</h5>\n        <p><a href=\"services.html\" class=\"btn btn-link\">View services</a></p>\n      </div>\n    </div>\n    <!-- End project 5 -->\n    \n    <!-- Start project 6 -->\n    <div class=\"cbp-item\">\n      <div class=\"grid-boxed\">\n        <h5>El helado es mi café</h5>\n        <p><a href=\"portfolio-alt1.html\" class=\"btn btn-link\">View portfolio</a></p>\n      </div>\n    </div>\n    <!-- End project 6 -->\n    \n    <!-- Start project 7 -->\n    <div class=\"cbp-item\">\n      <a href=\"portfolioDetail/project4.html\" class=\"cbp-caption cbp-singlePage\" rel=\"nofollow\">\n        <div class=\"cbp-caption-defaultWrap\">\n          <img src=\"assets/img/gallery/480/img04.jpg\" alt=\"\" />\n        </div>\n        <div class=\"cbp-caption-activeWrap\">\n          <div class=\"cbp-l-caption-zoom\">\n            <div class=\"cbp-l-caption-body\">\n              <div class=\"cbp-l-caption-title\">Efficiantur</div>\n              <div class=\"cbp-l-caption-desc\">by 99webpage</div>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- End project 7 -->\n    \n    <!-- Start project 8 -->\n    <div class=\"cbp-item\">\n      <a href=\"portfolioDetail/project6.html\" class=\"cbp-caption cbp-singlePage\" rel=\"nofollow\">\n        <div class=\"cbp-caption-defaultWrap\">\n          <img src=\"assets/img/gallery/480x460/img06.jpg\" alt=\"\" />\n        </div>\n        <div class=\"cbp-caption-activeWrap\">\n          <div class=\"cbp-l-caption-zoom\">\n            <div class=\"cbp-l-caption-body\">\n              <div class=\"cbp-l-caption-title\">Interesset</div>\n              <div class=\"cbp-l-caption-desc\">by 99webpage</div>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- End project 8 -->\n    \n    <!-- Start project 9 -->\n    <div class=\"cbp-item\">\n      <a href=\"portfolioDetail/project7.html\" class=\"cbp-caption cbp-singlePage\" rel=\"nofollow\">\n        <div class=\"cbp-caption-defaultWrap\">\n          <img src=\"assets/img/gallery/480x460/img07.jpg\" alt=\"\" />\n        </div>\n        <div class=\"cbp-caption-activeWrap\">\n          <div class=\"cbp-l-caption-zoom\">\n            <div class=\"cbp-l-caption-body\">\n              <div class=\"cbp-l-caption-title\">Persequeris</div>\n              <div class=\"cbp-l-caption-desc\">by 99webpage</div>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- End project 9 -->\n    \n    <!-- Start project 10 -->\n    <div class=\"cbp-item\">\n      <div class=\"grid-boxed\">\n        <h5>El momento es ahora</h5>\n        <p><a href=\"contact.html\" class=\"btn btn-link\">Contact us</a></p>\n      </div>\n    </div>\n    <!-- End project 10 -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/portfolio/portfolio.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/portfolio/portfolio.component.ts ***!
  \********************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.data = [];
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        if (this.type === 'detail') {
            this.initPortfolioDetail();
        }
        else {
            this.initPortFolioFilter();
        }
    };
    PortfolioComponent.prototype.initPortFolioFilter = function () {
        setTimeout(function () {
            $('#js-grid-masonry').cubeportfolio({
                filters: '#js-filters-masonry',
                loadMore: '#js-loadMore-masonry-projects',
                layoutMode: 'grid',
                defaultFilter: '*',
                animationType: 'slideDelay',
                gapHorizontal: 20,
                gapVertical: 20,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                        width: 1500,
                        cols: 4
                    }, {
                        width: 1100,
                        cols: 3
                    }, {
                        width: 800,
                        cols: 3
                    }, {
                        width: 480,
                        cols: 2,
                        options: {
                            caption: ''
                        }
                    }, {
                        width: 320,
                        cols: 1,
                        options: {
                            caption: ''
                        }
                    }],
                caption: 'overlayBottomAlong',
                displayType: 'bottomToTop',
                displayTypeSpeed: 100,
                // lightbox
                lightboxDelegate: '.cbp-lightbox',
                lightboxGallery: true,
                lightboxTitleSrc: 'data-title',
                lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
            });
        }, 500);
    };
    PortfolioComponent.prototype.initPortfolioDetail = function () {
        setTimeout(function () {
            $('#js-grid-masonry-c').cubeportfolio({
                filters: '#js-filters-masonry',
                loadMore: '#js-loadMore-masonry-projects',
                loadMoreAction: 'auto',
                layoutMode: 'grid',
                defaultFilter: '*',
                animationType: 'slideDelay',
                gapHorizontal: 20,
                gapVertical: 20,
                gridAdjustment: 'responsive',
                mediaQueries: [{
                        width: 1500,
                        cols: 4
                    }, {
                        width: 1100,
                        cols: 4
                    }, {
                        width: 800,
                        cols: 3
                    }, {
                        width: 480,
                        cols: 2,
                        options: {
                            caption: ''
                        }
                    }, {
                        width: 320,
                        cols: 1,
                        options: {
                            caption: ''
                        }
                    }],
                caption: 'zoom',
                displayType: 'fadeIn',
                displayTypeSpeed: 100,
                // lightbox
                lightboxDelegate: '.cbp-lightbox',
                lightboxGallery: true,
                lightboxTitleSrc: 'data-title',
                lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
            });
        }, 500);
    };
    PortfolioComponent.prototype.showDetail = function (item) {
        this.action.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PortfolioComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PortfolioComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PortfolioComponent.prototype, "action", void 0);
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/shared/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/shared/components/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map