
/* global Ext */

Ext.define("Cardinal.core.override.window.MessageBox", {
	
	override: "Ext.window.MessageBox",
	
	error: function(title, message, fn, scope) {
		if (Ext.isString(title)) {
			title = {
				icon: Ext.Msg.ERROR,
				title: title,
				message: message,
				buttons: this.OK,
				fn: fn,
				scope: scope,
				minWidth: this.minWidth
			};
		}
		return this.show(title);
	},
	
	warning: function(title, message, fn, scope) {
		if (Ext.isString(title)) {
			title = {
				icon: Ext.Msg.WARNING,
				title: title,
				message: message,
				buttons: this.OK,
				fn: fn,
				scope: scope,
				minWidth: this.minWidth
			};
		}
		return this.show(title);
	}
	
});