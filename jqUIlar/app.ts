import {bootstrap} from "angular2/platform/browser";
import {Component, View, EventEmitter, NgZone} from "angular2/core";
import { NgFor } from "angular2/common";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import {Inject} from 'angular2/core';
import { jqUIlarSlider } from './slider.js';

@Component({
  selector: 'jquilar',
})

@View({
  template: `
    <jquilar-slider [val]="val" (stop)="sliderStopped($event)"></jquilar-slider>
    <div class="centered gold big">{{val}}</div>
    <jquilar-slider [val]="val" (stop)="sliderStopped($event)"></jquilar-slider>
    <br/>
    <button class="whiteongold" role="button" (click)="resetValue()">Reset value to 50</button>
  `,
  directives: [jqUIlarSlider]
})

class JQUIlar {
  val: number;
  constructor(private _ngZone: NgZone) {
    this.val = 50;
  }

  sliderStopped(newVal) {
    this._ngZone.run(() => {
      this.val = newVal;
    });
  }

  resetValue() {
    this.val = 50;
  }

}

bootstrap(JQUIlar);
