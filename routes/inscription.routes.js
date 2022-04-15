const router = require("express").Router();

//import controllers
const inscriptionController = require("../controllers/inscription.controller");

router.post("/particulier", inscriptionController.inscriptionParticulier);
router.post("/transporteur", inscriptionController.inscriptionTransporteur);
router.post("/entreprise", inscriptionController.inscriptionEntreprise);

module.exports = router;
