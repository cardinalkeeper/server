
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.contextMenu.ContextMenuController", {
	
	extend: "Ext.app.ViewController",
	
	alias: "controller.crud-grid-contextmenu"
	
	/*onClick: function(menu, item, event) {
		if (item) this.fireViewEvent(item.getItemId() + "click");
	},*/
	
	/*onBeforeShow: function() {
		var me = this;
		var mode;
		var grid = me.getViewModel().getParent().getView();
		switch (grid.getSelection().length) {
			case 0: mode = "none"; break;
			case 1: mode = "single"; break;
			default: mode = "multi"; break;
		}
		me.getView().items.each(function(item) {
			item[item.hasCls(mode) ? "enable" : "disable"].call(item);
		});
	},*/
	
});