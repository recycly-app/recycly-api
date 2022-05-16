const db = require("../models/annonceRecyclage.db");

//    create annonce
module.exports.createAnnonceRecyclage = (req, res) => {
  db.createAnnonceRecyclage(
    req.body.titre,
    req.body.description,
    req.body.date,
    req.body.image,
    req.body.idAnnonceur,
    req.body.prix,
    req.body.lieuRecuperation,
    req.body.categorie
  )
    .then((result) =>
      res.status(200).json({
        message: "Annonce recyclage ajouter avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};

//   delete annonce
module.exports.deleteAnnonceRecyclage = (req, res) => {
  db.deleteAnnonceRecyclage(req.params.id)
    .then((result) =>
      res.status(200).json({
        message: "Annonce recyclage supprimé avec succes!",
        result: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};

// get recent annoconces

module.exports.getRecentAnnoncesRecyclage = (req, res) => {
  db.getRecentAnnoncesRecyclage()
    .then((result) =>
      res.status(200).json({
        annonce: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};

//  get user annonces
module.exports.getUserAnnoncesRecyclage = (req, res) => {
  db.getUserAnnoncesRecyclage(req.params.id)
    .then((result) =>
      res.status(200).json({
        annonce: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};
