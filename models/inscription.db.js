const pool = require("../database/db");

let recyclyDB = {};

recyclyDB.inscription = (nom, prenom, email, tel, matDePasse, typeUser) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO user (nom,prenom,email,tel,mot_de_passe,type_user) VALUES ('${nom}','${prenom}','${email}','${tel}','${matDePasse}','${typeUser}')`,
      function (err, results) {
        if (err) {
          console.log("error :", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = recyclyDB;
