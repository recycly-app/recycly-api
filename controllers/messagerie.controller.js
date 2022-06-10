const db = require("../models/messagerie.db");

//add message

module.exports.addMessage = (req, res) => {
  db.addMessage(
    req.body.id_sender,
    req.body.id_reciever,
    req.body.message,
    req.body.date
  )
    .then((result) => {
      res.status(200).json({
        message: "Message ajouter avec succes!",
        result: result,
      });
    })
    .catch((error) => res.status(400).json({ error: error + "" }));
};
