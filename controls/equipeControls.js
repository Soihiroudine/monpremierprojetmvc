const Equipe = require("../models/equipe");

class EquipeControl{
    constructor(){
        this.equipe = new Equipe();
    }

    afficheEquipes(req, res) {
        this.equipe.getEquipes((err, equipe) => {
            if (err) {
                console.log("Erreur lors de l'importation des information.");
                return res.status(500).send("Erreur lors de l'importation des information.")
            }
            res.render("programmeTV", { equipe, title : "Equipe", user: req.session.user });
        });
    }

    
}