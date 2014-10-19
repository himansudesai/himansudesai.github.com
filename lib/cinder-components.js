Cinder = {};


Cinder.BaseComponent = Ember.Mixin.create({
  addObserver: function(observer, callback, key, observed) {
    observed.addObserver(key, callback);
  },
  willDestroyElement: function() {
    if (this.observed != null) {
      console.log('removing ' + this.observer + ' as an observer of ' + this.observed + ' for key ' + this.key);
      this.observed.removeObserver(this.key, this.observer);
    }
  }
});


// Slider - Component.  Automatic 2-way binding if valueObject is provided
// Supports events: start
//                  stop
//                  change
//                  slide
// Supported options: step
//                    min
//                    max
//                    orientation
//                    animate
//                    disabled
Cinder.CinderJquiSliderComponent = Ember.Component.extend(Cinder.BaseComponent, {
  classNames: ['slider'],
  sliderStop: function(event, slider, valueObject) {
    this.valueObject.set('value', slider.value);
    this.sendAction('stop');
  },
  didInsertElement: function() {
    var self = this;
    var slider = (self.$()).slider({
      orientation: self.orientation,
      step: self.step,
      min: self.min,
      max: self.max,
      animate: self.animate,
      disabled: self.disabled,
      stop: self.sliderStop.bind(self),
      change: function() { self.sendAction('change') },
      slide: function() { self.sendAction('slide') },
      start: function() { self.sendAction('start') }
    });
    if (self.valueObject) {
      valueObject = self.valueObject;
      slider.slider({value: self.valueObject.value});
      var observingFn = function(observed) {
        slider.slider("option", "value", self.valueObject.value);
      };
      self.addObserver(self, observingFn, 'value', self.valueObject);
    }
  }
});


// Date Picker - Component
Cinder.CinderJquiDatepickerComponent = Ember.Component.extend(Cinder.BaseComponent, {
  didInsertElement: function() {
    var self = this;
    var date_picker = (self.$()).find("input").datepicker({
      changeYear: function() { self.sendAction('changeYear') },
      changeMonth: function() { self.sendAction('changeMonth') }
    });

    if (self.valueObject) {
      var on = self.valueObject;
      (self.$()).find("input").val(self.valueObject.get('value'));
      var observingFn = function() {
        (self.$()).find("input").val(self.valueObject.get('value'));
      };
      self.addObserver(self, observingFn, 'value', self.valueObject);
    }
  }
});


// Supports events: complete
//                  change
// Supported options: ---
Cinder.CinderJquiProgressbarComponent = Ember.Component.extend(Cinder.BaseComponent, {
  didInsertElement: function() {
    var self = this;
    var progress_bar = (self.$()).progressbar({
      complete: function() { self.sendAction('complete'); },
      change: function() { self.sendAction('change'); },
    });
    if (this.valueObject) {
      progress_bar.progressbar({value: this.valueObject.value})
      var observingFn = function(observed) {
        progress_bar.progressbar('value', self.valueObject.value);
      };
      self.addObserver(self, observingFn, 'value', self.valueObject);
    }
  }
});


// Tabs - View
// Supports events: select
// Supported options: collapsible
Cinder.CinderJquiTabsComponent = Ember.Component.extend(Cinder.BaseComponent, {
  tabSelect: function(event, tabs) {
    this.curTab.set('value', tabs.newTab.index());
  },
  numTabs: 0,
  didInsertElement: function() {
    var rand = Math.floor(Math.random()*500000);
    var self = this;
    if (self.tabs) {
      self.numTabs = self.tabs.content.length;
      var tabs_str = '<ul>';
      for (var i = 0; i < self.numTabs; i++) {
        tabs_str += '<li><a href=\"#tabs-' + rand + '-' + i + '\">' + self.tabs.content[i][0] + '</a></li>';
      }
      tabs_str += '</ul>';

      for (var i = 0; i < self.numTabs; i++) {
        tabs_str += '<div id=\"tabs-' + rand + '-' + i + '\">' + self.tabs.content[i][1] + '</div>';
      }
      (self.$()).append(tabs_str);
      self.tabs.addObserver('content', function() {
        ((self.$()).find('>div')).each(function(index) {
          $(this).html(self.tabs.content[index][1]);
        });
        ((self.$()).find('ul li a')).each(function(index) {
          $(this).text(self.tabs.content[index][0]);
        });
      });
      self.curTab.addObserver('value', function() {
        (self.$()).tabs("option", "active", self.curTab.get('value'));
      });
      (self.$()).tabs({
        activate: self.tabSelect.bind(self),
        collapsible: self.collapsible
      });
     (self.$()).tabs("option", "active", self.curTab.get('value'));
    }
  }
});


document.write('<script type="text/x-handlebars" data-template-name="components/cinder-jqui-slider"></script>');
document.write('<script type="text/x-handlebars" data-template-name="components/cinder-jqui-datepicker"><input type=\"text\"></input></script>');
document.write('<script type="text/x-handlebars" data-template-name="components/cinder-jqui-progressbar"></script>');
document.write('<script type="text/x-handlebars" data-template-name="components/cinder-jqui-tabs"></script>');

Cinder.hookupComponents = function(app) {
  app.CinderJquiSliderComponent = Cinder.CinderJquiSliderComponent;
  app.CinderJquiDatepickerComponent = Cinder.CinderJquiDatepickerComponent;
  app.CinderJquiProgressbarComponent = Cinder.CinderJquiProgressbarComponent;
  app.CinderJquiTabsComponent = Cinder.CinderJquiTabsComponent;
}

// About Cinder - Header
document.write("<script type=\"text/x-handlebars\" data-template-name=\"cinder-about-hdr\"><div id=\"about-hdr\">" +
                    "<p>Cinder is an Ember based ease-of-use wrapper around the popular " +
                    "jQuery UI library. Widgets can be instantiated on standard Ember data objects.  " +
                    "Cinder will provide <i>bi-directional</i> data propagation.<br/><br/>" +
                    "</p></div></script>");

Cinder.AboutHdr = Ember.View.extend({
  templateName: 'cinder-about-hdr'
});
// About Cinder - Footer
document.write("<script type=\"text/x-handlebars\" data-template-name=\"cinder-about-ftr\"><div id=\"about-ftr\">" +
                    "<p><b>*</b> Widgets can be programmatically controlled by " +
                    "manipulating the data model. <br/>" +
                    "<b>*</b> In many instances, client code will not need to react " +
                    "to events directly. Data will automatically be updated " +
                    "when relevant events occur (e.g. slider stops sliding " +
                    "or the date picker dialog closes).  If app specific subclasses of " +
                    "Cinder Views are used, and have event handlers defined, " +
                    "they will get called as well.</p></div></script>");
// About Cinder - View
Cinder.AboutFtr = Ember.View.extend({
  templateName: 'cinder-about-ftr'
});
