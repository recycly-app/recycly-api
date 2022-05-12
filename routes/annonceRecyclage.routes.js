const router = require("express").Router();

//import controllers
const annonceController = require("../controllers/annonceRecyclage.controller");

router.post("/create", annonceController.createAnnonceRecyclage);
router.delete("/delete", annonceController.deleteAnnonceRecyclage);
router.get("/getRecent", annonceController.getRecentAnnoncesRecyclage);
module.exports = router;
