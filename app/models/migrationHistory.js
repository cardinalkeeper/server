

module.exports = db => {
	
	
	return {
		
		
		get: () => {
			
			return db.manyOrNone("select * from migration_history_view");
			
		}
		
		
	};
	
	
};