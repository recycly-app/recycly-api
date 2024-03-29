const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

// import routes
const userRouteInscription = require("./routes/inscription.routes");
const userRouteConnexion = require("./routes/connexion.routes");
const annonceReconditionnementRoute = require("./routes/annonceReconditionnement.routes");
const annonceRecycalgeRoute = require("./routes/annonceRecyclage.routes");
const userRoute = require("./routes/user.routes");
const messagerieRoute = require("./routes/messagerie.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());
//routes
app.use("/inscription", userRouteInscription);
app.use("/connexion", userRouteConnexion);
app.use("/annonce/Reconditionnement", annonceReconditionnementRoute);
app.use("/annonce/Recyclage", annonceRecycalgeRoute);
app.use("/user", userRoute);
app.use("/message", messagerieRoute);

// get image
app.get("/images/:image", (req, res, next) => {
  res.sendFile(__dirname + "/images/" + req.params.image);
});

module.exports = app;
