const express = require('express');
const programmeControl = require('../../controls/programmeControl');
const router = express.Router();

router.get("/formulaireProgrammeTv", (req, res) => {
    res.render("formulaireProgrammeTv");
})
router.post("/ajoutProgramme", programmeControl.creationProgramme.bind(programmeControl));

module.exports = router;    // On exporte le router

