const Hero = require('./Hero');

class Warrior extends Hero{
    constructor() {
        super();
        this.rage = 0;
    }
    takeDamage(n) {
        super.takeDamage(n);
        this.rage += 1;
    }
}

module.exports = Warrior;