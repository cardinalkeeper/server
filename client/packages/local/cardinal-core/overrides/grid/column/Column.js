
/* global Ext */

Ext.define("Cardinal.core.override.grid.column.Column", {
	
	override: "Ext.grid.column.Column",
	
	/**
	 * Какой-то непонятный глюк, в режиме sencha app watch эта опция равна end.
	 * Хотя в режиме build, все нормально.
	 */
	align: "start"
	
});