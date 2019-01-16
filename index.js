// Resetting Constructor

//  Step 1 -------------------------------------------
// function Shape() {}

// Shape.prototype.duplicate = function() {
//   console.log('duplicate');
// };

// function Circle(radius) {
//   this.radius = radius;
// }

// // Circle.prototype = Object.create(Shape.prototype);

// Circle.prototype.draw = function() {
//   console.log('draw');
// };

// const s = new Shape();
// const c = new Circle(1);
// // write in console;
// // c
// // Circle {radius: 1}radius: 1__proto__: draw: ƒ ()constructor: ƒ Circle(radius)__proto__: Object
// // new Circle.prototype.constructor(1)
// // Circle {radius: 1}
// // new Circle(1)
// // Circle {radius: 1}
// ---------------------------------------------------

//  Step 2 -------------------------------------------
// function Shape() {}

// Shape.prototype.duplicate = function() {
//   console.log('duplicate');
// };

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);

// Circle.prototype.draw = function() {
//   console.log('draw');
// };

// const s = new Shape();
// const c = new Circle(1);
// // write in console;
// // c
// // Circle {radius: 1}radius: 1__proto__: Shapedraw: ƒ ()__proto__: duplicate: ƒ ()constructor: ƒ Shape()__proto__: Object
// // new Circle.prototype.constructor()
// // Shape {}
// ----------------------------------------------------

//  Step 3 -------------------------------------------
function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(1);
// write in console;
// c
// Circle {radius: 1}radius: 1__proto__: Shapeconstructor: ƒ Circle(radius)draw: ƒ ()__proto__: duplicate: ƒ ()constructor: ƒ Shape()__proto__: Object
// new Circle.prototype.constructor(1)
// Circle {radius: 1}

// WHENEVER YOU RESET A PROTOTYPE, AS A BEST PRACTICE MAKE SURE TO RESET THE CONSTRUCTOR AS WELL
// ---------------------------------------------------------------------------------------------
