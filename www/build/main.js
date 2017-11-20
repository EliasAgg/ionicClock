webpackJsonp([0], {

/***/ 109:
/***/ (function (module, exports) {

            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncatched exception popping up in devtools
                return Promise.resolve().then(function () {
                    throw new Error("Cannot find module '" + req + "'.");
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = 109;

            /***/
}),

/***/ 150:
/***/ (function (module, exports) {

            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncatched exception popping up in devtools
                return Promise.resolve().then(function () {
                    throw new Error("Cannot find module '" + req + "'.");
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = 150;

            /***/
}),

/***/ 194:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clock_clock__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stopwatch_stopwatch__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minuteur_minuteur__ = __webpack_require__(198);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };





            var HomePage = (function () {
                function HomePage(navCtrl) {
                    this.navCtrl = navCtrl;
                    this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__clock_clock__["a" /* ClockPage */];
                    this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__stopwatch_stopwatch__["a" /* StopwatchPage */];
                    this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__minuteur_minuteur__["a" /* MinuteurPage */];
                }
                HomePage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'page-home', template:/*ion-inline-start:"C:\zTemp\app-test\src\pages\home\home.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Horloge" tabIcon="clock"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Chronomètre" tabIcon="timer"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Minuteur" tabIcon="alarm"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\zTemp\app-test\src\pages\home\home.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
                ], HomePage);
                return HomePage;
            }());

            //# sourceMappingURL=home.js.map

            /***/
}),

/***/ 195:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ClockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_dateTime__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_dateClock__ = __webpack_require__(278);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            var ClockPage = (function () {
                function ClockPage(navCtrl) {
                    this.navCtrl = navCtrl;
                    // Creating our 2 objects: Date & Clock
                    this.myClock = new __WEBPACK_IMPORTED_MODULE_3__app_dateClock__["a" /* TimeClock */]();
                    this.myDate = new __WEBPACK_IMPORTED_MODULE_2__app_dateTime__["a" /* TimeDate */]();
                    // To display either today or not today
                    this.today = true;
                    this.language = 'FR';
                    // To check the seasons
                    this.winter = false; // 22 + 9 + 2017 - 20 + 12 + 2017
                    this.summer = false; // 21 + 12 + 2017 - 19 + 3 + 2017
                    this.spring = false; // 20 + 3 + 2018 - 20 + 6 + 2018
                    this.fall = false; // 21 + 6 + 2018 - 22 + 9 + 2018
                    this.updateTime();
                    this.myDate.updateTiming();
                    this.displaySeason();
                    this.checkTime();
                }
                ClockPage.prototype.strDay = function (lang) {
                    var today = this.myDate.returnWday() - 1;
                    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                    var jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
                    if (lang == 'FR') {
                        return jours[today];
                    }
                    if (lang == 'EN') {
                        return days[today];
                    }
                };
                ClockPage.prototype.strMonth = function (lang) {
                    var today = this.myDate.returnMonth() - 1;
                    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
                    if (lang == 'FR') {
                        return mois[today];
                    }
                    if (lang == 'EN') {
                        return months[today];
                    }
                };
                // Check if it's today, duh.
                ClockPage.prototype.checkToday = function () {
                    var myTime = new Date();
                    var day = this.myDate.returnDay().toString();
                    var month = (this.myDate.returnMonth()).toString();
                    var year = this.myDate.returnYear().toString();
                    var curDate = day + month + year;
                    var curDateCheck = myTime.getUTCDate().toString() + (myTime.getUTCMonth() + 1).toString() + myTime.getUTCFullYear().toString();
                    this.test = curDate;
                    this.test2 = curDateCheck;
                    if (curDate != curDateCheck) {
                        this.today = false;
                        this.notToday = true;
                    }
                    else {
                        this.today = true;
                        this.notToday = false;
                    }
                };
                // Update the current time every second 
                ClockPage.prototype.updateTime = function () {
                    var _this = this;
                    setInterval(function () {
                        _this.myClock.updateTiming();
                    }, 1000);
                };
                // Safeguard limit for the input and display the season accordingly, and also check if the date is today
                ClockPage.prototype.checkTime = function () {
                    var _this = this;
                    setInterval(function () {
                        _this.myDate.checkCoherence();
                        _this.displaySeason();
                        _this.checkToday();
                        _this.dayToday = _this.strDay(_this.language);
                        _this.monthToday = _this.strMonth(_this.language);
                    }, 50);
                };
                // Check the season
                ClockPage.prototype.displaySeason = function () {
                    var day = this.myDate.returnDay().toString();
                    var month = this.myDate.returnMonth().toString();
                    var year = this.myDate.returnYear().toString();
                    if (day.length == 1) {
                        day = "0" + day;
                    }
                    if (month.length == 1) {
                        month = "0" + month;
                    }
                    // Create a number from the concatenation of of year/month/day; it'll be used for checking dates
                    var curDate = parseInt(year + month + day);
                    // Set the boundaries for each season
                    var minWinter = parseInt((parseInt(year) - 1).toString() + "12" + "21");
                    var maxWinter = parseInt(year.toString() + "03" + "19");
                    var minSpring = parseInt(year.toString() + "03" + "20");
                    var maxSpring = parseInt(year.toString() + "06" + "20");
                    var minSummer = parseInt(year.toString() + "06" + "21");
                    var maxSummer = parseInt(year.toString() + "09" + "22");
                    var minFall = parseInt(year.toString() + "09" + "23");
                    var maxFall = parseInt(year.toString() + "12" + "20");
                    // Some debug
                    // this.test = minFall;
                    // this.test2 = maxFall;
                    // this.curDate = curDate;
                    // Set the right season, and disable the others
                    if (curDate >= minWinter && curDate <= maxWinter) {
                        this.winter = true;
                        this.spring = this.summer = this.fall = false;
                    }
                    if (curDate >= minSummer && curDate <= maxSummer) {
                        this.summer = true;
                        this.spring = this.winter = this.fall = false;
                    }
                    if (curDate >= minSpring && curDate <= maxSpring) {
                        this.spring = true;
                        this.winter = this.summer = this.fall = false;
                    }
                    if (curDate >= minFall && curDate <= maxFall) {
                        this.fall = true;
                        this.spring = this.summer = this.winter = false;
                    }
                };
                ClockPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'page-clock', template:/*ion-inline-start:"C:\zTemp\app-test\src\pages\clock\clock.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="titleNav">\n        <div class="headerContentWrap"><img class="headerContent clockImg" src="assets/imgs/clock.png" alt="clock"/></div>\n    </ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="targetThat">\n<p>\n    <span class="label label-default clock">{{myClock.hours | twoDigit}}</span>\n    <span class="semicolon">:</span>\n    <span class="label label-default clock">{{myClock.minutes | twoDigit}}</span>\n    <span class="semicolon">:</span>\n    <span class="label label-default clock">{{myClock.seconds | twoDigit}}</span>\n</p>\n\n<div class="separation"></div>\n\n<p class="dateDisplay">\n    <span *ngIf="today" class="dateTitle">{{dayToday}} {{myDate.day}} {{monthToday}} {{myDate.year}}</span>\n    <span *ngIf="notToday" class="dateTitle">Not today</span>\n    <br>\n    <span class="label label-default">{{myDate.day | twoDigit}} </span>\n    /\n    <span class="label label-default">{{myDate.month | twoDigit}}</span>\n    /\n    <span class="label label-default">{{myDate.year | twoDigit}}</span>\n</p>\n\n<p class="inputDate">\n  <input [(ngModel)]="myDate.day" class="dateType plip" type="number" />\n  <input [(ngModel)]="myDate.month" class="dateType plip" type="number" />\n  <input [(ngModel)]="myDate.year" class="dateType plip" type="number" />\n</p>\n\n<div class="separation"></div>\n\n<p class="seasons">\n  Saison: \n  <span class="winterThing" *ngIf="winter">Hiver <a href="http://icalendrier.fr/saisons" class="source">source</a><br><br><img class="iconSeason" src="assets/imgs/winter.png" /></span>\n  <span class="fallThing"  *ngIf="fall">Automne <a href="http://icalendrier.fr/saisons" class="source">source</a><br><br><img class="iconSeason" src="assets/imgs/autumn.png" /></span>\n  <span class="summerThing"  *ngIf="summer">Été <a href="http://icalendrier.fr/saisons" class="source">source</a><br><br><img class="iconSeason" src="assets/imgs/summer.png" /></span>\n  <span class="springThing"  *ngIf="spring">Printemps <a href="http://icalendrier.fr/saisons" class="source">source</a><br><br><img class="iconSeason" src="assets/imgs/spring.png" /></span>\n  <br>\n  \n</p>\n\n<!-- FOR DEBUG PURPOSES\n  <div class="separation"></div>\n  <p style="color: green;" *ngIf="test == test2"><ion-icon name="warning"></ion-icon> DEBUG! {{test}} | {{test2}}</p>\n  <p style="color: red;" *ngIf="test != test2"><ion-icon name="warning"></ion-icon> DEBUG! {{test}} | {{test2}}</p>\n-->\n\n<div class="separation"></div>\n\n<p class="copyright">\n  Copyright <span class="copyLogo">©</span> AGGOUNE Elias 2017.\n</p>\n</ion-content>\n\n'/*ion-inline-end:"C:\zTemp\app-test\src\pages\clock\clock.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
                ], ClockPage);
                return ClockPage;
            }());

            //# sourceMappingURL=clock.js.map

            /***/
}),

/***/ 196:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return StopwatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_timer__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state__ = __webpack_require__(197);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            var StopwatchPage = (function () {
                function StopwatchPage(navCtrl) {
                    this.navCtrl = navCtrl;
                    this.myTimer = new __WEBPACK_IMPORTED_MODULE_2__app_timer__["a" /* Timer */]();
                    this.myState = new __WEBPACK_IMPORTED_MODULE_3__app_state__["a" /* State */]();
                    this.btnPlay = 'Démarrer';
                }
                StopwatchPage.prototype.backward = function () {
                    this.myTimer.reset();
                    this.myState.setBackward();
                    this.btnPlay = 'Démarrer';
                };
                StopwatchPage.prototype.play = function () {
                    this.myTimer.start();
                    this.myState.setPlay();
                    this.btnPlay = 'Continuer';
                };
                StopwatchPage.prototype.stop = function () {
                    this.myTimer.stop();
                    this.myState.setStop();
                };
                StopwatchPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'page-stopwatch', template:/*ion-inline-start:"C:\zTemp\app-test\src\pages\stopwatch\stopwatch.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title class="titleNav">\n          <div class="headerContentWrap"><img class="headerContent clockImg" src="assets/imgs/clock.png" alt="clock"/></div>\n      </ion-title>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content text-center>\n  <div class="digit clock plop">\n    <span class="label label-default">{{myTimer.heures | twoDigit}}</span>\n     :\n    <span class="label label-default">{{myTimer.minutes | twoDigit}}</span>\n     :\n    <span class="label label-default">{{myTimer.secondes | twoDigit}}</span>\n     :\n    <span class="label label-default">{{myTimer.miliseconds}}</span>\n  </div>\n  <div class="backGround"></div>\n</ion-content>\n\n<ion-footer text-center>\n  \n    <button class="btn" *ngIf="myState.backward" (click)="backward()"><img src="assets/imgs/previous.png"></button>\n    <button class="btn" *ngIf="myState.stop" (click)="stop()"><img src="assets/imgs/pause.png" /></button>\n    <button class="btn" *ngIf="myState.play" (click)="play()"><img src="assets/imgs/play.png"></button>\n  \n</ion-footer>'/*ion-inline-end:"C:\zTemp\app-test\src\pages\stopwatch\stopwatch.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
                ], StopwatchPage);
                return StopwatchPage;
            }());

            //# sourceMappingURL=stopwatch.js.map

            /***/
}),

/***/ 197:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return State; });
            var State = (function () {
                function State() {
                    //Properties
                    this.play = true;
                    this.backward = false;
                    this.stop = false;
                }
                //Methods
                State.prototype.setPlay = function () {
                    this.stop = true;
                    this.play = this.backward = false;
                };
                State.prototype.setStop = function () {
                    this.stop = false;
                    this.backward = this.play = true;
                };
                State.prototype.setBackward = function () {
                    this.play = true;
                    this.backward = this.backward = false;
                };
                return State;
            }());

            //# sourceMappingURL=state.js.map

            /***/
}),

/***/ 198:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return MinuteurPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_invertTimer__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state__ = __webpack_require__(197);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            var MinuteurPage = (function () {
                function MinuteurPage(navCtrl) {
                    this.navCtrl = navCtrl;
                    this.myTimer = new __WEBPACK_IMPORTED_MODULE_2__app_invertTimer__["a" /* TimerInvert */]();
                    this.myState = new __WEBPACK_IMPORTED_MODULE_3__app_state__["a" /* State */]();
                    this.btnPlay = 'Démarrer';
                    this.myParamSec = 0;
                    this.myParamMin = 0;
                    this.myParamHrs = 0;
                }
                MinuteurPage.prototype.backward = function () {
                    this.myTimer.reset();
                    this.myState.setBackward();
                    this.btnPlay = 'Démarrer';
                };
                MinuteurPage.prototype.play = function () {
                    this.myTimer.start();
                    this.myState.setPlay();
                    this.btnPlay = 'Continuer';
                };
                MinuteurPage.prototype.stop = function () {
                    this.myTimer.stop();
                    this.myState.setStop();
                };
                MinuteurPage.prototype.setTimer = function () {
                    this.myTimer.initTime(this.myParamHrs, this.myParamMin, this.myParamSec);
                };
                MinuteurPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'page-minuteur', template:/*ion-inline-start:"C:\zTemp\app-test\src\pages\minuteur\minuteur.html"*/'<!--\n  Generated template for the MinuteurPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title class="titleNav">\n          <div class="headerContentWrap"><img class="headerContent clockImg" src="assets/imgs/clock.png" alt="clock"/></div>\n      </ion-title>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content text-center>\n    <div class="digit clock plop">\n      <span class="label label-default">{{myTimer.heures | twoDigit}}</span>\n       :\n      <span class="label label-default">{{myTimer.minutes | twoDigit}}</span>\n       :\n      <span class="label label-default">{{myTimer.secondes | twoDigit}}</span>\n    </div>\n    <input class="plip" [(ngModel)]="myParamHrs">\n    <span style="color: white; font-size: 12pt; ">:</span>\n    <input class="plip" [(ngModel)]="myParamMin">\n    <span style="color: white; font-size: 12pt; ">:</span>\n    <input class="plip" [(ngModel)]="myParamSec">\n    <button class="btn" (click)="setTimer()"><img style="height: 50px; vertical-align: middle" src="assets/imgs/Tick.png"></button>\n  </ion-content>\n  \n  <ion-footer text-center>\n    \n      <button class="btn" *ngIf="myState.backward" (click)="backward()"><img src="assets/imgs/previous.png"></button>\n      <button class="btn" *ngIf="myState.stop" (click)="stop()"><img src="assets/imgs/pause.png" /></button>\n      <button class="btn" *ngIf="myState.play" (click)="play()"><img src="assets/imgs/play.png"></button>\n    \n  </ion-footer>\n  <!-- <img style="height: 25px " src="assets/imgs/plus.png"> -->'/*ion-inline-end:"C:\zTemp\app-test\src\pages\minuteur\minuteur.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
                ], MinuteurPage);
                return MinuteurPage;
            }());

            //# sourceMappingURL=minuteur.js.map

            /***/
}),

/***/ 199:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
             * Generated class for the ContactPage page.
             *
             * See https://ionicframework.com/docs/components/#navigation for more info on
             * Ionic pages and navigation.
             */
            var ContactPage = (function () {
                function ContactPage(navCtrl, navParams) {
                    this.navCtrl = navCtrl;
                    this.navParams = navParams;
                }
                ContactPage.prototype.ionViewDidLoad = function () {
                    console.log('ionViewDidLoad ContactPage');
                };
                ContactPage.prototype.envoyer = function () {
                };
                ContactPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'page-contact', template:/*ion-inline-start:"C:\zTemp\app-test\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>contact</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="targetThis">\n  <h5>Bonjour.</h5>\n  <img style="height: 150px; padding: 15px;" src="assets/imgs/profilepic.jpg" />\n  <h4>Développeur: AGGOUNE Elias</h4>\n  <h4>Site web: <a class="lienSite" target="_blank" href="http://www.elias-agg.com">www.elias-agg.com</a></h4>\n  <img style="opacity: 0.5;" src="http://www.elias-agg.com/wp-content/uploads/2017/11/signature-white.png" />\n</ion-content>'/*ion-inline-end:"C:\zTemp\app-test\src\pages\contact\contact.html"*/,
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
                ], ContactPage);
                return ContactPage;
            }());

            //# sourceMappingURL=contact.js.map

            /***/
}),

/***/ 200:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ListItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
             * Generated class for the ListItemPage page.
             *
             * See https://ionicframework.com/docs/components/#navigation for more info on
             * Ionic pages and navigation.
             */
            var ListItemPage = (function () {
                function ListItemPage(navCtrl, navParams) {
                    this.navCtrl = navCtrl;
                    this.navParams = navParams;
                    this.myItem = navParams.get('item');
                }
                ListItemPage.prototype.ionViewDidLoad = function () {
                    console.log('ionViewDidLoad ListItemPage');
                };
                ListItemPage.prototype.validate = function () {
                    this.navCtrl.pop();
                };
                ListItemPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'page-list-item', template:/*ion-inline-start:"C:\zTemp\app-test\src\pages\list-item\list-item.html"*/'<!--\n  Generated template for the ListItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list-item</ion-title>\n    <ion-buttons end>\n      <button (click)="validate()"><ion-icon name="checkmark"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p>{{myItem.name}}</p>\n</ion-content>\n'/*ion-inline-end:"C:\zTemp\app-test\src\pages\list-item\list-item.html"*/,
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
                ], ListItemPage);
                return ListItemPage;
            }());

            //# sourceMappingURL=list-item.js.map

            /***/
}),

/***/ 201:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


            Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
            //# sourceMappingURL=main.js.map

            /***/
}),

/***/ 225:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_item_list_item__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_clock_clock__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_stopwatch_stopwatch__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_minuteur_minuteur__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_pipes_two_digit__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_pipes_multiplicateur__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(193);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };











            // Pipes




            var AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
                        declarations: [
                            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                            __WEBPACK_IMPORTED_MODULE_7__pages_list_item_list_item__["a" /* ListItemPage */],
                            __WEBPACK_IMPORTED_MODULE_8__pages_clock_clock__["a" /* ClockPage */],
                            __WEBPACK_IMPORTED_MODULE_11__app_pipes_two_digit__["a" /* TwoDigit */],
                            __WEBPACK_IMPORTED_MODULE_9__pages_stopwatch_stopwatch__["a" /* StopwatchPage */],
                            __WEBPACK_IMPORTED_MODULE_10__pages_minuteur_minuteur__["a" /* MinuteurPage */],
                            __WEBPACK_IMPORTED_MODULE_12__app_pipes_multiplicateur__["a" /* MultiTen */],
                        ],
                        imports: [
                            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                                links: []
                            }),
                        ],
                        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
                        entryComponents: [
                            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                            __WEBPACK_IMPORTED_MODULE_7__pages_list_item_list_item__["a" /* ListItemPage */],
                            __WEBPACK_IMPORTED_MODULE_8__pages_clock_clock__["a" /* ClockPage */],
                            __WEBPACK_IMPORTED_MODULE_9__pages_stopwatch_stopwatch__["a" /* StopwatchPage */],
                            __WEBPACK_IMPORTED_MODULE_10__pages_minuteur_minuteur__["a" /* MinuteurPage */],
                        ],
                        providers: [
                            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
                        ]
                    })
                ], AppModule);
                return AppModule;
            }());

            //# sourceMappingURL=app.module.js.map

            /***/
}),

/***/ 268:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(199);
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
                    this.platform = platform;
                    this.statusBar = statusBar;
                    this.splashScreen = splashScreen;
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                    this.initializeApp();
                    // used for an example of ngFor and navigation
                    this.pages = [
                        { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                        { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */] }
                    ];
                }
                MyApp.prototype.initializeApp = function () {
                    var _this = this;
                    this.platform.ready().then(function () {
                        // Okay, so the platform is ready and our plugins are available.
                        // Here you can do any higher level native things you might need.
                        _this.statusBar.styleDefault();
                        _this.splashScreen.hide();
                    });
                };
                MyApp.prototype.openPage = function (page) {
                    // Reset the content nav to have just this page
                    // we wouldn't want the back button to show in this scenario
                    this.nav.setRoot(page.component);
                };
                __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
                    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
                ], MyApp.prototype, "nav", void 0);
                MyApp = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        template:/*ion-inline-start:"C:\zTemp\app-test\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\zTemp\app-test\src\app\app.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
                ], MyApp);
                return MyApp;
            }());

            //# sourceMappingURL=app.component.js.map

            /***/
}),

/***/ 277:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return TimeDate; });
            var TimeDate = (function () {
                function TimeDate() {
                    // Properties
                    this.day = 0;
                    this.month = 0;
                    this.year = 0;
                    this.wday = 0;
                }
                // Methods
                TimeDate.prototype.updateTiming = function () {
                    var time = new Date();
                    this.day = time.getUTCDate();
                    this.month = time.getUTCMonth() + 1;
                    this.year = time.getUTCFullYear();
                    this.wday = time.getUTCDay();
                };
                // Return the objects properties value
                TimeDate.prototype.returnDay = function () {
                    return this.day;
                };
                TimeDate.prototype.returnMonth = function () {
                    return this.month;
                };
                TimeDate.prototype.returnYear = function () {
                    return this.year;
                };
                TimeDate.prototype.returnWday = function () {
                    return this.wday;
                };
                // To set boundaries for the input
                TimeDate.prototype.checkCoherence = function () {
                    if (this.day > 31) {
                        this.day = 1;
                    }
                    if (this.day < 1) {
                        this.day = 31;
                    }
                    if (this.month > 12) {
                        this.month = 1;
                    }
                    if (this.month < 1) {
                        this.month = 12;
                    }
                };
                return TimeDate;
            }());

            //# sourceMappingURL=dateTime.js.map

            /***/
}),

/***/ 278:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return TimeClock; });
            var TimeClock = (function () {
                function TimeClock() {
                    // Properties
                    this.seconds = 0;
                    this.minutes = 0;
                    this.hours = 0;
                }
                // Methods
                TimeClock.prototype.updateTiming = function () {
                    // Create a date object to extract its properties
                    var time = new Date();
                    // Matching the TimeClock properties with the date object prop
                    this.seconds = time.getSeconds();
                    this.minutes = time.getMinutes();
                    this.hours = time.getHours();
                };
                return TimeClock;
            }());

            //# sourceMappingURL=dateClock.js.map

            /***/
}),

/***/ 279:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return Timer; });
            var Timer = (function () {
                function Timer() {
                    // Properties
                    this.secondes = 0;
                    this.minutes = 0;
                    this.heures = 0;
                    this.miliseconds = 0;
                    this.totalSecondes = 0;
                }
                //Methods
                Timer.prototype.start = function () {
                    var _this = this;
                    this.timer = setInterval(function () {
                        // this.minutes = Math.floor(++this.totalSecondes / 60);
                        // this.secondes = this.totalSecondes - this.minutes * 60;
                        _this.miliseconds++;
                        if (_this.miliseconds == 10) {
                            _this.miliseconds = 0;
                            _this.secondes++;
                        }
                        if (_this.secondes == 60) {
                            _this.secondes = 0;
                            _this.minutes++;
                        }
                        if (_this.minutes == 60) {
                            _this.minutes = 0;
                            _this.heures = 1;
                        }
                    }, 100);
                };
                Timer.prototype.stop = function () {
                    clearInterval(this.timer);
                };
                Timer.prototype.reset = function () {
                    this.totalSecondes = this.minutes = this.secondes = this.miliseconds = this.heures = 0;
                };
                return Timer;
            }());

            //# sourceMappingURL=timer.js.map

            /***/
}),

/***/ 280:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return TimerInvert; });
            var TimerInvert = (function () {
                function TimerInvert() {
                    // Properties
                    this.secondes = 0;
                    this.minutes = 0;
                    this.heures = 1;
                    this.secondesStock = 0;
                    this.minutesStock = 0;
                    this.heuresStock = 0;
                }
                //Methods
                TimerInvert.prototype.start = function () {
                    var _this = this;
                    this.timer = setInterval(function () {
                        if (_this.secondes == 0 && _this.minutes == 0 && _this.heures == 0) {
                            _this.stop();
                        }
                        else {
                            if (_this.secondes == 0 && _this.minutes > 0) {
                                _this.minutes--;
                                _this.secondes = 60;
                            }
                            if (_this.minutes == 0 && _this.heures > 0) {
                                _this.heures--;
                                _this.minutes = 59;
                                _this.secondes = 60;
                            }
                            if (_this.secondes > 0) {
                                _this.secondes--;
                            }
                        }
                    }, 1000);
                };
                TimerInvert.prototype.stop = function () {
                    clearInterval(this.timer);
                };
                TimerInvert.prototype.initTime = function (heuresParam, minutesParam, secondesParam) {
                    this.secondes = this.secondesStock = secondesParam;
                    this.minutes = this.minutesStock = minutesParam;
                    this.heures = this.heuresStock = heuresParam;
                };
                TimerInvert.prototype.reset = function () {
                    this.minutes = this.minutesStock;
                    this.secondes = this.secondesStock;
                    this.heures = this.heuresStock;
                };
                return TimerInvert;
            }());

            //# sourceMappingURL=invertTimer.js.map

            /***/
}),

/***/ 281:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_item_list_item__ = __webpack_require__(200);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var ListPage = (function () {
                function ListPage(navCtrl, navParams) {
                    this.navCtrl = navCtrl;
                    this.navParams = navParams;
                    // If we navigated to this page, we will have an item available as a nav param
                    this.selectedItem = navParams.get('item');
                    // Let's populate this page with some filler content for funzies
                    this.villes = ['Paris', 'Rennes', 'Bordeaux', 'Riom', 'Clermont-Ferrand', 'Amiens',
                        'Strasbourg', 'Toulon', 'Roubaix', 'Dinand'];
                    this.items = [];
                    for (var i = 1; i < this.villes.length; i++) {
                        this.items.push({
                            name: this.villes[i]
                        });
                    }
                }
                ListPage.prototype.itemTapped = function (event, item) {
                    // That's right, we're pushing to ourselves!
                    // Not anymore.
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_item_list_item__["a" /* ListItemPage */], {
                        item: item
                    });
                };
                ListPage.prototype.addItem = function () {
                    alert("Mes excuses, cette fonctionnalité n'est pas implémentée.");
                    // this.navCtrl.push(AddNewElementPage);
                    // Tried, but it doesn't work. :(
                };
                ListPage = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'page-list', template:/*ion-inline-start:"C:\zTemp\app-test\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n    <ion-buttons end>\n        <button (click)="addItem()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.name}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\zTemp\app-test\src\pages\list\list.html"*/
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
                ], ListPage);
                return ListPage;
            }());

            //# sourceMappingURL=list.js.map

            /***/
}),

/***/ 282:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return TwoDigit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            var TwoDigit = (function () {
                function TwoDigit() {
                }
                TwoDigit.prototype.transform = function (value, args) {
                    return this.pad(value, 2, 0);
                };
                TwoDigit.prototype.pad = function (n, width, z) {
                    z = z || '0';
                    n = n + '';
                    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
                };
                TwoDigit = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
                        name: 'twoDigit'
                    })
                ], TwoDigit);
                return TwoDigit;
            }());

            //# sourceMappingURL=two-digit.js.map

            /***/
}),

/***/ 283:
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return MultiTen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            var MultiTen = (function () {
                function MultiTen() {
                }
                MultiTen.prototype.transform = function (value, args) {
                    return this.pad(value, 2, 0);
                };
                MultiTen.prototype.pad = function (n, width, z) {
                    z = z || '0';
                    n = n + '';
                    return n.length >= width ? n : new Array(width - n.length + 1).join(n) + z;
                };
                MultiTen = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
                        name: 'multiTen'
                    })
                ], MultiTen);
                return MultiTen;
            }());

            //# sourceMappingURL=multiplicateur.js.map

            /***/
})

}, [201]);
//# sourceMappingURL=main.js.map