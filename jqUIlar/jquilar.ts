import { Component, EventEmitter } from "angular2/core";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import { Inject } from 'angular2/core';

// jquery-ui slider
@Component({
  selector: 'jquilar-slider',
  inputs: ['val', 'orientation', 'step'],
  events: ['stop'],
  template: '<div class="jquilar-slider"></div>'
})

export class jqUIlarSlider {
  val: number;
  stop: EventEmitter<number>;
  domElement: any;
  slider: any;
  orientation: string;
  step: number;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.stop = new EventEmitter();
    this.val = 0;
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
      value: this.val,
      step: this.step,
    });
  }
}

// jquery-ui datepicker
@Component({
  selector: 'jquilar-datepicker',
  inputs: ['val', 'changeMonth', 'changeYear'],
  events: ['select'],
  template: '<input type="text" class="jquilar-datepicker">'
})

export class jqUIlarDatePicker {
  val: string;
  select: EventEmitter<number>;
  domElement: any;
  datepicker: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.select = new EventEmitter();
    this.datepicker = undefined;
    this.val = undefined;
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
    if (this.val) {
      $(this.datepicker).val(this.val);
    } else {
      $(this.datepicker).datepicker("setDate", new Date());
    }
  }
}
