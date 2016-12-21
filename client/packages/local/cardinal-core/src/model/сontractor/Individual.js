
/* global Ext */

Ext.define("Cardinal.core.model.contractor.Individual", {
	
	extend: "Cardinal.core.model.contractor.Contractor",
	
	fields: [{
		name: "individual_first_name",
		type: "string"
	}, {
		name: "individual_surname",
		type: "string"
	}, {
		name: "individual_patronymic",
		type: "string"
	}]
	
});