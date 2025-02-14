const express = require('express');
const router = express.Router();
const comptUserControls = require('../../controls/comptUserControls');

router.get("/inscription", (req, res) => {
    res.render("inscription", {title: "Inscription", user: req.session.user});
});

router.post("/inscription", comptUserControls.creationUtilisateur.bind(comptUserControls));

router.get("/connexion", (req, res) => {
    if(req.session.user) {
        return res.redirect("/profil");
    }
    res.render("connexion", {title: "Connexion", user: req.session.user});
});

router.post("/connexion", comptUserControls.connexionUtilisateurs.bind(comptUserControls));

module.exports = router;    // On exporte le router