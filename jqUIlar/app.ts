import {bootstrap} from "angular2/platform/browser";
import {Component, View, EventEmitter, NgZone} from "angular2/core";
import { NgFor } from "angular2/common";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import {Inject} from 'angular2/core';
import { jqUIlarSlider, jqUIlarDatePicker } from './jquilar.js';

@Component({
  selector: 'jquilar',
})
@View({
  template: `
    <br/>
    <h2 class="section-header">
      Slider
    </h2>
    <div class="muted big">Slider object value: {{sliderVal}}</div>
    <jquilar-slider id="slider1" [val]="sliderVal" [step]="2" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider id="slider2" [orientation]="'vertical'" [val]="sliderVal" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider id="slider3" [val]="sliderVal" (stop)="sliderStopped($event)"></jquilar-slider>
    <br/>
    <button class="whiteonslategrey" role="button" (click)="resetSlider()">Reset slider object</button><br/><br/>
    <h2 class="section-header">
      Date Picker
    </h2>
    <jquilar-datepicker [val]="dateVal" (select)="dateSelected($event)" class="gold"></jquilar-datepicker>
    <jquilar-datepicker [val]="dateVal" (select)="dateSelected($event)" class="gold"></jquilar-datepicker><br/><br/>
    <button class="whiteonslategrey" role="button" (click)="resetDate()">Reset date object</button><br/><br/>
  `,
  directives: [jqUIlarSlider, jqUIlarDatePicker]
})

class JQUIlar {
  sliderVal: number;
  dateVal: string;
  constructor(private _ngZone: NgZone) {
    this.sliderVal = 50;
    this.dateVal = undefined; // or something like "01/10/2015"
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

  resetDate() {
    this.dateVal = undefined;
  }

}

bootstrap(JQUIlar);
