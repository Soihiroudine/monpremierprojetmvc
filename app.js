// On import le framework express
const express = require("express");

// On créer l'application expressJs avec : app
const app = express();

// Engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

// route [ Racine ]
app.get("/", (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write("<b>Mon serveur est lancé depuis le village d'Acoua.</b>");
    console.log("Je viens de me mettre dans la racine !");
    res.end();
});

// route apropos
app.get("/apropos", (req, res) => {
    res.render("apropos");
});


app.get("/formulaireProgrammeTv", (req, res) => {
    res.render("formulaireProgrammeTv");
});

app.get("/programmeTv", (req, res) => {
    res.render("programmeTv");
});

// On exporter l'application
module.exports = app;