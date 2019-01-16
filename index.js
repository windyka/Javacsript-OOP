// Step 1 ---------------------------------------------

// const canEat = {
//   eat: function() {
//     this.hunger--;
//     console.log('eating');
//   }
// };

// const canWalk = {
//   walk: function() {
//     console.log('walking');
//   }
// };

// function Person() {}

// Object.assign(Person.prototype, canEat, canWalk);
// const person = new Person();
// console.log(person);
// output
// Person {}
// __proto__:
// eat: ƒ ()
// walk: ƒ ()
// constructor: ƒ Person()
// __proto__: Object
// --------------------------------------------------

// Step 2 -------------------------------------------

// const canEat = {
//   eat: function() {
//     this.hunger--;
//     console.log('eating');
//   }
// };

// const canWalk = {
//   walk: function() {
//     console.log('walking');
//   }
// };

// const canSwim = {
//   swim: function() {
//     console.log('swim');
//   }
// };

// function Person() {}

// Object.assign(Person.prototype, canEat, canWalk);

// const person = new Person();
// console.log(person);

// function Goldfish() {}

// Object.assign(Goldfish.prototype, canEat, canSwim);

// const goldfish = new Goldfish();
// console.log(goldfish);
// // Output
// // Person {}
// // Goldfish {}
// ----------------------------------------------------

// Step 3 (Mixin) -------------------------------------

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swim');
  }
};

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
// console.log(goldfish);
// // Output
// // Person {}
// // Goldfish {}
// ----------------------------------------------------
