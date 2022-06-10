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

module.exports = recyclyDB;
