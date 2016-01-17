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
                JQUIlar.prototype.resetSlider = function () {
                    this.sliderVal = 50;
                };
                JQUIlar.prototype.resetDate = function () {
                    this.dateVal = undefined;
                };
                JQUIlar = __decorate([
                    core_1.Component({
                        selector: 'jquilar',
                    }),
                    core_1.View({
                        template: "\n    <br/>\n    <h2 class=\"section-header\">\n      Slider\n    </h2>\n    <div class=\"muted big\">Slider object value: {{sliderVal}}</div>\n    <jquilar-slider id=\"slider1\" [val]=\"sliderVal\" [step]=\"2\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider id=\"slider2\" [orientation]=\"'vertical'\" [val]=\"sliderVal\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider id=\"slider3\" [val]=\"sliderVal\" (stop)=\"sliderStopped($event)\"></jquilar-slider>\n    <br/>\n    <button class=\"whiteonslategrey\" role=\"button\" (click)=\"resetSlider()\">Reset slider object</button><br/><br/>\n    <h2 class=\"section-header\">\n      Date Picker\n    </h2>\n    <jquilar-datepicker [val]=\"dateVal\" [changeMonth]=\"true\" [changeYear]=\"true\" (select)=\"dateSelected($event)\" class=\"gold\"></jquilar-datepicker>\n    <jquilar-datepicker [val]=\"dateVal\" (select)=\"dateSelected($event)\" class=\"gold\"></jquilar-datepicker><br/><br/>\n    <button class=\"whiteonslategrey\" role=\"button\" (click)=\"resetDate()\">Reset date object</button><br/><br/>\n  ",
                        directives: [jquilar_js_1.jqUIlarSlider, jquilar_js_1.jqUIlarDatePicker]
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