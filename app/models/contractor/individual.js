

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
							return {
								main: individual,
								contractor: contractor
							};
						});
				})
				
				.then(function(individual) {
					return db.oneOrNone(sql.selectOneDocument, individual.contractor)
						.then(function(document) {
							individual.document = document;
							return individual;
						});
				})
				
				.then(function(individual) {
					individual.document["notes"] = data["document_notes"];
					individual.document["date_start"] = data["document_date_start"];
					individual.document["number"] = data["document_number"];
					return db.none(sql.updateOneDocument, individual.document).then(function() { return individual })
					
					
					.catch(err=>{
						console.log(err)
						console.log(individual.document)
					});
				})
				
				.then(function(individual) {
					data.client_id = data.id;
					data.document_id = individual.document.document_id;
					return data;
				});
			
			
		}
		
		
	};
	
	
};