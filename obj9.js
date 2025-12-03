// Create a "laptop" object that contains a nested "specs" object, which in turn contains a nested "processor" object with a brand and model. Print the processor brand.

let laptop = {
  specs : {
    processor : {
      brand : "Dell",
      model : "HPIA"
    }
  }
}
console.log(laptop.specs.processor.brand)