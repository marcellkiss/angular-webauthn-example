(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h1>\n    Web Authentication\n  </h1>\n</div>\n<div class=\"forms\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n  <fieldset fxFlex=\"grow\">\n    <legend>Sign Up</legend>\n    <div class=\"signup\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-form-field>\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"password\">\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" (click)=\"signup()\">SIGN UP</button>\n    </div>\n  </fieldset>\n  <fieldset fxFlex=\"grow\">\n    <legend>Sign In</legend>\n    <div class=\"signin\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-form-field>\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"password\">\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" (click)=\"signin()\">SIGN IN</button>\n      <div class=\"or\">OR</div>\n      <button mat-raised-button color=\"primary\" (click)=\"webAuthSignin()\"><mat-icon>fingerprint</mat-icon></button>\n    </div>\n  </fieldset>\n</div>\n\n<h1>Admin</h1>\n<div class=\"user\" *ngFor=\"let user of users\">\n    <button mat-button (click)=\"removeUser(user.email)\"><mat-icon inline>delete</mat-icon></button> {{ user.email }}\n</div>\n\n<div class=\"info\">\n  <hr/>\n  <h3>Sources</h3>\n  <div>\n    <a href=\"https://webauthn.io/\">Webauthn.io</a>\n  </div>\n  <div>\n    <a href=\"https://medium.com/@herrjemand/introduction-to-webauthn-api-5fd1fb46c285\">Medium Article by Ackermann Yuriy</a>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup, .signin {\n  height: 300px;\n}\n\n.info {\n  margin: 50px 0;\n}\n\n.or {\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWxsa2lzcy9kZXYvYW5ndWxhci13ZWItYXV0aG4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAsIC5zaWduaW4ge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4ub3Ige1xuICBtYXJnaW46IDhweCAwO1xufSIsIi5zaWdudXAsIC5zaWduaW4ge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4ub3Ige1xuICBtYXJnaW46IDhweCAwO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/server-mock.service */ "./src/app/services/server-mock.service.ts");
/* harmony import */ var _services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/web-authn.service */ "./src/app/services/web-authn.service.ts");




let AppComponent = class AppComponent {
    // signupForm: FormGroup;
    constructor(serverMockService, webAuthnService) {
        this.serverMockService = serverMockService;
        this.webAuthnService = webAuthnService;
        this.title = 'angular-web-authn';
        this.email = 'a@a.com';
        this.password = 'aaa';
        this.users = serverMockService.getUsers();
        // this.signupForm = fb.group({
        //   email: ['a@a.com', [Validators.required, Validators.email]],
        //   password: ['aaa', [Validators.required]],
        //   confirmPassword: ['aaa', [Validators.required]],
        // });
    }
    removeUser(email) {
        this.serverMockService.removeUser(email);
        this.users = this.serverMockService.getUsers();
    }
    signup() {
        console.log('SIGNUP');
        // Save into the 'DB'
        const user = this.serverMockService.addUser({ email: this.email, password: this.password, credentials: [] });
        this.users = this.serverMockService.getUsers();
        // Ask for WebAuthn Auth method
        if (confirm('Would you like to use your fingerprint for later logins?')) {
            this.createCredential(user);
        }
    }
    createCredential(user) {
        console.log('[createCredential]');
        // Creating credentials
        this.webAuthnService.createCredential(user).then((response) => {
            console.log('credentials.create RESPONSE', response);
            // TODO: validate and store credentials
        }).catch((error) => {
            console.log('credentials.create ERROR', error);
        });
    }
    signin() {
        console.log('[signin]');
        const user = this.serverMockService.getUsers().find(u => u.email === this.email && u.password === this.password);
        if (user) {
            alert('✅ Congrats! Authentication went fine!');
        }
        else {
            alert('🚫 Sorry :( Invalid credentials!');
        }
    }
    webAuthSignin() {
        const user = this.serverMockService.getUser(this.email);
        this.webAuthnService.getAssertion(user).then((response) => {
            // TODO: validate attestion
            alert('✅ Congrats! Authentication went fine!');
            console.log('SUCCESSFULLY GOT AN ASSERTION!', response);
        })
            .catch((error) => {
            alert('🚫 Sorry :( Invalid credentials!');
            console.log('FAIL', error);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"] },
    { type: _services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__["WebAuthnService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"], _services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__["WebAuthnService"]])
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/server-mock.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/server-mock.service.ts ***!
  \*************************************************/
/*! exports provided: ServerMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMockService", function() { return ServerMockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");



let ServerMockService = class ServerMockService {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers() {
        return this.userService.getUsers();
    }
    updateUser(user) {
        this.removeUser(user.email);
        this.addUser(user);
    }
    addUser(user) {
        user.id = '' + Math.floor(Math.random() * 10000000);
        this.userService.addUser(user);
        return user;
    }
    getUser(email) {
        return this.userService.getUser(email);
    }
    removeUser(email) {
        return this.userService.removeUser(email);
    }
    getChallenge() {
        return Uint8Array.from('someChallengeIsHereComOn', c => c.charCodeAt(0));
    }
};
ServerMockService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
ServerMockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], ServerMockService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserService = class UserService {
    constructor() { }
    getUser(email) {
        return this.getUsers().find(u => u.email === email);
    }
    getUsers() {
        const usersString = localStorage.getItem('users');
        return usersString ? JSON.parse(usersString) : [];
    }
    saveUsers(users) {
        return localStorage.setItem('users', JSON.stringify(users));
    }
    addUser(user) {
        const users = [...this.getUsers(), user];
        this.saveUsers(users);
    }
    removeUser(email) {
        const filteredUsers = this.getUsers().filter(user => user.email !== email);
        this.saveUsers(filteredUsers);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserService);



/***/ }),

/***/ "./src/app/services/web-authn.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/web-authn.service.ts ***!
  \***********************************************/
/*! exports provided: WebAuthnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuthnService", function() { return WebAuthnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _server_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-mock.service */ "./src/app/services/server-mock.service.ts");



let WebAuthnService = class WebAuthnService {
    constructor(serverMockService) {
        this.serverMockService = serverMockService;
    }
    createCredential(user) {
        const publicKeyCredentialCreationOptions = {
            // Challenge shoulda come from the server
            challenge: this.serverMockService.getChallenge(),
            rp: {
                name: 'WebAuthn Test',
            },
            user: {
                // Some user id coming from the server
                id: Uint8Array.from(user.id, c => c.charCodeAt(0)),
                name: user.email,
                displayName: user.email,
            },
            pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
            authenticatorSelection: {
                authenticatorAttachment: 'platform',
            },
            timeout: 60000,
            attestation: 'direct'
        };
        return navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions,
        });
    }
    getAssertion(user) {
        const credentialRequestOptions = {
            challenge: this.serverMockService.getChallenge(),
            allowCredentials: user.credentials.map(c => {
                return { type: 'public-key', id: c.credentialId };
            }),
        };
        return navigator.credentials.get({
            publicKey: credentialRequestOptions,
        });
    }
};
WebAuthnService.ctorParameters = () => [
    { type: _server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"] }
];
WebAuthnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"]])
], WebAuthnService);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marcellkiss/dev/angular-web-authn/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map