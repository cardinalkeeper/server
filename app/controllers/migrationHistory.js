

module.exports = {
	
	
	get: (req, res) => {
		
		const migrationHistory = req.models.get("migrationHistory");
		

		
		migrationHistory.get().then(data => {
			res.send({
				success: true,
				data
			});
		}).catch(err => {
			res.send({
				success: false,
				err
			});
		});
		
	}
	
	
};