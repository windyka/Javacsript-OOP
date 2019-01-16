const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('move', this);
    });
  }

  draw() {
    _move.get(this)();

    console.log('draw');
  }
}

const c = new Circle(1);
// output
// c.draw()
//  move Circle {}__proto__: Object
//  draw
// undefined
