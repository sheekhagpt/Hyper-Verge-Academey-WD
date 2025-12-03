// Create a higher-order function applyFunction that takes a number and a function.

// Call applyFunction using each of the three callback functions. Print the results.

function doubles(a){
  return a*2
}
function square(m){
  return m*m
}
function triple(n){
  return n*3
}
function applyFunctio(num, fn){
  return fn(num)
}
console.log(applyFunctio(3, doubles))
console.log(applyFunctio(3, square))
console.log(applyFunctio(3, triple))