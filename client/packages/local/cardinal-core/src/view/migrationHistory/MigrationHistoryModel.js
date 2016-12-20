
/* global Ext */

Ext.define("Cardinal.core.view.migrationHistory.MigrationHistoryModel", {
	
	extend: "Ext.app.ViewModel",
	
	alias: "viewmodel.migration-history",
	
	stores: {
		migrationHistory: {
			model: "Cardinal.core.model.MigrationHistory",
			autoLoad: true,
			groupField: "version"
		}
	}
	
});