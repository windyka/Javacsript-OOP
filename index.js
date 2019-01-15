// Object.getPrototypeOf(myObj);

// myObj.__proto__(parent of myObj)
// same as
// Constructor.prototype()

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype;

const circle = new Circle(1);

// write in the console:
// -----------------------------
// circle
// Circle {radius: 1}
// radius: 1
// __proto__: Object
// -----------------------------
// Circle.prototype
// {constructor: ƒ}
// constructor: ƒ Circle(radius)
// __proto__: Object
// -----------------------------
