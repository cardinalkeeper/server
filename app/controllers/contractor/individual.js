

module.exports = {
	
	get: (req, res, next) => {
		const individual = req.models.get("contractor/individual");
		individual.get().then(data => {
			res.send({
				success: true,
				data
			});
		}).catch(next);
	},
	
	post: (req, res, next) => {
		const individual = req.models.get("contractor/individual");
		individual.post(req.body).then(data => {
			res.send({
				success: true,
				data
			});
		}).catch(next);
		
	},
	
	put: (req, res, next) => {
		const individual = req.models.get("contractor/individual");
		individual.put(req.body).then(data => {
			res.send({
				success: true,
				data
			});
		}).catch(next);
	},
	
	delete: (req, res, next) => {
		const individual = req.models.get("contractor/individual");
		individual.delete(req.body).then(data => {
			res.send({
				success: true,
				data
			});
		}).catch(next);
	}
	
};