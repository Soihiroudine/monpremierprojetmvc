const ComptUtilisateur = require("../models/utilisateur");
const bycrypt = require("bcryptjs");


class ComptUserControls{
    constructor(){
        this.utilisateur = new ComptUtilisateur();
    }

    // Création d'un utilisateur dans la base de données
    creationUtilisateur(req, res){
        const { nom, prenom, email, password, password2, dateNaissance} = req.body;

        // Verification que tous les champs sont remplis
        if(!nom || !prenom || !email || !password || !dateNaissance) {
            return res.status(400).send('Tous les champs sont requis');
        }

        let passwordHash;
        // Hashage du mot de passe
        if (password === password2) {
            passwordHash = bycrypt.hashSync(password, 10);
        }else {
            return res.status(400).send('Les mots de passe ne correspondent pas');
        }

        this.utilisateur.addUtilisateur(nom, prenom, email, dateNaissance, passwordHash,  (err) => {
            if (err) {
                return res.status(500).send('Erreur lors de l\'ajout');
            }
            res.redirect("/connexion");
        });
    }

    connexionUtilisateurs(req, res){
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).send('Tous les champs sont requis');
        }

        this.utilisateur.getEmailUtilisateur(email, (err, utilisateur) => {
            if (err) {
                return res.status(500).send("Erreur lors de l'importation des information.");
            }

            if (utilisateur.length === 0) {
                return res.status(404).send("Utilisateur non trouvé");
            }

            if (!bycrypt.compareSync(password, utilisateur[0].password)) {
                return res.status(401).send("Mot de passe incorrect");
            }

            req.session.user = utilisateur[0];
            res.redirect("/programmeTV");
        });
    }

}

module.exports = new ComptUserControls;