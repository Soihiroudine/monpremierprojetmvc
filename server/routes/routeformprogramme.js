const express = require('express');
const router = express.Router();

router.get("/formulaireProgrammeTv", (req, res, next) => {
    res.render("formulaireProgrammeTv");
});   // On redirige vers la page formulaireProgrammeTv

module.exports = router;    // On exporte le router

