
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.actionHandler.UpdateHandler", {
	
	extend: "Cardinal.core.view.base.crudGrid.actionHandler.ActionHandler",

	alias: "crud-grid-action-handler.update",
	
	execute: function() {
		var me = this;
		var selection = me.getGrid().getSelection();
		if (selection.length == 1) {
			var record = selection[0];
			var dialog = me.createDialogWindow();
			dialog.getFormPanel().loadRecord(record);
			dialog.show();
		}
	},
	
	onDialogWindowSubmit: function(dialog, formPanel) {
		var me = this;
		if (formPanel.isValid()) {
			formPanel.updateRecord();
			var store = me.getGrid().getStore();
			
			//https://fiddle.sencha.com/#fiddle/o95
			//if (store.getModifiedRecords().length || store.getRemovedRecords().length) {
			if (formPanel.isDirty()) {
				
				Ext.Msg.wait("Данные обновляются! Подождите...", "Обновление");
				store.sync({
					scope: me,
					/*callback: function() {
						console.info(arguments);
					},*/
					
					//http://javascript.ru/forum/extjs/56295-kogda-v-forme-datapole-mystore-sync-podvisaet.html
					
					
					//http://javascript.ru/forum/extjs/56291-podvisanie-na-ext-data-store-sync.html
					/*success: "onSyncSuccess",
					failure: "onSyncFailure",*/
					success: function() {
						Ext.Msg.hide();
						dialog.close();
					},
					failure: me.onFailure,
					callback: function(record, operation, success) {
						Ext.Msg.hide();
					}
				});
			} else {
				me.getView().close();
			}
		}
	},
	
	onFailure: function(batch, options) {
		Ext.Msg.error("Ошибка", "Произошла ошибка при обновлении!");
		console.error("Произошла ошибка при обновлении!", batch, options);
	}
	
});