const db = require("../models/annonceReconditionnement.db");

//    create annonce
module.exports.createAnnonceReconditionnment = (req, res) => {
  let image;
  let uploadPath;
  image = req.files.image;

  uploadPath = __dirname + "\\images\\" + image.name;

  image.mv(uploadPath, function (err) {
    if (err) {
      return console.log("Erreur image" + err);
    }
  });
  // upload.single(req.file);

  db.createAnnonceReconditionnement(
    req.body.titre,
    req.body.description,
    req.body.date,
    image.name,
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
  db.deleteAnnonceReconditionnement(req.params.id)
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

//  get user annonces
module.exports.getUserAnnoncesReconditionnement = (req, res) => {
  db.getUserAnnoncesReconditionnement(req.params.id)
    .then((result) =>
      res.status(200).json({
        annonce: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};
