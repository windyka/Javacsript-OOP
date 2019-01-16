function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItems = function(item) {
    this.items.push(item);
  };

  this.removeItem = function() {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
// write in console
// const s = new HtmlSelectElement()
//  undefined
// s
//  HtmlSelectElement {items: Array(0), addItems: ƒ, removeItem: ƒ}addItems: ƒ (item)items: []removeItem: ƒ ()__proto__: HtmlElementclick: ƒ ()__proto__: focus: ƒ ()constructor: ƒ HtmlElement()__proto__: Object
// s.click()
//  clicked
//  undefined
// s.focus()
//  focused

HtmlSelectElement.prototype.constructor = HtmlSelectElement;
