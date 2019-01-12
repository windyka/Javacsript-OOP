// Abstraction in Javascript are Hide the detail -
// and only expose the essential:

// Example;
function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function(factor) {};

  this.draw = function() {
    this.computeOptimumLocation(0.1);

    console.log('draw');
  };
}

const circle = new Circle(10);
circle.draw();
