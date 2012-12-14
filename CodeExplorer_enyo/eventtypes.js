enyo.kind({
  name: "Event",
  classes: "event-item",
  content: "Hello Check"
});

enyo.kind({
  name: "Eventtypes",
  tag: "div",
  style: "padding-left: 10px; padding-right: 10px",
  create: function() {
    this.inherited(arguments);
    this.$.listy.setCount(this.events.length);
  },
  components: [{ kind: "Repeater",
    name: 'listy',
    count: 0,
    onSetupItem: "setupItem",
    components: [{ kind: "Event", ontap: "itemTap"}]
  }],
  setupItem: function(inSender, inEvent) {
    var index = inEvent.index;
    var item = inEvent.item;
    item.$.event.setContent(this.events[index]);
    return true;
  },
  itemTap: function(inSender, inEvent) {
    alert("You tapped on " + inSender.getContent());
  }
});
