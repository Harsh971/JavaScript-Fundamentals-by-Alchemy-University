const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        makeFood(food)
        .then(result => this.isReady = true)
        .catch((error) => {
            this.error = error;
        })
    }
}

module.exports = Order;