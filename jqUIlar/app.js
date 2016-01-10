System.register(["angular2/platform/browser", "angular2/core", './slider.js'], function(exports_1) {
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
    var browser_1, core_1, slider_js_1;
    var JQUIlar;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slider_js_1_1) {
                slider_js_1 = slider_js_1_1;
            }],
        execute: function() {
            JQUIlar = (function () {
                function JQUIlar(_ngZone) {
                    this._ngZone = _ngZone;
                    this.val = 50;
                }
                JQUIlar.prototype.sliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.val = newVal;
                    });
                };
                JQUIlar.prototype.resetValue = function () {
                    this.val = 50;
                };
                JQUIlar = __decorate([
                    core_1.Component({
                        selector: 'jquilar',
                    }),
                    core_1.View({
                        template: "\n    <div class=\"gold big\">Model value: {{val}}</div>\n    <jquilar-slider id=\"slider1\" [val]=\"val\" [step]=\"2\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider id=\"slider2\" [orientation]=\"'vertical'\" [val]=\"val\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider id=\"slider3\" [val]=\"val\" (stop)=\"sliderStopped($event)\"></jquilar-slider>\n    <br/>\n    <button class=\"whiteongold\" role=\"button\" (click)=\"resetValue()\">Reset model value to 50</button>\n  ",
                        directives: [slider_js_1.jqUIlarSlider]
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