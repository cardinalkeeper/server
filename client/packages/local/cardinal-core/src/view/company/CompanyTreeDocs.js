
/* global Ext */

Ext.define("Cardinal.core.view.company.CompanyTreeDocs", {
	
    extend: "Cardinal.core.view.base.treeDocs.TreeDocs",
    
    xtype: "company-tree-docs",
    
    requires: [
    	"Cardinal.core.view.base.treeDocs.TreeDocsController",
    	"Cardinal.core.view.base.treeDocs.TreeDocsModel",
    	"Cardinal.core.view.company.contractor.Contractor"
    ],

    viewModel: {
    	data: {
			title: "Основные документы2",
    		rootPath: "company"
    	}
    }
	
});
