const router = require("express").Router();

//import controllers
const connexionController = require("../controllers/connexion.controller");

router.post("", connexionController.connexion);

module.exports = router;
