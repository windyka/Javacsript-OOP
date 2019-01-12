// Adding or Removing Properties

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(10);

const propertyName = 'location';
const propertyColor = 'background-color';

circle[propertyName] = { x: 1 };
circle[propertyColor] = { color1: 'yellow' };
// write in console: circle
// output
// circle
// Circle {radius: 10, draw: ƒ, location: {…}, background-color: {…}}
// background-color: {color1: "yellow"}
// draw: ƒ ()
// location: {x: 1}
// radius: 10
// __proto__: Object

// if we want to Delete a property of an object,
// we can using delete.prop
// Example:
delete circle.location;
// write in console: circle
// output
// circle
// Circle {radius: 10, draw: ƒ, background-color: {…}}
// background-color: {color1: "yellow"}
// draw: ƒ ()
// radius: 10
// __proto__: Object
