// Write a function that takes a value as argument
// Return the type of the value

function myFunction(a) {
  return typeof a;
}

console.log(myFunction(1)); // 'number'
console.log(myFunction(false)); // 'boolean'
console.log(myFunction({})); // 'object'
console.log(myFunction(null)); // 'object'
console.log(myFunction("string")); // 'string'
console.log(myFunction(["array"])); // 'object'
