const express = require('express');
const programmeControl = require('../../controls/programmeControl');
const router = express.Router();

// router.get("/ProgrammeTv", (req, res, next) => {
//     res.render("ProgrammeTv");
// });   // On redirige vers la page formulaireProgrammeTv 

router.get("/programmeTV", programmeControl.afficheProgrammes.bind(programmeControl));

module.exports = router;    // On exporte le router