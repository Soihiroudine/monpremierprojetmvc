// On import le framework express
const express = require("express");
require('dotenv').config(); // on va vouloir acceder a notre fichier .env
const layouts = require("express-ejs-layouts"); 
const session = require("express-session");

// On créer l'application expressJs avec : app
const app = express();

// On appele les routes
const routeAcceuil = require("./server/routes/routeacceuil");
const routeApropos = require("./server/routes/routeaprorpos");
const routeFormProgramme = require("./server/routes/routeformprogramme");
const routeProgrammeTv = require("./server/routes/routeprogrammetv");
const routeErreur = require("./server/routes/routeErreur");
const routeInscription = require("./server/routes/routeInscription");
const routeProfil = require("./server/routes/routeProfil");

// Engine
app.set("views", "./views");
app.set("view engine", "ejs");

// un layout
app.use(layouts);
const layout = app.set("layout", "./layout/main");

app.use((req, res, next) => {
    res.renderWithLayout = function(view, locals = {}) {
      locals.body = locals.body || res.render(view, locals); // Rendre le contenu spécifique de la vue
      locals.title = 'Bold 13'; // Passer un titre par défaut
      locals.user = req.user || null; // Exemple de données globales (utilisateur connecté)
      res.render(layout, locals); // Injecter dans le layout
    };
    next();
});


// Acces au fichier du projet - css, image
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionCle = process.env.SESSION_SECRET;

// Express session
app.use( 
    session({
        secret: sessionCle,
        resave: false,
        saveUninitialized: true,
        cookie: { 
            secure: false, 
            // secure : false, // true = https
            maxAge: 1000 * 60 * 30 //30 minutes 
            // La durée de vie de notre session en millisecondes
            // maxAge : 
                // 1000ms = 1 seconde
                // 60s = 1 minute
                // 30m = 1/2 heure
        }
    })
);

// route acceuil
app.use("/", routeAcceuil);

// route apropos
app.use("/", routeApropos);

// route formulaireProgrammeTv
app.use("/", routeFormProgramme);

// route programmeTv
app.use("/", routeProgrammeTv);

// route inscription
app.use("/", routeInscription);

// route profil
app.use("/", routeProfil);

// route pour les erreurs
app.use("/", routeErreur);

// On exporter l'application
module.exports = app;