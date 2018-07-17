(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./miscellaneous/miscellaneous.module": [
		"./src/app/pages/miscellaneous/miscellaneous.module.ts",
		"common"
	],
	"app/pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"common",
		"app-pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/core.module.ts":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: NbSimpleRoleProvider, NB_CORE_PROVIDERS, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSimpleRoleProvider", function() { return NbSimpleRoleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_CORE_PROVIDERS", function() { return NB_CORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/@core/module-import-guard.ts");
/* harmony import */ var _data_data_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/data.module */ "./src/app/@core/data/data.module.ts");
/* harmony import */ var _utils_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'socicon-github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'socicon-facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'socicon-twitter',
    },
];
var NbSimpleRoleProvider = /** @class */ (function (_super) {
    __extends(NbSimpleRoleProvider, _super);
    function NbSimpleRoleProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbSimpleRoleProvider.prototype.getRole = function () {
        // here you could provide any role based on any auth flow
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('guest');
    };
    return NbSimpleRoleProvider;
}(_nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbRoleProvider"]));

var NB_CORE_PROVIDERS = _data_data_module__WEBPACK_IMPORTED_MODULE_6__["DataModule"].forRoot().providers.concat(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"].forRoot({
    strategies: [
        _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbDummyAuthStrategy"].setup({
            name: 'email',
            delay: 3000,
        }),
    ],
    forms: {
        login: {
            socialLinks: socialLinks,
        },
        register: {
            socialLinks: socialLinks,
        },
    },
}).providers, [
    _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbSecurityModule"].forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbRoleProvider"], useClass: NbSimpleRoleProvider,
    },
    _utils_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"],
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_5__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"],
            ],
            declarations: [],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/data.module.ts":
/*!*******************************************!*\
  !*** ./src/app/@core/data/data.module.ts ***!
  \*******************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/@core/data/users.service.ts");
/* harmony import */ var _electricity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./electricity.service */ "./src/app/@core/data/electricity.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state.service */ "./src/app/@core/data/state.service.ts");
/* harmony import */ var _smart_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smart-table.service */ "./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.service */ "./src/app/@core/data/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SERVICES = [
    _users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
    _electricity_service__WEBPACK_IMPORTED_MODULE_3__["ElectricityService"],
    _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
    _smart_table_service__WEBPACK_IMPORTED_MODULE_5__["SmartTableService"],
    _player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"],
];
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule_1 = DataModule;
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule_1,
            providers: SERVICES.slice(),
        };
    };
    DataModule = DataModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            providers: SERVICES.slice(),
        })
    ], DataModule);
    return DataModule;
    var DataModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/electricity.service.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/data/electricity.service.ts ***!
  \***************************************************/
/*! exports provided: ElectricityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityService", function() { return ElectricityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectricityService = /** @class */ (function () {
    function ElectricityService() {
        this.data = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
    }
    // TODO: observables
    ElectricityService.prototype.getData = function () {
        return this.data;
    };
    ElectricityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ElectricityService);
    return ElectricityService;
}());



/***/ }),

/***/ "./src/app/@core/data/player.service.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/data/player.service.ts ***!
  \**********************************************/
/*! exports provided: Track, PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());

var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    PlayerService.prototype.random = function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    PlayerService.prototype.next = function () {
        return this.getNextTrack();
    };
    PlayerService.prototype.prev = function () {
        return this.getPrevTrack();
    };
    PlayerService.prototype.getNextTrack = function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    PlayerService.prototype.getPrevTrack = function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/@core/data/smart-table.service.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/data/smart-table.service.ts ***!
  \***************************************************/
/*! exports provided: SmartTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTableService", function() { return SmartTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SmartTableService = /** @class */ (function () {
    function SmartTableService() {
        this.data = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
            }, {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
            }, {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
            }, {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }, {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13',
            }, {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22',
            }, {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'username': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'username': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'username': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'username': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'username': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'username': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'username': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'username': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'username': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'username': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'username': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'username': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'username': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'username': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'username': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'username': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'username': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'username': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'username': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'username': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'username': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'username': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'username': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'username': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'username': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'username': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'username': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'username': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'username': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'username': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'username': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'username': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'username': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'username': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'username': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'username': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'username': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'username': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'username': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'username': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'username': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'username': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'username': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'username': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'username': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            }];
    }
    SmartTableService.prototype.getData = function () {
        return this.data;
    };
    SmartTableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SmartTableService);
    return SmartTableService;
}());



/***/ }),

/***/ "./src/app/@core/data/state.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/state.service.ts ***!
  \*********************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layouts[0]);
        this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
        this.updateSidebarIcons(directionService.getDirection());
    }
    StateService.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StateService.prototype.updateSidebarIcons = function (direction) {
        var _a = this.sidebars, startSidebar = _a[0], endSidebar = _a[1];
        var isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirection"].LTR;
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/@core/data/users.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/users.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var counter = 0;
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        // this.userArray = Object.values(this.users);
    }
    UserService.prototype.getUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.users);
    };
    UserService.prototype.getUserArray = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.userArray);
    };
    UserService.prototype.getUser = function () {
        counter = (counter + 1) % this.userArray.length;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.userArray[counter]);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/@core/module-import-guard.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/module-import-guard.ts ***!
  \**********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/@core/utils/analytics.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/utils/analytics.service.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.nb-theme-default :host .socials {\n    font-size: 2rem; }\n.nb-theme-default :host .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n.nb-theme-default :host .socials a:hover {\n        color: #2a2a2a; }\n@media (max-width: 575.98px) {\n    .nb-theme-default :host .socials {\n      font-size: 1.5rem; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.nb-theme-cosmic :host .socials {\n    font-size: 2rem; }\n.nb-theme-cosmic :host .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n.nb-theme-cosmic :host .socials a:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    .nb-theme-cosmic :host .socials {\n      font-size: 1.5rem; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.nb-theme-corporate :host .socials {\n    font-size: 2rem; }\n.nb-theme-corporate :host .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n.nb-theme-corporate :host .socials a:hover {\n        color: #181818; }\n@media (max-width: 575.98px) {\n    .nb-theme-corporate :host .socials {\n      font-size: 1.5rem; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-footer',
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/@theme/components/footer/footer.component.scss")],
            template: "\n    <span class=\"created-by\">Created with \u2665 by\n      <b><a href=\"https://duanqz.github.io\" target=\"_blank\">duanqz</a></b> 2018\n    </span>\n    <!--\n    <div class=\"socials\">\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-linkedin\"></a>\n    </div>\n    -->\n  ",
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\"\n     [class.left]=\"position === 'normal'\"\n     [class.right]=\"position === 'inverse'\">\n  <div class=\"logo-containter\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\n    <div class=\"logo\" (click)=\"goToHome()\">Branch <span>Topology</span></div>\n  </div>\n  <!-- <ngx-theme-switcher></ngx-theme-switcher> -->\n</div>\n\n<div class=\"header-container\">\n  <!-- <ngx-layout-direction-switcher></ngx-layout-direction-switcher> -->\n  <nb-actions\n    size=\"medium\"\n    [class.right]=\"position === 'normal'\"\n    [class.left]=\"position === 'inverse'\">\n    <!-- <nb-action icon=\"nb-gear\" class=\"toggle-layout\" (click)=\"toggleSettings()\"></nb-action> -->\n    <nb-action *nbIsGranted=\"['view', 'user']\" >\n      <nb-user [nbContextMenu]=\"userMenu\" [name]=\"user?.username\" [picture]=\"user?.avatar_url\"></nb-user>\n    </nb-action>\n    <!-- <nb-action class=\"control-item\" disabled icon=\"nb-notifications\"></nb-action> -->\n    <!-- <nb-action class=\"control-item\" icon=\"nb-email\"></nb-action> -->\n    <!-- <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\" (click)=\"startSearch()\"></nb-search>\n    </nb-action> -->\n  </nb-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n.nb-theme-default :host .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.nb-theme-default :host .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n.nb-theme-default :host .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: calc(16rem - 1.25rem); }\n.nb-theme-default :host .control-item {\n    display: block; }\n.nb-theme-default :host .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: auto; }\n.nb-theme-default :host .header-container .navigation {\n      font-size: 2.5rem;\n      text-decoration: none; }\n[dir=ltr] .nb-theme-default :host .header-container .navigation {\n        padding-right: 1.25rem; }\n[dir=rtl] .nb-theme-default :host .header-container .navigation {\n        padding-left: 1.25rem; }\n.nb-theme-default :host .header-container .navigation i {\n        display: block; }\n.nb-theme-default :host .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n[dir=ltr] .nb-theme-default :host .header-container .logo {\n        border-left: 1px solid #ebeef2; }\n[dir=rtl] .nb-theme-default :host .header-container .logo {\n        border-right: 1px solid #ebeef2; }\n.nb-theme-default :host .header-container .logo span {\n        font-weight: 400; }\n.nb-theme-default :host ngx-layout-direction-switcher {\n    margin: 0 1.5rem; }\n.nb-theme-default :host ngx-theme-switcher {\n    margin: 2.25rem 2.25rem 0.75rem;\n    margin-top: 0;\n    margin-bottom: 0; }\n@media (max-width: 1399.98px) {\n    .nb-theme-default :host ngx-layout-direction-switcher {\n      display: none; } }\n.nb-theme-default :host .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n.nb-theme-default :host .toggle-layout /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem;\n      border-radius: 50%;\n      position: relative;\n      -webkit-animation-name: pulse-light;\n              animation-name: pulse-light; }\n.nb-theme-default :host .toggle-layout /deep/ a i::after {\n        content: ' ';\n        background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n        border-radius: 50%;\n        pointer-events: none;\n        position: absolute;\n        top: 52.3%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 13%;\n        height: 13%;\n        -webkit-animation: 3s linear infinite pulse;\n                animation: 3s linear infinite pulse;\n        -webkit-animation-name: pulse-light;\n                animation-name: pulse-light; }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0);\n            box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4);\n            box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0);\n            box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0); } }\n@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0);\n            box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4);\n            box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0);\n            box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0); } }\n@-webkit-keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@media (max-width: 991.98px) {\n    .nb-theme-default :host nb-action:not(.toggle-layout) {\n      border: none; }\n    .nb-theme-default :host .control-item {\n      display: none; }\n    .nb-theme-default :host .toggle-layout {\n      padding: 0; }\n    .nb-theme-default :host ngx-layout-direction-switcher {\n      display: none; }\n    .nb-theme-default :host ngx-theme-switcher {\n      margin: 0 0.5rem; } }\n@media (max-width: 767.98px) {\n    .nb-theme-default :host nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    .nb-theme-default :host .header-container .logo {\n      font-size: 1.25rem; }\n    .nb-theme-default :host .toggle-layout {\n      display: none; }\n    .nb-theme-default :host ngx-theme-switcher {\n      display: none; }\n    .nb-theme-default :host nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    .nb-theme-default :host .right /deep/ {\n      display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n.nb-theme-cosmic :host .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.nb-theme-cosmic :host .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n.nb-theme-cosmic :host .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: calc(16.25rem - 1.25rem); }\n.nb-theme-cosmic :host .control-item {\n    display: block; }\n.nb-theme-cosmic :host .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: auto; }\n.nb-theme-cosmic :host .header-container .navigation {\n      font-size: 2.5rem;\n      text-decoration: none; }\n[dir=ltr] .nb-theme-cosmic :host .header-container .navigation {\n        padding-right: 1.25rem; }\n[dir=rtl] .nb-theme-cosmic :host .header-container .navigation {\n        padding-left: 1.25rem; }\n.nb-theme-cosmic :host .header-container .navigation i {\n        display: block; }\n.nb-theme-cosmic :host .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n[dir=ltr] .nb-theme-cosmic :host .header-container .logo {\n        border-left: 1px solid #342e73; }\n[dir=rtl] .nb-theme-cosmic :host .header-container .logo {\n        border-right: 1px solid #342e73; }\n.nb-theme-cosmic :host .header-container .logo span {\n        font-weight: 400; }\n.nb-theme-cosmic :host ngx-layout-direction-switcher {\n    margin: 0 1.5rem; }\n.nb-theme-cosmic :host ngx-theme-switcher {\n    margin: 2.25rem 2.25rem 0.75rem;\n    margin-top: 0;\n    margin-bottom: 0; }\n@media (max-width: 1399.98px) {\n    .nb-theme-cosmic :host ngx-layout-direction-switcher {\n      display: none; } }\n.nb-theme-cosmic :host .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n.nb-theme-cosmic :host .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem;\n      border-radius: 50%;\n      position: relative;\n      -webkit-animation-name: pulse-light;\n              animation-name: pulse-light; }\n.nb-theme-cosmic :host .toggle-layout /deep/ a i::after {\n        content: ' ';\n        background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n        border-radius: 50%;\n        pointer-events: none;\n        position: absolute;\n        top: 52.3%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 13%;\n        height: 13%;\n        -webkit-animation: 3s linear infinite pulse;\n                animation: 3s linear infinite pulse; }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0);\n            box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4);\n            box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0);\n            box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0); } }\n@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0);\n            box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4);\n            box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0);\n            box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0); } }\n@-webkit-keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@media (max-width: 991.98px) {\n    .nb-theme-cosmic :host nb-action:not(.toggle-layout) {\n      border: none; }\n    .nb-theme-cosmic :host .control-item {\n      display: none; }\n    .nb-theme-cosmic :host .toggle-layout {\n      padding: 0; }\n    .nb-theme-cosmic :host ngx-layout-direction-switcher {\n      display: none; }\n    .nb-theme-cosmic :host ngx-theme-switcher {\n      margin: 0 0.5rem; } }\n@media (max-width: 767.98px) {\n    .nb-theme-cosmic :host nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    .nb-theme-cosmic :host .header-container .logo {\n      font-size: 1.25rem; }\n    .nb-theme-cosmic :host .toggle-layout {\n      display: none; }\n    .nb-theme-cosmic :host ngx-theme-switcher {\n      display: none; }\n    .nb-theme-cosmic :host nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    .nb-theme-cosmic :host .right /deep/ {\n      display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n.nb-theme-corporate :host .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.nb-theme-corporate :host .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n.nb-theme-corporate :host .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: calc(16rem - 1.25rem); }\n.nb-theme-corporate :host .control-item {\n    display: block; }\n.nb-theme-corporate :host .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: auto; }\n.nb-theme-corporate :host .header-container .navigation {\n      font-size: 2.5rem;\n      text-decoration: none; }\n[dir=ltr] .nb-theme-corporate :host .header-container .navigation {\n        padding-right: 1.25rem; }\n[dir=rtl] .nb-theme-corporate :host .header-container .navigation {\n        padding-left: 1.25rem; }\n.nb-theme-corporate :host .header-container .navigation i {\n        display: block; }\n.nb-theme-corporate :host .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n[dir=ltr] .nb-theme-corporate :host .header-container .logo {\n        border-left: 1px solid #cdd5dc; }\n[dir=rtl] .nb-theme-corporate :host .header-container .logo {\n        border-right: 1px solid #cdd5dc; }\n.nb-theme-corporate :host .header-container .logo span {\n        font-weight: 400; }\n[dir=ltr] .nb-theme-corporate :host nb-action {\n    border-left-color: #3f4550; }\n[dir=rtl] .nb-theme-corporate :host nb-action {\n    border-right-color: #3f4550; }\n[dir=ltr] .nb-theme-corporate :host .header-container .logo {\n    border: none; }\n[dir=rtl] .nb-theme-corporate :host .header-container .logo {\n    border: none; }\n.nb-theme-corporate :host .header-container /deep/ ngx-theme-switcher .dropdown-toggle {\n    color: #ffffff;\n    background: transparent; }\n.nb-theme-corporate :host ngx-layout-direction-switcher {\n    margin: 0 1.5rem; }\n.nb-theme-corporate :host ngx-theme-switcher {\n    margin: 2.25rem 2.25rem 0.75rem;\n    margin-top: 0;\n    margin-bottom: 0; }\n@media (max-width: 1399.98px) {\n    .nb-theme-corporate :host ngx-layout-direction-switcher {\n      display: none; } }\n.nb-theme-corporate :host .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n.nb-theme-corporate :host .toggle-layout /deep/ a i {\n      color: #a4abb3;\n      font-size: 2.25rem;\n      border-radius: 50%;\n      position: relative;\n      -webkit-animation-name: pulse-light;\n              animation-name: pulse-light; }\n.nb-theme-corporate :host .toggle-layout /deep/ a i::after {\n        content: ' ';\n        background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n        border-radius: 50%;\n        pointer-events: none;\n        position: absolute;\n        top: 52.3%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 13%;\n        height: 13%;\n        -webkit-animation: 3s linear infinite pulse;\n                animation: 3s linear infinite pulse; }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(164, 171, 179, 0);\n            box-shadow: 0 0 1px 0 rgba(164, 171, 179, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(164, 171, 179, 0.4);\n            box-shadow: 0 0 3px 10px rgba(164, 171, 179, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(164, 171, 179, 0);\n            box-shadow: 0 0 5px 20px rgba(164, 171, 179, 0); } }\n@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(164, 171, 179, 0);\n            box-shadow: 0 0 1px 0 rgba(164, 171, 179, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(164, 171, 179, 0.4);\n            box-shadow: 0 0 3px 10px rgba(164, 171, 179, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(164, 171, 179, 0);\n            box-shadow: 0 0 5px 20px rgba(164, 171, 179, 0); } }\n@-webkit-keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@media (max-width: 991.98px) {\n    .nb-theme-corporate :host nb-action:not(.toggle-layout) {\n      border: none; }\n    .nb-theme-corporate :host .control-item {\n      display: none; }\n    .nb-theme-corporate :host .toggle-layout {\n      padding: 0; }\n    .nb-theme-corporate :host ngx-layout-direction-switcher {\n      display: none; }\n    .nb-theme-corporate :host ngx-theme-switcher {\n      margin: 0 0.5rem; } }\n@media (max-width: 767.98px) {\n    .nb-theme-corporate :host nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    .nb-theme-corporate :host .header-container .logo {\n      font-size: 1.25rem; }\n    .nb-theme-corporate :host .toggle-layout {\n      display: none; }\n    .nb-theme-corporate :host ngx-theme-switcher {\n      display: none; }\n    .nb-theme-corporate :host nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    .nb-theme-corporate :host .right /deep/ {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var _transaction_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../transaction/transaction.service */ "./src/app/transaction/transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, sidebarService, menuService, transactionService, analyticsService) {
        this.router = router;
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.transactionService = transactionService;
        this.analyticsService = analyticsService;
        this.position = 'normal';
        this.LOGOUT = '注销';
        this.userMenu = [{ title: this.LOGOUT }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionService.getUser().subscribe(function (user) {
            _this.user = user;
            localStorage.setItem('useremail', user['useremail']);
        });
        this.menuService.onItemClick().subscribe(function (data) {
            if (data.item.title === _this.LOGOUT) {
                localStorage.clear();
                _this.router.navigate(['/auth/login']);
            }
        });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-header',
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/@theme/components/header/header.component.scss")],
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/@theme/components/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"],
            _transaction_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"],
            _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, FooterComponent, SearchInputComponent, TinyMCEComponent, ThemeSettingsComponent, ThemeSwitcherComponent, SwitcherComponent, LayoutDirectionSwitcherComponent, ThemeSwitcherListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input/search-input.component */ "./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"]; });

/* harmony import */ var _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiny-mce/tiny-mce.component */ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__["TinyMCEComponent"]; });

/* harmony import */ var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-settings/theme-settings.component */ "./src/app/@theme/components/theme-settings/theme-settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsComponent"]; });

/* harmony import */ var _theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-switcher/theme-switcher.component */ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherComponent", function() { return _theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_5__["ThemeSwitcherComponent"]; });

/* harmony import */ var _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switcher/switcher.component */ "./src/app/@theme/components/switcher/switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitcherComponent", function() { return _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__["SwitcherComponent"]; });

/* harmony import */ var _layout_direction_switcher_layout_direction_switcher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-direction-switcher/layout-direction-switcher.component */ "./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDirectionSwitcherComponent", function() { return _layout_direction_switcher_layout_direction_switcher_component__WEBPACK_IMPORTED_MODULE_7__["LayoutDirectionSwitcherComponent"]; });

/* harmony import */ var _theme_switcher_themes_switcher_list_themes_switcher_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-switcher/themes-switcher-list/themes-switcher-list.component */ "./src/app/@theme/components/theme-switcher/themes-switcher-list/themes-switcher-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherListComponent", function() { return _theme_switcher_themes_switcher_list_themes_switcher_list_component__WEBPACK_IMPORTED_MODULE_8__["ThemeSwitcherListComponent"]; });












/***/ }),

/***/ "./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LayoutDirectionSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirectionSwitcherComponent", function() { return LayoutDirectionSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/takeWhile */ "./node_modules/rxjs-compat/_esm5/operators/takeWhile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutDirectionSwitcherComponent = /** @class */ (function () {
    function LayoutDirectionSwitcherComponent(directionService) {
        var _this = this;
        this.directionService = directionService;
        this.directions = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutDirection"];
        this.alive = true;
        this.vertical = false;
        this.currentDirection = this.directionService.getDirection();
        this.directionService.onDirectionChange()
            .pipe(Object(rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (newDirection) { return _this.currentDirection = newDirection; });
    }
    LayoutDirectionSwitcherComponent.prototype.toggleDirection = function (newDirection) {
        this.directionService.setDirection(newDirection);
    };
    LayoutDirectionSwitcherComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LayoutDirectionSwitcherComponent.prototype, "vertical", void 0);
    LayoutDirectionSwitcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-layout-direction-switcher',
            template: "\n    <ngx-switcher\n      [firstValue]=\"directions.RTL\"\n      [secondValue]=\"directions.LTR\"\n      [firstValueLabel]=\"'RTL'\"\n      [secondValueLabel]=\"'LTR'\"\n      [value]=\"currentDirection\"\n      (valueChange)=\"toggleDirection($event)\"\n      [vertical]=\"vertical\"\n    >\n    </ngx-switcher>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutDirectionService"]])
    ], LayoutDirectionSwitcherComponent);
    return LayoutDirectionSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: none;\n    outline: none;\n    margin-left: 1rem;\n    width: 15rem;\n    -webkit-transition: width 0.2s ease;\n    transition: width 0.2s ease; }\n  :host input.hidden {\n      width: 0;\n      margin: 0; }\n  :host /deep/ search-input input {\n    background: transparent; }\n"

/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchInputComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-search-input',
            styles: [__webpack_require__(/*! ./search-input.component.scss */ "./src/app/@theme/components/search-input/search-input.component.scss")],
            template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/switcher/switcher.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/@theme/components/switcher/switcher.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host .switch-label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n.nb-theme-default :host .switch-label.vertical {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n.nb-theme-default :host .switch-label.vertical .first,\n    .nb-theme-default :host .switch-label.vertical .second {\n      padding: 0; }\n.nb-theme-default :host .switch-label.vertical .switch {\n      margin-top: 0.5em; }\n.nb-theme-default :host .switch-label > span {\n    font-size: 1.125rem;\n    font-weight: 600;\n    -webkit-transition: opacity 0.3s ease;\n    transition: opacity 0.3s ease;\n    color: #a4abb3; }\n[dir=ltr] .nb-theme-default :host .switch-label > span.first {\n      padding-right: 10px; }\n[dir=rtl] .nb-theme-default :host .switch-label > span.first {\n      padding-left: 10px; }\n[dir=ltr] .nb-theme-default :host .switch-label > span.second {\n      padding-left: 10px; }\n[dir=rtl] .nb-theme-default :host .switch-label > span.second {\n      padding-right: 10px; }\n.nb-theme-default :host .switch-label > span.active {\n      color: #4b4b4b; }\n.nb-theme-default :host .switch-label > span:active {\n      opacity: 0.78; }\n.nb-theme-default :host .switch {\n  position: relative;\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  margin: 0; }\n.nb-theme-default :host .switch input {\n    display: none; }\n[dir=ltr] .nb-theme-default :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(1.5rem);\n              transform: translateX(1.5rem); }\n[dir=rtl] .nb-theme-default :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-1.5rem);\n              transform: translateX(-1.5rem); }\n.nb-theme-default :host .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n.nb-theme-default :host .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n    background-color: #40dc7e;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    -webkit-box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4);\n            box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host .switch-label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n.nb-theme-cosmic :host .switch-label.vertical {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n.nb-theme-cosmic :host .switch-label.vertical .first,\n    .nb-theme-cosmic :host .switch-label.vertical .second {\n      padding: 0; }\n.nb-theme-cosmic :host .switch-label.vertical .switch {\n      margin-top: 0.5em; }\n.nb-theme-cosmic :host .switch-label > span {\n    font-size: 1.125rem;\n    font-weight: 600;\n    -webkit-transition: opacity 0.3s ease;\n    transition: opacity 0.3s ease;\n    color: #a1a1e5;\n    color: #a1a1e5; }\n[dir=ltr] .nb-theme-cosmic :host .switch-label > span.first {\n      padding-right: 10px; }\n[dir=rtl] .nb-theme-cosmic :host .switch-label > span.first {\n      padding-left: 10px; }\n[dir=ltr] .nb-theme-cosmic :host .switch-label > span.second {\n      padding-left: 10px; }\n[dir=rtl] .nb-theme-cosmic :host .switch-label > span.second {\n      padding-right: 10px; }\n.nb-theme-cosmic :host .switch-label > span.active {\n      color: #d1d1ff; }\n.nb-theme-cosmic :host .switch-label > span.active {\n      color: #ffffff; }\n.nb-theme-cosmic :host .switch-label > span:active {\n      opacity: 0.78; }\n.nb-theme-cosmic :host .switch {\n  position: relative;\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  margin: 0; }\n.nb-theme-cosmic :host .switch input {\n    display: none; }\n[dir=ltr] .nb-theme-cosmic :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(1.5rem);\n              transform: translateX(1.5rem); }\n[dir=rtl] .nb-theme-cosmic :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-1.5rem);\n              transform: translateX(-1.5rem); }\n.nb-theme-cosmic :host .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n.nb-theme-cosmic :host .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n    background-color: #00d977;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    -webkit-box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n            box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n    background-image: -webkit-gradient(linear, left top, right top, from(#ad59ff), to(#7659ff));\n    background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host .switch-label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n.nb-theme-corporate :host .switch-label.vertical {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n.nb-theme-corporate :host .switch-label.vertical .first,\n    .nb-theme-corporate :host .switch-label.vertical .second {\n      padding: 0; }\n.nb-theme-corporate :host .switch-label.vertical .switch {\n      margin-top: 0.5em; }\n.nb-theme-corporate :host .switch-label > span {\n    font-size: 1.125rem;\n    font-weight: 600;\n    -webkit-transition: opacity 0.3s ease;\n    transition: opacity 0.3s ease;\n    color: #a4abb3; }\n[dir=ltr] .nb-theme-corporate :host .switch-label > span.first {\n      padding-right: 10px; }\n[dir=rtl] .nb-theme-corporate :host .switch-label > span.first {\n      padding-left: 10px; }\n[dir=ltr] .nb-theme-corporate :host .switch-label > span.second {\n      padding-left: 10px; }\n[dir=rtl] .nb-theme-corporate :host .switch-label > span.second {\n      padding-right: 10px; }\n.nb-theme-corporate :host .switch-label > span.active {\n      color: #4b4b4b; }\n.nb-theme-corporate :host .switch-label > span:active {\n      opacity: 0.78; }\n.nb-theme-corporate :host .switch {\n  position: relative;\n  display: inline-block;\n  width: 3rem;\n  height: 1.5rem;\n  margin: 0; }\n.nb-theme-corporate :host .switch input {\n    display: none; }\n[dir=ltr] .nb-theme-corporate :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(1.5rem);\n              transform: translateX(1.5rem); }\n[dir=rtl] .nb-theme-corporate :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-1.5rem);\n              transform: translateX(-1.5rem); }\n.nb-theme-corporate :host .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #f1f5f8; }\n.nb-theme-corporate :host .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n    background-color: #5dcfe3;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    -webkit-box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4);\n            box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4);\n    background-color: #73a1ff; }\n@media (max-width: 399.98px) {\n  .nb-theme-corporate :host {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/switcher/switcher.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/switcher/switcher.component.ts ***!
  \******************************************************************/
/*! exports provided: SwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherComponent", function() { return SwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitcherComponent = /** @class */ (function () {
    function SwitcherComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SwitcherComponent.prototype.isFirstValue = function () {
        return this.value === this.firstValue;
    };
    SwitcherComponent.prototype.isSecondValue = function () {
        return this.value === this.secondValue;
    };
    SwitcherComponent.prototype.currentValueLabel = function () {
        return this.isFirstValue()
            ? this.firstValueLabel
            : this.secondValueLabel;
    };
    SwitcherComponent.prototype.changeValue = function () {
        this.value = this.isFirstValue()
            ? this.secondValue
            : this.firstValue;
        this.valueChange.emit(this.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitcherComponent.prototype, "firstValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitcherComponent.prototype, "secondValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwitcherComponent.prototype, "firstValueLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwitcherComponent.prototype, "secondValueLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SwitcherComponent.prototype, "vertical", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitcherComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SwitcherComponent.prototype, "valueChange", void 0);
    SwitcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-switcher',
            styles: [__webpack_require__(/*! ./switcher.component.scss */ "./src/app/@theme/components/switcher/switcher.component.scss")],
            template: "\n    <label class=\"switch-label\" [class.vertical]=\"vertical\">\n      <span class=\"first\" [class.active]=\"vertical || isFirstValue()\">\n        {{vertical ? currentValueLabel() : firstValueLabel}}\n      </span>\n\n      <div class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"isSecondValue()\" (change)=\"changeValue()\">\n        <span class=\"slider\"></span>\n      </div>\n\n      <span\n        *ngIf=\"!vertical\"\n        class=\"second\"\n        [class.active]=\"isSecondValue()\"\n      >\n          {{secondValueLabel}}\n      </span>\n    </label>\n  ",
        })
    ], SwitcherComponent);
    return SwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/components/theme-settings/theme-settings.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host h6 {\n  margin-bottom: 0.5rem; }\n.nb-theme-default :host .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n.nb-theme-default :host .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a4abb3; }\n.nb-theme-default :host .settings-row a.selected {\n      color: #40dc7e; }\n.nb-theme-default :host .settings {\n  margin-bottom: 1em; }\n.nb-theme-default :host .switcher {\n  margin-bottom: 1rem; }\n.nb-theme-default :host .switcher /deep/ ngx-switcher .switch-label span {\n    font-size: 1em;\n    font-weight: normal; }\n.nb-theme-default :host .switcher /deep/ ngx-switcher .switch {\n    height: 1.5em;\n    width: 3em; }\n.nb-theme-default :host .switcher /deep/ ngx-switcher .switch .slider::before {\n      height: 1.5em;\n      width: 1.5em; }\n[dir=ltr] .nb-theme-default :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(1.5rem) !important;\n              transform: translateX(1.5rem) !important; }\n[dir=rtl] .nb-theme-default :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-1.5rem) !important;\n              transform: translateX(-1.5rem) !important; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host h6 {\n  margin-bottom: 0.5rem; }\n.nb-theme-cosmic :host .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n.nb-theme-cosmic :host .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a1a1e5; }\n.nb-theme-cosmic :host .settings-row a.selected {\n      color: #00d977; }\n.nb-theme-cosmic :host .settings-row a.selected {\n      color: #00f9a6; }\n.nb-theme-cosmic :host .settings {\n  margin-bottom: 1em; }\n.nb-theme-cosmic :host .switcher {\n  margin-bottom: 1rem; }\n.nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch-label span {\n    font-size: 1em;\n    font-weight: normal; }\n.nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch {\n    height: 1.5em;\n    width: 3em; }\n.nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch .slider::before {\n      height: 1.5em;\n      width: 1.5em; }\n[dir=ltr] .nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(1.5rem) !important;\n              transform: translateX(1.5rem) !important; }\n[dir=rtl] .nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-1.5rem) !important;\n              transform: translateX(-1.5rem) !important; }\n.nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch .slider {\n    background-color: #3d3780; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host h6 {\n  margin-bottom: 0.5rem; }\n.nb-theme-corporate :host .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n.nb-theme-corporate :host .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a4abb3; }\n.nb-theme-corporate :host .settings-row a.selected {\n      color: #5dcfe3; }\n.nb-theme-corporate :host .settings {\n  margin-bottom: 1em; }\n.nb-theme-corporate :host .switcher {\n  margin-bottom: 1rem; }\n.nb-theme-corporate :host .switcher /deep/ ngx-switcher .switch-label span {\n    font-size: 1em;\n    font-weight: normal; }\n.nb-theme-corporate :host .switcher /deep/ ngx-switcher .switch {\n    height: 1.5em;\n    width: 3em; }\n.nb-theme-corporate :host .switcher /deep/ ngx-switcher .switch .slider::before {\n      height: 1.5em;\n      width: 1.5em; }\n[dir=ltr] .nb-theme-corporate :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(1.5rem) !important;\n              transform: translateX(1.5rem) !important; }\n[dir=rtl] .nb-theme-corporate :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-1.5rem) !important;\n              transform: translateX(-1.5rem) !important; }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@theme/components/theme-settings/theme-settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: ThemeSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return ThemeSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/data/state.service */ "./src/app/@core/data/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(stateService) {
        var _this = this;
        this.stateService = stateService;
        this.layouts = [];
        this.sidebars = [];
        this.stateService.getLayoutStates()
            .subscribe(function (layouts) { return _this.layouts = layouts; });
        this.stateService.getSidebarStates()
            .subscribe(function (sidebars) { return _this.sidebars = sidebars; });
    }
    ThemeSettingsComponent.prototype.layoutSelect = function (layout) {
        this.layouts = this.layouts.map(function (l) {
            l.selected = false;
            return l;
        });
        layout.selected = true;
        this.stateService.setLayoutState(layout);
        return false;
    };
    ThemeSettingsComponent.prototype.sidebarSelect = function (sidebars) {
        this.sidebars = this.sidebars.map(function (s) {
            s.selected = false;
            return s;
        });
        sidebars.selected = true;
        this.stateService.setSidebarState(sidebars);
        return false;
    };
    ThemeSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-theme-settings',
            styles: [__webpack_require__(/*! ./theme-settings.component.scss */ "./src/app/@theme/components/theme-settings/theme-settings.component.scss")],
            template: "\n    <h6>LAYOUTS</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let layout of layouts\"\n         href=\"#\"\n         [class.selected]=\"layout.selected\"\n         [attr.title]=\"layout.name\"\n         (click)=\"layoutSelect(layout)\">\n        <i [attr.class]=\"layout.icon\"></i>\n      </a>\n    </div>\n    <h6>SIDEBAR</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let sidebar of sidebars\"\n         href=\"#\"\n         [class.selected]=\"sidebar.selected\"\n         [attr.title]=\"sidebar.name\"\n         (click)=\"sidebarSelect(sidebar)\">\n        <i [attr.class]=\"sidebar.icon\"></i>\n      </a>\n    </div>\n    <div class=\"switcher\">\n      <ngx-layout-direction-switcher [vertical]=\"true\"></ngx-layout-direction-switcher>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [_core_data_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], ThemeSettingsComponent);
    return ThemeSettingsComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/components/theme-switcher/theme-switcher.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"themes-switcher\"\n     [nbPopover]=\"switcherListComponent\"\n     nbPopoverPlacement=\"bottom\"\n     [nbPopoverContext]=\"{popover: popover}\">\n  <i class=\"nb-drops\"></i>\n  <span *ngIf=\"showTitle\">Themes</span>\n</div>\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/components/theme-switcher/theme-switcher.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host .themes-switcher {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1.25rem;\n  padding: 0.8rem 1.25rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  background-color: #ebeff5;\n  border-radius: 0.375rem; }\n.nb-theme-default :host .themes-switcher:hover {\n    background-color: #f5f7fa; }\n.nb-theme-default :host .themes-switcher span {\n    margin: 0 1.2rem; }\n.nb-theme-default :host .themes-switcher i {\n    color: #8a7fff;\n    font-size: 1.8rem;\n    border-radius: 50%;\n    position: relative;\n    color: #40dc7e; }\n.nb-theme-default :host .themes-switcher i::before {\n      background: -webkit-linear-gradient(#01dbb5, #0bbb79);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host .themes-switcher {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1.25rem;\n  padding: 0.8rem 1.25rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  background-color: #4e41a5;\n  border-radius: 0.5rem; }\n.nb-theme-cosmic :host .themes-switcher:hover {\n    background-color: #675cb2; }\n.nb-theme-cosmic :host .themes-switcher span {\n    margin: 0 1.2rem; }\n.nb-theme-cosmic :host .themes-switcher i {\n    color: #7659ff;\n    font-size: 1.8rem;\n    border-radius: 50%;\n    position: relative; }\n.nb-theme-cosmic :host .themes-switcher i::before {\n      background: -webkit-linear-gradient(#a258fe, #7958fa);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host .themes-switcher {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1.25rem;\n  padding: 0.8rem 1.25rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  background-color: #2b2d34;\n  border-radius: 0.17rem; }\n.nb-theme-corporate :host .themes-switcher:hover {\n    background-color: #494a50; }\n.nb-theme-corporate :host .themes-switcher span {\n    margin: 0 1.2rem; }\n.nb-theme-corporate :host .themes-switcher i {\n    color: #73a1ff;\n    font-size: 1.8rem;\n    border-radius: 50%;\n    position: relative;\n    color: #a4abb3; }\n.nb-theme-corporate :host .themes-switcher i::before {\n      background: -webkit-linear-gradient(#e9e8eb, #a7a2be);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent; }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@theme/components/theme-switcher/theme-switcher.component.ts ***!
  \******************************************************************************/
/*! exports provided: ThemeSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherComponent", function() { return ThemeSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _themes_switcher_list_themes_switcher_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes-switcher-list/themes-switcher-list.component */ "./src/app/@theme/components/theme-switcher/themes-switcher-list/themes-switcher-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent() {
        this.showTitle = true;
        this.switcherListComponent = _themes_switcher_list_themes_switcher_list_component__WEBPACK_IMPORTED_MODULE_2__["ThemeSwitcherListComponent"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPopoverDirective"]),
        __metadata("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPopoverDirective"])
    ], ThemeSwitcherComponent.prototype, "popover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ThemeSwitcherComponent.prototype, "showTitle", void 0);
    ThemeSwitcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-theme-switcher',
            template: __webpack_require__(/*! ./theme-switcher.component.html */ "./src/app/@theme/components/theme-switcher/theme-switcher.component.html"),
            styles: [__webpack_require__(/*! ./theme-switcher.component.scss */ "./src/app/@theme/components/theme-switcher/theme-switcher.component.scss")],
        })
    ], ThemeSwitcherComponent);
    return ThemeSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/themes-switcher-list/theme-switcher-list.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/@theme/components/theme-switcher/themes-switcher-list/theme-switcher-list.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host /deep/ .themes-switcher-list {\n  padding: 1rem 2rem 1.25rem 0.5rem;\n  margin: 0; }\n[dir=ltr] .nb-theme-default :host /deep/ .themes-switcher-list {\n    text-align: start; }\n[dir=rtl] .nb-theme-default :host /deep/ .themes-switcher-list {\n    text-align: end; }\n.nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item {\n    list-style: none;\n    cursor: pointer; }\n.nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item:hover span {\n      opacity: 0.5; }\n.nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item i {\n      font-size: 2rem; }\n.nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-default {\n        color: #0bbb79;\n        background: -webkit-linear-gradient(#01dbb5, #0bbb79); }\n.nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-cosmic {\n        color: #7958fa;\n        background: -webkit-linear-gradient(#a258fe, #7958fa); }\n.nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-corporate {\n        color: #a7a2be;\n        background: -webkit-linear-gradient(#e9e8eb, #a7a2be); }\n.nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-default, .nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-cosmic, .nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-corporate {\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent; }\n.nb-theme-default :host /deep/ .themes-switcher-list .themes-switcher-item span {\n      font-weight: 300;\n      vertical-align: super;\n      padding-left: 1rem;\n      color: #2a2a2a; }\n@media (max-width: 575.98px) {\n  .nb-theme-default :host /deep/ .themes-switcher-list {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host /deep/ .themes-switcher-list {\n  padding: 1rem 2rem 1.25rem 0.5rem;\n  margin: 0; }\n[dir=ltr] .nb-theme-cosmic :host /deep/ .themes-switcher-list {\n    text-align: start; }\n[dir=rtl] .nb-theme-cosmic :host /deep/ .themes-switcher-list {\n    text-align: end; }\n.nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item {\n    list-style: none;\n    cursor: pointer; }\n.nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item:hover span {\n      opacity: 0.5; }\n.nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item i {\n      font-size: 2rem; }\n.nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-default {\n        color: #0bbb79;\n        background: -webkit-linear-gradient(#01dbb5, #0bbb79); }\n.nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-cosmic {\n        color: #7958fa;\n        background: -webkit-linear-gradient(#a258fe, #7958fa); }\n.nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-corporate {\n        color: #a7a2be;\n        background: -webkit-linear-gradient(#e9e8eb, #a7a2be); }\n.nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-default, .nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-cosmic, .nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-corporate {\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent; }\n.nb-theme-cosmic :host /deep/ .themes-switcher-list .themes-switcher-item span {\n      font-weight: 300;\n      vertical-align: super;\n      padding-left: 1rem;\n      color: #ffffff; }\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic :host /deep/ .themes-switcher-list {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host /deep/ .themes-switcher-list {\n  padding: 1rem 2rem 1.25rem 0.5rem;\n  margin: 0; }\n[dir=ltr] .nb-theme-corporate :host /deep/ .themes-switcher-list {\n    text-align: start; }\n[dir=rtl] .nb-theme-corporate :host /deep/ .themes-switcher-list {\n    text-align: end; }\n.nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item {\n    list-style: none;\n    cursor: pointer; }\n.nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item:hover span {\n      opacity: 0.5; }\n.nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item i {\n      font-size: 2rem; }\n.nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-default {\n        color: #0bbb79;\n        background: -webkit-linear-gradient(#01dbb5, #0bbb79); }\n.nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-cosmic {\n        color: #7958fa;\n        background: -webkit-linear-gradient(#a258fe, #7958fa); }\n.nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-corporate {\n        color: #a7a2be;\n        background: -webkit-linear-gradient(#e9e8eb, #a7a2be); }\n.nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-default, .nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-cosmic, .nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item i.drop-icon-corporate {\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent; }\n.nb-theme-corporate :host /deep/ .themes-switcher-list .themes-switcher-item span {\n      font-weight: 300;\n      vertical-align: super;\n      padding-left: 1rem;\n      color: #181818; }\n@media (max-width: 575.98px) {\n  .nb-theme-corporate :host /deep/ .themes-switcher-list {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/themes-switcher-list/themes-switcher-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/@theme/components/theme-switcher/themes-switcher-list/themes-switcher-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ThemeSwitcherListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherListComponent", function() { return ThemeSwitcherListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeSwitcherListComponent = /** @class */ (function () {
    function ThemeSwitcherListComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
        this.themes = [
            {
                title: 'Light',
                key: 'default',
            },
            {
                title: 'Cosmic',
                key: 'cosmic',
            },
            {
                title: 'Corporate',
                key: 'corporate',
            },
        ];
    }
    ThemeSwitcherListComponent.prototype.onToggleTheme = function (themeKey) {
        this.themeService.changeTheme(themeKey);
        this.analyticsService.trackEvent('switchTheme');
        this.popover.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPopoverDirective"])
    ], ThemeSwitcherListComponent.prototype, "popover", void 0);
    ThemeSwitcherListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-theme-switcher-list',
            template: "\n    <ul class=\"themes-switcher-list\">\n      <li class=\"themes-switcher-item\"\n          *ngFor=\"let theme of themes\"\n          (click)=\"onToggleTheme(theme.key)\">\n        <i class=\"nb-drop\" [ngClass]=\"'drop-icon-' + theme.key\"></i>\n        <span>{{ theme.title }}</span>\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./theme-switcher-list.component.scss */ "./src/app/@theme/components/theme-switcher/themes-switcher-list/theme-switcher-list.component.scss")],
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"],
            _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"]])
    ], ThemeSwitcherListComponent);
    return ThemeSwitcherListComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/tiny-mce/tiny-mce.component.ts ***!
  \******************************************************************/
/*! exports provided: TinyMCEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return TinyMCEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TinyMCEComponent.prototype, "editorKeyup", void 0);
    TinyMCEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tiny-mce',
            template: '',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TinyMCEComponent);
    return TinyMCEComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/@theme/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: OneColumnLayoutComponent, TwoColumnsLayoutComponent, ThreeColumnsLayoutComponent, SampleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-column/one-column.layout */ "./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function() { return _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__["OneColumnLayoutComponent"]; });

/* harmony import */ var _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-columns/two-columns.layout */ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function() { return _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__["TwoColumnsLayoutComponent"]; });

/* harmony import */ var _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-columns/three-columns.layout */ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function() { return _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__["ThreeColumnsLayoutComponent"]; });

/* harmony import */ var _sample_sample_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample/sample.layout */ "./src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SampleLayoutComponent", function() { return _sample_sample_layout__WEBPACK_IMPORTED_MODULE_3__["SampleLayoutComponent"]; });







/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.scss":
/*!******************************************************************!*\
  !*** ./src/app/@theme/layouts/one-column/one-column.layout.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-default :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.375rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.375rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-default :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.5rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-cosmic :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  margin-top: 0;\n  background: transparent; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border: 1px solid #cdd5dc;\n    height: calc(100vh - 4.75rem) !important; }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.17rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable {\n    padding-top: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable .menu-item:first-child {\n      border-top: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    border-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-corporate :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-corporate :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-corporate :host .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.ts":
/*!****************************************************************!*\
  !*** ./src/app/@theme/layouts/one-column/one-column.layout.ts ***!
  \****************************************************************/
/*! exports provided: OneColumnLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function() { return OneColumnLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/takeWhile */ "./node_modules/rxjs-compat/_esm5/operators/takeWhile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO: move layouts into the framework
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(Object(rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    OneColumnLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    OneColumnLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-one-column-layout',
            styles: [__webpack_require__(/*! ./one-column.layout.scss */ "./src/app/@theme/layouts/one-column/one-column.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <nb-sidebar-header *ngIf=\"currentTheme !== 'corporate'\">\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], OneColumnLayoutComponent);
    return OneColumnLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.scss":
/*!**********************************************************!*\
  !*** ./src/app/@theme/layouts/sample/sample.layout.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-default :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.375rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.375rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-default :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.5rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-cosmic :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  margin-top: 0;\n  background: transparent; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border: 1px solid #cdd5dc;\n    height: calc(100vh - 4.75rem) !important; }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.17rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable {\n    padding-top: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable .menu-item:first-child {\n      border-top: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    border-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-corporate :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-corporate :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-corporate :host .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/layouts/sample/sample.layout.ts ***!
  \********************************************************/
/*! exports provided: SampleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleLayoutComponent", function() { return SampleLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_data_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/state.service */ "./src/app/@core/data/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.alive = true;
        this.stateService.onLayoutState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (layout) { return _this.layout = layout; });
        this.stateService.onSidebarState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuService.onItemSelect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.themeService.onMediaQueryChange()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(20))
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
        this.themeService.getJsTheme()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SampleLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-sample-layout',
            styles: [__webpack_require__(/*! ./sample.layout.scss */ "./src/app/@theme/layouts/sample/sample.layout.scss")],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'start' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [end]=\"sidebar.id === 'end'\">\n\n        <nb-sidebar-header *ngIf=\"currentTheme !== 'corporate'\">\n          <a href=\"#\" class=\"btn btn-hero-info main-btn\">\n            <i class=\"ion ion-home\"></i> <span> \u4E3B \u9875 </span>\n          </a>\n        </nb-sidebar-header>\n\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column start class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [end]=\"sidebar.id !== 'end'\">\n        <ngx-theme-settings></ngx-theme-settings>\n      </nb-sidebar>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [_core_data_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMediaBreakpointsService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.scss":
/*!************************************************************************!*\
  !*** ./src/app/@theme/layouts/three-columns/three-columns.layout.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-default :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.375rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.375rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-default :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.5rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-cosmic :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  margin-top: 0;\n  background: transparent; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border: 1px solid #cdd5dc;\n    height: calc(100vh - 4.75rem) !important; }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.17rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable {\n    padding-top: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable .menu-item:first-child {\n      border-top: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    border-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-corporate :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-corporate :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-corporate :host .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@theme/layouts/three-columns/three-columns.layout.ts ***!
  \**********************************************************************/
/*! exports provided: ThreeColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function() { return ThreeColumnsLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/takeWhile */ "./node_modules/rxjs-compat/_esm5/operators/takeWhile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO: move layouts into the framework
var ThreeColumnsLayoutComponent = /** @class */ (function () {
    function ThreeColumnsLayoutComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(Object(rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    ThreeColumnsLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ThreeColumnsLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-three-columns-layout',
            styles: [__webpack_require__(/*! ./three-columns.layout.scss */ "./src/app/@theme/layouts/three-columns/three-columns.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header *ngIf=\"currentTheme !== 'corporate'\">\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ThreeColumnsLayoutComponent);
    return ThreeColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.scss":
/*!********************************************************************!*\
  !*** ./src/app/@theme/layouts/two-columns/two-columns.layout.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-default :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.375rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.375rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-default :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.5rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-cosmic :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  margin-top: 0;\n  background: transparent; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border: 1px solid #cdd5dc;\n    height: calc(100vh - 4.75rem) !important; }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.17rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable {\n    padding-top: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable .menu-item:first-child {\n      border-top: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    border-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-corporate :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-corporate :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-corporate :host .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/layouts/two-columns/two-columns.layout.ts ***!
  \******************************************************************/
/*! exports provided: TwoColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function() { return TwoColumnsLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/takeWhile */ "./node_modules/rxjs-compat/_esm5/operators/takeWhile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = /** @class */ (function () {
    function TwoColumnsLayoutComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(Object(rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TwoColumnsLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TwoColumnsLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-two-columns-layout',
            styles: [__webpack_require__(/*! ./two-columns.layout.scss */ "./src/app/@theme/layouts/two-columns/two-columns.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header *ngIf=\"currentTheme !== 'corporate'\">\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], TwoColumnsLayoutComponent);
    return TwoColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/@theme/pipes/index.ts ***!
  \***************************************/
/*! exports provided: CapitalizePipe, PluralPipe, RoundPipe, TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__["CapitalizePipe"]; });

/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plural.pipe */ "./src/app/@theme/pipes/plural.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return _plural_pipe__WEBPACK_IMPORTED_MODULE_1__["PluralPipe"]; });

/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.pipe */ "./src/app/@theme/pipes/round.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return _round_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundPipe"]; });

/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing.pipe */ "./src/app/@theme/pipes/timing.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return _timing_pipe__WEBPACK_IMPORTED_MODULE_3__["TimingPipe"]; });







/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/plural.pipe.ts ***!
  \*********************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/pipes/round.pipe.ts ***!
  \********************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/timing.pipe.ts ***!
  \*********************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/@theme/styles/theme.corporate.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/styles/theme.corporate.ts ***!
  \**************************************************/
/*! exports provided: CORPORATE_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORPORATE_THEME", function() { return CORPORATE_THEME; });
var CORPORATE_THEME = {
    name: 'corporate',
    base: 'default',
    variables: {
        temperature: [
            '#ffa36b',
            '#ffa36b',
            '#ff9e7a',
            '#ff9888',
            '#ff8ea0',
        ],
        solar: {
            gradientLeft: '#ff8ea0',
            gradientRight: '#ffa36b',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#eef2f5',
            tooltipBorderColor: '#eef2f5',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: '400',
            lineBg: '#c0c8d1',
            lineShadowBlur: '0',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#74a2ff',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ffffff',
            gradTo: '#ffffff',
        },
        electricity: {
            tooltipBg: '#edf0f4',
            tooltipLineColor: '#bdc4cd',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#73a1ff',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#bdc4cd',
            lineGradTo: '#c0c8d1',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(255, 255, 255, 0)',
            areaGradTo: 'rgba(255, 255, 255, 0)',
            shadowLineDarkBg: 'rgba(255, 255, 255, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
  \***********************************************/
/*! exports provided: COSMIC_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/styles/theme.default.ts ***!
  \************************************************/
/*! exports provided: DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes */ "./src/app/@theme/pipes/index.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts */ "./src/app/@theme/layouts/index.ts");
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/theme.default */ "./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/theme.cosmic */ "./src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/theme.corporate */ "./src/app/@theme/styles/theme.corporate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var BASE_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]];
var NB_MODULES = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabsetModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRouteTabsetModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSearchModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbPopoverModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
    _nebular_security__WEBPACK_IMPORTED_MODULE_5__["NbSecurityModule"],
];
var COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_6__["SwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["LayoutDirectionSwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["ThemeSwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["ThemeSwitcherListComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TinyMCEComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["OneColumnLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["SampleLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["ThreeColumnsLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["TwoColumnsLayoutComponent"],
];
var ENTRY_COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_6__["ThemeSwitcherListComponent"],
];
var PIPES = [
    _pipes__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["PluralPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["RoundPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
];
var NB_THEME_PROVIDERS = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({
    name: 'default',
}, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_10__["COSMIC_THEME"], _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_11__["CORPORATE_THEME"]]).providers.concat(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"].forRoot().providers);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    ThemeModule = ThemeModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: BASE_MODULES.concat(NB_MODULES),
            exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES),
            declarations: COMPONENTS.concat(PIPES),
            entryComponents: ENTRY_COMPONENTS.slice(),
        })
    ], ThemeModule);
    return ThemeModule;
    var ThemeModule_1;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    {
        path: 'auth',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthComponent"],
        children: [
            {
                path: '',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"],
            },
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            },
        ],
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var AppComponent = /** @class */ (function () {
    function AppComponent(analytics) {
        this.analytics = analytics;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.trackPageViews();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-app',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [_core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig, urljoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urljoin", function() { return urljoin; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppConfig = /** @class */ (function () {
    function AppConfig(http) {
        this.http = http;
    }
    AppConfig_1 = AppConfig;
    AppConfig.prototype.getTransactionConfig = function () {
        return this.transactionConfig;
    };
    AppConfig.prototype.loadConfig = function () {
        var _this = this;
        // TransactionConfig
        this.http.get(AppConfig_1.CONFIG_JSON).subscribe(function (data) {
            var config = {
                // Basic
                gitlab: String(data['gitlab']) || '',
                projectId: String(data['project_id']) || '',
                branch: data['branch'] || '',
                // Oauth
                privateToken: data['private_token'] || '',
                appId: data['appid'] || '',
                appSecret: data['appsecret'] || '',
                callbackUrl: data['callback_url'] || '',
            };
            // Get the access_token by this url
            config.oauthAuthorize = urljoin(config.gitlab, 'oauth/authorize', '?client_id=' + config.appId, '&client_secret=' + config.appSecret, '&redirect_uri=' + config.callbackUrl, '&response_type=token');
            // APIs. All APIs needs access_token
            config.api = urljoin(config.gitlab, data['api']['version']);
            config.apiUser = urljoin(config.api, data['api']['user']);
            config.apiFiles = urljoin(config.api, 'projects', config.projectId, data['api']['files']);
            config.apiTree = urljoin(config.api, 'projects', config.projectId, data['api']['tree']);
            // Defaults
            config.defaultConfig = data['defaultConfig'];
            config.defaultRepository = data['defaultRepository'];
            // Result
            config.projectResultId = String(data['project_result_id']) || '';
            config.apiResultFiles = urljoin(config.api, 'projects', config.projectResultId, data['api']['files']);
            config.apiResultTree = urljoin(config.api, 'projects', config.projectResultId, data['api']['tree']);
            _this.transactionConfig = config;
            console.info('AppConfig loaded');
        });
    };
    AppConfig.CONFIG_JSON = 'assets/transaction.config.json';
    AppConfig = AppConfig_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AppConfig);
    return AppConfig;
    var AppConfig_1;
}());

;
function urljoin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var strArray = [].slice.call(args);
    var resultArray = [];
    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
        var first = strArray.shift();
        strArray[0] = first + strArray[0];
    }
    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
        strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    }
    else {
        strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }
    for (var i = 0; i < strArray.length; i++) {
        var component = strArray[i];
        if (typeof component !== 'string') {
            throw new TypeError('Url must be a string. Received ' + component);
        }
        if (component === '') {
            continue;
        }
        if (i > 0) {
            // Removing the starting slashes for each component but the first.
            component = component.replace(/^[\/]+/, '');
        }
        if (i < strArray.length - 1) {
            // Removing the ending slashes for each component but the last.
            component = component.replace(/[\/]+$/, '');
        }
        else {
            // For the last component we will combine multiple slashes to a single one.
            component = component.replace(/[\/]+$/, '/');
        }
        resultArray.push(component);
    }
    var str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.
    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');
    // replace ? in parameters with &
    var parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
    return str;
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initConfig", function() { return initConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@core/core.module */ "./src/app/@core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts");
/* harmony import */ var _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction/transaction.module */ "./src/app/transaction/transaction.module.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./global.state */ "./src/app/global.state.ts");
/* harmony import */ var _transaction_transaction_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transaction/transaction.service */ "./src/app/transaction/transaction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
















// Application wide providers
var APP_PROVIDERS = [
    _auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
    _app_config__WEBPACK_IMPORTED_MODULE_13__["AppConfig"],
    _global_state__WEBPACK_IMPORTED_MODULE_14__["GlobalState"],
    _transaction_transaction_service__WEBPACK_IMPORTED_MODULE_15__["TransactionService"],
];
function initConfig(config) {
    return function () { return config.loadConfig(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _pages_login_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"],
                _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_12__["TransactionModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"], useFactory: initConfig, deps: [_app_config__WEBPACK_IMPORTED_MODULE_13__["AppConfig"]], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"], useValue: '/' },
                APP_PROVIDERS,
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mobile) {
            // App using private token
            return true;
        }
        if (localStorage.getItem('access_token')) {
            // Authorized so return true
            return true;
        }
        var accessToken = this.getAccessToken();
        if (accessToken && accessToken.length > 0) {
            // Already get the access_token
            localStorage.setItem('access_token', accessToken);
            this.router.navigate([state.url]);
            return true;
        }
        // Not authorized in so redirect to login page with the return url
        var extras = {
            queryParams: { return_url: state.url },
        };
        this.router.navigate(['/auth/login'], extras);
        return false;
    };
    AuthGuard.prototype.getAccessToken = function () {
        // See https://docs.gitlab.com/ce/api/README.html to retrieve access_token
        var hash = window.location.hash;
        if (hash && hash.length > 0) {
            var params = new URLSearchParams(hash.replace('#', '?'));
            return params.get('access_token');
        }
        return '';
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/global.state.ts":
/*!*********************************!*\
  !*** ./src/app/global.state.ts ***!
  \*********************************/
/*! exports provided: GlobalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalState", function() { return GlobalState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalState = /** @class */ (function () {
    function GlobalState() {
        var _this = this;
        this._data = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    GlobalState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event],
            });
        }
    };
    GlobalState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    GlobalState.prototype.unsubscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        var index = subscribers.indexOf(callback, 0);
        if (index > -1) {
            subscribers.splice(index, 1);
        }
        this._subscriptions.set(event, subscribers);
    };
    GlobalState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    GlobalState = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalState);
    return GlobalState;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div>\n    <p>Ads for sale, <a href=\"mailto:duanqz@gmail.com\"><i class=\"fa fa-envelope-o\"></i> duanqz</a></p>\n</div>\n-->\n\n<div class=\"flex-centered\">\n    <h3 class=\"title\"> Please authorize with\n        <a href=\"http://gitlab.meizu.com\">gitlab</a>\n    </h3>\n\n    <button class=\"btn btn-block btn-success\" (click)=\"authorize()\"> Authorize </button>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-centered {\n  margin: auto; }\n\n.title {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transaction_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transaction/transaction.service */ "./src/app/transaction/transaction.service.ts");
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
    function LoginComponent(transactionService) {
        this.transactionService = transactionService;
    }
    LoginComponent.prototype.authorize = function () {
        window.location.href = this.transactionService.getOauthAuthorizeUrl();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-login',
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")],
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
        }),
        __metadata("design:paramtypes", [_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../transaction/transaction.module */ "./src/app/transaction/transaction.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_3__["TransactionModule"],
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            ],
            providers: [],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.module.ts":
/*!***************************************************!*\
  !*** ./src/app/transaction/transaction.module.ts ***!
  \***************************************************/
/*! exports provided: TransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TransactionModule = /** @class */ (function () {
    function TransactionModule() {
    }
    TransactionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]],
            providers: [],
        })
    ], TransactionModule);
    return TransactionModule;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.service.ts":
/*!****************************************************!*\
  !*** ./src/app/transaction/transaction.service.ts ***!
  \****************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionService = /** @class */ (function () {
    function TransactionService(config, http) {
        this.config = config;
        this.http = http;
    }
    TransactionService.prototype.getDefaultConfig = function () {
        return this.config.getTransactionConfig().defaultConfig;
    };
    TransactionService.prototype.getDefaultRepository = function () {
        return this.config.getTransactionConfig().defaultRepository;
    };
    TransactionService.prototype.getOauthAuthorizeUrl = function () {
        return this.config.getTransactionConfig().oauthAuthorize;
    };
    TransactionService.prototype.getPrivateToken = function () {
        return this.config.getTransactionConfig().privateToken;
    };
    TransactionService.prototype.getHttpOption = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mobile) {
            var privateToken = this.config.getTransactionConfig().privateToken;
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Accept', 'application/json')
                .set('Private-Token', privateToken);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            return { headers: httpHeaders, params: httpParams };
        }
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mobile) {
            var accessToken = localStorage.getItem('access_token');
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Accept', 'application/json');
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('access_token', accessToken);
            return { headers: httpHeaders, params: httpParams };
        }
    };
    TransactionService.prototype.getUser = function () {
        return this.http.get(this.config.getTransactionConfig().apiUser, this.getHttpOption());
    };
    TransactionService.prototype.getConfigTree = function () {
        var option = this.getHttpOption();
        option.params = option.params.set('path', 'config');
        return this.http.get(this.config.getTransactionConfig().apiTree, option);
    };
    TransactionService.prototype.getFile = function (filepath) {
        var option = this.getHttpOption();
        option.params = option.params.set('ref', this.config.getTransactionConfig().branch);
        var url = Object(_app_config__WEBPACK_IMPORTED_MODULE_2__["urljoin"])(this.config.getTransactionConfig().apiFiles, encodeURIComponent(filepath), 'raw');
        return this.http.get(url, option);
    };
    TransactionService.prototype.getResultTree = function () {
        return this.http.get(this.config.getTransactionConfig().apiResultTree, this.getHttpOption());
    };
    TransactionService.prototype.getResultFile = function (filepath) {
        var option = this.getHttpOption();
        option.params = option.params.set('ref', this.config.getTransactionConfig().branch);
        var url = Object(_app_config__WEBPACK_IMPORTED_MODULE_2__["urljoin"])(this.config.getTransactionConfig().apiResultFiles, encodeURIComponent(filepath), 'raw');
        return this.http.get(url, option);
    };
    TransactionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionService);
    return TransactionService;
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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    mobile: false,
    production: false,
};


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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




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

module.exports = __webpack_require__(/*! /Users/duanqz/Code/ngx-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map