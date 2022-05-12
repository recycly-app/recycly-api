const db = require("../models/annonceReconditionnement.db");

//    create annonce
module.exports.createAnnonceReconditionnment = (req, res) => {
  db.createAnnonceReconditionnement(
    req.body.titre,
    req.body.description,
    req.body.date,
    imagePath,
    req.body.idAnnonceur,
    req.body.prix,
    req.body.categorie,
    req.body.etat,
    req.body.lieuRecuperation
  )
    .then((result) =>
      res.status(200).json({
        message: "Annonce ajouter avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};

//   delete annonce
module.exports.deleteAnnonceReconditionnement = (req, res) => {
  db.deleteAnnonceReconditionnement(req.body.id)
    .then((result) =>
      res.status(200).json({
        message: "Annonce supprimé avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};

// get recent annoconces

module.exports.getRecentAnnoncesReconditionnement = (req, res) => {
  db.getRecentAnnoncesReconditionnement()
    .then((result) =>
      res.status(200).json({
        annonce: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};