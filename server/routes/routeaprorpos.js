const express = require("express");
const membreControl = require("../../controls/membreControls");
const router = express.Router();

router.get("/apropos", membreControl.afficheMembres.bind(membreControl));

module.exports = router;    // On exporte le router