const router = require("express").Router();

//import controllers
const inscriptionController = require("../controllers/inscription.controller");

router.post("", inscriptionController.inscription);

module.exports = router;
