import { Component, EventEmitter } from "angular2/core";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import { Inject } from 'angular2/core';

// dashboard component
@Component({
  selector: 'dashboard',
  inputs: ['dat', 'hash'],
  events: ['select'],
  template: '<div class="dashboard"></div>'
})

export class DashboardWidget {
  dat: Array<Object>;
  hash: number;
  select: EventEmitter<number>;
  domElement: any;
  db: any;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.domElement = elementRef.nativeElement;
    this.select = new EventEmitter();
    this.dat = [];
    this.hash = 0;
  }

  ngAfterContentInit() {
    console.log('DW - ngAfterContentInit');
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    console.log('DW - ngOnChanges');
    for (let change in changes) {
      this[change] = changes[change] ? changes[change].currentValue : this[change];
    }
    if (this.dat) {
      if (!this.db) {
        this.db = new Dashboard(this.dat, (x) => this.select.next(x) );
      } else {
        this.db.render(this.dat);
      }
    }
  }
}
