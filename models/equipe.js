const db = require("../server/config/db");

class Equipe{
    constructor(){}

    addEquipe(id, nom, idMembre, idProgramme) {
        db.query(
            "INSERT INTO equipe(id, nom, id_membre, id_programmetv) VALUES (?, ?, ?, ?);",
            [id, nom, idMembre, idProgramme],
            (err, res) => {
                if (err) {
                    return err
                }
        });
    }

    getEquipes(){
        db.query("SELECT * FROM equipe;", (err, res) => {
            if (err) {
                return err;
            }
        });
    }
}

module.exports = Equipe;