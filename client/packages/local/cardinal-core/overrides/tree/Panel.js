
/* global Ext */

Ext.define("Cardinal.core.override.tree.Panel", {
	
	override: "Ext.tree.Panel",
	
	rootVisible: false
	
	/*getNodeByPath: function(path, field, separator, node) {
		
		field = field || this.idProperty;
		separator = separator || "/";
		node = node || this.getRootNode();
		
		
		var me = this;
		path = path.split("/");
		
		
		//console.log("getNodeByPath", path[0], !!node.findChild("path", path[0]))
		
		
		var finded = node.findChild("path", path[0]);
		if (finded) {
			path.shift();
			finded = me.getNodeByPath(path.join("/"), field, separator, finded);
		} else {
			finded = node;
		}
		return finded;
	}*/
	
});