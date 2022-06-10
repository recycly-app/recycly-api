const mysql = require("mysql");
const pool = mysql.createConnection({
  user: "root",
  password: "",
  database: "apppfe",
  host: "localhost",
  port: 3306,
  // user: "divein31_root",
  // password: "divein-isi2022",
  // database: "divein31_test",
  // host: "localhost",
  // port: 3306,
});

pool.connect((error) => {
  if (error) {
    return console.log("connexion à la base de données echouée!!!\n" + error);
  } else {
    console.log("connexion à la base de données réussie !");
  }
});

module.exports = pool;
