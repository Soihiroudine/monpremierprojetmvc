const db = require("../server/config/db");

class Membre {
    constructor() {}

    // Ajout de membre dans la base de données
    addMembre(nom, prenom, travail, callback) {
        db.query(
            "INSERT INTO membre(nom, prenom, travail) VALUES (?, ?, ?);", 
            [nom, prenom, travail],
            (err, res) =>{
                if (err){
                    return callback(err, null);
                }
                callback(null, res);
        });
    }

    // Récupération de tous les membres depuis la base de données
    getMembres(callback){
        db.query("SELECT * FROM membre;", (err, res) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, res);
        });
    }
}

module.exports = Membre;