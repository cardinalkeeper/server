
/**
 * Создание приложения Express.
 */

module.exports = config => {
	
	
	process.env.NODE_PATH += ";./modules"; // NODE_PATH=./modules 
	
	const path = require("path");
	const express = require("express");
	const cors = require("cors");
	
	const models = require("./models")(config.models);
	
	const app = express();
	
	// TODO Сделать автоматическое отключение cors для продакшн-версии.
	// Разрешение запросов с домена http://localhost:1841.
	// Обработка запроса с методом OPTIONS.
	// Обработка заголовков запроса Access-Control-Request-*.
	// https://learn.javascript.ru/xhr-crossdomain
	app.use(cors({
		origin: ["http://kosmos:1841", "http://localhost:1841", "http://172.16.209.1:1841"],
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["content-type", "x-requested-with"],
		credentials: true
	}));
	
	app.locals.pretty = true;
	app.set("view engine", "jade");
	app.set("views", path.join(__dirname, "views"));
	app.locals.basedir = app.get("views");
	
	
	// Основные объекты запроса.
	app.use((req, res, next) => {
		req.config = config;
		req.models = models;
		next();
	});
	
	app.use(express.static(path.join(__dirname, "../client/build/production/Cardinal")));
	
	app.use(require("./controllers"));
	
	app.use(require(path.join(__dirname, "controllers", "404")));
	app.use(require(path.join(__dirname, "controllers", "500")));
	
	return app;
	
};



