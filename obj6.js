// Create a class called "Car" with properties brand and model, and a method drive that logs "Driving..." to the console. Then create an object "car1" from this class with brand "Toyota" and model "Camry".

class Car {
  constructor (brand, model){
    this.brand = brand;
    this.model = model;
  }
  drive(){
    console.log("Driving...")
  }
}
let car1 = new Car("Toyota", "Camry")