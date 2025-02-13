const db = require("../server/config/db");

class ComptUtilisateur {
    constructor() {}

    // Ajout de l'utilisateur dans la base de données
    addUtilisateur(nom, prenom, email, password, date_naissance, callback) {
        db.query(
            "INSERT INTO utilisateur(nom, prenom, email, password, date_naissance) VALUES (?, ?, ?, ?);",
            [nom, prenom, email, password, date_naissance],
            (err, res) => {
                if(err) {
                    return callback(err, null);
                }
                callback(null, res);
        });
    }

    // Récupération de l'utilisateur depuis la base de données en fonction de l'email et du mot de passe
    getUtilisateur(email, callback) {
        db.query("SELECT * FROM utilisateur WHERE email = ?;", [email], (err, res) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, res);
        });
    }

    // Récupération de tous les utilisateurs depuis la base de données
    getUtilisateurs(callback) {
        db.query("SELECT * FROM utilisateur;", (err, res) => {
            if (err) {
                return callback(err, null)
            }
            callback(null, res);
        });
    }

    
}

module.exports = ComptUtilisateur;