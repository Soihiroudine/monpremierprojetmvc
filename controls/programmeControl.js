const ProgrammeTv = require("../models/programmetv");

class ProgrammeControl {
    constructor() {
        this.programme = new ProgrammeTv();
    }

    creationProgramme(req, res) {
        const { nomProgramme, diffusion, heure_diffusion, description, lienVideo } = req.body;

        if (!nomProgramme || !description || !diffusion || !heure_diffusion || !lienVideo) {
            console.log("Tous les champs sont requis");
            return res.status(400).send('Tous les champs sont requis');
        }

        this.programme.addProgramme(nomProgramme, description, diffusion, heure_diffusion, lienVideo, (err) => {
            if (err) {
                console.log("Erreur lors de l'ajout");
                return res.status(500).send('Erreur lors de l\'ajout');
            }
            res.redirect("/programmeTV");
        });

    }

    afficheProgrammes(req, res) {
        this.programme.getProgrammes((err, programme) => {
            if (err) {
                console.log("Erreur lors de l'importation des information.");
                return res.status(500).send("Erreur lors de l'importation des information.");
            }
            res.render("programmeTV", { programme, title : "Affiche programme", user: req.session.user });
        });
    }
}

module.exports = new ProgrammeControl;