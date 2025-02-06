
class Membre {
    constructor(id, nom, prenom, travail) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.travail = travail;
    }

    getId() {
        return this.id;
    }

    getNom() {
        return this.nom;
    }

    getPrenom() {
        return this.prenom;
    }

    getTravail() {
        return this.travail;
    }

    setNom(nom) {
        this.nom = nom;
    }

    setPrenom(prenom) { 
        this.prenom = prenom; 
    }

    setTravail(travail) {
        this.travail = travail;
    }
}

export { Membre };