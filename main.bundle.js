webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/CSS/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  \r\n\r\n  \r\n  .app-header \r\n  {\r\n\t  background-color: black; /* #0D47A1; */\r\n  }\r\n  \r\n  .app-footer \r\n  {\r\n\t  background-color: black;\r\n  }\r\n  \r\n  .main-container \r\n  {\r\n\t background-color:lavender; \r\n\t min-height:520px\r\n  }\r\n\r\n    \r\n\r\n\r\n.circle  { \r\n  padding: 10px 25px 10px 10px;\r\n  \r\n  height: -4px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.nopadding {\r\n  padding: 0 !important;\r\n  margin: 6px !important;\r\n}\r\n\r\n.Red\r\n{\r\n  background-color: red;\r\n}\r\n\r\n.Green\r\n{\r\n  background-color: green;\r\n}\r\n\r\n.Amber\r\n{\r\n  background-color: #FFC200 ;\r\n}\r\n\r\n\r\n.status-padding\r\n{\r\n  margin-left: 10px;\r\n}\r\n\r\n.btn-separator {\r\n  border-right: 1px solid gray;\r\n}\r\n\r\n\r\n.box-content {\r\n  display: inline-block;\r\n  width: 30%;\r\n  \r\n}\r\n\r\n.bottom {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.right {\r\n  border-right: 1px solid #ccc;\r\n}\r\n\r\n\r\n.circle-small  { \r\n  \r\n  padding: 1px 11px 2px 8px;\r\n  \r\n  height: -4px;\r\n  border-radius: 50%;\r\n}\r\n\r\n #pichartdiv {\r\n /* width: 400px; */\r\n  height: 200px;\r\n  margin: 0 auto;\r\n  /*border: 5px dotted #ccc;*/\r\n}\r\n\r\n#chartdiv {\r\n /* width: 300px;*/\r\n  height: 150px;\r\n  margin: 0 auto;  \r\n}\r\n\r\n@media  (min-width:786px) \r\n {\r\n    .chart-panel .panel \r\n  {\r\n   /* width: 170px !important; */\r\n  }\r\n }\r\n.status-chart \r\n{\r\n  height: 230px;\r\n\r\n}\r\n\r\n.margin-left { margin-left: 18px !important; }\r\n\r\n.plant-alert ul li { list-style: none; line-height: 30px; }\r\n\r\n.plant-alert  .critical-alert span { color: #FF0000 } \r\n\r\n.plant-alert  .normal-alert span { color: #008000} \r\n\r\n.plant-alert  .warning-alert span {color: #FFC200 } \r\n\r\n\r\n.panel-footer, .panel-primary .panel-heading \r\n { background-color: #BDBDBD !important ;\r\n   border-color: #BDBDBD !important;\r\n }\r\n .panel-primary {\r\n  border-color: #BDBDBD !important;\r\n  \r\n}\r\n\r\n#app-header h1,h2 { margin-top: 0;margin-bottom: 0 }\r\n\r\n.plant-alert ul { margin-left: -36px; }\r\n\r\n.body-container { padding-left:60px; }\r\n\r\n\r\n/* style for popup */\r\n\r\n\r\n.popover-content {\r\n   \r\n  min-width: 250px;\r\n  padding-left: 25px;\r\n  \r\n   \r\n}\r\n\r\n.popover-content ul { list-style: none; margin-left: -50px; }\r\n\r\n.popover-content ul li:nth-child(odd) { background: #ECF0F1; }\r\n\r\n.popover-content ul li {line-height: 30px;}\r\n\r\n.popover-content ul li span.circle-small {  width: 140px; }\r\n\r\n.popover-title {\r\n  background-color: #BDBDBD !important; \r\n  color: #FFFFFF; \r\n  font-size: 14px;\r\n  text-align:center;\r\n} \r\n\r\n \r\na[title='JavaScript charts'] \r\n{\r\ndisplay:none;\r\n}\r\n/* style for popup */\r\n\r\n.plant-notification .panel-body {min-height:  229px }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Plant/PlantComponent.html":
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"panel-inline-group  \">\r\n       \r\n\r\n   <div class=\"col-md-11  panel panel-primary margin-left \" style='padding:12px;'>\r\n           \r\n    <!-- display station list -->\r\n        <stations  ></stations>         \r\n   </div>\r\n     \r\n <div class='chart-panel col-md-12 ' >\r\n\r\n            <!-- Overall Motor Status -->\r\n          <div class=\"col-md-4  panel panel-primary nopadding\" >              \r\n               <motor-status-chart ></motor-status-chart>              \r\n          </div> \r\n\r\n            <!-- Overall Station Status -->\r\n          <div class=\"col-md-4  panel panel-primary nopadding\" >   \r\n                <pi-chart></pi-chart>           \r\n          </div>\r\n\r\n            <!-- Plant Notifications -->\r\n          <div class=\"col-md-3  panel panel-primary nopadding plant-alert\" >   \r\n                <notifications></notifications>\r\n          </div>\r\n          \r\n      \r\n       <div class=\"col-md-11  panel panel-primary  nopadding  \"  >            \r\n                <span class=\"col-md-3 box-content right   \"><small><strong>Risk Index(RI)</strong> scale :1-5</small> </span>  \r\n                 \r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Green  \"></span>  \r\n                <span >Normal</span>  \r\n                </div>\r\n\r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Red \"></span>  \r\n                <span>Critical</span>\r\n                </div>\r\n\r\n                <div class=\"col-md-2\">\r\n                <span class=\"circle-small Amber \"></span>  \r\n                <span>Warning</span>\r\n            </div>\r\n       </div>\r\n\r\n\r\n </div>\r\n       \r\n      \r\n\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/Components/Plant/PlantComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlantComponent = (function () {
    function PlantComponent() {
    }
    PlantComponent.prototype.ngOnInit = function () {
    };
    return PlantComponent;
}());
PlantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'PlantComponent',
        template: __webpack_require__("../../../../../src/app/Components/Plant/PlantComponent.html"),
    })
], PlantComponent);

//# sourceMappingURL=PlantComponent.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Plant/hclplantdashboard.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n \n  \n \n<!-- <li *ngFor=\" let plant of plantlist\" (click)=\"Onselect(hero)\" [class.selected]=\"hero === selectedHero\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n</li>\n--> \n<div >\n  \n    <PlantComponent></PlantComponent>\n   \n    \n   \n     \n</div>\n\n "

/***/ }),

/***/ "../../../../../src/app/Components/Plant/hclplantdashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hclplantdashboard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var hclplantdashboard = (function () {
    function hclplantdashboard() {
    }
    hclplantdashboard.prototype.ngOnInit = function () {
    };
    return hclplantdashboard;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], hclplantdashboard.prototype, "currentPlantId", void 0);
hclplantdashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'hclplantdashboard',
        template: __webpack_require__("../../../../../src/app/Components/Plant/hclplantdashboard.html")
    }),
    __metadata("design:paramtypes", [])
], hclplantdashboard);

//# sourceMappingURL=hclplantdashboard.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Station/StationComponent.html":
/***/ (function(module, exports) {

module.exports = "  <div>\r\n\r\n    Rajendra\r\n\r\n    <a routerLink=\"/plant\"  >clilck me </a>\r\n\r\n\r\n\r\n    <a  data-toggle=\"popover\" title=\"\" data-placement=\"\" data-content=\"\"> \r\n\r\n        dddddd\r\n    </a>   \r\n        \r\n \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Components/Station/StationComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__ = __webpack_require__("../../../../../src/app/Services/PlantService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StationComponent = (function () {
    function StationComponent(ps) {
        this.ps = ps;
    }
    StationComponent.prototype.ngOnInit = function () {
        if (this.currentStationId == null) {
            this.currentStationId = 1;
        }
        //  this.GetStationListForPlant();         
    };
    return StationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StationComponent.prototype, "currentStationId", void 0);
StationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'StationComponent',
        template: __webpack_require__("../../../../../src/app/Components/Station/StationComponent.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__["a" /* PlantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_PlantService__["a" /* PlantService */]) === "function" && _a || Object])
], StationComponent);

var _a;
//# sourceMappingURL=StationComponent.js.map

/***/ }),

/***/ "../../../../../src/app/Components/base-chart/base-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseChartComponent = BaseChartComponent_1 = (function () {
    function BaseChartComponent() {
        console.log("Here is GoogleChartComponent");
    }
    BaseChartComponent.prototype.getGoogle = function () {
        return google;
    };
    BaseChartComponent.prototype.ngOnInit = function () {
        if (!BaseChartComponent_1.googleLoaded) {
            BaseChartComponent_1.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'bar'] });
        }
        // google.charts.setOnLoadCallback(() => this.drawGraph());
    };
    BaseChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph base class!!!! ");
    };
    BaseChartComponent.prototype.createBarChart = function (element) {
        return new google.visualization.PieChart(element);
    };
    BaseChartComponent.prototype.createDataTable = function (array) {
        return google.visualization.arrayToDataTable(array);
    };
    return BaseChartComponent;
}());
BaseChartComponent = BaseChartComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'chart',
        template: ""
    }),
    __metadata("design:paramtypes", [])
], BaseChartComponent);

var BaseChartComponent_1;
//# sourceMappingURL=base-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class='overall-motor-status'>\n      <div class=\"panel-heading text-center\">Overall Motor Status  </div>\n      <div class=\"panel-body status-chart\">\n          <span id=\"donutChart\" ></span>    \n      </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/base-chart/base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorStatusChartComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotorStatusChartComponent = (function (_super) {
    __extends(MotorStatusChartComponent, _super);
    function MotorStatusChartComponent(ss) {
        var _this = _super.call(this) || this;
        _this.ss = ss;
        _this.getStationStatus();
        return _this;
    }
    MotorStatusChartComponent.prototype.getStationStatus = function () {
        var _this = this;
        this.ss.getOverAllMotorStatus(2, -1).subscribe(function (result) { _this.v = result; _this.drawGraph(); });
    };
    MotorStatusChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph Evolution...");
        /* var v = [
          ['StationHealth', 'NumOfStation'],
          ['Green',     500],
          ['Amber',     200],
          ['Red',  20]
        ]
        */
        this.data = this.createDataTable(this.v);
        this.options = {
            /*title: 'Evolution, 2014', */
            chartArea: { left: 0, top: 0, width: "1000", height: "500" },
            hAxis: {
                title: 'Value in USD',
                minValue: 0
            },
            'legend': 'none',
            vAxis: {
                title: 'Members'
            },
            "colors": ["#008000", "#FFC200", "#FF0000"],
            'width': 300,
            'height': 200,
            pieHole: 0.4
        };
        this.chart = this.createBarChart(document.getElementById('donutChart'));
        this.chart.draw(this.data, this.options);
    };
    return MotorStatusChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__["a" /* BaseChartComponent */]));
MotorStatusChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'motor-status-chart',
        template: __webpack_require__("../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_MotorService__["a" /* MotorService */]) === "function" && _a || Object])
], MotorStatusChartComponent);

var _a;
//# sourceMappingURL=motor-status-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='plant-notification'>\n<div class=\"panel-heading text-center \">Plant Notification  </div>\n<div class=\"panel-body\">\n   \n      <ul>\n          <li class=\"{{notification['Status']}}-alert\"  *ngFor=\" let notification of notificationlist\" >\n              <span class=\"glyphicon glyphicon-alert\"></span>  \n              <a href=\"#\" >{{notification['Subject']}}</a>\n          </li>\n            <li class='critical-alert'>\n                  <span class=\"glyphicon glyphicon-alert\"></span>  \n                <a href=\"#\" >Station A Critical Alert</a>\n          </li>\n          <li class='warning-alert'>\n                 <span class=\"glyphicon glyphicon-alert\"></span>  \n                 <a href=\"#\" >Station B Warning Alert</a>\n           </li>\n           <li class='normal-alert'>\n            <span class=\"glyphicon glyphicon-alert\"></span>  \n            <a href=\"#\"> Station C Motor going Normal</a>\n      </li>\n      \n            \n\n                                \n      </ul>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/Components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__ = __webpack_require__("../../../../../src/app/Services/NotificationService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(ss) {
        this.ss = ss;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        if (this.currentPlantId == null) {
            this.currentPlantId = 2;
        }
        this.GetStationListForPlant();
    };
    NotificationsComponent.prototype.GetStationListForPlant = function () {
        var _this = this;
        this.ss.GetNotificationList(this.currentPlantId, -1, -1).subscribe(function (data) { return _this.notificationlist = data; });
    };
    return NotificationsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], NotificationsComponent.prototype, "currentPlantId", void 0);
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'notifications',
        template: __webpack_require__("../../../../../src/app/Components/notifications/notifications.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_NotificationService__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/pi-chart/pi-chart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel-heading text-center\">Overall Station Status  </div>\n<div class=\"panel-body status-chart\">\n  <span id=\"piechart\" ></span>    \n       \n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/pi-chart/pi-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/base-chart/base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiChartComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PiChartComponent = (function (_super) {
    __extends(PiChartComponent, _super);
    function PiChartComponent(ss) {
        var _this = _super.call(this) || this;
        _this.ss = ss;
        _this.getStationStatus();
        return _this;
    }
    PiChartComponent.prototype.getStationStatus = function () {
        var _this = this;
        this.ss.getStationStatus(2).subscribe(function (result) {
            _this.v = result;
            _this.drawGraph();
        });
    };
    PiChartComponent.prototype.drawGraph = function () {
        console.log("DrawGraph ...");
        /*var v = [
          ['StationHealth', 'NumOfStation'],
          ['Green',     500],
          ['Amber',     200],
          ['Red',  20]
        ]
       */
        this.data = this.createDataTable(this.v);
        this.options = {
            /*title: 'Evolution, 2014', */
            chartArea: { left: 0, top: 0, width: "1000", height: "500" },
            hAxis: {
                title: 'Value in USD',
                minValue: 0
            },
            is3D: true,
            'legend': 'none',
            vAxis: {
                title: 'Members'
            },
            "colors": ["#008000", "#FFC200", "#FF0000"],
            'width': 300,
            'height': 200,
        };
        this.chart = this.createBarChart(document.getElementById('piechart'));
        this.chart.draw(this.data, this.options);
    };
    return PiChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_chart_base_chart_component__["a" /* BaseChartComponent */]));
PiChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: '<pi-chart>',
        template: __webpack_require__("../../../../../src/app/Components/pi-chart/pi-chart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_StationService__["a" /* StationService */]) === "function" && _a || Object])
], PiChartComponent);

var _a;
//# sourceMappingURL=pi-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/Services/MotorService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var MotorService = MotorService_1 = (function () {
    function MotorService(http) {
        this.http = http;
        this.MotorUrl = 'http://hclmotorstorageaccount.table.core.windows.net:80/Motors?st=2017-09-05T06%3A51%3A00Z&se=2018-05-31T06%3A51%3A00Z&sp=raud&sv=2016-05-31&tn=motors&sig=PBk%2Fro6cKB7%2F5rqpJxOId81P6jwyYglcgZZFnerjidw%3D';
    }
    // Return the instance of the service
    MotorService.getInstance = function (http) {
        if (MotorService_1.serviceInstance === null) {
            MotorService_1.serviceInstance = new MotorService_1(http);
        }
        return MotorService_1.serviceInstance;
    };
    MotorService.prototype.GetMotorList = function (plantid, stationId) {
        var _this = this;
        return this.http.get(this.MotorUrl)
            .map(function (res) { return _this.GetJsonData(res, plantid, stationId); });
    };
    MotorService.prototype.getOverAllMotorStatus = function (plantid, stationId) {
        var _this = this;
        return this.http.get(this.MotorUrl)
            .map(function (res) { return _this.CalculateMotorStatus(res, plantid, stationId); });
    };
    MotorService.prototype.GetJsonData = function (xmldata, plantid, stationId) {
        var jsonobject = xmldata.json()['value']; // [0] ['StationObeject'];
        var finalData = "[";
        if (jsonobject && jsonobject !== "null" && jsonobject !== "undefined") {
            for (var i = 0; i < jsonobject.length; i++) {
                //  let stObject= JSON.parse( jsonobject[i]['MotorObeject']);
                var status = jsonobject[i]['Status'];
                var RI = jsonobject[i]['RI'];
                var StationId = jsonobject[i]['StationId'];
                var MotorId = jsonobject[i]['Id'];
                var PlantId = jsonobject[i]['PlantId'];
                /*	if(( stObject && stObject !== "null" && stObject !== "undefined" ) )
                    { */
                finalData = finalData + '{"Id":' + MotorId + ', "Name":"' + "stObject.Name" + '", "StationName":"' + "stObject.StationName" + '", "SerialNumber":"' + "stObject.SerialNumber";
                finalData = finalData + '","PlantId" :' + PlantId + ', "Status":"' + status + '", "Location":"' + "stObject.Location";
                finalData = finalData + '","RI":' + RI + ', "Description":"' + "stObject.Description" + '", "StationId":' + StationId + '  }';
                if (i < jsonobject.length - 1) {
                    finalData = finalData + ",";
                }
                /*   }*/
                // alert(finalData);
            }
            finalData = finalData + "]";
        }
        var filterData = JSON.parse(finalData);
        if (plantid != -1)
            filterData = filterData.filter(function (x) { return x.PlantId == plantid; });
        if (stationId != -1)
            filterData = filterData.filter(function (x) { return x.StationId == stationId; });
        return filterData;
    };
    /*
     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    */
    MotorService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    MotorService.prototype.CalculateMotorStatus = function (res, plantid, stationId) {
        var stList = this.GetJsonData(res, plantid, stationId);
        var Green = stList.filter(function (x) { return x.Status == 'Green'; }).length;
        var Red = stList.filter(function (x) { return x.Status == 'Red'; }).length;
        var Amber = stList.filter(function (x) { return x.Status == 'Amber'; }).length;
        var result = [
            ['StationHealth', 'NumOfStation'],
            ['Green', Green],
            ['Amber', Amber],
            ['Red', Red]
        ];
        return result;
    };
    return MotorService;
}());
MotorService.serviceInstance = null;
MotorService = MotorService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MotorService);

var MotorService_1, _a;
//# sourceMappingURL=MotorService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/NotificationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var NotificationService = NotificationService_1 = (function () {
    function NotificationService(http) {
        this.http = http;
        this.NUrl = 'http://hclmotorstorageaccount.table.core.windows.net:80/Notifications?st=2017-09-05T16%3A18%3A00Z&se=2018-05-31T16%3A18%3A00Z&sp=raud&sv=2016-05-31&tn=notifications&sig=Zwc7HHmpHBdWoFgSU0mdNd8w8jLgigVKdAqijMwfGqQ%3D';
    }
    // Return the instance of the service
    NotificationService.getInstance = function (http) {
        if (NotificationService_1.serviceInstance === null) {
            NotificationService_1.serviceInstance = new NotificationService_1(http);
        }
        return NotificationService_1.serviceInstance;
    };
    NotificationService.prototype.GetNotificationList = function (plantid, stationId, motorId) {
        var _this = this;
        return this.http.get(this.NUrl)
            .map(function (res) { return _this.GetJsonData(res, plantid, stationId); });
    };
    NotificationService.prototype.GetJsonData = function (xmldata, plantid, stationId) {
        var jsonobject = xmldata.json()['value']; // [0] ['StationObeject'];
        if (jsonobject && jsonobject !== "null" && jsonobject !== "undefined") {
            for (var i = 0; i < jsonobject.length; i++) {
                //  alert(jsonobject[i]);
            }
        }
        return jsonobject;
        /* let finalData="[";

         if( jsonobject && jsonobject !== "null" && jsonobject !== "undefined" )
            {
                for(let i=0 ;i <jsonobject.length;i++ )
                {
                    
                  //  let stObject= JSON.parse( jsonobject[i]['MotorObeject']);
                   
                    let Status= jsonobject[i]['Status'];
                    let Id= jsonobject[i]['Id'];
                    let StationId= jsonobject[i]['StationId'];
                    let MotorId= jsonobject[i]['Id'];
                    let PlantId= jsonobject[i]['PlantId'];
                    let Subject= jsonobject[i]['Subject'];
                    let Content= jsonobject[i]['Content'];
                   
                /*	if(( stObject && stObject !== "null" && stObject !== "undefined" ) )
                
                        
                     
        finalData =finalData+ '{"MotorId":'+ MotorId + '","PlantId" :'+PlantId;
        finalData =finalData+', "Status":"'+Status + '","StationId" :'+StationId;
        finalData =finalData+'","Id":'+ Id+', "Description":"'+ "stObject.Description"+'", "StationId":'+StationId +'  }';
        
                            if(i < jsonobject.length-1 )
                                {
                                    finalData =finalData+",";
                                }
              
                
               // alert(finalData);
                    }
                finalData =finalData+"]";
            }
            
            
            let filterData=JSON.parse(finalData);

            if(plantid!=-1)
                filterData= filterData.filter(x=>x.PlantId==plantid);

            if(stationId!=-1)
                filterData= filterData.filter(x=>x.StationId==stationId)

            return filterData;
            */
    };
    /*
     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    */
    NotificationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    return NotificationService;
}());
NotificationService.serviceInstance = null;
NotificationService = NotificationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NotificationService);

var NotificationService_1, _a;
//# sourceMappingURL=NotificationService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/PlantService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var PlantService = (function () {
    function PlantService(http) {
        this.http = http;
        this.PlantUrl = '/plantlist.json';
        this.PlantUrl2 = 'https://hclmotorstorageaccount.table.core.windows.net/Stations(PartitionKey="pk1",RowKey="rk1")?$select=StationObeject&st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';
    }
    PlantService.prototype.GetPlantAsync = function () {
        return this.http.get(this.PlantUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PlantService.prototype.GetPlantById = function (id) {
        var _this = this;
        return this.http.get(this.PlantUrl)
            .toPromise()
            .then(function (response) { return _this.extractData(response, id); })
            .catch(this.handleError);
    };
    PlantService.prototype.extractData = function (res, id) {
        var data = res.json().find(function (x) { return x.Id == id; });
        return data;
    };
    PlantService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PlantService;
}());
PlantService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PlantService);

var _a;
//# sourceMappingURL=PlantService.js.map

/***/ }),

/***/ "../../../../../src/app/Services/StationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//the injectable attribute to generate the metadata to make the service available through 
//Dependency Injustion(DI) in other modules.
var StationService = StationService_1 = (function () {
    function StationService(http) {
        this.http = http;
        // private StatiotUrl='/stationlist.json'
        //private StatiotUrl='https://hclmotorstorageaccount.table.core.windows.net/Stations?$select=StationObeject&st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';
        this.StatiotUrl = 'https://hclmotorstorageaccount.table.core.windows.net/Stations?st=2017-08-30T08%3A15%3A00Z&se=2017-10-21T08%3A15%3A00Z&sp=raud&sv=2016-05-31&tn=stations&sig=4GLyLYg3YBSZqR5TydJ5nK7QqzuZRc6x9%2B52RFih%2B9M%3D';
    }
    // Return the instance of the service
    StationService.getInstance = function (http) {
        if (StationService_1.serviceInstance === null) {
            StationService_1.serviceInstance = new StationService_1(http);
        }
        return StationService_1.serviceInstance;
    };
    StationService.prototype.GetStationListforPlant = function (plantid) {
        var _this = this;
        return this.http.get(this.StatiotUrl)
            .map(function (res) { return _this.GetJsonData(res, plantid); });
    };
    StationService.prototype.getStationStatus = function (plantid) {
        var _this = this;
        return this.http.get(this.StatiotUrl)
            .map(function (res) { return _this.CalculateMotorStatus(res, plantid); });
    };
    StationService.prototype.GetJsonData = function (xmldata, plantid) {
        var jsonobject = xmldata.json()['value'];
        var finalData = "[";
        if (jsonobject && jsonobject !== "null" && jsonobject !== "undefined") {
            for (var i = 0; i < jsonobject.length; i++) {
                var stObject = JSON.parse(jsonobject[i]['StationObeject']);
                var status = jsonobject[i]['Status'];
                var RI = jsonobject[i]['RI'];
                var StationId = jsonobject[i]['StationId'];
                if ((stObject && stObject !== "null" && stObject !== "undefined")) {
                    /*	finalData =finalData+ stObject;
                        */
                    //		finalData =finalData+ 	'{"Id": 6, "StationName": "Station A","PlantId" :"2", "Status":"Green","RI":"4" }';		
                    finalData = finalData + '{"Id":' + StationId + ', "StationName":"' + stObject.StationName;
                    finalData = finalData + '","PlantId" :' + stObject.PlantId + ', "Status":"' + status;
                    finalData = finalData + '","RI":' + RI + ' }';
                    if (i < jsonobject.length - 1) {
                        finalData = finalData + ",";
                    }
                }
            }
            finalData = finalData + "]";
        }
        return JSON.parse(finalData).filter(function (x) { return x.PlantId == plantid; });
    };
    /*
     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    */
    StationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return null;
    };
    StationService.prototype.CalculateMotorStatus = function (res, plantid) {
        var stList = this.GetJsonData(res, plantid);
        var Green = stList.filter(function (x) { return x.Status == 'Green'; }).length;
        var Red = stList.filter(function (x) { return x.Status == 'Red'; }).length;
        var Amber = stList.filter(function (x) { return x.Status == 'Amber'; }).length;
        var result = [
            ['StationHealth', 'NumOfStation'],
            ['Green', Green],
            ['Amber', Amber],
            ['Red', Red]
        ];
        return result;
    };
    return StationService;
}());
StationService.serviceInstance = null;
StationService = StationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StationService);

var StationService_1, _a;
//# sourceMappingURL=StationService.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n \n \n <div class=\"container\">\n \n    \n  \n     <div id='app-header' class=\"panel panel-primary \">\n          <div class=\"panel-heading bg-warning\"> \n              <a    routerLink=\"/plant\"   >\n        <h2 class='text-center '>{{title}}</h2></a>\n        </div>    \n\n        <div class=\"panel-body body-container\" style=\"backGround-color:#e6ffff\" >\n           \n            <router-outlet></router-outlet>\n        </div>   \n\n        <div id='footer' class=\"panel-footer\">\n            <div >\n                    \n            </div>    \n\n                </div>\n\n\n     </div>\n\n     \n  \n  \n  \n  \n   \n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Plant Health Dashboard';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/CSS/app.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
    })
    // Appcomponent class implmenting an interface 'OnInit' having one method 'ngOnInit'
    // learn more about hooks  : https://angular.io/guide/lifecycle-hooks 
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Plant_hclplantdashboard__ = __webpack_require__("../../../../../src/app/Components/Plant/hclplantdashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_Plant_PlantComponent__ = __webpack_require__("../../../../../src/app/Components/Plant/PlantComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_Station_StationComponent__ = __webpack_require__("../../../../../src/app/Components/Station/StationComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Services_PlantService__ = __webpack_require__("../../../../../src/app/Services/PlantService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_MotorService__ = __webpack_require__("../../../../../src/app/Services/MotorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Services_NotificationService__ = __webpack_require__("../../../../../src/app/Services/NotificationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Components_base_chart_base_chart_component__ = __webpack_require__("../../../../../src/app/Components/base-chart/base-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Components_pi_chart_pi_chart_component__ = __webpack_require__("../../../../../src/app/Components/pi-chart/pi-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Components_motor_status_chart_motor_status_chart_component__ = __webpack_require__("../../../../../src/app/Components/motor-status-chart/motor-status-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Components_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/Components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_stationlist_stationlist_component__ = __webpack_require__("../../../../../src/app/components/stationlist/stationlist.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: 'plant',
        component: __WEBPACK_IMPORTED_MODULE_6__Components_Plant_hclplantdashboard__["a" /* hclplantdashboard */],
        data: {}
    },
    { path: '',
        redirectTo: '/plant',
        pathMatch: 'full'
    },
    { path: 'station/:id', component: __WEBPACK_IMPORTED_MODULE_8__Components_Station_StationComponent__["a" /* StationComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Components_Plant_hclplantdashboard__["a" /* hclplantdashboard */],
            __WEBPACK_IMPORTED_MODULE_7__Components_Plant_PlantComponent__["a" /* PlantComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Components_Station_StationComponent__["a" /* StationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__Components_base_chart_base_chart_component__["a" /* BaseChartComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Components_pi_chart_pi_chart_component__["a" /* PiChartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__Components_motor_status_chart_motor_status_chart_component__["a" /* MotorStatusChartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__Components_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_stationlist_stationlist_component__["a" /* StationlistComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
            /*	 AdBannerComponent,
                 HeroJobAdComponent,
                 HeroProfileComponent,
                 AdDirective,*/
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__Services_PlantService__["a" /* PlantService */], __WEBPACK_IMPORTED_MODULE_10__Services_StationService__["a" /* StationService */], __WEBPACK_IMPORTED_MODULE_12__Services_NotificationService__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_11__Services_MotorService__["a" /* MotorService */], { provide: __WEBPACK_IMPORTED_MODULE_13__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_13__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/stationlist/stationlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stationlist\" >                 \n    <div class=\"panel panel-default col-md-2 nopadding scrollItem \"   id={{station.Id}} *ngFor=\" let station of stationlist\"  >\n \n   <div  data-toggle=\"popover\" title=\"\" data-placement=\"\" data-content=\"\">    \n            \n            \n           <a [routerLink]=\"['/station', station.Id]\" >\n             <div class=\"panel-heading text-center\">  {{station.StationName}}</div>\n           </a>\n      <div class=\"panel-body\">\n            <span class=\"circle {{station.Status}} \"></span>  \n            <span class='status-padding ' > RI : {{station.RI}} </span>\n\n\n      </div>\n           \n      <div class=\"panel-footer\"></div>   \n</div>    \n   \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/stationlist/stationlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_StationService__ = __webpack_require__("../../../../../src/app/Services/StationService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StationlistComponent = (function () {
    function StationlistComponent(ss) {
        this.ss = ss;
    }
    StationlistComponent.prototype.ngOnInit = function () {
        if (this.currentPlantId == null) {
            this.currentPlantId = 2;
        }
        this.GetStationListForPlant();
    };
    StationlistComponent.prototype.GetStationListForPlant = function () {
        var _this = this;
        this.ss.GetStationListforPlant(this.currentPlantId).subscribe(function (data) { return _this.stationlist = data; });
    };
    return StationlistComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StationlistComponent.prototype, "currentPlantId", void 0);
StationlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'stations',
        template: __webpack_require__("../../../../../src/app/components/stationlist/stationlist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_StationService__["a" /* StationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_StationService__["a" /* StationService */]) === "function" && _a || Object])
], StationlistComponent);

var _a;
//# sourceMappingURL=stationlist.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map