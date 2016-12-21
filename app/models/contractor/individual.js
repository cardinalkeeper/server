
module.exports = db => {
	
	return {
		
		get: () => {
			return db.manyOrNone(`
				select iv.individual_id as id, iv.* 
				from individual_view as iv
			`);
		},
		
		post: data => {
			var sql = {
				insertIndividual: `
					insert into 
					individual(first_name, surname, patronymic) 
					values($/individual_first_name/, $/individual_surname/, $/individual_patronymic/) 
					returning *
				`,
				selectOneContractor: `
					select * from contractor 
					where id = $/contractor_id/
				`,
				selectOneDocument: `
					select * from document 
					where id = $/document_id/
				`,
				updateOneDocument: `
					update document set 
						notes = $/notes/, 
						date_start = $/date_start/, 
						number = $/number/ 
					where id = $/id/
				`
			};
			
			return db
			
				.oneOrNone(sql.insertIndividual, data)
				
				.then(function(individual) {
					return db.oneOrNone(sql.selectOneContractor, individual)
						.then(function(contractor) {
							return [individual, contractor];
						});
				})
				
				.then(function([individual, contractor]) {
					return db.oneOrNone(sql.selectOneDocument, contractor)
						.then(function(document) {
							return [individual, contractor, document];
						});
				})
				
				.then(function([individual, contractor, document]) {
					document["notes"] = data["document_notes"];
					document["date_start"] = data["document_date_start"];
					document["number"] = data["document_number"];
					return db.none(sql.updateOneDocument, document).then(function() { return [individual, contractor, document] });
				})
				
				.then(function([individual, contractor, document]) {
					data.client_id = data.id;
					data.id = individual.id;
					data.contractor_id = contractor.id;
					data.document_id = document.id;
					return data;
				});
			
		},
		
		put: (data) => {
			
			return db
			
				.oneOrNone(`select * from individual where id = $/id/`, data)
				
				.then(individual => {
					return (
						db
							.oneOrNone(`select * from contractor where id = $/contractor_id/`, individual)
							.then(contractor => [individual, contractor])
					);
				})
				
				.then(([individual, contractor]) => {
					return (
						db
							.oneOrNone(`select * from document where id = $/document_id/`, contractor)
							.then(document => [individual, contractor, document])
					);
				})
				
				.then(([individual, contractor, document]) => {
					data.document_id = document.id; 
					data.contractor_id = contractor.id;
					return db.tx(function(t) {
						let batch = [], list;
						
						list = fieldlist("first_name, surname, patronymic", "individual", data);
						if (list) batch.push(t.none(`update individual set ${list} where id = $/id/`, data));
						
						list = fieldlist("notes, date_start, number", "document", data);
						if (list) batch.push(t.none(`update document set ${list} where id = $/document_id/`, data));
						
						return t.batch(batch);
					});
				})
				
				.then(none => data);
				
		},
		
		delete: data => {
			
			return db
			
				.oneOrNone(`select * from individual where id = $/id/`, data)
				
				.then(individual => {
					return (
						db
							.oneOrNone(`select * from contractor where id = $/contractor_id/`, individual)
							.then(contractor => [individual, contractor])
					);
				})
				
				.then(([individual, contractor]) => {
					return (
						db
							.oneOrNone(`select * from document where id = $/document_id/`, contractor)
							.then(document => [individual, contractor, document])
					);
				})
				
				.then(([individual, contractor, document]) => {
					return db.none("delete from document where id = $/id/", document);
				})
				
				.then(none => data);
				
		}
		
	};
	
};

/**
 * @param {String} fields Список полей через запятую.
 * @param {String} prefix Префикс полей в массиве значений values.
 * @param {Object} values Массив значений { fieldname: value, ... }.
 */
function fieldlist(fields, prefix, values) {
	
	let result = [];
	
	fields = fields.split(",");
	
	fields.forEach(field => {
		field = field.trim();
		if (prefix + "_" + field in values) {
			result.push(`${field} = $/${prefix}_${field}/`);
		}
	});
	
	return result.length ? result.join(", ") : null;

}