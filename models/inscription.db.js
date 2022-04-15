const pool = require("../database/db");

let recyclyDB = {};

recyclyDB.inscriptionParticulier = (nom, prenom, email, tel, matDePasse) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO particulier (nom,prenom,email,tel,mot_de_passe) VALUES ('${nom}','${prenom}','${email}','${tel}','${matDePasse}')`,
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

///////////////////////////////////// Inscription d'un Transporteur \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
recyclyDB.inscriptionTransporteur = (nom, prenom, email, tel, matDePasse) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO transporteur (nom,prenom,email,tel,mot_de_passe) VALUES ('${nom}','${prenom}','${email}','${tel}','${matDePasse}')`,
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

///////////////////////////////////// Inscription d'une Entreprise \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
recyclyDB.inscriptionEntreprise = (email, tel, matDePasse, nomEntreprise) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO entreprise (email,tel,mot_de_passe,nom_entreprise) VALUES ('${email}','${tel}','${matDePasse}','${nomEntreprise}')`,
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
