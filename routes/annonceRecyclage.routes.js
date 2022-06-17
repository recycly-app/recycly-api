const router = require("express").Router();

//import controllers
const annonceController = require("../controllers/annonceRecyclage.controller");

router.post("/create", annonceController.createAnnonceRecyclage);
router.delete("/delete/:id", annonceController.deleteAnnonceRecyclage);
router.get("/getRecent", annonceController.getRecentAnnoncesRecyclage);
router.get("/getUserAnnonces/:id", annonceController.getUserAnnoncesRecyclage);
router.get(
  "/getFilterAnnonces/:wilaya/:categorie",
  annonceController.getFilterAnnoncesRecyclage
);
router.get(
  "/getNombreAnnonces/:idAnnonceur",
  annonceController.getNombreAnnoncesRecyclage
);

// reservation recyclage
router.post("/addReserver", annonceController.addReservationRecyclage);
router.get(
  "/getReservationAnnonces/:idAnnonce",
  annonceController.getReservationRecyclage
);
router.put(
  "/accepterReservation/:idReservation/:status",
  annonceController.statusReservationRecyclage
);
module.exports = router;
