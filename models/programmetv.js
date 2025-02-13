const db = require("../server/config/db");

class ProgrammeTv{
    constructor(){}

    // Ajout de programme TV dans la base de données
    addProgramme(name, description, dateDiffusion, heureDebut, callback) {
        db.query(
            "INSERT INTO programmetv(nom, description, date_diffusion, heure_diffusion) VALUES (?, ?, ?, ?);",
            [name, description, dateDiffusion, heureDebut],
            (err, res) => {
                if(err) {
                    return callback(err, null);
                }
                callback(null, res);
        });
    }

    // Récupération de tous les programmes TV depuis la base de données
    getProgrammes(callback) {
        db.query("SELECT * FROM programmetv;", (err, res) => {
            if (err) {
                return callback(err, null)
            }
            callback(null, res);
        });
    }
}

module.exports = ProgrammeTv;