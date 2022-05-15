const pool = require("../database/db");
let recyclyDB = {};

//------------------------------------  recuperer un user avec son email----------------------------------
recyclyDB.getUserEmail = (email) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM user WHERE email= '${email}'`, (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

recyclyDB.getUserId = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM user WHERE id_user= '${id}'`, (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

module.exports = recyclyDB;
