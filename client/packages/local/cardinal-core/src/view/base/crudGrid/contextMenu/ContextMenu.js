
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.contextMenu.ContextMenu", {
	
	extend: "Ext.menu.Menu",
	
	requires: [
		"Cardinal.core.view.base.crudGrid.contextMenu.ContextMenuController"
	],
    
    xtype: "crud-grid-contextmenu",
	
	controller: "crud-grid-contextmenu",
	
	/*listeners: {
		//click: "onClick",
		beforeshow: "onBeforeShow"
	},*/
	
	//items: ["@insert", "@update", "@delete"],
	
	getAction: function(name) {
		// Так как у меню нет родительского контейнера, 
		// то ищем родительский контейнер через модель вида и уже у него ищем само действие.
		return this.getViewModel().getParent().getView().getAction(name);
	}
	
});