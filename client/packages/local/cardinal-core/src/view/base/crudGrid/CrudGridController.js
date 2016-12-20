
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.CrudGridController", {
	
	extend: "Ext.app.ViewController",

	alias: "controller.crud-grid",
	
	requires: [
		"Cardinal.core.view.base.crudGrid.actionHandler.InsertHandler",
		"Cardinal.core.view.base.crudGrid.actionHandler.UpdateHandler",
		"Cardinal.core.view.base.crudGrid.actionHandler.DeleteHandler"
	],
	
	init: function(view) {
		var me = this;
		view.getViewModel().set("model", view.getModel());
		me.initContextMenu(view);
		me.initActions(view);
	},
	
	initContextMenu: function(view) {
		var me = this;
		var contextMenu = view.getContextMenu();
		if (contextMenu) {
			contextMenu = me.createContextMenu(contextMenu);
			view.setContextMenu(contextMenu);
		}
	},
	
	initActions: function(view) {
		var me = this;
		Ext.Object.each(me.getView().getActions(), function(name, action) {
			var actionHandler = Ext.create("crud-grid-action-handler." + name, {
				action: action,
				grid: me.getView()
			});
			action.setHandler(function() {
				me.getViewModel().set("action", name);
				actionHandler.execute();
			});
		});
		me.disableEnableActionsByMode("none");
	},
	
	createContextMenu: function(config) {
		var me = this, defaultConfig = {
			viewModel: {
				parent: me.getViewModel()
			}
		};
		config = Ext.Object.merge(defaultConfig, Ext.isString(config) ? { xtype: config } : config);
		return Ext.create(config);
	},
	
	showContextMenuAtEvent: function(event) {
		var me = this;
		var contextMenu = me.getView().getContextMenu();
		if (contextMenu) {
			contextMenu.showAt(event.getXY());
			event.stopEvent();
		}
	},
	
	onItemDoubleClick: function(grid, record, item, index, event) {
		
	},
	
	onItemContextMenu: function(grid, record, item, index, event) {
		this.showContextMenuAtEvent(event);
	},
	
	onContainerContextMenu: function(grid, event) {
		grid.getSelectionModel().deselectAll();
		this.showContextMenuAtEvent(event);
	},
	
	onContainerClick: function(grid, event) {
		grid.getSelectionModel().deselectAll();
	},
	
	onSelectionChange: function(grid, selection) {
		var me = this, mode;
		switch (selection.length) {
			case 0: mode = "none"; break;
			case 1: mode = "single"; break;
			default: mode = "multi"; break;
		}
		me.getViewModel().set("selection", selection);
		me.disableEnableActionsByMode(mode);
	},
	
	disableEnableActionsByMode: function(mode) {
		Ext.Object.each(this.getView().getActions(), function(name, action) {
			// TODO Разобраться с методом Ext.Action.getInitialConfig().
			// Метод getInitialConfig возвращает пустой объект.
			action[action.initialConfig.cls.indexOf(mode) == -1 ? "disable" : "enable"].call(action);
		});
	}
	
});