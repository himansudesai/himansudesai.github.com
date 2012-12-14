App = Em.Application.create({});
App.Route = {};
App.result_message = "...";
App.user = '';
App.pwd = '';
App.scan_code = '';
App.eventTypes = ['777', '888'];


App.switchViewTo = function(viewName) {
  var childViewsArray = App.MainContent.get('childViews');
  var existingView = childViewsArray[0];
  if (existingView) {
    childViewsArray.removeObject(existingView);
  }
  childViewsArray.pushObject(App[viewName].create({}));
}

