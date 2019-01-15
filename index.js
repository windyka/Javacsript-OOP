function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log('move');
  };
}

const c1 = new Circle(1);

// Prototype member
Circle.prototype.draw = function() {
  console.log('draw');
};

// Return instance member
console.log(Object.keys(c1));

// Return all members
for (let key in c1) console.log(key);

// so the Prototype member doesn't have the own property
