enyo.kind({
    name: "Thumbnail",
    kind: "enyo.Control",
    classes: "category",
    tag: "div",
    index: 0,
    ontap: "thumbnailClicked",
    create: function() {
        this.inherited(arguments);
        this.setContent(this.label);
        this.$.icon.setAttribute('src', 'img/icon' + this.index + '.png');
        this.$.main.setAttribute('src', 'img/puppy' + this.index + '.jpg');
    },
    components: [
        { tag: 'div', classes: "content", components: [
            { tag: 'img', name: 'icon', src: '', classes: 'ikon' },
            { tag: 'img', name: 'main', src: '' }
        ]}
    ]
});

enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
    idx: 1,
	components: [
		{kind: "enyo.Scroller", fit: true, components: [
            {
                kind: "Panels",
                name: "myPanels",
                fit: true,
                classes: "app-panels",
                components: [
                    {kind: "enyo.Control",
                        components: [
                        {tag: 'br'},
                        {
                            kind: "onyx.InputDecorator", classes: "login-panel-item",
                            components: [
                                { name: "username", kind: "onyx.Input", classes: "login-panel-item", placeholder: "username..." }
                            ]
                        },
                        {tag: 'br'},{tag: 'br'},
                        {
                            kind: "onyx.InputDecorator",
                            components: [{ name: "password", kind: "onyx.Input", placeholder: "password..." }]
                        },
                        {tag: 'br'},{tag: 'br'},
                        {
                            kind: "onyx.Button", content: "Login", ontap: "doLogin"
                        }
                      ]
                    },
                    {kind: "enyo.Scroller", classes: "content-panel", fit: true, components: [ {name: "MyMiddlePanel", content: "bar"}]}
                ]
            }
		]},
        {name: "basicPopup", kind: "onyx.Popup", floating: true, centered: true, modal: true, scrim: true,
            style: "background-color: #C7AA63; padding: 10px", onHide: "popupHidden", components: [
                { tag: 'img', name: 'popupContents', src: 'img/puppy2.jpg' }
            ]
        }
	],
    thumbnailClicked: function(inSender, inEvent) {
        this.$.popupContents.setAttribute('src', 'img/puppy' + inSender.index + '.jpg');
        this.$.basicPopup.show();
    },
	doLogin: function(inSender, inEvent) {
        var numImages = RandomNumber.next() * 5;
        for (var i=0; i<numImages; i++) {
            this.createComponent({
                kind: Thumbnail,
                container: this.$.MyMiddlePanel,
                index: RandomNumber.next()
            });
        }
        this.$.myPanels.setIndex(1);
        this.$.myPanels.render();
    }
});
