// Difference Primitives and References Types

// Primitives Example; --------------------
// const numbers = 10;

// function increase(numbers) {
//   numbers++;
// }

// increase(numbers);
// console.log(numbers); // output => 10
// ----------------------------------------

// Reference Example; ---------------------
const numbers = { value: 10 };

function increase(numbers) {
  numbers.value++;
}

increase(numbers);
console.log(numbers); // output => {value: 11}
// -----------------------------------------||
//     PRIMITIVES VS REFERENCE              ||
// -----------------------------------------||
// Value Types;   ||    // Reference Types; ||
// String         ||    // Object           ||
// Number         ||    // Function         ||
// Boolean        ||    // Array            ||
// Symbol         ||                        ||
// Undefined      ||                        ||
// Null           ||                        ||
// -----------------------------------------||

// **** PRIMITIVES ARE COPIED BY THEIR VALUE **** //
// **** OBJECT IS COPIED BY THEIR REFERENCE **** //
