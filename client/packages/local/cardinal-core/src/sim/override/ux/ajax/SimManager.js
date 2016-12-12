
/**
 * Исправление бага: в дефолтном симлете нет ссылки на менеджер.
 */

/* global Ext */

Ext.define("Cardinal.core.sim.override.ux.ajax.SimManager", {
	
	override: "Ext.ux.ajax.SimManager",
	
	init: function() {
		var me = this;
		
		if (!me.ready) {
			if (!("defaultSimlet" in me)) {
				me.defaultSimlet = new Ext.ux.ajax.Simlet({
					status: 404,
					statusText: "Not Found"
				});
				// Исправление бага: в дефолтном симлете нет ссылки на менеджер.
				me.defaultSimlet.manager = me;
			}
		}
		
		var result = me.callParent(arguments);
		return result;
	}
	
});