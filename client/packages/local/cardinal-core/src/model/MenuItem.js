
/* global Ext */

Ext.define("Cardinal.core.model.MenuItem", {
	
	extend: "Ext.data.TreeModel",
	
	/*proxy: {
		type: "memory",
		reader: {
			type: "json",
			rootProperty: "children"
		}
	},*/
	
	fields: [{
		name: "path",
		type: "string"
	}]
	
});