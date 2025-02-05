/**
 * Equipe
 * @class Equipe
 * @property {number} id - Identifiant de l'équipe
 * @property {string} name - Nom de l'équipe
 * @property {Array<Membre>} membres - Liste des membres de l'équipe
 * @property {Array<ProgrammeTV>} programmes - Liste des programmes de l'équipe
 * @method getId - Retourne l'identifiant de l'équipe
 * @method getName - Retourne le nom de l'équipe
 * @method getMembres - Retourne la liste des membres de l'équipe
 * @method getProgrammes - Retourne la liste des programmes de l'équipe
 * @method setId - Modifie l'identifiant de l'équipe
 * @method setName - Modifie le nom de l'équipe
 * @method setMembres - Modifie la liste des membres de l'équipe
 * @method addMembre - Ajoute un membre à l'équipe
 * @method removeMembre - Supprime un membre de l'équipe
 * @method getMembreById - Retourne un membre de l'équipe par son identifiant
 * @method getMembreByName - Retourne un membre de l'équipe par son nom
 * @method getMembreByPrenom - Retourne un membre de l'équipe par son prénom    
 * @method getMembreByTravail - Retourne un membre de l'équipe par son travail
 * @method setProgrammes - Modifie la liste des programmes de l'équipe
 * @method addProgramme - Ajoute un programme à l'équipe
 * @method removeProgramme - Supprime un programme de l'équipe
 * @method getProgrammeById - Retourne un programme de l'équipe par son identifiant
 * @method getProgrammeByName - Retourne un programme de l'équipe par son nom
 * @example
 * let equipe = new Equipe(1, 'Equipe 1');
 * equipe.getId(); // 1
 * equipe.getName(); // 'Equipe 1'
 * equipe.getMembres(); // []
 * equipe.getProgrammes(); // []
 * equipe.setId(2);
 * equipe.setName('Equipe 2');
 * equipe.setMembres([membre1, membre2]);
 * equipe.addMembre(membre3);
 * equipe.removeMembre(membre1);
 * equipe.getMembreById(1);
 * equipe.getMembreByName('Membre 1');
 * equipe.getMembreByPrenom('Prenom 1');
 * equipe.getMembreByTravail('Travail 1');
 * equipe.setProgrammes([programme1, programme2]);
 * equipe.addProgramme(programme3);
 * equipe.removeProgramme(programme1);
 * equipe.getProgrammeById(1);
 * equipe.getProgrammeByName('Programme 1');
 * 
 */
class Equipe{
    constructor(id, name){
        this.id = id;
        this.nome = name;
        this.membres = [];
        this.programmes = [];
    }

    // Ajout des méthodes get

    /**
     * @returns {number} id
     */
    getId(){
        return this.id;
    }

    /**
     * @returns {string} name
     */
    getName(){
        return this.nome;
    }

    /**
     * @returns {Array<Membre>} membres
    */
    getMembres(){
        return this.membres;
    }

    /**
     * @returns {Array<ProgrammeTV>} programmes
    */
    getProgrammes(){
        return this.programmes;
    }

    // Ajout des méthodes set

    /**
     * @param {number} id
     */
    setId(id){
        this.id = id;
    }

    /**
     * @param {string} name
    */
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

    /**
     * @param {int} idmembre 
     */
    addMembre(idmembre){
        this.membres.push(idmembre);
    }

    /**
     * @param {int} idmembre 
     */
    removeMembre(idmembre){
        this.membres = this.membres.filter(m => m.getId() !== idmembre);
    }

    /**
     * @param {int} id 
     * @returns idmembre
     */
    getMembreById(id){
        return this.membres.find(m => m.getId() === id);
    }

    // Ajout des méthodes pour les programmes

    /**
     * @param {Array<ProgrammeTV>} programmes 
     */
    setProgrammes(programmes){
        this.programmes = programmes;
    }

    /**
     * @param {int} idprogramme 
     */
    addProgramme(idprogramme){
        this.programmes.push(idprogramme);
    }

    /**
     * @param {int} idprogramme 
     */
    removeProgramme(idprogramme){
        this.programmes = this.programmes.filter(p => p.getId() !== idprogramme);
    }

    /**
     * @param {int} id 
     * @returns idprogramme
     */
    getProgrammeById(id){
        return this.programmes.find(p => p.getId() === id);
    }

    
}