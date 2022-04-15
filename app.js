const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// import routes
const userRouteInscription = require("./routes/inscription.routes");

app.use(bodyParser.json());
app.use("/inscription", userRouteInscription);
module.exports = app;
