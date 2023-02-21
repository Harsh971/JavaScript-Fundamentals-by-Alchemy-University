const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x,y /* pass arguments to shape */);
    this.height = height;
    this.width = width;
}
Rectangle.prototype = Object.create(Shape.prototype);
module.exports = Rectangle;