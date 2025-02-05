const express = require('express');
const router = express.Router();

router.get("/ProgrammeTv", (req, res, next) => {
    res.render("ProgrammeTv");
});   // On redirige vers la page formulaireProgrammeTv 

module.exports = router;    // On exporte le router