
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.dialogWindow.DialogWindow", {
	
	extend: "Cardinal.core.view.base.window.Modal",
	
	requires: [
		"Cardinal.core.view.base.crudGrid.dialogWindow.DialogWindowController",
		"Cardinal.core.view.base.crudGrid.dialogWindow.DialogWindowModel"
	],
	
	xtype: "crud-grid-dialogwindow",
	
	controller: "crud-grid-dialogwindow",
	viewModel: {
		type: "crud-grid-dialogwindow"
	},
	
	bind: "{title}",
	
	listeners: {
		beforeshow: "onBeforeShow"
	},

	buttons: [{
		text: "Ок",
		handler: "onSubmit",
		bind: {
			text: "{submitTitle}",
			disabled: "{submitDisabled}"
			//disabled: "{form.submitDisabled}"
			// TODO потом выяснить, почему не оказывает действия! 
			// http://javascript.ru/forum/showthread.php?p=374642#post374642
			//disabled: "{!form.isDirty || !form.isValid}"
		}
	}, {
		text: "Отмена",
		handler: function() {
			this.up("window").close();
		}
	}],
	
	getFormPanel: function() {
		return this.down("form");
	}
	
});