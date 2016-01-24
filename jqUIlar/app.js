System.register(["angular2/platform/browser", "angular2/core", './jquilar.js'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, jquilar_js_1;
    var JQUIlar;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jquilar_js_1_1) {
                jquilar_js_1 = jquilar_js_1_1;
            }],
        execute: function() {
            JQUIlar = (function () {
                function JQUIlar(_ngZone) {
                    this._ngZone = _ngZone;
                    this.sliderVal = 50;
                    this.dateVal = undefined; // or something like "01/10/2015"
                    this.progressVal = 50;
                    this.sortableList = ['Apple', 'Banana', 'Cherry'];
                }
                JQUIlar.prototype.sliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.sliderVal = newVal;
                    });
                };
                JQUIlar.prototype.dateSelected = function (date) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.dateVal = date;
                    });
                };
                JQUIlar.prototype.progressChanged = function (progress) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.progressVal = progress;
                    });
                };
                JQUIlar.prototype.resetSlider = function () {
                    this.sliderVal = 50;
                };
                JQUIlar.prototype.resetDate = function () {
                    this.dateVal = undefined;
                };
                JQUIlar.prototype.decProgressBar = function () {
                    if (this.progressVal > 9) {
                        this.progressVal -= 10;
                    }
                };
                JQUIlar.prototype.resetProgressBar = function () {
                    this.progressVal = 50;
                };
                JQUIlar.prototype.incProgressBar = function () {
                    if (this.progressVal < 91) {
                        this.progressVal += 10;
                    }
                };
                JQUIlar.prototype.listSorted = function (x) {
                    var _this = this;
                    var y = $(x.target).find('li');
                    var tempArray = [];
                    for (var i = 0; i < y.length; i++) {
                        tempArray.push(y[i].textContent);
                    }
                    this._ngZone.run(function () {
                        _this.sortableList = tempArray;
                    });
                };
                JQUIlar.prototype.veggiesSortableList = function () {
                    this.sortableList = ['Asparagus', 'Broccoli', 'Celery'];
                };
                JQUIlar.prototype.fruitsSortableList = function () {
                    this.sortableList = ['Apple', 'Banana', 'Cherry'];
                };
                JQUIlar = __decorate([
                    core_1.Component({
                        selector: 'jquilar',
                    }),
                    core_1.View({
                        template: "\n    <br/>\n    <div class=\"section-header\">\n      <span>Slider</span><p class=\"code-snippet\">\n&lt;jquilar-slider [valueObj]=&quot;some_val&quot; (stop)=&quot;func($event)&quot;&gt;&lt;/jquilar-slider&gt;/jquilar-slider&gt;</p>\n    </div>\n    <div class=\"muted big\">Current value: {{sliderVal}}</div>\n    <jquilar-slider id=\"slider1\" [value]=\"sliderVal\" [step]=\"2\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider id=\"slider2\" [orientation]=\"'vertical'\" [value]=\"sliderVal\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider id=\"slider3\" [value]=\"sliderVal\" (stop)=\"sliderStopped($event)\"></jquilar-slider>\n    <br/>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"resetSlider()\">Reset data</button><br/><br/>\n    <div class=\"section-header\">\n      <span>Date Picker</span><p class=\"code-snippet\">&lt;jquilar-datepicker [value]=&quot;dateObj&quot; (select)=&quot;func($event)&quot;&gt;&lt;/jquilar-datepicker&gt;</p>\n    </div>\n    <jquilar-datepicker [value]=\"dateVal\" [changeMonth]=\"true\" [changeYear]=\"true\" (select)=\"dateSelected($event)\" class=\"gold\"></jquilar-datepicker>\n    <jquilar-datepicker [value]=\"dateVal\" (select)=\"dateSelected($event)\" class=\"gold\"></jquilar-datepicker><br/><br/>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"resetDate()\">Reset data</button><br/><br/>\n    <div class=\"section-header\">\n      <span>Progress Bar</span><p class=\"code-snippet\">&lt;jquilar-progressbar [value]=&quot;progressVal&quot; (change)=&quot;progressChanged($event)&quot; class=&quot;gold&quot;&gt;&lt;/jquilar-progressbar&gt;</p>\n    </div>\n    <div class=\"muted big\">Current value: {{progressVal}}</div>\n    <jquilar-progressbar [value]=\"progressVal\" (change)=\"progressChanged($event)\" class=\"gold\"></jquilar-progressbar><br/>\n    <jquilar-progressbar [value]=\"progressVal\" (select)=\"progressChanged($event)\" class=\"gold\"></jquilar-progressbar><br/>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"decProgressBar()\">-10</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"resetProgressBar()\">Reset data</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"incProgressBar()\">+10</button><br/><br/>\n    <div class=\"section-header\">\n      <span>Sortable</span><p class=\"code-snippet\">&lt;jquilar-sortable [list]=&quot;myList&quot; (sort)=&quot;func($event)&quot;&gt;&lt;/jquilar-sortable&gt;</p>\n    </div>\n    <div class=\"muted big\">Current value: {{sortableList}}</div>\n    <jquilar-sortable [list]=\"sortableList\" (sort)=\"listSorted($event)\" class=\"gold\"></jquilar-sortable>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"fruitsSortableList()\">Reset data</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"veggiesSortableList()\">Veggies</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"fruitsSortableList()\">Fruits</button><br/><br/>\n  ",
                        directives: [jquilar_js_1.jqUIlarSlider, jquilar_js_1.jqUIlarDatePicker, jquilar_js_1.jqUIlarProgressBar, jquilar_js_1.jqUIlarSortable]
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], JQUIlar);
                return JQUIlar;
            }());
            browser_1.bootstrap(JQUIlar);
        }
    }
});
//# sourceMappingURL=app.js.map