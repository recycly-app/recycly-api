const db = require("../models/annonceRecyclage.db");
//    create annonce
module.exports.createAnnonceRecyclage = (req, res) => {
  // ajout de l'image
  let image;
  let uploadPath;
  // generer un npmbre aleatoire pour eviter les meme nom de fichier
  let rendom = Math.random() * 100000000000000000;
  image = req.files.image;
  let imageName = rendom + image.name;

  // uploadPath = __dirname + "\\images\\" + imageName;
  uploadPath = "./images/" + imageName;

  db.createAnnonceRecyclage(
    req.body.titre,
    req.body.description,
    req.body.date,
    imageName,
    req.body.idAnnonceur,
    req.body.prix,
    req.body.lieuRecuperation,
    req.body.categorie,
    req.body.wilaya
  )
    .then((result) => {
      image.mv(uploadPath, function (err) {
        if (err) {
          return console.log("Erreur image" + err);
        }
      });
      res.status(200).json({
        message: "Annonce recyclage ajouter avec succes!",
        result: result,
      });
    })
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

//  get filter annonces
module.exports.getFilterAnnoncesRecyclage = (req, res) => {
  db.getFilterAnnoncesRecyclage(req.params.wilaya, req.params.categorie)
    .then((result) =>
      res.status(200).json({
        annonce: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};

//    add reservation
module.exports.addReservationRecyclage = (req, res) => {
  db.addReservationRecyclage(
    req.body.idAnnonce,
    req.body.quantite,
    req.body.date,
    req.body.commentaire,
    req.body.heure,
    req.body.idReserveur
  )
    .then((result) => {
      res.status(200).json({
        message: "Réservation recyclage ajouter avec succes!",
        result: result,
      });
    })
    .catch((error) => res.status(400).json({ error: error + "" }));
};

//  get reservation recyclage
module.exports.getReservationRecyclage = (req, res) => {
  db.getReservationRecyclage(req.params.idAnnonce)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ error: error + "" }));
};

//  accepter reservation recyclage
module.exports.statusReservationRecyclage = (req, res) => {
  db.statusReservationRecyclage(req.params.idReservation, req.params.status)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ error: error + "" }));
};

// get nombre annonces recyclage
module.exports.getNombreAnnoncesRecyclage = (req, res) => {
  db.getNombreAnnoncesRecyclage(req.params.idAnnonceur)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ error: error + "" }));
};
