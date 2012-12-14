enyo.kind({
  name: "App",
  components: [
      { tag: "div", components: [
        { tag: "h1", classes: "ce-blue title-bar", content: "Code Explorer"},
        { kind: "Login", name: "currentPage"}
      ]}
  ],
  switchToComponent: function(comp) {
    var curPageWrapper = this.children[0];
    var children = curPageWrapper.children;
    for (var i=1; i<children.length; i++)
      curPageWrapper.removeChild(children[i]);
    curPageWrapper.addChild(comp);
    curPageWrapper.render();
  }
});
