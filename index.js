// Step 1 -----------------------------------
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('Draw!');
//   };
// }

// const Circle1 = new Function(
//   'radius',
//   ` this.radius = radius;
//     this.draw = function() {
//       console.log('Draw!');
//     }
// `
// );

// const circle = new Circle1(1);
// // output
// // circle
// // {radius: 1, draw: ƒ}
// // draw: ƒ ()
// // radius: 1
// // __proto__: Object

// const another = new Circle(1);
// --------------------------------------------------

// Step 2 -------------------------------------------
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('Draw!');
  };
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);
