
/**
 * Подключение основных контроллеров приложения.
 */

const express = require("express");

const router = express.Router();

module.exports = router;


router.get("/contractor.Individual", require("./contractor/individual").get);
router.post("/contractor.Individual", require("./contractor/individual").post);
router.put("/contractor.Individual", require("./contractor/individual").put);
router.delete("/contractor.Individual", require("./contractor/individual").delete);

router.get("/MigrationHistory", require("./migrationHistory").get);
router.get("/MenuItem", require("./menuItem").get);