
/**
 * Подключение моделей.
 */

const pgp = require("pg-promise")({});

module.exports = config => {
	
	
	const db = pgp(config.db);
	
	const models = {};
	
	return {
		get: name => {
			if (!models[name]) models[name] = require(`./${name}`)(db);
			return models[name];
		}
	};
	
};