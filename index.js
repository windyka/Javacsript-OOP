// Factory Functions -------------------------
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('Draw');
    }
  };
}

const circle = createCircle(1);
// ------------------------------------------

// Constructor Functions --------------------
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('Draw!');
  };
}

const another = new Circle(1);
// write in console: Circle // output
// ƒ Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//       console.log('Draw!');
//     };
//   }
