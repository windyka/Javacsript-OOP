//
class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log('circle move');
  }
}

const c = new Circle();
// write in console;
// c
// Circle {}__proto__: Shapeconstructor: class Circlemove: ƒ move()__proto__: Object
// c.move()
//   move
//   circle move
//   undefined
