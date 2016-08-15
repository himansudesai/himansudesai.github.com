import { Component, EventEmitter } from "angular2/core";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import { Inject } from 'angular2/core';

// jquery-ui slider
@Component({
  selector: 'jquilar-slider',
  inputs: ['value', 'orientation', 'step'],
  events: ['stop'],
  template: '<div class="jquilar-slider"></div>'
})

export class jqUIlarSlider {
  value: number;
  stop: EventEmitter<number>;
  domElement: any;
  slider: any;
  orientation: string;
  step: number;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.stop = new EventEmitter();
    this.slider = undefined;
    this.value = 0;
    this.orientation = 'horizontal';
    this.step = 1;
  }

  ngAfterContentInit() {
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    if (!this.slider) {
      this.slider = $(this.domElement).find('.jquilar-slider');
      $(this.slider).slider({
        stop: ( event, ui ) => {
          this.stop.next(ui.value);
        }
      });
    }
    $(this.slider).slider({
      orientation: this.orientation,
      value: this.value,
      step: this.step,
    });
  }
}

// jquery-ui datepicker
@Component({
  selector: 'jquilar-datepicker',
  inputs: ['value', 'changeMonth', 'changeYear'],
  events: ['select'],
  template: '<input type="text" class="jquilar-datepicker">'
})

export class jqUIlarDatePicker {
  value: string;
  select: EventEmitter<number>;
  domElement: any;
  datepicker: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.select = new EventEmitter();
    this.datepicker = undefined;
    this.value = undefined;
  }

  ngAfterContentInit() {
    if (!this.datepicker) {
      this.datepicker = $(this.domElement).find('.jquilar-datepicker');
      $(this.datepicker).datepicker({
        onSelect: (dateText, ui) => {
          this.select.next(dateText);
        }
      });
      $(this.datepicker).datepicker("setDate", new Date());
    }
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    if (!this.datepicker) {
      this.datepicker = $(this.domElement).find('.jquilar-datepicker');
    }
    const cm = this.changeMonth ? this.changeMonth : false;
    const cy = this.changeYear ? this.changeYear : false;
    $(this.datepicker).datepicker({
      changeMonth: cm,
      changeYear: cy,
      onSelect: (dateText, ui) => {
        this.select.next(dateText);
      }
    });
    if (this.value) {
      $(this.datepicker).val(this.value);
    } else {
      $(this.datepicker).datepicker("setDate", new Date());
    }
  }
}


// jquery-ui progressbar
@Component({
  selector: 'jquilar-progressbar',
  inputs: ['value'],
  events: ['change'],
  template: '<div class="jquilar-progressbar"></div>'
})

export class jqUIlarProgressBar {
  value: string;
  change: EventEmitter<number>;
  domElement: any;
  progressbar: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.change = new EventEmitter();
    this.progressbar = undefined;
    this.value = 0;
  }

  ngAfterContentInit() {
    if (!this.progressbar) {
      this.progressbar = $(this.domElement).find('.jquilar-progressbar');
      $(this.progressbar).progressbar({
        onChange: (x, ui) => {
          this.change.next(x);
        }
      });
      $(this.progressbar).progressbar({
        value: this.value,
      });
    }
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    if (!this.progressbar) {
      this.progressbar = $(this.domElement).find('.jquilar-progressbar');
    }
    $(this.progressbar).progressbar({
      value: this.value,
      onSelect: (x, ui) => {
        this.change.next(x);
      }
    });
  }
}


// jquery-ui sortable
@Component({
  selector: 'jquilar-sortable',
  inputs: ['list'],
  events: ['sort'],
  template: '<ul class="jquilar-sortable"></ul>'
})

export class jqUIlarSortable {
  list: Array<string>;
  sort: EventEmitter<number>;
  domElement: any;
  sortable: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.sort = new EventEmitter();
    this.sortable = undefined;
    this.list = [];
  }

  ngAfterContentInit() {
    if (!this.sortable) {
      this.sortable = $(this.domElement).find('.jquilar-sortable');
      for (let i=0; i<this.list.length; i++) {
        $(this.sortable).append('<li class="ui-state-default">' + this.list[i] + '</li>');
      }
      $(this.sortable).sortable({
        stop: (x, ui) => {
          this.sort.next(x);
        }
      });
    }
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    this.sortable = $(this.domElement).find('.jquilar-sortable');
    $(this.sortable).empty();
    for (let i=0; i<this.list.length; i++) {
      $(this.sortable).append('<li class="ui-state-default">' + this.list[i] + '</li>');
    }
    $(this.sortable).sortable({
      stop: (x, ui) => {
        this.sort.next(x);
      }
    });
  }
}


// jquery-ui menu
@Component({
  selector: 'jquilar-menu',
  inputs: ['menu'],
  events: ['select'],
  template: '<div></div>'
})

export class jqUIlarMenu {
  menu: Array<string>;
  select: EventEmitter<string>;
  domElement: any;
  jqMenu: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.select = new EventEmitter();
    this.menu = [];
    this.jqMenu = undefined;
  }

  ngAfterContentInit() {}

  buildSubMenuStr(subMenu) {
    var subStr = '<ul>';
    var itemCb = function(item) {
      subStr += '<li>' + item + '</li>';
    };
    var recursiveCb = function(label, value) {
      subStr += '<li>' + label + this.buildSubMenuStr(value) + '</li>';
    }
    var disabledItemCb = function(label) {
      subStr += '<li class="ui-state-disabled">' + label + '</li>';
    }

    this.iterateOverMenu(subMenu, itemCb.bind(this), recursiveCb.bind(this), disabledItemCb.bind(this));

    return (subStr + '</ul>');
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    this.jqMenu = $(this.domElement).empty().append('<ul class="jquilar-menu"></ul>');
    this.jqMenu = $(this.jqMenu).find(".jquilar-menu");

    var itemCb = function(item) {
      $(this.jqMenu).append('<li>' + item + '</li>');
    };
    var recursiveCb = function(label, value) {
      $(this.jqMenu).append('<li>' + label + this.buildSubMenuStr(value) + '</li>');
    }
    var disabledItemCb = function(label) {
      $(this.jqMenu).append('<li class="ui-state-disabled">' + label + '</li>');
    }

    this.iterateOverMenu(this.menu, itemCb.bind(this), recursiveCb.bind(this), disabledItemCb.bind(this));

    $(this.jqMenu).menu({
      select: (event, ui) => {
        var selectedItem = event.currentTarget.innerHTML;
        var numChildren = $(event.currentTarget).children().length;
        if (numChildren < 1) { // if real children then user selected non leaf element
          this.select.next(selectedItem);
        }
      }
    });
  }

  iterateOverMenu(coll, itemCb, recursiveCb, disabledItemCb) {
    for (var i=0; i<coll.length; i++) {
      var item = coll[i];
      if (typeof item === 'string') {
        itemCb(item);
      } else {
        if (typeof item === 'object') {
          var label = (Object.keys(item))[0];
          var value = item[label];
          if (Array.isArray(value)) {
            recursiveCb(label, value);
          } else {
            disabledItemCb(label);
          }
        }
      }
    }
  }

}


// jquery-ui effect
@Component({
  selector: 'jquilar-effect',
  inputs: ['effectsHandle'],
  events: ['completed'],
  template: `
              <div class="jquilar-effect">
                <ng-content></ng-content>
              </div>
            `
})


export class jqUIlarEffect {
  completed: EventEmitter<number>;
  domElement: any;
  effectsHandle: Object;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.completed = new EventEmitter();
  }

  ngAfterContentInit() {
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {

    var cb = () => {
      this.completed.next();
    };

    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    this.effectsHandle.runEffect = (effectType, option1, option2, option3, option4) => {
      var child = $(this.domElement).children()[0];
      $(child).effect(effectType, option1 || {}, option2 || 1200, cb);
    }
    this.effectsHandle.restoreElement = () => {
      var child = $(this.domElement).children()[0];
      $(child).fadeIn();
    }
  }
}


// jquery-ui accordion
@Component({
  selector: 'jquilar-accordion',
  inputs: ['sections'],
  template: `
              <div class="jquilar-accordion">
                <ng-content></ng-content>
              </div>
            `
})

export class jqUIlarAccordion {
  sections: Array<Map<string, string>>;
  domElement: any;
  accordion: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.accordion = undefined;
    this.sections = [];
  }

  ngAfterContentInit() {
     this.accordion = $(this.domElement).find('.jquilar-accordion');
      $(this.accordion).accordion();
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    this.accordion = $(this.domElement).empty().append('<div class="jquilar-accordion"></div>');
    this.accordion = $(this.accordion).find(".jquilar-accordion");
    for (var idx=0; idx<this.sections.length; idx++) {
      var section = this.sections[idx];
      $(this.accordion).append('<h3>' + section.heading + '</h3>');
      $(this.accordion).append('<div>' + section.body + '</div>');
    }
    $(this.accordion).accordion();
  }
}

// jquery-ui tooltip
@Component({
  selector: 'jquilar-tooltip',
  inputs: ['tooltip'],
  template: `
              <div class="jquilar-tooltip">
                <ng-content></ng-content>
              </div>
            `
})

export class jqUIlarTooltip {
  tooltip: String;
  domElement: any;
  jqTooltip: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.tooltip = '';
  }

  ngAfterContentInit() {
     this.jqTooltip = $(this.domElement).find('.jquilar-tooltip');
      $(this.jqTooltip).attr('title', this.tooltip);
      $(this.jqTooltip).tooltip();
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
     this.jqTooltip = $(this.domElement).find('.jquilar-tooltip');
      $(this.jqTooltip).attr('title', this.tooltip);
      $(this.jqTooltip).tooltip();
  }
}

// jquery-ui draggable
@Component({
  selector: 'jquilar-draggable',
  template: `
              <div class="jquilar-draggable">
                <ng-content></ng-content>
              </div>
            `
})

export class jqUIlarDraggable {
  tooltip: String;
  domElement: any;
  jqDraggable: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
  }

  ngAfterContentInit() {
     this.jqDraggable = $(this.domElement).find('.jquilar-draggable');
      $(this.jqDraggable).draggable();
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {}
}
