const router = require("express").Router();

//import controllers
const annonceController = require("../controllers/annonceRecyclage.controller");

router.post("/create", annonceController.createAnnonceRecyclage);
router.delete("/delete/:id", annonceController.deleteAnnonceRecyclage);
router.get("/getRecent", annonceController.getRecentAnnoncesRecyclage);
router.get("/getUserAnnonces/:id", annonceController.getUserAnnoncesRecyclage);
module.exports = router;
