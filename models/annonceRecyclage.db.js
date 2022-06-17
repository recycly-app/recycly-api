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
    if (wilaya != "null" && categorie != "null") {
      pool.query(
        `SELECT * FROM annonce_recy WHERE wilaya= '${wilaya}' AND categorie= '${categorie}'`,
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
        `SELECT * FROM annonce_recy WHERE wilaya= '${wilaya}'`,
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
        `SELECT * FROM annonce_recy WHERE categorie= '${categorie}'`,
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
  quantite,
  date,
  commentaire,
  heure,
  id_reserveur
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO reservation_recy (id_annonce_recy,quantite,date,commentaire,heure,id_reserveur) VALUES 
      (${id_annonce},"${quantite}","${date}","${commentaire}","${heure}",${id_reserveur})`,
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
      `SELECT * FROM annonce_recy INNER JOIN reservation_recy ON annonce_recy.id_annonceur = ${id_user} AND reservation_recy.id_annonce_recy=annonce_recy.id_annonce_recy`,
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
      `UPDATE reservation_recy SET status = '${status}' WHERE id_reservation=${id_reservation}`,
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

// get nombre annonces recyclage
recyclyDB.getNombreAnnoncesRecyclage = (id_annonceur) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT count(id_annonce_recy) as nombreAnnonces FROM annonce_recy WHERE id_annonceur=${id_annonceur} `,
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
