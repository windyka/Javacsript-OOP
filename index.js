// Iterate or Enumerating Properties

// Step 1 --------------------------
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

// for (let key in circle) {
//   console.log(key);
// }
// output
// radius         // index.js:14
// draw           // index.js:14
// ----------------------------------

// Step 2 ---------------------------
// for (let key in circle) {
//   console.log(key, circle[key]);
// }
// output
// radius 10
// index.js:23 draw ƒ () {
//   console.log('draw');
// }
// ----------------------------------

// Step 3 ---------------------------
for (let key in circle) {
  if (typeof circle[key] !== 'function') console.log(key, circle[key]);
}
// output
// radius 10          // index.js:34
// ----------------------------------
const keys = Object.keys(circle);
console.log(keys);
// output
// (2) ["radius", "draw"]
// 0: "radius"
// 1: "draw"
// length: 2
// __proto__: Array(0)
if ('radius' in circle) console.log('Circle has a radius');
// output
// Circle has a radius
