// Differrence between Instance method vs Static Method

// Instance method have an acces to the instance Object
// Static method only accesed on it self

// Instance method Example;-------------------------------
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {}
}

const Circle = new Circle(1);
console.log('circle');
// ------------------------------------------------------

// Static class example; --------------------------------
class Math2 {
  static abs(value) {}
}

Math2.abs();
// ------------------------------------------------------
