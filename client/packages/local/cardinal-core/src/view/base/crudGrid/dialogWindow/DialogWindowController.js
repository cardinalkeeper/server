
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.dialogWindow.DialogWindowController", {
	
	extend: "Ext.app.ViewController",

	alias: "controller.crud-grid-dialogwindow",
	
	getFormPanel: function() {
		return this.getView().getFormPanel();
	},
	
	onBeforeShow: function() {
		var record = this.getFormPanel().getRecord();
		this.getViewModel().set("record", record.phantom ? record : record.copy());
	},
	
	onSubmit: function() {
		this.fireViewEvent("submit", this.getFormPanel());
	}
	
});