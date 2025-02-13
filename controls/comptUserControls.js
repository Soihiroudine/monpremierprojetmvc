const ComptUtilisateur = require("../models/utilisateur");
const bycrypt = require("bcryptjs");


class ComptUserControls{
    constructor(){
        this.utilisateur = new ComptUtilisateur();
    }

    creationUtilisateur(req, res){
        const { nom, prenom, email, password, date_naissance} = req.body;

        if(!nom || !prenom || !email || !password || !date_naissance) {
            return res.status(400).send('Tous les champs sont requis');
        }
        this.utilisateur.addUtilisateur(nom, prenom, email, password, date_naissance, (err) => {
            if (err) {
                return res.status(500).send('Erreur lors de l\'ajout');
            }
            res.redirect("/utilisateurs");
        });
    }

    afficheUtilisateurs(req, res){
        this.utilisateur.getUtilisateurs((err, utilisateur) => {
            if (err) {
                return res.status(500).send("Erreur lors de l'importation des information.");
            }
            res.render("utilisateurs", { utilisateur });
        });
    }

}

module.exports = new ComptUserControls;