const Hero = require('./Hero');

class Warrior extends Hero{
    constructor() {
        super();
        this.rage = 0;
    }
}

module.exports = Warrior;