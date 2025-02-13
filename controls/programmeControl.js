const ProgrammeTv = require("../models/programmetv");

class ProgrammeControl {
    constructor() {
        this.programme = new ProgrammeTv();
    }

    creationProgramme(req, res) {
        const { nomProgramme, diffusion, heure_diffusion, description } = req.body;

        if (!nomProgramme || !description || !diffusion || !heure_diffusion) {
            return res.status(400).send('Tous les champs sont requis');
        }

        this.programme.addProgramme(nomProgramme, description, diffusion, heure_diffusion, (err) => {
            if (err) {
                return res.status(500).send('Erreur lors de l\'ajout');
            }
            res.redirect("/programmeTV");
        });

    }

    afficheProgrammes(req, res) {
        this.programme.getProgrammes((err, programme) => {
            if (err) {
                return res.status(500).send("Erreur lors de l'importation des information.");
            }
            res.render("programmeTV", { programme });
        });
    }
}

module.exports = new ProgrammeControl;