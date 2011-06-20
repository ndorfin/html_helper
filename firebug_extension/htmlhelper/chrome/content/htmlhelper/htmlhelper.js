FBL.ns(function() { with (FBL) {

function htmlhelper_panel() {}
htmlhelper_panel.prototype = extend(Firebug.Panel,
{
	name: "htmlhelper",
	title: "HTML Helper",

	initialize: function() {
		BasePanel.initialize.apply(this, arguments);
	}
});

Firebug.registerPanel(htmlhelper_panel);

}})