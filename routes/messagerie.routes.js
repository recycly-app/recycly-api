const router = require("express").Router();
const messagerieController = require("../controllers/messagerie.controller");
const { getContact } = require("../models/messagerie.db");

router.post("/addMessage", messagerieController.addMessage);
router.get("/getContacts/:id", messagerieController.getContacts);
router.get(
  "/getMessages/:id_user/:id_contact",
  messagerieController.getMessages
);
module.exports = router;
