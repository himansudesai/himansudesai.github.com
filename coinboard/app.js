System.register(["angular2/platform/browser", "angular2/core", './jquilar.js', './dashboard_widget.js'], function(exports_1) {
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
    var browser_1, core_1, jquilar_js_1, dashboard_widget_js_1;
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
            },
            function (dashboard_widget_js_1_1) {
                dashboard_widget_js_1 = dashboard_widget_js_1_1;
            }],
        execute: function() {
            JQUIlar = (function () {
                function JQUIlar(_ngZone) {
                    this._ngZone = _ngZone;
                    this.transactionScoreWeight = 50;
                    this.repossesionWeight = 50;
                    this.multipleAddressesWeight = 50;
                    this.lowCreditWeight = 50;
                    this.lienWeight = 50;
                    this.arrestWeight = 50;
                    this.dashboardHash = 9999;
                    this.fraudDbResults = "\n        Lorem ipsum dolor sit amet, <span class=\"highlight\">lien</span>consectetur\n        adipiscing elit. Morbi malesuada turpis a odio fermentum, in suscipit turpis\n        posuere. Nulla dapibus a sapien sed vulputate. Donec in purus ac neque sollicitudin\n        lacinia. Vivamus sit amet sapien at ex venenatis semper vel sed sapien. Donec sed\n        erat pellentesque, placerat enim in, condimentum orci. Suspendisse egestas,\n        odio non iaculis tristique, purus magna mattis purus, <span class=\"highlight\">arrest</span> ut condimentum magna\n        ante eget eros. Donec tempus est tempus tristique mollis. Fusce ultrices quis\n        justo non gravida. Suspendisse vitae ornare eros.\n\n        Mauris accumsan sem turpis, eu porta felis imperdiet et. Donec ut orci id lacus\n        semper dignissim at eget nisi. Integer consectetur facilisis libero, vel laoreet\n        tortor vulputate ac. Proin tristique tincidunt mauris eget malesuada. In posuere\n        sed velit sit amet vestibulum. Aenean volutpat tortor vitae sodales sodales. Nulla\n        nec placerat sapien, eleifend lobortis neque. Proin vulputate sed libero at auctor.\n        Cras dapibus est nibh, vel pellentesque enim semper vitae. Duis blandit risus et porta\n        sollicitudin. Cras ac ligula convallis, rhoncus ligula vel, vulputate lectus.";
                    this.dat = [
                        {
                            '230.73.120.127': {
                                'Transaction Score': { val: 40 },
                                'Repossesion': { val: 40 },
                                'Multiple Addresses': { val: 50 },
                                'Negative Credit': { val: 60 },
                                'Lien': { val: 80 },
                                'Arrest': { val: 40 },
                                'Risk': { val: 70, id: '230.73.120.127' }
                            }
                        },
                        {
                            '206.190.36.105': {
                                'Transaction Score': { val: 80 },
                                'Repossesion': { val: 40 },
                                'Multiple Addresses': { val: 50 },
                                'Negative Credit': { val: 60 },
                                'Lien': { val: 80 },
                                'Arrest': { val: 40 },
                                'Risk': { val: 70, id: '206.190.36.105' }
                            }
                        },
                        {
                            '192.64.119.237': {
                                'Transaction Score': { val: 50 },
                                'Repossesion': { val: 40 },
                                'Multiple Addresses': { val: 50 },
                                'Negative Credit': { val: 60 },
                                'Lien': { val: 80 },
                                'Arrest': { val: 40 },
                                'Risk': { val: 70, id: '192.64.119.237' }
                            }
                        },
                        {
                            '204.79.197.200': {
                                'Transaction Score': { val: 60 },
                                'Repossesion': { val: 40 },
                                'Multiple Addresses': { val: 50 },
                                'Negative Credit': { val: 60 },
                                'Lien': { val: 80 },
                                'Arrest': { val: 40 },
                                'Risk': { val: 70, id: '204.79.197.200' }
                            }
                        }
                    ];
                }
                JQUIlar.prototype.transactionScoreSliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.transactionScoreWeight = newVal;
                    });
                };
                JQUIlar.prototype.repossesionSliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.repossesionWeight = newVal;
                    });
                };
                JQUIlar.prototype.multipleAddressesSliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.multipleAddressesWeight = newVal;
                    });
                };
                JQUIlar.prototype.lowCreditSliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.lowCreditWeight = newVal;
                    });
                };
                JQUIlar.prototype.lienSliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.lienWeight = newVal;
                    });
                };
                JQUIlar.prototype.arrestSliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.arrestWeight = newVal;
                    });
                };
                JQUIlar.prototype.resetSlider = function () {
                    this.transactionScoreWeight = 50;
                    this.repossesionWeight = 50;
                    var newScore = parseInt(Math.random() * 100);
                    this.dat[3]['204.79.197.200']['Transaction Score'].val = newScore;
                    this.dashboardHash = Math.random();
                };
                JQUIlar.prototype.ipSelected = function (ip) {
                    alert('event worked ALL the way up to the app ' + ip);
                };
                JQUIlar = __decorate([
                    core_1.Component({
                        selector: 'jquilar',
                    }),
                    core_1.View({
                        template: "\n    <label>Transaction Number</label>&nbsp;<input placeholder=\"1..20\">&nbsp;\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"resetSlider()\">Analyze</button><br/><br/>\n    <dashboard [dat]=\"dat\" [hash]=\"dashboardHash\" (select)=\"ipSelected($event)\"></dashboard>\n    <br/>\n    <div class=\"tbl\">\n      <div class=\"cell\">\n        <div class=\"muted small\">Transaction Score: {{transactionScoreWeight * 2}}%</div>\n        <jquilar-slider id=\"slider1\" [value]=\"transactionScoreWeight\" [step]=\"2\" (stop)=\"transactionScoreSliderStopped($event)\"></jquilar-slider>\n\n        <div class=\"muted small\">Repossesion: {{repossesionWeight * 2}}%</div>\n        <jquilar-slider id=\"slider2\" [value]=\"repossesionWeight\" (stop)=\"repossesionSliderStopped($event)\"></jquilar-slider>\n\n        <div class=\"muted small\">Multiple Addresses: {{multipleAddressesWeight * 2}}%</div>\n        <jquilar-slider id=\"slider3\" [value]=\"multipleAddressesWeight\" (stop)=\"multipleAddressesSliderStopped($event)\"></jquilar-slider>\n\n        <div class=\"muted small\">Low Credit: {{lowCreditWeight * 2}}%</div>\n        <jquilar-slider id=\"slider4\" [value]=\"lowCreditWeight\" (stop)=\"lowCreditSliderStopped($event)\"></jquilar-slider>\n\n        <div class=\"muted small\">Lien: {{lienWeight * 2}}%</div>\n        <jquilar-slider id=\"slider5\" [value]=\"lienWeight\" (stop)=\"lienSliderStopped($event)\"></jquilar-slider>\n\n        <div class=\"muted small\">Arrest: {{arrestWeight * 2}}%</div>\n        <jquilar-slider id=\"slider6\" [value]=\"arrestWeight\" (stop)=\"arrestSliderStopped($event)\"></jquilar-slider>\n      </div>\n      <div id=\"fraud-db-results\" class=\"cell\" [innerHTML]=\"fraudDbResults\">\n      </div>\n    </div>\n    <br/>\n  ",
                        directives: [jquilar_js_1.jqUIlarSlider, dashboard_widget_js_1.DashboardWidget]
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