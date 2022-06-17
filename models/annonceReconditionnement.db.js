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

recyclyDB.addReservationReconditionnement = (
  id_annonce,
  date,
  commentaire,
  heure
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO reservation_recondition (id_annonce_recondition,date,commentaire,heure) VALUES 
      ("${id_annonce}","${date}","${commentaire}","${heure}")`,
      function (err, results) {
        if (err) {
          console.log("error add reservation reconditionnemnt : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// get reservations reconditionnement
recyclyDB.getReservationReconditionnement = (id_user) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM annonce_recondition INNER JOIN reservation_recondition ON annonce_recondition.id_annonceur = ${id_user} AND reservation_recondition.id_annonce_recondition=annonce_recondition.id_annonce_recondition`,
      function (err, results) {
        if (err) {
          console.log("error get annonce reconditionnement : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// update reservations recyclage
recyclyDB.statusReservationReconditionnement = (id_reservation, status) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE reservation_recondition SET status = '${status}' WHERE id_reservation=${id_reservation}`,
      function (err, results) {
        if (err) {
          console.log("error update annonce reconditionnement : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// get nombre annonces recyclage
recyclyDB.getNombreAnnoncesReconditionnement = (id_annonceur) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT count(id_annonce_recondition) as nombreAnnonces FROM annonce_recondition WHERE id_annonceur=${id_annonceur} `,
      function (err, results) {
        if (err) {
          console.log("error get nombre annonces reconditionnement : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
module.exports = recyclyDB;
