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
            console.log("Tous les champs sont requis");
            return res.status(400).send('Tous les champs sont requis');
        }

        let passwordHash;
        // Hashage du mot de passe
        if (password === password2) {
            passwordHash = bycrypt.hashSync(password, 10);
        }else {
            console.log("Les mots de passe ne correspondent pas");
            return res.status(400).send('Les mots de passe ne correspondent pas');
        }

        this.utilisateur.addUtilisateur(nom, prenom, email, dateNaissance, passwordHash,  (err) => {
            if (err) {
                console.log("Erreur lors de l'ajout");
                return res.status(500).send('Erreur lors de l\'ajout');
            }
            res.redirect("/connexion");
        });
    }

    // Connexion d'un utilisateur
    connexionUtilisateurs(req, res){
        const { email, password } = req.body;

        if(!email || !password) {
            console.log("Tous les champs sont requis");
            return res.status(400).send('Tous les champs sont requis');
        }

        this.utilisateur.getEmailUtilisateur(email, (err, utilisateur) => {
            if (err) {
                console.log("Erreur lors de l'importation des information.");
                return res.status(500).send("Erreur lors de l'importation des information.");
            }

            if (utilisateur.length === 0) {
                console.log("Utilisateur non trouvé");
                return res.status(404).send("Utilisateur non trouvé");
            }

            if (!bycrypt.compareSync(password, utilisateur[0].password)) {
                console.log("Mot de passe incorrect");
                return res.status(401).send("Mot de passe incorrect");
            }

            req.session.user = utilisateur[0];
            console.log("L'utilsateur est connecté");
            console.log("Connexion réussie");
            res.redirect("/profil");
        });
    }

}

module.exports = new ComptUserControls;