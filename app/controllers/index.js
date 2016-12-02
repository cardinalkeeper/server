
/**
 * Подключение основных контроллеров приложения.
 */

const express = require("express");

const router = express.Router();

module.exports = router;


router.get("/MigrationHistory", require("./migrationHistory").get);