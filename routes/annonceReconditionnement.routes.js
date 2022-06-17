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
router.get(
  "/getFilterAnnonces/:wilaya/:categorie",
  annonceController.getFilterAnnoncesReconditionnement
);

router.get(
  "/getNombreAnnonces/:idAnnonceur",
  annonceController.getNombreAnnoncesReconditionnement
);

// reservation recyclage
router.post("/addReserver", annonceController.addReservationReconditionnement);
router.get(
  "/getReservationAnnonces/:idAnnonce",
  annonceController.getReservationReconditionnement
);
router.put(
  "/accepterReservation/:idReservation/:status",
  annonceController.statusReservationReconditionnement
);

module.exports = router;
