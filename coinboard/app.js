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
                    this.resetSliders();
                    this.fraudDbResults = '';
                    var r = parseInt(Math.random() * 20);
                    this.model = new Model(r);
                    this.updateData(this.model.getIpData());
                    this.transactionNumber = undefined;
                    this.populatedIps = {};
                }
                JQUIlar.prototype.slider = function (newVal, attrName) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this[attrName] = newVal;
                        _this.updateData(_this.model.weightData(attrName, (50 + newVal)));
                    });
                };
                JQUIlar.prototype.ipSelected = function (ip) {
                    if (!this.populatedIps[ip]) {
                        this.updateData(this.model.populate(ip));
                        this.fraudDbResults = this.model.reportFor(ip);
                        this.populatedIps[ip] = true;
                    }
                };
                JQUIlar.prototype.resetSliders = function () {
                    this.transactionScoreWeight = 50;
                    this.repossesionWeight = 50;
                    this.multipleAddressesWeight = 50;
                    this.lowCreditWeight = 50;
                    this.lienWeight = 50;
                    this.arrestWeight = 50;
                };
                JQUIlar.prototype.updateData = function (newData) {
                    this.dat = newData;
                    this.dashboardHash = Math.random();
                };
                JQUIlar = __decorate([
                    core_1.Component({
                        selector: 'jquilar',
                    }),
                    core_1.View({
                        template: "\n    <dashboard [dat]=\"dat\" [hash]=\"dashboardHash\" (select)=\"ipSelected($event)\"></dashboard>\n    <br/>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"resetSliders()\">Reset</button>\n    <div class=\"tbl\">\n      <div class=\"cell\">\n        <div class=\"muted small\">Block Score weight: <span class=\"bold\">{{50 + transactionScoreWeight}}</span>%</div>\n        <jquilar-slider id=\"slider1\" [value]=\"transactionScoreWeight\" [step]=\"2\" (stop)=\"slider($event, 'transactionScoreWeight')\"></jquilar-slider>\n\n        <div class=\"muted small\">Repossesion <span weight: <span class=\"bold\">{{50 + repossesionWeight}}</span>%</div>\n        <jquilar-slider id=\"slider2\" [value]=\"repossesionWeight\" (stop)=\"slider($event, 'repossesionWeight')\"></jquilar-slider>\n\n        <div class=\"muted small\">Multiple Addresses weight: <span class=\"bold\">{{50 + multipleAddressesWeight}}</span>%</div>\n        <jquilar-slider id=\"slider3\" [value]=\"multipleAddressesWeight\" (stop)=\"slider($event, 'multipleAddressesWeight')\"></jquilar-slider>\n\n        <div class=\"muted small\">Low Credit weight: <span class=\"bold\">{{50 + lowCreditWeight}}</span>%</div>\n        <jquilar-slider id=\"slider4\" [value]=\"lowCreditWeight\" (stop)=\"slider($event, 'lowCreditWeight')\"></jquilar-slider>\n\n        <div class=\"muted small\">Lien weight: <span class=\"bold\">{{50 + lienWeight}}</span>%</div>\n        <jquilar-slider id=\"slider5\" [value]=\"lienWeight\" (stop)=\"slider($event, 'lienWeight')\"></jquilar-slider>\n\n        <div class=\"muted small\">Arrest weight: <span class=\"bold\">{{50 + arrestWeight}}</span>%</div>\n        <jquilar-slider id=\"slider6\" [value]=\"arrestWeight\" (stop)=\"slider($event, 'arrestWeight')\"></jquilar-slider>\n      </div>\n      <div id=\"fraud-db-results\" class=\"cell\" [innerHTML]=\"fraudDbResults\">\n      </div>\n    </div>\n  ",
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