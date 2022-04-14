const router = require("express").Router();

//import controllers
const userController = require("../controllers/user.controller");

router.post("/inscription", userController.inscription);

module.exports = router;
