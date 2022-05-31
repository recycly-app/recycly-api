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
  lieuRecuperation,
  wilaya
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO annonce_recondition (titre,description,date,photo_annonce,id_annonceur,prix,categorie,etat,lieu_recuperation,wilaya) VALUES 
      ("${titre}","${description}",'${date}','${photoAnnonce}','${idAnnonceur}','${prix}',"${categorie}",'${etat}','${lieuRecuperation}','${wilaya}')`,
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

// delete annonce
recyclyDB.deleteAnnonceReconditionnement = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM annonce_recondition WHERE id_annonce_recondition=${id}`,
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

// get recent annonces

recyclyDB.getRecentAnnoncesReconditionnement = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM annonce_recondition`, function (err, results) {
      if (err) {
        console.log("error create annonce reconnditionnement : ", err);
        return reject(err);
      }
      return resolve(results);
    });
  });
};

// get user annonces
recyclyDB.getUserAnnoncesReconditionnement = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM annonce_recondition WHERE id_annonceur= ${id}`,
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

// get filter annonces
recyclyDB.getFilterAnnoncesReconditionnement = (wilaya, categorie) => {
  // console.log("wilaya", wilaya);
  // console.log("cat", categorie);
  return new Promise((resolve, reject) => {
    if (wilaya != "null" && categorie != "null") {
      pool.query(
        `SELECT * FROM annonce_recondition WHERE wilaya= '${wilaya}' AND categorie= '${categorie}'`,
        function (err, results) {
          if (err) {
            console.log("error create annonce reconnditionnement : ", err);
            return reject(err);
          }
          return resolve(results);
        }
      );
    } else if (wilaya != "null") {
      pool.query(
        `SELECT * FROM annonce_recondition WHERE wilaya= '${wilaya}'`,
        function (err, results) {
          if (err) {
            console.log("error create annonce reconnditionnement : ", err);
            return reject(err);
          }
          return resolve(results);
        }
      );
    } else if (categorie != "null") {
      pool.query(
        `SELECT * FROM annonce_recondition WHERE categorie= '${categorie}'`,
        function (err, results) {
          if (err) {
            console.log("error create annonce reconnditionnement : ", err);
            return reject(err);
          }
          return resolve(results);
        }
      );
    }
  });
};

module.exports = recyclyDB;
