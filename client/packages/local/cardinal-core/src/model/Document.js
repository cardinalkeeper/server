
/* global Ext */

Ext.define("Cardinal.core.model.Document", {
	
	extend: "Cardinal.core.model.Base",
	
	fields: [{
		name: "document_id",
		type: "int"
	}, {
		name: "document_parent_id",
		type: "int"
	}, {
		name: "document_deleted",
		type: "boolean"
	}, {
		name: "document_subject",
		type: "string"
	}, {
		name: "document_number",
		type: "string"
	}, {
		name: "document_notes",
		type: "string"
	}, {
		name: "document_date_start",
		type: "date"
	}, {
		name: "document_date_end",
		type: "date"
	}]
	
});