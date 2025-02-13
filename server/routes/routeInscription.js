const express = require('express');
const router = express.Router();
// const inscriptionControl = require('../../controls/inscriptionControl');

router.get("/inscription", (req, res) => {
    res.render("inscription");
});

// router.post("/inscription");

// // route pour l'inscription
//      (req, res) => {
//     const { nom, prenom, email, password } = req.body;

//     if (!nom || !prenom || !email || !password) {
//         return res.status(400).send('Tous les champs sont requis');
//     }
    // inscriptionControl.addUser(nom, prenom, email, password, (err) => {
    //     if (err) {
    //         return res.status(500).send('Erreur lors de l\'ajout');
    //     }
    //     res.redirect("/acceuil");
    // });
// });

module.exports = router;    // On exporte le router