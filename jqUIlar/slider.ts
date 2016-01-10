import { Component, EventEmitter } from "angular2/core";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import { Inject } from 'angular2/core';

// Annotation section
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
    const slidey = this.domElement.querySelectorAll('.jquilar-slider');
    this.slider = slidey;
    $(slidey).slider({
      value: this.val,
      orientation: this.orientation,
      step: this.step
    });
    $(slidey).slider({
      stop: ( event, ui ) => {
        this.stop.next(ui.value);
      }
    });
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    $(this.slider).slider({
      orientation: this.orientation,
      value: this.val,
      step: this.step,
    });
  }
}
