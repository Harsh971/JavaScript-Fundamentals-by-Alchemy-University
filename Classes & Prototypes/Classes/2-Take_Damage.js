class Hero {
    constructor() {
        this.health = 50;        
    }
    takeDamage(n)
    {
        this.health -= n;
    }
}

module.exports = Hero;