const express = require("express");
const router = express.Router();


// Toutes les routes qui n'existe pas on la page d'erreur
router.get("*", (req, res) => {
    res.status(404).render("404", {layout : false});
});

module.exports = router;