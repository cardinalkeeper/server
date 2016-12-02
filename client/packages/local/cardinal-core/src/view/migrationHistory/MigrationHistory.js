
/* global Ext */

Ext.define("Cardinal.core.view.migrationHistory.MigrationHistory", {
	
	extend: "Ext.grid.Panel",
	
	xtype: "migration-history",
	
	requires: [
		"Cardinal.core.view.migrationHistory.MigrationHistoryController",
		"Cardinal.core.view.migrationHistory.MigrationHistoryModel"
	],
	
	controller: "migration-history",
	viewModel: "migration-history",
	
	title: "История миграции базы данных",
	
	bind: {
		store: "{migrationHistory}"
	},
	
	
	
	columns: [{
		text: "№",
		dataIndex: "id",
		width: 50,
		
		align: "end"
		
	}, {
		text: "Применено",
		dataIndex: "applied",
		flex: 1
	}, {
		text: "Версия",
		dataIndex: "version",
		flex: 1
	}, {
		text: "Название",
		dataIndex: "title",
		flex: 1
	}, {
		text: "Заметки",
		dataIndex: "notes",
		flex: 1
	}]
	
});