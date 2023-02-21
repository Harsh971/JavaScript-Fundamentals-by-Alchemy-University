const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x,y /* pass arguments to shape */);
    this.height = height;
    this.width = width;
}
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.flip = function() {
    const h = this.height;
    const w = this.width;
    this.height = w;
    this.width = h;
}

module.exports = Rectangle;