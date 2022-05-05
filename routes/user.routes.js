const router = require("express").Router();

//import controllers
const userController = require("../controllers/user.controller");

router.get("/getUser/:id", userController.getUserId);

module.exports = router;
