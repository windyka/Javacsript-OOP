// <this> is pointed to an Object

// Strict mode
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw();
// output is
// undefined
// because by default our classes are executed in strict mode
// to prevent us from accidentally modifying the global object
