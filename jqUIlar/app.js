System.register(["angular2/platform/browser", "angular2/core", "angular2/common", './jquilar.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, common_1, jquilar_js_1;
    var JQUIlar;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
                    this.menu = [{ Apple: [{ Green: ['Mutsu', 'Granny Smith'] }, { Red: ['Macintosh', { Washington: false }] }] }, { Banana: ['Cavendish', 'Plantain'] }, { Cherry: false }, 'Date'];
                    this.effectsHandle = {
                        runEffect: function () {
                            console.log('ERROR - this function should have been overwritten by the jquilar library');
                        }
                    };
                    this.effectTypes = ['explode', 'puff', 'bounce', 'shake', 'blind', 'fade', 'fold', 'pulsate', 'highlight'];
                    this.selectedEffect = this.effectTypes[0];
                    this.setAccordionDataToDogs();
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
                JQUIlar.prototype.menuSelected = function (item) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.menuSelection = item;
                    });
                };
                JQUIlar.prototype.veggiesMenu = function () {
                    this.menu = ['Asparagus', 'Broccoli', 'Carrot'];
                };
                JQUIlar.prototype.runEffect = function () {
                    this.effectsHandle.runEffect(this.selectedEffect);
                };
                JQUIlar.prototype.effectCompleted = function () {
                    this.effectsHandle.restoreElement();
                };
                JQUIlar.prototype.effectTypeChanged = function (sel) {
                    this.selectedEffect = sel.value;
                };
                JQUIlar.prototype.setAccordionDataToDogs = function () {
                    this.accordionData = [
                        {
                            heading: 'Labrador',
                            body: "<img src=\"./images/lab.jpg\">"
                        },
                        {
                            heading: 'Terrier',
                            body: "<img src=\"./images/terrier.jpg\">"
                        },
                        {
                            heading: 'Malamute',
                            body: "<img src=\"./images/malamute.jpg\">"
                        },
                        {
                            heading: 'Beagle',
                            body: "<img src=\"./images/beagle.jpg\">"
                        }
                    ];
                };
                JQUIlar.prototype.setAccordionDataToCats = function () {
                    this.accordionData = [
                        {
                            heading: 'Persion',
                            body: "<img src=\"images/persian.jpg\" alt=\"Persian\" />"
                        },
                        {
                            heading: 'Toyger',
                            body: "<img src=\"images/toyger.jpg\" alt=\"Terrier\" />"
                        },
                        {
                            heading: 'Tabby',
                            body: "<img src=\"images/tabby.jpg\" alt=\"Malamute\" />"
                        },
                        {
                            heading: 'Serengiti',
                            body: "\n            <div>\n              <img src=\"images/serengeti.jpg\" alt=\"Beagle\" /> <br/>\n              <span class=\"indianred\">I am scared. Where is my mommy?</span>\n            </div>"
                        }
                    ];
                };
                JQUIlar = __decorate([
                    core_1.Component({
                        selector: 'jquilar',
                    }),
                    core_1.View({
                        template: "\n    <br/>\n    <p class=\"grey\">jquilar.js is on github @ https://github.com/himansudesai/jquilar.js</p>\n    <p class=\"grey\">currently supported: Effect, Sortable, Slider, Date Picker, Progress Bar, Menu</p>\n    <p class=\"grey\">support for all widgets and interactions coming soon...</p>\n    <br/>\n\n    <!-- Slider -->\n    <div class=\"section-header\">\n      <span>Slider</span><p class=\"code-snippet\">\n&lt;jquilar-slider [valueObj]=&quot;some_val&quot; (stop)=&quot;func($event)&quot;&gt;&lt;/jquilar-slider&gt;/jquilar-slider&gt;</p>\n    </div>\n    <div class=\"muted big\">Current value: {{sliderVal}}</div>\n    <jquilar-slider id=\"slider1\" [value]=\"sliderVal\" [step]=\"2\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider id=\"slider2\" [orientation]=\"'vertical'\" [value]=\"sliderVal\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider id=\"slider3\" [value]=\"sliderVal\" (stop)=\"sliderStopped($event)\"></jquilar-slider>\n    <br/>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"resetSlider()\">Reset data</button>\n    <br/><br/>\n\n    <!-- Date Picker -->\n    <div class=\"section-header\">\n      <span>Date Picker</span><p class=\"code-snippet\">&lt;jquilar-datepicker [value]=&quot;dateObj&quot; (select)=&quot;func($event)&quot;&gt;&lt;/jquilar-datepicker&gt;</p>\n    </div>\n    <jquilar-datepicker [value]=\"dateVal\" [changeMonth]=\"true\" [changeYear]=\"true\" (select)=\"dateSelected($event)\" class=\"gold\"></jquilar-datepicker>\n    <jquilar-datepicker [value]=\"dateVal\" (select)=\"dateSelected($event)\" class=\"gold\"></jquilar-datepicker><br/><br/>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"resetDate()\">Reset data</button>\n    <br/><br/>\n\n\n    <!-- Progress Bar -->\n    <div class=\"section-header\">\n      <span>Progress Bar</span><p class=\"code-snippet\">&lt;jquilar-progressbar [value]=&quot;progressVal&quot; (change)=&quot;progressChanged($event)&quot; class=&quot;gold&quot;&gt;&lt;/jquilar-progressbar&gt;</p>\n    </div>\n    <div class=\"muted big\">Current value: {{progressVal}}</div>\n    <jquilar-progressbar [value]=\"progressVal\" (change)=\"progressChanged($event)\" class=\"gold\"></jquilar-progressbar><br/>\n    <jquilar-progressbar [value]=\"progressVal\" (select)=\"progressChanged($event)\" class=\"gold\"></jquilar-progressbar><br/>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"decProgressBar()\">-10</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"resetProgressBar()\">Reset data</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"incProgressBar()\">+10</button>\n    <br/><br/>\n\n\n    <!-- Menu -->\n    <div class=\"section-header\">\n      <span>Menu</span><p class=\"code-snippet\">&lt;jquilar-menu [menu]=&quot;myList&quot; (select)=&quot;func($event)&quot;&gt;&lt;/jquilar-menu&gt;</p>\n    </div>\n    <div class=\"muted big\">Last selected: {{menuSelection}}</div>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"veggiesMenu()\">Veggies</button><br/><br/>\n    <jquilar-menu [menu]=\"menu\" (select)=\"menuSelected($event)\" class=\"gold\"></jquilar-menu>\n    <br/><br/><br/><br/><br/><br/><br/>\n\n    <!-- Effect -->\n    <div class=\"section-header\">\n      <span>Effect</span><p class=\"code-snippet\">&lt;jquilar-effect [effects]=&quot;effectsContainer&quot;&gt;&lt;/jquilar-menu&gt;</p>\n    </div>\n    <jquilar-effect [effectsHandle]=\"effectsHandle\" (completed)=\"effectCompleted()\">\n      <div class=\"toggler\">\n        <div id=\"effect\" class=\"ui-widget-content ui-corner-all\">\n          <h3 class=\"ui-widget-header ui-corner-all\">Help, I'm trapped in a glass box</h3>\n          <p><img style=\"float: right;\" src=\"./images/puppy.png\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.          \n          </p>\n        </div>\n      </div>\n    </jquilar-effect>\n    <br/>\n    <select id=\"effected\" #sel (change)=\"effectTypeChanged(sel)\"><option *ngFor=\"#effect of effectTypes\">{{effect}}</option></select>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"runEffect()\">Run Effect</button>\n    <br/><br/>\n\n    <!-- Accordion -->\n    <div class=\"section-header\">\n      <span>Accordion</span><p class=\"code-snippet\">&lt;jquilar-accordion [sections]=&quot;sectionData&quot;&gt; &lt;/jquilar-accordion&gt;</p>\n    </div>\n    <jquilar-accordion [sections]=\"accordionData\"></jquilar-accordion>\n    <br/>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"setAccordionDataToDogs()\">Dogs</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"setAccordionDataToCats()\">Cats</button>\n    <br/><br/>\n\n\n    <!-- Sortable -->\n    <div class=\"section-header\">\n      <span>Sortable</span><p class=\"code-snippet\">&lt;jquilar-sortable [list]=&quot;myList&quot; (sort)=&quot;func($event)&quot;&gt;&lt;/jquilar-sortable&gt;</p>\n    </div>\n    <div class=\"muted big\">Current value: {{sortableList}}</div>\n    <jquilar-sortable [list]=\"sortableList\" (sort)=\"listSorted($event)\" class=\"gold\"></jquilar-sortable>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"fruitsSortableList()\">Reset data</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"veggiesSortableList()\">Veggies</button>\n    <button class=\"whiteonbluishslategrey\" role=\"button\" (click)=\"fruitsSortableList()\">Fruits</button>\n    <br/><br/>\n\n  ",
                        directives: [common_1.NgFor, jquilar_js_1.jqUIlarSlider, jquilar_js_1.jqUIlarDatePicker, jquilar_js_1.jqUIlarProgressBar, jquilar_js_1.jqUIlarSortable, jquilar_js_1.jqUIlarMenu, jquilar_js_1.jqUIlarEffect, jquilar_js_1.jqUIlarAccordion]
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], JQUIlar);
                return JQUIlar;
            })();
            browser_1.bootstrap(JQUIlar);
        }
    }
});
//# sourceMappingURL=app.js.map