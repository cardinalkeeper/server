
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.actionHandler.DeleteHandler", {
	
	extend: "Cardinal.core.view.base.crudGrid.actionHandler.ActionHandler",

	alias: "crud-grid-action-handler.delete",
	
	multiDeleteTextTpl: "Удалить выбранные записи ({count})?",
	
	singleDeleteTextTpl: "Удалить выбранную запись?",
	
	execute: function() {
		var me = this, store = me.getGrid().getStore();
		var selection = me.getGrid().getSelection();
		
		var message = new Ext.Template(me[(selection.length == 1 ? "single" : "multi") + "DeleteTextTpl"]).apply({
			count: selection.length
		});
		
		Ext.Msg.confirm("Удаление", message, function(confirm) {
			if (confirm == "yes") {
				selection.forEach(function(record) {
					store.remove(record);
				});
				store.sync();
			}
		});
	}
});