// We want to check if a given object matches a set of rules provided in the blueprint.

// The blueprint is an object.

// The blueprint contains keys that must be present in the given object.

// The value for each key in the blueprint is a string showing the type we expect for that key’s value in the given object (like "number", "boolean", "string", "object").

// The given object must have all the keys from the blueprint, and each value must be of the correct type.



// Your Task:

// Write a function validateObject(blueprint, givenObject) that:

// Returns true if givenObject matches the rules in blueprint.

// Returns false if givenObject is missing a key from blueprint or if a value is not the correct type.



// Example 1: Matches the blueprint → returns true

// Blueprint:

// { a: "number", b: "boolean" }
// Given Object:

// { a: 1, b: true


// Reason:

// a exists in the given object as mentioned in the blueprint, and contains a value 1 which is a number, as mentioned in the blueprint.

// b exists in the given object as mentioned in the blueprint, and contains a value true which is a boolean, as mentioned in the blueprint.

// All rules match, hence it returns true.



// Example 2: Does not match → returns false

// Blueprint:

// { a: "number", b: "boolean" }
// Given Object:

// { a: 1, b: 2 }


// Reason:

// a exists in the given object as mentioned in the blueprint, and contains a value 1 which is a number, as mentioned in the blueprint.

// b exists in the given object as mentioned in the blueprint, but contains a value 2 which is a number. This does not match as mentioned in the blueprint.

// Since one of the rules does not match, it returns false.

function validateObject(blueprint, givenObject) {
  for (let key in blueprint) {
    if (!(key in givenObject)) {
      return false;
    }
    if (typeof givenObject[key] !== blueprint[key]) {
      return false;
    }
  }
  return true;
}
let blueprint1 = { a: "number", b: "boolean" };
let obj1 = { a: 1, b: true };
console.log(validateObject(blueprint1, obj1));