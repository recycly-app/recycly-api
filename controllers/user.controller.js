const db = require("../models/user.db");

module.exports.inscription = (req, res) => {
  db.inscription(
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.tel,
    req.body.motDePasse
  )
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ error: error + "" }));
};
