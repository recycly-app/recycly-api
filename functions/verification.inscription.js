const match = require("nodemon/lib/monitor/match");

let checkInscription = {};

checkInscription.verification = (nom, prenom, email, tel) => {
  let nameRegex = /^[a-zA-Z\-çéèà]+$/;
  let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  // let telRegex = /^\+91\d{10}$/;
  let telRegex = /^0\d{9}$/;
  // let telRegex = /^\d+$/;

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

  // verifier l'email
  var validEmail = email.match(emailRegex);
  // console.log(validEmail);
  if (validEmail == null) {
    console.log("Votre email n'est pas valide.");
    return false;
  }

  // verifier le tel
  var validTel = tel.match(telRegex);
  // console.log(validEmail);
  if (validTel == null) {
    console.log("Votre numéro de téléphone n'est pas valide.");
    return false;
  }

  return true;
};

checkInscription.verification = (email, tel) => {
  let nameRegex = /^[a-zA-Z\-çéèà]+$/;
  let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  // let telRegex = /^\+91\d{10}$/;
  let telRegex = /^0\d{9}$/;
  // let telRegex = /^\d+$/;

  // verifier l'email
  var validEmail = email.match(emailRegex);
  // console.log(validEmail);
  if (validEmail == null) {
    console.log("Votre email n'est pas valide.");
    return false;
  }

  // verifier le tel
  var validTel = tel.match(telRegex);
  // console.log(validEmail);
  if (validTel == null) {
    console.log("Votre numéro de téléphone n'est pas valide.");
    return false;
  }

  return true;
};

module.exports = checkInscription;
