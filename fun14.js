//  Define a Higher-Order Function

// Different products or services often follow different discount rules - for example, groceries may have flat discounts, electronics may use tiered discounts, and subscriptions might offer seasonal discounts. To handle this variety, you’ll create a higher-order function that takes a custom discount rule as a callback.



// Write a function calculateFinalPrice(amount, customDiscount) that:

// Takes two arguments:

// amount: the total bill amount

// customDiscount: a callback function that defines how much discount to apply

// Calls the customDiscount function with the amount to get the discount amount

// Subtracts the discount from the original amount

// Returns the final amount after discount



// This structure allows the same function to be reused for different discount rules by simply changing the callback.

// You don’t need to define any callback in this challenge - just write the calculateFinalPrice function so someone else can pass their own logic.

function calculateFinalPrice(amount, customDiscount) {
  const discount = customDiscount(amount)
  const finalAmount = amount - discount 
  return finalAmount
}