// Create a higher-order function applyMath that takes a number and a function.

// Use applyMath with cube and with an anonymous function that doubles a number.

function cube(n){
  return n*n*n
}
function half(n){
  return n/2
}
function applyMath(num, fn){
 return fn(num)
}
console.log(applyMath(4, cube))
console.log(applyMath(4,function(n){
  return n*2
}))