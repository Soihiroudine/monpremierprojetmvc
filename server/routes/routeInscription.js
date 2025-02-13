const express = require('express');
const router = express.Router();
const comptUserControls = require('../../controls/comptUserControls');

router.get("/inscription", (req, res) => {
    res.render("inscription");
});

router.post("/inscription", comptUserControls.creationUtilisateur.bind(comptUserControls));

router.get("/connexion", (req, res) => {
    res.render("connexion");
});

router.post("/connexion", comptUserControls.connexionUtilisateurs.bind(comptUserControls));

module.exports = router;    // On exporte le router