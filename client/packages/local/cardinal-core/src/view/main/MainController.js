
/* global Ext */

/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("Cardinal.core.view.main.MainController", {
	extend: "Ext.app.ViewController",

	alias: "controller.main",
	
	routes: {
		"/:path": {
			action: "onCompanyRoute",
			conditions: {
				":path": "(.*)"
			}
		}
	},
	
	onCompanyRoute: function(path) {
		if (path.split("/")[0] == "company") {
			this.getView().setActiveTab(2);
		}
	},

	onItemSelected: function (sender, record) {
		Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
	},

	onConfirm: function (choice) {
		if (choice === "yes") {
			//
		}
	}
});
