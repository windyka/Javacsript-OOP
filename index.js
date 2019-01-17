// Implementing gettet && setter by the easier ways and clean code by with ES6 Classes
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid Radius');
    _radius.set(this, value);
  }
}

const c = new Circle(1);
// write in console;
// c.radius
// 1
// c.radius = 10
// 10
// c.radius
// 10
// c.radius = -2
//   Uncaught Error: Invalid Radius
//     at Circle.set radius [as radius] (index.js:13)
//     at <anonymous>:1:10
// set radius @ index.js:13
// (anonymous) @ VM309:1
// c.radius
// 10
