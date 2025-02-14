const express = require("express");
const router = express.Router();

// route [ Racine ]
// Redirige vers la page d'acceuil
router.get("/", (req, res) => {
    res.redirect("/acceuil");
});



// router.get("/acceuil", (req, res) => {
//     res.render("acceuil", {user : req.session.user});
// });

router.get('/acceuil', (req, res) => {
    res.render('acceuil', {
        title: 'Acceuil',
        user: req.session.user // Passer des données globales
    });
  });

module.exports = router;