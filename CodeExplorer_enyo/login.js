enyo.kind({
  name: "Login",
  id: "loginpage",
  tag: "div",
  style: "padding-left: 40px; padding-right: 40px",
  components: [
    { kind: "onyx.InputDecorator", components: [{ kind: "onyx.Input", name: "email", placeholder: "email", style: "width: 96%", defaultFocus: true}]},
    { tag: "br"},
    { tag: "div", classes: "mobile-textfield-separator"},
    { kind: "onyx.InputDecorator", components: [{ kind: "onyx.Input", name: "password", style: "width: 96%;", type: "password", placeholder: "password"}]},
    { tag: "br"},
    { tag: "br"},
    { tag: "br"},
    { kind: "onyx.Button", id: "loginbutton", style: "width: 100%;", classes: "ce-blue", content: "Login", ontap: "buttonTapped"},
    { tag: "br"},
    { name: 'feedback', content: 'Server Response'}
  ],
  buttonTapped: function(inSender, inEvent) {
    var request = new enyo.Ajax({
      url: "http://localhost:3000/users/sign_in",
      method: "POST",
      handleAs: "json"
    });
    request.response(enyo.bind(this, "processResponse"));
    request.go({email: this.$.email.getValue(), password: this.$.password.getValue(), code_explorer: true});
  },
  processResponse: function(inRequest, inResponse) {
    if (inResponse['ok'])
      enyo.$.app.switchToComponent(new Scan());
    else
      this.userFeedback('email or password wrong');
  },
  userFeedback: function(feedback) {
    this.$.feedback.setContent(feedback);
  }
});
