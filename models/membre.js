const db = require("../server/config/db");

class Membre {
    constructor() {}

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