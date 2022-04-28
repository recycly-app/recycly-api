const router = require("express").Router();

//import controllers
const annonceController = require("../controllers/annonce.controller");

router.post("/create", annonceController.createAnnonceReconditionnment);
router.delete("/delete", annonceController.deleteAnnonceReconditionnement);

module.exports = router;
