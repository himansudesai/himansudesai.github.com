import {bootstrap} from "angular2/platform/browser";
import {Component, View, EventEmitter, NgZone} from "angular2/core";
import { NgFor } from "angular2/common";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import {Inject} from 'angular2/core';
import { jqUIlarSlider, jqUIlarDatePicker, jqUIlarProgressBar, jqUIlarSortable, jqUIlarMenu} from './jquilar.js';
import { DashboardWidget } from './dashboard_widget.js';

@Component({
  selector: 'jquilar',
})
@View({
  template: `
    <label>Transaction Number</label>&nbsp;<input placeholder="1..20">&nbsp;
    <button class="whiteonbluishslategrey" role="button" (click)="resetSlider()">Analyze</button><br/><br/>
    <dashboard [dat]="dat" [hash]="dashboardHash" (select)="ipSelected($event)"></dashboard>
    <br/>
    <div class="tbl">
      <div class="cell">
        <div class="muted small">Transaction Score: {{transactionScoreWeight * 2}}%</div>
        <jquilar-slider id="slider1" [value]="transactionScoreWeight" [step]="2" (stop)="transactionScoreSliderStopped($event)"></jquilar-slider>

        <div class="muted small">Repossesion: {{repossesionWeight * 2}}%</div>
        <jquilar-slider id="slider2" [value]="repossesionWeight" (stop)="repossesionSliderStopped($event)"></jquilar-slider>

        <div class="muted small">Multiple Addresses: {{multipleAddressesWeight * 2}}%</div>
        <jquilar-slider id="slider3" [value]="multipleAddressesWeight" (stop)="multipleAddressesSliderStopped($event)"></jquilar-slider>

        <div class="muted small">Low Credit: {{lowCreditWeight * 2}}%</div>
        <jquilar-slider id="slider4" [value]="lowCreditWeight" (stop)="lowCreditSliderStopped($event)"></jquilar-slider>

        <div class="muted small">Lien: {{lienWeight * 2}}%</div>
        <jquilar-slider id="slider5" [value]="lienWeight" (stop)="lienSliderStopped($event)"></jquilar-slider>

        <div class="muted small">Arrest: {{arrestWeight * 2}}%</div>
        <jquilar-slider id="slider6" [value]="arrestWeight" (stop)="arrestSliderStopped($event)"></jquilar-slider>
      </div>
      <div id="fraud-db-results" class="cell" [innerHTML]="fraudDbResults">
      </div>
    </div>
    <br/>
  `,
  directives: [jqUIlarSlider, DashboardWidget]
})

// <button class="whiteonbluishslategrey" role="button" (click)="resetSlider()">Reset data</button><br/><br/>

class JQUIlar {
  transactionScoreWeight: number;
  repossesionWeight: number;
  multipleAddressesWeight: number;
  lowCreditWeight: number;
  lienWeight: number;
  arrestWeight: number;
  fraudDbResults: string;

  dat: Array<Object>;
  dashboardHash: number;
  dateVal: string;
  progressVal: number;
  sortableList: Array<string>;
  myMenu: Array<string>;
  constructor(private _ngZone: NgZone) {
    this.transactionScoreWeight = 50;
    this.repossesionWeight = 50;
    this.multipleAddressesWeight = 50;
    this.lowCreditWeight = 50;
    this.lienWeight = 50;
    this.arrestWeight = 50;
    this.dashboardHash = 9999;
    this.fraudDbResults = `
        Lorem ipsum dolor sit amet, <span class="highlight">lien</span>consectetur
        adipiscing elit. Morbi malesuada turpis a odio fermentum, in suscipit turpis
        posuere. Nulla dapibus a sapien sed vulputate. Donec in purus ac neque sollicitudin
        lacinia. Vivamus sit amet sapien at ex venenatis semper vel sed sapien. Donec sed
        erat pellentesque, placerat enim in, condimentum orci. Suspendisse egestas,
        odio non iaculis tristique, purus magna mattis purus, <span class="highlight">arrest</span> ut condimentum magna
        ante eget eros. Donec tempus est tempus tristique mollis. Fusce ultrices quis
        justo non gravida. Suspendisse vitae ornare eros.

        Mauris accumsan sem turpis, eu porta felis imperdiet et. Donec ut orci id lacus
        semper dignissim at eget nisi. Integer consectetur facilisis libero, vel laoreet
        tortor vulputate ac. Proin tristique tincidunt mauris eget malesuada. In posuere
        sed velit sit amet vestibulum. Aenean volutpat tortor vitae sodales sodales. Nulla
        nec placerat sapien, eleifend lobortis neque. Proin vulputate sed libero at auctor.
        Cras dapibus est nibh, vel pellentesque enim semper vitae. Duis blandit risus et porta
        sollicitudin. Cras ac ligula convallis, rhoncus ligula vel, vulputate lectus.`;
    this.dat = [
      {
        '230.73.120.127': {
          'Transaction Score' : {val: 40},
          'Repossesion' : {val: 40},
          'Multiple Addresses' : {val: 50},
          'Negative Credit' : {val: 60},
          'Lien' : {val: 80},
          'Arrest' : {val: 40},
          'Risk' : {val: 70, id: '230.73.120.127'}
        }
      },
      {
        '206.190.36.105': {
          'Transaction Score' : {val: 80},
          'Repossesion' : {val: 40},
          'Multiple Addresses' : {val: 50},
          'Negative Credit' : {val: 60},
          'Lien' : {val: 80},
          'Arrest' : {val: 40},
          'Risk' : {val: 70, id: '206.190.36.105'}
        }
      },
      {
        '192.64.119.237': {
          'Transaction Score' : {val: 50},
          'Repossesion' : {val: 40},
          'Multiple Addresses' : {val: 50},
          'Negative Credit' : {val: 60},
          'Lien' : {val: 80},
          'Arrest' : {val: 40},
          'Risk' : {val: 70, id: '192.64.119.237'}
        }
      },
      {
        '204.79.197.200': {
          'Transaction Score' : {val: 60},
          'Repossesion' : {val: 40},
          'Multiple Addresses' : {val: 50},
          'Negative Credit' : {val: 60},
          'Lien' : {val: 80},
          'Arrest' : {val: 40},
          'Risk' : {val: 70, id: '204.79.197.200'}
        }
      }
    ];
  }

  transactionScoreSliderStopped(newVal) {
    this._ngZone.run(() => {
      this.transactionScoreWeight = newVal;
    });
  }
  repossesionSliderStopped(newVal) {
    this._ngZone.run(() => {
      this.repossesionWeight = newVal;
    });
  }
  multipleAddressesSliderStopped(newVal) {
    this._ngZone.run(() => {
      this.multipleAddressesWeight = newVal;
    });
  }
  lowCreditSliderStopped(newVal) {
    this._ngZone.run(() => {
      this.lowCreditWeight = newVal;
    });
  }
  lienSliderStopped(newVal) {
    this._ngZone.run(() => {
      this.lienWeight = newVal;
    });
  }
  arrestSliderStopped(newVal) {
    this._ngZone.run(() => {
      this.arrestWeight = newVal;
    });
  }

  resetSlider() {
    this.transactionScoreWeight = 50;
    this.repossesionWeight = 50;
    var newScore = parseInt(Math.random() * 100);
    this.dat[3]['204.79.197.200']['Transaction Score'].val = newScore;
    this.dashboardHash = Math.random();
  }

  ipSelected(ip) {
    alert('event worked ALL the way up to the app ' + ip);
  }
}

bootstrap(JQUIlar);
