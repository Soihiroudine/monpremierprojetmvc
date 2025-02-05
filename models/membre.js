/**
 * Membre
 * @class Membre
 * @property {number} id - Identifiant du membre
 * @property {string} nom - Nom du membre
 * @property {string} prenom - Prénom du membre
 * @property {string} travail - Travail du membre
 * @method getId - Retourne l'identifiant du membre
 * @method getNom - Retourne le nom du membre
 * @method getPrenom - Retourne le prénom du membre
 * @method getTravail - Retourne le travail du membre
 * @method setId - Modifie l'identifiant du membre
 * @method setNom - Modifie le nom du membre
 * @method setPrenom - Modifie le prénom du membre
 * @method setTravail - Modifie le travail du membre
 * @example
 * let membre = new Membre(1, 'Nom', 'Prenom', 'Travail');
 * membre.getId(); // 1
 * membre.getNom(); // 'Nom'
 * membre.getPrenom(); // 'Prenom'
 * membre.getTravail(); // 'Travail'
 * membre.setId(2);
 * membre.setNom('Nom 2');
 * membre.setPrenom('Prenom 2');
 * membre.setTravail('Travail 2');
 */
class Membre {
    constructor(id, nom, prenom, travail) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.travail = travail;
    }

    /**
     * @returns {number} id
     */
    getNom() {
        return this.nom;
    }

    /**
     * @returns {string} nom
     */
    getPrenom() {
        return this.prenom;
    }

    /**
     * @returns {string} travail
     */
    getTravail() {
        return this.travail;
    }

    /**
     * @returns {number} id
     */
    getId() {
        return this.id;
    }

    /**
     * @param {string} nom 
     */
    setNom(nom) {
        this.nom = nom;
    }

    /**
     * @param {string} prenom 
     */
    setPrenom(prenom) { 
        this.prenom = prenom; 
    }

    /**
     * @param {string}} travail 
     */
    setTravail(travail) {
        this.travail = travail;
    }

    /**
     * @param {int} id 
    */
    setId(id) {
        this.id = id;
    }
}