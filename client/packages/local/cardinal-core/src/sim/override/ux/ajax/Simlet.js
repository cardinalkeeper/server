
/* global Ext */

Ext.define("Cardinal.core.sim.override.ux.ajax.Simlet", {
	
	override: "Ext.ux.ajax.Simlet",
	
	exec: function(xhr) {
		var me = this;
		//me.log(xhr);
		var result = me.callParent(arguments);
		me.log(xhr, result);
		return result;
	},
	
	log: function(xhr, result) {
		var title = [xhr.method, xhr.url.split("?")[0]];
		if (result) {
			title.push(result.status);
			title.push(result.statusText);
		}
		
		console.groupCollapsed.apply(console, title);
		
		var getParams = xhr.url.split("?")[1];
		if (getParams) console.log("Параметры:", getParams);
		
		if (xhr.body) try {
			console.log("Тело запроса:", JSON.parse(xhr.body));
		} catch (error) {
			console.log("Тело запроса:", xhr.body);
		}
		
		if (result && result.responseText) try {
			console.log("Ответ сервера:", JSON.parse(result.responseText));
		} catch (error) {
			console.log("Ответ сервера:", result.responseText);
		}
		
		console.log("Ext.ux.ajax.SimXhr:", xhr);
		
		console.groupEnd();
	},
	
	doDelete: function(ctx) {
		var me = this;
		var result = me.callParent(arguments) || {};
		
		Ext.Array.forEach(me.responseProps, function(prop) {
			if (prop in me) result[prop] = me[prop];
		});
        
		result.responseText = Ext.encode({
			success: true
		});
		
		return result;
		
	}
	
});