const mysql = require("mysql");
const pool = mysql.createConnection({
  user: "root",
  password: "",
  database: "apppfe",
  host: "localhost",
  port: 3306,
});

pool.connect((error) => {
  if (error) {
    return console.log("connexion à la base de données echouée!!!");
  } else {
    console.log("connexion à la base de données réussie !");
  }
});

module.exports = pool;
