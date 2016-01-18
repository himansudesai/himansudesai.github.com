import {bootstrap} from "angular2/platform/browser";
import {Component, View, EventEmitter, NgZone} from "angular2/core";
import { NgFor } from "angular2/common";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import {Inject} from 'angular2/core';
import { jqUIlarSlider, jqUIlarDatePicker, jqUIlarProgressBar } from './jquilar.js';

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
    <jquilar-slider id="slider1" [value]="sliderVal" [step]="2" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider id="slider2" [orientation]="'vertical'" [value]="sliderVal" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider id="slider3" [value]="sliderVal" (stop)="sliderStopped($event)"></jquilar-slider>
    <br/>
    <button class="whiteonslategrey" role="button" (click)="resetSlider()">Reset slider object</button><br/><br/>
    <h2 class="section-header">
      Date Picker
    </h2>
    <jquilar-datepicker [value]="dateVal" [changeMonth]="true" [changeYear]="true" (select)="dateSelected($event)" class="gold"></jquilar-datepicker>
    <jquilar-datepicker [value]="dateVal" (select)="dateSelected($event)" class="gold"></jquilar-datepicker><br/><br/>
    <button class="whiteonslategrey" role="button" (click)="resetDate()">Reset date object</button><br/><br/>
    <h2 class="section-header">
      Progress Bar
    </h2>
    <div class="muted big">Current value: {{progressVal}}</div>
    <jquilar-progressbar [value]="progressVal" (change)="progressChanged($event)" class="gold"></jquilar-progressbar><br/>
    <jquilar-progressbar [value]="progressVal" (select)="progressChanged($event)" class="gold"></jquilar-progressbar><br/>
    <button class="whiteonslategrey" role="button" (click)="decProgressBar()">Dec</button>
    <button class="whiteonslategrey" role="button" (click)="resetProgressBar()">Reset Progress Object</button>
    <button class="whiteonslategrey" role="button" (click)="incProgressBar()">Inc</button><br/><br/>
  `,
  directives: [jqUIlarSlider, jqUIlarDatePicker, jqUIlarProgressBar]
})

class JQUIlar {
  sliderVal: number;
  dateVal: string;
  progressVal: number;
  constructor(private _ngZone: NgZone) {
    this.sliderVal = 50;
    this.dateVal = undefined; // or something like "01/10/2015"
    this.progressVal = 50;
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

  progressChanged(progress) {
    this._ngZone.run(() => {
      this.progressVal = progress;
    });
  }

  resetSlider() {
    this.sliderVal = 50;
  }

  resetDate() {
    this.dateVal = undefined;
  }

  decProgressBar() {
    if (this.progressVal > 9) {
      this.progressVal -= 10;
    }
  }
  resetProgressBar() {
    this.progressVal = 50;
  }
  incProgressBar() {
    if (this.progressVal < 91) {
      this.progressVal += 10;
    }
  }

}

bootstrap(JQUIlar);
