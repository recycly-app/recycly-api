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
  wilaya,
  quantite
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO annonce (titre,description,date,photo_annonce,id_annonceur,prix,lieu_recuperation,categorie,wilaya,type,quantite) VALUES 
      ("${titre}","${description}","${date}","${photoAnnonce}","${idAnnonceur}","${prix}",'${lieuRecuperation}',"${categorie}","${wilaya}","Recyclage","${quantite}")`,
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
      `DELETE FROM annonce WHERE id_annonce=${id}`,
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
    pool.query(
      `SELECT * FROM annonce WHERE type="Recyclage"`,
      function (err, results) {
        if (err) {
          console.log("error get annonce recyclage : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// get user annonces
recyclyDB.getUserAnnoncesRecyclage = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM annonce WHERE id_annonceur= ${id} AND type="Recyclage"`,
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
    if (wilaya != "null" && categorie != "null") {
      pool.query(
        `SELECT * FROM annonce WHERE wilaya= '${wilaya}' AND categorie= '${categorie}' AND type="Recyclage"`,
        function (err, results) {
          if (err) {
            console.log("error create annonce recyclage : ", err);
            return reject(err);
          }
          return resolve(results);
        }
      );
    } else if (wilaya != "null") {
      pool.query(
        `SELECT * FROM annonce WHERE wilaya= '${wilaya}' AND type="Recyclage"`,
        function (err, results) {
          if (err) {
            console.log("error create annonce recyclage : ", err);
            return reject(err);
          }
          return resolve(results);
        }
      );
    } else if (categorie != "null") {
      pool.query(
        `SELECT * FROM annonce WHERE categorie= '${categorie}' AND type="Recyclage"`,
        function (err, results) {
          if (err) {
            console.log("error create annonce recyclage : ", err);
            return reject(err);
          }
          return resolve(results);
        }
      );
    }
  });
};

recyclyDB.addReservationRecyclage = (
  id_annonce,
  date,
  heure,
  commentaire,
  id_reserveur,
  quantite
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO reservation (id_annonce,date,heure,commentaire,id_reserveur,status,quantite) VALUES 
      (${id_annonce},"${date}","${heure}","${commentaire}",${id_reserveur},"","${quantite}")`,
      function (err, results) {
        if (err) {
          console.log("error add reservation recyclage : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// get reservations recyclage
recyclyDB.getReservationRecyclage = (id_user) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM annonce INNER JOIN reservation ON annonce.id_annonceur = ${id_user} AND reservation.id_annonce=annonce.id_annonce`,
      function (err, results) {
        if (err) {
          console.log("error get annonce recycalge : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// update reservations recyclage
recyclyDB.statusReservationRecyclage = (id_reservation, status) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE reservation SET status = '${status}' WHERE id_reservation=${id_reservation}`,
      function (err, results) {
        if (err) {
          console.log("error update annonce recyclage : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

recyclyDB.addNotificationRecyclage = (id_reservation, date) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO notification (id_reservation,date_heure) VALUES (${id_reservation},"${date}")`,
      function (err, results) {
        if (err) {
          console.log("error add notification recyclage : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

//  get notifications
recyclyDB.getNotificationRecyclage = (id_user) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM notification INNER JOIN reservation ON reservation.id_reserveur = ${id_user}`,
      function (err, results) {
        if (err) {
          console.log("error get notifications recyclage : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
// get nombre annonces recyclage
recyclyDB.getNombreAnnoncesRecyclage = (id_annonceur) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT count(id_annonce) as nombreAnnonces FROM annonce WHERE id_annonceur=${id_annonceur} `,
      function (err, results) {
        if (err) {
          console.log("error get nombre annonces recycalge : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
module.exports = recyclyDB;
