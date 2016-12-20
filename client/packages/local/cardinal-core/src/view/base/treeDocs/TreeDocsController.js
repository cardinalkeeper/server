
/* global Ext */

Ext.define("Cardinal.core.view.base.treeDocs.TreeDocsController", {
	
	extend: "Ext.app.ViewController",

	alias: "controller.tree-docs",
	
	/*routes: {
		"/company/:id": {
			action: "openTab",
			conditions: {
				":id": "(.*)"
			}
		}
	},*/
	
	init: function(view) {
		var rootPath = this.getViewModel().get("rootPath");
		var routes = {};
		routes["/" + rootPath + "/:id"] = {
			action: "openTab",
			conditions: {
				":id": "(.*)"
			}
		};
		this.setRoutes(routes);
	},
	
	onTreePanelItemClick: function(treePanel, record) {
		this.redirectTo(record.getPath("path"));
	},
	
	openTab: function(path) {
		var me = this;
		var rootPath = this.getViewModel().get("rootPath");
		
		
		
		var viewClassname = me.convertPathToClassname(rootPath + "/" + path);
		
		
		
		if (Ext.ClassManager.get(viewClassname)) {
			var tabPanel = me.lookupReference("tabpanel");
			var tab = tabPanel.items.findBy(function(item) {
				return Ext.getClassName(item) == viewClassname;
			});
			
			if (!tab) {
				tabPanel.add(Ext.create(viewClassname, {
					closable: true
				}));
			}
			tabPanel.setActiveTab(tab);
		} else {
			//Ext.toast("Не найден класс " + viewClassname, "Внимание!");
			console.warn("Не найден класс:", viewClassname);
		}
		
	},
	
	/**
	 * Конвертация пути в имя класса.
	 */
	convertPathToClassname: function(path) {
		var me = this, result = [];
		path = path.split("/");
		result = path.map(function(item) {
			return me.convertDashedToCamel(item, true);
		});
		result.push(me.convertDashedToCamel(path[path.length - 1]));
		return "Cardinal.core.view." + result.join(".");
	},
	
	/**
	 * Конвертация имени из стиля с тире-разделителями в CamelCase.
	 */
	convertDashedToCamel: function(name, uncapitalize) {
		/*var result = [];
		name = name.split("-");
		name.forEach(function(str) {
			result.push(Ext.String.capitalize(str));
		});*/
		
		var result = name.split("-").map(function(str) {
			return Ext.String.capitalize(str);
		});
		
		
		result = result.join("");
		return uncapitalize ? Ext.String.uncapitalize(result) : result;
	}
	
	
	
});
