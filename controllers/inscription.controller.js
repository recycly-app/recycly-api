const db = require("../models/inscription.db");
const bcrypt = require("bcrypt");

// imports
const checkInscription = require("../functions/verification.inscription");

////////////////////////////////////////// INSCRIPTION  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
module.exports.inscription = async (req, res) => {
  let nom = req.body.nom;
  let email = req.body.email;
  let tel = req.body.tel;
  let typeUser = req.body.typeUser;
  let prenom = req.body.prenom;

  // if (!checkInscription.verification(nom, prenom, email, tel)) {
  //   res.status(400).json({
  //     message: "Les informations de l'utilisateur sont incorrectes",
  //   });
  //   return 0;
  // }

  // hash du mot de passe
  const hashedMotDePasse = await bcrypt.hash(req.body.motDePasse, 10);

  db.inscription(nom, prenom, email, tel, hashedMotDePasse, typeUser)
    .then((result) =>
      res.status(200).json({
        message: "Utilisateur ajouter avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};
