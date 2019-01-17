class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle('red', 1);
// output
// c
// Circle {color: "red", radius: 1}
// color: "red"
// radius: 1
// __proto__: Shape
//  constructor: class Circle
//  draw: ƒ draw()
//  __proto__: Object

// we cannot call the other constructor that we extend to parent class
// we can use only by call super method
