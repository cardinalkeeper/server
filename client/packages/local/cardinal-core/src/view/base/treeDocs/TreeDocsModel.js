
/* global Ext */

Ext.define("Cardinal.core.view.base.treeDocs.TreeDocsModel", {
	
	extend: "Ext.app.ViewModel",

	alias: "viewmodel.tree-docs",
	
	requires: ["Cardinal.core.model.MenuItem"],
	
	data: {
		title: "Название блока",
		rootPath: "root"
	},
	
	stores: {
		menu: {
			type: "tree",
			model: "Cardinal.core.model.MenuItem",
			autoLoad: true,
			root: {
				text: "{title}",
				path: "{rootPath}"
			},
			remoteFilter: true,
			filters: [{
				property: "menu",
				value: "{rootPath}"
			}]
		}
	}
	
});
