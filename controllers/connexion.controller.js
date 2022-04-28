const db = require("../models/user.db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 24 * 60 * 60 * 1000;
const createToken = (email) => {
  return jwt.sign({ email }, "TOKEN_DE_TEST", { expiresIn: "24h" });
};

module.exports.connexion = async (req, res, next) => {
  try {
    const { email, motDePasse } = req.body;
    // verifier si l'utilisateur existe avec cet e-mail
    let user = await db.getUserEmail(email);
    // si l'utilisateur n'existe pas
    if (Object.keys(user).length == 0) {
      console.log("Cet utilisateur n'existe pas");
      return res.json({ error: "Cet utilisateur n'existe pas" });
    }

    //si l'utilisateur existe on continue
    // verifier si le motde passe est valide
    let isMatch = await bcrypt.compare(motDePasse, user[0].mot_de_passe);

    if (!isMatch) {
      console.log("mot de passe incorrect");
      return res.json({ error: "Mot de passe incorrect" });
    }
    const token = createToken(user[0].email);
    res.cookie("jwt", token, { maxAge: maxAge, httpOnly: true });

    res.status(200).json({
      user_id: user[0].id,
      user: user[0],
      token: token,
    });

    next();
  } catch (err) {
    res.status(400).json({ error: "" + err });
  }
};
