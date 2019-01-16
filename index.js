class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {};
  }
  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);
// Class Constructor function is working on the job create a new operator
