const Membre = require("../models/membre");

class MembreControl{
    constructor(){
        this.membre = new Membre();
    }

    afficheMembres(req, res) {
        this.membre.getMembres((err, membre) => {
            if (err) {
                return res.status(500).send("Erreur lors de l'importation des information.")
            }
            res.render("apropos", { membre });
        });
    }
}

module.exports = new MembreControl();