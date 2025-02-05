/**
 * ProgrammeTv
 * @class ProgrammeTv
 * @constructor
 * @param {number} id - The id of the programme
 * @param {string} name - The name of the programme
 * @param {string} description - The description of the programme
 * @param {string} dateDiffusion - The date of diffusion of the programme
 * @param {string} heureDebut - The start time of the programme
 * @method getId - Get the id of the programme
 * @method getName - Get the name of the programme
 * @method getDescription - Get the description of the programme
 * @method getDateDiffusion - Get the date of diffusion of the programme
 * @method getHeureDebut - Get the start time of the programme
 * @method setId - Set the id of the programme
 * @method setName - Set the name of the programme
 * @method setDescription - Set the description of the programme
 * @method setDateDiffusion - Set the date of diffusion of the programme
 * @method setHeureDebut - Set the start time of the programme
 * @example
 * let programme = new ProgrammeTv(1, 'Programme 1', 'Description 1', '2021-01-01', '20:00');
 * programme.getId(); // 1
 * programme.getName(); // 'Programme 1'
 * programme.getDescription(); // 'Description 1'
 * programme.getDateDiffusion(); // '2021-01-01'
 * programme.getHeureDebut(); // '20:00'
 * programme.setId(2);
 * programme.setName('Programme 2');
 * programme.setDescription('Description 2');
 * programme.setDateDiffusion('2021-01-02');
 * programme.setHeureDebut('21:00');
 */

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