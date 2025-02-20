const express = require('express');
const router = express.Router();
const comptUserControls = require('../../controls/comptUserControls');

// route [ Profil ]
router.get("/profil", (req, res) => {
    if (req.session.user) {
    res.render("profil", {title : "profil", user : req.session.user});
    } else {
        res.redirect("/connexion");
    }
});

// Route pour détruire la session
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.send('Erreur lors de la déconnexion.');
      }
      console.log("Déconnexion réussie");
      res.redirect("/connexion");
    });
});

router.post("/deleteUser", comptUserControls.suppressionUtilisateur.bind(comptUserControls));

module.exports = router;    // On exporte le router