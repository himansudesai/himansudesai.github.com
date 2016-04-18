System.register(["angular2/core", 'angular2/core'], function(exports_1) {
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
    var jqUIlarSlider, jqUIlarDatePicker, jqUIlarProgressBar, jqUIlarSortable, jqUIlarMenu, jqUIlarEffect, jqUIlarAccordion, jqUIlarTooltip;
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
            // jquery-ui slider
            jqUIlarSlider = (function () {
                function jqUIlarSlider(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.stop = new core_1.EventEmitter();
                    this.value = 0;
                    this.slider = undefined;
                    this.orientation = 'horizontal';
                    this.step = 1;
                }
                jqUIlarSlider.prototype.ngAfterContentInit = function () {
                };
                jqUIlarSlider.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    if (!this.slider) {
                        this.slider = $(this.domElement).find('.jquilar-slider');
                        $(this.slider).slider({
                            stop: function (event, ui) {
                                _this.stop.next(ui.value);
                            }
                        });
                    }
                    $(this.slider).slider({
                        orientation: this.orientation,
                        value: this.value,
                        step: this.step,
                    });
                };
                jqUIlarSlider = __decorate([
                    core_1.Component({
                        selector: 'jquilar-slider',
                        inputs: ['value', 'orientation', 'step'],
                        events: ['stop'],
                        template: '<div class="jquilar-slider"></div>'
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], jqUIlarSlider);
                return jqUIlarSlider;
            })();
            exports_1("jqUIlarSlider", jqUIlarSlider);
            // jquery-ui datepicker
            jqUIlarDatePicker = (function () {
                function jqUIlarDatePicker(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.select = new core_1.EventEmitter();
                    this.datepicker = undefined;
                    this.value = undefined;
                }
                jqUIlarDatePicker.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    if (!this.datepicker) {
                        this.datepicker = $(this.domElement).find('.jquilar-datepicker');
                        $(this.datepicker).datepicker({
                            onSelect: function (dateText, ui) {
                                _this.select.next(dateText);
                            }
                        });
                        $(this.datepicker).datepicker("setDate", new Date());
                    }
                };
                jqUIlarDatePicker.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    if (!this.datepicker) {
                        this.datepicker = $(this.domElement).find('.jquilar-datepicker');
                    }
                    var cm = this.changeMonth ? this.changeMonth : false;
                    var cy = this.changeYear ? this.changeYear : false;
                    $(this.datepicker).datepicker({
                        changeMonth: cm,
                        changeYear: cy,
                        onSelect: function (dateText, ui) {
                            _this.select.next(dateText);
                        }
                    });
                    if (this.value) {
                        $(this.datepicker).val(this.value);
                    }
                    else {
                        $(this.datepicker).datepicker("setDate", new Date());
                    }
                };
                jqUIlarDatePicker = __decorate([
                    core_1.Component({
                        selector: 'jquilar-datepicker',
                        inputs: ['value', 'changeMonth', 'changeYear'],
                        events: ['select'],
                        template: '<input type="text" class="jquilar-datepicker">'
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], jqUIlarDatePicker);
                return jqUIlarDatePicker;
            })();
            exports_1("jqUIlarDatePicker", jqUIlarDatePicker);
            // jquery-ui progressbar
            jqUIlarProgressBar = (function () {
                function jqUIlarProgressBar(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.change = new core_1.EventEmitter();
                    this.progressbar = undefined;
                    this.value = 0;
                }
                jqUIlarProgressBar.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    if (!this.progressbar) {
                        this.progressbar = $(this.domElement).find('.jquilar-progressbar');
                        $(this.progressbar).progressbar({
                            onChange: function (x, ui) {
                                _this.change.next(x);
                            }
                        });
                        $(this.progressbar).progressbar({
                            value: this.value,
                        });
                    }
                };
                jqUIlarProgressBar.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    if (!this.progressbar) {
                        this.progressbar = $(this.domElement).find('.jquilar-progressbar');
                    }
                    $(this.progressbar).progressbar({
                        value: this.value,
                        onSelect: function (x, ui) {
                            _this.change.next(x);
                        }
                    });
                };
                jqUIlarProgressBar = __decorate([
                    core_1.Component({
                        selector: 'jquilar-progressbar',
                        inputs: ['value'],
                        events: ['change'],
                        template: '<div class="jquilar-progressbar"></div>'
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], jqUIlarProgressBar);
                return jqUIlarProgressBar;
            })();
            exports_1("jqUIlarProgressBar", jqUIlarProgressBar);
            // jquery-ui sortable
            jqUIlarSortable = (function () {
                function jqUIlarSortable(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.sort = new core_1.EventEmitter();
                    this.sortable = undefined;
                    this.list = [];
                }
                jqUIlarSortable.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    if (!this.sortable) {
                        this.sortable = $(this.domElement).find('.jquilar-sortable');
                        for (var i = 0; i < this.list.length; i++) {
                            $(this.sortable).append('<li class="ui-state-default">' + this.list[i] + '</li>');
                        }
                        $(this.sortable).sortable({
                            stop: function (x, ui) {
                                _this.sort.next(x);
                            }
                        });
                    }
                };
                jqUIlarSortable.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    this.sortable = $(this.domElement).find('.jquilar-sortable');
                    $(this.sortable).empty();
                    for (var i = 0; i < this.list.length; i++) {
                        $(this.sortable).append('<li class="ui-state-default">' + this.list[i] + '</li>');
                    }
                    $(this.sortable).sortable({
                        stop: function (x, ui) {
                            _this.sort.next(x);
                        }
                    });
                };
                jqUIlarSortable = __decorate([
                    core_1.Component({
                        selector: 'jquilar-sortable',
                        inputs: ['list'],
                        events: ['sort'],
                        template: '<ul class="jquilar-sortable"></ul>'
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], jqUIlarSortable);
                return jqUIlarSortable;
            })();
            exports_1("jqUIlarSortable", jqUIlarSortable);
            // jquery-ui menu
            jqUIlarMenu = (function () {
                function jqUIlarMenu(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.select = new core_1.EventEmitter();
                    this.menu = [];
                    this.jqMenu = undefined;
                }
                jqUIlarMenu.prototype.ngAfterContentInit = function () { };
                jqUIlarMenu.prototype.buildSubMenuStr = function (subMenu) {
                    var subStr = '<ul>';
                    var itemCb = function (item) {
                        subStr += '<li>' + item + '</li>';
                    };
                    var recursiveCb = function (label, value) {
                        subStr += '<li>' + label + this.buildSubMenuStr(value) + '</li>';
                    };
                    var disabledItemCb = function (label) {
                        subStr += '<li class="ui-state-disabled">' + label + '</li>';
                    };
                    this.iterateOverMenu(subMenu, itemCb.bind(this), recursiveCb.bind(this), disabledItemCb.bind(this));
                    return (subStr + '</ul>');
                };
                jqUIlarMenu.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    this.jqMenu = $(this.domElement).empty().append('<ul class="jquilar-menu"></ul>');
                    this.jqMenu = $(this.jqMenu).find(".jquilar-menu");
                    var itemCb = function (item) {
                        $(this.jqMenu).append('<li>' + item + '</li>');
                    };
                    var recursiveCb = function (label, value) {
                        $(this.jqMenu).append('<li>' + label + this.buildSubMenuStr(value) + '</li>');
                    };
                    var disabledItemCb = function (label) {
                        $(this.jqMenu).append('<li class="ui-state-disabled">' + label + '</li>');
                    };
                    this.iterateOverMenu(this.menu, itemCb.bind(this), recursiveCb.bind(this), disabledItemCb.bind(this));
                    $(this.jqMenu).menu({
                        select: function (event, ui) {
                            var selectedItem = event.currentTarget.innerHTML;
                            var numChildren = $(event.currentTarget).children().length;
                            if (numChildren < 1) {
                                _this.select.next(selectedItem);
                            }
                        }
                    });
                };
                jqUIlarMenu.prototype.iterateOverMenu = function (coll, itemCb, recursiveCb, disabledItemCb) {
                    for (var i = 0; i < coll.length; i++) {
                        var item = coll[i];
                        if (typeof item === 'string') {
                            itemCb(item);
                        }
                        else {
                            if (typeof item === 'object') {
                                var label = (Object.keys(item))[0];
                                var value = item[label];
                                if (Array.isArray(value)) {
                                    recursiveCb(label, value);
                                }
                                else {
                                    disabledItemCb(label);
                                }
                            }
                        }
                    }
                };
                jqUIlarMenu = __decorate([
                    core_1.Component({
                        selector: 'jquilar-menu',
                        inputs: ['menu'],
                        events: ['select'],
                        template: '<div></div>'
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], jqUIlarMenu);
                return jqUIlarMenu;
            })();
            exports_1("jqUIlarMenu", jqUIlarMenu);
            // jquery-ui effect
            jqUIlarEffect = (function () {
                function jqUIlarEffect(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.completed = new core_1.EventEmitter();
                }
                jqUIlarEffect.prototype.ngAfterContentInit = function () {
                };
                jqUIlarEffect.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    var cb = function () {
                        _this.completed.next();
                    };
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    this.effectsHandle.runEffect = function (effectType, option1, option2, option3, option4) {
                        var child = $(_this.domElement).children()[0];
                        $(child).effect(effectType, option1 || {}, option2 || 1200, cb);
                    };
                    this.effectsHandle.restoreElement = function () {
                        var child = $(_this.domElement).children()[0];
                        $(child).fadeIn();
                    };
                };
                jqUIlarEffect = __decorate([
                    core_1.Component({
                        selector: 'jquilar-effect',
                        inputs: ['effectsHandle'],
                        events: ['completed'],
                        template: "\n              <div class=\"jquilar-effect\">\n                <ng-content></ng-content>\n              </div>\n            "
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], jqUIlarEffect);
                return jqUIlarEffect;
            })();
            exports_1("jqUIlarEffect", jqUIlarEffect);
            // jquery-ui accordion
            jqUIlarAccordion = (function () {
                function jqUIlarAccordion(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.accordion = undefined;
                    this.sections = [];
                }
                jqUIlarAccordion.prototype.ngAfterContentInit = function () {
                    this.accordion = $(this.domElement).find('.jquilar-accordion');
                    $(this.accordion).accordion();
                };
                jqUIlarAccordion.prototype.ngOnChanges = function (changes) {
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    this.accordion = $(this.domElement).empty().append('<div class="jquilar-accordion"></div>');
                    this.accordion = $(this.accordion).find(".jquilar-accordion");
                    for (var idx = 0; idx < this.sections.length; idx++) {
                        var section = this.sections[idx];
                        $(this.accordion).append('<h3>' + section.heading + '</h3>');
                        $(this.accordion).append('<div>' + section.body + '</div>');
                    }
                    $(this.accordion).accordion();
                };
                jqUIlarAccordion = __decorate([
                    core_1.Component({
                        selector: 'jquilar-accordion',
                        inputs: ['sections'],
                        template: "\n              <div class=\"jquilar-accordion\">\n                <ng-content></ng-content>\n              </div>\n            "
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], jqUIlarAccordion);
                return jqUIlarAccordion;
            })();
            exports_1("jqUIlarAccordion", jqUIlarAccordion);
            // jquery-ui tooltip
            jqUIlarTooltip = (function () {
                function jqUIlarTooltip(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.accordion = undefined;
                    this.tooltip = '';
                }
                jqUIlarTooltip.prototype.ngAfterContentInit = function () {
                    this.jqTooltip = $(this.domElement).find('.jquilar-tooltip');
                    $(this.jqTooltip).attr('title', this.tooltip);
                    $(this.jqTooltip).tooltip();
                };
                jqUIlarTooltip.prototype.ngOnChanges = function (changes) {
                    for (var change in changes) {
                        this[change] = changes[change] ? changes[change].currentValue : this[change];
                    }
                    this.jqTooltip = $(this.domElement).find('.jquilar-tooltip');
                    $(this.jqTooltip).attr('title', this.tooltip);
                    $(this.jqTooltip).tooltip();
                };
                jqUIlarTooltip = __decorate([
                    core_1.Component({
                        selector: 'jquilar-tooltip',
                        inputs: ['tooltip'],
                        template: "\n              <div class=\"jquilar-tooltip\">\n                <ng-content></ng-content>\n              </div>\n            "
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], jqUIlarTooltip);
                return jqUIlarTooltip;
            })();
            exports_1("jqUIlarTooltip", jqUIlarTooltip);
        }
    }
});
//# sourceMappingURL=jquilar.js.map