const db = require("../server/config/db");

class Equipe{
    constructor(){}

    addEquipe(id, nom, idMembre, idProgramme, callback) {
        db.query(
            "INSERT INTO equipe(id, nom, id_membre, id_programmetv) VALUES (?, ?, ?, ?);",
            [id, nom, idMembre, idProgramme],
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