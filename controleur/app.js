// On import le framework express
const express = require("express");

// le module permet de manipuler des fichier
const fs = require("fs");

// On créer l'application expressJs avec : app
const app = express();

// Engine
app.set("views", "./vue");
app.set("view engine", "ejs");

// route [ Racine ]
app.get("/", (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write("<b>Mon serveur est lancé depuis le village d'Acoua.</b>");
    console.log("Je viens de me mettre dans la racine !");
    res.end();
});

// route acceuil
app.get("/acceuil", (req, res) => {
    res.render("acceuil");
});

// On exporter l'application
module.exports = app;