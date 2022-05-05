const db = require("../models/user.db");

module.exports.getUserId = (req, res) => {
  db.getUserId(req.params.id)
    .then((result) =>
      res.status(200).json({
        user: result,
      })
    )
    .catch((error) => res.status(400).json({ error: error + "" }));
};
