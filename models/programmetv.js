
class ProgrammeTv{
    constructor(id, name, description, dateDiffusion, heureDebut){
        this.id = id;
        this.name = name;
        this.description = description;
        this.dateDiffusion = dateDiffusion;
        this.heureDebut = heureDebut;
    }

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
        return this.name;
    }

    /**
     * @returns {string} description
     */
    getDescription(){
        return this.description;
    }

    /**
     * @returns {string} dateDiffusion
     */
    getDateDiffusion(){
        return this.dateDiffusion;
    }

    /**
     * @returns {string} heureDebut
     */
    getHeureDebut(){
        return this.heureDebut;
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
        this.name = name;
    }

    /**
     * @param {string} description
     */
    setDescription(description){
        this.description = description;
    }

    /**
     * @param {string} dateDiffusion
     */
    setDateDiffusion(dateDiffusion){
        this.dateDiffusion = dateDiffusion;
    }

    /**
     * @param {string} heureDebut
     */
    setHeureDebut(heureDebut){
        this.heureDebut = heureDebut;
    }
}

export { ProgrammeTv };