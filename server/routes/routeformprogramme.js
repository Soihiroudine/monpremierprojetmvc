const express = require('express');
const programmeControl = require('../../controls/programmeControl');
const router = express.Router();

router.get("/formulaireProgrammeTv", (req, res) => {
    if (!req.session.user) {
        res.redirect("/connexion");
    }
    res.render("formulaireProgrammeTv", {title : "Formulaire Programme TV", user: req.session.user});
});

// La route que le formulaire de programmeTv va appeler pour créer un programme
router.post("/ajoutProgramme", programmeControl.creationProgramme.bind(programmeControl));

module.exports = router;    // On exporte le router

