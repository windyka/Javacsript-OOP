// 12- Getters and Setters
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log('draw'); // output => draw
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error('Invalid location');

      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();
// output
// Uncaught Error: Invalid location
// at Circle.set (index.js:25)
// at index.js:33
