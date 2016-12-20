
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.actionHandler.DeleteHandler", {
	
	extend: "Cardinal.core.view.base.crudGrid.actionHandler.ActionHandler",

	alias: "crud-grid-action-handler.delete",
	
	execute: function() {
		var me = this;
		Ext.Msg.confirm("Удаление", "Удалить запись(и)?", function(confirm) {
			if (confirm == "yes") {
				var store = me.getStore();
				me.getGrid().getSelection().forEach(function(record) {
					store.remove(record);
				});
				store.sync();
			}
		});
	}
});