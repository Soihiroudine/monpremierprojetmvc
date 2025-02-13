const express = require('express');
const router = express.Router();


// route [ Profil ]
router.get("/profil", (req, res) => {
    res.render("profil", {user : req.session.user});
});

// Route pour détruire la session
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.send('Erreur lors de la déconnexion.');
      }
      res.redirect("/connexion");
    });
});

module.exports = router;    // On exporte le router