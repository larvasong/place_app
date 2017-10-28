webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		162
	],
	"../pages/login/login.module": [
		85
	],
	"../pages/my-follow/my-follow.module": [
		88
	],
	"../pages/my-info/my-info.module": [
		87
	],
	"../pages/my-like/my-like.module": [
		90
	],
	"../pages/place-info/place-info.module": [
		178
	],
	"../pages/register/register.module": [
		174
	],
	"../pages/search/search.module": [
		168
	],
	"../pages/setting/setting.module": [
		177
	],
	"../pages/user-info/user-info.module": [
		89
	],
	"../pages/write/write.module": [
		170
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_place_place_module__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// component

var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]),
            __WEBPACK_IMPORTED_MODULE_3__components_place_place_module__["a" /* PlaceModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_place_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Home = (function () {
    function Home(navCtrl, platform, placeService, file) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.placeService = placeService;
        this.file = file;
        this.placeCollection = [];
        console.log("home constructor");
        // this.initPlaceCollection();
    }
    Home.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HomePage');
        this.platform.ready().then(function () {
            _this.getPlaceCollection();
        });
    };
    // initPlaceCollection() {
    //   this.placeService.init().subscribe(isSet => {
    //     if(isSet){
    //       this.getPlaceCollection();
    //     }
    //   });
    // }
    Home.prototype.getPlaceCollection = function () {
        var _this = this;
        this.placeService.searchPlaceCollection(this.search).subscribe(function (collection) {
            console.log("getPlaceCollection!!!");
            _this.placeCollection = collection;
        });
    };
    Home.prototype.trackByFunction = function (index, item) {
        return item.id;
    };
    return Home;
}());
Home = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="cards-bg">\n  <place [item]="item"\n    *ngFor="let item of placeCollection ; trackBy:trackByFunction">\n  </place>\n</ion-content>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_place_service__["a" /* PlaceService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
], Home);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserInfo = (function () {
    function UserInfo(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.item = navParams.data.item;
        console.dir(this.item);
    }
    UserInfo.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserDetailPage');
    };
    UserInfo.prototype.chgBirthDay = function () {
        console.dir(this.item);
    };
    return UserInfo;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* UserModel */])
], UserInfo.prototype, "item", void 0);
UserInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-info',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/user-info/user-info.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>person info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <img [src]="item.avatar"/>\n    </ion-item>\n\n    <ion-item>\n      <!-- <ion-label floating>User Name</ion-label> -->\n      {{item.name}}\n    </ion-item>\n\n    <ion-item>\n      <!-- <ion-label floating>User Description</ion-label> -->\n      {{item.desc}}\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Birth Day</ion-label>\n      <ion-datetime (change)="chgBirthDay()" displayFormat="YYYY-MM-DD" [(ngModel)]="item.birthDay"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="item.gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'logo-twitter\' item-left style="color: #55acee"></ion-icon>\n      Followers\n      <ion-badge item-right>260k</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/user-info/user-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], UserInfo);

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */]
        ]
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Search = (function () {
    function Search(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Search.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Search');
    };
    return Search;
}());
Search = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/search/search.html"*/'<!--\n  Generated template for the Search page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\ndkdkajdlkfja;ldsjfl\n</ion-content>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], Search);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteModule", function() { return WriteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__write__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WriteModule = (function () {
    function WriteModule() {
    }
    return WriteModule;
}());
WriteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__write__["a" /* Write */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__write__["a" /* Write */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__write__["a" /* Write */]
        ]
    })
], WriteModule);

//# sourceMappingURL=write.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Write; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_place__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_place_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Camera } from '@ionic-native/camera';


/**
 * Generated class for the Write page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Write = (function () {
    function Write(navCtrl, navParams, placeservice, platform, zone, 
        // private camera: Camera,
        file, transfer, filePath) {
        // Geolocation.getCurrentPosition().then((resp) => {
        //  // resp.coords.latitude
        //  // resp.coords.longitude
        //  console.log(JSON.stringify(resp));
        // }).catch((error) => {
        //   console.log('Error getting location', error);
        // });
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeservice = placeservice;
        this.platform = platform;
        this.zone = zone;
        this.file = file;
        this.transfer = transfer;
        this.filePath = filePath;
        this.placeItem = new __WEBPACK_IMPORTED_MODULE_5__models_place__["a" /* PlaceModel */]();
        // let watch = Geolocation.watchPosition();
        // watch.subscribe((data) => {
        //  // data can be a set of coordinates, or an error (if an error occurred).
        //  // data.coords.latitude
        //  // data.coords.longitude
        //  alert("watch : " + data);
        // });
    }
    Write.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WritePage');
    };
    // public createDirectory() {
    //   this.file.checkDir(this.file.dataDirectory, 'mydir')
    //   .then(_ => {
    //     console.log('Directory exists', _);
    //
    //   })
    //   .catch(err => {
    //     console.log('Directory doesnt exist', err);
    //     this.file.createDir(this.file.dataDirectory, 'mydir', false);
    //   } );
    // }
    //
    // public getFileList() {
    //   this.file.listDir(this.file.dataDirectory, 'mydir')
    //   .then((list) => {
    //     console.dir(list);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // }
    Write.prototype.createFileName = function () {
        var date = new Date(), name = date.getTime(), newFileName = name + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    Write.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.placeItem.images = _this.file.dataDirectory + newFileName;
        }, function (error) {
            console.log("error");
        });
    };
    Write.prototype.save = function () {
        var _this = this;
        this.copyFileToLocalDir(this.correctPath, this.currentName, this.createFileName());
        this.placeservice.save(this.placeItem).subscribe(function (value) {
            // todo init variables
            // this.zone.run(()=>{
            // });
            // alert(value);
            if (value) {
                // this.refresh();
                // this.placeItem.images = null;
                _this.placeItem = new __WEBPACK_IMPORTED_MODULE_5__models_place__["a" /* PlaceModel */]();
                // alert(this.placeItem.images);
                _this.correctPath = "";
                _this.currentName = "";
            }
        });
    };
    // get picture from gallery or camera
    Write.prototype.getPictureImage = function (source) {
        var _this = this;
        var PictureSourceType, DestinationType;
        if (source == "gallery") {
            PictureSourceType = navigator.camera.PictureSourceType.PHOTOLIBRARY;
            DestinationType = navigator.camera.DestinationType.FILE_URI;
        }
        else if (source == "camera") {
            PictureSourceType = navigator.camera.PictureSourceType.CAMERA;
            DestinationType = navigator.camera.DestinationType.FILE_URI;
        }
        var cameraConfig = {
            quality: 50,
            destinationType: DestinationType,
            sourceType: PictureSourceType,
            encodingType: navigator.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true,
            correctOrientation: true,
        };
        navigator.camera.getPicture(function (result) {
            // this.camera.getPicture(cameraConfig).then((result) => {
            var thisResult = JSON.parse(result);
            var metadata = JSON.parse(thisResult.json_metadata);
            var imagePath = thisResult.filename;
            var latitude, longitude;
            if (thisResult.json_metadata == "{}") {
                return;
            }
            if (_this.platform.is('ios')) {
                var lastIdx = imagePath.lastIndexOf('/') + 1;
                _this.correctPath = imagePath.substr(0, lastIdx);
                _this.currentName = imagePath.substr(lastIdx);
                _this.placeItem.images = _this.correctPath + _this.currentName;
            }
            else if (_this.platform.is('android')) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var lastIdx = filePath.lastIndexOf('/') + 1;
                    _this.correctPath = filePath.substr(0, lastIdx);
                    _this.currentName = filePath.substring(lastIdx, filePath.lastIndexOf('?'));
                    // if (filePath.lastIndexOf('?') > 0) {
                    //   this.currentName = filePath.substring(lastIdx, filePath.lastIndexOf('?'));
                    // } else {
                    //   this.currentName = filePath.substr(lastIdx);
                    // }
                    _this.placeItem.images = _this.correctPath + _this.currentName;
                });
            }
            // get gps coordinates
            if (_this.platform.is('ios')) {
                console.log('ios');
                console.log("latitude=", metadata.GPS.Latitude);
                console.log("longitude=", metadata.GPS.Longitude);
                console.log("altitude=", metadata.GPS.Altitude);
                console.log("dateStamp=", metadata.GPS.DateStamp);
                console.log("timeStamp=", metadata.GPS.TimeStamp);
                latitude = metadata.GPS.Latitude;
                longitude = metadata.GPS.Longitude;
            }
            else if (_this.platform.is('android')) {
                console.log('android');
                console.log("latitude=" + metadata.gpsLatitude);
                console.log("longitude=" + metadata.gpsLongitude);
                console.log("altitude=" + metadata.gpsAltitude);
                console.log("dateStamp=" + metadata.gpsDateStamp);
                console.log("timeStamp=" + metadata.gpsTimeStamp);
                latitude = metadata.gpsLatitude;
                longitude = metadata.gpsLongitude;
            }
            if (latitude.indexOf(",") > 0) {
                latitude = _this.gpsConvert(latitude);
            }
            if (longitude.indexOf(",") > 0) {
                longitude = _this.gpsConvert(longitude);
            }
            _this.placeItem.latitude = latitude;
            _this.placeItem.longitude = longitude;
        }, function (errorMessage) {
            console.log("fail==", errorMessage);
        }, cameraConfig);
    };
    // gps convert 도분초 -> 도
    Write.prototype.gpsConvert = function (coord) {
        var rslt = coord.split(",");
        var deg = parseFloat(rslt[0]); // 도
        var bun = parseFloat(rslt[1]); // 분
        var cho = parseFloat(rslt[2]); // 초
        cho = parseFloat((cho / 60).toFixed(3));
        bun = parseFloat(((bun + cho) / 60).toFixed(5));
        rslt = deg + bun;
        return rslt;
    };
    Write.prototype.accessGallery = function () {
        console.log("accessGallery");
        this.getPictureImage('gallery');
    };
    Write.prototype.accessCamera = function () {
        console.log("accessGallery");
        this.getPictureImage('camera');
    };
    return Write;
}());
Write = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-write',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/write/write.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      장소등록\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <img [src]="placeItem.images" *ngIf="placeItem.images" />\n    </ion-card-content>\n\n    <ion-item>\n      <button ion-button icon-left clear item-left (click)="accessCamera()">\n        <ion-icon name="camera"></ion-icon>카메라\n      </button>\n      <button ion-button icon-left clear item-right (click)="accessGallery()">\n        <ion-icon name="image"></ion-icon>갤러리\n      </button>\n    </ion-item>\n  </ion-card>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label>장소명칭</ion-label>\n      <ion-input type="text" [(ngModel)]="placeItem.placeName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>주소</ion-label>\n      <ion-input type="text" [(ngModel)]="placeItem.address"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>gps point</ion-label>\n      <ion-input type="text" [(ngModel)]="placeItem.latitude"></ion-input>\n      <ion-input type="text" [(ngModel)]="placeItem.longitude"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>제목</ion-label>\n      <ion-input type="text" [(ngModel)]="placeItem.subject"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>설명</ion-label>\n      <ion-textarea\n        [(ngModel)]="placeItem.desc">\n      </ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="primary" block (click)="save()">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/write/write.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_place_service__["a" /* PlaceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */]])
], Write);

//# sourceMappingURL=write.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */]
        ]
    })
], RegisterModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Register = (function () {
    function Register(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
    }
    Register.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingRegisterPage');
    };
    Register.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    Register.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return Register;
}());
Register = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/register/register.html"*/'<!--\n  Generated template for the SettingRegister page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settingRegister</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="login-box">\n\n     <form (ngSubmit)="register()" #registerForm="ngForm">\n       <ion-row>\n         <ion-col>\n           <ion-list inset>\n\n             <ion-item>\n               <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n             </ion-item>\n\n             <ion-item>\n               <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n             </ion-item>\n\n           </ion-list>\n         </ion-col>\n       </ion-row>\n\n       <ion-row>\n         <ion-col class="signup-col">\n           <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n         </ion-col>\n       </ion-row>\n\n     </form>\n   </div>\n</ion-content>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Register);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' };
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingLoginPage');
    };
    Login.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* Register */]);
    };
    Login.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                setTimeout(function () {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__setting_setting__["a" /* Setting */]);
                });
                console.log(_this.auth.currentUser);
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    Login.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    Login.prototype.showError = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
        });
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/login/login.html"*/'<!--\n  Generated template for the SettingLogin page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  <div>\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n          <button ion-button block clear (click)="createAccount()">Create New Account</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_info_my_info_module__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_follow_my_follow_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_like_my_like_module__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SettingModule = (function () {
    function SettingModule() {
    }
    return SettingModule;
}());
SettingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* Setting */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* Setting */]),
            __WEBPACK_IMPORTED_MODULE_3__login_login_module__["LoginModule"],
            __WEBPACK_IMPORTED_MODULE_4__my_info_my_info_module__["MyInfoModule"],
            __WEBPACK_IMPORTED_MODULE_5__my_follow_my_follow_module__["MyFollowModule"],
            __WEBPACK_IMPORTED_MODULE_6__my_like_my_like_module__["MyLikeModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* Setting */]
        ]
    })
], SettingModule);

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceInfoModule", function() { return PlaceInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_info__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaceInfoModule = (function () {
    function PlaceInfoModule() {
    }
    return PlaceInfoModule;
}());
PlaceInfoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__place_info__["a" /* PlaceInfo */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__place_info__["a" /* PlaceInfo */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__place_info__["a" /* PlaceInfo */]
        ]
    })
], PlaceInfoModule);

//# sourceMappingURL=place-info.module.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__write_write__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* Search */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__write_write__["a" /* Write */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__setting_setting__["a" /* Setting */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="목록" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="검색" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="작성" tabIcon="create"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="설정" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_write_write_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_info_my_info_module__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_follow_my_follow_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_my_like_my_like_module__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_place_info_place_info_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_user_info_user_info_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_place_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// tab page











// providers


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__["HomeModule"],
            __WEBPACK_IMPORTED_MODULE_14__pages_search_search_module__["SearchModule"],
            __WEBPACK_IMPORTED_MODULE_15__pages_write_write_module__["WriteModule"],
            __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting_module__["SettingModule"],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__["LoginModule"],
            __WEBPACK_IMPORTED_MODULE_18__pages_register_register_module__["RegisterModule"],
            __WEBPACK_IMPORTED_MODULE_19__pages_my_info_my_info_module__["MyInfoModule"],
            __WEBPACK_IMPORTED_MODULE_20__pages_my_follow_my_follow_module__["MyFollowModule"],
            __WEBPACK_IMPORTED_MODULE_21__pages_my_like_my_like_module__["MyLikeModule"],
            __WEBPACK_IMPORTED_MODULE_22__pages_place_info_place_info_module__["PlaceInfoModule"],
            __WEBPACK_IMPORTED_MODULE_23__pages_user_info_user_info_module__["UserInfoModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomeModule', name: 'Home', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchModule', name: 'Search', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/write/write.module#WriteModule', name: 'Write', segment: 'write', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterModule', name: 'Register', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingModule', name: 'Setting', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/place-info/place-info.module#PlaceInfoModule', name: 'PlaceInfo', segment: 'place-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-info/user-info.module#UserInfoModule', name: 'UserInfo', segment: 'user-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-info/my-info.module#MyInfoModule', name: 'MyInfo', segment: 'my-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-follow/my-follow.module#MyFollowModule', name: 'MyFollow', segment: 'my-follow', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-like/my-like.module#MyLikeModule', name: 'MyLike', segment: 'my-like', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_24__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_25__providers_place_service__["a" /* PlaceService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaceModule = (function () {
    function PlaceModule() {
    }
    return PlaceModule;
}());
PlaceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__place__["a" /* Place */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__place__["a" /* Place */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__place__["a" /* Place */]
        ]
    })
], PlaceModule);

//# sourceMappingURL=place.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_place_info_place_info__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_user_info_user_info__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_place__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Place component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var Place = (function () {
    function Place(navCtrl, navParams, modalCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        console.log('Hello Place Component');
    }
    Place.prototype.openMapApp = function (latitude, longitude) {
        console.log(latitude, longitude);
        var destination = latitude + ',' + longitude;
        // alert(destination);
        if (this.platform.is('ios')) {
            window.open('maps://?q=' + destination, '_system');
        }
        else {
            var label = encodeURI('My Label');
            window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
        }
    };
    Place.prototype.openPlacePage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_place_info_place_info__["a" /* PlaceInfo */], { "item": item });
    };
    Place.prototype.viewUserDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_user_info_user_info__["a" /* UserInfo */], { "item": item });
    };
    return Place;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_place__["a" /* PlaceModel */])
], Place.prototype, "item", void 0);
Place = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'place',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/components/place/place.html"*/'<ion-card>\n  <ion-item (click)="viewUserDetail(item.user)">\n    <ion-avatar item-left>\n      <img [src]="item.user.avatar"/>\n    </ion-avatar>\n    <h2>{{item.user.name}}</h2>\n    <p>{{item.user.desc}}</p>\n    <ion-note item-right>\n      {{item.writeTime}}\n    </ion-note>\n  </ion-item>\n\n  <div (click)="openPlacePage(item)">\n    <img [src]="item.images"/>\n\n    <ion-card-content>\n      <p>{{item.subject}}</p>\n    </ion-card-content>\n  </div>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>{{item.likeCnt}} Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>{{item.commentCnt}} Comments</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small color="primary"\n        (click)="openMapApp(item.latitude, item.longitude)">\n        <ion-icon name=\'navigate\'></ion-icon>\n        <div>Start</div>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/components/place/place.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], Place);

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyInfo = (function () {
    function MyInfo(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    MyInfo.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyInfo');
    };
    return MyInfo;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MyInfo.prototype, "userInfo", void 0);
MyInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-info',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/my-info/my-info.html"*/'<ion-list>\n  <ion-item>\n    <img src="assets/img/IMG_0349.jpg"/>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>User Name</ion-label>\n    <ion-input type="text"></ion-input>\n    <!-- <ion-input type="text" [(ngModel)]="userInfo.name"></ion-input> -->\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>User Description</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Birth Day</ion-label>\n    <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Gender</ion-label>\n    <ion-select [(ngModel)]="gender">\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon name=\'logo-twitter\' item-left style="color: #55acee"></ion-icon>\n    Followers\n    <ion-badge item-right>260k</ion-badge>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/my-info/my-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MyInfo);

//# sourceMappingURL=my-info.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFollow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyFollow page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyFollow = (function () {
    function MyFollow(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.followCollection = [];
        // init datalist
        var temp1 = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* UserModel */]('hello', 'helloMyBebe@bebelove.com', 'assets/img/IMG_0345.jpg');
        temp1.birthDay = "2017-01-01";
        temp1.gender = "m";
        temp1.desc = "헤이 맨~~ 나는 야 수퍼 히어로";
        var temp2 = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* UserModel */]('hello', 'helloMyBebe@bebelove.com', 'assets/img/IMG_0345.jpg');
        temp2.birthDay = "2017-01-01";
        temp2.gender = "m";
        temp2.desc = "kkkkkkk";
        var temp3 = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* UserModel */]('hello', 'helloMyBebe@bebelove.com', 'assets/img/IMG_0345.jpg');
        temp3.birthDay = "2017-01-01";
        temp3.gender = "m";
        temp3.desc = "오랜만이란 어색한 인사";
        this.followCollection.push(temp1);
        this.followCollection.push(temp2);
        this.followCollection.push(temp3);
    }
    MyFollow.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyFollowPage');
    };
    MyFollow.prototype.trackByFunction = function (index, item) {
        console.log("index:", index);
        console.log("item:", item);
        return item.userId;
    };
    return MyFollow;
}());
MyFollow = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-follow',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/my-follow/my-follow.html"*/'<ion-list>\n  <page-user-info *ngFor="let item of followCollection; trackBy:trackByFunction" [item]="item"></page-user-info>\n</ion-list>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/my-follow/my-follow.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MyFollow);

//# sourceMappingURL=my-follow.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLike; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_place_info_place_info__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_place__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyLike page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyLike = (function () {
    function MyLike(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeCollection = [];
        // init datalist
        var temp1 = new __WEBPACK_IMPORTED_MODULE_3__models_place__["a" /* PlaceModel */]();
        temp1.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* UserModel */]("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
        temp1.user.desc = "꿈꾸는 나비... 오케";
        temp1.user.birthDay = "2017-01-01";
        temp1.user.gender = "m";
        temp1.images = "assets/img/IMG_0363.jpg";
        temp1.subject = "시내야경";
        temp1.desc = "정말 멋진 곳이로군요!";
        temp1.likeCnt = 32;
        temp1.commentCnt = 3;
        temp1.writeTime = new Date("2017-03-01 11:35:11");
        temp1.latitude = 37.5753907;
        temp1.longitude = 126.969729;
        var temp2 = new __WEBPACK_IMPORTED_MODULE_3__models_place__["a" /* PlaceModel */]();
        temp2.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* UserModel */]("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
        temp2.user.desc = "꿈꾸는 나비... 오케";
        temp2.user.birthDay = "2017-01-01";
        temp2.user.gender = "m";
        temp2.images = "assets/img/IMG_0363.jpg";
        temp2.subject = "시내야경";
        temp2.desc = "정말 멋진 곳이로군요!";
        temp2.likeCnt = 32;
        temp2.commentCnt = 3;
        temp2.writeTime = new Date("2017-03-01 11:35:11");
        temp2.latitude = 37.5753907;
        temp2.longitude = 126.969729;
        var temp3 = new __WEBPACK_IMPORTED_MODULE_3__models_place__["a" /* PlaceModel */]();
        temp3.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* UserModel */]("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
        temp3.user.desc = "꿈꾸는 나비... 오케";
        temp3.user.birthDay = "2017-01-01";
        temp3.user.gender = "m";
        temp3.images = "assets/img/IMG_0363.jpg";
        temp3.subject = "시내야경";
        temp3.desc = "정말 멋진 곳이로군요!";
        temp3.likeCnt = 32;
        temp3.commentCnt = 3;
        temp3.writeTime = new Date("2017-03-01 11:35:11");
        temp3.latitude = 37.5753907;
        temp3.longitude = 126.969729;
        this.placeCollection.push(temp1);
        this.placeCollection.push(temp2);
        this.placeCollection.push(temp3);
    }
    MyLike.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyLikePage');
    };
    MyLike.prototype.openPlacePage = function (item) {
        console.log('openPlacePage = ', item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_place_info_place_info__["a" /* PlaceInfo */], { item: item });
    };
    return MyLike;
}());
MyLike = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-like',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/my-like/my-like.html"*/'<ion-list>\n  <button *ngFor="let item of placeCollection" ion-item (click)="openPlacePage(item)">\n    <ion-thumbnail item-left>\n      <img class="place_thumbnail" [src]="item.images">\n    </ion-thumbnail>\n    <h2>{{item.subject}}</h2>\n    <p>{{item.desc}}</p>\n    <!-- <button ion-button clear item-right>View</button> -->\n  </button>\n\n</ion-list>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/my-like/my-like.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MyLike);

//# sourceMappingURL=my-like.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel(name, email, avatar) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
    }
    return UserModel;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "pass" && credentials.email === "email");
                _this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* UserModel */]('Simon', 'saimon@devdactic.com', '');
                observer.next(true);
                // observer.next(access);
                observer.complete();
            });
        }
    };
    AuthService.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaceService = (function () {
    function PlaceService(storage, loadingCtrl, alertCtrl, file) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.placeCollection = [];
        console.log("place-service constructor");
        console.log(this.file);
        console.log(this.file.dataDirectory);
    }
    PlaceService.prototype.init = function () {
        // return Observable.create(observer => {
        //   let tempCollection = [];
        //   // init datalist
        //   var temp1:PlaceModel = new PlaceModel();
        //   temp1.user = new UserModel("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
        //   temp1.user.desc = "꿈꾸는 나비... 오케";
        //   temp1.user.birthDay = "2017-01-01";
        //   temp1.user.gender = "m";
        //
        //   temp1.images = "assets/img/IMG_0363.jpg";
        //   temp1.subject = "시내야경";
        //   temp1.desc = "정말 멋진 곳이로군요!";
        //   temp1.likeCnt = 32;
        //   temp1.commentCnt = 3;
        //   temp1.writeTime = new Date("2017-03-01 11:35:11");
        //   temp1.latitude = 37.5753907;
        //   temp1.longitude = 126.969729;
        //
        //   var temp2:PlaceModel = new PlaceModel();
        //   temp2.user = new UserModel("doolybebe", "doolybebe@naver.com", "assets/img/IMG_0345.jpg");
        //   temp2.user.desc = "꿈꾸는 나비... 오케";
        //   temp2.user.birthDay = "2017-01-01";
        //   temp2.user.gender = "m";
        //
        //   temp2.images = "assets/img/IMG_0363.jpg";
        //   temp2.subject = "시내야경";
        //   temp2.desc = "정말 멋진 곳이로군요!";
        //   temp2.likeCnt = 32;
        //   temp2.commentCnt = 3;
        //   temp2.writeTime = new Date("2017-03-01 11:35:11");
        //   temp2.latitude = 37.5753907;
        //   temp2.longitude = 126.969729;
        //
        //   tempCollection.push(temp1);
        //   tempCollection.push(temp2);
        //
        //   this.storage.ready().then(() => {
        //     console.log("ready storage");
        //
        //     this.storage.keys().then((keys) => {
        //       console.log('key~', keys);
        //     });
        //
        //     // this.storage.set("placeCollection", tempCollection).then((collection) => {
        //     //   console.log("set this complete ", collection);
        //     //   observer.next(true);
        //     //   observer.complete();
        //     // }).catch((error)=>{
        //     //   console.log("error = ", error);
        //     //   return Observable.throw("data set error= " + error);
        //     // });
        //
        //     // this.storage.clear().then(() => {
        //     //   console.log("clear storage");
        //     //   this.storage.set("placeCollection", tempCollection).then((collection) => {
        //     //     console.log("set this complete ", collection);
        //     //     observer.next(true);
        //     //     observer.complete();
        //     //   }).catch((error)=>{
        //     //     console.log("error = ", error);
        //     //     return Observable.throw("data set error= " + error);
        //     //   });
        //     // });
        //   });
        // });
    };
    PlaceService.prototype.save = function (place) {
        var _this = this;
        this.showLoading();
        // validate
        if (!place) {
            console.log("save failed");
            this.showError("Please insert correct contents");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert correct contents");
        }
        place.user = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* UserModel */]("mr. doctor", "abc@abc.com", "assets/img/IMG_0345.jpg");
        place.user.desc = "i love 머진 장소";
        place.likeCnt = 0;
        place.commentCnt = 0;
        place.writeTime = new Date("2017-03-03 11:35:11");
        console.log("ok saveing ...");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.storage.ready().then(function () {
                console.log("set Storage Places in save function");
                _this.placeCollection.push(place);
                _this.storage.set("placeCollection", _this.placeCollection).then(function (collection) {
                    console.log("set this complete ", collection);
                    observer.next(true);
                    observer.complete();
                    setTimeout(function () {
                        _this.loading.dismiss();
                    });
                }).catch(function (error) {
                    console.log("error = ", error);
                    _this.showError(error);
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("data set error= " + error);
                });
            }).catch(function (error) {
                console.log("error!!!=", error);
                _this.showError(error);
                observer.error(error);
            });
        });
    };
    PlaceService.prototype.searchPlaceCollection = function (search) {
        var _this = this;
        this.showLoading();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.storage.ready().then(function () {
                console.log("get Storage Places");
                _this.storage.get("placeCollection").then(function (collection) {
                    _this.placeCollection = collection;
                    observer.next(collection);
                    observer.complete();
                    setTimeout(function () {
                        _this.loading.dismiss();
                    });
                }).catch(function (error) {
                    console.log("get Storage Places Error!!!");
                    _this.showError(error);
                    observer.error(error);
                });
            }).catch(function (error) {
                console.log("error!!!=", error);
                _this.showError(error);
                observer.error(error);
            });
        });
    };
    PlaceService.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    PlaceService.prototype.showError = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
        });
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return PlaceService;
}());
PlaceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
], PlaceService);

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlaceInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlaceInfo = (function () {
    function PlaceInfo(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.item = this.navParams.data.item;
    }
    PlaceInfo.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaceDetailPage');
    };
    PlaceInfo.prototype.openMapApp = function (latitude, longitude) {
        console.log(latitude, longitude);
        var destination = latitude + ',' + longitude;
        // alert(destination);
        if (this.platform.is('ios')) {
            window.open('maps://?q=' + destination, '_system');
        }
        else {
            var label = encodeURI('My Label');
            window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
        }
    };
    return PlaceInfo;
}());
PlaceInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-place-info',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/place-info/place-info.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>placeInfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-left>\n        <img [src]="item.user.avatar"/>\n      </ion-avatar>\n      <h2>{{item.user.name}}</h2>\n      <p>{{item.user.desc}}</p>\n      <ion-note item-right>\n        {{item.writeTime}}\n      </ion-note>\n    </ion-item>\n\n    <div>\n      <img [src]="item.images"/>\n\n      <ion-card-content>\n        <p>{{item.subject}}</p>\n      </ion-card-content>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{item.likeCnt}} Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{item.commentCnt}} Comments</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small color="primary"\n          (click)="openMapApp(item.latitude, item.longitude)">\n          <ion-icon name=\'navigate\'></ion-icon>\n          <div>Start</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/place-info/place-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], PlaceInfo);

//# sourceMappingURL=place-info.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceModel; });
var PlaceModel = (function () {
    function PlaceModel() {
    }
    return PlaceModel;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Setting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Setting page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Setting = (function () {
    function Setting(navCtrl, navParams, platform, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.setFlag = "myInfo";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    Setting.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
        this.userInfo = this.auth.getUserInfo();
        console.log(this.userInfo);
    };
    Setting.prototype.goLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Setting.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            // this.
            console.log(succ);
            if (succ) {
                _this.userInfo = _this.auth.getUserInfo();
            }
        });
    };
    return Setting;
}());
Setting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/setting/setting.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>setting-Segments</ion-title>\n  </ion-navbar>\n\n  <!-- <ion-toolbar no-border-top> -->\n  <ion-toolbar no-border-top *ngIf="userInfo">\n    <ion-segment [(ngModel)]="setFlag">\n      <ion-segment-button value="myInfo">\n        My Info\n      </ion-segment-button>\n      <ion-segment-button value="follow">\n        Follow\n      </ion-segment-button>\n      <ion-segment-button value="like">\n        Like\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <page-login *ngIf="!userInfo"> </page-login>\n\n  <!-- <div [ngSwitch]="setFlag"> -->\n  <div [ngSwitch]="setFlag" *ngIf="userInfo">\n    <page-my-info *ngSwitchCase="\'myInfo\'" [userInfo]="userInfo"> </page-my-info>\n    <page-my-follow *ngSwitchCase="\'follow\'"></page-my-follow>\n    <page-my-like *ngSwitchCase="\'like\'"></page-my-like>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/songbyeongju/dawningeyes/workspace/app_place/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */]])
], Setting);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInfoModule", function() { return MyInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_info__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyInfoModule = (function () {
    function MyInfoModule() {
    }
    return MyInfoModule;
}());
MyInfoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_info__["a" /* MyInfo */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_info__["a" /* MyInfo */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_info__["a" /* MyInfo */]
        ]
    })
], MyInfoModule);

//# sourceMappingURL=my-info.module.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFollowModule", function() { return MyFollowModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_follow__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_info_user_info_module__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyFollowModule = (function () {
    function MyFollowModule() {
    }
    return MyFollowModule;
}());
MyFollowModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_follow__["a" /* MyFollow */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_follow__["a" /* MyFollow */]),
            __WEBPACK_IMPORTED_MODULE_3__user_info_user_info_module__["UserInfoModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_follow__["a" /* MyFollow */]
        ]
    })
], MyFollowModule);

//# sourceMappingURL=my-follow.module.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoModule", function() { return UserInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_info__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserInfoModule = (function () {
    function UserInfoModule() {
    }
    return UserInfoModule;
}());
UserInfoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_info__["a" /* UserInfo */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_info__["a" /* UserInfo */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__user_info__["a" /* UserInfo */]
        ]
    })
], UserInfoModule);

//# sourceMappingURL=user-info.module.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLikeModule", function() { return MyLikeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_like__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyLikeModule = (function () {
    function MyLikeModule() {
    }
    return MyLikeModule;
}());
MyLikeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_like__["a" /* MyLike */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_like__["a" /* MyLike */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_like__["a" /* MyLike */]
        ]
    })
], MyLikeModule);

//# sourceMappingURL=my-like.module.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map