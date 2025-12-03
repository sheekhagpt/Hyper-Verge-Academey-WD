// Imagine you are running a gardening business. Customers want to build gardens of different shapes - circles, rectangles, or triangles.

// The total cost of building a garden has two parts:

// Soil cost – depends on the area of the garden and the type of soil used. Different soils (like Loamy or Sandy) have different costs per square meter.

// Fence cost – depends on the perimeter of the garden and the type of fence used. Different fences (like Wooden or Iron) have different costs per meter.

// The dimensions of the garden (like radius, length, breadth, or sides of a triangle) will be given.

// Your task is to calculate the final cost by combining both soil and fence costs.

// To do this, you will create shape classes that can calculate their area and perimeter.



// Your Task
// Shape Classes

// Each shape must have methods for area and perimeter

// Circle - constructor takes radius

// area() → returns area of the circle

// perimeter() → returns circumference

// Rectangle - constructor takes length and breadth

// area() → returns length × breadth

// perimeter() → returns 2 × (length + breadth)

// Triangle - constructor takes three sides a, b, c

// area() → returns area using Heron’s formula

// perimeter() → returns a + b + c



// Helper Classes

// SoilType - constructor takes name, costPerSqM.

// A SoilType object stores the soil name and its cost per square meter.

// Example: "Loamy Soil", 50 → Loamy Soil costs 50 per square meter

// FenceType - constructor takes name, costPerMeter.

// A FenceType object stores the fence name and its cost per meter.

// Example: "Wooden Fence", 20 → Wooden Fence costs 20 per meter



// Garden Cost Function

// Write a function:

// function computeGardenCost(shape, soilType, fenceType)
// This function should:

// Take three arguments:

// shape → any shape object (Circle, Rectangle, or Triangle)

// soilType → a SoilType object that stores the soil name and its cost per square meter

// fenceType → a FenceType object that stores the fence name and its cost per meter

// Use the shape’s area along with the soil’s cost to calculate the soil cost.

// Use the shape’s perimeter along with the fence’s cost to calculate the fence cost.

// Add the soil cost and the fence cost to get the total garden cost.

// Return the total cost.



// Call the Function

// Call the function computeGardenCost to calculate:

// The cost of building a Circle garden with radius 3

// The cost of building a Rectangle garden with length 4 and breadth 2

// Choose any soil and fence type. For example:

// Soil → Loamy Soil, 50 per sq. meter

// Fence → Wooden Fence, 20 per meter

// Print the results.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    return this.length * this.breadth;
  }
  perimeter() {
    return 2 * (this.length + this.breadth);
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  perimeter() {
    return this.a + this.b + this.c;
  }
  area() {
    let s = this.perimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

class SoilType {
  constructor(name, costPerSqM) {
    this.name = name;
    this.costPerSqM = costPerSqM;
  }
}

class FenceType {
  constructor(name, costPerMeter) {
    this.name = name;
    this.costPerMeter = costPerMeter;
  }
}

function computeGardenCost(shape, soilType, fenceType) {
  return shape.area() * soilType.costPerSqM + shape.perimeter() * fenceType.costPerMeter;
}

const circle = new Circle(3);
const rectangle = new Rectangle(4, 2);
const soil = new SoilType("Loamy Soil", 50);
const fence = new FenceType("Wooden Fence", 20);

console.log(computeGardenCost(circle, soil, fence));
console.log(computeGardenCost(rectangle, soil, fence));