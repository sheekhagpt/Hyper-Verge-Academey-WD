// We want to create a Product class that represents an item with a name and a price, and allows applying a discount and tax in a chained way.

// The class should store:

// The name of the product.

// The price of the product.

// It should have methods that update the price and return the same object so that multiple methods can be called one after another in a chain.



// Your Task:

// Define a class Product with:

// A constructor that takes name and price and stores them.

// A method discount(percent) that reduces the price by the given percentage and returns the same object.

// A method tax(percent) that increases the price by the given percentage and returns the same object.

// Create an object p1 using new Product("Bag", 2000).

// Call the methods in a chain to:

// Apply a 10% discount.

// Then apply a 5% tax.

// Log the final price to the console.



// Output for the above example should be 1890. Calculation: 2000 → 10% off = 1800 → 5% tax = 1890

class Product {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  discount(percent){
    this.price = this.price - (this.price * percent / 100);
    return this;
  }
  tax(percent){
    this.price = this.price + (this.price * percent / 100);
    return this;
  }
}
let p1 = new Product("Bag", 2000);
p1.discount(10).tax(5);
console.log(p1.price);