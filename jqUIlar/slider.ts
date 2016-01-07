import { Component, EventEmitter } from "angular2/core";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import { Inject } from 'angular2/core';

// Annotation section
@Component({
  selector: 'jquilar-slider',
  inputs: ['val', 'orientation'],
  events: ['stop'],
  template: '<div class="jquilar-slider"></div>'
})

export class jqUIlarSlider {
  val: number;
  stop: EventEmitter<number>;
  domElement: any;
  slider: any;
  orientation: string;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
      this.domElement = elementRef.nativeElement;
      this.stop = new EventEmitter();
      this.val = 0;
      this.slider = undefined;
      this.orientation = 'horizontal';
    }

  ngAfterContentInit() {
    const slidey = this.domElement.querySelectorAll('.jquilar-slider');
    this.slider = slidey;
    $(slidey).slider({
      value: this.val,
      orientation: this.orientation
    });
    $(slidey).slider({
      stop: ( event, ui ) => {
        this.stop.next(ui.value);
      }
    });
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let change of changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    $(this.slider).slider({
      orientation: this.orientation,
      value: this.val
    });
  }
}
