
/* global Ext */

Ext.define("Cardinal.core.view.company.CompanyTreeDocs", {
	
    extend: "Cardinal.core.view.base.treeDocs.TreeDocs",
    
    xtype: "company-tree-docs",
    
    requires: [
    	"Cardinal.core.view.base.treeDocs.TreeDocsController",
    	"Cardinal.core.view.base.treeDocs.TreeDocsModel",
    	"Cardinal.core.view.company.contractor.Contractor",
    	"Cardinal.core.view.company.contractor.individual.Individual"
    ],

    viewModel: {
    	data: {
			title: "Основные документы",
    		rootPath: "company"
    	}
    }
	
});
