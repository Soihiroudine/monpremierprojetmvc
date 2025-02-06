
import { Membre } from "./membre.js"
import { ProgrammeTv } from "./programmetv.js";

class Equipe{
    constructor(id, name){
        this.id = id;
        this.nome = name;
        this.membres = [];
        this.programmes = [];
    }

    // Ajout des méthodes get

    getId(){
        return this.id;
    }

    getNom(){
        return this.nome;
    }

    getMembres(){
        return this.membres;
    }

    getProgrammes(){
        return this.programmes;
    }

    // Ajout des méthodes set

    setId(id){
        this.id = id;
    }

    setName(name){
        this.nome = name;
    }

    // Ajout des méthodes pour les membres

    /**
     * @param {Array<Membre>} membres
     */
    setMembres(membres){
        this.membres = membres;
    }

    addMembre(nomMembre, prenomMembre, travailMembre){
        let idMembre = this.membres.length + 1;
        while(this.getMembreById(idMembre) !== undefined) {
            idMembre++;
        }
        const nouveauMembre = new Membre(idMembre, nomMembre, prenomMembre, travailMembre);
        return this.membres.push(nouveauMembre);
    }

    /**
     * @param {string} nomMembre 
     */
    removeMembre(idMembre){
        return this.membres = this.membres.filter(membre => membre.getId() !== idMembre);
    }

    /**
     * @param {int} id 
     * @returns idmembre
     */
    getMembreById(idMembre){
        return this.membres.find(membre => membre.getId() === idMembre);
    }

    // Ajout des méthodes pour les programmes

    /**
     * @param {Array<this.programmes>} programmes 
     */
    setProgrammes(programmes){
        this.programmes = programmes;
    }

    //TODO - regarder la dateProgramme * type date (annee/mois/jour)
    //TODO - regarder heureProgramme * type date.getHours() et minute
    addProgramme(nomProgramme, desProgramme, dateProgramme, heureProgramme){
        let idProgramme = this.programmes.length + 1;
        while(this.getProgrammeById(idProgramme) !== undefined) {
            idProgramme++;
        }
        const nouveauProgramme = new ProgrammeTv(idProgramme, nomProgramme, desProgramme, dateProgramme, heureProgramme);
        this.programmes.push(nouveauProgramme);
    }

    removeProgramme(idprogramme){
        return this.programmes = this.programmes.filter(programme => programme.getId() !== idprogramme);
    }

    getProgrammeById(idprogramme){
        return this.programmes.find(programme => programme.getId() === idprogramme);
    }
}

export { Equipe };