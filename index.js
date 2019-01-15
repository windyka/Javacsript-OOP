function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(1);
// write in console;
// s
// Shape {}
// c
// Circle {radius: 1}
// c.draw()
//  draw
// undefined
// c.duplicate()
//  duplicate
// undefined
