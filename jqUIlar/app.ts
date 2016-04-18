import {bootstrap} from "angular2/platform/browser";
import {Component, View, EventEmitter, NgZone} from "angular2/core";
import { NgFor } from "angular2/common";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import {Inject} from 'angular2/core';
import { jqUIlarSlider, jqUIlarDatePicker, jqUIlarProgressBar, jqUIlarSortable, jqUIlarMenu, jqUIlarEffect, jqUIlarAccordion, jqUIlarTooltip } from './jquilar.js';

@Component({
  selector: 'jquilar',
})
@View({
  template: `
    <br/>
    <p class="grey">jquilar.js is on github @ https://github.com/himansudesai/jquilar.js</p>
    <p class="grey">currently supported: Effect, Sortable, Slider, Date Picker, Progress Bar, Menu</p>
    <p class="grey">support for all widgets and interactions coming soon...</p>
    <br/>

    <!-- Slider -->
    <div class="section-header">
      <span>Slider</span><p class="code-snippet">\n&lt;jquilar-slider [valueObj]=&quot;some_val&quot; (stop)=&quot;func($event)&quot;&gt;&lt;/jquilar-slider&gt;/jquilar-slider&gt;</p>
    </div>
    <div class="muted big">Current value: {{sliderVal}}</div>
    <jquilar-slider id="slider1" [value]="sliderVal" [step]="2" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider id="slider2" [orientation]="'vertical'" [value]="sliderVal" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider id="slider3" [value]="sliderVal" (stop)="sliderStopped($event)"></jquilar-slider>
    <br/>
    <button class="whiteonbluishslategrey" role="button" (click)="resetSlider()">Reset data</button>
    <br/><br/>

    <!-- Date Picker -->
    <div class="section-header">
      <span>Date Picker</span><p class="code-snippet">&lt;jquilar-datepicker [value]=&quot;dateObj&quot; (select)=&quot;func($event)&quot;&gt;&lt;/jquilar-datepicker&gt;</p>
    </div>
    <jquilar-datepicker [value]="dateVal" [changeMonth]="true" [changeYear]="true" (select)="dateSelected($event)" class="gold"></jquilar-datepicker>
    <jquilar-datepicker [value]="dateVal" (select)="dateSelected($event)" class="gold"></jquilar-datepicker><br/><br/>
    <button class="whiteonbluishslategrey" role="button" (click)="resetDate()">Reset data</button>
    <br/><br/>

    <!-- Progress Bar -->
    <div class="section-header">
      <span>Progress Bar</span><p class="code-snippet">&lt;jquilar-progressbar [value]=&quot;progressVal&quot; (change)=&quot;progressChanged($event)&quot; class=&quot;gold&quot;&gt;&lt;/jquilar-progressbar&gt;</p>
    </div>
    <div class="muted big">Current value: {{progressVal}}</div>
    <jquilar-progressbar [value]="progressVal" (change)="progressChanged($event)" class="gold"></jquilar-progressbar><br/>
    <jquilar-progressbar [value]="progressVal" (select)="progressChanged($event)" class="gold"></jquilar-progressbar><br/>
    <button class="whiteonbluishslategrey" role="button" (click)="decProgressBar()">-10</button>
    <button class="whiteonbluishslategrey" role="button" (click)="resetProgressBar()">Reset data</button>
    <button class="whiteonbluishslategrey" role="button" (click)="incProgressBar()">+10</button>
    <br/><br/>

  <!-- Menu -->
    <div class="section-header">
      <span>Menu</span><p class="code-snippet">&lt;jquilar-menu [menu]=&quot;myList&quot; (select)=&quot;func($event)&quot;&gt;&lt;/jquilar-menu&gt;</p>
    </div>
    <div class="muted big">Last selected: {{menuSelection}}</div>
    <button class="whiteonbluishslategrey" role="button" (click)="veggiesMenu()">Veggies</button><br/><br/>
    <jquilar-menu [menu]="menu" (select)="menuSelected($event)" class="gold"></jquilar-menu>
    <br/><br/><br/><br/><br/><br/><br/>

    <!-- Effect -->
    <div class="section-header">
      <span>Effect</span><p class="code-snippet">&lt;jquilar-effect [effects]=&quot;effectsContainer&quot;&gt;&lt;/jquilar-menu&gt;</p>
    </div>
    <jquilar-effect [effectsHandle]="effectsHandle" (completed)="effectCompleted()">
      <div class="toggler">
        <div id="effect" class="ui-widget-content ui-corner-all">
          <h3 class="ui-widget-header ui-corner-all">Help, I'm trapped in a glass box</h3>
          <p><img style="float: right;" src="./images/puppy.png">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.          
          </p>
        </div>
      </div>
    </jquilar-effect>
    <br/>
    <select id="effected" #sel (change)="effectTypeChanged(sel)"><option *ngFor="#effect of effectTypes">{{effect}}</option></select>
    <button class="whiteonbluishslategrey" role="button" (click)="runEffect()">Run Effect</button>
    <br/><br/>

    <!-- Accordion -->
    <div class="section-header">
      <span>Accordion</span><p class="code-snippet">&lt;jquilar-accordion [sections]=&quot;sectionData&quot;&gt; &lt;/jquilar-accordion&gt;</p>
    </div>
    <jquilar-accordion [sections]="accordionData"></jquilar-accordion>
    <br/>
    <button class="whiteonbluishslategrey" role="button" (click)="setAccordionDataToDogs()">Dogs</button>
    <button class="whiteonbluishslategrey" role="button" (click)="setAccordionDataToCats()">Cats</button>
    <br/><br/>


    <!-- Tooltip -->
    <div class="section-header">
      <span>Tooltip</span><p class="code-snippet">&lt;jquilar-tooltip [tooltip]=&quot;tip&quot;&gt; &lt;/jquilar-tooltip&gt;</p>
    </div>
    <jquilar-tooltip [tooltip]="tip">
      <label>Age:&nbsp;</label>
      <input />
      <br/><span class="grey">Hover to see tooltip, before/after hitting the button below</span>
    </jquilar-tooltip>
    <button class="whiteonbluishslategrey" role="button" (click)="changeTooltip()">Change Tooltip</button>
    <br/><br/>


    <!-- Sortable -->
    <div class="section-header">
      <span>Sortable</span><p class="code-snippet">&lt;jquilar-sortable [list]=&quot;myList&quot; (sort)=&quot;func($event)&quot;&gt;&lt;/jquilar-sortable&gt;</p>
    </div>
    <div class="muted big">Current value: {{sortableList}}</div>
    <jquilar-sortable [list]="sortableList" (sort)="listSorted($event)" class="gold"></jquilar-sortable>
    <button class="whiteonbluishslategrey" role="button" (click)="fruitsSortableList()">Reset data</button>
    <button class="whiteonbluishslategrey" role="button" (click)="veggiesSortableList()">Veggies</button>
    <button class="whiteonbluishslategrey" role="button" (click)="fruitsSortableList()">Fruits</button>
    <br/><br/>
  `,
  directives: [ NgFor, jqUIlarSlider, jqUIlarDatePicker, jqUIlarProgressBar, jqUIlarSortable, jqUIlarMenu, jqUIlarEffect, jqUIlarAccordion, jqUIlarTooltip ]
})


class JQUIlar {
  sliderVal: number;
  dateVal: string;
  progressVal: number;
  sortableList: Array<string>;
  menu: Array<any>;
  menuSelection: string;
  effectsHandle: Object;
  effectTypes: Array<string>;
  selectedEffect: string;
  accordionData: Array<Object>;
  tip: String;

  constructor(private _ngZone: NgZone) {
    this.sliderVal = 50;
    this.dateVal = undefined; // or something like "01/10/2015"
    this.progressVal = 50;
    this.sortableList = ['Apple', 'Banana', 'Cherry'];
    this.menu = [ { Apple: [{ Green: ['Mutsu', 'Granny Smith'] }, { Red: ['Macintosh', { Washington: false }] }]}, { Banana: ['Cavendish', 'Plantain'] }, { Cherry: false }, 'Date'];
    this.effectsHandle = {
      runEffect: function() {
        console.log('ERROR - this function should have been overwritten by the jquilar library');
      }
    }
    this.effectTypes = ['explode', 'puff', 'bounce', 'shake', 'blind', 'fade', 'fold', 'pulsate', 'highlight'];
    this.selectedEffect = this.effectTypes[0];
    this.setAccordionDataToDogs();
    this.tip = 'We ask for your age, only for statistical purposes';
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

  listSorted(x) {
    let y = $(x.target).find('li');
    let tempArray = [];
    for (let i=0; i<y.length; i++) {
      tempArray.push(y[i].textContent);
    }
    this._ngZone.run(() => {
      this.sortableList = tempArray;
    });
  }

  veggiesSortableList() {
    this.sortableList = ['Asparagus', 'Broccoli', 'Celery'];
  }
  fruitsSortableList() {
    this.sortableList = ['Apple', 'Banana', 'Cherry'];
  }

  menuSelected(item) {
    this._ngZone.run(() => {
      this.menuSelection = item;
    });
  }

  veggiesMenu() {
    this.menu = ['Asparagus', 'Broccoli', 'Carrot'];
  }

  runEffect() {
    this.effectsHandle.runEffect(this.selectedEffect);
  }

  effectCompleted() {
    this.effectsHandle.restoreElement();
  }

  effectTypeChanged(sel) {
    this.selectedEffect = sel.value;
  }

  setAccordionDataToDogs() {
    this.accordionData = [
       {
         heading: 'Labrador',
         body: `<img src="./images/lab.jpg">`
       },
       {
         heading: 'Terrier',
         body: `<img src="./images/terrier.jpg">`
       },
       {
         heading: 'Malamute',
         body: `<img src="./images/malamute.jpg">`
       },
       {
         heading: 'Beagle',
         body: `<img src="./images/beagle.jpg">`
       }
    ];
  }
  
  setAccordionDataToCats() {
    this.accordionData = [
       {
         heading: 'Persion',
         body: `<img src="images/persian.jpg" alt="Persian" />`
       },
       {
         heading: 'Toyger',
         body: `<img src="images/toyger.jpg" alt="Terrier" />`
       },
       {
         heading: 'Tabby',
         body: `<img src="images/tabby.jpg" alt="Malamute" />`
       },
       {
         heading: 'Serengiti',
         body: `
            <div>
              <img src="images/serengeti.jpg" alt="Beagle" /> <br/>
              <span class="indianred">I am scared. Where is my mommy?</span>
            </div>`
       }
    ];
  }
  
  changeTooltip() {
    this.tip = 'Most likely, your age will be used against you!';
  }

}

bootstrap(JQUIlar);
