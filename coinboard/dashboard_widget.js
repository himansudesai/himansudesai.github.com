System.register(["angular2/core", 'angular2/core'], function(exports_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2, core_3;
    var DashboardWidget;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
                core_3 = core_2_1;
            }],
        execute: function() {
            // dashboard component
            DashboardWidget = (function () {
                function DashboardWidget(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.select = new core_1.EventEmitter();
                    this.dat = [];
                    this.hash = 0;
                }
                DashboardWidget.prototype.ngAfterContentInit = function () {
                    console.log('DW - ngAfterContentInit');
                };
                DashboardWidget.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    console.log('DW - ngOnChanges');
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    if (this.dat) {
                        if (!this.db) {
                            this.db = new Dashboard(this.dat, function (x) { return _this.select.next(x); });
                        }
                        else {
                            this.db.render(this.dat);
                        }
                    }
                };
                DashboardWidget = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        inputs: ['dat', 'hash'],
                        events: ['select'],
                        template: '<div class="dashboard"></div>'
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], DashboardWidget);
                return DashboardWidget;
            }());
            exports_1("DashboardWidget", DashboardWidget);
        }
    }
});
//# sourceMappingURL=dashboard_widget.js.map