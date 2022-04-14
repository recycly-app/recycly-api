const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// import routes
const userRoute = require("./routes/user.routes");

app.use(bodyParser.json());
app.use("/user", userRoute);
module.exports = app;
