// Create a function called subtract that takes two numbers and returns their difference.

// Create another function called add that takes two numbers and returns their sum.

// Create a function called calculate that takes two numbers and a function as input. It should call the function using the two numbers that are passed.

// Call the calculate function with:

// 4, 10 and the subtract function

// 4, 10 and the add function

function subtract (n, m){
  return n-m;
}
function add (a, b){
  return a+b;
}
function calculate (p, q, fn){
  return fn(p, q)
}
console.log(calculate(4, 10, subtract))
console.log(calculate(4, 10, add))