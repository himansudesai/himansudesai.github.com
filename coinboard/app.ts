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
    <dashboard [dat]="dat" [hash]="dashboardHash" (select)="ipSelected($event)"></dashboard>
    <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="whiteonbluishslategrey" role="button" (click)="resetSliders()">Reset</button>
    <div class="tbl">
      <div class="cell">
        <div class="muted small">Block Score weight: <span class="bold">{{100 + (blockScoreWeight - 50)/2}}</span>%</div>
        <jquilar-slider id="slider1" [value]="blockScoreWeight" [step]="2" (stop)="slider($event, 'blockScoreWeight', 'Block Score')"></jquilar-slider>

        <div class="muted small">Repossesion <span weight: <span class="bold">{{100 + (repossesionWeight - 50)/2}}</span>%</div>
        <jquilar-slider id="slider2" [value]="repossesionWeight" (stop)="slider($event, 'repossesionWeight', 'Repossesion')"></jquilar-slider>

        <div class="muted small">Multiple Addresses weight: <span class="bold">{{100 + (multipleAddressesWeight - 50)/2}}</span>%</div>
        <jquilar-slider id="slider3" [value]="multipleAddressesWeight" (stop)="slider($event, 'multipleAddressesWeight', 'Multiple Addresses')"></jquilar-slider>

        <div class="muted small">Low Credit weight: <span class="bold">{{100 + (lowCreditWeight - 50)/2}}</span>%</div>
        <jquilar-slider id="slider4" [value]="lowCreditWeight" (stop)="slider($event, 'lowCreditWeight', 'Negative Credit')"></jquilar-slider>

        <div class="muted small">Lien weight: <span class="bold">{{100 + (lienWeight - 50)/2}}</span>%</div>
        <jquilar-slider id="slider5" [value]="lienWeight" (stop)="slider($event, 'lienWeight', 'Lien')"></jquilar-slider>

        <div class="muted small">Arrest weight: <span class="bold">{{100 + (arrestWeight - 50)/2}}</span>%</div>
        <jquilar-slider id="slider6" [value]="arrestWeight" (stop)="slider($event, 'arrestWeight', 'Arrest')"></jquilar-slider>
      </div>
      <div id="fraud-db-results" class="cell" [innerHTML]="fraudDbResults">
      </div>
    </div>
  `,
  directives: [jqUIlarSlider, DashboardWidget]
})

class JQUIlar {
  blockScoreWeight: number;
  repossesionWeight: number;
  multipleAddressesWeight: number;
  lowCreditWeight: number;
  lienWeight: number;
  arrestWeight: number;
  fraudDbResults: string;
  model: Object;
  transactionNumber: number;
  populatedIps: Object;

  dat: Array<Object>;
  dashboardHash: number;
  dateVal: string;
  progressVal: number;
  sortableList: Array<string>;
  myMenu: Array<string>;
  constructor(private _ngZone: NgZone) {
    this.initializeSliders();
    this.fraudDbResults = '';
    let r = parseInt(Math.random() * 20);
    this.model = new Model(r);
    this.updateData(this.model.getIpData());
    this.transactionNumber = undefined;
    this.populatedIps = {};
  }

  slider(newVal, attrName, label) {
    this._ngZone.run(() => {
      var oldVal = this[attrName];
      this[attrName] = newVal;

      var oldRatio = 1 + (  (oldVal - 50) / 200 )
      var newRatio = 1 + (  (newVal - 50) / 200 )
      var ratio = newRatio / oldRatio;
      this.updateData(this.model.weighData(label, ratio));
    });
  }

  ipSelected(ip) {
    if (!this.populatedIps[ip]) {
      this.updateData(this.model.populate(ip));
      this.fraudDbResults = this.model.reportFor(ip);
      console.log('fraudDbResults = ' + this.fraudDbResults);
      this.populatedIps[ip] = true;
    } else {
      this.fraudDbResults = this.model.reportFor(ip);
    }
  }

  resetSliders() {
    this.slider(50, 'blockScoreWeight', 'Block Score');
    this.slider(50, 'repossesionWeight', 'Repossesion');
    this.slider(50, 'multipleAddressesWeight', 'Multiple Addresses');
    this.slider(50, 'lowCreditWeight', 'Negative Credit');
    this.slider(50, 'lienWeight', 'Lien');
    this.slider(50, 'arrestWeight', 'Arrest');
    this.initializeSliders();
  }

  initializeSliders() {
    this.blockScoreWeight = 50;
    this.repossesionWeight = 50;
    this.multipleAddressesWeight = 50;
    this.lowCreditWeight = 50;
    this.lienWeight = 50;
    this.arrestWeight = 50;
  }

  updateData(newData) {
    this.dat = newData;
    this.dashboardHash = Math.random();
  }
}

bootstrap(JQUIlar);
