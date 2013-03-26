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
                    {kind: "enyo.Scroller", classes: "content-panel", fit: true, components: [
                        {classes: "onyx-toolbar-inline", id: "thumbnailsON-toolbar", style: "white-space: nowrap;", components: [
                            {content: "Thumbnails"},
                            {kind:"onyx.ToggleButton", onChange:"toggleChanged", style: "background-color: #ffb80d;", value: true}
                        ]},
                        {name: "ThumbnailsPanel", content: "Thumbnails here..."}
                    ]}
                ]
            }
		]},
        {name: "basicPopup", kind: "onyx.Popup", floating: true, centered: true, modal: true, scrim: true,
            style: "background-color: #grey; padding: 0px", onHide: "popupHidden", components: [
                { tag: 'img', name: 'popupMain', src: '' },
                { tag: 'img', name: 'popupIcon', id: 'popup-ikon', src: '' }
            ]
        }
	],
    toggleChanged: function(){
        alert("You've been toggled");
    },
    thumbnailClicked: function(inSender, inEvent) {
        this.$.popupMain.setAttribute('src', 'img/puppy' + inSender.index + '.jpg');
        this.$.popupIcon.setAttribute('src', 'img/icon' + inSender.index + '.png');
        this.$.basicPopup.show();
    },
	doLogin: function(inSender, inEvent) {
        var numImages = RandomNumber.next() * 5;
        for (var i=0; i<numImages; i++) {
            this.createComponent({
                kind: Thumbnail,
                container: this.$.ThumbnailsPanel,
                index: RandomNumber.next()
            });
        }
        this.$.myPanels.setIndex(1);
        this.$.myPanels.render();
    }
});
