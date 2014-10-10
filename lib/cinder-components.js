Cinder = {};


Cinder.uiEvent = function(eventType, event, jqUI, htmlElement) {
  var emberView = null;
  var id = ($(htmlElement)).attr("id");
  console.log("++++ html element id = " + id);

  if (id !== null) {
    var emberView = Ember.View.views[id];
    console.log("++++ emberView = " + emberView);
    for (att in emberView){
      console.log("att = " + att);
    }
    if (emberView !== null) {
      console.log("++++ emberView[eventType] = " + emberView[eventType] + ' event = ' + eventType);
      if(emberView[eventType]) {
        emberView[eventType](event, jqUI);
      }
    }
  }
  return emberView;
}

Cinder.BaseComp = Ember.Mixin.create({
  observed: null,
  observer: null,
  key: '',
  addObserver: function(observer, callback, key, observed) {
    observed.addObserver(key, callback);
    this.observed = observed;
    this.observer = observer;
    this.key = key;
  },
  willDestroyElement: function() {
    // View is being destroyed
    if (this.observed != null) {
      console.log('removing ' + this.observer + ' as an observer of ' + this.observed + ' for key ' + this.key);
      this.observed.removeObserver(this.key, this.observer);
    }
  }
});


Cinder.JquerySliderComponent = Ember.Component.extend(Cinder.BaseComp, {
  classNames: ['slider'],
  sliderStop: function(event, slider) {
    console.log("++++ slider stop");
    var emberView = Cinder.uiEvent('stop', event, slider, this);
    if (emberView.valueObject) {
      emberView.valueObject.set('value', slider.value);
    }
  },
  didInsertElement: function() {
    console.log("++++ didInsertElement");
    var self = this;
    var slider = (self.$()).slider({
      slide: function(event, slider) { Cinder.uiEvent('slide', event, slider, this);},
      stop: self.sliderStop,
      animate: self.animate
    });
    if (self.valueObject) {
      slider.slider({value: self.valueObject.value});
      var observingFn = function(observed) {
        console.log("++++ observed something");
        slider.slider("option", "value", self.valueObject.value);
      };
      self.addObserver(self, observingFn, 'value', self.valueObject);
    }
  }
});

document.write('<script type="text/x-handlebars" data-template-name="components/jquery-slider"></script>');


Cinder.hookupComponents = function(app) {
  app.JquerySliderComponent = Cinder.JquerySliderComponent;
}
