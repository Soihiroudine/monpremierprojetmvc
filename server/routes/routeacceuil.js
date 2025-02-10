const express = require("express");
const router = express.Router();

// route [ Racine ]
router.get("/", (req, res) => {
    res.redirect("/acceuil");
});

router.get("/acceuil", (req, res) => {
    res.render("acceuil");
});

module.exports = router;