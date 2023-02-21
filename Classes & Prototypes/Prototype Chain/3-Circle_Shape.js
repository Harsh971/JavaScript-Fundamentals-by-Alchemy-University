const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this,x,y /* pass arguments to shape */);
    // store radius on this
    this.radius = radius;
}

module.exports = Circle;