const db = require("../models/inscription.db");
const bcrypt = require("bcrypt");

// imports
const checkInscription = require("../functions/verification.inscription");

/////////////////////////////////////////////   inscription d'un particulier \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
module.exports.inscriptionParticulier = async (req, res) => {
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let email = req.body.email;
  let tel = req.body.tel;
  // vérification des information de l'utilisateur
  if (!checkInscription.verification(nom, prenom, email, tel)) {
    res
      .status(400)
      .json({ message: "Les informations de l'utilisateur sont incorrectes" });
    return 0;
  }
  //
  const hashedMotDePasse = await bcrypt.hash(req.body.motDePasse, 10);

  // inscription du particulier
  db.inscriptionParticulier(nom, prenom, email, tel, hashedMotDePasse)
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
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let email = req.body.email;
  let tel = req.body.tel;
  // vérification des information de l'utilisateur
  if (!checkInscription.verification(nom, prenom, email, tel)) {
    res
      .status(400)
      .json({ message: "Les informations de l'utilisateur sont incorrectes" });
    return 0;
  }
  //
  const hashedMotDePasse = await bcrypt.hash(req.body.motDePasse, 10);

  // inscription du particulier
  db.inscriptionTransporteur(nom, prenom, email, tel, hashedMotDePasse)
    .then((result) =>
      res.status(200).json({
        message: "Utilisateur (Transporteur) ajouter avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};

///////////////////////////////////// Inscription d'une Entreprise \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

module.exports.inscriptionEntreprise = async (req, res) => {
  let email = req.body.email;
  let tel = req.body.tel;
  let nomEntreprise = req.body.nomEntreprise;
  // vérification des information de l'utilisateur
  if (!checkInscription.verification(email, tel)) {
    res
      .status(400)
      .json({ message: "Les informations de l'utilisateur sont incorrectes" });
    return 0;
  }

  const hashedMotDePasse = await bcrypt.hash(req.body.motDePasse, 10);

  // inscription du particulier
  db.inscriptionEntreprise(email, tel, hashedMotDePasse, nomEntreprise)
    .then((result) =>
      res.status(200).json({
        message: "Utilisateur (Etreprise) ajouter avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};
