// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {};
    this.position.x = x;
    this.position.y = y;
}
Shape.prototype.move = function(a,b) {
    // move the shape
    this.position.x += a;
    this.position.y += b;
}

module.exports = Shape;