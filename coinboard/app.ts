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
        <div class="muted small">Block Score weight: <span class="bold">{{50 + transactionScoreWeight}}</span>%</div>
        <jquilar-slider id="slider1" [value]="transactionScoreWeight" [step]="2" (stop)="slider($event, 'transactionScoreWeight')"></jquilar-slider>

        <div class="muted small">Repossesion <span weight: <span class="bold">{{50 + repossesionWeight}}</span>%</div>
        <jquilar-slider id="slider2" [value]="repossesionWeight" (stop)="slider($event, 'repossesionWeight')"></jquilar-slider>

        <div class="muted small">Multiple Addresses weight: <span class="bold">{{50 + multipleAddressesWeight}}</span>%</div>
        <jquilar-slider id="slider3" [value]="multipleAddressesWeight" (stop)="slider($event, 'multipleAddressesWeight')"></jquilar-slider>

        <div class="muted small">Low Credit weight: <span class="bold">{{50 + lowCreditWeight}}</span>%</div>
        <jquilar-slider id="slider4" [value]="lowCreditWeight" (stop)="slider($event, 'lowCreditWeight')"></jquilar-slider>

        <div class="muted small">Lien weight: <span class="bold">{{50 + lienWeight}}</span>%</div>
        <jquilar-slider id="slider5" [value]="lienWeight" (stop)="slider($event, 'lienWeight')"></jquilar-slider>

        <div class="muted small">Arrest weight: <span class="bold">{{50 + arrestWeight}}</span>%</div>
        <jquilar-slider id="slider6" [value]="arrestWeight" (stop)="slider($event, 'arrestWeight')"></jquilar-slider>
      </div>
      <div id="fraud-db-results" class="cell" [innerHTML]="fraudDbResults">
      </div>
    </div>
  `,
  directives: [jqUIlarSlider, DashboardWidget]
})

class JQUIlar {
  transactionScoreWeight: number;
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
    this.resetSliders();
    this.fraudDbResults = '';
    let r = parseInt(Math.random() * 20);
    this.model = new Model(r);
    this.updateData(this.model.getIpData());
    this.transactionNumber = undefined;
    this.populatedIps = {};
  }

  slider(newVal, attrName) {
    this._ngZone.run(() => {
      this[attrName] = newVal;
      this.updateData(this.model.weightData(attrName, (50 + newVal)));
    });
  }

  ipSelected(ip) {
    if (!this.populatedIps[ip]) {
      this.updateData(this.model.populate(ip));
      this.fraudDbResults = this.model.reportFor(ip);
      this.populatedIps[ip] = true;
    }
  }

  resetSliders() {
    this.transactionScoreWeight = 50;
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
