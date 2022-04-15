const db = require("../models/inscription.db");

// imports
const checkInscription = require("../functions/verification.inscription");

module.exports.inscriptionParticulier = (req, res) => {
  // vérification des information de l'utilisateur
  if (
    !checkInscription.verification(
      req.body.nom,
      req.body.prenom,
      req.body.email,
      req.body.tel
    )
  ) {
    res
      .status(400)
      .json({ message: "Les informations de l'utilisateur sont incorrectes" });
    return 0;
  }

  // inscription du particulier
  db.inscription(
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.tel,
    req.body.motDePasse
  )
    .then((result) =>
      res
        .status(200)
        .json({ message: "Utilisateur ajouter avec succes!", result: result })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};
