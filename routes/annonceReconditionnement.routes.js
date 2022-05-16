const router = require("express").Router();

//import controllers
const annonceController = require("../controllers/annonceReconditionnement.controller");

router.post("/create", annonceController.createAnnonceReconditionnment);
router.delete("/delete/:id", annonceController.deleteAnnonceReconditionnement);
router.get("/getRecent", annonceController.getRecentAnnoncesReconditionnement);
router.get(
  "/getUserAnnonces/:id",
  annonceController.getUserAnnoncesReconditionnement
);

module.exports = router;
