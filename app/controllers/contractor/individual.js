

module.exports = {
	
	
	get: (req, res) => {
		
		const individual = req.models.get("contractor/individual");
		individual.get().then(data => {
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
		
	},
	
	post: (req, res) => {
		const individual = req.models.get("contractor/individual");
		
		individual.post(req.body).then(data => {
			res.send({
				success: true,
				data
			});
		}).catch(err => {
			res.status(500).send({
				success: false,
				err
			});
		});
		
	}
	
	
};