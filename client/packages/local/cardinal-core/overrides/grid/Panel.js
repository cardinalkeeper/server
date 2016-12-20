
/* global Ext */

Ext.define("Cardinal.core.override.grid.Panel", {
	
	override: "Ext.grid.Panel",
	
	emptyText: "Данных для отображения нет.",
	
	viewConfig: { 
		deferEmptyText: false,
		stripeRows: true
	},
	
	rowLines: false
	
});