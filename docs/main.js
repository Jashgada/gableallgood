(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jashg\OneDrive - University of Cincinnati\A College\Semester VI\GableAllGood\gableallgood\gableallgood\src\main.ts */"zUnb");


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavBarComponent {
    constructor() {
        this.isCollapsed = false;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 20, vars: 2, consts: [["href", "https://allfont.net/allfont.css?fonts=compact-light", "rel", "stylesheet", "type", "text/css"], [1, "navbar", "navbar-expand-lg", "navbar-dark"], ["routerLink", "/", 1, "navbar-brand", "logo"], ["src", "../../assets/logo/Site_logo.png", "height", "150", "width", "150"], ["type", "button", "aria-controls", "navbarToggler", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarToggler", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], ["routerLink", "/meet", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/platform", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/campus-support", "routerLinkActive", "active", 1, "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_4_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Meet April & Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Campus Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    background-color:#bb0f55;\r\n    font-family: 'Compact Light';\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    \r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    line-height: 5px;\r\n    \r\n    color: #591937;\r\n    font-weight: 800;\r\n}\r\n\r\n#subext[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    color: #591937;\r\n    \r\n}\r\n\r\n#subtext[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    \r\n    color: #591937;\r\n    -webkit-text-fill-color:white;\r\n    \r\n}\r\n\r\n#subtext[_ngcontent-%COMP%]:hover{\r\n    color: #591937;\r\n    -webkit-text-fill-color:#591937;\r\n}\r\n\r\n.maintext[_ngcontent-%COMP%]{\r\n    color: #591937;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    src: url('Site_logo_fill.png');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7O0lBRWhCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYzs7QUFFbEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0FBQ25DOztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTtJQUNJLDhCQUFnRDtBQUNwRCIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYmIwZjU1O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21wYWN0IExpZ2h0JztcclxufVxyXG5cclxuLm5hdmJhciBhe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBcclxufVxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICM1OTE5Mzc7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5cclxuI3N1YmV4dHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogIzU5MTkzNztcclxuICAgIFxyXG59XHJcblxyXG4jc3VidGV4dCBzcGFue1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzU5MTkzNztcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOndoaXRlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNzdWJ0ZXh0OmhvdmVye1xyXG4gICAgY29sb3I6ICM1OTE5Mzc7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjojNTkxOTM3O1xyXG59XHJcblxyXG5cclxuLm1haW50ZXh0e1xyXG4gICAgY29sb3I6ICM1OTE5Mzc7XHJcbn1cclxuXHJcblxyXG4ubG9nbzpob3ZlciBpbWd7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ28vU2l0ZV9sb2dvX2ZpbGwucG5nJyk7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 6, vars: 0, consts: [["src", "../../assets/stock/pexels-pixabay-210307.jpg", 1, "img-fluid"], [1, "mt-3"], ["src", "../../assets/stock/pexels-kelly-lacy-3030268.jpg", 1, "img-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "H3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hey Bearcats!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, enim provident. Officiis ullam velit rem dicta, reiciendis ipsum quisquam inventore iste amet minus corrupti magnam saepe doloremque corporis labore veniam? Repellendus nemo id adipisci? Rerum, animi vero, architecto mollitia minus est neque magnam dicta error, natus similique aspernatur maiores! Doloremque aut modi accusantium libero error, fugiat nemo dignissimos doloribus itaque necessitatibus labore facilis autem numquam nesciunt nulla corrupti! Eveniet aspernatur eius dolorum voluptatem accusamus hic sunt aut placeat nisi dolores quam aliquid, quos natus, excepturi adipisci recusandae non asperiores facere corrupti itaque! Vero dignissimos maxime magni sequi modi id ut?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
    } }, styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n}\r\n\r\nH3[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7O0FBRUg7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn0gKi9cclxuXHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG59XHJcblxyXG5IM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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


/***/ }),

/***/ "B15d":
/*!**********************************************!*\
  !*** ./src/app/platform/platform.service.ts ***!
  \**********************************************/
/*! exports provided: PlatformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformService", function() { return PlatformService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class PlatformService {
    getPlatforms() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(PLATFORMS); subject.complete(); }, 100);
        return subject;
    }
}
PlatformService.ɵfac = function PlatformService_Factory(t) { return new (t || PlatformService)(); };
PlatformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlatformService, factory: PlatformService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
const PLATFORMS = [
    {
        name: "Platform1",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Platform2",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Platform3",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Platform4",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Platform5",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    }
];


/***/ }),

/***/ "Ku9T":
/*!**********************************************************!*\
  !*** ./src/app/campus-support/campus-support.service.ts ***!
  \**********************************************************/
/*! exports provided: SupportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportService", function() { return SupportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SupportService {
    getSupports() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(SUPPORT); subject.complete(); }, 100);
        return subject;
    }
}
SupportService.ɵfac = function SupportService_Factory(t) { return new (t || SupportService)(); };
SupportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupportService, factory: SupportService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
const SUPPORT = [
    {
        address: "../../assets/campus-support/campus-support1.jpg"
    },
    {
        address: "../../assets/campus-support/campus-support2.jpg"
    },
    {
        address: "../../assets/campus-support/campus-support1.jpg"
    },
    {
        address: "../../assets/campus-support/campus-support1.jpg"
    },
    {
        address: "../../assets/campus-support/campus-support1.jpg"
    },
    {
        address: "../../assets/campus-support/campus-support1.jpg"
    },
    {
        address: "../../assets/campus-support/campus-support1.jpg"
    }
];


/***/ }),

/***/ "PhBf":
/*!************************************************************!*\
  !*** ./src/app/campus-support/campus-support.component.ts ***!
  \************************************************************/
/*! exports provided: CampusSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusSupportComponent", function() { return CampusSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _campus_support_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campus-support.service */ "Ku9T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CampusSupportComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampusSupportComponent_div_5_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const support_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openImage(support_r2.address); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const support_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", support_r2.address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CampusSupportComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampusSupportComponent_div_7_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.closeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.modalImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CampusSupportComponent {
    constructor(supportService) {
        this.supportService = supportService;
        this.imgOpen = false;
    }
    ngOnInit() {
        this.supports = this.supportService.getSupports();
    }
    openImage(src) {
        this.modalImg = src;
        this.imgOpen = true;
        console.log(src);
    }
    closeImage() {
        this.imgOpen = false;
    }
}
CampusSupportComponent.ɵfac = function CampusSupportComponent_Factory(t) { return new (t || CampusSupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_campus_support_service__WEBPACK_IMPORTED_MODULE_1__["SupportService"])); };
CampusSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampusSupportComponent, selectors: [["app-campus-support"]], decls: 8, vars: 4, consts: [[1, "mt-2"], [1, "campus-support"], ["class", "box1 p-2", 4, "ngFor", "ngForOf"], ["id", "myModal", "class", "modal", 4, "ngIf"], [1, "box1", "p-2"], ["alt", "", 2, "cursor", "pointer", 3, "src", "click"], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content", 3, "src"], ["id", "caption"]], template: function CampusSupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CAMPUS SUPPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Check out why these campus leaders are suppoting us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CampusSupportComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CampusSupportComponent_div_7_Template, 5, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.supports));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".campus-support[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-wrap:wrap;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%]{\r\n    flex-basis: 30%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 300px;\r\n    box-shadow: 5px 5px 3px grey;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n    text-align: center;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n    text-align: center;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: block; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 200px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.9); \r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 900px;\r\n}\r\n\r\n\r\n\r\n#caption[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 700px;\r\n    text-align: center;\r\n    color: #ccc;\r\n    padding: 10px 0;\r\n    height: 150px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%], #caption[_ngcontent-%COMP%] {\r\n    animation-name: zoom;\r\n    animation-duration: 0.6s;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 115px;\r\n    right: 35px;\r\n    color: #f1f1f1;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #bbb;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXB1cy1zdXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDNUQ7O0FBRUEsMEJBQTBCOztBQUMxQjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQSxrRUFBa0U7O0FBQ2xFO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUEsc0NBQXNDOztBQUN0QztJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUI7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkIiLCJmaWxlIjoiY2FtcHVzLXN1cHBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1wdXMtc3VwcG9ydHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG59XHJcblxyXG4uYm94MXtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxufVxyXG5cclxuXHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCBncmV5O1xyXG59XHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5IMntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAoSW1hZ2UpICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi8qIENhcHRpb24gb2YgTW9kYWwgSW1hZ2UgKEltYWdlIFRleHQpIC0gU2FtZSBXaWR0aCBhcyB0aGUgSW1hZ2UgKi9cclxuI2NhcHRpb24ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLyogQWRkIEFuaW1hdGlvbiAtIFpvb20gaW4gdGhlIE1vZGFsICovXHJcbi5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogem9vbTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMTVweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampusSupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-campus-support',
                templateUrl: './campus-support.component.html',
                styleUrls: ['./campus-support.component.css']
            }]
    }], function () { return [{ type: _campus_support_service__WEBPACK_IMPORTED_MODULE_1__["SupportService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'gableallgood';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap", "rel", "stylesheet"], ["role", "main", 1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _meet_meet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meet/meet.component */ "dEjQ");
/* harmony import */ var _platform_platform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./platform/platform.component */ "lDaF");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./campus-support/campus-support.component */ "PhBf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./platform/collapsible-well.component */ "oqwT");
/* harmony import */ var _platform_platform_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./platform/platform.service */ "B15d");
/* harmony import */ var _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./platform/platform-list.component */ "rPbr");
/* harmony import */ var _team_teams_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./team/teams.service */ "ngQW");
/* harmony import */ var _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./campus-support/campus-support.service */ "Ku9T");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _platform_platform_service__WEBPACK_IMPORTED_MODULE_12__["PlatformService"],
        _team_teams_service__WEBPACK_IMPORTED_MODULE_14__["TeamsService"],
        _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_15__["SupportService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
        _meet_meet_component__WEBPACK_IMPORTED_MODULE_6__["MeetComponent"],
        _platform_platform_component__WEBPACK_IMPORTED_MODULE_7__["PlatformComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"],
        _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_9__["CampusSupportComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_11__["CollapsibleWellComponent"],
        _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_13__["PlatformListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                    _meet_meet_component__WEBPACK_IMPORTED_MODULE_6__["MeetComponent"],
                    _platform_platform_component__WEBPACK_IMPORTED_MODULE_7__["PlatformComponent"],
                    _team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"],
                    _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_9__["CampusSupportComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_11__["CollapsibleWellComponent"],
                    _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_13__["PlatformListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
                ],
                providers: [
                    _platform_platform_service__WEBPACK_IMPORTED_MODULE_12__["PlatformService"],
                    _team_teams_service__WEBPACK_IMPORTED_MODULE_14__["TeamsService"],
                    _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_15__["SupportService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dEjQ":
/*!****************************************!*\
  !*** ./src/app/meet/meet.component.ts ***!
  \****************************************/
/*! exports provided: MeetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetComponent", function() { return MeetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MeetComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeetComponent.ɵfac = function MeetComponent_Factory(t) { return new (t || MeetComponent)(); };
MeetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetComponent, selectors: [["app-meet"]], decls: 25, vars: 0, consts: [[1, "intro", "p-2"], [1, "intro-1"], ["src", "../../assets/stock/Headshots-02-1024x1024.png", "width", "100%"], [1, "p-2"], [1, "intro-2", "intro-2-img"], [1, "intro-2", "intro-2-write"], [1, "goals", "text-center"], [1, "vision", "text-center"]], template: function MeetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "April Gable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic veniam, excepturi omnis similique quisquam culpa dolor, quibusdam nisi ex facilis libero debitis magni dignissimos rem earum nobis nemo non? Nesciunt asperiores culpa magni beatae? Ad reiciendis architecto sequi aut a libero ullam error consequuntur, autem consectetur tempora quia perspiciatis cumque debitis! Quibusdam debitis alias sint dolor culpa architecto in laboriosam. Minima delectus, tempore earum doloribus porro neque aut minus id quae dolore officiis nemo aperiam quas dolorem explicabo, ut a vitae. Doloribus dignissimos sapiente officiis quos, laborum delectus esse commodi consectetur error obcaecati consequuntur exercitationem minus excepturi ratione aliquam voluptatibus perferendis, tempore quae nesciunt dolor odit hic facilis, provident voluptatem? Corporis porro eveniet consequatur, quia minus ex dolorem eos voluptatibus hic eius in iusto sed temporibus nulla nihil quasi voluptatem natus. Nostrum, similique? Quas animi asperiores ipsa debitis nostrum dolorum accusamus, voluptatum exercitationem repudiandae placeat esse iusto velit odio pariatur, quis molestiae mollitia minima molestias deleniti eos unde nesciunt temporibus dolorem laboriosam? Velit, praesentium omnis veritatis, eveniet sed vel voluptatibus consectetur est provident facilis tenetur, cupiditate sapiente. Maiores doloremque modi autem qui officiis commodi repudiandae, accusamus voluptatum tenetur suscipit dicta, placeat asperiores aliquid maxime, et odit dignissimos ullam totam error laboriosam porro aspernatur velit! Esse, laboriosam aliquam molestiae tempore ex incidunt ipsa veritatis voluptatem cum blanditiis! Nostrum voluptates accusamus sunt fuga numquam facilis, aliquid deleniti maxime sit iste nam fugit ea veniam unde, dolore expedita suscipit animi eveniet asperiores. Eum ullam doloribus accusamus autem tempora perspiciatis labore modi assumenda aliquam. Neque doloremque explicabo dolores voluptatibus, incidunt nostrum a ipsam suscipit. Animi itaque nam possimus! Optio deleniti molestias, cumque omnis blanditiis magnam asperiores itaque, tempore ab reiciendis quibusdam earum mollitia odit dolorem enim vitae ex, impedit officia perspiciatis et! Delectus ut quos est, nostrum placeat vel illo aliquam non facere sit!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Taylor Allgood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic veniam, excepturi omnis similique quisquam culpa dolor, quibusdam nisi ex facilis libero debitis magni dignissimos rem earum nobis nemo non? Nesciunt asperiores culpa magni beatae? Ad reiciendis architecto sequi aut a libero ullam error consequuntur, autem consectetur tempora quia perspiciatis cumque debitis! Quibusdam debitis alias sint dolor culpa architecto in laboriosam. Minima delectus, tempore earum doloribus porro neque aut minus id quae dolore officiis nemo aperiam quas dolorem explicabo, ut a vitae. Doloribus dignissimos sapiente officiis quos, laborum delectus esse commodi consectetur error obcaecati consequuntur exercitationem minus excepturi ratione aliquam voluptatibus perferendis, tempore quae nesciunt dolor odit hic facilis, provident voluptatem? Corporis porro eveniet consequatur, quia minus ex dolorem eos voluptatibus hic eius in iusto sed temporibus nulla nihil quasi voluptatem natus. Nostrum, similique? Quas animi asperiores ipsa debitis nostrum dolorum accusamus, voluptatum exercitationem repudiandae placeat esse iusto velit odio pariatur, quis molestiae mollitia minima molestias deleniti eos unde nesciunt temporibus dolorem laboriosam? Velit, praesentium omnis veritatis, eveniet sed vel voluptatibus consectetur est provident facilis tenetur, cupiditate sapiente. Maiores doloremque modi autem qui officiis commodi repudiandae, accusamus voluptatum tenetur suscipit dicta, placeat asperiores aliquid maxime, et odit dignissimos ullam totam error laboriosam porro aspernatur velit! Esse, laboriosam aliquam molestiae tempore ex incidunt ipsa veritatis voluptatem cum blanditiis! Nostrum voluptates accusamus sunt fuga numquam facilis, aliquid deleniti maxime sit iste nam fugit ea veniam unde, dolore expedita suscipit animi eveniet asperiores. Eum ullam doloribus accusamus autem tempora perspiciatis labore modi assumenda aliquam. Neque doloremque explicabo dolores voluptatibus, incidunt nostrum a ipsam suscipit. Animi itaque nam possimus! Optio deleniti molestias, cumque omnis blanditiis magnam asperiores itaque, tempore ab reiciendis quibusdam earum mollitia odit dolorem enim vitae ex, impedit officia perspiciatis et! Delectus ut quos est, nostrum placeat vel illo aliquam non facere sit!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Our Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aut laborum qui aliquam commodi atque veritatis soluta aliquid quis. Ullam, voluptas tenetur, suscipit, temporibus deserunt placeat voluptatem quaerat praesentium quasi sint fugit! Illum nihil eius minima nulla sit esse fugit laborum quos, dolore iure nobis asperiores minus voluptate quis sunt aut, similique autem molestiae eligendi quibusdam tempora obcaecati commodi, maiores amet! Repellat at repellendus sit sapiente ducimus quibusdam molestias voluptates, magni ex temporibus reprehenderit tenetur fugit dolore tempore quisquam distinctio quis quidem consequatur, veritatis sint culpa corrupti. Minima recusandae ullam quos, exercitationem qui inventore ea! Nobis laboriosam assumenda tenetur rem?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Our Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aut laborum qui aliquam commodi atque veritatis soluta aliquid quis. Ullam, voluptas tenetur, suscipit, temporibus deserunt placeat voluptatem quaerat praesentium quasi sint fugit! Illum nihil eius minima nulla sit esse fugit laborum quos, dolore iure nobis asperiores minus voluptate quis sunt aut, similique autem molestiae eligendi quibusdam tempora obcaecati commodi, maiores amet! Repellat at repellendus sit sapiente ducimus quibusdam molestias voluptates, magni ex temporibus reprehenderit tenetur fugit dolore tempore quisquam distinctio quis quidem consequatur, veritatis sint culpa corrupti. Minima recusandae ullam quos, exercitationem qui inventore ea! Nobis laboriosam assumenda tenetur rem?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media(min-width:768px){\r\n    .intro[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: wrap; \r\n}\r\n\r\n}\r\n\r\n\r\n.intro-2-img[_ngcontent-%COMP%]{\r\n    order: 2;\r\n}\r\n\r\n\r\n.intro-2-write[_ngcontent-%COMP%]{\r\n    order: 1;\r\n}\r\n\r\n\r\n.intro-1[_ngcontent-%COMP%]{\r\n    flex-basis: 50%;\r\n}\r\n\r\n\r\n.intro-2[_ngcontent-%COMP%]{\r\n    flex-basis: 50%;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n}\r\n\r\n\r\nH3[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7QUFDdkI7O0FBRUE7OztBQUdBO0lBQ0ksUUFBUTtBQUNaOzs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJtZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5pbnRyb3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDsgXHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG4uaW50cm8tMi1pbWd7XHJcbiAgICBvcmRlcjogMjtcclxufVxyXG5cclxuLmludHJvLTItd3JpdGV7XHJcbiAgICBvcmRlcjogMTtcclxufVxyXG5cclxuLmludHJvLTF7XHJcbiAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbn1cclxuLmludHJvLTJ7XHJcbiAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG59XHJcblxyXG5IM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meet',
                templateUrl: './meet.component.html',
                styleUrls: ['./meet.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lDaF":
/*!************************************************!*\
  !*** ./src/app/platform/platform.component.ts ***!
  \************************************************/
/*! exports provided: PlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformComponent", function() { return PlatformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform.service */ "B15d");
/* harmony import */ var _platform_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform-list.component */ "rPbr");




class PlatformComponent {
    constructor(platformService) {
        this.platformService = platformService;
        this.Platform = "Platform";
        this.showContentToggle = false;
    }
    ngOnInit() {
        this.platforms = this.platformService.getPlatforms();
        console.log(this.platforms);
    }
    onHeaderClick() {
        this.showContentToggle = !this.showContentToggle;
    }
}
PlatformComponent.ɵfac = function PlatformComponent_Factory(t) { return new (t || PlatformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"])); };
PlatformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformComponent, selectors: [["app-platform"]], decls: 22, vars: 1, consts: [[1, "platform-icons"], [1, "box1", "p-2"], ["src", "../../assets/stock/platform.png", "alt", ""], [1, "text-center", "p-3"], [3, "platforms"]], template: function PlatformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "platform works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Platform 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Platform 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Platform 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Platform 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "H2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "WE CARE FOR STUDENTS??? #GoCats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "platform-list", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.platforms);
    } }, directives: [_platform_list_component__WEBPACK_IMPORTED_MODULE_2__["PlatformListComponent"]], styles: [".platform-icons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%]{\r\n    flex-basis: 20%;\r\n    background-color: cornsilk;\r\n    border: 2px crimson solid;\r\n    border-width: 2px;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwbGF0Zm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXRmb3JtLWljb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJveDF7XHJcbiAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcclxuICAgIGJvcmRlcjogMnB4IGNyaW1zb24gc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxuXHJcbkgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-platform',
                templateUrl: './platform.component.html',
                styleUrls: ['./platform.component.css']
            }]
    }], function () { return [{ type: _platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"] }]; }, null); })();


/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams.service */ "ngQW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TeamComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r1.address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.name);
} }
class TeamComponent {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    ngOnInit() {
        this.members = this.teamsService.getMembers();
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 5, vars: 3, consts: [[1, "mt-2"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "p-2", "mt-2"], ["height", "100px", "width", "100px", "alt", "", 1, "card-img-top", "img-fluid", 3, "src"], [1, "card-body"], [1, "card-text", "text-center"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Meet the team!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamComponent_div_3_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.members));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n    text-align: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    box-shadow: 5px 5px 3px grey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuSDJ7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IGdyZXk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css']
            }]
    }], function () { return [{ type: _teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"] }]; }, null); })();


/***/ }),

/***/ "ngQW":
/*!***************************************!*\
  !*** ./src/app/team/teams.service.ts ***!
  \***************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class TeamsService {
    constructor() { }
    getMembers() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(TEAMS); subject.complete(); }, 100);
        return subject;
        console.log();
    }
}
TeamsService.ɵfac = function TeamsService_Factory(t) { return new (t || TeamsService)(); };
TeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamsService, factory: TeamsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
const TEAMS = [
    {
        name: "Your mom",
        address: "../../assets/team-pictures/member1.jpg"
    },
    {
        name: "Your mom",
        address: "../../assets/team-pictures/member1.jpg"
    },
    {
        name: "Your mom",
        address: "../../assets/team-pictures/member1.jpg"
    },
    {
        name: "Your mom",
        address: "../../assets/team-pictures/member1.jpg"
    },
    {
        name: "Your mom",
        address: "../../assets/team-pictures/member1.jpg"
    },
    {
        name: "Your mom",
        address: "../../assets/team-pictures/member1.jpg"
    }
];


/***/ }),

/***/ "oqwT":
/*!********************************************************!*\
  !*** ./src/app/platform/collapsible-well.component.ts ***!
  \********************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CollapsibleWellComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "visible"]);
} }
const _c0 = ["*"];
class CollapsibleWellComponent {
    constructor() {
        this.visible = false;
    }
    ngOnInit() {
    }
    toggleContent() {
        this.visible = !this.visible;
    }
}
CollapsibleWellComponent.ɵfac = function CollapsibleWellComponent_Factory(t) { return new (t || CollapsibleWellComponent)(); };
CollapsibleWellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollapsibleWellComponent, selectors: [["collapsible-well"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "well", "pointable", 3, "click"], [1, "well-title", 2, "cursor", "pointer"], [4, "ngIf"]], template: function CollapsibleWellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapsibleWellComponent_Template_div_click_0_listener() { return ctx.toggleContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CollapsibleWellComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["p[_ngcontent-%COMP%]{\n        font-family: 'Oswald', sans-serif;\n        font-weight: 300;\n        font-size: 11pt;\n    }\n    \n    H3[_ngcontent-%COMP%]{\n        font-family: 'Oswald', sans-serif;\n        font-weight: 600;\n        font-size: 28pt;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapsibleWellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'collapsible-well',
                templateUrl: './collapsible-well.component.html',
                styles: [
                    `p{
        font-family: 'Oswald', sans-serif;
        font-weight: 300;
        font-size: 11pt;
    }
    
    H3{
        font-family: 'Oswald', sans-serif;
        font-weight: 600;
        font-size: 28pt;
    }`
                ]
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rPbr":
/*!*****************************************************!*\
  !*** ./src/app/platform/platform-list.component.ts ***!
  \*****************************************************/
/*! exports provided: PlatformListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformListComponent", function() { return PlatformListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapsible-well.component */ "oqwT");




function PlatformListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "collapsible-well", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", platform_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r1.info);
} }
class PlatformListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PlatformListComponent.ɵfac = function PlatformListComponent_Factory(t) { return new (t || PlatformListComponent)(); };
PlatformListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformListComponent, selectors: [["platform-list"]], inputs: { platforms: "platforms" }, decls: 2, vars: 3, consts: [[4, "ngFor", "ngForOf"], [3, "title"]], template: function PlatformListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlatformListComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.platforms));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__["CollapsibleWellComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'platform-list',
                templateUrl: './platform-list.component.html'
            }]
    }], function () { return []; }, { platforms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campus-support/campus-support.component */ "PhBf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _meet_meet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meet/meet.component */ "dEjQ");
/* harmony import */ var _platform_platform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platform/platform.component */ "lDaF");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/team.component */ "mGeP");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'meet', component: _meet_meet_component__WEBPACK_IMPORTED_MODULE_4__["MeetComponent"] },
    { path: 'campus-support', component: _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_2__["CampusSupportComponent"] },
    { path: 'platform', component: _platform_platform_component__WEBPACK_IMPORTED_MODULE_5__["PlatformComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map