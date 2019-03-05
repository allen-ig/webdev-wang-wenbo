(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./Assignment/directives/sortable.directive.ts":
/*!*****************************************************!*\
  !*** ./Assignment/directives/sortable.directive.ts ***!
  \*****************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.newIndexEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (self) {
        jQuery(this._elementRef.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                self._initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                self.newIndexEvent.emit({
                    startIndex: self._initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexEvent", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _views_todolist_todos_todos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/todolist/todos/todos.component */ "./src/app/views/todolist/todos/todos.component.ts");
/* harmony import */ var _views_todolist_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/todolist/about/about.component */ "./src/app/views/todolist/about/about.component.ts");
/* harmony import */ var _views_todolist_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/todolist/todo-item/todo-item.component */ "./src/app/views/todolist/todo-item/todo-item.component.ts");
/* harmony import */ var _views_todolist_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/todolist/header/header.component */ "./src/app/views/todolist/header/header.component.ts");
/* harmony import */ var _views_todolist_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/todolist/add-todo/add-todo.component */ "./src/app/views/todolist/add-todo/add-todo.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.ts");























// The custom routes of the Angular app.
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_10__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/header', component: _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_13__["WidgetHeaderComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/image', component: _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_14__["WidgetImageComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/youtube', component: _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_16__["WidgetYoutubeComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_22__["WidgetEditComponent"] },
    { path: 'todos', component: _views_todolist_todos_todos_component__WEBPACK_IMPORTED_MODULE_17__["TodosComponent"] },
    { path: 'about', component: _views_todolist_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// export const routing = RouterModule.forRoot(routes);
// import all views here and export, and then import in the app.module.ts file
// to prevent duplicate imports
var routingComponents = [_views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
    _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
    _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"],
    _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_10__["PageListComponent"],
    _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__["PageNewComponent"],
    _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteNewComponent"],
    _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"],
    _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteListComponent"],
    _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__["WidgetChooserComponent"],
    _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
    _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_16__["WidgetYoutubeComponent"],
    _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_14__["WidgetImageComponent"],
    _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_13__["WidgetHeaderComponent"],
    _views_widget_widget_edit_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_22__["WidgetEditComponent"],
    _views_todolist_todos_todos_component__WEBPACK_IMPORTED_MODULE_17__["TodosComponent"],
    _views_todolist_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_19__["TodoItemComponent"],
    _views_todolist_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
    _views_todolist_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_21__["AddTodoComponent"],
    _views_todolist_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <!--<a routerLink=\"/login\">Login</a>-->\n  <!--<a routerLink=\"/register\">Register</a>-->\n  <!--<a routerLink=\"/profile\">Profile</a>-->\n</router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// This is the decorator, which include the metadata for the component
var AppComponent = /** @class */ (function () {
    // _bgColor = 'green';
    function AppComponent() {
        this.title = 'webdev-wang-wenbo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_website_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/website.service */ "./src/app/services/website.service.ts");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/page.service */ "./src/app/services/page.service.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _services_get_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/get-users.service */ "./src/app/services/get-users.service.ts");
/* harmony import */ var _shared_confirm_equal_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/confirm-equal.validator */ "./src/app/shared/confirm-equal.validator.ts");
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/safe-url.pipe */ "./src/app/pipes/safe-url.pipe.ts");
/* harmony import */ var _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/change-bg-color.directive */ "./src/app/directives/change-bg-color.directive.ts");
/* harmony import */ var _shared_input_range_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/input-range.validator */ "./src/app/shared/input-range.validator.ts");
/* harmony import */ var _shared_percentage_range_validator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/percentage-range.validator */ "./src/app/shared/percentage-range.validator.ts");
/* harmony import */ var _Assignment_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Assignment/directives/sortable.directive */ "./Assignment/directives/sortable.directive.ts");
/* harmony import */ var _shared_file_input_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/file-input.validator */ "./src/app/shared/file-input.validator.ts");






// import { routing } from './app-routing.module';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"],
                _shared_confirm_equal_validator__WEBPACK_IMPORTED_MODULE_12__["ConfirmEqualValidator"],
                _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_13__["SafeUrlPipe"],
                _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_14__["ChangeBgColorDirective"],
                _shared_input_range_validator__WEBPACK_IMPORTED_MODULE_15__["InputRangeValidator"],
                _shared_percentage_range_validator__WEBPACK_IMPORTED_MODULE_16__["PercentageRangeValidator"],
                _Assignment_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_17__["SortableDirective"],
                _shared_file_input_validator__WEBPACK_IMPORTED_MODULE_18__["FileInputValidator"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                // import this FormsModule in order to use ngModel directive
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_website_service__WEBPACK_IMPORTED_MODULE_8__["WebsiteService"], _services_page_service__WEBPACK_IMPORTED_MODULE_9__["PageService"], _services_widget_service__WEBPACK_IMPORTED_MODULE_10__["WidgetService"], _services_get_users_service__WEBPACK_IMPORTED_MODULE_11__["GetUsersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/change-bg-color.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/change-bg-color.directive.ts ***!
  \*********************************************************/
/*! exports provided: ChangeBgColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBgColorDirective", function() { return ChangeBgColorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeBgColorDirective = /** @class */ (function () {
    function ChangeBgColorDirective(_elementRef) {
        this._elementRef = _elementRef;
    }
    ChangeBgColorDirective.prototype.onClick = function () {
        this.changeBgColor(this.bgColor);
    };
    // the function for this directive, pass in the color
    ChangeBgColorDirective.prototype.changeBgColor = function (color) {
        this._elementRef.nativeElement.style.background = color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appChangeBgColor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChangeBgColorDirective.prototype, "bgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ChangeBgColorDirective.prototype, "onClick", null);
    ChangeBgColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appChangeBgColor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ChangeBgColorDirective);
    return ChangeBgColorDirective;
}());



/***/ }),

/***/ "./src/app/models/Todo.ts":
/*!********************************!*\
  !*** ./src/app/models/Todo.ts ***!
  \********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/pipes/safe-url.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/safe-url.pipe.ts ***!
  \****************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeUrlPipe = /** @class */ (function () {
    // use this sanitizer to transform the video url to trusted url
    function SafeUrlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeUrl'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/services/get-users.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/get-users.service.ts ***!
  \***********************************************/
/*! exports provided: GetUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersService", function() { return GetUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetUsersService = /** @class */ (function () {
    function GetUsersService(_http) {
        this._http = _http;
        this._url = '/assets/data/users.json';
    }
    // use this service to get the Observable of the data fetched from the users.json file stored locally
    GetUsersService.prototype.getUsers = function () {
        return this._http.get(this._url);
    };
    GetUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetUsersService);
    return GetUsersService;
}());



/***/ }),

/***/ "./src/app/services/page.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/page.service.ts ***!
  \******************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        // private _pages = [
        //   {_id: '1', name: 'Home Page', websiteId: '3', title: 'Home'},
        //   {_id: '2', name: 'Index Page', websiteId: '3', title: 'Index'},
        //   {_id: '3', name: 'About Page', websiteId: '3', title: 'Page'},
        //   {_id: '4', name: 'Home Page', websiteId: '4', title: 'Home'},
        //   {_id: '5', name: 'Index Page', websiteId: '5', title: 'Index'},
        //   {_id: '6', name: 'About Page', websiteId: '6', title: 'Page'},
        //   {_id: '7', name: 'Home Page', websiteId: '7', title: 'Home'},
        //   {_id: '8', name: 'Index Page', websiteId: '8', title: 'Index'},
        //   {_id: '9', name: 'About Page', websiteId: '9', title: 'Page'},
        //   {_id: '10', name: 'Home Page', websiteId: '10', title: 'Home'},
        //   {_id: '11', name: 'Index Page', websiteId: '11', title: 'Index'},
        //   {_id: '12', name: 'About Page', websiteId: '12', title: 'Page'},
        //   {_id: '13', name: 'Home Page', websiteId: '1', title: 'Home'},
        //   {_id: '14', name: 'Index Page', websiteId: '1', title: 'Index'},
        //   {_id: '15', name: 'About Page', websiteId: '2', title: 'Page'}
        // ];
        // the http calls URLs
        this._createPageUrl = "/api/website/";
        this._findAllPagesForWebsiteUrl = "/api/website/";
        this._findPageByIdUrl = "/api/page/";
        this._updatePageUrl = "/api/page/";
        this._deletePageUrl = "/api/page/";
    }
    // adds the page parameter instance to the local page array. The new page's websiteId is set to the websiteId parameter
    PageService.prototype.createPage = function (websiteId, page) {
        var new_page = {
            _id: page._id,
            name: page.name,
            websiteId: websiteId,
            title: page.title
        };
        new_page._id = new Date().getTime() + "";
        return this._http.post(this._createPageUrl + websiteId + "/page", new_page);
    };
    // retrieves the page in local page array whose websiteId matches the parameter websiteId
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        return this._http.get(this._findAllPagesForWebsiteUrl + websiteId + "/page");
    };
    // retrieves the page in local page array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this._findPageByIdUrl + pageId);
    };
    // updates the page in local page array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this._updatePageUrl + pageId, page);
    };
    // removes the page from local page array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this._deletePageUrl + pageId);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.todosUrl = 'https://jsonplaceholder.typicode.com/todos';
        this.todoLimit = '?_limit=5';
    }
    // get todos
    TodoService.prototype.getTodos = function () {
        return this.http.get("" + this.todosUrl + this.todoLimit);
    };
    // delete todos
    TodoService.prototype.deleteTodo = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.delete(url, httpOptions);
    };
    // add todo
    TodoService.prototype.addTodo = function (todo) {
        return this.http.post(this.todosUrl, todo, httpOptions);
    };
    // toggle completed
    TodoService.prototype.toggleCompleted = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.put(url, todo, httpOptions);
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        // private _users = [
        //   {
        //     _id: "123",
        //     username: "alice",
        //     password: "alice",
        //     firstName: "Alice",
        //     lastName: "Wonder"
        //   },
        //   {
        //     _id: "234",
        //     username: "bob",
        //     password: "bob",
        //     firstName: "Bob",
        //     lastName: "Marley"
        //   },
        //   {
        //     _id: "345",
        //     username: "charlie",
        //     password: "charlie",
        //     firstName: "Charlie",
        //     lastName: "Garcia"
        //   },
        //   {
        //     _id: "456",
        //     username: "john",
        //     password: "john",
        //     firstName: "John",
        //     lastName: "Doe"
        //   }
        // ];
        // private _users = [];
        // private _getUsersErrorMessage: string;
        // constructor(private _getUsersService: GetUsersService) {
        //   this._getUsersService.getUsers().subscribe(
        //     data => this._users = data,
        //     error => this._getUsersErrorMessage = error
        //   );
        // }
        // the http REST call urls
        this._findUserByIdUrl = "/api/user/";
        this._findUserByUsernameUrl = "/api/user?username=";
        this._findUserByCredentialsUrl = "/api/user?username=";
        this._updateUserUrl = "/api/user/";
        this._deleteUserUrl = "/api/user/";
        this._createUserUrl = '/api/user';
        this.api = {
            createUser: this.createUser,
            findUserById: this.findUserById,
            findUserByUsername: this.findUserByUsername,
            findUserByCredentials: this.findUserByCredentials,
            updateUser: this.updateUser,
            deleteUser: this.deleteUser
        };
    }
    // adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        var new_user = {
            _id: "",
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName
        };
        new_user._id = Math.random() + "";
        return this._http.post(this._createUserUrl, new_user);
    };
    // post new user to the database, the http version of the above method
    // createUser(user: User) {
    //   return this._http.post<User>(this._postUrl, user);
    // }
    // the http version
    // returns the user in local users array whose Id matches the parameter userId
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this._findUserByIdUrl + userId);
    };
    // returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this._findUserByUsernameUrl + username);
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this._findUserByCredentialsUrl + username + "&password=" + password);
    };
    // updates the user in local users array whose _id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
        console.log("Updated the user to: " + JSON.stringify(user));
        return this._http.put(this._updateUserUrl + userId, user);
    };
    // removes the user whose _id matches the userId parameter
    UserService.prototype.deleteUser = function (userId) {
        console.log('Deleting the user with Id: ' + userId);
        return this._http.delete(this._deleteUserUrl + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/website.service.ts ***!
  \*********************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        // private _websites = [
        //   {_id: '1', name: 'Facebook', developerId: '456', description: 'Lorem'},
        //   {_id: '2', name: 'Twitter', developerId: '456', description: 'Lorem'},
        //   {_id: '3', name: 'Gizmodo', developerId: '456', description: 'Lorem'},
        //   {_id: '4', name: 'Go', developerId: '123', description: 'Lorem'},
        //   {_id: '5', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem'},
        //   {_id: '6', name: 'Checkers', developerId: '123', description: 'Lorem'},
        //   {_id: '7', name: 'Chess', developerId: '234', description: 'The chess app'},
        //   {_id: '8', name: 'Soccer', developerId: '234', description: 'We love soccer'},
        //   {_id: '9', name: 'Tennis', developerId: '234', description: 'Mario Tennis!'},
        //   {_id: '10', name: 'Google', developerId: '345', description: 'Google'},
        //   {_id: '11', name: 'Nike', developerId: '345', description: 'Nike'},
        //   {_id: '12', name: 'Hello Kitty', developerId: '345', description: 'Hello Kitty'}
        // ];
        // the URLs to call the http services API
        this._createWebsiteUrl = '/api/user/';
        this._findAllWebsitesForUserUrl = '/api/user/';
        this._findWebsiteByIdUrl = '/api/website/';
        this._updateWebsiteUrl = '/api/website/';
        this._deleteWebsiteUrl = '/api/website/';
    }
    // adds the website parameter instance to the local websites array.
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var new_website = {
            _id: '',
            name: website.name,
            developerId: userId,
            description: website.description
        };
        new_website._id = new Date().getTime() + '';
        return this._http.post(this._createWebsiteUrl + userId + '/website', new_website);
    };
    // retrieves the websites in local websites array whose developerId matches the parameter userId
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this._findAllWebsitesForUserUrl + userId + '/website');
    };
    // retrieves teh website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this._findWebsiteByIdUrl + websiteId);
    };
    // updates the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this._updateWebsiteUrl + websiteId, website);
    };
    // removes the website from local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this._deleteWebsiteUrl + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/widget.service.ts ***!
  \********************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        // private _widgets = [
        //   {_id: '1', widgetType: 'HEADER', pageId: '13', size: '2', text: 'Hello meow~'},
        //   {_id: '2', widgetType: 'HEADER', pageId: '13', size: '4', text: 'I am a cutie meow~meow~'},
        //   {
        //     _id: '3',
        //     widgetType: 'IMAGE',
        //     pageId: '13',
        //     width: '100%',
        //     url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        //       'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
        //   },
        //   {_id: '4', widgetType: 'HEADER', pageId: '13', size: '4', text: 'Here is a cute video for you~'},
        //   {_id: '5', widgetType: 'YOUTUBE', pageId: '13', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
        //   {_id: '6', widgetType: 'HEADER', pageId: '14', size: '2', text: 'Hello meow~'},
        //   {_id: '7', widgetType: 'HEADER', pageId: '15', size: '4', text: 'I am a cutie meow~meow~'},
        //   {
        //     _id: '8',
        //     widgetType: 'IMAGE',
        //     pageId: '10',
        //     width: '100%',
        //     url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        //       'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
        //   },
        //   {_id: '9', widgetType: 'HEADER', pageId: '12', size: '4', text: 'Here is a cute video for you~'},
        //   {_id: '11', widgetType: 'YOUTUBE', pageId: '11', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
        //   {_id: '22', widgetType: 'HEADER', pageId: '9', size: '2', text: 'Hello meow~'},
        //   {_id: '33', widgetType: 'HEADER', pageId: '8', size: '4', text: 'I am a cutie meow~meow~'},
        //   {
        //     _id: '44',
        //     widgetType: 'IMAGE',
        //     pageId: '7',
        //     width: '100%',
        //     url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        //       'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
        //   },
        //   {_id: '55', widgetType: 'HEADER', pageId: '6', size: '4', text: 'Here is a cute video for you~'},
        //   {_id: '66', widgetType: 'YOUTUBE', pageId: '5', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'},
        //   {_id: '77', widgetType: 'HEADER', pageId: '4', size: '2', text: 'Hello meow~'},
        //   {_id: '88', widgetType: 'HEADER', pageId: '3', size: '4', text: 'I am a cutie meow~meow~'},
        //   {
        //     _id: '99',
        //     widgetType: 'IMAGE',
        //     pageId: '2',
        //     width: '100%',
        //     url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.' +
        //       'jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg'
        //   },
        //   {_id: '111', widgetType: 'HEADER', pageId: '1', size: '4', text: 'Here is a cute video for you~'},
        //   {_id: '222', widgetType: 'YOUTUBE', pageId: '1', width: '100%', url: 'https://www.youtube.com/embed/rNSnfXl1ZjU'}
        // ];
        // the http calls URLs
        this._createWidgetUrl = '/api/page/';
        this._findAllWidgetsForPageUrl = '/api/page/';
        this._findWidgetByIdUrl = '/api/widget/';
        this._updateWidgetUrl = '/api/widget/';
        this._deleteWidgetUrl = '/api/widget/';
        this._updateWidgetOrderUrl = '/api/page/';
    }
    // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this._createWidgetUrl + pageId + '/widget', widget);
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this._findAllWidgetsForPageUrl + pageId + '/widget');
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this._findWidgetByIdUrl + widgetId);
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this._updateWidgetUrl + widgetId, widget);
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this._deleteWidgetUrl + widgetId);
    };
    // update the order of the widget at page Id from start index to end index
    WidgetService.prototype.updateWidgetOrder = function (pageId, startIndex, endIndex) {
        return this._http.put(this._updateWidgetOrderUrl + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex, null);
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/shared/confirm-equal.validator.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/confirm-equal.validator.ts ***!
  \***************************************************/
/*! exports provided: ConfirmEqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidator", function() { return ConfirmEqualValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ConfirmEqualValidator = /** @class */ (function () {
    function ConfirmEqualValidator() {
    }
    ConfirmEqualValidator_1 = ConfirmEqualValidator;
    ConfirmEqualValidator.prototype.validate = function (control) {
        // now use the input value to find the control to compare to
        var controlToCompare = control.parent.get(this.compareTo);
        // then the main logic to return either the object, if fails, or null, if passes
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidator_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appConfirmEqualValidator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmEqualValidator.prototype, "compareTo", void 0);
    ConfirmEqualValidator = ConfirmEqualValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidator_1,
                    multi: true
                }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmEqualValidator);
    return ConfirmEqualValidator;
}());



/***/ }),

/***/ "./src/app/shared/file-input.validator.ts":
/*!************************************************!*\
  !*** ./src/app/shared/file-input.validator.ts ***!
  \************************************************/
/*! exports provided: FileInputValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputValidator", function() { return FileInputValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FileInputValidator = /** @class */ (function () {
    function FileInputValidator(_elementRef) {
        this._elementRef = _elementRef;
    }
    FileInputValidator_1 = FileInputValidator;
    FileInputValidator.prototype.validate = function (control) {
        // check if has file input
        var files = this._elementRef.nativeElement.files;
        if (files.length === 0) {
            return { 'noFile': true };
        }
        // then check the file type
        var fileType = files[0].type.toLowerCase();
        var typeValid = this.allowedType.test(fileType);
        if (!typeValid) {
            return { 'invalidType': true };
        }
        // then check file size
        var fileSize = files[0].size;
        if (fileSize > this.maxSize) {
            return { 'invalidSize': true };
        }
    };
    var FileInputValidator_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FileInputValidator.prototype, "maxSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", RegExp)
    ], FileInputValidator.prototype, "allowedType", void 0);
    FileInputValidator = FileInputValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appFileInputValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: FileInputValidator_1,
                    multi: true
                }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FileInputValidator);
    return FileInputValidator;
}());



/***/ }),

/***/ "./src/app/shared/input-range.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/input-range.validator.ts ***!
  \*************************************************/
/*! exports provided: InputRangeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRangeValidator", function() { return InputRangeValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm5/internal-compatibility/index.js");




var InputRangeValidator = /** @class */ (function () {
    function InputRangeValidator() {
    }
    InputRangeValidator_1 = InputRangeValidator;
    InputRangeValidator.prototype.validate = function (control) {
        var inputValue = control.value;
        if (Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__["isNumeric"])(inputValue) && inputValue >= this.min && inputValue <= this.max) {
            return null;
        }
        else {
            return { 'notValid': true };
        }
    };
    var InputRangeValidator_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputRangeValidator.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputRangeValidator.prototype, "max", void 0);
    InputRangeValidator = InputRangeValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appInputRangeValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: InputRangeValidator_1,
                    multi: true
                }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputRangeValidator);
    return InputRangeValidator;
}());



/***/ }),

/***/ "./src/app/shared/percentage-range.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/percentage-range.validator.ts ***!
  \******************************************************/
/*! exports provided: PercentageRangeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentageRangeValidator", function() { return PercentageRangeValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PercentageRangeValidator = /** @class */ (function () {
    function PercentageRangeValidator() {
        // initialize a RegEx instance
        this._regex = new RegExp('^[-+]?[0-9]*\\.?[0-9]+%$');
    }
    PercentageRangeValidator_1 = PercentageRangeValidator;
    PercentageRangeValidator.prototype.validate = function (control) {
        var testResult = this._regex.test(control.value);
        if (testResult) {
            var number = parseFloat(control.value);
            if (number >= this.min && number <= this.max) {
                return null;
            }
        }
        return { 'notValid': true };
    };
    var PercentageRangeValidator_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PercentageRangeValidator.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PercentageRangeValidator.prototype, "max", void 0);
    PercentageRangeValidator = PercentageRangeValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPercentageRangeValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: PercentageRangeValidator_1,
                    multi: true
                }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PercentageRangeValidator);
    return PercentageRangeValidator;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page']\"\n       class=\"navbar-link cl-text-black cl-icon-padding float-left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-white cl-text-bold mr-auto\"\n       [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId]\">\n      Edit Page\n    </a>\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page']\"\n       class=\"navbar-link cl-icon-padding cl-text-black float-right\"\n       (click)=\"onEditPage()\">\n      <button class=\"fas fa-check fontawesome_icon btn btn-light bg-light border-light cl-text-bold\"\n              [disabled]=\"editPageForm.invalid\"></button>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #editPageForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\"\n             class=\"cl-text-bold\">\n        Name\n      </label>\n      <input type=\"text\"\n             required\n             ngModel\n             name=\"page-name\"\n             #pageName=\"ngModel\"\n             [(ngModel)]=\"this._page.name\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\"\n             [class.is-invalid]=\"pageName.touched && pageName.invalid\">\n      <small class=\"text-danger\"\n             *ngIf=\"pageName.touched && pageName.invalid\">Page Name is required!\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\"\n             class=\"cl-text-bold\">\n        Title\n      </label>\n      <input type=\"text\"\n             ngModel\n             name=\"page-title\"\n             #pageTitle=\"ngModel\"\n             [(ngModel)]=\"this._page.title\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\">\n    </div>\n  </form>\n  <button type=\"button\"\n          class=\"btn btn-danger  btn-block\"\n          [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page']\"\n          (click)=\"onDeletePage()\">\n    Delete\n  </button>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto navbar-link\">\n      <a [routerLink]=\"['/user/'+this._userId]\"\n         class=\"cl-icon-padding\">\n        <span class=\"fas fa-user fontawsome_icon cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service */ "./src/app/services/page.service.ts");




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(_activatedRoute, _pageService) {
        this._activatedRoute = _activatedRoute;
        this._pageService = _pageService;
        this._page = {
            _id: "",
            name: "",
            websiteId: "",
            title: ""
        };
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get properties by the route parameters
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this._userId = params.uid;
            _this._websiteId = params.wid;
            _this._pageId = params.pid;
            // get the page associated with the pageId
            _this._pageService.findPageById(_this._pageId).subscribe(function (data) {
                // deep copy the found page and assign it to the local page variable
                _this._page = JSON.parse(JSON.stringify(data));
                console.log("Deep copied the page: ");
                console.log(data);
            });
        });
    };
    PageEditComponent.prototype.onEditPage = function () {
        var tempPage = JSON.parse(JSON.stringify(this._page));
        this._pageService.updatePage(this._pageId, tempPage).subscribe(function (data) {
            console.log("Updated the page to: ");
            console.log(data);
        });
    };
    PageEditComponent.prototype.onDeletePage = function () {
        this._pageService.deletePage(this._pageId).subscribe(function (data) {
            console.log("Deleted the page: ");
            console.log(data);
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-page-edit",
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/' + this._userId + '/website']\"\n       class=\"navbar-link cl-text-black float-left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-white cl-text-bold mr-auto\"\n       [routerLink]=\"['/user/' + this._userId + '/website/' + this._websiteId + '/page']\">\n      Pages\n    </a>\n    <a [routerLink]=\"['/user/' + this._userId + '/website/' + this._websiteId + '/page/new']\"\n       class=\"navbar-link navbar-brand cl-icon-padding cl-text-black float-right\">\n          <span class=\"fas fa-plus fontawsome_icon\">\n          </span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\"\n      *ngFor=\"let page of this._pages; index as i\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/' + this._userId + '/website/' + this._websiteId + '/page/' + page._id]\">\n        <span class=\"fas fa-cog fontawsome_icon float-right cl-text-blue\"></span>\n      </a>\n      <a [routerLink]=\"['/user/' + this._userId + '/website/' + this._websiteId + '/page/' + page._id + '/widget']\"\n         class=\"cl-text-blue\">\n        {{ page.name }}\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto navbar-text\">\n      <a [routerLink]=\"['/user/' + this._userId]\"\n         class=\"cl-icon-padding\">\n        <span class=\"fas fa-user fontawsome_icon cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service */ "./src/app/services/page.service.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(_activatedRoute, _pageService) {
        this._activatedRoute = _activatedRoute;
        this._pageService = _pageService;
        this._pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // update the properties with route parameters
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this._userId = params.uid;
            _this._websiteId = params.wid;
            // then get the pages associated with the websiteId
            _this._pageService
                .findPagesByWebsiteId(_this._websiteId)
                .subscribe(function (data) {
                _this._pages = data;
                console.log("Getting the pages with website Id " + _this._websiteId + ": ");
                console.log(data);
            });
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-page-list",
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page']\"\n       class=\"navbar-link cl-text-black cl-icon-padding float-left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-black cl-text-bold mr-auto\"\n       [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/new']\">\n      New Page\n    </a>\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page']\"\n       class=\"navbar-link cl-icon-padding cl-text-black float-right\"\n       (click)=\"onCreateNewPage()\">\n      <button class=\"fas fa-check fontawesome_icon btn btn-light bg-light border-light cl-text-bold\"\n              [disabled]=\"newPageForm.invalid\"></button>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #newPageForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\"\n             class=\"cl-text-bold\">Name</label>\n      <input type=\"text\"\n             required\n             ngModel\n             name=\"page-name\"\n             #pageName=\"ngModel\"\n             [(ngModel)]=\"this._name\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\"\n             [class.is-invalid]=\"pageName.touched && pageName.invalid\">\n      <small class=\"text-danger\"\n             *ngIf=\"pageName.touched && pageName.invalid\">Page name is required!\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\"\n             class=\"cl-text-bold\">Title</label>\n      <input type=\"text\"\n             ngModel\n             name=\"page-title\"\n             #pageTitle=\"ngModel\"\n             [(ngModel)]=\"this._title\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"float-right navbar-text ml-auto\">\n      <a [routerLink]=\"['/user/'+this._userId]\"\n         class=\"cl-icon-padding\">\n        <span class=\"fas fa-user fontawsome_icon cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service */ "./src/app/services/page.service.ts");




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(_activatedRoute, _pageService) {
        this._activatedRoute = _activatedRoute;
        this._pageService = _pageService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // update properties with parameters of the route
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this._userId = params.uid;
            _this._websiteId = params.wid;
        });
    };
    PageNewComponent.prototype.onCreateNewPage = function () {
        var newPage = {
            _id: "",
            name: this._name,
            websiteId: this._websiteId,
            title: this._title
        };
        this._pageService.createPage(this._websiteId, newPage).subscribe(function (data) {
            console.log("Created the new page: ");
            console.log(data);
        });
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-page-new",
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/todolist/about/about.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/todolist/about/about.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RvZG9saXN0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/todolist/about/about.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/todolist/about/about.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>About</h1>\n  <p>This is the TodoList App v1.0.0, made by Wenbo Wang for Angular exercise.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/views/todolist/about/about.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/todolist/about/about.component.ts ***!
  \*********************************************************/
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
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/views/todolist/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/views/todolist/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/views/todolist/add-todo/add-todo.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/todolist/add-todo/add-todo.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  display: flex;\n}\n\n.form input[type='text'] {\n  flex: 10;\n  padding: 5px;\n}\n\n.form input[type='submit'] {\n  flex: 2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdG9kb2xpc3QvYWRkLXRvZG8vYWRkLXRvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90b2RvbGlzdC9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICBmbGV4OiAxMDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gIGZsZXg6IDI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/todolist/add-todo/add-todo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/todolist/add-todo/add-todo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (ngSubmit)=\"onSubmit()\">\n  <input type=\"text\"\n         name=\"title\"\n         [(ngModel)]=\"title\"\n         placeholder=\"Please add todo...\">\n  <!--{{ title }}-->\n  <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary\">\n</form>\n"

/***/ }),

/***/ "./src/app/views/todolist/add-todo/add-todo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/todolist/add-todo/add-todo.component.ts ***!
  \***************************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddTodoComponent = /** @class */ (function () {
    function AddTodoComponent() {
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    // something happens on submit
    AddTodoComponent.prototype.onSubmit = function () {
        var todo = {
            title: this.title,
            completed: false
        };
        this.addTodo.emit(todo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddTodoComponent.prototype, "addTodo", void 0);
    AddTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-todo',
            template: __webpack_require__(/*! ./add-todo.component.html */ "./src/app/views/todolist/add-todo/add-todo.component.html"),
            styles: [__webpack_require__(/*! ./add-todo.component.css */ "./src/app/views/todolist/add-todo/add-todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddTodoComponent);
    return AddTodoComponent;
}());



/***/ }),

/***/ "./src/app/views/todolist/header/header.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/todolist/header/header.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #333;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n.header a {\n  color: #fff;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdG9kb2xpc3QvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RvZG9saXN0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGVhZGVyIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/todolist/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/todolist/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>TodoList</h1>\n  <nav>\n    <a routerLink=\"/\">Home</a> | <a routerLink=\"/about\">About</a>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/views/todolist/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/todolist/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // there are 3 ways to make the selector,
            // 1. use the auto generated one html tag, like app-xxx
            // 2. make it a class, like .app-xxx, so in html file, use it in class="..."
            // 3. in brackets, like [app-xxx], so in html file, use it like <div app-xxx>...</div>
            selector: 'app-header',
            // selector: '.app-header',
            // selector: '[app-header]',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/todolist/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/todolist/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/todolist/todo-item/todo-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/todolist/todo-item/todo-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del {\n  background: #ff0000;\n  color: #fff;\n  border: none;\n  padding: 5px 9px;\n  border-radius: 50%;\n  cursor: pointer;\n  float: right;\n}\n\n.todo {\n  background: #f4f4f4;\n  padding: 10px;\n  border-bottom: 1px #ccc dotted;\n}\n\n.is-complete {\n  text-decoration: line-through;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdG9kb2xpc3QvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90b2RvbGlzdC90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsIHtcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRvZG8ge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggI2NjYyBkb3R0ZWQ7XG59XG5cbi5pcy1jb21wbGV0ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/todolist/todo-item/todo-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/todolist/todo-item/todo-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setClasses()\">\n  <p>\n    <!--todo-item works!-->\n    <label>\n      <input (change)=\"onToggle(todo)\" type=\"checkbox\" />\n    </label>\n    {{ todo.title }}\n    <button (click)=\"onDelete(todo)\" class=\"del\">Delete</button>\n  </p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/todolist/todo-item/todo-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/todolist/todo-item/todo-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Todo */ "./src/app/models/Todo.ts");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/todo.service */ "./src/app/services/todo.service.ts");




var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(todoService) {
        this.todoService = todoService;
        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    // Set Dynamic classes
    TodoItemComponent.prototype.setClasses = function () {
        var classes = {
            todo: true,
            'is-complete': this.todo.completed
        };
        return classes;
    };
    // something happens when toggled
    TodoItemComponent.prototype.onToggle = function (todo) {
        console.log('Toggled');
        // toggle in UI
        todo.completed = !todo.completed;
        // toggle on server
        this.todoService.toggleCompleted(todo).subscribe(function (todo) {
            return console.log(todo);
        });
    };
    // something happens when deleted
    TodoItemComponent.prototype.onDelete = function (todo) {
        console.log('Deleted');
        this.deleteTodo.emit(todo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Todo__WEBPACK_IMPORTED_MODULE_2__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TodoItemComponent.prototype, "deleteTodo", void 0);
    TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/views/todolist/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/views/todolist/todo-item/todo-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/views/todolist/todos/todos.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/todolist/todos/todos.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RvZG9saXN0L3RvZG9zL3RvZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/todolist/todos/todos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/todolist/todos/todos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h1>Todos</h1>-->\n<!--<p>-->\n<!--todos works!-->\n<!--</p>-->\n\n<!--<ul *ngFor=\"let todo of todos\">-->\n<!--<li>{{ todo.title }}</li>-->\n<!--</ul>-->\n\n<!--add todo item-->\n<app-add-todo (addTodo)=\"addTodohaha($event)\"></app-add-todo>\n<!--start looping through items-->\n<app-todo-item\n  *ngFor=\"let td of todos\"\n  [todo]=\"td\"\n  (deleteTodo)=\"deleteTodohaha($event)\"\n>\n</app-todo-item>\n"

/***/ }),

/***/ "./src/app/views/todolist/todos/todos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/todolist/todos/todos.component.ts ***!
  \*********************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/todo.service */ "./src/app/services/todo.service.ts");



var TodosComponent = /** @class */ (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodosComponent.prototype.deleteTodohaha = function (todo) {
        console.log('delete me');
        // for the UI, to remove the list that has the same title
        // using filter
        // Remove from UI
        this.todos = this.todos.filter(function (t) { return t.id !== todo.id; });
        // for the server side
        // Remove from server
        this.todoService.deleteTodo(todo).subscribe();
    };
    TodosComponent.prototype.addTodohaha = function (todo) {
        var _this = this;
        this.todoService.addTodo(todo).subscribe(function (todo) {
            _this.todos.push(todo);
        });
    };
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/views/todolist/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/views/todolist/todos/todos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\">\n  <div>\n    <h2>Homework 3</h2>\n    <h3>Wenbo Wang</h3>\n    <h3>wang.wenbo@husky.neu.edu</h3>\n  </div>\n  <br>\n  <hr>\n\n  <!--test the sortable directive-->\n  <div>\n    <button type=\"button\"\n            class=\"btn btn-light\"\n            (click)=\"this._toggleTestSortable()\">\n      Test Sortable(on/off)\n    </button>\n    <div *ngIf=\"this._testSortableFlag\">\n      <h3>Testing sortable items...</h3>\n      <ul\n        appSortable (newIndexEvent)=\"reorderItems($event)\">\n        <li *ngFor=\"let item of this._sortableItems; index as i\">{{ i }}. {{ item }}</li>\n      </ul>\n    </div>\n  </div>\n  <br>\n  <hr>\n\n  <!--display this errorMsg if the entered credentials do not match-->\n  <div class=\"alert alert-danger\"\n       *ngIf=\"this.errorFlag\">\n    {{ this.errorMsg }}\n  </div>\n\n  <form #loginForm=\"ngForm\"\n        (ngSubmit)=\"login()\">\n    <h1>Login</h1>\n    <div class=\"form-group\">\n      <input type=\"text\"\n             required\n             ngModel\n             name=\"username\"\n             #username=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Username\"\n             [class.is-invalid]=\"username.touched && username.invalid\"/>\n      <small class=\"text-danger\"\n             *ngIf=\"username.touched && username.invalid\">\n        Username is required!\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\"\n             required\n             ngModel\n             name=\"password\"\n             #password=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Password\"\n             [class.is-invalid]=\"password.touched && password.invalid\"/>\n      <small class=\"text-danger\"\n             *ngIf=\"password.touched && password.invalid\">\n        Password is required!\n      </small>\n    </div>\n    <button type=\"submit\"\n            class=\"btn btn-primary btn-block\"\n            [disabled]=\"!loginForm.valid\">\n      Login\n    </button>\n    <button type=\"button\"\n            class=\"btn btn-success btn-block\"\n            [routerLink]=\"['/register']\">\n      Register\n    </button>\n\n    <!--<div [appChangeBgColor]=\"this._bgColor\">hello world</div>-->\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");






// Array.prototype.insert = function (index, item) {
//   this.splice(index, 0, item);
// };
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.errorMsg = 'Invalid username or password!';
        this._bgColor = 'green';
        // the array of items to test sortable directive
        this._testSortableFlag = false;
        this._sortableItems = [
            'Xbox One', 'Xbox One X', 'PS4', 'PS4 Pro', 'Nintendo Switch', 'PC'
        ];
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // firstly, access the entered form data from form reference variable
        this.username = this.form.value.username;
        this.password = this.form.value.password;
        console.log(this.username);
        console.log(this.password);
        // secondly, decide if the entered data match via the credential service, UserService
        this._userService
            .findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            console.log('login() return: ');
            console.log(user);
            if (user) {
                console.log('Login successful!');
                _this.errorFlag = false;
                _this._router.navigate(['/user', user._id]);
            }
            else {
                console.log('Login failed!');
                _this.errorFlag = true;
            }
        }, function (error) {
            console.log(error.message || 'User not found while loging in...');
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.reorderItems = function (indices) {
        console.log('Start index: ' + indices.startIndex);
        console.log('End index: ' + indices.endIndex);
        // now insert the item into the new position
        this._moveToNewPosition(indices.startIndex, indices.endIndex);
        console.log('Now the items are: ');
        console.log(this._sortableItems);
    };
    LoginComponent.prototype._moveToNewPosition = function (start, end) {
        var item = this._sortableItems[start];
        this._sortableItems.splice(start, 1);
        this._sortableItems.splice(end, 0, item);
    };
    LoginComponent.prototype._toggleTestSortable = function () {
        this._testSortableFlag = !this._testSortableFlag;
    };
    // use constructor to import services basically, but not use it as much as to
    // load bunch of things when the component is loaded
    // instead use ngOnInit to load things
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container\">\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" [routerLink]=\"['/user/' + this._userId]\">\n      Profile\n    </a>\n    <a (click)=\"onUpdateUser()\"\n       class=\"navbar-link\">\n      <button class=\"fas fa-check fontawesome_icon color-white btn cl-text-white cl-text-bold cl-blue-navbar\"\n              [disabled]=\"profileForm.invalid\">\n      </button>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <!--<h1 class=\"text-white bg-primary\">Profile</h1>-->\n\n  <form #profileForm=\"ngForm\">\n    <!-- show the findUserByIdError if possible -->\n    <div>\n      <p class=\"alert-danger\">{{ this._findUserByIdError }}</p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"username\" class=\"cl-text-bold\">Username</label>\n      <input type=\"text\"\n             required\n             [(ngModel)]=\"this._user.username\"\n             name=\"username\"\n             #username=\"ngModel\"\n             class=\"form-control\"\n             id=\"username\"\n             placeholder=\"Username\"\n             [class.is-invalid]=\"username.touched && username.invalid\">\n      <small class=\"text-danger\"\n             *ngIf=\"username.touched && username.invalid\">Username is required!\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\" class=\"cl-text-bold\">Password</label>\n      <input type=\"password\"\n             required\n             [(ngModel)]=\"this._user.password\"\n             name=\"password\"\n             #password=\"ngModel\"\n             class=\"form-control\"\n             id=\"password\"\n             placeholder=\"Password\"\n             [class.is-invalid]=\"password.touched && password.invalid\">\n      <small class=\"text-danger\"\n             *ngIf=\"password.touched && password.invalid\">Password is required!\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\" class=\"cl-text-bold\">First Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"this._user.firstName\"\n             name=\"firstName\"\n             #firstName=\"ngModel\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder=\"First name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\" class=\"cl-text-bold\">Last Name</label>\n      <input type=\"text\"\n             [(ngModel)]=\"this._user.lastName\"\n             name=\"lastName\"\n             #lastName=\"ngModel\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder=\"Last name\">\n    </div>\n  </form>\n\n  <button type=\"button\"\n          class=\"btn btn-primary btn-block\"\n          [routerLink]=\"['/user/' + this._userId +'/website']\">\n    Websites\n  </button>\n  <a class=\"btn btn-danger  btn-block\"\n     [routerLink]=\"['/login']\">Logout</a>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container m-auto\">\n    <div class=\"navbar-text\">\n      <a [routerLink]=\"['/user/' + this._userId]\">\n        <span class=\"fas fa-check fontawsome_icon mx-2 color-white\"></span>\n      </a>\n      <a [routerLink]=\"['/user/' + this._userId]\">\n        <span class=\"fas fa-plus fontawsome_icon mx-2 color-white\"></span>\n      </a>\n      <a [routerLink]=\"['/user/' + this._userId]\">\n        <span class=\"fas fa-star fontawsome_icon mx-2 color-white\"></span>\n      </a>\n      <a [routerLink]=\"['/user/' + this._userId]\">\n        <span class=\"fas fa-heart fontawsome_icon mx-2 color-white\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_userService, _activatedRoute) {
        this._userService = _userService;
        this._activatedRoute = _activatedRoute;
        this._user = {
            _id: "",
            username: "",
            password: "",
            firstName: "",
            lastName: ""
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get uid parameter
        this._activatedRoute.params.subscribe(function (params) {
            console.log("User Id: " + JSON.stringify(params));
            _this._userId = params["uid"];
        });
        // use user service to find the user by Id
        this._userService.findUserById(this._userId).subscribe(function (data) {
            console.log("data: " + JSON.stringify(data));
            _this._user._id = data._id;
            _this._user.username = data.username;
            _this._user.password = data.password;
            _this._user.firstName = data.firstName;
            _this._user.lastName = data.lastName;
            _this._findUserByIdError = null;
        }, function (error) {
            return (_this._findUserByIdError =
                error.message || "Error getting the user by Id!");
        });
    };
    // to update the user info
    ProfileComponent.prototype.onUpdateUser = function () {
        var _this = this;
        var newUser = {
            _id: this._userId,
            username: this._form.value.username,
            password: this._form.value.password,
            firstName: this._form.value.firstName,
            lastName: this._form.value.lastName
        };
        this._userService.updateUser(this._userId, newUser).subscribe(function (data) { return console.log(data); }, function (error) { return _this._updateUserError = error.message || 'Error updating the user!'; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("profileForm"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "_form", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #registerForm=\"ngForm\"\n        (ngSubmit)=\"register()\"\n        novalidate>\n    <h1>Register</h1>\n\n    <!--display the register error if possible-->\n    <div class=\"alert alert-danger\"\n         *ngIf=\"this._registerError\">\n      {{ this._duplicateRegisterErrorMsg }}\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\"\n             ngModel\n             name=\"username\"\n             required\n             [class.is-invalid]=\"username.invalid && username.touched\"\n             #username=\"ngModel\"\n             class=\"form-control\"\n             placeholder=\"Username\"/>\n      <div class=\"invalid-feedback\"\n           [class.d-none]=\"username.valid || username.untouched\">\n        Username is required!\n      </div>\n    </div>\n    <div ngModelGroup=\"passwordGroup\"\n         #passwordGroup=\"ngModelGroup\">\n      <div class=\"form-group\">\n        <input type=\"password\"\n               ngModel\n               name=\"password\"\n               required\n               #password=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"Password\"\n               [class.is-invalid]=\"(password.invalid && password.touched) || (verifyPassword.touched && verifyPassword.invalid && !verifyPassword.errors?.required)\"\n               (input)=\"verifyPassword.control.updateValueAndValidity()\"/>\n        <small class=\"text-danger\"\n               [class.d-none]=\"password.valid || password.untouched\">\n          Password is required!\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\"\n               ngModel\n               name=\"verifyPassword\"\n               required\n               appConfirmEqualValidator=\"password\"\n               [class.is-invalid]=\"verifyPassword.invalid && verifyPassword.touched\"\n               #verifyPassword=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"Verify password\"/>\n        <div>\n          <small class=\"text-danger\"\n                 *ngIf=\"verifyPassword.touched && verifyPassword.errors?.required\">\n            Verify password is required!\n          </small>\n          <small class=\"text-danger\"\n                 *ngIf=\"verifyPassword.touched && verifyPassword.errors?.notEqual && !verifyPassword.errors?.required\">\n            Password and Verify password DO NOT match!\n          </small>\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\"\n            class=\"btn btn-primary btn-block\"\n            [disabled]=\"registerForm.invalid\">\n      Register\n    </button>\n    <button type=\"button\"\n            class=\"btn btn-danger  btn-block\"\n            [routerLink]=\"['/login']\">\n      Cancel\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        // capture the error for registering the new user
        this._registerError = false;
        this._duplicateRegisterErrorMsg = "The username has been registered, please try with another one.";
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        // set the property values to the form values
        // and inspect the input values in console
        // console.log(this._form);
        this._username = this._form.value.username;
        this._password = this._form.value.passwordGroup.password;
        this._verifyPassword = this._form.value.passwordGroup.verifyPassword;
        console.log("username: " + this._username);
        console.log("password: " + this._password);
        console.log("verify password: " + this._verifyPassword);
        // first, check if the username has been registered before
        this._userService.findUserByUsername(this._username).subscribe(function (data) {
            if (data == null) {
                _this._registerError = false;
                console.log("Username is valid!");
                console.log(data);
                // call UserService API to create the new user to the server
                var newUser = {
                    username: _this._username,
                    password: _this._password,
                    firstName: "",
                    lastName: ""
                };
                _this._userService.createUser(newUser).subscribe(function (newUser) {
                    console.log("Created new user: ");
                    console.log(newUser);
                    _this._newUserId = newUser._id;
                    _this._router.navigate(["/user", _this._newUserId]);
                });
            }
            else {
                _this._registerError = true;
                console.log("Username is NOT valid!");
                console.log(data);
                // if has register error, then stop
                // if (this._registerError) return;
            }
        });
        // call UserService API to the remote mongodb
        // const newUser = new User('',
        //   this._form.value.username,
        //   this._form.value.passwordGroup.password,
        //   '',
        //   '');
        // this._userService.createUser(newUser).subscribe(
        //   data => {
        //     console.log('Posted new user: ' + data);
        //     this._newUserId = data._id;
        //     console.log('New User Id: ' + data._id);
        //     this._registerError = null;
        //     // then navigate to the user profile page
        //     this._router.navigate(['/user', data._id]);
        //   },
        //   error => this._registerError = error.message || 'Error registering the new user!'
        // );
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("registerForm"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "_form", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"col-4 hidden-xs d-none d-md-block\">\n      <div class=\"container pl-0\">\n        <a [routerLink]=\"['/user/' + this._userId + '/website']\"\n           class=\"navbar-link cl-text-white mr-4\">\n          <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold m-auto\"\n           [routerLink]=\"['/user/' + this._userId + '/website/' + this._websiteId]\">\n          Websites\n        </a>\n        <a [routerLink]=\"['/user/' + this._userId + '/website/new']\"\n           class=\"navbar-link float-right\">\n          <button class=\"fas fa-plus fontawsome_icon mr-2 color-white btn cl-text-white cl-text-bold cl-blue-navbar\">\n          </button>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-8 p-0\">\n      <div class=\"container\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\"\n           [routerLink]=\"['/user/' + this._userId + '/website/' + this._websiteId]\">\n          Edit Websites\n        </a>\n        <a [routerLink]=\"['/user/' + this._userId + '/website']\"\n           (click)=\"onEditWebsite()\"\n           class=\"navbar-link float-right cl-text-white\">\n          <button class=\"fas fa-check fontawsome_icon color-white btn cl-text-white cl-text-bold cl-blue-navbar\"\n                  [disabled]=\"editWebsiteForm.invalid\">\n          </button>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"row\">\n    <div class=\"col-4 hidden-xs d-none d-md-block border-right\">\n      <div class=\"container ml-3\">\n        <ul class=\"list-group cl-list-group-borderless\"\n            *ngFor=\"let website of this._websites; index as i\">\n          <li class=\"list-group-item cl-list-item-borderless\">\n            <a [routerLink]=\"['/user/' + website.developerId + '/website/' + website._id]\">\n              <span class=\"fas fa-cog fontawsome_icon float-right cl-text-blue\"></span>\n            </a>\n            <a [routerLink]=\"['/user/' + website.developerId + '/website/' + website._id + '/page']\"\n               class=\"cl-text-blue\">\n              {{ website.name }}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <form #editWebsiteForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"website-name\"\n                 class=\"cl-text-bold\">\n            Website Name\n          </label>\n          <input type=\"text\"\n                 required\n                 ngModel\n                 name=\"website-name\"\n                 [(ngModel)]=\"this._website.name\"\n                 #websiteName=\"ngModel\"\n                 class=\"form-control\"\n                 id=\"website-name\"\n                 placeholder=\"Blogger\"\n                 [class.is-invalid]=\"websiteName.touched && websiteName.invalid\">\n          <small class=\"text-danger\"\n                 *ngIf=\"websiteName.touched && websiteName.invalid\">Website Name is required!\n          </small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"website-description\"\n                 class=\"cl-text-bold\">\n            Website Description\n          </label>\n          <textarea id=\"website-description\"\n                    class=\"form-control\"\n                    ngModel\n                    name=\"website-description\"\n                    [(ngModel)]=\"this._website.description\"\n                    #websiteDescription=\"ngModel\"\n                    rows=\"5\"\n                    placeholder=\"Blog is a blog-publishing service.\">\n          </textarea>\n        </div>\n        <button type=\"button\"\n                class=\"btn btn-danger  btn-block\"\n                [routerLink]=\"['/user/' + this._userId + '/website']\"\n                (click)=\"onDeleteWebsite()\">\n          Delete\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/' + this._userId]\"\n       class=\"navbar-link navbar-text ml-auto cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service */ "./src/app/services/website.service.ts");




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(_activatedRoute, _websiteService) {
        this._activatedRoute = _activatedRoute;
        this._websiteService = _websiteService;
        this._website = {
            _id: "",
            name: "",
            developerId: "",
            description: ""
        };
        this._websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            // firstly, find both uid and wid
            _this._userId = params.uid;
            _this._websiteId = params.wid;
            // secondly, find the website associated with the wid
            // and make the deep copy of the website
            _this._websiteService.findWebsiteById(_this._websiteId).subscribe(function (data) {
                _this._website = JSON.parse(JSON.stringify(data));
                console.log("Deep copied the following website: ");
                console.log(_this._website);
            });
        });
        // thirdly, find the websites associated with the uid
        this._websiteService.findWebsitesByUser(this._userId).subscribe(function (data) {
            console.log("Updated the websites...");
            _this._websites = data;
        });
    };
    WebsiteEditComponent.prototype.onEditWebsite = function () {
        var updatedWebsite = JSON.parse(JSON.stringify(this._website));
        this._websiteService
            .updateWebsite(this._websiteId, updatedWebsite)
            .subscribe(function (data) {
            console.log("Updated the website to: ");
            console.log(data);
        });
    };
    WebsiteEditComponent.prototype.onDeleteWebsite = function () {
        this._websiteService.deleteWebsite(this._websiteId).subscribe(function (data) {
            console.log("Deleted the website: ");
            console.log(data);
        });
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-website-edit",
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_website_service__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/' + this._userId]\" class=\"navbar-link cl-text-white float-left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"cl-text-white navbar-brand cl-text-bold mr-auto\" [routerLink]=\"['/user/' + this._userId + '/website']\">\n      Websites\n    </a>\n    <a [routerLink]=\"['/user/' + this._userId + '/website/new']\"\n       class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-plus fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<!--now for loop the websites retrieved using WebsiteService instead of static websites-->\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless\"\n      *ngFor=\"let website of this._websites; index as i\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/' + this._userId + '/website/' + website._id]\">\n        <span class=\"fas fa-cog fontawsome_icon float-right cl-text-blue\"></span>\n      </a>\n      <a [routerLink]=\"['/user/' + this._userId + '/website/' + website._id + '/page']\"\n         class=\"cl-text-blue\">\n        {{ website.name }}\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/' + this._userId]\" class=\"navbar-link navbar-text ml-auto cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service */ "./src/app/services/website.service.ts");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(_activatedRoute, _websiteService) {
        this._activatedRoute = _activatedRoute;
        this._websiteService = _websiteService;
        this._websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // firstly, get the userId
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this._userId = params["uid"];
        });
        // then retrieves the websites associated with the userId
        this._websiteService.findWebsitesByUser(this._userId).subscribe(function (data) {
            console.log("Getting the websites of user id " + _this._userId + ": ");
            _this._websites = data;
            console.log(_this._websites);
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-website-list",
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_website_service__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The navigation bar-->\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"col-4 hidden-xs d-none d-md-block\">\n      <div class=\"container pl-0\">\n        <a [routerLink]=\"['/user/' + this._userId + '/website']\"\n           class=\"navbar-link cl-text-white mr-4\">\n          <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold m-auto\"\n           [routerLink]=\"['/user/' + this._userId + '/website/new']\">\n          Websites\n        </a>\n        <a [routerLink]=\"['/user/' + this._userId + '/website/new']\"\n           class=\"navbar-link navbar-text cl-text-white cl-icon-padding float-right\">\n          <span class=\"fas fa-plus fontawsome_icon\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <div class=\"container pl-0\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\"\n           [routerLink]=\"['/user/' + this._userId + '/website/new']\">\n          New Websites\n        </a>\n        <a [routerLink]=\"['/user/' + this._userId + '/website']\"\n           (click)=\"onSubmitNewWebsite()\"\n           class=\"navbar-link float-right\">\n          <button class=\"fas fa-check fontawsome_icon color-white btn cl-text-white cl-text-bold cl-blue-navbar\"\n                  [disabled]=\"newWebsiteForm.invalid\">\n          </button>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-4 hidden-xs d-none d-md-block p-0 h-md-100 border-right\">\n      <div class=\"container\">\n        <ul class=\"list-group cl-list-group-borderless\"\n            *ngFor=\"let website of this._websites; index as i\">\n          <li class=\"list-group-item cl-list-item-borderless\">\n            <a [routerLink]=\"['/user/' + website.developerId + '/website/' + website._id + '/page']\"\n               class=\"cl-text-blue\">\n              {{ website.name }}\n            </a>\n            <a [routerLink]=\"['/user/' + website.developerId + '/website/' + website._id]\"\n               class=\"cl-text-blue\">\n              <span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-8 p-2 h-md-100\">\n      <form #newWebsiteForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"website-name\"\n                 class=\"cl-text-bold\">Name</label>\n          <input type=\"text\"\n                 required\n                 ngModel\n                 name=\"website-name\"\n                 #websiteName=\"ngModel\"\n                 [(ngModel)]=\"this._name\"\n                 class=\"form-control\"\n                 id=\"website-name\"\n                 placeholder=\"Name\"\n                 [class.is-invalid]=\"websiteName.touched && websiteName.invalid\">\n          <small class=\"text-danger\"\n                 *ngIf=\"websiteName.touched && websiteName.invalid\">Website Name is required!\n          </small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"website-description\"\n                 class=\"cl-text-bold\">Description</label>\n          <textarea id=\"website-description\"\n                    ngModel\n                    name=\"website-description\"\n                    #websiteDescription=\"ngModel\"\n                    [(ngModel)]=\"this._description\"\n                    class=\"form-control\"\n                    rows=\"5\"\n                    placeholder=\"Description\"></textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/' + this._userId]\"\n       class=\"navbar-link navbar-text ml-auto cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service */ "./src/app/services/website.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(_websiteService, _activatedRoute) {
        this._websiteService = _websiteService;
        this._activatedRoute = _activatedRoute;
        this._websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // use activatedRoute service to get the properties
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            // firstly, get the uid
            _this._userId = params.uid;
            console.log(_this._userId);
        });
        // then get the websites associated with the uid
        this._websiteService.findWebsitesByUser(this._userId).subscribe(function (data) {
            // deep copy the websites to store locally
            for (var i = 0; i < data.length; i++) {
                _this._websites.push(JSON.parse(JSON.stringify(data[i])));
            }
            console.log("Deep copy the websites from WebsiteService: ");
            console.log(_this._websites);
        });
    };
    WebsiteNewComponent.prototype.onSubmitNewWebsite = function () {
        var newWebsite = {
            _id: "",
            name: this._name,
            developerId: "",
            description: this._description
        };
        this._websiteService
            .createWebsite(this._userId, newWebsite)
            .subscribe(function (data) {
            console.log("Created the website: ");
            console.log(data);
        });
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-website-new",
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link cl-text-black cl-icon-padding float=left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-white cl-text-bold mr-auto\"\n       [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"this.onCreateNewWidget('HEADER')\"\n         class=\"cl-text-blue btn btn-light\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\"\n         class=\"cl-text-blue btn btn-light\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\"\n         class=\"cl-text-blue btn btn-light\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\"\n         class=\"cl-text-blue btn btn-light\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\"\n         class=\"cl-text-blue btn btn-light\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\"\n         class=\"cl-text-blue btn btn-light\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"this.onCreateNewWidget('IMAGE')\"\n         class=\"cl-text-blue btn btn-light\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"this.onCreateNewWidget('YOUTUBE')\"\n         class=\"cl-text-blue btn btn-light\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\"\n         class=\"cl-text-blue btn btn-light\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\"\n         class=\"cl-text-blue btn btn-light\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId]\"\n       class=\"navbar-link cl-icon-padding ml-auto\">\n      <span class=\"fas fa-user fontawsome_icon cl-text-blue\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service */ "./src/app/services/widget.service.ts");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(_activatedRoute, _widgetService, _router) {
        this._activatedRoute = _activatedRoute;
        this._widgetService = _widgetService;
        this._router = _router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // update the properties using the route parameters
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this._userId = params.uid;
            _this._websiteId = params.wid;
            _this._pageId = params.pid;
        });
    };
    WidgetChooserComponent.prototype.onCreateNewWidget = function (widgetType) {
        var _this = this;
        var newWidgetId = Math.random() + '';
        var newWidget;
        switch (widgetType) {
            case 'HEADER': {
                newWidget = {
                    _id: newWidgetId,
                    widgetType: widgetType,
                    pageId: this._pageId,
                    size: '1',
                    text: 'Untitled Header'
                };
                break;
            }
            case 'YOUTUBE': {
                newWidget = {
                    _id: newWidgetId,
                    widgetType: widgetType,
                    pageId: this._pageId,
                    width: '100%',
                    url: ''
                };
                break;
            }
            case 'IMAGE': {
                newWidget = {
                    _id: newWidgetId,
                    widgetType: widgetType,
                    pageId: this._pageId,
                    width: '100%',
                    url: ''
                };
                break;
            }
        }
        // then call the api service to create the new widget
        this._widgetService
            .createWidget(this._pageId, newWidget)
            .subscribe(function (data) {
            console.log('Created a new widget: ');
            console.log(data);
            // then navigate to widget edit page
            _this._router.navigate([
                '/user',
                _this._userId,
                'website',
                _this._websiteId,
                'page',
                _this._pageId,
                'widget',
                newWidgetId
            ]);
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"this._widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header [_userId]=\"this._userId\"\n                       [_websiteId]=\"this._websiteId\"\n                       [_pageId]=\"this._pageId\"\n                       [_widgetId]=\"this._widgetId\"\n                       [_widget]=\"this._widget\"\n                       (_updateHeaderEvent)=\"this.updateWidget($event)\"\n                       (_deleteHeaderEvent)=\"this.deleteWidget($event)\">\n    </app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image [_userId]=\"this._userId\"\n                      [_websiteId]=\"this._websiteId\"\n                      [_pageId]=\"this._pageId\"\n                      [_widgetId]=\"this._widgetId\"\n                      [_widget]=\"this._widget\"\n                      (_updateImageEvent)=\"this.updateWidget($event)\"\n                      (_deleteImageEvent)=\"this.deleteWidget($event)\">\n    </app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube [_userId]=\"this._userId\"\n                        [_websiteId]=\"this._websiteId\"\n                        [_pageId]=\"this._pageId\"\n                        [_widgetId]=\"this._widgetId\"\n                        [_widget]=\"this._widget\"\n                        (_updateYoutubeEvent)=\"this.updateWidget($event)\"\n                        (_deleteYoutubeEvent)=\"this.deleteWidget($event)\">\n    </app-widget-youtube>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service */ "./src/app/services/widget.service.ts");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(_activatedRoute, _widgetService) {
        this._activatedRoute = _activatedRoute;
        this._widgetService = _widgetService;
        this._widget = {
            _id: '',
            widgetType: '',
            pageId: '',
            size: '',
            text: '',
            width: '',
            url: ''
        };
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // update the properties using the route parameters
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this._userId = params.uid;
            _this._websiteId = params.wid;
            _this._pageId = params.pid;
            _this._widgetId = params.wgid;
            // then get the widget by using the widget service
            // deep copy the widget
            _this._widgetService.findWidgetById(_this._widgetId).subscribe(function (data) {
                _this._widget = JSON.parse(JSON.stringify(data));
                console.log('Deep copied the widget: ');
                console.log(data);
            });
        });
    };
    WidgetEditComponent.prototype.updateWidget = function (widget) {
        this._widgetService.updateWidget(this._widgetId, widget).subscribe(function (data) {
            console.log('Updated the widget to: ');
            console.log(data);
        });
    };
    WidgetEditComponent.prototype.deleteWidget = function (widget) {
        this._widgetService.deleteWidget(this._widgetId).subscribe(function (data) {
            console.log('Deleted the widget: ');
            console.log(data);
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link cl-text-black cl-icon-padding float-left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-white cl-text-bold mr-auto\"\n       [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/'+this._widgetId]\">\n      Widgets Edit\n    </a>\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link cl-icon-padding cl-text-black float-right\"\n       (click)=\"updateHeader()\">\n      <button class=\"fas fa-check fontawesome_icon btn btn-light bg-light border-light cl-text-bold\"\n              [disabled]=\"editHeaderForm.invalid\">\n      </button>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #editHeaderForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"header-text\"\n             class=\"cl-text-bold\">Text</label>\n      <input type=\"text\"\n             required\n             ngModel\n             name=\"header-text\"\n             #headerText=\"ngModel\"\n             [(ngModel)]=\"this._widget.text\"\n             class=\"form-control\"\n             id=\"header-text\"\n             placeholder=\"Text\"\n             [class.is-invalid]=\"headerText.touched && headerText.invalid\">\n      <small class=\"text-danger\"\n             *ngIf=\"headerText.touched && headerText.invalid\">Header Text is required!\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"header-size\"\n             class=\"cl-text-bold\">Size</label>\n      <input type=\"text\"\n             required\n             appInputRangeValidator\n             [min]=\"this._minHeaderSize\"\n             [max]=\"this._maxHeaderSize\"\n             (input)=\"headerSize.control.updateValueAndValidity()\"\n             ngModel\n             name=\"header-size\"\n             #headerSize=\"ngModel\"\n             [(ngModel)]=\"this._widget.size\"\n             class=\"form-control\"\n             id=\"header-size\"\n             placeholder=\"Size\"\n             [class.is-invalid]=\"headerSize.touched && headerSize.invalid\">\n      <div>\n        <small class=\"text-danger\"\n               *ngIf=\"headerSize.touched && headerSize.errors?.required\">\n          Header Size is required!\n        </small>\n        <small class=\"text-danger\"\n               *ngIf=\"headerSize.touched && !headerSize.errors?.required && headerSize.errors?.notValid\">\n          Header size must be number and between 1 and 6.\n        </small>\n      </div>\n    </div>\n  </form>\n  <button type=\"button\"\n          class=\"btn btn-danger  btn-block\"\n          [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n          (click)=\"deleteHeader()\">\n    Delete\n  </button>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId]\"\n       class=\"navbar-link cl-icon-padding ml-auto\">\n      <span class=\"fas fa-user fontawsome_icon cl-text-blue\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent() {
        // the header size input has both min and max value
        // both values are used in the input range validator
        this._minHeaderSize = 1;
        this._maxHeaderSize = 6;
        // to pass back the update event to parent component
        this._updateHeaderEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // to pass back the delete event to parent component
        this._deleteHeaderEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () { };
    WidgetHeaderComponent.prototype.updateHeader = function () {
        this._updateHeaderEvent.emit(this._widget);
    };
    WidgetHeaderComponent.prototype.deleteHeader = function () {
        this._deleteHeaderEvent.emit(this._widget);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "_userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "_websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "_pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "_widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHeaderComponent.prototype, "_widget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHeaderComponent.prototype, "_updateHeaderEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHeaderComponent.prototype, "_deleteHeaderEvent", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-widget-header",
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link cl-text-black cl-icon-padding float-left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-white cl-text-bold mr-auto\"\n       [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/'+this._widgetId]\">\n      Widgets Edit\n    </a>\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link cl-icon-padding cl-text-black float-right\"\n       (click)=\"this.updateImage()\">\n      <button class=\"fas fa-check fontawesome_icon btn btn-light bg-light border-light cl-text-bold\"\n              [disabled]=\"editImageForm.invalid\">\n      </button>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #editImageForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"imageURL\"\n             class=\"cl-text-bold\">URL</label>\n      <input type=\"text\"\n             required\n             ngModel\n             name=\"imageURL\"\n             #imageURL=\"ngModel\"\n             [(ngModel)]=\"this._widget.url\"\n             class=\"form-control\"\n             id=\"imageURL\"\n             placeholder=\"URL\"\n             [class.is-invalid]=\"imageURL.touched && imageURL.invalid\">\n      <small class=\"text-danger\"\n             *ngIf=\"imageURL.touched && imageURL.invalid\">Image Url is required.\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"imageWidth\"\n             class=\"cl-text-bold\">Width</label>\n      <input type=\"text\"\n             required\n             appPercentageRangeValidator\n             [min]=\"this._minWidthPercentage\"\n             [max]=\"this._maxWidthPercentage\"\n             (input)=\"imageWidth.control.updateValueAndValidity()\"\n             ngModel\n             name=\"imageWidth\"\n             #imageWidth=\"ngModel\"\n             [(ngModel)]=\"this._widget.width\"\n             class=\"form-control\"\n             id=\"imageWidth\"\n             placeholder=\"100%\"\n             [class.is-invalid]=\"imageWidth.touched && imageWidth.invalid\">\n      <div>\n        <small class=\"text-danger\"\n               *ngIf=\"imageWidth.touched && imageWidth.errors?.required\">\n          Image Width is required.\n        </small>\n        <small class=\"text-danger\"\n               *ngIf=\"imageWidth.touched && imageWidth.errors?.notValid && !imageWidth.errors?.required\">\n          Image Width must be a percentage number and between\n          {{ this._minWidthPercentage }} and {{ this._maxWidthPercentage }}\n          (percent).\n        </small>\n      </div>\n    </div>\n  </form>\n  <!--upload form-->\n  <form #uploadImageForm\n        action=\"/api/upload\"\n        method=\"post\"\n        enctype=\"multipart/form-data\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\"\n             class=\"cl-text-bold\">Upload</label>\n      <input type=\"file\"\n             ngModel\n             required\n             appFileInputValidator\n             [maxSize]=\"this._maxSize\"\n             [allowedType]=\"this._allowedType\"\n             name=\"imageFile\"\n             #imageFile=\"ngModel\"\n             id=\"exampleInputFile\"\n             class=\"form-control\"\n             [class.is-invalid]=\"imageFile.touched && imageFile.invalid\">\n      <div>\n        <small class=\"text-danger\"\n               *ngIf=\"imageFile.touched && imageFile.errors?.required\">\n          No Image Added!\n        </small>\n        <small class=\"text-danger\"\n               *ngIf=\"imageFile.touched && !imageFile.errors?.required && imageFile.errors?.invalidType\">\n          Error: Only Images (jpeg/jpg/png/gif)!\n        </small>\n        <small class=\"text-danger\"\n               *ngIf=\"imageFile.touched && !imageFile.errors?.required && imageFile.errors?.invalidSize\">\n          Error: Image File Size Exceeded {{ this._maxSize }} Bytes!\n        </small>\n      </div>\n    </div>\n    <!--&lt;!&ndash;the button to show the input element info&ndash;&gt;-->\n    <!--<button type=\"button\" classs=\"btn btn-light\" (click)=\"showInfo()\">show info</button>-->\n    <!--imageFile validity: {{ imageFile.valid }}-->\n\n    <div class=\"form-control d-none\">\n      <input name=\"userId\" value=\"{{ this._userId }}\">\n    </div>\n    <div class=\"form-control d-none\">\n      <input name=\"websiteId\" value=\"{{ this._websiteId }}\">\n    </div>\n    <div class=\"form-control d-none\">\n      <input name=\"pageId\" value=\"{{ this._pageId }}\">\n    </div>\n    <div class=\"form-control d-none\">\n      <input name=\"widgetId\" value=\"{{ this._widgetId }}\">\n    </div>\n    <button type=\"submit\"\n            class=\"btn btn-primary btn-block\"\n            (click)=\"uploadImageForm.submit()\"\n            [disabled]=\"imageFile.invalid\">\n      Upload Image\n    </button>\n  </form>\n  <button type=\"button\"\n          class=\"btn btn-danger  btn-block my-2\"\n          [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n          (click)=\"this.deleteImage()\">\n    Delete\n  </button>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId]\"\n       class=\"navbar-link cl-icon-padding ml-auto\">\n      <span class=\"fas fa-user fontawsome_icon cl-text-blue\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent() {
        // the preset min and max of image width
        this._minWidthPercentage = 1;
        this._maxWidthPercentage = 100;
        // the preset strict on file size and file type
        this._maxSize = 10000000;
        this._allowedType = /jpeg|jpg|png|gif/;
        // to pass back the widget to parent component to update
        this._updateImageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // to pass back the widget to parent component to delete
        this._deleteImageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    WidgetImageComponent.prototype.updateImage = function () {
        this._updateImageEvent.emit(this._widget);
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        this._deleteImageEvent.emit(this._widget);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editImageForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetImageComponent.prototype, "_form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uploadImageForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], WidgetImageComponent.prototype, "_uploadForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageFile'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], WidgetImageComponent.prototype, "_image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "_userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "_websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "_pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "_widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetImageComponent.prototype, "_widget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetImageComponent.prototype, "_updateImageEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetImageComponent.prototype, "_deleteImageEvent", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link cl-text-black cl-icon-padding float-left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-white cl-text-bold mr-auto\"\n       [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/'+this._widgetId]\">\n      Widgets Edit\n    </a>\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link cl-icon-padding cl-text-black float-right\"\n       (click)=\"this.updateYoutube()\">\n      <button class=\"fas fa-check fontawesome_icon btn btn-light bg-light border-light cl-text-bold\"\n              [disabled]=\"editYoutubeForm.invalid\">\n      </button>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #editYoutubeForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\"\n             class=\"cl-text-bold\">URL</label>\n      <input type=\"text\"\n             required\n             ngModel\n             name=\"youtube-URL\"\n             #youtubeURL=\"ngModel\"\n             [(ngModel)]=\"this._widget.url\"\n             class=\"form-control\"\n             id=\"youtube-URL\"\n             placeholder=\"URL\"\n             [class.is-invalid]=\"youtubeURL.touched && youtubeURL.invalid\">\n      <small class=\"text-danger\"\n             *ngIf=\"youtubeURL.touched && youtubeURL.invalid\">Youtube URL is required.\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\"\n             class=\"cl-text-bold\">Width</label>\n      <input type=\"text\"\n             required\n             appPercentageRangeValidator\n             [min]=\"this._minWidthPercentage\"\n             [max]=\"this._maxWidthPercentage\"\n             (input)=\"youtubeWidth.control.updateValueAndValidity()\"\n             ngModel\n             name=\"youtube-width\"\n             #youtubeWidth=\"ngModel\"\n             [(ngModel)]=\"this._widget.width\"\n             class=\"form-control\"\n             id=\"youtube-width\"\n             placeholder=\"100%\"\n             [class.is-invalid]=\"youtubeWidth.touched && youtubeWidth.invalid\">\n      <div>\n        <small class=\"text-danger\"\n               *ngIf=\"youtubeWidth.touched && youtubeWidth.errors?.required\">\n          Youtube Width is required.\n        </small>\n        <small class=\"text-danger\"\n               *ngIf=\"youtubeWidth.touched && youtubeWidth.errors?.notValid && !youtubeWidth.errors?.required\">\n          Youtube Width must be a percentage number and between\n          {{ this._minWidthPercentage }} and {{ this._maxWidthPercentage }}\n          (percent).\n        </small>\n      </div>\n    </div>\n  </form>\n  <button type=\"button\"\n          class=\"btn btn-danger btn-block\"\n          [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n          (click)=\"this.deleteYoutube()\">\n    Delete\n  </button>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId]\"\n       class=\"navbar-link cl-icon-padding ml-auto\">\n      <span class=\"fas fa-user fontawsome_icon cl-text-blue\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent() {
        // marks the min and max percentage value of the youtube video width
        this._minWidthPercentage = 1;
        this._maxWidthPercentage = 100;
        // to pass back the widget to parent component to update
        this._updateYoutubeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // to pass back the widget to parent component to delete
        this._deleteYoutubeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () { };
    WidgetYoutubeComponent.prototype.updateYoutube = function () {
        this._updateYoutubeEvent.emit(this._widget);
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        this._deleteYoutubeEvent.emit(this._widget);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "_userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "_websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "_pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "_widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetYoutubeComponent.prototype, "_widget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetYoutubeComponent.prototype, "_updateYoutubeEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetYoutubeComponent.prototype, "_deleteYoutubeEvent", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-widget-youtube",
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page']\"\n       class=\"navbar-link cl-text-black cl-icon-padding float-left mr-4\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-white cl-text-bold mr-auto\"\n       [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\">\n      Widgets\n    </a>\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/new']\"\n       class=\"navbar-link cl-icon-padding cl-text-black float-right\">\n      <span class=\"fas fa-plus fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <!--use ngSwitch to iterate through the widgets and show the template accordingly-->\n  <div appSortable\n       (newIndexEvent)=\"this._reorderWidgets($event)\">\n    <div *ngFor=\"let widget of this._widgets; index as i\" [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADER'\">\n        <div class=\"float-right\">\n          <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n             class=\"float-right\">\n            <span class=\"fas fa-bars fontawsome_icon cl-text-blue\"></span>\n          </a>\n          <a\n            [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/'+widget._id]\">\n            <span class=\"fas fa-cog fontawsome_icon cl-text-blue\"></span>\n          </a>\n        </div>\n        <div [ngSwitch]=\"widget.size\">\n          <div *ngSwitchCase=\"1\">\n            <h1>{{ widget.text }}</h1>\n          </div>\n          <div *ngSwitchCase=\"2\">\n            <h2>{{ widget.text }}</h2>\n          </div>\n          <div *ngSwitchCase=\"3\">\n            <h3>{{ widget.text }}</h3>\n          </div>\n          <div *ngSwitchCase=\"4\">\n            <h4>{{ widget.text }}</h4>\n          </div>\n          <div *ngSwitchCase=\"5\">\n            <h5>{{ widget.text }}</h5>\n          </div>\n          <div *ngSwitchCase=\"6\">\n            <h6>{{ widget.text }}</h6>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe width=\"640\" height=\"360\"\n                  [src]=\"widget.url | safeUrl\"\n                  frameborder=\"0\"\n                  allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                  allowfullscreen></iframe>\n          <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n             class=\"float-right\">\n            <span class=\"fas fa-bars fontawsome_icon cl-text-blue bg-white-position\"></span>\n          </a>\n          <a\n            [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/'+widget._id]\"\n            class=\"float-right\">\n            <span class=\"fas fa-cog fontawsome_icon cl-text-blue bg-white-position\"></span>\n          </a>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div>\n          <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n             class=\"float-right\">\n            <span class=\"fas fa-bars fontawsome_icon cl-text-blue\"></span>\n          </a>\n          <a\n            [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget/'+widget._id]\"\n            class=\"float-right\">\n            <span class=\"fas fa-cog fontawsome_icon cl-text-blue\"></span>\n          </a>\n          <img class=\"responsive-img img-rounded cl-widget-images\"\n               [src]=\"widget.url\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link navbar-text cl-icon-padding float-left mr-4\">\n      <span class=\"fas fa-play fontawsome_icon cl-text-blue\"></span>\n    </a>\n    <a [routerLink]=\"['/user/'+this._userId+'/website/'+this._websiteId+'/page/'+this._pageId+'/widget']\"\n       class=\"navbar-link navbar-text cl-icon-padding mr-auto\">\n      <span class=\"fas fa-eye fontawsome_icon cl-text-blue\"></span>\n    </a>\n    <a [routerLink]=\"['/user/'+this._userId]\"\n       class=\"navbar-link navbar-text cl-icon-padding float-right\">\n      <span class=\"fas fa-user fontawsome_icon cl-text-blue\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service */ "./src/app/services/widget.service.ts");




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(_activatedRoute, _widgetService) {
        this._activatedRoute = _activatedRoute;
        this._widgetService = _widgetService;
        this._widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // update the properties using the route parameters
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this._userId = params.uid;
            _this._websiteId = params.wid;
            _this._pageId = params.pid;
            // then get the widgets associated with the pageId
            _this._widgetService.findWidgetsByPageId(_this._pageId).subscribe(function (data) {
                _this._widgets = data;
                console.log('Getting all the widgets of page id ' + _this._pageId + ': ');
                console.log(_this._widgets);
            });
        });
    };
    // the function to reorder the widget
    WidgetListComponent.prototype._reorderWidgets = function (indices) {
        console.log('Reorder the widget, with index change as follows: ');
        console.log(indices);
        this._widgetService.updateWidgetOrder(this._pageId, indices.startIndex, indices.endIndex).subscribe(function (data) {
            console.log('Moved the widget from index ' + indices.startIndex + ' to ' + indices.endIndex + ': ');
            console.log(data);
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victorwang/Documents/GitHub/webdev-wang-wenbo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map