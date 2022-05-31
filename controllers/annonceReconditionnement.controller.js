const db = require("../models/annonceReconditionnement.db");

//    create annonce
module.exports.createAnnonceReconditionnment = (req, res) => {
  // ajout de l'image
  let image;
  let uploadPath;
  // generer un npmbre aleatoire pour eviter les meme nom de fichier
  let rendom = Math.random() * 100000000000000000;
  image = req.files.image;
  let imageName = rendom + image.name;

  uploadPath = __dirname + "\\images\\" + imageName;

  db.createAnnonceReconditionnement(
    req.body.titre,
    req.body.description,
    req.body.date,
    imageName,
    req.body.idAnnonceur,
    req.body.prix,
    req.body.categorie,
    req.body.etat,
    req.body.lieuRecuperation,
    req.body.wilaya
  )
    .then((result) => {
      image.mv(uploadPath, function (err) {
        if (err) {
          return console.log("Erreur image" + err);
        }
      });
      res.status(200).json({
        message: "Annonce ajouter avec succes!",
        result: result,
      });
    })
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

//  get filter annonces
module.exports.getFilterAnnoncesReconditionnement = (req, res) => {
  db.getFilterAnnoncesReconditionnement(req.params.wilaya, req.params.categorie)
    .then((result) =>
      res.status(200).json({
        annonce: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};
