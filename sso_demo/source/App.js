enyo.kind({
    name: "Thumbnail",
    kind: "enyo.Control",
    classes: "category",
    tag: "div",
    index: 0,
    url: '',
    ontap: "thumbnailClicked",
    create: function() {
        this.inherited(arguments);
        if (this.url) {
            this.$.icon.setAttribute('src', 'img/icon' + this.index + '.png');
            this.$.main.setAttribute('src', this.url);
        } else {
            this.$.icon.setAttribute('src', 'img/icon' + this.index + '.png');
            this.$.main.setAttribute('src', 'img/puppy' + this.index + '.jpg');
        }
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
	components: [
		{kind: "enyo.Scroller", fit: true, components: [
            {
                kind: "Panels",
                name: "topPanels",
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
                            {kind:"onyx.ToggleButton", name: "toggleButton", onChange:"toggleChanged", style: "background-color: #ffb80d;", value: true}
                        ]},
                        // Only one of the two panels below, will be visible at any one time, and will be controlled by a toggle button
                        {name: "ThumbnailsPanel", content: "Thumbnails here...", style: "width: 95%; height: 95%;"},
                        {name: "ThumbnailsJSONPanel", content: "Thumbnails here...", style: "width: 95%; height: 95%;"}
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
        var toggleButton = this.$.toggleButton;
        if (toggleButton.getActive()) {
            this.$.ThumbnailsJSONPanel.hide();
            this.$.ThumbnailsPanel.show();
        } else {
            this.$.ThumbnailsPanel.hide();
            this.$.ThumbnailsJSONPanel.show();
        }
        this.$.topPanels.render();
    },
    thumbnailClicked: function(inSender, inEvent) {
        if (inSender.url) {
            this.$.popupMain.setAttribute('src', inSender.url);
        } else {
            this.$.popupMain.setAttribute('src', 'img/puppy' + inSender.index + '.jpg');
        }
        this.$.popupIcon.setAttribute('src', 'img/icon' + inSender.index + '.png');
        this.$.basicPopup.show();
    },
	doLogin: function(inSender, inEvent) { 
        var jsonArry = [];

        // Thumbnails are currently coded to work with images stored on the local hard
        // drive but are starting to get a bit smarter.  They can optionally take a
        // web URL as a parameter.  Create one thumbnail with a hardcoded web URL.
        this.createComponent({
            kind: Thumbnail,
            container: this.$.ThumbnailsPanel,
            index: 0,
            url: "http://www.phlmetropolis.com/Cats.jpg"
        });

        // Create a random number of Thumbnails, based on local files
        var numImages = RandomNumber.next() * 5;
        numImages = numImages || 5;
        for (var i=0; i<numImages; i++) {
            var idx = RandomNumber.next();
            this.createComponent({
                kind: Thumbnail,
                container: this.$.ThumbnailsPanel,
                index: idx
            });
            // Create JSON data corresponding to the thumbnail created above
            jsonArry.push({fileName: 'img/puppy' + idx + '.jpg', iconName: 'img/icon' + idx + '.png'});
        }
        // 
        this.createComponent({
            kind: onyx.TextArea,
            container: this.$.ThumbnailsJSONPanel,
            value: JSON.stringify(jsonArry, null, 4),
            style: "width: 100%; height: 90%; border: none; background-color: #E0E0E0", defaultFocus: true, onchange: "textChange"
        });
        this.$.ThumbnailsJSONPanel.hide();
        this.$.topPanels.setIndex(1);
        this.$.topPanels.render();
    }
});
