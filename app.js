const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
// import routes
const userRouteInscription = require("./routes/inscription.routes");
const userRouteConnexion = require("./routes/connexion.routes");
const annonceReconditionnementRoute = require("./routes/annonceReconditionnement.routes");
const userRoute = require("./routes/user.routes");

app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/inscription", userRouteInscription);
app.use("/connexion", userRouteConnexion);
app.use("/annonce/Reconditionnement", annonceReconditionnementRoute);
// app.use("/annonce/recyclage", annonceRoute);
app.use("/user", userRoute);

module.exports = app;
