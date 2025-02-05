// On import le framework express
const express = require("express");
require('dotenv').config(); // on va vouloir acceder a notre fichier .env

// On créer l'application expressJs avec : app
const app = express();

// Engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// route [ Racine ]
app.get("/", (req, res) => {
    res.redirect("/apropos");
});

// route apropos
app.use("/", require("./server/routes/routeaprorpos"));

// route formulaireProgrammeTv
app.use("/", require("./server/routes/routeformprogramme"));

// route programmeTv
app.use("/", require("./server/routes/routeprogrammetv"));

// Toutes les routes qui n'existe pas on la page d'erreur
app.get("*", (req, res) => {
    res.status(404).render("404");
});

// On exporter l'application
module.exports = app;