const pool = require("../database/db");

let recyclyDB = {};

recyclyDB.createAnnonceRecyclage = (
  titre,
  description,
  date,
  photoAnnonce,
  idAnnonceur,
  prix,
  lieuRecuperation,
  categorie,
  wilaya
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO annonce_recy (titre,description,date,photo_annonce,id_annonceur,prix,lieu_recuperation,categorie,wilaya) VALUES 
      ("${titre}","${description}","${date}","${photoAnnonce}","${idAnnonceur}","${prix}",'${lieuRecuperation}',"${categorie}","${wilaya}")`,
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

recyclyDB.deleteAnnonceRecyclage = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM annonce_recy WHERE id_annonce_recy=${id}`,
      function (err, results) {
        if (err) {
          console.log("error delete annonce recyclage : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

recyclyDB.getRecentAnnoncesRecyclage = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM annonce_recy`, function (err, results) {
      if (err) {
        console.log("error get annonce recyclage : ", err);
        return reject(err);
      }
      return resolve(results);
    });
  });
};

// get user annonces
recyclyDB.getUserAnnoncesRecyclage = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM annonce_recy WHERE id_annonceur= ${id}`,
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

// get filter annonces
recyclyDB.getFilterAnnoncesRecyclage = (wilaya, categorie) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM annonce_recy WHERE wilaya= '${wilaya}' AND categorie= '${categorie}'`,
      function (err, results) {
        if (err) {
          console.log("error create annonce reconnditionnement : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = recyclyDB;
