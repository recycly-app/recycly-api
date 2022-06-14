const pool = require("../database/db");
let recyclyDB = {};

// add message

recyclyDB.addMessage = (id_sender, id_reciever, message, date) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO message (id_sender,id_reciever,message,date) VALUES ('${id_sender}','${id_reciever}','${message}','${date}')`,
      function (err, results) {
        if (err) {
          console.log("error add message : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// get contact
recyclyDB.getContacts = (id_user) => {
  return new Promise((resolve, reject) => {
    pool.query(
      // `SELECT id_contact FROM contacts WHERE id_user=${id_user}`,
      `SELECT user.id_user,nom,prenom,email,tel,photo_profil,type_user FROM user INNER JOIN contacts ON user.id_user = contacts.id_contact AND contacts.id_user=${id_user}`,
      function (err, results) {
        if (err) {
          console.log("error add message : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// get messages
recyclyDB.getMessages = (id_user, id_contact) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM message WHERE (id_sender=${id_user} AND id_reciever=${id_contact})OR(id_sender=${id_contact} AND id_reciever=${id_user})`,
      function (err, results) {
        if (err) {
          console.log("error add message : ", err);
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
module.exports = recyclyDB;
