const router = require("express").Router();

//import controllers
const inscriptionController = require("../controllers/inscription.controller");

router.post("/inscription", inscriptionController.inscriptionParticulier);

module.exports = router;
