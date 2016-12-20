
/* global Ext */

Ext.define("Cardinal.core.view.company.contractor.individual.Individual", {
	
	extend: "Cardinal.core.view.base.crudGrid.CrudGrid",
	
	requires: ["Cardinal.core.model.contractor.Individual"],
	
	title: "Физические лица",
	
	model: "Cardinal.core.model.contractor.Individual",
	
	actions: {
		insert: {
			dialogTitle: "Добавить физическое лицо"
		},
		update: {
			dialogTitle: function(get) {
				// TODO Когда поле не валидно, то по bind-у его значение не передается.
				var title = [];
				var surname = get("record.individual_surname");
				title.push(surname ? surname : "БезФамилии");
				var name = get("record.individual_first_name");
				if (name) title.push(name[0] + ".");
				var patronymic = get("record.individual_patronymic");
				if (patronymic) title.push(patronymic[0] + ".");
				return "Физическое лицо «" + title.join(" ") + "»";
			}
		},
		"delete": {
			dialogTitle: function(get) {
				return get("selection").length == 1 ? 
					"Удалить физическое лицо" : 
					"Удалить физические лица";
			}
		}
	},
	
	formPanel: {
		items: [{
			name: "individual_surname",
			fieldLabel: "Фамилия",
			allowBlank: false,
			bind: "{record.individual_surname}"
		}, {
			name: "individual_first_name",
			fieldLabel: "Имя",
			allowBlank: false,
			bind: "{record.individual_first_name}"
		}, {
			name: "individual_patronymic",
			fieldLabel: "Отчество",
			bind: "{record.individual_patronymic}"
		}, {
			name: "document_number",
			fieldLabel: "ИНН",
			bind: "{record.document_number}"
		}, {
			xtype: "datefield",
			name: "document_date_start",
			fieldLabel: "Дата регистрации",
			format: "Y-m-d",
			bind: "{record.document_date_start}"
		}, {
			xtype: "textarea",
			name: "document_notes",
			fieldLabel: "Заметки",
			bind: "{record.document_notes}"
		}]
	},
	
	columns: [{
		dataIndex: "document_number",
		text: "ИНН",
		width: 80
	}, {
		dataIndex: "document_date_start",
		text: "Регистрация",
		width: 160,
		xtype: "datecolumn",
		format: "Y-m-d"
	}, {
		dataIndex: "individual_surname",
		text: "Фамилия",
		flex: 2
	}, {
		dataIndex: "individual_first_name",
		text: "Имя",
		flex: 2
	}, {
		dataIndex: "individual_patronymic",
		text: "Отчество",
		flex: 2
	}, {
		dataIndex: "document_notes",
		text: "Заметки",
		flex: 4
	}]
	
});