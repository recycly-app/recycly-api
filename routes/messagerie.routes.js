const router = require("express").Router();
const messagerieController = require("../controllers/messagerie.controller");

router.post("/addMessage", messagerieController.addMessage);

module.exports = router;
