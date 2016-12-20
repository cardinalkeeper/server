
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.formPanel.FormPanel", {
	
	extend: "Ext.form.Panel",
	
	xtype: "crud-grid-form",
	
	requires: ["Cardinal.core.view.base.crudGrid.formPanel.FormPanelController"],
	
	controller: "crud-grid-form",
	
	layout: "anchor",
	
	trackResetOnLoad: true,
	
	listeners: {
		validitychange: "onValidityChange",
		dirtychange: "onDirtyChange"
	},
	
	defaults: {
		xtype: "textfield",
		labelWidth: 130,
		anchor: "100%"
	}
	
});