
/* global Ext, SERVER_URL_PREFIX */





var SERVER_URL_PREFIX = "";
//<debug>
//SERVER_URL_PREFIX = "http://" + (document.location.hostname == "localhost" ? "localhost" : "172.16.209.1") + ":3000";
SERVER_URL_PREFIX = "http://kosmos:8080";
//</debug>



/*

Опция 
withCredentials: true,
выставляется в этом файле, а также в Element.controller.Cutting

*/



// http://javascript.ru/forum/extjs/63096-globalnye-konstanty-gde-ikh-opredelit.html









Ext.define("Cardinal.core.model.Base", {
	
	extend: "Ext.data.Model",
	
	requires: ["Ext.data.proxy.Rest"],
	
	fields: [{
		name: "id",
		type: "auto"
	}],
	
	schema: {
		
		namespace: "Cardinal.core.model",
		
		//<debug>
		urlPrefix: SERVER_URL_PREFIX,
		//</debug>
		
		proxy: {
			type: "rest", 
			//url: "{prefix}/{entityName}",
			//<debug>
			withCredentials: true,
			//</debug>
			reader: {
				type: "json",
				rootProperty: "data"
			}
		}
		
		/*proxy: new Ext.util.ObjectTemplate({
			type: "rest", 
			url: "{prefix}/{[this.getEntityUrl(values.entityName)]}",
			//<debug>
			withCredentials: true,
			//</debug>
			reader: {
				type: "json",
				rootProperty: "data"
			}
		}, {
			templateOptions: {
				getEntityUrl: function(entityName) {
					var urls = {
						TrolleyPlan: "",
						Command: "commands",
						WorkstationType: "",
						ConfigFileItem: "configfile",
						Workstation: "workstations",
						Trolley: "trolleys",
						Printer: "printers",
						GroupOrder: "group-orders",
						Employee: "employee",
						CuttingItem: "cutting-items"
					};
					if (!(entityName in urls)) throw Error("Модель " + entityName + " не найдена в массиве URL's.");
					return urls[entityName];
				}
			}
		})*/
		
	}
	
});




























