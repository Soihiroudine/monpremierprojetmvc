const express = require("express");
const router = express.Router();

router.get("/apropos", (req, res, next) => {
    res.render("apropos");
});

module.exports = router;    // On exporte le router