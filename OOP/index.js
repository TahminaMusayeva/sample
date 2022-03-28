//Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);

// difference between primitives(value types) & objects(reference types)

let x = 10;
let y = x;

x = 20; // x = 20, y = 10

let a = { value: 10 };
let b = a;

a.value = 20; // a = 20, b = 20

//adding & deleting properties

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const propertyName = "location";
circle[propertyName] = { x: 1 };

delete circle.location; // circle['location']

//iterating properties

for (let key in circle) {
  console.log(key, circle[key]);
}

if ("radius" in circle) console.log("bubu");

//Making methods & properties private

this.location = { x: 0 }; //not private, is accessible
let location = { x: 0 }; //private

//making private properties readable

let location = { x: 0 };

this.getLocation = function () {
  return location;
};

//or better

Object.defineProperty(this, location, {
  get: function () {
    return location;
  },
  set: function (value) {
    location = value;
  },
});
