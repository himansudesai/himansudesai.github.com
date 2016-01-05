import { Component, EventEmitter } from "angular2/core";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import { Inject } from 'angular2/core';

// Annotation section
@Component({
  selector: 'jquilar-slider',
  inputs: ['val'],
  events: ['stop'],
  template: '<div><div class="jquilar-slider"></div></div>'
})

export class jqUIlarSlider {
  val: number;
  stop: EventEmitter<number>;
  domElement: any;
  slider: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
      this.domElement = elementRef.nativeElement;
      this.stop = new EventEmitter();
      this.val = undefined;
      this.slider = undefined;
    }

  ngAfterContentInit() {
    const slidey = this.domElement.querySelectorAll('.jquilar-slider');
    $(slidey).slider();
    this.slider = slidey;
    const curVal = this.val ? this.val : 0;
    $(slidey).slider('value', curVal);
    $(slidey).slider({
      stop: ( event, ui ) => {
        this.stop.next(ui.value);

      }
    });
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    console.log('ngOnChanges-------------------');
    if (changes['val']) {
      if (this.slider) {
        $(this.slider).slider('value', changes['val'].currentValue);
      } else {
        this.val = changes['val'].currentValue;
      }
    }
  }
}
