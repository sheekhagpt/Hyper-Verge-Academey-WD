// We want to create a calculator where all operations are stored inside an object.

// This object will have keys like "add", "sub", "mul", "div", and the values will be methods that perform those operations.

// The calculate function will find the correct method in the object and run it, instead of using multiple if...else or switch statements.

// If the method is not found in the object or is not a function, it should return null.



// Your Task:

// Define an operations object containing at least these methods:

// add — returns the sum of two numbers.

// sub — returns the difference between two numbers.

// mul — returns the product of two numbers.

// div — returns the quotient of two numbers. If the second number is 0, return null.

// Define a function calculate(ops, opKey, a, b):

// Arguments explained:

// ops: The object that stores all operation methods.

// opKey: The name of the method in ops that we want to run.

// a and b: The numbers on which we want to run the method given by opKey.

// What the function should do:

// Check if opKey exists in ops and is a function.

// If yes, call that method with a and b and return the result.

// If no, return null.

// Call the calculate function at least three times:

// Once with a valid operation like "add".

// Once with another valid operation like "mul".

// Once with an invalid operation name to check if it returns null.

const operations = {
  add: function(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    if (b === 0) return null;
    return a / b;
  }
};
function calculate(ops, opKey, a, b) {
  if (opKey in ops && typeof ops[opKey] === "function") {
    return ops[opKey](a, b); 
  }
  return null;  
}
console.log(calculate(operations, "add", 5, 3));
console.log(calculate(operations, "mul", 4, 2));
console.log(calculate(operations, "pow", 2, 3));