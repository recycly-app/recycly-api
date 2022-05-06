const router = require("express").Router();

//import controllers
const annonceController = require("../controllers/annonceReconditionnement.controller");

router.post("/create", annonceController.createAnnonceReconditionnment);
router.delete("/delete", annonceController.deleteAnnonceReconditionnement);
router.get("/getRecent", annonceController.getRecentAnnoncesReconditionnement);
module.exports = router;
