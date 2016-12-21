
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.actionHandler.InsertHandler", {
	
	extend: "Cardinal.core.view.base.crudGrid.actionHandler.ActionHandler",

	alias: "crud-grid-action-handler.insert",
	
	execute: function() {
		var me = this;
		var record = me.getGrid().getStore().getModel().create();
		var dialog = me.createDialogWindow();
		dialog.getFormPanel().loadRecord(record);
		dialog.show();
	},
	
	onDialogWindowSubmit: function(dialog, formPanel) {
		var me = this;
		if (formPanel.isValid()) {
			Ext.Msg.wait("Данные добавляются! Подождите...", "Добавление");
			formPanel.updateRecord();
			formPanel.getRecord().save({
				scope: me,
				success: me.onSuccess,
				failure: me.onFailure,
				callback: function(record, operation, success) {
					if (success) dialog.close();
					Ext.Msg.hide();
				}
			});
		}
	},
	
	onSuccess: function(record) {
		var me = this;
		me.getGrid().getStore().add(record);
		
		// Вызов record.save() не обновляет pagingtoolbar и не меняет фантомный id на реальный
		// http://javascript.ru/forum/showthread.php?p=375070#post375070
		// Приходится вызывать sync
		me.getGrid().getStore().sync();
	},
	
	onFailure: function(record, operation) {
		Ext.Msg.error("Ошибка", "Произошла ошибка при добавлении!");
		console.error("Произошла ошибка при добавлении!", record, operation);
	}
	
});