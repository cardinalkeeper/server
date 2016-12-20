
/* global Ext */

/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("Cardinal.core.Application", {
	
	extend: "Ext.app.Application",
	
	name: "Cardinal",

	requires: [
		"Cardinal.core.view.main.Main"
	],
	
	mainView: "Cardinal.core.view.main.Main",
	
	//models: ["Cardinal.core.model.MenuItem"],

	//stores: ["Cardinal.core.store.Menu"],
	
	init: function() {
		console.log("Кардинал. Программа управления предприятием.");
		console.log("Версия Sencha Ext JS =", Ext.getVersion().version);
		console.log(window.Pace ? "Обнаружена Pace." : "Внимание, Pace недоступна.");
	},
	
	launch: function () {
		// TODO - Launch the application
		
		/*Ext.getHead().appendChild({
			tag: "link",
			type: "image/vnd.microsoft.icon",
			rel: "icon",
			href: Ext.getResourcePath("favicon.ico")
		});*/
		
	},

	onAppUpdate: function () {
		Ext.Msg.confirm("Приложение обновлено", "Приложение было обновлено, перезагрузить?",
			function (choice) {
				if (choice === "yes") {
					window.location.reload();
				}
			}
		);
	}
});