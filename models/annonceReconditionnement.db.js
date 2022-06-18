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
      `INSERT INTO annonce(titre,description,date,photo_annonce,id_annonceur,prix,categorie,lieu_recuperation,wilaya,type) VALUES 
      ("${titre}","${description}",'${date}','${photoAnnonce}','${idAnnonceur}','${prix}',"${categorie}",'${lieuRecuperation}','${wilaya}',"Reconditionnement")`,
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
      `DELETE FROM annonce WHERE id_annonce=${id}`,
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
    pool.query(
      `SELECT * FROM annonce WHERE type="Reconditionnement"`,
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

// get user annonces
recyclyDB.getUserAnnoncesReconditionnement = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM annonce WHERE id_annonceur= ${id}`,
      function (err, results) {
        if (err) {
          console.log("error get user annonces reconnditionnement : ", err);
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
        `SELECT * FROM annonce WHERE wilaya= '${wilaya}' AND categorie= '${categorie}' AND type="Reconditionnement"`,
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
        `SELECT * FROM annonce WHERE wilaya= '${wilaya}' AND type="Reconditionnement"`,
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
        `SELECT * FROM annonce WHERE categorie= '${categorie}' AND type="Reconditionnement"`,
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
  heure,
  commentaire,
  id_reserveur
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO reservation (id_annonce,date,heure,commentaire,id_reserveur,status,quantite) VALUES 
      (${id_annonce},"${date}","${heure}","${commentaire}",${id_reserveur},"","")`,
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
      `SELECT * FROM annonce INNER JOIN reservation ON annonce.id_annonceur = ${id_user} AND reservation.id_annonce=annonce.id_annonce`,
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
      `UPDATE reservation SET status = '${status}' WHERE id_reservation=${id_reservation}`,
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
      `SELECT count(id_annonce) as nombreAnnonces FROM annonce WHERE id_annonceur=${id_annonceur} `,
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
