const db = require("../server/config/db");

class Equipe{
    constructor(){}

    addEquipe(nom, idMembre, idProgramme, callback) {
        db.query(
            "INSERT INTO equipe(nom, id_membre, id_programmetv) VALUES (?, ?, ?, ?);",
            [nom, idMembre, idProgramme],
            (err, res) => {
                if (err) {
                    return callback(err, null);
                }
                callback(null, res);
        });
    }

    getEquipes(callback){
        db.query("SELECT * FROM equipe;", (err, res) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, res);
        });
    }
}

module.exports = Equipe;