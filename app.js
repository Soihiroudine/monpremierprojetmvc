// On import le framework express
const express = require("express");
require('dotenv').config(); // on va vouloir acceder a notre fichier .env
const layouts = require("express-ejs-layouts"); 

// On créer l'application expressJs avec : app
const app = express();

// On appele les routes
const routeAcceuil = require("./server/routes/routeacceuil");
const routeApropos = require("./server/routes/routeaprorpos");
const routeFormProgramme = require("./server/routes/routeformprogramme");
const routeProgrammeTv = require("./server/routes/routeprogrammetv");
const routeErreur = require("./server/routes/routeErreur");
// Engine
app.set("views", "./views");
app.set("view engine", "ejs");

// un layout
app.use(layouts);
app.set("layout", "./layout/main");

// Acces au fichier du projet - css, image
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route acceuil
app.use("/", routeAcceuil);

// route apropos
app.use("/", routeApropos);

// route formulaireProgrammeTv
app.use("/", routeFormProgramme);

// route programmeTv
app.use("/", routeProgrammeTv);

// route pour les erreurs
app.use("/", routeErreur);

// On exporter l'application
module.exports = app;