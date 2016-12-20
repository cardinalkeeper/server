
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.CrudGrid", {
	
    extend: "Ext.grid.Panel",
    
    requires: [
    	"Cardinal.core.view.base.crudGrid.CrudGridController",
    	"Cardinal.core.view.base.crudGrid.CrudGridModel",
    	"Cardinal.core.view.base.crudGrid.contextMenu.ContextMenu",
    	"Cardinal.core.view.base.crudGrid.formPanel.FormPanel",
    	"Cardinal.core.view.base.crudGrid.dialogWindow.DialogWindow"
    ],
    
    config: {
    	model: null,
    	contextMenu: {
    		xtype: "crud-grid-contextmenu",
    		items: ["@insert", "@update", "@delete"]
    	},
    	formPanel: {
    		xtype: "crud-grid-form"
    	},
    	dialogWindow: {
    		xtype: "crud-grid-dialogwindow",
    		items: "crud-grid-form"
    	},
    	onItemDoubleClickAction: "update"
    },
    
    actions: {
		insert: {
			text: "Добавить",
			cls: "none single multi",
			dialogTitle: "Добавить запись",
			formPanel: {
	    		xtype: "crud-grid-form"
	    	},
			dialogWindow: {
	    		xtype: "crud-grid-dialogwindow",
	    		items: "crud-grid-form"
	    	}
		},
		update: {
			text: "Редактировать",
			cls: "single",
			dialogTitle: "Обновить запись",
			formPanel: {
	    		xtype: "crud-grid-form"
	    	},
			dialogWindow: {
	    		xtype: "crud-grid-dialogwindow",
	    		items: "crud-grid-form"
	    	}
		},
		"delete": {
			text: "Удалить",
			cls: "single multi",
			dialogTitle: function(get) {
				return get("selection").length == 1 ? 
					"Удалить запись" : 
					"Удалить записи";
			}
		}
	},

    controller: "crud-grid",
    viewModel: {
        type: "crud-grid"
    },
	
	bind: {
		store: "{store}"
	},
	
	listeners: {
		itemdblclick: "onItemDoubleClick",
		itemcontextmenu: "onItemContextMenu",
		containercontextmenu: "onContainerContextMenu",
		containerclick: "onContainerClick",
		selectionchange: "onSelectionChange"
	},
	
	selModel: {
		mode: "multi"
	},
	
	bbar: {
		xtype: "pagingtoolbar",
		displayInfo: true,
		bind: {
			store: "{gridStore}"
		}
	}
	
	// Пример создания тулбара с действиями.
	//tbar: ["@insert", "@update", "@delete"],
	
	
    
});
