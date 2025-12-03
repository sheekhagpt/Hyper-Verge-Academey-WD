// Define the Following Callback Functions:

// isEven(num) - returns true if the number is even

// isOdd(num) - returns true if the number is odd

// isPerfectSquare(num) - returns true if the number is a perfect square



// Call the Function:

// Call the higher-order function to calculate:

// Sum of even numbers from 1 to 100

// Sum of odd numbers from 1 to 50

// Sum of perfect squares from 1 to 200



// Print all three totals.

function filterAndSumNumbers(start, end, conditionCallback) {
 
 let total = 0
 for (let num = start; num <= end; num++){
  if(conditionCallback(num)){
    total +=num
  }   
 }
 return total;
}
function isEven(num){
  return num%2 === 0
}
function isOdd(num){
  return num%2 !==0
}
function isPerfectSquare(num){
  for(let i=1; i*i <= num; i++){
    if(i*i === num){
      return true
    }
  }
  return false
}
const sumEven = filterAndSumNumbers(1, 100, isEven)
const sumOdd = filterAndSumNumbers(1, 50, isOdd)
const sumSquare = filterAndSumNumbers(1, 200, isPerfectSquare)
console.log(sumEven)
console.log(sumOdd)
console.log(sumSquare)