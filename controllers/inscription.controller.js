const db = require("../models/inscription.db");
const bcrypt = require("bcrypt");

// imports
const checkInscription = require("../functions/verification.inscription");

/////////////////////////////////////////////   inscription d'un particulier \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
module.exports.inscriptionParticulier = async (req, res) => {
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
  //
  const hashedMotDePasse = await bcrypt.hash(req.body.motDePasse, 10);

  // inscription du particulier
  db.inscriptionParticulier(
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.tel,
    hashedMotDePasse
  )
    .then((result) =>
      res.status(200).json({
        message: "Utilisateur (particulier) ajouter avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};

///////////////////////////////////// Inscription d'un Transporteur \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

module.exports.inscriptionTransporteur = async (req, res) => {
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
  //
  const hashedMotDePasse = await bcrypt.hash(req.body.motDePasse, 10);

  // inscription du particulier
  db.inscriptionTransporteur(
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.tel,
    hashedMotDePasse
  )
    .then((result) =>
      res.status(200).json({
        message: "Utilisateur (Transporteur) ajouter avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};
