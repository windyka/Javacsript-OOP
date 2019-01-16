const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_draw]() {}
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
// write in console;
// 1
// c
// Circle {Symbol(): 1}Symbol(): 1__proto__: constructor: class CircleSymbol(): ƒ [_draw]()__proto__: Object
