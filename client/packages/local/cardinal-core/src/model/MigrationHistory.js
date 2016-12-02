
/* global Ext */

Ext.define("Cardinal.core.model.MigrationHistory", {
	
	extend: "Cardinal.core.model.Base",
	
	fields: [{
		name: "applied",
		type: "date"
	}, {
		name: "version",
		type: "string"
	}, {
		name: "title",
		type: "string"
	}, {
		name: "notes",
		type: "string"
	}]
	
});