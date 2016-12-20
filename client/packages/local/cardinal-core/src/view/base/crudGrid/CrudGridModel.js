
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.CrudGridModel", {
	
	extend: "Ext.app.ViewModel",
	
	alias: "viewmodel.crud-grid",
	
	data: {
		
		/**
		 * Массив выбранных строк в таблице.
		 */
		selection: [],
		
		/**
		 * Имя запущенного действия.
		 */
		action: null,
		
		/**
		 * Имя класса модели для хранилища таблицы.
		 * Задается через конфиг model вида.
		 */
		model: null
	},
	
	stores: {
		
		/**
		 * Хранилище таблицы.
		 */
		store: {
			model: "{model}",
			autoLoad: true
		}
		
	}
	
});