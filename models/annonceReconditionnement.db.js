const pool = require("../database/db");

let recyclyDB = {};

recyclyDB.createAnnonceReconditionnement = (
  titre,
  description,
  date,
  photoAnnonce,
  idAnnonceur,
  prix,
  categorie,
  etat,
  lieuRecuperation
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO annonce_recondition (titre,description,date,photo_annonce,id_annonceur,prix,categorie,etat,lieu_recuperation) VALUES 
      ('${titre}','${description}','${date}','${photoAnnonce}','${idAnnonceur}','${prix}','${categorie}','${etat}','${lieuRecuperation}')`,
      function (err, results) {
        if (err) {
          console.log("error create annonce recyclage : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

recyclyDB.deleteAnnonceReconditionnement = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM annonce_recondition WHERE id_annonce_recondition=${id}`,
      function (err, results) {
        if (err) {
          console.log("error create annonce recyclage : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

recyclyDB.getRecentAnnoncesReconditionnement = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM annonce_recondition`, function (err, results) {
      if (err) {
        console.log("error create annonce recyclage : ", err);
        return reject(err);
      }
      return resolve(results);
    });
  });
};
module.exports = recyclyDB;
