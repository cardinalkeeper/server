
/* global Ext */

Ext.define("Cardinal.core.view.base.crudGrid.formPanel.FormPanelController", {
	
	extend: "Ext.app.ViewController",
	
	alias: "controller.crud-grid-form",
	
	init: function(view) {
		var me = this;
		
		// Следующая конструкция не работает, чтобы иметь доступ к form.isValid и form.isDirty:
		// this.lookupViewModel().set("form", this);
		// Но возможно оно поможет следующие свойства (в будущем посмотреть):
		// http://docs.sencha.com/extjs/5.1/5.1.1-apidocs/#!/api/Ext.grid.Panel-cfg-twoWayBindable
		// http://docs.sencha.com/extjs/5.1/5.1.1-apidocs/#!/api/Ext.form.field.ComboBox-cfg-publishes
		
		// lookupViewModel используется, потому что своей модели нет
		// http://javascript.ru/forum/extjs/56236-svyazannyjj-bind-komponent-zavisit-ot-validnosti-formy.html
		var viewModel = me.getViewModel();
		
		viewModel && viewModel.set("form.isValid", !view.hasInvalidField());
		viewModel && viewModel.set("form.isDirty", view.isDirty());
		
		// TODO Опцию form.submitDisabled надо реализовать на формулах, 
		// см. тут http://javascript.ru/forum/extjs/56330-pochemu-ne-rabotayut-usloviya-v-bind.html
		
		
		/* перетащил в формулы 
		var valid = !formPanel.hasInvalidField();
		var dirty = formPanel.isDirty();
		var submitDisabled = !valid || !dirty;
		viewModel && viewModel.set("form.submitDisabled", submitDisabled);*/
		
		
	},
	
	onValidityChange: function(form, valid) {
		var viewModel = this.getViewModel();
		viewModel && viewModel.set("form.isValid", valid);
		
		/*перетащил в формулы
		var dirty = formPanel.isDirty();
		var submitDisabled = !valid || !dirty;
		viewModel && viewModel.set("form.submitDisabled", submitDisabled);*/
	},
	
	onDirtyChange: function(form, dirty) {
		var viewModel = this.getViewModel();
		viewModel && viewModel.set("form.isDirty", dirty);
		
		/*перетащил в формулы
		var valid = !formPanel.hasInvalidField();
		var submitDisabled = !valid || !dirty;
		viewModel && viewModel.set("form.submitDisabled", submitDisabled);*/
	}
	
});