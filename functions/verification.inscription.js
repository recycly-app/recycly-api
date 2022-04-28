const match = require("nodemon/lib/monitor/match");

let checkInscription = {};

checkInscription.verification = (nom, prenom, email, tel) => {
  let nameRegex = /^[a-zA-Z\-çéèà]+$/;
  let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  let telRegex = /^0\d{9}$/;

  if (prenom !== undefined) {
    // verifier le nom
    var validNom = nom.match(nameRegex);
    if (validNom == null) {
      console.log(
        "Votre nom n'est pas valide.Seuls les caractères: A-Z, a-z et '-' sont  acceptables."
      );
      return false;
    }
    // verifier le prénom
    var validPrenom = prenom.match(nameRegex);
    if (validPrenom == null) {
      console.log(
        "Votre prénom n'est pas valide.Seuls les caractères: A-Z, a-z et '-' sont  acceptables."
      );
      return false;
    }
  }

  // verifier l'email
  var validEmail = email.match(emailRegex);

  if (validEmail == null) {
    console.log("Votre email n'est pas valide.");
    return false;
  }

  // verifier le tel
  var validTel = tel.match(telRegex);
  if (validTel == null) {
    console.log("Votre numéro de téléphone n'est pas valide.");
    return false;
  }

  return true;
};

module.exports = checkInscription;
