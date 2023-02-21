const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, function (age) {
        this.age = age;
    }.bind(this),1);
}

module.exports = Celebrity;