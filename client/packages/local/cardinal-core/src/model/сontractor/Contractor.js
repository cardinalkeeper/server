
/* global Ext */

Ext.define("Cardinal.core.model.contractor.Contractor", {
	
	extend: "Cardinal.core.model.Document",
	
	fields: [{
		name: "contractor_title",
		type: "string"
	}, {
		name: "contractor_title_short",
		type: "string"
	}, {
		name: "contractor_type",
		type: "string"
	}, {
		name: "contractor_type_tablename",
		type: "string"
	}]
	
});
		