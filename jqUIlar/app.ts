import {bootstrap} from "angular2/platform/browser";
import {Component, View, EventEmitter, NgZone} from "angular2/core";
import { NgFor } from "angular2/common";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import {Inject} from 'angular2/core';
import { jqUIlarSlider, jqUIlarDatePicker } from './slider.js';

@Component({
  selector: 'jquilar',
})
@View({
  template: `
    <h1 class="section-header">
      Slider
    </h1>
    <div class="gold big">Slider object value: {{sliderVal}}</div>
    <jquilar-slider id="slider1" [val]="sliderVal" [step]="2" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider id="slider2" [orientation]="'vertical'" [val]="sliderVal" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider id="slider3" [val]="sliderVal" (stop)="sliderStopped($event)"></jquilar-slider>
    <br/>
    <button class="whiteongold" role="button" (click)="resetSlider()">Reset slider object</button><br/><br/>
    <h1 class="section-header">
      Date Picker
    </h1>
    <jquilar-datepicker [val]="dateVal" (select)="dateSelected($event)" class="gold"></jquilar-datepicker>
    <jquilar-datepicker [val]="dateVal" (select)="dateSelected($event)" class="gold"></jquilar-datepicker>
  `,
  directives: [jqUIlarSlider, jqUIlarDatePicker]
})

class JQUIlar {
  sliderVal: number;
  pal: number;
  constructor(private _ngZone: NgZone) {
    this.sliderVal = 50;
    this.dateVal = '02/03/2004';
  }

  sliderStopped(newVal) {
    this._ngZone.run(() => {
      this.sliderVal = newVal;
    });
  }

  dateSelected(date) {
    this._ngZone.run(() => {
      this.dateVal = date;
    });
  }

  resetSlider() {
    this.sliderVal = 50;
  }

}

bootstrap(JQUIlar);
