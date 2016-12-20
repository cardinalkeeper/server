
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.dialogWindow.DialogWindowModel", {
	
	extend: "Ext.app.ViewModel",
	
	alias: "viewmodel.crud-grid-dialogwindow",
	
	data: {
		record: null,
		form: {
			isValid: false,
			isDirty: false
		}
	},
	
	formulas: {
		
		submitTitle: function(get) {
			return get("record").phantom ? "Добавить" : "Обновить";
		},
		
		submitDisabled: function(get) {
			return !get("form.isDirty") || !get("form.isValid");
		}
		
	}
	
});