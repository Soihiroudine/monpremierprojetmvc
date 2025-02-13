const express = require('express');
const programmeControl = require('../../controls/programmeControl');
const router = express.Router();

router.get("/programmeTV", programmeControl.afficheProgrammes.bind(programmeControl));

module.exports = router;    // On exporte le router