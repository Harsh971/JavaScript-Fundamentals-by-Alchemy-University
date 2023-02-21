/* Warrior.js */
const Hero = require('./Hero');

class Warrior extends Hero{
    constructor(health) {
        super(health);
        this.rage = 0;
    }
    takeDamage(n) {
        super.takeDamage(n);
        this.rage += 1;
    }
}

module.exports = Warrior;

/* Hero.js */
class Hero {
    constructor(health) {
        this.health = health;        
    }
    takeDamage(n)
    {
        this.health -= n;
    }
}

module.exports = Hero;