// We want to calculate the area of different shapes using classes.

// Each shape will be defined as its own class.

// Each class will store the dimensions of that shape, like radius, length, breadth, base, height.

// Each class will have an area method that calculates and returns its own area using the stored dimensions.

// The computeArea function will not contain any formulas, it will simply call the area method of the given shape object.



// Your Task:

// Define three classes

// Circle — constructor takes radius, has an area method that returns π × radius²

// Rectangle — constructor takes length and breadth, has an area method that returns length × breadth

// Triangle — constructor takes base and height, has an area method that returns (base × height) ÷ 2

// Define a function computeArea(shape)

// It takes a shape object created from any of the above classes (or equivalent)

// It calls the area method of the shape object

// It returns the result

// Create at least one object from each class using sample data

// Call computeArea with each shape object and print the results

class Circle{
  constructor(radius){
    this.radius = radius;
  }
  area(){
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle{
  constructor(length, breadth){
    this.length = length;
    this.breadth = breadth;
  }
  area(){
    return this.length * this.breadth;
  }
}
class Triangle{
  constructor(base, height){
    this.base = base;
    this.height = height;
  }
  area(){
    return (this.base * this.height) / 2
  }
}
function computeArea(shape) {
  return shape.area()
}
const circle = new Circle(5);
const rectangle = new Rectangle(4,5);
const triangle = new Triangle (3,5);
console.log("Circle Area:", computeArea(circle));
console.log("Rectangle Area:", computeArea(rectangle));
console.log("Triangle Area:", computeArea(triangle));