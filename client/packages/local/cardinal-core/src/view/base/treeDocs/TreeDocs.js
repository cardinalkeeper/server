
/* global Ext */

Ext.define("Cardinal.core.view.base.treeDocs.TreeDocs", {
	
    extend: "Ext.panel.Panel",
    
    xtype: "tree-docs",
    
    requires: [
    	"Cardinal.core.view.base.treeDocs.TreeDocsController",
    	"Cardinal.core.view.base.treeDocs.TreeDocsModel"
    ],

    controller: "tree-docs",
    viewModel: {
        type: "tree-docs"
    },

	layout: "border",
	
	items: [{
        xtype: "treepanel",
        region: "west",
        split: true,
        width: 400,
        bind: {
        	title: "{title}",
        	store: "{menu}"
        },
        listeners: {
        	itemclick: "onTreePanelItemClick"
        }
    }, {
        xtype: "tabpanel",
        region: "center",
        reference: "tabpanel"
    }]
    
});
