function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log('draw');
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Circle;

const s = new Shape();
const c = new Circle(1, 'red');
//  write in the console; -------------------
// Step 1 -----------------------------------
// c
// Circle {color: "red", radius: 1}
// ------------------------------------------
// Step 2 -----------------------------------
// const sq = new Square(10)
// > undefined
// sq.duplicate()
// > duplicate
// undefined
// ------------------------------------------
