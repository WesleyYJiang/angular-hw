(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/course.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/Models/course.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_world_two_hello_world_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello-world-two/hello-world-two.component */ "./src/app/hello-world-two/hello-world-two.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _hello_world_two_hello_world_two_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldTwoComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_4__["WhiteBoardComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_5__["CourseNavigatorComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_11__["CourseGridComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_14__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_15__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_16__["LessonTabsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_21__["SectionListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"]
            ],
            providers: [
                _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorServiceClient"],
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_7__["CourseServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_8__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_9__["LessonServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__["WidgetServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_23__["SectionServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");







var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__["SectionListComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Courses</h2>\n\n<div class=\"row\">\n\n  <div *ngFor=\"let course of courses\" class=\"col-sm-3\">\n\n    <div class=\"card\">\n\n      <div class=\"card-body\">\n\n        <h5 class=\"card-title\">{{course.title}}</h5>\n\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n\n        <a routerLink=\"/course/{{course.id}}\" class=\"btn btn-primary\">Enter</a>\n\n        <a routerLink=\"/course/{{course.id}}/section\" class=\"btn btn-success float-right\">Enroll</a>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(service) {
        this.service = service;
        this.courses = [];
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item.active.webdev {\n  z-index: 2;\n  color: #fff;\n  background-color: #00a8ff;\n  border-color: #00a8ff;\n}\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Navigator</h1>\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <ul class=\"list-group \">\n        <li class=\"list-group-item active\">\n          Courses</li>\n        <li class=\"list-group-item webdev\"\n            *ngFor=\"let course of courses\"\n            (click)='selectCourse(course.id)'\n            [ngClass]=\"{'active': course.id === selectedCourseId}\">\n          {{course.title}}</li>\n      </ul>\n    </div>\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          Modules </li>\n        <li class=\"list-group-item webdev\"\n            (click)=\"selectModule(module.id)\"\n            [ngClass]=\"{'active': module.id === selectedModuleId}\"\n            *ngFor=\"let module of modules\">\n          {{module.title}} </li>\n      </ul>\n    </div>\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          Lessons\n        </li>\n        <li (click)=\"selectLesson(lesson.id)\"\n            [ngClass]=\"{'active': lesson.id === selectedLessonId}\"\n            class=\"list-group-item webdev\"\n            *ngFor=\"let lesson of lessons\">\n          {{lesson.title}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          Widgets\n        </li>\n        <li class=\"list-group-item\"\n            *ngFor=\"let widget of widgets\">\n          {{widget.title}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(service) {
        this.service = service;
        this.courses = [];
        this.modules = [];
        this.lessons = [];
        this.widgets = [];
        this.selectedCourseId = 0;
        this.selectedModuleId = 0;
        this.selectedLessonId = 0;
    }
    CourseNavigatorComponent.prototype.selectCourse = function (courseId) {
        var _this = this;
        this.selectedCourseId = courseId;
        this.service.findModulesForCourse(courseId)
            .then(function (modules) {
            return _this.modules = modules;
        });
    };
    CourseNavigatorComponent.prototype.selectModule = function (moduleId) {
        var _this = this;
        this.selectedModuleId = moduleId;
        this.service.findLessonsForModule(moduleId)
            .then(function (lessons) {
            _this.lessons = lessons;
        });
    };
    CourseNavigatorComponent.prototype.selectLesson = function (lessonId) {
        var _this = this;
        this.selectedLessonId = lessonId;
        this.service.findWidgetsForLesson(lessonId)
            .then(function (widgets) {
            _this.widgets = widgets;
        });
    };
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
        });
    };
    CourseNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-navigator',
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseNavigatorServiceClient"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2>\n          {{course.title}}\n        </h2>\n      </div>\n      <div class=\"col align-content-end\">\n        <button routerLink=\"/profile\"\n                class=\"btn btn-primary btn\"\n                *ngIf=\"loggedIn\">\n          Profile\n        </button>\n      </div>\n    </div>\n\n\n\n  </div>\n\n  <app-module-list></app-module-list>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _Models_course_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/course.model.client */ "./src/app/Models/course.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, userService, route) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.route = route;
        this.course = new _Models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.loggedIn = false;
        this.route.params.subscribe(function (params) { return _this.loadCourseId(params['courseId']); });
    }
    CourseViewerComponent.prototype.loadCourseId = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function () { return _this.loggedIn = true; }, function () { return _this.loggedIn = false; });
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/hello-world-two/hello-world-two.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hello-world-two/hello-world-two.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hello-world-two/hello-world-two.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hello-world-two/hello-world-two.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{message}}\n</h1>\n<ul>\n  <li *ngFor='let course of courses'>\n    {{course.title}}\n\n    <button (click)='deleteCourse(course.id)'\n            class=\"btn btn-danger\">\n      Delete\n    </button>\n  </li>\n</ul>\n\n<!--<input [(ngModule)]='courseTitle'-->\n       <!--class=\"form-control\"/>-->\n<!--<button class=\"btn btn-success\"-->\n        <!--(click)='addCourse(courseTitle)'>-->\n  <!--Add Course-->\n<!--</button>-->\n"

/***/ }),

/***/ "./src/app/hello-world-two/hello-world-two.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hello-world-two/hello-world-two.component.ts ***!
  \**************************************************************/
/*! exports provided: HelloWorldTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldTwoComponent", function() { return HelloWorldTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelloWorldTwoComponent = /** @class */ (function () {
    function HelloWorldTwoComponent() {
        this.message = 'Hello World Component';
        this.courses = [
            { title: 'CS5200', id: 123 },
            { title: 'CS5610', id: 234 },
            { title: 'CS3200', id: 345 },
            { title: 'CS4550', id: 456 }
        ];
    }
    HelloWorldTwoComponent.prototype.deleteCourse = function (courseId) {
        this.courses =
            this.courses
                .filter(function (course) {
                return course.id !== courseId;
            });
    };
    HelloWorldTwoComponent.prototype.addCourse = function (courseTitle) {
        var largestId = Math.max.apply(Math, this.courses.map(function (course) {
            return course.id;
        }));
        this.courses.push({ title: courseTitle, id: largestId + 1 });
        this.courseTitle = '';
    };
    HelloWorldTwoComponent.prototype.ngOnInit = function () {
    };
    HelloWorldTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello-world-two',
            template: __webpack_require__(/*! ./hello-world-two.component.html */ "./src/app/hello-world-two/hello-world-two.component.html"),
            styles: [__webpack_require__(/*! ./hello-world-two.component.css */ "./src/app/hello-world-two/hello-world-two.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldTwoComponent);
    return HelloWorldTwoComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let lesson of lessons\"\n      class=\"nav-item\">\n    <a class=\"nav-link\"\n       [ngClass]=\"{'active': lesson.id == lessonId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </a>\n  </li>\n</ul>\n\n<app-widget-list></app-widget-list>\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.loadLessons(this.moduleId);
    };
    LessonTabsComponent.prototype.loadLessons = function (moduleId) {
        var _this = this;
        this.moduleId = moduleId;
        console.log(moduleId);
        this.service.findLessonsForModule(moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__["LessonServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n<div>\n  <label for=\"username\">Username</label>\n  <input [(ngModel)]=\"username\" placeholder=\"username\" class=\"form-control\" id=\"username\"/>\n\n  <label for=\"password\">Passwrod</label>\n  <input [(ngModel)]=\"password\" placeholder=\"password\" class=\"form-control\" id=\"password\"/>\n\n  <button (click)=\"login(username, password)\" class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n</div>\n\n  <div class=\"dropdown-divider\"></div>\n  <a routerLink=\"/register\">Register</a>\n  <a routerLink=\"/home\" class=\"float-right\">Home</a>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.service
            .login(username, password)
            .then(function (response) { return response.json()
            .then(function (r) {
            if (r == null) {
                alert('Wrong credentials! Try Again!');
            }
            else {
                _this.router.navigate(['profile']);
            }
        }); }
        // , () => alert('Wrong credentials! Try Again!')
        );
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\n  background-color: red;\n  border-color: red;\n}\n\n.active.wbdv a {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Modules</li>\n      <li [ngClass]=\"{'active': module.id == moduleId}\" *ngFor=\"let module of modules\"\n          class=\"list-group-item wbdv\">\n        <a routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n          {{module.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-8\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <div>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             placeholder=\"username\"\n             readonly\n             class=\"form-control\"\n             id=\"username\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstname\">First Name</label>\n      <input [(ngModel)]=\"firstName\"\n             placeholder=\"first name\"\n             class=\"form-control\"\n             id=\"firstname\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastname\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             placeholder=\"lastName\"\n             class=\"form-control\"\n             id=\"lastname\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [(ngModel)]=\"email\"\n             placeholder=\"email\"\n             class=\"form-control\"\n             id=\"email\"/>\n    </div>\n\n    <button (click)=\"update()\"\n            class=\"btn btn-primary btn-block\">\n      Update\n    </button>\n  </div>\n\n  <div class=\"dropdown-divider\"></div>\n\n  <h2>Enrolled Sections</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item\">\n\n      <a routerLink=\"/course/{{enrollment.section.courseId}}\">\n        {{enrollment.section.name}}\n        ({{enrollment.section.seats}} seats available)\n      </a>\n\n    </li>\n  </ul>\n\n  <div class=\"dropdown-divider\"></div>\n\n  <button  routerLink=\"/home\"\n           class=\"btn btn-primary btn\">\n    Home\n  </button>\n  <button  (click)=\"logout()\"\n           class=\"btn btn-danger btn float-right\">\n    Logout\n  </button>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, sectionService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.router = router;
        this.sections = [];
        this.user = {};
    }
    ProfileComponent.prototype.setUser = function () {
        this.user = {
            username: this.username,
            info: {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email
            }
        };
    };
    ProfileComponent.prototype.update = function () {
        this.setUser();
        this.service.update(this.user).then(function () { return alert('Update complete!'); });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.fill = function (user) {
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile()
            .then(function (user) { return _this.fill(user); }, function () { return _this.router.navigate(['login']); });
        this.sectionService
            .findSectionsForStudent()
            .then(function (sections) { return _this.sections = sections; });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <h1>Register</h1>\n\n  <label for=\"username\">Username</label>\n  <input [(ngModel)]=\"username\" placeholder=\"username\" required=\"required\" class=\"form-control\" id=\"username\"/>\n\n  <label for=\"password\">Password</label>\n  <input [(ngModel)]=\"password\" placeholder=\"password\" required=\"required\" class=\"form-control\" id=\"password\"/>\n\n  <label for=\"password2\">Verify Password</label>\n  <input [(ngModel)]=\"password2\" placeholder=\"verify password\" required=\"required\" class=\"form-control\" id=\"password2\"/>\n\n  <button (click)=\"register(username, password, password2)\" class=\"btn btn-primary btn-block\">\n    Register\n  </button>\n\n  <a routerLink=\"/login\">Login</a>\n  <a routerLink=\"/home\" class=\"float-right\">Home</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (password !== password2) {
            alert('Passwords do not match!');
        }
        else {
            this.service.findUserByUsername(username)
                .then(function () { return alert('existing username!'); }, function () {
                return _this.service.createUser(username, password)
                    .then(function () {
                    return _this.router.navigate(['profile']);
                });
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <h1>Sections for course: {{courseId}}</h1>\n\n  <input [(ngModel)]=\"sectionName\" placeholder=\"Section Name\" class=\"form-control\">\n\n  <input [(ngModel)]=\"seats\" placeholder=\"Seats available\" class=\"form-control\">\n\n  <button (click)=\"createSection(sectionName, seats)\" class=\"btn btn-success btn-block\">\n    Add Section\n  </button>\n\n  <ul class=\"list-group\">\n\n    <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n\n      {{section.name}} {{section.seats}}\n\n      <button (click)=\"enroll(section)\"\n              class=\"float-right btn btn-primary\">Enroll</button>\n    </li>\n\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(service, router, route) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.sections = [];
        this.route.params.subscribe(function (params) { return _this.loadSections(params['courseId']); });
    }
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this
            .service
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    SectionListComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        this
            .service
            .createSection(this.courseId, sectionName, seats)
            .then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    SectionListComponent.prototype.enroll = function (section) {
        var _this = this;
        // alert(section._id);
        this.service
            .enrollStudentInSection(section._id)
            .then(function () {
            _this.router.navigate(['profile']);
        });
    };
    SectionListComponent.prototype.ngOnInit = function () {
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course-navigator.service.client.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/course-navigator.service.client.ts ***!
  \*************************************************************/
/*! exports provided: CourseNavigatorServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorServiceClient", function() { return CourseNavigatorServiceClient; });
var CourseNavigatorServiceClient = /** @class */ (function () {
    function CourseNavigatorServiceClient() {
    }
    CourseNavigatorServiceClient.prototype.findAllCourses = function () {
        return fetch('http://localhost:8080/api/course')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch('http://localhost:8080/api/course/'
            + courseId + '/module')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findLessonsForModule = function (moduleId) {
        return fetch('http://localhost:8080/api/module/'
            + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findWidgetsForLesson = function (lessonId) {
        return fetch('http://localhost:8080/api/lesson/'
            + lessonId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return CourseNavigatorServiceClient;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = 'http://localhost:8080/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
    }
    LessonServiceClient.prototype.findLessonsForModule = function (moduleId) {
        return fetch('http://localhost:8080/api/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.MODULE_URL = 'http://localhost:8080/api/course/COURSE_ID/module';
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
    }
    SectionServiceClient.prototype.findSectionsForStudent = function () {
        var url = 'http://localhost:4000/api/student/section';
        return fetch(url, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (sectionId) {
        var url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var section = { courseId: courseId, name: name, seats: seats };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var remoteURL = 'http://webdev-node-hw.herokuapp.com/api';
var localURL = 'http://localhost:4000/api/';
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(remoteURL + 'user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch(remoteURL + 'username/' + username)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(remoteURL + 'login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(remoteURL + 'logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(remoteURL + 'profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch(remoteURL + 'user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.update = function (user) {
        return fetch(remoteURL + 'user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
    }
    WidgetServiceClient.prototype.findWidgetsForLesson = function (lessonId) {
        return fetch('http://localhost:8080/api/lesson/' + lessonId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>White Board</h1>\n  <div>\n    <button routerLink=\"/login\"\n            class=\"btn btn-primary btn\"\n            *ngIf=\"loggedIn\">\n      Login\n    </button>\n    &nbsp;&nbsp;&nbsp;\n    <button routerLink=\"/register\"\n            class=\"btn btn-success btn\"\n            *ngIf=\"loggedIn\">\n      Register\n    </button>\n\n    <button routerLink=\"/profile\"\n            class=\"btn btn-primary btn\"\n            *ngIf=\"notLoggedIn\">\n      Profile\n    </button>\n  </div>\n  <div class=\"dropdown-divider\"></div>\n  <h3>Currently Enrolled</h3>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item\">\n\n      <a routerLink=\"/course/{{enrollment.section.courseId}}\">\n        {{enrollment.section.name}}\n        ({{enrollment.section.seats}} seats available)\n      </a>\n\n    </li>\n  </ul>\n\n  <div class=\"dropdown-divider\"></div>\n  <app-course-grid></app-course-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent(service, sectionService) {
        this.service = service;
        this.sectionService = sectionService;
        this.loggedIn = false;
        this.notLoggedIn = false;
        this.sections = [];
    }
    WhiteBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile()
            .then(function () {
            _this.loggedIn = false;
            _this.notLoggedIn = true;
        }, function () {
            _this.loggedIn = true;
            _this.notLoggedIn = false;
        });
        this.sectionService
            .findSectionsForStudent()
            .then(function (sections) { return _this.sections = sections; });
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whiteboard',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"]])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let widget of widgets\">\n  <div [ngSwitch]=\"widget.widgetType\">\n    <div *ngSwitchCase=\"'HeadingWidget'\">\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\n        <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\n        <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\n        <h4 *ngSwitchCase=\"'4'\">{{widget.text}}</h4>\n        <h5 *ngSwitchCase=\"'5'\">{{widget.text}}</h5>\n        <h6 *ngSwitchCase=\"'6'\">{{widget.text}}</h6>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'LinkWidget'\">\n      <a href=\"{{widget.href}}\">{{widget.text}}</a>\n    </div>\n    <div *ngSwitchCase=\"'ListWidget'\">\n      <h1>ListWidget</h1>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"\n            *ngFor=\"let item of widget.items.split('|')\">\n          {{item}}\n        </li>\n      </ul>\n    </div>\n    <div *ngSwitchCase=\"'Exam'\">\n      <h1>Exam Widget</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setContext(params); });
    }
    WidgetListComponent.prototype.setContext = function (params) {
        this.context = params;
        this.loadWidgets(params.lessonId);
    };
    WidgetListComponent.prototype.loadWidgets = function (lessonId) {
        var _this = this;
        this.service.findWidgetsForLesson(lessonId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wesleyjiang/projects/webdev/angular-hw/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map