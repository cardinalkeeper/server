
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.actionHandler.ActionHandler", {
	
	alias: "crud-grid-action",
	
	config: {
		
		/**
		 * Действие.
		 * @cfg {Ext.Action}
		 */
		action: null,
		
		/**
		 * Таблица вида.
		 * @cfg {Ext.grid.Panel}
		 */
		grid: null
		
	},
	
	constructor: function(config) {
		this.initConfig(config);
	},
	
	getViewModel: function() {
		return this.getGrid().getViewModel();
	},
	
	/**
	 * Сборка конфигов.
	 */
	getConfig: function() {
		var result = {}, args = Ext.isArray(arguments[0]) ? arguments[0] : Ext.Array.slice(arguments);
		args = args.map(function(config) {
			return (Ext.isString(config) ? { xtype: config } : config) || {};
		});
		args.forEach(function(config) {
			result = Ext.Object.merge(result, config);
		});
		return result;
	},
	
	dialogWindowHasForm: function() {
		var items = this.getAction().initialConfig.dialogWindow.items;
		return Ext.isString(items) && items == "crud-grid-form" || 
			Ext.isObject(items) && items.xtype == "crud-grid-form";
	},
	
	getFormPanelConfig: function() {
		var result = null;
		var action = this.getAction().initialConfig;
		if (this.dialogWindowHasForm()) {
			result = this.getConfig(
				this.getGrid().getFormPanel(),
				action.formPanel,
				action.dialogWindow.items
			);
		}
		return result;
	},
	
	getDialogWindowViewModelConfig: function() {
		var me = this, result = {
			parent: this.getViewModel(),
			data: {},
			formulas: {}
		};
		Ext.Object.each({dialogTitle:"title"}, function(param, dataName) {
			var data = me.getAction().initialConfig[param];
			result[Ext.isFunction(data) ? "formulas" : "data"][dataName] = data;
		});
		return result;
	},
	
	getDialogWindowConfig: function() {
		return this.getConfig(
			this.getGrid().getDialogWindow(),
			this.getAction().initialConfig.dialogWindow,
			this.dialogWindowHasForm() ? { items: this.getFormPanelConfig() } : {},
			{ 
				viewModel: this.getDialogWindowViewModelConfig(),
				listeners: {
					submit: "onDialogWindowSubmit",
					scope: this
				}
			}
		);
	},
	
	createDialogWindow: function() {
		var me = this;
		var dialogWindow = me.getDialogWindowConfig();
		return dialogWindow instanceof Ext.Component ? dialogWindow : Ext.create(dialogWindow);
	},
	
	onDialogWindowSubmit: Ext.emptyFn
	
});