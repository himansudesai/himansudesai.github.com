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
    this.value = 0;
    this.slider = undefined;
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
      this.slider = this.domElement.querySelectorAll('.jquilar-slider');
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
    console.log('ngAfterContentInit for sortable');
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
    console.log('ngOnChanges for sortable');
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
