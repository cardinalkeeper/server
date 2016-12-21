
/**
 * Подключение моделей.
 */
 
const options = {};

const pgp = require("pg-promise")(options);
const monitor = require("pg-monitor");

monitor.attach(options);

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