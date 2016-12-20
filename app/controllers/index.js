
/**
 * Подключение основных контроллеров приложения.
 */

const express = require("express");

const router = express.Router();

module.exports = router;


router.get("/contractor.Individual", require("./contractor/individual").get);
router.post("/contractor.Individual", require("./contractor/individual").post);
router.get("/MigrationHistory", require("./migrationHistory").get);
router.get("/MenuItem/:pid", require("./menuItem").get);