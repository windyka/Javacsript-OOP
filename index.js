function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log('move');
  };
}

Circle.prototype.draw = function() {
  console.log('draw');
};

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
  return 'Circle with radius = ' + this.radius;
};
// call method 1 ------------------------
// write in the console;
// c1.toString()
// "Circle with radius = 1"
// --------------------------------------

// call method 2 ------------------------
// write in the console;
// c1.move()
//     draw
//     move
// --------------------------------------
