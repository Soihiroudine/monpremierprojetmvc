const db = require("../server/config/db");

class ProgrammeTv{
    constructor(){}

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