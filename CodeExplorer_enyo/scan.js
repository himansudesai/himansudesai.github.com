enyo.kind({
  name: "Scan",
  tag: "div",
  style: "padding-left: 10px; padding-right: 10px",
  components: [
    { kind: "onyx.Button", style: "float: left;", classes: "ce-blue", content: "Back", ontap: "backButtonTapped"},
    { kind: "onyx.Button", style: "float: right;", classes: "ce-blue", content: "Retrieve Code", ontap: "retrieveButtonTapped"},
    { tag: "br"},
    { tag: "br"},
    { tag: "br"},
    { kind: "onyx.InputDecorator", components: [{ kind: "onyx.Input", name: "code", placeholder: "code", style: "width: 96%", defaultFocus: true}]},
    { tag: "br"},
    { tag: "br"},
    { tag: "br"},
    { tag: "br"},
    { kind: "onyx.Button", id: "scanbutton", style: "width: 100%;", classes: "ce-blue", content: "Scan", ontap: "buttonTapped"},
    { tag: "br"},
    { name: 'feedback', content: 'Server Response'}
  ],
  retrieveButtonTapped: function(inSender, inEvent) {
    var request = new enyo.Ajax({
      url: "http://localhost:3000/ce/event_types",
      method: "POST",
      handleAs: "json"
    });
    request.response(enyo.bind(this, "processResponse"));
    request.go({code: this.$.code.getValue()});
  },
  processResponse: function(inRequest, inResponse) {
    if (inResponse['ok']) {
      var events = JSON.parse(inResponse['msg']);
      enyo.$.app.switchToComponent(new Eventtypes({events: events}));
    }
    else
      alert('Something went wrong');
  },
  userFeedback: function(feedback) {
    this.$.feedback.setContent(feedback);
  }
});
